!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(self,(()=>{return e={669:(e,t,n)=>{e.exports=n(609)},448:(e,t,n)=>{"use strict";var r=n(867),a=n(26),s=n(372),o=n(327),i=n(97),c=n(109),u=n(985),f=n(61),p=n(874),d=n(263);e.exports=function(e){return new Promise((function(t,n){var h,l=e.data,m=e.headers,y=e.responseType;function v(){e.cancelToken&&e.cancelToken.unsubscribe(h),e.signal&&e.signal.removeEventListener("abort",h)}r.isFormData(l)&&delete m["Content-Type"];var w=new XMLHttpRequest;if(e.auth){var g=e.auth.username||"",P=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";m.Authorization="Basic "+btoa(g+":"+P)}var b=i(e.baseURL,e.url);function x(){if(w){var r="getAllResponseHeaders"in w?c(w.getAllResponseHeaders()):null,s={data:y&&"text"!==y&&"json"!==y?w.response:w.responseText,status:w.status,statusText:w.statusText,headers:r,config:e,request:w};a((function(e){t(e),v()}),(function(e){n(e),v()}),s),w=null}}if(w.open(e.method.toUpperCase(),o(b,e.params,e.paramsSerializer),!0),w.timeout=e.timeout,"onloadend"in w?w.onloadend=x:w.onreadystatechange=function(){w&&4===w.readyState&&(0!==w.status||w.responseURL&&0===w.responseURL.indexOf("file:"))&&setTimeout(x)},w.onabort=function(){w&&(n(f("Request aborted",e,"ECONNABORTED",w)),w=null)},w.onerror=function(){n(f("Network Error",e,null,w)),w=null},w.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",r=e.transitional||p;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(f(t,e,r.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",w)),w=null},r.isStandardBrowserEnv()){var E=(e.withCredentials||u(b))&&e.xsrfCookieName?s.read(e.xsrfCookieName):void 0;E&&(m[e.xsrfHeaderName]=E)}"setRequestHeader"in w&&r.forEach(m,(function(e,t){void 0===l&&"content-type"===t.toLowerCase()?delete m[t]:w.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(w.withCredentials=!!e.withCredentials),y&&"json"!==y&&(w.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&w.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&w.upload&&w.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(h=function(e){w&&(n(!e||e&&e.type?new d("canceled"):e),w.abort(),w=null)},e.cancelToken&&e.cancelToken.subscribe(h),e.signal&&(e.signal.aborted?h():e.signal.addEventListener("abort",h))),l||(l=null),w.send(l)}))}},609:(e,t,n)=>{"use strict";var r=n(867),a=n(849),s=n(321),o=n(185),i=function e(t){var n=new s(t),i=a(s.prototype.request,n);return r.extend(i,s.prototype,n),r.extend(i,n),i.create=function(n){return e(o(t,n))},i}(n(546));i.Axios=s,i.Cancel=n(263),i.CancelToken=n(972),i.isCancel=n(502),i.VERSION=n(288).version,i.all=function(e){return Promise.all(e)},i.spread=n(713),i.isAxiosError=n(268),e.exports=i,e.exports.default=i},263:e=>{"use strict";function t(e){this.message=e}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,e.exports=t},972:(e,t,n)=>{"use strict";var r=n(263);function a(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;this.promise.then((function(e){if(n._listeners){var t,r=n._listeners.length;for(t=0;t<r;t++)n._listeners[t](e);n._listeners=null}})),this.promise.then=function(e){var t,r=new Promise((function(e){n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}a.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},a.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},a.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},a.source=function(){var e;return{token:new a((function(t){e=t})),cancel:e}},e.exports=a},502:e=>{"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},321:(e,t,n)=>{"use strict";var r=n(867),a=n(327),s=n(782),o=n(572),i=n(185),c=n(875),u=c.validators;function f(e){this.defaults=e,this.interceptors={request:new s,response:new s}}f.prototype.request=function(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},(t=i(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var n=t.transitional;void 0!==n&&c.assertOptions(n,{silentJSONParsing:u.transitional(u.boolean),forcedJSONParsing:u.transitional(u.boolean),clarifyTimeoutError:u.transitional(u.boolean)},!1);var r=[],a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,r.unshift(e.fulfilled,e.rejected))}));var s,f=[];if(this.interceptors.response.forEach((function(e){f.push(e.fulfilled,e.rejected)})),!a){var p=[o,void 0];for(Array.prototype.unshift.apply(p,r),p=p.concat(f),s=Promise.resolve(t);p.length;)s=s.then(p.shift(),p.shift());return s}for(var d=t;r.length;){var h=r.shift(),l=r.shift();try{d=h(d)}catch(e){l(e);break}}try{s=o(d)}catch(e){return Promise.reject(e)}for(;f.length;)s=s.then(f.shift(),f.shift());return s},f.prototype.getUri=function(e){return e=i(this.defaults,e),a(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){f.prototype[e]=function(t,n){return this.request(i(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){f.prototype[e]=function(t,n,r){return this.request(i(r||{},{method:e,url:t,data:n}))}})),e.exports=f},782:(e,t,n)=>{"use strict";var r=n(867);function a(){this.handlers=[]}a.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},a.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},a.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=a},97:(e,t,n)=>{"use strict";var r=n(793),a=n(303);e.exports=function(e,t){return e&&!r(t)?a(e,t):t}},61:(e,t,n)=>{"use strict";var r=n(481);e.exports=function(e,t,n,a,s){var o=new Error(e);return r(o,t,n,a,s)}},572:(e,t,n)=>{"use strict";var r=n(867),a=n(527),s=n(502),o=n(546),i=n(263);function c(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new i("canceled")}e.exports=function(e){return c(e),e.headers=e.headers||{},e.data=a.call(e,e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||o.adapter)(e).then((function(t){return c(e),t.data=a.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return s(t)||(c(e),t&&t.response&&(t.response.data=a.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},481:e=>{"use strict";e.exports=function(e,t,n,r,a){return e.config=t,n&&(e.code=n),e.request=r,e.response=a,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e}},185:(e,t,n)=>{"use strict";var r=n(867);e.exports=function(e,t){t=t||{};var n={};function a(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function s(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:a(void 0,e[n]):a(e[n],t[n])}function o(e){if(!r.isUndefined(t[e]))return a(void 0,t[e])}function i(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:a(void 0,e[n]):a(void 0,t[n])}function c(n){return n in t?a(e[n],t[n]):n in e?a(void 0,e[n]):void 0}var u={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c};return r.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=u[e]||s,a=t(e);r.isUndefined(a)&&t!==c||(n[e]=a)})),n}},26:(e,t,n)=>{"use strict";var r=n(61);e.exports=function(e,t,n){var a=n.config.validateStatus;n.status&&a&&!a(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},527:(e,t,n)=>{"use strict";var r=n(867),a=n(546);e.exports=function(e,t,n){var s=this||a;return r.forEach(n,(function(n){e=n.call(s,e,t)})),e}},546:(e,t,n)=>{"use strict";var r=n(867),a=n(16),s=n(481),o=n(874),i={"Content-Type":"application/x-www-form-urlencoded"};function c(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var u,f={transitional:o,adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(u=n(448)),u),transformRequest:[function(e,t){return a(t,"Accept"),a(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(c(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)||t&&"application/json"===t["Content-Type"]?(c(t,"application/json"),function(e,t,n){if(r.isString(e))try{return(0,JSON.parse)(e),r.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||f.transitional,n=t&&t.silentJSONParsing,a=t&&t.forcedJSONParsing,o=!n&&"json"===this.responseType;if(o||a&&r.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(o){if("SyntaxError"===e.name)throw s(e,this,"E_JSON_PARSE");throw e}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){f.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){f.headers[e]=r.merge(i)})),e.exports=f},874:e=>{"use strict";e.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}},288:e=>{e.exports={version:"0.26.1"}},849:e=>{"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},327:(e,t,n)=>{"use strict";var r=n(867);function a(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var s;if(n)s=n(t);else if(r.isURLSearchParams(t))s=t.toString();else{var o=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),o.push(a(t)+"="+a(e))})))})),s=o.join("&")}if(s){var i=e.indexOf("#");-1!==i&&(e=e.slice(0,i)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}},303:e=>{"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},372:(e,t,n)=>{"use strict";var r=n(867);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,a,s,o){var i=[];i.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),r.isString(a)&&i.push("path="+a),r.isString(s)&&i.push("domain="+s),!0===o&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},793:e=>{"use strict";e.exports=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}},268:(e,t,n)=>{"use strict";var r=n(867);e.exports=function(e){return r.isObject(e)&&!0===e.isAxiosError}},985:(e,t,n)=>{"use strict";var r=n(867);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function a(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=a(window.location.href),function(t){var n=r.isString(t)?a(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},16:(e,t,n)=>{"use strict";var r=n(867);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},109:(e,t,n)=>{"use strict";var r=n(867),a=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,s,o={};return e?(r.forEach(e.split("\n"),(function(e){if(s=e.indexOf(":"),t=r.trim(e.substr(0,s)).toLowerCase(),n=r.trim(e.substr(s+1)),t){if(o[t]&&a.indexOf(t)>=0)return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([n]):o[t]?o[t]+", "+n:n}})),o):o}},713:e=>{"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},875:(e,t,n)=>{"use strict";var r=n(288).version,a={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){a[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));var s={};a.transitional=function(e,t,n){function a(e,t){return"[Axios v"+r+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return function(n,r,o){if(!1===e)throw new Error(a(r," has been removed"+(t?" in "+t:"")));return t&&!s[r]&&(s[r]=!0,console.warn(a(r," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,r,o)}},e.exports={assertOptions:function(e,t,n){if("object"!=typeof e)throw new TypeError("options must be an object");for(var r=Object.keys(e),a=r.length;a-- >0;){var s=r[a],o=t[s];if(o){var i=e[s],c=void 0===i||o(i,s,e);if(!0!==c)throw new TypeError("option "+s+" must be "+c)}else if(!0!==n)throw Error("Unknown option "+s)}},validators:a}},867:(e,t,n)=>{"use strict";var r=n(849),a=Object.prototype.toString;function s(e){return Array.isArray(e)}function o(e){return void 0===e}function i(e){return"[object ArrayBuffer]"===a.call(e)}function c(e){return null!==e&&"object"==typeof e}function u(e){if("[object Object]"!==a.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function f(e){return"[object Function]"===a.call(e)}function p(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),s(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.call(null,e[a],a,e)}e.exports={isArray:s,isArrayBuffer:i,isBuffer:function(e){return null!==e&&!o(e)&&null!==e.constructor&&!o(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"[object FormData]"===a.call(e)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&i(e.buffer)},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:c,isPlainObject:u,isUndefined:o,isDate:function(e){return"[object Date]"===a.call(e)},isFile:function(e){return"[object File]"===a.call(e)},isBlob:function(e){return"[object Blob]"===a.call(e)},isFunction:f,isStream:function(e){return c(e)&&f(e.pipe)},isURLSearchParams:function(e){return"[object URLSearchParams]"===a.call(e)},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:p,merge:function e(){var t={};function n(n,r){u(t[r])&&u(n)?t[r]=e(t[r],n):u(n)?t[r]=e({},n):s(n)?t[r]=n.slice():t[r]=n}for(var r=0,a=arguments.length;r<a;r++)p(arguments[r],n);return t},extend:function(e,t,n){return p(t,(function(t,a){e[a]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},971:(e,t,n)=>{const{request:r,APIError:a}=n(4);e.exports={getInfo:async function(){return new Promise((async(e,t)=>{await r.get("/v1/account").then((t=>{e(t.data)})).catch((e=>{t(a(e))}))}))},updateInfo:async function(e){return new Promise((async(t,n)=>{await r.put("/v1/account",e).then((e=>{t(e.data)})).catch((e=>{n(a(e))}))}))},getPreferences:async function(){return new Promise((async(e,t)=>{await r.get("/v1/account/preferences").then((t=>{e(t.data)})).catch((e=>{t(a(e))}))}))},updatePreferences:async function(e){return new Promise((async(t,n)=>{await r.put("/v1/account/preferences",e).then((e=>{t(e.data)})).catch((e=>{n(a(e))}))}))}}},256:(e,t,n)=>{const{request:r,APIError:a}=n(4);e.exports={getEvents:async function(e){return new Promise((async(t,n)=>{await r.get("/v1/account/events",{params:e||{}}).then((e=>{t(e.data.data)})).catch((e=>{n(a(e))}))}))},getEventData:async function(e){return new Promise((async(t,n)=>{await r.get("/v1/account/events/"+e).then((e=>{t(e.data)})).catch((e=>{n(a(e))}))}))}}},178:(e,t,n)=>{const{request:r,APIError:a}=n(4);e.exports={getInvoices:async function(){return new Promise((async(e,t)=>{await r.get("/v1/account/invoices").then((t=>{e(t.data.data)})).catch((e=>{t(a(e))}))}))},getInvoice:async function(e){return new Promise((async(t,n)=>{await r.get("/v1/account/invoices/"+e).then((e=>{t(e.data)})).catch((e=>{n(a(e))}))}))}}},312:(e,t,n)=>{const{request:r,APIError:a}=n(4);e.exports={getLogins:async function(e){return new Promise((async(t,n)=>{await r.get("/v1/account/logins",{params:e||{}}).then((e=>{t(e.data.data)})).catch((e=>{n(a(e))}))}))},getLoginData:async function(e){return new Promise((async(t,n)=>{await r.get("/v1/account/logins/"+e).then((e=>{t(e.data)})).catch((e=>{n(a(e))}))}))}}},304:(e,t,n)=>{const{request:r,APIError:a}=n(4);e.exports={getPaymentMethods:async function(){return new Promise((async(e,t)=>{await r.get("/v1/account/payment-methods").then((t=>{e(t.data.data)})).catch((e=>{t(a(e))}))}))},getPaymentMethod:async function(e){return new Promise((async(t,n)=>{await r.get(`/v1/account/payment-methods/${e}`).then((e=>{t(e.data)})).catch((e=>{n(a(e))}))}))},addPaymentMethod:async function(){return new Promise((async(e,t)=>{await r.post("/v1/account/payment-methods").then((t=>{e(t.data)})).catch((e=>{t(a(e))}))}))},deletePaymentMethod:async function(e){return new Promise((async(t,n)=>{await r.delete("/v1/account/payment-methods/"+e).then((e=>{t(e.data)})).catch((e=>{n(a(e))}))}))},makePaymentMethodDefault:async function(e){return new Promise((async(t,n)=>{await r.post(`/v1/account/payment-methods/${e}/make-default`).then((e=>{t(e.data)})).catch((e=>{n(a(e))}))}))}}},982:(e,t,n)=>{const{request:r,APIError:a}=n(4);e.exports={getTokens:async function(e){return new Promise((async(t,n)=>{await r.get("/v1/account/tokens",{params:e||{}}).then((e=>{t(e.data.data)})).catch((e=>{n(a(e))}))}))},getToken:async function(e){return new Promise((async(t,n)=>{await r.get("/v1/account/tokens/"+e).then((e=>{t(e.data)})).catch((e=>{n(a(e))}))}))},createToken:async function(e){return new Promise((async(t,n)=>{await r.post("/v1/account/tokens",{label:e}).then((e=>{t(e.data)})).catch((e=>{n(a(e))}))}))},updateToken:async function(e,t){return new Promise((async(n,s)=>{await r.put("/v1/account/tokens",{id:e,label:t}).then((e=>{n(e.data)})).catch((e=>{s(a(e))}))}))},deleteToken:async function(e){return new Promise((async(t,n)=>{await r.delete("/v1/account/tokens/"+e).then((e=>{t(e.data)})).catch((e=>{n(a(e))}))}))}}},138:(e,t,n)=>{e.exports={Request:n(4).request,setToken:n(4).setToken,APIError:n(4).APIError,Account:n(971),Invoices:n(178),Payments:n(304),Tokens:n(982),Events:n(256),Logins:n(312),Teams:n(558),TeamPayments:n(896),Projects:n(517),ProjectEvents:n(907),Services:n(509),ServiceInfo:n(537),Support:n(335),Utils:n(484)}},907:(e,t,n)=>{const{request:r,APIError:a}=n(4);e.exports={getEvents:async function(e,t){return new Promise((async(n,s)=>{await r.get(`/v1/projects/${e}/events`,{params:t||{}}).then((e=>{n(e.data.data)})).catch((e=>{s(a(e))}))}))},getEventData:async function(e,t){return new Promise((async(n,s)=>{await r.get(`/v1/projects/${e}/events/${t}`).then((e=>{n(e.data)})).catch((e=>{s(a(e))}))}))}}},517:(e,t,n)=>{const{request:r,APIError:a}=n(4);e.exports={getProjects:async function(e){return new Promise((async(e,t)=>{await r.get("/v1/projects").then((t=>{e(t.data.data)})).catch((e=>{t(a(e))}))}))},getProject:async function(e){return new Promise((async(t,n)=>{await r.get(`/v1/projects/${e}`).then((e=>{t(e.data)})).catch((e=>{n(a(e))}))}))},createProject:async function(e){return new Promise((async(t,n)=>{await r.post("/v1/projects/",e).then((e=>{t(e.data)})).catch((e=>{n(a(e))}))}))},updateProject:async function(e,t){return new Promise((async(n,s)=>{await r.put(`/v1/projects/${e}`,t).then((e=>{n(e.data)})).catch((e=>{s(a(e))}))}))},deleteProject:async function(e){return new Promise((async(t,n)=>{await r.delete(`/v1/projects/${e}`).then((e=>{t(e.data)})).catch((e=>{n(a(e))}))}))}}},4:(e,t,n)=>{const r=n(669).default.create({baseURL:"http://localhost:8080",headers:{"Content-Type":"application/json",Accept:"application/vnd.evecloud.v1+json"},timeout:"50000",timeoutErrorMessage:"Internal Server Error"});e.exports={request:r,setToken:e=>r.interceptors.request.use((t=>({...t,headers:{...t.headers,Authorization:`Bearer ${e}`}}))),APIError:e=>"ECONNREFUSED"===e.code?"Internal Server Error":"ECONNABORTED"===e.code?"The request has been aborted":"ETIMEDOUT"===e.code?"Unable to connect to the server":502===e.response.status?"Bad Gateway":403===e.response.status?"Unauthorized":e.response.data.message?e.response.data.message:"Internal Server Error",setTeam:e=>r.interceptors.request.use((t=>({...t,params:{...t.params,teamId:e}})))}},537:(e,t,n)=>{const{request:r,APIError:a}=n(4);e.exports={getResources:async function(e,t){return new Promise((async(n,s)=>{await r.get(`/v1/projects/${e}/services/${t}/resources`).then((e=>{n(e.data)})).catch((e=>{s(a(e))}))}))},getWebSocket:async function(e,t){return new Promise((async(n,s)=>{await r.get(`/v1/projects/${e}/services/${t}/websocket`).then((e=>{n(e.data)})).catch((e=>{s(a(e))}))}))},getSftp:async function(e,t){return new Promise((async(n,s)=>{await r.get(`/v1/projects/${e}/services/${t}/sftp`).then((e=>{n(e.data)})).catch((e=>{s(a(e))}))}))},getLogs:async function(e,t,n,s,o,i){return new Promise((async(c,u)=>{await r.get(`/v1/projects/${e}/services/${t}/logs`,{params:{since:n,until:s,timestamps:o,tail:i}}).then((e=>{c(e.data)})).catch((e=>{u(a(e))}))}))}}},509:(e,t,n)=>{const{request:r,APIError:a}=n(4);e.exports={getServices:async function(e,t){return new Promise((async(n,s)=>{await r.get(`/v1/projects/${e}/services`,{params:{...t}}).then((e=>{n(e.data.data)})).catch((e=>{s(a(e))}))}))},getService:async function(e,t){return new Promise((async(n,s)=>{await r.get(`/v1/projects/${e}/services/${t}`).then((e=>{n(e.data)})).catch((e=>{s(a(e))}))}))},createService:async function(e,t){return new Promise((async(n,s)=>{await r.post(`/v1/projects/${e}/services`,t).then((e=>{n(e.data)})).catch((e=>{s(a(e))}))}))},deleteProject:async function(e,t){return new Promise((async(n,s)=>{await r.delete(`/v1/projects/${e}/service/${t}`).then((e=>{n(e.data)})).catch((e=>{s(a(e))}))}))}}},335:(e,t,n)=>{const{request:r,APIError:a}=n(4);e.exports={getTickets:async function(e){return new Promise((async(t,n)=>{await r.get("/v1/support/tickets",{params:e||{}}).then((e=>{t(e.data.data)})).catch((e=>{n(a(e))}))}))},getTicket:async function(e){return new Promise((async(t,n)=>{await r.get(`/v1/support/tickets/${e}`).then((e=>{t(e.data)})).catch((e=>{n(a(e))}))}))},createTicket:async function(e,t){return new Promise((async(n,s)=>{await r.post("/v1/support/tickets",{summary:e,message:t}).then((e=>{n(e.data)})).catch((e=>{s(a(e))}))}))},getReplies:async function(e,t){return new Promise((async(n,s)=>{await r.get(`/v1/support/tickets/${e}/replies`,{params:t||{}}).then((e=>{n(e.data.data)})).catch((e=>{s(a(e))}))}))},createReply:async function(e,t){return new Promise((async(n,s)=>{await r.post(`/v1/support/tickets/${e}/replies`,{message:t}).then((e=>{n(e.data)})).catch((e=>{s(a(e))}))}))},closeTicket:async function(e){return new Promise((async(t,n)=>{await r.post(`/v1/support/tickets/${e}/close`).then((e=>{t(e.data)})).catch((e=>{n(a(e))}))}))}}},896:(e,t,n)=>{const{request:r,APIError:a}=n(4);e.exports={getPaymentMethods:async function(){return new Promise((async(e,t)=>{await r.get("/v1/teams/payment-methods").then((t=>{e(t.data.data)})).catch((e=>{t(a(e))}))}))},getPaymentMethod:async function(e){return new Promise((async(t,n)=>{await r.get(`/v1/teams/payment-methods/${e}`).then((e=>{t(e.data)})).catch((e=>{n(a(e))}))}))},addPaymentMethod:async function(){return new Promise((async(e,t)=>{await r.post("/v1/teams/payment-methods").then((t=>{e(t.data)})).catch((e=>{t(a(e))}))}))},deletePaymentMethod:async function(e){return new Promise((async(t,n)=>{await r.delete("/v1/teams/payment-methods/"+e).then((e=>{t(e.data)})).catch((e=>{n(a(e))}))}))},makePaymentMethodDefault:async function(e){return new Promise((async(t,n)=>{await r.post(`/v1/teams/payment-methods/${e}/make-default`).then((e=>{t(e.data)})).catch((e=>{n(a(e))}))}))}}},558:(e,t,n)=>{const{request:r,APIError:a}=n(4);e.exports={getTeams:async function(e){return new Promise((async(t,n)=>{await r.get("/v1/teams",{params:e||{}}).then((e=>{t(e.data.data)})).catch((e=>{n(a(e))}))}))},getTeam:async function(e){return new Promise((async(t,n)=>{await r.get("/v1/teams/"+e).then((e=>{t(e.data)})).catch((e=>{n(a(e))}))}))},createTeam:async function(e){return new Promise((async(t,n)=>{await r.post("/v1/teams/",e).then((e=>{t(e.data)})).catch((e=>{n(a(e))}))}))},updateTeam:async function(e,t){return new Promise((async(n,s)=>{await r.put(`/v1/teams/${e}`,t).then((e=>{n(e.data)})).catch((e=>{s(a(e))}))}))},deleteTeam:async function(e){return new Promise((async(t,n)=>{await r.delete(`/v1/teams/${e}`).then((e=>{t(e.data)})).catch((e=>{n(a(e))}))}))}}},484:(e,t,n)=>{const{request:r,APIError:a}=n(4);e.exports={getStripePublicKey:async function(){return new Promise((async(e,t)=>{await r.get("/v1/payments/stripe/public-key").then((t=>{e(t.data)})).catch((e=>{t(a(e))}))}))}}}},t={},function n(r){var a=t[r];if(void 0!==a)return a.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,n),s.exports}(138);var e,t}));