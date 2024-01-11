import * as adapter from '@astrojs/netlify/ssr-function.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_G6LJhrO8.mjs';

const _page0  = () => import('./chunks/generic_bEtd56uB.mjs');
const _page1  = () => import('./chunks/portfolio_xUcFOoam.mjs');
const _page2  = () => import('./chunks/about_Ux6cMapH.mjs');
const _page3  = () => import('./chunks/faqs_R7YSmYCn.mjs');
const _page4  = () => import('./chunks/_..__M5dt_G9.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/portfolio.astro", _page1],["src/pages/about.astro", _page2],["src/pages/faqs.astro", _page3],["src/pages/[...slug].astro", _page4]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = undefined;

const _exports = adapter.createExports(_manifest, _args);
const _default = _exports['default'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { _default as default, pageMap };
