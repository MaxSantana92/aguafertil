import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, base, lang] = url.pathname.split('/');
  // Si estamos en local o en la raíz, el primer segmento después de / podría ser el idioma
  // En GitHub Pages, el primer segmento es el nombre del repo (base)
  if (base in ui) return base as keyof typeof ui;
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}
