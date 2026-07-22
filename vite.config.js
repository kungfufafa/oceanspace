import { copyFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/** SPA routes that need a physical shell on hosts without URL rewrite (LiteSpeed). */
const SPA_ROUTES = [
  'about',
  'career',
  'career-apply',
  'contact',
  'distribusi',
  'lifestyle',
  'retail',
  'sub-retail',
]

function spaRouteShells() {
  return {
    name: 'spa-route-shells',
    closeBundle() {
      const dist = join(process.cwd(), 'dist')
      const indexHtml = join(dist, 'index.html')
      for (const route of SPA_ROUTES) {
        const dir = join(dist, route)
        mkdirSync(dir, { recursive: true })
        copyFileSync(indexHtml, join(dir, 'index.html'))
      }
      // Custom 404 → same SPA shell (backup when rewrite / ErrorDocument works)
      copyFileSync(indexHtml, join(dist, '404.html'))
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), spaRouteShells()],
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: 'react-vendor',
              test: /node_modules[\\/](react|react-dom|scheduler)([\\/]|$)/,
              priority: 30,
            },
            {
              name: 'router-vendor',
              test: /node_modules[\\/]react-router/,
              priority: 20,
            },
            {
              name: 'icons-vendor',
              test: /node_modules[\\/]@heroicons[\\/]/,
              priority: 20,
            },
            {
              name: 'vendor',
              test: /node_modules/,
              priority: 10,
            },
          ],
        },
      },
    },
  },
})
