// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import astroI18next from 'astro-i18next';
import vercel from '@astrojs/vercel/edge';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  site: 'https://code-by-nayru.vercel.app',
  integrations: [
    tailwind(),
    astroI18next({
      defaultLocale: 'fr',
      locales: ['fr', 'en'],
      i18next: {
        debug: false,
        initImmediate: false,
        backend: {
          loadPath: './src/i18n/{{lng}}.json',
        },
      },
      i18nextPlugins: { fsBackend: 'i18next-fs-backend' },
      routes: {
        fr: {
          prefixDefaultLocale: true,
        },
        en: {
          prefixDefaultLocale: true,
        },
      },
    })
  ],
  vite: {
    resolve: {
      alias: {
        '@': '/src'
      }
    },
    optimizeDeps: {
      include: ['@astrojs/astro']
    }
  }
});
