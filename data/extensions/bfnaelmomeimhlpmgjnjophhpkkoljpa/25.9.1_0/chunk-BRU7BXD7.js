import{b as f,c as T,e as x}from"./chunk-3HSHFE64.js";import{g,h as A,i as I}from"./chunk-2JLBDXN2.js";import{Q as C}from"./chunk-W476YZUB.js";import{u as y}from"./chunk-ZIPBM4OE.js";import{x as P}from"./chunk-HTY4DAML.js";import{a as S}from"./chunk-6MAAUKN7.js";import{f as h,h as o,n}from"./chunk-3KENBVE7.js";o();n();o();n();var Q=h(S());var k=P({minutes:5}),c=(t,r)=>C({enabled:t!==null&&r,gcTime:k,staleTime:k,refetchInterval:!1,refetchOnMount:!1,...x(t)});o();n();var D=h(S());o();n();function R(t,r){let e="type"in t&&t.type==="fungible"?t:null;if(!e)return!1;let i=e.platform==="all"||e.platform===r.platform,s=e.limitToTokenAddresses&&e.limitToTokenAddresses.length>0;return i&&!s?!0:i&&s?e.limitToTokenAddresses.some(u=>u===r.tokenAddress):!1}function _(t,r){let e=!("type"in t)||t.type==="collectible"?t:null;if(!e)return!1;let i=e.platform==="all"||e.platform===r.platform,s=e.limitToCollections&&e.limitToCollections.length>0;return i&&!s?!0:i&&s?e.limitToCollections.some(u=>u===r.collectionId):!1}var M=(t,r)=>t?t.filter(e=>r.type==="fungible"?R(e,r):_(e,r)).slice(0,20):[];o();n();var U=({input:t,shortcuts:r})=>{if(r.length===0)return[];let e=JSON.stringify(r);return t.collectionId&&(e=e.replaceAll("{{collectionId}}",t.collectionId)),t.tokenId&&(e=e.replaceAll("{{tokenId}}",t.tokenId)),t.ownerAddress&&(e=e.replaceAll("{{ownerAddress}}",t.ownerAddress)),JSON.parse(e)};var E=(t,r,e)=>(0,D.useMemo)(()=>{let i=U({input:r,shortcuts:t});return M(i,e)},[t,r,e]);function l(t){return!!(t&&typeof t=="object"&&"type"in t&&t.type==="fungible")}function B(t){return l(t)?f(t.externalUrl):f(t?.externalUrl)}function N(t){return l(t)?!1:t?.collection.isSpam??!0}function q(t,r){let e=B(t),i=T(e)&&!!e&&!N(t)&&r,{data:s,isPending:u}=c(i&&e?new URL(e):null,r),p=l(t)?"":v(t)??"",m=l(t)?t.tokenAddress:t?.id??"",d=y?"mobile":"desktop",w=l(t)?{platform:d,tokenAddress:m,type:"fungible"}:{platform:d,collectionId:p,type:"collectible"},L=E(s??[],{collectionId:p,tokenId:m,ownerAddress:t?.owner},w);return{isLoading:!t||u&&i,shortcuts:i?L:[]}}var v=t=>{if(t?.chainData){if(A(t.chainData))return t.chainData.contract;if(g(t.chainData))return t.collection.id;if(I(t.chainData))return t.chainData.firstCreatedInscriptionId}};o();n();o();n();export{q as a};
//# sourceMappingURL=chunk-BRU7BXD7.js.map
