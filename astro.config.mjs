import { defineConfig } from 'astro/config';

const repository = process.env.GITHUB_REPOSITORY;
const [owner, repoName] = repository?.split('/') ?? [];
const isUserSite = owner && repoName?.toLowerCase() === `${owner.toLowerCase()}.github.io`;

export default defineConfig({
  site: process.env.SITE_URL ?? (owner ? `https://${owner}.github.io` : 'http://localhost:4321'),
  base: process.env.SITE_BASE ?? (repoName && !isUserSite ? `/${repoName}` : '/'),
  output: 'static',
  trailingSlash: 'always',
});
