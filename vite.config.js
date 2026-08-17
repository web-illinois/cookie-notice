import { defineConfig } from 'vite'
import nunjucksPlugin from 'vite-plugin-nunjucks'
import nunjucks from 'nunjucks'
import { resolve } from 'path'

const templatesDir = resolve(__dirname, 'src/web')

const env = new nunjucks.Environment(
  new nunjucks.FileSystemLoader(templatesDir),
  { noCache: true }
)

export default defineConfig({
  root: 'src/web',
  publicDir: resolve(__dirname, 'src/web'),
  plugins: [
    nunjucksPlugin({
      templatesDir,
      nunjucksEnvironment: env
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main:   resolve(__dirname, 'src/web/test/index.html'),
        uic:    resolve(__dirname, 'src/web/test/uic.html'),
        uis:    resolve(__dirname, 'src/web/test/uis.html'),
        csp:    resolve(__dirname, 'src/web/test/csp.html'),
        gtag:   resolve(__dirname, 'src/web/test/gtag.html'),
        legacy: resolve(__dirname, 'src/web/test/legacy.html'),
      }
    }
  }
})
