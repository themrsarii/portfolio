import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

function inlineCssPlugin() {
  return {
    name: 'inline-css-plugin',
    apply: 'build',
    enforce: 'post',
    generateBundle(_, bundle) {
      let cssCode = '';
      for (const [name, chunk] of Object.entries(bundle)) {
        if (name.endsWith('.css') && chunk.type === 'asset') {
          cssCode = chunk.source;
          break;
        }
      }
      if (!cssCode) return;

      const htmlChunk = bundle['index.html'];
      if (htmlChunk && htmlChunk.type === 'asset') {
        const linkRegex = /<link rel="stylesheet" crossorigin href="[^"]+\.css">/;
        if (linkRegex.test(htmlChunk.source)) {
          htmlChunk.source = htmlChunk.source.replace(linkRegex, `<style>${cssCode}</style>`);
        }
      }
    }
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    inlineCssPlugin()
  ],
  build: {
    target: 'esnext',
    cssMinify: true,
    modulePreload: {
      resolveDependencies(_filename, deps) {
        // Exclude deferred chunks from initial HTML modulepreload tags
        return deps.filter(dep => !dep.includes('vendor-other'));
      }
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('lucide-react')) {
              return 'vendor-icons';
            }
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react';
            }
            return 'vendor-other';
          }
        }
      }
    }
  }
})
