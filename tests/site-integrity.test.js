import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

describe('ASPIRE Data & Route Integrity Tests', () => {
  it('should have valid course data with unique slugs and required fields', async () => {
    const { coursesData } = await import('../src/data/coursesData.js');
    assert.ok(Array.isArray(coursesData), 'coursesData must be an array');
    assert.ok(coursesData.length >= 5, 'Should have at least 5 primary courses');

    const slugs = new Set();
    for (const course of coursesData) {
      assert.ok(course.id, `Course ${course.title} must have an ID`);
      assert.ok(course.slug, `Course ${course.title} must have a slug`);
      assert.ok(!slugs.has(course.slug), `Duplicate slug detected: ${course.slug}`);
      slugs.add(course.slug);

      assert.ok(course.title && course.title.length >= 3, `Invalid title for course ${course.id}`);
      assert.ok(course.curriculum && course.curriculum.length > 0, `Course ${course.id} must have curriculum topics`);
      assert.ok(course.duration, `Course ${course.id} must define duration`);
      assert.ok(course.features && course.features.length > 0, `Course ${course.id} must list key features`);
    }
  });

  it('should have valid faculty data without crashes or placeholders', async () => {
    const { facultyData } = await import('../src/data/facultyData.js');
    assert.ok(Array.isArray(facultyData), 'facultyData must be an array');
    assert.ok(facultyData.length >= 4, 'Should have at least 4 faculty members');

    for (const member of facultyData) {
      assert.ok(member.name, 'Faculty member must have a name');
      assert.ok(member.subject, `Faculty member ${member.name} must have a subject`);
      assert.ok(member.degree, `Faculty member ${member.name} must have degree/qualifications`);
      assert.ok(member.experience, `Faculty member ${member.name} must state experience`);
      assert.ok(member.specialization, `Faculty member ${member.name} must state specialization`);
    }
  });

  it('should have valid results & testimonials data', async () => {
    const { resultsData } = await import('../src/data/resultsData.js');
    const { testimonialsData } = await import('../src/data/testimonialsData.js');

    assert.ok(Array.isArray(resultsData), 'resultsData must be an array');
    for (const res of resultsData) {
      assert.ok(res.studentName, 'Result must have a studentName');
      assert.ok(res.score, 'Result must have a score/rank');
      assert.ok(res.exam, 'Result must have an exam');
    }

    assert.ok(Array.isArray(testimonialsData), 'testimonialsData must be an array');
    for (const t of testimonialsData) {
      assert.ok(t.name, 'Testimonial must have a name');
      assert.ok(t.quote && t.quote.length > 10, 'Testimonial must have meaningful quote');
      assert.ok(t.rating >= 4, 'Rating should be 4 or 5 stars');
    }
  });

  it('should have all necessary production SEO and deployment files', () => {
    const robotsPath = path.join(rootDir, 'public', 'robots.txt');
    const sitemapPath = path.join(rootDir, 'public', 'sitemap.xml');
    const manifestPath = path.join(rootDir, 'public', 'site.webmanifest');
    const vercelConfigPath = path.join(rootDir, 'vercel.json');
    const cloudflareRedirectsPath = path.join(rootDir, 'public', '_redirects');
    const cloudflareHeadersPath = path.join(rootDir, 'public', '_headers');
    const nodeVersionPath = path.join(rootDir, '.node-version');
    const wranglerConfigPath = path.join(rootDir, 'wrangler.toml');

    assert.ok(fs.existsSync(robotsPath), 'robots.txt must exist in public/');
    assert.ok(fs.existsSync(sitemapPath), 'sitemap.xml must exist in public/');
    assert.ok(fs.existsSync(manifestPath), 'site.webmanifest must exist in public/');
    assert.ok(fs.existsSync(vercelConfigPath), 'vercel.json must exist in root');
    assert.ok(fs.existsSync(cloudflareRedirectsPath), '_redirects must exist in public/ for Cloudflare Pages SPA routing');
    assert.ok(fs.existsSync(cloudflareHeadersPath), '_headers must exist in public/ for Cloudflare Pages security & caching');
    assert.ok(fs.existsSync(nodeVersionPath), '.node-version must exist for Cloudflare build environment');
    assert.ok(fs.existsSync(wranglerConfigPath), 'wrangler.toml must exist for Cloudflare Pages config');

    const redirectsContent = fs.readFileSync(cloudflareRedirectsPath, 'utf8');
    assert.ok(redirectsContent.includes('/*    /index.html   200'), '_redirects must route /* to /index.html 200');

    const headersContent = fs.readFileSync(cloudflareHeadersPath, 'utf8');
    assert.ok(headersContent.includes('X-Frame-Options'), '_headers must include security headers');

    const robotsContent = fs.readFileSync(robotsPath, 'utf8');
    assert.ok(robotsContent.includes('Sitemap:'), 'robots.txt must specify sitemap location');

    const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
    assert.ok(sitemapContent.includes('<loc>https://aspirelearningcentre.com/</loc>'), 'sitemap must include homepage');
    assert.ok(sitemapContent.includes('<loc>https://aspirelearningcentre.com/courses/jee</loc>'), 'sitemap must include JEE');
  });
});
