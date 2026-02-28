import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const segments = url.pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  const secondSegment = segments[1];

  if (firstSegment in ui) return firstSegment as keyof typeof ui;
  if (secondSegment in ui) return secondSegment as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    const base = import.meta.env.BASE_URL.replace(/\/$/, '');
    return `${base}/${l}${path.startsWith('/') ? path : '/' + path}`;
  }
}
