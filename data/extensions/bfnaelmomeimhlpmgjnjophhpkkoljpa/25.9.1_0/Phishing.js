import{a as U}from"./chunk-IVAERDLS.js";import{a as C}from"./chunk-UNRPRTOM.js";import"./chunk-XJTFMD4C.js";import{b as I}from"./chunk-DSKUEGWR.js";import"./chunk-2XU6ODO7.js";import"./chunk-7ZVEM3WY.js";import{a as P}from"./chunk-VQVTLSDS.js";import"./chunk-5LRZ7IFN.js";import{d as T,db as l,n as v}from"./chunk-ATEHMOFB.js";import{b as W,e as a}from"./chunk-2P7VAWV5.js";import{a as z}from"./chunk-GFO7KXZ7.js";import{c as L}from"./chunk-OWC6BNRL.js";import{f as k,i as x}from"./chunk-RFHVH32K.js";import"./chunk-UCBZOSRF.js";import"./chunk-BBWCN5OU.js";import"./chunk-2JLBDXN2.js";import"./chunk-T2ZXNVG7.js";import"./chunk-QYQ24YHA.js";import"./chunk-B73KBMEE.js";import{a as y}from"./chunk-BB4NLGB2.js";import{a as B}from"./chunk-SWF27PRY.js";import"./chunk-BTKBODVJ.js";import"./chunk-SAX3UIWU.js";import"./chunk-RB5D6XZ6.js";import"./chunk-PQZYPWXP.js";import"./chunk-WFPABEAU.js";import"./chunk-FIZDH5HD.js";import"./chunk-QDZH7H34.js";import"./chunk-LWOUUIX7.js";import"./chunk-ETHULGZP.js";import"./chunk-IBEI3NGL.js";import"./chunk-LGUE2NXS.js";import"./chunk-RNP7TDDY.js";import"./chunk-ERHX3GUR.js";import"./chunk-WY7QFQOG.js";import"./chunk-ZTEVIBRP.js";import"./chunk-X6EPTHBD.js";import"./chunk-24ISZ5TA.js";import"./chunk-2J2WSGCG.js";import"./chunk-DHK5JDA3.js";import{m as S}from"./chunk-FI5JCZQR.js";import"./chunk-7XYHSLSH.js";import{Y as O}from"./chunk-W476YZUB.js";import"./chunk-ZIPBM4OE.js";import"./chunk-HTY4DAML.js";import{a as b}from"./chunk-6MAAUKN7.js";import"./chunk-UNDMYLJW.js";import{f as p,h as n,n as s}from"./chunk-3KENBVE7.js";n();s();var w=p(b());var E=p(z());n();s();var e=p(b());n();s();var r=p(b());var m="#ca3214",K=a.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #fffdf8;
  padding: clamp(24px, 16vh, 256px) 24px;
  box-sizing: border-box;
`,$=a.div`
  margin-bottom: 24px;
  padding-bottom: 8vh;
`,A=a.div`
  max-width: 100ch;
  margin: auto;

  * {
    text-align: left;
  }
`,N=a.a`
  text-decoration: underline;
  color: ${m};
`,d=new y,D=({origin:i,subdomain:t})=>{let{t:g}=S(),c=i?x(i):"",J=i??"",f=new URL(J).hostname,u=t==="true"?f:c,M=async()=>{if(t==="true"){let h=await d.get("userWhitelistedSubdomains"),o=JSON.parse(`${h}`);o?o.push(f):o=[f],o=[...new Set(o)],d.set("userWhitelistedSubdomains",JSON.stringify(o))}else{let h=await d.get("userWhitelistedOrigins"),o=JSON.parse(`${h}`);o?o.push(c):o=[c],o=[...new Set(o)],d.set("userWhitelistedOrigins",JSON.stringify(o))}self.location.href=i};return r.default.createElement(K,null,r.default.createElement(A,null,r.default.createElement($,null,r.default.createElement(v,{width:128,fill:"#bbb9b6"})),r.default.createElement(l,{size:30,color:m,weight:"600"},g("blocklistOriginDomainIsBlocked",{domainName:u||g("blocklistOriginThisDomain")})),r.default.createElement(l,{color:m},g("blocklistOriginSiteIsMalicious")),r.default.createElement(l,{color:m},r.default.createElement(U,{i18nKey:"blocklistOriginCommunityDatabaseInterpolated"},"This site has been flagged as part of a",r.default.createElement(N,{href:k,rel:"noopener",target:"_blank"},"community-maintained database"),"of known phishing websites and scams. If you believe the site has been flagged in error,",r.default.createElement(N,{href:k,rel:"noopener",target:"_blank"},"please file an issue"),".")),u?r.default.createElement(l,{color:m,onClick:M,hoverUnderline:!0},g("blocklistOriginIgnoreWarning",{domainName:i})):r.default.createElement(r.default.Fragment,null)))};var G=()=>{let i;try{i=new URLSearchParams(self.location.search).get("origin")||"",new URL(i)}catch{i=""}return i},H=()=>new URLSearchParams(self.location.search).get("subdomain")||"",_=()=>{let i=(0,e.useMemo)(G,[]),t=(0,e.useMemo)(H,[]);return e.default.createElement(T,{future:{v7_startTransition:!0}},e.default.createElement(I,null,e.default.createElement(D,{origin:i,subdomain:t})))};B();O.init({provider:C});L();var j=document.getElementById("root"),q=(0,E.createRoot)(j);q.render(w.default.createElement(W,{theme:P},w.default.createElement(_,null)));
//# sourceMappingURL=Phishing.js.map
