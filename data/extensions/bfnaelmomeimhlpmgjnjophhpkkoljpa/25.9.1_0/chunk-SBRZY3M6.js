import{a as i}from"./chunk-3HSHFE64.js";import{t as l}from"./chunk-ZIPBM4OE.js";import{K as p}from"./chunk-HTY4DAML.js";import{h as n,n as c}from"./chunk-3KENBVE7.js";n();c();var a=l?"browser-ext":"mobile";function s({hostname:o,...t},e){let r=o.includes("//")?new URL(o).hostname:o;return{data:t.type==="collectible"?{platform:a,hostname:r,collectionName:t.collectionName,label:e.label,uri:e.uri}:{hostname:r,platform:a,fungible:t.caip19,label:e.label,uri:e.uri}}}function u({hostname:o,...t}){let e=o.includes("//")?new URL(o).hostname:o;return{data:t.type==="collectible"?{platform:a,hostname:e,collectionName:t.collectionName}:{platform:a,hostname:e,fungible:t.caip19}}}n();c();var f=[["twitter",[/twitter.com/i]],["x",[/x.com/i]],["discord",[/discord.com/i,/discord.gg/i]],["telegram",[/t.me/i]],["instagram",[/instagram.com/i]]];function y(o){for(let[t,e]of f)if(e.some(r=>r.test(o)))return t;return i}function g(o,t){let e=p(o.toString());return t===i&&e?y(e):t}n();c();export{s as a,u as b,g as c};
//# sourceMappingURL=chunk-SBRZY3M6.js.map
