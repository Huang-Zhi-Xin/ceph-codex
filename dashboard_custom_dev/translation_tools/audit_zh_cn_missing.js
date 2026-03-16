#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const rootDir = '/Users/huangzx/workspace/ceph';
const xlfPath = path.join(
  rootDir,
  'src/pybind/mgr/dashboard/frontend/src/locale/messages.zh-CN.xlf'
);

const xml = fs.readFileSync(xlfPath, 'utf8');
const regex = /<trans-unit id="([^"]+)"[\s\S]*?<source>([\s\S]*?)<\/source>([\s\S]*?)<\/trans-unit>/g;

let total = 0;
let missing = 0;
const samples = [];

for (const match of xml.matchAll(regex)) {
  total += 1;
  const unit = match[0];
  const source = match[2].replace(/\s+/g, ' ').trim();
  if (!/<target>[\s\S]*?<\/target>/.test(unit)) {
    missing += 1;
    if (samples.length < 20) {
      samples.push({
        id: match[1],
        source
      });
    }
  }
}

console.log(`total=${total}`);
console.log(`missing=${missing}`);
console.log(`translated=${total - missing}`);

if (samples.length) {
  console.log('samples:');
  for (const sample of samples) {
    console.log(`- ${sample.id}: ${sample.source}`);
  }
}
