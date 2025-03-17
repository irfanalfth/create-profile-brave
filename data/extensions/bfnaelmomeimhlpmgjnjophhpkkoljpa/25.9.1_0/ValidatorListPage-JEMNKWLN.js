import{a as F}from"./chunk-6QMSEIOJ.js";import"./chunk-5Y35E5BX.js";import"./chunk-TEKKEVSO.js";import{c as S,h as L,j as H,k as W}from"./chunk-BZEXQKR7.js";import{a as P}from"./chunk-QC7IENKX.js";import{A as k,d as V}from"./chunk-TH54P6T4.js";import{a as b}from"./chunk-MJUR6GSK.js";import"./chunk-FS5WEDFF.js";import"./chunk-NJHVGQ3T.js";import{a as c,b as f,e as z}from"./chunk-FMDLOOK7.js";import"./chunk-PUJ7YG5C.js";import{g as I}from"./chunk-2WTSXO3L.js";import{b as x}from"./chunk-6WTXMLHF.js";import"./chunk-C5UDUURS.js";import"./chunk-DZ2NE3XW.js";import{a as w}from"./chunk-6PWMWQVM.js";import{c as C}from"./chunk-WWTHUL36.js";import"./chunk-NGO5FOJW.js";import"./chunk-2LU4YM7A.js";import"./chunk-E6VR42GU.js";import"./chunk-IVAERDLS.js";import"./chunk-DSKUEGWR.js";import"./chunk-2XU6ODO7.js";import"./chunk-7ZVEM3WY.js";import{j as T}from"./chunk-5LRZ7IFN.js";import{db as d}from"./chunk-ATEHMOFB.js";import{e as r}from"./chunk-2P7VAWV5.js";import"./chunk-BBWCN5OU.js";import"./chunk-QYQ24YHA.js";import"./chunk-B73KBMEE.js";import"./chunk-BB4NLGB2.js";import"./chunk-SWF27PRY.js";import"./chunk-BTKBODVJ.js";import"./chunk-PQZYPWXP.js";import"./chunk-WFPABEAU.js";import"./chunk-FIZDH5HD.js";import"./chunk-QDZH7H34.js";import"./chunk-LWOUUIX7.js";import{h as v}from"./chunk-ETHULGZP.js";import"./chunk-ERHX3GUR.js";import"./chunk-WY7QFQOG.js";import{M as A}from"./chunk-X6EPTHBD.js";import"./chunk-24ISZ5TA.js";import"./chunk-2J2WSGCG.js";import"./chunk-DHK5JDA3.js";import{m}from"./chunk-FI5JCZQR.js";import"./chunk-7XYHSLSH.js";import"./chunk-W476YZUB.js";import"./chunk-ZIPBM4OE.js";import{Z as y,w as g}from"./chunk-HTY4DAML.js";import{a as B}from"./chunk-6MAAUKN7.js";import"./chunk-UNDMYLJW.js";import{f as D,h as u,n as h}from"./chunk-3KENBVE7.js";u();h();var t=D(B());var M=o=>{let{t:e}=m(),{searchResults:i,isLoading:n,hasError:l,isSuccess:a,showApy:s,onRefetch:p,setSearchTerm:E}=k();return t.default.createElement(W,{isLoading:n},l?t.default.createElement(S,{title:e("errorAndOfflineSomethingWentWrong"),description:e("validatorListErrorFetching"),refetch:p}):a&&i.length?t.default.createElement(O,{data:i,showApy:s,setSearchTerm:E}):t.default.createElement(_,null),t.default.createElement(w,null,t.default.createElement(T,{onClick:o.onClose},e("commandCancel"))))},Tt=M,_=()=>{let{t:o}=m();return t.default.createElement(d,{size:16,color:"#777777"},o("validatorListNoResults"))},j=84,O=o=>{let{t:e}=m(),{data:i,showApy:n,setSearchTerm:l}=o,a=(0,t.useRef)();return(0,t.useEffect)(()=>{setTimeout(()=>a.current?.focus(),200)},[]),t.default.createElement(K,null,t.default.createElement(N,null,t.default.createElement(I,{ref:a,tabIndex:0,placeholder:e("commandSearch"),onChange:s=>l(s.currentTarget.value),maxLength:50})),t.default.createElement(J,{showApy:n}),t.default.createElement(L,null,t.default.createElement(A,null,({height:s,width:p})=>t.default.createElement(C,{height:s,itemCount:i.length,itemData:i,itemSize:j,width:p},G))))},G=({index:o,style:e,data:i})=>{let n=i[o];return t.default.createElement("div",{key:n.identityPubkey,style:e},t.default.createElement(Q,{voteAccountPubkey:n.voteAccountPubkey,formattedPercentValue:n.totalApy?y(n.totalApy/100,{format:"0.00%"}):"",activatedStake:n.activatedStake,name:n.info?.name,keybaseUsername:n.info?.keybaseUsername,iconUrl:n.info?.iconUrl}))},K=r.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`,N=r.div`
  position: relative;
`,q=r.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`,U=r(z).attrs(()=>({iconSize:12,lineHeight:19,fontWeight:500,fontSize:16}))``,J=({showApy:o})=>{let{t:e}=m();return t.default.createElement(q,null,t.default.createElement(U,{tooltipAlignment:"bottomLeft",info:t.default.createElement(f,null,t.default.createElement(c,null,e("validatorInfoDescription")))},e("validatorInfoTooltip")),o?t.default.createElement(U,{tooltipAlignment:"bottomRight",info:t.default.createElement(f,null,t.default.createElement(c,null,e("validatorApyInfoDescription")))},e("validatorApyInfoTooltip")):null)},Q=o=>{let{pushDetailView:e,popDetailView:i}=x(),n=(0,t.useRef)(null),{data:l}=V(o.keybaseUsername),a=o.name??o.keybaseUsername??v(o.voteAccountPubkey);return t.default.createElement(X,{ref:n,onClick:()=>{e(t.default.createElement(F,{voteAccountPubkey:o.voteAccountPubkey,onClose:i}))}},t.default.createElement(Y,{iconUrl:o.iconUrl??l}),t.default.createElement(Z,null,t.default.createElement($,null,t.default.createElement(d,{size:16,weight:600,lineHeight:19,textAlign:"left",noWrap:!0},g(a,20)),t.default.createElement(d,{size:14,color:"#777777",lineHeight:19,textAlign:"left",noWrap:!0},t.default.createElement(P,{format:"0,0"},o.activatedStake))),t.default.createElement(d,{size:14,weight:400,lineHeight:19,textAlign:"left",noWrap:!0},o.formattedPercentValue)))},X=r(H)`
  display: grid;
  grid-template-columns: 44px auto;
  column-gap: 10px;
`,Y=r(b).attrs({width:44})``,Z=r.div`
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: space-between;
`,$=r.div`
  display: flex;
  flex-direction: column;
`;export{M as ValidatorListPage,Tt as default};
//# sourceMappingURL=ValidatorListPage-JEMNKWLN.js.map
