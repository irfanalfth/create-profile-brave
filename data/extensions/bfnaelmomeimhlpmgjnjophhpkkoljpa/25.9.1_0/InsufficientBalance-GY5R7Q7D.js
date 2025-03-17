import{a as l,c as s}from"./chunk-ZXWO2YO2.js";import{a as I}from"./chunk-G67D6P6H.js";import{$ as h,ha as T}from"./chunk-DSGFIM4C.js";import"./chunk-PAXKK56F.js";import"./chunk-BZEXQKR7.js";import"./chunk-QC7IENKX.js";import"./chunk-TH54P6T4.js";import"./chunk-YRQAR2SD.js";import"./chunk-MJUR6GSK.js";import"./chunk-5R5I7UFN.js";import"./chunk-FS5WEDFF.js";import"./chunk-NJHVGQ3T.js";import"./chunk-FMDLOOK7.js";import"./chunk-PUJ7YG5C.js";import"./chunk-U3WYUBZV.js";import"./chunk-JOYNNZVI.js";import"./chunk-2WTSXO3L.js";import"./chunk-6WTXMLHF.js";import"./chunk-C5UDUURS.js";import"./chunk-DZ2NE3XW.js";import"./chunk-6PWMWQVM.js";import"./chunk-O2N6PUOM.js";import"./chunk-WWTHUL36.js";import"./chunk-NGO5FOJW.js";import"./chunk-DIDVQIO4.js";import"./chunk-HROBW3I6.js";import"./chunk-ZON27MKP.js";import"./chunk-O2GJOI3B.js";import"./chunk-2LU4YM7A.js";import"./chunk-E6VR42GU.js";import"./chunk-W27Z2YZM.js";import"./chunk-IVAERDLS.js";import"./chunk-XJTFMD4C.js";import"./chunk-DSKUEGWR.js";import"./chunk-2XU6ODO7.js";import"./chunk-7ZVEM3WY.js";import"./chunk-VQVTLSDS.js";import{j as g,k as C}from"./chunk-5LRZ7IFN.js";import{db as c}from"./chunk-ATEHMOFB.js";import{e as o}from"./chunk-2P7VAWV5.js";import"./chunk-RFHVH32K.js";import"./chunk-UCBZOSRF.js";import"./chunk-BBWCN5OU.js";import"./chunk-2JLBDXN2.js";import"./chunk-T2ZXNVG7.js";import"./chunk-QYQ24YHA.js";import"./chunk-B73KBMEE.js";import"./chunk-BB4NLGB2.js";import"./chunk-SWF27PRY.js";import"./chunk-BTKBODVJ.js";import"./chunk-SAX3UIWU.js";import"./chunk-RB5D6XZ6.js";import"./chunk-PQZYPWXP.js";import"./chunk-WFPABEAU.js";import"./chunk-FIZDH5HD.js";import"./chunk-QDZH7H34.js";import"./chunk-LWOUUIX7.js";import"./chunk-ETHULGZP.js";import"./chunk-IBEI3NGL.js";import"./chunk-LGUE2NXS.js";import"./chunk-RNP7TDDY.js";import{Db as x,gb as r,ob as y}from"./chunk-ERHX3GUR.js";import"./chunk-WY7QFQOG.js";import"./chunk-ZTEVIBRP.js";import{l as B}from"./chunk-X6EPTHBD.js";import"./chunk-24ISZ5TA.js";import"./chunk-2J2WSGCG.js";import"./chunk-DHK5JDA3.js";import{m as d}from"./chunk-FI5JCZQR.js";import"./chunk-7XYHSLSH.js";import"./chunk-W476YZUB.js";import"./chunk-ZIPBM4OE.js";import"./chunk-HTY4DAML.js";import{a as v}from"./chunk-6MAAUKN7.js";import"./chunk-UNDMYLJW.js";import{f as k,h as p,n as u}from"./chunk-3KENBVE7.js";p();u();var n=k(v());var M=o.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: scroll;
`,D=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 90px;
`,P=o(c).attrs({size:28,weight:500,color:"#FFF"})`
  margin: 16px;
`,S=o(c).attrs({size:14,weight:400,lineHeight:17,color:"#999"})`
  max-width: 275px;

  span {
    color: white;
  }
`,V=({networkId:t,token:a})=>{let{t:i}=d(),{handleHideModalVisibility:f}=T(),m=(0,n.useCallback)(()=>{f("insufficientBalance")},[f]),b=t&&y(x(r.getChainID(t))),{canBuy:w,openBuy:F}=h({caip19:b||"",context:"modal",analyticsEvent:"fiatOnrampFromInsufficientBalance"}),e=t?r.getTokenSymbol(t):i("tokens");return n.default.createElement(M,null,n.default.createElement("div",null,n.default.createElement(D,null,n.default.createElement(I,{type:"failure",backgroundWidth:75}),n.default.createElement(P,null,i("insufficientBalancePrimaryText",{tokenSymbol:e})),n.default.createElement(S,null,i("insufficientBalanceSecondaryText",{tokenSymbol:e})),a?n.default.createElement(B,{borderRadius:8,gap:1,marginTop:32,width:"100%"},n.default.createElement(l,{label:i("insufficientBalanceRemaining")},n.default.createElement(s,{color:"#EB3742"},`${a.balance} ${e}`)),n.default.createElement(l,{label:i("insufficientBalanceRequired")},n.default.createElement(s,null,`${a.required} ${e}`))):null)),w?n.default.createElement(C,{primaryText:i("buyAssetInterpolated",{tokenSymbol:e}),onPrimaryClicked:F,secondaryText:i("commandCancel"),onSecondaryClicked:m}):n.default.createElement(g,{onClick:m},i("commandCancel")))},K=V;export{V as InsufficientBalance,K as default};
//# sourceMappingURL=InsufficientBalance-GY5R7Q7D.js.map
