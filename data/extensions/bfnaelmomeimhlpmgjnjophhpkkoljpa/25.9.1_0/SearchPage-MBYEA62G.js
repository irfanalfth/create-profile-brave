import{a as v}from"./chunk-BEPN5ZY4.js";import"./chunk-RKG6UEYA.js";import{a as E}from"./chunk-RJAJ3GON.js";import{ha as L}from"./chunk-DSGFIM4C.js";import"./chunk-PAXKK56F.js";import"./chunk-BZEXQKR7.js";import"./chunk-QC7IENKX.js";import"./chunk-TH54P6T4.js";import"./chunk-YRQAR2SD.js";import"./chunk-MJUR6GSK.js";import"./chunk-5R5I7UFN.js";import"./chunk-FS5WEDFF.js";import"./chunk-NJHVGQ3T.js";import"./chunk-FMDLOOK7.js";import"./chunk-PUJ7YG5C.js";import"./chunk-U3WYUBZV.js";import"./chunk-JOYNNZVI.js";import{b as C}from"./chunk-2WTSXO3L.js";import"./chunk-6WTXMLHF.js";import"./chunk-C5UDUURS.js";import"./chunk-DZ2NE3XW.js";import"./chunk-6PWMWQVM.js";import"./chunk-O2N6PUOM.js";import"./chunk-WWTHUL36.js";import"./chunk-NGO5FOJW.js";import"./chunk-DIDVQIO4.js";import"./chunk-HROBW3I6.js";import"./chunk-ZON27MKP.js";import"./chunk-O2GJOI3B.js";import"./chunk-2LU4YM7A.js";import"./chunk-E6VR42GU.js";import"./chunk-W27Z2YZM.js";import"./chunk-IVAERDLS.js";import"./chunk-XJTFMD4C.js";import"./chunk-DSKUEGWR.js";import"./chunk-2XU6ODO7.js";import"./chunk-7ZVEM3WY.js";import"./chunk-VQVTLSDS.js";import{h as w}from"./chunk-5LRZ7IFN.js";import"./chunk-ATEHMOFB.js";import"./chunk-2P7VAWV5.js";import{T as H}from"./chunk-RFHVH32K.js";import"./chunk-UCBZOSRF.js";import"./chunk-BBWCN5OU.js";import"./chunk-2JLBDXN2.js";import"./chunk-T2ZXNVG7.js";import"./chunk-QYQ24YHA.js";import"./chunk-B73KBMEE.js";import"./chunk-BB4NLGB2.js";import"./chunk-SWF27PRY.js";import"./chunk-BTKBODVJ.js";import"./chunk-SAX3UIWU.js";import"./chunk-RB5D6XZ6.js";import"./chunk-PQZYPWXP.js";import"./chunk-WFPABEAU.js";import"./chunk-FIZDH5HD.js";import"./chunk-QDZH7H34.js";import"./chunk-LWOUUIX7.js";import"./chunk-ETHULGZP.js";import"./chunk-IBEI3NGL.js";import"./chunk-LGUE2NXS.js";import"./chunk-RNP7TDDY.js";import{Jd as x}from"./chunk-ERHX3GUR.js";import"./chunk-WY7QFQOG.js";import"./chunk-ZTEVIBRP.js";import{a as p,c as h,l as c}from"./chunk-X6EPTHBD.js";import"./chunk-24ISZ5TA.js";import"./chunk-2J2WSGCG.js";import{d as D}from"./chunk-DHK5JDA3.js";import{m as I}from"./chunk-FI5JCZQR.js";import"./chunk-7XYHSLSH.js";import"./chunk-W476YZUB.js";import"./chunk-ZIPBM4OE.js";import{U as b}from"./chunk-HTY4DAML.js";import{a as y}from"./chunk-6MAAUKN7.js";import"./chunk-UNDMYLJW.js";import{f,h as i,n as m}from"./chunk-3KENBVE7.js";i();m();var F=f(D()),t=f(y());i();m();var o=f(y());i();m();var n=f(y());var M={input:p({paddingRight:44,paddingLeft:44})},T=(0,n.forwardRef)((e,a)=>{let{showLoadingIcon:r=!1,as:l,...s}=e;return n.default.createElement(c,{direction:"row",width:"100%"},n.default.createElement(c,{padding:4,marginRight:8},r?n.default.createElement(w,{diameter:20}):n.default.createElement(h.Search,{size:20,color:"textTertiary"})),n.default.createElement(C,{className:M.input,padding:"0",placeholderColor:"#777777",...s,ref:a,type:"text"}))});var k=({value:e,isLoading:a,onChange:r})=>{let{t:l}=I(),s=(0,o.useRef)(null),{handleHideModalVisibility:d}=L(),u=(0,o.useCallback)(()=>{d("searchPage")},[d]),S=(0,o.useCallback)(g=>{"value"in g.target&&typeof g.target.value=="string"&&r(g.target.value)},[r]),N=(0,o.useCallback)(()=>{r("")},[r]);return(0,o.useEffect)(()=>{setTimeout(()=>s.current?.focus(),200)},[]),o.default.createElement("div",{className:Q},o.default.createElement(T,{ref:s,borderWidth:"0px",placeholder:l("commandSearch"),value:e,onChange:S,showClearIcon:!!e,showLoadingIcon:a,onClear:N}),o.default.createElement("button",{className:B,onClick:u},o.default.createElement(h.X,{size:20,color:"textTertiary"})))},Q=p({padding:16,backgroundColor:"bgArea",display:"flex",flexDirection:"row",borderBottomStyle:"solid",borderBottomWidth:1,borderBottomColor:"borderSecondary"}),B=p({reset:"button",display:"flex",alignItems:"center",justifyItems:"center",color:"textSecondary",padding:4});var U=(0,F.default)((e,a)=>{e&&E.searchedByUser({searchTerm:e,uiContext:a})},1e3);function z(){let[e,a]=(0,t.useState)(""),r=b(e,250),l=e==null||e.length===0,s=x(),d=l?["solana:101"]:s,u=H({searchQuery:r,networkIds:d}),{showSpinner:S}=u;return(0,t.useEffect)(()=>{U(r,"home")},[r]),t.default.createElement(c,{position:"absolute",inset:0},t.default.createElement(k,{value:e,onChange:a,isLoading:S}),t.default.createElement(c,{overflow:"scroll"},t.default.createElement(v,{...u,entryPoint:"home",searchQuery:e})))}var ie=z;export{z as SearchPage,ie as default};
//# sourceMappingURL=SearchPage-MBYEA62G.js.map
