import{a as V,d as z,f as U}from"./chunk-XJPF73IY.js";import"./chunk-Q3UQVI54.js";import{a as D}from"./chunk-TEKKEVSO.js";import"./chunk-G67D6P6H.js";import"./chunk-YKOHKTA4.js";import"./chunk-RE5M6MUQ.js";import"./chunk-TJVVH2WB.js";import"./chunk-6ZOJTCTS.js";import"./chunk-SHAEZV7V.js";import{b as H}from"./chunk-YRQAR2SD.js";import"./chunk-MJUR6GSK.js";import"./chunk-5R5I7UFN.js";import"./chunk-FS5WEDFF.js";import"./chunk-NJHVGQ3T.js";import{a as A,e as O}from"./chunk-FMDLOOK7.js";import{b as _}from"./chunk-PUJ7YG5C.js";import"./chunk-2WTSXO3L.js";import{b as v,f as B}from"./chunk-6WTXMLHF.js";import{a as g}from"./chunk-C5UDUURS.js";import"./chunk-DZ2NE3XW.js";import"./chunk-NGO5FOJW.js";import"./chunk-2LU4YM7A.js";import"./chunk-E6VR42GU.js";import"./chunk-W27Z2YZM.js";import"./chunk-IVAERDLS.js";import"./chunk-DSKUEGWR.js";import"./chunk-2XU6ODO7.js";import"./chunk-7ZVEM3WY.js";import{k as N}from"./chunk-5LRZ7IFN.js";import{Y as M,db as k}from"./chunk-ATEHMOFB.js";import{e as o}from"./chunk-2P7VAWV5.js";import{W as u,l as E}from"./chunk-2JLBDXN2.js";import"./chunk-T2ZXNVG7.js";import"./chunk-QYQ24YHA.js";import"./chunk-B73KBMEE.js";import"./chunk-BB4NLGB2.js";import"./chunk-SWF27PRY.js";import"./chunk-BTKBODVJ.js";import{Cc as I,_c as p}from"./chunk-PQZYPWXP.js";import"./chunk-WFPABEAU.js";import"./chunk-FIZDH5HD.js";import"./chunk-QDZH7H34.js";import"./chunk-LWOUUIX7.js";import"./chunk-ETHULGZP.js";import{Ce as w,H as c,L as oe}from"./chunk-ERHX3GUR.js";import"./chunk-WY7QFQOG.js";import"./chunk-X6EPTHBD.js";import"./chunk-24ISZ5TA.js";import"./chunk-2J2WSGCG.js";import"./chunk-DHK5JDA3.js";import{m as F}from"./chunk-FI5JCZQR.js";import"./chunk-7XYHSLSH.js";import"./chunk-W476YZUB.js";import"./chunk-ZIPBM4OE.js";import"./chunk-HTY4DAML.js";import{a as ie}from"./chunk-6MAAUKN7.js";import"./chunk-UNDMYLJW.js";import{f as te,h as T,n as S}from"./chunk-3KENBVE7.js";T();S();var e=te(ie());var re=o(g).attrs({justify:"space-between"})`
  height: 100%;
`,ne=o(g).attrs({align:"center"})``,se=o(N)`
  width: 100%;
`,le=o.div`
  width: 100%;
  padding: 10px 10px 10px 0px;
`,ae=o.div`
  width: 100%;
  overflow: hidden;
  margin-bottom: 16px;
`,ce=o.div`
  display: flex;
  align-items: center;
`,me=o(k).attrs({size:14})`
  padding: 4px;
  margin-left: 4px;
  text-align: left;
`,de=o.div`
  border-bottom: 1px solid #222222;
  border-bottom-width: 1px;
`,pe=()=>{let{t}=F(),{pushDetailView:f}=v(),{hideCollectibleListingModal:P}=_(),$=(0,e.useCallback)(()=>{P()},[P]),{cluster:W}=I(),s=u(a=>a.listCollectible);if(!s)return null;let j=u(a=>a.setListPrice),[m,b]=(0,e.useState)(""),r=parseFloat(m),{data:K}=w("solana"),q=K?.address??void 0,G=s.asset.mintPubKey??"",{data:i}=E(W,G,q),l=i?.magic_eden?.floorPrice!==void 0?c(i?.magic_eden?.floorPrice):null,C=i?.magic_eden?.lastPurchasePrice!==void 0?c(i?.magic_eden?.lastPurchasePrice):null,L=i?.magic_eden?.feeInBasisPoints!==void 0?p(i?.magic_eden?.feeInBasisPoints):null,x=i?.magic_eden?.marketplaceFee!==void 0?Math.abs(p(i?.magic_eden?.marketplaceFee)):null,y=i?.magic_eden?.minListPrice!==void 0?c(i?.magic_eden?.minListPrice):null,J=s.asset.collectibleImage,Q=s.asset.name??null,X=s.asset.collectionName??null,Y=()=>{b(`${l??""}`)},[n,d]=(0,e.useState)();(0,e.useEffect)(()=>{t&&(y&&r<y.toNumber()?d({errorMessage:t("collectiblesMinimumListingPrice"),errorColor:"#EB3742"}):l&&r<l.toNumber()?d({errorMessage:t("collectiblesBelowFloorPrice"),errorColor:"#E5A221"}):d(void 0))},[t,r]);let Z=a=>{b(a)},h=m.length>0&&Number.isFinite(r)&&r>0&&n?.errorMessage!==t("collectiblesMinimumListingPrice"),R=()=>{j(r),n?.errorMessage===t("collectiblesBelowFloorPrice")?f(e.default.createElement(U,{artistRoyalties:L,marketplaceFee:x})):f(e.default.createElement(z,{artistRoyalties:L,marketplaceFee:x}))},ee=[{label:t("collectiblesFloorPrice"),value:l===null?"\u2014":`${l} SOL`,tooltipContent:t("collectiblesFloorPriceTooltip")},{label:t("collectiblesOriginalPurchasePrice"),value:C===null?"\u2014":`${C} SOL`,tooltipContent:t("collectiblesOriginalPurchasePriceTooltip")}];return e.default.createElement(re,null,e.default.createElement(ne,null,e.default.createElement(B,null,t("collectiblesListOnMagicEden")),e.default.createElement(le,null,e.default.createElement(O,{tooltipAlignment:"topLeft",iconSize:12,lineHeight:17,fontWeight:500,fontSize:16,info:e.default.createElement(A,null,t("collectiblesListPriceTooltip"))},t("collectiblesListPrice"))),e.default.createElement(ae,null,e.default.createElement(D,{value:m,symbol:"SOL",alignSymbol:"right",buttonText:t("collectiblesUseFloor"),width:80,maxLength:16,onSetTarget:Y,onUserInput:Z}),n&&e.default.createElement(ce,null,e.default.createElement(M,{fill:n.errorColor}),e.default.createElement(me,{color:n.errorColor},n.errorMessage))),e.default.createElement(V,{uri:J,collectibleName:Q,collectionName:X,borderRadius:"8px 8px 0px 0px"}),e.default.createElement(de,null),e.default.createElement(H,{rows:ee,borderRadius:"0px 0px 8px 8px"})),e.default.createElement(se,{primaryText:t("commandNext"),secondaryText:t("commandCancel"),onPrimaryClicked:R,onSecondaryClicked:$,primaryTheme:h?"primary":"default",primaryDisabled:!h}))},De=pe;export{pe as CreateListingPage,De as default};
//# sourceMappingURL=CreateListingPage-5YEBSJAH.js.map
