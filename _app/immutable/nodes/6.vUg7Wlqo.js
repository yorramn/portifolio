import{E as rt}from"../chunks/experience.BmpNzqmp.js";import{s as ot,e as st,t as f,a as r,b as _,c as h,d as it}from"../chunks/disclose-version.joNX4SD2.js";import{p as dt,a as lt,g as s,f as $,t as d,d as D,c as b,n as v,s as i,r as n}from"../chunks/utils.B4IxvO69.js";import{i as F}from"../chunks/index-client.y1pJLeBH.js";import{e as H,i as nt,d as mt}from"../chunks/stores.BFJChw35.js";import{s as w,h as ct,g as K,d as ft}from"../chunks/utils.BGoO_23D.js";import{B as vt}from"../chunks/base-page.hExDuKO9.js";import{E as _t}from"../chunks/empty-result.B-sVxyL_.js";import{F as ut,M as gt,E as xt}from"../chunks/markdown.C6UuBpe0.js";import{S as ht}from"../chunks/screenshot-card.lUi_5vc_.js";import{B as L}from"../chunks/index.DruLfDGK.js";import{S as O}from"../chunks/separator.MVVZA-Xj.js";import{H as pt}from"../chunks/h1.BJI0GsrA.js";import{M as P,A as yt}from"../chunks/assets.q1y1Y9Xz.js";import"../chunks/legacy.hZxyTXTl.js";function $t({params:p}){if(p.slug)return{item:rt.items.find(k=>k.slug===p.slug)}}const Jt=Object.freeze(Object.defineProperty({__proto__:null,load:$t},Symbol.toStringTag,{value:"Module"}));var bt=_('<a target="_blank"><!></a>'),wt=_('<img class="h-[20px] w-[20px]"> <!>',1),Pt=_("<a><!></a>"),kt=_('<div class="flex w-full flex-col items-center justify-center gap-4"><!> <!> <!> <!> <div class="flex flex-row flex-wrap justify-center gap-2"></div> <div class="flex flex-row flex-wrap justify-center gap-2"></div></div>'),St=_('<!> <div class="grid grid-cols-1 gap-2 py-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"></div>',1),Et=_('<!> <!> <!> <!> <div class="flex flex-col gap-2 px-4 pt-4"><!></div>',1);function Kt(p,t){dt(t,!0);const k=ot(),z=()=>it(mt,"$mode",k);let Q=D(()=>`${t.data?.item?.name??"Not Found"} - Skills`),R=D(()=>(z()=="dark"?t.data?.item?.logo.dark:t.data.item?.logo.light)??yt.Unknown.light),V=D(()=>`${K(t.data.item?.period.from)} - ${K(t.data.item?.period.to)} · ${ft(t.data.item?.period.from??new Date,t.data.item?.period.to)}`);vt(p,{get title(){return s(Q)},children:(W,Mt)=>{var N=st(),X=$(N);F(X,()=>!t.data.item,S=>{_t(S)},S=>{var T=Et(),U=$(T);ut(U,{get img(){return s(R)},children:(l,E)=>{var m=kt(),u=b(m);pt(u,{children:(a,o)=>{v();var e=f();d(()=>h(e,t.data.item.name)),r(a,e)},$$slots:{default:!0}});var c=i(u,2);P(c,{children:(a,o)=>{v();var e=f();d(()=>h(e,`${t.data.item.company??""} · ${t.data.item.location??""} · ${t.data.item.type??""}`)),r(a,e)},$$slots:{default:!0}});var g=i(c,2);P(g,{children:(a,o)=>{v();var e=f();d(()=>h(e,s(V))),r(a,e)},$$slots:{default:!0}});var y=i(g,2);O(y,{});var M=i(y,2);H(M,21,()=>t.data.item.links,a=>a.to,(a,o)=>{var e=bt(),j=b(e);L(j,{variant:"outline",children:(B,tt)=>{v();var x=f();d(()=>h(x,s(o).label)),r(B,x)},$$slots:{default:!0}}),n(e),d(()=>w(e,"href",s(o).to)),r(a,e)}),n(M);var I=i(M,2);H(I,21,()=>t.data.item.skills,a=>a.slug,(a,o)=>{var e=Pt();d(()=>w(e,"href",ct(`/skills/${s(o).slug}`)));var j=b(e);L(j,{variant:"outline",class:"flex flex-row items-center justify-center gap-2",children:(B,tt)=>{var x=wt(),A=$(x),et=i(A,2);P(et,{children:(at,jt)=>{v();var J=f();d(()=>h(J,s(o).name)),r(at,J)},$$slots:{default:!0}}),d(()=>{w(A,"src",z()==="dark"?s(o).logo.dark:s(o).logo.light),w(A,"alt",s(o).name)}),r(B,x)},$$slots:{default:!0}}),n(e),r(a,e)}),n(I),n(m),r(l,m)},$$slots:{default:!0}});var Y=i(U,2);O(Y,{});var q=i(Y,2);F(q,()=>t.data.item.description.trim(),l=>{gt(l,{get content(){return t.data.item.description}})},l=>{xt(l)});var C=i(q,2);O(C,{});var G=i(C,2),Z=b(G);F(Z,()=>t.data.item.screenshots&&t.data.item.screenshots.length>0,l=>{var E=St(),m=$(E);P(m,{children:(c,g)=>{v();var y=f("Screenshots");r(c,y)},$$slots:{default:!0}});var u=i(m,2);H(u,21,()=>t.data.item.screenshots,nt,(c,g)=>{ht(c,{get item(){return s(g)}})}),n(u),r(l,E)}),n(G),r(S,T)}),r(W,N)},$$slots:{default:!0}}),lt()}export{Kt as component,Jt as universal};
