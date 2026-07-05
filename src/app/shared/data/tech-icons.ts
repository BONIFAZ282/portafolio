/**
 * Resuelve el icono de una tecnología a partir de su nombre.
 * Devuelve la ruta a un SVG (DevIcon en /public/img/tech/) o, si no hay,
 * un icono de Material como respaldo.
 *
 * Para agregar más: descarga el SVG en public/img/tech/ y añade la entrada.
 */
export interface TechInfo {
  label: string;
  /** Ruta a un SVG en /public/img/tech/. */
  img?: string;
  /** Icono de Material Icons (respaldo si no hay SVG). */
  icon?: string;
  /** True si el SVG es monocromo oscuro (se invierte en modo oscuro). */
  mono?: boolean;
}

const BASE = 'img/tech/';

const MAP: Record<string, Omit<TechInfo, 'label'>> = {
  angular: { img: 'angular.svg' },
  'angular 19': { img: 'angular.svg' },
  typescript: { img: 'typescript.svg' },
  javascript: { img: 'javascript.svg' },
  html5: { img: 'html5.svg' },
  css3: { img: 'css3.svg' },
  'css3 / scss': { img: 'css3.svg' },
  scss: { img: 'sass.svg' },
  sass: { img: 'sass.svg' },
  rxjs: { img: 'rxjs.svg' },
  'node.js': { img: 'nodejs.svg' },
  nodejs: { img: 'nodejs.svg' },
  express: { img: 'express.svg', mono: true },
  'c# / .net': { img: 'csharp.svg' },
  'c#': { img: 'csharp.svg' },
  '.net': { img: 'csharp.svg' },
  mysql: { img: 'mysql.svg' },
  postgresql: { img: 'postgresql.svg' },
  'sql server': { img: 'sqlserver.svg' },
  git: { img: 'git.svg' },
  github: { img: 'github.svg', mono: true },
  'vs code': { img: 'vscode.svg' },
  postman: { img: 'postman.svg' },
  figma: { img: 'figma.svg' },
  php: { img: 'php.svg' },
  react: { img: 'react.svg' },
  'react.js': { img: 'react.svg' },
  'react js': { img: 'react.svg' },
  android: { img: 'android.svg' },
  'android studio': { img: 'android.svg' },
  spring: { img: 'spring.svg' },
  springboot: { img: 'spring.svg' },
  'spring boot': { img: 'spring.svg' },

  // Respaldos con icono de Material (no hay SVG oficial)
  'angular material': { icon: 'widgets' },
  'rest api': { icon: 'api' },
  'rest apis': { icon: 'api' },
  'ngx-translate': { icon: 'translate' },
  'auth por roles': { icon: 'lock' },
  auth: { icon: 'lock' },
  cpanel: { icon: 'dns' },
  backend: { icon: 'dns' },
  frontend: { icon: 'web' },
  sql: { icon: 'storage' },
  'bases de datos': { icon: 'storage' },
};

export function resolveTech(name: string): TechInfo {
  const key = name.trim().toLowerCase().replace(/\s+/g, ' ');
  const found = MAP[key];
  if (!found) {
    return { label: name, icon: 'code' };
  }
  return {
    label: name,
    icon: found.icon,
    img: found.img ? BASE + found.img : undefined,
    mono: found.mono,
  };
}
