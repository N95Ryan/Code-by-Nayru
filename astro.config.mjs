// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import astroI18next from 'astro-i18next';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    astroI18next({
      defaultLocale: 'fr',
      locales: ['fr', 'en'],
      i18next: {
        debug: true,
        initImmediate: false,
        backend: {
          loadPath: './src/locales/{{lng}}.json',
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
