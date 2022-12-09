!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(self,(()=>{return e={669:(e,t,n)=>{e.exports=n(609)},448:(e,t,n)=>{"use strict";var r=n(867),s=n(26),o=n(372),a=n(327),i=n(97),c=n(109),u=n(985),f=n(61),p=n(874),d=n(263);e.exports=function(e){return new Promise((function(t,n){var h,l=e.data,m=e.headers,y=e.responseType;function v(){e.cancelToken&&e.cancelToken.unsubscribe(h),e.signal&&e.signal.removeEventListener("abort",h)}r.isFormData(l)&&delete m["Content-Type"];var g=new XMLHttpRequest;if(e.auth){var w=e.auth.username||"",b=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";m.Authorization="Basic "+btoa(w+":"+b)}var P=i(e.baseURL,e.url);function x(){if(g){var r="getAllResponseHeaders"in g?c(g.getAllResponseHeaders()):null,o={data:y&&"text"!==y&&"json"!==y?g.response:g.responseText,status:g.status,statusText:g.statusText,headers:r,config:e,request:g};s((function(e){t(e),v()}),(function(e){n(e),v()}),o),g=null}}if(g.open(e.method.toUpperCase(),a(P,e.params,e.paramsSerializer),!0),g.timeout=e.timeout,"onloadend"in g?g.onloadend=x:g.onreadystatechange=function(){g&&4===g.readyState&&(0!==g.status||g.responseURL&&0===g.responseURL.indexOf("file:"))&&setTimeout(x)},g.onabort=function(){g&&(n(f("Request aborted",e,"ECONNABORTED",g)),g=null)},g.onerror=function(){n(f("Network Error",e,null,g)),g=null},g.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",r=e.transitional||p;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(f(t,e,r.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",g)),g=null},r.isStandardBrowserEnv()){var E=(e.withCredentials||u(P))&&e.xsrfCookieName?o.read(e.xsrfCookieName):void 0;E&&(m[e.xsrfHeaderName]=E)}"setRequestHeader"in g&&r.forEach(m,(function(e,t){void 0===l&&"content-type"===t.toLowerCase()?delete m[t]:g.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(g.withCredentials=!!e.withCredentials),y&&"json"!==y&&(g.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&g.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&g.upload&&g.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(h=function(e){g&&(n(!e||e&&e.type?new d("canceled"):e),g.abort(),g=null)},e.cancelToken&&e.cancelToken.subscribe(h),e.signal&&(e.signal.aborted?h():e.signal.addEventListener("abort",h))),l||(l=null),g.send(l)}))}},609:(e,t,n)=>{"use strict";var r=n(867),s=n(849),o=n(321),a=n(185),i=function e(t){var n=new o(t),i=s(o.prototype.request,n);return r.extend(i,o.prototype,n),r.extend(i,n),i.create=function(n){return e(a(t,n))},i}(n(546));i.Axios=o,i.Cancel=n(263),i.CancelToken=n(972),i.isCancel=n(502),i.VERSION=n(288).version,i.all=function(e){return Promise.all(e)},i.spread=n(713),i.isAxiosError=n(268),e.exports=i,e.exports.default=i},263:e=>{"use strict";function t(e){this.message=e}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,e.exports=t},972:(e,t,n)=>{"use strict";var r=n(263);function s(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;this.promise.then((function(e){if(n._listeners){var t,r=n._listeners.length;for(t=0;t<r;t++)n._listeners[t](e);n._listeners=null}})),this.promise.then=function(e){var t,r=new Promise((function(e){n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}s.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},s.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},s.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},s.source=function(){var e;return{token:new s((function(t){e=t})),cancel:e}},e.exports=s},502:e=>{"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},321:(e,t,n)=>{"use strict";var r=n(867),s=n(327),o=n(782),a=n(572),i=n(185),c=n(875),u=c.validators;function f(e){this.defaults=e,this.interceptors={request:new o,response:new o}}f.prototype.request=function(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},(t=i(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var n=t.transitional;void 0!==n&&c.assertOptions(n,{silentJSONParsing:u.transitional(u.boolean),forcedJSONParsing:u.transitional(u.boolean),clarifyTimeoutError:u.transitional(u.boolean)},!1);var r=[],s=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(s=s&&e.synchronous,r.unshift(e.fulfilled,e.rejected))}));var o,f=[];if(this.interceptors.response.forEach((function(e){f.push(e.fulfilled,e.rejected)})),!s){var p=[a,void 0];for(Array.prototype.unshift.apply(p,r),p=p.concat(f),o=Promise.resolve(t);p.length;)o=o.then(p.shift(),p.shift());return o}for(var d=t;r.length;){var h=r.shift(),l=r.shift();try{d=h(d)}catch(e){l(e);break}}try{o=a(d)}catch(e){return Promise.reject(e)}for(;f.length;)o=o.then(f.shift(),f.shift());return o},f.prototype.getUri=function(e){return e=i(this.defaults,e),s(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){f.prototype[e]=function(t,n){return this.request(i(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){f.prototype[e]=function(t,n,r){return this.request(i(r||{},{method:e,url:t,data:n}))}})),e.exports=f},782:(e,t,n)=>{"use strict";var r=n(867);function s(){this.handlers=[]}s.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},s.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},s.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=s},97:(e,t,n)=>{"use strict";var r=n(793),s=n(303);e.exports=function(e,t){return e&&!r(t)?s(e,t):t}},61:(e,t,n)=>{"use strict";var r=n(481);e.exports=function(e,t,n,s,o){var a=new Error(e);return r(a,t,n,s,o)}},572:(e,t,n)=>{"use strict";var r=n(867),s=n(527),o=n(502),a=n(546),i=n(263);function c(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new i("canceled")}e.exports=function(e){return c(e),e.headers=e.headers||{},e.data=s.call(e,e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||a.adapter)(e).then((function(t){return c(e),t.data=s.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return o(t)||(c(e),t&&t.response&&(t.response.data=s.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},481:e=>{"use strict";e.exports=function(e,t,n,r,s){return e.config=t,n&&(e.code=n),e.request=r,e.response=s,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e}},185:(e,t,n)=>{"use strict";var r=n(867);e.exports=function(e,t){t=t||{};var n={};function s(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function o(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:s(void 0,e[n]):s(e[n],t[n])}function a(e){if(!r.isUndefined(t[e]))return s(void 0,t[e])}function i(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:s(void 0,e[n]):s(void 0,t[n])}function c(n){return n in t?s(e[n],t[n]):n in e?s(void 0,e[n]):void 0}var u={url:a,method:a,data:a,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c};return r.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=u[e]||o,s=t(e);r.isUndefined(s)&&t!==c||(n[e]=s)})),n}},26:(e,t,n)=>{"use strict";var r=n(61);e.exports=function(e,t,n){var s=n.config.validateStatus;n.status&&s&&!s(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},527:(e,t,n)=>{"use strict";var r=n(867),s=n(546);e.exports=function(e,t,n){var o=this||s;return r.forEach(n,(function(n){e=n.call(o,e,t)})),e}},546:(e,t,n)=>{"use strict";var r=n(867),s=n(16),o=n(481),a=n(874),i={"Content-Type":"application/x-www-form-urlencoded"};function c(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var u,f={transitional:a,adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(u=n(448)),u),transformRequest:[function(e,t){return s(t,"Accept"),s(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(c(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)||t&&"application/json"===t["Content-Type"]?(c(t,"application/json"),function(e,t,n){if(r.isString(e))try{return(0,JSON.parse)(e),r.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||f.transitional,n=t&&t.silentJSONParsing,s=t&&t.forcedJSONParsing,a=!n&&"json"===this.responseType;if(a||s&&r.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(a){if("SyntaxError"===e.name)throw o(e,this,"E_JSON_PARSE");throw e}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){f.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){f.headers[e]=r.merge(i)})),e.exports=f},874:e=>{"use strict";e.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}},288:e=>{e.exports={version:"0.26.1"}},849:e=>{"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},327:(e,t,n)=>{"use strict";var r=n(867);function s(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var o;if(n)o=n(t);else if(r.isURLSearchParams(t))o=t.toString();else{var a=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),a.push(s(t)+"="+s(e))})))})),o=a.join("&")}if(o){var i=e.indexOf("#");-1!==i&&(e=e.slice(0,i)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}},303:e=>{"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},372:(e,t,n)=>{"use strict";var r=n(867);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,s,o,a){var i=[];i.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),r.isString(s)&&i.push("path="+s),r.isString(o)&&i.push("domain="+o),!0===a&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},793:e=>{"use strict";e.exports=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}},268:(e,t,n)=>{"use strict";var r=n(867);e.exports=function(e){return r.isObject(e)&&!0===e.isAxiosError}},985:(e,t,n)=>{"use strict";var r=n(867);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function s(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=s(window.location.href),function(t){var n=r.isString(t)?s(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},16:(e,t,n)=>{"use strict";var r=n(867);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},109:(e,t,n)=>{"use strict";var r=n(867),s=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,o,a={};return e?(r.forEach(e.split("\n"),(function(e){if(o=e.indexOf(":"),t=r.trim(e.substr(0,o)).toLowerCase(),n=r.trim(e.substr(o+1)),t){if(a[t]&&s.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([n]):a[t]?a[t]+", "+n:n}})),a):a}},713:e=>{"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},875:(e,t,n)=>{"use strict";var r=n(288).version,s={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){s[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));var o={};s.transitional=function(e,t,n){function s(e,t){return"[Axios v"+r+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return function(n,r,a){if(!1===e)throw new Error(s(r," has been removed"+(t?" in "+t:"")));return t&&!o[r]&&(o[r]=!0,console.warn(s(r," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,r,a)}},e.exports={assertOptions:function(e,t,n){if("object"!=typeof e)throw new TypeError("options must be an object");for(var r=Object.keys(e),s=r.length;s-- >0;){var o=r[s],a=t[o];if(a){var i=e[o],c=void 0===i||a(i,o,e);if(!0!==c)throw new TypeError("option "+o+" must be "+c)}else if(!0!==n)throw Error("Unknown option "+o)}},validators:s}},867:(e,t,n)=>{"use strict";var r=n(849),s=Object.prototype.toString;function o(e){return Array.isArray(e)}function a(e){return void 0===e}function i(e){return"[object ArrayBuffer]"===s.call(e)}function c(e){return null!==e&&"object"==typeof e}function u(e){if("[object Object]"!==s.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function f(e){return"[object Function]"===s.call(e)}function p(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),o(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.call(null,e[s],s,e)}e.exports={isArray:o,isArrayBuffer:i,isBuffer:function(e){return null!==e&&!a(e)&&null!==e.constructor&&!a(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"[object FormData]"===s.call(e)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&i(e.buffer)},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:c,isPlainObject:u,isUndefined:a,isDate:function(e){return"[object Date]"===s.call(e)},isFile:function(e){return"[object File]"===s.call(e)},isBlob:function(e){return"[object Blob]"===s.call(e)},isFunction:f,isStream:function(e){return c(e)&&f(e.pipe)},isURLSearchParams:function(e){return"[object URLSearchParams]"===s.call(e)},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:p,merge:function e(){var t={};function n(n,r){u(t[r])&&u(n)?t[r]=e(t[r],n):u(n)?t[r]=e({},n):o(n)?t[r]=n.slice():t[r]=n}for(var r=0,s=arguments.length;r<s;r++)p(arguments[r],n);return t},extend:function(e,t,n){return p(t,(function(t,s){e[s]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},971:(e,t,n)=>{const{request:r,APIError:s}=n(4);e.exports={getInfo:async function(){return new Promise((async(e,t)=>{await r.get("/v1/account").then((t=>{e(t.data)})).catch((e=>{t(s(e))}))}))},updateInfo:async function(e){return new Promise((async(t,n)=>{await r.put("/v1/account",e).then((e=>{t(e.data)})).catch((e=>{n(s(e))}))}))},getPreferences:async function(){return new Promise((async(e,t)=>{await r.get("/v1/account/preferences").then((t=>{e(t.data)})).catch((e=>{t(s(e))}))}))},updatePreferences:async function(e){return new Promise((async(t,n)=>{await r.put("/v1/account/preferences",e).then((e=>{t(e.data)})).catch((e=>{n(s(e))}))}))}}},256:(e,t,n)=>{const{request:r,APIError:s}=n(4);e.exports={getEvents:async function(e){return new Promise((async(t,n)=>{await r.get("/v1/account/events",{params:e||{}}).then((e=>{t(e.data.data)})).catch((e=>{n(s(e))}))}))},getEventData:async function(e){return new Promise((async(t,n)=>{await r.get("/v1/account/events/"+e).then((e=>{t(e.data)})).catch((e=>{n(s(e))}))}))}}},178:(e,t,n)=>{const{request:r,APIError:s}=n(4);e.exports={getInvoices:async function(){return new Promise((async(e,t)=>{await r.get("/v1/account/invoices").then((t=>{e(t.data.data)})).catch((e=>{t(s(e))}))}))},getInvoice:async function(e){return new Promise((async(t,n)=>{await r.get("/v1/account/invoices/"+e).then((e=>{t(e.data)})).catch((e=>{n(s(e))}))}))}}},312:(e,t,n)=>{const{request:r,APIError:s}=n(4);e.exports={getLogins:async function(e){return new Promise((async(t,n)=>{await r.get("/v1/account/logins",{params:e||{}}).then((e=>{t(e.data.data)})).catch((e=>{n(s(e))}))}))},getLoginData:async function(e){return new Promise((async(t,n)=>{await r.get("/v1/account/logins/"+e).then((e=>{t(e.data)})).catch((e=>{n(s(e))}))}))}}},304:(e,t,n)=>{const{request:r,APIError:s}=n(4);e.exports={getPaymentMethods:async function(){return new Promise((async(e,t)=>{await r.get("/v1/account/payment-methods").then((t=>{e(t.data.data)})).catch((e=>{t(s(e))}))}))},getPaymentMethod:async function(e){return new Promise((async(t,n)=>{await r.get(`/v1/account/payment-methods/${e}`).then((e=>{t(e.data)})).catch((e=>{n(s(e))}))}))},addPaymentMethod:async function(){return new Promise((async(e,t)=>{await r.post("/v1/account/payment-methods").then((t=>{e(t.data)})).catch((e=>{t(s(e))}))}))},getStripePublicKey:async function(){return new Promise((async(e,t)=>{await r.get("/v1/payments/stripe/public-key").then((t=>{e(t.data)})).catch((e=>{t(s(e))}))}))},deletePaymentMethod:async function(e){return new Promise((async(t,n)=>{await r.delete("/v1/account/payment-methods/"+e).then((e=>{t(e.data)})).catch((e=>{n(s(e))}))}))},makePaymentMethodDefault:async function(e){return new Promise((async(t,n)=>{await r.post(`/v1/account/payment-methods/${e}/make-default`).then((e=>{t(e.data)})).catch((e=>{n(s(e))}))}))}}},982:(e,t,n)=>{const{request:r,APIError:s}=n(4);e.exports={getTokens:async function(e){return new Promise((async(t,n)=>{await r.get("/v1/account/tokens",{params:e||{}}).then((e=>{t(e.data.data)})).catch((e=>{n(s(e))}))}))},getToken:async function(e){return new Promise((async(t,n)=>{await r.get("/v1/account/tokens/"+e).then((e=>{t(e.data)})).catch((e=>{n(s(e))}))}))},createToken:async function(e){return new Promise((async(t,n)=>{await r.post("/v1/account/tokens",{label:e}).then((e=>{t(e.data)})).catch((e=>{n(s(e))}))}))},updateToken:async function(e,t){return new Promise((async(n,o)=>{await r.put("/v1/account/tokens",{id:e,label:t}).then((e=>{n(e.data)})).catch((e=>{o(s(e))}))}))},deleteToken:async function(e){return new Promise((async(t,n)=>{await r.delete("/v1/account/tokens/"+e).then((e=>{t(e.data)})).catch((e=>{n(s(e))}))}))}}},138:(e,t,n)=>{e.exports={Request:n(4).request,setToken:n(4).setToken,APIError:n(4).APIError,Account:n(971),Invoices:n(178),Payments:n(304),Tokens:n(982),Events:n(256),Logins:n(312),Projects:n(517),ProjectInfo:n(374),ProjectManifest:n(526),ProjectActions:n(649),ProjectUsers:n(478),ProjectEvents:n(907)}},649:(e,t,n)=>{const{request:r,APIError:s}=n(4);e.exports={start:async function(e){return new Promise((async(t,n)=>{await r.post(`/v1/projects/${e}/boot`).then((e=>{t(e.data)})).catch((e=>{n(s(e))}))}))},stop:async function(e){return new Promise((async(t,n)=>{await r.post(`/v1/projects/${e}/stop`).then((e=>{t(e.data)})).catch((e=>{n(s(e))}))}))},restart:async function(e){return new Promise((async(t,n)=>{await r.post(`/v1/projects/${e}/restart`).then((e=>{t(e.data)})).catch((e=>{n(s(e))}))}))},execute:async function(e,t){return new Promise((async(n,o)=>{await r.post(`/v1/projects/${e}/exec`,{cmd:t}).then((e=>{n(e.data)})).catch((e=>{o(s(e))}))}))},kill:async function(e){return new Promise((async(t,n)=>{await r.post(`/v1/projects/${e}/kill`).then((e=>{t(e.data)})).catch((e=>{n(s(e))}))}))}}},907:(e,t,n)=>{const{request:r,APIError:s}=n(4);e.exports={getEvents:async function(e,t){return new Promise((async(n,o)=>{await r.get(`/v1/projects/${e}/events`,{params:t||{}}).then((e=>{n(e.data.data)})).catch((e=>{o(s(e))}))}))},getEventData:async function(e,t){return new Promise((async(n,o)=>{await r.get(`/v1/projects/${e}/events/${t}`).then((e=>{n(e.data)})).catch((e=>{o(s(e))}))}))}}},374:(e,t,n)=>{const{request:r,APIError:s}=n(4);e.exports={getResources:async function(e){return new Promise((async(t,n)=>{await r.get(`/v1/projects/${e}/resources`).then((e=>{t(e.data)})).catch((e=>{n(s(e))}))}))},getWebSocket:async function(e){return new Promise((async(t,n)=>{await r.get(`/v1/projects/${e}/websocket`).then((e=>{t(e.data)})).catch((e=>{n(s(e))}))}))},getSftp:async function(e){return new Promise((async(t,n)=>{await r.get(`/v1/projects/${e}/sftp`).then((e=>{t(e.data)})).catch((e=>{n(s(e))}))}))},getLogs:async function(e,t,n,o,a){return new Promise((async(i,c)=>{await r.get(`/v1/projects/${e}/logs`,{params:{since:t,until:n,timestamps:o,tail:a}}).then((e=>{i(e.data)})).catch((e=>{c(s(e))}))}))}}},526:(e,t,n)=>{const{request:r,APIError:s}=n(4);e.exports={getManifest:async function(e){return new Promise((async(t,n)=>{await r.get(`/v1/projects/${e}/manifest`).then((e=>{t(e.data)})).catch((e=>{n(s(e))}))}))},updateManifest:async function(e,t){return new Promise((async(n,o)=>{await r.put(`/v1/projects/${e}/manifest`,t).then((e=>{n(e.data)})).catch((e=>{o(s(e))}))}))}}},517:(e,t,n)=>{const{request:r,APIError:s}=n(4);e.exports={getProjects:async function(e){return new Promise((async(t,n)=>{await r.get("/v1/projects",{params:e||{}}).then((e=>{t(e.data.data)})).catch((e=>{n(s(e))}))}))},getProject:async function(e){return new Promise((async(t,n)=>{await r.get("/v1/projects/"+e).then((e=>{t(e.data)})).catch((e=>{n(s(e))}))}))},createProject:async function(e){return new Promise((async(t,n)=>{await r.post("/v1/projects/",e).then((e=>{t(e.data)})).catch((e=>{n(s(e))}))}))},deleteProject:async function(e){return new Promise((async(t,n)=>{await r.delete("/v1/projects/"+e).then((e=>{t(e.data)})).catch((e=>{n(s(e))}))}))}}},478:(e,t,n)=>{const{request:r,APIError:s}=n(4);e.exports={getUsers:async function(e){return new Promise((async(t,n)=>{await r.get(`/v1/projects/${e}/users`).then((e=>{t(e.data.data)})).catch((e=>{n(s(e))}))}))},getUser:async function(e,t){return new Promise((async(n,o)=>{await r.get(`/v1/projects/${e}/users/${t}`).then((e=>{n(e.data)})).catch((e=>{o(s(e))}))}))},getScopes:async function(e){return new Promise((async(t,n)=>{await r.get(`/v1/projects/${e}/users/scopes`).then((e=>{t(e.data)})).catch((e=>{n(s(e))}))}))},createUser:async function(e,t,n){return new Promise((async(o,a)=>{await r.post("/v1/projects/"+e,{email:t,scopes:n}).then((e=>{o(e.data)})).catch((e=>{a(s(e))}))}))},updateUser:async function(e,t,n){return new Promise((async(o,a)=>{await r.put(`/v1/projects/${e}/users/${t}`,{scopes:n}).then((e=>{o(e.data)})).catch((e=>{a(s(e))}))}))},deleteUser:async function(e,t){return new Promise((async(n,o)=>{await r.delete(`/v1/projects/${e}/users/${t}`).then((e=>{n(e.data)})).catch((e=>{o(s(e))}))}))}}},4:(e,t,n)=>{const r=n(669).default,s=(n(147),r.create({baseURL:"https://api.evecloud.xyz",headers:{"Content-Type":"application/json",Accept:"application/json"},timeout:"20000",timeoutErrorMessage:"Internal Server Error"}));e.exports={request:s,setToken:e=>s.interceptors.request.use((t=>({...t,headers:{...t.headers,Authorization:`Bearer ${e}`}}))),APIError:e=>"ECONNREFUSED"===e.code?"Internal Server Error":"ECONNABORTED"===e.code?"The request has been aborted":"ETIMEDOUT"===e.code?"Unable to connect to the server":502===e.response.status?"Bad Gateway":403===e.response.status?"Unauthorized":e.response.data.message?e.response.data.message:"Internal Server Error"}},147:e=>{"use strict";e.exports=JSON.parse('{"name":"evecloud-sdk","description":"A library for interacting with the EveCloud API","version":"2.0.54","main":"src/index.js","unpkg":"./dist/bundle.js","jsdelivr":"./dist/bundle.js","browser":"./dist/bundle.js","homepage":"https://github.com/evecloud/sdk","bugs":{"url":"https://github.com/evecloud/sdk/issues"},"repository":{"type":"git","url":"https://github.com/evecloud/sdk"},"keywords":["evecloud","cloud","sdk","api","browser"],"engines":{"node":">= 16.14.2"},"scripts":{"test":"node test/test.js","build":"npx webpack"},"files":["dist","src/*","package.json","README.md"],"author":"EveCloud Ltd","license":"MIT","dependencies":{"axios":"^0.26.1","jquery":"^3.6.0"},"devDependencies":{"webpack":"^5.72.1","webpack-cli":"^4.9.2"}}')}},t={},function n(r){var s=t[r];if(void 0!==s)return s.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}(138);var e,t}));