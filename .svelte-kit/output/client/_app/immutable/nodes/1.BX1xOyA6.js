import{s as S,f as _,t as f,b as q,h as d,k as g,o as h,e as u,d as x,i as m,m as v,p as $,n as E,q as k}from"../chunks/scheduler.ox4Dc5vi.js";import{S as y,i as C}from"../chunks/index.gs1gY3dG.js";import{s as H}from"../chunks/entry.Bgib2pk-.js";const P=()=>{const s=H;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},j={subscribe(s){return P().page.subscribe(s)}};function w(s){var b;let t,r=s[0].status+"",o,n,i,p=((b=s[0].error)==null?void 0:b.message)+"",l;return{c(){t=_("h1"),o=f(r),n=q(),i=_("p"),l=f(p)},l(e){t=d(e,"H1",{});var a=g(t);o=h(a,r),a.forEach(u),n=x(e),i=d(e,"P",{});var c=g(i);l=h(c,p),c.forEach(u)},m(e,a){m(e,t,a),v(t,o),m(e,n,a),m(e,i,a),v(i,l)},p(e,[a]){var c;a&1&&r!==(r=e[0].status+"")&&$(o,r),a&1&&p!==(p=((c=e[0].error)==null?void 0:c.message)+"")&&$(l,p)},i:E,o:E,d(e){e&&(u(t),u(n),u(i))}}}function z(s,t,r){let o;return k(s,j,n=>r(0,o=n)),[o]}let F=class extends y{constructor(t){super(),C(this,t,z,w,S,{})}};export{F as component};
