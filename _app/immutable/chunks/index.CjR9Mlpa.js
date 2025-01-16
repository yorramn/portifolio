import{s as ce,e as J,a as W,d as Bt,b as At,f as z}from"./disclose-version.joNX4SD2.js";import{i as It}from"./legacy.hZxyTXTl.js";import{al as qe,am as Ye,an as Ue,p as qt,D as q,F as fe,f as Q,a as Yt,z as R,g as _,_ as j,t as mt,G as Ee,c as pt,r as ht,b as Re,H as Xe}from"./utils.B4IxvO69.js";import{r as se,q as Zt,o as Ge,m as $t,y as te,z as ee,B as rt,G as Ke,n as xe,E as Je,k as ne,A as Qe,H as be,l as Oe,C as Ze,x as $e,I as tn,a as et,j as wt,b as vt,F as en,c as nn}from"./utils.BGoO_23D.js";import{p as b,l as bt,i as ft,b as yt,s as on}from"./index-client.y1pJLeBH.js";import{o as sn,g as rn,a as ln,u as an,c as Se,t as Rt}from"./events.BffNdxaz.js";import{d as Le,w as Ae}from"./paths.6cMELW3J.js";import{t as Ce,c as cn,r as fn,g as un}from"./stores.BFJChw35.js";function dn(e){const t=e.slice();return t.sort(mn),gn(t)}function gn(e){if(e.length<=1)return e.slice();const t=[];for(let n=0;n<e.length;n++){const i=e[n];for(;t.length>=2;){const r=t[t.length-1],s=t[t.length-2];if((r.x-s.x)*(i.y-s.y)>=(r.y-s.y)*(i.x-s.x))t.pop();else break}t.push(i)}t.pop();const o=[];for(let n=e.length-1;n>=0;n--){const i=e[n];for(;o.length>=2;){const r=o[o.length-1],s=o[o.length-2];if((r.x-s.x)*(i.y-s.y)>=(r.y-s.y)*(i.x-s.x))o.pop();else break}o.push(i)}return o.pop(),t.length==1&&o.length==1&&t[0].x==o[0].x&&t[0].y==o[0].y?t:t.concat(o)}function mn(e,t){return e.x<t.x?-1:e.x>t.x?1:e.y<t.y?-1:e.y>t.y?1:0}function pn(e){const t=e.getBoundingClientRect();return[{x:t.left,y:t.top},{x:t.right,y:t.top},{x:t.right,y:t.bottom},{x:t.left,y:t.bottom}]}function hn(e){const t=e.flatMap(o=>pn(o));return dn(t)}function wn(e,t){let o=!1;for(let n=0,i=t.length-1;n<t.length;i=n++){const r=t[n].x,s=t[n].y,l=t[i].x,a=t[i].y;s>e.y!=a>e.y&&e.x<(l-r)*(e.y-s)/(a-s)+r&&(o=!o)}return o}const lt=Math.min,U=Math.max,Nt=Math.round,Ft=Math.floor,nt=e=>({x:e,y:e}),vn={left:"right",right:"left",bottom:"top",top:"bottom"},yn={start:"end",end:"start"};function re(e,t,o){return U(e,lt(t,o))}function Ct(e,t){return typeof e=="function"?e(t):e}function at(e){return e.split("-")[0]}function Tt(e){return e.split("-")[1]}function ke(e){return e==="x"?"y":"x"}function ue(e){return e==="y"?"height":"width"}function ut(e){return["top","bottom"].includes(at(e))?"y":"x"}function de(e){return ke(ut(e))}function xn(e,t,o){o===void 0&&(o=!1);const n=Tt(e),i=de(e),r=ue(i);let s=i==="x"?n===(o?"end":"start")?"right":"left":n==="start"?"bottom":"top";return t.reference[r]>t.floating[r]&&(s=zt(s)),[s,zt(s)]}function bn(e){const t=zt(e);return[le(e),t,le(t)]}function le(e){return e.replace(/start|end/g,t=>yn[t])}function On(e,t,o){const n=["left","right"],i=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(e){case"top":case"bottom":return o?t?i:n:t?n:i;case"left":case"right":return t?r:s;default:return[]}}function An(e,t,o,n){const i=Tt(e);let r=On(at(e),o==="start",n);return i&&(r=r.map(s=>s+"-"+i),t&&(r=r.concat(r.map(le)))),r}function zt(e){return e.replace(/left|right|bottom|top/g,t=>vn[t])}function Cn(e){return{top:0,right:0,bottom:0,left:0,...e}}function Me(e){return typeof e!="number"?Cn(e):{top:e,right:e,bottom:e,left:e}}function jt(e){const{x:t,y:o,width:n,height:i}=e;return{width:n,height:i,top:o,left:t,right:t+n,bottom:o+i,x:t,y:o}}function Te(e,t,o){let{reference:n,floating:i}=e;const r=ut(t),s=de(t),l=ue(s),a=at(t),c=r==="y",f=n.x+n.width/2-i.width/2,g=n.y+n.height/2-i.height/2,m=n[l]/2-i[l]/2;let u;switch(a){case"top":u={x:f,y:n.y-i.height};break;case"bottom":u={x:f,y:n.y+n.height};break;case"right":u={x:n.x+n.width,y:g};break;case"left":u={x:n.x-i.width,y:g};break;default:u={x:n.x,y:n.y}}switch(Tt(t)){case"start":u[s]-=m*(o&&c?-1:1);break;case"end":u[s]+=m*(o&&c?-1:1);break}return u}const Tn=async(e,t,o)=>{const{placement:n="bottom",strategy:i="absolute",middleware:r=[],platform:s}=o,l=r.filter(Boolean),a=await(s.isRTL==null?void 0:s.isRTL(t));let c=await s.getElementRects({reference:e,floating:t,strategy:i}),{x:f,y:g}=Te(c,n,a),m=n,u={},d=0;for(let p=0;p<l.length;p++){const{name:y,fn:w}=l[p],{x:v,y:h,data:C,reset:A}=await w({x:f,y:g,initialPlacement:n,placement:m,strategy:i,middlewareData:u,rects:c,platform:s,elements:{reference:e,floating:t}});f=v??f,g=h??g,u={...u,[y]:{...u[y],...C}},A&&d<=50&&(d++,typeof A=="object"&&(A.placement&&(m=A.placement),A.rects&&(c=A.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:i}):A.rects),{x:f,y:g}=Te(c,m,a)),p=-1)}return{x:f,y:g,placement:m,strategy:i,middlewareData:u}};async function ge(e,t){var o;t===void 0&&(t={});const{x:n,y:i,platform:r,rects:s,elements:l,strategy:a}=e,{boundary:c="clippingAncestors",rootBoundary:f="viewport",elementContext:g="floating",altBoundary:m=!1,padding:u=0}=Ct(t,e),d=Me(u),y=l[m?g==="floating"?"reference":"floating":g],w=jt(await r.getClippingRect({element:(o=await(r.isElement==null?void 0:r.isElement(y)))==null||o?y:y.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(l.floating)),boundary:c,rootBoundary:f,strategy:a})),v=g==="floating"?{x:n,y:i,width:s.floating.width,height:s.floating.height}:s.reference,h=await(r.getOffsetParent==null?void 0:r.getOffsetParent(l.floating)),C=await(r.isElement==null?void 0:r.isElement(h))?await(r.getScale==null?void 0:r.getScale(h))||{x:1,y:1}:{x:1,y:1},A=jt(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:v,offsetParent:h,strategy:a}):v);return{top:(w.top-A.top+d.top)/C.y,bottom:(A.bottom-w.bottom+d.bottom)/C.y,left:(w.left-A.left+d.left)/C.x,right:(A.right-w.right+d.right)/C.x}}const Pn=e=>({name:"arrow",options:e,async fn(t){const{x:o,y:n,placement:i,rects:r,platform:s,elements:l,middlewareData:a}=t,{element:c,padding:f=0}=Ct(e,t)||{};if(c==null)return{};const g=Me(f),m={x:o,y:n},u=de(i),d=ue(u),p=await s.getDimensions(c),y=u==="y",w=y?"top":"left",v=y?"bottom":"right",h=y?"clientHeight":"clientWidth",C=r.reference[d]+r.reference[u]-m[u]-r.floating[d],A=m[u]-r.reference[u],S=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c));let L=S?S[h]:0;(!L||!await(s.isElement==null?void 0:s.isElement(S)))&&(L=l.floating[h]||r.floating[d]);const Y=C/2-A/2,I=L/2-p[d]/2-1,H=lt(g[w],I),D=lt(g[v],I),x=H,O=L-p[d]-D,T=L/2-p[d]/2+Y,E=re(x,T,O),P=!a.arrow&&Tt(i)!=null&&T!==E&&r.reference[d]/2-(T<x?H:D)-p[d]/2<0,F=P?T<x?T-x:T-O:0;return{[u]:m[u]+F,data:{[u]:E,centerOffset:T-E-F,...P&&{alignmentOffset:F}},reset:P}}}),_n=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var o,n;const{placement:i,middlewareData:r,rects:s,initialPlacement:l,platform:a,elements:c}=t,{mainAxis:f=!0,crossAxis:g=!0,fallbackPlacements:m,fallbackStrategy:u="bestFit",fallbackAxisSideDirection:d="none",flipAlignment:p=!0,...y}=Ct(e,t);if((o=r.arrow)!=null&&o.alignmentOffset)return{};const w=at(i),v=ut(l),h=at(l)===l,C=await(a.isRTL==null?void 0:a.isRTL(c.floating)),A=m||(h||!p?[zt(l)]:bn(l)),S=d!=="none";!m&&S&&A.push(...An(l,p,d,C));const L=[l,...A],Y=await ge(t,y),I=[];let H=((n=r.flip)==null?void 0:n.overflows)||[];if(f&&I.push(Y[w]),g){const T=xn(i,s,C);I.push(Y[T[0]],Y[T[1]])}if(H=[...H,{placement:i,overflows:I}],!I.every(T=>T<=0)){var D,x;const T=(((D=r.flip)==null?void 0:D.index)||0)+1,E=L[T];if(E)return{data:{index:T,overflows:H},reset:{placement:E}};let P=(x=H.filter(F=>F.overflows[0]<=0).sort((F,k)=>F.overflows[1]-k.overflows[1])[0])==null?void 0:x.placement;if(!P)switch(u){case"bestFit":{var O;const F=(O=H.filter(k=>{if(S){const V=ut(k.placement);return V===v||V==="y"}return!0}).map(k=>[k.placement,k.overflows.filter(V=>V>0).reduce((V,tt)=>V+tt,0)]).sort((k,V)=>k[1]-V[1])[0])==null?void 0:O[0];F&&(P=F);break}case"initialPlacement":P=l;break}if(i!==P)return{reset:{placement:P}}}return{}}}};async function Dn(e,t){const{placement:o,platform:n,elements:i}=e,r=await(n.isRTL==null?void 0:n.isRTL(i.floating)),s=at(o),l=Tt(o),a=ut(o)==="y",c=["left","top"].includes(s)?-1:1,f=r&&a?-1:1,g=Ct(t,e);let{mainAxis:m,crossAxis:u,alignmentAxis:d}=typeof g=="number"?{mainAxis:g,crossAxis:0,alignmentAxis:null}:{mainAxis:g.mainAxis||0,crossAxis:g.crossAxis||0,alignmentAxis:g.alignmentAxis};return l&&typeof d=="number"&&(u=l==="end"?d*-1:d),a?{x:u*f,y:m*c}:{x:m*c,y:u*f}}const En=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var o,n;const{x:i,y:r,placement:s,middlewareData:l}=t,a=await Dn(t,e);return s===((o=l.offset)==null?void 0:o.placement)&&(n=l.arrow)!=null&&n.alignmentOffset?{}:{x:i+a.x,y:r+a.y,data:{...a,placement:s}}}}},Rn=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:o,y:n,placement:i}=t,{mainAxis:r=!0,crossAxis:s=!1,limiter:l={fn:y=>{let{x:w,y:v}=y;return{x:w,y:v}}},...a}=Ct(e,t),c={x:o,y:n},f=await ge(t,a),g=ut(at(i)),m=ke(g);let u=c[m],d=c[g];if(r){const y=m==="y"?"top":"left",w=m==="y"?"bottom":"right",v=u+f[y],h=u-f[w];u=re(v,u,h)}if(s){const y=g==="y"?"top":"left",w=g==="y"?"bottom":"right",v=d+f[y],h=d-f[w];d=re(v,d,h)}const p=l.fn({...t,[m]:u,[g]:d});return{...p,data:{x:p.x-o,y:p.y-n,enabled:{[m]:r,[g]:s}}}}}},Sn=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var o,n;const{placement:i,rects:r,platform:s,elements:l}=t,{apply:a=()=>{},...c}=Ct(e,t),f=await ge(t,c),g=at(i),m=Tt(i),u=ut(i)==="y",{width:d,height:p}=r.floating;let y,w;g==="top"||g==="bottom"?(y=g,w=m===(await(s.isRTL==null?void 0:s.isRTL(l.floating))?"start":"end")?"left":"right"):(w=g,y=m==="end"?"top":"bottom");const v=p-f.top-f.bottom,h=d-f.left-f.right,C=lt(p-f[y],v),A=lt(d-f[w],h),S=!t.middlewareData.shift;let L=C,Y=A;if((o=t.middlewareData.shift)!=null&&o.enabled.x&&(Y=h),(n=t.middlewareData.shift)!=null&&n.enabled.y&&(L=v),S&&!m){const H=U(f.left,0),D=U(f.right,0),x=U(f.top,0),O=U(f.bottom,0);u?Y=d-2*(H!==0||D!==0?H+D:U(f.left,f.right)):L=p-2*(x!==0||O!==0?x+O:U(f.top,f.bottom))}await a({...t,availableWidth:Y,availableHeight:L});const I=await s.getDimensions(l.floating);return d!==I.width||p!==I.height?{reset:{rects:!0}}:{}}}};function Ut(){return typeof window<"u"}function Pt(e){return We(e)?(e.nodeName||"").toLowerCase():"#document"}function X(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function it(e){var t;return(t=(We(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function We(e){return Ut()?e instanceof Node||e instanceof X(e).Node:!1}function Z(e){return Ut()?e instanceof Element||e instanceof X(e).Element:!1}function ot(e){return Ut()?e instanceof HTMLElement||e instanceof X(e).HTMLElement:!1}function Pe(e){return!Ut()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof X(e).ShadowRoot}function Lt(e){const{overflow:t,overflowX:o,overflowY:n,display:i}=$(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+o)&&!["inline","contents"].includes(i)}function Ln(e){return["table","td","th"].includes(Pt(e))}function Xt(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function me(e){const t=pe(),o=Z(e)?$(e):e;return o.transform!=="none"||o.perspective!=="none"||(o.containerType?o.containerType!=="normal":!1)||!t&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!t&&(o.filter?o.filter!=="none":!1)||["transform","perspective","filter"].some(n=>(o.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(o.contain||"").includes(n))}function kn(e){let t=ct(e);for(;ot(t)&&!Ot(t);){if(me(t))return t;if(Xt(t))return null;t=ct(t)}return null}function pe(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Ot(e){return["html","body","#document"].includes(Pt(e))}function $(e){return X(e).getComputedStyle(e)}function Gt(e){return Z(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function ct(e){if(Pt(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Pe(e)&&e.host||it(e);return Pe(t)?t.host:t}function He(e){const t=ct(e);return Ot(t)?e.ownerDocument?e.ownerDocument.body:e.body:ot(t)&&Lt(t)?t:He(t)}function St(e,t,o){var n;t===void 0&&(t=[]),o===void 0&&(o=!0);const i=He(e),r=i===((n=e.ownerDocument)==null?void 0:n.body),s=X(i);if(r){const l=ae(s);return t.concat(s,s.visualViewport||[],Lt(i)?i:[],l&&o?St(l):[])}return t.concat(i,St(i,[],o))}function ae(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Fe(e){const t=$(e);let o=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const i=ot(e),r=i?e.offsetWidth:o,s=i?e.offsetHeight:n,l=Nt(o)!==r||Nt(n)!==s;return l&&(o=r,n=s),{width:o,height:n,$:l}}function he(e){return Z(e)?e:e.contextElement}function xt(e){const t=he(e);if(!ot(t))return nt(1);const o=t.getBoundingClientRect(),{width:n,height:i,$:r}=Fe(t);let s=(r?Nt(o.width):o.width)/n,l=(r?Nt(o.height):o.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const Mn=nt(0);function Ve(e){const t=X(e);return!pe()||!t.visualViewport?Mn:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Wn(e,t,o){return t===void 0&&(t=!1),!o||t&&o!==X(e)?!1:t}function dt(e,t,o,n){t===void 0&&(t=!1),o===void 0&&(o=!1);const i=e.getBoundingClientRect(),r=he(e);let s=nt(1);t&&(n?Z(n)&&(s=xt(n)):s=xt(e));const l=Wn(r,o,n)?Ve(r):nt(0);let a=(i.left+l.x)/s.x,c=(i.top+l.y)/s.y,f=i.width/s.x,g=i.height/s.y;if(r){const m=X(r),u=n&&Z(n)?X(n):n;let d=m,p=ae(d);for(;p&&n&&u!==d;){const y=xt(p),w=p.getBoundingClientRect(),v=$(p),h=w.left+(p.clientLeft+parseFloat(v.paddingLeft))*y.x,C=w.top+(p.clientTop+parseFloat(v.paddingTop))*y.y;a*=y.x,c*=y.y,f*=y.x,g*=y.y,a+=h,c+=C,d=X(p),p=ae(d)}}return jt({width:f,height:g,x:a,y:c})}function we(e,t){const o=Gt(e).scrollLeft;return t?t.left+o:dt(it(e)).left+o}function Be(e,t,o){o===void 0&&(o=!1);const n=e.getBoundingClientRect(),i=n.left+t.scrollLeft-(o?0:we(e,n)),r=n.top+t.scrollTop;return{x:i,y:r}}function Hn(e){let{elements:t,rect:o,offsetParent:n,strategy:i}=e;const r=i==="fixed",s=it(n),l=t?Xt(t.floating):!1;if(n===s||l&&r)return o;let a={scrollLeft:0,scrollTop:0},c=nt(1);const f=nt(0),g=ot(n);if((g||!g&&!r)&&((Pt(n)!=="body"||Lt(s))&&(a=Gt(n)),ot(n))){const u=dt(n);c=xt(n),f.x=u.x+n.clientLeft,f.y=u.y+n.clientTop}const m=s&&!g&&!r?Be(s,a,!0):nt(0);return{width:o.width*c.x,height:o.height*c.y,x:o.x*c.x-a.scrollLeft*c.x+f.x+m.x,y:o.y*c.y-a.scrollTop*c.y+f.y+m.y}}function Fn(e){return Array.from(e.getClientRects())}function Vn(e){const t=it(e),o=Gt(e),n=e.ownerDocument.body,i=U(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),r=U(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let s=-o.scrollLeft+we(e);const l=-o.scrollTop;return $(n).direction==="rtl"&&(s+=U(t.clientWidth,n.clientWidth)-i),{width:i,height:r,x:s,y:l}}function Bn(e,t){const o=X(e),n=it(e),i=o.visualViewport;let r=n.clientWidth,s=n.clientHeight,l=0,a=0;if(i){r=i.width,s=i.height;const c=pe();(!c||c&&t==="fixed")&&(l=i.offsetLeft,a=i.offsetTop)}return{width:r,height:s,x:l,y:a}}function Nn(e,t){const o=dt(e,!0,t==="fixed"),n=o.top+e.clientTop,i=o.left+e.clientLeft,r=ot(e)?xt(e):nt(1),s=e.clientWidth*r.x,l=e.clientHeight*r.y,a=i*r.x,c=n*r.y;return{width:s,height:l,x:a,y:c}}function _e(e,t,o){let n;if(t==="viewport")n=Bn(e,o);else if(t==="document")n=Vn(it(e));else if(Z(t))n=Nn(t,o);else{const i=Ve(e);n={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return jt(n)}function Ne(e,t){const o=ct(e);return o===t||!Z(o)||Ot(o)?!1:$(o).position==="fixed"||Ne(o,t)}function zn(e,t){const o=t.get(e);if(o)return o;let n=St(e,[],!1).filter(l=>Z(l)&&Pt(l)!=="body"),i=null;const r=$(e).position==="fixed";let s=r?ct(e):e;for(;Z(s)&&!Ot(s);){const l=$(s),a=me(s);!a&&l.position==="fixed"&&(i=null),(r?!a&&!i:!a&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||Lt(s)&&!a&&Ne(e,s))?n=n.filter(f=>f!==s):i=l,s=ct(s)}return t.set(e,n),n}function jn(e){let{element:t,boundary:o,rootBoundary:n,strategy:i}=e;const s=[...o==="clippingAncestors"?Xt(t)?[]:zn(t,this._c):[].concat(o),n],l=s[0],a=s.reduce((c,f)=>{const g=_e(t,f,i);return c.top=U(g.top,c.top),c.right=lt(g.right,c.right),c.bottom=lt(g.bottom,c.bottom),c.left=U(g.left,c.left),c},_e(t,l,i));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function In(e){const{width:t,height:o}=Fe(e);return{width:t,height:o}}function qn(e,t,o){const n=ot(t),i=it(t),r=o==="fixed",s=dt(e,!0,r,t);let l={scrollLeft:0,scrollTop:0};const a=nt(0);if(n||!n&&!r)if((Pt(t)!=="body"||Lt(i))&&(l=Gt(t)),n){const m=dt(t,!0,r,t);a.x=m.x+t.clientLeft,a.y=m.y+t.clientTop}else i&&(a.x=we(i));const c=i&&!n&&!r?Be(i,l):nt(0),f=s.left+l.scrollLeft-a.x-c.x,g=s.top+l.scrollTop-a.y-c.y;return{x:f,y:g,width:s.width,height:s.height}}function oe(e){return $(e).position==="static"}function De(e,t){if(!ot(e)||$(e).position==="fixed")return null;if(t)return t(e);let o=e.offsetParent;return it(e)===o&&(o=o.ownerDocument.body),o}function ze(e,t){const o=X(e);if(Xt(e))return o;if(!ot(e)){let i=ct(e);for(;i&&!Ot(i);){if(Z(i)&&!oe(i))return i;i=ct(i)}return o}let n=De(e,t);for(;n&&Ln(n)&&oe(n);)n=De(n,t);return n&&Ot(n)&&oe(n)&&!me(n)?o:n||kn(e)||o}const Yn=async function(e){const t=this.getOffsetParent||ze,o=this.getDimensions,n=await o(e.floating);return{reference:qn(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function Un(e){return $(e).direction==="rtl"}const Xn={convertOffsetParentRelativeRectToViewportRelativeRect:Hn,getDocumentElement:it,getClippingRect:jn,getOffsetParent:ze,getElementRects:Yn,getClientRects:Fn,getDimensions:In,getScale:xt,isElement:Z,isRTL:Un};function Gn(e,t){let o=null,n;const i=it(e);function r(){var l;clearTimeout(n),(l=o)==null||l.disconnect(),o=null}function s(l,a){l===void 0&&(l=!1),a===void 0&&(a=1),r();const{left:c,top:f,width:g,height:m}=e.getBoundingClientRect();if(l||t(),!g||!m)return;const u=Ft(f),d=Ft(i.clientWidth-(c+g)),p=Ft(i.clientHeight-(f+m)),y=Ft(c),v={rootMargin:-u+"px "+-d+"px "+-p+"px "+-y+"px",threshold:U(0,lt(1,a))||1};let h=!0;function C(A){const S=A[0].intersectionRatio;if(S!==a){if(!h)return s();S?s(!1,S):n=setTimeout(()=>{s(!1,1e-7)},1e3)}h=!1}try{o=new IntersectionObserver(C,{...v,root:i.ownerDocument})}catch{o=new IntersectionObserver(C,v)}o.observe(e)}return s(!0),r}function Kn(e,t,o,n){n===void 0&&(n={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:a=!1}=n,c=he(e),f=i||r?[...c?St(c):[],...St(t)]:[];f.forEach(w=>{i&&w.addEventListener("scroll",o,{passive:!0}),r&&w.addEventListener("resize",o)});const g=c&&l?Gn(c,o):null;let m=-1,u=null;s&&(u=new ResizeObserver(w=>{let[v]=w;v&&v.target===c&&u&&(u.unobserve(t),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var h;(h=u)==null||h.observe(t)})),o()}),c&&!a&&u.observe(c),u.observe(t));let d,p=a?dt(e):null;a&&y();function y(){const w=dt(e);p&&(w.x!==p.x||w.y!==p.y||w.width!==p.width||w.height!==p.height)&&o(),p=w,d=requestAnimationFrame(y)}return o(),()=>{var w;f.forEach(v=>{i&&v.removeEventListener("scroll",o),r&&v.removeEventListener("resize",o)}),g?.(),(w=u)==null||w.disconnect(),u=null,a&&cancelAnimationFrame(d)}}const Jn=En,Qn=Rn,Zn=_n,$n=Sn,to=Pn,eo=(e,t,o)=>{const n=new Map,i={platform:Xn,...o},r={...i.platform,_c:n};return Tn(e,t,{...i,platform:r})},no={strategy:"absolute",placement:"top",gutter:5,flip:!0,sameWidth:!1,overflowPadding:8},oo={bottom:"rotate(45deg)",left:"rotate(135deg)",top:"rotate(225deg)",right:"rotate(315deg)"};function io(e,t,o={}){if(!t||!e||o===null)return{destroy:se};const n={...no,...o},i=t.querySelector("[data-arrow=true]"),r=[];n.flip&&r.push(Zn({boundary:n.boundary,padding:n.overflowPadding}));const s=Zt(i)?i.offsetHeight/2:0;if(n.gutter||n.offset){const a=n.gutter?{mainAxis:n.gutter}:n.offset;a?.mainAxis!=null&&(a.mainAxis+=s),r.push(Jn(a))}r.push(Qn({boundary:n.boundary,crossAxis:n.overlap,padding:n.overflowPadding})),i&&r.push(to({element:i,padding:8})),r.push($n({padding:n.overflowPadding,apply({rects:a,availableHeight:c,availableWidth:f}){n.sameWidth&&Object.assign(t.style,{width:`${Math.round(a.reference.width)}px`,minWidth:"unset"}),n.fitViewport&&Object.assign(t.style,{maxWidth:`${f}px`,maxHeight:`${c}px`})}}));function l(){if(!e||!t||Zt(e)&&!e.ownerDocument.documentElement.contains(e))return;const{placement:a,strategy:c}=n;eo(e,t,{placement:a,middleware:r,strategy:c}).then(f=>{const g=Math.round(f.x),m=Math.round(f.y),[u,d]=so(f.placement);if(t.setAttribute("data-side",u),t.setAttribute("data-align",d),Object.assign(t.style,{position:n.strategy,top:`${m}px`,left:`${g}px`}),Zt(i)&&f.middlewareData.arrow){const{x:p,y}=f.middlewareData.arrow,w=f.placement.split("-")[0];i.setAttribute("data-side",w),Object.assign(i.style,{position:"absolute",left:p!=null?`${p}px`:"",top:y!=null?`${y}px`:"",[w]:`calc(100% - ${s}px)`,transform:oo[w],backgroundColor:"inherit",zIndex:"inherit"})}return f})}return Object.assign(t.style,{position:n.strategy}),{destroy:Kn(e,t,l)}}function so(e){const[t,o="center"]=e.split("-");return[t,o]}const ro={positioning:{placement:"bottom"},arrowSize:8,defaultOpen:!1,closeOnPointerDown:!0,openDelay:1e3,closeDelay:0,forceVisible:!1,portal:void 0,closeOnEscape:!0,disableHoverableContent:!1,group:void 0},{name:ie}=Qe("tooltip"),Vt=new Map,lo=["trigger","content"];function ao(e){const t={...ro,...e},o=Ce(Ge(t,"open","ids")),{positioning:n,arrowSize:i,closeOnPointerDown:r,openDelay:s,closeDelay:l,forceVisible:a,portal:c,closeOnEscape:f,disableHoverableContent:g,group:m}=o,u=t.open??Ae(t.defaultOpen),d=sn(u,t?.onOpenChange),p=Ae(null),y=Ce({...rn(lo),...t.ids});let w=!1;const v=x=>Oe?document.getElementById(y[x].get()):null;let h=null,C=null;function A(x){C&&(window.clearTimeout(C),C=null),h||(h=window.setTimeout(()=>{d.set(!0),p.update(O=>O??x),h=null},s.get()))}function S(x){if(h&&(window.clearTimeout(h),h=null),x&&D){p.set("pointer");return}C||(C=window.setTimeout(()=>{d.set(!1),p.set(null),x&&(w=!1),C=null},l.get()))}const L=Le([d,a],([x,O])=>x||O),Y=$t(ie("trigger"),{stores:[y.content,y.trigger,d],returned:([x,O,T])=>({"aria-describedby":x,id:O,"data-state":T?"open":"closed"}),action:x=>{const O=E=>{f.get()&&E.key===Ze.ESCAPE&&(h&&(window.clearTimeout(h),h=null),d.set(!1))};return{destroy:te(rt(x,"pointerdown",()=>{r.get()&&(d.set(!1),w=!0,h&&(window.clearTimeout(h),h=null))}),rt(x,"pointerenter",E=>{be(E)||A("pointer")}),rt(x,"pointerleave",E=>{be(E)||h&&(window.clearTimeout(h),h=null)}),rt(x,"focus",()=>{w||A("focus")}),rt(x,"blur",()=>S(!0)),rt(x,"keydown",O),ee(document,"keydown",O))}}}),I=$t(ie("content"),{stores:[L,d,c,y.content],returned:([x,O,T,E])=>Ke({role:"tooltip",hidden:x?void 0:!0,tabindex:-1,style:x?void 0:xe({display:"none"}),id:E,"data-portal":Je(T),"data-state":O?"open":"closed"}),action:x=>{let O=se,T=se;const E=ne([L,n,c],([k,V,tt])=>{T(),O();const st=v("trigger");!k||!st||qe().then(()=>{T(),O();const gt=ln(x,tt);gt&&(T=an(x,gt).destroy),O=io(st,x,V).destroy})});function P(k){if(!d.get())return;const V=k.target;if(!$e(V)&&!tn(V))return;const tt=v("trigger");tt&&V.contains(tt)&&S()}const F=te(rt(x,"pointerenter",()=>A("pointer")),rt(x,"pointerdown",()=>A("pointer")),ee(window,"scroll",P,{capture:!0}));return{destroy(){F(),T(),O(),E()}}}}),H=$t(ie("arrow"),{stores:i,returned:x=>({"data-arrow":!0,style:xe({position:"absolute",width:`var(--arrow-size, ${x}px)`,height:`var(--arrow-size, ${x}px)`})})});let D=!1;return ne(d,x=>{const O=m.get();if(O===void 0||O===!1)return;if(!x){Vt.get(O)===d&&Vt.delete(O);return}Vt.get(O)?.set(!1),Vt.set(O,d)}),ne([d,p],([x,O])=>{if(!(!x||!Oe))return te(ee(document,"mousemove",T=>{const E=v("content"),P=v("trigger");if(!E||!P)return;const F=g.get()?[P]:[P,E],k=hn(F);D=wn({x:T.clientX,y:T.clientY},k),O==="pointer"&&(D||S())}))}),{ids:y,elements:{trigger:Y,content:I,arrow:H},states:{open:d},options:o}}function co(e){return(t={})=>fo(e,t)}function fo(e,t){const n={...{side:"bottom",align:"center",sideOffset:0,alignOffset:0,sameWidth:!1,avoidCollisions:!0,collisionPadding:8,fitViewport:!1,strategy:"absolute",overlap:!1},...t};e.update(i=>({...i,placement:uo(n.side,n.align),offset:{...i.offset,mainAxis:n.sideOffset,crossAxis:n.alignOffset},gutter:0,sameWidth:n.sameWidth,flip:n.avoidCollisions,overflowPadding:n.collisionPadding,boundary:n.collisionBoundary,fitViewport:n.fitViewport,strategy:n.strategy,overlap:n.overlap}))}function uo(e,t){return t==="center"?e:`${e}-${t}`}function je(){return{NAME:"tooltip",PARTS:["arrow","content","trigger"]}}function go(e){const{NAME:t,PARTS:o}=je(),n=cn(t,o),i={...ao({positioning:{placement:"top",gutter:0},openDelay:700,...fn(e),forceVisible:!0}),getAttrs:n};return Ye(t,i),{...i,updateOption:un(i.options)}}function ve(){const{NAME:e}=je();return Ue(e)}function mo(e){const o={...{side:"top",align:"center",sideOffset:1},...e},{options:{positioning:n}}=ve();co(n)({...o})}function po(e,t){qt(t,!1);const o=ce(),n=()=>Bt(y,"$idValues",o);let i=b(t,"closeOnEscape",24,()=>{}),r=b(t,"portal",24,()=>{}),s=b(t,"closeOnPointerDown",24,()=>{}),l=b(t,"openDelay",24,()=>{}),a=b(t,"closeDelay",24,()=>{}),c=b(t,"open",28,()=>{}),f=b(t,"onOpenChange",24,()=>{}),g=b(t,"disableHoverableContent",24,()=>{}),m=b(t,"group",24,()=>{});const{states:{open:u},updateOption:d,ids:p}=go({closeOnEscape:i(),portal:r(),closeOnPointerDown:s(),openDelay:l(),closeDelay:a(),forceVisible:!0,defaultOpen:c(),disableHoverableContent:g(),group:m(),onOpenChange:({next:h})=>(c()!==h&&(f()?.(h),c(h)),h),positioning:{gutter:0,offset:{mainAxis:1}}}),y=Le([p.content,p.trigger],([h,C])=>({content:h,trigger:C}));q(()=>R(c()),()=>{c()!==void 0&&u.set(c())}),q(()=>R(i()),()=>{d("closeOnEscape",i())}),q(()=>R(r()),()=>{d("portal",r())}),q(()=>R(s()),()=>{d("closeOnPointerDown",s())}),q(()=>R(l()),()=>{d("openDelay",l())}),q(()=>R(a()),()=>{d("closeDelay",a())}),q(()=>R(m()),()=>{d("group",m())}),q(()=>R(g()),()=>{d("disableHoverableContent",g())}),fe(),It();var w=J(),v=Q(w);et(v,t,"default",{get ids(){return n()}}),W(e,w),Yt()}var ho=At("<div><!></div>"),wo=At("<div><!></div>"),vo=At("<div><!></div>"),yo=At("<div><!></div>"),xo=At("<div><!></div>");function bo(e,t){const o=bt(t,["children","$$slots","$$events","$$legacy"]),n=bt(o,["transition","transitionConfig","inTransition","inTransitionConfig","outTransition","outTransitionConfig","asChild","id","side","align","sideOffset","alignOffset","collisionPadding","avoidCollisions","collisionBoundary","sameWidth","fitViewport","strategy","overlap","el"]);qt(t,!1);const i=ce(),r=()=>Bt(x,"$content",i),s=()=>Bt(O,"$open",i),l=Ee();let a=b(t,"transition",24,()=>{}),c=b(t,"transitionConfig",24,()=>{}),f=b(t,"inTransition",24,()=>{}),g=b(t,"inTransitionConfig",24,()=>{}),m=b(t,"outTransition",24,()=>{}),u=b(t,"outTransitionConfig",24,()=>{}),d=b(t,"asChild",8,!1),p=b(t,"id",24,()=>{}),y=b(t,"side",8,"top"),w=b(t,"align",8,"center"),v=b(t,"sideOffset",8,0),h=b(t,"alignOffset",8,0),C=b(t,"collisionPadding",8,8),A=b(t,"avoidCollisions",8,!0),S=b(t,"collisionBoundary",24,()=>{}),L=b(t,"sameWidth",8,!1),Y=b(t,"fitViewport",8,!1),I=b(t,"strategy",8,"absolute"),H=b(t,"overlap",8,!1),D=b(t,"el",28,()=>{});const{elements:{content:x},states:{open:O},ids:T,getAttrs:E}=ve(),P=Se(),F=E("content");q(()=>R(p()),()=>{p()&&T.content.set(p())}),q(()=>r(),()=>{Re(l,r())}),q(()=>_(l),()=>{Object.assign(_(l),F)}),q(()=>(s(),R(y()),R(w()),R(v()),R(h()),R(C()),R(A()),R(S()),R(L()),R(Y()),R(I()),R(H())),()=>{s()&&mo({side:y(),align:w(),sideOffset:v(),alignOffset:h(),collisionPadding:C(),avoidCollisions:A(),collisionBoundary:S(),sameWidth:L(),fitViewport:Y(),strategy:I(),overlap:H()})}),fe(),It();var k=J(),V=Q(k);ft(V,()=>d()&&s(),tt=>{var st=J(),gt=Q(st);et(gt,t,"default",{get builder(){return _(l)}}),W(tt,st)},tt=>{var st=J(),gt=Q(st);ft(gt,()=>a()&&s(),Kt=>{var G=ho();let kt;var _t=pt(G);et(_t,t,"default",{get builder(){return _(l)}}),ht(G),yt(G,M=>D(M),()=>D()),wt(G,M=>_(l).action(M)),j(()=>z("m-pointerdown",G,P)),j(()=>z("m-pointerenter",G,P)),mt(()=>kt=vt(G,kt,{..._(l),...n})),Rt(3,G,a,c),W(Kt,G)},Kt=>{var G=J(),kt=Q(G);ft(kt,()=>f()&&m()&&s(),_t=>{var M=wo();let Mt;var Dt=pt(M);et(Dt,t,"default",{get builder(){return _(l)}}),ht(M),yt(M,B=>D(B),()=>D()),wt(M,B=>_(l).action(B)),j(()=>z("m-pointerdown",M,P)),j(()=>z("m-pointerenter",M,P)),mt(()=>Mt=vt(M,Mt,{..._(l),...n})),Rt(1,M,f,g),Rt(2,M,m,u),W(_t,M)},_t=>{var M=J(),Mt=Q(M);ft(Mt,()=>f()&&s(),Dt=>{var B=vo();let Wt;var Et=pt(B);et(Et,t,"default",{get builder(){return _(l)}}),ht(B),yt(B,N=>D(N),()=>D()),wt(B,N=>_(l).action(N)),j(()=>z("m-pointerdown",B,P)),j(()=>z("m-pointerenter",B,P)),mt(()=>Wt=vt(B,Wt,{..._(l),...n})),Rt(1,B,f,g),W(Dt,B)},Dt=>{var B=J(),Wt=Q(B);ft(Wt,()=>m()&&s(),Et=>{var N=yo();let Ht;var Jt=pt(N);et(Jt,t,"default",{get builder(){return _(l)}}),ht(N),yt(N,K=>D(K),()=>D()),wt(N,K=>_(l).action(K)),j(()=>z("m-pointerdown",N,P)),j(()=>z("m-pointerenter",N,P)),mt(()=>Ht=vt(N,Ht,{..._(l),...n})),Rt(2,N,m,u),W(Et,N)},Et=>{var N=J(),Ht=Q(N);ft(Ht,s,Jt=>{var K=xo();let ye;var Ie=pt(K);et(Ie,t,"default",{get builder(){return _(l)}}),ht(K),yt(K,Qt=>D(Qt),()=>D()),wt(K,Qt=>_(l).action(Qt)),j(()=>z("m-pointerdown",K,P)),j(()=>z("m-pointerenter",K,P)),mt(()=>ye=vt(K,ye,{..._(l),...n})),W(Jt,K)},null,!0),W(Et,N)},!0),W(Dt,B)},!0),W(_t,M)},!0),W(Kt,G)},!0),W(tt,st)}),W(e,k),Yt()}var Oo=At("<button><!></button>");function Ao(e,t){const o=bt(t,["children","$$slots","$$events","$$legacy"]),n=bt(o,["asChild","id","el"]);qt(t,!1);const i=ce(),r=()=>Bt(f,"$trigger",i),s=Ee();let l=b(t,"asChild",8,!1),a=b(t,"id",24,()=>{}),c=b(t,"el",28,()=>{});const{elements:{trigger:f},ids:g,getAttrs:m}=ve(),u=Se(),d=m("trigger");q(()=>R(a()),()=>{a()&&g.trigger.set(a())}),q(()=>r(),()=>{Re(s,r())}),q(()=>_(s),()=>{Object.assign(_(s),d)}),fe(),It();var p=J(),y=Q(p);ft(y,l,w=>{var v=J(),h=Q(v);et(h,t,"default",{get builder(){return _(s)}}),W(w,v)},w=>{var v=Oo();let h;var C=pt(v);et(C,t,"default",{get builder(){return _(s)}}),ht(v),yt(v,A=>c(A),()=>c()),wt(v,A=>_(s).action(A)),j(()=>z("m-blur",v,u)),j(()=>z("m-focus",v,u)),j(()=>z("m-keydown",v,u)),j(()=>z("m-pointerdown",v,u)),j(()=>z("m-pointerenter",v,u)),j(()=>z("m-pointerleave",v,u)),mt(()=>h=vt(v,h,{..._(s),type:"button",...n})),W(w,v)}),W(e,p),Yt()}function Lo(e,t){const o=bt(t,["children","$$slots","$$events","$$legacy"]),n=bt(o,["class","sideOffset","transition","transitionConfig"]);qt(t,!1);let i=b(t,"class",8,void 0),r=b(t,"sideOffset",8,4),s=b(t,"transition",8,en),l=b(t,"transitionConfig",24,()=>({y:8,duration:150}));It();var a=Xe(()=>nn("bg-popover text-popover-foreground z-50 overflow-hidden rounded-md border px-3 py-1.5 text-sm shadow-md",i()));bo(e,on({get transition(){return s()},get transitionConfig(){return l()},get sideOffset(){return r()},get class(){return _(a)}},()=>n,{children:(c,f)=>{var g=J(),m=Q(g);et(m,t,"default",{}),W(c,g)},$$slots:{default:!0}})),Yt()}const ko=po,Mo=Ao;export{ko as R,Mo as T,Lo as a,co as g,io as u};
