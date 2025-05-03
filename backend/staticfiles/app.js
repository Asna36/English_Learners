function Rb(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Sl(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Zn(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var o=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,o.get?o:{enumerable:!0,get:function(){return e[r]}})}),n}var Bg={exports:{}},kl={},Ug={exports:{}},ue={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vs=Symbol.for("react.element"),Tb=Symbol.for("react.portal"),Pb=Symbol.for("react.fragment"),Ob=Symbol.for("react.strict_mode"),Fb=Symbol.for("react.profiler"),$b=Symbol.for("react.provider"),Ab=Symbol.for("react.context"),zb=Symbol.for("react.forward_ref"),Ib=Symbol.for("react.suspense"),Mb=Symbol.for("react.memo"),Lb=Symbol.for("react.lazy"),Vp=Symbol.iterator;function Db(e){return e===null||typeof e!="object"?null:(e=Vp&&e[Vp]||e["@@iterator"],typeof e=="function"?e:null)}var Wg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vg=Object.assign,Hg={};function oi(e,t,n){this.props=e,this.context=t,this.refs=Hg,this.updater=n||Wg}oi.prototype.isReactComponent={};oi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};oi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function qg(){}qg.prototype=oi.prototype;function Qd(e,t,n){this.props=e,this.context=t,this.refs=Hg,this.updater=n||Wg}var Xd=Qd.prototype=new qg;Xd.constructor=Qd;Vg(Xd,oi.prototype);Xd.isPureReactComponent=!0;var Hp=Array.isArray,Gg=Object.prototype.hasOwnProperty,Yd={current:null},Kg={key:!0,ref:!0,__self:!0,__source:!0};function Qg(e,t,n){var r,o={},i=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)Gg.call(t,r)&&!Kg.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];o.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:vs,type:e,key:i,ref:s,props:o,_owner:Yd.current}}function Bb(e,t){return{$$typeof:vs,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Jd(e){return typeof e=="object"&&e!==null&&e.$$typeof===vs}function Ub(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var qp=/\/+/g;function Du(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ub(""+e.key):t.toString(36)}function aa(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case vs:case Tb:s=!0}}if(s)return s=e,o=o(s),e=r===""?"."+Du(s,0):r,Hp(o)?(n="",e!=null&&(n=e.replace(qp,"$&/")+"/"),aa(o,t,n,"",function(c){return c})):o!=null&&(Jd(o)&&(o=Bb(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(qp,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=r===""?".":r+":",Hp(e))for(var a=0;a<e.length;a++){i=e[a];var l=r+Du(i,a);s+=aa(i,t,n,l,o)}else if(l=Db(e),typeof l=="function")for(e=l.call(e),a=0;!(i=e.next()).done;)i=i.value,l=r+Du(i,a++),s+=aa(i,t,n,l,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Ms(e,t,n){if(e==null)return e;var r=[],o=0;return aa(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Wb(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var _t={current:null},la={transition:null},Vb={ReactCurrentDispatcher:_t,ReactCurrentBatchConfig:la,ReactCurrentOwner:Yd};function Xg(){throw Error("act(...) is not supported in production builds of React.")}ue.Children={map:Ms,forEach:function(e,t,n){Ms(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ms(e,function(){t++}),t},toArray:function(e){return Ms(e,function(t){return t})||[]},only:function(e){if(!Jd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ue.Component=oi;ue.Fragment=Pb;ue.Profiler=Fb;ue.PureComponent=Qd;ue.StrictMode=Ob;ue.Suspense=Ib;ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vb;ue.act=Xg;ue.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Vg({},e.props),o=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=Yd.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Gg.call(t,l)&&!Kg.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:vs,type:e.type,key:o,ref:i,props:r,_owner:s}};ue.createContext=function(e){return e={$$typeof:Ab,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:$b,_context:e},e.Consumer=e};ue.createElement=Qg;ue.createFactory=function(e){var t=Qg.bind(null,e);return t.type=e,t};ue.createRef=function(){return{current:null}};ue.forwardRef=function(e){return{$$typeof:zb,render:e}};ue.isValidElement=Jd;ue.lazy=function(e){return{$$typeof:Lb,_payload:{_status:-1,_result:e},_init:Wb}};ue.memo=function(e,t){return{$$typeof:Mb,type:e,compare:t===void 0?null:t}};ue.startTransition=function(e){var t=la.transition;la.transition={};try{e()}finally{la.transition=t}};ue.unstable_act=Xg;ue.useCallback=function(e,t){return _t.current.useCallback(e,t)};ue.useContext=function(e){return _t.current.useContext(e)};ue.useDebugValue=function(){};ue.useDeferredValue=function(e){return _t.current.useDeferredValue(e)};ue.useEffect=function(e,t){return _t.current.useEffect(e,t)};ue.useId=function(){return _t.current.useId()};ue.useImperativeHandle=function(e,t,n){return _t.current.useImperativeHandle(e,t,n)};ue.useInsertionEffect=function(e,t){return _t.current.useInsertionEffect(e,t)};ue.useLayoutEffect=function(e,t){return _t.current.useLayoutEffect(e,t)};ue.useMemo=function(e,t){return _t.current.useMemo(e,t)};ue.useReducer=function(e,t,n){return _t.current.useReducer(e,t,n)};ue.useRef=function(e){return _t.current.useRef(e)};ue.useState=function(e){return _t.current.useState(e)};ue.useSyncExternalStore=function(e,t,n){return _t.current.useSyncExternalStore(e,t,n)};ue.useTransition=function(){return _t.current.useTransition()};ue.version="18.3.1";Ug.exports=ue;var v=Ug.exports;const Z=Sl(v),Pa=Rb({__proto__:null,default:Z},[v]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hb=v,qb=Symbol.for("react.element"),Gb=Symbol.for("react.fragment"),Kb=Object.prototype.hasOwnProperty,Qb=Hb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Xb={key:!0,ref:!0,__self:!0,__source:!0};function Yg(e,t,n){var r,o={},i=null,s=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Kb.call(t,r)&&!Xb.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:qb,type:e,key:i,ref:s,props:o,_owner:Qb.current}}kl.Fragment=Gb;kl.jsx=Yg;kl.jsxs=Yg;Bg.exports=kl;var u=Bg.exports,Rc={},Jg={exports:{}},Yt={},Zg={exports:{}},e0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(F,q){var X=F.length;F.push(q);e:for(;0<X;){var se=X-1>>>1,re=F[se];if(0<o(re,q))F[se]=q,F[X]=re,X=se;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var q=F[0],X=F.pop();if(X!==q){F[0]=X;e:for(var se=0,re=F.length,xe=re>>>1;se<xe;){var ee=2*(se+1)-1,pe=F[ee],ce=ee+1,De=F[ce];if(0>o(pe,X))ce<re&&0>o(De,pe)?(F[se]=De,F[ce]=X,se=ce):(F[se]=pe,F[ee]=X,se=ee);else if(ce<re&&0>o(De,X))F[se]=De,F[ce]=X,se=ce;else break e}}return q}function o(F,q){var X=F.sortIndex-q.sortIndex;return X!==0?X:F.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],c=[],d=1,f=null,p=3,b=!1,x=!1,y=!1,k=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(F){for(var q=n(c);q!==null;){if(q.callback===null)r(c);else if(q.startTime<=F)r(c),q.sortIndex=q.expirationTime,t(l,q);else break;q=n(c)}}function w(F){if(y=!1,m(F),!x)if(n(l)!==null)x=!0,U(C);else{var q=n(c);q!==null&&Q(w,q.startTime-F)}}function C(F,q){x=!1,y&&(y=!1,g(j),j=-1),b=!0;var X=p;try{for(m(q),f=n(l);f!==null&&(!(f.expirationTime>q)||F&&!T());){var se=f.callback;if(typeof se=="function"){f.callback=null,p=f.priorityLevel;var re=se(f.expirationTime<=q);q=e.unstable_now(),typeof re=="function"?f.callback=re:f===n(l)&&r(l),m(q)}else r(l);f=n(l)}if(f!==null)var xe=!0;else{var ee=n(c);ee!==null&&Q(w,ee.startTime-q),xe=!1}return xe}finally{f=null,p=X,b=!1}}var S=!1,E=null,j=-1,A=5,z=-1;function T(){return!(e.unstable_now()-z<A)}function P(){if(E!==null){var F=e.unstable_now();z=F;var q=!0;try{q=E(!0,F)}finally{q?I():(S=!1,E=null)}}else S=!1}var I;if(typeof h=="function")I=function(){h(P)};else if(typeof MessageChannel<"u"){var M=new MessageChannel,W=M.port2;M.port1.onmessage=P,I=function(){W.postMessage(null)}}else I=function(){k(P,0)};function U(F){E=F,S||(S=!0,I())}function Q(F,q){j=k(function(){F(e.unstable_now())},q)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(F){F.callback=null},e.unstable_continueExecution=function(){x||b||(x=!0,U(C))},e.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<F?Math.floor(1e3/F):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(F){switch(p){case 1:case 2:case 3:var q=3;break;default:q=p}var X=p;p=q;try{return F()}finally{p=X}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(F,q){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var X=p;p=F;try{return q()}finally{p=X}},e.unstable_scheduleCallback=function(F,q,X){var se=e.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?se+X:se):X=se,F){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=X+re,F={id:d++,callback:q,priorityLevel:F,startTime:X,expirationTime:re,sortIndex:-1},X>se?(F.sortIndex=X,t(c,F),n(l)===null&&F===n(c)&&(y?(g(j),j=-1):y=!0,Q(w,X-se))):(F.sortIndex=re,t(l,F),x||b||(x=!0,U(C))),F},e.unstable_shouldYield=T,e.unstable_wrapCallback=function(F){var q=p;return function(){var X=p;p=q;try{return F.apply(this,arguments)}finally{p=X}}}})(e0);Zg.exports=e0;var Yb=Zg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jb=v,Xt=Yb;function D(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var t0=new Set,Qi={};function lo(e,t){Ko(e,t),Ko(e+"Capture",t)}function Ko(e,t){for(Qi[e]=t,e=0;e<t.length;e++)t0.add(t[e])}var Kn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tc=Object.prototype.hasOwnProperty,Zb=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Gp={},Kp={};function e1(e){return Tc.call(Kp,e)?!0:Tc.call(Gp,e)?!1:Zb.test(e)?Kp[e]=!0:(Gp[e]=!0,!1)}function t1(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function n1(e,t,n,r){if(t===null||typeof t>"u"||t1(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function jt(e,t,n,r,o,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var ht={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ht[e]=new jt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ht[t]=new jt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ht[e]=new jt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ht[e]=new jt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ht[e]=new jt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ht[e]=new jt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ht[e]=new jt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ht[e]=new jt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ht[e]=new jt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Zd=/[\-:]([a-z])/g;function ef(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Zd,ef);ht[t]=new jt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Zd,ef);ht[t]=new jt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Zd,ef);ht[t]=new jt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ht[e]=new jt(e,1,!1,e.toLowerCase(),null,!1,!1)});ht.xlinkHref=new jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ht[e]=new jt(e,1,!1,e.toLowerCase(),null,!0,!0)});function tf(e,t,n,r){var o=ht.hasOwnProperty(t)?ht[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(n1(t,n,o,r)&&(n=null),r||o===null?e1(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var er=Jb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ls=Symbol.for("react.element"),No=Symbol.for("react.portal"),_o=Symbol.for("react.fragment"),nf=Symbol.for("react.strict_mode"),Pc=Symbol.for("react.profiler"),n0=Symbol.for("react.provider"),r0=Symbol.for("react.context"),rf=Symbol.for("react.forward_ref"),Oc=Symbol.for("react.suspense"),Fc=Symbol.for("react.suspense_list"),of=Symbol.for("react.memo"),sr=Symbol.for("react.lazy"),o0=Symbol.for("react.offscreen"),Qp=Symbol.iterator;function hi(e){return e===null||typeof e!="object"?null:(e=Qp&&e[Qp]||e["@@iterator"],typeof e=="function"?e:null)}var Ie=Object.assign,Bu;function Ti(e){if(Bu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Bu=t&&t[1]||""}return`
`+Bu+e}var Uu=!1;function Wu(e,t){if(!e||Uu)return"";Uu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),s=o.length-1,a=i.length-1;1<=s&&0<=a&&o[s]!==i[a];)a--;for(;1<=s&&0<=a;s--,a--)if(o[s]!==i[a]){if(s!==1||a!==1)do if(s--,a--,0>a||o[s]!==i[a]){var l=`
`+o[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{Uu=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ti(e):""}function r1(e){switch(e.tag){case 5:return Ti(e.type);case 16:return Ti("Lazy");case 13:return Ti("Suspense");case 19:return Ti("SuspenseList");case 0:case 2:case 15:return e=Wu(e.type,!1),e;case 11:return e=Wu(e.type.render,!1),e;case 1:return e=Wu(e.type,!0),e;default:return""}}function $c(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _o:return"Fragment";case No:return"Portal";case Pc:return"Profiler";case nf:return"StrictMode";case Oc:return"Suspense";case Fc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case r0:return(e.displayName||"Context")+".Consumer";case n0:return(e._context.displayName||"Context")+".Provider";case rf:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case of:return t=e.displayName||null,t!==null?t:$c(e.type)||"Memo";case sr:t=e._payload,e=e._init;try{return $c(e(t))}catch{}}return null}function o1(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $c(t);case 8:return t===nf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function _r(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function i0(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function i1(e){var t=i0(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ds(e){e._valueTracker||(e._valueTracker=i1(e))}function s0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=i0(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Oa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ac(e,t){var n=t.checked;return Ie({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Xp(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=_r(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function a0(e,t){t=t.checked,t!=null&&tf(e,"checked",t,!1)}function zc(e,t){a0(e,t);var n=_r(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ic(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ic(e,t.type,_r(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Yp(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ic(e,t,n){(t!=="number"||Oa(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Pi=Array.isArray;function Lo(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+_r(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Mc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(D(91));return Ie({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Jp(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(D(92));if(Pi(n)){if(1<n.length)throw Error(D(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:_r(n)}}function l0(e,t){var n=_r(t.value),r=_r(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Zp(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function u0(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Lc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?u0(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Bs,c0=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Bs=Bs||document.createElement("div"),Bs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Bs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Xi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ai={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},s1=["Webkit","ms","Moz","O"];Object.keys(Ai).forEach(function(e){s1.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ai[t]=Ai[e]})});function d0(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ai.hasOwnProperty(e)&&Ai[e]?(""+t).trim():t+"px"}function f0(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=d0(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var a1=Ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Dc(e,t){if(t){if(a1[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(D(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(D(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(D(61))}if(t.style!=null&&typeof t.style!="object")throw Error(D(62))}}function Bc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Uc=null;function sf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Wc=null,Do=null,Bo=null;function eh(e){if(e=Ss(e)){if(typeof Wc!="function")throw Error(D(280));var t=e.stateNode;t&&(t=jl(t),Wc(e.stateNode,e.type,t))}}function p0(e){Do?Bo?Bo.push(e):Bo=[e]:Do=e}function h0(){if(Do){var e=Do,t=Bo;if(Bo=Do=null,eh(e),t)for(e=0;e<t.length;e++)eh(t[e])}}function m0(e,t){return e(t)}function g0(){}var Vu=!1;function x0(e,t,n){if(Vu)return e(t,n);Vu=!0;try{return m0(e,t,n)}finally{Vu=!1,(Do!==null||Bo!==null)&&(g0(),h0())}}function Yi(e,t){var n=e.stateNode;if(n===null)return null;var r=jl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(D(231,t,typeof n));return n}var Vc=!1;if(Kn)try{var mi={};Object.defineProperty(mi,"passive",{get:function(){Vc=!0}}),window.addEventListener("test",mi,mi),window.removeEventListener("test",mi,mi)}catch{Vc=!1}function l1(e,t,n,r,o,i,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var zi=!1,Fa=null,$a=!1,Hc=null,u1={onError:function(e){zi=!0,Fa=e}};function c1(e,t,n,r,o,i,s,a,l){zi=!1,Fa=null,l1.apply(u1,arguments)}function d1(e,t,n,r,o,i,s,a,l){if(c1.apply(this,arguments),zi){if(zi){var c=Fa;zi=!1,Fa=null}else throw Error(D(198));$a||($a=!0,Hc=c)}}function uo(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function y0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function th(e){if(uo(e)!==e)throw Error(D(188))}function f1(e){var t=e.alternate;if(!t){if(t=uo(e),t===null)throw Error(D(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return th(o),e;if(i===r)return th(o),t;i=i.sibling}throw Error(D(188))}if(n.return!==r.return)n=o,r=i;else{for(var s=!1,a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s){for(a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s)throw Error(D(189))}}if(n.alternate!==r)throw Error(D(190))}if(n.tag!==3)throw Error(D(188));return n.stateNode.current===n?e:t}function v0(e){return e=f1(e),e!==null?b0(e):null}function b0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=b0(e);if(t!==null)return t;e=e.sibling}return null}var w0=Xt.unstable_scheduleCallback,nh=Xt.unstable_cancelCallback,p1=Xt.unstable_shouldYield,h1=Xt.unstable_requestPaint,Ge=Xt.unstable_now,m1=Xt.unstable_getCurrentPriorityLevel,af=Xt.unstable_ImmediatePriority,S0=Xt.unstable_UserBlockingPriority,Aa=Xt.unstable_NormalPriority,g1=Xt.unstable_LowPriority,k0=Xt.unstable_IdlePriority,Cl=null,$n=null;function x1(e){if($n&&typeof $n.onCommitFiberRoot=="function")try{$n.onCommitFiberRoot(Cl,e,void 0,(e.current.flags&128)===128)}catch{}}var wn=Math.clz32?Math.clz32:b1,y1=Math.log,v1=Math.LN2;function b1(e){return e>>>=0,e===0?32:31-(y1(e)/v1|0)|0}var Us=64,Ws=4194304;function Oi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function za(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~o;a!==0?r=Oi(a):(i&=s,i!==0&&(r=Oi(i)))}else s=n&~o,s!==0?r=Oi(s):i!==0&&(r=Oi(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-wn(t),o=1<<n,r|=e[n],t&=~o;return r}function w1(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function S1(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-wn(i),a=1<<s,l=o[s];l===-1?(!(a&n)||a&r)&&(o[s]=w1(a,t)):l<=t&&(e.expiredLanes|=a),i&=~a}}function qc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function C0(){var e=Us;return Us<<=1,!(Us&4194240)&&(Us=64),e}function Hu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function bs(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-wn(t),e[t]=n}function k1(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-wn(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function lf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-wn(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var we=0;function E0(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var N0,uf,_0,j0,R0,Gc=!1,Vs=[],gr=null,xr=null,yr=null,Ji=new Map,Zi=new Map,lr=[],C1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function rh(e,t){switch(e){case"focusin":case"focusout":gr=null;break;case"dragenter":case"dragleave":xr=null;break;case"mouseover":case"mouseout":yr=null;break;case"pointerover":case"pointerout":Ji.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zi.delete(t.pointerId)}}function gi(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Ss(t),t!==null&&uf(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function E1(e,t,n,r,o){switch(t){case"focusin":return gr=gi(gr,e,t,n,r,o),!0;case"dragenter":return xr=gi(xr,e,t,n,r,o),!0;case"mouseover":return yr=gi(yr,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Ji.set(i,gi(Ji.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Zi.set(i,gi(Zi.get(i)||null,e,t,n,r,o)),!0}return!1}function T0(e){var t=Wr(e.target);if(t!==null){var n=uo(t);if(n!==null){if(t=n.tag,t===13){if(t=y0(n),t!==null){e.blockedOn=t,R0(e.priority,function(){_0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ua(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Kc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Uc=r,n.target.dispatchEvent(r),Uc=null}else return t=Ss(n),t!==null&&uf(t),e.blockedOn=n,!1;t.shift()}return!0}function oh(e,t,n){ua(e)&&n.delete(t)}function N1(){Gc=!1,gr!==null&&ua(gr)&&(gr=null),xr!==null&&ua(xr)&&(xr=null),yr!==null&&ua(yr)&&(yr=null),Ji.forEach(oh),Zi.forEach(oh)}function xi(e,t){e.blockedOn===t&&(e.blockedOn=null,Gc||(Gc=!0,Xt.unstable_scheduleCallback(Xt.unstable_NormalPriority,N1)))}function es(e){function t(o){return xi(o,e)}if(0<Vs.length){xi(Vs[0],e);for(var n=1;n<Vs.length;n++){var r=Vs[n];r.blockedOn===e&&(r.blockedOn=null)}}for(gr!==null&&xi(gr,e),xr!==null&&xi(xr,e),yr!==null&&xi(yr,e),Ji.forEach(t),Zi.forEach(t),n=0;n<lr.length;n++)r=lr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<lr.length&&(n=lr[0],n.blockedOn===null);)T0(n),n.blockedOn===null&&lr.shift()}var Uo=er.ReactCurrentBatchConfig,Ia=!0;function _1(e,t,n,r){var o=we,i=Uo.transition;Uo.transition=null;try{we=1,cf(e,t,n,r)}finally{we=o,Uo.transition=i}}function j1(e,t,n,r){var o=we,i=Uo.transition;Uo.transition=null;try{we=4,cf(e,t,n,r)}finally{we=o,Uo.transition=i}}function cf(e,t,n,r){if(Ia){var o=Kc(e,t,n,r);if(o===null)tc(e,t,r,Ma,n),rh(e,r);else if(E1(o,e,t,n,r))r.stopPropagation();else if(rh(e,r),t&4&&-1<C1.indexOf(e)){for(;o!==null;){var i=Ss(o);if(i!==null&&N0(i),i=Kc(e,t,n,r),i===null&&tc(e,t,r,Ma,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else tc(e,t,r,null,n)}}var Ma=null;function Kc(e,t,n,r){if(Ma=null,e=sf(r),e=Wr(e),e!==null)if(t=uo(e),t===null)e=null;else if(n=t.tag,n===13){if(e=y0(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ma=e,null}function P0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(m1()){case af:return 1;case S0:return 4;case Aa:case g1:return 16;case k0:return 536870912;default:return 16}default:return 16}}var dr=null,df=null,ca=null;function O0(){if(ca)return ca;var e,t=df,n=t.length,r,o="value"in dr?dr.value:dr.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===o[i-r];r++);return ca=o.slice(e,1<r?1-r:void 0)}function da(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Hs(){return!0}function ih(){return!1}function Jt(e){function t(n,r,o,i,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Hs:ih,this.isPropagationStopped=ih,this}return Ie(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Hs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Hs)},persist:function(){},isPersistent:Hs}),t}var ii={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ff=Jt(ii),ws=Ie({},ii,{view:0,detail:0}),R1=Jt(ws),qu,Gu,yi,El=Ie({},ws,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==yi&&(yi&&e.type==="mousemove"?(qu=e.screenX-yi.screenX,Gu=e.screenY-yi.screenY):Gu=qu=0,yi=e),qu)},movementY:function(e){return"movementY"in e?e.movementY:Gu}}),sh=Jt(El),T1=Ie({},El,{dataTransfer:0}),P1=Jt(T1),O1=Ie({},ws,{relatedTarget:0}),Ku=Jt(O1),F1=Ie({},ii,{animationName:0,elapsedTime:0,pseudoElement:0}),$1=Jt(F1),A1=Ie({},ii,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),z1=Jt(A1),I1=Ie({},ii,{data:0}),ah=Jt(I1),M1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},L1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},D1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function B1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=D1[e])?!!t[e]:!1}function pf(){return B1}var U1=Ie({},ws,{key:function(e){if(e.key){var t=M1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=da(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?L1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pf,charCode:function(e){return e.type==="keypress"?da(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?da(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),W1=Jt(U1),V1=Ie({},El,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lh=Jt(V1),H1=Ie({},ws,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pf}),q1=Jt(H1),G1=Ie({},ii,{propertyName:0,elapsedTime:0,pseudoElement:0}),K1=Jt(G1),Q1=Ie({},El,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),X1=Jt(Q1),Y1=[9,13,27,32],hf=Kn&&"CompositionEvent"in window,Ii=null;Kn&&"documentMode"in document&&(Ii=document.documentMode);var J1=Kn&&"TextEvent"in window&&!Ii,F0=Kn&&(!hf||Ii&&8<Ii&&11>=Ii),uh=" ",ch=!1;function $0(e,t){switch(e){case"keyup":return Y1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function A0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var jo=!1;function Z1(e,t){switch(e){case"compositionend":return A0(t);case"keypress":return t.which!==32?null:(ch=!0,uh);case"textInput":return e=t.data,e===uh&&ch?null:e;default:return null}}function ew(e,t){if(jo)return e==="compositionend"||!hf&&$0(e,t)?(e=O0(),ca=df=dr=null,jo=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return F0&&t.locale!=="ko"?null:t.data;default:return null}}var tw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!tw[e.type]:t==="textarea"}function z0(e,t,n,r){p0(r),t=La(t,"onChange"),0<t.length&&(n=new ff("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Mi=null,ts=null;function nw(e){G0(e,0)}function Nl(e){var t=Po(e);if(s0(t))return e}function rw(e,t){if(e==="change")return t}var I0=!1;if(Kn){var Qu;if(Kn){var Xu="oninput"in document;if(!Xu){var fh=document.createElement("div");fh.setAttribute("oninput","return;"),Xu=typeof fh.oninput=="function"}Qu=Xu}else Qu=!1;I0=Qu&&(!document.documentMode||9<document.documentMode)}function ph(){Mi&&(Mi.detachEvent("onpropertychange",M0),ts=Mi=null)}function M0(e){if(e.propertyName==="value"&&Nl(ts)){var t=[];z0(t,ts,e,sf(e)),x0(nw,t)}}function ow(e,t,n){e==="focusin"?(ph(),Mi=t,ts=n,Mi.attachEvent("onpropertychange",M0)):e==="focusout"&&ph()}function iw(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Nl(ts)}function sw(e,t){if(e==="click")return Nl(t)}function aw(e,t){if(e==="input"||e==="change")return Nl(t)}function lw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var kn=typeof Object.is=="function"?Object.is:lw;function ns(e,t){if(kn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Tc.call(t,o)||!kn(e[o],t[o]))return!1}return!0}function hh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function mh(e,t){var n=hh(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=hh(n)}}function L0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?L0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function D0(){for(var e=window,t=Oa();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Oa(e.document)}return t}function mf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function uw(e){var t=D0(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&L0(n.ownerDocument.documentElement,n)){if(r!==null&&mf(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=mh(n,i);var s=mh(n,r);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var cw=Kn&&"documentMode"in document&&11>=document.documentMode,Ro=null,Qc=null,Li=null,Xc=!1;function gh(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xc||Ro==null||Ro!==Oa(r)||(r=Ro,"selectionStart"in r&&mf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Li&&ns(Li,r)||(Li=r,r=La(Qc,"onSelect"),0<r.length&&(t=new ff("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ro)))}function qs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var To={animationend:qs("Animation","AnimationEnd"),animationiteration:qs("Animation","AnimationIteration"),animationstart:qs("Animation","AnimationStart"),transitionend:qs("Transition","TransitionEnd")},Yu={},B0={};Kn&&(B0=document.createElement("div").style,"AnimationEvent"in window||(delete To.animationend.animation,delete To.animationiteration.animation,delete To.animationstart.animation),"TransitionEvent"in window||delete To.transitionend.transition);function _l(e){if(Yu[e])return Yu[e];if(!To[e])return e;var t=To[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in B0)return Yu[e]=t[n];return e}var U0=_l("animationend"),W0=_l("animationiteration"),V0=_l("animationstart"),H0=_l("transitionend"),q0=new Map,xh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pr(e,t){q0.set(e,t),lo(t,[e])}for(var Ju=0;Ju<xh.length;Ju++){var Zu=xh[Ju],dw=Zu.toLowerCase(),fw=Zu[0].toUpperCase()+Zu.slice(1);Pr(dw,"on"+fw)}Pr(U0,"onAnimationEnd");Pr(W0,"onAnimationIteration");Pr(V0,"onAnimationStart");Pr("dblclick","onDoubleClick");Pr("focusin","onFocus");Pr("focusout","onBlur");Pr(H0,"onTransitionEnd");Ko("onMouseEnter",["mouseout","mouseover"]);Ko("onMouseLeave",["mouseout","mouseover"]);Ko("onPointerEnter",["pointerout","pointerover"]);Ko("onPointerLeave",["pointerout","pointerover"]);lo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));lo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));lo("onBeforeInput",["compositionend","keypress","textInput","paste"]);lo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));lo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));lo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fi));function yh(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,d1(r,t,void 0,e),e.currentTarget=null}function G0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==i&&o.isPropagationStopped())break e;yh(o,a,c),i=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==i&&o.isPropagationStopped())break e;yh(o,a,c),i=l}}}if($a)throw e=Hc,$a=!1,Hc=null,e}function Re(e,t){var n=t[td];n===void 0&&(n=t[td]=new Set);var r=e+"__bubble";n.has(r)||(K0(t,e,2,!1),n.add(r))}function ec(e,t,n){var r=0;t&&(r|=4),K0(n,e,r,t)}var Gs="_reactListening"+Math.random().toString(36).slice(2);function rs(e){if(!e[Gs]){e[Gs]=!0,t0.forEach(function(n){n!=="selectionchange"&&(pw.has(n)||ec(n,!1,e),ec(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Gs]||(t[Gs]=!0,ec("selectionchange",!1,t))}}function K0(e,t,n,r){switch(P0(t)){case 1:var o=_1;break;case 4:o=j1;break;default:o=cf}n=o.bind(null,t,n,e),o=void 0,!Vc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function tc(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;s=s.return}for(;a!==null;){if(s=Wr(a),s===null)return;if(l=s.tag,l===5||l===6){r=i=s;continue e}a=a.parentNode}}r=r.return}x0(function(){var c=i,d=sf(n),f=[];e:{var p=q0.get(e);if(p!==void 0){var b=ff,x=e;switch(e){case"keypress":if(da(n)===0)break e;case"keydown":case"keyup":b=W1;break;case"focusin":x="focus",b=Ku;break;case"focusout":x="blur",b=Ku;break;case"beforeblur":case"afterblur":b=Ku;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=sh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=P1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=q1;break;case U0:case W0:case V0:b=$1;break;case H0:b=K1;break;case"scroll":b=R1;break;case"wheel":b=X1;break;case"copy":case"cut":case"paste":b=z1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=lh}var y=(t&4)!==0,k=!y&&e==="scroll",g=y?p!==null?p+"Capture":null:p;y=[];for(var h=c,m;h!==null;){m=h;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,g!==null&&(w=Yi(h,g),w!=null&&y.push(os(h,w,m)))),k)break;h=h.return}0<y.length&&(p=new b(p,x,null,n,d),f.push({event:p,listeners:y}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",p&&n!==Uc&&(x=n.relatedTarget||n.fromElement)&&(Wr(x)||x[Qn]))break e;if((b||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,b?(x=n.relatedTarget||n.toElement,b=c,x=x?Wr(x):null,x!==null&&(k=uo(x),x!==k||x.tag!==5&&x.tag!==6)&&(x=null)):(b=null,x=c),b!==x)){if(y=sh,w="onMouseLeave",g="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(y=lh,w="onPointerLeave",g="onPointerEnter",h="pointer"),k=b==null?p:Po(b),m=x==null?p:Po(x),p=new y(w,h+"leave",b,n,d),p.target=k,p.relatedTarget=m,w=null,Wr(d)===c&&(y=new y(g,h+"enter",x,n,d),y.target=m,y.relatedTarget=k,w=y),k=w,b&&x)t:{for(y=b,g=x,h=0,m=y;m;m=mo(m))h++;for(m=0,w=g;w;w=mo(w))m++;for(;0<h-m;)y=mo(y),h--;for(;0<m-h;)g=mo(g),m--;for(;h--;){if(y===g||g!==null&&y===g.alternate)break t;y=mo(y),g=mo(g)}y=null}else y=null;b!==null&&vh(f,p,b,y,!1),x!==null&&k!==null&&vh(f,k,x,y,!0)}}e:{if(p=c?Po(c):window,b=p.nodeName&&p.nodeName.toLowerCase(),b==="select"||b==="input"&&p.type==="file")var C=rw;else if(dh(p))if(I0)C=aw;else{C=iw;var S=ow}else(b=p.nodeName)&&b.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(C=sw);if(C&&(C=C(e,c))){z0(f,C,n,d);break e}S&&S(e,p,c),e==="focusout"&&(S=p._wrapperState)&&S.controlled&&p.type==="number"&&Ic(p,"number",p.value)}switch(S=c?Po(c):window,e){case"focusin":(dh(S)||S.contentEditable==="true")&&(Ro=S,Qc=c,Li=null);break;case"focusout":Li=Qc=Ro=null;break;case"mousedown":Xc=!0;break;case"contextmenu":case"mouseup":case"dragend":Xc=!1,gh(f,n,d);break;case"selectionchange":if(cw)break;case"keydown":case"keyup":gh(f,n,d)}var E;if(hf)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else jo?$0(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(F0&&n.locale!=="ko"&&(jo||j!=="onCompositionStart"?j==="onCompositionEnd"&&jo&&(E=O0()):(dr=d,df="value"in dr?dr.value:dr.textContent,jo=!0)),S=La(c,j),0<S.length&&(j=new ah(j,e,null,n,d),f.push({event:j,listeners:S}),E?j.data=E:(E=A0(n),E!==null&&(j.data=E)))),(E=J1?Z1(e,n):ew(e,n))&&(c=La(c,"onBeforeInput"),0<c.length&&(d=new ah("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=E))}G0(f,t)})}function os(e,t,n){return{instance:e,listener:t,currentTarget:n}}function La(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Yi(e,n),i!=null&&r.unshift(os(e,i,o)),i=Yi(e,t),i!=null&&r.push(os(e,i,o))),e=e.return}return r}function mo(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function vh(e,t,n,r,o){for(var i=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,o?(l=Yi(n,i),l!=null&&s.unshift(os(n,l,a))):o||(l=Yi(n,i),l!=null&&s.push(os(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var hw=/\r\n?/g,mw=/\u0000|\uFFFD/g;function bh(e){return(typeof e=="string"?e:""+e).replace(hw,`
`).replace(mw,"")}function Ks(e,t,n){if(t=bh(t),bh(e)!==t&&n)throw Error(D(425))}function Da(){}var Yc=null,Jc=null;function Zc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ed=typeof setTimeout=="function"?setTimeout:void 0,gw=typeof clearTimeout=="function"?clearTimeout:void 0,wh=typeof Promise=="function"?Promise:void 0,xw=typeof queueMicrotask=="function"?queueMicrotask:typeof wh<"u"?function(e){return wh.resolve(null).then(e).catch(yw)}:ed;function yw(e){setTimeout(function(){throw e})}function nc(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),es(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);es(t)}function vr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Sh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var si=Math.random().toString(36).slice(2),On="__reactFiber$"+si,is="__reactProps$"+si,Qn="__reactContainer$"+si,td="__reactEvents$"+si,vw="__reactListeners$"+si,bw="__reactHandles$"+si;function Wr(e){var t=e[On];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Qn]||n[On]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Sh(e);e!==null;){if(n=e[On])return n;e=Sh(e)}return t}e=n,n=e.parentNode}return null}function Ss(e){return e=e[On]||e[Qn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Po(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(D(33))}function jl(e){return e[is]||null}var nd=[],Oo=-1;function Or(e){return{current:e}}function Te(e){0>Oo||(e.current=nd[Oo],nd[Oo]=null,Oo--)}function _e(e,t){Oo++,nd[Oo]=e.current,e.current=t}var jr={},bt=Or(jr),$t=Or(!1),to=jr;function Qo(e,t){var n=e.type.contextTypes;if(!n)return jr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function At(e){return e=e.childContextTypes,e!=null}function Ba(){Te($t),Te(bt)}function kh(e,t,n){if(bt.current!==jr)throw Error(D(168));_e(bt,t),_e($t,n)}function Q0(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(D(108,o1(e)||"Unknown",o));return Ie({},n,r)}function Ua(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||jr,to=bt.current,_e(bt,e),_e($t,$t.current),!0}function Ch(e,t,n){var r=e.stateNode;if(!r)throw Error(D(169));n?(e=Q0(e,t,to),r.__reactInternalMemoizedMergedChildContext=e,Te($t),Te(bt),_e(bt,e)):Te($t),_e($t,n)}var Wn=null,Rl=!1,rc=!1;function X0(e){Wn===null?Wn=[e]:Wn.push(e)}function ww(e){Rl=!0,X0(e)}function Fr(){if(!rc&&Wn!==null){rc=!0;var e=0,t=we;try{var n=Wn;for(we=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Wn=null,Rl=!1}catch(o){throw Wn!==null&&(Wn=Wn.slice(e+1)),w0(af,Fr),o}finally{we=t,rc=!1}}return null}var Fo=[],$o=0,Wa=null,Va=0,nn=[],rn=0,no=null,Hn=1,qn="";function Lr(e,t){Fo[$o++]=Va,Fo[$o++]=Wa,Wa=e,Va=t}function Y0(e,t,n){nn[rn++]=Hn,nn[rn++]=qn,nn[rn++]=no,no=e;var r=Hn;e=qn;var o=32-wn(r)-1;r&=~(1<<o),n+=1;var i=32-wn(t)+o;if(30<i){var s=o-o%5;i=(r&(1<<s)-1).toString(32),r>>=s,o-=s,Hn=1<<32-wn(t)+o|n<<o|r,qn=i+e}else Hn=1<<i|n<<o|r,qn=e}function gf(e){e.return!==null&&(Lr(e,1),Y0(e,1,0))}function xf(e){for(;e===Wa;)Wa=Fo[--$o],Fo[$o]=null,Va=Fo[--$o],Fo[$o]=null;for(;e===no;)no=nn[--rn],nn[rn]=null,qn=nn[--rn],nn[rn]=null,Hn=nn[--rn],nn[rn]=null}var Gt=null,qt=null,Fe=!1,yn=null;function J0(e,t){var n=an(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Eh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Gt=e,qt=vr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Gt=e,qt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=no!==null?{id:Hn,overflow:qn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=an(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Gt=e,qt=null,!0):!1;default:return!1}}function rd(e){return(e.mode&1)!==0&&(e.flags&128)===0}function od(e){if(Fe){var t=qt;if(t){var n=t;if(!Eh(e,t)){if(rd(e))throw Error(D(418));t=vr(n.nextSibling);var r=Gt;t&&Eh(e,t)?J0(r,n):(e.flags=e.flags&-4097|2,Fe=!1,Gt=e)}}else{if(rd(e))throw Error(D(418));e.flags=e.flags&-4097|2,Fe=!1,Gt=e}}}function Nh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Gt=e}function Qs(e){if(e!==Gt)return!1;if(!Fe)return Nh(e),Fe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Zc(e.type,e.memoizedProps)),t&&(t=qt)){if(rd(e))throw Z0(),Error(D(418));for(;t;)J0(e,t),t=vr(t.nextSibling)}if(Nh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(D(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){qt=vr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}qt=null}}else qt=Gt?vr(e.stateNode.nextSibling):null;return!0}function Z0(){for(var e=qt;e;)e=vr(e.nextSibling)}function Xo(){qt=Gt=null,Fe=!1}function yf(e){yn===null?yn=[e]:yn.push(e)}var Sw=er.ReactCurrentBatchConfig;function vi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(D(309));var r=n.stateNode}if(!r)throw Error(D(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var a=o.refs;s===null?delete a[i]:a[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(D(284));if(!n._owner)throw Error(D(290,e))}return e}function Xs(e,t){throw e=Object.prototype.toString.call(t),Error(D(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function _h(e){var t=e._init;return t(e._payload)}function ex(e){function t(g,h){if(e){var m=g.deletions;m===null?(g.deletions=[h],g.flags|=16):m.push(h)}}function n(g,h){if(!e)return null;for(;h!==null;)t(g,h),h=h.sibling;return null}function r(g,h){for(g=new Map;h!==null;)h.key!==null?g.set(h.key,h):g.set(h.index,h),h=h.sibling;return g}function o(g,h){return g=kr(g,h),g.index=0,g.sibling=null,g}function i(g,h,m){return g.index=m,e?(m=g.alternate,m!==null?(m=m.index,m<h?(g.flags|=2,h):m):(g.flags|=2,h)):(g.flags|=1048576,h)}function s(g){return e&&g.alternate===null&&(g.flags|=2),g}function a(g,h,m,w){return h===null||h.tag!==6?(h=cc(m,g.mode,w),h.return=g,h):(h=o(h,m),h.return=g,h)}function l(g,h,m,w){var C=m.type;return C===_o?d(g,h,m.props.children,w,m.key):h!==null&&(h.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===sr&&_h(C)===h.type)?(w=o(h,m.props),w.ref=vi(g,h,m),w.return=g,w):(w=ya(m.type,m.key,m.props,null,g.mode,w),w.ref=vi(g,h,m),w.return=g,w)}function c(g,h,m,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=dc(m,g.mode,w),h.return=g,h):(h=o(h,m.children||[]),h.return=g,h)}function d(g,h,m,w,C){return h===null||h.tag!==7?(h=Jr(m,g.mode,w,C),h.return=g,h):(h=o(h,m),h.return=g,h)}function f(g,h,m){if(typeof h=="string"&&h!==""||typeof h=="number")return h=cc(""+h,g.mode,m),h.return=g,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ls:return m=ya(h.type,h.key,h.props,null,g.mode,m),m.ref=vi(g,null,h),m.return=g,m;case No:return h=dc(h,g.mode,m),h.return=g,h;case sr:var w=h._init;return f(g,w(h._payload),m)}if(Pi(h)||hi(h))return h=Jr(h,g.mode,m,null),h.return=g,h;Xs(g,h)}return null}function p(g,h,m,w){var C=h!==null?h.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return C!==null?null:a(g,h,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ls:return m.key===C?l(g,h,m,w):null;case No:return m.key===C?c(g,h,m,w):null;case sr:return C=m._init,p(g,h,C(m._payload),w)}if(Pi(m)||hi(m))return C!==null?null:d(g,h,m,w,null);Xs(g,m)}return null}function b(g,h,m,w,C){if(typeof w=="string"&&w!==""||typeof w=="number")return g=g.get(m)||null,a(h,g,""+w,C);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ls:return g=g.get(w.key===null?m:w.key)||null,l(h,g,w,C);case No:return g=g.get(w.key===null?m:w.key)||null,c(h,g,w,C);case sr:var S=w._init;return b(g,h,m,S(w._payload),C)}if(Pi(w)||hi(w))return g=g.get(m)||null,d(h,g,w,C,null);Xs(h,w)}return null}function x(g,h,m,w){for(var C=null,S=null,E=h,j=h=0,A=null;E!==null&&j<m.length;j++){E.index>j?(A=E,E=null):A=E.sibling;var z=p(g,E,m[j],w);if(z===null){E===null&&(E=A);break}e&&E&&z.alternate===null&&t(g,E),h=i(z,h,j),S===null?C=z:S.sibling=z,S=z,E=A}if(j===m.length)return n(g,E),Fe&&Lr(g,j),C;if(E===null){for(;j<m.length;j++)E=f(g,m[j],w),E!==null&&(h=i(E,h,j),S===null?C=E:S.sibling=E,S=E);return Fe&&Lr(g,j),C}for(E=r(g,E);j<m.length;j++)A=b(E,g,j,m[j],w),A!==null&&(e&&A.alternate!==null&&E.delete(A.key===null?j:A.key),h=i(A,h,j),S===null?C=A:S.sibling=A,S=A);return e&&E.forEach(function(T){return t(g,T)}),Fe&&Lr(g,j),C}function y(g,h,m,w){var C=hi(m);if(typeof C!="function")throw Error(D(150));if(m=C.call(m),m==null)throw Error(D(151));for(var S=C=null,E=h,j=h=0,A=null,z=m.next();E!==null&&!z.done;j++,z=m.next()){E.index>j?(A=E,E=null):A=E.sibling;var T=p(g,E,z.value,w);if(T===null){E===null&&(E=A);break}e&&E&&T.alternate===null&&t(g,E),h=i(T,h,j),S===null?C=T:S.sibling=T,S=T,E=A}if(z.done)return n(g,E),Fe&&Lr(g,j),C;if(E===null){for(;!z.done;j++,z=m.next())z=f(g,z.value,w),z!==null&&(h=i(z,h,j),S===null?C=z:S.sibling=z,S=z);return Fe&&Lr(g,j),C}for(E=r(g,E);!z.done;j++,z=m.next())z=b(E,g,j,z.value,w),z!==null&&(e&&z.alternate!==null&&E.delete(z.key===null?j:z.key),h=i(z,h,j),S===null?C=z:S.sibling=z,S=z);return e&&E.forEach(function(P){return t(g,P)}),Fe&&Lr(g,j),C}function k(g,h,m,w){if(typeof m=="object"&&m!==null&&m.type===_o&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Ls:e:{for(var C=m.key,S=h;S!==null;){if(S.key===C){if(C=m.type,C===_o){if(S.tag===7){n(g,S.sibling),h=o(S,m.props.children),h.return=g,g=h;break e}}else if(S.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===sr&&_h(C)===S.type){n(g,S.sibling),h=o(S,m.props),h.ref=vi(g,S,m),h.return=g,g=h;break e}n(g,S);break}else t(g,S);S=S.sibling}m.type===_o?(h=Jr(m.props.children,g.mode,w,m.key),h.return=g,g=h):(w=ya(m.type,m.key,m.props,null,g.mode,w),w.ref=vi(g,h,m),w.return=g,g=w)}return s(g);case No:e:{for(S=m.key;h!==null;){if(h.key===S)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){n(g,h.sibling),h=o(h,m.children||[]),h.return=g,g=h;break e}else{n(g,h);break}else t(g,h);h=h.sibling}h=dc(m,g.mode,w),h.return=g,g=h}return s(g);case sr:return S=m._init,k(g,h,S(m._payload),w)}if(Pi(m))return x(g,h,m,w);if(hi(m))return y(g,h,m,w);Xs(g,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,h!==null&&h.tag===6?(n(g,h.sibling),h=o(h,m),h.return=g,g=h):(n(g,h),h=cc(m,g.mode,w),h.return=g,g=h),s(g)):n(g,h)}return k}var Yo=ex(!0),tx=ex(!1),Ha=Or(null),qa=null,Ao=null,vf=null;function bf(){vf=Ao=qa=null}function wf(e){var t=Ha.current;Te(Ha),e._currentValue=t}function id(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Wo(e,t){qa=e,vf=Ao=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ft=!0),e.firstContext=null)}function un(e){var t=e._currentValue;if(vf!==e)if(e={context:e,memoizedValue:t,next:null},Ao===null){if(qa===null)throw Error(D(308));Ao=e,qa.dependencies={lanes:0,firstContext:e}}else Ao=Ao.next=e;return t}var Vr=null;function Sf(e){Vr===null?Vr=[e]:Vr.push(e)}function nx(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Sf(t)):(n.next=o.next,o.next=n),t.interleaved=n,Xn(e,r)}function Xn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ar=!1;function kf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rx(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Gn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function br(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,fe&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Xn(e,n)}return o=r.interleaved,o===null?(t.next=t,Sf(r)):(t.next=o.next,o.next=t),r.interleaved=t,Xn(e,n)}function fa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lf(e,n)}}function jh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ga(e,t,n,r){var o=e.updateQueue;ar=!1;var i=o.firstBaseUpdate,s=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?i=c:s.next=c,s=l;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(i!==null){var f=o.baseState;s=0,d=c=l=null,a=i;do{var p=a.lane,b=a.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:b,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=e,y=a;switch(p=t,b=n,y.tag){case 1:if(x=y.payload,typeof x=="function"){f=x.call(b,f,p);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,p=typeof x=="function"?x.call(b,f,p):x,p==null)break e;f=Ie({},f,p);break e;case 2:ar=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=o.effects,p===null?o.effects=[a]:p.push(a))}else b={eventTime:b,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=b,l=f):d=d.next=b,s|=p;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;p=a,a=p.next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}while(!0);if(d===null&&(l=f),o.baseState=l,o.firstBaseUpdate=c,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);oo|=s,e.lanes=s,e.memoizedState=f}}function Rh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(D(191,o));o.call(r)}}}var ks={},An=Or(ks),ss=Or(ks),as=Or(ks);function Hr(e){if(e===ks)throw Error(D(174));return e}function Cf(e,t){switch(_e(as,t),_e(ss,e),_e(An,ks),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Lc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Lc(t,e)}Te(An),_e(An,t)}function Jo(){Te(An),Te(ss),Te(as)}function ox(e){Hr(as.current);var t=Hr(An.current),n=Lc(t,e.type);t!==n&&(_e(ss,e),_e(An,n))}function Ef(e){ss.current===e&&(Te(An),Te(ss))}var Ae=Or(0);function Ka(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var oc=[];function Nf(){for(var e=0;e<oc.length;e++)oc[e]._workInProgressVersionPrimary=null;oc.length=0}var pa=er.ReactCurrentDispatcher,ic=er.ReactCurrentBatchConfig,ro=0,ze=null,rt=null,it=null,Qa=!1,Di=!1,ls=0,kw=0;function mt(){throw Error(D(321))}function _f(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!kn(e[n],t[n]))return!1;return!0}function jf(e,t,n,r,o,i){if(ro=i,ze=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,pa.current=e===null||e.memoizedState===null?_w:jw,e=n(r,o),Di){i=0;do{if(Di=!1,ls=0,25<=i)throw Error(D(301));i+=1,it=rt=null,t.updateQueue=null,pa.current=Rw,e=n(r,o)}while(Di)}if(pa.current=Xa,t=rt!==null&&rt.next!==null,ro=0,it=rt=ze=null,Qa=!1,t)throw Error(D(300));return e}function Rf(){var e=ls!==0;return ls=0,e}function jn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return it===null?ze.memoizedState=it=e:it=it.next=e,it}function cn(){if(rt===null){var e=ze.alternate;e=e!==null?e.memoizedState:null}else e=rt.next;var t=it===null?ze.memoizedState:it.next;if(t!==null)it=t,rt=e;else{if(e===null)throw Error(D(310));rt=e,e={memoizedState:rt.memoizedState,baseState:rt.baseState,baseQueue:rt.baseQueue,queue:rt.queue,next:null},it===null?ze.memoizedState=it=e:it=it.next=e}return it}function us(e,t){return typeof t=="function"?t(e):t}function sc(e){var t=cn(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var r=rt,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var s=o.next;o.next=i.next,i.next=s}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=s=null,l=null,c=i;do{var d=c.lane;if((ro&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,s=r):l=l.next=f,ze.lanes|=d,oo|=d}c=c.next}while(c!==null&&c!==i);l===null?s=r:l.next=a,kn(r,t.memoizedState)||(Ft=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ze.lanes|=i,oo|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ac(e){var t=cn(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do i=e(i,s.action),s=s.next;while(s!==o);kn(i,t.memoizedState)||(Ft=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function ix(){}function sx(e,t){var n=ze,r=cn(),o=t(),i=!kn(r.memoizedState,o);if(i&&(r.memoizedState=o,Ft=!0),r=r.queue,Tf(ux.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||it!==null&&it.memoizedState.tag&1){if(n.flags|=2048,cs(9,lx.bind(null,n,r,o,t),void 0,null),st===null)throw Error(D(349));ro&30||ax(n,t,o)}return o}function ax(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ze.updateQueue,t===null?(t={lastEffect:null,stores:null},ze.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function lx(e,t,n,r){t.value=n,t.getSnapshot=r,cx(t)&&dx(e)}function ux(e,t,n){return n(function(){cx(t)&&dx(e)})}function cx(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!kn(e,n)}catch{return!0}}function dx(e){var t=Xn(e,1);t!==null&&Sn(t,e,1,-1)}function Th(e){var t=jn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:us,lastRenderedState:e},t.queue=e,e=e.dispatch=Nw.bind(null,ze,e),[t.memoizedState,e]}function cs(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ze.updateQueue,t===null?(t={lastEffect:null,stores:null},ze.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function fx(){return cn().memoizedState}function ha(e,t,n,r){var o=jn();ze.flags|=e,o.memoizedState=cs(1|t,n,void 0,r===void 0?null:r)}function Tl(e,t,n,r){var o=cn();r=r===void 0?null:r;var i=void 0;if(rt!==null){var s=rt.memoizedState;if(i=s.destroy,r!==null&&_f(r,s.deps)){o.memoizedState=cs(t,n,i,r);return}}ze.flags|=e,o.memoizedState=cs(1|t,n,i,r)}function Ph(e,t){return ha(8390656,8,e,t)}function Tf(e,t){return Tl(2048,8,e,t)}function px(e,t){return Tl(4,2,e,t)}function hx(e,t){return Tl(4,4,e,t)}function mx(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function gx(e,t,n){return n=n!=null?n.concat([e]):null,Tl(4,4,mx.bind(null,t,e),n)}function Pf(){}function xx(e,t){var n=cn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&_f(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function yx(e,t){var n=cn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&_f(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function vx(e,t,n){return ro&21?(kn(n,t)||(n=C0(),ze.lanes|=n,oo|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ft=!0),e.memoizedState=n)}function Cw(e,t){var n=we;we=n!==0&&4>n?n:4,e(!0);var r=ic.transition;ic.transition={};try{e(!1),t()}finally{we=n,ic.transition=r}}function bx(){return cn().memoizedState}function Ew(e,t,n){var r=Sr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},wx(e))Sx(t,n);else if(n=nx(e,t,n,r),n!==null){var o=Et();Sn(n,e,r,o),kx(n,t,r)}}function Nw(e,t,n){var r=Sr(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(wx(e))Sx(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,a=i(s,n);if(o.hasEagerState=!0,o.eagerState=a,kn(a,s)){var l=t.interleaved;l===null?(o.next=o,Sf(t)):(o.next=l.next,l.next=o),t.interleaved=o;return}}catch{}finally{}n=nx(e,t,o,r),n!==null&&(o=Et(),Sn(n,e,r,o),kx(n,t,r))}}function wx(e){var t=e.alternate;return e===ze||t!==null&&t===ze}function Sx(e,t){Di=Qa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function kx(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lf(e,n)}}var Xa={readContext:un,useCallback:mt,useContext:mt,useEffect:mt,useImperativeHandle:mt,useInsertionEffect:mt,useLayoutEffect:mt,useMemo:mt,useReducer:mt,useRef:mt,useState:mt,useDebugValue:mt,useDeferredValue:mt,useTransition:mt,useMutableSource:mt,useSyncExternalStore:mt,useId:mt,unstable_isNewReconciler:!1},_w={readContext:un,useCallback:function(e,t){return jn().memoizedState=[e,t===void 0?null:t],e},useContext:un,useEffect:Ph,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ha(4194308,4,mx.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ha(4194308,4,e,t)},useInsertionEffect:function(e,t){return ha(4,2,e,t)},useMemo:function(e,t){var n=jn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=jn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ew.bind(null,ze,e),[r.memoizedState,e]},useRef:function(e){var t=jn();return e={current:e},t.memoizedState=e},useState:Th,useDebugValue:Pf,useDeferredValue:function(e){return jn().memoizedState=e},useTransition:function(){var e=Th(!1),t=e[0];return e=Cw.bind(null,e[1]),jn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ze,o=jn();if(Fe){if(n===void 0)throw Error(D(407));n=n()}else{if(n=t(),st===null)throw Error(D(349));ro&30||ax(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Ph(ux.bind(null,r,i,e),[e]),r.flags|=2048,cs(9,lx.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=jn(),t=st.identifierPrefix;if(Fe){var n=qn,r=Hn;n=(r&~(1<<32-wn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ls++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=kw++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},jw={readContext:un,useCallback:xx,useContext:un,useEffect:Tf,useImperativeHandle:gx,useInsertionEffect:px,useLayoutEffect:hx,useMemo:yx,useReducer:sc,useRef:fx,useState:function(){return sc(us)},useDebugValue:Pf,useDeferredValue:function(e){var t=cn();return vx(t,rt.memoizedState,e)},useTransition:function(){var e=sc(us)[0],t=cn().memoizedState;return[e,t]},useMutableSource:ix,useSyncExternalStore:sx,useId:bx,unstable_isNewReconciler:!1},Rw={readContext:un,useCallback:xx,useContext:un,useEffect:Tf,useImperativeHandle:gx,useInsertionEffect:px,useLayoutEffect:hx,useMemo:yx,useReducer:ac,useRef:fx,useState:function(){return ac(us)},useDebugValue:Pf,useDeferredValue:function(e){var t=cn();return rt===null?t.memoizedState=e:vx(t,rt.memoizedState,e)},useTransition:function(){var e=ac(us)[0],t=cn().memoizedState;return[e,t]},useMutableSource:ix,useSyncExternalStore:sx,useId:bx,unstable_isNewReconciler:!1};function gn(e,t){if(e&&e.defaultProps){t=Ie({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function sd(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ie({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Pl={isMounted:function(e){return(e=e._reactInternals)?uo(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Et(),o=Sr(e),i=Gn(r,o);i.payload=t,n!=null&&(i.callback=n),t=br(e,i,o),t!==null&&(Sn(t,e,o,r),fa(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Et(),o=Sr(e),i=Gn(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=br(e,i,o),t!==null&&(Sn(t,e,o,r),fa(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Et(),r=Sr(e),o=Gn(n,r);o.tag=2,t!=null&&(o.callback=t),t=br(e,o,r),t!==null&&(Sn(t,e,r,n),fa(t,e,r))}};function Oh(e,t,n,r,o,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):t.prototype&&t.prototype.isPureReactComponent?!ns(n,r)||!ns(o,i):!0}function Cx(e,t,n){var r=!1,o=jr,i=t.contextType;return typeof i=="object"&&i!==null?i=un(i):(o=At(t)?to:bt.current,r=t.contextTypes,i=(r=r!=null)?Qo(e,o):jr),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Pl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Fh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Pl.enqueueReplaceState(t,t.state,null)}function ad(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},kf(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=un(i):(i=At(t)?to:bt.current,o.context=Qo(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(sd(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Pl.enqueueReplaceState(o,o.state,null),Ga(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Zo(e,t){try{var n="",r=t;do n+=r1(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function lc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ld(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Tw=typeof WeakMap=="function"?WeakMap:Map;function Ex(e,t,n){n=Gn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ja||(Ja=!0,yd=r),ld(e,t)},n}function Nx(e,t,n){n=Gn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){ld(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){ld(e,t),typeof r!="function"&&(wr===null?wr=new Set([this]):wr.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function $h(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Tw;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Vw.bind(null,e,t,n),t.then(e,e))}function Ah(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function zh(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Gn(-1,1),t.tag=2,br(n,t,1))),n.lanes|=1),e)}var Pw=er.ReactCurrentOwner,Ft=!1;function kt(e,t,n,r){t.child=e===null?tx(t,null,n,r):Yo(t,e.child,n,r)}function Ih(e,t,n,r,o){n=n.render;var i=t.ref;return Wo(t,o),r=jf(e,t,n,r,i,o),n=Rf(),e!==null&&!Ft?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Yn(e,t,o)):(Fe&&n&&gf(t),t.flags|=1,kt(e,t,r,o),t.child)}function Mh(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Lf(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,_x(e,t,i,r,o)):(e=ya(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:ns,n(s,r)&&e.ref===t.ref)return Yn(e,t,o)}return t.flags|=1,e=kr(i,r),e.ref=t.ref,e.return=t,t.child=e}function _x(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(ns(i,r)&&e.ref===t.ref)if(Ft=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Ft=!0);else return t.lanes=e.lanes,Yn(e,t,o)}return ud(e,t,n,r,o)}function jx(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},_e(Io,Wt),Wt|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,_e(Io,Wt),Wt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,_e(Io,Wt),Wt|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,_e(Io,Wt),Wt|=r;return kt(e,t,o,n),t.child}function Rx(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ud(e,t,n,r,o){var i=At(n)?to:bt.current;return i=Qo(t,i),Wo(t,o),n=jf(e,t,n,r,i,o),r=Rf(),e!==null&&!Ft?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Yn(e,t,o)):(Fe&&r&&gf(t),t.flags|=1,kt(e,t,n,o),t.child)}function Lh(e,t,n,r,o){if(At(n)){var i=!0;Ua(t)}else i=!1;if(Wo(t,o),t.stateNode===null)ma(e,t),Cx(t,n,r),ad(t,n,r,o),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=un(c):(c=At(n)?to:bt.current,c=Qo(t,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==c)&&Fh(t,s,r,c),ar=!1;var p=t.memoizedState;s.state=p,Ga(t,r,s,o),l=t.memoizedState,a!==r||p!==l||$t.current||ar?(typeof d=="function"&&(sd(t,n,d,r),l=t.memoizedState),(a=ar||Oh(t,n,a,r,p,l,c))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,rx(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:gn(t.type,a),s.props=c,f=t.pendingProps,p=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=un(l):(l=At(n)?to:bt.current,l=Qo(t,l));var b=n.getDerivedStateFromProps;(d=typeof b=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||p!==l)&&Fh(t,s,r,l),ar=!1,p=t.memoizedState,s.state=p,Ga(t,r,s,o);var x=t.memoizedState;a!==f||p!==x||$t.current||ar?(typeof b=="function"&&(sd(t,n,b,r),x=t.memoizedState),(c=ar||Oh(t,n,c,r,p,x,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,x,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,x,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),s.props=r,s.state=x,s.context=l,r=c):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return cd(e,t,n,r,i,o)}function cd(e,t,n,r,o,i){Rx(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return o&&Ch(t,n,!1),Yn(e,t,i);r=t.stateNode,Pw.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Yo(t,e.child,null,i),t.child=Yo(t,null,a,i)):kt(e,t,a,i),t.memoizedState=r.state,o&&Ch(t,n,!0),t.child}function Tx(e){var t=e.stateNode;t.pendingContext?kh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&kh(e,t.context,!1),Cf(e,t.containerInfo)}function Dh(e,t,n,r,o){return Xo(),yf(o),t.flags|=256,kt(e,t,n,r),t.child}var dd={dehydrated:null,treeContext:null,retryLane:0};function fd(e){return{baseLanes:e,cachePool:null,transitions:null}}function Px(e,t,n){var r=t.pendingProps,o=Ae.current,i=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),_e(Ae,o&1),e===null)return od(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,i?(r=t.mode,i=t.child,s={mode:"hidden",children:s},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=$l(s,r,0,null),e=Jr(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=fd(n),t.memoizedState=dd,e):Of(t,s));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Ow(e,t,s,r,a,o,n);if(i){i=r.fallback,s=t.mode,o=e.child,a=o.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=kr(o,l),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=kr(a,i):(i=Jr(i,s,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,s=e.child.memoizedState,s=s===null?fd(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=dd,r}return i=e.child,e=i.sibling,r=kr(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Of(e,t){return t=$l({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ys(e,t,n,r){return r!==null&&yf(r),Yo(t,e.child,null,n),e=Of(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ow(e,t,n,r,o,i,s){if(n)return t.flags&256?(t.flags&=-257,r=lc(Error(D(422))),Ys(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=$l({mode:"visible",children:r.children},o,0,null),i=Jr(i,o,s,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Yo(t,e.child,null,s),t.child.memoizedState=fd(s),t.memoizedState=dd,i);if(!(t.mode&1))return Ys(e,t,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(D(419)),r=lc(i,r,void 0),Ys(e,t,s,r)}if(a=(s&e.childLanes)!==0,Ft||a){if(r=st,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|s)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Xn(e,o),Sn(r,e,o,-1))}return Mf(),r=lc(Error(D(421))),Ys(e,t,s,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Hw.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,qt=vr(o.nextSibling),Gt=t,Fe=!0,yn=null,e!==null&&(nn[rn++]=Hn,nn[rn++]=qn,nn[rn++]=no,Hn=e.id,qn=e.overflow,no=t),t=Of(t,r.children),t.flags|=4096,t)}function Bh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),id(e.return,t,n)}function uc(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Ox(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(kt(e,t,r.children,n),r=Ae.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Bh(e,n,t);else if(e.tag===19)Bh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(_e(Ae,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Ka(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),uc(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Ka(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}uc(t,!0,n,null,i);break;case"together":uc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ma(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Yn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),oo|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(D(153));if(t.child!==null){for(e=t.child,n=kr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=kr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Fw(e,t,n){switch(t.tag){case 3:Tx(t),Xo();break;case 5:ox(t);break;case 1:At(t.type)&&Ua(t);break;case 4:Cf(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;_e(Ha,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(_e(Ae,Ae.current&1),t.flags|=128,null):n&t.child.childLanes?Px(e,t,n):(_e(Ae,Ae.current&1),e=Yn(e,t,n),e!==null?e.sibling:null);_e(Ae,Ae.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ox(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),_e(Ae,Ae.current),r)break;return null;case 22:case 23:return t.lanes=0,jx(e,t,n)}return Yn(e,t,n)}var Fx,pd,$x,Ax;Fx=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};pd=function(){};$x=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Hr(An.current);var i=null;switch(n){case"input":o=Ac(e,o),r=Ac(e,r),i=[];break;case"select":o=Ie({},o,{value:void 0}),r=Ie({},r,{value:void 0}),i=[];break;case"textarea":o=Mc(e,o),r=Mc(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Da)}Dc(n,r);var s;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var a=o[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Qi.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var l=r[c];if(a=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(i||(i=[]),i.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(i=i||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Qi.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Re("scroll",e),i||a===l||(i=[])):(i=i||[]).push(c,l))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Ax=function(e,t,n,r){n!==r&&(t.flags|=4)};function bi(e,t){if(!Fe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function gt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function $w(e,t,n){var r=t.pendingProps;switch(xf(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gt(t),null;case 1:return At(t.type)&&Ba(),gt(t),null;case 3:return r=t.stateNode,Jo(),Te($t),Te(bt),Nf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Qs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,yn!==null&&(wd(yn),yn=null))),pd(e,t),gt(t),null;case 5:Ef(t);var o=Hr(as.current);if(n=t.type,e!==null&&t.stateNode!=null)$x(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(D(166));return gt(t),null}if(e=Hr(An.current),Qs(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[On]=t,r[is]=i,e=(t.mode&1)!==0,n){case"dialog":Re("cancel",r),Re("close",r);break;case"iframe":case"object":case"embed":Re("load",r);break;case"video":case"audio":for(o=0;o<Fi.length;o++)Re(Fi[o],r);break;case"source":Re("error",r);break;case"img":case"image":case"link":Re("error",r),Re("load",r);break;case"details":Re("toggle",r);break;case"input":Xp(r,i),Re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Re("invalid",r);break;case"textarea":Jp(r,i),Re("invalid",r)}Dc(n,i),o=null;for(var s in i)if(i.hasOwnProperty(s)){var a=i[s];s==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Ks(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Ks(r.textContent,a,e),o=["children",""+a]):Qi.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Re("scroll",r)}switch(n){case"input":Ds(r),Yp(r,i,!0);break;case"textarea":Ds(r),Zp(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Da)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=u0(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[On]=t,e[is]=r,Fx(e,t,!1,!1),t.stateNode=e;e:{switch(s=Bc(n,r),n){case"dialog":Re("cancel",e),Re("close",e),o=r;break;case"iframe":case"object":case"embed":Re("load",e),o=r;break;case"video":case"audio":for(o=0;o<Fi.length;o++)Re(Fi[o],e);o=r;break;case"source":Re("error",e),o=r;break;case"img":case"image":case"link":Re("error",e),Re("load",e),o=r;break;case"details":Re("toggle",e),o=r;break;case"input":Xp(e,r),o=Ac(e,r),Re("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Ie({},r,{value:void 0}),Re("invalid",e);break;case"textarea":Jp(e,r),o=Mc(e,r),Re("invalid",e);break;default:o=r}Dc(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var l=a[i];i==="style"?f0(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&c0(e,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Xi(e,l):typeof l=="number"&&Xi(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Qi.hasOwnProperty(i)?l!=null&&i==="onScroll"&&Re("scroll",e):l!=null&&tf(e,i,l,s))}switch(n){case"input":Ds(e),Yp(e,r,!1);break;case"textarea":Ds(e),Zp(e);break;case"option":r.value!=null&&e.setAttribute("value",""+_r(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Lo(e,!!r.multiple,i,!1):r.defaultValue!=null&&Lo(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Da)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return gt(t),null;case 6:if(e&&t.stateNode!=null)Ax(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(D(166));if(n=Hr(as.current),Hr(An.current),Qs(t)){if(r=t.stateNode,n=t.memoizedProps,r[On]=t,(i=r.nodeValue!==n)&&(e=Gt,e!==null))switch(e.tag){case 3:Ks(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ks(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[On]=t,t.stateNode=r}return gt(t),null;case 13:if(Te(Ae),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Fe&&qt!==null&&t.mode&1&&!(t.flags&128))Z0(),Xo(),t.flags|=98560,i=!1;else if(i=Qs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(D(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(D(317));i[On]=t}else Xo(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;gt(t),i=!1}else yn!==null&&(wd(yn),yn=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ae.current&1?ot===0&&(ot=3):Mf())),t.updateQueue!==null&&(t.flags|=4),gt(t),null);case 4:return Jo(),pd(e,t),e===null&&rs(t.stateNode.containerInfo),gt(t),null;case 10:return wf(t.type._context),gt(t),null;case 17:return At(t.type)&&Ba(),gt(t),null;case 19:if(Te(Ae),i=t.memoizedState,i===null)return gt(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)bi(i,!1);else{if(ot!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Ka(e),s!==null){for(t.flags|=128,bi(i,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return _e(Ae,Ae.current&1|2),t.child}e=e.sibling}i.tail!==null&&Ge()>ei&&(t.flags|=128,r=!0,bi(i,!1),t.lanes=4194304)}else{if(!r)if(e=Ka(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),bi(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!Fe)return gt(t),null}else 2*Ge()-i.renderingStartTime>ei&&n!==1073741824&&(t.flags|=128,r=!0,bi(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(n=i.last,n!==null?n.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Ge(),t.sibling=null,n=Ae.current,_e(Ae,r?n&1|2:n&1),t):(gt(t),null);case 22:case 23:return If(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Wt&1073741824&&(gt(t),t.subtreeFlags&6&&(t.flags|=8192)):gt(t),null;case 24:return null;case 25:return null}throw Error(D(156,t.tag))}function Aw(e,t){switch(xf(t),t.tag){case 1:return At(t.type)&&Ba(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Jo(),Te($t),Te(bt),Nf(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ef(t),null;case 13:if(Te(Ae),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(D(340));Xo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Te(Ae),null;case 4:return Jo(),null;case 10:return wf(t.type._context),null;case 22:case 23:return If(),null;case 24:return null;default:return null}}var Js=!1,yt=!1,zw=typeof WeakSet=="function"?WeakSet:Set,Y=null;function zo(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ve(e,t,r)}else n.current=null}function hd(e,t,n){try{n()}catch(r){Ve(e,t,r)}}var Uh=!1;function Iw(e,t){if(Yc=Ia,e=D0(),mf(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,c=0,d=0,f=e,p=null;t:for(;;){for(var b;f!==n||o!==0&&f.nodeType!==3||(a=s+o),f!==i||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(b=f.firstChild)!==null;)p=f,f=b;for(;;){if(f===e)break t;if(p===n&&++c===o&&(a=s),p===i&&++d===r&&(l=s),(b=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=b}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Jc={focusedElem:e,selectionRange:n},Ia=!1,Y=t;Y!==null;)if(t=Y,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Y=e;else for(;Y!==null;){t=Y;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,k=x.memoizedState,g=t.stateNode,h=g.getSnapshotBeforeUpdate(t.elementType===t.type?y:gn(t.type,y),k);g.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(D(163))}}catch(w){Ve(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,Y=e;break}Y=t.return}return x=Uh,Uh=!1,x}function Bi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&hd(t,n,i)}o=o.next}while(o!==r)}}function Ol(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function md(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function zx(e){var t=e.alternate;t!==null&&(e.alternate=null,zx(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[On],delete t[is],delete t[td],delete t[vw],delete t[bw])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ix(e){return e.tag===5||e.tag===3||e.tag===4}function Wh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ix(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Da));else if(r!==4&&(e=e.child,e!==null))for(gd(e,t,n),e=e.sibling;e!==null;)gd(e,t,n),e=e.sibling}function xd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(xd(e,t,n),e=e.sibling;e!==null;)xd(e,t,n),e=e.sibling}var dt=null,xn=!1;function or(e,t,n){for(n=n.child;n!==null;)Mx(e,t,n),n=n.sibling}function Mx(e,t,n){if($n&&typeof $n.onCommitFiberUnmount=="function")try{$n.onCommitFiberUnmount(Cl,n)}catch{}switch(n.tag){case 5:yt||zo(n,t);case 6:var r=dt,o=xn;dt=null,or(e,t,n),dt=r,xn=o,dt!==null&&(xn?(e=dt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):dt.removeChild(n.stateNode));break;case 18:dt!==null&&(xn?(e=dt,n=n.stateNode,e.nodeType===8?nc(e.parentNode,n):e.nodeType===1&&nc(e,n),es(e)):nc(dt,n.stateNode));break;case 4:r=dt,o=xn,dt=n.stateNode.containerInfo,xn=!0,or(e,t,n),dt=r,xn=o;break;case 0:case 11:case 14:case 15:if(!yt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&hd(n,t,s),o=o.next}while(o!==r)}or(e,t,n);break;case 1:if(!yt&&(zo(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ve(n,t,a)}or(e,t,n);break;case 21:or(e,t,n);break;case 22:n.mode&1?(yt=(r=yt)||n.memoizedState!==null,or(e,t,n),yt=r):or(e,t,n);break;default:or(e,t,n)}}function Vh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new zw),t.forEach(function(r){var o=qw.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function mn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:dt=a.stateNode,xn=!1;break e;case 3:dt=a.stateNode.containerInfo,xn=!0;break e;case 4:dt=a.stateNode.containerInfo,xn=!0;break e}a=a.return}if(dt===null)throw Error(D(160));Mx(i,s,o),dt=null,xn=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(c){Ve(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Lx(t,e),t=t.sibling}function Lx(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(mn(t,e),Nn(e),r&4){try{Bi(3,e,e.return),Ol(3,e)}catch(y){Ve(e,e.return,y)}try{Bi(5,e,e.return)}catch(y){Ve(e,e.return,y)}}break;case 1:mn(t,e),Nn(e),r&512&&n!==null&&zo(n,n.return);break;case 5:if(mn(t,e),Nn(e),r&512&&n!==null&&zo(n,n.return),e.flags&32){var o=e.stateNode;try{Xi(o,"")}catch(y){Ve(e,e.return,y)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,s=n!==null?n.memoizedProps:i,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&a0(o,i),Bc(a,s);var c=Bc(a,i);for(s=0;s<l.length;s+=2){var d=l[s],f=l[s+1];d==="style"?f0(o,f):d==="dangerouslySetInnerHTML"?c0(o,f):d==="children"?Xi(o,f):tf(o,d,f,c)}switch(a){case"input":zc(o,i);break;case"textarea":l0(o,i);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var b=i.value;b!=null?Lo(o,!!i.multiple,b,!1):p!==!!i.multiple&&(i.defaultValue!=null?Lo(o,!!i.multiple,i.defaultValue,!0):Lo(o,!!i.multiple,i.multiple?[]:"",!1))}o[is]=i}catch(y){Ve(e,e.return,y)}}break;case 6:if(mn(t,e),Nn(e),r&4){if(e.stateNode===null)throw Error(D(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(y){Ve(e,e.return,y)}}break;case 3:if(mn(t,e),Nn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{es(t.containerInfo)}catch(y){Ve(e,e.return,y)}break;case 4:mn(t,e),Nn(e);break;case 13:mn(t,e),Nn(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Af=Ge())),r&4&&Vh(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(yt=(c=yt)||d,mn(t,e),yt=c):mn(t,e),Nn(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(Y=e,d=e.child;d!==null;){for(f=Y=d;Y!==null;){switch(p=Y,b=p.child,p.tag){case 0:case 11:case 14:case 15:Bi(4,p,p.return);break;case 1:zo(p,p.return);var x=p.stateNode;if(typeof x.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(y){Ve(r,n,y)}}break;case 5:zo(p,p.return);break;case 22:if(p.memoizedState!==null){qh(f);continue}}b!==null?(b.return=p,Y=b):qh(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{o=f.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=d0("display",s))}catch(y){Ve(e,e.return,y)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(y){Ve(e,e.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:mn(t,e),Nn(e),r&4&&Vh(e);break;case 21:break;default:mn(t,e),Nn(e)}}function Nn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ix(n)){var r=n;break e}n=n.return}throw Error(D(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Xi(o,""),r.flags&=-33);var i=Wh(e);xd(e,i,o);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Wh(e);gd(e,a,s);break;default:throw Error(D(161))}}catch(l){Ve(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Mw(e,t,n){Y=e,Dx(e)}function Dx(e,t,n){for(var r=(e.mode&1)!==0;Y!==null;){var o=Y,i=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||Js;if(!s){var a=o.alternate,l=a!==null&&a.memoizedState!==null||yt;a=Js;var c=yt;if(Js=s,(yt=l)&&!c)for(Y=o;Y!==null;)s=Y,l=s.child,s.tag===22&&s.memoizedState!==null?Gh(o):l!==null?(l.return=s,Y=l):Gh(o);for(;i!==null;)Y=i,Dx(i),i=i.sibling;Y=o,Js=a,yt=c}Hh(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,Y=i):Hh(e)}}function Hh(e){for(;Y!==null;){var t=Y;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:yt||Ol(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!yt)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:gn(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Rh(t,i,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Rh(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&es(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(D(163))}yt||t.flags&512&&md(t)}catch(p){Ve(t,t.return,p)}}if(t===e){Y=null;break}if(n=t.sibling,n!==null){n.return=t.return,Y=n;break}Y=t.return}}function qh(e){for(;Y!==null;){var t=Y;if(t===e){Y=null;break}var n=t.sibling;if(n!==null){n.return=t.return,Y=n;break}Y=t.return}}function Gh(e){for(;Y!==null;){var t=Y;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ol(4,t)}catch(l){Ve(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(l){Ve(t,o,l)}}var i=t.return;try{md(t)}catch(l){Ve(t,i,l)}break;case 5:var s=t.return;try{md(t)}catch(l){Ve(t,s,l)}}}catch(l){Ve(t,t.return,l)}if(t===e){Y=null;break}var a=t.sibling;if(a!==null){a.return=t.return,Y=a;break}Y=t.return}}var Lw=Math.ceil,Ya=er.ReactCurrentDispatcher,Ff=er.ReactCurrentOwner,ln=er.ReactCurrentBatchConfig,fe=0,st=null,Je=null,pt=0,Wt=0,Io=Or(0),ot=0,ds=null,oo=0,Fl=0,$f=0,Ui=null,Pt=null,Af=0,ei=1/0,Un=null,Ja=!1,yd=null,wr=null,Zs=!1,fr=null,Za=0,Wi=0,vd=null,ga=-1,xa=0;function Et(){return fe&6?Ge():ga!==-1?ga:ga=Ge()}function Sr(e){return e.mode&1?fe&2&&pt!==0?pt&-pt:Sw.transition!==null?(xa===0&&(xa=C0()),xa):(e=we,e!==0||(e=window.event,e=e===void 0?16:P0(e.type)),e):1}function Sn(e,t,n,r){if(50<Wi)throw Wi=0,vd=null,Error(D(185));bs(e,n,r),(!(fe&2)||e!==st)&&(e===st&&(!(fe&2)&&(Fl|=n),ot===4&&ur(e,pt)),zt(e,r),n===1&&fe===0&&!(t.mode&1)&&(ei=Ge()+500,Rl&&Fr()))}function zt(e,t){var n=e.callbackNode;S1(e,t);var r=za(e,e===st?pt:0);if(r===0)n!==null&&nh(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&nh(n),t===1)e.tag===0?ww(Kh.bind(null,e)):X0(Kh.bind(null,e)),xw(function(){!(fe&6)&&Fr()}),n=null;else{switch(E0(r)){case 1:n=af;break;case 4:n=S0;break;case 16:n=Aa;break;case 536870912:n=k0;break;default:n=Aa}n=Kx(n,Bx.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Bx(e,t){if(ga=-1,xa=0,fe&6)throw Error(D(327));var n=e.callbackNode;if(Vo()&&e.callbackNode!==n)return null;var r=za(e,e===st?pt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=el(e,r);else{t=r;var o=fe;fe|=2;var i=Wx();(st!==e||pt!==t)&&(Un=null,ei=Ge()+500,Yr(e,t));do try{Uw();break}catch(a){Ux(e,a)}while(!0);bf(),Ya.current=i,fe=o,Je!==null?t=0:(st=null,pt=0,t=ot)}if(t!==0){if(t===2&&(o=qc(e),o!==0&&(r=o,t=bd(e,o))),t===1)throw n=ds,Yr(e,0),ur(e,r),zt(e,Ge()),n;if(t===6)ur(e,r);else{if(o=e.current.alternate,!(r&30)&&!Dw(o)&&(t=el(e,r),t===2&&(i=qc(e),i!==0&&(r=i,t=bd(e,i))),t===1))throw n=ds,Yr(e,0),ur(e,r),zt(e,Ge()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(D(345));case 2:Dr(e,Pt,Un);break;case 3:if(ur(e,r),(r&130023424)===r&&(t=Af+500-Ge(),10<t)){if(za(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Et(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ed(Dr.bind(null,e,Pt,Un),t);break}Dr(e,Pt,Un);break;case 4:if(ur(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-wn(r);i=1<<s,s=t[s],s>o&&(o=s),r&=~i}if(r=o,r=Ge()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Lw(r/1960))-r,10<r){e.timeoutHandle=ed(Dr.bind(null,e,Pt,Un),r);break}Dr(e,Pt,Un);break;case 5:Dr(e,Pt,Un);break;default:throw Error(D(329))}}}return zt(e,Ge()),e.callbackNode===n?Bx.bind(null,e):null}function bd(e,t){var n=Ui;return e.current.memoizedState.isDehydrated&&(Yr(e,t).flags|=256),e=el(e,t),e!==2&&(t=Pt,Pt=n,t!==null&&wd(t)),e}function wd(e){Pt===null?Pt=e:Pt.push.apply(Pt,e)}function Dw(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!kn(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ur(e,t){for(t&=~$f,t&=~Fl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-wn(t),r=1<<n;e[n]=-1,t&=~r}}function Kh(e){if(fe&6)throw Error(D(327));Vo();var t=za(e,0);if(!(t&1))return zt(e,Ge()),null;var n=el(e,t);if(e.tag!==0&&n===2){var r=qc(e);r!==0&&(t=r,n=bd(e,r))}if(n===1)throw n=ds,Yr(e,0),ur(e,t),zt(e,Ge()),n;if(n===6)throw Error(D(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Dr(e,Pt,Un),zt(e,Ge()),null}function zf(e,t){var n=fe;fe|=1;try{return e(t)}finally{fe=n,fe===0&&(ei=Ge()+500,Rl&&Fr())}}function io(e){fr!==null&&fr.tag===0&&!(fe&6)&&Vo();var t=fe;fe|=1;var n=ln.transition,r=we;try{if(ln.transition=null,we=1,e)return e()}finally{we=r,ln.transition=n,fe=t,!(fe&6)&&Fr()}}function If(){Wt=Io.current,Te(Io)}function Yr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,gw(n)),Je!==null)for(n=Je.return;n!==null;){var r=n;switch(xf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ba();break;case 3:Jo(),Te($t),Te(bt),Nf();break;case 5:Ef(r);break;case 4:Jo();break;case 13:Te(Ae);break;case 19:Te(Ae);break;case 10:wf(r.type._context);break;case 22:case 23:If()}n=n.return}if(st=e,Je=e=kr(e.current,null),pt=Wt=t,ot=0,ds=null,$f=Fl=oo=0,Pt=Ui=null,Vr!==null){for(t=0;t<Vr.length;t++)if(n=Vr[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var s=i.next;i.next=o,r.next=s}n.pending=r}Vr=null}return e}function Ux(e,t){do{var n=Je;try{if(bf(),pa.current=Xa,Qa){for(var r=ze.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Qa=!1}if(ro=0,it=rt=ze=null,Di=!1,ls=0,Ff.current=null,n===null||n.return===null){ot=1,ds=t,Je=null;break}e:{var i=e,s=n.return,a=n,l=t;if(t=pt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var b=Ah(s);if(b!==null){b.flags&=-257,zh(b,s,a,i,t),b.mode&1&&$h(i,c,t),t=b,l=c;var x=t.updateQueue;if(x===null){var y=new Set;y.add(l),t.updateQueue=y}else x.add(l);break e}else{if(!(t&1)){$h(i,c,t),Mf();break e}l=Error(D(426))}}else if(Fe&&a.mode&1){var k=Ah(s);if(k!==null){!(k.flags&65536)&&(k.flags|=256),zh(k,s,a,i,t),yf(Zo(l,a));break e}}i=l=Zo(l,a),ot!==4&&(ot=2),Ui===null?Ui=[i]:Ui.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var g=Ex(i,l,t);jh(i,g);break e;case 1:a=l;var h=i.type,m=i.stateNode;if(!(i.flags&128)&&(typeof h.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(wr===null||!wr.has(m)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=Nx(i,a,t);jh(i,w);break e}}i=i.return}while(i!==null)}Hx(n)}catch(C){t=C,Je===n&&n!==null&&(Je=n=n.return);continue}break}while(!0)}function Wx(){var e=Ya.current;return Ya.current=Xa,e===null?Xa:e}function Mf(){(ot===0||ot===3||ot===2)&&(ot=4),st===null||!(oo&268435455)&&!(Fl&268435455)||ur(st,pt)}function el(e,t){var n=fe;fe|=2;var r=Wx();(st!==e||pt!==t)&&(Un=null,Yr(e,t));do try{Bw();break}catch(o){Ux(e,o)}while(!0);if(bf(),fe=n,Ya.current=r,Je!==null)throw Error(D(261));return st=null,pt=0,ot}function Bw(){for(;Je!==null;)Vx(Je)}function Uw(){for(;Je!==null&&!p1();)Vx(Je)}function Vx(e){var t=Gx(e.alternate,e,Wt);e.memoizedProps=e.pendingProps,t===null?Hx(e):Je=t,Ff.current=null}function Hx(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Aw(n,t),n!==null){n.flags&=32767,Je=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ot=6,Je=null;return}}else if(n=$w(n,t,Wt),n!==null){Je=n;return}if(t=t.sibling,t!==null){Je=t;return}Je=t=e}while(t!==null);ot===0&&(ot=5)}function Dr(e,t,n){var r=we,o=ln.transition;try{ln.transition=null,we=1,Ww(e,t,n,r)}finally{ln.transition=o,we=r}return null}function Ww(e,t,n,r){do Vo();while(fr!==null);if(fe&6)throw Error(D(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(D(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(k1(e,i),e===st&&(Je=st=null,pt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Zs||(Zs=!0,Kx(Aa,function(){return Vo(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=ln.transition,ln.transition=null;var s=we;we=1;var a=fe;fe|=4,Ff.current=null,Iw(e,n),Lx(n,e),uw(Jc),Ia=!!Yc,Jc=Yc=null,e.current=n,Mw(n),h1(),fe=a,we=s,ln.transition=i}else e.current=n;if(Zs&&(Zs=!1,fr=e,Za=o),i=e.pendingLanes,i===0&&(wr=null),x1(n.stateNode),zt(e,Ge()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Ja)throw Ja=!1,e=yd,yd=null,e;return Za&1&&e.tag!==0&&Vo(),i=e.pendingLanes,i&1?e===vd?Wi++:(Wi=0,vd=e):Wi=0,Fr(),null}function Vo(){if(fr!==null){var e=E0(Za),t=ln.transition,n=we;try{if(ln.transition=null,we=16>e?16:e,fr===null)var r=!1;else{if(e=fr,fr=null,Za=0,fe&6)throw Error(D(331));var o=fe;for(fe|=4,Y=e.current;Y!==null;){var i=Y,s=i.child;if(Y.flags&16){var a=i.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Y=c;Y!==null;){var d=Y;switch(d.tag){case 0:case 11:case 15:Bi(8,d,i)}var f=d.child;if(f!==null)f.return=d,Y=f;else for(;Y!==null;){d=Y;var p=d.sibling,b=d.return;if(zx(d),d===c){Y=null;break}if(p!==null){p.return=b,Y=p;break}Y=b}}}var x=i.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var k=y.sibling;y.sibling=null,y=k}while(y!==null)}}Y=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,Y=s;else e:for(;Y!==null;){if(i=Y,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Bi(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,Y=g;break e}Y=i.return}}var h=e.current;for(Y=h;Y!==null;){s=Y;var m=s.child;if(s.subtreeFlags&2064&&m!==null)m.return=s,Y=m;else e:for(s=h;Y!==null;){if(a=Y,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ol(9,a)}}catch(C){Ve(a,a.return,C)}if(a===s){Y=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,Y=w;break e}Y=a.return}}if(fe=o,Fr(),$n&&typeof $n.onPostCommitFiberRoot=="function")try{$n.onPostCommitFiberRoot(Cl,e)}catch{}r=!0}return r}finally{we=n,ln.transition=t}}return!1}function Qh(e,t,n){t=Zo(n,t),t=Ex(e,t,1),e=br(e,t,1),t=Et(),e!==null&&(bs(e,1,t),zt(e,t))}function Ve(e,t,n){if(e.tag===3)Qh(e,e,n);else for(;t!==null;){if(t.tag===3){Qh(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(wr===null||!wr.has(r))){e=Zo(n,e),e=Nx(t,e,1),t=br(t,e,1),e=Et(),t!==null&&(bs(t,1,e),zt(t,e));break}}t=t.return}}function Vw(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Et(),e.pingedLanes|=e.suspendedLanes&n,st===e&&(pt&n)===n&&(ot===4||ot===3&&(pt&130023424)===pt&&500>Ge()-Af?Yr(e,0):$f|=n),zt(e,t)}function qx(e,t){t===0&&(e.mode&1?(t=Ws,Ws<<=1,!(Ws&130023424)&&(Ws=4194304)):t=1);var n=Et();e=Xn(e,t),e!==null&&(bs(e,t,n),zt(e,n))}function Hw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qx(e,n)}function qw(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(D(314))}r!==null&&r.delete(t),qx(e,n)}var Gx;Gx=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||$t.current)Ft=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ft=!1,Fw(e,t,n);Ft=!!(e.flags&131072)}else Ft=!1,Fe&&t.flags&1048576&&Y0(t,Va,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ma(e,t),e=t.pendingProps;var o=Qo(t,bt.current);Wo(t,n),o=jf(null,t,r,e,o,n);var i=Rf();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,At(r)?(i=!0,Ua(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,kf(t),o.updater=Pl,t.stateNode=o,o._reactInternals=t,ad(t,r,e,n),t=cd(null,t,r,!0,i,n)):(t.tag=0,Fe&&i&&gf(t),kt(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ma(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Kw(r),e=gn(r,e),o){case 0:t=ud(null,t,r,e,n);break e;case 1:t=Lh(null,t,r,e,n);break e;case 11:t=Ih(null,t,r,e,n);break e;case 14:t=Mh(null,t,r,gn(r.type,e),n);break e}throw Error(D(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:gn(r,o),ud(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:gn(r,o),Lh(e,t,r,o,n);case 3:e:{if(Tx(t),e===null)throw Error(D(387));r=t.pendingProps,i=t.memoizedState,o=i.element,rx(e,t),Ga(t,r,null,n);var s=t.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Zo(Error(D(423)),t),t=Dh(e,t,r,n,o);break e}else if(r!==o){o=Zo(Error(D(424)),t),t=Dh(e,t,r,n,o);break e}else for(qt=vr(t.stateNode.containerInfo.firstChild),Gt=t,Fe=!0,yn=null,n=tx(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Xo(),r===o){t=Yn(e,t,n);break e}kt(e,t,r,n)}t=t.child}return t;case 5:return ox(t),e===null&&od(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,s=o.children,Zc(r,o)?s=null:i!==null&&Zc(r,i)&&(t.flags|=32),Rx(e,t),kt(e,t,s,n),t.child;case 6:return e===null&&od(t),null;case 13:return Px(e,t,n);case 4:return Cf(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Yo(t,null,r,n):kt(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:gn(r,o),Ih(e,t,r,o,n);case 7:return kt(e,t,t.pendingProps,n),t.child;case 8:return kt(e,t,t.pendingProps.children,n),t.child;case 12:return kt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,s=o.value,_e(Ha,r._currentValue),r._currentValue=s,i!==null)if(kn(i.value,s)){if(i.children===o.children&&!$t.current){t=Yn(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){s=i.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=Gn(-1,n&-n),l.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),id(i.return,n,t),a.lanes|=n;break}l=l.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(D(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),id(s,n,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}kt(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Wo(t,n),o=un(o),r=r(o),t.flags|=1,kt(e,t,r,n),t.child;case 14:return r=t.type,o=gn(r,t.pendingProps),o=gn(r.type,o),Mh(e,t,r,o,n);case 15:return _x(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:gn(r,o),ma(e,t),t.tag=1,At(r)?(e=!0,Ua(t)):e=!1,Wo(t,n),Cx(t,r,o),ad(t,r,o,n),cd(null,t,r,!0,e,n);case 19:return Ox(e,t,n);case 22:return jx(e,t,n)}throw Error(D(156,t.tag))};function Kx(e,t){return w0(e,t)}function Gw(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function an(e,t,n,r){return new Gw(e,t,n,r)}function Lf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Kw(e){if(typeof e=="function")return Lf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===rf)return 11;if(e===of)return 14}return 2}function kr(e,t){var n=e.alternate;return n===null?(n=an(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ya(e,t,n,r,o,i){var s=2;if(r=e,typeof e=="function")Lf(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case _o:return Jr(n.children,o,i,t);case nf:s=8,o|=8;break;case Pc:return e=an(12,n,t,o|2),e.elementType=Pc,e.lanes=i,e;case Oc:return e=an(13,n,t,o),e.elementType=Oc,e.lanes=i,e;case Fc:return e=an(19,n,t,o),e.elementType=Fc,e.lanes=i,e;case o0:return $l(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case n0:s=10;break e;case r0:s=9;break e;case rf:s=11;break e;case of:s=14;break e;case sr:s=16,r=null;break e}throw Error(D(130,e==null?e:typeof e,""))}return t=an(s,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Jr(e,t,n,r){return e=an(7,e,r,t),e.lanes=n,e}function $l(e,t,n,r){return e=an(22,e,r,t),e.elementType=o0,e.lanes=n,e.stateNode={isHidden:!1},e}function cc(e,t,n){return e=an(6,e,null,t),e.lanes=n,e}function dc(e,t,n){return t=an(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Qw(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hu(0),this.expirationTimes=Hu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hu(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Df(e,t,n,r,o,i,s,a,l){return e=new Qw(e,t,n,a,l),t===1?(t=1,i===!0&&(t|=8)):t=0,i=an(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},kf(i),e}function Xw(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:No,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Qx(e){if(!e)return jr;e=e._reactInternals;e:{if(uo(e)!==e||e.tag!==1)throw Error(D(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(At(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(D(171))}if(e.tag===1){var n=e.type;if(At(n))return Q0(e,n,t)}return t}function Xx(e,t,n,r,o,i,s,a,l){return e=Df(n,r,!0,e,o,i,s,a,l),e.context=Qx(null),n=e.current,r=Et(),o=Sr(n),i=Gn(r,o),i.callback=t??null,br(n,i,o),e.current.lanes=o,bs(e,o,r),zt(e,r),e}function Al(e,t,n,r){var o=t.current,i=Et(),s=Sr(o);return n=Qx(n),t.context===null?t.context=n:t.pendingContext=n,t=Gn(i,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=br(o,t,s),e!==null&&(Sn(e,o,s,i),fa(e,o,s)),s}function tl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Xh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Bf(e,t){Xh(e,t),(e=e.alternate)&&Xh(e,t)}function Yw(){return null}var Yx=typeof reportError=="function"?reportError:function(e){console.error(e)};function Uf(e){this._internalRoot=e}zl.prototype.render=Uf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(D(409));Al(e,t,null,null)};zl.prototype.unmount=Uf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;io(function(){Al(null,e,null,null)}),t[Qn]=null}};function zl(e){this._internalRoot=e}zl.prototype.unstable_scheduleHydration=function(e){if(e){var t=j0();e={blockedOn:null,target:e,priority:t};for(var n=0;n<lr.length&&t!==0&&t<lr[n].priority;n++);lr.splice(n,0,e),n===0&&T0(e)}};function Wf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Il(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Yh(){}function Jw(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=tl(s);i.call(c)}}var s=Xx(t,r,e,0,null,!1,!1,"",Yh);return e._reactRootContainer=s,e[Qn]=s.current,rs(e.nodeType===8?e.parentNode:e),io(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var c=tl(l);a.call(c)}}var l=Df(e,0,!1,null,null,!1,!1,"",Yh);return e._reactRootContainer=l,e[Qn]=l.current,rs(e.nodeType===8?e.parentNode:e),io(function(){Al(t,l,n,r)}),l}function Ml(e,t,n,r,o){var i=n._reactRootContainer;if(i){var s=i;if(typeof o=="function"){var a=o;o=function(){var l=tl(s);a.call(l)}}Al(t,s,e,o)}else s=Jw(n,t,e,o,r);return tl(s)}N0=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Oi(t.pendingLanes);n!==0&&(lf(t,n|1),zt(t,Ge()),!(fe&6)&&(ei=Ge()+500,Fr()))}break;case 13:io(function(){var r=Xn(e,1);if(r!==null){var o=Et();Sn(r,e,1,o)}}),Bf(e,1)}};uf=function(e){if(e.tag===13){var t=Xn(e,134217728);if(t!==null){var n=Et();Sn(t,e,134217728,n)}Bf(e,134217728)}};_0=function(e){if(e.tag===13){var t=Sr(e),n=Xn(e,t);if(n!==null){var r=Et();Sn(n,e,t,r)}Bf(e,t)}};j0=function(){return we};R0=function(e,t){var n=we;try{return we=e,t()}finally{we=n}};Wc=function(e,t,n){switch(t){case"input":if(zc(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=jl(r);if(!o)throw Error(D(90));s0(r),zc(r,o)}}}break;case"textarea":l0(e,n);break;case"select":t=n.value,t!=null&&Lo(e,!!n.multiple,t,!1)}};m0=zf;g0=io;var Zw={usingClientEntryPoint:!1,Events:[Ss,Po,jl,p0,h0,zf]},wi={findFiberByHostInstance:Wr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},e2={bundleType:wi.bundleType,version:wi.version,rendererPackageName:wi.rendererPackageName,rendererConfig:wi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:er.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=v0(e),e===null?null:e.stateNode},findFiberByHostInstance:wi.findFiberByHostInstance||Yw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ea=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ea.isDisabled&&ea.supportsFiber)try{Cl=ea.inject(e2),$n=ea}catch{}}Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zw;Yt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wf(t))throw Error(D(200));return Xw(e,t,null,n)};Yt.createRoot=function(e,t){if(!Wf(e))throw Error(D(299));var n=!1,r="",o=Yx;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Df(e,1,!1,null,null,n,!1,r,o),e[Qn]=t.current,rs(e.nodeType===8?e.parentNode:e),new Uf(t)};Yt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(D(188)):(e=Object.keys(e).join(","),Error(D(268,e)));return e=v0(t),e=e===null?null:e.stateNode,e};Yt.flushSync=function(e){return io(e)};Yt.hydrate=function(e,t,n){if(!Il(t))throw Error(D(200));return Ml(null,e,t,!0,n)};Yt.hydrateRoot=function(e,t,n){if(!Wf(e))throw Error(D(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",s=Yx;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Xx(t,null,e,1,n??null,o,!1,i,s),e[Qn]=t.current,rs(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new zl(t)};Yt.render=function(e,t,n){if(!Il(t))throw Error(D(200));return Ml(null,e,t,!1,n)};Yt.unmountComponentAtNode=function(e){if(!Il(e))throw Error(D(40));return e._reactRootContainer?(io(function(){Ml(null,null,e,!1,function(){e._reactRootContainer=null,e[Qn]=null})}),!0):!1};Yt.unstable_batchedUpdates=zf;Yt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Il(n))throw Error(D(200));if(e==null||e._reactInternals===void 0)throw Error(D(38));return Ml(e,t,n,!1,r)};Yt.version="18.3.1-next-f1338f8080-20240426";function Jx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jx)}catch(e){console.error(e)}}Jx(),Jg.exports=Yt;var Vf=Jg.exports;const ta=Sl(Vf);var Jh=Vf;Rc.createRoot=Jh.createRoot,Rc.hydrateRoot=Jh.hydrateRoot;const fs={black:"#000",white:"#fff"},go={300:"#e57373",400:"#ef5350",500:"#f44336",700:"#d32f2f",800:"#c62828"},xo={50:"#f3e5f5",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",700:"#7b1fa2"},yo={50:"#e3f2fd",200:"#90caf9",400:"#42a5f5",700:"#1976d2",800:"#1565c0"},vo={300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",700:"#0288d1",900:"#01579b"},bo={300:"#81c784",400:"#66bb6a",500:"#4caf50",700:"#388e3c",800:"#2e7d32",900:"#1b5e20"},Si={300:"#ffb74d",400:"#ffa726",500:"#ff9800",700:"#f57c00",900:"#e65100"},t2={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"};function so(e){let t="https://mui.com/production-error/?code="+e;for(let n=1;n<arguments.length;n+=1)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified MUI error #"+e+"; visit "+t+" for the full message."}const n2=Object.freeze(Object.defineProperty({__proto__:null,default:so},Symbol.toStringTag,{value:"Module"})),Ll="$$material";function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_.apply(null,arguments)}function te(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function r2(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function o2(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var i2=function(){function e(n){var r=this;this._insertTag=function(o){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,i),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(o2(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var i=r2(o);try{i.insertRule(r,i.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){var o;return(o=r.parentNode)==null?void 0:o.removeChild(r)}),this.tags=[],this.ctr=0},e}(),xt="-ms-",nl="-moz-",me="-webkit-",Zx="comm",Hf="rule",qf="decl",s2="@import",ey="@keyframes",a2="@layer",l2=Math.abs,Dl=String.fromCharCode,u2=Object.assign;function c2(e,t){return ft(e,0)^45?(((t<<2^ft(e,0))<<2^ft(e,1))<<2^ft(e,2))<<2^ft(e,3):0}function ty(e){return e.trim()}function d2(e,t){return(e=t.exec(e))?e[0]:e}function ge(e,t,n){return e.replace(t,n)}function Sd(e,t){return e.indexOf(t)}function ft(e,t){return e.charCodeAt(t)|0}function ps(e,t,n){return e.slice(t,n)}function Tn(e){return e.length}function Gf(e){return e.length}function na(e,t){return t.push(e),e}function f2(e,t){return e.map(t).join("")}var Bl=1,ti=1,ny=0,Dt=0,Ye=0,ai="";function Ul(e,t,n,r,o,i,s){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:Bl,column:ti,length:s,return:""}}function ki(e,t){return u2(Ul("",null,null,"",null,null,0),e,{length:-e.length},t)}function p2(){return Ye}function h2(){return Ye=Dt>0?ft(ai,--Dt):0,ti--,Ye===10&&(ti=1,Bl--),Ye}function Kt(){return Ye=Dt<ny?ft(ai,Dt++):0,ti++,Ye===10&&(ti=1,Bl++),Ye}function zn(){return ft(ai,Dt)}function va(){return Dt}function Cs(e,t){return ps(ai,e,t)}function hs(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ry(e){return Bl=ti=1,ny=Tn(ai=e),Dt=0,[]}function oy(e){return ai="",e}function ba(e){return ty(Cs(Dt-1,kd(e===91?e+2:e===40?e+1:e)))}function m2(e){for(;(Ye=zn())&&Ye<33;)Kt();return hs(e)>2||hs(Ye)>3?"":" "}function g2(e,t){for(;--t&&Kt()&&!(Ye<48||Ye>102||Ye>57&&Ye<65||Ye>70&&Ye<97););return Cs(e,va()+(t<6&&zn()==32&&Kt()==32))}function kd(e){for(;Kt();)switch(Ye){case e:return Dt;case 34:case 39:e!==34&&e!==39&&kd(Ye);break;case 40:e===41&&kd(e);break;case 92:Kt();break}return Dt}function x2(e,t){for(;Kt()&&e+Ye!==57;)if(e+Ye===84&&zn()===47)break;return"/*"+Cs(t,Dt-1)+"*"+Dl(e===47?e:Kt())}function y2(e){for(;!hs(zn());)Kt();return Cs(e,Dt)}function v2(e){return oy(wa("",null,null,null,[""],e=ry(e),0,[0],e))}function wa(e,t,n,r,o,i,s,a,l){for(var c=0,d=0,f=s,p=0,b=0,x=0,y=1,k=1,g=1,h=0,m="",w=o,C=i,S=r,E=m;k;)switch(x=h,h=Kt()){case 40:if(x!=108&&ft(E,f-1)==58){Sd(E+=ge(ba(h),"&","&\f"),"&\f")!=-1&&(g=-1);break}case 34:case 39:case 91:E+=ba(h);break;case 9:case 10:case 13:case 32:E+=m2(x);break;case 92:E+=g2(va()-1,7);continue;case 47:switch(zn()){case 42:case 47:na(b2(x2(Kt(),va()),t,n),l);break;default:E+="/"}break;case 123*y:a[c++]=Tn(E)*g;case 125*y:case 59:case 0:switch(h){case 0:case 125:k=0;case 59+d:g==-1&&(E=ge(E,/\f/g,"")),b>0&&Tn(E)-f&&na(b>32?em(E+";",r,n,f-1):em(ge(E," ","")+";",r,n,f-2),l);break;case 59:E+=";";default:if(na(S=Zh(E,t,n,c,d,o,a,m,w=[],C=[],f),i),h===123)if(d===0)wa(E,t,S,S,w,i,f,a,C);else switch(p===99&&ft(E,3)===110?100:p){case 100:case 108:case 109:case 115:wa(e,S,S,r&&na(Zh(e,S,S,0,0,o,a,m,o,w=[],f),C),o,C,f,a,r?w:C);break;default:wa(E,S,S,S,[""],C,0,a,C)}}c=d=b=0,y=g=1,m=E="",f=s;break;case 58:f=1+Tn(E),b=x;default:if(y<1){if(h==123)--y;else if(h==125&&y++==0&&h2()==125)continue}switch(E+=Dl(h),h*y){case 38:g=d>0?1:(E+="\f",-1);break;case 44:a[c++]=(Tn(E)-1)*g,g=1;break;case 64:zn()===45&&(E+=ba(Kt())),p=zn(),d=f=Tn(m=E+=y2(va())),h++;break;case 45:x===45&&Tn(E)==2&&(y=0)}}return i}function Zh(e,t,n,r,o,i,s,a,l,c,d){for(var f=o-1,p=o===0?i:[""],b=Gf(p),x=0,y=0,k=0;x<r;++x)for(var g=0,h=ps(e,f+1,f=l2(y=s[x])),m=e;g<b;++g)(m=ty(y>0?p[g]+" "+h:ge(h,/&\f/g,p[g])))&&(l[k++]=m);return Ul(e,t,n,o===0?Hf:a,l,c,d)}function b2(e,t,n){return Ul(e,t,n,Zx,Dl(p2()),ps(e,2,-2),0)}function em(e,t,n,r){return Ul(e,t,n,qf,ps(e,0,r),ps(e,r+1,-1),r)}function Ho(e,t){for(var n="",r=Gf(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function w2(e,t,n,r){switch(e.type){case a2:if(e.children.length)break;case s2:case qf:return e.return=e.return||e.value;case Zx:return"";case ey:return e.return=e.value+"{"+Ho(e.children,r)+"}";case Hf:e.value=e.props.join(",")}return Tn(n=Ho(e.children,r))?e.return=e.value+"{"+n+"}":""}function S2(e){var t=Gf(e);return function(n,r,o,i){for(var s="",a=0;a<t;a++)s+=e[a](n,r,o,i)||"";return s}}function k2(e){return function(t){t.root||(t=t.return)&&e(t)}}function iy(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var C2=function(t,n,r){for(var o=0,i=0;o=i,i=zn(),o===38&&i===12&&(n[r]=1),!hs(i);)Kt();return Cs(t,Dt)},E2=function(t,n){var r=-1,o=44;do switch(hs(o)){case 0:o===38&&zn()===12&&(n[r]=1),t[r]+=C2(Dt-1,n,r);break;case 2:t[r]+=ba(o);break;case 4:if(o===44){t[++r]=zn()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Dl(o)}while(o=Kt());return t},N2=function(t,n){return oy(E2(ry(t),n))},tm=new WeakMap,_2=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!tm.get(r))&&!o){tm.set(t,!0);for(var i=[],s=N2(n,i),a=r.props,l=0,c=0;l<s.length;l++)for(var d=0;d<a.length;d++,c++)t.props[c]=i[l]?s[l].replace(/&\f/g,a[d]):a[d]+" "+s[l]}}},j2=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function sy(e,t){switch(c2(e,t)){case 5103:return me+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return me+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return me+e+nl+e+xt+e+e;case 6828:case 4268:return me+e+xt+e+e;case 6165:return me+e+xt+"flex-"+e+e;case 5187:return me+e+ge(e,/(\w+).+(:[^]+)/,me+"box-$1$2"+xt+"flex-$1$2")+e;case 5443:return me+e+xt+"flex-item-"+ge(e,/flex-|-self/,"")+e;case 4675:return me+e+xt+"flex-line-pack"+ge(e,/align-content|flex-|-self/,"")+e;case 5548:return me+e+xt+ge(e,"shrink","negative")+e;case 5292:return me+e+xt+ge(e,"basis","preferred-size")+e;case 6060:return me+"box-"+ge(e,"-grow","")+me+e+xt+ge(e,"grow","positive")+e;case 4554:return me+ge(e,/([^-])(transform)/g,"$1"+me+"$2")+e;case 6187:return ge(ge(ge(e,/(zoom-|grab)/,me+"$1"),/(image-set)/,me+"$1"),e,"")+e;case 5495:case 3959:return ge(e,/(image-set\([^]*)/,me+"$1$`$1");case 4968:return ge(ge(e,/(.+:)(flex-)?(.*)/,me+"box-pack:$3"+xt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+me+e+e;case 4095:case 3583:case 4068:case 2532:return ge(e,/(.+)-inline(.+)/,me+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Tn(e)-1-t>6)switch(ft(e,t+1)){case 109:if(ft(e,t+4)!==45)break;case 102:return ge(e,/(.+:)(.+)-([^]+)/,"$1"+me+"$2-$3$1"+nl+(ft(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Sd(e,"stretch")?sy(ge(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(ft(e,t+1)!==115)break;case 6444:switch(ft(e,Tn(e)-3-(~Sd(e,"!important")&&10))){case 107:return ge(e,":",":"+me)+e;case 101:return ge(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+me+(ft(e,14)===45?"inline-":"")+"box$3$1"+me+"$2$3$1"+xt+"$2box$3")+e}break;case 5936:switch(ft(e,t+11)){case 114:return me+e+xt+ge(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return me+e+xt+ge(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return me+e+xt+ge(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return me+e+xt+e+e}return e}var R2=function(t,n,r,o){if(t.length>-1&&!t.return)switch(t.type){case qf:t.return=sy(t.value,t.length);break;case ey:return Ho([ki(t,{value:ge(t.value,"@","@"+me)})],o);case Hf:if(t.length)return f2(t.props,function(i){switch(d2(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Ho([ki(t,{props:[ge(i,/:(read-\w+)/,":"+nl+"$1")]})],o);case"::placeholder":return Ho([ki(t,{props:[ge(i,/:(plac\w+)/,":"+me+"input-$1")]}),ki(t,{props:[ge(i,/:(plac\w+)/,":"+nl+"$1")]}),ki(t,{props:[ge(i,/:(plac\w+)/,xt+"input-$1")]})],o)}return""})}},T2=[R2],ay=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(y){var k=y.getAttribute("data-emotion");k.indexOf(" ")!==-1&&(document.head.appendChild(y),y.setAttribute("data-s",""))})}var o=t.stylisPlugins||T2,i={},s,a=[];s=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(y){for(var k=y.getAttribute("data-emotion").split(" "),g=1;g<k.length;g++)i[k[g]]=!0;a.push(y)});var l,c=[_2,j2];{var d,f=[w2,k2(function(y){d.insert(y)})],p=S2(c.concat(o,f)),b=function(k){return Ho(v2(k),p)};l=function(k,g,h,m){d=h,b(k?k+"{"+g.styles+"}":g.styles),m&&(x.inserted[g.name]=!0)}}var x={key:n,sheet:new i2({key:n,container:s,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:l};return x.sheet.hydrate(a),x},ly={exports:{}},Se={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var at=typeof Symbol=="function"&&Symbol.for,Kf=at?Symbol.for("react.element"):60103,Qf=at?Symbol.for("react.portal"):60106,Wl=at?Symbol.for("react.fragment"):60107,Vl=at?Symbol.for("react.strict_mode"):60108,Hl=at?Symbol.for("react.profiler"):60114,ql=at?Symbol.for("react.provider"):60109,Gl=at?Symbol.for("react.context"):60110,Xf=at?Symbol.for("react.async_mode"):60111,Kl=at?Symbol.for("react.concurrent_mode"):60111,Ql=at?Symbol.for("react.forward_ref"):60112,Xl=at?Symbol.for("react.suspense"):60113,P2=at?Symbol.for("react.suspense_list"):60120,Yl=at?Symbol.for("react.memo"):60115,Jl=at?Symbol.for("react.lazy"):60116,O2=at?Symbol.for("react.block"):60121,F2=at?Symbol.for("react.fundamental"):60117,$2=at?Symbol.for("react.responder"):60118,A2=at?Symbol.for("react.scope"):60119;function Zt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Kf:switch(e=e.type,e){case Xf:case Kl:case Wl:case Hl:case Vl:case Xl:return e;default:switch(e=e&&e.$$typeof,e){case Gl:case Ql:case Jl:case Yl:case ql:return e;default:return t}}case Qf:return t}}}function uy(e){return Zt(e)===Kl}Se.AsyncMode=Xf;Se.ConcurrentMode=Kl;Se.ContextConsumer=Gl;Se.ContextProvider=ql;Se.Element=Kf;Se.ForwardRef=Ql;Se.Fragment=Wl;Se.Lazy=Jl;Se.Memo=Yl;Se.Portal=Qf;Se.Profiler=Hl;Se.StrictMode=Vl;Se.Suspense=Xl;Se.isAsyncMode=function(e){return uy(e)||Zt(e)===Xf};Se.isConcurrentMode=uy;Se.isContextConsumer=function(e){return Zt(e)===Gl};Se.isContextProvider=function(e){return Zt(e)===ql};Se.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Kf};Se.isForwardRef=function(e){return Zt(e)===Ql};Se.isFragment=function(e){return Zt(e)===Wl};Se.isLazy=function(e){return Zt(e)===Jl};Se.isMemo=function(e){return Zt(e)===Yl};Se.isPortal=function(e){return Zt(e)===Qf};Se.isProfiler=function(e){return Zt(e)===Hl};Se.isStrictMode=function(e){return Zt(e)===Vl};Se.isSuspense=function(e){return Zt(e)===Xl};Se.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Wl||e===Kl||e===Hl||e===Vl||e===Xl||e===P2||typeof e=="object"&&e!==null&&(e.$$typeof===Jl||e.$$typeof===Yl||e.$$typeof===ql||e.$$typeof===Gl||e.$$typeof===Ql||e.$$typeof===F2||e.$$typeof===$2||e.$$typeof===A2||e.$$typeof===O2)};Se.typeOf=Zt;ly.exports=Se;var z2=ly.exports,cy=z2,I2={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},M2={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},dy={};dy[cy.ForwardRef]=I2;dy[cy.Memo]=M2;var L2=!0;function fy(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):o&&(r+=o+" ")}),r}var Yf=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||L2===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},Jf=function(t,n,r){Yf(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i=n;do t.insert(n===i?"."+o:"",i,t.sheet,!0),i=i.next;while(i!==void 0)}};function D2(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var B2={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},U2=/[A-Z]|^ms/g,W2=/_EMO_([^_]+?)_([^]*?)_EMO_/g,py=function(t){return t.charCodeAt(1)===45},nm=function(t){return t!=null&&typeof t!="boolean"},fc=iy(function(e){return py(e)?e:e.replace(U2,"-$&").toLowerCase()}),rm=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(W2,function(r,o,i){return Pn={name:o,styles:i,next:Pn},o})}return B2[t]!==1&&!py(t)&&typeof n=="number"&&n!==0?n+"px":n};function ms(e,t,n){if(n==null)return"";var r=n;if(r.__emotion_styles!==void 0)return r;switch(typeof n){case"boolean":return"";case"object":{var o=n;if(o.anim===1)return Pn={name:o.name,styles:o.styles,next:Pn},o.name;var i=n;if(i.styles!==void 0){var s=i.next;if(s!==void 0)for(;s!==void 0;)Pn={name:s.name,styles:s.styles,next:Pn},s=s.next;var a=i.styles+";";return a}return V2(e,t,n)}case"function":{if(e!==void 0){var l=Pn,c=n(e);return Pn=l,ms(e,t,c)}break}}var d=n;if(t==null)return d;var f=t[d];return f!==void 0?f:d}function V2(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=ms(e,t,n[o])+";";else for(var i in n){var s=n[i];if(typeof s!="object"){var a=s;t!=null&&t[a]!==void 0?r+=i+"{"+t[a]+"}":nm(a)&&(r+=fc(i)+":"+rm(i,a)+";")}else if(Array.isArray(s)&&typeof s[0]=="string"&&(t==null||t[s[0]]===void 0))for(var l=0;l<s.length;l++)nm(s[l])&&(r+=fc(i)+":"+rm(i,s[l])+";");else{var c=ms(e,t,s);switch(i){case"animation":case"animationName":{r+=fc(i)+":"+c+";";break}default:r+=i+"{"+c+"}"}}}return r}var om=/label:\s*([^\s;{]+)\s*(;|$)/g,Pn;function Zl(e,t,n){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,o="";Pn=void 0;var i=e[0];if(i==null||i.raw===void 0)r=!1,o+=ms(n,t,i);else{var s=i;o+=s[0]}for(var a=1;a<e.length;a++)if(o+=ms(n,t,e[a]),r){var l=i;o+=l[a]}om.lastIndex=0;for(var c="",d;(d=om.exec(o))!==null;)c+="-"+d[1];var f=D2(o)+c;return{name:f,styles:o,next:Pn}}var H2=function(t){return t()},hy=Pa.useInsertionEffect?Pa.useInsertionEffect:!1,my=hy||H2,im=hy||v.useLayoutEffect,gy=v.createContext(typeof HTMLElement<"u"?ay({key:"css"}):null),q2=gy.Provider,Zf=function(t){return v.forwardRef(function(n,r){var o=v.useContext(gy);return t(n,o,r)})},Es=v.createContext({}),ep={}.hasOwnProperty,Cd="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",G2=function(t,n){var r={};for(var o in n)ep.call(n,o)&&(r[o]=n[o]);return r[Cd]=t,r},K2=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return Yf(n,r,o),my(function(){return Jf(n,r,o)}),null},Q2=Zf(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var o=e[Cd],i=[r],s="";typeof e.className=="string"?s=fy(t.registered,i,e.className):e.className!=null&&(s=e.className+" ");var a=Zl(i,void 0,v.useContext(Es));s+=t.key+"-"+a.name;var l={};for(var c in e)ep.call(e,c)&&c!=="css"&&c!==Cd&&(l[c]=e[c]);return l.className=s,n&&(l.ref=n),v.createElement(v.Fragment,null,v.createElement(K2,{cache:t,serialized:a,isStringTag:typeof o=="string"}),v.createElement(o,l))}),X2=Q2,pc={exports:{}},sm;function xy(){return sm||(sm=1,function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var i in o)({}).hasOwnProperty.call(o,i)&&(n[i]=o[i])}return n},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(null,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}(pc)),pc.exports}xy();var am=function(t,n){var r=arguments;if(n==null||!ep.call(n,"css"))return v.createElement.apply(void 0,r);var o=r.length,i=new Array(o);i[0]=X2,i[1]=G2(t,n);for(var s=2;s<o;s++)i[s]=r[s];return v.createElement.apply(null,i)};(function(e){var t;t||(t=e.JSX||(e.JSX={}))})(am||(am={}));var Y2=Zf(function(e,t){var n=e.styles,r=Zl([n],void 0,v.useContext(Es)),o=v.useRef();return im(function(){var i=t.key+"-global",s=new t.sheet.constructor({key:i,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),a=!1,l=document.querySelector('style[data-emotion="'+i+" "+r.name+'"]');return t.sheet.tags.length&&(s.before=t.sheet.tags[0]),l!==null&&(a=!0,l.setAttribute("data-emotion",i),s.hydrate([l])),o.current=[s,a],function(){s.flush()}},[t]),im(function(){var i=o.current,s=i[0],a=i[1];if(a){i[1]=!1;return}if(r.next!==void 0&&Jf(t,r.next,!0),s.tags.length){var l=s.tags[s.tags.length-1].nextElementSibling;s.before=l,s.flush()}t.insert("",r,s,!1)},[t,r.name]),null});function yy(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Zl(t)}function eu(){var e=yy.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}var J2=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Z2=iy(function(e){return J2.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),eS=Z2,tS=function(t){return t!=="theme"},lm=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?eS:tS},um=function(t,n,r){var o;if(n){var i=n.shouldForwardProp;o=t.__emotion_forwardProp&&i?function(s){return t.__emotion_forwardProp(s)&&i(s)}:i}return typeof o!="function"&&r&&(o=t.__emotion_forwardProp),o},nS=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return Yf(n,r,o),my(function(){return Jf(n,r,o)}),null},rS=function e(t,n){var r=t.__emotion_real===t,o=r&&t.__emotion_base||t,i,s;n!==void 0&&(i=n.label,s=n.target);var a=um(t,n,r),l=a||lm(o),c=!l("as");return function(){var d=arguments,f=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(i!==void 0&&f.push("label:"+i+";"),d[0]==null||d[0].raw===void 0)f.push.apply(f,d);else{var p=d[0];f.push(p[0]);for(var b=d.length,x=1;x<b;x++)f.push(d[x],p[x])}var y=Zf(function(k,g,h){var m=c&&k.as||o,w="",C=[],S=k;if(k.theme==null){S={};for(var E in k)S[E]=k[E];S.theme=v.useContext(Es)}typeof k.className=="string"?w=fy(g.registered,C,k.className):k.className!=null&&(w=k.className+" ");var j=Zl(f.concat(C),g.registered,S);w+=g.key+"-"+j.name,s!==void 0&&(w+=" "+s);var A=c&&a===void 0?lm(m):l,z={};for(var T in k)c&&T==="as"||A(T)&&(z[T]=k[T]);return z.className=w,h&&(z.ref=h),v.createElement(v.Fragment,null,v.createElement(nS,{cache:g,serialized:j,isStringTag:typeof m=="string"}),v.createElement(m,z))});return y.displayName=i!==void 0?i:"Styled("+(typeof o=="string"?o:o.displayName||o.name||"Component")+")",y.defaultProps=t.defaultProps,y.__emotion_real=y,y.__emotion_base=o,y.__emotion_styles=f,y.__emotion_forwardProp=a,Object.defineProperty(y,"toString",{value:function(){return"."+s}}),y.withComponent=function(k,g){var h=e(k,_({},n,g,{shouldForwardProp:um(y,g,!0)}));return h.apply(void 0,f)},y}},oS=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Ed=rS.bind(null);oS.forEach(function(e){Ed[e]=Ed(e)});var vy={exports:{}},iS="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",sS=iS,aS=sS;function by(){}function wy(){}wy.resetWarningCache=by;var lS=function(){function e(r,o,i,s,a,l){if(l!==aS){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:wy,resetWarningCache:by};return n.PropTypes=n,n};vy.exports=lS();var uS=vy.exports;const qo=Sl(uS);let Nd;typeof document=="object"&&(Nd=ay({key:"css",prepend:!0}));function cS(e){const{injectFirst:t,children:n}=e;return t&&Nd?u.jsx(q2,{value:Nd,children:n}):n}function dS(e){return e==null||Object.keys(e).length===0}function Sy(e){const{styles:t,defaultTheme:n={}}=e,r=typeof t=="function"?o=>t(dS(o)?n:o):t;return u.jsx(Y2,{styles:r})}function ky(e,t){return Ed(e,t)}const fS=(e,t)=>{Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))},pS=Object.freeze(Object.defineProperty({__proto__:null,GlobalStyles:Sy,StyledEngineProvider:cS,ThemeContext:Es,css:yy,default:ky,internal_processStyles:fS,keyframes:eu},Symbol.toStringTag,{value:"Module"}));function cr(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function Cy(e){if(v.isValidElement(e)||!cr(e))return e;const t={};return Object.keys(e).forEach(n=>{t[n]=Cy(e[n])}),t}function Qt(e,t,n={clone:!0}){const r=n.clone?_({},e):e;return cr(e)&&cr(t)&&Object.keys(t).forEach(o=>{v.isValidElement(t[o])?r[o]=t[o]:cr(t[o])&&Object.prototype.hasOwnProperty.call(e,o)&&cr(e[o])?r[o]=Qt(e[o],t[o],n):n.clone?r[o]=cr(t[o])?Cy(t[o]):t[o]:r[o]=t[o]}),r}const hS=Object.freeze(Object.defineProperty({__proto__:null,default:Qt,isPlainObject:cr},Symbol.toStringTag,{value:"Module"})),mS=["values","unit","step"],gS=e=>{const t=Object.keys(e).map(n=>({key:n,val:e[n]}))||[];return t.sort((n,r)=>n.val-r.val),t.reduce((n,r)=>_({},n,{[r.key]:r.val}),{})};function Ey(e){const{values:t={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:r=5}=e,o=te(e,mS),i=gS(t),s=Object.keys(i);function a(p){return`@media (min-width:${typeof t[p]=="number"?t[p]:p}${n})`}function l(p){return`@media (max-width:${(typeof t[p]=="number"?t[p]:p)-r/100}${n})`}function c(p,b){const x=s.indexOf(b);return`@media (min-width:${typeof t[p]=="number"?t[p]:p}${n}) and (max-width:${(x!==-1&&typeof t[s[x]]=="number"?t[s[x]]:b)-r/100}${n})`}function d(p){return s.indexOf(p)+1<s.length?c(p,s[s.indexOf(p)+1]):a(p)}function f(p){const b=s.indexOf(p);return b===0?a(s[1]):b===s.length-1?l(s[b]):c(p,s[s.indexOf(p)+1]).replace("@media","@media not all and")}return _({keys:s,values:i,up:a,down:l,between:c,only:d,not:f,unit:n},o)}const xS={borderRadius:4};function Vi(e,t){return t?Qt(e,t,{clone:!1}):e}const tp={xs:0,sm:600,md:900,lg:1200,xl:1536},cm={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${tp[e]}px)`};function Jn(e,t,n){const r=e.theme||{};if(Array.isArray(t)){const i=r.breakpoints||cm;return t.reduce((s,a,l)=>(s[i.up(i.keys[l])]=n(t[l]),s),{})}if(typeof t=="object"){const i=r.breakpoints||cm;return Object.keys(t).reduce((s,a)=>{if(Object.keys(i.values||tp).indexOf(a)!==-1){const l=i.up(a);s[l]=n(t[a],a)}else{const l=a;s[l]=t[l]}return s},{})}return n(t)}function yS(e={}){var t;return((t=e.keys)==null?void 0:t.reduce((r,o)=>{const i=e.up(o);return r[i]={},r},{}))||{}}function vS(e,t){return e.reduce((n,r)=>{const o=n[r];return(!o||Object.keys(o).length===0)&&delete n[r],n},t)}function oe(e){if(typeof e!="string")throw new Error(so(7));return e.charAt(0).toUpperCase()+e.slice(1)}const bS=Object.freeze(Object.defineProperty({__proto__:null,default:oe},Symbol.toStringTag,{value:"Module"}));function tu(e,t,n=!0){if(!t||typeof t!="string")return null;if(e&&e.vars&&n){const r=`vars.${t}`.split(".").reduce((o,i)=>o&&o[i]?o[i]:null,e);if(r!=null)return r}return t.split(".").reduce((r,o)=>r&&r[o]!=null?r[o]:null,e)}function rl(e,t,n,r=n){let o;return typeof e=="function"?o=e(n):Array.isArray(e)?o=e[n]||r:o=tu(e,n)||r,t&&(o=t(o,r,e)),o}function Qe(e){const{prop:t,cssProperty:n=e.prop,themeKey:r,transform:o}=e,i=s=>{if(s[t]==null)return null;const a=s[t],l=s.theme,c=tu(l,r)||{};return Jn(s,a,f=>{let p=rl(c,o,f);return f===p&&typeof f=="string"&&(p=rl(c,o,`${t}${f==="default"?"":oe(f)}`,f)),n===!1?p:{[n]:p}})};return i.propTypes={},i.filterProps=[t],i}function wS(e){const t={};return n=>(t[n]===void 0&&(t[n]=e(n)),t[n])}const SS={m:"margin",p:"padding"},kS={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},dm={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},CS=wS(e=>{if(e.length>2)if(dm[e])e=dm[e];else return[e];const[t,n]=e.split(""),r=SS[t],o=kS[n]||"";return Array.isArray(o)?o.map(i=>r+i):[r+o]}),np=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],rp=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...np,...rp];function Ns(e,t,n,r){var o;const i=(o=tu(e,t,!1))!=null?o:n;return typeof i=="number"?s=>typeof s=="string"?s:i*s:Array.isArray(i)?s=>typeof s=="string"?s:i[s]:typeof i=="function"?i:()=>{}}function Ny(e){return Ns(e,"spacing",8)}function _s(e,t){if(typeof t=="string"||t==null)return t;const n=Math.abs(t),r=e(n);return t>=0?r:typeof r=="number"?-r:`-${r}`}function ES(e,t){return n=>e.reduce((r,o)=>(r[o]=_s(t,n),r),{})}function NS(e,t,n,r){if(t.indexOf(n)===-1)return null;const o=CS(n),i=ES(o,r),s=e[n];return Jn(e,s,i)}function _y(e,t){const n=Ny(e.theme);return Object.keys(e).map(r=>NS(e,t,r,n)).reduce(Vi,{})}function Ue(e){return _y(e,np)}Ue.propTypes={};Ue.filterProps=np;function We(e){return _y(e,rp)}We.propTypes={};We.filterProps=rp;function _S(e=8){if(e.mui)return e;const t=Ny({spacing:e}),n=(...r)=>(r.length===0?[1]:r).map(i=>{const s=t(i);return typeof s=="number"?`${s}px`:s}).join(" ");return n.mui=!0,n}function nu(...e){const t=e.reduce((r,o)=>(o.filterProps.forEach(i=>{r[i]=o}),r),{}),n=r=>Object.keys(r).reduce((o,i)=>t[i]?Vi(o,t[i](r)):o,{});return n.propTypes={},n.filterProps=e.reduce((r,o)=>r.concat(o.filterProps),[]),n}function on(e){return typeof e!="number"?e:`${e}px solid`}function fn(e,t){return Qe({prop:e,themeKey:"borders",transform:t})}const jS=fn("border",on),RS=fn("borderTop",on),TS=fn("borderRight",on),PS=fn("borderBottom",on),OS=fn("borderLeft",on),FS=fn("borderColor"),$S=fn("borderTopColor"),AS=fn("borderRightColor"),zS=fn("borderBottomColor"),IS=fn("borderLeftColor"),MS=fn("outline",on),LS=fn("outlineColor"),ru=e=>{if(e.borderRadius!==void 0&&e.borderRadius!==null){const t=Ns(e.theme,"shape.borderRadius",4),n=r=>({borderRadius:_s(t,r)});return Jn(e,e.borderRadius,n)}return null};ru.propTypes={};ru.filterProps=["borderRadius"];nu(jS,RS,TS,PS,OS,FS,$S,AS,zS,IS,ru,MS,LS);const ou=e=>{if(e.gap!==void 0&&e.gap!==null){const t=Ns(e.theme,"spacing",8),n=r=>({gap:_s(t,r)});return Jn(e,e.gap,n)}return null};ou.propTypes={};ou.filterProps=["gap"];const iu=e=>{if(e.columnGap!==void 0&&e.columnGap!==null){const t=Ns(e.theme,"spacing",8),n=r=>({columnGap:_s(t,r)});return Jn(e,e.columnGap,n)}return null};iu.propTypes={};iu.filterProps=["columnGap"];const su=e=>{if(e.rowGap!==void 0&&e.rowGap!==null){const t=Ns(e.theme,"spacing",8),n=r=>({rowGap:_s(t,r)});return Jn(e,e.rowGap,n)}return null};su.propTypes={};su.filterProps=["rowGap"];const DS=Qe({prop:"gridColumn"}),BS=Qe({prop:"gridRow"}),US=Qe({prop:"gridAutoFlow"}),WS=Qe({prop:"gridAutoColumns"}),VS=Qe({prop:"gridAutoRows"}),HS=Qe({prop:"gridTemplateColumns"}),qS=Qe({prop:"gridTemplateRows"}),GS=Qe({prop:"gridTemplateAreas"}),KS=Qe({prop:"gridArea"});nu(ou,iu,su,DS,BS,US,WS,VS,HS,qS,GS,KS);function Go(e,t){return t==="grey"?t:e}const QS=Qe({prop:"color",themeKey:"palette",transform:Go}),XS=Qe({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:Go}),YS=Qe({prop:"backgroundColor",themeKey:"palette",transform:Go});nu(QS,XS,YS);function Ht(e){return e<=1&&e!==0?`${e*100}%`:e}const JS=Qe({prop:"width",transform:Ht}),op=e=>{if(e.maxWidth!==void 0&&e.maxWidth!==null){const t=n=>{var r,o;const i=((r=e.theme)==null||(r=r.breakpoints)==null||(r=r.values)==null?void 0:r[n])||tp[n];return i?((o=e.theme)==null||(o=o.breakpoints)==null?void 0:o.unit)!=="px"?{maxWidth:`${i}${e.theme.breakpoints.unit}`}:{maxWidth:i}:{maxWidth:Ht(n)}};return Jn(e,e.maxWidth,t)}return null};op.filterProps=["maxWidth"];const ZS=Qe({prop:"minWidth",transform:Ht}),ek=Qe({prop:"height",transform:Ht}),tk=Qe({prop:"maxHeight",transform:Ht}),nk=Qe({prop:"minHeight",transform:Ht});Qe({prop:"size",cssProperty:"width",transform:Ht});Qe({prop:"size",cssProperty:"height",transform:Ht});const rk=Qe({prop:"boxSizing"});nu(JS,op,ZS,ek,tk,nk,rk);const js={border:{themeKey:"borders",transform:on},borderTop:{themeKey:"borders",transform:on},borderRight:{themeKey:"borders",transform:on},borderBottom:{themeKey:"borders",transform:on},borderLeft:{themeKey:"borders",transform:on},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:on},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:ru},color:{themeKey:"palette",transform:Go},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:Go},backgroundColor:{themeKey:"palette",transform:Go},p:{style:We},pt:{style:We},pr:{style:We},pb:{style:We},pl:{style:We},px:{style:We},py:{style:We},padding:{style:We},paddingTop:{style:We},paddingRight:{style:We},paddingBottom:{style:We},paddingLeft:{style:We},paddingX:{style:We},paddingY:{style:We},paddingInline:{style:We},paddingInlineStart:{style:We},paddingInlineEnd:{style:We},paddingBlock:{style:We},paddingBlockStart:{style:We},paddingBlockEnd:{style:We},m:{style:Ue},mt:{style:Ue},mr:{style:Ue},mb:{style:Ue},ml:{style:Ue},mx:{style:Ue},my:{style:Ue},margin:{style:Ue},marginTop:{style:Ue},marginRight:{style:Ue},marginBottom:{style:Ue},marginLeft:{style:Ue},marginX:{style:Ue},marginY:{style:Ue},marginInline:{style:Ue},marginInlineStart:{style:Ue},marginInlineEnd:{style:Ue},marginBlock:{style:Ue},marginBlockStart:{style:Ue},marginBlockEnd:{style:Ue},displayPrint:{cssProperty:!1,transform:e=>({"@media print":{display:e}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:ou},rowGap:{style:su},columnGap:{style:iu},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:Ht},maxWidth:{style:op},minWidth:{transform:Ht},height:{transform:Ht},maxHeight:{transform:Ht},minHeight:{transform:Ht},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}};function ok(...e){const t=e.reduce((r,o)=>r.concat(Object.keys(o)),[]),n=new Set(t);return e.every(r=>n.size===Object.keys(r).length)}function ik(e,t){return typeof e=="function"?e(t):e}function jy(){function e(n,r,o,i){const s={[n]:r,theme:o},a=i[n];if(!a)return{[n]:r};const{cssProperty:l=n,themeKey:c,transform:d,style:f}=a;if(r==null)return null;if(c==="typography"&&r==="inherit")return{[n]:r};const p=tu(o,c)||{};return f?f(s):Jn(s,r,x=>{let y=rl(p,d,x);return x===y&&typeof x=="string"&&(y=rl(p,d,`${n}${x==="default"?"":oe(x)}`,x)),l===!1?y:{[l]:y}})}function t(n){var r;const{sx:o,theme:i={}}=n||{};if(!o)return null;const s=(r=i.unstable_sxConfig)!=null?r:js;function a(l){let c=l;if(typeof l=="function")c=l(i);else if(typeof l!="object")return l;if(!c)return null;const d=yS(i.breakpoints),f=Object.keys(d);let p=d;return Object.keys(c).forEach(b=>{const x=ik(c[b],i);if(x!=null)if(typeof x=="object")if(s[b])p=Vi(p,e(b,x,i,s));else{const y=Jn({theme:i},x,k=>({[b]:k}));ok(y,x)?p[b]=t({sx:x,theme:i}):p=Vi(p,y)}else p=Vi(p,e(b,x,i,s))}),vS(f,p)}return Array.isArray(o)?o.map(a):a(o)}return t}const Rs=jy();Rs.filterProps=["sx"];function Ry(e,t){const n=this;return n.vars&&typeof n.getColorSchemeSelector=="function"?{[n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/,"*:where($1)")]:t}:n.palette.mode===e?t:{}}const sk=["breakpoints","palette","spacing","shape"];function ip(e={},...t){const{breakpoints:n={},palette:r={},spacing:o,shape:i={}}=e,s=te(e,sk),a=Ey(n),l=_S(o);let c=Qt({breakpoints:a,direction:"ltr",components:{},palette:_({mode:"light"},r),spacing:l,shape:_({},xS,i)},s);return c.applyStyles=Ry,c=t.reduce((d,f)=>Qt(d,f),c),c.unstable_sxConfig=_({},js,s==null?void 0:s.unstable_sxConfig),c.unstable_sx=function(f){return Rs({sx:f,theme:this})},c}const ak=Object.freeze(Object.defineProperty({__proto__:null,default:ip,private_createBreakpoints:Ey,unstable_applyStyles:Ry},Symbol.toStringTag,{value:"Module"}));function lk(e){return Object.keys(e).length===0}function uk(e=null){const t=v.useContext(Es);return!t||lk(t)?e:t}const ck=ip();function sp(e=ck){return uk(e)}function dk({styles:e,themeId:t,defaultTheme:n={}}){const r=sp(n),o=typeof e=="function"?e(t&&r[t]||r):e;return u.jsx(Sy,{styles:o})}const fk=["sx"],pk=e=>{var t,n;const r={systemProps:{},otherProps:{}},o=(t=e==null||(n=e.theme)==null?void 0:n.unstable_sxConfig)!=null?t:js;return Object.keys(e).forEach(i=>{o[i]?r.systemProps[i]=e[i]:r.otherProps[i]=e[i]}),r};function ap(e){const{sx:t}=e,n=te(e,fk),{systemProps:r,otherProps:o}=pk(n);let i;return Array.isArray(t)?i=[r,...t]:typeof t=="function"?i=(...s)=>{const a=t(...s);return cr(a)?_({},r,a):r}:i=_({},r,t),_({},o,{sx:i})}const hk=Object.freeze(Object.defineProperty({__proto__:null,default:Rs,extendSxProp:ap,unstable_createStyleFunctionSx:jy,unstable_defaultSxConfig:js},Symbol.toStringTag,{value:"Module"})),fm=e=>e,mk=()=>{let e=fm;return{configure(t){e=t},generate(t){return e(t)},reset(){e=fm}}},lp=mk();function Ty(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=Ty(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function le(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=Ty(e))&&(r&&(r+=" "),r+=t);return r}const gk=["className","component"];function xk(e={}){const{themeId:t,defaultTheme:n,defaultClassName:r="MuiBox-root",generateClassName:o}=e,i=ky("div",{shouldForwardProp:a=>a!=="theme"&&a!=="sx"&&a!=="as"})(Rs);return v.forwardRef(function(l,c){const d=sp(n),f=ap(l),{className:p,component:b="div"}=f,x=te(f,gk);return u.jsx(i,_({as:b,ref:c,className:le(p,o?o(r):r),theme:t&&d[t]||d},x))})}const yk={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function $e(e,t,n="Mui"){const r=yk[t];return r?`${n}-${r}`:`${lp.generate(e)}-${t}`}function Pe(e,t,n="Mui"){const r={};return t.forEach(o=>{r[o]=$e(e,o,n)}),r}var Py={exports:{}},ke={};/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var up=Symbol.for("react.transitional.element"),cp=Symbol.for("react.portal"),au=Symbol.for("react.fragment"),lu=Symbol.for("react.strict_mode"),uu=Symbol.for("react.profiler"),cu=Symbol.for("react.consumer"),du=Symbol.for("react.context"),fu=Symbol.for("react.forward_ref"),pu=Symbol.for("react.suspense"),hu=Symbol.for("react.suspense_list"),mu=Symbol.for("react.memo"),gu=Symbol.for("react.lazy"),vk=Symbol.for("react.view_transition"),bk=Symbol.for("react.client.reference");function pn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case up:switch(e=e.type,e){case au:case uu:case lu:case pu:case hu:case vk:return e;default:switch(e=e&&e.$$typeof,e){case du:case fu:case gu:case mu:return e;case cu:return e;default:return t}}case cp:return t}}}ke.ContextConsumer=cu;ke.ContextProvider=du;ke.Element=up;ke.ForwardRef=fu;ke.Fragment=au;ke.Lazy=gu;ke.Memo=mu;ke.Portal=cp;ke.Profiler=uu;ke.StrictMode=lu;ke.Suspense=pu;ke.SuspenseList=hu;ke.isContextConsumer=function(e){return pn(e)===cu};ke.isContextProvider=function(e){return pn(e)===du};ke.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===up};ke.isForwardRef=function(e){return pn(e)===fu};ke.isFragment=function(e){return pn(e)===au};ke.isLazy=function(e){return pn(e)===gu};ke.isMemo=function(e){return pn(e)===mu};ke.isPortal=function(e){return pn(e)===cp};ke.isProfiler=function(e){return pn(e)===uu};ke.isStrictMode=function(e){return pn(e)===lu};ke.isSuspense=function(e){return pn(e)===pu};ke.isSuspenseList=function(e){return pn(e)===hu};ke.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===au||e===uu||e===lu||e===pu||e===hu||typeof e=="object"&&e!==null&&(e.$$typeof===gu||e.$$typeof===mu||e.$$typeof===du||e.$$typeof===cu||e.$$typeof===fu||e.$$typeof===bk||e.getModuleId!==void 0)};ke.typeOf=pn;Py.exports=ke;var pm=Py.exports;const wk=/^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;function Oy(e){const t=`${e}`.match(wk);return t&&t[1]||""}function Fy(e,t=""){return e.displayName||e.name||Oy(e)||t}function hm(e,t,n){const r=Fy(t);return e.displayName||(r!==""?`${n}(${r})`:n)}function Sk(e){if(e!=null){if(typeof e=="string")return e;if(typeof e=="function")return Fy(e,"Component");if(typeof e=="object")switch(e.$$typeof){case pm.ForwardRef:return hm(e,e.render,"ForwardRef");case pm.Memo:return hm(e,e.type,"memo");default:return}}}const kk=Object.freeze(Object.defineProperty({__proto__:null,default:Sk,getFunctionName:Oy},Symbol.toStringTag,{value:"Module"}));function ol(e,t){const n=_({},t);return Object.keys(e).forEach(r=>{if(r.toString().match(/^(components|slots)$/))n[r]=_({},e[r],n[r]);else if(r.toString().match(/^(componentsProps|slotProps)$/)){const o=e[r]||{},i=t[r];n[r]={},!i||!Object.keys(i)?n[r]=o:!o||!Object.keys(o)?n[r]=i:(n[r]=_({},i),Object.keys(o).forEach(s=>{n[r][s]=ol(o[s],i[s])}))}else n[r]===void 0&&(n[r]=e[r])}),n}const Rr=typeof window<"u"?v.useLayoutEffect:v.useEffect;function Ck(e,t=Number.MIN_SAFE_INTEGER,n=Number.MAX_SAFE_INTEGER){return Math.max(t,Math.min(e,n))}const Ek=Object.freeze(Object.defineProperty({__proto__:null,default:Ck},Symbol.toStringTag,{value:"Module"}));function _d(...e){return e.reduce((t,n)=>n==null?t:function(...o){t.apply(this,o),n.apply(this,o)},()=>{})}function dp(e,t=166){let n;function r(...o){const i=()=>{e.apply(this,o)};clearTimeout(n),n=setTimeout(i,t)}return r.clear=()=>{clearTimeout(n)},r}function Nk(e,t){return()=>null}function Sa(e,t){var n,r;return v.isValidElement(e)&&t.indexOf((n=e.type.muiName)!=null?n:(r=e.type)==null||(r=r._payload)==null||(r=r.value)==null?void 0:r.muiName)!==-1}function It(e){return e&&e.ownerDocument||document}function Tr(e){return It(e).defaultView||window}function _k(e,t){return()=>null}function il(e,t){typeof e=="function"?e(t):e&&(e.current=t)}let mm=0;function jk(e){const[t,n]=v.useState(e),r=e||t;return v.useEffect(()=>{t==null&&(mm+=1,n(`mui-${mm}`))},[t]),r}const gm=Pa.useId;function fp(e){if(gm!==void 0){const t=gm();return e??t}return jk(e)}function Rk(e,t,n,r,o){return null}function jd({controlled:e,default:t,name:n,state:r="value"}){const{current:o}=v.useRef(e!==void 0),[i,s]=v.useState(t),a=o?e:i,l=v.useCallback(c=>{o||s(c)},[]);return[a,l]}function pr(e){const t=v.useRef(e);return Rr(()=>{t.current=e}),v.useRef((...n)=>(0,t.current)(...n)).current}function Nt(...e){return v.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(n=>{il(n,t)})},e)}const xm={};function Tk(e,t){const n=v.useRef(xm);return n.current===xm&&(n.current=e(t)),n}const Pk=[];function Ok(e){v.useEffect(e,Pk)}class xu{constructor(){this.currentId=null,this.clear=()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)},this.disposeEffect=()=>this.clear}static create(){return new xu}start(t,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},t)}}function $y(){const e=Tk(xu.create).current;return Ok(e.disposeEffect),e}let yu=!0,Rd=!1;const Fk=new xu,$k={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function Ak(e){const{type:t,tagName:n}=e;return!!(n==="INPUT"&&$k[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function zk(e){e.metaKey||e.altKey||e.ctrlKey||(yu=!0)}function hc(){yu=!1}function Ik(){this.visibilityState==="hidden"&&Rd&&(yu=!0)}function Mk(e){e.addEventListener("keydown",zk,!0),e.addEventListener("mousedown",hc,!0),e.addEventListener("pointerdown",hc,!0),e.addEventListener("touchstart",hc,!0),e.addEventListener("visibilitychange",Ik,!0)}function Lk(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return yu||Ak(t)}function Ay(){const e=v.useCallback(o=>{o!=null&&Mk(o.ownerDocument)},[]),t=v.useRef(!1);function n(){return t.current?(Rd=!0,Fk.start(100,()=>{Rd=!1}),t.current=!1,!0):!1}function r(o){return Lk(o)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:r,onBlur:n,ref:e}}function zy(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function Me(e,t,n=void 0){const r={};return Object.keys(e).forEach(o=>{r[o]=e[o].reduce((i,s)=>{if(s){const a=t(s);a!==""&&i.push(a),n&&n[s]&&i.push(n[s])}return i},[]).join(" ")}),r}function sl(e){return typeof e=="string"}function Dk(e,t,n){return e===void 0||sl(e)?t:_({},t,{ownerState:_({},t.ownerState,n)})}function Iy(e,t=[]){if(e===void 0)return{};const n={};return Object.keys(e).filter(r=>r.match(/^on[A-Z]/)&&typeof e[r]=="function"&&!t.includes(r)).forEach(r=>{n[r]=e[r]}),n}function ym(e){if(e===void 0)return{};const t={};return Object.keys(e).filter(n=>!(n.match(/^on[A-Z]/)&&typeof e[n]=="function")).forEach(n=>{t[n]=e[n]}),t}function Bk(e){const{getSlotProps:t,additionalProps:n,externalSlotProps:r,externalForwardedProps:o,className:i}=e;if(!t){const b=le(n==null?void 0:n.className,i,o==null?void 0:o.className,r==null?void 0:r.className),x=_({},n==null?void 0:n.style,o==null?void 0:o.style,r==null?void 0:r.style),y=_({},n,o,r);return b.length>0&&(y.className=b),Object.keys(x).length>0&&(y.style=x),{props:y,internalRef:void 0}}const s=Iy(_({},o,r)),a=ym(r),l=ym(o),c=t(s),d=le(c==null?void 0:c.className,n==null?void 0:n.className,i,o==null?void 0:o.className,r==null?void 0:r.className),f=_({},c==null?void 0:c.style,n==null?void 0:n.style,o==null?void 0:o.style,r==null?void 0:r.style),p=_({},c,n,l,a);return d.length>0&&(p.className=d),Object.keys(f).length>0&&(p.style=f),{props:p,internalRef:c.ref}}function Uk(e,t,n){return typeof e=="function"?e(t,n):e}const Wk=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function ni(e){var t;const{elementType:n,externalSlotProps:r,ownerState:o,skipResolvingSlotProps:i=!1}=e,s=te(e,Wk),a=i?{}:Uk(r,o),{props:l,internalRef:c}=Bk(_({},s,{externalSlotProps:a})),d=Nt(c,a==null?void 0:a.ref,(t=e.additionalProps)==null?void 0:t.ref);return Dk(n,_({},l,{ref:d}),o)}function Ts(e){if(parseInt(v.version,10)>=19){var t;return(e==null||(t=e.props)==null?void 0:t.ref)||null}return(e==null?void 0:e.ref)||null}const Vk=v.createContext(),Hk=()=>{const e=v.useContext(Vk);return e??!1},qk=v.createContext(void 0);function Gk(e){const{theme:t,name:n,props:r}=e;if(!t||!t.components||!t.components[n])return r;const o=t.components[n];return o.defaultProps?ol(o.defaultProps,r):!o.styleOverrides&&!o.variants?ol(o,r):r}function Kk({props:e,name:t}){const n=v.useContext(qk);return Gk({props:e,name:t,theme:{components:n}})}function Qk(e,t){return _({toolbar:{minHeight:56,[e.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[e.up("sm")]:{minHeight:64}}},t)}var Xe={},My={exports:{}};(function(e){function t(n){return n&&n.__esModule?n:{default:n}}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(My);var vu=My.exports;const Xk=Zn(n2),Yk=Zn(Ek);var Ly=vu;Object.defineProperty(Xe,"__esModule",{value:!0});var hr=Xe.alpha=Wy;Xe.blend=cC;Xe.colorChannel=void 0;var Jk=Xe.darken=hp;Xe.decomposeColor=dn;Xe.emphasize=Vy;var Zk=Xe.getContrastRatio=iC;Xe.getLuminance=al;Xe.hexToRgb=Dy;Xe.hslToRgb=Uy;var eC=Xe.lighten=mp;Xe.private_safeAlpha=sC;Xe.private_safeColorChannel=void 0;Xe.private_safeDarken=aC;Xe.private_safeEmphasize=uC;Xe.private_safeLighten=lC;Xe.recomposeColor=li;Xe.rgbToHex=oC;var vm=Ly(Xk),tC=Ly(Yk);function pp(e,t=0,n=1){return(0,tC.default)(e,t,n)}function Dy(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let n=e.match(t);return n&&n[0].length===1&&(n=n.map(r=>r+r)),n?`rgb${n.length===4?"a":""}(${n.map((r,o)=>o<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})`:""}function nC(e){const t=e.toString(16);return t.length===1?`0${t}`:t}function dn(e){if(e.type)return e;if(e.charAt(0)==="#")return dn(Dy(e));const t=e.indexOf("("),n=e.substring(0,t);if(["rgb","rgba","hsl","hsla","color"].indexOf(n)===-1)throw new Error((0,vm.default)(9,e));let r=e.substring(t+1,e.length-1),o;if(n==="color"){if(r=r.split(" "),o=r.shift(),r.length===4&&r[3].charAt(0)==="/"&&(r[3]=r[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(o)===-1)throw new Error((0,vm.default)(10,o))}else r=r.split(",");return r=r.map(i=>parseFloat(i)),{type:n,values:r,colorSpace:o}}const By=e=>{const t=dn(e);return t.values.slice(0,3).map((n,r)=>t.type.indexOf("hsl")!==-1&&r!==0?`${n}%`:n).join(" ")};Xe.colorChannel=By;const rC=(e,t)=>{try{return By(e)}catch{return e}};Xe.private_safeColorChannel=rC;function li(e){const{type:t,colorSpace:n}=e;let{values:r}=e;return t.indexOf("rgb")!==-1?r=r.map((o,i)=>i<3?parseInt(o,10):o):t.indexOf("hsl")!==-1&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),t.indexOf("color")!==-1?r=`${n} ${r.join(" ")}`:r=`${r.join(", ")}`,`${t}(${r})`}function oC(e){if(e.indexOf("#")===0)return e;const{values:t}=dn(e);return`#${t.map((n,r)=>nC(r===3?Math.round(255*n):n)).join("")}`}function Uy(e){e=dn(e);const{values:t}=e,n=t[0],r=t[1]/100,o=t[2]/100,i=r*Math.min(o,1-o),s=(c,d=(c+n/30)%12)=>o-i*Math.max(Math.min(d-3,9-d,1),-1);let a="rgb";const l=[Math.round(s(0)*255),Math.round(s(8)*255),Math.round(s(4)*255)];return e.type==="hsla"&&(a+="a",l.push(t[3])),li({type:a,values:l})}function al(e){e=dn(e);let t=e.type==="hsl"||e.type==="hsla"?dn(Uy(e)).values:e.values;return t=t.map(n=>(e.type!=="color"&&(n/=255),n<=.03928?n/12.92:((n+.055)/1.055)**2.4)),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function iC(e,t){const n=al(e),r=al(t);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function Wy(e,t){return e=dn(e),t=pp(t),(e.type==="rgb"||e.type==="hsl")&&(e.type+="a"),e.type==="color"?e.values[3]=`/${t}`:e.values[3]=t,li(e)}function sC(e,t,n){try{return Wy(e,t)}catch{return e}}function hp(e,t){if(e=dn(e),t=pp(t),e.type.indexOf("hsl")!==-1)e.values[2]*=1-t;else if(e.type.indexOf("rgb")!==-1||e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]*=1-t;return li(e)}function aC(e,t,n){try{return hp(e,t)}catch{return e}}function mp(e,t){if(e=dn(e),t=pp(t),e.type.indexOf("hsl")!==-1)e.values[2]+=(100-e.values[2])*t;else if(e.type.indexOf("rgb")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(255-e.values[n])*t;else if(e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(1-e.values[n])*t;return li(e)}function lC(e,t,n){try{return mp(e,t)}catch{return e}}function Vy(e,t=.15){return al(e)>.5?hp(e,t):mp(e,t)}function uC(e,t,n){try{return Vy(e,t)}catch{return e}}function cC(e,t,n,r=1){const o=(l,c)=>Math.round((l**(1/r)*(1-n)+c**(1/r)*n)**r),i=dn(e),s=dn(t),a=[o(i.values[0],s.values[0]),o(i.values[1],s.values[1]),o(i.values[2],s.values[2])];return li({type:"rgb",values:a})}const dC=["mode","contrastThreshold","tonalOffset"],bm={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:fs.white,default:fs.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},mc={text:{primary:fs.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:fs.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function wm(e,t,n,r){const o=r.light||r,i=r.dark||r*1.5;e[t]||(e.hasOwnProperty(n)?e[t]=e[n]:t==="light"?e.light=eC(e.main,o):t==="dark"&&(e.dark=Jk(e.main,i)))}function fC(e="light"){return e==="dark"?{main:yo[200],light:yo[50],dark:yo[400]}:{main:yo[700],light:yo[400],dark:yo[800]}}function pC(e="light"){return e==="dark"?{main:xo[200],light:xo[50],dark:xo[400]}:{main:xo[500],light:xo[300],dark:xo[700]}}function hC(e="light"){return e==="dark"?{main:go[500],light:go[300],dark:go[700]}:{main:go[700],light:go[400],dark:go[800]}}function mC(e="light"){return e==="dark"?{main:vo[400],light:vo[300],dark:vo[700]}:{main:vo[700],light:vo[500],dark:vo[900]}}function gC(e="light"){return e==="dark"?{main:bo[400],light:bo[300],dark:bo[700]}:{main:bo[800],light:bo[500],dark:bo[900]}}function xC(e="light"){return e==="dark"?{main:Si[400],light:Si[300],dark:Si[700]}:{main:"#ed6c02",light:Si[500],dark:Si[900]}}function yC(e){const{mode:t="light",contrastThreshold:n=3,tonalOffset:r=.2}=e,o=te(e,dC),i=e.primary||fC(t),s=e.secondary||pC(t),a=e.error||hC(t),l=e.info||mC(t),c=e.success||gC(t),d=e.warning||xC(t);function f(y){return Zk(y,mc.text.primary)>=n?mc.text.primary:bm.text.primary}const p=({color:y,name:k,mainShade:g=500,lightShade:h=300,darkShade:m=700})=>{if(y=_({},y),!y.main&&y[g]&&(y.main=y[g]),!y.hasOwnProperty("main"))throw new Error(so(11,k?` (${k})`:"",g));if(typeof y.main!="string")throw new Error(so(12,k?` (${k})`:"",JSON.stringify(y.main)));return wm(y,"light",h,r),wm(y,"dark",m,r),y.contrastText||(y.contrastText=f(y.main)),y},b={dark:mc,light:bm};return Qt(_({common:_({},fs),mode:t,primary:p({color:i,name:"primary"}),secondary:p({color:s,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:p({color:a,name:"error"}),warning:p({color:d,name:"warning"}),info:p({color:l,name:"info"}),success:p({color:c,name:"success"}),grey:t2,contrastThreshold:n,getContrastText:f,augmentColor:p,tonalOffset:r},b[t]),o)}const vC=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function bC(e){return Math.round(e*1e5)/1e5}const Sm={textTransform:"uppercase"},km='"Roboto", "Helvetica", "Arial", sans-serif';function wC(e,t){const n=typeof t=="function"?t(e):t,{fontFamily:r=km,fontSize:o=14,fontWeightLight:i=300,fontWeightRegular:s=400,fontWeightMedium:a=500,fontWeightBold:l=700,htmlFontSize:c=16,allVariants:d,pxToRem:f}=n,p=te(n,vC),b=o/14,x=f||(g=>`${g/c*b}rem`),y=(g,h,m,w,C)=>_({fontFamily:r,fontWeight:g,fontSize:x(h),lineHeight:m},r===km?{letterSpacing:`${bC(w/h)}em`}:{},C,d),k={h1:y(i,96,1.167,-1.5),h2:y(i,60,1.2,-.5),h3:y(s,48,1.167,0),h4:y(s,34,1.235,.25),h5:y(s,24,1.334,0),h6:y(a,20,1.6,.15),subtitle1:y(s,16,1.75,.15),subtitle2:y(a,14,1.57,.1),body1:y(s,16,1.5,.15),body2:y(s,14,1.43,.15),button:y(a,14,1.75,.4,Sm),caption:y(s,12,1.66,.4),overline:y(s,12,2.66,1,Sm),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return Qt(_({htmlFontSize:c,pxToRem:x,fontFamily:r,fontSize:o,fontWeightLight:i,fontWeightRegular:s,fontWeightMedium:a,fontWeightBold:l},k),p,{clone:!1})}const SC=.2,kC=.14,CC=.12;function Oe(...e){return[`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${SC})`,`${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${kC})`,`${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${CC})`].join(",")}const EC=["none",Oe(0,2,1,-1,0,1,1,0,0,1,3,0),Oe(0,3,1,-2,0,2,2,0,0,1,5,0),Oe(0,3,3,-2,0,3,4,0,0,1,8,0),Oe(0,2,4,-1,0,4,5,0,0,1,10,0),Oe(0,3,5,-1,0,5,8,0,0,1,14,0),Oe(0,3,5,-1,0,6,10,0,0,1,18,0),Oe(0,4,5,-2,0,7,10,1,0,2,16,1),Oe(0,5,5,-3,0,8,10,1,0,3,14,2),Oe(0,5,6,-3,0,9,12,1,0,3,16,2),Oe(0,6,6,-3,0,10,14,1,0,4,18,3),Oe(0,6,7,-4,0,11,15,1,0,4,20,3),Oe(0,7,8,-4,0,12,17,2,0,5,22,4),Oe(0,7,8,-4,0,13,19,2,0,5,24,4),Oe(0,7,9,-4,0,14,21,2,0,5,26,4),Oe(0,8,9,-5,0,15,22,2,0,6,28,5),Oe(0,8,10,-5,0,16,24,2,0,6,30,5),Oe(0,8,11,-5,0,17,26,2,0,6,32,5),Oe(0,9,11,-5,0,18,28,2,0,7,34,6),Oe(0,9,12,-6,0,19,29,2,0,7,36,6),Oe(0,10,13,-6,0,20,31,3,0,8,38,7),Oe(0,10,13,-6,0,21,33,3,0,8,40,7),Oe(0,10,14,-6,0,22,35,3,0,8,42,7),Oe(0,11,14,-7,0,23,36,3,0,9,44,8),Oe(0,11,15,-7,0,24,38,3,0,9,46,8)],NC=["duration","easing","delay"],_C={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},jC={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function Cm(e){return`${Math.round(e)}ms`}function RC(e){if(!e)return 0;const t=e/36;return Math.round((4+15*t**.25+t/5)*10)}function TC(e){const t=_({},_C,e.easing),n=_({},jC,e.duration);return _({getAutoHeightDuration:RC,create:(o=["all"],i={})=>{const{duration:s=n.standard,easing:a=t.easeInOut,delay:l=0}=i;return te(i,NC),(Array.isArray(o)?o:[o]).map(c=>`${c} ${typeof s=="string"?s:Cm(s)} ${a} ${typeof l=="string"?l:Cm(l)}`).join(",")}},e,{easing:t,duration:n})}const PC={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},OC=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function Hy(e={},...t){const{mixins:n={},palette:r={},transitions:o={},typography:i={}}=e,s=te(e,OC);if(e.vars&&e.generateCssVars===void 0)throw new Error(so(18));const a=yC(r),l=ip(e);let c=Qt(l,{mixins:Qk(l.breakpoints,n),palette:a,shadows:EC.slice(),typography:wC(a,i),transitions:TC(o),zIndex:_({},PC)});return c=Qt(c,s),c=t.reduce((d,f)=>Qt(d,f),c),c.unstable_sxConfig=_({},js,s==null?void 0:s.unstable_sxConfig),c.unstable_sx=function(f){return Rs({sx:f,theme:this})},c}const gp=Hy();function qy(){const e=sp(gp);return e[Ll]||e}var Ps={},gc={exports:{}},Em;function FC(){return Em||(Em=1,function(e){function t(n,r){if(n==null)return{};var o={};for(var i in n)if({}.hasOwnProperty.call(n,i)){if(r.indexOf(i)!==-1)continue;o[i]=n[i]}return o}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}(gc)),gc.exports}const $C=Zn(pS),AC=Zn(hS),zC=Zn(bS),IC=Zn(kk),MC=Zn(ak),LC=Zn(hk);var ui=vu;Object.defineProperty(Ps,"__esModule",{value:!0});var DC=Ps.default=ZC;Ps.shouldForwardProp=ka;Ps.systemDefaultTheme=void 0;var en=ui(xy()),Td=ui(FC()),Nm=GC($C),BC=AC;ui(zC);ui(IC);var UC=ui(MC),WC=ui(LC);const VC=["ownerState"],HC=["variants"],qC=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function Gy(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(Gy=function(r){return r?n:t})(e)}function GC(e,t){if(e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=Gy(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(i!=="default"&&Object.prototype.hasOwnProperty.call(e,i)){var s=o?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(r,i,s):r[i]=e[i]}return r.default=e,n&&n.set(e,r),r}function KC(e){return Object.keys(e).length===0}function QC(e){return typeof e=="string"&&e.charCodeAt(0)>96}function ka(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const XC=Ps.systemDefaultTheme=(0,UC.default)(),YC=e=>e&&e.charAt(0).toLowerCase()+e.slice(1);function ra({defaultTheme:e,theme:t,themeId:n}){return KC(t)?e:t[n]||t}function JC(e){return e?(t,n)=>n[e]:null}function Ca(e,t){let{ownerState:n}=t,r=(0,Td.default)(t,VC);const o=typeof e=="function"?e((0,en.default)({ownerState:n},r)):e;if(Array.isArray(o))return o.flatMap(i=>Ca(i,(0,en.default)({ownerState:n},r)));if(o&&typeof o=="object"&&Array.isArray(o.variants)){const{variants:i=[]}=o;let a=(0,Td.default)(o,HC);return i.forEach(l=>{let c=!0;typeof l.props=="function"?c=l.props((0,en.default)({ownerState:n},r,n)):Object.keys(l.props).forEach(d=>{(n==null?void 0:n[d])!==l.props[d]&&r[d]!==l.props[d]&&(c=!1)}),c&&(Array.isArray(a)||(a=[a]),a.push(typeof l.style=="function"?l.style((0,en.default)({ownerState:n},r,n)):l.style))}),a}return o}function ZC(e={}){const{themeId:t,defaultTheme:n=XC,rootShouldForwardProp:r=ka,slotShouldForwardProp:o=ka}=e,i=s=>(0,WC.default)((0,en.default)({},s,{theme:ra((0,en.default)({},s,{defaultTheme:n,themeId:t}))}));return i.__mui_systemSx=!0,(s,a={})=>{(0,Nm.internal_processStyles)(s,C=>C.filter(S=>!(S!=null&&S.__mui_systemSx)));const{name:l,slot:c,skipVariantsResolver:d,skipSx:f,overridesResolver:p=JC(YC(c))}=a,b=(0,Td.default)(a,qC),x=d!==void 0?d:c&&c!=="Root"&&c!=="root"||!1,y=f||!1;let k,g=ka;c==="Root"||c==="root"?g=r:c?g=o:QC(s)&&(g=void 0);const h=(0,Nm.default)(s,(0,en.default)({shouldForwardProp:g,label:k},b)),m=C=>typeof C=="function"&&C.__emotion_real!==C||(0,BC.isPlainObject)(C)?S=>Ca(C,(0,en.default)({},S,{theme:ra({theme:S.theme,defaultTheme:n,themeId:t})})):C,w=(C,...S)=>{let E=m(C);const j=S?S.map(m):[];l&&p&&j.push(T=>{const P=ra((0,en.default)({},T,{defaultTheme:n,themeId:t}));if(!P.components||!P.components[l]||!P.components[l].styleOverrides)return null;const I=P.components[l].styleOverrides,M={};return Object.entries(I).forEach(([W,U])=>{M[W]=Ca(U,(0,en.default)({},T,{theme:P}))}),p(T,M)}),l&&!x&&j.push(T=>{var P;const I=ra((0,en.default)({},T,{defaultTheme:n,themeId:t})),M=I==null||(P=I.components)==null||(P=P[l])==null?void 0:P.variants;return Ca({variants:M},(0,en.default)({},T,{theme:I}))}),y||j.push(i);const A=j.length-S.length;if(Array.isArray(C)&&A>0){const T=new Array(A).fill("");E=[...C,...T],E.raw=[...C.raw,...T]}const z=h(E,...j);return s.muiName&&(z.muiName=s.muiName),z};return h.withConfig&&(w.withConfig=h.withConfig),w}}function Ky(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const Cn=e=>Ky(e)&&e!=="classes",ne=DC({themeId:Ll,defaultTheme:gp,rootShouldForwardProp:Cn}),_m=e=>{let t;return e<1?t=5.11916*e**2:t=4.5*Math.log(e+1)+2,(t/100).toFixed(2)};function Le(e){return Kk(e)}function eE(e){return $e("MuiSvgIcon",e)}Pe("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const tE=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],nE=e=>{const{color:t,fontSize:n,classes:r}=e,o={root:["root",t!=="inherit"&&`color${oe(t)}`,`fontSize${oe(n)}`]};return Me(o,eE,r)},rE=ne("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.color!=="inherit"&&t[`color${oe(n.color)}`],t[`fontSize${oe(n.fontSize)}`]]}})(({theme:e,ownerState:t})=>{var n,r,o,i,s,a,l,c,d,f,p,b,x;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:t.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:(n=e.transitions)==null||(r=n.create)==null?void 0:r.call(n,"fill",{duration:(o=e.transitions)==null||(o=o.duration)==null?void 0:o.shorter}),fontSize:{inherit:"inherit",small:((i=e.typography)==null||(s=i.pxToRem)==null?void 0:s.call(i,20))||"1.25rem",medium:((a=e.typography)==null||(l=a.pxToRem)==null?void 0:l.call(a,24))||"1.5rem",large:((c=e.typography)==null||(d=c.pxToRem)==null?void 0:d.call(c,35))||"2.1875rem"}[t.fontSize],color:(f=(p=(e.vars||e).palette)==null||(p=p[t.color])==null?void 0:p.main)!=null?f:{action:(b=(e.vars||e).palette)==null||(b=b.action)==null?void 0:b.active,disabled:(x=(e.vars||e).palette)==null||(x=x.action)==null?void 0:x.disabled,inherit:void 0}[t.color]}}),Pd=v.forwardRef(function(t,n){const r=Le({props:t,name:"MuiSvgIcon"}),{children:o,className:i,color:s="inherit",component:a="svg",fontSize:l="medium",htmlColor:c,inheritViewBox:d=!1,titleAccess:f,viewBox:p="0 0 24 24"}=r,b=te(r,tE),x=v.isValidElement(o)&&o.type==="svg",y=_({},r,{color:s,component:a,fontSize:l,instanceFontSize:t.fontSize,inheritViewBox:d,viewBox:p,hasSvgAsChild:x}),k={};d||(k.viewBox=p);const g=nE(y);return u.jsxs(rE,_({as:a,className:le(g.root,i),focusable:"false",color:c,"aria-hidden":f?void 0:!0,role:f?"img":void 0,ref:n},k,b,x&&o.props,{ownerState:y,children:[x?o.props.children:o,f?u.jsx("title",{children:f}):null]}))});Pd.muiName="SvgIcon";function Qy(e,t){function n(r,o){return u.jsx(Pd,_({"data-testid":`${t}Icon`,ref:o},r,{children:e}))}return n.muiName=Pd.muiName,v.memo(v.forwardRef(n))}const oE={configure:e=>{lp.configure(e)}},iE=Object.freeze(Object.defineProperty({__proto__:null,capitalize:oe,createChainedFunction:_d,createSvgIcon:Qy,debounce:dp,deprecatedPropType:Nk,isMuiElement:Sa,ownerDocument:It,ownerWindow:Tr,requirePropFactory:_k,setRef:il,unstable_ClassNameGenerator:oE,unstable_useEnhancedEffect:Rr,unstable_useId:fp,unsupportedProp:Rk,useControlled:jd,useEventCallback:pr,useForkRef:Nt,useIsFocusVisible:Ay},Symbol.toStringTag,{value:"Module"}));function Od(e,t){return Od=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},Od(e,t)}function Xy(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Od(e,t)}const jm={disabled:!1},ll=Z.createContext(null);var sE=function(t){return t.scrollTop},$i="unmounted",Br="exited",Ur="entering",Co="entered",Fd="exiting",Mn=function(e){Xy(t,e);function t(r,o){var i;i=e.call(this,r,o)||this;var s=o,a=s&&!s.isMounting?r.enter:r.appear,l;return i.appearStatus=null,r.in?a?(l=Br,i.appearStatus=Ur):l=Co:r.unmountOnExit||r.mountOnEnter?l=$i:l=Br,i.state={status:l},i.nextCallback=null,i}t.getDerivedStateFromProps=function(o,i){var s=o.in;return s&&i.status===$i?{status:Br}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(o){var i=null;if(o!==this.props){var s=this.state.status;this.props.in?s!==Ur&&s!==Co&&(i=Ur):(s===Ur||s===Co)&&(i=Fd)}this.updateStatus(!1,i)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var o=this.props.timeout,i,s,a;return i=s=a=o,o!=null&&typeof o!="number"&&(i=o.exit,s=o.enter,a=o.appear!==void 0?o.appear:s),{exit:i,enter:s,appear:a}},n.updateStatus=function(o,i){if(o===void 0&&(o=!1),i!==null)if(this.cancelNextCallback(),i===Ur){if(this.props.unmountOnExit||this.props.mountOnEnter){var s=this.props.nodeRef?this.props.nodeRef.current:ta.findDOMNode(this);s&&sE(s)}this.performEnter(o)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Br&&this.setState({status:$i})},n.performEnter=function(o){var i=this,s=this.props.enter,a=this.context?this.context.isMounting:o,l=this.props.nodeRef?[a]:[ta.findDOMNode(this),a],c=l[0],d=l[1],f=this.getTimeouts(),p=a?f.appear:f.enter;if(!o&&!s||jm.disabled){this.safeSetState({status:Co},function(){i.props.onEntered(c)});return}this.props.onEnter(c,d),this.safeSetState({status:Ur},function(){i.props.onEntering(c,d),i.onTransitionEnd(p,function(){i.safeSetState({status:Co},function(){i.props.onEntered(c,d)})})})},n.performExit=function(){var o=this,i=this.props.exit,s=this.getTimeouts(),a=this.props.nodeRef?void 0:ta.findDOMNode(this);if(!i||jm.disabled){this.safeSetState({status:Br},function(){o.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:Fd},function(){o.props.onExiting(a),o.onTransitionEnd(s.exit,function(){o.safeSetState({status:Br},function(){o.props.onExited(a)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(o,i){i=this.setNextCallback(i),this.setState(o,i)},n.setNextCallback=function(o){var i=this,s=!0;return this.nextCallback=function(a){s&&(s=!1,i.nextCallback=null,o(a))},this.nextCallback.cancel=function(){s=!1},this.nextCallback},n.onTransitionEnd=function(o,i){this.setNextCallback(i);var s=this.props.nodeRef?this.props.nodeRef.current:ta.findDOMNode(this),a=o==null&&!this.props.addEndListener;if(!s||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[s,this.nextCallback],c=l[0],d=l[1];this.props.addEndListener(c,d)}o!=null&&setTimeout(this.nextCallback,o)},n.render=function(){var o=this.state.status;if(o===$i)return null;var i=this.props,s=i.children;i.in,i.mountOnEnter,i.unmountOnExit,i.appear,i.enter,i.exit,i.timeout,i.addEndListener,i.onEnter,i.onEntering,i.onEntered,i.onExit,i.onExiting,i.onExited,i.nodeRef;var a=te(i,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return Z.createElement(ll.Provider,{value:null},typeof s=="function"?s(o,a):Z.cloneElement(Z.Children.only(s),a))},t}(Z.Component);Mn.contextType=ll;Mn.propTypes={};function wo(){}Mn.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:wo,onEntering:wo,onEntered:wo,onExit:wo,onExiting:wo,onExited:wo};Mn.UNMOUNTED=$i;Mn.EXITED=Br;Mn.ENTERING=Ur;Mn.ENTERED=Co;Mn.EXITING=Fd;function aE(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function xp(e,t){var n=function(i){return t&&v.isValidElement(i)?t(i):i},r=Object.create(null);return e&&v.Children.map(e,function(o){return o}).forEach(function(o){r[o.key]=n(o)}),r}function lE(e,t){e=e||{},t=t||{};function n(d){return d in t?t[d]:e[d]}var r=Object.create(null),o=[];for(var i in e)i in t?o.length&&(r[i]=o,o=[]):o.push(i);var s,a={};for(var l in t){if(r[l])for(s=0;s<r[l].length;s++){var c=r[l][s];a[r[l][s]]=n(c)}a[l]=n(l)}for(s=0;s<o.length;s++)a[o[s]]=n(o[s]);return a}function qr(e,t,n){return n[t]!=null?n[t]:e.props[t]}function uE(e,t){return xp(e.children,function(n){return v.cloneElement(n,{onExited:t.bind(null,n),in:!0,appear:qr(n,"appear",e),enter:qr(n,"enter",e),exit:qr(n,"exit",e)})})}function cE(e,t,n){var r=xp(e.children),o=lE(t,r);return Object.keys(o).forEach(function(i){var s=o[i];if(v.isValidElement(s)){var a=i in t,l=i in r,c=t[i],d=v.isValidElement(c)&&!c.props.in;l&&(!a||d)?o[i]=v.cloneElement(s,{onExited:n.bind(null,s),in:!0,exit:qr(s,"exit",e),enter:qr(s,"enter",e)}):!l&&a&&!d?o[i]=v.cloneElement(s,{in:!1}):l&&a&&v.isValidElement(c)&&(o[i]=v.cloneElement(s,{onExited:n.bind(null,s),in:c.props.in,exit:qr(s,"exit",e),enter:qr(s,"enter",e)}))}}),o}var dE=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},fE={component:"div",childFactory:function(t){return t}},yp=function(e){Xy(t,e);function t(r,o){var i;i=e.call(this,r,o)||this;var s=i.handleExited.bind(aE(i));return i.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},i}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(o,i){var s=i.children,a=i.handleExited,l=i.firstRender;return{children:l?uE(o,a):cE(o,s,a),firstRender:!1}},n.handleExited=function(o,i){var s=xp(this.props.children);o.key in s||(o.props.onExited&&o.props.onExited(i),this.mounted&&this.setState(function(a){var l=_({},a.children);return delete l[o.key],{children:l}}))},n.render=function(){var o=this.props,i=o.component,s=o.childFactory,a=te(o,["component","childFactory"]),l=this.state.contextValue,c=dE(this.state.children).map(s);return delete a.appear,delete a.enter,delete a.exit,i===null?Z.createElement(ll.Provider,{value:l},c):Z.createElement(ll.Provider,{value:l},Z.createElement(i,a,c))},t}(Z.Component);yp.propTypes={};yp.defaultProps=fE;const Yy=e=>e.scrollTop;function ul(e,t){var n,r;const{timeout:o,easing:i,style:s={}}=e;return{duration:(n=s.transitionDuration)!=null?n:typeof o=="number"?o:o[t.mode]||0,easing:(r=s.transitionTimingFunction)!=null?r:typeof i=="object"?i[t.mode]:i,delay:s.transitionDelay}}function pE(e){return $e("MuiPaper",e)}Pe("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const hE=["className","component","elevation","square","variant"],mE=e=>{const{square:t,elevation:n,variant:r,classes:o}=e,i={root:["root",r,!t&&"rounded",r==="elevation"&&`elevation${n}`]};return Me(i,pE,o)},gE=ne("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,n.variant==="elevation"&&t[`elevation${n.elevation}`]]}})(({theme:e,ownerState:t})=>{var n;return _({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},t.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},t.variant==="elevation"&&_({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${hr("#fff",_m(t.elevation))}, ${hr("#fff",_m(t.elevation))})`},e.vars&&{backgroundImage:(n=e.vars.overlays)==null?void 0:n[t.elevation]}))}),xE=v.forwardRef(function(t,n){const r=Le({props:t,name:"MuiPaper"}),{className:o,component:i="div",elevation:s=1,square:a=!1,variant:l="elevation"}=r,c=te(r,hE),d=_({},r,{component:i,elevation:s,square:a,variant:l}),f=mE(d);return u.jsx(gE,_({as:i,ownerState:d,className:le(f.root,o),ref:n},c))});function yE(e){const{className:t,classes:n,pulsate:r=!1,rippleX:o,rippleY:i,rippleSize:s,in:a,onExited:l,timeout:c}=e,[d,f]=v.useState(!1),p=le(t,n.ripple,n.rippleVisible,r&&n.ripplePulsate),b={width:s,height:s,top:-(s/2)+i,left:-(s/2)+o},x=le(n.child,d&&n.childLeaving,r&&n.childPulsate);return!a&&!d&&f(!0),v.useEffect(()=>{if(!a&&l!=null){const y=setTimeout(l,c);return()=>{clearTimeout(y)}}},[l,a,c]),u.jsx("span",{className:p,style:b,children:u.jsx("span",{className:x})})}const tn=Pe("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),vE=["center","classes","className"];let bu=e=>e,Rm,Tm,Pm,Om;const $d=550,bE=80,wE=eu(Rm||(Rm=bu`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),SE=eu(Tm||(Tm=bu`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),kE=eu(Pm||(Pm=bu`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),CE=ne("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),EE=ne(yE,{name:"MuiTouchRipple",slot:"Ripple"})(Om||(Om=bu`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),tn.rippleVisible,wE,$d,({theme:e})=>e.transitions.easing.easeInOut,tn.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,tn.child,tn.childLeaving,SE,$d,({theme:e})=>e.transitions.easing.easeInOut,tn.childPulsate,kE,({theme:e})=>e.transitions.easing.easeInOut),NE=v.forwardRef(function(t,n){const r=Le({props:t,name:"MuiTouchRipple"}),{center:o=!1,classes:i={},className:s}=r,a=te(r,vE),[l,c]=v.useState([]),d=v.useRef(0),f=v.useRef(null);v.useEffect(()=>{f.current&&(f.current(),f.current=null)},[l]);const p=v.useRef(!1),b=$y(),x=v.useRef(null),y=v.useRef(null),k=v.useCallback(w=>{const{pulsate:C,rippleX:S,rippleY:E,rippleSize:j,cb:A}=w;c(z=>[...z,u.jsx(EE,{classes:{ripple:le(i.ripple,tn.ripple),rippleVisible:le(i.rippleVisible,tn.rippleVisible),ripplePulsate:le(i.ripplePulsate,tn.ripplePulsate),child:le(i.child,tn.child),childLeaving:le(i.childLeaving,tn.childLeaving),childPulsate:le(i.childPulsate,tn.childPulsate)},timeout:$d,pulsate:C,rippleX:S,rippleY:E,rippleSize:j},d.current)]),d.current+=1,f.current=A},[i]),g=v.useCallback((w={},C={},S=()=>{})=>{const{pulsate:E=!1,center:j=o||C.pulsate,fakeElement:A=!1}=C;if((w==null?void 0:w.type)==="mousedown"&&p.current){p.current=!1;return}(w==null?void 0:w.type)==="touchstart"&&(p.current=!0);const z=A?null:y.current,T=z?z.getBoundingClientRect():{width:0,height:0,left:0,top:0};let P,I,M;if(j||w===void 0||w.clientX===0&&w.clientY===0||!w.clientX&&!w.touches)P=Math.round(T.width/2),I=Math.round(T.height/2);else{const{clientX:W,clientY:U}=w.touches&&w.touches.length>0?w.touches[0]:w;P=Math.round(W-T.left),I=Math.round(U-T.top)}if(j)M=Math.sqrt((2*T.width**2+T.height**2)/3),M%2===0&&(M+=1);else{const W=Math.max(Math.abs((z?z.clientWidth:0)-P),P)*2+2,U=Math.max(Math.abs((z?z.clientHeight:0)-I),I)*2+2;M=Math.sqrt(W**2+U**2)}w!=null&&w.touches?x.current===null&&(x.current=()=>{k({pulsate:E,rippleX:P,rippleY:I,rippleSize:M,cb:S})},b.start(bE,()=>{x.current&&(x.current(),x.current=null)})):k({pulsate:E,rippleX:P,rippleY:I,rippleSize:M,cb:S})},[o,k,b]),h=v.useCallback(()=>{g({},{pulsate:!0})},[g]),m=v.useCallback((w,C)=>{if(b.clear(),(w==null?void 0:w.type)==="touchend"&&x.current){x.current(),x.current=null,b.start(0,()=>{m(w,C)});return}x.current=null,c(S=>S.length>0?S.slice(1):S),f.current=C},[b]);return v.useImperativeHandle(n,()=>({pulsate:h,start:g,stop:m}),[h,g,m]),u.jsx(CE,_({className:le(tn.root,i.root,s),ref:y},a,{children:u.jsx(yp,{component:null,exit:!0,children:l})}))});function _E(e){return $e("MuiButtonBase",e)}const jE=Pe("MuiButtonBase",["root","disabled","focusVisible"]),RE=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],TE=e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:r,classes:o}=e,s=Me({root:["root",t&&"disabled",n&&"focusVisible"]},_E,o);return n&&r&&(s.root+=` ${r}`),s},PE=ne("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${jE.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),Jy=v.forwardRef(function(t,n){const r=Le({props:t,name:"MuiButtonBase"}),{action:o,centerRipple:i=!1,children:s,className:a,component:l="button",disabled:c=!1,disableRipple:d=!1,disableTouchRipple:f=!1,focusRipple:p=!1,LinkComponent:b="a",onBlur:x,onClick:y,onContextMenu:k,onDragLeave:g,onFocus:h,onFocusVisible:m,onKeyDown:w,onKeyUp:C,onMouseDown:S,onMouseLeave:E,onMouseUp:j,onTouchEnd:A,onTouchMove:z,onTouchStart:T,tabIndex:P=0,TouchRippleProps:I,touchRippleRef:M,type:W}=r,U=te(r,RE),Q=v.useRef(null),F=v.useRef(null),q=Nt(F,M),{isFocusVisibleRef:X,onFocus:se,onBlur:re,ref:xe}=Ay(),[ee,pe]=v.useState(!1);c&&ee&&pe(!1),v.useImperativeHandle(o,()=>({focusVisible:()=>{pe(!0),Q.current.focus()}}),[]);const[ce,De]=v.useState(!1);v.useEffect(()=>{De(!0)},[]);const lt=ce&&!d&&!c;v.useEffect(()=>{ee&&p&&!d&&ce&&F.current.pulsate()},[d,p,ee,ce]);function je(H,ye,Be=f){return pr(Ir=>(ye&&ye(Ir),!Be&&F.current&&F.current[H](Ir),!0))}const ut=je("start",S),de=je("stop",k),Ce=je("stop",g),ae=je("stop",j),he=je("stop",H=>{ee&&H.preventDefault(),E&&E(H)}),Ee=je("start",T),hn=je("stop",A),wt=je("stop",z),Rt=je("stop",H=>{re(H),X.current===!1&&pe(!1),x&&x(H)},!1),Bt=pr(H=>{Q.current||(Q.current=H.currentTarget),se(H),X.current===!0&&(pe(!0),m&&m(H)),h&&h(H)}),Ut=()=>{const H=Q.current;return l&&l!=="button"&&!(H.tagName==="A"&&H.href)},Ne=v.useRef(!1),N=pr(H=>{p&&!Ne.current&&ee&&F.current&&H.key===" "&&(Ne.current=!0,F.current.stop(H,()=>{F.current.start(H)})),H.target===H.currentTarget&&Ut()&&H.key===" "&&H.preventDefault(),w&&w(H),H.target===H.currentTarget&&Ut()&&H.key==="Enter"&&!c&&(H.preventDefault(),y&&y(H))}),R=pr(H=>{p&&H.key===" "&&F.current&&ee&&!H.defaultPrevented&&(Ne.current=!1,F.current.stop(H,()=>{F.current.pulsate(H)})),C&&C(H),y&&H.target===H.currentTarget&&Ut()&&H.key===" "&&!H.defaultPrevented&&y(H)});let O=l;O==="button"&&(U.href||U.to)&&(O=b);const G={};O==="button"?(G.type=W===void 0?"button":W,G.disabled=c):(!U.href&&!U.to&&(G.role="button"),c&&(G["aria-disabled"]=c));const V=Nt(n,xe,Q),L=_({},r,{centerRipple:i,component:l,disabled:c,disableRipple:d,disableTouchRipple:f,focusRipple:p,tabIndex:P,focusVisible:ee}),B=TE(L);return u.jsxs(PE,_({as:O,className:le(B.root,a),ownerState:L,onBlur:Rt,onClick:y,onContextMenu:de,onFocus:Bt,onKeyDown:N,onKeyUp:R,onMouseDown:ut,onMouseLeave:he,onMouseUp:ae,onDragLeave:Ce,onTouchEnd:hn,onTouchMove:wt,onTouchStart:Ee,ref:V,tabIndex:c?-1:P,type:W},G,U,{children:[s,lt?u.jsx(NE,_({ref:q,center:i},I)):null]}))});function OE(e){return $e("MuiIconButton",e)}const FE=Pe("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),$E=["edge","children","className","color","disabled","disableFocusRipple","size"],AE=e=>{const{classes:t,disabled:n,color:r,edge:o,size:i}=e,s={root:["root",n&&"disabled",r!=="default"&&`color${oe(r)}`,o&&`edge${oe(o)}`,`size${oe(i)}`]};return Me(s,OE,t)},zE=ne(Jy,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.color!=="default"&&t[`color${oe(n.color)}`],n.edge&&t[`edge${oe(n.edge)}`],t[`size${oe(n.size)}`]]}})(({theme:e,ownerState:t})=>_({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(e.vars||e).palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest})},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:hr(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},t.edge==="start"&&{marginLeft:t.size==="small"?-3:-12},t.edge==="end"&&{marginRight:t.size==="small"?-3:-12}),({theme:e,ownerState:t})=>{var n;const r=(n=(e.vars||e).palette)==null?void 0:n[t.color];return _({},t.color==="inherit"&&{color:"inherit"},t.color!=="inherit"&&t.color!=="default"&&_({color:r==null?void 0:r.main},!t.disableRipple&&{"&:hover":_({},r&&{backgroundColor:e.vars?`rgba(${r.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:hr(r.main,e.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),t.size==="small"&&{padding:5,fontSize:e.typography.pxToRem(18)},t.size==="large"&&{padding:12,fontSize:e.typography.pxToRem(28)},{[`&.${FE.disabled}`]:{backgroundColor:"transparent",color:(e.vars||e).palette.action.disabled}})}),IE=v.forwardRef(function(t,n){const r=Le({props:t,name:"MuiIconButton"}),{edge:o=!1,children:i,className:s,color:a="default",disabled:l=!1,disableFocusRipple:c=!1,size:d="medium"}=r,f=te(r,$E),p=_({},r,{edge:o,color:a,disabled:l,disableFocusRipple:c,size:d}),b=AE(p);return u.jsx(zE,_({className:le(b.root,s),centerRipple:!0,focusRipple:!c,disabled:l,ref:n},f,{ownerState:p,children:i}))});function ME(e){return $e("MuiTypography",e)}Pe("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const LE=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],DE=e=>{const{align:t,gutterBottom:n,noWrap:r,paragraph:o,variant:i,classes:s}=e,a={root:["root",i,e.align!=="inherit"&&`align${oe(t)}`,n&&"gutterBottom",r&&"noWrap",o&&"paragraph"]};return Me(a,ME,s)},BE=ne("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.variant&&t[n.variant],n.align!=="inherit"&&t[`align${oe(n.align)}`],n.noWrap&&t.noWrap,n.gutterBottom&&t.gutterBottom,n.paragraph&&t.paragraph]}})(({theme:e,ownerState:t})=>_({margin:0},t.variant==="inherit"&&{font:"inherit"},t.variant!=="inherit"&&e.typography[t.variant],t.align!=="inherit"&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),Fm={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},UE={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},WE=e=>UE[e]||e,VE=v.forwardRef(function(t,n){const r=Le({props:t,name:"MuiTypography"}),o=WE(r.color),i=ap(_({},r,{color:o})),{align:s="inherit",className:a,component:l,gutterBottom:c=!1,noWrap:d=!1,paragraph:f=!1,variant:p="body1",variantMapping:b=Fm}=i,x=te(i,LE),y=_({},i,{align:s,color:o,className:a,component:l,gutterBottom:c,noWrap:d,paragraph:f,variant:p,variantMapping:b}),k=l||(f?"p":b[p]||Fm[p])||"span",g=DE(y);return u.jsx(BE,_({as:k,ref:n,ownerState:y,className:le(g.root,a)},x))});function HE(e){return typeof e=="function"?e():e}const qE=v.forwardRef(function(t,n){const{children:r,container:o,disablePortal:i=!1}=t,[s,a]=v.useState(null),l=Nt(v.isValidElement(r)?Ts(r):null,n);if(Rr(()=>{i||a(HE(o)||document.body)},[o,i]),Rr(()=>{if(s&&!i)return il(n,s),()=>{il(n,null)}},[n,s,i]),i){if(v.isValidElement(r)){const c={ref:l};return v.cloneElement(r,c)}return u.jsx(v.Fragment,{children:r})}return u.jsx(v.Fragment,{children:s&&Vf.createPortal(r,s)})}),GE=["onChange","maxRows","minRows","style","value"];function oa(e){return parseInt(e,10)||0}const KE={shadow:{visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"}};function QE(e){for(const t in e)return!1;return!0}function $m(e){return QE(e)||e.outerHeightStyle===0&&!e.overflowing}const XE=v.forwardRef(function(t,n){const{onChange:r,maxRows:o,minRows:i=1,style:s,value:a}=t,l=te(t,GE),{current:c}=v.useRef(a!=null),d=v.useRef(null),f=Nt(n,d),p=v.useRef(null),b=v.useRef(null),x=v.useCallback(()=>{const m=d.current,w=b.current;if(!m||!w)return;const S=Tr(m).getComputedStyle(m);if(S.width==="0px")return{outerHeightStyle:0,overflowing:!1};w.style.width=S.width,w.value=m.value||t.placeholder||"x",w.value.slice(-1)===`
`&&(w.value+=" ");const E=S.boxSizing,j=oa(S.paddingBottom)+oa(S.paddingTop),A=oa(S.borderBottomWidth)+oa(S.borderTopWidth),z=w.scrollHeight;w.value="x";const T=w.scrollHeight;let P=z;i&&(P=Math.max(Number(i)*T,P)),o&&(P=Math.min(Number(o)*T,P)),P=Math.max(P,T);const I=P+(E==="border-box"?j+A:0),M=Math.abs(P-z)<=1;return{outerHeightStyle:I,overflowing:M}},[o,i,t.placeholder]),y=pr(()=>{const m=d.current,w=x();if(!m||!w||$m(w))return!1;const C=w.outerHeightStyle;return p.current!=null&&p.current!==C}),k=v.useCallback(()=>{const m=d.current,w=x();if(!m||!w||$m(w))return;const C=w.outerHeightStyle;p.current!==C&&(p.current=C,m.style.height=`${C}px`),m.style.overflow=w.overflowing?"hidden":""},[x]),g=v.useRef(-1);Rr(()=>{const m=dp(k),w=d==null?void 0:d.current;if(!w)return;const C=Tr(w);C.addEventListener("resize",m);let S;return typeof ResizeObserver<"u"&&(S=new ResizeObserver(()=>{y()&&(S.unobserve(w),cancelAnimationFrame(g.current),k(),g.current=requestAnimationFrame(()=>{S.observe(w)}))}),S.observe(w)),()=>{m.clear(),cancelAnimationFrame(g.current),C.removeEventListener("resize",m),S&&S.disconnect()}},[x,k,y]),Rr(()=>{k()});const h=m=>{c||k(),r&&r(m)};return u.jsxs(v.Fragment,{children:[u.jsx("textarea",_({value:a,onChange:h,ref:f,rows:i,style:s},l)),u.jsx("textarea",{"aria-hidden":!0,className:t.className,readOnly:!0,ref:b,tabIndex:-1,style:_({},KE.shadow,s,{paddingTop:0,paddingBottom:0})})]})});function ci({props:e,states:t,muiFormControl:n}){return t.reduce((r,o)=>(r[o]=e[o],n&&typeof e[o]>"u"&&(r[o]=n[o]),r),{})}const wu=v.createContext(void 0);function co(){return v.useContext(wu)}function YE(e){return u.jsx(dk,_({},e,{defaultTheme:gp,themeId:Ll}))}function Am(e){return e!=null&&!(Array.isArray(e)&&e.length===0)}function cl(e,t=!1){return e&&(Am(e.value)&&e.value!==""||t&&Am(e.defaultValue)&&e.defaultValue!=="")}function JE(e){return e.startAdornment}function ZE(e){return $e("MuiInputBase",e)}const ri=Pe("MuiInputBase",["root","formControl","focused","disabled","adornedStart","adornedEnd","error","sizeSmall","multiline","colorSecondary","fullWidth","hiddenLabel","readOnly","input","inputSizeSmall","inputMultiline","inputTypeSearch","inputAdornedStart","inputAdornedEnd","inputHiddenLabel"]),eN=["aria-describedby","autoComplete","autoFocus","className","color","components","componentsProps","defaultValue","disabled","disableInjectingGlobalStyles","endAdornment","error","fullWidth","id","inputComponent","inputProps","inputRef","margin","maxRows","minRows","multiline","name","onBlur","onChange","onClick","onFocus","onKeyDown","onKeyUp","placeholder","readOnly","renderSuffix","rows","size","slotProps","slots","startAdornment","type","value"],Su=(e,t)=>{const{ownerState:n}=e;return[t.root,n.formControl&&t.formControl,n.startAdornment&&t.adornedStart,n.endAdornment&&t.adornedEnd,n.error&&t.error,n.size==="small"&&t.sizeSmall,n.multiline&&t.multiline,n.color&&t[`color${oe(n.color)}`],n.fullWidth&&t.fullWidth,n.hiddenLabel&&t.hiddenLabel]},ku=(e,t)=>{const{ownerState:n}=e;return[t.input,n.size==="small"&&t.inputSizeSmall,n.multiline&&t.inputMultiline,n.type==="search"&&t.inputTypeSearch,n.startAdornment&&t.inputAdornedStart,n.endAdornment&&t.inputAdornedEnd,n.hiddenLabel&&t.inputHiddenLabel]},tN=e=>{const{classes:t,color:n,disabled:r,error:o,endAdornment:i,focused:s,formControl:a,fullWidth:l,hiddenLabel:c,multiline:d,readOnly:f,size:p,startAdornment:b,type:x}=e,y={root:["root",`color${oe(n)}`,r&&"disabled",o&&"error",l&&"fullWidth",s&&"focused",a&&"formControl",p&&p!=="medium"&&`size${oe(p)}`,d&&"multiline",b&&"adornedStart",i&&"adornedEnd",c&&"hiddenLabel",f&&"readOnly"],input:["input",r&&"disabled",x==="search"&&"inputTypeSearch",d&&"inputMultiline",p==="small"&&"inputSizeSmall",c&&"inputHiddenLabel",b&&"inputAdornedStart",i&&"inputAdornedEnd",f&&"readOnly"]};return Me(y,ZE,t)},Cu=ne("div",{name:"MuiInputBase",slot:"Root",overridesResolver:Su})(({theme:e,ownerState:t})=>_({},e.typography.body1,{color:(e.vars||e).palette.text.primary,lineHeight:"1.4375em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center",[`&.${ri.disabled}`]:{color:(e.vars||e).palette.text.disabled,cursor:"default"}},t.multiline&&_({padding:"4px 0 5px"},t.size==="small"&&{paddingTop:1}),t.fullWidth&&{width:"100%"})),Eu=ne("input",{name:"MuiInputBase",slot:"Input",overridesResolver:ku})(({theme:e,ownerState:t})=>{const n=e.palette.mode==="light",r=_({color:"currentColor"},e.vars?{opacity:e.vars.opacity.inputPlaceholder}:{opacity:n?.42:.5},{transition:e.transitions.create("opacity",{duration:e.transitions.duration.shorter})}),o={opacity:"0 !important"},i=e.vars?{opacity:e.vars.opacity.inputPlaceholder}:{opacity:n?.42:.5};return _({font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"4px 0 5px",border:0,boxSizing:"content-box",background:"none",height:"1.4375em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%",animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&::-webkit-input-placeholder":r,"&::-moz-placeholder":r,"&:-ms-input-placeholder":r,"&::-ms-input-placeholder":r,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{WebkitAppearance:"none"},[`label[data-shrink=false] + .${ri.formControl} &`]:{"&::-webkit-input-placeholder":o,"&::-moz-placeholder":o,"&:-ms-input-placeholder":o,"&::-ms-input-placeholder":o,"&:focus::-webkit-input-placeholder":i,"&:focus::-moz-placeholder":i,"&:focus:-ms-input-placeholder":i,"&:focus::-ms-input-placeholder":i},[`&.${ri.disabled}`]:{opacity:1,WebkitTextFillColor:(e.vars||e).palette.text.disabled},"&:-webkit-autofill":{animationDuration:"5000s",animationName:"mui-auto-fill"}},t.size==="small"&&{paddingTop:1},t.multiline&&{height:"auto",resize:"none",padding:0,paddingTop:0},t.type==="search"&&{MozAppearance:"textfield"})}),nN=u.jsx(YE,{styles:{"@keyframes mui-auto-fill":{from:{display:"block"}},"@keyframes mui-auto-fill-cancel":{from:{display:"block"}}}}),vp=v.forwardRef(function(t,n){var r;const o=Le({props:t,name:"MuiInputBase"}),{"aria-describedby":i,autoComplete:s,autoFocus:a,className:l,components:c={},componentsProps:d={},defaultValue:f,disabled:p,disableInjectingGlobalStyles:b,endAdornment:x,fullWidth:y=!1,id:k,inputComponent:g="input",inputProps:h={},inputRef:m,maxRows:w,minRows:C,multiline:S=!1,name:E,onBlur:j,onChange:A,onClick:z,onFocus:T,onKeyDown:P,onKeyUp:I,placeholder:M,readOnly:W,renderSuffix:U,rows:Q,slotProps:F={},slots:q={},startAdornment:X,type:se="text",value:re}=o,xe=te(o,eN),ee=h.value!=null?h.value:re,{current:pe}=v.useRef(ee!=null),ce=v.useRef(),De=v.useCallback(B=>{},[]),lt=Nt(ce,m,h.ref,De),[je,ut]=v.useState(!1),de=co(),Ce=ci({props:o,muiFormControl:de,states:["color","disabled","error","hiddenLabel","size","required","filled"]});Ce.focused=de?de.focused:je,v.useEffect(()=>{!de&&p&&je&&(ut(!1),j&&j())},[de,p,je,j]);const ae=de&&de.onFilled,he=de&&de.onEmpty,Ee=v.useCallback(B=>{cl(B)?ae&&ae():he&&he()},[ae,he]);Rr(()=>{pe&&Ee({value:ee})},[ee,Ee,pe]);const hn=B=>{if(Ce.disabled){B.stopPropagation();return}T&&T(B),h.onFocus&&h.onFocus(B),de&&de.onFocus?de.onFocus(B):ut(!0)},wt=B=>{j&&j(B),h.onBlur&&h.onBlur(B),de&&de.onBlur?de.onBlur(B):ut(!1)},Rt=(B,...H)=>{if(!pe){const ye=B.target||ce.current;if(ye==null)throw new Error(so(1));Ee({value:ye.value})}h.onChange&&h.onChange(B,...H),A&&A(B,...H)};v.useEffect(()=>{Ee(ce.current)},[]);const Bt=B=>{ce.current&&B.currentTarget===B.target&&ce.current.focus(),z&&z(B)};let Ut=g,Ne=h;S&&Ut==="input"&&(Q?Ne=_({type:void 0,minRows:Q,maxRows:Q},Ne):Ne=_({type:void 0,maxRows:w,minRows:C},Ne),Ut=XE);const N=B=>{Ee(B.animationName==="mui-auto-fill-cancel"?ce.current:{value:"x"})};v.useEffect(()=>{de&&de.setAdornedStart(!!X)},[de,X]);const R=_({},o,{color:Ce.color||"primary",disabled:Ce.disabled,endAdornment:x,error:Ce.error,focused:Ce.focused,formControl:de,fullWidth:y,hiddenLabel:Ce.hiddenLabel,multiline:S,size:Ce.size,startAdornment:X,type:se}),O=tN(R),G=q.root||c.Root||Cu,V=F.root||d.root||{},L=q.input||c.Input||Eu;return Ne=_({},Ne,(r=F.input)!=null?r:d.input),u.jsxs(v.Fragment,{children:[!b&&nN,u.jsxs(G,_({},V,!sl(G)&&{ownerState:_({},R,V.ownerState)},{ref:n,onClick:Bt},xe,{className:le(O.root,V.className,l,W&&"MuiInputBase-readOnly"),children:[X,u.jsx(wu.Provider,{value:null,children:u.jsx(L,_({ownerState:R,"aria-invalid":Ce.error,"aria-describedby":i,autoComplete:s,autoFocus:a,defaultValue:f,disabled:Ce.disabled,id:k,onAnimationStart:N,name:E,placeholder:M,readOnly:W,required:Ce.required,rows:Q,value:ee,onKeyDown:P,onKeyUp:I,type:se},Ne,!sl(L)&&{as:Ut,ownerState:_({},R,Ne.ownerState)},{ref:lt,className:le(O.input,Ne.className,W&&"MuiInputBase-readOnly"),onBlur:wt,onChange:Rt,onFocus:hn}))}),x,U?U(_({},Ce,{startAdornment:X})):null]}))]})});function rN(e){return $e("MuiInput",e)}const Ci=_({},ri,Pe("MuiInput",["root","underline","input"]));function oN(e){return $e("MuiOutlinedInput",e)}const ir=_({},ri,Pe("MuiOutlinedInput",["root","notchedOutline","input"]));function iN(e){return $e("MuiFilledInput",e)}const Mr=_({},ri,Pe("MuiFilledInput",["root","underline","input"])),sN=Qy(u.jsx("path",{d:"M7 10l5 5 5-5z"}),"ArrowDropDown"),aN=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],lN={entering:{opacity:1},entered:{opacity:1}},uN=v.forwardRef(function(t,n){const r=qy(),o={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{addEndListener:i,appear:s=!0,children:a,easing:l,in:c,onEnter:d,onEntered:f,onEntering:p,onExit:b,onExited:x,onExiting:y,style:k,timeout:g=o,TransitionComponent:h=Mn}=t,m=te(t,aN),w=v.useRef(null),C=Nt(w,Ts(a),n),S=M=>W=>{if(M){const U=w.current;W===void 0?M(U):M(U,W)}},E=S(p),j=S((M,W)=>{Yy(M);const U=ul({style:k,timeout:g,easing:l},{mode:"enter"});M.style.webkitTransition=r.transitions.create("opacity",U),M.style.transition=r.transitions.create("opacity",U),d&&d(M,W)}),A=S(f),z=S(y),T=S(M=>{const W=ul({style:k,timeout:g,easing:l},{mode:"exit"});M.style.webkitTransition=r.transitions.create("opacity",W),M.style.transition=r.transitions.create("opacity",W),b&&b(M)}),P=S(x),I=M=>{i&&i(w.current,M)};return u.jsx(h,_({appear:s,in:c,nodeRef:w,onEnter:j,onEntered:A,onEntering:E,onExit:T,onExited:P,onExiting:z,addEndListener:I,timeout:g},m,{children:(M,W)=>v.cloneElement(a,_({style:_({opacity:0,visibility:M==="exited"&&!c?"hidden":void 0},lN[M],k,a.props.style),ref:C},W))}))});function cN(e){return $e("MuiBackdrop",e)}Pe("MuiBackdrop",["root","invisible"]);const dN=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],fN=e=>{const{classes:t,invisible:n}=e;return Me({root:["root",n&&"invisible"]},cN,t)},pN=ne("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.invisible&&t.invisible]}})(({ownerState:e})=>_({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})),hN=v.forwardRef(function(t,n){var r,o,i;const s=Le({props:t,name:"MuiBackdrop"}),{children:a,className:l,component:c="div",components:d={},componentsProps:f={},invisible:p=!1,open:b,slotProps:x={},slots:y={},TransitionComponent:k=uN,transitionDuration:g}=s,h=te(s,dN),m=_({},s,{component:c,invisible:p}),w=fN(m),C=(r=x.root)!=null?r:f.root;return u.jsx(k,_({in:b,timeout:g},h,{children:u.jsx(pN,_({"aria-hidden":!0},C,{as:(o=(i=y.root)!=null?i:d.Root)!=null?o:c,className:le(w.root,l,C==null?void 0:C.className),ownerState:_({},m,C==null?void 0:C.ownerState),classes:w,ref:n,children:a}))}))}),mN=Pe("MuiBox",["root"]),gN=Hy(),Eo=xk({themeId:Ll,defaultTheme:gN,defaultClassName:mN.root,generateClassName:lp.generate});function xN(e){return $e("MuiButton",e)}const ia=Pe("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),yN=v.createContext({}),vN=v.createContext(void 0),bN=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],wN=e=>{const{color:t,disableElevation:n,fullWidth:r,size:o,variant:i,classes:s}=e,a={root:["root",i,`${i}${oe(t)}`,`size${oe(o)}`,`${i}Size${oe(o)}`,`color${oe(t)}`,n&&"disableElevation",r&&"fullWidth"],label:["label"],startIcon:["icon","startIcon",`iconSize${oe(o)}`],endIcon:["icon","endIcon",`iconSize${oe(o)}`]},l=Me(a,xN,s);return _({},s,l)},Zy=e=>_({},e.size==="small"&&{"& > *:nth-of-type(1)":{fontSize:18}},e.size==="medium"&&{"& > *:nth-of-type(1)":{fontSize:20}},e.size==="large"&&{"& > *:nth-of-type(1)":{fontSize:22}}),SN=ne(Jy,{shouldForwardProp:e=>Cn(e)||e==="classes",name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],t[`${n.variant}${oe(n.color)}`],t[`size${oe(n.size)}`],t[`${n.variant}Size${oe(n.size)}`],n.color==="inherit"&&t.colorInherit,n.disableElevation&&t.disableElevation,n.fullWidth&&t.fullWidth]}})(({theme:e,ownerState:t})=>{var n,r;const o=e.palette.mode==="light"?e.palette.grey[300]:e.palette.grey[800],i=e.palette.mode==="light"?e.palette.grey.A100:e.palette.grey[700];return _({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":_({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:hr(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},t.variant==="text"&&t.color!=="inherit"&&{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:hr(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},t.variant==="outlined"&&t.color!=="inherit"&&{border:`1px solid ${(e.vars||e).palette[t.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:hr(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},t.variant==="contained"&&{backgroundColor:e.vars?e.vars.palette.Button.inheritContainedHoverBg:i,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},t.variant==="contained"&&t.color!=="inherit"&&{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}}),"&:active":_({},t.variant==="contained"&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${ia.focusVisible}`]:_({},t.variant==="contained"&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${ia.disabled}`]:_({color:(e.vars||e).palette.action.disabled},t.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},t.variant==="contained"&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},t.variant==="text"&&{padding:"6px 8px"},t.variant==="text"&&t.color!=="inherit"&&{color:(e.vars||e).palette[t.color].main},t.variant==="outlined"&&{padding:"5px 15px",border:"1px solid currentColor"},t.variant==="outlined"&&t.color!=="inherit"&&{color:(e.vars||e).palette[t.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:`1px solid ${hr(e.palette[t.color].main,.5)}`},t.variant==="contained"&&{color:e.vars?e.vars.palette.text.primary:(n=(r=e.palette).getContrastText)==null?void 0:n.call(r,e.palette.grey[300]),backgroundColor:e.vars?e.vars.palette.Button.inheritContainedBg:o,boxShadow:(e.vars||e).shadows[2]},t.variant==="contained"&&t.color!=="inherit"&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main},t.color==="inherit"&&{color:"inherit",borderColor:"currentColor"},t.size==="small"&&t.variant==="text"&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},t.size==="large"&&t.variant==="text"&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},t.size==="small"&&t.variant==="outlined"&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},t.size==="large"&&t.variant==="outlined"&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},t.size==="small"&&t.variant==="contained"&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},t.size==="large"&&t.variant==="contained"&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})},({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${ia.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${ia.disabled}`]:{boxShadow:"none"}}),kN=ne("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.startIcon,t[`iconSize${oe(n.size)}`]]}})(({ownerState:e})=>_({display:"inherit",marginRight:8,marginLeft:-4},e.size==="small"&&{marginLeft:-2},Zy(e))),CN=ne("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.endIcon,t[`iconSize${oe(n.size)}`]]}})(({ownerState:e})=>_({display:"inherit",marginRight:-4,marginLeft:8},e.size==="small"&&{marginRight:-2},Zy(e))),EN=v.forwardRef(function(t,n){const r=v.useContext(yN),o=v.useContext(vN),i=ol(r,t),s=Le({props:i,name:"MuiButton"}),{children:a,color:l="primary",component:c="button",className:d,disabled:f=!1,disableElevation:p=!1,disableFocusRipple:b=!1,endIcon:x,focusVisibleClassName:y,fullWidth:k=!1,size:g="medium",startIcon:h,type:m,variant:w="text"}=s,C=te(s,bN),S=_({},s,{color:l,component:c,disabled:f,disableElevation:p,disableFocusRipple:b,fullWidth:k,size:g,type:m,variant:w}),E=wN(S),j=h&&u.jsx(kN,{className:E.startIcon,ownerState:S,children:h}),A=x&&u.jsx(CN,{className:E.endIcon,ownerState:S,children:x}),z=o||"";return u.jsxs(SN,_({ownerState:S,className:le(r.className,E.root,d,z),component:c,disabled:f,focusRipple:!b,focusVisibleClassName:le(E.focusVisible,y),ref:n,type:m},C,{classes:E,children:[j,a,A]}))});function NN(e){const t=It(e);return t.body===e?Tr(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function Hi(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function zm(e){return parseInt(Tr(e).getComputedStyle(e).paddingRight,10)||0}function _N(e){const n=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,r=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return n||r}function Im(e,t,n,r,o){const i=[t,n,...r];[].forEach.call(e.children,s=>{const a=i.indexOf(s)===-1,l=!_N(s);a&&l&&Hi(s,o)})}function xc(e,t){let n=-1;return e.some((r,o)=>t(r)?(n=o,!0):!1),n}function jN(e,t){const n=[],r=e.container;if(!t.disableScrollLock){if(NN(r)){const s=zy(It(r));n.push({value:r.style.paddingRight,property:"padding-right",el:r}),r.style.paddingRight=`${zm(r)+s}px`;const a=It(r).querySelectorAll(".mui-fixed");[].forEach.call(a,l=>{n.push({value:l.style.paddingRight,property:"padding-right",el:l}),l.style.paddingRight=`${zm(l)+s}px`})}let i;if(r.parentNode instanceof DocumentFragment)i=It(r).body;else{const s=r.parentElement,a=Tr(r);i=(s==null?void 0:s.nodeName)==="HTML"&&a.getComputedStyle(s).overflowY==="scroll"?s:r}n.push({value:i.style.overflow,property:"overflow",el:i},{value:i.style.overflowX,property:"overflow-x",el:i},{value:i.style.overflowY,property:"overflow-y",el:i}),i.style.overflow="hidden"}return()=>{n.forEach(({value:i,el:s,property:a})=>{i?s.style.setProperty(a,i):s.style.removeProperty(a)})}}function RN(e){const t=[];return[].forEach.call(e.children,n=>{n.getAttribute("aria-hidden")==="true"&&t.push(n)}),t}class TN{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(t,n){let r=this.modals.indexOf(t);if(r!==-1)return r;r=this.modals.length,this.modals.push(t),t.modalRef&&Hi(t.modalRef,!1);const o=RN(n);Im(n,t.mount,t.modalRef,o,!0);const i=xc(this.containers,s=>s.container===n);return i!==-1?(this.containers[i].modals.push(t),r):(this.containers.push({modals:[t],container:n,restore:null,hiddenSiblings:o}),r)}mount(t,n){const r=xc(this.containers,i=>i.modals.indexOf(t)!==-1),o=this.containers[r];o.restore||(o.restore=jN(o,n))}remove(t,n=!0){const r=this.modals.indexOf(t);if(r===-1)return r;const o=xc(this.containers,s=>s.modals.indexOf(t)!==-1),i=this.containers[o];if(i.modals.splice(i.modals.indexOf(t),1),this.modals.splice(r,1),i.modals.length===0)i.restore&&i.restore(),t.modalRef&&Hi(t.modalRef,n),Im(i.container,t.mount,t.modalRef,i.hiddenSiblings,!1),this.containers.splice(o,1);else{const s=i.modals[i.modals.length-1];s.modalRef&&Hi(s.modalRef,!1)}return r}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}const PN=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function ON(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function FN(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=r=>e.ownerDocument.querySelector(`input[type="radio"]${r}`);let n=t(`[name="${e.name}"]:checked`);return n||(n=t(`[name="${e.name}"]`)),n!==e}function $N(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||FN(e))}function AN(e){const t=[],n=[];return Array.from(e.querySelectorAll(PN)).forEach((r,o)=>{const i=ON(r);i===-1||!$N(r)||(i===0?t.push(r):n.push({documentOrder:o,tabIndex:i,node:r}))}),n.sort((r,o)=>r.tabIndex===o.tabIndex?r.documentOrder-o.documentOrder:r.tabIndex-o.tabIndex).map(r=>r.node).concat(t)}function zN(){return!0}function IN(e){const{children:t,disableAutoFocus:n=!1,disableEnforceFocus:r=!1,disableRestoreFocus:o=!1,getTabbable:i=AN,isEnabled:s=zN,open:a}=e,l=v.useRef(!1),c=v.useRef(null),d=v.useRef(null),f=v.useRef(null),p=v.useRef(null),b=v.useRef(!1),x=v.useRef(null),y=Nt(Ts(t),x),k=v.useRef(null);v.useEffect(()=>{!a||!x.current||(b.current=!n)},[n,a]),v.useEffect(()=>{if(!a||!x.current)return;const m=It(x.current);return x.current.contains(m.activeElement)||(x.current.hasAttribute("tabIndex")||x.current.setAttribute("tabIndex","-1"),b.current&&x.current.focus()),()=>{o||(f.current&&f.current.focus&&(l.current=!0,f.current.focus()),f.current=null)}},[a]),v.useEffect(()=>{if(!a||!x.current)return;const m=It(x.current),w=E=>{k.current=E,!(r||!s()||E.key!=="Tab")&&m.activeElement===x.current&&E.shiftKey&&(l.current=!0,d.current&&d.current.focus())},C=()=>{const E=x.current;if(E===null)return;if(!m.hasFocus()||!s()||l.current){l.current=!1;return}if(E.contains(m.activeElement)||r&&m.activeElement!==c.current&&m.activeElement!==d.current)return;if(m.activeElement!==p.current)p.current=null;else if(p.current!==null)return;if(!b.current)return;let j=[];if((m.activeElement===c.current||m.activeElement===d.current)&&(j=i(x.current)),j.length>0){var A,z;const T=!!((A=k.current)!=null&&A.shiftKey&&((z=k.current)==null?void 0:z.key)==="Tab"),P=j[0],I=j[j.length-1];typeof P!="string"&&typeof I!="string"&&(T?I.focus():P.focus())}else E.focus()};m.addEventListener("focusin",C),m.addEventListener("keydown",w,!0);const S=setInterval(()=>{m.activeElement&&m.activeElement.tagName==="BODY"&&C()},50);return()=>{clearInterval(S),m.removeEventListener("focusin",C),m.removeEventListener("keydown",w,!0)}},[n,r,o,s,a,i]);const g=m=>{f.current===null&&(f.current=m.relatedTarget),b.current=!0,p.current=m.target;const w=t.props.onFocus;w&&w(m)},h=m=>{f.current===null&&(f.current=m.relatedTarget),b.current=!0};return u.jsxs(v.Fragment,{children:[u.jsx("div",{tabIndex:a?0:-1,onFocus:h,ref:c,"data-testid":"sentinelStart"}),v.cloneElement(t,{ref:y,onFocus:g}),u.jsx("div",{tabIndex:a?0:-1,onFocus:h,ref:d,"data-testid":"sentinelEnd"})]})}function MN(e){return typeof e=="function"?e():e}function LN(e){return e?e.props.hasOwnProperty("in"):!1}const DN=new TN;function BN(e){const{container:t,disableEscapeKeyDown:n=!1,disableScrollLock:r=!1,manager:o=DN,closeAfterTransition:i=!1,onTransitionEnter:s,onTransitionExited:a,children:l,onClose:c,open:d,rootRef:f}=e,p=v.useRef({}),b=v.useRef(null),x=v.useRef(null),y=Nt(x,f),[k,g]=v.useState(!d),h=LN(l);let m=!0;(e["aria-hidden"]==="false"||e["aria-hidden"]===!1)&&(m=!1);const w=()=>It(b.current),C=()=>(p.current.modalRef=x.current,p.current.mount=b.current,p.current),S=()=>{o.mount(C(),{disableScrollLock:r}),x.current&&(x.current.scrollTop=0)},E=pr(()=>{const U=MN(t)||w().body;o.add(C(),U),x.current&&S()}),j=v.useCallback(()=>o.isTopModal(C()),[o]),A=pr(U=>{b.current=U,U&&(d&&j()?S():x.current&&Hi(x.current,m))}),z=v.useCallback(()=>{o.remove(C(),m)},[m,o]);v.useEffect(()=>()=>{z()},[z]),v.useEffect(()=>{d?E():(!h||!i)&&z()},[d,z,h,i,E]);const T=U=>Q=>{var F;(F=U.onKeyDown)==null||F.call(U,Q),!(Q.key!=="Escape"||Q.which===229||!j())&&(n||(Q.stopPropagation(),c&&c(Q,"escapeKeyDown")))},P=U=>Q=>{var F;(F=U.onClick)==null||F.call(U,Q),Q.target===Q.currentTarget&&c&&c(Q,"backdropClick")};return{getRootProps:(U={})=>{const Q=Iy(e);delete Q.onTransitionEnter,delete Q.onTransitionExited;const F=_({},Q,U);return _({role:"presentation"},F,{onKeyDown:T(F),ref:y})},getBackdropProps:(U={})=>{const Q=U;return _({"aria-hidden":!0},Q,{onClick:P(Q),open:d})},getTransitionProps:()=>{const U=()=>{g(!1),s&&s()},Q=()=>{g(!0),a&&a(),i&&z()};return{onEnter:_d(U,l==null?void 0:l.props.onEnter),onExited:_d(Q,l==null?void 0:l.props.onExited)}},rootRef:y,portalRef:A,isTopModal:j,exited:k,hasTransition:h}}function UN(e){return $e("MuiModal",e)}Pe("MuiModal",["root","hidden","backdrop"]);const WN=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","onTransitionEnter","onTransitionExited","open","slotProps","slots","theme"],VN=e=>{const{open:t,exited:n,classes:r}=e;return Me({root:["root",!t&&n&&"hidden"],backdrop:["backdrop"]},UN,r)},HN=ne("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.open&&n.exited&&t.hidden]}})(({theme:e,ownerState:t})=>_({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})),qN=ne(hN,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),GN=v.forwardRef(function(t,n){var r,o,i,s,a,l;const c=Le({name:"MuiModal",props:t}),{BackdropComponent:d=qN,BackdropProps:f,className:p,closeAfterTransition:b=!1,children:x,container:y,component:k,components:g={},componentsProps:h={},disableAutoFocus:m=!1,disableEnforceFocus:w=!1,disableEscapeKeyDown:C=!1,disablePortal:S=!1,disableRestoreFocus:E=!1,disableScrollLock:j=!1,hideBackdrop:A=!1,keepMounted:z=!1,onBackdropClick:T,open:P,slotProps:I,slots:M}=c,W=te(c,WN),U=_({},c,{closeAfterTransition:b,disableAutoFocus:m,disableEnforceFocus:w,disableEscapeKeyDown:C,disablePortal:S,disableRestoreFocus:E,disableScrollLock:j,hideBackdrop:A,keepMounted:z}),{getRootProps:Q,getBackdropProps:F,getTransitionProps:q,portalRef:X,isTopModal:se,exited:re,hasTransition:xe}=BN(_({},U,{rootRef:n})),ee=_({},U,{exited:re}),pe=VN(ee),ce={};if(x.props.tabIndex===void 0&&(ce.tabIndex="-1"),xe){const{onEnter:ae,onExited:he}=q();ce.onEnter=ae,ce.onExited=he}const De=(r=(o=M==null?void 0:M.root)!=null?o:g.Root)!=null?r:HN,lt=(i=(s=M==null?void 0:M.backdrop)!=null?s:g.Backdrop)!=null?i:d,je=(a=I==null?void 0:I.root)!=null?a:h.root,ut=(l=I==null?void 0:I.backdrop)!=null?l:h.backdrop,de=ni({elementType:De,externalSlotProps:je,externalForwardedProps:W,getSlotProps:Q,additionalProps:{ref:n,as:k},ownerState:ee,className:le(p,je==null?void 0:je.className,pe==null?void 0:pe.root,!ee.open&&ee.exited&&(pe==null?void 0:pe.hidden))}),Ce=ni({elementType:lt,externalSlotProps:ut,additionalProps:f,getSlotProps:ae=>F(_({},ae,{onClick:he=>{T&&T(he),ae!=null&&ae.onClick&&ae.onClick(he)}})),className:le(ut==null?void 0:ut.className,f==null?void 0:f.className,pe==null?void 0:pe.backdrop),ownerState:ee});return!z&&!P&&(!xe||re)?null:u.jsx(qE,{ref:X,container:y,disablePortal:S,children:u.jsxs(De,_({},de,{children:[!A&&d?u.jsx(lt,_({},Ce)):null,u.jsx(IN,{disableEnforceFocus:w,disableAutoFocus:m,disableRestoreFocus:E,isEnabled:se,open:P,children:v.cloneElement(x,ce)})]}))})}),KN=["disableUnderline","components","componentsProps","fullWidth","hiddenLabel","inputComponent","multiline","slotProps","slots","type"],QN=e=>{const{classes:t,disableUnderline:n}=e,o=Me({root:["root",!n&&"underline"],input:["input"]},iN,t);return _({},t,o)},XN=ne(Cu,{shouldForwardProp:e=>Cn(e)||e==="classes",name:"MuiFilledInput",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[...Su(e,t),!n.disableUnderline&&t.underline]}})(({theme:e,ownerState:t})=>{var n;const r=e.palette.mode==="light",o=r?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)",i=r?"rgba(0, 0, 0, 0.06)":"rgba(255, 255, 255, 0.09)",s=r?"rgba(0, 0, 0, 0.09)":"rgba(255, 255, 255, 0.13)",a=r?"rgba(0, 0, 0, 0.12)":"rgba(255, 255, 255, 0.12)";return _({position:"relative",backgroundColor:e.vars?e.vars.palette.FilledInput.bg:i,borderTopLeftRadius:(e.vars||e).shape.borderRadius,borderTopRightRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut}),"&:hover":{backgroundColor:e.vars?e.vars.palette.FilledInput.hoverBg:s,"@media (hover: none)":{backgroundColor:e.vars?e.vars.palette.FilledInput.bg:i}},[`&.${Mr.focused}`]:{backgroundColor:e.vars?e.vars.palette.FilledInput.bg:i},[`&.${Mr.disabled}`]:{backgroundColor:e.vars?e.vars.palette.FilledInput.disabledBg:a}},!t.disableUnderline&&{"&::after":{borderBottom:`2px solid ${(n=(e.vars||e).palette[t.color||"primary"])==null?void 0:n.main}`,left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut}),pointerEvents:"none"},[`&.${Mr.focused}:after`]:{transform:"scaleX(1) translateX(0)"},[`&.${Mr.error}`]:{"&::before, &::after":{borderBottomColor:(e.vars||e).palette.error.main}},"&::before":{borderBottom:`1px solid ${e.vars?`rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`:o}`,left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:e.transitions.create("border-bottom-color",{duration:e.transitions.duration.shorter}),pointerEvents:"none"},[`&:hover:not(.${Mr.disabled}, .${Mr.error}):before`]:{borderBottom:`1px solid ${(e.vars||e).palette.text.primary}`},[`&.${Mr.disabled}:before`]:{borderBottomStyle:"dotted"}},t.startAdornment&&{paddingLeft:12},t.endAdornment&&{paddingRight:12},t.multiline&&_({padding:"25px 12px 8px"},t.size==="small"&&{paddingTop:21,paddingBottom:4},t.hiddenLabel&&{paddingTop:16,paddingBottom:17},t.hiddenLabel&&t.size==="small"&&{paddingTop:8,paddingBottom:9}))}),YN=ne(Eu,{name:"MuiFilledInput",slot:"Input",overridesResolver:ku})(({theme:e,ownerState:t})=>_({paddingTop:25,paddingRight:12,paddingBottom:8,paddingLeft:12},!e.vars&&{"&:-webkit-autofill":{WebkitBoxShadow:e.palette.mode==="light"?null:"0 0 0 100px #266798 inset",WebkitTextFillColor:e.palette.mode==="light"?null:"#fff",caretColor:e.palette.mode==="light"?null:"#fff",borderTopLeftRadius:"inherit",borderTopRightRadius:"inherit"}},e.vars&&{"&:-webkit-autofill":{borderTopLeftRadius:"inherit",borderTopRightRadius:"inherit"},[e.getColorSchemeSelector("dark")]:{"&:-webkit-autofill":{WebkitBoxShadow:"0 0 0 100px #266798 inset",WebkitTextFillColor:"#fff",caretColor:"#fff"}}},t.size==="small"&&{paddingTop:21,paddingBottom:4},t.hiddenLabel&&{paddingTop:16,paddingBottom:17},t.startAdornment&&{paddingLeft:0},t.endAdornment&&{paddingRight:0},t.hiddenLabel&&t.size==="small"&&{paddingTop:8,paddingBottom:9},t.multiline&&{paddingTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0})),bp=v.forwardRef(function(t,n){var r,o,i,s;const a=Le({props:t,name:"MuiFilledInput"}),{components:l={},componentsProps:c,fullWidth:d=!1,inputComponent:f="input",multiline:p=!1,slotProps:b,slots:x={},type:y="text"}=a,k=te(a,KN),g=_({},a,{fullWidth:d,inputComponent:f,multiline:p,type:y}),h=QN(a),m={root:{ownerState:g},input:{ownerState:g}},w=b??c?Qt(m,b??c):m,C=(r=(o=x.root)!=null?o:l.Root)!=null?r:XN,S=(i=(s=x.input)!=null?s:l.Input)!=null?i:YN;return u.jsx(vp,_({slots:{root:C,input:S},componentsProps:w,fullWidth:d,inputComponent:f,multiline:p,ref:n,type:y},k,{classes:h}))});bp.muiName="Input";function JN(e){return $e("MuiFormControl",e)}Pe("MuiFormControl",["root","marginNone","marginNormal","marginDense","fullWidth","disabled"]);const ZN=["children","className","color","component","disabled","error","focused","fullWidth","hiddenLabel","margin","required","size","variant"],e_=e=>{const{classes:t,margin:n,fullWidth:r}=e,o={root:["root",n!=="none"&&`margin${oe(n)}`,r&&"fullWidth"]};return Me(o,JN,t)},t_=ne("div",{name:"MuiFormControl",slot:"Root",overridesResolver:({ownerState:e},t)=>_({},t.root,t[`margin${oe(e.margin)}`],e.fullWidth&&t.fullWidth)})(({ownerState:e})=>_({display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top"},e.margin==="normal"&&{marginTop:16,marginBottom:8},e.margin==="dense"&&{marginTop:8,marginBottom:4},e.fullWidth&&{width:"100%"})),ev=v.forwardRef(function(t,n){const r=Le({props:t,name:"MuiFormControl"}),{children:o,className:i,color:s="primary",component:a="div",disabled:l=!1,error:c=!1,focused:d,fullWidth:f=!1,hiddenLabel:p=!1,margin:b="none",required:x=!1,size:y="medium",variant:k="outlined"}=r,g=te(r,ZN),h=_({},r,{color:s,component:a,disabled:l,error:c,fullWidth:f,hiddenLabel:p,margin:b,required:x,size:y,variant:k}),m=e_(h),[w,C]=v.useState(()=>{let I=!1;return o&&v.Children.forEach(o,M=>{if(!Sa(M,["Input","Select"]))return;const W=Sa(M,["Select"])?M.props.input:M;W&&JE(W.props)&&(I=!0)}),I}),[S,E]=v.useState(()=>{let I=!1;return o&&v.Children.forEach(o,M=>{Sa(M,["Input","Select"])&&(cl(M.props,!0)||cl(M.props.inputProps,!0))&&(I=!0)}),I}),[j,A]=v.useState(!1);l&&j&&A(!1);const z=d!==void 0&&!l?d:j;let T;const P=v.useMemo(()=>({adornedStart:w,setAdornedStart:C,color:s,disabled:l,error:c,filled:S,focused:z,fullWidth:f,hiddenLabel:p,size:y,onBlur:()=>{A(!1)},onEmpty:()=>{E(!1)},onFilled:()=>{E(!0)},onFocus:()=>{A(!0)},registerEffect:T,required:x,variant:k}),[w,s,l,c,S,z,f,p,T,x,y,k]);return u.jsx(wu.Provider,{value:P,children:u.jsx(t_,_({as:a,ownerState:h,className:le(m.root,i),ref:n},g,{children:o}))})});function n_(e){return $e("MuiFormHelperText",e)}const Mm=Pe("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]);var Lm;const r_=["children","className","component","disabled","error","filled","focused","margin","required","variant"],o_=e=>{const{classes:t,contained:n,size:r,disabled:o,error:i,filled:s,focused:a,required:l}=e,c={root:["root",o&&"disabled",i&&"error",r&&`size${oe(r)}`,n&&"contained",a&&"focused",s&&"filled",l&&"required"]};return Me(c,n_,t)},i_=ne("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.size&&t[`size${oe(n.size)}`],n.contained&&t.contained,n.filled&&t.filled]}})(({theme:e,ownerState:t})=>_({color:(e.vars||e).palette.text.secondary},e.typography.caption,{textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0,[`&.${Mm.disabled}`]:{color:(e.vars||e).palette.text.disabled},[`&.${Mm.error}`]:{color:(e.vars||e).palette.error.main}},t.size==="small"&&{marginTop:4},t.contained&&{marginLeft:14,marginRight:14})),tv=v.forwardRef(function(t,n){const r=Le({props:t,name:"MuiFormHelperText"}),{children:o,className:i,component:s="p"}=r,a=te(r,r_),l=co(),c=ci({props:r,muiFormControl:l,states:["variant","size","disabled","error","filled","focused","required"]}),d=_({},r,{component:s,contained:c.variant==="filled"||c.variant==="outlined",variant:c.variant,size:c.size,disabled:c.disabled,error:c.error,filled:c.filled,focused:c.focused,required:c.required}),f=o_(d);return u.jsx(i_,_({as:s,ownerState:d,className:le(f.root,i),ref:n},a,{children:o===" "?Lm||(Lm=u.jsx("span",{className:"notranslate",children:"​"})):o}))});function s_(e){return $e("MuiFormLabel",e)}const qi=Pe("MuiFormLabel",["root","colorSecondary","focused","disabled","error","filled","required","asterisk"]),a_=["children","className","color","component","disabled","error","filled","focused","required"],l_=e=>{const{classes:t,color:n,focused:r,disabled:o,error:i,filled:s,required:a}=e,l={root:["root",`color${oe(n)}`,o&&"disabled",i&&"error",s&&"filled",r&&"focused",a&&"required"],asterisk:["asterisk",i&&"error"]};return Me(l,s_,t)},u_=ne("label",{name:"MuiFormLabel",slot:"Root",overridesResolver:({ownerState:e},t)=>_({},t.root,e.color==="secondary"&&t.colorSecondary,e.filled&&t.filled)})(({theme:e,ownerState:t})=>_({color:(e.vars||e).palette.text.secondary},e.typography.body1,{lineHeight:"1.4375em",padding:0,position:"relative",[`&.${qi.focused}`]:{color:(e.vars||e).palette[t.color].main},[`&.${qi.disabled}`]:{color:(e.vars||e).palette.text.disabled},[`&.${qi.error}`]:{color:(e.vars||e).palette.error.main}})),c_=ne("span",{name:"MuiFormLabel",slot:"Asterisk",overridesResolver:(e,t)=>t.asterisk})(({theme:e})=>({[`&.${qi.error}`]:{color:(e.vars||e).palette.error.main}})),d_=v.forwardRef(function(t,n){const r=Le({props:t,name:"MuiFormLabel"}),{children:o,className:i,component:s="label"}=r,a=te(r,a_),l=co(),c=ci({props:r,muiFormControl:l,states:["color","required","focused","disabled","error","filled"]}),d=_({},r,{color:c.color||"primary",component:s,disabled:c.disabled,error:c.error,filled:c.filled,focused:c.focused,required:c.required}),f=l_(d);return u.jsxs(u_,_({as:s,ownerState:d,className:le(f.root,i),ref:n},a,{children:[o,c.required&&u.jsxs(c_,{ownerState:d,"aria-hidden":!0,className:f.asterisk,children:[" ","*"]})]}))}),f_=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function Ad(e){return`scale(${e}, ${e**2})`}const p_={entering:{opacity:1,transform:Ad(1)},entered:{opacity:1,transform:"none"}},yc=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),nv=v.forwardRef(function(t,n){const{addEndListener:r,appear:o=!0,children:i,easing:s,in:a,onEnter:l,onEntered:c,onEntering:d,onExit:f,onExited:p,onExiting:b,style:x,timeout:y="auto",TransitionComponent:k=Mn}=t,g=te(t,f_),h=$y(),m=v.useRef(),w=qy(),C=v.useRef(null),S=Nt(C,Ts(i),n),E=W=>U=>{if(W){const Q=C.current;U===void 0?W(Q):W(Q,U)}},j=E(d),A=E((W,U)=>{Yy(W);const{duration:Q,delay:F,easing:q}=ul({style:x,timeout:y,easing:s},{mode:"enter"});let X;y==="auto"?(X=w.transitions.getAutoHeightDuration(W.clientHeight),m.current=X):X=Q,W.style.transition=[w.transitions.create("opacity",{duration:X,delay:F}),w.transitions.create("transform",{duration:yc?X:X*.666,delay:F,easing:q})].join(","),l&&l(W,U)}),z=E(c),T=E(b),P=E(W=>{const{duration:U,delay:Q,easing:F}=ul({style:x,timeout:y,easing:s},{mode:"exit"});let q;y==="auto"?(q=w.transitions.getAutoHeightDuration(W.clientHeight),m.current=q):q=U,W.style.transition=[w.transitions.create("opacity",{duration:q,delay:Q}),w.transitions.create("transform",{duration:yc?q:q*.666,delay:yc?Q:Q||q*.333,easing:F})].join(","),W.style.opacity=0,W.style.transform=Ad(.75),f&&f(W)}),I=E(p),M=W=>{y==="auto"&&h.start(m.current||0,W),r&&r(C.current,W)};return u.jsx(k,_({appear:o,in:a,nodeRef:C,onEnter:A,onEntered:z,onEntering:j,onExit:P,onExited:I,onExiting:T,addEndListener:M,timeout:y==="auto"?null:y},g,{children:(W,U)=>v.cloneElement(i,_({style:_({opacity:0,transform:Ad(.75),visibility:W==="exited"&&!a?"hidden":void 0},p_[W],x,i.props.style),ref:S},U))}))});nv.muiSupportAuto=!0;const h_=["disableUnderline","components","componentsProps","fullWidth","inputComponent","multiline","slotProps","slots","type"],m_=e=>{const{classes:t,disableUnderline:n}=e,o=Me({root:["root",!n&&"underline"],input:["input"]},rN,t);return _({},t,o)},g_=ne(Cu,{shouldForwardProp:e=>Cn(e)||e==="classes",name:"MuiInput",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[...Su(e,t),!n.disableUnderline&&t.underline]}})(({theme:e,ownerState:t})=>{let r=e.palette.mode==="light"?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)";return e.vars&&(r=`rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`),_({position:"relative"},t.formControl&&{"label + &":{marginTop:16}},!t.disableUnderline&&{"&::after":{borderBottom:`2px solid ${(e.vars||e).palette[t.color].main}`,left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut}),pointerEvents:"none"},[`&.${Ci.focused}:after`]:{transform:"scaleX(1) translateX(0)"},[`&.${Ci.error}`]:{"&::before, &::after":{borderBottomColor:(e.vars||e).palette.error.main}},"&::before":{borderBottom:`1px solid ${r}`,left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:e.transitions.create("border-bottom-color",{duration:e.transitions.duration.shorter}),pointerEvents:"none"},[`&:hover:not(.${Ci.disabled}, .${Ci.error}):before`]:{borderBottom:`2px solid ${(e.vars||e).palette.text.primary}`,"@media (hover: none)":{borderBottom:`1px solid ${r}`}},[`&.${Ci.disabled}:before`]:{borderBottomStyle:"dotted"}})}),x_=ne(Eu,{name:"MuiInput",slot:"Input",overridesResolver:ku})({}),wp=v.forwardRef(function(t,n){var r,o,i,s;const a=Le({props:t,name:"MuiInput"}),{disableUnderline:l,components:c={},componentsProps:d,fullWidth:f=!1,inputComponent:p="input",multiline:b=!1,slotProps:x,slots:y={},type:k="text"}=a,g=te(a,h_),h=m_(a),w={root:{ownerState:{disableUnderline:l}}},C=x??d?Qt(x??d,w):w,S=(r=(o=y.root)!=null?o:c.Root)!=null?r:g_,E=(i=(s=y.input)!=null?s:c.Input)!=null?i:x_;return u.jsx(vp,_({slots:{root:S,input:E},slotProps:C,fullWidth:f,inputComponent:p,multiline:b,ref:n,type:k},g,{classes:h}))});wp.muiName="Input";function y_(e){return $e("MuiInputAdornment",e)}const Dm=Pe("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var Bm;const v_=["children","className","component","disablePointerEvents","disableTypography","position","variant"],b_=(e,t)=>{const{ownerState:n}=e;return[t.root,t[`position${oe(n.position)}`],n.disablePointerEvents===!0&&t.disablePointerEvents,t[n.variant]]},w_=e=>{const{classes:t,disablePointerEvents:n,hiddenLabel:r,position:o,size:i,variant:s}=e,a={root:["root",n&&"disablePointerEvents",o&&`position${oe(o)}`,s,r&&"hiddenLabel",i&&`size${oe(i)}`]};return Me(a,y_,t)},S_=ne("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:b_})(({theme:e,ownerState:t})=>_({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(e.vars||e).palette.action.active},t.variant==="filled"&&{[`&.${Dm.positionStart}&:not(.${Dm.hiddenLabel})`]:{marginTop:16}},t.position==="start"&&{marginRight:8},t.position==="end"&&{marginLeft:8},t.disablePointerEvents===!0&&{pointerEvents:"none"})),k_=v.forwardRef(function(t,n){const r=Le({props:t,name:"MuiInputAdornment"}),{children:o,className:i,component:s="div",disablePointerEvents:a=!1,disableTypography:l=!1,position:c,variant:d}=r,f=te(r,v_),p=co()||{};let b=d;d&&p.variant,p&&!b&&(b=p.variant);const x=_({},r,{hiddenLabel:p.hiddenLabel,size:p.size,disablePointerEvents:a,position:c,variant:b}),y=w_(x);return u.jsx(wu.Provider,{value:null,children:u.jsx(S_,_({as:s,ownerState:x,className:le(y.root,i),ref:n},f,{children:typeof o=="string"&&!l?u.jsx(VE,{color:"text.secondary",children:o}):u.jsxs(v.Fragment,{children:[c==="start"?Bm||(Bm=u.jsx("span",{className:"notranslate",children:"​"})):null,o]})}))})});function C_(e){return $e("MuiInputLabel",e)}Pe("MuiInputLabel",["root","focused","disabled","error","required","asterisk","formControl","sizeSmall","shrink","animated","standard","filled","outlined"]);const E_=["disableAnimation","margin","shrink","variant","className"],N_=e=>{const{classes:t,formControl:n,size:r,shrink:o,disableAnimation:i,variant:s,required:a}=e,l={root:["root",n&&"formControl",!i&&"animated",o&&"shrink",r&&r!=="normal"&&`size${oe(r)}`,s],asterisk:[a&&"asterisk"]},c=Me(l,C_,t);return _({},t,c)},__=ne(d_,{shouldForwardProp:e=>Cn(e)||e==="classes",name:"MuiInputLabel",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[{[`& .${qi.asterisk}`]:t.asterisk},t.root,n.formControl&&t.formControl,n.size==="small"&&t.sizeSmall,n.shrink&&t.shrink,!n.disableAnimation&&t.animated,n.focused&&t.focused,t[n.variant]]}})(({theme:e,ownerState:t})=>_({display:"block",transformOrigin:"top left",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%"},t.formControl&&{position:"absolute",left:0,top:0,transform:"translate(0, 20px) scale(1)"},t.size==="small"&&{transform:"translate(0, 17px) scale(1)"},t.shrink&&{transform:"translate(0, -1.5px) scale(0.75)",transformOrigin:"top left",maxWidth:"133%"},!t.disableAnimation&&{transition:e.transitions.create(["color","transform","max-width"],{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut})},t.variant==="filled"&&_({zIndex:1,pointerEvents:"none",transform:"translate(12px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},t.size==="small"&&{transform:"translate(12px, 13px) scale(1)"},t.shrink&&_({userSelect:"none",pointerEvents:"auto",transform:"translate(12px, 7px) scale(0.75)",maxWidth:"calc(133% - 24px)"},t.size==="small"&&{transform:"translate(12px, 4px) scale(0.75)"})),t.variant==="outlined"&&_({zIndex:1,pointerEvents:"none",transform:"translate(14px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},t.size==="small"&&{transform:"translate(14px, 9px) scale(1)"},t.shrink&&{userSelect:"none",pointerEvents:"auto",maxWidth:"calc(133% - 32px)",transform:"translate(14px, -9px) scale(0.75)"}))),rv=v.forwardRef(function(t,n){const r=Le({name:"MuiInputLabel",props:t}),{disableAnimation:o=!1,shrink:i,className:s}=r,a=te(r,E_),l=co();let c=i;typeof c>"u"&&l&&(c=l.filled||l.focused||l.adornedStart);const d=ci({props:r,muiFormControl:l,states:["size","variant","required","focused"]}),f=_({},r,{disableAnimation:o,formControl:l,shrink:c,size:d.size,variant:d.variant,required:d.required,focused:d.focused}),p=N_(f);return u.jsx(__,_({"data-shrink":c,ownerState:f,ref:n,className:le(p.root,s)},a,{classes:p}))}),j_=v.createContext({});function R_(e){return $e("MuiList",e)}Pe("MuiList",["root","padding","dense","subheader"]);const T_=["children","className","component","dense","disablePadding","subheader"],P_=e=>{const{classes:t,disablePadding:n,dense:r,subheader:o}=e;return Me({root:["root",!n&&"padding",r&&"dense",o&&"subheader"]},R_,t)},O_=ne("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.disablePadding&&t.padding,n.dense&&t.dense,n.subheader&&t.subheader]}})(({ownerState:e})=>_({listStyle:"none",margin:0,padding:0,position:"relative"},!e.disablePadding&&{paddingTop:8,paddingBottom:8},e.subheader&&{paddingTop:0})),F_=v.forwardRef(function(t,n){const r=Le({props:t,name:"MuiList"}),{children:o,className:i,component:s="ul",dense:a=!1,disablePadding:l=!1,subheader:c}=r,d=te(r,T_),f=v.useMemo(()=>({dense:a}),[a]),p=_({},r,{component:s,dense:a,disablePadding:l}),b=P_(p);return u.jsx(j_.Provider,{value:f,children:u.jsxs(O_,_({as:s,className:le(b.root,i),ref:n,ownerState:p},d,{children:[c,o]}))})}),$_=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function vc(e,t,n){return e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:n?null:e.firstChild}function Um(e,t,n){return e===t?n?e.firstChild:e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:n?null:e.lastChild}function ov(e,t){if(t===void 0)return!0;let n=e.innerText;return n===void 0&&(n=e.textContent),n=n.trim().toLowerCase(),n.length===0?!1:t.repeating?n[0]===t.keys[0]:n.indexOf(t.keys.join(""))===0}function Ei(e,t,n,r,o,i){let s=!1,a=o(e,t,t?n:!1);for(;a;){if(a===e.firstChild){if(s)return!1;s=!0}const l=r?!1:a.disabled||a.getAttribute("aria-disabled")==="true";if(!a.hasAttribute("tabindex")||!ov(a,i)||l)a=o(e,a,n);else return a.focus(),!0}return!1}const A_=v.forwardRef(function(t,n){const{actions:r,autoFocus:o=!1,autoFocusItem:i=!1,children:s,className:a,disabledItemsFocusable:l=!1,disableListWrap:c=!1,onKeyDown:d,variant:f="selectedMenu"}=t,p=te(t,$_),b=v.useRef(null),x=v.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});Rr(()=>{o&&b.current.focus()},[o]),v.useImperativeHandle(r,()=>({adjustStyleForScrollbar:(m,{direction:w})=>{const C=!b.current.style.width;if(m.clientHeight<b.current.clientHeight&&C){const S=`${zy(It(m))}px`;b.current.style[w==="rtl"?"paddingLeft":"paddingRight"]=S,b.current.style.width=`calc(100% + ${S})`}return b.current}}),[]);const y=m=>{const w=b.current,C=m.key,S=It(w).activeElement;if(C==="ArrowDown")m.preventDefault(),Ei(w,S,c,l,vc);else if(C==="ArrowUp")m.preventDefault(),Ei(w,S,c,l,Um);else if(C==="Home")m.preventDefault(),Ei(w,null,c,l,vc);else if(C==="End")m.preventDefault(),Ei(w,null,c,l,Um);else if(C.length===1){const E=x.current,j=C.toLowerCase(),A=performance.now();E.keys.length>0&&(A-E.lastTime>500?(E.keys=[],E.repeating=!0,E.previousKeyMatched=!0):E.repeating&&j!==E.keys[0]&&(E.repeating=!1)),E.lastTime=A,E.keys.push(j);const z=S&&!E.repeating&&ov(S,E);E.previousKeyMatched&&(z||Ei(w,S,!1,l,vc,E))?m.preventDefault():E.previousKeyMatched=!1}d&&d(m)},k=Nt(b,n);let g=-1;v.Children.forEach(s,(m,w)=>{if(!v.isValidElement(m)){g===w&&(g+=1,g>=s.length&&(g=-1));return}m.props.disabled||(f==="selectedMenu"&&m.props.selected||g===-1)&&(g=w),g===w&&(m.props.disabled||m.props.muiSkipListHighlight||m.type.muiSkipListHighlight)&&(g+=1,g>=s.length&&(g=-1))});const h=v.Children.map(s,(m,w)=>{if(w===g){const C={};return i&&(C.autoFocus=!0),m.props.tabIndex===void 0&&f==="selectedMenu"&&(C.tabIndex=0),v.cloneElement(m,C)}return m});return u.jsx(F_,_({role:"menu",ref:k,className:a,onKeyDown:y,tabIndex:o?0:-1},p,{children:h}))});function z_(e){return $e("MuiPopover",e)}Pe("MuiPopover",["root","paper"]);const I_=["onEntering"],M_=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps","disableScrollLock"],L_=["slotProps"];function Wm(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.height/2:t==="bottom"&&(n=e.height),n}function Vm(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.width/2:t==="right"&&(n=e.width),n}function Hm(e){return[e.horizontal,e.vertical].map(t=>typeof t=="number"?`${t}px`:t).join(" ")}function bc(e){return typeof e=="function"?e():e}const D_=e=>{const{classes:t}=e;return Me({root:["root"],paper:["paper"]},z_,t)},B_=ne(GN,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),iv=ne(xE,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),U_=v.forwardRef(function(t,n){var r,o,i;const s=Le({props:t,name:"MuiPopover"}),{action:a,anchorEl:l,anchorOrigin:c={vertical:"top",horizontal:"left"},anchorPosition:d,anchorReference:f="anchorEl",children:p,className:b,container:x,elevation:y=8,marginThreshold:k=16,open:g,PaperProps:h={},slots:m,slotProps:w,transformOrigin:C={vertical:"top",horizontal:"left"},TransitionComponent:S=nv,transitionDuration:E="auto",TransitionProps:{onEntering:j}={},disableScrollLock:A=!1}=s,z=te(s.TransitionProps,I_),T=te(s,M_),P=(r=w==null?void 0:w.paper)!=null?r:h,I=v.useRef(),M=Nt(I,P.ref),W=_({},s,{anchorOrigin:c,anchorReference:f,elevation:y,marginThreshold:k,externalPaperSlotProps:P,transformOrigin:C,TransitionComponent:S,transitionDuration:E,TransitionProps:z}),U=D_(W),Q=v.useCallback(()=>{if(f==="anchorPosition")return d;const ae=bc(l),Ee=(ae&&ae.nodeType===1?ae:It(I.current).body).getBoundingClientRect();return{top:Ee.top+Wm(Ee,c.vertical),left:Ee.left+Vm(Ee,c.horizontal)}},[l,c.horizontal,c.vertical,d,f]),F=v.useCallback(ae=>({vertical:Wm(ae,C.vertical),horizontal:Vm(ae,C.horizontal)}),[C.horizontal,C.vertical]),q=v.useCallback(ae=>{const he={width:ae.offsetWidth,height:ae.offsetHeight},Ee=F(he);if(f==="none")return{top:null,left:null,transformOrigin:Hm(Ee)};const hn=Q();let wt=hn.top-Ee.vertical,Rt=hn.left-Ee.horizontal;const Bt=wt+he.height,Ut=Rt+he.width,Ne=Tr(bc(l)),N=Ne.innerHeight-k,R=Ne.innerWidth-k;if(k!==null&&wt<k){const O=wt-k;wt-=O,Ee.vertical+=O}else if(k!==null&&Bt>N){const O=Bt-N;wt-=O,Ee.vertical+=O}if(k!==null&&Rt<k){const O=Rt-k;Rt-=O,Ee.horizontal+=O}else if(Ut>R){const O=Ut-R;Rt-=O,Ee.horizontal+=O}return{top:`${Math.round(wt)}px`,left:`${Math.round(Rt)}px`,transformOrigin:Hm(Ee)}},[l,f,Q,F,k]),[X,se]=v.useState(g),re=v.useCallback(()=>{const ae=I.current;if(!ae)return;const he=q(ae);he.top!==null&&(ae.style.top=he.top),he.left!==null&&(ae.style.left=he.left),ae.style.transformOrigin=he.transformOrigin,se(!0)},[q]);v.useEffect(()=>(A&&window.addEventListener("scroll",re),()=>window.removeEventListener("scroll",re)),[l,A,re]);const xe=(ae,he)=>{j&&j(ae,he),re()},ee=()=>{se(!1)};v.useEffect(()=>{g&&re()}),v.useImperativeHandle(a,()=>g?{updatePosition:()=>{re()}}:null,[g,re]),v.useEffect(()=>{if(!g)return;const ae=dp(()=>{re()}),he=Tr(l);return he.addEventListener("resize",ae),()=>{ae.clear(),he.removeEventListener("resize",ae)}},[l,g,re]);let pe=E;E==="auto"&&!S.muiSupportAuto&&(pe=void 0);const ce=x||(l?It(bc(l)).body:void 0),De=(o=m==null?void 0:m.root)!=null?o:B_,lt=(i=m==null?void 0:m.paper)!=null?i:iv,je=ni({elementType:lt,externalSlotProps:_({},P,{style:X?P.style:_({},P.style,{opacity:0})}),additionalProps:{elevation:y,ref:M},ownerState:W,className:le(U.paper,P==null?void 0:P.className)}),ut=ni({elementType:De,externalSlotProps:(w==null?void 0:w.root)||{},externalForwardedProps:T,additionalProps:{ref:n,slotProps:{backdrop:{invisible:!0}},container:ce,open:g},ownerState:W,className:le(U.root,b)}),{slotProps:de}=ut,Ce=te(ut,L_);return u.jsx(De,_({},Ce,!sl(De)&&{slotProps:de,disableScrollLock:A},{children:u.jsx(S,_({appear:!0,in:g,onEntering:xe,onExited:ee,timeout:pe},z,{children:u.jsx(lt,_({},je,{children:p}))}))}))});function W_(e){return $e("MuiMenu",e)}Pe("MuiMenu",["root","paper","list"]);const V_=["onEntering"],H_=["autoFocus","children","className","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant","slots","slotProps"],q_={vertical:"top",horizontal:"right"},G_={vertical:"top",horizontal:"left"},K_=e=>{const{classes:t}=e;return Me({root:["root"],paper:["paper"],list:["list"]},W_,t)},Q_=ne(U_,{shouldForwardProp:e=>Cn(e)||e==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(e,t)=>t.root})({}),X_=ne(iv,{name:"MuiMenu",slot:"Paper",overridesResolver:(e,t)=>t.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),Y_=ne(A_,{name:"MuiMenu",slot:"List",overridesResolver:(e,t)=>t.list})({outline:0}),J_=v.forwardRef(function(t,n){var r,o;const i=Le({props:t,name:"MuiMenu"}),{autoFocus:s=!0,children:a,className:l,disableAutoFocusItem:c=!1,MenuListProps:d={},onClose:f,open:p,PaperProps:b={},PopoverClasses:x,transitionDuration:y="auto",TransitionProps:{onEntering:k}={},variant:g="selectedMenu",slots:h={},slotProps:m={}}=i,w=te(i.TransitionProps,V_),C=te(i,H_),S=Hk(),E=_({},i,{autoFocus:s,disableAutoFocusItem:c,MenuListProps:d,onEntering:k,PaperProps:b,transitionDuration:y,TransitionProps:w,variant:g}),j=K_(E),A=s&&!c&&p,z=v.useRef(null),T=(F,q)=>{z.current&&z.current.adjustStyleForScrollbar(F,{direction:S?"rtl":"ltr"}),k&&k(F,q)},P=F=>{F.key==="Tab"&&(F.preventDefault(),f&&f(F,"tabKeyDown"))};let I=-1;v.Children.map(a,(F,q)=>{v.isValidElement(F)&&(F.props.disabled||(g==="selectedMenu"&&F.props.selected||I===-1)&&(I=q))});const M=(r=h.paper)!=null?r:X_,W=(o=m.paper)!=null?o:b,U=ni({elementType:h.root,externalSlotProps:m.root,ownerState:E,className:[j.root,l]}),Q=ni({elementType:M,externalSlotProps:W,ownerState:E,className:j.paper});return u.jsx(Q_,_({onClose:f,anchorOrigin:{vertical:"bottom",horizontal:S?"right":"left"},transformOrigin:S?q_:G_,slots:{paper:M,root:h.root},slotProps:{root:U,paper:Q},open:p,ref:n,transitionDuration:y,TransitionProps:_({onEntering:T},w),ownerState:E},C,{classes:x,children:u.jsx(Y_,_({onKeyDown:P,actions:z,autoFocus:s&&(I===-1||c),autoFocusItem:A,variant:g},d,{className:le(j.list,d.className),children:a}))}))});function Z_(e){return $e("MuiNativeSelect",e)}const Sp=Pe("MuiNativeSelect",["root","select","multiple","filled","outlined","standard","disabled","icon","iconOpen","iconFilled","iconOutlined","iconStandard","nativeInput","error"]),ej=["className","disabled","error","IconComponent","inputRef","variant"],tj=e=>{const{classes:t,variant:n,disabled:r,multiple:o,open:i,error:s}=e,a={select:["select",n,r&&"disabled",o&&"multiple",s&&"error"],icon:["icon",`icon${oe(n)}`,i&&"iconOpen",r&&"disabled"]};return Me(a,Z_,t)},sv=({ownerState:e,theme:t})=>_({MozAppearance:"none",WebkitAppearance:"none",userSelect:"none",borderRadius:0,cursor:"pointer","&:focus":_({},t.vars?{backgroundColor:`rgba(${t.vars.palette.common.onBackgroundChannel} / 0.05)`}:{backgroundColor:t.palette.mode==="light"?"rgba(0, 0, 0, 0.05)":"rgba(255, 255, 255, 0.05)"},{borderRadius:0}),"&::-ms-expand":{display:"none"},[`&.${Sp.disabled}`]:{cursor:"default"},"&[multiple]":{height:"auto"},"&:not([multiple]) option, &:not([multiple]) optgroup":{backgroundColor:(t.vars||t).palette.background.paper},"&&&":{paddingRight:24,minWidth:16}},e.variant==="filled"&&{"&&&":{paddingRight:32}},e.variant==="outlined"&&{borderRadius:(t.vars||t).shape.borderRadius,"&:focus":{borderRadius:(t.vars||t).shape.borderRadius},"&&&":{paddingRight:32}}),nj=ne("select",{name:"MuiNativeSelect",slot:"Select",shouldForwardProp:Cn,overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.select,t[n.variant],n.error&&t.error,{[`&.${Sp.multiple}`]:t.multiple}]}})(sv),av=({ownerState:e,theme:t})=>_({position:"absolute",right:0,top:"calc(50% - .5em)",pointerEvents:"none",color:(t.vars||t).palette.action.active,[`&.${Sp.disabled}`]:{color:(t.vars||t).palette.action.disabled}},e.open&&{transform:"rotate(180deg)"},e.variant==="filled"&&{right:7},e.variant==="outlined"&&{right:7}),rj=ne("svg",{name:"MuiNativeSelect",slot:"Icon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.icon,n.variant&&t[`icon${oe(n.variant)}`],n.open&&t.iconOpen]}})(av),oj=v.forwardRef(function(t,n){const{className:r,disabled:o,error:i,IconComponent:s,inputRef:a,variant:l="standard"}=t,c=te(t,ej),d=_({},t,{disabled:o,variant:l,error:i}),f=tj(d);return u.jsxs(v.Fragment,{children:[u.jsx(nj,_({ownerState:d,className:le(f.select,r),disabled:o,ref:a||n},c)),t.multiple?null:u.jsx(rj,{as:s,ownerState:d,className:f.icon})]})});var qm;const ij=["children","classes","className","label","notched"],sj=ne("fieldset",{shouldForwardProp:Cn})({textAlign:"left",position:"absolute",bottom:0,right:0,top:-5,left:0,margin:0,padding:"0 8px",pointerEvents:"none",borderRadius:"inherit",borderStyle:"solid",borderWidth:1,overflow:"hidden",minWidth:"0%"}),aj=ne("legend",{shouldForwardProp:Cn})(({ownerState:e,theme:t})=>_({float:"unset",width:"auto",overflow:"hidden"},!e.withLabel&&{padding:0,lineHeight:"11px",transition:t.transitions.create("width",{duration:150,easing:t.transitions.easing.easeOut})},e.withLabel&&_({display:"block",padding:0,height:11,fontSize:"0.75em",visibility:"hidden",maxWidth:.01,transition:t.transitions.create("max-width",{duration:50,easing:t.transitions.easing.easeOut}),whiteSpace:"nowrap","& > span":{paddingLeft:5,paddingRight:5,display:"inline-block",opacity:0,visibility:"visible"}},e.notched&&{maxWidth:"100%",transition:t.transitions.create("max-width",{duration:100,easing:t.transitions.easing.easeOut,delay:50})})));function lj(e){const{className:t,label:n,notched:r}=e,o=te(e,ij),i=n!=null&&n!=="",s=_({},e,{notched:r,withLabel:i});return u.jsx(sj,_({"aria-hidden":!0,className:t,ownerState:s},o,{children:u.jsx(aj,{ownerState:s,children:i?u.jsx("span",{children:n}):qm||(qm=u.jsx("span",{className:"notranslate",children:"​"}))})}))}const uj=["components","fullWidth","inputComponent","label","multiline","notched","slots","type"],cj=e=>{const{classes:t}=e,r=Me({root:["root"],notchedOutline:["notchedOutline"],input:["input"]},oN,t);return _({},t,r)},dj=ne(Cu,{shouldForwardProp:e=>Cn(e)||e==="classes",name:"MuiOutlinedInput",slot:"Root",overridesResolver:Su})(({theme:e,ownerState:t})=>{const n=e.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)";return _({position:"relative",borderRadius:(e.vars||e).shape.borderRadius,[`&:hover .${ir.notchedOutline}`]:{borderColor:(e.vars||e).palette.text.primary},"@media (hover: none)":{[`&:hover .${ir.notchedOutline}`]:{borderColor:e.vars?`rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`:n}},[`&.${ir.focused} .${ir.notchedOutline}`]:{borderColor:(e.vars||e).palette[t.color].main,borderWidth:2},[`&.${ir.error} .${ir.notchedOutline}`]:{borderColor:(e.vars||e).palette.error.main},[`&.${ir.disabled} .${ir.notchedOutline}`]:{borderColor:(e.vars||e).palette.action.disabled}},t.startAdornment&&{paddingLeft:14},t.endAdornment&&{paddingRight:14},t.multiline&&_({padding:"16.5px 14px"},t.size==="small"&&{padding:"8.5px 14px"}))}),fj=ne(lj,{name:"MuiOutlinedInput",slot:"NotchedOutline",overridesResolver:(e,t)=>t.notchedOutline})(({theme:e})=>{const t=e.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)";return{borderColor:e.vars?`rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`:t}}),pj=ne(Eu,{name:"MuiOutlinedInput",slot:"Input",overridesResolver:ku})(({theme:e,ownerState:t})=>_({padding:"16.5px 14px"},!e.vars&&{"&:-webkit-autofill":{WebkitBoxShadow:e.palette.mode==="light"?null:"0 0 0 100px #266798 inset",WebkitTextFillColor:e.palette.mode==="light"?null:"#fff",caretColor:e.palette.mode==="light"?null:"#fff",borderRadius:"inherit"}},e.vars&&{"&:-webkit-autofill":{borderRadius:"inherit"},[e.getColorSchemeSelector("dark")]:{"&:-webkit-autofill":{WebkitBoxShadow:"0 0 0 100px #266798 inset",WebkitTextFillColor:"#fff",caretColor:"#fff"}}},t.size==="small"&&{padding:"8.5px 14px"},t.multiline&&{padding:0},t.startAdornment&&{paddingLeft:0},t.endAdornment&&{paddingRight:0})),Nu=v.forwardRef(function(t,n){var r,o,i,s,a;const l=Le({props:t,name:"MuiOutlinedInput"}),{components:c={},fullWidth:d=!1,inputComponent:f="input",label:p,multiline:b=!1,notched:x,slots:y={},type:k="text"}=l,g=te(l,uj),h=cj(l),m=co(),w=ci({props:l,muiFormControl:m,states:["color","disabled","error","focused","hiddenLabel","size","required"]}),C=_({},l,{color:w.color||"primary",disabled:w.disabled,error:w.error,focused:w.focused,formControl:m,fullWidth:d,hiddenLabel:w.hiddenLabel,multiline:b,size:w.size,type:k}),S=(r=(o=y.root)!=null?o:c.Root)!=null?r:dj,E=(i=(s=y.input)!=null?s:c.Input)!=null?i:pj;return u.jsx(vp,_({slots:{root:S,input:E},renderSuffix:j=>u.jsx(fj,{ownerState:C,className:h.notchedOutline,label:p!=null&&p!==""&&w.required?a||(a=u.jsxs(v.Fragment,{children:[p," ","*"]})):p,notched:typeof x<"u"?x:!!(j.startAdornment||j.filled||j.focused)}),fullWidth:d,inputComponent:f,multiline:b,ref:n,type:k},g,{classes:_({},h,{notchedOutline:null})}))});Nu.muiName="Input";function hj(e){return $e("MuiSelect",e)}const Ni=Pe("MuiSelect",["root","select","multiple","filled","outlined","standard","disabled","focused","icon","iconOpen","iconFilled","iconOutlined","iconStandard","nativeInput","error"]);var Gm;const mj=["aria-describedby","aria-label","autoFocus","autoWidth","children","className","defaultOpen","defaultValue","disabled","displayEmpty","error","IconComponent","inputRef","labelId","MenuProps","multiple","name","onBlur","onChange","onClose","onFocus","onOpen","open","readOnly","renderValue","SelectDisplayProps","tabIndex","type","value","variant"],gj=ne("div",{name:"MuiSelect",slot:"Select",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[{[`&.${Ni.select}`]:t.select},{[`&.${Ni.select}`]:t[n.variant]},{[`&.${Ni.error}`]:t.error},{[`&.${Ni.multiple}`]:t.multiple}]}})(sv,{[`&.${Ni.select}`]:{height:"auto",minHeight:"1.4375em",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}}),xj=ne("svg",{name:"MuiSelect",slot:"Icon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.icon,n.variant&&t[`icon${oe(n.variant)}`],n.open&&t.iconOpen]}})(av),yj=ne("input",{shouldForwardProp:e=>Ky(e)&&e!=="classes",name:"MuiSelect",slot:"NativeInput",overridesResolver:(e,t)=>t.nativeInput})({bottom:0,left:0,position:"absolute",opacity:0,pointerEvents:"none",width:"100%",boxSizing:"border-box"});function Km(e,t){return typeof t=="object"&&t!==null?e===t:String(e)===String(t)}function vj(e){return e==null||typeof e=="string"&&!e.trim()}const bj=e=>{const{classes:t,variant:n,disabled:r,multiple:o,open:i,error:s}=e,a={select:["select",n,r&&"disabled",o&&"multiple",s&&"error"],icon:["icon",`icon${oe(n)}`,i&&"iconOpen",r&&"disabled"],nativeInput:["nativeInput"]};return Me(a,hj,t)},wj=v.forwardRef(function(t,n){var r;const{"aria-describedby":o,"aria-label":i,autoFocus:s,autoWidth:a,children:l,className:c,defaultOpen:d,defaultValue:f,disabled:p,displayEmpty:b,error:x=!1,IconComponent:y,inputRef:k,labelId:g,MenuProps:h={},multiple:m,name:w,onBlur:C,onChange:S,onClose:E,onFocus:j,onOpen:A,open:z,readOnly:T,renderValue:P,SelectDisplayProps:I={},tabIndex:M,value:W,variant:U="standard"}=t,Q=te(t,mj),[F,q]=jd({controlled:W,default:f,name:"Select"}),[X,se]=jd({controlled:z,default:d,name:"Select"}),re=v.useRef(null),xe=v.useRef(null),[ee,pe]=v.useState(null),{current:ce}=v.useRef(z!=null),[De,lt]=v.useState(),je=Nt(n,k),ut=v.useCallback(J=>{xe.current=J,J&&pe(J)},[]),de=ee==null?void 0:ee.parentNode;v.useImperativeHandle(je,()=>({focus:()=>{xe.current.focus()},node:re.current,value:F}),[F]),v.useEffect(()=>{d&&X&&ee&&!ce&&(lt(a?null:de.clientWidth),xe.current.focus())},[ee,a]),v.useEffect(()=>{s&&xe.current.focus()},[s]),v.useEffect(()=>{if(!g)return;const J=It(xe.current).getElementById(g);if(J){const be=()=>{getSelection().isCollapsed&&xe.current.focus()};return J.addEventListener("click",be),()=>{J.removeEventListener("click",be)}}},[g]);const Ce=(J,be)=>{J?A&&A(be):E&&E(be),ce||(lt(a?null:de.clientWidth),se(J))},ae=J=>{J.button===0&&(J.preventDefault(),xe.current.focus(),Ce(!0,J))},he=J=>{Ce(!1,J)},Ee=v.Children.toArray(l),hn=J=>{const be=Ee.find(et=>et.props.value===J.target.value);be!==void 0&&(q(be.props.value),S&&S(J,be))},wt=J=>be=>{let et;if(be.currentTarget.hasAttribute("tabindex")){if(m){et=Array.isArray(F)?F.slice():[];const Ln=F.indexOf(J.props.value);Ln===-1?et.push(J.props.value):et.splice(Ln,1)}else et=J.props.value;if(J.props.onClick&&J.props.onClick(be),F!==et&&(q(et),S)){const Ln=be.nativeEvent||be,Is=new Ln.constructor(Ln.type,Ln);Object.defineProperty(Is,"target",{writable:!0,value:{value:et,name:w}}),S(Is,J)}m||Ce(!1,be)}},Rt=J=>{T||[" ","ArrowUp","ArrowDown","Enter"].indexOf(J.key)!==-1&&(J.preventDefault(),Ce(!0,J))},Bt=ee!==null&&X,Ut=J=>{!Bt&&C&&(Object.defineProperty(J,"target",{writable:!0,value:{value:F,name:w}}),C(J))};delete Q["aria-invalid"];let Ne,N;const R=[];let O=!1;(cl({value:F})||b)&&(P?Ne=P(F):O=!0);const G=Ee.map(J=>{if(!v.isValidElement(J))return null;let be;if(m){if(!Array.isArray(F))throw new Error(so(2));be=F.some(et=>Km(et,J.props.value)),be&&O&&R.push(J.props.children)}else be=Km(F,J.props.value),be&&O&&(N=J.props.children);return v.cloneElement(J,{"aria-selected":be?"true":"false",onClick:wt(J),onKeyUp:et=>{et.key===" "&&et.preventDefault(),J.props.onKeyUp&&J.props.onKeyUp(et)},role:"option",selected:be,value:void 0,"data-value":J.props.value})});O&&(m?R.length===0?Ne=null:Ne=R.reduce((J,be,et)=>(J.push(be),et<R.length-1&&J.push(", "),J),[]):Ne=N);let V=De;!a&&ce&&ee&&(V=de.clientWidth);let L;typeof M<"u"?L=M:L=p?null:0;const B=I.id||(w?`mui-component-select-${w}`:void 0),H=_({},t,{variant:U,value:F,open:Bt,error:x}),ye=bj(H),Be=_({},h.PaperProps,(r=h.slotProps)==null?void 0:r.paper),Ir=fp();return u.jsxs(v.Fragment,{children:[u.jsx(gj,_({ref:ut,tabIndex:L,role:"combobox","aria-controls":Ir,"aria-disabled":p?"true":void 0,"aria-expanded":Bt?"true":"false","aria-haspopup":"listbox","aria-label":i,"aria-labelledby":[g,B].filter(Boolean).join(" ")||void 0,"aria-describedby":o,onKeyDown:Rt,onMouseDown:p||T?null:ae,onBlur:Ut,onFocus:j},I,{ownerState:H,className:le(I.className,ye.select,c),id:B,children:vj(Ne)?Gm||(Gm=u.jsx("span",{className:"notranslate",children:"​"})):Ne})),u.jsx(yj,_({"aria-invalid":x,value:Array.isArray(F)?F.join(","):F,name:w,ref:re,"aria-hidden":!0,onChange:hn,tabIndex:-1,disabled:p,className:ye.nativeInput,autoFocus:s,ownerState:H},Q)),u.jsx(xj,{as:y,className:ye.icon,ownerState:H}),u.jsx(J_,_({id:`menu-${w||""}`,anchorEl:de,open:Bt,onClose:he,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},h,{MenuListProps:_({"aria-labelledby":g,role:"listbox","aria-multiselectable":m?"true":void 0,disableListWrap:!0,id:Ir},h.MenuListProps),slotProps:_({},h.slotProps,{paper:_({},Be,{style:_({minWidth:V},Be!=null?Be.style:null)})}),children:G}))]})}),Sj=["autoWidth","children","classes","className","defaultOpen","displayEmpty","IconComponent","id","input","inputProps","label","labelId","MenuProps","multiple","native","onClose","onOpen","open","renderValue","SelectDisplayProps","variant"],kj=["root"],Cj=e=>{const{classes:t}=e;return t},kp={name:"MuiSelect",overridesResolver:(e,t)=>t.root,shouldForwardProp:e=>Cn(e)&&e!=="variant",slot:"Root"},Ej=ne(wp,kp)(""),Nj=ne(Nu,kp)(""),_j=ne(bp,kp)(""),lv=v.forwardRef(function(t,n){const r=Le({name:"MuiSelect",props:t}),{autoWidth:o=!1,children:i,classes:s={},className:a,defaultOpen:l=!1,displayEmpty:c=!1,IconComponent:d=sN,id:f,input:p,inputProps:b,label:x,labelId:y,MenuProps:k,multiple:g=!1,native:h=!1,onClose:m,onOpen:w,open:C,renderValue:S,SelectDisplayProps:E,variant:j="outlined"}=r,A=te(r,Sj),z=h?oj:wj,T=co(),P=ci({props:r,muiFormControl:T,states:["variant","error"]}),I=P.variant||j,M=_({},r,{variant:I,classes:s}),W=Cj(M),U=te(W,kj),Q=p||{standard:u.jsx(Ej,{ownerState:M}),outlined:u.jsx(Nj,{label:x,ownerState:M}),filled:u.jsx(_j,{ownerState:M})}[I],F=Nt(n,Ts(Q));return u.jsx(v.Fragment,{children:v.cloneElement(Q,_({inputComponent:z,inputProps:_({children:i,error:P.error,IconComponent:d,variant:I,type:void 0,multiple:g},h?{id:f}:{autoWidth:o,defaultOpen:l,displayEmpty:c,labelId:y,MenuProps:k,onClose:m,onOpen:w,open:C,renderValue:S,SelectDisplayProps:_({id:f},E)},b,{classes:b?Qt(U,b.classes):U},p?p.props.inputProps:{})},(g&&h||c)&&I==="outlined"?{notched:!0}:{},{ref:F,className:le(Q.props.className,a,W.root)},!p&&{variant:I},A))})});lv.muiName="Select";function jj(e){return $e("MuiTextField",e)}Pe("MuiTextField",["root"]);const Rj=["autoComplete","autoFocus","children","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","id","InputLabelProps","inputProps","InputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","SelectProps","type","value","variant"],Tj={standard:wp,filled:bp,outlined:Nu},Pj=e=>{const{classes:t}=e;return Me({root:["root"]},jj,t)},Oj=ne(ev,{name:"MuiTextField",slot:"Root",overridesResolver:(e,t)=>t.root})({}),Fj=v.forwardRef(function(t,n){const r=Le({props:t,name:"MuiTextField"}),{autoComplete:o,autoFocus:i=!1,children:s,className:a,color:l="primary",defaultValue:c,disabled:d=!1,error:f=!1,FormHelperTextProps:p,fullWidth:b=!1,helperText:x,id:y,InputLabelProps:k,inputProps:g,InputProps:h,inputRef:m,label:w,maxRows:C,minRows:S,multiline:E=!1,name:j,onBlur:A,onChange:z,onFocus:T,placeholder:P,required:I=!1,rows:M,select:W=!1,SelectProps:U,type:Q,value:F,variant:q="outlined"}=r,X=te(r,Rj),se=_({},r,{autoFocus:i,color:l,disabled:d,error:f,fullWidth:b,multiline:E,required:I,select:W,variant:q}),re=Pj(se),xe={};q==="outlined"&&(k&&typeof k.shrink<"u"&&(xe.notched=k.shrink),xe.label=w),W&&((!U||!U.native)&&(xe.id=void 0),xe["aria-describedby"]=void 0);const ee=fp(y),pe=x&&ee?`${ee}-helper-text`:void 0,ce=w&&ee?`${ee}-label`:void 0,De=Tj[q],lt=u.jsx(De,_({"aria-describedby":pe,autoComplete:o,autoFocus:i,defaultValue:c,fullWidth:b,multiline:E,name:j,rows:M,maxRows:C,minRows:S,type:Q,value:F,id:ee,inputRef:m,onBlur:A,onChange:z,onFocus:T,placeholder:P,inputProps:g},xe,h));return u.jsxs(Oj,_({className:le(re.root,a),disabled:d,error:f,fullWidth:b,ref:n,required:I,color:l,variant:q,ownerState:se},X,{children:[w!=null&&w!==""&&u.jsx(rv,_({htmlFor:ee,id:ce},k,{children:w})),W?u.jsx(lv,_({"aria-describedby":pe,id:ee,labelId:ce,value:F,input:lt},U,{children:s})):lt,x&&u.jsx(tv,_({id:pe},p,{children:x}))]}))});var Os=e=>e.type==="checkbox",Gr=e=>e instanceof Date,Ct=e=>e==null;const uv=e=>typeof e=="object";var Ke=e=>!Ct(e)&&!Array.isArray(e)&&uv(e)&&!Gr(e),cv=e=>Ke(e)&&e.target?Os(e.target)?e.target.checked:e.target.value:e,$j=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,dv=(e,t)=>e.has($j(t)),Aj=e=>{const t=e.constructor&&e.constructor.prototype;return Ke(t)&&t.hasOwnProperty("isPrototypeOf")},Cp=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function ct(e){let t;const n=Array.isArray(e),r=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(Cp&&(e instanceof Blob||r))&&(n||Ke(e)))if(t=n?[]:{},!n&&!Aj(e))t=e;else for(const o in e)e.hasOwnProperty(o)&&(t[o]=ct(e[o]));else return e;return t}var _u=e=>Array.isArray(e)?e.filter(Boolean):[],qe=e=>e===void 0,K=(e,t,n)=>{if(!t||!Ke(e))return n;const r=_u(t.split(/[,[\].]+?/)).reduce((o,i)=>Ct(o)?o:o[i],e);return qe(r)||r===e?qe(e[t])?n:e[t]:r},Vt=e=>typeof e=="boolean",Ep=e=>/^\w*$/.test(e),fv=e=>_u(e.replace(/["|']|\]/g,"").split(/\.|\[/)),ve=(e,t,n)=>{let r=-1;const o=Ep(t)?[t]:fv(t),i=o.length,s=i-1;for(;++r<i;){const a=o[r];let l=n;if(r!==s){const c=e[a];l=Ke(c)||Array.isArray(c)?c:isNaN(+o[r+1])?{}:[]}if(a==="__proto__"||a==="constructor"||a==="prototype")return;e[a]=l,e=e[a]}};const dl={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},vn={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Dn={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},zj=Z.createContext(null),Np=()=>Z.useContext(zj);var pv=(e,t,n,r=!0)=>{const o={defaultValues:t._defaultValues};for(const i in e)Object.defineProperty(o,i,{get:()=>{const s=i;return t._proxyFormState[s]!==vn.all&&(t._proxyFormState[s]=!r||vn.all),n&&(n[s]=!0),e[s]}});return o},zd=e=>Ct(e)||!uv(e);function Vn(e,t){if(zd(e)||zd(t))return e===t;if(Gr(e)&&Gr(t))return e.getTime()===t.getTime();const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const o of n){const i=e[o];if(!r.includes(o))return!1;if(o!=="ref"){const s=t[o];if(Gr(i)&&Gr(s)||Ke(i)&&Ke(s)||Array.isArray(i)&&Array.isArray(s)?!Vn(i,s):i!==s)return!1}}return!0}const hv=(e,t)=>{const n=v.useRef(t);Vn(t,n.current)||(n.current=t),v.useEffect(e,n.current)};function Ij(e){const t=Np(),{control:n=t.control,disabled:r,name:o,exact:i}=e||{},[s,a]=Z.useState(n._formState),l=Z.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1});return hv(()=>n._subscribe({name:o,formState:l.current,exact:i,callback:c=>{!r&&a({...n._formState,...c})}}),[o,r,i]),Z.useEffect(()=>{l.current.isValid&&n._setValid(!0)},[n]),Z.useMemo(()=>pv(s,n,l.current,!1),[s,n])}var Fn=e=>typeof e=="string",mv=(e,t,n,r,o)=>Fn(e)?(r&&t.watch.add(e),K(n,e,o)):Array.isArray(e)?e.map(i=>(r&&t.watch.add(i),K(n,i))):(r&&(t.watchAll=!0),n);function Mj(e){const t=Np(),{control:n=t.control,name:r,defaultValue:o,disabled:i,exact:s}=e||{},[a,l]=Z.useState(n._getWatch(r,o));return hv(()=>n._subscribe({name:r,formState:{values:!0},exact:s,callback:c=>!i&&l(mv(r,n._names,c.values||n._formValues,!1,o))}),[r,o,i,s]),Z.useEffect(()=>n._removeUnmounted()),a}function Lj(e){const t=Np(),{name:n,disabled:r,control:o=t.control,shouldUnregister:i}=e,s=dv(o._names.array,n),a=Mj({control:o,name:n,defaultValue:K(o._formValues,n,K(o._defaultValues,n,e.defaultValue)),exact:!0}),l=Ij({control:o,name:n,exact:!0}),c=Z.useRef(e),d=Z.useRef(o.register(n,{...e.rules,value:a,...Vt(e.disabled)?{disabled:e.disabled}:{}})),f=Z.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!K(l.errors,n)},isDirty:{enumerable:!0,get:()=>!!K(l.dirtyFields,n)},isTouched:{enumerable:!0,get:()=>!!K(l.touchedFields,n)},isValidating:{enumerable:!0,get:()=>!!K(l.validatingFields,n)},error:{enumerable:!0,get:()=>K(l.errors,n)}}),[l,n]),p=Z.useCallback(k=>d.current.onChange({target:{value:cv(k),name:n},type:dl.CHANGE}),[n]),b=Z.useCallback(()=>d.current.onBlur({target:{value:K(o._formValues,n),name:n},type:dl.BLUR}),[n,o._formValues]),x=Z.useCallback(k=>{const g=K(o._fields,n);g&&k&&(g._f.ref={focus:()=>k.focus(),select:()=>k.select(),setCustomValidity:h=>k.setCustomValidity(h),reportValidity:()=>k.reportValidity()})},[o._fields,n]),y=Z.useMemo(()=>({name:n,value:a,...Vt(r)||l.disabled?{disabled:l.disabled||r}:{},onChange:p,onBlur:b,ref:x}),[n,r,l.disabled,p,b,x,a]);return Z.useEffect(()=>{const k=o._options.shouldUnregister||i;o.register(n,{...c.current.rules,...Vt(c.current.disabled)?{disabled:c.current.disabled}:{}});const g=(h,m)=>{const w=K(o._fields,h);w&&w._f&&(w._f.mount=m)};if(g(n,!0),k){const h=ct(K(o._options.defaultValues,n));ve(o._defaultValues,n,h),qe(K(o._formValues,n))&&ve(o._formValues,n,h)}return!s&&o.register(n),()=>{(s?k&&!o._state.action:k)?o.unregister(n):g(n,!1)}},[n,o,s,i]),Z.useEffect(()=>{o._setDisabledField({disabled:r,name:n})},[r,n,o]),Z.useMemo(()=>({field:y,formState:l,fieldState:f}),[y,l,f])}const gv=e=>e.render(Lj(e));var xv=(e,t,n,r,o)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:o||!0}}:{},Gi=e=>Array.isArray(e)?e:[e],Qm=()=>{let e=[];return{get observers(){return e},next:o=>{for(const i of e)i.next&&i.next(o)},subscribe:o=>(e.push(o),{unsubscribe:()=>{e=e.filter(i=>i!==o)}}),unsubscribe:()=>{e=[]}}},St=e=>Ke(e)&&!Object.keys(e).length,_p=e=>e.type==="file",bn=e=>typeof e=="function",fl=e=>{if(!Cp)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},yv=e=>e.type==="select-multiple",jp=e=>e.type==="radio",Dj=e=>jp(e)||Os(e),wc=e=>fl(e)&&e.isConnected;function Bj(e,t){const n=t.slice(0,-1).length;let r=0;for(;r<n;)e=qe(e)?r++:e[t[r++]];return e}function Uj(e){for(const t in e)if(e.hasOwnProperty(t)&&!qe(e[t]))return!1;return!0}function nt(e,t){const n=Array.isArray(t)?t:Ep(t)?[t]:fv(t),r=n.length===1?e:Bj(e,n),o=n.length-1,i=n[o];return r&&delete r[i],o!==0&&(Ke(r)&&St(r)||Array.isArray(r)&&Uj(r))&&nt(e,n.slice(0,-1)),e}var vv=e=>{for(const t in e)if(bn(e[t]))return!0;return!1};function pl(e,t={}){const n=Array.isArray(e);if(Ke(e)||n)for(const r in e)Array.isArray(e[r])||Ke(e[r])&&!vv(e[r])?(t[r]=Array.isArray(e[r])?[]:{},pl(e[r],t[r])):Ct(e[r])||(t[r]=!0);return t}function bv(e,t,n){const r=Array.isArray(e);if(Ke(e)||r)for(const o in e)Array.isArray(e[o])||Ke(e[o])&&!vv(e[o])?qe(t)||zd(n[o])?n[o]=Array.isArray(e[o])?pl(e[o],[]):{...pl(e[o])}:bv(e[o],Ct(t)?{}:t[o],n[o]):n[o]=!Vn(e[o],t[o]);return n}var _i=(e,t)=>bv(e,t,pl(t));const Xm={value:!1,isValid:!1},Ym={value:!0,isValid:!0};var wv=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!qe(e[0].attributes.value)?qe(e[0].value)||e[0].value===""?Ym:{value:e[0].value,isValid:!0}:Ym:Xm}return Xm},Sv=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>qe(e)?e:t?e===""?NaN:e&&+e:n&&Fn(e)?new Date(e):r?r(e):e;const Jm={isValid:!1,value:null};var kv=e=>Array.isArray(e)?e.reduce((t,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:t,Jm):Jm;function Zm(e){const t=e.ref;return _p(t)?t.files:jp(t)?kv(e.refs).value:yv(t)?[...t.selectedOptions].map(({value:n})=>n):Os(t)?wv(e.refs).value:Sv(qe(t.value)?e.ref.value:t.value,e)}var Wj=(e,t,n,r)=>{const o={};for(const i of e){const s=K(t,i);s&&ve(o,i,s._f)}return{criteriaMode:n,names:[...e],fields:o,shouldUseNativeValidation:r}},hl=e=>e instanceof RegExp,ji=e=>qe(e)?e:hl(e)?e.source:Ke(e)?hl(e.value)?e.value.source:e.value:e,eg=e=>({isOnSubmit:!e||e===vn.onSubmit,isOnBlur:e===vn.onBlur,isOnChange:e===vn.onChange,isOnAll:e===vn.all,isOnTouch:e===vn.onTouched});const tg="AsyncFunction";var Vj=e=>!!e&&!!e.validate&&!!(bn(e.validate)&&e.validate.constructor.name===tg||Ke(e.validate)&&Object.values(e.validate).find(t=>t.constructor.name===tg)),Hj=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),ng=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length))));const Ki=(e,t,n,r)=>{for(const o of n||Object.keys(e)){const i=K(e,o);if(i){const{_f:s,...a}=i;if(s){if(s.refs&&s.refs[0]&&t(s.refs[0],o)&&!r)return!0;if(s.ref&&t(s.ref,s.name)&&!r)return!0;if(Ki(a,t))break}else if(Ke(a)&&Ki(a,t))break}}};function rg(e,t,n){const r=K(e,n);if(r||Ep(n))return{error:r,name:n};const o=n.split(".");for(;o.length;){const i=o.join("."),s=K(t,i),a=K(e,i);if(s&&!Array.isArray(s)&&n!==i)return{name:n};if(a&&a.type)return{name:i,error:a};o.pop()}return{name:n}}var qj=(e,t,n,r)=>{n(e);const{name:o,...i}=e;return St(i)||Object.keys(i).length>=Object.keys(t).length||Object.keys(i).find(s=>t[s]===(!r||vn.all))},Gj=(e,t,n)=>!e||!t||e===t||Gi(e).some(r=>r&&(n?r===t:r.startsWith(t)||t.startsWith(r))),Kj=(e,t,n,r,o)=>o.isOnAll?!1:!n&&o.isOnTouch?!(t||e):(n?r.isOnBlur:o.isOnBlur)?!e:(n?r.isOnChange:o.isOnChange)?e:!0,Qj=(e,t)=>!_u(K(e,t)).length&&nt(e,t),Xj=(e,t,n)=>{const r=Gi(K(e,n));return ve(r,"root",t[n]),ve(e,n,r),e},Ea=e=>Fn(e);function og(e,t,n="validate"){if(Ea(e)||Array.isArray(e)&&e.every(Ea)||Vt(e)&&!e)return{type:n,message:Ea(e)?e:"",ref:t}}var So=e=>Ke(e)&&!hl(e)?e:{value:e,message:""},ig=async(e,t,n,r,o,i)=>{const{ref:s,refs:a,required:l,maxLength:c,minLength:d,min:f,max:p,pattern:b,validate:x,name:y,valueAsNumber:k,mount:g}=e._f,h=K(n,y);if(!g||t.has(y))return{};const m=a?a[0]:s,w=P=>{o&&m.reportValidity&&(m.setCustomValidity(Vt(P)?"":P||""),m.reportValidity())},C={},S=jp(s),E=Os(s),j=S||E,A=(k||_p(s))&&qe(s.value)&&qe(h)||fl(s)&&s.value===""||h===""||Array.isArray(h)&&!h.length,z=xv.bind(null,y,r,C),T=(P,I,M,W=Dn.maxLength,U=Dn.minLength)=>{const Q=P?I:M;C[y]={type:P?W:U,message:Q,ref:s,...z(P?W:U,Q)}};if(i?!Array.isArray(h)||!h.length:l&&(!j&&(A||Ct(h))||Vt(h)&&!h||E&&!wv(a).isValid||S&&!kv(a).isValid)){const{value:P,message:I}=Ea(l)?{value:!!l,message:l}:So(l);if(P&&(C[y]={type:Dn.required,message:I,ref:m,...z(Dn.required,I)},!r))return w(I),C}if(!A&&(!Ct(f)||!Ct(p))){let P,I;const M=So(p),W=So(f);if(!Ct(h)&&!isNaN(h)){const U=s.valueAsNumber||h&&+h;Ct(M.value)||(P=U>M.value),Ct(W.value)||(I=U<W.value)}else{const U=s.valueAsDate||new Date(h),Q=X=>new Date(new Date().toDateString()+" "+X),F=s.type=="time",q=s.type=="week";Fn(M.value)&&h&&(P=F?Q(h)>Q(M.value):q?h>M.value:U>new Date(M.value)),Fn(W.value)&&h&&(I=F?Q(h)<Q(W.value):q?h<W.value:U<new Date(W.value))}if((P||I)&&(T(!!P,M.message,W.message,Dn.max,Dn.min),!r))return w(C[y].message),C}if((c||d)&&!A&&(Fn(h)||i&&Array.isArray(h))){const P=So(c),I=So(d),M=!Ct(P.value)&&h.length>+P.value,W=!Ct(I.value)&&h.length<+I.value;if((M||W)&&(T(M,P.message,I.message),!r))return w(C[y].message),C}if(b&&!A&&Fn(h)){const{value:P,message:I}=So(b);if(hl(P)&&!h.match(P)&&(C[y]={type:Dn.pattern,message:I,ref:s,...z(Dn.pattern,I)},!r))return w(I),C}if(x){if(bn(x)){const P=await x(h,n),I=og(P,m);if(I&&(C[y]={...I,...z(Dn.validate,I.message)},!r))return w(I.message),C}else if(Ke(x)){let P={};for(const I in x){if(!St(P)&&!r)break;const M=og(await x[I](h,n),m,I);M&&(P={...M,...z(I,M.message)},w(M.message),r&&(C[y]=P))}if(!St(P)&&(C[y]={ref:m,...P},!r))return C}}return w(!0),C};const Yj={mode:vn.onSubmit,reValidateMode:vn.onChange,shouldFocusError:!0};function Jj(e={}){let t={...Yj,...e},n={submitCount:0,isDirty:!1,isReady:!1,isLoading:bn(t.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||!1};const r={};let o=Ke(t.defaultValues)||Ke(t.values)?ct(t.values||t.defaultValues)||{}:{},i=t.shouldUnregister?{}:ct(o),s={action:!1,mount:!1,watch:!1},a={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},l,c=0;const d={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let f={...d};const p={array:Qm(),state:Qm()},b=eg(t.mode),x=eg(t.reValidateMode),y=t.criteriaMode===vn.all,k=N=>R=>{clearTimeout(c),c=setTimeout(N,R)},g=async N=>{if(!t.disabled&&(d.isValid||f.isValid||N)){const R=t.resolver?St((await A()).errors):await T(r,!0);R!==n.isValid&&p.state.next({isValid:R})}},h=(N,R)=>{!t.disabled&&(d.isValidating||d.validatingFields||f.isValidating||f.validatingFields)&&((N||Array.from(a.mount)).forEach(O=>{O&&(R?ve(n.validatingFields,O,R):nt(n.validatingFields,O))}),p.state.next({validatingFields:n.validatingFields,isValidating:!St(n.validatingFields)}))},m=(N,R=[],O,G,V=!0,L=!0)=>{if(G&&O&&!t.disabled){if(s.action=!0,L&&Array.isArray(K(r,N))){const B=O(K(r,N),G.argA,G.argB);V&&ve(r,N,B)}if(L&&Array.isArray(K(n.errors,N))){const B=O(K(n.errors,N),G.argA,G.argB);V&&ve(n.errors,N,B),Qj(n.errors,N)}if((d.touchedFields||f.touchedFields)&&L&&Array.isArray(K(n.touchedFields,N))){const B=O(K(n.touchedFields,N),G.argA,G.argB);V&&ve(n.touchedFields,N,B)}(d.dirtyFields||f.dirtyFields)&&(n.dirtyFields=_i(o,i)),p.state.next({name:N,isDirty:I(N,R),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else ve(i,N,R)},w=(N,R)=>{ve(n.errors,N,R),p.state.next({errors:n.errors})},C=N=>{n.errors=N,p.state.next({errors:n.errors,isValid:!1})},S=(N,R,O,G)=>{const V=K(r,N);if(V){const L=K(i,N,qe(O)?K(o,N):O);qe(L)||G&&G.defaultChecked||R?ve(i,N,R?L:Zm(V._f)):U(N,L),s.mount&&g()}},E=(N,R,O,G,V)=>{let L=!1,B=!1;const H={name:N};if(!t.disabled){if(!O||G){(d.isDirty||f.isDirty)&&(B=n.isDirty,n.isDirty=H.isDirty=I(),L=B!==H.isDirty);const ye=Vn(K(o,N),R);B=!!K(n.dirtyFields,N),ye?nt(n.dirtyFields,N):ve(n.dirtyFields,N,!0),H.dirtyFields=n.dirtyFields,L=L||(d.dirtyFields||f.dirtyFields)&&B!==!ye}if(O){const ye=K(n.touchedFields,N);ye||(ve(n.touchedFields,N,O),H.touchedFields=n.touchedFields,L=L||(d.touchedFields||f.touchedFields)&&ye!==O)}L&&V&&p.state.next(H)}return L?H:{}},j=(N,R,O,G)=>{const V=K(n.errors,N),L=(d.isValid||f.isValid)&&Vt(R)&&n.isValid!==R;if(t.delayError&&O?(l=k(()=>w(N,O)),l(t.delayError)):(clearTimeout(c),l=null,O?ve(n.errors,N,O):nt(n.errors,N)),(O?!Vn(V,O):V)||!St(G)||L){const B={...G,...L&&Vt(R)?{isValid:R}:{},errors:n.errors,name:N};n={...n,...B},p.state.next(B)}},A=async N=>{h(N,!0);const R=await t.resolver(i,t.context,Wj(N||a.mount,r,t.criteriaMode,t.shouldUseNativeValidation));return h(N),R},z=async N=>{const{errors:R}=await A(N);if(N)for(const O of N){const G=K(R,O);G?ve(n.errors,O,G):nt(n.errors,O)}else n.errors=R;return R},T=async(N,R,O={valid:!0})=>{for(const G in N){const V=N[G];if(V){const{_f:L,...B}=V;if(L){const H=a.array.has(L.name),ye=V._f&&Vj(V._f);ye&&d.validatingFields&&h([G],!0);const Be=await ig(V,a.disabled,i,y,t.shouldUseNativeValidation&&!R,H);if(ye&&d.validatingFields&&h([G]),Be[L.name]&&(O.valid=!1,R))break;!R&&(K(Be,L.name)?H?Xj(n.errors,Be,L.name):ve(n.errors,L.name,Be[L.name]):nt(n.errors,L.name))}!St(B)&&await T(B,R,O)}}return O.valid},P=()=>{for(const N of a.unMount){const R=K(r,N);R&&(R._f.refs?R._f.refs.every(O=>!wc(O)):!wc(R._f.ref))&&je(N)}a.unMount=new Set},I=(N,R)=>!t.disabled&&(N&&R&&ve(i,N,R),!Vn(re(),o)),M=(N,R,O)=>mv(N,a,{...s.mount?i:qe(R)?o:Fn(N)?{[N]:R}:R},O,R),W=N=>_u(K(s.mount?i:o,N,t.shouldUnregister?K(o,N,[]):[])),U=(N,R,O={})=>{const G=K(r,N);let V=R;if(G){const L=G._f;L&&(!L.disabled&&ve(i,N,Sv(R,L)),V=fl(L.ref)&&Ct(R)?"":R,yv(L.ref)?[...L.ref.options].forEach(B=>B.selected=V.includes(B.value)):L.refs?Os(L.ref)?L.refs.length>1?L.refs.forEach(B=>(!B.defaultChecked||!B.disabled)&&(B.checked=Array.isArray(V)?!!V.find(H=>H===B.value):V===B.value)):L.refs[0]&&(L.refs[0].checked=!!V):L.refs.forEach(B=>B.checked=B.value===V):_p(L.ref)?L.ref.value="":(L.ref.value=V,L.ref.type||p.state.next({name:N,values:ct(i)})))}(O.shouldDirty||O.shouldTouch)&&E(N,V,O.shouldTouch,O.shouldDirty,!0),O.shouldValidate&&se(N)},Q=(N,R,O)=>{for(const G in R){const V=R[G],L=`${N}.${G}`,B=K(r,L);(a.array.has(N)||Ke(V)||B&&!B._f)&&!Gr(V)?Q(L,V,O):U(L,V,O)}},F=(N,R,O={})=>{const G=K(r,N),V=a.array.has(N),L=ct(R);ve(i,N,L),V?(p.array.next({name:N,values:ct(i)}),(d.isDirty||d.dirtyFields||f.isDirty||f.dirtyFields)&&O.shouldDirty&&p.state.next({name:N,dirtyFields:_i(o,i),isDirty:I(N,L)})):G&&!G._f&&!Ct(L)?Q(N,L,O):U(N,L,O),ng(N,a)&&p.state.next({...n}),p.state.next({name:s.mount?N:void 0,values:ct(i)})},q=async N=>{s.mount=!0;const R=N.target;let O=R.name,G=!0;const V=K(r,O),L=B=>{G=Number.isNaN(B)||Gr(B)&&isNaN(B.getTime())||Vn(B,K(i,O,B))};if(V){let B,H;const ye=R.type?Zm(V._f):cv(N),Be=N.type===dl.BLUR||N.type===dl.FOCUS_OUT,Ir=!Hj(V._f)&&!t.resolver&&!K(n.errors,O)&&!V._f.deps||Kj(Be,K(n.touchedFields,O),n.isSubmitted,x,b),J=ng(O,a,Be);ve(i,O,ye),Be?(V._f.onBlur&&V._f.onBlur(N),l&&l(0)):V._f.onChange&&V._f.onChange(N);const be=E(O,ye,Be),et=!St(be)||J;if(!Be&&p.state.next({name:O,type:N.type,values:ct(i)}),Ir)return(d.isValid||f.isValid)&&(t.mode==="onBlur"?Be&&g():Be||g()),et&&p.state.next({name:O,...J?{}:be});if(!Be&&J&&p.state.next({...n}),t.resolver){const{errors:Ln}=await A([O]);if(L(ye),G){const Is=rg(n.errors,r,O),Wp=rg(Ln,r,Is.name||O);B=Wp.error,O=Wp.name,H=St(Ln)}}else h([O],!0),B=(await ig(V,a.disabled,i,y,t.shouldUseNativeValidation))[O],h([O]),L(ye),G&&(B?H=!1:(d.isValid||f.isValid)&&(H=await T(r,!0)));G&&(V._f.deps&&se(V._f.deps),j(O,H,B,be))}},X=(N,R)=>{if(K(n.errors,R)&&N.focus)return N.focus(),1},se=async(N,R={})=>{let O,G;const V=Gi(N);if(t.resolver){const L=await z(qe(N)?N:V);O=St(L),G=N?!V.some(B=>K(L,B)):O}else N?(G=(await Promise.all(V.map(async L=>{const B=K(r,L);return await T(B&&B._f?{[L]:B}:B)}))).every(Boolean),!(!G&&!n.isValid)&&g()):G=O=await T(r);return p.state.next({...!Fn(N)||(d.isValid||f.isValid)&&O!==n.isValid?{}:{name:N},...t.resolver||!N?{isValid:O}:{},errors:n.errors}),R.shouldFocus&&!G&&Ki(r,X,N?V:a.mount),G},re=N=>{const R={...s.mount?i:o};return qe(N)?R:Fn(N)?K(R,N):N.map(O=>K(R,O))},xe=(N,R)=>({invalid:!!K((R||n).errors,N),isDirty:!!K((R||n).dirtyFields,N),error:K((R||n).errors,N),isValidating:!!K(n.validatingFields,N),isTouched:!!K((R||n).touchedFields,N)}),ee=N=>{N&&Gi(N).forEach(R=>nt(n.errors,R)),p.state.next({errors:N?n.errors:{}})},pe=(N,R,O)=>{const G=(K(r,N,{_f:{}})._f||{}).ref,V=K(n.errors,N)||{},{ref:L,message:B,type:H,...ye}=V;ve(n.errors,N,{...ye,...R,ref:G}),p.state.next({name:N,errors:n.errors,isValid:!1}),O&&O.shouldFocus&&G&&G.focus&&G.focus()},ce=(N,R)=>bn(N)?p.state.subscribe({next:O=>N(M(void 0,R),O)}):M(N,R,!0),De=N=>p.state.subscribe({next:R=>{Gj(N.name,R.name,N.exact)&&qj(R,N.formState||d,Bt,N.reRenderRoot)&&N.callback({values:{...i},...n,...R})}}).unsubscribe,lt=N=>(s.mount=!0,f={...f,...N.formState},De({...N,formState:f})),je=(N,R={})=>{for(const O of N?Gi(N):a.mount)a.mount.delete(O),a.array.delete(O),R.keepValue||(nt(r,O),nt(i,O)),!R.keepError&&nt(n.errors,O),!R.keepDirty&&nt(n.dirtyFields,O),!R.keepTouched&&nt(n.touchedFields,O),!R.keepIsValidating&&nt(n.validatingFields,O),!t.shouldUnregister&&!R.keepDefaultValue&&nt(o,O);p.state.next({values:ct(i)}),p.state.next({...n,...R.keepDirty?{isDirty:I()}:{}}),!R.keepIsValid&&g()},ut=({disabled:N,name:R})=>{(Vt(N)&&s.mount||N||a.disabled.has(R))&&(N?a.disabled.add(R):a.disabled.delete(R))},de=(N,R={})=>{let O=K(r,N);const G=Vt(R.disabled)||Vt(t.disabled);return ve(r,N,{...O||{},_f:{...O&&O._f?O._f:{ref:{name:N}},name:N,mount:!0,...R}}),a.mount.add(N),O?ut({disabled:Vt(R.disabled)?R.disabled:t.disabled,name:N}):S(N,!0,R.value),{...G?{disabled:R.disabled||t.disabled}:{},...t.progressive?{required:!!R.required,min:ji(R.min),max:ji(R.max),minLength:ji(R.minLength),maxLength:ji(R.maxLength),pattern:ji(R.pattern)}:{},name:N,onChange:q,onBlur:q,ref:V=>{if(V){de(N,R),O=K(r,N);const L=qe(V.value)&&V.querySelectorAll&&V.querySelectorAll("input,select,textarea")[0]||V,B=Dj(L),H=O._f.refs||[];if(B?H.find(ye=>ye===L):L===O._f.ref)return;ve(r,N,{_f:{...O._f,...B?{refs:[...H.filter(wc),L,...Array.isArray(K(o,N))?[{}]:[]],ref:{type:L.type,name:N}}:{ref:L}}}),S(N,!1,void 0,L)}else O=K(r,N,{}),O._f&&(O._f.mount=!1),(t.shouldUnregister||R.shouldUnregister)&&!(dv(a.array,N)&&s.action)&&a.unMount.add(N)}}},Ce=()=>t.shouldFocusError&&Ki(r,X,a.mount),ae=N=>{Vt(N)&&(p.state.next({disabled:N}),Ki(r,(R,O)=>{const G=K(r,O);G&&(R.disabled=G._f.disabled||N,Array.isArray(G._f.refs)&&G._f.refs.forEach(V=>{V.disabled=G._f.disabled||N}))},0,!1))},he=(N,R)=>async O=>{let G;O&&(O.preventDefault&&O.preventDefault(),O.persist&&O.persist());let V=ct(i);if(p.state.next({isSubmitting:!0}),t.resolver){const{errors:L,values:B}=await A();n.errors=L,V=B}else await T(r);if(a.disabled.size)for(const L of a.disabled)ve(V,L,void 0);if(nt(n.errors,"root"),St(n.errors)){p.state.next({errors:{}});try{await N(V,O)}catch(L){G=L}}else R&&await R({...n.errors},O),Ce(),setTimeout(Ce);if(p.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:St(n.errors)&&!G,submitCount:n.submitCount+1,errors:n.errors}),G)throw G},Ee=(N,R={})=>{K(r,N)&&(qe(R.defaultValue)?F(N,ct(K(o,N))):(F(N,R.defaultValue),ve(o,N,ct(R.defaultValue))),R.keepTouched||nt(n.touchedFields,N),R.keepDirty||(nt(n.dirtyFields,N),n.isDirty=R.defaultValue?I(N,ct(K(o,N))):I()),R.keepError||(nt(n.errors,N),d.isValid&&g()),p.state.next({...n}))},hn=(N,R={})=>{const O=N?ct(N):o,G=ct(O),V=St(N),L=V?o:G;if(R.keepDefaultValues||(o=O),!R.keepValues){if(R.keepDirtyValues){const B=new Set([...a.mount,...Object.keys(_i(o,i))]);for(const H of Array.from(B))K(n.dirtyFields,H)?ve(L,H,K(i,H)):F(H,K(L,H))}else{if(Cp&&qe(N))for(const B of a.mount){const H=K(r,B);if(H&&H._f){const ye=Array.isArray(H._f.refs)?H._f.refs[0]:H._f.ref;if(fl(ye)){const Be=ye.closest("form");if(Be){Be.reset();break}}}}for(const B of a.mount)F(B,K(L,B))}i=ct(L),p.array.next({values:{...L}}),p.state.next({values:{...L}})}a={mount:R.keepDirtyValues?a.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},s.mount=!d.isValid||!!R.keepIsValid||!!R.keepDirtyValues,s.watch=!!t.shouldUnregister,p.state.next({submitCount:R.keepSubmitCount?n.submitCount:0,isDirty:V?!1:R.keepDirty?n.isDirty:!!(R.keepDefaultValues&&!Vn(N,o)),isSubmitted:R.keepIsSubmitted?n.isSubmitted:!1,dirtyFields:V?{}:R.keepDirtyValues?R.keepDefaultValues&&i?_i(o,i):n.dirtyFields:R.keepDefaultValues&&N?_i(o,N):R.keepDirty?n.dirtyFields:{},touchedFields:R.keepTouched?n.touchedFields:{},errors:R.keepErrors?n.errors:{},isSubmitSuccessful:R.keepIsSubmitSuccessful?n.isSubmitSuccessful:!1,isSubmitting:!1})},wt=(N,R)=>hn(bn(N)?N(i):N,R),Rt=(N,R={})=>{const O=K(r,N),G=O&&O._f;if(G){const V=G.refs?G.refs[0]:G.ref;V.focus&&(V.focus(),R.shouldSelect&&bn(V.select)&&V.select())}},Bt=N=>{n={...n,...N}},Ne={control:{register:de,unregister:je,getFieldState:xe,handleSubmit:he,setError:pe,_subscribe:De,_runSchema:A,_getWatch:M,_getDirty:I,_setValid:g,_setFieldArray:m,_setDisabledField:ut,_setErrors:C,_getFieldArray:W,_reset:hn,_resetDefaultValues:()=>bn(t.defaultValues)&&t.defaultValues().then(N=>{wt(N,t.resetOptions),p.state.next({isLoading:!1})}),_removeUnmounted:P,_disableForm:ae,_subjects:p,_proxyFormState:d,get _fields(){return r},get _formValues(){return i},get _state(){return s},set _state(N){s=N},get _defaultValues(){return o},get _names(){return a},set _names(N){a=N},get _formState(){return n},get _options(){return t},set _options(N){t={...t,...N}}},subscribe:lt,trigger:se,register:de,handleSubmit:he,watch:ce,setValue:F,getValues:re,reset:wt,resetField:Ee,clearErrors:ee,unregister:je,setError:pe,setFocus:Rt,getFieldState:xe};return{...Ne,formControl:Ne}}const Zj=typeof window<"u"?Z.useLayoutEffect:Z.useEffect;function Cv(e={}){const t=Z.useRef(void 0),n=Z.useRef(void 0),[r,o]=Z.useState({isDirty:!1,isValidating:!1,isLoading:bn(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,isReady:!1,defaultValues:bn(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...e.formControl?e.formControl:Jj(e),formState:r},e.formControl&&e.defaultValues&&!bn(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions));const i=t.current.control;return i._options=e,Zj(()=>{const s=i._subscribe({formState:i._proxyFormState,callback:()=>o({...i._formState}),reRenderRoot:!0});return o(a=>({...a,isReady:!0})),i._formState.isReady=!0,s},[i]),Z.useEffect(()=>i._disableForm(e.disabled),[i,e.disabled]),Z.useEffect(()=>{e.mode&&(i._options.mode=e.mode),e.reValidateMode&&(i._options.reValidateMode=e.reValidateMode),e.errors&&!St(e.errors)&&i._setErrors(e.errors)},[i,e.errors,e.mode,e.reValidateMode]),Z.useEffect(()=>{e.shouldUnregister&&i._subjects.state.next({values:i._getWatch()})},[i,e.shouldUnregister]),Z.useEffect(()=>{if(i._proxyFormState.isDirty){const s=i._getDirty();s!==r.isDirty&&i._subjects.state.next({isDirty:s})}},[i,r.isDirty]),Z.useEffect(()=>{e.values&&!Vn(e.values,n.current)?(i._reset(e.values,i._options.resetOptions),n.current=e.values,o(s=>({...s}))):i._resetDefaultValues()},[i,e.values]),Z.useEffect(()=>{i._state.mount||(i._setValid(),i._state.mount=!0),i._state.watch&&(i._state.watch=!1,i._subjects.state.next({...i._formState})),i._removeUnmounted()}),t.current.formState=pv(r,i),t.current}function ml(e){const{label:t,name:n,control:r}=e;return r?u.jsx(gv,{name:n,control:r,defaultValue:"",render:({field:{onChange:o,value:i},fieldState:{error:s},formState:a})=>u.jsx(Fj,{id:`field-${n}`,onChange:o,value:i??"",label:t,variant:"outlined",className:"myForm",error:!!s,helperText:s==null?void 0:s.message})}):(console.error(`MyTextField: 'control' prop is required for field "${n}"`),null)}ml.propTypes={label:qo.string.isRequired,name:qo.string.isRequired,control:qo.object.isRequired};var Rp={},Sc={};const eR=Zn(iE);var sg;function Ev(){return sg||(sg=1,function(e){"use client";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.createSvgIcon}});var t=eR}(Sc)),Sc}var tR=vu;Object.defineProperty(Rp,"__esModule",{value:!0});var Nv=Rp.default=void 0,nR=tR(Ev()),rR=u;Nv=Rp.default=(0,nR.default)((0,rR.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"}),"Visibility");var Tp={},oR=vu;Object.defineProperty(Tp,"__esModule",{value:!0});var _v=Tp.default=void 0,iR=oR(Ev()),sR=u;_v=Tp.default=(0,iR.default)((0,sR.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7M2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2m4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3z"}),"VisibilityOff");function gl({label:e,name:t,control:n}){const[r,o]=v.useState(!1);if(!n)return console.error(`MyPassField: 'control' prop is required for field "${t}"`),null;const i=()=>o(a=>!a),s=a=>a.preventDefault();return u.jsx(gv,{name:t,control:n,defaultValue:"",render:({field:{onChange:a,value:l=""},fieldState:{error:c}})=>u.jsxs(ev,{variant:"outlined",className:"myForm",fullWidth:!0,error:!!c,children:[u.jsx(rv,{htmlFor:`outlined-adornment-password-${e}`,children:e}),u.jsx(Nu,{id:`outlined-adornment-password-${e}`,type:r?"text":"password",value:l,onChange:a,autoComplete:"new-password",endAdornment:u.jsx(k_,{position:"end",children:u.jsx(IE,{onClick:i,onMouseDown:s,edge:"end",children:r?u.jsx(_v,{}):u.jsx(Nv,{})})}),label:e}),u.jsx(tv,{children:c==null?void 0:c.message})]})})}gl.propTypes={label:qo.string.isRequired,name:qo.string.isRequired,control:qo.object.isRequired};function jv(e){const{label:t,type:n}=e;return u.jsx(EN,{type:n,variant:"contained",className:"myButton",children:t})}/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gs(){return gs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gs.apply(this,arguments)}var mr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(mr||(mr={}));const ag="popstate";function aR(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:s,hash:a}=r.location;return Id("",{pathname:i,search:s,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:xl(o)}return uR(t,n,null,e)}function Ze(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Rv(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function lR(){return Math.random().toString(36).substr(2,8)}function lg(e,t){return{usr:e.state,key:e.key,idx:t}}function Id(e,t,n,r){return n===void 0&&(n=null),gs({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?di(t):t,{state:n,key:t&&t.key||r||lR()})}function xl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function di(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function uR(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,s=o.history,a=mr.Pop,l=null,c=d();c==null&&(c=0,s.replaceState(gs({},s.state,{idx:c}),""));function d(){return(s.state||{idx:null}).idx}function f(){a=mr.Pop;let k=d(),g=k==null?null:k-c;c=k,l&&l({action:a,location:y.location,delta:g})}function p(k,g){a=mr.Push;let h=Id(y.location,k,g);c=d()+1;let m=lg(h,c),w=y.createHref(h);try{s.pushState(m,"",w)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;o.location.assign(w)}i&&l&&l({action:a,location:y.location,delta:1})}function b(k,g){a=mr.Replace;let h=Id(y.location,k,g);c=d();let m=lg(h,c),w=y.createHref(h);s.replaceState(m,"",w),i&&l&&l({action:a,location:y.location,delta:0})}function x(k){let g=o.location.origin!=="null"?o.location.origin:o.location.href,h=typeof k=="string"?k:xl(k);return h=h.replace(/ $/,"%20"),Ze(g,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,g)}let y={get action(){return a},get location(){return e(o,s)},listen(k){if(l)throw new Error("A history only accepts one active listener");return o.addEventListener(ag,f),l=k,()=>{o.removeEventListener(ag,f),l=null}},createHref(k){return t(o,k)},createURL:x,encodeLocation(k){let g=x(k);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:p,replace:b,go(k){return s.go(k)}};return y}var ug;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ug||(ug={}));function cR(e,t,n){return n===void 0&&(n="/"),dR(e,t,n)}function dR(e,t,n,r){let o=typeof t=="string"?di(t):t,i=Pp(o.pathname||"/",n);if(i==null)return null;let s=Tv(e);fR(s);let a=null;for(let l=0;a==null&&l<s.length;++l){let c=CR(i);a=wR(s[l],c)}return a}function Tv(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,s,a)=>{let l={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};l.relativePath.startsWith("/")&&(Ze(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=Cr([r,l.relativePath]),d=n.concat(l);i.children&&i.children.length>0&&(Ze(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Tv(i.children,t,d,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:vR(c,i.index),routesMeta:d})};return e.forEach((i,s)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))o(i,s);else for(let l of Pv(i.path))o(i,s,l)}),t}function Pv(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let s=Pv(r.join("/")),a=[];return a.push(...s.map(l=>l===""?i:[i,l].join("/"))),o&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function fR(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:bR(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const pR=/^:[\w-]+$/,hR=3,mR=2,gR=1,xR=10,yR=-2,cg=e=>e==="*";function vR(e,t){let n=e.split("/"),r=n.length;return n.some(cg)&&(r+=yR),t&&(r+=mR),n.filter(o=>!cg(o)).reduce((o,i)=>o+(pR.test(i)?hR:i===""?gR:xR),r)}function bR(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function wR(e,t,n){let{routesMeta:r}=e,o={},i="/",s=[];for(let a=0;a<r.length;++a){let l=r[a],c=a===r.length-1,d=i==="/"?t:t.slice(i.length)||"/",f=SR({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},d),p=l.route;if(!f)return null;Object.assign(o,f.params),s.push({params:o,pathname:Cr([i,f.pathname]),pathnameBase:jR(Cr([i,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(i=Cr([i,f.pathnameBase]))}return s}function SR(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=kR(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],s=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:p,isOptional:b}=d;if(p==="*"){let y=a[f]||"";s=i.slice(0,i.length-y.length).replace(/(.)\/+$/,"$1")}const x=a[f];return b&&!x?c[p]=void 0:c[p]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:s,pattern:e}}function kR(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Rv(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function CR(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Rv(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Pp(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function ER(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?di(e):e;return{pathname:n?n.startsWith("/")?n:NR(n,t):t,search:RR(r),hash:TR(o)}}function NR(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function kc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function _R(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Ov(e,t){let n=_R(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Fv(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=di(e):(o=gs({},e),Ze(!o.pathname||!o.pathname.includes("?"),kc("?","pathname","search",o)),Ze(!o.pathname||!o.pathname.includes("#"),kc("#","pathname","hash",o)),Ze(!o.search||!o.search.includes("#"),kc("#","search","hash",o)));let i=e===""||o.pathname==="",s=i?"/":o.pathname,a;if(s==null)a=n;else{let f=t.length-1;if(!r&&s.startsWith("..")){let p=s.split("/");for(;p[0]==="..";)p.shift(),f-=1;o.pathname=p.join("/")}a=f>=0?t[f]:"/"}let l=ER(o,a),c=s&&s!=="/"&&s.endsWith("/"),d=(i||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const Cr=e=>e.join("/").replace(/\/\/+/g,"/"),jR=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),RR=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,TR=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function PR(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const $v=["post","put","patch","delete"];new Set($v);const OR=["get",...$v];new Set(OR);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xs(){return xs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xs.apply(this,arguments)}const Op=v.createContext(null),FR=v.createContext(null),fo=v.createContext(null),ju=v.createContext(null),po=v.createContext({outlet:null,matches:[],isDataRoute:!1}),Av=v.createContext(null);function $R(e,t){let{relative:n}=t===void 0?{}:t;Fs()||Ze(!1);let{basename:r,navigator:o}=v.useContext(fo),{hash:i,pathname:s,search:a}=Iv(e,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:Cr([r,s])),o.createHref({pathname:l,search:a,hash:i})}function Fs(){return v.useContext(ju)!=null}function Ru(){return Fs()||Ze(!1),v.useContext(ju).location}function zv(e){v.useContext(fo).static||v.useLayoutEffect(e)}function $r(){let{isDataRoute:e}=v.useContext(po);return e?GR():AR()}function AR(){Fs()||Ze(!1);let e=v.useContext(Op),{basename:t,future:n,navigator:r}=v.useContext(fo),{matches:o}=v.useContext(po),{pathname:i}=Ru(),s=JSON.stringify(Ov(o,n.v7_relativeSplatPath)),a=v.useRef(!1);return zv(()=>{a.current=!0}),v.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=Fv(c,JSON.parse(s),i,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Cr([t,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[t,r,s,i,e])}function Iv(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=v.useContext(fo),{matches:o}=v.useContext(po),{pathname:i}=Ru(),s=JSON.stringify(Ov(o,r.v7_relativeSplatPath));return v.useMemo(()=>Fv(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function zR(e,t){return IR(e,t)}function IR(e,t,n,r){Fs()||Ze(!1);let{navigator:o,static:i}=v.useContext(fo),{matches:s}=v.useContext(po),a=s[s.length-1],l=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let d=Ru(),f;if(t){var p;let g=typeof t=="string"?di(t):t;c==="/"||(p=g.pathname)!=null&&p.startsWith(c)||Ze(!1),f=g}else f=d;let b=f.pathname||"/",x=b;if(c!=="/"){let g=c.replace(/^\//,"").split("/");x="/"+b.replace(/^\//,"").split("/").slice(g.length).join("/")}let y=cR(e,{pathname:x}),k=UR(y&&y.map(g=>Object.assign({},g,{params:Object.assign({},l,g.params),pathname:Cr([c,o.encodeLocation?o.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?c:Cr([c,o.encodeLocation?o.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),s,n,r);return t&&k?v.createElement(ju.Provider,{value:{location:xs({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:mr.Pop}},k):k}function MR(){let e=qR(),t=PR(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},t),n?v.createElement("pre",{style:o},n):null,null)}const LR=v.createElement(MR,null);class DR extends v.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?v.createElement(po.Provider,{value:this.props.routeContext},v.createElement(Av.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function BR(e){let{routeContext:t,match:n,children:r}=e,o=v.useContext(Op);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),v.createElement(po.Provider,{value:t},r)}function UR(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,a=(o=n)==null?void 0:o.errors;if(a!=null){let d=s.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||Ze(!1),s=s.slice(0,Math.min(s.length,d+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<s.length;d++){let f=s[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:p,errors:b}=n,x=f.route.loader&&p[f.route.id]===void 0&&(!b||b[f.route.id]===void 0);if(f.route.lazy||x){l=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((d,f,p)=>{let b,x=!1,y=null,k=null;n&&(b=a&&f.route.id?a[f.route.id]:void 0,y=f.route.errorElement||LR,l&&(c<0&&p===0?(KR("route-fallback"),x=!0,k=null):c===p&&(x=!0,k=f.route.hydrateFallbackElement||null)));let g=t.concat(s.slice(0,p+1)),h=()=>{let m;return b?m=y:x?m=k:f.route.Component?m=v.createElement(f.route.Component,null):f.route.element?m=f.route.element:m=d,v.createElement(BR,{match:f,routeContext:{outlet:d,matches:g,isDataRoute:n!=null},children:m})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?v.createElement(DR,{location:n.location,revalidation:n.revalidation,component:y,error:b,children:h(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):h()},null)}var Mv=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Mv||{}),Lv=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Lv||{});function WR(e){let t=v.useContext(Op);return t||Ze(!1),t}function VR(e){let t=v.useContext(FR);return t||Ze(!1),t}function HR(e){let t=v.useContext(po);return t||Ze(!1),t}function Dv(e){let t=HR(),n=t.matches[t.matches.length-1];return n.route.id||Ze(!1),n.route.id}function qR(){var e;let t=v.useContext(Av),n=VR(),r=Dv();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function GR(){let{router:e}=WR(Mv.UseNavigateStable),t=Dv(Lv.UseNavigateStable),n=v.useRef(!1);return zv(()=>{n.current=!0}),v.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,xs({fromRouteId:t},i)))},[e,t])}const dg={};function KR(e,t,n){dg[e]||(dg[e]=!0)}function QR(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function tt(e){Ze(!1)}function XR(e){let{basename:t="/",children:n=null,location:r,navigationType:o=mr.Pop,navigator:i,static:s=!1,future:a}=e;Fs()&&Ze(!1);let l=t.replace(/^\/*/,"/"),c=v.useMemo(()=>({basename:l,navigator:i,static:s,future:xs({v7_relativeSplatPath:!1},a)}),[l,a,i,s]);typeof r=="string"&&(r=di(r));let{pathname:d="/",search:f="",hash:p="",state:b=null,key:x="default"}=r,y=v.useMemo(()=>{let k=Pp(d,l);return k==null?null:{location:{pathname:k,search:f,hash:p,state:b,key:x},navigationType:o}},[l,d,f,p,b,x,o]);return y==null?null:v.createElement(fo.Provider,{value:c},v.createElement(ju.Provider,{children:n,value:y}))}function YR(e){let{children:t,location:n}=e;return zR(Md(t),n)}new Promise(()=>{});function Md(e,t){t===void 0&&(t=[]);let n=[];return v.Children.forEach(e,(r,o)=>{if(!v.isValidElement(r))return;let i=[...t,o];if(r.type===v.Fragment){n.push.apply(n,Md(r.props.children,i));return}r.type!==tt&&Ze(!1),!r.props.index||!r.props.children||Ze(!1);let s={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Md(r.props.children,i)),n.push(s)}),n}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ld(){return Ld=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ld.apply(this,arguments)}function JR(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function ZR(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function e3(e,t){return e.button===0&&(!t||t==="_self")&&!ZR(e)}const t3=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],n3="6";try{window.__reactRouterVersion=n3}catch{}const r3="startTransition",fg=Pa[r3];function o3(e){let{basename:t,children:n,future:r,window:o}=e,i=v.useRef();i.current==null&&(i.current=aR({window:o,v5Compat:!0}));let s=i.current,[a,l]=v.useState({action:s.action,location:s.location}),{v7_startTransition:c}=r||{},d=v.useCallback(f=>{c&&fg?fg(()=>l(f)):l(f)},[l,c]);return v.useLayoutEffect(()=>s.listen(d),[s,d]),v.useEffect(()=>QR(r),[r]),v.createElement(XR,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const i3=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",s3=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,sn=v.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:s,state:a,target:l,to:c,preventScrollReset:d,viewTransition:f}=t,p=JR(t,t3),{basename:b}=v.useContext(fo),x,y=!1;if(typeof c=="string"&&s3.test(c)&&(x=c,i3))try{let m=new URL(window.location.href),w=c.startsWith("//")?new URL(m.protocol+c):new URL(c),C=Pp(w.pathname,b);w.origin===m.origin&&C!=null?c=C+w.search+w.hash:y=!0}catch{}let k=$R(c,{relative:o}),g=a3(c,{replace:s,state:a,target:l,preventScrollReset:d,relative:o,viewTransition:f});function h(m){r&&r(m),m.defaultPrevented||g(m)}return v.createElement("a",Ld({},p,{href:x||k,onClick:y||i?r:h,ref:n,target:l}))});var pg;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(pg||(pg={}));var hg;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(hg||(hg={}));function a3(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:s,viewTransition:a}=t===void 0?{}:t,l=$r(),c=Ru(),d=Iv(e,{relative:s});return v.useCallback(f=>{if(e3(f,n)){f.preventDefault();let p=r!==void 0?r:xl(c)===xl(d);l(e,{replace:p,state:o,preventScrollReset:i,relative:s,viewTransition:a})}},[c,l,d,r,o,n,e,i,s,a])}function Bv(e,t){return function(){return e.apply(t,arguments)}}const{toString:l3}=Object.prototype,{getPrototypeOf:Fp}=Object,{iterator:Tu,toStringTag:Uv}=Symbol,Pu=(e=>t=>{const n=l3.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),En=e=>(e=e.toLowerCase(),t=>Pu(t)===e),Ou=e=>t=>typeof t===e,{isArray:fi}=Array,ys=Ou("undefined");function u3(e){return e!==null&&!ys(e)&&e.constructor!==null&&!ys(e.constructor)&&Mt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Wv=En("ArrayBuffer");function c3(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Wv(e.buffer),t}const d3=Ou("string"),Mt=Ou("function"),Vv=Ou("number"),Fu=e=>e!==null&&typeof e=="object",f3=e=>e===!0||e===!1,Na=e=>{if(Pu(e)!=="object")return!1;const t=Fp(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Uv in e)&&!(Tu in e)},p3=En("Date"),h3=En("File"),m3=En("Blob"),g3=En("FileList"),x3=e=>Fu(e)&&Mt(e.pipe),y3=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||Mt(e.append)&&((t=Pu(e))==="formdata"||t==="object"&&Mt(e.toString)&&e.toString()==="[object FormData]"))},v3=En("URLSearchParams"),[b3,w3,S3,k3]=["ReadableStream","Request","Response","Headers"].map(En),C3=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function $s(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),fi(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),s=i.length;let a;for(r=0;r<s;r++)a=i[r],t.call(null,e[a],a,e)}}function Hv(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const Kr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,qv=e=>!ys(e)&&e!==Kr;function Dd(){const{caseless:e}=qv(this)&&this||{},t={},n=(r,o)=>{const i=e&&Hv(t,o)||o;Na(t[i])&&Na(r)?t[i]=Dd(t[i],r):Na(r)?t[i]=Dd({},r):fi(r)?t[i]=r.slice():t[i]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&$s(arguments[r],n);return t}const E3=(e,t,n,{allOwnKeys:r}={})=>($s(t,(o,i)=>{n&&Mt(o)?e[i]=Bv(o,n):e[i]=o},{allOwnKeys:r}),e),N3=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),_3=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},j3=(e,t,n,r)=>{let o,i,s;const a={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)s=o[i],(!r||r(s,e,t))&&!a[s]&&(t[s]=e[s],a[s]=!0);e=n!==!1&&Fp(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},R3=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},T3=e=>{if(!e)return null;if(fi(e))return e;let t=e.length;if(!Vv(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},P3=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Fp(Uint8Array)),O3=(e,t)=>{const r=(e&&e[Tu]).call(e);let o;for(;(o=r.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},F3=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},$3=En("HTMLFormElement"),A3=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),mg=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),z3=En("RegExp"),Gv=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};$s(n,(o,i)=>{let s;(s=t(o,i,e))!==!1&&(r[i]=s||o)}),Object.defineProperties(e,r)},I3=e=>{Gv(e,(t,n)=>{if(Mt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(Mt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},M3=(e,t)=>{const n={},r=o=>{o.forEach(i=>{n[i]=!0})};return fi(e)?r(e):r(String(e).split(t)),n},L3=()=>{},D3=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function B3(e){return!!(e&&Mt(e.append)&&e[Uv]==="FormData"&&e[Tu])}const U3=e=>{const t=new Array(10),n=(r,o)=>{if(Fu(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const i=fi(r)?[]:{};return $s(r,(s,a)=>{const l=n(s,o+1);!ys(l)&&(i[a]=l)}),t[o]=void 0,i}}return r};return n(e,0)},W3=En("AsyncFunction"),V3=e=>e&&(Fu(e)||Mt(e))&&Mt(e.then)&&Mt(e.catch),Kv=((e,t)=>e?setImmediate:t?((n,r)=>(Kr.addEventListener("message",({source:o,data:i})=>{o===Kr&&i===n&&r.length&&r.shift()()},!1),o=>{r.push(o),Kr.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Mt(Kr.postMessage)),H3=typeof queueMicrotask<"u"?queueMicrotask.bind(Kr):typeof process<"u"&&process.nextTick||Kv,q3=e=>e!=null&&Mt(e[Tu]),$={isArray:fi,isArrayBuffer:Wv,isBuffer:u3,isFormData:y3,isArrayBufferView:c3,isString:d3,isNumber:Vv,isBoolean:f3,isObject:Fu,isPlainObject:Na,isReadableStream:b3,isRequest:w3,isResponse:S3,isHeaders:k3,isUndefined:ys,isDate:p3,isFile:h3,isBlob:m3,isRegExp:z3,isFunction:Mt,isStream:x3,isURLSearchParams:v3,isTypedArray:P3,isFileList:g3,forEach:$s,merge:Dd,extend:E3,trim:C3,stripBOM:N3,inherits:_3,toFlatObject:j3,kindOf:Pu,kindOfTest:En,endsWith:R3,toArray:T3,forEachEntry:O3,matchAll:F3,isHTMLForm:$3,hasOwnProperty:mg,hasOwnProp:mg,reduceDescriptors:Gv,freezeMethods:I3,toObjectSet:M3,toCamelCase:A3,noop:L3,toFiniteNumber:D3,findKey:Hv,global:Kr,isContextDefined:qv,isSpecCompliantForm:B3,toJSONObject:U3,isAsyncFn:W3,isThenable:V3,setImmediate:Kv,asap:H3,isIterable:q3};function ie(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o,this.status=o.status?o.status:null)}$.inherits(ie,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:$.toJSONObject(this.config),code:this.code,status:this.status}}});const Qv=ie.prototype,Xv={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Xv[e]={value:e}});Object.defineProperties(ie,Xv);Object.defineProperty(Qv,"isAxiosError",{value:!0});ie.from=(e,t,n,r,o,i)=>{const s=Object.create(Qv);return $.toFlatObject(e,s,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),ie.call(s,e.message,t,n,r,o),s.cause=e,s.name=e.name,i&&Object.assign(s,i),s};const G3=null;function Bd(e){return $.isPlainObject(e)||$.isArray(e)}function Yv(e){return $.endsWith(e,"[]")?e.slice(0,-2):e}function gg(e,t,n){return e?e.concat(t).map(function(o,i){return o=Yv(o),!n&&i?"["+o+"]":o}).join(n?".":""):t}function K3(e){return $.isArray(e)&&!e.some(Bd)}const Q3=$.toFlatObject($,{},null,function(t){return/^is[A-Z]/.test(t)});function $u(e,t,n){if(!$.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=$.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,k){return!$.isUndefined(k[y])});const r=n.metaTokens,o=n.visitor||d,i=n.dots,s=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&$.isSpecCompliantForm(t);if(!$.isFunction(o))throw new TypeError("visitor must be a function");function c(x){if(x===null)return"";if($.isDate(x))return x.toISOString();if(!l&&$.isBlob(x))throw new ie("Blob is not supported. Use a Buffer instead.");return $.isArrayBuffer(x)||$.isTypedArray(x)?l&&typeof Blob=="function"?new Blob([x]):Buffer.from(x):x}function d(x,y,k){let g=x;if(x&&!k&&typeof x=="object"){if($.endsWith(y,"{}"))y=r?y:y.slice(0,-2),x=JSON.stringify(x);else if($.isArray(x)&&K3(x)||($.isFileList(x)||$.endsWith(y,"[]"))&&(g=$.toArray(x)))return y=Yv(y),g.forEach(function(m,w){!($.isUndefined(m)||m===null)&&t.append(s===!0?gg([y],w,i):s===null?y:y+"[]",c(m))}),!1}return Bd(x)?!0:(t.append(gg(k,y,i),c(x)),!1)}const f=[],p=Object.assign(Q3,{defaultVisitor:d,convertValue:c,isVisitable:Bd});function b(x,y){if(!$.isUndefined(x)){if(f.indexOf(x)!==-1)throw Error("Circular reference detected in "+y.join("."));f.push(x),$.forEach(x,function(g,h){(!($.isUndefined(g)||g===null)&&o.call(t,g,$.isString(h)?h.trim():h,y,p))===!0&&b(g,y?y.concat(h):[h])}),f.pop()}}if(!$.isObject(e))throw new TypeError("data must be an object");return b(e),t}function xg(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function $p(e,t){this._pairs=[],e&&$u(e,this,t)}const Jv=$p.prototype;Jv.append=function(t,n){this._pairs.push([t,n])};Jv.toString=function(t){const n=t?function(r){return t.call(this,r,xg)}:xg;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function X3(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Zv(e,t,n){if(!t)return e;const r=n&&n.encode||X3;$.isFunction(n)&&(n={serialize:n});const o=n&&n.serialize;let i;if(o?i=o(t,n):i=$.isURLSearchParams(t)?t.toString():new $p(t,n).toString(r),i){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class yg{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){$.forEach(this.handlers,function(r){r!==null&&t(r)})}}const eb={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Y3=typeof URLSearchParams<"u"?URLSearchParams:$p,J3=typeof FormData<"u"?FormData:null,Z3=typeof Blob<"u"?Blob:null,eT={isBrowser:!0,classes:{URLSearchParams:Y3,FormData:J3,Blob:Z3},protocols:["http","https","file","blob","url","data"]},Ap=typeof window<"u"&&typeof document<"u",Ud=typeof navigator=="object"&&navigator||void 0,tT=Ap&&(!Ud||["ReactNative","NativeScript","NS"].indexOf(Ud.product)<0),nT=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",rT=Ap&&window.location.href||"http://localhost",oT=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Ap,hasStandardBrowserEnv:tT,hasStandardBrowserWebWorkerEnv:nT,navigator:Ud,origin:rT},Symbol.toStringTag,{value:"Module"})),vt={...oT,...eT};function iT(e,t){return $u(e,new vt.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,i){return vt.isNode&&$.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function sT(e){return $.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function aT(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function tb(e){function t(n,r,o,i){let s=n[i++];if(s==="__proto__")return!0;const a=Number.isFinite(+s),l=i>=n.length;return s=!s&&$.isArray(o)?o.length:s,l?($.hasOwnProp(o,s)?o[s]=[o[s],r]:o[s]=r,!a):((!o[s]||!$.isObject(o[s]))&&(o[s]=[]),t(n,r,o[s],i)&&$.isArray(o[s])&&(o[s]=aT(o[s])),!a)}if($.isFormData(e)&&$.isFunction(e.entries)){const n={};return $.forEachEntry(e,(r,o)=>{t(sT(r),o,n,0)}),n}return null}function lT(e,t,n){if($.isString(e))try{return(t||JSON.parse)(e),$.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const As={transitional:eb,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,i=$.isObject(t);if(i&&$.isHTMLForm(t)&&(t=new FormData(t)),$.isFormData(t))return o?JSON.stringify(tb(t)):t;if($.isArrayBuffer(t)||$.isBuffer(t)||$.isStream(t)||$.isFile(t)||$.isBlob(t)||$.isReadableStream(t))return t;if($.isArrayBufferView(t))return t.buffer;if($.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return iT(t,this.formSerializer).toString();if((a=$.isFileList(t))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return $u(a?{"files[]":t}:t,l&&new l,this.formSerializer)}}return i||o?(n.setContentType("application/json",!1),lT(t)):t}],transformResponse:[function(t){const n=this.transitional||As.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if($.isResponse(t)||$.isReadableStream(t))return t;if(t&&$.isString(t)&&(r&&!this.responseType||o)){const s=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(a){if(s)throw a.name==="SyntaxError"?ie.from(a,ie.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:vt.classes.FormData,Blob:vt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};$.forEach(["delete","get","head","post","put","patch"],e=>{As.headers[e]={}});const uT=$.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),cT=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(s){o=s.indexOf(":"),n=s.substring(0,o).trim().toLowerCase(),r=s.substring(o+1).trim(),!(!n||t[n]&&uT[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},vg=Symbol("internals");function Ri(e){return e&&String(e).trim().toLowerCase()}function _a(e){return e===!1||e==null?e:$.isArray(e)?e.map(_a):String(e)}function dT(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const fT=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Cc(e,t,n,r,o){if($.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!$.isString(t)){if($.isString(r))return t.indexOf(r)!==-1;if($.isRegExp(r))return r.test(t)}}function pT(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function hT(e,t){const n=$.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,i,s){return this[r].call(this,t,o,i,s)},configurable:!0})})}let Lt=class{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function i(a,l,c){const d=Ri(l);if(!d)throw new Error("header name must be a non-empty string");const f=$.findKey(o,d);(!f||o[f]===void 0||c===!0||c===void 0&&o[f]!==!1)&&(o[f||l]=_a(a))}const s=(a,l)=>$.forEach(a,(c,d)=>i(c,d,l));if($.isPlainObject(t)||t instanceof this.constructor)s(t,n);else if($.isString(t)&&(t=t.trim())&&!fT(t))s(cT(t),n);else if($.isObject(t)&&$.isIterable(t)){let a={},l,c;for(const d of t){if(!$.isArray(d))throw TypeError("Object iterator must return a key-value pair");a[c=d[0]]=(l=a[c])?$.isArray(l)?[...l,d[1]]:[l,d[1]]:d[1]}s(a,n)}else t!=null&&i(n,t,r);return this}get(t,n){if(t=Ri(t),t){const r=$.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return dT(o);if($.isFunction(n))return n.call(this,o,r);if($.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Ri(t),t){const r=$.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Cc(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function i(s){if(s=Ri(s),s){const a=$.findKey(r,s);a&&(!n||Cc(r,r[a],a,n))&&(delete r[a],o=!0)}}return $.isArray(t)?t.forEach(i):i(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const i=n[r];(!t||Cc(this,this[i],i,t,!0))&&(delete this[i],o=!0)}return o}normalize(t){const n=this,r={};return $.forEach(this,(o,i)=>{const s=$.findKey(r,i);if(s){n[s]=_a(o),delete n[i];return}const a=t?pT(i):String(i).trim();a!==i&&delete n[i],n[a]=_a(o),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return $.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&$.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[vg]=this[vg]={accessors:{}}).accessors,o=this.prototype;function i(s){const a=Ri(s);r[a]||(hT(o,s),r[a]=!0)}return $.isArray(t)?t.forEach(i):i(t),this}};Lt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);$.reduceDescriptors(Lt.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});$.freezeMethods(Lt);function Ec(e,t){const n=this||As,r=t||n,o=Lt.from(r.headers);let i=r.data;return $.forEach(e,function(a){i=a.call(n,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function nb(e){return!!(e&&e.__CANCEL__)}function pi(e,t,n){ie.call(this,e??"canceled",ie.ERR_CANCELED,t,n),this.name="CanceledError"}$.inherits(pi,ie,{__CANCEL__:!0});function rb(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new ie("Request failed with status code "+n.status,[ie.ERR_BAD_REQUEST,ie.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function mT(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function gT(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,i=0,s;return t=t!==void 0?t:1e3,function(l){const c=Date.now(),d=r[i];s||(s=c),n[o]=l,r[o]=c;let f=i,p=0;for(;f!==o;)p+=n[f++],f=f%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),c-s<t)return;const b=d&&c-d;return b?Math.round(p*1e3/b):void 0}}function xT(e,t){let n=0,r=1e3/t,o,i;const s=(c,d=Date.now())=>{n=d,o=null,i&&(clearTimeout(i),i=null),e.apply(null,c)};return[(...c)=>{const d=Date.now(),f=d-n;f>=r?s(c,d):(o=c,i||(i=setTimeout(()=>{i=null,s(o)},r-f)))},()=>o&&s(o)]}const yl=(e,t,n=3)=>{let r=0;const o=gT(50,250);return xT(i=>{const s=i.loaded,a=i.lengthComputable?i.total:void 0,l=s-r,c=o(l),d=s<=a;r=s;const f={loaded:s,total:a,progress:a?s/a:void 0,bytes:l,rate:c||void 0,estimated:c&&a&&d?(a-s)/c:void 0,event:i,lengthComputable:a!=null,[t?"download":"upload"]:!0};e(f)},n)},bg=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},wg=e=>(...t)=>$.asap(()=>e(...t)),yT=vt.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,vt.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(vt.origin),vt.navigator&&/(msie|trident)/i.test(vt.navigator.userAgent)):()=>!0,vT=vt.hasStandardBrowserEnv?{write(e,t,n,r,o,i){const s=[e+"="+encodeURIComponent(t)];$.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),$.isString(r)&&s.push("path="+r),$.isString(o)&&s.push("domain="+o),i===!0&&s.push("secure"),document.cookie=s.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function bT(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function wT(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function ob(e,t,n){let r=!bT(t);return e&&(r||n==!1)?wT(e,t):t}const Sg=e=>e instanceof Lt?{...e}:e;function ao(e,t){t=t||{};const n={};function r(c,d,f,p){return $.isPlainObject(c)&&$.isPlainObject(d)?$.merge.call({caseless:p},c,d):$.isPlainObject(d)?$.merge({},d):$.isArray(d)?d.slice():d}function o(c,d,f,p){if($.isUndefined(d)){if(!$.isUndefined(c))return r(void 0,c,f,p)}else return r(c,d,f,p)}function i(c,d){if(!$.isUndefined(d))return r(void 0,d)}function s(c,d){if($.isUndefined(d)){if(!$.isUndefined(c))return r(void 0,c)}else return r(void 0,d)}function a(c,d,f){if(f in t)return r(c,d);if(f in e)return r(void 0,c)}const l={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(c,d,f)=>o(Sg(c),Sg(d),f,!0)};return $.forEach(Object.keys(Object.assign({},e,t)),function(d){const f=l[d]||o,p=f(e[d],t[d],d);$.isUndefined(p)&&f!==a||(n[d]=p)}),n}const ib=e=>{const t=ao({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:o,xsrfCookieName:i,headers:s,auth:a}=t;t.headers=s=Lt.from(s),t.url=Zv(ob(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),a&&s.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let l;if($.isFormData(n)){if(vt.hasStandardBrowserEnv||vt.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if((l=s.getContentType())!==!1){const[c,...d]=l?l.split(";").map(f=>f.trim()).filter(Boolean):[];s.setContentType([c||"multipart/form-data",...d].join("; "))}}if(vt.hasStandardBrowserEnv&&(r&&$.isFunction(r)&&(r=r(t)),r||r!==!1&&yT(t.url))){const c=o&&i&&vT.read(i);c&&s.set(o,c)}return t},ST=typeof XMLHttpRequest<"u",kT=ST&&function(e){return new Promise(function(n,r){const o=ib(e);let i=o.data;const s=Lt.from(o.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:c}=o,d,f,p,b,x;function y(){b&&b(),x&&x(),o.cancelToken&&o.cancelToken.unsubscribe(d),o.signal&&o.signal.removeEventListener("abort",d)}let k=new XMLHttpRequest;k.open(o.method.toUpperCase(),o.url,!0),k.timeout=o.timeout;function g(){if(!k)return;const m=Lt.from("getAllResponseHeaders"in k&&k.getAllResponseHeaders()),C={data:!a||a==="text"||a==="json"?k.responseText:k.response,status:k.status,statusText:k.statusText,headers:m,config:e,request:k};rb(function(E){n(E),y()},function(E){r(E),y()},C),k=null}"onloadend"in k?k.onloadend=g:k.onreadystatechange=function(){!k||k.readyState!==4||k.status===0&&!(k.responseURL&&k.responseURL.indexOf("file:")===0)||setTimeout(g)},k.onabort=function(){k&&(r(new ie("Request aborted",ie.ECONNABORTED,e,k)),k=null)},k.onerror=function(){r(new ie("Network Error",ie.ERR_NETWORK,e,k)),k=null},k.ontimeout=function(){let w=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const C=o.transitional||eb;o.timeoutErrorMessage&&(w=o.timeoutErrorMessage),r(new ie(w,C.clarifyTimeoutError?ie.ETIMEDOUT:ie.ECONNABORTED,e,k)),k=null},i===void 0&&s.setContentType(null),"setRequestHeader"in k&&$.forEach(s.toJSON(),function(w,C){k.setRequestHeader(C,w)}),$.isUndefined(o.withCredentials)||(k.withCredentials=!!o.withCredentials),a&&a!=="json"&&(k.responseType=o.responseType),c&&([p,x]=yl(c,!0),k.addEventListener("progress",p)),l&&k.upload&&([f,b]=yl(l),k.upload.addEventListener("progress",f),k.upload.addEventListener("loadend",b)),(o.cancelToken||o.signal)&&(d=m=>{k&&(r(!m||m.type?new pi(null,e,k):m),k.abort(),k=null)},o.cancelToken&&o.cancelToken.subscribe(d),o.signal&&(o.signal.aborted?d():o.signal.addEventListener("abort",d)));const h=mT(o.url);if(h&&vt.protocols.indexOf(h)===-1){r(new ie("Unsupported protocol "+h+":",ie.ERR_BAD_REQUEST,e));return}k.send(i||null)})},CT=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,o;const i=function(c){if(!o){o=!0,a();const d=c instanceof Error?c:this.reason;r.abort(d instanceof ie?d:new pi(d instanceof Error?d.message:d))}};let s=t&&setTimeout(()=>{s=null,i(new ie(`timeout ${t} of ms exceeded`,ie.ETIMEDOUT))},t);const a=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach(c=>{c.unsubscribe?c.unsubscribe(i):c.removeEventListener("abort",i)}),e=null)};e.forEach(c=>c.addEventListener("abort",i));const{signal:l}=r;return l.unsubscribe=()=>$.asap(a),l}},ET=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,o;for(;r<n;)o=r+t,yield e.slice(r,o),r=o},NT=async function*(e,t){for await(const n of _T(e))yield*ET(n,t)},_T=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},kg=(e,t,n,r)=>{const o=NT(e,t);let i=0,s,a=l=>{s||(s=!0,r&&r(l))};return new ReadableStream({async pull(l){try{const{done:c,value:d}=await o.next();if(c){a(),l.close();return}let f=d.byteLength;if(n){let p=i+=f;n(p)}l.enqueue(new Uint8Array(d))}catch(c){throw a(c),c}},cancel(l){return a(l),o.return()}},{highWaterMark:2})},Au=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",sb=Au&&typeof ReadableStream=="function",jT=Au&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),ab=(e,...t)=>{try{return!!e(...t)}catch{return!1}},RT=sb&&ab(()=>{let e=!1;const t=new Request(vt.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),Cg=64*1024,Wd=sb&&ab(()=>$.isReadableStream(new Response("").body)),vl={stream:Wd&&(e=>e.body)};Au&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!vl[t]&&(vl[t]=$.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new ie(`Response type '${t}' is not supported`,ie.ERR_NOT_SUPPORT,r)})})})(new Response);const TT=async e=>{if(e==null)return 0;if($.isBlob(e))return e.size;if($.isSpecCompliantForm(e))return(await new Request(vt.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if($.isArrayBufferView(e)||$.isArrayBuffer(e))return e.byteLength;if($.isURLSearchParams(e)&&(e=e+""),$.isString(e))return(await jT(e)).byteLength},PT=async(e,t)=>{const n=$.toFiniteNumber(e.getContentLength());return n??TT(t)},OT=Au&&(async e=>{let{url:t,method:n,data:r,signal:o,cancelToken:i,timeout:s,onDownloadProgress:a,onUploadProgress:l,responseType:c,headers:d,withCredentials:f="same-origin",fetchOptions:p}=ib(e);c=c?(c+"").toLowerCase():"text";let b=CT([o,i&&i.toAbortSignal()],s),x;const y=b&&b.unsubscribe&&(()=>{b.unsubscribe()});let k;try{if(l&&RT&&n!=="get"&&n!=="head"&&(k=await PT(d,r))!==0){let C=new Request(t,{method:"POST",body:r,duplex:"half"}),S;if($.isFormData(r)&&(S=C.headers.get("content-type"))&&d.setContentType(S),C.body){const[E,j]=bg(k,yl(wg(l)));r=kg(C.body,Cg,E,j)}}$.isString(f)||(f=f?"include":"omit");const g="credentials"in Request.prototype;x=new Request(t,{...p,signal:b,method:n.toUpperCase(),headers:d.normalize().toJSON(),body:r,duplex:"half",credentials:g?f:void 0});let h=await fetch(x);const m=Wd&&(c==="stream"||c==="response");if(Wd&&(a||m&&y)){const C={};["status","statusText","headers"].forEach(A=>{C[A]=h[A]});const S=$.toFiniteNumber(h.headers.get("content-length")),[E,j]=a&&bg(S,yl(wg(a),!0))||[];h=new Response(kg(h.body,Cg,E,()=>{j&&j(),y&&y()}),C)}c=c||"text";let w=await vl[$.findKey(vl,c)||"text"](h,e);return!m&&y&&y(),await new Promise((C,S)=>{rb(C,S,{data:w,headers:Lt.from(h.headers),status:h.status,statusText:h.statusText,config:e,request:x})})}catch(g){throw y&&y(),g&&g.name==="TypeError"&&/Load failed|fetch/i.test(g.message)?Object.assign(new ie("Network Error",ie.ERR_NETWORK,e,x),{cause:g.cause||g}):ie.from(g,g&&g.code,e,x)}}),Vd={http:G3,xhr:kT,fetch:OT};$.forEach(Vd,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Eg=e=>`- ${e}`,FT=e=>$.isFunction(e)||e===null||e===!1,lb={getAdapter:e=>{e=$.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let i=0;i<t;i++){n=e[i];let s;if(r=n,!FT(n)&&(r=Vd[(s=String(n)).toLowerCase()],r===void 0))throw new ie(`Unknown adapter '${s}'`);if(r)break;o[s||"#"+i]=r}if(!r){const i=Object.entries(o).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let s=t?i.length>1?`since :
`+i.map(Eg).join(`
`):" "+Eg(i[0]):"as no adapter specified";throw new ie("There is no suitable adapter to dispatch the request "+s,"ERR_NOT_SUPPORT")}return r},adapters:Vd};function Nc(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new pi(null,e)}function Ng(e){return Nc(e),e.headers=Lt.from(e.headers),e.data=Ec.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),lb.getAdapter(e.adapter||As.adapter)(e).then(function(r){return Nc(e),r.data=Ec.call(e,e.transformResponse,r),r.headers=Lt.from(r.headers),r},function(r){return nb(r)||(Nc(e),r&&r.response&&(r.response.data=Ec.call(e,e.transformResponse,r.response),r.response.headers=Lt.from(r.response.headers))),Promise.reject(r)})}const ub="1.9.0",zu={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{zu[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const _g={};zu.transitional=function(t,n,r){function o(i,s){return"[Axios v"+ub+"] Transitional option '"+i+"'"+s+(r?". "+r:"")}return(i,s,a)=>{if(t===!1)throw new ie(o(s," has been removed"+(n?" in "+n:"")),ie.ERR_DEPRECATED);return n&&!_g[s]&&(_g[s]=!0,console.warn(o(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,s,a):!0}};zu.spelling=function(t){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function $T(e,t,n){if(typeof e!="object")throw new ie("options must be an object",ie.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],s=t[i];if(s){const a=e[i],l=a===void 0||s(a,i,e);if(l!==!0)throw new ie("option "+i+" must be "+l,ie.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ie("Unknown option "+i,ie.ERR_BAD_OPTION)}}const ja={assertOptions:$T,validators:zu},_n=ja.validators;let Zr=class{constructor(t){this.defaults=t||{},this.interceptors={request:new yg,response:new yg}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let o={};Error.captureStackTrace?Error.captureStackTrace(o):o=new Error;const i=o.stack?o.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=ao(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:i}=n;r!==void 0&&ja.assertOptions(r,{silentJSONParsing:_n.transitional(_n.boolean),forcedJSONParsing:_n.transitional(_n.boolean),clarifyTimeoutError:_n.transitional(_n.boolean)},!1),o!=null&&($.isFunction(o)?n.paramsSerializer={serialize:o}:ja.assertOptions(o,{encode:_n.function,serialize:_n.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),ja.assertOptions(n,{baseUrl:_n.spelling("baseURL"),withXsrfToken:_n.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s=i&&$.merge(i.common,i[n.method]);i&&$.forEach(["delete","get","head","post","put","patch","common"],x=>{delete i[x]}),n.headers=Lt.concat(s,i);const a=[];let l=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(l=l&&y.synchronous,a.unshift(y.fulfilled,y.rejected))});const c=[];this.interceptors.response.forEach(function(y){c.push(y.fulfilled,y.rejected)});let d,f=0,p;if(!l){const x=[Ng.bind(this),void 0];for(x.unshift.apply(x,a),x.push.apply(x,c),p=x.length,d=Promise.resolve(n);f<p;)d=d.then(x[f++],x[f++]);return d}p=a.length;let b=n;for(f=0;f<p;){const x=a[f++],y=a[f++];try{b=x(b)}catch(k){y.call(this,k);break}}try{d=Ng.call(this,b)}catch(x){return Promise.reject(x)}for(f=0,p=c.length;f<p;)d=d.then(c[f++],c[f++]);return d}getUri(t){t=ao(this.defaults,t);const n=ob(t.baseURL,t.url,t.allowAbsoluteUrls);return Zv(n,t.params,t.paramsSerializer)}};$.forEach(["delete","get","head","options"],function(t){Zr.prototype[t]=function(n,r){return this.request(ao(r||{},{method:t,url:n,data:(r||{}).data}))}});$.forEach(["post","put","patch"],function(t){function n(r){return function(i,s,a){return this.request(ao(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:s}))}}Zr.prototype[t]=n(),Zr.prototype[t+"Form"]=n(!0)});let AT=class cb{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(o=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](o);r._listeners=null}),this.promise.then=o=>{let i;const s=new Promise(a=>{r.subscribe(a),i=a}).then(o);return s.cancel=function(){r.unsubscribe(i)},s},t(function(i,s,a){r.reason||(r.reason=new pi(i,s,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new cb(function(o){t=o}),cancel:t}}};function zT(e){return function(n){return e.apply(null,n)}}function IT(e){return $.isObject(e)&&e.isAxiosError===!0}const Hd={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Hd).forEach(([e,t])=>{Hd[t]=e});function db(e){const t=new Zr(e),n=Bv(Zr.prototype.request,t);return $.extend(n,Zr.prototype,t,{allOwnKeys:!0}),$.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return db(ao(e,o))},n}const He=db(As);He.Axios=Zr;He.CanceledError=pi;He.CancelToken=AT;He.isCancel=nb;He.VERSION=ub;He.toFormData=$u;He.AxiosError=ie;He.Cancel=He.CanceledError;He.all=function(t){return Promise.all(t)};He.spread=zT;He.isAxiosError=IT;He.mergeConfig=ao;He.AxiosHeaders=Lt;He.formToJSON=e=>tb($.isHTMLForm(e)?new FormData(e):e);He.getAdapter=lb.getAdapter;He.HttpStatusCode=Hd;He.default=He;const{Axios:o4,AxiosError:i4,CanceledError:s4,isCancel:a4,CancelToken:l4,VERSION:u4,all:c4,Cancel:d4,isAxiosError:f4,spread:p4,toFormData:h4,AxiosHeaders:m4,HttpStatusCode:g4,formToJSON:x4,getAdapter:y4,mergeConfig:v4}=He,Iu=He.create({baseURL:"/api/",timeout:5e3,headers:{"Content-Type":"application/json",Accept:"application/json","X-Requested-With":"XMLHttpRequest"},withCredentials:!0});Iu.interceptors.request.use(async e=>{const t=localStorage.getItem("Token"),n=e.url.includes("login")||e.url.includes("register");return t&&!n&&(e.headers.Authorization=`Token ${t}`),e},e=>Promise.reject(e));Iu.interceptors.response.use(e=>(e.config.url==="register/"&&e.data.status==="success"&&(window.location.href="/"),e),e=>{if(e.response)switch(e.response.status){case 401:!e.config.url.includes("login")&&!e.config.url.includes("register")&&(localStorage.removeItem("Token"),window.location.href="/");break}return Promise.reject(e)});const fb=({text:e,color:t})=>u.jsx(Eo,{sx:{backgroundColor:t,color:"#FFFFFF",width:"90%",height:"40px",position:"absolute",top:"20px",display:"flex",justifyContent:"center",alignItems:"center"},children:e});function ho(e){this._maxSize=e,this.clear()}ho.prototype.clear=function(){this._size=0,this._values=Object.create(null)};ho.prototype.get=function(e){return this._values[e]};ho.prototype.set=function(e,t){return this._size>=this._maxSize&&this.clear(),e in this._values||this._size++,this._values[e]=t};var MT=/[^.^\]^[]+|(?=\[\]|\.\.)/g,pb=/^\d+$/,LT=/^\d/,DT=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,BT=/^\s*(['"]?)(.*?)(\1)\s*$/,zp=512,jg=new ho(zp),Rg=new ho(zp),Tg=new ho(zp),eo={Cache:ho,split:qd,normalizePath:_c,setter:function(e){var t=_c(e);return Rg.get(e)||Rg.set(e,function(r,o){for(var i=0,s=t.length,a=r;i<s-1;){var l=t[i];if(l==="__proto__"||l==="constructor"||l==="prototype")return r;a=a[t[i++]]}a[t[i]]=o})},getter:function(e,t){var n=_c(e);return Tg.get(e)||Tg.set(e,function(o){for(var i=0,s=n.length;i<s;)if(o!=null||!t)o=o[n[i++]];else return;return o})},join:function(e){return e.reduce(function(t,n){return t+(Ip(n)||pb.test(n)?"["+n+"]":(t?".":"")+n)},"")},forEach:function(e,t,n){UT(Array.isArray(e)?e:qd(e),t,n)}};function _c(e){return jg.get(e)||jg.set(e,qd(e).map(function(t){return t.replace(BT,"$2")}))}function qd(e){return e.match(MT)||[""]}function UT(e,t,n){var r=e.length,o,i,s,a;for(i=0;i<r;i++)o=e[i],o&&(HT(o)&&(o='"'+o+'"'),a=Ip(o),s=!a&&/^\d+$/.test(o),t.call(n,o,a,s,i,e))}function Ip(e){return typeof e=="string"&&e&&["'",'"'].indexOf(e.charAt(0))!==-1}function WT(e){return e.match(LT)&&!e.match(pb)}function VT(e){return DT.test(e)}function HT(e){return!Ip(e)&&(WT(e)||VT(e))}const qT=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,Mu=e=>e.match(qT)||[],Lu=e=>e[0].toUpperCase()+e.slice(1),Mp=(e,t)=>Mu(e).join(t).toLowerCase(),hb=e=>Mu(e).reduce((t,n)=>`${t}${t?n[0].toUpperCase()+n.slice(1).toLowerCase():n.toLowerCase()}`,""),GT=e=>Lu(hb(e)),KT=e=>Mp(e,"_"),QT=e=>Mp(e,"-"),XT=e=>Lu(Mp(e," ")),YT=e=>Mu(e).map(Lu).join(" ");var jc={words:Mu,upperFirst:Lu,camelCase:hb,pascalCase:GT,snakeCase:KT,kebabCase:QT,sentenceCase:XT,titleCase:YT},Lp={exports:{}};Lp.exports=function(e){return mb(JT(e),e)};Lp.exports.array=mb;function mb(e,t){var n=e.length,r=new Array(n),o={},i=n,s=ZT(t),a=e5(e);for(t.forEach(function(c){if(!a.has(c[0])||!a.has(c[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});i--;)o[i]||l(e[i],i,new Set);return r;function l(c,d,f){if(f.has(c)){var p;try{p=", node was:"+JSON.stringify(c)}catch{p=""}throw new Error("Cyclic dependency"+p)}if(!a.has(c))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(c));if(!o[d]){o[d]=!0;var b=s.get(c)||new Set;if(b=Array.from(b),d=b.length){f.add(c);do{var x=b[--d];l(x,a.get(x),f)}while(d);f.delete(c)}r[--n]=c}}}function JT(e){for(var t=new Set,n=0,r=e.length;n<r;n++){var o=e[n];t.add(o[0]),t.add(o[1])}return Array.from(t)}function ZT(e){for(var t=new Map,n=0,r=e.length;n<r;n++){var o=e[n];t.has(o[0])||t.set(o[0],new Set),t.has(o[1])||t.set(o[1],new Set),t.get(o[0]).add(o[1])}return t}function e5(e){for(var t=new Map,n=0,r=e.length;n<r;n++)t.set(e[n],n);return t}var t5=Lp.exports;const n5=Sl(t5),r5=Object.prototype.toString,o5=Error.prototype.toString,i5=RegExp.prototype.toString,s5=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",a5=/^Symbol\((.*)\)(.*)$/;function l5(e){return e!=+e?"NaN":e===0&&1/e<0?"-0":""+e}function Pg(e,t=!1){if(e==null||e===!0||e===!1)return""+e;const n=typeof e;if(n==="number")return l5(e);if(n==="string")return t?`"${e}"`:e;if(n==="function")return"[Function "+(e.name||"anonymous")+"]";if(n==="symbol")return s5.call(e).replace(a5,"Symbol($1)");const r=r5.call(e).slice(8,-1);return r==="Date"?isNaN(e.getTime())?""+e:e.toISOString(e):r==="Error"||e instanceof Error?"["+o5.call(e)+"]":r==="RegExp"?i5.call(e):null}function Er(e,t){let n=Pg(e,t);return n!==null?n:JSON.stringify(e,function(r,o){let i=Pg(this[r],t);return i!==null?i:o},2)}function gb(e){return e==null?[]:[].concat(e)}let xb,yb,vb,u5=/\$\{\s*(\w+)\s*\}/g;xb=Symbol.toStringTag;class Og{constructor(t,n,r,o){this.name=void 0,this.message=void 0,this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=void 0,this.inner=void 0,this[xb]="Error",this.name="ValidationError",this.value=n,this.path=r,this.type=o,this.errors=[],this.inner=[],gb(t).forEach(i=>{if(Ot.isError(i)){this.errors.push(...i.errors);const s=i.inner.length?i.inner:[i];this.inner.push(...s)}else this.errors.push(i)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0]}}yb=Symbol.hasInstance;vb=Symbol.toStringTag;class Ot extends Error{static formatError(t,n){const r=n.label||n.path||"this";return n=Object.assign({},n,{path:r,originalPath:n.path}),typeof t=="string"?t.replace(u5,(o,i)=>Er(n[i])):typeof t=="function"?t(n):t}static isError(t){return t&&t.name==="ValidationError"}constructor(t,n,r,o,i){const s=new Og(t,n,r,o);if(i)return s;super(),this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=[],this.inner=[],this[vb]="Error",this.name=s.name,this.message=s.message,this.type=s.type,this.value=s.value,this.path=s.path,this.errors=s.errors,this.inner=s.inner,Error.captureStackTrace&&Error.captureStackTrace(this,Ot)}static[yb](t){return Og[Symbol.hasInstance](t)||super[Symbol.hasInstance](t)}}let Rn={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:e,type:t,value:n,originalValue:r})=>{const o=r!=null&&r!==n?` (cast from the value \`${Er(r,!0)}\`).`:".";return t!=="mixed"?`${e} must be a \`${t}\` type, but the final value was: \`${Er(n,!0)}\``+o:`${e} must match the configured type. The validated value was: \`${Er(n,!0)}\``+o}},Tt={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",datetime:"${path} must be a valid ISO date-time",datetime_precision:"${path} must be a valid ISO date-time with a sub-second precision of exactly ${precision} digits",datetime_offset:'${path} must be a valid ISO date-time with UTC "Z" timezone',trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},c5={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},Gd={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},d5={isValue:"${path} field must be ${value}"},Ra={noUnknown:"${path} field has unspecified keys: ${unknown}",exact:"${path} object contains unknown properties: ${properties}"},f5={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},p5={notType:e=>{const{path:t,value:n,spec:r}=e,o=r.types.length;if(Array.isArray(n)){if(n.length<o)return`${t} tuple value has too few items, expected a length of ${o} but got ${n.length} for value: \`${Er(n,!0)}\``;if(n.length>o)return`${t} tuple value has too many items, expected a length of ${o} but got ${n.length} for value: \`${Er(n,!0)}\``}return Ot.formatError(Rn.notType,e)}};Object.assign(Object.create(null),{mixed:Rn,string:Tt,number:c5,date:Gd,object:Ra,array:f5,boolean:d5,tuple:p5});const Dp=e=>e&&e.__isYupSchema__;class bl{static fromOptions(t,n){if(!n.then&&!n.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:r,then:o,otherwise:i}=n,s=typeof r=="function"?r:(...a)=>a.every(l=>l===r);return new bl(t,(a,l)=>{var c;let d=s(...a)?o:i;return(c=d==null?void 0:d(l))!=null?c:l})}constructor(t,n){this.fn=void 0,this.refs=t,this.refs=t,this.fn=n}resolve(t,n){let r=this.refs.map(i=>i.getValue(n==null?void 0:n.value,n==null?void 0:n.parent,n==null?void 0:n.context)),o=this.fn(r,t,n);if(o===void 0||o===t)return t;if(!Dp(o))throw new TypeError("conditions must return a schema object");return o.resolve(n)}}const sa={context:"$",value:"."};function h5(e,t){return new Ar(e,t)}class Ar{constructor(t,n={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof t!="string")throw new TypeError("ref must be a string, got: "+t);if(this.key=t.trim(),t==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===sa.context,this.isValue=this.key[0]===sa.value,this.isSibling=!this.isContext&&!this.isValue;let r=this.isContext?sa.context:this.isValue?sa.value:"";this.path=this.key.slice(r.length),this.getter=this.path&&eo.getter(this.path,!0),this.map=n.map}getValue(t,n,r){let o=this.isContext?r:this.isValue?t:n;return this.getter&&(o=this.getter(o||{})),this.map&&(o=this.map(o)),o}cast(t,n){return this.getValue(t,n==null?void 0:n.parent,n==null?void 0:n.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(t){return t&&t.__isYupRef}}Ar.prototype.__isYupRef=!0;const Qr=e=>e==null;function ko(e){function t({value:n,path:r="",options:o,originalValue:i,schema:s},a,l){const{name:c,test:d,params:f,message:p,skipAbsent:b}=e;let{parent:x,context:y,abortEarly:k=s.spec.abortEarly,disableStackTrace:g=s.spec.disableStackTrace}=o;function h(T){return Ar.isRef(T)?T.getValue(n,x,y):T}function m(T={}){const P=Object.assign({value:n,originalValue:i,label:s.spec.label,path:T.path||r,spec:s.spec,disableStackTrace:T.disableStackTrace||g},f,T.params);for(const M of Object.keys(P))P[M]=h(P[M]);const I=new Ot(Ot.formatError(T.message||p,P),n,P.path,T.type||c,P.disableStackTrace);return I.params=P,I}const w=k?a:l;let C={path:r,parent:x,type:c,from:o.from,createError:m,resolve:h,options:o,originalValue:i,schema:s};const S=T=>{Ot.isError(T)?w(T):T?l(null):w(m())},E=T=>{Ot.isError(T)?w(T):a(T)};if(b&&Qr(n))return S(!0);let A;try{var z;if(A=d.call(C,n,C),typeof((z=A)==null?void 0:z.then)=="function"){if(o.sync)throw new Error(`Validation test of type: "${C.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(A).then(S,E)}}catch(T){E(T);return}S(A)}return t.OPTIONS=e,t}function m5(e,t,n,r=n){let o,i,s;return t?(eo.forEach(t,(a,l,c)=>{let d=l?a.slice(1,a.length-1):a;e=e.resolve({context:r,parent:o,value:n});let f=e.type==="tuple",p=c?parseInt(d,10):0;if(e.innerType||f){if(f&&!c)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${s}" must contain an index to the tuple element, e.g. "${s}[0]"`);if(n&&p>=n.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${a}, in the path: ${t}. because there is no value at that index. `);o=n,n=n&&n[p],e=f?e.spec.types[p]:e.innerType}if(!c){if(!e.fields||!e.fields[d])throw new Error(`The schema does not contain the path: ${t}. (failed at: ${s} which is a type: "${e.type}")`);o=n,n=n&&n[d],e=e.fields[d]}i=d,s=l?"["+a+"]":"."+a}),{schema:e,parent:o,parentPath:i}):{parent:o,parentPath:t,schema:e}}class wl extends Set{describe(){const t=[];for(const n of this.values())t.push(Ar.isRef(n)?n.describe():n);return t}resolveAll(t){let n=[];for(const r of this.values())n.push(t(r));return n}clone(){return new wl(this.values())}merge(t,n){const r=this.clone();return t.forEach(o=>r.add(o)),n.forEach(o=>r.delete(o)),r}}function Mo(e,t=new Map){if(Dp(e)||!e||typeof e!="object")return e;if(t.has(e))return t.get(e);let n;if(e instanceof Date)n=new Date(e.getTime()),t.set(e,n);else if(e instanceof RegExp)n=new RegExp(e),t.set(e,n);else if(Array.isArray(e)){n=new Array(e.length),t.set(e,n);for(let r=0;r<e.length;r++)n[r]=Mo(e[r],t)}else if(e instanceof Map){n=new Map,t.set(e,n);for(const[r,o]of e.entries())n.set(r,Mo(o,t))}else if(e instanceof Set){n=new Set,t.set(e,n);for(const r of e)n.add(Mo(r,t))}else if(e instanceof Object){n={},t.set(e,n);for(const[r,o]of Object.entries(e))n[r]=Mo(o,t)}else throw Error(`Unable to clone ${e}`);return n}class In{constructor(t){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new wl,this._blacklist=new wl,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(Rn.notType)}),this.type=t.type,this._typeCheck=t.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},t==null?void 0:t.spec),this.withMutation(n=>{n.nonNullable()})}get _type(){return this.type}clone(t){if(this._mutate)return t&&Object.assign(this.spec,t),this;const n=Object.create(Object.getPrototypeOf(this));return n.type=this.type,n._typeCheck=this._typeCheck,n._whitelist=this._whitelist.clone(),n._blacklist=this._blacklist.clone(),n.internalTests=Object.assign({},this.internalTests),n.exclusiveTests=Object.assign({},this.exclusiveTests),n.deps=[...this.deps],n.conditions=[...this.conditions],n.tests=[...this.tests],n.transforms=[...this.transforms],n.spec=Mo(Object.assign({},this.spec,t)),n}label(t){let n=this.clone();return n.spec.label=t,n}meta(...t){if(t.length===0)return this.spec.meta;let n=this.clone();return n.spec.meta=Object.assign(n.spec.meta||{},t[0]),n}withMutation(t){let n=this._mutate;this._mutate=!0;let r=t(this);return this._mutate=n,r}concat(t){if(!t||t===this)return this;if(t.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);let n=this,r=t.clone();const o=Object.assign({},n.spec,r.spec);return r.spec=o,r.internalTests=Object.assign({},n.internalTests,r.internalTests),r._whitelist=n._whitelist.merge(t._whitelist,t._blacklist),r._blacklist=n._blacklist.merge(t._blacklist,t._whitelist),r.tests=n.tests,r.exclusiveTests=n.exclusiveTests,r.withMutation(i=>{t.tests.forEach(s=>{i.test(s.OPTIONS)})}),r.transforms=[...n.transforms,...r.transforms],r}isType(t){return t==null?!!(this.spec.nullable&&t===null||this.spec.optional&&t===void 0):this._typeCheck(t)}resolve(t){let n=this;if(n.conditions.length){let r=n.conditions;n=n.clone(),n.conditions=[],n=r.reduce((o,i)=>i.resolve(o,t),n),n=n.resolve(t)}return n}resolveOptions(t){var n,r,o,i;return Object.assign({},t,{from:t.from||[],strict:(n=t.strict)!=null?n:this.spec.strict,abortEarly:(r=t.abortEarly)!=null?r:this.spec.abortEarly,recursive:(o=t.recursive)!=null?o:this.spec.recursive,disableStackTrace:(i=t.disableStackTrace)!=null?i:this.spec.disableStackTrace})}cast(t,n={}){let r=this.resolve(Object.assign({value:t},n)),o=n.assert==="ignore-optionality",i=r._cast(t,n);if(n.assert!==!1&&!r.isType(i)){if(o&&Qr(i))return i;let s=Er(t),a=Er(i);throw new TypeError(`The value of ${n.path||"field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${s} 
`+(a!==s?`result of cast: ${a}`:""))}return i}_cast(t,n){let r=t===void 0?t:this.transforms.reduce((o,i)=>i.call(this,o,t,this),t);return r===void 0&&(r=this.getDefault(n)),r}_validate(t,n={},r,o){let{path:i,originalValue:s=t,strict:a=this.spec.strict}=n,l=t;a||(l=this._cast(l,Object.assign({assert:!1},n)));let c=[];for(let d of Object.values(this.internalTests))d&&c.push(d);this.runTests({path:i,value:l,originalValue:s,options:n,tests:c},r,d=>{if(d.length)return o(d,l);this.runTests({path:i,value:l,originalValue:s,options:n,tests:this.tests},r,o)})}runTests(t,n,r){let o=!1,{tests:i,value:s,originalValue:a,path:l,options:c}=t,d=y=>{o||(o=!0,n(y,s))},f=y=>{o||(o=!0,r(y,s))},p=i.length,b=[];if(!p)return f([]);let x={value:s,originalValue:a,path:l,options:c,schema:this};for(let y=0;y<i.length;y++){const k=i[y];k(x,d,function(h){h&&(Array.isArray(h)?b.push(...h):b.push(h)),--p<=0&&f(b)})}}asNestedTest({key:t,index:n,parent:r,parentPath:o,originalParent:i,options:s}){const a=t??n;if(a==null)throw TypeError("Must include `key` or `index` for nested validations");const l=typeof a=="number";let c=r[a];const d=Object.assign({},s,{strict:!0,parent:r,value:c,originalValue:i[a],key:void 0,[l?"index":"key"]:a,path:l||a.includes(".")?`${o||""}[${l?a:`"${a}"`}]`:(o?`${o}.`:"")+t});return(f,p,b)=>this.resolve(d)._validate(c,d,p,b)}validate(t,n){var r;let o=this.resolve(Object.assign({},n,{value:t})),i=(r=n==null?void 0:n.disableStackTrace)!=null?r:o.spec.disableStackTrace;return new Promise((s,a)=>o._validate(t,n,(l,c)=>{Ot.isError(l)&&(l.value=c),a(l)},(l,c)=>{l.length?a(new Ot(l,c,void 0,void 0,i)):s(c)}))}validateSync(t,n){var r;let o=this.resolve(Object.assign({},n,{value:t})),i,s=(r=n==null?void 0:n.disableStackTrace)!=null?r:o.spec.disableStackTrace;return o._validate(t,Object.assign({},n,{sync:!0}),(a,l)=>{throw Ot.isError(a)&&(a.value=l),a},(a,l)=>{if(a.length)throw new Ot(a,t,void 0,void 0,s);i=l}),i}isValid(t,n){return this.validate(t,n).then(()=>!0,r=>{if(Ot.isError(r))return!1;throw r})}isValidSync(t,n){try{return this.validateSync(t,n),!0}catch(r){if(Ot.isError(r))return!1;throw r}}_getDefault(t){let n=this.spec.default;return n==null?n:typeof n=="function"?n.call(this,t):Mo(n)}getDefault(t){return this.resolve(t||{})._getDefault(t)}default(t){return arguments.length===0?this._getDefault():this.clone({default:t})}strict(t=!0){return this.clone({strict:t})}nullability(t,n){const r=this.clone({nullable:t});return r.internalTests.nullable=ko({message:n,name:"nullable",test(o){return o===null?this.schema.spec.nullable:!0}}),r}optionality(t,n){const r=this.clone({optional:t});return r.internalTests.optionality=ko({message:n,name:"optionality",test(o){return o===void 0?this.schema.spec.optional:!0}}),r}optional(){return this.optionality(!0)}defined(t=Rn.defined){return this.optionality(!1,t)}nullable(){return this.nullability(!0)}nonNullable(t=Rn.notNull){return this.nullability(!1,t)}required(t=Rn.required){return this.clone().withMutation(n=>n.nonNullable(t).defined(t))}notRequired(){return this.clone().withMutation(t=>t.nullable().optional())}transform(t){let n=this.clone();return n.transforms.push(t),n}test(...t){let n;if(t.length===1?typeof t[0]=="function"?n={test:t[0]}:n=t[0]:t.length===2?n={name:t[0],test:t[1]}:n={name:t[0],message:t[1],test:t[2]},n.message===void 0&&(n.message=Rn.default),typeof n.test!="function")throw new TypeError("`test` is a required parameters");let r=this.clone(),o=ko(n),i=n.exclusive||n.name&&r.exclusiveTests[n.name]===!0;if(n.exclusive&&!n.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return n.name&&(r.exclusiveTests[n.name]=!!n.exclusive),r.tests=r.tests.filter(s=>!(s.OPTIONS.name===n.name&&(i||s.OPTIONS.test===o.OPTIONS.test))),r.tests.push(o),r}when(t,n){!Array.isArray(t)&&typeof t!="string"&&(n=t,t=".");let r=this.clone(),o=gb(t).map(i=>new Ar(i));return o.forEach(i=>{i.isSibling&&r.deps.push(i.key)}),r.conditions.push(typeof n=="function"?new bl(o,n):bl.fromOptions(o,n)),r}typeError(t){let n=this.clone();return n.internalTests.typeError=ko({message:t,name:"typeError",skipAbsent:!0,test(r){return this.schema._typeCheck(r)?!0:this.createError({params:{type:this.schema.type}})}}),n}oneOf(t,n=Rn.oneOf){let r=this.clone();return t.forEach(o=>{r._whitelist.add(o),r._blacklist.delete(o)}),r.internalTests.whiteList=ko({message:n,name:"oneOf",skipAbsent:!0,test(o){let i=this.schema._whitelist,s=i.resolveAll(this.resolve);return s.includes(o)?!0:this.createError({params:{values:Array.from(i).join(", "),resolved:s}})}}),r}notOneOf(t,n=Rn.notOneOf){let r=this.clone();return t.forEach(o=>{r._blacklist.add(o),r._whitelist.delete(o)}),r.internalTests.blacklist=ko({message:n,name:"notOneOf",test(o){let i=this.schema._blacklist,s=i.resolveAll(this.resolve);return s.includes(o)?this.createError({params:{values:Array.from(i).join(", "),resolved:s}}):!0}}),r}strip(t=!0){let n=this.clone();return n.spec.strip=t,n}describe(t){const n=(t?this.resolve(t):this).clone(),{label:r,meta:o,optional:i,nullable:s}=n.spec;return{meta:o,label:r,optional:i,nullable:s,default:n.getDefault(t),type:n.type,oneOf:n._whitelist.describe(),notOneOf:n._blacklist.describe(),tests:n.tests.map(l=>({name:l.OPTIONS.name,params:l.OPTIONS.params})).filter((l,c,d)=>d.findIndex(f=>f.name===l.name)===c)}}}In.prototype.__isYupSchema__=!0;for(const e of["validate","validateSync"])In.prototype[`${e}At`]=function(t,n,r={}){const{parent:o,parentPath:i,schema:s}=m5(this,t,n,r.context);return s[e](o&&o[i],Object.assign({},r,{parent:o,path:t}))};for(const e of["equals","is"])In.prototype[e]=In.prototype.oneOf;for(const e of["not","nope"])In.prototype[e]=In.prototype.notOneOf;const g5=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function x5(e){const t=Kd(e);if(!t)return Date.parse?Date.parse(e):Number.NaN;if(t.z===void 0&&t.plusMinus===void 0)return new Date(t.year,t.month,t.day,t.hour,t.minute,t.second,t.millisecond).valueOf();let n=0;return t.z!=="Z"&&t.plusMinus!==void 0&&(n=t.hourOffset*60+t.minuteOffset,t.plusMinus==="+"&&(n=0-n)),Date.UTC(t.year,t.month,t.day,t.hour,t.minute+n,t.second,t.millisecond)}function Kd(e){var t,n;const r=g5.exec(e);return r?{year:Bn(r[1]),month:Bn(r[2],1)-1,day:Bn(r[3],1),hour:Bn(r[4]),minute:Bn(r[5]),second:Bn(r[6]),millisecond:r[7]?Bn(r[7].substring(0,3)):0,precision:(t=(n=r[7])==null?void 0:n.length)!=null?t:void 0,z:r[8]||void 0,plusMinus:r[9]||void 0,hourOffset:Bn(r[10]),minuteOffset:Bn(r[11])}:null}function Bn(e,t=0){return Number(e)||t}let y5=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,v5=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,b5=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,w5="^\\d{4}-\\d{2}-\\d{2}",S5="\\d{2}:\\d{2}:\\d{2}",k5="(([+-]\\d{2}(:?\\d{2})?)|Z)",C5=new RegExp(`${w5}T${S5}(\\.\\d+)?${k5}$`),E5=e=>Qr(e)||e===e.trim(),N5={}.toString();function Xr(){return new bb}class bb extends In{constructor(){super({type:"string",check(t){return t instanceof String&&(t=t.valueOf()),typeof t=="string"}}),this.withMutation(()=>{this.transform((t,n,r)=>{if(!r.spec.coerce||r.isType(t)||Array.isArray(t))return t;const o=t!=null&&t.toString?t.toString():t;return o===N5?t:o})})}required(t){return super.required(t).withMutation(n=>n.test({message:t||Rn.required,name:"required",skipAbsent:!0,test:r=>!!r.length}))}notRequired(){return super.notRequired().withMutation(t=>(t.tests=t.tests.filter(n=>n.OPTIONS.name!=="required"),t))}length(t,n=Tt.length){return this.test({message:n,name:"length",exclusive:!0,params:{length:t},skipAbsent:!0,test(r){return r.length===this.resolve(t)}})}min(t,n=Tt.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(r){return r.length>=this.resolve(t)}})}max(t,n=Tt.max){return this.test({name:"max",exclusive:!0,message:n,params:{max:t},skipAbsent:!0,test(r){return r.length<=this.resolve(t)}})}matches(t,n){let r=!1,o,i;return n&&(typeof n=="object"?{excludeEmptyString:r=!1,message:o,name:i}=n:o=n),this.test({name:i||"matches",message:o||Tt.matches,params:{regex:t},skipAbsent:!0,test:s=>s===""&&r||s.search(t)!==-1})}email(t=Tt.email){return this.matches(y5,{name:"email",message:t,excludeEmptyString:!0})}url(t=Tt.url){return this.matches(v5,{name:"url",message:t,excludeEmptyString:!0})}uuid(t=Tt.uuid){return this.matches(b5,{name:"uuid",message:t,excludeEmptyString:!1})}datetime(t){let n="",r,o;return t&&(typeof t=="object"?{message:n="",allowOffset:r=!1,precision:o=void 0}=t:n=t),this.matches(C5,{name:"datetime",message:n||Tt.datetime,excludeEmptyString:!0}).test({name:"datetime_offset",message:n||Tt.datetime_offset,params:{allowOffset:r},skipAbsent:!0,test:i=>{if(!i||r)return!0;const s=Kd(i);return s?!!s.z:!1}}).test({name:"datetime_precision",message:n||Tt.datetime_precision,params:{precision:o},skipAbsent:!0,test:i=>{if(!i||o==null)return!0;const s=Kd(i);return s?s.precision===o:!1}})}ensure(){return this.default("").transform(t=>t===null?"":t)}trim(t=Tt.trim){return this.transform(n=>n!=null?n.trim():n).test({message:t,name:"trim",test:E5})}lowercase(t=Tt.lowercase){return this.transform(n=>Qr(n)?n:n.toLowerCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>Qr(n)||n===n.toLowerCase()})}uppercase(t=Tt.uppercase){return this.transform(n=>Qr(n)?n:n.toUpperCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>Qr(n)||n===n.toUpperCase()})}}Xr.prototype=bb.prototype;let _5=new Date(""),j5=e=>Object.prototype.toString.call(e)==="[object Date]";class Bp extends In{constructor(){super({type:"date",check(t){return j5(t)&&!isNaN(t.getTime())}}),this.withMutation(()=>{this.transform((t,n,r)=>!r.spec.coerce||r.isType(t)||t===null?t:(t=x5(t),isNaN(t)?Bp.INVALID_DATE:new Date(t)))})}prepareParam(t,n){let r;if(Ar.isRef(t))r=t;else{let o=this.cast(t);if(!this._typeCheck(o))throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);r=o}return r}min(t,n=Gd.min){let r=this.prepareParam(t,"min");return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(o){return o>=this.resolve(r)}})}max(t,n=Gd.max){let r=this.prepareParam(t,"max");return this.test({message:n,name:"max",exclusive:!0,params:{max:t},skipAbsent:!0,test(o){return o<=this.resolve(r)}})}}Bp.INVALID_DATE=_5;function R5(e,t=[]){let n=[],r=new Set,o=new Set(t.map(([s,a])=>`${s}-${a}`));function i(s,a){let l=eo.split(s)[0];r.add(l),o.has(`${a}-${l}`)||n.push([a,l])}for(const s of Object.keys(e)){let a=e[s];r.add(s),Ar.isRef(a)&&a.isSibling?i(a.path,s):Dp(a)&&"deps"in a&&a.deps.forEach(l=>i(l,s))}return n5.array(Array.from(r),n).reverse()}function Fg(e,t){let n=1/0;return e.some((r,o)=>{var i;if((i=t.path)!=null&&i.includes(r))return n=o,!0}),n}function wb(e){return(t,n)=>Fg(e,t)-Fg(e,n)}const T5=(e,t,n)=>{if(typeof e!="string")return e;let r=e;try{r=JSON.parse(e)}catch{}return n.isType(r)?r:e};function Ta(e){if("fields"in e){const t={};for(const[n,r]of Object.entries(e.fields))t[n]=Ta(r);return e.setFields(t)}if(e.type==="array"){const t=e.optional();return t.innerType&&(t.innerType=Ta(t.innerType)),t}return e.type==="tuple"?e.optional().clone({types:e.spec.types.map(Ta)}):"optional"in e?e.optional():e}const P5=(e,t)=>{const n=[...eo.normalizePath(t)];if(n.length===1)return n[0]in e;let r=n.pop(),o=eo.getter(eo.join(n),!0)(e);return!!(o&&r in o)};let $g=e=>Object.prototype.toString.call(e)==="[object Object]";function Ag(e,t){let n=Object.keys(e.fields);return Object.keys(t).filter(r=>n.indexOf(r)===-1)}const O5=wb([]);function Up(e){return new Sb(e)}class Sb extends In{constructor(t){super({type:"object",check(n){return $g(n)||typeof n=="function"}}),this.fields=Object.create(null),this._sortErrors=O5,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{t&&this.shape(t)})}_cast(t,n={}){var r;let o=super._cast(t,n);if(o===void 0)return this.getDefault(n);if(!this._typeCheck(o))return o;let i=this.fields,s=(r=n.stripUnknown)!=null?r:this.spec.noUnknown,a=[].concat(this._nodes,Object.keys(o).filter(f=>!this._nodes.includes(f))),l={},c=Object.assign({},n,{parent:l,__validating:n.__validating||!1}),d=!1;for(const f of a){let p=i[f],b=f in o;if(p){let x,y=o[f];c.path=(n.path?`${n.path}.`:"")+f,p=p.resolve({value:y,context:n.context,parent:l});let k=p instanceof In?p.spec:void 0,g=k==null?void 0:k.strict;if(k!=null&&k.strip){d=d||f in o;continue}x=!n.__validating||!g?p.cast(o[f],c):o[f],x!==void 0&&(l[f]=x)}else b&&!s&&(l[f]=o[f]);(b!==f in l||l[f]!==o[f])&&(d=!0)}return d?l:o}_validate(t,n={},r,o){let{from:i=[],originalValue:s=t,recursive:a=this.spec.recursive}=n;n.from=[{schema:this,value:s},...i],n.__validating=!0,n.originalValue=s,super._validate(t,n,r,(l,c)=>{if(!a||!$g(c)){o(l,c);return}s=s||c;let d=[];for(let f of this._nodes){let p=this.fields[f];!p||Ar.isRef(p)||d.push(p.asNestedTest({options:n,key:f,parent:c,parentPath:n.path,originalParent:s}))}this.runTests({tests:d,value:c,originalValue:s,options:n},r,f=>{o(f.sort(this._sortErrors).concat(l),c)})})}clone(t){const n=super.clone(t);return n.fields=Object.assign({},this.fields),n._nodes=this._nodes,n._excludedEdges=this._excludedEdges,n._sortErrors=this._sortErrors,n}concat(t){let n=super.concat(t),r=n.fields;for(let[o,i]of Object.entries(this.fields)){const s=r[o];r[o]=s===void 0?i:s}return n.withMutation(o=>o.setFields(r,[...this._excludedEdges,...t._excludedEdges]))}_getDefault(t){if("default"in this.spec)return super._getDefault(t);if(!this._nodes.length)return;let n={};return this._nodes.forEach(r=>{var o;const i=this.fields[r];let s=t;(o=s)!=null&&o.value&&(s=Object.assign({},s,{parent:s.value,value:s.value[r]})),n[r]=i&&"getDefault"in i?i.getDefault(s):void 0}),n}setFields(t,n){let r=this.clone();return r.fields=t,r._nodes=R5(t,n),r._sortErrors=wb(Object.keys(t)),n&&(r._excludedEdges=n),r}shape(t,n=[]){return this.clone().withMutation(r=>{let o=r._excludedEdges;return n.length&&(Array.isArray(n[0])||(n=[n]),o=[...r._excludedEdges,...n]),r.setFields(Object.assign(r.fields,t),o)})}partial(){const t={};for(const[n,r]of Object.entries(this.fields))t[n]="optional"in r&&r.optional instanceof Function?r.optional():r;return this.setFields(t)}deepPartial(){return Ta(this)}pick(t){const n={};for(const r of t)this.fields[r]&&(n[r]=this.fields[r]);return this.setFields(n,this._excludedEdges.filter(([r,o])=>t.includes(r)&&t.includes(o)))}omit(t){const n=[];for(const r of Object.keys(this.fields))t.includes(r)||n.push(r);return this.pick(n)}from(t,n,r){let o=eo.getter(t,!0);return this.transform(i=>{if(!i)return i;let s=i;return P5(i,t)&&(s=Object.assign({},i),r||delete s[t],s[n]=o(i)),s})}json(){return this.transform(T5)}exact(t){return this.test({name:"exact",exclusive:!0,message:t||Ra.exact,test(n){if(n==null)return!0;const r=Ag(this.schema,n);return r.length===0||this.createError({params:{properties:r.join(", ")}})}})}stripUnknown(){return this.clone({noUnknown:!0})}noUnknown(t=!0,n=Ra.noUnknown){typeof t!="boolean"&&(n=t,t=!0);let r=this.test({name:"noUnknown",exclusive:!0,message:n,test(o){if(o==null)return!0;const i=Ag(this.schema,o);return!t||i.length===0||this.createError({params:{unknown:i.join(", ")}})}});return r.spec.noUnknown=t,r}unknown(t=!0,n=Ra.noUnknown){return this.noUnknown(!t,n)}transformKeys(t){return this.transform(n=>{if(!n)return n;const r={};for(const o of Object.keys(n))r[t(o)]=n[o];return r})}camelCase(){return this.transformKeys(jc.camelCase)}snakeCase(){return this.transformKeys(jc.snakeCase)}constantCase(){return this.transformKeys(t=>jc.snakeCase(t).toUpperCase())}describe(t){const n=(t?this.resolve(t):this).clone(),r=super.describe(t);r.fields={};for(const[i,s]of Object.entries(n.fields)){var o;let a=t;(o=a)!=null&&o.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[i]})),r.fields[i]=s.describe(a)}return r}}Up.prototype=Sb.prototype;const zg=(e,t,n)=>{if(e&&"reportValidity"in e){const r=K(n,t);e.setCustomValidity(r&&r.message||""),e.reportValidity()}},kb=(e,t)=>{for(const n in t.fields){const r=t.fields[n];r&&r.ref&&"reportValidity"in r.ref?zg(r.ref,n,e):r.refs&&r.refs.forEach(o=>zg(o,n,e))}},F5=(e,t)=>{t.shouldUseNativeValidation&&kb(e,t);const n={};for(const r in e){const o=K(t.fields,r),i=Object.assign(e[r]||{},{ref:o&&o.ref});if($5(t.names||Object.keys(e),r)){const s=Object.assign({},K(n,r));ve(s,"root",i),ve(n,r,s)}else ve(n,r,i)}return n},$5=(e,t)=>e.some(n=>n.startsWith(t+"."));function Cb(e,t,n){return t===void 0&&(t={}),n===void 0&&(n={}),function(r,o,i){try{return Promise.resolve(function(s,a){try{var l=(t.context,Promise.resolve(e[n.mode==="sync"?"validateSync":"validate"](r,Object.assign({abortEarly:!1},t,{context:o}))).then(function(c){return i.shouldUseNativeValidation&&kb({},i),{values:n.raw?r:c,errors:{}}}))}catch(c){return a(c)}return l&&l.then?l.then(void 0,a):l}(0,function(s){if(!s.inner)throw s;return{values:{},errors:F5((a=s,l=!i.shouldUseNativeValidation&&i.criteriaMode==="all",(a.inner||[]).reduce(function(c,d){if(c[d.path]||(c[d.path]={message:d.message,type:d.type}),l){var f=c[d.path].types,p=f&&f[d.type];c[d.path]=xv(d.path,l,c,d.type,p?[].concat(p,d.message):d.message)}return c},{})),i)};var a,l}))}catch(s){return Promise.reject(s)}}}const Eb="/static/bg.png",Nb="/static/polar%20bear.gif",Ig={container:{minHeight:"100vh",width:"100%",display:"flex",flexDirection:"column-reverse",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"},imageContainer:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"flex-end",alignItems:"center",height:"50vh",order:2},image:{width:"80%",maxWidth:"28rem",objectFit:"contain"},formContainer:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",height:"50vh",padding:"1rem",order:1},formWrapper:{width:"100%",maxWidth:"28rem"},form:{width:"100%",backgroundColor:"white",borderRadius:"0.5rem",boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1)",padding:"1.5rem 2rem",border:"5px solid #10BDDB"},title:{fontSize:"1.875rem",fontWeight:"bold",textAlign:"center",color:"rgb(4, 45, 52)"},link:{color:"rgb(44, 131, 147)",fontSize:"0.885rem",textDecoration:"none",fontFamily:"'Comic Neue', sans-serif"},linkHover:{color:"#1e40af"},linkContainer:{display:"flex",flexDirection:"column",gap:"0.75rem",textAlign:"center"},spaceY6:{display:"flex",flexDirection:"column",gap:"1.5rem"},spaceY2:{display:"flex",flexDirection:"column",gap:"0.5rem"}},A5=()=>{const[e,t]=v.useState(Ig),n=Up({email:Xr().required("Email is required").email("Please enter a valid email address"),password:Xr().required("Password is required").min(8,"Password must be at least 8 characters")}),{control:r,handleSubmit:o,formState:{errors:i}}=Cv({resolver:Cb(n),mode:"onChange"}),s=$r(),[a,l]=v.useState(""),[c,d]=v.useState(!1),f=async p=>{var b,x;try{console.log("Attempting login with data:",p),localStorage.clear();const y=await Iu.post("login/",{email:p.email,password:p.password});if(console.log("Login response:",y.data),y.data.token&&y.data.user){const{token:k,user:g}=y.data;localStorage.setItem("Token",k),localStorage.setItem("username",g.username),localStorage.setItem("email",g.email),localStorage.setItem("userId",g.id),console.log("Token and user info saved"),s("/dashboard")}else l("Invalid response from server"),d(!0)}catch(y){console.error("Error during login:",y),y.response?l(((x=(b=y.response)==null?void 0:b.data)==null?void 0:x.error)||"Login failed. Please try again."):l("Cannot connect to server. Please try again later."),d(!0)}};return v.useEffect(()=>{const p=window.matchMedia("(min-width: 768px)"),b=x=>{x.matches?t(y=>({...y,container:{...y.container,flexDirection:"row"},imageContainer:{...y.imageContainer,width:"50%",height:"100vh",order:1},formContainer:{...y.formContainer,width:"50%",height:"100vh",order:2},form:{...y.form,padding:"2rem"}})):t(Ig)};return b(p),p.addListener(b),()=>p.removeListener(b)},[]),u.jsxs("div",{style:{...e.container,backgroundImage:`url(${Eb})`},children:[u.jsx("div",{style:e.imageContainer,children:u.jsx("img",{src:Nb,alt:"Overlay",style:e.image,loading:"lazy"})}),u.jsx("div",{style:e.formContainer,children:u.jsxs("div",{style:e.formWrapper,children:[c&&u.jsx(fb,{text:a||"Login failed. Please try again or reset your password",color:"#EC5A76",style:{marginBottom:"1.5rem"}}),u.jsx("form",{onSubmit:o(f),style:e.form,children:u.jsxs(Eo,{style:e.spaceY6,children:[u.jsx("h1",{style:e.title,children:"Login"}),u.jsx(Eo,{style:e.spaceY2,children:u.jsx(ml,{label:"Email Address",name:"email",control:r,required:!0,style:{width:"100%"}})}),u.jsx(Eo,{style:e.spaceY2,children:u.jsx(gl,{label:"Password",name:"password",control:r,required:!0,style:{width:"100%"}})}),u.jsx(Eo,{children:u.jsx(jv,{label:"Sign In",type:"submit",fullWidth:!0,style:{padding:"0.75rem 0"}})}),u.jsxs(Eo,{style:e.linkContainer,children:[u.jsx(sn,{to:"/register",style:e.link,onMouseOver:p=>p.target.style.color=e.linkHover.color,onMouseOut:p=>p.target.style.color=e.link.color,children:"Don't have an account? Register here"}),u.jsx(sn,{to:"/request/password-reset",style:e.link,onMouseOver:p=>p.target.style.color=e.linkHover.color,onMouseOut:p=>p.target.style.color=e.link.color,children:"Forgot your password?"})]})]})})]})})]})};var _b={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Mg=Z.createContext&&Z.createContext(_b),Nr=function(){return Nr=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Nr.apply(this,arguments)},z5=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function jb(e){return e&&e.map(function(t,n){return Z.createElement(t.tag,Nr({key:n},t.attr),jb(t.child))})}function zr(e){return function(t){return Z.createElement(I5,Nr({attr:Nr({},e.attr)},t),jb(e.child))}}function I5(e){var t=function(n){var r=e.attr,o=e.size,i=e.title,s=z5(e,["attr","size","title"]),a=o||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),Z.createElement("svg",Nr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:l,style:Nr(Nr({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),i&&Z.createElement("title",null,i),e.children)};return Mg!==void 0?Z.createElement(Mg.Consumer,null,function(n){return t(n)}):t(_b)}function M5(e){return zr({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"}}]})(e)}function L5(e){return zr({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2"}},{tag:"line",attr:{x1:"16",x2:"16",y1:"2",y2:"6"}},{tag:"line",attr:{x1:"8",x2:"8",y1:"2",y2:"6"}},{tag:"line",attr:{x1:"3",x2:"21",y1:"10",y2:"10"}},{tag:"path",attr:{d:"M8 14h.01"}},{tag:"path",attr:{d:"M12 14h.01"}},{tag:"path",attr:{d:"M16 14h.01"}},{tag:"path",attr:{d:"M8 18h.01"}},{tag:"path",attr:{d:"M12 18h.01"}},{tag:"path",attr:{d:"M16 18h.01"}}]})(e)}function D5(e){return zr({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{width:"7",height:"9",x:"3",y:"3",rx:"1"}},{tag:"rect",attr:{width:"7",height:"5",x:"14",y:"3",rx:"1"}},{tag:"rect",attr:{width:"7",height:"9",x:"14",y:"12",rx:"1"}},{tag:"rect",attr:{width:"7",height:"5",x:"3",y:"16",rx:"1"}}]})(e)}function B5(e){return zr({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"}}]})(e)}function U5(e){return zr({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"}},{tag:"path",attr:{d:"M22 21v-2a4 4 0 0 0-3-3.87"}},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"}}]})(e)}const W5="Medal.png",V5=D5,H5=M5,q5=L5,G5=U5,K5=B5,zs=({activeLink:e})=>{const t=n=>e===n;return u.jsxs("aside",{className:"sidebar",children:[u.jsxs("div",{className:"sidebar-header",children:[u.jsx("div",{className:"sidebar-logo-text",children:u.jsx("div",{className:"profile-section",children:u.jsx("img",{src:"/young.png",alt:"Profile",className:"profile-icon"})})}),u.jsx("hr",{className:"sidebar-header-divider"})]}),u.jsx("nav",{className:"sidebar-nav",children:u.jsxs("ul",{children:[u.jsx("li",{className:t("dashboard")?"active":"",children:u.jsxs(sn,{to:"/dashboard",children:[u.jsx("span",{className:"nav-icon",children:u.jsx(V5,{})})," Dashboard"]})}),u.jsx("li",{className:t("home")?"active":"",children:u.jsxs(sn,{to:"/home",children:[u.jsx("span",{className:"nav-icon",children:u.jsx(H5,{})})," My class"]})}),u.jsx("li",{className:t("upcoming")?"active":"",children:u.jsxs(sn,{to:"/upcoming-class",children:[u.jsx("span",{className:"nav-icon",children:u.jsx(q5,{})})," Upcoming class"]})}),u.jsx("li",{className:t("instructors")?"active":"",children:u.jsxs(sn,{to:"#",children:[u.jsx("span",{className:"nav-icon",children:u.jsx(G5,{})})," Instructors"]})}),u.jsx("li",{className:t("profile")?"active":"",children:u.jsxs(sn,{to:"#",children:[u.jsx("span",{className:"nav-icon",children:u.jsx(K5,{})})," Profile"]})})]})}),u.jsxs("div",{className:"sidebar-upgrade",children:[u.jsx("img",{src:W5,alt:"Pro Badge",className:"upgrade-badge"}),u.jsx("p",{className:"upgrade-title",children:"Upgrade your Account to Pro"}),u.jsx("p",{className:"upgrade-text",children:"Upgrade to premium to get premium features"}),u.jsx("button",{className:"upgrade-button",children:"Upgrade"})]})]})};function tr(e){return zr({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"}}]})(e)}function nr(e){return zr({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M439.39 362.29c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71zM67.53 368c21.22-27.97 44.42-74.33 44.53-159.42 0-.2-.06-.38-.06-.58 0-61.86 50.14-112 112-112s112 50.14 112 112c0 .2-.06.38-.06.58.11 85.1 23.31 131.46 44.53 159.42H67.53zM224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64z"}}]})(e)}function rr(e){return zr({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"}}]})(e)}const Q5="/nouns (2).png",X5="/avatar1.png",Y5=tr,J5=nr,Z5=rr,eP=()=>{const[e,t]=v.useState("");return v.useEffect(()=>{const n=localStorage.getItem("username");n&&t(n)},[]),u.jsxs("div",{className:"dashboard-page font-sassoon",children:[u.jsx(zs,{activeLink:"home"}),u.jsxs("main",{className:"dashboard-main-content",children:[u.jsxs("header",{className:"dashboard-header",children:[u.jsx("h1",{className:"header-title",children:"My Class"}),u.jsxs("div",{className:"header-actions",children:[u.jsx("button",{className:"icon-button",children:u.jsx(Y5,{})}),u.jsx("button",{className:"icon-button",children:u.jsx(J5,{})}),u.jsxs("div",{className:"user-info",children:[u.jsx("img",{src:X5,alt:"User Avatar",className:"user-avatar"}),u.jsx("span",{className:"user-name",children:e.toUpperCase()||"Guest"}),u.jsx("button",{className:"icon-button small",children:u.jsx(Z5,{})})]})]})]}),u.jsx("div",{className:"dashboard-grid",children:u.jsxs("section",{className:"my-classes-section",children:[u.jsx("br",{}),u.jsx("div",{className:"classes-grid",children:u.jsx("div",{className:"class-card nouns",children:u.jsxs(sn,{to:"/nouns",children:[" ",u.jsx("img",{src:Q5,alt:"Nouns activity background",className:"class-card-bg"})]})})})]})}),u.jsx("footer",{className:"dashboard-footer",children:u.jsx("img",{src:"footer.png",alt:"Footer Decoration"})})]})]})},Lg={container:{minHeight:"100vh",width:"100%",display:"flex",flexDirection:"column-reverse",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"},imageContainer:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"flex-end",alignItems:"center",height:"50vh",order:2},image:{width:"80%",maxWidth:"28rem",objectFit:"contain"},formContainer:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",height:"50vh",padding:"1rem",order:1},formWrapper:{width:"100%",maxWidth:"28rem"},form:{width:"100%",backgroundColor:"white",borderRadius:"0.5rem",boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1)",padding:"1.5rem 2rem",border:"5px solid #10BDDB"},title:{fontSize:"1.875rem",fontWeight:"bold",textAlign:"center",color:"rgb(4, 45, 52)",marginBottom:"1.5rem"},formGroup:{marginBottom:"1.5rem",width:"100%"},link:{color:"rgb(44, 131, 147)",fontSize:"0.875rem",textDecoration:"none",fontFamily:"'Comic Neue', sans-serif"},linkHover:{color:"#1e40af"},linkContainer:{display:"flex",flexDirection:"column",gap:"0.75rem",textAlign:"center",marginTop:"1.5rem"}},tP=()=>{const[e,t]=v.useState(Lg);$r();const[n,r]=v.useState(!1),[o,i]=v.useState("");v.useEffect(()=>{const f=window.matchMedia("(min-width: 768px)"),p=b=>{b.matches?t(x=>({...x,container:{...x.container,flexDirection:"row"},imageContainer:{...x.imageContainer,width:"50%",height:"100vh",order:1},formContainer:{...x.formContainer,width:"50%",height:"100vh",order:2},form:{...x.form,padding:"2rem"}})):t(Lg)};return p(f),f.addListener(p),()=>f.removeListener(p)},[]);const s=Up({username:Xr().required("Username is required").min(3,"Username must be at least 3 characters").matches(/^[a-zA-Z0-9_]+$/,"Username can only contain letters, numbers and underscores"),email:Xr().required("Email is required").email("Please enter a valid email address"),password:Xr().required("Password is a required field").min(8,"Password must be at least 8 characters").matches(/[A-Z]/,"Password must contain at least one uppercase letter").matches(/[a-z]/,"Password must contain at least one lowercase letter").matches(/[0-9]/,"Password must contain at least one number").matches(/[!@#$%^&*(),.?":{}|<>]/,"Password must contain at least one special character"),password2:Xr().required("Password confirmation is required").oneOf([h5("password")],"Passwords must match")}),{handleSubmit:a,control:l,formState:{errors:c}}=Cv({resolver:Cb(s),mode:"onChange"}),d=async f=>{try{await Iu.post("register/",f)}catch(p){p.response?p.response.data.error?i(p.response.data.error):p.response.data.username?i(p.response.data.username[0]):p.response.data.email?i(p.response.data.email[0]):p.response.data.password?i(p.response.data.password[0]):i("An error occurred during registration."):i("An error occurred. Please try again later."),r(!0)}};return u.jsxs("div",{style:{...e.container,backgroundImage:`url(${Eb})`},children:[u.jsx("div",{style:e.imageContainer,children:u.jsx("img",{src:Nb,alt:"Overlay",style:e.image,loading:"lazy"})}),u.jsx("div",{style:e.formContainer,children:u.jsxs("div",{style:e.formWrapper,children:[n&&u.jsx(fb,{text:o,color:"#EC5A76",style:{marginBottom:"1.5rem"}}),u.jsx("form",{onSubmit:a(d),style:e.form,children:u.jsxs("div",{children:[u.jsx("h1",{style:e.title,children:"Register"}),u.jsx("div",{style:e.formGroup,children:u.jsx(ml,{label:"Username",name:"username",control:l,required:!0,style:{width:"100%"}})}),u.jsx("div",{style:e.formGroup,children:u.jsx(ml,{label:"Email",name:"email",control:l,required:!0,style:{width:"100%"}})}),u.jsx("div",{style:e.formGroup,children:u.jsx(gl,{label:"Password",name:"password",control:l,required:!0,style:{width:"100%"}})}),u.jsx("div",{style:e.formGroup,children:u.jsx(gl,{label:"Confirm Password",name:"password2",control:l,required:!0,style:{width:"100%"}})}),u.jsx("div",{style:e.formGroup,children:u.jsx(jv,{type:"submit",label:"Create Account",fullWidth:!0,style:{padding:"0.75rem 0"}})}),u.jsx("div",{style:e.linkContainer,children:u.jsx(sn,{to:"/",style:e.link,onMouseOver:f=>f.target.style.color=e.linkHover.color,onMouseOut:f=>f.target.style.color=e.link.color,children:"Already registered? Sign in here"})})]})})]})})]})},nP="/avatar1.png",rP=tr,oP=nr,iP=rr,sP=()=>{const[e,t]=v.useState("");v.useEffect(()=>{const C=localStorage.getItem("username");C&&t(C)},[]);const n=["pencil","teacher","zoo","school","leaf"],r=[["pencil","teacher","speak"],["blue","zoo","silly","quickly"],["school","leaf","enormous"]],[o,i]=v.useState(0),[s,a]=v.useState(0),[l,c]=v.useState(Date.now()),[d,f]=v.useState({}),[p,b]=v.useState(0),x=v.useRef({firstCorrect:new Audio("/firstcorrect.mp3"),wrongFirst:new Audio("/needhelp.mp3"),thirdCorrect:new Audio("/2-3correct1.mp3"),wrongThird:new Audio("/needhelp.mp3"),allCorrect:new Audio("/findall.mp3")}),y=C=>{Object.values(x.current).forEach(E=>{E.pause(),E.currentTime=0});const S=x.current[C];S&&S.play()},k=C=>{c(Date.now());const S=n.includes(C);d[C]||b(j=>j+1),f(j=>{if(j[C])return j;const A={...j,[C]:S?"correct":"wrong"},z=Object.values(A).filter(T=>T==="correct").length;return p===0?y(S?"firstCorrect":"wrongFirst"):p===2&&y(S?"thirdCorrect":"wrongThird"),z===5&&y("allCorrect"),A});const E=document.querySelector(".bear-img");E&&(E.src=S?"/polar bear face 1.gif":"/polar bearface 2.gif",setTimeout(()=>{E.src="/bear.png"},2e3))};v.useEffect(()=>{const C=Object.entries(d),S=C.filter(([j,A])=>A==="correct").length,E=C.filter(([j,A])=>A==="wrong").length;i(S),a(E)},[d]);const g=()=>{localStorage.removeItem("authToken"),navigate("/logout")},h={background:"linear-gradient(to right,rgb(37, 188, 202),rgb(135, 239, 241))",color:"#fff",padding:"10px 24px",fontWeight:"600",borderRadius:"12px",border:"none",cursor:"pointer",boxShadow:"0 4px 6px rgba(0,0,0,0.1)",transition:"all 0.3s ease"},m=C=>{C.target.style.background="linear-gradient(to right,rgb(37, 188, 202),rgb(135, 239, 241))"},w=C=>{C.target.style.background="linear-gradient(to right,rgb(46, 148, 167),rgb(114, 215, 224))"};return u.jsxs("div",{style:{backgroundColor:"white",minHeight:"100vh",display:"flex",flexDirection:"column",fontFamily:"'Comic Neue', sans-serif"},children:[u.jsx("style",{children:`
          @import url('https://fonts.googleapis.com/css2?family=Bakbak+One&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Sen:wght@800&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Comic+Neue&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap');

          .quiz-footer img {
            width: 100%;
            height: auto;
            display: block;
          }

          .quiz-content {
            flex: 1;
            position: relative;
            display: flex;
          }

          .header-tex{
            position: absolute;
            top: 0px;
            right: 20px;
            align-items: center;
            margin-top:5px;
            margin-right:0px;
            margin-left:0px;
            color: rgb(34, 123, 153);
            
          
          }
          .image-row {
            position: absolute;
            top: 0;
            left: 0;
          }

          .tree-img {
            width: 150px;
            height: 240px;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 4;
            margin-left: 90px;
            padding-top: 245px;
          }

          .underscore-img {
            width: 230px;
            height: 330px;
            position: absolute;
            top: 0;
            left: 129px;
            z-index: 2;
            padding-top: 125px;
          }

          .header-text {
            position: absolute;
            top: 0px;
            right: 20px;
            align-items: center;
            margin-top:5px;
            margin-right:570px;
            margin-left:0px;
            
          
          }

          .profile-section {
            position: absolute;
            top: 10px;
            left: 10px;
            display: flex;
            align-items: center;
            gap: 10px;
            z-index: 10;
          }

          .profile-icon {
            margin-top:0px;
            height: 40px;
            margin-left:25px;
            object-fit: cover;
          }

          .username {
            font-family: 'Comic Neue', sans-serif;
            font-size: 16px;
            font-weight: bold;
            color: black;
          }

          .header-left {
            position: absolute;
            top: 45px;
            left: 10px;
            text-align: center;
            z-index: 10;
          }

          .header-icon {
            width: 80px;
            height: 70px;
            display: block;
            margin-left: 10px;
            padding-top:15px;
          }

           .home-link {
            font-family: 'Comic Neue', sans-serif;
            font-size: 20px;
            color: black;
            text-decoration: none;
            font-weight: bold;
            margin-top: 0px;
            margin-left:20px;
            display: block;
          }

          .bear-img {
            width: 390px;
            height: 375px;
            position: absolute;
            top: 0;
            left: 193px;
            z-index: 3;
            padding-top: 115px;
          }

          .quiz-task {
            margin-left: auto;
            margin-top: 55px;
            margin-right: 250px;
            text-align: left;
            max-width: 400px;
            font-size: 30px;
            font-family: 'Comic Neue', sans-serif;
          }

          .quiz-task strong {
            font-weight: bold;
          }

          .circle-highlight {
            border: 3px solid #FFBF00;
            border-radius: 40px;
            padding: 2px 6px;
            display: inline-block;
          }

          .word-box {
            margin-top: 30px;
            padding: 20px;
            background-color:white;
            border-radius: 30px;
            border: 2px solid grey;
            font-weight: bolder;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
          }

          .word-options {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 30px;
            font-weight: bolder;
           font-family: 'Comic Neue', sans-serif;
          }

          .word-row {
            display: flex;
            gap: 30px;
            flex-wrap: wrap;
            justify-content: center;
          }

          .word-button {
            border-radius: 10px;
            border: 2px solid #333;
            background-color: white;
            border-color: rgb(192, 202, 209);
            cursor: pointer;
            font-size: 20px;
            font-weight: bolder;
            font-family: 'Comic Neue', sans-serif;
            transition: background-color 0.3s ease, color 0.3s ease;
          }

          .word-button.correct {
            color: black;
            font-size: 20px;
            font-weight: bolder;
            font-family: 'Comic Neue', sans-serif;
            border-color: #4caf50;
          }

          .word-button.wrong {
            color: black;
            font-size: 20px;
            font-weight: bolder;
            font-family: 'Comic Neue', sans-serif;
            border-color:rgba(240, 44, 14, 0.85);
          }

          .quiz-header {
            position: relative;
            width: 100%;
            height: 25vh;
            overflow: hidden;
            display: flex;
            align-items: center;
          }

           .header-bg {
            padding-top: 35px;
            width: 100%;
            height: 15vh;
            object-fit: cover;
            display: block;
          }

         .group-icon {
            position: absolute;
            top: 60px;
            right: 40px;
            width: 40vh;
            height: auto;
            z-index: 5;
          }
            .previous-button {
            font-family: 'Sen', sans-serif;
            font-weight: 800;
            font-size: 14px;
            padding: 10px 20px;
            cursor: pointer;
            border-radius: 6px;
            border:2px solid rgb(19, 150, 194);
            transition: background-color 0.3s ease;
            background-color: rgb(249, 250, 250);
            margin-top: 0;
            margin-bottom:0px;
          }
          
          .next-button {
            font-family: 'Sen', sans-serif;
            font-weight: 800;
            color: white;
            font-size: 15px;
            background-color: rgb(118, 207, 236);
            border: rgb(118, 207, 236);
            padding: 10px 25px;
            margin-top: 50px;
            margin-left: 90px;
            cursor: pointer;
            border-radius: 6px;
            transition: background-color 0.3s ease;
          }
             .header-actions1 {
  position: absolute;
  top: 0;
  left:700px;
  right: 0;
  height: 90%;
  display: flex;

  gap: 0.5rem;
  padding: 1rem;
  z-index: 2;
}

.user-info {
    display: flex;
   
    gap: 0.5rem;
  }
  
  .user-avatar {
    width: 32px;
    height: 32px;
    border-radius: 9999px;
    object-fit: cover;
  }
  
  .user-name {
   font-size: 0.95rem; font-weight: 900; color: #2d3748;
  }
  
  .icon-button {
    background: transparent;
    border: none;
    cursor: pointer;
    color: black;
  }
  
  .icon-button.small {
    padding: 0 4px;
  }
  

          .header-text {
           
            margin-bottom: 0px;
            color: rgb(34, 123, 153);
          }

          .next-button:hover {
            background-color: #0AAAE1;
          }
        `}),u.jsx("div",{className:"profile-section",children:u.jsx("img",{src:"/young.png",alt:"Profile",className:"profile-icon"})}),u.jsxs("div",{className:"header-text",children:[u.jsx("img",{src:"/nounsheader.png",alt:""}),u.jsxs("div",{className:"header-actions1",children:[u.jsx("button",{className:"icon-button",children:u.jsx(rP,{})}),u.jsx("button",{className:"icon-button",children:u.jsx(oP,{})}),u.jsxs("div",{className:"user-info",children:[u.jsx("button",{style:h,onClick:g,onMouseOver:m,onMouseOut:w,children:"Logout"}),u.jsx("img",{src:nP,alt:"User Avatar",className:"user-avatar"}),u.jsx("span",{className:"user-name",children:e.toUpperCase()||"Guest"}),u.jsx("button",{className:"icon-button small",children:u.jsx(iP,{})})]})]})]}),u.jsxs("header",{className:"quiz-header",children:[u.jsxs("div",{className:"header-left",children:[u.jsx("img",{src:"/igloo.png",alt:"Igloo",className:"header-icon"}),u.jsx("a",{href:"/nouns",className:"home-link",children:"Home"})]}),u.jsx("img",{src:"/Frame.jpg",alt:"Header Background",className:"header-bg"}),u.jsx("img",{src:"/Group 10.png",alt:"Overlay Icon",className:"group-icon"})]}),u.jsxs("main",{className:"quiz-content",children:[u.jsxs("div",{className:"image-row",children:[u.jsx("img",{src:"/tree_icon 2.png",alt:"Tree",className:"tree-img"}),u.jsx("img",{src:"/_.png",alt:"Underscore",className:"underscore-img"}),u.jsx("img",{src:"/bear.png",alt:"Bear",className:"bear-img"})]}),u.jsxs("div",{className:"quiz-task",children:[u.jsxs("p",{children:["1. ",u.jsx("span",{className:"circle-highlight",children:"Circle"})," the"," ",u.jsx("strong",{children:"nouns"})," below"]}),u.jsx("div",{className:"word-box",children:u.jsx("div",{className:"word-options",children:r.map((C,S)=>u.jsx("div",{className:"word-row",children:C.map(E=>u.jsx("button",{className:`word-button ${d[E]||""}`,onClick:()=>k(E),children:E},E))},S))})}),u.jsxs("div",{className:"button-wrapper",children:[u.jsx("button",{className:"previous-button",onClick:()=>window.location.href="/quizone",children:"TRY AGAIN"}),u.jsx("button",{className:"next-button",onClick:()=>window.location.href="/quiztwo",children:"NEXT QUESTION"})]})]})]}),u.jsx("footer",{className:"quiz-footer",children:u.jsx("img",{src:"/footer.png",alt:"Footer"})})]})},aP="/static/avatar1.png",lP=tr,uP=nr,cP=rr,dP=()=>{const e=$r(),[t,n]=v.useState({people:[],places:[],things:[]}),[r,o]=v.useState(!0),[i,s]=v.useState(!0),a=v.useRef(null),l=m=>{a.current&&(a.current.pause(),a.current=null),a.current=new Audio(m),a.current.play()},c=()=>{localStorage.removeItem("authToken"),e("/logout")},d={background:"linear-gradient(to right,rgb(37, 188, 202),rgb(135, 239, 241))",color:"#fff",padding:"10px 24px",fontWeight:"600",borderRadius:"12px",border:"none",cursor:"pointer",boxShadow:"0 4px 6px rgba(0,0,0,0.1)",transition:"all 0.3s ease"},f=m=>{m.target.style.background="linear-gradient(to right,rgb(37, 188, 202),rgb(135, 239, 241))"},p=m=>{m.target.style.background="linear-gradient(to right,rgb(46, 148, 167),rgb(114, 215, 224))"},b={people:["teacher","girl","bird"],places:["river","castle","playground"],things:["table","ball","train","flower"]},x=["table","river","ball","teacher","castle","train","girl","playground","flower","bird"],[y,k]=v.useState("");v.useEffect(()=>{const m=localStorage.getItem("username");m&&k(m)},[]),v.useRef({firstCorrect:new Audio("/static/firstcorrect.mp3"),wrongFirst:new Audio("/static/needhelp.mp3"),thirdCorrect:new Audio("/static/2-3correct1.mp3"),wrongThird:new Audio("/static/needhelp.mp3"),allCorrect:new Audio("/static/findall.mp3")});const g=()=>{const m=new Set([...t.people,...t.places,...t.things]);return x.filter(w=>!m.has(w))},h=m=>w=>{w.preventDefault();const C=w.dataTransfer.getData("text/plain");n(S=>{if(Object.values(S).some(P=>P.includes(C)))return S;const j=b[m].includes(C),A=document.querySelector(".bear-img");A&&(A.src=j?"/static/polar bear face 1.gif":"/static/polar bearface 2.gif",setTimeout(()=>{A.src="/static/bear.png"},2e3)),j&&r?(l("/static/firstcorrect.mp3"),o(!1)):!j&&i&&(l("/static/a.mp3"),s(!1));const z={...S,[m]:[...S[m],C]};return Object.values(z).flat().length===x.length&&setTimeout(()=>{l("/static/next.mp3")},1e3),z})};return g(),u.jsxs("div",{style:{backgroundColor:"white",minHeight:"100vh",display:"flex",flexDirection:"column",fontFamily:"'Comic Neue', sans-serif"},children:[u.jsx("style",{children:`
          @import url('https://fonts.googleapis.com/css2?family=Bakbak+One&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Sen:wght@800&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Comic+Neue&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap');

          .quiz-footer img {
            width: 100%;
            height: auto;
            display: block;
          }

          .quiz-content {
            flex: 1;
            position: relative;
            display: flex;
          }

          .header-tex{
            position: absolute;
            top: 0px;
            right: 20px;
            align-items: center;
            margin-top:5px;
            margin-right:0px;
            margin-left:0px;
            color: rgb(34, 123, 153);
            
          
          }
          .image-row {
            position: absolute;
            top: 0;
            left: 0;
          }

          .tree-img {
            width: 150px;
            height: 240px;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 4;
            margin-left: 90px;
            padding-top: 245px;
          }

          .underscore-img {
            width: 230px;
            height: 330px;
            position: absolute;
            top: 0;
            left: 129px;
            z-index: 2;
            padding-top: 125px;
          }

          .header-text {
            position: absolute;
            top: 0px;
            right: 20px;
            align-items: center;
            margin-top:5px;
            margin-right:570px;
            margin-left:0px;
            
          
          }

          .profile-section {
            position: absolute;
            top: 10px;
            left: 10px;
            display: flex;
            align-items: center;
            gap: 10px;
            z-index: 10;
          }

          .profile-icon {
            margin-top:0px;
            height: 40px;
            margin-left:25px;
            object-fit: cover;
          }

          .username {
            font-family: 'Comic Neue', sans-serif;
            font-size: 16px;
            font-weight: bold;
            color: black;
          }

          .header-left {
            position: absolute;
            top: 45px;
            left: 10px;
            text-align: center;
            z-index: 10;
          }

          .header-icon {
            width: 80px;
            height: 70px;
            display: block;
            margin-left: 10px;
            padding-top:15px;
          }

           .home-link {
            font-family: 'Comic Neue', sans-serif;
            font-size: 20px;
            color: black;
            text-decoration: none;
            font-weight: bold;
            margin-top: 0px;
            margin-left:20px;
            display: block;
          }

          .bear-img {
            width: 390px;
            height: 375px;
            position: absolute;
            top: 0;
            left: 193px;
            z-index: 3;
            padding-top: 115px;
          }

          .quiz-task {
            margin-left:800px;
            margin-top: 15px;
            margin-right: 0px;
            text-align: left;
            max-width: 700px;
            font-size: 20px;
            font-family: 'Comic Neue', sans-serif;
          }

          .quiz-task strong {
            font-weight: bold;
          }

          .circle-highlight {
            border: 3px solid #FFBF00;
            border-radius: 40px;
            padding: 2px 6px;
            display: inline-block;
          }

          .word-box {
            margin-top: 30px;
            padding: 20px;
            background-color:white;
            border-radius: 30px;
            border: 2px solid grey;
            font-weight: bolder;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
          }

          .word-options {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 30px;
            font-weight: bolder;
           font-family: 'Comic Neue', sans-serif;
          }

          .word-row {
            display: flex;
            gap: 30px;
            flex-wrap: wrap;
            justify-content: center;
          }

          .word-button {
            border-radius: 10px;
            border: 2px solid #333;
            background-color: white;
            border-color: rgb(192, 202, 209);
            cursor: pointer;
            font-size: 20px;
            font-weight: bolder;
            font-family: 'Comic Neue', sans-serif;
            transition: background-color 0.3s ease, color 0.3s ease;
          }

          .word-button.correct {
            color: black;
            font-size: 20px;
            font-weight: bolder;
            font-family: 'Comic Neue', sans-serif;
            border-color: #4caf50;
          }

          .word-button.wrong {
            color: black;
            font-size: 20px;
            font-weight: bolder;
            font-family: 'Comic Neue', sans-serif;
            border-color:rgba(240, 44, 14, 0.85);
          }

          .quiz-header {
            position: relative;
            width: 100%;
            height: 25vh;
            overflow: hidden;
            display: flex;
            align-items: center;
          }

           .header-bg {
            padding-top: 35px;
            width: 100%;
            height: 15vh;
            object-fit: cover;
            display: block;
          }

         .group-icon {
            position: absolute;
            top: 60px;
            right: 40px;
            width: 40vh;
            height: auto;
            z-index: 5;
          }
            .previous-button {
            font-family: 'Sen', sans-serif;
            font-weight: 800;
            font-size: 14px;
            padding: 10px 20px;
            cursor: pointer;
            border-radius: 6px;
            border:2px solid rgb(19, 150, 194);
            transition: background-color 0.3s ease;
          background-color: rgb(249, 250, 250);
            margin-top: 0;
            margin-bottom:0px;
          }
          .next-button {
            font-family: 'Sen', sans-serif;
            font-weight: 800;
            color: white;
            font-size: 15px;
            background-color: rgb(118, 207, 236);
            border: rgb(118, 207, 236);
            padding: 10px 25px;
            margin-top: 50px;
            margin-left: 90px;
            cursor: pointer;
            border-radius: 6px;
            transition: background-color 0.3s ease;
          }
             .header-actions1 {
  position: absolute;
  top: 0;
  left:700px;
  right: 0;
  height: 90%;
  display: flex;

  gap: 0.5rem;
  padding: 1rem;
  z-index: 2;
}
.button-wrapper{
margin-top:0px;
padding-top:0px;
}
.user-info {
    display: flex;
   
    gap: 0.5rem;
  }
  
  .user-avatar {
    width: 32px;
    height: 32px;
    border-radius: 9999px;
    object-fit: cover;
  }
  
  .user-name {
   font-size: 0.95rem; font-weight: 900; color: #2d3748;
  }
  
  .icon-button {
    background: transparent;
    border: none;
    cursor: pointer;
    color: black;
  }
  
  .icon-button.small {
    padding: 0 4px;
  }
  

          .header-text {
           
            margin-bottom: 0px;
            color: rgb(34, 123, 153);
          }

          .next-button:hover {
            background-color: #0AAAE1;
          }
        `}),u.jsx("div",{className:"profile-section",children:u.jsx("img",{src:"young.png",alt:"Profile",className:"profile-icon"})}),u.jsxs("div",{className:"header-text",children:[u.jsx("img",{src:"nounsheader.png",alt:""}),u.jsxs("div",{className:"header-actions1",children:[u.jsx("button",{className:"icon-button",children:u.jsx(lP,{})}),u.jsx("button",{className:"icon-button",children:u.jsx(uP,{})}),u.jsxs("div",{className:"user-info",children:[u.jsx("button",{style:d,onClick:c,onMouseOver:f,onMouseOut:p,children:"Logout"}),u.jsx("img",{src:aP,alt:"User Avatar",className:"user-avatar"}),u.jsx("span",{className:"user-name",children:y.toUpperCase()||"Guest"}),u.jsx("button",{className:"icon-button small",children:u.jsx(cP,{})})]})]})]}),u.jsxs("header",{className:"quiz-header",children:[u.jsxs("div",{className:"header-left",children:[u.jsx("img",{src:"igloo.png",alt:"Igloo",className:"header-icon"}),u.jsx("a",{href:"/nouns",className:"home-link",children:"Home"})]}),u.jsx("img",{src:"Frame.jpg",alt:"Header Background",className:"header-bg"}),u.jsx("img",{src:"Q2.png",alt:"Overlay Icon",className:"group-icon"})]}),u.jsxs("main",{className:"quiz-content",children:[u.jsxs("div",{className:"image-row",children:[u.jsx("img",{src:"tree_icon 2.png",alt:"Tree",className:"tree-img"}),u.jsx("img",{src:"_.png",alt:"Underscore",className:"underscore-img"}),u.jsx("img",{src:"bear.png",alt:"Bear",className:"bear-img"})]}),u.jsxs("div",{className:"quiz-task",children:[u.jsxs("p",{children:["2. Read the 10 words below. Drag each word into the correct box:"," ",u.jsx("br",{}),u.jsx("strong",{children:"People, Places or Things."})," (The first one is done for you)",g().length===0?u.jsx("div",{style:{fontSize:"24px",fontWeight:"bold",marginTop:"40px",marginLeft:"10px",fontFamily:"'Comic Neue', sans-serif",color:"green"},children:"You got all answers!!!"}):u.jsxs(u.Fragment,{children:[u.jsx("div",{style:{display:"flex",justifyContent:"center",gap:"25px",backgroundColor:"white",borderRadius:"40px",padding:"6px",maxWidth:"400px",marginTop:"20px",flexWrap:"wrap",border:"2px solid #ccc"},children:g().slice(0,5).map(m=>u.jsx("div",{draggable:!0,onDragStart:w=>w.dataTransfer.setData("text/plain",m),style:{padding:"2px 2px",border:"2px solid #999",borderRadius:"10px",backgroundColor:"white",cursor:"grab",fontWeight:"bold",fontSize:"15px",fontFamily:"'Comic Neue', sans-serif"},children:m},m))}),u.jsx("div",{style:{display:"flex",justifyContent:"center",gap:"25px",backgroundColor:"white",borderRadius:"40px",padding:"6px",marginTop:"10px",maxWidth:"400px",flexWrap:"wrap",border:"2px solid #ccc"},children:g().slice(5).map(m=>u.jsx("div",{draggable:!0,onDragStart:w=>w.dataTransfer.setData("text/plain",m),style:{padding:"2px 2px",border:"2px solid #999",borderRadius:"10px",backgroundColor:"white",cursor:"grab",fontWeight:"bold",fontSize:"15px",fontFamily:"'Comic Neue', sans-serif"},children:m},m))}),u.jsxs("div",{style:{display:"flex",gap:"10px",marginTop:"30px",marginLeft:"0px",flexWrap:"wrap"},children:[u.jsxs("div",{onDragOver:m=>m.preventDefault(),onDrop:h("people"),style:{position:"relative",backgroundColor:"#B5EBFB",padding:"20px",borderRadius:"20px",minWidth:"150px",minHeight:"120px",textAlign:"center"},children:[u.jsx("div",{style:{position:"absolute",top:"-15px",left:"50%",transform:"translateX(-50%)",backgroundColor:"#00cccc",borderRadius:"25px",padding:"5px 15px",fontWeight:"bold",fontFamily:"'Comic Neue', sans-serif",color:"white",fontSize:"15px",boxShadow:"0 2px 6px rgba(0,0,0,0.2)"},children:"People"}),u.jsx("div",{style:{fontFamily:"'Comic Neue', sans-serif",fontWeight:"bold",color:"green",fontSize:"15px"},children:"farmer"}),t.people.map(m=>u.jsx("div",{style:{fontWeight:"bold",fontSize:"15px",fontFamily:"'Comic Neue', sans-serif",color:b.people.includes(m)?"green":"red"},children:m},m))]}),u.jsxs("div",{onDragOver:m=>m.preventDefault(),onDrop:h("places"),style:{position:"relative",backgroundColor:"#E7E0EC",padding:"20px",borderRadius:"20px",minWidth:"150px",minHeight:"120px",textAlign:"center"},children:[u.jsx("div",{style:{position:"absolute",top:"-15px",left:"50%",transform:"translateX(-50%)",backgroundColor:"#262161",borderRadius:"25px",padding:"5px 15px",fontWeight:"bold",fontFamily:"'Comic Neue', sans-serif",color:"white",fontSize:"15px",boxShadow:"0 2px 6px rgba(0,0,0,0.2)"},children:"Places"}),t.places.map(m=>u.jsx("div",{style:{fontWeight:"bold",fontSize:"15px",fontFamily:"'Comic Neue', sans-serif",color:b.places.includes(m)?"green":"red"},children:m},m))]}),u.jsxs("div",{onDragOver:m=>m.preventDefault(),onDrop:h("things"),style:{position:"relative",backgroundColor:"#FFF8DC",padding:"20px",borderRadius:"20px",minWidth:"150px",minHeight:"120px",textAlign:"center"},children:[u.jsx("div",{style:{position:"absolute",top:"-15px",left:"50%",transform:"translateX(-50%)",backgroundColor:"#FFC24F",borderRadius:"25px",padding:"5px 15px",fontWeight:"bold",fontFamily:"'Comic Neue', sans-serif",color:"white",fontSize:"15px",boxShadow:"0 2px 6px rgba(0,0,0,0.2)"},children:"Things"}),t.things.map(m=>u.jsx("div",{style:{fontWeight:"bold",fontSize:"15px",fontFamily:"'Comic Neue', sans-serif",color:b.things.includes(m)?"green":"red"},children:m},m))]})]})]})]}),u.jsxs("div",{className:"button-wrapper",children:[u.jsx("button",{className:"previous-button",onClick:()=>window.location.href="/quizone",children:"PREVIOUS QUESTION"}),u.jsx("button",{className:"next-button",onClick:()=>window.location.href="/quizthree",children:"NEXT QUESTION"})]})]})]}),u.jsx("footer",{className:"quiz-footer",children:u.jsx("img",{src:"footer.png",alt:"Footer"})})]})},fP="/Frame (2).png",pP="/beargif.gif",hP="/congrats.png",mP="/nouns (2).png",gP="/statement.png",xP="/spelling.png",yP="/comp.png",vP="/avatar1.png",bP=tr,wP=nr,SP=rr,kP=()=>{const e=$r(),[t,n]=v.useState("");v.useEffect(()=>{const a=localStorage.getItem("username");a&&n(a)},[]);const r=()=>{localStorage.removeItem("authToken"),e("/logout")},o={background:"linear-gradient(to right,rgb(37, 188, 202),rgb(135, 239, 241))",color:"#fff",padding:"10px 24px",fontWeight:"600",borderRadius:"12px",border:"none",cursor:"pointer",boxShadow:"0 4px 6px rgba(0,0,0,0.1)",transition:"all 0.3s ease"},i=a=>{a.target.style.background="linear-gradient(to right,rgb(37, 188, 202),rgb(135, 239, 241))"},s=a=>{a.target.style.background="linear-gradient(to right,rgb(46, 148, 167),rgb(114, 215, 224))"};return u.jsxs("div",{className:"dashboard-page font-sassoon",children:[u.jsx(zs,{activeLink:"dashboard"}),u.jsxs("main",{className:"dashboard-main-content",children:[u.jsxs("header",{className:"dashboard-header",children:[u.jsx("h1",{className:"header-title",children:"Dashboard"}),u.jsxs("div",{className:"header-actions",children:[u.jsx("button",{className:"icon-button",children:u.jsx(bP,{})}),u.jsx("button",{className:"icon-button",children:u.jsx(wP,{})}),u.jsxs("div",{className:"user-info",children:[u.jsx("button",{style:o,onClick:r,onMouseOver:i,onMouseOut:s,children:"Logout"}),u.jsx("img",{src:vP,alt:"User Avatar",className:"user-avatar"}),u.jsx("span",{className:"user-name",children:t.toUpperCase()||"Guest"}),u.jsx("button",{className:"icon-button small",children:u.jsx(SP,{})})]})]})]}),u.jsxs("div",{className:"dashboard-grid",children:[u.jsxs("section",{className:"welcome-banner",children:[u.jsxs("div",{className:"banner-content-wrapper",children:[u.jsx("img",{src:fP,alt:"",className:"banner-background-image"}),u.jsxs("div",{className:"banner-text-content",children:[u.jsxs("h2",{className:"banner-title",children:["Welcome Back,",t.toUpperCase()||"Guest","!"]}),u.jsx("p",{className:"banner-description",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quam felis, maximus a ornare in, pellentesque eget turpis."})]}),u.jsx("div",{className:"banner-bear-container",children:u.jsx("img",{src:pP,alt:"Welcome Bear",className:"banner-bear"})})]}),u.jsxs("div",{className:"congrats-badge",children:[u.jsx("p",{children:"CONGRATULATIONS"}),u.jsx("img",{src:hP,alt:"Congratulations Badge"}),u.jsx("span",{children:"LEVEL 1 - Super champ"})]})]}),u.jsxs("section",{className:"my-classes-section",children:[u.jsx("h2",{className:"section-title",children:"My Classes"}),u.jsxs("div",{className:"classes-grid",children:[u.jsx("div",{className:"class-card nouns",children:u.jsxs(sn,{to:"/nouns",children:[" ",u.jsx("img",{src:mP,alt:"Nouns activity background",className:"class-card-bg"})]})}),u.jsx("div",{className:"class-card statements",children:u.jsxs(sn,{to:"/statements",children:["    ",u.jsx("img",{src:gP,alt:"Statements activity background",className:"class-card-bg"})]})}),u.jsx("div",{className:"class-card spellings",children:u.jsx("img",{src:xP,alt:"Spellings activity background",className:"class-card-bg"})}),u.jsx("div",{className:"class-card comprehension",children:u.jsx("img",{src:yP,alt:"Comprehension activity background",className:"class-card-bg"})})]})]}),u.jsx("div",{className:"activity-progress-wrapper"})]}),u.jsx("footer",{className:"dashboard-footer",children:u.jsx("img",{src:"footer.png",alt:"Footer Decoration"})})]})]})},CP="/avatar1.png",EP=tr,NP=nr,_P=rr,Dg=()=>{const e=$r(),[t,n]=v.useState("/bear.png"),[r,o]=v.useState(""),[i,s]=v.useState(0),[a,l]=v.useState(0),c=v.useRef(null),d=S=>{c.current&&(c.current.pause(),c.current=null),c.current=new Audio(S),c.current.play()},f=[{id:"a",text:["The","lion","roared","."],correctNouns:[1]},{id:"b",text:["The","baby","is","crying","."],correctNouns:[1]},{id:"c",text:["The","castle","is","on","hill","."],correctNouns:[1,4]},{id:"e",text:["The","teacher","sat","on","a","bench","."],correctNouns:[1,5]},{id:"d",text:["A","butterfly","landed","on","the","flower","."],correctNouns:[1,5]},{id:"f",text:["My","cat","chased","a","mouse","in","the","garden","."],correctNouns:[1,4,7]},{id:"g",text:["Sarah","and","Tom","read","books","in","the","library","."],correctNouns:[0,2,4,7]}],[p,b]=v.useState(f.map(S=>({id:S.id,selectedWords:Array(S.text.length).fill(!1),isChecked:!1,hasErrors:!1}))),x=(S,E)=>{p[S].isChecked||b(j=>{const A=[...j];return A[S]={...A[S],selectedWords:[...A[S].selectedWords]},A[S].selectedWords[E]=!A[S].selectedWords[E],A[S].hasErrors&&(A[S].hasErrors=!1),A})},y=S=>{const E=f[S],j=p[S].selectedWords;let A=!1;for(let z=0;z<j.length;z++){const T=j[z],P=E.correctNouns.includes(z);if(T!==P){A=!0;break}}b(z=>{const T=[...z];return T[S]={...T[S],isChecked:!0,hasErrors:A},A?(n("/polar bearface 2.gif"),setTimeout(()=>{n("/bear.png")},2e3),l(P=>{const I=P+1;return I===1?d("/a.mp3"):I===2?d("/c.mp3"):I===3&&d("/b.mp3"),I})):(n("/polar bear face 1.gif"),setTimeout(()=>{n("/bear.png")},2e3),s(P=>{const I=P+1;I===1?d("/2-3correct1.mp3"):I===2?d("/2-3correct2.mp3"):I===3&&d("/2-3correct3.mp3");const M=T.every(U=>U.isChecked),W=T.every(U=>U.isChecked&&!U.hasErrors);return M&&W&&setTimeout(()=>{d("/findall.mp3"),setTimeout(()=>{d("/next.mp3")},2e3)},1e3),I})),T})},k=S=>{b(E=>{const j=[...E];return j[S]={...j[S],selectedWords:Array(f[S].text.length).fill(!1),isChecked:!1,hasErrors:!1},j})},g=(S,E)=>{if(!p[S].isChecked)return null;const j=p[S].selectedWords[E],A=f[S].correctNouns.includes(E);return j&&A?"correct":j&&!A?"incorrect":!j&&A?"missed":null},h=()=>{localStorage.removeItem("authToken"),e("/logout")},m={background:"linear-gradient(to right,rgb(37, 188, 202),rgb(135, 239, 241))",color:"#fff",padding:"10px 24px",fontWeight:"600",borderRadius:"12px",border:"none",cursor:"pointer",boxShadow:"0 4px 6px rgba(0,0,0,0.1)",transition:"all 0.3s ease"},w=S=>{S.target.style.background="linear-gradient(to right,rgb(37, 188, 202),rgb(135, 239, 241))"},C=S=>{S.target.style.background="linear-gradient(to right,rgb(46, 148, 167),rgb(114, 215, 224))"};return v.useEffect(()=>{const S=localStorage.getItem("username");S&&o(S)},[]),u.jsxs("div",{style:{backgroundColor:"white",minHeight:"100vh",display:"flex",flexDirection:"column",fontFamily:"'Comic Neue', sans-serif"},children:[u.jsx("style",{children:`
          @import url('https://fonts.googleapis.com/css2?family=Bakbak+One&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Sen:wght@800&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Comic+Neue&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap');

          .quiz-footer img {
            width: 100%;
            height: auto;
            display: block;
          }

          .quiz-content {
          padding-bottom:0px;
            flex: 1;
            margin-top: -2px;
            
            padding-left:700px;
            padding-right:0px;
          }

          .header-tex{
            position: absolute;
            top: 0px;
            right: 20px;
            align-items: center;
            margin-top:5px;
            margin-right:0px;
            margin-left:0px;
            color: rgb(34, 123, 153);
            
          
          }
          .image-row {
            position: absolute;
            top: 0;
            left: 0;
          }

          .tree-img {
            width: 150px;
            height: 240px;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 4;
            margin-left: 90px;
            padding-top: 420px;
          }

          .underscore-img {
            width: 230px;
            height: 330px;
            position: absolute;
            top: 0;
            left: 129px;
            z-index: 2;
            padding-top: 300px;
          }

          .header-text {
            position: absolute;
            top: 0px;
            right: 20px;
            align-items: center;
            margin-top:5px;
            margin-right:570px;
            margin-left:0px;
            
          
          }

          .profile-section {
            position: absolute;
            top: 10px;
            left: 10px;
            display: flex;
            align-items: center;
            gap: 10px;
            z-index: 10;
          }

          .profile-icon {
            margin-top:0px;
            height: 40px;
            margin-left:25px;
            object-fit: cover;
          }

          .username {
            font-family: 'Comic Neue', sans-serif;
            font-size: 16px;
            font-weight: bold;
            color: black;
          }

          .header-left {
            position: absolute;
            top: 45px;
            left: 10px;
            text-align: center;
            z-index: 10;
          }

          .header-icon {
            width: 80px;
            height: 70px;
            display: block;
            margin-left: 10px;
            padding-top:15px;
          }

           .home-link {
            font-family: 'Comic Neue', sans-serif;
            font-size: 20px;
            color: black;
            text-decoration: none;
            font-weight: bold;
            margin-top: 0px;
            margin-left:20px;
            display: block;
          }

          .bear-img {
            width: 390px;
            height: 375px;
            position: absolute;
            top: 0;
            left: 193px;
            z-index: 3;
            padding-top: 295px;
          }

          .quiz-task {
            margin-left:800px;
            margin-top: 15px;
            margin-right: 0px;
            text-align: left;
            max-width: 700px;
            font-size: 20px;
            font-family: 'Comic Neue', sans-serif;
          }

          .quiz-task strong {
            font-weight: bold;
          }

          .circle-highlight {
            border: 3px solid #FFBF00;
            border-radius: 40px;
            padding: 2px 6px;
            display: inline-block;
          }

          .word-box {
            margin-top: 30px;
            padding: 20px;
            background-color:white;
            border-radius: 30px;
            border: 2px solid grey;
            font-weight: bolder;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
          }

          .word-options {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 30px;
            font-weight: bolder;
           font-family: 'Comic Neue', sans-serif;
          }

          .word-row {
            display: flex;
            gap: 30px;
            flex-wrap: wrap;
            justify-content: center;
          }

          .word-button {
            border-radius: 10px;
            border: 2px solid #333;
            background-color: white;
            border-color: rgb(192, 202, 209);
            cursor: pointer;
            font-size: 20px;
            font-weight: bolder;
            font-family: 'Comic Neue', sans-serif;
            transition: background-color 0.3s ease, color 0.3s ease;
          }

          .word-button.correct {
            color: black;
            font-size: 20px;
            font-weight: bolder;
            font-family: 'Comic Neue', sans-serif;
            border-color: #4caf50;
          }

          .word-button.wrong {
            color: black;
            font-size: 20px;
            font-weight: bolder;
            font-family: 'Comic Neue', sans-serif;
            border-color:rgba(240, 44, 14, 0.85);
          }

          .quiz-header {
            position: relative;
            width: 100%;
            height: 25vh;
            overflow: hidden;
            display: flex;
            align-items: center;
          }

           .header-bg {
            padding-top: 35px;
            width: 100%;
            height: 15vh;
            object-fit: cover;
            display: block;
          }

         .group-icon {
            position: absolute;
            top: 60px;
            right: 40px;
            width: 40vh;
            height: auto;
            z-index: 5;
          }
            .previous-button {
            font-family: 'Sen', sans-serif;
            font-weight: 800;
            font-size: 14px;
            padding: 10px 20px;
            cursor: pointer;
            border-radius: 6px;
            border:2px solid rgb(19, 150, 194);
            transition: background-color 0.3s ease;
          background-color: rgb(249, 250, 250);
            margin-top: 0;
            margin-bottom:0px;
          }
          .next-button {
            font-family: 'Sen', sans-serif;
            font-weight: 800;
            color: white;
            font-size: 15px;
            background-color: rgb(118, 207, 236);
            border: rgb(118, 207, 236);
            padding: 10px 25px;
            margin-top: 50px;
            margin-left: 90px;
            cursor: pointer;
            border-radius: 6px;
            transition: background-color 0.3s ease;
          }
             .header-actions1 {
  position: absolute;
  top: 0;
  left:700px;
  right: 0;
  height: 90%;
  display: flex;

  gap: 0.5rem;
  padding: 1rem;
  z-index: 2;
}
.button-wrapper{
margin-top:0px;
padding-top:0px;
padding-left:730px;
margin-bottom:0px;
margin-top: -35px;
}
.user-info {
    display: flex;
   
    gap: 0.5rem;
  }
  
  .user-avatar {
    width: 32px;
    height: 32px;
    border-radius: 9999px;
    object-fit: cover;
  }
  
  .user-name {
   font-size: 0.95rem; font-weight: 900; color: #2d3748;
  }
  
  .icon-button {
    background: transparent;
    border: none;
    cursor: pointer;
    color: black;
  }
  
  .icon-button.small {
    padding: 0 4px;
  }
  

          .header-text {
           
            margin-bottom: 0px;
            color: rgb(34, 123, 153);
          }

          .next-button:hover {
            background-color: #0AAAE1;
          }
        `}),u.jsx("div",{className:"profile-section",children:u.jsx("img",{src:"/young.png",alt:"Profile",className:"profile-icon"})}),u.jsxs("div",{className:"header-text",children:[u.jsx("img",{src:"/nounsheader.png",alt:""}),u.jsxs("div",{className:"header-actions1",children:[u.jsx("button",{className:"icon-button",children:u.jsx(EP,{})}),u.jsx("button",{className:"icon-button",children:u.jsx(NP,{})}),u.jsxs("div",{className:"user-info",children:[u.jsx("button",{style:m,onClick:h,onMouseOver:w,onMouseOut:C,children:"Logout"}),u.jsx("img",{src:CP,alt:"User Avatar",className:"user-avatar"}),u.jsx("span",{className:"user-name",children:r.toUpperCase()||"Guest"}),u.jsx("button",{className:"icon-button small",children:u.jsx(_P,{})})]})]})]}),u.jsxs("header",{className:"quiz-header",children:[u.jsxs("div",{className:"header-left",children:[u.jsx("img",{src:"/igloo.png",alt:"Igloo",className:"header-icon"}),u.jsx("a",{href:"/nouns",className:"home-link",children:"Home"})]}),u.jsx("img",{src:"/Frame.jpg",alt:"Header Background",className:"header-bg"}),u.jsx("img",{src:"/image.png",alt:"Overlay Icon",className:"group-icon"})]}),u.jsxs("div",{className:"image-row",children:[u.jsx("img",{src:"/tree_icon 2.png",alt:"Tree",className:"tree-img"}),u.jsx("img",{src:"/_.png",alt:"Underscore",className:"underscore-img"}),u.jsx("img",{src:t,alt:"Bear",className:"bear-img"})]}),u.jsx("main",{className:"quiz-content1",children:u.jsx("div",{className:"right-panel",children:u.jsxs("div",{className:"quiz-content",children:[u.jsxs("p",{className:"quiz-instruction",children:[u.jsx("span",{className:"question-number",children:"3."}),u.jsx("u",{children:"Underline all the nouns"})," in each sentence. "," ",u.jsx("span",{className:"instruction-detail",children:"(There may be more than one)"})]}),u.jsxs("p",{className:"quiz-example",children:[u.jsx("span",{className:"example-label",children:"Example:"})," The ",u.jsx("span",{className:"example-noun",children:"dog"})," is barking."]}),u.jsx("ul",{className:"sentence-list",children:p.map((S,E)=>u.jsxs("li",{className:"sentence-item",children:[" ",u.jsxs("span",{className:"sentence-id",children:[S.id,"."]})," ",u.jsxs("div",{className:"sentence-text",children:[" ",f[E].text.map((j,A)=>{const z=g(E,A),P=`word ${S.selectedWords[A]?"selected":""} ${z||""} ${S.isChecked?"disabled":""}`;return u.jsx("span",{onClick:()=>x(E,A),className:P,role:"button",tabIndex:S.isChecked?-1:0,children:j},A)}),u.jsxs("div",{className:"tooltip-container",children:[u.jsx("span",{className:"tooltip-trigger",children:"🌟"}),u.jsxs("div",{className:"tooltip-content",children:["This sentence has ",u.jsxs("span",{className:"tooltip-highlight",children:[f[E].correctNouns.length," ",f[E].correctNouns.length===1?"noun":"nouns"]}),".",u.jsx("div",{className:"tooltip-arrow"})]})]})]})," ",u.jsxs("div",{className:"sentence-button-area",children:[" ",S.isChecked?S.hasErrors?u.jsx("button",{onClick:()=>k(E),className:"button button-try-again-sentence",children:"Try Again"}):u.jsx("span",{className:"feedback-correct",children:"✓ Correct!"}):u.jsx("button",{onClick:()=>y(E),className:"button button-check-sentence",children:"Check Answer"})]})," "]},S.id))})]})})}),u.jsxs("div",{className:"button-wrapper",children:[u.jsx("button",{className:"previous-button",onClick:()=>window.location.href="/quiztwo",children:"PREVIOUS QUESTION"}),u.jsx("button",{className:"next-button",onClick:()=>window.location.href="/quizfour",children:"NEXT QUESTION"})]}),u.jsx("footer",{className:"quiz-footer",children:u.jsx("img",{src:"/footer.png",alt:"Footer"})})]})},jP="/avatar1.png",RP=tr,TP=nr,PP=rr,OP=()=>{const e=$r(),[t,n]=v.useState(""),[r,o]=v.useState(!0),[i,s]=v.useState(!1),[a,l]=v.useState(0),[c,d]=v.useState(null),f=v.useRef(null),p=v.useRef(null),b=v.useCallback(T=>{if(T.code==="Space"&&!T.repeat&&!(T.target instanceof HTMLInputElement||T.target instanceof HTMLTextAreaElement)&&(T.preventDefault(),f.current)){if(i)f.current.pause(),p.current&&p.current.pause();else if(f.current.play(),o(!1),f.current.currentTime<.1&&c){const P=new Audio(c);p.current=P,setTimeout(()=>{P.play().catch(I=>{console.error("Error playing audio:",I)})},150)}s(!i)}},[i,c]);v.useEffect(()=>{const T=localStorage.getItem("username");T&&n(T)},[]),v.useEffect(()=>{const T=localStorage.getItem("username");return T&&(n(T),y(T)),window.addEventListener("keydown",b),()=>{window.removeEventListener("keydown",b)}},[b]);const x=T=>new Promise(P=>setTimeout(P,T)),y=async(T,P=0)=>{console.log("Generating greeting for:",T);try{const I=localStorage.getItem(`greeting_${T}`);if(I){console.log("Using cached greeting"),d(I);return}console.log("Generating new greeting, attempt:",P+1);const M=await fetch("https://api.elevenlabs.io/v1/text-to-speech/pqHfZKP75CvOlQylNhV4",{method:"POST",headers:{Accept:"audio/mpeg","Content-Type":"application/json","xi-api-key":"sk_c94cbe12b86e58f62e95ba8fd2a63c57cf2aba1b67cdd0a4"},body:JSON.stringify({text:`Hello!! ${T}!!`,model_id:"eleven_turbo_v2",voice_settings:{stability:.4,similarity_boost:.5}})});if(console.log("API Response status:",M.status),M.status===429&&P<3)return console.log("Too many requests, retrying after delay..."),await x(2e3*(P+1)),y(T,P+1);if(!M.ok){const F=await M.text();throw new Error(`Failed to generate audio: ${F}`)}const W=await M.arrayBuffer(),U=new Blob([W],{type:"audio/mpeg"}),Q=URL.createObjectURL(U);console.log("Audio URL created:",Q),localStorage.setItem(`greeting_${T}`,Q),d(Q)}catch(I){if(console.error("Error generating greeting:",I),I.message.includes("too_many_concurrent_requests")&&P<3)return console.log("Retrying after error..."),await x(2e3*(P+1)),y(T,P+1)}},k=()=>{if(f.current){if(i)f.current.pause();else if(f.current.play(),o(!1),c){console.log("Playing greeting audio:",c);const T=new Audio(c);p.current=T,T.onerror=P=>{console.error("Audio playback error:",P)},setTimeout(()=>{T.play().catch(P=>{console.error("Error playing audio:",P)})},150)}else console.log("No greeting audio available");s(!i)}},g=()=>{s(!1),o(!0),f.current&&(f.current.currentTime=0),p.current&&(p.current.pause(),p.current.currentTime=0)},h=()=>{if(f.current){const T=f.current.currentTime/f.current.duration*100;l(T)}},m=T=>{if(f.current){const P=T.currentTarget,I=(T.clientX-P.getBoundingClientRect().left)/P.offsetWidth;f.current.currentTime=I*f.current.duration}},w=()=>{f.current&&(f.current.currentTime+=10)},C=()=>{f.current&&(f.current.currentTime-=10)},S=()=>{f.current&&(document.fullscreenElement?document.exitFullscreen():f.current.requestFullscreen())},E=()=>{localStorage.removeItem("authToken"),e("/logout")},j={background:"linear-gradient(to right,rgb(37, 188, 202),rgb(135, 239, 241))",color:"#fff",padding:"10px 24px",fontWeight:"600",borderRadius:"12px",border:"none",cursor:"pointer",boxShadow:"0 4px 6px rgba(0,0,0,0.1)",transition:"all 0.3s ease"},A=T=>{T.target.style.background="linear-gradient(to right,rgb(37, 188, 202),rgb(135, 239, 241))"},z=T=>{T.target.style.background="linear-gradient(to right,rgb(46, 148, 167),rgb(114, 215, 224))"};return u.jsxs("div",{className:"dashboard-page font-sassoon",children:[u.jsx(zs,{activeLink:"home"}),u.jsxs("main",{className:"dashboard-main-content",children:[u.jsx("header",{className:"dashboard-header1",children:u.jsxs("div",{className:"header-wrapper",children:[u.jsx("img",{src:"/Resultframe.jpg",alt:"Header Background",className:"header-bg"}),u.jsxs("div",{className:"header-actions1",children:[u.jsx("button",{className:"icon-button",children:u.jsx(RP,{})}),u.jsx("button",{className:"icon-button",children:u.jsx(TP,{})}),u.jsxs("div",{className:"user-info",children:[u.jsx("button",{style:j,onClick:E,onMouseOver:A,onMouseOut:z,children:"Logout"}),u.jsx("img",{src:jP,alt:"User Avatar",className:"user-avatar"}),u.jsx("span",{className:"user-name",children:t.toUpperCase()||"Guest"}),u.jsx("button",{className:"icon-button small",children:u.jsx(PP,{})})]})]})]})}),u.jsx("style",{children:`
          @import url('https://fonts.googleapis.com/css2?family=Bakbak+One&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Sen:wght@800&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Comic+Neue&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap');

          .quiz-footer {
            margin-top: 0px;
            padding-top:0px;
          }
          .dashboard-header1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem; 
    flex-shrink: 0;
    background-color: #ffffff;
    padding: 1rem 1rem;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.05);
    border-radius: 0;
    margin-top: -1.5rem;
    margin-left: -8rem;
    margin-right: -4rem;
    margin-bottom: 0px;
    height:10vh;
    
    position: relative; /* Needed if z-index is used */
    z-index: 5;
}

          .quiz-footer img {
            width: 100%;
            height: auto;
            display: block;
             margin-top: 0px;
            padding-top:0px;
          }

          .quiz-content {
            flex: 1;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
            min-height: calc(100vh - 200px);
          }
            .header-tex{
             color: rgb(34, 123, 153);
             margin-right:0px;
             margin-left:1300px;
             margin-top:0px;
             padding-top:0px;
            }
          .header-actions1 {
  position: absolute;
  top: 0;
  right: 0;
  height: 90%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  z-index: 2;
}

.user-info {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .user-avatar {
    width: 32px;
    height: 32px;
    border-radius: 9999px;
    object-fit: cover;
  }
  
  .user-name {
    font-weight: 550;
    font-size:13px;
    color: black;
  }
  
  .icon-button {
    background: transparent;
    border: none;
    cursor: pointer;
    color: black;
  }
  
  .icon-button.small {
    padding: 0 4px;
  }
  

          .header-text {
            text-align: center;
            margin-bottom: 30px;
            color: rgb(34, 123, 153);
          }
          .image-row {
            position: absolute;
            top: 0;
            left: 0;
          }

          .tree-img {
            width: 150px;
            height: 240px;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 4;
            margin-left: 90px;
            padding-top: 245px;
          }
          .main-container {
            background-color: white;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            font-family: 'Comic Neue', sans-serif;
          }
          }

          .video-wrapper {
            position: relative;
            width: 650px;
            height: 400px;
            overflow: hidden;
            border-radius: 10px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            padding-bottom:190px;
           
          }

          .video-wrapper {
            position: relative;
            width: 650px;
            height: 400px;
            overflow: hidden;
            border-radius: 10px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
           
            margin-top: 0px;
            margin-bottom:0px;
            padding-bottom:0px;
            
          }

          .video-wrapper video {
            width: 100%;
            height: 90%;
            object-fit: cover;
            
            z-index: 1;
          }

          .overlay-img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: 2;
          }

          .play-button {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 3;
            cursor: pointer;
            width: 64px;
            height: 64px;
            transition: transform 0.2s ease;
          }

          .play-button:hover {
            transform: translate(-50%, -50%) scale(1.1);
          }

          .video-controls {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 10px;
            background-color: rgba(0, 0, 0, 0.7);
            display: flex;
            align-items: center;
            gap: 10px;
            z-index: 3;
          }

          .control-button {
            background: none;
            border: none;
            color: white;
            cursor: pointer;
            padding: 5px;
            font-size: 18px;
          }

          .control-button:hover {
            opacity: 0.8;
          }

          .progress-bar {
            flex: 1;
            height: 4px;
            background-color: rgba(255, 255, 255, 0.3);
            cursor: pointer;
            position: relative;
          }

          .progress-filled {
            height: 100%;
            background-color: white;
            transition: width 0.1s linear;
          }

          

          .header-text {
            top: 0px;
            left: 10px;
            display: flex;
            align-items: center;
            gap: 0px;
            z-index: 10;
          }
           

          .username {
            font-family: 'Comic Neue', sans-serif;
            font-size: 16px;
            font-weight: bold;
            color: black;
          }

          .header-left {
            position: absolute;
            top: 45px;
            left: 10px;
            text-align: center;
            z-index: 10;
          }

          .header-icon {
            width: 80px;
            height: 70px;
            display: block;
            margin-left: 20px;
            padding-top:3px;
          }

           .home-link {
            font-family: 'Comic Neue', sans-serif;
            font-size: 20px;
            color: black;
            text-decoration: none;
            font-weight: bold;
            margin-top: 0px;
            margin-left:20px;
            display: block;
          }

          .bear-img {
            width: 390px;
            height: 375px;
            position: absolute;
            top: 0;
            left: 193px;
            z-index: 3;
            padding-top: 115px;
          }

          .quiz-task {
            margin-left: auto;
            margin-top: 55px;
            margin-right: 250px;
            text-align: left;
            max-width: 400px;
            font-size: 30px;
            font-family: 'Comic Neue', sans-serif;
          }

          .quiz-task strong {
            font-weight: bold;
          }

          .circle-highlight {
            border: 3px solid #FFBF00;
            border-radius: 30px;
            padding: 2px 6px;
            display: inline-block;
          }

          .word-box {
            margin-top: 30px;
            padding: 20px;
            background-color:white;
            border-radius: 25px;
            border: 2px solid grey;
            font-weight: bolder;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
          }

          .word-options {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 30px;
            font-weight: bolder;
           font-family: 'Comic Neue', sans-serif;
          }

          .word-row {
            display: flex;
            gap: 30px;
            flex-wrap: wrap;
            justify-content: center;
          }

          .word-button {
            border-radius: 20px;
            border: 2px solid #333;
            background-color: white;
            border-color: rgb(192, 202, 209);
            cursor: pointer;
            font-size: 20px;
            font-weight: bolder;
            font-family: 'Comic Neue', sans-serif;
            transition: background-color 0.3s ease, color 0.3s ease;
          }

          .word-button.correct {
            color: black;
            font-size: 20px;
            font-weight: bolder;
            font-family: 'Comic Neue', sans-serif;
            border-color: #4caf50;
          }

          .word-button.wrong {
            color: black;
            font-size: 20px;
            font-weight: bolder;
            font-family: 'Comic Neue', sans-serif;
            border-color:rgba(240, 44, 14, 0.85);
          }

          .quiz-header {
           
            width: 100%;
            height: 10vh;
            overflow: hidden;
            display: flex;
            align-items: center;
            margin-top:0px;
            padding-top:0px;
          }

           .header-wrapper {
  position: relative;
  width: 100%;
}

.header-bg {
  margin-top: 10px;
  padding-top: 99px;
  width: 100%;
  height: 25vh;
  object-fit: cover;
  display: block;
}
         .group-icon {
            position: absolute;
            top: 60px;
            right: 40px;
            width: 40vh;
            height: auto;
            z-index: 5;
          }
          .next-button{
          
          font-family: 'Sen', sans-serif;
            font-weight: 800;
            color: white;
            font-size: 15px;
            background-color: rgb(118, 207, 236);
            border: rgb(12, 71, 91);
            padding: 10px 25px;
            margin-top: 30px;
            margin-left: 90px;
            cursor: pointer;
            border-radius: 6px;
             
            transition: background-color 0.3s ease;
          
          margin-bottom:0px;
          
          
          } .previous-button{
            font-family: 'Sen', sans-serif;
            font-weight: 800;
             color: black;
            font-size: 15px;
            background-color: rgb(231, 232, 232);
            border: 2px solid rgb(51, 176, 218);
            padding: 10px 25px;
            margin-top: 30px;
            margin-right: 5px;
            margin-bottom:0px;
            cursor: pointer;
            margin-left:270px;
            border-radius: 6px;
          
            transition: background-color 0.3s ease;
          }

          .next-button:hover {
            background-color: #0AAAE1;
          }
            .head{
          padding-top:0px;
            margin-top:0px;
            
            }
          .previous-button:hover {
            background-color: #0AAAE1;
          }
            .button-wrapper{
            margin-top:10px;
            margin-bottom:0px;
            padding-bottom:0px;
            }
            
.dashboard-footer1 {
    width: calc(100% + 6rem); 
    margin: 3rem -1rem -1.5rem -3rem; 
    position: relative;
    z-index: 1;
    margin-top: 0px;
    padding-top:0px;
    line-height: 0;
}
.dashboard-footer1 img { display: block; width: 100%; height: auto; }
        `}),u.jsx("div",{className:"head",children:u.jsx("header",{className:"quiz-header"})}),u.jsxs("main",{className:"quiz-content",children:[u.jsxs("div",{className:"video-wrapper",children:[u.jsx("video",{ref:f,src:"home/blizzhome.mp4",className:"video-element",onEnded:g,onTimeUpdate:h,controls:!1}),r&&u.jsxs(u.Fragment,{children:[u.jsx("img",{src:"home/playimg.jpg",alt:"Overlay",className:"overlay-img"}),u.jsx("button",{onClick:k,className:"play-button-wrapper",children:u.jsx("img",{src:"home/play.png",alt:"Play",className:"play-button"})})]}),u.jsxs("div",{className:"video-controls",children:[u.jsx("button",{className:"control-button",onClick:k,children:i?"⏸":"▶"}),u.jsx("button",{className:"control-button",onClick:C,children:"⏪"}),u.jsx("button",{className:"control-button",onClick:w,children:"⏩"}),u.jsx("div",{className:"progress-bar",onClick:m,children:u.jsx("div",{className:"progress-filled",style:{width:`${a}%`}})}),u.jsx("button",{className:"control-button",onClick:S,children:"⛶"})]})]}),u.jsxs("div",{className:"button-wrapper",children:[u.jsx("button",{className:"previous-button",onClick:()=>{if(f.current&&(f.current.currentTime=0,o(!1),f.current.play(),s(!0),c)){const T=new Audio(c);p.current=T,T.onerror=P=>{console.error("Audio playback error:",P)},setTimeout(()=>{T.play().catch(P=>{console.error("Error playing audio:",P)})},150)}},children:"PLAY AGAIN"}),u.jsx("button",{className:"next-button",onClick:()=>window.location.href="/quizone",children:"WORK BOOK"})]})]}),u.jsx("footer",{className:"dashboard-footer1",children:u.jsx("img",{src:"footer.png",alt:"Footer Decoration"})})]})]})},FP="/avatar1.png",$P=tr,AP=nr,zP=rr,IP=()=>{const e=[{id:1,text:"The ____ gave us homework to complete.",type:"person",answer:"teacher",hint:"(person)"},{id:2,text:"I saw a swan swimming in the ____.",type:"place",answer:"lake",hint:"(place)"},{id:3,text:"My favorite ____ is chocolate cake.",type:"thing",answer:"dessert",hint:"(things)"},{id:4,text:"We visited the ____ to see animals.",type:"place",answer:"zoo",hint:"(place)"},{id:5,text:"The ____ ran the fastest in the race.",type:"person",answer:"boy",hint:"(person)"},{id:6,text:"I packed my ____ in my school bag.",type:"thing",answer:"lunch",hint:"(thing)"}],[t,n]=v.useState(""),[r,o]=v.useState({}),[i,s]=v.useState([]),[a,l]=v.useState({}),[c,d]=v.useState("/Group 20.png"),[f,p]=v.useState(!1),b=(S,E)=>{o({...r,[S]:E}),l({...a,[S]:null})},x=async(S,E)=>{try{const j=new(window.AudioContext||window.webkitAudioContext),A=await(await fetch(S)).arrayBuffer(),z=await j.decodeAudioData(A),T=j.createBufferSource();T.buffer=z,T.connect(j.destination),T.start(0),d(E),T.onended=()=>d("/Group 20.png")}catch(j){console.error("Audio play error:",j),d("/Group 20.png")}},y=S=>{const E=e.find(z=>z.id===S),A=(r[S]||"").trim().toLowerCase()===E.answer.toLowerCase();A?(i.includes(S)||s([...i,S]),f?i.length===e.length-1?x("/findall.mp3","/polar bear face 1.gif"):x("/2-3correct2.mp3","/polar bear face 1.gif"):(x("/firstcorrect.mp3","/polar bear face 1.gif"),p(!0)),d("/polar_bear_face_1.gif"),setTimeout(()=>{d("/bear.png")},2e3)):(x("/e.mp3","/polar bearface 2.gif"),p(!0)),l({...a,[S]:A}),A&&(i.includes(S)||s([...i,S]))},k=S=>{if(S===1)return!0;const E=S-1;return i.includes(E)},g=()=>e.map((S,E)=>{const j=S.text.split("____"),A=String.fromCharCode(97+E),z=k(S.id),T=i.includes(S.id);return u.jsxs("div",{className:`mb-4 ${z?"":"opacity-60"}`,children:[u.jsxs("p",{className:"text-xs md:text-xs mb-2",children:[A,". ",j[0],u.jsx("span",{className:"border-b-2 border-yellow-400 inline-block min-w-16",children:u.jsx("input",{type:"text",className:"w-18 border-none focus:outline-none bg-transparent text-center",value:r[S.id]||"",onChange:P=>b(S.id,P.target.value),placeholder:"",disabled:!z||T})}),j[1]||""," ",u.jsx("span",{className:"text-xs text-gray-500",children:S.hint})]}),z&&!T&&u.jsxs("div",{className:"mt-1",children:[u.jsx("button",{className:"check",onClick:()=>y(S.id),children:"Check"}),a[S.id]===!0&&u.jsx("span",{className:"ml-2 text-green-600 text-sm",children:"Correct!"}),a[S.id]===!1&&u.jsxs("span",{className:"ml-2 text-red-600 text-sm",children:["Answer : ",S.answer]})]})]},S.id)}),h=()=>{localStorage.removeItem("authToken"),navigate("/logout")},m={background:"linear-gradient(to right,rgb(37, 188, 202),rgb(135, 239, 241))",color:"#fff",padding:"10px 24px",fontWeight:"600",borderRadius:"12px",border:"none",cursor:"pointer",boxShadow:"0 4px 6px rgba(0,0,0,0.1)",transition:"all 0.3s ease"},w=S=>{S.target.style.background="linear-gradient(to right,rgb(37, 188, 202),rgb(135, 239, 241))"},C=S=>{S.target.style.background="linear-gradient(to right,rgb(46, 148, 167),rgb(114, 215, 224))"};return v.useEffect(()=>{const S=localStorage.getItem("username");S&&n(S)},[]),u.jsxs("div",{style:{backgroundColor:"white",minHeight:"100vh",display:"flex",flexDirection:"column",fontFamily:"'Comic Neue', sans-serif"},children:[u.jsx("style",{children:`
          @import url('https://fonts.googleapis.com/css2?family=Bakbak+One&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Sen:wght@800&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Comic+Neue&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap');

          .quiz-footer img {
            width: 100%;
            height: auto;
            display: block;
			margin-bottom:0px;
			padding-bottom:0px;
			padding-top:50px;
          }

          .quiz-content {
          padding-bottom:0px;
            flex: 1;
            // position: relative;
            // display: flex;
            padding-left:900px;
            padding-right:0px;
          }
.check{

       background-color: #65c0d2; /* Light blue background */
       color: #ffffff; /* Darker blue text */
       border-color: #a5d8e6; /* Blue border */
  padding:0.5rem 0.5rem;
       background-color: #49a4c9;
       border-color: #02222c;
   
}
          .header-tex{
            position: absolute;
            top: 0px;
            right: 20px;
            align-items: center;
            margin-top:5px;
            margin-right:0px;
            margin-left:0px;
            color: rgb(34, 123, 153);
            
          
          }
          .image-row {
            position: absolute;
            top: 0;
            left: 0;
          }

          .tree-img {
            width: 150px;
            height: 240px;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 4;
            margin-left: 90px;
            padding-top: 420px;
          }

          .underscore-img {
            width: 230px;
            height: 330px;
            position: absolute;
            top: 0;
            left: 129px;
            z-index: 2;
            padding-top: 300px;
          }

          .header-text {
            position: absolute;
            top: 0px;
            right: 20px;
            align-items: center;
            margin-top:5px;
            margin-right:570px;
            margin-left:0px;
            
          
          }

          .profile-section {
            position: absolute;
            top: 10px;
            left: 10px;
            display: flex;
            align-items: center;
            gap: 10px;
            z-index: 10;
          }

          .profile-icon {
            margin-top:0px;
            height: 40px;
            margin-left:25px;
            object-fit: cover;
          }

          .username {
            font-family: 'Comic Neue', sans-serif;
            font-size: 16px;
            font-weight: bold;
            color: black;
          }

          .header-left {
            position: absolute;
            top: 45px;
            left: 10px;
            text-align: center;
            z-index: 10;
          }

          .header-icon {
            width: 80px;
            height: 70px;
            display: block;
            margin-left: 10px;
            padding-top:15px;
          }

           .home-link {
            font-family: 'Comic Neue', sans-serif;
            font-size: 20px;
            color: black;
            text-decoration: none;
            font-weight: bold;
            margin-top: 0px;
            margin-left:20px;
            display: block;
          }

          .bear-img {
            width: 390px;
            height: 375px;
            position: absolute;
            top: 0;
            left: 193px;
            z-index: 3;
            padding-top: 295px;
          }

          .quiz-task {
            margin-left:800px;
            margin-top: 15px;
            margin-right: 0px;
            text-align: left;
            max-width: 700px;
            font-size: 20px;
            font-family: 'Comic Neue', sans-serif;
          }

          .quiz-task strong {
            font-weight: bold;
          }

          .circle-highlight {
            border: 3px solid #FFBF00;
            border-radius: 40px;
            padding: 2px 6px;
            display: inline-block;
          }

          .word-box {
            margin-top: 30px;
            padding: 20px;
            background-color:white;
            border-radius: 30px;
            border: 2px solid grey;
            font-weight: bolder;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
          }

          .word-options {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 30px;
            font-weight: bolder;
           font-family: 'Comic Neue', sans-serif;
          }

          .word-row {
            display: flex;
            gap: 30px;
            flex-wrap: wrap;
            justify-content: center;
          }

          .word-button {
            border-radius: 10px;
            border: 2px solid #333;
            background-color: white;
            border-color: rgb(192, 202, 209);
            cursor: pointer;
            font-size: 20px;
            font-weight: bolder;
            font-family: 'Comic Neue', sans-serif;
            transition: background-color 0.3s ease, color 0.3s ease;
          }

          .word-button.correct {
            color: black;
            font-size: 20px;
            font-weight: bolder;
            font-family: 'Comic Neue', sans-serif;
            border-color: #4caf50;
          }

          .word-button.wrong {
            color: black;
            font-size: 20px;
            font-weight: bolder;
            font-family: 'Comic Neue', sans-serif;
            border-color:rgba(240, 44, 14, 0.85);
          }

          .quiz-header {
            position: relative;
            width: 100%;
            height: 25vh;
            overflow: hidden;
            display: flex;
            align-items: center;
          }

           .header-bg {
            padding-top: 35px;
            width: 100%;
            height: 15vh;
            object-fit: cover;
            display: block;
          }

         .group-icon {
            position: absolute;
            top: 60px;
            right: 40px;
            width: 40vh;
            height: auto;
            z-index: 5;
          }
            .previous-button {
            font-family: 'Sen', sans-serif;
            font-weight: 800;
            font-size: 14px;
            padding: 10px 20px;
            cursor: pointer;
            border-radius: 6px;
            border:2px solid rgb(19, 150, 194);
            transition: background-color 0.3s ease;
          background-color: rgb(249, 250, 250);
            margin-top: 0;
            margin-bottom:0px;
          }
          .next-button {
            font-family: 'Sen', sans-serif;
            font-weight: 800;
            color: white;
            font-size: 15px;
            background-color: rgb(118, 207, 236);
            border: rgb(118, 207, 236);
            padding: 10px 25px;
            margin-top: 50px;
            margin-left: 90px;
            cursor: pointer;
            border-radius: 6px;
            transition: background-color 0.3s ease;
          }
             .header-actions1 {
  position: absolute;
  top: 0;
  left:700px;
  right: 0;
  height: 90%;
  display: flex;

  gap: 0.5rem;
  padding: 1rem;
  z-index: 2;
}
.button-wrapper{
margin-top:0px;
padding-top:0px;
padding-left:780px;

margin-bottom:0px;
}
.user-info {
    display: flex;
   
    gap: 0.5rem;
  }
  
  .user-avatar {
    width: 32px;
    height: 32px;
    border-radius: 9999px;
    object-fit: cover;
  }
  
  .user-name {
   font-size: 0.95rem; font-weight: 900; color: #2d3748;
  }
  
  .icon-button {
    background: transparent;
    border: none;
    cursor: pointer;
    color: black;
  }
	.star{
	height:10vh;
	}
  
  .icon-button.small {
    padding: 0 4px;
  }
  .mainn{
  padding-top:50px;
 padding-left:780px; 
 
           
            text-align: left;
            
            font-size: 20px;
            font-family: 'Comic Neue', sans-serif;
  }

          .header-text {
           
            margin-bottom: 0px;
            color: rgb(34, 123, 153);
          }

          .next-button:hover {
            background-color: #0AAAE1;
          }
        `}),u.jsx("div",{className:"profile-section",children:u.jsx("img",{src:"/young.png",alt:"Profile",className:"profile-icon"})}),u.jsxs("div",{className:"header-text",children:[u.jsx("img",{src:"/nounsheader.png",alt:""}),u.jsxs("div",{className:"header-actions1",children:[u.jsx("button",{className:"icon-button",children:u.jsx($P,{})}),u.jsx("button",{className:"icon-button",children:u.jsx(AP,{})}),u.jsxs("div",{className:"user-info",children:[u.jsx("button",{style:m,onClick:h,onMouseOver:w,onMouseOut:C,children:"Logout"}),u.jsx("img",{src:FP,alt:"User Avatar",className:"user-avatar"}),u.jsx("span",{className:"user-name",children:t.toUpperCase()||"Guest"}),u.jsx("button",{className:"icon-button small",children:u.jsx(zP,{})})]})]})]}),u.jsxs("header",{className:"quiz-header",children:[u.jsxs("div",{className:"header-left",children:[u.jsx("img",{src:"/igloo.png",alt:"Igloo",className:"header-icon"}),u.jsx("a",{href:"/nouns",className:"home-link",children:"Home"})]}),u.jsx("img",{src:"/Frame.jpg",alt:"Header Background",className:"header-bg"}),u.jsx("img",{src:"/image copy.png",alt:"Overlay Icon",className:"group-icon"})]}),u.jsxs("div",{className:"image-row",children:[u.jsx("img",{src:"/tree_icon 2.png",alt:"Tree",className:"tree-img"}),u.jsx("img",{src:"/_.png",alt:"Underscore",className:"underscore-img"}),u.jsx("img",{src:"bear.png",alt:"Bear",className:"bear-img"})]}),u.jsxs("div",{children:[u.jsx("main",{className:"mainn",children:u.jsx("div",{className:" md:w-7xl  md:px-32",children:u.jsx("div",{className:"flex flex-col items-center md:flex-row md:justify-between",children:u.jsx("div",{className:"md:w-1/2 w-[30rem] bg-white flex flex-col justify-between p-3 px-6",children:u.jsxs("div",{className:"mb-6",children:[u.jsxs("div",{className:"",children:[u.jsxs("p",{className:" font-medium mb-3 text-gray-800",children:[u.jsx("strong",{children:"4. "}),"Type a ",u.jsx("strong",{children:"person, place, or thing"})," to complete each sentence."]}),u.jsx("br",{}),u.jsx("p",{className:"mb-6 text-gray-700",children:u.jsxs("strong",{children:["Example : The ",u.jsx("u",{className:"text-yellow-500",children:"baby"})," is crying."]})}),u.jsx("br",{})]}),u.jsx("div",{className:"md:pl-15 pl-10",children:g()})]})})})})}),u.jsxs("div",{className:"button-wrapper",children:[u.jsx("button",{className:"previous-button",onClick:()=>window.location.href="/quizthree",children:"PREVIOUS QUESTION"}),u.jsx("button",{className:"next-button",onClick:()=>window.location.href="/result",children:"NEXT QUESTION"})]})]}),u.jsx("div",{className:"foot",children:u.jsx("footer",{className:"quiz-footer",children:u.jsx("img",{src:"/footer.png",alt:"Footer"})})})]})},MP=tr,LP=nr,DP=rr,BP=()=>{const[e,t]=v.useState("");v.useEffect(()=>{const s=localStorage.getItem("username");s&&t(s)},[]);const n=()=>{localStorage.removeItem("authToken"),navigate("/logout")},r={background:"linear-gradient(to right,rgb(37, 188, 202),rgb(135, 239, 241))",color:"#fff",padding:"10px 24px",fontWeight:"600",borderRadius:"12px",border:"none",cursor:"pointer",boxShadow:"0 4px 6px rgba(0,0,0,0.1)",transition:"all 0.3s ease"},o=s=>{s.target.style.background="linear-gradient(to right,rgb(37, 188, 202),rgb(135, 239, 241))"},i=s=>{s.target.style.background="linear-gradient(to right,rgb(46, 148, 167),rgb(114, 215, 224))"};return u.jsxs("div",{style:{backgroundColor:"white",minHeight:"100vh",display:"flex",flexDirection:"column",fontFamily:"'Comic Neue', sans-serif"},children:[u.jsx("style",{children:`
          @import url('https://fonts.googleapis.com/css2?family=Bakbak+One&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Sen:wght@800&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Comic+Neue&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap');

          .quiz-footer img {
            width: 100%;
            height: auto;
            display: block;
          }

          .quiz-content {
            flex: 1;
            position: relative;
            display: flex;
          }

          .header-tex{
            position: absolute;
            top: 0px;
            right: 20px;
            align-items: center;
            margin-top:5px;
            margin-right:0px;
            margin-left:0px;
            color: rgb(34, 123, 153);
            
          
          }
          .image-row {
            position: absolute;
            top: 0;
            left: 0;
          }
             .badge {
  display: flex;
  flex-direction: column;
  align-items: center; /* center horizontally */
  gap: 35px; /* spacing between the two images */
  padding-top: 20px;
}

.badge img {
  width: 200px; /* smaller size */
  height: auto;
  display: block;
}


          .tree-img {
            width: 150px;
            height: 240px;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 4;
            margin-left: 90px;
            padding-top: 245px;
          }

          .underscore-img {
            width: 230px;
            height: 330px;
            position: absolute;
            top: 0;
            left: 129px;
            z-index: 2;
            padding-top: 125px;
          }

         
            
          
          

          .profile-section {
            position: absolute;
            top: 10px;
            left: 0px;
            display: flex;
            align-items: center;
            gap: 10px;
            z-index: 10;
          }

          .profile-icon {
            margin-top:0px;
            height: 40px;
            margin-left:25px;
            object-fit: cover;
          }

          .username {
            font-family: 'Comic Neue', sans-serif;
            font-size: 16px;
            font-weight: bold;
            color: black;
          }

          .header-left {
            position: absolute;
            top: 45px;
            left: 10px;
            text-align: center;
            z-index: 10;
          }

          .header-icon {
            width: 80px;
            height: 70px;
            display: block;
            margin-left: 10px;
            padding-top:15px;
          }

           .home-link {
            font-family: 'Comic Neue', sans-serif;
            font-size: 20px;
            color: black;
            text-decoration: none;
            font-weight: bold;
            margin-top: 0px;
            margin-left:20px;
            display: block;
          }

          .bear-img {
            width: 390px;
            height: 375px;
            position: absolute;
            top: 0;
            left: 193px;
            z-index: 3;
            padding-top: 115px;
          }

          .quiz-task {
            margin-left: auto;
            margin-top: 55px;
            margin-right: 250px;
            text-align: left;
            max-width: 400px;
            font-size: 30px;
            font-family: 'Comic Neue', sans-serif;
          }

          .quiz-task strong {
            font-weight: bold;
          }

          .circle-highlight {
            border: 3px solid #FFBF00;
            border-radius: 40px;
            padding: 2px 6px;
            display: inline-block;
          }

          .word-box {
            margin-top: 30px;
            padding: 20px;
            background-color:white;
            border-radius: 30px;
            border: 2px solid grey;
            font-weight: bolder;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
          }

          .word-options {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 30px;
            font-weight: bolder;
           font-family: 'Comic Neue', sans-serif;
          }

          .word-row {
            display: flex;
            gap: 30px;
            flex-wrap: wrap;
            justify-content: center;
          }

          .word-button {
            border-radius: 10px;
            border: 2px solid #333;
            background-color: white;
            border-color: rgb(192, 202, 209);
            cursor: pointer;
            font-size: 20px;
            font-weight: bolder;
            font-family: 'Comic Neue', sans-serif;
            transition: background-color 0.3s ease, color 0.3s ease;
          }

          .word-button.correct {
            color: black;
            font-size: 20px;
            font-weight: bolder;
            font-family: 'Comic Neue', sans-serif;
            border-color: #4caf50;
          }

          .word-button.wrong {
            color: black;
            font-size: 20px;
            font-weight: bolder;
            font-family: 'Comic Neue', sans-serif;
            border-color:rgba(240, 44, 14, 0.85);
          }

          .quiz-header {
            position: relative;
            width: 100%;
            height: 25vh;
            overflow: hidden;
            display: flex;
            align-items: center;
          }

           .header-bg {
            padding-top: 35px;
            width: 100%;
            height: 15vh;
            object-fit: cover;
            display: block;
          }

         .group-icon {
            position: absolute;
            top: 60px;
            right: 40px;
            width: 40vh;
            height: auto;
            z-index: 5;
          }
            .previous-button {
            font-family: 'Sen', sans-serif;
            font-weight: 800;
            font-size: 14px;
            padding: 10px 20px;
            cursor: pointer;
            border-radius: 6px;
            border:2px solid rgb(19, 150, 194);
            transition: background-color 0.3s ease;
            background-color: rgb(249, 250, 250);
            margin-top: 0;
            margin-bottom:0px;
          }
          
          .next-button {
            font-family: 'Sen', sans-serif;
            font-weight: 800;
            color: white;
            font-size: 15px;
            background-color: rgb(118, 207, 236);
            border: rgb(118, 207, 236);
            padding: 10px 25px;
            margin-top: 50px;
            margin-left: 50px;
            cursor: pointer;
            border-radius: 6px;
            transition: background-color 0.3s ease;
          }
             .header-actions1 {
  position: absolute;
  top: 0;
  left:1200px;
  right: 0;
  height: 3%;
  display: flex;

  gap: 0.5rem;
  padding: 1rem;
  z-index: 2;
  padding-bottom:-40px;
}

.user-info {
    display: flex;
   
    gap: 0.5rem;
  }
  
  .user-avatar {
    width: 32px;
    height: 32px;
    border-radius: 9999px;
    object-fit: cover;
  }
  
  .user-name {
   font-size: 0.95rem; font-weight: 900; color: #2d3748;
  }
  
  .icon-button {
    background: transparent;
    border: none;
    cursor: pointer;
    color: black;
  }
  
  .icon-button.small {
    padding: 0 4px;
  }
  

          .header-text {
           
            margin-bottom: 0px;
            color: rgb(34, 123, 153);
          }

          .next-button:hover {
            background-color: #0AAAE1;
          }
        `}),u.jsx("div",{className:"profile-section",children:u.jsx("img",{src:"/static/young.png",alt:"Profile",className:"profile-icon"})}),u.jsx("div",{className:"header-text",children:u.jsxs("div",{className:"header-actions1",children:[u.jsx("button",{className:"icon-button",children:u.jsx(MP,{})}),u.jsx("button",{className:"icon-button",children:u.jsx(LP,{})}),u.jsxs("div",{className:"user-info",children:[u.jsx("button",{style:r,onClick:n,onMouseOver:o,onMouseOut:i,children:"Logout"}),u.jsx("img",{src:"/static/avatar1.png",alt:"User Avatar",className:"user-avatar"}),u.jsx("span",{className:"user-name",children:e.toUpperCase()||"Guest"}),u.jsx("button",{className:"icon-button small",children:u.jsx(DP,{})})]})]})}),u.jsx("header",{className:"quiz-header",children:u.jsx("img",{src:"/static/Resultframe.jpg",alt:"Header Background",className:"header-bg"})}),u.jsxs("main",{className:"quiz-content",children:[u.jsx("div",{className:"image-row",children:u.jsx("img",{src:"/static/dancing.gif",alt:"Bear",className:"bear-img"})}),u.jsxs("div",{className:"quiz-task",children:[u.jsxs("div",{className:"badge",children:[u.jsx("img",{src:"/static/badge.jpg",alt:"badge"}),u.jsx("img",{src:"/static/nouncompletion.jpg",alt:""})]}),u.jsx("button",{className:"next-button",onClick:()=>window.location.href="/dashboard",children:"FINISH"})]})]}),u.jsx("footer",{className:"quiz-footer",children:u.jsx("img",{src:"/static/footer.png",alt:"Footer"})})]})},UP=()=>u.jsx("div",{children:"Statements"}),WP=()=>{const[e,t]=v.useState({questionA:{sourceWords:["raining","It","is","outside"],droppedWords:[],answer:["It","is","raining","outside"],showAnswer:!1},questionB:{sourceWords:["fast","runs","dog","The"],droppedWords:[],answer:["The","dog","runs","fast"],showAnswer:!1},questionC:{sourceWords:["The","shining","is","sun","brightly"],droppedWords:[],answer:["The","sun","is","shining","brightly"],showAnswer:!1},questionD:{sourceWords:["eats","every","banana","Sam","a","morning"],droppedWords:[],answer:["Sam","eats","a","banana","every","morning"],showAnswer:!1},questionE:{sourceWords:["a","sandwich","delicious","made","I","lunch","for"],droppedWords:[],answer:["I","made","a","delicious","sandwich","for","lunch"],showAnswer:!1},questionF:{sourceWords:["because","coat","it","wore","his","raining","was","Jack"],droppedWords:[],answer:["Jack","wore","his","coat","because","it","was","raining"],showAnswer:!1}}),n=(a,l)=>{a.dataTransfer.setData("text/plain",l)},r=(a,l)=>{a.preventDefault();const c=a.dataTransfer.getData("text/plain");t(d=>{const f=d[l];if(f.sourceWords.includes(c)&&!f.droppedWords.includes(c)){const p=f.sourceWords.filter(y=>y!==c),b=[...f.droppedWords,c],x=b.length===f.answer.length;return{...d,[l]:{...f,sourceWords:p,droppedWords:b,showAnswer:x}}}return d})},o=a=>{a.preventDefault()},i=(a,l)=>{t(c=>{const d=c[a];return{...c,[a]:{...d,sourceWords:[...d.sourceWords,l],droppedWords:d.droppedWords.filter(f=>f!==l),showAnswer:!1}}})},s=(a,l,c)=>a.toLowerCase()===e[c].answer[l].toLowerCase();return u.jsxs("div",{style:{backgroundColor:"white",minHeight:"100vh",display:"flex",flexDirection:"column",fontFamily:"'Comic Neue', sans-serif"},children:[u.jsx("style",{children:`
          @import url('https://fonts.googleapis.com/css2?family=Bakbak+One&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Sen:wght@800&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Comic+Neue&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap');

         .quiz-footer img {
            width: 100%;
            height: auto;
            display: block;
            padding-bottom:5px;
          }


          .quiz-content {
            flex: 1;
            position: relative;
            display: flex;
           
          }

          .image-row {
            position: absolute;
            top: 0;
            left: 0;
          }

          .tree-img {
            width: 150px;
            height: 240px;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 4;
            margin-left: 90px;
            padding-top: 245px;
          }

          .underscore-img {
            width: 230px;
            height: 330px;
            position: absolute;
            top: 0;
            left: 129px;
            z-index: 2;
            padding-top: 125px;
          }

          
          .header-text {
            position: absolute;
            top: 10px;
            right: 60px;
            align-items: center;
            margin-top:5px;
            margin-right:570px;
            margin-left:0px;
        }

          .profile-section {
            position: absolute;
            top: 10px;
            left: 10px;
            display: flex;
            align-items: center;
            gap: 10px;
            z-index: 10;
          }

          .profile-icon {
            margin-top:0px;
            height: 40px;
            margin-left:25px;
            object-fit: cover;
          }
          .username {
            font-family: 'Comic Neue', sans-serif;
            font-size: 16px;
            font-weight: bold;
            color: black;
          }

          .header-left {
            position: absolute;
            top: 45px;
            left: 10px;
            text-align: center;
            z-index: 10;
          }

           .header-icon {
            width: 80px;
            height: 70px;
            display: block;
            margin-left: 5px;
            padding-top:7px;
          }

           .home-link {
            font-family: 'Comic Neue', sans-serif;
            font-size: 20px;
            color: black;
            text-decoration: none;
            font-weight: bold;
            margin-top: 0px;
            margin-left:20px;
            display: block;
          }
          .bear-img {
            width: 390px;
            height: 375px;
            position: absolute;
            top: 0;
            left: 193px;
            z-index: 3;
            padding-top: 115px;
          }

          .quiz-task {
            margin-left: 650px;
            margin-top: 30px;
            margin-right: 80px;
            text-align: left;
            max-width: 700px;
            font-size: 20px;
            font-family: 'Comic Neue', sans-serif;
          }

          .quiz-task strong {
            font-weight: 900 !important;
          }

          .button-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 30px;
            gap: 40px;
          }

          .next-button, .previous-button {
            font-family: 'Sen', sans-serif;
            font-weight: 800;
            font-size: 14px;
            padding: 10px 20px;
            cursor: pointer;
            border-radius: 6px;
            border: rgb(22, 193, 167);
            transition: background-color 0.3s ease;
            background-color:  rgb(22, 193, 167);
            margin-top: 0;
            margin-bottom:0px;
          }
 .group-icon {
            position: absolute;
            top: 60px;
            right: 40px;
            width: 40vh;
            height: auto;
            z-index: 5;
          }
          .next-button {
            color: white;
          }

          .previous-button {
            color: white;
          }
           .header-bg {
            padding-top: 55px;
            width: 100%;
            height: 17vh;
            object-fit: cover;
            display: block;
          }
  .circle-highlight {
            border: 3px solid rgb(49, 191, 163);
            border-radius: 40px;
            padding: 2px 6px;
            display: inline-block;
            margin-top:10px;
          }
          .next-button:hover, .previous-button:hover {
            background-color:rgb(8, 92, 75);
          }
        `}),u.jsx("div",{className:"profile-section",children:u.jsx("img",{src:"/static/young.png",alt:"Profile",className:"profile-icon"})}),u.jsx("div",{className:"header-text",children:u.jsx("img",{src:"/static/Statements.png",alt:""})}),u.jsx("header",{className:"quiz-header",children:u.jsx("img",{src:"/static/statframe.png",alt:"Header Background",className:"header-bg"})}),u.jsxs("main",{className:"quiz-content",children:[u.jsxs("div",{className:"image-row",children:[u.jsx("img",{src:"/static/tree_icon 2.png",alt:"Tree",className:"tree-img"}),u.jsx("img",{src:"/static/greenQ.png",alt:"Underscore",className:"underscore-img"}),u.jsx("img",{src:"/static/talking.gif",alt:"Bear",className:"bear-img"})]}),u.jsxs("div",{className:"quiz-task",children:[u.jsxs("p",{children:[u.jsx("strong",{children:"3. Sort the words in the right order to make a statement"})," "]}),u.jsxs("p",{children:[" ",u.jsx("span",{children:"Tip: Make sure to use a capital letter at the beginning and a full stop at the end."})]}),u.jsx("br",{}),u.jsx("span",{style:{color:"orange"},children:"Drag and drop the words on right side."}),u.jsx("p",{children:u.jsxs("span",{className:"circle-highlight",children:["Example: laptop / broken / My / is ","->"," My laptop is broken."]})}),u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"30px",marginTop:"20px",marginBottom:"20px"},children:Object.entries(e).map(([a,l],c)=>u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[u.jsxs("div",{style:{display:"flex",gap:"5px",alignItems:"flex-start"},children:[u.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center",minWidth:"400px"},children:[u.jsxs("span",{children:[String.fromCharCode(97+c),"."]}),u.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"},children:l.sourceWords.map((d,f)=>u.jsx("div",{draggable:!0,onDragStart:p=>n(p,d),style:{padding:"3px 5px",backgroundColor:"#E8E8E8",borderRadius:"4px",cursor:"move",fontWeight:"900",userSelect:"none",fontSize:"14px"},children:d},f))})]}),u.jsx("div",{onDragOver:o,onDrop:d=>r(d,a),style:{minWidth:"400px",minHeight:"10px",border:"2px dashed #ccc",paddingRight:"0px",borderRadius:"8px",padding:"9px",display:"flex",flexWrap:"wrap",gap:"2px",backgroundColor:"#f8fafc"},children:l.droppedWords.map((d,f)=>u.jsxs("div",{onClick:()=>i(a,d),style:{padding:"3px 12px",backgroundColor:"#e5e7eb",color:"#374151",borderRadius:"4px",cursor:"pointer",userSelect:"none",fontSize:"14px",display:"flex",alignItems:"center",gap:"0px"},children:[d,s(d,f,a)?u.jsx("span",{style:{color:"green"},children:"✓"}):u.jsx("span",{style:{color:"red"},children:"✗"})]},f))})]}),l.showAnswer&&u.jsxs("div",{style:{marginLeft:"220px",padding:"8px 16px",backgroundColor:"#ecfdf5",color:"#059669",borderRadius:"4px",fontSize:"14px"},children:["Correct sentence: ",l.answer.join(" "),"."]})]},a))}),u.jsxs("div",{className:"button-wrapper",children:[u.jsx("button",{className:"previous-button",onClick:()=>window.location.href="/quiztwos",children:"PREVIOUS QUESTION"}),u.jsx("button",{className:"next-button",onClick:()=>window.location.href="/quizfours",children:"NEXT QUESTION"})]})]})]}),u.jsx("footer",{className:"quiz-footer",children:u.jsx("img",{src:"/static/footer.png",alt:"Footer"})})]})},VP=()=>u.jsxs("div",{style:{backgroundColor:"white",minHeight:"100vh",display:"flex",flexDirection:"column",fontFamily:"'Comic Neue', sans-serif"},children:[u.jsx("style",{children:`
          @import url('https://fonts.googleapis.com/css2?family=Bakbak+One&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Sen:wght@800&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Comic+Neue&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap');

         .quiz-footer img {
            width: 100%;
            height: auto;
            display: block;
            padding-bottom:5px;
          }


          .quiz-content {
            flex: 1;
            position: relative;
            display: flex;
           
          }

          .image-row {
            position: absolute;
            top: 0;
            left: 0;
          }

          .tree-img {
            width: 150px;
            height: 240px;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 4;
            margin-left: 90px;
            padding-top: 245px;
          }

          .underscore-img {
            width: 230px;
            height: 330px;
            position: absolute;
            top: 0;
            left: 129px;
            z-index: 2;
            padding-top: 125px;
          }

          
          .header-text {
            position: absolute;
            top: 10px;
            right: 60px;
            align-items: center;
            margin-top:5px;
            margin-right:570px;
            margin-left:0px;
        }

          .profile-section {
            position: absolute;
            top: 10px;
            left: 10px;
            display: flex;
            align-items: center;
            gap: 10px;
            z-index: 10;
          }

          .profile-icon {
            margin-top:0px;
            height: 40px;
            margin-left:25px;
            object-fit: cover;
          }
          .username {
            font-family: 'Comic Neue', sans-serif;
            font-size: 16px;
            font-weight: bold;
            color: black;
          }

          .header-left {
            position: absolute;
            top: 45px;
            left: 10px;
            text-align: center;
            z-index: 10;
          }

           .header-icon {
            width: 80px;
            height: 70px;
            display: block;
            margin-left: 5px;
            padding-top:7px;
          }

           .home-link {
            font-family: 'Comic Neue', sans-serif;
            font-size: 20px;
            color: black;
            text-decoration: none;
            font-weight: bold;
            margin-top: 0px;
            margin-left:20px;
            display: block;
          }
          .bear-img {
            width: 390px;
            height: 375px;
            position: absolute;
            top: 0;
            left: 193px;
            z-index: 3;
            padding-top: 115px;
          }

          .quiz-task {
            margin-left: auto;
            margin-top: 30px;
            margin-right: 80px;
            text-align: left;
            max-width: 700px;
            font-size: 20px;
            font-family: 'Comic Neue', sans-serif;
          }

          .quiz-task strong {
            font-weight: 900 !important;
          }

          .button-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 30px;
            gap: 40px;
          }

          .next-button, .previous-button {
            font-family: 'Sen', sans-serif;
            font-weight: 800;
            font-size: 14px;
            padding: 10px 20px;
            cursor: pointer;
            border-radius: 6px;
            border: rgb(22, 193, 167);
            transition: background-color 0.3s ease;
            background-color:  rgb(22, 193, 167);
            margin-top: 0;
            margin-bottom:0px;
          }
 .group-icon {
            position: absolute;
            top: 60px;
            right: 40px;
            width: 40vh;
            height: auto;
            z-index: 5;
          }
          .next-button {
            color: white;
          }

          .previous-button {
            color: white;
          }
           .header-bg {
            padding-top: 55px;
            width: 100%;
            height: 17vh;
            object-fit: cover;
            display: block;
          }
  .circle-highlight {
            border: 3px solid rgb(49, 191, 163);
            border-radius: 40px;
            padding: 2px 6px;
            display: inline-block;
            margin-top:10px;
          }
          .next-button:hover, .previous-button:hover {
            background-color:rgb(8, 92, 75);
          }
        `}),u.jsx("div",{className:"profile-section",children:u.jsx("img",{src:"/static/young.png",alt:"Profile",className:"profile-icon"})}),u.jsx("div",{className:"header-text",children:u.jsx("img",{src:"/static/Statements.png",alt:""})}),u.jsx("header",{className:"quiz-header",children:u.jsx("img",{src:"/static/Q4frame.png",alt:"Header Background",className:"header-bg"})}),u.jsxs("main",{className:"quiz-content",children:[u.jsxs("div",{className:"image-row",children:[u.jsx("img",{src:"/static/tree_icon 2.png",alt:"Tree",className:"tree-img"}),u.jsx("img",{src:"/static/greenQ.png",alt:"Underscore",className:"underscore-img"}),u.jsx("img",{src:"/static/talking.gif",alt:"Bear",className:"bear-img"})]}),u.jsxs("div",{className:"quiz-task",children:[u.jsxs("p",{children:[u.jsx("strong",{children:"4. Write the following  Statements."})," "]}),u.jsx("br",{}),u.jsxs("p",{children:[" ",u.jsxs("span",{children:[u.jsx("strong",{children:"a. Write a statement about today's weather."})," "]})]}),u.jsx("br",{}),u.jsx("div",{children:u.jsx("input",{type:"text",placeholder:"Write here",style:{padding:"10px",backgroundColor:"#F5F5F5",border:"2px solid rgb(13, 166, 156)",borderRadius:"8px",fontSize:"16px",width:"300px",outline:"none"}})}),u.jsx("br",{}),u.jsxs("p",{children:[" ",u.jsxs("span",{children:[u.jsx("strong",{children:"b. Write a statement about your favourite animal."})," "]})]}),u.jsx("br",{}),u.jsx("div",{children:u.jsx("input",{type:"text",placeholder:"Write here",style:{padding:"10px",backgroundColor:"#F5F5F5",border:"2px solid rgb(13, 166, 156)",borderRadius:"8px",fontSize:"16px",width:"300px",outline:"none"}})}),u.jsx("br",{}),u.jsxs("p",{children:[" ",u.jsxs("span",{children:[u.jsx("strong",{children:"c. Write a statement about something you enjoy doing and when you do it."})," "]})]}),u.jsx("br",{}),u.jsx("input",{type:"text",placeholder:"Write here",style:{padding:"10px",backgroundColor:"#F5F5F5",border:"2px solid rgb(13, 166, 156)",borderRadius:"8px",fontSize:"16px",width:"300px",outline:"none"}}),u.jsx("br",{}),u.jsxs("div",{className:"button-wrapper",children:[u.jsx("button",{className:"previous-button",onClick:()=>window.location.href="/quizthrees",children:"PREVIOUS QUESTION"}),u.jsx("button",{className:"next-button",onClick:()=>window.location.href="/results",children:"NEXT QUESTION"})]})]})]}),u.jsx("footer",{className:"quiz-footer",children:u.jsx("img",{src:"/static/footer.png",alt:"Footer"})})]}),HP=()=>{const[e,t]=v.useState("");v.useEffect(()=>{const h=localStorage.getItem("username");h&&t(h)},[]);const n=["pencil","teacher","zoo","school","leaf"],[r,o]=v.useState(0),[i,s]=v.useState(0),[a,l]=v.useState(0),[c,d]=v.useState(Date.now()),[f,p]=v.useState({}),b=v.useRef([]),x=v.useRef(null),y=h=>{b.current.includes(h)||(b.current.push(h),(!x.current||x.current.paused||x.current.ended)&&k())},k=()=>{if(b.current.length===0)return;const h=b.current.shift();x.current&&x.current.pause(),x.current=new Audio(h),x.current.onended=()=>{k()},x.current.play()},g=v.useRef({first:!1,second:!1,third:!1,threeInARow:!1,allCorrect:!1});return v.useEffect(()=>{const h=Object.entries(f),m=h.filter(([E,j])=>j==="correct").length,w=h.filter(([E,j])=>j==="wrong").length;o(m),s(w);const C=h.slice(-3).map(([E,j])=>j);if(C.length===3&&C.every(E=>E==="correct")&&!g.current.threeInARow&&(y("/threeinarow.mp3"),g.current.threeInARow=!0),m===1&&!g.current.first?(y("/firstcorrect.mp3"),g.current.first=!0):m===2&&!g.current.second?(y("/2-3correct1.mp3"),g.current.second=!0):m===3&&!g.current.third&&(y("/2-3correct2.mp3"),g.current.third=!0),m===n.length&&!g.current.allCorrect&&(y("/findall.mp3"),g.current.allCorrect=!0,setTimeout(()=>{y("/next.mp3")},1e3)),w>0){const E=["/a.mp3","/b.mp3","/c.mp3","/d.mp3","/e.mp3"];g.current[`wrong${w}`]||(y(E[Math.min(w-1,4)]),g.current[`wrong${w}`]=!0)}},[f]),u.jsxs("div",{style:{backgroundColor:"white",minHeight:"100vh",display:"flex",flexDirection:"column",fontFamily:"'Comic Neue', sans-serif"},children:[u.jsx("style",{children:`
          @import url('https://fonts.googleapis.com/css2?family=Bakbak+One&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Sen:wght@800&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Comic+Neue&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap');

          .quiz-footer img {
            width: 100%;
            height: auto;
            display: block;
          }

          .quiz-content {
            flex: 1;
            position: relative;
            display: flex;
          }

          .image-row {
            position: absolute;
            top: 0;
            left: 0;
          }

          .tree-img {
            width: 150px;
            height: 240px;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 4;
            margin-left: 90px;
            padding-top: 245px;
          }

          .underscore-img {
            width: 230px;
            height: 330px;
            position: absolute;
            top: 0;
            left: 129px;
            z-index: 2;
            padding-top: 125px;
          }

          .header-text {
            position: absolute;
            top: 0px;
            right: 20px;
            align-items: center;
            margin-top:5px;
            margin-right:570px;
            margin-left:0px;
            
          
          }

          .profile-section {
            position: absolute;
            top: 10px;
            left: 10px;
            display: flex;
            align-items: center;
            gap: 10px;
            z-index: 10;
          }

          .profile-icon {
            margin-top:0px;
            height: 30px;
            margin-left:25px;
            object-fit: cover;
          }

          .username {
            font-family: 'Comic Neue', sans-serif;
            font-size: 16px;
            font-weight: bold;
            color: black;
            padding-right:0px;
            margin-right:0px;
            margin-left:70px;
          }

          .header-left {
            position: absolute;
            top: 45px;
            left: 10px;
            text-align: center;
            z-index: 10;
          }

          .header-icon {
            width: 80px;
            height: 70px;
            display: block;
            margin-left: 20px;
            padding-top:3px;
          }

           .home-link {
            font-family: 'Comic Neue', sans-serif;
            font-size: 20px;
            color: black;
            text-decoration: none;
            font-weight: bold;
            margin-top: 0px;
            margin-left:20px;
            display: block;
          }
            .user{
            margin-left:1200px;
            
            }

          .bear-img {
            width: 390px;
            height: 375px;
            position: absolute;
            top: 0;
            left: 193px;
            z-index: 3;
            padding-top: 115px;
             transform: scaleX(-1);
          }

          .quiz-task {
            margin-left: auto;
            margin-top: 55px;
            margin-right: 250px;
            text-align: left;
            max-width: 400px;
            font-size: 30px;
            font-family: 'Comic Neue', sans-serif;
          }

          .quiz-task strong {
            font-weight: bold;
          }

          .circle-highlight {
            border: 3px solid #FFBF00;
            border-radius: 30px;
            padding: 2px 6px;
            display: inline-block;
          }

          .word-box {
            margin-top: 30px;
            padding: 20px;
            background-color:white;
            border-radius: 25px;
            border: 2px solid grey;
            font-weight: bolder;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
          }

          .word-options {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 30px;
            font-weight: bolder;
           font-family: 'Comic Neue', sans-serif;
          }

          .word-row {
            display: flex;
            gap: 30px;
            flex-wrap: wrap;
            justify-content: center;
          }
           
          .word-button {
            border-radius: 20px;
            border: 2px solid #333;
            background-color: white;
            border-color: rgb(192, 202, 209);
            cursor: pointer;
            font-size: 20px;
            font-weight: bolder;
            font-family: 'Comic Neue', sans-serif;
            transition: background-color 0.3s ease, color 0.3s ease;
          }

          .word-button.correct {
            color: black;
            font-size: 20px;
            font-weight: bolder;
            font-family: 'Comic Neue', sans-serif;
            border-color: #4caf50;
          }
            .badge {
  display: flex;
  flex-direction: column;
  align-items: center; /* center horizontally */
  gap: 35px; /* spacing between the two images */
  padding-top: 20px;
}

.badge img {
  width: 200px; /* smaller size */
  height: auto;
  display: block;
}


          .word-button.wrong {
            color: black;
            font-size: 20px;
            font-weight: bolder;
            font-family: 'Comic Neue', sans-serif;
            border-color:rgba(240, 44, 14, 0.85);
          }

          .quiz-header {
            position: relative;
            padding-top:30px;
            width: 100%;
            height: 20vh;
            overflow: hidden;
            display: flex;
            align-items: center;
          }

           .header-bg {
            padding-top: 25px;
            width: 100%;
            height: 20vh;
            object-fit: cover;
            display: block;
          }
.completion{

font-family:'Poppins', sans-serif;
font-size:25px;
}
         .group-icon {
            position: absolute;
            top: 60px;
            right: 40px;
            width: 40vh;
            height: auto;
            z-index: 5;
          }
          .next-button {
            font-family: 'Sen', sans-serif;
            font-weight: 800;
            color: white;
            font-size: 15px;
            background-color: rgb(49, 191, 163);
            border: rgb(24, 132, 125);
            padding: 10px 25px;
            margin-top: 30px;
            margin-left: 120px;
            cursor: pointer;
            border-radius: 6px;
            transition: background-color 0.3s ease;
          }

          .next-button:hover {
            background-color:rgb(8, 92, 75);;
          }
        `}),u.jsxs("div",{className:"profile-section",children:[u.jsx("img",{src:"/young.png",alt:"Profile",className:"profile-icon"}),u.jsx("div",{className:"user",children:u.jsxs("strong",{children:["Well Done, ",e.toUpperCase()||"Guest","!"]})})]}),u.jsx("div",{className:"header-text"}),u.jsx("header",{className:"quiz-header",children:u.jsx("img",{src:"/Frame (4).png",alt:"Header Background",className:"header-bg"})}),u.jsxs("main",{className:"quiz-content",children:[u.jsx("div",{className:"image-row",children:u.jsx("img",{src:"/dancing.gif",alt:"Bear",className:"bear-img"})}),u.jsxs("div",{className:"quiz-task",children:[u.jsxs("div",{className:"badge",children:[u.jsx("img",{src:"badge.jpg",alt:"badge"}),u.jsx("div",{className:"completion",children:u.jsxs("strong",{children:[u.jsx("p",{children:"YOU HAVE SUCCESSFULLY"}),u.jsxs("p",{children:["COMPLETED ",u.jsx("span",{style:{color:"rgb(29, 144, 121)"},children:"STATEMENTS"})]})]})})]}),u.jsx("button",{className:"next-button",onClick:()=>window.location.href="/dashboard",children:"FINISH"})]})]}),u.jsx("footer",{className:"quiz-footer",children:u.jsx("img",{src:"/footer.png",alt:"Footer"})})]})},qP=()=>{const e=$r();return v.useEffect(()=>{(async()=>{try{await He.post("/api/logout/",{},{headers:{Authorization:`Token ${localStorage.getItem("authToken")}`}}),localStorage.removeItem("authToken"),e("/")}catch(n){console.error("Logout failed:",n),localStorage.removeItem("authToken"),e("/")}})()},[e]),u.jsx("div",{children:"Logging out..."})},GP="/statement.png",KP="/spelling.png",QP="/comp.png",XP="/avatar1.png",YP=tr,JP=nr,ZP=rr,e4=()=>{const[e,t]=v.useState("");return v.useEffect(()=>{const n=localStorage.getItem("username");n&&t(n)},[]),u.jsxs("div",{className:"dashboard-page font-sassoon",children:[u.jsx(zs,{activeLink:"upcoming-class"}),u.jsxs("main",{className:"dashboard-main-content",children:[u.jsxs("header",{className:"dashboard-header",children:[u.jsx("h1",{className:"header-title",children:"My Upcoming Classes"}),u.jsxs("div",{className:"header-actions",children:[u.jsx("button",{className:"icon-button",children:u.jsx(YP,{})}),u.jsx("button",{className:"icon-button",children:u.jsx(JP,{})}),u.jsxs("div",{className:"user-info",children:[u.jsx("img",{src:XP,alt:"User Avatar",className:"user-avatar"}),u.jsx("span",{className:"user-name",children:e.toUpperCase()||"Guest"}),u.jsx("button",{className:"icon-button small",children:u.jsx(ZP,{})})]})]})]}),u.jsx("div",{className:"dashboard-grid",children:u.jsxs("section",{className:"my-classes-section",children:[u.jsx("br",{}),u.jsxs("div",{className:"classes-grid",children:[u.jsx("div",{className:"class-card statements",children:u.jsxs(sn,{to:"/quizthrees",children:["    ",u.jsx("img",{src:GP,alt:"Statements activity background",className:"class-card-bg"})]})}),u.jsx("div",{className:"class-card spellings",children:u.jsx("img",{src:KP,alt:"Spellings activity background",className:"class-card-bg"})}),u.jsx("div",{className:"class-card comprehension",children:u.jsx("img",{src:QP,alt:"Comprehension activity background",className:"class-card-bg"})})]})]})}),u.jsx("footer",{className:"dashboard-footer",children:u.jsx("img",{src:"footer.png",alt:"Footer Decoration"})})]})]})};function t4(){return u.jsx(u.Fragment,{children:u.jsxs(YR,{children:[u.jsx(tt,{path:"/",element:u.jsx(A5,{})}),u.jsx(tt,{path:"/Home",element:u.jsx(eP,{})}),u.jsx(tt,{path:"/quizone",element:u.jsx(sP,{})}),u.jsx(tt,{path:"/register",element:u.jsx(tP,{})}),u.jsx(tt,{path:"/quiztwo",element:u.jsx(dP,{})}),u.jsx(tt,{path:"/quizthree",element:u.jsx(Dg,{})}),u.jsx(tt,{path:"/dashboard",element:u.jsx(kP,{})}),u.jsx(tt,{path:"/sidebar",element:u.jsx(zs,{})}),u.jsx(tt,{path:"/quizthree",element:u.jsx(Dg,{})}),u.jsx(tt,{path:"/nouns",element:u.jsx(OP,{})}),u.jsx(tt,{path:"/quizfour",element:u.jsx(IP,{})}),u.jsx(tt,{path:"/result",element:u.jsx(BP,{})}),u.jsx(tt,{path:"/statements",element:u.jsx(UP,{})}),u.jsx(tt,{path:"/quizthrees",element:u.jsx(WP,{})}),u.jsx(tt,{path:"/quizfours",element:u.jsx(VP,{})}),u.jsx(tt,{path:"/results",element:u.jsx(HP,{})}),u.jsx(tt,{path:"/upcoming-class",element:u.jsx(e4,{})}),u.jsx(tt,{path:"/logout",element:u.jsx(qP,{})})]})})}Rc.createRoot(document.getElementById("root")).render(u.jsx(o3,{children:u.jsx(Z.StrictMode,{children:u.jsx(t4,{})})}));
