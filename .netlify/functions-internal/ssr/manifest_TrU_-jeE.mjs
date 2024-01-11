import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import './chunks/astro_7xzJp0sh.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    })
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.zjCbv0E3.js"}],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.zjCbv0E3.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.PeQeddfk.css"}],"routeData":{"route":"/portfolio","type":"page","pattern":"^\\/portfolio\\/?$","segments":[[{"content":"portfolio","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/portfolio.astro","pathname":"/portfolio","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const s=document.getElementById(\"modal\"),c=document.getElementById(\"contact-button\"),l=document.getElementById(\"close-contact-button\"),a=document.getElementsByTagName(\"body\")[0],m=document.getElementById(\"modal-overlay\");function g(n){n.forEach(o=>{o.addEventListener(\"click\",d=>{d.preventDefault(),s.classList.toggle(\"hidden\"),a.classList.toggle(\"stop-scrolling\")})})}g([c,l,m]);const t=document.getElementById(\"menu-btn\"),i=document.getElementById(\"responsive-menu\");t.addEventListener(\"click\",()=>{t.classList.toggle(\"open\"),i.classList.toggle(\"hidden\")});const e=\"shadow-lg\";window.scrollY<10?document.getElementById(\"header\").classList.remove(e):document.getElementById(\"header\").classList.add(e);window.addEventListener(\"scroll\",()=>{window.scrollY<10?document.getElementById(\"header\").classList.remove(e):document.getElementById(\"header\").classList.add(e)});\n"},{"type":"external","value":"/_astro/page.zjCbv0E3.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.PeQeddfk.css"},{"type":"inline","content":".hamburger[data-astro-cid-3ef6ksr2]{cursor:pointer;width:24px;height:24px;transition:all .25s;position:relative}.hamburger-top[data-astro-cid-3ef6ksr2],.hamburger-middle[data-astro-cid-3ef6ksr2],.hamburger-bottom[data-astro-cid-3ef6ksr2]{position:absolute;top:0;left:0;width:24px;height:2px;background:#000;transform:rotate(0);transition:all .5s}.hamburger-middle[data-astro-cid-3ef6ksr2]{transform:translateY(7px)}.hamburger-bottom[data-astro-cid-3ef6ksr2]{transform:translateY(14px)}.open[data-astro-cid-3ef6ksr2]{transform:rotate(90deg);transform:translateY(0)}.open[data-astro-cid-3ef6ksr2] .hamburger-top[data-astro-cid-3ef6ksr2]{transform:rotate(45deg) translateY(6px) translate(6px)}.open[data-astro-cid-3ef6ksr2] .hamburger-middle[data-astro-cid-3ef6ksr2]{display:none}.open[data-astro-cid-3ef6ksr2] .hamburger-bottom[data-astro-cid-3ef6ksr2]{transform:rotate(-45deg) translateY(6px) translate(-6px)}html{font-size:20px}.stop-scrolling{height:100%;overflow:hidden}\n"}],"routeData":{"route":"/about","type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const s=document.getElementById(\"modal\"),c=document.getElementById(\"contact-button\"),l=document.getElementById(\"close-contact-button\"),a=document.getElementsByTagName(\"body\")[0],m=document.getElementById(\"modal-overlay\");function g(n){n.forEach(o=>{o.addEventListener(\"click\",d=>{d.preventDefault(),s.classList.toggle(\"hidden\"),a.classList.toggle(\"stop-scrolling\")})})}g([c,l,m]);const t=document.getElementById(\"menu-btn\"),i=document.getElementById(\"responsive-menu\");t.addEventListener(\"click\",()=>{t.classList.toggle(\"open\"),i.classList.toggle(\"hidden\")});const e=\"shadow-lg\";window.scrollY<10?document.getElementById(\"header\").classList.remove(e):document.getElementById(\"header\").classList.add(e);window.addEventListener(\"scroll\",()=>{window.scrollY<10?document.getElementById(\"header\").classList.remove(e):document.getElementById(\"header\").classList.add(e)});\n"},{"type":"external","value":"/_astro/page.zjCbv0E3.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.PeQeddfk.css"},{"type":"inline","content":".hamburger[data-astro-cid-3ef6ksr2]{cursor:pointer;width:24px;height:24px;transition:all .25s;position:relative}.hamburger-top[data-astro-cid-3ef6ksr2],.hamburger-middle[data-astro-cid-3ef6ksr2],.hamburger-bottom[data-astro-cid-3ef6ksr2]{position:absolute;top:0;left:0;width:24px;height:2px;background:#000;transform:rotate(0);transition:all .5s}.hamburger-middle[data-astro-cid-3ef6ksr2]{transform:translateY(7px)}.hamburger-bottom[data-astro-cid-3ef6ksr2]{transform:translateY(14px)}.open[data-astro-cid-3ef6ksr2]{transform:rotate(90deg);transform:translateY(0)}.open[data-astro-cid-3ef6ksr2] .hamburger-top[data-astro-cid-3ef6ksr2]{transform:rotate(45deg) translateY(6px) translate(6px)}.open[data-astro-cid-3ef6ksr2] .hamburger-middle[data-astro-cid-3ef6ksr2]{display:none}.open[data-astro-cid-3ef6ksr2] .hamburger-bottom[data-astro-cid-3ef6ksr2]{transform:rotate(-45deg) translateY(6px) translate(-6px)}html{font-size:20px}.stop-scrolling{height:100%;overflow:hidden}\n"}],"routeData":{"route":"/faqs","type":"page","pattern":"^\\/faqs\\/?$","segments":[[{"content":"faqs","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/faqs.astro","pathname":"/faqs","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Пользователь/Documents/GitHub/astro/src/pages/[...slug].astro",{"propagation":"none","containsHead":true}],["C:/Users/Пользователь/Documents/GitHub/astro/src/pages/about.astro",{"propagation":"none","containsHead":true}],["C:/Users/Пользователь/Documents/GitHub/astro/src/pages/faqs.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/faqs.astro":"chunks/pages/faqs_raYasiYU.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_05UstaYH.mjs","/src/pages/portfolio.astro":"chunks/pages/portfolio_5jbXOUP_.mjs","/src/pages/[...slug].astro":"chunks/prerender_YKQpW74E.mjs","\u0000@astrojs-manifest":"manifest_TrU_-jeE.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_alaiqqMy.mjs","\u0000@astro-page:src/pages/portfolio@_@astro":"chunks/portfolio_kclowLJ_.mjs","\u0000@astro-page:src/pages/about@_@astro":"chunks/about_7OZ05o9x.mjs","\u0000@astro-page:src/pages/faqs@_@astro":"chunks/faqs_fHtllsqn.mjs","\u0000@astro-page:src/pages/[...slug]@_@astro":"chunks/_.._Pl98vgKe.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.7EYeaVoQ.js","astro:scripts/page.js":"_astro/page.zjCbv0E3.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/qr.EKyjJYOQ.svg","/_astro/_slug_.PeQeddfk.css","/favicon.svg","/_astro/page.zjCbv0E3.js","/_astro/page.zjCbv0E3.js"]});

export { manifest };
