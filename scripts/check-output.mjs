import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import { join } from 'node:path';

const dist = new URL('../dist/', import.meta.url);
const repository = process.env.GITHUB_REPOSITORY?.split('/') ?? [];
const owner = repository[0];
const name = repository[1];
const userSite = owner && name?.toLowerCase() === `${owner.toLowerCase()}.github.io`;
const base = process.env.SITE_BASE ?? (name && !userSite ? `/${name}` : '');
const root = `${base.replace(/\/$/, '')}/`;

for (const page of ['index.html', 'guide/index.html']) {
  const html = await readFile(new URL(page, dist), 'utf8');
  assert.match(html, /<html lang="zh-CN">/);
  assert.match(html, /<meta name="description"/);
  assert.ok(html.includes(`href="${root}guide/"`), `${page}: guide link is missing the Pages base path`);
  assert.ok(html.includes(`href="${root}favicon.svg"`), `${page}: favicon link is missing the Pages base path`);
  assert.ok(!html.includes('href="/guide/"') || root === '/', `${page}: root-only guide link in a project site`);
}

for (const asset of ['favicon.svg', 'social-card.svg']) {
  assert.ok((await stat(new URL(asset, dist))).size > 100, `${asset} is missing or empty`);
}

console.log(`Static output verified for base ${root}`);
