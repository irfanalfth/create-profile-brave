import{a as F}from"./chunk-KVRVAK45.js";import{a as b}from"./chunk-ZTJ2KKF7.js";import{a as w}from"./chunk-N36H6NE3.js";import"./chunk-ZXWO2YO2.js";import"./chunk-G67D6P6H.js";import"./chunk-RE5M6MUQ.js";import"./chunk-TJVVH2WB.js";import"./chunk-6ZOJTCTS.js";import"./chunk-SHAEZV7V.js";import{C as x,ha as T}from"./chunk-DSGFIM4C.js";import"./chunk-PAXKK56F.js";import"./chunk-BZEXQKR7.js";import"./chunk-QC7IENKX.js";import"./chunk-TH54P6T4.js";import"./chunk-YRQAR2SD.js";import"./chunk-MJUR6GSK.js";import"./chunk-5R5I7UFN.js";import"./chunk-FS5WEDFF.js";import"./chunk-NJHVGQ3T.js";import"./chunk-FMDLOOK7.js";import"./chunk-PUJ7YG5C.js";import"./chunk-U3WYUBZV.js";import"./chunk-JOYNNZVI.js";import"./chunk-2WTSXO3L.js";import{b as g}from"./chunk-6WTXMLHF.js";import"./chunk-C5UDUURS.js";import"./chunk-DZ2NE3XW.js";import{a as y}from"./chunk-6PWMWQVM.js";import"./chunk-O2N6PUOM.js";import"./chunk-WWTHUL36.js";import"./chunk-NGO5FOJW.js";import"./chunk-DIDVQIO4.js";import"./chunk-HROBW3I6.js";import"./chunk-ZON27MKP.js";import"./chunk-O2GJOI3B.js";import"./chunk-2LU4YM7A.js";import"./chunk-E6VR42GU.js";import"./chunk-W27Z2YZM.js";import"./chunk-IVAERDLS.js";import"./chunk-XJTFMD4C.js";import"./chunk-DSKUEGWR.js";import"./chunk-2XU6ODO7.js";import"./chunk-7ZVEM3WY.js";import"./chunk-VQVTLSDS.js";import{j as P}from"./chunk-5LRZ7IFN.js";import"./chunk-ATEHMOFB.js";import{e as i}from"./chunk-2P7VAWV5.js";import{Ka as S,db as R,eb as h,ia as c,oa as f,ua as v}from"./chunk-RFHVH32K.js";import"./chunk-UCBZOSRF.js";import"./chunk-BBWCN5OU.js";import"./chunk-2JLBDXN2.js";import"./chunk-T2ZXNVG7.js";import{w as C}from"./chunk-QYQ24YHA.js";import"./chunk-B73KBMEE.js";import"./chunk-BB4NLGB2.js";import"./chunk-SWF27PRY.js";import"./chunk-BTKBODVJ.js";import"./chunk-SAX3UIWU.js";import"./chunk-RB5D6XZ6.js";import"./chunk-PQZYPWXP.js";import"./chunk-WFPABEAU.js";import"./chunk-FIZDH5HD.js";import"./chunk-QDZH7H34.js";import"./chunk-LWOUUIX7.js";import"./chunk-ETHULGZP.js";import"./chunk-IBEI3NGL.js";import"./chunk-LGUE2NXS.js";import"./chunk-RNP7TDDY.js";import{fe as u}from"./chunk-ERHX3GUR.js";import"./chunk-WY7QFQOG.js";import"./chunk-ZTEVIBRP.js";import"./chunk-X6EPTHBD.js";import"./chunk-24ISZ5TA.js";import"./chunk-2J2WSGCG.js";import"./chunk-DHK5JDA3.js";import{m as d}from"./chunk-FI5JCZQR.js";import"./chunk-7XYHSLSH.js";import"./chunk-W476YZUB.js";import"./chunk-ZIPBM4OE.js";import"./chunk-HTY4DAML.js";import{a as M}from"./chunk-6MAAUKN7.js";import"./chunk-UNDMYLJW.js";import{f as I,h as l,n as m}from"./chunk-3KENBVE7.js";l();m();var e=I(M());var D=i.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow-y: scroll;
  padding: 16px 16px ${78}px; // footer height + padding
`,E=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,H=i.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px;
  position: absolute;
  bottom: 0;
`,Q=i.div`
  background-color: #2a2a2a;
  border-radius: 6px;
  width: 100%;

  > *:first-child {
    border-bottom: 1px solid #222222;
  }
`,W=()=>{let{t}=d(),{handleHideModalVisibility:r}=T(),{pushDetailView:n}=g(),{resume:p}=f(),o=c(a=>a.quoteResponse),{data:s}=u(),V=(0,e.useMemo)(()=>s?.addresses.find(a=>a.networkID===o?.sellToken.chainId),[s,o]);(0,e.useEffect)(()=>{S()},[]),C(V,"SWAP_FUNGIBLE");let B=(0,e.useCallback)(()=>n(e.default.createElement(b,null)),[n]),k=v({goToConfirmation:B}),A=(0,e.useCallback)(()=>{p(),r("swapReview")},[r,p]);return{...k,hideSwapReview:A,t}},q=e.default.memo(({buyToken:t,sellToken:r,hideSwapReview:n,onSwap:p,t:o})=>{let{infoRowDisplayStrategy:s}=h();return e.default.createElement(D,null,e.default.createElement(E,null,e.default.createElement(x,{leftButton:{type:"close",onClick:n}},o("swapReviewFlowPrimaryText")),e.default.createElement(Q,null,e.default.createElement(w,{...r,title:o("swapReviewFlowYouPay")}),e.default.createElement(w,{...t,title:o("swapReviewFlowYouReceive")})),e.default.createElement(F,{isSwapReview:!0,rowDisplayStrategy:s})),e.default.createElement(H,null,e.default.createElement(y,{removeFooterExpansion:!0,removeShadowFooter:!0},e.default.createElement(P,{theme:"primary",onClick:p},o("swapReviewFlowActionButtonPrimary")))))}),N=()=>{let t=W();return e.default.createElement(R,null,e.default.createElement(q,{...t}))},Y=()=>e.default.createElement(N,null),ne=Y;export{Y as SwapReviewPage,ne as default};
//# sourceMappingURL=SwapReviewPage-V3PBBP22.js.map
