(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))o(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function i(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function o(u){if(u.ep)return;u.ep=!0;const f=i(u);fetch(u.href,f)}})();function eT(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var t_={exports:{}},dh={},n_={exports:{}},Yc={exports:{}};Yc.exports;var Gb;function $N(){return Gb||(Gb=1,(function(s,n){/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error);var i="18.3.1",o=Symbol.for("react.element"),u=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),m=Symbol.for("react.provider"),v=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),x=Symbol.for("react.suspense_list"),b=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),L=Symbol.for("react.offscreen"),M=Symbol.iterator,_="@@iterator";function F(T){if(T===null||typeof T!="object")return null;var B=M&&T[M]||T[_];return typeof B=="function"?B:null}var I={current:null},P={transition:null},$={current:null,isBatchingLegacy:!1,didScheduleLegacyUpdate:!1},G={current:null},z={},Z=null;function N(T){Z=T}z.setExtraStackFrame=function(T){Z=T},z.getCurrentStack=null,z.getStackAddendum=function(){var T="";Z&&(T+=Z);var B=z.getCurrentStack;return B&&(T+=B()||""),T};var D=!1,V=!1,he=!1,K=!1,Se=!1,ye={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:P,ReactCurrentOwner:G};ye.ReactDebugCurrentFrame=z,ye.ReactCurrentActQueue=$;function ce(T){{for(var B=arguments.length,ae=new Array(B>1?B-1:0),ve=1;ve<B;ve++)ae[ve-1]=arguments[ve];le("warn",T,ae)}}function fe(T){{for(var B=arguments.length,ae=new Array(B>1?B-1:0),ve=1;ve<B;ve++)ae[ve-1]=arguments[ve];le("error",T,ae)}}function le(T,B,ae){{var ve=ye.ReactDebugCurrentFrame,Ie=ve.getStackAddendum();Ie!==""&&(B+="%s",ae=ae.concat([Ie]));var Et=ae.map(function(lt){return String(lt)});Et.unshift("Warning: "+B),Function.prototype.apply.call(console[T],console,Et)}}var Fe={};function Ge(T,B){{var ae=T.constructor,ve=ae&&(ae.displayName||ae.name)||"ReactClass",Ie=ve+"."+B;if(Fe[Ie])return;fe("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",B,ve),Fe[Ie]=!0}}var tt={isMounted:function(T){return!1},enqueueForceUpdate:function(T,B,ae){Ge(T,"forceUpdate")},enqueueReplaceState:function(T,B,ae,ve){Ge(T,"replaceState")},enqueueSetState:function(T,B,ae,ve){Ge(T,"setState")}},ft=Object.assign,Ht={};Object.freeze(Ht);function me(T,B,ae){this.props=T,this.context=B,this.refs=Ht,this.updater=ae||tt}me.prototype.isReactComponent={},me.prototype.setState=function(T,B){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,B,"setState")},me.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};{var De={isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]},Je=function(T,B){Object.defineProperty(me.prototype,T,{get:function(){ce("%s(...) is deprecated in plain JavaScript React classes. %s",B[0],B[1])}})};for(var Ne in De)De.hasOwnProperty(Ne)&&Je(Ne,De[Ne])}function rt(){}rt.prototype=me.prototype;function st(T,B,ae){this.props=T,this.context=B,this.refs=Ht,this.updater=ae||tt}var vt=st.prototype=new rt;vt.constructor=st,ft(vt,me.prototype),vt.isPureReactComponent=!0;function zt(){var T={current:null};return Object.seal(T),T}var xt=Array.isArray;function Ft(T){return xt(T)}function q(T){{var B=typeof Symbol=="function"&&Symbol.toStringTag,ae=B&&T[Symbol.toStringTag]||T.constructor.name||"Object";return ae}}function an(T){try{return gt(T),!1}catch{return!0}}function gt(T){return""+T}function Rt(T){if(an(T))return fe("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",q(T)),gt(T)}function ut(T,B,ae){var ve=T.displayName;if(ve)return ve;var Ie=B.displayName||B.name||"";return Ie!==""?ae+"("+Ie+")":ae}function Gt(T){return T.displayName||"Context"}function nt(T){if(T==null)return null;if(typeof T.tag=="number"&&fe("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof T=="function")return T.displayName||T.name||null;if(typeof T=="string")return T;switch(T){case f:return"Fragment";case u:return"Portal";case p:return"Profiler";case d:return"StrictMode";case y:return"Suspense";case x:return"SuspenseList"}if(typeof T=="object")switch(T.$$typeof){case v:var B=T;return Gt(B)+".Consumer";case m:var ae=T;return Gt(ae._context)+".Provider";case S:return ut(T,T.render,"ForwardRef");case b:var ve=T.displayName||null;return ve!==null?ve:nt(T.type)||"Memo";case C:{var Ie=T,Et=Ie._payload,lt=Ie._init;try{return nt(lt(Et))}catch{return null}}}return null}var O=Object.prototype.hasOwnProperty,R={key:!0,ref:!0,__self:!0,__source:!0},Q,Ee,ue;ue={};function se(T){if(O.call(T,"ref")){var B=Object.getOwnPropertyDescriptor(T,"ref").get;if(B&&B.isReactWarning)return!1}return T.ref!==void 0}function je(T){if(O.call(T,"key")){var B=Object.getOwnPropertyDescriptor(T,"key").get;if(B&&B.isReactWarning)return!1}return T.key!==void 0}function Pe(T,B){var ae=function(){Q||(Q=!0,fe("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",B))};ae.isReactWarning=!0,Object.defineProperty(T,"key",{get:ae,configurable:!0})}function ze(T,B){var ae=function(){Ee||(Ee=!0,fe("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",B))};ae.isReactWarning=!0,Object.defineProperty(T,"ref",{get:ae,configurable:!0})}function xe(T){if(typeof T.ref=="string"&&G.current&&T.__self&&G.current.stateNode!==T.__self){var B=nt(G.current.type);ue[B]||(fe('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',B,T.ref),ue[B]=!0)}}var te=function(T,B,ae,ve,Ie,Et,lt){var Ut={$$typeof:o,type:T,key:B,ref:ae,props:lt,_owner:Et};return Ut._store={},Object.defineProperty(Ut._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(Ut,"_self",{configurable:!1,enumerable:!1,writable:!1,value:ve}),Object.defineProperty(Ut,"_source",{configurable:!1,enumerable:!1,writable:!1,value:Ie}),Object.freeze&&(Object.freeze(Ut.props),Object.freeze(Ut)),Ut};function Te(T,B,ae){var ve,Ie={},Et=null,lt=null,Ut=null,$t=null;if(B!=null){se(B)&&(lt=B.ref,xe(B)),je(B)&&(Rt(B.key),Et=""+B.key),Ut=B.__self===void 0?null:B.__self,$t=B.__source===void 0?null:B.__source;for(ve in B)O.call(B,ve)&&!R.hasOwnProperty(ve)&&(Ie[ve]=B[ve])}var gn=arguments.length-2;if(gn===1)Ie.children=ae;else if(gn>1){for(var Tn=Array(gn),Rn=0;Rn<gn;Rn++)Tn[Rn]=arguments[Rn+2];Object.freeze&&Object.freeze(Tn),Ie.children=Tn}if(T&&T.defaultProps){var Xt=T.defaultProps;for(ve in Xt)Ie[ve]===void 0&&(Ie[ve]=Xt[ve])}if(Et||lt){var Dn=typeof T=="function"?T.displayName||T.name||"Unknown":T;Et&&Pe(Ie,Dn),lt&&ze(Ie,Dn)}return te(T,Et,lt,Ut,$t,G.current,Ie)}function Be(T,B){var ae=te(T.type,B,T.ref,T._self,T._source,T._owner,T.props);return ae}function Ke(T,B,ae){if(T==null)throw new Error("React.cloneElement(...): The argument must be a React element, but you passed "+T+".");var ve,Ie=ft({},T.props),Et=T.key,lt=T.ref,Ut=T._self,$t=T._source,gn=T._owner;if(B!=null){se(B)&&(lt=B.ref,gn=G.current),je(B)&&(Rt(B.key),Et=""+B.key);var Tn;T.type&&T.type.defaultProps&&(Tn=T.type.defaultProps);for(ve in B)O.call(B,ve)&&!R.hasOwnProperty(ve)&&(B[ve]===void 0&&Tn!==void 0?Ie[ve]=Tn[ve]:Ie[ve]=B[ve])}var Rn=arguments.length-2;if(Rn===1)Ie.children=ae;else if(Rn>1){for(var Xt=Array(Rn),Dn=0;Dn<Rn;Dn++)Xt[Dn]=arguments[Dn+2];Ie.children=Xt}return te(T.type,Et,lt,Ut,$t,gn,Ie)}function Oe(T){return typeof T=="object"&&T!==null&&T.$$typeof===o}var ct=".",pt=":";function Ct(T){var B=/[=:]/g,ae={"=":"=0",":":"=2"},ve=T.replace(B,function(Ie){return ae[Ie]});return"$"+ve}var H=!1,Le=/\/+/g;function pe(T){return T.replace(Le,"$&/")}function Me(T,B){return typeof T=="object"&&T!==null&&T.key!=null?(Rt(T.key),Ct(""+T.key)):B.toString(36)}function ke(T,B,ae,ve,Ie){var Et=typeof T;(Et==="undefined"||Et==="boolean")&&(T=null);var lt=!1;if(T===null)lt=!0;else switch(Et){case"string":case"number":lt=!0;break;case"object":switch(T.$$typeof){case o:case u:lt=!0}}if(lt){var Ut=T,$t=Ie(Ut),gn=ve===""?ct+Me(Ut,0):ve;if(Ft($t)){var Tn="";gn!=null&&(Tn=pe(gn)+"/"),ke($t,B,Tn,"",function(Jh){return Jh})}else $t!=null&&(Oe($t)&&($t.key&&(!Ut||Ut.key!==$t.key)&&Rt($t.key),$t=Be($t,ae+($t.key&&(!Ut||Ut.key!==$t.key)?pe(""+$t.key)+"/":"")+gn)),B.push($t));return 1}var Rn,Xt,Dn=0,Gn=ve===""?ct:ve+pt;if(Ft(T))for(var Fo=0;Fo<T.length;Fo++)Rn=T[Fo],Xt=Gn+Me(Rn,Fo),Dn+=ke(Rn,B,ae,Xt,Ie);else{var fu=F(T);if(typeof fu=="function"){var va=T;fu===va.entries&&(H||ce("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),H=!0);for(var du=fu.call(va),hu,Qh=0;!(hu=du.next()).done;)Rn=hu.value,Xt=Gn+Me(Rn,Qh++),Dn+=ke(Rn,B,ae,Xt,Ie)}else if(Et==="object"){var hf=String(T);throw new Error("Objects are not valid as a React child (found: "+(hf==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":hf)+"). If you meant to render a collection of children, use an array instead.")}}return Dn}function We(T,B,ae){if(T==null)return T;var ve=[],Ie=0;return ke(T,ve,"","",function(Et){return B.call(ae,Et,Ie++)}),ve}function Lt(T){var B=0;return We(T,function(){B++}),B}function vn(T,B,ae){We(T,function(){B.apply(this,arguments)},ae)}function Ln(T){return We(T,function(B){return B})||[]}function Jt(T){if(!Oe(T))throw new Error("React.Children.only expected to receive a single React element child.");return T}function qn(T){var B={$$typeof:v,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};B.Provider={$$typeof:m,_context:B};var ae=!1,ve=!1,Ie=!1;{var Et={$$typeof:v,_context:B};Object.defineProperties(Et,{Provider:{get:function(){return ve||(ve=!0,fe("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")),B.Provider},set:function(lt){B.Provider=lt}},_currentValue:{get:function(){return B._currentValue},set:function(lt){B._currentValue=lt}},_currentValue2:{get:function(){return B._currentValue2},set:function(lt){B._currentValue2=lt}},_threadCount:{get:function(){return B._threadCount},set:function(lt){B._threadCount=lt}},Consumer:{get:function(){return ae||(ae=!0,fe("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")),B.Consumer}},displayName:{get:function(){return B.displayName},set:function(lt){Ie||(ce("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.",lt),Ie=!0)}}}),B.Consumer=Et}return B._currentRenderer=null,B._currentRenderer2=null,B}var In=-1,Oi=0,Ti=1,ai=2;function Dr(T){if(T._status===In){var B=T._result,ae=B();if(ae.then(function(Et){if(T._status===Oi||T._status===In){var lt=T;lt._status=Ti,lt._result=Et}},function(Et){if(T._status===Oi||T._status===In){var lt=T;lt._status=ai,lt._result=Et}}),T._status===In){var ve=T;ve._status=Oi,ve._result=ae}}if(T._status===Ti){var Ie=T._result;return Ie===void 0&&fe(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,Ie),"default"in Ie||fe(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,Ie),Ie.default}else throw T._result}function k(T){var B={_status:In,_result:T},ae={$$typeof:C,_payload:B,_init:Dr};{var ve,Ie;Object.defineProperties(ae,{defaultProps:{configurable:!0,get:function(){return ve},set:function(Et){fe("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),ve=Et,Object.defineProperty(ae,"defaultProps",{enumerable:!0})}},propTypes:{configurable:!0,get:function(){return Ie},set:function(Et){fe("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),Ie=Et,Object.defineProperty(ae,"propTypes",{enumerable:!0})}}})}return ae}function Ce(T){T!=null&&T.$$typeof===b?fe("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):typeof T!="function"?fe("forwardRef requires a render function but was given %s.",T===null?"null":typeof T):T.length!==0&&T.length!==2&&fe("forwardRef render functions accept exactly two parameters: props and ref. %s",T.length===1?"Did you forget to use the ref parameter?":"Any additional parameter will be undefined."),T!=null&&(T.defaultProps!=null||T.propTypes!=null)&&fe("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");var B={$$typeof:S,render:T};{var ae;Object.defineProperty(B,"displayName",{enumerable:!1,configurable:!0,get:function(){return ae},set:function(ve){ae=ve,!T.name&&!T.displayName&&(T.displayName=ve)}})}return B}var Ve;Ve=Symbol.for("react.module.reference");function mt(T){return!!(typeof T=="string"||typeof T=="function"||T===f||T===p||Se||T===d||T===y||T===x||K||T===L||D||V||he||typeof T=="object"&&T!==null&&(T.$$typeof===C||T.$$typeof===b||T.$$typeof===m||T.$$typeof===v||T.$$typeof===S||T.$$typeof===Ve||T.getModuleId!==void 0))}function Bt(T,B){mt(T)||fe("memo: The first argument must be a component. Instead received: %s",T===null?"null":typeof T);var ae={$$typeof:b,type:T,compare:B===void 0?null:B};{var ve;Object.defineProperty(ae,"displayName",{enumerable:!1,configurable:!0,get:function(){return ve},set:function(Ie){ve=Ie,!T.name&&!T.displayName&&(T.displayName=Ie)}})}return ae}function Mt(){var T=I.current;return T===null&&fe(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`),T}function It(T){var B=Mt();if(T._context!==void 0){var ae=T._context;ae.Consumer===T?fe("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?"):ae.Provider===T&&fe("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?")}return B.useContext(T)}function _t(T){var B=Mt();return B.useState(T)}function zn(T,B,ae){var ve=Mt();return ve.useReducer(T,B,ae)}function bn(T){var B=Mt();return B.useRef(T)}function A(T,B){var ae=Mt();return ae.useEffect(T,B)}function Y(T,B){var ae=Mt();return ae.useInsertionEffect(T,B)}function ne(T,B){var ae=Mt();return ae.useLayoutEffect(T,B)}function ie(T,B){var ae=Mt();return ae.useCallback(T,B)}function X(T,B){var ae=Mt();return ae.useMemo(T,B)}function Ue(T,B,ae){var ve=Mt();return ve.useImperativeHandle(T,B,ae)}function He(T,B){{var ae=Mt();return ae.useDebugValue(T,B)}}function Ae(){var T=Mt();return T.useTransition()}function at(T){var B=Mt();return B.useDeferredValue(T)}function At(){var T=Mt();return T.useId()}function Pt(T,B,ae){var ve=Mt();return ve.useSyncExternalStore(T,B,ae)}var it=0,Yt,fn,pn,Vn,en,dt,qi;function qt(){}qt.__reactDisabledLog=!0;function pi(){{if(it===0){Yt=console.log,fn=console.info,pn=console.warn,Vn=console.error,en=console.group,dt=console.groupCollapsed,qi=console.groupEnd;var T={configurable:!0,enumerable:!0,value:qt,writable:!0};Object.defineProperties(console,{info:T,log:T,warn:T,error:T,group:T,groupCollapsed:T,groupEnd:T})}it++}}function mi(){{if(it--,it===0){var T={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:ft({},T,{value:Yt}),info:ft({},T,{value:fn}),warn:ft({},T,{value:pn}),error:ft({},T,{value:Vn}),group:ft({},T,{value:en}),groupCollapsed:ft({},T,{value:dt}),groupEnd:ft({},T,{value:qi})})}it<0&&fe("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var Bn=ye.ReactCurrentDispatcher,$i;function dn(T,B,ae){{if($i===void 0)try{throw Error()}catch(Ie){var ve=Ie.stack.trim().match(/\n( *(at )?)/);$i=ve&&ve[1]||""}return`
`+$i+T}}var oi=!1,gr;{var si=typeof WeakMap=="function"?WeakMap:Map;gr=new si}function or(T,B){if(!T||oi)return"";{var ae=gr.get(T);if(ae!==void 0)return ae}var ve;oi=!0;var Ie=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var Et;Et=Bn.current,Bn.current=null,pi();try{if(B){var lt=function(){throw Error()};if(Object.defineProperty(lt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(lt,[])}catch(Gn){ve=Gn}Reflect.construct(T,[],lt)}else{try{lt.call()}catch(Gn){ve=Gn}T.call(lt.prototype)}}else{try{throw Error()}catch(Gn){ve=Gn}T()}}catch(Gn){if(Gn&&ve&&typeof Gn.stack=="string"){for(var Ut=Gn.stack.split(`
`),$t=ve.stack.split(`
`),gn=Ut.length-1,Tn=$t.length-1;gn>=1&&Tn>=0&&Ut[gn]!==$t[Tn];)Tn--;for(;gn>=1&&Tn>=0;gn--,Tn--)if(Ut[gn]!==$t[Tn]){if(gn!==1||Tn!==1)do if(gn--,Tn--,Tn<0||Ut[gn]!==$t[Tn]){var Rn=`
`+Ut[gn].replace(" at new "," at ");return T.displayName&&Rn.includes("<anonymous>")&&(Rn=Rn.replace("<anonymous>",T.displayName)),typeof T=="function"&&gr.set(T,Rn),Rn}while(gn>=1&&Tn>=0);break}}}finally{oi=!1,Bn.current=Et,mi(),Error.prepareStackTrace=Ie}var Xt=T?T.displayName||T.name:"",Dn=Xt?dn(Xt):"";return typeof T=="function"&&gr.set(T,Dn),Dn}function Ki(T,B,ae){return or(T,!1)}function ws(T){var B=T.prototype;return!!(B&&B.isReactComponent)}function No(T,B,ae){if(T==null)return"";if(typeof T=="function")return or(T,ws(T));if(typeof T=="string")return dn(T);switch(T){case y:return dn("Suspense");case x:return dn("SuspenseList")}if(typeof T=="object")switch(T.$$typeof){case S:return Ki(T.render);case b:return No(T.type,B,ae);case C:{var ve=T,Ie=ve._payload,Et=ve._init;try{return No(Et(Ie),B,ae)}catch{}}}return""}var sf={},au=ye.ReactDebugCurrentFrame;function on(T){if(T){var B=T._owner,ae=No(T.type,T._source,B?B.type:null);au.setExtraStackFrame(ae)}else au.setExtraStackFrame(null)}function qh(T,B,ae,ve,Ie){{var Et=Function.call.bind(O);for(var lt in T)if(Et(T,lt)){var Ut=void 0;try{if(typeof T[lt]!="function"){var $t=Error((ve||"React class")+": "+ae+" type `"+lt+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof T[lt]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw $t.name="Invariant Violation",$t}Ut=T[lt](B,lt,ve,ae,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(gn){Ut=gn}Ut&&!(Ut instanceof Error)&&(on(Ie),fe("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",ve||"React class",ae,lt,typeof Ut),on(null)),Ut instanceof Error&&!(Ut.message in sf)&&(sf[Ut.message]=!0,on(Ie),fe("Failed %s type: %s",ae,Ut.message),on(null))}}}function pa(T){if(T){var B=T._owner,ae=No(T.type,T._source,B?B.type:null);N(ae)}else N(null)}var Ot;Ot=!1;function ou(){if(G.current){var T=nt(G.current.type);if(T)return`

Check the render method of \``+T+"`."}return""}function Fi(T){if(T!==void 0){var B=T.fileName.replace(/^.*[\\\/]/,""),ae=T.lineNumber;return`

Check your code at `+B+":"+ae+"."}return""}function Po(T){return T!=null?Fi(T.__source):""}var $a={};function $h(T){var B=ou();if(!B){var ae=typeof T=="string"?T:T.displayName||T.name;ae&&(B=`

Check the top-level render call using <`+ae+">.")}return B}function li(T,B){if(!(!T._store||T._store.validated||T.key!=null)){T._store.validated=!0;var ae=$h(B);if(!$a[ae]){$a[ae]=!0;var ve="";T&&T._owner&&T._owner!==G.current&&(ve=" It was passed a child from "+nt(T._owner.type)+"."),pa(T),fe('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',ae,ve),pa(null)}}}function wn(T,B){if(typeof T=="object"){if(Ft(T))for(var ae=0;ae<T.length;ae++){var ve=T[ae];Oe(ve)&&li(ve,B)}else if(Oe(T))T._store&&(T._store.validated=!0);else if(T){var Ie=F(T);if(typeof Ie=="function"&&Ie!==T.entries)for(var Et=Ie.call(T),lt;!(lt=Et.next()).done;)Oe(lt.value)&&li(lt.value,B)}}}function lf(T){{var B=T.type;if(B==null||typeof B=="string")return;var ae;if(typeof B=="function")ae=B.propTypes;else if(typeof B=="object"&&(B.$$typeof===S||B.$$typeof===b))ae=B.propTypes;else return;if(ae){var ve=nt(B);qh(ae,T.props,"prop",ve,T)}else if(B.PropTypes!==void 0&&!Ot){Ot=!0;var Ie=nt(B);fe("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",Ie||"Unknown")}typeof B.getDefaultProps=="function"&&!B.getDefaultProps.isReactClassApproved&&fe("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function _r(T){{for(var B=Object.keys(T.props),ae=0;ae<B.length;ae++){var ve=B[ae];if(ve!=="children"&&ve!=="key"){pa(T),fe("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",ve),pa(null);break}}T.ref!==null&&(pa(T),fe("Invalid attribute `ref` supplied to `React.Fragment`."),pa(null))}}function Ii(T,B,ae){var ve=mt(T);if(!ve){var Ie="";(T===void 0||typeof T=="object"&&T!==null&&Object.keys(T).length===0)&&(Ie+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var Et=Po(B);Et?Ie+=Et:Ie+=ou();var lt;T===null?lt="null":Ft(T)?lt="array":T!==void 0&&T.$$typeof===o?(lt="<"+(nt(T.type)||"Unknown")+" />",Ie=" Did you accidentally export a JSX literal instead of a component?"):lt=typeof T,fe("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",lt,Ie)}var Ut=Te.apply(this,arguments);if(Ut==null)return Ut;if(ve)for(var $t=2;$t<arguments.length;$t++)wn(arguments[$t],T);return T===f?_r(Ut):lf(Ut),Ut}var Lr=!1;function Kh(T){var B=Ii.bind(null,T);return B.type=T,Lr||(Lr=!0,ce("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")),Object.defineProperty(B,"type",{enumerable:!1,get:function(){return ce("Factory.type is deprecated. Access the class directly before passing it to createFactory."),Object.defineProperty(this,"type",{value:T}),T}}),B}function su(T,B,ae){for(var ve=Ke.apply(this,arguments),Ie=2;Ie<arguments.length;Ie++)wn(arguments[Ie],ve.type);return lf(ve),ve}function uf(T,B){var ae=P.transition;P.transition={};var ve=P.transition;P.transition._updatedFibers=new Set;try{T()}finally{if(P.transition=ae,ae===null&&ve._updatedFibers){var Ie=ve._updatedFibers.size;Ie>10&&ce("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."),ve._updatedFibers.clear()}}}var lu=!1,Ds=null;function Zh(T){if(Ds===null)try{var B=("require"+Math.random()).slice(0,7),ae=s&&s[B];Ds=ae.call(s,"timers").setImmediate}catch{Ds=function(Ie){lu===!1&&(lu=!0,typeof MessageChannel>"u"&&fe("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));var Et=new MessageChannel;Et.port1.onmessage=Ie,Et.port2.postMessage(void 0)}}return Ds(T)}var Ka=0,Oo=!1;function uu(T){{var B=Ka;Ka++,$.current===null&&($.current=[]);var ae=$.isBatchingLegacy,ve;try{if($.isBatchingLegacy=!0,ve=T(),!ae&&$.didScheduleLegacyUpdate){var Ie=$.current;Ie!==null&&($.didScheduleLegacyUpdate=!1,Ns(Ie))}}catch(Xt){throw ma(B),Xt}finally{$.isBatchingLegacy=ae}if(ve!==null&&typeof ve=="object"&&typeof ve.then=="function"){var Et=ve,lt=!1,Ut={then:function(Xt,Dn){lt=!0,Et.then(function(Gn){ma(B),Ka===0?Ls(Gn,Xt,Dn):Xt(Gn)},function(Gn){ma(B),Dn(Gn)})}};return!Oo&&typeof Promise<"u"&&Promise.resolve().then(function(){}).then(function(){lt||(Oo=!0,fe("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"))}),Ut}else{var $t=ve;if(ma(B),Ka===0){var gn=$.current;gn!==null&&(Ns(gn),$.current=null);var Tn={then:function(Xt,Dn){$.current===null?($.current=[],Ls($t,Xt,Dn)):Xt($t)}};return Tn}else{var Rn={then:function(Xt,Dn){Xt($t)}};return Rn}}}}function ma(T){T!==Ka-1&&fe("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "),Ka=T}function Ls(T,B,ae){{var ve=$.current;if(ve!==null)try{Ns(ve),Zh(function(){ve.length===0?($.current=null,B(T)):Ls(T,B,ae)})}catch(Ie){ae(Ie)}else B(T)}}var Us=!1;function Ns(T){if(!Us){Us=!0;var B=0;try{for(;B<T.length;B++){var ae=T[B];do ae=ae(!0);while(ae!==null)}T.length=0}catch(ve){throw T=T.slice(B+1),ve}finally{Us=!1}}}var cf=Ii,ff=su,cu=Kh,df={map:We,forEach:vn,count:Lt,toArray:Ln,only:Jt};n.Children=df,n.Component=me,n.Fragment=f,n.Profiler=p,n.PureComponent=st,n.StrictMode=d,n.Suspense=y,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ye,n.act=uu,n.cloneElement=ff,n.createContext=qn,n.createElement=cf,n.createFactory=cu,n.createRef=zt,n.forwardRef=Ce,n.isValidElement=Oe,n.lazy=k,n.memo=Bt,n.startTransition=uf,n.unstable_act=uu,n.useCallback=ie,n.useContext=It,n.useDebugValue=He,n.useDeferredValue=at,n.useEffect=A,n.useId=At,n.useImperativeHandle=Ue,n.useInsertionEffect=Y,n.useLayoutEffect=ne,n.useMemo=X,n.useReducer=zn,n.useRef=bn,n.useState=_t,n.useSyncExternalStore=Pt,n.useTransition=Ae,n.version=i,typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error)})()})(Yc,Yc.exports)),Yc.exports}var Wb;function Ey(){return Wb||(Wb=1,n_.exports=$N()),n_.exports}var Xb;function KN(){if(Xb)return dh;Xb=1;/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */return(function(){var s=Ey(),n=Symbol.for("react.element"),i=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),p=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),S=Symbol.for("react.suspense_list"),y=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),b=Symbol.for("react.offscreen"),C=Symbol.iterator,L="@@iterator";function M(k){if(k===null||typeof k!="object")return null;var Ce=C&&k[C]||k[L];return typeof Ce=="function"?Ce:null}var _=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function F(k){{for(var Ce=arguments.length,Ve=new Array(Ce>1?Ce-1:0),mt=1;mt<Ce;mt++)Ve[mt-1]=arguments[mt];I("error",k,Ve)}}function I(k,Ce,Ve){{var mt=_.ReactDebugCurrentFrame,Bt=mt.getStackAddendum();Bt!==""&&(Ce+="%s",Ve=Ve.concat([Bt]));var Mt=Ve.map(function(It){return String(It)});Mt.unshift("Warning: "+Ce),Function.prototype.apply.call(console[k],console,Mt)}}var P=!1,$=!1,G=!1,z=!1,Z=!1,N;N=Symbol.for("react.module.reference");function D(k){return!!(typeof k=="string"||typeof k=="function"||k===o||k===f||Z||k===u||k===v||k===S||z||k===b||P||$||G||typeof k=="object"&&k!==null&&(k.$$typeof===x||k.$$typeof===y||k.$$typeof===d||k.$$typeof===p||k.$$typeof===m||k.$$typeof===N||k.getModuleId!==void 0))}function V(k,Ce,Ve){var mt=k.displayName;if(mt)return mt;var Bt=Ce.displayName||Ce.name||"";return Bt!==""?Ve+"("+Bt+")":Ve}function he(k){return k.displayName||"Context"}function K(k){if(k==null)return null;if(typeof k.tag=="number"&&F("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof k=="function")return k.displayName||k.name||null;if(typeof k=="string")return k;switch(k){case o:return"Fragment";case i:return"Portal";case f:return"Profiler";case u:return"StrictMode";case v:return"Suspense";case S:return"SuspenseList"}if(typeof k=="object")switch(k.$$typeof){case p:var Ce=k;return he(Ce)+".Consumer";case d:var Ve=k;return he(Ve._context)+".Provider";case m:return V(k,k.render,"ForwardRef");case y:var mt=k.displayName||null;return mt!==null?mt:K(k.type)||"Memo";case x:{var Bt=k,Mt=Bt._payload,It=Bt._init;try{return K(It(Mt))}catch{return null}}}return null}var Se=Object.assign,ye=0,ce,fe,le,Fe,Ge,tt,ft;function Ht(){}Ht.__reactDisabledLog=!0;function me(){{if(ye===0){ce=console.log,fe=console.info,le=console.warn,Fe=console.error,Ge=console.group,tt=console.groupCollapsed,ft=console.groupEnd;var k={configurable:!0,enumerable:!0,value:Ht,writable:!0};Object.defineProperties(console,{info:k,log:k,warn:k,error:k,group:k,groupCollapsed:k,groupEnd:k})}ye++}}function De(){{if(ye--,ye===0){var k={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:Se({},k,{value:ce}),info:Se({},k,{value:fe}),warn:Se({},k,{value:le}),error:Se({},k,{value:Fe}),group:Se({},k,{value:Ge}),groupCollapsed:Se({},k,{value:tt}),groupEnd:Se({},k,{value:ft})})}ye<0&&F("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var Je=_.ReactCurrentDispatcher,Ne;function rt(k,Ce,Ve){{if(Ne===void 0)try{throw Error()}catch(Bt){var mt=Bt.stack.trim().match(/\n( *(at )?)/);Ne=mt&&mt[1]||""}return`
`+Ne+k}}var st=!1,vt;{var zt=typeof WeakMap=="function"?WeakMap:Map;vt=new zt}function xt(k,Ce){if(!k||st)return"";{var Ve=vt.get(k);if(Ve!==void 0)return Ve}var mt;st=!0;var Bt=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var Mt;Mt=Je.current,Je.current=null,me();try{if(Ce){var It=function(){throw Error()};if(Object.defineProperty(It.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(It,[])}catch(X){mt=X}Reflect.construct(k,[],It)}else{try{It.call()}catch(X){mt=X}k.call(It.prototype)}}else{try{throw Error()}catch(X){mt=X}k()}}catch(X){if(X&&mt&&typeof X.stack=="string"){for(var _t=X.stack.split(`
`),zn=mt.stack.split(`
`),bn=_t.length-1,A=zn.length-1;bn>=1&&A>=0&&_t[bn]!==zn[A];)A--;for(;bn>=1&&A>=0;bn--,A--)if(_t[bn]!==zn[A]){if(bn!==1||A!==1)do if(bn--,A--,A<0||_t[bn]!==zn[A]){var Y=`
`+_t[bn].replace(" at new "," at ");return k.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",k.displayName)),typeof k=="function"&&vt.set(k,Y),Y}while(bn>=1&&A>=0);break}}}finally{st=!1,Je.current=Mt,De(),Error.prepareStackTrace=Bt}var ne=k?k.displayName||k.name:"",ie=ne?rt(ne):"";return typeof k=="function"&&vt.set(k,ie),ie}function Ft(k,Ce,Ve){return xt(k,!1)}function q(k){var Ce=k.prototype;return!!(Ce&&Ce.isReactComponent)}function an(k,Ce,Ve){if(k==null)return"";if(typeof k=="function")return xt(k,q(k));if(typeof k=="string")return rt(k);switch(k){case v:return rt("Suspense");case S:return rt("SuspenseList")}if(typeof k=="object")switch(k.$$typeof){case m:return Ft(k.render);case y:return an(k.type,Ce,Ve);case x:{var mt=k,Bt=mt._payload,Mt=mt._init;try{return an(Mt(Bt),Ce,Ve)}catch{}}}return""}var gt=Object.prototype.hasOwnProperty,Rt={},ut=_.ReactDebugCurrentFrame;function Gt(k){if(k){var Ce=k._owner,Ve=an(k.type,k._source,Ce?Ce.type:null);ut.setExtraStackFrame(Ve)}else ut.setExtraStackFrame(null)}function nt(k,Ce,Ve,mt,Bt){{var Mt=Function.call.bind(gt);for(var It in k)if(Mt(k,It)){var _t=void 0;try{if(typeof k[It]!="function"){var zn=Error((mt||"React class")+": "+Ve+" type `"+It+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof k[It]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw zn.name="Invariant Violation",zn}_t=k[It](Ce,It,mt,Ve,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(bn){_t=bn}_t&&!(_t instanceof Error)&&(Gt(Bt),F("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",mt||"React class",Ve,It,typeof _t),Gt(null)),_t instanceof Error&&!(_t.message in Rt)&&(Rt[_t.message]=!0,Gt(Bt),F("Failed %s type: %s",Ve,_t.message),Gt(null))}}}var O=Array.isArray;function R(k){return O(k)}function Q(k){{var Ce=typeof Symbol=="function"&&Symbol.toStringTag,Ve=Ce&&k[Symbol.toStringTag]||k.constructor.name||"Object";return Ve}}function Ee(k){try{return ue(k),!1}catch{return!0}}function ue(k){return""+k}function se(k){if(Ee(k))return F("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Q(k)),ue(k)}var je=_.ReactCurrentOwner,Pe={key:!0,ref:!0,__self:!0,__source:!0},ze,xe,te;te={};function Te(k){if(gt.call(k,"ref")){var Ce=Object.getOwnPropertyDescriptor(k,"ref").get;if(Ce&&Ce.isReactWarning)return!1}return k.ref!==void 0}function Be(k){if(gt.call(k,"key")){var Ce=Object.getOwnPropertyDescriptor(k,"key").get;if(Ce&&Ce.isReactWarning)return!1}return k.key!==void 0}function Ke(k,Ce){if(typeof k.ref=="string"&&je.current&&Ce&&je.current.stateNode!==Ce){var Ve=K(je.current.type);te[Ve]||(F('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',K(je.current.type),k.ref),te[Ve]=!0)}}function Oe(k,Ce){{var Ve=function(){ze||(ze=!0,F("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",Ce))};Ve.isReactWarning=!0,Object.defineProperty(k,"key",{get:Ve,configurable:!0})}}function ct(k,Ce){{var Ve=function(){xe||(xe=!0,F("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",Ce))};Ve.isReactWarning=!0,Object.defineProperty(k,"ref",{get:Ve,configurable:!0})}}var pt=function(k,Ce,Ve,mt,Bt,Mt,It){var _t={$$typeof:n,type:k,key:Ce,ref:Ve,props:It,_owner:Mt};return _t._store={},Object.defineProperty(_t._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(_t,"_self",{configurable:!1,enumerable:!1,writable:!1,value:mt}),Object.defineProperty(_t,"_source",{configurable:!1,enumerable:!1,writable:!1,value:Bt}),Object.freeze&&(Object.freeze(_t.props),Object.freeze(_t)),_t};function Ct(k,Ce,Ve,mt,Bt){{var Mt,It={},_t=null,zn=null;Ve!==void 0&&(se(Ve),_t=""+Ve),Be(Ce)&&(se(Ce.key),_t=""+Ce.key),Te(Ce)&&(zn=Ce.ref,Ke(Ce,Bt));for(Mt in Ce)gt.call(Ce,Mt)&&!Pe.hasOwnProperty(Mt)&&(It[Mt]=Ce[Mt]);if(k&&k.defaultProps){var bn=k.defaultProps;for(Mt in bn)It[Mt]===void 0&&(It[Mt]=bn[Mt])}if(_t||zn){var A=typeof k=="function"?k.displayName||k.name||"Unknown":k;_t&&Oe(It,A),zn&&ct(It,A)}return pt(k,_t,zn,Bt,mt,je.current,It)}}var H=_.ReactCurrentOwner,Le=_.ReactDebugCurrentFrame;function pe(k){if(k){var Ce=k._owner,Ve=an(k.type,k._source,Ce?Ce.type:null);Le.setExtraStackFrame(Ve)}else Le.setExtraStackFrame(null)}var Me;Me=!1;function ke(k){return typeof k=="object"&&k!==null&&k.$$typeof===n}function We(){{if(H.current){var k=K(H.current.type);if(k)return`

Check the render method of \``+k+"`."}return""}}function Lt(k){{if(k!==void 0){var Ce=k.fileName.replace(/^.*[\\\/]/,""),Ve=k.lineNumber;return`

Check your code at `+Ce+":"+Ve+"."}return""}}var vn={};function Ln(k){{var Ce=We();if(!Ce){var Ve=typeof k=="string"?k:k.displayName||k.name;Ve&&(Ce=`

Check the top-level render call using <`+Ve+">.")}return Ce}}function Jt(k,Ce){{if(!k._store||k._store.validated||k.key!=null)return;k._store.validated=!0;var Ve=Ln(Ce);if(vn[Ve])return;vn[Ve]=!0;var mt="";k&&k._owner&&k._owner!==H.current&&(mt=" It was passed a child from "+K(k._owner.type)+"."),pe(k),F('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',Ve,mt),pe(null)}}function qn(k,Ce){{if(typeof k!="object")return;if(R(k))for(var Ve=0;Ve<k.length;Ve++){var mt=k[Ve];ke(mt)&&Jt(mt,Ce)}else if(ke(k))k._store&&(k._store.validated=!0);else if(k){var Bt=M(k);if(typeof Bt=="function"&&Bt!==k.entries)for(var Mt=Bt.call(k),It;!(It=Mt.next()).done;)ke(It.value)&&Jt(It.value,Ce)}}}function In(k){{var Ce=k.type;if(Ce==null||typeof Ce=="string")return;var Ve;if(typeof Ce=="function")Ve=Ce.propTypes;else if(typeof Ce=="object"&&(Ce.$$typeof===m||Ce.$$typeof===y))Ve=Ce.propTypes;else return;if(Ve){var mt=K(Ce);nt(Ve,k.props,"prop",mt,k)}else if(Ce.PropTypes!==void 0&&!Me){Me=!0;var Bt=K(Ce);F("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",Bt||"Unknown")}typeof Ce.getDefaultProps=="function"&&!Ce.getDefaultProps.isReactClassApproved&&F("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Oi(k){{for(var Ce=Object.keys(k.props),Ve=0;Ve<Ce.length;Ve++){var mt=Ce[Ve];if(mt!=="children"&&mt!=="key"){pe(k),F("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",mt),pe(null);break}}k.ref!==null&&(pe(k),F("Invalid attribute `ref` supplied to `React.Fragment`."),pe(null))}}var Ti={};function ai(k,Ce,Ve,mt,Bt,Mt){{var It=D(k);if(!It){var _t="";(k===void 0||typeof k=="object"&&k!==null&&Object.keys(k).length===0)&&(_t+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var zn=Lt(Bt);zn?_t+=zn:_t+=We();var bn;k===null?bn="null":R(k)?bn="array":k!==void 0&&k.$$typeof===n?(bn="<"+(K(k.type)||"Unknown")+" />",_t=" Did you accidentally export a JSX literal instead of a component?"):bn=typeof k,F("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",bn,_t)}var A=Ct(k,Ce,Ve,Bt,Mt);if(A==null)return A;if(It){var Y=Ce.children;if(Y!==void 0)if(mt)if(R(Y)){for(var ne=0;ne<Y.length;ne++)qn(Y[ne],k);Object.freeze&&Object.freeze(Y)}else F("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else qn(Y,k)}if(gt.call(Ce,"key")){var ie=K(k),X=Object.keys(Ce).filter(function(Ae){return Ae!=="key"}),Ue=X.length>0?"{key: someKey, "+X.join(": ..., ")+": ...}":"{key: someKey}";if(!Ti[ie+Ue]){var He=X.length>0?"{"+X.join(": ..., ")+": ...}":"{}";F(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,Ue,ie,He,ie),Ti[ie+Ue]=!0}}return k===o?Oi(A):In(A),A}}var Dr=ai;dh.Fragment=o,dh.jsxDEV=Dr})(),dh}var jb;function ZN(){return jb||(jb=1,t_.exports=KN()),t_.exports}var rn=ZN(),mn=Ey();const QN=eT(mn);var hh={},i_={exports:{}},ir={},r_={exports:{}},a_={},Yb;function JN(){return Yb||(Yb=1,(function(s){/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error);var n=!1,i=5;function o(xe,te){var Te=xe.length;xe.push(te),d(xe,te,Te)}function u(xe){return xe.length===0?null:xe[0]}function f(xe){if(xe.length===0)return null;var te=xe[0],Te=xe.pop();return Te!==te&&(xe[0]=Te,p(xe,Te,0)),te}function d(xe,te,Te){for(var Be=Te;Be>0;){var Ke=Be-1>>>1,Oe=xe[Ke];if(m(Oe,te)>0)xe[Ke]=te,xe[Be]=Oe,Be=Ke;else return}}function p(xe,te,Te){for(var Be=Te,Ke=xe.length,Oe=Ke>>>1;Be<Oe;){var ct=(Be+1)*2-1,pt=xe[ct],Ct=ct+1,H=xe[Ct];if(m(pt,te)<0)Ct<Ke&&m(H,pt)<0?(xe[Be]=H,xe[Ct]=te,Be=Ct):(xe[Be]=pt,xe[ct]=te,Be=ct);else if(Ct<Ke&&m(H,te)<0)xe[Be]=H,xe[Ct]=te,Be=Ct;else return}}function m(xe,te){var Te=xe.sortIndex-te.sortIndex;return Te!==0?Te:xe.id-te.id}var v=1,S=2,y=3,x=4,b=5;function C(xe,te){}var L=typeof performance=="object"&&typeof performance.now=="function";if(L){var M=performance;s.unstable_now=function(){return M.now()}}else{var _=Date,F=_.now();s.unstable_now=function(){return _.now()-F}}var I=1073741823,P=-1,$=250,G=5e3,z=1e4,Z=I,N=[],D=[],V=1,he=null,K=y,Se=!1,ye=!1,ce=!1,fe=typeof setTimeout=="function"?setTimeout:null,le=typeof clearTimeout=="function"?clearTimeout:null,Fe=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Ge(xe){for(var te=u(D);te!==null;){if(te.callback===null)f(D);else if(te.startTime<=xe)f(D),te.sortIndex=te.expirationTime,o(N,te);else return;te=u(D)}}function tt(xe){if(ce=!1,Ge(xe),!ye)if(u(N)!==null)ye=!0,ue(ft);else{var te=u(D);te!==null&&se(tt,te.startTime-xe)}}function ft(xe,te){ye=!1,ce&&(ce=!1,je()),Se=!0;var Te=K;try{var Be;if(!n)return Ht(xe,te)}finally{he=null,K=Te,Se=!1}}function Ht(xe,te){var Te=te;for(Ge(Te),he=u(N);he!==null&&!(he.expirationTime>Te&&(!xe||ut()));){var Be=he.callback;if(typeof Be=="function"){he.callback=null,K=he.priorityLevel;var Ke=he.expirationTime<=Te,Oe=Be(Ke);Te=s.unstable_now(),typeof Oe=="function"?he.callback=Oe:he===u(N)&&f(N),Ge(Te)}else f(N);he=u(N)}if(he!==null)return!0;var ct=u(D);return ct!==null&&se(tt,ct.startTime-Te),!1}function me(xe,te){switch(xe){case v:case S:case y:case x:case b:break;default:xe=y}var Te=K;K=xe;try{return te()}finally{K=Te}}function De(xe){var te;switch(K){case v:case S:case y:te=y;break;default:te=K;break}var Te=K;K=te;try{return xe()}finally{K=Te}}function Je(xe){var te=K;return function(){var Te=K;K=te;try{return xe.apply(this,arguments)}finally{K=Te}}}function Ne(xe,te,Te){var Be=s.unstable_now(),Ke;if(typeof Te=="object"&&Te!==null){var Oe=Te.delay;typeof Oe=="number"&&Oe>0?Ke=Be+Oe:Ke=Be}else Ke=Be;var ct;switch(xe){case v:ct=P;break;case S:ct=$;break;case b:ct=Z;break;case x:ct=z;break;case y:default:ct=G;break}var pt=Ke+ct,Ct={id:V++,callback:te,priorityLevel:xe,startTime:Ke,expirationTime:pt,sortIndex:-1};return Ke>Be?(Ct.sortIndex=Ke,o(D,Ct),u(N)===null&&Ct===u(D)&&(ce?je():ce=!0,se(tt,Ke-Be))):(Ct.sortIndex=pt,o(N,Ct),!ye&&!Se&&(ye=!0,ue(ft))),Ct}function rt(){}function st(){!ye&&!Se&&(ye=!0,ue(ft))}function vt(){return u(N)}function zt(xe){xe.callback=null}function xt(){return K}var Ft=!1,q=null,an=-1,gt=i,Rt=-1;function ut(){var xe=s.unstable_now()-Rt;return!(xe<gt)}function Gt(){}function nt(xe){if(xe<0||xe>125){console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");return}xe>0?gt=Math.floor(1e3/xe):gt=i}var O=function(){if(q!==null){var xe=s.unstable_now();Rt=xe;var te=!0,Te=!0;try{Te=q(te,xe)}finally{Te?R():(Ft=!1,q=null)}}else Ft=!1},R;if(typeof Fe=="function")R=function(){Fe(O)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,Ee=Q.port2;Q.port1.onmessage=O,R=function(){Ee.postMessage(null)}}else R=function(){fe(O,0)};function ue(xe){q=xe,Ft||(Ft=!0,R())}function se(xe,te){an=fe(function(){xe(s.unstable_now())},te)}function je(){le(an),an=-1}var Pe=Gt,ze=null;s.unstable_IdlePriority=b,s.unstable_ImmediatePriority=v,s.unstable_LowPriority=x,s.unstable_NormalPriority=y,s.unstable_Profiling=ze,s.unstable_UserBlockingPriority=S,s.unstable_cancelCallback=zt,s.unstable_continueExecution=st,s.unstable_forceFrameRate=nt,s.unstable_getCurrentPriorityLevel=xt,s.unstable_getFirstCallbackNode=vt,s.unstable_next=De,s.unstable_pauseExecution=rt,s.unstable_requestPaint=Pe,s.unstable_runWithPriority=me,s.unstable_scheduleCallback=Ne,s.unstable_shouldYield=ut,s.unstable_wrapCallback=Je,typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error)})()})(a_)),a_}var qb;function eP(){return qb||(qb=1,r_.exports=JN()),r_.exports}var $b;function tP(){if($b)return ir;$b=1;/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */return(function(){typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error);var s=Ey(),n=eP(),i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,o=!1;function u(e){o=e}function f(e){if(!o){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];p("warn",e,r)}}function d(e){if(!o){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];p("error",e,r)}}function p(e,t,r){{var a=i.ReactDebugCurrentFrame,l=a.getStackAddendum();l!==""&&(t+="%s",r=r.concat([l]));var c=r.map(function(h){return String(h)});c.unshift("Warning: "+t),Function.prototype.apply.call(console[e],console,c)}}var m=0,v=1,S=2,y=3,x=4,b=5,C=6,L=7,M=8,_=9,F=10,I=11,P=12,$=13,G=14,z=15,Z=16,N=17,D=18,V=19,he=21,K=22,Se=23,ye=24,ce=25,fe=!0,le=!1,Fe=!1,Ge=!1,tt=!1,ft=!0,Ht=!0,me=!0,De=!0,Je=new Set,Ne={},rt={};function st(e,t){vt(e,t),vt(e+"Capture",t)}function vt(e,t){Ne[e]&&d("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",e),Ne[e]=t;{var r=e.toLowerCase();rt[r]=e,e==="onDoubleClick"&&(rt.ondblclick=e)}for(var a=0;a<t.length;a++)Je.add(t[a])}var zt=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",xt=Object.prototype.hasOwnProperty;function Ft(e){{var t=typeof Symbol=="function"&&Symbol.toStringTag,r=t&&e[Symbol.toStringTag]||e.constructor.name||"Object";return r}}function q(e){try{return an(e),!1}catch{return!0}}function an(e){return""+e}function gt(e,t){if(q(e))return d("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.",t,Ft(e)),an(e)}function Rt(e){if(q(e))return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Ft(e)),an(e)}function ut(e,t){if(q(e))return d("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.",t,Ft(e)),an(e)}function Gt(e,t){if(q(e))return d("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.",t,Ft(e)),an(e)}function nt(e){if(q(e))return d("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.",Ft(e)),an(e)}function O(e){if(q(e))return d("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.",Ft(e)),an(e)}var R=0,Q=1,Ee=2,ue=3,se=4,je=5,Pe=6,ze=":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",xe=ze+"\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",te=new RegExp("^["+ze+"]["+xe+"]*$"),Te={},Be={};function Ke(e){return xt.call(Be,e)?!0:xt.call(Te,e)?!1:te.test(e)?(Be[e]=!0,!0):(Te[e]=!0,d("Invalid attribute name: `%s`",e),!1)}function Oe(e,t,r){return t!==null?t.type===R:r?!1:e.length>2&&(e[0]==="o"||e[0]==="O")&&(e[1]==="n"||e[1]==="N")}function ct(e,t,r,a){if(r!==null&&r.type===R)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":{if(a)return!1;if(r!==null)return!r.acceptsBooleans;var l=e.toLowerCase().slice(0,5);return l!=="data-"&&l!=="aria-"}default:return!1}}function pt(e,t,r,a){if(t===null||typeof t>"u"||ct(e,t,r,a))return!0;if(a)return!1;if(r!==null)switch(r.type){case ue:return!t;case se:return t===!1;case je:return isNaN(t);case Pe:return isNaN(t)||t<1}return!1}function Ct(e){return Le.hasOwnProperty(e)?Le[e]:null}function H(e,t,r,a,l,c,h){this.acceptsBooleans=t===Ee||t===ue||t===se,this.attributeName=a,this.attributeNamespace=l,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=c,this.removeEmptyString=h}var Le={},pe=["children","dangerouslySetInnerHTML","defaultValue","defaultChecked","innerHTML","suppressContentEditableWarning","suppressHydrationWarning","style"];pe.forEach(function(e){Le[e]=new H(e,R,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0],r=e[1];Le[t]=new H(t,Q,!1,r,null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){Le[e]=new H(e,Ee,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Le[e]=new H(e,Ee,!1,e,null,!1,!1)}),["allowFullScreen","async","autoFocus","autoPlay","controls","default","defer","disabled","disablePictureInPicture","disableRemotePlayback","formNoValidate","hidden","loop","noModule","noValidate","open","playsInline","readOnly","required","reversed","scoped","seamless","itemScope"].forEach(function(e){Le[e]=new H(e,ue,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){Le[e]=new H(e,ue,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){Le[e]=new H(e,se,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){Le[e]=new H(e,Pe,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){Le[e]=new H(e,je,!1,e.toLowerCase(),null,!1,!1)});var Me=/[\-\:]([a-z])/g,ke=function(e){return e[1].toUpperCase()};["accent-height","alignment-baseline","arabic-form","baseline-shift","cap-height","clip-path","clip-rule","color-interpolation","color-interpolation-filters","color-profile","color-rendering","dominant-baseline","enable-background","fill-opacity","fill-rule","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","glyph-name","glyph-orientation-horizontal","glyph-orientation-vertical","horiz-adv-x","horiz-origin-x","image-rendering","letter-spacing","lighting-color","marker-end","marker-mid","marker-start","overline-position","overline-thickness","paint-order","panose-1","pointer-events","rendering-intent","shape-rendering","stop-color","stop-opacity","strikethrough-position","strikethrough-thickness","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-anchor","text-decoration","text-rendering","underline-position","underline-thickness","unicode-bidi","unicode-range","units-per-em","v-alphabetic","v-hanging","v-ideographic","v-mathematical","vector-effect","vert-adv-y","vert-origin-x","vert-origin-y","word-spacing","writing-mode","xmlns:xlink","x-height"].forEach(function(e){var t=e.replace(Me,ke);Le[t]=new H(t,Q,!1,e,null,!1,!1)}),["xlink:actuate","xlink:arcrole","xlink:role","xlink:show","xlink:title","xlink:type"].forEach(function(e){var t=e.replace(Me,ke);Le[t]=new H(t,Q,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Me,ke);Le[t]=new H(t,Q,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){Le[e]=new H(e,Q,!1,e.toLowerCase(),null,!1,!1)});var We="xlinkHref";Le[We]=new H("xlinkHref",Q,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){Le[e]=new H(e,Q,!1,e.toLowerCase(),null,!0,!0)});var Lt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i,vn=!1;function Ln(e){!vn&&Lt.test(e)&&(vn=!0,d("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.",JSON.stringify(e)))}function Jt(e,t,r,a){if(a.mustUseProperty){var l=a.propertyName;return e[l]}else{gt(r,t),a.sanitizeURL&&Ln(""+r);var c=a.attributeName,h=null;if(a.type===se){if(e.hasAttribute(c)){var g=e.getAttribute(c);return g===""?!0:pt(t,r,a,!1)?g:g===""+r?r:g}}else if(e.hasAttribute(c)){if(pt(t,r,a,!1))return e.getAttribute(c);if(a.type===ue)return r;h=e.getAttribute(c)}return pt(t,r,a,!1)?h===null?r:h:h===""+r?r:h}}function qn(e,t,r,a){{if(!Ke(t))return;if(!e.hasAttribute(t))return r===void 0?void 0:null;var l=e.getAttribute(t);return gt(r,t),l===""+r?r:l}}function In(e,t,r,a){var l=Ct(t);if(!Oe(t,l,a)){if(pt(t,r,l,a)&&(r=null),a||l===null){if(Ke(t)){var c=t;r===null?e.removeAttribute(c):(gt(r,t),e.setAttribute(c,""+r))}return}var h=l.mustUseProperty;if(h){var g=l.propertyName;if(r===null){var E=l.type;e[g]=E===ue?!1:""}else e[g]=r;return}var w=l.attributeName,U=l.attributeNamespace;if(r===null)e.removeAttribute(w);else{var j=l.type,W;j===ue||j===se&&r===!0?W="":(gt(r,w),W=""+r,l.sanitizeURL&&Ln(W.toString())),U?e.setAttributeNS(U,w,W):e.setAttribute(w,W)}}}var Oi=Symbol.for("react.element"),Ti=Symbol.for("react.portal"),ai=Symbol.for("react.fragment"),Dr=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),Ce=Symbol.for("react.provider"),Ve=Symbol.for("react.context"),mt=Symbol.for("react.forward_ref"),Bt=Symbol.for("react.suspense"),Mt=Symbol.for("react.suspense_list"),It=Symbol.for("react.memo"),_t=Symbol.for("react.lazy"),zn=Symbol.for("react.scope"),bn=Symbol.for("react.debug_trace_mode"),A=Symbol.for("react.offscreen"),Y=Symbol.for("react.legacy_hidden"),ne=Symbol.for("react.cache"),ie=Symbol.for("react.tracing_marker"),X=Symbol.iterator,Ue="@@iterator";function He(e){if(e===null||typeof e!="object")return null;var t=X&&e[X]||e[Ue];return typeof t=="function"?t:null}var Ae=Object.assign,at=0,At,Pt,it,Yt,fn,pn,Vn;function en(){}en.__reactDisabledLog=!0;function dt(){{if(at===0){At=console.log,Pt=console.info,it=console.warn,Yt=console.error,fn=console.group,pn=console.groupCollapsed,Vn=console.groupEnd;var e={configurable:!0,enumerable:!0,value:en,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}at++}}function qi(){{if(at--,at===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:Ae({},e,{value:At}),info:Ae({},e,{value:Pt}),warn:Ae({},e,{value:it}),error:Ae({},e,{value:Yt}),group:Ae({},e,{value:fn}),groupCollapsed:Ae({},e,{value:pn}),groupEnd:Ae({},e,{value:Vn})})}at<0&&d("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var qt=i.ReactCurrentDispatcher,pi;function mi(e,t,r){{if(pi===void 0)try{throw Error()}catch(l){var a=l.stack.trim().match(/\n( *(at )?)/);pi=a&&a[1]||""}return`
`+pi+e}}var Bn=!1,$i;{var dn=typeof WeakMap=="function"?WeakMap:Map;$i=new dn}function oi(e,t){if(!e||Bn)return"";{var r=$i.get(e);if(r!==void 0)return r}var a;Bn=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var c;c=qt.current,qt.current=null,dt();try{if(t){var h=function(){throw Error()};if(Object.defineProperty(h.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(h,[])}catch(oe){a=oe}Reflect.construct(e,[],h)}else{try{h.call()}catch(oe){a=oe}e.call(h.prototype)}}else{try{throw Error()}catch(oe){a=oe}e()}}catch(oe){if(oe&&a&&typeof oe.stack=="string"){for(var g=oe.stack.split(`
`),E=a.stack.split(`
`),w=g.length-1,U=E.length-1;w>=1&&U>=0&&g[w]!==E[U];)U--;for(;w>=1&&U>=0;w--,U--)if(g[w]!==E[U]){if(w!==1||U!==1)do if(w--,U--,U<0||g[w]!==E[U]){var j=`
`+g[w].replace(" at new "," at ");return e.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",e.displayName)),typeof e=="function"&&$i.set(e,j),j}while(w>=1&&U>=0);break}}}finally{Bn=!1,qt.current=c,qi(),Error.prepareStackTrace=l}var W=e?e.displayName||e.name:"",re=W?mi(W):"";return typeof e=="function"&&$i.set(e,re),re}function gr(e,t,r){return oi(e,!0)}function si(e,t,r){return oi(e,!1)}function or(e){var t=e.prototype;return!!(t&&t.isReactComponent)}function Ki(e,t,r){if(e==null)return"";if(typeof e=="function")return oi(e,or(e));if(typeof e=="string")return mi(e);switch(e){case Bt:return mi("Suspense");case Mt:return mi("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case mt:return si(e.render);case It:return Ki(e.type,t,r);case _t:{var a=e,l=a._payload,c=a._init;try{return Ki(c(l),t,r)}catch{}}}return""}function ws(e){switch(e._debugOwner&&e._debugOwner.type,e._debugSource,e.tag){case b:return mi(e.type);case Z:return mi("Lazy");case $:return mi("Suspense");case V:return mi("SuspenseList");case m:case S:case z:return si(e.type);case I:return si(e.type.render);case v:return gr(e.type);default:return""}}function No(e){try{var t="",r=e;do t+=ws(r),r=r.return;while(r);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function sf(e,t,r){var a=e.displayName;if(a)return a;var l=t.displayName||t.name||"";return l!==""?r+"("+l+")":r}function au(e){return e.displayName||"Context"}function on(e){if(e==null)return null;if(typeof e.tag=="number"&&d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ai:return"Fragment";case Ti:return"Portal";case k:return"Profiler";case Dr:return"StrictMode";case Bt:return"Suspense";case Mt:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ve:var t=e;return au(t)+".Consumer";case Ce:var r=e;return au(r._context)+".Provider";case mt:return sf(e,e.render,"ForwardRef");case It:var a=e.displayName||null;return a!==null?a:on(e.type)||"Memo";case _t:{var l=e,c=l._payload,h=l._init;try{return on(h(c))}catch{return null}}}return null}function qh(e,t,r){var a=t.displayName||t.name||"";return e.displayName||(a!==""?r+"("+a+")":r)}function pa(e){return e.displayName||"Context"}function Ot(e){var t=e.tag,r=e.type;switch(t){case ye:return"Cache";case _:var a=r;return pa(a)+".Consumer";case F:var l=r;return pa(l._context)+".Provider";case D:return"DehydratedFragment";case I:return qh(r,r.render,"ForwardRef");case L:return"Fragment";case b:return r;case x:return"Portal";case y:return"Root";case C:return"Text";case Z:return on(r);case M:return r===Dr?"StrictMode":"Mode";case K:return"Offscreen";case P:return"Profiler";case he:return"Scope";case $:return"Suspense";case V:return"SuspenseList";case ce:return"TracingMarker";case v:case m:case N:case S:case G:case z:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;break}return null}var ou=i.ReactDebugCurrentFrame,Fi=null,Po=!1;function $a(){{if(Fi===null)return null;var e=Fi._debugOwner;if(e!==null&&typeof e<"u")return Ot(e)}return null}function $h(){return Fi===null?"":No(Fi)}function li(){ou.getCurrentStack=null,Fi=null,Po=!1}function wn(e){ou.getCurrentStack=e===null?null:$h,Fi=e,Po=!1}function lf(){return Fi}function _r(e){Po=e}function Ii(e){return""+e}function Lr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return O(e),e;default:return""}}var Kh={button:!0,checkbox:!0,image:!0,hidden:!0,radio:!0,reset:!0,submit:!0};function su(e,t){Kh[t.type]||t.onChange||t.onInput||t.readOnly||t.disabled||t.value==null||d("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."),t.onChange||t.readOnly||t.disabled||t.checked==null||d("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")}function uf(e){var t=e.type,r=e.nodeName;return r&&r.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function lu(e){return e._valueTracker}function Ds(e){e._valueTracker=null}function Zh(e){var t="";return e&&(uf(e)?t=e.checked?"true":"false":t=e.value),t}function Ka(e){var t=uf(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);O(e[t]);var a=""+e[t];if(!(e.hasOwnProperty(t)||typeof r>"u"||typeof r.get!="function"||typeof r.set!="function")){var l=r.get,c=r.set;Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(g){O(g),a=""+g,c.call(this,g)}}),Object.defineProperty(e,t,{enumerable:r.enumerable});var h={getValue:function(){return a},setValue:function(g){O(g),a=""+g},stopTracking:function(){Ds(e),delete e[t]}};return h}}function Oo(e){lu(e)||(e._valueTracker=Ka(e))}function uu(e){if(!e)return!1;var t=lu(e);if(!t)return!0;var r=t.getValue(),a=Zh(e);return a!==r?(t.setValue(a),!0):!1}function ma(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ls=!1,Us=!1,Ns=!1,cf=!1;function ff(e){var t=e.type==="checkbox"||e.type==="radio";return t?e.checked!=null:e.value!=null}function cu(e,t){var r=e,a=t.checked,l=Ae({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked});return l}function df(e,t){su("input",t),t.checked!==void 0&&t.defaultChecked!==void 0&&!Us&&(d("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components",$a()||"A component",t.type),Us=!0),t.value!==void 0&&t.defaultValue!==void 0&&!Ls&&(d("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components",$a()||"A component",t.type),Ls=!0);var r=e,a=t.defaultValue==null?"":t.defaultValue;r._wrapperState={initialChecked:t.checked!=null?t.checked:t.defaultChecked,initialValue:Lr(t.value!=null?t.value:a),controlled:ff(t)}}function T(e,t){var r=e,a=t.checked;a!=null&&In(r,"checked",a,!1)}function B(e,t){var r=e;{var a=ff(t);!r._wrapperState.controlled&&a&&!cf&&(d("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"),cf=!0),r._wrapperState.controlled&&!a&&!Ns&&(d("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"),Ns=!0)}T(e,t);var l=Lr(t.value),c=t.type;if(l!=null)c==="number"?(l===0&&r.value===""||r.value!=l)&&(r.value=Ii(l)):r.value!==Ii(l)&&(r.value=Ii(l));else if(c==="submit"||c==="reset"){r.removeAttribute("value");return}t.hasOwnProperty("value")?Et(r,t.type,l):t.hasOwnProperty("defaultValue")&&Et(r,t.type,Lr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(r.defaultChecked=!!t.defaultChecked)}function ae(e,t,r){var a=e;if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var l=t.type,c=l==="submit"||l==="reset";if(c&&(t.value===void 0||t.value===null))return;var h=Ii(a._wrapperState.initialValue);r||h!==a.value&&(a.value=h),a.defaultValue=h}var g=a.name;g!==""&&(a.name=""),a.defaultChecked=!a.defaultChecked,a.defaultChecked=!!a._wrapperState.initialChecked,g!==""&&(a.name=g)}function ve(e,t){var r=e;B(r,t),Ie(r,t)}function Ie(e,t){var r=t.name;if(t.type==="radio"&&r!=null){for(var a=e;a.parentNode;)a=a.parentNode;gt(r,"name");for(var l=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),c=0;c<l.length;c++){var h=l[c];if(!(h===e||h.form!==e.form)){var g=Qf(h);if(!g)throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");uu(h),B(h,g)}}}}function Et(e,t,r){(t!=="number"||ma(e.ownerDocument)!==e)&&(r==null?e.defaultValue=Ii(e._wrapperState.initialValue):e.defaultValue!==Ii(r)&&(e.defaultValue=Ii(r)))}var lt=!1,Ut=!1,$t=!1;function gn(e,t){t.value==null&&(typeof t.children=="object"&&t.children!==null?s.Children.forEach(t.children,function(r){r!=null&&(typeof r=="string"||typeof r=="number"||Ut||(Ut=!0,d("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")))}):t.dangerouslySetInnerHTML!=null&&($t||($t=!0,d("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))),t.selected!=null&&!lt&&(d("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."),lt=!0)}function Tn(e,t){t.value!=null&&e.setAttribute("value",Ii(Lr(t.value)))}var Rn=Array.isArray;function Xt(e){return Rn(e)}var Dn;Dn=!1;function Gn(){var e=$a();return e?`

Check the render method of \``+e+"`.":""}var Fo=["value","defaultValue"];function fu(e){{su("select",e);for(var t=0;t<Fo.length;t++){var r=Fo[t];if(e[r]!=null){var a=Xt(e[r]);e.multiple&&!a?d("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",r,Gn()):!e.multiple&&a&&d("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",r,Gn())}}}}function va(e,t,r,a){var l=e.options;if(t){for(var c=r,h={},g=0;g<c.length;g++)h["$"+c[g]]=!0;for(var E=0;E<l.length;E++){var w=h.hasOwnProperty("$"+l[E].value);l[E].selected!==w&&(l[E].selected=w),w&&a&&(l[E].defaultSelected=!0)}}else{for(var U=Ii(Lr(r)),j=null,W=0;W<l.length;W++){if(l[W].value===U){l[W].selected=!0,a&&(l[W].defaultSelected=!0);return}j===null&&!l[W].disabled&&(j=l[W])}j!==null&&(j.selected=!0)}}function du(e,t){return Ae({},t,{value:void 0})}function hu(e,t){var r=e;fu(t),r._wrapperState={wasMultiple:!!t.multiple},t.value!==void 0&&t.defaultValue!==void 0&&!Dn&&(d("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"),Dn=!0)}function Qh(e,t){var r=e;r.multiple=!!t.multiple;var a=t.value;a!=null?va(r,!!t.multiple,a,!1):t.defaultValue!=null&&va(r,!!t.multiple,t.defaultValue,!0)}function hf(e,t){var r=e,a=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!t.multiple;var l=t.value;l!=null?va(r,!!t.multiple,l,!1):a!==!!t.multiple&&(t.defaultValue!=null?va(r,!!t.multiple,t.defaultValue,!0):va(r,!!t.multiple,t.multiple?[]:"",!1))}function Jh(e,t){var r=e,a=t.value;a!=null&&va(r,!!t.multiple,a,!1)}var Oy=!1;function ep(e,t){var r=e;if(t.dangerouslySetInnerHTML!=null)throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");var a=Ae({},t,{value:void 0,defaultValue:void 0,children:Ii(r._wrapperState.initialValue)});return a}function Fy(e,t){var r=e;su("textarea",t),t.value!==void 0&&t.defaultValue!==void 0&&!Oy&&(d("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components",$a()||"A component"),Oy=!0);var a=t.value;if(a==null){var l=t.children,c=t.defaultValue;if(l!=null){d("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");{if(c!=null)throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");if(Xt(l)){if(l.length>1)throw new Error("<textarea> can only have at most one child.");l=l[0]}c=l}}c==null&&(c=""),a=c}r._wrapperState={initialValue:Lr(a)}}function Iy(e,t){var r=e,a=Lr(t.value),l=Lr(t.defaultValue);if(a!=null){var c=Ii(a);c!==r.value&&(r.value=c),t.defaultValue==null&&r.defaultValue!==c&&(r.defaultValue=c)}l!=null&&(r.defaultValue=Ii(l))}function zy(e,t){var r=e,a=r.textContent;a===r._wrapperState.initialValue&&a!==""&&a!==null&&(r.value=a)}function FT(e,t){Iy(e,t)}var ga="http://www.w3.org/1999/xhtml",IT="http://www.w3.org/1998/Math/MathML",tp="http://www.w3.org/2000/svg";function np(e){switch(e){case"svg":return tp;case"math":return IT;default:return ga}}function ip(e,t){return e==null||e===ga?np(t):e===tp&&t==="foreignObject"?ga:e}var zT=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,a,l){MSApp.execUnsafeLocalFunction(function(){return e(t,r,a,l)})}:e},pf,By=zT(function(e,t){if(e.namespaceURI===tp&&!("innerHTML"in e)){pf=pf||document.createElement("div"),pf.innerHTML="<svg>"+t.valueOf().toString()+"</svg>";for(var r=pf.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild);return}e.innerHTML=t}),Zi=1,_a=3,Wn=8,ya=9,rp=11,mf=function(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===_a){r.nodeValue=t;return}}e.textContent=t},BT={animation:["animationDelay","animationDirection","animationDuration","animationFillMode","animationIterationCount","animationName","animationPlayState","animationTimingFunction"],background:["backgroundAttachment","backgroundClip","backgroundColor","backgroundImage","backgroundOrigin","backgroundPositionX","backgroundPositionY","backgroundRepeat","backgroundSize"],backgroundPosition:["backgroundPositionX","backgroundPositionY"],border:["borderBottomColor","borderBottomStyle","borderBottomWidth","borderImageOutset","borderImageRepeat","borderImageSlice","borderImageSource","borderImageWidth","borderLeftColor","borderLeftStyle","borderLeftWidth","borderRightColor","borderRightStyle","borderRightWidth","borderTopColor","borderTopStyle","borderTopWidth"],borderBlockEnd:["borderBlockEndColor","borderBlockEndStyle","borderBlockEndWidth"],borderBlockStart:["borderBlockStartColor","borderBlockStartStyle","borderBlockStartWidth"],borderBottom:["borderBottomColor","borderBottomStyle","borderBottomWidth"],borderColor:["borderBottomColor","borderLeftColor","borderRightColor","borderTopColor"],borderImage:["borderImageOutset","borderImageRepeat","borderImageSlice","borderImageSource","borderImageWidth"],borderInlineEnd:["borderInlineEndColor","borderInlineEndStyle","borderInlineEndWidth"],borderInlineStart:["borderInlineStartColor","borderInlineStartStyle","borderInlineStartWidth"],borderLeft:["borderLeftColor","borderLeftStyle","borderLeftWidth"],borderRadius:["borderBottomLeftRadius","borderBottomRightRadius","borderTopLeftRadius","borderTopRightRadius"],borderRight:["borderRightColor","borderRightStyle","borderRightWidth"],borderStyle:["borderBottomStyle","borderLeftStyle","borderRightStyle","borderTopStyle"],borderTop:["borderTopColor","borderTopStyle","borderTopWidth"],borderWidth:["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth"],columnRule:["columnRuleColor","columnRuleStyle","columnRuleWidth"],columns:["columnCount","columnWidth"],flex:["flexBasis","flexGrow","flexShrink"],flexFlow:["flexDirection","flexWrap"],font:["fontFamily","fontFeatureSettings","fontKerning","fontLanguageOverride","fontSize","fontSizeAdjust","fontStretch","fontStyle","fontVariant","fontVariantAlternates","fontVariantCaps","fontVariantEastAsian","fontVariantLigatures","fontVariantNumeric","fontVariantPosition","fontWeight","lineHeight"],fontVariant:["fontVariantAlternates","fontVariantCaps","fontVariantEastAsian","fontVariantLigatures","fontVariantNumeric","fontVariantPosition"],gap:["columnGap","rowGap"],grid:["gridAutoColumns","gridAutoFlow","gridAutoRows","gridTemplateAreas","gridTemplateColumns","gridTemplateRows"],gridArea:["gridColumnEnd","gridColumnStart","gridRowEnd","gridRowStart"],gridColumn:["gridColumnEnd","gridColumnStart"],gridColumnGap:["columnGap"],gridGap:["columnGap","rowGap"],gridRow:["gridRowEnd","gridRowStart"],gridRowGap:["rowGap"],gridTemplate:["gridTemplateAreas","gridTemplateColumns","gridTemplateRows"],listStyle:["listStyleImage","listStylePosition","listStyleType"],margin:["marginBottom","marginLeft","marginRight","marginTop"],marker:["markerEnd","markerMid","markerStart"],mask:["maskClip","maskComposite","maskImage","maskMode","maskOrigin","maskPositionX","maskPositionY","maskRepeat","maskSize"],maskPosition:["maskPositionX","maskPositionY"],outline:["outlineColor","outlineStyle","outlineWidth"],overflow:["overflowX","overflowY"],padding:["paddingBottom","paddingLeft","paddingRight","paddingTop"],placeContent:["alignContent","justifyContent"],placeItems:["alignItems","justifyItems"],placeSelf:["alignSelf","justifySelf"],textDecoration:["textDecorationColor","textDecorationLine","textDecorationStyle"],textEmphasis:["textEmphasisColor","textEmphasisStyle"],transition:["transitionDelay","transitionDuration","transitionProperty","transitionTimingFunction"],wordWrap:["overflowWrap"]},pu={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};function kT(e,t){return e+t.charAt(0).toUpperCase()+t.substring(1)}var HT=["Webkit","ms","Moz","O"];Object.keys(pu).forEach(function(e){HT.forEach(function(t){pu[kT(t,e)]=pu[e]})});function ap(e,t,r){var a=t==null||typeof t=="boolean"||t==="";return a?"":!r&&typeof t=="number"&&t!==0&&!(pu.hasOwnProperty(e)&&pu[e])?t+"px":(Gt(t,e),(""+t).trim())}var VT=/([A-Z])/g,GT=/^ms-/;function WT(e){return e.replace(VT,"-$1").toLowerCase().replace(GT,"-ms-")}var ky=function(){};{var XT=/^(?:webkit|moz|o)[A-Z]/,jT=/^-ms-/,YT=/-(.)/g,Hy=/;\s*$/,Ps={},op={},Vy=!1,Gy=!1,qT=function(e){return e.replace(YT,function(t,r){return r.toUpperCase()})},$T=function(e){Ps.hasOwnProperty(e)&&Ps[e]||(Ps[e]=!0,d("Unsupported style property %s. Did you mean %s?",e,qT(e.replace(jT,"ms-"))))},KT=function(e){Ps.hasOwnProperty(e)&&Ps[e]||(Ps[e]=!0,d("Unsupported vendor-prefixed style property %s. Did you mean %s?",e,e.charAt(0).toUpperCase()+e.slice(1)))},ZT=function(e,t){op.hasOwnProperty(t)&&op[t]||(op[t]=!0,d(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,e,t.replace(Hy,"")))},QT=function(e,t){Vy||(Vy=!0,d("`NaN` is an invalid value for the `%s` css style property.",e))},JT=function(e,t){Gy||(Gy=!0,d("`Infinity` is an invalid value for the `%s` css style property.",e))};ky=function(e,t){e.indexOf("-")>-1?$T(e):XT.test(e)?KT(e):Hy.test(t)&&ZT(e,t),typeof t=="number"&&(isNaN(t)?QT(e,t):isFinite(t)||JT(e,t))}}var eR=ky;function tR(e){{var t="",r="";for(var a in e)if(e.hasOwnProperty(a)){var l=e[a];if(l!=null){var c=a.indexOf("--")===0;t+=r+(c?a:WT(a))+":",t+=ap(a,l,c),r=";"}}return t||null}}function Wy(e,t){var r=e.style;for(var a in t)if(t.hasOwnProperty(a)){var l=a.indexOf("--")===0;l||eR(a,t[a]);var c=ap(a,t[a],l);a==="float"&&(a="cssFloat"),l?r.setProperty(a,c):r[a]=c}}function nR(e){return e==null||typeof e=="boolean"||e===""}function Xy(e){var t={};for(var r in e)for(var a=BT[r]||[r],l=0;l<a.length;l++)t[a[l]]=r;return t}function iR(e,t){{if(!t)return;var r=Xy(e),a=Xy(t),l={};for(var c in r){var h=r[c],g=a[c];if(g&&h!==g){var E=h+","+g;if(l[E])continue;l[E]=!0,d("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",nR(e[h])?"Removing":"Updating",h,g)}}}}var rR={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},aR=Ae({menuitem:!0},rR),oR="__html";function sp(e,t){if(t){if(aR[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw new Error(e+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");if(typeof t.dangerouslySetInnerHTML!="object"||!(oR in t.dangerouslySetInnerHTML))throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.")}if(!t.suppressContentEditableWarning&&t.contentEditable&&t.children!=null&&d("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."),t.style!=null&&typeof t.style!="object")throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.")}}function Io(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vf={accept:"accept",acceptcharset:"acceptCharset","accept-charset":"acceptCharset",accesskey:"accessKey",action:"action",allowfullscreen:"allowFullScreen",alt:"alt",as:"as",async:"async",autocapitalize:"autoCapitalize",autocomplete:"autoComplete",autocorrect:"autoCorrect",autofocus:"autoFocus",autoplay:"autoPlay",autosave:"autoSave",capture:"capture",cellpadding:"cellPadding",cellspacing:"cellSpacing",challenge:"challenge",charset:"charSet",checked:"checked",children:"children",cite:"cite",class:"className",classid:"classID",classname:"className",cols:"cols",colspan:"colSpan",content:"content",contenteditable:"contentEditable",contextmenu:"contextMenu",controls:"controls",controlslist:"controlsList",coords:"coords",crossorigin:"crossOrigin",dangerouslysetinnerhtml:"dangerouslySetInnerHTML",data:"data",datetime:"dateTime",default:"default",defaultchecked:"defaultChecked",defaultvalue:"defaultValue",defer:"defer",dir:"dir",disabled:"disabled",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback",download:"download",draggable:"draggable",enctype:"encType",enterkeyhint:"enterKeyHint",for:"htmlFor",form:"form",formmethod:"formMethod",formaction:"formAction",formenctype:"formEncType",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",headers:"headers",height:"height",hidden:"hidden",high:"high",href:"href",hreflang:"hrefLang",htmlfor:"htmlFor",httpequiv:"httpEquiv","http-equiv":"httpEquiv",icon:"icon",id:"id",imagesizes:"imageSizes",imagesrcset:"imageSrcSet",innerhtml:"innerHTML",inputmode:"inputMode",integrity:"integrity",is:"is",itemid:"itemID",itemprop:"itemProp",itemref:"itemRef",itemscope:"itemScope",itemtype:"itemType",keyparams:"keyParams",keytype:"keyType",kind:"kind",label:"label",lang:"lang",list:"list",loop:"loop",low:"low",manifest:"manifest",marginwidth:"marginWidth",marginheight:"marginHeight",max:"max",maxlength:"maxLength",media:"media",mediagroup:"mediaGroup",method:"method",min:"min",minlength:"minLength",multiple:"multiple",muted:"muted",name:"name",nomodule:"noModule",nonce:"nonce",novalidate:"noValidate",open:"open",optimum:"optimum",pattern:"pattern",placeholder:"placeholder",playsinline:"playsInline",poster:"poster",preload:"preload",profile:"profile",radiogroup:"radioGroup",readonly:"readOnly",referrerpolicy:"referrerPolicy",rel:"rel",required:"required",reversed:"reversed",role:"role",rows:"rows",rowspan:"rowSpan",sandbox:"sandbox",scope:"scope",scoped:"scoped",scrolling:"scrolling",seamless:"seamless",selected:"selected",shape:"shape",size:"size",sizes:"sizes",span:"span",spellcheck:"spellCheck",src:"src",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",start:"start",step:"step",style:"style",summary:"summary",tabindex:"tabIndex",target:"target",title:"title",type:"type",usemap:"useMap",value:"value",width:"width",wmode:"wmode",wrap:"wrap",about:"about",accentheight:"accentHeight","accent-height":"accentHeight",accumulate:"accumulate",additive:"additive",alignmentbaseline:"alignmentBaseline","alignment-baseline":"alignmentBaseline",allowreorder:"allowReorder",alphabetic:"alphabetic",amplitude:"amplitude",arabicform:"arabicForm","arabic-form":"arabicForm",ascent:"ascent",attributename:"attributeName",attributetype:"attributeType",autoreverse:"autoReverse",azimuth:"azimuth",basefrequency:"baseFrequency",baselineshift:"baselineShift","baseline-shift":"baselineShift",baseprofile:"baseProfile",bbox:"bbox",begin:"begin",bias:"bias",by:"by",calcmode:"calcMode",capheight:"capHeight","cap-height":"capHeight",clip:"clip",clippath:"clipPath","clip-path":"clipPath",clippathunits:"clipPathUnits",cliprule:"clipRule","clip-rule":"clipRule",color:"color",colorinterpolation:"colorInterpolation","color-interpolation":"colorInterpolation",colorinterpolationfilters:"colorInterpolationFilters","color-interpolation-filters":"colorInterpolationFilters",colorprofile:"colorProfile","color-profile":"colorProfile",colorrendering:"colorRendering","color-rendering":"colorRendering",contentscripttype:"contentScriptType",contentstyletype:"contentStyleType",cursor:"cursor",cx:"cx",cy:"cy",d:"d",datatype:"datatype",decelerate:"decelerate",descent:"descent",diffuseconstant:"diffuseConstant",direction:"direction",display:"display",divisor:"divisor",dominantbaseline:"dominantBaseline","dominant-baseline":"dominantBaseline",dur:"dur",dx:"dx",dy:"dy",edgemode:"edgeMode",elevation:"elevation",enablebackground:"enableBackground","enable-background":"enableBackground",end:"end",exponent:"exponent",externalresourcesrequired:"externalResourcesRequired",fill:"fill",fillopacity:"fillOpacity","fill-opacity":"fillOpacity",fillrule:"fillRule","fill-rule":"fillRule",filter:"filter",filterres:"filterRes",filterunits:"filterUnits",floodopacity:"floodOpacity","flood-opacity":"floodOpacity",floodcolor:"floodColor","flood-color":"floodColor",focusable:"focusable",fontfamily:"fontFamily","font-family":"fontFamily",fontsize:"fontSize","font-size":"fontSize",fontsizeadjust:"fontSizeAdjust","font-size-adjust":"fontSizeAdjust",fontstretch:"fontStretch","font-stretch":"fontStretch",fontstyle:"fontStyle","font-style":"fontStyle",fontvariant:"fontVariant","font-variant":"fontVariant",fontweight:"fontWeight","font-weight":"fontWeight",format:"format",from:"from",fx:"fx",fy:"fy",g1:"g1",g2:"g2",glyphname:"glyphName","glyph-name":"glyphName",glyphorientationhorizontal:"glyphOrientationHorizontal","glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphorientationvertical:"glyphOrientationVertical","glyph-orientation-vertical":"glyphOrientationVertical",glyphref:"glyphRef",gradienttransform:"gradientTransform",gradientunits:"gradientUnits",hanging:"hanging",horizadvx:"horizAdvX","horiz-adv-x":"horizAdvX",horizoriginx:"horizOriginX","horiz-origin-x":"horizOriginX",ideographic:"ideographic",imagerendering:"imageRendering","image-rendering":"imageRendering",in2:"in2",in:"in",inlist:"inlist",intercept:"intercept",k1:"k1",k2:"k2",k3:"k3",k4:"k4",k:"k",kernelmatrix:"kernelMatrix",kernelunitlength:"kernelUnitLength",kerning:"kerning",keypoints:"keyPoints",keysplines:"keySplines",keytimes:"keyTimes",lengthadjust:"lengthAdjust",letterspacing:"letterSpacing","letter-spacing":"letterSpacing",lightingcolor:"lightingColor","lighting-color":"lightingColor",limitingconeangle:"limitingConeAngle",local:"local",markerend:"markerEnd","marker-end":"markerEnd",markerheight:"markerHeight",markermid:"markerMid","marker-mid":"markerMid",markerstart:"markerStart","marker-start":"markerStart",markerunits:"markerUnits",markerwidth:"markerWidth",mask:"mask",maskcontentunits:"maskContentUnits",maskunits:"maskUnits",mathematical:"mathematical",mode:"mode",numoctaves:"numOctaves",offset:"offset",opacity:"opacity",operator:"operator",order:"order",orient:"orient",orientation:"orientation",origin:"origin",overflow:"overflow",overlineposition:"overlinePosition","overline-position":"overlinePosition",overlinethickness:"overlineThickness","overline-thickness":"overlineThickness",paintorder:"paintOrder","paint-order":"paintOrder",panose1:"panose1","panose-1":"panose1",pathlength:"pathLength",patterncontentunits:"patternContentUnits",patterntransform:"patternTransform",patternunits:"patternUnits",pointerevents:"pointerEvents","pointer-events":"pointerEvents",points:"points",pointsatx:"pointsAtX",pointsaty:"pointsAtY",pointsatz:"pointsAtZ",prefix:"prefix",preservealpha:"preserveAlpha",preserveaspectratio:"preserveAspectRatio",primitiveunits:"primitiveUnits",property:"property",r:"r",radius:"radius",refx:"refX",refy:"refY",renderingintent:"renderingIntent","rendering-intent":"renderingIntent",repeatcount:"repeatCount",repeatdur:"repeatDur",requiredextensions:"requiredExtensions",requiredfeatures:"requiredFeatures",resource:"resource",restart:"restart",result:"result",results:"results",rotate:"rotate",rx:"rx",ry:"ry",scale:"scale",security:"security",seed:"seed",shaperendering:"shapeRendering","shape-rendering":"shapeRendering",slope:"slope",spacing:"spacing",specularconstant:"specularConstant",specularexponent:"specularExponent",speed:"speed",spreadmethod:"spreadMethod",startoffset:"startOffset",stddeviation:"stdDeviation",stemh:"stemh",stemv:"stemv",stitchtiles:"stitchTiles",stopcolor:"stopColor","stop-color":"stopColor",stopopacity:"stopOpacity","stop-opacity":"stopOpacity",strikethroughposition:"strikethroughPosition","strikethrough-position":"strikethroughPosition",strikethroughthickness:"strikethroughThickness","strikethrough-thickness":"strikethroughThickness",string:"string",stroke:"stroke",strokedasharray:"strokeDasharray","stroke-dasharray":"strokeDasharray",strokedashoffset:"strokeDashoffset","stroke-dashoffset":"strokeDashoffset",strokelinecap:"strokeLinecap","stroke-linecap":"strokeLinecap",strokelinejoin:"strokeLinejoin","stroke-linejoin":"strokeLinejoin",strokemiterlimit:"strokeMiterlimit","stroke-miterlimit":"strokeMiterlimit",strokewidth:"strokeWidth","stroke-width":"strokeWidth",strokeopacity:"strokeOpacity","stroke-opacity":"strokeOpacity",suppresscontenteditablewarning:"suppressContentEditableWarning",suppresshydrationwarning:"suppressHydrationWarning",surfacescale:"surfaceScale",systemlanguage:"systemLanguage",tablevalues:"tableValues",targetx:"targetX",targety:"targetY",textanchor:"textAnchor","text-anchor":"textAnchor",textdecoration:"textDecoration","text-decoration":"textDecoration",textlength:"textLength",textrendering:"textRendering","text-rendering":"textRendering",to:"to",transform:"transform",typeof:"typeof",u1:"u1",u2:"u2",underlineposition:"underlinePosition","underline-position":"underlinePosition",underlinethickness:"underlineThickness","underline-thickness":"underlineThickness",unicode:"unicode",unicodebidi:"unicodeBidi","unicode-bidi":"unicodeBidi",unicoderange:"unicodeRange","unicode-range":"unicodeRange",unitsperem:"unitsPerEm","units-per-em":"unitsPerEm",unselectable:"unselectable",valphabetic:"vAlphabetic","v-alphabetic":"vAlphabetic",values:"values",vectoreffect:"vectorEffect","vector-effect":"vectorEffect",version:"version",vertadvy:"vertAdvY","vert-adv-y":"vertAdvY",vertoriginx:"vertOriginX","vert-origin-x":"vertOriginX",vertoriginy:"vertOriginY","vert-origin-y":"vertOriginY",vhanging:"vHanging","v-hanging":"vHanging",videographic:"vIdeographic","v-ideographic":"vIdeographic",viewbox:"viewBox",viewtarget:"viewTarget",visibility:"visibility",vmathematical:"vMathematical","v-mathematical":"vMathematical",vocab:"vocab",widths:"widths",wordspacing:"wordSpacing","word-spacing":"wordSpacing",writingmode:"writingMode","writing-mode":"writingMode",x1:"x1",x2:"x2",x:"x",xchannelselector:"xChannelSelector",xheight:"xHeight","x-height":"xHeight",xlinkactuate:"xlinkActuate","xlink:actuate":"xlinkActuate",xlinkarcrole:"xlinkArcrole","xlink:arcrole":"xlinkArcrole",xlinkhref:"xlinkHref","xlink:href":"xlinkHref",xlinkrole:"xlinkRole","xlink:role":"xlinkRole",xlinkshow:"xlinkShow","xlink:show":"xlinkShow",xlinktitle:"xlinkTitle","xlink:title":"xlinkTitle",xlinktype:"xlinkType","xlink:type":"xlinkType",xmlbase:"xmlBase","xml:base":"xmlBase",xmllang:"xmlLang","xml:lang":"xmlLang",xmlns:"xmlns","xml:space":"xmlSpace",xmlnsxlink:"xmlnsXlink","xmlns:xlink":"xmlnsXlink",xmlspace:"xmlSpace",y1:"y1",y2:"y2",y:"y",ychannelselector:"yChannelSelector",z:"z",zoomandpan:"zoomAndPan"},jy={"aria-current":0,"aria-description":0,"aria-details":0,"aria-disabled":0,"aria-hidden":0,"aria-invalid":0,"aria-keyshortcuts":0,"aria-label":0,"aria-roledescription":0,"aria-autocomplete":0,"aria-checked":0,"aria-expanded":0,"aria-haspopup":0,"aria-level":0,"aria-modal":0,"aria-multiline":0,"aria-multiselectable":0,"aria-orientation":0,"aria-placeholder":0,"aria-pressed":0,"aria-readonly":0,"aria-required":0,"aria-selected":0,"aria-sort":0,"aria-valuemax":0,"aria-valuemin":0,"aria-valuenow":0,"aria-valuetext":0,"aria-atomic":0,"aria-busy":0,"aria-live":0,"aria-relevant":0,"aria-dropeffect":0,"aria-grabbed":0,"aria-activedescendant":0,"aria-colcount":0,"aria-colindex":0,"aria-colspan":0,"aria-controls":0,"aria-describedby":0,"aria-errormessage":0,"aria-flowto":0,"aria-labelledby":0,"aria-owns":0,"aria-posinset":0,"aria-rowcount":0,"aria-rowindex":0,"aria-rowspan":0,"aria-setsize":0},Os={},sR=new RegExp("^(aria)-["+xe+"]*$"),lR=new RegExp("^(aria)[A-Z]["+xe+"]*$");function uR(e,t){{if(xt.call(Os,t)&&Os[t])return!0;if(lR.test(t)){var r="aria-"+t.slice(4).toLowerCase(),a=jy.hasOwnProperty(r)?r:null;if(a==null)return d("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",t),Os[t]=!0,!0;if(t!==a)return d("Invalid ARIA attribute `%s`. Did you mean `%s`?",t,a),Os[t]=!0,!0}if(sR.test(t)){var l=t.toLowerCase(),c=jy.hasOwnProperty(l)?l:null;if(c==null)return Os[t]=!0,!1;if(t!==c)return d("Unknown ARIA attribute `%s`. Did you mean `%s`?",t,c),Os[t]=!0,!0}}return!0}function cR(e,t){{var r=[];for(var a in t){var l=uR(e,a);l||r.push(a)}var c=r.map(function(h){return"`"+h+"`"}).join(", ");r.length===1?d("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props",c,e):r.length>1&&d("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props",c,e)}}function fR(e,t){Io(e,t)||cR(e,t)}var Yy=!1;function dR(e,t){{if(e!=="input"&&e!=="textarea"&&e!=="select")return;t!=null&&t.value===null&&!Yy&&(Yy=!0,e==="select"&&t.multiple?d("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",e):d("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",e))}}var qy=function(){};{var zi={},$y=/^on./,hR=/^on[^A-Z]/,pR=new RegExp("^(aria)-["+xe+"]*$"),mR=new RegExp("^(aria)[A-Z]["+xe+"]*$");qy=function(e,t,r,a){if(xt.call(zi,t)&&zi[t])return!0;var l=t.toLowerCase();if(l==="onfocusin"||l==="onfocusout")return d("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."),zi[t]=!0,!0;if(a!=null){var c=a.registrationNameDependencies,h=a.possibleRegistrationNames;if(c.hasOwnProperty(t))return!0;var g=h.hasOwnProperty(l)?h[l]:null;if(g!=null)return d("Invalid event handler property `%s`. Did you mean `%s`?",t,g),zi[t]=!0,!0;if($y.test(t))return d("Unknown event handler property `%s`. It will be ignored.",t),zi[t]=!0,!0}else if($y.test(t))return hR.test(t)&&d("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",t),zi[t]=!0,!0;if(pR.test(t)||mR.test(t))return!0;if(l==="innerhtml")return d("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."),zi[t]=!0,!0;if(l==="aria")return d("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."),zi[t]=!0,!0;if(l==="is"&&r!==null&&r!==void 0&&typeof r!="string")return d("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",typeof r),zi[t]=!0,!0;if(typeof r=="number"&&isNaN(r))return d("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",t),zi[t]=!0,!0;var E=Ct(t),w=E!==null&&E.type===R;if(vf.hasOwnProperty(l)){var U=vf[l];if(U!==t)return d("Invalid DOM property `%s`. Did you mean `%s`?",t,U),zi[t]=!0,!0}else if(!w&&t!==l)return d("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",t,l),zi[t]=!0,!0;return typeof r=="boolean"&&ct(t,r,E,!1)?(r?d('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',r,t,t,r,t):d('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',r,t,t,r,t,t,t),zi[t]=!0,!0):w?!0:ct(t,r,E,!1)?(zi[t]=!0,!1):((r==="false"||r==="true")&&E!==null&&E.type===ue&&(d("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",r,t,r==="false"?"The browser will interpret it as a truthy value.":'Although this works, it will not work as expected if you pass the string "false".',t,r),zi[t]=!0),!0)}}var vR=function(e,t,r){{var a=[];for(var l in t){var c=qy(e,l,t[l],r);c||a.push(l)}var h=a.map(function(g){return"`"+g+"`"}).join(", ");a.length===1?d("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ",h,e):a.length>1&&d("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ",h,e)}};function gR(e,t,r){Io(e,t)||vR(e,t,r)}var Ky=1,lp=2,mu=4,_R=Ky|lp|mu,vu=null;function yR(e){vu!==null&&d("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."),vu=e}function SR(){vu===null&&d("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."),vu=null}function xR(e){return e===vu}function up(e){var t=e.target||e.srcElement||window;return t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===_a?t.parentNode:t}var cp=null,Fs=null,Is=null;function Zy(e){var t=ao(e);if(t){if(typeof cp!="function")throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");var r=t.stateNode;if(r){var a=Qf(r);cp(t.stateNode,t.type,a)}}}function ER(e){cp=e}function Qy(e){Fs?Is?Is.push(e):Is=[e]:Fs=e}function bR(){return Fs!==null||Is!==null}function Jy(){if(Fs){var e=Fs,t=Is;if(Fs=null,Is=null,Zy(e),t)for(var r=0;r<t.length;r++)Zy(t[r])}}var eS=function(e,t){return e(t)},tS=function(){},fp=!1;function MR(){var e=bR();e&&(tS(),Jy())}function nS(e,t,r){if(fp)return e(t,r);fp=!0;try{return eS(e,t,r)}finally{fp=!1,MR()}}function TR(e,t,r){eS=e,tS=r}function RR(e){return e==="button"||e==="input"||e==="select"||e==="textarea"}function CR(e,t,r){switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":return!!(r.disabled&&RR(t));default:return!1}}function gu(e,t){var r=e.stateNode;if(r===null)return null;var a=Qf(r);if(a===null)return null;var l=a[t];if(CR(t,e.type,a))return null;if(l&&typeof l!="function")throw new Error("Expected `"+t+"` listener to be a function, instead got a value of `"+typeof l+"` type.");return l}var dp=!1;if(zt)try{var _u={};Object.defineProperty(_u,"passive",{get:function(){dp=!0}}),window.addEventListener("test",_u,_u),window.removeEventListener("test",_u,_u)}catch{dp=!1}function iS(e,t,r,a,l,c,h,g,E){var w=Array.prototype.slice.call(arguments,3);try{t.apply(r,w)}catch(U){this.onError(U)}}var rS=iS;if(typeof window<"u"&&typeof window.dispatchEvent=="function"&&typeof document<"u"&&typeof document.createEvent=="function"){var hp=document.createElement("react");rS=function(t,r,a,l,c,h,g,E,w){if(typeof document>"u"||document===null)throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");var U=document.createEvent("Event"),j=!1,W=!0,re=window.event,oe=Object.getOwnPropertyDescriptor(window,"event");function ge(){hp.removeEventListener(_e,yt,!1),typeof window.event<"u"&&window.hasOwnProperty("event")&&(window.event=re)}var Ye=Array.prototype.slice.call(arguments,3);function yt(){j=!0,ge(),r.apply(a,Ye),W=!1}var ht,Qt=!1,jt=!1;function J(ee){if(ht=ee.error,Qt=!0,ht===null&&ee.colno===0&&ee.lineno===0&&(jt=!0),ee.defaultPrevented&&ht!=null&&typeof ht=="object")try{ht._suppressLogging=!0}catch{}}var _e="react-"+(t||"invokeguardedcallback");if(window.addEventListener("error",J),hp.addEventListener(_e,yt,!1),U.initEvent(_e,!1,!1),hp.dispatchEvent(U),oe&&Object.defineProperty(window,"event",oe),j&&W&&(Qt?jt&&(ht=new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")):ht=new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`),this.onError(ht)),window.removeEventListener("error",J),!j)return ge(),iS.apply(this,arguments)}}var AR=rS,zs=!1,gf=null,_f=!1,pp=null,wR={onError:function(e){zs=!0,gf=e}};function mp(e,t,r,a,l,c,h,g,E){zs=!1,gf=null,AR.apply(wR,arguments)}function DR(e,t,r,a,l,c,h,g,E){if(mp.apply(this,arguments),zs){var w=vp();_f||(_f=!0,pp=w)}}function LR(){if(_f){var e=pp;throw _f=!1,pp=null,e}}function UR(){return zs}function vp(){if(zs){var e=gf;return zs=!1,gf=null,e}else throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.")}function Bs(e){return e._reactInternals}function NR(e){return e._reactInternals!==void 0}function PR(e,t){e._reactInternals=t}var bt=0,ks=1,Xn=2,sn=4,zo=16,yu=32,aS=64,ln=128,Sa=256,Bo=512,Hs=1024,Za=2048,xa=4096,ko=8192,gp=16384,OR=32767,yf=32768,Bi=65536,_p=131072,oS=1048576,yp=2097152,Ho=4194304,Sp=8388608,Qa=16777216,xp=33554432,Ep=sn|Hs|0,bp=Xn|sn|zo|yu|Bo|xa|ko,Su=sn|aS|Bo|ko,Vs=Za|zo,Ea=Ho|Sp|yp,FR=i.ReactCurrentOwner;function Vo(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{var a=t;do t=a,(t.flags&(Xn|xa))!==bt&&(r=t.return),a=t.return;while(a)}return t.tag===y?r:null}function sS(e){if(e.tag===$){var t=e.memoizedState;if(t===null){var r=e.alternate;r!==null&&(t=r.memoizedState)}if(t!==null)return t.dehydrated}return null}function lS(e){return e.tag===y?e.stateNode.containerInfo:null}function IR(e){return Vo(e)===e}function zR(e){{var t=FR.current;if(t!==null&&t.tag===v){var r=t,a=r.stateNode;a._warnedAboutRefsInRender||d("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.",Ot(r)||"A component"),a._warnedAboutRefsInRender=!0}}var l=Bs(e);return l?Vo(l)===l:!1}function uS(e){if(Vo(e)!==e)throw new Error("Unable to find node on an unmounted component.")}function cS(e){var t=e.alternate;if(!t){var r=Vo(e);if(r===null)throw new Error("Unable to find node on an unmounted component.");return r!==e?null:e}for(var a=e,l=t;;){var c=a.return;if(c===null)break;var h=c.alternate;if(h===null){var g=c.return;if(g!==null){a=l=g;continue}break}if(c.child===h.child){for(var E=c.child;E;){if(E===a)return uS(c),e;if(E===l)return uS(c),t;E=E.sibling}throw new Error("Unable to find node on an unmounted component.")}if(a.return!==l.return)a=c,l=h;else{for(var w=!1,U=c.child;U;){if(U===a){w=!0,a=c,l=h;break}if(U===l){w=!0,l=c,a=h;break}U=U.sibling}if(!w){for(U=h.child;U;){if(U===a){w=!0,a=h,l=c;break}if(U===l){w=!0,l=h,a=c;break}U=U.sibling}if(!w)throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.")}}if(a.alternate!==l)throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.")}if(a.tag!==y)throw new Error("Unable to find node on an unmounted component.");return a.stateNode.current===a?e:t}function fS(e){var t=cS(e);return t!==null?dS(t):null}function dS(e){if(e.tag===b||e.tag===C)return e;for(var t=e.child;t!==null;){var r=dS(t);if(r!==null)return r;t=t.sibling}return null}function BR(e){var t=cS(e);return t!==null?hS(t):null}function hS(e){if(e.tag===b||e.tag===C)return e;for(var t=e.child;t!==null;){if(t.tag!==x){var r=hS(t);if(r!==null)return r}t=t.sibling}return null}var pS=n.unstable_scheduleCallback,kR=n.unstable_cancelCallback,HR=n.unstable_shouldYield,VR=n.unstable_requestPaint,ui=n.unstable_now,GR=n.unstable_getCurrentPriorityLevel,Sf=n.unstable_ImmediatePriority,Mp=n.unstable_UserBlockingPriority,Go=n.unstable_NormalPriority,WR=n.unstable_LowPriority,Tp=n.unstable_IdlePriority,XR=n.unstable_yieldValue,jR=n.unstable_setDisableYieldValue,Gs=null,Ri=null,Ze=null,Zr=!1,Ur=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u";function YR(e){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u")return!1;var t=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(t.isDisabled)return!0;if(!t.supportsFiber)return d("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"),!0;try{Ht&&(e=Ae({},e,{getLaneLabelMap:JR,injectProfilingHooks:QR})),Gs=t.inject(e),Ri=t}catch(r){d("React instrumentation encountered an error: %s.",r)}return!!t.checkDCE}function qR(e,t){if(Ri&&typeof Ri.onScheduleFiberRoot=="function")try{Ri.onScheduleFiberRoot(Gs,e,t)}catch(r){Zr||(Zr=!0,d("React instrumentation encountered an error: %s",r))}}function $R(e,t){if(Ri&&typeof Ri.onCommitFiberRoot=="function")try{var r=(e.current.flags&ln)===ln;if(me){var a;switch(t){case ur:a=Sf;break;case Ma:a=Mp;break;case Ta:a=Go;break;case Cf:a=Tp;break;default:a=Go;break}Ri.onCommitFiberRoot(Gs,e,a,r)}}catch(l){Zr||(Zr=!0,d("React instrumentation encountered an error: %s",l))}}function KR(e){if(Ri&&typeof Ri.onPostCommitFiberRoot=="function")try{Ri.onPostCommitFiberRoot(Gs,e)}catch(t){Zr||(Zr=!0,d("React instrumentation encountered an error: %s",t))}}function ZR(e){if(Ri&&typeof Ri.onCommitFiberUnmount=="function")try{Ri.onCommitFiberUnmount(Gs,e)}catch(t){Zr||(Zr=!0,d("React instrumentation encountered an error: %s",t))}}function ci(e){if(typeof XR=="function"&&(jR(e),u(e)),Ri&&typeof Ri.setStrictMode=="function")try{Ri.setStrictMode(Gs,e)}catch(t){Zr||(Zr=!0,d("React instrumentation encountered an error: %s",t))}}function QR(e){Ze=e}function JR(){{for(var e=new Map,t=1,r=0;r<Cp;r++){var a=yC(t);e.set(t,a),t*=2}return e}}function eC(e){Ze!==null&&typeof Ze.markCommitStarted=="function"&&Ze.markCommitStarted(e)}function mS(){Ze!==null&&typeof Ze.markCommitStopped=="function"&&Ze.markCommitStopped()}function xu(e){Ze!==null&&typeof Ze.markComponentRenderStarted=="function"&&Ze.markComponentRenderStarted(e)}function Ws(){Ze!==null&&typeof Ze.markComponentRenderStopped=="function"&&Ze.markComponentRenderStopped()}function tC(e){Ze!==null&&typeof Ze.markComponentPassiveEffectMountStarted=="function"&&Ze.markComponentPassiveEffectMountStarted(e)}function nC(){Ze!==null&&typeof Ze.markComponentPassiveEffectMountStopped=="function"&&Ze.markComponentPassiveEffectMountStopped()}function iC(e){Ze!==null&&typeof Ze.markComponentPassiveEffectUnmountStarted=="function"&&Ze.markComponentPassiveEffectUnmountStarted(e)}function rC(){Ze!==null&&typeof Ze.markComponentPassiveEffectUnmountStopped=="function"&&Ze.markComponentPassiveEffectUnmountStopped()}function aC(e){Ze!==null&&typeof Ze.markComponentLayoutEffectMountStarted=="function"&&Ze.markComponentLayoutEffectMountStarted(e)}function oC(){Ze!==null&&typeof Ze.markComponentLayoutEffectMountStopped=="function"&&Ze.markComponentLayoutEffectMountStopped()}function vS(e){Ze!==null&&typeof Ze.markComponentLayoutEffectUnmountStarted=="function"&&Ze.markComponentLayoutEffectUnmountStarted(e)}function gS(){Ze!==null&&typeof Ze.markComponentLayoutEffectUnmountStopped=="function"&&Ze.markComponentLayoutEffectUnmountStopped()}function sC(e,t,r){Ze!==null&&typeof Ze.markComponentErrored=="function"&&Ze.markComponentErrored(e,t,r)}function lC(e,t,r){Ze!==null&&typeof Ze.markComponentSuspended=="function"&&Ze.markComponentSuspended(e,t,r)}function uC(e){Ze!==null&&typeof Ze.markLayoutEffectsStarted=="function"&&Ze.markLayoutEffectsStarted(e)}function cC(){Ze!==null&&typeof Ze.markLayoutEffectsStopped=="function"&&Ze.markLayoutEffectsStopped()}function fC(e){Ze!==null&&typeof Ze.markPassiveEffectsStarted=="function"&&Ze.markPassiveEffectsStarted(e)}function dC(){Ze!==null&&typeof Ze.markPassiveEffectsStopped=="function"&&Ze.markPassiveEffectsStopped()}function _S(e){Ze!==null&&typeof Ze.markRenderStarted=="function"&&Ze.markRenderStarted(e)}function hC(){Ze!==null&&typeof Ze.markRenderYielded=="function"&&Ze.markRenderYielded()}function yS(){Ze!==null&&typeof Ze.markRenderStopped=="function"&&Ze.markRenderStopped()}function pC(e){Ze!==null&&typeof Ze.markRenderScheduled=="function"&&Ze.markRenderScheduled(e)}function mC(e,t){Ze!==null&&typeof Ze.markForceUpdateScheduled=="function"&&Ze.markForceUpdateScheduled(e,t)}function Rp(e,t){Ze!==null&&typeof Ze.markStateUpdateScheduled=="function"&&Ze.markStateUpdateScheduled(e,t)}var St=0,Kt=1,_n=2,Nn=8,Qr=16,SS=Math.clz32?Math.clz32:_C,vC=Math.log,gC=Math.LN2;function _C(e){var t=e>>>0;return t===0?32:31-(vC(t)/gC|0)|0}var Cp=31,Re=0,fi=0,wt=1,Xs=2,ba=4,Wo=8,Jr=16,Eu=32,js=4194240,bu=64,Ap=128,wp=256,Dp=512,Lp=1024,Up=2048,Np=4096,Pp=8192,Op=16384,Fp=32768,Ip=65536,zp=131072,Bp=262144,kp=524288,Hp=1048576,Vp=2097152,xf=130023424,Ys=4194304,Gp=8388608,Wp=16777216,Xp=33554432,jp=67108864,xS=Ys,Mu=134217728,ES=268435455,Tu=268435456,Xo=536870912,sr=1073741824;function yC(e){{if(e&wt)return"Sync";if(e&Xs)return"InputContinuousHydration";if(e&ba)return"InputContinuous";if(e&Wo)return"DefaultHydration";if(e&Jr)return"Default";if(e&Eu)return"TransitionHydration";if(e&js)return"Transition";if(e&xf)return"Retry";if(e&Mu)return"SelectiveHydration";if(e&Tu)return"IdleHydration";if(e&Xo)return"Idle";if(e&sr)return"Offscreen"}}var Cn=-1,Ef=bu,bf=Ys;function Ru(e){switch(jo(e)){case wt:return wt;case Xs:return Xs;case ba:return ba;case Wo:return Wo;case Jr:return Jr;case Eu:return Eu;case bu:case Ap:case wp:case Dp:case Lp:case Up:case Np:case Pp:case Op:case Fp:case Ip:case zp:case Bp:case kp:case Hp:case Vp:return e&js;case Ys:case Gp:case Wp:case Xp:case jp:return e&xf;case Mu:return Mu;case Tu:return Tu;case Xo:return Xo;case sr:return sr;default:return d("Should have found matching lanes. This is a bug in React."),e}}function Mf(e,t){var r=e.pendingLanes;if(r===Re)return Re;var a=Re,l=e.suspendedLanes,c=e.pingedLanes,h=r&ES;if(h!==Re){var g=h&~l;if(g!==Re)a=Ru(g);else{var E=h&c;E!==Re&&(a=Ru(E))}}else{var w=r&~l;w!==Re?a=Ru(w):c!==Re&&(a=Ru(c))}if(a===Re)return Re;if(t!==Re&&t!==a&&(t&l)===Re){var U=jo(a),j=jo(t);if(U>=j||U===Jr&&(j&js)!==Re)return t}(a&ba)!==Re&&(a|=r&Jr);var W=e.entangledLanes;if(W!==Re)for(var re=e.entanglements,oe=a&W;oe>0;){var ge=Yo(oe),Ye=1<<ge;a|=re[ge],oe&=~Ye}return a}function SC(e,t){for(var r=e.eventTimes,a=Cn;t>0;){var l=Yo(t),c=1<<l,h=r[l];h>a&&(a=h),t&=~c}return a}function xC(e,t){switch(e){case wt:case Xs:case ba:return t+250;case Wo:case Jr:case Eu:case bu:case Ap:case wp:case Dp:case Lp:case Up:case Np:case Pp:case Op:case Fp:case Ip:case zp:case Bp:case kp:case Hp:case Vp:return t+5e3;case Ys:case Gp:case Wp:case Xp:case jp:return Cn;case Mu:case Tu:case Xo:case sr:return Cn;default:return d("Should have found matching lanes. This is a bug in React."),Cn}}function EC(e,t){for(var r=e.pendingLanes,a=e.suspendedLanes,l=e.pingedLanes,c=e.expirationTimes,h=r;h>0;){var g=Yo(h),E=1<<g,w=c[g];w===Cn?((E&a)===Re||(E&l)!==Re)&&(c[g]=xC(E,t)):w<=t&&(e.expiredLanes|=E),h&=~E}}function bC(e){return Ru(e.pendingLanes)}function Yp(e){var t=e.pendingLanes&~sr;return t!==Re?t:t&sr?sr:Re}function MC(e){return(e&wt)!==Re}function qp(e){return(e&ES)!==Re}function bS(e){return(e&xf)===e}function TC(e){var t=wt|ba|Jr;return(e&t)===Re}function RC(e){return(e&js)===e}function Tf(e,t){var r=Xs|ba|Wo|Jr;return(t&r)!==Re}function CC(e,t){return(t&e.expiredLanes)!==Re}function MS(e){return(e&js)!==Re}function TS(){var e=Ef;return Ef<<=1,(Ef&js)===Re&&(Ef=bu),e}function AC(){var e=bf;return bf<<=1,(bf&xf)===Re&&(bf=Ys),e}function jo(e){return e&-e}function Cu(e){return jo(e)}function Yo(e){return 31-SS(e)}function $p(e){return Yo(e)}function lr(e,t){return(e&t)!==Re}function qs(e,t){return(e&t)===t}function kt(e,t){return e|t}function Rf(e,t){return e&~t}function RS(e,t){return e&t}function kB(e){return e}function wC(e,t){return e!==fi&&e<t?e:t}function Kp(e){for(var t=[],r=0;r<Cp;r++)t.push(e);return t}function Au(e,t,r){e.pendingLanes|=t,t!==Xo&&(e.suspendedLanes=Re,e.pingedLanes=Re);var a=e.eventTimes,l=$p(t);a[l]=r}function DC(e,t){e.suspendedLanes|=t,e.pingedLanes&=~t;for(var r=e.expirationTimes,a=t;a>0;){var l=Yo(a),c=1<<l;r[l]=Cn,a&=~c}}function CS(e,t,r){e.pingedLanes|=e.suspendedLanes&t}function LC(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=Re,e.pingedLanes=Re,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t;for(var a=e.entanglements,l=e.eventTimes,c=e.expirationTimes,h=r;h>0;){var g=Yo(h),E=1<<g;a[g]=Re,l[g]=Cn,c[g]=Cn,h&=~E}}function Zp(e,t){for(var r=e.entangledLanes|=t,a=e.entanglements,l=r;l;){var c=Yo(l),h=1<<c;h&t|a[c]&t&&(a[c]|=t),l&=~h}}function UC(e,t){var r=jo(t),a;switch(r){case ba:a=Xs;break;case Jr:a=Wo;break;case bu:case Ap:case wp:case Dp:case Lp:case Up:case Np:case Pp:case Op:case Fp:case Ip:case zp:case Bp:case kp:case Hp:case Vp:case Ys:case Gp:case Wp:case Xp:case jp:a=Eu;break;case Xo:a=Tu;break;default:a=fi;break}return(a&(e.suspendedLanes|t))!==fi?fi:a}function AS(e,t,r){if(Ur)for(var a=e.pendingUpdatersLaneMap;r>0;){var l=$p(r),c=1<<l,h=a[l];h.add(t),r&=~c}}function wS(e,t){if(Ur)for(var r=e.pendingUpdatersLaneMap,a=e.memoizedUpdaters;t>0;){var l=$p(t),c=1<<l,h=r[l];h.size>0&&(h.forEach(function(g){var E=g.alternate;(E===null||!a.has(E))&&a.add(g)}),h.clear()),t&=~c}}function DS(e,t){return null}var ur=wt,Ma=ba,Ta=Jr,Cf=Xo,wu=fi;function Nr(){return wu}function di(e){wu=e}function NC(e,t){var r=wu;try{return wu=e,t()}finally{wu=r}}function PC(e,t){return e!==0&&e<t?e:t}function OC(e,t){return e>t?e:t}function Qp(e,t){return e!==0&&e<t}function LS(e){var t=jo(e);return Qp(ur,t)?Qp(Ma,t)?qp(t)?Ta:Cf:Ma:ur}function Af(e){var t=e.current.memoizedState;return t.isDehydrated}var US;function FC(e){US=e}function IC(e){US(e)}var Jp;function zC(e){Jp=e}var NS;function BC(e){NS=e}var PS;function kC(e){PS=e}var OS;function HC(e){OS=e}var em=!1,wf=[],Ja=null,eo=null,to=null,Du=new Map,Lu=new Map,no=[],VC=["mousedown","mouseup","touchcancel","touchend","touchstart","auxclick","dblclick","pointercancel","pointerdown","pointerup","dragend","dragstart","drop","compositionend","compositionstart","keydown","keypress","keyup","input","textInput","copy","cut","paste","click","change","contextmenu","reset","submit"];function GC(e){return VC.indexOf(e)>-1}function WC(e,t,r,a,l){return{blockedOn:e,domEventName:t,eventSystemFlags:r,nativeEvent:l,targetContainers:[a]}}function FS(e,t){switch(e){case"focusin":case"focusout":Ja=null;break;case"dragenter":case"dragleave":eo=null;break;case"mouseover":case"mouseout":to=null;break;case"pointerover":case"pointerout":{var r=t.pointerId;Du.delete(r);break}case"gotpointercapture":case"lostpointercapture":{var a=t.pointerId;Lu.delete(a);break}}}function Uu(e,t,r,a,l,c){if(e===null||e.nativeEvent!==c){var h=WC(t,r,a,l,c);if(t!==null){var g=ao(t);g!==null&&Jp(g)}return h}e.eventSystemFlags|=a;var E=e.targetContainers;return l!==null&&E.indexOf(l)===-1&&E.push(l),e}function XC(e,t,r,a,l){switch(t){case"focusin":{var c=l;return Ja=Uu(Ja,e,t,r,a,c),!0}case"dragenter":{var h=l;return eo=Uu(eo,e,t,r,a,h),!0}case"mouseover":{var g=l;return to=Uu(to,e,t,r,a,g),!0}case"pointerover":{var E=l,w=E.pointerId;return Du.set(w,Uu(Du.get(w)||null,e,t,r,a,E)),!0}case"gotpointercapture":{var U=l,j=U.pointerId;return Lu.set(j,Uu(Lu.get(j)||null,e,t,r,a,U)),!0}}return!1}function IS(e){var t=Ko(e.target);if(t!==null){var r=Vo(t);if(r!==null){var a=r.tag;if(a===$){var l=sS(r);if(l!==null){e.blockedOn=l,OS(e.priority,function(){NS(r)});return}}else if(a===y){var c=r.stateNode;if(Af(c)){e.blockedOn=lS(r);return}}}}e.blockedOn=null}function jC(e){for(var t=PS(),r={blockedOn:null,target:e,priority:t},a=0;a<no.length&&Qp(t,no[a].priority);a++);no.splice(a,0,r),a===0&&IS(r)}function Df(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;t.length>0;){var r=t[0],a=im(e.domEventName,e.eventSystemFlags,r,e.nativeEvent);if(a===null){var l=e.nativeEvent,c=new l.constructor(l.type,l);yR(c),l.target.dispatchEvent(c),SR()}else{var h=ao(a);return h!==null&&Jp(h),e.blockedOn=a,!1}t.shift()}return!0}function zS(e,t,r){Df(e)&&r.delete(t)}function YC(){em=!1,Ja!==null&&Df(Ja)&&(Ja=null),eo!==null&&Df(eo)&&(eo=null),to!==null&&Df(to)&&(to=null),Du.forEach(zS),Lu.forEach(zS)}function Nu(e,t){e.blockedOn===t&&(e.blockedOn=null,em||(em=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,YC)))}function Pu(e){if(wf.length>0){Nu(wf[0],e);for(var t=1;t<wf.length;t++){var r=wf[t];r.blockedOn===e&&(r.blockedOn=null)}}Ja!==null&&Nu(Ja,e),eo!==null&&Nu(eo,e),to!==null&&Nu(to,e);var a=function(g){return Nu(g,e)};Du.forEach(a),Lu.forEach(a);for(var l=0;l<no.length;l++){var c=no[l];c.blockedOn===e&&(c.blockedOn=null)}for(;no.length>0;){var h=no[0];if(h.blockedOn!==null)break;IS(h),h.blockedOn===null&&no.shift()}}var $s=i.ReactCurrentBatchConfig,tm=!0;function BS(e){tm=!!e}function qC(){return tm}function $C(e,t,r){var a=kS(t),l;switch(a){case ur:l=KC;break;case Ma:l=ZC;break;case Ta:default:l=nm;break}return l.bind(null,t,r,e)}function KC(e,t,r,a){var l=Nr(),c=$s.transition;$s.transition=null;try{di(ur),nm(e,t,r,a)}finally{di(l),$s.transition=c}}function ZC(e,t,r,a){var l=Nr(),c=$s.transition;$s.transition=null;try{di(Ma),nm(e,t,r,a)}finally{di(l),$s.transition=c}}function nm(e,t,r,a){tm&&QC(e,t,r,a)}function QC(e,t,r,a){var l=im(e,t,r,a);if(l===null){gm(e,t,a,Lf,r),FS(e,a);return}if(XC(l,e,t,r,a)){a.stopPropagation();return}if(FS(e,a),t&mu&&GC(e)){for(;l!==null;){var c=ao(l);c!==null&&IC(c);var h=im(e,t,r,a);if(h===null&&gm(e,t,a,Lf,r),h===l)break;l=h}l!==null&&a.stopPropagation();return}gm(e,t,a,null,r)}var Lf=null;function im(e,t,r,a){Lf=null;var l=up(a),c=Ko(l);if(c!==null){var h=Vo(c);if(h===null)c=null;else{var g=h.tag;if(g===$){var E=sS(h);if(E!==null)return E;c=null}else if(g===y){var w=h.stateNode;if(Af(w))return lS(h);c=null}else h!==c&&(c=null)}}return Lf=c,null}function kS(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return ur;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return Ma;case"message":{var t=GR();switch(t){case Sf:return ur;case Mp:return Ma;case Go:case WR:return Ta;case Tp:return Cf;default:return Ta}}default:return Ta}}function JC(e,t,r){return e.addEventListener(t,r,!1),r}function eA(e,t,r){return e.addEventListener(t,r,!0),r}function tA(e,t,r,a){return e.addEventListener(t,r,{capture:!0,passive:a}),r}function nA(e,t,r,a){return e.addEventListener(t,r,{passive:a}),r}var Ou=null,rm=null,Fu=null;function iA(e){return Ou=e,rm=VS(),!0}function rA(){Ou=null,rm=null,Fu=null}function HS(){if(Fu)return Fu;var e,t=rm,r=t.length,a,l=VS(),c=l.length;for(e=0;e<r&&t[e]===l[e];e++);var h=r-e;for(a=1;a<=h&&t[r-a]===l[c-a];a++);var g=a>1?1-a:void 0;return Fu=l.slice(e,g),Fu}function VS(){return"value"in Ou?Ou.value:Ou.textContent}function Uf(e){var t,r=e.keyCode;return"charCode"in e?(t=e.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),t>=32||t===13?t:0}function Nf(){return!0}function GS(){return!1}function cr(e){function t(r,a,l,c,h){this._reactName=r,this._targetInst=l,this.type=a,this.nativeEvent=c,this.target=h,this.currentTarget=null;for(var g in e)if(e.hasOwnProperty(g)){var E=e[g];E?this[g]=E(c):this[g]=c[g]}var w=c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1;return w?this.isDefaultPrevented=Nf:this.isDefaultPrevented=GS,this.isPropagationStopped=GS,this}return Ae(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Nf)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Nf)},persist:function(){},isPersistent:Nf}),t}var Ks={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},am=cr(Ks),Iu=Ae({},Ks,{view:0,detail:0}),aA=cr(Iu),om,sm,zu;function oA(e){e!==zu&&(zu&&e.type==="mousemove"?(om=e.screenX-zu.screenX,sm=e.screenY-zu.screenY):(om=0,sm=0),zu=e)}var Pf=Ae({},Iu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:um,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(oA(e),om)},movementY:function(e){return"movementY"in e?e.movementY:sm}}),WS=cr(Pf),sA=Ae({},Pf,{dataTransfer:0}),lA=cr(sA),uA=Ae({},Iu,{relatedTarget:0}),lm=cr(uA),cA=Ae({},Ks,{animationName:0,elapsedTime:0,pseudoElement:0}),fA=cr(cA),dA=Ae({},Ks,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),hA=cr(dA),pA=Ae({},Ks,{data:0}),XS=cr(pA),mA=XS,vA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"};function _A(e){if(e.key){var t=vA[e.key]||e.key;if(t!=="Unidentified")return t}if(e.type==="keypress"){var r=Uf(e);return r===13?"Enter":String.fromCharCode(r)}return e.type==="keydown"||e.type==="keyup"?gA[e.keyCode]||"Unidentified":""}var yA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function SA(e){var t=this,r=t.nativeEvent;if(r.getModifierState)return r.getModifierState(e);var a=yA[e];return a?!!r[a]:!1}function um(e){return SA}var xA=Ae({},Iu,{key:_A,code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:um,charCode:function(e){return e.type==="keypress"?Uf(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Uf(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),EA=cr(xA),bA=Ae({},Pf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jS=cr(bA),MA=Ae({},Iu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:um}),TA=cr(MA),RA=Ae({},Ks,{propertyName:0,elapsedTime:0,pseudoElement:0}),CA=cr(RA),AA=Ae({},Pf,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wA=cr(AA),DA=[9,13,27,32],YS=229,cm=zt&&"CompositionEvent"in window,Bu=null;zt&&"documentMode"in document&&(Bu=document.documentMode);var LA=zt&&"TextEvent"in window&&!Bu,qS=zt&&(!cm||Bu&&Bu>8&&Bu<=11),$S=32,KS=String.fromCharCode($S);function UA(){st("onBeforeInput",["compositionend","keypress","textInput","paste"]),st("onCompositionEnd",["compositionend","focusout","keydown","keypress","keyup","mousedown"]),st("onCompositionStart",["compositionstart","focusout","keydown","keypress","keyup","mousedown"]),st("onCompositionUpdate",["compositionupdate","focusout","keydown","keypress","keyup","mousedown"])}var ZS=!1;function NA(e){return(e.ctrlKey||e.altKey||e.metaKey)&&!(e.ctrlKey&&e.altKey)}function PA(e){switch(e){case"compositionstart":return"onCompositionStart";case"compositionend":return"onCompositionEnd";case"compositionupdate":return"onCompositionUpdate"}}function OA(e,t){return e==="keydown"&&t.keyCode===YS}function QS(e,t){switch(e){case"keyup":return DA.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==YS;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function JS(e){var t=e.detail;return typeof t=="object"&&"data"in t?t.data:null}function ex(e){return e.locale==="ko"}var Zs=!1;function FA(e,t,r,a,l){var c,h;if(cm?c=PA(t):Zs?QS(t,a)&&(c="onCompositionEnd"):OA(t,a)&&(c="onCompositionStart"),!c)return null;qS&&!ex(a)&&(!Zs&&c==="onCompositionStart"?Zs=iA(l):c==="onCompositionEnd"&&Zs&&(h=HS()));var g=Bf(r,c);if(g.length>0){var E=new XS(c,t,null,a,l);if(e.push({event:E,listeners:g}),h)E.data=h;else{var w=JS(a);w!==null&&(E.data=w)}}}function IA(e,t){switch(e){case"compositionend":return JS(t);case"keypress":var r=t.which;return r!==$S?null:(ZS=!0,KS);case"textInput":var a=t.data;return a===KS&&ZS?null:a;default:return null}}function zA(e,t){if(Zs){if(e==="compositionend"||!cm&&QS(e,t)){var r=HS();return rA(),Zs=!1,r}return null}switch(e){case"paste":return null;case"keypress":if(!NA(t)){if(t.char&&t.char.length>1)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return qS&&!ex(t)?null:t.data;default:return null}}function BA(e,t,r,a,l){var c;if(LA?c=IA(t,a):c=zA(t,a),!c)return null;var h=Bf(r,"onBeforeInput");if(h.length>0){var g=new mA("onBeforeInput","beforeinput",null,a,l);e.push({event:g,listeners:h}),g.data=c}}function kA(e,t,r,a,l,c,h){FA(e,t,r,a,l),BA(e,t,r,a,l)}var HA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tx(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!HA[e.type]:t==="textarea"}/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */function VA(e){if(!zt)return!1;var t="on"+e,r=t in document;if(!r){var a=document.createElement("div");a.setAttribute(t,"return;"),r=typeof a[t]=="function"}return r}function GA(){st("onChange",["change","click","focusin","focusout","input","keydown","keyup","selectionchange"])}function nx(e,t,r,a){Qy(a);var l=Bf(t,"onChange");if(l.length>0){var c=new am("onChange","change",null,r,a);e.push({event:c,listeners:l})}}var ku=null,Hu=null;function WA(e){var t=e.nodeName&&e.nodeName.toLowerCase();return t==="select"||t==="input"&&e.type==="file"}function XA(e){var t=[];nx(t,Hu,e,up(e)),nS(jA,t)}function jA(e){Sx(e,0)}function Of(e){var t=il(e);if(uu(t))return e}function YA(e,t){if(e==="change")return t}var ix=!1;zt&&(ix=VA("input")&&(!document.documentMode||document.documentMode>9));function qA(e,t){ku=e,Hu=t,ku.attachEvent("onpropertychange",ax)}function rx(){ku&&(ku.detachEvent("onpropertychange",ax),ku=null,Hu=null)}function ax(e){e.propertyName==="value"&&Of(Hu)&&XA(e)}function $A(e,t,r){e==="focusin"?(rx(),qA(t,r)):e==="focusout"&&rx()}function KA(e,t){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Of(Hu)}function ZA(e){var t=e.nodeName;return t&&t.toLowerCase()==="input"&&(e.type==="checkbox"||e.type==="radio")}function QA(e,t){if(e==="click")return Of(t)}function JA(e,t){if(e==="input"||e==="change")return Of(t)}function ew(e){var t=e._wrapperState;!t||!t.controlled||e.type!=="number"||Et(e,"number",e.value)}function tw(e,t,r,a,l,c,h){var g=r?il(r):window,E,w;if(WA(g)?E=YA:tx(g)?ix?E=JA:(E=KA,w=$A):ZA(g)&&(E=QA),E){var U=E(t,r);if(U){nx(e,U,a,l);return}}w&&w(t,g,r),t==="focusout"&&ew(g)}function nw(){vt("onMouseEnter",["mouseout","mouseover"]),vt("onMouseLeave",["mouseout","mouseover"]),vt("onPointerEnter",["pointerout","pointerover"]),vt("onPointerLeave",["pointerout","pointerover"])}function iw(e,t,r,a,l,c,h){var g=t==="mouseover"||t==="pointerover",E=t==="mouseout"||t==="pointerout";if(g&&!xR(a)){var w=a.relatedTarget||a.fromElement;if(w&&(Ko(w)||nc(w)))return}if(!(!E&&!g)){var U;if(l.window===l)U=l;else{var j=l.ownerDocument;j?U=j.defaultView||j.parentWindow:U=window}var W,re;if(E){var oe=a.relatedTarget||a.toElement;if(W=r,re=oe?Ko(oe):null,re!==null){var ge=Vo(re);(re!==ge||re.tag!==b&&re.tag!==C)&&(re=null)}}else W=null,re=r;if(W!==re){var Ye=WS,yt="onMouseLeave",ht="onMouseEnter",Qt="mouse";(t==="pointerout"||t==="pointerover")&&(Ye=jS,yt="onPointerLeave",ht="onPointerEnter",Qt="pointer");var jt=W==null?U:il(W),J=re==null?U:il(re),_e=new Ye(yt,Qt+"leave",W,a,l);_e.target=jt,_e.relatedTarget=J;var ee=null,we=Ko(l);if(we===r){var et=new Ye(ht,Qt+"enter",re,a,l);et.target=J,et.relatedTarget=jt,ee=et}Cw(e,_e,ee,W,re)}}}function rw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var fr=typeof Object.is=="function"?Object.is:rw;function Vu(e,t){if(fr(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),a=Object.keys(t);if(r.length!==a.length)return!1;for(var l=0;l<r.length;l++){var c=r[l];if(!xt.call(t,c)||!fr(e[c],t[c]))return!1}return!0}function ox(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function aw(e){for(;e;){if(e.nextSibling)return e.nextSibling;e=e.parentNode}}function sx(e,t){for(var r=ox(e),a=0,l=0;r;){if(r.nodeType===_a){if(l=a+r.textContent.length,a<=t&&l>=t)return{node:r,offset:t-a};a=l}r=ox(aw(r))}}function ow(e){var t=e.ownerDocument,r=t&&t.defaultView||window,a=r.getSelection&&r.getSelection();if(!a||a.rangeCount===0)return null;var l=a.anchorNode,c=a.anchorOffset,h=a.focusNode,g=a.focusOffset;try{l.nodeType,h.nodeType}catch{return null}return sw(e,l,c,h,g)}function sw(e,t,r,a,l){var c=0,h=-1,g=-1,E=0,w=0,U=e,j=null;e:for(;;){for(var W=null;U===t&&(r===0||U.nodeType===_a)&&(h=c+r),U===a&&(l===0||U.nodeType===_a)&&(g=c+l),U.nodeType===_a&&(c+=U.nodeValue.length),(W=U.firstChild)!==null;)j=U,U=W;for(;;){if(U===e)break e;if(j===t&&++E===r&&(h=c),j===a&&++w===l&&(g=c),(W=U.nextSibling)!==null)break;U=j,j=U.parentNode}U=W}return h===-1||g===-1?null:{start:h,end:g}}function lw(e,t){var r=e.ownerDocument||document,a=r&&r.defaultView||window;if(a.getSelection){var l=a.getSelection(),c=e.textContent.length,h=Math.min(t.start,c),g=t.end===void 0?h:Math.min(t.end,c);if(!l.extend&&h>g){var E=g;g=h,h=E}var w=sx(e,h),U=sx(e,g);if(w&&U){if(l.rangeCount===1&&l.anchorNode===w.node&&l.anchorOffset===w.offset&&l.focusNode===U.node&&l.focusOffset===U.offset)return;var j=r.createRange();j.setStart(w.node,w.offset),l.removeAllRanges(),h>g?(l.addRange(j),l.extend(U.node,U.offset)):(j.setEnd(U.node,U.offset),l.addRange(j))}}}function lx(e){return e&&e.nodeType===_a}function ux(e,t){return!e||!t?!1:e===t?!0:lx(e)?!1:lx(t)?ux(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1}function uw(e){return e&&e.ownerDocument&&ux(e.ownerDocument.documentElement,e)}function cw(e){try{return typeof e.contentWindow.location.href=="string"}catch{return!1}}function cx(){for(var e=window,t=ma();t instanceof e.HTMLIFrameElement;){if(cw(t))e=t.contentWindow;else return t;t=ma(e.document)}return t}function fm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function fw(){var e=cx();return{focusedElem:e,selectionRange:fm(e)?hw(e):null}}function dw(e){var t=cx(),r=e.focusedElem,a=e.selectionRange;if(t!==r&&uw(r)){a!==null&&fm(r)&&pw(r,a);for(var l=[],c=r;c=c.parentNode;)c.nodeType===Zi&&l.push({element:c,left:c.scrollLeft,top:c.scrollTop});typeof r.focus=="function"&&r.focus();for(var h=0;h<l.length;h++){var g=l[h];g.element.scrollLeft=g.left,g.element.scrollTop=g.top}}}function hw(e){var t;return"selectionStart"in e?t={start:e.selectionStart,end:e.selectionEnd}:t=ow(e),t||{start:0,end:0}}function pw(e,t){var r=t.start,a=t.end;a===void 0&&(a=r),"selectionStart"in e?(e.selectionStart=r,e.selectionEnd=Math.min(a,e.value.length)):lw(e,t)}var mw=zt&&"documentMode"in document&&document.documentMode<=11;function vw(){st("onSelect",["focusout","contextmenu","dragend","focusin","keydown","keyup","mousedown","mouseup","selectionchange"])}var Qs=null,dm=null,Gu=null,hm=!1;function gw(e){if("selectionStart"in e&&fm(e))return{start:e.selectionStart,end:e.selectionEnd};var t=e.ownerDocument&&e.ownerDocument.defaultView||window,r=t.getSelection();return{anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}}function _w(e){return e.window===e?e.document:e.nodeType===ya?e:e.ownerDocument}function fx(e,t,r){var a=_w(r);if(!(hm||Qs==null||Qs!==ma(a))){var l=gw(Qs);if(!Gu||!Vu(Gu,l)){Gu=l;var c=Bf(dm,"onSelect");if(c.length>0){var h=new am("onSelect","select",null,t,r);e.push({event:h,listeners:c}),h.target=Qs}}}}function yw(e,t,r,a,l,c,h){var g=r?il(r):window;switch(t){case"focusin":(tx(g)||g.contentEditable==="true")&&(Qs=g,dm=r,Gu=null);break;case"focusout":Qs=null,dm=null,Gu=null;break;case"mousedown":hm=!0;break;case"contextmenu":case"mouseup":case"dragend":hm=!1,fx(e,a,l);break;case"selectionchange":if(mw)break;case"keydown":case"keyup":fx(e,a,l)}}function Ff(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Js={animationend:Ff("Animation","AnimationEnd"),animationiteration:Ff("Animation","AnimationIteration"),animationstart:Ff("Animation","AnimationStart"),transitionend:Ff("Transition","TransitionEnd")},pm={},dx={};zt&&(dx=document.createElement("div").style,"AnimationEvent"in window||(delete Js.animationend.animation,delete Js.animationiteration.animation,delete Js.animationstart.animation),"TransitionEvent"in window||delete Js.transitionend.transition);function If(e){if(pm[e])return pm[e];if(!Js[e])return e;var t=Js[e];for(var r in t)if(t.hasOwnProperty(r)&&r in dx)return pm[e]=t[r];return e}var hx=If("animationend"),px=If("animationiteration"),mx=If("animationstart"),vx=If("transitionend"),gx=new Map,_x=["abort","auxClick","cancel","canPlay","canPlayThrough","click","close","contextMenu","copy","cut","drag","dragEnd","dragEnter","dragExit","dragLeave","dragOver","dragStart","drop","durationChange","emptied","encrypted","ended","error","gotPointerCapture","input","invalid","keyDown","keyPress","keyUp","load","loadedData","loadedMetadata","loadStart","lostPointerCapture","mouseDown","mouseMove","mouseOut","mouseOver","mouseUp","paste","pause","play","playing","pointerCancel","pointerDown","pointerMove","pointerOut","pointerOver","pointerUp","progress","rateChange","reset","resize","seeked","seeking","stalled","submit","suspend","timeUpdate","touchCancel","touchEnd","touchStart","volumeChange","scroll","toggle","touchMove","waiting","wheel"];function io(e,t){gx.set(e,t),st(t,[e])}function Sw(){for(var e=0;e<_x.length;e++){var t=_x[e],r=t.toLowerCase(),a=t[0].toUpperCase()+t.slice(1);io(r,"on"+a)}io(hx,"onAnimationEnd"),io(px,"onAnimationIteration"),io(mx,"onAnimationStart"),io("dblclick","onDoubleClick"),io("focusin","onFocus"),io("focusout","onBlur"),io(vx,"onTransitionEnd")}function xw(e,t,r,a,l,c,h){var g=gx.get(t);if(g!==void 0){var E=am,w=t;switch(t){case"keypress":if(Uf(a)===0)return;case"keydown":case"keyup":E=EA;break;case"focusin":w="focus",E=lm;break;case"focusout":w="blur",E=lm;break;case"beforeblur":case"afterblur":E=lm;break;case"click":if(a.button===2)return;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=WS;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=lA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=TA;break;case hx:case px:case mx:E=fA;break;case vx:E=CA;break;case"scroll":E=aA;break;case"wheel":E=wA;break;case"copy":case"cut":case"paste":E=hA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=jS;break}var U=(c&mu)!==0;{var j=!U&&t==="scroll",W=Tw(r,g,a.type,U,j);if(W.length>0){var re=new E(g,w,null,a,l);e.push({event:re,listeners:W})}}}}Sw(),nw(),GA(),vw(),UA();function Ew(e,t,r,a,l,c,h){xw(e,t,r,a,l,c);var g=(c&_R)===0;g&&(iw(e,t,r,a,l),tw(e,t,r,a,l),yw(e,t,r,a,l),kA(e,t,r,a,l))}var Wu=["abort","canplay","canplaythrough","durationchange","emptied","encrypted","ended","error","loadeddata","loadedmetadata","loadstart","pause","play","playing","progress","ratechange","resize","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting"],mm=new Set(["cancel","close","invalid","load","scroll","toggle"].concat(Wu));function yx(e,t,r){var a=e.type||"unknown-event";e.currentTarget=r,DR(a,t,void 0,e),e.currentTarget=null}function bw(e,t,r){var a;if(r)for(var l=t.length-1;l>=0;l--){var c=t[l],h=c.instance,g=c.currentTarget,E=c.listener;if(h!==a&&e.isPropagationStopped())return;yx(e,E,g),a=h}else for(var w=0;w<t.length;w++){var U=t[w],j=U.instance,W=U.currentTarget,re=U.listener;if(j!==a&&e.isPropagationStopped())return;yx(e,re,W),a=j}}function Sx(e,t){for(var r=(t&mu)!==0,a=0;a<e.length;a++){var l=e[a],c=l.event,h=l.listeners;bw(c,h,r)}LR()}function Mw(e,t,r,a,l){var c=up(r),h=[];Ew(h,e,a,r,c,t),Sx(h,t)}function An(e,t){mm.has(e)||d('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',e);var r=!1,a=e1(t),l=Aw(e);a.has(l)||(xx(t,e,lp,r),a.add(l))}function vm(e,t,r){mm.has(e)&&!t&&d('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',e);var a=0;t&&(a|=mu),xx(r,e,a,t)}var zf="_reactListening"+Math.random().toString(36).slice(2);function Xu(e){if(!e[zf]){e[zf]=!0,Je.forEach(function(r){r!=="selectionchange"&&(mm.has(r)||vm(r,!1,e),vm(r,!0,e))});var t=e.nodeType===ya?e:e.ownerDocument;t!==null&&(t[zf]||(t[zf]=!0,vm("selectionchange",!1,t)))}}function xx(e,t,r,a,l){var c=$C(e,t,r),h=void 0;dp&&(t==="touchstart"||t==="touchmove"||t==="wheel")&&(h=!0),e=e,a?h!==void 0?tA(e,t,c,h):eA(e,t,c):h!==void 0?nA(e,t,c,h):JC(e,t,c)}function Ex(e,t){return e===t||e.nodeType===Wn&&e.parentNode===t}function gm(e,t,r,a,l){var c=a;if((t&Ky)===0&&(t&lp)===0){var h=l;if(a!==null){var g=a;e:for(;;){if(g===null)return;var E=g.tag;if(E===y||E===x){var w=g.stateNode.containerInfo;if(Ex(w,h))break;if(E===x)for(var U=g.return;U!==null;){var j=U.tag;if(j===y||j===x){var W=U.stateNode.containerInfo;if(Ex(W,h))return}U=U.return}for(;w!==null;){var re=Ko(w);if(re===null)return;var oe=re.tag;if(oe===b||oe===C){g=c=re;continue e}w=w.parentNode}}g=g.return}}}nS(function(){return Mw(e,t,r,c)})}function ju(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Tw(e,t,r,a,l,c){for(var h=t!==null?t+"Capture":null,g=a?h:t,E=[],w=e,U=null;w!==null;){var j=w,W=j.stateNode,re=j.tag;if(re===b&&W!==null&&(U=W,g!==null)){var oe=gu(w,g);oe!=null&&E.push(ju(w,oe,U))}if(l)break;w=w.return}return E}function Bf(e,t){for(var r=t+"Capture",a=[],l=e;l!==null;){var c=l,h=c.stateNode,g=c.tag;if(g===b&&h!==null){var E=h,w=gu(l,r);w!=null&&a.unshift(ju(l,w,E));var U=gu(l,t);U!=null&&a.push(ju(l,U,E))}l=l.return}return a}function el(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==b);return e||null}function Rw(e,t){for(var r=e,a=t,l=0,c=r;c;c=el(c))l++;for(var h=0,g=a;g;g=el(g))h++;for(;l-h>0;)r=el(r),l--;for(;h-l>0;)a=el(a),h--;for(var E=l;E--;){if(r===a||a!==null&&r===a.alternate)return r;r=el(r),a=el(a)}return null}function bx(e,t,r,a,l){for(var c=t._reactName,h=[],g=r;g!==null&&g!==a;){var E=g,w=E.alternate,U=E.stateNode,j=E.tag;if(w!==null&&w===a)break;if(j===b&&U!==null){var W=U;if(l){var re=gu(g,c);re!=null&&h.unshift(ju(g,re,W))}else if(!l){var oe=gu(g,c);oe!=null&&h.push(ju(g,oe,W))}}g=g.return}h.length!==0&&e.push({event:t,listeners:h})}function Cw(e,t,r,a,l){var c=a&&l?Rw(a,l):null;a!==null&&bx(e,t,a,c,!1),l!==null&&r!==null&&bx(e,r,l,c,!0)}function Aw(e,t){return e+"__bubble"}var Qi=!1,Yu="dangerouslySetInnerHTML",kf="suppressContentEditableWarning",ro="suppressHydrationWarning",Mx="autoFocus",qo="children",$o="style",Hf="__html",_m,Vf,qu,Tx,Gf,Rx,Cx;_m={dialog:!0,webview:!0},Vf=function(e,t){fR(e,t),dR(e,t),gR(e,t,{registrationNameDependencies:Ne,possibleRegistrationNames:rt})},Rx=zt&&!document.documentMode,qu=function(e,t,r){if(!Qi){var a=Wf(r),l=Wf(t);l!==a&&(Qi=!0,d("Prop `%s` did not match. Server: %s Client: %s",e,JSON.stringify(l),JSON.stringify(a)))}},Tx=function(e){if(!Qi){Qi=!0;var t=[];e.forEach(function(r){t.push(r)}),d("Extra attributes from the server: %s",t)}},Gf=function(e,t){t===!1?d("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",e,e,e):d("Expected `%s` listener to be a function, instead got a value of `%s` type.",e,typeof t)},Cx=function(e,t){var r=e.namespaceURI===ga?e.ownerDocument.createElement(e.tagName):e.ownerDocument.createElementNS(e.namespaceURI,e.tagName);return r.innerHTML=t,r.innerHTML};var ww=/\r\n?/g,Dw=/\u0000|\uFFFD/g;function Wf(e){nt(e);var t=typeof e=="string"?e:""+e;return t.replace(ww,`
`).replace(Dw,"")}function Xf(e,t,r,a){var l=Wf(t),c=Wf(e);if(c!==l&&(a&&(Qi||(Qi=!0,d('Text content did not match. Server: "%s" Client: "%s"',c,l))),r&&fe))throw new Error("Text content does not match server-rendered HTML.")}function Ax(e){return e.nodeType===ya?e:e.ownerDocument}function Lw(){}function jf(e){e.onclick=Lw}function Uw(e,t,r,a,l){for(var c in a)if(a.hasOwnProperty(c)){var h=a[c];if(c===$o)h&&Object.freeze(h),Wy(t,h);else if(c===Yu){var g=h?h[Hf]:void 0;g!=null&&By(t,g)}else if(c===qo)if(typeof h=="string"){var E=e!=="textarea"||h!=="";E&&mf(t,h)}else typeof h=="number"&&mf(t,""+h);else c===kf||c===ro||c===Mx||(Ne.hasOwnProperty(c)?h!=null&&(typeof h!="function"&&Gf(c,h),c==="onScroll"&&An("scroll",t)):h!=null&&In(t,c,h,l))}}function Nw(e,t,r,a){for(var l=0;l<t.length;l+=2){var c=t[l],h=t[l+1];c===$o?Wy(e,h):c===Yu?By(e,h):c===qo?mf(e,h):In(e,c,h,a)}}function Pw(e,t,r,a){var l,c=Ax(r),h,g=a;if(g===ga&&(g=np(e)),g===ga){if(l=Io(e,t),!l&&e!==e.toLowerCase()&&d("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",e),e==="script"){var E=c.createElement("div");E.innerHTML="<script><\/script>";var w=E.firstChild;h=E.removeChild(w)}else if(typeof t.is=="string")h=c.createElement(e,{is:t.is});else if(h=c.createElement(e),e==="select"){var U=h;t.multiple?U.multiple=!0:t.size&&(U.size=t.size)}}else h=c.createElementNS(g,e);return g===ga&&!l&&Object.prototype.toString.call(h)==="[object HTMLUnknownElement]"&&!xt.call(_m,e)&&(_m[e]=!0,d("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",e)),h}function Ow(e,t){return Ax(t).createTextNode(e)}function Fw(e,t,r,a){var l=Io(t,r);Vf(t,r);var c;switch(t){case"dialog":An("cancel",e),An("close",e),c=r;break;case"iframe":case"object":case"embed":An("load",e),c=r;break;case"video":case"audio":for(var h=0;h<Wu.length;h++)An(Wu[h],e);c=r;break;case"source":An("error",e),c=r;break;case"img":case"image":case"link":An("error",e),An("load",e),c=r;break;case"details":An("toggle",e),c=r;break;case"input":df(e,r),c=cu(e,r),An("invalid",e);break;case"option":gn(e,r),c=r;break;case"select":hu(e,r),c=du(e,r),An("invalid",e);break;case"textarea":Fy(e,r),c=ep(e,r),An("invalid",e);break;default:c=r}switch(sp(t,c),Uw(t,e,a,c,l),t){case"input":Oo(e),ae(e,r,!1);break;case"textarea":Oo(e),zy(e);break;case"option":Tn(e,r);break;case"select":Qh(e,r);break;default:typeof c.onClick=="function"&&jf(e);break}}function Iw(e,t,r,a,l){Vf(t,a);var c=null,h,g;switch(t){case"input":h=cu(e,r),g=cu(e,a),c=[];break;case"select":h=du(e,r),g=du(e,a),c=[];break;case"textarea":h=ep(e,r),g=ep(e,a),c=[];break;default:h=r,g=a,typeof h.onClick!="function"&&typeof g.onClick=="function"&&jf(e);break}sp(t,g);var E,w,U=null;for(E in h)if(!(g.hasOwnProperty(E)||!h.hasOwnProperty(E)||h[E]==null))if(E===$o){var j=h[E];for(w in j)j.hasOwnProperty(w)&&(U||(U={}),U[w]="")}else E===Yu||E===qo||E===kf||E===ro||E===Mx||(Ne.hasOwnProperty(E)?c||(c=[]):(c=c||[]).push(E,null));for(E in g){var W=g[E],re=h!=null?h[E]:void 0;if(!(!g.hasOwnProperty(E)||W===re||W==null&&re==null))if(E===$o)if(W&&Object.freeze(W),re){for(w in re)re.hasOwnProperty(w)&&(!W||!W.hasOwnProperty(w))&&(U||(U={}),U[w]="");for(w in W)W.hasOwnProperty(w)&&re[w]!==W[w]&&(U||(U={}),U[w]=W[w])}else U||(c||(c=[]),c.push(E,U)),U=W;else if(E===Yu){var oe=W?W[Hf]:void 0,ge=re?re[Hf]:void 0;oe!=null&&ge!==oe&&(c=c||[]).push(E,oe)}else E===qo?(typeof W=="string"||typeof W=="number")&&(c=c||[]).push(E,""+W):E===kf||E===ro||(Ne.hasOwnProperty(E)?(W!=null&&(typeof W!="function"&&Gf(E,W),E==="onScroll"&&An("scroll",e)),!c&&re!==W&&(c=[])):(c=c||[]).push(E,W))}return U&&(iR(U,g[$o]),(c=c||[]).push($o,U)),c}function zw(e,t,r,a,l){r==="input"&&l.type==="radio"&&l.name!=null&&T(e,l);var c=Io(r,a),h=Io(r,l);switch(Nw(e,t,c,h),r){case"input":B(e,l);break;case"textarea":Iy(e,l);break;case"select":hf(e,l);break}}function Bw(e){{var t=e.toLowerCase();return vf.hasOwnProperty(t)&&vf[t]||null}}function kw(e,t,r,a,l,c,h){var g,E;switch(g=Io(t,r),Vf(t,r),t){case"dialog":An("cancel",e),An("close",e);break;case"iframe":case"object":case"embed":An("load",e);break;case"video":case"audio":for(var w=0;w<Wu.length;w++)An(Wu[w],e);break;case"source":An("error",e);break;case"img":case"image":case"link":An("error",e),An("load",e);break;case"details":An("toggle",e);break;case"input":df(e,r),An("invalid",e);break;case"option":gn(e,r);break;case"select":hu(e,r),An("invalid",e);break;case"textarea":Fy(e,r),An("invalid",e);break}sp(t,r);{E=new Set;for(var U=e.attributes,j=0;j<U.length;j++){var W=U[j].name.toLowerCase();switch(W){case"value":break;case"checked":break;case"selected":break;default:E.add(U[j].name)}}}var re=null;for(var oe in r)if(r.hasOwnProperty(oe)){var ge=r[oe];if(oe===qo)typeof ge=="string"?e.textContent!==ge&&(r[ro]!==!0&&Xf(e.textContent,ge,c,h),re=[qo,ge]):typeof ge=="number"&&e.textContent!==""+ge&&(r[ro]!==!0&&Xf(e.textContent,ge,c,h),re=[qo,""+ge]);else if(Ne.hasOwnProperty(oe))ge!=null&&(typeof ge!="function"&&Gf(oe,ge),oe==="onScroll"&&An("scroll",e));else if(h&&typeof g=="boolean"){var Ye=void 0,yt=Ct(oe);if(r[ro]!==!0){if(!(oe===kf||oe===ro||oe==="value"||oe==="checked"||oe==="selected")){if(oe===Yu){var ht=e.innerHTML,Qt=ge?ge[Hf]:void 0;if(Qt!=null){var jt=Cx(e,Qt);jt!==ht&&qu(oe,ht,jt)}}else if(oe===$o){if(E.delete(oe),Rx){var J=tR(ge);Ye=e.getAttribute("style"),J!==Ye&&qu(oe,Ye,J)}}else if(g&&!tt)E.delete(oe.toLowerCase()),Ye=qn(e,oe,ge),ge!==Ye&&qu(oe,Ye,ge);else if(!Oe(oe,yt,g)&&!pt(oe,ge,yt,g)){var _e=!1;if(yt!==null)E.delete(yt.attributeName),Ye=Jt(e,oe,ge,yt);else{var ee=a;if(ee===ga&&(ee=np(t)),ee===ga)E.delete(oe.toLowerCase());else{var we=Bw(oe);we!==null&&we!==oe&&(_e=!0,E.delete(we)),E.delete(oe)}Ye=qn(e,oe,ge)}var et=tt;!et&&ge!==Ye&&!_e&&qu(oe,Ye,ge)}}}}}switch(h&&E.size>0&&r[ro]!==!0&&Tx(E),t){case"input":Oo(e),ae(e,r,!0);break;case"textarea":Oo(e),zy(e);break;case"select":case"option":break;default:typeof r.onClick=="function"&&jf(e);break}return re}function Hw(e,t,r){var a=e.nodeValue!==t;return a}function ym(e,t){{if(Qi)return;Qi=!0,d("Did not expect server HTML to contain a <%s> in <%s>.",t.nodeName.toLowerCase(),e.nodeName.toLowerCase())}}function Sm(e,t){{if(Qi)return;Qi=!0,d('Did not expect server HTML to contain the text node "%s" in <%s>.',t.nodeValue,e.nodeName.toLowerCase())}}function xm(e,t,r){{if(Qi)return;Qi=!0,d("Expected server HTML to contain a matching <%s> in <%s>.",t,e.nodeName.toLowerCase())}}function Em(e,t){{if(t===""||Qi)return;Qi=!0,d('Expected server HTML to contain a matching text node for "%s" in <%s>.',t,e.nodeName.toLowerCase())}}function Vw(e,t,r){switch(t){case"input":ve(e,r);return;case"textarea":FT(e,r);return;case"select":Jh(e,r);return}}var $u=function(){},Ku=function(){};{var Gw=["address","applet","area","article","aside","base","basefont","bgsound","blockquote","body","br","button","caption","center","col","colgroup","dd","details","dir","div","dl","dt","embed","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","iframe","img","input","isindex","li","link","listing","main","marquee","menu","menuitem","meta","nav","noembed","noframes","noscript","object","ol","p","param","plaintext","pre","script","section","select","source","style","summary","table","tbody","td","template","textarea","tfoot","th","thead","title","tr","track","ul","wbr","xmp"],wx=["applet","caption","html","table","td","th","marquee","object","template","foreignObject","desc","title"],Ww=wx.concat(["button"]),Xw=["dd","dt","li","option","optgroup","p","rp","rt"],Dx={current:null,formTag:null,aTagInScope:null,buttonTagInScope:null,nobrTagInScope:null,pTagInButtonScope:null,listItemTagAutoclosing:null,dlItemTagAutoclosing:null};Ku=function(e,t){var r=Ae({},e||Dx),a={tag:t};return wx.indexOf(t)!==-1&&(r.aTagInScope=null,r.buttonTagInScope=null,r.nobrTagInScope=null),Ww.indexOf(t)!==-1&&(r.pTagInButtonScope=null),Gw.indexOf(t)!==-1&&t!=="address"&&t!=="div"&&t!=="p"&&(r.listItemTagAutoclosing=null,r.dlItemTagAutoclosing=null),r.current=a,t==="form"&&(r.formTag=a),t==="a"&&(r.aTagInScope=a),t==="button"&&(r.buttonTagInScope=a),t==="nobr"&&(r.nobrTagInScope=a),t==="p"&&(r.pTagInButtonScope=a),t==="li"&&(r.listItemTagAutoclosing=a),(t==="dd"||t==="dt")&&(r.dlItemTagAutoclosing=a),r};var jw=function(e,t){switch(t){case"select":return e==="option"||e==="optgroup"||e==="#text";case"optgroup":return e==="option"||e==="#text";case"option":return e==="#text";case"tr":return e==="th"||e==="td"||e==="style"||e==="script"||e==="template";case"tbody":case"thead":case"tfoot":return e==="tr"||e==="style"||e==="script"||e==="template";case"colgroup":return e==="col"||e==="template";case"table":return e==="caption"||e==="colgroup"||e==="tbody"||e==="tfoot"||e==="thead"||e==="style"||e==="script"||e==="template";case"head":return e==="base"||e==="basefont"||e==="bgsound"||e==="link"||e==="meta"||e==="title"||e==="noscript"||e==="noframes"||e==="style"||e==="script"||e==="template";case"html":return e==="head"||e==="body"||e==="frameset";case"frameset":return e==="frame";case"#document":return e==="html"}switch(e){case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return t!=="h1"&&t!=="h2"&&t!=="h3"&&t!=="h4"&&t!=="h5"&&t!=="h6";case"rp":case"rt":return Xw.indexOf(t)===-1;case"body":case"caption":case"col":case"colgroup":case"frameset":case"frame":case"head":case"html":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":return t==null}return!0},Yw=function(e,t){switch(e){case"address":case"article":case"aside":case"blockquote":case"center":case"details":case"dialog":case"dir":case"div":case"dl":case"fieldset":case"figcaption":case"figure":case"footer":case"header":case"hgroup":case"main":case"menu":case"nav":case"ol":case"p":case"section":case"summary":case"ul":case"pre":case"listing":case"table":case"hr":case"xmp":case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return t.pTagInButtonScope;case"form":return t.formTag||t.pTagInButtonScope;case"li":return t.listItemTagAutoclosing;case"dd":case"dt":return t.dlItemTagAutoclosing;case"button":return t.buttonTagInScope;case"a":return t.aTagInScope;case"nobr":return t.nobrTagInScope}return null},Lx={};$u=function(e,t,r){r=r||Dx;var a=r.current,l=a&&a.tag;t!=null&&(e!=null&&d("validateDOMNesting: when childText is passed, childTag should be null"),e="#text");var c=jw(e,l)?null:a,h=c?null:Yw(e,r),g=c||h;if(g){var E=g.tag,w=!!c+"|"+e+"|"+E;if(!Lx[w]){Lx[w]=!0;var U=e,j="";if(e==="#text"?/\S/.test(t)?U="Text nodes":(U="Whitespace text nodes",j=" Make sure you don't have any extra whitespace between tags on each line of your source code."):U="<"+e+">",c){var W="";E==="table"&&e==="tr"&&(W+=" Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."),d("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s",U,E,j,W)}else d("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.",U,E)}}}}var Yf="suppressHydrationWarning",qf="$",$f="/$",Zu="$?",Qu="$!",qw="style",bm=null,Mm=null;function $w(e){var t,r,a=e.nodeType;switch(a){case ya:case rp:{t=a===ya?"#document":"#fragment";var l=e.documentElement;r=l?l.namespaceURI:ip(null,"");break}default:{var c=a===Wn?e.parentNode:e,h=c.namespaceURI||null;t=c.tagName,r=ip(h,t);break}}{var g=t.toLowerCase(),E=Ku(null,g);return{namespace:r,ancestorInfo:E}}}function Kw(e,t,r){{var a=e,l=ip(a.namespace,t),c=Ku(a.ancestorInfo,t);return{namespace:l,ancestorInfo:c}}}function HB(e){return e}function Zw(e){bm=qC(),Mm=fw();var t=null;return BS(!1),t}function Qw(e){dw(Mm),BS(bm),bm=null,Mm=null}function Jw(e,t,r,a,l){var c;{var h=a;if($u(e,null,h.ancestorInfo),typeof t.children=="string"||typeof t.children=="number"){var g=""+t.children,E=Ku(h.ancestorInfo,e);$u(null,g,E)}c=h.namespace}var w=Pw(e,t,r,c);return tc(l,w),Um(w,t),w}function eD(e,t){e.appendChild(t)}function tD(e,t,r,a,l){switch(Fw(e,t,r,a),t){case"button":case"input":case"select":case"textarea":return!!r.autoFocus;case"img":return!0;default:return!1}}function nD(e,t,r,a,l,c){{var h=c;if(typeof a.children!=typeof r.children&&(typeof a.children=="string"||typeof a.children=="number")){var g=""+a.children,E=Ku(h.ancestorInfo,t);$u(null,g,E)}}return Iw(e,t,r,a)}function Tm(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}function iD(e,t,r,a){{var l=r;$u(null,e,l.ancestorInfo)}var c=Ow(e,t);return tc(a,c),c}function rD(){var e=window.event;return e===void 0?Ta:kS(e.type)}var Rm=typeof setTimeout=="function"?setTimeout:void 0,aD=typeof clearTimeout=="function"?clearTimeout:void 0,Cm=-1,Ux=typeof Promise=="function"?Promise:void 0,oD=typeof queueMicrotask=="function"?queueMicrotask:typeof Ux<"u"?function(e){return Ux.resolve(null).then(e).catch(sD)}:Rm;function sD(e){setTimeout(function(){throw e})}function lD(e,t,r,a){switch(t){case"button":case"input":case"select":case"textarea":r.autoFocus&&e.focus();return;case"img":{r.src&&(e.src=r.src);return}}}function uD(e,t,r,a,l,c){zw(e,t,r,a,l),Um(e,l)}function Nx(e){mf(e,"")}function cD(e,t,r){e.nodeValue=r}function fD(e,t){e.appendChild(t)}function dD(e,t){var r;e.nodeType===Wn?(r=e.parentNode,r.insertBefore(t,e)):(r=e,r.appendChild(t));var a=e._reactRootContainer;a==null&&r.onclick===null&&jf(r)}function hD(e,t,r){e.insertBefore(t,r)}function pD(e,t,r){e.nodeType===Wn?e.parentNode.insertBefore(t,r):e.insertBefore(t,r)}function mD(e,t){e.removeChild(t)}function vD(e,t){e.nodeType===Wn?e.parentNode.removeChild(t):e.removeChild(t)}function Am(e,t){var r=t,a=0;do{var l=r.nextSibling;if(e.removeChild(r),l&&l.nodeType===Wn){var c=l.data;if(c===$f)if(a===0){e.removeChild(l),Pu(t);return}else a--;else(c===qf||c===Zu||c===Qu)&&a++}r=l}while(r);Pu(t)}function gD(e,t){e.nodeType===Wn?Am(e.parentNode,t):e.nodeType===Zi&&Am(e,t),Pu(e)}function _D(e){e=e;var t=e.style;typeof t.setProperty=="function"?t.setProperty("display","none","important"):t.display="none"}function yD(e){e.nodeValue=""}function SD(e,t){e=e;var r=t[qw],a=r!=null&&r.hasOwnProperty("display")?r.display:null;e.style.display=ap("display",a)}function xD(e,t){e.nodeValue=t}function ED(e){e.nodeType===Zi?e.textContent="":e.nodeType===ya&&e.documentElement&&e.removeChild(e.documentElement)}function bD(e,t,r){return e.nodeType!==Zi||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e}function MD(e,t){return t===""||e.nodeType!==_a?null:e}function TD(e){return e.nodeType!==Wn?null:e}function Px(e){return e.data===Zu}function wm(e){return e.data===Qu}function RD(e){var t=e.nextSibling&&e.nextSibling.dataset,r,a,l;return t&&(r=t.dgst,a=t.msg,l=t.stck),{message:a,digest:r,stack:l}}function CD(e,t){e._reactRetry=t}function Kf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===Zi||t===_a)break;if(t===Wn){var r=e.data;if(r===qf||r===Qu||r===Zu)break;if(r===$f)return null}}return e}function Ju(e){return Kf(e.nextSibling)}function AD(e){return Kf(e.firstChild)}function wD(e){return Kf(e.firstChild)}function DD(e){return Kf(e.nextSibling)}function LD(e,t,r,a,l,c,h){tc(c,e),Um(e,r);var g;{var E=l;g=E.namespace}var w=(c.mode&Kt)!==St;return kw(e,t,r,g,a,w,h)}function UD(e,t,r,a){return tc(r,e),r.mode&Kt,Hw(e,t)}function ND(e,t){tc(t,e)}function PD(e){for(var t=e.nextSibling,r=0;t;){if(t.nodeType===Wn){var a=t.data;if(a===$f){if(r===0)return Ju(t);r--}else(a===qf||a===Qu||a===Zu)&&r++}t=t.nextSibling}return null}function Ox(e){for(var t=e.previousSibling,r=0;t;){if(t.nodeType===Wn){var a=t.data;if(a===qf||a===Qu||a===Zu){if(r===0)return t;r--}else a===$f&&r++}t=t.previousSibling}return null}function OD(e){Pu(e)}function FD(e){Pu(e)}function ID(e){return e!=="head"&&e!=="body"}function zD(e,t,r,a){var l=!0;Xf(t.nodeValue,r,a,l)}function BD(e,t,r,a,l,c){if(t[Yf]!==!0){var h=!0;Xf(a.nodeValue,l,c,h)}}function kD(e,t){t.nodeType===Zi?ym(e,t):t.nodeType===Wn||Sm(e,t)}function HD(e,t){{var r=e.parentNode;r!==null&&(t.nodeType===Zi?ym(r,t):t.nodeType===Wn||Sm(r,t))}}function VD(e,t,r,a,l){(l||t[Yf]!==!0)&&(a.nodeType===Zi?ym(r,a):a.nodeType===Wn||Sm(r,a))}function GD(e,t,r){xm(e,t)}function WD(e,t){Em(e,t)}function XD(e,t,r){{var a=e.parentNode;a!==null&&xm(a,t)}}function jD(e,t){{var r=e.parentNode;r!==null&&Em(r,t)}}function YD(e,t,r,a,l,c){(c||t[Yf]!==!0)&&xm(r,a)}function qD(e,t,r,a,l){(l||t[Yf]!==!0)&&Em(r,a)}function $D(e){d("An error occurred during hydration. The server HTML was replaced with client content in <%s>.",e.nodeName.toLowerCase())}function KD(e){Xu(e)}var tl=Math.random().toString(36).slice(2),nl="__reactFiber$"+tl,Dm="__reactProps$"+tl,ec="__reactContainer$"+tl,Lm="__reactEvents$"+tl,ZD="__reactListeners$"+tl,QD="__reactHandles$"+tl;function JD(e){delete e[nl],delete e[Dm],delete e[Lm],delete e[ZD],delete e[QD]}function tc(e,t){t[nl]=e}function Zf(e,t){t[ec]=e}function Fx(e){e[ec]=null}function nc(e){return!!e[ec]}function Ko(e){var t=e[nl];if(t)return t;for(var r=e.parentNode;r;){if(t=r[ec]||r[nl],t){var a=t.alternate;if(t.child!==null||a!==null&&a.child!==null)for(var l=Ox(e);l!==null;){var c=l[nl];if(c)return c;l=Ox(l)}return t}e=r,r=e.parentNode}return null}function ao(e){var t=e[nl]||e[ec];return t&&(t.tag===b||t.tag===C||t.tag===$||t.tag===y)?t:null}function il(e){if(e.tag===b||e.tag===C)return e.stateNode;throw new Error("getNodeFromInstance: Invalid argument.")}function Qf(e){return e[Dm]||null}function Um(e,t){e[Dm]=t}function e1(e){var t=e[Lm];return t===void 0&&(t=e[Lm]=new Set),t}var Ix={},zx=i.ReactDebugCurrentFrame;function Jf(e){if(e){var t=e._owner,r=Ki(e.type,e._source,t?t.type:null);zx.setExtraStackFrame(r)}else zx.setExtraStackFrame(null)}function Pr(e,t,r,a,l){{var c=Function.call.bind(xt);for(var h in e)if(c(e,h)){var g=void 0;try{if(typeof e[h]!="function"){var E=Error((a||"React class")+": "+r+" type `"+h+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[h]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw E.name="Invariant Violation",E}g=e[h](t,h,a,r,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(w){g=w}g&&!(g instanceof Error)&&(Jf(l),d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",a||"React class",r,h,typeof g),Jf(null)),g instanceof Error&&!(g.message in Ix)&&(Ix[g.message]=!0,Jf(l),d("Failed %s type: %s",r,g.message),Jf(null))}}}var Nm=[],ed;ed=[];var Ra=-1;function oo(e){return{current:e}}function Ci(e,t){if(Ra<0){d("Unexpected pop.");return}t!==ed[Ra]&&d("Unexpected Fiber popped."),e.current=Nm[Ra],Nm[Ra]=null,ed[Ra]=null,Ra--}function Ai(e,t,r){Ra++,Nm[Ra]=e.current,ed[Ra]=r,e.current=t}var Pm;Pm={};var dr={};Object.freeze(dr);var Ca=oo(dr),ea=oo(!1),Om=dr;function rl(e,t,r){return r&&ta(t)?Om:Ca.current}function Bx(e,t,r){{var a=e.stateNode;a.__reactInternalMemoizedUnmaskedChildContext=t,a.__reactInternalMemoizedMaskedChildContext=r}}function al(e,t){{var r=e.type,a=r.contextTypes;if(!a)return dr;var l=e.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===t)return l.__reactInternalMemoizedMaskedChildContext;var c={};for(var h in a)c[h]=t[h];{var g=Ot(e)||"Unknown";Pr(a,c,"context",g)}return l&&Bx(e,t,c),c}}function td(){return ea.current}function ta(e){{var t=e.childContextTypes;return t!=null}}function nd(e){Ci(ea,e),Ci(Ca,e)}function Fm(e){Ci(ea,e),Ci(Ca,e)}function kx(e,t,r){{if(Ca.current!==dr)throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");Ai(Ca,t,e),Ai(ea,r,e)}}function Hx(e,t,r){{var a=e.stateNode,l=t.childContextTypes;if(typeof a.getChildContext!="function"){{var c=Ot(e)||"Unknown";Pm[c]||(Pm[c]=!0,d("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.",c,c))}return r}var h=a.getChildContext();for(var g in h)if(!(g in l))throw new Error((Ot(e)||"Unknown")+'.getChildContext(): key "'+g+'" is not defined in childContextTypes.');{var E=Ot(e)||"Unknown";Pr(l,h,"child context",E)}return Ae({},r,h)}}function id(e){{var t=e.stateNode,r=t&&t.__reactInternalMemoizedMergedChildContext||dr;return Om=Ca.current,Ai(Ca,r,e),Ai(ea,ea.current,e),!0}}function Vx(e,t,r){{var a=e.stateNode;if(!a)throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");if(r){var l=Hx(e,t,Om);a.__reactInternalMemoizedMergedChildContext=l,Ci(ea,e),Ci(Ca,e),Ai(Ca,l,e),Ai(ea,r,e)}else Ci(ea,e),Ai(ea,r,e)}}function t1(e){{if(!IR(e)||e.tag!==v)throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");var t=e;do{switch(t.tag){case y:return t.stateNode.context;case v:{var r=t.type;if(ta(r))return t.stateNode.__reactInternalMemoizedMergedChildContext;break}}t=t.return}while(t!==null);throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.")}}var so=0,rd=1,Aa=null,Im=!1,zm=!1;function Gx(e){Aa===null?Aa=[e]:Aa.push(e)}function n1(e){Im=!0,Gx(e)}function Wx(){Im&&lo()}function lo(){if(!zm&&Aa!==null){zm=!0;var e=0,t=Nr();try{var r=!0,a=Aa;for(di(ur);e<a.length;e++){var l=a[e];do l=l(r);while(l!==null)}Aa=null,Im=!1}catch(c){throw Aa!==null&&(Aa=Aa.slice(e+1)),pS(Sf,lo),c}finally{di(t),zm=!1}}return null}var ol=[],sl=0,ad=null,od=0,yr=[],Sr=0,Zo=null,wa=1,Da="";function i1(e){return Jo(),(e.flags&oS)!==bt}function r1(e){return Jo(),od}function a1(){var e=Da,t=wa,r=t&~o1(t);return r.toString(32)+e}function Qo(e,t){Jo(),ol[sl++]=od,ol[sl++]=ad,ad=e,od=t}function Xx(e,t,r){Jo(),yr[Sr++]=wa,yr[Sr++]=Da,yr[Sr++]=Zo,Zo=e;var a=wa,l=Da,c=sd(a)-1,h=a&~(1<<c),g=r+1,E=sd(t)+c;if(E>30){var w=c-c%5,U=(1<<w)-1,j=(h&U).toString(32),W=h>>w,re=c-w,oe=sd(t)+re,ge=g<<re,Ye=ge|W,yt=j+l;wa=1<<oe|Ye,Da=yt}else{var ht=g<<c,Qt=ht|h,jt=l;wa=1<<E|Qt,Da=jt}}function Bm(e){Jo();var t=e.return;if(t!==null){var r=1,a=0;Qo(e,r),Xx(e,r,a)}}function sd(e){return 32-SS(e)}function o1(e){return 1<<sd(e)-1}function km(e){for(;e===ad;)ad=ol[--sl],ol[sl]=null,od=ol[--sl],ol[sl]=null;for(;e===Zo;)Zo=yr[--Sr],yr[Sr]=null,Da=yr[--Sr],yr[Sr]=null,wa=yr[--Sr],yr[Sr]=null}function s1(){return Jo(),Zo!==null?{id:wa,overflow:Da}:null}function l1(e,t){Jo(),yr[Sr++]=wa,yr[Sr++]=Da,yr[Sr++]=Zo,wa=t.id,Da=t.overflow,Zo=e}function Jo(){gi()||d("Expected to be hydrating. This is a bug in React. Please file an issue.")}var vi=null,xr=null,Or=!1,es=!1,uo=null;function u1(){Or&&d("We should not be hydrating here. This is a bug in React. Please file a bug.")}function jx(){es=!0}function c1(){return es}function f1(e){var t=e.stateNode.containerInfo;return xr=wD(t),vi=e,Or=!0,uo=null,es=!1,!0}function d1(e,t,r){return xr=DD(t),vi=e,Or=!0,uo=null,es=!1,r!==null&&l1(e,r),!0}function Yx(e,t){switch(e.tag){case y:{kD(e.stateNode.containerInfo,t);break}case b:{var r=(e.mode&Kt)!==St;VD(e.type,e.memoizedProps,e.stateNode,t,r);break}case $:{var a=e.memoizedState;a.dehydrated!==null&&HD(a.dehydrated,t);break}}}function qx(e,t){Yx(e,t);var r=vN();r.stateNode=t,r.return=e;var a=e.deletions;a===null?(e.deletions=[r],e.flags|=zo):a.push(r)}function Hm(e,t){{if(es)return;switch(e.tag){case y:{var r=e.stateNode.containerInfo;switch(t.tag){case b:var a=t.type;t.pendingProps,GD(r,a);break;case C:var l=t.pendingProps;WD(r,l);break}break}case b:{var c=e.type,h=e.memoizedProps,g=e.stateNode;switch(t.tag){case b:{var E=t.type,w=t.pendingProps,U=(e.mode&Kt)!==St;YD(c,h,g,E,w,U);break}case C:{var j=t.pendingProps,W=(e.mode&Kt)!==St;qD(c,h,g,j,W);break}}break}case $:{var re=e.memoizedState,oe=re.dehydrated;if(oe!==null)switch(t.tag){case b:var ge=t.type;t.pendingProps,XD(oe,ge);break;case C:var Ye=t.pendingProps;jD(oe,Ye);break}break}default:return}}}function $x(e,t){t.flags=t.flags&~xa|Xn,Hm(e,t)}function Kx(e,t){switch(e.tag){case b:{var r=e.type;e.pendingProps;var a=bD(t,r);return a!==null?(e.stateNode=a,vi=e,xr=AD(a),!0):!1}case C:{var l=e.pendingProps,c=MD(t,l);return c!==null?(e.stateNode=c,vi=e,xr=null,!0):!1}case $:{var h=TD(t);if(h!==null){var g={dehydrated:h,treeContext:s1(),retryLane:sr};e.memoizedState=g;var E=gN(h);return E.return=e,e.child=E,vi=e,xr=null,!0}return!1}default:return!1}}function Vm(e){return(e.mode&Kt)!==St&&(e.flags&ln)===bt}function Gm(e){throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.")}function Wm(e){if(Or){var t=xr;if(!t){Vm(e)&&(Hm(vi,e),Gm()),$x(vi,e),Or=!1,vi=e;return}var r=t;if(!Kx(e,t)){Vm(e)&&(Hm(vi,e),Gm()),t=Ju(r);var a=vi;if(!t||!Kx(e,t)){$x(vi,e),Or=!1,vi=e;return}qx(a,r)}}}function h1(e,t,r){var a=e.stateNode,l=!es,c=LD(a,e.type,e.memoizedProps,t,r,e,l);return e.updateQueue=c,c!==null}function p1(e){var t=e.stateNode,r=e.memoizedProps,a=UD(t,r,e);if(a){var l=vi;if(l!==null)switch(l.tag){case y:{var c=l.stateNode.containerInfo,h=(l.mode&Kt)!==St;zD(c,t,r,h);break}case b:{var g=l.type,E=l.memoizedProps,w=l.stateNode,U=(l.mode&Kt)!==St;BD(g,E,w,t,r,U);break}}}return a}function m1(e){var t=e.memoizedState,r=t!==null?t.dehydrated:null;if(!r)throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");ND(r,e)}function v1(e){var t=e.memoizedState,r=t!==null?t.dehydrated:null;if(!r)throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");return PD(r)}function Zx(e){for(var t=e.return;t!==null&&t.tag!==b&&t.tag!==y&&t.tag!==$;)t=t.return;vi=t}function ld(e){if(e!==vi)return!1;if(!Or)return Zx(e),Or=!0,!1;if(e.tag!==y&&(e.tag!==b||ID(e.type)&&!Tm(e.type,e.memoizedProps))){var t=xr;if(t)if(Vm(e))Qx(e),Gm();else for(;t;)qx(e,t),t=Ju(t)}return Zx(e),e.tag===$?xr=v1(e):xr=vi?Ju(e.stateNode):null,!0}function g1(){return Or&&xr!==null}function Qx(e){for(var t=xr;t;)Yx(e,t),t=Ju(t)}function ll(){vi=null,xr=null,Or=!1,es=!1}function Jx(){uo!==null&&(jE(uo),uo=null)}function gi(){return Or}function Xm(e){uo===null?uo=[e]:uo.push(e)}var _1=i.ReactCurrentBatchConfig,y1=null;function S1(){return _1.transition}var Fr={recordUnsafeLifecycleWarnings:function(e,t){},flushPendingUnsafeLifecycleWarnings:function(){},recordLegacyContextWarning:function(e,t){},flushLegacyContextWarning:function(){},discardPendingWarnings:function(){}};{var x1=function(e){for(var t=null,r=e;r!==null;)r.mode&Nn&&(t=r),r=r.return;return t},ts=function(e){var t=[];return e.forEach(function(r){t.push(r)}),t.sort().join(", ")},ic=[],rc=[],ac=[],oc=[],sc=[],lc=[],ns=new Set;Fr.recordUnsafeLifecycleWarnings=function(e,t){ns.has(e.type)||(typeof t.componentWillMount=="function"&&t.componentWillMount.__suppressDeprecationWarning!==!0&&ic.push(e),e.mode&Nn&&typeof t.UNSAFE_componentWillMount=="function"&&rc.push(e),typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps.__suppressDeprecationWarning!==!0&&ac.push(e),e.mode&Nn&&typeof t.UNSAFE_componentWillReceiveProps=="function"&&oc.push(e),typeof t.componentWillUpdate=="function"&&t.componentWillUpdate.__suppressDeprecationWarning!==!0&&sc.push(e),e.mode&Nn&&typeof t.UNSAFE_componentWillUpdate=="function"&&lc.push(e))},Fr.flushPendingUnsafeLifecycleWarnings=function(){var e=new Set;ic.length>0&&(ic.forEach(function(W){e.add(Ot(W)||"Component"),ns.add(W.type)}),ic=[]);var t=new Set;rc.length>0&&(rc.forEach(function(W){t.add(Ot(W)||"Component"),ns.add(W.type)}),rc=[]);var r=new Set;ac.length>0&&(ac.forEach(function(W){r.add(Ot(W)||"Component"),ns.add(W.type)}),ac=[]);var a=new Set;oc.length>0&&(oc.forEach(function(W){a.add(Ot(W)||"Component"),ns.add(W.type)}),oc=[]);var l=new Set;sc.length>0&&(sc.forEach(function(W){l.add(Ot(W)||"Component"),ns.add(W.type)}),sc=[]);var c=new Set;if(lc.length>0&&(lc.forEach(function(W){c.add(Ot(W)||"Component"),ns.add(W.type)}),lc=[]),t.size>0){var h=ts(t);d(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,h)}if(a.size>0){var g=ts(a);d(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`,g)}if(c.size>0){var E=ts(c);d(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,E)}if(e.size>0){var w=ts(e);f(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,w)}if(r.size>0){var U=ts(r);f(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,U)}if(l.size>0){var j=ts(l);f(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,j)}};var ud=new Map,e0=new Set;Fr.recordLegacyContextWarning=function(e,t){var r=x1(e);if(r===null){d("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");return}if(!e0.has(e.type)){var a=ud.get(r);(e.type.contextTypes!=null||e.type.childContextTypes!=null||t!==null&&typeof t.getChildContext=="function")&&(a===void 0&&(a=[],ud.set(r,a)),a.push(e))}},Fr.flushLegacyContextWarning=function(){ud.forEach(function(e,t){if(e.length!==0){var r=e[0],a=new Set;e.forEach(function(c){a.add(Ot(c)||"Component"),e0.add(c.type)});var l=ts(a);try{wn(r),d(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`,l)}finally{li()}}})},Fr.discardPendingWarnings=function(){ic=[],rc=[],ac=[],oc=[],sc=[],lc=[],ud=new Map}}var jm,Ym,qm,$m,Km,t0=function(e,t){};jm=!1,Ym=!1,qm={},$m={},Km={},t0=function(e,t){if(!(e===null||typeof e!="object")&&!(!e._store||e._store.validated||e.key!=null)){if(typeof e._store!="object")throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");e._store.validated=!0;var r=Ot(t)||"Component";$m[r]||($m[r]=!0,d('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'))}};function E1(e){return e.prototype&&e.prototype.isReactComponent}function uc(e,t,r){var a=r.ref;if(a!==null&&typeof a!="function"&&typeof a!="object"){if((e.mode&Nn||ft)&&!(r._owner&&r._self&&r._owner.stateNode!==r._self)&&!(r._owner&&r._owner.tag!==v)&&!(typeof r.type=="function"&&!E1(r.type))&&r._owner){var l=Ot(e)||"Component";qm[l]||(d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',l,a),qm[l]=!0)}if(r._owner){var c=r._owner,h;if(c){var g=c;if(g.tag!==v)throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");h=g.stateNode}if(!h)throw new Error("Missing owner for string ref "+a+". This error is likely caused by a bug in React. Please file an issue.");var E=h;ut(a,"ref");var w=""+a;if(t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===w)return t.ref;var U=function(j){var W=E.refs;j===null?delete W[w]:W[w]=j};return U._stringRef=w,U}else{if(typeof a!="string")throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");if(!r._owner)throw new Error("Element ref was specified as a string ("+a+`) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`)}}return a}function cd(e,t){var r=Object.prototype.toString.call(t);throw new Error("Objects are not valid as a React child (found: "+(r==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.")}function fd(e){{var t=Ot(e)||"Component";if(Km[t])return;Km[t]=!0,d("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.")}}function n0(e){var t=e._payload,r=e._init;return r(t)}function i0(e){function t(J,_e){if(e){var ee=J.deletions;ee===null?(J.deletions=[_e],J.flags|=zo):ee.push(_e)}}function r(J,_e){if(!e)return null;for(var ee=_e;ee!==null;)t(J,ee),ee=ee.sibling;return null}function a(J,_e){for(var ee=new Map,we=_e;we!==null;)we.key!==null?ee.set(we.key,we):ee.set(we.index,we),we=we.sibling;return ee}function l(J,_e){var ee=fs(J,_e);return ee.index=0,ee.sibling=null,ee}function c(J,_e,ee){if(J.index=ee,!e)return J.flags|=oS,_e;var we=J.alternate;if(we!==null){var et=we.index;return et<_e?(J.flags|=Xn,_e):et}else return J.flags|=Xn,_e}function h(J){return e&&J.alternate===null&&(J.flags|=Xn),J}function g(J,_e,ee,we){if(_e===null||_e.tag!==C){var et=Xg(ee,J.mode,we);return et.return=J,et}else{var $e=l(_e,ee);return $e.return=J,$e}}function E(J,_e,ee,we){var et=ee.type;if(et===ai)return U(J,_e,ee.props.children,we,ee.key);if(_e!==null&&(_e.elementType===et||lb(_e,ee)||typeof et=="object"&&et!==null&&et.$$typeof===_t&&n0(et)===_e.type)){var $e=l(_e,ee.props);return $e.ref=uc(J,_e,ee),$e.return=J,$e._debugSource=ee._source,$e._debugOwner=ee._owner,$e}var Tt=Wg(ee,J.mode,we);return Tt.ref=uc(J,_e,ee),Tt.return=J,Tt}function w(J,_e,ee,we){if(_e===null||_e.tag!==x||_e.stateNode.containerInfo!==ee.containerInfo||_e.stateNode.implementation!==ee.implementation){var et=jg(ee,J.mode,we);return et.return=J,et}else{var $e=l(_e,ee.children||[]);return $e.return=J,$e}}function U(J,_e,ee,we,et){if(_e===null||_e.tag!==L){var $e=xo(ee,J.mode,we,et);return $e.return=J,$e}else{var Tt=l(_e,ee);return Tt.return=J,Tt}}function j(J,_e,ee){if(typeof _e=="string"&&_e!==""||typeof _e=="number"){var we=Xg(""+_e,J.mode,ee);return we.return=J,we}if(typeof _e=="object"&&_e!==null){switch(_e.$$typeof){case Oi:{var et=Wg(_e,J.mode,ee);return et.ref=uc(J,null,_e),et.return=J,et}case Ti:{var $e=jg(_e,J.mode,ee);return $e.return=J,$e}case _t:{var Tt=_e._payload,Nt=_e._init;return j(J,Nt(Tt),ee)}}if(Xt(_e)||He(_e)){var Sn=xo(_e,J.mode,ee,null);return Sn.return=J,Sn}cd(J,_e)}return typeof _e=="function"&&fd(J),null}function W(J,_e,ee,we){var et=_e!==null?_e.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number")return et!==null?null:g(J,_e,""+ee,we);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case Oi:return ee.key===et?E(J,_e,ee,we):null;case Ti:return ee.key===et?w(J,_e,ee,we):null;case _t:{var $e=ee._payload,Tt=ee._init;return W(J,_e,Tt($e),we)}}if(Xt(ee)||He(ee))return et!==null?null:U(J,_e,ee,we,null);cd(J,ee)}return typeof ee=="function"&&fd(J),null}function re(J,_e,ee,we,et){if(typeof we=="string"&&we!==""||typeof we=="number"){var $e=J.get(ee)||null;return g(_e,$e,""+we,et)}if(typeof we=="object"&&we!==null){switch(we.$$typeof){case Oi:{var Tt=J.get(we.key===null?ee:we.key)||null;return E(_e,Tt,we,et)}case Ti:{var Nt=J.get(we.key===null?ee:we.key)||null;return w(_e,Nt,we,et)}case _t:var Sn=we._payload,tn=we._init;return re(J,_e,ee,tn(Sn),et)}if(Xt(we)||He(we)){var kn=J.get(ee)||null;return U(_e,kn,we,et,null)}cd(_e,we)}return typeof we=="function"&&fd(_e),null}function oe(J,_e,ee){{if(typeof J!="object"||J===null)return _e;switch(J.$$typeof){case Oi:case Ti:t0(J,ee);var we=J.key;if(typeof we!="string")break;if(_e===null){_e=new Set,_e.add(we);break}if(!_e.has(we)){_e.add(we);break}d("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",we);break;case _t:var et=J._payload,$e=J._init;oe($e(et),_e,ee);break}}return _e}function ge(J,_e,ee,we){for(var et=null,$e=0;$e<ee.length;$e++){var Tt=ee[$e];et=oe(Tt,et,J)}for(var Nt=null,Sn=null,tn=_e,kn=0,nn=0,Pn=null;tn!==null&&nn<ee.length;nn++){tn.index>nn?(Pn=tn,tn=null):Pn=tn.sibling;var Di=W(J,tn,ee[nn],we);if(Di===null){tn===null&&(tn=Pn);break}e&&tn&&Di.alternate===null&&t(J,tn),kn=c(Di,kn,nn),Sn===null?Nt=Di:Sn.sibling=Di,Sn=Di,tn=Pn}if(nn===ee.length){if(r(J,tn),gi()){var Mi=nn;Qo(J,Mi)}return Nt}if(tn===null){for(;nn<ee.length;nn++){var pr=j(J,ee[nn],we);pr!==null&&(kn=c(pr,kn,nn),Sn===null?Nt=pr:Sn.sibling=pr,Sn=pr)}if(gi()){var Gi=nn;Qo(J,Gi)}return Nt}for(var Wi=a(J,tn);nn<ee.length;nn++){var Li=re(Wi,J,nn,ee[nn],we);Li!==null&&(e&&Li.alternate!==null&&Wi.delete(Li.key===null?nn:Li.key),kn=c(Li,kn,nn),Sn===null?Nt=Li:Sn.sibling=Li,Sn=Li)}if(e&&Wi.forEach(function(Cl){return t(J,Cl)}),gi()){var Ia=nn;Qo(J,Ia)}return Nt}function Ye(J,_e,ee,we){var et=He(ee);if(typeof et!="function")throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");{typeof Symbol=="function"&&ee[Symbol.toStringTag]==="Generator"&&(Ym||d("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."),Ym=!0),ee.entries===et&&(jm||d("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),jm=!0);var $e=et.call(ee);if($e)for(var Tt=null,Nt=$e.next();!Nt.done;Nt=$e.next()){var Sn=Nt.value;Tt=oe(Sn,Tt,J)}}var tn=et.call(ee);if(tn==null)throw new Error("An iterable object provided no iterator.");for(var kn=null,nn=null,Pn=_e,Di=0,Mi=0,pr=null,Gi=tn.next();Pn!==null&&!Gi.done;Mi++,Gi=tn.next()){Pn.index>Mi?(pr=Pn,Pn=null):pr=Pn.sibling;var Wi=W(J,Pn,Gi.value,we);if(Wi===null){Pn===null&&(Pn=pr);break}e&&Pn&&Wi.alternate===null&&t(J,Pn),Di=c(Wi,Di,Mi),nn===null?kn=Wi:nn.sibling=Wi,nn=Wi,Pn=pr}if(Gi.done){if(r(J,Pn),gi()){var Li=Mi;Qo(J,Li)}return kn}if(Pn===null){for(;!Gi.done;Mi++,Gi=tn.next()){var Ia=j(J,Gi.value,we);Ia!==null&&(Di=c(Ia,Di,Mi),nn===null?kn=Ia:nn.sibling=Ia,nn=Ia)}if(gi()){var Cl=Mi;Qo(J,Cl)}return kn}for(var Hc=a(J,Pn);!Gi.done;Mi++,Gi=tn.next()){var ua=re(Hc,J,Mi,Gi.value,we);ua!==null&&(e&&ua.alternate!==null&&Hc.delete(ua.key===null?Mi:ua.key),Di=c(ua,Di,Mi),nn===null?kn=ua:nn.sibling=ua,nn=ua)}if(e&&Hc.forEach(function(qN){return t(J,qN)}),gi()){var YN=Mi;Qo(J,YN)}return kn}function yt(J,_e,ee,we){if(_e!==null&&_e.tag===C){r(J,_e.sibling);var et=l(_e,ee);return et.return=J,et}r(J,_e);var $e=Xg(ee,J.mode,we);return $e.return=J,$e}function ht(J,_e,ee,we){for(var et=ee.key,$e=_e;$e!==null;){if($e.key===et){var Tt=ee.type;if(Tt===ai){if($e.tag===L){r(J,$e.sibling);var Nt=l($e,ee.props.children);return Nt.return=J,Nt._debugSource=ee._source,Nt._debugOwner=ee._owner,Nt}}else if($e.elementType===Tt||lb($e,ee)||typeof Tt=="object"&&Tt!==null&&Tt.$$typeof===_t&&n0(Tt)===$e.type){r(J,$e.sibling);var Sn=l($e,ee.props);return Sn.ref=uc(J,$e,ee),Sn.return=J,Sn._debugSource=ee._source,Sn._debugOwner=ee._owner,Sn}r(J,$e);break}else t(J,$e);$e=$e.sibling}if(ee.type===ai){var tn=xo(ee.props.children,J.mode,we,ee.key);return tn.return=J,tn}else{var kn=Wg(ee,J.mode,we);return kn.ref=uc(J,_e,ee),kn.return=J,kn}}function Qt(J,_e,ee,we){for(var et=ee.key,$e=_e;$e!==null;){if($e.key===et)if($e.tag===x&&$e.stateNode.containerInfo===ee.containerInfo&&$e.stateNode.implementation===ee.implementation){r(J,$e.sibling);var Tt=l($e,ee.children||[]);return Tt.return=J,Tt}else{r(J,$e);break}else t(J,$e);$e=$e.sibling}var Nt=jg(ee,J.mode,we);return Nt.return=J,Nt}function jt(J,_e,ee,we){var et=typeof ee=="object"&&ee!==null&&ee.type===ai&&ee.key===null;if(et&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case Oi:return h(ht(J,_e,ee,we));case Ti:return h(Qt(J,_e,ee,we));case _t:var $e=ee._payload,Tt=ee._init;return jt(J,_e,Tt($e),we)}if(Xt(ee))return ge(J,_e,ee,we);if(He(ee))return Ye(J,_e,ee,we);cd(J,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"?h(yt(J,_e,""+ee,we)):(typeof ee=="function"&&fd(J),r(J,_e))}return jt}var ul=i0(!0),r0=i0(!1);function b1(e,t){if(e!==null&&t.child!==e.child)throw new Error("Resuming work not yet implemented.");if(t.child!==null){var r=t.child,a=fs(r,r.pendingProps);for(t.child=a,a.return=t;r.sibling!==null;)r=r.sibling,a=a.sibling=fs(r,r.pendingProps),a.return=t;a.sibling=null}}function M1(e,t){for(var r=e.child;r!==null;)fN(r,t),r=r.sibling}var Zm=oo(null),Qm;Qm={};var dd=null,cl=null,Jm=null,hd=!1;function pd(){dd=null,cl=null,Jm=null,hd=!1}function a0(){hd=!0}function o0(){hd=!1}function s0(e,t,r){Ai(Zm,t._currentValue,e),t._currentValue=r,t._currentRenderer!==void 0&&t._currentRenderer!==null&&t._currentRenderer!==Qm&&d("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."),t._currentRenderer=Qm}function ev(e,t){var r=Zm.current;Ci(Zm,t),e._currentValue=r}function tv(e,t,r){for(var a=e;a!==null;){var l=a.alternate;if(qs(a.childLanes,t)?l!==null&&!qs(l.childLanes,t)&&(l.childLanes=kt(l.childLanes,t)):(a.childLanes=kt(a.childLanes,t),l!==null&&(l.childLanes=kt(l.childLanes,t))),a===r)break;a=a.return}a!==r&&d("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.")}function T1(e,t,r){R1(e,t,r)}function R1(e,t,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var l=void 0,c=a.dependencies;if(c!==null){l=a.child;for(var h=c.firstContext;h!==null;){if(h.context===t){if(a.tag===v){var g=Cu(r),E=La(Cn,g);E.tag=vd;var w=a.updateQueue;if(w!==null){var U=w.shared,j=U.pending;j===null?E.next=E:(E.next=j.next,j.next=E),U.pending=E}}a.lanes=kt(a.lanes,r);var W=a.alternate;W!==null&&(W.lanes=kt(W.lanes,r)),tv(a.return,r,e),c.lanes=kt(c.lanes,r);break}h=h.next}}else if(a.tag===F)l=a.type===e.type?null:a.child;else if(a.tag===D){var re=a.return;if(re===null)throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");re.lanes=kt(re.lanes,r);var oe=re.alternate;oe!==null&&(oe.lanes=kt(oe.lanes,r)),tv(re,r,e),l=a.sibling}else l=a.child;if(l!==null)l.return=a;else for(l=a;l!==null;){if(l===e){l=null;break}var ge=l.sibling;if(ge!==null){ge.return=l.return,l=ge;break}l=l.return}a=l}}function fl(e,t){dd=e,cl=null,Jm=null;var r=e.dependencies;if(r!==null){var a=r.firstContext;a!==null&&(lr(r.lanes,t)&&Mc(),r.firstContext=null)}}function jn(e){hd&&d("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");var t=e._currentValue;if(Jm!==e){var r={context:e,memoizedValue:t,next:null};if(cl===null){if(dd===null)throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");cl=r,dd.dependencies={lanes:Re,firstContext:r}}else cl=cl.next=r}return t}var is=null;function nv(e){is===null?is=[e]:is.push(e)}function C1(){if(is!==null){for(var e=0;e<is.length;e++){var t=is[e],r=t.interleaved;if(r!==null){t.interleaved=null;var a=r.next,l=t.pending;if(l!==null){var c=l.next;l.next=a,r.next=c}t.pending=r}}is=null}}function l0(e,t,r,a){var l=t.interleaved;return l===null?(r.next=r,nv(t)):(r.next=l.next,l.next=r),t.interleaved=r,md(e,a)}function A1(e,t,r,a){var l=t.interleaved;l===null?(r.next=r,nv(t)):(r.next=l.next,l.next=r),t.interleaved=r}function w1(e,t,r,a){var l=t.interleaved;return l===null?(r.next=r,nv(t)):(r.next=l.next,l.next=r),t.interleaved=r,md(e,a)}function Ji(e,t){return md(e,t)}var D1=md;function md(e,t){e.lanes=kt(e.lanes,t);var r=e.alternate;r!==null&&(r.lanes=kt(r.lanes,t)),r===null&&(e.flags&(Xn|xa))!==bt&&rb(e);for(var a=e,l=e.return;l!==null;)l.childLanes=kt(l.childLanes,t),r=l.alternate,r!==null?r.childLanes=kt(r.childLanes,t):(l.flags&(Xn|xa))!==bt&&rb(e),a=l,l=l.return;if(a.tag===y){var c=a.stateNode;return c}else return null}var u0=0,c0=1,vd=2,iv=3,gd=!1,rv,_d;rv=!1,_d=null;function av(e){var t={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:Re},effects:null};e.updateQueue=t}function f0(e,t){var r=t.updateQueue,a=e.updateQueue;if(r===a){var l={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects};t.updateQueue=l}}function La(e,t){var r={eventTime:e,lane:t,tag:u0,payload:null,callback:null,next:null};return r}function co(e,t,r){var a=e.updateQueue;if(a===null)return null;var l=a.shared;if(_d===l&&!rv&&(d("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."),rv=!0),AU()){var c=l.pending;return c===null?t.next=t:(t.next=c.next,c.next=t),l.pending=t,D1(e,r)}else return w1(e,l,t,r)}function yd(e,t,r){var a=t.updateQueue;if(a!==null){var l=a.shared;if(MS(r)){var c=l.lanes;c=RS(c,e.pendingLanes);var h=kt(c,r);l.lanes=h,Zp(e,h)}}}function ov(e,t){var r=e.updateQueue,a=e.alternate;if(a!==null){var l=a.updateQueue;if(r===l){var c=null,h=null,g=r.firstBaseUpdate;if(g!==null){var E=g;do{var w={eventTime:E.eventTime,lane:E.lane,tag:E.tag,payload:E.payload,callback:E.callback,next:null};h===null?c=h=w:(h.next=w,h=w),E=E.next}while(E!==null);h===null?c=h=t:(h.next=t,h=t)}else c=h=t;r={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:l.shared,effects:l.effects},e.updateQueue=r;return}}var U=r.lastBaseUpdate;U===null?r.firstBaseUpdate=t:U.next=t,r.lastBaseUpdate=t}function L1(e,t,r,a,l,c){switch(r.tag){case c0:{var h=r.payload;if(typeof h=="function"){a0();var g=h.call(c,a,l);{if(e.mode&Nn){ci(!0);try{h.call(c,a,l)}finally{ci(!1)}}o0()}return g}return h}case iv:e.flags=e.flags&~Bi|ln;case u0:{var E=r.payload,w;if(typeof E=="function"){a0(),w=E.call(c,a,l);{if(e.mode&Nn){ci(!0);try{E.call(c,a,l)}finally{ci(!1)}}o0()}}else w=E;return w==null?a:Ae({},a,w)}case vd:return gd=!0,a}return a}function Sd(e,t,r,a){var l=e.updateQueue;gd=!1,_d=l.shared;var c=l.firstBaseUpdate,h=l.lastBaseUpdate,g=l.shared.pending;if(g!==null){l.shared.pending=null;var E=g,w=E.next;E.next=null,h===null?c=w:h.next=w,h=E;var U=e.alternate;if(U!==null){var j=U.updateQueue,W=j.lastBaseUpdate;W!==h&&(W===null?j.firstBaseUpdate=w:W.next=w,j.lastBaseUpdate=E)}}if(c!==null){var re=l.baseState,oe=Re,ge=null,Ye=null,yt=null,ht=c;do{var Qt=ht.lane,jt=ht.eventTime;if(qs(a,Qt)){if(yt!==null){var _e={eventTime:jt,lane:fi,tag:ht.tag,payload:ht.payload,callback:ht.callback,next:null};yt=yt.next=_e}re=L1(e,l,ht,re,t,r);var ee=ht.callback;if(ee!==null&&ht.lane!==fi){e.flags|=aS;var we=l.effects;we===null?l.effects=[ht]:we.push(ht)}}else{var J={eventTime:jt,lane:Qt,tag:ht.tag,payload:ht.payload,callback:ht.callback,next:null};yt===null?(Ye=yt=J,ge=re):yt=yt.next=J,oe=kt(oe,Qt)}if(ht=ht.next,ht===null){if(g=l.shared.pending,g===null)break;var et=g,$e=et.next;et.next=null,ht=$e,l.lastBaseUpdate=et,l.shared.pending=null}}while(!0);yt===null&&(ge=re),l.baseState=ge,l.firstBaseUpdate=Ye,l.lastBaseUpdate=yt;var Tt=l.shared.interleaved;if(Tt!==null){var Nt=Tt;do oe=kt(oe,Nt.lane),Nt=Nt.next;while(Nt!==Tt)}else c===null&&(l.shared.lanes=Re);Fc(oe),e.lanes=oe,e.memoizedState=re}_d=null}function U1(e,t){if(typeof e!="function")throw new Error("Invalid argument passed as callback. Expected a function. Instead "+("received: "+e));e.call(t)}function d0(){gd=!1}function xd(){return gd}function h0(e,t,r){var a=t.effects;if(t.effects=null,a!==null)for(var l=0;l<a.length;l++){var c=a[l],h=c.callback;h!==null&&(c.callback=null,U1(h,r))}}var cc={},fo=oo(cc),fc=oo(cc),Ed=oo(cc);function bd(e){if(e===cc)throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");return e}function p0(){var e=bd(Ed.current);return e}function sv(e,t){Ai(Ed,t,e),Ai(fc,e,e),Ai(fo,cc,e);var r=$w(t);Ci(fo,e),Ai(fo,r,e)}function dl(e){Ci(fo,e),Ci(fc,e),Ci(Ed,e)}function lv(){var e=bd(fo.current);return e}function m0(e){bd(Ed.current);var t=bd(fo.current),r=Kw(t,e.type);t!==r&&(Ai(fc,e,e),Ai(fo,r,e))}function uv(e){fc.current===e&&(Ci(fo,e),Ci(fc,e))}var N1=0,v0=1,g0=1,dc=2,Ir=oo(N1);function cv(e,t){return(e&t)!==0}function hl(e){return e&v0}function fv(e,t){return e&v0|t}function P1(e,t){return e|t}function ho(e,t){Ai(Ir,t,e)}function pl(e){Ci(Ir,e)}function O1(e,t){var r=e.memoizedState;return r!==null?r.dehydrated!==null:(e.memoizedProps,!0)}function Md(e){for(var t=e;t!==null;){if(t.tag===$){var r=t.memoizedState;if(r!==null){var a=r.dehydrated;if(a===null||Px(a)||wm(a))return t}}else if(t.tag===V&&t.memoizedProps.revealOrder!==void 0){var l=(t.flags&ln)!==bt;if(l)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)return null;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var er=0,$n=1,na=2,Kn=4,_i=8,dv=[];function hv(){for(var e=0;e<dv.length;e++){var t=dv[e];t._workInProgressVersionPrimary=null}dv.length=0}function F1(e,t){var r=t._getVersion,a=r(t._source);e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,a]:e.mutableSourceEagerHydrationData.push(t,a)}var Qe=i.ReactCurrentDispatcher,hc=i.ReactCurrentBatchConfig,pv,ml;pv=new Set;var rs=Re,yn=null,Zn=null,Qn=null,Td=!1,pc=!1,mc=0,I1=0,z1=25,be=null,Er=null,po=-1,mv=!1;function hn(){{var e=be;Er===null?Er=[e]:Er.push(e)}}function Xe(){{var e=be;Er!==null&&(po++,Er[po]!==e&&B1(e))}}function vl(e){e!=null&&!Xt(e)&&d("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",be,typeof e)}function B1(e){{var t=Ot(yn);if(!pv.has(t)&&(pv.add(t),Er!==null)){for(var r="",a=30,l=0;l<=po;l++){for(var c=Er[l],h=l===po?e:c,g=l+1+". "+c;g.length<a;)g+=" ";g+=h+`
`,r+=g}d(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,t,r)}}}function wi(){throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`)}function vv(e,t){if(mv)return!1;if(t===null)return d("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",be),!1;e.length!==t.length&&d(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,be,"["+t.join(", ")+"]","["+e.join(", ")+"]");for(var r=0;r<t.length&&r<e.length;r++)if(!fr(e[r],t[r]))return!1;return!0}function gl(e,t,r,a,l,c){rs=c,yn=t,Er=e!==null?e._debugHookTypes:null,po=-1,mv=e!==null&&e.type!==t.type,t.memoizedState=null,t.updateQueue=null,t.lanes=Re,e!==null&&e.memoizedState!==null?Qe.current=B0:Er!==null?Qe.current=z0:Qe.current=I0;var h=r(a,l);if(pc){var g=0;do{if(pc=!1,mc=0,g>=z1)throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");g+=1,mv=!1,Zn=null,Qn=null,t.updateQueue=null,po=-1,Qe.current=k0,h=r(a,l)}while(pc)}Qe.current=zd,t._debugHookTypes=Er;var E=Zn!==null&&Zn.next!==null;if(rs=Re,yn=null,Zn=null,Qn=null,be=null,Er=null,po=-1,e!==null&&(e.flags&Ea)!==(t.flags&Ea)&&(e.mode&Kt)!==St&&d("Internal React error: Expected static flag was missing. Please notify the React team."),Td=!1,E)throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");return h}function _l(){var e=mc!==0;return mc=0,e}function _0(e,t,r){t.updateQueue=e.updateQueue,(t.mode&Qr)!==St?t.flags&=-50333701:t.flags&=-2053,e.lanes=Rf(e.lanes,r)}function y0(){if(Qe.current=zd,Td){for(var e=yn.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Td=!1}rs=Re,yn=null,Zn=null,Qn=null,Er=null,po=-1,be=null,U0=!1,pc=!1,mc=0}function ia(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qn===null?yn.memoizedState=Qn=e:Qn=Qn.next=e,Qn}function br(){var e;if(Zn===null){var t=yn.alternate;t!==null?e=t.memoizedState:e=null}else e=Zn.next;var r;if(Qn===null?r=yn.memoizedState:r=Qn.next,r!==null)Qn=r,r=Qn.next,Zn=e;else{if(e===null)throw new Error("Rendered more hooks than during the previous render.");Zn=e;var a={memoizedState:Zn.memoizedState,baseState:Zn.baseState,baseQueue:Zn.baseQueue,queue:Zn.queue,next:null};Qn===null?yn.memoizedState=Qn=a:Qn=Qn.next=a}return Qn}function S0(){return{lastEffect:null,stores:null}}function gv(e,t){return typeof t=="function"?t(e):t}function _v(e,t,r){var a=ia(),l;r!==void 0?l=r(t):l=t,a.memoizedState=a.baseState=l;var c={pending:null,interleaved:null,lanes:Re,dispatch:null,lastRenderedReducer:e,lastRenderedState:l};a.queue=c;var h=c.dispatch=G1.bind(null,yn,c);return[a.memoizedState,h]}function yv(e,t,r){var a=br(),l=a.queue;if(l===null)throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");l.lastRenderedReducer=e;var c=Zn,h=c.baseQueue,g=l.pending;if(g!==null){if(h!==null){var E=h.next,w=g.next;h.next=w,g.next=E}c.baseQueue!==h&&d("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."),c.baseQueue=h=g,l.pending=null}if(h!==null){var U=h.next,j=c.baseState,W=null,re=null,oe=null,ge=U;do{var Ye=ge.lane;if(qs(rs,Ye)){if(oe!==null){var ht={lane:fi,action:ge.action,hasEagerState:ge.hasEagerState,eagerState:ge.eagerState,next:null};oe=oe.next=ht}if(ge.hasEagerState)j=ge.eagerState;else{var Qt=ge.action;j=e(j,Qt)}}else{var yt={lane:Ye,action:ge.action,hasEagerState:ge.hasEagerState,eagerState:ge.eagerState,next:null};oe===null?(re=oe=yt,W=j):oe=oe.next=yt,yn.lanes=kt(yn.lanes,Ye),Fc(Ye)}ge=ge.next}while(ge!==null&&ge!==U);oe===null?W=j:oe.next=re,fr(j,a.memoizedState)||Mc(),a.memoizedState=j,a.baseState=W,a.baseQueue=oe,l.lastRenderedState=j}var jt=l.interleaved;if(jt!==null){var J=jt;do{var _e=J.lane;yn.lanes=kt(yn.lanes,_e),Fc(_e),J=J.next}while(J!==jt)}else h===null&&(l.lanes=Re);var ee=l.dispatch;return[a.memoizedState,ee]}function Sv(e,t,r){var a=br(),l=a.queue;if(l===null)throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");l.lastRenderedReducer=e;var c=l.dispatch,h=l.pending,g=a.memoizedState;if(h!==null){l.pending=null;var E=h.next,w=E;do{var U=w.action;g=e(g,U),w=w.next}while(w!==E);fr(g,a.memoizedState)||Mc(),a.memoizedState=g,a.baseQueue===null&&(a.baseState=g),l.lastRenderedState=g}return[g,c]}function VB(e,t,r){}function GB(e,t,r){}function xv(e,t,r){var a=yn,l=ia(),c,h=gi();if(h){if(r===void 0)throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");c=r(),ml||c!==r()&&(d("The result of getServerSnapshot should be cached to avoid an infinite loop"),ml=!0)}else{if(c=t(),!ml){var g=t();fr(c,g)||(d("The result of getSnapshot should be cached to avoid an infinite loop"),ml=!0)}var E=ih();if(E===null)throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");Tf(E,rs)||x0(a,t,c)}l.memoizedState=c;var w={value:c,getSnapshot:t};return l.queue=w,Dd(b0.bind(null,a,w,e),[e]),a.flags|=Za,vc($n|_i,E0.bind(null,a,w,c,t),void 0,null),c}function Rd(e,t,r){var a=yn,l=br(),c=t();if(!ml){var h=t();fr(c,h)||(d("The result of getSnapshot should be cached to avoid an infinite loop"),ml=!0)}var g=l.memoizedState,E=!fr(g,c);E&&(l.memoizedState=c,Mc());var w=l.queue;if(_c(b0.bind(null,a,w,e),[e]),w.getSnapshot!==t||E||Qn!==null&&Qn.memoizedState.tag&$n){a.flags|=Za,vc($n|_i,E0.bind(null,a,w,c,t),void 0,null);var U=ih();if(U===null)throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");Tf(U,rs)||x0(a,t,c)}return c}function x0(e,t,r){e.flags|=gp;var a={getSnapshot:t,value:r},l=yn.updateQueue;if(l===null)l=S0(),yn.updateQueue=l,l.stores=[a];else{var c=l.stores;c===null?l.stores=[a]:c.push(a)}}function E0(e,t,r,a){t.value=r,t.getSnapshot=a,M0(t)&&T0(e)}function b0(e,t,r){var a=function(){M0(t)&&T0(e)};return r(a)}function M0(e){var t=e.getSnapshot,r=e.value;try{var a=t();return!fr(r,a)}catch{return!0}}function T0(e){var t=Ji(e,wt);t!==null&&ni(t,e,wt,Cn)}function Cd(e){var t=ia();typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e;var r={pending:null,interleaved:null,lanes:Re,dispatch:null,lastRenderedReducer:gv,lastRenderedState:e};t.queue=r;var a=r.dispatch=W1.bind(null,yn,r);return[t.memoizedState,a]}function Ev(e){return yv(gv)}function bv(e){return Sv(gv)}function vc(e,t,r,a){var l={tag:e,create:t,destroy:r,deps:a,next:null},c=yn.updateQueue;if(c===null)c=S0(),yn.updateQueue=c,c.lastEffect=l.next=l;else{var h=c.lastEffect;if(h===null)c.lastEffect=l.next=l;else{var g=h.next;h.next=l,l.next=g,c.lastEffect=l}}return l}function Mv(e){var t=ia();{var r={current:e};return t.memoizedState=r,r}}function Ad(e){var t=br();return t.memoizedState}function gc(e,t,r,a){var l=ia(),c=a===void 0?null:a;yn.flags|=e,l.memoizedState=vc($n|t,r,void 0,c)}function wd(e,t,r,a){var l=br(),c=a===void 0?null:a,h=void 0;if(Zn!==null){var g=Zn.memoizedState;if(h=g.destroy,c!==null){var E=g.deps;if(vv(c,E)){l.memoizedState=vc(t,r,h,c);return}}}yn.flags|=e,l.memoizedState=vc($n|t,r,h,c)}function Dd(e,t){return(yn.mode&Qr)!==St?gc(xp|Za|Sp,_i,e,t):gc(Za|Sp,_i,e,t)}function _c(e,t){return wd(Za,_i,e,t)}function Tv(e,t){return gc(sn,na,e,t)}function Ld(e,t){return wd(sn,na,e,t)}function Rv(e,t){var r=sn;return r|=Ho,(yn.mode&Qr)!==St&&(r|=Qa),gc(r,Kn,e,t)}function Ud(e,t){return wd(sn,Kn,e,t)}function R0(e,t){if(typeof t=="function"){var r=t,a=e();return r(a),function(){r(null)}}else if(t!=null){var l=t;l.hasOwnProperty("current")||d("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.","an object with keys {"+Object.keys(l).join(", ")+"}");var c=e();return l.current=c,function(){l.current=null}}}function Cv(e,t,r){typeof t!="function"&&d("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",t!==null?typeof t:"null");var a=r!=null?r.concat([e]):null,l=sn;return l|=Ho,(yn.mode&Qr)!==St&&(l|=Qa),gc(l,Kn,R0.bind(null,t,e),a)}function Nd(e,t,r){typeof t!="function"&&d("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",t!==null?typeof t:"null");var a=r!=null?r.concat([e]):null;return wd(sn,Kn,R0.bind(null,t,e),a)}function k1(e,t){}var Pd=k1;function Av(e,t){var r=ia(),a=t===void 0?null:t;return r.memoizedState=[e,a],e}function Od(e,t){var r=br(),a=t===void 0?null:t,l=r.memoizedState;if(l!==null&&a!==null){var c=l[1];if(vv(a,c))return l[0]}return r.memoizedState=[e,a],e}function wv(e,t){var r=ia(),a=t===void 0?null:t,l=e();return r.memoizedState=[l,a],l}function Fd(e,t){var r=br(),a=t===void 0?null:t,l=r.memoizedState;if(l!==null&&a!==null){var c=l[1];if(vv(a,c))return l[0]}var h=e();return r.memoizedState=[h,a],h}function Dv(e){var t=ia();return t.memoizedState=e,e}function C0(e){var t=br(),r=Zn,a=r.memoizedState;return w0(t,a,e)}function A0(e){var t=br();if(Zn===null)return t.memoizedState=e,e;var r=Zn.memoizedState;return w0(t,r,e)}function w0(e,t,r){var a=!TC(rs);if(a){if(!fr(r,t)){var l=TS();yn.lanes=kt(yn.lanes,l),Fc(l),e.baseState=!0}return t}else return e.baseState&&(e.baseState=!1,Mc()),e.memoizedState=r,r}function H1(e,t,r){var a=Nr();di(PC(a,Ma)),e(!0);var l=hc.transition;hc.transition={};var c=hc.transition;hc.transition._updatedFibers=new Set;try{e(!1),t()}finally{if(di(a),hc.transition=l,l===null&&c._updatedFibers){var h=c._updatedFibers.size;h>10&&f("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."),c._updatedFibers.clear()}}}function Lv(){var e=Cd(!1),t=e[0],r=e[1],a=H1.bind(null,r),l=ia();return l.memoizedState=a,[t,a]}function D0(){var e=Ev(),t=e[0],r=br(),a=r.memoizedState;return[t,a]}function L0(){var e=bv(),t=e[0],r=br(),a=r.memoizedState;return[t,a]}var U0=!1;function V1(){return U0}function Uv(){var e=ia(),t=ih(),r=t.identifierPrefix,a;if(gi()){var l=a1();a=":"+r+"R"+l;var c=mc++;c>0&&(a+="H"+c.toString(32)),a+=":"}else{var h=I1++;a=":"+r+"r"+h.toString(32)+":"}return e.memoizedState=a,a}function Id(){var e=br(),t=e.memoizedState;return t}function G1(e,t,r){typeof arguments[3]=="function"&&d("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");var a=yo(e),l={lane:a,action:r,hasEagerState:!1,eagerState:null,next:null};if(N0(e))P0(t,l);else{var c=l0(e,t,l,a);if(c!==null){var h=Vi();ni(c,e,a,h),O0(c,t,a)}}F0(e,a)}function W1(e,t,r){typeof arguments[3]=="function"&&d("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");var a=yo(e),l={lane:a,action:r,hasEagerState:!1,eagerState:null,next:null};if(N0(e))P0(t,l);else{var c=e.alternate;if(e.lanes===Re&&(c===null||c.lanes===Re)){var h=t.lastRenderedReducer;if(h!==null){var g;g=Qe.current,Qe.current=zr;try{var E=t.lastRenderedState,w=h(E,r);if(l.hasEagerState=!0,l.eagerState=w,fr(w,E)){A1(e,t,l,a);return}}catch{}finally{Qe.current=g}}}var U=l0(e,t,l,a);if(U!==null){var j=Vi();ni(U,e,a,j),O0(U,t,a)}}F0(e,a)}function N0(e){var t=e.alternate;return e===yn||t!==null&&t===yn}function P0(e,t){pc=Td=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function O0(e,t,r){if(MS(r)){var a=t.lanes;a=RS(a,e.pendingLanes);var l=kt(a,r);t.lanes=l,Zp(e,l)}}function F0(e,t,r){Rp(e,t)}var zd={readContext:jn,useCallback:wi,useContext:wi,useEffect:wi,useImperativeHandle:wi,useInsertionEffect:wi,useLayoutEffect:wi,useMemo:wi,useReducer:wi,useRef:wi,useState:wi,useDebugValue:wi,useDeferredValue:wi,useTransition:wi,useMutableSource:wi,useSyncExternalStore:wi,useId:wi,unstable_isNewReconciler:le},I0=null,z0=null,B0=null,k0=null,ra=null,zr=null,Bd=null;{var Nv=function(){d("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().")},Dt=function(){d("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks")};I0={readContext:function(e){return jn(e)},useCallback:function(e,t){return be="useCallback",hn(),vl(t),Av(e,t)},useContext:function(e){return be="useContext",hn(),jn(e)},useEffect:function(e,t){return be="useEffect",hn(),vl(t),Dd(e,t)},useImperativeHandle:function(e,t,r){return be="useImperativeHandle",hn(),vl(r),Cv(e,t,r)},useInsertionEffect:function(e,t){return be="useInsertionEffect",hn(),vl(t),Tv(e,t)},useLayoutEffect:function(e,t){return be="useLayoutEffect",hn(),vl(t),Rv(e,t)},useMemo:function(e,t){be="useMemo",hn(),vl(t);var r=Qe.current;Qe.current=ra;try{return wv(e,t)}finally{Qe.current=r}},useReducer:function(e,t,r){be="useReducer",hn();var a=Qe.current;Qe.current=ra;try{return _v(e,t,r)}finally{Qe.current=a}},useRef:function(e){return be="useRef",hn(),Mv(e)},useState:function(e){be="useState",hn();var t=Qe.current;Qe.current=ra;try{return Cd(e)}finally{Qe.current=t}},useDebugValue:function(e,t){return be="useDebugValue",hn(),void 0},useDeferredValue:function(e){return be="useDeferredValue",hn(),Dv(e)},useTransition:function(){return be="useTransition",hn(),Lv()},useMutableSource:function(e,t,r){return be="useMutableSource",hn(),void 0},useSyncExternalStore:function(e,t,r){return be="useSyncExternalStore",hn(),xv(e,t,r)},useId:function(){return be="useId",hn(),Uv()},unstable_isNewReconciler:le},z0={readContext:function(e){return jn(e)},useCallback:function(e,t){return be="useCallback",Xe(),Av(e,t)},useContext:function(e){return be="useContext",Xe(),jn(e)},useEffect:function(e,t){return be="useEffect",Xe(),Dd(e,t)},useImperativeHandle:function(e,t,r){return be="useImperativeHandle",Xe(),Cv(e,t,r)},useInsertionEffect:function(e,t){return be="useInsertionEffect",Xe(),Tv(e,t)},useLayoutEffect:function(e,t){return be="useLayoutEffect",Xe(),Rv(e,t)},useMemo:function(e,t){be="useMemo",Xe();var r=Qe.current;Qe.current=ra;try{return wv(e,t)}finally{Qe.current=r}},useReducer:function(e,t,r){be="useReducer",Xe();var a=Qe.current;Qe.current=ra;try{return _v(e,t,r)}finally{Qe.current=a}},useRef:function(e){return be="useRef",Xe(),Mv(e)},useState:function(e){be="useState",Xe();var t=Qe.current;Qe.current=ra;try{return Cd(e)}finally{Qe.current=t}},useDebugValue:function(e,t){return be="useDebugValue",Xe(),void 0},useDeferredValue:function(e){return be="useDeferredValue",Xe(),Dv(e)},useTransition:function(){return be="useTransition",Xe(),Lv()},useMutableSource:function(e,t,r){return be="useMutableSource",Xe(),void 0},useSyncExternalStore:function(e,t,r){return be="useSyncExternalStore",Xe(),xv(e,t,r)},useId:function(){return be="useId",Xe(),Uv()},unstable_isNewReconciler:le},B0={readContext:function(e){return jn(e)},useCallback:function(e,t){return be="useCallback",Xe(),Od(e,t)},useContext:function(e){return be="useContext",Xe(),jn(e)},useEffect:function(e,t){return be="useEffect",Xe(),_c(e,t)},useImperativeHandle:function(e,t,r){return be="useImperativeHandle",Xe(),Nd(e,t,r)},useInsertionEffect:function(e,t){return be="useInsertionEffect",Xe(),Ld(e,t)},useLayoutEffect:function(e,t){return be="useLayoutEffect",Xe(),Ud(e,t)},useMemo:function(e,t){be="useMemo",Xe();var r=Qe.current;Qe.current=zr;try{return Fd(e,t)}finally{Qe.current=r}},useReducer:function(e,t,r){be="useReducer",Xe();var a=Qe.current;Qe.current=zr;try{return yv(e,t,r)}finally{Qe.current=a}},useRef:function(e){return be="useRef",Xe(),Ad()},useState:function(e){be="useState",Xe();var t=Qe.current;Qe.current=zr;try{return Ev(e)}finally{Qe.current=t}},useDebugValue:function(e,t){return be="useDebugValue",Xe(),Pd()},useDeferredValue:function(e){return be="useDeferredValue",Xe(),C0(e)},useTransition:function(){return be="useTransition",Xe(),D0()},useMutableSource:function(e,t,r){return be="useMutableSource",Xe(),void 0},useSyncExternalStore:function(e,t,r){return be="useSyncExternalStore",Xe(),Rd(e,t)},useId:function(){return be="useId",Xe(),Id()},unstable_isNewReconciler:le},k0={readContext:function(e){return jn(e)},useCallback:function(e,t){return be="useCallback",Xe(),Od(e,t)},useContext:function(e){return be="useContext",Xe(),jn(e)},useEffect:function(e,t){return be="useEffect",Xe(),_c(e,t)},useImperativeHandle:function(e,t,r){return be="useImperativeHandle",Xe(),Nd(e,t,r)},useInsertionEffect:function(e,t){return be="useInsertionEffect",Xe(),Ld(e,t)},useLayoutEffect:function(e,t){return be="useLayoutEffect",Xe(),Ud(e,t)},useMemo:function(e,t){be="useMemo",Xe();var r=Qe.current;Qe.current=Bd;try{return Fd(e,t)}finally{Qe.current=r}},useReducer:function(e,t,r){be="useReducer",Xe();var a=Qe.current;Qe.current=Bd;try{return Sv(e,t,r)}finally{Qe.current=a}},useRef:function(e){return be="useRef",Xe(),Ad()},useState:function(e){be="useState",Xe();var t=Qe.current;Qe.current=Bd;try{return bv(e)}finally{Qe.current=t}},useDebugValue:function(e,t){return be="useDebugValue",Xe(),Pd()},useDeferredValue:function(e){return be="useDeferredValue",Xe(),A0(e)},useTransition:function(){return be="useTransition",Xe(),L0()},useMutableSource:function(e,t,r){return be="useMutableSource",Xe(),void 0},useSyncExternalStore:function(e,t,r){return be="useSyncExternalStore",Xe(),Rd(e,t)},useId:function(){return be="useId",Xe(),Id()},unstable_isNewReconciler:le},ra={readContext:function(e){return Nv(),jn(e)},useCallback:function(e,t){return be="useCallback",Dt(),hn(),Av(e,t)},useContext:function(e){return be="useContext",Dt(),hn(),jn(e)},useEffect:function(e,t){return be="useEffect",Dt(),hn(),Dd(e,t)},useImperativeHandle:function(e,t,r){return be="useImperativeHandle",Dt(),hn(),Cv(e,t,r)},useInsertionEffect:function(e,t){return be="useInsertionEffect",Dt(),hn(),Tv(e,t)},useLayoutEffect:function(e,t){return be="useLayoutEffect",Dt(),hn(),Rv(e,t)},useMemo:function(e,t){be="useMemo",Dt(),hn();var r=Qe.current;Qe.current=ra;try{return wv(e,t)}finally{Qe.current=r}},useReducer:function(e,t,r){be="useReducer",Dt(),hn();var a=Qe.current;Qe.current=ra;try{return _v(e,t,r)}finally{Qe.current=a}},useRef:function(e){return be="useRef",Dt(),hn(),Mv(e)},useState:function(e){be="useState",Dt(),hn();var t=Qe.current;Qe.current=ra;try{return Cd(e)}finally{Qe.current=t}},useDebugValue:function(e,t){return be="useDebugValue",Dt(),hn(),void 0},useDeferredValue:function(e){return be="useDeferredValue",Dt(),hn(),Dv(e)},useTransition:function(){return be="useTransition",Dt(),hn(),Lv()},useMutableSource:function(e,t,r){return be="useMutableSource",Dt(),hn(),void 0},useSyncExternalStore:function(e,t,r){return be="useSyncExternalStore",Dt(),hn(),xv(e,t,r)},useId:function(){return be="useId",Dt(),hn(),Uv()},unstable_isNewReconciler:le},zr={readContext:function(e){return Nv(),jn(e)},useCallback:function(e,t){return be="useCallback",Dt(),Xe(),Od(e,t)},useContext:function(e){return be="useContext",Dt(),Xe(),jn(e)},useEffect:function(e,t){return be="useEffect",Dt(),Xe(),_c(e,t)},useImperativeHandle:function(e,t,r){return be="useImperativeHandle",Dt(),Xe(),Nd(e,t,r)},useInsertionEffect:function(e,t){return be="useInsertionEffect",Dt(),Xe(),Ld(e,t)},useLayoutEffect:function(e,t){return be="useLayoutEffect",Dt(),Xe(),Ud(e,t)},useMemo:function(e,t){be="useMemo",Dt(),Xe();var r=Qe.current;Qe.current=zr;try{return Fd(e,t)}finally{Qe.current=r}},useReducer:function(e,t,r){be="useReducer",Dt(),Xe();var a=Qe.current;Qe.current=zr;try{return yv(e,t,r)}finally{Qe.current=a}},useRef:function(e){return be="useRef",Dt(),Xe(),Ad()},useState:function(e){be="useState",Dt(),Xe();var t=Qe.current;Qe.current=zr;try{return Ev(e)}finally{Qe.current=t}},useDebugValue:function(e,t){return be="useDebugValue",Dt(),Xe(),Pd()},useDeferredValue:function(e){return be="useDeferredValue",Dt(),Xe(),C0(e)},useTransition:function(){return be="useTransition",Dt(),Xe(),D0()},useMutableSource:function(e,t,r){return be="useMutableSource",Dt(),Xe(),void 0},useSyncExternalStore:function(e,t,r){return be="useSyncExternalStore",Dt(),Xe(),Rd(e,t)},useId:function(){return be="useId",Dt(),Xe(),Id()},unstable_isNewReconciler:le},Bd={readContext:function(e){return Nv(),jn(e)},useCallback:function(e,t){return be="useCallback",Dt(),Xe(),Od(e,t)},useContext:function(e){return be="useContext",Dt(),Xe(),jn(e)},useEffect:function(e,t){return be="useEffect",Dt(),Xe(),_c(e,t)},useImperativeHandle:function(e,t,r){return be="useImperativeHandle",Dt(),Xe(),Nd(e,t,r)},useInsertionEffect:function(e,t){return be="useInsertionEffect",Dt(),Xe(),Ld(e,t)},useLayoutEffect:function(e,t){return be="useLayoutEffect",Dt(),Xe(),Ud(e,t)},useMemo:function(e,t){be="useMemo",Dt(),Xe();var r=Qe.current;Qe.current=zr;try{return Fd(e,t)}finally{Qe.current=r}},useReducer:function(e,t,r){be="useReducer",Dt(),Xe();var a=Qe.current;Qe.current=zr;try{return Sv(e,t,r)}finally{Qe.current=a}},useRef:function(e){return be="useRef",Dt(),Xe(),Ad()},useState:function(e){be="useState",Dt(),Xe();var t=Qe.current;Qe.current=zr;try{return bv(e)}finally{Qe.current=t}},useDebugValue:function(e,t){return be="useDebugValue",Dt(),Xe(),Pd()},useDeferredValue:function(e){return be="useDeferredValue",Dt(),Xe(),A0(e)},useTransition:function(){return be="useTransition",Dt(),Xe(),L0()},useMutableSource:function(e,t,r){return be="useMutableSource",Dt(),Xe(),void 0},useSyncExternalStore:function(e,t,r){return be="useSyncExternalStore",Dt(),Xe(),Rd(e,t)},useId:function(){return be="useId",Dt(),Xe(),Id()},unstable_isNewReconciler:le}}var mo=n.unstable_now,H0=0,kd=-1,yc=-1,Hd=-1,Pv=!1,Vd=!1;function V0(){return Pv}function X1(){Vd=!0}function j1(){Pv=!1,Vd=!1}function Y1(){Pv=Vd,Vd=!1}function G0(){return H0}function W0(){H0=mo()}function Ov(e){yc=mo(),e.actualStartTime<0&&(e.actualStartTime=mo())}function X0(e){yc=-1}function Gd(e,t){if(yc>=0){var r=mo()-yc;e.actualDuration+=r,t&&(e.selfBaseDuration=r),yc=-1}}function aa(e){if(kd>=0){var t=mo()-kd;kd=-1;for(var r=e.return;r!==null;){switch(r.tag){case y:var a=r.stateNode;a.effectDuration+=t;return;case P:var l=r.stateNode;l.effectDuration+=t;return}r=r.return}}}function Fv(e){if(Hd>=0){var t=mo()-Hd;Hd=-1;for(var r=e.return;r!==null;){switch(r.tag){case y:var a=r.stateNode;a!==null&&(a.passiveEffectDuration+=t);return;case P:var l=r.stateNode;l!==null&&(l.passiveEffectDuration+=t);return}r=r.return}}}function oa(){kd=mo()}function Iv(){Hd=mo()}function zv(e){for(var t=e.child;t;)e.actualDuration+=t.actualDuration,t=t.sibling}function Br(e,t){if(e&&e.defaultProps){var r=Ae({},t),a=e.defaultProps;for(var l in a)r[l]===void 0&&(r[l]=a[l]);return r}return t}var Bv={},kv,Hv,Vv,Gv,Wv,j0,Wd,Xv,jv,Yv,Sc;{kv=new Set,Hv=new Set,Vv=new Set,Gv=new Set,Xv=new Set,Wv=new Set,jv=new Set,Yv=new Set,Sc=new Set;var Y0=new Set;Wd=function(e,t){if(!(e===null||typeof e=="function")){var r=t+"_"+e;Y0.has(r)||(Y0.add(r),d("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.",t,e))}},j0=function(e,t){if(t===void 0){var r=on(e)||"Component";Wv.has(r)||(Wv.add(r),d("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",r))}},Object.defineProperty(Bv,"_processChildContext",{enumerable:!1,value:function(){throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).")}}),Object.freeze(Bv)}function qv(e,t,r,a){var l=e.memoizedState,c=r(a,l);{if(e.mode&Nn){ci(!0);try{c=r(a,l)}finally{ci(!1)}}j0(t,c)}var h=c==null?l:Ae({},l,c);if(e.memoizedState=h,e.lanes===Re){var g=e.updateQueue;g.baseState=h}}var $v={isMounted:zR,enqueueSetState:function(e,t,r){var a=Bs(e),l=Vi(),c=yo(a),h=La(l,c);h.payload=t,r!=null&&(Wd(r,"setState"),h.callback=r);var g=co(a,h,c);g!==null&&(ni(g,a,c,l),yd(g,a,c)),Rp(a,c)},enqueueReplaceState:function(e,t,r){var a=Bs(e),l=Vi(),c=yo(a),h=La(l,c);h.tag=c0,h.payload=t,r!=null&&(Wd(r,"replaceState"),h.callback=r);var g=co(a,h,c);g!==null&&(ni(g,a,c,l),yd(g,a,c)),Rp(a,c)},enqueueForceUpdate:function(e,t){var r=Bs(e),a=Vi(),l=yo(r),c=La(a,l);c.tag=vd,t!=null&&(Wd(t,"forceUpdate"),c.callback=t);var h=co(r,c,l);h!==null&&(ni(h,r,l,a),yd(h,r,l)),mC(r,l)}};function q0(e,t,r,a,l,c,h){var g=e.stateNode;if(typeof g.shouldComponentUpdate=="function"){var E=g.shouldComponentUpdate(a,c,h);{if(e.mode&Nn){ci(!0);try{E=g.shouldComponentUpdate(a,c,h)}finally{ci(!1)}}E===void 0&&d("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",on(t)||"Component")}return E}return t.prototype&&t.prototype.isPureReactComponent?!Vu(r,a)||!Vu(l,c):!0}function q1(e,t,r){var a=e.stateNode;{var l=on(t)||"Component",c=a.render;c||(t.prototype&&typeof t.prototype.render=="function"?d("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?",l):d("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.",l)),a.getInitialState&&!a.getInitialState.isReactClassApproved&&!a.state&&d("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",l),a.getDefaultProps&&!a.getDefaultProps.isReactClassApproved&&d("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",l),a.propTypes&&d("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.",l),a.contextType&&d("contextType was defined as an instance property on %s. Use a static property to define contextType instead.",l),t.childContextTypes&&!Sc.has(t)&&(e.mode&Nn)===St&&(Sc.add(t),d(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`,l)),t.contextTypes&&!Sc.has(t)&&(e.mode&Nn)===St&&(Sc.add(t),d(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`,l)),a.contextTypes&&d("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.",l),t.contextType&&t.contextTypes&&!jv.has(t)&&(jv.add(t),d("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.",l)),typeof a.componentShouldUpdate=="function"&&d("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",l),t.prototype&&t.prototype.isPureReactComponent&&typeof a.shouldComponentUpdate<"u"&&d("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",on(t)||"A pure component"),typeof a.componentDidUnmount=="function"&&d("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",l),typeof a.componentDidReceiveProps=="function"&&d("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",l),typeof a.componentWillRecieveProps=="function"&&d("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",l),typeof a.UNSAFE_componentWillRecieveProps=="function"&&d("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",l);var h=a.props!==r;a.props!==void 0&&h&&d("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",l,l),a.defaultProps&&d("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",l,l),typeof a.getSnapshotBeforeUpdate=="function"&&typeof a.componentDidUpdate!="function"&&!Vv.has(t)&&(Vv.add(t),d("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",on(t))),typeof a.getDerivedStateFromProps=="function"&&d("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",l),typeof a.getDerivedStateFromError=="function"&&d("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",l),typeof t.getSnapshotBeforeUpdate=="function"&&d("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",l);var g=a.state;g&&(typeof g!="object"||Xt(g))&&d("%s.state: must be set to an object or null",l),typeof a.getChildContext=="function"&&typeof t.childContextTypes!="object"&&d("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",l)}}function $0(e,t){t.updater=$v,e.stateNode=t,PR(t,e),t._reactInternalInstance=Bv}function K0(e,t,r){var a=!1,l=dr,c=dr,h=t.contextType;if("contextType"in t){var g=h===null||h!==void 0&&h.$$typeof===Ve&&h._context===void 0;if(!g&&!Yv.has(t)){Yv.add(t);var E="";h===void 0?E=" However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.":typeof h!="object"?E=" However, it is set to a "+typeof h+".":h.$$typeof===Ce?E=" Did you accidentally pass the Context.Provider instead?":h._context!==void 0?E=" Did you accidentally pass the Context.Consumer instead?":E=" However, it is set to an object with keys {"+Object.keys(h).join(", ")+"}.",d("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",on(t)||"Component",E)}}if(typeof h=="object"&&h!==null)c=jn(h);else{l=rl(e,t,!0);var w=t.contextTypes;a=w!=null,c=a?al(e,l):dr}var U=new t(r,c);if(e.mode&Nn){ci(!0);try{U=new t(r,c)}finally{ci(!1)}}var j=e.memoizedState=U.state!==null&&U.state!==void 0?U.state:null;$0(e,U);{if(typeof t.getDerivedStateFromProps=="function"&&j===null){var W=on(t)||"Component";Hv.has(W)||(Hv.add(W),d("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",W,U.state===null?"null":"undefined",W))}if(typeof t.getDerivedStateFromProps=="function"||typeof U.getSnapshotBeforeUpdate=="function"){var re=null,oe=null,ge=null;if(typeof U.componentWillMount=="function"&&U.componentWillMount.__suppressDeprecationWarning!==!0?re="componentWillMount":typeof U.UNSAFE_componentWillMount=="function"&&(re="UNSAFE_componentWillMount"),typeof U.componentWillReceiveProps=="function"&&U.componentWillReceiveProps.__suppressDeprecationWarning!==!0?oe="componentWillReceiveProps":typeof U.UNSAFE_componentWillReceiveProps=="function"&&(oe="UNSAFE_componentWillReceiveProps"),typeof U.componentWillUpdate=="function"&&U.componentWillUpdate.__suppressDeprecationWarning!==!0?ge="componentWillUpdate":typeof U.UNSAFE_componentWillUpdate=="function"&&(ge="UNSAFE_componentWillUpdate"),re!==null||oe!==null||ge!==null){var Ye=on(t)||"Component",yt=typeof t.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";Gv.has(Ye)||(Gv.add(Ye),d(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`,Ye,yt,re!==null?`
  `+re:"",oe!==null?`
  `+oe:"",ge!==null?`
  `+ge:""))}}}return a&&Bx(e,l,c),U}function $1(e,t){var r=t.state;typeof t.componentWillMount=="function"&&t.componentWillMount(),typeof t.UNSAFE_componentWillMount=="function"&&t.UNSAFE_componentWillMount(),r!==t.state&&(d("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",Ot(e)||"Component"),$v.enqueueReplaceState(t,t.state,null))}function Z0(e,t,r,a){var l=t.state;if(typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,a),t.state!==l){{var c=Ot(e)||"Component";kv.has(c)||(kv.add(c),d("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",c))}$v.enqueueReplaceState(t,t.state,null)}}function Kv(e,t,r,a){q1(e,t,r);var l=e.stateNode;l.props=r,l.state=e.memoizedState,l.refs={},av(e);var c=t.contextType;if(typeof c=="object"&&c!==null)l.context=jn(c);else{var h=rl(e,t,!0);l.context=al(e,h)}{if(l.state===r){var g=on(t)||"Component";Xv.has(g)||(Xv.add(g),d("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",g))}e.mode&Nn&&Fr.recordLegacyContextWarning(e,l),Fr.recordUnsafeLifecycleWarnings(e,l)}l.state=e.memoizedState;var E=t.getDerivedStateFromProps;if(typeof E=="function"&&(qv(e,t,E,r),l.state=e.memoizedState),typeof t.getDerivedStateFromProps!="function"&&typeof l.getSnapshotBeforeUpdate!="function"&&(typeof l.UNSAFE_componentWillMount=="function"||typeof l.componentWillMount=="function")&&($1(e,l),Sd(e,r,l,a),l.state=e.memoizedState),typeof l.componentDidMount=="function"){var w=sn;w|=Ho,(e.mode&Qr)!==St&&(w|=Qa),e.flags|=w}}function K1(e,t,r,a){var l=e.stateNode,c=e.memoizedProps;l.props=c;var h=l.context,g=t.contextType,E=dr;if(typeof g=="object"&&g!==null)E=jn(g);else{var w=rl(e,t,!0);E=al(e,w)}var U=t.getDerivedStateFromProps,j=typeof U=="function"||typeof l.getSnapshotBeforeUpdate=="function";!j&&(typeof l.UNSAFE_componentWillReceiveProps=="function"||typeof l.componentWillReceiveProps=="function")&&(c!==r||h!==E)&&Z0(e,l,r,E),d0();var W=e.memoizedState,re=l.state=W;if(Sd(e,r,l,a),re=e.memoizedState,c===r&&W===re&&!td()&&!xd()){if(typeof l.componentDidMount=="function"){var oe=sn;oe|=Ho,(e.mode&Qr)!==St&&(oe|=Qa),e.flags|=oe}return!1}typeof U=="function"&&(qv(e,t,U,r),re=e.memoizedState);var ge=xd()||q0(e,t,c,r,W,re,E);if(ge){if(!j&&(typeof l.UNSAFE_componentWillMount=="function"||typeof l.componentWillMount=="function")&&(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"){var Ye=sn;Ye|=Ho,(e.mode&Qr)!==St&&(Ye|=Qa),e.flags|=Ye}}else{if(typeof l.componentDidMount=="function"){var yt=sn;yt|=Ho,(e.mode&Qr)!==St&&(yt|=Qa),e.flags|=yt}e.memoizedProps=r,e.memoizedState=re}return l.props=r,l.state=re,l.context=E,ge}function Z1(e,t,r,a,l){var c=t.stateNode;f0(e,t);var h=t.memoizedProps,g=t.type===t.elementType?h:Br(t.type,h);c.props=g;var E=t.pendingProps,w=c.context,U=r.contextType,j=dr;if(typeof U=="object"&&U!==null)j=jn(U);else{var W=rl(t,r,!0);j=al(t,W)}var re=r.getDerivedStateFromProps,oe=typeof re=="function"||typeof c.getSnapshotBeforeUpdate=="function";!oe&&(typeof c.UNSAFE_componentWillReceiveProps=="function"||typeof c.componentWillReceiveProps=="function")&&(h!==E||w!==j)&&Z0(t,c,a,j),d0();var ge=t.memoizedState,Ye=c.state=ge;if(Sd(t,a,c,l),Ye=t.memoizedState,h===E&&ge===Ye&&!td()&&!xd()&&!Fe)return typeof c.componentDidUpdate=="function"&&(h!==e.memoizedProps||ge!==e.memoizedState)&&(t.flags|=sn),typeof c.getSnapshotBeforeUpdate=="function"&&(h!==e.memoizedProps||ge!==e.memoizedState)&&(t.flags|=Hs),!1;typeof re=="function"&&(qv(t,r,re,a),Ye=t.memoizedState);var yt=xd()||q0(t,r,g,a,ge,Ye,j)||Fe;return yt?(!oe&&(typeof c.UNSAFE_componentWillUpdate=="function"||typeof c.componentWillUpdate=="function")&&(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(a,Ye,j),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(a,Ye,j)),typeof c.componentDidUpdate=="function"&&(t.flags|=sn),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=Hs)):(typeof c.componentDidUpdate=="function"&&(h!==e.memoizedProps||ge!==e.memoizedState)&&(t.flags|=sn),typeof c.getSnapshotBeforeUpdate=="function"&&(h!==e.memoizedProps||ge!==e.memoizedState)&&(t.flags|=Hs),t.memoizedProps=a,t.memoizedState=Ye),c.props=a,c.state=Ye,c.context=j,yt}function as(e,t){return{value:e,source:t,stack:No(t),digest:null}}function Zv(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Q1(e,t){return!0}function Qv(e,t){try{var r=Q1(e,t);if(r===!1)return;var a=t.value,l=t.source,c=t.stack,h=c!==null?c:"";if(a!=null&&a._suppressLogging){if(e.tag===v)return;console.error(a)}var g=l?Ot(l):null,E=g?"The above error occurred in the <"+g+"> component:":"The above error occurred in one of your React components:",w;if(e.tag===y)w=`Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;else{var U=Ot(e)||"Anonymous";w="React will try to recreate this component tree from scratch "+("using the error boundary you provided, "+U+".")}var j=E+`
`+h+`

`+(""+w);console.error(j)}catch(W){setTimeout(function(){throw W})}}var J1=typeof WeakMap=="function"?WeakMap:Map;function Q0(e,t,r){var a=La(Cn,r);a.tag=iv,a.payload={element:null};var l=t.value;return a.callback=function(){XU(l),Qv(e,t)},a}function Jv(e,t,r){var a=La(Cn,r);a.tag=iv;var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var c=t.value;a.payload=function(){return l(c)},a.callback=function(){ub(e),Qv(e,t)}}var h=e.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(a.callback=function(){ub(e),Qv(e,t),typeof l!="function"&&GU(this);var E=t.value,w=t.stack;this.componentDidCatch(E,{componentStack:w!==null?w:""}),typeof l!="function"&&(lr(e.lanes,wt)||d("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",Ot(e)||"Unknown"))}),a}function J0(e,t,r){var a=e.pingCache,l;if(a===null?(a=e.pingCache=new J1,l=new Set,a.set(t,l)):(l=a.get(t),l===void 0&&(l=new Set,a.set(t,l))),!l.has(r)){l.add(r);var c=jU.bind(null,e,t,r);Ur&&Ic(e,r),t.then(c,c)}}function eL(e,t,r,a){var l=e.updateQueue;if(l===null){var c=new Set;c.add(r),e.updateQueue=c}else l.add(r)}function tL(e,t){var r=e.tag;if((e.mode&Kt)===St&&(r===m||r===I||r===z)){var a=e.alternate;a?(e.updateQueue=a.updateQueue,e.memoizedState=a.memoizedState,e.lanes=a.lanes):(e.updateQueue=null,e.memoizedState=null)}}function eE(e){var t=e;do{if(t.tag===$&&O1(t))return t;t=t.return}while(t!==null);return null}function tE(e,t,r,a,l){if((e.mode&Kt)===St){if(e===t)e.flags|=Bi;else{if(e.flags|=ln,r.flags|=_p,r.flags&=-52805,r.tag===v){var c=r.alternate;if(c===null)r.tag=N;else{var h=La(Cn,wt);h.tag=vd,co(r,h,wt)}}r.lanes=kt(r.lanes,wt)}return e}return e.flags|=Bi,e.lanes=l,e}function nL(e,t,r,a,l){if(r.flags|=yf,Ur&&Ic(e,l),a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a;tL(r),gi()&&r.mode&Kt&&jx();var h=eE(t);if(h!==null){h.flags&=~Sa,tE(h,t,r,e,l),h.mode&Kt&&J0(e,c,l),eL(h,e,c);return}else{if(!MC(l)){J0(e,c,l),Ug();return}var g=new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");a=g}}else if(gi()&&r.mode&Kt){jx();var E=eE(t);if(E!==null){(E.flags&Bi)===bt&&(E.flags|=Sa),tE(E,t,r,e,l),Xm(as(a,r));return}}a=as(a,r),OU(a);var w=t;do{switch(w.tag){case y:{var U=a;w.flags|=Bi;var j=Cu(l);w.lanes=kt(w.lanes,j);var W=Q0(w,U,j);ov(w,W);return}case v:var re=a,oe=w.type,ge=w.stateNode;if((w.flags&ln)===bt&&(typeof oe.getDerivedStateFromError=="function"||ge!==null&&typeof ge.componentDidCatch=="function"&&!eb(ge))){w.flags|=Bi;var Ye=Cu(l);w.lanes=kt(w.lanes,Ye);var yt=Jv(w,re,Ye);ov(w,yt);return}break}w=w.return}while(w!==null)}function iL(){return null}var xc=i.ReactCurrentOwner,kr=!1,eg,Ec,tg,ng,ig,os,rg,Xd,bc;eg={},Ec={},tg={},ng={},ig={},os=!1,rg={},Xd={},bc={};function ki(e,t,r,a){e===null?t.child=r0(t,null,r,a):t.child=ul(t,e.child,r,a)}function rL(e,t,r,a){t.child=ul(t,e.child,null,a),t.child=ul(t,null,r,a)}function nE(e,t,r,a,l){if(t.type!==t.elementType){var c=r.propTypes;c&&Pr(c,a,"prop",on(r))}var h=r.render,g=t.ref,E,w;fl(t,l),xu(t);{if(xc.current=t,_r(!0),E=gl(e,t,h,a,g,l),w=_l(),t.mode&Nn){ci(!0);try{E=gl(e,t,h,a,g,l),w=_l()}finally{ci(!1)}}_r(!1)}return Ws(),e!==null&&!kr?(_0(e,t,l),Ua(e,t,l)):(gi()&&w&&Bm(t),t.flags|=ks,ki(e,t,E,l),t.child)}function iE(e,t,r,a,l){if(e===null){var c=r.type;if(uN(c)&&r.compare===null&&r.defaultProps===void 0){var h=c;return h=Rl(c),t.tag=z,t.type=h,sg(t,c),rE(e,t,h,a,l)}{var g=c.propTypes;if(g&&Pr(g,a,"prop",on(c)),r.defaultProps!==void 0){var E=on(c)||"Unknown";bc[E]||(d("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.",E),bc[E]=!0)}}var w=Gg(r.type,null,a,t,t.mode,l);return w.ref=t.ref,w.return=t,t.child=w,w}{var U=r.type,j=U.propTypes;j&&Pr(j,a,"prop",on(U))}var W=e.child,re=hg(e,l);if(!re){var oe=W.memoizedProps,ge=r.compare;if(ge=ge!==null?ge:Vu,ge(oe,a)&&e.ref===t.ref)return Ua(e,t,l)}t.flags|=ks;var Ye=fs(W,a);return Ye.ref=t.ref,Ye.return=t,t.child=Ye,Ye}function rE(e,t,r,a,l){if(t.type!==t.elementType){var c=t.elementType;if(c.$$typeof===_t){var h=c,g=h._payload,E=h._init;try{c=E(g)}catch{c=null}var w=c&&c.propTypes;w&&Pr(w,a,"prop",on(c))}}if(e!==null){var U=e.memoizedProps;if(Vu(U,a)&&e.ref===t.ref&&t.type===e.type)if(kr=!1,t.pendingProps=a=U,hg(e,l))(e.flags&_p)!==bt&&(kr=!0);else return t.lanes=e.lanes,Ua(e,t,l)}return ag(e,t,r,a,l)}function aE(e,t,r){var a=t.pendingProps,l=a.children,c=e!==null?e.memoizedState:null;if(a.mode==="hidden"||Ge)if((t.mode&Kt)===St){var h={baseLanes:Re,cachePool:null,transitions:null};t.memoizedState=h,rh(t,r)}else if(lr(r,sr)){var j={baseLanes:Re,cachePool:null,transitions:null};t.memoizedState=j;var W=c!==null?c.baseLanes:r;rh(t,W)}else{var g=null,E;if(c!==null){var w=c.baseLanes;E=kt(w,r)}else E=r;t.lanes=t.childLanes=sr;var U={baseLanes:E,cachePool:g,transitions:null};return t.memoizedState=U,t.updateQueue=null,rh(t,E),null}else{var re;c!==null?(re=kt(c.baseLanes,r),t.memoizedState=null):re=r,rh(t,re)}return ki(e,t,l,r),t.child}function aL(e,t,r){var a=t.pendingProps;return ki(e,t,a,r),t.child}function oL(e,t,r){var a=t.pendingProps.children;return ki(e,t,a,r),t.child}function sL(e,t,r){{t.flags|=sn;{var a=t.stateNode;a.effectDuration=0,a.passiveEffectDuration=0}}var l=t.pendingProps,c=l.children;return ki(e,t,c,r),t.child}function oE(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=Bo,t.flags|=yp)}function ag(e,t,r,a,l){if(t.type!==t.elementType){var c=r.propTypes;c&&Pr(c,a,"prop",on(r))}var h;{var g=rl(t,r,!0);h=al(t,g)}var E,w;fl(t,l),xu(t);{if(xc.current=t,_r(!0),E=gl(e,t,r,a,h,l),w=_l(),t.mode&Nn){ci(!0);try{E=gl(e,t,r,a,h,l),w=_l()}finally{ci(!1)}}_r(!1)}return Ws(),e!==null&&!kr?(_0(e,t,l),Ua(e,t,l)):(gi()&&w&&Bm(t),t.flags|=ks,ki(e,t,E,l),t.child)}function sE(e,t,r,a,l){{switch(MN(t)){case!1:{var c=t.stateNode,h=t.type,g=new h(t.memoizedProps,c.context),E=g.state;c.updater.enqueueSetState(c,E,null);break}case!0:{t.flags|=ln,t.flags|=Bi;var w=new Error("Simulated error coming from DevTools"),U=Cu(l);t.lanes=kt(t.lanes,U);var j=Jv(t,as(w,t),U);ov(t,j);break}}if(t.type!==t.elementType){var W=r.propTypes;W&&Pr(W,a,"prop",on(r))}}var re;ta(r)?(re=!0,id(t)):re=!1,fl(t,l);var oe=t.stateNode,ge;oe===null?(Yd(e,t),K0(t,r,a),Kv(t,r,a,l),ge=!0):e===null?ge=K1(t,r,a,l):ge=Z1(e,t,r,a,l);var Ye=og(e,t,r,ge,re,l);{var yt=t.stateNode;ge&&yt.props!==a&&(os||d("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",Ot(t)||"a component"),os=!0)}return Ye}function og(e,t,r,a,l,c){oE(e,t);var h=(t.flags&ln)!==bt;if(!a&&!h)return l&&Vx(t,r,!1),Ua(e,t,c);var g=t.stateNode;xc.current=t;var E;if(h&&typeof r.getDerivedStateFromError!="function")E=null,X0();else{xu(t);{if(_r(!0),E=g.render(),t.mode&Nn){ci(!0);try{g.render()}finally{ci(!1)}}_r(!1)}Ws()}return t.flags|=ks,e!==null&&h?rL(e,t,E,c):ki(e,t,E,c),t.memoizedState=g.state,l&&Vx(t,r,!0),t.child}function lE(e){var t=e.stateNode;t.pendingContext?kx(e,t.pendingContext,t.pendingContext!==t.context):t.context&&kx(e,t.context,!1),sv(e,t.containerInfo)}function lL(e,t,r){if(lE(t),e===null)throw new Error("Should have a current fiber. This is a bug in React.");var a=t.pendingProps,l=t.memoizedState,c=l.element;f0(e,t),Sd(t,a,null,r);var h=t.memoizedState;t.stateNode;var g=h.element;if(l.isDehydrated){var E={element:g,isDehydrated:!1,cache:h.cache,pendingSuspenseBoundaries:h.pendingSuspenseBoundaries,transitions:h.transitions},w=t.updateQueue;if(w.baseState=E,t.memoizedState=E,t.flags&Sa){var U=as(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."),t);return uE(e,t,g,r,U)}else if(g!==c){var j=as(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."),t);return uE(e,t,g,r,j)}else{f1(t);var W=r0(t,null,g,r);t.child=W;for(var re=W;re;)re.flags=re.flags&~Xn|xa,re=re.sibling}}else{if(ll(),g===c)return Ua(e,t,r);ki(e,t,g,r)}return t.child}function uE(e,t,r,a,l){return ll(),Xm(l),t.flags|=Sa,ki(e,t,r,a),t.child}function uL(e,t,r){m0(t),e===null&&Wm(t);var a=t.type,l=t.pendingProps,c=e!==null?e.memoizedProps:null,h=l.children,g=Tm(a,l);return g?h=null:c!==null&&Tm(a,c)&&(t.flags|=yu),oE(e,t),ki(e,t,h,r),t.child}function cL(e,t){return e===null&&Wm(t),null}function fL(e,t,r,a){Yd(e,t);var l=t.pendingProps,c=r,h=c._payload,g=c._init,E=g(h);t.type=E;var w=t.tag=cN(E),U=Br(E,l),j;switch(w){case m:return sg(t,E),t.type=E=Rl(E),j=ag(null,t,E,U,a),j;case v:return t.type=E=Ig(E),j=sE(null,t,E,U,a),j;case I:return t.type=E=zg(E),j=nE(null,t,E,U,a),j;case G:{if(t.type!==t.elementType){var W=E.propTypes;W&&Pr(W,U,"prop",on(E))}return j=iE(null,t,E,Br(E.type,U),a),j}}var re="";throw E!==null&&typeof E=="object"&&E.$$typeof===_t&&(re=" Did you wrap a component in React.lazy() more than once?"),new Error("Element type is invalid. Received a promise that resolves to: "+E+". "+("Lazy element type must resolve to a class or function."+re))}function dL(e,t,r,a,l){Yd(e,t),t.tag=v;var c;return ta(r)?(c=!0,id(t)):c=!1,fl(t,l),K0(t,r,a),Kv(t,r,a,l),og(null,t,r,!0,c,l)}function hL(e,t,r,a){Yd(e,t);var l=t.pendingProps,c;{var h=rl(t,r,!1);c=al(t,h)}fl(t,a);var g,E;xu(t);{if(r.prototype&&typeof r.prototype.render=="function"){var w=on(r)||"Unknown";eg[w]||(d("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",w,w),eg[w]=!0)}t.mode&Nn&&Fr.recordLegacyContextWarning(t,null),_r(!0),xc.current=t,g=gl(null,t,r,l,c,a),E=_l(),_r(!1)}if(Ws(),t.flags|=ks,typeof g=="object"&&g!==null&&typeof g.render=="function"&&g.$$typeof===void 0){var U=on(r)||"Unknown";Ec[U]||(d("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.",U,U,U),Ec[U]=!0)}if(typeof g=="object"&&g!==null&&typeof g.render=="function"&&g.$$typeof===void 0){{var j=on(r)||"Unknown";Ec[j]||(d("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.",j,j,j),Ec[j]=!0)}t.tag=v,t.memoizedState=null,t.updateQueue=null;var W=!1;return ta(r)?(W=!0,id(t)):W=!1,t.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,av(t),$0(t,g),Kv(t,r,l,a),og(null,t,r,!0,W,a)}else{if(t.tag=m,t.mode&Nn){ci(!0);try{g=gl(null,t,r,l,c,a),E=_l()}finally{ci(!1)}}return gi()&&E&&Bm(t),ki(null,t,g,a),sg(t,r),t.child}}function sg(e,t){{if(t&&t.childContextTypes&&d("%s(...): childContextTypes cannot be defined on a function component.",t.displayName||t.name||"Component"),e.ref!==null){var r="",a=$a();a&&(r+=`

Check the render method of \``+a+"`.");var l=a||"",c=e._debugSource;c&&(l=c.fileName+":"+c.lineNumber),ig[l]||(ig[l]=!0,d("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s",r))}if(t.defaultProps!==void 0){var h=on(t)||"Unknown";bc[h]||(d("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.",h),bc[h]=!0)}if(typeof t.getDerivedStateFromProps=="function"){var g=on(t)||"Unknown";ng[g]||(d("%s: Function components do not support getDerivedStateFromProps.",g),ng[g]=!0)}if(typeof t.contextType=="object"&&t.contextType!==null){var E=on(t)||"Unknown";tg[E]||(d("%s: Function components do not support contextType.",E),tg[E]=!0)}}}var lg={dehydrated:null,treeContext:null,retryLane:fi};function ug(e){return{baseLanes:e,cachePool:iL(),transitions:null}}function pL(e,t){var r=null;return{baseLanes:kt(e.baseLanes,t),cachePool:r,transitions:e.transitions}}function mL(e,t,r,a){if(t!==null){var l=t.memoizedState;if(l===null)return!1}return cv(e,dc)}function vL(e,t){return Rf(e.childLanes,t)}function cE(e,t,r){var a=t.pendingProps;TN(t)&&(t.flags|=ln);var l=Ir.current,c=!1,h=(t.flags&ln)!==bt;if(h||mL(l,e)?(c=!0,t.flags&=~ln):(e===null||e.memoizedState!==null)&&(l=P1(l,g0)),l=hl(l),ho(t,l),e===null){Wm(t);var g=t.memoizedState;if(g!==null){var E=g.dehydrated;if(E!==null)return xL(t,E)}var w=a.children,U=a.fallback;if(c){var j=gL(t,w,U,r),W=t.child;return W.memoizedState=ug(r),t.memoizedState=lg,j}else return cg(t,w)}else{var re=e.memoizedState;if(re!==null){var oe=re.dehydrated;if(oe!==null)return EL(e,t,h,a,oe,re,r)}if(c){var ge=a.fallback,Ye=a.children,yt=yL(e,t,Ye,ge,r),ht=t.child,Qt=e.child.memoizedState;return ht.memoizedState=Qt===null?ug(r):pL(Qt,r),ht.childLanes=vL(e,r),t.memoizedState=lg,yt}else{var jt=a.children,J=_L(e,t,jt,r);return t.memoizedState=null,J}}}function cg(e,t,r){var a=e.mode,l={mode:"visible",children:t},c=fg(l,a);return c.return=e,e.child=c,c}function gL(e,t,r,a){var l=e.mode,c=e.child,h={mode:"hidden",children:t},g,E;return(l&Kt)===St&&c!==null?(g=c,g.childLanes=Re,g.pendingProps=h,e.mode&_n&&(g.actualDuration=0,g.actualStartTime=-1,g.selfBaseDuration=0,g.treeBaseDuration=0),E=xo(r,l,a,null)):(g=fg(h,l),E=xo(r,l,a,null)),g.return=e,E.return=e,g.sibling=E,e.child=g,E}function fg(e,t,r){return fb(e,t,Re,null)}function fE(e,t){return fs(e,t)}function _L(e,t,r,a){var l=e.child,c=l.sibling,h=fE(l,{mode:"visible",children:r});if((t.mode&Kt)===St&&(h.lanes=a),h.return=t,h.sibling=null,c!==null){var g=t.deletions;g===null?(t.deletions=[c],t.flags|=zo):g.push(c)}return t.child=h,h}function yL(e,t,r,a,l){var c=t.mode,h=e.child,g=h.sibling,E={mode:"hidden",children:r},w;if((c&Kt)===St&&t.child!==h){var U=t.child;w=U,w.childLanes=Re,w.pendingProps=E,t.mode&_n&&(w.actualDuration=0,w.actualStartTime=-1,w.selfBaseDuration=h.selfBaseDuration,w.treeBaseDuration=h.treeBaseDuration),t.deletions=null}else w=fE(h,E),w.subtreeFlags=h.subtreeFlags&Ea;var j;return g!==null?j=fs(g,a):(j=xo(a,c,l,null),j.flags|=Xn),j.return=t,w.return=t,w.sibling=j,t.child=w,j}function jd(e,t,r,a){a!==null&&Xm(a),ul(t,e.child,null,r);var l=t.pendingProps,c=l.children,h=cg(t,c);return h.flags|=Xn,t.memoizedState=null,h}function SL(e,t,r,a,l){var c=t.mode,h={mode:"visible",children:r},g=fg(h,c),E=xo(a,c,l,null);return E.flags|=Xn,g.return=t,E.return=t,g.sibling=E,t.child=g,(t.mode&Kt)!==St&&ul(t,e.child,null,l),E}function xL(e,t,r){return(e.mode&Kt)===St?(d("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."),e.lanes=wt):wm(t)?e.lanes=Wo:e.lanes=sr,null}function EL(e,t,r,a,l,c,h){if(r)if(t.flags&Sa){t.flags&=~Sa;var J=Zv(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));return jd(e,t,h,J)}else{if(t.memoizedState!==null)return t.child=e.child,t.flags|=ln,null;var _e=a.children,ee=a.fallback,we=SL(e,t,_e,ee,h),et=t.child;return et.memoizedState=ug(h),t.memoizedState=lg,we}else{if(u1(),(t.mode&Kt)===St)return jd(e,t,h,null);if(wm(l)){var g,E,w;{var U=RD(l);g=U.digest,E=U.message,w=U.stack}var j;E?j=new Error(E):j=new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");var W=Zv(j,g,w);return jd(e,t,h,W)}var re=lr(h,e.childLanes);if(kr||re){var oe=ih();if(oe!==null){var ge=UC(oe,h);if(ge!==fi&&ge!==c.retryLane){c.retryLane=ge;var Ye=Cn;Ji(e,ge),ni(oe,e,ge,Ye)}}Ug();var yt=Zv(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));return jd(e,t,h,yt)}else if(Px(l)){t.flags|=ln,t.child=e.child;var ht=YU.bind(null,e);return CD(l,ht),null}else{d1(t,l,c.treeContext);var Qt=a.children,jt=cg(t,Qt);return jt.flags|=xa,jt}}}function dE(e,t,r){e.lanes=kt(e.lanes,t);var a=e.alternate;a!==null&&(a.lanes=kt(a.lanes,t)),tv(e.return,t,r)}function bL(e,t,r){for(var a=t;a!==null;){if(a.tag===$){var l=a.memoizedState;l!==null&&dE(a,r,e)}else if(a.tag===V)dE(a,r,e);else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)return;for(;a.sibling===null;){if(a.return===null||a.return===e)return;a=a.return}a.sibling.return=a.return,a=a.sibling}}function ML(e){for(var t=e,r=null;t!==null;){var a=t.alternate;a!==null&&Md(a)===null&&(r=t),t=t.sibling}return r}function TL(e){if(e!==void 0&&e!=="forwards"&&e!=="backwards"&&e!=="together"&&!rg[e])if(rg[e]=!0,typeof e=="string")switch(e.toLowerCase()){case"together":case"forwards":case"backwards":{d('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',e,e.toLowerCase());break}case"forward":case"backward":{d('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',e,e.toLowerCase());break}default:d('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',e);break}else d('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',e)}function RL(e,t){e!==void 0&&!Xd[e]&&(e!=="collapsed"&&e!=="hidden"?(Xd[e]=!0,d('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?',e)):t!=="forwards"&&t!=="backwards"&&(Xd[e]=!0,d('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',e)))}function hE(e,t){{var r=Xt(e),a=!r&&typeof He(e)=="function";if(r||a){var l=r?"array":"iterable";return d("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",l,t,l),!1}}return!0}function CL(e,t){if((t==="forwards"||t==="backwards")&&e!==void 0&&e!==null&&e!==!1)if(Xt(e)){for(var r=0;r<e.length;r++)if(!hE(e[r],r))return}else{var a=He(e);if(typeof a=="function"){var l=a.call(e);if(l)for(var c=l.next(),h=0;!c.done;c=l.next()){if(!hE(c.value,h))return;h++}}else d('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',t)}}function dg(e,t,r,a,l){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:r,tailMode:l}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=a,c.tail=r,c.tailMode=l)}function pE(e,t,r){var a=t.pendingProps,l=a.revealOrder,c=a.tail,h=a.children;TL(l),RL(c,l),CL(h,l),ki(e,t,h,r);var g=Ir.current,E=cv(g,dc);if(E)g=fv(g,dc),t.flags|=ln;else{var w=e!==null&&(e.flags&ln)!==bt;w&&bL(t,t.child,r),g=hl(g)}if(ho(t,g),(t.mode&Kt)===St)t.memoizedState=null;else switch(l){case"forwards":{var U=ML(t.child),j;U===null?(j=t.child,t.child=null):(j=U.sibling,U.sibling=null),dg(t,!1,j,U,c);break}case"backwards":{var W=null,re=t.child;for(t.child=null;re!==null;){var oe=re.alternate;if(oe!==null&&Md(oe)===null){t.child=re;break}var ge=re.sibling;re.sibling=W,W=re,re=ge}dg(t,!0,W,null,c);break}case"together":{dg(t,!1,null,null,void 0);break}default:t.memoizedState=null}return t.child}function AL(e,t,r){sv(t,t.stateNode.containerInfo);var a=t.pendingProps;return e===null?t.child=ul(t,null,a,r):ki(e,t,a,r),t.child}var mE=!1;function wL(e,t,r){var a=t.type,l=a._context,c=t.pendingProps,h=t.memoizedProps,g=c.value;{"value"in c||mE||(mE=!0,d("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));var E=t.type.propTypes;E&&Pr(E,c,"prop","Context.Provider")}if(s0(t,l,g),h!==null){var w=h.value;if(fr(w,g)){if(h.children===c.children&&!td())return Ua(e,t,r)}else T1(t,l,r)}var U=c.children;return ki(e,t,U,r),t.child}var vE=!1;function DL(e,t,r){var a=t.type;a._context===void 0?a!==a.Consumer&&(vE||(vE=!0,d("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))):a=a._context;var l=t.pendingProps,c=l.children;typeof c!="function"&&d("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."),fl(t,r);var h=jn(a);xu(t);var g;return xc.current=t,_r(!0),g=c(h),_r(!1),Ws(),t.flags|=ks,ki(e,t,g,r),t.child}function Mc(){kr=!0}function Yd(e,t){(t.mode&Kt)===St&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=Xn)}function Ua(e,t,r){return e!==null&&(t.dependencies=e.dependencies),X0(),Fc(t.lanes),lr(r,t.childLanes)?(b1(e,t),t.child):null}function LL(e,t,r){{var a=t.return;if(a===null)throw new Error("Cannot swap the root fiber.");if(e.alternate=null,t.alternate=null,r.index=t.index,r.sibling=t.sibling,r.return=t.return,r.ref=t.ref,t===a.child)a.child=r;else{var l=a.child;if(l===null)throw new Error("Expected parent to have a child.");for(;l.sibling!==t;)if(l=l.sibling,l===null)throw new Error("Expected to find the previous sibling.");l.sibling=r}var c=a.deletions;return c===null?(a.deletions=[e],a.flags|=zo):c.push(e),r.flags|=Xn,r}}function hg(e,t){var r=e.lanes;return!!lr(r,t)}function UL(e,t,r){switch(t.tag){case y:lE(t),t.stateNode,ll();break;case b:m0(t);break;case v:{var a=t.type;ta(a)&&id(t);break}case x:sv(t,t.stateNode.containerInfo);break;case F:{var l=t.memoizedProps.value,c=t.type._context;s0(t,c,l);break}case P:{var h=lr(r,t.childLanes);h&&(t.flags|=sn);{var g=t.stateNode;g.effectDuration=0,g.passiveEffectDuration=0}}break;case $:{var E=t.memoizedState;if(E!==null){if(E.dehydrated!==null)return ho(t,hl(Ir.current)),t.flags|=ln,null;var w=t.child,U=w.childLanes;if(lr(r,U))return cE(e,t,r);ho(t,hl(Ir.current));var j=Ua(e,t,r);return j!==null?j.sibling:null}else ho(t,hl(Ir.current));break}case V:{var W=(e.flags&ln)!==bt,re=lr(r,t.childLanes);if(W){if(re)return pE(e,t,r);t.flags|=ln}var oe=t.memoizedState;if(oe!==null&&(oe.rendering=null,oe.tail=null,oe.lastEffect=null),ho(t,Ir.current),re)break;return null}case K:case Se:return t.lanes=Re,aE(e,t,r)}return Ua(e,t,r)}function gE(e,t,r){if(t._debugNeedsRemount&&e!==null)return LL(e,t,Gg(t.type,t.key,t.pendingProps,t._debugOwner||null,t.mode,t.lanes));if(e!==null){var a=e.memoizedProps,l=t.pendingProps;if(a!==l||td()||t.type!==e.type)kr=!0;else{var c=hg(e,r);if(!c&&(t.flags&ln)===bt)return kr=!1,UL(e,t,r);(e.flags&_p)!==bt?kr=!0:kr=!1}}else if(kr=!1,gi()&&i1(t)){var h=t.index,g=r1();Xx(t,g,h)}switch(t.lanes=Re,t.tag){case S:return hL(e,t,t.type,r);case Z:{var E=t.elementType;return fL(e,t,E,r)}case m:{var w=t.type,U=t.pendingProps,j=t.elementType===w?U:Br(w,U);return ag(e,t,w,j,r)}case v:{var W=t.type,re=t.pendingProps,oe=t.elementType===W?re:Br(W,re);return sE(e,t,W,oe,r)}case y:return lL(e,t,r);case b:return uL(e,t,r);case C:return cL(e,t);case $:return cE(e,t,r);case x:return AL(e,t,r);case I:{var ge=t.type,Ye=t.pendingProps,yt=t.elementType===ge?Ye:Br(ge,Ye);return nE(e,t,ge,yt,r)}case L:return aL(e,t,r);case M:return oL(e,t,r);case P:return sL(e,t,r);case F:return wL(e,t,r);case _:return DL(e,t,r);case G:{var ht=t.type,Qt=t.pendingProps,jt=Br(ht,Qt);if(t.type!==t.elementType){var J=ht.propTypes;J&&Pr(J,jt,"prop",on(ht))}return jt=Br(ht.type,jt),iE(e,t,ht,jt,r)}case z:return rE(e,t,t.type,t.pendingProps,r);case N:{var _e=t.type,ee=t.pendingProps,we=t.elementType===_e?ee:Br(_e,ee);return dL(e,t,_e,we,r)}case V:return pE(e,t,r);case he:break;case K:return aE(e,t,r)}throw new Error("Unknown unit of work tag ("+t.tag+"). This error is likely caused by a bug in React. Please file an issue.")}function yl(e){e.flags|=sn}function _E(e){e.flags|=Bo,e.flags|=yp}var yE,pg,SE,xE;yE=function(e,t,r,a){for(var l=t.child;l!==null;){if(l.tag===b||l.tag===C)eD(e,l.stateNode);else if(l.tag!==x){if(l.child!==null){l.child.return=l,l=l.child;continue}}if(l===t)return;for(;l.sibling===null;){if(l.return===null||l.return===t)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},pg=function(e,t){},SE=function(e,t,r,a,l){var c=e.memoizedProps;if(c!==a){var h=t.stateNode,g=lv(),E=nD(h,r,c,a,l,g);t.updateQueue=E,E&&yl(t)}},xE=function(e,t,r,a){r!==a&&yl(t)};function Tc(e,t){if(!gi())switch(e.tailMode){case"hidden":{for(var r=e.tail,a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?e.tail=null:a.sibling=null;break}case"collapsed":{for(var l=e.tail,c=null;l!==null;)l.alternate!==null&&(c=l),l=l.sibling;c===null?!t&&e.tail!==null?e.tail.sibling=null:e.tail=null:c.sibling=null;break}}}function yi(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=Re,a=bt;if(t){if((e.mode&_n)!==St){for(var E=e.selfBaseDuration,w=e.child;w!==null;)r=kt(r,kt(w.lanes,w.childLanes)),a|=w.subtreeFlags&Ea,a|=w.flags&Ea,E+=w.treeBaseDuration,w=w.sibling;e.treeBaseDuration=E}else for(var U=e.child;U!==null;)r=kt(r,kt(U.lanes,U.childLanes)),a|=U.subtreeFlags&Ea,a|=U.flags&Ea,U.return=e,U=U.sibling;e.subtreeFlags|=a}else{if((e.mode&_n)!==St){for(var l=e.actualDuration,c=e.selfBaseDuration,h=e.child;h!==null;)r=kt(r,kt(h.lanes,h.childLanes)),a|=h.subtreeFlags,a|=h.flags,l+=h.actualDuration,c+=h.treeBaseDuration,h=h.sibling;e.actualDuration=l,e.treeBaseDuration=c}else for(var g=e.child;g!==null;)r=kt(r,kt(g.lanes,g.childLanes)),a|=g.subtreeFlags,a|=g.flags,g.return=e,g=g.sibling;e.subtreeFlags|=a}return e.childLanes=r,t}function NL(e,t,r){if(g1()&&(t.mode&Kt)!==St&&(t.flags&ln)===bt)return Qx(t),ll(),t.flags|=Sa|yf|Bi,!1;var a=ld(t);if(r!==null&&r.dehydrated!==null)if(e===null){if(!a)throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");if(m1(t),yi(t),(t.mode&_n)!==St){var l=r!==null;if(l){var c=t.child;c!==null&&(t.treeBaseDuration-=c.treeBaseDuration)}}return!1}else{if(ll(),(t.flags&ln)===bt&&(t.memoizedState=null),t.flags|=sn,yi(t),(t.mode&_n)!==St){var h=r!==null;if(h){var g=t.child;g!==null&&(t.treeBaseDuration-=g.treeBaseDuration)}}return!1}else return Jx(),!0}function EE(e,t,r){var a=t.pendingProps;switch(km(t),t.tag){case S:case Z:case z:case m:case I:case L:case M:case P:case _:case G:return yi(t),null;case v:{var l=t.type;return ta(l)&&nd(t),yi(t),null}case y:{var c=t.stateNode;if(dl(t),Fm(t),hv(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),e===null||e.child===null){var h=ld(t);if(h)yl(t);else if(e!==null){var g=e.memoizedState;(!g.isDehydrated||(t.flags&Sa)!==bt)&&(t.flags|=Hs,Jx())}}return pg(e,t),yi(t),null}case b:{uv(t);var E=p0(),w=t.type;if(e!==null&&t.stateNode!=null)SE(e,t,w,a,E),e.ref!==t.ref&&_E(t);else{if(!a){if(t.stateNode===null)throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");return yi(t),null}var U=lv(),j=ld(t);if(j)h1(t,E,U)&&yl(t);else{var W=Jw(w,a,E,U,t);yE(W,t,!1,!1),t.stateNode=W,tD(W,w,a,E)&&yl(t)}t.ref!==null&&_E(t)}return yi(t),null}case C:{var re=a;if(e&&t.stateNode!=null){var oe=e.memoizedProps;xE(e,t,oe,re)}else{if(typeof re!="string"&&t.stateNode===null)throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");var ge=p0(),Ye=lv(),yt=ld(t);yt?p1(t)&&yl(t):t.stateNode=iD(re,ge,Ye,t)}return yi(t),null}case $:{pl(t);var ht=t.memoizedState;if(e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){var Qt=NL(e,t,ht);if(!Qt)return t.flags&Bi?t:null}if((t.flags&ln)!==bt)return t.lanes=r,(t.mode&_n)!==St&&zv(t),t;var jt=ht!==null,J=e!==null&&e.memoizedState!==null;if(jt!==J&&jt){var _e=t.child;if(_e.flags|=ko,(t.mode&Kt)!==St){var ee=e===null&&(t.memoizedProps.unstable_avoidThisFallback!==!0||!0);ee||cv(Ir.current,g0)?PU():Ug()}}var we=t.updateQueue;if(we!==null&&(t.flags|=sn),yi(t),(t.mode&_n)!==St&&jt){var et=t.child;et!==null&&(t.treeBaseDuration-=et.treeBaseDuration)}return null}case x:return dl(t),pg(e,t),e===null&&KD(t.stateNode.containerInfo),yi(t),null;case F:var $e=t.type._context;return ev($e,t),yi(t),null;case N:{var Tt=t.type;return ta(Tt)&&nd(t),yi(t),null}case V:{pl(t);var Nt=t.memoizedState;if(Nt===null)return yi(t),null;var Sn=(t.flags&ln)!==bt,tn=Nt.rendering;if(tn===null)if(Sn)Tc(Nt,!1);else{var kn=FU()&&(e===null||(e.flags&ln)===bt);if(!kn)for(var nn=t.child;nn!==null;){var Pn=Md(nn);if(Pn!==null){Sn=!0,t.flags|=ln,Tc(Nt,!1);var Di=Pn.updateQueue;return Di!==null&&(t.updateQueue=Di,t.flags|=sn),t.subtreeFlags=bt,M1(t,r),ho(t,fv(Ir.current,dc)),t.child}nn=nn.sibling}Nt.tail!==null&&ui()>GE()&&(t.flags|=ln,Sn=!0,Tc(Nt,!1),t.lanes=xS)}else{if(!Sn){var Mi=Md(tn);if(Mi!==null){t.flags|=ln,Sn=!0;var pr=Mi.updateQueue;if(pr!==null&&(t.updateQueue=pr,t.flags|=sn),Tc(Nt,!0),Nt.tail===null&&Nt.tailMode==="hidden"&&!tn.alternate&&!gi())return yi(t),null}else ui()*2-Nt.renderingStartTime>GE()&&r!==sr&&(t.flags|=ln,Sn=!0,Tc(Nt,!1),t.lanes=xS)}if(Nt.isBackwards)tn.sibling=t.child,t.child=tn;else{var Gi=Nt.last;Gi!==null?Gi.sibling=tn:t.child=tn,Nt.last=tn}}if(Nt.tail!==null){var Wi=Nt.tail;Nt.rendering=Wi,Nt.tail=Wi.sibling,Nt.renderingStartTime=ui(),Wi.sibling=null;var Li=Ir.current;return Sn?Li=fv(Li,dc):Li=hl(Li),ho(t,Li),Wi}return yi(t),null}case he:break;case K:case Se:{Lg(t);var Ia=t.memoizedState,Cl=Ia!==null;if(e!==null){var Hc=e.memoizedState,ua=Hc!==null;ua!==Cl&&!Ge&&(t.flags|=ko)}return!Cl||(t.mode&Kt)===St?yi(t):lr(la,sr)&&(yi(t),t.subtreeFlags&(Xn|sn)&&(t.flags|=ko)),null}case ye:return null;case ce:return null}throw new Error("Unknown unit of work tag ("+t.tag+"). This error is likely caused by a bug in React. Please file an issue.")}function PL(e,t,r){switch(km(t),t.tag){case v:{var a=t.type;ta(a)&&nd(t);var l=t.flags;return l&Bi?(t.flags=l&~Bi|ln,(t.mode&_n)!==St&&zv(t),t):null}case y:{t.stateNode,dl(t),Fm(t),hv();var c=t.flags;return(c&Bi)!==bt&&(c&ln)===bt?(t.flags=c&~Bi|ln,t):null}case b:return uv(t),null;case $:{pl(t);var h=t.memoizedState;if(h!==null&&h.dehydrated!==null){if(t.alternate===null)throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");ll()}var g=t.flags;return g&Bi?(t.flags=g&~Bi|ln,(t.mode&_n)!==St&&zv(t),t):null}case V:return pl(t),null;case x:return dl(t),null;case F:var E=t.type._context;return ev(E,t),null;case K:case Se:return Lg(t),null;case ye:return null;default:return null}}function bE(e,t,r){switch(km(t),t.tag){case v:{var a=t.type.childContextTypes;a!=null&&nd(t);break}case y:{t.stateNode,dl(t),Fm(t),hv();break}case b:{uv(t);break}case x:dl(t);break;case $:pl(t);break;case V:pl(t);break;case F:var l=t.type._context;ev(l,t);break;case K:case Se:Lg(t);break}}var ME=null;ME=new Set;var qd=!1,Si=!1,OL=typeof WeakSet=="function"?WeakSet:Set,ot=null,Sl=null,xl=null;function FL(e){mp(null,function(){throw e}),vp()}var IL=function(e,t){if(t.props=e.memoizedProps,t.state=e.memoizedState,e.mode&_n)try{oa(),t.componentWillUnmount()}finally{aa(e)}else t.componentWillUnmount()};function TE(e,t){try{vo(Kn,e)}catch(r){Mn(e,t,r)}}function mg(e,t,r){try{IL(e,r)}catch(a){Mn(e,t,a)}}function zL(e,t,r){try{r.componentDidMount()}catch(a){Mn(e,t,a)}}function RE(e,t){try{AE(e)}catch(r){Mn(e,t,r)}}function El(e,t){var r=e.ref;if(r!==null)if(typeof r=="function"){var a;try{if(me&&De&&e.mode&_n)try{oa(),a=r(null)}finally{aa(e)}else a=r(null)}catch(l){Mn(e,t,l)}typeof a=="function"&&d("Unexpected return value from a callback ref in %s. A callback ref should not return a function.",Ot(e))}else r.current=null}function $d(e,t,r){try{r()}catch(a){Mn(e,t,a)}}var CE=!1;function BL(e,t){Zw(e.containerInfo),ot=t,kL();var r=CE;return CE=!1,r}function kL(){for(;ot!==null;){var e=ot,t=e.child;(e.subtreeFlags&Ep)!==bt&&t!==null?(t.return=e,ot=t):HL()}}function HL(){for(;ot!==null;){var e=ot;wn(e);try{VL(e)}catch(r){Mn(e,e.return,r)}li();var t=e.sibling;if(t!==null){t.return=e.return,ot=t;return}ot=e.return}}function VL(e){var t=e.alternate,r=e.flags;if((r&Hs)!==bt){switch(wn(e),e.tag){case m:case I:case z:break;case v:{if(t!==null){var a=t.memoizedProps,l=t.memoizedState,c=e.stateNode;e.type===e.elementType&&!os&&(c.props!==e.memoizedProps&&d("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",Ot(e)||"instance"),c.state!==e.memoizedState&&d("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",Ot(e)||"instance"));var h=c.getSnapshotBeforeUpdate(e.elementType===e.type?a:Br(e.type,a),l);{var g=ME;h===void 0&&!g.has(e.type)&&(g.add(e.type),d("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",Ot(e)))}c.__reactInternalSnapshotBeforeUpdate=h}break}case y:{{var E=e.stateNode;ED(E.containerInfo)}break}case b:case C:case x:case N:break;default:throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.")}li()}}function Hr(e,t,r){var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var c=l.next,h=c;do{if((h.tag&e)===e){var g=h.destroy;h.destroy=void 0,g!==void 0&&((e&_i)!==er?iC(t):(e&Kn)!==er&&vS(t),(e&na)!==er&&zc(!0),$d(t,r,g),(e&na)!==er&&zc(!1),(e&_i)!==er?rC():(e&Kn)!==er&&gS())}h=h.next}while(h!==c)}}function vo(e,t){var r=t.updateQueue,a=r!==null?r.lastEffect:null;if(a!==null){var l=a.next,c=l;do{if((c.tag&e)===e){(e&_i)!==er?tC(t):(e&Kn)!==er&&aC(t);var h=c.create;(e&na)!==er&&zc(!0),c.destroy=h(),(e&na)!==er&&zc(!1),(e&_i)!==er?nC():(e&Kn)!==er&&oC();{var g=c.destroy;if(g!==void 0&&typeof g!="function"){var E=void 0;(c.tag&Kn)!==bt?E="useLayoutEffect":(c.tag&na)!==bt?E="useInsertionEffect":E="useEffect";var w=void 0;g===null?w=" You returned null. If your effect does not require clean up, return undefined (or nothing).":typeof g.then=="function"?w=`

It looks like you wrote `+E+`(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

`+E+`(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching`:w=" You returned: "+g,d("%s must not return anything besides a function, which is used for clean-up.%s",E,w)}}}c=c.next}while(c!==l)}}function GL(e,t){if((t.flags&sn)!==bt)switch(t.tag){case P:{var r=t.stateNode.passiveEffectDuration,a=t.memoizedProps,l=a.id,c=a.onPostCommit,h=G0(),g=t.alternate===null?"mount":"update";V0()&&(g="nested-update"),typeof c=="function"&&c(l,g,r,h);var E=t.return;e:for(;E!==null;){switch(E.tag){case y:var w=E.stateNode;w.passiveEffectDuration+=r;break e;case P:var U=E.stateNode;U.passiveEffectDuration+=r;break e}E=E.return}break}}}function WL(e,t,r,a){if((r.flags&Su)!==bt)switch(r.tag){case m:case I:case z:{if(!Si)if(r.mode&_n)try{oa(),vo(Kn|$n,r)}finally{aa(r)}else vo(Kn|$n,r);break}case v:{var l=r.stateNode;if(r.flags&sn&&!Si)if(t===null)if(r.type===r.elementType&&!os&&(l.props!==r.memoizedProps&&d("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",Ot(r)||"instance"),l.state!==r.memoizedState&&d("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",Ot(r)||"instance")),r.mode&_n)try{oa(),l.componentDidMount()}finally{aa(r)}else l.componentDidMount();else{var c=r.elementType===r.type?t.memoizedProps:Br(r.type,t.memoizedProps),h=t.memoizedState;if(r.type===r.elementType&&!os&&(l.props!==r.memoizedProps&&d("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",Ot(r)||"instance"),l.state!==r.memoizedState&&d("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",Ot(r)||"instance")),r.mode&_n)try{oa(),l.componentDidUpdate(c,h,l.__reactInternalSnapshotBeforeUpdate)}finally{aa(r)}else l.componentDidUpdate(c,h,l.__reactInternalSnapshotBeforeUpdate)}var g=r.updateQueue;g!==null&&(r.type===r.elementType&&!os&&(l.props!==r.memoizedProps&&d("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",Ot(r)||"instance"),l.state!==r.memoizedState&&d("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",Ot(r)||"instance")),h0(r,g,l));break}case y:{var E=r.updateQueue;if(E!==null){var w=null;if(r.child!==null)switch(r.child.tag){case b:w=r.child.stateNode;break;case v:w=r.child.stateNode;break}h0(r,E,w)}break}case b:{var U=r.stateNode;if(t===null&&r.flags&sn){var j=r.type,W=r.memoizedProps;lD(U,j,W)}break}case C:break;case x:break;case P:{{var re=r.memoizedProps,oe=re.onCommit,ge=re.onRender,Ye=r.stateNode.effectDuration,yt=G0(),ht=t===null?"mount":"update";V0()&&(ht="nested-update"),typeof ge=="function"&&ge(r.memoizedProps.id,ht,r.actualDuration,r.treeBaseDuration,r.actualStartTime,yt);{typeof oe=="function"&&oe(r.memoizedProps.id,ht,Ye,yt),HU(r);var Qt=r.return;e:for(;Qt!==null;){switch(Qt.tag){case y:var jt=Qt.stateNode;jt.effectDuration+=Ye;break e;case P:var J=Qt.stateNode;J.effectDuration+=Ye;break e}Qt=Qt.return}}}break}case $:{QL(e,r);break}case V:case N:case he:case K:case Se:case ce:break;default:throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.")}Si||r.flags&Bo&&AE(r)}function XL(e){switch(e.tag){case m:case I:case z:{if(e.mode&_n)try{oa(),TE(e,e.return)}finally{aa(e)}else TE(e,e.return);break}case v:{var t=e.stateNode;typeof t.componentDidMount=="function"&&zL(e,e.return,t),RE(e,e.return);break}case b:{RE(e,e.return);break}}}function jL(e,t){for(var r=null,a=e;;){if(a.tag===b){if(r===null){r=a;try{var l=a.stateNode;t?_D(l):SD(a.stateNode,a.memoizedProps)}catch(h){Mn(e,e.return,h)}}}else if(a.tag===C){if(r===null)try{var c=a.stateNode;t?yD(c):xD(c,a.memoizedProps)}catch(h){Mn(e,e.return,h)}}else if(!((a.tag===K||a.tag===Se)&&a.memoizedState!==null&&a!==e)){if(a.child!==null){a.child.return=a,a=a.child;continue}}if(a===e)return;for(;a.sibling===null;){if(a.return===null||a.return===e)return;r===a&&(r=null),a=a.return}r===a&&(r=null),a.sibling.return=a.return,a=a.sibling}}function AE(e){var t=e.ref;if(t!==null){var r=e.stateNode,a;switch(e.tag){case b:a=r;break;default:a=r}if(typeof t=="function"){var l;if(e.mode&_n)try{oa(),l=t(a)}finally{aa(e)}else l=t(a);typeof l=="function"&&d("Unexpected return value from a callback ref in %s. A callback ref should not return a function.",Ot(e))}else t.hasOwnProperty("current")||d("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",Ot(e)),t.current=a}}function YL(e){var t=e.alternate;t!==null&&(t.return=null),e.return=null}function wE(e){var t=e.alternate;t!==null&&(e.alternate=null,wE(t));{if(e.child=null,e.deletions=null,e.sibling=null,e.tag===b){var r=e.stateNode;r!==null&&JD(r)}e.stateNode=null,e._debugOwner=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}}function qL(e){for(var t=e.return;t!==null;){if(DE(t))return t;t=t.return}throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.")}function DE(e){return e.tag===b||e.tag===y||e.tag===x}function LE(e){var t=e;e:for(;;){for(;t.sibling===null;){if(t.return===null||DE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==b&&t.tag!==C&&t.tag!==D;){if(t.flags&Xn||t.child===null||t.tag===x)continue e;t.child.return=t,t=t.child}if(!(t.flags&Xn))return t.stateNode}}function $L(e){var t=qL(e);switch(t.tag){case b:{var r=t.stateNode;t.flags&yu&&(Nx(r),t.flags&=~yu);var a=LE(e);gg(e,a,r);break}case y:case x:{var l=t.stateNode.containerInfo,c=LE(e);vg(e,c,l);break}default:throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.")}}function vg(e,t,r){var a=e.tag,l=a===b||a===C;if(l){var c=e.stateNode;t?pD(r,c,t):dD(r,c)}else if(a!==x){var h=e.child;if(h!==null){vg(h,t,r);for(var g=h.sibling;g!==null;)vg(g,t,r),g=g.sibling}}}function gg(e,t,r){var a=e.tag,l=a===b||a===C;if(l){var c=e.stateNode;t?hD(r,c,t):fD(r,c)}else if(a!==x){var h=e.child;if(h!==null){gg(h,t,r);for(var g=h.sibling;g!==null;)gg(g,t,r),g=g.sibling}}}var xi=null,Vr=!1;function KL(e,t,r){{var a=t;e:for(;a!==null;){switch(a.tag){case b:{xi=a.stateNode,Vr=!1;break e}case y:{xi=a.stateNode.containerInfo,Vr=!0;break e}case x:{xi=a.stateNode.containerInfo,Vr=!0;break e}}a=a.return}if(xi===null)throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");UE(e,t,r),xi=null,Vr=!1}YL(r)}function go(e,t,r){for(var a=r.child;a!==null;)UE(e,t,a),a=a.sibling}function UE(e,t,r){switch(ZR(r),r.tag){case b:Si||El(r,t);case C:{{var a=xi,l=Vr;xi=null,go(e,t,r),xi=a,Vr=l,xi!==null&&(Vr?vD(xi,r.stateNode):mD(xi,r.stateNode))}return}case D:{xi!==null&&(Vr?gD(xi,r.stateNode):Am(xi,r.stateNode));return}case x:{{var c=xi,h=Vr;xi=r.stateNode.containerInfo,Vr=!0,go(e,t,r),xi=c,Vr=h}return}case m:case I:case G:case z:{if(!Si){var g=r.updateQueue;if(g!==null){var E=g.lastEffect;if(E!==null){var w=E.next,U=w;do{var j=U,W=j.destroy,re=j.tag;W!==void 0&&((re&na)!==er?$d(r,t,W):(re&Kn)!==er&&(vS(r),r.mode&_n?(oa(),$d(r,t,W),aa(r)):$d(r,t,W),gS())),U=U.next}while(U!==w)}}}go(e,t,r);return}case v:{if(!Si){El(r,t);var oe=r.stateNode;typeof oe.componentWillUnmount=="function"&&mg(r,t,oe)}go(e,t,r);return}case he:{go(e,t,r);return}case K:{if(r.mode&Kt){var ge=Si;Si=ge||r.memoizedState!==null,go(e,t,r),Si=ge}else go(e,t,r);break}default:{go(e,t,r);return}}}function ZL(e){e.memoizedState}function QL(e,t){var r=t.memoizedState;if(r===null){var a=t.alternate;if(a!==null){var l=a.memoizedState;if(l!==null){var c=l.dehydrated;c!==null&&FD(c)}}}}function NE(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new OL),t.forEach(function(a){var l=qU.bind(null,e,a);if(!r.has(a)){if(r.add(a),Ur)if(Sl!==null&&xl!==null)Ic(xl,Sl);else throw Error("Expected finished root and lanes to be set. This is a bug in React.");a.then(l,l)}})}}function JL(e,t,r){Sl=r,xl=e,wn(t),PE(t,e),wn(t),Sl=null,xl=null}function Gr(e,t,r){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var c=a[l];try{KL(e,t,c)}catch(E){Mn(c,t,E)}}var h=lf();if(t.subtreeFlags&bp)for(var g=t.child;g!==null;)wn(g),PE(g,e),g=g.sibling;wn(h)}function PE(e,t,r){var a=e.alternate,l=e.flags;switch(e.tag){case m:case I:case G:case z:{if(Gr(t,e),sa(e),l&sn){try{Hr(na|$n,e,e.return),vo(na|$n,e)}catch(Tt){Mn(e,e.return,Tt)}if(e.mode&_n){try{oa(),Hr(Kn|$n,e,e.return)}catch(Tt){Mn(e,e.return,Tt)}aa(e)}else try{Hr(Kn|$n,e,e.return)}catch(Tt){Mn(e,e.return,Tt)}}return}case v:{Gr(t,e),sa(e),l&Bo&&a!==null&&El(a,a.return);return}case b:{Gr(t,e),sa(e),l&Bo&&a!==null&&El(a,a.return);{if(e.flags&yu){var c=e.stateNode;try{Nx(c)}catch(Tt){Mn(e,e.return,Tt)}}if(l&sn){var h=e.stateNode;if(h!=null){var g=e.memoizedProps,E=a!==null?a.memoizedProps:g,w=e.type,U=e.updateQueue;if(e.updateQueue=null,U!==null)try{uD(h,U,w,E,g,e)}catch(Tt){Mn(e,e.return,Tt)}}}}return}case C:{if(Gr(t,e),sa(e),l&sn){if(e.stateNode===null)throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");var j=e.stateNode,W=e.memoizedProps,re=a!==null?a.memoizedProps:W;try{cD(j,re,W)}catch(Tt){Mn(e,e.return,Tt)}}return}case y:{if(Gr(t,e),sa(e),l&sn&&a!==null){var oe=a.memoizedState;if(oe.isDehydrated)try{OD(t.containerInfo)}catch(Tt){Mn(e,e.return,Tt)}}return}case x:{Gr(t,e),sa(e);return}case $:{Gr(t,e),sa(e);var ge=e.child;if(ge.flags&ko){var Ye=ge.stateNode,yt=ge.memoizedState,ht=yt!==null;if(Ye.isHidden=ht,ht){var Qt=ge.alternate!==null&&ge.alternate.memoizedState!==null;Qt||NU()}}if(l&sn){try{ZL(e)}catch(Tt){Mn(e,e.return,Tt)}NE(e)}return}case K:{var jt=a!==null&&a.memoizedState!==null;if(e.mode&Kt){var J=Si;Si=J||jt,Gr(t,e),Si=J}else Gr(t,e);if(sa(e),l&ko){var _e=e.stateNode,ee=e.memoizedState,we=ee!==null,et=e;if(_e.isHidden=we,we&&!jt&&(et.mode&Kt)!==St){ot=et;for(var $e=et.child;$e!==null;)ot=$e,tU($e),$e=$e.sibling}jL(et,we)}return}case V:{Gr(t,e),sa(e),l&sn&&NE(e);return}case he:return;default:{Gr(t,e),sa(e);return}}}function sa(e){var t=e.flags;if(t&Xn){try{$L(e)}catch(r){Mn(e,e.return,r)}e.flags&=~Xn}t&xa&&(e.flags&=~xa)}function eU(e,t,r){Sl=r,xl=t,ot=e,OE(e,t,r),Sl=null,xl=null}function OE(e,t,r){for(var a=(e.mode&Kt)!==St;ot!==null;){var l=ot,c=l.child;if(l.tag===K&&a){var h=l.memoizedState!==null,g=h||qd;if(g){_g(e,t,r);continue}else{var E=l.alternate,w=E!==null&&E.memoizedState!==null,U=w||Si,j=qd,W=Si;qd=g,Si=U,Si&&!W&&(ot=l,nU(l));for(var re=c;re!==null;)ot=re,OE(re,t,r),re=re.sibling;ot=l,qd=j,Si=W,_g(e,t,r);continue}}(l.subtreeFlags&Su)!==bt&&c!==null?(c.return=l,ot=c):_g(e,t,r)}}function _g(e,t,r){for(;ot!==null;){var a=ot;if((a.flags&Su)!==bt){var l=a.alternate;wn(a);try{WL(t,l,a,r)}catch(h){Mn(a,a.return,h)}li()}if(a===e){ot=null;return}var c=a.sibling;if(c!==null){c.return=a.return,ot=c;return}ot=a.return}}function tU(e){for(;ot!==null;){var t=ot,r=t.child;switch(t.tag){case m:case I:case G:case z:{if(t.mode&_n)try{oa(),Hr(Kn,t,t.return)}finally{aa(t)}else Hr(Kn,t,t.return);break}case v:{El(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&mg(t,t.return,a);break}case b:{El(t,t.return);break}case K:{var l=t.memoizedState!==null;if(l){FE(e);continue}break}}r!==null?(r.return=t,ot=r):FE(e)}}function FE(e){for(;ot!==null;){var t=ot;if(t===e){ot=null;return}var r=t.sibling;if(r!==null){r.return=t.return,ot=r;return}ot=t.return}}function nU(e){for(;ot!==null;){var t=ot,r=t.child;if(t.tag===K){var a=t.memoizedState!==null;if(a){IE(e);continue}}r!==null?(r.return=t,ot=r):IE(e)}}function IE(e){for(;ot!==null;){var t=ot;wn(t);try{XL(t)}catch(a){Mn(t,t.return,a)}if(li(),t===e){ot=null;return}var r=t.sibling;if(r!==null){r.return=t.return,ot=r;return}ot=t.return}}function iU(e,t,r,a){ot=t,rU(t,e,r,a)}function rU(e,t,r,a){for(;ot!==null;){var l=ot,c=l.child;(l.subtreeFlags&Vs)!==bt&&c!==null?(c.return=l,ot=c):aU(e,t,r,a)}}function aU(e,t,r,a){for(;ot!==null;){var l=ot;if((l.flags&Za)!==bt){wn(l);try{oU(t,l,r,a)}catch(h){Mn(l,l.return,h)}li()}if(l===e){ot=null;return}var c=l.sibling;if(c!==null){c.return=l.return,ot=c;return}ot=l.return}}function oU(e,t,r,a){switch(t.tag){case m:case I:case z:{if(t.mode&_n){Iv();try{vo(_i|$n,t)}finally{Fv(t)}}else vo(_i|$n,t);break}}}function sU(e){ot=e,lU()}function lU(){for(;ot!==null;){var e=ot,t=e.child;if((ot.flags&zo)!==bt){var r=e.deletions;if(r!==null){for(var a=0;a<r.length;a++){var l=r[a];ot=l,fU(l,e)}{var c=e.alternate;if(c!==null){var h=c.child;if(h!==null){c.child=null;do{var g=h.sibling;h.sibling=null,h=g}while(h!==null)}}}ot=e}}(e.subtreeFlags&Vs)!==bt&&t!==null?(t.return=e,ot=t):uU()}}function uU(){for(;ot!==null;){var e=ot;(e.flags&Za)!==bt&&(wn(e),cU(e),li());var t=e.sibling;if(t!==null){t.return=e.return,ot=t;return}ot=e.return}}function cU(e){switch(e.tag){case m:case I:case z:{e.mode&_n?(Iv(),Hr(_i|$n,e,e.return),Fv(e)):Hr(_i|$n,e,e.return);break}}}function fU(e,t){for(;ot!==null;){var r=ot;wn(r),hU(r,t),li();var a=r.child;a!==null?(a.return=r,ot=a):dU(e)}}function dU(e){for(;ot!==null;){var t=ot,r=t.sibling,a=t.return;if(wE(t),t===e){ot=null;return}if(r!==null){r.return=a,ot=r;return}ot=a}}function hU(e,t){switch(e.tag){case m:case I:case z:{e.mode&_n?(Iv(),Hr(_i,e,t),Fv(e)):Hr(_i,e,t);break}}}function pU(e){switch(e.tag){case m:case I:case z:{try{vo(Kn|$n,e)}catch(r){Mn(e,e.return,r)}break}case v:{var t=e.stateNode;try{t.componentDidMount()}catch(r){Mn(e,e.return,r)}break}}}function mU(e){switch(e.tag){case m:case I:case z:{try{vo(_i|$n,e)}catch(t){Mn(e,e.return,t)}break}}}function vU(e){switch(e.tag){case m:case I:case z:{try{Hr(Kn|$n,e,e.return)}catch(r){Mn(e,e.return,r)}break}case v:{var t=e.stateNode;typeof t.componentWillUnmount=="function"&&mg(e,e.return,t);break}}}function gU(e){switch(e.tag){case m:case I:case z:try{Hr(_i|$n,e,e.return)}catch(t){Mn(e,e.return,t)}}}if(typeof Symbol=="function"&&Symbol.for){var Rc=Symbol.for;Rc("selector.component"),Rc("selector.has_pseudo_class"),Rc("selector.role"),Rc("selector.test_id"),Rc("selector.text")}var _U=[];function yU(){_U.forEach(function(e){return e()})}var SU=i.ReactCurrentActQueue;function xU(e){{var t=typeof IS_REACT_ACT_ENVIRONMENT<"u"?IS_REACT_ACT_ENVIRONMENT:void 0,r=typeof jest<"u";return r&&t!==!1}}function zE(){{var e=typeof IS_REACT_ACT_ENVIRONMENT<"u"?IS_REACT_ACT_ENVIRONMENT:void 0;return!e&&SU.current!==null&&d("The current testing environment is not configured to support act(...)"),e}}var EU=Math.ceil,yg=i.ReactCurrentDispatcher,Sg=i.ReactCurrentOwner,Ei=i.ReactCurrentBatchConfig,Wr=i.ReactCurrentActQueue,Jn=0,BE=1,bi=2,Mr=4,Na=0,Cc=1,ss=2,Kd=3,Ac=4,kE=5,xg=6,Zt=Jn,Hi=null,Un=null,ei=Re,la=Re,Eg=oo(Re),ti=Na,wc=null,Zd=Re,Dc=Re,Qd=Re,Lc=null,tr=null,bg=0,HE=500,VE=1/0,bU=500,Pa=null;function Uc(){VE=ui()+bU}function GE(){return VE}var Jd=!1,Mg=null,bl=null,ls=!1,_o=null,Nc=Re,Tg=[],Rg=null,MU=50,Pc=0,Cg=null,Ag=!1,eh=!1,TU=50,Ml=0,th=null,Oc=Cn,nh=Re,WE=!1;function ih(){return Hi}function Vi(){return(Zt&(bi|Mr))!==Jn?ui():(Oc!==Cn||(Oc=ui()),Oc)}function yo(e){var t=e.mode;if((t&Kt)===St)return wt;if((Zt&bi)!==Jn&&ei!==Re)return Cu(ei);var r=S1()!==y1;if(r){if(Ei.transition!==null){var a=Ei.transition;a._updatedFibers||(a._updatedFibers=new Set),a._updatedFibers.add(e)}return nh===fi&&(nh=TS()),nh}var l=Nr();if(l!==fi)return l;var c=rD();return c}function RU(e){var t=e.mode;return(t&Kt)===St?wt:AC()}function ni(e,t,r,a){KU(),WE&&d("useInsertionEffect must not schedule updates."),Ag&&(eh=!0),Au(e,r,a),(Zt&bi)!==Re&&e===Hi?JU(t):(Ur&&AS(e,t,r),eN(t),e===Hi&&((Zt&bi)===Jn&&(Dc=kt(Dc,r)),ti===Ac&&So(e,ei)),nr(e,a),r===wt&&Zt===Jn&&(t.mode&Kt)===St&&!Wr.isBatchingLegacy&&(Uc(),Wx()))}function CU(e,t,r){var a=e.current;a.lanes=t,Au(e,t,r),nr(e,r)}function AU(e){return(Zt&bi)!==Jn}function nr(e,t){var r=e.callbackNode;EC(e,t);var a=Mf(e,e===Hi?ei:Re);if(a===Re){r!==null&&ob(r),e.callbackNode=null,e.callbackPriority=fi;return}var l=jo(a),c=e.callbackPriority;if(c===l&&!(Wr.current!==null&&r!==Og)){r==null&&c!==wt&&d("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");return}r!=null&&ob(r);var h;if(l===wt)e.tag===so?(Wr.isBatchingLegacy!==null&&(Wr.didScheduleLegacyUpdate=!0),n1(YE.bind(null,e))):Gx(YE.bind(null,e)),Wr.current!==null?Wr.current.push(lo):oD(function(){(Zt&(bi|Mr))===Jn&&lo()}),h=null;else{var g;switch(LS(a)){case ur:g=Sf;break;case Ma:g=Mp;break;case Ta:g=Go;break;case Cf:g=Tp;break;default:g=Go;break}h=Fg(g,XE.bind(null,e))}e.callbackPriority=l,e.callbackNode=h}function XE(e,t){if(j1(),Oc=Cn,nh=Re,(Zt&(bi|Mr))!==Jn)throw new Error("Should not already be working.");var r=e.callbackNode,a=Fa();if(a&&e.callbackNode!==r)return null;var l=Mf(e,e===Hi?ei:Re);if(l===Re)return null;var c=!Tf(e,l)&&!CC(e,l)&&!t,h=c?zU(e,l):ah(e,l);if(h!==Na){if(h===ss){var g=Yp(e);g!==Re&&(l=g,h=wg(e,g))}if(h===Cc){var E=wc;throw us(e,Re),So(e,l),nr(e,ui()),E}if(h===xg)So(e,l);else{var w=!Tf(e,l),U=e.current.alternate;if(w&&!DU(U)){if(h=ah(e,l),h===ss){var j=Yp(e);j!==Re&&(l=j,h=wg(e,j))}if(h===Cc){var W=wc;throw us(e,Re),So(e,l),nr(e,ui()),W}}e.finishedWork=U,e.finishedLanes=l,wU(e,h,l)}}return nr(e,ui()),e.callbackNode===r?XE.bind(null,e):null}function wg(e,t){var r=Lc;if(Af(e)){var a=us(e,t);a.flags|=Sa,$D(e.containerInfo)}var l=ah(e,t);if(l!==ss){var c=tr;tr=r,c!==null&&jE(c)}return l}function jE(e){tr===null?tr=e:tr.push.apply(tr,e)}function wU(e,t,r){switch(t){case Na:case Cc:throw new Error("Root did not complete. This is a bug in React.");case ss:{cs(e,tr,Pa);break}case Kd:{if(So(e,r),bS(r)&&!sb()){var a=bg+HE-ui();if(a>10){var l=Mf(e,Re);if(l!==Re)break;var c=e.suspendedLanes;if(!qs(c,r)){Vi(),CS(e,c);break}e.timeoutHandle=Rm(cs.bind(null,e,tr,Pa),a);break}}cs(e,tr,Pa);break}case Ac:{if(So(e,r),RC(r))break;if(!sb()){var h=SC(e,r),g=h,E=ui()-g,w=$U(E)-E;if(w>10){e.timeoutHandle=Rm(cs.bind(null,e,tr,Pa),w);break}}cs(e,tr,Pa);break}case kE:{cs(e,tr,Pa);break}default:throw new Error("Unknown root exit status.")}}function DU(e){for(var t=e;;){if(t.flags&gp){var r=t.updateQueue;if(r!==null){var a=r.stores;if(a!==null)for(var l=0;l<a.length;l++){var c=a[l],h=c.getSnapshot,g=c.value;try{if(!fr(h(),g))return!1}catch{return!1}}}}var E=t.child;if(t.subtreeFlags&gp&&E!==null){E.return=t,t=E;continue}if(t===e)return!0;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}return!0}function So(e,t){t=Rf(t,Qd),t=Rf(t,Dc),DC(e,t)}function YE(e){if(Y1(),(Zt&(bi|Mr))!==Jn)throw new Error("Should not already be working.");Fa();var t=Mf(e,Re);if(!lr(t,wt))return nr(e,ui()),null;var r=ah(e,t);if(e.tag!==so&&r===ss){var a=Yp(e);a!==Re&&(t=a,r=wg(e,a))}if(r===Cc){var l=wc;throw us(e,Re),So(e,t),nr(e,ui()),l}if(r===xg)throw new Error("Root did not complete. This is a bug in React.");var c=e.current.alternate;return e.finishedWork=c,e.finishedLanes=t,cs(e,tr,Pa),nr(e,ui()),null}function LU(e,t){t!==Re&&(Zp(e,kt(t,wt)),nr(e,ui()),(Zt&(bi|Mr))===Jn&&(Uc(),lo()))}function Dg(e,t){var r=Zt;Zt|=BE;try{return e(t)}finally{Zt=r,Zt===Jn&&!Wr.isBatchingLegacy&&(Uc(),Wx())}}function UU(e,t,r,a,l){var c=Nr(),h=Ei.transition;try{return Ei.transition=null,di(ur),e(t,r,a,l)}finally{di(c),Ei.transition=h,Zt===Jn&&Uc()}}function Oa(e){_o!==null&&_o.tag===so&&(Zt&(bi|Mr))===Jn&&Fa();var t=Zt;Zt|=BE;var r=Ei.transition,a=Nr();try{return Ei.transition=null,di(ur),e?e():void 0}finally{di(a),Ei.transition=r,Zt=t,(Zt&(bi|Mr))===Jn&&lo()}}function qE(){return(Zt&(bi|Mr))!==Jn}function rh(e,t){Ai(Eg,la,e),la=kt(la,t)}function Lg(e){la=Eg.current,Ci(Eg,e)}function us(e,t){e.finishedWork=null,e.finishedLanes=Re;var r=e.timeoutHandle;if(r!==Cm&&(e.timeoutHandle=Cm,aD(r)),Un!==null)for(var a=Un.return;a!==null;){var l=a.alternate;bE(l,a),a=a.return}Hi=e;var c=fs(e.current,null);return Un=c,ei=la=t,ti=Na,wc=null,Zd=Re,Dc=Re,Qd=Re,Lc=null,tr=null,C1(),Fr.discardPendingWarnings(),c}function $E(e,t){do{var r=Un;try{if(pd(),y0(),li(),Sg.current=null,r===null||r.return===null){ti=Cc,wc=t,Un=null;return}if(me&&r.mode&_n&&Gd(r,!0),Ht)if(Ws(),t!==null&&typeof t=="object"&&typeof t.then=="function"){var a=t;lC(r,a,ei)}else sC(r,t,ei);nL(e,r.return,r,t,ei),JE(r)}catch(l){t=l,Un===r&&r!==null?(r=r.return,Un=r):r=Un;continue}return}while(!0)}function KE(){var e=yg.current;return yg.current=zd,e===null?zd:e}function ZE(e){yg.current=e}function NU(){bg=ui()}function Fc(e){Zd=kt(e,Zd)}function PU(){ti===Na&&(ti=Kd)}function Ug(){(ti===Na||ti===Kd||ti===ss)&&(ti=Ac),Hi!==null&&(qp(Zd)||qp(Dc))&&So(Hi,ei)}function OU(e){ti!==Ac&&(ti=ss),Lc===null?Lc=[e]:Lc.push(e)}function FU(){return ti===Na}function ah(e,t){var r=Zt;Zt|=bi;var a=KE();if(Hi!==e||ei!==t){if(Ur){var l=e.memoizedUpdaters;l.size>0&&(Ic(e,ei),l.clear()),wS(e,t)}Pa=DS(),us(e,t)}_S(t);do try{IU();break}catch(c){$E(e,c)}while(!0);if(pd(),Zt=r,ZE(a),Un!==null)throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");return yS(),Hi=null,ei=Re,ti}function IU(){for(;Un!==null;)QE(Un)}function zU(e,t){var r=Zt;Zt|=bi;var a=KE();if(Hi!==e||ei!==t){if(Ur){var l=e.memoizedUpdaters;l.size>0&&(Ic(e,ei),l.clear()),wS(e,t)}Pa=DS(),Uc(),us(e,t)}_S(t);do try{BU();break}catch(c){$E(e,c)}while(!0);return pd(),ZE(a),Zt=r,Un!==null?(hC(),Na):(yS(),Hi=null,ei=Re,ti)}function BU(){for(;Un!==null&&!HR();)QE(Un)}function QE(e){var t=e.alternate;wn(e);var r;(e.mode&_n)!==St?(Ov(e),r=Ng(t,e,la),Gd(e,!0)):r=Ng(t,e,la),li(),e.memoizedProps=e.pendingProps,r===null?JE(e):Un=r,Sg.current=null}function JE(e){var t=e;do{var r=t.alternate,a=t.return;if((t.flags&yf)===bt){wn(t);var l=void 0;if((t.mode&_n)===St?l=EE(r,t,la):(Ov(t),l=EE(r,t,la),Gd(t,!1)),li(),l!==null){Un=l;return}}else{var c=PL(r,t);if(c!==null){c.flags&=OR,Un=c;return}if((t.mode&_n)!==St){Gd(t,!1);for(var h=t.actualDuration,g=t.child;g!==null;)h+=g.actualDuration,g=g.sibling;t.actualDuration=h}if(a!==null)a.flags|=yf,a.subtreeFlags=bt,a.deletions=null;else{ti=xg,Un=null;return}}var E=t.sibling;if(E!==null){Un=E;return}t=a,Un=t}while(t!==null);ti===Na&&(ti=kE)}function cs(e,t,r){var a=Nr(),l=Ei.transition;try{Ei.transition=null,di(ur),kU(e,t,r,a)}finally{Ei.transition=l,di(a)}return null}function kU(e,t,r,a){do Fa();while(_o!==null);if(ZU(),(Zt&(bi|Mr))!==Jn)throw new Error("Should not already be working.");var l=e.finishedWork,c=e.finishedLanes;if(eC(c),l===null)return mS(),null;if(c===Re&&d("root.finishedLanes should not be empty during a commit. This is a bug in React."),e.finishedWork=null,e.finishedLanes=Re,l===e.current)throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");e.callbackNode=null,e.callbackPriority=fi;var h=kt(l.lanes,l.childLanes);LC(e,h),e===Hi&&(Hi=null,Un=null,ei=Re),((l.subtreeFlags&Vs)!==bt||(l.flags&Vs)!==bt)&&(ls||(ls=!0,Rg=r,Fg(Go,function(){return Fa(),null})));var g=(l.subtreeFlags&(Ep|bp|Su|Vs))!==bt,E=(l.flags&(Ep|bp|Su|Vs))!==bt;if(g||E){var w=Ei.transition;Ei.transition=null;var U=Nr();di(ur);var j=Zt;Zt|=Mr,Sg.current=null,BL(e,l),W0(),JL(e,l,c),Qw(e.containerInfo),e.current=l,uC(c),eU(l,e,c),cC(),VR(),Zt=j,di(U),Ei.transition=w}else e.current=l,W0();var W=ls;if(ls?(ls=!1,_o=e,Nc=c):(Ml=0,th=null),h=e.pendingLanes,h===Re&&(bl=null),W||ib(e.current,!1),$R(l.stateNode,a),Ur&&e.memoizedUpdaters.clear(),yU(),nr(e,ui()),t!==null)for(var re=e.onRecoverableError,oe=0;oe<t.length;oe++){var ge=t[oe],Ye=ge.stack,yt=ge.digest;re(ge.value,{componentStack:Ye,digest:yt})}if(Jd){Jd=!1;var ht=Mg;throw Mg=null,ht}return lr(Nc,wt)&&e.tag!==so&&Fa(),h=e.pendingLanes,lr(h,wt)?(X1(),e===Cg?Pc++:(Pc=0,Cg=e)):Pc=0,lo(),mS(),null}function Fa(){if(_o!==null){var e=LS(Nc),t=OC(Ta,e),r=Ei.transition,a=Nr();try{return Ei.transition=null,di(t),VU()}finally{di(a),Ei.transition=r}}return!1}function HU(e){Tg.push(e),ls||(ls=!0,Fg(Go,function(){return Fa(),null}))}function VU(){if(_o===null)return!1;var e=Rg;Rg=null;var t=_o,r=Nc;if(_o=null,Nc=Re,(Zt&(bi|Mr))!==Jn)throw new Error("Cannot flush passive effects while already rendering.");Ag=!0,eh=!1,fC(r);var a=Zt;Zt|=Mr,sU(t.current),iU(t,t.current,r,e);{var l=Tg;Tg=[];for(var c=0;c<l.length;c++){var h=l[c];GL(t,h)}}dC(),ib(t.current,!0),Zt=a,lo(),eh?t===th?Ml++:(Ml=0,th=t):Ml=0,Ag=!1,eh=!1,KR(t);{var g=t.current.stateNode;g.effectDuration=0,g.passiveEffectDuration=0}return!0}function eb(e){return bl!==null&&bl.has(e)}function GU(e){bl===null?bl=new Set([e]):bl.add(e)}function WU(e){Jd||(Jd=!0,Mg=e)}var XU=WU;function tb(e,t,r){var a=as(r,t),l=Q0(e,a,wt),c=co(e,l,wt),h=Vi();c!==null&&(Au(c,wt,h),nr(c,h))}function Mn(e,t,r){if(FL(r),zc(!1),e.tag===y){tb(e,e,r);return}var a=null;for(a=t;a!==null;){if(a.tag===y){tb(a,e,r);return}else if(a.tag===v){var l=a.type,c=a.stateNode;if(typeof l.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&!eb(c)){var h=as(r,e),g=Jv(a,h,wt),E=co(a,g,wt),w=Vi();E!==null&&(Au(E,wt,w),nr(E,w));return}}a=a.return}d(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,r)}function jU(e,t,r){var a=e.pingCache;a!==null&&a.delete(t);var l=Vi();CS(e,r),tN(e),Hi===e&&qs(ei,r)&&(ti===Ac||ti===Kd&&bS(ei)&&ui()-bg<HE?us(e,Re):Qd=kt(Qd,r)),nr(e,l)}function nb(e,t){t===fi&&(t=RU(e));var r=Vi(),a=Ji(e,t);a!==null&&(Au(a,t,r),nr(a,r))}function YU(e){var t=e.memoizedState,r=fi;t!==null&&(r=t.retryLane),nb(e,r)}function qU(e,t){var r=fi,a;switch(e.tag){case $:a=e.stateNode;var l=e.memoizedState;l!==null&&(r=l.retryLane);break;case V:a=e.stateNode;break;default:throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.")}a!==null&&a.delete(t),nb(e,r)}function $U(e){return e<120?120:e<480?480:e<1080?1080:e<1920?1920:e<3e3?3e3:e<4320?4320:EU(e/1960)*1960}function KU(){if(Pc>MU)throw Pc=0,Cg=null,new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");Ml>TU&&(Ml=0,th=null,d("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."))}function ZU(){Fr.flushLegacyContextWarning(),Fr.flushPendingUnsafeLifecycleWarnings()}function ib(e,t){wn(e),oh(e,Qa,vU),t&&oh(e,xp,gU),oh(e,Qa,pU),t&&oh(e,xp,mU),li()}function oh(e,t,r){for(var a=e,l=null;a!==null;){var c=a.subtreeFlags&t;a!==l&&a.child!==null&&c!==bt?a=a.child:((a.flags&t)!==bt&&r(a),a.sibling!==null?a=a.sibling:a=l=a.return)}}var sh=null;function rb(e){{if((Zt&bi)!==Jn||!(e.mode&Kt))return;var t=e.tag;if(t!==S&&t!==y&&t!==v&&t!==m&&t!==I&&t!==G&&t!==z)return;var r=Ot(e)||"ReactComponent";if(sh!==null){if(sh.has(r))return;sh.add(r)}else sh=new Set([r]);var a=Fi;try{wn(e),d("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.")}finally{a?wn(e):li()}}}var Ng;{var QU=null;Ng=function(e,t,r){var a=db(QU,t);try{return gE(e,t,r)}catch(c){if(c1()||c!==null&&typeof c=="object"&&typeof c.then=="function")throw c;if(pd(),y0(),bE(e,t),db(t,a),t.mode&_n&&Ov(t),mp(null,gE,null,e,t,r),UR()){var l=vp();typeof l=="object"&&l!==null&&l._suppressLogging&&typeof c=="object"&&c!==null&&!c._suppressLogging&&(c._suppressLogging=!0)}throw c}}}var ab=!1,Pg;Pg=new Set;function JU(e){if(Po&&!V1())switch(e.tag){case m:case I:case z:{var t=Un&&Ot(Un)||"Unknown",r=t;if(!Pg.has(r)){Pg.add(r);var a=Ot(e)||"Unknown";d("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render",a,t,t)}break}case v:{ab||(d("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."),ab=!0);break}}}function Ic(e,t){if(Ur){var r=e.memoizedUpdaters;r.forEach(function(a){AS(e,a,t)})}}var Og={};function Fg(e,t){{var r=Wr.current;return r!==null?(r.push(t),Og):pS(e,t)}}function ob(e){if(e!==Og)return kR(e)}function sb(){return Wr.current!==null}function eN(e){{if(e.mode&Kt){if(!zE())return}else if(!xU()||Zt!==Jn||e.tag!==m&&e.tag!==I&&e.tag!==z)return;if(Wr.current===null){var t=Fi;try{wn(e),d(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`,Ot(e))}finally{t?wn(e):li()}}}}function tN(e){e.tag!==so&&zE()&&Wr.current===null&&d(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`)}function zc(e){WE=e}var Tr=null,Tl=null,nN=function(e){Tr=e};function Rl(e){{if(Tr===null)return e;var t=Tr(e);return t===void 0?e:t.current}}function Ig(e){return Rl(e)}function zg(e){{if(Tr===null)return e;var t=Tr(e);if(t===void 0){if(e!=null&&typeof e.render=="function"){var r=Rl(e.render);if(e.render!==r){var a={$$typeof:mt,render:r};return e.displayName!==void 0&&(a.displayName=e.displayName),a}}return e}return t.current}}function lb(e,t){{if(Tr===null)return!1;var r=e.elementType,a=t.type,l=!1,c=typeof a=="object"&&a!==null?a.$$typeof:null;switch(e.tag){case v:{typeof a=="function"&&(l=!0);break}case m:{(typeof a=="function"||c===_t)&&(l=!0);break}case I:{(c===mt||c===_t)&&(l=!0);break}case G:case z:{(c===It||c===_t)&&(l=!0);break}default:return!1}if(l){var h=Tr(r);if(h!==void 0&&h===Tr(a))return!0}return!1}}function ub(e){{if(Tr===null||typeof WeakSet!="function")return;Tl===null&&(Tl=new WeakSet),Tl.add(e)}}var iN=function(e,t){{if(Tr===null)return;var r=t.staleFamilies,a=t.updatedFamilies;Fa(),Oa(function(){Bg(e.current,a,r)})}},rN=function(e,t){{if(e.context!==dr)return;Fa(),Oa(function(){Bc(t,e,null,null)})}};function Bg(e,t,r){{var a=e.alternate,l=e.child,c=e.sibling,h=e.tag,g=e.type,E=null;switch(h){case m:case z:case v:E=g;break;case I:E=g.render;break}if(Tr===null)throw new Error("Expected resolveFamily to be set during hot reload.");var w=!1,U=!1;if(E!==null){var j=Tr(E);j!==void 0&&(r.has(j)?U=!0:t.has(j)&&(h===v?U=!0:w=!0))}if(Tl!==null&&(Tl.has(e)||a!==null&&Tl.has(a))&&(U=!0),U&&(e._debugNeedsRemount=!0),U||w){var W=Ji(e,wt);W!==null&&ni(W,e,wt,Cn)}l!==null&&!U&&Bg(l,t,r),c!==null&&Bg(c,t,r)}}var aN=function(e,t){{var r=new Set,a=new Set(t.map(function(l){return l.current}));return kg(e.current,a,r),r}};function kg(e,t,r){{var a=e.child,l=e.sibling,c=e.tag,h=e.type,g=null;switch(c){case m:case z:case v:g=h;break;case I:g=h.render;break}var E=!1;g!==null&&t.has(g)&&(E=!0),E?oN(e,r):a!==null&&kg(a,t,r),l!==null&&kg(l,t,r)}}function oN(e,t){{var r=sN(e,t);if(r)return;for(var a=e;;){switch(a.tag){case b:t.add(a.stateNode);return;case x:t.add(a.stateNode.containerInfo);return;case y:t.add(a.stateNode.containerInfo);return}if(a.return===null)throw new Error("Expected to reach root first.");a=a.return}}}function sN(e,t){for(var r=e,a=!1;;){if(r.tag===b)a=!0,t.add(r.stateNode);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)return a;for(;r.sibling===null;){if(r.return===null||r.return===e)return a;r=r.return}r.sibling.return=r.return,r=r.sibling}return!1}var Hg;{Hg=!1;try{var cb=Object.preventExtensions({})}catch{Hg=!0}}function lN(e,t,r,a){this.tag=e,this.key=r,this.elementType=null,this.type=null,this.stateNode=null,this.return=null,this.child=null,this.sibling=null,this.index=0,this.ref=null,this.pendingProps=t,this.memoizedProps=null,this.updateQueue=null,this.memoizedState=null,this.dependencies=null,this.mode=a,this.flags=bt,this.subtreeFlags=bt,this.deletions=null,this.lanes=Re,this.childLanes=Re,this.alternate=null,this.actualDuration=Number.NaN,this.actualStartTime=Number.NaN,this.selfBaseDuration=Number.NaN,this.treeBaseDuration=Number.NaN,this.actualDuration=0,this.actualStartTime=-1,this.selfBaseDuration=0,this.treeBaseDuration=0,this._debugSource=null,this._debugOwner=null,this._debugNeedsRemount=!1,this._debugHookTypes=null,!Hg&&typeof Object.preventExtensions=="function"&&Object.preventExtensions(this)}var hr=function(e,t,r,a){return new lN(e,t,r,a)};function Vg(e){var t=e.prototype;return!!(t&&t.isReactComponent)}function uN(e){return typeof e=="function"&&!Vg(e)&&e.defaultProps===void 0}function cN(e){if(typeof e=="function")return Vg(e)?v:m;if(e!=null){var t=e.$$typeof;if(t===mt)return I;if(t===It)return G}return S}function fs(e,t){var r=e.alternate;r===null?(r=hr(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r._debugSource=e._debugSource,r._debugOwner=e._debugOwner,r._debugHookTypes=e._debugHookTypes,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=bt,r.subtreeFlags=bt,r.deletions=null,r.actualDuration=0,r.actualStartTime=-1),r.flags=e.flags&Ea,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue;var a=e.dependencies;switch(r.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.selfBaseDuration=e.selfBaseDuration,r.treeBaseDuration=e.treeBaseDuration,r._debugNeedsRemount=e._debugNeedsRemount,r.tag){case S:case m:case z:r.type=Rl(e.type);break;case v:r.type=Ig(e.type);break;case I:r.type=zg(e.type);break}return r}function fN(e,t){e.flags&=Ea|Xn;var r=e.alternate;if(r===null)e.childLanes=Re,e.lanes=t,e.child=null,e.subtreeFlags=bt,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null,e.selfBaseDuration=0,e.treeBaseDuration=0;else{e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=bt,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type;var a=r.dependencies;e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},e.selfBaseDuration=r.selfBaseDuration,e.treeBaseDuration=r.treeBaseDuration}return e}function dN(e,t,r){var a;return e===rd?(a=Kt,t===!0&&(a|=Nn,a|=Qr)):a=St,Ur&&(a|=_n),hr(y,null,null,a)}function Gg(e,t,r,a,l,c){var h=S,g=e;if(typeof e=="function")Vg(e)?(h=v,g=Ig(g)):g=Rl(g);else if(typeof e=="string")h=b;else e:switch(e){case ai:return xo(r.children,l,c,t);case Dr:h=M,l|=Nn,(l&Kt)!==St&&(l|=Qr);break;case k:return hN(r,l,c,t);case Bt:return pN(r,l,c,t);case Mt:return mN(r,l,c,t);case A:return fb(r,l,c,t);case Y:case zn:case ne:case ie:case bn:default:{if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ce:h=F;break e;case Ve:h=_;break e;case mt:h=I,g=zg(g);break e;case It:h=G;break e;case _t:h=Z,g=null;break e}var E="";{(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(E+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var w=a?Ot(a):null;w&&(E+=`

Check the render method of \``+w+"`.")}throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) "+("but got: "+(e==null?e:typeof e)+"."+E))}}var U=hr(h,r,t,l);return U.elementType=e,U.type=g,U.lanes=c,U._debugOwner=a,U}function Wg(e,t,r){var a=null;a=e._owner;var l=e.type,c=e.key,h=e.props,g=Gg(l,c,h,a,t,r);return g._debugSource=e._source,g._debugOwner=e._owner,g}function xo(e,t,r,a){var l=hr(L,e,a,t);return l.lanes=r,l}function hN(e,t,r,a){typeof e.id!="string"&&d('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',typeof e.id);var l=hr(P,e,a,t|_n);return l.elementType=k,l.lanes=r,l.stateNode={effectDuration:0,passiveEffectDuration:0},l}function pN(e,t,r,a){var l=hr($,e,a,t);return l.elementType=Bt,l.lanes=r,l}function mN(e,t,r,a){var l=hr(V,e,a,t);return l.elementType=Mt,l.lanes=r,l}function fb(e,t,r,a){var l=hr(K,e,a,t);l.elementType=A,l.lanes=r;var c={isHidden:!1};return l.stateNode=c,l}function Xg(e,t,r){var a=hr(C,e,null,t);return a.lanes=r,a}function vN(){var e=hr(b,null,null,St);return e.elementType="DELETED",e}function gN(e){var t=hr(D,null,null,St);return t.stateNode=e,t}function jg(e,t,r){var a=e.children!==null?e.children:[],l=hr(x,a,e.key,t);return l.lanes=r,l.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},l}function db(e,t){return e===null&&(e=hr(S,null,null,St)),e.tag=t.tag,e.key=t.key,e.elementType=t.elementType,e.type=t.type,e.stateNode=t.stateNode,e.return=t.return,e.child=t.child,e.sibling=t.sibling,e.index=t.index,e.ref=t.ref,e.pendingProps=t.pendingProps,e.memoizedProps=t.memoizedProps,e.updateQueue=t.updateQueue,e.memoizedState=t.memoizedState,e.dependencies=t.dependencies,e.mode=t.mode,e.flags=t.flags,e.subtreeFlags=t.subtreeFlags,e.deletions=t.deletions,e.lanes=t.lanes,e.childLanes=t.childLanes,e.alternate=t.alternate,e.actualDuration=t.actualDuration,e.actualStartTime=t.actualStartTime,e.selfBaseDuration=t.selfBaseDuration,e.treeBaseDuration=t.treeBaseDuration,e._debugSource=t._debugSource,e._debugOwner=t._debugOwner,e._debugNeedsRemount=t._debugNeedsRemount,e._debugHookTypes=t._debugHookTypes,e}function _N(e,t,r,a,l){this.tag=t,this.containerInfo=e,this.pendingChildren=null,this.current=null,this.pingCache=null,this.finishedWork=null,this.timeoutHandle=Cm,this.context=null,this.pendingContext=null,this.callbackNode=null,this.callbackPriority=fi,this.eventTimes=Kp(Re),this.expirationTimes=Kp(Cn),this.pendingLanes=Re,this.suspendedLanes=Re,this.pingedLanes=Re,this.expiredLanes=Re,this.mutableReadLanes=Re,this.finishedLanes=Re,this.entangledLanes=Re,this.entanglements=Kp(Re),this.identifierPrefix=a,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null,this.effectDuration=0,this.passiveEffectDuration=0;{this.memoizedUpdaters=new Set;for(var c=this.pendingUpdatersLaneMap=[],h=0;h<Cp;h++)c.push(new Set)}switch(t){case rd:this._debugRootType=r?"hydrateRoot()":"createRoot()";break;case so:this._debugRootType=r?"hydrate()":"render()";break}}function hb(e,t,r,a,l,c,h,g,E,w){var U=new _N(e,t,r,g,E),j=dN(t,c);U.current=j,j.stateNode=U;{var W={element:a,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null};j.memoizedState=W}return av(j),U}var Yg="18.3.1";function yN(e,t,r){var a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;return Rt(a),{$$typeof:Ti,key:a==null?null:""+a,children:e,containerInfo:t,implementation:r}}var qg,$g;qg=!1,$g={};function pb(e){if(!e)return dr;var t=Bs(e),r=t1(t);if(t.tag===v){var a=t.type;if(ta(a))return Hx(t,a,r)}return r}function SN(e,t){{var r=Bs(e);if(r===void 0){if(typeof e.render=="function")throw new Error("Unable to find node on an unmounted component.");var a=Object.keys(e).join(",");throw new Error("Argument appears to not be a ReactComponent. Keys: "+a)}var l=fS(r);if(l===null)return null;if(l.mode&Nn){var c=Ot(r)||"Component";if(!$g[c]){$g[c]=!0;var h=Fi;try{wn(l),r.mode&Nn?d("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node",t,t,c):d("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node",t,t,c)}finally{h?wn(h):li()}}}return l.stateNode}}function mb(e,t,r,a,l,c,h,g){var E=!1,w=null;return hb(e,t,E,w,r,a,l,c,h)}function vb(e,t,r,a,l,c,h,g,E,w){var U=!0,j=hb(r,a,U,e,l,c,h,g,E);j.context=pb(null);var W=j.current,re=Vi(),oe=yo(W),ge=La(re,oe);return ge.callback=t??null,co(W,ge,oe),CU(j,oe,re),j}function Bc(e,t,r,a){qR(t,e);var l=t.current,c=Vi(),h=yo(l);pC(h);var g=pb(r);t.context===null?t.context=g:t.pendingContext=g,Po&&Fi!==null&&!qg&&(qg=!0,d(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,Ot(Fi)||"Unknown"));var E=La(c,h);E.payload={element:e},a=a===void 0?null:a,a!==null&&(typeof a!="function"&&d("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.",a),E.callback=a);var w=co(l,E,h);return w!==null&&(ni(w,l,h,c),yd(w,l,h)),h}function lh(e){var t=e.current;if(!t.child)return null;switch(t.child.tag){case b:return t.child.stateNode;default:return t.child.stateNode}}function xN(e){switch(e.tag){case y:{var t=e.stateNode;if(Af(t)){var r=bC(t);LU(t,r)}break}case $:{Oa(function(){var l=Ji(e,wt);if(l!==null){var c=Vi();ni(l,e,wt,c)}});var a=wt;Kg(e,a);break}}}function gb(e,t){var r=e.memoizedState;r!==null&&r.dehydrated!==null&&(r.retryLane=wC(r.retryLane,t))}function Kg(e,t){gb(e,t);var r=e.alternate;r&&gb(r,t)}function EN(e){if(e.tag===$){var t=Mu,r=Ji(e,t);if(r!==null){var a=Vi();ni(r,e,t,a)}Kg(e,t)}}function bN(e){if(e.tag===$){var t=yo(e),r=Ji(e,t);if(r!==null){var a=Vi();ni(r,e,t,a)}Kg(e,t)}}function _b(e){var t=BR(e);return t===null?null:t.stateNode}var yb=function(e){return null};function MN(e){return yb(e)}var Sb=function(e){return!1};function TN(e){return Sb(e)}var xb=null,Eb=null,bb=null,Mb=null,Tb=null,Rb=null,Cb=null,Ab=null,wb=null;{var Db=function(e,t,r){var a=t[r],l=Xt(e)?e.slice():Ae({},e);return r+1===t.length?(Xt(l)?l.splice(a,1):delete l[a],l):(l[a]=Db(e[a],t,r+1),l)},Lb=function(e,t){return Db(e,t,0)},Ub=function(e,t,r,a){var l=t[a],c=Xt(e)?e.slice():Ae({},e);if(a+1===t.length){var h=r[a];c[h]=c[l],Xt(c)?c.splice(l,1):delete c[l]}else c[l]=Ub(e[l],t,r,a+1);return c},Nb=function(e,t,r){if(t.length!==r.length){f("copyWithRename() expects paths of the same length");return}else for(var a=0;a<r.length-1;a++)if(t[a]!==r[a]){f("copyWithRename() expects paths to be the same except for the deepest key");return}return Ub(e,t,r,0)},Pb=function(e,t,r,a){if(r>=t.length)return a;var l=t[r],c=Xt(e)?e.slice():Ae({},e);return c[l]=Pb(e[l],t,r+1,a),c},Ob=function(e,t,r){return Pb(e,t,0,r)},Zg=function(e,t){for(var r=e.memoizedState;r!==null&&t>0;)r=r.next,t--;return r};xb=function(e,t,r,a){var l=Zg(e,t);if(l!==null){var c=Ob(l.memoizedState,r,a);l.memoizedState=c,l.baseState=c,e.memoizedProps=Ae({},e.memoizedProps);var h=Ji(e,wt);h!==null&&ni(h,e,wt,Cn)}},Eb=function(e,t,r){var a=Zg(e,t);if(a!==null){var l=Lb(a.memoizedState,r);a.memoizedState=l,a.baseState=l,e.memoizedProps=Ae({},e.memoizedProps);var c=Ji(e,wt);c!==null&&ni(c,e,wt,Cn)}},bb=function(e,t,r,a){var l=Zg(e,t);if(l!==null){var c=Nb(l.memoizedState,r,a);l.memoizedState=c,l.baseState=c,e.memoizedProps=Ae({},e.memoizedProps);var h=Ji(e,wt);h!==null&&ni(h,e,wt,Cn)}},Mb=function(e,t,r){e.pendingProps=Ob(e.memoizedProps,t,r),e.alternate&&(e.alternate.pendingProps=e.pendingProps);var a=Ji(e,wt);a!==null&&ni(a,e,wt,Cn)},Tb=function(e,t){e.pendingProps=Lb(e.memoizedProps,t),e.alternate&&(e.alternate.pendingProps=e.pendingProps);var r=Ji(e,wt);r!==null&&ni(r,e,wt,Cn)},Rb=function(e,t,r){e.pendingProps=Nb(e.memoizedProps,t,r),e.alternate&&(e.alternate.pendingProps=e.pendingProps);var a=Ji(e,wt);a!==null&&ni(a,e,wt,Cn)},Cb=function(e){var t=Ji(e,wt);t!==null&&ni(t,e,wt,Cn)},Ab=function(e){yb=e},wb=function(e){Sb=e}}function RN(e){var t=fS(e);return t===null?null:t.stateNode}function CN(e){return null}function AN(){return Fi}function wN(e){var t=e.findFiberByHostInstance,r=i.ReactCurrentDispatcher;return YR({bundleType:e.bundleType,version:e.version,rendererPackageName:e.rendererPackageName,rendererConfig:e.rendererConfig,overrideHookState:xb,overrideHookStateDeletePath:Eb,overrideHookStateRenamePath:bb,overrideProps:Mb,overridePropsDeletePath:Tb,overridePropsRenamePath:Rb,setErrorHandler:Ab,setSuspenseHandler:wb,scheduleUpdate:Cb,currentDispatcherRef:r,findHostInstanceByFiber:RN,findFiberByHostInstance:t||CN,findHostInstancesForRefresh:aN,scheduleRefresh:iN,scheduleRoot:rN,setRefreshHandler:nN,getCurrentFiber:AN,reconcilerVersion:Yg})}var Fb=typeof reportError=="function"?reportError:function(e){console.error(e)};function Qg(e){this._internalRoot=e}uh.prototype.render=Qg.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw new Error("Cannot update an unmounted root.");{typeof arguments[1]=="function"?d("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."):ch(arguments[1])?d("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."):typeof arguments[1]<"u"&&d("You passed a second argument to root.render(...) but it only accepts one argument.");var r=t.containerInfo;if(r.nodeType!==Wn){var a=_b(t.current);a&&a.parentNode!==r&&d("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.")}}Bc(e,t,null,null)},uh.prototype.unmount=Qg.prototype.unmount=function(){typeof arguments[0]=="function"&&d("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;qE()&&d("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."),Oa(function(){Bc(null,e,null,null)}),Fx(t)}};function DN(e,t){if(!ch(e))throw new Error("createRoot(...): Target container is not a DOM element.");Ib(e);var r=!1,a=!1,l="",c=Fb;t!=null&&(t.hydrate?f("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."):typeof t=="object"&&t!==null&&t.$$typeof===Oi&&d(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`),t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(c=t.onRecoverableError),t.transitionCallbacks!==void 0&&t.transitionCallbacks);var h=mb(e,rd,null,r,a,l,c);Zf(h.current,e);var g=e.nodeType===Wn?e.parentNode:e;return Xu(g),new Qg(h)}function uh(e){this._internalRoot=e}function LN(e){e&&jC(e)}uh.prototype.unstable_scheduleHydration=LN;function UN(e,t,r){if(!ch(e))throw new Error("hydrateRoot(...): Target container is not a DOM element.");Ib(e),t===void 0&&d("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");var a=r??null,l=r!=null&&r.hydratedSources||null,c=!1,h=!1,g="",E=Fb;r!=null&&(r.unstable_strictMode===!0&&(c=!0),r.identifierPrefix!==void 0&&(g=r.identifierPrefix),r.onRecoverableError!==void 0&&(E=r.onRecoverableError));var w=vb(t,null,e,rd,a,c,h,g,E);if(Zf(w.current,e),Xu(e),l)for(var U=0;U<l.length;U++){var j=l[U];F1(w,j)}return new uh(w)}function ch(e){return!!(e&&(e.nodeType===Zi||e.nodeType===ya||e.nodeType===rp))}function kc(e){return!!(e&&(e.nodeType===Zi||e.nodeType===ya||e.nodeType===rp||e.nodeType===Wn&&e.nodeValue===" react-mount-point-unstable "))}function Ib(e){e.nodeType===Zi&&e.tagName&&e.tagName.toUpperCase()==="BODY"&&d("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."),nc(e)&&(e._reactRootContainer?d("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."):d("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."))}var NN=i.ReactCurrentOwner,zb;zb=function(e){if(e._reactRootContainer&&e.nodeType!==Wn){var t=_b(e._reactRootContainer.current);t&&t.parentNode!==e&&d("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.")}var r=!!e._reactRootContainer,a=Jg(e),l=!!(a&&ao(a));l&&!r&&d("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."),e.nodeType===Zi&&e.tagName&&e.tagName.toUpperCase()==="BODY"&&d("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.")};function Jg(e){return e?e.nodeType===ya?e.documentElement:e.firstChild:null}function Bb(){}function PN(e,t,r,a,l){if(l){if(typeof a=="function"){var c=a;a=function(){var W=lh(h);c.call(W)}}var h=vb(t,a,e,so,null,!1,!1,"",Bb);e._reactRootContainer=h,Zf(h.current,e);var g=e.nodeType===Wn?e.parentNode:e;return Xu(g),Oa(),h}else{for(var E;E=e.lastChild;)e.removeChild(E);if(typeof a=="function"){var w=a;a=function(){var W=lh(U);w.call(W)}}var U=mb(e,so,null,!1,!1,"",Bb);e._reactRootContainer=U,Zf(U.current,e);var j=e.nodeType===Wn?e.parentNode:e;return Xu(j),Oa(function(){Bc(t,U,r,a)}),U}}function ON(e,t){e!==null&&typeof e!="function"&&d("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.",t,e)}function fh(e,t,r,a,l){zb(r),ON(l===void 0?null:l,"render");var c=r._reactRootContainer,h;if(!c)h=PN(r,t,e,l,a);else{if(h=c,typeof l=="function"){var g=l;l=function(){var E=lh(h);g.call(E)}}Bc(t,h,e,l)}return lh(h)}var kb=!1;function FN(e){{kb||(kb=!0,d("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));var t=NN.current;if(t!==null&&t.stateNode!==null){var r=t.stateNode._warnedAboutRefsInRender;r||d("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.",on(t.type)||"A component"),t.stateNode._warnedAboutRefsInRender=!0}}return e==null?null:e.nodeType===Zi?e:SN(e,"findDOMNode")}function IN(e,t,r){if(d("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"),!kc(t))throw new Error("Target container is not a DOM element.");{var a=nc(t)&&t._reactRootContainer===void 0;a&&d("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?")}return fh(null,e,t,!0,r)}function zN(e,t,r){if(d("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"),!kc(t))throw new Error("Target container is not a DOM element.");{var a=nc(t)&&t._reactRootContainer===void 0;a&&d("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?")}return fh(null,e,t,!1,r)}function BN(e,t,r,a){if(d("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"),!kc(r))throw new Error("Target container is not a DOM element.");if(e==null||!NR(e))throw new Error("parentComponent must be a valid React Component");return fh(e,t,r,!1,a)}var Hb=!1;function kN(e){if(Hb||(Hb=!0,d("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")),!kc(e))throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");{var t=nc(e)&&e._reactRootContainer===void 0;t&&d("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?")}if(e._reactRootContainer){{var r=Jg(e),a=r&&!ao(r);a&&d("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.")}return Oa(function(){fh(null,null,e,!1,function(){e._reactRootContainer=null,Fx(e)})}),!0}else{{var l=Jg(e),c=!!(l&&ao(l)),h=e.nodeType===Zi&&kc(e.parentNode)&&!!e.parentNode._reactRootContainer;c&&d("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s",h?"You may have accidentally passed in a React root node instead of its container.":"Instead, have the parent component update its state and rerender in order to remove this component.")}return!1}}FC(xN),zC(EN),BC(bN),kC(Nr),HC(NC),(typeof Map!="function"||Map.prototype==null||typeof Map.prototype.forEach!="function"||typeof Set!="function"||Set.prototype==null||typeof Set.prototype.clear!="function"||typeof Set.prototype.forEach!="function")&&d("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),ER(Vw),TR(Dg,UU,Oa);function HN(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null;if(!ch(t))throw new Error("Target container is not a DOM element.");return yN(e,t,null,r)}function VN(e,t,r,a){return BN(e,t,r,a)}var e_={usingClientEntryPoint:!1,Events:[ao,il,Qf,Qy,Jy,Dg]};function GN(e,t){return e_.usingClientEntryPoint||d('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'),DN(e,t)}function WN(e,t,r){return e_.usingClientEntryPoint||d('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'),UN(e,t,r)}function XN(e){return qE()&&d("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."),Oa(e)}var jN=wN({findFiberByHostInstance:Ko,bundleType:1,version:Yg,rendererPackageName:"react-dom"});if(!jN&&zt&&window.top===window.self&&(navigator.userAgent.indexOf("Chrome")>-1&&navigator.userAgent.indexOf("Edge")===-1||navigator.userAgent.indexOf("Firefox")>-1)){var Vb=window.location.protocol;/^(https?|file):$/.test(Vb)&&console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools"+(Vb==="file:"?`
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq`:""),"font-weight:bold")}ir.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=e_,ir.createPortal=HN,ir.createRoot=GN,ir.findDOMNode=FN,ir.flushSync=XN,ir.hydrate=IN,ir.hydrateRoot=WN,ir.render=zN,ir.unmountComponentAtNode=kN,ir.unstable_batchedUpdates=Dg,ir.unstable_renderSubtreeIntoContainer=VN,ir.version=Yg,typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error)})(),ir}var Kb;function nP(){return Kb||(Kb=1,i_.exports=tP()),i_.exports}var Zb;function iP(){if(Zb)return hh;Zb=1;var s=nP();{var n=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;hh.createRoot=function(i,o){n.usingClientEntryPoint=!0;try{return s.createRoot(i,o)}finally{n.usingClientEntryPoint=!1}},hh.hydrateRoot=function(i,o,u){n.usingClientEntryPoint=!0;try{return s.hydrateRoot(i,o,u)}finally{n.usingClientEntryPoint=!1}}}return hh}var rP=iP();const aP=eT(rP);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const by="170",oP=0,Qb=1,sP=2,tT=1,nT=2,Ga=3,Lo=0,rr=1,Wa=2,wo=0,Xl=1,Jb=2,eM=3,tM=4,lP=5,xs=100,uP=101,cP=102,fP=103,dP=104,hP=200,pP=201,mP=202,vP=203,O_=204,F_=205,gP=206,_P=207,yP=208,SP=209,xP=210,EP=211,bP=212,MP=213,TP=214,I_=0,z_=1,B_=2,ql=3,k_=4,H_=5,V_=6,G_=7,iT=0,RP=1,CP=2,Do=0,AP=1,wP=2,DP=3,LP=4,UP=5,NP=6,PP=7,rT=300,$l=301,Kl=302,W_=303,X_=304,Xh=306,j_=1e3,bs=1001,Y_=1002,Kr=1003,OP=1004,ph=1005,fa=1006,o_=1007,Ms=1008,qa=1009,aT=1010,oT=1011,Jc=1012,My=1013,Rs=1014,Xa=1015,tf=1016,Ty=1017,Ry=1018,Zl=1020,sT=35902,lT=1021,uT=1022,$r=1023,cT=1024,fT=1025,jl=1026,Ql=1027,dT=1028,Cy=1029,hT=1030,Ay=1031,wy=1033,Oh=33776,Fh=33777,Ih=33778,zh=33779,q_=35840,$_=35841,K_=35842,Z_=35843,Q_=36196,J_=37492,ey=37496,ty=37808,ny=37809,iy=37810,ry=37811,ay=37812,oy=37813,sy=37814,ly=37815,uy=37816,cy=37817,fy=37818,dy=37819,hy=37820,py=37821,Bh=36492,my=36494,vy=36495,pT=36283,gy=36284,_y=36285,yy=36286,FP=3200,IP=3201,mT=0,zP=1,Ao="",Cr="srgb",tu="srgb-linear",jh="linear",En="srgb",Al=7680,nM=519,BP=512,kP=513,HP=514,vT=515,VP=516,GP=517,WP=518,XP=519,iM=35044,rM="300 es",ja=2e3,Gh=2001;class nu{addEventListener(n,i){this._listeners===void 0&&(this._listeners={});const o=this._listeners;o[n]===void 0&&(o[n]=[]),o[n].indexOf(i)===-1&&o[n].push(i)}hasEventListener(n,i){if(this._listeners===void 0)return!1;const o=this._listeners;return o[n]!==void 0&&o[n].indexOf(i)!==-1}removeEventListener(n,i){if(this._listeners===void 0)return;const u=this._listeners[n];if(u!==void 0){const f=u.indexOf(i);f!==-1&&u.splice(f,1)}}dispatchEvent(n){if(this._listeners===void 0)return;const o=this._listeners[n.type];if(o!==void 0){n.target=this;const u=o.slice(0);for(let f=0,d=u.length;f<d;f++)u[f].call(this,n);n.target=null}}}const Ui=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let aM=1234567;const Kc=Math.PI/180,ef=180/Math.PI;function iu(){const s=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0,o=Math.random()*4294967295|0;return(Ui[s&255]+Ui[s>>8&255]+Ui[s>>16&255]+Ui[s>>24&255]+"-"+Ui[n&255]+Ui[n>>8&255]+"-"+Ui[n>>16&15|64]+Ui[n>>24&255]+"-"+Ui[i&63|128]+Ui[i>>8&255]+"-"+Ui[i>>16&255]+Ui[i>>24&255]+Ui[o&255]+Ui[o>>8&255]+Ui[o>>16&255]+Ui[o>>24&255]).toLowerCase()}function Yi(s,n,i){return Math.max(n,Math.min(i,s))}function Dy(s,n){return(s%n+n)%n}function jP(s,n,i,o,u){return o+(s-n)*(u-o)/(i-n)}function YP(s,n,i){return s!==n?(i-s)/(n-s):0}function Zc(s,n,i){return(1-i)*s+i*n}function qP(s,n,i,o){return Zc(s,n,1-Math.exp(-i*o))}function $P(s,n=1){return n-Math.abs(Dy(s,n*2)-n)}function KP(s,n,i){return s<=n?0:s>=i?1:(s=(s-n)/(i-n),s*s*(3-2*s))}function ZP(s,n,i){return s<=n?0:s>=i?1:(s=(s-n)/(i-n),s*s*s*(s*(s*6-15)+10))}function QP(s,n){return s+Math.floor(Math.random()*(n-s+1))}function JP(s,n){return s+Math.random()*(n-s)}function eO(s){return s*(.5-Math.random())}function tO(s){s!==void 0&&(aM=s);let n=aM+=1831565813;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}function nO(s){return s*Kc}function iO(s){return s*ef}function rO(s){return(s&s-1)===0&&s!==0}function aO(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function oO(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function sO(s,n,i,o,u){const f=Math.cos,d=Math.sin,p=f(i/2),m=d(i/2),v=f((n+o)/2),S=d((n+o)/2),y=f((n-o)/2),x=d((n-o)/2),b=f((o-n)/2),C=d((o-n)/2);switch(u){case"XYX":s.set(p*S,m*y,m*x,p*v);break;case"YZY":s.set(m*x,p*S,m*y,p*v);break;case"ZXZ":s.set(m*y,m*x,p*S,p*v);break;case"XZX":s.set(p*S,m*C,m*b,p*v);break;case"YXY":s.set(m*b,p*S,m*C,p*v);break;case"ZYZ":s.set(m*C,m*b,p*S,p*v);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+u)}}function Vl(s,n){switch(n.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Xi(s,n){switch(n.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const lO={DEG2RAD:Kc,RAD2DEG:ef,generateUUID:iu,clamp:Yi,euclideanModulo:Dy,mapLinear:jP,inverseLerp:YP,lerp:Zc,damp:qP,pingpong:$P,smoothstep:KP,smootherstep:ZP,randInt:QP,randFloat:JP,randFloatSpread:eO,seededRandom:tO,degToRad:nO,radToDeg:iO,isPowerOfTwo:rO,ceilPowerOfTwo:aO,floorPowerOfTwo:oO,setQuaternionFromProperEuler:sO,normalize:Xi,denormalize:Vl};class xn{constructor(n=0,i=0){xn.prototype.isVector2=!0,this.x=n,this.y=i}get width(){return this.x}set width(n){this.x=n}get height(){return this.y}set height(n){this.y=n}set(n,i){return this.x=n,this.y=i,this}setScalar(n){return this.x=n,this.y=n,this}setX(n){return this.x=n,this}setY(n){return this.y=n,this}setComponent(n,i){switch(n){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+n)}return this}getComponent(n){switch(n){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+n)}}clone(){return new this.constructor(this.x,this.y)}copy(n){return this.x=n.x,this.y=n.y,this}add(n){return this.x+=n.x,this.y+=n.y,this}addScalar(n){return this.x+=n,this.y+=n,this}addVectors(n,i){return this.x=n.x+i.x,this.y=n.y+i.y,this}addScaledVector(n,i){return this.x+=n.x*i,this.y+=n.y*i,this}sub(n){return this.x-=n.x,this.y-=n.y,this}subScalar(n){return this.x-=n,this.y-=n,this}subVectors(n,i){return this.x=n.x-i.x,this.y=n.y-i.y,this}multiply(n){return this.x*=n.x,this.y*=n.y,this}multiplyScalar(n){return this.x*=n,this.y*=n,this}divide(n){return this.x/=n.x,this.y/=n.y,this}divideScalar(n){return this.multiplyScalar(1/n)}applyMatrix3(n){const i=this.x,o=this.y,u=n.elements;return this.x=u[0]*i+u[3]*o+u[6],this.y=u[1]*i+u[4]*o+u[7],this}min(n){return this.x=Math.min(this.x,n.x),this.y=Math.min(this.y,n.y),this}max(n){return this.x=Math.max(this.x,n.x),this.y=Math.max(this.y,n.y),this}clamp(n,i){return this.x=Math.max(n.x,Math.min(i.x,this.x)),this.y=Math.max(n.y,Math.min(i.y,this.y)),this}clampScalar(n,i){return this.x=Math.max(n,Math.min(i,this.x)),this.y=Math.max(n,Math.min(i,this.y)),this}clampLength(n,i){const o=this.length();return this.divideScalar(o||1).multiplyScalar(Math.max(n,Math.min(i,o)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(n){return this.x*n.x+this.y*n.y}cross(n){return this.x*n.y-this.y*n.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(n){const i=Math.sqrt(this.lengthSq()*n.lengthSq());if(i===0)return Math.PI/2;const o=this.dot(n)/i;return Math.acos(Yi(o,-1,1))}distanceTo(n){return Math.sqrt(this.distanceToSquared(n))}distanceToSquared(n){const i=this.x-n.x,o=this.y-n.y;return i*i+o*o}manhattanDistanceTo(n){return Math.abs(this.x-n.x)+Math.abs(this.y-n.y)}setLength(n){return this.normalize().multiplyScalar(n)}lerp(n,i){return this.x+=(n.x-this.x)*i,this.y+=(n.y-this.y)*i,this}lerpVectors(n,i,o){return this.x=n.x+(i.x-n.x)*o,this.y=n.y+(i.y-n.y)*o,this}equals(n){return n.x===this.x&&n.y===this.y}fromArray(n,i=0){return this.x=n[i],this.y=n[i+1],this}toArray(n=[],i=0){return n[i]=this.x,n[i+1]=this.y,n}fromBufferAttribute(n,i){return this.x=n.getX(i),this.y=n.getY(i),this}rotateAround(n,i){const o=Math.cos(i),u=Math.sin(i),f=this.x-n.x,d=this.y-n.y;return this.x=f*o-d*u+n.x,this.y=f*u+d*o+n.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vt{constructor(n,i,o,u,f,d,p,m,v){Vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],n!==void 0&&this.set(n,i,o,u,f,d,p,m,v)}set(n,i,o,u,f,d,p,m,v){const S=this.elements;return S[0]=n,S[1]=u,S[2]=p,S[3]=i,S[4]=f,S[5]=m,S[6]=o,S[7]=d,S[8]=v,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(n){const i=this.elements,o=n.elements;return i[0]=o[0],i[1]=o[1],i[2]=o[2],i[3]=o[3],i[4]=o[4],i[5]=o[5],i[6]=o[6],i[7]=o[7],i[8]=o[8],this}extractBasis(n,i,o){return n.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),o.setFromMatrix3Column(this,2),this}setFromMatrix4(n){const i=n.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(n){return this.multiplyMatrices(this,n)}premultiply(n){return this.multiplyMatrices(n,this)}multiplyMatrices(n,i){const o=n.elements,u=i.elements,f=this.elements,d=o[0],p=o[3],m=o[6],v=o[1],S=o[4],y=o[7],x=o[2],b=o[5],C=o[8],L=u[0],M=u[3],_=u[6],F=u[1],I=u[4],P=u[7],$=u[2],G=u[5],z=u[8];return f[0]=d*L+p*F+m*$,f[3]=d*M+p*I+m*G,f[6]=d*_+p*P+m*z,f[1]=v*L+S*F+y*$,f[4]=v*M+S*I+y*G,f[7]=v*_+S*P+y*z,f[2]=x*L+b*F+C*$,f[5]=x*M+b*I+C*G,f[8]=x*_+b*P+C*z,this}multiplyScalar(n){const i=this.elements;return i[0]*=n,i[3]*=n,i[6]*=n,i[1]*=n,i[4]*=n,i[7]*=n,i[2]*=n,i[5]*=n,i[8]*=n,this}determinant(){const n=this.elements,i=n[0],o=n[1],u=n[2],f=n[3],d=n[4],p=n[5],m=n[6],v=n[7],S=n[8];return i*d*S-i*p*v-o*f*S+o*p*m+u*f*v-u*d*m}invert(){const n=this.elements,i=n[0],o=n[1],u=n[2],f=n[3],d=n[4],p=n[5],m=n[6],v=n[7],S=n[8],y=S*d-p*v,x=p*m-S*f,b=v*f-d*m,C=i*y+o*x+u*b;if(C===0)return this.set(0,0,0,0,0,0,0,0,0);const L=1/C;return n[0]=y*L,n[1]=(u*v-S*o)*L,n[2]=(p*o-u*d)*L,n[3]=x*L,n[4]=(S*i-u*m)*L,n[5]=(u*f-p*i)*L,n[6]=b*L,n[7]=(o*m-v*i)*L,n[8]=(d*i-o*f)*L,this}transpose(){let n;const i=this.elements;return n=i[1],i[1]=i[3],i[3]=n,n=i[2],i[2]=i[6],i[6]=n,n=i[5],i[5]=i[7],i[7]=n,this}getNormalMatrix(n){return this.setFromMatrix4(n).invert().transpose()}transposeIntoArray(n){const i=this.elements;return n[0]=i[0],n[1]=i[3],n[2]=i[6],n[3]=i[1],n[4]=i[4],n[5]=i[7],n[6]=i[2],n[7]=i[5],n[8]=i[8],this}setUvTransform(n,i,o,u,f,d,p){const m=Math.cos(f),v=Math.sin(f);return this.set(o*m,o*v,-o*(m*d+v*p)+d+n,-u*v,u*m,-u*(-v*d+m*p)+p+i,0,0,1),this}scale(n,i){return this.premultiply(s_.makeScale(n,i)),this}rotate(n){return this.premultiply(s_.makeRotation(-n)),this}translate(n,i){return this.premultiply(s_.makeTranslation(n,i)),this}makeTranslation(n,i){return n.isVector2?this.set(1,0,n.x,0,1,n.y,0,0,1):this.set(1,0,n,0,1,i,0,0,1),this}makeRotation(n){const i=Math.cos(n),o=Math.sin(n);return this.set(i,-o,0,o,i,0,0,0,1),this}makeScale(n,i){return this.set(n,0,0,0,i,0,0,0,1),this}equals(n){const i=this.elements,o=n.elements;for(let u=0;u<9;u++)if(i[u]!==o[u])return!1;return!0}fromArray(n,i=0){for(let o=0;o<9;o++)this.elements[o]=n[o+i];return this}toArray(n=[],i=0){const o=this.elements;return n[i]=o[0],n[i+1]=o[1],n[i+2]=o[2],n[i+3]=o[3],n[i+4]=o[4],n[i+5]=o[5],n[i+6]=o[6],n[i+7]=o[7],n[i+8]=o[8],n}clone(){return new this.constructor().fromArray(this.elements)}}const s_=new Vt;function gT(s){for(let n=s.length-1;n>=0;--n)if(s[n]>=65535)return!0;return!1}function Wh(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function uO(){const s=Wh("canvas");return s.style.display="block",s}const oM={};function qc(s){s in oM||(oM[s]=!0,console.warn(s))}function cO(s,n,i){return new Promise(function(o,u){function f(){switch(s.clientWaitSync(n,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:u();break;case s.TIMEOUT_EXPIRED:setTimeout(f,i);break;default:o()}}setTimeout(f,i)})}function fO(s){const n=s.elements;n[2]=.5*n[2]+.5*n[3],n[6]=.5*n[6]+.5*n[7],n[10]=.5*n[10]+.5*n[11],n[14]=.5*n[14]+.5*n[15]}function dO(s){const n=s.elements;n[11]===-1?(n[10]=-n[10]-1,n[14]=-n[14]):(n[10]=-n[10],n[14]=-n[14]+1)}const un={enabled:!0,workingColorSpace:tu,spaces:{},convert:function(s,n,i){return this.enabled===!1||n===i||!n||!i||(this.spaces[n].transfer===En&&(s.r=Ya(s.r),s.g=Ya(s.g),s.b=Ya(s.b)),this.spaces[n].primaries!==this.spaces[i].primaries&&(s.applyMatrix3(this.spaces[n].toXYZ),s.applyMatrix3(this.spaces[i].fromXYZ)),this.spaces[i].transfer===En&&(s.r=Yl(s.r),s.g=Yl(s.g),s.b=Yl(s.b))),s},fromWorkingColorSpace:function(s,n){return this.convert(s,this.workingColorSpace,n)},toWorkingColorSpace:function(s,n){return this.convert(s,n,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ao?jh:this.spaces[s].transfer},getLuminanceCoefficients:function(s,n=this.workingColorSpace){return s.fromArray(this.spaces[n].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,n,i){return s.copy(this.spaces[n].toXYZ).multiply(this.spaces[i].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Ya(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Yl(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const sM=[.64,.33,.3,.6,.15,.06],lM=[.2126,.7152,.0722],uM=[.3127,.329],cM=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fM=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);un.define({[tu]:{primaries:sM,whitePoint:uM,transfer:jh,toXYZ:cM,fromXYZ:fM,luminanceCoefficients:lM,workingColorSpaceConfig:{unpackColorSpace:Cr},outputColorSpaceConfig:{drawingBufferColorSpace:Cr}},[Cr]:{primaries:sM,whitePoint:uM,transfer:En,toXYZ:cM,fromXYZ:fM,luminanceCoefficients:lM,outputColorSpaceConfig:{drawingBufferColorSpace:Cr}}});let wl;class hO{static getDataURL(n){if(/^data:/i.test(n.src)||typeof HTMLCanvasElement>"u")return n.src;let i;if(n instanceof HTMLCanvasElement)i=n;else{wl===void 0&&(wl=Wh("canvas")),wl.width=n.width,wl.height=n.height;const o=wl.getContext("2d");n instanceof ImageData?o.putImageData(n,0,0):o.drawImage(n,0,0,n.width,n.height),i=wl}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",n),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(n){if(typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap){const i=Wh("canvas");i.width=n.width,i.height=n.height;const o=i.getContext("2d");o.drawImage(n,0,0,n.width,n.height);const u=o.getImageData(0,0,n.width,n.height),f=u.data;for(let d=0;d<f.length;d++)f[d]=Ya(f[d]/255)*255;return o.putImageData(u,0,0),i}else if(n.data){const i=n.data.slice(0);for(let o=0;o<i.length;o++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[o]=Math.floor(Ya(i[o]/255)*255):i[o]=Ya(i[o]);return{data:i,width:n.width,height:n.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),n}}let pO=0;class _T{constructor(n=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pO++}),this.uuid=iu(),this.data=n,this.dataReady=!0,this.version=0}set needsUpdate(n){n===!0&&this.version++}toJSON(n){const i=n===void 0||typeof n=="string";if(!i&&n.images[this.uuid]!==void 0)return n.images[this.uuid];const o={uuid:this.uuid,url:""},u=this.data;if(u!==null){let f;if(Array.isArray(u)){f=[];for(let d=0,p=u.length;d<p;d++)u[d].isDataTexture?f.push(l_(u[d].image)):f.push(l_(u[d]))}else f=l_(u);o.url=f}return i||(n.images[this.uuid]=o),o}}function l_(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?hO.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let mO=0;class ar extends nu{constructor(n=ar.DEFAULT_IMAGE,i=ar.DEFAULT_MAPPING,o=bs,u=bs,f=fa,d=Ms,p=$r,m=qa,v=ar.DEFAULT_ANISOTROPY,S=Ao){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mO++}),this.uuid=iu(),this.name="",this.source=new _T(n),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=o,this.wrapT=u,this.magFilter=f,this.minFilter=d,this.anisotropy=v,this.format=p,this.internalFormat=null,this.type=m,this.offset=new xn(0,0),this.repeat=new xn(1,1),this.center=new xn(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(n=null){this.source.data=n}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(n){return this.name=n.name,this.source=n.source,this.mipmaps=n.mipmaps.slice(0),this.mapping=n.mapping,this.channel=n.channel,this.wrapS=n.wrapS,this.wrapT=n.wrapT,this.magFilter=n.magFilter,this.minFilter=n.minFilter,this.anisotropy=n.anisotropy,this.format=n.format,this.internalFormat=n.internalFormat,this.type=n.type,this.offset.copy(n.offset),this.repeat.copy(n.repeat),this.center.copy(n.center),this.rotation=n.rotation,this.matrixAutoUpdate=n.matrixAutoUpdate,this.matrix.copy(n.matrix),this.generateMipmaps=n.generateMipmaps,this.premultiplyAlpha=n.premultiplyAlpha,this.flipY=n.flipY,this.unpackAlignment=n.unpackAlignment,this.colorSpace=n.colorSpace,this.userData=JSON.parse(JSON.stringify(n.userData)),this.needsUpdate=!0,this}toJSON(n){const i=n===void 0||typeof n=="string";if(!i&&n.textures[this.uuid]!==void 0)return n.textures[this.uuid];const o={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(n).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(o.userData=this.userData),i||(n.textures[this.uuid]=o),o}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(n){if(this.mapping!==rT)return n;if(n.applyMatrix3(this.matrix),n.x<0||n.x>1)switch(this.wrapS){case j_:n.x=n.x-Math.floor(n.x);break;case bs:n.x=n.x<0?0:1;break;case Y_:Math.abs(Math.floor(n.x)%2)===1?n.x=Math.ceil(n.x)-n.x:n.x=n.x-Math.floor(n.x);break}if(n.y<0||n.y>1)switch(this.wrapT){case j_:n.y=n.y-Math.floor(n.y);break;case bs:n.y=n.y<0?0:1;break;case Y_:Math.abs(Math.floor(n.y)%2)===1?n.y=Math.ceil(n.y)-n.y:n.y=n.y-Math.floor(n.y);break}return this.flipY&&(n.y=1-n.y),n}set needsUpdate(n){n===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(n){n===!0&&this.pmremVersion++}}ar.DEFAULT_IMAGE=null;ar.DEFAULT_MAPPING=rT;ar.DEFAULT_ANISOTROPY=1;class On{constructor(n=0,i=0,o=0,u=1){On.prototype.isVector4=!0,this.x=n,this.y=i,this.z=o,this.w=u}get width(){return this.z}set width(n){this.z=n}get height(){return this.w}set height(n){this.w=n}set(n,i,o,u){return this.x=n,this.y=i,this.z=o,this.w=u,this}setScalar(n){return this.x=n,this.y=n,this.z=n,this.w=n,this}setX(n){return this.x=n,this}setY(n){return this.y=n,this}setZ(n){return this.z=n,this}setW(n){return this.w=n,this}setComponent(n,i){switch(n){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+n)}return this}getComponent(n){switch(n){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+n)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(n){return this.x=n.x,this.y=n.y,this.z=n.z,this.w=n.w!==void 0?n.w:1,this}add(n){return this.x+=n.x,this.y+=n.y,this.z+=n.z,this.w+=n.w,this}addScalar(n){return this.x+=n,this.y+=n,this.z+=n,this.w+=n,this}addVectors(n,i){return this.x=n.x+i.x,this.y=n.y+i.y,this.z=n.z+i.z,this.w=n.w+i.w,this}addScaledVector(n,i){return this.x+=n.x*i,this.y+=n.y*i,this.z+=n.z*i,this.w+=n.w*i,this}sub(n){return this.x-=n.x,this.y-=n.y,this.z-=n.z,this.w-=n.w,this}subScalar(n){return this.x-=n,this.y-=n,this.z-=n,this.w-=n,this}subVectors(n,i){return this.x=n.x-i.x,this.y=n.y-i.y,this.z=n.z-i.z,this.w=n.w-i.w,this}multiply(n){return this.x*=n.x,this.y*=n.y,this.z*=n.z,this.w*=n.w,this}multiplyScalar(n){return this.x*=n,this.y*=n,this.z*=n,this.w*=n,this}applyMatrix4(n){const i=this.x,o=this.y,u=this.z,f=this.w,d=n.elements;return this.x=d[0]*i+d[4]*o+d[8]*u+d[12]*f,this.y=d[1]*i+d[5]*o+d[9]*u+d[13]*f,this.z=d[2]*i+d[6]*o+d[10]*u+d[14]*f,this.w=d[3]*i+d[7]*o+d[11]*u+d[15]*f,this}divide(n){return this.x/=n.x,this.y/=n.y,this.z/=n.z,this.w/=n.w,this}divideScalar(n){return this.multiplyScalar(1/n)}setAxisAngleFromQuaternion(n){this.w=2*Math.acos(n.w);const i=Math.sqrt(1-n.w*n.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=n.x/i,this.y=n.y/i,this.z=n.z/i),this}setAxisAngleFromRotationMatrix(n){let i,o,u,f;const m=n.elements,v=m[0],S=m[4],y=m[8],x=m[1],b=m[5],C=m[9],L=m[2],M=m[6],_=m[10];if(Math.abs(S-x)<.01&&Math.abs(y-L)<.01&&Math.abs(C-M)<.01){if(Math.abs(S+x)<.1&&Math.abs(y+L)<.1&&Math.abs(C+M)<.1&&Math.abs(v+b+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const I=(v+1)/2,P=(b+1)/2,$=(_+1)/2,G=(S+x)/4,z=(y+L)/4,Z=(C+M)/4;return I>P&&I>$?I<.01?(o=0,u=.707106781,f=.707106781):(o=Math.sqrt(I),u=G/o,f=z/o):P>$?P<.01?(o=.707106781,u=0,f=.707106781):(u=Math.sqrt(P),o=G/u,f=Z/u):$<.01?(o=.707106781,u=.707106781,f=0):(f=Math.sqrt($),o=z/f,u=Z/f),this.set(o,u,f,i),this}let F=Math.sqrt((M-C)*(M-C)+(y-L)*(y-L)+(x-S)*(x-S));return Math.abs(F)<.001&&(F=1),this.x=(M-C)/F,this.y=(y-L)/F,this.z=(x-S)/F,this.w=Math.acos((v+b+_-1)/2),this}setFromMatrixPosition(n){const i=n.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(n){return this.x=Math.min(this.x,n.x),this.y=Math.min(this.y,n.y),this.z=Math.min(this.z,n.z),this.w=Math.min(this.w,n.w),this}max(n){return this.x=Math.max(this.x,n.x),this.y=Math.max(this.y,n.y),this.z=Math.max(this.z,n.z),this.w=Math.max(this.w,n.w),this}clamp(n,i){return this.x=Math.max(n.x,Math.min(i.x,this.x)),this.y=Math.max(n.y,Math.min(i.y,this.y)),this.z=Math.max(n.z,Math.min(i.z,this.z)),this.w=Math.max(n.w,Math.min(i.w,this.w)),this}clampScalar(n,i){return this.x=Math.max(n,Math.min(i,this.x)),this.y=Math.max(n,Math.min(i,this.y)),this.z=Math.max(n,Math.min(i,this.z)),this.w=Math.max(n,Math.min(i,this.w)),this}clampLength(n,i){const o=this.length();return this.divideScalar(o||1).multiplyScalar(Math.max(n,Math.min(i,o)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(n){return this.x*n.x+this.y*n.y+this.z*n.z+this.w*n.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(n){return this.normalize().multiplyScalar(n)}lerp(n,i){return this.x+=(n.x-this.x)*i,this.y+=(n.y-this.y)*i,this.z+=(n.z-this.z)*i,this.w+=(n.w-this.w)*i,this}lerpVectors(n,i,o){return this.x=n.x+(i.x-n.x)*o,this.y=n.y+(i.y-n.y)*o,this.z=n.z+(i.z-n.z)*o,this.w=n.w+(i.w-n.w)*o,this}equals(n){return n.x===this.x&&n.y===this.y&&n.z===this.z&&n.w===this.w}fromArray(n,i=0){return this.x=n[i],this.y=n[i+1],this.z=n[i+2],this.w=n[i+3],this}toArray(n=[],i=0){return n[i]=this.x,n[i+1]=this.y,n[i+2]=this.z,n[i+3]=this.w,n}fromBufferAttribute(n,i){return this.x=n.getX(i),this.y=n.getY(i),this.z=n.getZ(i),this.w=n.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vO extends nu{constructor(n=1,i=1,o={}){super(),this.isRenderTarget=!0,this.width=n,this.height=i,this.depth=1,this.scissor=new On(0,0,n,i),this.scissorTest=!1,this.viewport=new On(0,0,n,i);const u={width:n,height:i,depth:1};o=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fa,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},o);const f=new ar(u,o.mapping,o.wrapS,o.wrapT,o.magFilter,o.minFilter,o.format,o.type,o.anisotropy,o.colorSpace);f.flipY=!1,f.generateMipmaps=o.generateMipmaps,f.internalFormat=o.internalFormat,this.textures=[];const d=o.count;for(let p=0;p<d;p++)this.textures[p]=f.clone(),this.textures[p].isRenderTargetTexture=!0;this.depthBuffer=o.depthBuffer,this.stencilBuffer=o.stencilBuffer,this.resolveDepthBuffer=o.resolveDepthBuffer,this.resolveStencilBuffer=o.resolveStencilBuffer,this.depthTexture=o.depthTexture,this.samples=o.samples}get texture(){return this.textures[0]}set texture(n){this.textures[0]=n}setSize(n,i,o=1){if(this.width!==n||this.height!==i||this.depth!==o){this.width=n,this.height=i,this.depth=o;for(let u=0,f=this.textures.length;u<f;u++)this.textures[u].image.width=n,this.textures[u].image.height=i,this.textures[u].image.depth=o;this.dispose()}this.viewport.set(0,0,n,i),this.scissor.set(0,0,n,i)}clone(){return new this.constructor().copy(this)}copy(n){this.width=n.width,this.height=n.height,this.depth=n.depth,this.scissor.copy(n.scissor),this.scissorTest=n.scissorTest,this.viewport.copy(n.viewport),this.textures.length=0;for(let o=0,u=n.textures.length;o<u;o++)this.textures[o]=n.textures[o].clone(),this.textures[o].isRenderTargetTexture=!0;const i=Object.assign({},n.texture.image);return this.texture.source=new _T(i),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,n.depthTexture!==null&&(this.depthTexture=n.depthTexture.clone()),this.samples=n.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cs extends vO{constructor(n=1,i=1,o={}){super(n,i,o),this.isWebGLRenderTarget=!0}}class yT extends ar{constructor(n=null,i=1,o=1,u=1){super(null),this.isDataArrayTexture=!0,this.image={data:n,width:i,height:o,depth:u},this.magFilter=Kr,this.minFilter=Kr,this.wrapR=bs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(n){this.layerUpdates.add(n)}clearLayerUpdates(){this.layerUpdates.clear()}}class gO extends ar{constructor(n=null,i=1,o=1,u=1){super(null),this.isData3DTexture=!0,this.image={data:n,width:i,height:o,depth:u},this.magFilter=Kr,this.minFilter=Kr,this.wrapR=bs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nf{constructor(n=0,i=0,o=0,u=1){this.isQuaternion=!0,this._x=n,this._y=i,this._z=o,this._w=u}static slerpFlat(n,i,o,u,f,d,p){let m=o[u+0],v=o[u+1],S=o[u+2],y=o[u+3];const x=f[d+0],b=f[d+1],C=f[d+2],L=f[d+3];if(p===0){n[i+0]=m,n[i+1]=v,n[i+2]=S,n[i+3]=y;return}if(p===1){n[i+0]=x,n[i+1]=b,n[i+2]=C,n[i+3]=L;return}if(y!==L||m!==x||v!==b||S!==C){let M=1-p;const _=m*x+v*b+S*C+y*L,F=_>=0?1:-1,I=1-_*_;if(I>Number.EPSILON){const $=Math.sqrt(I),G=Math.atan2($,_*F);M=Math.sin(M*G)/$,p=Math.sin(p*G)/$}const P=p*F;if(m=m*M+x*P,v=v*M+b*P,S=S*M+C*P,y=y*M+L*P,M===1-p){const $=1/Math.sqrt(m*m+v*v+S*S+y*y);m*=$,v*=$,S*=$,y*=$}}n[i]=m,n[i+1]=v,n[i+2]=S,n[i+3]=y}static multiplyQuaternionsFlat(n,i,o,u,f,d){const p=o[u],m=o[u+1],v=o[u+2],S=o[u+3],y=f[d],x=f[d+1],b=f[d+2],C=f[d+3];return n[i]=p*C+S*y+m*b-v*x,n[i+1]=m*C+S*x+v*y-p*b,n[i+2]=v*C+S*b+p*x-m*y,n[i+3]=S*C-p*y-m*x-v*b,n}get x(){return this._x}set x(n){this._x=n,this._onChangeCallback()}get y(){return this._y}set y(n){this._y=n,this._onChangeCallback()}get z(){return this._z}set z(n){this._z=n,this._onChangeCallback()}get w(){return this._w}set w(n){this._w=n,this._onChangeCallback()}set(n,i,o,u){return this._x=n,this._y=i,this._z=o,this._w=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(n){return this._x=n.x,this._y=n.y,this._z=n.z,this._w=n.w,this._onChangeCallback(),this}setFromEuler(n,i=!0){const o=n._x,u=n._y,f=n._z,d=n._order,p=Math.cos,m=Math.sin,v=p(o/2),S=p(u/2),y=p(f/2),x=m(o/2),b=m(u/2),C=m(f/2);switch(d){case"XYZ":this._x=x*S*y+v*b*C,this._y=v*b*y-x*S*C,this._z=v*S*C+x*b*y,this._w=v*S*y-x*b*C;break;case"YXZ":this._x=x*S*y+v*b*C,this._y=v*b*y-x*S*C,this._z=v*S*C-x*b*y,this._w=v*S*y+x*b*C;break;case"ZXY":this._x=x*S*y-v*b*C,this._y=v*b*y+x*S*C,this._z=v*S*C+x*b*y,this._w=v*S*y-x*b*C;break;case"ZYX":this._x=x*S*y-v*b*C,this._y=v*b*y+x*S*C,this._z=v*S*C-x*b*y,this._w=v*S*y+x*b*C;break;case"YZX":this._x=x*S*y+v*b*C,this._y=v*b*y+x*S*C,this._z=v*S*C-x*b*y,this._w=v*S*y-x*b*C;break;case"XZY":this._x=x*S*y-v*b*C,this._y=v*b*y-x*S*C,this._z=v*S*C+x*b*y,this._w=v*S*y+x*b*C;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(n,i){const o=i/2,u=Math.sin(o);return this._x=n.x*u,this._y=n.y*u,this._z=n.z*u,this._w=Math.cos(o),this._onChangeCallback(),this}setFromRotationMatrix(n){const i=n.elements,o=i[0],u=i[4],f=i[8],d=i[1],p=i[5],m=i[9],v=i[2],S=i[6],y=i[10],x=o+p+y;if(x>0){const b=.5/Math.sqrt(x+1);this._w=.25/b,this._x=(S-m)*b,this._y=(f-v)*b,this._z=(d-u)*b}else if(o>p&&o>y){const b=2*Math.sqrt(1+o-p-y);this._w=(S-m)/b,this._x=.25*b,this._y=(u+d)/b,this._z=(f+v)/b}else if(p>y){const b=2*Math.sqrt(1+p-o-y);this._w=(f-v)/b,this._x=(u+d)/b,this._y=.25*b,this._z=(m+S)/b}else{const b=2*Math.sqrt(1+y-o-p);this._w=(d-u)/b,this._x=(f+v)/b,this._y=(m+S)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(n,i){let o=n.dot(i)+1;return o<Number.EPSILON?(o=0,Math.abs(n.x)>Math.abs(n.z)?(this._x=-n.y,this._y=n.x,this._z=0,this._w=o):(this._x=0,this._y=-n.z,this._z=n.y,this._w=o)):(this._x=n.y*i.z-n.z*i.y,this._y=n.z*i.x-n.x*i.z,this._z=n.x*i.y-n.y*i.x,this._w=o),this.normalize()}angleTo(n){return 2*Math.acos(Math.abs(Yi(this.dot(n),-1,1)))}rotateTowards(n,i){const o=this.angleTo(n);if(o===0)return this;const u=Math.min(1,i/o);return this.slerp(n,u),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(n){return this._x*n._x+this._y*n._y+this._z*n._z+this._w*n._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let n=this.length();return n===0?(this._x=0,this._y=0,this._z=0,this._w=1):(n=1/n,this._x=this._x*n,this._y=this._y*n,this._z=this._z*n,this._w=this._w*n),this._onChangeCallback(),this}multiply(n){return this.multiplyQuaternions(this,n)}premultiply(n){return this.multiplyQuaternions(n,this)}multiplyQuaternions(n,i){const o=n._x,u=n._y,f=n._z,d=n._w,p=i._x,m=i._y,v=i._z,S=i._w;return this._x=o*S+d*p+u*v-f*m,this._y=u*S+d*m+f*p-o*v,this._z=f*S+d*v+o*m-u*p,this._w=d*S-o*p-u*m-f*v,this._onChangeCallback(),this}slerp(n,i){if(i===0)return this;if(i===1)return this.copy(n);const o=this._x,u=this._y,f=this._z,d=this._w;let p=d*n._w+o*n._x+u*n._y+f*n._z;if(p<0?(this._w=-n._w,this._x=-n._x,this._y=-n._y,this._z=-n._z,p=-p):this.copy(n),p>=1)return this._w=d,this._x=o,this._y=u,this._z=f,this;const m=1-p*p;if(m<=Number.EPSILON){const b=1-i;return this._w=b*d+i*this._w,this._x=b*o+i*this._x,this._y=b*u+i*this._y,this._z=b*f+i*this._z,this.normalize(),this}const v=Math.sqrt(m),S=Math.atan2(v,p),y=Math.sin((1-i)*S)/v,x=Math.sin(i*S)/v;return this._w=d*y+this._w*x,this._x=o*y+this._x*x,this._y=u*y+this._y*x,this._z=f*y+this._z*x,this._onChangeCallback(),this}slerpQuaternions(n,i,o){return this.copy(n).slerp(i,o)}random(){const n=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),o=Math.random(),u=Math.sqrt(1-o),f=Math.sqrt(o);return this.set(u*Math.sin(n),u*Math.cos(n),f*Math.sin(i),f*Math.cos(i))}equals(n){return n._x===this._x&&n._y===this._y&&n._z===this._z&&n._w===this._w}fromArray(n,i=0){return this._x=n[i],this._y=n[i+1],this._z=n[i+2],this._w=n[i+3],this._onChangeCallback(),this}toArray(n=[],i=0){return n[i]=this._x,n[i+1]=this._y,n[i+2]=this._z,n[i+3]=this._w,n}fromBufferAttribute(n,i){return this._x=n.getX(i),this._y=n.getY(i),this._z=n.getZ(i),this._w=n.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(n){return this._onChangeCallback=n,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class de{constructor(n=0,i=0,o=0){de.prototype.isVector3=!0,this.x=n,this.y=i,this.z=o}set(n,i,o){return o===void 0&&(o=this.z),this.x=n,this.y=i,this.z=o,this}setScalar(n){return this.x=n,this.y=n,this.z=n,this}setX(n){return this.x=n,this}setY(n){return this.y=n,this}setZ(n){return this.z=n,this}setComponent(n,i){switch(n){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+n)}return this}getComponent(n){switch(n){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+n)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(n){return this.x=n.x,this.y=n.y,this.z=n.z,this}add(n){return this.x+=n.x,this.y+=n.y,this.z+=n.z,this}addScalar(n){return this.x+=n,this.y+=n,this.z+=n,this}addVectors(n,i){return this.x=n.x+i.x,this.y=n.y+i.y,this.z=n.z+i.z,this}addScaledVector(n,i){return this.x+=n.x*i,this.y+=n.y*i,this.z+=n.z*i,this}sub(n){return this.x-=n.x,this.y-=n.y,this.z-=n.z,this}subScalar(n){return this.x-=n,this.y-=n,this.z-=n,this}subVectors(n,i){return this.x=n.x-i.x,this.y=n.y-i.y,this.z=n.z-i.z,this}multiply(n){return this.x*=n.x,this.y*=n.y,this.z*=n.z,this}multiplyScalar(n){return this.x*=n,this.y*=n,this.z*=n,this}multiplyVectors(n,i){return this.x=n.x*i.x,this.y=n.y*i.y,this.z=n.z*i.z,this}applyEuler(n){return this.applyQuaternion(dM.setFromEuler(n))}applyAxisAngle(n,i){return this.applyQuaternion(dM.setFromAxisAngle(n,i))}applyMatrix3(n){const i=this.x,o=this.y,u=this.z,f=n.elements;return this.x=f[0]*i+f[3]*o+f[6]*u,this.y=f[1]*i+f[4]*o+f[7]*u,this.z=f[2]*i+f[5]*o+f[8]*u,this}applyNormalMatrix(n){return this.applyMatrix3(n).normalize()}applyMatrix4(n){const i=this.x,o=this.y,u=this.z,f=n.elements,d=1/(f[3]*i+f[7]*o+f[11]*u+f[15]);return this.x=(f[0]*i+f[4]*o+f[8]*u+f[12])*d,this.y=(f[1]*i+f[5]*o+f[9]*u+f[13])*d,this.z=(f[2]*i+f[6]*o+f[10]*u+f[14])*d,this}applyQuaternion(n){const i=this.x,o=this.y,u=this.z,f=n.x,d=n.y,p=n.z,m=n.w,v=2*(d*u-p*o),S=2*(p*i-f*u),y=2*(f*o-d*i);return this.x=i+m*v+d*y-p*S,this.y=o+m*S+p*v-f*y,this.z=u+m*y+f*S-d*v,this}project(n){return this.applyMatrix4(n.matrixWorldInverse).applyMatrix4(n.projectionMatrix)}unproject(n){return this.applyMatrix4(n.projectionMatrixInverse).applyMatrix4(n.matrixWorld)}transformDirection(n){const i=this.x,o=this.y,u=this.z,f=n.elements;return this.x=f[0]*i+f[4]*o+f[8]*u,this.y=f[1]*i+f[5]*o+f[9]*u,this.z=f[2]*i+f[6]*o+f[10]*u,this.normalize()}divide(n){return this.x/=n.x,this.y/=n.y,this.z/=n.z,this}divideScalar(n){return this.multiplyScalar(1/n)}min(n){return this.x=Math.min(this.x,n.x),this.y=Math.min(this.y,n.y),this.z=Math.min(this.z,n.z),this}max(n){return this.x=Math.max(this.x,n.x),this.y=Math.max(this.y,n.y),this.z=Math.max(this.z,n.z),this}clamp(n,i){return this.x=Math.max(n.x,Math.min(i.x,this.x)),this.y=Math.max(n.y,Math.min(i.y,this.y)),this.z=Math.max(n.z,Math.min(i.z,this.z)),this}clampScalar(n,i){return this.x=Math.max(n,Math.min(i,this.x)),this.y=Math.max(n,Math.min(i,this.y)),this.z=Math.max(n,Math.min(i,this.z)),this}clampLength(n,i){const o=this.length();return this.divideScalar(o||1).multiplyScalar(Math.max(n,Math.min(i,o)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(n){return this.x*n.x+this.y*n.y+this.z*n.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(n){return this.normalize().multiplyScalar(n)}lerp(n,i){return this.x+=(n.x-this.x)*i,this.y+=(n.y-this.y)*i,this.z+=(n.z-this.z)*i,this}lerpVectors(n,i,o){return this.x=n.x+(i.x-n.x)*o,this.y=n.y+(i.y-n.y)*o,this.z=n.z+(i.z-n.z)*o,this}cross(n){return this.crossVectors(this,n)}crossVectors(n,i){const o=n.x,u=n.y,f=n.z,d=i.x,p=i.y,m=i.z;return this.x=u*m-f*p,this.y=f*d-o*m,this.z=o*p-u*d,this}projectOnVector(n){const i=n.lengthSq();if(i===0)return this.set(0,0,0);const o=n.dot(this)/i;return this.copy(n).multiplyScalar(o)}projectOnPlane(n){return u_.copy(this).projectOnVector(n),this.sub(u_)}reflect(n){return this.sub(u_.copy(n).multiplyScalar(2*this.dot(n)))}angleTo(n){const i=Math.sqrt(this.lengthSq()*n.lengthSq());if(i===0)return Math.PI/2;const o=this.dot(n)/i;return Math.acos(Yi(o,-1,1))}distanceTo(n){return Math.sqrt(this.distanceToSquared(n))}distanceToSquared(n){const i=this.x-n.x,o=this.y-n.y,u=this.z-n.z;return i*i+o*o+u*u}manhattanDistanceTo(n){return Math.abs(this.x-n.x)+Math.abs(this.y-n.y)+Math.abs(this.z-n.z)}setFromSpherical(n){return this.setFromSphericalCoords(n.radius,n.phi,n.theta)}setFromSphericalCoords(n,i,o){const u=Math.sin(i)*n;return this.x=u*Math.sin(o),this.y=Math.cos(i)*n,this.z=u*Math.cos(o),this}setFromCylindrical(n){return this.setFromCylindricalCoords(n.radius,n.theta,n.y)}setFromCylindricalCoords(n,i,o){return this.x=n*Math.sin(i),this.y=o,this.z=n*Math.cos(i),this}setFromMatrixPosition(n){const i=n.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(n){const i=this.setFromMatrixColumn(n,0).length(),o=this.setFromMatrixColumn(n,1).length(),u=this.setFromMatrixColumn(n,2).length();return this.x=i,this.y=o,this.z=u,this}setFromMatrixColumn(n,i){return this.fromArray(n.elements,i*4)}setFromMatrix3Column(n,i){return this.fromArray(n.elements,i*3)}setFromEuler(n){return this.x=n._x,this.y=n._y,this.z=n._z,this}setFromColor(n){return this.x=n.r,this.y=n.g,this.z=n.b,this}equals(n){return n.x===this.x&&n.y===this.y&&n.z===this.z}fromArray(n,i=0){return this.x=n[i],this.y=n[i+1],this.z=n[i+2],this}toArray(n=[],i=0){return n[i]=this.x,n[i+1]=this.y,n[i+2]=this.z,n}fromBufferAttribute(n,i){return this.x=n.getX(i),this.y=n.getY(i),this.z=n.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const n=Math.random()*Math.PI*2,i=Math.random()*2-1,o=Math.sqrt(1-i*i);return this.x=o*Math.cos(n),this.y=i,this.z=o*Math.sin(n),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const u_=new de,dM=new nf;class rf{constructor(n=new de(1/0,1/0,1/0),i=new de(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=n,this.max=i}set(n,i){return this.min.copy(n),this.max.copy(i),this}setFromArray(n){this.makeEmpty();for(let i=0,o=n.length;i<o;i+=3)this.expandByPoint(Xr.fromArray(n,i));return this}setFromBufferAttribute(n){this.makeEmpty();for(let i=0,o=n.count;i<o;i++)this.expandByPoint(Xr.fromBufferAttribute(n,i));return this}setFromPoints(n){this.makeEmpty();for(let i=0,o=n.length;i<o;i++)this.expandByPoint(n[i]);return this}setFromCenterAndSize(n,i){const o=Xr.copy(i).multiplyScalar(.5);return this.min.copy(n).sub(o),this.max.copy(n).add(o),this}setFromObject(n,i=!1){return this.makeEmpty(),this.expandByObject(n,i)}clone(){return new this.constructor().copy(this)}copy(n){return this.min.copy(n.min),this.max.copy(n.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(n){return this.isEmpty()?n.set(0,0,0):n.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(n){return this.isEmpty()?n.set(0,0,0):n.subVectors(this.max,this.min)}expandByPoint(n){return this.min.min(n),this.max.max(n),this}expandByVector(n){return this.min.sub(n),this.max.add(n),this}expandByScalar(n){return this.min.addScalar(-n),this.max.addScalar(n),this}expandByObject(n,i=!1){n.updateWorldMatrix(!1,!1);const o=n.geometry;if(o!==void 0){const f=o.getAttribute("position");if(i===!0&&f!==void 0&&n.isInstancedMesh!==!0)for(let d=0,p=f.count;d<p;d++)n.isMesh===!0?n.getVertexPosition(d,Xr):Xr.fromBufferAttribute(f,d),Xr.applyMatrix4(n.matrixWorld),this.expandByPoint(Xr);else n.boundingBox!==void 0?(n.boundingBox===null&&n.computeBoundingBox(),mh.copy(n.boundingBox)):(o.boundingBox===null&&o.computeBoundingBox(),mh.copy(o.boundingBox)),mh.applyMatrix4(n.matrixWorld),this.union(mh)}const u=n.children;for(let f=0,d=u.length;f<d;f++)this.expandByObject(u[f],i);return this}containsPoint(n){return n.x>=this.min.x&&n.x<=this.max.x&&n.y>=this.min.y&&n.y<=this.max.y&&n.z>=this.min.z&&n.z<=this.max.z}containsBox(n){return this.min.x<=n.min.x&&n.max.x<=this.max.x&&this.min.y<=n.min.y&&n.max.y<=this.max.y&&this.min.z<=n.min.z&&n.max.z<=this.max.z}getParameter(n,i){return i.set((n.x-this.min.x)/(this.max.x-this.min.x),(n.y-this.min.y)/(this.max.y-this.min.y),(n.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(n){return n.max.x>=this.min.x&&n.min.x<=this.max.x&&n.max.y>=this.min.y&&n.min.y<=this.max.y&&n.max.z>=this.min.z&&n.min.z<=this.max.z}intersectsSphere(n){return this.clampPoint(n.center,Xr),Xr.distanceToSquared(n.center)<=n.radius*n.radius}intersectsPlane(n){let i,o;return n.normal.x>0?(i=n.normal.x*this.min.x,o=n.normal.x*this.max.x):(i=n.normal.x*this.max.x,o=n.normal.x*this.min.x),n.normal.y>0?(i+=n.normal.y*this.min.y,o+=n.normal.y*this.max.y):(i+=n.normal.y*this.max.y,o+=n.normal.y*this.min.y),n.normal.z>0?(i+=n.normal.z*this.min.z,o+=n.normal.z*this.max.z):(i+=n.normal.z*this.max.z,o+=n.normal.z*this.min.z),i<=-n.constant&&o>=-n.constant}intersectsTriangle(n){if(this.isEmpty())return!1;this.getCenter(Vc),vh.subVectors(this.max,Vc),Dl.subVectors(n.a,Vc),Ll.subVectors(n.b,Vc),Ul.subVectors(n.c,Vc),Eo.subVectors(Ll,Dl),bo.subVectors(Ul,Ll),ds.subVectors(Dl,Ul);let i=[0,-Eo.z,Eo.y,0,-bo.z,bo.y,0,-ds.z,ds.y,Eo.z,0,-Eo.x,bo.z,0,-bo.x,ds.z,0,-ds.x,-Eo.y,Eo.x,0,-bo.y,bo.x,0,-ds.y,ds.x,0];return!c_(i,Dl,Ll,Ul,vh)||(i=[1,0,0,0,1,0,0,0,1],!c_(i,Dl,Ll,Ul,vh))?!1:(gh.crossVectors(Eo,bo),i=[gh.x,gh.y,gh.z],c_(i,Dl,Ll,Ul,vh))}clampPoint(n,i){return i.copy(n).clamp(this.min,this.max)}distanceToPoint(n){return this.clampPoint(n,Xr).distanceTo(n)}getBoundingSphere(n){return this.isEmpty()?n.makeEmpty():(this.getCenter(n.center),n.radius=this.getSize(Xr).length()*.5),n}intersect(n){return this.min.max(n.min),this.max.min(n.max),this.isEmpty()&&this.makeEmpty(),this}union(n){return this.min.min(n.min),this.max.max(n.max),this}applyMatrix4(n){return this.isEmpty()?this:(za[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(n),za[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(n),za[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(n),za[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(n),za[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(n),za[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(n),za[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(n),za[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(n),this.setFromPoints(za),this)}translate(n){return this.min.add(n),this.max.add(n),this}equals(n){return n.min.equals(this.min)&&n.max.equals(this.max)}}const za=[new de,new de,new de,new de,new de,new de,new de,new de],Xr=new de,mh=new rf,Dl=new de,Ll=new de,Ul=new de,Eo=new de,bo=new de,ds=new de,Vc=new de,vh=new de,gh=new de,hs=new de;function c_(s,n,i,o,u){for(let f=0,d=s.length-3;f<=d;f+=3){hs.fromArray(s,f);const p=u.x*Math.abs(hs.x)+u.y*Math.abs(hs.y)+u.z*Math.abs(hs.z),m=n.dot(hs),v=i.dot(hs),S=o.dot(hs);if(Math.max(-Math.max(m,v,S),Math.min(m,v,S))>p)return!1}return!0}const _O=new rf,Gc=new de,f_=new de;class Ly{constructor(n=new de,i=-1){this.isSphere=!0,this.center=n,this.radius=i}set(n,i){return this.center.copy(n),this.radius=i,this}setFromPoints(n,i){const o=this.center;i!==void 0?o.copy(i):_O.setFromPoints(n).getCenter(o);let u=0;for(let f=0,d=n.length;f<d;f++)u=Math.max(u,o.distanceToSquared(n[f]));return this.radius=Math.sqrt(u),this}copy(n){return this.center.copy(n.center),this.radius=n.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(n){return n.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(n){return n.distanceTo(this.center)-this.radius}intersectsSphere(n){const i=this.radius+n.radius;return n.center.distanceToSquared(this.center)<=i*i}intersectsBox(n){return n.intersectsSphere(this)}intersectsPlane(n){return Math.abs(n.distanceToPoint(this.center))<=this.radius}clampPoint(n,i){const o=this.center.distanceToSquared(n);return i.copy(n),o>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(n){return this.isEmpty()?(n.makeEmpty(),n):(n.set(this.center,this.center),n.expandByScalar(this.radius),n)}applyMatrix4(n){return this.center.applyMatrix4(n),this.radius=this.radius*n.getMaxScaleOnAxis(),this}translate(n){return this.center.add(n),this}expandByPoint(n){if(this.isEmpty())return this.center.copy(n),this.radius=0,this;Gc.subVectors(n,this.center);const i=Gc.lengthSq();if(i>this.radius*this.radius){const o=Math.sqrt(i),u=(o-this.radius)*.5;this.center.addScaledVector(Gc,u/o),this.radius+=u}return this}union(n){return n.isEmpty()?this:this.isEmpty()?(this.copy(n),this):(this.center.equals(n.center)===!0?this.radius=Math.max(this.radius,n.radius):(f_.subVectors(n.center,this.center).setLength(n.radius),this.expandByPoint(Gc.copy(n.center).add(f_)),this.expandByPoint(Gc.copy(n.center).sub(f_))),this)}equals(n){return n.center.equals(this.center)&&n.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ba=new de,d_=new de,_h=new de,Mo=new de,h_=new de,yh=new de,p_=new de;class yO{constructor(n=new de,i=new de(0,0,-1)){this.origin=n,this.direction=i}set(n,i){return this.origin.copy(n),this.direction.copy(i),this}copy(n){return this.origin.copy(n.origin),this.direction.copy(n.direction),this}at(n,i){return i.copy(this.origin).addScaledVector(this.direction,n)}lookAt(n){return this.direction.copy(n).sub(this.origin).normalize(),this}recast(n){return this.origin.copy(this.at(n,Ba)),this}closestPointToPoint(n,i){i.subVectors(n,this.origin);const o=i.dot(this.direction);return o<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,o)}distanceToPoint(n){return Math.sqrt(this.distanceSqToPoint(n))}distanceSqToPoint(n){const i=Ba.subVectors(n,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(n):(Ba.copy(this.origin).addScaledVector(this.direction,i),Ba.distanceToSquared(n))}distanceSqToSegment(n,i,o,u){d_.copy(n).add(i).multiplyScalar(.5),_h.copy(i).sub(n).normalize(),Mo.copy(this.origin).sub(d_);const f=n.distanceTo(i)*.5,d=-this.direction.dot(_h),p=Mo.dot(this.direction),m=-Mo.dot(_h),v=Mo.lengthSq(),S=Math.abs(1-d*d);let y,x,b,C;if(S>0)if(y=d*m-p,x=d*p-m,C=f*S,y>=0)if(x>=-C)if(x<=C){const L=1/S;y*=L,x*=L,b=y*(y+d*x+2*p)+x*(d*y+x+2*m)+v}else x=f,y=Math.max(0,-(d*x+p)),b=-y*y+x*(x+2*m)+v;else x=-f,y=Math.max(0,-(d*x+p)),b=-y*y+x*(x+2*m)+v;else x<=-C?(y=Math.max(0,-(-d*f+p)),x=y>0?-f:Math.min(Math.max(-f,-m),f),b=-y*y+x*(x+2*m)+v):x<=C?(y=0,x=Math.min(Math.max(-f,-m),f),b=x*(x+2*m)+v):(y=Math.max(0,-(d*f+p)),x=y>0?f:Math.min(Math.max(-f,-m),f),b=-y*y+x*(x+2*m)+v);else x=d>0?-f:f,y=Math.max(0,-(d*x+p)),b=-y*y+x*(x+2*m)+v;return o&&o.copy(this.origin).addScaledVector(this.direction,y),u&&u.copy(d_).addScaledVector(_h,x),b}intersectSphere(n,i){Ba.subVectors(n.center,this.origin);const o=Ba.dot(this.direction),u=Ba.dot(Ba)-o*o,f=n.radius*n.radius;if(u>f)return null;const d=Math.sqrt(f-u),p=o-d,m=o+d;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(n){return this.distanceSqToPoint(n.center)<=n.radius*n.radius}distanceToPlane(n){const i=n.normal.dot(this.direction);if(i===0)return n.distanceToPoint(this.origin)===0?0:null;const o=-(this.origin.dot(n.normal)+n.constant)/i;return o>=0?o:null}intersectPlane(n,i){const o=this.distanceToPlane(n);return o===null?null:this.at(o,i)}intersectsPlane(n){const i=n.distanceToPoint(this.origin);return i===0||n.normal.dot(this.direction)*i<0}intersectBox(n,i){let o,u,f,d,p,m;const v=1/this.direction.x,S=1/this.direction.y,y=1/this.direction.z,x=this.origin;return v>=0?(o=(n.min.x-x.x)*v,u=(n.max.x-x.x)*v):(o=(n.max.x-x.x)*v,u=(n.min.x-x.x)*v),S>=0?(f=(n.min.y-x.y)*S,d=(n.max.y-x.y)*S):(f=(n.max.y-x.y)*S,d=(n.min.y-x.y)*S),o>d||f>u||((f>o||isNaN(o))&&(o=f),(d<u||isNaN(u))&&(u=d),y>=0?(p=(n.min.z-x.z)*y,m=(n.max.z-x.z)*y):(p=(n.max.z-x.z)*y,m=(n.min.z-x.z)*y),o>m||p>u)||((p>o||o!==o)&&(o=p),(m<u||u!==u)&&(u=m),u<0)?null:this.at(o>=0?o:u,i)}intersectsBox(n){return this.intersectBox(n,Ba)!==null}intersectTriangle(n,i,o,u,f){h_.subVectors(i,n),yh.subVectors(o,n),p_.crossVectors(h_,yh);let d=this.direction.dot(p_),p;if(d>0){if(u)return null;p=1}else if(d<0)p=-1,d=-d;else return null;Mo.subVectors(this.origin,n);const m=p*this.direction.dot(yh.crossVectors(Mo,yh));if(m<0)return null;const v=p*this.direction.dot(h_.cross(Mo));if(v<0||m+v>d)return null;const S=-p*Mo.dot(p_);return S<0?null:this.at(S/d,f)}applyMatrix4(n){return this.origin.applyMatrix4(n),this.direction.transformDirection(n),this}equals(n){return n.origin.equals(this.origin)&&n.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fn{constructor(n,i,o,u,f,d,p,m,v,S,y,x,b,C,L,M){Fn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],n!==void 0&&this.set(n,i,o,u,f,d,p,m,v,S,y,x,b,C,L,M)}set(n,i,o,u,f,d,p,m,v,S,y,x,b,C,L,M){const _=this.elements;return _[0]=n,_[4]=i,_[8]=o,_[12]=u,_[1]=f,_[5]=d,_[9]=p,_[13]=m,_[2]=v,_[6]=S,_[10]=y,_[14]=x,_[3]=b,_[7]=C,_[11]=L,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fn().fromArray(this.elements)}copy(n){const i=this.elements,o=n.elements;return i[0]=o[0],i[1]=o[1],i[2]=o[2],i[3]=o[3],i[4]=o[4],i[5]=o[5],i[6]=o[6],i[7]=o[7],i[8]=o[8],i[9]=o[9],i[10]=o[10],i[11]=o[11],i[12]=o[12],i[13]=o[13],i[14]=o[14],i[15]=o[15],this}copyPosition(n){const i=this.elements,o=n.elements;return i[12]=o[12],i[13]=o[13],i[14]=o[14],this}setFromMatrix3(n){const i=n.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(n,i,o){return n.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),o.setFromMatrixColumn(this,2),this}makeBasis(n,i,o){return this.set(n.x,i.x,o.x,0,n.y,i.y,o.y,0,n.z,i.z,o.z,0,0,0,0,1),this}extractRotation(n){const i=this.elements,o=n.elements,u=1/Nl.setFromMatrixColumn(n,0).length(),f=1/Nl.setFromMatrixColumn(n,1).length(),d=1/Nl.setFromMatrixColumn(n,2).length();return i[0]=o[0]*u,i[1]=o[1]*u,i[2]=o[2]*u,i[3]=0,i[4]=o[4]*f,i[5]=o[5]*f,i[6]=o[6]*f,i[7]=0,i[8]=o[8]*d,i[9]=o[9]*d,i[10]=o[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(n){const i=this.elements,o=n.x,u=n.y,f=n.z,d=Math.cos(o),p=Math.sin(o),m=Math.cos(u),v=Math.sin(u),S=Math.cos(f),y=Math.sin(f);if(n.order==="XYZ"){const x=d*S,b=d*y,C=p*S,L=p*y;i[0]=m*S,i[4]=-m*y,i[8]=v,i[1]=b+C*v,i[5]=x-L*v,i[9]=-p*m,i[2]=L-x*v,i[6]=C+b*v,i[10]=d*m}else if(n.order==="YXZ"){const x=m*S,b=m*y,C=v*S,L=v*y;i[0]=x+L*p,i[4]=C*p-b,i[8]=d*v,i[1]=d*y,i[5]=d*S,i[9]=-p,i[2]=b*p-C,i[6]=L+x*p,i[10]=d*m}else if(n.order==="ZXY"){const x=m*S,b=m*y,C=v*S,L=v*y;i[0]=x-L*p,i[4]=-d*y,i[8]=C+b*p,i[1]=b+C*p,i[5]=d*S,i[9]=L-x*p,i[2]=-d*v,i[6]=p,i[10]=d*m}else if(n.order==="ZYX"){const x=d*S,b=d*y,C=p*S,L=p*y;i[0]=m*S,i[4]=C*v-b,i[8]=x*v+L,i[1]=m*y,i[5]=L*v+x,i[9]=b*v-C,i[2]=-v,i[6]=p*m,i[10]=d*m}else if(n.order==="YZX"){const x=d*m,b=d*v,C=p*m,L=p*v;i[0]=m*S,i[4]=L-x*y,i[8]=C*y+b,i[1]=y,i[5]=d*S,i[9]=-p*S,i[2]=-v*S,i[6]=b*y+C,i[10]=x-L*y}else if(n.order==="XZY"){const x=d*m,b=d*v,C=p*m,L=p*v;i[0]=m*S,i[4]=-y,i[8]=v*S,i[1]=x*y+L,i[5]=d*S,i[9]=b*y-C,i[2]=C*y-b,i[6]=p*S,i[10]=L*y+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(n){return this.compose(SO,n,xO)}lookAt(n,i,o){const u=this.elements;return mr.subVectors(n,i),mr.lengthSq()===0&&(mr.z=1),mr.normalize(),To.crossVectors(o,mr),To.lengthSq()===0&&(Math.abs(o.z)===1?mr.x+=1e-4:mr.z+=1e-4,mr.normalize(),To.crossVectors(o,mr)),To.normalize(),Sh.crossVectors(mr,To),u[0]=To.x,u[4]=Sh.x,u[8]=mr.x,u[1]=To.y,u[5]=Sh.y,u[9]=mr.y,u[2]=To.z,u[6]=Sh.z,u[10]=mr.z,this}multiply(n){return this.multiplyMatrices(this,n)}premultiply(n){return this.multiplyMatrices(n,this)}multiplyMatrices(n,i){const o=n.elements,u=i.elements,f=this.elements,d=o[0],p=o[4],m=o[8],v=o[12],S=o[1],y=o[5],x=o[9],b=o[13],C=o[2],L=o[6],M=o[10],_=o[14],F=o[3],I=o[7],P=o[11],$=o[15],G=u[0],z=u[4],Z=u[8],N=u[12],D=u[1],V=u[5],he=u[9],K=u[13],Se=u[2],ye=u[6],ce=u[10],fe=u[14],le=u[3],Fe=u[7],Ge=u[11],tt=u[15];return f[0]=d*G+p*D+m*Se+v*le,f[4]=d*z+p*V+m*ye+v*Fe,f[8]=d*Z+p*he+m*ce+v*Ge,f[12]=d*N+p*K+m*fe+v*tt,f[1]=S*G+y*D+x*Se+b*le,f[5]=S*z+y*V+x*ye+b*Fe,f[9]=S*Z+y*he+x*ce+b*Ge,f[13]=S*N+y*K+x*fe+b*tt,f[2]=C*G+L*D+M*Se+_*le,f[6]=C*z+L*V+M*ye+_*Fe,f[10]=C*Z+L*he+M*ce+_*Ge,f[14]=C*N+L*K+M*fe+_*tt,f[3]=F*G+I*D+P*Se+$*le,f[7]=F*z+I*V+P*ye+$*Fe,f[11]=F*Z+I*he+P*ce+$*Ge,f[15]=F*N+I*K+P*fe+$*tt,this}multiplyScalar(n){const i=this.elements;return i[0]*=n,i[4]*=n,i[8]*=n,i[12]*=n,i[1]*=n,i[5]*=n,i[9]*=n,i[13]*=n,i[2]*=n,i[6]*=n,i[10]*=n,i[14]*=n,i[3]*=n,i[7]*=n,i[11]*=n,i[15]*=n,this}determinant(){const n=this.elements,i=n[0],o=n[4],u=n[8],f=n[12],d=n[1],p=n[5],m=n[9],v=n[13],S=n[2],y=n[6],x=n[10],b=n[14],C=n[3],L=n[7],M=n[11],_=n[15];return C*(+f*m*y-u*v*y-f*p*x+o*v*x+u*p*b-o*m*b)+L*(+i*m*b-i*v*x+f*d*x-u*d*b+u*v*S-f*m*S)+M*(+i*v*y-i*p*b-f*d*y+o*d*b+f*p*S-o*v*S)+_*(-u*p*S-i*m*y+i*p*x+u*d*y-o*d*x+o*m*S)}transpose(){const n=this.elements;let i;return i=n[1],n[1]=n[4],n[4]=i,i=n[2],n[2]=n[8],n[8]=i,i=n[6],n[6]=n[9],n[9]=i,i=n[3],n[3]=n[12],n[12]=i,i=n[7],n[7]=n[13],n[13]=i,i=n[11],n[11]=n[14],n[14]=i,this}setPosition(n,i,o){const u=this.elements;return n.isVector3?(u[12]=n.x,u[13]=n.y,u[14]=n.z):(u[12]=n,u[13]=i,u[14]=o),this}invert(){const n=this.elements,i=n[0],o=n[1],u=n[2],f=n[3],d=n[4],p=n[5],m=n[6],v=n[7],S=n[8],y=n[9],x=n[10],b=n[11],C=n[12],L=n[13],M=n[14],_=n[15],F=y*M*v-L*x*v+L*m*b-p*M*b-y*m*_+p*x*_,I=C*x*v-S*M*v-C*m*b+d*M*b+S*m*_-d*x*_,P=S*L*v-C*y*v+C*p*b-d*L*b-S*p*_+d*y*_,$=C*y*m-S*L*m-C*p*x+d*L*x+S*p*M-d*y*M,G=i*F+o*I+u*P+f*$;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/G;return n[0]=F*z,n[1]=(L*x*f-y*M*f-L*u*b+o*M*b+y*u*_-o*x*_)*z,n[2]=(p*M*f-L*m*f+L*u*v-o*M*v-p*u*_+o*m*_)*z,n[3]=(y*m*f-p*x*f-y*u*v+o*x*v+p*u*b-o*m*b)*z,n[4]=I*z,n[5]=(S*M*f-C*x*f+C*u*b-i*M*b-S*u*_+i*x*_)*z,n[6]=(C*m*f-d*M*f-C*u*v+i*M*v+d*u*_-i*m*_)*z,n[7]=(d*x*f-S*m*f+S*u*v-i*x*v-d*u*b+i*m*b)*z,n[8]=P*z,n[9]=(C*y*f-S*L*f-C*o*b+i*L*b+S*o*_-i*y*_)*z,n[10]=(d*L*f-C*p*f+C*o*v-i*L*v-d*o*_+i*p*_)*z,n[11]=(S*p*f-d*y*f-S*o*v+i*y*v+d*o*b-i*p*b)*z,n[12]=$*z,n[13]=(S*L*u-C*y*u+C*o*x-i*L*x-S*o*M+i*y*M)*z,n[14]=(C*p*u-d*L*u-C*o*m+i*L*m+d*o*M-i*p*M)*z,n[15]=(d*y*u-S*p*u+S*o*m-i*y*m-d*o*x+i*p*x)*z,this}scale(n){const i=this.elements,o=n.x,u=n.y,f=n.z;return i[0]*=o,i[4]*=u,i[8]*=f,i[1]*=o,i[5]*=u,i[9]*=f,i[2]*=o,i[6]*=u,i[10]*=f,i[3]*=o,i[7]*=u,i[11]*=f,this}getMaxScaleOnAxis(){const n=this.elements,i=n[0]*n[0]+n[1]*n[1]+n[2]*n[2],o=n[4]*n[4]+n[5]*n[5]+n[6]*n[6],u=n[8]*n[8]+n[9]*n[9]+n[10]*n[10];return Math.sqrt(Math.max(i,o,u))}makeTranslation(n,i,o){return n.isVector3?this.set(1,0,0,n.x,0,1,0,n.y,0,0,1,n.z,0,0,0,1):this.set(1,0,0,n,0,1,0,i,0,0,1,o,0,0,0,1),this}makeRotationX(n){const i=Math.cos(n),o=Math.sin(n);return this.set(1,0,0,0,0,i,-o,0,0,o,i,0,0,0,0,1),this}makeRotationY(n){const i=Math.cos(n),o=Math.sin(n);return this.set(i,0,o,0,0,1,0,0,-o,0,i,0,0,0,0,1),this}makeRotationZ(n){const i=Math.cos(n),o=Math.sin(n);return this.set(i,-o,0,0,o,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(n,i){const o=Math.cos(i),u=Math.sin(i),f=1-o,d=n.x,p=n.y,m=n.z,v=f*d,S=f*p;return this.set(v*d+o,v*p-u*m,v*m+u*p,0,v*p+u*m,S*p+o,S*m-u*d,0,v*m-u*p,S*m+u*d,f*m*m+o,0,0,0,0,1),this}makeScale(n,i,o){return this.set(n,0,0,0,0,i,0,0,0,0,o,0,0,0,0,1),this}makeShear(n,i,o,u,f,d){return this.set(1,o,f,0,n,1,d,0,i,u,1,0,0,0,0,1),this}compose(n,i,o){const u=this.elements,f=i._x,d=i._y,p=i._z,m=i._w,v=f+f,S=d+d,y=p+p,x=f*v,b=f*S,C=f*y,L=d*S,M=d*y,_=p*y,F=m*v,I=m*S,P=m*y,$=o.x,G=o.y,z=o.z;return u[0]=(1-(L+_))*$,u[1]=(b+P)*$,u[2]=(C-I)*$,u[3]=0,u[4]=(b-P)*G,u[5]=(1-(x+_))*G,u[6]=(M+F)*G,u[7]=0,u[8]=(C+I)*z,u[9]=(M-F)*z,u[10]=(1-(x+L))*z,u[11]=0,u[12]=n.x,u[13]=n.y,u[14]=n.z,u[15]=1,this}decompose(n,i,o){const u=this.elements;let f=Nl.set(u[0],u[1],u[2]).length();const d=Nl.set(u[4],u[5],u[6]).length(),p=Nl.set(u[8],u[9],u[10]).length();this.determinant()<0&&(f=-f),n.x=u[12],n.y=u[13],n.z=u[14],jr.copy(this);const v=1/f,S=1/d,y=1/p;return jr.elements[0]*=v,jr.elements[1]*=v,jr.elements[2]*=v,jr.elements[4]*=S,jr.elements[5]*=S,jr.elements[6]*=S,jr.elements[8]*=y,jr.elements[9]*=y,jr.elements[10]*=y,i.setFromRotationMatrix(jr),o.x=f,o.y=d,o.z=p,this}makePerspective(n,i,o,u,f,d,p=ja){const m=this.elements,v=2*f/(i-n),S=2*f/(o-u),y=(i+n)/(i-n),x=(o+u)/(o-u);let b,C;if(p===ja)b=-(d+f)/(d-f),C=-2*d*f/(d-f);else if(p===Gh)b=-d/(d-f),C=-d*f/(d-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return m[0]=v,m[4]=0,m[8]=y,m[12]=0,m[1]=0,m[5]=S,m[9]=x,m[13]=0,m[2]=0,m[6]=0,m[10]=b,m[14]=C,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(n,i,o,u,f,d,p=ja){const m=this.elements,v=1/(i-n),S=1/(o-u),y=1/(d-f),x=(i+n)*v,b=(o+u)*S;let C,L;if(p===ja)C=(d+f)*y,L=-2*y;else if(p===Gh)C=f*y,L=-1*y;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return m[0]=2*v,m[4]=0,m[8]=0,m[12]=-x,m[1]=0,m[5]=2*S,m[9]=0,m[13]=-b,m[2]=0,m[6]=0,m[10]=L,m[14]=-C,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(n){const i=this.elements,o=n.elements;for(let u=0;u<16;u++)if(i[u]!==o[u])return!1;return!0}fromArray(n,i=0){for(let o=0;o<16;o++)this.elements[o]=n[o+i];return this}toArray(n=[],i=0){const o=this.elements;return n[i]=o[0],n[i+1]=o[1],n[i+2]=o[2],n[i+3]=o[3],n[i+4]=o[4],n[i+5]=o[5],n[i+6]=o[6],n[i+7]=o[7],n[i+8]=o[8],n[i+9]=o[9],n[i+10]=o[10],n[i+11]=o[11],n[i+12]=o[12],n[i+13]=o[13],n[i+14]=o[14],n[i+15]=o[15],n}}const Nl=new de,jr=new Fn,SO=new de(0,0,0),xO=new de(1,1,1),To=new de,Sh=new de,mr=new de,hM=new Fn,pM=new nf;class ha{constructor(n=0,i=0,o=0,u=ha.DEFAULT_ORDER){this.isEuler=!0,this._x=n,this._y=i,this._z=o,this._order=u}get x(){return this._x}set x(n){this._x=n,this._onChangeCallback()}get y(){return this._y}set y(n){this._y=n,this._onChangeCallback()}get z(){return this._z}set z(n){this._z=n,this._onChangeCallback()}get order(){return this._order}set order(n){this._order=n,this._onChangeCallback()}set(n,i,o,u=this._order){return this._x=n,this._y=i,this._z=o,this._order=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(n){return this._x=n._x,this._y=n._y,this._z=n._z,this._order=n._order,this._onChangeCallback(),this}setFromRotationMatrix(n,i=this._order,o=!0){const u=n.elements,f=u[0],d=u[4],p=u[8],m=u[1],v=u[5],S=u[9],y=u[2],x=u[6],b=u[10];switch(i){case"XYZ":this._y=Math.asin(Yi(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-S,b),this._z=Math.atan2(-d,f)):(this._x=Math.atan2(x,v),this._z=0);break;case"YXZ":this._x=Math.asin(-Yi(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(p,b),this._z=Math.atan2(m,v)):(this._y=Math.atan2(-y,f),this._z=0);break;case"ZXY":this._x=Math.asin(Yi(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-y,b),this._z=Math.atan2(-d,v)):(this._y=0,this._z=Math.atan2(m,f));break;case"ZYX":this._y=Math.asin(-Yi(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(x,b),this._z=Math.atan2(m,f)):(this._x=0,this._z=Math.atan2(-d,v));break;case"YZX":this._z=Math.asin(Yi(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-S,v),this._y=Math.atan2(-y,f)):(this._x=0,this._y=Math.atan2(p,b));break;case"XZY":this._z=Math.asin(-Yi(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(x,v),this._y=Math.atan2(p,f)):(this._x=Math.atan2(-S,b),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,o===!0&&this._onChangeCallback(),this}setFromQuaternion(n,i,o){return hM.makeRotationFromQuaternion(n),this.setFromRotationMatrix(hM,i,o)}setFromVector3(n,i=this._order){return this.set(n.x,n.y,n.z,i)}reorder(n){return pM.setFromEuler(this),this.setFromQuaternion(pM,n)}equals(n){return n._x===this._x&&n._y===this._y&&n._z===this._z&&n._order===this._order}fromArray(n){return this._x=n[0],this._y=n[1],this._z=n[2],n[3]!==void 0&&(this._order=n[3]),this._onChangeCallback(),this}toArray(n=[],i=0){return n[i]=this._x,n[i+1]=this._y,n[i+2]=this._z,n[i+3]=this._order,n}_onChange(n){return this._onChangeCallback=n,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ha.DEFAULT_ORDER="XYZ";class ST{constructor(){this.mask=1}set(n){this.mask=(1<<n|0)>>>0}enable(n){this.mask|=1<<n|0}enableAll(){this.mask=-1}toggle(n){this.mask^=1<<n|0}disable(n){this.mask&=~(1<<n|0)}disableAll(){this.mask=0}test(n){return(this.mask&n.mask)!==0}isEnabled(n){return(this.mask&(1<<n|0))!==0}}let EO=0;const mM=new de,Pl=new nf,ka=new Fn,xh=new de,Wc=new de,bO=new de,MO=new nf,vM=new de(1,0,0),gM=new de(0,1,0),_M=new de(0,0,1),yM={type:"added"},TO={type:"removed"},Ol={type:"childadded",child:null},m_={type:"childremoved",child:null};class Pi extends nu{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:EO++}),this.uuid=iu(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pi.DEFAULT_UP.clone();const n=new de,i=new ha,o=new nf,u=new de(1,1,1);function f(){o.setFromEuler(i,!1)}function d(){i.setFromQuaternion(o,void 0,!1)}i._onChange(f),o._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:n},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:o},scale:{configurable:!0,enumerable:!0,value:u},modelViewMatrix:{value:new Fn},normalMatrix:{value:new Vt}}),this.matrix=new Fn,this.matrixWorld=new Fn,this.matrixAutoUpdate=Pi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ST,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(n){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(n),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(n){return this.quaternion.premultiply(n),this}setRotationFromAxisAngle(n,i){this.quaternion.setFromAxisAngle(n,i)}setRotationFromEuler(n){this.quaternion.setFromEuler(n,!0)}setRotationFromMatrix(n){this.quaternion.setFromRotationMatrix(n)}setRotationFromQuaternion(n){this.quaternion.copy(n)}rotateOnAxis(n,i){return Pl.setFromAxisAngle(n,i),this.quaternion.multiply(Pl),this}rotateOnWorldAxis(n,i){return Pl.setFromAxisAngle(n,i),this.quaternion.premultiply(Pl),this}rotateX(n){return this.rotateOnAxis(vM,n)}rotateY(n){return this.rotateOnAxis(gM,n)}rotateZ(n){return this.rotateOnAxis(_M,n)}translateOnAxis(n,i){return mM.copy(n).applyQuaternion(this.quaternion),this.position.add(mM.multiplyScalar(i)),this}translateX(n){return this.translateOnAxis(vM,n)}translateY(n){return this.translateOnAxis(gM,n)}translateZ(n){return this.translateOnAxis(_M,n)}localToWorld(n){return this.updateWorldMatrix(!0,!1),n.applyMatrix4(this.matrixWorld)}worldToLocal(n){return this.updateWorldMatrix(!0,!1),n.applyMatrix4(ka.copy(this.matrixWorld).invert())}lookAt(n,i,o){n.isVector3?xh.copy(n):xh.set(n,i,o);const u=this.parent;this.updateWorldMatrix(!0,!1),Wc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ka.lookAt(Wc,xh,this.up):ka.lookAt(xh,Wc,this.up),this.quaternion.setFromRotationMatrix(ka),u&&(ka.extractRotation(u.matrixWorld),Pl.setFromRotationMatrix(ka),this.quaternion.premultiply(Pl.invert()))}add(n){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return n===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",n),this):(n&&n.isObject3D?(n.removeFromParent(),n.parent=this,this.children.push(n),n.dispatchEvent(yM),Ol.child=n,this.dispatchEvent(Ol),Ol.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",n),this)}remove(n){if(arguments.length>1){for(let o=0;o<arguments.length;o++)this.remove(arguments[o]);return this}const i=this.children.indexOf(n);return i!==-1&&(n.parent=null,this.children.splice(i,1),n.dispatchEvent(TO),m_.child=n,this.dispatchEvent(m_),m_.child=null),this}removeFromParent(){const n=this.parent;return n!==null&&n.remove(this),this}clear(){return this.remove(...this.children)}attach(n){return this.updateWorldMatrix(!0,!1),ka.copy(this.matrixWorld).invert(),n.parent!==null&&(n.parent.updateWorldMatrix(!0,!1),ka.multiply(n.parent.matrixWorld)),n.applyMatrix4(ka),n.removeFromParent(),n.parent=this,this.children.push(n),n.updateWorldMatrix(!1,!0),n.dispatchEvent(yM),Ol.child=n,this.dispatchEvent(Ol),Ol.child=null,this}getObjectById(n){return this.getObjectByProperty("id",n)}getObjectByName(n){return this.getObjectByProperty("name",n)}getObjectByProperty(n,i){if(this[n]===i)return this;for(let o=0,u=this.children.length;o<u;o++){const d=this.children[o].getObjectByProperty(n,i);if(d!==void 0)return d}}getObjectsByProperty(n,i,o=[]){this[n]===i&&o.push(this);const u=this.children;for(let f=0,d=u.length;f<d;f++)u[f].getObjectsByProperty(n,i,o);return o}getWorldPosition(n){return this.updateWorldMatrix(!0,!1),n.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(n){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wc,n,bO),n}getWorldScale(n){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wc,MO,n),n}getWorldDirection(n){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return n.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(n){n(this);const i=this.children;for(let o=0,u=i.length;o<u;o++)i[o].traverse(n)}traverseVisible(n){if(this.visible===!1)return;n(this);const i=this.children;for(let o=0,u=i.length;o<u;o++)i[o].traverseVisible(n)}traverseAncestors(n){const i=this.parent;i!==null&&(n(i),i.traverseAncestors(n))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(n){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0);const i=this.children;for(let o=0,u=i.length;o<u;o++)i[o].updateMatrixWorld(n)}updateWorldMatrix(n,i){const o=this.parent;if(n===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const u=this.children;for(let f=0,d=u.length;f<d;f++)u[f].updateWorldMatrix(!1,!0)}}toJSON(n){const i=n===void 0||typeof n=="string",o={};i&&(n={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},o.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const u={};u.uuid=this.uuid,u.type=this.type,this.name!==""&&(u.name=this.name),this.castShadow===!0&&(u.castShadow=!0),this.receiveShadow===!0&&(u.receiveShadow=!0),this.visible===!1&&(u.visible=!1),this.frustumCulled===!1&&(u.frustumCulled=!1),this.renderOrder!==0&&(u.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(u.userData=this.userData),u.layers=this.layers.mask,u.matrix=this.matrix.toArray(),u.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(u.matrixAutoUpdate=!1),this.isInstancedMesh&&(u.type="InstancedMesh",u.count=this.count,u.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(u.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(u.type="BatchedMesh",u.perObjectFrustumCulled=this.perObjectFrustumCulled,u.sortObjects=this.sortObjects,u.drawRanges=this._drawRanges,u.reservedRanges=this._reservedRanges,u.visibility=this._visibility,u.active=this._active,u.bounds=this._bounds.map(p=>({boxInitialized:p.boxInitialized,boxMin:p.box.min.toArray(),boxMax:p.box.max.toArray(),sphereInitialized:p.sphereInitialized,sphereRadius:p.sphere.radius,sphereCenter:p.sphere.center.toArray()})),u.maxInstanceCount=this._maxInstanceCount,u.maxVertexCount=this._maxVertexCount,u.maxIndexCount=this._maxIndexCount,u.geometryInitialized=this._geometryInitialized,u.geometryCount=this._geometryCount,u.matricesTexture=this._matricesTexture.toJSON(n),this._colorsTexture!==null&&(u.colorsTexture=this._colorsTexture.toJSON(n)),this.boundingSphere!==null&&(u.boundingSphere={center:u.boundingSphere.center.toArray(),radius:u.boundingSphere.radius}),this.boundingBox!==null&&(u.boundingBox={min:u.boundingBox.min.toArray(),max:u.boundingBox.max.toArray()}));function f(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(n)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?u.background=this.background.toJSON():this.background.isTexture&&(u.background=this.background.toJSON(n).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(u.environment=this.environment.toJSON(n).uuid);else if(this.isMesh||this.isLine||this.isPoints){u.geometry=f(n.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let v=0,S=m.length;v<S;v++){const y=m[v];f(n.shapes,y)}else f(n.shapes,m)}}if(this.isSkinnedMesh&&(u.bindMode=this.bindMode,u.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(n.skeletons,this.skeleton),u.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,v=this.material.length;m<v;m++)p.push(f(n.materials,this.material[m]));u.material=p}else u.material=f(n.materials,this.material);if(this.children.length>0){u.children=[];for(let p=0;p<this.children.length;p++)u.children.push(this.children[p].toJSON(n).object)}if(this.animations.length>0){u.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];u.animations.push(f(n.animations,m))}}if(i){const p=d(n.geometries),m=d(n.materials),v=d(n.textures),S=d(n.images),y=d(n.shapes),x=d(n.skeletons),b=d(n.animations),C=d(n.nodes);p.length>0&&(o.geometries=p),m.length>0&&(o.materials=m),v.length>0&&(o.textures=v),S.length>0&&(o.images=S),y.length>0&&(o.shapes=y),x.length>0&&(o.skeletons=x),b.length>0&&(o.animations=b),C.length>0&&(o.nodes=C)}return o.object=u,o;function d(p){const m=[];for(const v in p){const S=p[v];delete S.metadata,m.push(S)}return m}}clone(n){return new this.constructor().copy(this,n)}copy(n,i=!0){if(this.name=n.name,this.up.copy(n.up),this.position.copy(n.position),this.rotation.order=n.rotation.order,this.quaternion.copy(n.quaternion),this.scale.copy(n.scale),this.matrix.copy(n.matrix),this.matrixWorld.copy(n.matrixWorld),this.matrixAutoUpdate=n.matrixAutoUpdate,this.matrixWorldAutoUpdate=n.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=n.matrixWorldNeedsUpdate,this.layers.mask=n.layers.mask,this.visible=n.visible,this.castShadow=n.castShadow,this.receiveShadow=n.receiveShadow,this.frustumCulled=n.frustumCulled,this.renderOrder=n.renderOrder,this.animations=n.animations.slice(),this.userData=JSON.parse(JSON.stringify(n.userData)),i===!0)for(let o=0;o<n.children.length;o++){const u=n.children[o];this.add(u.clone())}return this}}Pi.DEFAULT_UP=new de(0,1,0);Pi.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yr=new de,Ha=new de,v_=new de,Va=new de,Fl=new de,Il=new de,SM=new de,g_=new de,__=new de,y_=new de,S_=new On,x_=new On,E_=new On;class qr{constructor(n=new de,i=new de,o=new de){this.a=n,this.b=i,this.c=o}static getNormal(n,i,o,u){u.subVectors(o,i),Yr.subVectors(n,i),u.cross(Yr);const f=u.lengthSq();return f>0?u.multiplyScalar(1/Math.sqrt(f)):u.set(0,0,0)}static getBarycoord(n,i,o,u,f){Yr.subVectors(u,i),Ha.subVectors(o,i),v_.subVectors(n,i);const d=Yr.dot(Yr),p=Yr.dot(Ha),m=Yr.dot(v_),v=Ha.dot(Ha),S=Ha.dot(v_),y=d*v-p*p;if(y===0)return f.set(0,0,0),null;const x=1/y,b=(v*m-p*S)*x,C=(d*S-p*m)*x;return f.set(1-b-C,C,b)}static containsPoint(n,i,o,u){return this.getBarycoord(n,i,o,u,Va)===null?!1:Va.x>=0&&Va.y>=0&&Va.x+Va.y<=1}static getInterpolation(n,i,o,u,f,d,p,m){return this.getBarycoord(n,i,o,u,Va)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(f,Va.x),m.addScaledVector(d,Va.y),m.addScaledVector(p,Va.z),m)}static getInterpolatedAttribute(n,i,o,u,f,d){return S_.setScalar(0),x_.setScalar(0),E_.setScalar(0),S_.fromBufferAttribute(n,i),x_.fromBufferAttribute(n,o),E_.fromBufferAttribute(n,u),d.setScalar(0),d.addScaledVector(S_,f.x),d.addScaledVector(x_,f.y),d.addScaledVector(E_,f.z),d}static isFrontFacing(n,i,o,u){return Yr.subVectors(o,i),Ha.subVectors(n,i),Yr.cross(Ha).dot(u)<0}set(n,i,o){return this.a.copy(n),this.b.copy(i),this.c.copy(o),this}setFromPointsAndIndices(n,i,o,u){return this.a.copy(n[i]),this.b.copy(n[o]),this.c.copy(n[u]),this}setFromAttributeAndIndices(n,i,o,u){return this.a.fromBufferAttribute(n,i),this.b.fromBufferAttribute(n,o),this.c.fromBufferAttribute(n,u),this}clone(){return new this.constructor().copy(this)}copy(n){return this.a.copy(n.a),this.b.copy(n.b),this.c.copy(n.c),this}getArea(){return Yr.subVectors(this.c,this.b),Ha.subVectors(this.a,this.b),Yr.cross(Ha).length()*.5}getMidpoint(n){return n.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(n){return qr.getNormal(this.a,this.b,this.c,n)}getPlane(n){return n.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(n,i){return qr.getBarycoord(n,this.a,this.b,this.c,i)}getInterpolation(n,i,o,u,f){return qr.getInterpolation(n,this.a,this.b,this.c,i,o,u,f)}containsPoint(n){return qr.containsPoint(n,this.a,this.b,this.c)}isFrontFacing(n){return qr.isFrontFacing(this.a,this.b,this.c,n)}intersectsBox(n){return n.intersectsTriangle(this)}closestPointToPoint(n,i){const o=this.a,u=this.b,f=this.c;let d,p;Fl.subVectors(u,o),Il.subVectors(f,o),g_.subVectors(n,o);const m=Fl.dot(g_),v=Il.dot(g_);if(m<=0&&v<=0)return i.copy(o);__.subVectors(n,u);const S=Fl.dot(__),y=Il.dot(__);if(S>=0&&y<=S)return i.copy(u);const x=m*y-S*v;if(x<=0&&m>=0&&S<=0)return d=m/(m-S),i.copy(o).addScaledVector(Fl,d);y_.subVectors(n,f);const b=Fl.dot(y_),C=Il.dot(y_);if(C>=0&&b<=C)return i.copy(f);const L=b*v-m*C;if(L<=0&&v>=0&&C<=0)return p=v/(v-C),i.copy(o).addScaledVector(Il,p);const M=S*C-b*y;if(M<=0&&y-S>=0&&b-C>=0)return SM.subVectors(f,u),p=(y-S)/(y-S+(b-C)),i.copy(u).addScaledVector(SM,p);const _=1/(M+L+x);return d=L*_,p=x*_,i.copy(o).addScaledVector(Fl,d).addScaledVector(Il,p)}equals(n){return n.a.equals(this.a)&&n.b.equals(this.b)&&n.c.equals(this.c)}}const xT={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ro={h:0,s:0,l:0},Eh={h:0,s:0,l:0};function b_(s,n,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(n-s)*6*i:i<1/2?n:i<2/3?s+(n-s)*6*(2/3-i):s}class cn{constructor(n,i,o){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(n,i,o)}set(n,i,o){if(i===void 0&&o===void 0){const u=n;u&&u.isColor?this.copy(u):typeof u=="number"?this.setHex(u):typeof u=="string"&&this.setStyle(u)}else this.setRGB(n,i,o);return this}setScalar(n){return this.r=n,this.g=n,this.b=n,this}setHex(n,i=Cr){return n=Math.floor(n),this.r=(n>>16&255)/255,this.g=(n>>8&255)/255,this.b=(n&255)/255,un.toWorkingColorSpace(this,i),this}setRGB(n,i,o,u=un.workingColorSpace){return this.r=n,this.g=i,this.b=o,un.toWorkingColorSpace(this,u),this}setHSL(n,i,o,u=un.workingColorSpace){if(n=Dy(n,1),i=Yi(i,0,1),o=Yi(o,0,1),i===0)this.r=this.g=this.b=o;else{const f=o<=.5?o*(1+i):o+i-o*i,d=2*o-f;this.r=b_(d,f,n+1/3),this.g=b_(d,f,n),this.b=b_(d,f,n-1/3)}return un.toWorkingColorSpace(this,u),this}setStyle(n,i=Cr){function o(f){f!==void 0&&parseFloat(f)<1&&console.warn("THREE.Color: Alpha component of "+n+" will be ignored.")}let u;if(u=/^(\w+)\(([^\)]*)\)/.exec(n)){let f;const d=u[1],p=u[2];switch(d){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return o(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,i);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return o(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,i);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return o(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+n)}}else if(u=/^\#([A-Fa-f\d]+)$/.exec(n)){const f=u[1],d=f.length;if(d===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(f,16),i);console.warn("THREE.Color: Invalid hex color "+n)}else if(n&&n.length>0)return this.setColorName(n,i);return this}setColorName(n,i=Cr){const o=xT[n.toLowerCase()];return o!==void 0?this.setHex(o,i):console.warn("THREE.Color: Unknown color "+n),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(n){return this.r=n.r,this.g=n.g,this.b=n.b,this}copySRGBToLinear(n){return this.r=Ya(n.r),this.g=Ya(n.g),this.b=Ya(n.b),this}copyLinearToSRGB(n){return this.r=Yl(n.r),this.g=Yl(n.g),this.b=Yl(n.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(n=Cr){return un.fromWorkingColorSpace(Ni.copy(this),n),Math.round(Yi(Ni.r*255,0,255))*65536+Math.round(Yi(Ni.g*255,0,255))*256+Math.round(Yi(Ni.b*255,0,255))}getHexString(n=Cr){return("000000"+this.getHex(n).toString(16)).slice(-6)}getHSL(n,i=un.workingColorSpace){un.fromWorkingColorSpace(Ni.copy(this),i);const o=Ni.r,u=Ni.g,f=Ni.b,d=Math.max(o,u,f),p=Math.min(o,u,f);let m,v;const S=(p+d)/2;if(p===d)m=0,v=0;else{const y=d-p;switch(v=S<=.5?y/(d+p):y/(2-d-p),d){case o:m=(u-f)/y+(u<f?6:0);break;case u:m=(f-o)/y+2;break;case f:m=(o-u)/y+4;break}m/=6}return n.h=m,n.s=v,n.l=S,n}getRGB(n,i=un.workingColorSpace){return un.fromWorkingColorSpace(Ni.copy(this),i),n.r=Ni.r,n.g=Ni.g,n.b=Ni.b,n}getStyle(n=Cr){un.fromWorkingColorSpace(Ni.copy(this),n);const i=Ni.r,o=Ni.g,u=Ni.b;return n!==Cr?`color(${n} ${i.toFixed(3)} ${o.toFixed(3)} ${u.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(o*255)},${Math.round(u*255)})`}offsetHSL(n,i,o){return this.getHSL(Ro),this.setHSL(Ro.h+n,Ro.s+i,Ro.l+o)}add(n){return this.r+=n.r,this.g+=n.g,this.b+=n.b,this}addColors(n,i){return this.r=n.r+i.r,this.g=n.g+i.g,this.b=n.b+i.b,this}addScalar(n){return this.r+=n,this.g+=n,this.b+=n,this}sub(n){return this.r=Math.max(0,this.r-n.r),this.g=Math.max(0,this.g-n.g),this.b=Math.max(0,this.b-n.b),this}multiply(n){return this.r*=n.r,this.g*=n.g,this.b*=n.b,this}multiplyScalar(n){return this.r*=n,this.g*=n,this.b*=n,this}lerp(n,i){return this.r+=(n.r-this.r)*i,this.g+=(n.g-this.g)*i,this.b+=(n.b-this.b)*i,this}lerpColors(n,i,o){return this.r=n.r+(i.r-n.r)*o,this.g=n.g+(i.g-n.g)*o,this.b=n.b+(i.b-n.b)*o,this}lerpHSL(n,i){this.getHSL(Ro),n.getHSL(Eh);const o=Zc(Ro.h,Eh.h,i),u=Zc(Ro.s,Eh.s,i),f=Zc(Ro.l,Eh.l,i);return this.setHSL(o,u,f),this}setFromVector3(n){return this.r=n.x,this.g=n.y,this.b=n.z,this}applyMatrix3(n){const i=this.r,o=this.g,u=this.b,f=n.elements;return this.r=f[0]*i+f[3]*o+f[6]*u,this.g=f[1]*i+f[4]*o+f[7]*u,this.b=f[2]*i+f[5]*o+f[8]*u,this}equals(n){return n.r===this.r&&n.g===this.g&&n.b===this.b}fromArray(n,i=0){return this.r=n[i],this.g=n[i+1],this.b=n[i+2],this}toArray(n=[],i=0){return n[i]=this.r,n[i+1]=this.g,n[i+2]=this.b,n}fromBufferAttribute(n,i){return this.r=n.getX(i),this.g=n.getY(i),this.b=n.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ni=new cn;cn.NAMES=xT;let RO=0;class af extends nu{static get type(){return"Material"}get type(){return this.constructor.type}set type(n){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:RO++}),this.uuid=iu(),this.name="",this.blending=Xl,this.side=Lo,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=O_,this.blendDst=F_,this.blendEquation=xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new cn(0,0,0),this.blendAlpha=0,this.depthFunc=ql,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nM,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Al,this.stencilZFail=Al,this.stencilZPass=Al,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(n){this._alphaTest>0!=n>0&&this.version++,this._alphaTest=n}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(n){if(n!==void 0)for(const i in n){const o=n[i];if(o===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const u=this[i];if(u===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}u&&u.isColor?u.set(o):u&&u.isVector3&&o&&o.isVector3?u.copy(o):this[i]=o}}toJSON(n){const i=n===void 0||typeof n=="string";i&&(n={textures:{},images:{}});const o={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.color&&this.color.isColor&&(o.color=this.color.getHex()),this.roughness!==void 0&&(o.roughness=this.roughness),this.metalness!==void 0&&(o.metalness=this.metalness),this.sheen!==void 0&&(o.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(o.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(o.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(o.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(o.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(o.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(o.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(o.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(o.shininess=this.shininess),this.clearcoat!==void 0&&(o.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(o.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(o.clearcoatMap=this.clearcoatMap.toJSON(n).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(o.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(n).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(o.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(n).uuid,o.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(o.dispersion=this.dispersion),this.iridescence!==void 0&&(o.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(o.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(o.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(o.iridescenceMap=this.iridescenceMap.toJSON(n).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(o.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(n).uuid),this.anisotropy!==void 0&&(o.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(o.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(o.anisotropyMap=this.anisotropyMap.toJSON(n).uuid),this.map&&this.map.isTexture&&(o.map=this.map.toJSON(n).uuid),this.matcap&&this.matcap.isTexture&&(o.matcap=this.matcap.toJSON(n).uuid),this.alphaMap&&this.alphaMap.isTexture&&(o.alphaMap=this.alphaMap.toJSON(n).uuid),this.lightMap&&this.lightMap.isTexture&&(o.lightMap=this.lightMap.toJSON(n).uuid,o.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(o.aoMap=this.aoMap.toJSON(n).uuid,o.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(o.bumpMap=this.bumpMap.toJSON(n).uuid,o.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(o.normalMap=this.normalMap.toJSON(n).uuid,o.normalMapType=this.normalMapType,o.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(o.displacementMap=this.displacementMap.toJSON(n).uuid,o.displacementScale=this.displacementScale,o.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(o.roughnessMap=this.roughnessMap.toJSON(n).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(o.metalnessMap=this.metalnessMap.toJSON(n).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(o.emissiveMap=this.emissiveMap.toJSON(n).uuid),this.specularMap&&this.specularMap.isTexture&&(o.specularMap=this.specularMap.toJSON(n).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(o.specularIntensityMap=this.specularIntensityMap.toJSON(n).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(o.specularColorMap=this.specularColorMap.toJSON(n).uuid),this.envMap&&this.envMap.isTexture&&(o.envMap=this.envMap.toJSON(n).uuid,this.combine!==void 0&&(o.combine=this.combine)),this.envMapRotation!==void 0&&(o.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(o.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(o.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(o.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(o.gradientMap=this.gradientMap.toJSON(n).uuid),this.transmission!==void 0&&(o.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(o.transmissionMap=this.transmissionMap.toJSON(n).uuid),this.thickness!==void 0&&(o.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(o.thicknessMap=this.thicknessMap.toJSON(n).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(o.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(o.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(o.size=this.size),this.shadowSide!==null&&(o.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(o.sizeAttenuation=this.sizeAttenuation),this.blending!==Xl&&(o.blending=this.blending),this.side!==Lo&&(o.side=this.side),this.vertexColors===!0&&(o.vertexColors=!0),this.opacity<1&&(o.opacity=this.opacity),this.transparent===!0&&(o.transparent=!0),this.blendSrc!==O_&&(o.blendSrc=this.blendSrc),this.blendDst!==F_&&(o.blendDst=this.blendDst),this.blendEquation!==xs&&(o.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(o.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(o.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(o.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(o.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(o.blendAlpha=this.blendAlpha),this.depthFunc!==ql&&(o.depthFunc=this.depthFunc),this.depthTest===!1&&(o.depthTest=this.depthTest),this.depthWrite===!1&&(o.depthWrite=this.depthWrite),this.colorWrite===!1&&(o.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(o.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nM&&(o.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(o.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(o.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Al&&(o.stencilFail=this.stencilFail),this.stencilZFail!==Al&&(o.stencilZFail=this.stencilZFail),this.stencilZPass!==Al&&(o.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(o.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(o.rotation=this.rotation),this.polygonOffset===!0&&(o.polygonOffset=!0),this.polygonOffsetFactor!==0&&(o.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(o.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(o.linewidth=this.linewidth),this.dashSize!==void 0&&(o.dashSize=this.dashSize),this.gapSize!==void 0&&(o.gapSize=this.gapSize),this.scale!==void 0&&(o.scale=this.scale),this.dithering===!0&&(o.dithering=!0),this.alphaTest>0&&(o.alphaTest=this.alphaTest),this.alphaHash===!0&&(o.alphaHash=!0),this.alphaToCoverage===!0&&(o.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(o.premultipliedAlpha=!0),this.forceSinglePass===!0&&(o.forceSinglePass=!0),this.wireframe===!0&&(o.wireframe=!0),this.wireframeLinewidth>1&&(o.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(o.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(o.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(o.flatShading=!0),this.visible===!1&&(o.visible=!1),this.toneMapped===!1&&(o.toneMapped=!1),this.fog===!1&&(o.fog=!1),Object.keys(this.userData).length>0&&(o.userData=this.userData);function u(f){const d=[];for(const p in f){const m=f[p];delete m.metadata,d.push(m)}return d}if(i){const f=u(n.textures),d=u(n.images);f.length>0&&(o.textures=f),d.length>0&&(o.images=d)}return o}clone(){return new this.constructor().copy(this)}copy(n){this.name=n.name,this.blending=n.blending,this.side=n.side,this.vertexColors=n.vertexColors,this.opacity=n.opacity,this.transparent=n.transparent,this.blendSrc=n.blendSrc,this.blendDst=n.blendDst,this.blendEquation=n.blendEquation,this.blendSrcAlpha=n.blendSrcAlpha,this.blendDstAlpha=n.blendDstAlpha,this.blendEquationAlpha=n.blendEquationAlpha,this.blendColor.copy(n.blendColor),this.blendAlpha=n.blendAlpha,this.depthFunc=n.depthFunc,this.depthTest=n.depthTest,this.depthWrite=n.depthWrite,this.stencilWriteMask=n.stencilWriteMask,this.stencilFunc=n.stencilFunc,this.stencilRef=n.stencilRef,this.stencilFuncMask=n.stencilFuncMask,this.stencilFail=n.stencilFail,this.stencilZFail=n.stencilZFail,this.stencilZPass=n.stencilZPass,this.stencilWrite=n.stencilWrite;const i=n.clippingPlanes;let o=null;if(i!==null){const u=i.length;o=new Array(u);for(let f=0;f!==u;++f)o[f]=i[f].clone()}return this.clippingPlanes=o,this.clipIntersection=n.clipIntersection,this.clipShadows=n.clipShadows,this.shadowSide=n.shadowSide,this.colorWrite=n.colorWrite,this.precision=n.precision,this.polygonOffset=n.polygonOffset,this.polygonOffsetFactor=n.polygonOffsetFactor,this.polygonOffsetUnits=n.polygonOffsetUnits,this.dithering=n.dithering,this.alphaTest=n.alphaTest,this.alphaHash=n.alphaHash,this.alphaToCoverage=n.alphaToCoverage,this.premultipliedAlpha=n.premultipliedAlpha,this.forceSinglePass=n.forceSinglePass,this.visible=n.visible,this.toneMapped=n.toneMapped,this.userData=JSON.parse(JSON.stringify(n.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(n){n===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Qc extends af{static get type(){return"MeshBasicMaterial"}constructor(n){super(),this.isMeshBasicMaterial=!0,this.color=new cn(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ha,this.combine=iT,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(n)}copy(n){return super.copy(n),this.color.copy(n.color),this.map=n.map,this.lightMap=n.lightMap,this.lightMapIntensity=n.lightMapIntensity,this.aoMap=n.aoMap,this.aoMapIntensity=n.aoMapIntensity,this.specularMap=n.specularMap,this.alphaMap=n.alphaMap,this.envMap=n.envMap,this.envMapRotation.copy(n.envMapRotation),this.combine=n.combine,this.reflectivity=n.reflectivity,this.refractionRatio=n.refractionRatio,this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this.wireframeLinecap=n.wireframeLinecap,this.wireframeLinejoin=n.wireframeLinejoin,this.fog=n.fog,this}}const Yn=new de,bh=new xn;class da{constructor(n,i,o=!1){if(Array.isArray(n))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=n,this.itemSize=i,this.count=n!==void 0?n.length/i:0,this.normalized=o,this.usage=iM,this.updateRanges=[],this.gpuType=Xa,this.version=0}onUploadCallback(){}set needsUpdate(n){n===!0&&this.version++}setUsage(n){return this.usage=n,this}addUpdateRange(n,i){this.updateRanges.push({start:n,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(n){return this.name=n.name,this.array=new n.array.constructor(n.array),this.itemSize=n.itemSize,this.count=n.count,this.normalized=n.normalized,this.usage=n.usage,this.gpuType=n.gpuType,this}copyAt(n,i,o){n*=this.itemSize,o*=i.itemSize;for(let u=0,f=this.itemSize;u<f;u++)this.array[n+u]=i.array[o+u];return this}copyArray(n){return this.array.set(n),this}applyMatrix3(n){if(this.itemSize===2)for(let i=0,o=this.count;i<o;i++)bh.fromBufferAttribute(this,i),bh.applyMatrix3(n),this.setXY(i,bh.x,bh.y);else if(this.itemSize===3)for(let i=0,o=this.count;i<o;i++)Yn.fromBufferAttribute(this,i),Yn.applyMatrix3(n),this.setXYZ(i,Yn.x,Yn.y,Yn.z);return this}applyMatrix4(n){for(let i=0,o=this.count;i<o;i++)Yn.fromBufferAttribute(this,i),Yn.applyMatrix4(n),this.setXYZ(i,Yn.x,Yn.y,Yn.z);return this}applyNormalMatrix(n){for(let i=0,o=this.count;i<o;i++)Yn.fromBufferAttribute(this,i),Yn.applyNormalMatrix(n),this.setXYZ(i,Yn.x,Yn.y,Yn.z);return this}transformDirection(n){for(let i=0,o=this.count;i<o;i++)Yn.fromBufferAttribute(this,i),Yn.transformDirection(n),this.setXYZ(i,Yn.x,Yn.y,Yn.z);return this}set(n,i=0){return this.array.set(n,i),this}getComponent(n,i){let o=this.array[n*this.itemSize+i];return this.normalized&&(o=Vl(o,this.array)),o}setComponent(n,i,o){return this.normalized&&(o=Xi(o,this.array)),this.array[n*this.itemSize+i]=o,this}getX(n){let i=this.array[n*this.itemSize];return this.normalized&&(i=Vl(i,this.array)),i}setX(n,i){return this.normalized&&(i=Xi(i,this.array)),this.array[n*this.itemSize]=i,this}getY(n){let i=this.array[n*this.itemSize+1];return this.normalized&&(i=Vl(i,this.array)),i}setY(n,i){return this.normalized&&(i=Xi(i,this.array)),this.array[n*this.itemSize+1]=i,this}getZ(n){let i=this.array[n*this.itemSize+2];return this.normalized&&(i=Vl(i,this.array)),i}setZ(n,i){return this.normalized&&(i=Xi(i,this.array)),this.array[n*this.itemSize+2]=i,this}getW(n){let i=this.array[n*this.itemSize+3];return this.normalized&&(i=Vl(i,this.array)),i}setW(n,i){return this.normalized&&(i=Xi(i,this.array)),this.array[n*this.itemSize+3]=i,this}setXY(n,i,o){return n*=this.itemSize,this.normalized&&(i=Xi(i,this.array),o=Xi(o,this.array)),this.array[n+0]=i,this.array[n+1]=o,this}setXYZ(n,i,o,u){return n*=this.itemSize,this.normalized&&(i=Xi(i,this.array),o=Xi(o,this.array),u=Xi(u,this.array)),this.array[n+0]=i,this.array[n+1]=o,this.array[n+2]=u,this}setXYZW(n,i,o,u,f){return n*=this.itemSize,this.normalized&&(i=Xi(i,this.array),o=Xi(o,this.array),u=Xi(u,this.array),f=Xi(f,this.array)),this.array[n+0]=i,this.array[n+1]=o,this.array[n+2]=u,this.array[n+3]=f,this}onUpload(n){return this.onUploadCallback=n,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const n={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(n.name=this.name),this.usage!==iM&&(n.usage=this.usage),n}}class ET extends da{constructor(n,i,o){super(new Uint16Array(n),i,o)}}class bT extends da{constructor(n,i,o){super(new Uint32Array(n),i,o)}}class Ts extends da{constructor(n,i,o){super(new Float32Array(n),i,o)}}let CO=0;const Rr=new Fn,M_=new Pi,zl=new de,vr=new rf,Xc=new rf,hi=new de;class As extends nu{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:CO++}),this.uuid=iu(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(n){return Array.isArray(n)?this.index=new(gT(n)?bT:ET)(n,1):this.index=n,this}setIndirect(n){return this.indirect=n,this}getIndirect(){return this.indirect}getAttribute(n){return this.attributes[n]}setAttribute(n,i){return this.attributes[n]=i,this}deleteAttribute(n){return delete this.attributes[n],this}hasAttribute(n){return this.attributes[n]!==void 0}addGroup(n,i,o=0){this.groups.push({start:n,count:i,materialIndex:o})}clearGroups(){this.groups=[]}setDrawRange(n,i){this.drawRange.start=n,this.drawRange.count=i}applyMatrix4(n){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(n),i.needsUpdate=!0);const o=this.attributes.normal;if(o!==void 0){const f=new Vt().getNormalMatrix(n);o.applyNormalMatrix(f),o.needsUpdate=!0}const u=this.attributes.tangent;return u!==void 0&&(u.transformDirection(n),u.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(n){return Rr.makeRotationFromQuaternion(n),this.applyMatrix4(Rr),this}rotateX(n){return Rr.makeRotationX(n),this.applyMatrix4(Rr),this}rotateY(n){return Rr.makeRotationY(n),this.applyMatrix4(Rr),this}rotateZ(n){return Rr.makeRotationZ(n),this.applyMatrix4(Rr),this}translate(n,i,o){return Rr.makeTranslation(n,i,o),this.applyMatrix4(Rr),this}scale(n,i,o){return Rr.makeScale(n,i,o),this.applyMatrix4(Rr),this}lookAt(n){return M_.lookAt(n),M_.updateMatrix(),this.applyMatrix4(M_.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zl).negate(),this.translate(zl.x,zl.y,zl.z),this}setFromPoints(n){const i=this.getAttribute("position");if(i===void 0){const o=[];for(let u=0,f=n.length;u<f;u++){const d=n[u];o.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Ts(o,3))}else{for(let o=0,u=i.count;o<u;o++){const f=n[o];i.setXYZ(o,f.x,f.y,f.z||0)}n.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rf);const n=this.attributes.position,i=this.morphAttributes.position;if(n&&n.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new de(-1/0,-1/0,-1/0),new de(1/0,1/0,1/0));return}if(n!==void 0){if(this.boundingBox.setFromBufferAttribute(n),i)for(let o=0,u=i.length;o<u;o++){const f=i[o];vr.setFromBufferAttribute(f),this.morphTargetsRelative?(hi.addVectors(this.boundingBox.min,vr.min),this.boundingBox.expandByPoint(hi),hi.addVectors(this.boundingBox.max,vr.max),this.boundingBox.expandByPoint(hi)):(this.boundingBox.expandByPoint(vr.min),this.boundingBox.expandByPoint(vr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ly);const n=this.attributes.position,i=this.morphAttributes.position;if(n&&n.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new de,1/0);return}if(n){const o=this.boundingSphere.center;if(vr.setFromBufferAttribute(n),i)for(let f=0,d=i.length;f<d;f++){const p=i[f];Xc.setFromBufferAttribute(p),this.morphTargetsRelative?(hi.addVectors(vr.min,Xc.min),vr.expandByPoint(hi),hi.addVectors(vr.max,Xc.max),vr.expandByPoint(hi)):(vr.expandByPoint(Xc.min),vr.expandByPoint(Xc.max))}vr.getCenter(o);let u=0;for(let f=0,d=n.count;f<d;f++)hi.fromBufferAttribute(n,f),u=Math.max(u,o.distanceToSquared(hi));if(i)for(let f=0,d=i.length;f<d;f++){const p=i[f],m=this.morphTargetsRelative;for(let v=0,S=p.count;v<S;v++)hi.fromBufferAttribute(p,v),m&&(zl.fromBufferAttribute(n,v),hi.add(zl)),u=Math.max(u,o.distanceToSquared(hi))}this.boundingSphere.radius=Math.sqrt(u),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const n=this.index,i=this.attributes;if(n===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const o=i.position,u=i.normal,f=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new da(new Float32Array(4*o.count),4));const d=this.getAttribute("tangent"),p=[],m=[];for(let Z=0;Z<o.count;Z++)p[Z]=new de,m[Z]=new de;const v=new de,S=new de,y=new de,x=new xn,b=new xn,C=new xn,L=new de,M=new de;function _(Z,N,D){v.fromBufferAttribute(o,Z),S.fromBufferAttribute(o,N),y.fromBufferAttribute(o,D),x.fromBufferAttribute(f,Z),b.fromBufferAttribute(f,N),C.fromBufferAttribute(f,D),S.sub(v),y.sub(v),b.sub(x),C.sub(x);const V=1/(b.x*C.y-C.x*b.y);isFinite(V)&&(L.copy(S).multiplyScalar(C.y).addScaledVector(y,-b.y).multiplyScalar(V),M.copy(y).multiplyScalar(b.x).addScaledVector(S,-C.x).multiplyScalar(V),p[Z].add(L),p[N].add(L),p[D].add(L),m[Z].add(M),m[N].add(M),m[D].add(M))}let F=this.groups;F.length===0&&(F=[{start:0,count:n.count}]);for(let Z=0,N=F.length;Z<N;++Z){const D=F[Z],V=D.start,he=D.count;for(let K=V,Se=V+he;K<Se;K+=3)_(n.getX(K+0),n.getX(K+1),n.getX(K+2))}const I=new de,P=new de,$=new de,G=new de;function z(Z){$.fromBufferAttribute(u,Z),G.copy($);const N=p[Z];I.copy(N),I.sub($.multiplyScalar($.dot(N))).normalize(),P.crossVectors(G,N);const V=P.dot(m[Z])<0?-1:1;d.setXYZW(Z,I.x,I.y,I.z,V)}for(let Z=0,N=F.length;Z<N;++Z){const D=F[Z],V=D.start,he=D.count;for(let K=V,Se=V+he;K<Se;K+=3)z(n.getX(K+0)),z(n.getX(K+1)),z(n.getX(K+2))}}computeVertexNormals(){const n=this.index,i=this.getAttribute("position");if(i!==void 0){let o=this.getAttribute("normal");if(o===void 0)o=new da(new Float32Array(i.count*3),3),this.setAttribute("normal",o);else for(let x=0,b=o.count;x<b;x++)o.setXYZ(x,0,0,0);const u=new de,f=new de,d=new de,p=new de,m=new de,v=new de,S=new de,y=new de;if(n)for(let x=0,b=n.count;x<b;x+=3){const C=n.getX(x+0),L=n.getX(x+1),M=n.getX(x+2);u.fromBufferAttribute(i,C),f.fromBufferAttribute(i,L),d.fromBufferAttribute(i,M),S.subVectors(d,f),y.subVectors(u,f),S.cross(y),p.fromBufferAttribute(o,C),m.fromBufferAttribute(o,L),v.fromBufferAttribute(o,M),p.add(S),m.add(S),v.add(S),o.setXYZ(C,p.x,p.y,p.z),o.setXYZ(L,m.x,m.y,m.z),o.setXYZ(M,v.x,v.y,v.z)}else for(let x=0,b=i.count;x<b;x+=3)u.fromBufferAttribute(i,x+0),f.fromBufferAttribute(i,x+1),d.fromBufferAttribute(i,x+2),S.subVectors(d,f),y.subVectors(u,f),S.cross(y),o.setXYZ(x+0,S.x,S.y,S.z),o.setXYZ(x+1,S.x,S.y,S.z),o.setXYZ(x+2,S.x,S.y,S.z);this.normalizeNormals(),o.needsUpdate=!0}}normalizeNormals(){const n=this.attributes.normal;for(let i=0,o=n.count;i<o;i++)hi.fromBufferAttribute(n,i),hi.normalize(),n.setXYZ(i,hi.x,hi.y,hi.z)}toNonIndexed(){function n(p,m){const v=p.array,S=p.itemSize,y=p.normalized,x=new v.constructor(m.length*S);let b=0,C=0;for(let L=0,M=m.length;L<M;L++){p.isInterleavedBufferAttribute?b=m[L]*p.data.stride+p.offset:b=m[L]*S;for(let _=0;_<S;_++)x[C++]=v[b++]}return new da(x,S,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new As,o=this.index.array,u=this.attributes;for(const p in u){const m=u[p],v=n(m,o);i.setAttribute(p,v)}const f=this.morphAttributes;for(const p in f){const m=[],v=f[p];for(let S=0,y=v.length;S<y;S++){const x=v[S],b=n(x,o);m.push(b)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let p=0,m=d.length;p<m;p++){const v=d[p];i.addGroup(v.start,v.count,v.materialIndex)}return i}toJSON(){const n={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),Object.keys(this.userData).length>0&&(n.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const v in m)m[v]!==void 0&&(n[v]=m[v]);return n}n.data={attributes:{}};const i=this.index;i!==null&&(n.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const o=this.attributes;for(const m in o){const v=o[m];n.data.attributes[m]=v.toJSON(n.data)}const u={};let f=!1;for(const m in this.morphAttributes){const v=this.morphAttributes[m],S=[];for(let y=0,x=v.length;y<x;y++){const b=v[y];S.push(b.toJSON(n.data))}S.length>0&&(u[m]=S,f=!0)}f&&(n.data.morphAttributes=u,n.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(n.data.groups=JSON.parse(JSON.stringify(d)));const p=this.boundingSphere;return p!==null&&(n.data.boundingSphere={center:p.center.toArray(),radius:p.radius}),n}clone(){return new this.constructor().copy(this)}copy(n){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=n.name;const o=n.index;o!==null&&this.setIndex(o.clone(i));const u=n.attributes;for(const v in u){const S=u[v];this.setAttribute(v,S.clone(i))}const f=n.morphAttributes;for(const v in f){const S=[],y=f[v];for(let x=0,b=y.length;x<b;x++)S.push(y[x].clone(i));this.morphAttributes[v]=S}this.morphTargetsRelative=n.morphTargetsRelative;const d=n.groups;for(let v=0,S=d.length;v<S;v++){const y=d[v];this.addGroup(y.start,y.count,y.materialIndex)}const p=n.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=n.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=n.drawRange.start,this.drawRange.count=n.drawRange.count,this.userData=n.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xM=new Fn,ps=new yO,Mh=new Ly,EM=new de,Th=new de,Rh=new de,Ch=new de,T_=new de,Ah=new de,bM=new de,wh=new de;class Hn extends Pi{constructor(n=new As,i=new Qc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=n,this.material=i,this.updateMorphTargets()}copy(n,i){return super.copy(n,i),n.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=n.morphTargetInfluences.slice()),n.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},n.morphTargetDictionary)),this.material=Array.isArray(n.material)?n.material.slice():n.material,this.geometry=n.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,o=Object.keys(i);if(o.length>0){const u=i[o[0]];if(u!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,d=u.length;f<d;f++){const p=u[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=f}}}}getVertexPosition(n,i){const o=this.geometry,u=o.attributes.position,f=o.morphAttributes.position,d=o.morphTargetsRelative;i.fromBufferAttribute(u,n);const p=this.morphTargetInfluences;if(f&&p){Ah.set(0,0,0);for(let m=0,v=f.length;m<v;m++){const S=p[m],y=f[m];S!==0&&(T_.fromBufferAttribute(y,n),d?Ah.addScaledVector(T_,S):Ah.addScaledVector(T_.sub(i),S))}i.add(Ah)}return i}raycast(n,i){const o=this.geometry,u=this.material,f=this.matrixWorld;u!==void 0&&(o.boundingSphere===null&&o.computeBoundingSphere(),Mh.copy(o.boundingSphere),Mh.applyMatrix4(f),ps.copy(n.ray).recast(n.near),!(Mh.containsPoint(ps.origin)===!1&&(ps.intersectSphere(Mh,EM)===null||ps.origin.distanceToSquared(EM)>(n.far-n.near)**2))&&(xM.copy(f).invert(),ps.copy(n.ray).applyMatrix4(xM),!(o.boundingBox!==null&&ps.intersectsBox(o.boundingBox)===!1)&&this._computeIntersections(n,i,ps)))}_computeIntersections(n,i,o){let u;const f=this.geometry,d=this.material,p=f.index,m=f.attributes.position,v=f.attributes.uv,S=f.attributes.uv1,y=f.attributes.normal,x=f.groups,b=f.drawRange;if(p!==null)if(Array.isArray(d))for(let C=0,L=x.length;C<L;C++){const M=x[C],_=d[M.materialIndex],F=Math.max(M.start,b.start),I=Math.min(p.count,Math.min(M.start+M.count,b.start+b.count));for(let P=F,$=I;P<$;P+=3){const G=p.getX(P),z=p.getX(P+1),Z=p.getX(P+2);u=Dh(this,_,n,o,v,S,y,G,z,Z),u&&(u.faceIndex=Math.floor(P/3),u.face.materialIndex=M.materialIndex,i.push(u))}}else{const C=Math.max(0,b.start),L=Math.min(p.count,b.start+b.count);for(let M=C,_=L;M<_;M+=3){const F=p.getX(M),I=p.getX(M+1),P=p.getX(M+2);u=Dh(this,d,n,o,v,S,y,F,I,P),u&&(u.faceIndex=Math.floor(M/3),i.push(u))}}else if(m!==void 0)if(Array.isArray(d))for(let C=0,L=x.length;C<L;C++){const M=x[C],_=d[M.materialIndex],F=Math.max(M.start,b.start),I=Math.min(m.count,Math.min(M.start+M.count,b.start+b.count));for(let P=F,$=I;P<$;P+=3){const G=P,z=P+1,Z=P+2;u=Dh(this,_,n,o,v,S,y,G,z,Z),u&&(u.faceIndex=Math.floor(P/3),u.face.materialIndex=M.materialIndex,i.push(u))}}else{const C=Math.max(0,b.start),L=Math.min(m.count,b.start+b.count);for(let M=C,_=L;M<_;M+=3){const F=M,I=M+1,P=M+2;u=Dh(this,d,n,o,v,S,y,F,I,P),u&&(u.faceIndex=Math.floor(M/3),i.push(u))}}}}function AO(s,n,i,o,u,f,d,p){let m;if(n.side===rr?m=o.intersectTriangle(d,f,u,!0,p):m=o.intersectTriangle(u,f,d,n.side===Lo,p),m===null)return null;wh.copy(p),wh.applyMatrix4(s.matrixWorld);const v=i.ray.origin.distanceTo(wh);return v<i.near||v>i.far?null:{distance:v,point:wh.clone(),object:s}}function Dh(s,n,i,o,u,f,d,p,m,v){s.getVertexPosition(p,Th),s.getVertexPosition(m,Rh),s.getVertexPosition(v,Ch);const S=AO(s,n,i,o,Th,Rh,Ch,bM);if(S){const y=new de;qr.getBarycoord(bM,Th,Rh,Ch,y),u&&(S.uv=qr.getInterpolatedAttribute(u,p,m,v,y,new xn)),f&&(S.uv1=qr.getInterpolatedAttribute(f,p,m,v,y,new xn)),d&&(S.normal=qr.getInterpolatedAttribute(d,p,m,v,y,new de),S.normal.dot(o.direction)>0&&S.normal.multiplyScalar(-1));const x={a:p,b:m,c:v,normal:new de,materialIndex:0};qr.getNormal(Th,Rh,Ch,x.normal),S.face=x,S.barycoord=y}return S}class Ar extends As{constructor(n=1,i=1,o=1,u=1,f=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:n,height:i,depth:o,widthSegments:u,heightSegments:f,depthSegments:d};const p=this;u=Math.floor(u),f=Math.floor(f),d=Math.floor(d);const m=[],v=[],S=[],y=[];let x=0,b=0;C("z","y","x",-1,-1,o,i,n,d,f,0),C("z","y","x",1,-1,o,i,-n,d,f,1),C("x","z","y",1,1,n,o,i,u,d,2),C("x","z","y",1,-1,n,o,-i,u,d,3),C("x","y","z",1,-1,n,i,o,u,f,4),C("x","y","z",-1,-1,n,i,-o,u,f,5),this.setIndex(m),this.setAttribute("position",new Ts(v,3)),this.setAttribute("normal",new Ts(S,3)),this.setAttribute("uv",new Ts(y,2));function C(L,M,_,F,I,P,$,G,z,Z,N){const D=P/z,V=$/Z,he=P/2,K=$/2,Se=G/2,ye=z+1,ce=Z+1;let fe=0,le=0;const Fe=new de;for(let Ge=0;Ge<ce;Ge++){const tt=Ge*V-K;for(let ft=0;ft<ye;ft++){const Ht=ft*D-he;Fe[L]=Ht*F,Fe[M]=tt*I,Fe[_]=Se,v.push(Fe.x,Fe.y,Fe.z),Fe[L]=0,Fe[M]=0,Fe[_]=G>0?1:-1,S.push(Fe.x,Fe.y,Fe.z),y.push(ft/z),y.push(1-Ge/Z),fe+=1}}for(let Ge=0;Ge<Z;Ge++)for(let tt=0;tt<z;tt++){const ft=x+tt+ye*Ge,Ht=x+tt+ye*(Ge+1),me=x+(tt+1)+ye*(Ge+1),De=x+(tt+1)+ye*Ge;m.push(ft,Ht,De),m.push(Ht,me,De),le+=6}p.addGroup(b,le,N),b+=le,x+=fe}}copy(n){return super.copy(n),this.parameters=Object.assign({},n.parameters),this}static fromJSON(n){return new Ar(n.width,n.height,n.depth,n.widthSegments,n.heightSegments,n.depthSegments)}}function Jl(s){const n={};for(const i in s){n[i]={};for(const o in s[i]){const u=s[i][o];u&&(u.isColor||u.isMatrix3||u.isMatrix4||u.isVector2||u.isVector3||u.isVector4||u.isTexture||u.isQuaternion)?u.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),n[i][o]=null):n[i][o]=u.clone():Array.isArray(u)?n[i][o]=u.slice():n[i][o]=u}}return n}function ji(s){const n={};for(let i=0;i<s.length;i++){const o=Jl(s[i]);for(const u in o)n[u]=o[u]}return n}function wO(s){const n=[];for(let i=0;i<s.length;i++)n.push(s[i].clone());return n}function MT(s){const n=s.getRenderTarget();return n===null?s.outputColorSpace:n.isXRRenderTarget===!0?n.texture.colorSpace:un.workingColorSpace}const DO={clone:Jl,merge:ji};var LO=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,UO=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Uo extends af{static get type(){return"ShaderMaterial"}constructor(n){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=LO,this.fragmentShader=UO,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,n!==void 0&&this.setValues(n)}copy(n){return super.copy(n),this.fragmentShader=n.fragmentShader,this.vertexShader=n.vertexShader,this.uniforms=Jl(n.uniforms),this.uniformsGroups=wO(n.uniformsGroups),this.defines=Object.assign({},n.defines),this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this.fog=n.fog,this.lights=n.lights,this.clipping=n.clipping,this.extensions=Object.assign({},n.extensions),this.glslVersion=n.glslVersion,this}toJSON(n){const i=super.toJSON(n);i.glslVersion=this.glslVersion,i.uniforms={};for(const u in this.uniforms){const d=this.uniforms[u].value;d&&d.isTexture?i.uniforms[u]={type:"t",value:d.toJSON(n).uuid}:d&&d.isColor?i.uniforms[u]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[u]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[u]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[u]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[u]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[u]={type:"m4",value:d.toArray()}:i.uniforms[u]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const o={};for(const u in this.extensions)this.extensions[u]===!0&&(o[u]=!0);return Object.keys(o).length>0&&(i.extensions=o),i}}class TT extends Pi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fn,this.projectionMatrix=new Fn,this.projectionMatrixInverse=new Fn,this.coordinateSystem=ja}copy(n,i){return super.copy(n,i),this.matrixWorldInverse.copy(n.matrixWorldInverse),this.projectionMatrix.copy(n.projectionMatrix),this.projectionMatrixInverse.copy(n.projectionMatrixInverse),this.coordinateSystem=n.coordinateSystem,this}getWorldDirection(n){return super.getWorldDirection(n).negate()}updateMatrixWorld(n){super.updateMatrixWorld(n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(n,i){super.updateWorldMatrix(n,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Co=new de,MM=new xn,TM=new xn;class wr extends TT{constructor(n=50,i=1,o=.1,u=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=n,this.zoom=1,this.near=o,this.far=u,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(n,i){return super.copy(n,i),this.fov=n.fov,this.zoom=n.zoom,this.near=n.near,this.far=n.far,this.focus=n.focus,this.aspect=n.aspect,this.view=n.view===null?null:Object.assign({},n.view),this.filmGauge=n.filmGauge,this.filmOffset=n.filmOffset,this}setFocalLength(n){const i=.5*this.getFilmHeight()/n;this.fov=ef*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const n=Math.tan(Kc*.5*this.fov);return .5*this.getFilmHeight()/n}getEffectiveFOV(){return ef*2*Math.atan(Math.tan(Kc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(n,i,o){Co.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Co.x,Co.y).multiplyScalar(-n/Co.z),Co.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),o.set(Co.x,Co.y).multiplyScalar(-n/Co.z)}getViewSize(n,i){return this.getViewBounds(n,MM,TM),i.subVectors(TM,MM)}setViewOffset(n,i,o,u,f,d){this.aspect=n/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=n,this.view.fullHeight=i,this.view.offsetX=o,this.view.offsetY=u,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const n=this.near;let i=n*Math.tan(Kc*.5*this.fov)/this.zoom,o=2*i,u=this.aspect*o,f=-.5*u;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,v=d.fullHeight;f+=d.offsetX*u/m,i-=d.offsetY*o/v,u*=d.width/m,o*=d.height/v}const p=this.filmOffset;p!==0&&(f+=n*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+u,i,i-o,n,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(n){const i=super.toJSON(n);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Bl=-90,kl=1;class NO extends Pi{constructor(n,i,o){super(),this.type="CubeCamera",this.renderTarget=o,this.coordinateSystem=null,this.activeMipmapLevel=0;const u=new wr(Bl,kl,n,i);u.layers=this.layers,this.add(u);const f=new wr(Bl,kl,n,i);f.layers=this.layers,this.add(f);const d=new wr(Bl,kl,n,i);d.layers=this.layers,this.add(d);const p=new wr(Bl,kl,n,i);p.layers=this.layers,this.add(p);const m=new wr(Bl,kl,n,i);m.layers=this.layers,this.add(m);const v=new wr(Bl,kl,n,i);v.layers=this.layers,this.add(v)}updateCoordinateSystem(){const n=this.coordinateSystem,i=this.children.concat(),[o,u,f,d,p,m]=i;for(const v of i)this.remove(v);if(n===ja)o.up.set(0,1,0),o.lookAt(1,0,0),u.up.set(0,1,0),u.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(n===Gh)o.up.set(0,-1,0),o.lookAt(-1,0,0),u.up.set(0,-1,0),u.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+n);for(const v of i)this.add(v),v.updateMatrixWorld()}update(n,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:o,activeMipmapLevel:u}=this;this.coordinateSystem!==n.coordinateSystem&&(this.coordinateSystem=n.coordinateSystem,this.updateCoordinateSystem());const[f,d,p,m,v,S]=this.children,y=n.getRenderTarget(),x=n.getActiveCubeFace(),b=n.getActiveMipmapLevel(),C=n.xr.enabled;n.xr.enabled=!1;const L=o.texture.generateMipmaps;o.texture.generateMipmaps=!1,n.setRenderTarget(o,0,u),n.render(i,f),n.setRenderTarget(o,1,u),n.render(i,d),n.setRenderTarget(o,2,u),n.render(i,p),n.setRenderTarget(o,3,u),n.render(i,m),n.setRenderTarget(o,4,u),n.render(i,v),o.texture.generateMipmaps=L,n.setRenderTarget(o,5,u),n.render(i,S),n.setRenderTarget(y,x,b),n.xr.enabled=C,o.texture.needsPMREMUpdate=!0}}class RT extends ar{constructor(n,i,o,u,f,d,p,m,v,S){n=n!==void 0?n:[],i=i!==void 0?i:$l,super(n,i,o,u,f,d,p,m,v,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(n){this.image=n}}class PO extends Cs{constructor(n=1,i={}){super(n,n,i),this.isWebGLCubeRenderTarget=!0;const o={width:n,height:n,depth:1},u=[o,o,o,o,o,o];this.texture=new RT(u,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:fa}fromEquirectangularTexture(n,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const o={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},u=new Ar(5,5,5),f=new Uo({name:"CubemapFromEquirect",uniforms:Jl(o.uniforms),vertexShader:o.vertexShader,fragmentShader:o.fragmentShader,side:rr,blending:wo});f.uniforms.tEquirect.value=i;const d=new Hn(u,f),p=i.minFilter;return i.minFilter===Ms&&(i.minFilter=fa),new NO(1,10,this).update(n,d),i.minFilter=p,d.geometry.dispose(),d.material.dispose(),this}clear(n,i,o,u){const f=n.getRenderTarget();for(let d=0;d<6;d++)n.setRenderTarget(this,d),n.clear(i,o,u);n.setRenderTarget(f)}}const R_=new de,OO=new de,FO=new Vt;class ys{constructor(n=new de(1,0,0),i=0){this.isPlane=!0,this.normal=n,this.constant=i}set(n,i){return this.normal.copy(n),this.constant=i,this}setComponents(n,i,o,u){return this.normal.set(n,i,o),this.constant=u,this}setFromNormalAndCoplanarPoint(n,i){return this.normal.copy(n),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(n,i,o){const u=R_.subVectors(o,i).cross(OO.subVectors(n,i)).normalize();return this.setFromNormalAndCoplanarPoint(u,n),this}copy(n){return this.normal.copy(n.normal),this.constant=n.constant,this}normalize(){const n=1/this.normal.length();return this.normal.multiplyScalar(n),this.constant*=n,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(n){return this.normal.dot(n)+this.constant}distanceToSphere(n){return this.distanceToPoint(n.center)-n.radius}projectPoint(n,i){return i.copy(n).addScaledVector(this.normal,-this.distanceToPoint(n))}intersectLine(n,i){const o=n.delta(R_),u=this.normal.dot(o);if(u===0)return this.distanceToPoint(n.start)===0?i.copy(n.start):null;const f=-(n.start.dot(this.normal)+this.constant)/u;return f<0||f>1?null:i.copy(n.start).addScaledVector(o,f)}intersectsLine(n){const i=this.distanceToPoint(n.start),o=this.distanceToPoint(n.end);return i<0&&o>0||o<0&&i>0}intersectsBox(n){return n.intersectsPlane(this)}intersectsSphere(n){return n.intersectsPlane(this)}coplanarPoint(n){return n.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(n,i){const o=i||FO.getNormalMatrix(n),u=this.coplanarPoint(R_).applyMatrix4(n),f=this.normal.applyMatrix3(o).normalize();return this.constant=-u.dot(f),this}translate(n){return this.constant-=n.dot(this.normal),this}equals(n){return n.normal.equals(this.normal)&&n.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ms=new Ly,Lh=new de;class Uy{constructor(n=new ys,i=new ys,o=new ys,u=new ys,f=new ys,d=new ys){this.planes=[n,i,o,u,f,d]}set(n,i,o,u,f,d){const p=this.planes;return p[0].copy(n),p[1].copy(i),p[2].copy(o),p[3].copy(u),p[4].copy(f),p[5].copy(d),this}copy(n){const i=this.planes;for(let o=0;o<6;o++)i[o].copy(n.planes[o]);return this}setFromProjectionMatrix(n,i=ja){const o=this.planes,u=n.elements,f=u[0],d=u[1],p=u[2],m=u[3],v=u[4],S=u[5],y=u[6],x=u[7],b=u[8],C=u[9],L=u[10],M=u[11],_=u[12],F=u[13],I=u[14],P=u[15];if(o[0].setComponents(m-f,x-v,M-b,P-_).normalize(),o[1].setComponents(m+f,x+v,M+b,P+_).normalize(),o[2].setComponents(m+d,x+S,M+C,P+F).normalize(),o[3].setComponents(m-d,x-S,M-C,P-F).normalize(),o[4].setComponents(m-p,x-y,M-L,P-I).normalize(),i===ja)o[5].setComponents(m+p,x+y,M+L,P+I).normalize();else if(i===Gh)o[5].setComponents(p,y,L,I).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(n){if(n.boundingSphere!==void 0)n.boundingSphere===null&&n.computeBoundingSphere(),ms.copy(n.boundingSphere).applyMatrix4(n.matrixWorld);else{const i=n.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ms.copy(i.boundingSphere).applyMatrix4(n.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(n){return ms.center.set(0,0,0),ms.radius=.7071067811865476,ms.applyMatrix4(n.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(n){const i=this.planes,o=n.center,u=-n.radius;for(let f=0;f<6;f++)if(i[f].distanceToPoint(o)<u)return!1;return!0}intersectsBox(n){const i=this.planes;for(let o=0;o<6;o++){const u=i[o];if(Lh.x=u.normal.x>0?n.max.x:n.min.x,Lh.y=u.normal.y>0?n.max.y:n.min.y,Lh.z=u.normal.z>0?n.max.z:n.min.z,u.distanceToPoint(Lh)<0)return!1}return!0}containsPoint(n){const i=this.planes;for(let o=0;o<6;o++)if(i[o].distanceToPoint(n)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function CT(){let s=null,n=!1,i=null,o=null;function u(f,d){i(f,d),o=s.requestAnimationFrame(u)}return{start:function(){n!==!0&&i!==null&&(o=s.requestAnimationFrame(u),n=!0)},stop:function(){s.cancelAnimationFrame(o),n=!1},setAnimationLoop:function(f){i=f},setContext:function(f){s=f}}}function IO(s){const n=new WeakMap;function i(p,m){const v=p.array,S=p.usage,y=v.byteLength,x=s.createBuffer();s.bindBuffer(m,x),s.bufferData(m,v,S),p.onUploadCallback();let b;if(v instanceof Float32Array)b=s.FLOAT;else if(v instanceof Uint16Array)p.isFloat16BufferAttribute?b=s.HALF_FLOAT:b=s.UNSIGNED_SHORT;else if(v instanceof Int16Array)b=s.SHORT;else if(v instanceof Uint32Array)b=s.UNSIGNED_INT;else if(v instanceof Int32Array)b=s.INT;else if(v instanceof Int8Array)b=s.BYTE;else if(v instanceof Uint8Array)b=s.UNSIGNED_BYTE;else if(v instanceof Uint8ClampedArray)b=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+v);return{buffer:x,type:b,bytesPerElement:v.BYTES_PER_ELEMENT,version:p.version,size:y}}function o(p,m,v){const S=m.array,y=m.updateRanges;if(s.bindBuffer(v,p),y.length===0)s.bufferSubData(v,0,S);else{y.sort((b,C)=>b.start-C.start);let x=0;for(let b=1;b<y.length;b++){const C=y[x],L=y[b];L.start<=C.start+C.count+1?C.count=Math.max(C.count,L.start+L.count-C.start):(++x,y[x]=L)}y.length=x+1;for(let b=0,C=y.length;b<C;b++){const L=y[b];s.bufferSubData(v,L.start*S.BYTES_PER_ELEMENT,S,L.start,L.count)}m.clearUpdateRanges()}m.onUploadCallback()}function u(p){return p.isInterleavedBufferAttribute&&(p=p.data),n.get(p)}function f(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=n.get(p);m&&(s.deleteBuffer(m.buffer),n.delete(p))}function d(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const S=n.get(p);(!S||S.version<p.version)&&n.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const v=n.get(p);if(v===void 0)n.set(p,i(p,m));else if(v.version<p.version){if(v.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");o(v.buffer,p,m),v.version=p.version}}return{get:u,remove:f,update:d}}class eu extends As{constructor(n=1,i=1,o=1,u=1){super(),this.type="PlaneGeometry",this.parameters={width:n,height:i,widthSegments:o,heightSegments:u};const f=n/2,d=i/2,p=Math.floor(o),m=Math.floor(u),v=p+1,S=m+1,y=n/p,x=i/m,b=[],C=[],L=[],M=[];for(let _=0;_<S;_++){const F=_*x-d;for(let I=0;I<v;I++){const P=I*y-f;C.push(P,-F,0),L.push(0,0,1),M.push(I/p),M.push(1-_/m)}}for(let _=0;_<m;_++)for(let F=0;F<p;F++){const I=F+v*_,P=F+v*(_+1),$=F+1+v*(_+1),G=F+1+v*_;b.push(I,P,G),b.push(P,$,G)}this.setIndex(b),this.setAttribute("position",new Ts(C,3)),this.setAttribute("normal",new Ts(L,3)),this.setAttribute("uv",new Ts(M,2))}copy(n){return super.copy(n),this.parameters=Object.assign({},n.parameters),this}static fromJSON(n){return new eu(n.width,n.height,n.widthSegments,n.heightSegments)}}var zO=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,BO=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,kO=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,HO=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,VO=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,GO=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,WO=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,XO=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jO=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,YO=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qO=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$O=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,KO=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ZO=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,QO=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,JO=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,eF=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tF=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nF=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iF=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rF=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,aF=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,oF=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,sF=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,lF=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,uF=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,cF=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fF=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dF=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hF=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pF="gl_FragColor = linearToOutputTexel( gl_FragColor );",mF=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vF=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,gF=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_F=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,yF=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,SF=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xF=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,EF=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bF=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,MF=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,TF=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,RF=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,CF=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,AF=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wF=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,DF=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,LF=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,UF=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,NF=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,PF=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,OF=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,FF=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,IF=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zF=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,BF=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kF=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,HF=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,VF=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GF=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,WF=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,XF=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jF=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,YF=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qF=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$F=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,KF=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ZF=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,QF=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,JF=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,eI=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tI=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,nI=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,iI=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rI=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aI=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,oI=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,sI=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lI=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uI=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cI=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fI=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dI=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,hI=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pI=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mI=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vI=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gI=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_I=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yI=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,SI=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,xI=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,EI=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bI=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,MI=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,TI=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,RI=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,CI=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,AI=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wI=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,DI=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,LI=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,UI=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,NI=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,PI=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,OI=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,FI=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const II=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zI=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BI=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kI=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HI=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VI=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GI=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,WI=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,XI=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,jI=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,YI=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qI=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$I=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,KI=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ZI=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,QI=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JI=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e3=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t3=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,n3=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i3=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,r3=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,a3=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,o3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,l3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,c3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,d3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,h3=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,m3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,v3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Wt={alphahash_fragment:zO,alphahash_pars_fragment:BO,alphamap_fragment:kO,alphamap_pars_fragment:HO,alphatest_fragment:VO,alphatest_pars_fragment:GO,aomap_fragment:WO,aomap_pars_fragment:XO,batching_pars_vertex:jO,batching_vertex:YO,begin_vertex:qO,beginnormal_vertex:$O,bsdfs:KO,iridescence_fragment:ZO,bumpmap_pars_fragment:QO,clipping_planes_fragment:JO,clipping_planes_pars_fragment:eF,clipping_planes_pars_vertex:tF,clipping_planes_vertex:nF,color_fragment:iF,color_pars_fragment:rF,color_pars_vertex:aF,color_vertex:oF,common:sF,cube_uv_reflection_fragment:lF,defaultnormal_vertex:uF,displacementmap_pars_vertex:cF,displacementmap_vertex:fF,emissivemap_fragment:dF,emissivemap_pars_fragment:hF,colorspace_fragment:pF,colorspace_pars_fragment:mF,envmap_fragment:vF,envmap_common_pars_fragment:gF,envmap_pars_fragment:_F,envmap_pars_vertex:yF,envmap_physical_pars_fragment:DF,envmap_vertex:SF,fog_vertex:xF,fog_pars_vertex:EF,fog_fragment:bF,fog_pars_fragment:MF,gradientmap_pars_fragment:TF,lightmap_pars_fragment:RF,lights_lambert_fragment:CF,lights_lambert_pars_fragment:AF,lights_pars_begin:wF,lights_toon_fragment:LF,lights_toon_pars_fragment:UF,lights_phong_fragment:NF,lights_phong_pars_fragment:PF,lights_physical_fragment:OF,lights_physical_pars_fragment:FF,lights_fragment_begin:IF,lights_fragment_maps:zF,lights_fragment_end:BF,logdepthbuf_fragment:kF,logdepthbuf_pars_fragment:HF,logdepthbuf_pars_vertex:VF,logdepthbuf_vertex:GF,map_fragment:WF,map_pars_fragment:XF,map_particle_fragment:jF,map_particle_pars_fragment:YF,metalnessmap_fragment:qF,metalnessmap_pars_fragment:$F,morphinstance_vertex:KF,morphcolor_vertex:ZF,morphnormal_vertex:QF,morphtarget_pars_vertex:JF,morphtarget_vertex:eI,normal_fragment_begin:tI,normal_fragment_maps:nI,normal_pars_fragment:iI,normal_pars_vertex:rI,normal_vertex:aI,normalmap_pars_fragment:oI,clearcoat_normal_fragment_begin:sI,clearcoat_normal_fragment_maps:lI,clearcoat_pars_fragment:uI,iridescence_pars_fragment:cI,opaque_fragment:fI,packing:dI,premultiplied_alpha_fragment:hI,project_vertex:pI,dithering_fragment:mI,dithering_pars_fragment:vI,roughnessmap_fragment:gI,roughnessmap_pars_fragment:_I,shadowmap_pars_fragment:yI,shadowmap_pars_vertex:SI,shadowmap_vertex:xI,shadowmask_pars_fragment:EI,skinbase_vertex:bI,skinning_pars_vertex:MI,skinning_vertex:TI,skinnormal_vertex:RI,specularmap_fragment:CI,specularmap_pars_fragment:AI,tonemapping_fragment:wI,tonemapping_pars_fragment:DI,transmission_fragment:LI,transmission_pars_fragment:UI,uv_pars_fragment:NI,uv_pars_vertex:PI,uv_vertex:OI,worldpos_vertex:FI,background_vert:II,background_frag:zI,backgroundCube_vert:BI,backgroundCube_frag:kI,cube_vert:HI,cube_frag:VI,depth_vert:GI,depth_frag:WI,distanceRGBA_vert:XI,distanceRGBA_frag:jI,equirect_vert:YI,equirect_frag:qI,linedashed_vert:$I,linedashed_frag:KI,meshbasic_vert:ZI,meshbasic_frag:QI,meshlambert_vert:JI,meshlambert_frag:e3,meshmatcap_vert:t3,meshmatcap_frag:n3,meshnormal_vert:i3,meshnormal_frag:r3,meshphong_vert:a3,meshphong_frag:o3,meshphysical_vert:s3,meshphysical_frag:l3,meshtoon_vert:u3,meshtoon_frag:c3,points_vert:f3,points_frag:d3,shadow_vert:h3,shadow_frag:p3,sprite_vert:m3,sprite_frag:v3},qe={common:{diffuse:{value:new cn(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new xn(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new cn(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new cn(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new cn(16777215)},opacity:{value:1},center:{value:new xn(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},ca={basic:{uniforms:ji([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:ji([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new cn(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:ji([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new cn(0)},specular:{value:new cn(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:ji([qe.common,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.roughnessmap,qe.metalnessmap,qe.fog,qe.lights,{emissive:{value:new cn(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:ji([qe.common,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.gradientmap,qe.fog,qe.lights,{emissive:{value:new cn(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:ji([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:ji([qe.points,qe.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:ji([qe.common,qe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:ji([qe.common,qe.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:ji([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:ji([qe.sprite,qe.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:ji([qe.common,qe.displacementmap,{referencePosition:{value:new de},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:ji([qe.lights,qe.fog,{color:{value:new cn(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};ca.physical={uniforms:ji([ca.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new xn(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new cn(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new xn},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new cn(0)},specularColor:{value:new cn(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new xn},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};const Uh={r:0,b:0,g:0},vs=new ha,g3=new Fn;function _3(s,n,i,o,u,f,d){const p=new cn(0);let m=f===!0?0:1,v,S,y=null,x=0,b=null;function C(F){let I=F.isScene===!0?F.background:null;return I&&I.isTexture&&(I=(F.backgroundBlurriness>0?i:n).get(I)),I}function L(F){let I=!1;const P=C(F);P===null?_(p,m):P&&P.isColor&&(_(P,1),I=!0);const $=s.xr.getEnvironmentBlendMode();$==="additive"?o.buffers.color.setClear(0,0,0,1,d):$==="alpha-blend"&&o.buffers.color.setClear(0,0,0,0,d),(s.autoClear||I)&&(o.buffers.depth.setTest(!0),o.buffers.depth.setMask(!0),o.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function M(F,I){const P=C(I);P&&(P.isCubeTexture||P.mapping===Xh)?(S===void 0&&(S=new Hn(new Ar(1,1,1),new Uo({name:"BackgroundCubeMaterial",uniforms:Jl(ca.backgroundCube.uniforms),vertexShader:ca.backgroundCube.vertexShader,fragmentShader:ca.backgroundCube.fragmentShader,side:rr,depthTest:!1,depthWrite:!1,fog:!1})),S.geometry.deleteAttribute("normal"),S.geometry.deleteAttribute("uv"),S.onBeforeRender=function($,G,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(S.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),u.update(S)),vs.copy(I.backgroundRotation),vs.x*=-1,vs.y*=-1,vs.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),S.material.uniforms.envMap.value=P,S.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,S.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,S.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,S.material.uniforms.backgroundRotation.value.setFromMatrix4(g3.makeRotationFromEuler(vs)),S.material.toneMapped=un.getTransfer(P.colorSpace)!==En,(y!==P||x!==P.version||b!==s.toneMapping)&&(S.material.needsUpdate=!0,y=P,x=P.version,b=s.toneMapping),S.layers.enableAll(),F.unshift(S,S.geometry,S.material,0,0,null)):P&&P.isTexture&&(v===void 0&&(v=new Hn(new eu(2,2),new Uo({name:"BackgroundMaterial",uniforms:Jl(ca.background.uniforms),vertexShader:ca.background.vertexShader,fragmentShader:ca.background.fragmentShader,side:Lo,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),Object.defineProperty(v.material,"map",{get:function(){return this.uniforms.t2D.value}}),u.update(v)),v.material.uniforms.t2D.value=P,v.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,v.material.toneMapped=un.getTransfer(P.colorSpace)!==En,P.matrixAutoUpdate===!0&&P.updateMatrix(),v.material.uniforms.uvTransform.value.copy(P.matrix),(y!==P||x!==P.version||b!==s.toneMapping)&&(v.material.needsUpdate=!0,y=P,x=P.version,b=s.toneMapping),v.layers.enableAll(),F.unshift(v,v.geometry,v.material,0,0,null))}function _(F,I){F.getRGB(Uh,MT(s)),o.buffers.color.setClear(Uh.r,Uh.g,Uh.b,I,d)}return{getClearColor:function(){return p},setClearColor:function(F,I=1){p.set(F),m=I,_(p,m)},getClearAlpha:function(){return m},setClearAlpha:function(F){m=F,_(p,m)},render:L,addToRenderList:M}}function y3(s,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),o={},u=x(null);let f=u,d=!1;function p(D,V,he,K,Se){let ye=!1;const ce=y(K,he,V);f!==ce&&(f=ce,v(f.object)),ye=b(D,K,he,Se),ye&&C(D,K,he,Se),Se!==null&&n.update(Se,s.ELEMENT_ARRAY_BUFFER),(ye||d)&&(d=!1,P(D,V,he,K),Se!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,n.get(Se).buffer))}function m(){return s.createVertexArray()}function v(D){return s.bindVertexArray(D)}function S(D){return s.deleteVertexArray(D)}function y(D,V,he){const K=he.wireframe===!0;let Se=o[D.id];Se===void 0&&(Se={},o[D.id]=Se);let ye=Se[V.id];ye===void 0&&(ye={},Se[V.id]=ye);let ce=ye[K];return ce===void 0&&(ce=x(m()),ye[K]=ce),ce}function x(D){const V=[],he=[],K=[];for(let Se=0;Se<i;Se++)V[Se]=0,he[Se]=0,K[Se]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:he,attributeDivisors:K,object:D,attributes:{},index:null}}function b(D,V,he,K){const Se=f.attributes,ye=V.attributes;let ce=0;const fe=he.getAttributes();for(const le in fe)if(fe[le].location>=0){const Ge=Se[le];let tt=ye[le];if(tt===void 0&&(le==="instanceMatrix"&&D.instanceMatrix&&(tt=D.instanceMatrix),le==="instanceColor"&&D.instanceColor&&(tt=D.instanceColor)),Ge===void 0||Ge.attribute!==tt||tt&&Ge.data!==tt.data)return!0;ce++}return f.attributesNum!==ce||f.index!==K}function C(D,V,he,K){const Se={},ye=V.attributes;let ce=0;const fe=he.getAttributes();for(const le in fe)if(fe[le].location>=0){let Ge=ye[le];Ge===void 0&&(le==="instanceMatrix"&&D.instanceMatrix&&(Ge=D.instanceMatrix),le==="instanceColor"&&D.instanceColor&&(Ge=D.instanceColor));const tt={};tt.attribute=Ge,Ge&&Ge.data&&(tt.data=Ge.data),Se[le]=tt,ce++}f.attributes=Se,f.attributesNum=ce,f.index=K}function L(){const D=f.newAttributes;for(let V=0,he=D.length;V<he;V++)D[V]=0}function M(D){_(D,0)}function _(D,V){const he=f.newAttributes,K=f.enabledAttributes,Se=f.attributeDivisors;he[D]=1,K[D]===0&&(s.enableVertexAttribArray(D),K[D]=1),Se[D]!==V&&(s.vertexAttribDivisor(D,V),Se[D]=V)}function F(){const D=f.newAttributes,V=f.enabledAttributes;for(let he=0,K=V.length;he<K;he++)V[he]!==D[he]&&(s.disableVertexAttribArray(he),V[he]=0)}function I(D,V,he,K,Se,ye,ce){ce===!0?s.vertexAttribIPointer(D,V,he,Se,ye):s.vertexAttribPointer(D,V,he,K,Se,ye)}function P(D,V,he,K){L();const Se=K.attributes,ye=he.getAttributes(),ce=V.defaultAttributeValues;for(const fe in ye){const le=ye[fe];if(le.location>=0){let Fe=Se[fe];if(Fe===void 0&&(fe==="instanceMatrix"&&D.instanceMatrix&&(Fe=D.instanceMatrix),fe==="instanceColor"&&D.instanceColor&&(Fe=D.instanceColor)),Fe!==void 0){const Ge=Fe.normalized,tt=Fe.itemSize,ft=n.get(Fe);if(ft===void 0)continue;const Ht=ft.buffer,me=ft.type,De=ft.bytesPerElement,Je=me===s.INT||me===s.UNSIGNED_INT||Fe.gpuType===My;if(Fe.isInterleavedBufferAttribute){const Ne=Fe.data,rt=Ne.stride,st=Fe.offset;if(Ne.isInstancedInterleavedBuffer){for(let vt=0;vt<le.locationSize;vt++)_(le.location+vt,Ne.meshPerAttribute);D.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Ne.meshPerAttribute*Ne.count)}else for(let vt=0;vt<le.locationSize;vt++)M(le.location+vt);s.bindBuffer(s.ARRAY_BUFFER,Ht);for(let vt=0;vt<le.locationSize;vt++)I(le.location+vt,tt/le.locationSize,me,Ge,rt*De,(st+tt/le.locationSize*vt)*De,Je)}else{if(Fe.isInstancedBufferAttribute){for(let Ne=0;Ne<le.locationSize;Ne++)_(le.location+Ne,Fe.meshPerAttribute);D.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Fe.meshPerAttribute*Fe.count)}else for(let Ne=0;Ne<le.locationSize;Ne++)M(le.location+Ne);s.bindBuffer(s.ARRAY_BUFFER,Ht);for(let Ne=0;Ne<le.locationSize;Ne++)I(le.location+Ne,tt/le.locationSize,me,Ge,tt*De,tt/le.locationSize*Ne*De,Je)}}else if(ce!==void 0){const Ge=ce[fe];if(Ge!==void 0)switch(Ge.length){case 2:s.vertexAttrib2fv(le.location,Ge);break;case 3:s.vertexAttrib3fv(le.location,Ge);break;case 4:s.vertexAttrib4fv(le.location,Ge);break;default:s.vertexAttrib1fv(le.location,Ge)}}}}F()}function $(){Z();for(const D in o){const V=o[D];for(const he in V){const K=V[he];for(const Se in K)S(K[Se].object),delete K[Se];delete V[he]}delete o[D]}}function G(D){if(o[D.id]===void 0)return;const V=o[D.id];for(const he in V){const K=V[he];for(const Se in K)S(K[Se].object),delete K[Se];delete V[he]}delete o[D.id]}function z(D){for(const V in o){const he=o[V];if(he[D.id]===void 0)continue;const K=he[D.id];for(const Se in K)S(K[Se].object),delete K[Se];delete he[D.id]}}function Z(){N(),d=!0,f!==u&&(f=u,v(f.object))}function N(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:p,reset:Z,resetDefaultState:N,dispose:$,releaseStatesOfGeometry:G,releaseStatesOfProgram:z,initAttributes:L,enableAttribute:M,disableUnusedAttributes:F}}function S3(s,n,i){let o;function u(v){o=v}function f(v,S){s.drawArrays(o,v,S),i.update(S,o,1)}function d(v,S,y){y!==0&&(s.drawArraysInstanced(o,v,S,y),i.update(S,o,y))}function p(v,S,y){if(y===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(o,v,0,S,0,y);let b=0;for(let C=0;C<y;C++)b+=S[C];i.update(b,o,1)}function m(v,S,y,x){if(y===0)return;const b=n.get("WEBGL_multi_draw");if(b===null)for(let C=0;C<v.length;C++)d(v[C],S[C],x[C]);else{b.multiDrawArraysInstancedWEBGL(o,v,0,S,0,x,0,y);let C=0;for(let L=0;L<y;L++)C+=S[L]*x[L];i.update(C,o,1)}}this.setMode=u,this.render=f,this.renderInstances=d,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function x3(s,n,i,o){let u;function f(){if(u!==void 0)return u;if(n.has("EXT_texture_filter_anisotropic")===!0){const z=n.get("EXT_texture_filter_anisotropic");u=s.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else u=0;return u}function d(z){return!(z!==$r&&o.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(z){const Z=z===tf&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(z!==qa&&o.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Xa&&!Z)}function m(z){if(z==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let v=i.precision!==void 0?i.precision:"highp";const S=m(v);S!==v&&(console.warn("THREE.WebGLRenderer:",v,"not supported, using",S,"instead."),v=S);const y=i.logarithmicDepthBuffer===!0,x=i.reverseDepthBuffer===!0&&n.has("EXT_clip_control"),b=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),L=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),F=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),I=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),$=C>0,G=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:p,precision:v,logarithmicDepthBuffer:y,reverseDepthBuffer:x,maxTextures:b,maxVertexTextures:C,maxTextureSize:L,maxCubemapSize:M,maxAttributes:_,maxVertexUniforms:F,maxVaryings:I,maxFragmentUniforms:P,vertexTextures:$,maxSamples:G}}function E3(s){const n=this;let i=null,o=0,u=!1,f=!1;const d=new ys,p=new Vt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(y,x){const b=y.length!==0||x||o!==0||u;return u=x,o=y.length,b},this.beginShadows=function(){f=!0,S(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(y,x){i=S(y,x,0)},this.setState=function(y,x,b){const C=y.clippingPlanes,L=y.clipIntersection,M=y.clipShadows,_=s.get(y);if(!u||C===null||C.length===0||f&&!M)f?S(null):v();else{const F=f?0:o,I=F*4;let P=_.clippingState||null;m.value=P,P=S(C,x,I,b);for(let $=0;$!==I;++$)P[$]=i[$];_.clippingState=P,this.numIntersection=L?this.numPlanes:0,this.numPlanes+=F}};function v(){m.value!==i&&(m.value=i,m.needsUpdate=o>0),n.numPlanes=o,n.numIntersection=0}function S(y,x,b,C){const L=y!==null?y.length:0;let M=null;if(L!==0){if(M=m.value,C!==!0||M===null){const _=b+L*4,F=x.matrixWorldInverse;p.getNormalMatrix(F),(M===null||M.length<_)&&(M=new Float32Array(_));for(let I=0,P=b;I!==L;++I,P+=4)d.copy(y[I]).applyMatrix4(F,p),d.normal.toArray(M,P),M[P+3]=d.constant}m.value=M,m.needsUpdate=!0}return n.numPlanes=L,n.numIntersection=0,M}}function b3(s){let n=new WeakMap;function i(d,p){return p===W_?d.mapping=$l:p===X_&&(d.mapping=Kl),d}function o(d){if(d&&d.isTexture){const p=d.mapping;if(p===W_||p===X_)if(n.has(d)){const m=n.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const v=new PO(m.height);return v.fromEquirectangularTexture(s,d),n.set(d,v),d.addEventListener("dispose",u),i(v.texture,d.mapping)}else return null}}return d}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=n.get(p);m!==void 0&&(n.delete(p),m.dispose())}function f(){n=new WeakMap}return{get:o,dispose:f}}class AT extends TT{constructor(n=-1,i=1,o=1,u=-1,f=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=n,this.right=i,this.top=o,this.bottom=u,this.near=f,this.far=d,this.updateProjectionMatrix()}copy(n,i){return super.copy(n,i),this.left=n.left,this.right=n.right,this.top=n.top,this.bottom=n.bottom,this.near=n.near,this.far=n.far,this.zoom=n.zoom,this.view=n.view===null?null:Object.assign({},n.view),this}setViewOffset(n,i,o,u,f,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=n,this.view.fullHeight=i,this.view.offsetX=o,this.view.offsetY=u,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const n=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),o=(this.right+this.left)/2,u=(this.top+this.bottom)/2;let f=o-n,d=o+n,p=u+i,m=u-i;if(this.view!==null&&this.view.enabled){const v=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=v*this.view.offsetX,d=f+v*this.view.width,p-=S*this.view.offsetY,m=p-S*this.view.height}this.projectionMatrix.makeOrthographic(f,d,p,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(n){const i=super.toJSON(n);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Gl=4,RM=[.125,.215,.35,.446,.526,.582],Es=20,C_=new AT,CM=new cn;let A_=null,w_=0,D_=0,L_=!1;const Ss=(1+Math.sqrt(5))/2,Hl=1/Ss,AM=[new de(-Ss,Hl,0),new de(Ss,Hl,0),new de(-Hl,0,Ss),new de(Hl,0,Ss),new de(0,Ss,-Hl),new de(0,Ss,Hl),new de(-1,1,-1),new de(1,1,-1),new de(-1,1,1),new de(1,1,1)];class wM{constructor(n){this._renderer=n,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(n,i=0,o=.1,u=100){A_=this._renderer.getRenderTarget(),w_=this._renderer.getActiveCubeFace(),D_=this._renderer.getActiveMipmapLevel(),L_=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(n,o,u,f),i>0&&this._blur(f,0,0,i),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(n,i=null){return this._fromTexture(n,i)}fromCubemap(n,i=null){return this._fromTexture(n,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=UM(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=LM(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(n){this._lodMax=Math.floor(Math.log2(n)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let n=0;n<this._lodPlanes.length;n++)this._lodPlanes[n].dispose()}_cleanup(n){this._renderer.setRenderTarget(A_,w_,D_),this._renderer.xr.enabled=L_,n.scissorTest=!1,Nh(n,0,0,n.width,n.height)}_fromTexture(n,i){n.mapping===$l||n.mapping===Kl?this._setSize(n.image.length===0?16:n.image[0].width||n.image[0].image.width):this._setSize(n.image.width/4),A_=this._renderer.getRenderTarget(),w_=this._renderer.getActiveCubeFace(),D_=this._renderer.getActiveMipmapLevel(),L_=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const o=i||this._allocateTargets();return this._textureToCubeUV(n,o),this._applyPMREM(o),this._cleanup(o),o}_allocateTargets(){const n=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,o={magFilter:fa,minFilter:fa,generateMipmaps:!1,type:tf,format:$r,colorSpace:tu,depthBuffer:!1},u=DM(n,i,o);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==n||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=DM(n,i,o);const{_lodMax:f}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=M3(f)),this._blurMaterial=T3(f,n,i)}return u}_compileMaterial(n){const i=new Hn(this._lodPlanes[0],n);this._renderer.compile(i,C_)}_sceneToCubeUV(n,i,o,u){const p=new wr(90,1,i,o),m=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],S=this._renderer,y=S.autoClear,x=S.toneMapping;S.getClearColor(CM),S.toneMapping=Do,S.autoClear=!1;const b=new Qc({name:"PMREM.Background",side:rr,depthWrite:!1,depthTest:!1}),C=new Hn(new Ar,b);let L=!1;const M=n.background;M?M.isColor&&(b.color.copy(M),n.background=null,L=!0):(b.color.copy(CM),L=!0);for(let _=0;_<6;_++){const F=_%3;F===0?(p.up.set(0,m[_],0),p.lookAt(v[_],0,0)):F===1?(p.up.set(0,0,m[_]),p.lookAt(0,v[_],0)):(p.up.set(0,m[_],0),p.lookAt(0,0,v[_]));const I=this._cubeSize;Nh(u,F*I,_>2?I:0,I,I),S.setRenderTarget(u),L&&S.render(C,p),S.render(n,p)}C.geometry.dispose(),C.material.dispose(),S.toneMapping=x,S.autoClear=y,n.background=M}_textureToCubeUV(n,i){const o=this._renderer,u=n.mapping===$l||n.mapping===Kl;u?(this._cubemapMaterial===null&&(this._cubemapMaterial=UM()),this._cubemapMaterial.uniforms.flipEnvMap.value=n.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=LM());const f=u?this._cubemapMaterial:this._equirectMaterial,d=new Hn(this._lodPlanes[0],f),p=f.uniforms;p.envMap.value=n;const m=this._cubeSize;Nh(i,0,0,3*m,2*m),o.setRenderTarget(i),o.render(d,C_)}_applyPMREM(n){const i=this._renderer,o=i.autoClear;i.autoClear=!1;const u=this._lodPlanes.length;for(let f=1;f<u;f++){const d=Math.sqrt(this._sigmas[f]*this._sigmas[f]-this._sigmas[f-1]*this._sigmas[f-1]),p=AM[(u-f-1)%AM.length];this._blur(n,f-1,f,d,p)}i.autoClear=o}_blur(n,i,o,u,f){const d=this._pingPongRenderTarget;this._halfBlur(n,d,i,o,u,"latitudinal",f),this._halfBlur(d,n,o,o,u,"longitudinal",f)}_halfBlur(n,i,o,u,f,d,p){const m=this._renderer,v=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const S=3,y=new Hn(this._lodPlanes[u],v),x=v.uniforms,b=this._sizeLods[o]-1,C=isFinite(f)?Math.PI/(2*b):2*Math.PI/(2*Es-1),L=f/C,M=isFinite(f)?1+Math.floor(S*L):Es;M>Es&&console.warn(`sigmaRadians, ${f}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Es}`);const _=[];let F=0;for(let z=0;z<Es;++z){const Z=z/L,N=Math.exp(-Z*Z/2);_.push(N),z===0?F+=N:z<M&&(F+=2*N)}for(let z=0;z<_.length;z++)_[z]=_[z]/F;x.envMap.value=n.texture,x.samples.value=M,x.weights.value=_,x.latitudinal.value=d==="latitudinal",p&&(x.poleAxis.value=p);const{_lodMax:I}=this;x.dTheta.value=C,x.mipInt.value=I-o;const P=this._sizeLods[u],$=3*P*(u>I-Gl?u-I+Gl:0),G=4*(this._cubeSize-P);Nh(i,$,G,3*P,2*P),m.setRenderTarget(i),m.render(y,C_)}}function M3(s){const n=[],i=[],o=[];let u=s;const f=s-Gl+1+RM.length;for(let d=0;d<f;d++){const p=Math.pow(2,u);i.push(p);let m=1/p;d>s-Gl?m=RM[d-s+Gl-1]:d===0&&(m=0),o.push(m);const v=1/(p-2),S=-v,y=1+v,x=[S,S,y,S,y,y,S,S,y,y,S,y],b=6,C=6,L=3,M=2,_=1,F=new Float32Array(L*C*b),I=new Float32Array(M*C*b),P=new Float32Array(_*C*b);for(let G=0;G<b;G++){const z=G%3*2/3-1,Z=G>2?0:-1,N=[z,Z,0,z+2/3,Z,0,z+2/3,Z+1,0,z,Z,0,z+2/3,Z+1,0,z,Z+1,0];F.set(N,L*C*G),I.set(x,M*C*G);const D=[G,G,G,G,G,G];P.set(D,_*C*G)}const $=new As;$.setAttribute("position",new da(F,L)),$.setAttribute("uv",new da(I,M)),$.setAttribute("faceIndex",new da(P,_)),n.push($),u>Gl&&u--}return{lodPlanes:n,sizeLods:i,sigmas:o}}function DM(s,n,i){const o=new Cs(s,n,i);return o.texture.mapping=Xh,o.texture.name="PMREM.cubeUv",o.scissorTest=!0,o}function Nh(s,n,i,o,u){s.viewport.set(n,i,o,u),s.scissor.set(n,i,o,u)}function T3(s,n,i){const o=new Float32Array(Es),u=new de(0,1,0);return new Uo({name:"SphericalGaussianBlur",defines:{n:Es,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:o},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:u}},vertexShader:Ny(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wo,depthTest:!1,depthWrite:!1})}function LM(){return new Uo({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ny(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wo,depthTest:!1,depthWrite:!1})}function UM(){return new Uo({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ny(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wo,depthTest:!1,depthWrite:!1})}function Ny(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function R3(s){let n=new WeakMap,i=null;function o(p){if(p&&p.isTexture){const m=p.mapping,v=m===W_||m===X_,S=m===$l||m===Kl;if(v||S){let y=n.get(p);const x=y!==void 0?y.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==x)return i===null&&(i=new wM(s)),y=v?i.fromEquirectangular(p,y):i.fromCubemap(p,y),y.texture.pmremVersion=p.pmremVersion,n.set(p,y),y.texture;if(y!==void 0)return y.texture;{const b=p.image;return v&&b&&b.height>0||S&&b&&u(b)?(i===null&&(i=new wM(s)),y=v?i.fromEquirectangular(p):i.fromCubemap(p),y.texture.pmremVersion=p.pmremVersion,n.set(p,y),p.addEventListener("dispose",f),y.texture):null}}}return p}function u(p){let m=0;const v=6;for(let S=0;S<v;S++)p[S]!==void 0&&m++;return m===v}function f(p){const m=p.target;m.removeEventListener("dispose",f);const v=n.get(m);v!==void 0&&(n.delete(m),v.dispose())}function d(){n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:o,dispose:d}}function C3(s){const n={};function i(o){if(n[o]!==void 0)return n[o];let u;switch(o){case"WEBGL_depth_texture":u=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":u=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":u=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":u=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:u=s.getExtension(o)}return n[o]=u,u}return{has:function(o){return i(o)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(o){const u=i(o);return u===null&&qc("THREE.WebGLRenderer: "+o+" extension not supported."),u}}}function A3(s,n,i,o){const u={},f=new WeakMap;function d(y){const x=y.target;x.index!==null&&n.remove(x.index);for(const C in x.attributes)n.remove(x.attributes[C]);for(const C in x.morphAttributes){const L=x.morphAttributes[C];for(let M=0,_=L.length;M<_;M++)n.remove(L[M])}x.removeEventListener("dispose",d),delete u[x.id];const b=f.get(x);b&&(n.remove(b),f.delete(x)),o.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function p(y,x){return u[x.id]===!0||(x.addEventListener("dispose",d),u[x.id]=!0,i.memory.geometries++),x}function m(y){const x=y.attributes;for(const C in x)n.update(x[C],s.ARRAY_BUFFER);const b=y.morphAttributes;for(const C in b){const L=b[C];for(let M=0,_=L.length;M<_;M++)n.update(L[M],s.ARRAY_BUFFER)}}function v(y){const x=[],b=y.index,C=y.attributes.position;let L=0;if(b!==null){const F=b.array;L=b.version;for(let I=0,P=F.length;I<P;I+=3){const $=F[I+0],G=F[I+1],z=F[I+2];x.push($,G,G,z,z,$)}}else if(C!==void 0){const F=C.array;L=C.version;for(let I=0,P=F.length/3-1;I<P;I+=3){const $=I+0,G=I+1,z=I+2;x.push($,G,G,z,z,$)}}else return;const M=new(gT(x)?bT:ET)(x,1);M.version=L;const _=f.get(y);_&&n.remove(_),f.set(y,M)}function S(y){const x=f.get(y);if(x){const b=y.index;b!==null&&x.version<b.version&&v(y)}else v(y);return f.get(y)}return{get:p,update:m,getWireframeAttribute:S}}function w3(s,n,i){let o;function u(x){o=x}let f,d;function p(x){f=x.type,d=x.bytesPerElement}function m(x,b){s.drawElements(o,b,f,x*d),i.update(b,o,1)}function v(x,b,C){C!==0&&(s.drawElementsInstanced(o,b,f,x*d,C),i.update(b,o,C))}function S(x,b,C){if(C===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(o,b,0,f,x,0,C);let M=0;for(let _=0;_<C;_++)M+=b[_];i.update(M,o,1)}function y(x,b,C,L){if(C===0)return;const M=n.get("WEBGL_multi_draw");if(M===null)for(let _=0;_<x.length;_++)v(x[_]/d,b[_],L[_]);else{M.multiDrawElementsInstancedWEBGL(o,b,0,f,x,0,L,0,C);let _=0;for(let F=0;F<C;F++)_+=b[F]*L[F];i.update(_,o,1)}}this.setMode=u,this.setIndex=p,this.render=m,this.renderInstances=v,this.renderMultiDraw=S,this.renderMultiDrawInstances=y}function D3(s){const n={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function o(f,d,p){switch(i.calls++,d){case s.TRIANGLES:i.triangles+=p*(f/3);break;case s.LINES:i.lines+=p*(f/2);break;case s.LINE_STRIP:i.lines+=p*(f-1);break;case s.LINE_LOOP:i.lines+=p*f;break;case s.POINTS:i.points+=p*f;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function u(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:n,render:i,programs:null,autoReset:!0,reset:u,update:o}}function L3(s,n,i){const o=new WeakMap,u=new On;function f(d,p,m){const v=d.morphTargetInfluences,S=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,y=S!==void 0?S.length:0;let x=o.get(p);if(x===void 0||x.count!==y){let D=function(){Z.dispose(),o.delete(p),p.removeEventListener("dispose",D)};var b=D;x!==void 0&&x.texture.dispose();const C=p.morphAttributes.position!==void 0,L=p.morphAttributes.normal!==void 0,M=p.morphAttributes.color!==void 0,_=p.morphAttributes.position||[],F=p.morphAttributes.normal||[],I=p.morphAttributes.color||[];let P=0;C===!0&&(P=1),L===!0&&(P=2),M===!0&&(P=3);let $=p.attributes.position.count*P,G=1;$>n.maxTextureSize&&(G=Math.ceil($/n.maxTextureSize),$=n.maxTextureSize);const z=new Float32Array($*G*4*y),Z=new yT(z,$,G,y);Z.type=Xa,Z.needsUpdate=!0;const N=P*4;for(let V=0;V<y;V++){const he=_[V],K=F[V],Se=I[V],ye=$*G*4*V;for(let ce=0;ce<he.count;ce++){const fe=ce*N;C===!0&&(u.fromBufferAttribute(he,ce),z[ye+fe+0]=u.x,z[ye+fe+1]=u.y,z[ye+fe+2]=u.z,z[ye+fe+3]=0),L===!0&&(u.fromBufferAttribute(K,ce),z[ye+fe+4]=u.x,z[ye+fe+5]=u.y,z[ye+fe+6]=u.z,z[ye+fe+7]=0),M===!0&&(u.fromBufferAttribute(Se,ce),z[ye+fe+8]=u.x,z[ye+fe+9]=u.y,z[ye+fe+10]=u.z,z[ye+fe+11]=Se.itemSize===4?u.w:1)}}x={count:y,texture:Z,size:new xn($,G)},o.set(p,x),p.addEventListener("dispose",D)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",d.morphTexture,i);else{let C=0;for(let M=0;M<v.length;M++)C+=v[M];const L=p.morphTargetsRelative?1:1-C;m.getUniforms().setValue(s,"morphTargetBaseInfluence",L),m.getUniforms().setValue(s,"morphTargetInfluences",v)}m.getUniforms().setValue(s,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:f}}function U3(s,n,i,o){let u=new WeakMap;function f(m){const v=o.render.frame,S=m.geometry,y=n.get(m,S);if(u.get(y)!==v&&(n.update(y),u.set(y,v)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),u.get(m)!==v&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),u.set(m,v))),m.isSkinnedMesh){const x=m.skeleton;u.get(x)!==v&&(x.update(),u.set(x,v))}return y}function d(){u=new WeakMap}function p(m){const v=m.target;v.removeEventListener("dispose",p),i.remove(v.instanceMatrix),v.instanceColor!==null&&i.remove(v.instanceColor)}return{update:f,dispose:d}}class wT extends ar{constructor(n,i,o,u,f,d,p,m,v,S=jl){if(S!==jl&&S!==Ql)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");o===void 0&&S===jl&&(o=Rs),o===void 0&&S===Ql&&(o=Zl),super(null,u,f,d,p,m,S,o,v),this.isDepthTexture=!0,this.image={width:n,height:i},this.magFilter=p!==void 0?p:Kr,this.minFilter=m!==void 0?m:Kr,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(n){return super.copy(n),this.compareFunction=n.compareFunction,this}toJSON(n){const i=super.toJSON(n);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const DT=new ar,NM=new wT(1,1),LT=new yT,UT=new gO,NT=new RT,PM=[],OM=[],FM=new Float32Array(16),IM=new Float32Array(9),zM=new Float32Array(4);function ru(s,n,i){const o=s[0];if(o<=0||o>0)return s;const u=n*i;let f=PM[u];if(f===void 0&&(f=new Float32Array(u),PM[u]=f),n!==0){o.toArray(f,0);for(let d=1,p=0;d!==n;++d)p+=i,s[d].toArray(f,p)}return f}function ii(s,n){if(s.length!==n.length)return!1;for(let i=0,o=s.length;i<o;i++)if(s[i]!==n[i])return!1;return!0}function ri(s,n){for(let i=0,o=n.length;i<o;i++)s[i]=n[i]}function Yh(s,n){let i=OM[n];i===void 0&&(i=new Int32Array(n),OM[n]=i);for(let o=0;o!==n;++o)i[o]=s.allocateTextureUnit();return i}function N3(s,n){const i=this.cache;i[0]!==n&&(s.uniform1f(this.addr,n),i[0]=n)}function P3(s,n){const i=this.cache;if(n.x!==void 0)(i[0]!==n.x||i[1]!==n.y)&&(s.uniform2f(this.addr,n.x,n.y),i[0]=n.x,i[1]=n.y);else{if(ii(i,n))return;s.uniform2fv(this.addr,n),ri(i,n)}}function O3(s,n){const i=this.cache;if(n.x!==void 0)(i[0]!==n.x||i[1]!==n.y||i[2]!==n.z)&&(s.uniform3f(this.addr,n.x,n.y,n.z),i[0]=n.x,i[1]=n.y,i[2]=n.z);else if(n.r!==void 0)(i[0]!==n.r||i[1]!==n.g||i[2]!==n.b)&&(s.uniform3f(this.addr,n.r,n.g,n.b),i[0]=n.r,i[1]=n.g,i[2]=n.b);else{if(ii(i,n))return;s.uniform3fv(this.addr,n),ri(i,n)}}function F3(s,n){const i=this.cache;if(n.x!==void 0)(i[0]!==n.x||i[1]!==n.y||i[2]!==n.z||i[3]!==n.w)&&(s.uniform4f(this.addr,n.x,n.y,n.z,n.w),i[0]=n.x,i[1]=n.y,i[2]=n.z,i[3]=n.w);else{if(ii(i,n))return;s.uniform4fv(this.addr,n),ri(i,n)}}function I3(s,n){const i=this.cache,o=n.elements;if(o===void 0){if(ii(i,n))return;s.uniformMatrix2fv(this.addr,!1,n),ri(i,n)}else{if(ii(i,o))return;zM.set(o),s.uniformMatrix2fv(this.addr,!1,zM),ri(i,o)}}function z3(s,n){const i=this.cache,o=n.elements;if(o===void 0){if(ii(i,n))return;s.uniformMatrix3fv(this.addr,!1,n),ri(i,n)}else{if(ii(i,o))return;IM.set(o),s.uniformMatrix3fv(this.addr,!1,IM),ri(i,o)}}function B3(s,n){const i=this.cache,o=n.elements;if(o===void 0){if(ii(i,n))return;s.uniformMatrix4fv(this.addr,!1,n),ri(i,n)}else{if(ii(i,o))return;FM.set(o),s.uniformMatrix4fv(this.addr,!1,FM),ri(i,o)}}function k3(s,n){const i=this.cache;i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n)}function H3(s,n){const i=this.cache;if(n.x!==void 0)(i[0]!==n.x||i[1]!==n.y)&&(s.uniform2i(this.addr,n.x,n.y),i[0]=n.x,i[1]=n.y);else{if(ii(i,n))return;s.uniform2iv(this.addr,n),ri(i,n)}}function V3(s,n){const i=this.cache;if(n.x!==void 0)(i[0]!==n.x||i[1]!==n.y||i[2]!==n.z)&&(s.uniform3i(this.addr,n.x,n.y,n.z),i[0]=n.x,i[1]=n.y,i[2]=n.z);else{if(ii(i,n))return;s.uniform3iv(this.addr,n),ri(i,n)}}function G3(s,n){const i=this.cache;if(n.x!==void 0)(i[0]!==n.x||i[1]!==n.y||i[2]!==n.z||i[3]!==n.w)&&(s.uniform4i(this.addr,n.x,n.y,n.z,n.w),i[0]=n.x,i[1]=n.y,i[2]=n.z,i[3]=n.w);else{if(ii(i,n))return;s.uniform4iv(this.addr,n),ri(i,n)}}function W3(s,n){const i=this.cache;i[0]!==n&&(s.uniform1ui(this.addr,n),i[0]=n)}function X3(s,n){const i=this.cache;if(n.x!==void 0)(i[0]!==n.x||i[1]!==n.y)&&(s.uniform2ui(this.addr,n.x,n.y),i[0]=n.x,i[1]=n.y);else{if(ii(i,n))return;s.uniform2uiv(this.addr,n),ri(i,n)}}function j3(s,n){const i=this.cache;if(n.x!==void 0)(i[0]!==n.x||i[1]!==n.y||i[2]!==n.z)&&(s.uniform3ui(this.addr,n.x,n.y,n.z),i[0]=n.x,i[1]=n.y,i[2]=n.z);else{if(ii(i,n))return;s.uniform3uiv(this.addr,n),ri(i,n)}}function Y3(s,n){const i=this.cache;if(n.x!==void 0)(i[0]!==n.x||i[1]!==n.y||i[2]!==n.z||i[3]!==n.w)&&(s.uniform4ui(this.addr,n.x,n.y,n.z,n.w),i[0]=n.x,i[1]=n.y,i[2]=n.z,i[3]=n.w);else{if(ii(i,n))return;s.uniform4uiv(this.addr,n),ri(i,n)}}function q3(s,n,i){const o=this.cache,u=i.allocateTextureUnit();o[0]!==u&&(s.uniform1i(this.addr,u),o[0]=u);let f;this.type===s.SAMPLER_2D_SHADOW?(NM.compareFunction=vT,f=NM):f=DT,i.setTexture2D(n||f,u)}function $3(s,n,i){const o=this.cache,u=i.allocateTextureUnit();o[0]!==u&&(s.uniform1i(this.addr,u),o[0]=u),i.setTexture3D(n||UT,u)}function K3(s,n,i){const o=this.cache,u=i.allocateTextureUnit();o[0]!==u&&(s.uniform1i(this.addr,u),o[0]=u),i.setTextureCube(n||NT,u)}function Z3(s,n,i){const o=this.cache,u=i.allocateTextureUnit();o[0]!==u&&(s.uniform1i(this.addr,u),o[0]=u),i.setTexture2DArray(n||LT,u)}function Q3(s){switch(s){case 5126:return N3;case 35664:return P3;case 35665:return O3;case 35666:return F3;case 35674:return I3;case 35675:return z3;case 35676:return B3;case 5124:case 35670:return k3;case 35667:case 35671:return H3;case 35668:case 35672:return V3;case 35669:case 35673:return G3;case 5125:return W3;case 36294:return X3;case 36295:return j3;case 36296:return Y3;case 35678:case 36198:case 36298:case 36306:case 35682:return q3;case 35679:case 36299:case 36307:return $3;case 35680:case 36300:case 36308:case 36293:return K3;case 36289:case 36303:case 36311:case 36292:return Z3}}function J3(s,n){s.uniform1fv(this.addr,n)}function ez(s,n){const i=ru(n,this.size,2);s.uniform2fv(this.addr,i)}function tz(s,n){const i=ru(n,this.size,3);s.uniform3fv(this.addr,i)}function nz(s,n){const i=ru(n,this.size,4);s.uniform4fv(this.addr,i)}function iz(s,n){const i=ru(n,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function rz(s,n){const i=ru(n,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function az(s,n){const i=ru(n,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function oz(s,n){s.uniform1iv(this.addr,n)}function sz(s,n){s.uniform2iv(this.addr,n)}function lz(s,n){s.uniform3iv(this.addr,n)}function uz(s,n){s.uniform4iv(this.addr,n)}function cz(s,n){s.uniform1uiv(this.addr,n)}function fz(s,n){s.uniform2uiv(this.addr,n)}function dz(s,n){s.uniform3uiv(this.addr,n)}function hz(s,n){s.uniform4uiv(this.addr,n)}function pz(s,n,i){const o=this.cache,u=n.length,f=Yh(i,u);ii(o,f)||(s.uniform1iv(this.addr,f),ri(o,f));for(let d=0;d!==u;++d)i.setTexture2D(n[d]||DT,f[d])}function mz(s,n,i){const o=this.cache,u=n.length,f=Yh(i,u);ii(o,f)||(s.uniform1iv(this.addr,f),ri(o,f));for(let d=0;d!==u;++d)i.setTexture3D(n[d]||UT,f[d])}function vz(s,n,i){const o=this.cache,u=n.length,f=Yh(i,u);ii(o,f)||(s.uniform1iv(this.addr,f),ri(o,f));for(let d=0;d!==u;++d)i.setTextureCube(n[d]||NT,f[d])}function gz(s,n,i){const o=this.cache,u=n.length,f=Yh(i,u);ii(o,f)||(s.uniform1iv(this.addr,f),ri(o,f));for(let d=0;d!==u;++d)i.setTexture2DArray(n[d]||LT,f[d])}function _z(s){switch(s){case 5126:return J3;case 35664:return ez;case 35665:return tz;case 35666:return nz;case 35674:return iz;case 35675:return rz;case 35676:return az;case 5124:case 35670:return oz;case 35667:case 35671:return sz;case 35668:case 35672:return lz;case 35669:case 35673:return uz;case 5125:return cz;case 36294:return fz;case 36295:return dz;case 36296:return hz;case 35678:case 36198:case 36298:case 36306:case 35682:return pz;case 35679:case 36299:case 36307:return mz;case 35680:case 36300:case 36308:case 36293:return vz;case 36289:case 36303:case 36311:case 36292:return gz}}class yz{constructor(n,i,o){this.id=n,this.addr=o,this.cache=[],this.type=i.type,this.setValue=Q3(i.type)}}class Sz{constructor(n,i,o){this.id=n,this.addr=o,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=_z(i.type)}}class xz{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,i,o){const u=this.seq;for(let f=0,d=u.length;f!==d;++f){const p=u[f];p.setValue(n,i[p.id],o)}}}const U_=/(\w+)(\])?(\[|\.)?/g;function BM(s,n){s.seq.push(n),s.map[n.id]=n}function Ez(s,n,i){const o=s.name,u=o.length;for(U_.lastIndex=0;;){const f=U_.exec(o),d=U_.lastIndex;let p=f[1];const m=f[2]==="]",v=f[3];if(m&&(p=p|0),v===void 0||v==="["&&d+2===u){BM(i,v===void 0?new yz(p,s,n):new Sz(p,s,n));break}else{let y=i.map[p];y===void 0&&(y=new xz(p),BM(i,y)),i=y}}}class kh{constructor(n,i){this.seq=[],this.map={};const o=n.getProgramParameter(i,n.ACTIVE_UNIFORMS);for(let u=0;u<o;++u){const f=n.getActiveUniform(i,u),d=n.getUniformLocation(i,f.name);Ez(f,d,this)}}setValue(n,i,o,u){const f=this.map[i];f!==void 0&&f.setValue(n,o,u)}setOptional(n,i,o){const u=i[o];u!==void 0&&this.setValue(n,o,u)}static upload(n,i,o,u){for(let f=0,d=i.length;f!==d;++f){const p=i[f],m=o[p.id];m.needsUpdate!==!1&&p.setValue(n,m.value,u)}}static seqWithValue(n,i){const o=[];for(let u=0,f=n.length;u!==f;++u){const d=n[u];d.id in i&&o.push(d)}return o}}function kM(s,n,i){const o=s.createShader(n);return s.shaderSource(o,i),s.compileShader(o),o}const bz=37297;let Mz=0;function Tz(s,n){const i=s.split(`
`),o=[],u=Math.max(n-6,0),f=Math.min(n+6,i.length);for(let d=u;d<f;d++){const p=d+1;o.push(`${p===n?">":" "} ${p}: ${i[d]}`)}return o.join(`
`)}const HM=new Vt;function Rz(s){un._getMatrix(HM,un.workingColorSpace,s);const n=`mat3( ${HM.elements.map(i=>i.toFixed(4))} )`;switch(un.getTransfer(s)){case jh:return[n,"LinearTransferOETF"];case En:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[n,"LinearTransferOETF"]}}function VM(s,n,i){const o=s.getShaderParameter(n,s.COMPILE_STATUS),u=s.getShaderInfoLog(n).trim();if(o&&u==="")return"";const f=/ERROR: 0:(\d+)/.exec(u);if(f){const d=parseInt(f[1]);return i.toUpperCase()+`

`+u+`

`+Tz(s.getShaderSource(n),d)}else return u}function Cz(s,n){const i=Rz(n);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function Az(s,n){let i;switch(n){case AP:i="Linear";break;case wP:i="Reinhard";break;case DP:i="Cineon";break;case LP:i="ACESFilmic";break;case NP:i="AgX";break;case PP:i="Neutral";break;case UP:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",n),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Ph=new de;function wz(){un.getLuminanceCoefficients(Ph);const s=Ph.x.toFixed(4),n=Ph.y.toFixed(4),i=Ph.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${n}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Dz(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($c).join(`
`)}function Lz(s){const n=[];for(const i in s){const o=s[i];o!==!1&&n.push("#define "+i+" "+o)}return n.join(`
`)}function Uz(s,n){const i={},o=s.getProgramParameter(n,s.ACTIVE_ATTRIBUTES);for(let u=0;u<o;u++){const f=s.getActiveAttrib(n,u),d=f.name;let p=1;f.type===s.FLOAT_MAT2&&(p=2),f.type===s.FLOAT_MAT3&&(p=3),f.type===s.FLOAT_MAT4&&(p=4),i[d]={type:f.type,location:s.getAttribLocation(n,d),locationSize:p}}return i}function $c(s){return s!==""}function GM(s,n){const i=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function WM(s,n){return s.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const Nz=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sy(s){return s.replace(Nz,Oz)}const Pz=new Map;function Oz(s,n){let i=Wt[n];if(i===void 0){const o=Pz.get(n);if(o!==void 0)i=Wt[o],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',n,o);else throw new Error("Can not resolve #include <"+n+">")}return Sy(i)}const Fz=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function XM(s){return s.replace(Fz,Iz)}function Iz(s,n,i,o){let u="";for(let f=parseInt(n);f<parseInt(i);f++)u+=o.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return u}function jM(s){let n=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?n+=`
#define HIGH_PRECISION`:s.precision==="mediump"?n+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(n+=`
#define LOW_PRECISION`),n}function zz(s){let n="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===tT?n="SHADOWMAP_TYPE_PCF":s.shadowMapType===nT?n="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ga&&(n="SHADOWMAP_TYPE_VSM"),n}function Bz(s){let n="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case $l:case Kl:n="ENVMAP_TYPE_CUBE";break;case Xh:n="ENVMAP_TYPE_CUBE_UV";break}return n}function kz(s){let n="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Kl:n="ENVMAP_MODE_REFRACTION";break}return n}function Hz(s){let n="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case iT:n="ENVMAP_BLENDING_MULTIPLY";break;case RP:n="ENVMAP_BLENDING_MIX";break;case CP:n="ENVMAP_BLENDING_ADD";break}return n}function Vz(s){const n=s.envMapCubeUVHeight;if(n===null)return null;const i=Math.log2(n)-2,o=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:o,maxMip:i}}function Gz(s,n,i,o){const u=s.getContext(),f=i.defines;let d=i.vertexShader,p=i.fragmentShader;const m=zz(i),v=Bz(i),S=kz(i),y=Hz(i),x=Vz(i),b=Dz(i),C=Lz(f),L=u.createProgram();let M,_,F=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,C].filter($c).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,C].filter($c).join(`
`),_.length>0&&(_+=`
`)):(M=[jM(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,C,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+S:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($c).join(`
`),_=[jM(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,C,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.envMap?"#define "+S:"",i.envMap?"#define "+y:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Do?"#define TONE_MAPPING":"",i.toneMapping!==Do?Wt.tonemapping_pars_fragment:"",i.toneMapping!==Do?Az("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,Cz("linearToOutputTexel",i.outputColorSpace),wz(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter($c).join(`
`)),d=Sy(d),d=GM(d,i),d=WM(d,i),p=Sy(p),p=GM(p,i),p=WM(p,i),d=XM(d),p=XM(p),i.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,M=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",i.glslVersion===rM?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===rM?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const I=F+M+d,P=F+_+p,$=kM(u,u.VERTEX_SHADER,I),G=kM(u,u.FRAGMENT_SHADER,P);u.attachShader(L,$),u.attachShader(L,G),i.index0AttributeName!==void 0?u.bindAttribLocation(L,0,i.index0AttributeName):i.morphTargets===!0&&u.bindAttribLocation(L,0,"position"),u.linkProgram(L);function z(V){if(s.debug.checkShaderErrors){const he=u.getProgramInfoLog(L).trim(),K=u.getShaderInfoLog($).trim(),Se=u.getShaderInfoLog(G).trim();let ye=!0,ce=!0;if(u.getProgramParameter(L,u.LINK_STATUS)===!1)if(ye=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(u,L,$,G);else{const fe=VM(u,$,"vertex"),le=VM(u,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+u.getError()+" - VALIDATE_STATUS "+u.getProgramParameter(L,u.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+he+`
`+fe+`
`+le)}else he!==""?console.warn("THREE.WebGLProgram: Program Info Log:",he):(K===""||Se==="")&&(ce=!1);ce&&(V.diagnostics={runnable:ye,programLog:he,vertexShader:{log:K,prefix:M},fragmentShader:{log:Se,prefix:_}})}u.deleteShader($),u.deleteShader(G),Z=new kh(u,L),N=Uz(u,L)}let Z;this.getUniforms=function(){return Z===void 0&&z(this),Z};let N;this.getAttributes=function(){return N===void 0&&z(this),N};let D=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=u.getProgramParameter(L,bz)),D},this.destroy=function(){o.releaseStatesOfProgram(this),u.deleteProgram(L),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Mz++,this.cacheKey=n,this.usedTimes=1,this.program=L,this.vertexShader=$,this.fragmentShader=G,this}let Wz=0;class Xz{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n){const i=n.vertexShader,o=n.fragmentShader,u=this._getShaderStage(i),f=this._getShaderStage(o),d=this._getShaderCacheForMaterial(n);return d.has(u)===!1&&(d.add(u),u.usedTimes++),d.has(f)===!1&&(d.add(f),f.usedTimes++),this}remove(n){const i=this.materialCache.get(n);for(const o of i)o.usedTimes--,o.usedTimes===0&&this.shaderCache.delete(o.code);return this.materialCache.delete(n),this}getVertexShaderID(n){return this._getShaderStage(n.vertexShader).id}getFragmentShaderID(n){return this._getShaderStage(n.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const i=this.materialCache;let o=i.get(n);return o===void 0&&(o=new Set,i.set(n,o)),o}_getShaderStage(n){const i=this.shaderCache;let o=i.get(n);return o===void 0&&(o=new jz(n),i.set(n,o)),o}}class jz{constructor(n){this.id=Wz++,this.code=n,this.usedTimes=0}}function Yz(s,n,i,o,u,f,d){const p=new ST,m=new Xz,v=new Set,S=[],y=u.logarithmicDepthBuffer,x=u.vertexTextures;let b=u.precision;const C={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function L(N){return v.add(N),N===0?"uv":`uv${N}`}function M(N,D,V,he,K){const Se=he.fog,ye=K.geometry,ce=N.isMeshStandardMaterial?he.environment:null,fe=(N.isMeshStandardMaterial?i:n).get(N.envMap||ce),le=fe&&fe.mapping===Xh?fe.image.height:null,Fe=C[N.type];N.precision!==null&&(b=u.getMaxPrecision(N.precision),b!==N.precision&&console.warn("THREE.WebGLProgram.getParameters:",N.precision,"not supported, using",b,"instead."));const Ge=ye.morphAttributes.position||ye.morphAttributes.normal||ye.morphAttributes.color,tt=Ge!==void 0?Ge.length:0;let ft=0;ye.morphAttributes.position!==void 0&&(ft=1),ye.morphAttributes.normal!==void 0&&(ft=2),ye.morphAttributes.color!==void 0&&(ft=3);let Ht,me,De,Je;if(Fe){const Jt=ca[Fe];Ht=Jt.vertexShader,me=Jt.fragmentShader}else Ht=N.vertexShader,me=N.fragmentShader,m.update(N),De=m.getVertexShaderID(N),Je=m.getFragmentShaderID(N);const Ne=s.getRenderTarget(),rt=s.state.buffers.depth.getReversed(),st=K.isInstancedMesh===!0,vt=K.isBatchedMesh===!0,zt=!!N.map,xt=!!N.matcap,Ft=!!fe,q=!!N.aoMap,an=!!N.lightMap,gt=!!N.bumpMap,Rt=!!N.normalMap,ut=!!N.displacementMap,Gt=!!N.emissiveMap,nt=!!N.metalnessMap,O=!!N.roughnessMap,R=N.anisotropy>0,Q=N.clearcoat>0,Ee=N.dispersion>0,ue=N.iridescence>0,se=N.sheen>0,je=N.transmission>0,Pe=R&&!!N.anisotropyMap,ze=Q&&!!N.clearcoatMap,xe=Q&&!!N.clearcoatNormalMap,te=Q&&!!N.clearcoatRoughnessMap,Te=ue&&!!N.iridescenceMap,Be=ue&&!!N.iridescenceThicknessMap,Ke=se&&!!N.sheenColorMap,Oe=se&&!!N.sheenRoughnessMap,ct=!!N.specularMap,pt=!!N.specularColorMap,Ct=!!N.specularIntensityMap,H=je&&!!N.transmissionMap,Le=je&&!!N.thicknessMap,pe=!!N.gradientMap,Me=!!N.alphaMap,ke=N.alphaTest>0,We=!!N.alphaHash,Lt=!!N.extensions;let vn=Do;N.toneMapped&&(Ne===null||Ne.isXRRenderTarget===!0)&&(vn=s.toneMapping);const Ln={shaderID:Fe,shaderType:N.type,shaderName:N.name,vertexShader:Ht,fragmentShader:me,defines:N.defines,customVertexShaderID:De,customFragmentShaderID:Je,isRawShaderMaterial:N.isRawShaderMaterial===!0,glslVersion:N.glslVersion,precision:b,batching:vt,batchingColor:vt&&K._colorsTexture!==null,instancing:st,instancingColor:st&&K.instanceColor!==null,instancingMorph:st&&K.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Ne===null?s.outputColorSpace:Ne.isXRRenderTarget===!0?Ne.texture.colorSpace:tu,alphaToCoverage:!!N.alphaToCoverage,map:zt,matcap:xt,envMap:Ft,envMapMode:Ft&&fe.mapping,envMapCubeUVHeight:le,aoMap:q,lightMap:an,bumpMap:gt,normalMap:Rt,displacementMap:x&&ut,emissiveMap:Gt,normalMapObjectSpace:Rt&&N.normalMapType===zP,normalMapTangentSpace:Rt&&N.normalMapType===mT,metalnessMap:nt,roughnessMap:O,anisotropy:R,anisotropyMap:Pe,clearcoat:Q,clearcoatMap:ze,clearcoatNormalMap:xe,clearcoatRoughnessMap:te,dispersion:Ee,iridescence:ue,iridescenceMap:Te,iridescenceThicknessMap:Be,sheen:se,sheenColorMap:Ke,sheenRoughnessMap:Oe,specularMap:ct,specularColorMap:pt,specularIntensityMap:Ct,transmission:je,transmissionMap:H,thicknessMap:Le,gradientMap:pe,opaque:N.transparent===!1&&N.blending===Xl&&N.alphaToCoverage===!1,alphaMap:Me,alphaTest:ke,alphaHash:We,combine:N.combine,mapUv:zt&&L(N.map.channel),aoMapUv:q&&L(N.aoMap.channel),lightMapUv:an&&L(N.lightMap.channel),bumpMapUv:gt&&L(N.bumpMap.channel),normalMapUv:Rt&&L(N.normalMap.channel),displacementMapUv:ut&&L(N.displacementMap.channel),emissiveMapUv:Gt&&L(N.emissiveMap.channel),metalnessMapUv:nt&&L(N.metalnessMap.channel),roughnessMapUv:O&&L(N.roughnessMap.channel),anisotropyMapUv:Pe&&L(N.anisotropyMap.channel),clearcoatMapUv:ze&&L(N.clearcoatMap.channel),clearcoatNormalMapUv:xe&&L(N.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&L(N.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&L(N.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&L(N.iridescenceThicknessMap.channel),sheenColorMapUv:Ke&&L(N.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&L(N.sheenRoughnessMap.channel),specularMapUv:ct&&L(N.specularMap.channel),specularColorMapUv:pt&&L(N.specularColorMap.channel),specularIntensityMapUv:Ct&&L(N.specularIntensityMap.channel),transmissionMapUv:H&&L(N.transmissionMap.channel),thicknessMapUv:Le&&L(N.thicknessMap.channel),alphaMapUv:Me&&L(N.alphaMap.channel),vertexTangents:!!ye.attributes.tangent&&(Rt||R),vertexColors:N.vertexColors,vertexAlphas:N.vertexColors===!0&&!!ye.attributes.color&&ye.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!ye.attributes.uv&&(zt||Me),fog:!!Se,useFog:N.fog===!0,fogExp2:!!Se&&Se.isFogExp2,flatShading:N.flatShading===!0,sizeAttenuation:N.sizeAttenuation===!0,logarithmicDepthBuffer:y,reverseDepthBuffer:rt,skinning:K.isSkinnedMesh===!0,morphTargets:ye.morphAttributes.position!==void 0,morphNormals:ye.morphAttributes.normal!==void 0,morphColors:ye.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:ft,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:N.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:vn,decodeVideoTexture:zt&&N.map.isVideoTexture===!0&&un.getTransfer(N.map.colorSpace)===En,decodeVideoTextureEmissive:Gt&&N.emissiveMap.isVideoTexture===!0&&un.getTransfer(N.emissiveMap.colorSpace)===En,premultipliedAlpha:N.premultipliedAlpha,doubleSided:N.side===Wa,flipSided:N.side===rr,useDepthPacking:N.depthPacking>=0,depthPacking:N.depthPacking||0,index0AttributeName:N.index0AttributeName,extensionClipCullDistance:Lt&&N.extensions.clipCullDistance===!0&&o.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&N.extensions.multiDraw===!0||vt)&&o.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:o.has("KHR_parallel_shader_compile"),customProgramCacheKey:N.customProgramCacheKey()};return Ln.vertexUv1s=v.has(1),Ln.vertexUv2s=v.has(2),Ln.vertexUv3s=v.has(3),v.clear(),Ln}function _(N){const D=[];if(N.shaderID?D.push(N.shaderID):(D.push(N.customVertexShaderID),D.push(N.customFragmentShaderID)),N.defines!==void 0)for(const V in N.defines)D.push(V),D.push(N.defines[V]);return N.isRawShaderMaterial===!1&&(F(D,N),I(D,N),D.push(s.outputColorSpace)),D.push(N.customProgramCacheKey),D.join()}function F(N,D){N.push(D.precision),N.push(D.outputColorSpace),N.push(D.envMapMode),N.push(D.envMapCubeUVHeight),N.push(D.mapUv),N.push(D.alphaMapUv),N.push(D.lightMapUv),N.push(D.aoMapUv),N.push(D.bumpMapUv),N.push(D.normalMapUv),N.push(D.displacementMapUv),N.push(D.emissiveMapUv),N.push(D.metalnessMapUv),N.push(D.roughnessMapUv),N.push(D.anisotropyMapUv),N.push(D.clearcoatMapUv),N.push(D.clearcoatNormalMapUv),N.push(D.clearcoatRoughnessMapUv),N.push(D.iridescenceMapUv),N.push(D.iridescenceThicknessMapUv),N.push(D.sheenColorMapUv),N.push(D.sheenRoughnessMapUv),N.push(D.specularMapUv),N.push(D.specularColorMapUv),N.push(D.specularIntensityMapUv),N.push(D.transmissionMapUv),N.push(D.thicknessMapUv),N.push(D.combine),N.push(D.fogExp2),N.push(D.sizeAttenuation),N.push(D.morphTargetsCount),N.push(D.morphAttributeCount),N.push(D.numDirLights),N.push(D.numPointLights),N.push(D.numSpotLights),N.push(D.numSpotLightMaps),N.push(D.numHemiLights),N.push(D.numRectAreaLights),N.push(D.numDirLightShadows),N.push(D.numPointLightShadows),N.push(D.numSpotLightShadows),N.push(D.numSpotLightShadowsWithMaps),N.push(D.numLightProbes),N.push(D.shadowMapType),N.push(D.toneMapping),N.push(D.numClippingPlanes),N.push(D.numClipIntersection),N.push(D.depthPacking)}function I(N,D){p.disableAll(),D.supportsVertexTextures&&p.enable(0),D.instancing&&p.enable(1),D.instancingColor&&p.enable(2),D.instancingMorph&&p.enable(3),D.matcap&&p.enable(4),D.envMap&&p.enable(5),D.normalMapObjectSpace&&p.enable(6),D.normalMapTangentSpace&&p.enable(7),D.clearcoat&&p.enable(8),D.iridescence&&p.enable(9),D.alphaTest&&p.enable(10),D.vertexColors&&p.enable(11),D.vertexAlphas&&p.enable(12),D.vertexUv1s&&p.enable(13),D.vertexUv2s&&p.enable(14),D.vertexUv3s&&p.enable(15),D.vertexTangents&&p.enable(16),D.anisotropy&&p.enable(17),D.alphaHash&&p.enable(18),D.batching&&p.enable(19),D.dispersion&&p.enable(20),D.batchingColor&&p.enable(21),N.push(p.mask),p.disableAll(),D.fog&&p.enable(0),D.useFog&&p.enable(1),D.flatShading&&p.enable(2),D.logarithmicDepthBuffer&&p.enable(3),D.reverseDepthBuffer&&p.enable(4),D.skinning&&p.enable(5),D.morphTargets&&p.enable(6),D.morphNormals&&p.enable(7),D.morphColors&&p.enable(8),D.premultipliedAlpha&&p.enable(9),D.shadowMapEnabled&&p.enable(10),D.doubleSided&&p.enable(11),D.flipSided&&p.enable(12),D.useDepthPacking&&p.enable(13),D.dithering&&p.enable(14),D.transmission&&p.enable(15),D.sheen&&p.enable(16),D.opaque&&p.enable(17),D.pointsUvs&&p.enable(18),D.decodeVideoTexture&&p.enable(19),D.decodeVideoTextureEmissive&&p.enable(20),D.alphaToCoverage&&p.enable(21),N.push(p.mask)}function P(N){const D=C[N.type];let V;if(D){const he=ca[D];V=DO.clone(he.uniforms)}else V=N.uniforms;return V}function $(N,D){let V;for(let he=0,K=S.length;he<K;he++){const Se=S[he];if(Se.cacheKey===D){V=Se,++V.usedTimes;break}}return V===void 0&&(V=new Gz(s,D,N,f),S.push(V)),V}function G(N){if(--N.usedTimes===0){const D=S.indexOf(N);S[D]=S[S.length-1],S.pop(),N.destroy()}}function z(N){m.remove(N)}function Z(){m.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:P,acquireProgram:$,releaseProgram:G,releaseShaderCache:z,programs:S,dispose:Z}}function qz(){let s=new WeakMap;function n(d){return s.has(d)}function i(d){let p=s.get(d);return p===void 0&&(p={},s.set(d,p)),p}function o(d){s.delete(d)}function u(d,p,m){s.get(d)[p]=m}function f(){s=new WeakMap}return{has:n,get:i,remove:o,update:u,dispose:f}}function $z(s,n){return s.groupOrder!==n.groupOrder?s.groupOrder-n.groupOrder:s.renderOrder!==n.renderOrder?s.renderOrder-n.renderOrder:s.material.id!==n.material.id?s.material.id-n.material.id:s.z!==n.z?s.z-n.z:s.id-n.id}function YM(s,n){return s.groupOrder!==n.groupOrder?s.groupOrder-n.groupOrder:s.renderOrder!==n.renderOrder?s.renderOrder-n.renderOrder:s.z!==n.z?n.z-s.z:s.id-n.id}function qM(){const s=[];let n=0;const i=[],o=[],u=[];function f(){n=0,i.length=0,o.length=0,u.length=0}function d(y,x,b,C,L,M){let _=s[n];return _===void 0?(_={id:y.id,object:y,geometry:x,material:b,groupOrder:C,renderOrder:y.renderOrder,z:L,group:M},s[n]=_):(_.id=y.id,_.object=y,_.geometry=x,_.material=b,_.groupOrder=C,_.renderOrder=y.renderOrder,_.z=L,_.group=M),n++,_}function p(y,x,b,C,L,M){const _=d(y,x,b,C,L,M);b.transmission>0?o.push(_):b.transparent===!0?u.push(_):i.push(_)}function m(y,x,b,C,L,M){const _=d(y,x,b,C,L,M);b.transmission>0?o.unshift(_):b.transparent===!0?u.unshift(_):i.unshift(_)}function v(y,x){i.length>1&&i.sort(y||$z),o.length>1&&o.sort(x||YM),u.length>1&&u.sort(x||YM)}function S(){for(let y=n,x=s.length;y<x;y++){const b=s[y];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:o,transparent:u,init:f,push:p,unshift:m,finish:S,sort:v}}function Kz(){let s=new WeakMap;function n(o,u){const f=s.get(o);let d;return f===void 0?(d=new qM,s.set(o,[d])):u>=f.length?(d=new qM,f.push(d)):d=f[u],d}function i(){s=new WeakMap}return{get:n,dispose:i}}function Zz(){const s={};return{get:function(n){if(s[n.id]!==void 0)return s[n.id];let i;switch(n.type){case"DirectionalLight":i={direction:new de,color:new cn};break;case"SpotLight":i={position:new de,direction:new de,color:new cn,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new de,color:new cn,distance:0,decay:0};break;case"HemisphereLight":i={direction:new de,skyColor:new cn,groundColor:new cn};break;case"RectAreaLight":i={color:new cn,position:new de,halfWidth:new de,halfHeight:new de};break}return s[n.id]=i,i}}}function Qz(){const s={};return{get:function(n){if(s[n.id]!==void 0)return s[n.id];let i;switch(n.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xn};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xn};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xn,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[n.id]=i,i}}}let Jz=0;function eB(s,n){return(n.castShadow?2:0)-(s.castShadow?2:0)+(n.map?1:0)-(s.map?1:0)}function tB(s){const n=new Zz,i=Qz(),o={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let v=0;v<9;v++)o.probe.push(new de);const u=new de,f=new Fn,d=new Fn;function p(v){let S=0,y=0,x=0;for(let N=0;N<9;N++)o.probe[N].set(0,0,0);let b=0,C=0,L=0,M=0,_=0,F=0,I=0,P=0,$=0,G=0,z=0;v.sort(eB);for(let N=0,D=v.length;N<D;N++){const V=v[N],he=V.color,K=V.intensity,Se=V.distance,ye=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)S+=he.r*K,y+=he.g*K,x+=he.b*K;else if(V.isLightProbe){for(let ce=0;ce<9;ce++)o.probe[ce].addScaledVector(V.sh.coefficients[ce],K);z++}else if(V.isDirectionalLight){const ce=n.get(V);if(ce.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const fe=V.shadow,le=i.get(V);le.shadowIntensity=fe.intensity,le.shadowBias=fe.bias,le.shadowNormalBias=fe.normalBias,le.shadowRadius=fe.radius,le.shadowMapSize=fe.mapSize,o.directionalShadow[b]=le,o.directionalShadowMap[b]=ye,o.directionalShadowMatrix[b]=V.shadow.matrix,F++}o.directional[b]=ce,b++}else if(V.isSpotLight){const ce=n.get(V);ce.position.setFromMatrixPosition(V.matrixWorld),ce.color.copy(he).multiplyScalar(K),ce.distance=Se,ce.coneCos=Math.cos(V.angle),ce.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),ce.decay=V.decay,o.spot[L]=ce;const fe=V.shadow;if(V.map&&(o.spotLightMap[$]=V.map,$++,fe.updateMatrices(V),V.castShadow&&G++),o.spotLightMatrix[L]=fe.matrix,V.castShadow){const le=i.get(V);le.shadowIntensity=fe.intensity,le.shadowBias=fe.bias,le.shadowNormalBias=fe.normalBias,le.shadowRadius=fe.radius,le.shadowMapSize=fe.mapSize,o.spotShadow[L]=le,o.spotShadowMap[L]=ye,P++}L++}else if(V.isRectAreaLight){const ce=n.get(V);ce.color.copy(he).multiplyScalar(K),ce.halfWidth.set(V.width*.5,0,0),ce.halfHeight.set(0,V.height*.5,0),o.rectArea[M]=ce,M++}else if(V.isPointLight){const ce=n.get(V);if(ce.color.copy(V.color).multiplyScalar(V.intensity),ce.distance=V.distance,ce.decay=V.decay,V.castShadow){const fe=V.shadow,le=i.get(V);le.shadowIntensity=fe.intensity,le.shadowBias=fe.bias,le.shadowNormalBias=fe.normalBias,le.shadowRadius=fe.radius,le.shadowMapSize=fe.mapSize,le.shadowCameraNear=fe.camera.near,le.shadowCameraFar=fe.camera.far,o.pointShadow[C]=le,o.pointShadowMap[C]=ye,o.pointShadowMatrix[C]=V.shadow.matrix,I++}o.point[C]=ce,C++}else if(V.isHemisphereLight){const ce=n.get(V);ce.skyColor.copy(V.color).multiplyScalar(K),ce.groundColor.copy(V.groundColor).multiplyScalar(K),o.hemi[_]=ce,_++}}M>0&&(s.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=qe.LTC_FLOAT_1,o.rectAreaLTC2=qe.LTC_FLOAT_2):(o.rectAreaLTC1=qe.LTC_HALF_1,o.rectAreaLTC2=qe.LTC_HALF_2)),o.ambient[0]=S,o.ambient[1]=y,o.ambient[2]=x;const Z=o.hash;(Z.directionalLength!==b||Z.pointLength!==C||Z.spotLength!==L||Z.rectAreaLength!==M||Z.hemiLength!==_||Z.numDirectionalShadows!==F||Z.numPointShadows!==I||Z.numSpotShadows!==P||Z.numSpotMaps!==$||Z.numLightProbes!==z)&&(o.directional.length=b,o.spot.length=L,o.rectArea.length=M,o.point.length=C,o.hemi.length=_,o.directionalShadow.length=F,o.directionalShadowMap.length=F,o.pointShadow.length=I,o.pointShadowMap.length=I,o.spotShadow.length=P,o.spotShadowMap.length=P,o.directionalShadowMatrix.length=F,o.pointShadowMatrix.length=I,o.spotLightMatrix.length=P+$-G,o.spotLightMap.length=$,o.numSpotLightShadowsWithMaps=G,o.numLightProbes=z,Z.directionalLength=b,Z.pointLength=C,Z.spotLength=L,Z.rectAreaLength=M,Z.hemiLength=_,Z.numDirectionalShadows=F,Z.numPointShadows=I,Z.numSpotShadows=P,Z.numSpotMaps=$,Z.numLightProbes=z,o.version=Jz++)}function m(v,S){let y=0,x=0,b=0,C=0,L=0;const M=S.matrixWorldInverse;for(let _=0,F=v.length;_<F;_++){const I=v[_];if(I.isDirectionalLight){const P=o.directional[y];P.direction.setFromMatrixPosition(I.matrixWorld),u.setFromMatrixPosition(I.target.matrixWorld),P.direction.sub(u),P.direction.transformDirection(M),y++}else if(I.isSpotLight){const P=o.spot[b];P.position.setFromMatrixPosition(I.matrixWorld),P.position.applyMatrix4(M),P.direction.setFromMatrixPosition(I.matrixWorld),u.setFromMatrixPosition(I.target.matrixWorld),P.direction.sub(u),P.direction.transformDirection(M),b++}else if(I.isRectAreaLight){const P=o.rectArea[C];P.position.setFromMatrixPosition(I.matrixWorld),P.position.applyMatrix4(M),d.identity(),f.copy(I.matrixWorld),f.premultiply(M),d.extractRotation(f),P.halfWidth.set(I.width*.5,0,0),P.halfHeight.set(0,I.height*.5,0),P.halfWidth.applyMatrix4(d),P.halfHeight.applyMatrix4(d),C++}else if(I.isPointLight){const P=o.point[x];P.position.setFromMatrixPosition(I.matrixWorld),P.position.applyMatrix4(M),x++}else if(I.isHemisphereLight){const P=o.hemi[L];P.direction.setFromMatrixPosition(I.matrixWorld),P.direction.transformDirection(M),L++}}}return{setup:p,setupView:m,state:o}}function $M(s){const n=new tB(s),i=[],o=[];function u(S){v.camera=S,i.length=0,o.length=0}function f(S){i.push(S)}function d(S){o.push(S)}function p(){n.setup(i)}function m(S){n.setupView(i,S)}const v={lightsArray:i,shadowsArray:o,camera:null,lights:n,transmissionRenderTarget:{}};return{init:u,state:v,setupLights:p,setupLightsView:m,pushLight:f,pushShadow:d}}function nB(s){let n=new WeakMap;function i(u,f=0){const d=n.get(u);let p;return d===void 0?(p=new $M(s),n.set(u,[p])):f>=d.length?(p=new $M(s),d.push(p)):p=d[f],p}function o(){n=new WeakMap}return{get:i,dispose:o}}class iB extends af{static get type(){return"MeshDepthMaterial"}constructor(n){super(),this.isMeshDepthMaterial=!0,this.depthPacking=FP,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(n)}copy(n){return super.copy(n),this.depthPacking=n.depthPacking,this.map=n.map,this.alphaMap=n.alphaMap,this.displacementMap=n.displacementMap,this.displacementScale=n.displacementScale,this.displacementBias=n.displacementBias,this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this}}class rB extends af{static get type(){return"MeshDistanceMaterial"}constructor(n){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(n)}copy(n){return super.copy(n),this.map=n.map,this.alphaMap=n.alphaMap,this.displacementMap=n.displacementMap,this.displacementScale=n.displacementScale,this.displacementBias=n.displacementBias,this}}const aB=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oB=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function sB(s,n,i){let o=new Uy;const u=new xn,f=new xn,d=new On,p=new iB({depthPacking:IP}),m=new rB,v={},S=i.maxTextureSize,y={[Lo]:rr,[rr]:Lo,[Wa]:Wa},x=new Uo({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xn},radius:{value:4}},vertexShader:aB,fragmentShader:oB}),b=x.clone();b.defines.HORIZONTAL_PASS=1;const C=new As;C.setAttribute("position",new da(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const L=new Hn(C,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tT;let _=this.type;this.render=function(G,z,Z){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||G.length===0)return;const N=s.getRenderTarget(),D=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),he=s.state;he.setBlending(wo),he.buffers.color.setClear(1,1,1,1),he.buffers.depth.setTest(!0),he.setScissorTest(!1);const K=_!==Ga&&this.type===Ga,Se=_===Ga&&this.type!==Ga;for(let ye=0,ce=G.length;ye<ce;ye++){const fe=G[ye],le=fe.shadow;if(le===void 0){console.warn("THREE.WebGLShadowMap:",fe,"has no shadow.");continue}if(le.autoUpdate===!1&&le.needsUpdate===!1)continue;u.copy(le.mapSize);const Fe=le.getFrameExtents();if(u.multiply(Fe),f.copy(le.mapSize),(u.x>S||u.y>S)&&(u.x>S&&(f.x=Math.floor(S/Fe.x),u.x=f.x*Fe.x,le.mapSize.x=f.x),u.y>S&&(f.y=Math.floor(S/Fe.y),u.y=f.y*Fe.y,le.mapSize.y=f.y)),le.map===null||K===!0||Se===!0){const tt=this.type!==Ga?{minFilter:Kr,magFilter:Kr}:{};le.map!==null&&le.map.dispose(),le.map=new Cs(u.x,u.y,tt),le.map.texture.name=fe.name+".shadowMap",le.camera.updateProjectionMatrix()}s.setRenderTarget(le.map),s.clear();const Ge=le.getViewportCount();for(let tt=0;tt<Ge;tt++){const ft=le.getViewport(tt);d.set(f.x*ft.x,f.y*ft.y,f.x*ft.z,f.y*ft.w),he.viewport(d),le.updateMatrices(fe,tt),o=le.getFrustum(),P(z,Z,le.camera,fe,this.type)}le.isPointLightShadow!==!0&&this.type===Ga&&F(le,Z),le.needsUpdate=!1}_=this.type,M.needsUpdate=!1,s.setRenderTarget(N,D,V)};function F(G,z){const Z=n.update(L);x.defines.VSM_SAMPLES!==G.blurSamples&&(x.defines.VSM_SAMPLES=G.blurSamples,b.defines.VSM_SAMPLES=G.blurSamples,x.needsUpdate=!0,b.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new Cs(u.x,u.y)),x.uniforms.shadow_pass.value=G.map.texture,x.uniforms.resolution.value=G.mapSize,x.uniforms.radius.value=G.radius,s.setRenderTarget(G.mapPass),s.clear(),s.renderBufferDirect(z,null,Z,x,L,null),b.uniforms.shadow_pass.value=G.mapPass.texture,b.uniforms.resolution.value=G.mapSize,b.uniforms.radius.value=G.radius,s.setRenderTarget(G.map),s.clear(),s.renderBufferDirect(z,null,Z,b,L,null)}function I(G,z,Z,N){let D=null;const V=Z.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(V!==void 0)D=V;else if(D=Z.isPointLight===!0?m:p,s.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0){const he=D.uuid,K=z.uuid;let Se=v[he];Se===void 0&&(Se={},v[he]=Se);let ye=Se[K];ye===void 0&&(ye=D.clone(),Se[K]=ye,z.addEventListener("dispose",$)),D=ye}if(D.visible=z.visible,D.wireframe=z.wireframe,N===Ga?D.side=z.shadowSide!==null?z.shadowSide:z.side:D.side=z.shadowSide!==null?z.shadowSide:y[z.side],D.alphaMap=z.alphaMap,D.alphaTest=z.alphaTest,D.map=z.map,D.clipShadows=z.clipShadows,D.clippingPlanes=z.clippingPlanes,D.clipIntersection=z.clipIntersection,D.displacementMap=z.displacementMap,D.displacementScale=z.displacementScale,D.displacementBias=z.displacementBias,D.wireframeLinewidth=z.wireframeLinewidth,D.linewidth=z.linewidth,Z.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const he=s.properties.get(D);he.light=Z}return D}function P(G,z,Z,N,D){if(G.visible===!1)return;if(G.layers.test(z.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&D===Ga)&&(!G.frustumCulled||o.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,G.matrixWorld);const K=n.update(G),Se=G.material;if(Array.isArray(Se)){const ye=K.groups;for(let ce=0,fe=ye.length;ce<fe;ce++){const le=ye[ce],Fe=Se[le.materialIndex];if(Fe&&Fe.visible){const Ge=I(G,Fe,N,D);G.onBeforeShadow(s,G,z,Z,K,Ge,le),s.renderBufferDirect(Z,null,K,Ge,G,le),G.onAfterShadow(s,G,z,Z,K,Ge,le)}}}else if(Se.visible){const ye=I(G,Se,N,D);G.onBeforeShadow(s,G,z,Z,K,ye,null),s.renderBufferDirect(Z,null,K,ye,G,null),G.onAfterShadow(s,G,z,Z,K,ye,null)}}const he=G.children;for(let K=0,Se=he.length;K<Se;K++)P(he[K],z,Z,N,D)}function $(G){G.target.removeEventListener("dispose",$);for(const Z in v){const N=v[Z],D=G.target.uuid;D in N&&(N[D].dispose(),delete N[D])}}}const lB={[I_]:z_,[B_]:V_,[k_]:G_,[ql]:H_,[z_]:I_,[V_]:B_,[G_]:k_,[H_]:ql};function uB(s,n){function i(){let H=!1;const Le=new On;let pe=null;const Me=new On(0,0,0,0);return{setMask:function(ke){pe!==ke&&!H&&(s.colorMask(ke,ke,ke,ke),pe=ke)},setLocked:function(ke){H=ke},setClear:function(ke,We,Lt,vn,Ln){Ln===!0&&(ke*=vn,We*=vn,Lt*=vn),Le.set(ke,We,Lt,vn),Me.equals(Le)===!1&&(s.clearColor(ke,We,Lt,vn),Me.copy(Le))},reset:function(){H=!1,pe=null,Me.set(-1,0,0,0)}}}function o(){let H=!1,Le=!1,pe=null,Me=null,ke=null;return{setReversed:function(We){if(Le!==We){const Lt=n.get("EXT_clip_control");Le?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT);const vn=ke;ke=null,this.setClear(vn)}Le=We},getReversed:function(){return Le},setTest:function(We){We?Ne(s.DEPTH_TEST):rt(s.DEPTH_TEST)},setMask:function(We){pe!==We&&!H&&(s.depthMask(We),pe=We)},setFunc:function(We){if(Le&&(We=lB[We]),Me!==We){switch(We){case I_:s.depthFunc(s.NEVER);break;case z_:s.depthFunc(s.ALWAYS);break;case B_:s.depthFunc(s.LESS);break;case ql:s.depthFunc(s.LEQUAL);break;case k_:s.depthFunc(s.EQUAL);break;case H_:s.depthFunc(s.GEQUAL);break;case V_:s.depthFunc(s.GREATER);break;case G_:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Me=We}},setLocked:function(We){H=We},setClear:function(We){ke!==We&&(Le&&(We=1-We),s.clearDepth(We),ke=We)},reset:function(){H=!1,pe=null,Me=null,ke=null,Le=!1}}}function u(){let H=!1,Le=null,pe=null,Me=null,ke=null,We=null,Lt=null,vn=null,Ln=null;return{setTest:function(Jt){H||(Jt?Ne(s.STENCIL_TEST):rt(s.STENCIL_TEST))},setMask:function(Jt){Le!==Jt&&!H&&(s.stencilMask(Jt),Le=Jt)},setFunc:function(Jt,qn,In){(pe!==Jt||Me!==qn||ke!==In)&&(s.stencilFunc(Jt,qn,In),pe=Jt,Me=qn,ke=In)},setOp:function(Jt,qn,In){(We!==Jt||Lt!==qn||vn!==In)&&(s.stencilOp(Jt,qn,In),We=Jt,Lt=qn,vn=In)},setLocked:function(Jt){H=Jt},setClear:function(Jt){Ln!==Jt&&(s.clearStencil(Jt),Ln=Jt)},reset:function(){H=!1,Le=null,pe=null,Me=null,ke=null,We=null,Lt=null,vn=null,Ln=null}}}const f=new i,d=new o,p=new u,m=new WeakMap,v=new WeakMap;let S={},y={},x=new WeakMap,b=[],C=null,L=!1,M=null,_=null,F=null,I=null,P=null,$=null,G=null,z=new cn(0,0,0),Z=0,N=!1,D=null,V=null,he=null,K=null,Se=null;const ye=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ce=!1,fe=0;const le=s.getParameter(s.VERSION);le.indexOf("WebGL")!==-1?(fe=parseFloat(/^WebGL (\d)/.exec(le)[1]),ce=fe>=1):le.indexOf("OpenGL ES")!==-1&&(fe=parseFloat(/^OpenGL ES (\d)/.exec(le)[1]),ce=fe>=2);let Fe=null,Ge={};const tt=s.getParameter(s.SCISSOR_BOX),ft=s.getParameter(s.VIEWPORT),Ht=new On().fromArray(tt),me=new On().fromArray(ft);function De(H,Le,pe,Me){const ke=new Uint8Array(4),We=s.createTexture();s.bindTexture(H,We),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Lt=0;Lt<pe;Lt++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(Le,0,s.RGBA,1,1,Me,0,s.RGBA,s.UNSIGNED_BYTE,ke):s.texImage2D(Le+Lt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ke);return We}const Je={};Je[s.TEXTURE_2D]=De(s.TEXTURE_2D,s.TEXTURE_2D,1),Je[s.TEXTURE_CUBE_MAP]=De(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Je[s.TEXTURE_2D_ARRAY]=De(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Je[s.TEXTURE_3D]=De(s.TEXTURE_3D,s.TEXTURE_3D,1,1),f.setClear(0,0,0,1),d.setClear(1),p.setClear(0),Ne(s.DEPTH_TEST),d.setFunc(ql),gt(!1),Rt(Qb),Ne(s.CULL_FACE),q(wo);function Ne(H){S[H]!==!0&&(s.enable(H),S[H]=!0)}function rt(H){S[H]!==!1&&(s.disable(H),S[H]=!1)}function st(H,Le){return y[H]!==Le?(s.bindFramebuffer(H,Le),y[H]=Le,H===s.DRAW_FRAMEBUFFER&&(y[s.FRAMEBUFFER]=Le),H===s.FRAMEBUFFER&&(y[s.DRAW_FRAMEBUFFER]=Le),!0):!1}function vt(H,Le){let pe=b,Me=!1;if(H){pe=x.get(Le),pe===void 0&&(pe=[],x.set(Le,pe));const ke=H.textures;if(pe.length!==ke.length||pe[0]!==s.COLOR_ATTACHMENT0){for(let We=0,Lt=ke.length;We<Lt;We++)pe[We]=s.COLOR_ATTACHMENT0+We;pe.length=ke.length,Me=!0}}else pe[0]!==s.BACK&&(pe[0]=s.BACK,Me=!0);Me&&s.drawBuffers(pe)}function zt(H){return C!==H?(s.useProgram(H),C=H,!0):!1}const xt={[xs]:s.FUNC_ADD,[uP]:s.FUNC_SUBTRACT,[cP]:s.FUNC_REVERSE_SUBTRACT};xt[fP]=s.MIN,xt[dP]=s.MAX;const Ft={[hP]:s.ZERO,[pP]:s.ONE,[mP]:s.SRC_COLOR,[O_]:s.SRC_ALPHA,[xP]:s.SRC_ALPHA_SATURATE,[yP]:s.DST_COLOR,[gP]:s.DST_ALPHA,[vP]:s.ONE_MINUS_SRC_COLOR,[F_]:s.ONE_MINUS_SRC_ALPHA,[SP]:s.ONE_MINUS_DST_COLOR,[_P]:s.ONE_MINUS_DST_ALPHA,[EP]:s.CONSTANT_COLOR,[bP]:s.ONE_MINUS_CONSTANT_COLOR,[MP]:s.CONSTANT_ALPHA,[TP]:s.ONE_MINUS_CONSTANT_ALPHA};function q(H,Le,pe,Me,ke,We,Lt,vn,Ln,Jt){if(H===wo){L===!0&&(rt(s.BLEND),L=!1);return}if(L===!1&&(Ne(s.BLEND),L=!0),H!==lP){if(H!==M||Jt!==N){if((_!==xs||P!==xs)&&(s.blendEquation(s.FUNC_ADD),_=xs,P=xs),Jt)switch(H){case Xl:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Jb:s.blendFunc(s.ONE,s.ONE);break;case eM:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case tM:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Xl:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Jb:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case eM:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case tM:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}F=null,I=null,$=null,G=null,z.set(0,0,0),Z=0,M=H,N=Jt}return}ke=ke||Le,We=We||pe,Lt=Lt||Me,(Le!==_||ke!==P)&&(s.blendEquationSeparate(xt[Le],xt[ke]),_=Le,P=ke),(pe!==F||Me!==I||We!==$||Lt!==G)&&(s.blendFuncSeparate(Ft[pe],Ft[Me],Ft[We],Ft[Lt]),F=pe,I=Me,$=We,G=Lt),(vn.equals(z)===!1||Ln!==Z)&&(s.blendColor(vn.r,vn.g,vn.b,Ln),z.copy(vn),Z=Ln),M=H,N=!1}function an(H,Le){H.side===Wa?rt(s.CULL_FACE):Ne(s.CULL_FACE);let pe=H.side===rr;Le&&(pe=!pe),gt(pe),H.blending===Xl&&H.transparent===!1?q(wo):q(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),d.setFunc(H.depthFunc),d.setTest(H.depthTest),d.setMask(H.depthWrite),f.setMask(H.colorWrite);const Me=H.stencilWrite;p.setTest(Me),Me&&(p.setMask(H.stencilWriteMask),p.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),p.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Gt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?Ne(s.SAMPLE_ALPHA_TO_COVERAGE):rt(s.SAMPLE_ALPHA_TO_COVERAGE)}function gt(H){D!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),D=H)}function Rt(H){H!==oP?(Ne(s.CULL_FACE),H!==V&&(H===Qb?s.cullFace(s.BACK):H===sP?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):rt(s.CULL_FACE),V=H}function ut(H){H!==he&&(ce&&s.lineWidth(H),he=H)}function Gt(H,Le,pe){H?(Ne(s.POLYGON_OFFSET_FILL),(K!==Le||Se!==pe)&&(s.polygonOffset(Le,pe),K=Le,Se=pe)):rt(s.POLYGON_OFFSET_FILL)}function nt(H){H?Ne(s.SCISSOR_TEST):rt(s.SCISSOR_TEST)}function O(H){H===void 0&&(H=s.TEXTURE0+ye-1),Fe!==H&&(s.activeTexture(H),Fe=H)}function R(H,Le,pe){pe===void 0&&(Fe===null?pe=s.TEXTURE0+ye-1:pe=Fe);let Me=Ge[pe];Me===void 0&&(Me={type:void 0,texture:void 0},Ge[pe]=Me),(Me.type!==H||Me.texture!==Le)&&(Fe!==pe&&(s.activeTexture(pe),Fe=pe),s.bindTexture(H,Le||Je[H]),Me.type=H,Me.texture=Le)}function Q(){const H=Ge[Fe];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Ee(){try{s.compressedTexImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ue(){try{s.compressedTexImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function se(){try{s.texSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function je(){try{s.texSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Pe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ze(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function xe(){try{s.texStorage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function te(){try{s.texStorage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Te(){try{s.texImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Be(){try{s.texImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ke(H){Ht.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),Ht.copy(H))}function Oe(H){me.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),me.copy(H))}function ct(H,Le){let pe=v.get(Le);pe===void 0&&(pe=new WeakMap,v.set(Le,pe));let Me=pe.get(H);Me===void 0&&(Me=s.getUniformBlockIndex(Le,H.name),pe.set(H,Me))}function pt(H,Le){const Me=v.get(Le).get(H);m.get(Le)!==Me&&(s.uniformBlockBinding(Le,Me,H.__bindingPointIndex),m.set(Le,Me))}function Ct(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),S={},Fe=null,Ge={},y={},x=new WeakMap,b=[],C=null,L=!1,M=null,_=null,F=null,I=null,P=null,$=null,G=null,z=new cn(0,0,0),Z=0,N=!1,D=null,V=null,he=null,K=null,Se=null,Ht.set(0,0,s.canvas.width,s.canvas.height),me.set(0,0,s.canvas.width,s.canvas.height),f.reset(),d.reset(),p.reset()}return{buffers:{color:f,depth:d,stencil:p},enable:Ne,disable:rt,bindFramebuffer:st,drawBuffers:vt,useProgram:zt,setBlending:q,setMaterial:an,setFlipSided:gt,setCullFace:Rt,setLineWidth:ut,setPolygonOffset:Gt,setScissorTest:nt,activeTexture:O,bindTexture:R,unbindTexture:Q,compressedTexImage2D:Ee,compressedTexImage3D:ue,texImage2D:Te,texImage3D:Be,updateUBOMapping:ct,uniformBlockBinding:pt,texStorage2D:xe,texStorage3D:te,texSubImage2D:se,texSubImage3D:je,compressedTexSubImage2D:Pe,compressedTexSubImage3D:ze,scissor:Ke,viewport:Oe,reset:Ct}}function KM(s,n,i,o){const u=cB(o);switch(i){case lT:return s*n;case cT:return s*n;case fT:return s*n*2;case dT:return s*n/u.components*u.byteLength;case Cy:return s*n/u.components*u.byteLength;case hT:return s*n*2/u.components*u.byteLength;case Ay:return s*n*2/u.components*u.byteLength;case uT:return s*n*3/u.components*u.byteLength;case $r:return s*n*4/u.components*u.byteLength;case wy:return s*n*4/u.components*u.byteLength;case Oh:case Fh:return Math.floor((s+3)/4)*Math.floor((n+3)/4)*8;case Ih:case zh:return Math.floor((s+3)/4)*Math.floor((n+3)/4)*16;case $_:case Z_:return Math.max(s,16)*Math.max(n,8)/4;case q_:case K_:return Math.max(s,8)*Math.max(n,8)/2;case Q_:case J_:return Math.floor((s+3)/4)*Math.floor((n+3)/4)*8;case ey:return Math.floor((s+3)/4)*Math.floor((n+3)/4)*16;case ty:return Math.floor((s+3)/4)*Math.floor((n+3)/4)*16;case ny:return Math.floor((s+4)/5)*Math.floor((n+3)/4)*16;case iy:return Math.floor((s+4)/5)*Math.floor((n+4)/5)*16;case ry:return Math.floor((s+5)/6)*Math.floor((n+4)/5)*16;case ay:return Math.floor((s+5)/6)*Math.floor((n+5)/6)*16;case oy:return Math.floor((s+7)/8)*Math.floor((n+4)/5)*16;case sy:return Math.floor((s+7)/8)*Math.floor((n+5)/6)*16;case ly:return Math.floor((s+7)/8)*Math.floor((n+7)/8)*16;case uy:return Math.floor((s+9)/10)*Math.floor((n+4)/5)*16;case cy:return Math.floor((s+9)/10)*Math.floor((n+5)/6)*16;case fy:return Math.floor((s+9)/10)*Math.floor((n+7)/8)*16;case dy:return Math.floor((s+9)/10)*Math.floor((n+9)/10)*16;case hy:return Math.floor((s+11)/12)*Math.floor((n+9)/10)*16;case py:return Math.floor((s+11)/12)*Math.floor((n+11)/12)*16;case Bh:case my:case vy:return Math.ceil(s/4)*Math.ceil(n/4)*16;case pT:case gy:return Math.ceil(s/4)*Math.ceil(n/4)*8;case _y:case yy:return Math.ceil(s/4)*Math.ceil(n/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function cB(s){switch(s){case qa:case aT:return{byteLength:1,components:1};case Jc:case oT:case tf:return{byteLength:2,components:1};case Ty:case Ry:return{byteLength:2,components:4};case Rs:case My:case Xa:return{byteLength:4,components:1};case sT:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function fB(s,n,i,o,u,f,d){const p=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new xn,S=new WeakMap;let y;const x=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(O,R){return b?new OffscreenCanvas(O,R):Wh("canvas")}function L(O,R,Q){let Ee=1;const ue=nt(O);if((ue.width>Q||ue.height>Q)&&(Ee=Q/Math.max(ue.width,ue.height)),Ee<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const se=Math.floor(Ee*ue.width),je=Math.floor(Ee*ue.height);y===void 0&&(y=C(se,je));const Pe=R?C(se,je):y;return Pe.width=se,Pe.height=je,Pe.getContext("2d").drawImage(O,0,0,se,je),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+se+"x"+je+")."),Pe}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),O;return O}function M(O){return O.generateMipmaps}function _(O){s.generateMipmap(O)}function F(O){return O.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?s.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function I(O,R,Q,Ee,ue=!1){if(O!==null){if(s[O]!==void 0)return s[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let se=R;if(R===s.RED&&(Q===s.FLOAT&&(se=s.R32F),Q===s.HALF_FLOAT&&(se=s.R16F),Q===s.UNSIGNED_BYTE&&(se=s.R8)),R===s.RED_INTEGER&&(Q===s.UNSIGNED_BYTE&&(se=s.R8UI),Q===s.UNSIGNED_SHORT&&(se=s.R16UI),Q===s.UNSIGNED_INT&&(se=s.R32UI),Q===s.BYTE&&(se=s.R8I),Q===s.SHORT&&(se=s.R16I),Q===s.INT&&(se=s.R32I)),R===s.RG&&(Q===s.FLOAT&&(se=s.RG32F),Q===s.HALF_FLOAT&&(se=s.RG16F),Q===s.UNSIGNED_BYTE&&(se=s.RG8)),R===s.RG_INTEGER&&(Q===s.UNSIGNED_BYTE&&(se=s.RG8UI),Q===s.UNSIGNED_SHORT&&(se=s.RG16UI),Q===s.UNSIGNED_INT&&(se=s.RG32UI),Q===s.BYTE&&(se=s.RG8I),Q===s.SHORT&&(se=s.RG16I),Q===s.INT&&(se=s.RG32I)),R===s.RGB_INTEGER&&(Q===s.UNSIGNED_BYTE&&(se=s.RGB8UI),Q===s.UNSIGNED_SHORT&&(se=s.RGB16UI),Q===s.UNSIGNED_INT&&(se=s.RGB32UI),Q===s.BYTE&&(se=s.RGB8I),Q===s.SHORT&&(se=s.RGB16I),Q===s.INT&&(se=s.RGB32I)),R===s.RGBA_INTEGER&&(Q===s.UNSIGNED_BYTE&&(se=s.RGBA8UI),Q===s.UNSIGNED_SHORT&&(se=s.RGBA16UI),Q===s.UNSIGNED_INT&&(se=s.RGBA32UI),Q===s.BYTE&&(se=s.RGBA8I),Q===s.SHORT&&(se=s.RGBA16I),Q===s.INT&&(se=s.RGBA32I)),R===s.RGB&&Q===s.UNSIGNED_INT_5_9_9_9_REV&&(se=s.RGB9_E5),R===s.RGBA){const je=ue?jh:un.getTransfer(Ee);Q===s.FLOAT&&(se=s.RGBA32F),Q===s.HALF_FLOAT&&(se=s.RGBA16F),Q===s.UNSIGNED_BYTE&&(se=je===En?s.SRGB8_ALPHA8:s.RGBA8),Q===s.UNSIGNED_SHORT_4_4_4_4&&(se=s.RGBA4),Q===s.UNSIGNED_SHORT_5_5_5_1&&(se=s.RGB5_A1)}return(se===s.R16F||se===s.R32F||se===s.RG16F||se===s.RG32F||se===s.RGBA16F||se===s.RGBA32F)&&n.get("EXT_color_buffer_float"),se}function P(O,R){let Q;return O?R===null||R===Rs||R===Zl?Q=s.DEPTH24_STENCIL8:R===Xa?Q=s.DEPTH32F_STENCIL8:R===Jc&&(Q=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===Rs||R===Zl?Q=s.DEPTH_COMPONENT24:R===Xa?Q=s.DEPTH_COMPONENT32F:R===Jc&&(Q=s.DEPTH_COMPONENT16),Q}function $(O,R){return M(O)===!0||O.isFramebufferTexture&&O.minFilter!==Kr&&O.minFilter!==fa?Math.log2(Math.max(R.width,R.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?R.mipmaps.length:1}function G(O){const R=O.target;R.removeEventListener("dispose",G),Z(R),R.isVideoTexture&&S.delete(R)}function z(O){const R=O.target;R.removeEventListener("dispose",z),D(R)}function Z(O){const R=o.get(O);if(R.__webglInit===void 0)return;const Q=O.source,Ee=x.get(Q);if(Ee){const ue=Ee[R.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&N(O),Object.keys(Ee).length===0&&x.delete(Q)}o.remove(O)}function N(O){const R=o.get(O);s.deleteTexture(R.__webglTexture);const Q=O.source,Ee=x.get(Q);delete Ee[R.__cacheKey],d.memory.textures--}function D(O){const R=o.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),o.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let Ee=0;Ee<6;Ee++){if(Array.isArray(R.__webglFramebuffer[Ee]))for(let ue=0;ue<R.__webglFramebuffer[Ee].length;ue++)s.deleteFramebuffer(R.__webglFramebuffer[Ee][ue]);else s.deleteFramebuffer(R.__webglFramebuffer[Ee]);R.__webglDepthbuffer&&s.deleteRenderbuffer(R.__webglDepthbuffer[Ee])}else{if(Array.isArray(R.__webglFramebuffer))for(let Ee=0;Ee<R.__webglFramebuffer.length;Ee++)s.deleteFramebuffer(R.__webglFramebuffer[Ee]);else s.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&s.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&s.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let Ee=0;Ee<R.__webglColorRenderbuffer.length;Ee++)R.__webglColorRenderbuffer[Ee]&&s.deleteRenderbuffer(R.__webglColorRenderbuffer[Ee]);R.__webglDepthRenderbuffer&&s.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const Q=O.textures;for(let Ee=0,ue=Q.length;Ee<ue;Ee++){const se=o.get(Q[Ee]);se.__webglTexture&&(s.deleteTexture(se.__webglTexture),d.memory.textures--),o.remove(Q[Ee])}o.remove(O)}let V=0;function he(){V=0}function K(){const O=V;return O>=u.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+u.maxTextures),V+=1,O}function Se(O){const R=[];return R.push(O.wrapS),R.push(O.wrapT),R.push(O.wrapR||0),R.push(O.magFilter),R.push(O.minFilter),R.push(O.anisotropy),R.push(O.internalFormat),R.push(O.format),R.push(O.type),R.push(O.generateMipmaps),R.push(O.premultiplyAlpha),R.push(O.flipY),R.push(O.unpackAlignment),R.push(O.colorSpace),R.join()}function ye(O,R){const Q=o.get(O);if(O.isVideoTexture&&ut(O),O.isRenderTargetTexture===!1&&O.version>0&&Q.__version!==O.version){const Ee=O.image;if(Ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(Q,O,R);return}}i.bindTexture(s.TEXTURE_2D,Q.__webglTexture,s.TEXTURE0+R)}function ce(O,R){const Q=o.get(O);if(O.version>0&&Q.__version!==O.version){me(Q,O,R);return}i.bindTexture(s.TEXTURE_2D_ARRAY,Q.__webglTexture,s.TEXTURE0+R)}function fe(O,R){const Q=o.get(O);if(O.version>0&&Q.__version!==O.version){me(Q,O,R);return}i.bindTexture(s.TEXTURE_3D,Q.__webglTexture,s.TEXTURE0+R)}function le(O,R){const Q=o.get(O);if(O.version>0&&Q.__version!==O.version){De(Q,O,R);return}i.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture,s.TEXTURE0+R)}const Fe={[j_]:s.REPEAT,[bs]:s.CLAMP_TO_EDGE,[Y_]:s.MIRRORED_REPEAT},Ge={[Kr]:s.NEAREST,[OP]:s.NEAREST_MIPMAP_NEAREST,[ph]:s.NEAREST_MIPMAP_LINEAR,[fa]:s.LINEAR,[o_]:s.LINEAR_MIPMAP_NEAREST,[Ms]:s.LINEAR_MIPMAP_LINEAR},tt={[BP]:s.NEVER,[XP]:s.ALWAYS,[kP]:s.LESS,[vT]:s.LEQUAL,[HP]:s.EQUAL,[WP]:s.GEQUAL,[VP]:s.GREATER,[GP]:s.NOTEQUAL};function ft(O,R){if(R.type===Xa&&n.has("OES_texture_float_linear")===!1&&(R.magFilter===fa||R.magFilter===o_||R.magFilter===ph||R.magFilter===Ms||R.minFilter===fa||R.minFilter===o_||R.minFilter===ph||R.minFilter===Ms)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(O,s.TEXTURE_WRAP_S,Fe[R.wrapS]),s.texParameteri(O,s.TEXTURE_WRAP_T,Fe[R.wrapT]),(O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY)&&s.texParameteri(O,s.TEXTURE_WRAP_R,Fe[R.wrapR]),s.texParameteri(O,s.TEXTURE_MAG_FILTER,Ge[R.magFilter]),s.texParameteri(O,s.TEXTURE_MIN_FILTER,Ge[R.minFilter]),R.compareFunction&&(s.texParameteri(O,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(O,s.TEXTURE_COMPARE_FUNC,tt[R.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Kr||R.minFilter!==ph&&R.minFilter!==Ms||R.type===Xa&&n.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||o.get(R).__currentAnisotropy){const Q=n.get("EXT_texture_filter_anisotropic");s.texParameterf(O,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,u.getMaxAnisotropy())),o.get(R).__currentAnisotropy=R.anisotropy}}}function Ht(O,R){let Q=!1;O.__webglInit===void 0&&(O.__webglInit=!0,R.addEventListener("dispose",G));const Ee=R.source;let ue=x.get(Ee);ue===void 0&&(ue={},x.set(Ee,ue));const se=Se(R);if(se!==O.__cacheKey){ue[se]===void 0&&(ue[se]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,Q=!0),ue[se].usedTimes++;const je=ue[O.__cacheKey];je!==void 0&&(ue[O.__cacheKey].usedTimes--,je.usedTimes===0&&N(R)),O.__cacheKey=se,O.__webglTexture=ue[se].texture}return Q}function me(O,R,Q){let Ee=s.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(Ee=s.TEXTURE_2D_ARRAY),R.isData3DTexture&&(Ee=s.TEXTURE_3D);const ue=Ht(O,R),se=R.source;i.bindTexture(Ee,O.__webglTexture,s.TEXTURE0+Q);const je=o.get(se);if(se.version!==je.__version||ue===!0){i.activeTexture(s.TEXTURE0+Q);const Pe=un.getPrimaries(un.workingColorSpace),ze=R.colorSpace===Ao?null:un.getPrimaries(R.colorSpace),xe=R.colorSpace===Ao||Pe===ze?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,R.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,R.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let te=L(R.image,!1,u.maxTextureSize);te=Gt(R,te);const Te=f.convert(R.format,R.colorSpace),Be=f.convert(R.type);let Ke=I(R.internalFormat,Te,Be,R.colorSpace,R.isVideoTexture);ft(Ee,R);let Oe;const ct=R.mipmaps,pt=R.isVideoTexture!==!0,Ct=je.__version===void 0||ue===!0,H=se.dataReady,Le=$(R,te);if(R.isDepthTexture)Ke=P(R.format===Ql,R.type),Ct&&(pt?i.texStorage2D(s.TEXTURE_2D,1,Ke,te.width,te.height):i.texImage2D(s.TEXTURE_2D,0,Ke,te.width,te.height,0,Te,Be,null));else if(R.isDataTexture)if(ct.length>0){pt&&Ct&&i.texStorage2D(s.TEXTURE_2D,Le,Ke,ct[0].width,ct[0].height);for(let pe=0,Me=ct.length;pe<Me;pe++)Oe=ct[pe],pt?H&&i.texSubImage2D(s.TEXTURE_2D,pe,0,0,Oe.width,Oe.height,Te,Be,Oe.data):i.texImage2D(s.TEXTURE_2D,pe,Ke,Oe.width,Oe.height,0,Te,Be,Oe.data);R.generateMipmaps=!1}else pt?(Ct&&i.texStorage2D(s.TEXTURE_2D,Le,Ke,te.width,te.height),H&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,te.width,te.height,Te,Be,te.data)):i.texImage2D(s.TEXTURE_2D,0,Ke,te.width,te.height,0,Te,Be,te.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){pt&&Ct&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Le,Ke,ct[0].width,ct[0].height,te.depth);for(let pe=0,Me=ct.length;pe<Me;pe++)if(Oe=ct[pe],R.format!==$r)if(Te!==null)if(pt){if(H)if(R.layerUpdates.size>0){const ke=KM(Oe.width,Oe.height,R.format,R.type);for(const We of R.layerUpdates){const Lt=Oe.data.subarray(We*ke/Oe.data.BYTES_PER_ELEMENT,(We+1)*ke/Oe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,pe,0,0,We,Oe.width,Oe.height,1,Te,Lt)}R.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,pe,0,0,0,Oe.width,Oe.height,te.depth,Te,Oe.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,pe,Ke,Oe.width,Oe.height,te.depth,0,Oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else pt?H&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,pe,0,0,0,Oe.width,Oe.height,te.depth,Te,Be,Oe.data):i.texImage3D(s.TEXTURE_2D_ARRAY,pe,Ke,Oe.width,Oe.height,te.depth,0,Te,Be,Oe.data)}else{pt&&Ct&&i.texStorage2D(s.TEXTURE_2D,Le,Ke,ct[0].width,ct[0].height);for(let pe=0,Me=ct.length;pe<Me;pe++)Oe=ct[pe],R.format!==$r?Te!==null?pt?H&&i.compressedTexSubImage2D(s.TEXTURE_2D,pe,0,0,Oe.width,Oe.height,Te,Oe.data):i.compressedTexImage2D(s.TEXTURE_2D,pe,Ke,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pt?H&&i.texSubImage2D(s.TEXTURE_2D,pe,0,0,Oe.width,Oe.height,Te,Be,Oe.data):i.texImage2D(s.TEXTURE_2D,pe,Ke,Oe.width,Oe.height,0,Te,Be,Oe.data)}else if(R.isDataArrayTexture)if(pt){if(Ct&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Le,Ke,te.width,te.height,te.depth),H)if(R.layerUpdates.size>0){const pe=KM(te.width,te.height,R.format,R.type);for(const Me of R.layerUpdates){const ke=te.data.subarray(Me*pe/te.data.BYTES_PER_ELEMENT,(Me+1)*pe/te.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Me,te.width,te.height,1,Te,Be,ke)}R.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,Te,Be,te.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Ke,te.width,te.height,te.depth,0,Te,Be,te.data);else if(R.isData3DTexture)pt?(Ct&&i.texStorage3D(s.TEXTURE_3D,Le,Ke,te.width,te.height,te.depth),H&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,Te,Be,te.data)):i.texImage3D(s.TEXTURE_3D,0,Ke,te.width,te.height,te.depth,0,Te,Be,te.data);else if(R.isFramebufferTexture){if(Ct)if(pt)i.texStorage2D(s.TEXTURE_2D,Le,Ke,te.width,te.height);else{let pe=te.width,Me=te.height;for(let ke=0;ke<Le;ke++)i.texImage2D(s.TEXTURE_2D,ke,Ke,pe,Me,0,Te,Be,null),pe>>=1,Me>>=1}}else if(ct.length>0){if(pt&&Ct){const pe=nt(ct[0]);i.texStorage2D(s.TEXTURE_2D,Le,Ke,pe.width,pe.height)}for(let pe=0,Me=ct.length;pe<Me;pe++)Oe=ct[pe],pt?H&&i.texSubImage2D(s.TEXTURE_2D,pe,0,0,Te,Be,Oe):i.texImage2D(s.TEXTURE_2D,pe,Ke,Te,Be,Oe);R.generateMipmaps=!1}else if(pt){if(Ct){const pe=nt(te);i.texStorage2D(s.TEXTURE_2D,Le,Ke,pe.width,pe.height)}H&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Te,Be,te)}else i.texImage2D(s.TEXTURE_2D,0,Ke,Te,Be,te);M(R)&&_(Ee),je.__version=se.version,R.onUpdate&&R.onUpdate(R)}O.__version=R.version}function De(O,R,Q){if(R.image.length!==6)return;const Ee=Ht(O,R),ue=R.source;i.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+Q);const se=o.get(ue);if(ue.version!==se.__version||Ee===!0){i.activeTexture(s.TEXTURE0+Q);const je=un.getPrimaries(un.workingColorSpace),Pe=R.colorSpace===Ao?null:un.getPrimaries(R.colorSpace),ze=R.colorSpace===Ao||je===Pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,R.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,R.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);const xe=R.isCompressedTexture||R.image[0].isCompressedTexture,te=R.image[0]&&R.image[0].isDataTexture,Te=[];for(let Me=0;Me<6;Me++)!xe&&!te?Te[Me]=L(R.image[Me],!0,u.maxCubemapSize):Te[Me]=te?R.image[Me].image:R.image[Me],Te[Me]=Gt(R,Te[Me]);const Be=Te[0],Ke=f.convert(R.format,R.colorSpace),Oe=f.convert(R.type),ct=I(R.internalFormat,Ke,Oe,R.colorSpace),pt=R.isVideoTexture!==!0,Ct=se.__version===void 0||Ee===!0,H=ue.dataReady;let Le=$(R,Be);ft(s.TEXTURE_CUBE_MAP,R);let pe;if(xe){pt&&Ct&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Le,ct,Be.width,Be.height);for(let Me=0;Me<6;Me++){pe=Te[Me].mipmaps;for(let ke=0;ke<pe.length;ke++){const We=pe[ke];R.format!==$r?Ke!==null?pt?H&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ke,0,0,We.width,We.height,Ke,We.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ke,ct,We.width,We.height,0,We.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):pt?H&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ke,0,0,We.width,We.height,Ke,Oe,We.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ke,ct,We.width,We.height,0,Ke,Oe,We.data)}}}else{if(pe=R.mipmaps,pt&&Ct){pe.length>0&&Le++;const Me=nt(Te[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Le,ct,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(te){pt?H&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Te[Me].width,Te[Me].height,Ke,Oe,Te[Me].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ct,Te[Me].width,Te[Me].height,0,Ke,Oe,Te[Me].data);for(let ke=0;ke<pe.length;ke++){const Lt=pe[ke].image[Me].image;pt?H&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ke+1,0,0,Lt.width,Lt.height,Ke,Oe,Lt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ke+1,ct,Lt.width,Lt.height,0,Ke,Oe,Lt.data)}}else{pt?H&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Ke,Oe,Te[Me]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ct,Ke,Oe,Te[Me]);for(let ke=0;ke<pe.length;ke++){const We=pe[ke];pt?H&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ke+1,0,0,Ke,Oe,We.image[Me]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ke+1,ct,Ke,Oe,We.image[Me])}}}M(R)&&_(s.TEXTURE_CUBE_MAP),se.__version=ue.version,R.onUpdate&&R.onUpdate(R)}O.__version=R.version}function Je(O,R,Q,Ee,ue,se){const je=f.convert(Q.format,Q.colorSpace),Pe=f.convert(Q.type),ze=I(Q.internalFormat,je,Pe,Q.colorSpace),xe=o.get(R),te=o.get(Q);if(te.__renderTarget=R,!xe.__hasExternalTextures){const Te=Math.max(1,R.width>>se),Be=Math.max(1,R.height>>se);ue===s.TEXTURE_3D||ue===s.TEXTURE_2D_ARRAY?i.texImage3D(ue,se,ze,Te,Be,R.depth,0,je,Pe,null):i.texImage2D(ue,se,ze,Te,Be,0,je,Pe,null)}i.bindFramebuffer(s.FRAMEBUFFER,O),Rt(R)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ee,ue,te.__webglTexture,0,gt(R)):(ue===s.TEXTURE_2D||ue>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Ee,ue,te.__webglTexture,se),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Ne(O,R,Q){if(s.bindRenderbuffer(s.RENDERBUFFER,O),R.depthBuffer){const Ee=R.depthTexture,ue=Ee&&Ee.isDepthTexture?Ee.type:null,se=P(R.stencilBuffer,ue),je=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Pe=gt(R);Rt(R)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Pe,se,R.width,R.height):Q?s.renderbufferStorageMultisample(s.RENDERBUFFER,Pe,se,R.width,R.height):s.renderbufferStorage(s.RENDERBUFFER,se,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,je,s.RENDERBUFFER,O)}else{const Ee=R.textures;for(let ue=0;ue<Ee.length;ue++){const se=Ee[ue],je=f.convert(se.format,se.colorSpace),Pe=f.convert(se.type),ze=I(se.internalFormat,je,Pe,se.colorSpace),xe=gt(R);Q&&Rt(R)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,xe,ze,R.width,R.height):Rt(R)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,xe,ze,R.width,R.height):s.renderbufferStorage(s.RENDERBUFFER,ze,R.width,R.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function rt(O,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,O),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Ee=o.get(R.depthTexture);Ee.__renderTarget=R,(!Ee.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),ye(R.depthTexture,0);const ue=Ee.__webglTexture,se=gt(R);if(R.depthTexture.format===jl)Rt(R)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ue,0,se):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ue,0);else if(R.depthTexture.format===Ql)Rt(R)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ue,0,se):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ue,0);else throw new Error("Unknown depthTexture format")}function st(O){const R=o.get(O),Q=O.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==O.depthTexture){const Ee=O.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),Ee){const ue=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,Ee.removeEventListener("dispose",ue)};Ee.addEventListener("dispose",ue),R.__depthDisposeCallback=ue}R.__boundDepthTexture=Ee}if(O.depthTexture&&!R.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");rt(R.__webglFramebuffer,O)}else if(Q){R.__webglDepthbuffer=[];for(let Ee=0;Ee<6;Ee++)if(i.bindFramebuffer(s.FRAMEBUFFER,R.__webglFramebuffer[Ee]),R.__webglDepthbuffer[Ee]===void 0)R.__webglDepthbuffer[Ee]=s.createRenderbuffer(),Ne(R.__webglDepthbuffer[Ee],O,!1);else{const ue=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,se=R.__webglDepthbuffer[Ee];s.bindRenderbuffer(s.RENDERBUFFER,se),s.framebufferRenderbuffer(s.FRAMEBUFFER,ue,s.RENDERBUFFER,se)}}else if(i.bindFramebuffer(s.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=s.createRenderbuffer(),Ne(R.__webglDepthbuffer,O,!1);else{const Ee=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=R.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ee,s.RENDERBUFFER,ue)}i.bindFramebuffer(s.FRAMEBUFFER,null)}function vt(O,R,Q){const Ee=o.get(O);R!==void 0&&Je(Ee.__webglFramebuffer,O,O.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Q!==void 0&&st(O)}function zt(O){const R=O.texture,Q=o.get(O),Ee=o.get(R);O.addEventListener("dispose",z);const ue=O.textures,se=O.isWebGLCubeRenderTarget===!0,je=ue.length>1;if(je||(Ee.__webglTexture===void 0&&(Ee.__webglTexture=s.createTexture()),Ee.__version=R.version,d.memory.textures++),se){Q.__webglFramebuffer=[];for(let Pe=0;Pe<6;Pe++)if(R.mipmaps&&R.mipmaps.length>0){Q.__webglFramebuffer[Pe]=[];for(let ze=0;ze<R.mipmaps.length;ze++)Q.__webglFramebuffer[Pe][ze]=s.createFramebuffer()}else Q.__webglFramebuffer[Pe]=s.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Pe=0;Pe<R.mipmaps.length;Pe++)Q.__webglFramebuffer[Pe]=s.createFramebuffer()}else Q.__webglFramebuffer=s.createFramebuffer();if(je)for(let Pe=0,ze=ue.length;Pe<ze;Pe++){const xe=o.get(ue[Pe]);xe.__webglTexture===void 0&&(xe.__webglTexture=s.createTexture(),d.memory.textures++)}if(O.samples>0&&Rt(O)===!1){Q.__webglMultisampledFramebuffer=s.createFramebuffer(),Q.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Pe=0;Pe<ue.length;Pe++){const ze=ue[Pe];Q.__webglColorRenderbuffer[Pe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Q.__webglColorRenderbuffer[Pe]);const xe=f.convert(ze.format,ze.colorSpace),te=f.convert(ze.type),Te=I(ze.internalFormat,xe,te,ze.colorSpace,O.isXRRenderTarget===!0),Be=gt(O);s.renderbufferStorageMultisample(s.RENDERBUFFER,Be,Te,O.width,O.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.RENDERBUFFER,Q.__webglColorRenderbuffer[Pe])}s.bindRenderbuffer(s.RENDERBUFFER,null),O.depthBuffer&&(Q.__webglDepthRenderbuffer=s.createRenderbuffer(),Ne(Q.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(se){i.bindTexture(s.TEXTURE_CUBE_MAP,Ee.__webglTexture),ft(s.TEXTURE_CUBE_MAP,R);for(let Pe=0;Pe<6;Pe++)if(R.mipmaps&&R.mipmaps.length>0)for(let ze=0;ze<R.mipmaps.length;ze++)Je(Q.__webglFramebuffer[Pe][ze],O,R,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,ze);else Je(Q.__webglFramebuffer[Pe],O,R,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0);M(R)&&_(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(je){for(let Pe=0,ze=ue.length;Pe<ze;Pe++){const xe=ue[Pe],te=o.get(xe);i.bindTexture(s.TEXTURE_2D,te.__webglTexture),ft(s.TEXTURE_2D,xe),Je(Q.__webglFramebuffer,O,xe,s.COLOR_ATTACHMENT0+Pe,s.TEXTURE_2D,0),M(xe)&&_(s.TEXTURE_2D)}i.unbindTexture()}else{let Pe=s.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Pe=O.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Pe,Ee.__webglTexture),ft(Pe,R),R.mipmaps&&R.mipmaps.length>0)for(let ze=0;ze<R.mipmaps.length;ze++)Je(Q.__webglFramebuffer[ze],O,R,s.COLOR_ATTACHMENT0,Pe,ze);else Je(Q.__webglFramebuffer,O,R,s.COLOR_ATTACHMENT0,Pe,0);M(R)&&_(Pe),i.unbindTexture()}O.depthBuffer&&st(O)}function xt(O){const R=O.textures;for(let Q=0,Ee=R.length;Q<Ee;Q++){const ue=R[Q];if(M(ue)){const se=F(O),je=o.get(ue).__webglTexture;i.bindTexture(se,je),_(se),i.unbindTexture()}}}const Ft=[],q=[];function an(O){if(O.samples>0){if(Rt(O)===!1){const R=O.textures,Q=O.width,Ee=O.height;let ue=s.COLOR_BUFFER_BIT;const se=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,je=o.get(O),Pe=R.length>1;if(Pe)for(let ze=0;ze<R.length;ze++)i.bindFramebuffer(s.FRAMEBUFFER,je.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,je.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,je.__webglMultisampledFramebuffer),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,je.__webglFramebuffer);for(let ze=0;ze<R.length;ze++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(ue|=s.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(ue|=s.STENCIL_BUFFER_BIT)),Pe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,je.__webglColorRenderbuffer[ze]);const xe=o.get(R[ze]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,xe,0)}s.blitFramebuffer(0,0,Q,Ee,0,0,Q,Ee,ue,s.NEAREST),m===!0&&(Ft.length=0,q.length=0,Ft.push(s.COLOR_ATTACHMENT0+ze),O.depthBuffer&&O.resolveDepthBuffer===!1&&(Ft.push(se),q.push(se),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,q)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ft))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Pe)for(let ze=0;ze<R.length;ze++){i.bindFramebuffer(s.FRAMEBUFFER,je.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.RENDERBUFFER,je.__webglColorRenderbuffer[ze]);const xe=o.get(R[ze]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,je.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.TEXTURE_2D,xe,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,je.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const R=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[R])}}}function gt(O){return Math.min(u.maxSamples,O.samples)}function Rt(O){const R=o.get(O);return O.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function ut(O){const R=d.render.frame;S.get(O)!==R&&(S.set(O,R),O.update())}function Gt(O,R){const Q=O.colorSpace,Ee=O.format,ue=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||Q!==tu&&Q!==Ao&&(un.getTransfer(Q)===En?(Ee!==$r||ue!==qa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),R}function nt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(v.width=O.naturalWidth||O.width,v.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(v.width=O.displayWidth,v.height=O.displayHeight):(v.width=O.width,v.height=O.height),v}this.allocateTextureUnit=K,this.resetTextureUnits=he,this.setTexture2D=ye,this.setTexture2DArray=ce,this.setTexture3D=fe,this.setTextureCube=le,this.rebindTextures=vt,this.setupRenderTarget=zt,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=an,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=Je,this.useMultisampledRTT=Rt}function dB(s,n){function i(o,u=Ao){let f;const d=un.getTransfer(u);if(o===qa)return s.UNSIGNED_BYTE;if(o===Ty)return s.UNSIGNED_SHORT_4_4_4_4;if(o===Ry)return s.UNSIGNED_SHORT_5_5_5_1;if(o===sT)return s.UNSIGNED_INT_5_9_9_9_REV;if(o===aT)return s.BYTE;if(o===oT)return s.SHORT;if(o===Jc)return s.UNSIGNED_SHORT;if(o===My)return s.INT;if(o===Rs)return s.UNSIGNED_INT;if(o===Xa)return s.FLOAT;if(o===tf)return s.HALF_FLOAT;if(o===lT)return s.ALPHA;if(o===uT)return s.RGB;if(o===$r)return s.RGBA;if(o===cT)return s.LUMINANCE;if(o===fT)return s.LUMINANCE_ALPHA;if(o===jl)return s.DEPTH_COMPONENT;if(o===Ql)return s.DEPTH_STENCIL;if(o===dT)return s.RED;if(o===Cy)return s.RED_INTEGER;if(o===hT)return s.RG;if(o===Ay)return s.RG_INTEGER;if(o===wy)return s.RGBA_INTEGER;if(o===Oh||o===Fh||o===Ih||o===zh)if(d===En)if(f=n.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(o===Oh)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===Fh)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===Ih)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===zh)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=n.get("WEBGL_compressed_texture_s3tc"),f!==null){if(o===Oh)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===Fh)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Ih)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===zh)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===q_||o===$_||o===K_||o===Z_)if(f=n.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(o===q_)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===$_)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===K_)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===Z_)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===Q_||o===J_||o===ey)if(f=n.get("WEBGL_compressed_texture_etc"),f!==null){if(o===Q_||o===J_)return d===En?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(o===ey)return d===En?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===ty||o===ny||o===iy||o===ry||o===ay||o===oy||o===sy||o===ly||o===uy||o===cy||o===fy||o===dy||o===hy||o===py)if(f=n.get("WEBGL_compressed_texture_astc"),f!==null){if(o===ty)return d===En?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===ny)return d===En?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===iy)return d===En?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===ry)return d===En?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===ay)return d===En?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===oy)return d===En?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===sy)return d===En?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===ly)return d===En?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===uy)return d===En?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===cy)return d===En?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===fy)return d===En?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===dy)return d===En?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===hy)return d===En?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===py)return d===En?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===Bh||o===my||o===vy)if(f=n.get("EXT_texture_compression_bptc"),f!==null){if(o===Bh)return d===En?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===my)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===vy)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===pT||o===gy||o===_y||o===yy)if(f=n.get("EXT_texture_compression_rgtc"),f!==null){if(o===Bh)return f.COMPRESSED_RED_RGTC1_EXT;if(o===gy)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===_y)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===yy)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===Zl?s.UNSIGNED_INT_24_8:s[o]!==void 0?s[o]:null}return{convert:i}}class hB extends wr{constructor(n=[]){super(),this.isArrayCamera=!0,this.cameras=n}}class Wl extends Pi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pB={type:"move"};class N_{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new de,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new de),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new de,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new de),this._grip}dispatchEvent(n){return this._targetRay!==null&&this._targetRay.dispatchEvent(n),this._grip!==null&&this._grip.dispatchEvent(n),this._hand!==null&&this._hand.dispatchEvent(n),this}connect(n){if(n&&n.hand){const i=this._hand;if(i)for(const o of n.hand.values())this._getHandJoint(i,o)}return this.dispatchEvent({type:"connected",data:n}),this}disconnect(n){return this.dispatchEvent({type:"disconnected",data:n}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(n,i,o){let u=null,f=null,d=null;const p=this._targetRay,m=this._grip,v=this._hand;if(n&&i.session.visibilityState!=="visible-blurred"){if(v&&n.hand){d=!0;for(const L of n.hand.values()){const M=i.getJointPose(L,o),_=this._getHandJoint(v,L);M!==null&&(_.matrix.fromArray(M.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=M.radius),_.visible=M!==null}const S=v.joints["index-finger-tip"],y=v.joints["thumb-tip"],x=S.position.distanceTo(y.position),b=.02,C=.005;v.inputState.pinching&&x>b+C?(v.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:n.handedness,target:this})):!v.inputState.pinching&&x<=b-C&&(v.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:n.handedness,target:this}))}else m!==null&&n.gripSpace&&(f=i.getPose(n.gripSpace,o),f!==null&&(m.matrix.fromArray(f.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,f.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(f.linearVelocity)):m.hasLinearVelocity=!1,f.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(f.angularVelocity)):m.hasAngularVelocity=!1));p!==null&&(u=i.getPose(n.targetRaySpace,o),u===null&&f!==null&&(u=f),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(pB)))}return p!==null&&(p.visible=u!==null),m!==null&&(m.visible=f!==null),v!==null&&(v.visible=d!==null),this}_getHandJoint(n,i){if(n.joints[i.jointName]===void 0){const o=new Wl;o.matrixAutoUpdate=!1,o.visible=!1,n.joints[i.jointName]=o,n.add(o)}return n.joints[i.jointName]}}const mB=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vB=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class gB{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(n,i,o){if(this.texture===null){const u=new ar,f=n.properties.get(u);f.__webglTexture=i.texture,(i.depthNear!=o.depthNear||i.depthFar!=o.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=u}}getMesh(n){if(this.texture!==null&&this.mesh===null){const i=n.cameras[0].viewport,o=new Uo({vertexShader:mB,fragmentShader:vB,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Hn(new eu(20,20),o)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _B extends nu{constructor(n,i){super();const o=this;let u=null,f=1,d=null,p="local-floor",m=1,v=null,S=null,y=null,x=null,b=null,C=null;const L=new gB,M=i.getContextAttributes();let _=null,F=null;const I=[],P=[],$=new xn;let G=null;const z=new wr;z.viewport=new On;const Z=new wr;Z.viewport=new On;const N=[z,Z],D=new hB;let V=null,he=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(me){let De=I[me];return De===void 0&&(De=new N_,I[me]=De),De.getTargetRaySpace()},this.getControllerGrip=function(me){let De=I[me];return De===void 0&&(De=new N_,I[me]=De),De.getGripSpace()},this.getHand=function(me){let De=I[me];return De===void 0&&(De=new N_,I[me]=De),De.getHandSpace()};function K(me){const De=P.indexOf(me.inputSource);if(De===-1)return;const Je=I[De];Je!==void 0&&(Je.update(me.inputSource,me.frame,v||d),Je.dispatchEvent({type:me.type,data:me.inputSource}))}function Se(){u.removeEventListener("select",K),u.removeEventListener("selectstart",K),u.removeEventListener("selectend",K),u.removeEventListener("squeeze",K),u.removeEventListener("squeezestart",K),u.removeEventListener("squeezeend",K),u.removeEventListener("end",Se),u.removeEventListener("inputsourceschange",ye);for(let me=0;me<I.length;me++){const De=P[me];De!==null&&(P[me]=null,I[me].disconnect(De))}V=null,he=null,L.reset(),n.setRenderTarget(_),b=null,x=null,y=null,u=null,F=null,Ht.stop(),o.isPresenting=!1,n.setPixelRatio(G),n.setSize($.width,$.height,!1),o.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(me){f=me,o.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(me){p=me,o.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return v||d},this.setReferenceSpace=function(me){v=me},this.getBaseLayer=function(){return x!==null?x:b},this.getBinding=function(){return y},this.getFrame=function(){return C},this.getSession=function(){return u},this.setSession=async function(me){if(u=me,u!==null){if(_=n.getRenderTarget(),u.addEventListener("select",K),u.addEventListener("selectstart",K),u.addEventListener("selectend",K),u.addEventListener("squeeze",K),u.addEventListener("squeezestart",K),u.addEventListener("squeezeend",K),u.addEventListener("end",Se),u.addEventListener("inputsourceschange",ye),M.xrCompatible!==!0&&await i.makeXRCompatible(),G=n.getPixelRatio(),n.getSize($),u.renderState.layers===void 0){const De={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:f};b=new XRWebGLLayer(u,i,De),u.updateRenderState({baseLayer:b}),n.setPixelRatio(1),n.setSize(b.framebufferWidth,b.framebufferHeight,!1),F=new Cs(b.framebufferWidth,b.framebufferHeight,{format:$r,type:qa,colorSpace:n.outputColorSpace,stencilBuffer:M.stencil})}else{let De=null,Je=null,Ne=null;M.depth&&(Ne=M.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,De=M.stencil?Ql:jl,Je=M.stencil?Zl:Rs);const rt={colorFormat:i.RGBA8,depthFormat:Ne,scaleFactor:f};y=new XRWebGLBinding(u,i),x=y.createProjectionLayer(rt),u.updateRenderState({layers:[x]}),n.setPixelRatio(1),n.setSize(x.textureWidth,x.textureHeight,!1),F=new Cs(x.textureWidth,x.textureHeight,{format:$r,type:qa,depthTexture:new wT(x.textureWidth,x.textureHeight,Je,void 0,void 0,void 0,void 0,void 0,void 0,De),stencilBuffer:M.stencil,colorSpace:n.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}F.isXRRenderTarget=!0,this.setFoveation(m),v=null,d=await u.requestReferenceSpace(p),Ht.setContext(u),Ht.start(),o.isPresenting=!0,o.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(u!==null)return u.environmentBlendMode},this.getDepthTexture=function(){return L.getDepthTexture()};function ye(me){for(let De=0;De<me.removed.length;De++){const Je=me.removed[De],Ne=P.indexOf(Je);Ne>=0&&(P[Ne]=null,I[Ne].disconnect(Je))}for(let De=0;De<me.added.length;De++){const Je=me.added[De];let Ne=P.indexOf(Je);if(Ne===-1){for(let st=0;st<I.length;st++)if(st>=P.length){P.push(Je),Ne=st;break}else if(P[st]===null){P[st]=Je,Ne=st;break}if(Ne===-1)break}const rt=I[Ne];rt&&rt.connect(Je)}}const ce=new de,fe=new de;function le(me,De,Je){ce.setFromMatrixPosition(De.matrixWorld),fe.setFromMatrixPosition(Je.matrixWorld);const Ne=ce.distanceTo(fe),rt=De.projectionMatrix.elements,st=Je.projectionMatrix.elements,vt=rt[14]/(rt[10]-1),zt=rt[14]/(rt[10]+1),xt=(rt[9]+1)/rt[5],Ft=(rt[9]-1)/rt[5],q=(rt[8]-1)/rt[0],an=(st[8]+1)/st[0],gt=vt*q,Rt=vt*an,ut=Ne/(-q+an),Gt=ut*-q;if(De.matrixWorld.decompose(me.position,me.quaternion,me.scale),me.translateX(Gt),me.translateZ(ut),me.matrixWorld.compose(me.position,me.quaternion,me.scale),me.matrixWorldInverse.copy(me.matrixWorld).invert(),rt[10]===-1)me.projectionMatrix.copy(De.projectionMatrix),me.projectionMatrixInverse.copy(De.projectionMatrixInverse);else{const nt=vt+ut,O=zt+ut,R=gt-Gt,Q=Rt+(Ne-Gt),Ee=xt*zt/O*nt,ue=Ft*zt/O*nt;me.projectionMatrix.makePerspective(R,Q,Ee,ue,nt,O),me.projectionMatrixInverse.copy(me.projectionMatrix).invert()}}function Fe(me,De){De===null?me.matrixWorld.copy(me.matrix):me.matrixWorld.multiplyMatrices(De.matrixWorld,me.matrix),me.matrixWorldInverse.copy(me.matrixWorld).invert()}this.updateCamera=function(me){if(u===null)return;let De=me.near,Je=me.far;L.texture!==null&&(L.depthNear>0&&(De=L.depthNear),L.depthFar>0&&(Je=L.depthFar)),D.near=Z.near=z.near=De,D.far=Z.far=z.far=Je,(V!==D.near||he!==D.far)&&(u.updateRenderState({depthNear:D.near,depthFar:D.far}),V=D.near,he=D.far),z.layers.mask=me.layers.mask|2,Z.layers.mask=me.layers.mask|4,D.layers.mask=z.layers.mask|Z.layers.mask;const Ne=me.parent,rt=D.cameras;Fe(D,Ne);for(let st=0;st<rt.length;st++)Fe(rt[st],Ne);rt.length===2?le(D,z,Z):D.projectionMatrix.copy(z.projectionMatrix),Ge(me,D,Ne)};function Ge(me,De,Je){Je===null?me.matrix.copy(De.matrixWorld):(me.matrix.copy(Je.matrixWorld),me.matrix.invert(),me.matrix.multiply(De.matrixWorld)),me.matrix.decompose(me.position,me.quaternion,me.scale),me.updateMatrixWorld(!0),me.projectionMatrix.copy(De.projectionMatrix),me.projectionMatrixInverse.copy(De.projectionMatrixInverse),me.isPerspectiveCamera&&(me.fov=ef*2*Math.atan(1/me.projectionMatrix.elements[5]),me.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(x===null&&b===null))return m},this.setFoveation=function(me){m=me,x!==null&&(x.fixedFoveation=me),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=me)},this.hasDepthSensing=function(){return L.texture!==null},this.getDepthSensingMesh=function(){return L.getMesh(D)};let tt=null;function ft(me,De){if(S=De.getViewerPose(v||d),C=De,S!==null){const Je=S.views;b!==null&&(n.setRenderTargetFramebuffer(F,b.framebuffer),n.setRenderTarget(F));let Ne=!1;Je.length!==D.cameras.length&&(D.cameras.length=0,Ne=!0);for(let st=0;st<Je.length;st++){const vt=Je[st];let zt=null;if(b!==null)zt=b.getViewport(vt);else{const Ft=y.getViewSubImage(x,vt);zt=Ft.viewport,st===0&&(n.setRenderTargetTextures(F,Ft.colorTexture,x.ignoreDepthValues?void 0:Ft.depthStencilTexture),n.setRenderTarget(F))}let xt=N[st];xt===void 0&&(xt=new wr,xt.layers.enable(st),xt.viewport=new On,N[st]=xt),xt.matrix.fromArray(vt.transform.matrix),xt.matrix.decompose(xt.position,xt.quaternion,xt.scale),xt.projectionMatrix.fromArray(vt.projectionMatrix),xt.projectionMatrixInverse.copy(xt.projectionMatrix).invert(),xt.viewport.set(zt.x,zt.y,zt.width,zt.height),st===0&&(D.matrix.copy(xt.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Ne===!0&&D.cameras.push(xt)}const rt=u.enabledFeatures;if(rt&&rt.includes("depth-sensing")){const st=y.getDepthInformation(Je[0]);st&&st.isValid&&st.texture&&L.init(n,st,u.renderState)}}for(let Je=0;Je<I.length;Je++){const Ne=P[Je],rt=I[Je];Ne!==null&&rt!==void 0&&rt.update(Ne,De,v||d)}tt&&tt(me,De),De.detectedPlanes&&o.dispatchEvent({type:"planesdetected",data:De}),C=null}const Ht=new CT;Ht.setAnimationLoop(ft),this.setAnimationLoop=function(me){tt=me},this.dispose=function(){}}}const gs=new ha,yB=new Fn;function SB(s,n){function i(M,_){M.matrixAutoUpdate===!0&&M.updateMatrix(),_.value.copy(M.matrix)}function o(M,_){_.color.getRGB(M.fogColor.value,MT(s)),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function u(M,_,F,I,P){_.isMeshBasicMaterial||_.isMeshLambertMaterial?f(M,_):_.isMeshToonMaterial?(f(M,_),y(M,_)):_.isMeshPhongMaterial?(f(M,_),S(M,_)):_.isMeshStandardMaterial?(f(M,_),x(M,_),_.isMeshPhysicalMaterial&&b(M,_,P)):_.isMeshMatcapMaterial?(f(M,_),C(M,_)):_.isMeshDepthMaterial?f(M,_):_.isMeshDistanceMaterial?(f(M,_),L(M,_)):_.isMeshNormalMaterial?f(M,_):_.isLineBasicMaterial?(d(M,_),_.isLineDashedMaterial&&p(M,_)):_.isPointsMaterial?m(M,_,F,I):_.isSpriteMaterial?v(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function f(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.bumpMap&&(M.bumpMap.value=_.bumpMap,i(_.bumpMap,M.bumpMapTransform),M.bumpScale.value=_.bumpScale,_.side===rr&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,i(_.normalMap,M.normalMapTransform),M.normalScale.value.copy(_.normalScale),_.side===rr&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,i(_.displacementMap,M.displacementMapTransform),M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,M.emissiveMapTransform)),_.specularMap&&(M.specularMap.value=_.specularMap,i(_.specularMap,M.specularMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest);const F=n.get(_),I=F.envMap,P=F.envMapRotation;I&&(M.envMap.value=I,gs.copy(P),gs.x*=-1,gs.y*=-1,gs.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),M.envMapRotation.value.setFromMatrix4(yB.makeRotationFromEuler(gs)),M.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=_.reflectivity,M.ior.value=_.ior,M.refractionRatio.value=_.refractionRatio),_.lightMap&&(M.lightMap.value=_.lightMap,M.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,M.lightMapTransform)),_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,M.aoMapTransform))}function d(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform))}function p(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function m(M,_,F,I){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*F,M.scale.value=I*.5,_.map&&(M.map.value=_.map,i(_.map,M.uvTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function v(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function S(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4)}function y(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap)}function x(M,_){M.metalness.value=_.metalness,_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,M.metalnessMapTransform)),M.roughness.value=_.roughness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,M.roughnessMapTransform)),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function b(M,_,F){M.ior.value=_.ior,_.sheen>0&&(M.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),M.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(M.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,M.sheenColorMapTransform)),_.sheenRoughnessMap&&(M.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,M.sheenRoughnessMapTransform))),_.clearcoat>0&&(M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,M.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(M.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===rr&&M.clearcoatNormalScale.value.negate())),_.dispersion>0&&(M.dispersion.value=_.dispersion),_.iridescence>0&&(M.iridescence.value=_.iridescence,M.iridescenceIOR.value=_.iridescenceIOR,M.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(M.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,M.iridescenceMapTransform)),_.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),_.transmission>0&&(M.transmission.value=_.transmission,M.transmissionSamplerMap.value=F.texture,M.transmissionSamplerSize.value.set(F.width,F.height),_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,M.transmissionMapTransform)),M.thickness.value=_.thickness,_.thicknessMap&&(M.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=_.attenuationDistance,M.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(M.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(M.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=_.specularIntensity,M.specularColor.value.copy(_.specularColor),_.specularColorMap&&(M.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,M.specularColorMapTransform)),_.specularIntensityMap&&(M.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,M.specularIntensityMapTransform))}function C(M,_){_.matcap&&(M.matcap.value=_.matcap)}function L(M,_){const F=n.get(_).light;M.referencePosition.value.setFromMatrixPosition(F.matrixWorld),M.nearDistance.value=F.shadow.camera.near,M.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:o,refreshMaterialUniforms:u}}function xB(s,n,i,o){let u={},f={},d=[];const p=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(F,I){const P=I.program;o.uniformBlockBinding(F,P)}function v(F,I){let P=u[F.id];P===void 0&&(C(F),P=S(F),u[F.id]=P,F.addEventListener("dispose",M));const $=I.program;o.updateUBOMapping(F,$);const G=n.render.frame;f[F.id]!==G&&(x(F),f[F.id]=G)}function S(F){const I=y();F.__bindingPointIndex=I;const P=s.createBuffer(),$=F.__size,G=F.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,$,G),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,I,P),P}function y(){for(let F=0;F<p;F++)if(d.indexOf(F)===-1)return d.push(F),F;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(F){const I=u[F.id],P=F.uniforms,$=F.__cache;s.bindBuffer(s.UNIFORM_BUFFER,I);for(let G=0,z=P.length;G<z;G++){const Z=Array.isArray(P[G])?P[G]:[P[G]];for(let N=0,D=Z.length;N<D;N++){const V=Z[N];if(b(V,G,N,$)===!0){const he=V.__offset,K=Array.isArray(V.value)?V.value:[V.value];let Se=0;for(let ye=0;ye<K.length;ye++){const ce=K[ye],fe=L(ce);typeof ce=="number"||typeof ce=="boolean"?(V.__data[0]=ce,s.bufferSubData(s.UNIFORM_BUFFER,he+Se,V.__data)):ce.isMatrix3?(V.__data[0]=ce.elements[0],V.__data[1]=ce.elements[1],V.__data[2]=ce.elements[2],V.__data[3]=0,V.__data[4]=ce.elements[3],V.__data[5]=ce.elements[4],V.__data[6]=ce.elements[5],V.__data[7]=0,V.__data[8]=ce.elements[6],V.__data[9]=ce.elements[7],V.__data[10]=ce.elements[8],V.__data[11]=0):(ce.toArray(V.__data,Se),Se+=fe.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,he,V.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function b(F,I,P,$){const G=F.value,z=I+"_"+P;if($[z]===void 0)return typeof G=="number"||typeof G=="boolean"?$[z]=G:$[z]=G.clone(),!0;{const Z=$[z];if(typeof G=="number"||typeof G=="boolean"){if(Z!==G)return $[z]=G,!0}else if(Z.equals(G)===!1)return Z.copy(G),!0}return!1}function C(F){const I=F.uniforms;let P=0;const $=16;for(let z=0,Z=I.length;z<Z;z++){const N=Array.isArray(I[z])?I[z]:[I[z]];for(let D=0,V=N.length;D<V;D++){const he=N[D],K=Array.isArray(he.value)?he.value:[he.value];for(let Se=0,ye=K.length;Se<ye;Se++){const ce=K[Se],fe=L(ce),le=P%$,Fe=le%fe.boundary,Ge=le+Fe;P+=Fe,Ge!==0&&$-Ge<fe.storage&&(P+=$-Ge),he.__data=new Float32Array(fe.storage/Float32Array.BYTES_PER_ELEMENT),he.__offset=P,P+=fe.storage}}}const G=P%$;return G>0&&(P+=$-G),F.__size=P,F.__cache={},this}function L(F){const I={boundary:0,storage:0};return typeof F=="number"||typeof F=="boolean"?(I.boundary=4,I.storage=4):F.isVector2?(I.boundary=8,I.storage=8):F.isVector3||F.isColor?(I.boundary=16,I.storage=12):F.isVector4?(I.boundary=16,I.storage=16):F.isMatrix3?(I.boundary=48,I.storage=48):F.isMatrix4?(I.boundary=64,I.storage=64):F.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",F),I}function M(F){const I=F.target;I.removeEventListener("dispose",M);const P=d.indexOf(I.__bindingPointIndex);d.splice(P,1),s.deleteBuffer(u[I.id]),delete u[I.id],delete f[I.id]}function _(){for(const F in u)s.deleteBuffer(u[F]);d=[],u={},f={}}return{bind:m,update:v,dispose:_}}class EB{constructor(n={}){const{canvas:i=uO(),context:o=null,depth:u=!0,stencil:f=!1,alpha:d=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:v=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:y=!1,reverseDepthBuffer:x=!1}=n;this.isWebGLRenderer=!0;let b;if(o!==null){if(typeof WebGLRenderingContext<"u"&&o instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=o.getContextAttributes().alpha}else b=d;const C=new Uint32Array(4),L=new Int32Array(4);let M=null,_=null;const F=[],I=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Cr,this.toneMapping=Do,this.toneMappingExposure=1;const P=this;let $=!1,G=0,z=0,Z=null,N=-1,D=null;const V=new On,he=new On;let K=null;const Se=new cn(0);let ye=0,ce=i.width,fe=i.height,le=1,Fe=null,Ge=null;const tt=new On(0,0,ce,fe),ft=new On(0,0,ce,fe);let Ht=!1;const me=new Uy;let De=!1,Je=!1;const Ne=new Fn,rt=new Fn,st=new de,vt=new On,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xt=!1;function Ft(){return Z===null?le:1}let q=o;function an(A,Y){return i.getContext(A,Y)}try{const A={alpha:!0,depth:u,stencil:f,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:v,powerPreference:S,failIfMajorPerformanceCaveat:y};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${by}`),i.addEventListener("webglcontextlost",Me,!1),i.addEventListener("webglcontextrestored",ke,!1),i.addEventListener("webglcontextcreationerror",We,!1),q===null){const Y="webgl2";if(q=an(Y,A),q===null)throw an(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let gt,Rt,ut,Gt,nt,O,R,Q,Ee,ue,se,je,Pe,ze,xe,te,Te,Be,Ke,Oe,ct,pt,Ct,H;function Le(){gt=new C3(q),gt.init(),pt=new dB(q,gt),Rt=new x3(q,gt,n,pt),ut=new uB(q,gt),Rt.reverseDepthBuffer&&x&&ut.buffers.depth.setReversed(!0),Gt=new D3(q),nt=new qz,O=new fB(q,gt,ut,nt,Rt,pt,Gt),R=new b3(P),Q=new R3(P),Ee=new IO(q),Ct=new y3(q,Ee),ue=new A3(q,Ee,Gt,Ct),se=new U3(q,ue,Ee,Gt),Ke=new L3(q,Rt,O),te=new E3(nt),je=new Yz(P,R,Q,gt,Rt,Ct,te),Pe=new SB(P,nt),ze=new Kz,xe=new nB(gt),Be=new _3(P,R,Q,ut,se,b,m),Te=new sB(P,se,Rt),H=new xB(q,Gt,Rt,ut),Oe=new S3(q,gt,Gt),ct=new w3(q,gt,Gt),Gt.programs=je.programs,P.capabilities=Rt,P.extensions=gt,P.properties=nt,P.renderLists=ze,P.shadowMap=Te,P.state=ut,P.info=Gt}Le();const pe=new _B(P,q);this.xr=pe,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const A=gt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=gt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(A){A!==void 0&&(le=A,this.setSize(ce,fe,!1))},this.getSize=function(A){return A.set(ce,fe)},this.setSize=function(A,Y,ne=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ce=A,fe=Y,i.width=Math.floor(A*le),i.height=Math.floor(Y*le),ne===!0&&(i.style.width=A+"px",i.style.height=Y+"px"),this.setViewport(0,0,A,Y)},this.getDrawingBufferSize=function(A){return A.set(ce*le,fe*le).floor()},this.setDrawingBufferSize=function(A,Y,ne){ce=A,fe=Y,le=ne,i.width=Math.floor(A*ne),i.height=Math.floor(Y*ne),this.setViewport(0,0,A,Y)},this.getCurrentViewport=function(A){return A.copy(V)},this.getViewport=function(A){return A.copy(tt)},this.setViewport=function(A,Y,ne,ie){A.isVector4?tt.set(A.x,A.y,A.z,A.w):tt.set(A,Y,ne,ie),ut.viewport(V.copy(tt).multiplyScalar(le).round())},this.getScissor=function(A){return A.copy(ft)},this.setScissor=function(A,Y,ne,ie){A.isVector4?ft.set(A.x,A.y,A.z,A.w):ft.set(A,Y,ne,ie),ut.scissor(he.copy(ft).multiplyScalar(le).round())},this.getScissorTest=function(){return Ht},this.setScissorTest=function(A){ut.setScissorTest(Ht=A)},this.setOpaqueSort=function(A){Fe=A},this.setTransparentSort=function(A){Ge=A},this.getClearColor=function(A){return A.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor.apply(Be,arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha.apply(Be,arguments)},this.clear=function(A=!0,Y=!0,ne=!0){let ie=0;if(A){let X=!1;if(Z!==null){const Ue=Z.texture.format;X=Ue===wy||Ue===Ay||Ue===Cy}if(X){const Ue=Z.texture.type,He=Ue===qa||Ue===Rs||Ue===Jc||Ue===Zl||Ue===Ty||Ue===Ry,Ae=Be.getClearColor(),at=Be.getClearAlpha(),At=Ae.r,Pt=Ae.g,it=Ae.b;He?(C[0]=At,C[1]=Pt,C[2]=it,C[3]=at,q.clearBufferuiv(q.COLOR,0,C)):(L[0]=At,L[1]=Pt,L[2]=it,L[3]=at,q.clearBufferiv(q.COLOR,0,L))}else ie|=q.COLOR_BUFFER_BIT}Y&&(ie|=q.DEPTH_BUFFER_BIT),ne&&(ie|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Me,!1),i.removeEventListener("webglcontextrestored",ke,!1),i.removeEventListener("webglcontextcreationerror",We,!1),ze.dispose(),xe.dispose(),nt.dispose(),R.dispose(),Q.dispose(),se.dispose(),Ct.dispose(),H.dispose(),je.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",Oi),pe.removeEventListener("sessionend",Ti),ai.stop()};function Me(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),$=!0}function ke(){console.log("THREE.WebGLRenderer: Context Restored."),$=!1;const A=Gt.autoReset,Y=Te.enabled,ne=Te.autoUpdate,ie=Te.needsUpdate,X=Te.type;Le(),Gt.autoReset=A,Te.enabled=Y,Te.autoUpdate=ne,Te.needsUpdate=ie,Te.type=X}function We(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Lt(A){const Y=A.target;Y.removeEventListener("dispose",Lt),vn(Y)}function vn(A){Ln(A),nt.remove(A)}function Ln(A){const Y=nt.get(A).programs;Y!==void 0&&(Y.forEach(function(ne){je.releaseProgram(ne)}),A.isShaderMaterial&&je.releaseShaderCache(A))}this.renderBufferDirect=function(A,Y,ne,ie,X,Ue){Y===null&&(Y=zt);const He=X.isMesh&&X.matrixWorld.determinant()<0,Ae=_t(A,Y,ne,ie,X);ut.setMaterial(ie,He);let at=ne.index,At=1;if(ie.wireframe===!0){if(at=ue.getWireframeAttribute(ne),at===void 0)return;At=2}const Pt=ne.drawRange,it=ne.attributes.position;let Yt=Pt.start*At,fn=(Pt.start+Pt.count)*At;Ue!==null&&(Yt=Math.max(Yt,Ue.start*At),fn=Math.min(fn,(Ue.start+Ue.count)*At)),at!==null?(Yt=Math.max(Yt,0),fn=Math.min(fn,at.count)):it!=null&&(Yt=Math.max(Yt,0),fn=Math.min(fn,it.count));const pn=fn-Yt;if(pn<0||pn===1/0)return;Ct.setup(X,ie,Ae,ne,at);let Vn,en=Oe;if(at!==null&&(Vn=Ee.get(at),en=ct,en.setIndex(Vn)),X.isMesh)ie.wireframe===!0?(ut.setLineWidth(ie.wireframeLinewidth*Ft()),en.setMode(q.LINES)):en.setMode(q.TRIANGLES);else if(X.isLine){let dt=ie.linewidth;dt===void 0&&(dt=1),ut.setLineWidth(dt*Ft()),X.isLineSegments?en.setMode(q.LINES):X.isLineLoop?en.setMode(q.LINE_LOOP):en.setMode(q.LINE_STRIP)}else X.isPoints?en.setMode(q.POINTS):X.isSprite&&en.setMode(q.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)en.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(gt.get("WEBGL_multi_draw"))en.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const dt=X._multiDrawStarts,qi=X._multiDrawCounts,qt=X._multiDrawCount,pi=at?Ee.get(at).bytesPerElement:1,mi=nt.get(ie).currentProgram.getUniforms();for(let Bn=0;Bn<qt;Bn++)mi.setValue(q,"_gl_DrawID",Bn),en.render(dt[Bn]/pi,qi[Bn])}else if(X.isInstancedMesh)en.renderInstances(Yt,pn,X.count);else if(ne.isInstancedBufferGeometry){const dt=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,qi=Math.min(ne.instanceCount,dt);en.renderInstances(Yt,pn,qi)}else en.render(Yt,pn)};function Jt(A,Y,ne){A.transparent===!0&&A.side===Wa&&A.forceSinglePass===!1?(A.side=rr,A.needsUpdate=!0,Bt(A,Y,ne),A.side=Lo,A.needsUpdate=!0,Bt(A,Y,ne),A.side=Wa):Bt(A,Y,ne)}this.compile=function(A,Y,ne=null){ne===null&&(ne=A),_=xe.get(ne),_.init(Y),I.push(_),ne.traverseVisible(function(X){X.isLight&&X.layers.test(Y.layers)&&(_.pushLight(X),X.castShadow&&_.pushShadow(X))}),A!==ne&&A.traverseVisible(function(X){X.isLight&&X.layers.test(Y.layers)&&(_.pushLight(X),X.castShadow&&_.pushShadow(X))}),_.setupLights();const ie=new Set;return A.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Ue=X.material;if(Ue)if(Array.isArray(Ue))for(let He=0;He<Ue.length;He++){const Ae=Ue[He];Jt(Ae,ne,X),ie.add(Ae)}else Jt(Ue,ne,X),ie.add(Ue)}),I.pop(),_=null,ie},this.compileAsync=function(A,Y,ne=null){const ie=this.compile(A,Y,ne);return new Promise(X=>{function Ue(){if(ie.forEach(function(He){nt.get(He).currentProgram.isReady()&&ie.delete(He)}),ie.size===0){X(A);return}setTimeout(Ue,10)}gt.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let qn=null;function In(A){qn&&qn(A)}function Oi(){ai.stop()}function Ti(){ai.start()}const ai=new CT;ai.setAnimationLoop(In),typeof self<"u"&&ai.setContext(self),this.setAnimationLoop=function(A){qn=A,pe.setAnimationLoop(A),A===null?ai.stop():ai.start()},pe.addEventListener("sessionstart",Oi),pe.addEventListener("sessionend",Ti),this.render=function(A,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if($===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(Y),Y=pe.getCamera()),A.isScene===!0&&A.onBeforeRender(P,A,Y,Z),_=xe.get(A,I.length),_.init(Y),I.push(_),rt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),me.setFromProjectionMatrix(rt),Je=this.localClippingEnabled,De=te.init(this.clippingPlanes,Je),M=ze.get(A,F.length),M.init(),F.push(M),pe.enabled===!0&&pe.isPresenting===!0){const Ue=P.xr.getDepthSensingMesh();Ue!==null&&Dr(Ue,Y,-1/0,P.sortObjects)}Dr(A,Y,0,P.sortObjects),M.finish(),P.sortObjects===!0&&M.sort(Fe,Ge),xt=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,xt&&Be.addToRenderList(M,A),this.info.render.frame++,De===!0&&te.beginShadows();const ne=_.state.shadowsArray;Te.render(ne,A,Y),De===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset();const ie=M.opaque,X=M.transmissive;if(_.setupLights(),Y.isArrayCamera){const Ue=Y.cameras;if(X.length>0)for(let He=0,Ae=Ue.length;He<Ae;He++){const at=Ue[He];Ce(ie,X,A,at)}xt&&Be.render(A);for(let He=0,Ae=Ue.length;He<Ae;He++){const at=Ue[He];k(M,A,at,at.viewport)}}else X.length>0&&Ce(ie,X,A,Y),xt&&Be.render(A),k(M,A,Y);Z!==null&&(O.updateMultisampleRenderTarget(Z),O.updateRenderTargetMipmap(Z)),A.isScene===!0&&A.onAfterRender(P,A,Y),Ct.resetDefaultState(),N=-1,D=null,I.pop(),I.length>0?(_=I[I.length-1],De===!0&&te.setGlobalState(P.clippingPlanes,_.state.camera)):_=null,F.pop(),F.length>0?M=F[F.length-1]:M=null};function Dr(A,Y,ne,ie){if(A.visible===!1)return;if(A.layers.test(Y.layers)){if(A.isGroup)ne=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Y);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||me.intersectsSprite(A)){ie&&vt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(rt);const He=se.update(A),Ae=A.material;Ae.visible&&M.push(A,He,Ae,ne,vt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||me.intersectsObject(A))){const He=se.update(A),Ae=A.material;if(ie&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),vt.copy(A.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),vt.copy(He.boundingSphere.center)),vt.applyMatrix4(A.matrixWorld).applyMatrix4(rt)),Array.isArray(Ae)){const at=He.groups;for(let At=0,Pt=at.length;At<Pt;At++){const it=at[At],Yt=Ae[it.materialIndex];Yt&&Yt.visible&&M.push(A,He,Yt,ne,vt.z,it)}}else Ae.visible&&M.push(A,He,Ae,ne,vt.z,null)}}const Ue=A.children;for(let He=0,Ae=Ue.length;He<Ae;He++)Dr(Ue[He],Y,ne,ie)}function k(A,Y,ne,ie){const X=A.opaque,Ue=A.transmissive,He=A.transparent;_.setupLightsView(ne),De===!0&&te.setGlobalState(P.clippingPlanes,ne),ie&&ut.viewport(V.copy(ie)),X.length>0&&Ve(X,Y,ne),Ue.length>0&&Ve(Ue,Y,ne),He.length>0&&Ve(He,Y,ne),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function Ce(A,Y,ne,ie){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[ie.id]===void 0&&(_.state.transmissionRenderTarget[ie.id]=new Cs(1,1,{generateMipmaps:!0,type:gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float")?tf:qa,minFilter:Ms,samples:4,stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:un.workingColorSpace}));const Ue=_.state.transmissionRenderTarget[ie.id],He=ie.viewport||V;Ue.setSize(He.z,He.w);const Ae=P.getRenderTarget();P.setRenderTarget(Ue),P.getClearColor(Se),ye=P.getClearAlpha(),ye<1&&P.setClearColor(16777215,.5),P.clear(),xt&&Be.render(ne);const at=P.toneMapping;P.toneMapping=Do;const At=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),_.setupLightsView(ie),De===!0&&te.setGlobalState(P.clippingPlanes,ie),Ve(A,ne,ie),O.updateMultisampleRenderTarget(Ue),O.updateRenderTargetMipmap(Ue),gt.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let it=0,Yt=Y.length;it<Yt;it++){const fn=Y[it],pn=fn.object,Vn=fn.geometry,en=fn.material,dt=fn.group;if(en.side===Wa&&pn.layers.test(ie.layers)){const qi=en.side;en.side=rr,en.needsUpdate=!0,mt(pn,ne,ie,Vn,en,dt),en.side=qi,en.needsUpdate=!0,Pt=!0}}Pt===!0&&(O.updateMultisampleRenderTarget(Ue),O.updateRenderTargetMipmap(Ue))}P.setRenderTarget(Ae),P.setClearColor(Se,ye),At!==void 0&&(ie.viewport=At),P.toneMapping=at}function Ve(A,Y,ne){const ie=Y.isScene===!0?Y.overrideMaterial:null;for(let X=0,Ue=A.length;X<Ue;X++){const He=A[X],Ae=He.object,at=He.geometry,At=ie===null?He.material:ie,Pt=He.group;Ae.layers.test(ne.layers)&&mt(Ae,Y,ne,at,At,Pt)}}function mt(A,Y,ne,ie,X,Ue){A.onBeforeRender(P,Y,ne,ie,X,Ue),A.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),X.onBeforeRender(P,Y,ne,ie,A,Ue),X.transparent===!0&&X.side===Wa&&X.forceSinglePass===!1?(X.side=rr,X.needsUpdate=!0,P.renderBufferDirect(ne,Y,ie,X,A,Ue),X.side=Lo,X.needsUpdate=!0,P.renderBufferDirect(ne,Y,ie,X,A,Ue),X.side=Wa):P.renderBufferDirect(ne,Y,ie,X,A,Ue),A.onAfterRender(P,Y,ne,ie,X,Ue)}function Bt(A,Y,ne){Y.isScene!==!0&&(Y=zt);const ie=nt.get(A),X=_.state.lights,Ue=_.state.shadowsArray,He=X.state.version,Ae=je.getParameters(A,X.state,Ue,Y,ne),at=je.getProgramCacheKey(Ae);let At=ie.programs;ie.environment=A.isMeshStandardMaterial?Y.environment:null,ie.fog=Y.fog,ie.envMap=(A.isMeshStandardMaterial?Q:R).get(A.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&A.envMap===null?Y.environmentRotation:A.envMapRotation,At===void 0&&(A.addEventListener("dispose",Lt),At=new Map,ie.programs=At);let Pt=At.get(at);if(Pt!==void 0){if(ie.currentProgram===Pt&&ie.lightsStateVersion===He)return It(A,Ae),Pt}else Ae.uniforms=je.getUniforms(A),A.onBeforeCompile(Ae,P),Pt=je.acquireProgram(Ae,at),At.set(at,Pt),ie.uniforms=Ae.uniforms;const it=ie.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(it.clippingPlanes=te.uniform),It(A,Ae),ie.needsLights=bn(A),ie.lightsStateVersion=He,ie.needsLights&&(it.ambientLightColor.value=X.state.ambient,it.lightProbe.value=X.state.probe,it.directionalLights.value=X.state.directional,it.directionalLightShadows.value=X.state.directionalShadow,it.spotLights.value=X.state.spot,it.spotLightShadows.value=X.state.spotShadow,it.rectAreaLights.value=X.state.rectArea,it.ltc_1.value=X.state.rectAreaLTC1,it.ltc_2.value=X.state.rectAreaLTC2,it.pointLights.value=X.state.point,it.pointLightShadows.value=X.state.pointShadow,it.hemisphereLights.value=X.state.hemi,it.directionalShadowMap.value=X.state.directionalShadowMap,it.directionalShadowMatrix.value=X.state.directionalShadowMatrix,it.spotShadowMap.value=X.state.spotShadowMap,it.spotLightMatrix.value=X.state.spotLightMatrix,it.spotLightMap.value=X.state.spotLightMap,it.pointShadowMap.value=X.state.pointShadowMap,it.pointShadowMatrix.value=X.state.pointShadowMatrix),ie.currentProgram=Pt,ie.uniformsList=null,Pt}function Mt(A){if(A.uniformsList===null){const Y=A.currentProgram.getUniforms();A.uniformsList=kh.seqWithValue(Y.seq,A.uniforms)}return A.uniformsList}function It(A,Y){const ne=nt.get(A);ne.outputColorSpace=Y.outputColorSpace,ne.batching=Y.batching,ne.batchingColor=Y.batchingColor,ne.instancing=Y.instancing,ne.instancingColor=Y.instancingColor,ne.instancingMorph=Y.instancingMorph,ne.skinning=Y.skinning,ne.morphTargets=Y.morphTargets,ne.morphNormals=Y.morphNormals,ne.morphColors=Y.morphColors,ne.morphTargetsCount=Y.morphTargetsCount,ne.numClippingPlanes=Y.numClippingPlanes,ne.numIntersection=Y.numClipIntersection,ne.vertexAlphas=Y.vertexAlphas,ne.vertexTangents=Y.vertexTangents,ne.toneMapping=Y.toneMapping}function _t(A,Y,ne,ie,X){Y.isScene!==!0&&(Y=zt),O.resetTextureUnits();const Ue=Y.fog,He=ie.isMeshStandardMaterial?Y.environment:null,Ae=Z===null?P.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:tu,at=(ie.isMeshStandardMaterial?Q:R).get(ie.envMap||He),At=ie.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,Pt=!!ne.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),it=!!ne.morphAttributes.position,Yt=!!ne.morphAttributes.normal,fn=!!ne.morphAttributes.color;let pn=Do;ie.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(pn=P.toneMapping);const Vn=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,en=Vn!==void 0?Vn.length:0,dt=nt.get(ie),qi=_.state.lights;if(De===!0&&(Je===!0||A!==D)){const si=A===D&&ie.id===N;te.setState(ie,A,si)}let qt=!1;ie.version===dt.__version?(dt.needsLights&&dt.lightsStateVersion!==qi.state.version||dt.outputColorSpace!==Ae||X.isBatchedMesh&&dt.batching===!1||!X.isBatchedMesh&&dt.batching===!0||X.isBatchedMesh&&dt.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&dt.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&dt.instancing===!1||!X.isInstancedMesh&&dt.instancing===!0||X.isSkinnedMesh&&dt.skinning===!1||!X.isSkinnedMesh&&dt.skinning===!0||X.isInstancedMesh&&dt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&dt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&dt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&dt.instancingMorph===!1&&X.morphTexture!==null||dt.envMap!==at||ie.fog===!0&&dt.fog!==Ue||dt.numClippingPlanes!==void 0&&(dt.numClippingPlanes!==te.numPlanes||dt.numIntersection!==te.numIntersection)||dt.vertexAlphas!==At||dt.vertexTangents!==Pt||dt.morphTargets!==it||dt.morphNormals!==Yt||dt.morphColors!==fn||dt.toneMapping!==pn||dt.morphTargetsCount!==en)&&(qt=!0):(qt=!0,dt.__version=ie.version);let pi=dt.currentProgram;qt===!0&&(pi=Bt(ie,Y,X));let mi=!1,Bn=!1,$i=!1;const dn=pi.getUniforms(),oi=dt.uniforms;if(ut.useProgram(pi.program)&&(mi=!0,Bn=!0,$i=!0),ie.id!==N&&(N=ie.id,Bn=!0),mi||D!==A){ut.buffers.depth.getReversed()?(Ne.copy(A.projectionMatrix),fO(Ne),dO(Ne),dn.setValue(q,"projectionMatrix",Ne)):dn.setValue(q,"projectionMatrix",A.projectionMatrix),dn.setValue(q,"viewMatrix",A.matrixWorldInverse);const or=dn.map.cameraPosition;or!==void 0&&or.setValue(q,st.setFromMatrixPosition(A.matrixWorld)),Rt.logarithmicDepthBuffer&&dn.setValue(q,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&dn.setValue(q,"isOrthographic",A.isOrthographicCamera===!0),D!==A&&(D=A,Bn=!0,$i=!0)}if(X.isSkinnedMesh){dn.setOptional(q,X,"bindMatrix"),dn.setOptional(q,X,"bindMatrixInverse");const si=X.skeleton;si&&(si.boneTexture===null&&si.computeBoneTexture(),dn.setValue(q,"boneTexture",si.boneTexture,O))}X.isBatchedMesh&&(dn.setOptional(q,X,"batchingTexture"),dn.setValue(q,"batchingTexture",X._matricesTexture,O),dn.setOptional(q,X,"batchingIdTexture"),dn.setValue(q,"batchingIdTexture",X._indirectTexture,O),dn.setOptional(q,X,"batchingColorTexture"),X._colorsTexture!==null&&dn.setValue(q,"batchingColorTexture",X._colorsTexture,O));const gr=ne.morphAttributes;if((gr.position!==void 0||gr.normal!==void 0||gr.color!==void 0)&&Ke.update(X,ne,pi),(Bn||dt.receiveShadow!==X.receiveShadow)&&(dt.receiveShadow=X.receiveShadow,dn.setValue(q,"receiveShadow",X.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(oi.envMap.value=at,oi.flipEnvMap.value=at.isCubeTexture&&at.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&Y.environment!==null&&(oi.envMapIntensity.value=Y.environmentIntensity),Bn&&(dn.setValue(q,"toneMappingExposure",P.toneMappingExposure),dt.needsLights&&zn(oi,$i),Ue&&ie.fog===!0&&Pe.refreshFogUniforms(oi,Ue),Pe.refreshMaterialUniforms(oi,ie,le,fe,_.state.transmissionRenderTarget[A.id]),kh.upload(q,Mt(dt),oi,O)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(kh.upload(q,Mt(dt),oi,O),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&dn.setValue(q,"center",X.center),dn.setValue(q,"modelViewMatrix",X.modelViewMatrix),dn.setValue(q,"normalMatrix",X.normalMatrix),dn.setValue(q,"modelMatrix",X.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const si=ie.uniformsGroups;for(let or=0,Ki=si.length;or<Ki;or++){const ws=si[or];H.update(ws,pi),H.bind(ws,pi)}}return pi}function zn(A,Y){A.ambientLightColor.needsUpdate=Y,A.lightProbe.needsUpdate=Y,A.directionalLights.needsUpdate=Y,A.directionalLightShadows.needsUpdate=Y,A.pointLights.needsUpdate=Y,A.pointLightShadows.needsUpdate=Y,A.spotLights.needsUpdate=Y,A.spotLightShadows.needsUpdate=Y,A.rectAreaLights.needsUpdate=Y,A.hemisphereLights.needsUpdate=Y}function bn(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(A,Y,ne){nt.get(A.texture).__webglTexture=Y,nt.get(A.depthTexture).__webglTexture=ne;const ie=nt.get(A);ie.__hasExternalTextures=!0,ie.__autoAllocateDepthBuffer=ne===void 0,ie.__autoAllocateDepthBuffer||gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ie.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,Y){const ne=nt.get(A);ne.__webglFramebuffer=Y,ne.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(A,Y=0,ne=0){Z=A,G=Y,z=ne;let ie=!0,X=null,Ue=!1,He=!1;if(A){const at=nt.get(A);if(at.__useDefaultFramebuffer!==void 0)ut.bindFramebuffer(q.FRAMEBUFFER,null),ie=!1;else if(at.__webglFramebuffer===void 0)O.setupRenderTarget(A);else if(at.__hasExternalTextures)O.rebindTextures(A,nt.get(A.texture).__webglTexture,nt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const it=A.depthTexture;if(at.__boundDepthTexture!==it){if(it!==null&&nt.has(it)&&(A.width!==it.image.width||A.height!==it.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(A)}}const At=A.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(He=!0);const Pt=nt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Pt[Y])?X=Pt[Y][ne]:X=Pt[Y],Ue=!0):A.samples>0&&O.useMultisampledRTT(A)===!1?X=nt.get(A).__webglMultisampledFramebuffer:Array.isArray(Pt)?X=Pt[ne]:X=Pt,V.copy(A.viewport),he.copy(A.scissor),K=A.scissorTest}else V.copy(tt).multiplyScalar(le).floor(),he.copy(ft).multiplyScalar(le).floor(),K=Ht;if(ut.bindFramebuffer(q.FRAMEBUFFER,X)&&ie&&ut.drawBuffers(A,X),ut.viewport(V),ut.scissor(he),ut.setScissorTest(K),Ue){const at=nt.get(A.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+Y,at.__webglTexture,ne)}else if(He){const at=nt.get(A.texture),At=Y||0;q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,at.__webglTexture,ne||0,At)}N=-1},this.readRenderTargetPixels=function(A,Y,ne,ie,X,Ue,He){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=nt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&He!==void 0&&(Ae=Ae[He]),Ae){ut.bindFramebuffer(q.FRAMEBUFFER,Ae);try{const at=A.texture,At=at.format,Pt=at.type;if(!Rt.textureFormatReadable(At)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Rt.textureTypeReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=A.width-ie&&ne>=0&&ne<=A.height-X&&q.readPixels(Y,ne,ie,X,pt.convert(At),pt.convert(Pt),Ue)}finally{const at=Z!==null?nt.get(Z).__webglFramebuffer:null;ut.bindFramebuffer(q.FRAMEBUFFER,at)}}},this.readRenderTargetPixelsAsync=async function(A,Y,ne,ie,X,Ue,He){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=nt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&He!==void 0&&(Ae=Ae[He]),Ae){const at=A.texture,At=at.format,Pt=at.type;if(!Rt.textureFormatReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Rt.textureTypeReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Y>=0&&Y<=A.width-ie&&ne>=0&&ne<=A.height-X){ut.bindFramebuffer(q.FRAMEBUFFER,Ae);const it=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,it),q.bufferData(q.PIXEL_PACK_BUFFER,Ue.byteLength,q.STREAM_READ),q.readPixels(Y,ne,ie,X,pt.convert(At),pt.convert(Pt),0);const Yt=Z!==null?nt.get(Z).__webglFramebuffer:null;ut.bindFramebuffer(q.FRAMEBUFFER,Yt);const fn=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await cO(q,fn,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,it),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Ue),q.deleteBuffer(it),q.deleteSync(fn),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,Y=null,ne=0){A.isTexture!==!0&&(qc("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Y=arguments[0]||null,A=arguments[1]);const ie=Math.pow(2,-ne),X=Math.floor(A.image.width*ie),Ue=Math.floor(A.image.height*ie),He=Y!==null?Y.x:0,Ae=Y!==null?Y.y:0;O.setTexture2D(A,0),q.copyTexSubImage2D(q.TEXTURE_2D,ne,0,0,He,Ae,X,Ue),ut.unbindTexture()},this.copyTextureToTexture=function(A,Y,ne=null,ie=null,X=0){A.isTexture!==!0&&(qc("WebGLRenderer: copyTextureToTexture function signature has changed."),ie=arguments[0]||null,A=arguments[1],Y=arguments[2],X=arguments[3]||0,ne=null);let Ue,He,Ae,at,At,Pt,it,Yt,fn;const pn=A.isCompressedTexture?A.mipmaps[X]:A.image;ne!==null?(Ue=ne.max.x-ne.min.x,He=ne.max.y-ne.min.y,Ae=ne.isBox3?ne.max.z-ne.min.z:1,at=ne.min.x,At=ne.min.y,Pt=ne.isBox3?ne.min.z:0):(Ue=pn.width,He=pn.height,Ae=pn.depth||1,at=0,At=0,Pt=0),ie!==null?(it=ie.x,Yt=ie.y,fn=ie.z):(it=0,Yt=0,fn=0);const Vn=pt.convert(Y.format),en=pt.convert(Y.type);let dt;Y.isData3DTexture?(O.setTexture3D(Y,0),dt=q.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(O.setTexture2DArray(Y,0),dt=q.TEXTURE_2D_ARRAY):(O.setTexture2D(Y,0),dt=q.TEXTURE_2D),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,Y.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,Y.unpackAlignment);const qi=q.getParameter(q.UNPACK_ROW_LENGTH),qt=q.getParameter(q.UNPACK_IMAGE_HEIGHT),pi=q.getParameter(q.UNPACK_SKIP_PIXELS),mi=q.getParameter(q.UNPACK_SKIP_ROWS),Bn=q.getParameter(q.UNPACK_SKIP_IMAGES);q.pixelStorei(q.UNPACK_ROW_LENGTH,pn.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,pn.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,at),q.pixelStorei(q.UNPACK_SKIP_ROWS,At),q.pixelStorei(q.UNPACK_SKIP_IMAGES,Pt);const $i=A.isDataArrayTexture||A.isData3DTexture,dn=Y.isDataArrayTexture||Y.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const oi=nt.get(A),gr=nt.get(Y),si=nt.get(oi.__renderTarget),or=nt.get(gr.__renderTarget);ut.bindFramebuffer(q.READ_FRAMEBUFFER,si.__webglFramebuffer),ut.bindFramebuffer(q.DRAW_FRAMEBUFFER,or.__webglFramebuffer);for(let Ki=0;Ki<Ae;Ki++)$i&&q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,nt.get(A).__webglTexture,X,Pt+Ki),A.isDepthTexture?(dn&&q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,nt.get(Y).__webglTexture,X,fn+Ki),q.blitFramebuffer(at,At,Ue,He,it,Yt,Ue,He,q.DEPTH_BUFFER_BIT,q.NEAREST)):dn?q.copyTexSubImage3D(dt,X,it,Yt,fn+Ki,at,At,Ue,He):q.copyTexSubImage2D(dt,X,it,Yt,fn+Ki,at,At,Ue,He);ut.bindFramebuffer(q.READ_FRAMEBUFFER,null),ut.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else dn?A.isDataTexture||A.isData3DTexture?q.texSubImage3D(dt,X,it,Yt,fn,Ue,He,Ae,Vn,en,pn.data):Y.isCompressedArrayTexture?q.compressedTexSubImage3D(dt,X,it,Yt,fn,Ue,He,Ae,Vn,pn.data):q.texSubImage3D(dt,X,it,Yt,fn,Ue,He,Ae,Vn,en,pn):A.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,X,it,Yt,Ue,He,Vn,en,pn.data):A.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,X,it,Yt,pn.width,pn.height,Vn,pn.data):q.texSubImage2D(q.TEXTURE_2D,X,it,Yt,Ue,He,Vn,en,pn);q.pixelStorei(q.UNPACK_ROW_LENGTH,qi),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,qt),q.pixelStorei(q.UNPACK_SKIP_PIXELS,pi),q.pixelStorei(q.UNPACK_SKIP_ROWS,mi),q.pixelStorei(q.UNPACK_SKIP_IMAGES,Bn),X===0&&Y.generateMipmaps&&q.generateMipmap(dt),ut.unbindTexture()},this.copyTextureToTexture3D=function(A,Y,ne=null,ie=null,X=0){return A.isTexture!==!0&&(qc("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ne=arguments[0]||null,ie=arguments[1]||null,A=arguments[2],Y=arguments[3],X=arguments[4]||0),qc('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,Y,ne,ie,X)},this.initRenderTarget=function(A){nt.get(A).__webglFramebuffer===void 0&&O.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?O.setTextureCube(A,0):A.isData3DTexture?O.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?O.setTexture2DArray(A,0):O.setTexture2D(A,0),ut.unbindTexture()},this.resetState=function(){G=0,z=0,Z=null,ut.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ja}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n;const i=this.getContext();i.drawingBufferColorspace=un._getDrawingBufferColorSpace(n),i.unpackColorSpace=un._getUnpackColorSpace()}}class Py{constructor(n,i=1,o=1e3){this.isFog=!0,this.name="",this.color=new cn(n),this.near=i,this.far=o}clone(){return new Py(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class bB extends Pi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ha,this.environmentIntensity=1,this.environmentRotation=new ha,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(n,i){return super.copy(n,i),n.background!==null&&(this.background=n.background.clone()),n.environment!==null&&(this.environment=n.environment.clone()),n.fog!==null&&(this.fog=n.fog.clone()),this.backgroundBlurriness=n.backgroundBlurriness,this.backgroundIntensity=n.backgroundIntensity,this.backgroundRotation.copy(n.backgroundRotation),this.environmentIntensity=n.environmentIntensity,this.environmentRotation.copy(n.environmentRotation),n.overrideMaterial!==null&&(this.overrideMaterial=n.overrideMaterial.clone()),this.matrixAutoUpdate=n.matrixAutoUpdate,this}toJSON(n){const i=super.toJSON(n);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class _s extends af{static get type(){return"MeshStandardMaterial"}constructor(n){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new cn(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new cn(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mT,this.normalScale=new xn(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ha,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(n)}copy(n){return super.copy(n),this.defines={STANDARD:""},this.color.copy(n.color),this.roughness=n.roughness,this.metalness=n.metalness,this.map=n.map,this.lightMap=n.lightMap,this.lightMapIntensity=n.lightMapIntensity,this.aoMap=n.aoMap,this.aoMapIntensity=n.aoMapIntensity,this.emissive.copy(n.emissive),this.emissiveMap=n.emissiveMap,this.emissiveIntensity=n.emissiveIntensity,this.bumpMap=n.bumpMap,this.bumpScale=n.bumpScale,this.normalMap=n.normalMap,this.normalMapType=n.normalMapType,this.normalScale.copy(n.normalScale),this.displacementMap=n.displacementMap,this.displacementScale=n.displacementScale,this.displacementBias=n.displacementBias,this.roughnessMap=n.roughnessMap,this.metalnessMap=n.metalnessMap,this.alphaMap=n.alphaMap,this.envMap=n.envMap,this.envMapRotation.copy(n.envMapRotation),this.envMapIntensity=n.envMapIntensity,this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this.wireframeLinecap=n.wireframeLinecap,this.wireframeLinejoin=n.wireframeLinejoin,this.flatShading=n.flatShading,this.fog=n.fog,this}}class PT extends Pi{constructor(n,i=1){super(),this.isLight=!0,this.type="Light",this.color=new cn(n),this.intensity=i}dispose(){}copy(n,i){return super.copy(n,i),this.color.copy(n.color),this.intensity=n.intensity,this}toJSON(n){const i=super.toJSON(n);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const P_=new Fn,ZM=new de,QM=new de;class MB{constructor(n){this.camera=n,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xn(512,512),this.map=null,this.mapPass=null,this.matrix=new Fn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Uy,this._frameExtents=new xn(1,1),this._viewportCount=1,this._viewports=[new On(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(n){const i=this.camera,o=this.matrix;ZM.setFromMatrixPosition(n.matrixWorld),i.position.copy(ZM),QM.setFromMatrixPosition(n.target.matrixWorld),i.lookAt(QM),i.updateMatrixWorld(),P_.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(P_),o.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),o.multiply(P_)}getViewport(n){return this._viewports[n]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(n){return this.camera=n.camera.clone(),this.intensity=n.intensity,this.bias=n.bias,this.radius=n.radius,this.mapSize.copy(n.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const n={};return this.intensity!==1&&(n.intensity=this.intensity),this.bias!==0&&(n.bias=this.bias),this.normalBias!==0&&(n.normalBias=this.normalBias),this.radius!==1&&(n.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(n.mapSize=this.mapSize.toArray()),n.camera=this.camera.toJSON(!1).object,delete n.camera.matrix,n}}class TB extends MB{constructor(){super(new AT(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class RB extends PT{constructor(n,i){super(n,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pi.DEFAULT_UP),this.updateMatrix(),this.target=new Pi,this.shadow=new TB}dispose(){this.shadow.dispose()}copy(n){return super.copy(n),this.target=n.target.clone(),this.shadow=n.shadow.clone(),this}}class CB extends PT{constructor(n,i){super(n,i),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:by}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=by);const jc=2.4,Hh=-1,xy=0,Vh=1,AB=18,wB=12,DB=({isRunning:s,onDistanceUpdate:n,onLaneChange:i,currentLane:o,triggerMoveLeft:u,triggerMoveRight:f})=>{const d=mn.useRef(null),p=mn.useRef(s);p.current=s;const m=mn.useRef(o);m.current=o;const v=mn.useRef(o),S=mn.useRef(o*jc),y=mn.useRef(0),x=mn.useRef(null),b=mn.useRef(null),C=()=>{v.current>Hh&&(v.current-=1,i(v.current))},L=()=>{v.current<Vh&&(v.current+=1,i(v.current))},M=mn.useRef(u);mn.useEffect(()=>{u!==M.current&&(M.current=u,C())},[u]);const _=mn.useRef(f);return mn.useEffect(()=>{f!==_.current&&(_.current=f,L())},[f]),mn.useEffect(()=>{const F=d.current;if(!F)return;const I=new bB;I.background=new cn(725280),I.fog=new Py(725280,30,160);const P=new wr(60,F.clientWidth/F.clientHeight,.1,250),$=new EB({antialias:!0,alpha:!1});$.setPixelRatio(Math.min(window.devicePixelRatio,2)),$.setSize(F.clientWidth,F.clientHeight),$.shadowMap.enabled=!0,$.shadowMap.type=nT,F.appendChild($.domElement);const G=new CB(16777215,.85);I.add(G);const z=new RB(8246268,1.2);z.position.set(10,25,-15),z.castShadow=!0,z.shadow.mapSize.width=1024,z.shadow.mapSize.height=1024,z.shadow.camera.near=.5,z.shadow.camera.far=100,z.shadow.camera.left=-15,z.shadow.camera.right=15,z.shadow.camera.top=20,z.shadow.camera.bottom=-20,I.add(z);const Z=jc*3,N=30,D=8,V=[],he=new _s({color:1976635,roughness:.85}),K=new _s({color:1581876,roughness:.85}),Se=new Qc({color:9741240}),ye=new _s({color:165063,roughness:.4,metalness:.2});for(let ue=0;ue<D;ue++){const se=new Wl,je=ue*N;se.position.z=je;const Pe=new Ar(Z,.4,N),ze=new Hn(Pe,ue%2===0?he:K);ze.position.y=-.2,ze.receiveShadow=!0,se.add(ze);const xe=new Ar(.3,.3,N),te=new Hn(xe,ye);te.position.set(-Z/2-.15,.05,0),se.add(te);const Te=new Hn(xe,ye);Te.position.set(Z/2+.15,.05,0),se.add(Te);const Be=new eu(.12,3);Be.rotateX(-Math.PI/2);const Ke=[-jc/2,jc/2];for(const Oe of Ke)for(let ct=-N/2+3;ct<N/2;ct+=6){const pt=new Hn(Be,Se);pt.position.set(Oe,.01,ct),se.add(pt)}I.add(se),V.push(se)}const ce=new Wl,fe=new Ar(.7,.9,.5),le=new _s({color:165063,roughness:.4}),Fe=new Hn(fe,le);Fe.position.y=.95,Fe.castShadow=!0,ce.add(Fe);const Ge=new Ar(.5,.5,.5),tt=new _s({color:3718648,roughness:.3}),ft=new Hn(Ge,tt);ft.position.y=1.7,ft.castShadow=!0,ce.add(ft);const Ht=new Ar(.42,.16,.08),me=new Qc({color:988970}),De=new Hn(Ht,me);De.position.set(0,1.72,.26),ce.add(De);const Je=new Ar(.24,.65,.24),Ne=new _s({color:1976635,roughness:.5}),rt=new Hn(Je,Ne);rt.position.set(-.2,.35,0),rt.castShadow=!0,ce.add(rt);const st=new Hn(Je,Ne);st.position.set(.2,.35,0),st.castShadow=!0,ce.add(st);const vt=new Ar(.18,.6,.18),zt=new _s({color:223649,roughness:.4}),xt=new Hn(vt,zt);xt.position.set(-.46,.95,0),xt.castShadow=!0,ce.add(xt);const Ft=new Hn(vt,zt);Ft.position.set(.46,.95,0),Ft.castShadow=!0,ce.add(Ft);const q=new eu(1,.8);q.rotateX(-Math.PI/2);const an=new Qc({color:0,transparent:!0,opacity:.35}),gt=new Hn(q,an);gt.position.y=.02,ce.add(gt),I.add(ce);const Rt=ue=>{p.current&&(ue.key==="ArrowLeft"||ue.key==="a"||ue.key==="A"?C():(ue.key==="ArrowRight"||ue.key==="d"||ue.key==="D")&&L())},ut=ue=>{!p.current||ue.touches.length===0||(x.current=ue.touches[0].clientX,b.current=ue.touches[0].clientY)},Gt=ue=>{if(!p.current||x.current===null)return;const se=ue.changedTouches[0].clientX,je=ue.changedTouches[0].clientY,Pe=se-x.current,ze=je-(b.current??je),xe=30;if(Math.abs(Pe)>Math.abs(ze)&&Math.abs(Pe)>xe)Pe<0?C():L();else if(Math.abs(Pe)<=xe&&Math.abs(ze)<=xe){const te=F.getBoundingClientRect(),Te=se-te.left;Te<te.width*.45?C():Te>te.width*.55&&L()}x.current=null,b.current=null};window.addEventListener("keydown",Rt),F.addEventListener("touchstart",ut,{passive:!0}),F.addEventListener("touchend",Gt,{passive:!0});const nt=()=>{if(!F)return;const ue=F.clientWidth,se=F.clientHeight;P.aspect=ue/se,P.updateProjectionMatrix(),$.setSize(ue,se)};window.addEventListener("resize",nt);let O,R=performance.now(),Q=0;const Ee=ue=>{O=requestAnimationFrame(Ee);const se=Math.min((ue-R)/1e3,.1);if(R=ue,p.current){y.current+=AB*se,n(Math.floor(y.current));const je=v.current*jc;S.current+=(je-S.current)*wB*se;const Pe=(je-S.current)*-.22;ce.rotation.z=lO.lerp(ce.rotation.z,Pe,.2),Q+=se*14;const ze=Math.sin(Q);rt.rotation.x=ze*.75,st.rotation.x=-ze*.75,xt.rotation.x=-ze*.65,Ft.rotation.x=ze*.65;const xe=Math.abs(Math.sin(Q*2))*.08;Fe.position.y=.95+xe,ft.position.y=1.7+xe,De.position.y=1.72+xe,ce.position.set(S.current,0,y.current),P.position.set(S.current*.45,3.2,y.current-5.5),P.lookAt(S.current*.2,1.2,y.current+8),z.position.z=y.current-15,z.target.position.z=y.current+5,z.target.updateMatrixWorld();for(const te of V)te.position.z<y.current-N&&(te.position.z+=D*N)}$.render(I,P)};return O=requestAnimationFrame(Ee),()=>{cancelAnimationFrame(O),window.removeEventListener("keydown",Rt),window.removeEventListener("resize",nt),F.removeEventListener("touchstart",ut),F.removeEventListener("touchend",Gt),$.domElement.parentNode===F&&F.removeChild($.domElement),$.dispose()}},[]),rn.jsxDEV("div",{ref:d,className:"relative w-full h-full cursor-pointer select-none overflow-hidden","data-testid":"game_canvas"},void 0,!1,{fileName:"/app/applet/src/components/GameCanvas.tsx",lineNumber:409,columnNumber:5},void 0)};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LB=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),OT=(...s)=>s.filter((n,i,o)=>!!n&&n.trim()!==""&&o.indexOf(n)===i).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var UB={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NB=mn.forwardRef(({color:s="currentColor",size:n=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:u="",children:f,iconNode:d,...p},m)=>mn.createElement("svg",{ref:m,...UB,width:n,height:n,stroke:s,strokeWidth:o?Number(i)*24/Number(n):i,className:OT("lucide",u),...p},[...d.map(([v,S])=>mn.createElement(v,S)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const of=(s,n)=>{const i=mn.forwardRef(({className:o,...u},f)=>mn.createElement(NB,{ref:f,iconNode:n,className:OT(`lucide-${LB(s)}`,o),...u}));return i.displayName=`${s}`,i};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PB=of("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OB=of("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FB=of("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JM=of("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IB=of("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]),zB=({distance:s,currentLane:n,isRunning:i,onTogglePause:o,onReset:u,onMoveLeft:f,onMoveRight:d})=>rn.jsxDEV("div",{className:"absolute inset-0 pointer-events-none flex flex-col justify-between p-4 z-10 select-none",children:[rn.jsxDEV("div",{className:"flex items-center justify-between pointer-events-auto",children:[rn.jsxDEV("div",{className:"bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-2xl px-4 py-2 shadow-lg flex items-center gap-2",children:[rn.jsxDEV("span",{className:"text-xs font-bold uppercase tracking-wider text-slate-400",children:"Distance"},void 0,!1,{fileName:"/app/applet/src/components/HUD.tsx",lineNumber:30,columnNumber:11},void 0),rn.jsxDEV("span",{className:"text-lg font-black text-sky-400 tabular-nums",children:[s," m"]},void 0,!0,{fileName:"/app/applet/src/components/HUD.tsx",lineNumber:33,columnNumber:11},void 0)]},void 0,!0,{fileName:"/app/applet/src/components/HUD.tsx",lineNumber:29,columnNumber:9},void 0),rn.jsxDEV("div",{className:"flex items-center gap-2",children:[rn.jsxDEV("button",{onClick:u,title:"Restart run",className:"w-11 h-11 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-800 text-slate-300 hover:text-white active:scale-95 flex items-center justify-center transition-transform shadow-lg",children:rn.jsxDEV(IB,{className:"w-5 h-5"},void 0,!1,{fileName:"/app/applet/src/components/HUD.tsx",lineNumber:45,columnNumber:13},void 0)},void 0,!1,{fileName:"/app/applet/src/components/HUD.tsx",lineNumber:40,columnNumber:11},void 0),rn.jsxDEV("button",{onClick:o,title:i?"Pause":"Resume",className:"w-11 h-11 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-800 text-sky-400 hover:text-sky-300 active:scale-95 flex items-center justify-center transition-transform shadow-lg",children:i?rn.jsxDEV(FB,{className:"w-5 h-5"},void 0,!1,{fileName:"/app/applet/src/components/HUD.tsx",lineNumber:53,columnNumber:26},void 0):rn.jsxDEV(JM,{className:"w-5 h-5 ml-0.5"},void 0,!1,{fileName:"/app/applet/src/components/HUD.tsx",lineNumber:53,columnNumber:58},void 0)},void 0,!1,{fileName:"/app/applet/src/components/HUD.tsx",lineNumber:48,columnNumber:11},void 0)]},void 0,!0,{fileName:"/app/applet/src/components/HUD.tsx",lineNumber:39,columnNumber:9},void 0)]},void 0,!0,{fileName:"/app/applet/src/components/HUD.tsx",lineNumber:27,columnNumber:7},void 0),rn.jsxDEV("div",{className:"flex items-center justify-between pointer-events-auto pb-2",children:[rn.jsxDEV("button",{onClick:f,disabled:n<=Hh,className:`w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-md border transition-all shadow-xl active:scale-95 ${n>Hh?"bg-slate-900/90 border-slate-700 text-sky-400 hover:bg-slate-800":"bg-slate-950/40 border-slate-900/40 text-slate-600 cursor-not-allowed"}`,"aria-label":"Move left lane",children:rn.jsxDEV(PB,{className:"w-8 h-8"},void 0,!1,{fileName:"/app/applet/src/components/HUD.tsx",lineNumber:71,columnNumber:11},void 0)},void 0,!1,{fileName:"/app/applet/src/components/HUD.tsx",lineNumber:61,columnNumber:9},void 0),rn.jsxDEV("div",{className:"bg-slate-900/80 backdrop-blur-md border border-slate-800 px-3.5 py-2 rounded-2xl flex items-center gap-2 shadow-lg",children:[rn.jsxDEV("div",{className:`w-7 h-5 rounded flex items-center justify-center text-xs font-bold transition-colors ${n===Hh?"bg-sky-500 text-white shadow-sm":"bg-slate-800 text-slate-400"}`,children:"L"},void 0,!1,{fileName:"/app/applet/src/components/HUD.tsx",lineNumber:76,columnNumber:11},void 0),rn.jsxDEV("div",{className:`w-7 h-5 rounded flex items-center justify-center text-xs font-bold transition-colors ${n===xy?"bg-sky-500 text-white shadow-sm":"bg-slate-800 text-slate-400"}`,children:"C"},void 0,!1,{fileName:"/app/applet/src/components/HUD.tsx",lineNumber:85,columnNumber:11},void 0),rn.jsxDEV("div",{className:`w-7 h-5 rounded flex items-center justify-center text-xs font-bold transition-colors ${n===Vh?"bg-sky-500 text-white shadow-sm":"bg-slate-800 text-slate-400"}`,children:"R"},void 0,!1,{fileName:"/app/applet/src/components/HUD.tsx",lineNumber:94,columnNumber:11},void 0)]},void 0,!0,{fileName:"/app/applet/src/components/HUD.tsx",lineNumber:75,columnNumber:9},void 0),rn.jsxDEV("button",{onClick:d,disabled:n>=Vh,className:`w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-md border transition-all shadow-xl active:scale-95 ${n<Vh?"bg-slate-900/90 border-slate-700 text-sky-400 hover:bg-slate-800":"bg-slate-950/40 border-slate-900/40 text-slate-600 cursor-not-allowed"}`,"aria-label":"Move right lane",children:rn.jsxDEV(OB,{className:"w-8 h-8"},void 0,!1,{fileName:"/app/applet/src/components/HUD.tsx",lineNumber:116,columnNumber:11},void 0)},void 0,!1,{fileName:"/app/applet/src/components/HUD.tsx",lineNumber:106,columnNumber:9},void 0)]},void 0,!0,{fileName:"/app/applet/src/components/HUD.tsx",lineNumber:59,columnNumber:7},void 0),!i&&rn.jsxDEV("div",{className:"absolute inset-0 bg-slate-950/75 backdrop-blur-sm pointer-events-auto flex items-center justify-center p-6",children:rn.jsxDEV("div",{className:"bg-slate-900 border border-slate-800 rounded-3xl p-8 max-w-xs w-full text-center shadow-2xl animate-fade-in",children:[rn.jsxDEV("h2",{className:"text-xl font-black text-white uppercase tracking-wider mb-2",children:"Game Paused"},void 0,!1,{fileName:"/app/applet/src/components/HUD.tsx",lineNumber:124,columnNumber:13},void 0),rn.jsxDEV("p",{className:"text-sm text-slate-400 mb-6",children:["Distance: ",rn.jsxDEV("span",{className:"font-semibold text-sky-400",children:[s," m"]},void 0,!0,{fileName:"/app/applet/src/components/HUD.tsx",lineNumber:128,columnNumber:25},void 0)]},void 0,!0,{fileName:"/app/applet/src/components/HUD.tsx",lineNumber:127,columnNumber:13},void 0),rn.jsxDEV("button",{onClick:o,className:"w-full py-3.5 px-6 rounded-xl bg-sky-600 hover:bg-sky-500 active:scale-98 text-white font-bold text-sm tracking-wide transition-all shadow-lg flex items-center justify-center gap-2",children:[rn.jsxDEV(JM,{className:"w-4 h-4 fill-white"},void 0,!1,{fileName:"/app/applet/src/components/HUD.tsx",lineNumber:135,columnNumber:15},void 0),"Resume Run"]},void 0,!0,{fileName:"/app/applet/src/components/HUD.tsx",lineNumber:131,columnNumber:13},void 0)]},void 0,!0,{fileName:"/app/applet/src/components/HUD.tsx",lineNumber:123,columnNumber:11},void 0)},void 0,!1,{fileName:"/app/applet/src/components/HUD.tsx",lineNumber:122,columnNumber:9},void 0)]},void 0,!0,{fileName:"/app/applet/src/components/HUD.tsx",lineNumber:25,columnNumber:5},void 0),BB=()=>{const[s,n]=mn.useState(0),[i,o]=mn.useState(xy),[u,f]=mn.useState(!0),[d,p]=mn.useState(0),[m,v]=mn.useState(0),[S,y]=mn.useState(0),x=mn.useCallback(()=>{p(F=>F+1)},[]),b=mn.useCallback(()=>{v(F=>F+1)},[]),C=mn.useCallback(()=>{f(F=>!F)},[]),L=mn.useCallback(()=>{n(0),o(xy),f(!0),y(F=>F+1)},[]),M=mn.useCallback(F=>{n(F)},[]),_=mn.useCallback(F=>{o(F)},[]);return rn.jsxDEV("div",{className:"w-screen h-screen bg-slate-950 flex items-center justify-center overflow-hidden",children:rn.jsxDEV("div",{className:"relative w-full h-full max-w-[480px] max-h-[960px] bg-slate-900 md:rounded-3xl md:overflow-hidden md:border md:border-slate-800 md:shadow-2xl shadow-sky-950/20",children:[rn.jsxDEV(DB,{isRunning:u,currentLane:i,onDistanceUpdate:M,onLaneChange:_,triggerMoveLeft:d,triggerMoveRight:m},S,!1,{fileName:"/app/applet/src/App.tsx",lineNumber:49,columnNumber:9},void 0),rn.jsxDEV(zB,{distance:s,currentLane:i,isRunning:u,onTogglePause:C,onReset:L,onMoveLeft:x,onMoveRight:b},void 0,!1,{fileName:"/app/applet/src/App.tsx",lineNumber:59,columnNumber:9},void 0)]},void 0,!0,{fileName:"/app/applet/src/App.tsx",lineNumber:48,columnNumber:7},void 0)},void 0,!1,{fileName:"/app/applet/src/App.tsx",lineNumber:46,columnNumber:5},void 0)};aP.createRoot(document.getElementById("root")).render(rn.jsxDEV(QN.StrictMode,{children:rn.jsxDEV(BB,{},void 0,!1,{fileName:"/app/applet/src/main.tsx",lineNumber:8,columnNumber:5},void 0)},void 0,!1,{fileName:"/app/applet/src/main.tsx",lineNumber:7,columnNumber:3},void 0));
