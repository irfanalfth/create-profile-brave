import{b as L}from"./chunk-CKYVDBFS.js";import"./chunk-B5RBJIEI.js";import{b as F}from"./chunk-QDZH7H34.js";import"./chunk-LWOUUIX7.js";import"./chunk-ETHULGZP.js";import{e as v}from"./chunk-LGUE2NXS.js";import{j as h}from"./chunk-RNP7TDDY.js";import{gd as T}from"./chunk-ERHX3GUR.js";import"./chunk-WY7QFQOG.js";import{a as f}from"./chunk-ZTEVIBRP.js";import{a as C,ba as k,c as p,l as d,m as s,n as b}from"./chunk-X6EPTHBD.js";import"./chunk-24ISZ5TA.js";import"./chunk-2J2WSGCG.js";import"./chunk-DHK5JDA3.js";import{a as M,m as S}from"./chunk-FI5JCZQR.js";import"./chunk-7XYHSLSH.js";import"./chunk-W476YZUB.js";import{q as P}from"./chunk-ZIPBM4OE.js";import"./chunk-HTY4DAML.js";import{a as x}from"./chunk-6MAAUKN7.js";import"./chunk-UNDMYLJW.js";import{f as g,h as y,n as l}from"./chunk-3KENBVE7.js";y();l();var e=g(x());y();l();var a=g(x()),I=({assets:t,name:o,onClick:n,estimatedArrival:i,description:r})=>a.default.createElement(b,{start:a.default.createElement("img",{className:C({size:44,borderRadius:"circle"}),src:t?.roundIcon,alt:o}),topLeft:o,bottomLeft:{before:a.default.createElement(p.Clock,{color:"textSecondary",size:14}),text:i},end:r?a.default.createElement(k,{index:0,alignment:"bottomLeft",content:a.default.createElement(s,null,r)},a.default.createElement(p.InfoCircle,{color:"textSecondary",size:16})):void 0,onClick:n});var K=()=>{let{t}=S(),{paymentMethods:o,moveToNextPage:n,isLoading:i,context:r}=N(),u=f();return e.default.createElement(d,{margin:16,maxHeight:"100%",height:"100%"},e.default.createElement(L,{isLoading:i,isEmpty:o.length===0,emptyStateText:t("buyThirdPartyScreenPaymentMethodEmptyState"),header:e.default.createElement(d,{direction:"row",alignContent:"center",position:"relative"},e.default.createElement(d,{position:"absolute",left:0,zIndex:10,cursor:"pointer"},e.default.createElement(p.ArrowLeft,{size:24,color:"textSecondary",onClick:()=>void u.pop()})),e.default.createElement(s,{flex:1,font:"heading3",align:"center"},t("buyThirdPartyScreenPaymentMethodTitle"))),content:e.default.createElement(d,{gap:8,marginTop:16,marginBottom:96},o.map(m=>e.default.createElement(I,{key:m.id,onClick:()=>{n(m)},...m})),e.default.createElement(s,{color:"textSecondary",children:t("buyThirdPartyScreenPaymentMethodFooter"),font:"caption"})),context:r}))},N=()=>{let t=h(),o=h(c=>c.setState),n=f(),i=T(),{currencyCode:r}=F(),{data:u,isPending:m}=v("web-embedded",P,M.language,{token:t.fungible?.caip19,purchaseAmount:t.purchaseAmount,purchaseType:t.purchaseType,fiatCurrencyCode:r}),w=c=>{o({...t,paymentMethod:c,provider:void 0,checkoutQuoteType:"recommended"}),i.capture("fiatOnrampPaymentMethodSelected",{data:{paymentMethodId:c.id}}),n.pop()};return{context:t.context,moveToNextPage:w,closeModal:t.onClose,isLoading:m,paymentMethods:u?.paymentMethods||[]}};export{K as FiatRampPaymentMethodsPage};
//# sourceMappingURL=FiatRampPaymentMethodsPage-ZYKXOMJJ.js.map
