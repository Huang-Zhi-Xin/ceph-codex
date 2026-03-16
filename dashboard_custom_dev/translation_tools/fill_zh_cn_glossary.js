#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const xlfPath = path.resolve(
  '/Users/huangzx/workspace/ceph/src/pybind/mgr/dashboard/frontend/src/locale/messages.zh-CN.xlf'
);
const glossaryPath = path.resolve(__dirname, 'zh_cn_glossary.json');

const xlf = fs.readFileSync(xlfPath, 'utf8');
const glossary = JSON.parse(fs.readFileSync(glossaryPath, 'utf8'));

let applied = 0;

function normalizeSource(source) {
  return source.replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
}

function applyGlossaryToSource(source, normalizedTarget) {
  const normalizedSource = normalizeSource(source);
  if (!normalizedSource) {
    return null;
  }
  if (normalizedSource !== normalizeSource(normalizedSource)) {
    return null;
  }

  const exact = glossary[source];
  if (exact) {
    return exact;
  }

  const normalized = glossary[normalizedSource];
  if (!normalized) {
    return null;
  }

  if (source.includes(normalizedSource)) {
    return source.replace(normalizedSource, normalized);
  }

  return normalizedTarget || normalized;
}

const updated = xlf.replace(/<trans-unit id="[^"]+"[\s\S]*?<\/trans-unit>/g, (unit) => {
  if (/<target>[\s\S]*?<\/target>/.test(unit)) {
    return unit;
  }

  const sourceMatch = unit.match(/<source>([\s\S]*?)<\/source>/);
  if (!sourceMatch) {
    return unit;
  }

  const source = sourceMatch[1];
  const target = applyGlossaryToSource(source);
  if (!target) {
    return unit;
  }

  applied += 1;
  return unit.replace(/(<source>[\s\S]*?<\/source>)/, `$1\n        <target>${target}</target>`);
});

if (updated !== xlf) {
  fs.writeFileSync(xlfPath, updated, 'utf8');
}

console.log(`Applied ${applied} glossary translations.`);
