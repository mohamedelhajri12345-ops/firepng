import{n as e,r as t}from"./rolldown-runtime-COiEfhsA.js";var n=`modulepreload`,r=function(e,t){return new URL(e,t).href},i={},a=function(e){return e.pathname.endsWith(`.css`)},o=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},s=function(e,t,s){let c=Promise.resolve();if(t&&t.length>0){let e,l=document.querySelector(`meta[property=csp-nonce]`),u=l?.nonce||l?.getAttribute(`nonce`);function d(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function f(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}c=d(t.map(t=>{t=r(t,s);let c=f(t),l=a(c);return o(i,c.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((l?e.styles:e.all).has(c.href))return;let t=document.createElement(`link`);if(t.rel=l?`stylesheet`:n,l||(t.as=`script`),t.crossOrigin=``,t.href=c.href,u&&t.setAttribute(`nonce`,u),document.head.appendChild(t),l)return new Promise((e,n)=>{let r=i=>{t.removeEventListener(`load`,r),t.removeEventListener(`error`,r),i.type===`error`?n(Error(`Unable to preload CSS for ${c}`)):e(i)};t.addEventListener(`load`,r),t.addEventListener(`error`,r)})})}).filter(e=>e!==void 0))}function l(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return c.then(t=>{for(let e of t||[])e.status===`rejected`&&l(e.reason);return e().catch(l)})},c=e({removeBackground:()=>Li}),l=Object.create,u=Object.defineProperty,d=Object.getOwnPropertyDescriptor,f=Object.getOwnPropertyNames,p=Object.getPrototypeOf,m=Object.prototype.hasOwnProperty,h=(e,t)=>function(){return t||(0,e[f(e)[0]])((t={exports:{}}).exports,t),t.exports},g=(e,t,n,r)=>{if(t&&typeof t==`object`||typeof t==`function`)for(let i of f(t))!m.call(e,i)&&i!==n&&u(e,i,{get:()=>t[i],enumerable:!(r=d(t,i))||r.enumerable});return e},_=(e,t,n)=>(n=e==null?{}:l(p(e)),g(t||!e||!e.__esModule?u(n,`default`,{value:e,enumerable:!0}):n,e)),v=h({"../../node_modules/.pnpm/iota-array@1.0.0/node_modules/iota-array/iota.js"(e,t){function n(e){for(var t=Array(e),n=0;n<e;++n)t[n]=n;return t}t.exports=n}}),y=h({"../../node_modules/.pnpm/is-buffer@1.1.6/node_modules/is-buffer/index.js"(e,t){t.exports=function(e){return e!=null&&(n(e)||r(e)||!!e._isBuffer)};function n(e){return!!e.constructor&&typeof e.constructor.isBuffer==`function`&&e.constructor.isBuffer(e)}function r(e){return typeof e.readFloatLE==`function`&&typeof e.slice==`function`&&n(e.slice(0,0))}}}),b=h({"../../node_modules/.pnpm/ndarray@1.0.19/node_modules/ndarray/ndarray.js"(e,t){var n=v(),r=y(),i=typeof Float64Array<`u`;function a(e,t){return e[0]-t[0]}function o(){for(var e=this.stride,t=Array(e.length),n=0;n<t.length;++n)t[n]=[Math.abs(e[n]),n];t.sort(a);var r=Array(t.length);for(n=0;n<r.length;++n)r[n]=t[n][1];return r}function s(e,t){var r=[`View`,t,`d`,e].join(``);t<0&&(r=`View_Nil`+e);var i=e===`generic`;if(t===-1){var a=`function `+r+`(a){this.data=a;};var proto=`+r+`.prototype;proto.dtype='`+e+`';proto.index=function(){return -1};proto.size=0;proto.dimension=-1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function(){return new `+r+`(this.data);};proto.get=proto.set=function(){};proto.pick=function(){return null};return function construct_`+r+`(a){return new `+r+`(a);}`,s=Function(a);return s()}if(t===0){var a=`function `+r+`(a,d) {this.data = a;this.offset = d};var proto=`+r+`.prototype;proto.dtype='`+e+`';proto.index=function(){return this.offset};proto.dimension=0;proto.size=1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function `+r+`_copy() {return new `+r+`(this.data,this.offset)};proto.pick=function `+r+`_pick(){return TrivialArray(this.data);};proto.valueOf=proto.get=function `+r+`_get(){return `+(i?`this.data.get(this.offset)`:`this.data[this.offset]`)+`};proto.set=function `+r+`_set(v){return `+(i?`this.data.set(this.offset,v)`:`this.data[this.offset]=v`)+`};return function construct_`+r+`(a,b,c,d){return new `+r+`(a,d)}`,s=Function(`TrivialArray`,a);return s(l[e][0])}var a=[`'use strict'`],c=n(t),u=c.map(function(e){return`i`+e}),d=`this.offset+`+c.map(function(e){return`this.stride[`+e+`]*i`+e}).join(`+`),f=c.map(function(e){return`b`+e}).join(`,`),p=c.map(function(e){return`c`+e}).join(`,`);a.push(`function `+r+`(a,`+f+`,`+p+`,d){this.data=a`,`this.shape=[`+f+`]`,`this.stride=[`+p+`]`,`this.offset=d|0}`,`var proto=`+r+`.prototype`,`proto.dtype='`+e+`'`,`proto.dimension=`+t),a.push(`Object.defineProperty(proto,'size',{get:function `+r+`_size(){return `+c.map(function(e){return`this.shape[`+e+`]`}).join(`*`),`}})`),t===1?a.push(`proto.order=[0]`):(a.push(`Object.defineProperty(proto,'order',{get:`),t<4?(a.push(`function `+r+`_order(){`),t===2?a.push(`return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})`):t===3&&a.push(`var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);if(s0>s1){if(s1>s2){return [2,1,0];}else if(s0>s2){return [1,2,0];}else{return [1,0,2];}}else if(s0>s2){return [2,0,1];}else if(s2>s1){return [0,1,2];}else{return [0,2,1];}}})`)):a.push(`ORDER})`)),a.push(`proto.set=function `+r+`_set(`+u.join(`,`)+`,v){`),i?a.push(`return this.data.set(`+d+`,v)}`):a.push(`return this.data[`+d+`]=v}`),a.push(`proto.get=function `+r+`_get(`+u.join(`,`)+`){`),i?a.push(`return this.data.get(`+d+`)}`):a.push(`return this.data[`+d+`]}`),a.push(`proto.index=function `+r+`_index(`,u.join(),`){return `+d+`}`),a.push(`proto.hi=function `+r+`_hi(`+u.join(`,`)+`){return new `+r+`(this.data,`+c.map(function(e){return[`(typeof i`,e,`!=='number'||i`,e,`<0)?this.shape[`,e,`]:i`,e,`|0`].join(``)}).join(`,`)+`,`+c.map(function(e){return`this.stride[`+e+`]`}).join(`,`)+`,this.offset)}`);var m=c.map(function(e){return`a`+e+`=this.shape[`+e+`]`}),h=c.map(function(e){return`c`+e+`=this.stride[`+e+`]`});a.push(`proto.lo=function `+r+`_lo(`+u.join(`,`)+`){var b=this.offset,d=0,`+m.join(`,`)+`,`+h.join(`,`));for(var g=0;g<t;++g)a.push(`if(typeof i`+g+`==='number'&&i`+g+`>=0){d=i`+g+`|0;b+=c`+g+`*d;a`+g+`-=d}`);a.push(`return new `+r+`(this.data,`+c.map(function(e){return`a`+e}).join(`,`)+`,`+c.map(function(e){return`c`+e}).join(`,`)+`,b)}`),a.push(`proto.step=function `+r+`_step(`+u.join(`,`)+`){var `+c.map(function(e){return`a`+e+`=this.shape[`+e+`]`}).join(`,`)+`,`+c.map(function(e){return`b`+e+`=this.stride[`+e+`]`}).join(`,`)+`,c=this.offset,d=0,ceil=Math.ceil`);for(var g=0;g<t;++g)a.push(`if(typeof i`+g+`==='number'){d=i`+g+`|0;if(d<0){c+=b`+g+`*(a`+g+`-1);a`+g+`=ceil(-a`+g+`/d)}else{a`+g+`=ceil(a`+g+`/d)}b`+g+`*=d}`);a.push(`return new `+r+`(this.data,`+c.map(function(e){return`a`+e}).join(`,`)+`,`+c.map(function(e){return`b`+e}).join(`,`)+`,c)}`);for(var _=Array(t),v=Array(t),g=0;g<t;++g)_[g]=`a[i`+g+`]`,v[g]=`b[i`+g+`]`;a.push(`proto.transpose=function `+r+`_transpose(`+u+`){`+u.map(function(e,t){return e+`=(`+e+`===undefined?`+t+`:`+e+`|0)`}).join(`;`),`var a=this.shape,b=this.stride;return new `+r+`(this.data,`+_.join(`,`)+`,`+v.join(`,`)+`,this.offset)}`),a.push(`proto.pick=function `+r+`_pick(`+u+`){var a=[],b=[],c=this.offset`);for(var g=0;g<t;++g)a.push(`if(typeof i`+g+`==='number'&&i`+g+`>=0){c=(c+this.stride[`+g+`]*i`+g+`)|0}else{a.push(this.shape[`+g+`]);b.push(this.stride[`+g+`])}`);a.push(`var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}`),a.push(`return function construct_`+r+`(data,shape,stride,offset){return new `+r+`(data,`+c.map(function(e){return`shape[`+e+`]`}).join(`,`)+`,`+c.map(function(e){return`stride[`+e+`]`}).join(`,`)+`,offset)}`);var s=Function(`CTOR_LIST`,`ORDER`,a.join(`
`));return s(l[e],o)}function c(e){if(r(e))return`buffer`;if(i)switch(Object.prototype.toString.call(e)){case`[object Float64Array]`:return`float64`;case`[object Float32Array]`:return`float32`;case`[object Int8Array]`:return`int8`;case`[object Int16Array]`:return`int16`;case`[object Int32Array]`:return`int32`;case`[object Uint8Array]`:return`uint8`;case`[object Uint16Array]`:return`uint16`;case`[object Uint32Array]`:return`uint32`;case`[object Uint8ClampedArray]`:return`uint8_clamped`;case`[object BigInt64Array]`:return`bigint64`;case`[object BigUint64Array]`:return`biguint64`}return Array.isArray(e)?`array`:`generic`}var l={float32:[],float64:[],int8:[],int16:[],int32:[],uint8:[],uint16:[],uint32:[],array:[],uint8_clamped:[],bigint64:[],biguint64:[],buffer:[],generic:[]};function u(e,t,n,r){if(e===void 0){var i=l.array[0];return i([])}typeof e==`number`&&(e=[e]),t===void 0&&(t=[e.length]);var a=t.length;if(n===void 0){n=Array(a);for(var o=a-1,u=1;o>=0;--o)n[o]=u,u*=t[o]}if(r===void 0){r=0;for(var o=0;o<a;++o)n[o]<0&&(r-=(t[o]-1)*n[o])}for(var d=c(e),f=l[d];f.length<=a+1;)f.push(s(d,f.length-1));var i=f[a+1];return i(e,t,n,r)}t.exports=u}}),x=typeof global==`object`&&global&&global.Object===Object&&global,S=typeof self==`object`&&self&&self.Object===Object&&self,ee=x||S||Function(`return this`)(),te=ee.Symbol,ne=Object.prototype,re=ne.hasOwnProperty,ie=ne.toString,ae=te?te.toStringTag:void 0;function C(e){var t=re.call(e,ae),n=e[ae];try{e[ae]=void 0;var r=!0}catch{}var i=ie.call(e);return r&&(t?e[ae]=n:delete e[ae]),i}var oe=C,se=Object.prototype.toString;function ce(e){return se.call(e)}var le=ce,ue=`[object Null]`,de=`[object Undefined]`,fe=te?te.toStringTag:void 0;function pe(e){return e==null?e===void 0?de:ue:fe&&fe in Object(e)?oe(e):le(e)}var me=pe;function w(e){var t=typeof e;return e!=null&&(t==`object`||t==`function`)}var T=w,he=`[object AsyncFunction]`,ge=`[object Function]`,_e=`[object GeneratorFunction]`,ve=`[object Proxy]`;function ye(e){if(!T(e))return!1;var t=me(e);return t==ge||t==_e||t==he||t==ve}var be=ye,xe=ee[`__core-js_shared__`],Se=function(){var e=/[^.]+$/.exec(xe&&xe.keys&&xe.keys.IE_PROTO||``);return e?`Symbol(src)_1.`+e:``}();function Ce(e){return!!Se&&Se in e}var we=Ce,Te=Function.prototype.toString;function Ee(e){if(e!=null){try{return Te.call(e)}catch{}try{return e+``}catch{}}return``}var De=Ee,Oe=/[\\^$.*+?()[\]{}|]/g,ke=/^\[object .+?Constructor\]$/,Ae=Function.prototype,je=Object.prototype,Me=Ae.toString,Ne=je.hasOwnProperty,Pe=RegExp(`^`+Me.call(Ne).replace(Oe,`\\$&`).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,`$1.*?`)+`$`);function E(e){return!T(e)||we(e)?!1:(be(e)?Pe:ke).test(De(e))}var Fe=E;function Ie(e,t){return e?.[t]}var Le=Ie;function Re(e,t){var n=Le(e,t);return Fe(n)?n:void 0}var ze=Re,Be=ze(Object,`create`);function Ve(){this.__data__=Be?Be(null):{},this.size=0}var He=Ve;function Ue(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=+!!t,t}var We=Ue,Ge=`__lodash_hash_undefined__`,Ke=Object.prototype.hasOwnProperty;function qe(e){var t=this.__data__;if(Be){var n=t[e];return n===Ge?void 0:n}return Ke.call(t,e)?t[e]:void 0}var Je=qe,Ye=Object.prototype.hasOwnProperty;function Xe(e){var t=this.__data__;return Be?t[e]!==void 0:Ye.call(t,e)}var Ze=Xe,Qe=`__lodash_hash_undefined__`;function $e(e,t){var n=this.__data__;return this.size+=+!this.has(e),n[e]=Be&&t===void 0?Qe:t,this}var et=$e;function tt(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}tt.prototype.clear=He,tt.prototype.delete=We,tt.prototype.get=Je,tt.prototype.has=Ze,tt.prototype.set=et;var nt=tt;function rt(){this.__data__=[],this.size=0}var it=rt;function at(e,t){return e===t||e!==e&&t!==t}var ot=at;function st(e,t){for(var n=e.length;n--;)if(ot(e[n][0],t))return n;return-1}var ct=st,lt=Array.prototype.splice;function ut(e){var t=this.__data__,n=ct(t,e);return n<0?!1:(n==t.length-1?t.pop():lt.call(t,n,1),--this.size,!0)}var dt=ut;function ft(e){var t=this.__data__,n=ct(t,e);return n<0?void 0:t[n][1]}var pt=ft;function mt(e){return ct(this.__data__,e)>-1}var ht=mt;function gt(e,t){var n=this.__data__,r=ct(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}var _t=gt;function vt(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}vt.prototype.clear=it,vt.prototype.delete=dt,vt.prototype.get=pt,vt.prototype.has=ht,vt.prototype.set=_t;var yt=vt,bt=ze(ee,`Map`);function xt(){this.size=0,this.__data__={hash:new nt,map:new(bt||yt),string:new nt}}var St=xt;function Ct(e){var t=typeof e;return t==`string`||t==`number`||t==`symbol`||t==`boolean`?e!==`__proto__`:e===null}var wt=Ct;function Tt(e,t){var n=e.__data__;return wt(t)?n[typeof t==`string`?`string`:`hash`]:n.map}var Et=Tt;function Dt(e){var t=Et(this,e).delete(e);return this.size-=+!!t,t}var Ot=Dt;function kt(e){return Et(this,e).get(e)}var At=kt;function jt(e){return Et(this,e).has(e)}var Mt=jt;function Nt(e,t){var n=Et(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}var Pt=Nt;function Ft(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ft.prototype.clear=St,Ft.prototype.delete=Ot,Ft.prototype.get=At,Ft.prototype.has=Mt,Ft.prototype.set=Pt;var It=Ft,Lt=`Expected a function`;function Rt(e,t){if(typeof e!=`function`||t!=null&&typeof t!=`function`)throw TypeError(Lt);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=e.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(Rt.Cache||It),n}Rt.Cache=It;var zt=Rt,Bt=_(b()),Vt=class e{constructor(e,t){this.type=`application/octet-stream`,this.params={},this.type=e,this.params=t}toString(){let e=[];for(let t in this.params){let n=this.params[t];e.push(`${t}=${n}`)}return[this.type,...e].join(`;`)}static create(t,n){return new e(t,n)}isIdentical(e){return this.type===e.type&&this.params===e.params}isEqual(e){return this.type===e.type}static fromString(t){let[n,...r]=t.split(`;`),i={};for(let e of r){let[t,n]=e.split(`=`);i[t.trim()]=n.trim()}return new e(n,i)}},Ht=_(b());async function Ut(e){let t=Vt.fromString(e.type);switch(t.type){case`image/x-alpha8`:{let n=parseInt(t.params.width),r=parseInt(t.params.height);return(0,Ht.default)(new Uint8Array(await e.arrayBuffer()),[r,n,1])}case`image/x-rgba8`:{let n=parseInt(t.params.width),r=parseInt(t.params.height);return(0,Ht.default)(new Uint8Array(await e.arrayBuffer()),[r,n,4])}case`application/octet-stream`:case`image/png`:case`image/jpeg`:case`image/jpg`:case`image/webp`:{let t=qt(await createImageBitmap(e));return(0,Ht.default)(new Uint8Array(t.data),[t.height,t.width,4])}default:throw Error(`Invalid format: ${t.type} with params: ${t.params}`)}}async function Wt(e,t=.8,n=`image/png`){let[r,i,a]=e.shape;switch(n){case`image/x-alpha8`:case`image/x-rgba8`:{let t=Vt.create(n,{width:i.toString(),height:r.toString()});return new Blob([e.data],{type:t.toString()})}case`image/png`:case`image/jpeg`:case`image/webp`:{let a=new ImageData(new Uint8ClampedArray(e.data),i,r);var o=$t(a.width,a.height);return o.getContext(`2d`).putImageData(a,0,0),o.convertToBlob({quality:t,type:n})}default:throw Error(`Invalid format: ${n}`)}}function Gt(e){return RegExp(`^(?:[a-z+]+:)?//`,`i`).test(e)}function Kt(e,t){return Gt(e)?e:new URL(e,t).href}function qt(e){var t=$t(e.width,e.height),n=t.getContext(`2d`);return n.drawImage(e,0,0),n.getImageData(0,0,t.width,t.height)}function Jt(e){if(typeof Uint8Array<`u`)return new Uint8Array(e);if(typeof Uint8ClampedArray<`u`)return new Uint8ClampedArray(e);if(typeof Uint16Array<`u`)return new Uint16Array(e);if(typeof Uint32Array<`u`)return new Uint32Array(e);if(typeof Float32Array<`u`)return new Float32Array(e);if(typeof Float64Array<`u`)return new Float64Array(e);throw Error(`TypedArray not supported`)}function Yt(e,t,n,r=!1){let[i,a,o]=e.shape,s=a/t,c=i/n;r&&(s=c=Math.max(s,c)>1?Math.max(s,c):Math.min(s,c));let l=(0,Bt.default)(Jt(o*t*n),[n,t,o]);for(let r=0;r<n;r++)for(let n=0;n<t;n++){let t=n*s,u=r*c,d=Math.max(Math.floor(t),0),f=Math.min(Math.ceil(t),a-1),p=Math.max(Math.floor(u),0),m=Math.min(Math.ceil(u),i-1),h=t-d,g=u-p;for(let t=0;t<o;t++){let i=e.get(p,d,t),a=e.get(p,f,t),o=e.get(m,d,t),s=e.get(m,f,t),c=(1-h)*(1-g)*i+h*(1-g)*a+(1-h)*g*o+h*g*s;l.set(r,n,t,c)}}return l}function Xt(e,t=[128,128,128],n=[256,256,256]){var r=e.data;let[i,a,o]=e.shape,s=i*a,c=new Float32Array(3*s);for(let e=0,i=0;e<r.length;e+=4,i+=1)c[i]=(r[e]-t[0])/n[0],c[i+s]=(r[e+1]-t[1])/n[1],c[i+s+s]=(r[e+2]-t[2])/n[2];return(0,Bt.default)(c,[1,3,i,a])}async function Zt(e,t){return typeof e==`string`&&(e=Kt(e,t.publicPath),e=new URL(e)),e instanceof URL&&(e=await(await fetch(e,{})).blob()),(e instanceof ArrayBuffer||ArrayBuffer.isView(e))&&(e=new Blob([e])),e instanceof Blob&&(e=await Ut(e)),e}function Qt(e){let t=new Uint8Array(e.data.length);for(let n=0;n<e.data.length;n++)t[n]=e.data[n]*255;return(0,Bt.default)(t,e.shape)}function $t(e,t){let n;if(n=typeof OffscreenCanvas<`u`?new OffscreenCanvas(e,t):document.createElement(`canvas`),!n)throw Error(`Canvas nor OffscreenCanvas are available in the current context.`);return n}var en=_(b()),tn=async()=>navigator.gpu!==void 0&&await navigator.gpu.requestAdapter()!==null,nn=()=>navigator.hardwareConcurrency??4;async function rn(e,t){return URL.createObjectURL(await an(e,t))}async function an(e,t){let n=new URL(`resources.json`,t.publicPath),r=await fetch(n);if(!r.ok)throw Error(`Resource metadata not found. Ensure that the config.publicPath is configured correctly.`);let i=(await r.json())[e];if(!i)throw Error(`Resource ${e} not found. Ensure that the config.publicPath is configured correctly.`);let a=i.chunks,o=0,s=a.map(async n=>{let r=n.offsets[1]-n.offsets[0],a=t.publicPath?new URL(n.name,t.publicPath).toString():n.name,s=await(await fetch(a,t.fetchArgs)).blob();if(r!==s.size)throw Error(`Failed to fetch ${e} with size ${r} but got ${s.size}`);return t.progress&&(o+=r,t.progress(`fetch:${e}`,o,i.size)),s}),c=await Promise.all(s),l=new Blob(c,{type:i.mime});if(l.size!==i.size)throw Error(`Failed to fetch ${e} with size ${i.size} but got ${l.size}`);return l}var on=null,sn=async e=>(on===null&&(on=e?(await s(async()=>{let{default:e}=await Promise.resolve().then(()=>Vg);return{default:e}},void 0,import.meta.url)).default:(await s(async()=>{let{default:e}=await Promise.resolve().then(()=>Ri);return{default:e}},void 0,import.meta.url)).default),on);async function cn(e,t){let n=t.device===`gpu`&&await tn(),r=n&&t.proxyToWorker,i=[n?`webgpu`:`wasm`],a=await sn(n);t.debug&&(console.debug(`	Using WebGPU:`,n),console.debug(`	Proxy to Worker:`,r),a.env.debug=!0,a.env.logLevel=`verbose`),a.env.wasm.numThreads=nn(),a.env.wasm.proxy=r;let o=n?`/onnxruntime-web/ort-wasm-simd-threaded.jsep`:`/onnxruntime-web/ort-wasm-simd-threaded`,s=await rn(`${o}.wasm`,t),c=await rn(`${o}.mjs`,t);a.env.wasm.wasmPaths={mjs:c,wasm:s},t.debug&&console.debug(`ort.env.wasm:`,a.env.wasm);let l={executionProviders:i,graphOptimizationLevel:`all`,executionMode:`parallel`,enableCpuMemArena:!0};return await a.InferenceSession.create(e,l).catch(e=>{throw Error(`Failed to create session: "${e}". Please check if the publicPath is set correctly.`)})}async function ln(e,t,n,r){let i=await sn(r.device===`gpu`&&await tn()),a={};for(let[e,n]of t)a[e]=new i.Tensor(`float32`,new Float32Array(n.data),n.shape);let o=await e.run(a,{}),s=[];for(let e of n){let t=o[e],n=t.dims,r=t.data,i=(0,en.default)(r,n);s.push(i)}return s}var un;(function(e){e.assertEqual=e=>e;function t(e){}e.assertIs=t;function n(e){throw Error()}e.assertNever=n,e.arrayToEnum=e=>{let t={};for(let n of e)t[n]=n;return t},e.getValidEnumValues=t=>{let n=e.objectKeys(t).filter(e=>typeof t[t[e]]!=`number`),r={};for(let e of n)r[e]=t[e];return e.objectValues(r)},e.objectValues=t=>e.objectKeys(t).map(function(e){return t[e]}),e.objectKeys=typeof Object.keys==`function`?e=>Object.keys(e):e=>{let t=[];for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t},e.find=(e,t)=>{for(let n of e)if(t(n))return n},e.isInteger=typeof Number.isInteger==`function`?e=>Number.isInteger(e):e=>typeof e==`number`&&isFinite(e)&&Math.floor(e)===e;function r(e,t=` | `){return e.map(e=>typeof e==`string`?`'${e}'`:e).join(t)}e.joinValues=r,e.jsonStringifyReplacer=(e,t)=>typeof t==`bigint`?t.toString():t})(un||={});var dn;(function(e){e.mergeShapes=(e,t)=>({...e,...t})})(dn||={});var D=un.arrayToEnum([`string`,`nan`,`number`,`integer`,`float`,`boolean`,`date`,`bigint`,`symbol`,`function`,`undefined`,`null`,`array`,`object`,`unknown`,`promise`,`void`,`never`,`map`,`set`]),fn=e=>{switch(typeof e){case`undefined`:return D.undefined;case`string`:return D.string;case`number`:return isNaN(e)?D.nan:D.number;case`boolean`:return D.boolean;case`function`:return D.function;case`bigint`:return D.bigint;case`symbol`:return D.symbol;case`object`:return Array.isArray(e)?D.array:e===null?D.null:e.then&&typeof e.then==`function`&&e.catch&&typeof e.catch==`function`?D.promise:typeof Map<`u`&&e instanceof Map?D.map:typeof Set<`u`&&e instanceof Set?D.set:typeof Date<`u`&&e instanceof Date?D.date:D.object;default:return D.unknown}},O=un.arrayToEnum([`invalid_type`,`invalid_literal`,`custom`,`invalid_union`,`invalid_union_discriminator`,`invalid_enum_value`,`unrecognized_keys`,`invalid_arguments`,`invalid_return_type`,`invalid_date`,`invalid_string`,`too_small`,`too_big`,`invalid_intersection_types`,`not_multiple_of`,`not_finite`]),pn=e=>JSON.stringify(e,null,2).replace(/"([^"]+)":/g,`$1:`),mn=class e extends Error{get errors(){return this.issues}constructor(e){super(),this.issues=[],this.addIssue=e=>{this.issues=[...this.issues,e]},this.addIssues=(e=[])=>{this.issues=[...this.issues,...e]};let t=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.name=`ZodError`,this.issues=e}format(e){let t=e||function(e){return e.message},n={_errors:[]},r=e=>{for(let i of e.issues)if(i.code===`invalid_union`)i.unionErrors.map(r);else if(i.code===`invalid_return_type`)r(i.returnTypeError);else if(i.code===`invalid_arguments`)r(i.argumentsError);else if(i.path.length===0)n._errors.push(t(i));else{let e=n,r=0;for(;r<i.path.length;){let n=i.path[r];r===i.path.length-1?(e[n]=e[n]||{_errors:[]},e[n]._errors.push(t(i))):e[n]=e[n]||{_errors:[]},e=e[n],r++}}};return r(this),n}static assert(t){if(!(t instanceof e))throw Error(`Not a ZodError: ${t}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,un.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=e=>e.message){let t={},n=[];for(let r of this.issues)r.path.length>0?(t[r.path[0]]=t[r.path[0]]||[],t[r.path[0]].push(e(r))):n.push(e(r));return{formErrors:n,fieldErrors:t}}get formErrors(){return this.flatten()}};mn.create=e=>new mn(e);var hn=(e,t)=>{let n;switch(e.code){case O.invalid_type:n=e.received===D.undefined?`Required`:`Expected ${e.expected}, received ${e.received}`;break;case O.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(e.expected,un.jsonStringifyReplacer)}`;break;case O.unrecognized_keys:n=`Unrecognized key(s) in object: ${un.joinValues(e.keys,`, `)}`;break;case O.invalid_union:n=`Invalid input`;break;case O.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${un.joinValues(e.options)}`;break;case O.invalid_enum_value:n=`Invalid enum value. Expected ${un.joinValues(e.options)}, received '${e.received}'`;break;case O.invalid_arguments:n=`Invalid function arguments`;break;case O.invalid_return_type:n=`Invalid function return type`;break;case O.invalid_date:n=`Invalid date`;break;case O.invalid_string:typeof e.validation==`object`?`includes`in e.validation?(n=`Invalid input: must include "${e.validation.includes}"`,typeof e.validation.position==`number`&&(n=`${n} at one or more positions greater than or equal to ${e.validation.position}`)):`startsWith`in e.validation?n=`Invalid input: must start with "${e.validation.startsWith}"`:`endsWith`in e.validation?n=`Invalid input: must end with "${e.validation.endsWith}"`:un.assertNever(e.validation):n=e.validation===`regex`?`Invalid`:`Invalid ${e.validation}`;break;case O.too_small:n=e.type===`array`?`Array must contain ${e.exact?`exactly`:e.inclusive?`at least`:`more than`} ${e.minimum} element(s)`:e.type===`string`?`String must contain ${e.exact?`exactly`:e.inclusive?`at least`:`over`} ${e.minimum} character(s)`:e.type===`number`?`Number must be ${e.exact?`exactly equal to `:e.inclusive?`greater than or equal to `:`greater than `}${e.minimum}`:e.type===`date`?`Date must be ${e.exact?`exactly equal to `:e.inclusive?`greater than or equal to `:`greater than `}${new Date(Number(e.minimum))}`:`Invalid input`;break;case O.too_big:n=e.type===`array`?`Array must contain ${e.exact?`exactly`:e.inclusive?`at most`:`less than`} ${e.maximum} element(s)`:e.type===`string`?`String must contain ${e.exact?`exactly`:e.inclusive?`at most`:`under`} ${e.maximum} character(s)`:e.type===`number`?`Number must be ${e.exact?`exactly`:e.inclusive?`less than or equal to`:`less than`} ${e.maximum}`:e.type===`bigint`?`BigInt must be ${e.exact?`exactly`:e.inclusive?`less than or equal to`:`less than`} ${e.maximum}`:e.type===`date`?`Date must be ${e.exact?`exactly`:e.inclusive?`smaller than or equal to`:`smaller than`} ${new Date(Number(e.maximum))}`:`Invalid input`;break;case O.custom:n=`Invalid input`;break;case O.invalid_intersection_types:n=`Intersection results could not be merged`;break;case O.not_multiple_of:n=`Number must be a multiple of ${e.multipleOf}`;break;case O.not_finite:n=`Number must be finite`;break;default:n=t.defaultError,un.assertNever(e)}return{message:n}},gn=hn;function _n(e){gn=e}function vn(){return gn}var yn=e=>{let{data:t,path:n,errorMaps:r,issueData:i}=e,a=[...n,...i.path||[]],o={...i,path:a};if(i.message!==void 0)return{...i,path:a,message:i.message};let s=``,c=r.filter(e=>!!e).slice().reverse();for(let e of c)s=e(o,{data:t,defaultError:s}).message;return{...i,path:a,message:s}},bn=[];function k(e,t){let n=vn(),r=yn({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,n,n===hn?void 0:hn].filter(e=>!!e)});e.common.issues.push(r)}var xn=class e{constructor(){this.value=`valid`}dirty(){this.value===`valid`&&(this.value=`dirty`)}abort(){this.value!==`aborted`&&(this.value=`aborted`)}static mergeArray(e,t){let n=[];for(let r of t){if(r.status===`aborted`)return A;r.status===`dirty`&&e.dirty(),n.push(r.value)}return{status:e.value,value:n}}static async mergeObjectAsync(t,n){let r=[];for(let e of n){let t=await e.key,n=await e.value;r.push({key:t,value:n})}return e.mergeObjectSync(t,r)}static mergeObjectSync(e,t){let n={};for(let r of t){let{key:t,value:i}=r;if(t.status===`aborted`||i.status===`aborted`)return A;t.status===`dirty`&&e.dirty(),i.status===`dirty`&&e.dirty(),t.value!==`__proto__`&&(i.value!==void 0||r.alwaysSet)&&(n[t.value]=i.value)}return{status:e.value,value:n}}},A=Object.freeze({status:`aborted`}),Sn=e=>({status:`dirty`,value:e}),Cn=e=>({status:`valid`,value:e}),wn=e=>e.status===`aborted`,Tn=e=>e.status===`dirty`,En=e=>e.status===`valid`,Dn=e=>typeof Promise<`u`&&e instanceof Promise;function On(e,t,n,r){if(n===`a`&&!r)throw TypeError(`Private accessor was defined without a getter`);if(typeof t==`function`?e!==t||!r:!t.has(e))throw TypeError(`Cannot read private member from an object whose class did not declare it`);return n===`m`?r:n===`a`?r.call(e):r?r.value:t.get(e)}function kn(e,t,n,r,i){if(r===`m`)throw TypeError(`Private method is not writable`);if(r===`a`&&!i)throw TypeError(`Private accessor was defined without a setter`);if(typeof t==`function`?e!==t||!i:!t.has(e))throw TypeError(`Cannot write private member to an object whose class did not declare it`);return r===`a`?i.call(e,n):i?i.value=n:t.set(e,n),n}var j;(function(e){e.errToObj=e=>typeof e==`string`?{message:e}:e||{},e.toString=e=>typeof e==`string`?e:e?.message})(j||={});var An,jn,Mn=class{constructor(e,t,n,r){this._cachedPath=[],this.parent=e,this.data=t,this._path=n,this._key=r}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}},Nn=(e,t)=>{if(En(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw Error(`Validation failed but no issues detected.`);return{success:!1,get error(){if(this._error)return this._error;let t=new mn(e.common.issues);return this._error=t,this._error}}};function Pn(e){if(!e)return{};let{errorMap:t,invalid_type_error:n,required_error:r,description:i}=e;if(t&&(n||r))throw Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return t?{errorMap:t,description:i}:{errorMap:(t,i)=>{let{message:a}=e;return t.code===`invalid_enum_value`?{message:a??i.defaultError}:i.data===void 0?{message:a??r??i.defaultError}:t.code===`invalid_type`?{message:a??n??i.defaultError}:{message:i.defaultError}},description:i}}var Fn=class{get description(){return this._def.description}_getType(e){return fn(e.data)}_getOrReturnCtx(e,t){return t||{common:e.parent.common,data:e.data,parsedType:fn(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new xn,ctx:{common:e.parent.common,data:e.data,parsedType:fn(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){let t=this._parse(e);if(Dn(t))throw Error(`Synchronous parse encountered promise.`);return t}_parseAsync(e){let t=this._parse(e);return Promise.resolve(t)}parse(e,t){let n=this.safeParse(e,t);if(n.success)return n.data;throw n.error}safeParse(e,t){let n={common:{issues:[],async:t?.async??!1,contextualErrorMap:t?.errorMap},path:t?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:fn(e)};return Nn(n,this._parseSync({data:e,path:n.path,parent:n}))}"~validate"(e){let t={common:{issues:[],async:!!this[`~standard`].async},path:[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:fn(e)};if(!this[`~standard`].async)try{let n=this._parseSync({data:e,path:[],parent:t});return En(n)?{value:n.value}:{issues:t.common.issues}}catch(e){((e?.message)?.toLowerCase())?.includes(`encountered`)&&(this[`~standard`].async=!0),t.common={issues:[],async:!0}}return this._parseAsync({data:e,path:[],parent:t}).then(e=>En(e)?{value:e.value}:{issues:t.common.issues})}async parseAsync(e,t){let n=await this.safeParseAsync(e,t);if(n.success)return n.data;throw n.error}async safeParseAsync(e,t){let n={common:{issues:[],contextualErrorMap:t?.errorMap,async:!0},path:t?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:fn(e)},r=this._parse({data:e,path:n.path,parent:n});return Nn(n,await(Dn(r)?r:Promise.resolve(r)))}refine(e,t){let n=e=>typeof t==`string`||t===void 0?{message:t}:typeof t==`function`?t(e):t;return this._refinement((t,r)=>{let i=e(t),a=()=>r.addIssue({code:O.custom,...n(t)});return typeof Promise<`u`&&i instanceof Promise?i.then(e=>e?!0:(a(),!1)):i?!0:(a(),!1)})}refinement(e,t){return this._refinement((n,r)=>e(n)?!0:(r.addIssue(typeof t==`function`?t(n,r):t),!1))}_refinement(e){return new Rr({schema:this,typeName:N.ZodEffects,effect:{type:`refinement`,refinement:e}})}superRefine(e){return this._refinement(e)}constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this),this[`~standard`]={version:1,vendor:`zod`,validate:e=>this[`~validate`](e)}}optional(){return M.create(this,this._def)}nullable(){return zr.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return yr.create(this)}promise(){return Lr.create(this,this._def)}or(e){return Sr.create([this,e],this._def)}and(e){return Er.create(this,e,this._def)}transform(e){return new Rr({...Pn(this._def),schema:this,typeName:N.ZodEffects,effect:{type:`transform`,transform:e}})}default(e){let t=typeof e==`function`?e:()=>e;return new Br({...Pn(this._def),innerType:this,defaultValue:t,typeName:N.ZodDefault})}brand(){return new Wr({typeName:N.ZodBranded,type:this,...Pn(this._def)})}catch(e){let t=typeof e==`function`?e:()=>e;return new Vr({...Pn(this._def),innerType:this,catchValue:t,typeName:N.ZodCatch})}describe(e){let t=this.constructor;return new t({...this._def,description:e})}pipe(e){return Gr.create(this,e)}readonly(){return Kr.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}},In=/^c[^\s-]{8,}$/i,Ln=/^[0-9a-z]+$/,Rn=/^[0-9A-HJKMNP-TV-Z]{26}$/i,zn=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,Bn=/^[a-z0-9_-]{21}$/i,Vn=/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,Hn=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,Un=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,Wn=`^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`,Gn,Kn=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,qn=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,Jn=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,Yn=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,Xn=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,Zn=/^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,Qn=`((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`,$n=RegExp(`^${Qn}$`);function er(e){let t=`([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d`;return e.precision?t=`${t}\\.\\d{${e.precision}}`:e.precision??(t=`${t}(\\.\\d+)?`),t}function tr(e){return RegExp(`^${er(e)}$`)}function nr(e){let t=`${Qn}T${er(e)}`,n=[];return n.push(e.local?`Z?`:`Z`),e.offset&&n.push(`([+-]\\d{2}:?\\d{2})`),t=`${t}(${n.join(`|`)})`,RegExp(`^${t}$`)}function rr(e,t){return!((t!==`v4`&&t||!Kn.test(e))&&(t!==`v6`&&t||!Jn.test(e)))}function ir(e,t){if(!Vn.test(e))return!1;try{let[n]=e.split(`.`),r=n.replace(/-/g,`+`).replace(/_/g,`/`).padEnd(n.length+(4-n.length%4)%4,`=`),i=JSON.parse(atob(r));return!(typeof i!=`object`||!i||!i.typ||!i.alg||t&&i.alg!==t)}catch{return!1}}function ar(e,t){return!((t!==`v4`&&t||!qn.test(e))&&(t!==`v6`&&t||!Yn.test(e)))}var or=class e extends Fn{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==D.string){let t=this._getOrReturnCtx(e);return k(t,{code:O.invalid_type,expected:D.string,received:t.parsedType}),A}let t=new xn,n;for(let r of this._def.checks)if(r.kind===`min`)e.data.length<r.value&&(n=this._getOrReturnCtx(e,n),k(n,{code:O.too_small,minimum:r.value,type:`string`,inclusive:!0,exact:!1,message:r.message}),t.dirty());else if(r.kind===`max`)e.data.length>r.value&&(n=this._getOrReturnCtx(e,n),k(n,{code:O.too_big,maximum:r.value,type:`string`,inclusive:!0,exact:!1,message:r.message}),t.dirty());else if(r.kind===`length`){let i=e.data.length>r.value,a=e.data.length<r.value;(i||a)&&(n=this._getOrReturnCtx(e,n),i?k(n,{code:O.too_big,maximum:r.value,type:`string`,inclusive:!0,exact:!0,message:r.message}):a&&k(n,{code:O.too_small,minimum:r.value,type:`string`,inclusive:!0,exact:!0,message:r.message}),t.dirty())}else if(r.kind===`email`)Un.test(e.data)||(n=this._getOrReturnCtx(e,n),k(n,{validation:`email`,code:O.invalid_string,message:r.message}),t.dirty());else if(r.kind===`emoji`)Gn||=new RegExp(Wn,`u`),Gn.test(e.data)||(n=this._getOrReturnCtx(e,n),k(n,{validation:`emoji`,code:O.invalid_string,message:r.message}),t.dirty());else if(r.kind===`uuid`)zn.test(e.data)||(n=this._getOrReturnCtx(e,n),k(n,{validation:`uuid`,code:O.invalid_string,message:r.message}),t.dirty());else if(r.kind===`nanoid`)Bn.test(e.data)||(n=this._getOrReturnCtx(e,n),k(n,{validation:`nanoid`,code:O.invalid_string,message:r.message}),t.dirty());else if(r.kind===`cuid`)In.test(e.data)||(n=this._getOrReturnCtx(e,n),k(n,{validation:`cuid`,code:O.invalid_string,message:r.message}),t.dirty());else if(r.kind===`cuid2`)Ln.test(e.data)||(n=this._getOrReturnCtx(e,n),k(n,{validation:`cuid2`,code:O.invalid_string,message:r.message}),t.dirty());else if(r.kind===`ulid`)Rn.test(e.data)||(n=this._getOrReturnCtx(e,n),k(n,{validation:`ulid`,code:O.invalid_string,message:r.message}),t.dirty());else if(r.kind===`url`)try{new URL(e.data)}catch{n=this._getOrReturnCtx(e,n),k(n,{validation:`url`,code:O.invalid_string,message:r.message}),t.dirty()}else r.kind===`regex`?(r.regex.lastIndex=0,r.regex.test(e.data)||(n=this._getOrReturnCtx(e,n),k(n,{validation:`regex`,code:O.invalid_string,message:r.message}),t.dirty())):r.kind===`trim`?e.data=e.data.trim():r.kind===`includes`?e.data.includes(r.value,r.position)||(n=this._getOrReturnCtx(e,n),k(n,{code:O.invalid_string,validation:{includes:r.value,position:r.position},message:r.message}),t.dirty()):r.kind===`toLowerCase`?e.data=e.data.toLowerCase():r.kind===`toUpperCase`?e.data=e.data.toUpperCase():r.kind===`startsWith`?e.data.startsWith(r.value)||(n=this._getOrReturnCtx(e,n),k(n,{code:O.invalid_string,validation:{startsWith:r.value},message:r.message}),t.dirty()):r.kind===`endsWith`?e.data.endsWith(r.value)||(n=this._getOrReturnCtx(e,n),k(n,{code:O.invalid_string,validation:{endsWith:r.value},message:r.message}),t.dirty()):r.kind===`datetime`?nr(r).test(e.data)||(n=this._getOrReturnCtx(e,n),k(n,{code:O.invalid_string,validation:`datetime`,message:r.message}),t.dirty()):r.kind===`date`?$n.test(e.data)||(n=this._getOrReturnCtx(e,n),k(n,{code:O.invalid_string,validation:`date`,message:r.message}),t.dirty()):r.kind===`time`?tr(r).test(e.data)||(n=this._getOrReturnCtx(e,n),k(n,{code:O.invalid_string,validation:`time`,message:r.message}),t.dirty()):r.kind===`duration`?Hn.test(e.data)||(n=this._getOrReturnCtx(e,n),k(n,{validation:`duration`,code:O.invalid_string,message:r.message}),t.dirty()):r.kind===`ip`?rr(e.data,r.version)||(n=this._getOrReturnCtx(e,n),k(n,{validation:`ip`,code:O.invalid_string,message:r.message}),t.dirty()):r.kind===`jwt`?ir(e.data,r.alg)||(n=this._getOrReturnCtx(e,n),k(n,{validation:`jwt`,code:O.invalid_string,message:r.message}),t.dirty()):r.kind===`cidr`?ar(e.data,r.version)||(n=this._getOrReturnCtx(e,n),k(n,{validation:`cidr`,code:O.invalid_string,message:r.message}),t.dirty()):r.kind===`base64`?Xn.test(e.data)||(n=this._getOrReturnCtx(e,n),k(n,{validation:`base64`,code:O.invalid_string,message:r.message}),t.dirty()):r.kind===`base64url`?Zn.test(e.data)||(n=this._getOrReturnCtx(e,n),k(n,{validation:`base64url`,code:O.invalid_string,message:r.message}),t.dirty()):un.assertNever(r);return{status:t.value,value:e.data}}_regex(e,t,n){return this.refinement(t=>e.test(t),{validation:t,code:O.invalid_string,...j.errToObj(n)})}_addCheck(t){return new e({...this._def,checks:[...this._def.checks,t]})}email(e){return this._addCheck({kind:`email`,...j.errToObj(e)})}url(e){return this._addCheck({kind:`url`,...j.errToObj(e)})}emoji(e){return this._addCheck({kind:`emoji`,...j.errToObj(e)})}uuid(e){return this._addCheck({kind:`uuid`,...j.errToObj(e)})}nanoid(e){return this._addCheck({kind:`nanoid`,...j.errToObj(e)})}cuid(e){return this._addCheck({kind:`cuid`,...j.errToObj(e)})}cuid2(e){return this._addCheck({kind:`cuid2`,...j.errToObj(e)})}ulid(e){return this._addCheck({kind:`ulid`,...j.errToObj(e)})}base64(e){return this._addCheck({kind:`base64`,...j.errToObj(e)})}base64url(e){return this._addCheck({kind:`base64url`,...j.errToObj(e)})}jwt(e){return this._addCheck({kind:`jwt`,...j.errToObj(e)})}ip(e){return this._addCheck({kind:`ip`,...j.errToObj(e)})}cidr(e){return this._addCheck({kind:`cidr`,...j.errToObj(e)})}datetime(e){return typeof e==`string`?this._addCheck({kind:`datetime`,precision:null,offset:!1,local:!1,message:e}):this._addCheck({kind:`datetime`,precision:e?.precision===void 0?null:e?.precision,offset:e?.offset??!1,local:e?.local??!1,...j.errToObj(e?.message)})}date(e){return this._addCheck({kind:`date`,message:e})}time(e){return typeof e==`string`?this._addCheck({kind:`time`,precision:null,message:e}):this._addCheck({kind:`time`,precision:e?.precision===void 0?null:e?.precision,...j.errToObj(e?.message)})}duration(e){return this._addCheck({kind:`duration`,...j.errToObj(e)})}regex(e,t){return this._addCheck({kind:`regex`,regex:e,...j.errToObj(t)})}includes(e,t){return this._addCheck({kind:`includes`,value:e,position:t?.position,...j.errToObj(t?.message)})}startsWith(e,t){return this._addCheck({kind:`startsWith`,value:e,...j.errToObj(t)})}endsWith(e,t){return this._addCheck({kind:`endsWith`,value:e,...j.errToObj(t)})}min(e,t){return this._addCheck({kind:`min`,value:e,...j.errToObj(t)})}max(e,t){return this._addCheck({kind:`max`,value:e,...j.errToObj(t)})}length(e,t){return this._addCheck({kind:`length`,value:e,...j.errToObj(t)})}nonempty(e){return this.min(1,j.errToObj(e))}trim(){return new e({...this._def,checks:[...this._def.checks,{kind:`trim`}]})}toLowerCase(){return new e({...this._def,checks:[...this._def.checks,{kind:`toLowerCase`}]})}toUpperCase(){return new e({...this._def,checks:[...this._def.checks,{kind:`toUpperCase`}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind===`datetime`)}get isDate(){return!!this._def.checks.find(e=>e.kind===`date`)}get isTime(){return!!this._def.checks.find(e=>e.kind===`time`)}get isDuration(){return!!this._def.checks.find(e=>e.kind===`duration`)}get isEmail(){return!!this._def.checks.find(e=>e.kind===`email`)}get isURL(){return!!this._def.checks.find(e=>e.kind===`url`)}get isEmoji(){return!!this._def.checks.find(e=>e.kind===`emoji`)}get isUUID(){return!!this._def.checks.find(e=>e.kind===`uuid`)}get isNANOID(){return!!this._def.checks.find(e=>e.kind===`nanoid`)}get isCUID(){return!!this._def.checks.find(e=>e.kind===`cuid`)}get isCUID2(){return!!this._def.checks.find(e=>e.kind===`cuid2`)}get isULID(){return!!this._def.checks.find(e=>e.kind===`ulid`)}get isIP(){return!!this._def.checks.find(e=>e.kind===`ip`)}get isCIDR(){return!!this._def.checks.find(e=>e.kind===`cidr`)}get isBase64(){return!!this._def.checks.find(e=>e.kind===`base64`)}get isBase64url(){return!!this._def.checks.find(e=>e.kind===`base64url`)}get minLength(){let e=null;for(let t of this._def.checks)t.kind===`min`&&(e===null||t.value>e)&&(e=t.value);return e}get maxLength(){let e=null;for(let t of this._def.checks)t.kind===`max`&&(e===null||t.value<e)&&(e=t.value);return e}};or.create=e=>new or({checks:[],typeName:N.ZodString,coerce:e?.coerce??!1,...Pn(e)});function sr(e,t){let n=(e.toString().split(`.`)[1]||``).length,r=(t.toString().split(`.`)[1]||``).length,i=n>r?n:r;return parseInt(e.toFixed(i).replace(`.`,``))%parseInt(t.toFixed(i).replace(`.`,``))/10**i}var cr=class e extends Fn{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==D.number){let t=this._getOrReturnCtx(e);return k(t,{code:O.invalid_type,expected:D.number,received:t.parsedType}),A}let t,n=new xn;for(let r of this._def.checks)r.kind===`int`?un.isInteger(e.data)||(t=this._getOrReturnCtx(e,t),k(t,{code:O.invalid_type,expected:`integer`,received:`float`,message:r.message}),n.dirty()):r.kind===`min`?(r.inclusive?e.data<r.value:e.data<=r.value)&&(t=this._getOrReturnCtx(e,t),k(t,{code:O.too_small,minimum:r.value,type:`number`,inclusive:r.inclusive,exact:!1,message:r.message}),n.dirty()):r.kind===`max`?(r.inclusive?e.data>r.value:e.data>=r.value)&&(t=this._getOrReturnCtx(e,t),k(t,{code:O.too_big,maximum:r.value,type:`number`,inclusive:r.inclusive,exact:!1,message:r.message}),n.dirty()):r.kind===`multipleOf`?sr(e.data,r.value)!==0&&(t=this._getOrReturnCtx(e,t),k(t,{code:O.not_multiple_of,multipleOf:r.value,message:r.message}),n.dirty()):r.kind===`finite`?Number.isFinite(e.data)||(t=this._getOrReturnCtx(e,t),k(t,{code:O.not_finite,message:r.message}),n.dirty()):un.assertNever(r);return{status:n.value,value:e.data}}gte(e,t){return this.setLimit(`min`,e,!0,j.toString(t))}gt(e,t){return this.setLimit(`min`,e,!1,j.toString(t))}lte(e,t){return this.setLimit(`max`,e,!0,j.toString(t))}lt(e,t){return this.setLimit(`max`,e,!1,j.toString(t))}setLimit(t,n,r,i){return new e({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:r,message:j.toString(i)}]})}_addCheck(t){return new e({...this._def,checks:[...this._def.checks,t]})}int(e){return this._addCheck({kind:`int`,message:j.toString(e)})}positive(e){return this._addCheck({kind:`min`,value:0,inclusive:!1,message:j.toString(e)})}negative(e){return this._addCheck({kind:`max`,value:0,inclusive:!1,message:j.toString(e)})}nonpositive(e){return this._addCheck({kind:`max`,value:0,inclusive:!0,message:j.toString(e)})}nonnegative(e){return this._addCheck({kind:`min`,value:0,inclusive:!0,message:j.toString(e)})}multipleOf(e,t){return this._addCheck({kind:`multipleOf`,value:e,message:j.toString(t)})}finite(e){return this._addCheck({kind:`finite`,message:j.toString(e)})}safe(e){return this._addCheck({kind:`min`,inclusive:!0,value:-(2**53-1),message:j.toString(e)})._addCheck({kind:`max`,inclusive:!0,value:2**53-1,message:j.toString(e)})}get minValue(){let e=null;for(let t of this._def.checks)t.kind===`min`&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(let t of this._def.checks)t.kind===`max`&&(e===null||t.value<e)&&(e=t.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind===`int`||e.kind===`multipleOf`&&un.isInteger(e.value))}get isFinite(){let e=null,t=null;for(let n of this._def.checks)if(n.kind===`finite`||n.kind===`int`||n.kind===`multipleOf`)return!0;else n.kind===`min`?(t===null||n.value>t)&&(t=n.value):n.kind===`max`&&(e===null||n.value<e)&&(e=n.value);return Number.isFinite(t)&&Number.isFinite(e)}};cr.create=e=>new cr({checks:[],typeName:N.ZodNumber,coerce:e?.coerce||!1,...Pn(e)});var lr=class e extends Fn{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce)try{e.data=BigInt(e.data)}catch{return this._getInvalidInput(e)}if(this._getType(e)!==D.bigint)return this._getInvalidInput(e);let t,n=new xn;for(let r of this._def.checks)r.kind===`min`?(r.inclusive?e.data<r.value:e.data<=r.value)&&(t=this._getOrReturnCtx(e,t),k(t,{code:O.too_small,type:`bigint`,minimum:r.value,inclusive:r.inclusive,message:r.message}),n.dirty()):r.kind===`max`?(r.inclusive?e.data>r.value:e.data>=r.value)&&(t=this._getOrReturnCtx(e,t),k(t,{code:O.too_big,type:`bigint`,maximum:r.value,inclusive:r.inclusive,message:r.message}),n.dirty()):r.kind===`multipleOf`?e.data%r.value!==BigInt(0)&&(t=this._getOrReturnCtx(e,t),k(t,{code:O.not_multiple_of,multipleOf:r.value,message:r.message}),n.dirty()):un.assertNever(r);return{status:n.value,value:e.data}}_getInvalidInput(e){let t=this._getOrReturnCtx(e);return k(t,{code:O.invalid_type,expected:D.bigint,received:t.parsedType}),A}gte(e,t){return this.setLimit(`min`,e,!0,j.toString(t))}gt(e,t){return this.setLimit(`min`,e,!1,j.toString(t))}lte(e,t){return this.setLimit(`max`,e,!0,j.toString(t))}lt(e,t){return this.setLimit(`max`,e,!1,j.toString(t))}setLimit(t,n,r,i){return new e({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:r,message:j.toString(i)}]})}_addCheck(t){return new e({...this._def,checks:[...this._def.checks,t]})}positive(e){return this._addCheck({kind:`min`,value:BigInt(0),inclusive:!1,message:j.toString(e)})}negative(e){return this._addCheck({kind:`max`,value:BigInt(0),inclusive:!1,message:j.toString(e)})}nonpositive(e){return this._addCheck({kind:`max`,value:BigInt(0),inclusive:!0,message:j.toString(e)})}nonnegative(e){return this._addCheck({kind:`min`,value:BigInt(0),inclusive:!0,message:j.toString(e)})}multipleOf(e,t){return this._addCheck({kind:`multipleOf`,value:e,message:j.toString(t)})}get minValue(){let e=null;for(let t of this._def.checks)t.kind===`min`&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(let t of this._def.checks)t.kind===`max`&&(e===null||t.value<e)&&(e=t.value);return e}};lr.create=e=>new lr({checks:[],typeName:N.ZodBigInt,coerce:e?.coerce??!1,...Pn(e)});var ur=class extends Fn{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==D.boolean){let t=this._getOrReturnCtx(e);return k(t,{code:O.invalid_type,expected:D.boolean,received:t.parsedType}),A}return Cn(e.data)}};ur.create=e=>new ur({typeName:N.ZodBoolean,coerce:e?.coerce||!1,...Pn(e)});var dr=class e extends Fn{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==D.date){let t=this._getOrReturnCtx(e);return k(t,{code:O.invalid_type,expected:D.date,received:t.parsedType}),A}if(isNaN(e.data.getTime()))return k(this._getOrReturnCtx(e),{code:O.invalid_date}),A;let t=new xn,n;for(let r of this._def.checks)r.kind===`min`?e.data.getTime()<r.value&&(n=this._getOrReturnCtx(e,n),k(n,{code:O.too_small,message:r.message,inclusive:!0,exact:!1,minimum:r.value,type:`date`}),t.dirty()):r.kind===`max`?e.data.getTime()>r.value&&(n=this._getOrReturnCtx(e,n),k(n,{code:O.too_big,message:r.message,inclusive:!0,exact:!1,maximum:r.value,type:`date`}),t.dirty()):un.assertNever(r);return{status:t.value,value:new Date(e.data.getTime())}}_addCheck(t){return new e({...this._def,checks:[...this._def.checks,t]})}min(e,t){return this._addCheck({kind:`min`,value:e.getTime(),message:j.toString(t)})}max(e,t){return this._addCheck({kind:`max`,value:e.getTime(),message:j.toString(t)})}get minDate(){let e=null;for(let t of this._def.checks)t.kind===`min`&&(e===null||t.value>e)&&(e=t.value);return e==null?null:new Date(e)}get maxDate(){let e=null;for(let t of this._def.checks)t.kind===`max`&&(e===null||t.value<e)&&(e=t.value);return e==null?null:new Date(e)}};dr.create=e=>new dr({checks:[],coerce:e?.coerce||!1,typeName:N.ZodDate,...Pn(e)});var fr=class extends Fn{_parse(e){if(this._getType(e)!==D.symbol){let t=this._getOrReturnCtx(e);return k(t,{code:O.invalid_type,expected:D.symbol,received:t.parsedType}),A}return Cn(e.data)}};fr.create=e=>new fr({typeName:N.ZodSymbol,...Pn(e)});var pr=class extends Fn{_parse(e){if(this._getType(e)!==D.undefined){let t=this._getOrReturnCtx(e);return k(t,{code:O.invalid_type,expected:D.undefined,received:t.parsedType}),A}return Cn(e.data)}};pr.create=e=>new pr({typeName:N.ZodUndefined,...Pn(e)});var mr=class extends Fn{_parse(e){if(this._getType(e)!==D.null){let t=this._getOrReturnCtx(e);return k(t,{code:O.invalid_type,expected:D.null,received:t.parsedType}),A}return Cn(e.data)}};mr.create=e=>new mr({typeName:N.ZodNull,...Pn(e)});var hr=class extends Fn{constructor(){super(...arguments),this._any=!0}_parse(e){return Cn(e.data)}};hr.create=e=>new hr({typeName:N.ZodAny,...Pn(e)});var gr=class extends Fn{constructor(){super(...arguments),this._unknown=!0}_parse(e){return Cn(e.data)}};gr.create=e=>new gr({typeName:N.ZodUnknown,...Pn(e)});var _r=class extends Fn{_parse(e){let t=this._getOrReturnCtx(e);return k(t,{code:O.invalid_type,expected:D.never,received:t.parsedType}),A}};_r.create=e=>new _r({typeName:N.ZodNever,...Pn(e)});var vr=class extends Fn{_parse(e){if(this._getType(e)!==D.undefined){let t=this._getOrReturnCtx(e);return k(t,{code:O.invalid_type,expected:D.void,received:t.parsedType}),A}return Cn(e.data)}};vr.create=e=>new vr({typeName:N.ZodVoid,...Pn(e)});var yr=class e extends Fn{_parse(e){let{ctx:t,status:n}=this._processInputParams(e),r=this._def;if(t.parsedType!==D.array)return k(t,{code:O.invalid_type,expected:D.array,received:t.parsedType}),A;if(r.exactLength!==null){let e=t.data.length>r.exactLength.value,i=t.data.length<r.exactLength.value;(e||i)&&(k(t,{code:e?O.too_big:O.too_small,minimum:i?r.exactLength.value:void 0,maximum:e?r.exactLength.value:void 0,type:`array`,inclusive:!0,exact:!0,message:r.exactLength.message}),n.dirty())}if(r.minLength!==null&&t.data.length<r.minLength.value&&(k(t,{code:O.too_small,minimum:r.minLength.value,type:`array`,inclusive:!0,exact:!1,message:r.minLength.message}),n.dirty()),r.maxLength!==null&&t.data.length>r.maxLength.value&&(k(t,{code:O.too_big,maximum:r.maxLength.value,type:`array`,inclusive:!0,exact:!1,message:r.maxLength.message}),n.dirty()),t.common.async)return Promise.all([...t.data].map((e,n)=>r.type._parseAsync(new Mn(t,e,t.path,n)))).then(e=>xn.mergeArray(n,e));let i=[...t.data].map((e,n)=>r.type._parseSync(new Mn(t,e,t.path,n)));return xn.mergeArray(n,i)}get element(){return this._def.type}min(t,n){return new e({...this._def,minLength:{value:t,message:j.toString(n)}})}max(t,n){return new e({...this._def,maxLength:{value:t,message:j.toString(n)}})}length(t,n){return new e({...this._def,exactLength:{value:t,message:j.toString(n)}})}nonempty(e){return this.min(1,e)}};yr.create=(e,t)=>new yr({type:e,minLength:null,maxLength:null,exactLength:null,typeName:N.ZodArray,...Pn(t)});function br(e){if(e instanceof xr){let t={};for(let n in e.shape){let r=e.shape[n];t[n]=M.create(br(r))}return new xr({...e._def,shape:()=>t})}return e instanceof yr?new yr({...e._def,type:br(e.element)}):e instanceof M?M.create(br(e.unwrap())):e instanceof zr?zr.create(br(e.unwrap())):e instanceof Dr?Dr.create(e.items.map(e=>br(e))):e}var xr=class e extends Fn{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;let e=this._def.shape(),t=un.objectKeys(e);return this._cached={shape:e,keys:t}}_parse(e){if(this._getType(e)!==D.object){let t=this._getOrReturnCtx(e);return k(t,{code:O.invalid_type,expected:D.object,received:t.parsedType}),A}let{status:t,ctx:n}=this._processInputParams(e),{shape:r,keys:i}=this._getCached(),a=[];if(!(this._def.catchall instanceof _r&&this._def.unknownKeys===`strip`))for(let e in n.data)i.includes(e)||a.push(e);let o=[];for(let e of i){let t=r[e],i=n.data[e];o.push({key:{status:`valid`,value:e},value:t._parse(new Mn(n,i,n.path,e)),alwaysSet:e in n.data})}if(this._def.catchall instanceof _r){let e=this._def.unknownKeys;if(e===`passthrough`)for(let e of a)o.push({key:{status:`valid`,value:e},value:{status:`valid`,value:n.data[e]}});else if(e===`strict`)a.length>0&&(k(n,{code:O.unrecognized_keys,keys:a}),t.dirty());else if(e!==`strip`)throw Error(`Internal ZodObject error: invalid unknownKeys value.`)}else{let e=this._def.catchall;for(let t of a){let r=n.data[t];o.push({key:{status:`valid`,value:t},value:e._parse(new Mn(n,r,n.path,t)),alwaysSet:t in n.data})}}return n.common.async?Promise.resolve().then(async()=>{let e=[];for(let t of o){let n=await t.key,r=await t.value;e.push({key:n,value:r,alwaysSet:t.alwaysSet})}return e}).then(e=>xn.mergeObjectSync(t,e)):xn.mergeObjectSync(t,o)}get shape(){return this._def.shape()}strict(t){return j.errToObj,new e({...this._def,unknownKeys:`strict`,...t===void 0?{}:{errorMap:(e,n)=>{var r;let i=(r=this._def).errorMap?.call(r,e,n).message??n.defaultError;return e.code===`unrecognized_keys`?{message:j.errToObj(t).message??i}:{message:i}}}})}strip(){return new e({...this._def,unknownKeys:`strip`})}passthrough(){return new e({...this._def,unknownKeys:`passthrough`})}extend(t){return new e({...this._def,shape:()=>({...this._def.shape(),...t})})}merge(t){return new e({unknownKeys:t._def.unknownKeys,catchall:t._def.catchall,shape:()=>({...this._def.shape(),...t._def.shape()}),typeName:N.ZodObject})}setKey(e,t){return this.augment({[e]:t})}catchall(t){return new e({...this._def,catchall:t})}pick(t){let n={};return un.objectKeys(t).forEach(e=>{t[e]&&this.shape[e]&&(n[e]=this.shape[e])}),new e({...this._def,shape:()=>n})}omit(t){let n={};return un.objectKeys(this.shape).forEach(e=>{t[e]||(n[e]=this.shape[e])}),new e({...this._def,shape:()=>n})}deepPartial(){return br(this)}partial(t){let n={};return un.objectKeys(this.shape).forEach(e=>{let r=this.shape[e];t&&!t[e]?n[e]=r:n[e]=r.optional()}),new e({...this._def,shape:()=>n})}required(t){let n={};return un.objectKeys(this.shape).forEach(e=>{if(t&&!t[e])n[e]=this.shape[e];else{let t=this.shape[e];for(;t instanceof M;)t=t._def.innerType;n[e]=t}}),new e({...this._def,shape:()=>n})}keyof(){return Pr(un.objectKeys(this.shape))}};xr.create=(e,t)=>new xr({shape:()=>e,unknownKeys:`strip`,catchall:_r.create(),typeName:N.ZodObject,...Pn(t)}),xr.strictCreate=(e,t)=>new xr({shape:()=>e,unknownKeys:`strict`,catchall:_r.create(),typeName:N.ZodObject,...Pn(t)}),xr.lazycreate=(e,t)=>new xr({shape:e,unknownKeys:`strip`,catchall:_r.create(),typeName:N.ZodObject,...Pn(t)});var Sr=class extends Fn{_parse(e){let{ctx:t}=this._processInputParams(e),n=this._def.options;function r(e){for(let t of e)if(t.result.status===`valid`)return t.result;for(let n of e)if(n.result.status===`dirty`)return t.common.issues.push(...n.ctx.common.issues),n.result;let n=e.map(e=>new mn(e.ctx.common.issues));return k(t,{code:O.invalid_union,unionErrors:n}),A}if(t.common.async)return Promise.all(n.map(async e=>{let n={...t,common:{...t.common,issues:[]},parent:null};return{result:await e._parseAsync({data:t.data,path:t.path,parent:n}),ctx:n}})).then(r);{let e,r=[];for(let i of n){let n={...t,common:{...t.common,issues:[]},parent:null},a=i._parseSync({data:t.data,path:t.path,parent:n});if(a.status===`valid`)return a;a.status===`dirty`&&!e&&(e={result:a,ctx:n}),n.common.issues.length&&r.push(n.common.issues)}if(e)return t.common.issues.push(...e.ctx.common.issues),e.result;let i=r.map(e=>new mn(e));return k(t,{code:O.invalid_union,unionErrors:i}),A}}get options(){return this._def.options}};Sr.create=(e,t)=>new Sr({options:e,typeName:N.ZodUnion,...Pn(t)});var Cr=e=>e instanceof Mr?Cr(e.schema):e instanceof Rr?Cr(e.innerType()):e instanceof Nr?[e.value]:e instanceof Fr?e.options:e instanceof Ir?un.objectValues(e.enum):e instanceof Br?Cr(e._def.innerType):e instanceof pr?[void 0]:e instanceof mr?[null]:e instanceof M?[void 0,...Cr(e.unwrap())]:e instanceof zr?[null,...Cr(e.unwrap())]:e instanceof Wr||e instanceof Kr?Cr(e.unwrap()):e instanceof Vr?Cr(e._def.innerType):[],wr=class e extends Fn{_parse(e){let{ctx:t}=this._processInputParams(e);if(t.parsedType!==D.object)return k(t,{code:O.invalid_type,expected:D.object,received:t.parsedType}),A;let n=this.discriminator,r=t.data[n],i=this.optionsMap.get(r);return i?t.common.async?i._parseAsync({data:t.data,path:t.path,parent:t}):i._parseSync({data:t.data,path:t.path,parent:t}):(k(t,{code:O.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[n]}),A)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(t,n,r){let i=new Map;for(let e of n){let n=Cr(e.shape[t]);if(!n.length)throw Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);for(let r of n){if(i.has(r))throw Error(`Discriminator property ${String(t)} has duplicate value ${String(r)}`);i.set(r,e)}}return new e({typeName:N.ZodDiscriminatedUnion,discriminator:t,options:n,optionsMap:i,...Pn(r)})}};function Tr(e,t){let n=fn(e),r=fn(t);if(e===t)return{valid:!0,data:e};if(n===D.object&&r===D.object){let n=un.objectKeys(t),r=un.objectKeys(e).filter(e=>n.indexOf(e)!==-1),i={...e,...t};for(let n of r){let r=Tr(e[n],t[n]);if(!r.valid)return{valid:!1};i[n]=r.data}return{valid:!0,data:i}}if(n===D.array&&r===D.array){if(e.length!==t.length)return{valid:!1};let n=[];for(let r=0;r<e.length;r++){let i=e[r],a=t[r],o=Tr(i,a);if(!o.valid)return{valid:!1};n.push(o.data)}return{valid:!0,data:n}}return n===D.date&&r===D.date&&+e==+t?{valid:!0,data:e}:{valid:!1}}var Er=class extends Fn{_parse(e){let{status:t,ctx:n}=this._processInputParams(e),r=(e,r)=>{if(wn(e)||wn(r))return A;let i=Tr(e.value,r.value);return i.valid?((Tn(e)||Tn(r))&&t.dirty(),{status:t.value,value:i.data}):(k(n,{code:O.invalid_intersection_types}),A)};return n.common.async?Promise.all([this._def.left._parseAsync({data:n.data,path:n.path,parent:n}),this._def.right._parseAsync({data:n.data,path:n.path,parent:n})]).then(([e,t])=>r(e,t)):r(this._def.left._parseSync({data:n.data,path:n.path,parent:n}),this._def.right._parseSync({data:n.data,path:n.path,parent:n}))}};Er.create=(e,t,n)=>new Er({left:e,right:t,typeName:N.ZodIntersection,...Pn(n)});var Dr=class e extends Fn{_parse(e){let{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==D.array)return k(n,{code:O.invalid_type,expected:D.array,received:n.parsedType}),A;if(n.data.length<this._def.items.length)return k(n,{code:O.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:`array`}),A;!this._def.rest&&n.data.length>this._def.items.length&&(k(n,{code:O.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:`array`}),t.dirty());let r=[...n.data].map((e,t)=>{let r=this._def.items[t]||this._def.rest;return r?r._parse(new Mn(n,e,n.path,t)):null}).filter(e=>!!e);return n.common.async?Promise.all(r).then(e=>xn.mergeArray(t,e)):xn.mergeArray(t,r)}get items(){return this._def.items}rest(t){return new e({...this._def,rest:t})}};Dr.create=(e,t)=>{if(!Array.isArray(e))throw Error(`You must pass an array of schemas to z.tuple([ ... ])`);return new Dr({items:e,typeName:N.ZodTuple,rest:null,...Pn(t)})};var Or=class e extends Fn{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==D.object)return k(n,{code:O.invalid_type,expected:D.object,received:n.parsedType}),A;let r=[],i=this._def.keyType,a=this._def.valueType;for(let e in n.data)r.push({key:i._parse(new Mn(n,e,n.path,e)),value:a._parse(new Mn(n,n.data[e],n.path,e)),alwaysSet:e in n.data});return n.common.async?xn.mergeObjectAsync(t,r):xn.mergeObjectSync(t,r)}get element(){return this._def.valueType}static create(t,n,r){return n instanceof Fn?new e({keyType:t,valueType:n,typeName:N.ZodRecord,...Pn(r)}):new e({keyType:or.create(),valueType:t,typeName:N.ZodRecord,...Pn(n)})}},kr=class extends Fn{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==D.map)return k(n,{code:O.invalid_type,expected:D.map,received:n.parsedType}),A;let r=this._def.keyType,i=this._def.valueType,a=[...n.data.entries()].map(([e,t],a)=>({key:r._parse(new Mn(n,e,n.path,[a,`key`])),value:i._parse(new Mn(n,t,n.path,[a,`value`]))}));if(n.common.async){let e=new Map;return Promise.resolve().then(async()=>{for(let n of a){let r=await n.key,i=await n.value;if(r.status===`aborted`||i.status===`aborted`)return A;(r.status===`dirty`||i.status===`dirty`)&&t.dirty(),e.set(r.value,i.value)}return{status:t.value,value:e}})}{let e=new Map;for(let n of a){let r=n.key,i=n.value;if(r.status===`aborted`||i.status===`aborted`)return A;(r.status===`dirty`||i.status===`dirty`)&&t.dirty(),e.set(r.value,i.value)}return{status:t.value,value:e}}}};kr.create=(e,t,n)=>new kr({valueType:t,keyType:e,typeName:N.ZodMap,...Pn(n)});var Ar=class e extends Fn{_parse(e){let{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==D.set)return k(n,{code:O.invalid_type,expected:D.set,received:n.parsedType}),A;let r=this._def;r.minSize!==null&&n.data.size<r.minSize.value&&(k(n,{code:O.too_small,minimum:r.minSize.value,type:`set`,inclusive:!0,exact:!1,message:r.minSize.message}),t.dirty()),r.maxSize!==null&&n.data.size>r.maxSize.value&&(k(n,{code:O.too_big,maximum:r.maxSize.value,type:`set`,inclusive:!0,exact:!1,message:r.maxSize.message}),t.dirty());let i=this._def.valueType;function a(e){let n=new Set;for(let r of e){if(r.status===`aborted`)return A;r.status===`dirty`&&t.dirty(),n.add(r.value)}return{status:t.value,value:n}}let o=[...n.data.values()].map((e,t)=>i._parse(new Mn(n,e,n.path,t)));return n.common.async?Promise.all(o).then(e=>a(e)):a(o)}min(t,n){return new e({...this._def,minSize:{value:t,message:j.toString(n)}})}max(t,n){return new e({...this._def,maxSize:{value:t,message:j.toString(n)}})}size(e,t){return this.min(e,t).max(e,t)}nonempty(e){return this.min(1,e)}};Ar.create=(e,t)=>new Ar({valueType:e,minSize:null,maxSize:null,typeName:N.ZodSet,...Pn(t)});var jr=class e extends Fn{constructor(){super(...arguments),this.validate=this.implement}_parse(e){let{ctx:t}=this._processInputParams(e);if(t.parsedType!==D.function)return k(t,{code:O.invalid_type,expected:D.function,received:t.parsedType}),A;function n(e,n){return yn({data:e,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,vn(),hn].filter(e=>!!e),issueData:{code:O.invalid_arguments,argumentsError:n}})}function r(e,n){return yn({data:e,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,vn(),hn].filter(e=>!!e),issueData:{code:O.invalid_return_type,returnTypeError:n}})}let i={errorMap:t.common.contextualErrorMap},a=t.data;if(this._def.returns instanceof Lr){let e=this;return Cn(async function(...t){let o=new mn([]),s=await e._def.args.parseAsync(t,i).catch(e=>{throw o.addIssue(n(t,e)),o}),c=await Reflect.apply(a,this,s);return await e._def.returns._def.type.parseAsync(c,i).catch(e=>{throw o.addIssue(r(c,e)),o})})}{let e=this;return Cn(function(...t){let o=e._def.args.safeParse(t,i);if(!o.success)throw new mn([n(t,o.error)]);let s=Reflect.apply(a,this,o.data),c=e._def.returns.safeParse(s,i);if(!c.success)throw new mn([r(s,c.error)]);return c.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...t){return new e({...this._def,args:Dr.create(t).rest(gr.create())})}returns(t){return new e({...this._def,returns:t})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(t,n,r){return new e({args:t||Dr.create([]).rest(gr.create()),returns:n||gr.create(),typeName:N.ZodFunction,...Pn(r)})}},Mr=class extends Fn{get schema(){return this._def.getter()}_parse(e){let{ctx:t}=this._processInputParams(e);return this._def.getter()._parse({data:t.data,path:t.path,parent:t})}};Mr.create=(e,t)=>new Mr({getter:e,typeName:N.ZodLazy,...Pn(t)});var Nr=class extends Fn{_parse(e){if(e.data!==this._def.value){let t=this._getOrReturnCtx(e);return k(t,{received:t.data,code:O.invalid_literal,expected:this._def.value}),A}return{status:`valid`,value:e.data}}get value(){return this._def.value}};Nr.create=(e,t)=>new Nr({value:e,typeName:N.ZodLiteral,...Pn(t)});function Pr(e,t){return new Fr({values:e,typeName:N.ZodEnum,...Pn(t)})}var Fr=class e extends Fn{constructor(){super(...arguments),An.set(this,void 0)}_parse(e){if(typeof e.data!=`string`){let t=this._getOrReturnCtx(e),n=this._def.values;return k(t,{expected:un.joinValues(n),received:t.parsedType,code:O.invalid_type}),A}if(On(this,An,`f`)||kn(this,An,new Set(this._def.values),`f`),!On(this,An,`f`).has(e.data)){let t=this._getOrReturnCtx(e),n=this._def.values;return k(t,{received:t.data,code:O.invalid_enum_value,options:n}),A}return Cn(e.data)}get options(){return this._def.values}get enum(){let e={};for(let t of this._def.values)e[t]=t;return e}get Values(){let e={};for(let t of this._def.values)e[t]=t;return e}get Enum(){let e={};for(let t of this._def.values)e[t]=t;return e}extract(t,n=this._def){return e.create(t,{...this._def,...n})}exclude(t,n=this._def){return e.create(this.options.filter(e=>!t.includes(e)),{...this._def,...n})}};An=new WeakMap,Fr.create=Pr;var Ir=class extends Fn{constructor(){super(...arguments),jn.set(this,void 0)}_parse(e){let t=un.getValidEnumValues(this._def.values),n=this._getOrReturnCtx(e);if(n.parsedType!==D.string&&n.parsedType!==D.number){let e=un.objectValues(t);return k(n,{expected:un.joinValues(e),received:n.parsedType,code:O.invalid_type}),A}if(On(this,jn,`f`)||kn(this,jn,new Set(un.getValidEnumValues(this._def.values)),`f`),!On(this,jn,`f`).has(e.data)){let e=un.objectValues(t);return k(n,{received:n.data,code:O.invalid_enum_value,options:e}),A}return Cn(e.data)}get enum(){return this._def.values}};jn=new WeakMap,Ir.create=(e,t)=>new Ir({values:e,typeName:N.ZodNativeEnum,...Pn(t)});var Lr=class extends Fn{unwrap(){return this._def.type}_parse(e){let{ctx:t}=this._processInputParams(e);return t.parsedType!==D.promise&&t.common.async===!1?(k(t,{code:O.invalid_type,expected:D.promise,received:t.parsedType}),A):Cn((t.parsedType===D.promise?t.data:Promise.resolve(t.data)).then(e=>this._def.type.parseAsync(e,{path:t.path,errorMap:t.common.contextualErrorMap})))}};Lr.create=(e,t)=>new Lr({type:e,typeName:N.ZodPromise,...Pn(t)});var Rr=class extends Fn{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===N.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){let{status:t,ctx:n}=this._processInputParams(e),r=this._def.effect||null,i={addIssue:e=>{k(n,e),e.fatal?t.abort():t.dirty()},get path(){return n.path}};if(i.addIssue=i.addIssue.bind(i),r.type===`preprocess`){let e=r.transform(n.data,i);if(n.common.async)return Promise.resolve(e).then(async e=>{if(t.value===`aborted`)return A;let r=await this._def.schema._parseAsync({data:e,path:n.path,parent:n});return r.status===`aborted`?A:r.status===`dirty`||t.value===`dirty`?Sn(r.value):r});{if(t.value===`aborted`)return A;let r=this._def.schema._parseSync({data:e,path:n.path,parent:n});return r.status===`aborted`?A:r.status===`dirty`||t.value===`dirty`?Sn(r.value):r}}if(r.type===`refinement`){let e=e=>{let t=r.refinement(e,i);if(n.common.async)return Promise.resolve(t);if(t instanceof Promise)throw Error(`Async refinement encountered during synchronous parse operation. Use .parseAsync instead.`);return e};if(n.common.async===!1){let r=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});return r.status===`aborted`?A:(r.status===`dirty`&&t.dirty(),e(r.value),{status:t.value,value:r.value})}return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then(n=>n.status===`aborted`?A:(n.status===`dirty`&&t.dirty(),e(n.value).then(()=>({status:t.value,value:n.value}))))}if(r.type===`transform`){if(n.common.async===!1){let e=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});if(!En(e))return e;let a=r.transform(e.value,i);if(a instanceof Promise)throw Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);return{status:t.value,value:a}}return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then(e=>En(e)?Promise.resolve(r.transform(e.value,i)).then(e=>({status:t.value,value:e})):e)}un.assertNever(r)}};Rr.create=(e,t,n)=>new Rr({schema:e,typeName:N.ZodEffects,effect:t,...Pn(n)}),Rr.createWithPreprocess=(e,t,n)=>new Rr({schema:t,effect:{type:`preprocess`,transform:e},typeName:N.ZodEffects,...Pn(n)});var M=class extends Fn{_parse(e){return this._getType(e)===D.undefined?Cn(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}};M.create=(e,t)=>new M({innerType:e,typeName:N.ZodOptional,...Pn(t)});var zr=class extends Fn{_parse(e){return this._getType(e)===D.null?Cn(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}};zr.create=(e,t)=>new zr({innerType:e,typeName:N.ZodNullable,...Pn(t)});var Br=class extends Fn{_parse(e){let{ctx:t}=this._processInputParams(e),n=t.data;return t.parsedType===D.undefined&&(n=this._def.defaultValue()),this._def.innerType._parse({data:n,path:t.path,parent:t})}removeDefault(){return this._def.innerType}};Br.create=(e,t)=>new Br({innerType:e,typeName:N.ZodDefault,defaultValue:typeof t.default==`function`?t.default:()=>t.default,...Pn(t)});var Vr=class extends Fn{_parse(e){let{ctx:t}=this._processInputParams(e),n={...t,common:{...t.common,issues:[]}},r=this._def.innerType._parse({data:n.data,path:n.path,parent:{...n}});return Dn(r)?r.then(e=>({status:`valid`,value:e.status===`valid`?e.value:this._def.catchValue({get error(){return new mn(n.common.issues)},input:n.data})})):{status:`valid`,value:r.status===`valid`?r.value:this._def.catchValue({get error(){return new mn(n.common.issues)},input:n.data})}}removeCatch(){return this._def.innerType}};Vr.create=(e,t)=>new Vr({innerType:e,typeName:N.ZodCatch,catchValue:typeof t.catch==`function`?t.catch:()=>t.catch,...Pn(t)});var Hr=class extends Fn{_parse(e){if(this._getType(e)!==D.nan){let t=this._getOrReturnCtx(e);return k(t,{code:O.invalid_type,expected:D.nan,received:t.parsedType}),A}return{status:`valid`,value:e.data}}};Hr.create=e=>new Hr({typeName:N.ZodNaN,...Pn(e)});var Ur=Symbol(`zod_brand`),Wr=class extends Fn{_parse(e){let{ctx:t}=this._processInputParams(e),n=t.data;return this._def.type._parse({data:n,path:t.path,parent:t})}unwrap(){return this._def.type}},Gr=class e extends Fn{_parse(e){let{status:t,ctx:n}=this._processInputParams(e);if(n.common.async)return(async()=>{let e=await this._def.in._parseAsync({data:n.data,path:n.path,parent:n});return e.status===`aborted`?A:e.status===`dirty`?(t.dirty(),Sn(e.value)):this._def.out._parseAsync({data:e.value,path:n.path,parent:n})})();{let e=this._def.in._parseSync({data:n.data,path:n.path,parent:n});return e.status===`aborted`?A:e.status===`dirty`?(t.dirty(),{status:`dirty`,value:e.value}):this._def.out._parseSync({data:e.value,path:n.path,parent:n})}}static create(t,n){return new e({in:t,out:n,typeName:N.ZodPipeline})}},Kr=class extends Fn{_parse(e){let t=this._def.innerType._parse(e),n=e=>(En(e)&&(e.value=Object.freeze(e.value)),e);return Dn(t)?t.then(e=>n(e)):n(t)}unwrap(){return this._def.innerType}};Kr.create=(e,t)=>new Kr({innerType:e,typeName:N.ZodReadonly,...Pn(t)});function qr(e,t){let n=typeof e==`function`?e(t):typeof e==`string`?{message:e}:e;return typeof n==`string`?{message:n}:n}function Jr(e,t={},n){return e?hr.create().superRefine((r,i)=>{let a=e(r);if(a instanceof Promise)return a.then(e=>{if(!e){let e=qr(t,r),a=e.fatal??n??!0;i.addIssue({code:`custom`,...e,fatal:a})}});if(!a){let e=qr(t,r),a=e.fatal??n??!0;i.addIssue({code:`custom`,...e,fatal:a})}}):hr.create()}var Yr={object:xr.lazycreate},N;(function(e){e.ZodString=`ZodString`,e.ZodNumber=`ZodNumber`,e.ZodNaN=`ZodNaN`,e.ZodBigInt=`ZodBigInt`,e.ZodBoolean=`ZodBoolean`,e.ZodDate=`ZodDate`,e.ZodSymbol=`ZodSymbol`,e.ZodUndefined=`ZodUndefined`,e.ZodNull=`ZodNull`,e.ZodAny=`ZodAny`,e.ZodUnknown=`ZodUnknown`,e.ZodNever=`ZodNever`,e.ZodVoid=`ZodVoid`,e.ZodArray=`ZodArray`,e.ZodObject=`ZodObject`,e.ZodUnion=`ZodUnion`,e.ZodDiscriminatedUnion=`ZodDiscriminatedUnion`,e.ZodIntersection=`ZodIntersection`,e.ZodTuple=`ZodTuple`,e.ZodRecord=`ZodRecord`,e.ZodMap=`ZodMap`,e.ZodSet=`ZodSet`,e.ZodFunction=`ZodFunction`,e.ZodLazy=`ZodLazy`,e.ZodLiteral=`ZodLiteral`,e.ZodEnum=`ZodEnum`,e.ZodEffects=`ZodEffects`,e.ZodNativeEnum=`ZodNativeEnum`,e.ZodOptional=`ZodOptional`,e.ZodNullable=`ZodNullable`,e.ZodDefault=`ZodDefault`,e.ZodCatch=`ZodCatch`,e.ZodPromise=`ZodPromise`,e.ZodBranded=`ZodBranded`,e.ZodPipeline=`ZodPipeline`,e.ZodReadonly=`ZodReadonly`})(N||={});var Xr=(e,t={message:`Input not instance of ${e.name}`})=>Jr(t=>t instanceof e,t),P=or.create,Zr=cr.create,Qr=Hr.create,F=lr.create,$r=ur.create,I=dr.create,ei=fr.create,ti=pr.create,ni=mr.create,ri=hr.create,ii=gr.create,ai=_r.create,oi=vr.create,si=yr.create,ci=xr.create,li=xr.strictCreate,ui=Sr.create,di=wr.create,fi=Er.create,pi=Dr.create,mi=Or.create,hi=kr.create,gi=Ar.create,_i=jr.create,vi=Mr.create,yi=Nr.create,bi=Fr.create,xi=Ir.create,Si=Lr.create,Ci=Rr.create,wi=M.create,Ti=zr.create,Ei=Rr.createWithPreprocess,Di=Gr.create,Oi=Object.freeze({__proto__:null,defaultErrorMap:hn,setErrorMap:_n,getErrorMap:vn,makeIssue:yn,EMPTY_PATH:bn,addIssueToContext:k,ParseStatus:xn,INVALID:A,DIRTY:Sn,OK:Cn,isAborted:wn,isDirty:Tn,isValid:En,isAsync:Dn,get util(){return un},get objectUtil(){return dn},ZodParsedType:D,getParsedType:fn,ZodType:Fn,datetimeRegex:nr,ZodString:or,ZodNumber:cr,ZodBigInt:lr,ZodBoolean:ur,ZodDate:dr,ZodSymbol:fr,ZodUndefined:pr,ZodNull:mr,ZodAny:hr,ZodUnknown:gr,ZodNever:_r,ZodVoid:vr,ZodArray:yr,ZodObject:xr,ZodUnion:Sr,ZodDiscriminatedUnion:wr,ZodIntersection:Er,ZodTuple:Dr,ZodRecord:Or,ZodMap:kr,ZodSet:Ar,ZodFunction:jr,ZodLazy:Mr,ZodLiteral:Nr,ZodEnum:Fr,ZodNativeEnum:Ir,ZodPromise:Lr,ZodEffects:Rr,ZodTransformer:Rr,ZodOptional:M,ZodNullable:zr,ZodDefault:Br,ZodCatch:Vr,ZodNaN:Hr,BRAND:Ur,ZodBranded:Wr,ZodPipeline:Gr,ZodReadonly:Kr,custom:Jr,Schema:Fn,ZodSchema:Fn,late:Yr,get ZodFirstPartyTypeKind(){return N},coerce:{string:e=>or.create({...e,coerce:!0}),number:e=>cr.create({...e,coerce:!0}),boolean:e=>ur.create({...e,coerce:!0}),bigint:e=>lr.create({...e,coerce:!0}),date:e=>dr.create({...e,coerce:!0})},any:ri,array:si,bigint:F,boolean:$r,date:I,discriminatedUnion:di,effect:Ci,enum:bi,function:_i,instanceof:Xr,intersection:fi,lazy:vi,literal:yi,map:hi,nan:Qr,nativeEnum:xi,never:ai,null:ni,nullable:Ti,number:Zr,object:ci,oboolean:()=>$r().optional(),onumber:()=>Zr().optional(),optional:wi,ostring:()=>P().optional(),pipeline:Di,preprocess:Ei,promise:Si,record:mi,set:gi,strictObject:li,string:P,symbol:ei,transformer:Ci,tuple:pi,undefined:ti,union:ui,unknown:ii,void:oi,NEVER:A,ZodIssueCode:O,quotelessJson:pn,ZodError:mn}),ki={name:`@imgly/background-removal`,version:`1.7.0`,description:`Background Removal in the Browser`,keywords:[`background-removal`,`client-side`,`data-privacy`,`image-segmentation`,`image-matting`,`onnx`],repository:{type:`git`,url:`git+https://github.com/imgly/background-removal-js.git`},license:`SEE LICENSE IN LICENSE.md`,author:{name:`IMG.LY GmbH`,email:`support@img.ly`,url:`https://img.ly`},bugs:{email:`support@img.ly`},source:`./src/index.ts`,main:`./dist/index.cjs`,module:`./dist/index.mjs`,types:`./dist/src/index.d.ts`,exports:{".":{require:`./dist/index.cjs`,import:`./dist/index.mjs`,types:`./dist/src/index.d.ts`}},homepage:`https://img.ly/showcases/cesdk/web/background-removal`,files:[`LICENSE.md`,`README.md`,`CHANGELOG.md`,`ThirdPartyLicenses.json`,`dist/`,`bin/`],scripts:{start:`pnpm run watch`,clean:`npx rimraf dist`,test:`true`,resources:`node ../../scripts/package-resources.mjs`,"changelog:create":`node ../../scripts/changelog/changelog-create.mjs`,"changelog:generate":`node ../../scripts/changelog/changelog-generate.mjs`,build:`pnpm run clean && pnpm run types && pnpm run resources && pnpm run changelog:generate && node scripts/build.mjs`,types:` npx tsc --declaration --emitDeclarationOnly --declarationDir dist --declarationMap`,watch:`pnpm run clean && pnpm run resources && pnpm run changelog:generate && node scripts/watch.mjs`,"publish:latest":`pnpm publish --tag latest --access public`,"publish:next":`pnpm publish --tag next --access public`,"package:pack":`pnpm pack . --pack-destination ../../releases`,"check:all":`pnpm run check:pretty`,"check:pretty":`prettier --list-different './src/**/*.{ts,tsx}'`,pretty:`prettier --write './src/**/*.{ts,tsx}'`},dependencies:{"lodash-es":`^4.17.21`,ndarray:`~1.0.0`,zod:`^3.23.8`},peerDependencies:{"onnxruntime-web":`1.21.0`},devDependencies:{"@types/lodash-es":`^4.17.12`,"@types/ndarray":`~1.0.14`,"@types/node":`~20.3.0`,assert:`~2.0.0`,esbuild:`~0.18.0`,glob:`~10.3.0`,"npm-dts":`~1.3.0`,process:`~0.11.0`,"ts-loader":`~9.4.0`,tslib:`~2.5.0`,typescript:`~5.1.0`,util:`~0.12.0`,webpack:`~5.85.0`,"webpack-cli":`~5.1.0`}},Ai=Oi.object({publicPath:Oi.string().optional().describe(`The public path to the wasm files and the onnx model.`).default("https://staticimgly.com/@imgly/background-removal-data/${PACKAGE_VERSION}/dist/").transform(e=>e.replace("${PACKAGE_NAME}",ki.name).replace("${PACKAGE_VERSION}",ki.version)),debug:Oi.boolean().default(!1).describe(`Whether to enable debug logging.`),rescale:Oi.boolean().default(!0).describe(`Whether to rescale the image.`),device:Oi.enum([`cpu`,`gpu`]).default(`cpu`).describe(`The device to run the model on.`),proxyToWorker:Oi.boolean().default(!1).describe(`Whether to proxy inference to a web worker.`),fetchArgs:Oi.any().default({}).describe(`Arguments to pass to fetch when loading the model.`),progress:Oi.function().args(Oi.string(),Oi.number(),Oi.number()).returns(Oi.void()).describe(`Progress callback.`).optional(),model:Oi.preprocess(e=>{switch(e){case`large`:return`isnet`;case`small`:return`isnet_quint8`;case`medium`:return`isnet_fp16`;default:return e}},Oi.enum([`isnet`,`isnet_fp16`,`isnet_quint8`])).default(`medium`),output:Oi.object({format:Oi.enum([`image/png`,`image/jpeg`,`image/webp`,`image/x-rgba8`,`image/x-alpha8`]).default(`image/png`),quality:Oi.number().default(.8)}).default({})}).default({}).transform(e=>(e.debug&&console.log(`Config:`,e),e.debug&&!e.progress&&(e.progress=e.progress??((e,t,n)=>{console.debug(`Downloading ${e}: ${t} of ${n}`)}),crossOriginIsolated||e.debug&&console.debug(`Cross-Origin-Isolated is not enabled. Performance will be degraded. Please see  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer.`)),e));function ji(e){return Ai.parse(e??{})}var Mi=_(b());async function Ni(e){e.debug&&console.debug(`Loading model...`,e.model);let t=e.model;return await cn(await(await an(`/models/${t}`,e)).arrayBuffer(),e)}async function Pi(e){e=ji(e);let t=await Ni(e);return{config:e,session:{base:t}}}async function Fi(e,t,n){let r=1024,[i,a,o]=e.shape,s=Yt(e,r,r,!1),c=Xt(s),l=await ln(n.base,[[`input`,c]],[`output`],t),u=Qt((0,Mi.default)(l[0].data,[r,r,1]));return t.rescale?(u=Yt(u,a,i,!1),[u,e]):[u,s]}var Ii=zt(Pi,e=>JSON.stringify(e));async function Li(e,t){let{config:n,session:r}=await Ii(t);n.progress&&n.progress(`compute:decode`,0,4);let i=await Zt(e,n);n.progress?.(`compute:inference`,1,4);let[a,o]=await Fi(i,n,r);n.progress?.(`compute:mask`,2,4);let s=o,[c,l]=s.shape,u=c*l;for(let e=0;e<u;e+=1)s.data[4*e+3]=a.data[e];n.progress?.(`compute:encode`,3,4);let d=await Wt(s,n.output.quality,n.output.format);return n.progress?.(`compute:encode`,4,4),d}var Ri=e({default:()=>Bg}),zi=Object.defineProperty,Bi=Object.getOwnPropertyDescriptor,Vi=Object.getOwnPropertyNames,Hi=Object.prototype.hasOwnProperty,Ui=(e=>typeof t<`u`?t:typeof Proxy<`u`?new Proxy(e,{get:(e,n)=>(typeof t<`u`?t:e)[n]}):e)(function(e){if(typeof t<`u`)return t.apply(this,arguments);throw Error(`Dynamic require of "`+e+`" is not supported`)}),L=(e,t)=>()=>(e&&(t=e(e=0)),t),Wi=(e,t)=>{for(var n in t)zi(e,n,{get:t[n],enumerable:!0})},Gi=(e,t,n,r)=>{if(t&&typeof t==`object`||typeof t==`function`)for(let i of Vi(t))!Hi.call(e,i)&&i!==n&&zi(e,i,{get:()=>t[i],enumerable:!(r=Bi(t,i))||r.enumerable});return e},Ki=e=>Gi(zi({},`__esModule`,{value:!0}),e),qi,Ji,Yi,Xi,Zi,Qi=L(()=>{qi=new Map,Ji=[],Yi=(e,t,n)=>{if(t&&typeof t.init==`function`&&typeof t.createInferenceSessionHandler==`function`){let r=qi.get(e);if(r===void 0)qi.set(e,{backend:t,priority:n});else{if(r.priority>n)return;if(r.priority===n&&r.backend!==t)throw Error(`cannot register backend "${e}" using priority ${n}`)}if(n>=0){let t=Ji.indexOf(e);t!==-1&&Ji.splice(t,1);for(let t=0;t<Ji.length;t++)if(qi.get(Ji[t]).priority<=n){Ji.splice(t,0,e);return}Ji.push(e)}}else throw TypeError(`not a valid backend`)},Xi=async e=>{let t=qi.get(e);if(!t)return`backend not found.`;if(t.initialized)return t.backend;if(t.aborted)return t.error;{let n=!!t.initPromise;try{return n||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(e){return n||(t.error=`${e}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},Zi=async e=>{let t=e.executionProviders||[],n=t.map(e=>typeof e==`string`?e:e.name),r=n.length===0?Ji:n,i,a=[],o=new Set;for(let e of r){let t=await Xi(e);typeof t==`string`?a.push({name:e,err:t}):(i||=t,i===t&&o.add(e))}if(!i)throw Error(`no available backend found. ERR: ${a.map(e=>`[${e.name}] ${e.err}`).join(`, `)}`);for(let{name:e,err:t}of a)n.includes(e)&&console.warn(`removing requested execution provider "${e}" from session options because it is not available: ${t}`);let s=t.filter(e=>o.has(typeof e==`string`?e:e.name));return[i,new Proxy(e,{get:(e,t)=>t===`executionProviders`?s:Reflect.get(e,t)})]}}),$i=L(()=>{Qi()}),ea,ta=L(()=>{ea=`1.21.0`}),na,ra,ia=L(()=>{ta(),na=`warning`,ra={wasm:{},webgl:{},webgpu:{},versions:{common:ea},set logLevel(e){if(e!==void 0){if(typeof e!=`string`||[`verbose`,`info`,`warning`,`error`,`fatal`].indexOf(e)===-1)throw Error(`Unsupported logging level: ${e}`);na=e}},get logLevel(){return na}},Object.defineProperty(ra,"logLevel",{enumerable:!0})}),aa,oa=L(()=>{ia(),aa=ra}),sa,ca,la=L(()=>{sa=(e,t)=>{let n=typeof document<`u`?document.createElement(`canvas`):new OffscreenCanvas(1,1);n.width=e.dims[3],n.height=e.dims[2];let r=n.getContext(`2d`);if(r!=null){let i,a;t?.tensorLayout!==void 0&&t.tensorLayout===`NHWC`?(i=e.dims[2],a=e.dims[3]):(i=e.dims[3],a=e.dims[2]);let o=t?.format===void 0?`RGB`:t.format,s=t?.norm,c,l;s===void 0||s.mean===void 0?c=[255,255,255,255]:typeof s.mean==`number`?c=[s.mean,s.mean,s.mean,s.mean]:(c=[s.mean[0],s.mean[1],s.mean[2],0],s.mean[3]!==void 0&&(c[3]=s.mean[3])),s===void 0||s.bias===void 0?l=[0,0,0,0]:typeof s.bias==`number`?l=[s.bias,s.bias,s.bias,s.bias]:(l=[s.bias[0],s.bias[1],s.bias[2],0],s.bias[3]!==void 0&&(l[3]=s.bias[3]));let u=a*i,d=0,f=u,p=u*2,m=-1;o===`RGBA`?(d=0,f=u,p=u*2,m=u*3):o===`RGB`?(d=0,f=u,p=u*2):o===`RBG`&&(d=0,p=u,f=u*2);for(let t=0;t<a;t++)for(let n=0;n<i;n++){let i=(e.data[d++]-l[0])*c[0],a=(e.data[f++]-l[1])*c[1],o=(e.data[p++]-l[2])*c[2],s=m===-1?255:(e.data[m++]-l[3])*c[3];r.fillStyle=`rgba(`+i+`,`+a+`,`+o+`,`+s+`)`,r.fillRect(n,t,1,1)}if(`toDataURL`in n)return n.toDataURL();throw Error(`toDataURL is not supported`)}throw Error(`Can not access image data`)},ca=(e,t)=>{let n=typeof document<`u`?document.createElement(`canvas`).getContext(`2d`):new OffscreenCanvas(1,1).getContext(`2d`),r;if(n!=null){let i,a,o;t?.tensorLayout!==void 0&&t.tensorLayout===`NHWC`?(i=e.dims[2],a=e.dims[1],o=e.dims[3]):(i=e.dims[3],a=e.dims[2],o=e.dims[1]);let s=t!==void 0&&t.format!==void 0?t.format:`RGB`,c=t?.norm,l,u;c===void 0||c.mean===void 0?l=[255,255,255,255]:typeof c.mean==`number`?l=[c.mean,c.mean,c.mean,c.mean]:(l=[c.mean[0],c.mean[1],c.mean[2],255],c.mean[3]!==void 0&&(l[3]=c.mean[3])),c===void 0||c.bias===void 0?u=[0,0,0,0]:typeof c.bias==`number`?u=[c.bias,c.bias,c.bias,c.bias]:(u=[c.bias[0],c.bias[1],c.bias[2],0],c.bias[3]!==void 0&&(u[3]=c.bias[3]));let d=a*i;if(t!==void 0&&(t.format!==void 0&&o===4&&t.format!==`RGBA`||o===3&&t.format!==`RGB`&&t.format!==`BGR`))throw Error(`Tensor format doesn't match input tensor dims`);let f=0,p=1,m=2,h=3,g=0,_=d,v=d*2,y=-1;s===`RGBA`?(g=0,_=d,v=d*2,y=d*3):s===`RGB`?(g=0,_=d,v=d*2):s===`RBG`&&(g=0,v=d,_=d*2),r=n.createImageData(i,a);for(let t=0;t<a*i;f+=4,p+=4,m+=4,h+=4,t++)r.data[f]=(e.data[g++]-u[0])*l[0],r.data[p]=(e.data[_++]-u[1])*l[1],r.data[m]=(e.data[v++]-u[2])*l[2],r.data[h]=y===-1?255:(e.data[y++]-u[3])*l[3]}else throw Error(`Can not access image data`);return r}}),ua,da,fa,pa,ma,ha,ga=L(()=>{Ea(),ua=(e,t)=>{if(e===void 0)throw Error(`Image buffer must be defined`);if(t.height===void 0||t.width===void 0)throw Error(`Image height and width must be defined`);if(t.tensorLayout===`NHWC`)throw Error(`NHWC Tensor layout is not supported yet`);let{height:n,width:r}=t,i=t.norm??{mean:255,bias:0},a,o;a=typeof i.mean==`number`?[i.mean,i.mean,i.mean,i.mean]:[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],o=typeof i.bias==`number`?[i.bias,i.bias,i.bias,i.bias]:[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];let s=t.format===void 0?`RGBA`:t.format,c=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:`RGB`,l=n*r,u=c===`RGBA`?new Float32Array(l*4):new Float32Array(l*3),d=4,f=0,p=1,m=2,h=3,g=0,_=l,v=l*2,y=-1;s===`RGB`&&(d=3,f=0,p=1,m=2,h=-1),c===`RGBA`?y=l*3:c===`RBG`?(g=0,v=l,_=l*2):c===`BGR`&&(v=0,_=l,g=l*2);for(let t=0;t<l;t++,f+=d,m+=d,p+=d,h+=d)u[g++]=(e[f]+o[0])/a[0],u[_++]=(e[p]+o[1])/a[1],u[v++]=(e[m]+o[2])/a[2],y!==-1&&h!==-1&&(u[y++]=(e[h]+o[3])/a[3]);return c===`RGBA`?new Ta(`float32`,u,[1,4,n,r]):new Ta(`float32`,u,[1,3,n,r])},da=async(e,t)=>{let n=typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement,r=typeof ImageData<`u`&&e instanceof ImageData,i=typeof ImageBitmap<`u`&&e instanceof ImageBitmap,a=typeof e==`string`,o,s=t??{},c=()=>{if(typeof document<`u`)return document.createElement(`canvas`);if(typeof OffscreenCanvas<`u`)return new OffscreenCanvas(1,1);throw Error(`Canvas is not supported`)},l=e=>typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||e instanceof OffscreenCanvas?e.getContext(`2d`):null;if(n){let n=c();n.width=e.width,n.height=e.height;let r=l(n);if(r!=null){let n=e.height,i=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(n=t.resizedHeight,i=t.resizedWidth),t!==void 0){if(s=t,t.tensorFormat!==void 0)throw Error(`Image input config format must be RGBA for HTMLImageElement`);s.tensorFormat=`RGBA`,s.height=n,s.width=i}else s.tensorFormat=`RGBA`,s.height=n,s.width=i;r.drawImage(e,0,0),o=r.getImageData(0,0,i,n).data}else throw Error(`Can not access image data`)}else if(r){let n,r;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(n=t.resizedHeight,r=t.resizedWidth):(n=e.height,r=e.width),t!==void 0&&(s=t),s.format=`RGBA`,s.height=n,s.width=r,t!==void 0){let t=c();t.width=r,t.height=n;let i=l(t);if(i!=null)i.putImageData(e,0,0),o=i.getImageData(0,0,r,n).data;else throw Error(`Can not access image data`)}else o=e.data}else if(i){if(t===void 0)throw Error(`Please provide image config with format for Imagebitmap`);let n=c();n.width=e.width,n.height=e.height;let r=l(n);if(r!=null){let t=e.height,n=e.width;return r.drawImage(e,0,0,n,t),o=r.getImageData(0,0,n,t).data,s.height=t,s.width=n,ua(o,s)}throw Error(`Can not access image data`)}else{if(a)return new Promise((t,n)=>{let r=c(),i=l(r);if(!e||!i)return n();let a=new Image;a.crossOrigin=`Anonymous`,a.src=e,a.onload=()=>{r.width=a.width,r.height=a.height,i.drawImage(a,0,0,r.width,r.height);let e=i.getImageData(0,0,r.width,r.height);s.height=r.height,s.width=r.width,t(ua(e.data,s))}});throw Error(`Input data provided is not supported - aborted tensor creation`)}if(o!==void 0)return ua(o,s);throw Error(`Input data provided is not supported - aborted tensor creation`)},fa=(e,t)=>{let{width:n,height:r,download:i,dispose:a}=t;return new Ta({location:`texture`,type:`float32`,texture:e,dims:[1,r,n,4],download:i,dispose:a})},pa=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new Ta({location:`gpu-buffer`,type:n??`float32`,gpuBuffer:e,dims:r,download:i,dispose:a})},ma=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new Ta({location:`ml-tensor`,type:n??`float32`,mlTensor:e,dims:r,download:i,dispose:a})},ha=(e,t,n)=>new Ta({location:`cpu-pinned`,type:e,data:t,dims:n??[t.length]})}),_a,va,ya,ba,xa=L(()=>{_a=new Map([[`float32`,Float32Array],[`uint8`,Uint8Array],[`int8`,Int8Array],[`uint16`,Uint16Array],[`int16`,Int16Array],[`int32`,Int32Array],[`bool`,Uint8Array],[`float64`,Float64Array],[`uint32`,Uint32Array],[`int4`,Uint8Array],[`uint4`,Uint8Array]]),va=new Map([[Float32Array,`float32`],[Uint8Array,`uint8`],[Int8Array,`int8`],[Uint16Array,`uint16`],[Int16Array,`int16`],[Int32Array,`int32`],[Float64Array,`float64`],[Uint32Array,`uint32`]]),ya=!1,ba=()=>{if(!ya){ya=!0;let e=typeof BigInt64Array<`u`&&BigInt64Array.from,t=typeof BigUint64Array<`u`&&BigUint64Array.from,n=globalThis.Float16Array,r=typeof n<`u`&&n.from;e&&(_a.set(`int64`,BigInt64Array),va.set(BigInt64Array,`int64`)),t&&(_a.set(`uint64`,BigUint64Array),va.set(BigUint64Array,`uint64`)),r?(_a.set(`float16`,n),va.set(n,`float16`)):_a.set(`float16`,Uint16Array)}}}),Sa,Ca,wa=L(()=>{Ea(),Sa=e=>{let t=1;for(let n=0;n<e.length;n++){let r=e[n];if(typeof r!=`number`||!Number.isSafeInteger(r))throw TypeError(`dims[${n}] must be an integer, got: ${r}`);if(r<0)throw RangeError(`dims[${n}] must be a non-negative integer, got: ${r}`);t*=r}return t},Ca=(e,t)=>{switch(e.location){case`cpu`:return new Ta(e.type,e.data,t);case`cpu-pinned`:return new Ta({location:`cpu-pinned`,data:e.data,type:e.type,dims:t});case`texture`:return new Ta({location:`texture`,texture:e.texture,type:e.type,dims:t});case`gpu-buffer`:return new Ta({location:`gpu-buffer`,gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case`ml-tensor`:return new Ta({location:`ml-tensor`,mlTensor:e.mlTensor,type:e.type,dims:t});default:throw Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),Ta,Ea=L(()=>{la(),ga(),xa(),wa(),Ta=class{constructor(e,t,n){ba();let r,i;if(typeof e==`object`&&`location`in e)switch(this.dataLocation=e.location,r=e.type,i=e.dims,e.location){case`cpu-pinned`:{let t=_a.get(r);if(!t)throw TypeError(`unsupported type "${r}" to create tensor from pinned buffer`);if(!(e.data instanceof t))throw TypeError(`buffer should be of type ${t.name}`);this.cpuData=e.data;break}case`texture`:if(r!==`float32`)throw TypeError(`unsupported type "${r}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break;case`gpu-buffer`:if(r!==`float32`&&r!==`float16`&&r!==`int32`&&r!==`int64`&&r!==`uint32`&&r!==`uint8`&&r!==`bool`&&r!==`uint4`&&r!==`int4`)throw TypeError(`unsupported type "${r}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break;case`ml-tensor`:if(r!==`float32`&&r!==`float16`&&r!==`int32`&&r!==`int64`&&r!==`uint32`&&r!==`uint64`&&r!==`int8`&&r!==`uint8`&&r!==`bool`&&r!==`uint4`&&r!==`int4`)throw TypeError(`unsupported type "${r}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break;default:throw Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let a,o;if(typeof e==`string`){if(r=e,o=n,e===`string`){if(!Array.isArray(t))throw TypeError(`A string tensor's data must be a string array.`);a=t}else{let n=_a.get(e);if(n===void 0)throw TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e===`float16`&&n===Uint16Array||e===`uint4`||e===`int4`)throw TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${n.name} as data.`);a=e===`uint64`||e===`int64`?n.from(t,BigInt):n.from(t)}else if(t instanceof n)a=t;else if(t instanceof Uint8ClampedArray){if(e===`uint8`)a=Uint8Array.from(t);else throw TypeError(`A Uint8ClampedArray tensor's data must be type of uint8`)}else if(e===`float16`&&t instanceof Uint16Array&&n!==Uint16Array)a=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw TypeError(`A ${r} tensor's data must be type of ${n}`)}}else if(o=t,Array.isArray(e)){if(e.length===0)throw TypeError(`Tensor type cannot be inferred from an empty array.`);let t=typeof e[0];if(t===`string`)r=`string`,a=e;else if(t===`boolean`)r=`bool`,a=Uint8Array.from(e);else throw TypeError(`Invalid element type of data array: ${t}.`)}else if(e instanceof Uint8ClampedArray)r=`uint8`,a=Uint8Array.from(e);else{let t=va.get(e.constructor);if(t===void 0)throw TypeError(`Unsupported type for tensor data: ${e.constructor}.`);r=t,a=e}if(o===void 0)o=[a.length];else if(!Array.isArray(o))throw TypeError(`A tensor's dims must be a number array`);i=o,this.cpuData=a,this.dataLocation=`cpu`}let a=Sa(i);if(this.cpuData&&a!==this.cpuData.length&&(r!==`uint4`&&r!==`int4`||Math.ceil(a/2)!==this.cpuData.length))throw Error(`Tensor's size(${a}) does not match data length(${this.cpuData.length}).`);this.type=r,this.dims=i,this.size=a}static async fromImage(e,t){return da(e,t)}static fromTexture(e,t){return fa(e,t)}static fromGpuBuffer(e,t){return pa(e,t)}static fromMLTensor(e,t){return ma(e,t)}static fromPinnedBuffer(e,t,n){return ha(e,t,n)}toDataURL(e){return sa(this,e)}toImageData(e){return ca(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw Error(`The data is not stored as a WebGL texture.`);return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw Error(`The data is not stored as a WebGPU buffer.`);return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw Error(`The data is not stored as a WebNN MLTensor.`);return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case`cpu`:case`cpu-pinned`:return this.data;case`texture`:case`gpu-buffer`:case`ml-tensor`:if(!this.downloader)throw Error(`The current tensor is not created with a specified data downloader.`);if(this.isDownloading)throw Error(`The current tensor is being downloaded.`);try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation=`cpu`,this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}default:throw Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw Error(`The current tensor is being downloaded.`);this.disposer&&=(this.disposer(),void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation=`none`}ensureValid(){if(this.dataLocation===`none`)throw Error(`The tensor is disposed.`)}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw Error(`Cannot reshape a tensor that owns GPU resource.`);return Ca(this,e)}}}),Da,Oa=L(()=>{Ea(),Da=Ta}),ka,Aa,ja,Ma,Na=L(()=>{ia(),ka=(e,t)=>{(typeof ra.trace>`u`?!ra.wasm.trace:!ra.trace)||console.timeStamp(`${e}::ORT::${t}`)},Aa=(e,t)=>{let n=Error().stack?.split(/\r\n|\r|\n/g)||[],r=!1;for(let i=0;i<n.length;i++){if(r&&!n[i].includes(`TRACE_FUNC`)){let r=`FUNC_${e}::${n[i].trim().split(` `)[1]}`;t&&(r+=`::${t}`),ka(`CPU`,r);return}n[i].includes(`TRACE_FUNC`)&&(r=!0)}},ja=e=>{(typeof ra.trace>`u`?!ra.wasm.trace:!ra.trace)||Aa(`BEGIN`,e)},Ma=e=>{(typeof ra.trace>`u`?!ra.wasm.trace:!ra.trace)||Aa(`END`,e)}}),Pa,Fa=L(()=>{Qi(),Oa(),Na(),Pa=class e{constructor(e){this.handler=e}async run(e,t,n){ja();let r={},i={};if(typeof e!=`object`||!e||e instanceof Da||Array.isArray(e))throw TypeError(`'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.`);let a=!0;if(typeof t==`object`){if(t===null)throw TypeError(`Unexpected argument[1]: cannot be null.`);if(t instanceof Da)throw TypeError(`'fetches' cannot be a Tensor`);if(Array.isArray(t)){if(t.length===0)throw TypeError(`'fetches' cannot be an empty array.`);a=!1;for(let e of t){if(typeof e!=`string`)throw TypeError(`'fetches' must be a string array or an object.`);if(this.outputNames.indexOf(e)===-1)throw RangeError(`'fetches' contains invalid output name: ${e}.`);r[e]=null}if(typeof n==`object`&&n)i=n;else if(typeof n<`u`)throw TypeError(`'options' must be an object.`)}else{let e=!1,o=Object.getOwnPropertyNames(t);for(let n of this.outputNames)if(o.indexOf(n)!==-1){let i=t[n];(i===null||i instanceof Da)&&(e=!0,a=!1,r[n]=i)}if(e){if(typeof n==`object`&&n)i=n;else if(typeof n<`u`)throw TypeError(`'options' must be an object.`)}else i=t}}else if(typeof t<`u`)throw TypeError(`Unexpected argument[1]: must be 'fetches' or 'options'.`);for(let t of this.inputNames)if(typeof e[t]>`u`)throw Error(`input '${t}' is missing in 'feeds'.`);if(a)for(let e of this.outputNames)r[e]=null;let o=await this.handler.run(e,r,i),s={};for(let e in o)if(Object.hasOwnProperty.call(o,e)){let t=o[e];s[e]=t instanceof Da?t:new Da(t.type,t.data,t.dims)}return Ma(),s}async release(){return this.handler.dispose()}static async create(t,n,r,i){ja();let a,o={};if(typeof t==`string`){if(a=t,typeof n==`object`&&n)o=n;else if(typeof n<`u`)throw TypeError(`'options' must be an object.`)}else if(t instanceof Uint8Array){if(a=t,typeof n==`object`&&n)o=n;else if(typeof n<`u`)throw TypeError(`'options' must be an object.`)}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<`u`&&t instanceof SharedArrayBuffer){let e=t,s=0,c=t.byteLength;if(typeof n==`object`&&n)o=n;else if(typeof n==`number`){if(s=n,!Number.isSafeInteger(s))throw RangeError(`'byteOffset' must be an integer.`);if(s<0||s>=e.byteLength)throw RangeError(`'byteOffset' is out of range [0, ${e.byteLength}).`);if(c=t.byteLength-s,typeof r==`number`){if(c=r,!Number.isSafeInteger(c))throw RangeError(`'byteLength' must be an integer.`);if(c<=0||s+c>e.byteLength)throw RangeError(`'byteLength' is out of range (0, ${e.byteLength-s}].`);if(typeof i==`object`&&i)o=i;else if(typeof i<`u`)throw TypeError(`'options' must be an object.`)}else if(typeof r<`u`)throw TypeError(`'byteLength' must be a number.`)}else if(typeof n<`u`)throw TypeError(`'options' must be an object.`);a=new Uint8Array(e,s,c)}else throw TypeError(`Unexpected argument[0]: must be 'path' or 'buffer'.`);let[s,c]=await Zi(o),l=await s.createInferenceSessionHandler(a,c);return Ma(),new e(l)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}}}),Ia,La=L(()=>{Fa(),Ia=Pa}),Ra=L(()=>{}),za=L(()=>{}),Ba=L(()=>{}),Va=L(()=>{}),Ha={};Wi(Ha,{InferenceSession:()=>Ia,TRACE:()=>ka,TRACE_FUNC_BEGIN:()=>ja,TRACE_FUNC_END:()=>Ma,Tensor:()=>Da,env:()=>aa,registerBackend:()=>Yi});var Ua=L(()=>{$i(),oa(),La(),Oa(),Ra(),za(),Na(),Ba(),Va()}),Wa=L(()=>{}),Ga={};Wi(Ga,{default:()=>Ja});var Ka,qa,Ja,Ya=L(()=>{ug(),To(),go(),Ka=`ort-wasm-proxy-worker`,qa=globalThis.self?.name===Ka,qa&&(self.onmessage=e=>{let{type:t,in:n}=e.data;try{switch(t){case`init-wasm`:Co(n.wasm).then(()=>{$h(n).then(()=>{postMessage({type:t})},e=>{postMessage({type:t,err:e})})},e=>{postMessage({type:t,err:e})});break;case`init-ep`:{let{epName:e,env:r}=n;eg(r,e).then(()=>{postMessage({type:t})},e=>{postMessage({type:t,err:e})});break}case`copy-from`:{let{buffer:e}=n,r=rg(e);postMessage({type:t,out:r});break}case`create`:{let{model:e,options:r}=n;ig(e,r).then(e=>{postMessage({type:t,out:e})},e=>{postMessage({type:t,err:e})});break}case`release`:ag(n),postMessage({type:t});break;case`run`:{let{sessionId:e,inputIndices:r,inputs:i,outputIndices:a,options:o}=n;sg(e,r,i,a,Array(a.length).fill(null),o).then(e=>{e.some(e=>e[3]!==`cpu`)?postMessage({type:t,err:`Proxy does not support non-cpu tensor location.`}):postMessage({type:t,out:e},lg([...i,...e]))},e=>{postMessage({type:t,err:e})});break}case`end-profiling`:cg(n),postMessage({type:t})}}catch(e){postMessage({type:t,err:e})}}),Ja=qa?null:e=>new Worker(e??io,{type:`module`,name:Ka})}),Xa={};Wi(Xa,{default:()=>$a});var Za,Qa,$a,eo,to=L(()=>{Qa=(Za=import.meta.url,async function(e={}){var t,n,r=e,i=new Promise((e,r)=>{t=e,n=r}),a=typeof window==`object`,o=typeof WorkerGlobalScope<`u`,s=o&&self.name?.startsWith(`em-pthread`);r.mountExternalData=(e,t)=>{e.startsWith(`./`)&&(e=e.substring(2)),(r.Bd||=new Map).set(e,t)},r.unmountExternalData=()=>{delete r.Bd};var c=globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let l=()=>{let e=(e,t,n)=>(...r)=>{let i=k,a=t?.();r=e(...r);let o=t?.();return a!==o&&(e=o,n(a),t=n=null),k==i?r:new Promise((e,t)=>{Tn={resolve:e,reject:t}})},t=e=>async(...t)=>{try{if(r.Cd)throw Error(`Session already started`);let n=r.Cd={be:t[0],errors:[]},i=await e(...t);if(r.Cd!==n)throw Error(`Session mismatch`);r.Dd?.flush();let a=n.errors;if(0<a.length){let e=await Promise.all(a);if(e=e.filter(e=>e),0<e.length)throw Error(e.join(`
`))}return i}finally{r.Cd=null}};r._OrtCreateSession=e(r._OrtCreateSession,()=>r._OrtCreateSession,e=>r._OrtCreateSession=e),r._OrtRun=t(e(r._OrtRun,()=>r._OrtRun,e=>r._OrtRun=e)),r._OrtRunWithBinding=t(e(r._OrtRunWithBinding,()=>r._OrtRunWithBinding,e=>r._OrtRunWithBinding=e)),r._OrtBindInput=e(r._OrtBindInput,()=>r._OrtBindInput,e=>r._OrtBindInput=e),l=void 0};r.jsepInit=(e,t)=>{if(l?.(),e===`webgpu`){[r.Dd,r.Rd,r.Vd,r.Hd,r.Ud,r.hc,r.Wd,r.Zd,r.Sd,r.Td,r.Xd]=t;let e=r.Dd;r.jsepRegisterBuffer=(t,n,r,i)=>e.registerBuffer(t,n,r,i),r.jsepGetBuffer=t=>e.getBuffer(t),r.jsepCreateDownloader=(t,n,r)=>e.createDownloader(t,n,r),r.jsepOnCreateSession=t=>{e.onCreateSession(t)},r.jsepOnReleaseSession=t=>{e.onReleaseSession(t)},r.jsepOnRunStart=t=>e.onRunStart(t),r.$d=(t,n)=>{e.upload(t,n)}}else if(e===`webnn`){[r.Dd,r.Yd,r.Id,r.jsepEnsureTensor,r.Jd,r.jsepDownloadTensor]=t,r.jsepReleaseTensorId=r.Id,r.jsepUploadTensor=r.Jd;let e=r.Dd;r.jsepOnRunStart=t=>e.onRunStart(t),r.jsepOnRunEnd=e.onRunEnd.bind(e),r.jsepRegisterMLContext=(t,n)=>{e.registerMLContext(t,n)},r.jsepOnReleaseSession=t=>{e.onReleaseSession(t)},r.jsepCreateMLTensorDownloader=(t,n)=>e.createMLTensorDownloader(t,n),r.jsepRegisterMLTensor=(t,n,r,i)=>e.registerMLTensor(t,n,r,i),r.jsepCreateMLContext=t=>e.createMLContext(t),r.jsepRegisterMLConstant=(t,n,i,a,o)=>e.registerMLConstant(t,n,i,a,o,r.Bd),r.jsepRegisterGraphInput=e.registerGraphInput.bind(e),r.jsepIsGraphInput=e.isGraphInput.bind(e),r.jsepCreateTemporaryTensor=e.createTemporaryTensor.bind(e)}};var u,d,f=Object.assign({},r),p=(e,t)=>{throw t},m=``;(a||o)&&(o?m=self.location.href:typeof document<`u`&&document.currentScript&&(m=document.currentScript.src),Za&&(m=Za),m=m.startsWith(`blob:`)?``:m.slice(0,m.replace(/[?#].*/,``).lastIndexOf(`/`)+1),o&&(d=e=>{var t=new XMLHttpRequest;return t.open(`GET`,e,!1),t.responseType=`arraybuffer`,t.send(null),new Uint8Array(t.response)}),u=async e=>{if(ue(e))return new Promise((t,n)=>{var r=new XMLHttpRequest;r.open(`GET`,e,!0),r.responseType=`arraybuffer`,r.onload=()=>{r.status==200||r.status==0&&r.response?t(r.response):n(r.status)},r.onerror=n,r.send(null)});var t=await fetch(e,{credentials:`same-origin`});if(t.ok)return t.arrayBuffer();throw Error(t.status+` : `+t.url)});var h=console.log.bind(console),g=console.error.bind(console),_=h,v=g;Object.assign(r,f),f=null;var y,b,x,S,ee,te,ne,re,ie,ae,C,oe,se,ce=r.wasmBinary,le=!1,ue=e=>e.startsWith(`file://`);function de(){return y.buffer!=S.buffer&&ye(),S}function fe(){return y.buffer!=S.buffer&&ye(),ee}function pe(){return y.buffer!=S.buffer&&ye(),te}function me(){return y.buffer!=S.buffer&&ye(),ne}function w(){return y.buffer!=S.buffer&&ye(),re}function T(){return y.buffer!=S.buffer&&ye(),ie}function he(){return y.buffer!=S.buffer&&ye(),ae}function ge(){return y.buffer!=S.buffer&&ye(),se}if(s){let e=function(t){try{var n=t.data,i=n.yd;if(i===`load`){let t=[];self.onmessage=e=>t.push(e),self.startWorker=()=>{postMessage({yd:`loaded`});for(let n of t)e(n);self.onmessage=e};for(let e of n.Od)r[e]&&!r[e].proxy||(r[e]=(...t)=>{postMessage({yd:`callHandler`,Nd:e,args:t})},e==`print`&&(_=r[e]),e==`printErr`&&(v=r[e]));y=n.he,ye(),_e(n.ie)}else if(i===`run`){Ke(n.xd),Gr(n.xd,0,0,1,0,0),Ue(),ln(n.xd),ve||=(Vr(),!0);try{qe(n.de,n.Fd)}catch(e){if(e!=`unwind`)throw e}}else n.target!==`setimmediate`&&(i===`checkMailbox`?ve&&un():i&&(v(`worker: received unknown command ${i}`),v(n)))}catch(e){throw Kr(),e}};var _e,ve=!1;v=function(...e){e=e.join(` `),console.error(e)},self.alert=function(...e){postMessage({yd:`alert`,text:e.join(` `),fe:Hr()})},self.onunhandledrejection=e=>{throw e.reason||e},self.onmessage=e}function ye(){var e=y.buffer;r.HEAP8=S=new Int8Array(e),r.HEAP16=te=new Int16Array(e),r.HEAPU8=ee=new Uint8Array(e),r.HEAPU16=ne=new Uint16Array(e),r.HEAP32=re=new Int32Array(e),r.HEAPU32=ie=new Uint32Array(e),r.HEAPF32=ae=new Float32Array(e),r.HEAPF64=se=new Float64Array(e),r.HEAP64=C=new BigInt64Array(e),r.HEAPU64=oe=new BigUint64Array(e)}function be(){s?startWorker(r):M.Bb()}s||(y=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),ye());var xe,Se=0,Ce=null;function we(){if(--Se==0&&Ce){var e=Ce;Ce=null,e()}}function Te(e){throw v(e=`Aborted(`+e+`)`),le=!0,e=new WebAssembly.RuntimeError(e+`. Build with -sASSERTIONS for more info.`),n(e),e}function Ee(){return{a:{Ta:ke,Va:Oe,W:Ye,la:Ze,b:tt,u:nt,R:rt,Za:it,d:at,pb:st,g:$e,T:dt,Ga:ft,lb:ht,nb:gt,Ha:_t,Ea:vt,wb:yt,Da:bt,pa:xt,mb:St,jb:Ct,Fa:wt,kb:Tt,Ma:Ot,za:Ft,eb:Lt,cb:Gt,ya:qt,V:Jt,N:Yt,db:Xt,ma:an,fb:on,zb:sn,hb:dn,qb:fn,ab:O,Aa:pn,yb:ln,Ja:mn,S:_n,Wa:vn,$:On,G:j,E:Mn,m:Bt,H:Pn,B:Rn,X:zn,J:Bn,v:Vn,O:Hn,D:Un,t:Wn,A:Gn,z:Kn,w:qn,r:Jn,tb:Yn,ub:$n,vb:er,rb:tr,sb:nr,bb:ar,Oa:or,La:lr,y:fr,ja:pr,Ba:mr,Ka:sr,qa:hr,Ia:gr,ib:_r,U:ir,fa:vr,Sa:yr,gb:br,Qa:wr,Pa:Tr,Ab:kr,Ca:Ar,ob:Le,aa:jr,oa:Mr,xb:Nr,na:Fr,$a:xa,ia:Pa,sa:za,ga:ya,da:Da,ua:La,p:_a,e:ta,c:$i,ea:Ta,f:na,n:ia,k:pa,Y:oa,ka:ma,j:va,wa,Ra:Ha,ca:Ma,Ua:Va,P:Ea,K:ca,_:ja,Q:ba,Z:Fa,x:sa,l:ea,va:Aa,i:Qi,h:aa,ra:Ba,ta:Ra,o:ra,q:la,s:da,I:fa,C:ga,L:ha,xa:Ca,_a:Sa,F:Na,Ya:Oa,ba:Ia,M:ua,Xa:ka,ha:Ir,a:y,Na:Fe}}}var De={1319426:()=>typeof wasmOffsetConverter<`u`,1319483:(e,t,n,i,a)=>{if(r===void 0||!r.Bd)return 1;if((e=ut(Number(e>>>0))).startsWith(`./`)&&(e=e.substring(2)),!(e=r.Bd.get(e)))return 2;if(t=Number(t>>>0),n=Number(n>>>0),i=Number(i>>>0),t+n>e.byteLength)return 3;try{let o=e.subarray(t,t+n);switch(a){case 0:fe().set(o,i>>>0);break;case 1:r.$d(i,o);break;default:return 4}return 0}catch{return 4}},1320198:(e,t,n)=>{r.Jd(e,fe().subarray(t>>>0,t+n>>>0))},1320261:()=>r.Yd(),1320302:e=>{r.Id(e)},1320338:()=>{r.Sd()},1320369:()=>{r.Td()},1320398:()=>{r.Xd()},1320423:e=>r.Rd(e),1320456:e=>r.Vd(e),1320488:(e,t,n)=>{r.Hd(Number(e),Number(t),Number(n),!0)},1320551:(e,t,n)=>{r.Hd(Number(e),Number(t),Number(n))},1320608:e=>{r.hc(`Abs`,e,void 0)},1320659:e=>{r.hc(`Neg`,e,void 0)},1320710:e=>{r.hc(`Floor`,e,void 0)},1320763:e=>{r.hc(`Ceil`,e,void 0)},1320815:e=>{r.hc(`Reciprocal`,e,void 0)},1320873:e=>{r.hc(`Sqrt`,e,void 0)},1320925:e=>{r.hc(`Exp`,e,void 0)},1320976:e=>{r.hc(`Erf`,e,void 0)},1321027:e=>{r.hc(`Sigmoid`,e,void 0)},1321082:(e,t,n)=>{r.hc(`HardSigmoid`,e,{alpha:t,beta:n})},1321161:e=>{r.hc(`Log`,e,void 0)},1321212:e=>{r.hc(`Sin`,e,void 0)},1321263:e=>{r.hc(`Cos`,e,void 0)},1321314:e=>{r.hc(`Tan`,e,void 0)},1321365:e=>{r.hc(`Asin`,e,void 0)},1321417:e=>{r.hc(`Acos`,e,void 0)},1321469:e=>{r.hc(`Atan`,e,void 0)},1321521:e=>{r.hc(`Sinh`,e,void 0)},1321573:e=>{r.hc(`Cosh`,e,void 0)},1321625:e=>{r.hc(`Asinh`,e,void 0)},1321678:e=>{r.hc(`Acosh`,e,void 0)},1321731:e=>{r.hc(`Atanh`,e,void 0)},1321784:e=>{r.hc(`Tanh`,e,void 0)},1321836:e=>{r.hc(`Not`,e,void 0)},1321887:(e,t,n)=>{r.hc(`Clip`,e,{min:t,max:n})},1321956:e=>{r.hc(`Clip`,e,void 0)},1322008:(e,t)=>{r.hc(`Elu`,e,{alpha:t})},1322066:e=>{r.hc(`Gelu`,e,void 0)},1322118:e=>{r.hc(`Relu`,e,void 0)},1322170:(e,t)=>{r.hc(`LeakyRelu`,e,{alpha:t})},1322234:(e,t)=>{r.hc(`ThresholdedRelu`,e,{alpha:t})},1322304:(e,t)=>{r.hc(`Cast`,e,{to:t})},1322362:e=>{r.hc(`Add`,e,void 0)},1322413:e=>{r.hc(`Sub`,e,void 0)},1322464:e=>{r.hc(`Mul`,e,void 0)},1322515:e=>{r.hc(`Div`,e,void 0)},1322566:e=>{r.hc(`Pow`,e,void 0)},1322617:e=>{r.hc(`Equal`,e,void 0)},1322670:e=>{r.hc(`Greater`,e,void 0)},1322725:e=>{r.hc(`GreaterOrEqual`,e,void 0)},1322787:e=>{r.hc(`Less`,e,void 0)},1322839:e=>{r.hc(`LessOrEqual`,e,void 0)},1322898:(e,t,n,i,a)=>{r.hc(`ReduceMean`,e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1323073:(e,t,n,i,a)=>{r.hc(`ReduceMax`,e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1323247:(e,t,n,i,a)=>{r.hc(`ReduceMin`,e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1323421:(e,t,n,i,a)=>{r.hc(`ReduceProd`,e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1323596:(e,t,n,i,a)=>{r.hc(`ReduceSum`,e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1323770:(e,t,n,i,a)=>{r.hc(`ReduceL1`,e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1323943:(e,t,n,i,a)=>{r.hc(`ReduceL2`,e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1324116:(e,t,n,i,a)=>{r.hc(`ReduceLogSum`,e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1324293:(e,t,n,i,a)=>{r.hc(`ReduceSumSquare`,e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1324473:(e,t,n,i,a)=>{r.hc(`ReduceLogSumExp`,e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1324653:e=>{r.hc(`Where`,e,void 0)},1324706:(e,t,n)=>{r.hc(`Transpose`,e,{perm:t?Array.from(w().subarray(Number(t)>>>0,Number(n)>>>0)):[]})},1324830:(e,t,n,i)=>{r.hc(`DepthToSpace`,e,{blocksize:t,mode:ut(n),format:i?`NHWC`:`NCHW`})},1324963:(e,t,n,i)=>{r.hc(`DepthToSpace`,e,{blocksize:t,mode:ut(n),format:i?`NHWC`:`NCHW`})},1325096:(e,t,n,i,a,o,s,c,l,u,d,f,p,m,h)=>{r.hc(`ConvTranspose`,e,{format:l?`NHWC`:`NCHW`,autoPad:t,dilations:[n],group:i,kernelShape:[a],pads:[o,s],strides:[c],wIsConst:()=>!!de()[u>>>0],outputPadding:d?Array.from(w().subarray(Number(d)>>>0,Number(f)>>>0)):[],outputShape:p?Array.from(w().subarray(Number(p)>>>0,Number(m)>>>0)):[],activation:ut(h)})},1325529:(e,t,n,i,a,o,s,c,l,u,d,f,p,m)=>{r.hc(`ConvTranspose`,e,{format:c?`NHWC`:`NCHW`,autoPad:t,dilations:Array.from(w().subarray(Number(n)>>>0,2+(Number(n)>>>0)>>>0)),group:i,kernelShape:Array.from(w().subarray(Number(a)>>>0,2+(Number(a)>>>0)>>>0)),pads:Array.from(w().subarray(Number(o)>>>0,4+(Number(o)>>>0)>>>0)),strides:Array.from(w().subarray(Number(s)>>>0,2+(Number(s)>>>0)>>>0)),wIsConst:()=>!!de()[l>>>0],outputPadding:u?Array.from(w().subarray(Number(u)>>>0,Number(d)>>>0)):[],outputShape:f?Array.from(w().subarray(Number(f)>>>0,Number(p)>>>0)):[],activation:ut(m)})},1326190:(e,t,n,i,a,o,s,c,l,u,d,f,p,m,h)=>{r.hc(`ConvTranspose`,e,{format:l?`NHWC`:`NCHW`,autoPad:t,dilations:[n],group:i,kernelShape:[a],pads:[o,s],strides:[c],wIsConst:()=>!!de()[u>>>0],outputPadding:d?Array.from(w().subarray(Number(d)>>>0,Number(f)>>>0)):[],outputShape:p?Array.from(w().subarray(Number(p)>>>0,Number(m)>>>0)):[],activation:ut(h)})},1326623:(e,t,n,i,a,o,s,c,l,u,d,f,p,m)=>{r.hc(`ConvTranspose`,e,{format:c?`NHWC`:`NCHW`,autoPad:t,dilations:Array.from(w().subarray(Number(n)>>>0,2+(Number(n)>>>0)>>>0)),group:i,kernelShape:Array.from(w().subarray(Number(a)>>>0,2+(Number(a)>>>0)>>>0)),pads:Array.from(w().subarray(Number(o)>>>0,4+(Number(o)>>>0)>>>0)),strides:Array.from(w().subarray(Number(s)>>>0,2+(Number(s)>>>0)>>>0)),wIsConst:()=>!!de()[l>>>0],outputPadding:u?Array.from(w().subarray(Number(u)>>>0,Number(d)>>>0)):[],outputShape:f?Array.from(w().subarray(Number(f)>>>0,Number(p)>>>0)):[],activation:ut(m)})},1327284:(e,t)=>{r.hc(`GlobalAveragePool`,e,{format:t?`NHWC`:`NCHW`})},1327375:(e,t,n,i,a,o,s,c,l,u,d,f,p,m)=>{r.hc(`AveragePool`,e,{format:m?`NHWC`:`NCHW`,auto_pad:t,ceil_mode:n,count_include_pad:i,storage_order:a,dilations:o?Array.from(w().subarray(Number(o)>>>0,Number(s)>>>0)):[],kernel_shape:c?Array.from(w().subarray(Number(c)>>>0,Number(l)>>>0)):[],pads:u?Array.from(w().subarray(Number(u)>>>0,Number(d)>>>0)):[],strides:f?Array.from(w().subarray(Number(f)>>>0,Number(p)>>>0)):[]})},1327854:(e,t)=>{r.hc(`GlobalAveragePool`,e,{format:t?`NHWC`:`NCHW`})},1327945:(e,t,n,i,a,o,s,c,l,u,d,f,p,m)=>{r.hc(`AveragePool`,e,{format:m?`NHWC`:`NCHW`,auto_pad:t,ceil_mode:n,count_include_pad:i,storage_order:a,dilations:o?Array.from(w().subarray(Number(o)>>>0,Number(s)>>>0)):[],kernel_shape:c?Array.from(w().subarray(Number(c)>>>0,Number(l)>>>0)):[],pads:u?Array.from(w().subarray(Number(u)>>>0,Number(d)>>>0)):[],strides:f?Array.from(w().subarray(Number(f)>>>0,Number(p)>>>0)):[]})},1328424:(e,t)=>{r.hc(`GlobalMaxPool`,e,{format:t?`NHWC`:`NCHW`})},1328511:(e,t,n,i,a,o,s,c,l,u,d,f,p,m)=>{r.hc(`MaxPool`,e,{format:m?`NHWC`:`NCHW`,auto_pad:t,ceil_mode:n,count_include_pad:i,storage_order:a,dilations:o?Array.from(w().subarray(Number(o)>>>0,Number(s)>>>0)):[],kernel_shape:c?Array.from(w().subarray(Number(c)>>>0,Number(l)>>>0)):[],pads:u?Array.from(w().subarray(Number(u)>>>0,Number(d)>>>0)):[],strides:f?Array.from(w().subarray(Number(f)>>>0,Number(p)>>>0)):[]})},1328986:(e,t)=>{r.hc(`GlobalMaxPool`,e,{format:t?`NHWC`:`NCHW`})},1329073:(e,t,n,i,a,o,s,c,l,u,d,f,p,m)=>{r.hc(`MaxPool`,e,{format:m?`NHWC`:`NCHW`,auto_pad:t,ceil_mode:n,count_include_pad:i,storage_order:a,dilations:o?Array.from(w().subarray(Number(o)>>>0,Number(s)>>>0)):[],kernel_shape:c?Array.from(w().subarray(Number(c)>>>0,Number(l)>>>0)):[],pads:u?Array.from(w().subarray(Number(u)>>>0,Number(d)>>>0)):[],strides:f?Array.from(w().subarray(Number(f)>>>0,Number(p)>>>0)):[]})},1329548:(e,t,n,i,a)=>{r.hc(`Gemm`,e,{alpha:t,beta:n,transA:i,transB:a})},1329652:e=>{r.hc(`MatMul`,e,void 0)},1329706:(e,t,n,i)=>{r.hc(`ArgMax`,e,{keepDims:!!t,selectLastIndex:!!n,axis:i})},1329814:(e,t,n,i)=>{r.hc(`ArgMin`,e,{keepDims:!!t,selectLastIndex:!!n,axis:i})},1329922:(e,t)=>{r.hc(`Softmax`,e,{axis:t})},1329985:(e,t)=>{r.hc(`Concat`,e,{axis:t})},1330045:(e,t,n,i,a)=>{r.hc(`Split`,e,{axis:t,numOutputs:n,splitSizes:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1330201:e=>{r.hc(`Expand`,e,void 0)},1330255:(e,t)=>{r.hc(`Gather`,e,{axis:Number(t)})},1330326:(e,t)=>{r.hc(`GatherElements`,e,{axis:Number(t)})},1330405:(e,t)=>{r.hc(`GatherND`,e,{batch_dims:Number(t)})},1330484:(e,t,n,i,a,o,s,c,l,u,d)=>{r.hc(`Resize`,e,{antialias:t,axes:n?Array.from(w().subarray(Number(n)>>>0,Number(i)>>>0)):[],coordinateTransformMode:ut(a),cubicCoeffA:o,excludeOutside:s,extrapolationValue:c,keepAspectRatioPolicy:ut(l),mode:ut(u),nearestMode:ut(d)})},1330846:(e,t,n,i,a,o,s)=>{r.hc(`Slice`,e,{starts:t?Array.from(w().subarray(Number(t)>>>0,Number(n)>>>0)):[],ends:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[],axes:o?Array.from(w().subarray(Number(o)>>>0,Number(s)>>>0)):[]})},1331110:e=>{r.hc(`Tile`,e,void 0)},1331162:(e,t,n)=>{r.hc(`InstanceNormalization`,e,{epsilon:t,format:n?`NHWC`:`NCHW`})},1331276:(e,t,n)=>{r.hc(`InstanceNormalization`,e,{epsilon:t,format:n?`NHWC`:`NCHW`})},1331390:e=>{r.hc(`Range`,e,void 0)},1331443:(e,t)=>{r.hc(`Einsum`,e,{equation:ut(t)})},1331524:(e,t,n,i,a)=>{r.hc(`Pad`,e,{mode:t,value:n,pads:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1331667:(e,t,n,i,a,o)=>{r.hc(`BatchNormalization`,e,{epsilon:t,momentum:n,spatial:!!a,trainingMode:!!i,format:o?`NHWC`:`NCHW`})},1331836:(e,t,n,i,a,o)=>{r.hc(`BatchNormalization`,e,{epsilon:t,momentum:n,spatial:!!a,trainingMode:!!i,format:o?`NHWC`:`NCHW`})},1332005:(e,t,n)=>{r.hc(`CumSum`,e,{exclusive:Number(t),reverse:Number(n)})},1332102:(e,t,n)=>{r.hc(`DequantizeLinear`,e,{axis:t,blockSize:n})},1332192:(e,t,n,i,a)=>{r.hc(`GridSample`,e,{align_corners:t,mode:ut(n),padding_mode:ut(i),format:a?`NHWC`:`NCHW`})},1332362:(e,t,n,i,a)=>{r.hc(`GridSample`,e,{align_corners:t,mode:ut(n),padding_mode:ut(i),format:a?`NHWC`:`NCHW`})},1332532:(e,t)=>{r.hc(`ScatterND`,e,{reduction:ut(t)})},1332617:(e,t,n,i,a,o,s,c,l)=>{r.hc(`Attention`,e,{numHeads:t,isUnidirectional:n,maskFilterValue:i,scale:a,doRotary:o,qkvHiddenSizes:s?Array.from(w().subarray(Number(c)>>>0,Number(c)+s>>>0)):[],pastPresentShareBuffer:!!l})},1332889:e=>{r.hc(`BiasAdd`,e,void 0)},1332944:e=>{r.hc(`BiasSplitGelu`,e,void 0)},1333005:e=>{r.hc(`FastGelu`,e,void 0)},1333061:(e,t,n,i,a,o,s,c,l,u,d,f,p,m,h,g)=>{r.hc(`Conv`,e,{format:f?`NHWC`:`NCHW`,auto_pad:t,dilations:n?Array.from(w().subarray(Number(n)>>>0,Number(i)>>>0)):[],group:a,kernel_shape:o?Array.from(w().subarray(Number(o)>>>0,Number(s)>>>0)):[],pads:c?Array.from(w().subarray(Number(c)>>>0,Number(l)>>>0)):[],strides:u?Array.from(w().subarray(Number(u)>>>0,Number(d)>>>0)):[],w_is_const:()=>!!de()[Number(p)>>>0],activation:ut(m),activation_params:h?Array.from(he().subarray(Number(h)>>>0,Number(g)>>>0)):[]})},1333645:e=>{r.hc(`Gelu`,e,void 0)},1333697:(e,t,n,i,a,o,s,c,l)=>{r.hc(`GroupQueryAttention`,e,{numHeads:t,kvNumHeads:n,scale:i,softcap:a,doRotary:o,rotaryInterleaved:s,smoothSoftmax:c,localWindowSize:l})},1333914:(e,t,n,i)=>{r.hc(`LayerNormalization`,e,{axis:t,epsilon:n,simplified:!!i})},1334025:(e,t,n,i)=>{r.hc(`LayerNormalization`,e,{axis:t,epsilon:n,simplified:!!i})},1334136:(e,t,n,i,a,o)=>{r.hc(`MatMulNBits`,e,{k:t,n,accuracyLevel:i,bits:a,blockSize:o})},1334263:(e,t,n,i,a,o)=>{r.hc(`MultiHeadAttention`,e,{numHeads:t,isUnidirectional:n,maskFilterValue:i,scale:a,doRotary:o})},1334422:(e,t)=>{r.hc(`QuickGelu`,e,{alpha:t})},1334486:(e,t,n,i,a)=>{r.hc(`RotaryEmbedding`,e,{interleaved:!!t,numHeads:n,rotaryEmbeddingDim:i,scale:a})},1334625:(e,t,n)=>{r.hc(`SkipLayerNormalization`,e,{epsilon:t,simplified:!!n})},1334727:(e,t,n)=>{r.hc(`SkipLayerNormalization`,e,{epsilon:t,simplified:!!n})},1334829:(e,t,n,i)=>{r.hc(`GatherBlockQuantized`,e,{gatherAxis:t,quantizeAxis:n,blockSize:i})},1334950:e=>{r.Wd(e)},1334984:(e,t)=>r.Zd(Number(e),Number(t),r.Cd.be,r.Cd.errors)};function Oe(e,t,n){return Dn(async()=>{await r.Ud(Number(e),Number(t),Number(n))})}function ke(){return typeof wasmOffsetConverter<`u`}class Ae{name=`ExitStatus`;constructor(e){this.message=`Program terminated with exit(${e})`,this.status=e}}var je=e=>{e.terminate(),e.onmessage=()=>{}},Me=[],Ne=e=>{Re.length==0&&(Ge(),We(Re[0]));var t=Re.pop();if(!t)return 6;ze.push(t),Ve[e.xd]=t,t.xd=e.xd;var n={yd:`run`,de:e.ce,Fd:e.Fd,xd:e.xd};return t.postMessage(n,e.Ld),0},Pe=0,E=(e,t,...n)=>{for(var r=2*n.length,i=I(),a=$r(8*r),o=a>>>3,s=0;s<n.length;s++){var c=n[s];typeof c==`bigint`?(C[o+2*s]=1n,C[o+2*s+1]=c):(C[o+2*s]=0n,ge()[o+2*s+1>>>0]=c)}return e=qr(e,0,r,a,t),F(i),e};function Fe(e){if(s)return E(0,1,e);if(x=e,!(0<Pe)){for(var t of ze)je(t);for(t of Re)je(t);Re=[],ze=[],Ve={},le=!0}p(0,new Ae(e))}function Ie(e){if(s)return E(1,0,e);Le(e)}var Le=e=>{if(x=e,s)throw Ie(e),`unwind`;Fe(e)},Re=[],ze=[],Be=[],Ve={},He=e=>{var t=e.xd;delete Ve[t],Re.push(e),ze.splice(ze.indexOf(e),1),e.xd=0,Jr(t)};function Ue(){Be.forEach(e=>e())}var We=e=>new Promise(t=>{e.onmessage=n=>{var i=(n=n.data).yd;if(n.Ed&&n.Ed!=Hr()){var a=Ve[n.Ed];a?a.postMessage(n,n.Ld):v(`Internal error! Worker sent a message "${i}" to target pthread ${n.Ed}, but that thread no longer exists!`)}else i===`checkMailbox`?un():i===`spawnThread`?Ne(n):i===`cleanupThread`?He(Ve[n.ee]):i===`loaded`?(e.loaded=!0,t(e)):i===`alert`?alert(`Thread ${n.fe}: ${n.text}`):n.target===`setimmediate`?e.postMessage(n):i===`callHandler`?r[n.Nd](...n.args):i&&v(`worker sent an unknown command ${i}`)},e.onerror=e=>{throw v(`worker sent an error! ${e.filename}:${e.lineno}: ${e.message}`),e};var n,i=[];for(n of[])r.propertyIsEnumerable(n)&&i.push(n);e.postMessage({yd:`load`,Od:i,he:y,ie:b})});function Ge(){var e=new Worker(import.meta.url.startsWith(`file:`)?new URL(new URL(`ort.bundle.min-OfoG_cy9.mjs`,import.meta.url).href,``+import.meta.url):new URL(import.meta.url),{type:`module`,workerData:`em-pthread`,name:`em-pthread`});Re.push(e)}var Ke=e=>{ye();var t=T()[e+52>>>2>>>0];e=T()[e+56>>>2>>>0],Qr(t,t-e),F(t)},qe=(e,t)=>{Pe=0,e=oi(e,t),0<Pe?x=e:Yr(e)},Je=[];function Ye(e){var t=new Qe(e>>>=0);if(de()[t.wd+12>>>0]==0){var n=1;de()[t.wd+12>>>0]=n}return n=0,de()[t.wd+13>>>0]=n,Je.push(t),ti(e),ri(e)}var Xe=0,Ze=()=>{P(0,0);var e=Je.pop();ei(e.Gd),Xe=0};class Qe{constructor(e){this.Gd=e,this.wd=e-24}}function $e(e){throw Xe||=e>>>0,Xe}var et=e=>{var t=Xe;if(!t)return Zr(0),0;var n=new Qe(t);T()[n.wd+16>>>2>>>0]=t;var r=T()[n.wd+4>>>2>>>0];if(!r)return Zr(0),t;for(var i of e){if(i===0||i===r)break;if(ni(i,r,n.wd+16))return Zr(i),t}return Zr(r),t};function tt(){return et([])}function nt(e){return et([e>>>0])}function rt(e,t){return et([e>>>0,t>>>0])}var it=()=>{var e=Je.pop();e||Te(`no exception to throw`);var t=e.Gd;if(de()[e.wd+13>>>0]==0){Je.push(e);var n=1;de()[e.wd+13>>>0]=n,n=0,de()[e.wd+12>>>0]=n}throw Xe=t};function at(e,t,n){var r=new Qe(e>>>=0);throw t>>>=0,n>>>=0,T()[r.wd+16>>>2>>>0]=0,T()[r.wd+4>>>2>>>0]=t,T()[r.wd+8>>>2>>>0]=n,Xe=e}function ot(e,t,n,r){return s?E(2,1,e,t,n,r):st(e,t,n,r)}function st(e,t,n,r){if(e>>>=0,n>>>=0,r>>>=0,c===void 0)return 6;var i=[];return s&&i.length===0?ot(e,t>>>=0,n,r):(e={ce:n,xd:e,Fd:r,Ld:i},s?(e.yd=`spawnThread`,postMessage(e,i),0):Ne(e))}var ct=typeof TextDecoder<`u`?new TextDecoder:void 0,lt=(e,t=0,n=NaN)=>{var r=(t>>>=0)+n;for(n=t;e[n]&&!(n>=r);)++n;if(16<n-t&&e.buffer&&ct)return ct.decode(e.buffer instanceof ArrayBuffer?e.subarray(t,n):e.slice(t,n));for(r=``;t<n;){var i=e[t++];if(128&i){var a=63&e[t++];if((224&i)==192)r+=String.fromCharCode((31&i)<<6|a);else{var o=63&e[t++];65536>(i=(240&i)==224?(15&i)<<12|a<<6|o:(7&i)<<18|a<<12|o<<6|63&e[t++])?r+=String.fromCharCode(i):(i-=65536,r+=String.fromCharCode(55296|i>>10,56320|1023&i))}}else r+=String.fromCharCode(i)}return r},ut=(e,t)=>(e>>>=0)?lt(fe(),e,t):``;function dt(e,t,n){return s?E(3,1,e,t,n):0}function ft(e,t){if(s)return E(4,1,e,t)}var pt=e=>{for(var t=0,n=0;n<e.length;++n){var r=e.charCodeAt(n);127>=r?t++:2047>=r?t+=2:55296<=r&&57343>=r?(t+=4,++n):t+=3}return t},mt=(e,t,n)=>{var r=fe();if(t>>>=0,0<n){var i=t;n=t+n-1;for(var a=0;a<e.length;++a){var o=e.charCodeAt(a);if(55296<=o&&57343>=o&&(o=65536+((1023&o)<<10)|1023&e.charCodeAt(++a)),127>=o){if(t>=n)break;r[t++>>>0]=o}else{if(2047>=o){if(t+1>=n)break;r[t++>>>0]=192|o>>6}else{if(65535>=o){if(t+2>=n)break;r[t++>>>0]=224|o>>12}else{if(t+3>=n)break;r[t++>>>0]=240|o>>18,r[t++>>>0]=128|o>>12&63}r[t++>>>0]=128|o>>6&63}r[t++>>>0]=128|63&o}}r[t>>>0]=0,e=t-i}else e=0;return e};function ht(e,t){if(s)return E(5,1,e,t)}function gt(e,t,n){if(s)return E(6,1,e,t,n)}function _t(e,t,n){return s?E(7,1,e,t,n):0}function vt(e,t){if(s)return E(8,1,e,t)}function yt(e,t,n){if(s)return E(9,1,e,t,n)}function bt(e,t,n,r){if(s)return E(10,1,e,t,n,r)}function xt(e,t,n,r){if(s)return E(11,1,e,t,n,r)}function St(e,t,n,r){if(s)return E(12,1,e,t,n,r)}function Ct(e){if(s)return E(13,1,e)}function wt(e,t){if(s)return E(14,1,e,t)}function Tt(e,t,n){if(s)return E(15,1,e,t,n)}var Et,Dt,Ot=()=>Te(``),kt=e=>{for(var t=``;fe()[e>>>0];)t+=Et[fe()[e++>>>0]];return t},At={},jt={},Mt={};function Nt(e,t,n={}){return function(e,t,n={}){var r=t.name;if(!e)throw new Dt(`type "${r}" must have a positive integer typeid pointer`);if(jt.hasOwnProperty(e)){if(n.Pd)return;throw new Dt(`Cannot register type '${r}' twice`)}jt[e]=t,delete Mt[e],At.hasOwnProperty(e)&&(t=At[e],delete At[e],t.forEach(e=>e()))}(e,t,n)}var Pt=(e,t,n)=>{switch(t){case 1:return n?e=>de()[e>>>0]:e=>fe()[e>>>0];case 2:return n?e=>pe()[e>>>1>>>0]:e=>me()[e>>>1>>>0];case 4:return n?e=>w()[e>>>2>>>0]:e=>T()[e>>>2>>>0];case 8:return n?e=>C[e>>>3]:e=>oe[e>>>3];default:throw TypeError(`invalid integer width (${t}): ${e}`)}};function Ft(e,t,n){n>>>=0,Nt(e>>>=0,{name:t=kt(t>>>0),fromWireType:e=>e,toWireType:function(e,t){if(typeof t!=`bigint`&&typeof t!=`number`)throw t=t===null?`null`:(e=typeof t)==`object`||e===`array`||e===`function`?t.toString():``+t,TypeError(`Cannot convert "${t}" to ${this.name}`);return typeof t==`number`&&(t=BigInt(t)),t},zd:It,readValueFromPointer:Pt(t,n,t.indexOf(`u`)==-1),Ad:null})}var It=8;function Lt(e,t,n,r){Nt(e>>>=0,{name:t=kt(t>>>0),fromWireType:function(e){return!!e},toWireType:function(e,t){return t?n:r},zd:It,readValueFromPointer:function(e){return this.fromWireType(fe()[e>>>0])},Ad:null})}var Rt=[],zt=[];function Bt(e){9<(e>>>=0)&&--zt[e+1]==0&&(zt[e]=void 0,Rt.push(e))}var Vt=e=>{if(!e)throw new Dt(`Cannot use deleted val. handle = `+e);return zt[e]},Ht=e=>{switch(e){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let t=Rt.pop()||zt.length;return zt[t]=e,zt[t+1]=1,t}};function Ut(e){return this.fromWireType(T()[e>>>2>>>0])}var Wt={name:`emscripten::val`,fromWireType:e=>{var t=Vt(e);return Bt(e),t},toWireType:(e,t)=>Ht(t),zd:It,readValueFromPointer:Ut,Ad:null};function Gt(e){return Nt(e>>>0,Wt)}var Kt=(e,t)=>{switch(t){case 4:return function(e){return this.fromWireType(he()[e>>>2>>>0])};case 8:return function(e){return this.fromWireType(ge()[e>>>3>>>0])};default:throw TypeError(`invalid float width (${t}): ${e}`)}};function qt(e,t,n){n>>>=0,Nt(e>>>=0,{name:t=kt(t>>>0),fromWireType:e=>e,toWireType:(e,t)=>t,zd:It,readValueFromPointer:Kt(t,n),Ad:null})}function Jt(e,t,n,r,i){if(e>>>=0,n>>>=0,t=kt(t>>>0),i===-1&&(i=4294967295),i=e=>e,r===0){var a=32-8*n;i=e=>e<<a>>>a}var o=t.includes(`unsigned`)?function(e,t){return t>>>0}:function(e,t){return t};Nt(e,{name:t,fromWireType:i,toWireType:o,zd:It,readValueFromPointer:Pt(t,n,r!==0),Ad:null})}function Yt(e,t,n){function r(e){var t=T()[e>>>2>>>0];return e=T()[e+4>>>2>>>0],new i(de().buffer,e,t)}var i=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][t];Nt(e>>>=0,{name:n=kt(n>>>0),fromWireType:r,zd:It,readValueFromPointer:r},{Pd:!0})}function Xt(e,t){Nt(e>>>=0,{name:t=kt(t>>>0),fromWireType:function(e){for(var t,n=T()[e>>>2>>>0],r=e+4,i=r,a=0;a<=n;++a){var o=r+a;a!=n&&fe()[o>>>0]!=0||(i=ut(i,o-i),t===void 0?t=i:(t+=`\0`,t+=i),i=o+1)}return Ur(e),t},toWireType:function(e,t){t instanceof ArrayBuffer&&(t=new Uint8Array(t));var n=typeof t==`string`;if(!(n||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Int8Array))throw new Dt(`Cannot pass non-string to std::string`);var r=n?pt(t):t.length,i=Wr(4+r+1),a=i+4;if(T()[i>>>2>>>0]=r,n)mt(t,a,r+1);else if(n)for(n=0;n<r;++n){var o=t.charCodeAt(n);if(255<o)throw Ur(i),new Dt(`String has UTF-16 code units that do not fit in 8 bits`);fe()[a+n>>>0]=o}else for(n=0;n<r;++n)fe()[a+n>>>0]=t[n];return e!==null&&e.push(Ur,i),i},zd:It,readValueFromPointer:Ut,Ad(e){Ur(e)}})}var Zt=typeof TextDecoder<`u`?new TextDecoder(`utf-16le`):void 0,Qt=(e,t)=>{for(var n=e>>1,r=n+t/2;!(n>=r)&&me()[n>>>0];)++n;if(32<(n<<=1)-e&&Zt)return Zt.decode(fe().slice(e,n));for(n=``,r=0;!(r>=t/2);++r){var i=pe()[e+2*r>>>1>>>0];if(i==0)break;n+=String.fromCharCode(i)}return n},$t=(e,t,n)=>{if(n??=2147483647,2>n)return 0;var r=t;n=(n-=2)<2*e.length?n/2:e.length;for(var i=0;i<n;++i){var a=e.charCodeAt(i);pe()[t>>>1>>>0]=a,t+=2}return pe()[t>>>1>>>0]=0,t-r},en=e=>2*e.length,tn=(e,t)=>{for(var n=0,r=``;!(n>=t/4);){var i=w()[e+4*n>>>2>>>0];if(i==0)break;++n,65536<=i?(i-=65536,r+=String.fromCharCode(55296|i>>10,56320|1023&i)):r+=String.fromCharCode(i)}return r},nn=(e,t,n)=>{if(t>>>=0,n??=2147483647,4>n)return 0;var r=t;n=r+n-4;for(var i=0;i<e.length;++i){var a=e.charCodeAt(i);if(55296<=a&&57343>=a&&(a=65536+((1023&a)<<10)|1023&e.charCodeAt(++i)),w()[t>>>2>>>0]=a,(t+=4)+4>n)break}return w()[t>>>2>>>0]=0,t-r},rn=e=>{for(var t=0,n=0;n<e.length;++n){var r=e.charCodeAt(n);55296<=r&&57343>=r&&++n,t+=4}return t};function an(e,t,n){if(e>>>=0,t>>>=0,n=kt(n>>>=0),t===2)var r=Qt,i=$t,a=en,o=e=>me()[e>>>1>>>0];else t===4&&(r=tn,i=nn,a=rn,o=e=>T()[e>>>2>>>0]);Nt(e,{name:n,fromWireType:e=>{for(var n,i=T()[e>>>2>>>0],a=e+4,s=0;s<=i;++s){var c=e+4+s*t;s!=i&&o(c)!=0||(a=r(a,c-a),n===void 0?n=a:(n+=`\0`,n+=a),a=c+t)}return Ur(e),n},toWireType:(e,r)=>{if(typeof r!=`string`)throw new Dt(`Cannot pass non-string to C++ string type ${n}`);var o=a(r),s=Wr(4+o+t);return T()[s>>>2>>>0]=o/t,i(r,s+4,o+t),e!==null&&e.push(Ur,s),s},zd:It,readValueFromPointer:Ut,Ad(e){Ur(e)}})}function on(e,t){Nt(e>>>=0,{Qd:!0,name:t=kt(t>>>0),zd:0,fromWireType:()=>{},toWireType:()=>{}})}function sn(e){Gr(e>>>0,!o,1,!a,131072,!1),Ue()}var cn=e=>{if(!le)try{if(e(),!(0<Pe))try{s?Yr(x):Le(x)}catch(e){e instanceof Ae||e==`unwind`||p(0,e)}}catch(e){e instanceof Ae||e==`unwind`||p(0,e)}};function ln(e){e>>>=0,typeof Atomics.ge==`function`&&(Atomics.ge(w(),e>>>2,e).value.then(un),e+=128,Atomics.store(w(),e>>>2,1))}var un=()=>{var e=Hr();e&&(ln(e),cn(Xr))};function dn(e,t){(e>>>=0)==t>>>0?setTimeout(un):s?postMessage({Ed:e,yd:`checkMailbox`}):(e=Ve[e])&&e.postMessage({yd:`checkMailbox`})}var D=[];function fn(e,t,n,r,i){for(t>>>=0,r/=2,D.length=r,n=i>>>0>>>3,i=0;i<r;i++)D[i]=C[n+2*i]?C[n+2*i+1]:ge()[n+2*i+1>>>0];return(t?De[t]:zr[e])(...D)}var O=()=>{Pe=0};function pn(e){e>>>=0,s?postMessage({yd:`cleanupThread`,ee:e}):He(Ve[e])}function mn(e){}var hn=(e,t)=>{var n=jt[e];if(n===void 0)throw e=Br(e),n=kt(e),Ur(e),new Dt(`${t} has unknown type ${n}`);return n},gn=(e,t,n)=>{var r=[];return e=e.toWireType(r,n),r.length&&(T()[t>>>2>>>0]=Ht(r)),e};function _n(e,t,n){return t>>>=0,n>>>=0,e=Vt(e>>>0),t=hn(t,`emval::as`),gn(t,n,e)}function vn(e,t){return t>>>=0,e=Vt(e>>>0),(t=hn(t,`emval::as`)).toWireType(null,e)}var yn=e=>{try{e()}catch(e){Te(e)}},bn=0,k=null,xn=0,A=[],Sn={},Cn={},wn=0,Tn=null,En=[];function Dn(e){return function(e){if(!le){if(bn===0){var t=!1,n=!1;e((e=0)=>{if(!le&&(xn=e,t=!0,n)){bn=2,yn(()=>Xi(k)),typeof MainLoop<`u`&&MainLoop.Md&&MainLoop.resume(),e=!1;try{var r=function(){var e=w()[k+8>>>2>>>0];return e=M[Cn[e]],--Pe,e()}()}catch(t){r=t,e=!0}var i=!1;if(!k){var a=Tn;a&&(Tn=null,(e?a.reject:a.resolve)(r),i=!0)}if(e&&!i)throw r}}),n=!0,t||(bn=1,k=function(){var e=Wr(65548),t=e+12;T()[e>>>2>>>0]=t,T()[e+4>>>2>>>0]=t+65536,t=A[0];var n=Sn[t];return n===void 0&&(n=wn++,Sn[t]=n,Cn[n]=t),t=n,w()[e+8>>>2>>>0]=t,e}(),typeof MainLoop<`u`&&MainLoop.Md&&MainLoop.pause(),yn(()=>Ji(k)))}else bn===2?(bn=0,yn(Zi),Ur(k),k=null,En.forEach(cn)):Te(`invalid state: ${bn}`);return xn}}(t=>{e().then(t)})}function On(e){return e>>>=0,Dn(async()=>Ht(await Vt(e)))}var kn=[];function j(e,t,n,r){return n>>>=0,r>>>=0,(e=kn[e>>>0])(null,t=Vt(t>>>0),n,r)}var An={},jn=e=>{var t=An[e];return t===void 0?kt(e):t};function Mn(e,t,n,r,i){return n>>>=0,r>>>=0,i>>>=0,(e=kn[e>>>0])(t=Vt(t>>>0),t[n=jn(n)],r,i)}var Nn=()=>typeof globalThis==`object`?globalThis:Function(`return this`)();function Pn(e){return(e>>>=0)==0?Ht(Nn()):(e=jn(e),Ht(Nn()[e]))}var Fn=e=>{var t=kn.length;return kn.push(e),t},In=(e,t)=>{for(var n=Array(e),r=0;r<e;++r)n[r]=hn(T()[t+4*r>>>2>>>0],`parameter `+r);return n},Ln=(e,t)=>Object.defineProperty(t,"name",{value:e});function Rn(e,t,n){var r=(t=In(e,t>>>0)).shift();e--;var i=`return function (obj, func, destructorsRef, args) {
`,a=0,o=[];n===0&&o.push(`obj`);for(var s=[`retType`],c=[r],l=0;l<e;++l)o.push(`arg`+l),s.push(`argType`+l),c.push(t[l]),i+=`  var arg${l} = argType${l}.readValueFromPointer(args${a?`+`+a:``});
`,a+=t[l].zd;return i+=`  var rv = ${n===1?`new func`:`func.call`}(${o.join(`, `)});
`,r.Qd||(s.push(`emval_returnValue`),c.push(gn),i+=`  return emval_returnValue(retType, destructorsRef, rv);
`),s.push(i+`};
`),e=function(e){var t=Function;if(!(t instanceof Function))throw TypeError(`new_ called with constructor type ${typeof t} which is not a function`);var n=Ln(t.name||`unknownFunctionName`,function(){});return n.prototype=t.prototype,n=new n,(e=t.apply(n,e))instanceof Object?e:n}(s)(...c),n=`methodCaller<(${t.map(e=>e.name).join(`, `)}) => ${r.name}>`,Fn(Ln(n,e))}function zn(e){return e=jn(e>>>0),Ht(r[e])}function Bn(e,t){return t>>>=0,e=Vt(e>>>0),t=Vt(t),Ht(e[t])}function Vn(e){9<(e>>>=0)&&(zt[e+1]+=1)}function Hn(){return Ht([])}function Un(e){e=Vt(e>>>0);for(var t=Array(e.length),n=0;n<e.length;n++)t[n]=e[n];return Ht(t)}function Wn(e){return Ht(jn(e>>>0))}function Gn(){return Ht({})}function Kn(e){for(var t=Vt(e>>>=0);t.length;){var n=t.pop();t.pop()(n)}Bt(e)}function qn(e,t,n){t>>>=0,n>>>=0,e=Vt(e>>>0),t=Vt(t),n=Vt(n),e[t]=n}function Jn(e,t){return t>>>=0,e=(e=hn(e>>>0,`_emval_take_value`)).readValueFromPointer(t),Ht(e)}function Yn(e,t){e=-9007199254740992>e||9007199254740992<e?NaN:Number(e),t>>>=0,e=new Date(1e3*e),w()[t>>>2>>>0]=e.getUTCSeconds(),w()[t+4>>>2>>>0]=e.getUTCMinutes(),w()[t+8>>>2>>>0]=e.getUTCHours(),w()[t+12>>>2>>>0]=e.getUTCDate(),w()[t+16>>>2>>>0]=e.getUTCMonth(),w()[t+20>>>2>>>0]=e.getUTCFullYear()-1900,w()[t+24>>>2>>>0]=e.getUTCDay(),e=(e.getTime()-Date.UTC(e.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,w()[t+28>>>2>>>0]=e}var Xn=e=>e%4==0&&(e%100!=0||e%400==0),Zn=[0,31,60,91,121,152,182,213,244,274,305,335],Qn=[0,31,59,90,120,151,181,212,243,273,304,334];function $n(e,t){e=-9007199254740992>e||9007199254740992<e?NaN:Number(e),t>>>=0,e=new Date(1e3*e),w()[t>>>2>>>0]=e.getSeconds(),w()[t+4>>>2>>>0]=e.getMinutes(),w()[t+8>>>2>>>0]=e.getHours(),w()[t+12>>>2>>>0]=e.getDate(),w()[t+16>>>2>>>0]=e.getMonth(),w()[t+20>>>2>>>0]=e.getFullYear()-1900,w()[t+24>>>2>>>0]=e.getDay();var n=(Xn(e.getFullYear())?Zn:Qn)[e.getMonth()]+e.getDate()-1|0;w()[t+28>>>2>>>0]=n,w()[t+36>>>2>>>0]=-60*e.getTimezoneOffset(),n=new Date(e.getFullYear(),6,1).getTimezoneOffset();var r=new Date(e.getFullYear(),0,1).getTimezoneOffset();e=0|(n!=r&&e.getTimezoneOffset()==Math.min(r,n)),w()[t+32>>>2>>>0]=e}function er(e){e>>>=0;var t=new Date(w()[e+20>>>2>>>0]+1900,w()[e+16>>>2>>>0],w()[e+12>>>2>>>0],w()[e+8>>>2>>>0],w()[e+4>>>2>>>0],w()[e>>>2>>>0],0),n=w()[e+32>>>2>>>0],r=t.getTimezoneOffset(),i=new Date(t.getFullYear(),6,1).getTimezoneOffset(),a=new Date(t.getFullYear(),0,1).getTimezoneOffset(),o=Math.min(a,i);return 0>n?w()[e+32>>>2>>>0]=+(i!=a&&o==r):0<n!=(o==r)&&(i=Math.max(a,i),t.setTime(t.getTime()+6e4*((0<n?o:i)-r))),w()[e+24>>>2>>>0]=t.getDay(),n=(Xn(t.getFullYear())?Zn:Qn)[t.getMonth()]+t.getDate()-1|0,w()[e+28>>>2>>>0]=n,w()[e>>>2>>>0]=t.getSeconds(),w()[e+4>>>2>>>0]=t.getMinutes(),w()[e+8>>>2>>>0]=t.getHours(),w()[e+12>>>2>>>0]=t.getDate(),w()[e+16>>>2>>>0]=t.getMonth(),w()[e+20>>>2>>>0]=t.getYear(),e=t.getTime(),BigInt(isNaN(e)?-1:e/1e3)}function tr(e,t,n,r,i,a,o){return s?E(16,1,e,t,n,r,i,a,o):-52}function nr(e,t,n,r,i,a){if(s)return E(17,1,e,t,n,r,i,a)}var rr={},ir=()=>performance.timeOrigin+performance.now();function ar(e,t){return s?E(18,1,e,t):(rr[e]&&(clearTimeout(rr[e].id),delete rr[e]),t&&(rr[e]={id:setTimeout(()=>{delete rr[e],cn(()=>N(e,performance.timeOrigin+performance.now()))},t),ke:t}),0)}function or(e,t,n,r){e>>>=0,t>>>=0,n>>>=0,r>>>=0;var i=new Date().getFullYear(),a=new Date(i,0,1).getTimezoneOffset();i=new Date(i,6,1).getTimezoneOffset();var o=Math.max(a,i);T()[e>>>2>>>0]=60*o,w()[t>>>2>>>0]=+(a!=i),e=(t=e=>{var t=Math.abs(e);return`UTC${0<=e?`-`:`+`}${String(Math.floor(t/60)).padStart(2,`0`)}${String(t%60).padStart(2,`0`)}`})(a),t=t(i),i<a?(mt(e,n,17),mt(t,r,17)):(mt(e,r,17),mt(t,n,17))}var sr=()=>Date.now(),cr=1;function lr(e,t,n){if(!(0<=e&&3>=e))return 28;if(e===0)e=Date.now();else{if(!cr)return 52;e=performance.timeOrigin+performance.now()}return C[n>>>0>>>3]=BigInt(Math.round(1e6*e)),0}var ur=[],dr=(e,t)=>{ur.length=0;for(var n;n=fe()[e++>>>0];){var r=n!=105;t+=(r&=n!=112)&&t%8?4:0,ur.push(n==112?T()[t>>>2>>>0]:n==106?C[t>>>3]:n==105?w()[t>>>2>>>0]:ge()[t>>>3>>>0]),t+=r?8:4}return ur};function fr(e,t,n){return e>>>=0,t=dr(t>>>0,n>>>0),De[e](...t)}function pr(e,t,n){return e>>>=0,t=dr(t>>>0,n>>>0),De[e](...t)}var mr=()=>{};function hr(e,t){return v(ut(e>>>0,t>>>0))}var gr=()=>{throw Pe+=1,`unwind`};function _r(){return 4294901760}var vr=()=>navigator.hardwareConcurrency;function yr(){return Te(`Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER`),0}function br(e){e>>>=0;var t=fe().length;if(e<=t||4294901760<e)return!1;for(var n=1;4>=n;n*=2){var r=t*(1+.2/n);r=Math.min(r,e+100663296);e:{r=(Math.min(4294901760,65536*Math.ceil(Math.max(e,r)/65536))-y.buffer.byteLength+65535)/65536|0;try{y.grow(r),ye();var i=1;break e}catch{}i=void 0}if(i)return!0}return!1}var xr=()=>(Te(`Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER`),0),Sr={},Cr=e=>{e.forEach(e=>{var t=xr();t&&(Sr[t]=e)})};function wr(){var e=Error().stack.toString().split(`
`);return e[0]==`Error`&&e.shift(),Cr(e),Sr.Kd=xr(),Sr.ae=e,Sr.Kd}function Tr(e,t,n){if(e>>>=0,t>>>=0,Sr.Kd==e)var r=Sr.ae;else(r=Error().stack.toString().split(`
`))[0]==`Error`&&r.shift(),Cr(r);for(var i=3;r[i]&&xr()!=e;)++i;for(e=0;e<n&&r[e+i];++e)w()[t+4*e>>>2>>>0]=xr();return e}var Er,Dr={},Or=()=>{if(!Er){var e,t={USER:`web_user`,LOGNAME:`web_user`,PATH:`/`,PWD:`/`,HOME:`/home/web_user`,LANG:(typeof navigator==`object`&&navigator.languages&&navigator.languages[0]||`C`).replace(`-`,`_`)+`.UTF-8`,_:`./this.program`};for(e in Dr)Dr[e]===void 0?delete t[e]:t[e]=Dr[e];var n=[];for(e in t)n.push(`${e}=${t[e]}`);Er=n}return Er};function kr(e,t){if(s)return E(19,1,e,t);e>>>=0,t>>>=0;var n=0;return Or().forEach((r,i)=>{var a=t+n;for(i=T()[e+4*i>>>2>>>0]=a,a=0;a<r.length;++a)de()[i++>>>0]=r.charCodeAt(a);de()[i>>>0]=0,n+=r.length+1}),0}function Ar(e,t){if(s)return E(20,1,e,t);e>>>=0,t>>>=0;var n=Or();T()[e>>>2>>>0]=n.length;var r=0;return n.forEach(e=>r+=e.length+1),T()[t>>>2>>>0]=r,0}function jr(e){return s?E(21,1,e):52}function Mr(e,t,n,r){return s?E(22,1,e,t,n,r):52}function Nr(e,t,n,r){return s?E(23,1,e,t,n,r):70}var Pr=[null,[],[]];function Fr(e,t,n,r){if(s)return E(24,1,e,t,n,r);t>>>=0,n>>>=0,r>>>=0;for(var i=0,a=0;a<n;a++){var o=T()[t>>>2>>>0],c=T()[t+4>>>2>>>0];t+=8;for(var l=0;l<c;l++){var u=fe()[o+l>>>0],d=Pr[e];u===0||u===10?((e===1?_:v)(lt(d)),d.length=0):d.push(u)}i+=c}return T()[r>>>2>>>0]=i,0}function Ir(e){return e>>>0}s||function(){for(var e=r.numThreads-1;e--;)Ge();Me.unshift(()=>{Se++,function(e){s?e():Promise.all(Re.map(We)).then(e)}(()=>we())})}();for(var Lr=Array(256),Rr=0;256>Rr;++Rr)Lr[Rr]=String.fromCharCode(Rr);Et=Lr,Dt=r.BindingError=class extends Error{constructor(e){super(e),this.name=`BindingError`}},r.InternalError=class extends Error{constructor(e){super(e),this.name=`InternalError`}},zt.push(0,1,void 0,1,null,1,!0,1,!1,1),r.count_emval_handles=()=>zt.length/2-5-Rt.length;var M,zr=[Fe,Ie,ot,dt,ft,ht,gt,_t,vt,yt,bt,xt,St,Ct,wt,Tt,tr,nr,ar,kr,Ar,jr,Mr,Nr,Fr];(async function(){function e(e,t){return M=e.exports,M=function(){var e=M,t={};for(let[n,r]of Object.entries(e))t[n]=typeof r==`function`?(...e)=>{A.push(n);try{return r(...e)}finally{le||(A.pop(),k&&bn===1&&A.length===0&&(bn=0,Pe+=1,yn(Yi),typeof Fibers<`u`&&Fibers.le()))}}:r;return t}(),M=function(){var e=M,t=e=>t=>e(t)>>>0,n=e=>()=>e()>>>0;return(e=Object.assign({},e)).Cb=t(e.Cb),e.fc=n(e.fc),e.ic=t(e.ic),e.vc=t(e.vc),e.wc=n(e.wc),e.Ac=t(e.Ac),e}(),Be.push(M.jc),b=t,we(),M}Se++;var t=Ee();if(r.instantiateWasm)return new Promise(n=>{r.instantiateWasm(t,(t,r)=>{e(t,r),n(t.exports)})});if(s)return new Promise(t=>{_e=n=>{t(e(new WebAssembly.Instance(n,Ee()),n))}});xe??=r.locateFile?r.locateFile?r.locateFile(`ort-wasm-simd-threaded.jsep.wasm`,m):m+`ort-wasm-simd-threaded.jsep.wasm`:new URL(new URL(`ort-wasm-simd-threaded.jsep-D5Jk56-t.wasm`,import.meta.url).href,``+import.meta.url).href;try{var i=await async function(e){var t=xe;if(!ce&&typeof WebAssembly.instantiateStreaming==`function`&&!ue(t))try{var n=fetch(t,{credentials:`same-origin`});return await WebAssembly.instantiateStreaming(n,e)}catch(e){v(`wasm streaming compile failed: ${e}`),v(`falling back to ArrayBuffer instantiation`)}return async function(e,t){try{var n=await async function(e){if(!ce)try{var t=await u(e);return new Uint8Array(t)}catch{}if(e==xe&&ce)e=new Uint8Array(ce);else{if(!d)throw`both async and sync fetching of the wasm failed`;e=d(e)}return e}(e);return await WebAssembly.instantiate(n,t)}catch(e){v(`failed to asynchronously prepare wasm: ${e}`),Te(e)}}(t,e)}(t);return e(i.instance,i.module)}catch(e){return n(e),Promise.reject(e)}})();var Br=e=>(Br=M.Cb)(e),Vr=()=>(Vr=M.Db)();r._OrtInit=(e,t)=>(r._OrtInit=M.Eb)(e,t),r._OrtGetLastError=(e,t)=>(r._OrtGetLastError=M.Fb)(e,t),r._OrtCreateSessionOptions=(e,t,n,i,a,o,s,c,l,u)=>(r._OrtCreateSessionOptions=M.Gb)(e,t,n,i,a,o,s,c,l,u),r._OrtAppendExecutionProvider=(e,t)=>(r._OrtAppendExecutionProvider=M.Hb)(e,t),r._OrtAddFreeDimensionOverride=(e,t,n)=>(r._OrtAddFreeDimensionOverride=M.Ib)(e,t,n),r._OrtAddSessionConfigEntry=(e,t,n)=>(r._OrtAddSessionConfigEntry=M.Jb)(e,t,n),r._OrtReleaseSessionOptions=e=>(r._OrtReleaseSessionOptions=M.Kb)(e),r._OrtCreateSession=(e,t,n)=>(r._OrtCreateSession=M.Lb)(e,t,n),r._OrtReleaseSession=e=>(r._OrtReleaseSession=M.Mb)(e),r._OrtGetInputOutputCount=(e,t,n)=>(r._OrtGetInputOutputCount=M.Nb)(e,t,n),r._OrtGetInputName=(e,t)=>(r._OrtGetInputName=M.Ob)(e,t),r._OrtGetOutputName=(e,t)=>(r._OrtGetOutputName=M.Pb)(e,t),r._OrtFree=e=>(r._OrtFree=M.Qb)(e),r._OrtCreateTensor=(e,t,n,i,a,o)=>(r._OrtCreateTensor=M.Rb)(e,t,n,i,a,o),r._OrtGetTensorData=(e,t,n,i,a)=>(r._OrtGetTensorData=M.Sb)(e,t,n,i,a),r._OrtReleaseTensor=e=>(r._OrtReleaseTensor=M.Tb)(e),r._OrtCreateRunOptions=(e,t,n,i)=>(r._OrtCreateRunOptions=M.Ub)(e,t,n,i),r._OrtAddRunConfigEntry=(e,t,n)=>(r._OrtAddRunConfigEntry=M.Vb)(e,t,n),r._OrtReleaseRunOptions=e=>(r._OrtReleaseRunOptions=M.Wb)(e),r._OrtCreateBinding=e=>(r._OrtCreateBinding=M.Xb)(e),r._OrtBindInput=(e,t,n)=>(r._OrtBindInput=M.Yb)(e,t,n),r._OrtBindOutput=(e,t,n,i)=>(r._OrtBindOutput=M.Zb)(e,t,n,i),r._OrtClearBoundOutputs=e=>(r._OrtClearBoundOutputs=M._b)(e),r._OrtReleaseBinding=e=>(r._OrtReleaseBinding=M.$b)(e),r._OrtRunWithBinding=(e,t,n,i,a)=>(r._OrtRunWithBinding=M.ac)(e,t,n,i,a),r._OrtRun=(e,t,n,i,a,o,s,c)=>(r._OrtRun=M.bc)(e,t,n,i,a,o,s,c),r._OrtEndProfiling=e=>(r._OrtEndProfiling=M.cc)(e),r._JsepOutput=(e,t,n)=>(r._JsepOutput=M.dc)(e,t,n),r._JsepGetNodeName=e=>(r._JsepGetNodeName=M.ec)(e);var Hr=()=>(Hr=M.fc)(),Ur=r._free=e=>(Ur=r._free=M.gc)(e),Wr=r._malloc=e=>(Wr=r._malloc=M.ic)(e),Gr=(e,t,n,r,i,a)=>(Gr=M.kc)(e,t,n,r,i,a),Kr=()=>(Kr=M.lc)(),qr=(e,t,n,r,i)=>(qr=M.mc)(e,t,n,r,i),Jr=e=>(Jr=M.nc)(e),Yr=e=>(Yr=M.oc)(e),N=(e,t)=>(N=M.pc)(e,t),Xr=()=>(Xr=M.qc)(),P=(e,t)=>(P=M.rc)(e,t),Zr=e=>(Zr=M.sc)(e),Qr=(e,t)=>(Qr=M.tc)(e,t),F=e=>(F=M.uc)(e),$r=e=>($r=M.vc)(e),I=()=>(I=M.wc)(),ei=e=>(ei=M.xc)(e),ti=e=>(ti=M.yc)(e),ni=(e,t,n)=>(ni=M.zc)(e,t,n),ri=e=>(ri=M.Ac)(e),ii=r.dynCall_iii=(e,t,n)=>(ii=r.dynCall_iii=M.Bc)(e,t,n),ai=r.dynCall_vi=(e,t)=>(ai=r.dynCall_vi=M.Cc)(e,t),oi=r.dynCall_ii=(e,t)=>(oi=r.dynCall_ii=M.Dc)(e,t),si=r.dynCall_vii=(e,t,n)=>(si=r.dynCall_vii=M.Ec)(e,t,n),ci=r.dynCall_iiii=(e,t,n,i)=>(ci=r.dynCall_iiii=M.Fc)(e,t,n,i),li=r.dynCall_viii=(e,t,n,i)=>(li=r.dynCall_viii=M.Gc)(e,t,n,i),ui=r.dynCall_iiiii=(e,t,n,i,a)=>(ui=r.dynCall_iiiii=M.Hc)(e,t,n,i,a),di=r.dynCall_viiii=(e,t,n,i,a)=>(di=r.dynCall_viiii=M.Ic)(e,t,n,i,a),fi=r.dynCall_viiiiii=(e,t,n,i,a,o,s)=>(fi=r.dynCall_viiiiii=M.Jc)(e,t,n,i,a,o,s),pi=r.dynCall_viiiiiii=(e,t,n,i,a,o,s,c)=>(pi=r.dynCall_viiiiiii=M.Kc)(e,t,n,i,a,o,s,c),mi=r.dynCall_ji=(e,t)=>(mi=r.dynCall_ji=M.Lc)(e,t),hi=r.dynCall_v=e=>(hi=r.dynCall_v=M.Mc)(e),gi=r.dynCall_viiiii=(e,t,n,i,a,o)=>(gi=r.dynCall_viiiii=M.Nc)(e,t,n,i,a,o),_i=r.dynCall_i=e=>(_i=r.dynCall_i=M.Oc)(e),vi=r.dynCall_fii=(e,t,n)=>(vi=r.dynCall_fii=M.Pc)(e,t,n),yi=r.dynCall_viiiiiiii=(e,t,n,i,a,o,s,c,l)=>(yi=r.dynCall_viiiiiiii=M.Qc)(e,t,n,i,a,o,s,c,l),bi=r.dynCall_viiiiiiiiii=(e,t,n,i,a,o,s,c,l,u,d)=>(bi=r.dynCall_viiiiiiiiii=M.Rc)(e,t,n,i,a,o,s,c,l,u,d),xi=r.dynCall_jiii=(e,t,n,i)=>(xi=r.dynCall_jiii=M.Sc)(e,t,n,i),Si=r.dynCall_dii=(e,t,n)=>(Si=r.dynCall_dii=M.Tc)(e,t,n),Ci=r.dynCall_viiiiiiiii=(e,t,n,i,a,o,s,c,l,u)=>(Ci=r.dynCall_viiiiiiiii=M.Uc)(e,t,n,i,a,o,s,c,l,u),wi=r.dynCall_viiiiiiiiiii=(e,t,n,i,a,o,s,c,l,u,d,f)=>(wi=r.dynCall_viiiiiiiiiii=M.Vc)(e,t,n,i,a,o,s,c,l,u,d,f),Ti=r.dynCall_iiiiii=(e,t,n,i,a,o)=>(Ti=r.dynCall_iiiiii=M.Wc)(e,t,n,i,a,o),Ei=r.dynCall_iij=(e,t,n)=>(Ei=r.dynCall_iij=M.Xc)(e,t,n),Di=r.dynCall_iiiiiiiiii=(e,t,n,i,a,o,s,c,l,u)=>(Di=r.dynCall_iiiiiiiiii=M.Yc)(e,t,n,i,a,o,s,c,l,u),Oi=r.dynCall_iiiiiiiiiii=(e,t,n,i,a,o,s,c,l,u,d)=>(Oi=r.dynCall_iiiiiiiiiii=M.Zc)(e,t,n,i,a,o,s,c,l,u,d),ki=r.dynCall_vij=(e,t,n)=>(ki=r.dynCall_vij=M._c)(e,t,n),Ai=r.dynCall_iiif=(e,t,n,i)=>(Ai=r.dynCall_iiif=M.$c)(e,t,n,i),ji=r.dynCall_iiij=(e,t,n,i)=>(ji=r.dynCall_iiij=M.ad)(e,t,n,i),Mi=r.dynCall_fiii=(e,t,n,i)=>(Mi=r.dynCall_fiii=M.bd)(e,t,n,i),Ni=r.dynCall_viiiiiiiiiiiii=(e,t,n,i,a,o,s,c,l,u,d,f,p,m)=>(Ni=r.dynCall_viiiiiiiiiiiii=M.cd)(e,t,n,i,a,o,s,c,l,u,d,f,p,m),Pi=r.dynCall_vjiii=(e,t,n,i,a)=>(Pi=r.dynCall_vjiii=M.dd)(e,t,n,i,a),Fi=r.dynCall_vif=(e,t,n)=>(Fi=r.dynCall_vif=M.ed)(e,t,n),Ii=r.dynCall_iiiiiii=(e,t,n,i,a,o,s)=>(Ii=r.dynCall_iiiiiii=M.fd)(e,t,n,i,a,o,s),Li=r.dynCall_iiiij=(e,t,n,i,a)=>(Li=r.dynCall_iiiij=M.gd)(e,t,n,i,a),Ri=r.dynCall_iiiiiiii=(e,t,n,i,a,o,s,c)=>(Ri=r.dynCall_iiiiiiii=M.hd)(e,t,n,i,a,o,s,c),zi=r.dynCall_viiiiiiiiiiii=(e,t,n,i,a,o,s,c,l,u,d,f,p)=>(zi=r.dynCall_viiiiiiiiiiii=M.id)(e,t,n,i,a,o,s,c,l,u,d,f,p),Bi=r.dynCall_diii=(e,t,n,i)=>(Bi=r.dynCall_diii=M.jd)(e,t,n,i),Vi=r.dynCall_jiiii=(e,t,n,i,a)=>(Vi=r.dynCall_jiiii=M.kd)(e,t,n,i,a),Hi=r.dynCall_viiij=(e,t,n,i,a)=>(Hi=r.dynCall_viiij=M.ld)(e,t,n,i,a),Ui=r.dynCall_fiiii=(e,t,n,i,a)=>(Ui=r.dynCall_fiiii=M.md)(e,t,n,i,a),L=r.dynCall_viiif=(e,t,n,i,a)=>(L=r.dynCall_viiif=M.nd)(e,t,n,i,a),Wi=r.dynCall_diiii=(e,t,n,i,a)=>(Wi=r.dynCall_diiii=M.od)(e,t,n,i,a),Gi=r.dynCall_viiid=(e,t,n,i,a)=>(Gi=r.dynCall_viiid=M.pd)(e,t,n,i,a),Ki=r.dynCall_iiiijii=(e,t,n,i,a,o,s)=>(Ki=r.dynCall_iiiijii=M.qd)(e,t,n,i,a,o,s),qi=r.dynCall_iiiiiij=(e,t,n,i,a,o,s)=>(qi=r.dynCall_iiiiiij=M.rd)(e,t,n,i,a,o,s),Ji=e=>(Ji=M.sd)(e),Yi=()=>(Yi=M.td)(),Xi=e=>(Xi=M.ud)(e),Zi=()=>(Zi=M.vd)();function Qi(e,t,n){var r=I();try{si(e,t,n)}catch(e){if(F(r),e!==e+0)throw e;P(1,0)}}function $i(e,t,n){var r=I();try{return ii(e,t,n)}catch(e){if(F(r),e!==e+0)throw e;P(1,0)}}function ea(e,t){var n=I();try{ai(e,t)}catch(e){if(F(n),e!==e+0)throw e;P(1,0)}}function ta(e,t){var n=I();try{return oi(e,t)}catch(e){if(F(n),e!==e+0)throw e;P(1,0)}}function na(e,t,n,r){var i=I();try{return ci(e,t,n,r)}catch(e){if(F(i),e!==e+0)throw e;P(1,0)}}function ra(e,t,n,r,i){var a=I();try{di(e,t,n,r,i)}catch(e){if(F(a),e!==e+0)throw e;P(1,0)}}function ia(e,t,n,r,i){var a=I();try{return ui(e,t,n,r,i)}catch(e){if(F(a),e!==e+0)throw e;P(1,0)}}function aa(e,t,n,r){var i=I();try{li(e,t,n,r)}catch(e){if(F(i),e!==e+0)throw e;P(1,0)}}function oa(e,t,n,r,i,a,o){var s=I();try{return Ii(e,t,n,r,i,a,o)}catch(e){if(F(s),e!==e+0)throw e;P(1,0)}}function sa(e){var t=I();try{hi(e)}catch(e){if(F(t),e!==e+0)throw e;P(1,0)}}function ca(e,t,n){var r=I();try{return Ei(e,t,n)}catch(e){if(F(r),e!==e+0)throw e;P(1,0)}}function la(e,t,n,r,i,a){var o=I();try{gi(e,t,n,r,i,a)}catch(e){if(F(o),e!==e+0)throw e;P(1,0)}}function ua(e,t,n){var r=I();try{ki(e,t,n)}catch(e){if(F(r),e!==e+0)throw e;P(1,0)}}function da(e,t,n,r,i,a,o){var s=I();try{fi(e,t,n,r,i,a,o)}catch(e){if(F(s),e!==e+0)throw e;P(1,0)}}function fa(e,t,n,r,i,a,o,s){var c=I();try{pi(e,t,n,r,i,a,o,s)}catch(e){if(F(c),e!==e+0)throw e;P(1,0)}}function pa(e,t,n,r,i,a){var o=I();try{return Ti(e,t,n,r,i,a)}catch(e){if(F(o),e!==e+0)throw e;P(1,0)}}function ma(e,t,n,r,i,a,o,s){var c=I();try{return Ri(e,t,n,r,i,a,o,s)}catch(e){if(F(c),e!==e+0)throw e;P(1,0)}}function ha(e,t,n,r,i,a,o,s,c,l){var u=I();try{Ci(e,t,n,r,i,a,o,s,c,l)}catch(e){if(F(u),e!==e+0)throw e;P(1,0)}}function ga(e,t,n,r,i,a,o,s,c){var l=I();try{yi(e,t,n,r,i,a,o,s,c)}catch(e){if(F(l),e!==e+0)throw e;P(1,0)}}function _a(e){var t=I();try{return _i(e)}catch(e){if(F(t),e!==e+0)throw e;P(1,0)}}function va(e,t,n,r,i,a,o,s,c,l){var u=I();try{return Di(e,t,n,r,i,a,o,s,c,l)}catch(e){if(F(u),e!==e+0)throw e;P(1,0)}}function ya(e,t,n){var r=I();try{return vi(e,t,n)}catch(e){if(F(r),e!==e+0)throw e;P(1,0)}}function ba(e,t,n,r){var i=I();try{return xi(e,t,n,r)}catch(e){if(F(i),e!==e+0)throw e;return P(1,0),0n}}function xa(e,t,n){var r=I();try{return Si(e,t,n)}catch(e){if(F(r),e!==e+0)throw e;P(1,0)}}function Sa(e,t,n,r,i,a,o,s,c,l,u,d){var f=I();try{wi(e,t,n,r,i,a,o,s,c,l,u,d)}catch(e){if(F(f),e!==e+0)throw e;P(1,0)}}function Ca(e,t,n,r,i,a,o,s,c,l,u){var d=I();try{bi(e,t,n,r,i,a,o,s,c,l,u)}catch(e){if(F(d),e!==e+0)throw e;P(1,0)}}function wa(e,t,n,r,i,a,o,s,c,l,u){var d=I();try{return Oi(e,t,n,r,i,a,o,s,c,l,u)}catch(e){if(F(d),e!==e+0)throw e;P(1,0)}}function Ta(e,t,n,r){var i=I();try{return Ai(e,t,n,r)}catch(e){if(F(i),e!==e+0)throw e;P(1,0)}}function Ea(e,t,n,r){var i=I();try{return ji(e,t,n,r)}catch(e){if(F(i),e!==e+0)throw e;P(1,0)}}function Da(e,t,n,r){var i=I();try{return Mi(e,t,n,r)}catch(e){if(F(i),e!==e+0)throw e;P(1,0)}}function Oa(e,t,n,r,i,a,o,s,c,l,u,d,f,p){var m=I();try{Ni(e,t,n,r,i,a,o,s,c,l,u,d,f,p)}catch(e){if(F(m),e!==e+0)throw e;P(1,0)}}function ka(e,t,n,r,i){var a=I();try{Pi(e,t,n,r,i)}catch(e){if(F(a),e!==e+0)throw e;P(1,0)}}function Aa(e,t,n){var r=I();try{Fi(e,t,n)}catch(e){if(F(r),e!==e+0)throw e;P(1,0)}}function ja(e,t){var n=I();try{return mi(e,t)}catch(e){if(F(n),e!==e+0)throw e;return P(1,0),0n}}function Ma(e,t,n,r,i){var a=I();try{return Li(e,t,n,r,i)}catch(e){if(F(a),e!==e+0)throw e;P(1,0)}}function Na(e,t,n,r,i,a,o,s,c,l,u,d,f){var p=I();try{zi(e,t,n,r,i,a,o,s,c,l,u,d,f)}catch(e){if(F(p),e!==e+0)throw e;P(1,0)}}function Pa(e,t,n,r){var i=I();try{return Bi(e,t,n,r)}catch(e){if(F(i),e!==e+0)throw e;P(1,0)}}function Fa(e,t,n,r,i){var a=I();try{return Vi(e,t,n,r,i)}catch(e){if(F(a),e!==e+0)throw e;return P(1,0),0n}}function Ia(e,t,n,r,i){var a=I();try{Hi(e,t,n,r,i)}catch(e){if(F(a),e!==e+0)throw e;P(1,0)}}function La(e,t,n,r,i){var a=I();try{return Ui(e,t,n,r,i)}catch(e){if(F(a),e!==e+0)throw e;P(1,0)}}function Ra(e,t,n,r,i){var a=I();try{L(e,t,n,r,i)}catch(e){if(F(a),e!==e+0)throw e;P(1,0)}}function za(e,t,n,r,i){var a=I();try{return Wi(e,t,n,r,i)}catch(e){if(F(a),e!==e+0)throw e;P(1,0)}}function Ba(e,t,n,r,i){var a=I();try{Gi(e,t,n,r,i)}catch(e){if(F(a),e!==e+0)throw e;P(1,0)}}function Va(e,t,n,r,i,a,o){var s=I();try{return Ki(e,t,n,r,i,a,o)}catch(e){if(F(s),e!==e+0)throw e;P(1,0)}}function Ha(e,t,n,r,i,a,o){var s=I();try{return qi(e,t,n,r,i,a,o)}catch(e){if(F(s),e!==e+0)throw e;P(1,0)}}return r.stackSave=()=>I(),r.stackRestore=e=>F(e),r.stackAlloc=e=>$r(e),r.setValue=function(e,t,n=`i8`){switch(n.endsWith(`*`)&&(n=`*`),n){case`i1`:case`i8`:de()[e>>>0]=t;break;case`i16`:pe()[e>>>1>>>0]=t;break;case`i32`:w()[e>>>2>>>0]=t;break;case`i64`:C[e>>>3]=BigInt(t);break;case`float`:he()[e>>>2>>>0]=t;break;case`double`:ge()[e>>>3>>>0]=t;break;case`*`:T()[e>>>2>>>0]=t;break;default:Te(`invalid type for setValue: ${n}`)}},r.getValue=function(e,t=`i8`){switch(t.endsWith(`*`)&&(t=`*`),t){case`i1`:case`i8`:return de()[e>>>0];case`i16`:return pe()[e>>>1>>>0];case`i32`:return w()[e>>>2>>>0];case`i64`:return C[e>>>3];case`float`:return he()[e>>>2>>>0];case`double`:return ge()[e>>>3>>>0];case`*`:return T()[e>>>2>>>0];default:Te(`invalid type for getValue: ${t}`)}},r.UTF8ToString=ut,r.stringToUTF8=mt,r.lengthBytesUTF8=pt,function e(){if(0<Se)Ce=e;else if(s)t(r),be();else{for(;0<Me.length;)Me.shift()(r);0<Se?Ce=e:(r.calledRun=!0,le||(be(),t(r)))}}(),r.PTR_SIZE=4,i}),$a=Qa,eo=globalThis.self?.name?.startsWith(`em-pthread`),eo&&Qa()}),no,ro,io,ao,oo,so,co,lo,uo,fo,po,mo,ho,go=L(()=>{Wa(),no=typeof location>`u`?void 0:location.origin,ro=()=>import.meta.url?.startsWith(`file:`)?new URL(new URL(new URL(`ort.bundle.min-OfoG_cy9.mjs`,import.meta.url).href,``+import.meta.url).href,no).href:import.meta.url,io=ro(),ao=()=>{if(io&&!io.startsWith(`blob:`))return io.substring(0,io.lastIndexOf(`/`)+1)},oo=(e,t)=>{try{let n=t??io;return(n?new URL(e,n):new URL(e)).origin===no}catch{return!1}},so=(e,t)=>{let n=t??io;try{return(n?new URL(e,n):new URL(e)).href}catch{return}},co=(e,t)=>`${t??`./`}${e}`,lo=async e=>{let t=await(await fetch(e,{credentials:`same-origin`})).blob();return URL.createObjectURL(t)},uo=async e=>(await import(e)).default,fo=(Ya(),Ki(Ga)).default,po=async()=>{if(!io)throw Error(`Failed to load proxy worker: cannot determine the script source URL.`);if(oo(io))return[void 0,fo()];let e=await lo(io);return[e,fo(e)]},mo=(to(),Ki(Xa)).default,ho=async(e,t,n)=>{if(!e&&!t&&mo&&io&&oo(io))return[void 0,mo];{let r=`ort-wasm-simd-threaded.jsep.mjs`,i=e??so(r,t),a=n&&i&&!oo(i,t),o=a?await lo(i):i??co(r,t);return[a?o:void 0,await uo(o)]}}}),_o,vo,yo,bo,xo,So,Co,wo,To=L(()=>{go(),vo=!1,yo=!1,bo=!1,xo=()=>{if(typeof SharedArrayBuffer>`u`)return!1;try{return typeof MessageChannel<`u`&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},So=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Co=async e=>{if(vo)return Promise.resolve();if(yo)throw Error(`multiple calls to 'initializeWebAssembly()' detected.`);if(bo)throw Error(`previous call to 'initializeWebAssembly()' failed.`);yo=!0;let t=e.initTimeout,n=e.numThreads;if(!So())throw Error(`WebAssembly SIMD is not supported in the current environment.`);let r=xo();n>1&&!r&&(typeof self<`u`&&!self.crossOriginIsolated&&console.warn(`env.wasm.numThreads is set to `+n+`, but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info.`),console.warn(`WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading.`),e.numThreads=n=1);let i=e.wasmPaths,a=typeof i==`string`?i:void 0,o=i?.mjs,s=o?.href??o,c=i?.wasm,l=c?.href??c,u=e.wasmBinary,[d,f]=await ho(s,a,n>1),p=!1,m=[];if(t>0&&m.push(new Promise(e=>{setTimeout(()=>{p=!0,e()},t)})),m.push(new Promise((e,t)=>{let r={numThreads:n};if(u)r.wasmBinary=u;else if(l||a)r.locateFile=e=>l??a+e;else if(s&&s.indexOf(`blob:`)!==0)r.locateFile=e=>new URL(e,s).href;else if(d){let e=ao();e&&(r.locateFile=t=>e+t)}f(r).then(t=>{yo=!1,vo=!0,_o=t,e(),d&&URL.revokeObjectURL(d)},e=>{yo=!1,bo=!0,t(e)})})),await Promise.race(m),p)throw Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},wo=()=>{if(vo&&_o)return _o;throw Error(`WebAssembly is not initialized yet.`)}}),Eo,Do,Oo,ko=L(()=>{To(),Eo=(e,t)=>{let n=wo(),r=n.lengthBytesUTF8(e)+1,i=n._malloc(r);return n.stringToUTF8(e,i,r),t.push(i),i},Do=(e,t,n,r)=>{if(typeof e==`object`&&e){if(n.has(e))throw Error(`Circular reference in options`);n.add(e)}Object.entries(e).forEach(([e,i])=>{let a=t?t+e:e;if(typeof i==`object`)Do(i,a+`.`,n,r);else if(typeof i==`string`||typeof i==`number`)r(a,i.toString());else if(typeof i==`boolean`)r(a,i?`1`:`0`);else throw Error(`Can't handle extra config type: ${typeof i}`)})},Oo=e=>{let t=wo(),n=t.stackSave();try{let n=t.PTR_SIZE,r=t.stackAlloc(2*n);t._OrtGetLastError(r,r+n);let i=Number(t.getValue(r,n===4?`i32`:`i64`)),a=t.getValue(r+n,`*`),o=a?t.UTF8ToString(a):``;throw Error(`${e} ERROR_CODE: ${i}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(n)}}}),Ao,jo=L(()=>{To(),ko(),Ao=e=>{let t=wo(),n=0,r=[],i=e||{};try{if(e?.logSeverityLevel===void 0)i.logSeverityLevel=2;else if(typeof e.logSeverityLevel!=`number`||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw Error(`log serverity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)i.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!=`number`||!Number.isInteger(e.logVerbosityLevel))throw Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(i.terminate=!1);let a=0;return e?.tag!==void 0&&(a=Eo(e.tag,r)),n=t._OrtCreateRunOptions(i.logSeverityLevel,i.logVerbosityLevel,!!i.terminate,a),n===0&&Oo(`Can't create run options.`),e?.extra!==void 0&&Do(e.extra,``,new WeakSet,(e,i)=>{let a=Eo(e,r),o=Eo(i,r);t._OrtAddRunConfigEntry(n,a,o)!==0&&Oo(`Can't set a run config entry: ${e} - ${i}.`)}),[n,r]}catch(e){throw n!==0&&t._OrtReleaseRunOptions(n),r.forEach(e=>t._free(e)),e}}}),Mo,No,Po,Fo,Io,Lo=L(()=>{To(),ko(),Mo=e=>{switch(e){case`disabled`:return 0;case`basic`:return 1;case`extended`:return 2;case`all`:return 99;default:throw Error(`unsupported graph optimization level: ${e}`)}},No=e=>{switch(e){case`sequential`:return 0;case`parallel`:return 1;default:throw Error(`unsupported execution mode: ${e}`)}},Po=e=>{e.extra||={},e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||=`1`,e.executionProviders&&e.executionProviders.some(e=>(typeof e==`string`?e:e.name)===`webgpu`)&&(e.enableMemPattern=!1)},Fo=(e,t,n)=>{for(let r of t){let t=typeof r==`string`?r:r.name;switch(t){case`webnn`:if(t=`WEBNN`,typeof r!=`string`){let t=r?.deviceType;if(t){let r=Eo(`deviceType`,n),i=Eo(t,n);wo()._OrtAddSessionConfigEntry(e,r,i)!==0&&Oo(`Can't set a session config entry: 'deviceType' - ${t}.`)}}break;case`webgpu`:if(t=`JS`,typeof r!=`string`){let t=r;if(t?.preferredLayout){if(t.preferredLayout!==`NCHW`&&t.preferredLayout!==`NHWC`)throw Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${t.preferredLayout}`);let r=Eo(`preferredLayout`,n),i=Eo(t.preferredLayout,n);wo()._OrtAddSessionConfigEntry(e,r,i)!==0&&Oo(`Can't set a session config entry: 'preferredLayout' - ${t.preferredLayout}.`)}}break;case`wasm`:case`cpu`:continue;default:throw Error(`not supported execution provider: ${t}`)}let i=Eo(t,n);wo()._OrtAppendExecutionProvider(e,i)!==0&&Oo(`Can't append execution provider: ${t}.`)}},Io=e=>{let t=wo(),n=0,r=[],i=e||{};Po(i);try{let e=Mo(i.graphOptimizationLevel??`all`),a=No(i.executionMode??`sequential`),o=typeof i.logId==`string`?Eo(i.logId,r):0,s=i.logSeverityLevel??2;if(!Number.isInteger(s)||s<0||s>4)throw Error(`log serverity level is not valid: ${s}`);let c=i.logVerbosityLevel??0;if(!Number.isInteger(c)||c<0||c>4)throw Error(`log verbosity level is not valid: ${c}`);let l=typeof i.optimizedModelFilePath==`string`?Eo(i.optimizedModelFilePath,r):0;if(n=t._OrtCreateSessionOptions(e,!!i.enableCpuMemArena,!!i.enableMemPattern,a,!!i.enableProfiling,0,o,s,c,l),n===0&&Oo(`Can't create session options.`),i.executionProviders&&Fo(n,i.executionProviders,r),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!=`boolean`)throw Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);let e=Eo(`enableGraphCapture`,r),a=Eo(i.enableGraphCapture.toString(),r);t._OrtAddSessionConfigEntry(n,e,a)!==0&&Oo(`Can't set a session config entry: 'enableGraphCapture' - ${i.enableGraphCapture}.`)}if(i.freeDimensionOverrides)for(let[e,a]of Object.entries(i.freeDimensionOverrides)){if(typeof e!=`string`)throw Error(`free dimension override name must be a string: ${e}`);if(typeof a!=`number`||!Number.isInteger(a)||a<0)throw Error(`free dimension override value must be a non-negative integer: ${a}`);let i=Eo(e,r);t._OrtAddFreeDimensionOverride(n,i,a)!==0&&Oo(`Can't set a free dimension override: ${e} - ${a}.`)}return i.extra!==void 0&&Do(i.extra,``,new WeakSet,(e,i)=>{let a=Eo(e,r),o=Eo(i,r);t._OrtAddSessionConfigEntry(n,a,o)!==0&&Oo(`Can't set a session config entry: ${e} - ${i}.`)}),[n,r]}catch(e){throw n!==0&&t._OrtReleaseSessionOptions(n)!==0&&Oo(`Can't release session options.`),r.forEach(e=>t._free(e)),e}}}),Ro,zo,Bo,Vo,Ho,Uo,Wo,Go,R=L(()=>{Ro=e=>{switch(e){case`int8`:return 3;case`uint8`:return 2;case`bool`:return 9;case`int16`:return 5;case`uint16`:return 4;case`int32`:return 6;case`uint32`:return 12;case`float16`:return 10;case`float32`:return 1;case`float64`:return 11;case`string`:return 8;case`int64`:return 7;case`uint64`:return 13;case`int4`:return 22;case`uint4`:return 21;default:throw Error(`unsupported data type: ${e}`)}},zo=e=>{switch(e){case 3:return`int8`;case 2:return`uint8`;case 9:return`bool`;case 5:return`int16`;case 4:return`uint16`;case 6:return`int32`;case 12:return`uint32`;case 10:return`float16`;case 1:return`float32`;case 11:return`float64`;case 8:return`string`;case 7:return`int64`;case 13:return`uint64`;case 22:return`int4`;case 21:return`uint4`;default:throw Error(`unsupported data type: ${e}`)}},Bo=(e,t)=>{let n=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],r=typeof t==`number`?t:t.reduce((e,t)=>e*t,1);return n>0?Math.ceil(r*n):void 0},Vo=e=>{switch(e){case`float16`:return typeof Float16Array<`u`&&Float16Array.from?Float16Array:Uint16Array;case`float32`:return Float32Array;case`uint8`:return Uint8Array;case`int8`:return Int8Array;case`uint16`:return Uint16Array;case`int16`:return Int16Array;case`int32`:return Int32Array;case`bool`:return Uint8Array;case`float64`:return Float64Array;case`uint32`:return Uint32Array;case`int64`:return BigInt64Array;case`uint64`:return BigUint64Array;default:throw Error(`unsupported type: ${e}`)}},Ho=e=>{switch(e){case`verbose`:return 0;case`info`:return 1;case`warning`:return 2;case`error`:return 3;case`fatal`:return 4;default:throw Error(`unsupported logging level: ${e}`)}},Uo=e=>e===`float32`||e===`float16`||e===`int32`||e===`int64`||e===`uint32`||e===`uint8`||e===`bool`||e===`uint4`||e===`int4`,Wo=e=>e===`float32`||e===`float16`||e===`int32`||e===`int64`||e===`uint32`||e===`uint64`||e===`int8`||e===`uint8`||e===`bool`||e===`uint4`||e===`int4`,Go=e=>{switch(e){case`none`:return 0;case`cpu`:return 1;case`cpu-pinned`:return 2;case`texture`:return 3;case`gpu-buffer`:return 4;case`ml-tensor`:return 5;default:throw Error(`unsupported data location: ${e}`)}}}),Ko,qo=L(()=>{Wa(),Ko=async e=>{if(typeof e==`string`){let t=await fetch(e);if(!t.ok)throw Error(`failed to load external data file: ${e}`);let n=t.headers.get(`Content-Length`),r=n?parseInt(n,10):0;if(r<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw Error(`failed to load external data file: ${e}, no response body.`);let n=t.body.getReader(),i;try{i=new ArrayBuffer(r)}catch(e){if(e instanceof RangeError){let e=Math.ceil(r/65536);i=new WebAssembly.Memory({initial:e,maximum:e}).buffer}else throw e}let a=0;for(;;){let{done:e,value:t}=await n.read();if(e)break;let r=t.byteLength;new Uint8Array(i,a,r).set(t),a+=r}return new Uint8Array(i,0,r)}}return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),Jo,Yo,Xo,Zo,Qo,$o,es,ts=L(()=>{R(),Jo=[`V`,`I`,`W`,`E`,`F`],Yo=(e,t)=>{console.log(`[${Jo[e]},${new Date().toISOString()}]${t}`)},Qo=(e,t)=>{Xo=e,Zo=t},$o=(e,t)=>{let n=Ho(e);n>=Ho(Xo)&&Yo(n,typeof t==`function`?t():t)},es=(...e)=>{Zo&&$o(...e)}}),ns,rs=L(()=>{R(),ns=(e,t)=>new(Vo(t))(e)}),is=L(()=>{}),as,os,ss,cs,ls,us,ds,fs,ps,ms=L(()=>{ts(),is(),as=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),os=[],ss=e=>Math.ceil(Number(e)/16)*16,cs=e=>{for(let t=0;t<os.length;t++){let n=os[t];if(e<=n)return n}return Math.ceil(e/16)*16},ls=1,us=()=>ls++,ds=async(e,t,n,r)=>{let i=ss(n),a=e.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let o=e.getCommandEncoder();e.endComputePass(),o.copyBufferToBuffer(t,0,a,0,i),e.flush(),await a.mapAsync(GPUMapMode.READ);let s=a.getMappedRange();if(r){let e=r();return e.set(new Uint8Array(s,0,n)),e}return new Uint8Array(s.slice(0,n))}finally{a.destroy()}},fs=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[e]of as)os.push(e),this.freeBuffers.set(e,[]),this.freeUniformBuffers.set(e,[]);this.sessionCount=0}upload(e,t){let n=t.buffer,r=t.byteOffset,i=t.byteLength,a=ss(i),o=this.storageCache.get(e);if(!o)throw Error(`gpu data for uploading does not exist`);if(Number(o.originalSize)!==i)throw Error(`inconsistent data size. gpu data size=${o.originalSize}, data size=${i}`);let s=this.backend.device.createBuffer({mappedAtCreation:!0,size:a,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),c=s.getMappedRange();new Uint8Array(c).set(new Uint8Array(n,r,i)),s.unmap();let l=this.backend.device.createCommandEncoder();l.copyBufferToBuffer(s,0,o.gpuData.buffer,0,a),this.backend.device.queue.submit([l.finish()]),s.destroy(),es(`verbose`,()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let n=this.storageCache.get(e);if(!n)throw Error(`source gpu data for memcpy does not exist`);let r=this.storageCache.get(t);if(!r)throw Error(`destination gpu data for memcpy does not exist`);if(n.originalSize!==r.originalSize)throw Error(`inconsistent source and destination gpu data size`);let i=ss(n.originalSize),a=this.backend.getCommandEncoder();this.backend.endComputePass(),a.copyBufferToBuffer(n.gpuData.buffer,0,r.gpuData.buffer,0,i)}registerExternalBuffer(e,t,n){let r;if(n){if(r=n[0],e===n[1])return es(`verbose`,()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, buffer is the same, skip.`),r;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else r=us();return this.storageCache.set(r,{gpuData:{id:r,type:0,buffer:e},originalSize:t}),es(`verbose`,()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, registered.`),r}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),es(`verbose`,()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let n=cs(e),r,i=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,a=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||a){let e=(i?this.freeBuffers:this.freeUniformBuffers).get(n);r=e&&e.length>0?e.pop():this.backend.device.createBuffer({size:n,usage:t})}else r=this.backend.device.createBuffer({size:n,usage:t});let o={id:us(),type:0,buffer:r};return this.storageCache.set(o.id,{gpuData:o,originalSize:Number(e)}),es(`verbose`,()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${o.id}`),o}get(e){return this.storageCache.get(e)?.gpuData}release(e){let t=typeof e==`bigint`?Number(e):e,n=this.storageCache.get(t);if(!n){if(this.storageCache.size===0)return 0;throw Error(`releasing data does not exist`)}return es(`verbose`,()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${n.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(n.gpuData.buffer),n.originalSize}async download(e,t){let n=this.storageCache.get(Number(e));if(!n)throw Error(`data does not exist`);await ds(this.backend,n.gpuData.buffer,n.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0){if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=as.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let n=this.freeBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let n=this.freeUniformBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(e=>{e.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(e=>{e.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(e=>{e.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(e=>{e.destroy()}),this.capturedPendingBuffers.delete(e)),--this.sessionCount,this.sessionCount===0&&(es(`warning`,()=>`[WebGPU] Clearing webgpu buffer cache`),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.storageCache=new Map)}},ps=(...e)=>new fs(...e)}),hs,gs,_s=L(()=>{hs=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(`;`),this.key}},gs=e=>new hs(e)}),vs,ys,z,bs,xs,Ss,Cs,B=L(()=>{vs=class{static calcMatMulShape(e,t){return e[1]===t[0]?[e[0],t[1]]:void 0}},ys=class{static calcShape(e,t,n=!1){let r=e.length,i=t.length;if(r===0)return t;if(i===0)return e;let a=Math.max(e.length,t.length),o=Array(a);if(n){if(r<2||i<2)return;let n=vs.calcMatMulShape([e[r-2],e[r-1]],[t[i-2],t[i-1]]);if(n===void 0)return;[o[a-2],o[a-1]]=n}for(let s=n?3:1;s<=a;s++){let n=r-s<0?1:e[r-s],c=i-s<0?1:t[i-s];if(n!==c&&n>1&&c>1)return;let l=Math.max(n,c);if(n&&c)o[a-s]=Math.max(n,c);else{if(l>1)return;o[a-s]=0}}return o}static isValidBroadcast(e,t){let n=e.length,r=t.length;if(n>r)return!1;for(let i=1;i<=n;i++)if(e[n-i]!==1&&e[n-i]!==t[r-i])return!1;return!0}},z=class e{static size(t){return e.getSizeFromDimensionRange(t,0,t.length)}static convertShape(e,t=4){let n=e.length;if(n===0)return[];let r=Array(n),i=n-1;for(;i>=0;){if(e[i]%t===0){r[i]=e[i]/t;break}if(t%e[i]!==0)throw Error(`cannot convert shape`);r[i]=1,t/=e[i],i--}for(i--;i>=0;i--)r[i]=e[i];return r}static sizeFromDimension(t,n){if(n<0||n>t.length)throw Error(`invalid dimension of ${n} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return e.getSizeFromDimensionRange(t,n,t.length)}static sizeToDimension(t,n){if(n<0||n>t.length)throw Error(`invalid dimension of ${n} for sizeToDimension as Tensor has ${t.length} dimensions.`);return e.getSizeFromDimensionRange(t,0,n)}static getSizeFromDimensionRange(e,t,n){let r=1;for(let i=t;i<n;i++){if(e[i]<0)throw Error(`cannot get valid size from specified dimension range. Most likely the range contains negative values in them.`);r*=Number(e[i])}return r}static computeStrides(e){let t=e.length;if(t===0)return[];if(t===1)return[1];let n=Array(t);n[t-1]=1,n[t-2]=e[t-1];for(let r=t-3;r>=0;--r)n[r]=n[r+1]*e[r+1];return n}static normalizeAxis(e,t){if(e<-t&&e>=t)throw Error(`unsupported axis for this operation.`);return e<0?e+t:e}static normalizeAxes(e,t){return e.map(n=>this.normalizeAxis(n,t??e.length))}static sortBasedOnPerm(e,t){return t?t.map(t=>e[t]):e.slice().reverse()}static padShape(e,t){let n=e.length;return e.map((e,r)=>e+t[r]+t[r+n])}static areEqual(e,t){return e.length===t.length&&e.every((e,n)=>e===t[n])}},bs=class e{static adjustPoolAttributes(e,t,n,r,i,a){if(!e&&n.length!==t.length-2)throw Error(`length of specified kernel shapes should be 2 less than length of input dimensions`);if(e)for(let e=0;e<t.length-2;e++)e>=n.length?n.push(t[e+2]):n[e]=t[e+2];for(let e=0;e<n.length;e++)if(e<r.length){if(r[e]<0)throw Error(`strides should be greater than or equal to 1`)}else r.push(1);for(let e=0;e<n.length;e++)if(e<i.length){if(i[e]<0)throw Error(`dilations should be greater than or equal to 1`)}else i.push(1);for(let e=0;e<n.length*2;e++)if(e<a.length){if(a[e]<0)throw Error(`pad should be greater than or equal to 1`)}else a.push(0);for(let e=0;e<n.length;e++){if(n[e]<=0)throw Error(`kernel shapes need to be greater than 0`);if(a[e]>=n[e]||a[e+n.length]>=n[e])throw Error(`pads should be smaller than kernel`)}}static adjustPadsBasedOnAutoPad(t,n,r,i,a,o,s){if(s){if(a.length!==2*(t.length-2))throw Error(`length of pads should be twice the length of data dimensions`);if(n.length!==t.length-2)throw Error(`length of strides should be the length of data dimensions`);if(i.length!==t.length-2)throw Error(`length of kernel shapes should be the length of data dimensions`);for(let c=0;c<t.length-2;c++)e.adjustPadAndReturnShape(t[c+(o?1:2)],n[c],r[c],i[c],a,c,c+t.length-2,s)}}static computePoolOutputShape(t,n,r,i,a,o,s){if(n.length<=0)throw Error(`input shape must be of size greater than 0`);let c=[n[0],n[1]];return e.computeShapeHelper(t,n,c,r,i,a,o,s),c}static computeConvOutputShape(t,n,r,i,a,o,s){if(t.length<=0||n.length<=0)throw Error(`invalid input tensor dims or invalid filter tensor dims`);let c=[t[0],n[0]];return e.computeShapeHelper(!1,t,c,r,i,a,o,s),c}static computeShapeHelper(t,n,r,i,a,o,s,c){if(t)for(let e=0;e<n.length-2;e++)r.push(1);else for(let t=0;t<n.length-2;t++)r.push(e.adjustPadAndReturnShape(n[t+2],i[t],a[t],o[t],s,t,t+n.length-2,c))}static adjustPadAndReturnShape(e,t,n,r,i,a,o,s){let c=n*(r-1)+1;if(s&&s!==`NOTSET`)switch(s){case`VALID`:return i[a]=0,i[o]=0,Math.floor((e-c)/t+1);case`SAME_LOWER`:case`SAME_UPPER`:if(n!==1)throw Error(`Dilation not supported for SAME_UPPER or SAME_LOWER`);{let n=((e+t-1)/t-1)*t+r-e;return i[a]=Math.floor(s===`SAME_LOWER`?(n+1)/2:n/2),i[o]=n-i[a],Math.floor((e+n-r)/t+1)}default:throw Error(`Unsupported AutoPad type`)}else return Math.floor((e+i[a]+i[o]-c)/t+1)}},xs=class{static getShapeOfGemmResult(e,t,n,r,i){if(e.length!==2||n.length!==2)throw Error(`shape need to be of size 2`);let a,o,s;t?(a=e[1],o=e[0]):(a=e[0],o=e[1]);let c=-1;if(r?(s=n[0],c=1):(s=n[1],c=0),n[c]!==o)throw Error(`dimension mismatch`);if(a<=0||s<=0||o<=0)throw Error(`invalid shape specified`);if(i&&!ys.isValidBroadcast(i,[a,s]))throw Error(`gemm: invalid bias shape for broadcast`);return[a,s,o]}},Ss=-34028234663852886e22,Cs=34028234663852886e22}),ws,Ts,Es,Ds,V,Os,ks,As,js,H,Ms,U,W,Ns,Ps,Fs,Is,G=L(()=>{R(),B(),ws=64,Ts=(e,t)=>{if(t===3)throw Error(`vec3 has same alignment as vec4, use vec4 instead`);switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:`f16`;case 1:return t>1?`vec${t}<f32>`:`f32`;case 6:return t>1?`vec${t}<i32>`:`i32`;case 12:return t>1?`vec${t}<u32>`:`u32`;case 7:if(t>1)throw Error(`currently not supported vecX of uint64 yet`);return[`vec2<u32>`,`i32`];case 13:if(t>1)throw Error(`currently not supported vecX of uint64 yet`);return[`vec2<u32>`,`u32`];case 9:if(t!==4)throw Error(`bool must be vec4`);return[`u32`,`vec4<bool>`];case 22:return`i32`;case 21:return`u32`;default:throw Error(`Unknown data type: ${e}`)}},Es=(e,t=1)=>{let n=Ts(e,t);return typeof n==`string`?n:n[0]},Ds=(e,t=1)=>{let n=Ts(e,t);return typeof n==`string`?n:n[1]},V=(...e)=>{let t=[];return e.forEach(e=>{e.length!==0&&t.push({type:12,data:e},{type:12,data:z.computeStrides(e)})}),t},Os=e=>e%4==0?4:e%2==0?2:1,ks=(e=`f32`,t,n=`0`)=>!t||t===1?`${e}(${n})`:`vec${t}<${e}>(${n})`,As=(e,t,n)=>e===`f32`?n:t===1?`f32(${n})`:`vec${t}<f32>(${n})`,js=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,H=(e,t,n,r)=>e.startsWith(`uniforms.`)&&n>4?typeof t==`string`?r===`f16`?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:r===`f16`?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:n>1?`${e}[${t}]`:e,Ms=(e,t,n,r,i)=>{let a=typeof n==`number`,o=a?n:n.length,s=[...Array(o).keys()],c=o<2?`u32`:o<=4?`vec${o}<u32>`:`array<u32, ${o}>`,l=Ts(t,i),u=typeof l==`string`?l:l[1],d={indices:c,value:u,storage:typeof l==`string`?l:l[0],tensor:t},f=e=>typeof e==`string`?e:`${e}u`,p={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},m=a?`uniforms.`:``,h=`${m}${e}_shape`,g=`${m}${e}_strides`,_=``;for(let e=0;e<o-1;e++)_+=`
    let dim${e} = current / ${H(g,e,o)};
    let rest${e} = current % ${H(g,e,o)};
    indices[${e}] = dim${e};
    current = rest${e};
    `;_+=`indices[${o-1}] = current;`;let v=o<2?``:`
  fn o2i_${e}(offset: u32) -> ${d.indices} {
    var indices: ${d.indices};
    var current = offset;
    ${_}
    return indices;
  }`,y=t=>(p.offsetToIndices=!0,o<2?t:`o2i_${e}(${t})`),b=[];if(o>=2)for(let e=o-1;e>=0;e--)b.push(`${H(g,e,o)} * (indices[${e}])`);let x=o<2?``:`
  fn i2o_${e}(indices: ${d.indices}) -> u32 {
    return ${b.join(`+`)};
  }`,S=t=>(p.indicesToOffset=!0,o<2?t:`i2o_${e}(${t})`),ee=(...e)=>o===0?`0u`:`${d.indices}(${e.map(f).join(`,`)})`,te=(e,t)=>o<2?`${e}`:`${H(e,t,o)}`,ne=(e,t,n)=>o<2?`${e}=${n};`:`${H(e,t,o)}=${n};`,re={},ie=(t,n)=>{p.broadcastedIndicesToOffset=!0;let r=`${n.name}broadcastedIndicesTo${e}Offset`;if(r in re)return`${r}(${t})`;let i=[];for(let e=o-1;e>=0;e--){let t=n.indicesGet(`outputIndices`,e+n.rank-o);i.push(`${te(g,e)} * (${t} % ${te(h,e)})`)}return re[r]=`fn ${r}(outputIndices: ${n.type.indices}) -> u32 {
             return ${i.length>0?i.join(`+`):`0u`};
           }`,`${r}(${t})`},ae=(t,n)=>(()=>{if(d.storage===d.value)return`${e}[${t}]=${n};`;if(d.storage===`vec2<u32>`&&d.value===`i32`)return`${e}[${t}]=vec2<u32>(u32(${n}), select(0u, 0xFFFFFFFFu, ${n} < 0));`;if(d.storage===`vec2<u32>`&&d.value===`u32`)return`${e}[${t}]=vec2<u32>(u32(${n}), 0u);`;if(d.storage===`u32`&&d.value===`vec4<bool>`)return`${e}[${t}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${n}));`;throw Error(`not supported combination of storage type ${d.storage} and value type ${d.value} yet`)})(),C=t=>(()=>{if(d.storage===d.value)return`${e}[${t}]`;if(d.storage===`vec2<u32>`&&d.value===`i32`)return`i32(${e}[${t}].x)`;if(d.storage===`vec2<u32>`&&d.value===`u32`)return`u32(${e}[${t}].x)`;if(d.storage===`u32`&&d.value===`vec4<bool>`)return`vec4<bool>(bool(${e}[${t}] & 0xFFu), bool(${e}[${t}] & 0xFF00u), bool(${e}[${t}] & 0xFF0000u), bool(${e}[${t}] & 0xFF000000u))`;throw Error(`not supported combination of storage type ${d.storage} and value type ${d.value} yet`)})(),oe=o<2?``:`
  fn get_${e}ByIndices(indices: ${d.indices}) -> ${u} {
    return ${C(`i2o_${e}(indices)`)};
  }`,se=o<2?``:(()=>{let t=s.map(e=>`d${e}: u32`).join(`, `),n=s.map(e=>`d${e}`).join(`, `);return`
  fn get_${e}(${t}) -> ${u} {
    return get_${e}ByIndices(${ee(n)});
  }`})(),ce=(...t)=>{if(t.length!==o)throw Error(`indices length must be ${o}`);let n=t.map(f).join(`,`);return o===0?C(`0u`):o===1?C(n[0]):(p.get=!0,p.getByIndices=!0,p.indicesToOffset=!0,`get_${e}(${n})`)},le=t=>o<2?C(t):(p.getByIndices=!0,p.indicesToOffset=!0,`get_${e}ByIndices(${t})`),ue=o<2?``:`
  fn set_${e}ByIndices(indices: ${d.indices}, value: ${u}) {
    ${ae(`i2o_${e}(indices)`,`value`)}
  }`,de=o<2?``:(()=>{let t=s.map(e=>`d${e}: u32`).join(`, `),n=s.map(e=>`d${e}`).join(`, `);return`
  fn set_${e}(${t}, value: ${u}) {
    set_${e}ByIndices(${ee(n)}, value);
  }`})();return{impl:()=>{let e=[],t=!1;return p.offsetToIndices&&(e.push(v),t=!0),p.indicesToOffset&&(e.push(x),t=!0),p.broadcastedIndicesToOffset&&(Object.values(re).forEach(t=>e.push(t)),t=!0),p.set&&(e.push(de),t=!0),p.setByIndices&&(e.push(ue),t=!0),p.get&&(e.push(se),t=!0),p.getByIndices&&(e.push(oe),t=!0),!a&&t&&e.unshift(`const ${h} = ${d.indices}(${n.join(`,`)});`,`const ${g} = ${d.indices}(${z.computeStrides(n).join(`,`)});`),e.join(`
`)},type:d,offsetToIndices:y,indicesToOffset:S,broadcastedIndicesToOffset:ie,indices:ee,indicesGet:te,indicesSet:ne,set:(...t)=>{if(t.length!==o+1)throw Error(`indices length must be ${o}`);let n=t[o];if(typeof n!=`string`)throw Error(`value must be string`);let r=t.slice(0,o).map(f).join(`,`);return o===0?ae(`0u`,n):o===1?ae(r[0],n):(p.set=!0,p.setByIndices=!0,p.indicesToOffset=!0,`set_${e}(${r}, ${n})`)},setByOffset:ae,setByIndices:(t,n)=>o<2?ae(t,n):(p.setByIndices=!0,p.indicesToOffset=!0,`set_${e}ByIndices(${t}, ${n});`),get:ce,getByOffset:C,getByIndices:le,usage:r,name:e,strides:g,shape:h,rank:o}},U=(e,t,n,r=1)=>Ms(e,t,n,`input`,r),W=(e,t,n,r=1)=>Ms(e,t,n,`output`,r),Ns=(e,t,n)=>Ms(e,t,n,`atomicOutput`,1),Ps=(e,t,n,r=1)=>Ms(e,t,n,`internal`,r),Fs=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e==`number`?`${e}u`:e}) { return; }`}mainStart(e=ws){let t=typeof e==`number`?e:e[0],n=typeof e==`number`?1:e[1],r=typeof e==`number`?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||n>this.limits.maxComputeWorkgroupSizeY||r>this.limits.maxComputeWorkgroupSizeZ)throw Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*n*r>this.limits.maxComputeInvocationsPerWorkgroup)throw Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1;return`@compute @workgroup_size(${t}, ${n}, ${r})
  fn main(${i?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`}) {
    ${i?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*n*r}u + local_idx;`}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith(`uniforms.`)&&this.uniforms.push({name:e.shape.replace(`uniforms.`,``),type:`u32`,length:e.rank}),e.strides.startsWith(`uniforms.`)&&this.uniforms.push({name:e.strides.replace(`uniforms.`,``),type:`u32`,length:e.rank}))}declareVariable(e,t){if(e.usage===`internal`)throw Error(`cannot use internal variable with declareVariable(). use registerInternalVariables() instead.`);this.variables.push(e),this.appendVariableUniforms(e);let n=e.usage===`input`?`read`:`read_write`,r=e.usage===`atomicOutput`?`atomic<i32>`:e.type.storage;return`@group(0) @binding(${t}) var<storage, ${n}> ${e.name}: array<${r}>;`}declareVariables(...e){return e.map(e=>this.declareVariable(e,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!==`internal`)throw Error(`cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.`);this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(e=>this.registerInternalVariable(e)),this}registerUniform(e,t,n=1){return this.uniforms.push({name:e,type:t,length:n}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return``;let e=[];for(let{name:t,type:n,length:r}of this.uniforms)if(r&&r>4)n===`f16`?e.push(`@align(16) ${t}:array<mat2x4<${n}>, ${Math.ceil(r/8)}>`):e.push(`${t}:array<vec4<${n}>, ${Math.ceil(r/4)}>`);else{let i=r==null||r===1?n:`vec${r}<${n}>`;e.push(`${t}:${i}`)}return`
      struct Uniforms { ${e.join(`, `)} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=e=>[12,10,1,6][[`u32`,`f16`,`f32`,`i32`].indexOf(e)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Is=(e,t)=>new Fs(e,t)}),Ls,Rs,zs,Bs,Vs,Hs,Us,Ws,Gs,Ks=L(()=>{R(),B(),_s(),G(),Ls=(e,t)=>{if(!e||e.length!==1)throw Error(`Transpose requires 1 input.`);if(t.length!==0&&t.length!==e[0].dims.length)throw Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},Rs=(e,t)=>t.length===0?[...Array(e).keys()].reverse():t,zs=(e,t)=>z.sortBasedOnPerm(e,Rs(e.length,t)),Bs=(e,t,n,r)=>{let i=`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`;for(let n=0;n<t;++n)i+=`a[${e[n]}]=i[${n}];`;return i+=`return a;}`},Vs=(e,t)=>{let n=[],r=[];for(let i=0;i<e.length;++i)e[i]!==1&&n.push(e[i]),e[t[i]]!==1&&r.push(t[i]);return{newShape:n,newPerm:r}},Hs=(e,t)=>{let n=0;for(let r=0;r<e.length;++r)if(t[e[r]]!==1){if(e[r]<n)return!1;n=e[r]}return!0},Us=(e,t)=>{let n=e.dataType,r=e.dims.length,i=Rs(r,t),a=zs(e.dims,i),o=e.dims,s=a,c=r<2||Hs(i,e.dims),l;if(c)return l=e=>{let t=U(`input`,n,o,4),r=W(`output`,n,s,4);return`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(t,r)}
  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    output[global_idx] = input[global_idx];
  }`},{name:`TransposeCopy`,shaderCache:{inputDependencies:[`type`]},getRunData:()=>{let t=z.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(t/64/4)},programUniforms:[{type:12,data:Math.ceil(t/4)}]}},getShaderSource:l};let{newShape:u,newPerm:d}=Vs(e.dims,i),f=z.areEqual(d,[2,3,1]),p=z.areEqual(d,[3,1,2]);return u.length===2||f||p?(o=f?[u[0],u[1]*u[2]]:p?[u[0]*u[1],u[2]]:u,s=[o[1],o[0]],l=e=>{let t=U(`a`,n,o.length),r=W(`output`,n,s.length);return`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(t,r)}
  var<workgroup> tile : array<array<${r.type.value}, 17>, 16>;
  ${e.mainStart([16,16,1])}
    let stride = (uniforms.output_shape[1] - 1) / 16 + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * 16u + local_id.x;
    let input_row = workgroup_id_x * 16u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${t.getByIndices(`${t.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * 16u + local_id.x;
    let output_row = workgroup_id_y * 16u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${r.setByIndices(`${r.type.indices}(output_row, output_col)`,`tile[local_id.x][local_id.y]`)}
    }
  }`},{name:`TransposeShared`,shaderCache:{inputDependencies:[`type`]},getRunData:()=>{let t=z.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(s[1]/16),y:Math.ceil(s[0]/16)},programUniforms:[{type:12,data:t},...V(o,s)]}},getShaderSource:l}):(l=e=>{let t=U(`a`,n,o.length),a=W(`output`,n,s.length);return`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(t,a)}

  ${Bs(i,r,t,a)}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}

    let indices = ${a.offsetToIndices(`global_idx`)};
    let aIndices = perm(indices);

    ${a.setByOffset(`global_idx`,t.getByIndices(`aIndices`))}
  }`},{name:`Transpose`,shaderCache:{hint:`${t}`,inputDependencies:[`rank`]},getRunData:()=>{let t=z.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(t/64)},programUniforms:[{type:12,data:t},...V(o,s)]}},getShaderSource:l})},Ws=(e,t)=>{Ls(e.inputs,t.perm),e.compute(Us(e.inputs[0],t.perm))},Gs=e=>gs({perm:e.perm})}),qs,Js,Ys,Xs,Zs,Qs,$s,ec,tc,nc,rc,ic,ac,oc,sc,cc,lc,uc,dc,fc,pc,mc=L(()=>{R(),B(),G(),Vc(),Ks(),qs={max:`select(bestValue, candidate, candidate > bestValue)`,min:`select(bestValue, candidate, candidate < bestValue)`,mean:`bestValue + candidate`,sum:`bestValue + candidate`,prod:`bestValue * candidate`,sumSquare:`bestValue + candidate * candidate`,logSumExp:`bestValue + exp(candidate)`,l1:`bestValue + abs(candidate)`,l2:`bestValue + candidate * candidate`,logSum:`bestValue + candidate`},Js={max:`select(bestValue, candidate, candidate > bestValue)`,min:`select(bestValue, candidate, candidate < bestValue)`,mean:`bestValue + candidate`,sum:`bestValue + candidate`,prod:`bestValue * candidate`,sumSquare:`bestValue + candidate`,logSumExp:`bestValue + candidate`,l1:`bestValue + candidate`,l2:`bestValue + candidate`,logSum:`bestValue + candidate`},Ys={max:`_A[offset]`,min:`_A[offset]`,mean:`0`,sum:`0`,prod:`1`,sumSquare:`0`,logSumExp:`0`,l1:`0`,l2:`0`,logSum:`0`},Xs={max:`bestValue`,min:`bestValue`,sum:`bestValue`,prod:`bestValue`,sumSquare:`bestValue`,logSumExp:`log(bestValue)`,l1:`bestValue`,l2:`sqrt(bestValue)`,logSum:`log(bestValue)`},Zs=(e,t)=>{let n=[];for(let r=t-e;r<t;++r)n.push(r);return n},Qs=(e,t)=>{let n=[],r=e.length;for(let i=0;i<r;i++)t.indexOf(i)===-1&&n.push(e[i]);return[n,t.map(t=>e[t])]},$s=(e,t)=>{let n=e.length+t.length,r=[],i=0;for(let a=0;a<n;a++)t.indexOf(a)===-1?r.push(e[i++]):r.push(1);return r},ec=(e,t)=>{for(let n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0},tc=(e,t)=>{let n=[];if(!ec(e,t)){for(let r=0;r<t;++r)e.indexOf(r)===-1&&n.push(r);e.forEach(e=>n.push(e))}return n},nc=(e,t,n,r,i,a,o)=>{let s=n[0].dims,c=z.size(a),l=z.size(o),u=U(`_A`,n[0].dataType,s),d=W(`output`,i,a),f=64;c===1&&(f=256);let p=`
          var<workgroup> aBestValues : array<f32, ${f}>;
       `;return{name:e,shaderCache:{hint:`${t};${f}`,inputDependencies:[`type`]},getShaderSource:e=>`
        ${e.registerUniform(`reduceSize`,`u32`).declareVariables(u,d)}
        ${p}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${e.mainStart(f)}

          let outputIndex = global_idx / ${f};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Ys[r]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${f}) {
           let candidate = f32(${u.getByOffset(`offset + k`)});
           bestValue = ${qs[r]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${f}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Js[r]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${d.setByOffset(`outputIndex`,`${r===`mean`?`${d.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${d.type.storage}(${Xs[r]})`}`)};
         }
        }`,getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:c},programUniforms:[{type:12,data:l}]})}},rc=(e,t,n,r)=>{let i=e.inputs.length===1?n:vc(e.inputs,n),a=i.axes;a.length===0&&!i.noopWithEmptyAxes&&(a=e.inputs[0].dims.map((e,t)=>t));let o=z.normalizeAxes(a,e.inputs[0].dims.length),s=o,c=e.inputs[0],l=tc(s,e.inputs[0].dims.length);l.length>0&&(c=e.compute(Us(e.inputs[0],l),{inputs:[0],outputs:[-1]})[0],s=Zs(s.length,c.dims.length));let[u,d]=Qs(c.dims,s),f=u;i.keepDims&&(f=$s(u,o)),e.compute(nc(t,i.cacheKey,[c],r,e.inputs[0].dataType,f,d),{inputs:[c]})},ic=(e,t)=>{rc(e,`ReduceMeanShared`,t,`mean`)},ac=(e,t)=>{rc(e,`ReduceL1Shared`,t,`l1`)},oc=(e,t)=>{rc(e,`ReduceL2Shared`,t,`l2`)},sc=(e,t)=>{rc(e,`ReduceLogSumExpShared`,t,`logSumExp`)},cc=(e,t)=>{rc(e,`ReduceMaxShared`,t,`max`)},lc=(e,t)=>{rc(e,`ReduceMinShared`,t,`min`)},uc=(e,t)=>{rc(e,`ReduceProdShared`,t,`prod`)},dc=(e,t)=>{rc(e,`ReduceSumShared`,t,`sum`)},fc=(e,t)=>{rc(e,`ReduceSumSquareShared`,t,`sumSquare`)},pc=(e,t)=>{rc(e,`ReduceLogSumShared`,t,`logSum`)}}),hc,gc,_c,vc,yc,bc,xc,Sc,Cc,wc,Tc,Ec,Dc,Oc,kc,Ac,jc,Mc,Nc,Pc,Fc,Ic,Lc,Rc,zc,Bc,Vc=L(()=>{R(),B(),_s(),G(),mc(),hc=e=>{if(!e||e.length===0||e.length>2)throw Error(`Reduce op requires 1 or 2 inputs.`);if(e.length===2&&e[1].dims.length!==1)throw Error(`Invalid axes input dims.`)},gc=e=>[``,``,`var value = ${e.getByIndices(`input_indices`)};`,``],_c=(e,t,n,r,i,a,o=!1,s=!1)=>{let c=[],l=n[0].dims,u=l.length,d=z.normalizeAxes(i,u),f=!s&&d.length===0;l.forEach((e,t)=>{f||d.indexOf(t)>=0?o&&c.push(1):c.push(e)});let p=c.length,m=z.size(c);return{name:e,shaderCache:t,getShaderSource:e=>{let t=[],i=U(`_A`,n[0].dataType,u),s=W(`output`,a,p),c=r(i,s,d),m=c[2];for(let e=0,n=0;e<u;e++)f||d.indexOf(e)>=0?(o&&n++,m=`for(var j${e}: u32 = 0; j${e} < ${l[e]}; j${e}++) {
                  ${c[2].includes(`last_index`)?`let last_index = j${e};`:``}
                  ${i.indicesSet(`input_indices`,e,`j${e}`)}
                  ${m}
                }`):(t.push(`${i.indicesSet(`input_indices`,e,s.indicesGet(`output_indices`,n))};`),n++);return`

        ${e.registerUniform(`output_size`,`u32`).declareVariables(i,s)}

        ${e.mainStart()}
          ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
          var input_indices: ${i.type.indices};
          let output_indices = ${s.offsetToIndices(`global_idx`)};

          ${t.join(`
`)}
          ${c[0]}       // init ops for reduce max/min
          ${c[1]}
          ${m}
          ${c[3]}
          ${c.length===4?s.setByOffset(`global_idx`,`value`):c.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:c,dataType:a}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},...V(l,c)]})}},vc=(e,t)=>{let n=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(e=>n.push(Number(e))),gs({axes:n,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},yc=(e,t,n,r)=>{let i=e.inputs,a=i.length===1?n:vc(i,n);e.compute(_c(t,{hint:a.cacheKey,inputDependencies:[`rank`]},[i[0]],a.noopWithEmptyAxes&&a.axes.length===0?gc:r,a.axes,i[0].dataType,a.keepDims,a.noopWithEmptyAxes),{inputs:[0]})},bc=(e,t)=>{hc(e.inputs),yc(e,`ReduceLogSum`,t,(e,t)=>[`var value = ${t.type.storage}(0);`,``,`value += ${e.getByIndices(`input_indices`)};`,`value = log(value);`])},xc=(e,t)=>{hc(e.inputs),yc(e,`ReduceL1`,t,(e,t)=>[`var value = ${t.type.storage}(0);`,``,`value += abs(${e.getByIndices(`input_indices`)});`,``])},Sc=(e,t)=>{hc(e.inputs),yc(e,`ReduceL2`,t,(e,t)=>[`var t = ${t.type.value}(0); var value = ${t.type.value}(0);`,``,`t = ${e.getByIndices(`input_indices`)}; value += (t * t);`,`value = sqrt(value);`])},Cc=(e,t)=>{hc(e.inputs),yc(e,`ReduceLogSumExp`,t,(e,t)=>[`var value = ${t.type.storage}(0);`,``,`value += exp(${e.getByIndices(`input_indices`)});`,`value = log(value);`])},wc=(e,t)=>{hc(e.inputs),yc(e,`ReduceMax`,t,(e,t,n)=>{let r=[];for(let t=0;t<e.rank;t++)(n.indexOf(t)>=0||n.length===0)&&r.push(e.indicesSet(`input_indices`,t,0));return[`${r.join(`
`)}`,`var value = ${e.getByIndices(`input_indices`)};`,`value = max(value, ${e.getByIndices(`input_indices`)});`,``]})},Tc=(e,t)=>{hc(e.inputs),yc(e,`ReduceMean`,t,(t,n,r)=>{let i=1;for(let n=0;n<t.rank;n++)(r.indexOf(n)>=0||r.length===0)&&(i*=e.inputs[0].dims[n]);return[`var sum = f32(0);`,``,`sum += f32(${t.getByIndices(`input_indices`)});`,`let value = ${n.type.value}(sum / ${i});`]})},Ec=(e,t)=>{hc(e.inputs),yc(e,`ReduceMin`,t,(e,t,n)=>{let r=[];for(let t=0;t<e.rank;t++)(n.indexOf(t)>=0||n.length===0)&&r.push(`input_indices[${t}] = 0;`);return[`${r.join(`
`)}`,`var value = ${e.getByIndices(`input_indices`)};`,`value = min(value, ${e.getByIndices(`input_indices`)});`,``]})},Dc=(e,t)=>{hc(e.inputs),yc(e,`ReduceProd`,t,(e,t)=>[`var value = ${t.type.storage}(1);`,``,`value *= ${e.getByIndices(`input_indices`)};`,``])},Oc=(e,t)=>{hc(e.inputs),yc(e,`ReduceSum`,t,(e,t)=>[`var value = ${t.type.storage}(0);`,``,`value += ${e.getByIndices(`input_indices`)};`,``])},kc=(e,t)=>{hc(e.inputs),yc(e,`ReduceSumSquare`,t,(e,t)=>[`var t = ${t.type.value}(0); var value = ${t.type.value}(0);`,``,`t = ${e.getByIndices(`input_indices`)}; value += t * t;`,``])},Ac=(e,t,n)=>{if(t.length===0)return n;let r=1,i=1;for(let n=0;n<t.length;n++)t.indexOf(n)===-1?r*=e[n]:i*=e[n];return i<32&&r>1024},jc=(e,t)=>{Ac(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Tc(e,t):ic(e,t)},Mc=(e,t)=>{Ac(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?xc(e,t):ac(e,t)},Nc=(e,t)=>{Ac(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Sc(e,t):oc(e,t)},Pc=(e,t)=>{Ac(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Cc(e,t):sc(e,t)},Fc=(e,t)=>{Ac(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?wc(e,t):cc(e,t)},Ic=(e,t)=>{Ac(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ec(e,t):lc(e,t)},Lc=(e,t)=>{Ac(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Dc(e,t):uc(e,t)},Rc=(e,t)=>{Ac(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Oc(e,t):dc(e,t)},zc=(e,t)=>{Ac(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?kc(e,t):fc(e,t)},Bc=(e,t)=>{Ac(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?bc(e,t):pc(e,t)}}),Hc,Uc,Wc,Gc,Kc=L(()=>{R(),_s(),Vc(),Hc=e=>{if(!e||e.length===0||e.length>2)throw Error(`ArgMinMaxOp op requires 1 or 2 inputs.`);if(e[0].dataType!==1)throw Error(`Invalid input type.`)},Uc=(e,t)=>{Hc(e.inputs),e.compute(_c(`ArgMin`,{hint:t.cacheKey,inputDependencies:[`rank`]},[e.inputs[0]],(e,n,r)=>{let i=[];for(let t=0;t<e.rank;t++)(r.indexOf(t)>=0||r.length===0)&&i.push(`input_indices[${t}] = 0;`);return[`${i.join(`
`)}`,`var value = ${e.getByIndices(`input_indices`)};
var best_index : i32 = 0;`,`if (${e.getByIndices(`input_indices`)} ${t.selectLastIndex>0?`<=`:`<`} value) {
         value = ${e.getByIndices(`input_indices`)};
         best_index = i32(last_index);
       }`,``,n.setByOffset(`global_idx`,`best_index`)]},[t.axis],7,t.keepDims),{inputs:[0]})},Wc=(e,t)=>{Hc(e.inputs),e.compute(_c(`argMax`,{hint:t.cacheKey,inputDependencies:[`rank`]},[e.inputs[0]],(e,n,r)=>{let i=[];for(let t=0;t<e.rank;t++)(r.indexOf(t)>=0||r.length===0)&&i.push(`input_indices[${t}] = 0;`);return[`${i.join(`
`)}`,`var value = ${e.getByIndices(`input_indices`)};
var best_index : i32 = 0;`,`if (${e.getByIndices(`input_indices`)} ${t.selectLastIndex>0?`>=`:`>`} value) {
         value = ${e.getByIndices(`input_indices`)};
         best_index = i32(last_index);
       }`,``,n.setByOffset(`global_idx`,`best_index`)]},[t.axis],7,t.keepDims),{inputs:[0]})},Gc=e=>gs(e)}),qc,Jc,Yc,Xc,Zc,Qc,$c,el,tl=L(()=>{R(),B(),is(),G(),qc=(e,t)=>{let n=e[0],r=e[1],i=e[2],a=e[3],o=e[4],s=e[5];if(o&&s)throw Error(`Attention cannot have both past and attention_bias`);if(n.dims.length!==3)throw Error(`Input "input" must have 3 dimensions`);let c=n.dims[0],l=n.dims[1],u=n.dims[2];if(i.dims.length!==1)throw Error(`Input "bias" is expected to have 1 dimensions`);if(r.dims.length!==2)throw Error(`Input "weights" is expected to have 2 dimensions`);if(r.dims[0]!==u)throw Error(`Input 1 dimension 0 should have same length as dimension 2 of input 0`);if(i.dims[0]!==r.dims[1])throw Error(`Input "bias" dimension 0 should have same length as dimension 1 of input "weights"`);let d=i.dims[0]/3,f=d,p=f;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw Error(`qkv_hidden_sizes attribute should have 3 elements`);for(let e of t.qkvHiddenSizes)if(e%t.numHeads!==0)throw Error(`qkv_hidden_sizes should be divisible by num_heads`);d=t.qkvHiddenSizes[0],f=t.qkvHiddenSizes[1],p=t.qkvHiddenSizes[2]}let m=l;if(d!==f)throw Error(`qkv_hidden_sizes first element should be same as the second`);if(i.dims[0]!==d+f+p)throw Error(`Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes`);let h=0;if(o){if(f!==p)throw Error(`Input "past" expect k_hidden_size == v_hidden_size`);if(o.dims.length!==5)throw Error(`Input "past" must have 5 dimensions`);if(o.dims[0]!==2)throw Error(`Input "past" first dimension must be 2`);if(o.dims[1]!==c)throw Error(`Input "past" second dimension must be batch_size`);if(o.dims[2]!==t.numHeads)throw Error(`Input "past" third dimension must be num_heads`);if(o.dims[4]!==f/t.numHeads)throw Error(`Input "past" fifth dimension must be k_hidden_size / num_heads`);t.pastPresentShareBuffer||(h=o.dims[3])}let g=m+h;if(a)throw Error(`Mask not supported`);if(o)throw Error(`past is not supported`);if(s){if(s.dims.length!==4)throw Error(`Input "attention_bias" must have 4 dimensions`);if(s.dims[0]!==c||s.dims[1]!==t.numHeads||s.dims[2]!==l||s.dims[3]!==g)throw Error(`Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)`)}return{batchSize:c,sequenceLength:l,pastSequenceLength:h,kvSequenceLength:m,totalSequenceLength:g,maxSequenceLength:-1,inputHiddenSize:u,hiddenSize:d,vHiddenSize:p,headSize:Math.floor(d/t.numHeads),vHeadSize:Math.floor(p/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:0,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Jc=(e,t,n)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset(`0`)});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e?.getByOffset(`batchIdx`)}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${n?`let past_sequence_length = uniforms.past_sequence_length`:``};
    let present_sequence_length = total_sequence_length;
    `,Yc=(e,t,n,r,i,a,o,s)=>{let c=Os(o?1:a),l=64,u=a/c;u<l&&(l=32);let d=Math.ceil(a/c/l),f=[{type:12,data:t},{type:12,data:n},{type:12,data:r},{type:12,data:i},{type:12,data:u},{type:12,data:d}],p=Es(e.dataType,c),m=Ds(1,c),h=[`type`];return o&&h.push(`type`),s&&h.push(`type`),{name:`AttentionProbsSoftmax`,shaderCache:{hint:`${l};${p};${c}`,inputDependencies:h},getShaderSource:t=>{let n=W(`x`,e.dataType,e.dims,c),r=[n],i=o?U(`seq_lens`,o.dataType,o.dims):void 0;i&&r.push(i);let a=s?U(`total_sequence_length_input`,s.dataType,s.dims):void 0;a&&r.push(a);let u=Ds(e.dataType);return`
  var<workgroup> thread_max: array<f32, ${l}>;
  var<workgroup> thread_sum: array<f32, ${l}>;
  ${t.registerUniforms([{name:`batch_size`,type:`u32`},{name:`num_heads`,type:`u32`},{name:`past_sequence_length`,type:`u32`},{name:`sequence_length`,type:`u32`},{name:`total_sequence_length`,type:`u32`},{name:`elements_per_thread`,type:`u32`}]).declareVariables(...r)}
  ${t.mainStart([l,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Jc(i,a,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${l}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${o?`u32(past_sequence_length + workgroup_id.y + 1)`:`total_sequence_length`};
    var thread_max_vector = ${m}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${m}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(c){case 1:return`thread_max_vector`;case 2:return`max(thread_max_vector.x, thread_max_vector.y)`;case 4:return`max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))`;default:throw Error(`Unsupported components: ${c}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${l}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${m}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${m}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(c){case 1:return`sum_vector`;case 2:return`sum_vector.x + sum_vector.y`;case 4:return`sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w`;default:throw Error(`Unsupported components: ${c}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${l}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${n.type.value}(${u}(1.0) / ${u}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${m}(x[offset + i]);
        x[offset + i] = ${n.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${o?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${n.type.value}(${u}(0));
        }`:``};
  }`},getRunData:()=>({outputs:[],dispatchGroup:{x:Math.ceil(a/l),y:i,z:t*n},programUniforms:f})}},Xc=(e,t,n,r,i,a,o,s,c)=>{let l=o+a.kvSequenceLength,u=[a.batchSize,a.numHeads,a.sequenceLength,l],d=e>1&&r,f=a.kvNumHeads?a.kvNumHeads:a.numHeads,p=d?[a.batchSize,f,l,a.headSize]:void 0,m=a.nReps?a.nReps:1,h=a.scale===0?1/Math.sqrt(a.headSize):a.scale,g=Os(a.headSize),_=a.headSize/g,v={x:Math.ceil(l/12),y:Math.ceil(a.sequenceLength/12),z:a.batchSize*a.numHeads},y=[{type:12,data:a.sequenceLength},{type:12,data:_},{type:12,data:l},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:1,data:h},{type:12,data:o},{type:12,data:a.kvSequenceLength},{type:12,data:m}],b=d&&r&&z.size(r.dims)>0,x=[`type`,`type`];b&&x.push(`type`),i&&x.push(`type`),s&&x.push(`type`),c&&x.push(`type`);let S=[{dims:u,dataType:t.dataType,gpuDataType:0}];return d&&S.push({dims:p,dataType:t.dataType,gpuDataType:0}),{name:`AttentionProbs`,shaderCache:{hint:`${g};${i!==void 0};${r!==void 0};${e}`,inputDependencies:x},getRunData:()=>({outputs:S,dispatchGroup:v,programUniforms:y}),getShaderSource:e=>{let a=U(`q`,t.dataType,t.dims,g),o=[a,U(`key`,n.dataType,n.dims,g)];if(b){let e=U(`past_key`,r.dataType,r.dims,g);o.push(e)}i&&o.push(U(`attention_bias`,i.dataType,i.dims));let l=s?U(`seq_lens`,s.dataType,s.dims):void 0;l&&o.push(l);let f=c?U(`total_sequence_length_input`,c.dataType,c.dims):void 0;f&&o.push(f);let h=W(`output`,t.dataType,u),_=[h];d&&_.push(W(`present_key`,t.dataType,p,g));let v=Ds(1,g);return`
  const TILE_SIZE = 12u;

  var<workgroup> tileQ: array<${a.type.storage}, 144>;
  var<workgroup> tileK: array<${a.type.storage}, 144>;
  ${e.registerUniforms([{name:`M`,type:`u32`},{name:`K`,type:`u32`},{name:`N`,type:`u32`},{name:`num_heads`,type:`u32`},{name:`head_size`,type:`u32`},{name:`alpha`,type:`f32`},{name:`past_sequence_length`,type:`u32`},{name:`kv_sequence_length`,type:`u32`},{name:`n_reps`,type:`u32`}]).declareVariables(...o,..._)}
  ${e.mainStart([12,12,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${m===1?`headIdx`:`headIdx / uniforms.n_reps`};
    let kv_num_heads = ${m===1?`uniforms.num_heads`:`uniforms.num_heads / uniforms.n_reps`};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Jc(l,f,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${b&&d?`let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;`:``};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${d?`let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;`:``}
    var value = ${v}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${b&&d?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${d?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:``}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${v}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(g){case 1:return`value`;case 2:return`value.x + value.y`;case 4:return`value.x + value.y + value.z + value.w`;default:throw Error(`Unsupported components: ${g}`)}})()};
        output[outputIdx] = ${h.type.value} (sum * uniforms.alpha) + ${i?`attention_bias[outputIdx]`:`0.0`};
    }
  }`}}},Zc=(e,t,n,r,i,a,o=void 0,s=void 0)=>{let c=a+i.kvSequenceLength,l=i.nReps?i.nReps:1,u=i.vHiddenSize*l,d=e>1&&r,f=i.kvNumHeads?i.kvNumHeads:i.numHeads,p=d?[i.batchSize,f,c,i.headSize]:void 0,m=[i.batchSize,i.sequenceLength,u],h={x:Math.ceil(i.vHeadSize/12),y:Math.ceil(i.sequenceLength/12),z:i.batchSize*i.numHeads},g=[{type:12,data:i.sequenceLength},{type:12,data:c},{type:12,data:i.vHeadSize},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:12,data:u},{type:12,data:a},{type:12,data:i.kvSequenceLength},{type:12,data:l}],_=d&&r&&z.size(r.dims)>0,v=[`type`,`type`];_&&v.push(`type`),o&&v.push(`type`),s&&v.push(`type`);let y=[{dims:m,dataType:t.dataType,gpuDataType:0}];return d&&y.push({dims:p,dataType:t.dataType,gpuDataType:0}),{name:`AttentionScore`,shaderCache:{hint:`${r!==void 0};${e}`,inputDependencies:v},getRunData:()=>({outputs:y,dispatchGroup:h,programUniforms:g}),getShaderSource:e=>{let i=U(`probs`,t.dataType,t.dims),a=[i,U(`v`,n.dataType,n.dims)];_&&a.push(U(`past_value`,r.dataType,r.dims));let c=o?U(`seq_lens`,o.dataType,o.dims):void 0;o&&a.push(c);let u=s?U(`total_sequence_length_input`,s.dataType,s.dims):void 0;s&&a.push(u);let f=[W(`output`,t.dataType,m)];return d&&f.push(W(`present_value`,t.dataType,p)),`
  const TILE_SIZE = 12u;
  var<workgroup> tileQ: array<${i.type.value}, 144>;
  var<workgroup> tileV: array<${i.type.value}, 144>;
  ${e.registerUniforms([{name:`M`,type:`u32`},{name:`K`,type:`u32`},{name:`N`,type:`u32`},{name:`num_heads`,type:`u32`},{name:`head_size`,type:`u32`},{name:`v_hidden_size`,type:`u32`},{name:`past_sequence_length`,type:`u32`},{name:`kv_sequence_length`,type:`u32`},{name:`n_reps`,type:`u32`}]).declareVariables(...a,...f)}
  ${e.mainStart([12,12,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${l===1?`headIdx`:`headIdx / uniforms.n_reps`};
   let kv_num_heads = ${l===1?`uniforms.num_heads`:`uniforms.num_heads / uniforms.n_reps`};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Jc(c,u,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${_&&d?`let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;`:``};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${d?`let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;`:``}
   var value = ${i.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${_&&d?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${d?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:``}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`}}},Qc=(e,t,n,r,i,a,o,s,c,l,u=void 0,d=void 0)=>{let f=Math.min(e.outputCount,1+ +!!o+ +!!s),p=f>1?l.pastSequenceLength:0,m=p+l.kvSequenceLength,h=c&&z.size(c.dims)>0?c:void 0,g=[t,n];f>1&&o&&z.size(o.dims)>0&&g.push(o),h&&g.push(h),u&&g.push(u),d&&g.push(d);let _=e.compute(Xc(f,t,n,o,h,l,p,u,d),{inputs:g,outputs:f>1?[-1,1]:[-1]})[0];e.compute(Yc(_,l.batchSize,l.numHeads,p,l.sequenceLength,m,u,d),{inputs:u&&d?[_,u,d]:[_],outputs:[]});let v=[_,r];f>1&&s&&z.size(s.dims)>0&&v.push(s),u&&v.push(u),d&&v.push(d),e.compute(Zc(f,_,r,s,l,p,u,d),{inputs:v,outputs:f>1?[0,2]:[0]})},$c=(e,t)=>{let n=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],r=t.sequenceLength,i=t.inputHiddenSize,a=t.headSize,o={x:Math.ceil(t.headSize/12),y:Math.ceil(t.sequenceLength/12),z:t.batchSize*t.numHeads},s=[e.inputs[0],e.inputs[1],e.inputs[2]],c=[{type:12,data:r},{type:12,data:i},{type:12,data:a},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}];return e.compute({name:`AttentionPrepare`,shaderCache:{inputDependencies:[`type`,`type`,`type`]},getRunData:()=>({outputs:[{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:c}),getShaderSource:e=>{let t=W(`output_q`,s[0].dataType,n),r=W(`output_k`,s[0].dataType,n),i=W(`output_v`,s[0].dataType,n),a=U(`input`,s[0].dataType,s[0].dims),o=U(`weight`,s[1].dataType,s[1].dims),c=U(`bias`,s[2].dataType,s[2].dims),l=a.type.storage;return`
  const TILE_SIZE = 12u;
  var<workgroup> tileInput: array<${l}, 144>;
  var<workgroup> tileWeightQ: array<${l}, 144>;
  var<workgroup> tileWeightK: array<${l}, 144>;
  var<workgroup> tileWeightV: array<${l}, 144>;
  ${e.registerUniforms([{name:`M`,type:`u32`},{name:`K`,type:`u32`},{name:`N`,type:`u32`},{name:`num_heads`,type:`u32`},{name:`head_size`,type:`u32`},{name:`hidden_size`,type:`u32`},{name:`ldb`,type:`u32`}]).declareVariables(a,o,c,t,r,i)}
  ${e.mainStart([12,12,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${l}(0);
    var valueK = ${l}(0);
    var valueV = ${l}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`}},{inputs:s,outputs:[-1,-1,-1]})},el=(e,t)=>{let n=qc(e.inputs,t),[r,i,a]=$c(e,n);return Qc(e,r,i,a,e.inputs[4],void 0,void 0,void 0,e.inputs[5],n)}}),nl,rl,il,al,ol=L(()=>{Ua(),R(),B(),_s(),G(),nl=(e,t)=>{if(!e||e.length!==5)throw Error(`BatchNormalization requires 5 inputs`);let n=(e,t,n)=>{let r=t.length;if(r!==e.length)throw Error(`${n}: num dimensions != ${r}`);t.forEach((t,r)=>{if(t!==e[r])throw Error(`${n}: dim[${r}] do not match`)})};if(e[0].dims.length>1){let r=t.format===`NHWC`?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);n(e[1].dims,r,`Invalid input scale`),n(e[2].dims,r,`Invalid input B`),n(e[3].dims,r,`Invalid input mean`),n(e[4].dims,r,`Invalid input var`)}else n(e[1].dims,[1],`Invalid input scale`),n(e[2].dims,[1],`Invalid input B`),n(e[3].dims,[1],`Invalid input mean`),n(e[4].dims,[1],`Invalid input var`)},rl=(e,t)=>{let{epsilon:n,spatial:r,format:i}=t,a=e[0].dims,o=r?Os(a[a.length-1]):1,s=i===`NHWC`&&a.length>1?o:1,c=z.size(a)/o,l=r,u=l?a.length:a,d=U(`x`,e[0].dataType,e[0].dims,o),f=U(`scale`,e[1].dataType,e[1].dims,s),p=U(`bias`,e[2].dataType,e[2].dims,s),m=U(`inputMean`,e[3].dataType,e[3].dims,s),h=U(`inputVar`,e[4].dataType,e[4].dims,s),g=W(`y`,e[0].dataType,u,o),_=()=>{let e=``;if(r)e=`let cOffset = ${a.length===1?`0u`:i===`NHWC`?`outputIndices[${a.length-1}] / ${o}`:`outputIndices[1]`};`;else if(i===`NCHW`)e=`
            ${g.indicesSet(`outputIndices`,`0`,`0`)}
            let cOffset = ${g.indicesToOffset(`outputIndices`)};`;else{e=`var cIndices = ${f.type.indices}(0);
                       cIndices[0] = outputIndices[${a.length-1}];`;for(let t=1;t<f.rank;t++)e+=`cIndices[${t}] = outputIndices[${t}];`;e+=`let cOffset = ${f.indicesToOffset(`cIndices`)};`}return e};return{name:`BatchNormalization`,shaderCache:{hint:`${t.epsilon}_${t.format}_${r}_${o}`,inputDependencies:l?[`rank`,`type`,`type`,`type`,`type`]:void 0},getShaderSource:e=>`
  const epsilon = ${n};
  ${e.registerUniform(`outputSize`,`u32`).declareVariables(d,f,p,m,h,g)}
  ${e.mainStart()}
  ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
    var outputIndices = ${g.offsetToIndices(`global_idx * ${o}`)};
    ${_()}
    let scale = ${f.getByOffset(`cOffset`)};
    let bias = ${p.getByOffset(`cOffset`)};
    let inputMean = ${m.getByOffset(`cOffset`)};
    let inputVar = ${h.getByOffset(`cOffset`)};
    let x = ${d.getByOffset(`global_idx`)};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${g.setByOffset(`global_idx`,`value`)}
  }`,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:l?[{type:12,data:c},...V(a)]:[{type:12,data:c}]})}},il=e=>gs(e),al=(e,t)=>{let{inputs:n,outputCount:r}=e,i=il({...t,outputCount:r});if(aa.webgpu.validateInputContent&&nl(n,i),t.trainingMode)throw Error(`BatchNormalization trainingMode is not supported yet.`);e.compute(rl(n,i))}}),sl,cl,ll,ul=L(()=>{B(),G(),sl=e=>{if(e[0].dims.length!==3)throw Error(`input should have 3 dimensions`);if(![320,640,1280].includes(e[0].dims[2]))throw Error(`number of channels should be 320, 640 or 1280`);if(e[1].dims.length!==1)throw Error(`bias is expected to have 1 dimensions`);if(e[0].dims[2]!==e[1].dims[0])throw Error(`last dimension of input and bias are not the same`)},cl=e=>{let t=e[0].dims,n=e[0].dims[2],r=z.size(t)/4,i=e[0].dataType,a=U(`input`,i,t,4),o=U(`bias`,i,[n],4),s=U(`residual`,i,t,4),c=W(`output`,i,t,4);return{name:`BiasAdd`,getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(r/64)}}),getShaderSource:e=>`
  const channels = ${n}u / 4;
  ${e.declareVariables(a,o,s,c)}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(r)}
    let value = ${a.getByOffset(`global_idx`)}
      + ${o.getByOffset(`global_idx % channels`)} + ${s.getByOffset(`global_idx`)};
    ${c.setByOffset(`global_idx`,`value`)}
  }`}},ll=e=>{sl(e.inputs),e.compute(cl(e.inputs))}}),dl,fl,pl,ml,hl,gl,_l,vl,yl,bl,xl,Sl,Cl,wl,Tl,El,Dl,Ol,kl,Al,jl,Ml,Nl,Pl,Fl,Il,Ll,Rl,zl,Bl,Vl,Hl,Ul,Wl,Gl,Kl,ql,Jl,Yl,Xl,Zl,Ql,$l,eu,tu,nu=L(()=>{R(),B(),_s(),G(),dl=(e,t,n,r,i,a,o)=>{let s=Math.ceil(t/4),c=``;c=typeof i==`string`?`${i}(a)`:i(`a`);let l=U(`inputData`,n,[s],4),u=W(`outputData`,r,[s],4),d=[{name:`vec_size`,type:`u32`}];return o&&d.push(...o),`
      ${e.registerUniforms(d).declareVariables(l,u)}

  ${a??``}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.vec_size`)}

    let a = ${l.getByOffset(`global_idx`)};
    ${u.setByOffset(`global_idx`,c)}
  }`},fl=(e,t,n,r,i,a=e.dataType,o,s)=>{let c=[{type:12,data:Math.ceil(z.size(e.dims)/4)}];return o&&c.push(...o),{name:t,shaderCache:{hint:i,inputDependencies:[`type`]},getShaderSource:t=>dl(t,z.size(e.dims),e.dataType,a,n,r,s),getRunData:t=>({outputs:[{dims:e.dims,dataType:a}],dispatchGroup:{x:Math.ceil(z.size(t[0].dims)/64/4)},programUniforms:c})}},pl=e=>{e.compute(fl(e.inputs[0],`Abs`,`abs`))},ml=e=>{e.compute(fl(e.inputs[0],`Acos`,`acos`))},hl=e=>{e.compute(fl(e.inputs[0],`Acosh`,`acosh`))},gl=e=>{e.compute(fl(e.inputs[0],`Asin`,`asin`))},_l=e=>{e.compute(fl(e.inputs[0],`Asinh`,`asinh`))},vl=e=>{e.compute(fl(e.inputs[0],`Atan`,`atan`))},yl=e=>{e.compute(fl(e.inputs[0],`Atanh`,`atanh`))},bl=e=>gs(e),xl=(e,t)=>{let n;switch(t.to){case 10:n=`vec4<f16>`;break;case 1:n=`vec4<f32>`;break;case 12:n=`vec4<u32>`;break;case 6:n=`vec4<i32>`;break;case 9:n=`vec4<bool>`;break;default:throw RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(fl(e.inputs[0],`Cast`,n,void 0,t.cacheKey,t.to))},Sl=e=>{let t,n,r=e.length>=2&&e[1].data!==0,i=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=r?e[1].getFloat32Array()[0]:-34028234663852886e22,n=i?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=r?e[1].getUint16Array()[0]:64511,n=i?e[2].getUint16Array()[0]:31743;break;default:throw Error(`Unsupport data type`)}return gs({min:t,max:n})},Cl=(e,t)=>{let n=t||Sl(e.inputs),r=Ds(e.inputs[0].dataType);e.compute(fl(e.inputs[0],`Clip`,e=>`clamp(${e}, vec4<${r}>(uniforms.min), vec4<${r}>(uniforms.max))`,void 0,n.cacheKey,void 0,[{type:e.inputs[0].dataType,data:n.min},{type:e.inputs[0].dataType,data:n.max}],[{name:`min`,type:r},{name:`max`,type:r}]),{inputs:[0]})},wl=e=>{e.compute(fl(e.inputs[0],`Ceil`,`ceil`))},Tl=e=>{e.compute(fl(e.inputs[0],`Cos`,`cos`))},El=e=>{e.compute(fl(e.inputs[0],`Cosh`,`cosh`))},Dl=e=>gs(e),Ol=(e,t)=>{let n=Ds(e.inputs[0].dataType);e.compute(fl(e.inputs[0],`Elu`,e=>`elu_vf32(${e})`,`
  const elu_alpha_ = ${n}(${t.alpha});

  fn elu_f32(a: ${n}) -> ${n} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${n}>) -> vec4<${n}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},kl=(e=`f32`)=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,Al=e=>{let t=Ds(e.inputs[0].dataType);e.compute(fl(e.inputs[0],`Erf`,e=>`erf_vf32(${e})`,kl(t)))},jl=e=>{e.compute(fl(e.inputs[0],`Exp`,`exp`))},Ml=e=>{e.compute(fl(e.inputs[0],`Floor`,`floor`))},Nl=e=>{let t=Ds(e.inputs[0].dataType);e.compute(fl(e.inputs[0],`Gelu`,e=>`0.5 * ${e} * (1.0 + erf_vf32(${e} * 0.7071067811865475))`,kl(t)))},Pl=(e,t)=>{let n=Ds(e.inputs[0].dataType);e.compute(fl(e.inputs[0],`LeakyRelu`,e=>`select(leaky_relu_alpha_ * ${e}, ${e}, ${e} >= vec4<${n}>(0.0))`,`const leaky_relu_alpha_ = ${n}(${t.alpha});`,t.cacheKey))},Fl=e=>{e.compute(fl(e.inputs[0],`Not`,e=>`!${e}`))},Il=e=>{e.compute(fl(e.inputs[0],`Neg`,e=>`-${e}`))},Ll=e=>{e.compute(fl(e.inputs[0],`Reciprocal`,e=>`1.0/${e}`))},Rl=e=>{let t=Ds(e.inputs[0].dataType);e.compute(fl(e.inputs[0],`Relu`,e=>`select(vec4<${t}>(0.0), ${e}, ${e} > vec4<${t}>(0.0))`))},zl=e=>{e.compute(fl(e.inputs[0],`Sigmoid`,e=>`(1.0 / (1.0 + exp(-${e})))`))},Bl=e=>gs(e),Vl=(e,t)=>{let n=Ds(e.inputs[0].dataType);e.compute(fl(e.inputs[0],`HardSigmoid`,e=>`max(vec4<${n}>(0.0), min(vec4<${n}>(1.0), ${t.alpha} * ${e} + vec4<${n}>(${t.beta})))`,void 0,t.cacheKey))},Hl=e=>{e.compute(fl(e.inputs[0],`Sin`,`sin`))},Ul=e=>{e.compute(fl(e.inputs[0],`Sinh`,`sinh`))},Wl=e=>{e.compute(fl(e.inputs[0],`Sqrt`,`sqrt`))},Gl=e=>{e.compute(fl(e.inputs[0],`Tan`,`tan`))},Kl=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,ql=e=>{e.compute(fl(e.inputs[0],`Tanh`,Kl))},Jl=(e=`f32`)=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${Kl(`v`)};
}
`,Yl=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Xl=e=>{let t=Ds(e.inputs[0].dataType);e.compute(fl(e.inputs[0],`FastGelu`,Yl,Jl(t),void 0,e.inputs[0].dataType))},Zl=(e,t)=>{let n=Ds(e.inputs[0].dataType);return e.compute(fl(e.inputs[0],`ThresholdedRelu`,e=>`select(vec4<${n}>(0.0), ${e}, ${e} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${n}>(${t.alpha});`,t.cacheKey)),0},Ql=e=>{e.compute(fl(e.inputs[0],`Log`,`log`))},$l=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,eu=e=>`quick_gelu_impl(${e})`,tu=(e,t)=>{let n=Ds(e.inputs[0].dataType);e.compute(fl(e.inputs[0],`QuickGelu`,eu,$l(n,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),ru,iu,au,ou=L(()=>{B(),G(),nu(),ru=e=>{if(e[0].dims.length!==3)throw Error(`input should have 3 dimensions`);if(![2560,5120,10240].includes(e[0].dims[2]))throw Error(`hidden state should be 2560, 5120 or 10240`);if(e[1].dims.length!==1)throw Error(`bias is expected to have 1 dimensions`);if(e[0].dims[2]!==e[1].dims[0])throw Error(`last dimension of input and bias are not the same`)},iu=e=>{let t=e[0].dims.slice();t[2]/=2;let n=U(`input`,e[0].dataType,e[0].dims,4),r=U(`bias`,e[0].dataType,[e[0].dims[2]],4),i=W(`output`,e[0].dataType,t,4),a=z.size(t)/4,o=Es(e[0].dataType);return{name:`BiasSplitGelu`,getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:t=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${t.declareVariables(n,r,i)}

  ${kl(o)}

  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${i.setByOffset(`global_idx`,`valueLeft * geluRight`)}
  }`}},au=e=>{ru(e.inputs),e.compute(iu(e.inputs))}}),su,cu,lu,uu,du,fu,pu,mu,hu,gu,_u,vu,yu,bu=L(()=>{R(),B(),G(),su=(e,t,n,r,i,a,o,s,c,l,u,d)=>{let f,p;typeof s==`string`?f=p=(e,t)=>`${s}((${e}),(${t}))`:typeof s==`function`?f=p=s:(f=s.scalar,p=s.vector);let m=W(`outputData`,u,r.length,4),h=U(`aData`,c,t.length,4),g=U(`bData`,l,n.length,4),_;if(i){if(a){let e=z.size(t)===1,r=z.size(n)===1,i=t.length>0&&t[t.length-1]%4==0,a=n.length>0&&n[n.length-1]%4==0;_=e||r?m.setByOffset(`global_idx`,p(e?`${h.type.value}(${h.getByOffset(`0`)}.x)`:h.getByOffset(`global_idx`),r?`${g.type.value}(${g.getByOffset(`0`)}.x)`:g.getByOffset(`global_idx`))):`
            let outputIndices = ${m.offsetToIndices(`global_idx * 4u`)};
            let offsetA = ${h.broadcastedIndicesToOffset(`outputIndices`,m)};
            let offsetB = ${g.broadcastedIndicesToOffset(`outputIndices`,m)};
            ${m.setByOffset(`global_idx`,p(o||i?h.getByOffset(`offsetA / 4u`):`${h.type.value}(${h.getByOffset(`offsetA / 4u`)}[offsetA % 4u])`,o||a?g.getByOffset(`offsetB / 4u`):`${g.type.value}(${g.getByOffset(`offsetB / 4u`)}[offsetB % 4u])`))}
          `}else _=m.setByOffset(`global_idx`,p(h.getByOffset(`global_idx`),g.getByOffset(`global_idx`)))}else{if(!a)throw Error(`no necessary to use scalar implementation for element-wise binary op implementation.`);let e=(e,t,n=``)=>{let r=`aData[indexA${t}][componentA${t}]`,i=`bData[indexB${t}][componentB${t}]`;return`
            let outputIndices${t} = ${m.offsetToIndices(`global_idx * 4u + ${t}u`)};
            let offsetA${t} = ${h.broadcastedIndicesToOffset(`outputIndices${t}`,m)};
            let offsetB${t} = ${g.broadcastedIndicesToOffset(`outputIndices${t}`,m)};
            let indexA${t} = offsetA${t} / 4u;
            let indexB${t} = offsetB${t} / 4u;
            let componentA${t} = offsetA${t} % 4u;
            let componentB${t} = offsetB${t} % 4u;
            ${e}[${t}] = ${n}(${f(r,i)});
          `};_=u===9?`
            var data = vec4<u32>(0);
            ${e(`data`,0,`u32`)}
            ${e(`data`,1,`u32`)}
            ${e(`data`,2,`u32`)}
            ${e(`data`,3,`u32`)}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:`
            ${e(`outputData[global_idx]`,0)}
            ${e(`outputData[global_idx]`,1)}
            ${e(`outputData[global_idx]`,2)}
            ${e(`outputData[global_idx]`,3)}
          `}return`
        ${e.registerUniform(`vec_size`,`u32`).declareVariables(h,g,m)}

        ${d??``}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.vec_size`)}
        ${_}
      }`},cu=(e,t,n,r,i,a,o=n.dataType)=>{let s=n.dims.map(e=>Number(e)??1),c=r.dims.map(e=>Number(e)??1),l=!z.areEqual(s,c),u=s,d=z.size(s),f=!1,p=!1,m=[l];if(l){let e=ys.calcShape(s,c,!1);if(!e)throw Error(`Can't perform binary op on the given tensors`);u=e.slice(),d=z.size(u);let t=z.size(s)===1,n=z.size(c)===1,r=s.length>0&&s[s.length-1]%4==0,i=c.length>0&&c[c.length-1]%4==0;m.push(t),m.push(n),m.push(r),m.push(i);let a=1;for(let e=1;e<u.length;e++){let t=s[s.length-e];if(t===c[c.length-e])a*=t;else break}a%4==0?(p=!0,f=!0):(t||n||r||i)&&(f=!0)}else f=!0;return m.push(f),{name:e,shaderCache:{hint:t+m.map(e=>e.toString()).join(`_`),inputDependencies:[`rank`,`rank`]},getShaderSource:e=>su(e,s,c,u,f,l,p,i,n.dataType,r.dataType,o,a),getRunData:()=>({outputs:[{dims:u,dataType:o}],dispatchGroup:{x:Math.ceil(d/64/4)},programUniforms:[{type:12,data:Math.ceil(z.size(u)/4)},...V(s,c,u)]})}},lu=(e,t,n,r,i,a)=>{e.compute(cu(t,i??``,e.inputs[0],e.inputs[1],n,r,a))},uu=e=>{lu(e,`Add`,(e,t)=>`${e}+${t}`)},du=e=>{lu(e,`Div`,(e,t)=>`${e}/${t}`)},fu=e=>{lu(e,`Equal`,{scalar:(e,t)=>`u32(${e}==${t})`,vector:(e,t)=>`vec4<u32>(${e}==${t})`},void 0,void 0,9)},pu=e=>{lu(e,`Mul`,(e,t)=>`${e}*${t}`)},mu=e=>{let t=U(`input`,e.inputs[0].dataType,e.inputs[0].dims).type.value;lu(e,`Pow`,{scalar:(e,t)=>`pow_custom(${e},${t})`,vector:(e,t)=>`pow_vector_custom(${e},${t})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t===`i32`?`round`:``}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},hu=e=>{lu(e,`Sub`,(e,t)=>`${e}-${t}`)},gu=e=>{lu(e,`Greater`,{scalar:(e,t)=>`u32(${e}>${t})`,vector:(e,t)=>`vec4<u32>(${e}>${t})`},void 0,void 0,9)},_u=e=>{lu(e,`Less`,{scalar:(e,t)=>`u32(${e}<${t})`,vector:(e,t)=>`vec4<u32>(${e}<${t})`},void 0,void 0,9)},vu=e=>{lu(e,`GreaterOrEqual`,{scalar:(e,t)=>`u32(${e}>=${t})`,vector:(e,t)=>`vec4<u32>(${e}>=${t})`},void 0,void 0,9)},yu=e=>{lu(e,`LessOrEqual`,{scalar:(e,t)=>`u32(${e}<=${t})`,vector:(e,t)=>`vec4<u32>(${e}<=${t})`},void 0,void 0,9)}}),xu,Su,Cu,wu,Tu,Eu,Du=L(()=>{R(),B(),_s(),G(),xu=(e,t)=>{if(!e||e.length<1)throw Error(`too few inputs`);let n=e[0],r=n.dataType,i=n.dims.length;e.forEach((e,a)=>{if(a!==0){if(e.dataType!==r)throw Error(`input tensors should be one type`);if(e.dims.length!==i)throw Error(`input tensors should have the same shape`);e.dims.forEach((e,r)=>{if(r!==t&&e!==n.dims[r])throw Error(`non concat dimensions must match`)})}})},Su=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Cu=(e,t)=>{let n=e.length,r=[];for(let i=0;i<n;++i){let a=t.setByOffset(`global_idx`,e[i].getByIndices(`indices`));n===1?r.push(a):i===0?r.push(`if (inputIndex == ${i}u) { ${a} }`):i===n-1?r.push(`else { ${a} }`):r.push(`else if (inputIndex == ${i}) { ${a} }`)}return r.join(`
`)},wu=(e,t,n,r)=>{let i=z.size(n),a=Array(e.length),o=Array(e.length),s=0,c=[],l=[],u=[{type:12,data:i}];for(let n=0;n<e.length;++n)s+=e[n].dims[t],a[n]=s,l.push(e[n].dims.length),o[n]=U(`input${n}`,r,l[n]),c.push(`rank`),u.push({type:12,data:a[n]});for(let t=0;t<e.length;++t)u.push(...V(e[t].dims));u.push(...V(n));let d=W(`output`,r,n.length),f=d.indicesGet(`indices`,t),p=Array.from(Array(a.length).keys()).map(e=>`uniforms.sizeInConcatAxis${e}`).join(`,`);return{name:`Concat`,shaderCache:{hint:`${t}`,inputDependencies:c},getRunData:()=>({outputs:[{dims:n,dataType:r}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:u}),getShaderSource:t=>`

  ${(()=>{t.registerUniform(`outputSize`,`u32`);for(let n=0;n<e.length;n++)t.registerUniform(`sizeInConcatAxis${n}`,`u32`);return t.declareVariables(...o,d)})()}

  ${Su(a.length,p)}

  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}

    var indices = ${d.offsetToIndices(`global_idx`)};

    let inputIndex = calculateInputIndex(${f});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${a.length}u>(${p});
      ${f} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Cu(o,d)}
  }`}},Tu=(e,t)=>{let n=e.inputs,r=n[0].dims,i=z.normalizeAxis(t.axis,r.length);xu(n,i);let a=r.slice();a[i]=n.reduce((e,t)=>e+(t.dims.length>i?t.dims[i]:0),0);let o=n.filter(e=>z.size(e.dims)>0);e.compute(wu(o,i,a,n[0].dataType),{inputs:o})},Eu=e=>gs({axis:e.axis})}),Ou,ku,Au,ju,Mu=L(()=>{R(),B(),Ou=(e,t,n=`f32`)=>{switch(e.activation){case`Relu`:return`value = max(value, ${t}(0.0));`;case`Sigmoid`:return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case`Clip`:return`value = clamp(value, ${t}(${n}(uniforms.clip_min)), ${t}(${n}(uniforms.clip_max)));`;case`HardSigmoid`:return`value = max(${t}(0.0), min(${t}(1.0), ${n}(uniforms.alpha) * value + ${n}(uniforms.beta)));`;case`LeakyRelu`:return`value = select(${n}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case`Tanh`:return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case``:return``;default:throw Error(`Unsupported activation ${e.activation}`)}},ku=(e,t)=>{e.activation===`Clip`?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation===`HardSigmoid`?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation===`LeakyRelu`&&t.push({type:1,data:e.alpha})},Au=(e,t)=>{e.activation===`Clip`?t.push({name:`clip_max`,type:`f32`},{name:`clip_min`,type:`f32`}):e.activation===`HardSigmoid`?t.push({name:`alpha`,type:`f32`},{name:`beta`,type:`f32`}):e.activation===`LeakyRelu`&&t.push({name:`alpha`,type:`f32`})},ju=e=>{let t=e?.activation||``;if(t===`HardSigmoid`){let[n,r]=e?.activation_params||[.2,.5];return{activation:t,alpha:n,beta:r}}if(t===`Clip`){let[n,r]=e?.activation_params||[Ss,Cs];return{activation:t,clipMax:r,clipMin:n}}if(t===`LeakyRelu`){let[n]=e?.activation_params||[.01];return{activation:t,alpha:n}}return{activation:t}}}),Nu,Pu,Fu=L(()=>{Nu=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw Error(`${e}-component is not supported.`)}},Pu=e=>`
      ${e?`value = value + getBiasByOutputCoords(coords);`:``}
      `}),Iu,Lu=L(()=>{Iu=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),Ru,zu,Bu=L(()=>{R(),B(),G(),Mu(),Ru=(e,t,n,r,i)=>{let a=r-n;return`
      ${Array.from({length:n}).map((n,o)=>`
      if (${H(t.shape,o,t.rank)} != 1) {
        ${t.indicesSet(e,o,H(i,o+a,r))}
      } else {
        ${t.indicesSet(e,o,0)}
      }`).join(``)}
`},zu=(e,t,n,r,i=!1,a)=>{let o=e[0].dims,s=e[1].dims,c=o[o.length-2],l=s[s.length-1],u=o[o.length-1],d=Os(l),f=Os(u),p=Os(c),m=z.size(n)/d/p,h=e.length>2,g=r?r.slice(0,-2):n.slice(0,-2),_=[z.size(g),c,l],v=[{type:12,data:m},{type:12,data:c},{type:12,data:l},{type:12,data:u}];return ku(t,v),v.push(...V(g,o,s)),h&&v.push(...V(e[2].dims)),v.push(...V(_)),{name:`MatMulNaive`,shaderCache:{hint:`${t.activation};${d};${f};${p};${i}`,inputDependencies:h?[`rank`,`rank`,`rank`]:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:v}),getShaderSource:r=>{let a=Ps(`batch_dims`,e[0].dataType,g.length),c=U(`a`,e[0].dataType,o.length,f),l=U(`b`,e[1].dataType,s.length,d),u=W(`output`,e[0].dataType,_.length,d),m=Es(u.type.tensor),v=Ou(t,u.type.value,m),y=[c,l],b=``;if(h){let t=i?d:1;y.push(U(`bias`,e[2].dataType,e[2].dims.length,t)),b=`${i?`value += bias[col / ${t}];`:`value += ${u.type.value}(bias[row + i]);`}`}let x=[{name:`output_size`,type:`u32`},{name:`M`,type:`u32`},{name:`N`,type:`u32`},{name:`K`,type:`u32`}];Au(t,x);let S=()=>{let e=`var a_data: ${c.type.value};`;for(let t=0;t<f;t++)e+=`
              let b_data${t} = b[(b_offset + (k + ${t}) * uniforms.N + col) / ${d}];`;for(let t=0;t<p;t++){e+=`a_data = a[(a_offset + (row + ${t}) * uniforms.K + k) / ${f}];`;for(let n=0;n<f;n++)e+=`
            values[${t}] = fma(${l.type.value}(a_data${f===1?``:`[${n}]`}), b_data${n}, values[${t}]);
`}return e};return`
  ${r.registerUniforms(x).registerInternalVariables(a).declareVariables(...y,u)}
  ${r.mainStart()}
    ${r.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    let col = (global_idx % (uniforms.N / ${d})) * ${d};
    var index1 = global_idx / (uniforms.N / ${d});
    let stride1 = uniforms.M / ${p};
    let row = (index1 % stride1) * ${p};
    let batch = index1 / stride1;

    ${n.length===2?``:`let batch_indices = ${a.offsetToIndices(`batch`)};`}

    var a_indices: ${c.type.indices};
    ${Ru(`a_indices`,c,c.rank-2,a.rank,`batch_indices`)}
    ${c.indicesSet(`a_indices`,c.rank-2,0)}
    ${c.indicesSet(`a_indices`,c.rank-1,0)}
    let a_offset = ${c.indicesToOffset(`a_indices`)};

    var b_indices: ${l.type.indices};
    ${Ru(`b_indices`,l,l.rank-2,a.rank,`batch_indices`)}
    ${l.indicesSet(`b_indices`,l.rank-2,0)}
    ${l.indicesSet(`b_indices`,l.rank-1,0)}
    let b_offset = ${l.indicesToOffset(`b_indices`)};
    var values: array<${u.type.value}, ${p}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${f}) {
      ${S()}
    }
    for (var i = 0u; i < ${p}u; i++) {
      var value = values[i];
      ${b}
      ${v}
      let cur_indices = ${u.type.indices}(batch, row + i, col);
      let offset = ${u.indicesToOffset(`cur_indices`)};
      ${u.setByOffset(`offset / ${d}`,`value`)};
    }
  }
  `}}}}),Vu,Hu,Uu,Wu,Gu,Ku,qu,Ju,Yu=L(()=>{R(),B(),G(),Mu(),Bu(),Fu(),Vu=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?`, batchIndices`:``});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?`, batchIndices`:``});
        `,Hu=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?``:`let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];`}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?``:`acc[i] = BCached3 * ACached3[i] + acc[i];`}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?``:`acc[i] = BCached3 * ACached.w + acc[i];`}
        }`,Uu=(e,t,n=`f32`,r,i=!1,a=32,o=!1,s=32)=>{let c=t[1]*e[1],l=t[0]*e[0],u=i?c:a,d=i?a:c,f=u/t[0],p=a/t[1];if((!i||f!==4||e[1]!==4)&&(i||f!==3&&f!==4)||u%t[0]!==0||a%t[1]!==0||e[0]!==4)throw Error(`If transposeA ${i} is true, innerElementSize ${f} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${f} must be 3 or 4.
  tileAWidth ${u} must be divisible by workgroupSize[0]${t[0]}. tileInner ${a} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${f}<${n}>, ${u/f}>, ${d}>;
var<workgroup> mm_Bsub: array<array<vec4<${n}>, ${l/e[0]}>, ${a}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${f};
const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${o?`0`:`i32(globalId.z)`};
  ${r?`let batchIndices = ${r.offsetToIndices(`u32(batch)`)};`:``}
  let globalRowStart = i32(workgroupId.y) * ${c};

  let num_tiles = ${o?`${Math.ceil(s/a)}`:`(uniforms.dim_inner - 1) / tileInner + 1`};
  var kStart = ${o?`i32(globalId.z) * ${s}`:`0`};

  var acc: array<vec4<${n}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${p};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${Vu(i,r)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${p}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${r?`, batchIndices`:``});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${f===3?``:`let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];`}

          ${Hu(i,f)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},Wu=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?`, batchIndices`:``});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?`, batchIndices`:``});
            `,Gu=e=>e?`let ACached = mm_Asub[k][tileRow + innerRow];`:`let ACached = mm_Asub[tileRow + innerRow][k];`,Ku=(e,t,n=`f32`,r,i=!1,a=32,o=!1,s=32,c=!1)=>{let l=e[1]*t[1],u=e[0]*t[0],d=i?l:a,f=i?a:l;if(f%t[1]!==0||d%t[0]!==0||a%t[1]!==0)throw Error(`tileAHight ${f} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${d} must be divisible by workgroupSize[0]${t[0]}, tileInner ${a} must be divisible by workgroupSize[1]${t[1]}`);let p=f/t[1],m=d/t[0],h=a/t[1],g=c?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${l};
    let globalColStart = i32(workgroupId.x) * ${u};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${f}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${d}; inputCol = inputCol + ${t[0]}) {
          ${Wu(i,r)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${a}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${u}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${r?`, batchIndices`:``});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${n}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${i?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${l};

let tileRowA = i32(localId.y) * ${p};
let tileColA = i32(localId.x) * ${m};
let tileRowB = i32(localId.y) * ${h};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${p}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${m}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${Wu(i,r)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${h}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${r?`, batchIndices`:``});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${n}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${Gu(i)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${n}, ${d}>, ${f}>;
  var<workgroup> mm_Bsub : array<array<${n}, ${u}>, ${a}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${o?`0`:`i32(globalId.z)`};
    ${r?`let batchIndices = ${r.offsetToIndices(`u32(batch)`)};`:``}
    let num_tiles = ${o?`${Math.ceil(s/a)}`:`(uniforms.dim_inner - 1) / tileInner + 1`};
    var kStart = ${o?`i32(globalId.z) * ${s}`:`0`};

    var acc : array<array<${n}, colPerThread>, rowPerThread>;
    ${g}
  }
`},qu=(e,t,n,r,i=!1)=>{let[a,o,s,c]=r,l=Es(r[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${Nu(e,l)} {
      var value = ${Nu(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${o.type.indices};
        ${Ru(`aIndices`,o,o.rank-2,a.rank,`batchIndices`)}
        ${o.indicesSet(`aIndices`,o.rank-2,`u32(row)`)}
        ${o.indicesSet(`aIndices`,o.rank-1,`u32(colIn)`)}
        value = ${o.getByIndices(`aIndices`)};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${Nu(e,l)} {
      var value = ${Nu(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${s.type.indices};
        ${Ru(`bIndices`,s,s.rank-2,a.rank,`batchIndices`)}
        ${s.indicesSet(`bIndices`,s.rank-2,`u32(row)`)}
        ${s.indicesSet(`bIndices`,s.rank-1,`u32(colIn)`)}
        value = ${s.getByIndices(`bIndices`)};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Nu(e,l)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${i?`bias[colIn]`:`${Nu(e,l)}(bias[row])`};`:``}
        ${n}
        ${c.setByIndices(`vec3<u32>(coords)`,`value`)}
      }
    }
    `},Ju=(e,t,n,r,i=!1,a)=>{let o=e[0].dims,s=e[1].dims,c=o.slice(0,-2),l=s.slice(0,-2),u=r?r.slice(0,-2):n.slice(0,-2),d=z.size(u),f=o[o.length-2],p=o[o.length-1],m=s[s.length-1],h=p%4==0&&m%4==0,g=f<=8?[4,1,1]:[4,4,1],_=[8,8,1],v=[Math.ceil(m/_[0]/g[0]),Math.ceil(f/_[1]/g[1]),Math.ceil(d/_[2]/g[2])],y=h?4:1,b=[...c,f,p/y],x=b.length,S=[...l,p,m/y],ee=S.length,te=[d,f,m/y],ne=[{type:6,data:f},{type:6,data:m},{type:6,data:p}];ku(t,ne),ne.push(...V(u,b,S));let re=[`rank`,`rank`],ie=e.length>2;return ie&&(ne.push(...V(e[2].dims)),re.push(`rank`)),ne.push(...V(te)),{name:`MatMul`,shaderCache:{hint:`${g};${t.activation};${h};${i}`,inputDependencies:re},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:v[0],y:v[1],z:v[2]},programUniforms:ne}),getShaderSource:n=>{let r=u.length,a=Ps(`batchDims`,e[0].dataType,r,1),o=Es(e[0].dataType),s=U(`a`,e[0].dataType,x,y),c=U(`b`,e[1].dataType,ee,y),l=W(`result`,e[0].dataType,te.length,y),d=[s,c];if(ie){let t=i?y:1;d.push(U(`bias`,e[2].dataType,e[2].dims.length,t))}let f=[{name:`dim_a_outer`,type:`i32`},{name:`dim_b_outer`,type:`i32`},{name:`dim_inner`,type:`i32`}];Au(t,f);let p=Es(l.type.tensor),m=Ou(t,l.type.value,p),v=qu(y,ie,m,[a,s,c,l],i);return`
  ${n.registerUniforms(f).registerInternalVariables(a).declareVariables(...d,l)}
  ${v}
  ${h?Uu(g,_,o,a):Ku(g,_,o,a)}
                   `}}}}),Xu,Zu,Qu=L(()=>{R(),ts(),G(),Mu(),Fu(),Lu(),Yu(),Xu=(e,t,n,r,i=!1,a,o=4,s=4,c=4,l=`f32`)=>{let u=e=>{switch(e){case 1:return`resData = x[xIndex];`;case 3:return`resData = vec3<${l}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return`resData = x[xIndex / 4];`;default:throw Error(`innerElementSize ${e} is not supported.`)}},d=e=>{switch(e){case 1:return`return w[row * i32(uniforms.w_shape[3]) + colIn];`;case 4:return`return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];`;default:throw Error(`innerElementSize ${e} is not supported.`)}},f=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,p=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,m=e?`i32(uniforms.x_shape[1])`:`i32(uniforms.x_shape[2])`,h=e?`i32(uniforms.x_shape[2])`:`i32(uniforms.x_shape[3])`,g=e?`row`:`col`,_=e?`col`:`row`,v=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?`i32(uniforms.result_shape[2])`:`i32(uniforms.result_shape[3])`};
    let outRow = ${g} / outWidth;
    let outCol = ${g} % outWidth;

    let WRow = ${_} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${_} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${_} % inChannels;
    var resData = ${Nu(o,l)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${m} && xCol >= 0 && xCol < ${h}) {
      ${f}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${u(o)}
    }
    return resData;`,y=e?t&&r?`
    let col = colIn * ${o};
    ${v}`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${v}
    }
    return ${Nu(o,l)}(0.0);`:r&&n?`
    let col = colIn * ${o};
    ${v}`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${v}
    }
    return ${Nu(o,l)}(0.0);`,b=e?r&&n?d(s):`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${d(s)}
    }
    return ${Nu(s,l)}(0.0);`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${d(s)}
    }
    return ${Nu(s,l)}(0.0);`,x=Nu(c,l),S=Nu(e?o:s,l),ee=Nu(e?s:o,l),te=Ou(a,x,l);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${S} {
      ${e?y:b}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${ee} {
      ${e?b:y}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${x}) {
      let col = colIn * ${c};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?`i32(uniforms.result_shape[2])`:`i32(uniforms.result_shape[3])`};
      ${p}
      ${Pu(i)}
      ${te}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},Zu=(e,t,n,r,i,a,o,s,c)=>{let l=t.format===`NHWC`,u=l?e[0].dims[3]:e[0].dims[1],d=n[0],f=l?n[2]:n[3],p=l?n[1]:n[2],m=l?n[3]:n[1],h=l&&(u%4==0||u%3==0)&&m%4==0,g=l?m:f*p,_=l?f*p:m,v=[8,8,1],y=r<=8?[4,1,1]:[4,4,1],b=[Math.ceil(g/v[0]/y[0]),Math.ceil(_/v[1]/y[1]),Math.ceil(d/v[2]/y[2])];es(`verbose`,()=>`[conv2d_mm_webgpu] dispatch = ${b}`);let x=h?l&&u%4!=0?3:4:1,S=v[1]*y[1],ee=v[0]*y[0],te=Math.max(v[0]*x,v[1]),ne=r%S===0,re=i%ee===0,ie=a%te===0,ae=h?[x,4,4]:[1,1,1],C=[{type:6,data:r},{type:6,data:i},{type:6,data:a},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];ku(t,C),C.push(...V(e[0].dims,e[1].dims));let oe=[`rank`,`rank`];return o&&(C.push(...V(e[2].dims)),oe.push(`rank`)),C.push(...V(n)),{name:`Conv2DMatMul`,shaderCache:{hint:`${t.cacheKey};${x};${h};${ne};${re};${ie};${S};${ee};${te}`,inputDependencies:oe},getRunData:()=>({outputs:[{dims:c?c(n):n,dataType:e[0].dataType}],dispatchGroup:{x:b[0],y:b[1],z:b[2]},programUniforms:C}),getShaderSource:r=>{let i=[{name:`dim_a_outer`,type:`i32`},{name:`dim_b_outer`,type:`i32`},{name:`dim_inner`,type:`i32`},{name:`pad`,type:`i32`,length:2},{name:`stride`,type:`i32`,length:2},{name:`dilation`,type:`i32`,length:2}];Au(t,i);let a=h?4:1,c=Es(e[0].dataType),u=`
      fn setOutputAtIndex(flatIndex : i32, value : ${h?`vec4<${c}>`:c}) {
        result[flatIndex] = ${h?`vec4<${c}>`:c}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${h?`vec4<${c}>`:c}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${h?`/ 4`:``}, value);
      }`,d=[U(`x`,e[0].dataType,e[0].dims.length,x===3?1:x),U(`w`,e[1].dataType,e[1].dims.length,a)],f=W(`result`,e[0].dataType,n.length,a);if(o){let t=U(`bias`,e[2].dataType,e[2].dims.length,a);d.push(t),u+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${h?`vec4<${c}>`:c} {
          return bias[coords.${l?`w`:`y`}${h?`/ 4`:``}];
        }`}return`
        ${Iu(`uniforms.result_strides`)}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${r.registerUniforms(i).declareVariables(...d,f)}
        ${u}
        ${Xu(l,ne,re,ie,o,t,ae[0],ae[1],ae[2],c)}
        ${h?Uu(y,v,c,void 0,!l,te):Ku(y,v,c,void 0,!l,te,!1,void 0,s)}`}}}}),$u,ed,td,nd,rd,id,ad,od,sd=L(()=>{R(),ts(),B(),G(),Mu(),Fu(),$u=e=>{let t=1;for(let n=0;n<e.length;n++)t*=e[n];return t},ed=e=>typeof e==`number`?[e,e,e]:e,td=(e,t)=>t<=1?e:e+(e-1)*(t-1),nd=(e,t,n,r=1)=>{let i=td(t,r);return Math.floor((e[0]*(n-1)-n+i)/2)},rd=(e,t,n,r,i)=>{i??=nd(e,t[0],r[0]);let a=[0,0,0,n];for(let n=0;n<3;n++)e[n]+2*i>=t[n]&&(a[n]=Math.trunc((e[n]-t[n]+2*i)/r[n]+1));return a},id=(e,t,n,r,i,a,o,s,c,l)=>{let u,d,f,p;if(e===`VALID`&&(e=0),typeof e==`number`){u={top:e,bottom:e,left:e,right:e,front:e,back:e};let m=rd([t,n,r,1],[s,c,l],1,[i,a,o],e);d=m[0],f=m[1],p=m[2]}else if(Array.isArray(e)){if(!e.every((e,t,n)=>e===n[0]))throw Error(`Unsupported padding parameter: ${e}`);u={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let m=rd([t,n,r,1],[s,c,l],1,[i,a,o],e[0]);d=m[0],f=m[1],p=m[2]}else if(e===`SAME_UPPER`){d=Math.ceil(t/i),f=Math.ceil(n/a),p=Math.ceil(r/o);let e=(d-1)*i+s-t,m=(f-1)*a+c-n,h=(p-1)*o+l-r,g=Math.floor(e/2),_=e-g,v=Math.floor(m/2),y=m-v,b=Math.floor(h/2);u={top:v,bottom:y,left:b,right:h-b,front:g,back:_}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:u,outDepth:d,outHeight:f,outWidth:p}},ad=(e,t,n,r,i,a=!1,o=`channelsLast`)=>{let s,c,l,u,d;if(o===`channelsLast`)[s,c,l,u,d]=e;else if(o===`channelsFirst`)[s,d,c,l,u]=e;else throw Error(`Unknown dataFormat ${o}`);let[f,,p,m,h]=t,[g,_,v]=ed(n),[y,b,x]=ed(r),S=td(p,y),ee=td(m,b),te=td(h,x),{padInfo:ne,outDepth:re,outHeight:ie,outWidth:ae}=id(i,c,l,u,g,_,v,S,ee,te),C=a?f*d:f,oe=[0,0,0,0,0];return o===`channelsFirst`?oe=[s,C,re,ie,ae]:o===`channelsLast`&&(oe=[s,re,ie,ae,C]),{batchSize:s,dataFormat:o,inDepth:c,inHeight:l,inWidth:u,inChannels:d,outDepth:re,outHeight:ie,outWidth:ae,outChannels:C,padInfo:ne,strideDepth:g,strideHeight:_,strideWidth:v,filterDepth:p,filterHeight:m,filterWidth:h,effectiveFilterDepth:S,effectiveFilterHeight:ee,effectiveFilterWidth:te,dilationDepth:y,dilationHeight:b,dilationWidth:x,inShape:e,outShape:oe,filterShape:t}},od=(e,t,n,r,i,a)=>{let o=a===`channelsLast`;o?e[0].dims[3]:e[0].dims[1];let s=[64,1,1],c={x:n.map((e,t)=>t)},l=[Math.ceil($u(c.x.map(e=>n[e]))/s[0]),1,1];es(`verbose`,()=>`[conv3d_naive_webgpu] dispatch = ${l}`);let u=[{type:12,data:z.size(n)},{type:12,data:r},{type:12,data:i},{type:12,data:t.strides},{type:12,data:t.dilations}];ku(t,u),u.push(...V(e[0].dims,e[1].dims));let d=[`rank`,`rank`],f=e.length===3;return f&&(u.push(...V(e[2].dims)),d.push(`rank`)),u.push(...V(n)),{name:`Conv3DNaive`,shaderCache:{hint:`${t.cacheKey};${o};1;${f}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:l[0],y:l[1],z:l[2]},programUniforms:u}),getShaderSource:a=>{let s=[{name:`output_size`,type:`u32`},{name:`filter_dims`,type:`u32`,length:r.length},{name:`pads`,type:`u32`,length:i.length},{name:`strides`,type:`u32`,length:t.strides.length},{name:`dilations`,type:`u32`,length:t.dilations.length}];Au(t,s);let c=Es(e[0].dataType),l=U(`x`,e[0].dataType,e[0].dims.length,1),u=U(`W`,e[1].dataType,e[1].dims.length,1),d=[l,u],p=W(`result`,e[0].dataType,n.length,1),m=``;if(f){let t=U(`bias`,e[2].dataType,e[2].dims.length,1);d.push(t),m+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${c} {
          return bias[${o?H(`coords`,4,5):H(`coords`,1,5)}];
        }`}let h=Nu(1,c),g=Ou(t,h,c);return`
            ${m}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${l.getByIndices(`aIndices`)};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${u.getByIndices(`aIndices`)};
            }
          ${a.registerUniforms(s).declareVariables(...d,p)}
          ${a.mainStart()}
          ${a.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
              let coords = ${p.offsetToIndices(`global_idx`)};
              let batch = ${H(`coords`,0,l.rank)};
              let d2 = ${o?H(`coords`,l.rank-1,l.rank):H(`coords`,1,l.rank)};
              let xFRCCorner = vec3<u32>(${o?H(`coords`,1,l.rank):H(`coords`,2,l.rank)},
              ${o?H(`coords`,2,l.rank):H(`coords`,3,l.rank)},
              ${o?H(`coords`,3,l.rank):H(`coords`,4,l.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${o?H(`uniforms.x_shape`,1,l.rank):H(`uniforms.x_shape`,2,l.rank)};
              let xShapeZ = ${o?H(`uniforms.x_shape`,2,l.rank):H(`uniforms.x_shape`,3,l.rank)};
              let xShapeW = ${o?H(`uniforms.x_shape`,3,l.rank):H(`uniforms.x_shape`,4,l.rank)};
              let xShapeU = ${o?H(`uniforms.x_shape`,4,l.rank):H(`uniforms.x_shape`,1,l.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${o?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${o?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${o?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${o?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${f?`value = value + getBiasByOutputCoords(coords)`:``};
              ${g}
              result[global_idx] = f32(value);
          }`}}}}),cd,ld,ud=L(()=>{R(),B(),G(),Mu(),cd=(e,t,n,r)=>{let i=e.length>2,a=i?`value += b[output_channel];`:``,o=e[0].dims,s=e[1].dims,c=t.format===`NHWC`,l=c?n[3]:n[1],u=l/t.group,d=c&&u>=4?Os(l):1,f=z.size(n)/d,p=[{type:12,data:f},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:u}];ku(t,p),p.push(...V(o,[s[0],s[1],s[2],s[3]/d]));let m=i?[`rank`,`rank`,`rank`]:[`rank`,`rank`];return p.push(...V([n[0],n[1],n[2],n[3]/d])),{name:`GroupedConv`,shaderCache:{hint:`${t.cacheKey}_${d}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:p}),getShaderSource:r=>{let l=W(`output`,e[0].dataType,n.length,d),u=Es(l.type.tensor),f=Ou(t,l.type.value,u),p=U(`x`,e[0].dataType,o.length),m=U(`w`,e[1].dataType,s.length,d),h=[p,m];i&&h.push(U(`b`,e[2].dataType,e[2].dims,d));let g=[{name:`output_size`,type:`u32`},{name:`dilations`,type:`u32`,length:t.dilations.length},{name:`strides`,type:`u32`,length:2},{name:`pads`,type:`u32`,length:2},{name:`output_channels_per_group`,type:`u32`}];Au(t,g);let _=c?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${p.get(`batch`,`xHeight`,`xWidth`,`input_channel`)};
            let wVal = ${m.get(`wHeight`,`wWidth`,`wInChannel`,`output_channel`)};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${p.get(`batch`,`input_channel`,`xHeight`,`xWidth`)};
            let wVal = ${m.get(`output_channel`,`wInChannel`,`wHeight`,`wWidth`)};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${r.registerUniforms(g).declareVariables(...h,l)}

  ${r.mainStart()}
    ${r.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}

    let outputIndices = ${l.offsetToIndices(`global_idx`)};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${c?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${c?1:2}], outputIndices[${c?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${d} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${c?2:1}];

    var value: ${l.type.value} = ${l.type.value}(0);
    ${_}
    ${a}
    ${f}
    ${l.setByOffset(`global_idx`,`value`)}
  }`}}},ld=(e,t,n,r)=>{let i=e.length>2,a=Os(n[3]),o=Os(n[2]),s=z.size(n)/a/o,c=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/a],l=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/a],u=[n[0],n[1],n[2],n[3]/a],d=[{type:12,data:s},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];ku(t,d),d.push(...V(c,l,u));let f=(o-1)*t.strides[1]+l[1];return{name:`GroupedConv-Vectorize`,shaderCache:{hint:`${t.cacheKey};${a};${o};${f};${l[0]};${l[1]}`,inputDependencies:i?[`rank`,`rank`,`type`]:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}),getShaderSource:n=>{let r=W(`output`,e[0].dataType,u.length,a),s=Es(r.type.tensor),d=Ou(t,r.type.value,s),p=U(`x`,e[0].dataType,c.length,a),m=U(`w`,e[1].dataType,l.length,a),h=[p,m];i&&h.push(U(`b`,e[2].dataType,e[2].dims,a));let g=i?`value += b[output_channel];`:``,_=[{name:`output_size`,type:`u32`},{name:`strides`,type:`i32`,length:2},{name:`pads`,type:`i32`,length:2}];return Au(t,_),`
  ${n.registerUniforms(_).declareVariables(...h,r)}
  ${n.mainStart()}
    ${n.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${o}u;
    let col = (index1 % width1) * ${o}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${p.type.value}, ${f}>;
    var values: array<${r.type.value}, ${o}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${l[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${f}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${p.get(`batch`,`u32(x_height)`,`u32(x_width)`,`input_channel`)};
          } else {
            x_vals[i] = ${p.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${l[1]}; w_width++) {
          let w_val = ${m.get(`w_height`,`w_width`,`0`,`output_channel`)};
          for (var i = 0u; i < ${o}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${o}u; i++) {
      var value = values[i];
      ${g}
      ${d}
      ${r.set(`batch`,`row`,`col + i`,`output_channel`,`value`)};
    }
  }`}}}}),dd,fd,pd,md,hd,gd,_d,vd,yd,bd=L(()=>{B(),Qu(),sd(),Yu(),ud(),Mu(),Bu(),Ks(),dd=(e,t,n,r,i,a)=>{let o=e[0],s=e.slice(a?1:2,a?3:4),c=s.length,l=t[0],u=t.slice(2).map((e,t)=>e+(e-1)*(n[t]-1)),d=s.map((e,t)=>e+r[t]+r[t+c]).map((e,t)=>Math.floor((e-u[t]+i[t])/i[t]));return d.splice(0,0,o),d.splice(a?3:1,0,l),d},fd=[2,3,1,0],pd=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw Error(`Conv requires 2 or 3 inputs`);if(e[0].dims.length>5)throw Error(`greater than 5D is not supported`);if(e[0].dims.length!==e[1].dims.length)throw Error(`filter does not have same dimension as input`);if(e[0].dims[t.format===`NHWC`?e[0].dims.length-1:1]!==e[1].dims[1]*t.group)throw Error(`FILTER_IN_CHANNEL should be equal to DATA_CHANNEL`);if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw Error(`invalid bias`);let n=e[0].dims.length-2;if(t.dilations.length!==n)throw Error(`dilations should be ${n}D`);if(t.strides.length!==n)throw Error(`strides should be ${n}D`);if(t.pads.length!==n*2)throw Error(`pads should be ${n*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw Error(`invalid kernel shape`)},md=(e,t)=>{let n=e.kernelShape.slice();n.length<t[1].dims.length-2&&n.push(...Array(t[1].dims.length-2-n.length).fill(0));for(let e=2;e<t[1].dims.length;++e)n[e-2]===0&&(n[e-2]=t[1].dims[e]);let r=e.pads.slice();bs.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,n,r,e.format===`NHWC`,e.autoPad);let i=Object.assign({},e);return Object.assign(i,{kernelShape:n,pads:r}),i},hd=e=>{let t=ju(e),n=e.format;return{autoPad:[`NOTSET`,`VALID`,`SAME_UPPER`,`SAME_LOWER`][e.auto_pad],format:n,dilations:e.dilations,group:e.group,kernelShape:e.kernel_shape,pads:e.pads,strides:e.strides,wIsConst:e.w_is_const(),...t,cacheKey:`${e.format};${t.activation};`}},gd=(e,t,n,r)=>{let i=n.format===`NHWC`,a=dd(t[0].dims,t[1].dims,n.dilations,n.pads,n.strides,i);if(n.group!==1){let o=[t[0]];if(i){let r=e.kernelCustomData.wT??e.compute(Us(t[1],fd),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=r),o.push(r)}else o.push(t[1]);t.length===3&&o.push(t[2]),!e.adapterInfo.isArchitecture(`ampere`)&&i&&t[1].dims[0]===n.group&&t[1].dims[1]===1&&n.dilations[0]===1&&n.dilations[1]===1?e.compute(ld(o,n,a,r),{inputs:o}):e.compute(cd(o,n,a,r),{inputs:o});return}let o=t.length===3,s=t[0].dims[i?1:2],c=t[0].dims[i?2:3],l=t[0].dims[i?3:1],u=t[1].dims[2],d=t[1].dims[3],f=a[i?1:2],p=a[i?2:3],m=a[i?3:1],h=i&&u===s&&d===c&&n.pads[0]===0&&n.pads[1]===0;if(h||u===1&&d===1&&n.dilations[0]===1&&n.dilations[1]===1&&n.strides[0]===1&&n.strides[1]===1&&n.pads[0]===0&&n.pads[1]===0){let u=a[0],d,g,_,v=[];if(i){let r=e.kernelCustomData.wT??e.compute(Us(t[1],fd),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];if(n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=r),h){let e=s*c*l;d=t[0].reshape([1,u,e]),g=r.reshape([1,e,m]),_=[1,u,m]}else d=t[0].reshape([u,s*c,l]),g=r.reshape([1,l,m]),_=[u,f*p,m];v.push(d),v.push(g)}else d=t[0].reshape([u,l,s*c]),g=t[1].reshape([1,m,l]),_=[u,m,f*p],v.push(g),v.push(d);o&&v.push(t[2]);let y=_[2],b=v[0].dims[v[0].dims.length-1];y<8&&b<8?e.compute(zu(v,n,a,_,i,r),{inputs:v}):e.compute(Ju(v,n,a,_,i,r),{inputs:v});return}let g=e.kernelCustomData.wT??e.compute(Us(t[1],fd),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=g);let _=[t[0],g];o&&_.push(t[2]);let v=i?f*p:m,y=i?m:f*p,b=u*d*l;e.compute(Zu(_,n,a,v,y,b,o,!0,r),{inputs:_})},_d=(e,t)=>{let n=t.format===`NHWC`,r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=[0,t.pads[0],0,t.pads[1]],a=[1].concat(t.strides),o=[1].concat(t.dilations),s=[1].concat(t.kernelShape),c=md({...t,pads:i,strides:a,dilations:o,kernelShape:s},r);gd(e,r,c,e=>n?[e[0],e[2],e[3]]:[e[0],e[1],e[3]])},vd=(e,t,n)=>{let r=n.format===`NHWC`?`channelsLast`:`channelsFirst`,i=md(n,t),a=n.autoPad===`NOTSET`?n.pads:n.autoPad,o=ad(t[0].dims,t[1].dims,n.strides,n.dilations,a,!1,r);e.compute(od(t,i,o.outShape,[o.filterDepth,o.filterHeight,o.filterWidth],[o.padInfo.front,o.padInfo.top,o.padInfo.left],r))},yd=(e,t)=>{if(pd(e.inputs,t),e.inputs[0].dims.length===3)_d(e,t);else if(e.inputs[0].dims.length===5)vd(e,e.inputs,t);else{let n=md(t,e.inputs);gd(e,e.inputs,n)}}}),xd,Sd=L(()=>{R(),ts(),B(),G(),xd=(e,t,n)=>{let r=e.length>2,i=t.outputShape,a=t.format===`NHWC`,o=t.group,s=e[1].dims,c=s[2]/o,l=s[3],u=a?Os(c):1,d=a?Os(l):1,f=a?l===1?u:d:1,p=z.size(i)/d,m=[Math.ceil(p/64),1,1];es(`verbose`,()=>`[conv2d_backprop_webgpu] dispatch = ${m}`);let h=[`rank`,`rank`],g=[t.strides[0],t.strides[1]],_=[t.kernelShape[a?1:2],t.kernelShape[a?2:3]],v=[t.dilations[0],t.dilations[1]],y=[_[0]+(t.dilations[0]<=1?0:(t.kernelShape[a?1:2]-1)*(t.dilations[0]-1)),_[1]+(t.dilations[1]<=1?0:(t.kernelShape[a?2:3]-1)*(t.dilations[1]-1))],b=[y[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),y[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],x=[{type:12,data:p},{type:12,data:g},{type:12,data:_},{type:12,data:v},{type:12,data:y},{type:6,data:b},{type:12,data:c},{type:12,data:l},...V(e[0].dims,e[1].dims)];return r&&(x.push(...V(e[2].dims)),h.push(`rank`)),x.push(...V(i)),{name:`ConvTranspose2D`,shaderCache:{hint:`${t.cacheKey};${u}${f}${d}${l===1}`,inputDependencies:h},getRunData:()=>({dispatchGroup:{x:m[0],y:m[1],z:m[2]},outputs:[{dims:n?n(i):i,dataType:e[0].dataType}],programUniforms:x}),getShaderSource:t=>{let n=[{name:`output_size`,type:`u32`},{name:`strides`,type:`u32`,length:g.length},{name:`filter_dims`,type:`u32`,length:_.length},{name:`dilations`,type:`u32`,length:_.length},{name:`effective_filter_dims`,type:`u32`,length:y.length},{name:`pads`,type:`i32`,length:b.length},{name:`input_channels_per_group`,type:`u32`},{name:`output_channels_per_group`,type:`u32`}],o=Es(e[0].dataType),s=a?1:2,c=a?2:3,p=a?3:1,m=U(`W`,e[1].dataType,e[1].dims.length,f),h=U(`Dy`,e[0].dataType,e[0].dims.length,u),v=[h,m];r&&v.push(U(`bias`,e[2].dataType,[i[p]].length,d));let x=W(`result`,e[0].dataType,i.length,d),S=`
            let outputIndices = ${x.offsetToIndices(`global_idx * ${d}`)};
            let batch = ${x.indicesGet(`outputIndices`,0)};
            let d1 = ${x.indicesGet(`outputIndices`,p)};
            let r = ${x.indicesGet(`outputIndices`,s)};
            let c = ${x.indicesGet(`outputIndices`,c)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${x.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${o}(dyRCorner) + ${o}(wR)) / ${o}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${o}(uniforms.Dy_shape[${s}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }

              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${o}(dyCCorner) + ${o}(wC)) / ${o}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${o}(uniforms.Dy_shape[${c}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group; d2 = d2 + ${u}) {
                  let xValue = ${a?h.getByOffset(`${h.indicesToOffset(`${h.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${u}`):h.get(`batch`,`inputChannel`,`idyR`,`idyC`)};
                  ${(()=>{let e=``;if(u===1)e+=`
        let w_offset = ${m.indicesToOffset(`${m.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
        let wValue = ${m.getByOffset(`w_offset / ${f}`)};
        dotProd = dotProd + xValue * wValue;`;else if(l===1)e+=`
          let wValue = ${m.getByOffset(`${m.indicesToOffset(`${m.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)} / ${f}`)};
          dotProd = dotProd + dot(xValue, wValue);`;else for(let t=0;t<u;t++)e+=`
            let wValue${t} = ${m.getByOffset(`${m.indicesToOffset(`${m.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${t}, wOutChannel)`)} / ${f}`)};
            dotProd = dotProd + xValue[${t}] * wValue${t};`;return e})()}
                  inputChannel = inputChannel + ${u};
                }
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${r?` + bias[d1 / ${d}]`:``};
            ${x.setByOffset(`global_idx`,`value`)};
          `;return`
    ${t.registerUniforms(n).declareVariables(...v,x)}
      ${t.mainStart()}
      ${t.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)};
    ${S}}`}}}}),Cd,wd,Td,Ed,Dd,Od,kd,Ad,jd,Md=L(()=>{Sd(),Mu(),Ks(),Cd=(e,t,n,r,i,a)=>(e-1)*t+n+(r-1)*i+1-a,wd=(e,t,n,r,i)=>{let a=Math.floor(e/2);t===`SAME_UPPER`?(n[r]=a,n[i]=e-a):t===`SAME_LOWER`&&(n[r]=e-a,n[i]=a)},Td=(e,t,n,r,i,a,o,s,c,l)=>{let u=e.length-2,d=l.length===0;c.length<u&&c.push(...Array(u-c.length).fill(0));let f=e[0],p=t[s?3:1]*i;for(let i=0,f=e.length-u-+!!s;i<u;++i,++f){let s=e[f],p=d?s*o[i]:l[i],m=Cd(s,o[i],a[i],t[f],n[i],p);wd(m,r,a,i,i+u),d&&l.push(o[i]*(s-1)+c[i]+(t[f]-1)*n[i]+1-a[i]-a[i+u])}l.splice(0,0,f),l.splice(s?3:1,0,p)},Ed=(e,t)=>{let n=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((e,t)=>e*t,1)===0){n.length=0;for(let e=2;e<t[1].dims.length;++e)n.push(t[1].dims[e])}let r=e.format===`NHWC`;n.splice(0,0,t[1].dims[0]),n.splice(r?3:1,0,t[1].dims[1]);let i=e.pads.slice(),a=e.outputShape.slice(),o=e.outputPadding.slice(),s=t[0].dims,c=e.dilations.slice();if(c.reduce((e,t)=>e+t,0)===0){let e=t[0].dims.length-2;c=Array(e).fill(1)}let l=e.strides.slice();if(l.reduce((e,t)=>e+t,0)===0){let e=t[0].dims.length-2;l=Array(e).fill(1)}Td(s,n,c,e.autoPad,e.group,i,l,r,o,a);let u=Object.assign({},e);return Object.assign(u,{kernelShape:n,pads:i,outputPadding:o,outputShape:a,dilations:c,strides:l}),u},Dd=e=>{let t=ju(e),n=e.format,r=[`NOTSET`,`VALID`,`SAME_UPPER`,`SAME_LOWER`][typeof e.autoPad>`u`?0:e.autoPad],i=e.dilations,a=e.group,o=e.kernelShape,s=e.pads,c=e.strides,l=e.wIsConst();return{autoPad:r,format:n,dilations:i,group:a,kernelShape:o,outputPadding:e.outputPadding,outputShape:e.outputShape,pads:s,strides:c,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},Od=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw Error(`Conv requires 2 or 3 inputs`);if(e[0].dims.length!==4&&e[0].dims.length!==3)throw Error(`currently only support 2-dimensional conv`);if(e[0].dims.length!==e[1].dims.length)throw Error(`filter does not have same dimension as input`);if(e[0].dims[t.format===`NHWC`?e[0].dims.length-1:1]!==e[1].dims[0])throw Error(`FILTER_IN_CHANNEL should be equal to DATA_CHANNEL`);let n=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==n))throw Error(`invalid bias`);let r=e[0].dims.length-2;if(t.dilations.reduce((e,t)=>e+t,0)>0&&t.dilations.length!==r)throw Error(`dilations should be ${r}D`);if(t.strides.reduce((e,t)=>e+t,0)>0&&t.strides.length!==r)throw Error(`strides should be ${r}D`);if(t.pads.reduce((e,t)=>e+t,0)>0&&t.pads.length!==r*2)throw Error(`pads should be ${r*2}D`);if(t.outputPadding.length!==r&&t.outputPadding.length!==0)throw Error(`output_padding should be ${r}D`);if(t.kernelShape.reduce((e,t)=>e+t,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw Error(`invalid kernel shape`);if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw Error(`invalid output shape`)},kd=(e,t,n,r)=>{let i=e.kernelCustomData.wT??e.compute(Us(t[1],[2,3,0,1]),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=i);let a=[t[0],i];t.length===3&&a.push(t[2]),e.compute(xd(a,n,r),{inputs:a})},Ad=(e,t)=>{let n=t.format===`NHWC`,r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=t.kernelShape;(i.length===0||i[0]===0)&&(i=[e.inputs[1].dims[2]]);let a=t.dilations;(a.length===0||a[0]===0)&&(a=[1]);let o=t.strides;(o.length===0||o[0]===0)&&(o=[1]);let s=t.pads;s.length===0&&(s=[0,0]),s=[0,s[0],0,s[1]],o=[1].concat(o),a=[1].concat(a),i=[1].concat(i);let c=t.outputPadding;c=[0].concat(c);let l=Ed({...t,pads:s,strides:o,dilations:a,kernelShape:i,outputPadding:c},r);kd(e,r,l,e=>n?[e[0],e[2],e[3]]:[e[0],e[1],e[3]])},jd=(e,t)=>{if(Od(e.inputs,t),e.inputs[0].dims.length===3)Ad(e,t);else{let n=Ed(t,e.inputs);kd(e,e.inputs,n)}}}),Nd,Pd,Fd,Id=L(()=>{R(),B(),_s(),G(),Nd=(e,t,n,r)=>{let i=z.size(t),a=t.length,o=U(`input`,e,a),s=W(`output`,e,a),c=n.dataType===6?n.getInt32Array()[0]:Number(n.getBigInt64Array()[0]),l=z.normalizeAxis(c,a);return{name:`CumSum`,shaderCache:{hint:r.cacheKey,inputDependencies:[`rank`]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},{type:12,data:l},...V(t,t)]}),getShaderSource:e=>{let t=` i32(${o.indicesGet(`inputIndices`,`uniforms.axis`)}) `,n=H(`uniforms.input_shape`,`uniforms.axis`,a),i=r.reverse?t+(r.exclusive?` + 1`:``):`0`,c=r.reverse?n:t+(r.exclusive?``:` + 1`);return`
                ${e.registerUniform(`outputSize`,`u32`).registerUniform(`axis`,`u32`).declareVariables(o,s)}
                ${e.mainStart()}
                  ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
                  var inputIndices = ${s.offsetToIndices(`global_idx`)};
                  var sum = ${s.type.value}(0);
                  let first : i32 = ${i};
                  let last : i32 = ${c};
                  for (var i : i32 = first; i < last; i++) {
                    ${o.indicesSet(`inputIndices`,`uniforms.axis`,`u32(i)`)};
                    sum = sum + ${o.getByIndices(`inputIndices`)};
                  }
                  ${s.setByOffset(`global_idx`,`sum`)};
                }`}}},Pd=(e,t)=>{let n=e.inputs[0].dims,r=e.inputs[0].dataType,i=e.inputs[1];e.compute(Nd(r,n,i,t),{inputs:[0]})},Fd=e=>{let t=e.exclusive===1,n=e.reverse===1;return gs({exclusive:t,reverse:n})}}),Ld,Rd,zd,Bd,Vd,Hd=L(()=>{R(),B(),_s(),G(),Ld=e=>{if(!e||e.length!==1)throw Error(`DepthToSpace requires 1 input.`);if(e[0].dims.length!==4)throw Error(`DepthToSpace requires 4D input.`)},Rd=(e,t,n,r)=>{let i=[];i.push(`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`);for(let r=0;r<t;++r)i.push(n.indicesSet(`a`,e[r],`i[${r}]`));return i.push(`return a;}`),i.join(`
`)},zd=(e,t)=>{let n,r,i,a,o,s,c=t.format===`NHWC`,l=t.blocksize,u=t.mode===`DCR`;c?([n,r,i,a]=e.dims,o=u?[n,r,i,l,l,a/l**2]:[n,r,i,a/l**2,l,l],s=u?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([n,r,i,a]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],o=u?[n,l,l,a/l**2,r,i]:[n,a/l**2,l,l,r,i],s=u?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let d=e.reshape(o),f=d.dims.length,p=e.dataType,m=U(`a`,p,f),h=W(`output`,p,f);return{name:`DepthToSpace`,shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:[`rank`]},getRunData:e=>{let t=c?[n,r*l,i*l,a/l**2]:[n,a/l**2,r*l,i*l],o=z.size(t),u=d.dims,f=z.sortBasedOnPerm(u,s);return{outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:[{type:12,data:o},...V(u,f)]}},getShaderSource:e=>`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(m,h)}

  ${Rd(s,f,m,h)}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}

    let indices = ${h.offsetToIndices(`global_idx`)};
    let aIndices = perm(indices);

    ${h.setByOffset(`global_idx`,m.getByIndices(`aIndices`))}
  }`}},Bd=(e,t)=>{Ld(e.inputs),e.compute(zd(e.inputs[0],t))},Vd=e=>gs({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Ud,Wd,Gd,Kd,qd,Jd,Yd,Xd,Zd,Qd,$d,ef=L(()=>{R(),B(),_s(),G(),Ud=`[a-zA-Z]|\\.\\.\\.`,Wd=`(`+Ud+`)+`,Gd=`^`+Wd+`$`,Kd=`(`+Wd+`,)*`+Wd,qd=`^`+Kd+`$`,Jd=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let n=this.symbolToIndices.get(e);n===void 0?n=[t]:n.push(t),this.symbolToIndices.set(e,n)}},Yd=class{constructor(e,t){this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=[],this.outputDims=[];let[n,r]=t.includes(`->`)?t.split(`->`,2):[t,``];if(!n.match(RegExp(qd)))throw Error(`Invalid LHS term`);if(n.split(`,`).forEach((t,n)=>{let r=e[n].dims.slice();if(!t.match(RegExp(Gd)))throw Error(`Invalid LHS term`);let i=this.processTerm(t,!0,r,n);this.lhs.push(i)}),r===``)r+=[...this.symbolToInfo.entries()].filter(([e,t])=>t.count===1||e===`...`).map(([e])=>e).join(``);else if(!r.match(RegExp(Wd)))throw Error(`Invalid RHS`);r.match(RegExp(Ud,`g`))?.forEach(e=>{if(e===`...`)this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let t=this.symbolToInfo.get(e);if(t===void 0)throw Error(`Invalid RHS symbol`);this.outputDims.push(t.dimValue)}}),this.rhs=this.processTerm(r,!1,this.outputDims)}addSymbol(e,t,n){let r=this.symbolToInfo.get(e);if(r!==void 0){if(r.dimValue!==t&&r.count!==1)throw Error(`Dimension mismatch`);r.count++,r.inputIndices.push(n)}else r={count:1,dimValue:t,inputIndices:[n]};this.symbolToInfo.set(e,r)}processTerm(e,t,n,r=-1){let i=n.length,a=!1,o=[],s=0;if(!e.match(RegExp(Gd))&&!t&&e!==``)throw Error(`Invalid LHS term`);let c=e.match(RegExp(Ud,`g`)),l=new Jd(r);return c?.forEach((e,u)=>{if(e===`...`){if(a)throw Error(`Only one ellipsis is allowed per input term`);a=!0;let e=i-c.length+1;if(e<0)throw Error(`Ellipsis out of bounds`);if(o=n.slice(s,s+e),this.hasEllipsis){if(this.ellipsisDims.length!==o.length||this.ellipsisDims.toString()!==o.toString())throw Error(`Ellipsis dimensions mismatch`)}else if(t)this.hasEllipsis=!0,this.ellipsisDims=o;else throw Error(`Ellipsis must be specified in the LHS`);for(let e=0;e<o.length;e++){let t=String.fromCharCode(48+e);l.addSymbol(t,u+e),this.addSymbol(t,n[s++],r)}}else l.addSymbol(e,u+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(e,n[s++],r)}),l}},Xd=e=>e+`_max`,Zd=(e,t,n,r)=>{let i=e.map(e=>e.length).map((e,n)=>U(`input${n}`,t,e)),a=z.size(r),o=W(`output`,t,r.length),s=[...n.symbolToInfo.keys()].filter(e=>!n.rhs.symbolToIndices.has(e));return{name:`Einsum`,shaderCache:{hint:n.equation,inputDependencies:e.map(()=>`rank`)},getRunData:()=>{let i=s.filter(e=>n.symbolToInfo.has(e)).map(e=>({type:12,data:n.symbolToInfo.get(e)?.dimValue||0}));i.push({type:12,data:a});let o=e.map((e,t)=>[...V(e)]).reduce((e,t)=>e.concat(t),i);return o.push(...V(r)),{outputs:[{dims:r,dataType:t}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:o}},getShaderSource:e=>{let t=[],r=[],a=[],c=[],l=[],u=n.symbolToInfo.size===n.rhs.symbolToIndices.size;n.symbolToInfo.forEach((e,s)=>{if(n.rhs.symbolToIndices.has(s)){let r=n.rhs.symbolToIndices.get(s)?.[0];r!==void 0&&n.lhs.forEach((n,a)=>{if(e.inputIndices.includes(a)){let e=n.symbolToIndices.get(s);if(e===void 0)throw Error(`Invalid symbol error`);e.forEach(e=>{t.push(`${i[a].indicesSet(`input${a}Indices`,e,o.indicesGet(`outputIndices`,r))}`)})}})}else n.lhs.forEach((t,n)=>{if(e.inputIndices.includes(n)){let e=t.symbolToIndices.get(s);if(e===void 0)throw Error(`Invalid symbol error`);e.forEach(e=>{r.push(`${i[n].indicesSet(`input${n}Indices`,e,`${s}`)}`)}),l.push(`prod *= ${i[n].getByIndices(`input${n}Indices`)};`)}}),a.push(`for(var ${s}: u32 = 0; ${s} < uniforms.${Xd(s)}; ${s}++) {`),c.push(`}`)});let d=u?[...t,`let sum = ${i.map((e,t)=>e.getByIndices(`input${t}Indices`)).join(` * `)};`]:[...t,`var sum = 0.0;`,...a,...r,`var prod = 1.0;`,...l,`sum += prod;`,...c];return`
            ${e.registerUniforms(s.map(e=>({name:`${Xd(e)}`,type:`u32`}))).registerUniform(`outputSize`,`u32`).declareVariables(...i,o)}

            ${e.mainStart()}
            ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
            var outputIndices = ${o.offsetToIndices(`global_idx`)};
            ${i.map((e,t)=>`var input${t}Indices: ${i[t].type.indices};`).join(`
`)}
            ${d.join(`
`)};
            ${o.setByOffset(`global_idx`,`sum`)};
          }`}}},Qd=(e,t)=>{let n=new Yd(e.inputs,t.equation),r=n.outputDims,i=e.inputs.map((e,t)=>e.dims);e.compute(Zd(i,e.inputs[0].dataType,n,r))},$d=e=>{let t=e.equation.replace(/\s+/g,``);return gs({equation:t})}}),tf,nf,rf,af,of,sf=L(()=>{R(),B(),G(),tf=e=>{if(!e||e.length!==2)throw Error(`Expand requires 2 input.`);let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=n.length<t.length?0:n.length-t.length,i=t.length<n.length?0:t.length-n.length;for(;r<n.length&&i<t.length;++r,++i)if(n[r]!==t[i]&&n[r]!==1&&t[i]!==1)throw Error(`Expand requires shape to be broadcastable to input`)},nf=(e,t)=>{let n=e.length-t.length,r=[];for(let t=0;t<n;++t)r.push(e[t]);for(let i=0;i<t.length;++i)r.push(t[i]===1?e[i+n]:t[i]);return r},rf=(e,t)=>e.length>t.length?nf(e,t):nf(t,e),af=e=>{let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=rf(t,n),i=e[0].dataType,a=i===9||z.size(t)===1,o=i===9||t.length>0&&t[t.length-1]%4==0?4:1,s=a||r.length>0&&r[r.length-1]%4==0?4:1,c=Math.ceil(z.size(r)/s),l=e=>{let n=U(`input`,i,t.length,o),a=W(`output`,i,r.length,s),c;if(i===9){let e=(e,t,r=``)=>`
          let outputIndices${t} = ${a.offsetToIndices(`outputOffset + ${t}u`)};
          let offset${t} = ${n.broadcastedIndicesToOffset(`outputIndices${t}`,a)};
          let index${t} = offset${t} / 4u;
          let component${t} = offset${t} % 4u;
          ${e}[${t}] = ${r}(${n.getByOffset(`index${t}`)}[component${t}]);
        `;c=`
        let outputOffset = global_idx * ${s};
        var data = vec4<u32>(0);
        ${e(`data`,0,`u32`)}
        ${e(`data`,1,`u32`)}
        ${e(`data`,2,`u32`)}
        ${e(`data`,3,`u32`)}
        ${a.setByOffset(`global_idx`,`data`)}
      }`}else c=`
        let outputIndices = ${a.offsetToIndices(`global_idx * ${s}`)};
        let inputOffset = ${n.broadcastedIndicesToOffset(`outputIndices`,a)};
        let data = ${a.type.value}(${n.getByOffset(`inputOffset / ${o}`)});
        ${a.setByOffset(`global_idx`,`data`)}
      }`;return`
    ${e.registerUniform(`vec_size`,`u32`).declareVariables(n,a)}
    ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.vec_size`)}
    ${c}`},u=[{type:12,data:c},...V(t,r)];return{name:`Expand`,shaderCache:{hint:`${r.length};${o}${s}`,inputDependencies:[`rank`]},getShaderSource:l,getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:u})}},of=e=>{tf(e.inputs),e.compute(af(e.inputs),{inputs:[0]})}}),cf,lf,uf=L(()=>{R(),B(),G(),nu(),cf=e=>{let t=e[0].dataType,n=z.size(e[0].dims),r=z.size(e[1].dims),i=r%4==0;return{name:`FastGeluWithBias`,shaderCache:{hint:`${i}`,inputDependencies:[`type`,`type`]},getShaderSource:e=>{let n=U(`x`,t,[1],4),r=U(`bias`,t,[1],4),a=W(`y`,t,[1],4),o=[{name:`output_vec_size`,type:`u32`},{name:`bias_size`,type:`u32`}],s=e=>`
      let bias${e}_offset: u32 = (global_idx * 4 + ${e}) % uniforms.bias_size;
      let bias${e} = ${r.getByOffset(`bias${e}_offset / 4`)}[bias${e}_offset % 4];`,c=i?`
      let bias = ${r.getByOffset(`global_idx % (uniforms.bias_size / 4)`)};`:`${s(0)}${s(1)}${s(2)}${s(3)}
      let bias = ${n.type.value}(bias0, bias1, bias2, bias3);`;return`${e.registerUniforms(o).declareVariables(n,r,a)}

    ${Jl(Ds(t))}

    ${e.mainStart(ws)}
      ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_vec_size`)}

      let x = ${n.getByOffset(`global_idx`)};
      ${c}
      let x_in = x + bias;
      ${a.setByOffset(`global_idx`,Yl(`x_in`))}
    }`},getRunData:e=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],programUniforms:[{type:12,data:Math.ceil(n/4)},{type:12,data:r}],dispatchGroup:{x:Math.ceil(n/ws/4)}})}},lf=e=>{e.inputs.length<2||z.size(e.inputs[1].dims)===0?Xl(e):e.compute(cf(e.inputs))}}),df,ff,pf,mf,hf=L(()=>{R(),B(),_s(),G(),df=e=>{if(!e||e.length!==2)throw Error(`Gather requires 2 inputs.`)},ff=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,a=z.normalizeAxis(t.axis,i),o=n.slice(0);o.splice(a,1,...r);let s=n[a],c=e[0].dataType===9?4:1,l=Math.ceil(z.size(o)/c),u=[{type:12,data:l},{type:6,data:s},{type:12,data:a},...V(e[0].dims,e[1].dims,o)];return{name:`Gather`,shaderCache:{hint:t.cacheKey,inputDependencies:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:u}),getShaderSource:t=>{let n=U(`data`,e[0].dataType,e[0].dims.length,c),s=U(`inputIndices`,e[1].dataType,e[1].dims.length),l=W(`output`,e[0].dataType,o.length,c),u=e=>{let t=r.length,c=`var indicesIndices${e}  = ${s.type.indices}(0);`;for(let n=0;n<t;n++)c+=`${t>1?`indicesIndices${e}[${n}]`:`indicesIndices${e}`} = ${o.length>1?`outputIndices${e}[uniforms.axis + ${n}]`:`outputIndices${e}`};`;c+=`
          var idx${e} = ${s.getByIndices(`indicesIndices${e}`)};
          if (idx${e} < 0) {
            idx${e} = idx${e} + uniforms.axisDimLimit;
          }
          var dataIndices${e} : ${n.type.indices};
        `;for(let n=0,r=0;n<i;n++)n===a?(c+=`${i>1?`dataIndices${e}[${n}]`:`dataIndices${e}`} = u32(idx${e});`,r+=t):(c+=`${i>1?`dataIndices${e}[${n}]`:`dataIndices${e}`} = ${o.length>1?`outputIndices${e}[${r}]`:`outputIndices${e}`};`,r++);return c},d;if(e[0].dataType===9){let e=(e,t,r=``)=>`
          let outputIndices${t} = ${l.offsetToIndices(`outputOffset + ${t}u`)};
          ${u(t)};
          let offset${t} = ${n.indicesToOffset(`dataIndices${t}`)};
          let index${t} = offset${t} / 4u;
          let component${t} = offset${t} % 4u;
          ${e}[${t}] = ${r}(${n.getByOffset(`index${t}`)}[component${t}]);
        `;d=`
        let outputOffset = global_idx * ${c};
        var value = vec4<u32>(0);
        ${e(`value`,0,`u32`)}
        ${e(`value`,1,`u32`)}
        ${e(`value`,2,`u32`)}
        ${e(`value`,3,`u32`)}
        ${l.setByOffset(`global_idx`,`value`)}
      `}else d=`
      let outputIndices = ${l.offsetToIndices(`global_idx`)};
      ${u(``)};
      let value = ${n.getByIndices(`dataIndices`)};
      ${l.setByOffset(`global_idx`,`value`)};
      `;return`
      ${t.registerUniform(`outputSize`,`u32`).registerUniform(`axisDimLimit`,`i32`).registerUniform(`axis`,`u32`).declareVariables(n,s,l)}
      ${t.mainStart()}
        ${t.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
        ${d}
      }`}}},pf=e=>gs({axis:e.axis}),mf=(e,t)=>{let n=e.inputs;df(n),e.compute(ff(e.inputs,t))}}),gf,_f,vf,yf=L(()=>{R(),B(),G(),gf=(e,t,n,r,i,a,o,s,c)=>{let l=[{type:12,data:a},{type:12,data:r},{type:12,data:i},{type:12,data:n},{type:12,data:o},{type:12,data:s},{type:12,data:c}],u=[a];return l.push(...V(t.dims,u)),e.compute({name:`computeSliceOffsets`,shaderCache:{hint:`${i.length}_${n.length}`,inputDependencies:[`rank`]},getRunData:()=>({outputs:[{dims:u,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:l}),getShaderSource:e=>{let r=[U(`indices_data`,t.dataType,t.dims.length),W(`input_slice_offsets_data`,12,1,1)],a=[{name:`output_size`,type:`u32`},{name:`batch_dims`,type:`u32`},{name:`input_dims`,type:`u32`,length:i.length},{name:`sizes_from_slice_dims_data`,type:`u32`,length:n.length},{name:`num_slices_per_batch`,type:`u32`},{name:`input_batch_stride`,type:`u32`},{name:`num_slice_dims`,type:`u32`}];return`
  ${e.registerUniforms(a).declareVariables(...r)}
  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${i.length===1?`index += i32(uniforms.input_dims);`:`index += i32(uniforms.input_dims[input_dim_idx]);`}
      }
      ${n.length===1?`relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);`:`relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);`}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`}},{inputs:[t],outputs:[-1]})[0]},_f=(e,t)=>{let n=e.inputs,r=n[0].dims,i=n[0].dataType,a=n[1].dims,o=a[a.length-1],s=z.sizeToDimension(a,a.length-1),c=z.sizeFromDimension(r,t.batchDims+o),l=z.sizeToDimension(r,t.batchDims),u=z.sizeFromDimension(r,t.batchDims),d=s/l,f=Array(o),p=c;for(let e=0;e<o;++e)f[o-1-e]=p,p*=r[t.batchDims+o-1-e];let m=gf(e,n[1],f,t.batchDims,r,s,d,u,o),h=t.batchDims+o;if(h>r.length)throw Error(`last dimension of indices must not be larger than rank of input tensor`);let g=a.slice(0,-1).concat(r.slice(h)),_=z.size(g),v=[{type:12,data:_},{type:12,data:c},...V(n[0].dims,m.dims,g)];e.compute({name:`GatherND`,shaderCache:{hint:t.cacheKey,inputDependencies:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:g,dataType:i}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:v}),getShaderSource:e=>{let t=U(`data`,n[0].dataType,n[0].dims.length),r=U(`slice_offsets`,12,m.dims.length),i=W(`output`,n[0].dataType,g.length);return`
          ${e.registerUniform(`output_size`,`u32`).registerUniform(`slice_size`,`u32`).declareVariables(t,r,i)}
            ${e.mainStart()}
            ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`}},{inputs:[n[0],m]})},vf=e=>({batchDims:e.batch_dims,cacheKey:``})}),bf,xf,Sf,Cf,wf=L(()=>{R(),B(),_s(),G(),bf=(e,t)=>{if(e.length<3||e.length>4)throw Error(`GatherBlockQuantized requires 3 or 4 inputs.`);let n=z.normalizeAxis(t.quantizeAxis,e[0].dims.length),r=t.blockSize,i=e[0],a=e[2],o=e.length===4?e[3]:void 0;if(a.dims.length!==i.dims.length||!i.dims.map((e,t)=>t===n?Math.ceil(e/r)===a.dims[t]:e===a.dims[t]).reduce((e,t)=>e&&t,!0))throw Error(`Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.`);if(o){if(o.dataType!==i.dataType)throw Error(`Zero point must have the same data type as the input tensor.`);if(o.dims.length!==a.dims.length||!o.dims.map((e,t)=>e===a.dims[t]).reduce((e,t)=>e&&t,!0))throw Error(`Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.`)}},xf=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,a=z.normalizeAxis(t.gatherAxis,i),o=z.normalizeAxis(t.quantizeAxis,i),s=n.slice(0);s.splice(a,1,...r);let c=z.size(s),l=e[2].dataType,u=e[0].dataType===22,d=[{type:12,data:c},{type:12,data:o},{type:12,data:a},{type:12,data:t.blockSize},...V(...e.map((e,t)=>e.dims),s)];return{name:`GatherBlockQuantized`,shaderCache:{hint:`${t.cacheKey};${e.filter((e,t)=>t!==1).map(e=>e.dims.join(`_`)).join(`;`)}`,inputDependencies:Array.from({length:e.length},(e,t)=>`rank`)},getRunData:()=>({outputs:[{dims:s,dataType:l}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:d}),getShaderSource:t=>{let i=U(`data`,e[0].dataType,e[0].dims.length),o=U(`inputIndices`,e[1].dataType,e[1].dims.length),c=U(`scales`,e[2].dataType,e[2].dims.length),d=e.length>3?U(`zeroPoint`,e[3].dataType,e[3].dims.length):void 0,f=W(`output`,l,s.length),p=[i,o,c];return d&&p.push(d),`
        ${t.registerUniforms([{name:`output_size`,type:`u32`},{name:`quantize_axis`,type:`u32`},{name:`gather_axis`,type:`u32`},{name:`block_size`,type:`u32`}]).declareVariables(...p,f)}
        ${t.mainStart()}
        let output_indices = ${f.offsetToIndices(`global_idx`)};
        var indices_indices = ${o.type.indices}(0);
        ${r.length>1?`
          for (var i: u32 = 0; i < ${r.length}; i++) {
            let index = ${f.indicesGet(`output_indices`,`uniforms.gather_axis + i`)};
            ${o.indicesSet(`indices_indices`,`i`,`index`)};
          }`:`indices_indices = ${f.indicesGet(`output_indices`,`uniforms.gather_axis`)};`};
        var data_indices = ${i.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${f.indicesGet(`output_indices`,`i`)};
          ${i.indicesSet(`data_indices`,`i`,`index`)};
        }
        var index_from_indices = ${o.getByIndices(`indices_indices`)};
        if (index_from_indices < 0) {
          index_from_indices += ${n[a]};
        }
        ${i.indicesSet(`data_indices`,`uniforms.gather_axis`,`u32(index_from_indices)`)};
        for (var i = uniforms.gather_axis + 1; i < ${s.length}; i++) {
          let index = ${f.indicesGet(`output_indices`,`i + ${r.length} - 1`)};
          ${i.indicesSet(`data_indices`,`i`,`index`)};
        }
        let data_offset = ${i.indicesToOffset(`data_indices`)};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${i.getByOffset(`data_offset / 8`)};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${u?`unpack4xI8`:`unpack4xU8`}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${c.indicesGet(`data_indices`,`uniforms.quantize_axis`)} / uniforms.block_size;
        ${c.indicesSet(`scale_indices`,`uniforms.quantize_axis`,`quantize_axis_index`)};
        var scale = ${c.getByIndices(`scale_indices`)};
        ${d?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${d.indicesToOffset(`zero_point_indices`)};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${d.getByOffset(`zero_point_offset / 8`)};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${u?`unpack4xI8`:`unpack4xU8`}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:`var zero_point = 0`};
        let dequantized_data = ${Ds(l)}(quantized_data - zero_point) * scale;
        ${f.setByOffset(`global_idx`,`dequantized_data`)};
    }`}}},Sf=(e,t)=>{let n=e.inputs;bf(n,t),e.compute(xf(e.inputs,t))},Cf=e=>gs({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),Tf,Ef,Df,Of,kf=L(()=>{R(),B(),_s(),G(),Tf=e=>{if(!e||e.length!==2)throw Error(`GatherElements requires 2 inputs.`);if(e[0].dims.length<1)throw Error(`GatherElements requires that the data input be rank >= 1.`);if(e[0].dims.length!==e[1].dims.length)throw Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},Ef=(e,t)=>{let n=e[0].dims,r=e[0].dataType,i=n.length,a=e[1].dims,o=e[1].dataType,s=z.normalizeAxis(t.axis,i),c=n[s],l=a.slice(0),u=z.size(l),d=U(`input`,r,i),f=U(`indicesInput`,o,a.length),p=W(`output`,r,l.length),m=[{type:12,data:u},{type:6,data:c},{type:12,data:s}];return m.push(...V(n,a,l)),{name:`GatherElements`,shaderCache:{inputDependencies:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:m}),getShaderSource:e=>`
      ${e.registerUniform(`outputSize`,`u32`).registerUniform(`axisDimLimit`,`i32`).registerUniform(`axis`,`u32`).declareVariables(d,f,p)}
      ${e.mainStart()}
      ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}

      let outputIndices = ${p.offsetToIndices(`global_idx`)};

      var idx = ${f.getByOffset(`global_idx`)};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${d.type.indices}(outputIndices);
      ${d.indicesSet(`inputIndices`,`uniforms.axis`,`u32(idx)`)};
      let value = ${d.getByIndices(`inputIndices`)};

      ${p.setByOffset(`global_idx`,`value`)};
  }`}},Df=e=>gs({axis:e.axis}),Of=(e,t)=>{let n=e.inputs;Tf(n),e.compute(Ef(e.inputs,t))}}),Af,jf,Mf,Nf,Pf=L(()=>{R(),B(),G(),Af=e=>{if(!e)throw Error(`Input is missing`);if(e.length<2||e.length>3)throw Error(`Invaid input number.`);if(e.length===3&&e[2].dims.length>2)throw Error(`Invalid input shape of C`);if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw Error(`Input types are mismatched`)},jf=(e,t)=>{let n=e[0].dims.slice(),r=e[1].dims.slice(),[i,a,o]=xs.getShapeOfGemmResult(n,t.transA,r,t.transB,e.length===3?e[2].dims:void 0),s=[i,a];if(!s)throw Error(`Can't use gemm on the given tensors`);let c=Math.ceil(a/16),l=Math.ceil(i/16);z.size(s);let u=[{type:12,data:c},{type:12,data:i},{type:12,data:a},{type:12,data:o},{type:1,data:t.alpha},{type:1,data:t.beta}],d=[`type`,`type`];return e.length===3&&(u.push(...V(e[2].dims)),d.push(`rank`)),u.push(...V(s)),{name:`GemmShared`,shaderCache:{hint:`${t.cacheKey}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:c*l},programUniforms:u}),getShaderSource:n=>{let r=U(`a`,e[0].dataType,e[0].dims),i=U(`b`,e[1].dataType,e[1].dims),a=null,o=[r,i];e.length===3&&(a=U(`c`,e[2].dataType,e[2].dims.length),o.push(a));let c=W(`output`,e[0].dataType,s.length);o.push(c);let l=[{name:`num_tile_n`,type:`u32`},{name:`M`,type:`u32`},{name:`N`,type:`u32`},{name:`K`,type:`u32`},{name:`alpha`,type:`f32`},{name:`beta`,type:`f32`}],u=``,d=``;t.transA&&t.transB?(d=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${r.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${i.type.value}(0);
      }
      `,u=`value += tile_a[k][local_id.y] * tile_b[local_id.x][k];`):t.transA&&!t.transB?(d=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${r.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${i.type.value}(0);
      }
      `,u=`value += tile_a[k][local_id.y] * tile_b[k][local_id.x];`):!t.transA&&t.transB?(d=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${r.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${i.type.value}(0);
      }
      `,u=`value += tile_a[local_id.y][k] * tile_b[local_id.x][k];`):!t.transA&&!t.transB&&(d=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${r.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${i.type.value}(0);
      }
      `,u=`value += tile_a[local_id.y][k] * tile_b[k][local_id.x];`);let f=t.alpha===1?``:`value *= uniforms.alpha;`;return`
  ${n.registerUniforms(l).declareVariables(...o)}
  var<workgroup> tile_a: array<array<${r.type.storage}, 16>, 16>;
  var<workgroup> tile_b: array<array<${i.type.storage}, 16>, 16>;
  ${n.mainStart([16,16,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * 16;
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * 16;
    let num_tiles = (uniforms.K - 1) / 16 + 1;
    var k_start = 0u;
    var value = ${c.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${d}
      k_start = k_start + 16;
      workgroupBarrier();

      for (var k: u32 = 0u; k < 16; k++) {
        ${u}
      }
      workgroupBarrier();
    }

    ${f}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${a==null?``:`let cOffset = ${a.broadcastedIndicesToOffset(`vec2(m, n)`,c)}; value += ${c.type.value}(uniforms.beta) * ${a.getByOffset(`cOffset`)};`}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`}}},Mf=e=>({transA:e.transA,transB:e.transB,alpha:e.alpha,beta:e.beta,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}),Nf=(e,t)=>{Af(e.inputs),e.compute(jf(e.inputs,t))}}),Ff,If,Lf,Rf,zf,Bf,Vf,Hf,Uf,Wf,Gf,Kf,qf,Jf,Yf=L(()=>{R(),B(),_s(),G(),[Ff,If,Lf,Rf]=[0,1,2,3],zf=e=>{if(e[0].dims.length!==4)throw Error(`only 4-D tensor is supported.`);if(e[0].dims.length!==e[1].dims.length)throw Error(`input dimensions must be equal to grid dimensions`);if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw Error(`grid batch size must match input batch size`)},Bf=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,Vf=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,Hf=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,Uf=e=>`
  ${e.paddingMode===`reflection`?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:``}
`,Wf=(e,t,n)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${Ff}] = batch;
     indices[${If}] = channel;`+(()=>{switch(n.paddingMode){case`zeros`:return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${Lf}] = u32(r);
            indices[${Rf}] = u32(c);
          }
        `;case`border`:return`
          indices[${Lf}] = u32(clamp(r, 0, H - 1));
          indices[${Rf}] = u32(clamp(c, 0, W - 1));
        `;case`reflection`:return`
          indices[${Lf}] = gs_reflect(r, border[1], border[3]);
          indices[${Rf}] = gs_reflect(c, border[0], border[2]);
        `;default:throw Error(`padding mode ${n.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices(`indices`)};
  }
`,Gf=(e,t,n)=>(()=>{switch(n.mode){case`nearest`:return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${Ff}], indices[${If}], border);
        `;case`bilinear`:return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${Ff}], indices[${If}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${Ff}], indices[${If}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${Ff}], indices[${If}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${Ff}], indices[${If}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case`bicubic`:return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${Ff}], indices[${If}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw Error(`mode ${n.mode} is not supported`)}})()+`${e.setByOffset(`global_idx`,`result`)}`,Kf=(e,t)=>{let n=U(`x`,e[0].dataType,e[0].dims.length),r=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],i=U(`grid`,e[1].dataType,r.length,2),a=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format===`NHWC`&&(a=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[Ff,If,Lf,Rf]=[0,3,1,2]);let o=W(`output`,e[0].dataType,a.length),s=n.type.value,c=[{type:12,data:z.size(a)},...V(e[0].dims,r,a)];return{name:`GridSample`,shaderCache:{hint:`${t.cacheKey}`,inputDependencies:[`type`,`type`]},getRunData:e=>{let t=z.size(a);return{outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(t/64)},programUniforms:c}},getShaderSource:e=>`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(n,i,o)}
  ${Bf}
  ${Vf(s)}
  ${Hf(t)}
  ${Uf(t)}
  ${Wf(n,s,t)}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
      let H_in = i32(uniforms.x_shape[${Lf}]);
      let W_in = i32(uniforms.x_shape[${Rf}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${o.offsetToIndices(`global_idx`)};
      var grid_indices = vec3<u32>(indices[${Ff}], indices[${Lf}], indices[${Rf}]);
      let nxy = ${i.getByIndices(`grid_indices`)};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${Gf(o,s,t)}
  }`}},qf=(e,t)=>{zf(e.inputs),e.compute(Kf(e.inputs,t))},Jf=e=>gs({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),Xf,Zf,Qf,$f,ep,tp,np,rp=L(()=>{R(),B(),_s(),is(),tl(),G(),Ks(),Xf=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Zf=(e,t)=>{let n=e[0],r=Xf(e,1),i=Xf(e,2),a=Xf(e,3),o=Xf(e,4),s=Xf(e,5),c=Xf(e,6),l=Xf(e,7);if(n.dims.length!==3&&n.dims.length!==5)throw Error(`Input query is expected to have 3 or 5 dimensions`);let u=n.dims[0],d=n.dims[1],f=n.dims.length===3?n.dims[2]:t.numHeads*n.dims[4],p=d,m=0,h=0,g=Math.floor(f/t.numHeads);if(c&&l&&z.size(c.dims)&&z.size(l.dims)){if(c.dims.length!==4)throw Error(`Input "past_key" is expected to have 4 dimensions`);if(c.dims[0]!==u||c.dims[1]!==t.numHeads||c.dims[3]!==g)throw Error(`Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)`);if(l.dims[0]!==u||l.dims[1]!==t.numHeads||l.dims[3]!==g)throw Error(`Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)`);if(c.dims[2]!==l.dims[2])throw Error(`Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)`);if(l.dims.length!==4)throw Error(`Input "past_value" is expected to have 4 dimensions`);m=c.dims[2],h=c.dims[2]}else if(c&&z.size(c.dims)||l&&z.size(l.dims))throw Error(`Input "past_key" and "past_value" shall be both present or both absent`);let _;if(r&&z.size(r.dims)>0){if(n.dims.length!==3)throw Error(`Input "query" is expected to have 3 dimensions when key is given`);if(r.dims.length<3||r.dims.length>5)throw Error(`Input "key" is expected to have 3, 4, or 5 dimensions`);if(n.dims[0]!==r.dims[0])throw Error(`Input "query" and "key" shall have same dim 0 (batch size)`);if(r.dims.length===3){if(r.dims[2]!==n.dims[2])throw Error(`Input "query" and "key" shall have same dim 2 (hidden_size)`);_=2,p=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==g)throw Error(`Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv`);if(i)throw Error(`Expect "value" be none when "key" has packed kv format.`);_=5,p=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==g)throw Error(`Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key`);_=0,p=r.dims[2]}}else{if(n.dims.length!==5)throw Error(`Input "query" is expected to have 5 dimensions when key is empty`);if(n.dims[2]!==t.numHeads||n.dims[3]!==3)throw Error(`Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv`);_=3}if(a&&z.size(a.dims)>0){if(a.dims.length!==1)throw Error(`Input "bias" is expected to have 1 dimension`);if(r&&r.dims.length===5&&r.dims[3]===2)throw Error(`bias is not allowed for packed kv.`)}let v=m+p,y=0;if(o&&z.size(o.dims)>0){y=8;let e=o.dims;throw e.length===1?e[0]===u?y=1:e[0]===3*u+2&&(y=3):e.length===2&&e[0]===u&&e[1]===v&&(y=5),Error(y===8?`Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)`:`Mask not supported`)}let b=!1,x=f;if(i&&z.size(i.dims)>0){if(i.dims.length!==3&&i.dims.length!==4)throw Error(`Input "value" is expected to have 3 or 4 dimensions`);if(n.dims[0]!==i.dims[0])throw Error(`Input "query" and "value" shall have same dim 0 (batch_size)`);if(i.dims.length===3){if(p!==i.dims[1])throw Error(`Input "key" and "value" shall have the same dim 1 (kv_sequence_length)`);x=i.dims[2]}else{if(p!==i.dims[2])throw Error(`Input "key" and "value" shall have the same dim 2 (kv_sequence_length)`);x=i.dims[1]*i.dims[3],b=!0}}if(o&&z.size(o.dims)>0)throw Error(`Key padding mask is not supported`);if(s&&z.size(s.dims)>0){if(s.dims.length!==4)throw Error(`Input "attention_bias" is expected to have 4 dimensions`);if(s.dims[0]!==u||s.dims[1]!==t.numHeads||s.dims[2]!==d||s.dims[3]!==v)throw Error(`Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)`)}return{batchSize:u,sequenceLength:d,pastSequenceLength:m,kvSequenceLength:p,totalSequenceLength:v,maxSequenceLength:h,inputHiddenSize:0,hiddenSize:f,vHiddenSize:x,headSize:g,vHeadSize:Math.floor(x/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:y,scale:t.scale,broadcastResPosBias:!1,passPastInKv:b,qkvFormat:_}},Qf=e=>gs({...e}),$f=gs({perm:[0,2,1,3]}),ep=(e,t,n,r,i,a,o)=>{let s=[r,i,a],c=z.size(s),l=[{type:12,data:c},{type:12,data:o},{type:12,data:a}];return e.compute({name:`MultiHeadAttentionAddBias`,shaderCache:{inputDependencies:[`type`,`type`]},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:l}),getShaderSource:e=>{let r=W(`qkv_with_bias`,t.dataType,s),i=U(`qkv`,t.dataType,s),a=U(`bias`,n.dataType,s);return`
  ${e.registerUniforms([{name:`output_size`,type:`u32`},{name:`bias_offset`,type:`u32`},{name:`hidden_size`,type:`u32`}]).declareVariables(i,a,r)}
  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`}},{inputs:[t,n],outputs:[-1]})[0]},tp=(e,t,n,r,i,a,o,s)=>{let c=a;if(o&&z.size(o.dims)>0){if(r===1)throw Error(`AddBiasReshape is not implemented. Please export your model with packed QKV or KV`);return c=ep(e,a,o,t,r,n*i,s),c=c.reshape([t,r,n,i]),n===1||r===1?c:e.compute(Us(c,$f.perm),{inputs:[c],outputs:[-1]})[0]}return a.dims.length===3&&(c=a.reshape([t,r,n,i])),n===1||r===1?c:e.compute(Us(c,$f.perm),{inputs:[c],outputs:[-1]})[0]},np=(e,t)=>{let n=Zf(e.inputs,t),r=e.inputs[0],i=Xf(e.inputs,1),a=Xf(e.inputs,2),o=Xf(e.inputs,3),s=Xf(e.inputs,4),c=Xf(e.inputs,5),l=Xf(e.inputs,6),u=Xf(e.inputs,7);if(r.dims.length===5)throw Error(`Packed QKV is not implemented`);if(i?.dims.length===5)throw Error(`Packed KV is not implemented`);let d=i&&a&&i.dims.length===4&&a.dims.length===4,f=tp(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,r,o,0);if(d)return Qc(e,f,i,a,s,void 0,l,u,c,n);if(!i||!a)throw Error(`key and value must be provided`);let p=tp(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.headSize,i,o,n.hiddenSize),m=tp(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.vHeadSize,a,o,2*n.hiddenSize);Qc(e,f,p,m,s,void 0,l,u,c,n)}}),ip,ap,op,sp,cp,lp,up,dp=L(()=>{R(),B(),_s(),G(),ip=e=>{if(!e||e.length<1)throw Error(`too few inputs`)},ap=(e,t)=>{let n=[],r=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(e=>n.push(Number(e))),r=n.length),gs({numOutputs:r,axis:t.axis,splitSizes:n})},op=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${H(`uniforms.size_in_split_axis`,`i`,e)}) {
        return i;
    }
    }
    return ${e}u;
}`,sp=e=>{let t=e.length,n=[];for(let r=0;r<t;++r){let i=e[r].setByIndices(`indices`,`input[global_idx]`);t===1?n.push(i):r===0?n.push(`if (output_number == ${r}u) { ${i} }`):r===t-1?n.push(`else { ${i} }`):n.push(`else if (output_number == ${r}) { ${i} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${n.join(`
`)}
      }`},cp=(e,t)=>{let n=e[0].dims,r=z.size(n),i=e[0].dataType,a=z.normalizeAxis(t.axis,n.length),o=Array(t.numOutputs),s=U(`input`,i,n.length),c=Array(t.numOutputs),l=[],u=[],d=0,f=[{type:12,data:r}];for(let r=0;r<t.numOutputs;r++){d+=t.splitSizes[r],c[r]=d;let s=n.slice();s[a]=t.splitSizes[r],u.push(s),o[r]=W(`output${r}`,i,s.length),l.push({dims:u[r],dataType:e[0].dataType})}return f.push({type:12,data:c},...V(n,...u)),{name:`Split`,shaderCache:{hint:t.cacheKey,inputDependencies:[`rank`]},getShaderSource:e=>`
  ${e.registerUniform(`input_size`,`u32`).registerUniform(`size_in_split_axis`,`u32`,c.length).declareVariables(s,...o)}
  ${op(c.length)}
  ${sp(o)}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.input_size`)}

    var indices = ${s.offsetToIndices(`global_idx`)};
    var index = ${s.indicesGet(`indices`,a)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${H(`uniforms.size_in_split_axis`,`output_number - 1u`,c.length)};
      ${s.indicesSet(`indices`,a,`index`)};
    }
    writeBufferData(output_number, indices, global_idx);
  }`,getRunData:()=>({outputs:l,dispatchGroup:{x:Math.ceil(r/64)},programUniforms:f})}},lp=(e,t)=>{ip(e.inputs);let n=e.inputs.length===1?t:ap(e.inputs,t);e.compute(cp(e.inputs,n),{inputs:[0]})},up=e=>{let t=e.axis,n=e.splitSizes,r=e.numOutputs<0?n.length:e.numOutputs;if(r!==n.length)throw Error(`numOutputs and splitSizes lengh must be equal`);return gs({axis:t,numOutputs:r,splitSizes:n})}}),fp,pp,mp,hp,gp=L(()=>{_s(),tl(),rp(),dp(),Ks(),fp=(e,t)=>{if(t.doRotary)throw Error(`GroupQuerryAttention do_rotary attribute is not supported`);if(t.doRotary&&e.length<=7)throw Error(`cos_cache and sin_cache inputs are required if do_rotary is specified`);let n=e[0],r=e[1],i=e[2],a=e[3],o=e[4];if(t.localWindowSize!==-1)throw Error(`Local attention is not supported`);if(t.softcap!==0)throw Error(`Softcap is not supported`);if(t.rotaryInterleaved!==0)throw Error(`Rotary interleaved is not supported`);if(t.smoothSoftmax)throw Error(`Smooth softmax is not supported`);if(n.dims.length!==3&&n.dims.length!==5)throw Error(`Input query is expected to have 3 or 5 dimensions`);let s=n.dims[0],c=n.dims[1],l=n.dims.length===3?n.dims[2]:t.numHeads*n.dims[4],u=c,d=0,f=!r||r.dims.length===0,p=Math.floor(f?l/(t.numHeads+2*t.kvNumHeads):l/t.numHeads);f&&(l=p*t.numHeads);let m=a&&a.dims.length!==0,h=o&&o.dims.length!==0;if(m&&a.dims.length===4&&a.dims[0]===s&&a.dims[1]!==t.kvNumHeads&&a.dims[2]===t.kvNumHeads&&a.dims[3]===p)throw Error(`BSNH pastKey/pastValue is not supported`);if(m&&h){if(a.dims.length!==4)throw Error(`Input "past_key" is expected to have 4 dimensions`);if(o.dims.length!==4)throw Error(`Input "past_value" is expected to have 4 dimensions`);d=a.dims[2]}else if(m||h)throw Error(`Input "past_key" and "past_value" shall be both present or both absent`);let g=1;if(r&&r.dims.length>0){if(n.dims.length!==3)throw Error(`Input "query" is expected to have 3 dimensions when key is given`);if(r.dims.length<3||r.dims.length>5)throw Error(`Input "key" is expected to have 3, 4, or 5 dimensions`);if(n.dims[0]!==r.dims[0])throw Error(`Input "query" and "key" shall have same dim 0 (batch size)`);if(r.dims.length===3){if(n.dims[2]%r.dims[2]!==0)throw Error(`Dimension 2 of "query" should be a multiple of "key"`);u=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==p)throw Error(`Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv`);if(i)throw Error(`Expect "value" be none when "key" has packed kv format.`);u=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==p)throw Error(`Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key`);u=r.dims[2]}}else{if(n.dims.length!==3&&n.dims.length!==5)throw Error(`Input "query" is expected to have 3 or 5 dimensions when key is empty`);if(n.dims.length===5&&(n.dims[2]!==t.numHeads||n.dims[3]!==3))throw Error(`Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv`);g=3}let _=!1,v=t.kvNumHeads?p*t.kvNumHeads:l;if(i&&i.dims.length>0){if(i.dims.length!==3&&i.dims.length!==4)throw Error(`Input "value" is expected to have 3 or 4 dimensions`);if(n.dims[0]!==i.dims[0])throw Error(`Input "query" and "value" shall have same dim 0 (batch_size)`);if(i.dims.length===3){if(u!==i.dims[1])throw Error(`Input "key" and "value" shall have the same dim 1 (kv_sequence_length)`);v=i.dims[2]}else{if(u!==i.dims[2])throw Error(`Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)`);v=i.dims[1]*i.dims[3],_=!0}}let y=e.length>4?e[5]:void 0;if(y&&y.dims.length!==1&&y.dims[0]!==s)throw Error(`Input "seqlens" is expected to have 1 dimension and the same dim 0 as batch_size`);return{batchSize:s,sequenceLength:c,pastSequenceLength:d,kvSequenceLength:u,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:l,vHiddenSize:v,headSize:p,vHeadSize:Math.floor(v/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:0,scale:t.scale,broadcastResPosBias:!1,passPastInKv:_,qkvFormat:g}},pp=gs({perm:[0,2,1,3]}),mp=(e,t,n)=>{let r=t,i=n.kvNumHeads;return t.dims.length===3&&n.kvSequenceLength!==0&&(r=t.reshape([n.batchSize,n.kvSequenceLength,i,n.headSize]),r=e.compute(Us(r,pp.perm),{inputs:[r],outputs:[-1]})[0]),r},hp=(e,t)=>{let n=fp(e.inputs,t);if(e.inputs[0].dims.length===5)throw Error(`Packed QKV is not implemented`);if(e.inputs[1]?.dims.length===5)throw Error(`Packed KV is not implemented`);let r=e.inputs[0],i=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,a=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,o=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,s=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,c=e.inputs.length>4?e.inputs[5]:void 0,l=e.inputs.length>5?e.inputs[6]:void 0,u=n.kvNumHeads?n.kvNumHeads:n.numHeads,d=gs({axis:2,numOutputs:3,splitSizes:[n.numHeads*n.headSize,u*n.headSize,u*n.headSize]}),[f,p,m]=!i&&!a?e.compute(cp([r],d),{inputs:[r],outputs:[-1,-1,-1]}):[r,i,a],h=tp(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,f,void 0,0);Qc(e,h,mp(e,p,n),mp(e,m,n),void 0,void 0,o,s,void 0,n,c,l)}}),_p,vp,yp,bp,xp=L(()=>{R(),B(),Ks(),G(),_p=(e,t,n,r,i,a,o,s)=>{let c=Os(a),l=c===1?`f32`:`vec${c}f`,u=c===1?`vec2f`:`mat2x${c}f`,d=i*o,f=64;d===1&&(f=256);let p=[i,o,a/c],m=[i,o,2],h=[`rank`,`type`,`type`],g=[];return g.push(...V(p,m)),e.compute({name:`InstanceNormComputeChannelScaleShift`,shaderCache:{hint:`${c};${s};${f}`,inputDependencies:h},getRunData:()=>({outputs:[{dims:m,dataType:1}],dispatchGroup:{x:d},programUniforms:g}),getShaderSource:e=>{let i=U(`x`,t.dataType,3,c),a=[i,U(`scale`,n.dataType,n.dims),U(`bias`,r.dataType,r.dims),W(`output`,1,3,2)];return`
  var<workgroup> workgroup_shared : array<${u}, ${f}>;
  const workgroup_size = ${f}u;
  ${e.declareVariables(...a)}
  ${e.mainStart(f)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${l}(0);
    var squared_sum = ${l}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${l}(${i.get(`batch`,`channel`,`h`)});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${u}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${js(`workgroup_shared[0][0]`,c)} / f32(hight * ${c});
      let squared_sum_final = ${js(`workgroup_shared[0][1]`,c)} / f32(hight * ${c});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${s}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`}},{inputs:[t,n,r],outputs:[-1]})[0]},vp=(e,t,n)=>{let r=t[0].dims,i=r,a=r[0],o=r[1],s=z.sizeFromDimension(r,2),c=Os(s),l=z.size(i)/c,u=_p(e,t[0],t[1],t[2],a,s,o,n.epsilon),d=[a,o,s/c],f=[a,o];e.compute({name:`InstanceNormalization`,shaderCache:{hint:`${c}`,inputDependencies:[`type`,`none`]},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:[{type:12,data:l},...V(d,f,d)]}),getShaderSource:e=>{let n=U(`x`,t[0].dataType,d.length,c),r=U(`scale_shift`,1,f.length,2),i=W(`output`,t[0].dataType,d.length,c),a=[n,r,i];return`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(...a)}
  ${e.mainStart()}
  ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
      let outputIndices = ${i.offsetToIndices(`global_idx`)};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${r.getByIndices(`vec2<u32>(batch, channel)`)};
      let value = ${n.getByOffset(`global_idx`)} * ${i.type.value}(scale_shift.x) + ${i.type.value}(scale_shift.y);
      ${i.setByOffset(`global_idx`,`value`)};
  }`}},{inputs:[t[0],u]})},yp=(e,t,n)=>{let r=t[0].dims,i=r,a=r[0],o=r[r.length-1],s=z.sizeFromDimension(r,1)/o,c=Os(o),l=z.size(i)/c,u=[{type:12,data:s},{type:12,data:Math.floor(o/c)}],d=[`type`,`type`],f=!1,p=[0,r.length-1];for(let e=0;e<r.length-2;e++)f||=r[e+1]!==1,p.push(e+1);f&&=r[r.length-1]!==1;let m=f?e.compute(Us(e.inputs[0],p),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:r.length},(e,t)=>r[p[t]])),h=_p(e,m,t[1],t[2],a,s,o,n.epsilon);e.compute({name:`InstanceNormalizationNHWC`,shaderCache:{hint:`${c}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:u}),getShaderSource:e=>{let n=Es(t[0].dataType),r=c===1?`vec2f`:`mat${c}x2f`,a=e=>{let t=e===0?`x`:`y`,r=c===1?`f32`:`vec${c}f`;switch(c){case 1:return`${n}(${r}(scale.${t}))`;case 2:return`vec2<${n}>(${r}(scale[0].${t}, scale[1].${t}))`;case 4:return`vec4<${n}>(${r}(scale[0].${t}, scale[1].${t}, scale[2].${t}, scale[3].${t}))`;default:throw Error(`Not supported compoents ${c}`)}},o=U(`input`,t[0].dataType,t[0].dims,c),s=W(`output`,t[0].dataType,i,c);return`
  @group(0) @binding(0) var<storage, read> input : array<${o.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${r}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${s.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${e.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${a(0)}, ${a(1)});
  }`}},{inputs:[t[0],h]})},bp=(e,t)=>{t.format===`NHWC`?yp(e,e.inputs,t):vp(e,e.inputs,t)}}),Sp,Cp,wp,Tp=L(()=>{R(),B(),G(),Sp=e=>{if(!e||e.length<2)throw Error(`layerNorm requires at least 2 inputs.`)},Cp=(e,t,n)=>{let r=t.simplified,i=e[0].dims,a=e[1],o=!r&&e[2],s=i,c=z.normalizeAxis(t.axis,i.length),l=z.sizeToDimension(i,c),u=z.sizeFromDimension(i,c),d=z.size(a.dims),f=o?z.size(o.dims):0;if(d!==u||o&&f!==u)throw Error(`Size of X.shape()[axis:] == ${u}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${d} and bias size of ${f}`);let p=[];for(let e=0;e<i.length;++e)e<c?p.push(i[e]):p.push(1);let m=Os(u),h=[`type`,`type`],g=[{type:12,data:l},{type:1,data:u},{type:12,data:Math.floor(u/m)},{type:1,data:t.epsilon}];o&&h.push(`type`);let _=n>1,v=n>2,y=t=>{let n=Es(e[0].dataType),i=[U(`x`,e[0].dataType,e[0].dims,m),U(`scale`,a.dataType,a.dims,m)];return o&&i.push(U(`bias`,o.dataType,o.dims,m)),i.push(W(`output`,e[0].dataType,s,m)),_&&i.push(W(`mean_data_output`,1,p)),v&&i.push(W(`inv_std_output`,1,p)),`
  ${t.registerUniforms([{name:`norm_count`,type:`u32`},{name:`norm_size`,type:`f32`},{name:`norm_size_vectorized`,type:`u32`},{name:`epsilon`,type:`f32`}]).declareVariables(...i)}
  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.norm_count`)}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${ks(`f32`,m)};
    var mean_square_vector = ${ks(`f32`,m)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${As(n,m,`x[h + offset]`)};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${js(`mean_vector`,m)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${js(`mean_square_vector`,m)} / uniforms.norm_size ${r?``:`- mean * mean`} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${As(n,m,`x[j + offset]`)};
      let f32scale = ${As(n,m,`scale[j]`)};
      output[j + offset] = ${i[0].type.value}((f32input ${r?``:`- mean`}) * inv_std_dev * f32scale
        ${o?`+ ${As(n,m,`bias[j]`)}`:``}
      );
    }

    ${_?`mean_data_output[global_idx] = mean`:``};
    ${v?`inv_std_output[global_idx] = inv_std_dev`:``};
  }`},b=[{dims:s,dataType:e[0].dataType}];return _&&b.push({dims:p,dataType:1}),v&&b.push({dims:p,dataType:1}),{name:`LayerNormalization`,shaderCache:{hint:`${m};${n};${r}`,inputDependencies:h},getRunData:()=>({outputs:b,dispatchGroup:{x:Math.ceil(l/64)},programUniforms:g}),getShaderSource:y}},wp=(e,t)=>{Sp(e.inputs),e.compute(Cp(e.inputs,t,e.outputCount))}}),Ep,Dp,Op=L(()=>{B(),Bu(),Yu(),Ep=e=>{if(!e||e.length!==2)throw Error(`MatMul requires 2 inputs.`);if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw Error(`shared dimension does not match.`)},Dp=e=>{Ep(e.inputs);let t=ys.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw Error(`Can't use matmul on the given tensors`);let n=t[t.length-1],r=e.inputs[0].dims[e.inputs[0].dims.length-1];if(n<8&&r<8)e.compute(zu(e.inputs,{activation:``},t));else{let i=t[t.length-2],a=z.size(e.inputs[0].dims.slice(0,-2)),o=z.size(e.inputs[1].dims.slice(0,-2));if(a!==1&&i===1&&o===1){let i=e.inputs[0].reshape([1,a,r]),o=e.inputs[1].reshape([1,r,n]),s=[1,a,n],c=[i,o];e.compute(Ju(c,{activation:``},t,s),{inputs:c})}else e.compute(Ju(e.inputs,{activation:``},t))}}}),kp,Ap,jp,Mp,Np,Pp=L(()=>{R(),B(),_s(),G(),kp=(e,t)=>{if(e.length<3||e.length>4)throw Error(`MatMulNBits requires 3 or 4 inputs`);let n=e[0],r=n.dims.length;if(n.dims[r-1]!==t.k)throw Error(`The last dim of input shape does not match the k value`);let i=Math.floor((t.k+t.blockSize-1)/t.blockSize),a=t.blockSize/8*t.bits,o=e[1];if(!z.areEqual(o.dims,[t.n,i,a]))throw Error(`The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize`);let s=e[2].dims;if(z.size(s)!==t.n*i)throw Error(`scales input size error.`);if(e.length===4){let n=e[3].dims,r=t.bits>4?t.n*i:t.n*Math.floor((i+1)/2);if(z.size(n)!==r)throw Error(`zeroPoints input size error.`)}},Ap=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],a=t.k,o=t.n,s=n.slice(0,r-2),c=z.size(s),l=e[1].dims[2]/4,u=e[0].dataType,d=Os(t.k),f=Os(l),p=Os(o),m=s.concat([i,o]),h=i>1&&o/p%2==0?2:1,g=z.size(m)/p/h,_=[],v=[c,i,a/d],y=z.convertShape(e[1].dims).slice();y.splice(-1,1,l/f),_.push(...V(v)),_.push(...V(y)),_.push(...V(e[2].dims)),e.length===4&&_.push(...V(z.convertShape(e[3].dims)));let b=[c,i,o/p];return _.push(...V(b)),{name:`MatMulNBits`,shaderCache:{hint:`${t.blockSize};${t.bits};${d};${f};${p};${h};64`,inputDependencies:Array(e.length).fill(`rank`)},getRunData:()=>({outputs:[{dims:m,dataType:u}],dispatchGroup:{x:g},programUniforms:_}),getShaderSource:n=>{let r=v.length,i=U(`a`,e[0].dataType,r,d),a=U(`b`,12,y.length,f),o=U(`scales`,e[2].dataType,e[2].dims.length),s=[i,a,o],c=e.length===4?U(`zero_points`,12,e[3].dims.length):void 0;c&&s.push(c);let u=b.length,m=W(`output`,e[0].dataType,u,p),g=Es(e[0].dataType),_=(()=>{switch(d){case 1:return`array<${g}, 8>`;case 2:return`mat4x2<${g}>`;case 4:return`mat2x4<${g}>`;default:throw Error(`${d}-component is not supported.`)}})(),x=()=>{let e=`
          // reuse a data
            var input_offset = ${i.indicesToOffset(`${i.type.indices}(batch, row, word_offset)`)};
            var a_data: ${_};
            for (var j: u32 = 0; j < ${8/d}; j++) {
              a_data[j] = ${i.getByOffset(`input_offset`)};
              input_offset++;
            }
          `;for(let t=0;t<p*h;t++)e+=`
            b_value = ${f===1?`b${t}_data`:`b${t}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${_}(${Array.from({length:4},(e,t)=>`${g}(b_value_lower[${t}]), ${g}(b_value_upper[${t}])`).join(`, `)});
            b_dequantized_values = ${d===1?`${_}(${Array.from({length:8},(e,n)=>`(b_quantized_values[${n}] - ${c?`zero_point${t}`:`zero_point`}) * scale${t}`).join(`, `)});`:`(b_quantized_values - ${_}(${Array(8).fill(`${c?`zero_point${t}`:`zero_point`}`).join(`,`)})) * scale${t};`};
            workgroup_shared[local_id.x * ${h} + ${Math.floor(t/p)}]${p>1?`[${t%p}]`:``} += ${Array.from({length:8/d},(e,t)=>`${d===1?`a_data[${t}] * b_dequantized_values[${t}]`:`dot(a_data[${t}], b_dequantized_values[${t}])`}`).join(` + `)};
          `;return e},S=()=>{let e=`
            var col_index = col * ${p};
            ${c?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${g}(8);`}
            `;for(let t=0;t<p*h;t++)e+=`
            let scale${t} = ${o.getByOffset(`col_index * nBlocksPerCol + block`)};
            ${c?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${c.getByOffset(`zero_point_word_index`)} >> zero_point_bits_offset;
            let zero_point${t} = ${g}((zero_point_word) & 0xFu);`:``}
            col_index += 1;`;return e},ee=()=>{let e=`col_index = col * ${p};`;for(let t=0;t<p*h;t++)e+=`
            let b${t}_data = ${a.getByIndices(`${a.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return e+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${_};
            var b_dequantized_values: ${_};`,e};return`
        var<workgroup> workgroup_shared: array<${m.type.value}, ${h*64}>;
        ${n.declareVariables(...s,m)}
        ${n.mainStart([64,1,1])}
          let output_indices = ${m.offsetToIndices(`(global_idx / 64) * ${h}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += 64) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/d};
            ${S()}
            for (var word: u32 = 0; word < ${l}; word += ${f}) {
              ${ee()}
              for (var i: u32 = 0; i < ${f}; i++) {
                ${x()}
                word_offset += ${8/d};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${h}) {
            var output_value: ${m.type.value} = ${m.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < 64u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${h};
            }
            ${m.setByIndices(`${m.type.indices}(batch, row, col + local_id.x)`,`output_value`)};
          }
        }`}}},jp=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],a=t.k,o=t.n,s=n.slice(0,r-2),c=z.size(s),l=e[1].dims[2]/4,u=e[0].dataType,d=Os(t.k),f=Os(l),p=s.concat([i,o]),m=o%8==0?8:o%4==0?4:1,h=128/m,g=h*f*8,_=g/d,v=g/t.blockSize,y=z.size(p)/m,b=[],x=[c,i,a/d],S=z.convertShape(e[1].dims).slice();S.splice(-1,1,l/f),b.push(...V(x)),b.push(...V(S)),b.push(...V(e[2].dims)),e.length===4&&b.push(...V(z.convertShape(e[3].dims)));let ee=[c,i,o];return b.push(...V(ee)),{name:`BlockwiseMatMulNBits32`,shaderCache:{hint:`${t.blockSize};${d};${f};${h};${m}`,inputDependencies:Array(e.length).fill(`rank`)},getRunData:()=>({outputs:[{dims:p,dataType:u}],dispatchGroup:{x:y},programUniforms:b}),getShaderSource:n=>{let r=x.length,i=U(`a`,e[0].dataType,r,d),a=U(`b`,12,S.length,f),o=U(`scales`,e[2].dataType,e[2].dims.length),s=[i,a,o],c=e.length===4?U(`zero_points`,12,e[3].dims.length):void 0;c&&s.push(c);let l=ee.length,u=W(`output`,e[0].dataType,l),p=Es(e[0].dataType),g=()=>{switch(d){case 1:return`
          let a_data0 = vec4<${p}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${p}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${p}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${p}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw Error(`${d}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${i.type.value}, ${_}>;
        var<workgroup> inter_results: array<array<${u.type.value}, ${h}>, ${m}>;
        ${n.declareVariables(...s,u)}
        ${n.mainStart([h,m,1])}
          let output_indices = ${u.offsetToIndices(`workgroup_index * ${m}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${v} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${_};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${_}; a_offset += 128)
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${i.getByIndices(`${i.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${i.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${v} + local_id.x;
            ${c?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${c.getByOffset(`zero_point_word_index`)} >> zero_point_bits_offset;
            let zero_point = ${p}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${p}(8);`}
            let scale = ${o.getByOffset(`b_row * n_blocks_per_col + block`)};
            let b_data = ${a.getByIndices(`${a.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/d};
            for (var i: u32 = 0; i < ${f}; i++) {
              ${g()}
              let b_value = ${f===1?`b_data`:`b_data[i]`};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${p}>(${Array.from({length:4},(e,t)=>`${p}(b_value_lower[${t}]), ${p}(b_value_upper[${t}])`).join(`, `)});
              let b_dequantized_values = (b_quantized_values - mat2x4<${p}>(${Array(8).fill(`zero_point`).join(`,`)})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(e,t)=>`${`dot(a_data${t}, b_dequantized_values[${t}])`}`).join(` + `)};
              word_offset += ${8/d};
            }
            workgroupBarrier();
          }

          if (local_idx < ${m}) {
            var output_value: ${u.type.value} = ${u.type.value}(0);
            for (var b = 0u; b < ${h}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${u.setByIndices(`${u.type.indices}(batch, row, col + local_idx)`,`output_value`)}
            }
          }
        }`}}},Mp=(e,t)=>{kp(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor(`intel`)&&e.adapterInfo.isArchitecture(`gen-12lp`)?e.compute(jp(e.inputs,t)):e.compute(Ap(e.inputs,t))},Np=e=>gs(e)}),Fp,Ip,Lp,Rp,zp,Bp,Vp,Hp,Up,Wp=L(()=>{R(),B(),G(),Fp=e=>{if(!e||e.length<1)throw Error(`Too few inputs`);if(e[0].dataType!==1&&e[0].dataType!==10)throw Error(`Input type must be float or float16.`);if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw Error(`The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].`)}},Ip=(e,t,n)=>{let r=``;for(let i=t-1;i>=0;--i)r+=`
            k = i32(${e.indicesGet(`indices`,i)}) - ${H(`uniforms.pads`,i,n)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${H(`uniforms.x_shape`,i,t)})) {
              break;
            }
            offset += k * i32(${H(`uniforms.x_strides`,i,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${r}
            value = x[offset];
          }
      `},Lp=(e,t,n)=>{let r=``;for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet(`indices`,i)}) - ${H(`uniforms.pads`,i,n)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${H(`uniforms.x_shape`,i,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${H(`uniforms.x_shape`,i,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${H(`uniforms.x_strides`,i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},Rp=(e,t,n)=>{let r=``;for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet(`indices`,i)}) - ${H(`uniforms.pads`,i,n)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${H(`uniforms.x_shape`,i,t)})) {
                  k = i32(${H(`uniforms.x_shape`,i,t)}) - 1;
                }
                offset += k * i32(${H(`uniforms.x_strides`,i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},zp=(e,t,n)=>{let r=``;for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet(`indices`,i)}) - ${H(`uniforms.pads`,i,n)};
                if (k < 0)  {
                  k += i32(${H(`uniforms.x_shape`,i,t)}]);
                }
                if (k >= i32(${H(`uniforms.x_shape`,i,t)})) {
                  k -= i32(${H(`uniforms.x_shape`,i,t)});
                }
                offset += k * i32(${H(`uniforms.x_strides`,i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},Bp=(e,t,n)=>{switch(n.mode){case 0:return Ip(e,t,n.pads.length);case 1:return Lp(e,t,n.pads.length);case 2:return Rp(e,t,n.pads.length);case 3:return zp(e,t,n.pads.length);default:throw Error(`Invalid mode`)}},Vp=(e,t)=>{let n=z.padShape(e[0].dims.slice(),t.pads),r=e[0].dims,i=[{type:12,data:z.size(n)},{type:6,data:t.pads}],a=e.length>=3&&e[2].data;return t.mode===0&&i.push({type:a?e[2].dataType:1,data:t.value}),i.push(...V(e[0].dims,n)),{name:`Pad`,shaderCache:{hint:`${t.mode}${a}`,inputDependencies:[`rank`]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(z.size(n)/64)},programUniforms:i}),getShaderSource:i=>{let o=W(`output`,e[0].dataType,n.length),s=U(`x`,e[0].dataType,r.length),c=s.type.value,l=Bp(o,r.length,t),u=[{name:`output_size`,type:`u32`},{name:`pads`,type:`i32`,length:t.pads.length}];return t.mode===0&&u.push({name:`constant_value`,type:a?c:`f32`}),`
            ${i.registerUniforms(u).declareVariables(s,o)}
            ${i.mainStart()}
            ${i.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}

            let indices = ${o.offsetToIndices(`global_idx`)};

            var value = ${c}(0);
            ${l}
            output[global_idx] = value;
        }`}}},Hp=(e,t)=>{if(e.length>1){let n=e[1].getBigInt64Array(),r=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,i=e[0].dims.length,a=new Int32Array(2*i).fill(0);if(e.length>=4){let t=e[3].getBigInt64Array();for(let e=0;e<t.length;e++)a[Number(t[e])]=Number(n[e]),a[Number(t[e])+i]=Number(n[e+t.length])}else n.forEach((e,t)=>a[Number(t)]=Number(e));let o=[];return a.forEach(e=>o.push(e)),{mode:t.mode,value:r,pads:o}}return t},Up=(e,t)=>{Fp(e.inputs);let n=Hp(e.inputs,t);e.compute(Vp(e.inputs,n),{inputs:[0]})}}),Gp,Kp,qp,Jp,Yp,Xp,Zp,Qp,$p,em,tm,nm,rm,im,am,om,sm,cm,lm,um=L(()=>{Ua(),R(),B(),G(),Gp=e=>{if(aa.webgpu.validateInputContent&&(!e||e.length!==1))throw Error(`Pool ops requires 1 input.`)},Kp=(e,t,n)=>{let r=t.format===`NHWC`,i=e.dims.slice();r&&i.splice(1,0,i.pop());let a=Object.hasOwnProperty.call(t,`dilations`),o=t.kernelShape.slice(),s=t.strides.slice(),c=a?t.dilations.slice():[],l=t.pads.slice();bs.adjustPoolAttributes(n,i,o,s,c,l);let u=bs.computePoolOutputShape(n,i,s,c,o,l,t.autoPad),d=Object.assign({},t);a?Object.assign(d,{kernelShape:o,strides:s,pads:l,dilations:c,cacheKey:t.cacheKey}):Object.assign(d,{kernelShape:o,strides:s,pads:l,cacheKey:t.cacheKey});let f=u.slice();return f.push(f.splice(1,1)[0]),[d,r?f:u]},qp=(e,t)=>{let n=t.format===`NHWC`,r=z.size(e),i=z.size(t.kernelShape),a=[{type:12,data:r},{type:12,data:i}],o=[{name:`outputSize`,type:`u32`},{name:`kernelSize`,type:`u32`}];if(t.kernelShape.length<=2){let e=t.kernelShape[t.kernelShape.length-1],n=t.strides[t.strides.length-1],r=t.pads[t.pads.length/2-1],i=t.pads[t.pads.length-1],s=!!(r+i);a.push({type:12,data:e},{type:12,data:n},{type:12,data:r},{type:12,data:i}),o.push({name:`kw`,type:`u32`},{name:`sw`,type:`u32`},{name:`pwStart`,type:`u32`},{name:`pwEnd`,type:`u32`});let c=!1;if(t.kernelShape.length===2){let e=t.kernelShape[t.kernelShape.length-2],n=t.strides[t.strides.length-2],r=t.pads[t.pads.length/2-2],i=t.pads[t.pads.length-2];c=!!(r+i),a.push({type:12,data:e},{type:12,data:n},{type:12,data:r},{type:12,data:i}),o.push({name:`kh`,type:`u32`},{name:`sh`,type:`u32`},{name:`phStart`,type:`u32`},{name:`phEnd`,type:`u32`})}return[a,o,!0,s,c]}{if(n)throw Error(`Pooling with kernelShape.length > 2 is not supported for NHWC format.`);let e=z.computeStrides(t.kernelShape);return a.push({type:12,data:e},{type:12,data:t.pads},{type:12,data:t.strides}),o.push({name:`kernelStrides`,type:`u32`,length:e.length},{name:`pads`,type:`u32`,length:t.pads.length},{name:`strides`,type:`u32`,length:t.strides.length}),[a,o,!!t.pads.reduce((e,t)=>e+t),!1,!1]}},Jp=(e,t,n,r,i,a,o,s,c,l,u,d)=>{let f=i.format===`NHWC`,p=t.type.value,m=W(`output`,t.type.tensor,r);if(i.kernelShape.length<=2){let r=``,l=``,h=``,g=n-(f?2:1);if(r=u?`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${g}] = indices[${g}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${g}] < 0 || xIndices[${g}]
                      >= uniforms.x_shape[${g}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset(`xIndices`)}];
                  ${a}
                }`:`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${g}] = indices[${g}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset(`xIndices`)}];
                  ${a}
                }`,i.kernelShape.length===2){let e=n-(f?3:2);l=d?`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${e}] = indices[${e}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${e}] < 0 || xIndices[${e}] >= uniforms.x_shape[${e}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${e}] = indices[${e}] * uniforms.sh - uniforms.phStart + j;
                `,h=`
              }
            `}return`
            ${e.registerUniforms(c).declareVariables(t,m)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}

              let indices = ${m.offsetToIndices(`global_idx`)};
              var xIndices = ${m.offsetToIndices(`global_idx`)};

              var value = ${p}(${s});
              var pad = 0;
              ${l}
              ${r}
              ${h}
              ${o}

              output[global_idx] = value;
            }`}{if(f)throw Error(`Pooling with kernelShape.length > 2 is not supported for NHWC format.`);let r=i.kernelShape.length,u=i.pads.length,d=``;return d=l?`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset(`xIndices`)}];
                ${a}
              }`:`
              }
              let x_val = x[${t.indicesToOffset(`xIndices`)}];
              ${a}
            `,`
            ${e.registerUniforms(c).declareVariables(t,m)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
              let indices = ${m.offsetToIndices(`global_idx`)};
              var xIndices = ${m.offsetToIndices(`global_idx`)};

              var offsets: array<u32, ${r}>;

              var value = ${p}(${s});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${r-1}u; j++) {
                  offsets[j] = offset / ${H(`uniforms.kernelStrides`,`j`,r)};
                  offset -= offsets[j] * ${H(`uniforms.kernelStrides`,`j`,r)};
                }
                offsets[${r-1}] = offset;

                isPad = false;
                for (var j = ${n-r}u; j < ${n}u; j++) {
                  xIndices[j] = indices[j] * ${H(`uniforms.strides`,`j - ${n-r}u`,r)}
                    + offsets[j - ${n-r}u] - ${H(`uniforms.pads`,`j - 2u`,u)};
                  ${d}
              }
              ${o}

              output[global_idx] = value;
            }`}},Yp=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Xp=e=>`${Yp(e)};${e.countIncludePad}`,Zp=e=>`${Yp(e)};${e.storageOrder};${e.dilations}`,Qp=e=>({format:e.format,autoPad:[`NOTSET`,`VALID`,`SAME_UPPER`,`SAME_LOWER`][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),$p=(e,t,n,r)=>{let[i,a]=Kp(t,r,n),o=U(`x`,t.dataType,t.dims.length),s=o.type.value,c=``;i.countIncludePad?c+=`value /= ${s}(uniforms.kernelSize);`:c+=`value /= ${s}(i32(uniforms.kernelSize) - pad);`;let[l,u,d,f,p]=qp(a,i);return l.push(...V(t.dims,a)),{name:e,shaderCache:{hint:`${r.cacheKey};${d};${f};${p}`,inputDependencies:[`rank`]},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(z.size(a)/64)},programUniforms:l}),getShaderSource:e=>Jp(e,o,t.dims.length,a.length,i,`value += x_val;`,c,0,u,d,f,p)}},em=e=>{let t=e.count_include_pad!==0,n=Qp(e);if(n.ceilMode!==0)throw Error(`using ceil() in shape computation is not yet supported for AveragePool`);let r={countIncludePad:t,...n,cacheKey:``};return{...r,cacheKey:Xp(r)}},tm=(e,t)=>{Gp(e.inputs),e.compute($p(`AveragePool`,e.inputs[0],!1,t))},nm={autoPad:``,ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},rm=e=>{let t=e.format;return{format:t,...nm,cacheKey:t}},im=(e,t)=>{Gp(e.inputs),e.compute($p(`GlobalAveragePool`,e.inputs[0],!0,t))},am=(e,t,n,r)=>{let[i,a]=Kp(t,r,n),o=U(`x`,t.dataType,t.dims.length),s=[`rank`],[c,l,u,d,f]=qp(a,i);return c.push(...V(t.dims,a)),{name:e,shaderCache:{hint:`${r.cacheKey};${u};${d};${f}`,inputDependencies:s},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(z.size(a)/64)},programUniforms:c}),getShaderSource:e=>Jp(e,o,t.dims.length,a.length,i,`
      value = max(x_val, value);
    `,``,t.dataType===10?-65504:-1e5,l,u,d,f)}},om=(e,t)=>{Gp(e.inputs),e.compute(am(`MaxPool`,e.inputs[0],!1,t))},sm=e=>{let t=e.storage_order,n=e.dilations,r=Qp(e);if(t!==0)throw Error(`column major storage order is not yet supported for MaxPool`);if(r.ceilMode!==0)throw Error(`using ceil() in shape computation is not yet supported for MaxPool`);let i={storageOrder:t,dilations:n,...r,cacheKey:``};return{...i,cacheKey:Zp(i)}},cm=e=>{let t=e.format;return{format:t,...nm,cacheKey:t}},lm=(e,t)=>{Gp(e.inputs),e.compute(am(`GlobalMaxPool`,e.inputs[0],!0,t))}}),dm,fm,pm,mm,hm=L(()=>{R(),B(),_s(),G(),dm=(e,t)=>{if(e.length<2||e.length>3)throw Error(`DequantizeLinear requires 2 or 3 inputs.`);if(e.length===3&&e[1].dims===e[2].dims)throw Error(`x-scale and x-zero-point must have the same shape.`);if(e.length===3&&e[0].dataType!==e[2].dataType)throw Error(`x and x-zero-point must have the same data type.`);if(e[0].dataType===6&&e.length>2)throw Error(`In the case of dequantizing int32 there is no zero point.`);if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw Error(`scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.`);if(e.length>2){if(e[0].dataType!==e[2].dataType)throw Error(`x and x-zero-point must have the same data type.`);if(e[1].dims.length!==e[2].dims.length)throw Error(`scale and zero-point inputs must have the same rank.`);if(!e[1].dims.map((t,n)=>t===e[2].dims[n]).reduce((e,t)=>e&&t,!0))throw Error(`scale and zero-point inputs must have the same shape.`)}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw Error(`blockSize must be set only for block quantization.`);if(!e[1].dims.map((n,r)=>r===t.axis||n===e[0].dims[r]).reduce((e,t)=>e&&t,!0))throw Error(`For block qunatization, scale input shape to match the input shape except for the axis`);if(e[1].dims.length!==e[0].dims.length)throw Error(`For block qunatization the scale input rank must be the same as the x rank.`);let n=e[0].dims[t.axis],r=e[1].dims[t.axis];if(t.blockSize<Math.ceil(n/r)||t.blockSize>Math.ceil(n/(r-1)-1))throw Error(`blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].`)}},fm=(e,t)=>{let n=z.normalizeAxis(t.axis,e[0].dims.length),r=e[0].dataType,i=r===3,a=e[0].dims,o=e[1].dataType,s=z.size(a),c=r===3||r===2,l=c?[Math.ceil(z.size(e[0].dims)/4)]:e[0].dims,u=e[1].dims,d=e.length>2?e[2]:void 0,f=d?c?[Math.ceil(z.size(d.dims)/4)]:d.dims:void 0,p=u.length===0||u.length===1&&u[0]===1,m=p===!1&&u.length===1,h=Os(s),g=p&&(!c||h===4),_=g?h:1,v=g&&!c?h:1,y=U(`input`,c?12:r,l.length,v),b=U(`scale`,o,u.length),x=d?U(`zero_point`,c?12:r,f.length):void 0,S=W(`output`,o,a.length,_),ee=[y,b];x&&ee.push(x);let te=[l,u];d&&te.push(f);let ne=[{type:12,data:s/_},{type:12,data:n},{type:12,data:t.blockSize},...V(...te,a)];return{name:`DequantizeLinear`,shaderCache:{hint:t.cacheKey,inputDependencies:x?[`rank`,`rank`,`rank`]:[`rank`,`rank`]},getShaderSource:e=>`
      ${e.registerUniforms([{name:`output_size`,type:`u32`},{name:`axis`,type:`u32`},{name:`block_size`,type:`u32`}]).declareVariables(...ee,S)}
      ${e.mainStart()}
          ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
          let output_indices = ${S.offsetToIndices(`global_idx`)};

          // Set input x
          ${c?`
            let input = ${y.getByOffset(`global_idx / 4`)};
            let x_vec = ${i?`unpack4xI8(input)`:`unpack4xU8(input)`};
            let x_value = ${_===1?`x_vec[global_idx % 4]`:`x_vec`};`:`let x_value = ${y.getByOffset(`global_idx`)};`};

          // Set scale input
          ${p?`let scale_value= ${b.getByOffset(`0`)}`:m?`
            let scale_index = ${S.indicesGet(`output_indices`,`uniforms.axis`)};
            let scale_value= ${b.getByOffset(`scale_index`)};`:`
            var scale_indices: ${b.type.indices} = output_indices;
            let index = ${b.indicesGet(`scale_indices`,`uniforms.axis`)} / uniforms.block_size;
            ${b.indicesSet(`scale_indices`,`uniforms.axis`,`index`)};
            let scale_value= ${b.getByIndices(`scale_indices`)};`};

          // Set zero-point input
          ${x?p?c?`
                let zero_point_input = ${x.getByOffset(`0`)};
                let zero_point_vec =  ${i?`unpack4xI8(zero_point_input)`:`unpack4xU8(zero_point_input)`};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${x.getByOffset(`0`)}`:m?c?`
                let zero_point_index = ${S.indicesGet(`output_indices`,`uniforms.axis`)};
                let zero_point_input = ${x.getByOffset(`zero_point_index / 4`)};
                let zero_point_vec =  ${i?`unpack4xI8(zero_point_input)`:`unpack4xU8(zero_point_input)`};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${S.indicesGet(`output_indices`,`uniforms.axis`)};
                let zero_point_value = ${x.getByOffset(`zero_point_index`)};`:c?`
                let zero_point_offset = ${b.indicesToOffset(`scale_indices`)};
                let zero_point_input = ${x.getByOffset(`zero_point_offset / 4`)};
                let zero_point_vec = ${i?`unpack4xI8(zero_point_input)`:`unpack4xU8(zero_point_input)`};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${x.getByIndices(`scale_indices`)};`:`let zero_point_value = ${c?i?`i32`:`u32`:y.type.value}(0);`};
      // Compute and write output
      ${S.setByOffset(`global_idx`,`${S.type.value}(x_value - zero_point_value) * scale_value`)};
      }`,getRunData:()=>({outputs:[{dims:a,dataType:o}],dispatchGroup:{x:Math.ceil(s/_/64),y:1,z:1},programUniforms:ne})}},pm=(e,t)=>{dm(e.inputs,t),e.compute(fm(e.inputs,t))},mm=e=>gs({axis:e.axis,blockSize:e.blockSize})}),gm,_m,vm,ym=L(()=>{Ua(),R(),G(),gm=(e,t,n)=>{if(e===t||e<t&&n<0||e>t&&n>0)throw Error(`Range these inputs' contents are invalid.`)},_m=(e,t,n,r)=>{let i=Math.abs(Math.ceil((t-e)/n)),a=[i],o=i,s=[{type:12,data:o},{type:r,data:e},{type:r,data:n},...V(a)];return{name:`Range`,shaderCache:{hint:`${r}`},getShaderSource:e=>{let t=W(`output`,r,a.length),n=t.type.value,i=[{name:`outputSize`,type:`u32`},{name:`start`,type:n},{name:`delta`,type:n}];return`
        ${e.registerUniforms(i).declareVariables(t)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
        output[global_idx] = uniforms.start + ${n}(global_idx) * uniforms.delta;
      }`},getRunData:()=>({outputs:[{dims:a,dataType:r}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:s})}},vm=e=>{let t=0,n=0,r=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],n=e.inputs[1].getInt32Array()[0],r=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],n=e.inputs[1].getFloat32Array()[0],r=e.inputs[2].getFloat32Array()[0]),aa.webgpu.validateInputContent&&gm(t,n,r),e.compute(_m(t,n,r,e.inputs[0].dataType),{inputs:[]})}}),bm,xm,Sm,Cm,wm=L(()=>{R(),B(),_s(),G(),bm=(e,t,n,r)=>{if(e!==`none`&&r!==`i32`&&r!==`u32`&&r!==`f32`)throw Error(`Input ${r} is not supported with reduction ${e}.`);let i=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,a=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case`none`:return`${t}=${n};`;case`add`:return r===`i32`||r===`u32`?`atomicAdd(&${t}, bitcast<${r}>(${n}));`:`
              ${i}bitcast<${r}>(oldValue) + (${n})${a}`;case`max`:return r===`i32`||r===`u32`?`atomicMax(&${t}, bitcast<${r}>(${n}));`:`
                ${i}max(bitcast<f32>(oldValue), (${n}))${a}`;case`min`:return r===`i32`||r===`u32`?`atomicMin(&${t}, bitcast<${r}>(${n}));`:`${i}min(bitcast<${r}>(oldValue), (${n}))${a}`;case`mul`:return`${i}(bitcast<${r}>(oldValue) * (${n}))${a}`;default:throw Error(`Reduction ${e} is not supported.`)}},xm=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n,a=Math.ceil(z.size(r)/1),o=r[r.length-1],s=z.sizeFromDimension(n,o),c=[{type:12,data:a},{type:12,data:o},{type:12,data:s},...V(e[1].dims,e[2].dims,i)];return{name:`ScatterND`,shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:c}),getShaderSource:n=>{let a=U(`indices`,e[1].dataType,e[1].dims.length),o=U(`updates`,e[2].dataType,e[2].dims.length,1),s=t.reduction!==`none`&&t.reduction!==``?Ns(`output`,e[0].dataType,i.length):W(`output`,e[0].dataType,i.length,1);return`
      ${n.registerUniform(`output_size`,`u32`).registerUniform(`last_index_dimension`,`u32`).registerUniform(`num_updates_elements`,`u32`).declareVariables(a,o,s)}
      ${n.mainStart()}
        ${n.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
  var hasDuplicates = false;
  if (${t.reduction===`none`}) {
    let n = ${z.size(r)};
    for (var i = 0; i < n; i = i + 1) {
      for (var j = i + 1; j < n; j = j + 1) {
        var index_i = i32(indices[i].x);
        var index_j = i32(indices[j].x);
        if (index_i == index_j) {
          hasDuplicates = true;
          break;
        }
      }
      if (hasDuplicates) {
        break;
      }
    }
  }

  var data_offset = 0u;
  var indices_start = uniforms.last_index_dimension * global_idx;
  if (${t.reduction===`none`} && hasDuplicates) {
    if (global_idx != 0u) {
      return;
    }
    indices_start = 0u;
  }
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start + uniforms.last_index_dimension];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${bm(t.reduction,`output[data_offset + i]`,`value`,s.type.value)}
  }

      }`}}},Sm=e=>gs({reduction:e.reduction}),Cm=(e,t)=>{e.compute(xm(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),Tm,Em,Dm,Om,km,Am,jm,Mm,Nm,Pm,Fm,Im,Lm,Rm,zm,Bm,Vm,Hm,Um,Wm,Gm=L(()=>{R(),B(),_s(),G(),Tm=(e,t)=>{if(e.every(e=>e>0||(()=>{throw Error(`Resize requires scales input values to be positive`)})),e.length>0){if(t.mode===`linear`){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode===`cubic`&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw Error(`Resize requires scales input size to be 2 or 4 for cubic mode`)}},Em=(e,t,n)=>{t.every(e=>e>=0&&e<n||(()=>{throw Error(`Resize requires axes input values to be positive and less than rank`)}));let r=Array(n).fill(1);return t.forEach((t,n)=>r[t]=e[n]),r},Dm=(e,t,n,r,i,a)=>{let[o,s,c]=n>10?[1,2,3]:[-1,e.length>1?1:-1,-1],l=e[0].dims.length;if(o>0&&e.length>o&&e[o].dims.length>0)e[o].getFloat32Array().forEach(e=>a.push(e));else if(t.coordinateTransformMode===`tf_crop_and_resize`)throw Error(`Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize`);if(s>0&&e.length>s&&e[s].dims.length===1&&e[s].dims[0]>0){if(e[s].getFloat32Array().forEach(e=>r.push(e)),r.length!==0&&r.length!==l&&n>=18&&r.length!==t.axes.length)throw Error(`Resize requires scales input size to be same as input rank or axes size for opset 18 and up`);Tm(r,t),t.axes.length>0&&Em(r,t.axes,l).forEach((e,t)=>r[t]=e)}if(c>0&&e.length>c&&e[c].dims.length===1&&e[c].dims[0]>0&&(e[c].getBigInt64Array().forEach(e=>i.push(Number(e))),i.length!==0&&i.length!==l&&n>=18&&i.length!==t.axes.length))throw Error(`Resize requires sizes input size to be same as input rank or axes size for opset 18 and up`);if(t.axes.length>0){if(r.length!==0&&r.length!==t.axes.length)throw Error(`Resize requires "scales" input size to be of axes rank when axes attributes is specified`);if(i.length!==0&&i.length!==t.axes.length)throw Error(`Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified`)}if(typeof r<`u`&&typeof i<`u`&&r.length>0&&i.length>l)throw Error(`Resize requires only of scales or sizes to be specified`)},Om=(e,t,n,r)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${r}(big / (${n}));
  let fract = ${r}(big % (${n})) / ${r}(${n});
  return whole + fract;
`,km=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case`asymmetric`:return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${Om(`xResized`,`lengthOriginal`,`lengthResized`,t)}
          }
        `;case`pytorch_half_pixel`:return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case`tf_half_pixel_for_nn`:return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case`align_corners`:return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${Om(`xResized`,`lengthOriginal - 1`,`lengthResized - 1`,t)}
                  }`;case`tf_crop_and_resize`:return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case`half_pixel_symmetric`:return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case`half_pixel`:return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw Error(`Coordinate transform mode ${e} is not supported`)}})()+`}`,Am=(e,t,n)=>`fn getNearestPixelFromOriginal(xOriginal: ${n}, isDownSample: bool) -> ${n} {`+(()=>{switch(e){case`round_prefer_ceil`:return`if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }`;case`floor`:return`return floor(xOriginal);`;case`ceil`:return`return ceil(xOriginal);`;case`round_prefer_floor`:return`if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }`;default:if(t<11)return`if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }`;throw Error(`Nearest mode ${e} is not supported`)}})()+`}`,jm=(e,t,n)=>{let r=Array(n).fill(0).concat(Array(n).fill(1)),i=e.length===0?r:e.slice();return t.length>0?(t.forEach((e,a)=>{r[e]=i[a],r[a+n]=i[t.length+a]}),r):i},Mm=(e,t,n,r)=>{let i=[];if(n.length>0){if(r.length>0){if(e.forEach(e=>i.push(e)),Math.max(...r)>e.length)throw Error(`axes is out of bound`);r.forEach((e,t)=>i[e]=n[t])}else n.forEach(e=>i.push(e))}else{if(t.length===0)throw Error(`Resize requires either scales or sizes.`);i=e.map((e,n)=>Math.round(e*t[n]))}return i},Nm=(e,t,n)=>{let r=(()=>{switch(n.keepAspectRatioPolicy){case`not_larger`:return n.axes.length>0?Math.min(...n.axes.map(e=>t[e]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case`not_smaller`:return n.axes.length>0?Math.max(...n.axes.map(e=>t[e]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw Error(`Keep aspect ratio policy ${n.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let i=e.slice();return n.axes.length>0?(n.axes.forEach(e=>t[e]=r),n.axes.forEach(n=>i[n]=Math.round(e[n]*t[n]))):(t.fill(r,0,t.length),i.forEach((e,n)=>i[n]=Math.round(e*t[n]))),i},Pm=(e,t,n,r,i)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${n.length}> {
      var original_indices: array<${e.type.value}, ${n.length}>;
      for (var i:u32 = 0; i < ${n.length}; i++) {
        var output_index = ${e.indicesGet(`output_indices`,`i`)};
        var scale = ${H(`uniforms.scales`,`i`,r)};
        var roi_low = ${H(`uniforms.roi`,`i`,i)};
        var roi_hi = ${H(`uniforms.roi`,`i + ${t.length}`,i)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${H(`uniforms.input_shape`,`i`,t.length)};
          var output_shape_i = ${H(`uniforms.output_shape`,`i`,n.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,Fm=(e,t,n,r,i,a,o)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${t.indicesGet(`output_indices`,`i`)};
        var input_index: u32;
        var scale = ${H(`uniforms.scales`,`i`,i)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${H(`uniforms.roi`,`i`,a)};
          var roi_hi = ${H(`uniforms.roi`,`i + ${n.length}`,a)};
          var input_shape_i = ${H(`uniforms.input_shape`,`i`,n.length)};
          var output_shape_i = ${H(`uniforms.output_shape`,`i`,r.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${o} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet(`input_indices`,`i`,`input_index`)}
      }
      return input_indices;
    }`,Im=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet(`input_indices`,`i`)};
        if (input_index < 0 || input_index >= ${H(`uniforms.input_shape`,`i`,t.length)}) {
          return false;
        }
      }
      return true;
    }`,Lm=(e,t,n,r)=>e.rank>r?`
    ${e.indicesSet(`input_indices`,t,`channel`)};
    ${e.indicesSet(`input_indices`,n,`batch`)};
`:``,Rm=(e,t,n,r,i)=>{let[a,o,s,c]=n.length===2?[-1,0,1,-1]:[0,2,3,1],l=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${l} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet(`input_indices`,o,`max(0, min(row, ${n[o]} - 1))`)};
      ${e.indicesSet(`input_indices`,s,`max(0, min(col, ${n[s]} - 1))`)};
      ${Lm(e,c,a,2)}
      return ${e.getByIndices(`input_indices`)};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${l} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${l} = originalIndices[${o}];
      var col:${l} = originalIndices[${s}];
      ${r?`if (row < 0 || row > (${n[o]} - 1) || col < 0 || col > (${n[s]} - 1)) {
        return ${i};
      }`:``};
      row = max(0, min(row, ${n[o]} - 1));
      col = max(0, min(col, ${n[s]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${n.length>2?`u32(originalIndices[${c}])`:`0`};
      var batch: u32 =  ${n.length>2?`u32(originalIndices[${a}])`:`0`};
      var x11: ${l} = getInputValue(batch, channel, row1, col1);
      var x12: ${l} = getInputValue(batch, channel, row1, col2);
      var x21: ${l} = getInputValue(batch, channel, row2, col1);
      var x22: ${l} = getInputValue(batch, channel, row2, col2);
      var dx1: ${l} = abs(row - ${l}(row1));
      var dx2: ${l} = abs(${l}(row2) - row);
      var dy1: ${l} = abs(col - ${l}(col1));
      var dy2: ${l} = abs(${l}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},zm=(e,t,n,r,i,a,o,s,c,l)=>{let[u,d]=n.length===2?[0,1]:[2,3],f=e.type.value,p=o=>{let d=o===u?`row`:`col`;return`
      fn ${d}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${f} {
        var output_index = ${t.indicesGet(`output_indices`,o)};
        var originalIdx: ${f} = getOriginalCoordinateFromResizedCoordinate(output_index, ${i[o]},
        ${r[o]}, ${n[o]}, ${a[o]}, ${a[o]} + ${n.length});
        var fractOriginalIdx: ${f} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${s} && (originalIdx < 0 || originalIdx > (${n[o]} - 1))) {
          return ${c};
        }
        var data: array<${f}, 4> = array<${f}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${d}: ${f} = originalIdx + ${f}(i);
          if (${d} < 0 || ${d} >= ${n[o]}) {
            ${l?`coefs[i + 1] = 0.0;
                        continue;`:s?`return ${c};`:`${d} = max(0, min(${d}, ${n[o]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet(`input_indices_copy`,o,`u32(${d})`)};
          data[i + 1] = ${o===u?e.getByIndices(`input_indices_copy`):`rowCubicInterpolation(input_indices_copy, output_indices)`};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${p(u)};
    ${p(d)};
  fn getCubicInterpolationCoefs(s: ${f}) -> array<${f}, 4> {
    var absS = abs(s);
    var coeffs: array<${f}, 4> = array<${f}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${f} = 1.0 - absS;
    var twoMinusAbsS: ${f} = 2.0 - absS;
    var onePlusAbsS: ${f} = 1.0 + absS;
    coeffs[0] = ((${o} * onePlusAbsS - 5 * ${o}) * onePlusAbsS + 8 * ${o}) * onePlusAbsS - 4 * ${o};
    coeffs[1] = ((${o} + 2) * absS - (${o} + 3)) * absS * absS + 1;
    coeffs[2] = ((${o} + 2) * oneMinusAbsS - (${o} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${o} * twoMinusAbsS - 5 * ${o}) * twoMinusAbsS + 8 * ${o}) * twoMinusAbsS - 4 * ${o};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${f}, 4>, coefs: array<${f}, 4>) -> ${f} {
    var coefsSum: ${f} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${f} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},Bm=(e,t,n,r,i)=>{let[a,o,s,c,l]=n.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],u=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${u} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet(`input_indices`,o,`max(0, min(depth, ${n[o]} - 1))`)};
      ${e.indicesSet(`input_indices`,s,`max(0, min(height, ${n[s]} - 1))`)};
      ${e.indicesSet(`input_indices`,c,`max(0, min(width, ${n[c]} - 1))`)};
      ${Lm(e,l,a,3)}
      return ${e.getByIndices(`input_indices`)};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${u} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${u} = originalIndices[${o}];
      var height:${u} = originalIndices[${s}];
      var width:${u} = originalIndices[${c}];
      ${r?`if (depth < 0 || depth > (${n[o]} - 1) || height < 0 || height > (${n[s]} - 1) || width < 0 || (width > ${n[c]} - 1)) {
      return ${i};
        }`:``};

    depth = max(0, min(depth, ${n[o]} - 1));
      height = max(0, min(height, ${n[s]} - 1));
      width = max(0, min(width, ${n[c]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${n.length>3?`u32(originalIndices[${l}])`:`0`};
      var batch: u32 =  ${n.length>3?`u32(originalIndices[${a}])`:`0`};

      var x111: ${u} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${u} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${u} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${u} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${u} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${u} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${u} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${u} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${u} = abs(depth - ${u}(depth1));
      var dx2: ${u} = abs(${u}(depth2) - depth);
      var dy1: ${u} = abs(height - ${u}(height1));
      var dy2: ${u} = abs(${u}(height2) - height);
      var dz1: ${u} = abs(width - ${u}(width1));
      var dz2: ${u} = abs(${u}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},Vm=(e,t,n,r,i,a)=>{let o=e.dims,s=jm(a,t.axes,o.length),c=Mm(o,r,i,t.axes),l=r.slice();r.length===0&&(l=o.map((e,t)=>e===0?1:c[t]/e),t.keepAspectRatioPolicy!==`stretch`&&(c=Nm(o,l,t)));let u=W(`output`,e.dataType,c.length),d=U(`input`,e.dataType,o.length),f=z.size(c),p=o.length===c.length&&o.every((e,t)=>e===c[t]),m=t.coordinateTransformMode===`tf_crop_and_resize`,h=t.extrapolationValue,g=d.type.value;return{name:`Resize`,shaderCache:{hint:`${t.cacheKey}|${n}|${l.length>0?t.mode===`cubic`?l:l.length:``}|${i.length>0?i:``}|${s.length>0?s:``}|${p}|${t.mode===`nearest`?o.length:o}`,inputDependencies:[`rank`]},getShaderSource:e=>`
      ${p?``:`
      ${km(t.coordinateTransformMode,g)};
      ${(()=>{switch(t.mode){case`nearest`:return`
              ${Im(d,o)};
              ${Am(t.nearestMode,n,g)};
              ${Fm(d,u,o,c,l.length,s.length,m)};
              `;case`linear`:return`
              ${Pm(u,o,c,l.length,s.length)};
              ${(()=>{if(o.length===2||o.length===4)return`${Rm(d,u,o,m,h)}`;if(o.length===3||o.length===5)return`${Bm(d,u,o,m,h)}`;throw Error(`Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.`)})()};
            `;case`cubic`:return`
            ${(()=>{if(o.length===2||o.length===4)return`${zm(d,u,o,c,l,s,t.cubicCoeffA,m,t.extrapolationValue,t.excludeOutside)}`;throw Error(`Cubic mode only supports input dims 2 and 4 are supported in linear mode.`)})()};
            `;default:throw Error(`Invalid resize mode`)}})()};
      `}
      ${e.registerUniform(`output_size`,`u32`).registerUniform(`scales`,`f32`,l.length).registerUniform(`roi`,`f32`,s.length).declareVariables(d,u)}
      ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
        ${p?`output[global_idx] = input[global_idx];`:`
        let output_indices = ${u.offsetToIndices(`global_idx`)};
        var input_indices: ${d.type.indices};
        ${(()=>{switch(t.mode){case`nearest`:return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${d.getByIndices(`input_indices`)};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case`linear`:return`output[global_idx] = ${o.length===2||o.length===4?`bilinearInterpolation`:`trilinearInterpolation`}(output_indices);`;case`cubic`:return`output[global_idx] = bicubicInterpolation(output_indices);`;default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`,getRunData:()=>({outputs:[{dims:c,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:[{type:12,data:f},{type:1,data:l},{type:1,data:s},...V(o,c)]})}},Hm=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},Um=(e,t)=>{let n=[],r=[],i=[],a=Hm(e);if(t.antialias!==0)throw Error(`Only default value (0) for Antialias attribute is supported`);Dm(e.inputs,t,a,n,r,i),e.compute(Vm(e.inputs[0],t,a,n,r,i),{inputs:[0]})},Wm=e=>{let t=e.antialias,n=e.axes,r=e.coordinateTransformMode,i=e.cubicCoeffA,a=e.excludeOutside!==0,o=e.extrapolationValue,s=e.keepAspectRatioPolicy,c=e.mode,l=e.nearestMode===``?`simple`:e.nearestMode;return gs({antialias:t,axes:n,coordinateTransformMode:r,cubicCoeffA:i,excludeOutside:a,extrapolationValue:o,keepAspectRatioPolicy:s,mode:c,nearestMode:l})}}),Km,qm,Jm,Ym=L(()=>{R(),B(),_s(),G(),Km=(e,t)=>{let[n,r,i,a]=e,{numHeads:o,rotaryEmbeddingDim:s}=t;if(n.dims.length!==3&&n.dims.length!==4)throw Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${n.dims.length}`);if(!z.areEqual(r.dims,[])&&!z.areEqual(r.dims,[1])&&r.dims.length!==2)throw Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${r.dims.length}`);if(i.dims.length!==2)throw Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(a.dims.length!==2)throw Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(!z.areEqual(i.dims,a.dims))throw Error(`Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape`);if(s>0&&o===0)throw Error(`num_heads must be provided if rotary_embedding_dim is specified`);let c=n.dims[0],l=n.dims[n.dims.length-2],u=i.dims[0],d=z.sizeFromDimension(n.dims,1)/l,f=s===0?i.dims[1]*2:d/o;if(s>f)throw Error(`rotary_embedding_dim must be less than or equal to head_size`);if(r.dims.length===2){if(c!==r.dims[0])throw Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${r.dims[0]}`);if(l!==r.dims[1])throw Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${r.dims[1]}`)}if(f/2!==i.dims[1]&&s/2!==i.dims[1])throw Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${i.dims[1]}`);if(l>u)throw Error(`Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported`)},qm=(e,t)=>{let{interleaved:n,numHeads:r,rotaryEmbeddingDim:i,scale:a}=t,o=e[0].dims[0],s=z.sizeFromDimension(e[0].dims,1),c=e[0].dims[e[0].dims.length-2],l=s/c,u=e[2].dims[1],d=i===0?u*2:l/r,f=[o,c,l/d,d-u],p=z.computeStrides(f),m=[{type:1,data:a},{type:12,data:f},{type:12,data:p},...e[0].dims.length===3?Array({type:12,data:[s,l,d,1]}):[],...e[0].dims.length===4?Array({type:12,data:[s,d,c*d,1]}):[],...V(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)];return{name:`RotaryEmbedding`,shaderCache:{hint:gs({interleaved:n}).cacheKey,inputDependencies:[`rank`,`rank`,`rank`,`rank`]},getShaderSource:t=>{let r=U(`input`,e[0].dataType,e[0].dims.length),i=U(`position_ids`,e[1].dataType,e[1].dims.length),a=U(`cos_cache`,e[2].dataType,e[2].dims.length),o=U(`sin_cache`,e[3].dataType,e[3].dims.length),s=W(`output`,e[0].dataType,e[0].dims.length);return t.registerUniforms([{name:`scale`,type:`f32`},{name:`global_shape`,type:`u32`,length:f.length},{name:`global_strides`,type:`u32`,length:p.length},{name:`input_output_strides`,type:`u32`,length:p.length}]),`
        ${t.declareVariables(r,i,a,o,s)}

        ${t.mainStart(ws)}
          let half_rotary_emb_dim = uniforms.${a.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${t.guardAgainstOutOfBoundsWorkgroupSizes(`size`)}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${i.broadcastedIndicesToOffset(`bsnh.xy`,W(``,i.type.tensor,2))};
            let position_id =
                u32(${i.getByOffset(`position_ids_idx`)}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${n});
            let j = i + select(half_rotary_emb_dim, 1, ${n});
            let re = ${r.getByOffset(`i`)} * ${a.get(`position_id`,`bsnh[3]`)} -
                ${r.getByOffset(`j`)} * ${o.get(`position_id`,`bsnh[3]`)};
            ${s.setByOffset(`i`,`re`)}
            let im = ${r.getByOffset(`i`)} * ${o.get(`position_id`,`bsnh[3]`)} +
                ${r.getByOffset(`j`)} * ${a.get(`position_id`,`bsnh[3]`)};
            ${s.setByOffset(`j`,`im`)}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${s.setByOffset(`k`,r.getByOffset(`k`))}
          }
        }`},getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(z.size(f)/ws)},programUniforms:m})}},Jm=(e,t)=>{Km(e.inputs,t),e.compute(qm(e.inputs,t))}}),Xm,Zm,Qm,$m=L(()=>{R(),B(),G(),Xm=e=>{if(!e||e.length<3)throw Error(`layerNorm requires at least 3 inputs.`);let t=e[0],n=e[1],r=e[2];if(t.dataType!==n.dataType||t.dataType!==r.dataType)throw Error(`All inputs must have the same data type`);if(t.dims.length!==3&&t.dims.length!==2)throw Error(`Input must be 2D or 3D`);if(n.dims.length!==3&&n.dims.length!==2)throw Error(`Skip must be 2D or 3D`);let i=t.dims[t.dims.length-1],a=t.dims[t.dims.length-2];if(n.dims[n.dims.length-1]!==i)throw Error(`Skip must have the same hidden size as input`);if(n.dims[n.dims.length-2]!==a)throw Error(`Skip must have the same sequence length as input`);if(r.dims.length!==1)throw Error(`Gamma must be 1D`);if(r.dims[r.dims.length-1]!==i)throw Error(`Gamma must have the same hidden size as input`);if(e.length>3){let t=e[3];if(t.dims.length!==1)throw Error(`Beta must be 1D`);if(t.dims[t.dims.length-1]!==i)throw Error(`Beta must have the same hidden size as input`)}if(e.length>4){let t=e[4];if(t.dims.length!==1)throw Error(`Bias must be 1D`);if(t.dims[t.dims.length-1]!==i)throw Error(`Bias must have the same hidden size as input`)}},Zm=(e,t,n,r)=>{let i=t.simplified,a=e[0].dims,o=z.size(a),s=a,c=o,l=a.slice(-1)[0],u=r?a.slice(0,-1).concat(1):[],d=!i&&e.length>3,f=e.length>4,p=r&&n>1,m=r&&n>2,h=n>3,g=Os(l),_=[{type:12,data:c},{type:12,data:g},{type:12,data:l},{type:1,data:t.epsilon}],v=t=>{let n=[{name:`output_size`,type:`u32`},{name:`components`,type:`u32`},{name:`hidden_size`,type:`u32`},{name:`epsilon`,type:`f32`}],r=[U(`x`,e[0].dataType,e[0].dims,g),U(`skip`,e[1].dataType,e[1].dims,g),U(`gamma`,e[2].dataType,e[2].dims,g)];d&&r.push(U(`beta`,e[3].dataType,e[3].dims,g)),f&&r.push(U(`bias`,e[4].dataType,e[4].dims,g)),r.push(W(`output`,e[0].dataType,s,g)),p&&r.push(W(`mean_output`,1,u)),m&&r.push(W(`inv_std_output`,1,u)),h&&r.push(W(`input_skip_bias_sum`,e[0].dataType,s,g));let a=Es(e[0].dataType),o=Es(1,g);return`

      ${t.registerUniforms(n).declareVariables(...r)}
      var<workgroup> sum_shared : array<${o}, 64>;
      var<workgroup> sum_squared_shared : array<${o}, 64>;

      ${t.mainStart([64,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / 64;

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / 64;
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == 63) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${f?`bias[offset1d + i]`:a+`(0.0)`};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${h?`input_skip_bias_sum[offset + i] = value;`:``}
          output[offset + i] = value;
          let f32_value = ${As(a,g,`value`)};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = 64;
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${js(`sum`,g)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${js(`square_sum`,g)} / f32(uniforms.hidden_size) ${i?``:`- mean * mean`} + uniforms.epsilon);
        ${p?`mean_output[global_idx] = mean;`:``}
        ${m?`inv_std_output[global_idx] = inv_std_dev;`:``}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${i?``:`- ${a}(mean)`}) *
            ${a}(inv_std_dev) * gamma[offset1d + i]
            ${d?`+ beta[offset1d + i]`:``};
        }
      }`},y=[{dims:s,dataType:e[0].dataType}];return n>1&&y.push({dims:u,dataType:1}),n>2&&y.push({dims:u,dataType:1}),n>3&&y.push({dims:a,dataType:e[0].dataType}),{name:`SkipLayerNormalization`,shaderCache:{hint:`${g};${p};${m};${h}`,inputDependencies:e.map((e,t)=>`type`)},getShaderSource:v,getRunData:()=>({outputs:y,dispatchGroup:{x:Math.ceil(c/l)},programUniforms:_})}},Qm=(e,t)=>{Xm(e.inputs);let n=[0];e.outputCount>1&&n.push(-3),e.outputCount>2&&n.push(-3),e.outputCount>3&&n.push(3),e.compute(Zm(e.inputs,t,e.outputCount,!1),{outputs:n})}}),eh,th,nh,rh,ih,ah,oh,sh,ch=L(()=>{R(),B(),_s(),G(),eh=(e,t)=>{if(!e||e.length<1)throw Error(`too few inputs`);if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw Error(`axes, starts and ends must have the same length`)}else if(t.starts.length!==t.ends.length)throw Error(`starts and ends must have the same length`);e.slice(1).forEach((t,n)=>{if(e[n+1].dataType!==6&&e[n+1].dataType!==7)throw Error(`Input ${n} must be an array of int32 or int64`)})},th=(e,t)=>{let n=[];if(e.length>t){if(e[t].dataType===7)e[t].getBigInt64Array().forEach(e=>n.push(Number(e)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(e=>n.push(Number(e)));else throw Error(`Input ${t} must be an array of int32 or int64`)}return n},nh=(e,t)=>{if(e.length>1){let t=th(e,1),n=th(e,2),r=th(e,3);return r.length===0&&(r=[...Array(e[0].dims.length).keys()]),gs({starts:t,ends:n,axes:r})}return t},rh=(e,t,n,r,i)=>{let a=e;return e<0&&(a+=n[r[t]]),i[t]<0?Math.max(0,Math.min(a,n[r[t]]-1)):Math.max(0,Math.min(a,n[r[t]]))},ih=(e,t,n)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${n.length}; i >= 0; i--) {
            let input_shape_i = ${H(`uniforms.input_shape`,`i`,n.length)};
            let steps_i = ${H(`uniforms.steps`,`i`,n.length)};
            let signs_i = ${H(`uniforms.signs`,`i`,n.length)};
            let starts_i = ${H(`uniforms.starts`,`i`,n.length)};
            var output_index = ${t.indicesGet(`output_indices`,`i`)};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet(`input_indices`,`i`,`input_index`)};
          }
          return input_indices;
      }`,ah=(e,t)=>{let n=e[0].dims,r=z.size(n),i=t.axes.length>0?z.normalizeAxes(t.axes,n.length):[...Array(n.length).keys()],a=th(e,4);a.forEach(e=>e!==0||(()=>{throw Error(`step cannot be 0`)})),a.length===0&&(a=Array(i.length).fill(1));let o=t.starts.map((e,t)=>rh(e,t,n,i,a)),s=t.ends.map((e,t)=>rh(e,t,n,i,a));if(i.length!==o.length||i.length!==s.length)throw Error(`start, ends and axes should have the same number of elements`);if(i.length!==n.length)for(let e=0;e<n.length;++e)i.includes(e)||(o.splice(e,0,0),s.splice(e,0,n[e]),a.splice(e,0,1));let c=a.map(e=>Math.sign(e));a.forEach((e,t,n)=>{if(e<0){let r=(s[t]-o[t])/e,i=o[t],c=i+r*a[t];o[t]=c,s[t]=i,n[t]=-e}});let l=n.slice(0);i.forEach((e,t)=>{l[e]=Math.ceil((s[e]-o[e])/a[e])});let u={dims:l,dataType:e[0].dataType},d=W(`output`,e[0].dataType,l.length),f=U(`input`,e[0].dataType,e[0].dims.length),p=z.size(l),m=[{name:`outputSize`,type:`u32`},{name:`starts`,type:`u32`,length:o.length},{name:`signs`,type:`i32`,length:c.length},{name:`steps`,type:`u32`,length:a.length}],h=[{type:12,data:p},{type:12,data:o},{type:6,data:c},{type:12,data:a},...V(e[0].dims,l)];return{name:`Slice`,shaderCache:{hint:`${c.length}_${o.length}_${a.length}`,inputDependencies:[`rank`]},getShaderSource:e=>`
      ${e.registerUniforms(m).declareVariables(f,d)}
        ${ih(f,d,n)}
        ${e.mainStart()}
          ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
          let output_indices = ${d.offsetToIndices(`global_idx`)};
          let input_indices = calculateInputIndices(output_indices);
          ${d.setByOffset(`global_idx`,f.getByIndices(`input_indices`))}
      }`,getRunData:()=>({outputs:[u],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:h})}},oh=(e,t)=>{eh(e.inputs,t);let n=nh(e.inputs,t);e.compute(ah(e.inputs,n),{inputs:[0]})},sh=e=>{let t=e.starts,n=e.ends,r=e.axes;return gs({starts:t,ends:n,axes:r})}}),lh,uh,dh,fh,ph=L(()=>{R(),B(),_s(),Ks(),G(),lh=e=>{if(!e||e.length!==1)throw Error(`Softmax op requires 1 input.`)},uh=(e,t)=>{let n=e.inputs[0],r=n.dims,i=z.size(r),a=r.length,o=z.normalizeAxis(t.axis,a),s=o<r.length-1,c,l=[];s?(l=Array.from({length:a},(e,t)=>t),l[o]=a-1,l[a-1]=o,c=e.compute(Us(n,l),{inputs:[n],outputs:[-1]})[0]):c=n;let u=c.dims,d=u[a-1],f=i/d,p=Os(d),m=d/p,h=64;f===1&&(h=256);let g=(e,t)=>t===4?`max(max(${e}.x, ${e}.y), max(${e}.z, ${e}.w))`:t===2?`max(${e}.x, ${e}.y)`:t===3?`max(max(${e}.x, ${e}.y), ${e}.z)`:e,_=U(`x`,c.dataType,c.dims,p),v=W(`result`,c.dataType,c.dims,p),y=_.type.value,b=Es(c.dataType)===`f32`?`var threadMax = ${y}(-3.402823e+38f);`:`var threadMax = ${y}(-65504.0h);`,x=e.compute({name:`Softmax`,shaderCache:{hint:`${p};${h}`,inputDependencies:[`type`]},getRunData:()=>({outputs:[{dims:u,dataType:c.dataType}],dispatchGroup:{x:f},programUniforms:[{type:6,data:m}]}),getShaderSource:e=>`
      var<workgroup> rowMaxShared : ${y};
      var<workgroup> rowSumShared : ${y};
      var<workgroup> threadShared : array<${y}, ${h}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${y} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${y}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${e.registerUniform(`packedCols`,`i32`).declareVariables(_,v)}
      ${e.mainStart(h)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${h};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${b}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${y}(${g(`threadShared[0]`,p)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${y}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${y}(${js(`threadShared[0]`,p)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          let value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          setValue(row, col, row_stride, value);
        }
      }`},{inputs:[c],outputs:[s?-1:0]})[0];s&&e.compute(Us(x,l),{inputs:[x]})},dh=(e,t)=>{lh(e.inputs),uh(e,t)},fh=e=>gs({axis:e.axis})}),mh,hh,gh,_h,vh,yh=L(()=>{R(),B(),G(),mh=e=>Array.from(e.getBigInt64Array(),Number),hh=e=>{if(!e||e.length!==2)throw Error(`Tile requires 2 inputs.`);if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw Error(`Tile only support float, float16, int32, and uint32 data types`);if(e[1].dataType!==7)throw Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw Error("Tile `repeats` input should be 1-D");if(mh(e[1]).length!==e[0].dims.length)throw Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},gh=(e,t)=>{let n=[];for(let r=0;r<e.length;++r)n.push(e[r]*t[r]);return n},_h=(e,t)=>{let n=e[0].dims,r=t??mh(e[1]),i=gh(n,r),a=z.size(i),o=e[0].dataType,s=U(`input`,o,n.length),c=W(`output`,o,i.length);return{name:`Tile`,shaderCache:{hint:`${r}`,inputDependencies:[`rank`]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},...V(e[0].dims,i)]}),getShaderSource:e=>`
      const inputShape = ${s.indices(...n)};
      ${e.registerUniform(`output_size`,`u32`).declareVariables(s,c)}
      ${e.mainStart()}
      ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
      let output_indices = ${c.offsetToIndices(`global_idx`)};
      var input_indices: ${s.type.indices};
      for (var i = 0; i < ${n.length}; i++) {
        let input_dim_i = ${s.indicesGet(`uniforms.input_shape`,`i`)};
        let input_dim_value = ${c.indicesGet(`output_indices`,`i`)}  % input_dim_i;

        ${s.indicesSet(`input_indices`,`i`,`input_dim_value`)}
      }
      ${c.setByOffset(`global_idx`,s.getByIndices(`input_indices`))}
    }`}},vh=e=>{hh(e.inputs),e.compute(_h(e.inputs),{inputs:[0]})}}),bh,xh,Sh,Ch=L(()=>{R(),B(),G(),bh=(e,t,n,r,i)=>{let a=W(`output_data`,i,n.length,4),o=U(`a_data`,t[1].dataType,t[1].dims.length,4),s=U(`b_data`,t[2].dataType,t[2].dims.length,4),c=U(`c_data`,t[0].dataType,t[0].dims.length,4),l,u=(e,t,n)=>`select(${t}, ${e}, ${n})`;if(!r)l=a.setByOffset(`global_idx`,u(o.getByOffset(`global_idx`),s.getByOffset(`global_idx`),c.getByOffset(`global_idx`)));else{let e=(e,t,n=``)=>{let r=`a_data[index_a${t}][component_a${t}]`,i=`b_data[index_b${t}][component_b${t}]`,l=`bool(c_data[index_c${t}] & (0xffu << (component_c${t} * 8)))`;return`
            let output_indices${t} = ${a.offsetToIndices(`global_idx * 4u + ${t}u`)};
            let offset_a${t} = ${o.broadcastedIndicesToOffset(`output_indices${t}`,a)};
            let offset_b${t} = ${s.broadcastedIndicesToOffset(`output_indices${t}`,a)};
            let offset_c${t} = ${c.broadcastedIndicesToOffset(`output_indices${t}`,a)};
            let index_a${t} = offset_a${t} / 4u;
            let index_b${t} = offset_b${t} / 4u;
            let index_c${t} = offset_c${t} / 4u;
            let component_a${t} = offset_a${t} % 4u;
            let component_b${t} = offset_b${t} % 4u;
            let component_c${t} = offset_c${t} % 4u;
            ${e}[${t}] = ${n}(${u(r,i,l)});
          `};l=i===9?`
            var data = vec4<u32>(0);
            ${e(`data`,0,`u32`)}
            ${e(`data`,1,`u32`)}
            ${e(`data`,2,`u32`)}
            ${e(`data`,3,`u32`)}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:`
            ${e(`output_data[global_idx]`,0)}
            ${e(`output_data[global_idx]`,1)}
            ${e(`output_data[global_idx]`,2)}
            ${e(`output_data[global_idx]`,3)}
          `}return`
        ${e.registerUniform(`vec_size`,`u32`).declareVariables(c,o,s,a)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.vec_size`)}
        ${l}
      }`},xh=e=>{let t=e[1].dims,n=e[2].dims,r=e[0].dims,i=e[1].dataType,a=!(z.areEqual(t,n)&&z.areEqual(n,r)),o=t,s=z.size(t);if(a){let e=ys.calcShape(ys.calcShape(t,n,!1),r,!1);if(!e)throw Error(`Can't perform where op on the given tensors`);o=e,s=z.size(o)}let c=Math.ceil(s/4);return{name:`Where`,shaderCache:{inputDependencies:[`rank`,`rank`,`rank`]},getShaderSource:t=>bh(t,e,o,a,i),getRunData:()=>({outputs:[{dims:o,dataType:i}],dispatchGroup:{x:Math.ceil(s/64/4)},programUniforms:[{type:12,data:c},...V(r,t,n,o)]})}},Sh=e=>{e.compute(xh(e.inputs))}}),wh,Th=L(()=>{Kc(),tl(),ol(),ul(),ou(),bu(),Du(),bd(),Md(),Id(),Hd(),ef(),sf(),uf(),hf(),yf(),wf(),kf(),Pf(),Yf(),gp(),xp(),Tp(),Op(),Pp(),rp(),Wp(),um(),hm(),ym(),wm(),Vc(),Gm(),Ym(),$m(),ch(),ph(),dp(),yh(),Ks(),nu(),Ch(),wh=new Map([[`Abs`,[pl]],[`Acos`,[ml]],[`Acosh`,[hl]],[`Add`,[uu]],[`ArgMax`,[Wc,Gc]],[`ArgMin`,[Uc,Gc]],[`Asin`,[gl]],[`Asinh`,[_l]],[`Atan`,[vl]],[`Atanh`,[yl]],[`Attention`,[el]],[`AveragePool`,[tm,em]],[`BatchNormalization`,[al]],[`BiasAdd`,[ll]],[`BiasSplitGelu`,[au]],[`Cast`,[xl,bl]],[`Ceil`,[wl]],[`Clip`,[Cl]],[`Concat`,[Tu,Eu]],[`Conv`,[yd,hd]],[`ConvTranspose`,[jd,Dd]],[`Cos`,[Tl]],[`Cosh`,[El]],[`CumSum`,[Pd,Fd]],[`DepthToSpace`,[Bd,Vd]],[`DequantizeLinear`,[pm,mm]],[`Div`,[du]],[`Einsum`,[Qd,$d]],[`Elu`,[Ol,Dl]],[`Equal`,[fu]],[`Erf`,[Al]],[`Exp`,[jl]],[`Expand`,[of]],[`FastGelu`,[lf]],[`Floor`,[Ml]],[`FusedConv`,[yd,hd]],[`Gather`,[mf,pf]],[`GatherElements`,[Of,Df]],[`GatherBlockQuantized`,[Sf,Cf]],[`GatherND`,[_f,vf]],[`Gelu`,[Nl]],[`Gemm`,[Nf,Mf]],[`GlobalAveragePool`,[im,rm]],[`GlobalMaxPool`,[lm,cm]],[`Greater`,[gu]],[`GreaterOrEqual`,[vu]],[`GridSample`,[qf,Jf]],[`GroupQueryAttention`,[hp]],[`HardSigmoid`,[Vl,Bl]],[`InstanceNormalization`,[bp]],[`LayerNormalization`,[wp]],[`LeakyRelu`,[Pl,Dl]],[`Less`,[_u]],[`LessOrEqual`,[yu]],[`Log`,[Ql]],[`MatMul`,[Dp]],[`MatMulNBits`,[Mp,Np]],[`MaxPool`,[om,sm]],[`Mul`,[pu]],[`MultiHeadAttention`,[np,Qf]],[`Neg`,[Il]],[`Not`,[Fl]],[`Pad`,[Up]],[`Pow`,[mu]],[`QuickGelu`,[tu,Dl]],[`Range`,[vm]],[`Reciprocal`,[Ll]],[`ReduceMin`,[Ic]],[`ReduceMean`,[jc]],[`ReduceMax`,[Fc]],[`ReduceSum`,[Rc]],[`ReduceProd`,[Lc]],[`ReduceL1`,[Mc]],[`ReduceL2`,[Nc]],[`ReduceLogSum`,[Bc]],[`ReduceLogSumExp`,[Pc]],[`ReduceSumSquare`,[zc]],[`Relu`,[Rl]],[`Resize`,[Um,Wm]],[`RotaryEmbedding`,[Jm]],[`ScatterND`,[Cm,Sm]],[`Sigmoid`,[zl]],[`Sin`,[Hl]],[`Sinh`,[Ul]],[`Slice`,[oh,sh]],[`SkipLayerNormalization`,[Qm]],[`Split`,[lp,up]],[`Sqrt`,[Wl]],[`Softmax`,[dh,fh]],[`Sub`,[hu]],[`Tan`,[Gl]],[`Tanh`,[ql]],[`ThresholdedRelu`,[Zl,Dl]],[`Tile`,[vh]],[`Transpose`,[Ws,Gs]],[`Where`,[Sh]]])}),Eh,Dh=L(()=>{Ua(),ts(),G(),Eh=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,n,r,i){ja(e.programInfo.name);let a=this.backend.device,o=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let s=[];for(let e of t)s.push({binding:s.length,resource:{buffer:e.buffer}});for(let e of n)s.push({binding:s.length,resource:{buffer:e.buffer}});i&&s.push({binding:s.length,resource:i});let c=a.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:s,label:e.programInfo.name});if(this.backend.sessionStatus===`capturing`){let t={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:c,dispatchGroup:r};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(t)}o.setPipeline(e.computePipeline),o.setBindGroup(0,c),o.dispatchWorkgroups(...r),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType===`at-passes`)&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Ma(e.programInfo.name)}dispose(){}build(e,t){ja(e.name);let n=this.backend.device,r=[];[{feature:`shader-f16`,extension:`f16`},{feature:`subgroups`,extension:`subgroups`},{feature:`subgroups-f16`,extension:`subgroups_f16`}].forEach(e=>{n.features.has(e.feature)&&r.push(`enable ${e.extension};`)});let i=Is(t,this.backend.device.limits),a=e.getShaderSource(i),o=`${r.join(`
`)}
${i.additionalImplementations}
${a}`,s=n.createShaderModule({code:o,label:e.name});es(`verbose`,()=>`[WebGPU] ${e.name} shader code: ${o}`);let c=n.createComputePipeline({compute:{module:s,entryPoint:`main`},layout:`auto`,label:e.name});return Ma(e.name),{programInfo:e,computePipeline:c,uniformVariablesInfo:i.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e==`number`?e:e.x,n=typeof e==`number`?1:e.y||1,r=typeof e==`number`?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=i&&n<=i&&r<=i)return[t,n,r];let a=t*n*r,o=Math.ceil(Math.sqrt(a));if(o>i){if(o=Math.ceil(Math.cbrt(a)),o>i)throw Error(`Total dispatch size exceeds WebGPU maximum.`);return[o,o,o]}return[o,o,1]}}}),Oh,kh,Ah,jh,Mh,Nh=L(()=>{Ua(),R(),ts(),rs(),ms(),Th(),Dh(),Oh=(e,t)=>{if(t.length!==e.length)throw Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let n=[];for(let r=0;r<e.length;++r){let i=e[r].dataType;switch(t[r]){case`none`:n.push(``);break;case`type`:n.push(`${i}`);break;case`rank`:{let t=e[r].dims.length;n.push(`${i};${t}`);break}case`dims`:{let t=e[r].dims.join(`,`);n.push(`${i};${t}`);break}default:throw Error(`unsupported input dependency: ${t[r]}`)}}return n.join(`|`)},kh=(e,t,n)=>{let r=e.name;return e.shaderCache?.hint&&(r+=`[`+e.shaderCache.hint+`]`),r+=`:`+n+`:${Oh(t,e.shaderCache?.inputDependencies??Array(t.length).fill(`dims`))}`,r},Ah=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},jh=class{constructor(e){this.subgroupsSupported=e.features.has(`subgroups`),this.subgroupsF16Supported=e.features.has(`subgroups`);let t=e.limits;this.subgroupSizeRange=!this.subgroupsSupported||!t.minSubgroupSize||!t.maxSubgroupSize?void 0:[t.minSubgroupSize,t.maxSubgroupSize]}},Mh=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus=`default`,this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw Error(`currentKernelCustomData(): currentKernelId is null. (should not happen)`);let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let n=[],r={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:n},i=e=>t.features.has(e)&&n.push(e)&&!0;i(`chromium-experimental-timestamp-query-inside-passes`)||i(`timestamp-query`),i(`shader-f16`),i(`subgroups`)&&i(`subgroups-f16`),this.device=await t.requestDevice(r),this.deviceInfo=new jh(this.device),this.adapterInfo=new Ah(t.info||await t.requestAdapterInfo()),this.gpuDataManager=ps(this),this.programManager=new Eh(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Qo(e.logLevel,!!e.debug),this.device.onuncapturederror=e=>{e.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${e.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<`u`&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||=this.device.createCommandEncoder(),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType===`at-passes`&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&=(this.computePassEncoder.end(),null)}flush(){if(!this.commandEncoder)return;ja(),this.endComputePass();let e;this.queryType!==`none`&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!==`none`&&e.mapAsync(GPUMapMode.READ).then(()=>{let t=new BigUint64Array(e.getMappedRange()),n=this.pendingQueries.get(e);for(let e=0;e<t.length/2;e++){let r=n[e],i=r.kernelId,a=this.kernels.get(i),o=a.kernelType,s=a.kernelName,c=r.programName,l=r.inputTensorViews,u=r.outputTensorViews,d=t[e*2],f=t[e*2+1];typeof this.queryTimeBase>`u`&&(this.queryTimeBase=d);let p=Number(d-this.queryTimeBase),m=Number(f-this.queryTimeBase);if(!Number.isSafeInteger(p)||!Number.isSafeInteger(m))throw RangeError(`incorrect timestamp range`);if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:l.map(e=>({dims:e.dims,dataType:zo(e.dataType)})),outputsMetadata:u.map(e=>({dims:e.dims,dataType:zo(e.dataType)})),kernelId:i,kernelType:o,kernelName:s,programName:c,startTime:p,endTime:m});else{let e=``;l.forEach((t,n)=>{e+=`input[${n}]: [${t.dims}] | ${zo(t.dataType)}, `});let t=``;u.forEach((e,n)=>{t+=`output[${n}]: [${e.dims}] | ${zo(e.dataType)}, `}),console.log(`[profiling] kernel "${i}|${o}|${s}|${c}" ${e}${t}execution time: ${m-p} ns`)}ka(`GPU`,`${c}::${d}::${f}`)}e.unmap(),this.pendingQueries.delete(e)}),Ma()}run(e,t,n,r,i,a){ja(e.name);let o=[];for(let e=0;e<t.length;++e){let n=t[e].data;if(n===0)continue;let r=this.gpuDataManager.get(n);if(!r)throw Error(`no GPU data for input: ${n}`);o.push(r)}let{outputs:s,dispatchGroup:c,programUniforms:l}=e.getRunData(t),u=n.length===0?s.map((e,t)=>t):n;if(u.length!==s.length)throw Error(`Output size ${u.length} must be equal to ${s.length}.`);let d=[],f=[];for(let e=0;e<s.length;++e){if(!Number.isInteger(u[e])||u[e]<-3||u[e]>=a)throw Error(`Invalid output index: ${u[e]}`);if(u[e]===-3)continue;let t=u[e]===-1,n=u[e]===-2,o=t||n?i(s[e].dataType,s[e].dims):r(u[e],s[e].dataType,s[e].dims);if(d.push(o),o.data===0)continue;let c=this.gpuDataManager.get(o.data);if(!c)throw Error(`no GPU data for output: ${o.data}`);if(t&&this.temporaryData.push(c),n){let e=this.kernelPersistentData.get(this.currentKernelId);e||(e=[],this.kernelPersistentData.set(this.currentKernelId,e)),e.push(c)}f.push(c)}if(o.length!==t.length||f.length!==d.length){if(f.length===0)return Ma(e.name),d;throw Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let p;if(l){let e=0,t=[];l.forEach(n=>{let r=typeof n.data==`number`?[n.data]:n.data;if(r.length===0)return;let i=n.type===10?2:4,a,o;n.type===10?(o=r.length>4?16:r.length>2?8:r.length*i,a=r.length>4?16:i*r.length):(o=r.length<=2?r.length*i:16,a=16),e=Math.ceil(e/o)*o,t.push(e);let s=n.type===10?8:4;e+=r.length>4?Math.ceil(r.length/s)*a:r.length*i}),e=Math.ceil(e/16)*16;let n=new ArrayBuffer(e);l.forEach((e,r)=>{let i=t[r],a=typeof e.data==`number`?[e.data]:e.data;if(e.type===6)new Int32Array(n,i,a.length).set(a);else if(e.type===12)new Uint32Array(n,i,a.length).set(a);else if(e.type===10)new Uint16Array(n,i,a.length).set(a);else if(e.type===1)new Float32Array(n,i,a.length).set(a);else throw Error(`Unsupported uniform type: ${zo(e.type)}`)});let r=this.gpuDataManager.create(e,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(r.buffer,0,n,0,e),this.gpuDataManager.release(r.id),p={offset:0,size:e,buffer:r.buffer}}let m=this.programManager.normalizeDispatchGroupSize(c),h=m[1]===1&&m[2]===1,g=kh(e,t,h),_=this.programManager.getArtifact(g);if(_||(_=this.programManager.build(e,m),this.programManager.setArtifact(g,_),es(`info`,()=>`[artifact] key: ${g}, programName: ${e.name}`)),l&&_.uniformVariablesInfo){if(l.length!==_.uniformVariablesInfo.length)throw Error(`Uniform variables count mismatch: expect ${_.uniformVariablesInfo.length}, got ${l.length} in program "${_.programInfo.name}".`);for(let e=0;e<l.length;e++){let t=l[e],n=t.type,r=typeof t.data==`number`?1:t.data.length,[i,a]=_.uniformVariablesInfo[e];if(n!==i||r!==a)throw Error(`Uniform variable ${e} mismatch: expect type ${i} with size ${a}, got type ${n} with size ${r} in program "${_.programInfo.name}".`)}}if(es(`info`,()=>`[ProgramManager] run "${e.name}" (key=${g}) with ${m[0]}x${m[1]}x${m[2]}`),this.queryType!==`none`||this.sessionStatus===`capturing`){let e={kernelId:this.currentKernelId,programName:_.programInfo.name,inputTensorViews:t,outputTensorViews:d};this.pendingKernels.push(e),this.sessionStatus===`capturing`&&this.capturedPendingKernels.get(this.currentSessionId).push(e)}return this.programManager.run(_,o,f,m,p),Ma(e.name),d}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,n,r){let i=wh.get(e);if(!i)throw Error(`kernel not implemented: ${e}`);let a={kernelType:e,kernelName:r,kernelEntry:i[0],attributes:[i[1],n]};this.kernels.set(t,a)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let e of t)this.gpuDataManager.release(e.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,n){let r=this.kernels.get(e);if(!r)throw Error(`kernel not created: ${e}`);let i=r.kernelType,a=r.kernelName,o=r.kernelEntry,s=r.attributes;if(this.currentKernelId!==null)throw Error(`kernel "[${i}] ${a}" is not allowed to be called recursively`);this.currentKernelId=e,s[0]&&=(s[1]=s[0](s[1]),void 0),es(`info`,()=>`[WebGPU] Start to run kernel "[${i}] ${a}"...`);let c=this.env.debug;this.temporaryData=[];try{return c&&this.device.pushErrorScope(`validation`),o(t,s[1]),0}catch(e){return n.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${a}" failed. ${e}`)),1}finally{c&&n.push(this.device.popErrorScope().then(e=>e?`GPU validation error for kernel "[${i}] ${a}": ${e.message}`:null));for(let e of this.temporaryData)this.gpuDataManager.release(e.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,n,r){let i=this.sessionExternalDataMapping.get(e);i||(i=new Map,this.sessionExternalDataMapping.set(e,i));let a=i.get(t),o=this.gpuDataManager.registerExternalBuffer(n,r,a);return i.set(t,[o,n]),o}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(e=>this.gpuDataManager.unregisterExternalBuffer(e[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,n){return async()=>{let r=await ds(this,e,t);return ns(r.buffer,n)}}writeTimestamp(e){this.queryType===`inside-passes`&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){this.queryType=`none`,(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>`u`?this.env.wasm.trace:this.env.trace))&&(this.device.features.has(`chromium-experimental-timestamp-query-inside-passes`)?this.queryType=`inside-passes`:this.device.features.has(`timestamp-query`)&&(this.queryType=`at-passes`),this.queryType!==`none`&&typeof this.querySet>`u`&&(this.querySet=this.device.createQuerySet({type:`timestamp`,count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){es(`info`,`captureBegin`),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus=`capturing`}captureEnd(){es(`info`,`captureEnd`),this.flush(),this.sessionStatus=`default`}replay(){es(`info`,`replay`),this.sessionStatus=`replaying`;let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),n=e.length;this.pendingKernels=[];for(let r=0;r<n;r++){let n=this.getComputePassEncoder(),i=e[r];this.writeTimestamp(this.pendingDispatchNumber*2),n.setPipeline(i.computePipeline),n.setBindGroup(0,i.bindGroup),n.dispatchWorkgroups(...i.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!==`none`&&this.pendingKernels.push(t[r]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType===`at-passes`)&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus=`default`}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),Ph,Fh,Ih,Lh,Rh,zh,Bh,Vh,Hh=L(()=>{ts(),Ph=1,Fh=()=>Ph++,Ih=new Map([[`float32`,32],[`float16`,16],[`int32`,32],[`uint32`,32],[`int64`,64],[`uint64`,64],[`int8`,8],[`uint8`,8],[`int4`,4],[`uint4`,4]]),Lh=(e,t)=>{let n=Ih.get(e);if(!n)throw Error(`Unsupported data type.`);return t.length>0?Math.ceil(t.reduce((e,t)=>e*t)*n/8):0},Rh=class{constructor(e){this.sessionId=e.sessionId,this.mlContext=e.context,this.mlTensor=e.tensor,this.dataType=e.dataType,this.tensorShape=e.shape}get tensor(){return this.mlTensor}get type(){return this.dataType}get shape(){return this.tensorShape}get byteLength(){return Lh(this.dataType,this.tensorShape)}destroy(){es(`verbose`,()=>`[WebNN] TensorWrapper.destroy`),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,n){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===n.length&&this.tensorShape.every((e,t)=>e===n[t])}},zh=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,n,r){let i=this.tensorManager.getMLContext(e);if(this.wrapper){if(this.wrapper.canReuseTensor(i,t,n))return this.wrapper.tensor;if(r){if(this.wrapper.byteLength!==Lh(t,n))throw Error(`Unable to copy data to tensor with different size.`);this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let a=typeof MLTensorUsage>`u`?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,n,a,!0,!0),r&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){if(this.wrapper){if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(e);return}es(`verbose`,()=>`Data size does not match tensor size. Releasing tensor.`),this.releaseTensor()}this.activeUpload?this.activeUpload.set(e):this.activeUpload=new Uint8Array(e)}async download(e){if(this.activeUpload){if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(this.activeUpload):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(this.activeUpload);return}return this.activeUpload.buffer}if(!this.wrapper)throw Error(`Tensor has not been created.`);return e?this.wrapper.read(e):this.wrapper.read()}},Bh=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw Error(`MLContext not found for session.`);return t}reserveTensorId(){let e=Fh();return this.tensorTrackersById.set(e,new zh(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,n,r,i){es(`verbose`,()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${n}, shape: ${r}, copyOld: ${i}}`);let a=this.tensorTrackersById.get(t);if(!a)throw Error(`Tensor not found.`);return a.ensureTensor(e,n,r,i)}upload(e,t){let n=this.tensorTrackersById.get(e);if(!n)throw Error(`Tensor not found.`);n.upload(t)}async download(e,t){es(`verbose`,()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t?.byteLength}}`);let n=this.tensorTrackersById.get(e);if(!n)throw Error(`Tensor not found.`);return n.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,n,r){let i=this.getMLContext(e),a=Fh(),o=new Rh({sessionId:e,context:i,tensor:t,dataType:n,shape:r});return this.tensorTrackersById.set(a,new zh(this,o)),this.externalTensors.add(o),a}async getCachedTensor(e,t,n,r,i,a){let o=this.getMLContext(e);for(let[r,i]of this.freeTensors.entries())if(i.canReuseTensor(o,t,n)){es(`verbose`,()=>`[WebNN] Reusing tensor {dataType: ${t}, shape: ${n}}`);let i=this.freeTensors.splice(r,1)[0];return i.sessionId=e,i}es(`verbose`,()=>`[WebNN] MLContext.createTensor {dataType: ${t}, shape: ${n}}`);let s=await o.createTensor({dataType:t,shape:n,dimensions:n,usage:r,writable:i,readable:a});return new Rh({sessionId:e,context:o,tensor:s,dataType:t,shape:n})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Vh=(...e)=>new Bh(...e)}),Uh,Wh,Gh,Kh=L(()=>{R(),To(),rs(),Hh(),ts(),Uh=new Map([[1,`float32`],[10,`float16`],[6,`int32`],[12,`uint32`],[7,`int64`],[13,`uint64`],[22,`int4`],[21,`uint4`],[3,`int8`],[2,`uint8`],[9,`uint8`]]),Wh=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length===r.length&&n.every((n,i)=>n===r[i]&&e[n]===t[n])},Gh=class{constructor(e){this.tensorManager=Vh(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.temporaryGraphInputs=[],this.temporarySessionTensorIds=new Map,Qo(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw Error(`No active session`);return this.activeSessionId}onRunStart(e){es(`verbose`,()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){es(`verbose`,()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let e of t)es(`verbose`,()=>`[WebNN] releasing temporary tensor {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let t=this.mlContextCache.findIndex(t=>t.gpuDevice===e);if(t!==-1)return this.mlContextCache[t].mlContext;{let t=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:t}),t}}if(e===void 0){let e=this.mlContextCache.findIndex(e=>e.options===void 0&&e.gpuDevice===void 0);if(e!==-1)return this.mlContextCache[e].mlContext;{let e=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:e}),e}}let t=this.mlContextCache.findIndex(t=>Wh(t.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let t=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:t}),t}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let n=this.sessionIdsByMLContext.get(t);n||(n=new Set,this.sessionIdsByMLContext.set(t,n)),n.add(e),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e);let n=this.sessionIdsByMLContext.get(t);if(n.delete(e),n.size===0){this.sessionIdsByMLContext.delete(t);let e=this.mlContextCache.findIndex(e=>e.mlContext===t);e!==-1&&this.mlContextCache.splice(e,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){es(`verbose`,()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,n,r,i){let a=Uh.get(n);if(!a)throw Error(`Unsupported ONNX data type: ${n}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,a,r,i)}async createTemporaryTensor(e,t,n){es(`verbose`,()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${n}}`);let r=Uh.get(t);if(!r)throw Error(`Unsupported ONNX data type: ${t}`);let i=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,i,r,n,!1);let a=this.temporarySessionTensorIds.get(e);return a?a.push(i):this.temporarySessionTensorIds.set(e,[i]),i}uploadTensor(e,t){if(!wo().shouldTransferToMLTensor)throw Error(`Trying to upload to a MLTensor while shouldTransferToMLTensor is false`);es(`verbose`,()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let n=await this.tensorManager.download(e);return ns(n,t)}}registerMLTensor(e,t,n,r){let i=Uh.get(n);if(!i)throw Error(`Unsupported ONNX data type: ${n}`);let a=this.tensorManager.registerTensor(e,t,i,r);return es(`verbose`,()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${i}, dimensions: ${r}} -> {tensorId: ${a}}`),a}registerMLConstant(e,t,n,r,i,a){if(!a)throw Error(`External mounted files are not available.`);let o=e;e.startsWith(`./`)&&(o=e.substring(2));let s=a.get(o);if(!s)throw Error(`File with name ${o} not found in preloaded files.`);if(t+n>s.byteLength)throw Error(`Out of bounds: data offset and length exceed the external file data size.`);let c=s.slice(t,t+n).buffer,l;switch(i.dataType){case`float32`:l=new Float32Array(c);break;case`float16`:l=new Uint16Array(c);break;case`int32`:l=new Int32Array(c);break;case`uint32`:l=new Uint32Array(c);break;case`int64`:l=new BigInt64Array(c);break;case`uint64`:l=new BigUint64Array(c);break;case`int8`:l=new Int8Array(c);break;case`int4`:case`uint4`:case`uint8`:l=new Uint8Array(c);break;default:throw Error(`Unsupported data type: ${i.dataType} in creating WebNN Constant from external data.`)}return es(`verbose`,()=>`[WebNN] registerMLConstant {dataType: ${i.dataType}, shape: ${i.shape}}}`),r.constant(i,l)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}isGraphInput(e,t){let n=this.sessionGraphInputs.get(e);return n?n.includes(t):!1}flush(){}}}),qh={};Wi(qh,{init:()=>Xh});var Jh,Yh,Xh,Zh=L(()=>{R(),Nh(),ts(),B(),Kh(),Jh=class e{constructor(e,t,n,r){this.module=e,this.dataType=t,this.data=n,this.dims=r}getFloat32Array(){if(this.dataType!==1)throw Error(`Invalid data type`);let e=z.size(this.dims);return e===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,e)}getBigInt64Array(){if(this.dataType!==7)throw Error(`Invalid data type`);let e=z.size(this.dims);return e===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,e)}getInt32Array(){if(this.dataType!==6)throw Error(`Invalid data type`);let e=z.size(this.dims);return e===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,e)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw Error(`Invalid data type`);let e=z.size(this.dims);return e===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,e)}reshape(t){if(z.size(t)!==z.size(this.dims))throw Error(`Invalid new shape`);return new e(this.module,this.dataType,this.data,t)}},Yh=class{constructor(e,t,n){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo,this.deviceInfo=t.deviceInfo;let r=e.PTR_SIZE,i=n/e.PTR_SIZE,a=r===4?`i32`:`i64`;this.opKernelContext=Number(e.getValue(r*i++,a));let o=Number(e.getValue(r*i++,a));this.outputCount=Number(e.getValue(r*i++,a)),this.customDataOffset=Number(e.getValue(r*i++,`*`)),this.customDataSize=Number(e.getValue(r*i++,a));let s=[];for(let t=0;t<o;t++){let t=Number(e.getValue(r*i++,a)),n=Number(e.getValue(r*i++,`*`)),o=Number(e.getValue(r*i++,a)),c=[];for(let t=0;t<o;t++)c.push(Number(e.getValue(r*i++,a)));s.push(new Jh(e,t,n,c))}this.inputs=s}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){let n=t?.inputs?.map(e=>typeof e==`number`?this.inputs[e]:e)??this.inputs,r=t?.outputs??[];return this.backend.run(e,n,r,(e,t,n)=>new Jh(this.module,t,this.output(e,n),n),(e,t)=>{let n=Bo(e,t);if(!n)throw Error(`Unsupported data type: ${e}`);let r=n>0?this.backend.gpuDataManager.create(n).id:0;return new Jh(this.module,e,r,t)},this.outputCount)}output(e,t){let n=this.module.stackSave();try{let n=this.module.PTR_SIZE,r=n===4?`i32`:`i64`,i=this.module.stackAlloc((1+t.length)*n);this.module.setValue(i,t.length,r);for(let e=0;e<t.length;e++)this.module.setValue(i+n*(e+1),t[e],r);return this.module._JsepOutput(this.opKernelContext,e,i)}catch(n){throw Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${n}`)}finally{this.module.stackRestore(n)}}},Xh=async(e,t,n,r)=>{let i=t.jsepInit;if(!i)throw Error(`Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.`);if(e===`webgpu`){let e=new Mh;await e.initialize(n,r),i(`webgpu`,[e,t=>e.alloc(Number(t)),t=>e.free(t),(n,r,i,a=!1)=>{if(a)es(`verbose`,()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(n)}, dst=${Number(r)}, size=${Number(i)}`),e.memcpy(Number(n),Number(r));else{es(`verbose`,()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(n)}, gpuDataId=${Number(r)}, size=${Number(i)}`);let a=t.HEAPU8.subarray(Number(n>>>0),Number(n>>>0)+Number(i));e.upload(Number(r),a)}},async(n,r,i)=>{es(`verbose`,()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${n}, dataOffset=${r}, size=${i}`),await e.download(Number(n),()=>t.HEAPU8.subarray(Number(r)>>>0,Number(r+i)>>>0))},(n,r,i)=>e.createKernel(n,Number(r),i,t.UTF8ToString(t._JsepGetNodeName(Number(r)))),t=>e.releaseKernel(t),(n,r,i,a)=>{es(`verbose`,()=>`[WebGPU] jsepRun: sessionHandle=${i}, kernel=${n}, contextDataOffset=${r}`);let o=new Yh(t,e,Number(r));return e.computeKernel(Number(n),o,a)},()=>e.captureBegin(),()=>e.captureEnd(),()=>e.replay()])}else{let e=new Gh(n);i(`webnn`,[e,()=>e.reserveTensorId(),t=>e.releaseTensorId(t),async(t,n,r,i,a)=>e.ensureTensor(t,n,r,i,a),(t,n)=>{e.uploadTensor(t,n)},async(t,n)=>e.downloadTensor(t,n)])}}}),Qh,$h,eg,tg,ng,rg,ig,ag,og,sg,cg,lg,ug=L(()=>{jo(),Lo(),R(),To(),ko(),qo(),Qh=(e,t)=>{wo()._OrtInit(e,t)!==0&&Oo(`Can't initialize onnxruntime.`)},$h=async e=>{Qh(e.wasm.numThreads,Ho(e.logLevel))},eg=async(e,t)=>{{let n=(Zh(),Ki(qh)).init;if(t===`webgpu`){if(typeof navigator>`u`||!navigator.gpu)throw Error(`WebGPU is not supported in current environment`);let t=e.webgpu.adapter;if(t){if(typeof t.limits!=`object`||typeof t.features!=`object`||typeof t.requestDevice!=`function`)throw Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let n=e.webgpu.powerPreference;if(n!==void 0&&n!==`low-power`&&n!==`high-performance`)throw Error(`Invalid powerPreference setting: "${n}"`);let r=e.webgpu.forceFallbackAdapter;if(r!==void 0&&typeof r!=`boolean`)throw Error(`Invalid forceFallbackAdapter setting: "${r}"`);if(t=await navigator.gpu.requestAdapter({powerPreference:n,forceFallbackAdapter:r}),!t)throw Error(`Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.`)}await n(`webgpu`,wo(),e,t)}if(t===`webnn`){if(typeof navigator>`u`||!navigator.ml)throw Error(`WebNN is not supported in current environment`);await n(`webnn`,wo(),e)}}},tg=new Map,ng=e=>{let t=wo(),n=t.stackSave();try{let n=t.PTR_SIZE,r=t.stackAlloc(2*n);t._OrtGetInputOutputCount(e,r,r+n)!==0&&Oo(`Can't get session input/output count.`);let i=n===4?`i32`:`i64`;return[Number(t.getValue(r,i)),Number(t.getValue(r+n,i))]}finally{t.stackRestore(n)}},rg=e=>{let t=wo(),n=t._malloc(e.byteLength);if(n===0)throw Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,n),[n,e.byteLength]},ig=async(e,t)=>{let n,r,i=wo();Array.isArray(e)?[n,r]=e:e.buffer===i.HEAPU8.buffer?[n,r]=[e.byteOffset,e.byteLength]:[n,r]=rg(e);let a=0,o=0,s=0,c=[],l=[],u=[];try{if([o,c]=Io(t),t?.externalData&&i.mountExternalData){let e=[];for(let n of t.externalData){let t=typeof n==`string`?n:n.path;e.push(Ko(typeof n==`string`?n:n.data).then(e=>{i.mountExternalData(t,e)}))}await Promise.all(e)}for(let e of t?.executionProviders??[])if((typeof e==`string`?e:e.name)===`webnn`){if(i.shouldTransferToMLTensor=!1,typeof e!=`string`){let t=e,n=t?.context,r=t?.gpuDevice,a=t?.deviceType,o=t?.powerPreference;i.currentContext=n||(r?await i.jsepCreateMLContext(r):await i.jsepCreateMLContext({deviceType:a,powerPreference:o}))}else i.currentContext=await i.jsepCreateMLContext();break}a=await i._OrtCreateSession(n,r,o),a===0&&Oo(`Can't create a session.`),i.jsepOnCreateSession?.(),i.currentContext&&(i.jsepRegisterMLContext(a,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);let[e,d]=ng(a),f=!!t?.enableGraphCapture,p=[],m=[],h=[];for(let t=0;t<e;t++){let e=i._OrtGetInputName(a,t);e===0&&Oo(`Can't get an input name.`),l.push(e),p.push(i.UTF8ToString(e))}for(let e=0;e<d;e++){let n=i._OrtGetOutputName(a,e);n===0&&Oo(`Can't get an output name.`),u.push(n);let r=i.UTF8ToString(n);m.push(r);{if(f&&t?.preferredOutputLocation===void 0){h.push(`gpu-buffer`);continue}let e=typeof t?.preferredOutputLocation==`string`?t.preferredOutputLocation:t?.preferredOutputLocation?.[r]??`cpu`;if(e!==`cpu`&&e!==`cpu-pinned`&&e!==`gpu-buffer`&&e!==`ml-tensor`)throw Error(`Not supported preferred output location: ${e}.`);if(f&&e!==`gpu-buffer`)throw Error(`Not supported preferred output location: ${e}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);h.push(e)}}let g=null;return h.some(e=>e===`gpu-buffer`||e===`ml-tensor`)&&(s=i._OrtCreateBinding(a),s===0&&Oo(`Can't create IO binding.`),g={handle:s,outputPreferredLocations:h,outputPreferredLocationsEncoded:h.map(e=>Go(e))}),tg.set(a,[a,l,u,g,f,!1]),[a,p,m]}catch(e){throw l.forEach(e=>i._OrtFree(e)),u.forEach(e=>i._OrtFree(e)),s!==0&&i._OrtReleaseBinding(s)!==0&&Oo(`Can't release IO binding.`),a!==0&&i._OrtReleaseSession(a)!==0&&Oo(`Can't release session.`),e}finally{i._free(n),o!==0&&i._OrtReleaseSessionOptions(o)!==0&&Oo(`Can't release session options.`),c.forEach(e=>i._free(e)),i.unmountExternalData?.()}},ag=e=>{let t=wo(),n=tg.get(e);if(!n)throw Error(`cannot release session. invalid session id: ${e}`);let[r,i,a,o,s]=n;o&&(s&&t._OrtClearBoundOutputs(o.handle)!==0&&Oo(`Can't clear bound outputs.`),t._OrtReleaseBinding(o.handle)!==0&&Oo(`Can't release IO binding.`)),t.jsepOnReleaseSession?.(e),i.forEach(e=>t._OrtFree(e)),a.forEach(e=>t._OrtFree(e)),t._OrtReleaseSession(r)!==0&&Oo(`Can't release session.`),tg.delete(e)},og=async(e,t,n,r,i,a=!1)=>{if(!e){t.push(0);return}let o=wo(),s=o.PTR_SIZE,c=e[0],l=e[1],u=e[3],d=u,f,p;if(c===`string`&&(u===`gpu-buffer`||u===`ml-tensor`))throw Error(`String tensor is not supported on GPU.`);if(a&&u!==`gpu-buffer`)throw Error(`External buffer must be provided for input/output index ${i} when enableGraphCapture is true.`);if(u===`gpu-buffer`){let t=e[2].gpuBuffer;p=Bo(Ro(c),l);let n=o.jsepRegisterBuffer;if(!n)throw Error(`Tensor location "gpu-buffer" is not supported without using WebGPU.`);f=n(r,i,t,p)}else if(u===`ml-tensor`){let t=e[2].mlTensor;p=Bo(Ro(c),l);let n=o.jsepRegisterMLTensor;if(!n)throw Error(`Tensor location "ml-tensor" is not supported without using WebNN.`);f=n(r,t,Ro(c),l)}else{let t=e[2];if(Array.isArray(t)){p=s*t.length,f=o._malloc(p),n.push(f);for(let e=0;e<t.length;e++){if(typeof t[e]!=`string`)throw TypeError(`tensor data at index ${e} is not a string`);o.setValue(f+e*s,Eo(t[e],n),`*`)}}else{let e=o.jsepIsGraphInput;if(c!==`string`&&e){let a=o._OrtGetInputName(r,i);if(e(r,o.UTF8ToString(a))){let e=Ro(c);p=Bo(e,l),d=`ml-tensor`;let n=o.jsepCreateTemporaryTensor,i=o.jsepUploadTensor;if(!n||!i)throw Error(`Tensor location "ml-tensor" is not supported without using WebNN.`);let a=await n(r,e,l);i(a,new Uint8Array(t.buffer,t.byteOffset,t.byteLength)),f=a}else p=t.byteLength,f=o._malloc(p),n.push(f),o.HEAPU8.set(new Uint8Array(t.buffer,t.byteOffset,p),f)}else p=t.byteLength,f=o._malloc(p),n.push(f),o.HEAPU8.set(new Uint8Array(t.buffer,t.byteOffset,p),f)}}let m=o.stackSave(),h=o.stackAlloc(4*l.length);try{l.forEach((e,t)=>o.setValue(h+t*s,e,s===4?`i32`:`i64`));let e=o._OrtCreateTensor(Ro(c),f,p,h,l.length,Go(d));e===0&&Oo(`Can't create tensor for input/output. session=${r}, index=${i}.`),t.push(e)}finally{o.stackRestore(m)}},sg=async(e,t,n,r,i,a)=>{let o=wo(),s=o.PTR_SIZE,c=tg.get(e);if(!c)throw Error(`cannot run inference. invalid session id: ${e}`);let l=c[0],u=c[1],d=c[2],f=c[3],p=c[4],m=c[5],h=t.length,g=r.length,_=0,v=[],y=[],b=[],x=[],S=o.stackSave(),ee=o.stackAlloc(h*s),te=o.stackAlloc(h*s),ne=o.stackAlloc(g*s),re=o.stackAlloc(g*s);try{[_,v]=Ao(a);for(let r=0;r<h;r++)await og(n[r],y,x,e,t[r],p);for(let t=0;t<g;t++)await og(i[t],b,x,e,h+r[t],p);for(let e=0;e<h;e++)o.setValue(ee+e*s,y[e],`*`),o.setValue(te+e*s,u[t[e]],`*`);for(let e=0;e<g;e++)o.setValue(ne+e*s,b[e],`*`),o.setValue(re+e*s,d[r[e]],`*`);if(f&&!m){let{handle:n,outputPreferredLocations:a,outputPreferredLocationsEncoded:s}=f;if(u.length!==h)throw Error(`input count from feeds (${h}) is expected to be always equal to model's input count (${u.length}).`);for(let r=0;r<h;r++){let i=t[r];await o._OrtBindInput(n,u[i],y[r])!==0&&Oo(`Can't bind input[${r}] for session=${e}.`)}for(let t=0;t<g;t++){let c=r[t];i[t]?.[3]?o._OrtBindOutput(n,d[c],b[t],0)!==0&&Oo(`Can't bind pre-allocated output[${t}] for session=${e}.`):o._OrtBindOutput(n,d[c],0,s[c])!==0&&Oo(`Can't bind output[${t}] to ${a[t]} for session=${e}.`)}tg.set(e,[l,u,d,f,p,!0])}o.jsepOnRunStart?.(l);let c;c=f?await o._OrtRunWithBinding(l,f.handle,g,ne,_):await o._OrtRun(l,te,ee,h,re,g,ne,_),c!==0&&Oo(`failed to call OrtRun().`);let S=[];for(let t=0;t<g;t++){let n=Number(o.getValue(ne+t*s,`*`));if(n===b[t]){S.push(i[t]);continue}let a=o.stackSave(),c=o.stackAlloc(4*s),u=!1,d,p=0;try{o._OrtGetTensorData(n,c,c+s,c+2*s,c+3*s)!==0&&Oo(`Can't access output tensor data on index ${t}.`);let i=s===4?`i32`:`i64`,a=Number(o.getValue(c,i));p=o.getValue(c+s,`*`);let l=o.getValue(c+s*2,`*`),m=Number(o.getValue(c+s*3,i)),h=[];for(let e=0;e<m;e++)h.push(Number(o.getValue(l+e*s,i)));o._OrtFree(l)!==0&&Oo(`Can't free memory for tensor dims.`);let g=h.reduce((e,t)=>e*t,1);d=zo(a);let _=f?.outputPreferredLocations[r[t]];if(d===`string`){if(_===`gpu-buffer`||_===`ml-tensor`)throw Error(`String tensor is not supported on GPU.`);let e=[];for(let t=0;t<g;t++){let n=o.getValue(p+t*s,`*`),r=o.getValue(p+(t+1)*s,`*`),i=t===g-1?void 0:r-n;e.push(o.UTF8ToString(n,i))}S.push([d,h,e,`cpu`])}else if(_===`gpu-buffer`&&g>0){let e=o.jsepGetBuffer;if(!e)throw Error(`preferredLocation "gpu-buffer" is not supported without using WebGPU.`);let t=e(p),r=Bo(a,g);if(r===void 0||!Uo(d))throw Error(`Unsupported data type: ${d}`);u=!0,S.push([d,h,{gpuBuffer:t,download:o.jsepCreateDownloader(t,r,d),dispose:()=>{o._OrtReleaseTensor(n)!==0&&Oo(`Can't release tensor.`)}},`gpu-buffer`])}else if(_===`ml-tensor`&&g>0){let t=o.jsepEnsureTensor;if(!t)throw Error(`preferredLocation "ml-tensor" is not supported without using WebNN.`);if(Bo(a,g)===void 0||!Wo(d))throw Error(`Unsupported data type: ${d}`);let r=await t(e,p,a,h,!1);u=!0,S.push([d,h,{mlTensor:r,download:o.jsepCreateMLTensorDownloader(p,d),dispose:()=>{o.jsepReleaseTensorId(p),o._OrtReleaseTensor(n)}},`ml-tensor`])}else{let e=new(Vo(d))(g);new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(o.HEAPU8.subarray(p,p+e.byteLength)),S.push([d,h,e,`cpu`])}}finally{o.stackRestore(a),d===`string`&&p&&o._free(p),u||o._OrtReleaseTensor(n),o.jsepOnRunEnd?.(l)}}return f&&!p&&(o._OrtClearBoundOutputs(f.handle)!==0&&Oo(`Can't clear bound outputs.`),tg.set(e,[l,u,d,f,p,!1])),S}finally{o.stackRestore(S),y.forEach(e=>o._OrtReleaseTensor(e)),b.forEach(e=>o._OrtReleaseTensor(e)),x.forEach(e=>o._free(e)),_!==0&&o._OrtReleaseRunOptions(_),v.forEach(e=>o._free(e))}},cg=e=>{let t=wo(),n=tg.get(e);if(!n)throw Error(`invalid session id`);let r=n[0],i=t._OrtEndProfiling(r);i===0&&Oo(`Can't get an profile file name.`),t._OrtFree(i)},lg=e=>{let t=[];for(let n of e){let e=n[2];!Array.isArray(e)&&`buffer`in e&&t.push(e.buffer)}return t}}),dg,fg,pg,mg,hg,gg,_g,vg,yg,bg,xg,Sg,Cg,wg,Tg,Eg,Dg,Og,kg=L(()=>{Ua(),ug(),To(),go(),dg=()=>!!aa.wasm.proxy&&typeof document<`u`,pg=!1,mg=!1,hg=!1,vg=new Map,yg=(e,t)=>{let n=vg.get(e);n?n.push(t):vg.set(e,[t])},bg=()=>{if(pg||!mg||hg||!fg)throw Error(`worker not ready`)},xg=e=>{switch(e.data.type){case`init-wasm`:pg=!1,e.data.err?(hg=!0,_g[1](e.data.err)):(mg=!0,_g[0]()),gg&&=(URL.revokeObjectURL(gg),void 0);break;case`init-ep`:case`copy-from`:case`create`:case`release`:case`run`:case`end-profiling`:{let t=vg.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},Sg=async()=>{if(!mg){if(pg)throw Error(`multiple calls to 'initWasm()' detected.`);if(hg)throw Error(`previous call to 'initWasm()' failed.`);if(pg=!0,dg())return new Promise((e,t)=>{fg?.terminate(),po().then(([n,r])=>{try{fg=r,fg.onerror=e=>t(e),fg.onmessage=xg,_g=[e,t];let i={type:`init-wasm`,in:aa};!i.in.wasm.wasmPaths&&(n||import.meta.url?.startsWith(`file:`))&&(i.in.wasm.wasmPaths={wasm:new URL(new URL(`ort-wasm-simd-threaded.jsep-D5Jk56-t.wasm`,import.meta.url).href,``+import.meta.url).href}),fg.postMessage(i),gg=n}catch(e){t(e)}},t)});try{await Co(aa.wasm),await $h(aa),mg=!0}catch(e){throw hg=!0,e}finally{pg=!1}}},Cg=async e=>{if(dg())return bg(),new Promise((t,n)=>{yg(`init-ep`,[t,n]);let r={type:`init-ep`,in:{epName:e,env:aa}};fg.postMessage(r)});await eg(aa,e)},wg=async e=>dg()?(bg(),new Promise((t,n)=>{yg(`copy-from`,[t,n]);let r={type:`copy-from`,in:{buffer:e}};fg.postMessage(r,[e.buffer])})):rg(e),Tg=async(e,t)=>{if(dg()){if(t?.preferredOutputLocation)throw Error(`session option "preferredOutputLocation" is not supported for proxy.`);return bg(),new Promise((n,r)=>{yg(`create`,[n,r]);let i={type:`create`,in:{model:e,options:{...t}}},a=[];e instanceof Uint8Array&&a.push(e.buffer),fg.postMessage(i,a)})}return ig(e,t)},Eg=async e=>{if(dg())return bg(),new Promise((t,n)=>{yg(`release`,[t,n]);let r={type:`release`,in:e};fg.postMessage(r)});ag(e)},Dg=async(e,t,n,r,i,a)=>{if(dg()){if(n.some(e=>e[3]!==`cpu`))throw Error(`input tensor on GPU is not supported for proxy.`);if(i.some(e=>e))throw Error(`pre-allocated output tensor is not supported for proxy.`);return bg(),new Promise((i,o)=>{yg(`run`,[i,o]);let s=n,c={type:`run`,in:{sessionId:e,inputIndices:t,inputs:s,outputIndices:r,options:a}};fg.postMessage(c,lg(s))})}return sg(e,t,n,r,i,a)},Og=async e=>{if(dg())return bg(),new Promise((t,n)=>{yg(`end-profiling`,[t,n]);let r={type:`end-profiling`,in:e};fg.postMessage(r)});cg(e)}}),Ag,jg,Mg,Ng=L(()=>{Ua(),kg(),R(),Wa(),qo(),Ag=(e,t)=>{switch(e.location){case`cpu`:return[e.type,e.dims,e.data,`cpu`];case`gpu-buffer`:return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},`gpu-buffer`];case`ml-tensor`:return[e.type,e.dims,{mlTensor:e.mlTensor},`ml-tensor`];default:throw Error(`invalid data location: ${e.location} for ${t()}`)}},jg=e=>{switch(e[3]){case`cpu`:return new Da(e[0],e[2],e[1]);case`gpu-buffer`:{let t=e[0];if(!Uo(t))throw Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:n,download:r,dispose:i}=e[2];return Da.fromGpuBuffer(n,{dataType:t,dims:e[1],download:r,dispose:i})}case`ml-tensor`:{let t=e[0];if(!Wo(t))throw Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:n,download:r,dispose:i}=e[2];return Da.fromMLTensor(n,{dataType:t,dims:e[1],download:r,dispose:i})}default:throw Error(`invalid data location: ${e[3]}`)}},Mg=class{async fetchModelAndCopyToWasmMemory(e){return wg(await Ko(e))}async loadModel(e,t){ja();let n;n=typeof e==`string`?await this.fetchModelAndCopyToWasmMemory(e):e,[this.sessionId,this.inputNames,this.outputNames]=await Tg(n,t),Ma()}async dispose(){return Eg(this.sessionId)}async run(e,t,n){ja();let r=[],i=[];Object.entries(e).forEach(e=>{let t=e[0],n=e[1],a=this.inputNames.indexOf(t);if(a===-1)throw Error(`invalid input '${t}'`);r.push(n),i.push(a)});let a=[],o=[];Object.entries(t).forEach(e=>{let t=e[0],n=e[1],r=this.outputNames.indexOf(t);if(r===-1)throw Error(`invalid output '${t}'`);a.push(n),o.push(r)});let s=r.map((e,t)=>Ag(e,()=>`input "${this.inputNames[i[t]]}"`)),c=a.map((e,t)=>e?Ag(e,()=>`output "${this.outputNames[o[t]]}"`):null),l=await Dg(this.sessionId,i,s,o,c,n),u={};for(let e=0;e<l.length;e++)u[this.outputNames[o[e]]]=a[e]??jg(l[e]);return Ma(),u}startProfiling(){}endProfiling(){Og(this.sessionId)}}}),Pg={};Wi(Pg,{OnnxruntimeWebAssemblyBackend:()=>Ig,initializeFlags:()=>Fg,wasmBackend:()=>Lg});var Fg,Ig,Lg,Rg=L(()=>{Ua(),kg(),Ng(),Fg=()=>{if((typeof aa.wasm.initTimeout!=`number`||aa.wasm.initTimeout<0)&&(aa.wasm.initTimeout=0),aa.wasm.simd===!1&&console.warn(`Deprecated property "env.wasm.simd" is set to false. non-SIMD build is no longer provided, and this setting will be ignored.`),typeof aa.wasm.proxy!=`boolean`&&(aa.wasm.proxy=!1),typeof aa.wasm.trace!=`boolean`&&(aa.wasm.trace=!1),typeof aa.wasm.numThreads!=`number`||!Number.isInteger(aa.wasm.numThreads)||aa.wasm.numThreads<=0){if(typeof self<`u`&&!self.crossOriginIsolated)aa.wasm.numThreads=1;else{let e=typeof navigator>`u`?Ui(`node:os`).cpus().length:navigator.hardwareConcurrency;aa.wasm.numThreads=Math.min(4,Math.ceil((e||1)/2))}}},Ig=class{async init(e){Fg(),await Sg(),await Cg(e)}async createInferenceSessionHandler(e,t){let n=new Mg;return await n.loadModel(e,t),Promise.resolve(n)}},Lg=new Ig});Ua(),Ua(),Ua();var zg=`1.21.0`,Bg=Ha;{let e=(Rg(),Ki(Pg)).wasmBackend;Yi(`webgpu`,e,5),Yi(`webnn`,e,5),Yi(`cpu`,e,10),Yi(`wasm`,e,10)}Object.defineProperty(aa.versions,"web",{value:zg,enumerable:!0});var Vg=e({default:()=>HO}),Hg=Object.defineProperty,Ug=Object.getOwnPropertyDescriptor,Wg=Object.getOwnPropertyNames,Gg=Object.prototype.hasOwnProperty,Kg=(e=>typeof t<`u`?t:typeof Proxy<`u`?new Proxy(e,{get:(e,n)=>(typeof t<`u`?t:e)[n]}):e)(function(e){if(typeof t<`u`)return t.apply(this,arguments);throw Error(`Dynamic require of "`+e+`" is not supported`)}),K=(e,t)=>()=>(e&&(t=e(e=0)),t),qg=(e,t)=>{for(var n in t)Hg(e,n,{get:t[n],enumerable:!0})},Jg=(e,t,n,r)=>{if(t&&typeof t==`object`||typeof t==`function`)for(let i of Wg(t))!Gg.call(e,i)&&i!==n&&Hg(e,i,{get:()=>t[i],enumerable:!(r=Ug(t,i))||r.enumerable});return e},Yg=e=>Jg(Hg({},`__esModule`,{value:!0}),e),Xg,Zg,Qg,$g,e_,t_=K(()=>{Xg=new Map,Zg=[],Qg=(e,t,n)=>{if(t&&typeof t.init==`function`&&typeof t.createInferenceSessionHandler==`function`){let r=Xg.get(e);if(r===void 0)Xg.set(e,{backend:t,priority:n});else{if(r.priority>n)return;if(r.priority===n&&r.backend!==t)throw Error(`cannot register backend "${e}" using priority ${n}`)}if(n>=0){let t=Zg.indexOf(e);t!==-1&&Zg.splice(t,1);for(let t=0;t<Zg.length;t++)if(Xg.get(Zg[t]).priority<=n){Zg.splice(t,0,e);return}Zg.push(e)}}else throw TypeError(`not a valid backend`)},$g=async e=>{let t=Xg.get(e);if(!t)return`backend not found.`;if(t.initialized)return t.backend;if(t.aborted)return t.error;{let n=!!t.initPromise;try{return n||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(e){return n||(t.error=`${e}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},e_=async e=>{let t=e.executionProviders||[],n=t.map(e=>typeof e==`string`?e:e.name),r=n.length===0?Zg:n,i,a=[],o=new Set;for(let e of r){let t=await $g(e);typeof t==`string`?a.push({name:e,err:t}):(i||=t,i===t&&o.add(e))}if(!i)throw Error(`no available backend found. ERR: ${a.map(e=>`[${e.name}] ${e.err}`).join(`, `)}`);for(let{name:e,err:t}of a)n.includes(e)&&console.warn(`removing requested execution provider "${e}" from session options because it is not available: ${t}`);let s=t.filter(e=>o.has(typeof e==`string`?e:e.name));return[i,new Proxy(e,{get:(e,t)=>t===`executionProviders`?s:Reflect.get(e,t)})]}}),n_=K(()=>{t_()}),r_,i_=K(()=>{r_=`1.21.0`}),a_,o_,s_=K(()=>{i_(),a_=`warning`,o_={wasm:{},webgl:{},webgpu:{},versions:{common:r_},set logLevel(e){if(e!==void 0){if(typeof e!=`string`||[`verbose`,`info`,`warning`,`error`,`fatal`].indexOf(e)===-1)throw Error(`Unsupported logging level: ${e}`);a_=e}},get logLevel(){return a_}},Object.defineProperty(o_,"logLevel",{enumerable:!0})}),c_,l_=K(()=>{s_(),c_=o_}),u_,d_,f_=K(()=>{u_=(e,t)=>{let n=typeof document<`u`?document.createElement(`canvas`):new OffscreenCanvas(1,1);n.width=e.dims[3],n.height=e.dims[2];let r=n.getContext(`2d`);if(r!=null){let i,a;t?.tensorLayout!==void 0&&t.tensorLayout===`NHWC`?(i=e.dims[2],a=e.dims[3]):(i=e.dims[3],a=e.dims[2]);let o=t?.format===void 0?`RGB`:t.format,s=t?.norm,c,l;s===void 0||s.mean===void 0?c=[255,255,255,255]:typeof s.mean==`number`?c=[s.mean,s.mean,s.mean,s.mean]:(c=[s.mean[0],s.mean[1],s.mean[2],0],s.mean[3]!==void 0&&(c[3]=s.mean[3])),s===void 0||s.bias===void 0?l=[0,0,0,0]:typeof s.bias==`number`?l=[s.bias,s.bias,s.bias,s.bias]:(l=[s.bias[0],s.bias[1],s.bias[2],0],s.bias[3]!==void 0&&(l[3]=s.bias[3]));let u=a*i,d=0,f=u,p=u*2,m=-1;o===`RGBA`?(d=0,f=u,p=u*2,m=u*3):o===`RGB`?(d=0,f=u,p=u*2):o===`RBG`&&(d=0,p=u,f=u*2);for(let t=0;t<a;t++)for(let n=0;n<i;n++){let i=(e.data[d++]-l[0])*c[0],a=(e.data[f++]-l[1])*c[1],o=(e.data[p++]-l[2])*c[2],s=m===-1?255:(e.data[m++]-l[3])*c[3];r.fillStyle=`rgba(`+i+`,`+a+`,`+o+`,`+s+`)`,r.fillRect(n,t,1,1)}if(`toDataURL`in n)return n.toDataURL();throw Error(`toDataURL is not supported`)}throw Error(`Can not access image data`)},d_=(e,t)=>{let n=typeof document<`u`?document.createElement(`canvas`).getContext(`2d`):new OffscreenCanvas(1,1).getContext(`2d`),r;if(n!=null){let i,a,o;t?.tensorLayout!==void 0&&t.tensorLayout===`NHWC`?(i=e.dims[2],a=e.dims[1],o=e.dims[3]):(i=e.dims[3],a=e.dims[2],o=e.dims[1]);let s=t!==void 0&&t.format!==void 0?t.format:`RGB`,c=t?.norm,l,u;c===void 0||c.mean===void 0?l=[255,255,255,255]:typeof c.mean==`number`?l=[c.mean,c.mean,c.mean,c.mean]:(l=[c.mean[0],c.mean[1],c.mean[2],255],c.mean[3]!==void 0&&(l[3]=c.mean[3])),c===void 0||c.bias===void 0?u=[0,0,0,0]:typeof c.bias==`number`?u=[c.bias,c.bias,c.bias,c.bias]:(u=[c.bias[0],c.bias[1],c.bias[2],0],c.bias[3]!==void 0&&(u[3]=c.bias[3]));let d=a*i;if(t!==void 0&&(t.format!==void 0&&o===4&&t.format!==`RGBA`||o===3&&t.format!==`RGB`&&t.format!==`BGR`))throw Error(`Tensor format doesn't match input tensor dims`);let f=0,p=1,m=2,h=3,g=0,_=d,v=d*2,y=-1;s===`RGBA`?(g=0,_=d,v=d*2,y=d*3):s===`RGB`?(g=0,_=d,v=d*2):s===`RBG`&&(g=0,v=d,_=d*2),r=n.createImageData(i,a);for(let t=0;t<a*i;f+=4,p+=4,m+=4,h+=4,t++)r.data[f]=(e.data[g++]-u[0])*l[0],r.data[p]=(e.data[_++]-u[1])*l[1],r.data[m]=(e.data[v++]-u[2])*l[2],r.data[h]=y===-1?255:(e.data[y++]-u[3])*l[3]}else throw Error(`Can not access image data`);return r}}),p_,m_,h_,g_,__,v_,y_=K(()=>{k_(),p_=(e,t)=>{if(e===void 0)throw Error(`Image buffer must be defined`);if(t.height===void 0||t.width===void 0)throw Error(`Image height and width must be defined`);if(t.tensorLayout===`NHWC`)throw Error(`NHWC Tensor layout is not supported yet`);let{height:n,width:r}=t,i=t.norm??{mean:255,bias:0},a,o;a=typeof i.mean==`number`?[i.mean,i.mean,i.mean,i.mean]:[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],o=typeof i.bias==`number`?[i.bias,i.bias,i.bias,i.bias]:[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];let s=t.format===void 0?`RGBA`:t.format,c=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:`RGB`,l=n*r,u=c===`RGBA`?new Float32Array(l*4):new Float32Array(l*3),d=4,f=0,p=1,m=2,h=3,g=0,_=l,v=l*2,y=-1;s===`RGB`&&(d=3,f=0,p=1,m=2,h=-1),c===`RGBA`?y=l*3:c===`RBG`?(g=0,v=l,_=l*2):c===`BGR`&&(v=0,_=l,g=l*2);for(let t=0;t<l;t++,f+=d,m+=d,p+=d,h+=d)u[g++]=(e[f]+o[0])/a[0],u[_++]=(e[p]+o[1])/a[1],u[v++]=(e[m]+o[2])/a[2],y!==-1&&h!==-1&&(u[y++]=(e[h]+o[3])/a[3]);return c===`RGBA`?new O_(`float32`,u,[1,4,n,r]):new O_(`float32`,u,[1,3,n,r])},m_=async(e,t)=>{let n=typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement,r=typeof ImageData<`u`&&e instanceof ImageData,i=typeof ImageBitmap<`u`&&e instanceof ImageBitmap,a=typeof e==`string`,o,s=t??{},c=()=>{if(typeof document<`u`)return document.createElement(`canvas`);if(typeof OffscreenCanvas<`u`)return new OffscreenCanvas(1,1);throw Error(`Canvas is not supported`)},l=e=>typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||e instanceof OffscreenCanvas?e.getContext(`2d`):null;if(n){let n=c();n.width=e.width,n.height=e.height;let r=l(n);if(r!=null){let n=e.height,i=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(n=t.resizedHeight,i=t.resizedWidth),t!==void 0){if(s=t,t.tensorFormat!==void 0)throw Error(`Image input config format must be RGBA for HTMLImageElement`);s.tensorFormat=`RGBA`,s.height=n,s.width=i}else s.tensorFormat=`RGBA`,s.height=n,s.width=i;r.drawImage(e,0,0),o=r.getImageData(0,0,i,n).data}else throw Error(`Can not access image data`)}else if(r){let n,r;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(n=t.resizedHeight,r=t.resizedWidth):(n=e.height,r=e.width),t!==void 0&&(s=t),s.format=`RGBA`,s.height=n,s.width=r,t!==void 0){let t=c();t.width=r,t.height=n;let i=l(t);if(i!=null)i.putImageData(e,0,0),o=i.getImageData(0,0,r,n).data;else throw Error(`Can not access image data`)}else o=e.data}else if(i){if(t===void 0)throw Error(`Please provide image config with format for Imagebitmap`);let n=c();n.width=e.width,n.height=e.height;let r=l(n);if(r!=null){let t=e.height,n=e.width;return r.drawImage(e,0,0,n,t),o=r.getImageData(0,0,n,t).data,s.height=t,s.width=n,p_(o,s)}throw Error(`Can not access image data`)}else{if(a)return new Promise((t,n)=>{let r=c(),i=l(r);if(!e||!i)return n();let a=new Image;a.crossOrigin=`Anonymous`,a.src=e,a.onload=()=>{r.width=a.width,r.height=a.height,i.drawImage(a,0,0,r.width,r.height);let e=i.getImageData(0,0,r.width,r.height);s.height=r.height,s.width=r.width,t(p_(e.data,s))}});throw Error(`Input data provided is not supported - aborted tensor creation`)}if(o!==void 0)return p_(o,s);throw Error(`Input data provided is not supported - aborted tensor creation`)},h_=(e,t)=>{let{width:n,height:r,download:i,dispose:a}=t;return new O_({location:`texture`,type:`float32`,texture:e,dims:[1,r,n,4],download:i,dispose:a})},g_=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new O_({location:`gpu-buffer`,type:n??`float32`,gpuBuffer:e,dims:r,download:i,dispose:a})},__=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new O_({location:`ml-tensor`,type:n??`float32`,mlTensor:e,dims:r,download:i,dispose:a})},v_=(e,t,n)=>new O_({location:`cpu-pinned`,type:e,data:t,dims:n??[t.length]})}),b_,x_,S_,C_,w_=K(()=>{b_=new Map([[`float32`,Float32Array],[`uint8`,Uint8Array],[`int8`,Int8Array],[`uint16`,Uint16Array],[`int16`,Int16Array],[`int32`,Int32Array],[`bool`,Uint8Array],[`float64`,Float64Array],[`uint32`,Uint32Array],[`int4`,Uint8Array],[`uint4`,Uint8Array]]),x_=new Map([[Float32Array,`float32`],[Uint8Array,`uint8`],[Int8Array,`int8`],[Uint16Array,`uint16`],[Int16Array,`int16`],[Int32Array,`int32`],[Float64Array,`float64`],[Uint32Array,`uint32`]]),S_=!1,C_=()=>{if(!S_){S_=!0;let e=typeof BigInt64Array<`u`&&BigInt64Array.from,t=typeof BigUint64Array<`u`&&BigUint64Array.from,n=globalThis.Float16Array,r=typeof n<`u`&&n.from;e&&(b_.set(`int64`,BigInt64Array),x_.set(BigInt64Array,`int64`)),t&&(b_.set(`uint64`,BigUint64Array),x_.set(BigUint64Array,`uint64`)),r?(b_.set(`float16`,n),x_.set(n,`float16`)):b_.set(`float16`,Uint16Array)}}}),T_,E_,D_=K(()=>{k_(),T_=e=>{let t=1;for(let n=0;n<e.length;n++){let r=e[n];if(typeof r!=`number`||!Number.isSafeInteger(r))throw TypeError(`dims[${n}] must be an integer, got: ${r}`);if(r<0)throw RangeError(`dims[${n}] must be a non-negative integer, got: ${r}`);t*=r}return t},E_=(e,t)=>{switch(e.location){case`cpu`:return new O_(e.type,e.data,t);case`cpu-pinned`:return new O_({location:`cpu-pinned`,data:e.data,type:e.type,dims:t});case`texture`:return new O_({location:`texture`,texture:e.texture,type:e.type,dims:t});case`gpu-buffer`:return new O_({location:`gpu-buffer`,gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case`ml-tensor`:return new O_({location:`ml-tensor`,mlTensor:e.mlTensor,type:e.type,dims:t});default:throw Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),O_,k_=K(()=>{f_(),y_(),w_(),D_(),O_=class{constructor(e,t,n){C_();let r,i;if(typeof e==`object`&&`location`in e)switch(this.dataLocation=e.location,r=e.type,i=e.dims,e.location){case`cpu-pinned`:{let t=b_.get(r);if(!t)throw TypeError(`unsupported type "${r}" to create tensor from pinned buffer`);if(!(e.data instanceof t))throw TypeError(`buffer should be of type ${t.name}`);this.cpuData=e.data;break}case`texture`:if(r!==`float32`)throw TypeError(`unsupported type "${r}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break;case`gpu-buffer`:if(r!==`float32`&&r!==`float16`&&r!==`int32`&&r!==`int64`&&r!==`uint32`&&r!==`uint8`&&r!==`bool`&&r!==`uint4`&&r!==`int4`)throw TypeError(`unsupported type "${r}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break;case`ml-tensor`:if(r!==`float32`&&r!==`float16`&&r!==`int32`&&r!==`int64`&&r!==`uint32`&&r!==`uint64`&&r!==`int8`&&r!==`uint8`&&r!==`bool`&&r!==`uint4`&&r!==`int4`)throw TypeError(`unsupported type "${r}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break;default:throw Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let a,o;if(typeof e==`string`){if(r=e,o=n,e===`string`){if(!Array.isArray(t))throw TypeError(`A string tensor's data must be a string array.`);a=t}else{let n=b_.get(e);if(n===void 0)throw TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e===`float16`&&n===Uint16Array||e===`uint4`||e===`int4`)throw TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${n.name} as data.`);a=e===`uint64`||e===`int64`?n.from(t,BigInt):n.from(t)}else if(t instanceof n)a=t;else if(t instanceof Uint8ClampedArray){if(e===`uint8`)a=Uint8Array.from(t);else throw TypeError(`A Uint8ClampedArray tensor's data must be type of uint8`)}else if(e===`float16`&&t instanceof Uint16Array&&n!==Uint16Array)a=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw TypeError(`A ${r} tensor's data must be type of ${n}`)}}else if(o=t,Array.isArray(e)){if(e.length===0)throw TypeError(`Tensor type cannot be inferred from an empty array.`);let t=typeof e[0];if(t===`string`)r=`string`,a=e;else if(t===`boolean`)r=`bool`,a=Uint8Array.from(e);else throw TypeError(`Invalid element type of data array: ${t}.`)}else if(e instanceof Uint8ClampedArray)r=`uint8`,a=Uint8Array.from(e);else{let t=x_.get(e.constructor);if(t===void 0)throw TypeError(`Unsupported type for tensor data: ${e.constructor}.`);r=t,a=e}if(o===void 0)o=[a.length];else if(!Array.isArray(o))throw TypeError(`A tensor's dims must be a number array`);i=o,this.cpuData=a,this.dataLocation=`cpu`}let a=T_(i);if(this.cpuData&&a!==this.cpuData.length&&(r!==`uint4`&&r!==`int4`||Math.ceil(a/2)!==this.cpuData.length))throw Error(`Tensor's size(${a}) does not match data length(${this.cpuData.length}).`);this.type=r,this.dims=i,this.size=a}static async fromImage(e,t){return m_(e,t)}static fromTexture(e,t){return h_(e,t)}static fromGpuBuffer(e,t){return g_(e,t)}static fromMLTensor(e,t){return __(e,t)}static fromPinnedBuffer(e,t,n){return v_(e,t,n)}toDataURL(e){return u_(this,e)}toImageData(e){return d_(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw Error(`The data is not stored as a WebGL texture.`);return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw Error(`The data is not stored as a WebGPU buffer.`);return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw Error(`The data is not stored as a WebNN MLTensor.`);return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case`cpu`:case`cpu-pinned`:return this.data;case`texture`:case`gpu-buffer`:case`ml-tensor`:if(!this.downloader)throw Error(`The current tensor is not created with a specified data downloader.`);if(this.isDownloading)throw Error(`The current tensor is being downloaded.`);try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation=`cpu`,this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}default:throw Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw Error(`The current tensor is being downloaded.`);this.disposer&&=(this.disposer(),void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation=`none`}ensureValid(){if(this.dataLocation===`none`)throw Error(`The tensor is disposed.`)}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw Error(`Cannot reshape a tensor that owns GPU resource.`);return E_(this,e)}}}),A_,j_=K(()=>{k_(),A_=O_}),M_,N_,P_,F_,I_=K(()=>{s_(),M_=(e,t)=>{(typeof o_.trace>`u`?!o_.wasm.trace:!o_.trace)||console.timeStamp(`${e}::ORT::${t}`)},N_=(e,t)=>{let n=Error().stack?.split(/\r\n|\r|\n/g)||[],r=!1;for(let i=0;i<n.length;i++){if(r&&!n[i].includes(`TRACE_FUNC`)){let r=`FUNC_${e}::${n[i].trim().split(` `)[1]}`;t&&(r+=`::${t}`),M_(`CPU`,r);return}n[i].includes(`TRACE_FUNC`)&&(r=!0)}},P_=e=>{(typeof o_.trace>`u`?!o_.wasm.trace:!o_.trace)||N_(`BEGIN`,e)},F_=e=>{(typeof o_.trace>`u`?!o_.wasm.trace:!o_.trace)||N_(`END`,e)}}),L_,R_=K(()=>{t_(),j_(),I_(),L_=class e{constructor(e){this.handler=e}async run(e,t,n){P_();let r={},i={};if(typeof e!=`object`||!e||e instanceof A_||Array.isArray(e))throw TypeError(`'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.`);let a=!0;if(typeof t==`object`){if(t===null)throw TypeError(`Unexpected argument[1]: cannot be null.`);if(t instanceof A_)throw TypeError(`'fetches' cannot be a Tensor`);if(Array.isArray(t)){if(t.length===0)throw TypeError(`'fetches' cannot be an empty array.`);a=!1;for(let e of t){if(typeof e!=`string`)throw TypeError(`'fetches' must be a string array or an object.`);if(this.outputNames.indexOf(e)===-1)throw RangeError(`'fetches' contains invalid output name: ${e}.`);r[e]=null}if(typeof n==`object`&&n)i=n;else if(typeof n<`u`)throw TypeError(`'options' must be an object.`)}else{let e=!1,o=Object.getOwnPropertyNames(t);for(let n of this.outputNames)if(o.indexOf(n)!==-1){let i=t[n];(i===null||i instanceof A_)&&(e=!0,a=!1,r[n]=i)}if(e){if(typeof n==`object`&&n)i=n;else if(typeof n<`u`)throw TypeError(`'options' must be an object.`)}else i=t}}else if(typeof t<`u`)throw TypeError(`Unexpected argument[1]: must be 'fetches' or 'options'.`);for(let t of this.inputNames)if(typeof e[t]>`u`)throw Error(`input '${t}' is missing in 'feeds'.`);if(a)for(let e of this.outputNames)r[e]=null;let o=await this.handler.run(e,r,i),s={};for(let e in o)if(Object.hasOwnProperty.call(o,e)){let t=o[e];s[e]=t instanceof A_?t:new A_(t.type,t.data,t.dims)}return F_(),s}async release(){return this.handler.dispose()}static async create(t,n,r,i){P_();let a,o={};if(typeof t==`string`){if(a=t,typeof n==`object`&&n)o=n;else if(typeof n<`u`)throw TypeError(`'options' must be an object.`)}else if(t instanceof Uint8Array){if(a=t,typeof n==`object`&&n)o=n;else if(typeof n<`u`)throw TypeError(`'options' must be an object.`)}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<`u`&&t instanceof SharedArrayBuffer){let e=t,s=0,c=t.byteLength;if(typeof n==`object`&&n)o=n;else if(typeof n==`number`){if(s=n,!Number.isSafeInteger(s))throw RangeError(`'byteOffset' must be an integer.`);if(s<0||s>=e.byteLength)throw RangeError(`'byteOffset' is out of range [0, ${e.byteLength}).`);if(c=t.byteLength-s,typeof r==`number`){if(c=r,!Number.isSafeInteger(c))throw RangeError(`'byteLength' must be an integer.`);if(c<=0||s+c>e.byteLength)throw RangeError(`'byteLength' is out of range (0, ${e.byteLength-s}].`);if(typeof i==`object`&&i)o=i;else if(typeof i<`u`)throw TypeError(`'options' must be an object.`)}else if(typeof r<`u`)throw TypeError(`'byteLength' must be a number.`)}else if(typeof n<`u`)throw TypeError(`'options' must be an object.`);a=new Uint8Array(e,s,c)}else throw TypeError(`Unexpected argument[0]: must be 'path' or 'buffer'.`);let[s,c]=await e_(o),l=await s.createInferenceSessionHandler(a,c);return F_(),new e(l)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}}}),z_,B_=K(()=>{R_(),z_=L_}),V_=K(()=>{}),H_=K(()=>{}),U_=K(()=>{}),W_=K(()=>{}),G_={};qg(G_,{InferenceSession:()=>z_,TRACE:()=>M_,TRACE_FUNC_BEGIN:()=>P_,TRACE_FUNC_END:()=>F_,Tensor:()=>A_,env:()=>c_,registerBackend:()=>Qg});var K_=K(()=>{n_(),l_(),B_(),j_(),V_(),H_(),I_(),U_(),W_()}),q_=K(()=>{}),J_={};qg(J_,{default:()=>Z_});var Y_,X_,Z_,Q_=K(()=>{fO(),Dv(),vv(),Y_=`ort-wasm-proxy-worker`,X_=globalThis.self?.name===Y_,X_&&(self.onmessage=e=>{let{type:t,in:n}=e.data;try{switch(t){case`init-wasm`:Tv(n.wasm).then(()=>{tO(n).then(()=>{postMessage({type:t})},e=>{postMessage({type:t,err:e})})},e=>{postMessage({type:t,err:e})});break;case`init-ep`:{let{epName:e,env:r}=n;nO(r,e).then(()=>{postMessage({type:t})},e=>{postMessage({type:t,err:e})});break}case`copy-from`:{let{buffer:e}=n,r=aO(e);postMessage({type:t,out:r});break}case`create`:{let{model:e,options:r}=n;oO(e,r).then(e=>{postMessage({type:t,out:e})},e=>{postMessage({type:t,err:e})});break}case`release`:sO(n),postMessage({type:t});break;case`run`:{let{sessionId:e,inputIndices:r,inputs:i,outputIndices:a,options:o}=n;lO(e,r,i,a,Array(a.length).fill(null),o).then(e=>{e.some(e=>e[3]!==`cpu`)?postMessage({type:t,err:`Proxy does not support non-cpu tensor location.`}):postMessage({type:t,out:e},dO([...i,...e]))},e=>{postMessage({type:t,err:e})});break}case`end-profiling`:uO(n),postMessage({type:t})}}catch(e){postMessage({type:t,err:e})}}),Z_=X_?null:e=>new Worker(e??sv,{type:`module`,name:Y_})}),$_={};qg($_,{default:()=>nv});var ev,tv,nv,rv,iv=K(()=>{tv=(ev=import.meta.url,async function(e={}){var t,n,r=e,i=new Promise((e,r)=>{t=e,n=r}),a=typeof window==`object`,o=typeof WorkerGlobalScope<`u`,s=o&&self.name?.startsWith(`em-pthread`);r.mountExternalData=(e,t)=>{e.startsWith(`./`)&&(e=e.substring(2)),(r.Bd||=new Map).set(e,t)},r.unmountExternalData=()=>{delete r.Bd};var c=globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let l=()=>{let e=(e,t,n)=>(...r)=>{let i=k,a=t?.();r=e(...r);let o=t?.();return a!==o&&(e=o,n(a),t=n=null),k==i?r:new Promise((e,t)=>{Tn={resolve:e,reject:t}})},t=e=>async(...t)=>{try{if(r.Cd)throw Error(`Session already started`);let n=r.Cd={be:t[0],errors:[]},i=await e(...t);if(r.Cd!==n)throw Error(`Session mismatch`);r.Dd?.flush();let a=n.errors;if(0<a.length){let e=await Promise.all(a);if(e=e.filter(e=>e),0<e.length)throw Error(e.join(`
`))}return i}finally{r.Cd=null}};r._OrtCreateSession=e(r._OrtCreateSession,()=>r._OrtCreateSession,e=>r._OrtCreateSession=e),r._OrtRun=t(e(r._OrtRun,()=>r._OrtRun,e=>r._OrtRun=e)),r._OrtRunWithBinding=t(e(r._OrtRunWithBinding,()=>r._OrtRunWithBinding,e=>r._OrtRunWithBinding=e)),r._OrtBindInput=e(r._OrtBindInput,()=>r._OrtBindInput,e=>r._OrtBindInput=e),l=void 0};r.jsepInit=(e,t)=>{if(l?.(),e===`webgpu`){[r.Dd,r.Rd,r.Vd,r.Hd,r.Ud,r.hc,r.Wd,r.Zd,r.Sd,r.Td,r.Xd]=t;let e=r.Dd;r.jsepRegisterBuffer=(t,n,r,i)=>e.registerBuffer(t,n,r,i),r.jsepGetBuffer=t=>e.getBuffer(t),r.jsepCreateDownloader=(t,n,r)=>e.createDownloader(t,n,r),r.jsepOnCreateSession=t=>{e.onCreateSession(t)},r.jsepOnReleaseSession=t=>{e.onReleaseSession(t)},r.jsepOnRunStart=t=>e.onRunStart(t),r.$d=(t,n)=>{e.upload(t,n)}}else if(e===`webnn`){[r.Dd,r.Yd,r.Id,r.jsepEnsureTensor,r.Jd,r.jsepDownloadTensor]=t,r.jsepReleaseTensorId=r.Id,r.jsepUploadTensor=r.Jd;let e=r.Dd;r.jsepOnRunStart=t=>e.onRunStart(t),r.jsepOnRunEnd=e.onRunEnd.bind(e),r.jsepRegisterMLContext=(t,n)=>{e.registerMLContext(t,n)},r.jsepOnReleaseSession=t=>{e.onReleaseSession(t)},r.jsepCreateMLTensorDownloader=(t,n)=>e.createMLTensorDownloader(t,n),r.jsepRegisterMLTensor=(t,n,r,i)=>e.registerMLTensor(t,n,r,i),r.jsepCreateMLContext=t=>e.createMLContext(t),r.jsepRegisterMLConstant=(t,n,i,a,o)=>e.registerMLConstant(t,n,i,a,o,r.Bd),r.jsepRegisterGraphInput=e.registerGraphInput.bind(e),r.jsepIsGraphInput=e.isGraphInput.bind(e),r.jsepCreateTemporaryTensor=e.createTemporaryTensor.bind(e)}};var u,d,f=Object.assign({},r),p=(e,t)=>{throw t},m=``;(a||o)&&(o?m=self.location.href:typeof document<`u`&&document.currentScript&&(m=document.currentScript.src),ev&&(m=ev),m=m.startsWith(`blob:`)?``:m.slice(0,m.replace(/[?#].*/,``).lastIndexOf(`/`)+1),o&&(d=e=>{var t=new XMLHttpRequest;return t.open(`GET`,e,!1),t.responseType=`arraybuffer`,t.send(null),new Uint8Array(t.response)}),u=async e=>{if(ue(e))return new Promise((t,n)=>{var r=new XMLHttpRequest;r.open(`GET`,e,!0),r.responseType=`arraybuffer`,r.onload=()=>{r.status==200||r.status==0&&r.response?t(r.response):n(r.status)},r.onerror=n,r.send(null)});var t=await fetch(e,{credentials:`same-origin`});if(t.ok)return t.arrayBuffer();throw Error(t.status+` : `+t.url)});var h=console.log.bind(console),g=console.error.bind(console),_=h,v=g;Object.assign(r,f),f=null;var y,b,x,S,ee,te,ne,re,ie,ae,C,oe,se,ce=r.wasmBinary,le=!1,ue=e=>e.startsWith(`file://`);function de(){return y.buffer!=S.buffer&&ye(),S}function fe(){return y.buffer!=S.buffer&&ye(),ee}function pe(){return y.buffer!=S.buffer&&ye(),te}function me(){return y.buffer!=S.buffer&&ye(),ne}function w(){return y.buffer!=S.buffer&&ye(),re}function T(){return y.buffer!=S.buffer&&ye(),ie}function he(){return y.buffer!=S.buffer&&ye(),ae}function ge(){return y.buffer!=S.buffer&&ye(),se}if(s){let e=function(t){try{var n=t.data,i=n.yd;if(i===`load`){let t=[];self.onmessage=e=>t.push(e),self.startWorker=()=>{postMessage({yd:`loaded`});for(let n of t)e(n);self.onmessage=e};for(let e of n.Od)r[e]&&!r[e].proxy||(r[e]=(...t)=>{postMessage({yd:`callHandler`,Nd:e,args:t})},e==`print`&&(_=r[e]),e==`printErr`&&(v=r[e]));y=n.he,ye(),_e(n.ie)}else if(i===`run`){Ke(n.xd),Gr(n.xd,0,0,1,0,0),Ue(),ln(n.xd),ve||=(Vr(),!0);try{qe(n.de,n.Fd)}catch(e){if(e!=`unwind`)throw e}}else n.target!==`setimmediate`&&(i===`checkMailbox`?ve&&un():i&&(v(`worker: received unknown command ${i}`),v(n)))}catch(e){throw Kr(),e}};var _e,ve=!1;v=function(...e){e=e.join(` `),console.error(e)},self.alert=function(...e){postMessage({yd:`alert`,text:e.join(` `),fe:Hr()})},self.onunhandledrejection=e=>{throw e.reason||e},self.onmessage=e}function ye(){var e=y.buffer;r.HEAP8=S=new Int8Array(e),r.HEAP16=te=new Int16Array(e),r.HEAPU8=ee=new Uint8Array(e),r.HEAPU16=ne=new Uint16Array(e),r.HEAP32=re=new Int32Array(e),r.HEAPU32=ie=new Uint32Array(e),r.HEAPF32=ae=new Float32Array(e),r.HEAPF64=se=new Float64Array(e),r.HEAP64=C=new BigInt64Array(e),r.HEAPU64=oe=new BigUint64Array(e)}function be(){s?startWorker(r):M.Bb()}s||(y=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),ye());var xe,Se=0,Ce=null;function we(){if(--Se==0&&Ce){var e=Ce;Ce=null,e()}}function Te(e){throw v(e=`Aborted(`+e+`)`),le=!0,e=new WebAssembly.RuntimeError(e+`. Build with -sASSERTIONS for more info.`),n(e),e}function Ee(){return{a:{Ta:ke,Va:Oe,W:Ye,la:Ze,b:tt,u:nt,R:rt,Za:it,d:at,pb:st,g:$e,T:dt,Ga:ft,lb:ht,nb:gt,Ha:_t,Ea:vt,wb:yt,Da:bt,pa:xt,mb:St,jb:Ct,Fa:wt,kb:Tt,Ma:Ot,za:Ft,eb:Lt,cb:Gt,ya:qt,V:Jt,N:Yt,db:Xt,ma:an,fb:on,zb:sn,hb:dn,qb:fn,ab:O,Aa:pn,yb:ln,Ja:mn,S:_n,Wa:vn,$:On,G:j,E:Mn,m:Bt,H:Pn,B:Rn,X:zn,J:Bn,v:Vn,O:Hn,D:Un,t:Wn,A:Gn,z:Kn,w:qn,r:Jn,tb:Yn,ub:$n,vb:er,rb:tr,sb:nr,bb:ar,Oa:or,La:lr,y:fr,ja:pr,Ba:mr,Ka:sr,qa:hr,Ia:gr,ib:_r,U:ir,fa:vr,Sa:yr,gb:br,Qa:wr,Pa:Tr,Ab:kr,Ca:Ar,ob:Le,aa:jr,oa:Mr,xb:Nr,na:Fr,$a:xa,ia:Pa,sa:za,ga:ya,da:Da,ua:La,p:_a,e:ta,c:$i,ea:Ta,f:na,n:ia,k:pa,Y:oa,ka:ma,j:va,wa,Ra:Ha,ca:Ma,Ua:Va,P:Ea,K:ca,_:ja,Q:ba,Z:Fa,x:sa,l:ea,va:Aa,i:Qi,h:aa,ra:Ba,ta:Ra,o:ra,q:la,s:da,I:fa,C:ga,L:ha,xa:Ca,_a:Sa,F:Na,Ya:Oa,ba:Ia,M:ua,Xa:ka,ha:Ir,a:y,Na:Fe}}}var De={1319426:()=>typeof wasmOffsetConverter<`u`,1319483:(e,t,n,i,a)=>{if(r===void 0||!r.Bd)return 1;if((e=ut(Number(e>>>0))).startsWith(`./`)&&(e=e.substring(2)),!(e=r.Bd.get(e)))return 2;if(t=Number(t>>>0),n=Number(n>>>0),i=Number(i>>>0),t+n>e.byteLength)return 3;try{let o=e.subarray(t,t+n);switch(a){case 0:fe().set(o,i>>>0);break;case 1:r.$d(i,o);break;default:return 4}return 0}catch{return 4}},1320198:(e,t,n)=>{r.Jd(e,fe().subarray(t>>>0,t+n>>>0))},1320261:()=>r.Yd(),1320302:e=>{r.Id(e)},1320338:()=>{r.Sd()},1320369:()=>{r.Td()},1320398:()=>{r.Xd()},1320423:e=>r.Rd(e),1320456:e=>r.Vd(e),1320488:(e,t,n)=>{r.Hd(Number(e),Number(t),Number(n),!0)},1320551:(e,t,n)=>{r.Hd(Number(e),Number(t),Number(n))},1320608:e=>{r.hc(`Abs`,e,void 0)},1320659:e=>{r.hc(`Neg`,e,void 0)},1320710:e=>{r.hc(`Floor`,e,void 0)},1320763:e=>{r.hc(`Ceil`,e,void 0)},1320815:e=>{r.hc(`Reciprocal`,e,void 0)},1320873:e=>{r.hc(`Sqrt`,e,void 0)},1320925:e=>{r.hc(`Exp`,e,void 0)},1320976:e=>{r.hc(`Erf`,e,void 0)},1321027:e=>{r.hc(`Sigmoid`,e,void 0)},1321082:(e,t,n)=>{r.hc(`HardSigmoid`,e,{alpha:t,beta:n})},1321161:e=>{r.hc(`Log`,e,void 0)},1321212:e=>{r.hc(`Sin`,e,void 0)},1321263:e=>{r.hc(`Cos`,e,void 0)},1321314:e=>{r.hc(`Tan`,e,void 0)},1321365:e=>{r.hc(`Asin`,e,void 0)},1321417:e=>{r.hc(`Acos`,e,void 0)},1321469:e=>{r.hc(`Atan`,e,void 0)},1321521:e=>{r.hc(`Sinh`,e,void 0)},1321573:e=>{r.hc(`Cosh`,e,void 0)},1321625:e=>{r.hc(`Asinh`,e,void 0)},1321678:e=>{r.hc(`Acosh`,e,void 0)},1321731:e=>{r.hc(`Atanh`,e,void 0)},1321784:e=>{r.hc(`Tanh`,e,void 0)},1321836:e=>{r.hc(`Not`,e,void 0)},1321887:(e,t,n)=>{r.hc(`Clip`,e,{min:t,max:n})},1321956:e=>{r.hc(`Clip`,e,void 0)},1322008:(e,t)=>{r.hc(`Elu`,e,{alpha:t})},1322066:e=>{r.hc(`Gelu`,e,void 0)},1322118:e=>{r.hc(`Relu`,e,void 0)},1322170:(e,t)=>{r.hc(`LeakyRelu`,e,{alpha:t})},1322234:(e,t)=>{r.hc(`ThresholdedRelu`,e,{alpha:t})},1322304:(e,t)=>{r.hc(`Cast`,e,{to:t})},1322362:e=>{r.hc(`Add`,e,void 0)},1322413:e=>{r.hc(`Sub`,e,void 0)},1322464:e=>{r.hc(`Mul`,e,void 0)},1322515:e=>{r.hc(`Div`,e,void 0)},1322566:e=>{r.hc(`Pow`,e,void 0)},1322617:e=>{r.hc(`Equal`,e,void 0)},1322670:e=>{r.hc(`Greater`,e,void 0)},1322725:e=>{r.hc(`GreaterOrEqual`,e,void 0)},1322787:e=>{r.hc(`Less`,e,void 0)},1322839:e=>{r.hc(`LessOrEqual`,e,void 0)},1322898:(e,t,n,i,a)=>{r.hc(`ReduceMean`,e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1323073:(e,t,n,i,a)=>{r.hc(`ReduceMax`,e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1323247:(e,t,n,i,a)=>{r.hc(`ReduceMin`,e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1323421:(e,t,n,i,a)=>{r.hc(`ReduceProd`,e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1323596:(e,t,n,i,a)=>{r.hc(`ReduceSum`,e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1323770:(e,t,n,i,a)=>{r.hc(`ReduceL1`,e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1323943:(e,t,n,i,a)=>{r.hc(`ReduceL2`,e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1324116:(e,t,n,i,a)=>{r.hc(`ReduceLogSum`,e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1324293:(e,t,n,i,a)=>{r.hc(`ReduceSumSquare`,e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1324473:(e,t,n,i,a)=>{r.hc(`ReduceLogSumExp`,e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1324653:e=>{r.hc(`Where`,e,void 0)},1324706:(e,t,n)=>{r.hc(`Transpose`,e,{perm:t?Array.from(w().subarray(Number(t)>>>0,Number(n)>>>0)):[]})},1324830:(e,t,n,i)=>{r.hc(`DepthToSpace`,e,{blocksize:t,mode:ut(n),format:i?`NHWC`:`NCHW`})},1324963:(e,t,n,i)=>{r.hc(`DepthToSpace`,e,{blocksize:t,mode:ut(n),format:i?`NHWC`:`NCHW`})},1325096:(e,t,n,i,a,o,s,c,l,u,d,f,p,m,h)=>{r.hc(`ConvTranspose`,e,{format:l?`NHWC`:`NCHW`,autoPad:t,dilations:[n],group:i,kernelShape:[a],pads:[o,s],strides:[c],wIsConst:()=>!!de()[u>>>0],outputPadding:d?Array.from(w().subarray(Number(d)>>>0,Number(f)>>>0)):[],outputShape:p?Array.from(w().subarray(Number(p)>>>0,Number(m)>>>0)):[],activation:ut(h)})},1325529:(e,t,n,i,a,o,s,c,l,u,d,f,p,m)=>{r.hc(`ConvTranspose`,e,{format:c?`NHWC`:`NCHW`,autoPad:t,dilations:Array.from(w().subarray(Number(n)>>>0,2+(Number(n)>>>0)>>>0)),group:i,kernelShape:Array.from(w().subarray(Number(a)>>>0,2+(Number(a)>>>0)>>>0)),pads:Array.from(w().subarray(Number(o)>>>0,4+(Number(o)>>>0)>>>0)),strides:Array.from(w().subarray(Number(s)>>>0,2+(Number(s)>>>0)>>>0)),wIsConst:()=>!!de()[l>>>0],outputPadding:u?Array.from(w().subarray(Number(u)>>>0,Number(d)>>>0)):[],outputShape:f?Array.from(w().subarray(Number(f)>>>0,Number(p)>>>0)):[],activation:ut(m)})},1326190:(e,t,n,i,a,o,s,c,l,u,d,f,p,m,h)=>{r.hc(`ConvTranspose`,e,{format:l?`NHWC`:`NCHW`,autoPad:t,dilations:[n],group:i,kernelShape:[a],pads:[o,s],strides:[c],wIsConst:()=>!!de()[u>>>0],outputPadding:d?Array.from(w().subarray(Number(d)>>>0,Number(f)>>>0)):[],outputShape:p?Array.from(w().subarray(Number(p)>>>0,Number(m)>>>0)):[],activation:ut(h)})},1326623:(e,t,n,i,a,o,s,c,l,u,d,f,p,m)=>{r.hc(`ConvTranspose`,e,{format:c?`NHWC`:`NCHW`,autoPad:t,dilations:Array.from(w().subarray(Number(n)>>>0,2+(Number(n)>>>0)>>>0)),group:i,kernelShape:Array.from(w().subarray(Number(a)>>>0,2+(Number(a)>>>0)>>>0)),pads:Array.from(w().subarray(Number(o)>>>0,4+(Number(o)>>>0)>>>0)),strides:Array.from(w().subarray(Number(s)>>>0,2+(Number(s)>>>0)>>>0)),wIsConst:()=>!!de()[l>>>0],outputPadding:u?Array.from(w().subarray(Number(u)>>>0,Number(d)>>>0)):[],outputShape:f?Array.from(w().subarray(Number(f)>>>0,Number(p)>>>0)):[],activation:ut(m)})},1327284:(e,t)=>{r.hc(`GlobalAveragePool`,e,{format:t?`NHWC`:`NCHW`})},1327375:(e,t,n,i,a,o,s,c,l,u,d,f,p,m)=>{r.hc(`AveragePool`,e,{format:m?`NHWC`:`NCHW`,auto_pad:t,ceil_mode:n,count_include_pad:i,storage_order:a,dilations:o?Array.from(w().subarray(Number(o)>>>0,Number(s)>>>0)):[],kernel_shape:c?Array.from(w().subarray(Number(c)>>>0,Number(l)>>>0)):[],pads:u?Array.from(w().subarray(Number(u)>>>0,Number(d)>>>0)):[],strides:f?Array.from(w().subarray(Number(f)>>>0,Number(p)>>>0)):[]})},1327854:(e,t)=>{r.hc(`GlobalAveragePool`,e,{format:t?`NHWC`:`NCHW`})},1327945:(e,t,n,i,a,o,s,c,l,u,d,f,p,m)=>{r.hc(`AveragePool`,e,{format:m?`NHWC`:`NCHW`,auto_pad:t,ceil_mode:n,count_include_pad:i,storage_order:a,dilations:o?Array.from(w().subarray(Number(o)>>>0,Number(s)>>>0)):[],kernel_shape:c?Array.from(w().subarray(Number(c)>>>0,Number(l)>>>0)):[],pads:u?Array.from(w().subarray(Number(u)>>>0,Number(d)>>>0)):[],strides:f?Array.from(w().subarray(Number(f)>>>0,Number(p)>>>0)):[]})},1328424:(e,t)=>{r.hc(`GlobalMaxPool`,e,{format:t?`NHWC`:`NCHW`})},1328511:(e,t,n,i,a,o,s,c,l,u,d,f,p,m)=>{r.hc(`MaxPool`,e,{format:m?`NHWC`:`NCHW`,auto_pad:t,ceil_mode:n,count_include_pad:i,storage_order:a,dilations:o?Array.from(w().subarray(Number(o)>>>0,Number(s)>>>0)):[],kernel_shape:c?Array.from(w().subarray(Number(c)>>>0,Number(l)>>>0)):[],pads:u?Array.from(w().subarray(Number(u)>>>0,Number(d)>>>0)):[],strides:f?Array.from(w().subarray(Number(f)>>>0,Number(p)>>>0)):[]})},1328986:(e,t)=>{r.hc(`GlobalMaxPool`,e,{format:t?`NHWC`:`NCHW`})},1329073:(e,t,n,i,a,o,s,c,l,u,d,f,p,m)=>{r.hc(`MaxPool`,e,{format:m?`NHWC`:`NCHW`,auto_pad:t,ceil_mode:n,count_include_pad:i,storage_order:a,dilations:o?Array.from(w().subarray(Number(o)>>>0,Number(s)>>>0)):[],kernel_shape:c?Array.from(w().subarray(Number(c)>>>0,Number(l)>>>0)):[],pads:u?Array.from(w().subarray(Number(u)>>>0,Number(d)>>>0)):[],strides:f?Array.from(w().subarray(Number(f)>>>0,Number(p)>>>0)):[]})},1329548:(e,t,n,i,a)=>{r.hc(`Gemm`,e,{alpha:t,beta:n,transA:i,transB:a})},1329652:e=>{r.hc(`MatMul`,e,void 0)},1329706:(e,t,n,i)=>{r.hc(`ArgMax`,e,{keepDims:!!t,selectLastIndex:!!n,axis:i})},1329814:(e,t,n,i)=>{r.hc(`ArgMin`,e,{keepDims:!!t,selectLastIndex:!!n,axis:i})},1329922:(e,t)=>{r.hc(`Softmax`,e,{axis:t})},1329985:(e,t)=>{r.hc(`Concat`,e,{axis:t})},1330045:(e,t,n,i,a)=>{r.hc(`Split`,e,{axis:t,numOutputs:n,splitSizes:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1330201:e=>{r.hc(`Expand`,e,void 0)},1330255:(e,t)=>{r.hc(`Gather`,e,{axis:Number(t)})},1330326:(e,t)=>{r.hc(`GatherElements`,e,{axis:Number(t)})},1330405:(e,t)=>{r.hc(`GatherND`,e,{batch_dims:Number(t)})},1330484:(e,t,n,i,a,o,s,c,l,u,d)=>{r.hc(`Resize`,e,{antialias:t,axes:n?Array.from(w().subarray(Number(n)>>>0,Number(i)>>>0)):[],coordinateTransformMode:ut(a),cubicCoeffA:o,excludeOutside:s,extrapolationValue:c,keepAspectRatioPolicy:ut(l),mode:ut(u),nearestMode:ut(d)})},1330846:(e,t,n,i,a,o,s)=>{r.hc(`Slice`,e,{starts:t?Array.from(w().subarray(Number(t)>>>0,Number(n)>>>0)):[],ends:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[],axes:o?Array.from(w().subarray(Number(o)>>>0,Number(s)>>>0)):[]})},1331110:e=>{r.hc(`Tile`,e,void 0)},1331162:(e,t,n)=>{r.hc(`InstanceNormalization`,e,{epsilon:t,format:n?`NHWC`:`NCHW`})},1331276:(e,t,n)=>{r.hc(`InstanceNormalization`,e,{epsilon:t,format:n?`NHWC`:`NCHW`})},1331390:e=>{r.hc(`Range`,e,void 0)},1331443:(e,t)=>{r.hc(`Einsum`,e,{equation:ut(t)})},1331524:(e,t,n,i,a)=>{r.hc(`Pad`,e,{mode:t,value:n,pads:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1331667:(e,t,n,i,a,o)=>{r.hc(`BatchNormalization`,e,{epsilon:t,momentum:n,spatial:!!a,trainingMode:!!i,format:o?`NHWC`:`NCHW`})},1331836:(e,t,n,i,a,o)=>{r.hc(`BatchNormalization`,e,{epsilon:t,momentum:n,spatial:!!a,trainingMode:!!i,format:o?`NHWC`:`NCHW`})},1332005:(e,t,n)=>{r.hc(`CumSum`,e,{exclusive:Number(t),reverse:Number(n)})},1332102:(e,t,n)=>{r.hc(`DequantizeLinear`,e,{axis:t,blockSize:n})},1332192:(e,t,n,i,a)=>{r.hc(`GridSample`,e,{align_corners:t,mode:ut(n),padding_mode:ut(i),format:a?`NHWC`:`NCHW`})},1332362:(e,t,n,i,a)=>{r.hc(`GridSample`,e,{align_corners:t,mode:ut(n),padding_mode:ut(i),format:a?`NHWC`:`NCHW`})},1332532:(e,t)=>{r.hc(`ScatterND`,e,{reduction:ut(t)})},1332617:(e,t,n,i,a,o,s,c,l)=>{r.hc(`Attention`,e,{numHeads:t,isUnidirectional:n,maskFilterValue:i,scale:a,doRotary:o,qkvHiddenSizes:s?Array.from(w().subarray(Number(c)>>>0,Number(c)+s>>>0)):[],pastPresentShareBuffer:!!l})},1332889:e=>{r.hc(`BiasAdd`,e,void 0)},1332944:e=>{r.hc(`BiasSplitGelu`,e,void 0)},1333005:e=>{r.hc(`FastGelu`,e,void 0)},1333061:(e,t,n,i,a,o,s,c,l,u,d,f,p,m,h,g)=>{r.hc(`Conv`,e,{format:f?`NHWC`:`NCHW`,auto_pad:t,dilations:n?Array.from(w().subarray(Number(n)>>>0,Number(i)>>>0)):[],group:a,kernel_shape:o?Array.from(w().subarray(Number(o)>>>0,Number(s)>>>0)):[],pads:c?Array.from(w().subarray(Number(c)>>>0,Number(l)>>>0)):[],strides:u?Array.from(w().subarray(Number(u)>>>0,Number(d)>>>0)):[],w_is_const:()=>!!de()[Number(p)>>>0],activation:ut(m),activation_params:h?Array.from(he().subarray(Number(h)>>>0,Number(g)>>>0)):[]})},1333645:e=>{r.hc(`Gelu`,e,void 0)},1333697:(e,t,n,i,a,o,s,c,l)=>{r.hc(`GroupQueryAttention`,e,{numHeads:t,kvNumHeads:n,scale:i,softcap:a,doRotary:o,rotaryInterleaved:s,smoothSoftmax:c,localWindowSize:l})},1333914:(e,t,n,i)=>{r.hc(`LayerNormalization`,e,{axis:t,epsilon:n,simplified:!!i})},1334025:(e,t,n,i)=>{r.hc(`LayerNormalization`,e,{axis:t,epsilon:n,simplified:!!i})},1334136:(e,t,n,i,a,o)=>{r.hc(`MatMulNBits`,e,{k:t,n,accuracyLevel:i,bits:a,blockSize:o})},1334263:(e,t,n,i,a,o)=>{r.hc(`MultiHeadAttention`,e,{numHeads:t,isUnidirectional:n,maskFilterValue:i,scale:a,doRotary:o})},1334422:(e,t)=>{r.hc(`QuickGelu`,e,{alpha:t})},1334486:(e,t,n,i,a)=>{r.hc(`RotaryEmbedding`,e,{interleaved:!!t,numHeads:n,rotaryEmbeddingDim:i,scale:a})},1334625:(e,t,n)=>{r.hc(`SkipLayerNormalization`,e,{epsilon:t,simplified:!!n})},1334727:(e,t,n)=>{r.hc(`SkipLayerNormalization`,e,{epsilon:t,simplified:!!n})},1334829:(e,t,n,i)=>{r.hc(`GatherBlockQuantized`,e,{gatherAxis:t,quantizeAxis:n,blockSize:i})},1334950:e=>{r.Wd(e)},1334984:(e,t)=>r.Zd(Number(e),Number(t),r.Cd.be,r.Cd.errors)};function Oe(e,t,n){return Dn(async()=>{await r.Ud(Number(e),Number(t),Number(n))})}function ke(){return typeof wasmOffsetConverter<`u`}class Ae{name=`ExitStatus`;constructor(e){this.message=`Program terminated with exit(${e})`,this.status=e}}var je=e=>{e.terminate(),e.onmessage=()=>{}},Me=[],Ne=e=>{Re.length==0&&(Ge(),We(Re[0]));var t=Re.pop();if(!t)return 6;ze.push(t),Ve[e.xd]=t,t.xd=e.xd;var n={yd:`run`,de:e.ce,Fd:e.Fd,xd:e.xd};return t.postMessage(n,e.Ld),0},Pe=0,E=(e,t,...n)=>{for(var r=2*n.length,i=I(),a=$r(8*r),o=a>>>3,s=0;s<n.length;s++){var c=n[s];typeof c==`bigint`?(C[o+2*s]=1n,C[o+2*s+1]=c):(C[o+2*s]=0n,ge()[o+2*s+1>>>0]=c)}return e=qr(e,0,r,a,t),F(i),e};function Fe(e){if(s)return E(0,1,e);if(x=e,!(0<Pe)){for(var t of ze)je(t);for(t of Re)je(t);Re=[],ze=[],Ve={},le=!0}p(0,new Ae(e))}function Ie(e){if(s)return E(1,0,e);Le(e)}var Le=e=>{if(x=e,s)throw Ie(e),`unwind`;Fe(e)},Re=[],ze=[],Be=[],Ve={},He=e=>{var t=e.xd;delete Ve[t],Re.push(e),ze.splice(ze.indexOf(e),1),e.xd=0,Jr(t)};function Ue(){Be.forEach(e=>e())}var We=e=>new Promise(t=>{e.onmessage=n=>{var i=(n=n.data).yd;if(n.Ed&&n.Ed!=Hr()){var a=Ve[n.Ed];a?a.postMessage(n,n.Ld):v(`Internal error! Worker sent a message "${i}" to target pthread ${n.Ed}, but that thread no longer exists!`)}else i===`checkMailbox`?un():i===`spawnThread`?Ne(n):i===`cleanupThread`?He(Ve[n.ee]):i===`loaded`?(e.loaded=!0,t(e)):i===`alert`?alert(`Thread ${n.fe}: ${n.text}`):n.target===`setimmediate`?e.postMessage(n):i===`callHandler`?r[n.Nd](...n.args):i&&v(`worker sent an unknown command ${i}`)},e.onerror=e=>{throw v(`worker sent an error! ${e.filename}:${e.lineno}: ${e.message}`),e};var n,i=[];for(n of[])r.propertyIsEnumerable(n)&&i.push(n);e.postMessage({yd:`load`,Od:i,he:y,ie:b})});function Ge(){var e=new Worker(import.meta.url.startsWith(`file:`)?new URL(new URL(`ort.webgpu.bundle.min-CEayb2S6.mjs`,import.meta.url).href,``+import.meta.url):new URL(import.meta.url),{type:`module`,workerData:`em-pthread`,name:`em-pthread`});Re.push(e)}var Ke=e=>{ye();var t=T()[e+52>>>2>>>0];e=T()[e+56>>>2>>>0],Qr(t,t-e),F(t)},qe=(e,t)=>{Pe=0,e=oi(e,t),0<Pe?x=e:Yr(e)},Je=[];function Ye(e){var t=new Qe(e>>>=0);if(de()[t.wd+12>>>0]==0){var n=1;de()[t.wd+12>>>0]=n}return n=0,de()[t.wd+13>>>0]=n,Je.push(t),ti(e),ri(e)}var Xe=0,Ze=()=>{P(0,0);var e=Je.pop();ei(e.Gd),Xe=0};class Qe{constructor(e){this.Gd=e,this.wd=e-24}}function $e(e){throw Xe||=e>>>0,Xe}var et=e=>{var t=Xe;if(!t)return Zr(0),0;var n=new Qe(t);T()[n.wd+16>>>2>>>0]=t;var r=T()[n.wd+4>>>2>>>0];if(!r)return Zr(0),t;for(var i of e){if(i===0||i===r)break;if(ni(i,r,n.wd+16))return Zr(i),t}return Zr(r),t};function tt(){return et([])}function nt(e){return et([e>>>0])}function rt(e,t){return et([e>>>0,t>>>0])}var it=()=>{var e=Je.pop();e||Te(`no exception to throw`);var t=e.Gd;if(de()[e.wd+13>>>0]==0){Je.push(e);var n=1;de()[e.wd+13>>>0]=n,n=0,de()[e.wd+12>>>0]=n}throw Xe=t};function at(e,t,n){var r=new Qe(e>>>=0);throw t>>>=0,n>>>=0,T()[r.wd+16>>>2>>>0]=0,T()[r.wd+4>>>2>>>0]=t,T()[r.wd+8>>>2>>>0]=n,Xe=e}function ot(e,t,n,r){return s?E(2,1,e,t,n,r):st(e,t,n,r)}function st(e,t,n,r){if(e>>>=0,n>>>=0,r>>>=0,c===void 0)return 6;var i=[];return s&&i.length===0?ot(e,t>>>=0,n,r):(e={ce:n,xd:e,Fd:r,Ld:i},s?(e.yd=`spawnThread`,postMessage(e,i),0):Ne(e))}var ct=typeof TextDecoder<`u`?new TextDecoder:void 0,lt=(e,t=0,n=NaN)=>{var r=(t>>>=0)+n;for(n=t;e[n]&&!(n>=r);)++n;if(16<n-t&&e.buffer&&ct)return ct.decode(e.buffer instanceof ArrayBuffer?e.subarray(t,n):e.slice(t,n));for(r=``;t<n;){var i=e[t++];if(128&i){var a=63&e[t++];if((224&i)==192)r+=String.fromCharCode((31&i)<<6|a);else{var o=63&e[t++];65536>(i=(240&i)==224?(15&i)<<12|a<<6|o:(7&i)<<18|a<<12|o<<6|63&e[t++])?r+=String.fromCharCode(i):(i-=65536,r+=String.fromCharCode(55296|i>>10,56320|1023&i))}}else r+=String.fromCharCode(i)}return r},ut=(e,t)=>(e>>>=0)?lt(fe(),e,t):``;function dt(e,t,n){return s?E(3,1,e,t,n):0}function ft(e,t){if(s)return E(4,1,e,t)}var pt=e=>{for(var t=0,n=0;n<e.length;++n){var r=e.charCodeAt(n);127>=r?t++:2047>=r?t+=2:55296<=r&&57343>=r?(t+=4,++n):t+=3}return t},mt=(e,t,n)=>{var r=fe();if(t>>>=0,0<n){var i=t;n=t+n-1;for(var a=0;a<e.length;++a){var o=e.charCodeAt(a);if(55296<=o&&57343>=o&&(o=65536+((1023&o)<<10)|1023&e.charCodeAt(++a)),127>=o){if(t>=n)break;r[t++>>>0]=o}else{if(2047>=o){if(t+1>=n)break;r[t++>>>0]=192|o>>6}else{if(65535>=o){if(t+2>=n)break;r[t++>>>0]=224|o>>12}else{if(t+3>=n)break;r[t++>>>0]=240|o>>18,r[t++>>>0]=128|o>>12&63}r[t++>>>0]=128|o>>6&63}r[t++>>>0]=128|63&o}}r[t>>>0]=0,e=t-i}else e=0;return e};function ht(e,t){if(s)return E(5,1,e,t)}function gt(e,t,n){if(s)return E(6,1,e,t,n)}function _t(e,t,n){return s?E(7,1,e,t,n):0}function vt(e,t){if(s)return E(8,1,e,t)}function yt(e,t,n){if(s)return E(9,1,e,t,n)}function bt(e,t,n,r){if(s)return E(10,1,e,t,n,r)}function xt(e,t,n,r){if(s)return E(11,1,e,t,n,r)}function St(e,t,n,r){if(s)return E(12,1,e,t,n,r)}function Ct(e){if(s)return E(13,1,e)}function wt(e,t){if(s)return E(14,1,e,t)}function Tt(e,t,n){if(s)return E(15,1,e,t,n)}var Et,Dt,Ot=()=>Te(``),kt=e=>{for(var t=``;fe()[e>>>0];)t+=Et[fe()[e++>>>0]];return t},At={},jt={},Mt={};function Nt(e,t,n={}){return function(e,t,n={}){var r=t.name;if(!e)throw new Dt(`type "${r}" must have a positive integer typeid pointer`);if(jt.hasOwnProperty(e)){if(n.Pd)return;throw new Dt(`Cannot register type '${r}' twice`)}jt[e]=t,delete Mt[e],At.hasOwnProperty(e)&&(t=At[e],delete At[e],t.forEach(e=>e()))}(e,t,n)}var Pt=(e,t,n)=>{switch(t){case 1:return n?e=>de()[e>>>0]:e=>fe()[e>>>0];case 2:return n?e=>pe()[e>>>1>>>0]:e=>me()[e>>>1>>>0];case 4:return n?e=>w()[e>>>2>>>0]:e=>T()[e>>>2>>>0];case 8:return n?e=>C[e>>>3]:e=>oe[e>>>3];default:throw TypeError(`invalid integer width (${t}): ${e}`)}};function Ft(e,t,n){n>>>=0,Nt(e>>>=0,{name:t=kt(t>>>0),fromWireType:e=>e,toWireType:function(e,t){if(typeof t!=`bigint`&&typeof t!=`number`)throw t=t===null?`null`:(e=typeof t)==`object`||e===`array`||e===`function`?t.toString():``+t,TypeError(`Cannot convert "${t}" to ${this.name}`);return typeof t==`number`&&(t=BigInt(t)),t},zd:It,readValueFromPointer:Pt(t,n,t.indexOf(`u`)==-1),Ad:null})}var It=8;function Lt(e,t,n,r){Nt(e>>>=0,{name:t=kt(t>>>0),fromWireType:function(e){return!!e},toWireType:function(e,t){return t?n:r},zd:It,readValueFromPointer:function(e){return this.fromWireType(fe()[e>>>0])},Ad:null})}var Rt=[],zt=[];function Bt(e){9<(e>>>=0)&&--zt[e+1]==0&&(zt[e]=void 0,Rt.push(e))}var Vt=e=>{if(!e)throw new Dt(`Cannot use deleted val. handle = `+e);return zt[e]},Ht=e=>{switch(e){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let t=Rt.pop()||zt.length;return zt[t]=e,zt[t+1]=1,t}};function Ut(e){return this.fromWireType(T()[e>>>2>>>0])}var Wt={name:`emscripten::val`,fromWireType:e=>{var t=Vt(e);return Bt(e),t},toWireType:(e,t)=>Ht(t),zd:It,readValueFromPointer:Ut,Ad:null};function Gt(e){return Nt(e>>>0,Wt)}var Kt=(e,t)=>{switch(t){case 4:return function(e){return this.fromWireType(he()[e>>>2>>>0])};case 8:return function(e){return this.fromWireType(ge()[e>>>3>>>0])};default:throw TypeError(`invalid float width (${t}): ${e}`)}};function qt(e,t,n){n>>>=0,Nt(e>>>=0,{name:t=kt(t>>>0),fromWireType:e=>e,toWireType:(e,t)=>t,zd:It,readValueFromPointer:Kt(t,n),Ad:null})}function Jt(e,t,n,r,i){if(e>>>=0,n>>>=0,t=kt(t>>>0),i===-1&&(i=4294967295),i=e=>e,r===0){var a=32-8*n;i=e=>e<<a>>>a}var o=t.includes(`unsigned`)?function(e,t){return t>>>0}:function(e,t){return t};Nt(e,{name:t,fromWireType:i,toWireType:o,zd:It,readValueFromPointer:Pt(t,n,r!==0),Ad:null})}function Yt(e,t,n){function r(e){var t=T()[e>>>2>>>0];return e=T()[e+4>>>2>>>0],new i(de().buffer,e,t)}var i=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][t];Nt(e>>>=0,{name:n=kt(n>>>0),fromWireType:r,zd:It,readValueFromPointer:r},{Pd:!0})}function Xt(e,t){Nt(e>>>=0,{name:t=kt(t>>>0),fromWireType:function(e){for(var t,n=T()[e>>>2>>>0],r=e+4,i=r,a=0;a<=n;++a){var o=r+a;a!=n&&fe()[o>>>0]!=0||(i=ut(i,o-i),t===void 0?t=i:(t+=`\0`,t+=i),i=o+1)}return Ur(e),t},toWireType:function(e,t){t instanceof ArrayBuffer&&(t=new Uint8Array(t));var n=typeof t==`string`;if(!(n||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Int8Array))throw new Dt(`Cannot pass non-string to std::string`);var r=n?pt(t):t.length,i=Wr(4+r+1),a=i+4;if(T()[i>>>2>>>0]=r,n)mt(t,a,r+1);else if(n)for(n=0;n<r;++n){var o=t.charCodeAt(n);if(255<o)throw Ur(i),new Dt(`String has UTF-16 code units that do not fit in 8 bits`);fe()[a+n>>>0]=o}else for(n=0;n<r;++n)fe()[a+n>>>0]=t[n];return e!==null&&e.push(Ur,i),i},zd:It,readValueFromPointer:Ut,Ad(e){Ur(e)}})}var Zt=typeof TextDecoder<`u`?new TextDecoder(`utf-16le`):void 0,Qt=(e,t)=>{for(var n=e>>1,r=n+t/2;!(n>=r)&&me()[n>>>0];)++n;if(32<(n<<=1)-e&&Zt)return Zt.decode(fe().slice(e,n));for(n=``,r=0;!(r>=t/2);++r){var i=pe()[e+2*r>>>1>>>0];if(i==0)break;n+=String.fromCharCode(i)}return n},$t=(e,t,n)=>{if(n??=2147483647,2>n)return 0;var r=t;n=(n-=2)<2*e.length?n/2:e.length;for(var i=0;i<n;++i){var a=e.charCodeAt(i);pe()[t>>>1>>>0]=a,t+=2}return pe()[t>>>1>>>0]=0,t-r},en=e=>2*e.length,tn=(e,t)=>{for(var n=0,r=``;!(n>=t/4);){var i=w()[e+4*n>>>2>>>0];if(i==0)break;++n,65536<=i?(i-=65536,r+=String.fromCharCode(55296|i>>10,56320|1023&i)):r+=String.fromCharCode(i)}return r},nn=(e,t,n)=>{if(t>>>=0,n??=2147483647,4>n)return 0;var r=t;n=r+n-4;for(var i=0;i<e.length;++i){var a=e.charCodeAt(i);if(55296<=a&&57343>=a&&(a=65536+((1023&a)<<10)|1023&e.charCodeAt(++i)),w()[t>>>2>>>0]=a,(t+=4)+4>n)break}return w()[t>>>2>>>0]=0,t-r},rn=e=>{for(var t=0,n=0;n<e.length;++n){var r=e.charCodeAt(n);55296<=r&&57343>=r&&++n,t+=4}return t};function an(e,t,n){if(e>>>=0,t>>>=0,n=kt(n>>>=0),t===2)var r=Qt,i=$t,a=en,o=e=>me()[e>>>1>>>0];else t===4&&(r=tn,i=nn,a=rn,o=e=>T()[e>>>2>>>0]);Nt(e,{name:n,fromWireType:e=>{for(var n,i=T()[e>>>2>>>0],a=e+4,s=0;s<=i;++s){var c=e+4+s*t;s!=i&&o(c)!=0||(a=r(a,c-a),n===void 0?n=a:(n+=`\0`,n+=a),a=c+t)}return Ur(e),n},toWireType:(e,r)=>{if(typeof r!=`string`)throw new Dt(`Cannot pass non-string to C++ string type ${n}`);var o=a(r),s=Wr(4+o+t);return T()[s>>>2>>>0]=o/t,i(r,s+4,o+t),e!==null&&e.push(Ur,s),s},zd:It,readValueFromPointer:Ut,Ad(e){Ur(e)}})}function on(e,t){Nt(e>>>=0,{Qd:!0,name:t=kt(t>>>0),zd:0,fromWireType:()=>{},toWireType:()=>{}})}function sn(e){Gr(e>>>0,!o,1,!a,131072,!1),Ue()}var cn=e=>{if(!le)try{if(e(),!(0<Pe))try{s?Yr(x):Le(x)}catch(e){e instanceof Ae||e==`unwind`||p(0,e)}}catch(e){e instanceof Ae||e==`unwind`||p(0,e)}};function ln(e){e>>>=0,typeof Atomics.ge==`function`&&(Atomics.ge(w(),e>>>2,e).value.then(un),e+=128,Atomics.store(w(),e>>>2,1))}var un=()=>{var e=Hr();e&&(ln(e),cn(Xr))};function dn(e,t){(e>>>=0)==t>>>0?setTimeout(un):s?postMessage({Ed:e,yd:`checkMailbox`}):(e=Ve[e])&&e.postMessage({yd:`checkMailbox`})}var D=[];function fn(e,t,n,r,i){for(t>>>=0,r/=2,D.length=r,n=i>>>0>>>3,i=0;i<r;i++)D[i]=C[n+2*i]?C[n+2*i+1]:ge()[n+2*i+1>>>0];return(t?De[t]:zr[e])(...D)}var O=()=>{Pe=0};function pn(e){e>>>=0,s?postMessage({yd:`cleanupThread`,ee:e}):He(Ve[e])}function mn(e){}var hn=(e,t)=>{var n=jt[e];if(n===void 0)throw e=Br(e),n=kt(e),Ur(e),new Dt(`${t} has unknown type ${n}`);return n},gn=(e,t,n)=>{var r=[];return e=e.toWireType(r,n),r.length&&(T()[t>>>2>>>0]=Ht(r)),e};function _n(e,t,n){return t>>>=0,n>>>=0,e=Vt(e>>>0),t=hn(t,`emval::as`),gn(t,n,e)}function vn(e,t){return t>>>=0,e=Vt(e>>>0),(t=hn(t,`emval::as`)).toWireType(null,e)}var yn=e=>{try{e()}catch(e){Te(e)}},bn=0,k=null,xn=0,A=[],Sn={},Cn={},wn=0,Tn=null,En=[];function Dn(e){return function(e){if(!le){if(bn===0){var t=!1,n=!1;e((e=0)=>{if(!le&&(xn=e,t=!0,n)){bn=2,yn(()=>Xi(k)),typeof MainLoop<`u`&&MainLoop.Md&&MainLoop.resume(),e=!1;try{var r=function(){var e=w()[k+8>>>2>>>0];return e=M[Cn[e]],--Pe,e()}()}catch(t){r=t,e=!0}var i=!1;if(!k){var a=Tn;a&&(Tn=null,(e?a.reject:a.resolve)(r),i=!0)}if(e&&!i)throw r}}),n=!0,t||(bn=1,k=function(){var e=Wr(65548),t=e+12;T()[e>>>2>>>0]=t,T()[e+4>>>2>>>0]=t+65536,t=A[0];var n=Sn[t];return n===void 0&&(n=wn++,Sn[t]=n,Cn[n]=t),t=n,w()[e+8>>>2>>>0]=t,e}(),typeof MainLoop<`u`&&MainLoop.Md&&MainLoop.pause(),yn(()=>Ji(k)))}else bn===2?(bn=0,yn(Zi),Ur(k),k=null,En.forEach(cn)):Te(`invalid state: ${bn}`);return xn}}(t=>{e().then(t)})}function On(e){return e>>>=0,Dn(async()=>Ht(await Vt(e)))}var kn=[];function j(e,t,n,r){return n>>>=0,r>>>=0,(e=kn[e>>>0])(null,t=Vt(t>>>0),n,r)}var An={},jn=e=>{var t=An[e];return t===void 0?kt(e):t};function Mn(e,t,n,r,i){return n>>>=0,r>>>=0,i>>>=0,(e=kn[e>>>0])(t=Vt(t>>>0),t[n=jn(n)],r,i)}var Nn=()=>typeof globalThis==`object`?globalThis:Function(`return this`)();function Pn(e){return(e>>>=0)==0?Ht(Nn()):(e=jn(e),Ht(Nn()[e]))}var Fn=e=>{var t=kn.length;return kn.push(e),t},In=(e,t)=>{for(var n=Array(e),r=0;r<e;++r)n[r]=hn(T()[t+4*r>>>2>>>0],`parameter `+r);return n},Ln=(e,t)=>Object.defineProperty(t,"name",{value:e});function Rn(e,t,n){var r=(t=In(e,t>>>0)).shift();e--;var i=`return function (obj, func, destructorsRef, args) {
`,a=0,o=[];n===0&&o.push(`obj`);for(var s=[`retType`],c=[r],l=0;l<e;++l)o.push(`arg`+l),s.push(`argType`+l),c.push(t[l]),i+=`  var arg${l} = argType${l}.readValueFromPointer(args${a?`+`+a:``});
`,a+=t[l].zd;return i+=`  var rv = ${n===1?`new func`:`func.call`}(${o.join(`, `)});
`,r.Qd||(s.push(`emval_returnValue`),c.push(gn),i+=`  return emval_returnValue(retType, destructorsRef, rv);
`),s.push(i+`};
`),e=function(e){var t=Function;if(!(t instanceof Function))throw TypeError(`new_ called with constructor type ${typeof t} which is not a function`);var n=Ln(t.name||`unknownFunctionName`,function(){});return n.prototype=t.prototype,n=new n,(e=t.apply(n,e))instanceof Object?e:n}(s)(...c),n=`methodCaller<(${t.map(e=>e.name).join(`, `)}) => ${r.name}>`,Fn(Ln(n,e))}function zn(e){return e=jn(e>>>0),Ht(r[e])}function Bn(e,t){return t>>>=0,e=Vt(e>>>0),t=Vt(t),Ht(e[t])}function Vn(e){9<(e>>>=0)&&(zt[e+1]+=1)}function Hn(){return Ht([])}function Un(e){e=Vt(e>>>0);for(var t=Array(e.length),n=0;n<e.length;n++)t[n]=e[n];return Ht(t)}function Wn(e){return Ht(jn(e>>>0))}function Gn(){return Ht({})}function Kn(e){for(var t=Vt(e>>>=0);t.length;){var n=t.pop();t.pop()(n)}Bt(e)}function qn(e,t,n){t>>>=0,n>>>=0,e=Vt(e>>>0),t=Vt(t),n=Vt(n),e[t]=n}function Jn(e,t){return t>>>=0,e=(e=hn(e>>>0,`_emval_take_value`)).readValueFromPointer(t),Ht(e)}function Yn(e,t){e=-9007199254740992>e||9007199254740992<e?NaN:Number(e),t>>>=0,e=new Date(1e3*e),w()[t>>>2>>>0]=e.getUTCSeconds(),w()[t+4>>>2>>>0]=e.getUTCMinutes(),w()[t+8>>>2>>>0]=e.getUTCHours(),w()[t+12>>>2>>>0]=e.getUTCDate(),w()[t+16>>>2>>>0]=e.getUTCMonth(),w()[t+20>>>2>>>0]=e.getUTCFullYear()-1900,w()[t+24>>>2>>>0]=e.getUTCDay(),e=(e.getTime()-Date.UTC(e.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,w()[t+28>>>2>>>0]=e}var Xn=e=>e%4==0&&(e%100!=0||e%400==0),Zn=[0,31,60,91,121,152,182,213,244,274,305,335],Qn=[0,31,59,90,120,151,181,212,243,273,304,334];function $n(e,t){e=-9007199254740992>e||9007199254740992<e?NaN:Number(e),t>>>=0,e=new Date(1e3*e),w()[t>>>2>>>0]=e.getSeconds(),w()[t+4>>>2>>>0]=e.getMinutes(),w()[t+8>>>2>>>0]=e.getHours(),w()[t+12>>>2>>>0]=e.getDate(),w()[t+16>>>2>>>0]=e.getMonth(),w()[t+20>>>2>>>0]=e.getFullYear()-1900,w()[t+24>>>2>>>0]=e.getDay();var n=(Xn(e.getFullYear())?Zn:Qn)[e.getMonth()]+e.getDate()-1|0;w()[t+28>>>2>>>0]=n,w()[t+36>>>2>>>0]=-60*e.getTimezoneOffset(),n=new Date(e.getFullYear(),6,1).getTimezoneOffset();var r=new Date(e.getFullYear(),0,1).getTimezoneOffset();e=0|(n!=r&&e.getTimezoneOffset()==Math.min(r,n)),w()[t+32>>>2>>>0]=e}function er(e){e>>>=0;var t=new Date(w()[e+20>>>2>>>0]+1900,w()[e+16>>>2>>>0],w()[e+12>>>2>>>0],w()[e+8>>>2>>>0],w()[e+4>>>2>>>0],w()[e>>>2>>>0],0),n=w()[e+32>>>2>>>0],r=t.getTimezoneOffset(),i=new Date(t.getFullYear(),6,1).getTimezoneOffset(),a=new Date(t.getFullYear(),0,1).getTimezoneOffset(),o=Math.min(a,i);return 0>n?w()[e+32>>>2>>>0]=+(i!=a&&o==r):0<n!=(o==r)&&(i=Math.max(a,i),t.setTime(t.getTime()+6e4*((0<n?o:i)-r))),w()[e+24>>>2>>>0]=t.getDay(),n=(Xn(t.getFullYear())?Zn:Qn)[t.getMonth()]+t.getDate()-1|0,w()[e+28>>>2>>>0]=n,w()[e>>>2>>>0]=t.getSeconds(),w()[e+4>>>2>>>0]=t.getMinutes(),w()[e+8>>>2>>>0]=t.getHours(),w()[e+12>>>2>>>0]=t.getDate(),w()[e+16>>>2>>>0]=t.getMonth(),w()[e+20>>>2>>>0]=t.getYear(),e=t.getTime(),BigInt(isNaN(e)?-1:e/1e3)}function tr(e,t,n,r,i,a,o){return s?E(16,1,e,t,n,r,i,a,o):-52}function nr(e,t,n,r,i,a){if(s)return E(17,1,e,t,n,r,i,a)}var rr={},ir=()=>performance.timeOrigin+performance.now();function ar(e,t){return s?E(18,1,e,t):(rr[e]&&(clearTimeout(rr[e].id),delete rr[e]),t&&(rr[e]={id:setTimeout(()=>{delete rr[e],cn(()=>N(e,performance.timeOrigin+performance.now()))},t),ke:t}),0)}function or(e,t,n,r){e>>>=0,t>>>=0,n>>>=0,r>>>=0;var i=new Date().getFullYear(),a=new Date(i,0,1).getTimezoneOffset();i=new Date(i,6,1).getTimezoneOffset();var o=Math.max(a,i);T()[e>>>2>>>0]=60*o,w()[t>>>2>>>0]=+(a!=i),e=(t=e=>{var t=Math.abs(e);return`UTC${0<=e?`-`:`+`}${String(Math.floor(t/60)).padStart(2,`0`)}${String(t%60).padStart(2,`0`)}`})(a),t=t(i),i<a?(mt(e,n,17),mt(t,r,17)):(mt(e,r,17),mt(t,n,17))}var sr=()=>Date.now(),cr=1;function lr(e,t,n){if(!(0<=e&&3>=e))return 28;if(e===0)e=Date.now();else{if(!cr)return 52;e=performance.timeOrigin+performance.now()}return C[n>>>0>>>3]=BigInt(Math.round(1e6*e)),0}var ur=[],dr=(e,t)=>{ur.length=0;for(var n;n=fe()[e++>>>0];){var r=n!=105;t+=(r&=n!=112)&&t%8?4:0,ur.push(n==112?T()[t>>>2>>>0]:n==106?C[t>>>3]:n==105?w()[t>>>2>>>0]:ge()[t>>>3>>>0]),t+=r?8:4}return ur};function fr(e,t,n){return e>>>=0,t=dr(t>>>0,n>>>0),De[e](...t)}function pr(e,t,n){return e>>>=0,t=dr(t>>>0,n>>>0),De[e](...t)}var mr=()=>{};function hr(e,t){return v(ut(e>>>0,t>>>0))}var gr=()=>{throw Pe+=1,`unwind`};function _r(){return 4294901760}var vr=()=>navigator.hardwareConcurrency;function yr(){return Te(`Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER`),0}function br(e){e>>>=0;var t=fe().length;if(e<=t||4294901760<e)return!1;for(var n=1;4>=n;n*=2){var r=t*(1+.2/n);r=Math.min(r,e+100663296);e:{r=(Math.min(4294901760,65536*Math.ceil(Math.max(e,r)/65536))-y.buffer.byteLength+65535)/65536|0;try{y.grow(r),ye();var i=1;break e}catch{}i=void 0}if(i)return!0}return!1}var xr=()=>(Te(`Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER`),0),Sr={},Cr=e=>{e.forEach(e=>{var t=xr();t&&(Sr[t]=e)})};function wr(){var e=Error().stack.toString().split(`
`);return e[0]==`Error`&&e.shift(),Cr(e),Sr.Kd=xr(),Sr.ae=e,Sr.Kd}function Tr(e,t,n){if(e>>>=0,t>>>=0,Sr.Kd==e)var r=Sr.ae;else(r=Error().stack.toString().split(`
`))[0]==`Error`&&r.shift(),Cr(r);for(var i=3;r[i]&&xr()!=e;)++i;for(e=0;e<n&&r[e+i];++e)w()[t+4*e>>>2>>>0]=xr();return e}var Er,Dr={},Or=()=>{if(!Er){var e,t={USER:`web_user`,LOGNAME:`web_user`,PATH:`/`,PWD:`/`,HOME:`/home/web_user`,LANG:(typeof navigator==`object`&&navigator.languages&&navigator.languages[0]||`C`).replace(`-`,`_`)+`.UTF-8`,_:`./this.program`};for(e in Dr)Dr[e]===void 0?delete t[e]:t[e]=Dr[e];var n=[];for(e in t)n.push(`${e}=${t[e]}`);Er=n}return Er};function kr(e,t){if(s)return E(19,1,e,t);e>>>=0,t>>>=0;var n=0;return Or().forEach((r,i)=>{var a=t+n;for(i=T()[e+4*i>>>2>>>0]=a,a=0;a<r.length;++a)de()[i++>>>0]=r.charCodeAt(a);de()[i>>>0]=0,n+=r.length+1}),0}function Ar(e,t){if(s)return E(20,1,e,t);e>>>=0,t>>>=0;var n=Or();T()[e>>>2>>>0]=n.length;var r=0;return n.forEach(e=>r+=e.length+1),T()[t>>>2>>>0]=r,0}function jr(e){return s?E(21,1,e):52}function Mr(e,t,n,r){return s?E(22,1,e,t,n,r):52}function Nr(e,t,n,r){return s?E(23,1,e,t,n,r):70}var Pr=[null,[],[]];function Fr(e,t,n,r){if(s)return E(24,1,e,t,n,r);t>>>=0,n>>>=0,r>>>=0;for(var i=0,a=0;a<n;a++){var o=T()[t>>>2>>>0],c=T()[t+4>>>2>>>0];t+=8;for(var l=0;l<c;l++){var u=fe()[o+l>>>0],d=Pr[e];u===0||u===10?((e===1?_:v)(lt(d)),d.length=0):d.push(u)}i+=c}return T()[r>>>2>>>0]=i,0}function Ir(e){return e>>>0}s||function(){for(var e=r.numThreads-1;e--;)Ge();Me.unshift(()=>{Se++,function(e){s?e():Promise.all(Re.map(We)).then(e)}(()=>we())})}();for(var Lr=Array(256),Rr=0;256>Rr;++Rr)Lr[Rr]=String.fromCharCode(Rr);Et=Lr,Dt=r.BindingError=class extends Error{constructor(e){super(e),this.name=`BindingError`}},r.InternalError=class extends Error{constructor(e){super(e),this.name=`InternalError`}},zt.push(0,1,void 0,1,null,1,!0,1,!1,1),r.count_emval_handles=()=>zt.length/2-5-Rt.length;var M,zr=[Fe,Ie,ot,dt,ft,ht,gt,_t,vt,yt,bt,xt,St,Ct,wt,Tt,tr,nr,ar,kr,Ar,jr,Mr,Nr,Fr];(async function(){function e(e,t){return M=e.exports,M=function(){var e=M,t={};for(let[n,r]of Object.entries(e))t[n]=typeof r==`function`?(...e)=>{A.push(n);try{return r(...e)}finally{le||(A.pop(),k&&bn===1&&A.length===0&&(bn=0,Pe+=1,yn(Yi),typeof Fibers<`u`&&Fibers.le()))}}:r;return t}(),M=function(){var e=M,t=e=>t=>e(t)>>>0,n=e=>()=>e()>>>0;return(e=Object.assign({},e)).Cb=t(e.Cb),e.fc=n(e.fc),e.ic=t(e.ic),e.vc=t(e.vc),e.wc=n(e.wc),e.Ac=t(e.Ac),e}(),Be.push(M.jc),b=t,we(),M}Se++;var t=Ee();if(r.instantiateWasm)return new Promise(n=>{r.instantiateWasm(t,(t,r)=>{e(t,r),n(t.exports)})});if(s)return new Promise(t=>{_e=n=>{t(e(new WebAssembly.Instance(n,Ee()),n))}});xe??=r.locateFile?r.locateFile?r.locateFile(`ort-wasm-simd-threaded.jsep.wasm`,m):m+`ort-wasm-simd-threaded.jsep.wasm`:new URL(new URL(`ort-wasm-simd-threaded.jsep-D5Jk56-t.wasm`,import.meta.url).href,``+import.meta.url).href;try{var i=await async function(e){var t=xe;if(!ce&&typeof WebAssembly.instantiateStreaming==`function`&&!ue(t))try{var n=fetch(t,{credentials:`same-origin`});return await WebAssembly.instantiateStreaming(n,e)}catch(e){v(`wasm streaming compile failed: ${e}`),v(`falling back to ArrayBuffer instantiation`)}return async function(e,t){try{var n=await async function(e){if(!ce)try{var t=await u(e);return new Uint8Array(t)}catch{}if(e==xe&&ce)e=new Uint8Array(ce);else{if(!d)throw`both async and sync fetching of the wasm failed`;e=d(e)}return e}(e);return await WebAssembly.instantiate(n,t)}catch(e){v(`failed to asynchronously prepare wasm: ${e}`),Te(e)}}(t,e)}(t);return e(i.instance,i.module)}catch(e){return n(e),Promise.reject(e)}})();var Br=e=>(Br=M.Cb)(e),Vr=()=>(Vr=M.Db)();r._OrtInit=(e,t)=>(r._OrtInit=M.Eb)(e,t),r._OrtGetLastError=(e,t)=>(r._OrtGetLastError=M.Fb)(e,t),r._OrtCreateSessionOptions=(e,t,n,i,a,o,s,c,l,u)=>(r._OrtCreateSessionOptions=M.Gb)(e,t,n,i,a,o,s,c,l,u),r._OrtAppendExecutionProvider=(e,t)=>(r._OrtAppendExecutionProvider=M.Hb)(e,t),r._OrtAddFreeDimensionOverride=(e,t,n)=>(r._OrtAddFreeDimensionOverride=M.Ib)(e,t,n),r._OrtAddSessionConfigEntry=(e,t,n)=>(r._OrtAddSessionConfigEntry=M.Jb)(e,t,n),r._OrtReleaseSessionOptions=e=>(r._OrtReleaseSessionOptions=M.Kb)(e),r._OrtCreateSession=(e,t,n)=>(r._OrtCreateSession=M.Lb)(e,t,n),r._OrtReleaseSession=e=>(r._OrtReleaseSession=M.Mb)(e),r._OrtGetInputOutputCount=(e,t,n)=>(r._OrtGetInputOutputCount=M.Nb)(e,t,n),r._OrtGetInputName=(e,t)=>(r._OrtGetInputName=M.Ob)(e,t),r._OrtGetOutputName=(e,t)=>(r._OrtGetOutputName=M.Pb)(e,t),r._OrtFree=e=>(r._OrtFree=M.Qb)(e),r._OrtCreateTensor=(e,t,n,i,a,o)=>(r._OrtCreateTensor=M.Rb)(e,t,n,i,a,o),r._OrtGetTensorData=(e,t,n,i,a)=>(r._OrtGetTensorData=M.Sb)(e,t,n,i,a),r._OrtReleaseTensor=e=>(r._OrtReleaseTensor=M.Tb)(e),r._OrtCreateRunOptions=(e,t,n,i)=>(r._OrtCreateRunOptions=M.Ub)(e,t,n,i),r._OrtAddRunConfigEntry=(e,t,n)=>(r._OrtAddRunConfigEntry=M.Vb)(e,t,n),r._OrtReleaseRunOptions=e=>(r._OrtReleaseRunOptions=M.Wb)(e),r._OrtCreateBinding=e=>(r._OrtCreateBinding=M.Xb)(e),r._OrtBindInput=(e,t,n)=>(r._OrtBindInput=M.Yb)(e,t,n),r._OrtBindOutput=(e,t,n,i)=>(r._OrtBindOutput=M.Zb)(e,t,n,i),r._OrtClearBoundOutputs=e=>(r._OrtClearBoundOutputs=M._b)(e),r._OrtReleaseBinding=e=>(r._OrtReleaseBinding=M.$b)(e),r._OrtRunWithBinding=(e,t,n,i,a)=>(r._OrtRunWithBinding=M.ac)(e,t,n,i,a),r._OrtRun=(e,t,n,i,a,o,s,c)=>(r._OrtRun=M.bc)(e,t,n,i,a,o,s,c),r._OrtEndProfiling=e=>(r._OrtEndProfiling=M.cc)(e),r._JsepOutput=(e,t,n)=>(r._JsepOutput=M.dc)(e,t,n),r._JsepGetNodeName=e=>(r._JsepGetNodeName=M.ec)(e);var Hr=()=>(Hr=M.fc)(),Ur=r._free=e=>(Ur=r._free=M.gc)(e),Wr=r._malloc=e=>(Wr=r._malloc=M.ic)(e),Gr=(e,t,n,r,i,a)=>(Gr=M.kc)(e,t,n,r,i,a),Kr=()=>(Kr=M.lc)(),qr=(e,t,n,r,i)=>(qr=M.mc)(e,t,n,r,i),Jr=e=>(Jr=M.nc)(e),Yr=e=>(Yr=M.oc)(e),N=(e,t)=>(N=M.pc)(e,t),Xr=()=>(Xr=M.qc)(),P=(e,t)=>(P=M.rc)(e,t),Zr=e=>(Zr=M.sc)(e),Qr=(e,t)=>(Qr=M.tc)(e,t),F=e=>(F=M.uc)(e),$r=e=>($r=M.vc)(e),I=()=>(I=M.wc)(),ei=e=>(ei=M.xc)(e),ti=e=>(ti=M.yc)(e),ni=(e,t,n)=>(ni=M.zc)(e,t,n),ri=e=>(ri=M.Ac)(e),ii=r.dynCall_iii=(e,t,n)=>(ii=r.dynCall_iii=M.Bc)(e,t,n),ai=r.dynCall_vi=(e,t)=>(ai=r.dynCall_vi=M.Cc)(e,t),oi=r.dynCall_ii=(e,t)=>(oi=r.dynCall_ii=M.Dc)(e,t),si=r.dynCall_vii=(e,t,n)=>(si=r.dynCall_vii=M.Ec)(e,t,n),ci=r.dynCall_iiii=(e,t,n,i)=>(ci=r.dynCall_iiii=M.Fc)(e,t,n,i),li=r.dynCall_viii=(e,t,n,i)=>(li=r.dynCall_viii=M.Gc)(e,t,n,i),ui=r.dynCall_iiiii=(e,t,n,i,a)=>(ui=r.dynCall_iiiii=M.Hc)(e,t,n,i,a),di=r.dynCall_viiii=(e,t,n,i,a)=>(di=r.dynCall_viiii=M.Ic)(e,t,n,i,a),fi=r.dynCall_viiiiii=(e,t,n,i,a,o,s)=>(fi=r.dynCall_viiiiii=M.Jc)(e,t,n,i,a,o,s),pi=r.dynCall_viiiiiii=(e,t,n,i,a,o,s,c)=>(pi=r.dynCall_viiiiiii=M.Kc)(e,t,n,i,a,o,s,c),mi=r.dynCall_ji=(e,t)=>(mi=r.dynCall_ji=M.Lc)(e,t),hi=r.dynCall_v=e=>(hi=r.dynCall_v=M.Mc)(e),gi=r.dynCall_viiiii=(e,t,n,i,a,o)=>(gi=r.dynCall_viiiii=M.Nc)(e,t,n,i,a,o),_i=r.dynCall_i=e=>(_i=r.dynCall_i=M.Oc)(e),vi=r.dynCall_fii=(e,t,n)=>(vi=r.dynCall_fii=M.Pc)(e,t,n),yi=r.dynCall_viiiiiiii=(e,t,n,i,a,o,s,c,l)=>(yi=r.dynCall_viiiiiiii=M.Qc)(e,t,n,i,a,o,s,c,l),bi=r.dynCall_viiiiiiiiii=(e,t,n,i,a,o,s,c,l,u,d)=>(bi=r.dynCall_viiiiiiiiii=M.Rc)(e,t,n,i,a,o,s,c,l,u,d),xi=r.dynCall_jiii=(e,t,n,i)=>(xi=r.dynCall_jiii=M.Sc)(e,t,n,i),Si=r.dynCall_dii=(e,t,n)=>(Si=r.dynCall_dii=M.Tc)(e,t,n),Ci=r.dynCall_viiiiiiiii=(e,t,n,i,a,o,s,c,l,u)=>(Ci=r.dynCall_viiiiiiiii=M.Uc)(e,t,n,i,a,o,s,c,l,u),wi=r.dynCall_viiiiiiiiiii=(e,t,n,i,a,o,s,c,l,u,d,f)=>(wi=r.dynCall_viiiiiiiiiii=M.Vc)(e,t,n,i,a,o,s,c,l,u,d,f),Ti=r.dynCall_iiiiii=(e,t,n,i,a,o)=>(Ti=r.dynCall_iiiiii=M.Wc)(e,t,n,i,a,o),Ei=r.dynCall_iij=(e,t,n)=>(Ei=r.dynCall_iij=M.Xc)(e,t,n),Di=r.dynCall_iiiiiiiiii=(e,t,n,i,a,o,s,c,l,u)=>(Di=r.dynCall_iiiiiiiiii=M.Yc)(e,t,n,i,a,o,s,c,l,u),Oi=r.dynCall_iiiiiiiiiii=(e,t,n,i,a,o,s,c,l,u,d)=>(Oi=r.dynCall_iiiiiiiiiii=M.Zc)(e,t,n,i,a,o,s,c,l,u,d),ki=r.dynCall_vij=(e,t,n)=>(ki=r.dynCall_vij=M._c)(e,t,n),Ai=r.dynCall_iiif=(e,t,n,i)=>(Ai=r.dynCall_iiif=M.$c)(e,t,n,i),ji=r.dynCall_iiij=(e,t,n,i)=>(ji=r.dynCall_iiij=M.ad)(e,t,n,i),Mi=r.dynCall_fiii=(e,t,n,i)=>(Mi=r.dynCall_fiii=M.bd)(e,t,n,i),Ni=r.dynCall_viiiiiiiiiiiii=(e,t,n,i,a,o,s,c,l,u,d,f,p,m)=>(Ni=r.dynCall_viiiiiiiiiiiii=M.cd)(e,t,n,i,a,o,s,c,l,u,d,f,p,m),Pi=r.dynCall_vjiii=(e,t,n,i,a)=>(Pi=r.dynCall_vjiii=M.dd)(e,t,n,i,a),Fi=r.dynCall_vif=(e,t,n)=>(Fi=r.dynCall_vif=M.ed)(e,t,n),Ii=r.dynCall_iiiiiii=(e,t,n,i,a,o,s)=>(Ii=r.dynCall_iiiiiii=M.fd)(e,t,n,i,a,o,s),Li=r.dynCall_iiiij=(e,t,n,i,a)=>(Li=r.dynCall_iiiij=M.gd)(e,t,n,i,a),Ri=r.dynCall_iiiiiiii=(e,t,n,i,a,o,s,c)=>(Ri=r.dynCall_iiiiiiii=M.hd)(e,t,n,i,a,o,s,c),zi=r.dynCall_viiiiiiiiiiii=(e,t,n,i,a,o,s,c,l,u,d,f,p)=>(zi=r.dynCall_viiiiiiiiiiii=M.id)(e,t,n,i,a,o,s,c,l,u,d,f,p),Bi=r.dynCall_diii=(e,t,n,i)=>(Bi=r.dynCall_diii=M.jd)(e,t,n,i),Vi=r.dynCall_jiiii=(e,t,n,i,a)=>(Vi=r.dynCall_jiiii=M.kd)(e,t,n,i,a),Hi=r.dynCall_viiij=(e,t,n,i,a)=>(Hi=r.dynCall_viiij=M.ld)(e,t,n,i,a),Ui=r.dynCall_fiiii=(e,t,n,i,a)=>(Ui=r.dynCall_fiiii=M.md)(e,t,n,i,a),L=r.dynCall_viiif=(e,t,n,i,a)=>(L=r.dynCall_viiif=M.nd)(e,t,n,i,a),Wi=r.dynCall_diiii=(e,t,n,i,a)=>(Wi=r.dynCall_diiii=M.od)(e,t,n,i,a),Gi=r.dynCall_viiid=(e,t,n,i,a)=>(Gi=r.dynCall_viiid=M.pd)(e,t,n,i,a),Ki=r.dynCall_iiiijii=(e,t,n,i,a,o,s)=>(Ki=r.dynCall_iiiijii=M.qd)(e,t,n,i,a,o,s),qi=r.dynCall_iiiiiij=(e,t,n,i,a,o,s)=>(qi=r.dynCall_iiiiiij=M.rd)(e,t,n,i,a,o,s),Ji=e=>(Ji=M.sd)(e),Yi=()=>(Yi=M.td)(),Xi=e=>(Xi=M.ud)(e),Zi=()=>(Zi=M.vd)();function Qi(e,t,n){var r=I();try{si(e,t,n)}catch(e){if(F(r),e!==e+0)throw e;P(1,0)}}function $i(e,t,n){var r=I();try{return ii(e,t,n)}catch(e){if(F(r),e!==e+0)throw e;P(1,0)}}function ea(e,t){var n=I();try{ai(e,t)}catch(e){if(F(n),e!==e+0)throw e;P(1,0)}}function ta(e,t){var n=I();try{return oi(e,t)}catch(e){if(F(n),e!==e+0)throw e;P(1,0)}}function na(e,t,n,r){var i=I();try{return ci(e,t,n,r)}catch(e){if(F(i),e!==e+0)throw e;P(1,0)}}function ra(e,t,n,r,i){var a=I();try{di(e,t,n,r,i)}catch(e){if(F(a),e!==e+0)throw e;P(1,0)}}function ia(e,t,n,r,i){var a=I();try{return ui(e,t,n,r,i)}catch(e){if(F(a),e!==e+0)throw e;P(1,0)}}function aa(e,t,n,r){var i=I();try{li(e,t,n,r)}catch(e){if(F(i),e!==e+0)throw e;P(1,0)}}function oa(e,t,n,r,i,a,o){var s=I();try{return Ii(e,t,n,r,i,a,o)}catch(e){if(F(s),e!==e+0)throw e;P(1,0)}}function sa(e){var t=I();try{hi(e)}catch(e){if(F(t),e!==e+0)throw e;P(1,0)}}function ca(e,t,n){var r=I();try{return Ei(e,t,n)}catch(e){if(F(r),e!==e+0)throw e;P(1,0)}}function la(e,t,n,r,i,a){var o=I();try{gi(e,t,n,r,i,a)}catch(e){if(F(o),e!==e+0)throw e;P(1,0)}}function ua(e,t,n){var r=I();try{ki(e,t,n)}catch(e){if(F(r),e!==e+0)throw e;P(1,0)}}function da(e,t,n,r,i,a,o){var s=I();try{fi(e,t,n,r,i,a,o)}catch(e){if(F(s),e!==e+0)throw e;P(1,0)}}function fa(e,t,n,r,i,a,o,s){var c=I();try{pi(e,t,n,r,i,a,o,s)}catch(e){if(F(c),e!==e+0)throw e;P(1,0)}}function pa(e,t,n,r,i,a){var o=I();try{return Ti(e,t,n,r,i,a)}catch(e){if(F(o),e!==e+0)throw e;P(1,0)}}function ma(e,t,n,r,i,a,o,s){var c=I();try{return Ri(e,t,n,r,i,a,o,s)}catch(e){if(F(c),e!==e+0)throw e;P(1,0)}}function ha(e,t,n,r,i,a,o,s,c,l){var u=I();try{Ci(e,t,n,r,i,a,o,s,c,l)}catch(e){if(F(u),e!==e+0)throw e;P(1,0)}}function ga(e,t,n,r,i,a,o,s,c){var l=I();try{yi(e,t,n,r,i,a,o,s,c)}catch(e){if(F(l),e!==e+0)throw e;P(1,0)}}function _a(e){var t=I();try{return _i(e)}catch(e){if(F(t),e!==e+0)throw e;P(1,0)}}function va(e,t,n,r,i,a,o,s,c,l){var u=I();try{return Di(e,t,n,r,i,a,o,s,c,l)}catch(e){if(F(u),e!==e+0)throw e;P(1,0)}}function ya(e,t,n){var r=I();try{return vi(e,t,n)}catch(e){if(F(r),e!==e+0)throw e;P(1,0)}}function ba(e,t,n,r){var i=I();try{return xi(e,t,n,r)}catch(e){if(F(i),e!==e+0)throw e;return P(1,0),0n}}function xa(e,t,n){var r=I();try{return Si(e,t,n)}catch(e){if(F(r),e!==e+0)throw e;P(1,0)}}function Sa(e,t,n,r,i,a,o,s,c,l,u,d){var f=I();try{wi(e,t,n,r,i,a,o,s,c,l,u,d)}catch(e){if(F(f),e!==e+0)throw e;P(1,0)}}function Ca(e,t,n,r,i,a,o,s,c,l,u){var d=I();try{bi(e,t,n,r,i,a,o,s,c,l,u)}catch(e){if(F(d),e!==e+0)throw e;P(1,0)}}function wa(e,t,n,r,i,a,o,s,c,l,u){var d=I();try{return Oi(e,t,n,r,i,a,o,s,c,l,u)}catch(e){if(F(d),e!==e+0)throw e;P(1,0)}}function Ta(e,t,n,r){var i=I();try{return Ai(e,t,n,r)}catch(e){if(F(i),e!==e+0)throw e;P(1,0)}}function Ea(e,t,n,r){var i=I();try{return ji(e,t,n,r)}catch(e){if(F(i),e!==e+0)throw e;P(1,0)}}function Da(e,t,n,r){var i=I();try{return Mi(e,t,n,r)}catch(e){if(F(i),e!==e+0)throw e;P(1,0)}}function Oa(e,t,n,r,i,a,o,s,c,l,u,d,f,p){var m=I();try{Ni(e,t,n,r,i,a,o,s,c,l,u,d,f,p)}catch(e){if(F(m),e!==e+0)throw e;P(1,0)}}function ka(e,t,n,r,i){var a=I();try{Pi(e,t,n,r,i)}catch(e){if(F(a),e!==e+0)throw e;P(1,0)}}function Aa(e,t,n){var r=I();try{Fi(e,t,n)}catch(e){if(F(r),e!==e+0)throw e;P(1,0)}}function ja(e,t){var n=I();try{return mi(e,t)}catch(e){if(F(n),e!==e+0)throw e;return P(1,0),0n}}function Ma(e,t,n,r,i){var a=I();try{return Li(e,t,n,r,i)}catch(e){if(F(a),e!==e+0)throw e;P(1,0)}}function Na(e,t,n,r,i,a,o,s,c,l,u,d,f){var p=I();try{zi(e,t,n,r,i,a,o,s,c,l,u,d,f)}catch(e){if(F(p),e!==e+0)throw e;P(1,0)}}function Pa(e,t,n,r){var i=I();try{return Bi(e,t,n,r)}catch(e){if(F(i),e!==e+0)throw e;P(1,0)}}function Fa(e,t,n,r,i){var a=I();try{return Vi(e,t,n,r,i)}catch(e){if(F(a),e!==e+0)throw e;return P(1,0),0n}}function Ia(e,t,n,r,i){var a=I();try{Hi(e,t,n,r,i)}catch(e){if(F(a),e!==e+0)throw e;P(1,0)}}function La(e,t,n,r,i){var a=I();try{return Ui(e,t,n,r,i)}catch(e){if(F(a),e!==e+0)throw e;P(1,0)}}function Ra(e,t,n,r,i){var a=I();try{L(e,t,n,r,i)}catch(e){if(F(a),e!==e+0)throw e;P(1,0)}}function za(e,t,n,r,i){var a=I();try{return Wi(e,t,n,r,i)}catch(e){if(F(a),e!==e+0)throw e;P(1,0)}}function Ba(e,t,n,r,i){var a=I();try{Gi(e,t,n,r,i)}catch(e){if(F(a),e!==e+0)throw e;P(1,0)}}function Va(e,t,n,r,i,a,o){var s=I();try{return Ki(e,t,n,r,i,a,o)}catch(e){if(F(s),e!==e+0)throw e;P(1,0)}}function Ha(e,t,n,r,i,a,o){var s=I();try{return qi(e,t,n,r,i,a,o)}catch(e){if(F(s),e!==e+0)throw e;P(1,0)}}return r.stackSave=()=>I(),r.stackRestore=e=>F(e),r.stackAlloc=e=>$r(e),r.setValue=function(e,t,n=`i8`){switch(n.endsWith(`*`)&&(n=`*`),n){case`i1`:case`i8`:de()[e>>>0]=t;break;case`i16`:pe()[e>>>1>>>0]=t;break;case`i32`:w()[e>>>2>>>0]=t;break;case`i64`:C[e>>>3]=BigInt(t);break;case`float`:he()[e>>>2>>>0]=t;break;case`double`:ge()[e>>>3>>>0]=t;break;case`*`:T()[e>>>2>>>0]=t;break;default:Te(`invalid type for setValue: ${n}`)}},r.getValue=function(e,t=`i8`){switch(t.endsWith(`*`)&&(t=`*`),t){case`i1`:case`i8`:return de()[e>>>0];case`i16`:return pe()[e>>>1>>>0];case`i32`:return w()[e>>>2>>>0];case`i64`:return C[e>>>3];case`float`:return he()[e>>>2>>>0];case`double`:return ge()[e>>>3>>>0];case`*`:return T()[e>>>2>>>0];default:Te(`invalid type for getValue: ${t}`)}},r.UTF8ToString=ut,r.stringToUTF8=mt,r.lengthBytesUTF8=pt,function e(){if(0<Se)Ce=e;else if(s)t(r),be();else{for(;0<Me.length;)Me.shift()(r);0<Se?Ce=e:(r.calledRun=!0,le||(be(),t(r)))}}(),r.PTR_SIZE=4,i}),nv=tv,rv=globalThis.self?.name?.startsWith(`em-pthread`),rv&&tv()}),av,ov,sv,cv,lv,uv,dv,fv,pv,mv,hv,gv,_v,vv=K(()=>{q_(),av=typeof location>`u`?void 0:location.origin,ov=()=>import.meta.url?.startsWith(`file:`)?new URL(new URL(new URL(`ort.webgpu.bundle.min-CEayb2S6.mjs`,import.meta.url).href,``+import.meta.url).href,av).href:import.meta.url,sv=ov(),cv=()=>{if(sv&&!sv.startsWith(`blob:`))return sv.substring(0,sv.lastIndexOf(`/`)+1)},lv=(e,t)=>{try{let n=t??sv;return(n?new URL(e,n):new URL(e)).origin===av}catch{return!1}},uv=(e,t)=>{let n=t??sv;try{return(n?new URL(e,n):new URL(e)).href}catch{return}},dv=(e,t)=>`${t??`./`}${e}`,fv=async e=>{let t=await(await fetch(e,{credentials:`same-origin`})).blob();return URL.createObjectURL(t)},pv=async e=>(await import(e)).default,mv=(Q_(),Yg(J_)).default,hv=async()=>{if(!sv)throw Error(`Failed to load proxy worker: cannot determine the script source URL.`);if(lv(sv))return[void 0,mv()];let e=await fv(sv);return[e,mv(e)]},gv=(iv(),Yg($_)).default,_v=async(e,t,n)=>{if(!e&&!t&&gv&&sv&&lv(sv))return[void 0,gv];{let r=`ort-wasm-simd-threaded.jsep.mjs`,i=e??uv(r,t),a=n&&i&&!lv(i,t),o=a?await fv(i):i??dv(r,t);return[a?o:void 0,await pv(o)]}}}),yv,bv,xv,Sv,Cv,wv,Tv,Ev,Dv=K(()=>{vv(),bv=!1,xv=!1,Sv=!1,Cv=()=>{if(typeof SharedArrayBuffer>`u`)return!1;try{return typeof MessageChannel<`u`&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},wv=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Tv=async e=>{if(bv)return Promise.resolve();if(xv)throw Error(`multiple calls to 'initializeWebAssembly()' detected.`);if(Sv)throw Error(`previous call to 'initializeWebAssembly()' failed.`);xv=!0;let t=e.initTimeout,n=e.numThreads;if(!wv())throw Error(`WebAssembly SIMD is not supported in the current environment.`);let r=Cv();n>1&&!r&&(typeof self<`u`&&!self.crossOriginIsolated&&console.warn(`env.wasm.numThreads is set to `+n+`, but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info.`),console.warn(`WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading.`),e.numThreads=n=1);let i=e.wasmPaths,a=typeof i==`string`?i:void 0,o=i?.mjs,s=o?.href??o,c=i?.wasm,l=c?.href??c,u=e.wasmBinary,[d,f]=await _v(s,a,n>1),p=!1,m=[];if(t>0&&m.push(new Promise(e=>{setTimeout(()=>{p=!0,e()},t)})),m.push(new Promise((e,t)=>{let r={numThreads:n};if(u)r.wasmBinary=u;else if(l||a)r.locateFile=e=>l??a+e;else if(s&&s.indexOf(`blob:`)!==0)r.locateFile=e=>new URL(e,s).href;else if(d){let e=cv();e&&(r.locateFile=t=>e+t)}f(r).then(t=>{xv=!1,bv=!0,yv=t,e(),d&&URL.revokeObjectURL(d)},e=>{xv=!1,Sv=!0,t(e)})})),await Promise.race(m),p)throw Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Ev=()=>{if(bv&&yv)return yv;throw Error(`WebAssembly is not initialized yet.`)}}),Ov,kv,Av,jv=K(()=>{Dv(),Ov=(e,t)=>{let n=Ev(),r=n.lengthBytesUTF8(e)+1,i=n._malloc(r);return n.stringToUTF8(e,i,r),t.push(i),i},kv=(e,t,n,r)=>{if(typeof e==`object`&&e){if(n.has(e))throw Error(`Circular reference in options`);n.add(e)}Object.entries(e).forEach(([e,i])=>{let a=t?t+e:e;if(typeof i==`object`)kv(i,a+`.`,n,r);else if(typeof i==`string`||typeof i==`number`)r(a,i.toString());else if(typeof i==`boolean`)r(a,i?`1`:`0`);else throw Error(`Can't handle extra config type: ${typeof i}`)})},Av=e=>{let t=Ev(),n=t.stackSave();try{let n=t.PTR_SIZE,r=t.stackAlloc(2*n);t._OrtGetLastError(r,r+n);let i=Number(t.getValue(r,n===4?`i32`:`i64`)),a=t.getValue(r+n,`*`),o=a?t.UTF8ToString(a):``;throw Error(`${e} ERROR_CODE: ${i}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(n)}}}),Mv,Nv=K(()=>{Dv(),jv(),Mv=e=>{let t=Ev(),n=0,r=[],i=e||{};try{if(e?.logSeverityLevel===void 0)i.logSeverityLevel=2;else if(typeof e.logSeverityLevel!=`number`||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw Error(`log serverity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)i.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!=`number`||!Number.isInteger(e.logVerbosityLevel))throw Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(i.terminate=!1);let a=0;return e?.tag!==void 0&&(a=Ov(e.tag,r)),n=t._OrtCreateRunOptions(i.logSeverityLevel,i.logVerbosityLevel,!!i.terminate,a),n===0&&Av(`Can't create run options.`),e?.extra!==void 0&&kv(e.extra,``,new WeakSet,(e,i)=>{let a=Ov(e,r),o=Ov(i,r);t._OrtAddRunConfigEntry(n,a,o)!==0&&Av(`Can't set a run config entry: ${e} - ${i}.`)}),[n,r]}catch(e){throw n!==0&&t._OrtReleaseRunOptions(n),r.forEach(e=>t._free(e)),e}}}),Pv,Fv,Iv,Lv,Rv,zv=K(()=>{Dv(),jv(),Pv=e=>{switch(e){case`disabled`:return 0;case`basic`:return 1;case`extended`:return 2;case`all`:return 99;default:throw Error(`unsupported graph optimization level: ${e}`)}},Fv=e=>{switch(e){case`sequential`:return 0;case`parallel`:return 1;default:throw Error(`unsupported execution mode: ${e}`)}},Iv=e=>{e.extra||={},e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||=`1`,e.executionProviders&&e.executionProviders.some(e=>(typeof e==`string`?e:e.name)===`webgpu`)&&(e.enableMemPattern=!1)},Lv=(e,t,n)=>{for(let r of t){let t=typeof r==`string`?r:r.name;switch(t){case`webnn`:if(t=`WEBNN`,typeof r!=`string`){let t=r?.deviceType;if(t){let r=Ov(`deviceType`,n),i=Ov(t,n);Ev()._OrtAddSessionConfigEntry(e,r,i)!==0&&Av(`Can't set a session config entry: 'deviceType' - ${t}.`)}}break;case`webgpu`:if(t=`JS`,typeof r!=`string`){let t=r;if(t?.preferredLayout){if(t.preferredLayout!==`NCHW`&&t.preferredLayout!==`NHWC`)throw Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${t.preferredLayout}`);let r=Ov(`preferredLayout`,n),i=Ov(t.preferredLayout,n);Ev()._OrtAddSessionConfigEntry(e,r,i)!==0&&Av(`Can't set a session config entry: 'preferredLayout' - ${t.preferredLayout}.`)}}break;case`wasm`:case`cpu`:continue;default:throw Error(`not supported execution provider: ${t}`)}let i=Ov(t,n);Ev()._OrtAppendExecutionProvider(e,i)!==0&&Av(`Can't append execution provider: ${t}.`)}},Rv=e=>{let t=Ev(),n=0,r=[],i=e||{};Iv(i);try{let e=Pv(i.graphOptimizationLevel??`all`),a=Fv(i.executionMode??`sequential`),o=typeof i.logId==`string`?Ov(i.logId,r):0,s=i.logSeverityLevel??2;if(!Number.isInteger(s)||s<0||s>4)throw Error(`log serverity level is not valid: ${s}`);let c=i.logVerbosityLevel??0;if(!Number.isInteger(c)||c<0||c>4)throw Error(`log verbosity level is not valid: ${c}`);let l=typeof i.optimizedModelFilePath==`string`?Ov(i.optimizedModelFilePath,r):0;if(n=t._OrtCreateSessionOptions(e,!!i.enableCpuMemArena,!!i.enableMemPattern,a,!!i.enableProfiling,0,o,s,c,l),n===0&&Av(`Can't create session options.`),i.executionProviders&&Lv(n,i.executionProviders,r),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!=`boolean`)throw Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);let e=Ov(`enableGraphCapture`,r),a=Ov(i.enableGraphCapture.toString(),r);t._OrtAddSessionConfigEntry(n,e,a)!==0&&Av(`Can't set a session config entry: 'enableGraphCapture' - ${i.enableGraphCapture}.`)}if(i.freeDimensionOverrides)for(let[e,a]of Object.entries(i.freeDimensionOverrides)){if(typeof e!=`string`)throw Error(`free dimension override name must be a string: ${e}`);if(typeof a!=`number`||!Number.isInteger(a)||a<0)throw Error(`free dimension override value must be a non-negative integer: ${a}`);let i=Ov(e,r);t._OrtAddFreeDimensionOverride(n,i,a)!==0&&Av(`Can't set a free dimension override: ${e} - ${a}.`)}return i.extra!==void 0&&kv(i.extra,``,new WeakSet,(e,i)=>{let a=Ov(e,r),o=Ov(i,r);t._OrtAddSessionConfigEntry(n,a,o)!==0&&Av(`Can't set a session config entry: ${e} - ${i}.`)}),[n,r]}catch(e){throw n!==0&&t._OrtReleaseSessionOptions(n)!==0&&Av(`Can't release session options.`),r.forEach(e=>t._free(e)),e}}}),Bv,Vv,Hv,Uv,Wv,Gv,Kv,qv,q=K(()=>{Bv=e=>{switch(e){case`int8`:return 3;case`uint8`:return 2;case`bool`:return 9;case`int16`:return 5;case`uint16`:return 4;case`int32`:return 6;case`uint32`:return 12;case`float16`:return 10;case`float32`:return 1;case`float64`:return 11;case`string`:return 8;case`int64`:return 7;case`uint64`:return 13;case`int4`:return 22;case`uint4`:return 21;default:throw Error(`unsupported data type: ${e}`)}},Vv=e=>{switch(e){case 3:return`int8`;case 2:return`uint8`;case 9:return`bool`;case 5:return`int16`;case 4:return`uint16`;case 6:return`int32`;case 12:return`uint32`;case 10:return`float16`;case 1:return`float32`;case 11:return`float64`;case 8:return`string`;case 7:return`int64`;case 13:return`uint64`;case 22:return`int4`;case 21:return`uint4`;default:throw Error(`unsupported data type: ${e}`)}},Hv=(e,t)=>{let n=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],r=typeof t==`number`?t:t.reduce((e,t)=>e*t,1);return n>0?Math.ceil(r*n):void 0},Uv=e=>{switch(e){case`float16`:return typeof Float16Array<`u`&&Float16Array.from?Float16Array:Uint16Array;case`float32`:return Float32Array;case`uint8`:return Uint8Array;case`int8`:return Int8Array;case`uint16`:return Uint16Array;case`int16`:return Int16Array;case`int32`:return Int32Array;case`bool`:return Uint8Array;case`float64`:return Float64Array;case`uint32`:return Uint32Array;case`int64`:return BigInt64Array;case`uint64`:return BigUint64Array;default:throw Error(`unsupported type: ${e}`)}},Wv=e=>{switch(e){case`verbose`:return 0;case`info`:return 1;case`warning`:return 2;case`error`:return 3;case`fatal`:return 4;default:throw Error(`unsupported logging level: ${e}`)}},Gv=e=>e===`float32`||e===`float16`||e===`int32`||e===`int64`||e===`uint32`||e===`uint8`||e===`bool`||e===`uint4`||e===`int4`,Kv=e=>e===`float32`||e===`float16`||e===`int32`||e===`int64`||e===`uint32`||e===`uint64`||e===`int8`||e===`uint8`||e===`bool`||e===`uint4`||e===`int4`,qv=e=>{switch(e){case`none`:return 0;case`cpu`:return 1;case`cpu-pinned`:return 2;case`texture`:return 3;case`gpu-buffer`:return 4;case`ml-tensor`:return 5;default:throw Error(`unsupported data location: ${e}`)}}}),Jv,Yv=K(()=>{q_(),Jv=async e=>{if(typeof e==`string`){let t=await fetch(e);if(!t.ok)throw Error(`failed to load external data file: ${e}`);let n=t.headers.get(`Content-Length`),r=n?parseInt(n,10):0;if(r<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw Error(`failed to load external data file: ${e}, no response body.`);let n=t.body.getReader(),i;try{i=new ArrayBuffer(r)}catch(e){if(e instanceof RangeError){let e=Math.ceil(r/65536);i=new WebAssembly.Memory({initial:e,maximum:e}).buffer}else throw e}let a=0;for(;;){let{done:e,value:t}=await n.read();if(e)break;let r=t.byteLength;new Uint8Array(i,a,r).set(t),a+=r}return new Uint8Array(i,0,r)}}return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),Xv,Zv,Qv,$v,ey,ty,ny,ry=K(()=>{q(),Xv=[`V`,`I`,`W`,`E`,`F`],Zv=(e,t)=>{console.log(`[${Xv[e]},${new Date().toISOString()}]${t}`)},ey=(e,t)=>{Qv=e,$v=t},ty=(e,t)=>{let n=Wv(e);n>=Wv(Qv)&&Zv(n,typeof t==`function`?t():t)},ny=(...e)=>{$v&&ty(...e)}}),iy,ay=K(()=>{q(),iy=(e,t)=>new(Uv(t))(e)}),oy=K(()=>{}),sy,cy,ly,uy,dy,fy,py,my,hy,gy=K(()=>{ry(),oy(),sy=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),cy=[],ly=e=>Math.ceil(Number(e)/16)*16,uy=e=>{for(let t=0;t<cy.length;t++){let n=cy[t];if(e<=n)return n}return Math.ceil(e/16)*16},dy=1,fy=()=>dy++,py=async(e,t,n,r)=>{let i=ly(n),a=e.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let o=e.getCommandEncoder();e.endComputePass(),o.copyBufferToBuffer(t,0,a,0,i),e.flush(),await a.mapAsync(GPUMapMode.READ);let s=a.getMappedRange();if(r){let e=r();return e.set(new Uint8Array(s,0,n)),e}return new Uint8Array(s.slice(0,n))}finally{a.destroy()}},my=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[e]of sy)cy.push(e),this.freeBuffers.set(e,[]),this.freeUniformBuffers.set(e,[]);this.sessionCount=0}upload(e,t){let n=t.buffer,r=t.byteOffset,i=t.byteLength,a=ly(i),o=this.storageCache.get(e);if(!o)throw Error(`gpu data for uploading does not exist`);if(Number(o.originalSize)!==i)throw Error(`inconsistent data size. gpu data size=${o.originalSize}, data size=${i}`);let s=this.backend.device.createBuffer({mappedAtCreation:!0,size:a,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),c=s.getMappedRange();new Uint8Array(c).set(new Uint8Array(n,r,i)),s.unmap();let l=this.backend.device.createCommandEncoder();l.copyBufferToBuffer(s,0,o.gpuData.buffer,0,a),this.backend.device.queue.submit([l.finish()]),s.destroy(),ny(`verbose`,()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let n=this.storageCache.get(e);if(!n)throw Error(`source gpu data for memcpy does not exist`);let r=this.storageCache.get(t);if(!r)throw Error(`destination gpu data for memcpy does not exist`);if(n.originalSize!==r.originalSize)throw Error(`inconsistent source and destination gpu data size`);let i=ly(n.originalSize),a=this.backend.getCommandEncoder();this.backend.endComputePass(),a.copyBufferToBuffer(n.gpuData.buffer,0,r.gpuData.buffer,0,i)}registerExternalBuffer(e,t,n){let r;if(n){if(r=n[0],e===n[1])return ny(`verbose`,()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, buffer is the same, skip.`),r;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else r=fy();return this.storageCache.set(r,{gpuData:{id:r,type:0,buffer:e},originalSize:t}),ny(`verbose`,()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, registered.`),r}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),ny(`verbose`,()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let n=uy(e),r,i=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,a=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||a){let e=(i?this.freeBuffers:this.freeUniformBuffers).get(n);r=e&&e.length>0?e.pop():this.backend.device.createBuffer({size:n,usage:t})}else r=this.backend.device.createBuffer({size:n,usage:t});let o={id:fy(),type:0,buffer:r};return this.storageCache.set(o.id,{gpuData:o,originalSize:Number(e)}),ny(`verbose`,()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${o.id}`),o}get(e){return this.storageCache.get(e)?.gpuData}release(e){let t=typeof e==`bigint`?Number(e):e,n=this.storageCache.get(t);if(!n){if(this.storageCache.size===0)return 0;throw Error(`releasing data does not exist`)}return ny(`verbose`,()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${n.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(n.gpuData.buffer),n.originalSize}async download(e,t){let n=this.storageCache.get(Number(e));if(!n)throw Error(`data does not exist`);await py(this.backend,n.gpuData.buffer,n.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0){if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=sy.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let n=this.freeBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let n=this.freeUniformBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(e=>{e.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(e=>{e.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(e=>{e.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(e=>{e.destroy()}),this.capturedPendingBuffers.delete(e)),--this.sessionCount,this.sessionCount===0&&(ny(`warning`,()=>`[WebGPU] Clearing webgpu buffer cache`),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.storageCache=new Map)}},hy=(...e)=>new my(...e)}),_y,vy,yy=K(()=>{_y=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(`;`),this.key}},vy=e=>new _y(e)}),by,xy,J,Sy,Cy,wy,Ty,Y=K(()=>{by=class{static calcMatMulShape(e,t){return e[1]===t[0]?[e[0],t[1]]:void 0}},xy=class{static calcShape(e,t,n=!1){let r=e.length,i=t.length;if(r===0)return t;if(i===0)return e;let a=Math.max(e.length,t.length),o=Array(a);if(n){if(r<2||i<2)return;let n=by.calcMatMulShape([e[r-2],e[r-1]],[t[i-2],t[i-1]]);if(n===void 0)return;[o[a-2],o[a-1]]=n}for(let s=n?3:1;s<=a;s++){let n=r-s<0?1:e[r-s],c=i-s<0?1:t[i-s];if(n!==c&&n>1&&c>1)return;let l=Math.max(n,c);if(n&&c)o[a-s]=Math.max(n,c);else{if(l>1)return;o[a-s]=0}}return o}static isValidBroadcast(e,t){let n=e.length,r=t.length;if(n>r)return!1;for(let i=1;i<=n;i++)if(e[n-i]!==1&&e[n-i]!==t[r-i])return!1;return!0}},J=class e{static size(t){return e.getSizeFromDimensionRange(t,0,t.length)}static convertShape(e,t=4){let n=e.length;if(n===0)return[];let r=Array(n),i=n-1;for(;i>=0;){if(e[i]%t===0){r[i]=e[i]/t;break}if(t%e[i]!==0)throw Error(`cannot convert shape`);r[i]=1,t/=e[i],i--}for(i--;i>=0;i--)r[i]=e[i];return r}static sizeFromDimension(t,n){if(n<0||n>t.length)throw Error(`invalid dimension of ${n} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return e.getSizeFromDimensionRange(t,n,t.length)}static sizeToDimension(t,n){if(n<0||n>t.length)throw Error(`invalid dimension of ${n} for sizeToDimension as Tensor has ${t.length} dimensions.`);return e.getSizeFromDimensionRange(t,0,n)}static getSizeFromDimensionRange(e,t,n){let r=1;for(let i=t;i<n;i++){if(e[i]<0)throw Error(`cannot get valid size from specified dimension range. Most likely the range contains negative values in them.`);r*=Number(e[i])}return r}static computeStrides(e){let t=e.length;if(t===0)return[];if(t===1)return[1];let n=Array(t);n[t-1]=1,n[t-2]=e[t-1];for(let r=t-3;r>=0;--r)n[r]=n[r+1]*e[r+1];return n}static normalizeAxis(e,t){if(e<-t&&e>=t)throw Error(`unsupported axis for this operation.`);return e<0?e+t:e}static normalizeAxes(e,t){return e.map(n=>this.normalizeAxis(n,t??e.length))}static sortBasedOnPerm(e,t){return t?t.map(t=>e[t]):e.slice().reverse()}static padShape(e,t){let n=e.length;return e.map((e,r)=>e+t[r]+t[r+n])}static areEqual(e,t){return e.length===t.length&&e.every((e,n)=>e===t[n])}},Sy=class e{static adjustPoolAttributes(e,t,n,r,i,a){if(!e&&n.length!==t.length-2)throw Error(`length of specified kernel shapes should be 2 less than length of input dimensions`);if(e)for(let e=0;e<t.length-2;e++)e>=n.length?n.push(t[e+2]):n[e]=t[e+2];for(let e=0;e<n.length;e++)if(e<r.length){if(r[e]<0)throw Error(`strides should be greater than or equal to 1`)}else r.push(1);for(let e=0;e<n.length;e++)if(e<i.length){if(i[e]<0)throw Error(`dilations should be greater than or equal to 1`)}else i.push(1);for(let e=0;e<n.length*2;e++)if(e<a.length){if(a[e]<0)throw Error(`pad should be greater than or equal to 1`)}else a.push(0);for(let e=0;e<n.length;e++){if(n[e]<=0)throw Error(`kernel shapes need to be greater than 0`);if(a[e]>=n[e]||a[e+n.length]>=n[e])throw Error(`pads should be smaller than kernel`)}}static adjustPadsBasedOnAutoPad(t,n,r,i,a,o,s){if(s){if(a.length!==2*(t.length-2))throw Error(`length of pads should be twice the length of data dimensions`);if(n.length!==t.length-2)throw Error(`length of strides should be the length of data dimensions`);if(i.length!==t.length-2)throw Error(`length of kernel shapes should be the length of data dimensions`);for(let c=0;c<t.length-2;c++)e.adjustPadAndReturnShape(t[c+(o?1:2)],n[c],r[c],i[c],a,c,c+t.length-2,s)}}static computePoolOutputShape(t,n,r,i,a,o,s){if(n.length<=0)throw Error(`input shape must be of size greater than 0`);let c=[n[0],n[1]];return e.computeShapeHelper(t,n,c,r,i,a,o,s),c}static computeConvOutputShape(t,n,r,i,a,o,s){if(t.length<=0||n.length<=0)throw Error(`invalid input tensor dims or invalid filter tensor dims`);let c=[t[0],n[0]];return e.computeShapeHelper(!1,t,c,r,i,a,o,s),c}static computeShapeHelper(t,n,r,i,a,o,s,c){if(t)for(let e=0;e<n.length-2;e++)r.push(1);else for(let t=0;t<n.length-2;t++)r.push(e.adjustPadAndReturnShape(n[t+2],i[t],a[t],o[t],s,t,t+n.length-2,c))}static adjustPadAndReturnShape(e,t,n,r,i,a,o,s){let c=n*(r-1)+1;if(s&&s!==`NOTSET`)switch(s){case`VALID`:return i[a]=0,i[o]=0,Math.floor((e-c)/t+1);case`SAME_LOWER`:case`SAME_UPPER`:if(n!==1)throw Error(`Dilation not supported for SAME_UPPER or SAME_LOWER`);{let n=((e+t-1)/t-1)*t+r-e;return i[a]=Math.floor(s===`SAME_LOWER`?(n+1)/2:n/2),i[o]=n-i[a],Math.floor((e+n-r)/t+1)}default:throw Error(`Unsupported AutoPad type`)}else return Math.floor((e+i[a]+i[o]-c)/t+1)}},Cy=class{static getShapeOfGemmResult(e,t,n,r,i){if(e.length!==2||n.length!==2)throw Error(`shape need to be of size 2`);let a,o,s;t?(a=e[1],o=e[0]):(a=e[0],o=e[1]);let c=-1;if(r?(s=n[0],c=1):(s=n[1],c=0),n[c]!==o)throw Error(`dimension mismatch`);if(a<=0||s<=0||o<=0)throw Error(`invalid shape specified`);if(i&&!xy.isValidBroadcast(i,[a,s]))throw Error(`gemm: invalid bias shape for broadcast`);return[a,s,o]}},wy=-34028234663852886e22,Ty=34028234663852886e22}),Ey,Dy,Oy,ky,X,Ay,jy,My,Ny,Z,Py,Q,$,Fy,Iy,Ly,Ry,zy=K(()=>{q(),Y(),Ey=64,Dy=(e,t)=>{if(t===3)throw Error(`vec3 has same alignment as vec4, use vec4 instead`);switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:`f16`;case 1:return t>1?`vec${t}<f32>`:`f32`;case 6:return t>1?`vec${t}<i32>`:`i32`;case 12:return t>1?`vec${t}<u32>`:`u32`;case 7:if(t>1)throw Error(`currently not supported vecX of uint64 yet`);return[`vec2<u32>`,`i32`];case 13:if(t>1)throw Error(`currently not supported vecX of uint64 yet`);return[`vec2<u32>`,`u32`];case 9:if(t!==4)throw Error(`bool must be vec4`);return[`u32`,`vec4<bool>`];case 22:return`i32`;case 21:return`u32`;default:throw Error(`Unknown data type: ${e}`)}},Oy=(e,t=1)=>{let n=Dy(e,t);return typeof n==`string`?n:n[0]},ky=(e,t=1)=>{let n=Dy(e,t);return typeof n==`string`?n:n[1]},X=(...e)=>{let t=[];return e.forEach(e=>{e.length!==0&&t.push({type:12,data:e},{type:12,data:J.computeStrides(e)})}),t},Ay=e=>e%4==0?4:e%2==0?2:1,jy=(e=`f32`,t,n=`0`)=>!t||t===1?`${e}(${n})`:`vec${t}<${e}>(${n})`,My=(e,t,n)=>e===`f32`?n:t===1?`f32(${n})`:`vec${t}<f32>(${n})`,Ny=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,Z=(e,t,n,r)=>e.startsWith(`uniforms.`)&&n>4?typeof t==`string`?r===`f16`?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:r===`f16`?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:n>1?`${e}[${t}]`:e,Py=(e,t,n,r,i)=>{let a=typeof n==`number`,o=a?n:n.length,s=[...Array(o).keys()],c=o<2?`u32`:o<=4?`vec${o}<u32>`:`array<u32, ${o}>`,l=Dy(t,i),u=typeof l==`string`?l:l[1],d={indices:c,value:u,storage:typeof l==`string`?l:l[0],tensor:t},f=e=>typeof e==`string`?e:`${e}u`,p={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},m=a?`uniforms.`:``,h=`${m}${e}_shape`,g=`${m}${e}_strides`,_=``;for(let e=0;e<o-1;e++)_+=`
    let dim${e} = current / ${Z(g,e,o)};
    let rest${e} = current % ${Z(g,e,o)};
    indices[${e}] = dim${e};
    current = rest${e};
    `;_+=`indices[${o-1}] = current;`;let v=o<2?``:`
  fn o2i_${e}(offset: u32) -> ${d.indices} {
    var indices: ${d.indices};
    var current = offset;
    ${_}
    return indices;
  }`,y=t=>(p.offsetToIndices=!0,o<2?t:`o2i_${e}(${t})`),b=[];if(o>=2)for(let e=o-1;e>=0;e--)b.push(`${Z(g,e,o)} * (indices[${e}])`);let x=o<2?``:`
  fn i2o_${e}(indices: ${d.indices}) -> u32 {
    return ${b.join(`+`)};
  }`,S=t=>(p.indicesToOffset=!0,o<2?t:`i2o_${e}(${t})`),ee=(...e)=>o===0?`0u`:`${d.indices}(${e.map(f).join(`,`)})`,te=(e,t)=>o<2?`${e}`:`${Z(e,t,o)}`,ne=(e,t,n)=>o<2?`${e}=${n};`:`${Z(e,t,o)}=${n};`,re={},ie=(t,n)=>{p.broadcastedIndicesToOffset=!0;let r=`${n.name}broadcastedIndicesTo${e}Offset`;if(r in re)return`${r}(${t})`;let i=[];for(let e=o-1;e>=0;e--){let t=n.indicesGet(`outputIndices`,e+n.rank-o);i.push(`${te(g,e)} * (${t} % ${te(h,e)})`)}return re[r]=`fn ${r}(outputIndices: ${n.type.indices}) -> u32 {
             return ${i.length>0?i.join(`+`):`0u`};
           }`,`${r}(${t})`},ae=(t,n)=>(()=>{if(d.storage===d.value)return`${e}[${t}]=${n};`;if(d.storage===`vec2<u32>`&&d.value===`i32`)return`${e}[${t}]=vec2<u32>(u32(${n}), select(0u, 0xFFFFFFFFu, ${n} < 0));`;if(d.storage===`vec2<u32>`&&d.value===`u32`)return`${e}[${t}]=vec2<u32>(u32(${n}), 0u);`;if(d.storage===`u32`&&d.value===`vec4<bool>`)return`${e}[${t}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${n}));`;throw Error(`not supported combination of storage type ${d.storage} and value type ${d.value} yet`)})(),C=t=>(()=>{if(d.storage===d.value)return`${e}[${t}]`;if(d.storage===`vec2<u32>`&&d.value===`i32`)return`i32(${e}[${t}].x)`;if(d.storage===`vec2<u32>`&&d.value===`u32`)return`u32(${e}[${t}].x)`;if(d.storage===`u32`&&d.value===`vec4<bool>`)return`vec4<bool>(bool(${e}[${t}] & 0xFFu), bool(${e}[${t}] & 0xFF00u), bool(${e}[${t}] & 0xFF0000u), bool(${e}[${t}] & 0xFF000000u))`;throw Error(`not supported combination of storage type ${d.storage} and value type ${d.value} yet`)})(),oe=o<2?``:`
  fn get_${e}ByIndices(indices: ${d.indices}) -> ${u} {
    return ${C(`i2o_${e}(indices)`)};
  }`,se=o<2?``:(()=>{let t=s.map(e=>`d${e}: u32`).join(`, `),n=s.map(e=>`d${e}`).join(`, `);return`
  fn get_${e}(${t}) -> ${u} {
    return get_${e}ByIndices(${ee(n)});
  }`})(),ce=(...t)=>{if(t.length!==o)throw Error(`indices length must be ${o}`);let n=t.map(f).join(`,`);return o===0?C(`0u`):o===1?C(n[0]):(p.get=!0,p.getByIndices=!0,p.indicesToOffset=!0,`get_${e}(${n})`)},le=t=>o<2?C(t):(p.getByIndices=!0,p.indicesToOffset=!0,`get_${e}ByIndices(${t})`),ue=o<2?``:`
  fn set_${e}ByIndices(indices: ${d.indices}, value: ${u}) {
    ${ae(`i2o_${e}(indices)`,`value`)}
  }`,de=o<2?``:(()=>{let t=s.map(e=>`d${e}: u32`).join(`, `),n=s.map(e=>`d${e}`).join(`, `);return`
  fn set_${e}(${t}, value: ${u}) {
    set_${e}ByIndices(${ee(n)}, value);
  }`})();return{impl:()=>{let e=[],t=!1;return p.offsetToIndices&&(e.push(v),t=!0),p.indicesToOffset&&(e.push(x),t=!0),p.broadcastedIndicesToOffset&&(Object.values(re).forEach(t=>e.push(t)),t=!0),p.set&&(e.push(de),t=!0),p.setByIndices&&(e.push(ue),t=!0),p.get&&(e.push(se),t=!0),p.getByIndices&&(e.push(oe),t=!0),!a&&t&&e.unshift(`const ${h} = ${d.indices}(${n.join(`,`)});`,`const ${g} = ${d.indices}(${J.computeStrides(n).join(`,`)});`),e.join(`
`)},type:d,offsetToIndices:y,indicesToOffset:S,broadcastedIndicesToOffset:ie,indices:ee,indicesGet:te,indicesSet:ne,set:(...t)=>{if(t.length!==o+1)throw Error(`indices length must be ${o}`);let n=t[o];if(typeof n!=`string`)throw Error(`value must be string`);let r=t.slice(0,o).map(f).join(`,`);return o===0?ae(`0u`,n):o===1?ae(r[0],n):(p.set=!0,p.setByIndices=!0,p.indicesToOffset=!0,`set_${e}(${r}, ${n})`)},setByOffset:ae,setByIndices:(t,n)=>o<2?ae(t,n):(p.setByIndices=!0,p.indicesToOffset=!0,`set_${e}ByIndices(${t}, ${n});`),get:ce,getByOffset:C,getByIndices:le,usage:r,name:e,strides:g,shape:h,rank:o}},Q=(e,t,n,r=1)=>Py(e,t,n,`input`,r),$=(e,t,n,r=1)=>Py(e,t,n,`output`,r),Fy=(e,t,n)=>Py(e,t,n,`atomicOutput`,1),Iy=(e,t,n,r=1)=>Py(e,t,n,`internal`,r),Ly=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e==`number`?`${e}u`:e}) { return; }`}mainStart(e=Ey){let t=typeof e==`number`?e:e[0],n=typeof e==`number`?1:e[1],r=typeof e==`number`?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||n>this.limits.maxComputeWorkgroupSizeY||r>this.limits.maxComputeWorkgroupSizeZ)throw Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*n*r>this.limits.maxComputeInvocationsPerWorkgroup)throw Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1;return`@compute @workgroup_size(${t}, ${n}, ${r})
  fn main(${i?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`}) {
    ${i?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*n*r}u + local_idx;`}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith(`uniforms.`)&&this.uniforms.push({name:e.shape.replace(`uniforms.`,``),type:`u32`,length:e.rank}),e.strides.startsWith(`uniforms.`)&&this.uniforms.push({name:e.strides.replace(`uniforms.`,``),type:`u32`,length:e.rank}))}declareVariable(e,t){if(e.usage===`internal`)throw Error(`cannot use internal variable with declareVariable(). use registerInternalVariables() instead.`);this.variables.push(e),this.appendVariableUniforms(e);let n=e.usage===`input`?`read`:`read_write`,r=e.usage===`atomicOutput`?`atomic<i32>`:e.type.storage;return`@group(0) @binding(${t}) var<storage, ${n}> ${e.name}: array<${r}>;`}declareVariables(...e){return e.map(e=>this.declareVariable(e,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!==`internal`)throw Error(`cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.`);this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(e=>this.registerInternalVariable(e)),this}registerUniform(e,t,n=1){return this.uniforms.push({name:e,type:t,length:n}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return``;let e=[];for(let{name:t,type:n,length:r}of this.uniforms)if(r&&r>4)n===`f16`?e.push(`@align(16) ${t}:array<mat2x4<${n}>, ${Math.ceil(r/8)}>`):e.push(`${t}:array<vec4<${n}>, ${Math.ceil(r/4)}>`);else{let i=r==null||r===1?n:`vec${r}<${n}>`;e.push(`${t}:${i}`)}return`
      struct Uniforms { ${e.join(`, `)} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=e=>[12,10,1,6][[`u32`,`f16`,`f32`,`i32`].indexOf(e)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Ry=(e,t)=>new Ly(e,t)}),By,Vy,Hy,Uy,Wy,Gy,Ky,qy,Jy,Yy=K(()=>{q(),Y(),yy(),zy(),By=(e,t)=>{if(!e||e.length!==1)throw Error(`Transpose requires 1 input.`);if(t.length!==0&&t.length!==e[0].dims.length)throw Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},Vy=(e,t)=>t.length===0?[...Array(e).keys()].reverse():t,Hy=(e,t)=>J.sortBasedOnPerm(e,Vy(e.length,t)),Uy=(e,t,n,r)=>{let i=`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`;for(let n=0;n<t;++n)i+=`a[${e[n]}]=i[${n}];`;return i+=`return a;}`},Wy=(e,t)=>{let n=[],r=[];for(let i=0;i<e.length;++i)e[i]!==1&&n.push(e[i]),e[t[i]]!==1&&r.push(t[i]);return{newShape:n,newPerm:r}},Gy=(e,t)=>{let n=0;for(let r=0;r<e.length;++r)if(t[e[r]]!==1){if(e[r]<n)return!1;n=e[r]}return!0},Ky=(e,t)=>{let n=e.dataType,r=e.dims.length,i=Vy(r,t),a=Hy(e.dims,i),o=e.dims,s=a,c=r<2||Gy(i,e.dims),l;if(c)return l=e=>{let t=Q(`input`,n,o,4),r=$(`output`,n,s,4);return`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(t,r)}
  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    output[global_idx] = input[global_idx];
  }`},{name:`TransposeCopy`,shaderCache:{inputDependencies:[`type`]},getRunData:()=>{let t=J.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(t/64/4)},programUniforms:[{type:12,data:Math.ceil(t/4)}]}},getShaderSource:l};let{newShape:u,newPerm:d}=Wy(e.dims,i),f=J.areEqual(d,[2,3,1]),p=J.areEqual(d,[3,1,2]);return u.length===2||f||p?(o=f?[u[0],u[1]*u[2]]:p?[u[0]*u[1],u[2]]:u,s=[o[1],o[0]],l=e=>{let t=Q(`a`,n,o.length),r=$(`output`,n,s.length);return`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(t,r)}
  var<workgroup> tile : array<array<${r.type.value}, 17>, 16>;
  ${e.mainStart([16,16,1])}
    let stride = (uniforms.output_shape[1] - 1) / 16 + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * 16u + local_id.x;
    let input_row = workgroup_id_x * 16u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${t.getByIndices(`${t.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * 16u + local_id.x;
    let output_row = workgroup_id_y * 16u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${r.setByIndices(`${r.type.indices}(output_row, output_col)`,`tile[local_id.x][local_id.y]`)}
    }
  }`},{name:`TransposeShared`,shaderCache:{inputDependencies:[`type`]},getRunData:()=>{let t=J.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(s[1]/16),y:Math.ceil(s[0]/16)},programUniforms:[{type:12,data:t},...X(o,s)]}},getShaderSource:l}):(l=e=>{let t=Q(`a`,n,o.length),a=$(`output`,n,s.length);return`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(t,a)}

  ${Uy(i,r,t,a)}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}

    let indices = ${a.offsetToIndices(`global_idx`)};
    let aIndices = perm(indices);

    ${a.setByOffset(`global_idx`,t.getByIndices(`aIndices`))}
  }`},{name:`Transpose`,shaderCache:{hint:`${t}`,inputDependencies:[`rank`]},getRunData:()=>{let t=J.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(t/64)},programUniforms:[{type:12,data:t},...X(o,s)]}},getShaderSource:l})},qy=(e,t)=>{By(e.inputs,t.perm),e.compute(Ky(e.inputs[0],t.perm))},Jy=e=>vy({perm:e.perm})}),Xy,Zy,Qy,$y,eb,tb,nb,rb,ib,ab,ob,sb,cb,lb,ub,db,fb,pb,mb,hb,gb,_b=K(()=>{q(),Y(),zy(),Wb(),Yy(),Xy={max:`select(bestValue, candidate, candidate > bestValue)`,min:`select(bestValue, candidate, candidate < bestValue)`,mean:`bestValue + candidate`,sum:`bestValue + candidate`,prod:`bestValue * candidate`,sumSquare:`bestValue + candidate * candidate`,logSumExp:`bestValue + exp(candidate)`,l1:`bestValue + abs(candidate)`,l2:`bestValue + candidate * candidate`,logSum:`bestValue + candidate`},Zy={max:`select(bestValue, candidate, candidate > bestValue)`,min:`select(bestValue, candidate, candidate < bestValue)`,mean:`bestValue + candidate`,sum:`bestValue + candidate`,prod:`bestValue * candidate`,sumSquare:`bestValue + candidate`,logSumExp:`bestValue + candidate`,l1:`bestValue + candidate`,l2:`bestValue + candidate`,logSum:`bestValue + candidate`},Qy={max:`_A[offset]`,min:`_A[offset]`,mean:`0`,sum:`0`,prod:`1`,sumSquare:`0`,logSumExp:`0`,l1:`0`,l2:`0`,logSum:`0`},$y={max:`bestValue`,min:`bestValue`,sum:`bestValue`,prod:`bestValue`,sumSquare:`bestValue`,logSumExp:`log(bestValue)`,l1:`bestValue`,l2:`sqrt(bestValue)`,logSum:`log(bestValue)`},eb=(e,t)=>{let n=[];for(let r=t-e;r<t;++r)n.push(r);return n},tb=(e,t)=>{let n=[],r=e.length;for(let i=0;i<r;i++)t.indexOf(i)===-1&&n.push(e[i]);return[n,t.map(t=>e[t])]},nb=(e,t)=>{let n=e.length+t.length,r=[],i=0;for(let a=0;a<n;a++)t.indexOf(a)===-1?r.push(e[i++]):r.push(1);return r},rb=(e,t)=>{for(let n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0},ib=(e,t)=>{let n=[];if(!rb(e,t)){for(let r=0;r<t;++r)e.indexOf(r)===-1&&n.push(r);e.forEach(e=>n.push(e))}return n},ab=(e,t,n,r,i,a,o)=>{let s=n[0].dims,c=J.size(a),l=J.size(o),u=Q(`_A`,n[0].dataType,s),d=$(`output`,i,a),f=64;c===1&&(f=256);let p=`
          var<workgroup> aBestValues : array<f32, ${f}>;
       `;return{name:e,shaderCache:{hint:`${t};${f}`,inputDependencies:[`type`]},getShaderSource:e=>`
        ${e.registerUniform(`reduceSize`,`u32`).declareVariables(u,d)}
        ${p}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${e.mainStart(f)}

          let outputIndex = global_idx / ${f};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Qy[r]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${f}) {
           let candidate = f32(${u.getByOffset(`offset + k`)});
           bestValue = ${Xy[r]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${f}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Zy[r]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${d.setByOffset(`outputIndex`,`${r===`mean`?`${d.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${d.type.storage}(${$y[r]})`}`)};
         }
        }`,getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:c},programUniforms:[{type:12,data:l}]})}},ob=(e,t,n,r)=>{let i=e.inputs.length===1?n:xb(e.inputs,n),a=i.axes;a.length===0&&!i.noopWithEmptyAxes&&(a=e.inputs[0].dims.map((e,t)=>t));let o=J.normalizeAxes(a,e.inputs[0].dims.length),s=o,c=e.inputs[0],l=ib(s,e.inputs[0].dims.length);l.length>0&&(c=e.compute(Ky(e.inputs[0],l),{inputs:[0],outputs:[-1]})[0],s=eb(s.length,c.dims.length));let[u,d]=tb(c.dims,s),f=u;i.keepDims&&(f=nb(u,o)),e.compute(ab(t,i.cacheKey,[c],r,e.inputs[0].dataType,f,d),{inputs:[c]})},sb=(e,t)=>{ob(e,`ReduceMeanShared`,t,`mean`)},cb=(e,t)=>{ob(e,`ReduceL1Shared`,t,`l1`)},lb=(e,t)=>{ob(e,`ReduceL2Shared`,t,`l2`)},ub=(e,t)=>{ob(e,`ReduceLogSumExpShared`,t,`logSumExp`)},db=(e,t)=>{ob(e,`ReduceMaxShared`,t,`max`)},fb=(e,t)=>{ob(e,`ReduceMinShared`,t,`min`)},pb=(e,t)=>{ob(e,`ReduceProdShared`,t,`prod`)},mb=(e,t)=>{ob(e,`ReduceSumShared`,t,`sum`)},hb=(e,t)=>{ob(e,`ReduceSumSquareShared`,t,`sumSquare`)},gb=(e,t)=>{ob(e,`ReduceLogSumShared`,t,`logSum`)}}),vb,yb,bb,xb,Sb,Cb,wb,Tb,Eb,Db,Ob,kb,Ab,jb,Mb,Nb,Pb,Fb,Ib,Lb,Rb,zb,Bb,Vb,Hb,Ub,Wb=K(()=>{q(),Y(),yy(),zy(),_b(),vb=e=>{if(!e||e.length===0||e.length>2)throw Error(`Reduce op requires 1 or 2 inputs.`);if(e.length===2&&e[1].dims.length!==1)throw Error(`Invalid axes input dims.`)},yb=e=>[``,``,`var value = ${e.getByIndices(`input_indices`)};`,``],bb=(e,t,n,r,i,a,o=!1,s=!1)=>{let c=[],l=n[0].dims,u=l.length,d=J.normalizeAxes(i,u),f=!s&&d.length===0;l.forEach((e,t)=>{f||d.indexOf(t)>=0?o&&c.push(1):c.push(e)});let p=c.length,m=J.size(c);return{name:e,shaderCache:t,getShaderSource:e=>{let t=[],i=Q(`_A`,n[0].dataType,u),s=$(`output`,a,p),c=r(i,s,d),m=c[2];for(let e=0,n=0;e<u;e++)f||d.indexOf(e)>=0?(o&&n++,m=`for(var j${e}: u32 = 0; j${e} < ${l[e]}; j${e}++) {
                  ${c[2].includes(`last_index`)?`let last_index = j${e};`:``}
                  ${i.indicesSet(`input_indices`,e,`j${e}`)}
                  ${m}
                }`):(t.push(`${i.indicesSet(`input_indices`,e,s.indicesGet(`output_indices`,n))};`),n++);return`

        ${e.registerUniform(`output_size`,`u32`).declareVariables(i,s)}

        ${e.mainStart()}
          ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
          var input_indices: ${i.type.indices};
          let output_indices = ${s.offsetToIndices(`global_idx`)};

          ${t.join(`
`)}
          ${c[0]}       // init ops for reduce max/min
          ${c[1]}
          ${m}
          ${c[3]}
          ${c.length===4?s.setByOffset(`global_idx`,`value`):c.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:c,dataType:a}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},...X(l,c)]})}},xb=(e,t)=>{let n=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(e=>n.push(Number(e))),vy({axes:n,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Sb=(e,t,n,r)=>{let i=e.inputs,a=i.length===1?n:xb(i,n);e.compute(bb(t,{hint:a.cacheKey,inputDependencies:[`rank`]},[i[0]],a.noopWithEmptyAxes&&a.axes.length===0?yb:r,a.axes,i[0].dataType,a.keepDims,a.noopWithEmptyAxes),{inputs:[0]})},Cb=(e,t)=>{vb(e.inputs),Sb(e,`ReduceLogSum`,t,(e,t)=>[`var value = ${t.type.storage}(0);`,``,`value += ${e.getByIndices(`input_indices`)};`,`value = log(value);`])},wb=(e,t)=>{vb(e.inputs),Sb(e,`ReduceL1`,t,(e,t)=>[`var value = ${t.type.storage}(0);`,``,`value += abs(${e.getByIndices(`input_indices`)});`,``])},Tb=(e,t)=>{vb(e.inputs),Sb(e,`ReduceL2`,t,(e,t)=>[`var t = ${t.type.value}(0); var value = ${t.type.value}(0);`,``,`t = ${e.getByIndices(`input_indices`)}; value += (t * t);`,`value = sqrt(value);`])},Eb=(e,t)=>{vb(e.inputs),Sb(e,`ReduceLogSumExp`,t,(e,t)=>[`var value = ${t.type.storage}(0);`,``,`value += exp(${e.getByIndices(`input_indices`)});`,`value = log(value);`])},Db=(e,t)=>{vb(e.inputs),Sb(e,`ReduceMax`,t,(e,t,n)=>{let r=[];for(let t=0;t<e.rank;t++)(n.indexOf(t)>=0||n.length===0)&&r.push(e.indicesSet(`input_indices`,t,0));return[`${r.join(`
`)}`,`var value = ${e.getByIndices(`input_indices`)};`,`value = max(value, ${e.getByIndices(`input_indices`)});`,``]})},Ob=(e,t)=>{vb(e.inputs),Sb(e,`ReduceMean`,t,(t,n,r)=>{let i=1;for(let n=0;n<t.rank;n++)(r.indexOf(n)>=0||r.length===0)&&(i*=e.inputs[0].dims[n]);return[`var sum = f32(0);`,``,`sum += f32(${t.getByIndices(`input_indices`)});`,`let value = ${n.type.value}(sum / ${i});`]})},kb=(e,t)=>{vb(e.inputs),Sb(e,`ReduceMin`,t,(e,t,n)=>{let r=[];for(let t=0;t<e.rank;t++)(n.indexOf(t)>=0||n.length===0)&&r.push(`input_indices[${t}] = 0;`);return[`${r.join(`
`)}`,`var value = ${e.getByIndices(`input_indices`)};`,`value = min(value, ${e.getByIndices(`input_indices`)});`,``]})},Ab=(e,t)=>{vb(e.inputs),Sb(e,`ReduceProd`,t,(e,t)=>[`var value = ${t.type.storage}(1);`,``,`value *= ${e.getByIndices(`input_indices`)};`,``])},jb=(e,t)=>{vb(e.inputs),Sb(e,`ReduceSum`,t,(e,t)=>[`var value = ${t.type.storage}(0);`,``,`value += ${e.getByIndices(`input_indices`)};`,``])},Mb=(e,t)=>{vb(e.inputs),Sb(e,`ReduceSumSquare`,t,(e,t)=>[`var t = ${t.type.value}(0); var value = ${t.type.value}(0);`,``,`t = ${e.getByIndices(`input_indices`)}; value += t * t;`,``])},Nb=(e,t,n)=>{if(t.length===0)return n;let r=1,i=1;for(let n=0;n<t.length;n++)t.indexOf(n)===-1?r*=e[n]:i*=e[n];return i<32&&r>1024},Pb=(e,t)=>{Nb(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ob(e,t):sb(e,t)},Fb=(e,t)=>{Nb(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?wb(e,t):cb(e,t)},Ib=(e,t)=>{Nb(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Tb(e,t):lb(e,t)},Lb=(e,t)=>{Nb(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Eb(e,t):ub(e,t)},Rb=(e,t)=>{Nb(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Db(e,t):db(e,t)},zb=(e,t)=>{Nb(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?kb(e,t):fb(e,t)},Bb=(e,t)=>{Nb(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ab(e,t):pb(e,t)},Vb=(e,t)=>{Nb(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?jb(e,t):mb(e,t)},Hb=(e,t)=>{Nb(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Mb(e,t):hb(e,t)},Ub=(e,t)=>{Nb(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Cb(e,t):gb(e,t)}}),Gb,Kb,qb,Jb,Yb=K(()=>{q(),yy(),Wb(),Gb=e=>{if(!e||e.length===0||e.length>2)throw Error(`ArgMinMaxOp op requires 1 or 2 inputs.`);if(e[0].dataType!==1)throw Error(`Invalid input type.`)},Kb=(e,t)=>{Gb(e.inputs),e.compute(bb(`ArgMin`,{hint:t.cacheKey,inputDependencies:[`rank`]},[e.inputs[0]],(e,n,r)=>{let i=[];for(let t=0;t<e.rank;t++)(r.indexOf(t)>=0||r.length===0)&&i.push(`input_indices[${t}] = 0;`);return[`${i.join(`
`)}`,`var value = ${e.getByIndices(`input_indices`)};
var best_index : i32 = 0;`,`if (${e.getByIndices(`input_indices`)} ${t.selectLastIndex>0?`<=`:`<`} value) {
         value = ${e.getByIndices(`input_indices`)};
         best_index = i32(last_index);
       }`,``,n.setByOffset(`global_idx`,`best_index`)]},[t.axis],7,t.keepDims),{inputs:[0]})},qb=(e,t)=>{Gb(e.inputs),e.compute(bb(`argMax`,{hint:t.cacheKey,inputDependencies:[`rank`]},[e.inputs[0]],(e,n,r)=>{let i=[];for(let t=0;t<e.rank;t++)(r.indexOf(t)>=0||r.length===0)&&i.push(`input_indices[${t}] = 0;`);return[`${i.join(`
`)}`,`var value = ${e.getByIndices(`input_indices`)};
var best_index : i32 = 0;`,`if (${e.getByIndices(`input_indices`)} ${t.selectLastIndex>0?`>=`:`>`} value) {
         value = ${e.getByIndices(`input_indices`)};
         best_index = i32(last_index);
       }`,``,n.setByOffset(`global_idx`,`best_index`)]},[t.axis],7,t.keepDims),{inputs:[0]})},Jb=e=>vy(e)}),Xb,Zb,Qb,$b,ex,tx,nx,rx,ix=K(()=>{q(),Y(),oy(),zy(),Xb=(e,t)=>{let n=e[0],r=e[1],i=e[2],a=e[3],o=e[4],s=e[5];if(o&&s)throw Error(`Attention cannot have both past and attention_bias`);if(n.dims.length!==3)throw Error(`Input "input" must have 3 dimensions`);let c=n.dims[0],l=n.dims[1],u=n.dims[2];if(i.dims.length!==1)throw Error(`Input "bias" is expected to have 1 dimensions`);if(r.dims.length!==2)throw Error(`Input "weights" is expected to have 2 dimensions`);if(r.dims[0]!==u)throw Error(`Input 1 dimension 0 should have same length as dimension 2 of input 0`);if(i.dims[0]!==r.dims[1])throw Error(`Input "bias" dimension 0 should have same length as dimension 1 of input "weights"`);let d=i.dims[0]/3,f=d,p=f;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw Error(`qkv_hidden_sizes attribute should have 3 elements`);for(let e of t.qkvHiddenSizes)if(e%t.numHeads!==0)throw Error(`qkv_hidden_sizes should be divisible by num_heads`);d=t.qkvHiddenSizes[0],f=t.qkvHiddenSizes[1],p=t.qkvHiddenSizes[2]}let m=l;if(d!==f)throw Error(`qkv_hidden_sizes first element should be same as the second`);if(i.dims[0]!==d+f+p)throw Error(`Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes`);let h=0;if(o){if(f!==p)throw Error(`Input "past" expect k_hidden_size == v_hidden_size`);if(o.dims.length!==5)throw Error(`Input "past" must have 5 dimensions`);if(o.dims[0]!==2)throw Error(`Input "past" first dimension must be 2`);if(o.dims[1]!==c)throw Error(`Input "past" second dimension must be batch_size`);if(o.dims[2]!==t.numHeads)throw Error(`Input "past" third dimension must be num_heads`);if(o.dims[4]!==f/t.numHeads)throw Error(`Input "past" fifth dimension must be k_hidden_size / num_heads`);t.pastPresentShareBuffer||(h=o.dims[3])}let g=m+h;if(a)throw Error(`Mask not supported`);if(o)throw Error(`past is not supported`);if(s){if(s.dims.length!==4)throw Error(`Input "attention_bias" must have 4 dimensions`);if(s.dims[0]!==c||s.dims[1]!==t.numHeads||s.dims[2]!==l||s.dims[3]!==g)throw Error(`Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)`)}return{batchSize:c,sequenceLength:l,pastSequenceLength:h,kvSequenceLength:m,totalSequenceLength:g,maxSequenceLength:-1,inputHiddenSize:u,hiddenSize:d,vHiddenSize:p,headSize:Math.floor(d/t.numHeads),vHeadSize:Math.floor(p/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:0,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Zb=(e,t,n)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset(`0`)});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e?.getByOffset(`batchIdx`)}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${n?`let past_sequence_length = uniforms.past_sequence_length`:``};
    let present_sequence_length = total_sequence_length;
    `,Qb=(e,t,n,r,i,a,o,s)=>{let c=Ay(o?1:a),l=64,u=a/c;u<l&&(l=32);let d=Math.ceil(a/c/l),f=[{type:12,data:t},{type:12,data:n},{type:12,data:r},{type:12,data:i},{type:12,data:u},{type:12,data:d}],p=Oy(e.dataType,c),m=ky(1,c),h=[`type`];return o&&h.push(`type`),s&&h.push(`type`),{name:`AttentionProbsSoftmax`,shaderCache:{hint:`${l};${p};${c}`,inputDependencies:h},getShaderSource:t=>{let n=$(`x`,e.dataType,e.dims,c),r=[n],i=o?Q(`seq_lens`,o.dataType,o.dims):void 0;i&&r.push(i);let a=s?Q(`total_sequence_length_input`,s.dataType,s.dims):void 0;a&&r.push(a);let u=ky(e.dataType);return`
  var<workgroup> thread_max: array<f32, ${l}>;
  var<workgroup> thread_sum: array<f32, ${l}>;
  ${t.registerUniforms([{name:`batch_size`,type:`u32`},{name:`num_heads`,type:`u32`},{name:`past_sequence_length`,type:`u32`},{name:`sequence_length`,type:`u32`},{name:`total_sequence_length`,type:`u32`},{name:`elements_per_thread`,type:`u32`}]).declareVariables(...r)}
  ${t.mainStart([l,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Zb(i,a,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${l}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${o?`u32(past_sequence_length + workgroup_id.y + 1)`:`total_sequence_length`};
    var thread_max_vector = ${m}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${m}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(c){case 1:return`thread_max_vector`;case 2:return`max(thread_max_vector.x, thread_max_vector.y)`;case 4:return`max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))`;default:throw Error(`Unsupported components: ${c}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${l}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${m}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${m}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(c){case 1:return`sum_vector`;case 2:return`sum_vector.x + sum_vector.y`;case 4:return`sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w`;default:throw Error(`Unsupported components: ${c}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${l}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${n.type.value}(${u}(1.0) / ${u}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${m}(x[offset + i]);
        x[offset + i] = ${n.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${o?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${n.type.value}(${u}(0));
        }`:``};
  }`},getRunData:()=>({outputs:[],dispatchGroup:{x:Math.ceil(a/l),y:i,z:t*n},programUniforms:f})}},$b=(e,t,n,r,i,a,o,s,c)=>{let l=o+a.kvSequenceLength,u=[a.batchSize,a.numHeads,a.sequenceLength,l],d=e>1&&r,f=a.kvNumHeads?a.kvNumHeads:a.numHeads,p=d?[a.batchSize,f,l,a.headSize]:void 0,m=a.nReps?a.nReps:1,h=a.scale===0?1/Math.sqrt(a.headSize):a.scale,g=Ay(a.headSize),_=a.headSize/g,v={x:Math.ceil(l/12),y:Math.ceil(a.sequenceLength/12),z:a.batchSize*a.numHeads},y=[{type:12,data:a.sequenceLength},{type:12,data:_},{type:12,data:l},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:1,data:h},{type:12,data:o},{type:12,data:a.kvSequenceLength},{type:12,data:m}],b=d&&r&&J.size(r.dims)>0,x=[`type`,`type`];b&&x.push(`type`),i&&x.push(`type`),s&&x.push(`type`),c&&x.push(`type`);let S=[{dims:u,dataType:t.dataType,gpuDataType:0}];return d&&S.push({dims:p,dataType:t.dataType,gpuDataType:0}),{name:`AttentionProbs`,shaderCache:{hint:`${g};${i!==void 0};${r!==void 0};${e}`,inputDependencies:x},getRunData:()=>({outputs:S,dispatchGroup:v,programUniforms:y}),getShaderSource:e=>{let a=Q(`q`,t.dataType,t.dims,g),o=[a,Q(`key`,n.dataType,n.dims,g)];if(b){let e=Q(`past_key`,r.dataType,r.dims,g);o.push(e)}i&&o.push(Q(`attention_bias`,i.dataType,i.dims));let l=s?Q(`seq_lens`,s.dataType,s.dims):void 0;l&&o.push(l);let f=c?Q(`total_sequence_length_input`,c.dataType,c.dims):void 0;f&&o.push(f);let h=$(`output`,t.dataType,u),_=[h];d&&_.push($(`present_key`,t.dataType,p,g));let v=ky(1,g);return`
  const TILE_SIZE = 12u;

  var<workgroup> tileQ: array<${a.type.storage}, 144>;
  var<workgroup> tileK: array<${a.type.storage}, 144>;
  ${e.registerUniforms([{name:`M`,type:`u32`},{name:`K`,type:`u32`},{name:`N`,type:`u32`},{name:`num_heads`,type:`u32`},{name:`head_size`,type:`u32`},{name:`alpha`,type:`f32`},{name:`past_sequence_length`,type:`u32`},{name:`kv_sequence_length`,type:`u32`},{name:`n_reps`,type:`u32`}]).declareVariables(...o,..._)}
  ${e.mainStart([12,12,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${m===1?`headIdx`:`headIdx / uniforms.n_reps`};
    let kv_num_heads = ${m===1?`uniforms.num_heads`:`uniforms.num_heads / uniforms.n_reps`};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Zb(l,f,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${b&&d?`let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;`:``};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${d?`let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;`:``}
    var value = ${v}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${b&&d?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${d?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:``}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${v}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(g){case 1:return`value`;case 2:return`value.x + value.y`;case 4:return`value.x + value.y + value.z + value.w`;default:throw Error(`Unsupported components: ${g}`)}})()};
        output[outputIdx] = ${h.type.value} (sum * uniforms.alpha) + ${i?`attention_bias[outputIdx]`:`0.0`};
    }
  }`}}},ex=(e,t,n,r,i,a,o=void 0,s=void 0)=>{let c=a+i.kvSequenceLength,l=i.nReps?i.nReps:1,u=i.vHiddenSize*l,d=e>1&&r,f=i.kvNumHeads?i.kvNumHeads:i.numHeads,p=d?[i.batchSize,f,c,i.headSize]:void 0,m=[i.batchSize,i.sequenceLength,u],h={x:Math.ceil(i.vHeadSize/12),y:Math.ceil(i.sequenceLength/12),z:i.batchSize*i.numHeads},g=[{type:12,data:i.sequenceLength},{type:12,data:c},{type:12,data:i.vHeadSize},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:12,data:u},{type:12,data:a},{type:12,data:i.kvSequenceLength},{type:12,data:l}],_=d&&r&&J.size(r.dims)>0,v=[`type`,`type`];_&&v.push(`type`),o&&v.push(`type`),s&&v.push(`type`);let y=[{dims:m,dataType:t.dataType,gpuDataType:0}];return d&&y.push({dims:p,dataType:t.dataType,gpuDataType:0}),{name:`AttentionScore`,shaderCache:{hint:`${r!==void 0};${e}`,inputDependencies:v},getRunData:()=>({outputs:y,dispatchGroup:h,programUniforms:g}),getShaderSource:e=>{let i=Q(`probs`,t.dataType,t.dims),a=[i,Q(`v`,n.dataType,n.dims)];_&&a.push(Q(`past_value`,r.dataType,r.dims));let c=o?Q(`seq_lens`,o.dataType,o.dims):void 0;o&&a.push(c);let u=s?Q(`total_sequence_length_input`,s.dataType,s.dims):void 0;s&&a.push(u);let f=[$(`output`,t.dataType,m)];return d&&f.push($(`present_value`,t.dataType,p)),`
  const TILE_SIZE = 12u;
  var<workgroup> tileQ: array<${i.type.value}, 144>;
  var<workgroup> tileV: array<${i.type.value}, 144>;
  ${e.registerUniforms([{name:`M`,type:`u32`},{name:`K`,type:`u32`},{name:`N`,type:`u32`},{name:`num_heads`,type:`u32`},{name:`head_size`,type:`u32`},{name:`v_hidden_size`,type:`u32`},{name:`past_sequence_length`,type:`u32`},{name:`kv_sequence_length`,type:`u32`},{name:`n_reps`,type:`u32`}]).declareVariables(...a,...f)}
  ${e.mainStart([12,12,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${l===1?`headIdx`:`headIdx / uniforms.n_reps`};
   let kv_num_heads = ${l===1?`uniforms.num_heads`:`uniforms.num_heads / uniforms.n_reps`};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Zb(c,u,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${_&&d?`let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;`:``};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${d?`let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;`:``}
   var value = ${i.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${_&&d?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${d?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:``}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`}}},tx=(e,t,n,r,i,a,o,s,c,l,u=void 0,d=void 0)=>{let f=Math.min(e.outputCount,1+ +!!o+ +!!s),p=f>1?l.pastSequenceLength:0,m=p+l.kvSequenceLength,h=c&&J.size(c.dims)>0?c:void 0,g=[t,n];f>1&&o&&J.size(o.dims)>0&&g.push(o),h&&g.push(h),u&&g.push(u),d&&g.push(d);let _=e.compute($b(f,t,n,o,h,l,p,u,d),{inputs:g,outputs:f>1?[-1,1]:[-1]})[0];e.compute(Qb(_,l.batchSize,l.numHeads,p,l.sequenceLength,m,u,d),{inputs:u&&d?[_,u,d]:[_],outputs:[]});let v=[_,r];f>1&&s&&J.size(s.dims)>0&&v.push(s),u&&v.push(u),d&&v.push(d),e.compute(ex(f,_,r,s,l,p,u,d),{inputs:v,outputs:f>1?[0,2]:[0]})},nx=(e,t)=>{let n=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],r=t.sequenceLength,i=t.inputHiddenSize,a=t.headSize,o={x:Math.ceil(t.headSize/12),y:Math.ceil(t.sequenceLength/12),z:t.batchSize*t.numHeads},s=[e.inputs[0],e.inputs[1],e.inputs[2]],c=[{type:12,data:r},{type:12,data:i},{type:12,data:a},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}];return e.compute({name:`AttentionPrepare`,shaderCache:{inputDependencies:[`type`,`type`,`type`]},getRunData:()=>({outputs:[{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:c}),getShaderSource:e=>{let t=$(`output_q`,s[0].dataType,n),r=$(`output_k`,s[0].dataType,n),i=$(`output_v`,s[0].dataType,n),a=Q(`input`,s[0].dataType,s[0].dims),o=Q(`weight`,s[1].dataType,s[1].dims),c=Q(`bias`,s[2].dataType,s[2].dims),l=a.type.storage;return`
  const TILE_SIZE = 12u;
  var<workgroup> tileInput: array<${l}, 144>;
  var<workgroup> tileWeightQ: array<${l}, 144>;
  var<workgroup> tileWeightK: array<${l}, 144>;
  var<workgroup> tileWeightV: array<${l}, 144>;
  ${e.registerUniforms([{name:`M`,type:`u32`},{name:`K`,type:`u32`},{name:`N`,type:`u32`},{name:`num_heads`,type:`u32`},{name:`head_size`,type:`u32`},{name:`hidden_size`,type:`u32`},{name:`ldb`,type:`u32`}]).declareVariables(a,o,c,t,r,i)}
  ${e.mainStart([12,12,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${l}(0);
    var valueK = ${l}(0);
    var valueV = ${l}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`}},{inputs:s,outputs:[-1,-1,-1]})},rx=(e,t)=>{let n=Xb(e.inputs,t),[r,i,a]=nx(e,n);return tx(e,r,i,a,e.inputs[4],void 0,void 0,void 0,e.inputs[5],n)}}),ax,ox,sx,cx,lx=K(()=>{K_(),q(),Y(),yy(),zy(),ax=(e,t)=>{if(!e||e.length!==5)throw Error(`BatchNormalization requires 5 inputs`);let n=(e,t,n)=>{let r=t.length;if(r!==e.length)throw Error(`${n}: num dimensions != ${r}`);t.forEach((t,r)=>{if(t!==e[r])throw Error(`${n}: dim[${r}] do not match`)})};if(e[0].dims.length>1){let r=t.format===`NHWC`?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);n(e[1].dims,r,`Invalid input scale`),n(e[2].dims,r,`Invalid input B`),n(e[3].dims,r,`Invalid input mean`),n(e[4].dims,r,`Invalid input var`)}else n(e[1].dims,[1],`Invalid input scale`),n(e[2].dims,[1],`Invalid input B`),n(e[3].dims,[1],`Invalid input mean`),n(e[4].dims,[1],`Invalid input var`)},ox=(e,t)=>{let{epsilon:n,spatial:r,format:i}=t,a=e[0].dims,o=r?Ay(a[a.length-1]):1,s=i===`NHWC`&&a.length>1?o:1,c=J.size(a)/o,l=r,u=l?a.length:a,d=Q(`x`,e[0].dataType,e[0].dims,o),f=Q(`scale`,e[1].dataType,e[1].dims,s),p=Q(`bias`,e[2].dataType,e[2].dims,s),m=Q(`inputMean`,e[3].dataType,e[3].dims,s),h=Q(`inputVar`,e[4].dataType,e[4].dims,s),g=$(`y`,e[0].dataType,u,o),_=()=>{let e=``;if(r)e=`let cOffset = ${a.length===1?`0u`:i===`NHWC`?`outputIndices[${a.length-1}] / ${o}`:`outputIndices[1]`};`;else if(i===`NCHW`)e=`
            ${g.indicesSet(`outputIndices`,`0`,`0`)}
            let cOffset = ${g.indicesToOffset(`outputIndices`)};`;else{e=`var cIndices = ${f.type.indices}(0);
                       cIndices[0] = outputIndices[${a.length-1}];`;for(let t=1;t<f.rank;t++)e+=`cIndices[${t}] = outputIndices[${t}];`;e+=`let cOffset = ${f.indicesToOffset(`cIndices`)};`}return e};return{name:`BatchNormalization`,shaderCache:{hint:`${t.epsilon}_${t.format}_${r}_${o}`,inputDependencies:l?[`rank`,`type`,`type`,`type`,`type`]:void 0},getShaderSource:e=>`
  const epsilon = ${n};
  ${e.registerUniform(`outputSize`,`u32`).declareVariables(d,f,p,m,h,g)}
  ${e.mainStart()}
  ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
    var outputIndices = ${g.offsetToIndices(`global_idx * ${o}`)};
    ${_()}
    let scale = ${f.getByOffset(`cOffset`)};
    let bias = ${p.getByOffset(`cOffset`)};
    let inputMean = ${m.getByOffset(`cOffset`)};
    let inputVar = ${h.getByOffset(`cOffset`)};
    let x = ${d.getByOffset(`global_idx`)};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${g.setByOffset(`global_idx`,`value`)}
  }`,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:l?[{type:12,data:c},...X(a)]:[{type:12,data:c}]})}},sx=e=>vy(e),cx=(e,t)=>{let{inputs:n,outputCount:r}=e,i=sx({...t,outputCount:r});if(c_.webgpu.validateInputContent&&ax(n,i),t.trainingMode)throw Error(`BatchNormalization trainingMode is not supported yet.`);e.compute(ox(n,i))}}),ux,dx,fx,px=K(()=>{Y(),zy(),ux=e=>{if(e[0].dims.length!==3)throw Error(`input should have 3 dimensions`);if(![320,640,1280].includes(e[0].dims[2]))throw Error(`number of channels should be 320, 640 or 1280`);if(e[1].dims.length!==1)throw Error(`bias is expected to have 1 dimensions`);if(e[0].dims[2]!==e[1].dims[0])throw Error(`last dimension of input and bias are not the same`)},dx=e=>{let t=e[0].dims,n=e[0].dims[2],r=J.size(t)/4,i=e[0].dataType,a=Q(`input`,i,t,4),o=Q(`bias`,i,[n],4),s=Q(`residual`,i,t,4),c=$(`output`,i,t,4);return{name:`BiasAdd`,getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(r/64)}}),getShaderSource:e=>`
  const channels = ${n}u / 4;
  ${e.declareVariables(a,o,s,c)}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(r)}
    let value = ${a.getByOffset(`global_idx`)}
      + ${o.getByOffset(`global_idx % channels`)} + ${s.getByOffset(`global_idx`)};
    ${c.setByOffset(`global_idx`,`value`)}
  }`}},fx=e=>{ux(e.inputs),e.compute(dx(e.inputs))}}),mx,hx,gx,_x,vx,yx,bx,xx,Sx,Cx,wx,Tx,Ex,Dx,Ox,kx,Ax,jx,Mx,Nx,Px,Fx,Ix,Lx,Rx,zx,Bx,Vx,Hx,Ux,Wx,Gx,Kx,qx,Jx,Yx,Xx,Zx,Qx,$x,eS,tS,nS,rS,iS,aS=K(()=>{q(),Y(),yy(),zy(),mx=(e,t,n,r,i,a,o)=>{let s=Math.ceil(t/4),c=``;c=typeof i==`string`?`${i}(a)`:i(`a`);let l=Q(`inputData`,n,[s],4),u=$(`outputData`,r,[s],4),d=[{name:`vec_size`,type:`u32`}];return o&&d.push(...o),`
      ${e.registerUniforms(d).declareVariables(l,u)}

  ${a??``}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.vec_size`)}

    let a = ${l.getByOffset(`global_idx`)};
    ${u.setByOffset(`global_idx`,c)}
  }`},hx=(e,t,n,r,i,a=e.dataType,o,s)=>{let c=[{type:12,data:Math.ceil(J.size(e.dims)/4)}];return o&&c.push(...o),{name:t,shaderCache:{hint:i,inputDependencies:[`type`]},getShaderSource:t=>mx(t,J.size(e.dims),e.dataType,a,n,r,s),getRunData:t=>({outputs:[{dims:e.dims,dataType:a}],dispatchGroup:{x:Math.ceil(J.size(t[0].dims)/64/4)},programUniforms:c})}},gx=e=>{e.compute(hx(e.inputs[0],`Abs`,`abs`))},_x=e=>{e.compute(hx(e.inputs[0],`Acos`,`acos`))},vx=e=>{e.compute(hx(e.inputs[0],`Acosh`,`acosh`))},yx=e=>{e.compute(hx(e.inputs[0],`Asin`,`asin`))},bx=e=>{e.compute(hx(e.inputs[0],`Asinh`,`asinh`))},xx=e=>{e.compute(hx(e.inputs[0],`Atan`,`atan`))},Sx=e=>{e.compute(hx(e.inputs[0],`Atanh`,`atanh`))},Cx=e=>vy(e),wx=(e,t)=>{let n;switch(t.to){case 10:n=`vec4<f16>`;break;case 1:n=`vec4<f32>`;break;case 12:n=`vec4<u32>`;break;case 6:n=`vec4<i32>`;break;case 9:n=`vec4<bool>`;break;default:throw RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(hx(e.inputs[0],`Cast`,n,void 0,t.cacheKey,t.to))},Tx=e=>{let t,n,r=e.length>=2&&e[1].data!==0,i=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=r?e[1].getFloat32Array()[0]:-34028234663852886e22,n=i?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=r?e[1].getUint16Array()[0]:64511,n=i?e[2].getUint16Array()[0]:31743;break;default:throw Error(`Unsupport data type`)}return vy({min:t,max:n})},Ex=(e,t)=>{let n=t||Tx(e.inputs),r=ky(e.inputs[0].dataType);e.compute(hx(e.inputs[0],`Clip`,e=>`clamp(${e}, vec4<${r}>(uniforms.min), vec4<${r}>(uniforms.max))`,void 0,n.cacheKey,void 0,[{type:e.inputs[0].dataType,data:n.min},{type:e.inputs[0].dataType,data:n.max}],[{name:`min`,type:r},{name:`max`,type:r}]),{inputs:[0]})},Dx=e=>{e.compute(hx(e.inputs[0],`Ceil`,`ceil`))},Ox=e=>{e.compute(hx(e.inputs[0],`Cos`,`cos`))},kx=e=>{e.compute(hx(e.inputs[0],`Cosh`,`cosh`))},Ax=e=>vy(e),jx=(e,t)=>{let n=ky(e.inputs[0].dataType);e.compute(hx(e.inputs[0],`Elu`,e=>`elu_vf32(${e})`,`
  const elu_alpha_ = ${n}(${t.alpha});

  fn elu_f32(a: ${n}) -> ${n} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${n}>) -> vec4<${n}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Mx=(e=`f32`)=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,Nx=e=>{let t=ky(e.inputs[0].dataType);e.compute(hx(e.inputs[0],`Erf`,e=>`erf_vf32(${e})`,Mx(t)))},Px=e=>{e.compute(hx(e.inputs[0],`Exp`,`exp`))},Fx=e=>{e.compute(hx(e.inputs[0],`Floor`,`floor`))},Ix=e=>{let t=ky(e.inputs[0].dataType);e.compute(hx(e.inputs[0],`Gelu`,e=>`0.5 * ${e} * (1.0 + erf_vf32(${e} * 0.7071067811865475))`,Mx(t)))},Lx=(e,t)=>{let n=ky(e.inputs[0].dataType);e.compute(hx(e.inputs[0],`LeakyRelu`,e=>`select(leaky_relu_alpha_ * ${e}, ${e}, ${e} >= vec4<${n}>(0.0))`,`const leaky_relu_alpha_ = ${n}(${t.alpha});`,t.cacheKey))},Rx=e=>{e.compute(hx(e.inputs[0],`Not`,e=>`!${e}`))},zx=e=>{e.compute(hx(e.inputs[0],`Neg`,e=>`-${e}`))},Bx=e=>{e.compute(hx(e.inputs[0],`Reciprocal`,e=>`1.0/${e}`))},Vx=e=>{let t=ky(e.inputs[0].dataType);e.compute(hx(e.inputs[0],`Relu`,e=>`select(vec4<${t}>(0.0), ${e}, ${e} > vec4<${t}>(0.0))`))},Hx=e=>{e.compute(hx(e.inputs[0],`Sigmoid`,e=>`(1.0 / (1.0 + exp(-${e})))`))},Ux=e=>vy(e),Wx=(e,t)=>{let n=ky(e.inputs[0].dataType);e.compute(hx(e.inputs[0],`HardSigmoid`,e=>`max(vec4<${n}>(0.0), min(vec4<${n}>(1.0), ${t.alpha} * ${e} + vec4<${n}>(${t.beta})))`,void 0,t.cacheKey))},Gx=e=>{e.compute(hx(e.inputs[0],`Sin`,`sin`))},Kx=e=>{e.compute(hx(e.inputs[0],`Sinh`,`sinh`))},qx=e=>{e.compute(hx(e.inputs[0],`Sqrt`,`sqrt`))},Jx=e=>{e.compute(hx(e.inputs[0],`Tan`,`tan`))},Yx=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Xx=e=>{e.compute(hx(e.inputs[0],`Tanh`,Yx))},Zx=(e=`f32`)=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${Yx(`v`)};
}
`,Qx=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,$x=e=>{let t=ky(e.inputs[0].dataType);e.compute(hx(e.inputs[0],`FastGelu`,Qx,Zx(t),void 0,e.inputs[0].dataType))},eS=(e,t)=>{let n=ky(e.inputs[0].dataType);return e.compute(hx(e.inputs[0],`ThresholdedRelu`,e=>`select(vec4<${n}>(0.0), ${e}, ${e} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${n}>(${t.alpha});`,t.cacheKey)),0},tS=e=>{e.compute(hx(e.inputs[0],`Log`,`log`))},nS=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,rS=e=>`quick_gelu_impl(${e})`,iS=(e,t)=>{let n=ky(e.inputs[0].dataType);e.compute(hx(e.inputs[0],`QuickGelu`,rS,nS(n,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),oS,sS,cS,lS=K(()=>{Y(),zy(),aS(),oS=e=>{if(e[0].dims.length!==3)throw Error(`input should have 3 dimensions`);if(![2560,5120,10240].includes(e[0].dims[2]))throw Error(`hidden state should be 2560, 5120 or 10240`);if(e[1].dims.length!==1)throw Error(`bias is expected to have 1 dimensions`);if(e[0].dims[2]!==e[1].dims[0])throw Error(`last dimension of input and bias are not the same`)},sS=e=>{let t=e[0].dims.slice();t[2]/=2;let n=Q(`input`,e[0].dataType,e[0].dims,4),r=Q(`bias`,e[0].dataType,[e[0].dims[2]],4),i=$(`output`,e[0].dataType,t,4),a=J.size(t)/4,o=Oy(e[0].dataType);return{name:`BiasSplitGelu`,getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:t=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${t.declareVariables(n,r,i)}

  ${Mx(o)}

  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${i.setByOffset(`global_idx`,`valueLeft * geluRight`)}
  }`}},cS=e=>{oS(e.inputs),e.compute(sS(e.inputs))}}),uS,dS,fS,pS,mS,hS,gS,_S,vS,yS,bS,xS,SS,CS=K(()=>{q(),Y(),zy(),uS=(e,t,n,r,i,a,o,s,c,l,u,d)=>{let f,p;typeof s==`string`?f=p=(e,t)=>`${s}((${e}),(${t}))`:typeof s==`function`?f=p=s:(f=s.scalar,p=s.vector);let m=$(`outputData`,u,r.length,4),h=Q(`aData`,c,t.length,4),g=Q(`bData`,l,n.length,4),_;if(i){if(a){let e=J.size(t)===1,r=J.size(n)===1,i=t.length>0&&t[t.length-1]%4==0,a=n.length>0&&n[n.length-1]%4==0;_=e||r?m.setByOffset(`global_idx`,p(e?`${h.type.value}(${h.getByOffset(`0`)}.x)`:h.getByOffset(`global_idx`),r?`${g.type.value}(${g.getByOffset(`0`)}.x)`:g.getByOffset(`global_idx`))):`
            let outputIndices = ${m.offsetToIndices(`global_idx * 4u`)};
            let offsetA = ${h.broadcastedIndicesToOffset(`outputIndices`,m)};
            let offsetB = ${g.broadcastedIndicesToOffset(`outputIndices`,m)};
            ${m.setByOffset(`global_idx`,p(o||i?h.getByOffset(`offsetA / 4u`):`${h.type.value}(${h.getByOffset(`offsetA / 4u`)}[offsetA % 4u])`,o||a?g.getByOffset(`offsetB / 4u`):`${g.type.value}(${g.getByOffset(`offsetB / 4u`)}[offsetB % 4u])`))}
          `}else _=m.setByOffset(`global_idx`,p(h.getByOffset(`global_idx`),g.getByOffset(`global_idx`)))}else{if(!a)throw Error(`no necessary to use scalar implementation for element-wise binary op implementation.`);let e=(e,t,n=``)=>{let r=`aData[indexA${t}][componentA${t}]`,i=`bData[indexB${t}][componentB${t}]`;return`
            let outputIndices${t} = ${m.offsetToIndices(`global_idx * 4u + ${t}u`)};
            let offsetA${t} = ${h.broadcastedIndicesToOffset(`outputIndices${t}`,m)};
            let offsetB${t} = ${g.broadcastedIndicesToOffset(`outputIndices${t}`,m)};
            let indexA${t} = offsetA${t} / 4u;
            let indexB${t} = offsetB${t} / 4u;
            let componentA${t} = offsetA${t} % 4u;
            let componentB${t} = offsetB${t} % 4u;
            ${e}[${t}] = ${n}(${f(r,i)});
          `};_=u===9?`
            var data = vec4<u32>(0);
            ${e(`data`,0,`u32`)}
            ${e(`data`,1,`u32`)}
            ${e(`data`,2,`u32`)}
            ${e(`data`,3,`u32`)}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:`
            ${e(`outputData[global_idx]`,0)}
            ${e(`outputData[global_idx]`,1)}
            ${e(`outputData[global_idx]`,2)}
            ${e(`outputData[global_idx]`,3)}
          `}return`
        ${e.registerUniform(`vec_size`,`u32`).declareVariables(h,g,m)}

        ${d??``}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.vec_size`)}
        ${_}
      }`},dS=(e,t,n,r,i,a,o=n.dataType)=>{let s=n.dims.map(e=>Number(e)??1),c=r.dims.map(e=>Number(e)??1),l=!J.areEqual(s,c),u=s,d=J.size(s),f=!1,p=!1,m=[l];if(l){let e=xy.calcShape(s,c,!1);if(!e)throw Error(`Can't perform binary op on the given tensors`);u=e.slice(),d=J.size(u);let t=J.size(s)===1,n=J.size(c)===1,r=s.length>0&&s[s.length-1]%4==0,i=c.length>0&&c[c.length-1]%4==0;m.push(t),m.push(n),m.push(r),m.push(i);let a=1;for(let e=1;e<u.length;e++){let t=s[s.length-e];if(t===c[c.length-e])a*=t;else break}a%4==0?(p=!0,f=!0):(t||n||r||i)&&(f=!0)}else f=!0;return m.push(f),{name:e,shaderCache:{hint:t+m.map(e=>e.toString()).join(`_`),inputDependencies:[`rank`,`rank`]},getShaderSource:e=>uS(e,s,c,u,f,l,p,i,n.dataType,r.dataType,o,a),getRunData:()=>({outputs:[{dims:u,dataType:o}],dispatchGroup:{x:Math.ceil(d/64/4)},programUniforms:[{type:12,data:Math.ceil(J.size(u)/4)},...X(s,c,u)]})}},fS=(e,t,n,r,i,a)=>{e.compute(dS(t,i??``,e.inputs[0],e.inputs[1],n,r,a))},pS=e=>{fS(e,`Add`,(e,t)=>`${e}+${t}`)},mS=e=>{fS(e,`Div`,(e,t)=>`${e}/${t}`)},hS=e=>{fS(e,`Equal`,{scalar:(e,t)=>`u32(${e}==${t})`,vector:(e,t)=>`vec4<u32>(${e}==${t})`},void 0,void 0,9)},gS=e=>{fS(e,`Mul`,(e,t)=>`${e}*${t}`)},_S=e=>{let t=Q(`input`,e.inputs[0].dataType,e.inputs[0].dims).type.value;fS(e,`Pow`,{scalar:(e,t)=>`pow_custom(${e},${t})`,vector:(e,t)=>`pow_vector_custom(${e},${t})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t===`i32`?`round`:``}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},vS=e=>{fS(e,`Sub`,(e,t)=>`${e}-${t}`)},yS=e=>{fS(e,`Greater`,{scalar:(e,t)=>`u32(${e}>${t})`,vector:(e,t)=>`vec4<u32>(${e}>${t})`},void 0,void 0,9)},bS=e=>{fS(e,`Less`,{scalar:(e,t)=>`u32(${e}<${t})`,vector:(e,t)=>`vec4<u32>(${e}<${t})`},void 0,void 0,9)},xS=e=>{fS(e,`GreaterOrEqual`,{scalar:(e,t)=>`u32(${e}>=${t})`,vector:(e,t)=>`vec4<u32>(${e}>=${t})`},void 0,void 0,9)},SS=e=>{fS(e,`LessOrEqual`,{scalar:(e,t)=>`u32(${e}<=${t})`,vector:(e,t)=>`vec4<u32>(${e}<=${t})`},void 0,void 0,9)}}),wS,TS,ES,DS,OS,kS,AS=K(()=>{q(),Y(),yy(),zy(),wS=(e,t)=>{if(!e||e.length<1)throw Error(`too few inputs`);let n=e[0],r=n.dataType,i=n.dims.length;e.forEach((e,a)=>{if(a!==0){if(e.dataType!==r)throw Error(`input tensors should be one type`);if(e.dims.length!==i)throw Error(`input tensors should have the same shape`);e.dims.forEach((e,r)=>{if(r!==t&&e!==n.dims[r])throw Error(`non concat dimensions must match`)})}})},TS=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,ES=(e,t)=>{let n=e.length,r=[];for(let i=0;i<n;++i){let a=t.setByOffset(`global_idx`,e[i].getByIndices(`indices`));n===1?r.push(a):i===0?r.push(`if (inputIndex == ${i}u) { ${a} }`):i===n-1?r.push(`else { ${a} }`):r.push(`else if (inputIndex == ${i}) { ${a} }`)}return r.join(`
`)},DS=(e,t,n,r)=>{let i=J.size(n),a=Array(e.length),o=Array(e.length),s=0,c=[],l=[],u=[{type:12,data:i}];for(let n=0;n<e.length;++n)s+=e[n].dims[t],a[n]=s,l.push(e[n].dims.length),o[n]=Q(`input${n}`,r,l[n]),c.push(`rank`),u.push({type:12,data:a[n]});for(let t=0;t<e.length;++t)u.push(...X(e[t].dims));u.push(...X(n));let d=$(`output`,r,n.length),f=d.indicesGet(`indices`,t),p=Array.from(Array(a.length).keys()).map(e=>`uniforms.sizeInConcatAxis${e}`).join(`,`);return{name:`Concat`,shaderCache:{hint:`${t}`,inputDependencies:c},getRunData:()=>({outputs:[{dims:n,dataType:r}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:u}),getShaderSource:t=>`

  ${(()=>{t.registerUniform(`outputSize`,`u32`);for(let n=0;n<e.length;n++)t.registerUniform(`sizeInConcatAxis${n}`,`u32`);return t.declareVariables(...o,d)})()}

  ${TS(a.length,p)}

  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}

    var indices = ${d.offsetToIndices(`global_idx`)};

    let inputIndex = calculateInputIndex(${f});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${a.length}u>(${p});
      ${f} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${ES(o,d)}
  }`}},OS=(e,t)=>{let n=e.inputs,r=n[0].dims,i=J.normalizeAxis(t.axis,r.length);wS(n,i);let a=r.slice();a[i]=n.reduce((e,t)=>e+(t.dims.length>i?t.dims[i]:0),0);let o=n.filter(e=>J.size(e.dims)>0);e.compute(DS(o,i,a,n[0].dataType),{inputs:o})},kS=e=>vy({axis:e.axis})}),jS,MS,NS,PS,FS=K(()=>{q(),Y(),jS=(e,t,n=`f32`)=>{switch(e.activation){case`Relu`:return`value = max(value, ${t}(0.0));`;case`Sigmoid`:return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case`Clip`:return`value = clamp(value, ${t}(${n}(uniforms.clip_min)), ${t}(${n}(uniforms.clip_max)));`;case`HardSigmoid`:return`value = max(${t}(0.0), min(${t}(1.0), ${n}(uniforms.alpha) * value + ${n}(uniforms.beta)));`;case`LeakyRelu`:return`value = select(${n}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case`Tanh`:return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case``:return``;default:throw Error(`Unsupported activation ${e.activation}`)}},MS=(e,t)=>{e.activation===`Clip`?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation===`HardSigmoid`?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation===`LeakyRelu`&&t.push({type:1,data:e.alpha})},NS=(e,t)=>{e.activation===`Clip`?t.push({name:`clip_max`,type:`f32`},{name:`clip_min`,type:`f32`}):e.activation===`HardSigmoid`?t.push({name:`alpha`,type:`f32`},{name:`beta`,type:`f32`}):e.activation===`LeakyRelu`&&t.push({name:`alpha`,type:`f32`})},PS=e=>{let t=e?.activation||``;if(t===`HardSigmoid`){let[n,r]=e?.activation_params||[.2,.5];return{activation:t,alpha:n,beta:r}}if(t===`Clip`){let[n,r]=e?.activation_params||[wy,Ty];return{activation:t,clipMax:r,clipMin:n}}if(t===`LeakyRelu`){let[n]=e?.activation_params||[.01];return{activation:t,alpha:n}}return{activation:t}}}),IS,LS,RS=K(()=>{IS=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw Error(`${e}-component is not supported.`)}},LS=e=>`
      ${e?`value = value + getBiasByOutputCoords(coords);`:``}
      `}),zS,BS=K(()=>{zS=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),VS,HS,US=K(()=>{q(),Y(),zy(),FS(),VS=(e,t,n,r,i)=>{let a=r-n;return`
      ${Array.from({length:n}).map((n,o)=>`
      if (${Z(t.shape,o,t.rank)} != 1) {
        ${t.indicesSet(e,o,Z(i,o+a,r))}
      } else {
        ${t.indicesSet(e,o,0)}
      }`).join(``)}
`},HS=(e,t,n,r,i=!1,a)=>{let o=e[0].dims,s=e[1].dims,c=o[o.length-2],l=s[s.length-1],u=o[o.length-1],d=Ay(l),f=Ay(u),p=Ay(c),m=J.size(n)/d/p,h=e.length>2,g=r?r.slice(0,-2):n.slice(0,-2),_=[J.size(g),c,l],v=[{type:12,data:m},{type:12,data:c},{type:12,data:l},{type:12,data:u}];return MS(t,v),v.push(...X(g,o,s)),h&&v.push(...X(e[2].dims)),v.push(...X(_)),{name:`MatMulNaive`,shaderCache:{hint:`${t.activation};${d};${f};${p};${i}`,inputDependencies:h?[`rank`,`rank`,`rank`]:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:v}),getShaderSource:r=>{let a=Iy(`batch_dims`,e[0].dataType,g.length),c=Q(`a`,e[0].dataType,o.length,f),l=Q(`b`,e[1].dataType,s.length,d),u=$(`output`,e[0].dataType,_.length,d),m=Oy(u.type.tensor),v=jS(t,u.type.value,m),y=[c,l],b=``;if(h){let t=i?d:1;y.push(Q(`bias`,e[2].dataType,e[2].dims.length,t)),b=`${i?`value += bias[col / ${t}];`:`value += ${u.type.value}(bias[row + i]);`}`}let x=[{name:`output_size`,type:`u32`},{name:`M`,type:`u32`},{name:`N`,type:`u32`},{name:`K`,type:`u32`}];NS(t,x);let S=()=>{let e=`var a_data: ${c.type.value};`;for(let t=0;t<f;t++)e+=`
              let b_data${t} = b[(b_offset + (k + ${t}) * uniforms.N + col) / ${d}];`;for(let t=0;t<p;t++){e+=`a_data = a[(a_offset + (row + ${t}) * uniforms.K + k) / ${f}];`;for(let n=0;n<f;n++)e+=`
            values[${t}] = fma(${l.type.value}(a_data${f===1?``:`[${n}]`}), b_data${n}, values[${t}]);
`}return e};return`
  ${r.registerUniforms(x).registerInternalVariables(a).declareVariables(...y,u)}
  ${r.mainStart()}
    ${r.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    let col = (global_idx % (uniforms.N / ${d})) * ${d};
    var index1 = global_idx / (uniforms.N / ${d});
    let stride1 = uniforms.M / ${p};
    let row = (index1 % stride1) * ${p};
    let batch = index1 / stride1;

    ${n.length===2?``:`let batch_indices = ${a.offsetToIndices(`batch`)};`}

    var a_indices: ${c.type.indices};
    ${VS(`a_indices`,c,c.rank-2,a.rank,`batch_indices`)}
    ${c.indicesSet(`a_indices`,c.rank-2,0)}
    ${c.indicesSet(`a_indices`,c.rank-1,0)}
    let a_offset = ${c.indicesToOffset(`a_indices`)};

    var b_indices: ${l.type.indices};
    ${VS(`b_indices`,l,l.rank-2,a.rank,`batch_indices`)}
    ${l.indicesSet(`b_indices`,l.rank-2,0)}
    ${l.indicesSet(`b_indices`,l.rank-1,0)}
    let b_offset = ${l.indicesToOffset(`b_indices`)};
    var values: array<${u.type.value}, ${p}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${f}) {
      ${S()}
    }
    for (var i = 0u; i < ${p}u; i++) {
      var value = values[i];
      ${b}
      ${v}
      let cur_indices = ${u.type.indices}(batch, row + i, col);
      let offset = ${u.indicesToOffset(`cur_indices`)};
      ${u.setByOffset(`offset / ${d}`,`value`)};
    }
  }
  `}}}}),WS,GS,KS,qS,JS,YS,XS,ZS,QS=K(()=>{q(),Y(),zy(),FS(),US(),RS(),WS=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?`, batchIndices`:``});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?`, batchIndices`:``});
        `,GS=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?``:`let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];`}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?``:`acc[i] = BCached3 * ACached3[i] + acc[i];`}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?``:`acc[i] = BCached3 * ACached.w + acc[i];`}
        }`,KS=(e,t,n=`f32`,r,i=!1,a=32,o=!1,s=32)=>{let c=t[1]*e[1],l=t[0]*e[0],u=i?c:a,d=i?a:c,f=u/t[0],p=a/t[1];if((!i||f!==4||e[1]!==4)&&(i||f!==3&&f!==4)||u%t[0]!==0||a%t[1]!==0||e[0]!==4)throw Error(`If transposeA ${i} is true, innerElementSize ${f} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${f} must be 3 or 4.
  tileAWidth ${u} must be divisible by workgroupSize[0]${t[0]}. tileInner ${a} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${f}<${n}>, ${u/f}>, ${d}>;
var<workgroup> mm_Bsub: array<array<vec4<${n}>, ${l/e[0]}>, ${a}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${f};
const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${o?`0`:`i32(globalId.z)`};
  ${r?`let batchIndices = ${r.offsetToIndices(`u32(batch)`)};`:``}
  let globalRowStart = i32(workgroupId.y) * ${c};

  let num_tiles = ${o?`${Math.ceil(s/a)}`:`(uniforms.dim_inner - 1) / tileInner + 1`};
  var kStart = ${o?`i32(globalId.z) * ${s}`:`0`};

  var acc: array<vec4<${n}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${p};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${WS(i,r)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${p}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${r?`, batchIndices`:``});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${f===3?``:`let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];`}

          ${GS(i,f)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},qS=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?`, batchIndices`:``});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?`, batchIndices`:``});
            `,JS=e=>e?`let ACached = mm_Asub[k][tileRow + innerRow];`:`let ACached = mm_Asub[tileRow + innerRow][k];`,YS=(e,t,n=`f32`,r,i=!1,a=32,o=!1,s=32,c=!1)=>{let l=e[1]*t[1],u=e[0]*t[0],d=i?l:a,f=i?a:l;if(f%t[1]!==0||d%t[0]!==0||a%t[1]!==0)throw Error(`tileAHight ${f} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${d} must be divisible by workgroupSize[0]${t[0]}, tileInner ${a} must be divisible by workgroupSize[1]${t[1]}`);let p=f/t[1],m=d/t[0],h=a/t[1],g=c?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${l};
    let globalColStart = i32(workgroupId.x) * ${u};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${f}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${d}; inputCol = inputCol + ${t[0]}) {
          ${qS(i,r)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${a}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${u}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${r?`, batchIndices`:``});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${n}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${i?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${l};

let tileRowA = i32(localId.y) * ${p};
let tileColA = i32(localId.x) * ${m};
let tileRowB = i32(localId.y) * ${h};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${p}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${m}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${qS(i,r)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${h}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${r?`, batchIndices`:``});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${n}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${JS(i)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${n}, ${d}>, ${f}>;
  var<workgroup> mm_Bsub : array<array<${n}, ${u}>, ${a}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${o?`0`:`i32(globalId.z)`};
    ${r?`let batchIndices = ${r.offsetToIndices(`u32(batch)`)};`:``}
    let num_tiles = ${o?`${Math.ceil(s/a)}`:`(uniforms.dim_inner - 1) / tileInner + 1`};
    var kStart = ${o?`i32(globalId.z) * ${s}`:`0`};

    var acc : array<array<${n}, colPerThread>, rowPerThread>;
    ${g}
  }
`},XS=(e,t,n,r,i=!1)=>{let[a,o,s,c]=r,l=Oy(r[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${IS(e,l)} {
      var value = ${IS(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${o.type.indices};
        ${VS(`aIndices`,o,o.rank-2,a.rank,`batchIndices`)}
        ${o.indicesSet(`aIndices`,o.rank-2,`u32(row)`)}
        ${o.indicesSet(`aIndices`,o.rank-1,`u32(colIn)`)}
        value = ${o.getByIndices(`aIndices`)};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${IS(e,l)} {
      var value = ${IS(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${s.type.indices};
        ${VS(`bIndices`,s,s.rank-2,a.rank,`batchIndices`)}
        ${s.indicesSet(`bIndices`,s.rank-2,`u32(row)`)}
        ${s.indicesSet(`bIndices`,s.rank-1,`u32(colIn)`)}
        value = ${s.getByIndices(`bIndices`)};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${IS(e,l)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${i?`bias[colIn]`:`${IS(e,l)}(bias[row])`};`:``}
        ${n}
        ${c.setByIndices(`vec3<u32>(coords)`,`value`)}
      }
    }
    `},ZS=(e,t,n,r,i=!1,a)=>{let o=e[0].dims,s=e[1].dims,c=o.slice(0,-2),l=s.slice(0,-2),u=r?r.slice(0,-2):n.slice(0,-2),d=J.size(u),f=o[o.length-2],p=o[o.length-1],m=s[s.length-1],h=p%4==0&&m%4==0,g=f<=8?[4,1,1]:[4,4,1],_=[8,8,1],v=[Math.ceil(m/_[0]/g[0]),Math.ceil(f/_[1]/g[1]),Math.ceil(d/_[2]/g[2])],y=h?4:1,b=[...c,f,p/y],x=b.length,S=[...l,p,m/y],ee=S.length,te=[d,f,m/y],ne=[{type:6,data:f},{type:6,data:m},{type:6,data:p}];MS(t,ne),ne.push(...X(u,b,S));let re=[`rank`,`rank`],ie=e.length>2;return ie&&(ne.push(...X(e[2].dims)),re.push(`rank`)),ne.push(...X(te)),{name:`MatMul`,shaderCache:{hint:`${g};${t.activation};${h};${i}`,inputDependencies:re},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:v[0],y:v[1],z:v[2]},programUniforms:ne}),getShaderSource:n=>{let r=u.length,a=Iy(`batchDims`,e[0].dataType,r,1),o=Oy(e[0].dataType),s=Q(`a`,e[0].dataType,x,y),c=Q(`b`,e[1].dataType,ee,y),l=$(`result`,e[0].dataType,te.length,y),d=[s,c];if(ie){let t=i?y:1;d.push(Q(`bias`,e[2].dataType,e[2].dims.length,t))}let f=[{name:`dim_a_outer`,type:`i32`},{name:`dim_b_outer`,type:`i32`},{name:`dim_inner`,type:`i32`}];NS(t,f);let p=Oy(l.type.tensor),m=jS(t,l.type.value,p),v=XS(y,ie,m,[a,s,c,l],i);return`
  ${n.registerUniforms(f).registerInternalVariables(a).declareVariables(...d,l)}
  ${v}
  ${h?KS(g,_,o,a):YS(g,_,o,a)}
                   `}}}}),$S,eC,tC=K(()=>{q(),ry(),zy(),FS(),RS(),BS(),QS(),$S=(e,t,n,r,i=!1,a,o=4,s=4,c=4,l=`f32`)=>{let u=e=>{switch(e){case 1:return`resData = x[xIndex];`;case 3:return`resData = vec3<${l}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return`resData = x[xIndex / 4];`;default:throw Error(`innerElementSize ${e} is not supported.`)}},d=e=>{switch(e){case 1:return`return w[row * i32(uniforms.w_shape[3]) + colIn];`;case 4:return`return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];`;default:throw Error(`innerElementSize ${e} is not supported.`)}},f=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,p=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,m=e?`i32(uniforms.x_shape[1])`:`i32(uniforms.x_shape[2])`,h=e?`i32(uniforms.x_shape[2])`:`i32(uniforms.x_shape[3])`,g=e?`row`:`col`,_=e?`col`:`row`,v=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?`i32(uniforms.result_shape[2])`:`i32(uniforms.result_shape[3])`};
    let outRow = ${g} / outWidth;
    let outCol = ${g} % outWidth;

    let WRow = ${_} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${_} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${_} % inChannels;
    var resData = ${IS(o,l)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${m} && xCol >= 0 && xCol < ${h}) {
      ${f}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${u(o)}
    }
    return resData;`,y=e?t&&r?`
    let col = colIn * ${o};
    ${v}`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${v}
    }
    return ${IS(o,l)}(0.0);`:r&&n?`
    let col = colIn * ${o};
    ${v}`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${v}
    }
    return ${IS(o,l)}(0.0);`,b=e?r&&n?d(s):`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${d(s)}
    }
    return ${IS(s,l)}(0.0);`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${d(s)}
    }
    return ${IS(s,l)}(0.0);`,x=IS(c,l),S=IS(e?o:s,l),ee=IS(e?s:o,l),te=jS(a,x,l);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${S} {
      ${e?y:b}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${ee} {
      ${e?b:y}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${x}) {
      let col = colIn * ${c};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?`i32(uniforms.result_shape[2])`:`i32(uniforms.result_shape[3])`};
      ${p}
      ${LS(i)}
      ${te}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},eC=(e,t,n,r,i,a,o,s,c)=>{let l=t.format===`NHWC`,u=l?e[0].dims[3]:e[0].dims[1],d=n[0],f=l?n[2]:n[3],p=l?n[1]:n[2],m=l?n[3]:n[1],h=l&&(u%4==0||u%3==0)&&m%4==0,g=l?m:f*p,_=l?f*p:m,v=[8,8,1],y=r<=8?[4,1,1]:[4,4,1],b=[Math.ceil(g/v[0]/y[0]),Math.ceil(_/v[1]/y[1]),Math.ceil(d/v[2]/y[2])];ny(`verbose`,()=>`[conv2d_mm_webgpu] dispatch = ${b}`);let x=h?l&&u%4!=0?3:4:1,S=v[1]*y[1],ee=v[0]*y[0],te=Math.max(v[0]*x,v[1]),ne=r%S===0,re=i%ee===0,ie=a%te===0,ae=h?[x,4,4]:[1,1,1],C=[{type:6,data:r},{type:6,data:i},{type:6,data:a},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];MS(t,C),C.push(...X(e[0].dims,e[1].dims));let oe=[`rank`,`rank`];return o&&(C.push(...X(e[2].dims)),oe.push(`rank`)),C.push(...X(n)),{name:`Conv2DMatMul`,shaderCache:{hint:`${t.cacheKey};${x};${h};${ne};${re};${ie};${S};${ee};${te}`,inputDependencies:oe},getRunData:()=>({outputs:[{dims:c?c(n):n,dataType:e[0].dataType}],dispatchGroup:{x:b[0],y:b[1],z:b[2]},programUniforms:C}),getShaderSource:r=>{let i=[{name:`dim_a_outer`,type:`i32`},{name:`dim_b_outer`,type:`i32`},{name:`dim_inner`,type:`i32`},{name:`pad`,type:`i32`,length:2},{name:`stride`,type:`i32`,length:2},{name:`dilation`,type:`i32`,length:2}];NS(t,i);let a=h?4:1,c=Oy(e[0].dataType),u=`
      fn setOutputAtIndex(flatIndex : i32, value : ${h?`vec4<${c}>`:c}) {
        result[flatIndex] = ${h?`vec4<${c}>`:c}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${h?`vec4<${c}>`:c}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${h?`/ 4`:``}, value);
      }`,d=[Q(`x`,e[0].dataType,e[0].dims.length,x===3?1:x),Q(`w`,e[1].dataType,e[1].dims.length,a)],f=$(`result`,e[0].dataType,n.length,a);if(o){let t=Q(`bias`,e[2].dataType,e[2].dims.length,a);d.push(t),u+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${h?`vec4<${c}>`:c} {
          return bias[coords.${l?`w`:`y`}${h?`/ 4`:``}];
        }`}return`
        ${zS(`uniforms.result_strides`)}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${r.registerUniforms(i).declareVariables(...d,f)}
        ${u}
        ${$S(l,ne,re,ie,o,t,ae[0],ae[1],ae[2],c)}
        ${h?KS(y,v,c,void 0,!l,te):YS(y,v,c,void 0,!l,te,!1,void 0,s)}`}}}}),nC,rC,iC,aC,oC,sC,cC,lC,uC=K(()=>{q(),ry(),Y(),zy(),FS(),RS(),nC=e=>{let t=1;for(let n=0;n<e.length;n++)t*=e[n];return t},rC=e=>typeof e==`number`?[e,e,e]:e,iC=(e,t)=>t<=1?e:e+(e-1)*(t-1),aC=(e,t,n,r=1)=>{let i=iC(t,r);return Math.floor((e[0]*(n-1)-n+i)/2)},oC=(e,t,n,r,i)=>{i??=aC(e,t[0],r[0]);let a=[0,0,0,n];for(let n=0;n<3;n++)e[n]+2*i>=t[n]&&(a[n]=Math.trunc((e[n]-t[n]+2*i)/r[n]+1));return a},sC=(e,t,n,r,i,a,o,s,c,l)=>{let u,d,f,p;if(e===`VALID`&&(e=0),typeof e==`number`){u={top:e,bottom:e,left:e,right:e,front:e,back:e};let m=oC([t,n,r,1],[s,c,l],1,[i,a,o],e);d=m[0],f=m[1],p=m[2]}else if(Array.isArray(e)){if(!e.every((e,t,n)=>e===n[0]))throw Error(`Unsupported padding parameter: ${e}`);u={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let m=oC([t,n,r,1],[s,c,l],1,[i,a,o],e[0]);d=m[0],f=m[1],p=m[2]}else if(e===`SAME_UPPER`){d=Math.ceil(t/i),f=Math.ceil(n/a),p=Math.ceil(r/o);let e=(d-1)*i+s-t,m=(f-1)*a+c-n,h=(p-1)*o+l-r,g=Math.floor(e/2),_=e-g,v=Math.floor(m/2),y=m-v,b=Math.floor(h/2);u={top:v,bottom:y,left:b,right:h-b,front:g,back:_}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:u,outDepth:d,outHeight:f,outWidth:p}},cC=(e,t,n,r,i,a=!1,o=`channelsLast`)=>{let s,c,l,u,d;if(o===`channelsLast`)[s,c,l,u,d]=e;else if(o===`channelsFirst`)[s,d,c,l,u]=e;else throw Error(`Unknown dataFormat ${o}`);let[f,,p,m,h]=t,[g,_,v]=rC(n),[y,b,x]=rC(r),S=iC(p,y),ee=iC(m,b),te=iC(h,x),{padInfo:ne,outDepth:re,outHeight:ie,outWidth:ae}=sC(i,c,l,u,g,_,v,S,ee,te),C=a?f*d:f,oe=[0,0,0,0,0];return o===`channelsFirst`?oe=[s,C,re,ie,ae]:o===`channelsLast`&&(oe=[s,re,ie,ae,C]),{batchSize:s,dataFormat:o,inDepth:c,inHeight:l,inWidth:u,inChannels:d,outDepth:re,outHeight:ie,outWidth:ae,outChannels:C,padInfo:ne,strideDepth:g,strideHeight:_,strideWidth:v,filterDepth:p,filterHeight:m,filterWidth:h,effectiveFilterDepth:S,effectiveFilterHeight:ee,effectiveFilterWidth:te,dilationDepth:y,dilationHeight:b,dilationWidth:x,inShape:e,outShape:oe,filterShape:t}},lC=(e,t,n,r,i,a)=>{let o=a===`channelsLast`;o?e[0].dims[3]:e[0].dims[1];let s=[64,1,1],c={x:n.map((e,t)=>t)},l=[Math.ceil(nC(c.x.map(e=>n[e]))/s[0]),1,1];ny(`verbose`,()=>`[conv3d_naive_webgpu] dispatch = ${l}`);let u=[{type:12,data:J.size(n)},{type:12,data:r},{type:12,data:i},{type:12,data:t.strides},{type:12,data:t.dilations}];MS(t,u),u.push(...X(e[0].dims,e[1].dims));let d=[`rank`,`rank`],f=e.length===3;return f&&(u.push(...X(e[2].dims)),d.push(`rank`)),u.push(...X(n)),{name:`Conv3DNaive`,shaderCache:{hint:`${t.cacheKey};${o};1;${f}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:l[0],y:l[1],z:l[2]},programUniforms:u}),getShaderSource:a=>{let s=[{name:`output_size`,type:`u32`},{name:`filter_dims`,type:`u32`,length:r.length},{name:`pads`,type:`u32`,length:i.length},{name:`strides`,type:`u32`,length:t.strides.length},{name:`dilations`,type:`u32`,length:t.dilations.length}];NS(t,s);let c=Oy(e[0].dataType),l=Q(`x`,e[0].dataType,e[0].dims.length,1),u=Q(`W`,e[1].dataType,e[1].dims.length,1),d=[l,u],p=$(`result`,e[0].dataType,n.length,1),m=``;if(f){let t=Q(`bias`,e[2].dataType,e[2].dims.length,1);d.push(t),m+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${c} {
          return bias[${o?Z(`coords`,4,5):Z(`coords`,1,5)}];
        }`}let h=IS(1,c),g=jS(t,h,c);return`
            ${m}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${l.getByIndices(`aIndices`)};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${u.getByIndices(`aIndices`)};
            }
          ${a.registerUniforms(s).declareVariables(...d,p)}
          ${a.mainStart()}
          ${a.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
              let coords = ${p.offsetToIndices(`global_idx`)};
              let batch = ${Z(`coords`,0,l.rank)};
              let d2 = ${o?Z(`coords`,l.rank-1,l.rank):Z(`coords`,1,l.rank)};
              let xFRCCorner = vec3<u32>(${o?Z(`coords`,1,l.rank):Z(`coords`,2,l.rank)},
              ${o?Z(`coords`,2,l.rank):Z(`coords`,3,l.rank)},
              ${o?Z(`coords`,3,l.rank):Z(`coords`,4,l.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${o?Z(`uniforms.x_shape`,1,l.rank):Z(`uniforms.x_shape`,2,l.rank)};
              let xShapeZ = ${o?Z(`uniforms.x_shape`,2,l.rank):Z(`uniforms.x_shape`,3,l.rank)};
              let xShapeW = ${o?Z(`uniforms.x_shape`,3,l.rank):Z(`uniforms.x_shape`,4,l.rank)};
              let xShapeU = ${o?Z(`uniforms.x_shape`,4,l.rank):Z(`uniforms.x_shape`,1,l.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${o?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${o?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${o?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${o?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${f?`value = value + getBiasByOutputCoords(coords)`:``};
              ${g}
              result[global_idx] = f32(value);
          }`}}}}),dC,fC,pC=K(()=>{q(),Y(),zy(),FS(),dC=(e,t,n,r)=>{let i=e.length>2,a=i?`value += b[output_channel];`:``,o=e[0].dims,s=e[1].dims,c=t.format===`NHWC`,l=c?n[3]:n[1],u=l/t.group,d=c&&u>=4?Ay(l):1,f=J.size(n)/d,p=[{type:12,data:f},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:u}];MS(t,p),p.push(...X(o,[s[0],s[1],s[2],s[3]/d]));let m=i?[`rank`,`rank`,`rank`]:[`rank`,`rank`];return p.push(...X([n[0],n[1],n[2],n[3]/d])),{name:`GroupedConv`,shaderCache:{hint:`${t.cacheKey}_${d}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:p}),getShaderSource:r=>{let l=$(`output`,e[0].dataType,n.length,d),u=Oy(l.type.tensor),f=jS(t,l.type.value,u),p=Q(`x`,e[0].dataType,o.length),m=Q(`w`,e[1].dataType,s.length,d),h=[p,m];i&&h.push(Q(`b`,e[2].dataType,e[2].dims,d));let g=[{name:`output_size`,type:`u32`},{name:`dilations`,type:`u32`,length:t.dilations.length},{name:`strides`,type:`u32`,length:2},{name:`pads`,type:`u32`,length:2},{name:`output_channels_per_group`,type:`u32`}];NS(t,g);let _=c?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${p.get(`batch`,`xHeight`,`xWidth`,`input_channel`)};
            let wVal = ${m.get(`wHeight`,`wWidth`,`wInChannel`,`output_channel`)};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${p.get(`batch`,`input_channel`,`xHeight`,`xWidth`)};
            let wVal = ${m.get(`output_channel`,`wInChannel`,`wHeight`,`wWidth`)};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${r.registerUniforms(g).declareVariables(...h,l)}

  ${r.mainStart()}
    ${r.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}

    let outputIndices = ${l.offsetToIndices(`global_idx`)};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${c?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${c?1:2}], outputIndices[${c?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${d} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${c?2:1}];

    var value: ${l.type.value} = ${l.type.value}(0);
    ${_}
    ${a}
    ${f}
    ${l.setByOffset(`global_idx`,`value`)}
  }`}}},fC=(e,t,n,r)=>{let i=e.length>2,a=Ay(n[3]),o=Ay(n[2]),s=J.size(n)/a/o,c=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/a],l=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/a],u=[n[0],n[1],n[2],n[3]/a],d=[{type:12,data:s},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];MS(t,d),d.push(...X(c,l,u));let f=(o-1)*t.strides[1]+l[1];return{name:`GroupedConv-Vectorize`,shaderCache:{hint:`${t.cacheKey};${a};${o};${f};${l[0]};${l[1]}`,inputDependencies:i?[`rank`,`rank`,`type`]:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}),getShaderSource:n=>{let r=$(`output`,e[0].dataType,u.length,a),s=Oy(r.type.tensor),d=jS(t,r.type.value,s),p=Q(`x`,e[0].dataType,c.length,a),m=Q(`w`,e[1].dataType,l.length,a),h=[p,m];i&&h.push(Q(`b`,e[2].dataType,e[2].dims,a));let g=i?`value += b[output_channel];`:``,_=[{name:`output_size`,type:`u32`},{name:`strides`,type:`i32`,length:2},{name:`pads`,type:`i32`,length:2}];return NS(t,_),`
  ${n.registerUniforms(_).declareVariables(...h,r)}
  ${n.mainStart()}
    ${n.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${o}u;
    let col = (index1 % width1) * ${o}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${p.type.value}, ${f}>;
    var values: array<${r.type.value}, ${o}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${l[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${f}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${p.get(`batch`,`u32(x_height)`,`u32(x_width)`,`input_channel`)};
          } else {
            x_vals[i] = ${p.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${l[1]}; w_width++) {
          let w_val = ${m.get(`w_height`,`w_width`,`0`,`output_channel`)};
          for (var i = 0u; i < ${o}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${o}u; i++) {
      var value = values[i];
      ${g}
      ${d}
      ${r.set(`batch`,`row`,`col + i`,`output_channel`,`value`)};
    }
  }`}}}}),mC,hC,gC,_C,vC,yC,bC,xC,SC,CC=K(()=>{Y(),tC(),uC(),QS(),pC(),FS(),US(),Yy(),mC=(e,t,n,r,i,a)=>{let o=e[0],s=e.slice(a?1:2,a?3:4),c=s.length,l=t[0],u=t.slice(2).map((e,t)=>e+(e-1)*(n[t]-1)),d=s.map((e,t)=>e+r[t]+r[t+c]).map((e,t)=>Math.floor((e-u[t]+i[t])/i[t]));return d.splice(0,0,o),d.splice(a?3:1,0,l),d},hC=[2,3,1,0],gC=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw Error(`Conv requires 2 or 3 inputs`);if(e[0].dims.length>5)throw Error(`greater than 5D is not supported`);if(e[0].dims.length!==e[1].dims.length)throw Error(`filter does not have same dimension as input`);if(e[0].dims[t.format===`NHWC`?e[0].dims.length-1:1]!==e[1].dims[1]*t.group)throw Error(`FILTER_IN_CHANNEL should be equal to DATA_CHANNEL`);if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw Error(`invalid bias`);let n=e[0].dims.length-2;if(t.dilations.length!==n)throw Error(`dilations should be ${n}D`);if(t.strides.length!==n)throw Error(`strides should be ${n}D`);if(t.pads.length!==n*2)throw Error(`pads should be ${n*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw Error(`invalid kernel shape`)},_C=(e,t)=>{let n=e.kernelShape.slice();n.length<t[1].dims.length-2&&n.push(...Array(t[1].dims.length-2-n.length).fill(0));for(let e=2;e<t[1].dims.length;++e)n[e-2]===0&&(n[e-2]=t[1].dims[e]);let r=e.pads.slice();Sy.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,n,r,e.format===`NHWC`,e.autoPad);let i=Object.assign({},e);return Object.assign(i,{kernelShape:n,pads:r}),i},vC=e=>{let t=PS(e),n=e.format;return{autoPad:[`NOTSET`,`VALID`,`SAME_UPPER`,`SAME_LOWER`][e.auto_pad],format:n,dilations:e.dilations,group:e.group,kernelShape:e.kernel_shape,pads:e.pads,strides:e.strides,wIsConst:e.w_is_const(),...t,cacheKey:`${e.format};${t.activation};`}},yC=(e,t,n,r)=>{let i=n.format===`NHWC`,a=mC(t[0].dims,t[1].dims,n.dilations,n.pads,n.strides,i);if(n.group!==1){let o=[t[0]];if(i){let r=e.kernelCustomData.wT??e.compute(Ky(t[1],hC),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=r),o.push(r)}else o.push(t[1]);t.length===3&&o.push(t[2]),!e.adapterInfo.isArchitecture(`ampere`)&&i&&t[1].dims[0]===n.group&&t[1].dims[1]===1&&n.dilations[0]===1&&n.dilations[1]===1?e.compute(fC(o,n,a,r),{inputs:o}):e.compute(dC(o,n,a,r),{inputs:o});return}let o=t.length===3,s=t[0].dims[i?1:2],c=t[0].dims[i?2:3],l=t[0].dims[i?3:1],u=t[1].dims[2],d=t[1].dims[3],f=a[i?1:2],p=a[i?2:3],m=a[i?3:1],h=i&&u===s&&d===c&&n.pads[0]===0&&n.pads[1]===0;if(h||u===1&&d===1&&n.dilations[0]===1&&n.dilations[1]===1&&n.strides[0]===1&&n.strides[1]===1&&n.pads[0]===0&&n.pads[1]===0){let u=a[0],d,g,_,v=[];if(i){let r=e.kernelCustomData.wT??e.compute(Ky(t[1],hC),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];if(n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=r),h){let e=s*c*l;d=t[0].reshape([1,u,e]),g=r.reshape([1,e,m]),_=[1,u,m]}else d=t[0].reshape([u,s*c,l]),g=r.reshape([1,l,m]),_=[u,f*p,m];v.push(d),v.push(g)}else d=t[0].reshape([u,l,s*c]),g=t[1].reshape([1,m,l]),_=[u,m,f*p],v.push(g),v.push(d);o&&v.push(t[2]);let y=_[2],b=v[0].dims[v[0].dims.length-1];y<8&&b<8?e.compute(HS(v,n,a,_,i,r),{inputs:v}):e.compute(ZS(v,n,a,_,i,r),{inputs:v});return}let g=e.kernelCustomData.wT??e.compute(Ky(t[1],hC),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=g);let _=[t[0],g];o&&_.push(t[2]);let v=i?f*p:m,y=i?m:f*p,b=u*d*l;e.compute(eC(_,n,a,v,y,b,o,!0,r),{inputs:_})},bC=(e,t)=>{let n=t.format===`NHWC`,r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=[0,t.pads[0],0,t.pads[1]],a=[1].concat(t.strides),o=[1].concat(t.dilations),s=[1].concat(t.kernelShape),c=_C({...t,pads:i,strides:a,dilations:o,kernelShape:s},r);yC(e,r,c,e=>n?[e[0],e[2],e[3]]:[e[0],e[1],e[3]])},xC=(e,t,n)=>{let r=n.format===`NHWC`?`channelsLast`:`channelsFirst`,i=_C(n,t),a=n.autoPad===`NOTSET`?n.pads:n.autoPad,o=cC(t[0].dims,t[1].dims,n.strides,n.dilations,a,!1,r);e.compute(lC(t,i,o.outShape,[o.filterDepth,o.filterHeight,o.filterWidth],[o.padInfo.front,o.padInfo.top,o.padInfo.left],r))},SC=(e,t)=>{if(gC(e.inputs,t),e.inputs[0].dims.length===3)bC(e,t);else if(e.inputs[0].dims.length===5)xC(e,e.inputs,t);else{let n=_C(t,e.inputs);yC(e,e.inputs,n)}}}),wC,TC=K(()=>{q(),ry(),Y(),zy(),wC=(e,t,n)=>{let r=e.length>2,i=t.outputShape,a=t.format===`NHWC`,o=t.group,s=e[1].dims,c=s[2]/o,l=s[3],u=a?Ay(c):1,d=a?Ay(l):1,f=a?l===1?u:d:1,p=J.size(i)/d,m=[Math.ceil(p/64),1,1];ny(`verbose`,()=>`[conv2d_backprop_webgpu] dispatch = ${m}`);let h=[`rank`,`rank`],g=[t.strides[0],t.strides[1]],_=[t.kernelShape[a?1:2],t.kernelShape[a?2:3]],v=[t.dilations[0],t.dilations[1]],y=[_[0]+(t.dilations[0]<=1?0:(t.kernelShape[a?1:2]-1)*(t.dilations[0]-1)),_[1]+(t.dilations[1]<=1?0:(t.kernelShape[a?2:3]-1)*(t.dilations[1]-1))],b=[y[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),y[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],x=[{type:12,data:p},{type:12,data:g},{type:12,data:_},{type:12,data:v},{type:12,data:y},{type:6,data:b},{type:12,data:c},{type:12,data:l},...X(e[0].dims,e[1].dims)];return r&&(x.push(...X(e[2].dims)),h.push(`rank`)),x.push(...X(i)),{name:`ConvTranspose2D`,shaderCache:{hint:`${t.cacheKey};${u}${f}${d}${l===1}`,inputDependencies:h},getRunData:()=>({dispatchGroup:{x:m[0],y:m[1],z:m[2]},outputs:[{dims:n?n(i):i,dataType:e[0].dataType}],programUniforms:x}),getShaderSource:t=>{let n=[{name:`output_size`,type:`u32`},{name:`strides`,type:`u32`,length:g.length},{name:`filter_dims`,type:`u32`,length:_.length},{name:`dilations`,type:`u32`,length:_.length},{name:`effective_filter_dims`,type:`u32`,length:y.length},{name:`pads`,type:`i32`,length:b.length},{name:`input_channels_per_group`,type:`u32`},{name:`output_channels_per_group`,type:`u32`}],o=Oy(e[0].dataType),s=a?1:2,c=a?2:3,p=a?3:1,m=Q(`W`,e[1].dataType,e[1].dims.length,f),h=Q(`Dy`,e[0].dataType,e[0].dims.length,u),v=[h,m];r&&v.push(Q(`bias`,e[2].dataType,[i[p]].length,d));let x=$(`result`,e[0].dataType,i.length,d),S=`
            let outputIndices = ${x.offsetToIndices(`global_idx * ${d}`)};
            let batch = ${x.indicesGet(`outputIndices`,0)};
            let d1 = ${x.indicesGet(`outputIndices`,p)};
            let r = ${x.indicesGet(`outputIndices`,s)};
            let c = ${x.indicesGet(`outputIndices`,c)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${x.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${o}(dyRCorner) + ${o}(wR)) / ${o}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${o}(uniforms.Dy_shape[${s}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }

              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${o}(dyCCorner) + ${o}(wC)) / ${o}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${o}(uniforms.Dy_shape[${c}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group; d2 = d2 + ${u}) {
                  let xValue = ${a?h.getByOffset(`${h.indicesToOffset(`${h.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${u}`):h.get(`batch`,`inputChannel`,`idyR`,`idyC`)};
                  ${(()=>{let e=``;if(u===1)e+=`
        let w_offset = ${m.indicesToOffset(`${m.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
        let wValue = ${m.getByOffset(`w_offset / ${f}`)};
        dotProd = dotProd + xValue * wValue;`;else if(l===1)e+=`
          let wValue = ${m.getByOffset(`${m.indicesToOffset(`${m.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)} / ${f}`)};
          dotProd = dotProd + dot(xValue, wValue);`;else for(let t=0;t<u;t++)e+=`
            let wValue${t} = ${m.getByOffset(`${m.indicesToOffset(`${m.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${t}, wOutChannel)`)} / ${f}`)};
            dotProd = dotProd + xValue[${t}] * wValue${t};`;return e})()}
                  inputChannel = inputChannel + ${u};
                }
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${r?` + bias[d1 / ${d}]`:``};
            ${x.setByOffset(`global_idx`,`value`)};
          `;return`
    ${t.registerUniforms(n).declareVariables(...v,x)}
      ${t.mainStart()}
      ${t.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)};
    ${S}}`}}}}),EC,DC,OC,kC,AC,jC,MC,NC,PC,FC=K(()=>{TC(),FS(),Yy(),EC=(e,t,n,r,i,a)=>(e-1)*t+n+(r-1)*i+1-a,DC=(e,t,n,r,i)=>{let a=Math.floor(e/2);t===`SAME_UPPER`?(n[r]=a,n[i]=e-a):t===`SAME_LOWER`&&(n[r]=e-a,n[i]=a)},OC=(e,t,n,r,i,a,o,s,c,l)=>{let u=e.length-2,d=l.length===0;c.length<u&&c.push(...Array(u-c.length).fill(0));let f=e[0],p=t[s?3:1]*i;for(let i=0,f=e.length-u-+!!s;i<u;++i,++f){let s=e[f],p=d?s*o[i]:l[i],m=EC(s,o[i],a[i],t[f],n[i],p);DC(m,r,a,i,i+u),d&&l.push(o[i]*(s-1)+c[i]+(t[f]-1)*n[i]+1-a[i]-a[i+u])}l.splice(0,0,f),l.splice(s?3:1,0,p)},kC=(e,t)=>{let n=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((e,t)=>e*t,1)===0){n.length=0;for(let e=2;e<t[1].dims.length;++e)n.push(t[1].dims[e])}let r=e.format===`NHWC`;n.splice(0,0,t[1].dims[0]),n.splice(r?3:1,0,t[1].dims[1]);let i=e.pads.slice(),a=e.outputShape.slice(),o=e.outputPadding.slice(),s=t[0].dims,c=e.dilations.slice();if(c.reduce((e,t)=>e+t,0)===0){let e=t[0].dims.length-2;c=Array(e).fill(1)}let l=e.strides.slice();if(l.reduce((e,t)=>e+t,0)===0){let e=t[0].dims.length-2;l=Array(e).fill(1)}OC(s,n,c,e.autoPad,e.group,i,l,r,o,a);let u=Object.assign({},e);return Object.assign(u,{kernelShape:n,pads:i,outputPadding:o,outputShape:a,dilations:c,strides:l}),u},AC=e=>{let t=PS(e),n=e.format,r=[`NOTSET`,`VALID`,`SAME_UPPER`,`SAME_LOWER`][typeof e.autoPad>`u`?0:e.autoPad],i=e.dilations,a=e.group,o=e.kernelShape,s=e.pads,c=e.strides,l=e.wIsConst();return{autoPad:r,format:n,dilations:i,group:a,kernelShape:o,outputPadding:e.outputPadding,outputShape:e.outputShape,pads:s,strides:c,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},jC=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw Error(`Conv requires 2 or 3 inputs`);if(e[0].dims.length!==4&&e[0].dims.length!==3)throw Error(`currently only support 2-dimensional conv`);if(e[0].dims.length!==e[1].dims.length)throw Error(`filter does not have same dimension as input`);if(e[0].dims[t.format===`NHWC`?e[0].dims.length-1:1]!==e[1].dims[0])throw Error(`FILTER_IN_CHANNEL should be equal to DATA_CHANNEL`);let n=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==n))throw Error(`invalid bias`);let r=e[0].dims.length-2;if(t.dilations.reduce((e,t)=>e+t,0)>0&&t.dilations.length!==r)throw Error(`dilations should be ${r}D`);if(t.strides.reduce((e,t)=>e+t,0)>0&&t.strides.length!==r)throw Error(`strides should be ${r}D`);if(t.pads.reduce((e,t)=>e+t,0)>0&&t.pads.length!==r*2)throw Error(`pads should be ${r*2}D`);if(t.outputPadding.length!==r&&t.outputPadding.length!==0)throw Error(`output_padding should be ${r}D`);if(t.kernelShape.reduce((e,t)=>e+t,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw Error(`invalid kernel shape`);if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw Error(`invalid output shape`)},MC=(e,t,n,r)=>{let i=e.kernelCustomData.wT??e.compute(Ky(t[1],[2,3,0,1]),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=i);let a=[t[0],i];t.length===3&&a.push(t[2]),e.compute(wC(a,n,r),{inputs:a})},NC=(e,t)=>{let n=t.format===`NHWC`,r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=t.kernelShape;(i.length===0||i[0]===0)&&(i=[e.inputs[1].dims[2]]);let a=t.dilations;(a.length===0||a[0]===0)&&(a=[1]);let o=t.strides;(o.length===0||o[0]===0)&&(o=[1]);let s=t.pads;s.length===0&&(s=[0,0]),s=[0,s[0],0,s[1]],o=[1].concat(o),a=[1].concat(a),i=[1].concat(i);let c=t.outputPadding;c=[0].concat(c);let l=kC({...t,pads:s,strides:o,dilations:a,kernelShape:i,outputPadding:c},r);MC(e,r,l,e=>n?[e[0],e[2],e[3]]:[e[0],e[1],e[3]])},PC=(e,t)=>{if(jC(e.inputs,t),e.inputs[0].dims.length===3)NC(e,t);else{let n=kC(t,e.inputs);MC(e,e.inputs,n)}}}),IC,LC,RC,zC=K(()=>{q(),Y(),yy(),zy(),IC=(e,t,n,r)=>{let i=J.size(t),a=t.length,o=Q(`input`,e,a),s=$(`output`,e,a),c=n.dataType===6?n.getInt32Array()[0]:Number(n.getBigInt64Array()[0]),l=J.normalizeAxis(c,a);return{name:`CumSum`,shaderCache:{hint:r.cacheKey,inputDependencies:[`rank`]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},{type:12,data:l},...X(t,t)]}),getShaderSource:e=>{let t=` i32(${o.indicesGet(`inputIndices`,`uniforms.axis`)}) `,n=Z(`uniforms.input_shape`,`uniforms.axis`,a),i=r.reverse?t+(r.exclusive?` + 1`:``):`0`,c=r.reverse?n:t+(r.exclusive?``:` + 1`);return`
                ${e.registerUniform(`outputSize`,`u32`).registerUniform(`axis`,`u32`).declareVariables(o,s)}
                ${e.mainStart()}
                  ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
                  var inputIndices = ${s.offsetToIndices(`global_idx`)};
                  var sum = ${s.type.value}(0);
                  let first : i32 = ${i};
                  let last : i32 = ${c};
                  for (var i : i32 = first; i < last; i++) {
                    ${o.indicesSet(`inputIndices`,`uniforms.axis`,`u32(i)`)};
                    sum = sum + ${o.getByIndices(`inputIndices`)};
                  }
                  ${s.setByOffset(`global_idx`,`sum`)};
                }`}}},LC=(e,t)=>{let n=e.inputs[0].dims,r=e.inputs[0].dataType,i=e.inputs[1];e.compute(IC(r,n,i,t),{inputs:[0]})},RC=e=>{let t=e.exclusive===1,n=e.reverse===1;return vy({exclusive:t,reverse:n})}}),BC,VC,HC,UC,WC,GC=K(()=>{q(),Y(),yy(),zy(),BC=e=>{if(!e||e.length!==1)throw Error(`DepthToSpace requires 1 input.`);if(e[0].dims.length!==4)throw Error(`DepthToSpace requires 4D input.`)},VC=(e,t,n,r)=>{let i=[];i.push(`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`);for(let r=0;r<t;++r)i.push(n.indicesSet(`a`,e[r],`i[${r}]`));return i.push(`return a;}`),i.join(`
`)},HC=(e,t)=>{let n,r,i,a,o,s,c=t.format===`NHWC`,l=t.blocksize,u=t.mode===`DCR`;c?([n,r,i,a]=e.dims,o=u?[n,r,i,l,l,a/l**2]:[n,r,i,a/l**2,l,l],s=u?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([n,r,i,a]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],o=u?[n,l,l,a/l**2,r,i]:[n,a/l**2,l,l,r,i],s=u?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let d=e.reshape(o),f=d.dims.length,p=e.dataType,m=Q(`a`,p,f),h=$(`output`,p,f);return{name:`DepthToSpace`,shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:[`rank`]},getRunData:e=>{let t=c?[n,r*l,i*l,a/l**2]:[n,a/l**2,r*l,i*l],o=J.size(t),u=d.dims,f=J.sortBasedOnPerm(u,s);return{outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:[{type:12,data:o},...X(u,f)]}},getShaderSource:e=>`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(m,h)}

  ${VC(s,f,m,h)}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}

    let indices = ${h.offsetToIndices(`global_idx`)};
    let aIndices = perm(indices);

    ${h.setByOffset(`global_idx`,m.getByIndices(`aIndices`))}
  }`}},UC=(e,t)=>{BC(e.inputs),e.compute(HC(e.inputs[0],t))},WC=e=>vy({blocksize:e.blocksize,mode:e.mode,format:e.format})}),KC,qC,JC,YC,XC,ZC,QC,$C,ew,tw,nw,rw=K(()=>{q(),Y(),yy(),zy(),KC=`[a-zA-Z]|\\.\\.\\.`,qC=`(`+KC+`)+`,JC=`^`+qC+`$`,YC=`(`+qC+`,)*`+qC,XC=`^`+YC+`$`,ZC=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let n=this.symbolToIndices.get(e);n===void 0?n=[t]:n.push(t),this.symbolToIndices.set(e,n)}},QC=class{constructor(e,t){this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=[],this.outputDims=[];let[n,r]=t.includes(`->`)?t.split(`->`,2):[t,``];if(!n.match(RegExp(XC)))throw Error(`Invalid LHS term`);if(n.split(`,`).forEach((t,n)=>{let r=e[n].dims.slice();if(!t.match(RegExp(JC)))throw Error(`Invalid LHS term`);let i=this.processTerm(t,!0,r,n);this.lhs.push(i)}),r===``)r+=[...this.symbolToInfo.entries()].filter(([e,t])=>t.count===1||e===`...`).map(([e])=>e).join(``);else if(!r.match(RegExp(qC)))throw Error(`Invalid RHS`);r.match(RegExp(KC,`g`))?.forEach(e=>{if(e===`...`)this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let t=this.symbolToInfo.get(e);if(t===void 0)throw Error(`Invalid RHS symbol`);this.outputDims.push(t.dimValue)}}),this.rhs=this.processTerm(r,!1,this.outputDims)}addSymbol(e,t,n){let r=this.symbolToInfo.get(e);if(r!==void 0){if(r.dimValue!==t&&r.count!==1)throw Error(`Dimension mismatch`);r.count++,r.inputIndices.push(n)}else r={count:1,dimValue:t,inputIndices:[n]};this.symbolToInfo.set(e,r)}processTerm(e,t,n,r=-1){let i=n.length,a=!1,o=[],s=0;if(!e.match(RegExp(JC))&&!t&&e!==``)throw Error(`Invalid LHS term`);let c=e.match(RegExp(KC,`g`)),l=new ZC(r);return c?.forEach((e,u)=>{if(e===`...`){if(a)throw Error(`Only one ellipsis is allowed per input term`);a=!0;let e=i-c.length+1;if(e<0)throw Error(`Ellipsis out of bounds`);if(o=n.slice(s,s+e),this.hasEllipsis){if(this.ellipsisDims.length!==o.length||this.ellipsisDims.toString()!==o.toString())throw Error(`Ellipsis dimensions mismatch`)}else if(t)this.hasEllipsis=!0,this.ellipsisDims=o;else throw Error(`Ellipsis must be specified in the LHS`);for(let e=0;e<o.length;e++){let t=String.fromCharCode(48+e);l.addSymbol(t,u+e),this.addSymbol(t,n[s++],r)}}else l.addSymbol(e,u+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(e,n[s++],r)}),l}},$C=e=>e+`_max`,ew=(e,t,n,r)=>{let i=e.map(e=>e.length).map((e,n)=>Q(`input${n}`,t,e)),a=J.size(r),o=$(`output`,t,r.length),s=[...n.symbolToInfo.keys()].filter(e=>!n.rhs.symbolToIndices.has(e));return{name:`Einsum`,shaderCache:{hint:n.equation,inputDependencies:e.map(()=>`rank`)},getRunData:()=>{let i=s.filter(e=>n.symbolToInfo.has(e)).map(e=>({type:12,data:n.symbolToInfo.get(e)?.dimValue||0}));i.push({type:12,data:a});let o=e.map((e,t)=>[...X(e)]).reduce((e,t)=>e.concat(t),i);return o.push(...X(r)),{outputs:[{dims:r,dataType:t}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:o}},getShaderSource:e=>{let t=[],r=[],a=[],c=[],l=[],u=n.symbolToInfo.size===n.rhs.symbolToIndices.size;n.symbolToInfo.forEach((e,s)=>{if(n.rhs.symbolToIndices.has(s)){let r=n.rhs.symbolToIndices.get(s)?.[0];r!==void 0&&n.lhs.forEach((n,a)=>{if(e.inputIndices.includes(a)){let e=n.symbolToIndices.get(s);if(e===void 0)throw Error(`Invalid symbol error`);e.forEach(e=>{t.push(`${i[a].indicesSet(`input${a}Indices`,e,o.indicesGet(`outputIndices`,r))}`)})}})}else n.lhs.forEach((t,n)=>{if(e.inputIndices.includes(n)){let e=t.symbolToIndices.get(s);if(e===void 0)throw Error(`Invalid symbol error`);e.forEach(e=>{r.push(`${i[n].indicesSet(`input${n}Indices`,e,`${s}`)}`)}),l.push(`prod *= ${i[n].getByIndices(`input${n}Indices`)};`)}}),a.push(`for(var ${s}: u32 = 0; ${s} < uniforms.${$C(s)}; ${s}++) {`),c.push(`}`)});let d=u?[...t,`let sum = ${i.map((e,t)=>e.getByIndices(`input${t}Indices`)).join(` * `)};`]:[...t,`var sum = 0.0;`,...a,...r,`var prod = 1.0;`,...l,`sum += prod;`,...c];return`
            ${e.registerUniforms(s.map(e=>({name:`${$C(e)}`,type:`u32`}))).registerUniform(`outputSize`,`u32`).declareVariables(...i,o)}

            ${e.mainStart()}
            ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
            var outputIndices = ${o.offsetToIndices(`global_idx`)};
            ${i.map((e,t)=>`var input${t}Indices: ${i[t].type.indices};`).join(`
`)}
            ${d.join(`
`)};
            ${o.setByOffset(`global_idx`,`sum`)};
          }`}}},tw=(e,t)=>{let n=new QC(e.inputs,t.equation),r=n.outputDims,i=e.inputs.map((e,t)=>e.dims);e.compute(ew(i,e.inputs[0].dataType,n,r))},nw=e=>{let t=e.equation.replace(/\s+/g,``);return vy({equation:t})}}),iw,aw,ow,sw,cw,lw=K(()=>{q(),Y(),zy(),iw=e=>{if(!e||e.length!==2)throw Error(`Expand requires 2 input.`);let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=n.length<t.length?0:n.length-t.length,i=t.length<n.length?0:t.length-n.length;for(;r<n.length&&i<t.length;++r,++i)if(n[r]!==t[i]&&n[r]!==1&&t[i]!==1)throw Error(`Expand requires shape to be broadcastable to input`)},aw=(e,t)=>{let n=e.length-t.length,r=[];for(let t=0;t<n;++t)r.push(e[t]);for(let i=0;i<t.length;++i)r.push(t[i]===1?e[i+n]:t[i]);return r},ow=(e,t)=>e.length>t.length?aw(e,t):aw(t,e),sw=e=>{let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=ow(t,n),i=e[0].dataType,a=i===9||J.size(t)===1,o=i===9||t.length>0&&t[t.length-1]%4==0?4:1,s=a||r.length>0&&r[r.length-1]%4==0?4:1,c=Math.ceil(J.size(r)/s),l=e=>{let n=Q(`input`,i,t.length,o),a=$(`output`,i,r.length,s),c;if(i===9){let e=(e,t,r=``)=>`
          let outputIndices${t} = ${a.offsetToIndices(`outputOffset + ${t}u`)};
          let offset${t} = ${n.broadcastedIndicesToOffset(`outputIndices${t}`,a)};
          let index${t} = offset${t} / 4u;
          let component${t} = offset${t} % 4u;
          ${e}[${t}] = ${r}(${n.getByOffset(`index${t}`)}[component${t}]);
        `;c=`
        let outputOffset = global_idx * ${s};
        var data = vec4<u32>(0);
        ${e(`data`,0,`u32`)}
        ${e(`data`,1,`u32`)}
        ${e(`data`,2,`u32`)}
        ${e(`data`,3,`u32`)}
        ${a.setByOffset(`global_idx`,`data`)}
      }`}else c=`
        let outputIndices = ${a.offsetToIndices(`global_idx * ${s}`)};
        let inputOffset = ${n.broadcastedIndicesToOffset(`outputIndices`,a)};
        let data = ${a.type.value}(${n.getByOffset(`inputOffset / ${o}`)});
        ${a.setByOffset(`global_idx`,`data`)}
      }`;return`
    ${e.registerUniform(`vec_size`,`u32`).declareVariables(n,a)}
    ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.vec_size`)}
    ${c}`},u=[{type:12,data:c},...X(t,r)];return{name:`Expand`,shaderCache:{hint:`${r.length};${o}${s}`,inputDependencies:[`rank`]},getShaderSource:l,getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:u})}},cw=e=>{iw(e.inputs),e.compute(sw(e.inputs),{inputs:[0]})}}),uw,dw,fw=K(()=>{q(),Y(),zy(),aS(),uw=e=>{let t=e[0].dataType,n=J.size(e[0].dims),r=J.size(e[1].dims),i=r%4==0;return{name:`FastGeluWithBias`,shaderCache:{hint:`${i}`,inputDependencies:[`type`,`type`]},getShaderSource:e=>{let n=Q(`x`,t,[1],4),r=Q(`bias`,t,[1],4),a=$(`y`,t,[1],4),o=[{name:`output_vec_size`,type:`u32`},{name:`bias_size`,type:`u32`}],s=e=>`
      let bias${e}_offset: u32 = (global_idx * 4 + ${e}) % uniforms.bias_size;
      let bias${e} = ${r.getByOffset(`bias${e}_offset / 4`)}[bias${e}_offset % 4];`,c=i?`
      let bias = ${r.getByOffset(`global_idx % (uniforms.bias_size / 4)`)};`:`${s(0)}${s(1)}${s(2)}${s(3)}
      let bias = ${n.type.value}(bias0, bias1, bias2, bias3);`;return`${e.registerUniforms(o).declareVariables(n,r,a)}

    ${Zx(ky(t))}

    ${e.mainStart(Ey)}
      ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_vec_size`)}

      let x = ${n.getByOffset(`global_idx`)};
      ${c}
      let x_in = x + bias;
      ${a.setByOffset(`global_idx`,Qx(`x_in`))}
    }`},getRunData:e=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],programUniforms:[{type:12,data:Math.ceil(n/4)},{type:12,data:r}],dispatchGroup:{x:Math.ceil(n/Ey/4)}})}},dw=e=>{e.inputs.length<2||J.size(e.inputs[1].dims)===0?$x(e):e.compute(uw(e.inputs))}}),pw,mw,hw,gw,_w=K(()=>{q(),Y(),yy(),zy(),pw=e=>{if(!e||e.length!==2)throw Error(`Gather requires 2 inputs.`)},mw=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,a=J.normalizeAxis(t.axis,i),o=n.slice(0);o.splice(a,1,...r);let s=n[a],c=e[0].dataType===9?4:1,l=Math.ceil(J.size(o)/c),u=[{type:12,data:l},{type:6,data:s},{type:12,data:a},...X(e[0].dims,e[1].dims,o)];return{name:`Gather`,shaderCache:{hint:t.cacheKey,inputDependencies:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:u}),getShaderSource:t=>{let n=Q(`data`,e[0].dataType,e[0].dims.length,c),s=Q(`inputIndices`,e[1].dataType,e[1].dims.length),l=$(`output`,e[0].dataType,o.length,c),u=e=>{let t=r.length,c=`var indicesIndices${e}  = ${s.type.indices}(0);`;for(let n=0;n<t;n++)c+=`${t>1?`indicesIndices${e}[${n}]`:`indicesIndices${e}`} = ${o.length>1?`outputIndices${e}[uniforms.axis + ${n}]`:`outputIndices${e}`};`;c+=`
          var idx${e} = ${s.getByIndices(`indicesIndices${e}`)};
          if (idx${e} < 0) {
            idx${e} = idx${e} + uniforms.axisDimLimit;
          }
          var dataIndices${e} : ${n.type.indices};
        `;for(let n=0,r=0;n<i;n++)n===a?(c+=`${i>1?`dataIndices${e}[${n}]`:`dataIndices${e}`} = u32(idx${e});`,r+=t):(c+=`${i>1?`dataIndices${e}[${n}]`:`dataIndices${e}`} = ${o.length>1?`outputIndices${e}[${r}]`:`outputIndices${e}`};`,r++);return c},d;if(e[0].dataType===9){let e=(e,t,r=``)=>`
          let outputIndices${t} = ${l.offsetToIndices(`outputOffset + ${t}u`)};
          ${u(t)};
          let offset${t} = ${n.indicesToOffset(`dataIndices${t}`)};
          let index${t} = offset${t} / 4u;
          let component${t} = offset${t} % 4u;
          ${e}[${t}] = ${r}(${n.getByOffset(`index${t}`)}[component${t}]);
        `;d=`
        let outputOffset = global_idx * ${c};
        var value = vec4<u32>(0);
        ${e(`value`,0,`u32`)}
        ${e(`value`,1,`u32`)}
        ${e(`value`,2,`u32`)}
        ${e(`value`,3,`u32`)}
        ${l.setByOffset(`global_idx`,`value`)}
      `}else d=`
      let outputIndices = ${l.offsetToIndices(`global_idx`)};
      ${u(``)};
      let value = ${n.getByIndices(`dataIndices`)};
      ${l.setByOffset(`global_idx`,`value`)};
      `;return`
      ${t.registerUniform(`outputSize`,`u32`).registerUniform(`axisDimLimit`,`i32`).registerUniform(`axis`,`u32`).declareVariables(n,s,l)}
      ${t.mainStart()}
        ${t.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
        ${d}
      }`}}},hw=e=>vy({axis:e.axis}),gw=(e,t)=>{let n=e.inputs;pw(n),e.compute(mw(e.inputs,t))}}),vw,yw,bw,xw=K(()=>{q(),Y(),zy(),vw=(e,t,n,r,i,a,o,s,c)=>{let l=[{type:12,data:a},{type:12,data:r},{type:12,data:i},{type:12,data:n},{type:12,data:o},{type:12,data:s},{type:12,data:c}],u=[a];return l.push(...X(t.dims,u)),e.compute({name:`computeSliceOffsets`,shaderCache:{hint:`${i.length}_${n.length}`,inputDependencies:[`rank`]},getRunData:()=>({outputs:[{dims:u,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:l}),getShaderSource:e=>{let r=[Q(`indices_data`,t.dataType,t.dims.length),$(`input_slice_offsets_data`,12,1,1)],a=[{name:`output_size`,type:`u32`},{name:`batch_dims`,type:`u32`},{name:`input_dims`,type:`u32`,length:i.length},{name:`sizes_from_slice_dims_data`,type:`u32`,length:n.length},{name:`num_slices_per_batch`,type:`u32`},{name:`input_batch_stride`,type:`u32`},{name:`num_slice_dims`,type:`u32`}];return`
  ${e.registerUniforms(a).declareVariables(...r)}
  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${i.length===1?`index += i32(uniforms.input_dims);`:`index += i32(uniforms.input_dims[input_dim_idx]);`}
      }
      ${n.length===1?`relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);`:`relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);`}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`}},{inputs:[t],outputs:[-1]})[0]},yw=(e,t)=>{let n=e.inputs,r=n[0].dims,i=n[0].dataType,a=n[1].dims,o=a[a.length-1],s=J.sizeToDimension(a,a.length-1),c=J.sizeFromDimension(r,t.batchDims+o),l=J.sizeToDimension(r,t.batchDims),u=J.sizeFromDimension(r,t.batchDims),d=s/l,f=Array(o),p=c;for(let e=0;e<o;++e)f[o-1-e]=p,p*=r[t.batchDims+o-1-e];let m=vw(e,n[1],f,t.batchDims,r,s,d,u,o),h=t.batchDims+o;if(h>r.length)throw Error(`last dimension of indices must not be larger than rank of input tensor`);let g=a.slice(0,-1).concat(r.slice(h)),_=J.size(g),v=[{type:12,data:_},{type:12,data:c},...X(n[0].dims,m.dims,g)];e.compute({name:`GatherND`,shaderCache:{hint:t.cacheKey,inputDependencies:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:g,dataType:i}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:v}),getShaderSource:e=>{let t=Q(`data`,n[0].dataType,n[0].dims.length),r=Q(`slice_offsets`,12,m.dims.length),i=$(`output`,n[0].dataType,g.length);return`
          ${e.registerUniform(`output_size`,`u32`).registerUniform(`slice_size`,`u32`).declareVariables(t,r,i)}
            ${e.mainStart()}
            ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`}},{inputs:[n[0],m]})},bw=e=>({batchDims:e.batch_dims,cacheKey:``})}),Sw,Cw,ww,Tw,Ew=K(()=>{q(),Y(),yy(),zy(),Sw=(e,t)=>{if(e.length<3||e.length>4)throw Error(`GatherBlockQuantized requires 3 or 4 inputs.`);let n=J.normalizeAxis(t.quantizeAxis,e[0].dims.length),r=t.blockSize,i=e[0],a=e[2],o=e.length===4?e[3]:void 0;if(a.dims.length!==i.dims.length||!i.dims.map((e,t)=>t===n?Math.ceil(e/r)===a.dims[t]:e===a.dims[t]).reduce((e,t)=>e&&t,!0))throw Error(`Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.`);if(o){if(o.dataType!==i.dataType)throw Error(`Zero point must have the same data type as the input tensor.`);if(o.dims.length!==a.dims.length||!o.dims.map((e,t)=>e===a.dims[t]).reduce((e,t)=>e&&t,!0))throw Error(`Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.`)}},Cw=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,a=J.normalizeAxis(t.gatherAxis,i),o=J.normalizeAxis(t.quantizeAxis,i),s=n.slice(0);s.splice(a,1,...r);let c=J.size(s),l=e[2].dataType,u=e[0].dataType===22,d=[{type:12,data:c},{type:12,data:o},{type:12,data:a},{type:12,data:t.blockSize},...X(...e.map((e,t)=>e.dims),s)];return{name:`GatherBlockQuantized`,shaderCache:{hint:`${t.cacheKey};${e.filter((e,t)=>t!==1).map(e=>e.dims.join(`_`)).join(`;`)}`,inputDependencies:Array.from({length:e.length},(e,t)=>`rank`)},getRunData:()=>({outputs:[{dims:s,dataType:l}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:d}),getShaderSource:t=>{let i=Q(`data`,e[0].dataType,e[0].dims.length),o=Q(`inputIndices`,e[1].dataType,e[1].dims.length),c=Q(`scales`,e[2].dataType,e[2].dims.length),d=e.length>3?Q(`zeroPoint`,e[3].dataType,e[3].dims.length):void 0,f=$(`output`,l,s.length),p=[i,o,c];return d&&p.push(d),`
        ${t.registerUniforms([{name:`output_size`,type:`u32`},{name:`quantize_axis`,type:`u32`},{name:`gather_axis`,type:`u32`},{name:`block_size`,type:`u32`}]).declareVariables(...p,f)}
        ${t.mainStart()}
        let output_indices = ${f.offsetToIndices(`global_idx`)};
        var indices_indices = ${o.type.indices}(0);
        ${r.length>1?`
          for (var i: u32 = 0; i < ${r.length}; i++) {
            let index = ${f.indicesGet(`output_indices`,`uniforms.gather_axis + i`)};
            ${o.indicesSet(`indices_indices`,`i`,`index`)};
          }`:`indices_indices = ${f.indicesGet(`output_indices`,`uniforms.gather_axis`)};`};
        var data_indices = ${i.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${f.indicesGet(`output_indices`,`i`)};
          ${i.indicesSet(`data_indices`,`i`,`index`)};
        }
        var index_from_indices = ${o.getByIndices(`indices_indices`)};
        if (index_from_indices < 0) {
          index_from_indices += ${n[a]};
        }
        ${i.indicesSet(`data_indices`,`uniforms.gather_axis`,`u32(index_from_indices)`)};
        for (var i = uniforms.gather_axis + 1; i < ${s.length}; i++) {
          let index = ${f.indicesGet(`output_indices`,`i + ${r.length} - 1`)};
          ${i.indicesSet(`data_indices`,`i`,`index`)};
        }
        let data_offset = ${i.indicesToOffset(`data_indices`)};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${i.getByOffset(`data_offset / 8`)};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${u?`unpack4xI8`:`unpack4xU8`}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${c.indicesGet(`data_indices`,`uniforms.quantize_axis`)} / uniforms.block_size;
        ${c.indicesSet(`scale_indices`,`uniforms.quantize_axis`,`quantize_axis_index`)};
        var scale = ${c.getByIndices(`scale_indices`)};
        ${d?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${d.indicesToOffset(`zero_point_indices`)};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${d.getByOffset(`zero_point_offset / 8`)};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${u?`unpack4xI8`:`unpack4xU8`}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:`var zero_point = 0`};
        let dequantized_data = ${ky(l)}(quantized_data - zero_point) * scale;
        ${f.setByOffset(`global_idx`,`dequantized_data`)};
    }`}}},ww=(e,t)=>{let n=e.inputs;Sw(n,t),e.compute(Cw(e.inputs,t))},Tw=e=>vy({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),Dw,Ow,kw,Aw,jw=K(()=>{q(),Y(),yy(),zy(),Dw=e=>{if(!e||e.length!==2)throw Error(`GatherElements requires 2 inputs.`);if(e[0].dims.length<1)throw Error(`GatherElements requires that the data input be rank >= 1.`);if(e[0].dims.length!==e[1].dims.length)throw Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},Ow=(e,t)=>{let n=e[0].dims,r=e[0].dataType,i=n.length,a=e[1].dims,o=e[1].dataType,s=J.normalizeAxis(t.axis,i),c=n[s],l=a.slice(0),u=J.size(l),d=Q(`input`,r,i),f=Q(`indicesInput`,o,a.length),p=$(`output`,r,l.length),m=[{type:12,data:u},{type:6,data:c},{type:12,data:s}];return m.push(...X(n,a,l)),{name:`GatherElements`,shaderCache:{inputDependencies:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:m}),getShaderSource:e=>`
      ${e.registerUniform(`outputSize`,`u32`).registerUniform(`axisDimLimit`,`i32`).registerUniform(`axis`,`u32`).declareVariables(d,f,p)}
      ${e.mainStart()}
      ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}

      let outputIndices = ${p.offsetToIndices(`global_idx`)};

      var idx = ${f.getByOffset(`global_idx`)};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${d.type.indices}(outputIndices);
      ${d.indicesSet(`inputIndices`,`uniforms.axis`,`u32(idx)`)};
      let value = ${d.getByIndices(`inputIndices`)};

      ${p.setByOffset(`global_idx`,`value`)};
  }`}},kw=e=>vy({axis:e.axis}),Aw=(e,t)=>{let n=e.inputs;Dw(n),e.compute(Ow(e.inputs,t))}}),Mw,Nw,Pw,Fw,Iw=K(()=>{q(),Y(),zy(),Mw=e=>{if(!e)throw Error(`Input is missing`);if(e.length<2||e.length>3)throw Error(`Invaid input number.`);if(e.length===3&&e[2].dims.length>2)throw Error(`Invalid input shape of C`);if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw Error(`Input types are mismatched`)},Nw=(e,t)=>{let n=e[0].dims.slice(),r=e[1].dims.slice(),[i,a,o]=Cy.getShapeOfGemmResult(n,t.transA,r,t.transB,e.length===3?e[2].dims:void 0),s=[i,a];if(!s)throw Error(`Can't use gemm on the given tensors`);let c=Math.ceil(a/16),l=Math.ceil(i/16);J.size(s);let u=[{type:12,data:c},{type:12,data:i},{type:12,data:a},{type:12,data:o},{type:1,data:t.alpha},{type:1,data:t.beta}],d=[`type`,`type`];return e.length===3&&(u.push(...X(e[2].dims)),d.push(`rank`)),u.push(...X(s)),{name:`GemmShared`,shaderCache:{hint:`${t.cacheKey}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:c*l},programUniforms:u}),getShaderSource:n=>{let r=Q(`a`,e[0].dataType,e[0].dims),i=Q(`b`,e[1].dataType,e[1].dims),a=null,o=[r,i];e.length===3&&(a=Q(`c`,e[2].dataType,e[2].dims.length),o.push(a));let c=$(`output`,e[0].dataType,s.length);o.push(c);let l=[{name:`num_tile_n`,type:`u32`},{name:`M`,type:`u32`},{name:`N`,type:`u32`},{name:`K`,type:`u32`},{name:`alpha`,type:`f32`},{name:`beta`,type:`f32`}],u=``,d=``;t.transA&&t.transB?(d=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${r.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${i.type.value}(0);
      }
      `,u=`value += tile_a[k][local_id.y] * tile_b[local_id.x][k];`):t.transA&&!t.transB?(d=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${r.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${i.type.value}(0);
      }
      `,u=`value += tile_a[k][local_id.y] * tile_b[k][local_id.x];`):!t.transA&&t.transB?(d=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${r.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${i.type.value}(0);
      }
      `,u=`value += tile_a[local_id.y][k] * tile_b[local_id.x][k];`):!t.transA&&!t.transB&&(d=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${r.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${i.type.value}(0);
      }
      `,u=`value += tile_a[local_id.y][k] * tile_b[k][local_id.x];`);let f=t.alpha===1?``:`value *= uniforms.alpha;`;return`
  ${n.registerUniforms(l).declareVariables(...o)}
  var<workgroup> tile_a: array<array<${r.type.storage}, 16>, 16>;
  var<workgroup> tile_b: array<array<${i.type.storage}, 16>, 16>;
  ${n.mainStart([16,16,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * 16;
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * 16;
    let num_tiles = (uniforms.K - 1) / 16 + 1;
    var k_start = 0u;
    var value = ${c.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${d}
      k_start = k_start + 16;
      workgroupBarrier();

      for (var k: u32 = 0u; k < 16; k++) {
        ${u}
      }
      workgroupBarrier();
    }

    ${f}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${a==null?``:`let cOffset = ${a.broadcastedIndicesToOffset(`vec2(m, n)`,c)}; value += ${c.type.value}(uniforms.beta) * ${a.getByOffset(`cOffset`)};`}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`}}},Pw=e=>({transA:e.transA,transB:e.transB,alpha:e.alpha,beta:e.beta,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}),Fw=(e,t)=>{Mw(e.inputs),e.compute(Nw(e.inputs,t))}}),Lw,Rw,zw,Bw,Vw,Hw,Uw,Ww,Gw,Kw,qw,Jw,Yw,Xw,Zw=K(()=>{q(),Y(),yy(),zy(),[Lw,Rw,zw,Bw]=[0,1,2,3],Vw=e=>{if(e[0].dims.length!==4)throw Error(`only 4-D tensor is supported.`);if(e[0].dims.length!==e[1].dims.length)throw Error(`input dimensions must be equal to grid dimensions`);if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw Error(`grid batch size must match input batch size`)},Hw=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,Uw=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,Ww=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,Gw=e=>`
  ${e.paddingMode===`reflection`?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:``}
`,Kw=(e,t,n)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${Lw}] = batch;
     indices[${Rw}] = channel;`+(()=>{switch(n.paddingMode){case`zeros`:return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${zw}] = u32(r);
            indices[${Bw}] = u32(c);
          }
        `;case`border`:return`
          indices[${zw}] = u32(clamp(r, 0, H - 1));
          indices[${Bw}] = u32(clamp(c, 0, W - 1));
        `;case`reflection`:return`
          indices[${zw}] = gs_reflect(r, border[1], border[3]);
          indices[${Bw}] = gs_reflect(c, border[0], border[2]);
        `;default:throw Error(`padding mode ${n.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices(`indices`)};
  }
`,qw=(e,t,n)=>(()=>{switch(n.mode){case`nearest`:return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${Lw}], indices[${Rw}], border);
        `;case`bilinear`:return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${Lw}], indices[${Rw}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${Lw}], indices[${Rw}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${Lw}], indices[${Rw}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${Lw}], indices[${Rw}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case`bicubic`:return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${Lw}], indices[${Rw}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw Error(`mode ${n.mode} is not supported`)}})()+`${e.setByOffset(`global_idx`,`result`)}`,Jw=(e,t)=>{let n=Q(`x`,e[0].dataType,e[0].dims.length),r=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],i=Q(`grid`,e[1].dataType,r.length,2),a=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format===`NHWC`&&(a=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[Lw,Rw,zw,Bw]=[0,3,1,2]);let o=$(`output`,e[0].dataType,a.length),s=n.type.value,c=[{type:12,data:J.size(a)},...X(e[0].dims,r,a)];return{name:`GridSample`,shaderCache:{hint:`${t.cacheKey}`,inputDependencies:[`type`,`type`]},getRunData:e=>{let t=J.size(a);return{outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(t/64)},programUniforms:c}},getShaderSource:e=>`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(n,i,o)}
  ${Hw}
  ${Uw(s)}
  ${Ww(t)}
  ${Gw(t)}
  ${Kw(n,s,t)}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
      let H_in = i32(uniforms.x_shape[${zw}]);
      let W_in = i32(uniforms.x_shape[${Bw}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${o.offsetToIndices(`global_idx`)};
      var grid_indices = vec3<u32>(indices[${Lw}], indices[${zw}], indices[${Bw}]);
      let nxy = ${i.getByIndices(`grid_indices`)};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${qw(o,s,t)}
  }`}},Yw=(e,t)=>{Vw(e.inputs),e.compute(Jw(e.inputs,t))},Xw=e=>vy({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),Qw,$w,eT,tT,nT,rT,iT,aT=K(()=>{q(),Y(),yy(),oy(),ix(),zy(),Yy(),Qw=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,$w=(e,t)=>{let n=e[0],r=Qw(e,1),i=Qw(e,2),a=Qw(e,3),o=Qw(e,4),s=Qw(e,5),c=Qw(e,6),l=Qw(e,7);if(n.dims.length!==3&&n.dims.length!==5)throw Error(`Input query is expected to have 3 or 5 dimensions`);let u=n.dims[0],d=n.dims[1],f=n.dims.length===3?n.dims[2]:t.numHeads*n.dims[4],p=d,m=0,h=0,g=Math.floor(f/t.numHeads);if(c&&l&&J.size(c.dims)&&J.size(l.dims)){if(c.dims.length!==4)throw Error(`Input "past_key" is expected to have 4 dimensions`);if(c.dims[0]!==u||c.dims[1]!==t.numHeads||c.dims[3]!==g)throw Error(`Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)`);if(l.dims[0]!==u||l.dims[1]!==t.numHeads||l.dims[3]!==g)throw Error(`Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)`);if(c.dims[2]!==l.dims[2])throw Error(`Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)`);if(l.dims.length!==4)throw Error(`Input "past_value" is expected to have 4 dimensions`);m=c.dims[2],h=c.dims[2]}else if(c&&J.size(c.dims)||l&&J.size(l.dims))throw Error(`Input "past_key" and "past_value" shall be both present or both absent`);let _;if(r&&J.size(r.dims)>0){if(n.dims.length!==3)throw Error(`Input "query" is expected to have 3 dimensions when key is given`);if(r.dims.length<3||r.dims.length>5)throw Error(`Input "key" is expected to have 3, 4, or 5 dimensions`);if(n.dims[0]!==r.dims[0])throw Error(`Input "query" and "key" shall have same dim 0 (batch size)`);if(r.dims.length===3){if(r.dims[2]!==n.dims[2])throw Error(`Input "query" and "key" shall have same dim 2 (hidden_size)`);_=2,p=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==g)throw Error(`Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv`);if(i)throw Error(`Expect "value" be none when "key" has packed kv format.`);_=5,p=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==g)throw Error(`Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key`);_=0,p=r.dims[2]}}else{if(n.dims.length!==5)throw Error(`Input "query" is expected to have 5 dimensions when key is empty`);if(n.dims[2]!==t.numHeads||n.dims[3]!==3)throw Error(`Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv`);_=3}if(a&&J.size(a.dims)>0){if(a.dims.length!==1)throw Error(`Input "bias" is expected to have 1 dimension`);if(r&&r.dims.length===5&&r.dims[3]===2)throw Error(`bias is not allowed for packed kv.`)}let v=m+p,y=0;if(o&&J.size(o.dims)>0){y=8;let e=o.dims;throw e.length===1?e[0]===u?y=1:e[0]===3*u+2&&(y=3):e.length===2&&e[0]===u&&e[1]===v&&(y=5),Error(y===8?`Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)`:`Mask not supported`)}let b=!1,x=f;if(i&&J.size(i.dims)>0){if(i.dims.length!==3&&i.dims.length!==4)throw Error(`Input "value" is expected to have 3 or 4 dimensions`);if(n.dims[0]!==i.dims[0])throw Error(`Input "query" and "value" shall have same dim 0 (batch_size)`);if(i.dims.length===3){if(p!==i.dims[1])throw Error(`Input "key" and "value" shall have the same dim 1 (kv_sequence_length)`);x=i.dims[2]}else{if(p!==i.dims[2])throw Error(`Input "key" and "value" shall have the same dim 2 (kv_sequence_length)`);x=i.dims[1]*i.dims[3],b=!0}}if(o&&J.size(o.dims)>0)throw Error(`Key padding mask is not supported`);if(s&&J.size(s.dims)>0){if(s.dims.length!==4)throw Error(`Input "attention_bias" is expected to have 4 dimensions`);if(s.dims[0]!==u||s.dims[1]!==t.numHeads||s.dims[2]!==d||s.dims[3]!==v)throw Error(`Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)`)}return{batchSize:u,sequenceLength:d,pastSequenceLength:m,kvSequenceLength:p,totalSequenceLength:v,maxSequenceLength:h,inputHiddenSize:0,hiddenSize:f,vHiddenSize:x,headSize:g,vHeadSize:Math.floor(x/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:y,scale:t.scale,broadcastResPosBias:!1,passPastInKv:b,qkvFormat:_}},eT=e=>vy({...e}),tT=vy({perm:[0,2,1,3]}),nT=(e,t,n,r,i,a,o)=>{let s=[r,i,a],c=J.size(s),l=[{type:12,data:c},{type:12,data:o},{type:12,data:a}];return e.compute({name:`MultiHeadAttentionAddBias`,shaderCache:{inputDependencies:[`type`,`type`]},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:l}),getShaderSource:e=>{let r=$(`qkv_with_bias`,t.dataType,s),i=Q(`qkv`,t.dataType,s),a=Q(`bias`,n.dataType,s);return`
  ${e.registerUniforms([{name:`output_size`,type:`u32`},{name:`bias_offset`,type:`u32`},{name:`hidden_size`,type:`u32`}]).declareVariables(i,a,r)}
  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`}},{inputs:[t,n],outputs:[-1]})[0]},rT=(e,t,n,r,i,a,o,s)=>{let c=a;if(o&&J.size(o.dims)>0){if(r===1)throw Error(`AddBiasReshape is not implemented. Please export your model with packed QKV or KV`);return c=nT(e,a,o,t,r,n*i,s),c=c.reshape([t,r,n,i]),n===1||r===1?c:e.compute(Ky(c,tT.perm),{inputs:[c],outputs:[-1]})[0]}return a.dims.length===3&&(c=a.reshape([t,r,n,i])),n===1||r===1?c:e.compute(Ky(c,tT.perm),{inputs:[c],outputs:[-1]})[0]},iT=(e,t)=>{let n=$w(e.inputs,t),r=e.inputs[0],i=Qw(e.inputs,1),a=Qw(e.inputs,2),o=Qw(e.inputs,3),s=Qw(e.inputs,4),c=Qw(e.inputs,5),l=Qw(e.inputs,6),u=Qw(e.inputs,7);if(r.dims.length===5)throw Error(`Packed QKV is not implemented`);if(i?.dims.length===5)throw Error(`Packed KV is not implemented`);let d=i&&a&&i.dims.length===4&&a.dims.length===4,f=rT(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,r,o,0);if(d)return tx(e,f,i,a,s,void 0,l,u,c,n);if(!i||!a)throw Error(`key and value must be provided`);let p=rT(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.headSize,i,o,n.hiddenSize),m=rT(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.vHeadSize,a,o,2*n.hiddenSize);tx(e,f,p,m,s,void 0,l,u,c,n)}}),oT,sT,cT,lT,uT,dT,fT,pT=K(()=>{q(),Y(),yy(),zy(),oT=e=>{if(!e||e.length<1)throw Error(`too few inputs`)},sT=(e,t)=>{let n=[],r=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(e=>n.push(Number(e))),r=n.length),vy({numOutputs:r,axis:t.axis,splitSizes:n})},cT=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${Z(`uniforms.size_in_split_axis`,`i`,e)}) {
        return i;
    }
    }
    return ${e}u;
}`,lT=e=>{let t=e.length,n=[];for(let r=0;r<t;++r){let i=e[r].setByIndices(`indices`,`input[global_idx]`);t===1?n.push(i):r===0?n.push(`if (output_number == ${r}u) { ${i} }`):r===t-1?n.push(`else { ${i} }`):n.push(`else if (output_number == ${r}) { ${i} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${n.join(`
`)}
      }`},uT=(e,t)=>{let n=e[0].dims,r=J.size(n),i=e[0].dataType,a=J.normalizeAxis(t.axis,n.length),o=Array(t.numOutputs),s=Q(`input`,i,n.length),c=Array(t.numOutputs),l=[],u=[],d=0,f=[{type:12,data:r}];for(let r=0;r<t.numOutputs;r++){d+=t.splitSizes[r],c[r]=d;let s=n.slice();s[a]=t.splitSizes[r],u.push(s),o[r]=$(`output${r}`,i,s.length),l.push({dims:u[r],dataType:e[0].dataType})}return f.push({type:12,data:c},...X(n,...u)),{name:`Split`,shaderCache:{hint:t.cacheKey,inputDependencies:[`rank`]},getShaderSource:e=>`
  ${e.registerUniform(`input_size`,`u32`).registerUniform(`size_in_split_axis`,`u32`,c.length).declareVariables(s,...o)}
  ${cT(c.length)}
  ${lT(o)}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.input_size`)}

    var indices = ${s.offsetToIndices(`global_idx`)};
    var index = ${s.indicesGet(`indices`,a)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${Z(`uniforms.size_in_split_axis`,`output_number - 1u`,c.length)};
      ${s.indicesSet(`indices`,a,`index`)};
    }
    writeBufferData(output_number, indices, global_idx);
  }`,getRunData:()=>({outputs:l,dispatchGroup:{x:Math.ceil(r/64)},programUniforms:f})}},dT=(e,t)=>{oT(e.inputs);let n=e.inputs.length===1?t:sT(e.inputs,t);e.compute(uT(e.inputs,n),{inputs:[0]})},fT=e=>{let t=e.axis,n=e.splitSizes,r=e.numOutputs<0?n.length:e.numOutputs;if(r!==n.length)throw Error(`numOutputs and splitSizes lengh must be equal`);return vy({axis:t,numOutputs:r,splitSizes:n})}}),mT,hT,gT,_T,vT=K(()=>{yy(),ix(),aT(),pT(),Yy(),mT=(e,t)=>{if(t.doRotary)throw Error(`GroupQuerryAttention do_rotary attribute is not supported`);if(t.doRotary&&e.length<=7)throw Error(`cos_cache and sin_cache inputs are required if do_rotary is specified`);let n=e[0],r=e[1],i=e[2],a=e[3],o=e[4];if(t.localWindowSize!==-1)throw Error(`Local attention is not supported`);if(t.softcap!==0)throw Error(`Softcap is not supported`);if(t.rotaryInterleaved!==0)throw Error(`Rotary interleaved is not supported`);if(t.smoothSoftmax)throw Error(`Smooth softmax is not supported`);if(n.dims.length!==3&&n.dims.length!==5)throw Error(`Input query is expected to have 3 or 5 dimensions`);let s=n.dims[0],c=n.dims[1],l=n.dims.length===3?n.dims[2]:t.numHeads*n.dims[4],u=c,d=0,f=!r||r.dims.length===0,p=Math.floor(f?l/(t.numHeads+2*t.kvNumHeads):l/t.numHeads);f&&(l=p*t.numHeads);let m=a&&a.dims.length!==0,h=o&&o.dims.length!==0;if(m&&a.dims.length===4&&a.dims[0]===s&&a.dims[1]!==t.kvNumHeads&&a.dims[2]===t.kvNumHeads&&a.dims[3]===p)throw Error(`BSNH pastKey/pastValue is not supported`);if(m&&h){if(a.dims.length!==4)throw Error(`Input "past_key" is expected to have 4 dimensions`);if(o.dims.length!==4)throw Error(`Input "past_value" is expected to have 4 dimensions`);d=a.dims[2]}else if(m||h)throw Error(`Input "past_key" and "past_value" shall be both present or both absent`);let g=1;if(r&&r.dims.length>0){if(n.dims.length!==3)throw Error(`Input "query" is expected to have 3 dimensions when key is given`);if(r.dims.length<3||r.dims.length>5)throw Error(`Input "key" is expected to have 3, 4, or 5 dimensions`);if(n.dims[0]!==r.dims[0])throw Error(`Input "query" and "key" shall have same dim 0 (batch size)`);if(r.dims.length===3){if(n.dims[2]%r.dims[2]!==0)throw Error(`Dimension 2 of "query" should be a multiple of "key"`);u=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==p)throw Error(`Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv`);if(i)throw Error(`Expect "value" be none when "key" has packed kv format.`);u=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==p)throw Error(`Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key`);u=r.dims[2]}}else{if(n.dims.length!==3&&n.dims.length!==5)throw Error(`Input "query" is expected to have 3 or 5 dimensions when key is empty`);if(n.dims.length===5&&(n.dims[2]!==t.numHeads||n.dims[3]!==3))throw Error(`Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv`);g=3}let _=!1,v=t.kvNumHeads?p*t.kvNumHeads:l;if(i&&i.dims.length>0){if(i.dims.length!==3&&i.dims.length!==4)throw Error(`Input "value" is expected to have 3 or 4 dimensions`);if(n.dims[0]!==i.dims[0])throw Error(`Input "query" and "value" shall have same dim 0 (batch_size)`);if(i.dims.length===3){if(u!==i.dims[1])throw Error(`Input "key" and "value" shall have the same dim 1 (kv_sequence_length)`);v=i.dims[2]}else{if(u!==i.dims[2])throw Error(`Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)`);v=i.dims[1]*i.dims[3],_=!0}}let y=e.length>4?e[5]:void 0;if(y&&y.dims.length!==1&&y.dims[0]!==s)throw Error(`Input "seqlens" is expected to have 1 dimension and the same dim 0 as batch_size`);return{batchSize:s,sequenceLength:c,pastSequenceLength:d,kvSequenceLength:u,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:l,vHiddenSize:v,headSize:p,vHeadSize:Math.floor(v/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:0,scale:t.scale,broadcastResPosBias:!1,passPastInKv:_,qkvFormat:g}},hT=vy({perm:[0,2,1,3]}),gT=(e,t,n)=>{let r=t,i=n.kvNumHeads;return t.dims.length===3&&n.kvSequenceLength!==0&&(r=t.reshape([n.batchSize,n.kvSequenceLength,i,n.headSize]),r=e.compute(Ky(r,hT.perm),{inputs:[r],outputs:[-1]})[0]),r},_T=(e,t)=>{let n=mT(e.inputs,t);if(e.inputs[0].dims.length===5)throw Error(`Packed QKV is not implemented`);if(e.inputs[1]?.dims.length===5)throw Error(`Packed KV is not implemented`);let r=e.inputs[0],i=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,a=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,o=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,s=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,c=e.inputs.length>4?e.inputs[5]:void 0,l=e.inputs.length>5?e.inputs[6]:void 0,u=n.kvNumHeads?n.kvNumHeads:n.numHeads,d=vy({axis:2,numOutputs:3,splitSizes:[n.numHeads*n.headSize,u*n.headSize,u*n.headSize]}),[f,p,m]=!i&&!a?e.compute(uT([r],d),{inputs:[r],outputs:[-1,-1,-1]}):[r,i,a],h=rT(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,f,void 0,0);tx(e,h,gT(e,p,n),gT(e,m,n),void 0,void 0,o,s,void 0,n,c,l)}}),yT,bT,xT,ST,CT=K(()=>{q(),Y(),Yy(),zy(),yT=(e,t,n,r,i,a,o,s)=>{let c=Ay(a),l=c===1?`f32`:`vec${c}f`,u=c===1?`vec2f`:`mat2x${c}f`,d=i*o,f=64;d===1&&(f=256);let p=[i,o,a/c],m=[i,o,2],h=[`rank`,`type`,`type`],g=[];return g.push(...X(p,m)),e.compute({name:`InstanceNormComputeChannelScaleShift`,shaderCache:{hint:`${c};${s};${f}`,inputDependencies:h},getRunData:()=>({outputs:[{dims:m,dataType:1}],dispatchGroup:{x:d},programUniforms:g}),getShaderSource:e=>{let i=Q(`x`,t.dataType,3,c),a=[i,Q(`scale`,n.dataType,n.dims),Q(`bias`,r.dataType,r.dims),$(`output`,1,3,2)];return`
  var<workgroup> workgroup_shared : array<${u}, ${f}>;
  const workgroup_size = ${f}u;
  ${e.declareVariables(...a)}
  ${e.mainStart(f)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${l}(0);
    var squared_sum = ${l}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${l}(${i.get(`batch`,`channel`,`h`)});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${u}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${Ny(`workgroup_shared[0][0]`,c)} / f32(hight * ${c});
      let squared_sum_final = ${Ny(`workgroup_shared[0][1]`,c)} / f32(hight * ${c});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${s}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`}},{inputs:[t,n,r],outputs:[-1]})[0]},bT=(e,t,n)=>{let r=t[0].dims,i=r,a=r[0],o=r[1],s=J.sizeFromDimension(r,2),c=Ay(s),l=J.size(i)/c,u=yT(e,t[0],t[1],t[2],a,s,o,n.epsilon),d=[a,o,s/c],f=[a,o];e.compute({name:`InstanceNormalization`,shaderCache:{hint:`${c}`,inputDependencies:[`type`,`none`]},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:[{type:12,data:l},...X(d,f,d)]}),getShaderSource:e=>{let n=Q(`x`,t[0].dataType,d.length,c),r=Q(`scale_shift`,1,f.length,2),i=$(`output`,t[0].dataType,d.length,c),a=[n,r,i];return`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(...a)}
  ${e.mainStart()}
  ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
      let outputIndices = ${i.offsetToIndices(`global_idx`)};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${r.getByIndices(`vec2<u32>(batch, channel)`)};
      let value = ${n.getByOffset(`global_idx`)} * ${i.type.value}(scale_shift.x) + ${i.type.value}(scale_shift.y);
      ${i.setByOffset(`global_idx`,`value`)};
  }`}},{inputs:[t[0],u]})},xT=(e,t,n)=>{let r=t[0].dims,i=r,a=r[0],o=r[r.length-1],s=J.sizeFromDimension(r,1)/o,c=Ay(o),l=J.size(i)/c,u=[{type:12,data:s},{type:12,data:Math.floor(o/c)}],d=[`type`,`type`],f=!1,p=[0,r.length-1];for(let e=0;e<r.length-2;e++)f||=r[e+1]!==1,p.push(e+1);f&&=r[r.length-1]!==1;let m=f?e.compute(Ky(e.inputs[0],p),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:r.length},(e,t)=>r[p[t]])),h=yT(e,m,t[1],t[2],a,s,o,n.epsilon);e.compute({name:`InstanceNormalizationNHWC`,shaderCache:{hint:`${c}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:u}),getShaderSource:e=>{let n=Oy(t[0].dataType),r=c===1?`vec2f`:`mat${c}x2f`,a=e=>{let t=e===0?`x`:`y`,r=c===1?`f32`:`vec${c}f`;switch(c){case 1:return`${n}(${r}(scale.${t}))`;case 2:return`vec2<${n}>(${r}(scale[0].${t}, scale[1].${t}))`;case 4:return`vec4<${n}>(${r}(scale[0].${t}, scale[1].${t}, scale[2].${t}, scale[3].${t}))`;default:throw Error(`Not supported compoents ${c}`)}},o=Q(`input`,t[0].dataType,t[0].dims,c),s=$(`output`,t[0].dataType,i,c);return`
  @group(0) @binding(0) var<storage, read> input : array<${o.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${r}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${s.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${e.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${a(0)}, ${a(1)});
  }`}},{inputs:[t[0],h]})},ST=(e,t)=>{t.format===`NHWC`?xT(e,e.inputs,t):bT(e,e.inputs,t)}}),wT,TT,ET,DT=K(()=>{q(),Y(),zy(),wT=e=>{if(!e||e.length<2)throw Error(`layerNorm requires at least 2 inputs.`)},TT=(e,t,n)=>{let r=t.simplified,i=e[0].dims,a=e[1],o=!r&&e[2],s=i,c=J.normalizeAxis(t.axis,i.length),l=J.sizeToDimension(i,c),u=J.sizeFromDimension(i,c),d=J.size(a.dims),f=o?J.size(o.dims):0;if(d!==u||o&&f!==u)throw Error(`Size of X.shape()[axis:] == ${u}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${d} and bias size of ${f}`);let p=[];for(let e=0;e<i.length;++e)e<c?p.push(i[e]):p.push(1);let m=Ay(u),h=[`type`,`type`],g=[{type:12,data:l},{type:1,data:u},{type:12,data:Math.floor(u/m)},{type:1,data:t.epsilon}];o&&h.push(`type`);let _=n>1,v=n>2,y=t=>{let n=Oy(e[0].dataType),i=[Q(`x`,e[0].dataType,e[0].dims,m),Q(`scale`,a.dataType,a.dims,m)];return o&&i.push(Q(`bias`,o.dataType,o.dims,m)),i.push($(`output`,e[0].dataType,s,m)),_&&i.push($(`mean_data_output`,1,p)),v&&i.push($(`inv_std_output`,1,p)),`
  ${t.registerUniforms([{name:`norm_count`,type:`u32`},{name:`norm_size`,type:`f32`},{name:`norm_size_vectorized`,type:`u32`},{name:`epsilon`,type:`f32`}]).declareVariables(...i)}
  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.norm_count`)}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${jy(`f32`,m)};
    var mean_square_vector = ${jy(`f32`,m)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${My(n,m,`x[h + offset]`)};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${Ny(`mean_vector`,m)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${Ny(`mean_square_vector`,m)} / uniforms.norm_size ${r?``:`- mean * mean`} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${My(n,m,`x[j + offset]`)};
      let f32scale = ${My(n,m,`scale[j]`)};
      output[j + offset] = ${i[0].type.value}((f32input ${r?``:`- mean`}) * inv_std_dev * f32scale
        ${o?`+ ${My(n,m,`bias[j]`)}`:``}
      );
    }

    ${_?`mean_data_output[global_idx] = mean`:``};
    ${v?`inv_std_output[global_idx] = inv_std_dev`:``};
  }`},b=[{dims:s,dataType:e[0].dataType}];return _&&b.push({dims:p,dataType:1}),v&&b.push({dims:p,dataType:1}),{name:`LayerNormalization`,shaderCache:{hint:`${m};${n};${r}`,inputDependencies:h},getRunData:()=>({outputs:b,dispatchGroup:{x:Math.ceil(l/64)},programUniforms:g}),getShaderSource:y}},ET=(e,t)=>{wT(e.inputs),e.compute(TT(e.inputs,t,e.outputCount))}}),OT,kT,AT=K(()=>{Y(),US(),QS(),OT=e=>{if(!e||e.length!==2)throw Error(`MatMul requires 2 inputs.`);if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw Error(`shared dimension does not match.`)},kT=e=>{OT(e.inputs);let t=xy.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw Error(`Can't use matmul on the given tensors`);let n=t[t.length-1],r=e.inputs[0].dims[e.inputs[0].dims.length-1];if(n<8&&r<8)e.compute(HS(e.inputs,{activation:``},t));else{let i=t[t.length-2],a=J.size(e.inputs[0].dims.slice(0,-2)),o=J.size(e.inputs[1].dims.slice(0,-2));if(a!==1&&i===1&&o===1){let i=e.inputs[0].reshape([1,a,r]),o=e.inputs[1].reshape([1,r,n]),s=[1,a,n],c=[i,o];e.compute(ZS(c,{activation:``},t,s),{inputs:c})}else e.compute(ZS(e.inputs,{activation:``},t))}}}),jT,MT,NT,PT,FT,IT=K(()=>{q(),Y(),yy(),zy(),jT=(e,t)=>{if(e.length<3||e.length>4)throw Error(`MatMulNBits requires 3 or 4 inputs`);let n=e[0],r=n.dims.length;if(n.dims[r-1]!==t.k)throw Error(`The last dim of input shape does not match the k value`);let i=Math.floor((t.k+t.blockSize-1)/t.blockSize),a=t.blockSize/8*t.bits,o=e[1];if(!J.areEqual(o.dims,[t.n,i,a]))throw Error(`The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize`);let s=e[2].dims;if(J.size(s)!==t.n*i)throw Error(`scales input size error.`);if(e.length===4){let n=e[3].dims,r=t.bits>4?t.n*i:t.n*Math.floor((i+1)/2);if(J.size(n)!==r)throw Error(`zeroPoints input size error.`)}},MT=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],a=t.k,o=t.n,s=n.slice(0,r-2),c=J.size(s),l=e[1].dims[2]/4,u=e[0].dataType,d=Ay(t.k),f=Ay(l),p=Ay(o),m=s.concat([i,o]),h=i>1&&o/p%2==0?2:1,g=J.size(m)/p/h,_=[],v=[c,i,a/d],y=J.convertShape(e[1].dims).slice();y.splice(-1,1,l/f),_.push(...X(v)),_.push(...X(y)),_.push(...X(e[2].dims)),e.length===4&&_.push(...X(J.convertShape(e[3].dims)));let b=[c,i,o/p];return _.push(...X(b)),{name:`MatMulNBits`,shaderCache:{hint:`${t.blockSize};${t.bits};${d};${f};${p};${h};64`,inputDependencies:Array(e.length).fill(`rank`)},getRunData:()=>({outputs:[{dims:m,dataType:u}],dispatchGroup:{x:g},programUniforms:_}),getShaderSource:n=>{let r=v.length,i=Q(`a`,e[0].dataType,r,d),a=Q(`b`,12,y.length,f),o=Q(`scales`,e[2].dataType,e[2].dims.length),s=[i,a,o],c=e.length===4?Q(`zero_points`,12,e[3].dims.length):void 0;c&&s.push(c);let u=b.length,m=$(`output`,e[0].dataType,u,p),g=Oy(e[0].dataType),_=(()=>{switch(d){case 1:return`array<${g}, 8>`;case 2:return`mat4x2<${g}>`;case 4:return`mat2x4<${g}>`;default:throw Error(`${d}-component is not supported.`)}})(),x=()=>{let e=`
          // reuse a data
            var input_offset = ${i.indicesToOffset(`${i.type.indices}(batch, row, word_offset)`)};
            var a_data: ${_};
            for (var j: u32 = 0; j < ${8/d}; j++) {
              a_data[j] = ${i.getByOffset(`input_offset`)};
              input_offset++;
            }
          `;for(let t=0;t<p*h;t++)e+=`
            b_value = ${f===1?`b${t}_data`:`b${t}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${_}(${Array.from({length:4},(e,t)=>`${g}(b_value_lower[${t}]), ${g}(b_value_upper[${t}])`).join(`, `)});
            b_dequantized_values = ${d===1?`${_}(${Array.from({length:8},(e,n)=>`(b_quantized_values[${n}] - ${c?`zero_point${t}`:`zero_point`}) * scale${t}`).join(`, `)});`:`(b_quantized_values - ${_}(${Array(8).fill(`${c?`zero_point${t}`:`zero_point`}`).join(`,`)})) * scale${t};`};
            workgroup_shared[local_id.x * ${h} + ${Math.floor(t/p)}]${p>1?`[${t%p}]`:``} += ${Array.from({length:8/d},(e,t)=>`${d===1?`a_data[${t}] * b_dequantized_values[${t}]`:`dot(a_data[${t}], b_dequantized_values[${t}])`}`).join(` + `)};
          `;return e},S=()=>{let e=`
            var col_index = col * ${p};
            ${c?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${g}(8);`}
            `;for(let t=0;t<p*h;t++)e+=`
            let scale${t} = ${o.getByOffset(`col_index * nBlocksPerCol + block`)};
            ${c?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${c.getByOffset(`zero_point_word_index`)} >> zero_point_bits_offset;
            let zero_point${t} = ${g}((zero_point_word) & 0xFu);`:``}
            col_index += 1;`;return e},ee=()=>{let e=`col_index = col * ${p};`;for(let t=0;t<p*h;t++)e+=`
            let b${t}_data = ${a.getByIndices(`${a.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return e+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${_};
            var b_dequantized_values: ${_};`,e};return`
        var<workgroup> workgroup_shared: array<${m.type.value}, ${h*64}>;
        ${n.declareVariables(...s,m)}
        ${n.mainStart([64,1,1])}
          let output_indices = ${m.offsetToIndices(`(global_idx / 64) * ${h}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += 64) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/d};
            ${S()}
            for (var word: u32 = 0; word < ${l}; word += ${f}) {
              ${ee()}
              for (var i: u32 = 0; i < ${f}; i++) {
                ${x()}
                word_offset += ${8/d};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${h}) {
            var output_value: ${m.type.value} = ${m.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < 64u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${h};
            }
            ${m.setByIndices(`${m.type.indices}(batch, row, col + local_id.x)`,`output_value`)};
          }
        }`}}},NT=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],a=t.k,o=t.n,s=n.slice(0,r-2),c=J.size(s),l=e[1].dims[2]/4,u=e[0].dataType,d=Ay(t.k),f=Ay(l),p=s.concat([i,o]),m=o%8==0?8:o%4==0?4:1,h=128/m,g=h*f*8,_=g/d,v=g/t.blockSize,y=J.size(p)/m,b=[],x=[c,i,a/d],S=J.convertShape(e[1].dims).slice();S.splice(-1,1,l/f),b.push(...X(x)),b.push(...X(S)),b.push(...X(e[2].dims)),e.length===4&&b.push(...X(J.convertShape(e[3].dims)));let ee=[c,i,o];return b.push(...X(ee)),{name:`BlockwiseMatMulNBits32`,shaderCache:{hint:`${t.blockSize};${d};${f};${h};${m}`,inputDependencies:Array(e.length).fill(`rank`)},getRunData:()=>({outputs:[{dims:p,dataType:u}],dispatchGroup:{x:y},programUniforms:b}),getShaderSource:n=>{let r=x.length,i=Q(`a`,e[0].dataType,r,d),a=Q(`b`,12,S.length,f),o=Q(`scales`,e[2].dataType,e[2].dims.length),s=[i,a,o],c=e.length===4?Q(`zero_points`,12,e[3].dims.length):void 0;c&&s.push(c);let l=ee.length,u=$(`output`,e[0].dataType,l),p=Oy(e[0].dataType),g=()=>{switch(d){case 1:return`
          let a_data0 = vec4<${p}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${p}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${p}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${p}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw Error(`${d}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${i.type.value}, ${_}>;
        var<workgroup> inter_results: array<array<${u.type.value}, ${h}>, ${m}>;
        ${n.declareVariables(...s,u)}
        ${n.mainStart([h,m,1])}
          let output_indices = ${u.offsetToIndices(`workgroup_index * ${m}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${v} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${_};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${_}; a_offset += 128)
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${i.getByIndices(`${i.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${i.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${v} + local_id.x;
            ${c?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${c.getByOffset(`zero_point_word_index`)} >> zero_point_bits_offset;
            let zero_point = ${p}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${p}(8);`}
            let scale = ${o.getByOffset(`b_row * n_blocks_per_col + block`)};
            let b_data = ${a.getByIndices(`${a.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/d};
            for (var i: u32 = 0; i < ${f}; i++) {
              ${g()}
              let b_value = ${f===1?`b_data`:`b_data[i]`};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${p}>(${Array.from({length:4},(e,t)=>`${p}(b_value_lower[${t}]), ${p}(b_value_upper[${t}])`).join(`, `)});
              let b_dequantized_values = (b_quantized_values - mat2x4<${p}>(${Array(8).fill(`zero_point`).join(`,`)})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(e,t)=>`${`dot(a_data${t}, b_dequantized_values[${t}])`}`).join(` + `)};
              word_offset += ${8/d};
            }
            workgroupBarrier();
          }

          if (local_idx < ${m}) {
            var output_value: ${u.type.value} = ${u.type.value}(0);
            for (var b = 0u; b < ${h}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${u.setByIndices(`${u.type.indices}(batch, row, col + local_idx)`,`output_value`)}
            }
          }
        }`}}},PT=(e,t)=>{jT(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor(`intel`)&&e.adapterInfo.isArchitecture(`gen-12lp`)?e.compute(NT(e.inputs,t)):e.compute(MT(e.inputs,t))},FT=e=>vy(e)}),LT,RT,zT,BT,VT,HT,UT,WT,GT,KT=K(()=>{q(),Y(),zy(),LT=e=>{if(!e||e.length<1)throw Error(`Too few inputs`);if(e[0].dataType!==1&&e[0].dataType!==10)throw Error(`Input type must be float or float16.`);if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw Error(`The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].`)}},RT=(e,t,n)=>{let r=``;for(let i=t-1;i>=0;--i)r+=`
            k = i32(${e.indicesGet(`indices`,i)}) - ${Z(`uniforms.pads`,i,n)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${Z(`uniforms.x_shape`,i,t)})) {
              break;
            }
            offset += k * i32(${Z(`uniforms.x_strides`,i,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${r}
            value = x[offset];
          }
      `},zT=(e,t,n)=>{let r=``;for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet(`indices`,i)}) - ${Z(`uniforms.pads`,i,n)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${Z(`uniforms.x_shape`,i,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${Z(`uniforms.x_shape`,i,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${Z(`uniforms.x_strides`,i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},BT=(e,t,n)=>{let r=``;for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet(`indices`,i)}) - ${Z(`uniforms.pads`,i,n)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${Z(`uniforms.x_shape`,i,t)})) {
                  k = i32(${Z(`uniforms.x_shape`,i,t)}) - 1;
                }
                offset += k * i32(${Z(`uniforms.x_strides`,i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},VT=(e,t,n)=>{let r=``;for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet(`indices`,i)}) - ${Z(`uniforms.pads`,i,n)};
                if (k < 0)  {
                  k += i32(${Z(`uniforms.x_shape`,i,t)}]);
                }
                if (k >= i32(${Z(`uniforms.x_shape`,i,t)})) {
                  k -= i32(${Z(`uniforms.x_shape`,i,t)});
                }
                offset += k * i32(${Z(`uniforms.x_strides`,i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},HT=(e,t,n)=>{switch(n.mode){case 0:return RT(e,t,n.pads.length);case 1:return zT(e,t,n.pads.length);case 2:return BT(e,t,n.pads.length);case 3:return VT(e,t,n.pads.length);default:throw Error(`Invalid mode`)}},UT=(e,t)=>{let n=J.padShape(e[0].dims.slice(),t.pads),r=e[0].dims,i=[{type:12,data:J.size(n)},{type:6,data:t.pads}],a=e.length>=3&&e[2].data;return t.mode===0&&i.push({type:a?e[2].dataType:1,data:t.value}),i.push(...X(e[0].dims,n)),{name:`Pad`,shaderCache:{hint:`${t.mode}${a}`,inputDependencies:[`rank`]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(J.size(n)/64)},programUniforms:i}),getShaderSource:i=>{let o=$(`output`,e[0].dataType,n.length),s=Q(`x`,e[0].dataType,r.length),c=s.type.value,l=HT(o,r.length,t),u=[{name:`output_size`,type:`u32`},{name:`pads`,type:`i32`,length:t.pads.length}];return t.mode===0&&u.push({name:`constant_value`,type:a?c:`f32`}),`
            ${i.registerUniforms(u).declareVariables(s,o)}
            ${i.mainStart()}
            ${i.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}

            let indices = ${o.offsetToIndices(`global_idx`)};

            var value = ${c}(0);
            ${l}
            output[global_idx] = value;
        }`}}},WT=(e,t)=>{if(e.length>1){let n=e[1].getBigInt64Array(),r=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,i=e[0].dims.length,a=new Int32Array(2*i).fill(0);if(e.length>=4){let t=e[3].getBigInt64Array();for(let e=0;e<t.length;e++)a[Number(t[e])]=Number(n[e]),a[Number(t[e])+i]=Number(n[e+t.length])}else n.forEach((e,t)=>a[Number(t)]=Number(e));let o=[];return a.forEach(e=>o.push(e)),{mode:t.mode,value:r,pads:o}}return t},GT=(e,t)=>{LT(e.inputs);let n=WT(e.inputs,t);e.compute(UT(e.inputs,n),{inputs:[0]})}}),qT,JT,YT,XT,ZT,QT,$T,eE,tE,nE,rE,iE,aE,oE,sE,cE,lE,uE,dE,fE=K(()=>{K_(),q(),Y(),zy(),qT=e=>{if(c_.webgpu.validateInputContent&&(!e||e.length!==1))throw Error(`Pool ops requires 1 input.`)},JT=(e,t,n)=>{let r=t.format===`NHWC`,i=e.dims.slice();r&&i.splice(1,0,i.pop());let a=Object.hasOwnProperty.call(t,`dilations`),o=t.kernelShape.slice(),s=t.strides.slice(),c=a?t.dilations.slice():[],l=t.pads.slice();Sy.adjustPoolAttributes(n,i,o,s,c,l);let u=Sy.computePoolOutputShape(n,i,s,c,o,l,t.autoPad),d=Object.assign({},t);a?Object.assign(d,{kernelShape:o,strides:s,pads:l,dilations:c,cacheKey:t.cacheKey}):Object.assign(d,{kernelShape:o,strides:s,pads:l,cacheKey:t.cacheKey});let f=u.slice();return f.push(f.splice(1,1)[0]),[d,r?f:u]},YT=(e,t)=>{let n=t.format===`NHWC`,r=J.size(e),i=J.size(t.kernelShape),a=[{type:12,data:r},{type:12,data:i}],o=[{name:`outputSize`,type:`u32`},{name:`kernelSize`,type:`u32`}];if(t.kernelShape.length<=2){let e=t.kernelShape[t.kernelShape.length-1],n=t.strides[t.strides.length-1],r=t.pads[t.pads.length/2-1],i=t.pads[t.pads.length-1],s=!!(r+i);a.push({type:12,data:e},{type:12,data:n},{type:12,data:r},{type:12,data:i}),o.push({name:`kw`,type:`u32`},{name:`sw`,type:`u32`},{name:`pwStart`,type:`u32`},{name:`pwEnd`,type:`u32`});let c=!1;if(t.kernelShape.length===2){let e=t.kernelShape[t.kernelShape.length-2],n=t.strides[t.strides.length-2],r=t.pads[t.pads.length/2-2],i=t.pads[t.pads.length-2];c=!!(r+i),a.push({type:12,data:e},{type:12,data:n},{type:12,data:r},{type:12,data:i}),o.push({name:`kh`,type:`u32`},{name:`sh`,type:`u32`},{name:`phStart`,type:`u32`},{name:`phEnd`,type:`u32`})}return[a,o,!0,s,c]}{if(n)throw Error(`Pooling with kernelShape.length > 2 is not supported for NHWC format.`);let e=J.computeStrides(t.kernelShape);return a.push({type:12,data:e},{type:12,data:t.pads},{type:12,data:t.strides}),o.push({name:`kernelStrides`,type:`u32`,length:e.length},{name:`pads`,type:`u32`,length:t.pads.length},{name:`strides`,type:`u32`,length:t.strides.length}),[a,o,!!t.pads.reduce((e,t)=>e+t),!1,!1]}},XT=(e,t,n,r,i,a,o,s,c,l,u,d)=>{let f=i.format===`NHWC`,p=t.type.value,m=$(`output`,t.type.tensor,r);if(i.kernelShape.length<=2){let r=``,l=``,h=``,g=n-(f?2:1);if(r=u?`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${g}] = indices[${g}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${g}] < 0 || xIndices[${g}]
                      >= uniforms.x_shape[${g}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset(`xIndices`)}];
                  ${a}
                }`:`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${g}] = indices[${g}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset(`xIndices`)}];
                  ${a}
                }`,i.kernelShape.length===2){let e=n-(f?3:2);l=d?`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${e}] = indices[${e}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${e}] < 0 || xIndices[${e}] >= uniforms.x_shape[${e}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${e}] = indices[${e}] * uniforms.sh - uniforms.phStart + j;
                `,h=`
              }
            `}return`
            ${e.registerUniforms(c).declareVariables(t,m)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}

              let indices = ${m.offsetToIndices(`global_idx`)};
              var xIndices = ${m.offsetToIndices(`global_idx`)};

              var value = ${p}(${s});
              var pad = 0;
              ${l}
              ${r}
              ${h}
              ${o}

              output[global_idx] = value;
            }`}{if(f)throw Error(`Pooling with kernelShape.length > 2 is not supported for NHWC format.`);let r=i.kernelShape.length,u=i.pads.length,d=``;return d=l?`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset(`xIndices`)}];
                ${a}
              }`:`
              }
              let x_val = x[${t.indicesToOffset(`xIndices`)}];
              ${a}
            `,`
            ${e.registerUniforms(c).declareVariables(t,m)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
              let indices = ${m.offsetToIndices(`global_idx`)};
              var xIndices = ${m.offsetToIndices(`global_idx`)};

              var offsets: array<u32, ${r}>;

              var value = ${p}(${s});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${r-1}u; j++) {
                  offsets[j] = offset / ${Z(`uniforms.kernelStrides`,`j`,r)};
                  offset -= offsets[j] * ${Z(`uniforms.kernelStrides`,`j`,r)};
                }
                offsets[${r-1}] = offset;

                isPad = false;
                for (var j = ${n-r}u; j < ${n}u; j++) {
                  xIndices[j] = indices[j] * ${Z(`uniforms.strides`,`j - ${n-r}u`,r)}
                    + offsets[j - ${n-r}u] - ${Z(`uniforms.pads`,`j - 2u`,u)};
                  ${d}
              }
              ${o}

              output[global_idx] = value;
            }`}},ZT=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,QT=e=>`${ZT(e)};${e.countIncludePad}`,$T=e=>`${ZT(e)};${e.storageOrder};${e.dilations}`,eE=e=>({format:e.format,autoPad:[`NOTSET`,`VALID`,`SAME_UPPER`,`SAME_LOWER`][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),tE=(e,t,n,r)=>{let[i,a]=JT(t,r,n),o=Q(`x`,t.dataType,t.dims.length),s=o.type.value,c=``;i.countIncludePad?c+=`value /= ${s}(uniforms.kernelSize);`:c+=`value /= ${s}(i32(uniforms.kernelSize) - pad);`;let[l,u,d,f,p]=YT(a,i);return l.push(...X(t.dims,a)),{name:e,shaderCache:{hint:`${r.cacheKey};${d};${f};${p}`,inputDependencies:[`rank`]},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(J.size(a)/64)},programUniforms:l}),getShaderSource:e=>XT(e,o,t.dims.length,a.length,i,`value += x_val;`,c,0,u,d,f,p)}},nE=e=>{let t=e.count_include_pad!==0,n=eE(e);if(n.ceilMode!==0)throw Error(`using ceil() in shape computation is not yet supported for AveragePool`);let r={countIncludePad:t,...n,cacheKey:``};return{...r,cacheKey:QT(r)}},rE=(e,t)=>{qT(e.inputs),e.compute(tE(`AveragePool`,e.inputs[0],!1,t))},iE={autoPad:``,ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},aE=e=>{let t=e.format;return{format:t,...iE,cacheKey:t}},oE=(e,t)=>{qT(e.inputs),e.compute(tE(`GlobalAveragePool`,e.inputs[0],!0,t))},sE=(e,t,n,r)=>{let[i,a]=JT(t,r,n),o=Q(`x`,t.dataType,t.dims.length),s=[`rank`],[c,l,u,d,f]=YT(a,i);return c.push(...X(t.dims,a)),{name:e,shaderCache:{hint:`${r.cacheKey};${u};${d};${f}`,inputDependencies:s},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(J.size(a)/64)},programUniforms:c}),getShaderSource:e=>XT(e,o,t.dims.length,a.length,i,`
      value = max(x_val, value);
    `,``,t.dataType===10?-65504:-1e5,l,u,d,f)}},cE=(e,t)=>{qT(e.inputs),e.compute(sE(`MaxPool`,e.inputs[0],!1,t))},lE=e=>{let t=e.storage_order,n=e.dilations,r=eE(e);if(t!==0)throw Error(`column major storage order is not yet supported for MaxPool`);if(r.ceilMode!==0)throw Error(`using ceil() in shape computation is not yet supported for MaxPool`);let i={storageOrder:t,dilations:n,...r,cacheKey:``};return{...i,cacheKey:$T(i)}},uE=e=>{let t=e.format;return{format:t,...iE,cacheKey:t}},dE=(e,t)=>{qT(e.inputs),e.compute(sE(`GlobalMaxPool`,e.inputs[0],!0,t))}}),pE,mE,hE,gE,_E=K(()=>{q(),Y(),yy(),zy(),pE=(e,t)=>{if(e.length<2||e.length>3)throw Error(`DequantizeLinear requires 2 or 3 inputs.`);if(e.length===3&&e[1].dims===e[2].dims)throw Error(`x-scale and x-zero-point must have the same shape.`);if(e.length===3&&e[0].dataType!==e[2].dataType)throw Error(`x and x-zero-point must have the same data type.`);if(e[0].dataType===6&&e.length>2)throw Error(`In the case of dequantizing int32 there is no zero point.`);if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw Error(`scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.`);if(e.length>2){if(e[0].dataType!==e[2].dataType)throw Error(`x and x-zero-point must have the same data type.`);if(e[1].dims.length!==e[2].dims.length)throw Error(`scale and zero-point inputs must have the same rank.`);if(!e[1].dims.map((t,n)=>t===e[2].dims[n]).reduce((e,t)=>e&&t,!0))throw Error(`scale and zero-point inputs must have the same shape.`)}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw Error(`blockSize must be set only for block quantization.`);if(!e[1].dims.map((n,r)=>r===t.axis||n===e[0].dims[r]).reduce((e,t)=>e&&t,!0))throw Error(`For block qunatization, scale input shape to match the input shape except for the axis`);if(e[1].dims.length!==e[0].dims.length)throw Error(`For block qunatization the scale input rank must be the same as the x rank.`);let n=e[0].dims[t.axis],r=e[1].dims[t.axis];if(t.blockSize<Math.ceil(n/r)||t.blockSize>Math.ceil(n/(r-1)-1))throw Error(`blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].`)}},mE=(e,t)=>{let n=J.normalizeAxis(t.axis,e[0].dims.length),r=e[0].dataType,i=r===3,a=e[0].dims,o=e[1].dataType,s=J.size(a),c=r===3||r===2,l=c?[Math.ceil(J.size(e[0].dims)/4)]:e[0].dims,u=e[1].dims,d=e.length>2?e[2]:void 0,f=d?c?[Math.ceil(J.size(d.dims)/4)]:d.dims:void 0,p=u.length===0||u.length===1&&u[0]===1,m=p===!1&&u.length===1,h=Ay(s),g=p&&(!c||h===4),_=g?h:1,v=g&&!c?h:1,y=Q(`input`,c?12:r,l.length,v),b=Q(`scale`,o,u.length),x=d?Q(`zero_point`,c?12:r,f.length):void 0,S=$(`output`,o,a.length,_),ee=[y,b];x&&ee.push(x);let te=[l,u];d&&te.push(f);let ne=[{type:12,data:s/_},{type:12,data:n},{type:12,data:t.blockSize},...X(...te,a)];return{name:`DequantizeLinear`,shaderCache:{hint:t.cacheKey,inputDependencies:x?[`rank`,`rank`,`rank`]:[`rank`,`rank`]},getShaderSource:e=>`
      ${e.registerUniforms([{name:`output_size`,type:`u32`},{name:`axis`,type:`u32`},{name:`block_size`,type:`u32`}]).declareVariables(...ee,S)}
      ${e.mainStart()}
          ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
          let output_indices = ${S.offsetToIndices(`global_idx`)};

          // Set input x
          ${c?`
            let input = ${y.getByOffset(`global_idx / 4`)};
            let x_vec = ${i?`unpack4xI8(input)`:`unpack4xU8(input)`};
            let x_value = ${_===1?`x_vec[global_idx % 4]`:`x_vec`};`:`let x_value = ${y.getByOffset(`global_idx`)};`};

          // Set scale input
          ${p?`let scale_value= ${b.getByOffset(`0`)}`:m?`
            let scale_index = ${S.indicesGet(`output_indices`,`uniforms.axis`)};
            let scale_value= ${b.getByOffset(`scale_index`)};`:`
            var scale_indices: ${b.type.indices} = output_indices;
            let index = ${b.indicesGet(`scale_indices`,`uniforms.axis`)} / uniforms.block_size;
            ${b.indicesSet(`scale_indices`,`uniforms.axis`,`index`)};
            let scale_value= ${b.getByIndices(`scale_indices`)};`};

          // Set zero-point input
          ${x?p?c?`
                let zero_point_input = ${x.getByOffset(`0`)};
                let zero_point_vec =  ${i?`unpack4xI8(zero_point_input)`:`unpack4xU8(zero_point_input)`};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${x.getByOffset(`0`)}`:m?c?`
                let zero_point_index = ${S.indicesGet(`output_indices`,`uniforms.axis`)};
                let zero_point_input = ${x.getByOffset(`zero_point_index / 4`)};
                let zero_point_vec =  ${i?`unpack4xI8(zero_point_input)`:`unpack4xU8(zero_point_input)`};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${S.indicesGet(`output_indices`,`uniforms.axis`)};
                let zero_point_value = ${x.getByOffset(`zero_point_index`)};`:c?`
                let zero_point_offset = ${b.indicesToOffset(`scale_indices`)};
                let zero_point_input = ${x.getByOffset(`zero_point_offset / 4`)};
                let zero_point_vec = ${i?`unpack4xI8(zero_point_input)`:`unpack4xU8(zero_point_input)`};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${x.getByIndices(`scale_indices`)};`:`let zero_point_value = ${c?i?`i32`:`u32`:y.type.value}(0);`};
      // Compute and write output
      ${S.setByOffset(`global_idx`,`${S.type.value}(x_value - zero_point_value) * scale_value`)};
      }`,getRunData:()=>({outputs:[{dims:a,dataType:o}],dispatchGroup:{x:Math.ceil(s/_/64),y:1,z:1},programUniforms:ne})}},hE=(e,t)=>{pE(e.inputs,t),e.compute(mE(e.inputs,t))},gE=e=>vy({axis:e.axis,blockSize:e.blockSize})}),vE,yE,bE,xE=K(()=>{K_(),q(),zy(),vE=(e,t,n)=>{if(e===t||e<t&&n<0||e>t&&n>0)throw Error(`Range these inputs' contents are invalid.`)},yE=(e,t,n,r)=>{let i=Math.abs(Math.ceil((t-e)/n)),a=[i],o=i,s=[{type:12,data:o},{type:r,data:e},{type:r,data:n},...X(a)];return{name:`Range`,shaderCache:{hint:`${r}`},getShaderSource:e=>{let t=$(`output`,r,a.length),n=t.type.value,i=[{name:`outputSize`,type:`u32`},{name:`start`,type:n},{name:`delta`,type:n}];return`
        ${e.registerUniforms(i).declareVariables(t)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
        output[global_idx] = uniforms.start + ${n}(global_idx) * uniforms.delta;
      }`},getRunData:()=>({outputs:[{dims:a,dataType:r}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:s})}},bE=e=>{let t=0,n=0,r=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],n=e.inputs[1].getInt32Array()[0],r=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],n=e.inputs[1].getFloat32Array()[0],r=e.inputs[2].getFloat32Array()[0]),c_.webgpu.validateInputContent&&vE(t,n,r),e.compute(yE(t,n,r,e.inputs[0].dataType),{inputs:[]})}}),SE,CE,wE,TE,EE=K(()=>{q(),Y(),yy(),zy(),SE=(e,t,n,r)=>{if(e!==`none`&&r!==`i32`&&r!==`u32`&&r!==`f32`)throw Error(`Input ${r} is not supported with reduction ${e}.`);let i=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,a=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case`none`:return`${t}=${n};`;case`add`:return r===`i32`||r===`u32`?`atomicAdd(&${t}, bitcast<${r}>(${n}));`:`
              ${i}bitcast<${r}>(oldValue) + (${n})${a}`;case`max`:return r===`i32`||r===`u32`?`atomicMax(&${t}, bitcast<${r}>(${n}));`:`
                ${i}max(bitcast<f32>(oldValue), (${n}))${a}`;case`min`:return r===`i32`||r===`u32`?`atomicMin(&${t}, bitcast<${r}>(${n}));`:`${i}min(bitcast<${r}>(oldValue), (${n}))${a}`;case`mul`:return`${i}(bitcast<${r}>(oldValue) * (${n}))${a}`;default:throw Error(`Reduction ${e} is not supported.`)}},CE=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n,a=Math.ceil(J.size(r)/1),o=r[r.length-1],s=J.sizeFromDimension(n,o),c=[{type:12,data:a},{type:12,data:o},{type:12,data:s},...X(e[1].dims,e[2].dims,i)];return{name:`ScatterND`,shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:c}),getShaderSource:n=>{let a=Q(`indices`,e[1].dataType,e[1].dims.length),o=Q(`updates`,e[2].dataType,e[2].dims.length,1),s=t.reduction!==`none`&&t.reduction!==``?Fy(`output`,e[0].dataType,i.length):$(`output`,e[0].dataType,i.length,1);return`
      ${n.registerUniform(`output_size`,`u32`).registerUniform(`last_index_dimension`,`u32`).registerUniform(`num_updates_elements`,`u32`).declareVariables(a,o,s)}
      ${n.mainStart()}
        ${n.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
  var hasDuplicates = false;
  if (${t.reduction===`none`}) {
    let n = ${J.size(r)};
    for (var i = 0; i < n; i = i + 1) {
      for (var j = i + 1; j < n; j = j + 1) {
        var index_i = i32(indices[i].x);
        var index_j = i32(indices[j].x);
        if (index_i == index_j) {
          hasDuplicates = true;
          break;
        }
      }
      if (hasDuplicates) {
        break;
      }
    }
  }

  var data_offset = 0u;
  var indices_start = uniforms.last_index_dimension * global_idx;
  if (${t.reduction===`none`} && hasDuplicates) {
    if (global_idx != 0u) {
      return;
    }
    indices_start = 0u;
  }
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start + uniforms.last_index_dimension];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${SE(t.reduction,`output[data_offset + i]`,`value`,s.type.value)}
  }

      }`}}},wE=e=>vy({reduction:e.reduction}),TE=(e,t)=>{e.compute(CE(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),DE,OE,kE,AE,jE,ME,NE,PE,FE,IE,LE,RE,zE,BE,VE,HE,UE,WE,GE,KE,qE=K(()=>{q(),Y(),yy(),zy(),DE=(e,t)=>{if(e.every(e=>e>0||(()=>{throw Error(`Resize requires scales input values to be positive`)})),e.length>0){if(t.mode===`linear`){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode===`cubic`&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw Error(`Resize requires scales input size to be 2 or 4 for cubic mode`)}},OE=(e,t,n)=>{t.every(e=>e>=0&&e<n||(()=>{throw Error(`Resize requires axes input values to be positive and less than rank`)}));let r=Array(n).fill(1);return t.forEach((t,n)=>r[t]=e[n]),r},kE=(e,t,n,r,i,a)=>{let[o,s,c]=n>10?[1,2,3]:[-1,e.length>1?1:-1,-1],l=e[0].dims.length;if(o>0&&e.length>o&&e[o].dims.length>0)e[o].getFloat32Array().forEach(e=>a.push(e));else if(t.coordinateTransformMode===`tf_crop_and_resize`)throw Error(`Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize`);if(s>0&&e.length>s&&e[s].dims.length===1&&e[s].dims[0]>0){if(e[s].getFloat32Array().forEach(e=>r.push(e)),r.length!==0&&r.length!==l&&n>=18&&r.length!==t.axes.length)throw Error(`Resize requires scales input size to be same as input rank or axes size for opset 18 and up`);DE(r,t),t.axes.length>0&&OE(r,t.axes,l).forEach((e,t)=>r[t]=e)}if(c>0&&e.length>c&&e[c].dims.length===1&&e[c].dims[0]>0&&(e[c].getBigInt64Array().forEach(e=>i.push(Number(e))),i.length!==0&&i.length!==l&&n>=18&&i.length!==t.axes.length))throw Error(`Resize requires sizes input size to be same as input rank or axes size for opset 18 and up`);if(t.axes.length>0){if(r.length!==0&&r.length!==t.axes.length)throw Error(`Resize requires "scales" input size to be of axes rank when axes attributes is specified`);if(i.length!==0&&i.length!==t.axes.length)throw Error(`Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified`)}if(typeof r<`u`&&typeof i<`u`&&r.length>0&&i.length>l)throw Error(`Resize requires only of scales or sizes to be specified`)},AE=(e,t,n,r)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${r}(big / (${n}));
  let fract = ${r}(big % (${n})) / ${r}(${n});
  return whole + fract;
`,jE=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case`asymmetric`:return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${AE(`xResized`,`lengthOriginal`,`lengthResized`,t)}
          }
        `;case`pytorch_half_pixel`:return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case`tf_half_pixel_for_nn`:return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case`align_corners`:return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${AE(`xResized`,`lengthOriginal - 1`,`lengthResized - 1`,t)}
                  }`;case`tf_crop_and_resize`:return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case`half_pixel_symmetric`:return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case`half_pixel`:return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw Error(`Coordinate transform mode ${e} is not supported`)}})()+`}`,ME=(e,t,n)=>`fn getNearestPixelFromOriginal(xOriginal: ${n}, isDownSample: bool) -> ${n} {`+(()=>{switch(e){case`round_prefer_ceil`:return`if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }`;case`floor`:return`return floor(xOriginal);`;case`ceil`:return`return ceil(xOriginal);`;case`round_prefer_floor`:return`if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }`;default:if(t<11)return`if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }`;throw Error(`Nearest mode ${e} is not supported`)}})()+`}`,NE=(e,t,n)=>{let r=Array(n).fill(0).concat(Array(n).fill(1)),i=e.length===0?r:e.slice();return t.length>0?(t.forEach((e,a)=>{r[e]=i[a],r[a+n]=i[t.length+a]}),r):i},PE=(e,t,n,r)=>{let i=[];if(n.length>0){if(r.length>0){if(e.forEach(e=>i.push(e)),Math.max(...r)>e.length)throw Error(`axes is out of bound`);r.forEach((e,t)=>i[e]=n[t])}else n.forEach(e=>i.push(e))}else{if(t.length===0)throw Error(`Resize requires either scales or sizes.`);i=e.map((e,n)=>Math.round(e*t[n]))}return i},FE=(e,t,n)=>{let r=(()=>{switch(n.keepAspectRatioPolicy){case`not_larger`:return n.axes.length>0?Math.min(...n.axes.map(e=>t[e]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case`not_smaller`:return n.axes.length>0?Math.max(...n.axes.map(e=>t[e]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw Error(`Keep aspect ratio policy ${n.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let i=e.slice();return n.axes.length>0?(n.axes.forEach(e=>t[e]=r),n.axes.forEach(n=>i[n]=Math.round(e[n]*t[n]))):(t.fill(r,0,t.length),i.forEach((e,n)=>i[n]=Math.round(e*t[n]))),i},IE=(e,t,n,r,i)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${n.length}> {
      var original_indices: array<${e.type.value}, ${n.length}>;
      for (var i:u32 = 0; i < ${n.length}; i++) {
        var output_index = ${e.indicesGet(`output_indices`,`i`)};
        var scale = ${Z(`uniforms.scales`,`i`,r)};
        var roi_low = ${Z(`uniforms.roi`,`i`,i)};
        var roi_hi = ${Z(`uniforms.roi`,`i + ${t.length}`,i)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${Z(`uniforms.input_shape`,`i`,t.length)};
          var output_shape_i = ${Z(`uniforms.output_shape`,`i`,n.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,LE=(e,t,n,r,i,a,o)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${t.indicesGet(`output_indices`,`i`)};
        var input_index: u32;
        var scale = ${Z(`uniforms.scales`,`i`,i)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${Z(`uniforms.roi`,`i`,a)};
          var roi_hi = ${Z(`uniforms.roi`,`i + ${n.length}`,a)};
          var input_shape_i = ${Z(`uniforms.input_shape`,`i`,n.length)};
          var output_shape_i = ${Z(`uniforms.output_shape`,`i`,r.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${o} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet(`input_indices`,`i`,`input_index`)}
      }
      return input_indices;
    }`,RE=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet(`input_indices`,`i`)};
        if (input_index < 0 || input_index >= ${Z(`uniforms.input_shape`,`i`,t.length)}) {
          return false;
        }
      }
      return true;
    }`,zE=(e,t,n,r)=>e.rank>r?`
    ${e.indicesSet(`input_indices`,t,`channel`)};
    ${e.indicesSet(`input_indices`,n,`batch`)};
`:``,BE=(e,t,n,r,i)=>{let[a,o,s,c]=n.length===2?[-1,0,1,-1]:[0,2,3,1],l=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${l} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet(`input_indices`,o,`max(0, min(row, ${n[o]} - 1))`)};
      ${e.indicesSet(`input_indices`,s,`max(0, min(col, ${n[s]} - 1))`)};
      ${zE(e,c,a,2)}
      return ${e.getByIndices(`input_indices`)};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${l} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${l} = originalIndices[${o}];
      var col:${l} = originalIndices[${s}];
      ${r?`if (row < 0 || row > (${n[o]} - 1) || col < 0 || col > (${n[s]} - 1)) {
        return ${i};
      }`:``};
      row = max(0, min(row, ${n[o]} - 1));
      col = max(0, min(col, ${n[s]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${n.length>2?`u32(originalIndices[${c}])`:`0`};
      var batch: u32 =  ${n.length>2?`u32(originalIndices[${a}])`:`0`};
      var x11: ${l} = getInputValue(batch, channel, row1, col1);
      var x12: ${l} = getInputValue(batch, channel, row1, col2);
      var x21: ${l} = getInputValue(batch, channel, row2, col1);
      var x22: ${l} = getInputValue(batch, channel, row2, col2);
      var dx1: ${l} = abs(row - ${l}(row1));
      var dx2: ${l} = abs(${l}(row2) - row);
      var dy1: ${l} = abs(col - ${l}(col1));
      var dy2: ${l} = abs(${l}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},VE=(e,t,n,r,i,a,o,s,c,l)=>{let[u,d]=n.length===2?[0,1]:[2,3],f=e.type.value,p=o=>{let d=o===u?`row`:`col`;return`
      fn ${d}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${f} {
        var output_index = ${t.indicesGet(`output_indices`,o)};
        var originalIdx: ${f} = getOriginalCoordinateFromResizedCoordinate(output_index, ${i[o]},
        ${r[o]}, ${n[o]}, ${a[o]}, ${a[o]} + ${n.length});
        var fractOriginalIdx: ${f} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${s} && (originalIdx < 0 || originalIdx > (${n[o]} - 1))) {
          return ${c};
        }
        var data: array<${f}, 4> = array<${f}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${d}: ${f} = originalIdx + ${f}(i);
          if (${d} < 0 || ${d} >= ${n[o]}) {
            ${l?`coefs[i + 1] = 0.0;
                        continue;`:s?`return ${c};`:`${d} = max(0, min(${d}, ${n[o]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet(`input_indices_copy`,o,`u32(${d})`)};
          data[i + 1] = ${o===u?e.getByIndices(`input_indices_copy`):`rowCubicInterpolation(input_indices_copy, output_indices)`};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${p(u)};
    ${p(d)};
  fn getCubicInterpolationCoefs(s: ${f}) -> array<${f}, 4> {
    var absS = abs(s);
    var coeffs: array<${f}, 4> = array<${f}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${f} = 1.0 - absS;
    var twoMinusAbsS: ${f} = 2.0 - absS;
    var onePlusAbsS: ${f} = 1.0 + absS;
    coeffs[0] = ((${o} * onePlusAbsS - 5 * ${o}) * onePlusAbsS + 8 * ${o}) * onePlusAbsS - 4 * ${o};
    coeffs[1] = ((${o} + 2) * absS - (${o} + 3)) * absS * absS + 1;
    coeffs[2] = ((${o} + 2) * oneMinusAbsS - (${o} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${o} * twoMinusAbsS - 5 * ${o}) * twoMinusAbsS + 8 * ${o}) * twoMinusAbsS - 4 * ${o};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${f}, 4>, coefs: array<${f}, 4>) -> ${f} {
    var coefsSum: ${f} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${f} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},HE=(e,t,n,r,i)=>{let[a,o,s,c,l]=n.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],u=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${u} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet(`input_indices`,o,`max(0, min(depth, ${n[o]} - 1))`)};
      ${e.indicesSet(`input_indices`,s,`max(0, min(height, ${n[s]} - 1))`)};
      ${e.indicesSet(`input_indices`,c,`max(0, min(width, ${n[c]} - 1))`)};
      ${zE(e,l,a,3)}
      return ${e.getByIndices(`input_indices`)};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${u} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${u} = originalIndices[${o}];
      var height:${u} = originalIndices[${s}];
      var width:${u} = originalIndices[${c}];
      ${r?`if (depth < 0 || depth > (${n[o]} - 1) || height < 0 || height > (${n[s]} - 1) || width < 0 || (width > ${n[c]} - 1)) {
      return ${i};
        }`:``};

    depth = max(0, min(depth, ${n[o]} - 1));
      height = max(0, min(height, ${n[s]} - 1));
      width = max(0, min(width, ${n[c]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${n.length>3?`u32(originalIndices[${l}])`:`0`};
      var batch: u32 =  ${n.length>3?`u32(originalIndices[${a}])`:`0`};

      var x111: ${u} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${u} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${u} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${u} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${u} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${u} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${u} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${u} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${u} = abs(depth - ${u}(depth1));
      var dx2: ${u} = abs(${u}(depth2) - depth);
      var dy1: ${u} = abs(height - ${u}(height1));
      var dy2: ${u} = abs(${u}(height2) - height);
      var dz1: ${u} = abs(width - ${u}(width1));
      var dz2: ${u} = abs(${u}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},UE=(e,t,n,r,i,a)=>{let o=e.dims,s=NE(a,t.axes,o.length),c=PE(o,r,i,t.axes),l=r.slice();r.length===0&&(l=o.map((e,t)=>e===0?1:c[t]/e),t.keepAspectRatioPolicy!==`stretch`&&(c=FE(o,l,t)));let u=$(`output`,e.dataType,c.length),d=Q(`input`,e.dataType,o.length),f=J.size(c),p=o.length===c.length&&o.every((e,t)=>e===c[t]),m=t.coordinateTransformMode===`tf_crop_and_resize`,h=t.extrapolationValue,g=d.type.value;return{name:`Resize`,shaderCache:{hint:`${t.cacheKey}|${n}|${l.length>0?t.mode===`cubic`?l:l.length:``}|${i.length>0?i:``}|${s.length>0?s:``}|${p}|${t.mode===`nearest`?o.length:o}`,inputDependencies:[`rank`]},getShaderSource:e=>`
      ${p?``:`
      ${jE(t.coordinateTransformMode,g)};
      ${(()=>{switch(t.mode){case`nearest`:return`
              ${RE(d,o)};
              ${ME(t.nearestMode,n,g)};
              ${LE(d,u,o,c,l.length,s.length,m)};
              `;case`linear`:return`
              ${IE(u,o,c,l.length,s.length)};
              ${(()=>{if(o.length===2||o.length===4)return`${BE(d,u,o,m,h)}`;if(o.length===3||o.length===5)return`${HE(d,u,o,m,h)}`;throw Error(`Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.`)})()};
            `;case`cubic`:return`
            ${(()=>{if(o.length===2||o.length===4)return`${VE(d,u,o,c,l,s,t.cubicCoeffA,m,t.extrapolationValue,t.excludeOutside)}`;throw Error(`Cubic mode only supports input dims 2 and 4 are supported in linear mode.`)})()};
            `;default:throw Error(`Invalid resize mode`)}})()};
      `}
      ${e.registerUniform(`output_size`,`u32`).registerUniform(`scales`,`f32`,l.length).registerUniform(`roi`,`f32`,s.length).declareVariables(d,u)}
      ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
        ${p?`output[global_idx] = input[global_idx];`:`
        let output_indices = ${u.offsetToIndices(`global_idx`)};
        var input_indices: ${d.type.indices};
        ${(()=>{switch(t.mode){case`nearest`:return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${d.getByIndices(`input_indices`)};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case`linear`:return`output[global_idx] = ${o.length===2||o.length===4?`bilinearInterpolation`:`trilinearInterpolation`}(output_indices);`;case`cubic`:return`output[global_idx] = bicubicInterpolation(output_indices);`;default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`,getRunData:()=>({outputs:[{dims:c,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:[{type:12,data:f},{type:1,data:l},{type:1,data:s},...X(o,c)]})}},WE=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},GE=(e,t)=>{let n=[],r=[],i=[],a=WE(e);if(t.antialias!==0)throw Error(`Only default value (0) for Antialias attribute is supported`);kE(e.inputs,t,a,n,r,i),e.compute(UE(e.inputs[0],t,a,n,r,i),{inputs:[0]})},KE=e=>{let t=e.antialias,n=e.axes,r=e.coordinateTransformMode,i=e.cubicCoeffA,a=e.excludeOutside!==0,o=e.extrapolationValue,s=e.keepAspectRatioPolicy,c=e.mode,l=e.nearestMode===``?`simple`:e.nearestMode;return vy({antialias:t,axes:n,coordinateTransformMode:r,cubicCoeffA:i,excludeOutside:a,extrapolationValue:o,keepAspectRatioPolicy:s,mode:c,nearestMode:l})}}),JE,YE,XE,ZE=K(()=>{q(),Y(),yy(),zy(),JE=(e,t)=>{let[n,r,i,a]=e,{numHeads:o,rotaryEmbeddingDim:s}=t;if(n.dims.length!==3&&n.dims.length!==4)throw Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${n.dims.length}`);if(!J.areEqual(r.dims,[])&&!J.areEqual(r.dims,[1])&&r.dims.length!==2)throw Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${r.dims.length}`);if(i.dims.length!==2)throw Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(a.dims.length!==2)throw Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(!J.areEqual(i.dims,a.dims))throw Error(`Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape`);if(s>0&&o===0)throw Error(`num_heads must be provided if rotary_embedding_dim is specified`);let c=n.dims[0],l=n.dims[n.dims.length-2],u=i.dims[0],d=J.sizeFromDimension(n.dims,1)/l,f=s===0?i.dims[1]*2:d/o;if(s>f)throw Error(`rotary_embedding_dim must be less than or equal to head_size`);if(r.dims.length===2){if(c!==r.dims[0])throw Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${r.dims[0]}`);if(l!==r.dims[1])throw Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${r.dims[1]}`)}if(f/2!==i.dims[1]&&s/2!==i.dims[1])throw Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${i.dims[1]}`);if(l>u)throw Error(`Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported`)},YE=(e,t)=>{let{interleaved:n,numHeads:r,rotaryEmbeddingDim:i,scale:a}=t,o=e[0].dims[0],s=J.sizeFromDimension(e[0].dims,1),c=e[0].dims[e[0].dims.length-2],l=s/c,u=e[2].dims[1],d=i===0?u*2:l/r,f=[o,c,l/d,d-u],p=J.computeStrides(f),m=[{type:1,data:a},{type:12,data:f},{type:12,data:p},...e[0].dims.length===3?Array({type:12,data:[s,l,d,1]}):[],...e[0].dims.length===4?Array({type:12,data:[s,d,c*d,1]}):[],...X(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)];return{name:`RotaryEmbedding`,shaderCache:{hint:vy({interleaved:n}).cacheKey,inputDependencies:[`rank`,`rank`,`rank`,`rank`]},getShaderSource:t=>{let r=Q(`input`,e[0].dataType,e[0].dims.length),i=Q(`position_ids`,e[1].dataType,e[1].dims.length),a=Q(`cos_cache`,e[2].dataType,e[2].dims.length),o=Q(`sin_cache`,e[3].dataType,e[3].dims.length),s=$(`output`,e[0].dataType,e[0].dims.length);return t.registerUniforms([{name:`scale`,type:`f32`},{name:`global_shape`,type:`u32`,length:f.length},{name:`global_strides`,type:`u32`,length:p.length},{name:`input_output_strides`,type:`u32`,length:p.length}]),`
        ${t.declareVariables(r,i,a,o,s)}

        ${t.mainStart(Ey)}
          let half_rotary_emb_dim = uniforms.${a.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${t.guardAgainstOutOfBoundsWorkgroupSizes(`size`)}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${i.broadcastedIndicesToOffset(`bsnh.xy`,$(``,i.type.tensor,2))};
            let position_id =
                u32(${i.getByOffset(`position_ids_idx`)}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${n});
            let j = i + select(half_rotary_emb_dim, 1, ${n});
            let re = ${r.getByOffset(`i`)} * ${a.get(`position_id`,`bsnh[3]`)} -
                ${r.getByOffset(`j`)} * ${o.get(`position_id`,`bsnh[3]`)};
            ${s.setByOffset(`i`,`re`)}
            let im = ${r.getByOffset(`i`)} * ${o.get(`position_id`,`bsnh[3]`)} +
                ${r.getByOffset(`j`)} * ${a.get(`position_id`,`bsnh[3]`)};
            ${s.setByOffset(`j`,`im`)}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${s.setByOffset(`k`,r.getByOffset(`k`))}
          }
        }`},getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(J.size(f)/Ey)},programUniforms:m})}},XE=(e,t)=>{JE(e.inputs,t),e.compute(YE(e.inputs,t))}}),QE,$E,eD,tD=K(()=>{q(),Y(),zy(),QE=e=>{if(!e||e.length<3)throw Error(`layerNorm requires at least 3 inputs.`);let t=e[0],n=e[1],r=e[2];if(t.dataType!==n.dataType||t.dataType!==r.dataType)throw Error(`All inputs must have the same data type`);if(t.dims.length!==3&&t.dims.length!==2)throw Error(`Input must be 2D or 3D`);if(n.dims.length!==3&&n.dims.length!==2)throw Error(`Skip must be 2D or 3D`);let i=t.dims[t.dims.length-1],a=t.dims[t.dims.length-2];if(n.dims[n.dims.length-1]!==i)throw Error(`Skip must have the same hidden size as input`);if(n.dims[n.dims.length-2]!==a)throw Error(`Skip must have the same sequence length as input`);if(r.dims.length!==1)throw Error(`Gamma must be 1D`);if(r.dims[r.dims.length-1]!==i)throw Error(`Gamma must have the same hidden size as input`);if(e.length>3){let t=e[3];if(t.dims.length!==1)throw Error(`Beta must be 1D`);if(t.dims[t.dims.length-1]!==i)throw Error(`Beta must have the same hidden size as input`)}if(e.length>4){let t=e[4];if(t.dims.length!==1)throw Error(`Bias must be 1D`);if(t.dims[t.dims.length-1]!==i)throw Error(`Bias must have the same hidden size as input`)}},$E=(e,t,n,r)=>{let i=t.simplified,a=e[0].dims,o=J.size(a),s=a,c=o,l=a.slice(-1)[0],u=r?a.slice(0,-1).concat(1):[],d=!i&&e.length>3,f=e.length>4,p=r&&n>1,m=r&&n>2,h=n>3,g=Ay(l),_=[{type:12,data:c},{type:12,data:g},{type:12,data:l},{type:1,data:t.epsilon}],v=t=>{let n=[{name:`output_size`,type:`u32`},{name:`components`,type:`u32`},{name:`hidden_size`,type:`u32`},{name:`epsilon`,type:`f32`}],r=[Q(`x`,e[0].dataType,e[0].dims,g),Q(`skip`,e[1].dataType,e[1].dims,g),Q(`gamma`,e[2].dataType,e[2].dims,g)];d&&r.push(Q(`beta`,e[3].dataType,e[3].dims,g)),f&&r.push(Q(`bias`,e[4].dataType,e[4].dims,g)),r.push($(`output`,e[0].dataType,s,g)),p&&r.push($(`mean_output`,1,u)),m&&r.push($(`inv_std_output`,1,u)),h&&r.push($(`input_skip_bias_sum`,e[0].dataType,s,g));let a=Oy(e[0].dataType),o=Oy(1,g);return`

      ${t.registerUniforms(n).declareVariables(...r)}
      var<workgroup> sum_shared : array<${o}, 64>;
      var<workgroup> sum_squared_shared : array<${o}, 64>;

      ${t.mainStart([64,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / 64;

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / 64;
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == 63) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${f?`bias[offset1d + i]`:a+`(0.0)`};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${h?`input_skip_bias_sum[offset + i] = value;`:``}
          output[offset + i] = value;
          let f32_value = ${My(a,g,`value`)};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = 64;
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${Ny(`sum`,g)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${Ny(`square_sum`,g)} / f32(uniforms.hidden_size) ${i?``:`- mean * mean`} + uniforms.epsilon);
        ${p?`mean_output[global_idx] = mean;`:``}
        ${m?`inv_std_output[global_idx] = inv_std_dev;`:``}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${i?``:`- ${a}(mean)`}) *
            ${a}(inv_std_dev) * gamma[offset1d + i]
            ${d?`+ beta[offset1d + i]`:``};
        }
      }`},y=[{dims:s,dataType:e[0].dataType}];return n>1&&y.push({dims:u,dataType:1}),n>2&&y.push({dims:u,dataType:1}),n>3&&y.push({dims:a,dataType:e[0].dataType}),{name:`SkipLayerNormalization`,shaderCache:{hint:`${g};${p};${m};${h}`,inputDependencies:e.map((e,t)=>`type`)},getShaderSource:v,getRunData:()=>({outputs:y,dispatchGroup:{x:Math.ceil(c/l)},programUniforms:_})}},eD=(e,t)=>{QE(e.inputs);let n=[0];e.outputCount>1&&n.push(-3),e.outputCount>2&&n.push(-3),e.outputCount>3&&n.push(3),e.compute($E(e.inputs,t,e.outputCount,!1),{outputs:n})}}),nD,rD,iD,aD,oD,sD,cD,lD,uD=K(()=>{q(),Y(),yy(),zy(),nD=(e,t)=>{if(!e||e.length<1)throw Error(`too few inputs`);if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw Error(`axes, starts and ends must have the same length`)}else if(t.starts.length!==t.ends.length)throw Error(`starts and ends must have the same length`);e.slice(1).forEach((t,n)=>{if(e[n+1].dataType!==6&&e[n+1].dataType!==7)throw Error(`Input ${n} must be an array of int32 or int64`)})},rD=(e,t)=>{let n=[];if(e.length>t){if(e[t].dataType===7)e[t].getBigInt64Array().forEach(e=>n.push(Number(e)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(e=>n.push(Number(e)));else throw Error(`Input ${t} must be an array of int32 or int64`)}return n},iD=(e,t)=>{if(e.length>1){let t=rD(e,1),n=rD(e,2),r=rD(e,3);return r.length===0&&(r=[...Array(e[0].dims.length).keys()]),vy({starts:t,ends:n,axes:r})}return t},aD=(e,t,n,r,i)=>{let a=e;return e<0&&(a+=n[r[t]]),i[t]<0?Math.max(0,Math.min(a,n[r[t]]-1)):Math.max(0,Math.min(a,n[r[t]]))},oD=(e,t,n)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${n.length}; i >= 0; i--) {
            let input_shape_i = ${Z(`uniforms.input_shape`,`i`,n.length)};
            let steps_i = ${Z(`uniforms.steps`,`i`,n.length)};
            let signs_i = ${Z(`uniforms.signs`,`i`,n.length)};
            let starts_i = ${Z(`uniforms.starts`,`i`,n.length)};
            var output_index = ${t.indicesGet(`output_indices`,`i`)};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet(`input_indices`,`i`,`input_index`)};
          }
          return input_indices;
      }`,sD=(e,t)=>{let n=e[0].dims,r=J.size(n),i=t.axes.length>0?J.normalizeAxes(t.axes,n.length):[...Array(n.length).keys()],a=rD(e,4);a.forEach(e=>e!==0||(()=>{throw Error(`step cannot be 0`)})),a.length===0&&(a=Array(i.length).fill(1));let o=t.starts.map((e,t)=>aD(e,t,n,i,a)),s=t.ends.map((e,t)=>aD(e,t,n,i,a));if(i.length!==o.length||i.length!==s.length)throw Error(`start, ends and axes should have the same number of elements`);if(i.length!==n.length)for(let e=0;e<n.length;++e)i.includes(e)||(o.splice(e,0,0),s.splice(e,0,n[e]),a.splice(e,0,1));let c=a.map(e=>Math.sign(e));a.forEach((e,t,n)=>{if(e<0){let r=(s[t]-o[t])/e,i=o[t],c=i+r*a[t];o[t]=c,s[t]=i,n[t]=-e}});let l=n.slice(0);i.forEach((e,t)=>{l[e]=Math.ceil((s[e]-o[e])/a[e])});let u={dims:l,dataType:e[0].dataType},d=$(`output`,e[0].dataType,l.length),f=Q(`input`,e[0].dataType,e[0].dims.length),p=J.size(l),m=[{name:`outputSize`,type:`u32`},{name:`starts`,type:`u32`,length:o.length},{name:`signs`,type:`i32`,length:c.length},{name:`steps`,type:`u32`,length:a.length}],h=[{type:12,data:p},{type:12,data:o},{type:6,data:c},{type:12,data:a},...X(e[0].dims,l)];return{name:`Slice`,shaderCache:{hint:`${c.length}_${o.length}_${a.length}`,inputDependencies:[`rank`]},getShaderSource:e=>`
      ${e.registerUniforms(m).declareVariables(f,d)}
        ${oD(f,d,n)}
        ${e.mainStart()}
          ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
          let output_indices = ${d.offsetToIndices(`global_idx`)};
          let input_indices = calculateInputIndices(output_indices);
          ${d.setByOffset(`global_idx`,f.getByIndices(`input_indices`))}
      }`,getRunData:()=>({outputs:[u],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:h})}},cD=(e,t)=>{nD(e.inputs,t);let n=iD(e.inputs,t);e.compute(sD(e.inputs,n),{inputs:[0]})},lD=e=>{let t=e.starts,n=e.ends,r=e.axes;return vy({starts:t,ends:n,axes:r})}}),dD,fD,pD,mD,hD=K(()=>{q(),Y(),yy(),Yy(),zy(),dD=e=>{if(!e||e.length!==1)throw Error(`Softmax op requires 1 input.`)},fD=(e,t)=>{let n=e.inputs[0],r=n.dims,i=J.size(r),a=r.length,o=J.normalizeAxis(t.axis,a),s=o<r.length-1,c,l=[];s?(l=Array.from({length:a},(e,t)=>t),l[o]=a-1,l[a-1]=o,c=e.compute(Ky(n,l),{inputs:[n],outputs:[-1]})[0]):c=n;let u=c.dims,d=u[a-1],f=i/d,p=Ay(d),m=d/p,h=64;f===1&&(h=256);let g=(e,t)=>t===4?`max(max(${e}.x, ${e}.y), max(${e}.z, ${e}.w))`:t===2?`max(${e}.x, ${e}.y)`:t===3?`max(max(${e}.x, ${e}.y), ${e}.z)`:e,_=Q(`x`,c.dataType,c.dims,p),v=$(`result`,c.dataType,c.dims,p),y=_.type.value,b=Oy(c.dataType)===`f32`?`var threadMax = ${y}(-3.402823e+38f);`:`var threadMax = ${y}(-65504.0h);`,x=e.compute({name:`Softmax`,shaderCache:{hint:`${p};${h}`,inputDependencies:[`type`]},getRunData:()=>({outputs:[{dims:u,dataType:c.dataType}],dispatchGroup:{x:f},programUniforms:[{type:6,data:m}]}),getShaderSource:e=>`
      var<workgroup> rowMaxShared : ${y};
      var<workgroup> rowSumShared : ${y};
      var<workgroup> threadShared : array<${y}, ${h}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${y} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${y}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${e.registerUniform(`packedCols`,`i32`).declareVariables(_,v)}
      ${e.mainStart(h)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${h};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${b}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${y}(${g(`threadShared[0]`,p)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${y}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${y}(${Ny(`threadShared[0]`,p)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          let value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          setValue(row, col, row_stride, value);
        }
      }`},{inputs:[c],outputs:[s?-1:0]})[0];s&&e.compute(Ky(x,l),{inputs:[x]})},pD=(e,t)=>{dD(e.inputs),fD(e,t)},mD=e=>vy({axis:e.axis})}),gD,_D,vD,yD,bD,xD=K(()=>{q(),Y(),zy(),gD=e=>Array.from(e.getBigInt64Array(),Number),_D=e=>{if(!e||e.length!==2)throw Error(`Tile requires 2 inputs.`);if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw Error(`Tile only support float, float16, int32, and uint32 data types`);if(e[1].dataType!==7)throw Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw Error("Tile `repeats` input should be 1-D");if(gD(e[1]).length!==e[0].dims.length)throw Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},vD=(e,t)=>{let n=[];for(let r=0;r<e.length;++r)n.push(e[r]*t[r]);return n},yD=(e,t)=>{let n=e[0].dims,r=t??gD(e[1]),i=vD(n,r),a=J.size(i),o=e[0].dataType,s=Q(`input`,o,n.length),c=$(`output`,o,i.length);return{name:`Tile`,shaderCache:{hint:`${r}`,inputDependencies:[`rank`]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},...X(e[0].dims,i)]}),getShaderSource:e=>`
      const inputShape = ${s.indices(...n)};
      ${e.registerUniform(`output_size`,`u32`).declareVariables(s,c)}
      ${e.mainStart()}
      ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
      let output_indices = ${c.offsetToIndices(`global_idx`)};
      var input_indices: ${s.type.indices};
      for (var i = 0; i < ${n.length}; i++) {
        let input_dim_i = ${s.indicesGet(`uniforms.input_shape`,`i`)};
        let input_dim_value = ${c.indicesGet(`output_indices`,`i`)}  % input_dim_i;

        ${s.indicesSet(`input_indices`,`i`,`input_dim_value`)}
      }
      ${c.setByOffset(`global_idx`,s.getByIndices(`input_indices`))}
    }`}},bD=e=>{_D(e.inputs),e.compute(yD(e.inputs),{inputs:[0]})}}),SD,CD,wD,TD=K(()=>{q(),Y(),zy(),SD=(e,t,n,r,i)=>{let a=$(`output_data`,i,n.length,4),o=Q(`a_data`,t[1].dataType,t[1].dims.length,4),s=Q(`b_data`,t[2].dataType,t[2].dims.length,4),c=Q(`c_data`,t[0].dataType,t[0].dims.length,4),l,u=(e,t,n)=>`select(${t}, ${e}, ${n})`;if(!r)l=a.setByOffset(`global_idx`,u(o.getByOffset(`global_idx`),s.getByOffset(`global_idx`),c.getByOffset(`global_idx`)));else{let e=(e,t,n=``)=>{let r=`a_data[index_a${t}][component_a${t}]`,i=`b_data[index_b${t}][component_b${t}]`,l=`bool(c_data[index_c${t}] & (0xffu << (component_c${t} * 8)))`;return`
            let output_indices${t} = ${a.offsetToIndices(`global_idx * 4u + ${t}u`)};
            let offset_a${t} = ${o.broadcastedIndicesToOffset(`output_indices${t}`,a)};
            let offset_b${t} = ${s.broadcastedIndicesToOffset(`output_indices${t}`,a)};
            let offset_c${t} = ${c.broadcastedIndicesToOffset(`output_indices${t}`,a)};
            let index_a${t} = offset_a${t} / 4u;
            let index_b${t} = offset_b${t} / 4u;
            let index_c${t} = offset_c${t} / 4u;
            let component_a${t} = offset_a${t} % 4u;
            let component_b${t} = offset_b${t} % 4u;
            let component_c${t} = offset_c${t} % 4u;
            ${e}[${t}] = ${n}(${u(r,i,l)});
          `};l=i===9?`
            var data = vec4<u32>(0);
            ${e(`data`,0,`u32`)}
            ${e(`data`,1,`u32`)}
            ${e(`data`,2,`u32`)}
            ${e(`data`,3,`u32`)}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:`
            ${e(`output_data[global_idx]`,0)}
            ${e(`output_data[global_idx]`,1)}
            ${e(`output_data[global_idx]`,2)}
            ${e(`output_data[global_idx]`,3)}
          `}return`
        ${e.registerUniform(`vec_size`,`u32`).declareVariables(c,o,s,a)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.vec_size`)}
        ${l}
      }`},CD=e=>{let t=e[1].dims,n=e[2].dims,r=e[0].dims,i=e[1].dataType,a=!(J.areEqual(t,n)&&J.areEqual(n,r)),o=t,s=J.size(t);if(a){let e=xy.calcShape(xy.calcShape(t,n,!1),r,!1);if(!e)throw Error(`Can't perform where op on the given tensors`);o=e,s=J.size(o)}let c=Math.ceil(s/4);return{name:`Where`,shaderCache:{inputDependencies:[`rank`,`rank`,`rank`]},getShaderSource:t=>SD(t,e,o,a,i),getRunData:()=>({outputs:[{dims:o,dataType:i}],dispatchGroup:{x:Math.ceil(s/64/4)},programUniforms:[{type:12,data:c},...X(r,t,n,o)]})}},wD=e=>{e.compute(CD(e.inputs))}}),ED,DD=K(()=>{Yb(),ix(),lx(),px(),lS(),CS(),AS(),CC(),FC(),zC(),GC(),rw(),lw(),fw(),_w(),xw(),Ew(),jw(),Iw(),Zw(),vT(),CT(),DT(),AT(),IT(),aT(),KT(),fE(),_E(),xE(),EE(),Wb(),qE(),ZE(),tD(),uD(),hD(),pT(),xD(),Yy(),aS(),TD(),ED=new Map([[`Abs`,[gx]],[`Acos`,[_x]],[`Acosh`,[vx]],[`Add`,[pS]],[`ArgMax`,[qb,Jb]],[`ArgMin`,[Kb,Jb]],[`Asin`,[yx]],[`Asinh`,[bx]],[`Atan`,[xx]],[`Atanh`,[Sx]],[`Attention`,[rx]],[`AveragePool`,[rE,nE]],[`BatchNormalization`,[cx]],[`BiasAdd`,[fx]],[`BiasSplitGelu`,[cS]],[`Cast`,[wx,Cx]],[`Ceil`,[Dx]],[`Clip`,[Ex]],[`Concat`,[OS,kS]],[`Conv`,[SC,vC]],[`ConvTranspose`,[PC,AC]],[`Cos`,[Ox]],[`Cosh`,[kx]],[`CumSum`,[LC,RC]],[`DepthToSpace`,[UC,WC]],[`DequantizeLinear`,[hE,gE]],[`Div`,[mS]],[`Einsum`,[tw,nw]],[`Elu`,[jx,Ax]],[`Equal`,[hS]],[`Erf`,[Nx]],[`Exp`,[Px]],[`Expand`,[cw]],[`FastGelu`,[dw]],[`Floor`,[Fx]],[`FusedConv`,[SC,vC]],[`Gather`,[gw,hw]],[`GatherElements`,[Aw,kw]],[`GatherBlockQuantized`,[ww,Tw]],[`GatherND`,[yw,bw]],[`Gelu`,[Ix]],[`Gemm`,[Fw,Pw]],[`GlobalAveragePool`,[oE,aE]],[`GlobalMaxPool`,[dE,uE]],[`Greater`,[yS]],[`GreaterOrEqual`,[xS]],[`GridSample`,[Yw,Xw]],[`GroupQueryAttention`,[_T]],[`HardSigmoid`,[Wx,Ux]],[`InstanceNormalization`,[ST]],[`LayerNormalization`,[ET]],[`LeakyRelu`,[Lx,Ax]],[`Less`,[bS]],[`LessOrEqual`,[SS]],[`Log`,[tS]],[`MatMul`,[kT]],[`MatMulNBits`,[PT,FT]],[`MaxPool`,[cE,lE]],[`Mul`,[gS]],[`MultiHeadAttention`,[iT,eT]],[`Neg`,[zx]],[`Not`,[Rx]],[`Pad`,[GT]],[`Pow`,[_S]],[`QuickGelu`,[iS,Ax]],[`Range`,[bE]],[`Reciprocal`,[Bx]],[`ReduceMin`,[zb]],[`ReduceMean`,[Pb]],[`ReduceMax`,[Rb]],[`ReduceSum`,[Vb]],[`ReduceProd`,[Bb]],[`ReduceL1`,[Fb]],[`ReduceL2`,[Ib]],[`ReduceLogSum`,[Ub]],[`ReduceLogSumExp`,[Lb]],[`ReduceSumSquare`,[Hb]],[`Relu`,[Vx]],[`Resize`,[GE,KE]],[`RotaryEmbedding`,[XE]],[`ScatterND`,[TE,wE]],[`Sigmoid`,[Hx]],[`Sin`,[Gx]],[`Sinh`,[Kx]],[`Slice`,[cD,lD]],[`SkipLayerNormalization`,[eD]],[`Split`,[dT,fT]],[`Sqrt`,[qx]],[`Softmax`,[pD,mD]],[`Sub`,[vS]],[`Tan`,[Jx]],[`Tanh`,[Xx]],[`ThresholdedRelu`,[eS,Ax]],[`Tile`,[bD]],[`Transpose`,[qy,Jy]],[`Where`,[wD]]])}),OD,kD=K(()=>{K_(),ry(),zy(),OD=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,n,r,i){P_(e.programInfo.name);let a=this.backend.device,o=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let s=[];for(let e of t)s.push({binding:s.length,resource:{buffer:e.buffer}});for(let e of n)s.push({binding:s.length,resource:{buffer:e.buffer}});i&&s.push({binding:s.length,resource:i});let c=a.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:s,label:e.programInfo.name});if(this.backend.sessionStatus===`capturing`){let t={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:c,dispatchGroup:r};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(t)}o.setPipeline(e.computePipeline),o.setBindGroup(0,c),o.dispatchWorkgroups(...r),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType===`at-passes`)&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),F_(e.programInfo.name)}dispose(){}build(e,t){P_(e.name);let n=this.backend.device,r=[];[{feature:`shader-f16`,extension:`f16`},{feature:`subgroups`,extension:`subgroups`},{feature:`subgroups-f16`,extension:`subgroups_f16`}].forEach(e=>{n.features.has(e.feature)&&r.push(`enable ${e.extension};`)});let i=Ry(t,this.backend.device.limits),a=e.getShaderSource(i),o=`${r.join(`
`)}
${i.additionalImplementations}
${a}`,s=n.createShaderModule({code:o,label:e.name});ny(`verbose`,()=>`[WebGPU] ${e.name} shader code: ${o}`);let c=n.createComputePipeline({compute:{module:s,entryPoint:`main`},layout:`auto`,label:e.name});return F_(e.name),{programInfo:e,computePipeline:c,uniformVariablesInfo:i.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e==`number`?e:e.x,n=typeof e==`number`?1:e.y||1,r=typeof e==`number`?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=i&&n<=i&&r<=i)return[t,n,r];let a=t*n*r,o=Math.ceil(Math.sqrt(a));if(o>i){if(o=Math.ceil(Math.cbrt(a)),o>i)throw Error(`Total dispatch size exceeds WebGPU maximum.`);return[o,o,o]}return[o,o,1]}}}),AD,jD,MD,ND,PD,FD=K(()=>{K_(),q(),ry(),ay(),gy(),DD(),kD(),AD=(e,t)=>{if(t.length!==e.length)throw Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let n=[];for(let r=0;r<e.length;++r){let i=e[r].dataType;switch(t[r]){case`none`:n.push(``);break;case`type`:n.push(`${i}`);break;case`rank`:{let t=e[r].dims.length;n.push(`${i};${t}`);break}case`dims`:{let t=e[r].dims.join(`,`);n.push(`${i};${t}`);break}default:throw Error(`unsupported input dependency: ${t[r]}`)}}return n.join(`|`)},jD=(e,t,n)=>{let r=e.name;return e.shaderCache?.hint&&(r+=`[`+e.shaderCache.hint+`]`),r+=`:`+n+`:${AD(t,e.shaderCache?.inputDependencies??Array(t.length).fill(`dims`))}`,r},MD=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},ND=class{constructor(e){this.subgroupsSupported=e.features.has(`subgroups`),this.subgroupsF16Supported=e.features.has(`subgroups`);let t=e.limits;this.subgroupSizeRange=!this.subgroupsSupported||!t.minSubgroupSize||!t.maxSubgroupSize?void 0:[t.minSubgroupSize,t.maxSubgroupSize]}},PD=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus=`default`,this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw Error(`currentKernelCustomData(): currentKernelId is null. (should not happen)`);let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let n=[],r={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:n},i=e=>t.features.has(e)&&n.push(e)&&!0;i(`chromium-experimental-timestamp-query-inside-passes`)||i(`timestamp-query`),i(`shader-f16`),i(`subgroups`)&&i(`subgroups-f16`),this.device=await t.requestDevice(r),this.deviceInfo=new ND(this.device),this.adapterInfo=new MD(t.info||await t.requestAdapterInfo()),this.gpuDataManager=hy(this),this.programManager=new OD(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,ey(e.logLevel,!!e.debug),this.device.onuncapturederror=e=>{e.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${e.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<`u`&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||=this.device.createCommandEncoder(),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType===`at-passes`&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&=(this.computePassEncoder.end(),null)}flush(){if(!this.commandEncoder)return;P_(),this.endComputePass();let e;this.queryType!==`none`&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!==`none`&&e.mapAsync(GPUMapMode.READ).then(()=>{let t=new BigUint64Array(e.getMappedRange()),n=this.pendingQueries.get(e);for(let e=0;e<t.length/2;e++){let r=n[e],i=r.kernelId,a=this.kernels.get(i),o=a.kernelType,s=a.kernelName,c=r.programName,l=r.inputTensorViews,u=r.outputTensorViews,d=t[e*2],f=t[e*2+1];typeof this.queryTimeBase>`u`&&(this.queryTimeBase=d);let p=Number(d-this.queryTimeBase),m=Number(f-this.queryTimeBase);if(!Number.isSafeInteger(p)||!Number.isSafeInteger(m))throw RangeError(`incorrect timestamp range`);if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:l.map(e=>({dims:e.dims,dataType:Vv(e.dataType)})),outputsMetadata:u.map(e=>({dims:e.dims,dataType:Vv(e.dataType)})),kernelId:i,kernelType:o,kernelName:s,programName:c,startTime:p,endTime:m});else{let e=``;l.forEach((t,n)=>{e+=`input[${n}]: [${t.dims}] | ${Vv(t.dataType)}, `});let t=``;u.forEach((e,n)=>{t+=`output[${n}]: [${e.dims}] | ${Vv(e.dataType)}, `}),console.log(`[profiling] kernel "${i}|${o}|${s}|${c}" ${e}${t}execution time: ${m-p} ns`)}M_(`GPU`,`${c}::${d}::${f}`)}e.unmap(),this.pendingQueries.delete(e)}),F_()}run(e,t,n,r,i,a){P_(e.name);let o=[];for(let e=0;e<t.length;++e){let n=t[e].data;if(n===0)continue;let r=this.gpuDataManager.get(n);if(!r)throw Error(`no GPU data for input: ${n}`);o.push(r)}let{outputs:s,dispatchGroup:c,programUniforms:l}=e.getRunData(t),u=n.length===0?s.map((e,t)=>t):n;if(u.length!==s.length)throw Error(`Output size ${u.length} must be equal to ${s.length}.`);let d=[],f=[];for(let e=0;e<s.length;++e){if(!Number.isInteger(u[e])||u[e]<-3||u[e]>=a)throw Error(`Invalid output index: ${u[e]}`);if(u[e]===-3)continue;let t=u[e]===-1,n=u[e]===-2,o=t||n?i(s[e].dataType,s[e].dims):r(u[e],s[e].dataType,s[e].dims);if(d.push(o),o.data===0)continue;let c=this.gpuDataManager.get(o.data);if(!c)throw Error(`no GPU data for output: ${o.data}`);if(t&&this.temporaryData.push(c),n){let e=this.kernelPersistentData.get(this.currentKernelId);e||(e=[],this.kernelPersistentData.set(this.currentKernelId,e)),e.push(c)}f.push(c)}if(o.length!==t.length||f.length!==d.length){if(f.length===0)return F_(e.name),d;throw Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let p;if(l){let e=0,t=[];l.forEach(n=>{let r=typeof n.data==`number`?[n.data]:n.data;if(r.length===0)return;let i=n.type===10?2:4,a,o;n.type===10?(o=r.length>4?16:r.length>2?8:r.length*i,a=r.length>4?16:i*r.length):(o=r.length<=2?r.length*i:16,a=16),e=Math.ceil(e/o)*o,t.push(e);let s=n.type===10?8:4;e+=r.length>4?Math.ceil(r.length/s)*a:r.length*i}),e=Math.ceil(e/16)*16;let n=new ArrayBuffer(e);l.forEach((e,r)=>{let i=t[r],a=typeof e.data==`number`?[e.data]:e.data;if(e.type===6)new Int32Array(n,i,a.length).set(a);else if(e.type===12)new Uint32Array(n,i,a.length).set(a);else if(e.type===10)new Uint16Array(n,i,a.length).set(a);else if(e.type===1)new Float32Array(n,i,a.length).set(a);else throw Error(`Unsupported uniform type: ${Vv(e.type)}`)});let r=this.gpuDataManager.create(e,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(r.buffer,0,n,0,e),this.gpuDataManager.release(r.id),p={offset:0,size:e,buffer:r.buffer}}let m=this.programManager.normalizeDispatchGroupSize(c),h=m[1]===1&&m[2]===1,g=jD(e,t,h),_=this.programManager.getArtifact(g);if(_||(_=this.programManager.build(e,m),this.programManager.setArtifact(g,_),ny(`info`,()=>`[artifact] key: ${g}, programName: ${e.name}`)),l&&_.uniformVariablesInfo){if(l.length!==_.uniformVariablesInfo.length)throw Error(`Uniform variables count mismatch: expect ${_.uniformVariablesInfo.length}, got ${l.length} in program "${_.programInfo.name}".`);for(let e=0;e<l.length;e++){let t=l[e],n=t.type,r=typeof t.data==`number`?1:t.data.length,[i,a]=_.uniformVariablesInfo[e];if(n!==i||r!==a)throw Error(`Uniform variable ${e} mismatch: expect type ${i} with size ${a}, got type ${n} with size ${r} in program "${_.programInfo.name}".`)}}if(ny(`info`,()=>`[ProgramManager] run "${e.name}" (key=${g}) with ${m[0]}x${m[1]}x${m[2]}`),this.queryType!==`none`||this.sessionStatus===`capturing`){let e={kernelId:this.currentKernelId,programName:_.programInfo.name,inputTensorViews:t,outputTensorViews:d};this.pendingKernels.push(e),this.sessionStatus===`capturing`&&this.capturedPendingKernels.get(this.currentSessionId).push(e)}return this.programManager.run(_,o,f,m,p),F_(e.name),d}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,n,r){let i=ED.get(e);if(!i)throw Error(`kernel not implemented: ${e}`);let a={kernelType:e,kernelName:r,kernelEntry:i[0],attributes:[i[1],n]};this.kernels.set(t,a)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let e of t)this.gpuDataManager.release(e.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,n){let r=this.kernels.get(e);if(!r)throw Error(`kernel not created: ${e}`);let i=r.kernelType,a=r.kernelName,o=r.kernelEntry,s=r.attributes;if(this.currentKernelId!==null)throw Error(`kernel "[${i}] ${a}" is not allowed to be called recursively`);this.currentKernelId=e,s[0]&&=(s[1]=s[0](s[1]),void 0),ny(`info`,()=>`[WebGPU] Start to run kernel "[${i}] ${a}"...`);let c=this.env.debug;this.temporaryData=[];try{return c&&this.device.pushErrorScope(`validation`),o(t,s[1]),0}catch(e){return n.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${a}" failed. ${e}`)),1}finally{c&&n.push(this.device.popErrorScope().then(e=>e?`GPU validation error for kernel "[${i}] ${a}": ${e.message}`:null));for(let e of this.temporaryData)this.gpuDataManager.release(e.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,n,r){let i=this.sessionExternalDataMapping.get(e);i||(i=new Map,this.sessionExternalDataMapping.set(e,i));let a=i.get(t),o=this.gpuDataManager.registerExternalBuffer(n,r,a);return i.set(t,[o,n]),o}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(e=>this.gpuDataManager.unregisterExternalBuffer(e[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,n){return async()=>{let r=await py(this,e,t);return iy(r.buffer,n)}}writeTimestamp(e){this.queryType===`inside-passes`&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){this.queryType=`none`,(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>`u`?this.env.wasm.trace:this.env.trace))&&(this.device.features.has(`chromium-experimental-timestamp-query-inside-passes`)?this.queryType=`inside-passes`:this.device.features.has(`timestamp-query`)&&(this.queryType=`at-passes`),this.queryType!==`none`&&typeof this.querySet>`u`&&(this.querySet=this.device.createQuerySet({type:`timestamp`,count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){ny(`info`,`captureBegin`),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus=`capturing`}captureEnd(){ny(`info`,`captureEnd`),this.flush(),this.sessionStatus=`default`}replay(){ny(`info`,`replay`),this.sessionStatus=`replaying`;let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),n=e.length;this.pendingKernels=[];for(let r=0;r<n;r++){let n=this.getComputePassEncoder(),i=e[r];this.writeTimestamp(this.pendingDispatchNumber*2),n.setPipeline(i.computePipeline),n.setBindGroup(0,i.bindGroup),n.dispatchWorkgroups(...i.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!==`none`&&this.pendingKernels.push(t[r]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType===`at-passes`)&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus=`default`}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),ID,LD,RD,zD,BD,VD,HD,UD,WD=K(()=>{ry(),ID=1,LD=()=>ID++,RD=new Map([[`float32`,32],[`float16`,16],[`int32`,32],[`uint32`,32],[`int64`,64],[`uint64`,64],[`int8`,8],[`uint8`,8],[`int4`,4],[`uint4`,4]]),zD=(e,t)=>{let n=RD.get(e);if(!n)throw Error(`Unsupported data type.`);return t.length>0?Math.ceil(t.reduce((e,t)=>e*t)*n/8):0},BD=class{constructor(e){this.sessionId=e.sessionId,this.mlContext=e.context,this.mlTensor=e.tensor,this.dataType=e.dataType,this.tensorShape=e.shape}get tensor(){return this.mlTensor}get type(){return this.dataType}get shape(){return this.tensorShape}get byteLength(){return zD(this.dataType,this.tensorShape)}destroy(){ny(`verbose`,()=>`[WebNN] TensorWrapper.destroy`),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,n){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===n.length&&this.tensorShape.every((e,t)=>e===n[t])}},VD=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,n,r){let i=this.tensorManager.getMLContext(e);if(this.wrapper){if(this.wrapper.canReuseTensor(i,t,n))return this.wrapper.tensor;if(r){if(this.wrapper.byteLength!==zD(t,n))throw Error(`Unable to copy data to tensor with different size.`);this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let a=typeof MLTensorUsage>`u`?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,n,a,!0,!0),r&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){if(this.wrapper){if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(e);return}ny(`verbose`,()=>`Data size does not match tensor size. Releasing tensor.`),this.releaseTensor()}this.activeUpload?this.activeUpload.set(e):this.activeUpload=new Uint8Array(e)}async download(e){if(this.activeUpload){if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(this.activeUpload):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(this.activeUpload);return}return this.activeUpload.buffer}if(!this.wrapper)throw Error(`Tensor has not been created.`);return e?this.wrapper.read(e):this.wrapper.read()}},HD=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw Error(`MLContext not found for session.`);return t}reserveTensorId(){let e=LD();return this.tensorTrackersById.set(e,new VD(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,n,r,i){ny(`verbose`,()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${n}, shape: ${r}, copyOld: ${i}}`);let a=this.tensorTrackersById.get(t);if(!a)throw Error(`Tensor not found.`);return a.ensureTensor(e,n,r,i)}upload(e,t){let n=this.tensorTrackersById.get(e);if(!n)throw Error(`Tensor not found.`);n.upload(t)}async download(e,t){ny(`verbose`,()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t?.byteLength}}`);let n=this.tensorTrackersById.get(e);if(!n)throw Error(`Tensor not found.`);return n.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,n,r){let i=this.getMLContext(e),a=LD(),o=new BD({sessionId:e,context:i,tensor:t,dataType:n,shape:r});return this.tensorTrackersById.set(a,new VD(this,o)),this.externalTensors.add(o),a}async getCachedTensor(e,t,n,r,i,a){let o=this.getMLContext(e);for(let[r,i]of this.freeTensors.entries())if(i.canReuseTensor(o,t,n)){ny(`verbose`,()=>`[WebNN] Reusing tensor {dataType: ${t}, shape: ${n}}`);let i=this.freeTensors.splice(r,1)[0];return i.sessionId=e,i}ny(`verbose`,()=>`[WebNN] MLContext.createTensor {dataType: ${t}, shape: ${n}}`);let s=await o.createTensor({dataType:t,shape:n,dimensions:n,usage:r,writable:i,readable:a});return new BD({sessionId:e,context:o,tensor:s,dataType:t,shape:n})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},UD=(...e)=>new HD(...e)}),GD,KD,qD,JD=K(()=>{q(),Dv(),ay(),WD(),ry(),GD=new Map([[1,`float32`],[10,`float16`],[6,`int32`],[12,`uint32`],[7,`int64`],[13,`uint64`],[22,`int4`],[21,`uint4`],[3,`int8`],[2,`uint8`],[9,`uint8`]]),KD=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length===r.length&&n.every((n,i)=>n===r[i]&&e[n]===t[n])},qD=class{constructor(e){this.tensorManager=UD(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.temporaryGraphInputs=[],this.temporarySessionTensorIds=new Map,ey(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw Error(`No active session`);return this.activeSessionId}onRunStart(e){ny(`verbose`,()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){ny(`verbose`,()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let e of t)ny(`verbose`,()=>`[WebNN] releasing temporary tensor {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let t=this.mlContextCache.findIndex(t=>t.gpuDevice===e);if(t!==-1)return this.mlContextCache[t].mlContext;{let t=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:t}),t}}if(e===void 0){let e=this.mlContextCache.findIndex(e=>e.options===void 0&&e.gpuDevice===void 0);if(e!==-1)return this.mlContextCache[e].mlContext;{let e=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:e}),e}}let t=this.mlContextCache.findIndex(t=>KD(t.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let t=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:t}),t}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let n=this.sessionIdsByMLContext.get(t);n||(n=new Set,this.sessionIdsByMLContext.set(t,n)),n.add(e),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e);let n=this.sessionIdsByMLContext.get(t);if(n.delete(e),n.size===0){this.sessionIdsByMLContext.delete(t);let e=this.mlContextCache.findIndex(e=>e.mlContext===t);e!==-1&&this.mlContextCache.splice(e,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){ny(`verbose`,()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,n,r,i){let a=GD.get(n);if(!a)throw Error(`Unsupported ONNX data type: ${n}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,a,r,i)}async createTemporaryTensor(e,t,n){ny(`verbose`,()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${n}}`);let r=GD.get(t);if(!r)throw Error(`Unsupported ONNX data type: ${t}`);let i=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,i,r,n,!1);let a=this.temporarySessionTensorIds.get(e);return a?a.push(i):this.temporarySessionTensorIds.set(e,[i]),i}uploadTensor(e,t){if(!Ev().shouldTransferToMLTensor)throw Error(`Trying to upload to a MLTensor while shouldTransferToMLTensor is false`);ny(`verbose`,()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let n=await this.tensorManager.download(e);return iy(n,t)}}registerMLTensor(e,t,n,r){let i=GD.get(n);if(!i)throw Error(`Unsupported ONNX data type: ${n}`);let a=this.tensorManager.registerTensor(e,t,i,r);return ny(`verbose`,()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${i}, dimensions: ${r}} -> {tensorId: ${a}}`),a}registerMLConstant(e,t,n,r,i,a){if(!a)throw Error(`External mounted files are not available.`);let o=e;e.startsWith(`./`)&&(o=e.substring(2));let s=a.get(o);if(!s)throw Error(`File with name ${o} not found in preloaded files.`);if(t+n>s.byteLength)throw Error(`Out of bounds: data offset and length exceed the external file data size.`);let c=s.slice(t,t+n).buffer,l;switch(i.dataType){case`float32`:l=new Float32Array(c);break;case`float16`:l=new Uint16Array(c);break;case`int32`:l=new Int32Array(c);break;case`uint32`:l=new Uint32Array(c);break;case`int64`:l=new BigInt64Array(c);break;case`uint64`:l=new BigUint64Array(c);break;case`int8`:l=new Int8Array(c);break;case`int4`:case`uint4`:case`uint8`:l=new Uint8Array(c);break;default:throw Error(`Unsupported data type: ${i.dataType} in creating WebNN Constant from external data.`)}return ny(`verbose`,()=>`[WebNN] registerMLConstant {dataType: ${i.dataType}, shape: ${i.shape}}}`),r.constant(i,l)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}isGraphInput(e,t){let n=this.sessionGraphInputs.get(e);return n?n.includes(t):!1}flush(){}}}),YD={};qg(YD,{init:()=>QD});var XD,ZD,QD,$D=K(()=>{q(),FD(),ry(),Y(),JD(),XD=class e{constructor(e,t,n,r){this.module=e,this.dataType=t,this.data=n,this.dims=r}getFloat32Array(){if(this.dataType!==1)throw Error(`Invalid data type`);let e=J.size(this.dims);return e===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,e)}getBigInt64Array(){if(this.dataType!==7)throw Error(`Invalid data type`);let e=J.size(this.dims);return e===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,e)}getInt32Array(){if(this.dataType!==6)throw Error(`Invalid data type`);let e=J.size(this.dims);return e===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,e)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw Error(`Invalid data type`);let e=J.size(this.dims);return e===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,e)}reshape(t){if(J.size(t)!==J.size(this.dims))throw Error(`Invalid new shape`);return new e(this.module,this.dataType,this.data,t)}},ZD=class{constructor(e,t,n){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo,this.deviceInfo=t.deviceInfo;let r=e.PTR_SIZE,i=n/e.PTR_SIZE,a=r===4?`i32`:`i64`;this.opKernelContext=Number(e.getValue(r*i++,a));let o=Number(e.getValue(r*i++,a));this.outputCount=Number(e.getValue(r*i++,a)),this.customDataOffset=Number(e.getValue(r*i++,`*`)),this.customDataSize=Number(e.getValue(r*i++,a));let s=[];for(let t=0;t<o;t++){let t=Number(e.getValue(r*i++,a)),n=Number(e.getValue(r*i++,`*`)),o=Number(e.getValue(r*i++,a)),c=[];for(let t=0;t<o;t++)c.push(Number(e.getValue(r*i++,a)));s.push(new XD(e,t,n,c))}this.inputs=s}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){let n=t?.inputs?.map(e=>typeof e==`number`?this.inputs[e]:e)??this.inputs,r=t?.outputs??[];return this.backend.run(e,n,r,(e,t,n)=>new XD(this.module,t,this.output(e,n),n),(e,t)=>{let n=Hv(e,t);if(!n)throw Error(`Unsupported data type: ${e}`);let r=n>0?this.backend.gpuDataManager.create(n).id:0;return new XD(this.module,e,r,t)},this.outputCount)}output(e,t){let n=this.module.stackSave();try{let n=this.module.PTR_SIZE,r=n===4?`i32`:`i64`,i=this.module.stackAlloc((1+t.length)*n);this.module.setValue(i,t.length,r);for(let e=0;e<t.length;e++)this.module.setValue(i+n*(e+1),t[e],r);return this.module._JsepOutput(this.opKernelContext,e,i)}catch(n){throw Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${n}`)}finally{this.module.stackRestore(n)}}},QD=async(e,t,n,r)=>{let i=t.jsepInit;if(!i)throw Error(`Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.`);if(e===`webgpu`){let e=new PD;await e.initialize(n,r),i(`webgpu`,[e,t=>e.alloc(Number(t)),t=>e.free(t),(n,r,i,a=!1)=>{if(a)ny(`verbose`,()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(n)}, dst=${Number(r)}, size=${Number(i)}`),e.memcpy(Number(n),Number(r));else{ny(`verbose`,()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(n)}, gpuDataId=${Number(r)}, size=${Number(i)}`);let a=t.HEAPU8.subarray(Number(n>>>0),Number(n>>>0)+Number(i));e.upload(Number(r),a)}},async(n,r,i)=>{ny(`verbose`,()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${n}, dataOffset=${r}, size=${i}`),await e.download(Number(n),()=>t.HEAPU8.subarray(Number(r)>>>0,Number(r+i)>>>0))},(n,r,i)=>e.createKernel(n,Number(r),i,t.UTF8ToString(t._JsepGetNodeName(Number(r)))),t=>e.releaseKernel(t),(n,r,i,a)=>{ny(`verbose`,()=>`[WebGPU] jsepRun: sessionHandle=${i}, kernel=${n}, contextDataOffset=${r}`);let o=new ZD(t,e,Number(r));return e.computeKernel(Number(n),o,a)},()=>e.captureBegin(),()=>e.captureEnd(),()=>e.replay()])}else{let e=new qD(n);i(`webnn`,[e,()=>e.reserveTensorId(),t=>e.releaseTensorId(t),async(t,n,r,i,a)=>e.ensureTensor(t,n,r,i,a),(t,n)=>{e.uploadTensor(t,n)},async(t,n)=>e.downloadTensor(t,n)])}}}),eO,tO,nO,rO,iO,aO,oO,sO,cO,lO,uO,dO,fO=K(()=>{Nv(),zv(),q(),Dv(),jv(),Yv(),eO=(e,t)=>{Ev()._OrtInit(e,t)!==0&&Av(`Can't initialize onnxruntime.`)},tO=async e=>{eO(e.wasm.numThreads,Wv(e.logLevel))},nO=async(e,t)=>{{let n=($D(),Yg(YD)).init;if(t===`webgpu`){if(typeof navigator>`u`||!navigator.gpu)throw Error(`WebGPU is not supported in current environment`);let t=e.webgpu.adapter;if(t){if(typeof t.limits!=`object`||typeof t.features!=`object`||typeof t.requestDevice!=`function`)throw Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let n=e.webgpu.powerPreference;if(n!==void 0&&n!==`low-power`&&n!==`high-performance`)throw Error(`Invalid powerPreference setting: "${n}"`);let r=e.webgpu.forceFallbackAdapter;if(r!==void 0&&typeof r!=`boolean`)throw Error(`Invalid forceFallbackAdapter setting: "${r}"`);if(t=await navigator.gpu.requestAdapter({powerPreference:n,forceFallbackAdapter:r}),!t)throw Error(`Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.`)}await n(`webgpu`,Ev(),e,t)}if(t===`webnn`){if(typeof navigator>`u`||!navigator.ml)throw Error(`WebNN is not supported in current environment`);await n(`webnn`,Ev(),e)}}},rO=new Map,iO=e=>{let t=Ev(),n=t.stackSave();try{let n=t.PTR_SIZE,r=t.stackAlloc(2*n);t._OrtGetInputOutputCount(e,r,r+n)!==0&&Av(`Can't get session input/output count.`);let i=n===4?`i32`:`i64`;return[Number(t.getValue(r,i)),Number(t.getValue(r+n,i))]}finally{t.stackRestore(n)}},aO=e=>{let t=Ev(),n=t._malloc(e.byteLength);if(n===0)throw Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,n),[n,e.byteLength]},oO=async(e,t)=>{let n,r,i=Ev();Array.isArray(e)?[n,r]=e:e.buffer===i.HEAPU8.buffer?[n,r]=[e.byteOffset,e.byteLength]:[n,r]=aO(e);let a=0,o=0,s=0,c=[],l=[],u=[];try{if([o,c]=Rv(t),t?.externalData&&i.mountExternalData){let e=[];for(let n of t.externalData){let t=typeof n==`string`?n:n.path;e.push(Jv(typeof n==`string`?n:n.data).then(e=>{i.mountExternalData(t,e)}))}await Promise.all(e)}for(let e of t?.executionProviders??[])if((typeof e==`string`?e:e.name)===`webnn`){if(i.shouldTransferToMLTensor=!1,typeof e!=`string`){let t=e,n=t?.context,r=t?.gpuDevice,a=t?.deviceType,o=t?.powerPreference;i.currentContext=n||(r?await i.jsepCreateMLContext(r):await i.jsepCreateMLContext({deviceType:a,powerPreference:o}))}else i.currentContext=await i.jsepCreateMLContext();break}a=await i._OrtCreateSession(n,r,o),a===0&&Av(`Can't create a session.`),i.jsepOnCreateSession?.(),i.currentContext&&(i.jsepRegisterMLContext(a,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);let[e,d]=iO(a),f=!!t?.enableGraphCapture,p=[],m=[],h=[];for(let t=0;t<e;t++){let e=i._OrtGetInputName(a,t);e===0&&Av(`Can't get an input name.`),l.push(e),p.push(i.UTF8ToString(e))}for(let e=0;e<d;e++){let n=i._OrtGetOutputName(a,e);n===0&&Av(`Can't get an output name.`),u.push(n);let r=i.UTF8ToString(n);m.push(r);{if(f&&t?.preferredOutputLocation===void 0){h.push(`gpu-buffer`);continue}let e=typeof t?.preferredOutputLocation==`string`?t.preferredOutputLocation:t?.preferredOutputLocation?.[r]??`cpu`;if(e!==`cpu`&&e!==`cpu-pinned`&&e!==`gpu-buffer`&&e!==`ml-tensor`)throw Error(`Not supported preferred output location: ${e}.`);if(f&&e!==`gpu-buffer`)throw Error(`Not supported preferred output location: ${e}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);h.push(e)}}let g=null;return h.some(e=>e===`gpu-buffer`||e===`ml-tensor`)&&(s=i._OrtCreateBinding(a),s===0&&Av(`Can't create IO binding.`),g={handle:s,outputPreferredLocations:h,outputPreferredLocationsEncoded:h.map(e=>qv(e))}),rO.set(a,[a,l,u,g,f,!1]),[a,p,m]}catch(e){throw l.forEach(e=>i._OrtFree(e)),u.forEach(e=>i._OrtFree(e)),s!==0&&i._OrtReleaseBinding(s)!==0&&Av(`Can't release IO binding.`),a!==0&&i._OrtReleaseSession(a)!==0&&Av(`Can't release session.`),e}finally{i._free(n),o!==0&&i._OrtReleaseSessionOptions(o)!==0&&Av(`Can't release session options.`),c.forEach(e=>i._free(e)),i.unmountExternalData?.()}},sO=e=>{let t=Ev(),n=rO.get(e);if(!n)throw Error(`cannot release session. invalid session id: ${e}`);let[r,i,a,o,s]=n;o&&(s&&t._OrtClearBoundOutputs(o.handle)!==0&&Av(`Can't clear bound outputs.`),t._OrtReleaseBinding(o.handle)!==0&&Av(`Can't release IO binding.`)),t.jsepOnReleaseSession?.(e),i.forEach(e=>t._OrtFree(e)),a.forEach(e=>t._OrtFree(e)),t._OrtReleaseSession(r)!==0&&Av(`Can't release session.`),rO.delete(e)},cO=async(e,t,n,r,i,a=!1)=>{if(!e){t.push(0);return}let o=Ev(),s=o.PTR_SIZE,c=e[0],l=e[1],u=e[3],d=u,f,p;if(c===`string`&&(u===`gpu-buffer`||u===`ml-tensor`))throw Error(`String tensor is not supported on GPU.`);if(a&&u!==`gpu-buffer`)throw Error(`External buffer must be provided for input/output index ${i} when enableGraphCapture is true.`);if(u===`gpu-buffer`){let t=e[2].gpuBuffer;p=Hv(Bv(c),l);let n=o.jsepRegisterBuffer;if(!n)throw Error(`Tensor location "gpu-buffer" is not supported without using WebGPU.`);f=n(r,i,t,p)}else if(u===`ml-tensor`){let t=e[2].mlTensor;p=Hv(Bv(c),l);let n=o.jsepRegisterMLTensor;if(!n)throw Error(`Tensor location "ml-tensor" is not supported without using WebNN.`);f=n(r,t,Bv(c),l)}else{let t=e[2];if(Array.isArray(t)){p=s*t.length,f=o._malloc(p),n.push(f);for(let e=0;e<t.length;e++){if(typeof t[e]!=`string`)throw TypeError(`tensor data at index ${e} is not a string`);o.setValue(f+e*s,Ov(t[e],n),`*`)}}else{let e=o.jsepIsGraphInput;if(c!==`string`&&e){let a=o._OrtGetInputName(r,i);if(e(r,o.UTF8ToString(a))){let e=Bv(c);p=Hv(e,l),d=`ml-tensor`;let n=o.jsepCreateTemporaryTensor,i=o.jsepUploadTensor;if(!n||!i)throw Error(`Tensor location "ml-tensor" is not supported without using WebNN.`);let a=await n(r,e,l);i(a,new Uint8Array(t.buffer,t.byteOffset,t.byteLength)),f=a}else p=t.byteLength,f=o._malloc(p),n.push(f),o.HEAPU8.set(new Uint8Array(t.buffer,t.byteOffset,p),f)}else p=t.byteLength,f=o._malloc(p),n.push(f),o.HEAPU8.set(new Uint8Array(t.buffer,t.byteOffset,p),f)}}let m=o.stackSave(),h=o.stackAlloc(4*l.length);try{l.forEach((e,t)=>o.setValue(h+t*s,e,s===4?`i32`:`i64`));let e=o._OrtCreateTensor(Bv(c),f,p,h,l.length,qv(d));e===0&&Av(`Can't create tensor for input/output. session=${r}, index=${i}.`),t.push(e)}finally{o.stackRestore(m)}},lO=async(e,t,n,r,i,a)=>{let o=Ev(),s=o.PTR_SIZE,c=rO.get(e);if(!c)throw Error(`cannot run inference. invalid session id: ${e}`);let l=c[0],u=c[1],d=c[2],f=c[3],p=c[4],m=c[5],h=t.length,g=r.length,_=0,v=[],y=[],b=[],x=[],S=o.stackSave(),ee=o.stackAlloc(h*s),te=o.stackAlloc(h*s),ne=o.stackAlloc(g*s),re=o.stackAlloc(g*s);try{[_,v]=Mv(a);for(let r=0;r<h;r++)await cO(n[r],y,x,e,t[r],p);for(let t=0;t<g;t++)await cO(i[t],b,x,e,h+r[t],p);for(let e=0;e<h;e++)o.setValue(ee+e*s,y[e],`*`),o.setValue(te+e*s,u[t[e]],`*`);for(let e=0;e<g;e++)o.setValue(ne+e*s,b[e],`*`),o.setValue(re+e*s,d[r[e]],`*`);if(f&&!m){let{handle:n,outputPreferredLocations:a,outputPreferredLocationsEncoded:s}=f;if(u.length!==h)throw Error(`input count from feeds (${h}) is expected to be always equal to model's input count (${u.length}).`);for(let r=0;r<h;r++){let i=t[r];await o._OrtBindInput(n,u[i],y[r])!==0&&Av(`Can't bind input[${r}] for session=${e}.`)}for(let t=0;t<g;t++){let c=r[t];i[t]?.[3]?o._OrtBindOutput(n,d[c],b[t],0)!==0&&Av(`Can't bind pre-allocated output[${t}] for session=${e}.`):o._OrtBindOutput(n,d[c],0,s[c])!==0&&Av(`Can't bind output[${t}] to ${a[t]} for session=${e}.`)}rO.set(e,[l,u,d,f,p,!0])}o.jsepOnRunStart?.(l);let c;c=f?await o._OrtRunWithBinding(l,f.handle,g,ne,_):await o._OrtRun(l,te,ee,h,re,g,ne,_),c!==0&&Av(`failed to call OrtRun().`);let S=[];for(let t=0;t<g;t++){let n=Number(o.getValue(ne+t*s,`*`));if(n===b[t]){S.push(i[t]);continue}let a=o.stackSave(),c=o.stackAlloc(4*s),u=!1,d,p=0;try{o._OrtGetTensorData(n,c,c+s,c+2*s,c+3*s)!==0&&Av(`Can't access output tensor data on index ${t}.`);let i=s===4?`i32`:`i64`,a=Number(o.getValue(c,i));p=o.getValue(c+s,`*`);let l=o.getValue(c+s*2,`*`),m=Number(o.getValue(c+s*3,i)),h=[];for(let e=0;e<m;e++)h.push(Number(o.getValue(l+e*s,i)));o._OrtFree(l)!==0&&Av(`Can't free memory for tensor dims.`);let g=h.reduce((e,t)=>e*t,1);d=Vv(a);let _=f?.outputPreferredLocations[r[t]];if(d===`string`){if(_===`gpu-buffer`||_===`ml-tensor`)throw Error(`String tensor is not supported on GPU.`);let e=[];for(let t=0;t<g;t++){let n=o.getValue(p+t*s,`*`),r=o.getValue(p+(t+1)*s,`*`),i=t===g-1?void 0:r-n;e.push(o.UTF8ToString(n,i))}S.push([d,h,e,`cpu`])}else if(_===`gpu-buffer`&&g>0){let e=o.jsepGetBuffer;if(!e)throw Error(`preferredLocation "gpu-buffer" is not supported without using WebGPU.`);let t=e(p),r=Hv(a,g);if(r===void 0||!Gv(d))throw Error(`Unsupported data type: ${d}`);u=!0,S.push([d,h,{gpuBuffer:t,download:o.jsepCreateDownloader(t,r,d),dispose:()=>{o._OrtReleaseTensor(n)!==0&&Av(`Can't release tensor.`)}},`gpu-buffer`])}else if(_===`ml-tensor`&&g>0){let t=o.jsepEnsureTensor;if(!t)throw Error(`preferredLocation "ml-tensor" is not supported without using WebNN.`);if(Hv(a,g)===void 0||!Kv(d))throw Error(`Unsupported data type: ${d}`);let r=await t(e,p,a,h,!1);u=!0,S.push([d,h,{mlTensor:r,download:o.jsepCreateMLTensorDownloader(p,d),dispose:()=>{o.jsepReleaseTensorId(p),o._OrtReleaseTensor(n)}},`ml-tensor`])}else{let e=new(Uv(d))(g);new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(o.HEAPU8.subarray(p,p+e.byteLength)),S.push([d,h,e,`cpu`])}}finally{o.stackRestore(a),d===`string`&&p&&o._free(p),u||o._OrtReleaseTensor(n),o.jsepOnRunEnd?.(l)}}return f&&!p&&(o._OrtClearBoundOutputs(f.handle)!==0&&Av(`Can't clear bound outputs.`),rO.set(e,[l,u,d,f,p,!1])),S}finally{o.stackRestore(S),y.forEach(e=>o._OrtReleaseTensor(e)),b.forEach(e=>o._OrtReleaseTensor(e)),x.forEach(e=>o._free(e)),_!==0&&o._OrtReleaseRunOptions(_),v.forEach(e=>o._free(e))}},uO=e=>{let t=Ev(),n=rO.get(e);if(!n)throw Error(`invalid session id`);let r=n[0],i=t._OrtEndProfiling(r);i===0&&Av(`Can't get an profile file name.`),t._OrtFree(i)},dO=e=>{let t=[];for(let n of e){let e=n[2];!Array.isArray(e)&&`buffer`in e&&t.push(e.buffer)}return t}}),pO,mO,hO,gO,_O,vO,yO,bO,xO,SO,CO,wO,TO,EO,DO,OO,kO,AO,jO=K(()=>{K_(),fO(),Dv(),vv(),pO=()=>!!c_.wasm.proxy&&typeof document<`u`,hO=!1,gO=!1,_O=!1,bO=new Map,xO=(e,t)=>{let n=bO.get(e);n?n.push(t):bO.set(e,[t])},SO=()=>{if(hO||!gO||_O||!mO)throw Error(`worker not ready`)},CO=e=>{switch(e.data.type){case`init-wasm`:hO=!1,e.data.err?(_O=!0,yO[1](e.data.err)):(gO=!0,yO[0]()),vO&&=(URL.revokeObjectURL(vO),void 0);break;case`init-ep`:case`copy-from`:case`create`:case`release`:case`run`:case`end-profiling`:{let t=bO.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},wO=async()=>{if(!gO){if(hO)throw Error(`multiple calls to 'initWasm()' detected.`);if(_O)throw Error(`previous call to 'initWasm()' failed.`);if(hO=!0,pO())return new Promise((e,t)=>{mO?.terminate(),hv().then(([n,r])=>{try{mO=r,mO.onerror=e=>t(e),mO.onmessage=CO,yO=[e,t];let i={type:`init-wasm`,in:c_};!i.in.wasm.wasmPaths&&(n||import.meta.url?.startsWith(`file:`))&&(i.in.wasm.wasmPaths={wasm:new URL(new URL(`ort-wasm-simd-threaded.jsep-D5Jk56-t.wasm`,import.meta.url).href,``+import.meta.url).href}),mO.postMessage(i),vO=n}catch(e){t(e)}},t)});try{await Tv(c_.wasm),await tO(c_),gO=!0}catch(e){throw _O=!0,e}finally{hO=!1}}},TO=async e=>{if(pO())return SO(),new Promise((t,n)=>{xO(`init-ep`,[t,n]);let r={type:`init-ep`,in:{epName:e,env:c_}};mO.postMessage(r)});await nO(c_,e)},EO=async e=>pO()?(SO(),new Promise((t,n)=>{xO(`copy-from`,[t,n]);let r={type:`copy-from`,in:{buffer:e}};mO.postMessage(r,[e.buffer])})):aO(e),DO=async(e,t)=>{if(pO()){if(t?.preferredOutputLocation)throw Error(`session option "preferredOutputLocation" is not supported for proxy.`);return SO(),new Promise((n,r)=>{xO(`create`,[n,r]);let i={type:`create`,in:{model:e,options:{...t}}},a=[];e instanceof Uint8Array&&a.push(e.buffer),mO.postMessage(i,a)})}return oO(e,t)},OO=async e=>{if(pO())return SO(),new Promise((t,n)=>{xO(`release`,[t,n]);let r={type:`release`,in:e};mO.postMessage(r)});sO(e)},kO=async(e,t,n,r,i,a)=>{if(pO()){if(n.some(e=>e[3]!==`cpu`))throw Error(`input tensor on GPU is not supported for proxy.`);if(i.some(e=>e))throw Error(`pre-allocated output tensor is not supported for proxy.`);return SO(),new Promise((i,o)=>{xO(`run`,[i,o]);let s=n,c={type:`run`,in:{sessionId:e,inputIndices:t,inputs:s,outputIndices:r,options:a}};mO.postMessage(c,dO(s))})}return lO(e,t,n,r,i,a)},AO=async e=>{if(pO())return SO(),new Promise((t,n)=>{xO(`end-profiling`,[t,n]);let r={type:`end-profiling`,in:e};mO.postMessage(r)});uO(e)}}),MO,NO,PO,FO=K(()=>{K_(),jO(),q(),q_(),Yv(),MO=(e,t)=>{switch(e.location){case`cpu`:return[e.type,e.dims,e.data,`cpu`];case`gpu-buffer`:return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},`gpu-buffer`];case`ml-tensor`:return[e.type,e.dims,{mlTensor:e.mlTensor},`ml-tensor`];default:throw Error(`invalid data location: ${e.location} for ${t()}`)}},NO=e=>{switch(e[3]){case`cpu`:return new A_(e[0],e[2],e[1]);case`gpu-buffer`:{let t=e[0];if(!Gv(t))throw Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:n,download:r,dispose:i}=e[2];return A_.fromGpuBuffer(n,{dataType:t,dims:e[1],download:r,dispose:i})}case`ml-tensor`:{let t=e[0];if(!Kv(t))throw Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:n,download:r,dispose:i}=e[2];return A_.fromMLTensor(n,{dataType:t,dims:e[1],download:r,dispose:i})}default:throw Error(`invalid data location: ${e[3]}`)}},PO=class{async fetchModelAndCopyToWasmMemory(e){return EO(await Jv(e))}async loadModel(e,t){P_();let n;n=typeof e==`string`?await this.fetchModelAndCopyToWasmMemory(e):e,[this.sessionId,this.inputNames,this.outputNames]=await DO(n,t),F_()}async dispose(){return OO(this.sessionId)}async run(e,t,n){P_();let r=[],i=[];Object.entries(e).forEach(e=>{let t=e[0],n=e[1],a=this.inputNames.indexOf(t);if(a===-1)throw Error(`invalid input '${t}'`);r.push(n),i.push(a)});let a=[],o=[];Object.entries(t).forEach(e=>{let t=e[0],n=e[1],r=this.outputNames.indexOf(t);if(r===-1)throw Error(`invalid output '${t}'`);a.push(n),o.push(r)});let s=r.map((e,t)=>MO(e,()=>`input "${this.inputNames[i[t]]}"`)),c=a.map((e,t)=>e?MO(e,()=>`output "${this.outputNames[o[t]]}"`):null),l=await kO(this.sessionId,i,s,o,c,n),u={};for(let e=0;e<l.length;e++)u[this.outputNames[o[e]]]=a[e]??NO(l[e]);return F_(),u}startProfiling(){}endProfiling(){AO(this.sessionId)}}}),IO={};qg(IO,{OnnxruntimeWebAssemblyBackend:()=>RO,initializeFlags:()=>LO,wasmBackend:()=>zO});var LO,RO,zO,BO=K(()=>{K_(),jO(),FO(),LO=()=>{if((typeof c_.wasm.initTimeout!=`number`||c_.wasm.initTimeout<0)&&(c_.wasm.initTimeout=0),c_.wasm.simd===!1&&console.warn(`Deprecated property "env.wasm.simd" is set to false. non-SIMD build is no longer provided, and this setting will be ignored.`),typeof c_.wasm.proxy!=`boolean`&&(c_.wasm.proxy=!1),typeof c_.wasm.trace!=`boolean`&&(c_.wasm.trace=!1),typeof c_.wasm.numThreads!=`number`||!Number.isInteger(c_.wasm.numThreads)||c_.wasm.numThreads<=0){if(typeof self<`u`&&!self.crossOriginIsolated)c_.wasm.numThreads=1;else{let e=typeof navigator>`u`?Kg(`node:os`).cpus().length:navigator.hardwareConcurrency;c_.wasm.numThreads=Math.min(4,Math.ceil((e||1)/2))}}},RO=class{async init(e){LO(),await wO(),await TO(e)}async createInferenceSessionHandler(e,t){let n=new PO;return await n.loadModel(e,t),Promise.resolve(n)}},zO=new RO});K_(),K_(),K_();var VO=`1.21.0`,HO=G_;{let e=(BO(),Yg(IO)).wasmBackend;Qg(`webgpu`,e,5),Qg(`webnn`,e,5),Qg(`cpu`,e,10),Qg(`wasm`,e,10)}Object.defineProperty(c_.versions,"web",{value:VO,enumerable:!0});export{s as n,c as t};