import{a as i}from"./chunk-XJTFMD4C.js";import{b as g,c}from"./chunk-GFO7KXZ7.js";import{a as l}from"./chunk-OWC6BNRL.js";import{c as n}from"./chunk-UCBZOSRF.js";import{a as R}from"./chunk-BTKBODVJ.js";import{da as m}from"./chunk-W476YZUB.js";import{f as L,h as t,n as s}from"./chunk-3KENBVE7.js";t();s();t();s();var p=L(R());var d=async(o,e)=>{let a=i("logMessage",[o,e]),r=await n(p.default.runtime,a);if("error"in r)throw new Error(r.error.message);return r.result},u=async()=>{let o=i("downloadLogs",null),e=await n(p.default.runtime,o);if("error"in e)throw new Error(e.error.message);return e.result};var P={...c,downloadLog:async o=>{if(!g){console.error(m);return}await u();let e=l.getRequests();await g.downloadLog(o,e)},write:(o,e,a,r)=>{d(o,{featureTag:e,severity:a,data:r})}};export{P as a};
//# sourceMappingURL=chunk-UNRPRTOM.js.map
