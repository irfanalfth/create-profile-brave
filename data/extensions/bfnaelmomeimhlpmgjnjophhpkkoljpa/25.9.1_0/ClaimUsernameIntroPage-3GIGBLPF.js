import{A as W,B as Ne,D as Ae,a as ce,b as de,c as pe,d as ue,e as fe,f as ve,h as he,i as Ce,j,k as U,l as Se,m as ge,n as be,o as Ie,p as Te,q as Fe,r as Pe,s as L,t as O,u as Z,v as xe,w as ke,x as we,y as Ue,z as ye}from"./chunk-4UBTBGQJ.js";import"./chunk-YHKPRFNH.js";import{a as B,b as le}from"./chunk-OA3E7PE3.js";import"./chunk-NKSSHND5.js";import"./chunk-74I3B5H4.js";import"./chunk-KKA5RRTD.js";import{a as me}from"./chunk-GQ2QBAVB.js";import"./chunk-O7S62B4R.js";import{ha as Ve,w as re}from"./chunk-DSGFIM4C.js";import"./chunk-PAXKK56F.js";import"./chunk-BZEXQKR7.js";import"./chunk-QC7IENKX.js";import"./chunk-TH54P6T4.js";import"./chunk-YRQAR2SD.js";import"./chunk-MJUR6GSK.js";import"./chunk-5R5I7UFN.js";import"./chunk-FS5WEDFF.js";import"./chunk-NJHVGQ3T.js";import"./chunk-FMDLOOK7.js";import"./chunk-PUJ7YG5C.js";import"./chunk-U3WYUBZV.js";import"./chunk-JOYNNZVI.js";import"./chunk-2WTSXO3L.js";import{b as I,g as w}from"./chunk-6WTXMLHF.js";import"./chunk-C5UDUURS.js";import"./chunk-DZ2NE3XW.js";import{a as ae}from"./chunk-6PWMWQVM.js";import"./chunk-O2N6PUOM.js";import"./chunk-WWTHUL36.js";import"./chunk-NGO5FOJW.js";import"./chunk-DIDVQIO4.js";import"./chunk-HROBW3I6.js";import"./chunk-ZON27MKP.js";import"./chunk-O2GJOI3B.js";import"./chunk-2LU4YM7A.js";import"./chunk-E6VR42GU.js";import"./chunk-W27Z2YZM.js";import"./chunk-IVAERDLS.js";import"./chunk-XJTFMD4C.js";import"./chunk-DSKUEGWR.js";import"./chunk-2XU6ODO7.js";import"./chunk-7ZVEM3WY.js";import"./chunk-VQVTLSDS.js";import"./chunk-5LRZ7IFN.js";import"./chunk-ATEHMOFB.js";import"./chunk-2P7VAWV5.js";import"./chunk-RFHVH32K.js";import"./chunk-UCBZOSRF.js";import"./chunk-BBWCN5OU.js";import"./chunk-2JLBDXN2.js";import"./chunk-T2ZXNVG7.js";import"./chunk-QYQ24YHA.js";import"./chunk-B73KBMEE.js";import"./chunk-BB4NLGB2.js";import"./chunk-SWF27PRY.js";import"./chunk-BTKBODVJ.js";import"./chunk-SAX3UIWU.js";import"./chunk-RB5D6XZ6.js";import"./chunk-PQZYPWXP.js";import"./chunk-WFPABEAU.js";import"./chunk-FIZDH5HD.js";import"./chunk-QDZH7H34.js";import{H as R,I as ee,f as Y}from"./chunk-LWOUUIX7.js";import"./chunk-ETHULGZP.js";import"./chunk-IBEI3NGL.js";import"./chunk-LGUE2NXS.js";import"./chunk-RNP7TDDY.js";import{Ie as g,Qd as oe,Rb as K,fe as ne,hd as E,nd as X}from"./chunk-ERHX3GUR.js";import"./chunk-WY7QFQOG.js";import"./chunk-ZTEVIBRP.js";import{a as $,d as ie,da as te,ka as se,m as t,r as k}from"./chunk-X6EPTHBD.js";import"./chunk-24ISZ5TA.js";import"./chunk-2J2WSGCG.js";import"./chunk-DHK5JDA3.js";import{m as S}from"./chunk-FI5JCZQR.js";import"./chunk-7XYHSLSH.js";import"./chunk-W476YZUB.js";import"./chunk-ZIPBM4OE.js";import"./chunk-HTY4DAML.js";import{a as x}from"./chunk-6MAAUKN7.js";import"./chunk-UNDMYLJW.js";import{f as P,h as a,n as l}from"./chunk-3KENBVE7.js";a();l();var o=P(x());a();l();var c=P(x());a();l();var e=P(x());var Je=({showHeader:n=!1})=>{let{t:i}=S(),{scrollContainerRef:f,scrollPosition:b}=pe(),{data:s}=oe(),{data:r}=ne(),{pushDetailView:m}=I(),v=g(u=>u.username),T=g(u=>u.setIcon),{accountIcon:N,accountIndex:A}=(0,e.useMemo)(()=>{let Q=s?.findIndex(Ge=>Ge.identifier===r?.identifier)??0;return{accountIcon:s?.[Q]?.icon,accountIndex:Q}},[s,r]),{mutate:M}=ee(),{data:h}=R(),D=h?h.skinTone:Y.skinTone,[_,F]=(0,e.useState)(!1),[z,G]=(0,e.useState)(0),[C,H]=(0,e.useState)(N??K),je=(0,e.useCallback)(()=>{F(!0)},[]),J=(0,e.useCallback)(()=>{F(!1)},[]),Le=(0,e.useCallback)(u=>{H({unicode:u,imageUrl:void 0,type:"emoji"})},[]),Oe=(0,e.useCallback)(u=>{H({unicode:void 0,imageUrl:u,type:"image"})},[]),Ze=(0,e.useCallback)(u=>{M({skinTone:u}),J()},[J,M]),q=E(),We=(0,e.useCallback)(()=>{q.onAvatarSaved(C.type==="image"?"collectible":C.type==="emoji"?"emoji":"default"),T(C),m(e.default.createElement(Ae,{showHeader:n}))},[q,C,T,m,n]),_e=(0,e.useCallback)(()=>{H(K)},[H]),ze=(0,e.useMemo)(()=>[i("settingsEmojis"),i("collectiblesTab")],[i]);return{username:v,accountIndex:A,selectedAccount:r,currentSkinTone:D,onCollectibleSelect:Oe,onEmojiSelect:Le,onSave:We,onRemove:_e,openSkinToneMenu:je,hideSkinToneMenu:J,onSkinToneSelect:Ze,previewIcon:C,scrollContainerRef:f,scrollPosition:b,selectedTabIndex:z,setSelectedTabIndex:G,skinToneMenuVisible:_,tabs:ze}},Me=({showHeader:n=!1})=>{let{t:i}=S(),{popDetailView:f}=I();return e.default.createElement("div",{className:U},n?e.default.createElement(w,{disableIconBackground:!0,onLeftButtonClick:f},e.default.createElement(le,{numOfItems:6,currentIndex:2,maxVisible:5})):null,e.default.createElement("div",{className:W},e.default.createElement(t,{font:"title1Semibold",children:i("settingsClaimUsernameChooseAvatarTitle")})),e.default.createElement(Ke,{showHeader:n}))},Ke=({showHeader:n=!1})=>{let{t:i}=S(),{username:f,accountIndex:b,selectedAccount:s,currentSkinTone:r,onCollectibleSelect:m,onEmojiSelect:v,onSave:T,openSkinToneMenu:N,hideSkinToneMenu:A,onSkinToneSelect:M,previewIcon:h,scrollContainerRef:D,scrollPosition:_,selectedTabIndex:F,setSelectedTabIndex:z,skinToneMenuVisible:G,tabs:C}=Je({showHeader:n});return e.default.createElement(e.default.Fragment,null,s&&e.default.createElement("div",{className:Ce},e.default.createElement(me,{accountIndex:b,accountName:s.name,accountIcon:h,size:48}),e.default.createElement(t,{className:Ne,children:`@${f}`})),e.default.createElement(ce,{tabs:C,selectedIndex:F,setSelectedIndex:z},e.default.createElement("div",{className:ye},F===0&&e.default.createElement(ve,{currentSkinTone:r,isVisible:G,onClose:A,onClick:N,onSelect:M}))),e.default.createElement("div",{className:Ue,ref:D},e.default.createElement(de,{tabs:C,selectedIndex:F},e.default.createElement("div",{className:be},e.default.createElement(fe,{onEmojiSelect:v,containerRef:D,scrollPosition:_,skinTone:r,previewIcon:h})),s&&e.default.createElement(ue,{accountIdentifier:s.identifier,onCollectibleSelect:m,previewIcon:h}))),e.default.createElement("div",{className:we},e.default.createElement(ae,null,e.default.createElement("div",{className:$({width:"100%",paddingLeft:8,paddingRight:8,paddingBottom:8})},e.default.createElement(k,{disabled:!h.imageUrl&&!h.unicode,theme:"primary",className:$({width:"100%"}),onClick:T},i("commandSave"))))))};var De=({showHeader:n=!1})=>{let{t:i}=S(),{pushDetailView:f,popDetailView:b}=I(),s=g(m=>m.username),r=g(m=>m.available);return c.default.createElement("div",{className:U},n?c.default.createElement(w,{onLeftButtonClick:b},c.default.createElement(B,{numOfItems:6,currentIndex:1,maxVisible:5})):null,c.default.createElement("div",{className:W},c.default.createElement(t,{font:"heading3Semibold",children:i("settingsClaimUsernameTitle")}),c.default.createElement(t,{font:"caption",color:"textSecondary",children:i("settingsClaimUsernameHelperText")})),c.default.createElement("div",{className:Ie},c.default.createElement(re,null)),c.default.createElement(k,{className:j,theme:r===!1?"destructive":"primary",disabled:!r||!s,onClick:()=>f(c.default.createElement(Me,{showHeader:n}))},i("settingsClaimUsernameSaveAndContinue")))};a();l();var d=P(x()),He=({width:n=24,height:i=24})=>d.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:i,fill:"none"},d.default.createElement("g",{clipPath:"url(#a)"},d.default.createElement("circle",{cx:12,cy:12,r:10,fill:"#2EC08B"}),d.default.createElement("path",{fill:"#E2DFFE",d:"m18.273.42 1.105 2.78c.21.526.687.899 1.25.973l2.971.394c.28.037.328.422.065.527l-2.788 1.11c-.527.21-.901.687-.977 1.249l-.4 2.967c-.039.28-.424.328-.529.066l-1.105-2.78a1.565 1.565 0 0 0-1.25-.974l-2.97-.394c-.28-.037-.328-.422-.065-.527l2.787-1.109c.528-.21.902-.688.977-1.25l.401-2.967c.038-.28.424-.328.528-.065Z"}),d.default.createElement("circle",{cx:9.523,cy:9.738,r:1.075,fill:"#3C315B"}),d.default.createElement("circle",{cx:14.362,cy:9.738,r:1.075,fill:"#3C315B"}),d.default.createElement("path",{fill:"#3C315B",d:"M12 18c3.133 0 5.785-1.764 6.678-4.196.342-.931-.525-1.735-1.513-1.654-3.438.28-6.892.28-10.33 0-.988-.08-1.855.723-1.513 1.654C6.215 16.236 8.867 18 12 18Z"})),d.default.createElement("defs",null,d.default.createElement("clipPath",{id:"a"},d.default.createElement("path",{fill:"#fff",d:"M0 0h24v24H0z"}))));a();l();var p=P(x()),Ee=({width:n=24,height:i=24})=>p.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:i,fill:"none"},p.default.createElement("g",{clipPath:"url(#a)"},p.default.createElement("circle",{cx:12,cy:13.44,r:9.56,fill:"#FFD13F",stroke:"#FF7243",strokeWidth:2}),p.default.createElement("path",{stroke:"#FF7243",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"m8.16 9.6 3.92 3.84 2.8-2.743"}),p.default.createElement("circle",{cx:12,cy:13,r:1,fill:"#FF7243"}),p.default.createElement("path",{fill:"#FF7243",fillRule:"evenodd",d:"M14.38 0a.5.5 0 0 1 .5.5v.94a.48.48 0 0 1-.48.48.48.48 0 0 0-.48.48v.94a.5.5 0 0 1-.5.5h-2.84a.5.5 0 0 1-.5-.5V2.4a.48.48 0 0 0-.48-.48.48.48 0 0 1-.48-.48V.5a.5.5 0 0 1 .5-.5h4.76Zm6.197 3.666a.5.5 0 0 1 .136.694l-.435.646a.426.426 0 0 1-.592.116.426.426 0 0 0-.592.115l-.435.646a.5.5 0 0 1-.694.135l-.585-.394a.5.5 0 0 1-.136-.694l.436-.646a.426.426 0 0 0-.116-.592.426.426 0 0 1-.115-.591l.435-.646a.5.5 0 0 1 .694-.136l2 1.347Z",clipRule:"evenodd"}),p.default.createElement("path",{fill:"#FFFFC4",d:"m5.372 14.344.61 2.679c.116.507.497.912.996 1.06l2.64.776c.25.073.238.43-.015.487l-2.686.613a1.444 1.444 0 0 0-1.063.996l-.783 2.635c-.073.249-.43.238-.488-.015l-.61-2.678a1.437 1.437 0 0 0-.996-1.06l-2.64-.777c-.25-.073-.238-.429.016-.487l2.685-.613a1.444 1.444 0 0 0 1.063-.995l.783-2.636c.074-.248.43-.237.488.015Z"})),p.default.createElement("defs",null,p.default.createElement("clipPath",{id:"a"},p.default.createElement("path",{fill:"#fff",d:"M0 0h24v24H0z"}))));a();l();var y=P(x()),Be=({width:n=24,height:i=24})=>y.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:i,fill:"none"},y.default.createElement("path",{fill:"#AB9FF2",d:"M4.374 20.07s-1.463-1.08-1.37-3.244c.093-2.164.737-4.03 1.42-5.424.683-1.393 1.135-3.144 1.135-4.33 0-1.185-.328-3.378 1.132-3.408 1.46-.03 1.49 3.765 1.18 5.366 0 0 1.087-2.254 1.366-4.003.28-1.75.809-2.646 1.696-2.624 1.307.031 1.15 4.152-.248 7.621 0 0 1.603-4.48 2.095-5.999.492-1.518.72-2.06 1.817-2.023 1.098.036 1.022 2.122.568 3.88-.455 1.757-1.742 4.684-1.742 4.684s1.044-2.108 3.693-1.629a2.02 2.02 0 0 1 1.417.994c.279.503.527 1.264.454 2.334-.151 2.24-.559 2.749-1.778 2.71-1-.032-1.084-2.215-1.174-2.858a.29.29 0 0 0-.29-.246c-.316.003-1.226.413-1.967 1.774-1.147 2.107-.773 3.835-.314 3.973.46.137 1.121.521 2.415-1.51 1.294-2.03 2.745-.765 2.53.33-.216 1.094-1.179 4.39-5.72 5.324-4.542.933-7.778-1.136-8.315-1.69v-.002Z"}),y.default.createElement("path",{fill:"#FFFDF8",d:"m3.678 5.771.325 1.734a.923.923 0 0 0 .612.704l1.675.565c.158.053.142.281-.022.312l-1.739.326a.927.927 0 0 0-.706.612l-.568 1.671c-.054.158-.283.142-.313-.021L2.617 9.94a.923.923 0 0 0-.612-.705L.33 8.671C.172 8.618.19 8.39.353 8.359l1.738-.326a.927.927 0 0 0 .707-.612l.568-1.672c.053-.157.282-.141.312.022Z"}),y.default.createElement("path",{fill:"#FFFFC4",d:"M23.51 15.621a.793.793 0 0 1-.95.703l-2.66-.774c-.274-.08-.206-.497.086-.525l2.819-.267a.172.172 0 0 1 .035 0 .777.777 0 0 1 .67.863ZM23.463 10.775a.793.793 0 0 1-.377 1.12l-2.623.89c-.27.092-.454-.29-.23-.48l2.156-1.833c.01-.008.019-.016.029-.02a.777.777 0 0 1 1.044.323Z"}),y.default.createElement("path",{fill:"#FFFDF8",d:"M6.26 17.152c-.31-1.108.413-2.183-.375-1.954-.788.23-1.176 1.314-.865 2.422.31 1.108 1.2 1.821 1.989 1.592.788-.229-.439-.951-.749-2.06Z",opacity:.5}));var $e=()=>{let{t:n}=S(),{pushDetailView:i}=I(),{handleHideModalVisibility:f}=Ve(),{data:b}=X(),s=E(),r=self.innerHeight>te.height,m=g(A=>A.reset);(0,o.useEffect)(m,[m]);let[v,T]=(0,o.useState)(!!b?.username);(0,o.useEffect)(()=>{s.onClaimFlowStart()},[s]);let N=ie(Te,r?Pe:Fe);return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:U},o.default.createElement(se,{onIntroComplete:()=>T(!0),hasUsername:v,isSidebar:r,className:N}),o.default.createElement("div",{className:he},o.default.createElement(w,{onLeftButtonClick:()=>f("claimUsername")},o.default.createElement(B,{numOfItems:6,currentIndex:0,maxVisible:5}))),o.default.createElement("div",{className:r?ge:Se},o.default.createElement("div",{className:xe,style:{opacity:v?1:0}},o.default.createElement(t,{font:"heading3Semibold",children:n("settingsClaimUsernameTitle")}),o.default.createElement(t,{font:"caption",color:"textSecondary",children:n("settingsClaimUsernameDescription")})),o.default.createElement("div",{className:ke,style:{opacity:v?1:0}},o.default.createElement("div",{className:O},o.default.createElement("div",{className:L},o.default.createElement(He,null)),o.default.createElement("div",{className:Z},o.default.createElement(t,{font:"body",children:n("settingsClaimUsernameValueProp1")}),o.default.createElement(t,{font:"caption",color:"textSecondary",children:n("settingsClaimUsernameValueProp1Description")}))),o.default.createElement("div",{className:O},o.default.createElement("div",{className:L},o.default.createElement(Ee,null)),o.default.createElement("div",{className:Z},o.default.createElement(t,{font:"body",children:n("settingsClaimUsernameValueProp2")}),o.default.createElement(t,{font:"caption",color:"textSecondary",children:n("settingsClaimUsernameValueProp2Description")}))),o.default.createElement("div",{className:O},o.default.createElement("div",{className:L},o.default.createElement(Be,null)),o.default.createElement("div",{className:Z},o.default.createElement(t,{font:"body",children:n("settingsClaimUsernameValueProp3")}),o.default.createElement(t,{font:"caption",color:"textSecondary",children:n("settingsClaimUsernameValueProp3Description")}))))),o.default.createElement(k,{className:j,style:{opacity:v?1:0},disabled:!v,theme:"primary",onClick:()=>i(o.default.createElement(De,{showHeader:!0}))},n("settingsClaimUsernameContinue"))))},on=$e;export{$e as ClaimUsernameIntroPage,on as default};
//# sourceMappingURL=ClaimUsernameIntroPage-3GIGBLPF.js.map
