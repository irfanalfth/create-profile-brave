import{L as e}from"./chunk-ETHULGZP.js";import{f as C}from"./chunk-W476YZUB.js";import{p as s}from"./chunk-ZIPBM4OE.js";import{f as B,h as o,i,n as p}from"./chunk-3KENBVE7.js";o();p();var a=B(C()),g=(()=>{let t=null;return async()=>(t||(s(i.CUSTOM_CRYPTO_BIP39)?t=await e.customCrypto("english",{random(r){return self.crypto.getRandomValues(new Uint8Array(r))},async sha256(r){return new Uint8Array(await self.crypto.subtle.digest("SHA-256",r))},pbkdf2(r,m,u,l,c){return new Promise((y,f)=>{(0,a.pbkdf2)(r,m,u,l,c,(n,w)=>{n?f(n):y(w)})})}}):t=await e.webCrypto("english")),t)})();export{g as a};
//# sourceMappingURL=chunk-LEJK3SFC.js.map
