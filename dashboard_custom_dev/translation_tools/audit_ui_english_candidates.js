#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const rootDir = '/Users/huangzx/workspace/ceph';
const appDir = path.join(rootDir, 'src/pybind/mgr/dashboard/frontend/src/app');
const reportPath = path.join(rootDir, 'dashboard_custom_dev/dashboard_ui_i18n_scan_20260325.md');

const allowedExt = new Set(['.html', '.ts']);
const ignoredSegments = new Set([
  'node_modules',
  'dist',
  'dist.bak.1773713670',
  'models',
  'services',
  'pipes'
]);

const ignoredFileSuffixes = [
  '.spec.ts',
  '.service.ts',
  '.pipe.ts',
  '.module.ts',
  '.routing.ts'
];

const htmlAttrRegex =
  /\b(label|title|placeholder|helperText|buttonText|aria-label|cdRequiredField|cdOptionalField|submitText)\s*=\s*"([^"]*[A-Za-z][^"]*)"/g;
const tsLiteralRegex =
  /\b(label|title|titleText|buttonText|submitText|description|helperText|resource|name)\s*:\s*'([^']*[A-Za-z][^']*)'/g;
const htmlTextRegex = />([^<{}]*[A-Za-z][^<{}]*)</g;

const ignoreTextPatterns = [
  /^\s*$/,
  /^[A-Z0-9_./:-]+$/,
  /{{/,
  /^\s*(true|false|null|undefined)\s*$/i,
  /^\s*(cds|cd-|ng-|app-)/,
  /^\s*(http|https):\/\//i,
  /^\s*[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+$/,
  /^\s*\(\w+\)\s*$/,
  /^\s*[A-Za-z_][A-Za-z0-9_]*\s*$/,
  /^\s*rgb/i
];

function shouldIgnoreFile(filePath) {
  if (!allowedExt.has(path.extname(filePath))) {
    return true;
  }
  if (ignoredFileSuffixes.some((suffix) => filePath.endsWith(suffix))) {
    return true;
  }
  return filePath
    .split(path.sep)
    .some((segment) => ignoredSegments.has(segment));
}

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!ignoredSegments.has(entry.name)) {
        files.push(...walk(fullPath));
      }
      continue;
    }
    if (!shouldIgnoreFile(fullPath)) {
      files.push(fullPath);
    }
  }
  return files;
}

function getModuleKey(filePath) {
  const relative = path.relative(appDir, filePath);
  const parts = relative.split(path.sep);
  return parts.slice(0, Math.min(2, parts.length - 1)).join('/') || 'root';
}

function isIgnoredText(text) {
  const normalized = text.replace(/\s+/g, ' ').trim();
  if (!normalized) {
    return true;
  }
  return ignoreTextPatterns.some((pattern) => pattern.test(normalized));
}

function pushCandidate(candidates, filePath, lineNo, kind, key, text, lineText) {
  const normalized = text.replace(/\s+/g, ' ').trim();
  if (isIgnoredText(normalized)) {
    return;
  }
  candidates.push({
    module: getModuleKey(filePath),
    filePath,
    lineNo,
    kind,
    key,
    text: normalized,
    lineText: lineText.trim()
  });
}

function scanHtml(filePath, content, candidates) {
  const lines = content.split('\n');
  lines.forEach((line, index) => {
    if (/i18n/.test(line)) {
      return;
    }

    let match;
    while ((match = htmlAttrRegex.exec(line))) {
      pushCandidate(candidates, filePath, index + 1, 'html-attr', match[1], match[2], line);
    }
    htmlAttrRegex.lastIndex = 0;

    while ((match = htmlTextRegex.exec(line))) {
      pushCandidate(candidates, filePath, index + 1, 'html-text', 'text', match[1], line);
    }
    htmlTextRegex.lastIndex = 0;
  });
}

function scanTs(filePath, content, candidates) {
  const lines = content.split('\n');
  lines.forEach((line, index) => {
    if (line.includes('$localize')) {
      return;
    }
    let match;
    while ((match = tsLiteralRegex.exec(line))) {
      pushCandidate(candidates, filePath, index + 1, 'ts-literal', match[1], match[2], line);
    }
    tsLiteralRegex.lastIndex = 0;
  });
}

function sortCandidates(candidates) {
  return candidates.sort((a, b) => {
    if (a.module !== b.module) return a.module.localeCompare(b.module);
    if (a.filePath !== b.filePath) return a.filePath.localeCompare(b.filePath);
    return a.lineNo - b.lineNo;
  });
}

function buildReport(candidates) {
  const grouped = new Map();
  for (const item of candidates) {
    if (!grouped.has(item.module)) {
      grouped.set(item.module, []);
    }
    grouped.get(item.module).push(item);
  }

  const lines = [];
  lines.push('# Dashboard UI 英文残留候选扫描');
  lines.push('');
  lines.push(`- 扫描时间: ${new Date().toISOString()}`);
  lines.push(`- 扫描范围: \`src/pybind/mgr/dashboard/frontend/src/app\``);
  lines.push(`- 候选总数: ${candidates.length}`);
  lines.push('- 说明: 这是“高概率直接暴露到 UI 的英文文本候选”，不是最终缺陷结论。');
  lines.push('');

  for (const [module, items] of grouped.entries()) {
    lines.push(`## ${module}`);
    lines.push('');
    items.slice(0, 40).forEach((item) => {
      const relativePath = path.relative(rootDir, item.filePath);
      lines.push(
        `- [${relativePath}:${item.lineNo}] ${item.kind} ${item.key}: \`${item.text}\``
      );
    });
    if (items.length > 40) {
      lines.push(`- ... 其余 ${items.length - 40} 条同模块候选省略`);
    }
    lines.push('');
  }

  return `${lines.join('\n')}\n`;
}

const files = walk(appDir);
const candidates = [];

for (const filePath of files) {
  const content = fs.readFileSync(filePath, 'utf8');
  if (filePath.endsWith('.html')) {
    scanHtml(filePath, content, candidates);
  } else if (filePath.endsWith('.ts')) {
    scanTs(filePath, content, candidates);
  }
}

const sorted = sortCandidates(candidates);
const report = buildReport(sorted);
fs.writeFileSync(reportPath, report, 'utf8');

console.log(`files=${files.length}`);
console.log(`candidates=${sorted.length}`);
console.log(`report=${reportPath}`);
