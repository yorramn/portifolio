import{B as y,k as l,y as w,C as v}from"./utils.B4IxvO69.js";const a=[];function x(s,t){return{subscribe:m(s,t).subscribe}}function m(s,t=l){let n=null;const o=new Set;function u(r){if(v(s,r)&&(s=r,n)){const i=!a.length;for(const e of o)e[1](),a.push(e,s);if(i){for(let e=0;e<a.length;e+=2)a[e][0](a[e+1]);a.length=0}}}function b(r){u(r(s))}function f(r,i=l){const e=[r,i];return o.add(e),o.size===1&&(n=t(u,b)||l),r(s),()=>{o.delete(e),o.size===0&&n&&(n(),n=null)}}return{set:u,update:b,subscribe:f}}function z(s,t,n){const o=!Array.isArray(s),u=o?[s]:s;if(!u.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const b=t.length<2;return x(n,(f,r)=>{let i=!1;const e=[];let d=0,p=l;const g=()=>{if(d)return;p();const c=t(o?e[0]:e,f,r);b?f(c):p=typeof c=="function"?c:l},h=u.map((c,_)=>y(c,k=>{e[_]=k,d&=~(1<<_),i&&g()},()=>{d|=1<<_}));return i=!0,g(),function(){w(h),p(),i=!1}})}function A(s){return{subscribe:s.subscribe.bind(s)}}function B(s){let t;return y(s,n=>t=n)(),t}const q=globalThis.__sveltekit_1knj1xw?.base??"/slick-portfolio-svelte-5",T=globalThis.__sveltekit_1knj1xw?.assets??q;export{x as a,q as b,T as c,z as d,B as g,A as r,m as w};
