import{ha as C}from"./chunk-DSGFIM4C.js";import"./chunk-PAXKK56F.js";import"./chunk-BZEXQKR7.js";import"./chunk-QC7IENKX.js";import"./chunk-TH54P6T4.js";import"./chunk-YRQAR2SD.js";import"./chunk-MJUR6GSK.js";import"./chunk-5R5I7UFN.js";import"./chunk-FS5WEDFF.js";import"./chunk-NJHVGQ3T.js";import"./chunk-FMDLOOK7.js";import"./chunk-PUJ7YG5C.js";import"./chunk-U3WYUBZV.js";import"./chunk-JOYNNZVI.js";import"./chunk-2WTSXO3L.js";import"./chunk-6WTXMLHF.js";import"./chunk-C5UDUURS.js";import"./chunk-DZ2NE3XW.js";import"./chunk-6PWMWQVM.js";import"./chunk-O2N6PUOM.js";import"./chunk-WWTHUL36.js";import"./chunk-NGO5FOJW.js";import"./chunk-DIDVQIO4.js";import"./chunk-HROBW3I6.js";import"./chunk-ZON27MKP.js";import"./chunk-O2GJOI3B.js";import"./chunk-2LU4YM7A.js";import"./chunk-E6VR42GU.js";import"./chunk-W27Z2YZM.js";import{a as y}from"./chunk-IVAERDLS.js";import"./chunk-XJTFMD4C.js";import"./chunk-DSKUEGWR.js";import"./chunk-2XU6ODO7.js";import"./chunk-7ZVEM3WY.js";import"./chunk-VQVTLSDS.js";import{k as T}from"./chunk-5LRZ7IFN.js";import{da as v,db as a}from"./chunk-ATEHMOFB.js";import{e as o}from"./chunk-2P7VAWV5.js";import{Qa as u,ta as S}from"./chunk-RFHVH32K.js";import"./chunk-UCBZOSRF.js";import"./chunk-BBWCN5OU.js";import"./chunk-2JLBDXN2.js";import"./chunk-T2ZXNVG7.js";import"./chunk-QYQ24YHA.js";import"./chunk-B73KBMEE.js";import"./chunk-BB4NLGB2.js";import"./chunk-SWF27PRY.js";import"./chunk-BTKBODVJ.js";import"./chunk-SAX3UIWU.js";import"./chunk-RB5D6XZ6.js";import"./chunk-PQZYPWXP.js";import"./chunk-WFPABEAU.js";import"./chunk-FIZDH5HD.js";import"./chunk-QDZH7H34.js";import"./chunk-LWOUUIX7.js";import"./chunk-ETHULGZP.js";import"./chunk-IBEI3NGL.js";import"./chunk-LGUE2NXS.js";import"./chunk-RNP7TDDY.js";import"./chunk-ERHX3GUR.js";import"./chunk-WY7QFQOG.js";import"./chunk-ZTEVIBRP.js";import"./chunk-X6EPTHBD.js";import"./chunk-24ISZ5TA.js";import"./chunk-2J2WSGCG.js";import"./chunk-DHK5JDA3.js";import{m as w}from"./chunk-FI5JCZQR.js";import"./chunk-7XYHSLSH.js";import{ta as d}from"./chunk-W476YZUB.js";import{m,n as f}from"./chunk-ZIPBM4OE.js";import"./chunk-HTY4DAML.js";import{a as O}from"./chunk-6MAAUKN7.js";import"./chunk-UNDMYLJW.js";import{f as x,h as c,n as p}from"./chunk-3KENBVE7.js";c();p();var e=x(O());var h=o.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  padding: 16px;
`,k=o.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -20px;
`,b=o(a).attrs({size:28,weight:500,color:"#FFFFFF"})`
  margin-top: 24px;
`,P=o(a).attrs({size:16,weight:500,color:"#777777"})`
  padding: 0px 5px;
  margin-top: 9px;
  span {
    color: #ffffff;
  }
  label {
    color: #ab9ff2;
    cursor: pointer;
  }
`,F=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
`,A=o.div`
  margin-top: auto;
  width: 100%;
`,M=()=>{let{t:i}=w(),{mutateAsync:n}=u(),{handleHideModalVisibility:r,handleShowModalVisibility:t}=C(),{data:[s]}=d(["enable-swapper-skip-review"]),g=(0,e.useCallback)(()=>{t("swapConfirmation",void 0,{event:"showSwapModal",payload:{data:{uiContext:"SwapConfirmation"}}}),r("swapTermsOfService")},[t,r]),l=S({goToConfirmation:g});return{onAgreeClick:(0,e.useCallback)(()=>{n(!0),s?l():(t("swapReview",void 0,{event:"showSwapModal",payload:{data:{uiContext:"SwapReview"}}}),r("swapTermsOfService"))},[t,n,r,s,l]),onCancelClick:()=>{r("swapTermsOfService")},t:i}},B=()=>{self.open(m,"_blank")},L=()=>{self.open(f,"_blank")},_=e.default.memo(({onAgreeClick:i,onCancelClick:n,t:r})=>e.default.createElement(h,null,e.default.createElement(k,null,e.default.createElement(F,null,e.default.createElement(v,null),e.default.createElement(b,null,r("termsOfServicePrimaryText")),e.default.createElement(P,null,e.default.createElement(y,{i18nKey:"termsOfServiceDiscliamerFeesEnabledInterpolated"},"We have revised our Terms of Service. By clicking ",e.default.createElement("span",null,'"I Agree"')," you agree to our new",e.default.createElement("label",{onClick:B},"Terms of Service"),".",e.default.createElement("br",null),e.default.createElement("br",null),"Our new Terms of Service include a new ",e.default.createElement("label",{onClick:L},"fee structure")," for certain products.")))),e.default.createElement(A,null,e.default.createElement(T,{primaryText:r("termsOfServiceActionButtonAgree"),secondaryText:r("commandCancel"),onPrimaryClicked:i,onSecondaryClicked:n})))),V=()=>{let i=M();return e.default.createElement(_,{...i})},Z=V;export{V as SwapTermsOfServicePage,Z as default};
//# sourceMappingURL=SwapTermsOfServicePage-QTNXJF3R.js.map
