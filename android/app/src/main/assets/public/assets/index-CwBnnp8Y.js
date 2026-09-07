(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(a){if(a.ep)return;a.ep=!0;const u=n(a);fetch(a.href,u)}})();function Am(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var dc={exports:{}},bo={},hc={exports:{}},dt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mp;function z_(){if(mp)return dt;mp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.iterator;function x(I){return I===null||typeof I!="object"?null:(I=v&&I[v]||I["@@iterator"],typeof I=="function"?I:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,A={};function S(I,ee,Ne){this.props=I,this.context=ee,this.refs=A,this.updater=Ne||y}S.prototype.isReactComponent={},S.prototype.setState=function(I,ee){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,ee,"setState")},S.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function g(){}g.prototype=S.prototype;function D(I,ee,Ne){this.props=I,this.context=ee,this.refs=A,this.updater=Ne||y}var U=D.prototype=new g;U.constructor=D,T(U,S.prototype),U.isPureReactComponent=!0;var C=Array.isArray,$=Object.prototype.hasOwnProperty,z={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function X(I,ee,Ne){var K,fe={},ye=null,ve=null;if(ee!=null)for(K in ee.ref!==void 0&&(ve=ee.ref),ee.key!==void 0&&(ye=""+ee.key),ee)$.call(ee,K)&&!N.hasOwnProperty(K)&&(fe[K]=ee[K]);var Ae=arguments.length-2;if(Ae===1)fe.children=Ne;else if(1<Ae){for(var Le=Array(Ae),qe=0;qe<Ae;qe++)Le[qe]=arguments[qe+2];fe.children=Le}if(I&&I.defaultProps)for(K in Ae=I.defaultProps,Ae)fe[K]===void 0&&(fe[K]=Ae[K]);return{$$typeof:s,type:I,key:ye,ref:ve,props:fe,_owner:z.current}}function P(I,ee){return{$$typeof:s,type:I.type,key:ee,ref:I.ref,props:I.props,_owner:I._owner}}function R(I){return typeof I=="object"&&I!==null&&I.$$typeof===s}function k(I){var ee={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Ne){return ee[Ne]})}var ue=/\/+/g;function Q(I,ee){return typeof I=="object"&&I!==null&&I.key!=null?k(""+I.key):ee.toString(36)}function de(I,ee,Ne,K,fe){var ye=typeof I;(ye==="undefined"||ye==="boolean")&&(I=null);var ve=!1;if(I===null)ve=!0;else switch(ye){case"string":case"number":ve=!0;break;case"object":switch(I.$$typeof){case s:case e:ve=!0}}if(ve)return ve=I,fe=fe(ve),I=K===""?"."+Q(ve,0):K,C(fe)?(Ne="",I!=null&&(Ne=I.replace(ue,"$&/")+"/"),de(fe,ee,Ne,"",function(qe){return qe})):fe!=null&&(R(fe)&&(fe=P(fe,Ne+(!fe.key||ve&&ve.key===fe.key?"":(""+fe.key).replace(ue,"$&/")+"/")+I)),ee.push(fe)),1;if(ve=0,K=K===""?".":K+":",C(I))for(var Ae=0;Ae<I.length;Ae++){ye=I[Ae];var Le=K+Q(ye,Ae);ve+=de(ye,ee,Ne,Le,fe)}else if(Le=x(I),typeof Le=="function")for(I=Le.call(I),Ae=0;!(ye=I.next()).done;)ye=ye.value,Le=K+Q(ye,Ae++),ve+=de(ye,ee,Ne,Le,fe);else if(ye==="object")throw ee=String(I),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.");return ve}function he(I,ee,Ne){if(I==null)return I;var K=[],fe=0;return de(I,K,"","",function(ye){return ee.call(Ne,ye,fe++)}),K}function ie(I){if(I._status===-1){var ee=I._result;ee=ee(),ee.then(function(Ne){(I._status===0||I._status===-1)&&(I._status=1,I._result=Ne)},function(Ne){(I._status===0||I._status===-1)&&(I._status=2,I._result=Ne)}),I._status===-1&&(I._status=0,I._result=ee)}if(I._status===1)return I._result.default;throw I._result}var ce={current:null},O={transition:null},ae={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:O,ReactCurrentOwner:z};function oe(){throw Error("act(...) is not supported in production builds of React.")}return dt.Children={map:he,forEach:function(I,ee,Ne){he(I,function(){ee.apply(this,arguments)},Ne)},count:function(I){var ee=0;return he(I,function(){ee++}),ee},toArray:function(I){return he(I,function(ee){return ee})||[]},only:function(I){if(!R(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},dt.Component=S,dt.Fragment=n,dt.Profiler=a,dt.PureComponent=D,dt.StrictMode=r,dt.Suspense=p,dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,dt.act=oe,dt.cloneElement=function(I,ee,Ne){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var K=T({},I.props),fe=I.key,ye=I.ref,ve=I._owner;if(ee!=null){if(ee.ref!==void 0&&(ye=ee.ref,ve=z.current),ee.key!==void 0&&(fe=""+ee.key),I.type&&I.type.defaultProps)var Ae=I.type.defaultProps;for(Le in ee)$.call(ee,Le)&&!N.hasOwnProperty(Le)&&(K[Le]=ee[Le]===void 0&&Ae!==void 0?Ae[Le]:ee[Le])}var Le=arguments.length-2;if(Le===1)K.children=Ne;else if(1<Le){Ae=Array(Le);for(var qe=0;qe<Le;qe++)Ae[qe]=arguments[qe+2];K.children=Ae}return{$$typeof:s,type:I.type,key:fe,ref:ye,props:K,_owner:ve}},dt.createContext=function(I){return I={$$typeof:d,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:u,_context:I},I.Consumer=I},dt.createElement=X,dt.createFactory=function(I){var ee=X.bind(null,I);return ee.type=I,ee},dt.createRef=function(){return{current:null}},dt.forwardRef=function(I){return{$$typeof:f,render:I}},dt.isValidElement=R,dt.lazy=function(I){return{$$typeof:_,_payload:{_status:-1,_result:I},_init:ie}},dt.memo=function(I,ee){return{$$typeof:m,type:I,compare:ee===void 0?null:ee}},dt.startTransition=function(I){var ee=O.transition;O.transition={};try{I()}finally{O.transition=ee}},dt.unstable_act=oe,dt.useCallback=function(I,ee){return ce.current.useCallback(I,ee)},dt.useContext=function(I){return ce.current.useContext(I)},dt.useDebugValue=function(){},dt.useDeferredValue=function(I){return ce.current.useDeferredValue(I)},dt.useEffect=function(I,ee){return ce.current.useEffect(I,ee)},dt.useId=function(){return ce.current.useId()},dt.useImperativeHandle=function(I,ee,Ne){return ce.current.useImperativeHandle(I,ee,Ne)},dt.useInsertionEffect=function(I,ee){return ce.current.useInsertionEffect(I,ee)},dt.useLayoutEffect=function(I,ee){return ce.current.useLayoutEffect(I,ee)},dt.useMemo=function(I,ee){return ce.current.useMemo(I,ee)},dt.useReducer=function(I,ee,Ne){return ce.current.useReducer(I,ee,Ne)},dt.useRef=function(I){return ce.current.useRef(I)},dt.useState=function(I){return ce.current.useState(I)},dt.useSyncExternalStore=function(I,ee,Ne){return ce.current.useSyncExternalStore(I,ee,Ne)},dt.useTransition=function(){return ce.current.useTransition()},dt.version="18.3.1",dt}var gp;function If(){return gp||(gp=1,hc.exports=z_()),hc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _p;function H_(){if(_p)return bo;_p=1;var s=If(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function d(f,p,m){var _,v={},x=null,y=null;m!==void 0&&(x=""+m),p.key!==void 0&&(x=""+p.key),p.ref!==void 0&&(y=p.ref);for(_ in p)r.call(p,_)&&!u.hasOwnProperty(_)&&(v[_]=p[_]);if(f&&f.defaultProps)for(_ in p=f.defaultProps,p)v[_]===void 0&&(v[_]=p[_]);return{$$typeof:e,type:f,key:x,ref:y,props:v,_owner:a.current}}return bo.Fragment=n,bo.jsx=d,bo.jsxs=d,bo}var vp;function V_(){return vp||(vp=1,dc.exports=H_()),dc.exports}var mt=V_(),At=If();const G_=Am(At);var Ja={},pc={exports:{}},Pn={},mc={exports:{}},gc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xp;function W_(){return xp||(xp=1,(function(s){function e(O,ae){var oe=O.length;O.push(ae);e:for(;0<oe;){var I=oe-1>>>1,ee=O[I];if(0<a(ee,ae))O[I]=ae,O[oe]=ee,oe=I;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var ae=O[0],oe=O.pop();if(oe!==ae){O[0]=oe;e:for(var I=0,ee=O.length,Ne=ee>>>1;I<Ne;){var K=2*(I+1)-1,fe=O[K],ye=K+1,ve=O[ye];if(0>a(fe,oe))ye<ee&&0>a(ve,fe)?(O[I]=ve,O[ye]=oe,I=ye):(O[I]=fe,O[K]=oe,I=K);else if(ye<ee&&0>a(ve,oe))O[I]=ve,O[ye]=oe,I=ye;else break e}}return ae}function a(O,ae){var oe=O.sortIndex-ae.sortIndex;return oe!==0?oe:O.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var d=Date,f=d.now();s.unstable_now=function(){return d.now()-f}}var p=[],m=[],_=1,v=null,x=3,y=!1,T=!1,A=!1,S=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function U(O){for(var ae=n(m);ae!==null;){if(ae.callback===null)r(m);else if(ae.startTime<=O)r(m),ae.sortIndex=ae.expirationTime,e(p,ae);else break;ae=n(m)}}function C(O){if(A=!1,U(O),!T)if(n(p)!==null)T=!0,ie($);else{var ae=n(m);ae!==null&&ce(C,ae.startTime-O)}}function $(O,ae){T=!1,A&&(A=!1,g(X),X=-1),y=!0;var oe=x;try{for(U(ae),v=n(p);v!==null&&(!(v.expirationTime>ae)||O&&!k());){var I=v.callback;if(typeof I=="function"){v.callback=null,x=v.priorityLevel;var ee=I(v.expirationTime<=ae);ae=s.unstable_now(),typeof ee=="function"?v.callback=ee:v===n(p)&&r(p),U(ae)}else r(p);v=n(p)}if(v!==null)var Ne=!0;else{var K=n(m);K!==null&&ce(C,K.startTime-ae),Ne=!1}return Ne}finally{v=null,x=oe,y=!1}}var z=!1,N=null,X=-1,P=5,R=-1;function k(){return!(s.unstable_now()-R<P)}function ue(){if(N!==null){var O=s.unstable_now();R=O;var ae=!0;try{ae=N(!0,O)}finally{ae?Q():(z=!1,N=null)}}else z=!1}var Q;if(typeof D=="function")Q=function(){D(ue)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,he=de.port2;de.port1.onmessage=ue,Q=function(){he.postMessage(null)}}else Q=function(){S(ue,0)};function ie(O){N=O,z||(z=!0,Q())}function ce(O,ae){X=S(function(){O(s.unstable_now())},ae)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(O){O.callback=null},s.unstable_continueExecution=function(){T||y||(T=!0,ie($))},s.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<O?Math.floor(1e3/O):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return n(p)},s.unstable_next=function(O){switch(x){case 1:case 2:case 3:var ae=3;break;default:ae=x}var oe=x;x=ae;try{return O()}finally{x=oe}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(O,ae){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var oe=x;x=O;try{return ae()}finally{x=oe}},s.unstable_scheduleCallback=function(O,ae,oe){var I=s.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?I+oe:I):oe=I,O){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=oe+ee,O={id:_++,callback:ae,priorityLevel:O,startTime:oe,expirationTime:ee,sortIndex:-1},oe>I?(O.sortIndex=oe,e(m,O),n(p)===null&&O===n(m)&&(A?(g(X),X=-1):A=!0,ce(C,oe-I))):(O.sortIndex=ee,e(p,O),T||y||(T=!0,ie($))),O},s.unstable_shouldYield=k,s.unstable_wrapCallback=function(O){var ae=x;return function(){var oe=x;x=ae;try{return O.apply(this,arguments)}finally{x=oe}}}})(gc)),gc}var Sp;function X_(){return Sp||(Sp=1,mc.exports=W_()),mc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yp;function Y_(){if(yp)return Pn;yp=1;var s=If(),e=X_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function u(t,i){d(t,i),d(t+"Capture",i)}function d(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},v={};function x(t){return p.call(v,t)?!0:p.call(_,t)?!1:m.test(t)?v[t]=!0:(_[t]=!0,!1)}function y(t,i,o,l){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T(t,i,o,l){if(i===null||typeof i>"u"||y(t,i,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function A(t,i,o,l,c,h,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=c,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=M}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){S[t]=new A(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];S[i]=new A(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){S[t]=new A(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){S[t]=new A(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){S[t]=new A(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){S[t]=new A(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){S[t]=new A(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){S[t]=new A(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){S[t]=new A(t,5,!1,t.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function D(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(g,D);S[i]=new A(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(g,D);S[i]=new A(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(g,D);S[i]=new A(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){S[t]=new A(t,1,!1,t.toLowerCase(),null,!1,!1)}),S.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){S[t]=new A(t,1,!1,t.toLowerCase(),null,!0,!0)});function U(t,i,o,l){var c=S.hasOwnProperty(i)?S[i]:null;(c!==null?c.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,o,c,l)&&(o=null),l||c===null?x(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):c.mustUseProperty?t[c.propertyName]=o===null?c.type===3?!1:"":o:(i=c.attributeName,l=c.attributeNamespace,o===null?t.removeAttribute(i):(c=c.type,o=c===3||c===4&&o===!0?"":""+o,l?t.setAttributeNS(l,i,o):t.setAttribute(i,o))))}var C=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$=Symbol.for("react.element"),z=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),k=Symbol.for("react.context"),ue=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),ie=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),O=Symbol.iterator;function ae(t){return t===null||typeof t!="object"?null:(t=O&&t[O]||t["@@iterator"],typeof t=="function"?t:null)}var oe=Object.assign,I;function ee(t){if(I===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+t}var Ne=!1;function K(t,i){if(!t||Ne)return"";Ne=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(Z){var l=Z}Reflect.construct(t,[],i)}else{try{i.call()}catch(Z){l=Z}t.call(i.prototype)}else{try{throw Error()}catch(Z){l=Z}t()}}catch(Z){if(Z&&l&&typeof Z.stack=="string"){for(var c=Z.stack.split(`
`),h=l.stack.split(`
`),M=c.length-1,L=h.length-1;1<=M&&0<=L&&c[M]!==h[L];)L--;for(;1<=M&&0<=L;M--,L--)if(c[M]!==h[L]){if(M!==1||L!==1)do if(M--,L--,0>L||c[M]!==h[L]){var F=`
`+c[M].replace(" at new "," at ");return t.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",t.displayName)),F}while(1<=M&&0<=L);break}}}finally{Ne=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?ee(t):""}function fe(t){switch(t.tag){case 5:return ee(t.type);case 16:return ee("Lazy");case 13:return ee("Suspense");case 19:return ee("SuspenseList");case 0:case 2:case 15:return t=K(t.type,!1),t;case 11:return t=K(t.type.render,!1),t;case 1:return t=K(t.type,!0),t;default:return""}}function ye(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case N:return"Fragment";case z:return"Portal";case P:return"Profiler";case X:return"StrictMode";case Q:return"Suspense";case de:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case k:return(t.displayName||"Context")+".Consumer";case R:return(t._context.displayName||"Context")+".Provider";case ue:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case he:return i=t.displayName||null,i!==null?i:ye(t.type)||"Memo";case ie:i=t._payload,t=t._init;try{return ye(t(i))}catch{}}return null}function ve(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ye(i);case 8:return i===X?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ae(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Le(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function qe(t){var i=Le(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return c.call(this)},set:function(M){l=""+M,h.call(this,M)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Et(t){t._valueTracker||(t._valueTracker=qe(t))}function at(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),l="";return t&&(l=Le(t)?t.checked?"true":"false":t.value),t=l,t!==o?(i.setValue(t),!0):!1}function Tt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function V(t,i){var o=i.checked;return oe({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function nn(t,i){var o=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;o=Ae(i.value!=null?i.value:o),t._wrapperState={initialChecked:l,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ct(t,i){i=i.checked,i!=null&&U(t,"checked",i,!1)}function lt(t,i){ct(t,i);var o=Ae(i.value),l=i.type;if(o!=null)l==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?St(t,i.type,o):i.hasOwnProperty("defaultValue")&&St(t,i.type,Ae(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function je(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function St(t,i,o){(i!=="number"||Tt(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var Xe=Array.isArray;function b(t,i,o,l){if(t=t.options,i){i={};for(var c=0;c<o.length;c++)i["$"+o[c]]=!0;for(o=0;o<t.length;o++)c=i.hasOwnProperty("$"+t[o].value),t[o].selected!==c&&(t[o].selected=c),c&&l&&(t[o].defaultSelected=!0)}else{for(o=""+Ae(o),i=null,c=0;c<t.length;c++){if(t[c].value===o){t[c].selected=!0,l&&(t[c].defaultSelected=!0);return}i!==null||t[c].disabled||(i=t[c])}i!==null&&(i.selected=!0)}}function E(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return oe({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function j(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(Xe(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:Ae(o)}}function me(t,i){var o=Ae(i.value),l=Ae(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),l!=null&&(t.defaultValue=""+l)}function le(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function re(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fe(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?re(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var we,Re=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,l,c){MSApp.execUnsafeLocalFunction(function(){return t(i,o,l,c)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(we=we||document.createElement("div"),we.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=we.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Qe(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var _e={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ue=["Webkit","ms","Moz","O"];Object.keys(_e).forEach(function(t){Ue.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),_e[i]=_e[t]})});function $e(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||_e.hasOwnProperty(t)&&_e[t]?(""+i).trim():i+"px"}function Je(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var l=o.indexOf("--")===0,c=$e(o,i[o],l);o==="float"&&(o="cssFloat"),l?t.setProperty(o,c):t[o]=c}}var Oe=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function st(t,i){if(i){if(Oe[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function et(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rt=null;function H(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ce=null,se=null,pe=null;function De(t){if(t=mo(t)){if(typeof Ce!="function")throw Error(n(280));var i=t.stateNode;i&&(i=pa(i),Ce(t.stateNode,t.type,i))}}function be(t){se?pe?pe.push(t):pe=[t]:se=t}function rt(){if(se){var t=se,i=pe;if(pe=se=null,De(t),i)for(t=0;t<i.length;t++)De(i[t])}}function Ut(t,i){return t(i)}function Yt(){}var gt=!1;function Mn(t,i,o){if(gt)return t(i,o);gt=!0;try{return Ut(t,i,o)}finally{gt=!1,(se!==null||pe!==null)&&(Yt(),rt())}}function mn(t,i){var o=t.stateNode;if(o===null)return null;var l=pa(o);if(l===null)return null;o=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var Zr=!1;if(f)try{var Vi={};Object.defineProperty(Vi,"passive",{get:function(){Zr=!0}}),window.addEventListener("test",Vi,Vi),window.removeEventListener("test",Vi,Vi)}catch{Zr=!1}function Si(t,i,o,l,c,h,M,L,F){var Z=Array.prototype.slice.call(arguments,3);try{i.apply(o,Z)}catch(xe){this.onError(xe)}}var yi=!1,Sr=null,yr=!1,Gi=null,qo={onError:function(t){yi=!0,Sr=t}};function Qr(t,i,o,l,c,h,M,L,F){yi=!1,Sr=null,Si.apply(qo,arguments)}function $o(t,i,o,l,c,h,M,L,F){if(Qr.apply(this,arguments),yi){if(yi){var Z=Sr;yi=!1,Sr=null}else throw Error(n(198));yr||(yr=!0,Gi=Z)}}function ci(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function Ko(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Zo(t){if(ci(t)!==t)throw Error(n(188))}function Il(t){var i=t.alternate;if(!i){if(i=ci(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,l=i;;){var c=o.return;if(c===null)break;var h=c.alternate;if(h===null){if(l=c.return,l!==null){o=l;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===o)return Zo(c),t;if(h===l)return Zo(c),i;h=h.sibling}throw Error(n(188))}if(o.return!==l.return)o=c,l=h;else{for(var M=!1,L=c.child;L;){if(L===o){M=!0,o=c,l=h;break}if(L===l){M=!0,l=c,o=h;break}L=L.sibling}if(!M){for(L=h.child;L;){if(L===o){M=!0,o=h,l=c;break}if(L===l){M=!0,l=h,o=c;break}L=L.sibling}if(!M)throw Error(n(189))}}if(o.alternate!==l)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function w(t){return t=Il(t),t!==null?G(t):null}function G(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=G(t);if(i!==null)return i;t=t.sibling}return null}var J=e.unstable_scheduleCallback,te=e.unstable_cancelCallback,W=e.unstable_shouldYield,Te=e.unstable_requestPaint,Me=e.unstable_now,Ve=e.unstable_getCurrentPriorityLevel,ze=e.unstable_ImmediatePriority,tt=e.unstable_UserBlockingPriority,it=e.unstable_NormalPriority,Ge=e.unstable_LowPriority,pt=e.unstable_IdlePriority,wt=null,ht=null;function on(t){if(ht&&typeof ht.onCommitFiberRoot=="function")try{ht.onCommitFiberRoot(wt,t,void 0,(t.current.flags&128)===128)}catch{}}var ot=Math.clz32?Math.clz32:yt,Ye=Math.log,Kn=Math.LN2;function yt(t){return t>>>=0,t===0?32:31-(Ye(t)/Kn|0)|0}var an=64,Zn=4194304;function jt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function fi(t,i){var o=t.pendingLanes;if(o===0)return 0;var l=0,c=t.suspendedLanes,h=t.pingedLanes,M=o&268435455;if(M!==0){var L=M&~c;L!==0?l=jt(L):(h&=M,h!==0&&(l=jt(h)))}else M=o&~c,M!==0?l=jt(M):h!==0&&(l=jt(h));if(l===0)return 0;if(i!==0&&i!==l&&(i&c)===0&&(c=l&-l,h=i&-i,c>=h||c===16&&(h&4194240)!==0))return i;if((l&4)!==0&&(l|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)o=31-ot(i),c=1<<o,l|=t[o],i&=~c;return l}function Lt(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kn(t,i){for(var o=t.suspendedLanes,l=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes;0<h;){var M=31-ot(h),L=1<<M,F=c[M];F===-1?((L&o)===0||(L&l)!==0)&&(c[M]=Lt(L,i)):F<=i&&(t.expiredLanes|=L),h&=~L}}function Mi(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function gn(){var t=an;return an<<=1,(an&4194240)===0&&(an=64),t}function Bn(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function En(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-ot(i),t[i]=o}function Qo(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<o;){var c=31-ot(o),h=1<<c;i[c]=0,l[c]=-1,t[c]=-1,o&=~h}}function Nl(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var l=31-ot(o),c=1<<l;c&i|t[l]&i&&(t[l]|=i),o&=~c}}var Pt=0;function jf(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var qf,Fl,$f,Kf,Zf,Ol=!1,Jo=[],Wi=null,Xi=null,Yi=null,Qs=new Map,Js=new Map,ji=[],lg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qf(t,i){switch(t){case"focusin":case"focusout":Wi=null;break;case"dragenter":case"dragleave":Xi=null;break;case"mouseover":case"mouseout":Yi=null;break;case"pointerover":case"pointerout":Qs.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Js.delete(i.pointerId)}}function eo(t,i,o,l,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:o,eventSystemFlags:l,nativeEvent:h,targetContainers:[c]},i!==null&&(i=mo(i),i!==null&&Fl(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),t)}function ug(t,i,o,l,c){switch(i){case"focusin":return Wi=eo(Wi,t,i,o,l,c),!0;case"dragenter":return Xi=eo(Xi,t,i,o,l,c),!0;case"mouseover":return Yi=eo(Yi,t,i,o,l,c),!0;case"pointerover":var h=c.pointerId;return Qs.set(h,eo(Qs.get(h)||null,t,i,o,l,c)),!0;case"gotpointercapture":return h=c.pointerId,Js.set(h,eo(Js.get(h)||null,t,i,o,l,c)),!0}return!1}function Jf(t){var i=Mr(t.target);if(i!==null){var o=ci(i);if(o!==null){if(i=o.tag,i===13){if(i=Ko(o),i!==null){t.blockedOn=i,Zf(t.priority,function(){$f(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ea(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=Bl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var l=new o.constructor(o.type,o);Rt=l,o.target.dispatchEvent(l),Rt=null}else return i=mo(o),i!==null&&Fl(i),t.blockedOn=o,!1;i.shift()}return!0}function ed(t,i,o){ea(t)&&o.delete(i)}function cg(){Ol=!1,Wi!==null&&ea(Wi)&&(Wi=null),Xi!==null&&ea(Xi)&&(Xi=null),Yi!==null&&ea(Yi)&&(Yi=null),Qs.forEach(ed),Js.forEach(ed)}function to(t,i){t.blockedOn===i&&(t.blockedOn=null,Ol||(Ol=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,cg)))}function no(t){function i(c){return to(c,t)}if(0<Jo.length){to(Jo[0],t);for(var o=1;o<Jo.length;o++){var l=Jo[o];l.blockedOn===t&&(l.blockedOn=null)}}for(Wi!==null&&to(Wi,t),Xi!==null&&to(Xi,t),Yi!==null&&to(Yi,t),Qs.forEach(i),Js.forEach(i),o=0;o<ji.length;o++)l=ji[o],l.blockedOn===t&&(l.blockedOn=null);for(;0<ji.length&&(o=ji[0],o.blockedOn===null);)Jf(o),o.blockedOn===null&&ji.shift()}var Jr=C.ReactCurrentBatchConfig,ta=!0;function fg(t,i,o,l){var c=Pt,h=Jr.transition;Jr.transition=null;try{Pt=1,kl(t,i,o,l)}finally{Pt=c,Jr.transition=h}}function dg(t,i,o,l){var c=Pt,h=Jr.transition;Jr.transition=null;try{Pt=4,kl(t,i,o,l)}finally{Pt=c,Jr.transition=h}}function kl(t,i,o,l){if(ta){var c=Bl(t,i,o,l);if(c===null)nu(t,i,l,na,o),Qf(t,l);else if(ug(c,t,i,o,l))l.stopPropagation();else if(Qf(t,l),i&4&&-1<lg.indexOf(t)){for(;c!==null;){var h=mo(c);if(h!==null&&qf(h),h=Bl(t,i,o,l),h===null&&nu(t,i,l,na,o),h===c)break;c=h}c!==null&&l.stopPropagation()}else nu(t,i,l,null,o)}}var na=null;function Bl(t,i,o,l){if(na=null,t=H(l),t=Mr(t),t!==null)if(i=ci(t),i===null)t=null;else if(o=i.tag,o===13){if(t=Ko(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return na=t,null}function td(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ve()){case ze:return 1;case tt:return 4;case it:case Ge:return 16;case pt:return 536870912;default:return 16}default:return 16}}var qi=null,zl=null,ia=null;function nd(){if(ia)return ia;var t,i=zl,o=i.length,l,c="value"in qi?qi.value:qi.textContent,h=c.length;for(t=0;t<o&&i[t]===c[t];t++);var M=o-t;for(l=1;l<=M&&i[o-l]===c[h-l];l++);return ia=c.slice(t,1<l?1-l:void 0)}function ra(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function sa(){return!0}function id(){return!1}function Dn(t){function i(o,l,c,h,M){this._reactName=o,this._targetInst=c,this.type=l,this.nativeEvent=h,this.target=M,this.currentTarget=null;for(var L in t)t.hasOwnProperty(L)&&(o=t[L],this[L]=o?o(h):h[L]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?sa:id,this.isPropagationStopped=id,this}return oe(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=sa)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=sa)},persist:function(){},isPersistent:sa}),i}var es={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hl=Dn(es),io=oe({},es,{view:0,detail:0}),hg=Dn(io),Vl,Gl,ro,oa=oe({},io,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ro&&(ro&&t.type==="mousemove"?(Vl=t.screenX-ro.screenX,Gl=t.screenY-ro.screenY):Gl=Vl=0,ro=t),Vl)},movementY:function(t){return"movementY"in t?t.movementY:Gl}}),rd=Dn(oa),pg=oe({},oa,{dataTransfer:0}),mg=Dn(pg),gg=oe({},io,{relatedTarget:0}),Wl=Dn(gg),_g=oe({},es,{animationName:0,elapsedTime:0,pseudoElement:0}),vg=Dn(_g),xg=oe({},es,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Sg=Dn(xg),yg=oe({},es,{data:0}),sd=Dn(yg),Mg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Eg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Tg[t])?!!i[t]:!1}function Xl(){return wg}var Ag=oe({},io,{key:function(t){if(t.key){var i=Mg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ra(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Eg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xl,charCode:function(t){return t.type==="keypress"?ra(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ra(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Rg=Dn(Ag),Cg=oe({},oa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),od=Dn(Cg),Pg=oe({},io,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xl}),bg=Dn(Pg),Lg=oe({},es,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dg=Dn(Lg),Ug=oe({},oa,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ig=Dn(Ug),Ng=[9,13,27,32],Yl=f&&"CompositionEvent"in window,so=null;f&&"documentMode"in document&&(so=document.documentMode);var Fg=f&&"TextEvent"in window&&!so,ad=f&&(!Yl||so&&8<so&&11>=so),ld=" ",ud=!1;function cd(t,i){switch(t){case"keyup":return Ng.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ts=!1;function Og(t,i){switch(t){case"compositionend":return fd(i);case"keypress":return i.which!==32?null:(ud=!0,ld);case"textInput":return t=i.data,t===ld&&ud?null:t;default:return null}}function kg(t,i){if(ts)return t==="compositionend"||!Yl&&cd(t,i)?(t=nd(),ia=zl=qi=null,ts=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return ad&&i.locale!=="ko"?null:i.data;default:return null}}var Bg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dd(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Bg[t.type]:i==="textarea"}function hd(t,i,o,l){be(l),i=fa(i,"onChange"),0<i.length&&(o=new Hl("onChange","change",null,o,l),t.push({event:o,listeners:i}))}var oo=null,ao=null;function zg(t){Ld(t,0)}function aa(t){var i=os(t);if(at(i))return t}function Hg(t,i){if(t==="change")return i}var pd=!1;if(f){var jl;if(f){var ql="oninput"in document;if(!ql){var md=document.createElement("div");md.setAttribute("oninput","return;"),ql=typeof md.oninput=="function"}jl=ql}else jl=!1;pd=jl&&(!document.documentMode||9<document.documentMode)}function gd(){oo&&(oo.detachEvent("onpropertychange",_d),ao=oo=null)}function _d(t){if(t.propertyName==="value"&&aa(ao)){var i=[];hd(i,ao,t,H(t)),Mn(zg,i)}}function Vg(t,i,o){t==="focusin"?(gd(),oo=i,ao=o,oo.attachEvent("onpropertychange",_d)):t==="focusout"&&gd()}function Gg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return aa(ao)}function Wg(t,i){if(t==="click")return aa(i)}function Xg(t,i){if(t==="input"||t==="change")return aa(i)}function Yg(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Qn=typeof Object.is=="function"?Object.is:Yg;function lo(t,i){if(Qn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),l=Object.keys(i);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var c=o[l];if(!p.call(i,c)||!Qn(t[c],i[c]))return!1}return!0}function vd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function xd(t,i){var o=vd(t);t=0;for(var l;o;){if(o.nodeType===3){if(l=t+o.textContent.length,t<=i&&l>=i)return{node:o,offset:i-t};t=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=vd(o)}}function Sd(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Sd(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function yd(){for(var t=window,i=Tt();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=Tt(t.document)}return i}function $l(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function jg(t){var i=yd(),o=t.focusedElem,l=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&Sd(o.ownerDocument.documentElement,o)){if(l!==null&&$l(o)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var c=o.textContent.length,h=Math.min(l.start,c);l=l.end===void 0?h:Math.min(l.end,c),!t.extend&&h>l&&(c=l,l=h,h=c),c=xd(o,h);var M=xd(o,l);c&&M&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(c.node,c.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var qg=f&&"documentMode"in document&&11>=document.documentMode,ns=null,Kl=null,uo=null,Zl=!1;function Md(t,i,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Zl||ns==null||ns!==Tt(l)||(l=ns,"selectionStart"in l&&$l(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),uo&&lo(uo,l)||(uo=l,l=fa(Kl,"onSelect"),0<l.length&&(i=new Hl("onSelect","select",null,i,o),t.push({event:i,listeners:l}),i.target=ns)))}function la(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var is={animationend:la("Animation","AnimationEnd"),animationiteration:la("Animation","AnimationIteration"),animationstart:la("Animation","AnimationStart"),transitionend:la("Transition","TransitionEnd")},Ql={},Ed={};f&&(Ed=document.createElement("div").style,"AnimationEvent"in window||(delete is.animationend.animation,delete is.animationiteration.animation,delete is.animationstart.animation),"TransitionEvent"in window||delete is.transitionend.transition);function ua(t){if(Ql[t])return Ql[t];if(!is[t])return t;var i=is[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in Ed)return Ql[t]=i[o];return t}var Td=ua("animationend"),wd=ua("animationiteration"),Ad=ua("animationstart"),Rd=ua("transitionend"),Cd=new Map,Pd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $i(t,i){Cd.set(t,i),u(i,[t])}for(var Jl=0;Jl<Pd.length;Jl++){var eu=Pd[Jl],$g=eu.toLowerCase(),Kg=eu[0].toUpperCase()+eu.slice(1);$i($g,"on"+Kg)}$i(Td,"onAnimationEnd"),$i(wd,"onAnimationIteration"),$i(Ad,"onAnimationStart"),$i("dblclick","onDoubleClick"),$i("focusin","onFocus"),$i("focusout","onBlur"),$i(Rd,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zg=new Set("cancel close invalid load scroll toggle".split(" ").concat(co));function bd(t,i,o){var l=t.type||"unknown-event";t.currentTarget=o,$o(l,i,void 0,t),t.currentTarget=null}function Ld(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var l=t[o],c=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var M=l.length-1;0<=M;M--){var L=l[M],F=L.instance,Z=L.currentTarget;if(L=L.listener,F!==h&&c.isPropagationStopped())break e;bd(c,L,Z),h=F}else for(M=0;M<l.length;M++){if(L=l[M],F=L.instance,Z=L.currentTarget,L=L.listener,F!==h&&c.isPropagationStopped())break e;bd(c,L,Z),h=F}}}if(yr)throw t=Gi,yr=!1,Gi=null,t}function It(t,i){var o=i[lu];o===void 0&&(o=i[lu]=new Set);var l=t+"__bubble";o.has(l)||(Dd(i,t,2,!1),o.add(l))}function tu(t,i,o){var l=0;i&&(l|=4),Dd(o,t,l,i)}var ca="_reactListening"+Math.random().toString(36).slice(2);function fo(t){if(!t[ca]){t[ca]=!0,r.forEach(function(o){o!=="selectionchange"&&(Zg.has(o)||tu(o,!1,t),tu(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[ca]||(i[ca]=!0,tu("selectionchange",!1,i))}}function Dd(t,i,o,l){switch(td(i)){case 1:var c=fg;break;case 4:c=dg;break;default:c=kl}o=c.bind(null,i,o,t),c=void 0,!Zr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),l?c!==void 0?t.addEventListener(i,o,{capture:!0,passive:c}):t.addEventListener(i,o,!0):c!==void 0?t.addEventListener(i,o,{passive:c}):t.addEventListener(i,o,!1)}function nu(t,i,o,l,c){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var L=l.stateNode.containerInfo;if(L===c||L.nodeType===8&&L.parentNode===c)break;if(M===4)for(M=l.return;M!==null;){var F=M.tag;if((F===3||F===4)&&(F=M.stateNode.containerInfo,F===c||F.nodeType===8&&F.parentNode===c))return;M=M.return}for(;L!==null;){if(M=Mr(L),M===null)return;if(F=M.tag,F===5||F===6){l=h=M;continue e}L=L.parentNode}}l=l.return}Mn(function(){var Z=h,xe=H(o),Se=[];e:{var ge=Cd.get(t);if(ge!==void 0){var Ie=Hl,Be=t;switch(t){case"keypress":if(ra(o)===0)break e;case"keydown":case"keyup":Ie=Rg;break;case"focusin":Be="focus",Ie=Wl;break;case"focusout":Be="blur",Ie=Wl;break;case"beforeblur":case"afterblur":Ie=Wl;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ie=rd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ie=mg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ie=bg;break;case Td:case wd:case Ad:Ie=vg;break;case Rd:Ie=Dg;break;case"scroll":Ie=hg;break;case"wheel":Ie=Ig;break;case"copy":case"cut":case"paste":Ie=Sg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ie=od}var He=(i&4)!==0,Vt=!He&&t==="scroll",Y=He?ge!==null?ge+"Capture":null:ge;He=[];for(var B=Z,q;B!==null;){q=B;var Ee=q.stateNode;if(q.tag===5&&Ee!==null&&(q=Ee,Y!==null&&(Ee=mn(B,Y),Ee!=null&&He.push(ho(B,Ee,q)))),Vt)break;B=B.return}0<He.length&&(ge=new Ie(ge,Be,null,o,xe),Se.push({event:ge,listeners:He}))}}if((i&7)===0){e:{if(ge=t==="mouseover"||t==="pointerover",Ie=t==="mouseout"||t==="pointerout",ge&&o!==Rt&&(Be=o.relatedTarget||o.fromElement)&&(Mr(Be)||Be[Ei]))break e;if((Ie||ge)&&(ge=xe.window===xe?xe:(ge=xe.ownerDocument)?ge.defaultView||ge.parentWindow:window,Ie?(Be=o.relatedTarget||o.toElement,Ie=Z,Be=Be?Mr(Be):null,Be!==null&&(Vt=ci(Be),Be!==Vt||Be.tag!==5&&Be.tag!==6)&&(Be=null)):(Ie=null,Be=Z),Ie!==Be)){if(He=rd,Ee="onMouseLeave",Y="onMouseEnter",B="mouse",(t==="pointerout"||t==="pointerover")&&(He=od,Ee="onPointerLeave",Y="onPointerEnter",B="pointer"),Vt=Ie==null?ge:os(Ie),q=Be==null?ge:os(Be),ge=new He(Ee,B+"leave",Ie,o,xe),ge.target=Vt,ge.relatedTarget=q,Ee=null,Mr(xe)===Z&&(He=new He(Y,B+"enter",Be,o,xe),He.target=q,He.relatedTarget=Vt,Ee=He),Vt=Ee,Ie&&Be)t:{for(He=Ie,Y=Be,B=0,q=He;q;q=rs(q))B++;for(q=0,Ee=Y;Ee;Ee=rs(Ee))q++;for(;0<B-q;)He=rs(He),B--;for(;0<q-B;)Y=rs(Y),q--;for(;B--;){if(He===Y||Y!==null&&He===Y.alternate)break t;He=rs(He),Y=rs(Y)}He=null}else He=null;Ie!==null&&Ud(Se,ge,Ie,He,!1),Be!==null&&Vt!==null&&Ud(Se,Vt,Be,He,!0)}}e:{if(ge=Z?os(Z):window,Ie=ge.nodeName&&ge.nodeName.toLowerCase(),Ie==="select"||Ie==="input"&&ge.type==="file")var We=Hg;else if(dd(ge))if(pd)We=Xg;else{We=Gg;var Ke=Vg}else(Ie=ge.nodeName)&&Ie.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(We=Wg);if(We&&(We=We(t,Z))){hd(Se,We,o,xe);break e}Ke&&Ke(t,ge,Z),t==="focusout"&&(Ke=ge._wrapperState)&&Ke.controlled&&ge.type==="number"&&St(ge,"number",ge.value)}switch(Ke=Z?os(Z):window,t){case"focusin":(dd(Ke)||Ke.contentEditable==="true")&&(ns=Ke,Kl=Z,uo=null);break;case"focusout":uo=Kl=ns=null;break;case"mousedown":Zl=!0;break;case"contextmenu":case"mouseup":case"dragend":Zl=!1,Md(Se,o,xe);break;case"selectionchange":if(qg)break;case"keydown":case"keyup":Md(Se,o,xe)}var Ze;if(Yl)e:{switch(t){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else ts?cd(t,o)&&(nt="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(nt="onCompositionStart");nt&&(ad&&o.locale!=="ko"&&(ts||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&ts&&(Ze=nd()):(qi=xe,zl="value"in qi?qi.value:qi.textContent,ts=!0)),Ke=fa(Z,nt),0<Ke.length&&(nt=new sd(nt,t,null,o,xe),Se.push({event:nt,listeners:Ke}),Ze?nt.data=Ze:(Ze=fd(o),Ze!==null&&(nt.data=Ze)))),(Ze=Fg?Og(t,o):kg(t,o))&&(Z=fa(Z,"onBeforeInput"),0<Z.length&&(xe=new sd("onBeforeInput","beforeinput",null,o,xe),Se.push({event:xe,listeners:Z}),xe.data=Ze))}Ld(Se,i)})}function ho(t,i,o){return{instance:t,listener:i,currentTarget:o}}function fa(t,i){for(var o=i+"Capture",l=[];t!==null;){var c=t,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=mn(t,o),h!=null&&l.unshift(ho(t,h,c)),h=mn(t,i),h!=null&&l.push(ho(t,h,c))),t=t.return}return l}function rs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ud(t,i,o,l,c){for(var h=i._reactName,M=[];o!==null&&o!==l;){var L=o,F=L.alternate,Z=L.stateNode;if(F!==null&&F===l)break;L.tag===5&&Z!==null&&(L=Z,c?(F=mn(o,h),F!=null&&M.unshift(ho(o,F,L))):c||(F=mn(o,h),F!=null&&M.push(ho(o,F,L)))),o=o.return}M.length!==0&&t.push({event:i,listeners:M})}var Qg=/\r\n?/g,Jg=/\u0000|\uFFFD/g;function Id(t){return(typeof t=="string"?t:""+t).replace(Qg,`
`).replace(Jg,"")}function da(t,i,o){if(i=Id(i),Id(t)!==i&&o)throw Error(n(425))}function ha(){}var iu=null,ru=null;function su(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var ou=typeof setTimeout=="function"?setTimeout:void 0,e_=typeof clearTimeout=="function"?clearTimeout:void 0,Nd=typeof Promise=="function"?Promise:void 0,t_=typeof queueMicrotask=="function"?queueMicrotask:typeof Nd<"u"?function(t){return Nd.resolve(null).then(t).catch(n_)}:ou;function n_(t){setTimeout(function(){throw t})}function au(t,i){var o=i,l=0;do{var c=o.nextSibling;if(t.removeChild(o),c&&c.nodeType===8)if(o=c.data,o==="/$"){if(l===0){t.removeChild(c),no(i);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=c}while(o);no(i)}function Ki(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Fd(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var ss=Math.random().toString(36).slice(2),di="__reactFiber$"+ss,po="__reactProps$"+ss,Ei="__reactContainer$"+ss,lu="__reactEvents$"+ss,i_="__reactListeners$"+ss,r_="__reactHandles$"+ss;function Mr(t){var i=t[di];if(i)return i;for(var o=t.parentNode;o;){if(i=o[Ei]||o[di]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=Fd(t);t!==null;){if(o=t[di])return o;t=Fd(t)}return i}t=o,o=t.parentNode}return null}function mo(t){return t=t[di]||t[Ei],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function os(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function pa(t){return t[po]||null}var uu=[],as=-1;function Zi(t){return{current:t}}function Nt(t){0>as||(t.current=uu[as],uu[as]=null,as--)}function Dt(t,i){as++,uu[as]=t.current,t.current=i}var Qi={},ln=Zi(Qi),Tn=Zi(!1),Er=Qi;function ls(t,i){var o=t.type.contextTypes;if(!o)return Qi;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in o)c[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=c),c}function wn(t){return t=t.childContextTypes,t!=null}function ma(){Nt(Tn),Nt(ln)}function Od(t,i,o){if(ln.current!==Qi)throw Error(n(168));Dt(ln,i),Dt(Tn,o)}function kd(t,i,o){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var c in l)if(!(c in i))throw Error(n(108,ve(t)||"Unknown",c));return oe({},o,l)}function ga(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Qi,Er=ln.current,Dt(ln,t),Dt(Tn,Tn.current),!0}function Bd(t,i,o){var l=t.stateNode;if(!l)throw Error(n(169));o?(t=kd(t,i,Er),l.__reactInternalMemoizedMergedChildContext=t,Nt(Tn),Nt(ln),Dt(ln,t)):Nt(Tn),Dt(Tn,o)}var Ti=null,_a=!1,cu=!1;function zd(t){Ti===null?Ti=[t]:Ti.push(t)}function s_(t){_a=!0,zd(t)}function Ji(){if(!cu&&Ti!==null){cu=!0;var t=0,i=Pt;try{var o=Ti;for(Pt=1;t<o.length;t++){var l=o[t];do l=l(!0);while(l!==null)}Ti=null,_a=!1}catch(c){throw Ti!==null&&(Ti=Ti.slice(t+1)),J(ze,Ji),c}finally{Pt=i,cu=!1}}return null}var us=[],cs=0,va=null,xa=0,zn=[],Hn=0,Tr=null,wi=1,Ai="";function wr(t,i){us[cs++]=xa,us[cs++]=va,va=t,xa=i}function Hd(t,i,o){zn[Hn++]=wi,zn[Hn++]=Ai,zn[Hn++]=Tr,Tr=t;var l=wi;t=Ai;var c=32-ot(l)-1;l&=~(1<<c),o+=1;var h=32-ot(i)+c;if(30<h){var M=c-c%5;h=(l&(1<<M)-1).toString(32),l>>=M,c-=M,wi=1<<32-ot(i)+c|o<<c|l,Ai=h+t}else wi=1<<h|o<<c|l,Ai=t}function fu(t){t.return!==null&&(wr(t,1),Hd(t,1,0))}function du(t){for(;t===va;)va=us[--cs],us[cs]=null,xa=us[--cs],us[cs]=null;for(;t===Tr;)Tr=zn[--Hn],zn[Hn]=null,Ai=zn[--Hn],zn[Hn]=null,wi=zn[--Hn],zn[Hn]=null}var Un=null,In=null,Ft=!1,Jn=null;function Vd(t,i){var o=Xn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function Gd(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Un=t,In=Ki(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Un=t,In=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Tr!==null?{id:wi,overflow:Ai}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Xn(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,Un=t,In=null,!0):!1;default:return!1}}function hu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function pu(t){if(Ft){var i=In;if(i){var o=i;if(!Gd(t,i)){if(hu(t))throw Error(n(418));i=Ki(o.nextSibling);var l=Un;i&&Gd(t,i)?Vd(l,o):(t.flags=t.flags&-4097|2,Ft=!1,Un=t)}}else{if(hu(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ft=!1,Un=t}}}function Wd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Un=t}function Sa(t){if(t!==Un)return!1;if(!Ft)return Wd(t),Ft=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!su(t.type,t.memoizedProps)),i&&(i=In)){if(hu(t))throw Xd(),Error(n(418));for(;i;)Vd(t,i),i=Ki(i.nextSibling)}if(Wd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){In=Ki(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}In=null}}else In=Un?Ki(t.stateNode.nextSibling):null;return!0}function Xd(){for(var t=In;t;)t=Ki(t.nextSibling)}function fs(){In=Un=null,Ft=!1}function mu(t){Jn===null?Jn=[t]:Jn.push(t)}var o_=C.ReactCurrentBatchConfig;function go(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var l=o.stateNode}if(!l)throw Error(n(147,t));var c=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(M){var L=c.refs;M===null?delete L[h]:L[h]=M},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function ya(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Yd(t){var i=t._init;return i(t._payload)}function jd(t){function i(Y,B){if(t){var q=Y.deletions;q===null?(Y.deletions=[B],Y.flags|=16):q.push(B)}}function o(Y,B){if(!t)return null;for(;B!==null;)i(Y,B),B=B.sibling;return null}function l(Y,B){for(Y=new Map;B!==null;)B.key!==null?Y.set(B.key,B):Y.set(B.index,B),B=B.sibling;return Y}function c(Y,B){return Y=ar(Y,B),Y.index=0,Y.sibling=null,Y}function h(Y,B,q){return Y.index=q,t?(q=Y.alternate,q!==null?(q=q.index,q<B?(Y.flags|=2,B):q):(Y.flags|=2,B)):(Y.flags|=1048576,B)}function M(Y){return t&&Y.alternate===null&&(Y.flags|=2),Y}function L(Y,B,q,Ee){return B===null||B.tag!==6?(B=oc(q,Y.mode,Ee),B.return=Y,B):(B=c(B,q),B.return=Y,B)}function F(Y,B,q,Ee){var We=q.type;return We===N?xe(Y,B,q.props.children,Ee,q.key):B!==null&&(B.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===ie&&Yd(We)===B.type)?(Ee=c(B,q.props),Ee.ref=go(Y,B,q),Ee.return=Y,Ee):(Ee=Xa(q.type,q.key,q.props,null,Y.mode,Ee),Ee.ref=go(Y,B,q),Ee.return=Y,Ee)}function Z(Y,B,q,Ee){return B===null||B.tag!==4||B.stateNode.containerInfo!==q.containerInfo||B.stateNode.implementation!==q.implementation?(B=ac(q,Y.mode,Ee),B.return=Y,B):(B=c(B,q.children||[]),B.return=Y,B)}function xe(Y,B,q,Ee,We){return B===null||B.tag!==7?(B=Ur(q,Y.mode,Ee,We),B.return=Y,B):(B=c(B,q),B.return=Y,B)}function Se(Y,B,q){if(typeof B=="string"&&B!==""||typeof B=="number")return B=oc(""+B,Y.mode,q),B.return=Y,B;if(typeof B=="object"&&B!==null){switch(B.$$typeof){case $:return q=Xa(B.type,B.key,B.props,null,Y.mode,q),q.ref=go(Y,null,B),q.return=Y,q;case z:return B=ac(B,Y.mode,q),B.return=Y,B;case ie:var Ee=B._init;return Se(Y,Ee(B._payload),q)}if(Xe(B)||ae(B))return B=Ur(B,Y.mode,q,null),B.return=Y,B;ya(Y,B)}return null}function ge(Y,B,q,Ee){var We=B!==null?B.key:null;if(typeof q=="string"&&q!==""||typeof q=="number")return We!==null?null:L(Y,B,""+q,Ee);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case $:return q.key===We?F(Y,B,q,Ee):null;case z:return q.key===We?Z(Y,B,q,Ee):null;case ie:return We=q._init,ge(Y,B,We(q._payload),Ee)}if(Xe(q)||ae(q))return We!==null?null:xe(Y,B,q,Ee,null);ya(Y,q)}return null}function Ie(Y,B,q,Ee,We){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return Y=Y.get(q)||null,L(B,Y,""+Ee,We);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case $:return Y=Y.get(Ee.key===null?q:Ee.key)||null,F(B,Y,Ee,We);case z:return Y=Y.get(Ee.key===null?q:Ee.key)||null,Z(B,Y,Ee,We);case ie:var Ke=Ee._init;return Ie(Y,B,q,Ke(Ee._payload),We)}if(Xe(Ee)||ae(Ee))return Y=Y.get(q)||null,xe(B,Y,Ee,We,null);ya(B,Ee)}return null}function Be(Y,B,q,Ee){for(var We=null,Ke=null,Ze=B,nt=B=0,en=null;Ze!==null&&nt<q.length;nt++){Ze.index>nt?(en=Ze,Ze=null):en=Ze.sibling;var Mt=ge(Y,Ze,q[nt],Ee);if(Mt===null){Ze===null&&(Ze=en);break}t&&Ze&&Mt.alternate===null&&i(Y,Ze),B=h(Mt,B,nt),Ke===null?We=Mt:Ke.sibling=Mt,Ke=Mt,Ze=en}if(nt===q.length)return o(Y,Ze),Ft&&wr(Y,nt),We;if(Ze===null){for(;nt<q.length;nt++)Ze=Se(Y,q[nt],Ee),Ze!==null&&(B=h(Ze,B,nt),Ke===null?We=Ze:Ke.sibling=Ze,Ke=Ze);return Ft&&wr(Y,nt),We}for(Ze=l(Y,Ze);nt<q.length;nt++)en=Ie(Ze,Y,nt,q[nt],Ee),en!==null&&(t&&en.alternate!==null&&Ze.delete(en.key===null?nt:en.key),B=h(en,B,nt),Ke===null?We=en:Ke.sibling=en,Ke=en);return t&&Ze.forEach(function(lr){return i(Y,lr)}),Ft&&wr(Y,nt),We}function He(Y,B,q,Ee){var We=ae(q);if(typeof We!="function")throw Error(n(150));if(q=We.call(q),q==null)throw Error(n(151));for(var Ke=We=null,Ze=B,nt=B=0,en=null,Mt=q.next();Ze!==null&&!Mt.done;nt++,Mt=q.next()){Ze.index>nt?(en=Ze,Ze=null):en=Ze.sibling;var lr=ge(Y,Ze,Mt.value,Ee);if(lr===null){Ze===null&&(Ze=en);break}t&&Ze&&lr.alternate===null&&i(Y,Ze),B=h(lr,B,nt),Ke===null?We=lr:Ke.sibling=lr,Ke=lr,Ze=en}if(Mt.done)return o(Y,Ze),Ft&&wr(Y,nt),We;if(Ze===null){for(;!Mt.done;nt++,Mt=q.next())Mt=Se(Y,Mt.value,Ee),Mt!==null&&(B=h(Mt,B,nt),Ke===null?We=Mt:Ke.sibling=Mt,Ke=Mt);return Ft&&wr(Y,nt),We}for(Ze=l(Y,Ze);!Mt.done;nt++,Mt=q.next())Mt=Ie(Ze,Y,nt,Mt.value,Ee),Mt!==null&&(t&&Mt.alternate!==null&&Ze.delete(Mt.key===null?nt:Mt.key),B=h(Mt,B,nt),Ke===null?We=Mt:Ke.sibling=Mt,Ke=Mt);return t&&Ze.forEach(function(B_){return i(Y,B_)}),Ft&&wr(Y,nt),We}function Vt(Y,B,q,Ee){if(typeof q=="object"&&q!==null&&q.type===N&&q.key===null&&(q=q.props.children),typeof q=="object"&&q!==null){switch(q.$$typeof){case $:e:{for(var We=q.key,Ke=B;Ke!==null;){if(Ke.key===We){if(We=q.type,We===N){if(Ke.tag===7){o(Y,Ke.sibling),B=c(Ke,q.props.children),B.return=Y,Y=B;break e}}else if(Ke.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===ie&&Yd(We)===Ke.type){o(Y,Ke.sibling),B=c(Ke,q.props),B.ref=go(Y,Ke,q),B.return=Y,Y=B;break e}o(Y,Ke);break}else i(Y,Ke);Ke=Ke.sibling}q.type===N?(B=Ur(q.props.children,Y.mode,Ee,q.key),B.return=Y,Y=B):(Ee=Xa(q.type,q.key,q.props,null,Y.mode,Ee),Ee.ref=go(Y,B,q),Ee.return=Y,Y=Ee)}return M(Y);case z:e:{for(Ke=q.key;B!==null;){if(B.key===Ke)if(B.tag===4&&B.stateNode.containerInfo===q.containerInfo&&B.stateNode.implementation===q.implementation){o(Y,B.sibling),B=c(B,q.children||[]),B.return=Y,Y=B;break e}else{o(Y,B);break}else i(Y,B);B=B.sibling}B=ac(q,Y.mode,Ee),B.return=Y,Y=B}return M(Y);case ie:return Ke=q._init,Vt(Y,B,Ke(q._payload),Ee)}if(Xe(q))return Be(Y,B,q,Ee);if(ae(q))return He(Y,B,q,Ee);ya(Y,q)}return typeof q=="string"&&q!==""||typeof q=="number"?(q=""+q,B!==null&&B.tag===6?(o(Y,B.sibling),B=c(B,q),B.return=Y,Y=B):(o(Y,B),B=oc(q,Y.mode,Ee),B.return=Y,Y=B),M(Y)):o(Y,B)}return Vt}var ds=jd(!0),qd=jd(!1),Ma=Zi(null),Ea=null,hs=null,gu=null;function _u(){gu=hs=Ea=null}function vu(t){var i=Ma.current;Nt(Ma),t._currentValue=i}function xu(t,i,o){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===o)break;t=t.return}}function ps(t,i){Ea=t,gu=hs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(An=!0),t.firstContext=null)}function Vn(t){var i=t._currentValue;if(gu!==t)if(t={context:t,memoizedValue:i,next:null},hs===null){if(Ea===null)throw Error(n(308));hs=t,Ea.dependencies={lanes:0,firstContext:t}}else hs=hs.next=t;return i}var Ar=null;function Su(t){Ar===null?Ar=[t]:Ar.push(t)}function $d(t,i,o,l){var c=i.interleaved;return c===null?(o.next=o,Su(i)):(o.next=c.next,c.next=o),i.interleaved=o,Ri(t,l)}function Ri(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var er=!1;function yu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kd(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ci(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function tr(t,i,o){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(_t&2)!==0){var c=l.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),l.pending=i,Ri(t,o)}return c=l.interleaved,c===null?(i.next=i,Su(l)):(i.next=c.next,c.next=i),l.interleaved=i,Ri(t,o)}function Ta(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,Nl(t,o)}}function Zd(t,i){var o=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var c=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?c=h=M:h=h.next=M,o=o.next}while(o!==null);h===null?c=h=i:h=h.next=i}else c=h=i;o={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function wa(t,i,o,l){var c=t.updateQueue;er=!1;var h=c.firstBaseUpdate,M=c.lastBaseUpdate,L=c.shared.pending;if(L!==null){c.shared.pending=null;var F=L,Z=F.next;F.next=null,M===null?h=Z:M.next=Z,M=F;var xe=t.alternate;xe!==null&&(xe=xe.updateQueue,L=xe.lastBaseUpdate,L!==M&&(L===null?xe.firstBaseUpdate=Z:L.next=Z,xe.lastBaseUpdate=F))}if(h!==null){var Se=c.baseState;M=0,xe=Z=F=null,L=h;do{var ge=L.lane,Ie=L.eventTime;if((l&ge)===ge){xe!==null&&(xe=xe.next={eventTime:Ie,lane:0,tag:L.tag,payload:L.payload,callback:L.callback,next:null});e:{var Be=t,He=L;switch(ge=i,Ie=o,He.tag){case 1:if(Be=He.payload,typeof Be=="function"){Se=Be.call(Ie,Se,ge);break e}Se=Be;break e;case 3:Be.flags=Be.flags&-65537|128;case 0:if(Be=He.payload,ge=typeof Be=="function"?Be.call(Ie,Se,ge):Be,ge==null)break e;Se=oe({},Se,ge);break e;case 2:er=!0}}L.callback!==null&&L.lane!==0&&(t.flags|=64,ge=c.effects,ge===null?c.effects=[L]:ge.push(L))}else Ie={eventTime:Ie,lane:ge,tag:L.tag,payload:L.payload,callback:L.callback,next:null},xe===null?(Z=xe=Ie,F=Se):xe=xe.next=Ie,M|=ge;if(L=L.next,L===null){if(L=c.shared.pending,L===null)break;ge=L,L=ge.next,ge.next=null,c.lastBaseUpdate=ge,c.shared.pending=null}}while(!0);if(xe===null&&(F=Se),c.baseState=F,c.firstBaseUpdate=Z,c.lastBaseUpdate=xe,i=c.shared.interleaved,i!==null){c=i;do M|=c.lane,c=c.next;while(c!==i)}else h===null&&(c.shared.lanes=0);Pr|=M,t.lanes=M,t.memoizedState=Se}}function Qd(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],c=l.callback;if(c!==null){if(l.callback=null,l=o,typeof c!="function")throw Error(n(191,c));c.call(l)}}}var _o={},hi=Zi(_o),vo=Zi(_o),xo=Zi(_o);function Rr(t){if(t===_o)throw Error(n(174));return t}function Mu(t,i){switch(Dt(xo,i),Dt(vo,t),Dt(hi,_o),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Fe(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Fe(i,t)}Nt(hi),Dt(hi,i)}function ms(){Nt(hi),Nt(vo),Nt(xo)}function Jd(t){Rr(xo.current);var i=Rr(hi.current),o=Fe(i,t.type);i!==o&&(Dt(vo,t),Dt(hi,o))}function Eu(t){vo.current===t&&(Nt(hi),Nt(vo))}var Ot=Zi(0);function Aa(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Tu=[];function wu(){for(var t=0;t<Tu.length;t++)Tu[t]._workInProgressVersionPrimary=null;Tu.length=0}var Ra=C.ReactCurrentDispatcher,Au=C.ReactCurrentBatchConfig,Cr=0,kt=null,qt=null,Qt=null,Ca=!1,So=!1,yo=0,a_=0;function un(){throw Error(n(321))}function Ru(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!Qn(t[o],i[o]))return!1;return!0}function Cu(t,i,o,l,c,h){if(Cr=h,kt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ra.current=t===null||t.memoizedState===null?f_:d_,t=o(l,c),So){h=0;do{if(So=!1,yo=0,25<=h)throw Error(n(301));h+=1,Qt=qt=null,i.updateQueue=null,Ra.current=h_,t=o(l,c)}while(So)}if(Ra.current=La,i=qt!==null&&qt.next!==null,Cr=0,Qt=qt=kt=null,Ca=!1,i)throw Error(n(300));return t}function Pu(){var t=yo!==0;return yo=0,t}function pi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qt===null?kt.memoizedState=Qt=t:Qt=Qt.next=t,Qt}function Gn(){if(qt===null){var t=kt.alternate;t=t!==null?t.memoizedState:null}else t=qt.next;var i=Qt===null?kt.memoizedState:Qt.next;if(i!==null)Qt=i,qt=t;else{if(t===null)throw Error(n(310));qt=t,t={memoizedState:qt.memoizedState,baseState:qt.baseState,baseQueue:qt.baseQueue,queue:qt.queue,next:null},Qt===null?kt.memoizedState=Qt=t:Qt=Qt.next=t}return Qt}function Mo(t,i){return typeof i=="function"?i(t):i}function bu(t){var i=Gn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=qt,c=l.baseQueue,h=o.pending;if(h!==null){if(c!==null){var M=c.next;c.next=h.next,h.next=M}l.baseQueue=c=h,o.pending=null}if(c!==null){h=c.next,l=l.baseState;var L=M=null,F=null,Z=h;do{var xe=Z.lane;if((Cr&xe)===xe)F!==null&&(F=F.next={lane:0,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null}),l=Z.hasEagerState?Z.eagerState:t(l,Z.action);else{var Se={lane:xe,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null};F===null?(L=F=Se,M=l):F=F.next=Se,kt.lanes|=xe,Pr|=xe}Z=Z.next}while(Z!==null&&Z!==h);F===null?M=l:F.next=L,Qn(l,i.memoizedState)||(An=!0),i.memoizedState=l,i.baseState=M,i.baseQueue=F,o.lastRenderedState=l}if(t=o.interleaved,t!==null){c=t;do h=c.lane,kt.lanes|=h,Pr|=h,c=c.next;while(c!==t)}else c===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Lu(t){var i=Gn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=o.dispatch,c=o.pending,h=i.memoizedState;if(c!==null){o.pending=null;var M=c=c.next;do h=t(h,M.action),M=M.next;while(M!==c);Qn(h,i.memoizedState)||(An=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,l]}function eh(){}function th(t,i){var o=kt,l=Gn(),c=i(),h=!Qn(l.memoizedState,c);if(h&&(l.memoizedState=c,An=!0),l=l.queue,Du(rh.bind(null,o,l,t),[t]),l.getSnapshot!==i||h||Qt!==null&&Qt.memoizedState.tag&1){if(o.flags|=2048,Eo(9,ih.bind(null,o,l,c,i),void 0,null),Jt===null)throw Error(n(349));(Cr&30)!==0||nh(o,i,c)}return c}function nh(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=kt.updateQueue,i===null?(i={lastEffect:null,stores:null},kt.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function ih(t,i,o,l){i.value=o,i.getSnapshot=l,sh(i)&&oh(t)}function rh(t,i,o){return o(function(){sh(i)&&oh(t)})}function sh(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!Qn(t,o)}catch{return!0}}function oh(t){var i=Ri(t,1);i!==null&&ii(i,t,1,-1)}function ah(t){var i=pi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Mo,lastRenderedState:t},i.queue=t,t=t.dispatch=c_.bind(null,kt,t),[i.memoizedState,t]}function Eo(t,i,o,l){return t={tag:t,create:i,destroy:o,deps:l,next:null},i=kt.updateQueue,i===null?(i={lastEffect:null,stores:null},kt.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(l=o.next,o.next=t,t.next=l,i.lastEffect=t)),t}function lh(){return Gn().memoizedState}function Pa(t,i,o,l){var c=pi();kt.flags|=t,c.memoizedState=Eo(1|i,o,void 0,l===void 0?null:l)}function ba(t,i,o,l){var c=Gn();l=l===void 0?null:l;var h=void 0;if(qt!==null){var M=qt.memoizedState;if(h=M.destroy,l!==null&&Ru(l,M.deps)){c.memoizedState=Eo(i,o,h,l);return}}kt.flags|=t,c.memoizedState=Eo(1|i,o,h,l)}function uh(t,i){return Pa(8390656,8,t,i)}function Du(t,i){return ba(2048,8,t,i)}function ch(t,i){return ba(4,2,t,i)}function fh(t,i){return ba(4,4,t,i)}function dh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function hh(t,i,o){return o=o!=null?o.concat([t]):null,ba(4,4,dh.bind(null,i,t),o)}function Uu(){}function ph(t,i){var o=Gn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Ru(i,l[1])?l[0]:(o.memoizedState=[t,i],t)}function mh(t,i){var o=Gn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Ru(i,l[1])?l[0]:(t=t(),o.memoizedState=[t,i],t)}function gh(t,i,o){return(Cr&21)===0?(t.baseState&&(t.baseState=!1,An=!0),t.memoizedState=o):(Qn(o,i)||(o=gn(),kt.lanes|=o,Pr|=o,t.baseState=!0),i)}function l_(t,i){var o=Pt;Pt=o!==0&&4>o?o:4,t(!0);var l=Au.transition;Au.transition={};try{t(!1),i()}finally{Pt=o,Au.transition=l}}function _h(){return Gn().memoizedState}function u_(t,i,o){var l=sr(t);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},vh(t))xh(i,o);else if(o=$d(t,i,o,l),o!==null){var c=vn();ii(o,t,l,c),Sh(o,i,l)}}function c_(t,i,o){var l=sr(t),c={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(vh(t))xh(i,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var M=i.lastRenderedState,L=h(M,o);if(c.hasEagerState=!0,c.eagerState=L,Qn(L,M)){var F=i.interleaved;F===null?(c.next=c,Su(i)):(c.next=F.next,F.next=c),i.interleaved=c;return}}catch{}finally{}o=$d(t,i,c,l),o!==null&&(c=vn(),ii(o,t,l,c),Sh(o,i,l))}}function vh(t){var i=t.alternate;return t===kt||i!==null&&i===kt}function xh(t,i){So=Ca=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function Sh(t,i,o){if((o&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,Nl(t,o)}}var La={readContext:Vn,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useInsertionEffect:un,useLayoutEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useMutableSource:un,useSyncExternalStore:un,useId:un,unstable_isNewReconciler:!1},f_={readContext:Vn,useCallback:function(t,i){return pi().memoizedState=[t,i===void 0?null:i],t},useContext:Vn,useEffect:uh,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Pa(4194308,4,dh.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Pa(4194308,4,t,i)},useInsertionEffect:function(t,i){return Pa(4,2,t,i)},useMemo:function(t,i){var o=pi();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var l=pi();return i=o!==void 0?o(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=u_.bind(null,kt,t),[l.memoizedState,t]},useRef:function(t){var i=pi();return t={current:t},i.memoizedState=t},useState:ah,useDebugValue:Uu,useDeferredValue:function(t){return pi().memoizedState=t},useTransition:function(){var t=ah(!1),i=t[0];return t=l_.bind(null,t[1]),pi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var l=kt,c=pi();if(Ft){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),Jt===null)throw Error(n(349));(Cr&30)!==0||nh(l,i,o)}c.memoizedState=o;var h={value:o,getSnapshot:i};return c.queue=h,uh(rh.bind(null,l,h,t),[t]),l.flags|=2048,Eo(9,ih.bind(null,l,h,o,i),void 0,null),o},useId:function(){var t=pi(),i=Jt.identifierPrefix;if(Ft){var o=Ai,l=wi;o=(l&~(1<<32-ot(l)-1)).toString(32)+o,i=":"+i+"R"+o,o=yo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=a_++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},d_={readContext:Vn,useCallback:ph,useContext:Vn,useEffect:Du,useImperativeHandle:hh,useInsertionEffect:ch,useLayoutEffect:fh,useMemo:mh,useReducer:bu,useRef:lh,useState:function(){return bu(Mo)},useDebugValue:Uu,useDeferredValue:function(t){var i=Gn();return gh(i,qt.memoizedState,t)},useTransition:function(){var t=bu(Mo)[0],i=Gn().memoizedState;return[t,i]},useMutableSource:eh,useSyncExternalStore:th,useId:_h,unstable_isNewReconciler:!1},h_={readContext:Vn,useCallback:ph,useContext:Vn,useEffect:Du,useImperativeHandle:hh,useInsertionEffect:ch,useLayoutEffect:fh,useMemo:mh,useReducer:Lu,useRef:lh,useState:function(){return Lu(Mo)},useDebugValue:Uu,useDeferredValue:function(t){var i=Gn();return qt===null?i.memoizedState=t:gh(i,qt.memoizedState,t)},useTransition:function(){var t=Lu(Mo)[0],i=Gn().memoizedState;return[t,i]},useMutableSource:eh,useSyncExternalStore:th,useId:_h,unstable_isNewReconciler:!1};function ei(t,i){if(t&&t.defaultProps){i=oe({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Iu(t,i,o,l){i=t.memoizedState,o=o(l,i),o=o==null?i:oe({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Da={isMounted:function(t){return(t=t._reactInternals)?ci(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var l=vn(),c=sr(t),h=Ci(l,c);h.payload=i,o!=null&&(h.callback=o),i=tr(t,h,c),i!==null&&(ii(i,t,c,l),Ta(i,t,c))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var l=vn(),c=sr(t),h=Ci(l,c);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=tr(t,h,c),i!==null&&(ii(i,t,c,l),Ta(i,t,c))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=vn(),l=sr(t),c=Ci(o,l);c.tag=2,i!=null&&(c.callback=i),i=tr(t,c,l),i!==null&&(ii(i,t,l,o),Ta(i,t,l))}};function yh(t,i,o,l,c,h,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,M):i.prototype&&i.prototype.isPureReactComponent?!lo(o,l)||!lo(c,h):!0}function Mh(t,i,o){var l=!1,c=Qi,h=i.contextType;return typeof h=="object"&&h!==null?h=Vn(h):(c=wn(i)?Er:ln.current,l=i.contextTypes,h=(l=l!=null)?ls(t,c):Qi),i=new i(o,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Da,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=h),i}function Eh(t,i,o,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,l),i.state!==t&&Da.enqueueReplaceState(i,i.state,null)}function Nu(t,i,o,l){var c=t.stateNode;c.props=o,c.state=t.memoizedState,c.refs={},yu(t);var h=i.contextType;typeof h=="object"&&h!==null?c.context=Vn(h):(h=wn(i)?Er:ln.current,c.context=ls(t,h)),c.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Iu(t,i,h,o),c.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(i=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),i!==c.state&&Da.enqueueReplaceState(c,c.state,null),wa(t,o,c,l),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function gs(t,i){try{var o="",l=i;do o+=fe(l),l=l.return;while(l);var c=o}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:c,digest:null}}function Fu(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Ou(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var p_=typeof WeakMap=="function"?WeakMap:Map;function Th(t,i,o){o=Ci(-1,o),o.tag=3,o.payload={element:null};var l=i.value;return o.callback=function(){Ba||(Ba=!0,Qu=l),Ou(t,i)},o}function wh(t,i,o){o=Ci(-1,o),o.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var c=i.value;o.payload=function(){return l(c)},o.callback=function(){Ou(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){Ou(t,i),typeof l!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function Ah(t,i,o){var l=t.pingCache;if(l===null){l=t.pingCache=new p_;var c=new Set;l.set(i,c)}else c=l.get(i),c===void 0&&(c=new Set,l.set(i,c));c.has(o)||(c.add(o),t=C_.bind(null,t,i,o),i.then(t,t))}function Rh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Ch(t,i,o,l,c){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Ci(-1,1),i.tag=2,tr(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=c,t)}var m_=C.ReactCurrentOwner,An=!1;function _n(t,i,o,l){i.child=t===null?qd(i,null,o,l):ds(i,t.child,o,l)}function Ph(t,i,o,l,c){o=o.render;var h=i.ref;return ps(i,c),l=Cu(t,i,o,l,h,c),o=Pu(),t!==null&&!An?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Pi(t,i,c)):(Ft&&o&&fu(i),i.flags|=1,_n(t,i,l,c),i.child)}function bh(t,i,o,l,c){if(t===null){var h=o.type;return typeof h=="function"&&!sc(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,Lh(t,i,h,l,c)):(t=Xa(o.type,null,l,i,i.mode,c),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&c)===0){var M=h.memoizedProps;if(o=o.compare,o=o!==null?o:lo,o(M,l)&&t.ref===i.ref)return Pi(t,i,c)}return i.flags|=1,t=ar(h,l),t.ref=i.ref,t.return=i,i.child=t}function Lh(t,i,o,l,c){if(t!==null){var h=t.memoizedProps;if(lo(h,l)&&t.ref===i.ref)if(An=!1,i.pendingProps=l=h,(t.lanes&c)!==0)(t.flags&131072)!==0&&(An=!0);else return i.lanes=t.lanes,Pi(t,i,c)}return ku(t,i,o,l,c)}function Dh(t,i,o){var l=i.pendingProps,c=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Dt(vs,Nn),Nn|=o;else{if((o&1073741824)===0)return t=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Dt(vs,Nn),Nn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:o,Dt(vs,Nn),Nn|=l}else h!==null?(l=h.baseLanes|o,i.memoizedState=null):l=o,Dt(vs,Nn),Nn|=l;return _n(t,i,c,o),i.child}function Uh(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function ku(t,i,o,l,c){var h=wn(o)?Er:ln.current;return h=ls(i,h),ps(i,c),o=Cu(t,i,o,l,h,c),l=Pu(),t!==null&&!An?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Pi(t,i,c)):(Ft&&l&&fu(i),i.flags|=1,_n(t,i,o,c),i.child)}function Ih(t,i,o,l,c){if(wn(o)){var h=!0;ga(i)}else h=!1;if(ps(i,c),i.stateNode===null)Ia(t,i),Mh(i,o,l),Nu(i,o,l,c),l=!0;else if(t===null){var M=i.stateNode,L=i.memoizedProps;M.props=L;var F=M.context,Z=o.contextType;typeof Z=="object"&&Z!==null?Z=Vn(Z):(Z=wn(o)?Er:ln.current,Z=ls(i,Z));var xe=o.getDerivedStateFromProps,Se=typeof xe=="function"||typeof M.getSnapshotBeforeUpdate=="function";Se||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(L!==l||F!==Z)&&Eh(i,M,l,Z),er=!1;var ge=i.memoizedState;M.state=ge,wa(i,l,M,c),F=i.memoizedState,L!==l||ge!==F||Tn.current||er?(typeof xe=="function"&&(Iu(i,o,xe,l),F=i.memoizedState),(L=er||yh(i,o,L,l,ge,F,Z))?(Se||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=F),M.props=l,M.state=F,M.context=Z,l=L):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{M=i.stateNode,Kd(t,i),L=i.memoizedProps,Z=i.type===i.elementType?L:ei(i.type,L),M.props=Z,Se=i.pendingProps,ge=M.context,F=o.contextType,typeof F=="object"&&F!==null?F=Vn(F):(F=wn(o)?Er:ln.current,F=ls(i,F));var Ie=o.getDerivedStateFromProps;(xe=typeof Ie=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(L!==Se||ge!==F)&&Eh(i,M,l,F),er=!1,ge=i.memoizedState,M.state=ge,wa(i,l,M,c);var Be=i.memoizedState;L!==Se||ge!==Be||Tn.current||er?(typeof Ie=="function"&&(Iu(i,o,Ie,l),Be=i.memoizedState),(Z=er||yh(i,o,Z,l,ge,Be,F)||!1)?(xe||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(l,Be,F),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(l,Be,F)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||L===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||L===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Be),M.props=l,M.state=Be,M.context=F,l=Z):(typeof M.componentDidUpdate!="function"||L===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||L===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),l=!1)}return Bu(t,i,o,l,h,c)}function Bu(t,i,o,l,c,h){Uh(t,i);var M=(i.flags&128)!==0;if(!l&&!M)return c&&Bd(i,o,!1),Pi(t,i,h);l=i.stateNode,m_.current=i;var L=M&&typeof o.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&M?(i.child=ds(i,t.child,null,h),i.child=ds(i,null,L,h)):_n(t,i,L,h),i.memoizedState=l.state,c&&Bd(i,o,!0),i.child}function Nh(t){var i=t.stateNode;i.pendingContext?Od(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Od(t,i.context,!1),Mu(t,i.containerInfo)}function Fh(t,i,o,l,c){return fs(),mu(c),i.flags|=256,_n(t,i,o,l),i.child}var zu={dehydrated:null,treeContext:null,retryLane:0};function Hu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Oh(t,i,o){var l=i.pendingProps,c=Ot.current,h=!1,M=(i.flags&128)!==0,L;if((L=M)||(L=t!==null&&t.memoizedState===null?!1:(c&2)!==0),L?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),Dt(Ot,c&1),t===null)return pu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=l.children,t=l.fallback,h?(l=i.mode,h=i.child,M={mode:"hidden",children:M},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=M):h=Ya(M,l,0,null),t=Ur(t,l,o,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Hu(o),i.memoizedState=zu,t):Vu(i,M));if(c=t.memoizedState,c!==null&&(L=c.dehydrated,L!==null))return g_(t,i,M,l,L,c,o);if(h){h=l.fallback,M=i.mode,c=t.child,L=c.sibling;var F={mode:"hidden",children:l.children};return(M&1)===0&&i.child!==c?(l=i.child,l.childLanes=0,l.pendingProps=F,i.deletions=null):(l=ar(c,F),l.subtreeFlags=c.subtreeFlags&14680064),L!==null?h=ar(L,h):(h=Ur(h,M,o,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,M=t.child.memoizedState,M=M===null?Hu(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},h.memoizedState=M,h.childLanes=t.childLanes&~o,i.memoizedState=zu,l}return h=t.child,t=h.sibling,l=ar(h,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=o),l.return=i,l.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=l,i.memoizedState=null,l}function Vu(t,i){return i=Ya({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Ua(t,i,o,l){return l!==null&&mu(l),ds(i,t.child,null,o),t=Vu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function g_(t,i,o,l,c,h,M){if(o)return i.flags&256?(i.flags&=-257,l=Fu(Error(n(422))),Ua(t,i,M,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,c=i.mode,l=Ya({mode:"visible",children:l.children},c,0,null),h=Ur(h,c,M,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,(i.mode&1)!==0&&ds(i,t.child,null,M),i.child.memoizedState=Hu(M),i.memoizedState=zu,h);if((i.mode&1)===0)return Ua(t,i,M,null);if(c.data==="$!"){if(l=c.nextSibling&&c.nextSibling.dataset,l)var L=l.dgst;return l=L,h=Error(n(419)),l=Fu(h,l,void 0),Ua(t,i,M,l)}if(L=(M&t.childLanes)!==0,An||L){if(l=Jt,l!==null){switch(M&-M){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(l.suspendedLanes|M))!==0?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,Ri(t,c),ii(l,t,c,-1))}return rc(),l=Fu(Error(n(421))),Ua(t,i,M,l)}return c.data==="$?"?(i.flags|=128,i.child=t.child,i=P_.bind(null,t),c._reactRetry=i,null):(t=h.treeContext,In=Ki(c.nextSibling),Un=i,Ft=!0,Jn=null,t!==null&&(zn[Hn++]=wi,zn[Hn++]=Ai,zn[Hn++]=Tr,wi=t.id,Ai=t.overflow,Tr=i),i=Vu(i,l.children),i.flags|=4096,i)}function kh(t,i,o){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),xu(t.return,i,o)}function Gu(t,i,o,l,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:c}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=o,h.tailMode=c)}function Bh(t,i,o){var l=i.pendingProps,c=l.revealOrder,h=l.tail;if(_n(t,i,l.children,o),l=Ot.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&kh(t,o,i);else if(t.tag===19)kh(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Dt(Ot,l),(i.mode&1)===0)i.memoizedState=null;else switch(c){case"forwards":for(o=i.child,c=null;o!==null;)t=o.alternate,t!==null&&Aa(t)===null&&(c=o),o=o.sibling;o=c,o===null?(c=i.child,i.child=null):(c=o.sibling,o.sibling=null),Gu(i,!1,c,o,h);break;case"backwards":for(o=null,c=i.child,i.child=null;c!==null;){if(t=c.alternate,t!==null&&Aa(t)===null){i.child=c;break}t=c.sibling,c.sibling=o,o=c,c=t}Gu(i,!0,o,null,h);break;case"together":Gu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ia(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Pi(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),Pr|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=ar(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=ar(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function __(t,i,o){switch(i.tag){case 3:Nh(i),fs();break;case 5:Jd(i);break;case 1:wn(i.type)&&ga(i);break;case 4:Mu(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,c=i.memoizedProps.value;Dt(Ma,l._currentValue),l._currentValue=c;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Dt(Ot,Ot.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Oh(t,i,o):(Dt(Ot,Ot.current&1),t=Pi(t,i,o),t!==null?t.sibling:null);Dt(Ot,Ot.current&1);break;case 19:if(l=(o&i.childLanes)!==0,(t.flags&128)!==0){if(l)return Bh(t,i,o);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Dt(Ot,Ot.current),l)break;return null;case 22:case 23:return i.lanes=0,Dh(t,i,o)}return Pi(t,i,o)}var zh,Wu,Hh,Vh;zh=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Wu=function(){},Hh=function(t,i,o,l){var c=t.memoizedProps;if(c!==l){t=i.stateNode,Rr(hi.current);var h=null;switch(o){case"input":c=V(t,c),l=V(t,l),h=[];break;case"select":c=oe({},c,{value:void 0}),l=oe({},l,{value:void 0}),h=[];break;case"textarea":c=E(t,c),l=E(t,l),h=[];break;default:typeof c.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=ha)}st(o,l);var M;o=null;for(Z in c)if(!l.hasOwnProperty(Z)&&c.hasOwnProperty(Z)&&c[Z]!=null)if(Z==="style"){var L=c[Z];for(M in L)L.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else Z!=="dangerouslySetInnerHTML"&&Z!=="children"&&Z!=="suppressContentEditableWarning"&&Z!=="suppressHydrationWarning"&&Z!=="autoFocus"&&(a.hasOwnProperty(Z)?h||(h=[]):(h=h||[]).push(Z,null));for(Z in l){var F=l[Z];if(L=c!=null?c[Z]:void 0,l.hasOwnProperty(Z)&&F!==L&&(F!=null||L!=null))if(Z==="style")if(L){for(M in L)!L.hasOwnProperty(M)||F&&F.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in F)F.hasOwnProperty(M)&&L[M]!==F[M]&&(o||(o={}),o[M]=F[M])}else o||(h||(h=[]),h.push(Z,o)),o=F;else Z==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,L=L?L.__html:void 0,F!=null&&L!==F&&(h=h||[]).push(Z,F)):Z==="children"?typeof F!="string"&&typeof F!="number"||(h=h||[]).push(Z,""+F):Z!=="suppressContentEditableWarning"&&Z!=="suppressHydrationWarning"&&(a.hasOwnProperty(Z)?(F!=null&&Z==="onScroll"&&It("scroll",t),h||L===F||(h=[])):(h=h||[]).push(Z,F))}o&&(h=h||[]).push("style",o);var Z=h;(i.updateQueue=Z)&&(i.flags|=4)}},Vh=function(t,i,o,l){o!==l&&(i.flags|=4)};function To(t,i){if(!Ft)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function cn(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,l=0;if(i)for(var c=t.child;c!==null;)o|=c.lanes|c.childLanes,l|=c.subtreeFlags&14680064,l|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)o|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=l,t.childLanes=o,i}function v_(t,i,o){var l=i.pendingProps;switch(du(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return cn(i),null;case 1:return wn(i.type)&&ma(),cn(i),null;case 3:return l=i.stateNode,ms(),Nt(Tn),Nt(ln),wu(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Sa(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Jn!==null&&(tc(Jn),Jn=null))),Wu(t,i),cn(i),null;case 5:Eu(i);var c=Rr(xo.current);if(o=i.type,t!==null&&i.stateNode!=null)Hh(t,i,o,l,c),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return cn(i),null}if(t=Rr(hi.current),Sa(i)){l=i.stateNode,o=i.type;var h=i.memoizedProps;switch(l[di]=i,l[po]=h,t=(i.mode&1)!==0,o){case"dialog":It("cancel",l),It("close",l);break;case"iframe":case"object":case"embed":It("load",l);break;case"video":case"audio":for(c=0;c<co.length;c++)It(co[c],l);break;case"source":It("error",l);break;case"img":case"image":case"link":It("error",l),It("load",l);break;case"details":It("toggle",l);break;case"input":nn(l,h),It("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},It("invalid",l);break;case"textarea":j(l,h),It("invalid",l)}st(o,h),c=null;for(var M in h)if(h.hasOwnProperty(M)){var L=h[M];M==="children"?typeof L=="string"?l.textContent!==L&&(h.suppressHydrationWarning!==!0&&da(l.textContent,L,t),c=["children",L]):typeof L=="number"&&l.textContent!==""+L&&(h.suppressHydrationWarning!==!0&&da(l.textContent,L,t),c=["children",""+L]):a.hasOwnProperty(M)&&L!=null&&M==="onScroll"&&It("scroll",l)}switch(o){case"input":Et(l),je(l,h,!0);break;case"textarea":Et(l),le(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=ha)}l=c,i.updateQueue=l,l!==null&&(i.flags|=4)}else{M=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=re(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=M.createElement(o,{is:l.is}):(t=M.createElement(o),o==="select"&&(M=t,l.multiple?M.multiple=!0:l.size&&(M.size=l.size))):t=M.createElementNS(t,o),t[di]=i,t[po]=l,zh(t,i,!1,!1),i.stateNode=t;e:{switch(M=et(o,l),o){case"dialog":It("cancel",t),It("close",t),c=l;break;case"iframe":case"object":case"embed":It("load",t),c=l;break;case"video":case"audio":for(c=0;c<co.length;c++)It(co[c],t);c=l;break;case"source":It("error",t),c=l;break;case"img":case"image":case"link":It("error",t),It("load",t),c=l;break;case"details":It("toggle",t),c=l;break;case"input":nn(t,l),c=V(t,l),It("invalid",t);break;case"option":c=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},c=oe({},l,{value:void 0}),It("invalid",t);break;case"textarea":j(t,l),c=E(t,l),It("invalid",t);break;default:c=l}st(o,c),L=c;for(h in L)if(L.hasOwnProperty(h)){var F=L[h];h==="style"?Je(t,F):h==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,F!=null&&Re(t,F)):h==="children"?typeof F=="string"?(o!=="textarea"||F!=="")&&Qe(t,F):typeof F=="number"&&Qe(t,""+F):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?F!=null&&h==="onScroll"&&It("scroll",t):F!=null&&U(t,h,F,M))}switch(o){case"input":Et(t),je(t,l,!1);break;case"textarea":Et(t),le(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Ae(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?b(t,!!l.multiple,h,!1):l.defaultValue!=null&&b(t,!!l.multiple,l.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=ha)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return cn(i),null;case 6:if(t&&i.stateNode!=null)Vh(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(o=Rr(xo.current),Rr(hi.current),Sa(i)){if(l=i.stateNode,o=i.memoizedProps,l[di]=i,(h=l.nodeValue!==o)&&(t=Un,t!==null))switch(t.tag){case 3:da(l.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&da(l.nodeValue,o,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[di]=i,i.stateNode=l}return cn(i),null;case 13:if(Nt(Ot),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ft&&In!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Xd(),fs(),i.flags|=98560,h=!1;else if(h=Sa(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[di]=i}else fs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;cn(i),h=!1}else Jn!==null&&(tc(Jn),Jn=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Ot.current&1)!==0?$t===0&&($t=3):rc())),i.updateQueue!==null&&(i.flags|=4),cn(i),null);case 4:return ms(),Wu(t,i),t===null&&fo(i.stateNode.containerInfo),cn(i),null;case 10:return vu(i.type._context),cn(i),null;case 17:return wn(i.type)&&ma(),cn(i),null;case 19:if(Nt(Ot),h=i.memoizedState,h===null)return cn(i),null;if(l=(i.flags&128)!==0,M=h.rendering,M===null)if(l)To(h,!1);else{if($t!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(M=Aa(t),M!==null){for(i.flags|=128,To(h,!1),l=M.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=o,o=i.child;o!==null;)h=o,t=l,h.flags&=14680066,M=h.alternate,M===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=M.childLanes,h.lanes=M.lanes,h.child=M.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=M.memoizedProps,h.memoizedState=M.memoizedState,h.updateQueue=M.updateQueue,h.type=M.type,t=M.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Dt(Ot,Ot.current&1|2),i.child}t=t.sibling}h.tail!==null&&Me()>xs&&(i.flags|=128,l=!0,To(h,!1),i.lanes=4194304)}else{if(!l)if(t=Aa(M),t!==null){if(i.flags|=128,l=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),To(h,!0),h.tail===null&&h.tailMode==="hidden"&&!M.alternate&&!Ft)return cn(i),null}else 2*Me()-h.renderingStartTime>xs&&o!==1073741824&&(i.flags|=128,l=!0,To(h,!1),i.lanes=4194304);h.isBackwards?(M.sibling=i.child,i.child=M):(o=h.last,o!==null?o.sibling=M:i.child=M,h.last=M)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Me(),i.sibling=null,o=Ot.current,Dt(Ot,l?o&1|2:o&1),i):(cn(i),null);case 22:case 23:return ic(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(Nn&1073741824)!==0&&(cn(i),i.subtreeFlags&6&&(i.flags|=8192)):cn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function x_(t,i){switch(du(i),i.tag){case 1:return wn(i.type)&&ma(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ms(),Nt(Tn),Nt(ln),wu(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Eu(i),null;case 13:if(Nt(Ot),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));fs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Nt(Ot),null;case 4:return ms(),null;case 10:return vu(i.type._context),null;case 22:case 23:return ic(),null;case 24:return null;default:return null}}var Na=!1,fn=!1,S_=typeof WeakSet=="function"?WeakSet:Set,ke=null;function _s(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){Bt(t,i,l)}else o.current=null}function Xu(t,i,o){try{o()}catch(l){Bt(t,i,l)}}var Gh=!1;function y_(t,i){if(iu=ta,t=yd(),$l(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var c=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var M=0,L=-1,F=-1,Z=0,xe=0,Se=t,ge=null;t:for(;;){for(var Ie;Se!==o||c!==0&&Se.nodeType!==3||(L=M+c),Se!==h||l!==0&&Se.nodeType!==3||(F=M+l),Se.nodeType===3&&(M+=Se.nodeValue.length),(Ie=Se.firstChild)!==null;)ge=Se,Se=Ie;for(;;){if(Se===t)break t;if(ge===o&&++Z===c&&(L=M),ge===h&&++xe===l&&(F=M),(Ie=Se.nextSibling)!==null)break;Se=ge,ge=Se.parentNode}Se=Ie}o=L===-1||F===-1?null:{start:L,end:F}}else o=null}o=o||{start:0,end:0}}else o=null;for(ru={focusedElem:t,selectionRange:o},ta=!1,ke=i;ke!==null;)if(i=ke,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,ke=t;else for(;ke!==null;){i=ke;try{var Be=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Be!==null){var He=Be.memoizedProps,Vt=Be.memoizedState,Y=i.stateNode,B=Y.getSnapshotBeforeUpdate(i.elementType===i.type?He:ei(i.type,He),Vt);Y.__reactInternalSnapshotBeforeUpdate=B}break;case 3:var q=i.stateNode.containerInfo;q.nodeType===1?q.textContent="":q.nodeType===9&&q.documentElement&&q.removeChild(q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ee){Bt(i,i.return,Ee)}if(t=i.sibling,t!==null){t.return=i.return,ke=t;break}ke=i.return}return Be=Gh,Gh=!1,Be}function wo(t,i,o){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var c=l=l.next;do{if((c.tag&t)===t){var h=c.destroy;c.destroy=void 0,h!==void 0&&Xu(i,o,h)}c=c.next}while(c!==l)}}function Fa(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var l=o.create;o.destroy=l()}o=o.next}while(o!==i)}}function Yu(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function Wh(t){var i=t.alternate;i!==null&&(t.alternate=null,Wh(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[di],delete i[po],delete i[lu],delete i[i_],delete i[r_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Xh(t){return t.tag===5||t.tag===3||t.tag===4}function Yh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Xh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ju(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=ha));else if(l!==4&&(t=t.child,t!==null))for(ju(t,i,o),t=t.sibling;t!==null;)ju(t,i,o),t=t.sibling}function qu(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(qu(t,i,o),t=t.sibling;t!==null;)qu(t,i,o),t=t.sibling}var rn=null,ti=!1;function nr(t,i,o){for(o=o.child;o!==null;)jh(t,i,o),o=o.sibling}function jh(t,i,o){if(ht&&typeof ht.onCommitFiberUnmount=="function")try{ht.onCommitFiberUnmount(wt,o)}catch{}switch(o.tag){case 5:fn||_s(o,i);case 6:var l=rn,c=ti;rn=null,nr(t,i,o),rn=l,ti=c,rn!==null&&(ti?(t=rn,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):rn.removeChild(o.stateNode));break;case 18:rn!==null&&(ti?(t=rn,o=o.stateNode,t.nodeType===8?au(t.parentNode,o):t.nodeType===1&&au(t,o),no(t)):au(rn,o.stateNode));break;case 4:l=rn,c=ti,rn=o.stateNode.containerInfo,ti=!0,nr(t,i,o),rn=l,ti=c;break;case 0:case 11:case 14:case 15:if(!fn&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){c=l=l.next;do{var h=c,M=h.destroy;h=h.tag,M!==void 0&&((h&2)!==0||(h&4)!==0)&&Xu(o,i,M),c=c.next}while(c!==l)}nr(t,i,o);break;case 1:if(!fn&&(_s(o,i),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(L){Bt(o,i,L)}nr(t,i,o);break;case 21:nr(t,i,o);break;case 22:o.mode&1?(fn=(l=fn)||o.memoizedState!==null,nr(t,i,o),fn=l):nr(t,i,o);break;default:nr(t,i,o)}}function qh(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new S_),i.forEach(function(l){var c=b_.bind(null,t,l);o.has(l)||(o.add(l),l.then(c,c))})}}function ni(t,i){var o=i.deletions;if(o!==null)for(var l=0;l<o.length;l++){var c=o[l];try{var h=t,M=i,L=M;e:for(;L!==null;){switch(L.tag){case 5:rn=L.stateNode,ti=!1;break e;case 3:rn=L.stateNode.containerInfo,ti=!0;break e;case 4:rn=L.stateNode.containerInfo,ti=!0;break e}L=L.return}if(rn===null)throw Error(n(160));jh(h,M,c),rn=null,ti=!1;var F=c.alternate;F!==null&&(F.return=null),c.return=null}catch(Z){Bt(c,i,Z)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)$h(i,t),i=i.sibling}function $h(t,i){var o=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ni(i,t),mi(t),l&4){try{wo(3,t,t.return),Fa(3,t)}catch(He){Bt(t,t.return,He)}try{wo(5,t,t.return)}catch(He){Bt(t,t.return,He)}}break;case 1:ni(i,t),mi(t),l&512&&o!==null&&_s(o,o.return);break;case 5:if(ni(i,t),mi(t),l&512&&o!==null&&_s(o,o.return),t.flags&32){var c=t.stateNode;try{Qe(c,"")}catch(He){Bt(t,t.return,He)}}if(l&4&&(c=t.stateNode,c!=null)){var h=t.memoizedProps,M=o!==null?o.memoizedProps:h,L=t.type,F=t.updateQueue;if(t.updateQueue=null,F!==null)try{L==="input"&&h.type==="radio"&&h.name!=null&&ct(c,h),et(L,M);var Z=et(L,h);for(M=0;M<F.length;M+=2){var xe=F[M],Se=F[M+1];xe==="style"?Je(c,Se):xe==="dangerouslySetInnerHTML"?Re(c,Se):xe==="children"?Qe(c,Se):U(c,xe,Se,Z)}switch(L){case"input":lt(c,h);break;case"textarea":me(c,h);break;case"select":var ge=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var Ie=h.value;Ie!=null?b(c,!!h.multiple,Ie,!1):ge!==!!h.multiple&&(h.defaultValue!=null?b(c,!!h.multiple,h.defaultValue,!0):b(c,!!h.multiple,h.multiple?[]:"",!1))}c[po]=h}catch(He){Bt(t,t.return,He)}}break;case 6:if(ni(i,t),mi(t),l&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,h=t.memoizedProps;try{c.nodeValue=h}catch(He){Bt(t,t.return,He)}}break;case 3:if(ni(i,t),mi(t),l&4&&o!==null&&o.memoizedState.isDehydrated)try{no(i.containerInfo)}catch(He){Bt(t,t.return,He)}break;case 4:ni(i,t),mi(t);break;case 13:ni(i,t),mi(t),c=t.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(Zu=Me())),l&4&&qh(t);break;case 22:if(xe=o!==null&&o.memoizedState!==null,t.mode&1?(fn=(Z=fn)||xe,ni(i,t),fn=Z):ni(i,t),mi(t),l&8192){if(Z=t.memoizedState!==null,(t.stateNode.isHidden=Z)&&!xe&&(t.mode&1)!==0)for(ke=t,xe=t.child;xe!==null;){for(Se=ke=xe;ke!==null;){switch(ge=ke,Ie=ge.child,ge.tag){case 0:case 11:case 14:case 15:wo(4,ge,ge.return);break;case 1:_s(ge,ge.return);var Be=ge.stateNode;if(typeof Be.componentWillUnmount=="function"){l=ge,o=ge.return;try{i=l,Be.props=i.memoizedProps,Be.state=i.memoizedState,Be.componentWillUnmount()}catch(He){Bt(l,o,He)}}break;case 5:_s(ge,ge.return);break;case 22:if(ge.memoizedState!==null){Qh(Se);continue}}Ie!==null?(Ie.return=ge,ke=Ie):Qh(Se)}xe=xe.sibling}e:for(xe=null,Se=t;;){if(Se.tag===5){if(xe===null){xe=Se;try{c=Se.stateNode,Z?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(L=Se.stateNode,F=Se.memoizedProps.style,M=F!=null&&F.hasOwnProperty("display")?F.display:null,L.style.display=$e("display",M))}catch(He){Bt(t,t.return,He)}}}else if(Se.tag===6){if(xe===null)try{Se.stateNode.nodeValue=Z?"":Se.memoizedProps}catch(He){Bt(t,t.return,He)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===t)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===t)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===t)break e;xe===Se&&(xe=null),Se=Se.return}xe===Se&&(xe=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:ni(i,t),mi(t),l&4&&qh(t);break;case 21:break;default:ni(i,t),mi(t)}}function mi(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(Xh(o)){var l=o;break e}o=o.return}throw Error(n(160))}switch(l.tag){case 5:var c=l.stateNode;l.flags&32&&(Qe(c,""),l.flags&=-33);var h=Yh(t);qu(t,h,c);break;case 3:case 4:var M=l.stateNode.containerInfo,L=Yh(t);ju(t,L,M);break;default:throw Error(n(161))}}catch(F){Bt(t,t.return,F)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function M_(t,i,o){ke=t,Kh(t)}function Kh(t,i,o){for(var l=(t.mode&1)!==0;ke!==null;){var c=ke,h=c.child;if(c.tag===22&&l){var M=c.memoizedState!==null||Na;if(!M){var L=c.alternate,F=L!==null&&L.memoizedState!==null||fn;L=Na;var Z=fn;if(Na=M,(fn=F)&&!Z)for(ke=c;ke!==null;)M=ke,F=M.child,M.tag===22&&M.memoizedState!==null?Jh(c):F!==null?(F.return=M,ke=F):Jh(c);for(;h!==null;)ke=h,Kh(h),h=h.sibling;ke=c,Na=L,fn=Z}Zh(t)}else(c.subtreeFlags&8772)!==0&&h!==null?(h.return=c,ke=h):Zh(t)}}function Zh(t){for(;ke!==null;){var i=ke;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:fn||Fa(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!fn)if(o===null)l.componentDidMount();else{var c=i.elementType===i.type?o.memoizedProps:ei(i.type,o.memoizedProps);l.componentDidUpdate(c,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&Qd(i,h,l);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Qd(i,M,o)}break;case 5:var L=i.stateNode;if(o===null&&i.flags&4){o=L;var F=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":F.autoFocus&&o.focus();break;case"img":F.src&&(o.src=F.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var Z=i.alternate;if(Z!==null){var xe=Z.memoizedState;if(xe!==null){var Se=xe.dehydrated;Se!==null&&no(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}fn||i.flags&512&&Yu(i)}catch(ge){Bt(i,i.return,ge)}}if(i===t){ke=null;break}if(o=i.sibling,o!==null){o.return=i.return,ke=o;break}ke=i.return}}function Qh(t){for(;ke!==null;){var i=ke;if(i===t){ke=null;break}var o=i.sibling;if(o!==null){o.return=i.return,ke=o;break}ke=i.return}}function Jh(t){for(;ke!==null;){var i=ke;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Fa(4,i)}catch(F){Bt(i,o,F)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var c=i.return;try{l.componentDidMount()}catch(F){Bt(i,c,F)}}var h=i.return;try{Yu(i)}catch(F){Bt(i,h,F)}break;case 5:var M=i.return;try{Yu(i)}catch(F){Bt(i,M,F)}}}catch(F){Bt(i,i.return,F)}if(i===t){ke=null;break}var L=i.sibling;if(L!==null){L.return=i.return,ke=L;break}ke=i.return}}var E_=Math.ceil,Oa=C.ReactCurrentDispatcher,$u=C.ReactCurrentOwner,Wn=C.ReactCurrentBatchConfig,_t=0,Jt=null,Wt=null,sn=0,Nn=0,vs=Zi(0),$t=0,Ao=null,Pr=0,ka=0,Ku=0,Ro=null,Rn=null,Zu=0,xs=1/0,bi=null,Ba=!1,Qu=null,ir=null,za=!1,rr=null,Ha=0,Co=0,Ju=null,Va=-1,Ga=0;function vn(){return(_t&6)!==0?Me():Va!==-1?Va:Va=Me()}function sr(t){return(t.mode&1)===0?1:(_t&2)!==0&&sn!==0?sn&-sn:o_.transition!==null?(Ga===0&&(Ga=gn()),Ga):(t=Pt,t!==0||(t=window.event,t=t===void 0?16:td(t.type)),t)}function ii(t,i,o,l){if(50<Co)throw Co=0,Ju=null,Error(n(185));En(t,o,l),((_t&2)===0||t!==Jt)&&(t===Jt&&((_t&2)===0&&(ka|=o),$t===4&&or(t,sn)),Cn(t,l),o===1&&_t===0&&(i.mode&1)===0&&(xs=Me()+500,_a&&Ji()))}function Cn(t,i){var o=t.callbackNode;kn(t,i);var l=fi(t,t===Jt?sn:0);if(l===0)o!==null&&te(o),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(o!=null&&te(o),i===1)t.tag===0?s_(tp.bind(null,t)):zd(tp.bind(null,t)),t_(function(){(_t&6)===0&&Ji()}),o=null;else{switch(jf(l)){case 1:o=ze;break;case 4:o=tt;break;case 16:o=it;break;case 536870912:o=pt;break;default:o=it}o=up(o,ep.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function ep(t,i){if(Va=-1,Ga=0,(_t&6)!==0)throw Error(n(327));var o=t.callbackNode;if(Ss()&&t.callbackNode!==o)return null;var l=fi(t,t===Jt?sn:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Wa(t,l);else{i=l;var c=_t;_t|=2;var h=ip();(Jt!==t||sn!==i)&&(bi=null,xs=Me()+500,Lr(t,i));do try{A_();break}catch(L){np(t,L)}while(!0);_u(),Oa.current=h,_t=c,Wt!==null?i=0:(Jt=null,sn=0,i=$t)}if(i!==0){if(i===2&&(c=Mi(t),c!==0&&(l=c,i=ec(t,c))),i===1)throw o=Ao,Lr(t,0),or(t,l),Cn(t,Me()),o;if(i===6)or(t,l);else{if(c=t.current.alternate,(l&30)===0&&!T_(c)&&(i=Wa(t,l),i===2&&(h=Mi(t),h!==0&&(l=h,i=ec(t,h))),i===1))throw o=Ao,Lr(t,0),or(t,l),Cn(t,Me()),o;switch(t.finishedWork=c,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Dr(t,Rn,bi);break;case 3:if(or(t,l),(l&130023424)===l&&(i=Zu+500-Me(),10<i)){if(fi(t,0)!==0)break;if(c=t.suspendedLanes,(c&l)!==l){vn(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=ou(Dr.bind(null,t,Rn,bi),i);break}Dr(t,Rn,bi);break;case 4:if(or(t,l),(l&4194240)===l)break;for(i=t.eventTimes,c=-1;0<l;){var M=31-ot(l);h=1<<M,M=i[M],M>c&&(c=M),l&=~h}if(l=c,l=Me()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*E_(l/1960))-l,10<l){t.timeoutHandle=ou(Dr.bind(null,t,Rn,bi),l);break}Dr(t,Rn,bi);break;case 5:Dr(t,Rn,bi);break;default:throw Error(n(329))}}}return Cn(t,Me()),t.callbackNode===o?ep.bind(null,t):null}function ec(t,i){var o=Ro;return t.current.memoizedState.isDehydrated&&(Lr(t,i).flags|=256),t=Wa(t,i),t!==2&&(i=Rn,Rn=o,i!==null&&tc(i)),t}function tc(t){Rn===null?Rn=t:Rn.push.apply(Rn,t)}function T_(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var c=o[l],h=c.getSnapshot;c=c.value;try{if(!Qn(h(),c))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function or(t,i){for(i&=~Ku,i&=~ka,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-ot(i),l=1<<o;t[o]=-1,i&=~l}}function tp(t){if((_t&6)!==0)throw Error(n(327));Ss();var i=fi(t,0);if((i&1)===0)return Cn(t,Me()),null;var o=Wa(t,i);if(t.tag!==0&&o===2){var l=Mi(t);l!==0&&(i=l,o=ec(t,l))}if(o===1)throw o=Ao,Lr(t,0),or(t,i),Cn(t,Me()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Dr(t,Rn,bi),Cn(t,Me()),null}function nc(t,i){var o=_t;_t|=1;try{return t(i)}finally{_t=o,_t===0&&(xs=Me()+500,_a&&Ji())}}function br(t){rr!==null&&rr.tag===0&&(_t&6)===0&&Ss();var i=_t;_t|=1;var o=Wn.transition,l=Pt;try{if(Wn.transition=null,Pt=1,t)return t()}finally{Pt=l,Wn.transition=o,_t=i,(_t&6)===0&&Ji()}}function ic(){Nn=vs.current,Nt(vs)}function Lr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,e_(o)),Wt!==null)for(o=Wt.return;o!==null;){var l=o;switch(du(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&ma();break;case 3:ms(),Nt(Tn),Nt(ln),wu();break;case 5:Eu(l);break;case 4:ms();break;case 13:Nt(Ot);break;case 19:Nt(Ot);break;case 10:vu(l.type._context);break;case 22:case 23:ic()}o=o.return}if(Jt=t,Wt=t=ar(t.current,null),sn=Nn=i,$t=0,Ao=null,Ku=ka=Pr=0,Rn=Ro=null,Ar!==null){for(i=0;i<Ar.length;i++)if(o=Ar[i],l=o.interleaved,l!==null){o.interleaved=null;var c=l.next,h=o.pending;if(h!==null){var M=h.next;h.next=c,l.next=M}o.pending=l}Ar=null}return t}function np(t,i){do{var o=Wt;try{if(_u(),Ra.current=La,Ca){for(var l=kt.memoizedState;l!==null;){var c=l.queue;c!==null&&(c.pending=null),l=l.next}Ca=!1}if(Cr=0,Qt=qt=kt=null,So=!1,yo=0,$u.current=null,o===null||o.return===null){$t=1,Ao=i,Wt=null;break}e:{var h=t,M=o.return,L=o,F=i;if(i=sn,L.flags|=32768,F!==null&&typeof F=="object"&&typeof F.then=="function"){var Z=F,xe=L,Se=xe.tag;if((xe.mode&1)===0&&(Se===0||Se===11||Se===15)){var ge=xe.alternate;ge?(xe.updateQueue=ge.updateQueue,xe.memoizedState=ge.memoizedState,xe.lanes=ge.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var Ie=Rh(M);if(Ie!==null){Ie.flags&=-257,Ch(Ie,M,L,h,i),Ie.mode&1&&Ah(h,Z,i),i=Ie,F=Z;var Be=i.updateQueue;if(Be===null){var He=new Set;He.add(F),i.updateQueue=He}else Be.add(F);break e}else{if((i&1)===0){Ah(h,Z,i),rc();break e}F=Error(n(426))}}else if(Ft&&L.mode&1){var Vt=Rh(M);if(Vt!==null){(Vt.flags&65536)===0&&(Vt.flags|=256),Ch(Vt,M,L,h,i),mu(gs(F,L));break e}}h=F=gs(F,L),$t!==4&&($t=2),Ro===null?Ro=[h]:Ro.push(h),h=M;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var Y=Th(h,F,i);Zd(h,Y);break e;case 1:L=F;var B=h.type,q=h.stateNode;if((h.flags&128)===0&&(typeof B.getDerivedStateFromError=="function"||q!==null&&typeof q.componentDidCatch=="function"&&(ir===null||!ir.has(q)))){h.flags|=65536,i&=-i,h.lanes|=i;var Ee=wh(h,L,i);Zd(h,Ee);break e}}h=h.return}while(h!==null)}sp(o)}catch(We){i=We,Wt===o&&o!==null&&(Wt=o=o.return);continue}break}while(!0)}function ip(){var t=Oa.current;return Oa.current=La,t===null?La:t}function rc(){($t===0||$t===3||$t===2)&&($t=4),Jt===null||(Pr&268435455)===0&&(ka&268435455)===0||or(Jt,sn)}function Wa(t,i){var o=_t;_t|=2;var l=ip();(Jt!==t||sn!==i)&&(bi=null,Lr(t,i));do try{w_();break}catch(c){np(t,c)}while(!0);if(_u(),_t=o,Oa.current=l,Wt!==null)throw Error(n(261));return Jt=null,sn=0,$t}function w_(){for(;Wt!==null;)rp(Wt)}function A_(){for(;Wt!==null&&!W();)rp(Wt)}function rp(t){var i=lp(t.alternate,t,Nn);t.memoizedProps=t.pendingProps,i===null?sp(t):Wt=i,$u.current=null}function sp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=v_(o,i,Nn),o!==null){Wt=o;return}}else{if(o=x_(o,i),o!==null){o.flags&=32767,Wt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{$t=6,Wt=null;return}}if(i=i.sibling,i!==null){Wt=i;return}Wt=i=t}while(i!==null);$t===0&&($t=5)}function Dr(t,i,o){var l=Pt,c=Wn.transition;try{Wn.transition=null,Pt=1,R_(t,i,o,l)}finally{Wn.transition=c,Pt=l}return null}function R_(t,i,o,l){do Ss();while(rr!==null);if((_t&6)!==0)throw Error(n(327));o=t.finishedWork;var c=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(Qo(t,h),t===Jt&&(Wt=Jt=null,sn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||za||(za=!0,up(it,function(){return Ss(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=Wn.transition,Wn.transition=null;var M=Pt;Pt=1;var L=_t;_t|=4,$u.current=null,y_(t,o),$h(o,t),jg(ru),ta=!!iu,ru=iu=null,t.current=o,M_(o),Te(),_t=L,Pt=M,Wn.transition=h}else t.current=o;if(za&&(za=!1,rr=t,Ha=c),h=t.pendingLanes,h===0&&(ir=null),on(o.stateNode),Cn(t,Me()),i!==null)for(l=t.onRecoverableError,o=0;o<i.length;o++)c=i[o],l(c.value,{componentStack:c.stack,digest:c.digest});if(Ba)throw Ba=!1,t=Qu,Qu=null,t;return(Ha&1)!==0&&t.tag!==0&&Ss(),h=t.pendingLanes,(h&1)!==0?t===Ju?Co++:(Co=0,Ju=t):Co=0,Ji(),null}function Ss(){if(rr!==null){var t=jf(Ha),i=Wn.transition,o=Pt;try{if(Wn.transition=null,Pt=16>t?16:t,rr===null)var l=!1;else{if(t=rr,rr=null,Ha=0,(_t&6)!==0)throw Error(n(331));var c=_t;for(_t|=4,ke=t.current;ke!==null;){var h=ke,M=h.child;if((ke.flags&16)!==0){var L=h.deletions;if(L!==null){for(var F=0;F<L.length;F++){var Z=L[F];for(ke=Z;ke!==null;){var xe=ke;switch(xe.tag){case 0:case 11:case 15:wo(8,xe,h)}var Se=xe.child;if(Se!==null)Se.return=xe,ke=Se;else for(;ke!==null;){xe=ke;var ge=xe.sibling,Ie=xe.return;if(Wh(xe),xe===Z){ke=null;break}if(ge!==null){ge.return=Ie,ke=ge;break}ke=Ie}}}var Be=h.alternate;if(Be!==null){var He=Be.child;if(He!==null){Be.child=null;do{var Vt=He.sibling;He.sibling=null,He=Vt}while(He!==null)}}ke=h}}if((h.subtreeFlags&2064)!==0&&M!==null)M.return=h,ke=M;else e:for(;ke!==null;){if(h=ke,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:wo(9,h,h.return)}var Y=h.sibling;if(Y!==null){Y.return=h.return,ke=Y;break e}ke=h.return}}var B=t.current;for(ke=B;ke!==null;){M=ke;var q=M.child;if((M.subtreeFlags&2064)!==0&&q!==null)q.return=M,ke=q;else e:for(M=B;ke!==null;){if(L=ke,(L.flags&2048)!==0)try{switch(L.tag){case 0:case 11:case 15:Fa(9,L)}}catch(We){Bt(L,L.return,We)}if(L===M){ke=null;break e}var Ee=L.sibling;if(Ee!==null){Ee.return=L.return,ke=Ee;break e}ke=L.return}}if(_t=c,Ji(),ht&&typeof ht.onPostCommitFiberRoot=="function")try{ht.onPostCommitFiberRoot(wt,t)}catch{}l=!0}return l}finally{Pt=o,Wn.transition=i}}return!1}function op(t,i,o){i=gs(o,i),i=Th(t,i,1),t=tr(t,i,1),i=vn(),t!==null&&(En(t,1,i),Cn(t,i))}function Bt(t,i,o){if(t.tag===3)op(t,t,o);else for(;i!==null;){if(i.tag===3){op(i,t,o);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ir===null||!ir.has(l))){t=gs(o,t),t=wh(i,t,1),i=tr(i,t,1),t=vn(),i!==null&&(En(i,1,t),Cn(i,t));break}}i=i.return}}function C_(t,i,o){var l=t.pingCache;l!==null&&l.delete(i),i=vn(),t.pingedLanes|=t.suspendedLanes&o,Jt===t&&(sn&o)===o&&($t===4||$t===3&&(sn&130023424)===sn&&500>Me()-Zu?Lr(t,0):Ku|=o),Cn(t,i)}function ap(t,i){i===0&&((t.mode&1)===0?i=1:(i=Zn,Zn<<=1,(Zn&130023424)===0&&(Zn=4194304)));var o=vn();t=Ri(t,i),t!==null&&(En(t,i,o),Cn(t,o))}function P_(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),ap(t,o)}function b_(t,i){var o=0;switch(t.tag){case 13:var l=t.stateNode,c=t.memoizedState;c!==null&&(o=c.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),ap(t,o)}var lp;lp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||Tn.current)An=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return An=!1,__(t,i,o);An=(t.flags&131072)!==0}else An=!1,Ft&&(i.flags&1048576)!==0&&Hd(i,xa,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Ia(t,i),t=i.pendingProps;var c=ls(i,ln.current);ps(i,o),c=Cu(null,i,l,t,c,o);var h=Pu();return i.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,wn(l)?(h=!0,ga(i)):h=!1,i.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,yu(i),c.updater=Da,i.stateNode=c,c._reactInternals=i,Nu(i,l,t,o),i=Bu(null,i,l,!0,h,o)):(i.tag=0,Ft&&h&&fu(i),_n(null,i,c,o),i=i.child),i;case 16:l=i.elementType;e:{switch(Ia(t,i),t=i.pendingProps,c=l._init,l=c(l._payload),i.type=l,c=i.tag=D_(l),t=ei(l,t),c){case 0:i=ku(null,i,l,t,o);break e;case 1:i=Ih(null,i,l,t,o);break e;case 11:i=Ph(null,i,l,t,o);break e;case 14:i=bh(null,i,l,ei(l.type,t),o);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:ei(l,c),ku(t,i,l,c,o);case 1:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:ei(l,c),Ih(t,i,l,c,o);case 3:e:{if(Nh(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,c=h.element,Kd(t,i),wa(i,l,null,o);var M=i.memoizedState;if(l=M.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){c=gs(Error(n(423)),i),i=Fh(t,i,l,o,c);break e}else if(l!==c){c=gs(Error(n(424)),i),i=Fh(t,i,l,o,c);break e}else for(In=Ki(i.stateNode.containerInfo.firstChild),Un=i,Ft=!0,Jn=null,o=qd(i,null,l,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(fs(),l===c){i=Pi(t,i,o);break e}_n(t,i,l,o)}i=i.child}return i;case 5:return Jd(i),t===null&&pu(i),l=i.type,c=i.pendingProps,h=t!==null?t.memoizedProps:null,M=c.children,su(l,c)?M=null:h!==null&&su(l,h)&&(i.flags|=32),Uh(t,i),_n(t,i,M,o),i.child;case 6:return t===null&&pu(i),null;case 13:return Oh(t,i,o);case 4:return Mu(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=ds(i,null,l,o):_n(t,i,l,o),i.child;case 11:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:ei(l,c),Ph(t,i,l,c,o);case 7:return _n(t,i,i.pendingProps,o),i.child;case 8:return _n(t,i,i.pendingProps.children,o),i.child;case 12:return _n(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(l=i.type._context,c=i.pendingProps,h=i.memoizedProps,M=c.value,Dt(Ma,l._currentValue),l._currentValue=M,h!==null)if(Qn(h.value,M)){if(h.children===c.children&&!Tn.current){i=Pi(t,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var L=h.dependencies;if(L!==null){M=h.child;for(var F=L.firstContext;F!==null;){if(F.context===l){if(h.tag===1){F=Ci(-1,o&-o),F.tag=2;var Z=h.updateQueue;if(Z!==null){Z=Z.shared;var xe=Z.pending;xe===null?F.next=F:(F.next=xe.next,xe.next=F),Z.pending=F}}h.lanes|=o,F=h.alternate,F!==null&&(F.lanes|=o),xu(h.return,o,i),L.lanes|=o;break}F=F.next}}else if(h.tag===10)M=h.type===i.type?null:h.child;else if(h.tag===18){if(M=h.return,M===null)throw Error(n(341));M.lanes|=o,L=M.alternate,L!==null&&(L.lanes|=o),xu(M,o,i),M=h.sibling}else M=h.child;if(M!==null)M.return=h;else for(M=h;M!==null;){if(M===i){M=null;break}if(h=M.sibling,h!==null){h.return=M.return,M=h;break}M=M.return}h=M}_n(t,i,c.children,o),i=i.child}return i;case 9:return c=i.type,l=i.pendingProps.children,ps(i,o),c=Vn(c),l=l(c),i.flags|=1,_n(t,i,l,o),i.child;case 14:return l=i.type,c=ei(l,i.pendingProps),c=ei(l.type,c),bh(t,i,l,c,o);case 15:return Lh(t,i,i.type,i.pendingProps,o);case 17:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:ei(l,c),Ia(t,i),i.tag=1,wn(l)?(t=!0,ga(i)):t=!1,ps(i,o),Mh(i,l,c),Nu(i,l,c,o),Bu(null,i,l,!0,t,o);case 19:return Bh(t,i,o);case 22:return Dh(t,i,o)}throw Error(n(156,i.tag))};function up(t,i){return J(t,i)}function L_(t,i,o,l){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(t,i,o,l){return new L_(t,i,o,l)}function sc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function D_(t){if(typeof t=="function")return sc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ue)return 11;if(t===he)return 14}return 2}function ar(t,i){var o=t.alternate;return o===null?(o=Xn(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Xa(t,i,o,l,c,h){var M=2;if(l=t,typeof t=="function")sc(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case N:return Ur(o.children,c,h,i);case X:M=8,c|=8;break;case P:return t=Xn(12,o,i,c|2),t.elementType=P,t.lanes=h,t;case Q:return t=Xn(13,o,i,c),t.elementType=Q,t.lanes=h,t;case de:return t=Xn(19,o,i,c),t.elementType=de,t.lanes=h,t;case ce:return Ya(o,c,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case R:M=10;break e;case k:M=9;break e;case ue:M=11;break e;case he:M=14;break e;case ie:M=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Xn(M,o,i,c),i.elementType=t,i.type=l,i.lanes=h,i}function Ur(t,i,o,l){return t=Xn(7,t,l,i),t.lanes=o,t}function Ya(t,i,o,l){return t=Xn(22,t,l,i),t.elementType=ce,t.lanes=o,t.stateNode={isHidden:!1},t}function oc(t,i,o){return t=Xn(6,t,null,i),t.lanes=o,t}function ac(t,i,o){return i=Xn(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function U_(t,i,o,l,c){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bn(0),this.expirationTimes=Bn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bn(0),this.identifierPrefix=l,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function lc(t,i,o,l,c,h,M,L,F){return t=new U_(t,i,o,L,F),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Xn(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},yu(h),t}function I_(t,i,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:z,key:l==null?null:""+l,children:t,containerInfo:i,implementation:o}}function cp(t){if(!t)return Qi;t=t._reactInternals;e:{if(ci(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(wn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(wn(o))return kd(t,o,i)}return i}function fp(t,i,o,l,c,h,M,L,F){return t=lc(o,l,!0,t,c,h,M,L,F),t.context=cp(null),o=t.current,l=vn(),c=sr(o),h=Ci(l,c),h.callback=i??null,tr(o,h,c),t.current.lanes=c,En(t,c,l),Cn(t,l),t}function ja(t,i,o,l){var c=i.current,h=vn(),M=sr(c);return o=cp(o),i.context===null?i.context=o:i.pendingContext=o,i=Ci(h,M),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=tr(c,i,M),t!==null&&(ii(t,c,M,h),Ta(t,c,M)),M}function qa(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function dp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function uc(t,i){dp(t,i),(t=t.alternate)&&dp(t,i)}function N_(){return null}var hp=typeof reportError=="function"?reportError:function(t){console.error(t)};function cc(t){this._internalRoot=t}$a.prototype.render=cc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));ja(t,i,null,null)},$a.prototype.unmount=cc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;br(function(){ja(null,t,null,null)}),i[Ei]=null}};function $a(t){this._internalRoot=t}$a.prototype.unstable_scheduleHydration=function(t){if(t){var i=Kf();t={blockedOn:null,target:t,priority:i};for(var o=0;o<ji.length&&i!==0&&i<ji[o].priority;o++);ji.splice(o,0,t),o===0&&Jf(t)}};function fc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ka(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function pp(){}function F_(t,i,o,l,c){if(c){if(typeof l=="function"){var h=l;l=function(){var Z=qa(M);h.call(Z)}}var M=fp(i,l,t,0,null,!1,!1,"",pp);return t._reactRootContainer=M,t[Ei]=M.current,fo(t.nodeType===8?t.parentNode:t),br(),M}for(;c=t.lastChild;)t.removeChild(c);if(typeof l=="function"){var L=l;l=function(){var Z=qa(F);L.call(Z)}}var F=lc(t,0,!1,null,null,!1,!1,"",pp);return t._reactRootContainer=F,t[Ei]=F.current,fo(t.nodeType===8?t.parentNode:t),br(function(){ja(i,F,o,l)}),F}function Za(t,i,o,l,c){var h=o._reactRootContainer;if(h){var M=h;if(typeof c=="function"){var L=c;c=function(){var F=qa(M);L.call(F)}}ja(i,M,t,c)}else M=F_(o,i,t,c,l);return qa(M)}qf=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=jt(i.pendingLanes);o!==0&&(Nl(i,o|1),Cn(i,Me()),(_t&6)===0&&(xs=Me()+500,Ji()))}break;case 13:br(function(){var l=Ri(t,1);if(l!==null){var c=vn();ii(l,t,1,c)}}),uc(t,1)}},Fl=function(t){if(t.tag===13){var i=Ri(t,134217728);if(i!==null){var o=vn();ii(i,t,134217728,o)}uc(t,134217728)}},$f=function(t){if(t.tag===13){var i=sr(t),o=Ri(t,i);if(o!==null){var l=vn();ii(o,t,i,l)}uc(t,i)}},Kf=function(){return Pt},Zf=function(t,i){var o=Pt;try{return Pt=t,i()}finally{Pt=o}},Ce=function(t,i,o){switch(i){case"input":if(lt(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var l=o[i];if(l!==t&&l.form===t.form){var c=pa(l);if(!c)throw Error(n(90));at(l),lt(l,c)}}}break;case"textarea":me(t,o);break;case"select":i=o.value,i!=null&&b(t,!!o.multiple,i,!1)}},Ut=nc,Yt=br;var O_={usingClientEntryPoint:!1,Events:[mo,os,pa,be,rt,nc]},Po={findFiberByHostInstance:Mr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},k_={bundleType:Po.bundleType,version:Po.version,rendererPackageName:Po.rendererPackageName,rendererConfig:Po.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=w(t),t===null?null:t.stateNode},findFiberByHostInstance:Po.findFiberByHostInstance||N_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qa.isDisabled&&Qa.supportsFiber)try{wt=Qa.inject(k_),ht=Qa}catch{}}return Pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O_,Pn.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fc(i))throw Error(n(200));return I_(t,i,null,o)},Pn.createRoot=function(t,i){if(!fc(t))throw Error(n(299));var o=!1,l="",c=hp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(c=i.onRecoverableError)),i=lc(t,1,!1,null,null,o,!1,l,c),t[Ei]=i.current,fo(t.nodeType===8?t.parentNode:t),new cc(i)},Pn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=w(i),t=t===null?null:t.stateNode,t},Pn.flushSync=function(t){return br(t)},Pn.hydrate=function(t,i,o){if(!Ka(i))throw Error(n(200));return Za(null,t,i,!0,o)},Pn.hydrateRoot=function(t,i,o){if(!fc(t))throw Error(n(405));var l=o!=null&&o.hydratedSources||null,c=!1,h="",M=hp;if(o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=fp(i,null,t,1,o??null,c,!1,h,M),t[Ei]=i.current,fo(t),l)for(t=0;t<l.length;t++)o=l[t],c=o._getVersion,c=c(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,c]:i.mutableSourceEagerHydrationData.push(o,c);return new $a(i)},Pn.render=function(t,i,o){if(!Ka(i))throw Error(n(200));return Za(null,t,i,!1,o)},Pn.unmountComponentAtNode=function(t){if(!Ka(t))throw Error(n(40));return t._reactRootContainer?(br(function(){Za(null,null,t,!1,function(){t._reactRootContainer=null,t[Ei]=null})}),!0):!1},Pn.unstable_batchedUpdates=nc,Pn.unstable_renderSubtreeIntoContainer=function(t,i,o,l){if(!Ka(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Za(t,i,o,!1,l)},Pn.version="18.3.1-next-f1338f8080-20240426",Pn}var Mp;function j_(){if(Mp)return pc.exports;Mp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),pc.exports=Y_(),pc.exports}var Ep;function q_(){if(Ep)return Ja;Ep=1;var s=j_();return Ja.createRoot=s.createRoot,Ja.hydrateRoot=s.hydrateRoot,Ja}var $_=q_();const K_=Am($_);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Nf="170",Z_=0,Tp=1,Q_=2,Rm=1,Cm=2,Fi=3,vr=0,bn=1,Oi=2,gr=0,ks=1,wp=2,Ap=3,Rp=4,J_=5,Gr=100,ev=101,tv=102,nv=103,iv=104,rv=200,sv=201,ov=202,av=203,Yc=204,jc=205,lv=206,uv=207,cv=208,fv=209,dv=210,hv=211,pv=212,mv=213,gv=214,qc=0,$c=1,Kc=2,Hs=3,Zc=4,Qc=5,Jc=6,ef=7,Pm=0,_v=1,vv=2,_r=0,xv=1,Sv=2,yv=3,Mv=4,Ev=5,Tv=6,wv=7,bm=300,Vs=301,Gs=302,tf=303,nf=304,Ll=306,rf=1e3,Xr=1001,sf=1002,ui=1003,Av=1004,el=1005,_i=1006,_c=1007,Yr=1008,Hi=1009,Lm=1010,Dm=1011,Ho=1012,Ff=1013,qr=1014,ki=1015,Go=1016,Of=1017,kf=1018,Ws=1020,Um=35902,Im=1021,Nm=1022,li=1023,Fm=1024,Om=1025,Bs=1026,Xs=1027,km=1028,Bf=1029,Bm=1030,zf=1031,Hf=1033,yl=33776,Ml=33777,El=33778,Tl=33779,of=35840,af=35841,lf=35842,uf=35843,cf=36196,ff=37492,df=37496,hf=37808,pf=37809,mf=37810,gf=37811,_f=37812,vf=37813,xf=37814,Sf=37815,yf=37816,Mf=37817,Ef=37818,Tf=37819,wf=37820,Af=37821,wl=36492,Rf=36494,Cf=36495,zm=36283,Pf=36284,bf=36285,Lf=36286,Rv=3200,Cv=3201,Hm=0,Pv=1,mr="",jn="srgb",qs="srgb-linear",Dl="linear",bt="srgb",ys=7680,Cp=519,bv=512,Lv=513,Dv=514,Vm=515,Uv=516,Iv=517,Nv=518,Fv=519,Pp=35044,bp="300 es",Bi=2e3,Pl=2001;class $s{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const u=a.indexOf(n);u!==-1&&a.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let u=0,d=a.length;u<d;u++)a[u].call(this,e);e.target=null}}}const dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Lp=1234567;const ko=Math.PI/180,Vo=180/Math.PI;function Ks(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(dn[s&255]+dn[s>>8&255]+dn[s>>16&255]+dn[s>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[n&63|128]+dn[n>>8&255]+"-"+dn[n>>16&255]+dn[n>>24&255]+dn[r&255]+dn[r>>8&255]+dn[r>>16&255]+dn[r>>24&255]).toLowerCase()}function yn(s,e,n){return Math.max(e,Math.min(n,s))}function Vf(s,e){return(s%e+e)%e}function Ov(s,e,n,r,a){return r+(s-e)*(a-r)/(n-e)}function kv(s,e,n){return s!==e?(n-s)/(e-s):0}function Bo(s,e,n){return(1-n)*s+n*e}function Bv(s,e,n,r){return Bo(s,e,1-Math.exp(-n*r))}function zv(s,e=1){return e-Math.abs(Vf(s,e*2)-e)}function Hv(s,e,n){return s<=e?0:s>=n?1:(s=(s-e)/(n-e),s*s*(3-2*s))}function Vv(s,e,n){return s<=e?0:s>=n?1:(s=(s-e)/(n-e),s*s*s*(s*(s*6-15)+10))}function Gv(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Wv(s,e){return s+Math.random()*(e-s)}function Xv(s){return s*(.5-Math.random())}function Yv(s){s!==void 0&&(Lp=s);let e=Lp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function jv(s){return s*ko}function qv(s){return s*Vo}function $v(s){return(s&s-1)===0&&s!==0}function Kv(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Zv(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Qv(s,e,n,r,a){const u=Math.cos,d=Math.sin,f=u(n/2),p=d(n/2),m=u((e+r)/2),_=d((e+r)/2),v=u((e-r)/2),x=d((e-r)/2),y=u((r-e)/2),T=d((r-e)/2);switch(a){case"XYX":s.set(f*_,p*v,p*x,f*m);break;case"YZY":s.set(p*x,f*_,p*v,f*m);break;case"ZXZ":s.set(p*v,p*x,f*_,f*m);break;case"XZX":s.set(f*_,p*T,p*y,f*m);break;case"YXY":s.set(p*y,f*_,p*T,f*m);break;case"ZYZ":s.set(p*T,p*y,f*_,f*m);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Ns(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function xn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Jv={DEG2RAD:ko,RAD2DEG:Vo,generateUUID:Ks,clamp:yn,euclideanModulo:Vf,mapLinear:Ov,inverseLerp:kv,lerp:Bo,damp:Bv,pingpong:zv,smoothstep:Hv,smootherstep:Vv,randInt:Gv,randFloat:Wv,randFloatSpread:Xv,seededRandom:Yv,degToRad:jv,radToDeg:qv,isPowerOfTwo:$v,ceilPowerOfTwo:Kv,floorPowerOfTwo:Zv,setQuaternionFromProperEuler:Qv,normalize:xn,denormalize:Ns};class Ct{constructor(e=0,n=0){Ct.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(yn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),u=this.x-e.x,d=this.y-e.y;return this.x=u*r-d*a+e.x,this.y=u*a+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ut{constructor(e,n,r,a,u,d,f,p,m){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,d,f,p,m)}set(e,n,r,a,u,d,f,p,m){const _=this.elements;return _[0]=e,_[1]=a,_[2]=f,_[3]=n,_[4]=u,_[5]=p,_[6]=r,_[7]=d,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,d=r[0],f=r[3],p=r[6],m=r[1],_=r[4],v=r[7],x=r[2],y=r[5],T=r[8],A=a[0],S=a[3],g=a[6],D=a[1],U=a[4],C=a[7],$=a[2],z=a[5],N=a[8];return u[0]=d*A+f*D+p*$,u[3]=d*S+f*U+p*z,u[6]=d*g+f*C+p*N,u[1]=m*A+_*D+v*$,u[4]=m*S+_*U+v*z,u[7]=m*g+_*C+v*N,u[2]=x*A+y*D+T*$,u[5]=x*S+y*U+T*z,u[8]=x*g+y*C+T*N,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],d=e[4],f=e[5],p=e[6],m=e[7],_=e[8];return n*d*_-n*f*m-r*u*_+r*f*p+a*u*m-a*d*p}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],d=e[4],f=e[5],p=e[6],m=e[7],_=e[8],v=_*d-f*m,x=f*p-_*u,y=m*u-d*p,T=n*v+r*x+a*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=v*A,e[1]=(a*m-_*r)*A,e[2]=(f*r-a*d)*A,e[3]=x*A,e[4]=(_*n-a*p)*A,e[5]=(a*u-f*n)*A,e[6]=y*A,e[7]=(r*p-m*n)*A,e[8]=(d*n-r*u)*A,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,u,d,f){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*d+m*f)+d+e,-a*m,a*p,-a*(-m*d+p*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(vc.makeScale(e,n)),this}rotate(e){return this.premultiply(vc.makeRotation(-e)),this}translate(e,n){return this.premultiply(vc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const vc=new ut;function Gm(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function bl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function e0(){const s=bl("canvas");return s.style.display="block",s}const Dp={};function Fo(s){s in Dp||(Dp[s]=!0,console.warn(s))}function t0(s,e,n){return new Promise(function(r,a){function u(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:r()}}setTimeout(u,n)})}function n0(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function i0(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const vt={enabled:!0,workingColorSpace:qs,spaces:{},convert:function(s,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===bt&&(s.r=zi(s.r),s.g=zi(s.g),s.b=zi(s.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===bt&&(s.r=zs(s.r),s.g=zs(s.g),s.b=zs(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===mr?Dl:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,n){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function zi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function zs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Up=[.64,.33,.3,.6,.15,.06],Ip=[.2126,.7152,.0722],Np=[.3127,.329],Fp=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Op=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);vt.define({[qs]:{primaries:Up,whitePoint:Np,transfer:Dl,toXYZ:Fp,fromXYZ:Op,luminanceCoefficients:Ip,workingColorSpaceConfig:{unpackColorSpace:jn},outputColorSpaceConfig:{drawingBufferColorSpace:jn}},[jn]:{primaries:Up,whitePoint:Np,transfer:bt,toXYZ:Fp,fromXYZ:Op,luminanceCoefficients:Ip,outputColorSpaceConfig:{drawingBufferColorSpace:jn}}});let Ms;class r0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ms===void 0&&(Ms=bl("canvas")),Ms.width=e.width,Ms.height=e.height;const r=Ms.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ms}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=bl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),u=a.data;for(let d=0;d<u.length;d++)u[d]=zi(u[d]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(zi(n[r]/255)*255):n[r]=zi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let s0=0;class Wm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:s0++}),this.uuid=Ks(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let u;if(Array.isArray(a)){u=[];for(let d=0,f=a.length;d<f;d++)a[d].isDataTexture?u.push(xc(a[d].image)):u.push(xc(a[d]))}else u=xc(a);r.url=u}return n||(e.images[this.uuid]=r),r}}function xc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?r0.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let o0=0;class Ln extends $s{constructor(e=Ln.DEFAULT_IMAGE,n=Ln.DEFAULT_MAPPING,r=Xr,a=Xr,u=_i,d=Yr,f=li,p=Hi,m=Ln.DEFAULT_ANISOTROPY,_=mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=Ks(),this.name="",this.source=new Wm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=u,this.minFilter=d,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=p,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rf:e.x=e.x-Math.floor(e.x);break;case Xr:e.x=e.x<0?0:1;break;case sf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rf:e.y=e.y-Math.floor(e.y);break;case Xr:e.y=e.y<0?0:1;break;case sf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=bm;Ln.DEFAULT_ANISOTROPY=1;class zt{constructor(e=0,n=0,r=0,a=1){zt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=this.w,d=e.elements;return this.x=d[0]*n+d[4]*r+d[8]*a+d[12]*u,this.y=d[1]*n+d[5]*r+d[9]*a+d[13]*u,this.z=d[2]*n+d[6]*r+d[10]*a+d[14]*u,this.w=d[3]*n+d[7]*r+d[11]*a+d[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,u;const p=e.elements,m=p[0],_=p[4],v=p[8],x=p[1],y=p[5],T=p[9],A=p[2],S=p[6],g=p[10];if(Math.abs(_-x)<.01&&Math.abs(v-A)<.01&&Math.abs(T-S)<.01){if(Math.abs(_+x)<.1&&Math.abs(v+A)<.1&&Math.abs(T+S)<.1&&Math.abs(m+y+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const U=(m+1)/2,C=(y+1)/2,$=(g+1)/2,z=(_+x)/4,N=(v+A)/4,X=(T+S)/4;return U>C&&U>$?U<.01?(r=0,a=.707106781,u=.707106781):(r=Math.sqrt(U),a=z/r,u=N/r):C>$?C<.01?(r=.707106781,a=0,u=.707106781):(a=Math.sqrt(C),r=z/a,u=X/a):$<.01?(r=.707106781,a=.707106781,u=0):(u=Math.sqrt($),r=N/u,a=X/u),this.set(r,a,u,n),this}let D=Math.sqrt((S-T)*(S-T)+(v-A)*(v-A)+(x-_)*(x-_));return Math.abs(D)<.001&&(D=1),this.x=(S-T)/D,this.y=(v-A)/D,this.z=(x-_)/D,this.w=Math.acos((m+y+g-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class a0 extends $s{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new zt(0,0,e,n),this.scissorTest=!1,this.viewport=new zt(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_i,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new Ln(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const d=r.count;for(let f=0;f<d;f++)this.textures[f]=u.clone(),this.textures[f].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,u=this.textures.length;a<u;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Wm(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $r extends a0{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Xm extends Ln{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=ui,this.minFilter=ui,this.wrapR=Xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class l0 extends Ln{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=ui,this.minFilter=ui,this.wrapR=Xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wo{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,u,d,f){let p=r[a+0],m=r[a+1],_=r[a+2],v=r[a+3];const x=u[d+0],y=u[d+1],T=u[d+2],A=u[d+3];if(f===0){e[n+0]=p,e[n+1]=m,e[n+2]=_,e[n+3]=v;return}if(f===1){e[n+0]=x,e[n+1]=y,e[n+2]=T,e[n+3]=A;return}if(v!==A||p!==x||m!==y||_!==T){let S=1-f;const g=p*x+m*y+_*T+v*A,D=g>=0?1:-1,U=1-g*g;if(U>Number.EPSILON){const $=Math.sqrt(U),z=Math.atan2($,g*D);S=Math.sin(S*z)/$,f=Math.sin(f*z)/$}const C=f*D;if(p=p*S+x*C,m=m*S+y*C,_=_*S+T*C,v=v*S+A*C,S===1-f){const $=1/Math.sqrt(p*p+m*m+_*_+v*v);p*=$,m*=$,_*=$,v*=$}}e[n]=p,e[n+1]=m,e[n+2]=_,e[n+3]=v}static multiplyQuaternionsFlat(e,n,r,a,u,d){const f=r[a],p=r[a+1],m=r[a+2],_=r[a+3],v=u[d],x=u[d+1],y=u[d+2],T=u[d+3];return e[n]=f*T+_*v+p*y-m*x,e[n+1]=p*T+_*x+m*v-f*y,e[n+2]=m*T+_*y+f*x-p*v,e[n+3]=_*T-f*v-p*x-m*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,u=e._z,d=e._order,f=Math.cos,p=Math.sin,m=f(r/2),_=f(a/2),v=f(u/2),x=p(r/2),y=p(a/2),T=p(u/2);switch(d){case"XYZ":this._x=x*_*v+m*y*T,this._y=m*y*v-x*_*T,this._z=m*_*T+x*y*v,this._w=m*_*v-x*y*T;break;case"YXZ":this._x=x*_*v+m*y*T,this._y=m*y*v-x*_*T,this._z=m*_*T-x*y*v,this._w=m*_*v+x*y*T;break;case"ZXY":this._x=x*_*v-m*y*T,this._y=m*y*v+x*_*T,this._z=m*_*T+x*y*v,this._w=m*_*v-x*y*T;break;case"ZYX":this._x=x*_*v-m*y*T,this._y=m*y*v+x*_*T,this._z=m*_*T-x*y*v,this._w=m*_*v+x*y*T;break;case"YZX":this._x=x*_*v+m*y*T,this._y=m*y*v+x*_*T,this._z=m*_*T-x*y*v,this._w=m*_*v-x*y*T;break;case"XZY":this._x=x*_*v-m*y*T,this._y=m*y*v-x*_*T,this._z=m*_*T+x*y*v,this._w=m*_*v+x*y*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],u=n[8],d=n[1],f=n[5],p=n[9],m=n[2],_=n[6],v=n[10],x=r+f+v;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(_-p)*y,this._y=(u-m)*y,this._z=(d-a)*y}else if(r>f&&r>v){const y=2*Math.sqrt(1+r-f-v);this._w=(_-p)/y,this._x=.25*y,this._y=(a+d)/y,this._z=(u+m)/y}else if(f>v){const y=2*Math.sqrt(1+f-r-v);this._w=(u-m)/y,this._x=(a+d)/y,this._y=.25*y,this._z=(p+_)/y}else{const y=2*Math.sqrt(1+v-r-f);this._w=(d-a)/y,this._x=(u+m)/y,this._y=(p+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,u=e._z,d=e._w,f=n._x,p=n._y,m=n._z,_=n._w;return this._x=r*_+d*f+a*m-u*p,this._y=a*_+d*p+u*f-r*m,this._z=u*_+d*m+r*p-a*f,this._w=d*_-r*f-a*p-u*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,u=this._z,d=this._w;let f=d*e._w+r*e._x+a*e._y+u*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=d,this._x=r,this._y=a,this._z=u,this;const p=1-f*f;if(p<=Number.EPSILON){const y=1-n;return this._w=y*d+n*this._w,this._x=y*r+n*this._x,this._y=y*a+n*this._y,this._z=y*u+n*this._z,this.normalize(),this}const m=Math.sqrt(p),_=Math.atan2(m,f),v=Math.sin((1-n)*_)/m,x=Math.sin(n*_)/m;return this._w=d*v+this._w*x,this._x=r*v+this._x*x,this._y=a*v+this._y*x,this._z=u*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),u*Math.sin(n),u*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ne{constructor(e=0,n=0,r=0){ne.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(kp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(kp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[3]*r+u[6]*a,this.y=u[1]*n+u[4]*r+u[7]*a,this.z=u[2]*n+u[5]*r+u[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=e.elements,d=1/(u[3]*n+u[7]*r+u[11]*a+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*a+u[12])*d,this.y=(u[1]*n+u[5]*r+u[9]*a+u[13])*d,this.z=(u[2]*n+u[6]*r+u[10]*a+u[14])*d,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,u=e.x,d=e.y,f=e.z,p=e.w,m=2*(d*a-f*r),_=2*(f*n-u*a),v=2*(u*r-d*n);return this.x=n+p*m+d*v-f*_,this.y=r+p*_+f*m-u*v,this.z=a+p*v+u*_-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a,this.y=u[1]*n+u[5]*r+u[9]*a,this.z=u[2]*n+u[6]*r+u[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,u=e.z,d=n.x,f=n.y,p=n.z;return this.x=a*p-u*f,this.y=u*d-r*p,this.z=r*f-a*d,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Sc.copy(this).projectOnVector(e),this.sub(Sc)}reflect(e){return this.sub(Sc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(yn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sc=new ne,kp=new Wo;class Xo{constructor(e=new ne(1/0,1/0,1/0),n=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ri.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ri.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ri.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let d=0,f=u.count;d<f;d++)e.isMesh===!0?e.getVertexPosition(d,ri):ri.fromBufferAttribute(u,d),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),tl.copy(r.boundingBox)),tl.applyMatrix4(e.matrixWorld),this.union(tl)}const a=e.children;for(let u=0,d=a.length;u<d;u++)this.expandByObject(a[u],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Lo),nl.subVectors(this.max,Lo),Es.subVectors(e.a,Lo),Ts.subVectors(e.b,Lo),ws.subVectors(e.c,Lo),ur.subVectors(Ts,Es),cr.subVectors(ws,Ts),Ir.subVectors(Es,ws);let n=[0,-ur.z,ur.y,0,-cr.z,cr.y,0,-Ir.z,Ir.y,ur.z,0,-ur.x,cr.z,0,-cr.x,Ir.z,0,-Ir.x,-ur.y,ur.x,0,-cr.y,cr.x,0,-Ir.y,Ir.x,0];return!yc(n,Es,Ts,ws,nl)||(n=[1,0,0,0,1,0,0,0,1],!yc(n,Es,Ts,ws,nl))?!1:(il.crossVectors(ur,cr),n=[il.x,il.y,il.z],yc(n,Es,Ts,ws,nl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Li=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],ri=new ne,tl=new Xo,Es=new ne,Ts=new ne,ws=new ne,ur=new ne,cr=new ne,Ir=new ne,Lo=new ne,nl=new ne,il=new ne,Nr=new ne;function yc(s,e,n,r,a){for(let u=0,d=s.length-3;u<=d;u+=3){Nr.fromArray(s,u);const f=a.x*Math.abs(Nr.x)+a.y*Math.abs(Nr.y)+a.z*Math.abs(Nr.z),p=e.dot(Nr),m=n.dot(Nr),_=r.dot(Nr);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>f)return!1}return!0}const u0=new Xo,Do=new ne,Mc=new ne;class Gf{constructor(e=new ne,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):u0.setFromPoints(e).getCenter(r);let a=0;for(let u=0,d=e.length;u<d;u++)a=Math.max(a,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Do.subVectors(e,this.center);const n=Do.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Do,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Do.copy(e.center).add(Mc)),this.expandByPoint(Do.copy(e.center).sub(Mc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Di=new ne,Ec=new ne,rl=new ne,fr=new ne,Tc=new ne,sl=new ne,wc=new ne;class c0{constructor(e=new ne,n=new ne(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Di)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Di.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Di.copy(this.origin).addScaledVector(this.direction,n),Di.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Ec.copy(e).add(n).multiplyScalar(.5),rl.copy(n).sub(e).normalize(),fr.copy(this.origin).sub(Ec);const u=e.distanceTo(n)*.5,d=-this.direction.dot(rl),f=fr.dot(this.direction),p=-fr.dot(rl),m=fr.lengthSq(),_=Math.abs(1-d*d);let v,x,y,T;if(_>0)if(v=d*p-f,x=d*f-p,T=u*_,v>=0)if(x>=-T)if(x<=T){const A=1/_;v*=A,x*=A,y=v*(v+d*x+2*f)+x*(d*v+x+2*p)+m}else x=u,v=Math.max(0,-(d*x+f)),y=-v*v+x*(x+2*p)+m;else x=-u,v=Math.max(0,-(d*x+f)),y=-v*v+x*(x+2*p)+m;else x<=-T?(v=Math.max(0,-(-d*u+f)),x=v>0?-u:Math.min(Math.max(-u,-p),u),y=-v*v+x*(x+2*p)+m):x<=T?(v=0,x=Math.min(Math.max(-u,-p),u),y=x*(x+2*p)+m):(v=Math.max(0,-(d*u+f)),x=v>0?u:Math.min(Math.max(-u,-p),u),y=-v*v+x*(x+2*p)+m);else x=d>0?-u:u,v=Math.max(0,-(d*x+f)),y=-v*v+x*(x+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(Ec).addScaledVector(rl,x),y}intersectSphere(e,n){Di.subVectors(e.center,this.origin);const r=Di.dot(this.direction),a=Di.dot(Di)-r*r,u=e.radius*e.radius;if(a>u)return null;const d=Math.sqrt(u-a),f=r-d,p=r+d;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,u,d,f,p;const m=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,a=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,a=(e.min.x-x.x)*m),_>=0?(u=(e.min.y-x.y)*_,d=(e.max.y-x.y)*_):(u=(e.max.y-x.y)*_,d=(e.min.y-x.y)*_),r>d||u>a||((u>r||isNaN(r))&&(r=u),(d<a||isNaN(a))&&(a=d),v>=0?(f=(e.min.z-x.z)*v,p=(e.max.z-x.z)*v):(f=(e.max.z-x.z)*v,p=(e.min.z-x.z)*v),r>p||f>a)||((f>r||r!==r)&&(r=f),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Di)!==null}intersectTriangle(e,n,r,a,u){Tc.subVectors(n,e),sl.subVectors(r,e),wc.crossVectors(Tc,sl);let d=this.direction.dot(wc),f;if(d>0){if(a)return null;f=1}else if(d<0)f=-1,d=-d;else return null;fr.subVectors(this.origin,e);const p=f*this.direction.dot(sl.crossVectors(fr,sl));if(p<0)return null;const m=f*this.direction.dot(Tc.cross(fr));if(m<0||p+m>d)return null;const _=-f*fr.dot(wc);return _<0?null:this.at(_/d,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ht{constructor(e,n,r,a,u,d,f,p,m,_,v,x,y,T,A,S){Ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,d,f,p,m,_,v,x,y,T,A,S)}set(e,n,r,a,u,d,f,p,m,_,v,x,y,T,A,S){const g=this.elements;return g[0]=e,g[4]=n,g[8]=r,g[12]=a,g[1]=u,g[5]=d,g[9]=f,g[13]=p,g[2]=m,g[6]=_,g[10]=v,g[14]=x,g[3]=y,g[7]=T,g[11]=A,g[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ht().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/As.setFromMatrixColumn(e,0).length(),u=1/As.setFromMatrixColumn(e,1).length(),d=1/As.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*d,n[9]=r[9]*d,n[10]=r[10]*d,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,u=e.z,d=Math.cos(r),f=Math.sin(r),p=Math.cos(a),m=Math.sin(a),_=Math.cos(u),v=Math.sin(u);if(e.order==="XYZ"){const x=d*_,y=d*v,T=f*_,A=f*v;n[0]=p*_,n[4]=-p*v,n[8]=m,n[1]=y+T*m,n[5]=x-A*m,n[9]=-f*p,n[2]=A-x*m,n[6]=T+y*m,n[10]=d*p}else if(e.order==="YXZ"){const x=p*_,y=p*v,T=m*_,A=m*v;n[0]=x+A*f,n[4]=T*f-y,n[8]=d*m,n[1]=d*v,n[5]=d*_,n[9]=-f,n[2]=y*f-T,n[6]=A+x*f,n[10]=d*p}else if(e.order==="ZXY"){const x=p*_,y=p*v,T=m*_,A=m*v;n[0]=x-A*f,n[4]=-d*v,n[8]=T+y*f,n[1]=y+T*f,n[5]=d*_,n[9]=A-x*f,n[2]=-d*m,n[6]=f,n[10]=d*p}else if(e.order==="ZYX"){const x=d*_,y=d*v,T=f*_,A=f*v;n[0]=p*_,n[4]=T*m-y,n[8]=x*m+A,n[1]=p*v,n[5]=A*m+x,n[9]=y*m-T,n[2]=-m,n[6]=f*p,n[10]=d*p}else if(e.order==="YZX"){const x=d*p,y=d*m,T=f*p,A=f*m;n[0]=p*_,n[4]=A-x*v,n[8]=T*v+y,n[1]=v,n[5]=d*_,n[9]=-f*_,n[2]=-m*_,n[6]=y*v+T,n[10]=x-A*v}else if(e.order==="XZY"){const x=d*p,y=d*m,T=f*p,A=f*m;n[0]=p*_,n[4]=-v,n[8]=m*_,n[1]=x*v+A,n[5]=d*_,n[9]=y*v-T,n[2]=T*v-y,n[6]=f*_,n[10]=A*v+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(f0,e,d0)}lookAt(e,n,r){const a=this.elements;return Fn.subVectors(e,n),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),dr.crossVectors(r,Fn),dr.lengthSq()===0&&(Math.abs(r.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),dr.crossVectors(r,Fn)),dr.normalize(),ol.crossVectors(Fn,dr),a[0]=dr.x,a[4]=ol.x,a[8]=Fn.x,a[1]=dr.y,a[5]=ol.y,a[9]=Fn.y,a[2]=dr.z,a[6]=ol.z,a[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,d=r[0],f=r[4],p=r[8],m=r[12],_=r[1],v=r[5],x=r[9],y=r[13],T=r[2],A=r[6],S=r[10],g=r[14],D=r[3],U=r[7],C=r[11],$=r[15],z=a[0],N=a[4],X=a[8],P=a[12],R=a[1],k=a[5],ue=a[9],Q=a[13],de=a[2],he=a[6],ie=a[10],ce=a[14],O=a[3],ae=a[7],oe=a[11],I=a[15];return u[0]=d*z+f*R+p*de+m*O,u[4]=d*N+f*k+p*he+m*ae,u[8]=d*X+f*ue+p*ie+m*oe,u[12]=d*P+f*Q+p*ce+m*I,u[1]=_*z+v*R+x*de+y*O,u[5]=_*N+v*k+x*he+y*ae,u[9]=_*X+v*ue+x*ie+y*oe,u[13]=_*P+v*Q+x*ce+y*I,u[2]=T*z+A*R+S*de+g*O,u[6]=T*N+A*k+S*he+g*ae,u[10]=T*X+A*ue+S*ie+g*oe,u[14]=T*P+A*Q+S*ce+g*I,u[3]=D*z+U*R+C*de+$*O,u[7]=D*N+U*k+C*he+$*ae,u[11]=D*X+U*ue+C*ie+$*oe,u[15]=D*P+U*Q+C*ce+$*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],u=e[12],d=e[1],f=e[5],p=e[9],m=e[13],_=e[2],v=e[6],x=e[10],y=e[14],T=e[3],A=e[7],S=e[11],g=e[15];return T*(+u*p*v-a*m*v-u*f*x+r*m*x+a*f*y-r*p*y)+A*(+n*p*y-n*m*x+u*d*x-a*d*y+a*m*_-u*p*_)+S*(+n*m*v-n*f*y-u*d*v+r*d*y+u*f*_-r*m*_)+g*(-a*f*_-n*p*v+n*f*x+a*d*v-r*d*x+r*p*_)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],d=e[4],f=e[5],p=e[6],m=e[7],_=e[8],v=e[9],x=e[10],y=e[11],T=e[12],A=e[13],S=e[14],g=e[15],D=v*S*m-A*x*m+A*p*y-f*S*y-v*p*g+f*x*g,U=T*x*m-_*S*m-T*p*y+d*S*y+_*p*g-d*x*g,C=_*A*m-T*v*m+T*f*y-d*A*y-_*f*g+d*v*g,$=T*v*p-_*A*p-T*f*x+d*A*x+_*f*S-d*v*S,z=n*D+r*U+a*C+u*$;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/z;return e[0]=D*N,e[1]=(A*x*u-v*S*u-A*a*y+r*S*y+v*a*g-r*x*g)*N,e[2]=(f*S*u-A*p*u+A*a*m-r*S*m-f*a*g+r*p*g)*N,e[3]=(v*p*u-f*x*u-v*a*m+r*x*m+f*a*y-r*p*y)*N,e[4]=U*N,e[5]=(_*S*u-T*x*u+T*a*y-n*S*y-_*a*g+n*x*g)*N,e[6]=(T*p*u-d*S*u-T*a*m+n*S*m+d*a*g-n*p*g)*N,e[7]=(d*x*u-_*p*u+_*a*m-n*x*m-d*a*y+n*p*y)*N,e[8]=C*N,e[9]=(T*v*u-_*A*u-T*r*y+n*A*y+_*r*g-n*v*g)*N,e[10]=(d*A*u-T*f*u+T*r*m-n*A*m-d*r*g+n*f*g)*N,e[11]=(_*f*u-d*v*u-_*r*m+n*v*m+d*r*y-n*f*y)*N,e[12]=$*N,e[13]=(_*A*a-T*v*a+T*r*x-n*A*x-_*r*S+n*v*S)*N,e[14]=(T*f*a-d*A*a-T*r*p+n*A*p+d*r*S-n*f*S)*N,e[15]=(d*v*a-_*f*a+_*r*p-n*v*p-d*r*x+n*f*x)*N,this}scale(e){const n=this.elements,r=e.x,a=e.y,u=e.z;return n[0]*=r,n[4]*=a,n[8]*=u,n[1]*=r,n[5]*=a,n[9]*=u,n[2]*=r,n[6]*=a,n[10]*=u,n[3]*=r,n[7]*=a,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),u=1-r,d=e.x,f=e.y,p=e.z,m=u*d,_=u*f;return this.set(m*d+r,m*f-a*p,m*p+a*f,0,m*f+a*p,_*f+r,_*p-a*d,0,m*p-a*f,_*p+a*d,u*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,u,d){return this.set(1,r,u,0,e,1,d,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,u=n._x,d=n._y,f=n._z,p=n._w,m=u+u,_=d+d,v=f+f,x=u*m,y=u*_,T=u*v,A=d*_,S=d*v,g=f*v,D=p*m,U=p*_,C=p*v,$=r.x,z=r.y,N=r.z;return a[0]=(1-(A+g))*$,a[1]=(y+C)*$,a[2]=(T-U)*$,a[3]=0,a[4]=(y-C)*z,a[5]=(1-(x+g))*z,a[6]=(S+D)*z,a[7]=0,a[8]=(T+U)*N,a[9]=(S-D)*N,a[10]=(1-(x+A))*N,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let u=As.set(a[0],a[1],a[2]).length();const d=As.set(a[4],a[5],a[6]).length(),f=As.set(a[8],a[9],a[10]).length();this.determinant()<0&&(u=-u),e.x=a[12],e.y=a[13],e.z=a[14],si.copy(this);const m=1/u,_=1/d,v=1/f;return si.elements[0]*=m,si.elements[1]*=m,si.elements[2]*=m,si.elements[4]*=_,si.elements[5]*=_,si.elements[6]*=_,si.elements[8]*=v,si.elements[9]*=v,si.elements[10]*=v,n.setFromRotationMatrix(si),r.x=u,r.y=d,r.z=f,this}makePerspective(e,n,r,a,u,d,f=Bi){const p=this.elements,m=2*u/(n-e),_=2*u/(r-a),v=(n+e)/(n-e),x=(r+a)/(r-a);let y,T;if(f===Bi)y=-(d+u)/(d-u),T=-2*d*u/(d-u);else if(f===Pl)y=-d/(d-u),T=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=m,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=_,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=y,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,a,u,d,f=Bi){const p=this.elements,m=1/(n-e),_=1/(r-a),v=1/(d-u),x=(n+e)*m,y=(r+a)*_;let T,A;if(f===Bi)T=(d+u)*v,A=-2*v;else if(f===Pl)T=u*v,A=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*_,p[9]=0,p[13]=-y,p[2]=0,p[6]=0,p[10]=A,p[14]=-T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const As=new ne,si=new Ht,f0=new ne(0,0,0),d0=new ne(1,1,1),dr=new ne,ol=new ne,Fn=new ne,Bp=new Ht,zp=new Wo;class xi{constructor(e=0,n=0,r=0,a=xi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,u=a[0],d=a[4],f=a[8],p=a[1],m=a[5],_=a[9],v=a[2],x=a[6],y=a[10];switch(n){case"XYZ":this._y=Math.asin(yn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-yn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(yn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-yn(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(yn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-yn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(f,u)):(this._x=Math.atan2(-_,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Bp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return zp.setFromEuler(this),this.setFromQuaternion(zp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xi.DEFAULT_ORDER="XYZ";class Ym{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let h0=0;const Hp=new ne,Rs=new Wo,Ui=new Ht,al=new ne,Uo=new ne,p0=new ne,m0=new Wo,Vp=new ne(1,0,0),Gp=new ne(0,1,0),Wp=new ne(0,0,1),Xp={type:"added"},g0={type:"removed"},Cs={type:"childadded",child:null},Ac={type:"childremoved",child:null};class pn extends $s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=Ks(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pn.DEFAULT_UP.clone();const e=new ne,n=new xi,r=new Wo,a=new ne(1,1,1);function u(){r.setFromEuler(n,!1)}function d(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ht},normalMatrix:{value:new ut}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ym,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Rs.setFromAxisAngle(e,n),this.quaternion.multiply(Rs),this}rotateOnWorldAxis(e,n){return Rs.setFromAxisAngle(e,n),this.quaternion.premultiply(Rs),this}rotateX(e){return this.rotateOnAxis(Vp,e)}rotateY(e){return this.rotateOnAxis(Gp,e)}rotateZ(e){return this.rotateOnAxis(Wp,e)}translateOnAxis(e,n){return Hp.copy(e).applyQuaternion(this.quaternion),this.position.add(Hp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Vp,e)}translateY(e){return this.translateOnAxis(Gp,e)}translateZ(e){return this.translateOnAxis(Wp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?al.copy(e):al.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(Uo,al,this.up):Ui.lookAt(al,Uo,this.up),this.quaternion.setFromRotationMatrix(Ui),a&&(Ui.extractRotation(a.matrixWorld),Rs.setFromRotationMatrix(Ui),this.quaternion.premultiply(Rs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xp),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(g0),Ac.child=e,this.dispatchEvent(Ac),Ac.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xp),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const d=this.children[r].getObjectByProperty(e,n);if(d!==void 0)return d}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let u=0,d=a.length;u<d;u++)a[u].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,e,p0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,m0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let u=0,d=a.length;u<d;u++)a[u].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function u(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=u(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const v=p[m];u(e.shapes,v)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,m=this.material.length;p<m;p++)f.push(u(e.materials,this.material[p]));a.material=f}else a.material=u(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];a.animations.push(u(e.animations,p))}}if(n){const f=d(e.geometries),p=d(e.materials),m=d(e.textures),_=d(e.images),v=d(e.shapes),x=d(e.skeletons),y=d(e.animations),T=d(e.nodes);f.length>0&&(r.geometries=f),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),y.length>0&&(r.animations=y),T.length>0&&(r.nodes=T)}return r.object=a,r;function d(f){const p=[];for(const m in f){const _=f[m];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}pn.DEFAULT_UP=new ne(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const oi=new ne,Ii=new ne,Rc=new ne,Ni=new ne,Ps=new ne,bs=new ne,Yp=new ne,Cc=new ne,Pc=new ne,bc=new ne,Lc=new zt,Dc=new zt,Uc=new zt;class ai{constructor(e=new ne,n=new ne,r=new ne){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),oi.subVectors(e,n),a.cross(oi);const u=a.lengthSq();return u>0?a.multiplyScalar(1/Math.sqrt(u)):a.set(0,0,0)}static getBarycoord(e,n,r,a,u){oi.subVectors(a,n),Ii.subVectors(r,n),Rc.subVectors(e,n);const d=oi.dot(oi),f=oi.dot(Ii),p=oi.dot(Rc),m=Ii.dot(Ii),_=Ii.dot(Rc),v=d*m-f*f;if(v===0)return u.set(0,0,0),null;const x=1/v,y=(m*p-f*_)*x,T=(d*_-f*p)*x;return u.set(1-y-T,T,y)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(e,n,r,a,u,d,f,p){return this.getBarycoord(e,n,r,a,Ni)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Ni.x),p.addScaledVector(d,Ni.y),p.addScaledVector(f,Ni.z),p)}static getInterpolatedAttribute(e,n,r,a,u,d){return Lc.setScalar(0),Dc.setScalar(0),Uc.setScalar(0),Lc.fromBufferAttribute(e,n),Dc.fromBufferAttribute(e,r),Uc.fromBufferAttribute(e,a),d.setScalar(0),d.addScaledVector(Lc,u.x),d.addScaledVector(Dc,u.y),d.addScaledVector(Uc,u.z),d}static isFrontFacing(e,n,r,a){return oi.subVectors(r,n),Ii.subVectors(e,n),oi.cross(Ii).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),oi.cross(Ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ai.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,u){return ai.getInterpolation(e,this.a,this.b,this.c,n,r,a,u)}containsPoint(e){return ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,u=this.c;let d,f;Ps.subVectors(a,r),bs.subVectors(u,r),Cc.subVectors(e,r);const p=Ps.dot(Cc),m=bs.dot(Cc);if(p<=0&&m<=0)return n.copy(r);Pc.subVectors(e,a);const _=Ps.dot(Pc),v=bs.dot(Pc);if(_>=0&&v<=_)return n.copy(a);const x=p*v-_*m;if(x<=0&&p>=0&&_<=0)return d=p/(p-_),n.copy(r).addScaledVector(Ps,d);bc.subVectors(e,u);const y=Ps.dot(bc),T=bs.dot(bc);if(T>=0&&y<=T)return n.copy(u);const A=y*m-p*T;if(A<=0&&m>=0&&T<=0)return f=m/(m-T),n.copy(r).addScaledVector(bs,f);const S=_*T-y*v;if(S<=0&&v-_>=0&&y-T>=0)return Yp.subVectors(u,a),f=(v-_)/(v-_+(y-T)),n.copy(a).addScaledVector(Yp,f);const g=1/(S+A+x);return d=A*g,f=x*g,n.copy(r).addScaledVector(Ps,d).addScaledVector(bs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const jm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hr={h:0,s:0,l:0},ll={h:0,s:0,l:0};function Ic(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class xt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=vt.workingColorSpace){return this.r=e,this.g=n,this.b=r,vt.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=vt.workingColorSpace){if(e=Vf(e,1),n=yn(n,0,1),r=yn(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,d=2*r-u;this.r=Ic(d,u,e+1/3),this.g=Ic(d,u,e),this.b=Ic(d,u,e-1/3)}return vt.toWorkingColorSpace(this,a),this}setStyle(e,n=jn){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=a[1],f=a[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=a[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(d===6)return this.setHex(parseInt(u,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=jn){const r=jm[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}copyLinearToSRGB(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jn){return vt.fromWorkingColorSpace(hn.copy(this),e),Math.round(yn(hn.r*255,0,255))*65536+Math.round(yn(hn.g*255,0,255))*256+Math.round(yn(hn.b*255,0,255))}getHexString(e=jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=vt.workingColorSpace){vt.fromWorkingColorSpace(hn.copy(this),n);const r=hn.r,a=hn.g,u=hn.b,d=Math.max(r,a,u),f=Math.min(r,a,u);let p,m;const _=(f+d)/2;if(f===d)p=0,m=0;else{const v=d-f;switch(m=_<=.5?v/(d+f):v/(2-d-f),d){case r:p=(a-u)/v+(a<u?6:0);break;case a:p=(u-r)/v+2;break;case u:p=(r-a)/v+4;break}p/=6}return e.h=p,e.s=m,e.l=_,e}getRGB(e,n=vt.workingColorSpace){return vt.fromWorkingColorSpace(hn.copy(this),n),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=jn){vt.fromWorkingColorSpace(hn.copy(this),e);const n=hn.r,r=hn.g,a=hn.b;return e!==jn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(hr),this.setHSL(hr.h+e,hr.s+n,hr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(hr),e.getHSL(ll);const r=Bo(hr.h,ll.h,n),a=Bo(hr.s,ll.s,n),u=Bo(hr.l,ll.l,n);return this.setHSL(r,a,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,u=e.elements;return this.r=u[0]*n+u[3]*r+u[6]*a,this.g=u[1]*n+u[4]*r+u[7]*a,this.b=u[2]*n+u[5]*r+u[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new xt;xt.NAMES=jm;let _0=0;class Yo extends $s{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_0++}),this.uuid=Ks(),this.name="",this.blending=ks,this.side=vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yc,this.blendDst=jc,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ys,this.stencilZFail=ys,this.stencilZPass=ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ks&&(r.blending=this.blending),this.side!==vr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Yc&&(r.blendSrc=this.blendSrc),this.blendDst!==jc&&(r.blendDst=this.blendDst),this.blendEquation!==Gr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Hs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ys&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ys&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ys&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(u){const d=[];for(const f in u){const p=u[f];delete p.metadata,d.push(p)}return d}if(n){const u=a(e.textures),d=a(e.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let u=0;u!==a;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class zo extends Yo{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=Pm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xt=new ne,ul=new Ct;class vi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Pp,this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,u=this.itemSize;a<u;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)ul.fromBufferAttribute(this,n),ul.applyMatrix3(e),this.setXY(n,ul.x,ul.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Xt.fromBufferAttribute(this,n),Xt.applyMatrix3(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Xt.fromBufferAttribute(this,n),Xt.applyMatrix4(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Xt.fromBufferAttribute(this,n),Xt.applyNormalMatrix(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Xt.fromBufferAttribute(this,n),Xt.transformDirection(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Ns(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=xn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ns(n,this.array)),n}setX(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ns(n,this.array)),n}setY(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ns(n,this.array)),n}setZ(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ns(n,this.array)),n}setW(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=xn(n,this.array),r=xn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=xn(n,this.array),r=xn(r,this.array),a=xn(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,u){return e*=this.itemSize,this.normalized&&(n=xn(n,this.array),r=xn(r,this.array),a=xn(a,this.array),u=xn(u,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pp&&(e.usage=this.usage),e}}class qm extends vi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class $m extends vi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class jr extends vi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let v0=0;const Yn=new Ht,Nc=new pn,Ls=new ne,On=new Xo,Io=new Xo,tn=new ne;class Kr extends $s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:v0++}),this.uuid=Ks(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gm(e)?$m:qm)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ut().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yn.makeRotationFromQuaternion(e),this.applyMatrix4(Yn),this}rotateX(e){return Yn.makeRotationX(e),this.applyMatrix4(Yn),this}rotateY(e){return Yn.makeRotationY(e),this.applyMatrix4(Yn),this}rotateZ(e){return Yn.makeRotationZ(e),this.applyMatrix4(Yn),this}translate(e,n,r){return Yn.makeTranslation(e,n,r),this.applyMatrix4(Yn),this}scale(e,n,r){return Yn.makeScale(e,n,r),this.applyMatrix4(Yn),this}lookAt(e){return Nc.lookAt(e),Nc.updateMatrix(),this.applyMatrix4(Nc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ls).negate(),this.translate(Ls.x,Ls.y,Ls.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,u=e.length;a<u;a++){const d=e[a];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new jr(r,3))}else{for(let r=0,a=n.count;r<a;r++){const u=e[r];n.setXYZ(r,u.x,u.y,u.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const u=n[r];On.setFromBufferAttribute(u),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ne,1/0);return}if(e){const r=this.boundingSphere.center;if(On.setFromBufferAttribute(e),n)for(let u=0,d=n.length;u<d;u++){const f=n[u];Io.setFromBufferAttribute(f),this.morphTargetsRelative?(tn.addVectors(On.min,Io.min),On.expandByPoint(tn),tn.addVectors(On.max,Io.max),On.expandByPoint(tn)):(On.expandByPoint(Io.min),On.expandByPoint(Io.max))}On.getCenter(r);let a=0;for(let u=0,d=e.count;u<d;u++)tn.fromBufferAttribute(e,u),a=Math.max(a,r.distanceToSquared(tn));if(n)for(let u=0,d=n.length;u<d;u++){const f=n[u],p=this.morphTargetsRelative;for(let m=0,_=f.count;m<_;m++)tn.fromBufferAttribute(f,m),p&&(Ls.fromBufferAttribute(e,m),tn.add(Ls)),a=Math.max(a,r.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vi(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),f=[],p=[];for(let X=0;X<r.count;X++)f[X]=new ne,p[X]=new ne;const m=new ne,_=new ne,v=new ne,x=new Ct,y=new Ct,T=new Ct,A=new ne,S=new ne;function g(X,P,R){m.fromBufferAttribute(r,X),_.fromBufferAttribute(r,P),v.fromBufferAttribute(r,R),x.fromBufferAttribute(u,X),y.fromBufferAttribute(u,P),T.fromBufferAttribute(u,R),_.sub(m),v.sub(m),y.sub(x),T.sub(x);const k=1/(y.x*T.y-T.x*y.y);isFinite(k)&&(A.copy(_).multiplyScalar(T.y).addScaledVector(v,-y.y).multiplyScalar(k),S.copy(v).multiplyScalar(y.x).addScaledVector(_,-T.x).multiplyScalar(k),f[X].add(A),f[P].add(A),f[R].add(A),p[X].add(S),p[P].add(S),p[R].add(S))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let X=0,P=D.length;X<P;++X){const R=D[X],k=R.start,ue=R.count;for(let Q=k,de=k+ue;Q<de;Q+=3)g(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const U=new ne,C=new ne,$=new ne,z=new ne;function N(X){$.fromBufferAttribute(a,X),z.copy($);const P=f[X];U.copy(P),U.sub($.multiplyScalar($.dot(P))).normalize(),C.crossVectors(z,P);const k=C.dot(p[X])<0?-1:1;d.setXYZW(X,U.x,U.y,U.z,k)}for(let X=0,P=D.length;X<P;++X){const R=D[X],k=R.start,ue=R.count;for(let Q=k,de=k+ue;Q<de;Q+=3)N(e.getX(Q+0)),N(e.getX(Q+1)),N(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new vi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,y=r.count;x<y;x++)r.setXYZ(x,0,0,0);const a=new ne,u=new ne,d=new ne,f=new ne,p=new ne,m=new ne,_=new ne,v=new ne;if(e)for(let x=0,y=e.count;x<y;x+=3){const T=e.getX(x+0),A=e.getX(x+1),S=e.getX(x+2);a.fromBufferAttribute(n,T),u.fromBufferAttribute(n,A),d.fromBufferAttribute(n,S),_.subVectors(d,u),v.subVectors(a,u),_.cross(v),f.fromBufferAttribute(r,T),p.fromBufferAttribute(r,A),m.fromBufferAttribute(r,S),f.add(_),p.add(_),m.add(_),r.setXYZ(T,f.x,f.y,f.z),r.setXYZ(A,p.x,p.y,p.z),r.setXYZ(S,m.x,m.y,m.z)}else for(let x=0,y=n.count;x<y;x+=3)a.fromBufferAttribute(n,x+0),u.fromBufferAttribute(n,x+1),d.fromBufferAttribute(n,x+2),_.subVectors(d,u),v.subVectors(a,u),_.cross(v),r.setXYZ(x+0,_.x,_.y,_.z),r.setXYZ(x+1,_.x,_.y,_.z),r.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)tn.fromBufferAttribute(e,n),tn.normalize(),e.setXYZ(n,tn.x,tn.y,tn.z)}toNonIndexed(){function e(f,p){const m=f.array,_=f.itemSize,v=f.normalized,x=new m.constructor(p.length*_);let y=0,T=0;for(let A=0,S=p.length;A<S;A++){f.isInterleavedBufferAttribute?y=p[A]*f.data.stride+f.offset:y=p[A]*_;for(let g=0;g<_;g++)x[T++]=m[y++]}return new vi(x,_,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Kr,r=this.index.array,a=this.attributes;for(const f in a){const p=a[f],m=e(p,r);n.setAttribute(f,m)}const u=this.morphAttributes;for(const f in u){const p=[],m=u[f];for(let _=0,v=m.length;_<v;_++){const x=m[_],y=e(x,r);p.push(y)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let f=0,p=d.length;f<p;f++){const m=d[f];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const a={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let v=0,x=m.length;v<x;v++){const y=m[v];_.push(y.toJSON(e.data))}_.length>0&&(a[p]=_,u=!0)}u&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const _=a[m];this.setAttribute(m,_.clone(n))}const u=e.morphAttributes;for(const m in u){const _=[],v=u[m];for(let x=0,y=v.length;x<y;x++)_.push(v[x].clone(n));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,_=d.length;m<_;m++){const v=d[m];this.addGroup(v.start,v.count,v.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jp=new Ht,Fr=new c0,cl=new Gf,qp=new ne,fl=new ne,dl=new ne,hl=new ne,Fc=new ne,pl=new ne,$p=new ne,ml=new ne;class Gt extends pn{constructor(e=new Kr,n=new zo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=a.length;u<d;u++){const f=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=u}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(u&&f){pl.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const _=f[p],v=u[p];_!==0&&(Fc.fromBufferAttribute(v,e),d?pl.addScaledVector(Fc,_):pl.addScaledVector(Fc.sub(n),_))}n.add(pl)}return n}raycast(e,n){const r=this.geometry,a=this.material,u=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),cl.copy(r.boundingSphere),cl.applyMatrix4(u),Fr.copy(e.ray).recast(e.near),!(cl.containsPoint(Fr.origin)===!1&&(Fr.intersectSphere(cl,qp)===null||Fr.origin.distanceToSquared(qp)>(e.far-e.near)**2))&&(jp.copy(u).invert(),Fr.copy(e.ray).applyMatrix4(jp),!(r.boundingBox!==null&&Fr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Fr)))}_computeIntersections(e,n,r){let a;const u=this.geometry,d=this.material,f=u.index,p=u.attributes.position,m=u.attributes.uv,_=u.attributes.uv1,v=u.attributes.normal,x=u.groups,y=u.drawRange;if(f!==null)if(Array.isArray(d))for(let T=0,A=x.length;T<A;T++){const S=x[T],g=d[S.materialIndex],D=Math.max(S.start,y.start),U=Math.min(f.count,Math.min(S.start+S.count,y.start+y.count));for(let C=D,$=U;C<$;C+=3){const z=f.getX(C),N=f.getX(C+1),X=f.getX(C+2);a=gl(this,g,e,r,m,_,v,z,N,X),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=S.materialIndex,n.push(a))}}else{const T=Math.max(0,y.start),A=Math.min(f.count,y.start+y.count);for(let S=T,g=A;S<g;S+=3){const D=f.getX(S),U=f.getX(S+1),C=f.getX(S+2);a=gl(this,d,e,r,m,_,v,D,U,C),a&&(a.faceIndex=Math.floor(S/3),n.push(a))}}else if(p!==void 0)if(Array.isArray(d))for(let T=0,A=x.length;T<A;T++){const S=x[T],g=d[S.materialIndex],D=Math.max(S.start,y.start),U=Math.min(p.count,Math.min(S.start+S.count,y.start+y.count));for(let C=D,$=U;C<$;C+=3){const z=C,N=C+1,X=C+2;a=gl(this,g,e,r,m,_,v,z,N,X),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=S.materialIndex,n.push(a))}}else{const T=Math.max(0,y.start),A=Math.min(p.count,y.start+y.count);for(let S=T,g=A;S<g;S+=3){const D=S,U=S+1,C=S+2;a=gl(this,d,e,r,m,_,v,D,U,C),a&&(a.faceIndex=Math.floor(S/3),n.push(a))}}}}function x0(s,e,n,r,a,u,d,f){let p;if(e.side===bn?p=r.intersectTriangle(d,u,a,!0,f):p=r.intersectTriangle(a,u,d,e.side===vr,f),p===null)return null;ml.copy(f),ml.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(ml);return m<n.near||m>n.far?null:{distance:m,point:ml.clone(),object:s}}function gl(s,e,n,r,a,u,d,f,p,m){s.getVertexPosition(f,fl),s.getVertexPosition(p,dl),s.getVertexPosition(m,hl);const _=x0(s,e,n,r,fl,dl,hl,$p);if(_){const v=new ne;ai.getBarycoord($p,fl,dl,hl,v),a&&(_.uv=ai.getInterpolatedAttribute(a,f,p,m,v,new Ct)),u&&(_.uv1=ai.getInterpolatedAttribute(u,f,p,m,v,new Ct)),d&&(_.normal=ai.getInterpolatedAttribute(d,f,p,m,v,new ne),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const x={a:f,b:p,c:m,normal:new ne,materialIndex:0};ai.getNormal(fl,dl,hl,x.normal),_.face=x,_.barycoord=v}return _}class qn extends Kr{constructor(e=1,n=1,r=1,a=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:u,depthSegments:d};const f=this;a=Math.floor(a),u=Math.floor(u),d=Math.floor(d);const p=[],m=[],_=[],v=[];let x=0,y=0;T("z","y","x",-1,-1,r,n,e,d,u,0),T("z","y","x",1,-1,r,n,-e,d,u,1),T("x","z","y",1,1,e,r,n,a,d,2),T("x","z","y",1,-1,e,r,-n,a,d,3),T("x","y","z",1,-1,e,n,r,a,u,4),T("x","y","z",-1,-1,e,n,-r,a,u,5),this.setIndex(p),this.setAttribute("position",new jr(m,3)),this.setAttribute("normal",new jr(_,3)),this.setAttribute("uv",new jr(v,2));function T(A,S,g,D,U,C,$,z,N,X,P){const R=C/N,k=$/X,ue=C/2,Q=$/2,de=z/2,he=N+1,ie=X+1;let ce=0,O=0;const ae=new ne;for(let oe=0;oe<ie;oe++){const I=oe*k-Q;for(let ee=0;ee<he;ee++){const Ne=ee*R-ue;ae[A]=Ne*D,ae[S]=I*U,ae[g]=de,m.push(ae.x,ae.y,ae.z),ae[A]=0,ae[S]=0,ae[g]=z>0?1:-1,_.push(ae.x,ae.y,ae.z),v.push(ee/N),v.push(1-oe/X),ce+=1}}for(let oe=0;oe<X;oe++)for(let I=0;I<N;I++){const ee=x+I+he*oe,Ne=x+I+he*(oe+1),K=x+(I+1)+he*(oe+1),fe=x+(I+1)+he*oe;p.push(ee,Ne,fe),p.push(Ne,K,fe),O+=6}f.addGroup(y,O,P),y+=O,x+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ys(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function Sn(s){const e={};for(let n=0;n<s.length;n++){const r=Ys(s[n]);for(const a in r)e[a]=r[a]}return e}function S0(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function Km(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:vt.workingColorSpace}const y0={clone:Ys,merge:Sn};var M0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,E0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xr extends Yo{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=M0,this.fragmentShader=E0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ys(e.uniforms),this.uniformsGroups=S0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const d=this.uniforms[a].value;d&&d.isTexture?n.uniforms[a]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?n.uniforms[a]={type:"c",value:d.getHex()}:d&&d.isVector2?n.uniforms[a]={type:"v2",value:d.toArray()}:d&&d.isVector3?n.uniforms[a]={type:"v3",value:d.toArray()}:d&&d.isVector4?n.uniforms[a]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?n.uniforms[a]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?n.uniforms[a]={type:"m4",value:d.toArray()}:n.uniforms[a]={value:d}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Zm extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=Bi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pr=new ne,Kp=new Ct,Zp=new Ct;class $n extends Zm{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Vo*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ko*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vo*2*Math.atan(Math.tan(ko*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pr.x,pr.y).multiplyScalar(-e/pr.z),pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(pr.x,pr.y).multiplyScalar(-e/pr.z)}getViewSize(e,n){return this.getViewBounds(e,Kp,Zp),n.subVectors(Zp,Kp)}setViewOffset(e,n,r,a,u,d){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ko*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,u=-.5*a;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;u+=d.offsetX*a/p,n-=d.offsetY*r/m,a*=d.width/p,r*=d.height/m}const f=this.filmOffset;f!==0&&(u+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ds=-90,Us=1;class T0 extends pn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new $n(Ds,Us,e,n);a.layers=this.layers,this.add(a);const u=new $n(Ds,Us,e,n);u.layers=this.layers,this.add(u);const d=new $n(Ds,Us,e,n);d.layers=this.layers,this.add(d);const f=new $n(Ds,Us,e,n);f.layers=this.layers,this.add(f);const p=new $n(Ds,Us,e,n);p.layers=this.layers,this.add(p);const m=new $n(Ds,Us,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,u,d,f,p]=n;for(const m of n)this.remove(m);if(e===Bi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Pl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,f,p,m,_]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,u),e.setRenderTarget(r,1,a),e.render(n,d),e.setRenderTarget(r,2,a),e.render(n,f),e.setRenderTarget(r,3,a),e.render(n,p),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,a),e.render(n,_),e.setRenderTarget(v,x,y),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class Qm extends Ln{constructor(e,n,r,a,u,d,f,p,m,_){e=e!==void 0?e:[],n=n!==void 0?n:Vs,super(e,n,r,a,u,d,f,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class w0 extends $r{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Qm(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:_i}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new qn(5,5,5),u=new xr({name:"CubemapFromEquirect",uniforms:Ys(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:bn,blending:gr});u.uniforms.tEquirect.value=n;const d=new Gt(a,u),f=n.minFilter;return n.minFilter===Yr&&(n.minFilter=_i),new T0(1,10,this).update(e,d),n.minFilter=f,d.geometry.dispose(),d.material.dispose(),this}clear(e,n,r,a){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(n,r,a);e.setRenderTarget(u)}}const Oc=new ne,A0=new ne,R0=new ut;class Hr{constructor(e=new ne(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=Oc.subVectors(r,n).cross(A0.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Oc),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/a;return u<0||u>1?null:n.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||R0.getNormalMatrix(e),a=this.coplanarPoint(Oc).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Or=new Gf,_l=new ne;class Wf{constructor(e=new Hr,n=new Hr,r=new Hr,a=new Hr,u=new Hr,d=new Hr){this.planes=[e,n,r,a,u,d]}set(e,n,r,a,u,d){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(r),f[3].copy(a),f[4].copy(u),f[5].copy(d),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Bi){const r=this.planes,a=e.elements,u=a[0],d=a[1],f=a[2],p=a[3],m=a[4],_=a[5],v=a[6],x=a[7],y=a[8],T=a[9],A=a[10],S=a[11],g=a[12],D=a[13],U=a[14],C=a[15];if(r[0].setComponents(p-u,x-m,S-y,C-g).normalize(),r[1].setComponents(p+u,x+m,S+y,C+g).normalize(),r[2].setComponents(p+d,x+_,S+T,C+D).normalize(),r[3].setComponents(p-d,x-_,S-T,C-D).normalize(),r[4].setComponents(p-f,x-v,S-A,C-U).normalize(),n===Bi)r[5].setComponents(p+f,x+v,S+A,C+U).normalize();else if(n===Pl)r[5].setComponents(f,v,A,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Or)}intersectsSprite(e){return Or.center.set(0,0,0),Or.radius=.7071067811865476,Or.applyMatrix4(e.matrixWorld),this.intersectsSphere(Or)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(_l.x=a.normal.x>0?e.max.x:e.min.x,_l.y=a.normal.y>0?e.max.y:e.min.y,_l.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(_l)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Jm(){let s=null,e=!1,n=null,r=null;function a(u,d){n(u,d),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){s=u}}}function C0(s){const e=new WeakMap;function n(f,p){const m=f.array,_=f.usage,v=m.byteLength,x=s.createBuffer();s.bindBuffer(p,x),s.bufferData(p,m,_),f.onUploadCallback();let y;if(m instanceof Float32Array)y=s.FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=s.SHORT;else if(m instanceof Uint32Array)y=s.UNSIGNED_INT;else if(m instanceof Int32Array)y=s.INT;else if(m instanceof Int8Array)y=s.BYTE;else if(m instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:v}}function r(f,p,m){const _=p.array,v=p.updateRanges;if(s.bindBuffer(m,f),v.length===0)s.bufferSubData(m,0,_);else{v.sort((y,T)=>y.start-T.start);let x=0;for(let y=1;y<v.length;y++){const T=v[x],A=v[y];A.start<=T.start+T.count+1?T.count=Math.max(T.count,A.start+A.count-T.start):(++x,v[x]=A)}v.length=x+1;for(let y=0,T=v.length;y<T;y++){const A=v[y];s.bufferSubData(m,A.start*_.BYTES_PER_ELEMENT,_,A.start,A.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function u(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=e.get(f);p&&(s.deleteBuffer(p.buffer),e.delete(f))}function d(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=e.get(f);(!_||_.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const m=e.get(f);if(m===void 0)e.set(f,n(f,p));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,f,p),m.version=f.version}}return{get:a,remove:u,update:d}}class js extends Kr{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const u=e/2,d=n/2,f=Math.floor(r),p=Math.floor(a),m=f+1,_=p+1,v=e/f,x=n/p,y=[],T=[],A=[],S=[];for(let g=0;g<_;g++){const D=g*x-d;for(let U=0;U<m;U++){const C=U*v-u;T.push(C,-D,0),A.push(0,0,1),S.push(U/f),S.push(1-g/p)}}for(let g=0;g<p;g++)for(let D=0;D<f;D++){const U=D+m*g,C=D+m*(g+1),$=D+1+m*(g+1),z=D+1+m*g;y.push(U,C,z),y.push(C,$,z)}this.setIndex(y),this.setAttribute("position",new jr(T,3)),this.setAttribute("normal",new jr(A,3)),this.setAttribute("uv",new jr(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new js(e.width,e.height,e.widthSegments,e.heightSegments)}}var P0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,b0=`#ifdef USE_ALPHAHASH
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
#endif`,L0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,D0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,U0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,I0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,N0=`#ifdef USE_AOMAP
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
#endif`,F0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,O0=`#ifdef USE_BATCHING
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
#endif`,k0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,B0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,z0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,H0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,V0=`#ifdef USE_IRIDESCENCE
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
#endif`,G0=`#ifdef USE_BUMPMAP
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
#endif`,W0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,X0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Y0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,j0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,q0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,K0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Z0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Q0=`#define PI 3.141592653589793
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
} // validated`,J0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ex=`vec3 transformedNormal = objectNormal;
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
#endif`,tx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ix=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sx="gl_FragColor = linearToOutputTexel( gl_FragColor );",ox=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ax=`#ifdef USE_ENVMAP
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
#endif`,lx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ux=`#ifdef USE_ENVMAP
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
#endif`,cx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fx=`#ifdef USE_ENVMAP
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
#endif`,dx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,px=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gx=`#ifdef USE_GRADIENTMAP
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
}`,_x=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sx=`uniform bool receiveShadow;
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
#endif`,yx=`#ifdef USE_ENVMAP
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
#endif`,Mx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ex=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ax=`PhysicalMaterial material;
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
#endif`,Rx=`struct PhysicalMaterial {
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
}`,Cx=`
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
#endif`,Px=`#if defined( RE_IndirectDiffuse )
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
#endif`,bx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ux=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ix=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ox=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kx=`#if defined( USE_POINTS_UV )
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
#endif`,Bx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wx=`#ifdef USE_MORPHTARGETS
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
#endif`,Xx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$x=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zx=`#ifdef USE_NORMALMAP
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
#endif`,Qx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,oS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,aS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hS=`float getShadowMask() {
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
}`,pS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mS=`#ifdef USE_SKINNING
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
#endif`,gS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_S=`#ifdef USE_SKINNING
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
#endif`,vS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,SS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,MS=`#ifdef USE_TRANSMISSION
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
#endif`,ES=`#ifdef USE_TRANSMISSION
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
#endif`,TS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const CS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,PS=`uniform sampler2D t2D;
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
}`,bS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,DS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,US=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IS=`#include <common>
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
}`,NS=`#if DEPTH_PACKING == 3200
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
}`,FS=`#define DISTANCE
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
}`,OS=`#define DISTANCE
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
}`,kS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,BS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zS=`uniform float scale;
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
}`,HS=`uniform vec3 diffuse;
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
}`,VS=`#include <common>
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
}`,GS=`uniform vec3 diffuse;
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
}`,WS=`#define LAMBERT
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
}`,XS=`#define LAMBERT
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
}`,YS=`#define MATCAP
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
}`,jS=`#define MATCAP
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
}`,qS=`#define NORMAL
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
}`,$S=`#define NORMAL
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
}`,KS=`#define PHONG
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
}`,ZS=`#define PHONG
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
}`,QS=`#define STANDARD
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
}`,JS=`#define STANDARD
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
}`,ey=`#define TOON
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
}`,ty=`#define TOON
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
}`,ny=`uniform float size;
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
}`,iy=`uniform vec3 diffuse;
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
}`,ry=`#include <common>
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
}`,sy=`uniform vec3 color;
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
}`,oy=`uniform float rotation;
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
}`,ay=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:P0,alphahash_pars_fragment:b0,alphamap_fragment:L0,alphamap_pars_fragment:D0,alphatest_fragment:U0,alphatest_pars_fragment:I0,aomap_fragment:N0,aomap_pars_fragment:F0,batching_pars_vertex:O0,batching_vertex:k0,begin_vertex:B0,beginnormal_vertex:z0,bsdfs:H0,iridescence_fragment:V0,bumpmap_pars_fragment:G0,clipping_planes_fragment:W0,clipping_planes_pars_fragment:X0,clipping_planes_pars_vertex:Y0,clipping_planes_vertex:j0,color_fragment:q0,color_pars_fragment:$0,color_pars_vertex:K0,color_vertex:Z0,common:Q0,cube_uv_reflection_fragment:J0,defaultnormal_vertex:ex,displacementmap_pars_vertex:tx,displacementmap_vertex:nx,emissivemap_fragment:ix,emissivemap_pars_fragment:rx,colorspace_fragment:sx,colorspace_pars_fragment:ox,envmap_fragment:ax,envmap_common_pars_fragment:lx,envmap_pars_fragment:ux,envmap_pars_vertex:cx,envmap_physical_pars_fragment:yx,envmap_vertex:fx,fog_vertex:dx,fog_pars_vertex:hx,fog_fragment:px,fog_pars_fragment:mx,gradientmap_pars_fragment:gx,lightmap_pars_fragment:_x,lights_lambert_fragment:vx,lights_lambert_pars_fragment:xx,lights_pars_begin:Sx,lights_toon_fragment:Mx,lights_toon_pars_fragment:Ex,lights_phong_fragment:Tx,lights_phong_pars_fragment:wx,lights_physical_fragment:Ax,lights_physical_pars_fragment:Rx,lights_fragment_begin:Cx,lights_fragment_maps:Px,lights_fragment_end:bx,logdepthbuf_fragment:Lx,logdepthbuf_pars_fragment:Dx,logdepthbuf_pars_vertex:Ux,logdepthbuf_vertex:Ix,map_fragment:Nx,map_pars_fragment:Fx,map_particle_fragment:Ox,map_particle_pars_fragment:kx,metalnessmap_fragment:Bx,metalnessmap_pars_fragment:zx,morphinstance_vertex:Hx,morphcolor_vertex:Vx,morphnormal_vertex:Gx,morphtarget_pars_vertex:Wx,morphtarget_vertex:Xx,normal_fragment_begin:Yx,normal_fragment_maps:jx,normal_pars_fragment:qx,normal_pars_vertex:$x,normal_vertex:Kx,normalmap_pars_fragment:Zx,clearcoat_normal_fragment_begin:Qx,clearcoat_normal_fragment_maps:Jx,clearcoat_pars_fragment:eS,iridescence_pars_fragment:tS,opaque_fragment:nS,packing:iS,premultiplied_alpha_fragment:rS,project_vertex:sS,dithering_fragment:oS,dithering_pars_fragment:aS,roughnessmap_fragment:lS,roughnessmap_pars_fragment:uS,shadowmap_pars_fragment:cS,shadowmap_pars_vertex:fS,shadowmap_vertex:dS,shadowmask_pars_fragment:hS,skinbase_vertex:pS,skinning_pars_vertex:mS,skinning_vertex:gS,skinnormal_vertex:_S,specularmap_fragment:vS,specularmap_pars_fragment:xS,tonemapping_fragment:SS,tonemapping_pars_fragment:yS,transmission_fragment:MS,transmission_pars_fragment:ES,uv_pars_fragment:TS,uv_pars_vertex:wS,uv_vertex:AS,worldpos_vertex:RS,background_vert:CS,background_frag:PS,backgroundCube_vert:bS,backgroundCube_frag:LS,cube_vert:DS,cube_frag:US,depth_vert:IS,depth_frag:NS,distanceRGBA_vert:FS,distanceRGBA_frag:OS,equirect_vert:kS,equirect_frag:BS,linedashed_vert:zS,linedashed_frag:HS,meshbasic_vert:VS,meshbasic_frag:GS,meshlambert_vert:WS,meshlambert_frag:XS,meshmatcap_vert:YS,meshmatcap_frag:jS,meshnormal_vert:qS,meshnormal_frag:$S,meshphong_vert:KS,meshphong_frag:ZS,meshphysical_vert:QS,meshphysical_frag:JS,meshtoon_vert:ey,meshtoon_frag:ty,points_vert:ny,points_frag:iy,shadow_vert:ry,shadow_frag:sy,sprite_vert:oy,sprite_frag:ay},Pe={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},gi={basic:{uniforms:Sn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Sn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new xt(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Sn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Sn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Sn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new xt(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Sn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Sn([Pe.points,Pe.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Sn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Sn([Pe.common,Pe.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Sn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Sn([Pe.sprite,Pe.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:Sn([Pe.common,Pe.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:Sn([Pe.lights,Pe.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};gi.physical={uniforms:Sn([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const vl={r:0,b:0,g:0},kr=new xi,ly=new Ht;function uy(s,e,n,r,a,u,d){const f=new xt(0);let p=u===!0?0:1,m,_,v=null,x=0,y=null;function T(D){let U=D.isScene===!0?D.background:null;return U&&U.isTexture&&(U=(D.backgroundBlurriness>0?n:e).get(U)),U}function A(D){let U=!1;const C=T(D);C===null?g(f,p):C&&C.isColor&&(g(C,1),U=!0);const $=s.xr.getEnvironmentBlendMode();$==="additive"?r.buffers.color.setClear(0,0,0,1,d):$==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(s.autoClear||U)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(D,U){const C=T(U);C&&(C.isCubeTexture||C.mapping===Ll)?(_===void 0&&(_=new Gt(new qn(1,1,1),new xr({name:"BackgroundCubeMaterial",uniforms:Ys(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function($,z,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(_)),kr.copy(U.backgroundRotation),kr.x*=-1,kr.y*=-1,kr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(kr.y*=-1,kr.z*=-1),_.material.uniforms.envMap.value=C,_.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(ly.makeRotationFromEuler(kr)),_.material.toneMapped=vt.getTransfer(C.colorSpace)!==bt,(v!==C||x!==C.version||y!==s.toneMapping)&&(_.material.needsUpdate=!0,v=C,x=C.version,y=s.toneMapping),_.layers.enableAll(),D.unshift(_,_.geometry,_.material,0,0,null)):C&&C.isTexture&&(m===void 0&&(m=new Gt(new js(2,2),new xr({name:"BackgroundMaterial",uniforms:Ys(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:vr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=C,m.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,m.material.toneMapped=vt.getTransfer(C.colorSpace)!==bt,C.matrixAutoUpdate===!0&&C.updateMatrix(),m.material.uniforms.uvTransform.value.copy(C.matrix),(v!==C||x!==C.version||y!==s.toneMapping)&&(m.material.needsUpdate=!0,v=C,x=C.version,y=s.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function g(D,U){D.getRGB(vl,Km(s)),r.buffers.color.setClear(vl.r,vl.g,vl.b,U,d)}return{getClearColor:function(){return f},setClearColor:function(D,U=1){f.set(D),p=U,g(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(D){p=D,g(f,p)},render:A,addToRenderList:S}}function cy(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=x(null);let u=a,d=!1;function f(R,k,ue,Q,de){let he=!1;const ie=v(Q,ue,k);u!==ie&&(u=ie,m(u.object)),he=y(R,Q,ue,de),he&&T(R,Q,ue,de),de!==null&&e.update(de,s.ELEMENT_ARRAY_BUFFER),(he||d)&&(d=!1,C(R,k,ue,Q),de!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(de).buffer))}function p(){return s.createVertexArray()}function m(R){return s.bindVertexArray(R)}function _(R){return s.deleteVertexArray(R)}function v(R,k,ue){const Q=ue.wireframe===!0;let de=r[R.id];de===void 0&&(de={},r[R.id]=de);let he=de[k.id];he===void 0&&(he={},de[k.id]=he);let ie=he[Q];return ie===void 0&&(ie=x(p()),he[Q]=ie),ie}function x(R){const k=[],ue=[],Q=[];for(let de=0;de<n;de++)k[de]=0,ue[de]=0,Q[de]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:ue,attributeDivisors:Q,object:R,attributes:{},index:null}}function y(R,k,ue,Q){const de=u.attributes,he=k.attributes;let ie=0;const ce=ue.getAttributes();for(const O in ce)if(ce[O].location>=0){const oe=de[O];let I=he[O];if(I===void 0&&(O==="instanceMatrix"&&R.instanceMatrix&&(I=R.instanceMatrix),O==="instanceColor"&&R.instanceColor&&(I=R.instanceColor)),oe===void 0||oe.attribute!==I||I&&oe.data!==I.data)return!0;ie++}return u.attributesNum!==ie||u.index!==Q}function T(R,k,ue,Q){const de={},he=k.attributes;let ie=0;const ce=ue.getAttributes();for(const O in ce)if(ce[O].location>=0){let oe=he[O];oe===void 0&&(O==="instanceMatrix"&&R.instanceMatrix&&(oe=R.instanceMatrix),O==="instanceColor"&&R.instanceColor&&(oe=R.instanceColor));const I={};I.attribute=oe,oe&&oe.data&&(I.data=oe.data),de[O]=I,ie++}u.attributes=de,u.attributesNum=ie,u.index=Q}function A(){const R=u.newAttributes;for(let k=0,ue=R.length;k<ue;k++)R[k]=0}function S(R){g(R,0)}function g(R,k){const ue=u.newAttributes,Q=u.enabledAttributes,de=u.attributeDivisors;ue[R]=1,Q[R]===0&&(s.enableVertexAttribArray(R),Q[R]=1),de[R]!==k&&(s.vertexAttribDivisor(R,k),de[R]=k)}function D(){const R=u.newAttributes,k=u.enabledAttributes;for(let ue=0,Q=k.length;ue<Q;ue++)k[ue]!==R[ue]&&(s.disableVertexAttribArray(ue),k[ue]=0)}function U(R,k,ue,Q,de,he,ie){ie===!0?s.vertexAttribIPointer(R,k,ue,de,he):s.vertexAttribPointer(R,k,ue,Q,de,he)}function C(R,k,ue,Q){A();const de=Q.attributes,he=ue.getAttributes(),ie=k.defaultAttributeValues;for(const ce in he){const O=he[ce];if(O.location>=0){let ae=de[ce];if(ae===void 0&&(ce==="instanceMatrix"&&R.instanceMatrix&&(ae=R.instanceMatrix),ce==="instanceColor"&&R.instanceColor&&(ae=R.instanceColor)),ae!==void 0){const oe=ae.normalized,I=ae.itemSize,ee=e.get(ae);if(ee===void 0)continue;const Ne=ee.buffer,K=ee.type,fe=ee.bytesPerElement,ye=K===s.INT||K===s.UNSIGNED_INT||ae.gpuType===Ff;if(ae.isInterleavedBufferAttribute){const ve=ae.data,Ae=ve.stride,Le=ae.offset;if(ve.isInstancedInterleavedBuffer){for(let qe=0;qe<O.locationSize;qe++)g(O.location+qe,ve.meshPerAttribute);R.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let qe=0;qe<O.locationSize;qe++)S(O.location+qe);s.bindBuffer(s.ARRAY_BUFFER,Ne);for(let qe=0;qe<O.locationSize;qe++)U(O.location+qe,I/O.locationSize,K,oe,Ae*fe,(Le+I/O.locationSize*qe)*fe,ye)}else{if(ae.isInstancedBufferAttribute){for(let ve=0;ve<O.locationSize;ve++)g(O.location+ve,ae.meshPerAttribute);R.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ve=0;ve<O.locationSize;ve++)S(O.location+ve);s.bindBuffer(s.ARRAY_BUFFER,Ne);for(let ve=0;ve<O.locationSize;ve++)U(O.location+ve,I/O.locationSize,K,oe,I*fe,I/O.locationSize*ve*fe,ye)}}else if(ie!==void 0){const oe=ie[ce];if(oe!==void 0)switch(oe.length){case 2:s.vertexAttrib2fv(O.location,oe);break;case 3:s.vertexAttrib3fv(O.location,oe);break;case 4:s.vertexAttrib4fv(O.location,oe);break;default:s.vertexAttrib1fv(O.location,oe)}}}}D()}function $(){X();for(const R in r){const k=r[R];for(const ue in k){const Q=k[ue];for(const de in Q)_(Q[de].object),delete Q[de];delete k[ue]}delete r[R]}}function z(R){if(r[R.id]===void 0)return;const k=r[R.id];for(const ue in k){const Q=k[ue];for(const de in Q)_(Q[de].object),delete Q[de];delete k[ue]}delete r[R.id]}function N(R){for(const k in r){const ue=r[k];if(ue[R.id]===void 0)continue;const Q=ue[R.id];for(const de in Q)_(Q[de].object),delete Q[de];delete ue[R.id]}}function X(){P(),d=!0,u!==a&&(u=a,m(u.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:X,resetDefaultState:P,dispose:$,releaseStatesOfGeometry:z,releaseStatesOfProgram:N,initAttributes:A,enableAttribute:S,disableUnusedAttributes:D}}function fy(s,e,n){let r;function a(m){r=m}function u(m,_){s.drawArrays(r,m,_),n.update(_,r,1)}function d(m,_,v){v!==0&&(s.drawArraysInstanced(r,m,_,v),n.update(_,r,v))}function f(m,_,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,_,0,v);let y=0;for(let T=0;T<v;T++)y+=_[T];n.update(y,r,1)}function p(m,_,v,x){if(v===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let T=0;T<m.length;T++)d(m[T],_[T],x[T]);else{y.multiDrawArraysInstancedWEBGL(r,m,0,_,0,x,0,v);let T=0;for(let A=0;A<v;A++)T+=_[A]*x[A];n.update(T,r,1)}}this.setMode=a,this.render=u,this.renderInstances=d,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function dy(s,e,n,r){let a;function u(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function d(N){return!(N!==li&&r.convert(N)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(N){const X=N===Go&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==Hi&&r.convert(N)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==ki&&!X)}function p(N){if(N==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const _=p(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const v=n.logarithmicDepthBuffer===!0,x=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),D=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),U=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),$=T>0,z=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:y,maxVertexTextures:T,maxTextureSize:A,maxCubemapSize:S,maxAttributes:g,maxVertexUniforms:D,maxVaryings:U,maxFragmentUniforms:C,vertexTextures:$,maxSamples:z}}function hy(s){const e=this;let n=null,r=0,a=!1,u=!1;const d=new Hr,f=new ut,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const y=v.length!==0||x||r!==0||a;return a=x,r=v.length,y},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,x){n=_(v,x,0)},this.setState=function(v,x,y){const T=v.clippingPlanes,A=v.clipIntersection,S=v.clipShadows,g=s.get(v);if(!a||T===null||T.length===0||u&&!S)u?_(null):m();else{const D=u?0:r,U=D*4;let C=g.clippingState||null;p.value=C,C=_(T,x,U,y);for(let $=0;$!==U;++$)C[$]=n[$];g.clippingState=C,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=D}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(v,x,y,T){const A=v!==null?v.length:0;let S=null;if(A!==0){if(S=p.value,T!==!0||S===null){const g=y+A*4,D=x.matrixWorldInverse;f.getNormalMatrix(D),(S===null||S.length<g)&&(S=new Float32Array(g));for(let U=0,C=y;U!==A;++U,C+=4)d.copy(v[U]).applyMatrix4(D,f),d.normal.toArray(S,C),S[C+3]=d.constant}p.value=S,p.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,S}}function py(s){let e=new WeakMap;function n(d,f){return f===tf?d.mapping=Vs:f===nf&&(d.mapping=Gs),d}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===tf||f===nf)if(e.has(d)){const p=e.get(d).texture;return n(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const m=new w0(p.height);return m.fromEquirectangularTexture(s,d),e.set(d,m),d.addEventListener("dispose",a),n(m.texture,d.mapping)}else return null}}return d}function a(d){const f=d.target;f.removeEventListener("dispose",a);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}class eg extends Zm{constructor(e=-1,n=1,r=1,a=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let u=r-e,d=r+e,f=a+n,p=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,d=u+m*this.view.width,f-=_*this.view.offsetY,p=f-_*this.view.height}this.projectionMatrix.makeOrthographic(u,d,f,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Fs=4,Qp=[.125,.215,.35,.446,.526,.582],Wr=20,kc=new eg,Jp=new xt;let Bc=null,zc=0,Hc=0,Vc=!1;const Vr=(1+Math.sqrt(5))/2,Is=1/Vr,em=[new ne(-Vr,Is,0),new ne(Vr,Is,0),new ne(-Is,0,Vr),new ne(Is,0,Vr),new ne(0,Vr,-Is),new ne(0,Vr,Is),new ne(-1,1,-1),new ne(1,1,-1),new ne(-1,1,1),new ne(1,1,1)];class tm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){Bc=this._renderer.getRenderTarget(),zc=this._renderer.getActiveCubeFace(),Hc=this._renderer.getActiveMipmapLevel(),Vc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,a,u),n>0&&this._blur(u,0,0,n),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=im(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bc,zc,Hc),this._renderer.xr.enabled=Vc,e.scissorTest=!1,xl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Vs||e.mapping===Gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bc=this._renderer.getRenderTarget(),zc=this._renderer.getActiveCubeFace(),Hc=this._renderer.getActiveMipmapLevel(),Vc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:_i,minFilter:_i,generateMipmaps:!1,type:Go,format:li,colorSpace:qs,depthBuffer:!1},a=nm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nm(e,n,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=my(u)),this._blurMaterial=gy(u,e,n)}return a}_compileMaterial(e){const n=new Gt(this._lodPlanes[0],e);this._renderer.compile(n,kc)}_sceneToCubeUV(e,n,r,a){const f=new $n(90,1,n,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,x=_.toneMapping;_.getClearColor(Jp),_.toneMapping=_r,_.autoClear=!1;const y=new zo({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1}),T=new Gt(new qn,y);let A=!1;const S=e.background;S?S.isColor&&(y.color.copy(S),e.background=null,A=!0):(y.color.copy(Jp),A=!0);for(let g=0;g<6;g++){const D=g%3;D===0?(f.up.set(0,p[g],0),f.lookAt(m[g],0,0)):D===1?(f.up.set(0,0,p[g]),f.lookAt(0,m[g],0)):(f.up.set(0,p[g],0),f.lookAt(0,0,m[g]));const U=this._cubeSize;xl(a,D*U,g>2?U:0,U,U),_.setRenderTarget(a),A&&_.render(T,f),_.render(e,f)}T.geometry.dispose(),T.material.dispose(),_.toneMapping=x,_.autoClear=v,e.background=S}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===Vs||e.mapping===Gs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=rm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=im());const u=a?this._cubemapMaterial:this._equirectMaterial,d=new Gt(this._lodPlanes[0],u),f=u.uniforms;f.envMap.value=e;const p=this._cubeSize;xl(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(d,kc)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let u=1;u<a;u++){const d=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),f=em[(a-u-1)%em.length];this._blur(e,u-1,u,d,f)}n.autoClear=r}_blur(e,n,r,a,u){const d=this._pingPongRenderTarget;this._halfBlur(e,d,n,r,a,"latitudinal",u),this._halfBlur(d,e,r,r,a,"longitudinal",u)}_halfBlur(e,n,r,a,u,d,f){const p=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,v=new Gt(this._lodPlanes[a],m),x=m.uniforms,y=this._sizeLods[r]-1,T=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*Wr-1),A=u/T,S=isFinite(u)?1+Math.floor(_*A):Wr;S>Wr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Wr}`);const g=[];let D=0;for(let N=0;N<Wr;++N){const X=N/A,P=Math.exp(-X*X/2);g.push(P),N===0?D+=P:N<S&&(D+=2*P)}for(let N=0;N<g.length;N++)g[N]=g[N]/D;x.envMap.value=e.texture,x.samples.value=S,x.weights.value=g,x.latitudinal.value=d==="latitudinal",f&&(x.poleAxis.value=f);const{_lodMax:U}=this;x.dTheta.value=T,x.mipInt.value=U-r;const C=this._sizeLods[a],$=3*C*(a>U-Fs?a-U+Fs:0),z=4*(this._cubeSize-C);xl(n,$,z,3*C,2*C),p.setRenderTarget(n),p.render(v,kc)}}function my(s){const e=[],n=[],r=[];let a=s;const u=s-Fs+1+Qp.length;for(let d=0;d<u;d++){const f=Math.pow(2,a);n.push(f);let p=1/f;d>s-Fs?p=Qp[d-s+Fs-1]:d===0&&(p=0),r.push(p);const m=1/(f-2),_=-m,v=1+m,x=[_,_,v,_,v,v,_,_,v,v,_,v],y=6,T=6,A=3,S=2,g=1,D=new Float32Array(A*T*y),U=new Float32Array(S*T*y),C=new Float32Array(g*T*y);for(let z=0;z<y;z++){const N=z%3*2/3-1,X=z>2?0:-1,P=[N,X,0,N+2/3,X,0,N+2/3,X+1,0,N,X,0,N+2/3,X+1,0,N,X+1,0];D.set(P,A*T*z),U.set(x,S*T*z);const R=[z,z,z,z,z,z];C.set(R,g*T*z)}const $=new Kr;$.setAttribute("position",new vi(D,A)),$.setAttribute("uv",new vi(U,S)),$.setAttribute("faceIndex",new vi(C,g)),e.push($),a>Fs&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function nm(s,e,n){const r=new $r(s,e,n);return r.texture.mapping=Ll,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function xl(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function gy(s,e,n){const r=new Float32Array(Wr),a=new ne(0,1,0);return new xr({name:"SphericalGaussianBlur",defines:{n:Wr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Xf(),fragmentShader:`

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
		`,blending:gr,depthTest:!1,depthWrite:!1})}function im(){return new xr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xf(),fragmentShader:`

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
		`,blending:gr,depthTest:!1,depthWrite:!1})}function rm(){return new xr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function Xf(){return`

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
	`}function _y(s){let e=new WeakMap,n=null;function r(f){if(f&&f.isTexture){const p=f.mapping,m=p===tf||p===nf,_=p===Vs||p===Gs;if(m||_){let v=e.get(f);const x=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==x)return n===null&&(n=new tm(s)),v=m?n.fromEquirectangular(f,v):n.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),v.texture;if(v!==void 0)return v.texture;{const y=f.image;return m&&y&&y.height>0||_&&y&&a(y)?(n===null&&(n=new tm(s)),v=m?n.fromEquirectangular(f):n.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),f.addEventListener("dispose",u),v.texture):null}}}return f}function a(f){let p=0;const m=6;for(let _=0;_<m;_++)f[_]!==void 0&&p++;return p===m}function u(f){const p=f.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function d(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function vy(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&Fo("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function xy(s,e,n,r){const a={},u=new WeakMap;function d(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const T in x.attributes)e.remove(x.attributes[T]);for(const T in x.morphAttributes){const A=x.morphAttributes[T];for(let S=0,g=A.length;S<g;S++)e.remove(A[S])}x.removeEventListener("dispose",d),delete a[x.id];const y=u.get(x);y&&(e.remove(y),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function f(v,x){return a[x.id]===!0||(x.addEventListener("dispose",d),a[x.id]=!0,n.memory.geometries++),x}function p(v){const x=v.attributes;for(const T in x)e.update(x[T],s.ARRAY_BUFFER);const y=v.morphAttributes;for(const T in y){const A=y[T];for(let S=0,g=A.length;S<g;S++)e.update(A[S],s.ARRAY_BUFFER)}}function m(v){const x=[],y=v.index,T=v.attributes.position;let A=0;if(y!==null){const D=y.array;A=y.version;for(let U=0,C=D.length;U<C;U+=3){const $=D[U+0],z=D[U+1],N=D[U+2];x.push($,z,z,N,N,$)}}else if(T!==void 0){const D=T.array;A=T.version;for(let U=0,C=D.length/3-1;U<C;U+=3){const $=U+0,z=U+1,N=U+2;x.push($,z,z,N,N,$)}}else return;const S=new(Gm(x)?$m:qm)(x,1);S.version=A;const g=u.get(v);g&&e.remove(g),u.set(v,S)}function _(v){const x=u.get(v);if(x){const y=v.index;y!==null&&x.version<y.version&&m(v)}else m(v);return u.get(v)}return{get:f,update:p,getWireframeAttribute:_}}function Sy(s,e,n){let r;function a(x){r=x}let u,d;function f(x){u=x.type,d=x.bytesPerElement}function p(x,y){s.drawElements(r,y,u,x*d),n.update(y,r,1)}function m(x,y,T){T!==0&&(s.drawElementsInstanced(r,y,u,x*d,T),n.update(y,r,T))}function _(x,y,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,u,x,0,T);let S=0;for(let g=0;g<T;g++)S+=y[g];n.update(S,r,1)}function v(x,y,T,A){if(T===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let g=0;g<x.length;g++)m(x[g]/d,y[g],A[g]);else{S.multiDrawElementsInstancedWEBGL(r,y,0,u,x,0,A,0,T);let g=0;for(let D=0;D<T;D++)g+=y[D]*A[D];n.update(g,r,1)}}this.setMode=a,this.setIndex=f,this.render=p,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function yy(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,f){switch(n.calls++,d){case s.TRIANGLES:n.triangles+=f*(u/3);break;case s.LINES:n.lines+=f*(u/2);break;case s.LINE_STRIP:n.lines+=f*(u-1);break;case s.LINE_LOOP:n.lines+=f*u;break;case s.POINTS:n.points+=f*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function My(s,e,n){const r=new WeakMap,a=new zt;function u(d,f,p){const m=d.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=_!==void 0?_.length:0;let x=r.get(f);if(x===void 0||x.count!==v){let R=function(){X.dispose(),r.delete(f),f.removeEventListener("dispose",R)};var y=R;x!==void 0&&x.texture.dispose();const T=f.morphAttributes.position!==void 0,A=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,g=f.morphAttributes.position||[],D=f.morphAttributes.normal||[],U=f.morphAttributes.color||[];let C=0;T===!0&&(C=1),A===!0&&(C=2),S===!0&&(C=3);let $=f.attributes.position.count*C,z=1;$>e.maxTextureSize&&(z=Math.ceil($/e.maxTextureSize),$=e.maxTextureSize);const N=new Float32Array($*z*4*v),X=new Xm(N,$,z,v);X.type=ki,X.needsUpdate=!0;const P=C*4;for(let k=0;k<v;k++){const ue=g[k],Q=D[k],de=U[k],he=$*z*4*k;for(let ie=0;ie<ue.count;ie++){const ce=ie*P;T===!0&&(a.fromBufferAttribute(ue,ie),N[he+ce+0]=a.x,N[he+ce+1]=a.y,N[he+ce+2]=a.z,N[he+ce+3]=0),A===!0&&(a.fromBufferAttribute(Q,ie),N[he+ce+4]=a.x,N[he+ce+5]=a.y,N[he+ce+6]=a.z,N[he+ce+7]=0),S===!0&&(a.fromBufferAttribute(de,ie),N[he+ce+8]=a.x,N[he+ce+9]=a.y,N[he+ce+10]=a.z,N[he+ce+11]=de.itemSize===4?a.w:1)}}x={count:v,texture:X,size:new Ct($,z)},r.set(f,x),f.addEventListener("dispose",R)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",d.morphTexture,n);else{let T=0;for(let S=0;S<m.length;S++)T+=m[S];const A=f.morphTargetsRelative?1:1-T;p.getUniforms().setValue(s,"morphTargetBaseInfluence",A),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",x.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:u}}function Ey(s,e,n,r){let a=new WeakMap;function u(p){const m=r.render.frame,_=p.geometry,v=e.get(p,_);if(a.get(v)!==m&&(e.update(v),a.set(v,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),a.get(p)!==m&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),a.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;a.get(x)!==m&&(x.update(),a.set(x,m))}return v}function d(){a=new WeakMap}function f(p){const m=p.target;m.removeEventListener("dispose",f),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:u,dispose:d}}class tg extends Ln{constructor(e,n,r,a,u,d,f,p,m,_=Bs){if(_!==Bs&&_!==Xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===Bs&&(r=qr),r===void 0&&_===Xs&&(r=Ws),super(null,a,u,d,f,p,_,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=f!==void 0?f:ui,this.minFilter=p!==void 0?p:ui,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const ng=new Ln,sm=new tg(1,1),ig=new Xm,rg=new l0,sg=new Qm,om=[],am=[],lm=new Float32Array(16),um=new Float32Array(9),cm=new Float32Array(4);function Zs(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let u=om[a];if(u===void 0&&(u=new Float32Array(a),om[a]=u),e!==0){r.toArray(u,0);for(let d=1,f=0;d!==e;++d)f+=n,s[d].toArray(u,f)}return u}function Kt(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function Zt(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Ul(s,e){let n=am[e];n===void 0&&(n=new Int32Array(e),am[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function Ty(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function wy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;s.uniform2fv(this.addr,e),Zt(n,e)}}function Ay(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Kt(n,e))return;s.uniform3fv(this.addr,e),Zt(n,e)}}function Ry(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;s.uniform4fv(this.addr,e),Zt(n,e)}}function Cy(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Kt(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),Zt(n,e)}else{if(Kt(n,r))return;cm.set(r),s.uniformMatrix2fv(this.addr,!1,cm),Zt(n,r)}}function Py(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Kt(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),Zt(n,e)}else{if(Kt(n,r))return;um.set(r),s.uniformMatrix3fv(this.addr,!1,um),Zt(n,r)}}function by(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Kt(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),Zt(n,e)}else{if(Kt(n,r))return;lm.set(r),s.uniformMatrix4fv(this.addr,!1,lm),Zt(n,r)}}function Ly(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function Dy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;s.uniform2iv(this.addr,e),Zt(n,e)}}function Uy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Kt(n,e))return;s.uniform3iv(this.addr,e),Zt(n,e)}}function Iy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;s.uniform4iv(this.addr,e),Zt(n,e)}}function Ny(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function Fy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;s.uniform2uiv(this.addr,e),Zt(n,e)}}function Oy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Kt(n,e))return;s.uniform3uiv(this.addr,e),Zt(n,e)}}function ky(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;s.uniform4uiv(this.addr,e),Zt(n,e)}}function By(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let u;this.type===s.SAMPLER_2D_SHADOW?(sm.compareFunction=Vm,u=sm):u=ng,n.setTexture2D(e||u,a)}function zy(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||rg,a)}function Hy(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||sg,a)}function Vy(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||ig,a)}function Gy(s){switch(s){case 5126:return Ty;case 35664:return wy;case 35665:return Ay;case 35666:return Ry;case 35674:return Cy;case 35675:return Py;case 35676:return by;case 5124:case 35670:return Ly;case 35667:case 35671:return Dy;case 35668:case 35672:return Uy;case 35669:case 35673:return Iy;case 5125:return Ny;case 36294:return Fy;case 36295:return Oy;case 36296:return ky;case 35678:case 36198:case 36298:case 36306:case 35682:return By;case 35679:case 36299:case 36307:return zy;case 35680:case 36300:case 36308:case 36293:return Hy;case 36289:case 36303:case 36311:case 36292:return Vy}}function Wy(s,e){s.uniform1fv(this.addr,e)}function Xy(s,e){const n=Zs(e,this.size,2);s.uniform2fv(this.addr,n)}function Yy(s,e){const n=Zs(e,this.size,3);s.uniform3fv(this.addr,n)}function jy(s,e){const n=Zs(e,this.size,4);s.uniform4fv(this.addr,n)}function qy(s,e){const n=Zs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function $y(s,e){const n=Zs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function Ky(s,e){const n=Zs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function Zy(s,e){s.uniform1iv(this.addr,e)}function Qy(s,e){s.uniform2iv(this.addr,e)}function Jy(s,e){s.uniform3iv(this.addr,e)}function eM(s,e){s.uniform4iv(this.addr,e)}function tM(s,e){s.uniform1uiv(this.addr,e)}function nM(s,e){s.uniform2uiv(this.addr,e)}function iM(s,e){s.uniform3uiv(this.addr,e)}function rM(s,e){s.uniform4uiv(this.addr,e)}function sM(s,e,n){const r=this.cache,a=e.length,u=Ul(n,a);Kt(r,u)||(s.uniform1iv(this.addr,u),Zt(r,u));for(let d=0;d!==a;++d)n.setTexture2D(e[d]||ng,u[d])}function oM(s,e,n){const r=this.cache,a=e.length,u=Ul(n,a);Kt(r,u)||(s.uniform1iv(this.addr,u),Zt(r,u));for(let d=0;d!==a;++d)n.setTexture3D(e[d]||rg,u[d])}function aM(s,e,n){const r=this.cache,a=e.length,u=Ul(n,a);Kt(r,u)||(s.uniform1iv(this.addr,u),Zt(r,u));for(let d=0;d!==a;++d)n.setTextureCube(e[d]||sg,u[d])}function lM(s,e,n){const r=this.cache,a=e.length,u=Ul(n,a);Kt(r,u)||(s.uniform1iv(this.addr,u),Zt(r,u));for(let d=0;d!==a;++d)n.setTexture2DArray(e[d]||ig,u[d])}function uM(s){switch(s){case 5126:return Wy;case 35664:return Xy;case 35665:return Yy;case 35666:return jy;case 35674:return qy;case 35675:return $y;case 35676:return Ky;case 5124:case 35670:return Zy;case 35667:case 35671:return Qy;case 35668:case 35672:return Jy;case 35669:case 35673:return eM;case 5125:return tM;case 36294:return nM;case 36295:return iM;case 36296:return rM;case 35678:case 36198:case 36298:case 36306:case 35682:return sM;case 35679:case 36299:case 36307:return oM;case 35680:case 36300:case 36308:case 36293:return aM;case 36289:case 36303:case 36311:case 36292:return lM}}class cM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=Gy(n.type)}}class fM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=uM(n.type)}}class dM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let u=0,d=a.length;u!==d;++u){const f=a[u];f.setValue(e,n[f.id],r)}}}const Gc=/(\w+)(\])?(\[|\.)?/g;function fm(s,e){s.seq.push(e),s.map[e.id]=e}function hM(s,e,n){const r=s.name,a=r.length;for(Gc.lastIndex=0;;){const u=Gc.exec(r),d=Gc.lastIndex;let f=u[1];const p=u[2]==="]",m=u[3];if(p&&(f=f|0),m===void 0||m==="["&&d+2===a){fm(n,m===void 0?new cM(f,s,e):new fM(f,s,e));break}else{let v=n.map[f];v===void 0&&(v=new dM(f),fm(n,v)),n=v}}}class Al{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const u=e.getActiveUniform(n,a),d=e.getUniformLocation(n,u.name);hM(u,d,this)}}setValue(e,n,r,a){const u=this.map[n];u!==void 0&&u.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let u=0,d=n.length;u!==d;++u){const f=n[u],p=r[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,u=e.length;a!==u;++a){const d=e[a];d.id in n&&r.push(d)}return r}}function dm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const pM=37297;let mM=0;function gM(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let d=a;d<u;d++){const f=d+1;r.push(`${f===e?">":" "} ${f}: ${n[d]}`)}return r.join(`
`)}const hm=new ut;function _M(s){vt._getMatrix(hm,vt.workingColorSpace,s);const e=`mat3( ${hm.elements.map(n=>n.toFixed(4))} )`;switch(vt.getTransfer(s)){case Dl:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function pm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const u=/ERROR: 0:(\d+)/.exec(a);if(u){const d=parseInt(u[1]);return n.toUpperCase()+`

`+a+`

`+gM(s.getShaderSource(e),d)}else return a}function vM(s,e){const n=_M(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function xM(s,e){let n;switch(e){case xv:n="Linear";break;case Sv:n="Reinhard";break;case yv:n="Cineon";break;case Mv:n="ACESFilmic";break;case Tv:n="AgX";break;case wv:n="Neutral";break;case Ev:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Sl=new ne;function SM(){vt.getLuminanceCoefficients(Sl);const s=Sl.x.toFixed(4),e=Sl.y.toFixed(4),n=Sl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oo).join(`
`)}function MM(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function EM(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const u=s.getActiveAttrib(e,a),d=u.name;let f=1;u.type===s.FLOAT_MAT2&&(f=2),u.type===s.FLOAT_MAT3&&(f=3),u.type===s.FLOAT_MAT4&&(f=4),n[d]={type:u.type,location:s.getAttribLocation(e,d),locationSize:f}}return n}function Oo(s){return s!==""}function mm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const TM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Df(s){return s.replace(TM,AM)}const wM=new Map;function AM(s,e){let n=ft[e];if(n===void 0){const r=wM.get(e);if(r!==void 0)n=ft[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Df(n)}const RM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _m(s){return s.replace(RM,CM)}function CM(s,e,n,r){let a="";for(let u=parseInt(e);u<parseInt(n);u++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return a}function vm(s){let e=`precision ${s.precision} float;
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
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function PM(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Rm?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Cm?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Fi&&(e="SHADOWMAP_TYPE_VSM"),e}function bM(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Vs:case Gs:e="ENVMAP_TYPE_CUBE";break;case Ll:e="ENVMAP_TYPE_CUBE_UV";break}return e}function LM(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Gs:e="ENVMAP_MODE_REFRACTION";break}return e}function DM(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Pm:e="ENVMAP_BLENDING_MULTIPLY";break;case _v:e="ENVMAP_BLENDING_MIX";break;case vv:e="ENVMAP_BLENDING_ADD";break}return e}function UM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function IM(s,e,n,r){const a=s.getContext(),u=n.defines;let d=n.vertexShader,f=n.fragmentShader;const p=PM(n),m=bM(n),_=LM(n),v=DM(n),x=UM(n),y=yM(n),T=MM(u),A=a.createProgram();let S,g,D=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Oo).join(`
`),S.length>0&&(S+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Oo).join(`
`),g.length>0&&(g+=`
`)):(S=[vm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oo).join(`
`),g=[vm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+_:"",n.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==_r?"#define TONE_MAPPING":"",n.toneMapping!==_r?ft.tonemapping_pars_fragment:"",n.toneMapping!==_r?xM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,vM("linearToOutputTexel",n.outputColorSpace),SM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Oo).join(`
`)),d=Df(d),d=mm(d,n),d=gm(d,n),f=Df(f),f=mm(f,n),f=gm(f,n),d=_m(d),f=_m(f),n.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,g=["#define varying in",n.glslVersion===bp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===bp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const U=D+S+d,C=D+g+f,$=dm(a,a.VERTEX_SHADER,U),z=dm(a,a.FRAGMENT_SHADER,C);a.attachShader(A,$),a.attachShader(A,z),n.index0AttributeName!==void 0?a.bindAttribLocation(A,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(A,0,"position"),a.linkProgram(A);function N(k){if(s.debug.checkShaderErrors){const ue=a.getProgramInfoLog(A).trim(),Q=a.getShaderInfoLog($).trim(),de=a.getShaderInfoLog(z).trim();let he=!0,ie=!0;if(a.getProgramParameter(A,a.LINK_STATUS)===!1)if(he=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,A,$,z);else{const ce=pm(a,$,"vertex"),O=pm(a,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(A,a.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ue+`
`+ce+`
`+O)}else ue!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ue):(Q===""||de==="")&&(ie=!1);ie&&(k.diagnostics={runnable:he,programLog:ue,vertexShader:{log:Q,prefix:S},fragmentShader:{log:de,prefix:g}})}a.deleteShader($),a.deleteShader(z),X=new Al(a,A),P=EM(a,A)}let X;this.getUniforms=function(){return X===void 0&&N(this),X};let P;this.getAttributes=function(){return P===void 0&&N(this),P};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=a.getProgramParameter(A,pM)),R},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=mM++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=$,this.fragmentShader=z,this}let NM=0;class FM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(a)===!1&&(d.add(a),a.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new OM(e),n.set(e,r)),r}}class OM{constructor(e){this.id=NM++,this.code=e,this.usedTimes=0}}function kM(s,e,n,r,a,u,d){const f=new Ym,p=new FM,m=new Set,_=[],v=a.logarithmicDepthBuffer,x=a.vertexTextures;let y=a.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(P){return m.add(P),P===0?"uv":`uv${P}`}function S(P,R,k,ue,Q){const de=ue.fog,he=Q.geometry,ie=P.isMeshStandardMaterial?ue.environment:null,ce=(P.isMeshStandardMaterial?n:e).get(P.envMap||ie),O=ce&&ce.mapping===Ll?ce.image.height:null,ae=T[P.type];P.precision!==null&&(y=a.getMaxPrecision(P.precision),y!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",y,"instead."));const oe=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,I=oe!==void 0?oe.length:0;let ee=0;he.morphAttributes.position!==void 0&&(ee=1),he.morphAttributes.normal!==void 0&&(ee=2),he.morphAttributes.color!==void 0&&(ee=3);let Ne,K,fe,ye;if(ae){const gt=gi[ae];Ne=gt.vertexShader,K=gt.fragmentShader}else Ne=P.vertexShader,K=P.fragmentShader,p.update(P),fe=p.getVertexShaderID(P),ye=p.getFragmentShaderID(P);const ve=s.getRenderTarget(),Ae=s.state.buffers.depth.getReversed(),Le=Q.isInstancedMesh===!0,qe=Q.isBatchedMesh===!0,Et=!!P.map,at=!!P.matcap,Tt=!!ce,V=!!P.aoMap,nn=!!P.lightMap,ct=!!P.bumpMap,lt=!!P.normalMap,je=!!P.displacementMap,St=!!P.emissiveMap,Xe=!!P.metalnessMap,b=!!P.roughnessMap,E=P.anisotropy>0,j=P.clearcoat>0,me=P.dispersion>0,le=P.iridescence>0,re=P.sheen>0,Fe=P.transmission>0,we=E&&!!P.anisotropyMap,Re=j&&!!P.clearcoatMap,Qe=j&&!!P.clearcoatNormalMap,_e=j&&!!P.clearcoatRoughnessMap,Ue=le&&!!P.iridescenceMap,$e=le&&!!P.iridescenceThicknessMap,Je=re&&!!P.sheenColorMap,Oe=re&&!!P.sheenRoughnessMap,st=!!P.specularMap,et=!!P.specularColorMap,Rt=!!P.specularIntensityMap,H=Fe&&!!P.transmissionMap,Ce=Fe&&!!P.thicknessMap,se=!!P.gradientMap,pe=!!P.alphaMap,De=P.alphaTest>0,be=!!P.alphaHash,rt=!!P.extensions;let Ut=_r;P.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Ut=s.toneMapping);const Yt={shaderID:ae,shaderType:P.type,shaderName:P.name,vertexShader:Ne,fragmentShader:K,defines:P.defines,customVertexShaderID:fe,customFragmentShaderID:ye,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:y,batching:qe,batchingColor:qe&&Q._colorsTexture!==null,instancing:Le,instancingColor:Le&&Q.instanceColor!==null,instancingMorph:Le&&Q.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ve===null?s.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:qs,alphaToCoverage:!!P.alphaToCoverage,map:Et,matcap:at,envMap:Tt,envMapMode:Tt&&ce.mapping,envMapCubeUVHeight:O,aoMap:V,lightMap:nn,bumpMap:ct,normalMap:lt,displacementMap:x&&je,emissiveMap:St,normalMapObjectSpace:lt&&P.normalMapType===Pv,normalMapTangentSpace:lt&&P.normalMapType===Hm,metalnessMap:Xe,roughnessMap:b,anisotropy:E,anisotropyMap:we,clearcoat:j,clearcoatMap:Re,clearcoatNormalMap:Qe,clearcoatRoughnessMap:_e,dispersion:me,iridescence:le,iridescenceMap:Ue,iridescenceThicknessMap:$e,sheen:re,sheenColorMap:Je,sheenRoughnessMap:Oe,specularMap:st,specularColorMap:et,specularIntensityMap:Rt,transmission:Fe,transmissionMap:H,thicknessMap:Ce,gradientMap:se,opaque:P.transparent===!1&&P.blending===ks&&P.alphaToCoverage===!1,alphaMap:pe,alphaTest:De,alphaHash:be,combine:P.combine,mapUv:Et&&A(P.map.channel),aoMapUv:V&&A(P.aoMap.channel),lightMapUv:nn&&A(P.lightMap.channel),bumpMapUv:ct&&A(P.bumpMap.channel),normalMapUv:lt&&A(P.normalMap.channel),displacementMapUv:je&&A(P.displacementMap.channel),emissiveMapUv:St&&A(P.emissiveMap.channel),metalnessMapUv:Xe&&A(P.metalnessMap.channel),roughnessMapUv:b&&A(P.roughnessMap.channel),anisotropyMapUv:we&&A(P.anisotropyMap.channel),clearcoatMapUv:Re&&A(P.clearcoatMap.channel),clearcoatNormalMapUv:Qe&&A(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&A(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&A(P.iridescenceMap.channel),iridescenceThicknessMapUv:$e&&A(P.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&A(P.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&A(P.sheenRoughnessMap.channel),specularMapUv:st&&A(P.specularMap.channel),specularColorMapUv:et&&A(P.specularColorMap.channel),specularIntensityMapUv:Rt&&A(P.specularIntensityMap.channel),transmissionMapUv:H&&A(P.transmissionMap.channel),thicknessMapUv:Ce&&A(P.thicknessMap.channel),alphaMapUv:pe&&A(P.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(lt||E),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!he.attributes.uv&&(Et||pe),fog:!!de,useFog:P.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Ae,skinning:Q.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:ee,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:P.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ut,decodeVideoTexture:Et&&P.map.isVideoTexture===!0&&vt.getTransfer(P.map.colorSpace)===bt,decodeVideoTextureEmissive:St&&P.emissiveMap.isVideoTexture===!0&&vt.getTransfer(P.emissiveMap.colorSpace)===bt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Oi,flipSided:P.side===bn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:rt&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&P.extensions.multiDraw===!0||qe)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Yt.vertexUv1s=m.has(1),Yt.vertexUv2s=m.has(2),Yt.vertexUv3s=m.has(3),m.clear(),Yt}function g(P){const R=[];if(P.shaderID?R.push(P.shaderID):(R.push(P.customVertexShaderID),R.push(P.customFragmentShaderID)),P.defines!==void 0)for(const k in P.defines)R.push(k),R.push(P.defines[k]);return P.isRawShaderMaterial===!1&&(D(R,P),U(R,P),R.push(s.outputColorSpace)),R.push(P.customProgramCacheKey),R.join()}function D(P,R){P.push(R.precision),P.push(R.outputColorSpace),P.push(R.envMapMode),P.push(R.envMapCubeUVHeight),P.push(R.mapUv),P.push(R.alphaMapUv),P.push(R.lightMapUv),P.push(R.aoMapUv),P.push(R.bumpMapUv),P.push(R.normalMapUv),P.push(R.displacementMapUv),P.push(R.emissiveMapUv),P.push(R.metalnessMapUv),P.push(R.roughnessMapUv),P.push(R.anisotropyMapUv),P.push(R.clearcoatMapUv),P.push(R.clearcoatNormalMapUv),P.push(R.clearcoatRoughnessMapUv),P.push(R.iridescenceMapUv),P.push(R.iridescenceThicknessMapUv),P.push(R.sheenColorMapUv),P.push(R.sheenRoughnessMapUv),P.push(R.specularMapUv),P.push(R.specularColorMapUv),P.push(R.specularIntensityMapUv),P.push(R.transmissionMapUv),P.push(R.thicknessMapUv),P.push(R.combine),P.push(R.fogExp2),P.push(R.sizeAttenuation),P.push(R.morphTargetsCount),P.push(R.morphAttributeCount),P.push(R.numDirLights),P.push(R.numPointLights),P.push(R.numSpotLights),P.push(R.numSpotLightMaps),P.push(R.numHemiLights),P.push(R.numRectAreaLights),P.push(R.numDirLightShadows),P.push(R.numPointLightShadows),P.push(R.numSpotLightShadows),P.push(R.numSpotLightShadowsWithMaps),P.push(R.numLightProbes),P.push(R.shadowMapType),P.push(R.toneMapping),P.push(R.numClippingPlanes),P.push(R.numClipIntersection),P.push(R.depthPacking)}function U(P,R){f.disableAll(),R.supportsVertexTextures&&f.enable(0),R.instancing&&f.enable(1),R.instancingColor&&f.enable(2),R.instancingMorph&&f.enable(3),R.matcap&&f.enable(4),R.envMap&&f.enable(5),R.normalMapObjectSpace&&f.enable(6),R.normalMapTangentSpace&&f.enable(7),R.clearcoat&&f.enable(8),R.iridescence&&f.enable(9),R.alphaTest&&f.enable(10),R.vertexColors&&f.enable(11),R.vertexAlphas&&f.enable(12),R.vertexUv1s&&f.enable(13),R.vertexUv2s&&f.enable(14),R.vertexUv3s&&f.enable(15),R.vertexTangents&&f.enable(16),R.anisotropy&&f.enable(17),R.alphaHash&&f.enable(18),R.batching&&f.enable(19),R.dispersion&&f.enable(20),R.batchingColor&&f.enable(21),P.push(f.mask),f.disableAll(),R.fog&&f.enable(0),R.useFog&&f.enable(1),R.flatShading&&f.enable(2),R.logarithmicDepthBuffer&&f.enable(3),R.reverseDepthBuffer&&f.enable(4),R.skinning&&f.enable(5),R.morphTargets&&f.enable(6),R.morphNormals&&f.enable(7),R.morphColors&&f.enable(8),R.premultipliedAlpha&&f.enable(9),R.shadowMapEnabled&&f.enable(10),R.doubleSided&&f.enable(11),R.flipSided&&f.enable(12),R.useDepthPacking&&f.enable(13),R.dithering&&f.enable(14),R.transmission&&f.enable(15),R.sheen&&f.enable(16),R.opaque&&f.enable(17),R.pointsUvs&&f.enable(18),R.decodeVideoTexture&&f.enable(19),R.decodeVideoTextureEmissive&&f.enable(20),R.alphaToCoverage&&f.enable(21),P.push(f.mask)}function C(P){const R=T[P.type];let k;if(R){const ue=gi[R];k=y0.clone(ue.uniforms)}else k=P.uniforms;return k}function $(P,R){let k;for(let ue=0,Q=_.length;ue<Q;ue++){const de=_[ue];if(de.cacheKey===R){k=de,++k.usedTimes;break}}return k===void 0&&(k=new IM(s,R,P,u),_.push(k)),k}function z(P){if(--P.usedTimes===0){const R=_.indexOf(P);_[R]=_[_.length-1],_.pop(),P.destroy()}}function N(P){p.remove(P)}function X(){p.dispose()}return{getParameters:S,getProgramCacheKey:g,getUniforms:C,acquireProgram:$,releaseProgram:z,releaseShaderCache:N,programs:_,dispose:X}}function BM(){let s=new WeakMap;function e(d){return s.has(d)}function n(d){let f=s.get(d);return f===void 0&&(f={},s.set(d,f)),f}function r(d){s.delete(d)}function a(d,f,p){s.get(d)[f]=p}function u(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:u}}function zM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function xm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Sm(){const s=[];let e=0;const n=[],r=[],a=[];function u(){e=0,n.length=0,r.length=0,a.length=0}function d(v,x,y,T,A,S){let g=s[e];return g===void 0?(g={id:v.id,object:v,geometry:x,material:y,groupOrder:T,renderOrder:v.renderOrder,z:A,group:S},s[e]=g):(g.id=v.id,g.object=v,g.geometry=x,g.material=y,g.groupOrder=T,g.renderOrder=v.renderOrder,g.z=A,g.group=S),e++,g}function f(v,x,y,T,A,S){const g=d(v,x,y,T,A,S);y.transmission>0?r.push(g):y.transparent===!0?a.push(g):n.push(g)}function p(v,x,y,T,A,S){const g=d(v,x,y,T,A,S);y.transmission>0?r.unshift(g):y.transparent===!0?a.unshift(g):n.unshift(g)}function m(v,x){n.length>1&&n.sort(v||zM),r.length>1&&r.sort(x||xm),a.length>1&&a.sort(x||xm)}function _(){for(let v=e,x=s.length;v<x;v++){const y=s[v];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:r,transparent:a,init:u,push:f,unshift:p,finish:_,sort:m}}function HM(){let s=new WeakMap;function e(r,a){const u=s.get(r);let d;return u===void 0?(d=new Sm,s.set(r,[d])):a>=u.length?(d=new Sm,u.push(d)):d=u[a],d}function n(){s=new WeakMap}return{get:e,dispose:n}}function VM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ne,color:new xt};break;case"SpotLight":n={position:new ne,direction:new ne,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ne,color:new xt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ne,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":n={color:new xt,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return s[e.id]=n,n}}}function GM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let WM=0;function XM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function YM(s){const e=new VM,n=GM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new ne);const a=new ne,u=new Ht,d=new Ht;function f(m){let _=0,v=0,x=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let y=0,T=0,A=0,S=0,g=0,D=0,U=0,C=0,$=0,z=0,N=0;m.sort(XM);for(let P=0,R=m.length;P<R;P++){const k=m[P],ue=k.color,Q=k.intensity,de=k.distance,he=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)_+=ue.r*Q,v+=ue.g*Q,x+=ue.b*Q;else if(k.isLightProbe){for(let ie=0;ie<9;ie++)r.probe[ie].addScaledVector(k.sh.coefficients[ie],Q);N++}else if(k.isDirectionalLight){const ie=e.get(k);if(ie.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const ce=k.shadow,O=n.get(k);O.shadowIntensity=ce.intensity,O.shadowBias=ce.bias,O.shadowNormalBias=ce.normalBias,O.shadowRadius=ce.radius,O.shadowMapSize=ce.mapSize,r.directionalShadow[y]=O,r.directionalShadowMap[y]=he,r.directionalShadowMatrix[y]=k.shadow.matrix,D++}r.directional[y]=ie,y++}else if(k.isSpotLight){const ie=e.get(k);ie.position.setFromMatrixPosition(k.matrixWorld),ie.color.copy(ue).multiplyScalar(Q),ie.distance=de,ie.coneCos=Math.cos(k.angle),ie.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),ie.decay=k.decay,r.spot[A]=ie;const ce=k.shadow;if(k.map&&(r.spotLightMap[$]=k.map,$++,ce.updateMatrices(k),k.castShadow&&z++),r.spotLightMatrix[A]=ce.matrix,k.castShadow){const O=n.get(k);O.shadowIntensity=ce.intensity,O.shadowBias=ce.bias,O.shadowNormalBias=ce.normalBias,O.shadowRadius=ce.radius,O.shadowMapSize=ce.mapSize,r.spotShadow[A]=O,r.spotShadowMap[A]=he,C++}A++}else if(k.isRectAreaLight){const ie=e.get(k);ie.color.copy(ue).multiplyScalar(Q),ie.halfWidth.set(k.width*.5,0,0),ie.halfHeight.set(0,k.height*.5,0),r.rectArea[S]=ie,S++}else if(k.isPointLight){const ie=e.get(k);if(ie.color.copy(k.color).multiplyScalar(k.intensity),ie.distance=k.distance,ie.decay=k.decay,k.castShadow){const ce=k.shadow,O=n.get(k);O.shadowIntensity=ce.intensity,O.shadowBias=ce.bias,O.shadowNormalBias=ce.normalBias,O.shadowRadius=ce.radius,O.shadowMapSize=ce.mapSize,O.shadowCameraNear=ce.camera.near,O.shadowCameraFar=ce.camera.far,r.pointShadow[T]=O,r.pointShadowMap[T]=he,r.pointShadowMatrix[T]=k.shadow.matrix,U++}r.point[T]=ie,T++}else if(k.isHemisphereLight){const ie=e.get(k);ie.skyColor.copy(k.color).multiplyScalar(Q),ie.groundColor.copy(k.groundColor).multiplyScalar(Q),r.hemi[g]=ie,g++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=v,r.ambient[2]=x;const X=r.hash;(X.directionalLength!==y||X.pointLength!==T||X.spotLength!==A||X.rectAreaLength!==S||X.hemiLength!==g||X.numDirectionalShadows!==D||X.numPointShadows!==U||X.numSpotShadows!==C||X.numSpotMaps!==$||X.numLightProbes!==N)&&(r.directional.length=y,r.spot.length=A,r.rectArea.length=S,r.point.length=T,r.hemi.length=g,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=C+$-z,r.spotLightMap.length=$,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=N,X.directionalLength=y,X.pointLength=T,X.spotLength=A,X.rectAreaLength=S,X.hemiLength=g,X.numDirectionalShadows=D,X.numPointShadows=U,X.numSpotShadows=C,X.numSpotMaps=$,X.numLightProbes=N,r.version=WM++)}function p(m,_){let v=0,x=0,y=0,T=0,A=0;const S=_.matrixWorldInverse;for(let g=0,D=m.length;g<D;g++){const U=m[g];if(U.isDirectionalLight){const C=r.directional[v];C.direction.setFromMatrixPosition(U.matrixWorld),a.setFromMatrixPosition(U.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(S),v++}else if(U.isSpotLight){const C=r.spot[y];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(S),C.direction.setFromMatrixPosition(U.matrixWorld),a.setFromMatrixPosition(U.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(S),y++}else if(U.isRectAreaLight){const C=r.rectArea[T];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(S),d.identity(),u.copy(U.matrixWorld),u.premultiply(S),d.extractRotation(u),C.halfWidth.set(U.width*.5,0,0),C.halfHeight.set(0,U.height*.5,0),C.halfWidth.applyMatrix4(d),C.halfHeight.applyMatrix4(d),T++}else if(U.isPointLight){const C=r.point[x];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(S),x++}else if(U.isHemisphereLight){const C=r.hemi[A];C.direction.setFromMatrixPosition(U.matrixWorld),C.direction.transformDirection(S),A++}}}return{setup:f,setupView:p,state:r}}function ym(s){const e=new YM(s),n=[],r=[];function a(_){m.camera=_,n.length=0,r.length=0}function u(_){n.push(_)}function d(_){r.push(_)}function f(){e.setup(n)}function p(_){e.setupView(n,_)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:f,setupLightsView:p,pushLight:u,pushShadow:d}}function jM(s){let e=new WeakMap;function n(a,u=0){const d=e.get(a);let f;return d===void 0?(f=new ym(s),e.set(a,[f])):u>=d.length?(f=new ym(s),d.push(f)):f=d[u],f}function r(){e=new WeakMap}return{get:n,dispose:r}}class qM extends Yo{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Rv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $M extends Yo{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const KM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ZM=`uniform sampler2D shadow_pass;
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
}`;function QM(s,e,n){let r=new Wf;const a=new Ct,u=new Ct,d=new zt,f=new qM({depthPacking:Cv}),p=new $M,m={},_=n.maxTextureSize,v={[vr]:bn,[bn]:vr,[Oi]:Oi},x=new xr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:KM,fragmentShader:ZM}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const T=new Kr;T.setAttribute("position",new vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Gt(T,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rm;let g=this.type;this.render=function(z,N,X){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||z.length===0)return;const P=s.getRenderTarget(),R=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),ue=s.state;ue.setBlending(gr),ue.buffers.color.setClear(1,1,1,1),ue.buffers.depth.setTest(!0),ue.setScissorTest(!1);const Q=g!==Fi&&this.type===Fi,de=g===Fi&&this.type!==Fi;for(let he=0,ie=z.length;he<ie;he++){const ce=z[he],O=ce.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;a.copy(O.mapSize);const ae=O.getFrameExtents();if(a.multiply(ae),u.copy(O.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(u.x=Math.floor(_/ae.x),a.x=u.x*ae.x,O.mapSize.x=u.x),a.y>_&&(u.y=Math.floor(_/ae.y),a.y=u.y*ae.y,O.mapSize.y=u.y)),O.map===null||Q===!0||de===!0){const I=this.type!==Fi?{minFilter:ui,magFilter:ui}:{};O.map!==null&&O.map.dispose(),O.map=new $r(a.x,a.y,I),O.map.texture.name=ce.name+".shadowMap",O.camera.updateProjectionMatrix()}s.setRenderTarget(O.map),s.clear();const oe=O.getViewportCount();for(let I=0;I<oe;I++){const ee=O.getViewport(I);d.set(u.x*ee.x,u.y*ee.y,u.x*ee.z,u.y*ee.w),ue.viewport(d),O.updateMatrices(ce,I),r=O.getFrustum(),C(N,X,O.camera,ce,this.type)}O.isPointLightShadow!==!0&&this.type===Fi&&D(O,X),O.needsUpdate=!1}g=this.type,S.needsUpdate=!1,s.setRenderTarget(P,R,k)};function D(z,N){const X=e.update(A);x.defines.VSM_SAMPLES!==z.blurSamples&&(x.defines.VSM_SAMPLES=z.blurSamples,y.defines.VSM_SAMPLES=z.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new $r(a.x,a.y)),x.uniforms.shadow_pass.value=z.map.texture,x.uniforms.resolution.value=z.mapSize,x.uniforms.radius.value=z.radius,s.setRenderTarget(z.mapPass),s.clear(),s.renderBufferDirect(N,null,X,x,A,null),y.uniforms.shadow_pass.value=z.mapPass.texture,y.uniforms.resolution.value=z.mapSize,y.uniforms.radius.value=z.radius,s.setRenderTarget(z.map),s.clear(),s.renderBufferDirect(N,null,X,y,A,null)}function U(z,N,X,P){let R=null;const k=X.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(k!==void 0)R=k;else if(R=X.isPointLight===!0?p:f,s.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const ue=R.uuid,Q=N.uuid;let de=m[ue];de===void 0&&(de={},m[ue]=de);let he=de[Q];he===void 0&&(he=R.clone(),de[Q]=he,N.addEventListener("dispose",$)),R=he}if(R.visible=N.visible,R.wireframe=N.wireframe,P===Fi?R.side=N.shadowSide!==null?N.shadowSide:N.side:R.side=N.shadowSide!==null?N.shadowSide:v[N.side],R.alphaMap=N.alphaMap,R.alphaTest=N.alphaTest,R.map=N.map,R.clipShadows=N.clipShadows,R.clippingPlanes=N.clippingPlanes,R.clipIntersection=N.clipIntersection,R.displacementMap=N.displacementMap,R.displacementScale=N.displacementScale,R.displacementBias=N.displacementBias,R.wireframeLinewidth=N.wireframeLinewidth,R.linewidth=N.linewidth,X.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const ue=s.properties.get(R);ue.light=X}return R}function C(z,N,X,P,R){if(z.visible===!1)return;if(z.layers.test(N.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&R===Fi)&&(!z.frustumCulled||r.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,z.matrixWorld);const Q=e.update(z),de=z.material;if(Array.isArray(de)){const he=Q.groups;for(let ie=0,ce=he.length;ie<ce;ie++){const O=he[ie],ae=de[O.materialIndex];if(ae&&ae.visible){const oe=U(z,ae,P,R);z.onBeforeShadow(s,z,N,X,Q,oe,O),s.renderBufferDirect(X,null,Q,oe,z,O),z.onAfterShadow(s,z,N,X,Q,oe,O)}}}else if(de.visible){const he=U(z,de,P,R);z.onBeforeShadow(s,z,N,X,Q,he,null),s.renderBufferDirect(X,null,Q,he,z,null),z.onAfterShadow(s,z,N,X,Q,he,null)}}const ue=z.children;for(let Q=0,de=ue.length;Q<de;Q++)C(ue[Q],N,X,P,R)}function $(z){z.target.removeEventListener("dispose",$);for(const X in m){const P=m[X],R=z.target.uuid;R in P&&(P[R].dispose(),delete P[R])}}}const JM={[qc]:$c,[Kc]:Jc,[Zc]:ef,[Hs]:Qc,[$c]:qc,[Jc]:Kc,[ef]:Zc,[Qc]:Hs};function eE(s,e){function n(){let H=!1;const Ce=new zt;let se=null;const pe=new zt(0,0,0,0);return{setMask:function(De){se!==De&&!H&&(s.colorMask(De,De,De,De),se=De)},setLocked:function(De){H=De},setClear:function(De,be,rt,Ut,Yt){Yt===!0&&(De*=Ut,be*=Ut,rt*=Ut),Ce.set(De,be,rt,Ut),pe.equals(Ce)===!1&&(s.clearColor(De,be,rt,Ut),pe.copy(Ce))},reset:function(){H=!1,se=null,pe.set(-1,0,0,0)}}}function r(){let H=!1,Ce=!1,se=null,pe=null,De=null;return{setReversed:function(be){if(Ce!==be){const rt=e.get("EXT_clip_control");Ce?rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.ZERO_TO_ONE_EXT):rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.NEGATIVE_ONE_TO_ONE_EXT);const Ut=De;De=null,this.setClear(Ut)}Ce=be},getReversed:function(){return Ce},setTest:function(be){be?ve(s.DEPTH_TEST):Ae(s.DEPTH_TEST)},setMask:function(be){se!==be&&!H&&(s.depthMask(be),se=be)},setFunc:function(be){if(Ce&&(be=JM[be]),pe!==be){switch(be){case qc:s.depthFunc(s.NEVER);break;case $c:s.depthFunc(s.ALWAYS);break;case Kc:s.depthFunc(s.LESS);break;case Hs:s.depthFunc(s.LEQUAL);break;case Zc:s.depthFunc(s.EQUAL);break;case Qc:s.depthFunc(s.GEQUAL);break;case Jc:s.depthFunc(s.GREATER);break;case ef:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pe=be}},setLocked:function(be){H=be},setClear:function(be){De!==be&&(Ce&&(be=1-be),s.clearDepth(be),De=be)},reset:function(){H=!1,se=null,pe=null,De=null,Ce=!1}}}function a(){let H=!1,Ce=null,se=null,pe=null,De=null,be=null,rt=null,Ut=null,Yt=null;return{setTest:function(gt){H||(gt?ve(s.STENCIL_TEST):Ae(s.STENCIL_TEST))},setMask:function(gt){Ce!==gt&&!H&&(s.stencilMask(gt),Ce=gt)},setFunc:function(gt,Mn,mn){(se!==gt||pe!==Mn||De!==mn)&&(s.stencilFunc(gt,Mn,mn),se=gt,pe=Mn,De=mn)},setOp:function(gt,Mn,mn){(be!==gt||rt!==Mn||Ut!==mn)&&(s.stencilOp(gt,Mn,mn),be=gt,rt=Mn,Ut=mn)},setLocked:function(gt){H=gt},setClear:function(gt){Yt!==gt&&(s.clearStencil(gt),Yt=gt)},reset:function(){H=!1,Ce=null,se=null,pe=null,De=null,be=null,rt=null,Ut=null,Yt=null}}}const u=new n,d=new r,f=new a,p=new WeakMap,m=new WeakMap;let _={},v={},x=new WeakMap,y=[],T=null,A=!1,S=null,g=null,D=null,U=null,C=null,$=null,z=null,N=new xt(0,0,0),X=0,P=!1,R=null,k=null,ue=null,Q=null,de=null;const he=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ie=!1,ce=0;const O=s.getParameter(s.VERSION);O.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(O)[1]),ie=ce>=1):O.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),ie=ce>=2);let ae=null,oe={};const I=s.getParameter(s.SCISSOR_BOX),ee=s.getParameter(s.VIEWPORT),Ne=new zt().fromArray(I),K=new zt().fromArray(ee);function fe(H,Ce,se,pe){const De=new Uint8Array(4),be=s.createTexture();s.bindTexture(H,be),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let rt=0;rt<se;rt++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(Ce,0,s.RGBA,1,1,pe,0,s.RGBA,s.UNSIGNED_BYTE,De):s.texImage2D(Ce+rt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,De);return be}const ye={};ye[s.TEXTURE_2D]=fe(s.TEXTURE_2D,s.TEXTURE_2D,1),ye[s.TEXTURE_CUBE_MAP]=fe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[s.TEXTURE_2D_ARRAY]=fe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ye[s.TEXTURE_3D]=fe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),f.setClear(0),ve(s.DEPTH_TEST),d.setFunc(Hs),ct(!1),lt(Tp),ve(s.CULL_FACE),V(gr);function ve(H){_[H]!==!0&&(s.enable(H),_[H]=!0)}function Ae(H){_[H]!==!1&&(s.disable(H),_[H]=!1)}function Le(H,Ce){return v[H]!==Ce?(s.bindFramebuffer(H,Ce),v[H]=Ce,H===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Ce),H===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Ce),!0):!1}function qe(H,Ce){let se=y,pe=!1;if(H){se=x.get(Ce),se===void 0&&(se=[],x.set(Ce,se));const De=H.textures;if(se.length!==De.length||se[0]!==s.COLOR_ATTACHMENT0){for(let be=0,rt=De.length;be<rt;be++)se[be]=s.COLOR_ATTACHMENT0+be;se.length=De.length,pe=!0}}else se[0]!==s.BACK&&(se[0]=s.BACK,pe=!0);pe&&s.drawBuffers(se)}function Et(H){return T!==H?(s.useProgram(H),T=H,!0):!1}const at={[Gr]:s.FUNC_ADD,[ev]:s.FUNC_SUBTRACT,[tv]:s.FUNC_REVERSE_SUBTRACT};at[nv]=s.MIN,at[iv]=s.MAX;const Tt={[rv]:s.ZERO,[sv]:s.ONE,[ov]:s.SRC_COLOR,[Yc]:s.SRC_ALPHA,[dv]:s.SRC_ALPHA_SATURATE,[cv]:s.DST_COLOR,[lv]:s.DST_ALPHA,[av]:s.ONE_MINUS_SRC_COLOR,[jc]:s.ONE_MINUS_SRC_ALPHA,[fv]:s.ONE_MINUS_DST_COLOR,[uv]:s.ONE_MINUS_DST_ALPHA,[hv]:s.CONSTANT_COLOR,[pv]:s.ONE_MINUS_CONSTANT_COLOR,[mv]:s.CONSTANT_ALPHA,[gv]:s.ONE_MINUS_CONSTANT_ALPHA};function V(H,Ce,se,pe,De,be,rt,Ut,Yt,gt){if(H===gr){A===!0&&(Ae(s.BLEND),A=!1);return}if(A===!1&&(ve(s.BLEND),A=!0),H!==J_){if(H!==S||gt!==P){if((g!==Gr||C!==Gr)&&(s.blendEquation(s.FUNC_ADD),g=Gr,C=Gr),gt)switch(H){case ks:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case wp:s.blendFunc(s.ONE,s.ONE);break;case Ap:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Rp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case ks:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case wp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ap:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Rp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}D=null,U=null,$=null,z=null,N.set(0,0,0),X=0,S=H,P=gt}return}De=De||Ce,be=be||se,rt=rt||pe,(Ce!==g||De!==C)&&(s.blendEquationSeparate(at[Ce],at[De]),g=Ce,C=De),(se!==D||pe!==U||be!==$||rt!==z)&&(s.blendFuncSeparate(Tt[se],Tt[pe],Tt[be],Tt[rt]),D=se,U=pe,$=be,z=rt),(Ut.equals(N)===!1||Yt!==X)&&(s.blendColor(Ut.r,Ut.g,Ut.b,Yt),N.copy(Ut),X=Yt),S=H,P=!1}function nn(H,Ce){H.side===Oi?Ae(s.CULL_FACE):ve(s.CULL_FACE);let se=H.side===bn;Ce&&(se=!se),ct(se),H.blending===ks&&H.transparent===!1?V(gr):V(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),d.setFunc(H.depthFunc),d.setTest(H.depthTest),d.setMask(H.depthWrite),u.setMask(H.colorWrite);const pe=H.stencilWrite;f.setTest(pe),pe&&(f.setMask(H.stencilWriteMask),f.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),f.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),St(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ve(s.SAMPLE_ALPHA_TO_COVERAGE):Ae(s.SAMPLE_ALPHA_TO_COVERAGE)}function ct(H){R!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),R=H)}function lt(H){H!==Z_?(ve(s.CULL_FACE),H!==k&&(H===Tp?s.cullFace(s.BACK):H===Q_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ae(s.CULL_FACE),k=H}function je(H){H!==ue&&(ie&&s.lineWidth(H),ue=H)}function St(H,Ce,se){H?(ve(s.POLYGON_OFFSET_FILL),(Q!==Ce||de!==se)&&(s.polygonOffset(Ce,se),Q=Ce,de=se)):Ae(s.POLYGON_OFFSET_FILL)}function Xe(H){H?ve(s.SCISSOR_TEST):Ae(s.SCISSOR_TEST)}function b(H){H===void 0&&(H=s.TEXTURE0+he-1),ae!==H&&(s.activeTexture(H),ae=H)}function E(H,Ce,se){se===void 0&&(ae===null?se=s.TEXTURE0+he-1:se=ae);let pe=oe[se];pe===void 0&&(pe={type:void 0,texture:void 0},oe[se]=pe),(pe.type!==H||pe.texture!==Ce)&&(ae!==se&&(s.activeTexture(se),ae=se),s.bindTexture(H,Ce||ye[H]),pe.type=H,pe.texture=Ce)}function j(){const H=oe[ae];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function me(){try{s.compressedTexImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function le(){try{s.compressedTexImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function re(){try{s.texSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Fe(){try{s.texSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function we(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Re(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Qe(){try{s.texStorage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function _e(){try{s.texStorage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ue(){try{s.texImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function $e(){try{s.texImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Je(H){Ne.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),Ne.copy(H))}function Oe(H){K.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),K.copy(H))}function st(H,Ce){let se=m.get(Ce);se===void 0&&(se=new WeakMap,m.set(Ce,se));let pe=se.get(H);pe===void 0&&(pe=s.getUniformBlockIndex(Ce,H.name),se.set(H,pe))}function et(H,Ce){const pe=m.get(Ce).get(H);p.get(Ce)!==pe&&(s.uniformBlockBinding(Ce,pe,H.__bindingPointIndex),p.set(Ce,pe))}function Rt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},ae=null,oe={},v={},x=new WeakMap,y=[],T=null,A=!1,S=null,g=null,D=null,U=null,C=null,$=null,z=null,N=new xt(0,0,0),X=0,P=!1,R=null,k=null,ue=null,Q=null,de=null,Ne.set(0,0,s.canvas.width,s.canvas.height),K.set(0,0,s.canvas.width,s.canvas.height),u.reset(),d.reset(),f.reset()}return{buffers:{color:u,depth:d,stencil:f},enable:ve,disable:Ae,bindFramebuffer:Le,drawBuffers:qe,useProgram:Et,setBlending:V,setMaterial:nn,setFlipSided:ct,setCullFace:lt,setLineWidth:je,setPolygonOffset:St,setScissorTest:Xe,activeTexture:b,bindTexture:E,unbindTexture:j,compressedTexImage2D:me,compressedTexImage3D:le,texImage2D:Ue,texImage3D:$e,updateUBOMapping:st,uniformBlockBinding:et,texStorage2D:Qe,texStorage3D:_e,texSubImage2D:re,texSubImage3D:Fe,compressedTexSubImage2D:we,compressedTexSubImage3D:Re,scissor:Je,viewport:Oe,reset:Rt}}function Mm(s,e,n,r){const a=tE(r);switch(n){case Im:return s*e;case Fm:return s*e;case Om:return s*e*2;case km:return s*e/a.components*a.byteLength;case Bf:return s*e/a.components*a.byteLength;case Bm:return s*e*2/a.components*a.byteLength;case zf:return s*e*2/a.components*a.byteLength;case Nm:return s*e*3/a.components*a.byteLength;case li:return s*e*4/a.components*a.byteLength;case Hf:return s*e*4/a.components*a.byteLength;case yl:case Ml:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case El:case Tl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case af:case uf:return Math.max(s,16)*Math.max(e,8)/4;case of:case lf:return Math.max(s,8)*Math.max(e,8)/2;case cf:case ff:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case df:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case hf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case pf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case mf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case gf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case _f:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case vf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case xf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Sf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case yf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Mf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ef:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Tf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case wf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Af:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case wl:case Rf:case Cf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case zm:case Pf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case bf:case Lf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function tE(s){switch(s){case Hi:case Lm:return{byteLength:1,components:1};case Ho:case Dm:case Go:return{byteLength:2,components:1};case Of:case kf:return{byteLength:2,components:4};case qr:case Ff:case ki:return{byteLength:4,components:1};case Um:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function nE(s,e,n,r,a,u,d){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Ct,_=new WeakMap;let v;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(b,E){return y?new OffscreenCanvas(b,E):bl("canvas")}function A(b,E,j){let me=1;const le=Xe(b);if((le.width>j||le.height>j)&&(me=j/Math.max(le.width,le.height)),me<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const re=Math.floor(me*le.width),Fe=Math.floor(me*le.height);v===void 0&&(v=T(re,Fe));const we=E?T(re,Fe):v;return we.width=re,we.height=Fe,we.getContext("2d").drawImage(b,0,0,re,Fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+re+"x"+Fe+")."),we}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),b;return b}function S(b){return b.generateMipmaps}function g(b){s.generateMipmap(b)}function D(b){return b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?s.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function U(b,E,j,me,le=!1){if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let re=E;if(E===s.RED&&(j===s.FLOAT&&(re=s.R32F),j===s.HALF_FLOAT&&(re=s.R16F),j===s.UNSIGNED_BYTE&&(re=s.R8)),E===s.RED_INTEGER&&(j===s.UNSIGNED_BYTE&&(re=s.R8UI),j===s.UNSIGNED_SHORT&&(re=s.R16UI),j===s.UNSIGNED_INT&&(re=s.R32UI),j===s.BYTE&&(re=s.R8I),j===s.SHORT&&(re=s.R16I),j===s.INT&&(re=s.R32I)),E===s.RG&&(j===s.FLOAT&&(re=s.RG32F),j===s.HALF_FLOAT&&(re=s.RG16F),j===s.UNSIGNED_BYTE&&(re=s.RG8)),E===s.RG_INTEGER&&(j===s.UNSIGNED_BYTE&&(re=s.RG8UI),j===s.UNSIGNED_SHORT&&(re=s.RG16UI),j===s.UNSIGNED_INT&&(re=s.RG32UI),j===s.BYTE&&(re=s.RG8I),j===s.SHORT&&(re=s.RG16I),j===s.INT&&(re=s.RG32I)),E===s.RGB_INTEGER&&(j===s.UNSIGNED_BYTE&&(re=s.RGB8UI),j===s.UNSIGNED_SHORT&&(re=s.RGB16UI),j===s.UNSIGNED_INT&&(re=s.RGB32UI),j===s.BYTE&&(re=s.RGB8I),j===s.SHORT&&(re=s.RGB16I),j===s.INT&&(re=s.RGB32I)),E===s.RGBA_INTEGER&&(j===s.UNSIGNED_BYTE&&(re=s.RGBA8UI),j===s.UNSIGNED_SHORT&&(re=s.RGBA16UI),j===s.UNSIGNED_INT&&(re=s.RGBA32UI),j===s.BYTE&&(re=s.RGBA8I),j===s.SHORT&&(re=s.RGBA16I),j===s.INT&&(re=s.RGBA32I)),E===s.RGB&&j===s.UNSIGNED_INT_5_9_9_9_REV&&(re=s.RGB9_E5),E===s.RGBA){const Fe=le?Dl:vt.getTransfer(me);j===s.FLOAT&&(re=s.RGBA32F),j===s.HALF_FLOAT&&(re=s.RGBA16F),j===s.UNSIGNED_BYTE&&(re=Fe===bt?s.SRGB8_ALPHA8:s.RGBA8),j===s.UNSIGNED_SHORT_4_4_4_4&&(re=s.RGBA4),j===s.UNSIGNED_SHORT_5_5_5_1&&(re=s.RGB5_A1)}return(re===s.R16F||re===s.R32F||re===s.RG16F||re===s.RG32F||re===s.RGBA16F||re===s.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function C(b,E){let j;return b?E===null||E===qr||E===Ws?j=s.DEPTH24_STENCIL8:E===ki?j=s.DEPTH32F_STENCIL8:E===Ho&&(j=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===qr||E===Ws?j=s.DEPTH_COMPONENT24:E===ki?j=s.DEPTH_COMPONENT32F:E===Ho&&(j=s.DEPTH_COMPONENT16),j}function $(b,E){return S(b)===!0||b.isFramebufferTexture&&b.minFilter!==ui&&b.minFilter!==_i?Math.log2(Math.max(E.width,E.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?E.mipmaps.length:1}function z(b){const E=b.target;E.removeEventListener("dispose",z),X(E),E.isVideoTexture&&_.delete(E)}function N(b){const E=b.target;E.removeEventListener("dispose",N),R(E)}function X(b){const E=r.get(b);if(E.__webglInit===void 0)return;const j=b.source,me=x.get(j);if(me){const le=me[E.__cacheKey];le.usedTimes--,le.usedTimes===0&&P(b),Object.keys(me).length===0&&x.delete(j)}r.remove(b)}function P(b){const E=r.get(b);s.deleteTexture(E.__webglTexture);const j=b.source,me=x.get(j);delete me[E.__cacheKey],d.memory.textures--}function R(b){const E=r.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),r.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(E.__webglFramebuffer[me]))for(let le=0;le<E.__webglFramebuffer[me].length;le++)s.deleteFramebuffer(E.__webglFramebuffer[me][le]);else s.deleteFramebuffer(E.__webglFramebuffer[me]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[me])}else{if(Array.isArray(E.__webglFramebuffer))for(let me=0;me<E.__webglFramebuffer.length;me++)s.deleteFramebuffer(E.__webglFramebuffer[me]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let me=0;me<E.__webglColorRenderbuffer.length;me++)E.__webglColorRenderbuffer[me]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[me]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const j=b.textures;for(let me=0,le=j.length;me<le;me++){const re=r.get(j[me]);re.__webglTexture&&(s.deleteTexture(re.__webglTexture),d.memory.textures--),r.remove(j[me])}r.remove(b)}let k=0;function ue(){k=0}function Q(){const b=k;return b>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+a.maxTextures),k+=1,b}function de(b){const E=[];return E.push(b.wrapS),E.push(b.wrapT),E.push(b.wrapR||0),E.push(b.magFilter),E.push(b.minFilter),E.push(b.anisotropy),E.push(b.internalFormat),E.push(b.format),E.push(b.type),E.push(b.generateMipmaps),E.push(b.premultiplyAlpha),E.push(b.flipY),E.push(b.unpackAlignment),E.push(b.colorSpace),E.join()}function he(b,E){const j=r.get(b);if(b.isVideoTexture&&je(b),b.isRenderTargetTexture===!1&&b.version>0&&j.__version!==b.version){const me=b.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(j,b,E);return}}n.bindTexture(s.TEXTURE_2D,j.__webglTexture,s.TEXTURE0+E)}function ie(b,E){const j=r.get(b);if(b.version>0&&j.__version!==b.version){K(j,b,E);return}n.bindTexture(s.TEXTURE_2D_ARRAY,j.__webglTexture,s.TEXTURE0+E)}function ce(b,E){const j=r.get(b);if(b.version>0&&j.__version!==b.version){K(j,b,E);return}n.bindTexture(s.TEXTURE_3D,j.__webglTexture,s.TEXTURE0+E)}function O(b,E){const j=r.get(b);if(b.version>0&&j.__version!==b.version){fe(j,b,E);return}n.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture,s.TEXTURE0+E)}const ae={[rf]:s.REPEAT,[Xr]:s.CLAMP_TO_EDGE,[sf]:s.MIRRORED_REPEAT},oe={[ui]:s.NEAREST,[Av]:s.NEAREST_MIPMAP_NEAREST,[el]:s.NEAREST_MIPMAP_LINEAR,[_i]:s.LINEAR,[_c]:s.LINEAR_MIPMAP_NEAREST,[Yr]:s.LINEAR_MIPMAP_LINEAR},I={[bv]:s.NEVER,[Fv]:s.ALWAYS,[Lv]:s.LESS,[Vm]:s.LEQUAL,[Dv]:s.EQUAL,[Nv]:s.GEQUAL,[Uv]:s.GREATER,[Iv]:s.NOTEQUAL};function ee(b,E){if(E.type===ki&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===_i||E.magFilter===_c||E.magFilter===el||E.magFilter===Yr||E.minFilter===_i||E.minFilter===_c||E.minFilter===el||E.minFilter===Yr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(b,s.TEXTURE_WRAP_S,ae[E.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,ae[E.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,ae[E.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,oe[E.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,oe[E.minFilter]),E.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,I[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ui||E.minFilter!==el&&E.minFilter!==Yr||E.type===ki&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");s.texParameterf(b,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,a.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function Ne(b,E){let j=!1;b.__webglInit===void 0&&(b.__webglInit=!0,E.addEventListener("dispose",z));const me=E.source;let le=x.get(me);le===void 0&&(le={},x.set(me,le));const re=de(E);if(re!==b.__cacheKey){le[re]===void 0&&(le[re]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,j=!0),le[re].usedTimes++;const Fe=le[b.__cacheKey];Fe!==void 0&&(le[b.__cacheKey].usedTimes--,Fe.usedTimes===0&&P(E)),b.__cacheKey=re,b.__webglTexture=le[re].texture}return j}function K(b,E,j){let me=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(me=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(me=s.TEXTURE_3D);const le=Ne(b,E),re=E.source;n.bindTexture(me,b.__webglTexture,s.TEXTURE0+j);const Fe=r.get(re);if(re.version!==Fe.__version||le===!0){n.activeTexture(s.TEXTURE0+j);const we=vt.getPrimaries(vt.workingColorSpace),Re=E.colorSpace===mr?null:vt.getPrimaries(E.colorSpace),Qe=E.colorSpace===mr||we===Re?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);let _e=A(E.image,!1,a.maxTextureSize);_e=St(E,_e);const Ue=u.convert(E.format,E.colorSpace),$e=u.convert(E.type);let Je=U(E.internalFormat,Ue,$e,E.colorSpace,E.isVideoTexture);ee(me,E);let Oe;const st=E.mipmaps,et=E.isVideoTexture!==!0,Rt=Fe.__version===void 0||le===!0,H=re.dataReady,Ce=$(E,_e);if(E.isDepthTexture)Je=C(E.format===Xs,E.type),Rt&&(et?n.texStorage2D(s.TEXTURE_2D,1,Je,_e.width,_e.height):n.texImage2D(s.TEXTURE_2D,0,Je,_e.width,_e.height,0,Ue,$e,null));else if(E.isDataTexture)if(st.length>0){et&&Rt&&n.texStorage2D(s.TEXTURE_2D,Ce,Je,st[0].width,st[0].height);for(let se=0,pe=st.length;se<pe;se++)Oe=st[se],et?H&&n.texSubImage2D(s.TEXTURE_2D,se,0,0,Oe.width,Oe.height,Ue,$e,Oe.data):n.texImage2D(s.TEXTURE_2D,se,Je,Oe.width,Oe.height,0,Ue,$e,Oe.data);E.generateMipmaps=!1}else et?(Rt&&n.texStorage2D(s.TEXTURE_2D,Ce,Je,_e.width,_e.height),H&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,_e.width,_e.height,Ue,$e,_e.data)):n.texImage2D(s.TEXTURE_2D,0,Je,_e.width,_e.height,0,Ue,$e,_e.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){et&&Rt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,Je,st[0].width,st[0].height,_e.depth);for(let se=0,pe=st.length;se<pe;se++)if(Oe=st[se],E.format!==li)if(Ue!==null)if(et){if(H)if(E.layerUpdates.size>0){const De=Mm(Oe.width,Oe.height,E.format,E.type);for(const be of E.layerUpdates){const rt=Oe.data.subarray(be*De/Oe.data.BYTES_PER_ELEMENT,(be+1)*De/Oe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,be,Oe.width,Oe.height,1,Ue,rt)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,Oe.width,Oe.height,_e.depth,Ue,Oe.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,se,Je,Oe.width,Oe.height,_e.depth,0,Oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else et?H&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,Oe.width,Oe.height,_e.depth,Ue,$e,Oe.data):n.texImage3D(s.TEXTURE_2D_ARRAY,se,Je,Oe.width,Oe.height,_e.depth,0,Ue,$e,Oe.data)}else{et&&Rt&&n.texStorage2D(s.TEXTURE_2D,Ce,Je,st[0].width,st[0].height);for(let se=0,pe=st.length;se<pe;se++)Oe=st[se],E.format!==li?Ue!==null?et?H&&n.compressedTexSubImage2D(s.TEXTURE_2D,se,0,0,Oe.width,Oe.height,Ue,Oe.data):n.compressedTexImage2D(s.TEXTURE_2D,se,Je,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?H&&n.texSubImage2D(s.TEXTURE_2D,se,0,0,Oe.width,Oe.height,Ue,$e,Oe.data):n.texImage2D(s.TEXTURE_2D,se,Je,Oe.width,Oe.height,0,Ue,$e,Oe.data)}else if(E.isDataArrayTexture)if(et){if(Rt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,Je,_e.width,_e.height,_e.depth),H)if(E.layerUpdates.size>0){const se=Mm(_e.width,_e.height,E.format,E.type);for(const pe of E.layerUpdates){const De=_e.data.subarray(pe*se/_e.data.BYTES_PER_ELEMENT,(pe+1)*se/_e.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,pe,_e.width,_e.height,1,Ue,$e,De)}E.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Ue,$e,_e.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Je,_e.width,_e.height,_e.depth,0,Ue,$e,_e.data);else if(E.isData3DTexture)et?(Rt&&n.texStorage3D(s.TEXTURE_3D,Ce,Je,_e.width,_e.height,_e.depth),H&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Ue,$e,_e.data)):n.texImage3D(s.TEXTURE_3D,0,Je,_e.width,_e.height,_e.depth,0,Ue,$e,_e.data);else if(E.isFramebufferTexture){if(Rt)if(et)n.texStorage2D(s.TEXTURE_2D,Ce,Je,_e.width,_e.height);else{let se=_e.width,pe=_e.height;for(let De=0;De<Ce;De++)n.texImage2D(s.TEXTURE_2D,De,Je,se,pe,0,Ue,$e,null),se>>=1,pe>>=1}}else if(st.length>0){if(et&&Rt){const se=Xe(st[0]);n.texStorage2D(s.TEXTURE_2D,Ce,Je,se.width,se.height)}for(let se=0,pe=st.length;se<pe;se++)Oe=st[se],et?H&&n.texSubImage2D(s.TEXTURE_2D,se,0,0,Ue,$e,Oe):n.texImage2D(s.TEXTURE_2D,se,Je,Ue,$e,Oe);E.generateMipmaps=!1}else if(et){if(Rt){const se=Xe(_e);n.texStorage2D(s.TEXTURE_2D,Ce,Je,se.width,se.height)}H&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Ue,$e,_e)}else n.texImage2D(s.TEXTURE_2D,0,Je,Ue,$e,_e);S(E)&&g(me),Fe.__version=re.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function fe(b,E,j){if(E.image.length!==6)return;const me=Ne(b,E),le=E.source;n.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+j);const re=r.get(le);if(le.version!==re.__version||me===!0){n.activeTexture(s.TEXTURE0+j);const Fe=vt.getPrimaries(vt.workingColorSpace),we=E.colorSpace===mr?null:vt.getPrimaries(E.colorSpace),Re=E.colorSpace===mr||Fe===we?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const Qe=E.isCompressedTexture||E.image[0].isCompressedTexture,_e=E.image[0]&&E.image[0].isDataTexture,Ue=[];for(let pe=0;pe<6;pe++)!Qe&&!_e?Ue[pe]=A(E.image[pe],!0,a.maxCubemapSize):Ue[pe]=_e?E.image[pe].image:E.image[pe],Ue[pe]=St(E,Ue[pe]);const $e=Ue[0],Je=u.convert(E.format,E.colorSpace),Oe=u.convert(E.type),st=U(E.internalFormat,Je,Oe,E.colorSpace),et=E.isVideoTexture!==!0,Rt=re.__version===void 0||me===!0,H=le.dataReady;let Ce=$(E,$e);ee(s.TEXTURE_CUBE_MAP,E);let se;if(Qe){et&&Rt&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,st,$e.width,$e.height);for(let pe=0;pe<6;pe++){se=Ue[pe].mipmaps;for(let De=0;De<se.length;De++){const be=se[De];E.format!==li?Je!==null?et?H&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De,0,0,be.width,be.height,Je,be.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De,st,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):et?H&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De,0,0,be.width,be.height,Je,Oe,be.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De,st,be.width,be.height,0,Je,Oe,be.data)}}}else{if(se=E.mipmaps,et&&Rt){se.length>0&&Ce++;const pe=Xe(Ue[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,st,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(_e){et?H&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Ue[pe].width,Ue[pe].height,Je,Oe,Ue[pe].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,st,Ue[pe].width,Ue[pe].height,0,Je,Oe,Ue[pe].data);for(let De=0;De<se.length;De++){const rt=se[De].image[pe].image;et?H&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De+1,0,0,rt.width,rt.height,Je,Oe,rt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De+1,st,rt.width,rt.height,0,Je,Oe,rt.data)}}else{et?H&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Je,Oe,Ue[pe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,st,Je,Oe,Ue[pe]);for(let De=0;De<se.length;De++){const be=se[De];et?H&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De+1,0,0,Je,Oe,be.image[pe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De+1,st,Je,Oe,be.image[pe])}}}S(E)&&g(s.TEXTURE_CUBE_MAP),re.__version=le.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function ye(b,E,j,me,le,re){const Fe=u.convert(j.format,j.colorSpace),we=u.convert(j.type),Re=U(j.internalFormat,Fe,we,j.colorSpace),Qe=r.get(E),_e=r.get(j);if(_e.__renderTarget=E,!Qe.__hasExternalTextures){const Ue=Math.max(1,E.width>>re),$e=Math.max(1,E.height>>re);le===s.TEXTURE_3D||le===s.TEXTURE_2D_ARRAY?n.texImage3D(le,re,Re,Ue,$e,E.depth,0,Fe,we,null):n.texImage2D(le,re,Re,Ue,$e,0,Fe,we,null)}n.bindFramebuffer(s.FRAMEBUFFER,b),lt(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,le,_e.__webglTexture,0,ct(E)):(le===s.TEXTURE_2D||le>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,me,le,_e.__webglTexture,re),n.bindFramebuffer(s.FRAMEBUFFER,null)}function ve(b,E,j){if(s.bindRenderbuffer(s.RENDERBUFFER,b),E.depthBuffer){const me=E.depthTexture,le=me&&me.isDepthTexture?me.type:null,re=C(E.stencilBuffer,le),Fe=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,we=ct(E);lt(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,we,re,E.width,E.height):j?s.renderbufferStorageMultisample(s.RENDERBUFFER,we,re,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,re,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Fe,s.RENDERBUFFER,b)}else{const me=E.textures;for(let le=0;le<me.length;le++){const re=me[le],Fe=u.convert(re.format,re.colorSpace),we=u.convert(re.type),Re=U(re.internalFormat,Fe,we,re.colorSpace),Qe=ct(E);j&&lt(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Qe,Re,E.width,E.height):lt(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Qe,Re,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Re,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ae(b,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,b),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=r.get(E.depthTexture);me.__renderTarget=E,(!me.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),he(E.depthTexture,0);const le=me.__webglTexture,re=ct(E);if(E.depthTexture.format===Bs)lt(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,le,0,re):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,le,0);else if(E.depthTexture.format===Xs)lt(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,le,0,re):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function Le(b){const E=r.get(b),j=b.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==b.depthTexture){const me=b.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),me){const le=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,me.removeEventListener("dispose",le)};me.addEventListener("dispose",le),E.__depthDisposeCallback=le}E.__boundDepthTexture=me}if(b.depthTexture&&!E.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");Ae(E.__webglFramebuffer,b)}else if(j){E.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[me]),E.__webglDepthbuffer[me]===void 0)E.__webglDepthbuffer[me]=s.createRenderbuffer(),ve(E.__webglDepthbuffer[me],b,!1);else{const le=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,re=E.__webglDepthbuffer[me];s.bindRenderbuffer(s.RENDERBUFFER,re),s.framebufferRenderbuffer(s.FRAMEBUFFER,le,s.RENDERBUFFER,re)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),ve(E.__webglDepthbuffer,b,!1);else{const me=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,le),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,le)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function qe(b,E,j){const me=r.get(b);E!==void 0&&ye(me.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),j!==void 0&&Le(b)}function Et(b){const E=b.texture,j=r.get(b),me=r.get(E);b.addEventListener("dispose",N);const le=b.textures,re=b.isWebGLCubeRenderTarget===!0,Fe=le.length>1;if(Fe||(me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture()),me.__version=E.version,d.memory.textures++),re){j.__webglFramebuffer=[];for(let we=0;we<6;we++)if(E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer[we]=[];for(let Re=0;Re<E.mipmaps.length;Re++)j.__webglFramebuffer[we][Re]=s.createFramebuffer()}else j.__webglFramebuffer[we]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer=[];for(let we=0;we<E.mipmaps.length;we++)j.__webglFramebuffer[we]=s.createFramebuffer()}else j.__webglFramebuffer=s.createFramebuffer();if(Fe)for(let we=0,Re=le.length;we<Re;we++){const Qe=r.get(le[we]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=s.createTexture(),d.memory.textures++)}if(b.samples>0&&lt(b)===!1){j.__webglMultisampledFramebuffer=s.createFramebuffer(),j.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let we=0;we<le.length;we++){const Re=le[we];j.__webglColorRenderbuffer[we]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,j.__webglColorRenderbuffer[we]);const Qe=u.convert(Re.format,Re.colorSpace),_e=u.convert(Re.type),Ue=U(Re.internalFormat,Qe,_e,Re.colorSpace,b.isXRRenderTarget===!0),$e=ct(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,$e,Ue,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,j.__webglColorRenderbuffer[we])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&(j.__webglDepthRenderbuffer=s.createRenderbuffer(),ve(j.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(re){n.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),ee(s.TEXTURE_CUBE_MAP,E);for(let we=0;we<6;we++)if(E.mipmaps&&E.mipmaps.length>0)for(let Re=0;Re<E.mipmaps.length;Re++)ye(j.__webglFramebuffer[we][Re],b,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,Re);else ye(j.__webglFramebuffer[we],b,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);S(E)&&g(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Fe){for(let we=0,Re=le.length;we<Re;we++){const Qe=le[we],_e=r.get(Qe);n.bindTexture(s.TEXTURE_2D,_e.__webglTexture),ee(s.TEXTURE_2D,Qe),ye(j.__webglFramebuffer,b,Qe,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,0),S(Qe)&&g(s.TEXTURE_2D)}n.unbindTexture()}else{let we=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(we=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(we,me.__webglTexture),ee(we,E),E.mipmaps&&E.mipmaps.length>0)for(let Re=0;Re<E.mipmaps.length;Re++)ye(j.__webglFramebuffer[Re],b,E,s.COLOR_ATTACHMENT0,we,Re);else ye(j.__webglFramebuffer,b,E,s.COLOR_ATTACHMENT0,we,0);S(E)&&g(we),n.unbindTexture()}b.depthBuffer&&Le(b)}function at(b){const E=b.textures;for(let j=0,me=E.length;j<me;j++){const le=E[j];if(S(le)){const re=D(b),Fe=r.get(le).__webglTexture;n.bindTexture(re,Fe),g(re),n.unbindTexture()}}}const Tt=[],V=[];function nn(b){if(b.samples>0){if(lt(b)===!1){const E=b.textures,j=b.width,me=b.height;let le=s.COLOR_BUFFER_BIT;const re=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Fe=r.get(b),we=E.length>1;if(we)for(let Re=0;Re<E.length;Re++)n.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let Re=0;Re<E.length;Re++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(le|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(le|=s.STENCIL_BUFFER_BIT)),we){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Fe.__webglColorRenderbuffer[Re]);const Qe=r.get(E[Re]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Qe,0)}s.blitFramebuffer(0,0,j,me,0,0,j,me,le,s.NEAREST),p===!0&&(Tt.length=0,V.length=0,Tt.push(s.COLOR_ATTACHMENT0+Re),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Tt.push(re),V.push(re),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,V)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Tt))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),we)for(let Re=0;Re<E.length;Re++){n.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,Fe.__webglColorRenderbuffer[Re]);const Qe=r.get(E[Re]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.TEXTURE_2D,Qe,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&p){const E=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function ct(b){return Math.min(a.maxSamples,b.samples)}function lt(b){const E=r.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function je(b){const E=d.render.frame;_.get(b)!==E&&(_.set(b,E),b.update())}function St(b,E){const j=b.colorSpace,me=b.format,le=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||j!==qs&&j!==mr&&(vt.getTransfer(j)===bt?(me!==li||le!==Hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),E}function Xe(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(m.width=b.naturalWidth||b.width,m.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(m.width=b.displayWidth,m.height=b.displayHeight):(m.width=b.width,m.height=b.height),m}this.allocateTextureUnit=Q,this.resetTextureUnits=ue,this.setTexture2D=he,this.setTexture2DArray=ie,this.setTexture3D=ce,this.setTextureCube=O,this.rebindTextures=qe,this.setupRenderTarget=Et,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=nn,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=lt}function iE(s,e){function n(r,a=mr){let u;const d=vt.getTransfer(a);if(r===Hi)return s.UNSIGNED_BYTE;if(r===Of)return s.UNSIGNED_SHORT_4_4_4_4;if(r===kf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Um)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Lm)return s.BYTE;if(r===Dm)return s.SHORT;if(r===Ho)return s.UNSIGNED_SHORT;if(r===Ff)return s.INT;if(r===qr)return s.UNSIGNED_INT;if(r===ki)return s.FLOAT;if(r===Go)return s.HALF_FLOAT;if(r===Im)return s.ALPHA;if(r===Nm)return s.RGB;if(r===li)return s.RGBA;if(r===Fm)return s.LUMINANCE;if(r===Om)return s.LUMINANCE_ALPHA;if(r===Bs)return s.DEPTH_COMPONENT;if(r===Xs)return s.DEPTH_STENCIL;if(r===km)return s.RED;if(r===Bf)return s.RED_INTEGER;if(r===Bm)return s.RG;if(r===zf)return s.RG_INTEGER;if(r===Hf)return s.RGBA_INTEGER;if(r===yl||r===Ml||r===El||r===Tl)if(d===bt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===yl)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ml)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===El)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Tl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===yl)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ml)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===El)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Tl)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===of||r===af||r===lf||r===uf)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===of)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===af)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===lf)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===uf)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===cf||r===ff||r===df)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===cf||r===ff)return d===bt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===df)return d===bt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===hf||r===pf||r===mf||r===gf||r===_f||r===vf||r===xf||r===Sf||r===yf||r===Mf||r===Ef||r===Tf||r===wf||r===Af)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===hf)return d===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===pf)return d===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===mf)return d===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===gf)return d===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===_f)return d===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===vf)return d===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===xf)return d===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Sf)return d===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===yf)return d===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Mf)return d===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ef)return d===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Tf)return d===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===wf)return d===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Af)return d===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===wl||r===Rf||r===Cf)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===wl)return d===bt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Rf)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Cf)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===zm||r===Pf||r===bf||r===Lf)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===wl)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Pf)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===bf)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Lf)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ws?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}class rE extends $n{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Os extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sE={type:"move"};class Wc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Os,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Os,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Os,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,u=null,d=null;const f=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const A of e.hand.values()){const S=n.getJointPose(A,r),g=this._getHandJoint(m,A);S!==null&&(g.matrix.fromArray(S.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=S.radius),g.visible=S!==null}const _=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],x=_.position.distanceTo(v.position),y=.02,T=.005;m.inputState.pinching&&x>y+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=y-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&u!==null&&(a=u),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(sE)))}return f!==null&&(f.visible=a!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Os;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const oE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,aE=`
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

}`;class lE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new Ln,u=e.properties.get(a);u.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new xr({vertexShader:oE,fragmentShader:aE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Gt(new js(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class uE extends $s{constructor(e,n){super();const r=this;let a=null,u=1,d=null,f="local-floor",p=1,m=null,_=null,v=null,x=null,y=null,T=null;const A=new lE,S=n.getContextAttributes();let g=null,D=null;const U=[],C=[],$=new Ct;let z=null;const N=new $n;N.viewport=new zt;const X=new $n;X.viewport=new zt;const P=[N,X],R=new rE;let k=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let fe=U[K];return fe===void 0&&(fe=new Wc,U[K]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(K){let fe=U[K];return fe===void 0&&(fe=new Wc,U[K]=fe),fe.getGripSpace()},this.getHand=function(K){let fe=U[K];return fe===void 0&&(fe=new Wc,U[K]=fe),fe.getHandSpace()};function Q(K){const fe=C.indexOf(K.inputSource);if(fe===-1)return;const ye=U[fe];ye!==void 0&&(ye.update(K.inputSource,K.frame,m||d),ye.dispatchEvent({type:K.type,data:K.inputSource}))}function de(){a.removeEventListener("select",Q),a.removeEventListener("selectstart",Q),a.removeEventListener("selectend",Q),a.removeEventListener("squeeze",Q),a.removeEventListener("squeezestart",Q),a.removeEventListener("squeezeend",Q),a.removeEventListener("end",de),a.removeEventListener("inputsourceschange",he);for(let K=0;K<U.length;K++){const fe=C[K];fe!==null&&(C[K]=null,U[K].disconnect(fe))}k=null,ue=null,A.reset(),e.setRenderTarget(g),y=null,x=null,v=null,a=null,D=null,Ne.stop(),r.isPresenting=!1,e.setPixelRatio(z),e.setSize($.width,$.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){u=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){f=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(K){m=K},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return v},this.getFrame=function(){return T},this.getSession=function(){return a},this.setSession=async function(K){if(a=K,a!==null){if(g=e.getRenderTarget(),a.addEventListener("select",Q),a.addEventListener("selectstart",Q),a.addEventListener("selectend",Q),a.addEventListener("squeeze",Q),a.addEventListener("squeezestart",Q),a.addEventListener("squeezeend",Q),a.addEventListener("end",de),a.addEventListener("inputsourceschange",he),S.xrCompatible!==!0&&await n.makeXRCompatible(),z=e.getPixelRatio(),e.getSize($),a.renderState.layers===void 0){const fe={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(a,n,fe),a.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),D=new $r(y.framebufferWidth,y.framebufferHeight,{format:li,type:Hi,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let fe=null,ye=null,ve=null;S.depth&&(ve=S.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,fe=S.stencil?Xs:Bs,ye=S.stencil?Ws:qr);const Ae={colorFormat:n.RGBA8,depthFormat:ve,scaleFactor:u};v=new XRWebGLBinding(a,n),x=v.createProjectionLayer(Ae),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),D=new $r(x.textureWidth,x.textureHeight,{format:li,type:Hi,depthTexture:new tg(x.textureWidth,x.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await a.requestReferenceSpace(f),Ne.setContext(a),Ne.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function he(K){for(let fe=0;fe<K.removed.length;fe++){const ye=K.removed[fe],ve=C.indexOf(ye);ve>=0&&(C[ve]=null,U[ve].disconnect(ye))}for(let fe=0;fe<K.added.length;fe++){const ye=K.added[fe];let ve=C.indexOf(ye);if(ve===-1){for(let Le=0;Le<U.length;Le++)if(Le>=C.length){C.push(ye),ve=Le;break}else if(C[Le]===null){C[Le]=ye,ve=Le;break}if(ve===-1)break}const Ae=U[ve];Ae&&Ae.connect(ye)}}const ie=new ne,ce=new ne;function O(K,fe,ye){ie.setFromMatrixPosition(fe.matrixWorld),ce.setFromMatrixPosition(ye.matrixWorld);const ve=ie.distanceTo(ce),Ae=fe.projectionMatrix.elements,Le=ye.projectionMatrix.elements,qe=Ae[14]/(Ae[10]-1),Et=Ae[14]/(Ae[10]+1),at=(Ae[9]+1)/Ae[5],Tt=(Ae[9]-1)/Ae[5],V=(Ae[8]-1)/Ae[0],nn=(Le[8]+1)/Le[0],ct=qe*V,lt=qe*nn,je=ve/(-V+nn),St=je*-V;if(fe.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(St),K.translateZ(je),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ae[10]===-1)K.projectionMatrix.copy(fe.projectionMatrix),K.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const Xe=qe+je,b=Et+je,E=ct-St,j=lt+(ve-St),me=at*Et/b*Xe,le=Tt*Et/b*Xe;K.projectionMatrix.makePerspective(E,j,me,le,Xe,b),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ae(K,fe){fe===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(fe.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(a===null)return;let fe=K.near,ye=K.far;A.texture!==null&&(A.depthNear>0&&(fe=A.depthNear),A.depthFar>0&&(ye=A.depthFar)),R.near=X.near=N.near=fe,R.far=X.far=N.far=ye,(k!==R.near||ue!==R.far)&&(a.updateRenderState({depthNear:R.near,depthFar:R.far}),k=R.near,ue=R.far),N.layers.mask=K.layers.mask|2,X.layers.mask=K.layers.mask|4,R.layers.mask=N.layers.mask|X.layers.mask;const ve=K.parent,Ae=R.cameras;ae(R,ve);for(let Le=0;Le<Ae.length;Le++)ae(Ae[Le],ve);Ae.length===2?O(R,N,X):R.projectionMatrix.copy(N.projectionMatrix),oe(K,R,ve)};function oe(K,fe,ye){ye===null?K.matrix.copy(fe.matrixWorld):(K.matrix.copy(ye.matrixWorld),K.matrix.invert(),K.matrix.multiply(fe.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(fe.projectionMatrix),K.projectionMatrixInverse.copy(fe.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Vo*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(x===null&&y===null))return p},this.setFoveation=function(K){p=K,x!==null&&(x.fixedFoveation=K),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=K)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(R)};let I=null;function ee(K,fe){if(_=fe.getViewerPose(m||d),T=fe,_!==null){const ye=_.views;y!==null&&(e.setRenderTargetFramebuffer(D,y.framebuffer),e.setRenderTarget(D));let ve=!1;ye.length!==R.cameras.length&&(R.cameras.length=0,ve=!0);for(let Le=0;Le<ye.length;Le++){const qe=ye[Le];let Et=null;if(y!==null)Et=y.getViewport(qe);else{const Tt=v.getViewSubImage(x,qe);Et=Tt.viewport,Le===0&&(e.setRenderTargetTextures(D,Tt.colorTexture,x.ignoreDepthValues?void 0:Tt.depthStencilTexture),e.setRenderTarget(D))}let at=P[Le];at===void 0&&(at=new $n,at.layers.enable(Le),at.viewport=new zt,P[Le]=at),at.matrix.fromArray(qe.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(qe.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(Et.x,Et.y,Et.width,Et.height),Le===0&&(R.matrix.copy(at.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ve===!0&&R.cameras.push(at)}const Ae=a.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Le=v.getDepthInformation(ye[0]);Le&&Le.isValid&&Le.texture&&A.init(e,Le,a.renderState)}}for(let ye=0;ye<U.length;ye++){const ve=C[ye],Ae=U[ye];ve!==null&&Ae!==void 0&&Ae.update(ve,fe,m||d)}I&&I(K,fe),fe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:fe}),T=null}const Ne=new Jm;Ne.setAnimationLoop(ee),this.setAnimationLoop=function(K){I=K},this.dispose=function(){}}}const Br=new xi,cE=new Ht;function fE(s,e){function n(S,g){S.matrixAutoUpdate===!0&&S.updateMatrix(),g.value.copy(S.matrix)}function r(S,g){g.color.getRGB(S.fogColor.value,Km(s)),g.isFog?(S.fogNear.value=g.near,S.fogFar.value=g.far):g.isFogExp2&&(S.fogDensity.value=g.density)}function a(S,g,D,U,C){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(S,g):g.isMeshToonMaterial?(u(S,g),v(S,g)):g.isMeshPhongMaterial?(u(S,g),_(S,g)):g.isMeshStandardMaterial?(u(S,g),x(S,g),g.isMeshPhysicalMaterial&&y(S,g,C)):g.isMeshMatcapMaterial?(u(S,g),T(S,g)):g.isMeshDepthMaterial?u(S,g):g.isMeshDistanceMaterial?(u(S,g),A(S,g)):g.isMeshNormalMaterial?u(S,g):g.isLineBasicMaterial?(d(S,g),g.isLineDashedMaterial&&f(S,g)):g.isPointsMaterial?p(S,g,D,U):g.isSpriteMaterial?m(S,g):g.isShadowMaterial?(S.color.value.copy(g.color),S.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(S,g){S.opacity.value=g.opacity,g.color&&S.diffuse.value.copy(g.color),g.emissive&&S.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(S.map.value=g.map,n(g.map,S.mapTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,n(g.alphaMap,S.alphaMapTransform)),g.bumpMap&&(S.bumpMap.value=g.bumpMap,n(g.bumpMap,S.bumpMapTransform),S.bumpScale.value=g.bumpScale,g.side===bn&&(S.bumpScale.value*=-1)),g.normalMap&&(S.normalMap.value=g.normalMap,n(g.normalMap,S.normalMapTransform),S.normalScale.value.copy(g.normalScale),g.side===bn&&S.normalScale.value.negate()),g.displacementMap&&(S.displacementMap.value=g.displacementMap,n(g.displacementMap,S.displacementMapTransform),S.displacementScale.value=g.displacementScale,S.displacementBias.value=g.displacementBias),g.emissiveMap&&(S.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,S.emissiveMapTransform)),g.specularMap&&(S.specularMap.value=g.specularMap,n(g.specularMap,S.specularMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest);const D=e.get(g),U=D.envMap,C=D.envMapRotation;U&&(S.envMap.value=U,Br.copy(C),Br.x*=-1,Br.y*=-1,Br.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),S.envMapRotation.value.setFromMatrix4(cE.makeRotationFromEuler(Br)),S.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=g.reflectivity,S.ior.value=g.ior,S.refractionRatio.value=g.refractionRatio),g.lightMap&&(S.lightMap.value=g.lightMap,S.lightMapIntensity.value=g.lightMapIntensity,n(g.lightMap,S.lightMapTransform)),g.aoMap&&(S.aoMap.value=g.aoMap,S.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,S.aoMapTransform))}function d(S,g){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,g.map&&(S.map.value=g.map,n(g.map,S.mapTransform))}function f(S,g){S.dashSize.value=g.dashSize,S.totalSize.value=g.dashSize+g.gapSize,S.scale.value=g.scale}function p(S,g,D,U){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,S.size.value=g.size*D,S.scale.value=U*.5,g.map&&(S.map.value=g.map,n(g.map,S.uvTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,n(g.alphaMap,S.alphaMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest)}function m(S,g){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,S.rotation.value=g.rotation,g.map&&(S.map.value=g.map,n(g.map,S.mapTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,n(g.alphaMap,S.alphaMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest)}function _(S,g){S.specular.value.copy(g.specular),S.shininess.value=Math.max(g.shininess,1e-4)}function v(S,g){g.gradientMap&&(S.gradientMap.value=g.gradientMap)}function x(S,g){S.metalness.value=g.metalness,g.metalnessMap&&(S.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,S.metalnessMapTransform)),S.roughness.value=g.roughness,g.roughnessMap&&(S.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,S.roughnessMapTransform)),g.envMap&&(S.envMapIntensity.value=g.envMapIntensity)}function y(S,g,D){S.ior.value=g.ior,g.sheen>0&&(S.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),S.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(S.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,S.sheenColorMapTransform)),g.sheenRoughnessMap&&(S.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,S.sheenRoughnessMapTransform))),g.clearcoat>0&&(S.clearcoat.value=g.clearcoat,S.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(S.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,S.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(S.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===bn&&S.clearcoatNormalScale.value.negate())),g.dispersion>0&&(S.dispersion.value=g.dispersion),g.iridescence>0&&(S.iridescence.value=g.iridescence,S.iridescenceIOR.value=g.iridescenceIOR,S.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(S.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,S.iridescenceMapTransform)),g.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),g.transmission>0&&(S.transmission.value=g.transmission,S.transmissionSamplerMap.value=D.texture,S.transmissionSamplerSize.value.set(D.width,D.height),g.transmissionMap&&(S.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,S.transmissionMapTransform)),S.thickness.value=g.thickness,g.thicknessMap&&(S.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=g.attenuationDistance,S.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(S.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(S.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=g.specularIntensity,S.specularColor.value.copy(g.specularColor),g.specularColorMap&&(S.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,S.specularColorMapTransform)),g.specularIntensityMap&&(S.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,S.specularIntensityMapTransform))}function T(S,g){g.matcap&&(S.matcap.value=g.matcap)}function A(S,g){const D=e.get(g).light;S.referencePosition.value.setFromMatrixPosition(D.matrixWorld),S.nearDistance.value=D.shadow.camera.near,S.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function dE(s,e,n,r){let a={},u={},d=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(D,U){const C=U.program;r.uniformBlockBinding(D,C)}function m(D,U){let C=a[D.id];C===void 0&&(T(D),C=_(D),a[D.id]=C,D.addEventListener("dispose",S));const $=U.program;r.updateUBOMapping(D,$);const z=e.render.frame;u[D.id]!==z&&(x(D),u[D.id]=z)}function _(D){const U=v();D.__bindingPointIndex=U;const C=s.createBuffer(),$=D.__size,z=D.usage;return s.bindBuffer(s.UNIFORM_BUFFER,C),s.bufferData(s.UNIFORM_BUFFER,$,z),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,U,C),C}function v(){for(let D=0;D<f;D++)if(d.indexOf(D)===-1)return d.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(D){const U=a[D.id],C=D.uniforms,$=D.__cache;s.bindBuffer(s.UNIFORM_BUFFER,U);for(let z=0,N=C.length;z<N;z++){const X=Array.isArray(C[z])?C[z]:[C[z]];for(let P=0,R=X.length;P<R;P++){const k=X[P];if(y(k,z,P,$)===!0){const ue=k.__offset,Q=Array.isArray(k.value)?k.value:[k.value];let de=0;for(let he=0;he<Q.length;he++){const ie=Q[he],ce=A(ie);typeof ie=="number"||typeof ie=="boolean"?(k.__data[0]=ie,s.bufferSubData(s.UNIFORM_BUFFER,ue+de,k.__data)):ie.isMatrix3?(k.__data[0]=ie.elements[0],k.__data[1]=ie.elements[1],k.__data[2]=ie.elements[2],k.__data[3]=0,k.__data[4]=ie.elements[3],k.__data[5]=ie.elements[4],k.__data[6]=ie.elements[5],k.__data[7]=0,k.__data[8]=ie.elements[6],k.__data[9]=ie.elements[7],k.__data[10]=ie.elements[8],k.__data[11]=0):(ie.toArray(k.__data,de),de+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ue,k.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(D,U,C,$){const z=D.value,N=U+"_"+C;if($[N]===void 0)return typeof z=="number"||typeof z=="boolean"?$[N]=z:$[N]=z.clone(),!0;{const X=$[N];if(typeof z=="number"||typeof z=="boolean"){if(X!==z)return $[N]=z,!0}else if(X.equals(z)===!1)return X.copy(z),!0}return!1}function T(D){const U=D.uniforms;let C=0;const $=16;for(let N=0,X=U.length;N<X;N++){const P=Array.isArray(U[N])?U[N]:[U[N]];for(let R=0,k=P.length;R<k;R++){const ue=P[R],Q=Array.isArray(ue.value)?ue.value:[ue.value];for(let de=0,he=Q.length;de<he;de++){const ie=Q[de],ce=A(ie),O=C%$,ae=O%ce.boundary,oe=O+ae;C+=ae,oe!==0&&$-oe<ce.storage&&(C+=$-oe),ue.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),ue.__offset=C,C+=ce.storage}}}const z=C%$;return z>0&&(C+=$-z),D.__size=C,D.__cache={},this}function A(D){const U={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(U.boundary=4,U.storage=4):D.isVector2?(U.boundary=8,U.storage=8):D.isVector3||D.isColor?(U.boundary=16,U.storage=12):D.isVector4?(U.boundary=16,U.storage=16):D.isMatrix3?(U.boundary=48,U.storage=48):D.isMatrix4?(U.boundary=64,U.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),U}function S(D){const U=D.target;U.removeEventListener("dispose",S);const C=d.indexOf(U.__bindingPointIndex);d.splice(C,1),s.deleteBuffer(a[U.id]),delete a[U.id],delete u[U.id]}function g(){for(const D in a)s.deleteBuffer(a[D]);d=[],a={},u={}}return{bind:p,update:m,dispose:g}}class hE{constructor(e={}){const{canvas:n=e0(),context:r=null,depth:a=!0,stencil:u=!1,alpha:d=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=d;const T=new Uint32Array(4),A=new Int32Array(4);let S=null,g=null;const D=[],U=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=jn,this.toneMapping=_r,this.toneMappingExposure=1;const C=this;let $=!1,z=0,N=0,X=null,P=-1,R=null;const k=new zt,ue=new zt;let Q=null;const de=new xt(0);let he=0,ie=n.width,ce=n.height,O=1,ae=null,oe=null;const I=new zt(0,0,ie,ce),ee=new zt(0,0,ie,ce);let Ne=!1;const K=new Wf;let fe=!1,ye=!1;const ve=new Ht,Ae=new Ht,Le=new ne,qe=new zt,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let at=!1;function Tt(){return X===null?O:1}let V=r;function nn(w,G){return n.getContext(w,G)}try{const w={alpha:!0,depth:a,stencil:u,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Nf}`),n.addEventListener("webglcontextlost",pe,!1),n.addEventListener("webglcontextrestored",De,!1),n.addEventListener("webglcontextcreationerror",be,!1),V===null){const G="webgl2";if(V=nn(G,w),V===null)throw nn(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ct,lt,je,St,Xe,b,E,j,me,le,re,Fe,we,Re,Qe,_e,Ue,$e,Je,Oe,st,et,Rt,H;function Ce(){ct=new vy(V),ct.init(),et=new iE(V,ct),lt=new dy(V,ct,e,et),je=new eE(V,ct),lt.reverseDepthBuffer&&x&&je.buffers.depth.setReversed(!0),St=new yy(V),Xe=new BM,b=new nE(V,ct,je,Xe,lt,et,St),E=new py(C),j=new _y(C),me=new C0(V),Rt=new cy(V,me),le=new xy(V,me,St,Rt),re=new Ey(V,le,me,St),Je=new My(V,lt,b),_e=new hy(Xe),Fe=new kM(C,E,j,ct,lt,Rt,_e),we=new fE(C,Xe),Re=new HM,Qe=new jM(ct),$e=new uy(C,E,j,je,re,y,p),Ue=new QM(C,re,lt),H=new dE(V,St,lt,je),Oe=new fy(V,ct,St),st=new Sy(V,ct,St),St.programs=Fe.programs,C.capabilities=lt,C.extensions=ct,C.properties=Xe,C.renderLists=Re,C.shadowMap=Ue,C.state=je,C.info=St}Ce();const se=new uE(C,V);this.xr=se,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const w=ct.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ct.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(w){w!==void 0&&(O=w,this.setSize(ie,ce,!1))},this.getSize=function(w){return w.set(ie,ce)},this.setSize=function(w,G,J=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ie=w,ce=G,n.width=Math.floor(w*O),n.height=Math.floor(G*O),J===!0&&(n.style.width=w+"px",n.style.height=G+"px"),this.setViewport(0,0,w,G)},this.getDrawingBufferSize=function(w){return w.set(ie*O,ce*O).floor()},this.setDrawingBufferSize=function(w,G,J){ie=w,ce=G,O=J,n.width=Math.floor(w*J),n.height=Math.floor(G*J),this.setViewport(0,0,w,G)},this.getCurrentViewport=function(w){return w.copy(k)},this.getViewport=function(w){return w.copy(I)},this.setViewport=function(w,G,J,te){w.isVector4?I.set(w.x,w.y,w.z,w.w):I.set(w,G,J,te),je.viewport(k.copy(I).multiplyScalar(O).round())},this.getScissor=function(w){return w.copy(ee)},this.setScissor=function(w,G,J,te){w.isVector4?ee.set(w.x,w.y,w.z,w.w):ee.set(w,G,J,te),je.scissor(ue.copy(ee).multiplyScalar(O).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(w){je.setScissorTest(Ne=w)},this.setOpaqueSort=function(w){ae=w},this.setTransparentSort=function(w){oe=w},this.getClearColor=function(w){return w.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor.apply($e,arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha.apply($e,arguments)},this.clear=function(w=!0,G=!0,J=!0){let te=0;if(w){let W=!1;if(X!==null){const Te=X.texture.format;W=Te===Hf||Te===zf||Te===Bf}if(W){const Te=X.texture.type,Me=Te===Hi||Te===qr||Te===Ho||Te===Ws||Te===Of||Te===kf,Ve=$e.getClearColor(),ze=$e.getClearAlpha(),tt=Ve.r,it=Ve.g,Ge=Ve.b;Me?(T[0]=tt,T[1]=it,T[2]=Ge,T[3]=ze,V.clearBufferuiv(V.COLOR,0,T)):(A[0]=tt,A[1]=it,A[2]=Ge,A[3]=ze,V.clearBufferiv(V.COLOR,0,A))}else te|=V.COLOR_BUFFER_BIT}G&&(te|=V.DEPTH_BUFFER_BIT),J&&(te|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",pe,!1),n.removeEventListener("webglcontextrestored",De,!1),n.removeEventListener("webglcontextcreationerror",be,!1),Re.dispose(),Qe.dispose(),Xe.dispose(),E.dispose(),j.dispose(),re.dispose(),Rt.dispose(),H.dispose(),Fe.dispose(),se.dispose(),se.removeEventListener("sessionstart",Zr),se.removeEventListener("sessionend",Vi),Si.stop()};function pe(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),$=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),$=!1;const w=St.autoReset,G=Ue.enabled,J=Ue.autoUpdate,te=Ue.needsUpdate,W=Ue.type;Ce(),St.autoReset=w,Ue.enabled=G,Ue.autoUpdate=J,Ue.needsUpdate=te,Ue.type=W}function be(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function rt(w){const G=w.target;G.removeEventListener("dispose",rt),Ut(G)}function Ut(w){Yt(w),Xe.remove(w)}function Yt(w){const G=Xe.get(w).programs;G!==void 0&&(G.forEach(function(J){Fe.releaseProgram(J)}),w.isShaderMaterial&&Fe.releaseShaderCache(w))}this.renderBufferDirect=function(w,G,J,te,W,Te){G===null&&(G=Et);const Me=W.isMesh&&W.matrixWorld.determinant()<0,Ve=Ko(w,G,J,te,W);je.setMaterial(te,Me);let ze=J.index,tt=1;if(te.wireframe===!0){if(ze=le.getWireframeAttribute(J),ze===void 0)return;tt=2}const it=J.drawRange,Ge=J.attributes.position;let pt=it.start*tt,wt=(it.start+it.count)*tt;Te!==null&&(pt=Math.max(pt,Te.start*tt),wt=Math.min(wt,(Te.start+Te.count)*tt)),ze!==null?(pt=Math.max(pt,0),wt=Math.min(wt,ze.count)):Ge!=null&&(pt=Math.max(pt,0),wt=Math.min(wt,Ge.count));const ht=wt-pt;if(ht<0||ht===1/0)return;Rt.setup(W,te,Ve,J,ze);let on,ot=Oe;if(ze!==null&&(on=me.get(ze),ot=st,ot.setIndex(on)),W.isMesh)te.wireframe===!0?(je.setLineWidth(te.wireframeLinewidth*Tt()),ot.setMode(V.LINES)):ot.setMode(V.TRIANGLES);else if(W.isLine){let Ye=te.linewidth;Ye===void 0&&(Ye=1),je.setLineWidth(Ye*Tt()),W.isLineSegments?ot.setMode(V.LINES):W.isLineLoop?ot.setMode(V.LINE_LOOP):ot.setMode(V.LINE_STRIP)}else W.isPoints?ot.setMode(V.POINTS):W.isSprite&&ot.setMode(V.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)ot.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(ct.get("WEBGL_multi_draw"))ot.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Ye=W._multiDrawStarts,Kn=W._multiDrawCounts,yt=W._multiDrawCount,an=ze?me.get(ze).bytesPerElement:1,Zn=Xe.get(te).currentProgram.getUniforms();for(let jt=0;jt<yt;jt++)Zn.setValue(V,"_gl_DrawID",jt),ot.render(Ye[jt]/an,Kn[jt])}else if(W.isInstancedMesh)ot.renderInstances(pt,ht,W.count);else if(J.isInstancedBufferGeometry){const Ye=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Kn=Math.min(J.instanceCount,Ye);ot.renderInstances(pt,ht,Kn)}else ot.render(pt,ht)};function gt(w,G,J){w.transparent===!0&&w.side===Oi&&w.forceSinglePass===!1?(w.side=bn,w.needsUpdate=!0,Qr(w,G,J),w.side=vr,w.needsUpdate=!0,Qr(w,G,J),w.side=Oi):Qr(w,G,J)}this.compile=function(w,G,J=null){J===null&&(J=w),g=Qe.get(J),g.init(G),U.push(g),J.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),w!==J&&w.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),g.setupLights();const te=new Set;return w.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Te=W.material;if(Te)if(Array.isArray(Te))for(let Me=0;Me<Te.length;Me++){const Ve=Te[Me];gt(Ve,J,W),te.add(Ve)}else gt(Te,J,W),te.add(Te)}),U.pop(),g=null,te},this.compileAsync=function(w,G,J=null){const te=this.compile(w,G,J);return new Promise(W=>{function Te(){if(te.forEach(function(Me){Xe.get(Me).currentProgram.isReady()&&te.delete(Me)}),te.size===0){W(w);return}setTimeout(Te,10)}ct.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Mn=null;function mn(w){Mn&&Mn(w)}function Zr(){Si.stop()}function Vi(){Si.start()}const Si=new Jm;Si.setAnimationLoop(mn),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(w){Mn=w,se.setAnimationLoop(w),w===null?Si.stop():Si.start()},se.addEventListener("sessionstart",Zr),se.addEventListener("sessionend",Vi),this.render=function(w,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if($===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(G),G=se.getCamera()),w.isScene===!0&&w.onBeforeRender(C,w,G,X),g=Qe.get(w,U.length),g.init(G),U.push(g),Ae.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),K.setFromProjectionMatrix(Ae),ye=this.localClippingEnabled,fe=_e.init(this.clippingPlanes,ye),S=Re.get(w,D.length),S.init(),D.push(S),se.enabled===!0&&se.isPresenting===!0){const Te=C.xr.getDepthSensingMesh();Te!==null&&yi(Te,G,-1/0,C.sortObjects)}yi(w,G,0,C.sortObjects),S.finish(),C.sortObjects===!0&&S.sort(ae,oe),at=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,at&&$e.addToRenderList(S,w),this.info.render.frame++,fe===!0&&_e.beginShadows();const J=g.state.shadowsArray;Ue.render(J,w,G),fe===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset();const te=S.opaque,W=S.transmissive;if(g.setupLights(),G.isArrayCamera){const Te=G.cameras;if(W.length>0)for(let Me=0,Ve=Te.length;Me<Ve;Me++){const ze=Te[Me];yr(te,W,w,ze)}at&&$e.render(w);for(let Me=0,Ve=Te.length;Me<Ve;Me++){const ze=Te[Me];Sr(S,w,ze,ze.viewport)}}else W.length>0&&yr(te,W,w,G),at&&$e.render(w),Sr(S,w,G);X!==null&&(b.updateMultisampleRenderTarget(X),b.updateRenderTargetMipmap(X)),w.isScene===!0&&w.onAfterRender(C,w,G),Rt.resetDefaultState(),P=-1,R=null,U.pop(),U.length>0?(g=U[U.length-1],fe===!0&&_e.setGlobalState(C.clippingPlanes,g.state.camera)):g=null,D.pop(),D.length>0?S=D[D.length-1]:S=null};function yi(w,G,J,te){if(w.visible===!1)return;if(w.layers.test(G.layers)){if(w.isGroup)J=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(G);else if(w.isLight)g.pushLight(w),w.castShadow&&g.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||K.intersectsSprite(w)){te&&qe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ae);const Me=re.update(w),Ve=w.material;Ve.visible&&S.push(w,Me,Ve,J,qe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||K.intersectsObject(w))){const Me=re.update(w),Ve=w.material;if(te&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),qe.copy(w.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),qe.copy(Me.boundingSphere.center)),qe.applyMatrix4(w.matrixWorld).applyMatrix4(Ae)),Array.isArray(Ve)){const ze=Me.groups;for(let tt=0,it=ze.length;tt<it;tt++){const Ge=ze[tt],pt=Ve[Ge.materialIndex];pt&&pt.visible&&S.push(w,Me,pt,J,qe.z,Ge)}}else Ve.visible&&S.push(w,Me,Ve,J,qe.z,null)}}const Te=w.children;for(let Me=0,Ve=Te.length;Me<Ve;Me++)yi(Te[Me],G,J,te)}function Sr(w,G,J,te){const W=w.opaque,Te=w.transmissive,Me=w.transparent;g.setupLightsView(J),fe===!0&&_e.setGlobalState(C.clippingPlanes,J),te&&je.viewport(k.copy(te)),W.length>0&&Gi(W,G,J),Te.length>0&&Gi(Te,G,J),Me.length>0&&Gi(Me,G,J),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function yr(w,G,J,te){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[te.id]===void 0&&(g.state.transmissionRenderTarget[te.id]=new $r(1,1,{generateMipmaps:!0,type:ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float")?Go:Hi,minFilter:Yr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:vt.workingColorSpace}));const Te=g.state.transmissionRenderTarget[te.id],Me=te.viewport||k;Te.setSize(Me.z,Me.w);const Ve=C.getRenderTarget();C.setRenderTarget(Te),C.getClearColor(de),he=C.getClearAlpha(),he<1&&C.setClearColor(16777215,.5),C.clear(),at&&$e.render(J);const ze=C.toneMapping;C.toneMapping=_r;const tt=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),g.setupLightsView(te),fe===!0&&_e.setGlobalState(C.clippingPlanes,te),Gi(w,J,te),b.updateMultisampleRenderTarget(Te),b.updateRenderTargetMipmap(Te),ct.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let Ge=0,pt=G.length;Ge<pt;Ge++){const wt=G[Ge],ht=wt.object,on=wt.geometry,ot=wt.material,Ye=wt.group;if(ot.side===Oi&&ht.layers.test(te.layers)){const Kn=ot.side;ot.side=bn,ot.needsUpdate=!0,qo(ht,J,te,on,ot,Ye),ot.side=Kn,ot.needsUpdate=!0,it=!0}}it===!0&&(b.updateMultisampleRenderTarget(Te),b.updateRenderTargetMipmap(Te))}C.setRenderTarget(Ve),C.setClearColor(de,he),tt!==void 0&&(te.viewport=tt),C.toneMapping=ze}function Gi(w,G,J){const te=G.isScene===!0?G.overrideMaterial:null;for(let W=0,Te=w.length;W<Te;W++){const Me=w[W],Ve=Me.object,ze=Me.geometry,tt=te===null?Me.material:te,it=Me.group;Ve.layers.test(J.layers)&&qo(Ve,G,J,ze,tt,it)}}function qo(w,G,J,te,W,Te){w.onBeforeRender(C,G,J,te,W,Te),w.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),W.onBeforeRender(C,G,J,te,w,Te),W.transparent===!0&&W.side===Oi&&W.forceSinglePass===!1?(W.side=bn,W.needsUpdate=!0,C.renderBufferDirect(J,G,te,W,w,Te),W.side=vr,W.needsUpdate=!0,C.renderBufferDirect(J,G,te,W,w,Te),W.side=Oi):C.renderBufferDirect(J,G,te,W,w,Te),w.onAfterRender(C,G,J,te,W,Te)}function Qr(w,G,J){G.isScene!==!0&&(G=Et);const te=Xe.get(w),W=g.state.lights,Te=g.state.shadowsArray,Me=W.state.version,Ve=Fe.getParameters(w,W.state,Te,G,J),ze=Fe.getProgramCacheKey(Ve);let tt=te.programs;te.environment=w.isMeshStandardMaterial?G.environment:null,te.fog=G.fog,te.envMap=(w.isMeshStandardMaterial?j:E).get(w.envMap||te.environment),te.envMapRotation=te.environment!==null&&w.envMap===null?G.environmentRotation:w.envMapRotation,tt===void 0&&(w.addEventListener("dispose",rt),tt=new Map,te.programs=tt);let it=tt.get(ze);if(it!==void 0){if(te.currentProgram===it&&te.lightsStateVersion===Me)return ci(w,Ve),it}else Ve.uniforms=Fe.getUniforms(w),w.onBeforeCompile(Ve,C),it=Fe.acquireProgram(Ve,ze),tt.set(ze,it),te.uniforms=Ve.uniforms;const Ge=te.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ge.clippingPlanes=_e.uniform),ci(w,Ve),te.needsLights=Il(w),te.lightsStateVersion=Me,te.needsLights&&(Ge.ambientLightColor.value=W.state.ambient,Ge.lightProbe.value=W.state.probe,Ge.directionalLights.value=W.state.directional,Ge.directionalLightShadows.value=W.state.directionalShadow,Ge.spotLights.value=W.state.spot,Ge.spotLightShadows.value=W.state.spotShadow,Ge.rectAreaLights.value=W.state.rectArea,Ge.ltc_1.value=W.state.rectAreaLTC1,Ge.ltc_2.value=W.state.rectAreaLTC2,Ge.pointLights.value=W.state.point,Ge.pointLightShadows.value=W.state.pointShadow,Ge.hemisphereLights.value=W.state.hemi,Ge.directionalShadowMap.value=W.state.directionalShadowMap,Ge.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ge.spotShadowMap.value=W.state.spotShadowMap,Ge.spotLightMatrix.value=W.state.spotLightMatrix,Ge.spotLightMap.value=W.state.spotLightMap,Ge.pointShadowMap.value=W.state.pointShadowMap,Ge.pointShadowMatrix.value=W.state.pointShadowMatrix),te.currentProgram=it,te.uniformsList=null,it}function $o(w){if(w.uniformsList===null){const G=w.currentProgram.getUniforms();w.uniformsList=Al.seqWithValue(G.seq,w.uniforms)}return w.uniformsList}function ci(w,G){const J=Xe.get(w);J.outputColorSpace=G.outputColorSpace,J.batching=G.batching,J.batchingColor=G.batchingColor,J.instancing=G.instancing,J.instancingColor=G.instancingColor,J.instancingMorph=G.instancingMorph,J.skinning=G.skinning,J.morphTargets=G.morphTargets,J.morphNormals=G.morphNormals,J.morphColors=G.morphColors,J.morphTargetsCount=G.morphTargetsCount,J.numClippingPlanes=G.numClippingPlanes,J.numIntersection=G.numClipIntersection,J.vertexAlphas=G.vertexAlphas,J.vertexTangents=G.vertexTangents,J.toneMapping=G.toneMapping}function Ko(w,G,J,te,W){G.isScene!==!0&&(G=Et),b.resetTextureUnits();const Te=G.fog,Me=te.isMeshStandardMaterial?G.environment:null,Ve=X===null?C.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:qs,ze=(te.isMeshStandardMaterial?j:E).get(te.envMap||Me),tt=te.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,it=!!J.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Ge=!!J.morphAttributes.position,pt=!!J.morphAttributes.normal,wt=!!J.morphAttributes.color;let ht=_r;te.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(ht=C.toneMapping);const on=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ot=on!==void 0?on.length:0,Ye=Xe.get(te),Kn=g.state.lights;if(fe===!0&&(ye===!0||w!==R)){const gn=w===R&&te.id===P;_e.setState(te,w,gn)}let yt=!1;te.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Kn.state.version||Ye.outputColorSpace!==Ve||W.isBatchedMesh&&Ye.batching===!1||!W.isBatchedMesh&&Ye.batching===!0||W.isBatchedMesh&&Ye.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Ye.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Ye.instancing===!1||!W.isInstancedMesh&&Ye.instancing===!0||W.isSkinnedMesh&&Ye.skinning===!1||!W.isSkinnedMesh&&Ye.skinning===!0||W.isInstancedMesh&&Ye.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ye.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ye.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ye.instancingMorph===!1&&W.morphTexture!==null||Ye.envMap!==ze||te.fog===!0&&Ye.fog!==Te||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==_e.numPlanes||Ye.numIntersection!==_e.numIntersection)||Ye.vertexAlphas!==tt||Ye.vertexTangents!==it||Ye.morphTargets!==Ge||Ye.morphNormals!==pt||Ye.morphColors!==wt||Ye.toneMapping!==ht||Ye.morphTargetsCount!==ot)&&(yt=!0):(yt=!0,Ye.__version=te.version);let an=Ye.currentProgram;yt===!0&&(an=Qr(te,G,W));let Zn=!1,jt=!1,fi=!1;const Lt=an.getUniforms(),kn=Ye.uniforms;if(je.useProgram(an.program)&&(Zn=!0,jt=!0,fi=!0),te.id!==P&&(P=te.id,jt=!0),Zn||R!==w){je.buffers.depth.getReversed()?(ve.copy(w.projectionMatrix),n0(ve),i0(ve),Lt.setValue(V,"projectionMatrix",ve)):Lt.setValue(V,"projectionMatrix",w.projectionMatrix),Lt.setValue(V,"viewMatrix",w.matrixWorldInverse);const Bn=Lt.map.cameraPosition;Bn!==void 0&&Bn.setValue(V,Le.setFromMatrixPosition(w.matrixWorld)),lt.logarithmicDepthBuffer&&Lt.setValue(V,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Lt.setValue(V,"isOrthographic",w.isOrthographicCamera===!0),R!==w&&(R=w,jt=!0,fi=!0)}if(W.isSkinnedMesh){Lt.setOptional(V,W,"bindMatrix"),Lt.setOptional(V,W,"bindMatrixInverse");const gn=W.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),Lt.setValue(V,"boneTexture",gn.boneTexture,b))}W.isBatchedMesh&&(Lt.setOptional(V,W,"batchingTexture"),Lt.setValue(V,"batchingTexture",W._matricesTexture,b),Lt.setOptional(V,W,"batchingIdTexture"),Lt.setValue(V,"batchingIdTexture",W._indirectTexture,b),Lt.setOptional(V,W,"batchingColorTexture"),W._colorsTexture!==null&&Lt.setValue(V,"batchingColorTexture",W._colorsTexture,b));const Mi=J.morphAttributes;if((Mi.position!==void 0||Mi.normal!==void 0||Mi.color!==void 0)&&Je.update(W,J,an),(jt||Ye.receiveShadow!==W.receiveShadow)&&(Ye.receiveShadow=W.receiveShadow,Lt.setValue(V,"receiveShadow",W.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(kn.envMap.value=ze,kn.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&G.environment!==null&&(kn.envMapIntensity.value=G.environmentIntensity),jt&&(Lt.setValue(V,"toneMappingExposure",C.toneMappingExposure),Ye.needsLights&&Zo(kn,fi),Te&&te.fog===!0&&we.refreshFogUniforms(kn,Te),we.refreshMaterialUniforms(kn,te,O,ce,g.state.transmissionRenderTarget[w.id]),Al.upload(V,$o(Ye),kn,b)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Al.upload(V,$o(Ye),kn,b),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Lt.setValue(V,"center",W.center),Lt.setValue(V,"modelViewMatrix",W.modelViewMatrix),Lt.setValue(V,"normalMatrix",W.normalMatrix),Lt.setValue(V,"modelMatrix",W.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const gn=te.uniformsGroups;for(let Bn=0,En=gn.length;Bn<En;Bn++){const Qo=gn[Bn];H.update(Qo,an),H.bind(Qo,an)}}return an}function Zo(w,G){w.ambientLightColor.needsUpdate=G,w.lightProbe.needsUpdate=G,w.directionalLights.needsUpdate=G,w.directionalLightShadows.needsUpdate=G,w.pointLights.needsUpdate=G,w.pointLightShadows.needsUpdate=G,w.spotLights.needsUpdate=G,w.spotLightShadows.needsUpdate=G,w.rectAreaLights.needsUpdate=G,w.hemisphereLights.needsUpdate=G}function Il(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(w,G,J){Xe.get(w.texture).__webglTexture=G,Xe.get(w.depthTexture).__webglTexture=J;const te=Xe.get(w);te.__hasExternalTextures=!0,te.__autoAllocateDepthBuffer=J===void 0,te.__autoAllocateDepthBuffer||ct.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,G){const J=Xe.get(w);J.__webglFramebuffer=G,J.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(w,G=0,J=0){X=w,z=G,N=J;let te=!0,W=null,Te=!1,Me=!1;if(w){const ze=Xe.get(w);if(ze.__useDefaultFramebuffer!==void 0)je.bindFramebuffer(V.FRAMEBUFFER,null),te=!1;else if(ze.__webglFramebuffer===void 0)b.setupRenderTarget(w);else if(ze.__hasExternalTextures)b.rebindTextures(w,Xe.get(w.texture).__webglTexture,Xe.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ge=w.depthTexture;if(ze.__boundDepthTexture!==Ge){if(Ge!==null&&Xe.has(Ge)&&(w.width!==Ge.image.width||w.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(w)}}const tt=w.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Me=!0);const it=Xe.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(it[G])?W=it[G][J]:W=it[G],Te=!0):w.samples>0&&b.useMultisampledRTT(w)===!1?W=Xe.get(w).__webglMultisampledFramebuffer:Array.isArray(it)?W=it[J]:W=it,k.copy(w.viewport),ue.copy(w.scissor),Q=w.scissorTest}else k.copy(I).multiplyScalar(O).floor(),ue.copy(ee).multiplyScalar(O).floor(),Q=Ne;if(je.bindFramebuffer(V.FRAMEBUFFER,W)&&te&&je.drawBuffers(w,W),je.viewport(k),je.scissor(ue),je.setScissorTest(Q),Te){const ze=Xe.get(w.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+G,ze.__webglTexture,J)}else if(Me){const ze=Xe.get(w.texture),tt=G||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,ze.__webglTexture,J||0,tt)}P=-1},this.readRenderTargetPixels=function(w,G,J,te,W,Te,Me){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=Xe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Me!==void 0&&(Ve=Ve[Me]),Ve){je.bindFramebuffer(V.FRAMEBUFFER,Ve);try{const ze=w.texture,tt=ze.format,it=ze.type;if(!lt.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=w.width-te&&J>=0&&J<=w.height-W&&V.readPixels(G,J,te,W,et.convert(tt),et.convert(it),Te)}finally{const ze=X!==null?Xe.get(X).__webglFramebuffer:null;je.bindFramebuffer(V.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(w,G,J,te,W,Te,Me){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=Xe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Me!==void 0&&(Ve=Ve[Me]),Ve){const ze=w.texture,tt=ze.format,it=ze.type;if(!lt.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=w.width-te&&J>=0&&J<=w.height-W){je.bindFramebuffer(V.FRAMEBUFFER,Ve);const Ge=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Ge),V.bufferData(V.PIXEL_PACK_BUFFER,Te.byteLength,V.STREAM_READ),V.readPixels(G,J,te,W,et.convert(tt),et.convert(it),0);const pt=X!==null?Xe.get(X).__webglFramebuffer:null;je.bindFramebuffer(V.FRAMEBUFFER,pt);const wt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await t0(V,wt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Ge),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Te),V.deleteBuffer(Ge),V.deleteSync(wt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,G=null,J=0){w.isTexture!==!0&&(Fo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,w=arguments[1]);const te=Math.pow(2,-J),W=Math.floor(w.image.width*te),Te=Math.floor(w.image.height*te),Me=G!==null?G.x:0,Ve=G!==null?G.y:0;b.setTexture2D(w,0),V.copyTexSubImage2D(V.TEXTURE_2D,J,0,0,Me,Ve,W,Te),je.unbindTexture()},this.copyTextureToTexture=function(w,G,J=null,te=null,W=0){w.isTexture!==!0&&(Fo("WebGLRenderer: copyTextureToTexture function signature has changed."),te=arguments[0]||null,w=arguments[1],G=arguments[2],W=arguments[3]||0,J=null);let Te,Me,Ve,ze,tt,it,Ge,pt,wt;const ht=w.isCompressedTexture?w.mipmaps[W]:w.image;J!==null?(Te=J.max.x-J.min.x,Me=J.max.y-J.min.y,Ve=J.isBox3?J.max.z-J.min.z:1,ze=J.min.x,tt=J.min.y,it=J.isBox3?J.min.z:0):(Te=ht.width,Me=ht.height,Ve=ht.depth||1,ze=0,tt=0,it=0),te!==null?(Ge=te.x,pt=te.y,wt=te.z):(Ge=0,pt=0,wt=0);const on=et.convert(G.format),ot=et.convert(G.type);let Ye;G.isData3DTexture?(b.setTexture3D(G,0),Ye=V.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(b.setTexture2DArray(G,0),Ye=V.TEXTURE_2D_ARRAY):(b.setTexture2D(G,0),Ye=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,G.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,G.unpackAlignment);const Kn=V.getParameter(V.UNPACK_ROW_LENGTH),yt=V.getParameter(V.UNPACK_IMAGE_HEIGHT),an=V.getParameter(V.UNPACK_SKIP_PIXELS),Zn=V.getParameter(V.UNPACK_SKIP_ROWS),jt=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,ht.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ht.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,ze),V.pixelStorei(V.UNPACK_SKIP_ROWS,tt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,it);const fi=w.isDataArrayTexture||w.isData3DTexture,Lt=G.isDataArrayTexture||G.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const kn=Xe.get(w),Mi=Xe.get(G),gn=Xe.get(kn.__renderTarget),Bn=Xe.get(Mi.__renderTarget);je.bindFramebuffer(V.READ_FRAMEBUFFER,gn.__webglFramebuffer),je.bindFramebuffer(V.DRAW_FRAMEBUFFER,Bn.__webglFramebuffer);for(let En=0;En<Ve;En++)fi&&V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Xe.get(w).__webglTexture,W,it+En),w.isDepthTexture?(Lt&&V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Xe.get(G).__webglTexture,W,wt+En),V.blitFramebuffer(ze,tt,Te,Me,Ge,pt,Te,Me,V.DEPTH_BUFFER_BIT,V.NEAREST)):Lt?V.copyTexSubImage3D(Ye,W,Ge,pt,wt+En,ze,tt,Te,Me):V.copyTexSubImage2D(Ye,W,Ge,pt,wt+En,ze,tt,Te,Me);je.bindFramebuffer(V.READ_FRAMEBUFFER,null),je.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Lt?w.isDataTexture||w.isData3DTexture?V.texSubImage3D(Ye,W,Ge,pt,wt,Te,Me,Ve,on,ot,ht.data):G.isCompressedArrayTexture?V.compressedTexSubImage3D(Ye,W,Ge,pt,wt,Te,Me,Ve,on,ht.data):V.texSubImage3D(Ye,W,Ge,pt,wt,Te,Me,Ve,on,ot,ht):w.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,W,Ge,pt,Te,Me,on,ot,ht.data):w.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,W,Ge,pt,ht.width,ht.height,on,ht.data):V.texSubImage2D(V.TEXTURE_2D,W,Ge,pt,Te,Me,on,ot,ht);V.pixelStorei(V.UNPACK_ROW_LENGTH,Kn),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,yt),V.pixelStorei(V.UNPACK_SKIP_PIXELS,an),V.pixelStorei(V.UNPACK_SKIP_ROWS,Zn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,jt),W===0&&G.generateMipmaps&&V.generateMipmap(Ye),je.unbindTexture()},this.copyTextureToTexture3D=function(w,G,J=null,te=null,W=0){return w.isTexture!==!0&&(Fo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,te=arguments[1]||null,w=arguments[2],G=arguments[3],W=arguments[4]||0),Fo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,G,J,te,W)},this.initRenderTarget=function(w){Xe.get(w).__webglFramebuffer===void 0&&b.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?b.setTextureCube(w,0):w.isData3DTexture?b.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?b.setTexture2DArray(w,0):b.setTexture2D(w,0),je.unbindTexture()},this.resetState=function(){z=0,N=0,X=null,je.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=vt._getDrawingBufferColorSpace(e),n.unpackColorSpace=vt._getUnpackColorSpace()}}class Yf{constructor(e,n=1,r=1e3){this.isFog=!0,this.name="",this.color=new xt(e),this.near=n,this.far=r}clone(){return new Yf(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class pE extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xi,this.environmentIntensity=1,this.environmentRotation=new xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class zr extends Yo{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hm,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class og extends pn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new xt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Xc=new Ht,Em=new ne,Tm=new ne;class mE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.map=null,this.mapPass=null,this.matrix=new Ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wf,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;Em.setFromMatrixPosition(e.matrixWorld),n.position.copy(Em),Tm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Tm),n.updateMatrixWorld(),Xc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xc),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Xc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class gE extends mE{constructor(){super(new eg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _E extends og{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.target=new pn,this.shadow=new gE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class vE extends og{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nf);const No=2.4,Rl=-1,Uf=0,Cl=1,xE=18,SE=12,yE=({isRunning:s,onDistanceUpdate:e,onLaneChange:n,currentLane:r,triggerMoveLeft:a,triggerMoveRight:u})=>{const d=At.useRef(null),f=At.useRef(s);f.current=s;const p=At.useRef(r);p.current=r;const m=At.useRef(r),_=At.useRef(r*No),v=At.useRef(0),x=At.useRef(null),y=At.useRef(null),T=()=>{m.current>Rl&&(m.current-=1,n(m.current))},A=()=>{m.current<Cl&&(m.current+=1,n(m.current))},S=At.useRef(a);At.useEffect(()=>{a!==S.current&&(S.current=a,T())},[a]);const g=At.useRef(u);return At.useEffect(()=>{u!==g.current&&(g.current=u,A())},[u]),At.useEffect(()=>{const D=d.current;if(!D)return;const U=new pE;U.background=new xt(725280),U.fog=new Yf(725280,30,160);const C=new $n(60,D.clientWidth/D.clientHeight,.1,250),$=new hE({antialias:!0,alpha:!1});$.setPixelRatio(Math.min(window.devicePixelRatio,2)),$.setSize(D.clientWidth,D.clientHeight),$.shadowMap.enabled=!0,$.shadowMap.type=Cm,D.appendChild($.domElement);const z=new vE(16777215,.85);U.add(z);const N=new _E(8246268,1.2);N.position.set(10,25,-15),N.castShadow=!0,N.shadow.mapSize.width=1024,N.shadow.mapSize.height=1024,N.shadow.camera.near=.5,N.shadow.camera.far=100,N.shadow.camera.left=-15,N.shadow.camera.right=15,N.shadow.camera.top=20,N.shadow.camera.bottom=-20,U.add(N);const X=No*3,P=30,R=8,k=[],ue=new zr({color:1976635,roughness:.85}),Q=new zr({color:1581876,roughness:.85}),de=new zo({color:9741240}),he=new zr({color:165063,roughness:.4,metalness:.2});for(let le=0;le<R;le++){const re=new Os,Fe=le*P;re.position.z=Fe;const we=new qn(X,.4,P),Re=new Gt(we,le%2===0?ue:Q);Re.position.y=-.2,Re.receiveShadow=!0,re.add(Re);const Qe=new qn(.3,.3,P),_e=new Gt(Qe,he);_e.position.set(-X/2-.15,.05,0),re.add(_e);const Ue=new Gt(Qe,he);Ue.position.set(X/2+.15,.05,0),re.add(Ue);const $e=new js(.12,3);$e.rotateX(-Math.PI/2);const Je=[-No/2,No/2];for(const Oe of Je)for(let st=-P/2+3;st<P/2;st+=6){const et=new Gt($e,de);et.position.set(Oe,.01,st),re.add(et)}U.add(re),k.push(re)}const ie=new Os,ce=new qn(.7,.9,.5),O=new zr({color:165063,roughness:.4}),ae=new Gt(ce,O);ae.position.y=.95,ae.castShadow=!0,ie.add(ae);const oe=new qn(.5,.5,.5),I=new zr({color:3718648,roughness:.3}),ee=new Gt(oe,I);ee.position.y=1.7,ee.castShadow=!0,ie.add(ee);const Ne=new qn(.42,.16,.08),K=new zo({color:988970}),fe=new Gt(Ne,K);fe.position.set(0,1.72,.26),ie.add(fe);const ye=new qn(.24,.65,.24),ve=new zr({color:1976635,roughness:.5}),Ae=new Gt(ye,ve);Ae.position.set(-.2,.35,0),Ae.castShadow=!0,ie.add(Ae);const Le=new Gt(ye,ve);Le.position.set(.2,.35,0),Le.castShadow=!0,ie.add(Le);const qe=new qn(.18,.6,.18),Et=new zr({color:223649,roughness:.4}),at=new Gt(qe,Et);at.position.set(-.46,.95,0),at.castShadow=!0,ie.add(at);const Tt=new Gt(qe,Et);Tt.position.set(.46,.95,0),Tt.castShadow=!0,ie.add(Tt);const V=new js(1,.8);V.rotateX(-Math.PI/2);const nn=new zo({color:0,transparent:!0,opacity:.35}),ct=new Gt(V,nn);ct.position.y=.02,ie.add(ct),U.add(ie);const lt=le=>{f.current&&(le.key==="ArrowLeft"||le.key==="a"||le.key==="A"?T():(le.key==="ArrowRight"||le.key==="d"||le.key==="D")&&A())},je=le=>{!f.current||le.touches.length===0||(x.current=le.touches[0].clientX,y.current=le.touches[0].clientY)},St=le=>{if(!f.current||x.current===null)return;const re=le.changedTouches[0].clientX,Fe=le.changedTouches[0].clientY,we=re-x.current,Re=Fe-(y.current??Fe),Qe=30;if(Math.abs(we)>Math.abs(Re)&&Math.abs(we)>Qe)we<0?T():A();else if(Math.abs(we)<=Qe&&Math.abs(Re)<=Qe){const _e=D.getBoundingClientRect(),Ue=re-_e.left;Ue<_e.width*.45?T():Ue>_e.width*.55&&A()}x.current=null,y.current=null};window.addEventListener("keydown",lt),D.addEventListener("touchstart",je,{passive:!0}),D.addEventListener("touchend",St,{passive:!0});const Xe=()=>{if(!D)return;const le=D.clientWidth,re=D.clientHeight;C.aspect=le/re,C.updateProjectionMatrix(),$.setSize(le,re)};window.addEventListener("resize",Xe);let b,E=performance.now(),j=0;const me=le=>{b=requestAnimationFrame(me);const re=Math.min((le-E)/1e3,.1);if(E=le,f.current){v.current+=xE*re,e(Math.floor(v.current));const Fe=m.current*No;_.current+=(Fe-_.current)*SE*re;const we=(Fe-_.current)*-.22;ie.rotation.z=Jv.lerp(ie.rotation.z,we,.2),j+=re*14;const Re=Math.sin(j);Ae.rotation.x=Re*.75,Le.rotation.x=-Re*.75,at.rotation.x=-Re*.65,Tt.rotation.x=Re*.65;const Qe=Math.abs(Math.sin(j*2))*.08;ae.position.y=.95+Qe,ee.position.y=1.7+Qe,fe.position.y=1.72+Qe,ie.position.set(_.current,0,v.current),C.position.set(_.current*.45,3.2,v.current-5.5),C.lookAt(_.current*.2,1.2,v.current+8),N.position.z=v.current-15,N.target.position.z=v.current+5,N.target.updateMatrixWorld();for(const _e of k)_e.position.z<v.current-P&&(_e.position.z+=R*P)}$.render(U,C)};return b=requestAnimationFrame(me),()=>{cancelAnimationFrame(b),window.removeEventListener("keydown",lt),window.removeEventListener("resize",Xe),D.removeEventListener("touchstart",je),D.removeEventListener("touchend",St),$.domElement.parentNode===D&&D.removeChild($.domElement),$.dispose()}},[]),mt.jsx("div",{ref:d,className:"relative w-full h-full cursor-pointer select-none overflow-hidden","data-testid":"game_canvas"})};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ME=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ag=(...s)=>s.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var EE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TE=At.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:a="",children:u,iconNode:d,...f},p)=>At.createElement("svg",{ref:p,...EE,width:e,height:e,stroke:s,strokeWidth:r?Number(n)*24/Number(e):n,className:ag("lucide",a),...f},[...d.map(([m,_])=>At.createElement(m,_)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jo=(s,e)=>{const n=At.forwardRef(({className:r,...a},u)=>At.createElement(TE,{ref:u,iconNode:e,className:ag(`lucide-${ME(s)}`,r),...a}));return n.displayName=`${s}`,n};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wE=jo("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AE=jo("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RE=jo("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm=jo("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CE=jo("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]),PE=({distance:s,currentLane:e,isRunning:n,onTogglePause:r,onReset:a,onMoveLeft:u,onMoveRight:d})=>mt.jsxs("div",{className:"absolute inset-0 pointer-events-none flex flex-col justify-between p-4 z-10 select-none",children:[mt.jsxs("div",{className:"flex items-center justify-between pointer-events-auto",children:[mt.jsxs("div",{className:"bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-2xl px-4 py-2 shadow-lg flex items-center gap-2",children:[mt.jsx("span",{className:"text-xs font-bold uppercase tracking-wider text-slate-400",children:"Distance"}),mt.jsxs("span",{className:"text-lg font-black text-sky-400 tabular-nums",children:[s," m"]})]}),mt.jsxs("div",{className:"flex items-center gap-2",children:[mt.jsx("button",{onClick:a,title:"Restart run",className:"w-11 h-11 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-800 text-slate-300 hover:text-white active:scale-95 flex items-center justify-center transition-transform shadow-lg",children:mt.jsx(CE,{className:"w-5 h-5"})}),mt.jsx("button",{onClick:r,title:n?"Pause":"Resume",className:"w-11 h-11 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-800 text-sky-400 hover:text-sky-300 active:scale-95 flex items-center justify-center transition-transform shadow-lg",children:n?mt.jsx(RE,{className:"w-5 h-5"}):mt.jsx(wm,{className:"w-5 h-5 ml-0.5"})})]})]}),mt.jsxs("div",{className:"flex items-center justify-between pointer-events-auto pb-2",children:[mt.jsx("button",{onClick:u,disabled:e<=Rl,className:`w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-md border transition-all shadow-xl active:scale-95 ${e>Rl?"bg-slate-900/90 border-slate-700 text-sky-400 hover:bg-slate-800":"bg-slate-950/40 border-slate-900/40 text-slate-600 cursor-not-allowed"}`,"aria-label":"Move left lane",children:mt.jsx(wE,{className:"w-8 h-8"})}),mt.jsxs("div",{className:"bg-slate-900/80 backdrop-blur-md border border-slate-800 px-3.5 py-2 rounded-2xl flex items-center gap-2 shadow-lg",children:[mt.jsx("div",{className:`w-7 h-5 rounded flex items-center justify-center text-xs font-bold transition-colors ${e===Rl?"bg-sky-500 text-white shadow-sm":"bg-slate-800 text-slate-400"}`,children:"L"}),mt.jsx("div",{className:`w-7 h-5 rounded flex items-center justify-center text-xs font-bold transition-colors ${e===Uf?"bg-sky-500 text-white shadow-sm":"bg-slate-800 text-slate-400"}`,children:"C"}),mt.jsx("div",{className:`w-7 h-5 rounded flex items-center justify-center text-xs font-bold transition-colors ${e===Cl?"bg-sky-500 text-white shadow-sm":"bg-slate-800 text-slate-400"}`,children:"R"})]}),mt.jsx("button",{onClick:d,disabled:e>=Cl,className:`w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-md border transition-all shadow-xl active:scale-95 ${e<Cl?"bg-slate-900/90 border-slate-700 text-sky-400 hover:bg-slate-800":"bg-slate-950/40 border-slate-900/40 text-slate-600 cursor-not-allowed"}`,"aria-label":"Move right lane",children:mt.jsx(AE,{className:"w-8 h-8"})})]}),!n&&mt.jsx("div",{className:"absolute inset-0 bg-slate-950/75 backdrop-blur-sm pointer-events-auto flex items-center justify-center p-6",children:mt.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-3xl p-8 max-w-xs w-full text-center shadow-2xl animate-fade-in",children:[mt.jsx("h2",{className:"text-xl font-black text-white uppercase tracking-wider mb-2",children:"Game Paused"}),mt.jsxs("p",{className:"text-sm text-slate-400 mb-6",children:["Distance: ",mt.jsxs("span",{className:"font-semibold text-sky-400",children:[s," m"]})]}),mt.jsxs("button",{onClick:r,className:"w-full py-3.5 px-6 rounded-xl bg-sky-600 hover:bg-sky-500 active:scale-98 text-white font-bold text-sm tracking-wide transition-all shadow-lg flex items-center justify-center gap-2",children:[mt.jsx(wm,{className:"w-4 h-4 fill-white"}),"Resume Run"]})]})})]}),bE=()=>{const[s,e]=At.useState(0),[n,r]=At.useState(Uf),[a,u]=At.useState(!0),[d,f]=At.useState(0),[p,m]=At.useState(0),[_,v]=At.useState(0),x=At.useCallback(()=>{f(D=>D+1)},[]),y=At.useCallback(()=>{m(D=>D+1)},[]),T=At.useCallback(()=>{u(D=>!D)},[]),A=At.useCallback(()=>{e(0),r(Uf),u(!0),v(D=>D+1)},[]),S=At.useCallback(D=>{e(D)},[]),g=At.useCallback(D=>{r(D)},[]);return mt.jsx("div",{className:"w-screen h-screen bg-slate-950 flex items-center justify-center overflow-hidden",children:mt.jsxs("div",{className:"relative w-full h-full max-w-[480px] max-h-[960px] bg-slate-900 md:rounded-3xl md:overflow-hidden md:border md:border-slate-800 md:shadow-2xl shadow-sky-950/20",children:[mt.jsx(yE,{isRunning:a,currentLane:n,onDistanceUpdate:S,onLaneChange:g,triggerMoveLeft:d,triggerMoveRight:p},_),mt.jsx(PE,{distance:s,currentLane:n,isRunning:a,onTogglePause:T,onReset:A,onMoveLeft:x,onMoveRight:y})]})})};K_.createRoot(document.getElementById("root")).render(mt.jsx(G_.StrictMode,{children:mt.jsx(bE,{})}));
