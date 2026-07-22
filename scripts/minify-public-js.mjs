import { readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { build } from 'esbuild'

const jsDir = join(process.cwd(), 'dist', 'js')

async function minifyDir(dir) {
  let entries
  try {
    entries = readdirSync(dir)
  } catch {
    console.warn(`skip minify: ${dir} missing`)
    return
  }

  for (const name of entries) {
    const full = join(dir, name)
    if (!statSync(full).isFile() || !name.endsWith('.js')) continue
    await build({
      entryPoints: [full],
      outfile: full,
      allowOverwrite: true,
      minify: true,
      legalComments: 'none',
      logLevel: 'silent',
    })
    console.log(`minified ${join('dist/js', name)}`)
  }
}

await minifyDir(jsDir)
