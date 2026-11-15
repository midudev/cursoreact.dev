import assert from 'node:assert/strict'
import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { resolve, join } from 'node:path'
import { CLASES } from '../src/consts.ts'
const walk = path => readdirSync(path, { withFileTypes: true }).flatMap(entry => entry.isDirectory() ? walk(join(path, entry.name)) : [join(path, entry.name)])
const files = walk('dist')
const sitePages = files.filter(path => path.endsWith('.html') && !path.includes('/demos/'))
const canonicals = new Set()
for (const page of sitePages) {
  const html = readFileSync(page, 'utf8')
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `${page}: one h1`)
  const canonical = html.match(/rel="canonical" href="([^"]+)"/)
  assert.ok(canonical, `${page}: canonical`)
  assert.ok(!canonical[1].endsWith('.html'), `${page}: canonical without .html`)
  assert.ok(!canonicals.has(canonical[1]), `${page}: unique canonical`)
  canonicals.add(canonical[1])
  for (const [, href] of html.matchAll(/(?:href|src)="(\/[^"?#]*)(?:[?#][^"]*)?"/g)) {
    if (href.startsWith('//')) continue
    const target = resolve('dist', href.slice(1))
    assert.ok(existsSync(target) || existsSync(`${target}.html`) || existsSync(join(target, 'index.html')), `${page}: missing ${href}`)
  }
}
let words = 0
for (const lesson of CLASES) {
  assert.ok(existsSync(`src/clases/${lesson.slug}.mdx`), `${lesson.slug}: article`)
  const transcript = JSON.parse(readFileSync(`src/data/transcripts/${lesson.slug}.json`, 'utf8'))
  assert.equal(transcript.videoId, lesson.id)
  assert.ok(transcript.segments.length > 30, `${lesson.slug}: complete transcript`)
  assert.ok(transcript.segments.every((s,i,a) => i === 0 || s.start >= a[i-1].start))
  words += transcript.segments.reduce((n,s) => n + s.text.split(/\s+/).length, 0)
  assert.ok(existsSync(`dist${lesson.web}index.html`), `${lesson.slug}: local demo`)
  const html = readFileSync(`dist/${lesson.slug}.html`, 'utf8')
  const blocks = (html.match(/<pre(?:\s|>)/g) || []).length
  assert.equal((html.match(/class="code-copy"/g) || []).length, blocks, `${lesson.slug}: copy buttons`)
  assert.ok(html.includes('autoplay=1') && html.includes('mute=1'), `${lesson.slug}: autoplay`)
}
for (const [, slug] of readFileSync('README.md','utf8').matchAll(/https:\/\/cursoreact.dev\/demos\/([^/)]+)\//g)) {
  assert.ok(existsSync(`dist/demos/${slug}/index.html`), `README demo: ${slug}`)
}
assert.ok(!readFileSync('README.md','utf8').includes('surge.sh'))
assert.ok(existsSync('dist/404.html'), 'custom 404 page')
assert.ok(existsSync('dist/_headers'), 'Cloudflare _headers')
assert.ok(!readFileSync('dist/sitemap-0.xml', 'utf8').includes('/404'), 'sitemap without 404')
console.log(`${CLASES.length} articles and complete transcripts (${words} words), ${sitePages.length} site pages; local links, demos, metadata and code buttons verified.`)
