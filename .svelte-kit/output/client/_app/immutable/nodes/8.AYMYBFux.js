import{s as D,f as u,b as _,h as c,j as p,d as x,k as I,e as v,l as C,i as b,m as d,n as S}from"../chunks/scheduler.ox4Dc5vi.js";import{S as V,i as B}from"../chunks/index.gs1gY3dG.js";function U(o){let e,a="Username and password is required.";return{c(){e=u("p"),e.textContent=a,this.h()},l(n){e=c(n,"P",{class:!0,"data-svelte-h":!0}),p(e)!=="svelte-1ar3ney"&&(e.textContent=a),this.h()},h(){C(e,"class","error")},m(n,t){b(n,e,t)},d(n){n&&v(e)}}}function j(o){let e,a="You have entered the wrong credentials.";return{c(){e=u("p"),e.textContent=a,this.h()},l(n){e=c(n,"P",{class:!0,"data-svelte-h":!0}),p(e)!=="svelte-koq2j1"&&(e.textContent=a),this.h()},h(){C(e,"class","error")},m(n,t){b(n,e,t)},d(n){n&&v(e)}}}function E(o){var H,M;let e,a="Login",n,t,m,k='<label for="username">Username</label> <input id="username" name="username" type="text" required=""/>',T,h,L='<label for="password">Password</label> <input id="password" name="password" type="password" required=""/>',g,y,w,f,q="Log in",i=((H=o[0])==null?void 0:H.invalid)&&U(),l=((M=o[0])==null?void 0:M.credentials)&&j();return{c(){e=u("h1"),e.textContent=a,n=_(),t=u("form"),m=u("div"),m.innerHTML=k,T=_(),h=u("div"),h.innerHTML=L,g=_(),i&&i.c(),y=_(),l&&l.c(),w=_(),f=u("button"),f.textContent=q,this.h()},l(r){e=c(r,"H1",{"data-svelte-h":!0}),p(e)!=="svelte-1wsy7a9"&&(e.textContent=a),n=x(r),t=c(r,"FORM",{action:!0,method:!0});var s=I(t);m=c(s,"DIV",{"data-svelte-h":!0}),p(m)!=="svelte-rgu6sd"&&(m.innerHTML=k),T=x(s),h=c(s,"DIV",{"data-svelte-h":!0}),p(h)!=="svelte-l898hr"&&(h.innerHTML=L),g=x(s),i&&i.l(s),y=x(s),l&&l.l(s),w=x(s),f=c(s,"BUTTON",{type:!0,"data-svelte-h":!0}),p(f)!=="svelte-1h04br6"&&(f.textContent=q),s.forEach(v),this.h()},h(){C(f,"type","submit"),C(t,"action","?/login"),C(t,"method","POST")},m(r,s){b(r,e,s),b(r,n,s),b(r,t,s),d(t,m),d(t,T),d(t,h),d(t,g),i&&i.m(t,null),d(t,y),l&&l.m(t,null),d(t,w),d(t,f)},p(r,[s]){var P,O;(P=r[0])!=null&&P.invalid?i||(i=U(),i.c(),i.m(t,y)):i&&(i.d(1),i=null),(O=r[0])!=null&&O.credentials?l||(l=j(),l.c(),l.m(t,w)):l&&(l.d(1),l=null)},i:S,o:S,d(r){r&&(v(e),v(n),v(t)),i&&i.d(),l&&l.d()}}}function F(o,e,a){let{form:n}=e;return o.$$set=t=>{"form"in t&&a(0,n=t.form)},[n]}class Y extends V{constructor(e){super(),B(this,e,F,E,D,{form:0})}}export{Y as component};
