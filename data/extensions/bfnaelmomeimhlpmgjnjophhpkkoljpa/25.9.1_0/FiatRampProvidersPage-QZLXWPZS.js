import{b as B}from"./chunk-CKYVDBFS.js";import"./chunk-B5RBJIEI.js";import{c as _}from"./chunk-NGO5FOJW.js";import{b as O}from"./chunk-HROBW3I6.js";import"./chunk-2P7VAWV5.js";import{a as $}from"./chunk-SAX3UIWU.js";import"./chunk-PQZYPWXP.js";import"./chunk-WFPABEAU.js";import"./chunk-FIZDH5HD.js";import{b as L}from"./chunk-QDZH7H34.js";import"./chunk-LWOUUIX7.js";import"./chunk-ETHULGZP.js";import{b,j as C,k as R}from"./chunk-RNP7TDDY.js";import{gd as D}from"./chunk-ERHX3GUR.js";import"./chunk-WY7QFQOG.js";import{a as k}from"./chunk-ZTEVIBRP.js";import{_ as W,a as T,c as F,l as r,m as p,n as N}from"./chunk-X6EPTHBD.js";import"./chunk-24ISZ5TA.js";import"./chunk-2J2WSGCG.js";import"./chunk-DHK5JDA3.js";import{a as z,m as v}from"./chunk-FI5JCZQR.js";import"./chunk-7XYHSLSH.js";import{ta as q}from"./chunk-W476YZUB.js";import{q as Q}from"./chunk-ZIPBM4OE.js";import"./chunk-HTY4DAML.js";import{a as M}from"./chunk-6MAAUKN7.js";import"./chunk-UNDMYLJW.js";import{f as A,h as P,n as S}from"./chunk-3KENBVE7.js";P();S();var t=A(M());P();S();var c=A(M()),U=c.default.memo(e=>{let{t:i}=v(),{name:a,logo:m,tag:n,quote:o,onClick:u,index:f}=e,l={start:c.default.createElement("img",{className:T({size:44,borderRadius:"circle"}),src:m,alt:a}),topLeft:a,bottomLeft:n&&{text:n,color:f===0?"accentSuccess":"textSecondary"},onClick:()=>u(e)},s=o?{...l,topRight:o.displayDestinationAmount,bottomRight:`\u2248 ${o.displaySourceAmount}`}:{...l,end:c.default.createElement(r,{direction:"row",alignItems:"center",gap:4},c.default.createElement(p,{children:i("buyThirdPartyScreenViewQuote"),font:"caption",color:"textSecondary"}),c.default.createElement(F.ChevronRight,{color:"textSecondary",size:16}))};return c.default.createElement(N,{...s})});var Pt=()=>{let{t:e}=v(),i=k(),{onProviderSelected:a,isLoading:m,providers:n,paymentMethod:o,quoteTimeToExpiry:u,quoteTimeToExpiryColor:f,context:l}=Y();return t.default.createElement(r,{margin:16,maxHeight:"100%",height:"100%"},t.default.createElement(B,{isLoading:m,isEmpty:n.length===0,emptyStateText:e("buyThirdPartyScreenProvidersEmptyState"),header:t.default.createElement(r,{direction:"row",alignContent:"center",position:"relative"},t.default.createElement(r,{position:"absolute",left:0,zIndex:10,cursor:"pointer"},t.default.createElement(F.ArrowLeft,{size:24,color:"textSecondary",onClick:()=>void i.popStack()})),t.default.createElement(p,{flex:1,font:"heading3",align:"center"},e("fiatRampQuotes"))),content:t.default.createElement(t.default.Fragment,null,t.default.createElement(r,{gap:8,marginBottom:96,marginTop:12,flex:1},t.default.createElement($,{marginBottom:12}),t.default.createElement(W,{rows:[{type:"drawer",id:"selected-payment-method",onClick:()=>void i.to("fiat-ramp-detail-payment-methods"),start:o?.assets?.icon&&t.default.createElement(O,{image:{type:"fungible",src:o.assets.icon},size:24}),topLeft:o?.name||e("buyThirdPartyScreenPaymentMethod")}]}),t.default.createElement(r,{direction:"row",justifyContent:"space-between"},t.default.createElement(p,{font:"bodyMedium",color:"textSecondary",children:e("buyThirdPartyScreenProviders")}),t.default.createElement("div",null,t.default.createElement(p,{font:"captionMedium",color:"textSecondary",children:`${e("fiatRampNewQuote")}:`})," ",t.default.createElement(p,{className:T({width:32}),font:"captionMedium",color:f,children:u}))),t.default.createElement(r,{gap:8,flex:1,overflow:"scroll"},n.map((s,g)=>t.default.createElement(U,{key:`${s.id}-${g}`,index:g,onClick:a,...s}))))),context:l}))},Y=()=>{let e=k(),i=C(),a=C(d=>d.setState),{fungible:m,purchaseAmount:n,purchaseType:o,paymentMethod:u,ownerPublicKey:f,context:l}=i,s=D();if(!m)throw new Error("No fungible asset selected");let{data:[g]}=q(["enable-fiat-ramp-optimize-defaults"]),{currencyCode:V}=L(),{data:h,isPending:w}=R("web-embedded",Q,z.language,{...o==="currency"?{fiatAmount:n}:{tokenAmount:n},token:m.caip19,fiatCurrencyCode:V,paymentMethodId:u?.id,destinationAddress:{address:f,chainId:m.caip19.chainId,resourceType:"address"},optimizeDefaults:g}),x=u||h?.paymentMethod,E=h?.providers||[],j=(0,t.useCallback)(d=>{s.capture("fiatOnrampProviderSelected",{data:{chainId:h?.token?.chainId,providerId:d.id,paymentMethodId:x?.id,destinationAmount:d.quote?.displayDestinationAmount,sourceAmount:d.quote?.displaySourceAmount,asset:h?.token,tag:d.tag}}),a({...i,provider:d,paymentMethod:x,checkoutQuoteType:"selected"}),e.popStack()},[i,h?.token,x,a,s,e]),[y,I]=(0,t.useState)(b);_(()=>{w||E.length===0||I(y===0?b:y-1)},w?null:1e3);let H=y<10?`0:0${y}`:`0:${y}`,K=y<=10?"accentWarning":"textPrimary";return{providers:E,paymentMethod:x,onProviderSelected:j,closeModal:()=>!0,isLoading:w,quoteTimeToExpiry:H,quoteTimeToExpiryColor:K,context:l}};export{Pt as FiatRampProvidersPage};
//# sourceMappingURL=FiatRampProvidersPage-QZLXWPZS.js.map
