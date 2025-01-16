import{t as le,i as oe}from"./utils.BGoO_23D.js";var I=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,d=e=>!e||typeof e!="object"||Object.keys(e).length===0,ie=(e,f)=>JSON.stringify(e)===JSON.stringify(f);function U(e,f){e.forEach(function(r){Array.isArray(r)?U(r,f):f.push(r)})}function W(e){let f=[];return U(e,f),f}var _=(...e)=>W(e).filter(Boolean),$=(e,f)=>{let r={},V=Object.keys(e),k=Object.keys(f);for(let y of V)if(k.includes(y)){let g=e[y],h=f[y];Array.isArray(g)||Array.isArray(h)?r[y]=_(h,g):typeof g=="object"&&typeof h=="object"?r[y]=$(g,h):r[y]=h+" "+g}else r[y]=e[y];for(let y of k)V.includes(y)||(r[y]=f[y]);return r},L=e=>!e||typeof e!="string"?e:e.replace(/\s+/g," ").trim(),se={twMerge:!0,twMergeConfig:{},responsiveVariants:!1},F=e=>e||void 0,x=(...e)=>F(W(e).filter(Boolean).join(" ")),R=null,A={},B=!1,C=(...e)=>f=>f.twMerge?((!R||B)&&(B=!1,R=d(A)?le:oe({...A,extend:{theme:A.theme,classGroups:A.classGroups,conflictingClassGroupModifiers:A.conflictingClassGroupModifiers,conflictingClassGroups:A.conflictingClassGroups,...A.extend}})),F(R(x(e)))):x(e),Q=(e,f)=>{for(let r in f)e.hasOwnProperty(r)?e[r]=x(e[r],f[r]):e[r]=f[r];return e},fe=(e,f)=>{let{extend:r=null,slots:V={},variants:k={},compoundVariants:y=[],compoundSlots:g=[],defaultVariants:h={}}=e,v={...se,...f},T=r!=null&&r.base?x(r.base,e?.base):e?.base,b=r!=null&&r.variants&&!d(r.variants)?$(k,r.variants):k,N=r!=null&&r.defaultVariants&&!d(r.defaultVariants)?{...r.defaultVariants,...h}:h;!d(v.twMergeConfig)&&!ie(v.twMergeConfig,A)&&(B=!0,A=v.twMergeConfig);let G=d(r?.slots),E=d(V)?{}:{base:x(e?.base,G&&r?.base),...V},M=G?E:Q({...r?.slots},d(E)?{base:e?.base}:E),w=d(r?.compoundVariants)?y:_(r?.compoundVariants,y),m=c=>{if(d(b)&&d(V)&&G)return C(T,c?.class,c?.className)(v);if(w&&!Array.isArray(w))throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof w}`);if(g&&!Array.isArray(g))throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof g}`);let Y=(t,l,n=[],i)=>{let o=n;if(typeof l=="string")o=o.concat(L(l).split(" ").map(s=>`${t}:${s}`));else if(Array.isArray(l))o=o.concat(l.reduce((s,a)=>s.concat(`${t}:${a}`),[]));else if(typeof l=="object"&&typeof i=="string"){for(let s in l)if(l.hasOwnProperty(s)&&s===i){let a=l[s];if(a&&typeof a=="string"){let u=L(a);o[i]?o[i]=o[i].concat(u.split(" ").map(p=>`${t}:${p}`)):o[i]=u.split(" ").map(p=>`${t}:${p}`)}else Array.isArray(a)&&a.length>0&&(o[i]=a.reduce((u,p)=>u.concat(`${t}:${p}`),[]))}}return o},K=(t,l=b,n=null,i=null)=>{var o;let s=l[t];if(!s||d(s))return null;let a=(o=i?.[t])!=null?o:c?.[t];if(a===null)return null;let u=I(a),p=Array.isArray(v.responsiveVariants)&&v.responsiveVariants.length>0||v.responsiveVariants===!0,O=N?.[t],j=[];if(typeof u=="object"&&p)for(let[P,H]of Object.entries(u)){let ne=s[H];if(P==="initial"){O=H;continue}Array.isArray(v.responsiveVariants)&&!v.responsiveVariants.includes(P)||(j=Y(P,ne,j,n))}let S=u!=null&&typeof u!="object"?u:I(O),J=s[S||"false"];return typeof j=="object"&&typeof n=="string"&&j[n]?Q(j,J):j.length>0?(j.push(J),n==="base"?j.join(" "):j):J},Z=()=>b?Object.keys(b).map(t=>K(t,b)):null,ee=(t,l)=>{if(!b||typeof b!="object")return null;let n=new Array;for(let i in b){let o=K(i,b,t,l),s=t==="base"&&typeof o=="string"?o:o&&o[t];s&&(n[n.length]=s)}return n},q={};for(let t in c)c[t]!==void 0&&(q[t]=c[t]);let z=(t,l)=>{var n;let i=typeof c?.[t]=="object"?{[t]:(n=c[t])==null?void 0:n.initial}:{};return{...N,...q,...i,...l}},D=(t=[],l)=>{let n=[];for(let{class:i,className:o,...s}of t){let a=!0;for(let[u,p]of Object.entries(s)){let O=z(u,l)[u];if(Array.isArray(p)){if(!p.includes(O)){a=!1;break}}else{let j=S=>S==null||S===!1;if(j(p)&&j(O))continue;if(O!==p){a=!1;break}}}a&&(i&&n.push(i),o&&n.push(o))}return n},re=t=>{let l=D(w,t);if(!Array.isArray(l))return l;let n={};for(let i of l)if(typeof i=="string"&&(n.base=C(n.base,i)(v)),typeof i=="object")for(let[o,s]of Object.entries(i))n[o]=C(n[o],s)(v);return n},te=t=>{if(g.length<1)return null;let l={};for(let{slots:n=[],class:i,className:o,...s}of g){if(!d(s)){let a=!0;for(let u of Object.keys(s)){let p=z(u,t)[u];if(p===void 0||(Array.isArray(s[u])?!s[u].includes(p):s[u]!==p)){a=!1;break}}if(!a)continue}for(let a of n)l[a]=l[a]||[],l[a].push([i,o])}return l};if(!d(V)||!G){let t={};if(typeof M=="object"&&!d(M))for(let l of Object.keys(M))t[l]=n=>{var i,o;return C(M[l],ee(l,n),((i=re(n))!=null?i:[])[l],((o=te(n))!=null?o:[])[l],n?.class,n?.className)(v)};return t}return C(T,Z(),D(w),c?.class,c?.className)(v)},X=()=>{if(!(!b||typeof b!="object"))return Object.keys(b)};return m.variantKeys=X(),m.extend=r,m.base=T,m.slots=M,m.variants=b,m.defaultVariants=N,m.compoundSlots=g,m.compoundVariants=w,m};export{fe as c};
