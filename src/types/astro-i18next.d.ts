declare module 'astro-i18next' {
  const astroI18next: any;
  export default astroI18next;
  export function getLocaleFromPath(path: string): string;
  export function getPathFromLocale(locale: string): string;
} 