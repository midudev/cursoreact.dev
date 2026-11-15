import { readdir, mkdir, readFile, writeFile } from 'node:fs/promises'
import { spawnSync } from 'node:child_process'
import { resolve } from 'node:path'
const demos = (await readdir('demos', { withFileTypes: true })).filter(d => d.isDirectory()).map(d => d.name).sort()
for (const slug of demos) {
  const output = resolve('public/demos', slug)
  await mkdir(output, { recursive: true })
  const result = spawnSync('pnpm', ['exec', 'vite', 'build', '--base', `/demos/${slug}/`, '--outDir', output, '--emptyOutDir'], { cwd: resolve('demos', slug), stdio: 'inherit' })
  if (result.status !== 0) process.exit(result.status || 1)
  const path = resolve(output, 'index.html')
  let html = await readFile(path, 'utf8')
  html = html.replace('<head>', `<head><meta name="robots" content="noindex, follow"><meta name="theme-color" content="#10141c">`)
  html = html.replace(/(<link[^>]+rel="icon"[^>]+href=")[^"]+(")/, '$1/favicon.svg$2')
  html = html.replace('<body>', '<body><a href="/" style="position:fixed;bottom:12px;right:12px;z-index:99999;padding:8px 12px;background:#0f172a;color:white;border:1px solid #64748b;border-radius:8px;font:12px system-ui;text-decoration:none">← Curso React</a>')
  await writeFile(path, html)
}
console.log(`Built ${demos.length} local demos.`)
