import{S as R,I as k,J as ee,K as P,L as re,b as y,M as E,U as p,g as h,O as C,P as ne,Q as te,i as J,h as se,R as Y,j,T as B,m as q,V as ie,E as ae,W as fe,X as ue,Y as le,Z as U,o as ce,_ as oe,a0 as de,w as A,a1 as _e,a2 as ve,a3 as pe,a4 as Q,a5 as he,a6 as $,a7 as T,a8 as W,a9 as be,aa as we,ab as H,ac as Pe,ad as X,ae as ye,af as ge,d as Z,H as me,ag as xe,ah as Re,v as D,ai as F,q as Ee}from"./utils.B4IxvO69.js";import{g as Ie}from"./disclose-version.joNX4SD2.js";function x(e,r=null,s){if(typeof e!="object"||e===null||R in e)return e;const a=te(e);if(a!==k&&a!==ee)return e;var t=new Map,u=J(e),o=P(0);u&&t.set("length",P(e.length));var _;return new Proxy(e,{defineProperty(l,n,i){(!("value"in i)||i.configurable===!1||i.enumerable===!1||i.writable===!1)&&re();var f=t.get(n);return f===void 0?(f=P(i.value),t.set(n,f)):y(f,x(i.value,_)),!0},deleteProperty(l,n){var i=t.get(n);if(i===void 0)n in l&&t.set(n,P(p));else{if(u&&typeof n=="string"){var f=t.get("length"),c=Number(n);Number.isInteger(c)&&c<f.v&&y(f,c)}y(i,p),G(o)}return!0},get(l,n,i){if(n===R)return e;var f=t.get(n),c=n in l;if(f===void 0&&(!c||E(l,n)?.writable)&&(f=P(x(c?l[n]:p,_)),t.set(n,f)),f!==void 0){var v=h(f);return v===p?void 0:v}return Reflect.get(l,n,i)},getOwnPropertyDescriptor(l,n){var i=Reflect.getOwnPropertyDescriptor(l,n);if(i&&"value"in i){var f=t.get(n);f&&(i.value=h(f))}else if(i===void 0){var c=t.get(n),v=c?.v;if(c!==void 0&&v!==p)return{enumerable:!0,configurable:!0,value:v,writable:!0}}return i},has(l,n){if(n===R)return!0;var i=t.get(n),f=i!==void 0&&i.v!==p||Reflect.has(l,n);if(i!==void 0||C!==null&&(!f||E(l,n)?.writable)){i===void 0&&(i=P(f?x(l[n],_):p),t.set(n,i));var c=h(i);if(c===p)return!1}return f},set(l,n,i,f){var c=t.get(n),v=n in l;if(u&&n==="length")for(var b=i;b<c.v;b+=1){var g=t.get(b+"");g!==void 0?y(g,p):b in l&&(g=P(p),t.set(b+"",g))}c===void 0?(!v||E(l,n)?.writable)&&(c=P(void 0),y(c,x(i,_)),t.set(n,c)):(v=c.v!==p,y(c,x(i,_)));var w=Reflect.getOwnPropertyDescriptor(l,n);if(w?.set&&w.set.call(f,i),!v){if(u&&typeof n=="string"){var I=t.get("length"),O=Number(n);Number.isInteger(O)&&O>=I.v&&y(I,O+1)}G(o)}return!0},ownKeys(l){h(o);var n=Reflect.ownKeys(l).filter(c=>{var v=t.get(c);return v===void 0||v.v!==p});for(var[i,f]of t)f.v!==p&&!(i in l)&&n.push(i);return n},setPrototypeOf(){ne()}})}function G(e,r=1){y(e,e.v+r)}function Ce(e,r,s,a=null,t=!1){q&&ie();var u=e,o=null,_=null,l=null,n=t?ae:0;se(()=>{if(l===(l=!!r()))return;let i=!1;if(q){const f=u.data===fe;l===f&&(u=ue(),le(u),U(!1),i=!0)}l?(o?Y(o):o=j(()=>s(u)),_&&B(_,()=>{_=null})):(_?Y(_):a&&(_=j(()=>a(u))),o&&B(o,()=>{o=null})),i&&U(!0)},n),q&&(u=ce)}function V(e,r){return e===r||e?.[R]===r}function Fe(e={},r,s,a){return oe(()=>{var t,u;return de(()=>{t=u,u=[],A(()=>{e!==s(...u)&&(r(e,...u),t&&V(s(...t),e)&&r(null,...t))})}),()=>{_e(()=>{u&&V(s(...u),e)&&r(null,...u)})}}),e}const Oe={get(e,r){if(!e.exclude.includes(r))return e.props[r]},set(e,r){return!1},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function Me(e,r,s){return new Proxy({props:e,exclude:r},Oe)}const Se={get(e,r){if(!e.exclude.includes(r))return h(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,s){return r in e.special||(e.special[r]=De({get[r](){return e.props[r]}},r,Q)),e.special[r](s),$(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},deleteProperty(e,r){return e.exclude.includes(r)||(e.exclude.push(r),$(e.version)),!0},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function Ye(e,r){return new Proxy({props:e,exclude:r,special:{},version:P(0)},Se)}const Te={get(e,r){let s=e.props.length;for(;s--;){let a=e.props[s];if(T(a)&&(a=a()),typeof a=="object"&&a!==null&&r in a)return a[r]}},set(e,r,s){let a=e.props.length;for(;a--;){let t=e.props[a];T(t)&&(t=t());const u=E(t,r);if(u&&u.set)return u.set(s),!0}return!1},getOwnPropertyDescriptor(e,r){let s=e.props.length;for(;s--;){let a=e.props[s];if(T(a)&&(a=a()),typeof a=="object"&&a!==null&&r in a){const t=E(a,r);return t&&!t.configurable&&(t.configurable=!0),t}}},has(e,r){if(r===R||r===W)return!1;for(let s of e.props)if(T(s)&&(s=s()),s!=null&&r in s)return!0;return!1},ownKeys(e){const r=[];for(let s of e.props){T(s)&&(s=s());for(const a in s)r.includes(a)||r.push(a)}return r}};function je(...e){return new Proxy({props:e},Te)}function z(e){for(var r=C,s=C;r!==null&&!(r.f&(be|we));)r=r.parent;try{return H(r),e()}finally{H(s)}}function De(e,r,s,a){var t=(s&Pe)!==0,u=!X||(s&ye)!==0,o=(s&ge)!==0,_=(s&xe)!==0,l=!1,n;o?[n,l]=Ie(()=>e[r]):n=e[r];var i=R in e||W in e,f=E(e,r)?.set??(i&&o&&r in e?d=>e[r]=d:void 0),c=a,v=!0,b=!1,g=()=>(b=!0,v&&(v=!1,_?c=A(a):c=a),c);n===void 0&&a!==void 0&&(f&&u&&ve(),n=g(),f&&f(n));var w;if(u)w=()=>{var d=e[r];return d===void 0?g():(v=!0,b=!1,d)};else{var I=z(()=>(t?Z:me)(()=>e[r]));I.f|=pe,w=()=>{var d=h(I);return d!==void 0&&(c=void 0),d===void 0?c:d}}if(!(s&Q))return w;if(f){var O=e.$$legacy;return function(d,m){return arguments.length>0?((!u||!m||O||l)&&f(m?w():d),d):w()}}var N=!1,M=!1,L=Re(n),S=z(()=>Z(()=>{var d=w(),m=h(L);return N?(N=!1,M=!0,m):(M=!1,L.v=d)}));return t||(S.equals=he),function(d,m){if(arguments.length>0){const K=m?h(S):u&&o?x(d):d;return S.equals(K)||(N=!0,y(L,K),b&&c!==void 0&&(c=K),A(()=>h(S))),d}return h(S)}}function Ae(e){D===null&&F(),X&&D.l!==null?Le(D).m.push(e):Ee(()=>{const r=A(e);if(typeof r=="function")return r})}function Be(e){D===null&&F(),Ae(()=>()=>A(e))}function Ne(e,r,{bubbles:s=!1,cancelable:a=!1}={}){return new CustomEvent(e,{detail:r,bubbles:s,cancelable:a})}function Ue(){const e=D;return e===null&&F(),(r,s,a)=>{const t=e.s.$$events?.[r];if(t){const u=J(t)?t.slice():[t],o=Ne(r,s,a);for(const _ of u)_.call(e.x,o);return!o.defaultPrevented}return!0}}function Le(e){var r=e.l;return r.u??={a:[],b:[],m:[]}}export{x as a,Fe as b,Ue as c,Be as d,Ce as i,Ye as l,Ae as o,De as p,Me as r,je as s};
