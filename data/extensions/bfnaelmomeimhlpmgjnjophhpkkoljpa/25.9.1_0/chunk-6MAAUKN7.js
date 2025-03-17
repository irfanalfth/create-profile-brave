import{c as Ie,h as W,i as G,n as Y}from"./chunk-3KENBVE7.js";var Vr=Ie(f=>{"use strict";W();Y();var Q=Symbol.for("react.element"),nn=Symbol.for("react.portal"),an=Symbol.for("react.fragment"),on=Symbol.for("react.strict_mode"),un=Symbol.for("react.profiler"),sn=Symbol.for("react.provider"),cn=Symbol.for("react.context"),fn=Symbol.for("react.forward_ref"),ln=Symbol.for("react.suspense"),pn=Symbol.for("react.memo"),dn=Symbol.for("react.lazy"),Ar=Symbol.iterator;function vn(t){return t===null||typeof t!="object"?null:(t=Ar&&t[Ar]||t["@@iterator"],typeof t=="function"?t:null)}var Ir={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$r=Object.assign,Dr={};function z(t,u,d){this.props=t,this.context=u,this.refs=Dr,this.updater=d||Ir}z.prototype.isReactComponent={};z.prototype.setState=function(t,u){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,u,"setState")};z.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Fr(){}Fr.prototype=z.prototype;function De(t,u,d){this.props=t,this.context=u,this.refs=Dr,this.updater=d||Ir}var Fe=De.prototype=new Fr;Fe.constructor=De;$r(Fe,z.prototype);Fe.isPureReactComponent=!0;var jr=Array.isArray,Lr=Object.prototype.hasOwnProperty,Le={current:null},Mr={key:!0,ref:!0,__self:!0,__source:!0};function Nr(t,u,d){var y,h={},b=null,C=null;if(u!=null)for(y in u.ref!==void 0&&(C=u.ref),u.key!==void 0&&(b=""+u.key),u)Lr.call(u,y)&&!Mr.hasOwnProperty(y)&&(h[y]=u[y]);var _=arguments.length-2;if(_===1)h.children=d;else if(1<_){for(var m=Array(_),T=0;T<_;T++)m[T]=arguments[T+2];h.children=m}if(t&&t.defaultProps)for(y in _=t.defaultProps,_)h[y]===void 0&&(h[y]=_[y]);return{$$typeof:Q,type:t,key:b,ref:C,props:h,_owner:Le.current}}function yn(t,u){return{$$typeof:Q,type:t.type,key:u,ref:t.ref,props:t.props,_owner:t._owner}}function Me(t){return typeof t=="object"&&t!==null&&t.$$typeof===Q}function hn(t){var u={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(d){return u[d]})}var xr=/\/+/g;function $e(t,u){return typeof t=="object"&&t!==null&&t.key!=null?hn(""+t.key):u.toString(36)}function le(t,u,d,y,h){var b=typeof t;(b==="undefined"||b==="boolean")&&(t=null);var C=!1;if(t===null)C=!0;else switch(b){case"string":case"number":C=!0;break;case"object":switch(t.$$typeof){case Q:case nn:C=!0}}if(C)return C=t,h=h(C),t=y===""?"."+$e(C,0):y,jr(h)?(d="",t!=null&&(d=t.replace(xr,"$&/")+"/"),le(h,u,d,"",function(T){return T})):h!=null&&(Me(h)&&(h=yn(h,d+(!h.key||C&&C.key===h.key?"":(""+h.key).replace(xr,"$&/")+"/")+t)),u.push(h)),1;if(C=0,y=y===""?".":y+":",jr(t))for(var _=0;_<t.length;_++){b=t[_];var m=y+$e(b,_);C+=le(b,u,d,m,h)}else if(m=vn(t),typeof m=="function")for(t=m.call(t),_=0;!(b=t.next()).done;)b=b.value,m=y+$e(b,_++),C+=le(b,u,d,m,h);else if(b==="object")throw u=String(t),Error("Objects are not valid as a React child (found: "+(u==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":u)+"). If you meant to render a collection of children, use an array instead.");return C}function fe(t,u,d){if(t==null)return t;var y=[],h=0;return le(t,y,"","",function(b){return u.call(d,b,h++)}),y}function mn(t){if(t._status===-1){var u=t._result;u=u(),u.then(function(d){(t._status===0||t._status===-1)&&(t._status=1,t._result=d)},function(d){(t._status===0||t._status===-1)&&(t._status=2,t._result=d)}),t._status===-1&&(t._status=0,t._result=u)}if(t._status===1)return t._result.default;throw t._result}var A={current:null},pe={transition:null},gn={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:pe,ReactCurrentOwner:Le};f.Children={map:fe,forEach:function(t,u,d){fe(t,function(){u.apply(this,arguments)},d)},count:function(t){var u=0;return fe(t,function(){u++}),u},toArray:function(t){return fe(t,function(u){return u})||[]},only:function(t){if(!Me(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};f.Component=z;f.Fragment=an;f.Profiler=un;f.PureComponent=De;f.StrictMode=on;f.Suspense=ln;f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gn;f.cloneElement=function(t,u,d){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var y=$r({},t.props),h=t.key,b=t.ref,C=t._owner;if(u!=null){if(u.ref!==void 0&&(b=u.ref,C=Le.current),u.key!==void 0&&(h=""+u.key),t.type&&t.type.defaultProps)var _=t.type.defaultProps;for(m in u)Lr.call(u,m)&&!Mr.hasOwnProperty(m)&&(y[m]=u[m]===void 0&&_!==void 0?_[m]:u[m])}var m=arguments.length-2;if(m===1)y.children=d;else if(1<m){_=Array(m);for(var T=0;T<m;T++)_[T]=arguments[T+2];y.children=_}return{$$typeof:Q,type:t.type,key:h,ref:b,props:y,_owner:C}};f.createContext=function(t){return t={$$typeof:cn,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:sn,_context:t},t.Consumer=t};f.createElement=Nr;f.createFactory=function(t){var u=Nr.bind(null,t);return u.type=t,u};f.createRef=function(){return{current:null}};f.forwardRef=function(t){return{$$typeof:fn,render:t}};f.isValidElement=Me;f.lazy=function(t){return{$$typeof:dn,_payload:{_status:-1,_result:t},_init:mn}};f.memo=function(t,u){return{$$typeof:pn,type:t,compare:u===void 0?null:u}};f.startTransition=function(t){var u=pe.transition;pe.transition={};try{t()}finally{pe.transition=u}};f.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};f.useCallback=function(t,u){return A.current.useCallback(t,u)};f.useContext=function(t){return A.current.useContext(t)};f.useDebugValue=function(){};f.useDeferredValue=function(t){return A.current.useDeferredValue(t)};f.useEffect=function(t,u){return A.current.useEffect(t,u)};f.useId=function(){return A.current.useId()};f.useImperativeHandle=function(t,u,d){return A.current.useImperativeHandle(t,u,d)};f.useInsertionEffect=function(t,u){return A.current.useInsertionEffect(t,u)};f.useLayoutEffect=function(t,u){return A.current.useLayoutEffect(t,u)};f.useMemo=function(t,u){return A.current.useMemo(t,u)};f.useReducer=function(t,u,d){return A.current.useReducer(t,u,d)};f.useRef=function(t){return A.current.useRef(t)};f.useState=function(t){return A.current.useState(t)};f.useSyncExternalStore=function(t,u,d){return A.current.useSyncExternalStore(t,u,d)};f.useTransition=function(){return A.current.useTransition()};f.version="18.2.0"});var Ur=Ie((l,de)=>{"use strict";W();Y();G.NODE_ENV!=="production"&&function(){"use strict";typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error);var t="18.2.0",u=Symbol.for("react.element"),d=Symbol.for("react.portal"),y=Symbol.for("react.fragment"),h=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),_=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),ve=Symbol.for("react.suspense_list"),D=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),Wr=Symbol.for("react.offscreen"),Ve=Symbol.iterator,Yr="@@iterator";function Ue(e){if(e===null||typeof e!="object")return null;var r=Ve&&e[Ve]||e[Yr];return typeof r=="function"?r:null}var We={current:null},F={transition:null},k={current:null,isBatchingLegacy:!1,didScheduleLegacyUpdate:!1},j={current:null},B={},X=null;function Ye(e){X=e}B.setExtraStackFrame=function(e){X=e},B.getCurrentStack=null,B.getStackAddendum=function(){var e="";X&&(e+=X);var r=B.getCurrentStack;return r&&(e+=r()||""),e};var zr=!1,Br=!1,Hr=!1,Kr=!1,qr=!1,L={ReactCurrentDispatcher:We,ReactCurrentBatchConfig:F,ReactCurrentOwner:j};L.ReactDebugCurrentFrame=B,L.ReactCurrentActQueue=k;function M(e){{for(var r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];ze("warn",e,n)}}function v(e){{for(var r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];ze("error",e,n)}}function ze(e,r,n){{var a=L.ReactDebugCurrentFrame,o=a.getStackAddendum();o!==""&&(r+="%s",n=n.concat([o]));var s=n.map(function(i){return String(i)});s.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,s)}}var Be={};function ye(e,r){{var n=e.constructor,a=n&&(n.displayName||n.name)||"ReactClass",o=a+"."+r;if(Be[o])return;v("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",r,a),Be[o]=!0}}var He={isMounted:function(e){return!1},enqueueForceUpdate:function(e,r,n){ye(e,"forceUpdate")},enqueueReplaceState:function(e,r,n,a){ye(e,"replaceState")},enqueueSetState:function(e,r,n,a){ye(e,"setState")}},x=Object.assign,he={};Object.freeze(he);function $(e,r,n){this.props=e,this.context=r,this.refs=he,this.updater=n||He}$.prototype.isReactComponent={},$.prototype.setState=function(e,r){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},$.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};{var me={isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]},Gr=function(e,r){Object.defineProperty($.prototype,e,{get:function(){M("%s(...) is deprecated in plain JavaScript React classes. %s",r[0],r[1])}})};for(var ge in me)me.hasOwnProperty(ge)&&Gr(ge,me[ge])}function Ke(){}Ke.prototype=$.prototype;function _e(e,r,n){this.props=e,this.context=r,this.refs=he,this.updater=n||He}var be=_e.prototype=new Ke;be.constructor=_e,x(be,$.prototype),be.isPureReactComponent=!0;function Qr(){var e={current:null};return Object.seal(e),e}var Jr=Array.isArray;function Z(e){return Jr(e)}function Xr(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,n=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return n}}function Zr(e){try{return qe(e),!1}catch{return!0}}function qe(e){return""+e}function ee(e){if(Zr(e))return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Xr(e)),qe(e)}function et(e,r,n){var a=e.displayName;if(a)return a;var o=r.displayName||r.name||"";return o!==""?n+"("+o+")":n}function Ge(e){return e.displayName||"Context"}function I(e){if(e==null)return null;if(typeof e.tag=="number"&&v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case y:return"Fragment";case d:return"Portal";case b:return"Profiler";case h:return"StrictMode";case T:return"Suspense";case ve:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case _:var r=e;return Ge(r)+".Consumer";case C:var n=e;return Ge(n._context)+".Provider";case m:return et(e,e.render,"ForwardRef");case D:var a=e.displayName||null;return a!==null?a:I(e.type)||"Memo";case J:{var o=e,s=o._payload,i=o._init;try{return I(i(s))}catch{return null}}}return null}var H=Object.prototype.hasOwnProperty,Qe={key:!0,ref:!0,__self:!0,__source:!0},Je,Xe,Ee;Ee={};function Ze(e){if(H.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function er(e){if(H.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function rt(e,r){var n=function(){Je||(Je=!0,v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};n.isReactWarning=!0,Object.defineProperty(e,"key",{get:n,configurable:!0})}function tt(e,r){var n=function(){Xe||(Xe=!0,v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};n.isReactWarning=!0,Object.defineProperty(e,"ref",{get:n,configurable:!0})}function nt(e){if(typeof e.ref=="string"&&j.current&&e.__self&&j.current.stateNode!==e.__self){var r=I(j.current.type);Ee[r]||(v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',r,e.ref),Ee[r]=!0)}}var Re=function(e,r,n,a,o,s,i){var c={$$typeof:u,type:e,key:r,ref:n,props:i,_owner:s};return c._store={},Object.defineProperty(c._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(c,"_self",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.defineProperty(c,"_source",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.freeze&&(Object.freeze(c.props),Object.freeze(c)),c};function at(e,r,n){var a,o={},s=null,i=null,c=null,p=null;if(r!=null){Ze(r)&&(i=r.ref,nt(r)),er(r)&&(ee(r.key),s=""+r.key),c=r.__self===void 0?null:r.__self,p=r.__source===void 0?null:r.__source;for(a in r)H.call(r,a)&&!Qe.hasOwnProperty(a)&&(o[a]=r[a])}var g=arguments.length-2;if(g===1)o.children=n;else if(g>1){for(var E=Array(g),R=0;R<g;R++)E[R]=arguments[R+2];Object.freeze&&Object.freeze(E),o.children=E}if(e&&e.defaultProps){var w=e.defaultProps;for(a in w)o[a]===void 0&&(o[a]=w[a])}if(s||i){var S=typeof e=="function"?e.displayName||e.name||"Unknown":e;s&&rt(o,S),i&&tt(o,S)}return Re(e,s,i,c,p,j.current,o)}function ot(e,r){var n=Re(e.type,r,e.ref,e._self,e._source,e._owner,e.props);return n}function ut(e,r,n){if(e==null)throw new Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a,o=x({},e.props),s=e.key,i=e.ref,c=e._self,p=e._source,g=e._owner;if(r!=null){Ze(r)&&(i=r.ref,g=j.current),er(r)&&(ee(r.key),s=""+r.key);var E;e.type&&e.type.defaultProps&&(E=e.type.defaultProps);for(a in r)H.call(r,a)&&!Qe.hasOwnProperty(a)&&(r[a]===void 0&&E!==void 0?o[a]=E[a]:o[a]=r[a])}var R=arguments.length-2;if(R===1)o.children=n;else if(R>1){for(var w=Array(R),S=0;S<R;S++)w[S]=arguments[S+2];o.children=w}return Re(e.type,s,i,c,p,g,o)}function N(e){return typeof e=="object"&&e!==null&&e.$$typeof===u}var rr=".",it=":";function st(e){var r=/[=:]/g,n={"=":"=0",":":"=2"},a=e.replace(r,function(o){return n[o]});return"$"+a}var tr=!1,ct=/\/+/g;function nr(e){return e.replace(ct,"$&/")}function Ce(e,r){return typeof e=="object"&&e!==null&&e.key!=null?(ee(e.key),st(""+e.key)):r.toString(36)}function re(e,r,n,a,o){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(s){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case u:case d:i=!0}}if(i){var c=e,p=o(c),g=a===""?rr+Ce(c,0):a;if(Z(p)){var E="";g!=null&&(E=nr(g)+"/"),re(p,r,E,"",function(tn){return tn})}else p!=null&&(N(p)&&(p.key&&(!c||c.key!==p.key)&&ee(p.key),p=ot(p,n+(p.key&&(!c||c.key!==p.key)?nr(""+p.key)+"/":"")+g)),r.push(p));return 1}var R,w,S=0,O=a===""?rr:a+it;if(Z(e))for(var ce=0;ce<e.length;ce++)R=e[ce],w=O+Ce(R,ce),S+=re(R,r,n,w,o);else{var xe=Ue(e);if(typeof xe=="function"){var Tr=e;xe===Tr.entries&&(tr||M("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),tr=!0);for(var en=xe.call(Tr),kr,rn=0;!(kr=en.next()).done;)R=kr.value,w=O+Ce(R,rn++),S+=re(R,r,n,w,o)}else if(s==="object"){var Pr=String(e);throw new Error("Objects are not valid as a React child (found: "+(Pr==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":Pr)+"). If you meant to render a collection of children, use an array instead.")}}return S}function te(e,r,n){if(e==null)return e;var a=[],o=0;return re(e,a,"","",function(s){return r.call(n,s,o++)}),a}function ft(e){var r=0;return te(e,function(){r++}),r}function lt(e,r,n){te(e,function(){r.apply(this,arguments)},n)}function pt(e){return te(e,function(r){return r})||[]}function dt(e){if(!N(e))throw new Error("React.Children.only expected to receive a single React element child.");return e}function vt(e){var r={$$typeof:_,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};r.Provider={$$typeof:C,_context:r};var n=!1,a=!1,o=!1;{var s={$$typeof:_,_context:r};Object.defineProperties(s,{Provider:{get:function(){return a||(a=!0,v("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")),r.Provider},set:function(i){r.Provider=i}},_currentValue:{get:function(){return r._currentValue},set:function(i){r._currentValue=i}},_currentValue2:{get:function(){return r._currentValue2},set:function(i){r._currentValue2=i}},_threadCount:{get:function(){return r._threadCount},set:function(i){r._threadCount=i}},Consumer:{get:function(){return n||(n=!0,v("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")),r.Consumer}},displayName:{get:function(){return r.displayName},set:function(i){o||(M("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.",i),o=!0)}}}),r.Consumer=s}return r._currentRenderer=null,r._currentRenderer2=null,r}var K=-1,we=0,ar=1,yt=2;function ht(e){if(e._status===K){var r=e._result,n=r();if(n.then(function(s){if(e._status===we||e._status===K){var i=e;i._status=ar,i._result=s}},function(s){if(e._status===we||e._status===K){var i=e;i._status=yt,i._result=s}}),e._status===K){var a=e;a._status=we,a._result=n}}if(e._status===ar){var o=e._result;return o===void 0&&v(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,o),"default"in o||v(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,o),o.default}else throw e._result}function mt(e){var r={_status:K,_result:e},n={$$typeof:J,_payload:r,_init:ht};{var a,o;Object.defineProperties(n,{defaultProps:{configurable:!0,get:function(){return a},set:function(s){v("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),a=s,Object.defineProperty(n,"defaultProps",{enumerable:!0})}},propTypes:{configurable:!0,get:function(){return o},set:function(s){v("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),o=s,Object.defineProperty(n,"propTypes",{enumerable:!0})}}})}return n}function gt(e){e!=null&&e.$$typeof===D?v("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):typeof e!="function"?v("forwardRef requires a render function but was given %s.",e===null?"null":typeof e):e.length!==0&&e.length!==2&&v("forwardRef render functions accept exactly two parameters: props and ref. %s",e.length===1?"Did you forget to use the ref parameter?":"Any additional parameter will be undefined."),e!=null&&(e.defaultProps!=null||e.propTypes!=null)&&v("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");var r={$$typeof:m,render:e};{var n;Object.defineProperty(r,"displayName",{enumerable:!1,configurable:!0,get:function(){return n},set:function(a){n=a,!e.name&&!e.displayName&&(e.displayName=a)}})}return r}var or;or=Symbol.for("react.module.reference");function ur(e){return!!(typeof e=="string"||typeof e=="function"||e===y||e===b||qr||e===h||e===T||e===ve||Kr||e===Wr||zr||Br||Hr||typeof e=="object"&&e!==null&&(e.$$typeof===J||e.$$typeof===D||e.$$typeof===C||e.$$typeof===_||e.$$typeof===m||e.$$typeof===or||e.getModuleId!==void 0))}function _t(e,r){ur(e)||v("memo: The first argument must be a component. Instead received: %s",e===null?"null":typeof e);var n={$$typeof:D,type:e,compare:r===void 0?null:r};{var a;Object.defineProperty(n,"displayName",{enumerable:!1,configurable:!0,get:function(){return a},set:function(o){a=o,!e.name&&!e.displayName&&(e.displayName=o)}})}return n}function P(){var e=We.current;return e===null&&v(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`),e}function bt(e){var r=P();if(e._context!==void 0){var n=e._context;n.Consumer===e?v("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?"):n.Provider===e&&v("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?")}return r.useContext(e)}function Et(e){var r=P();return r.useState(e)}function Rt(e,r,n){var a=P();return a.useReducer(e,r,n)}function Ct(e){var r=P();return r.useRef(e)}function wt(e,r){var n=P();return n.useEffect(e,r)}function St(e,r){var n=P();return n.useInsertionEffect(e,r)}function Ot(e,r){var n=P();return n.useLayoutEffect(e,r)}function Tt(e,r){var n=P();return n.useCallback(e,r)}function kt(e,r){var n=P();return n.useMemo(e,r)}function Pt(e,r,n){var a=P();return a.useImperativeHandle(e,r,n)}function At(e,r){{var n=P();return n.useDebugValue(e,r)}}function jt(){var e=P();return e.useTransition()}function xt(e){var r=P();return r.useDeferredValue(e)}function It(){var e=P();return e.useId()}function $t(e,r,n){var a=P();return a.useSyncExternalStore(e,r,n)}var q=0,ir,sr,cr,fr,lr,pr,dr;function vr(){}vr.__reactDisabledLog=!0;function Dt(){{if(q===0){ir=console.log,sr=console.info,cr=console.warn,fr=console.error,lr=console.group,pr=console.groupCollapsed,dr=console.groupEnd;var e={configurable:!0,enumerable:!0,value:vr,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}q++}}function Ft(){{if(q--,q===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:x({},e,{value:ir}),info:x({},e,{value:sr}),warn:x({},e,{value:cr}),error:x({},e,{value:fr}),group:x({},e,{value:lr}),groupCollapsed:x({},e,{value:pr}),groupEnd:x({},e,{value:dr})})}q<0&&v("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var Se=L.ReactCurrentDispatcher,Oe;function ne(e,r,n){{if(Oe===void 0)try{throw Error()}catch(o){var a=o.stack.trim().match(/\n( *(at )?)/);Oe=a&&a[1]||""}return`
`+Oe+e}}var Te=!1,ae;{var Lt=typeof WeakMap=="function"?WeakMap:Map;ae=new Lt}function yr(e,r){if(!e||Te)return"";{var n=ae.get(e);if(n!==void 0)return n}var a;Te=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var s;s=Se.current,Se.current=null,Dt();try{if(r){var i=function(){throw Error()};if(Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(O){a=O}Reflect.construct(e,[],i)}else{try{i.call()}catch(O){a=O}e.call(i.prototype)}}else{try{throw Error()}catch(O){a=O}e()}}catch(O){if(O&&a&&typeof O.stack=="string"){for(var c=O.stack.split(`
`),p=a.stack.split(`
`),g=c.length-1,E=p.length-1;g>=1&&E>=0&&c[g]!==p[E];)E--;for(;g>=1&&E>=0;g--,E--)if(c[g]!==p[E]){if(g!==1||E!==1)do if(g--,E--,E<0||c[g]!==p[E]){var R=`
`+c[g].replace(" at new "," at ");return e.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",e.displayName)),typeof e=="function"&&ae.set(e,R),R}while(g>=1&&E>=0);break}}}finally{Te=!1,Se.current=s,Ft(),Error.prepareStackTrace=o}var w=e?e.displayName||e.name:"",S=w?ne(w):"";return typeof e=="function"&&ae.set(e,S),S}function Mt(e,r,n){return yr(e,!1)}function Nt(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function oe(e,r,n){if(e==null)return"";if(typeof e=="function")return yr(e,Nt(e));if(typeof e=="string")return ne(e);switch(e){case T:return ne("Suspense");case ve:return ne("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case m:return Mt(e.render);case D:return oe(e.type,r,n);case J:{var a=e,o=a._payload,s=a._init;try{return oe(s(o),r,n)}catch{}}}return""}var hr={},mr=L.ReactDebugCurrentFrame;function ue(e){if(e){var r=e._owner,n=oe(e.type,e._source,r?r.type:null);mr.setExtraStackFrame(n)}else mr.setExtraStackFrame(null)}function Vt(e,r,n,a,o){{var s=Function.call.bind(H);for(var i in e)if(s(e,i)){var c=void 0;try{if(typeof e[i]!="function"){var p=Error((a||"React class")+": "+n+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw p.name="Invariant Violation",p}c=e[i](r,i,a,n,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(g){c=g}c&&!(c instanceof Error)&&(ue(o),v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",a||"React class",n,i,typeof c),ue(null)),c instanceof Error&&!(c.message in hr)&&(hr[c.message]=!0,ue(o),v("Failed %s type: %s",n,c.message),ue(null))}}}function V(e){if(e){var r=e._owner,n=oe(e.type,e._source,r?r.type:null);Ye(n)}else Ye(null)}var ke;ke=!1;function gr(){if(j.current){var e=I(j.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}function Ut(e){if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),n=e.lineNumber;return`

Check your code at `+r+":"+n+"."}return""}function Wt(e){return e!=null?Ut(e.__source):""}var _r={};function Yt(e){var r=gr();if(!r){var n=typeof e=="string"?e:e.displayName||e.name;n&&(r=`

Check the top-level render call using <`+n+">.")}return r}function br(e,r){if(!(!e._store||e._store.validated||e.key!=null)){e._store.validated=!0;var n=Yt(r);if(!_r[n]){_r[n]=!0;var a="";e&&e._owner&&e._owner!==j.current&&(a=" It was passed a child from "+I(e._owner.type)+"."),V(e),v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',n,a),V(null)}}}function Er(e,r){if(typeof e=="object"){if(Z(e))for(var n=0;n<e.length;n++){var a=e[n];N(a)&&br(a,r)}else if(N(e))e._store&&(e._store.validated=!0);else if(e){var o=Ue(e);if(typeof o=="function"&&o!==e.entries)for(var s=o.call(e),i;!(i=s.next()).done;)N(i.value)&&br(i.value,r)}}}function Rr(e){{var r=e.type;if(r==null||typeof r=="string")return;var n;if(typeof r=="function")n=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===m||r.$$typeof===D))n=r.propTypes;else return;if(n){var a=I(r);Vt(n,e.props,"prop",a,e)}else if(r.PropTypes!==void 0&&!ke){ke=!0;var o=I(r);v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",o||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function zt(e){{for(var r=Object.keys(e.props),n=0;n<r.length;n++){var a=r[n];if(a!=="children"&&a!=="key"){V(e),v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",a),V(null);break}}e.ref!==null&&(V(e),v("Invalid attribute `ref` supplied to `React.Fragment`."),V(null))}}function Cr(e,r,n){var a=ur(e);if(!a){var o="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(o+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var s=Wt(r);s?o+=s:o+=gr();var i;e===null?i="null":Z(e)?i="array":e!==void 0&&e.$$typeof===u?(i="<"+(I(e.type)||"Unknown")+" />",o=" Did you accidentally export a JSX literal instead of a component?"):i=typeof e,v("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",i,o)}var c=at.apply(this,arguments);if(c==null)return c;if(a)for(var p=2;p<arguments.length;p++)Er(arguments[p],e);return e===y?zt(c):Rr(c),c}var wr=!1;function Bt(e){var r=Cr.bind(null,e);return r.type=e,wr||(wr=!0,M("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")),Object.defineProperty(r,"type",{enumerable:!1,get:function(){return M("Factory.type is deprecated. Access the class directly before passing it to createFactory."),Object.defineProperty(this,"type",{value:e}),e}}),r}function Ht(e,r,n){for(var a=ut.apply(this,arguments),o=2;o<arguments.length;o++)Er(arguments[o],a.type);return Rr(a),a}function Kt(e,r){var n=F.transition;F.transition={};var a=F.transition;F.transition._updatedFibers=new Set;try{e()}finally{if(F.transition=n,n===null&&a._updatedFibers){var o=a._updatedFibers.size;o>10&&M("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."),a._updatedFibers.clear()}}}var Sr=!1,ie=null;function qt(e){if(ie===null)try{var r=("require"+Math.random()).slice(0,7),n=de&&de[r];ie=n.call(de,"timers").setImmediate}catch{ie=function(o){Sr===!1&&(Sr=!0,typeof MessageChannel>"u"&&v("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));var s=new MessageChannel;s.port1.onmessage=o,s.port2.postMessage(void 0)}}return ie(e)}var U=0,Or=!1;function Gt(e){{var r=U;U++,k.current===null&&(k.current=[]);var n=k.isBatchingLegacy,a;try{if(k.isBatchingLegacy=!0,a=e(),!n&&k.didScheduleLegacyUpdate){var o=k.current;o!==null&&(k.didScheduleLegacyUpdate=!1,je(o))}}catch(w){throw se(r),w}finally{k.isBatchingLegacy=n}if(a!==null&&typeof a=="object"&&typeof a.then=="function"){var s=a,i=!1,c={then:function(w,S){i=!0,s.then(function(O){se(r),U===0?Pe(O,w,S):w(O)},function(O){se(r),S(O)})}};return!Or&&typeof Promise<"u"&&Promise.resolve().then(function(){}).then(function(){i||(Or=!0,v("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"))}),c}else{var p=a;if(se(r),U===0){var g=k.current;g!==null&&(je(g),k.current=null);var E={then:function(w,S){k.current===null?(k.current=[],Pe(p,w,S)):w(p)}};return E}else{var R={then:function(w,S){w(p)}};return R}}}}function se(e){e!==U-1&&v("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "),U=e}function Pe(e,r,n){{var a=k.current;if(a!==null)try{je(a),qt(function(){a.length===0?(k.current=null,r(e)):Pe(e,r,n)})}catch(o){n(o)}else r(e)}}var Ae=!1;function je(e){if(!Ae){Ae=!0;var r=0;try{for(;r<e.length;r++){var n=e[r];do n=n(!0);while(n!==null)}e.length=0}catch(a){throw e=e.slice(r+1),a}finally{Ae=!1}}}var Qt=Cr,Jt=Ht,Xt=Bt,Zt={map:te,forEach:lt,count:ft,toArray:pt,only:dt};l.Children=Zt,l.Component=$,l.Fragment=y,l.Profiler=b,l.PureComponent=_e,l.StrictMode=h,l.Suspense=T,l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,l.cloneElement=Jt,l.createContext=vt,l.createElement=Qt,l.createFactory=Xt,l.createRef=Qr,l.forwardRef=gt,l.isValidElement=N,l.lazy=mt,l.memo=_t,l.startTransition=Kt,l.unstable_act=Gt,l.useCallback=Tt,l.useContext=bt,l.useDebugValue=At,l.useDeferredValue=xt,l.useEffect=wt,l.useId=It,l.useImperativeHandle=Pt,l.useInsertionEffect=St,l.useLayoutEffect=Ot,l.useMemo=kt,l.useReducer=Rt,l.useRef=Ct,l.useState=Et,l.useSyncExternalStore=$t,l.useTransition=jt,l.version=t,typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error)}()});var _n=Ie((Sn,Ne)=>{"use strict";W();Y();G.NODE_ENV==="production"?Ne.exports=Vr():Ne.exports=Ur()});export{_n as a};
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=chunk-6MAAUKN7.js.map
