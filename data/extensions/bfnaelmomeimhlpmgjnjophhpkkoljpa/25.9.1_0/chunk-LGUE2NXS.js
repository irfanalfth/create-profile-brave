import{b as H,d as V,f as h,h as I,i as A,j as q}from"./chunk-RNP7TDDY.js";import{S as y,V as l,Vc as k,fe as x,gb as _,nb as v,ob as w}from"./chunk-ERHX3GUR.js";import{a as C}from"./chunk-FI5JCZQR.js";import{Q as T}from"./chunk-W476YZUB.js";import{q as b}from"./chunk-ZIPBM4OE.js";import{x as d}from"./chunk-HTY4DAML.js";import{h as t,n as o}from"./chunk-3KENBVE7.js";t();o();t();o();var O=new h("Failed to get FiatRampTokens"),N=async(a,s,r)=>{try{let e=await y.api().headers(a).bearer(r).post("/fiat_ramp/v2/onramp/tokens",s);if(!l(e))throw O;return e.data}catch{throw O}};t();o();var g=a=>a.sort((s,r)=>_.compareNetworkID(s.token.caip19.chainId,r.token.caip19.chainId));var z=d({days:7}),J=d({hours:1}),D=(a,s,r,e=!0,n)=>{let{data:p}=x(),m=Array.from(new Set(p?.addresses?.map(i=>i.networkID))),u=Array.from(new Set(p?.addresses?.map(i=>i.addressType))),F={chainIDs:m},E={"x-client-platform":a,"x-client-app-version":s,"x-client-locale":r},{data:P}=k(),M=P?.userID,S=P?.accessToken;return T({queryKey:I.fiatRampTokens(E,F,M),queryFn:()=>N(E,F,S),gcTime:z,staleTime:J,enabled:e&&m.length>0,select:i=>{let f={...i,groups:i.groups.map(c=>({...c,tokens:g(c.tokens.filter(Q=>Q.addressType?u.includes(Q.addressType):!0))}))};return n?n(f):f}})};t();o();t();o();var K=a=>{let s=a?.groups.flatMap(r=>r.tokens)??[];return g(s)};var L=(a,s,r,e=!0)=>D(a,s,r,e,K);t();o();t();o();var U=({clientPlatform:a,appVersion:s,locale:r,caip19:e,addressType:n})=>{let{data:p,isLoading:m,isError:u,isFetched:F}=x(),{data:E=[],isLoading:P,isError:M,isFetched:S}=L(a,s,r),i=E.find(c=>n&&_.getChainName(v(e).chainId)===_.bitcoin.name?w(c.token.caip19)===e&&"addressType"in c&&c.addressType===n:w(c.token.caip19)===e),f=p?.addresses.find(c=>i?.addressType?c.addressType===i.addressType&&c.networkID===i?.token.caip19.chainId:c.networkID===i?.token.caip19.chainId)?.address??"";return i?.token.caip19.chainId&&_.isEVMNetworkID(i.token.caip19.chainId)&&(f=f.toLowerCase()),{tokenToBuy:i,destinationAddress:f,quickSelectDenominations:i?.quickSelectDenominations||V,isLoading:m||P,isError:u||M,isFetched:F&&S}};var Z=({addressType:a,caip19:s,amount:r,context:e,redirectURL:n,captureAnalyticsEvent:p,navigateToFiatRampForm:m,onClose:u})=>{let{setState:F}=q(),{tokenToBuy:E,destinationAddress:P,quickSelectDenominations:M,isLoading:S,isError:i,isFetched:f}=U({clientPlatform:"web",appVersion:b,locale:C.language,caip19:s,addressType:a}),c=!!E&&!!P;return{canBuy:c,openBuy:()=>{c&&(F({...A,onClose:u??(()=>{}),ownerPublicKey:P,fungible:E.token,quickSelectDenominations:M,purchaseAmount:r??"",context:e??"modal",redirectURL:n}),p&&p(),m&&m())},isLoading:S,isError:i,isFetched:f}};t();o();t();o();t();o();var j=new h("Failed to get FiatRampPaymentMethods"),B=async(a,s,r)=>{try{let e=await y.api().headers(a).bearer(r).post("/fiat_ramp/v2/onramp/payment_methods",s);if(!l(e))throw j;return e.data}catch{throw j}};var $=d({days:7}),ee=d({hours:1}),te=(a,s,r,e)=>{let n={"x-client-platform":a,"x-client-app-version":s,"x-client-locale":r},{data:p}=k(),m=p?.userID,u=p?.accessToken;return T({queryKey:I.fiatRampPaymentMethods(n,e,m),queryFn:()=>B(n,e,u),gcTime:$,staleTime:ee})};t();o();t();o();var W=new h("Failed to get ramp status"),Y=async(a,s,r)=>{try{let e=await y.api().headers(a).bearer(r).post("/fiat_ramp/v2/onramp/event_status",s);if(!l(e))throw W;return e.data}catch{throw W}};var oe=d({seconds:H}),ae=d({hours:1}),se=(a,s,r,e)=>{let n={"x-client-platform":a,"x-client-app-version":s,"x-client-locale":r},{data:p}=k(),m=p?.userID,u=p?.accessToken;return T({enabled:!!e,queryKey:I.fiatRampStatus(n,e,m),queryFn:()=>Y(n,{sessionId:e},u),gcTime:ae,staleTime:oe,refetchInterval:1e4})};t();o();t();o();t();o();var G=new h("Failed to get FiatRampRecommendedQuote"),X=async(a,s,r)=>{try{let e=await y.api().headers(a).bearer(r).post("/fiat_ramp/v2/onramp/recommended_quote",s);if(!l(e))throw G;return e.data}catch{throw G}};var re=d({days:7}),ne=d({hours:1}),ie=(a,s,r,e,n=!0)=>{let p={"x-client-platform":a,"x-client-app-version":s,"x-client-locale":r},{data:m}=k(),u=m?.userID,F=m?.accessToken;return T({queryKey:I.fiatRampRecommendedQuote(p,e,u),queryFn:()=>X(p,e,F),gcTime:re,staleTime:ne,enabled:n})};export{D as a,L as b,U as c,Z as d,te as e,ie as f,se as g};
//# sourceMappingURL=chunk-LGUE2NXS.js.map
