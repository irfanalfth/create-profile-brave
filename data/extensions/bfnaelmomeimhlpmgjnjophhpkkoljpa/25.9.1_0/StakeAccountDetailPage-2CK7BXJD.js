import{a as k}from"./chunk-QC7IENKX.js";import{d as mt,g as pt,h as At}from"./chunk-TH54P6T4.js";import{a as St}from"./chunk-MJUR6GSK.js";import{a as gt,b as ft,e as vt}from"./chunk-FMDLOOK7.js";import{b as dt}from"./chunk-PUJ7YG5C.js";import{f as h}from"./chunk-6WTXMLHF.js";import"./chunk-DZ2NE3XW.js";import"./chunk-NGO5FOJW.js";import"./chunk-2LU4YM7A.js";import"./chunk-E6VR42GU.js";import{a as kt}from"./chunk-IVAERDLS.js";import"./chunk-DSKUEGWR.js";import"./chunk-2XU6ODO7.js";import"./chunk-7ZVEM3WY.js";import{h as ut,j as p}from"./chunk-5LRZ7IFN.js";import{db as i}from"./chunk-ATEHMOFB.js";import{e as s}from"./chunk-2P7VAWV5.js";import{c as F,x as ct,y as lt}from"./chunk-BBWCN5OU.js";import"./chunk-QYQ24YHA.js";import"./chunk-B73KBMEE.js";import"./chunk-BB4NLGB2.js";import"./chunk-SWF27PRY.js";import"./chunk-BTKBODVJ.js";import{Ad as it,Da as et,Ea as ot,ld as nt,rc as at}from"./chunk-PQZYPWXP.js";import"./chunk-WFPABEAU.js";import"./chunk-FIZDH5HD.js";import"./chunk-QDZH7H34.js";import{P as Z,Q as R}from"./chunk-LWOUUIX7.js";import{h as z}from"./chunk-ETHULGZP.js";import{Db as X,fe as tt,gb as J}from"./chunk-ERHX3GUR.js";import"./chunk-WY7QFQOG.js";import{l as rt,m as st}from"./chunk-X6EPTHBD.js";import"./chunk-24ISZ5TA.js";import"./chunk-2J2WSGCG.js";import"./chunk-DHK5JDA3.js";import{m as f}from"./chunk-FI5JCZQR.js";import"./chunk-7XYHSLSH.js";import"./chunk-W476YZUB.js";import"./chunk-ZIPBM4OE.js";import{B as V}from"./chunk-HTY4DAML.js";import{a as $}from"./chunk-6MAAUKN7.js";import"./chunk-UNDMYLJW.js";import{f as G,h as w,n as y}from"./chunk-3KENBVE7.js";w();y();var t=G($());w();y();var l=G($());var zt=s.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 47px auto;
  align-items: center;
  justify-content: flex-start;
  background: #2a2a2a;
  width: 328px;
  border-radius: 6px;
  margin-top: 24px;
`,Ft=s.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 33px 1fr auto;
  align-items: center;
  padding: 9px 14px;
  border-bottom: 1px solid #222222;
`,Et=s(St)``,Lt=s.section`
  padding: 14px;
`,Nt=s.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 30px;
  align-items: center;
`,Ht=s(i)`
  color: ${a=>a.activationState==="active"?"#21E56F":a.activationState==="inactive"?"#EB3742":a.activationState==="activating"||a.activationState==="deactivating"?"#FFE920":"#777777"};
`,Mt=s(vt).attrs(()=>({tooltipAlignment:"bottomCenter",iconSize:12,lineHeight:17,fontWeight:400,fontSize:14,noWrap:!0}))``,E=a=>{let{t:o}=f(),{data:u}=mt(a.validatorKeybaseUsername),d=a.validatorName??a.validatorKeybaseUsername??a.voteAccountPubkey??a.stakeAccountPubkey;return l.default.createElement(zt,null,l.default.createElement(Ft,null,l.default.createElement(Et,{width:28,iconUrl:a.validatorIconUrl??u}),l.default.createElement(i,{textAlign:"left",weight:600,size:16,noWrap:!0},d),l.default.createElement(Ht,{activationState:a.status,textAlign:"right",weight:400,size:14,noWrap:!0,textTransform:"capitalize"},a.status??"")),l.default.createElement(Lt,null,Object.entries(a.data).map(([r,n])=>l.default.createElement(Nt,{key:r,onClick:n.onClick},l.default.createElement(Mt,{info:n.tooltip?l.default.createElement(ft,null,l.default.createElement(gt,null,n.tooltip)):null},r==="Stake Account"?o("stakeAccountCardStakeAccount"):"",r==="Balance"?o("stakeAccountCardBalance"):"",r==="Rent Reserve"?o("stakeAccountCardRentReserve"):"",r==="Active Stake"?o("stakeAccountCardActiveStake"):"",r==="Lockup"?o("stakeAccountCardLockup"):"",r==="Rewards"?o("stakeAccountCardRewards"):""),n.node))))};var C=s.div`
  position: relative;
  display: grid;
  grid-template-rows: 42px auto 47px;
  height: 100%;
`,x=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,wt=s.a.attrs({target:"_blank",rel:"noopener noreferrer"})`
  color: #ab9ff2;
  text-decoration: none;
  cursor: pointer;
`,L=s.section`
  display: flex;
  gap: 15px;
`,Kt=s.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`,Ot=5e3,_t=a=>{let{t:o}=f(),{showStakeAccountDeactivateStakeStatusModal:u,showStakeAccountDelegateStakeStatusModal:d,showStakeAccountWithdrawStakeStatusModal:r,closeAllModals:n}=dt(),{data:S}=tt(),v=(0,t.useMemo)(()=>S?.addresses.find(g=>J.isSolanaNetworkID(g.networkID)),[S]),{solanaPublicKey:ht,connection:b,networkID:N}=(0,t.useMemo)(()=>{let g=v?.address??"",Y=v?.networkID,It=et(ot(Y));return{solanaPublicKey:g,connection:It,networkID:Y}},[v]),Ct=X("solana"),{data:xt}=at({query:{data:Ct}}),{fungible:P}=nt({key:"SolanaNative"}),T=xt?.usd,A=pt(b,ht),e=A.data?.find(g=>g.pubkey===a.stakeAccountPubkey),D=e?.info.meta.authorized.staker,bt=e?.lamports??0,H=parseFloat(e?.info.meta.rentExemptReserve??"0"),Pt=!!e?.inflationReward,{data:Tt=H}=it(v),W=typeof P?.data.balance<"u"&&P.data.balance.shiftedBy(P.data.decimals).gt(Tt+Ot),c=At(b,e?.pubkey).data,Dt=c?.active??0,Wt=c?.inactive??0,B=bt-H-Dt,M=e?.info.stake?.delegation.voter,Bt=jt(b),m=M?Bt.get(M):void 0,K=new Date((e?.info.meta.lockup?.unixTimestamp??0)*1e3),U=lt(e),O=(c?.state==="active"||c?.state==="activating")&&W,_=c?.state==="inactive"&&!U&&W,{data:Ut}=Z(N),{data:j}=R(N,e?.pubkey??""),I=[{key:"viewOnExplorer",label:o("stakeAccountViewViewOnExplorer",{explorer:Ut}),onClick:()=>{j&&self.open(j,"_blank")}}];e&&(m&&(c?.state==="inactive"||c?.state==="deactivating")&&I.push({key:"restake",label:o("stakeAccountViewRestake"),onClick:()=>{d({stakeAccountPubkey:e.pubkey,voteAccountPubkey:m?.voteAccountPubkey,lamports:c.inactive,onClose:n})}}),B>0&&B>Wt&&I.push({key:"withdrawUnstakedSOL",label:o("stakeAccountViewWithdrawUnstakedSOL"),onClick:()=>{r({stakeAccountPubkey:e.pubkey,amount:B,usdPerSol:T,onClose:n})}}));let Q=(0,t.useCallback)(()=>{!e||!D||u({stakeAccountPubkey:e.pubkey,stakeAuthorityPubkey:D,onClose:n})},[e,D,u,n]),q=(0,t.useCallback)(()=>{e&&r({stakeAccountPubkey:e.pubkey,amount:e.lamports,usdPerSol:T,onClose:n})},[e,r,T,n]);return A.isPending?t.default.createElement(C,null,t.default.createElement(ut,null)):A.isError?t.default.createElement(C,null,t.default.createElement(h,null,o("stakeAccountViewPrimaryText")),t.default.createElement(x,null,t.default.createElement(i,{size:16,color:"#777777",lineHeight:20},A.error?.message??o("stakeAccountViewError"))),t.default.createElement(L,null,t.default.createElement(p,{onClick:n},o("commandClose")))):A.isSuccess&&e?t.default.createElement(C,null,t.default.createElement(h,{items:I},o("stakeAccountViewPrimaryText")),m?t.default.createElement(t.default.Fragment,null,t.default.createElement(x,null,t.default.createElement(i,{size:16,color:"#777777",lineHeight:20},t.default.createElement(kt,{i18nKey:"stakeAccountViewSOLCurrentlyStakedInterpolated"},"Your SOL is currently staked with a validator. You\u2019ll need to unstake to ",t.default.createElement("br",null),"access these funds. ",t.default.createElement(wt,{href:F},"Learn more"))),t.default.createElement(E,{stakeAccountPubkey:e.pubkey,voteAccountPubkey:m?.voteAccountPubkey,validatorName:m?.info?.name,validatorKeybaseUsername:m?.info?.keybaseUsername,validatorIconUrl:m?.info?.iconUrl,status:c?.state,data:{"Stake Account":{node:t.default.createElement(i,{textAlign:"right",weight:500,size:14,noWrap:!0},z(e.pubkey))},Balance:{node:t.default.createElement(i,{textAlign:"right",weight:500,size:14,noWrap:!0},t.default.createElement(k,null,e.lamports))},"Rent Reserve":{node:t.default.createElement(i,{textAlign:"right",weight:500,size:14,noWrap:!0},t.default.createElement(k,null,e.info.meta.rentExemptReserve))},"Active Stake":{node:t.default.createElement(i,{textAlign:"right",weight:500,size:14,noWrap:!0},t.default.createElement(k,null,c?.active))},Lockup:{node:t.default.createElement(i,{textAlign:"right",weight:500,size:14,noWrap:!0},U?V(K):"\u2013")},Rewards:Pt?{node:t.default.createElement(Kt,null,t.default.createElement(i,{color:"#21E56F",textAlign:"right",weight:500,size:14,noWrap:!0},"+",t.default.createElement(k,null,e?.inflationReward))),tooltip:o("stakeAccountCardRewardsTooltip")}:{node:t.default.createElement(i,{color:"#777777",textAlign:"right",weight:500,size:14,noWrap:!0},"\u2013")}}}),W?null:t.default.createElement(rt,{marginY:"base"},t.default.createElement(st,{color:"accentAlert",children:o("stakeAccountInsufficientFunds")}))),t.default.createElement(yt,{canUnstake:O,canWithdrawStake:_,onClose:n,onUnstake:Q,onWithdrawStake:q})):t.default.createElement(t.default.Fragment,null,t.default.createElement(x,null,t.default.createElement(i,{size:16,color:"#777777",lineHeight:20},o("stakeAccountViewStakeInactive.part1")," ",t.default.createElement(wt,{href:F},o("stakeAccountViewStakeInactive.part2"))),t.default.createElement(E,{stakeAccountPubkey:e.pubkey,status:c?.state,data:{"Stake Account":{node:t.default.createElement(i,{textAlign:"right",weight:500,size:14,noWrap:!0},z(e.pubkey))},Balance:{node:t.default.createElement(i,{textAlign:"right",weight:500,size:14,noWrap:!0},t.default.createElement(k,null,e.lamports))},"Rent Reserve":{node:t.default.createElement(i,{textAlign:"right",weight:500,size:14,noWrap:!0},t.default.createElement(k,null,e.info.meta.rentExemptReserve))},"Active Stake":{node:t.default.createElement(i,{textAlign:"right",weight:500,size:14,noWrap:!0},t.default.createElement(k,null,c?.active))},Lockup:{node:t.default.createElement(i,{textAlign:"right",weight:500,size:14,noWrap:!0},U?V(K):"\u2013")}}})),t.default.createElement(yt,{canUnstake:O,canWithdrawStake:_,onClose:n,onUnstake:Q,onWithdrawStake:q}))):t.default.createElement(C,null,t.default.createElement(h,null,o("stakeAccountViewPrimaryText")),t.default.createElement(x,null,t.default.createElement(i,{size:16,color:"#777777",lineHeight:20},o("stakeAccountViewStakeNotFound"))),t.default.createElement(L,null,t.default.createElement(p,{onClick:n},o("commandClose"))))},Pe=_t,yt=a=>{let{t:o}=f(),{canUnstake:u,canWithdrawStake:d,onClose:r,onUnstake:n,onWithdrawStake:S}=a;return t.default.createElement(L,null,t.default.createElement(p,{onClick:r},o("commandClose")),u?t.default.createElement(p,{theme:"primary",onClick:n},o("stakeAccountViewActionButtonUnstake")):null,d?t.default.createElement(p,{theme:"primary",onClick:S},o("stakeAccountViewWithdrawStake")):null)},jt=a=>{let o=ct(a),u=o.results??[],d=(0,t.useRef)(u);return d.current=u,(0,t.useMemo)(()=>new Map(d.current.map(n=>[n.voteAccountPubkey,n])),[o.dataUpdatedAt,d])};export{_t as StakeAccountDetailPage,Pe as default};
//# sourceMappingURL=StakeAccountDetailPage-2CK7BXJD.js.map
