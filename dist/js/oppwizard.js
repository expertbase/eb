/*! nouislider - 14.5.0 - 5/11/2020 */
!function(t){"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():window.noUiSlider=t()}(function(){"use strict";var lt="14.5.0";function ut(t){t.parentElement.removeChild(t)}function a(t){return null!=t}function ct(t){t.preventDefault()}function o(t){return"number"==typeof t&&!isNaN(t)&&isFinite(t)}function pt(t,e,r){0<r&&(ht(t,e),setTimeout(function(){mt(t,e)},r))}function ft(t){return Math.max(Math.min(t,100),0)}function dt(t){return Array.isArray(t)?t:[t]}function e(t){var e=(t=String(t)).split(".");return 1<e.length?e[1].length:0}function ht(t,e){t.classList&&!/\s/.test(e)?t.classList.add(e):t.className+=" "+e}function mt(t,e){t.classList&&!/\s/.test(e)?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function gt(t){var e=void 0!==window.pageXOffset,r="CSS1Compat"===(t.compatMode||"");return{x:e?window.pageXOffset:r?t.documentElement.scrollLeft:t.body.scrollLeft,y:e?window.pageYOffset:r?t.documentElement.scrollTop:t.body.scrollTop}}function c(t,e){return 100/(e-t)}function p(t,e,r){return 100*e/(t[r+1]-t[r])}function f(t,e){for(var r=1;t>=e[r];)r+=1;return r}function r(t,e,r){if(r>=t.slice(-1)[0])return 100;var n,i,o=f(r,t),s=t[o-1],a=t[o],l=e[o-1],u=e[o];return l+(i=r,p(n=[s,a],n[0]<0?i+Math.abs(n[0]):i-n[0],0)/c(l,u))}function n(t,e,r,n){if(100===n)return n;var i,o,s=f(n,t),a=t[s-1],l=t[s];return r?(l-a)/2<n-a?l:a:e[s-1]?t[s-1]+(i=n-t[s-1],o=e[s-1],Math.round(i/o)*o):n}function s(t,e,r){var n;if("number"==typeof e&&(e=[e]),!Array.isArray(e))throw new Error("noUiSlider ("+lt+"): 'range' contains invalid value.");if(!o(n="min"===t?0:"max"===t?100:parseFloat(t))||!o(e[0]))throw new Error("noUiSlider ("+lt+"): 'range' value isn't numeric.");r.xPct.push(n),r.xVal.push(e[0]),n?r.xSteps.push(!isNaN(e[1])&&e[1]):isNaN(e[1])||(r.xSteps[0]=e[1]),r.xHighestCompleteStep.push(0)}function l(t,e,r){if(e)if(r.xVal[t]!==r.xVal[t+1]){r.xSteps[t]=p([r.xVal[t],r.xVal[t+1]],e,0)/c(r.xPct[t],r.xPct[t+1]);var n=(r.xVal[t+1]-r.xVal[t])/r.xNumSteps[t],i=Math.ceil(Number(n.toFixed(3))-1),o=r.xVal[t]+r.xNumSteps[t]*i;r.xHighestCompleteStep[t]=o}else r.xSteps[t]=r.xHighestCompleteStep[t]=r.xVal[t]}function i(t,e,r){var n;this.xPct=[],this.xVal=[],this.xSteps=[r||!1],this.xNumSteps=[!1],this.xHighestCompleteStep=[],this.snap=e;var i=[];for(n in t)t.hasOwnProperty(n)&&i.push([t[n],n]);for(i.length&&"object"==typeof i[0][0]?i.sort(function(t,e){return t[0][0]-e[0][0]}):i.sort(function(t,e){return t[0]-e[0]}),n=0;n<i.length;n++)s(i[n][1],i[n][0],this);for(this.xNumSteps=this.xSteps.slice(0),n=0;n<this.xNumSteps.length;n++)l(n,this.xNumSteps[n],this)}i.prototype.getDistance=function(t){var e,r=[];for(e=0;e<this.xNumSteps.length-1;e++){var n=this.xNumSteps[e];if(n&&t/n%1!=0)throw new Error("noUiSlider ("+lt+"): 'limit', 'margin' and 'padding' of "+this.xPct[e]+"% range must be divisible by step.");r[e]=p(this.xVal,t,e)}return r},i.prototype.getAbsoluteDistance=function(t,e,r){var n,i=0;if(t<this.xPct[this.xPct.length-1])for(;t>this.xPct[i+1];)i++;else t===this.xPct[this.xPct.length-1]&&(i=this.xPct.length-2);r||t!==this.xPct[i+1]||i++;var o=1,s=e[i],a=0,l=0,u=0,c=0;for(n=r?(t-this.xPct[i])/(this.xPct[i+1]-this.xPct[i]):(this.xPct[i+1]-t)/(this.xPct[i+1]-this.xPct[i]);0<s;)a=this.xPct[i+1+c]-this.xPct[i+c],100<e[i+c]*o+100-100*n?(l=a*n,o=(s-100*n)/e[i+c],n=1):(l=e[i+c]*a/100*o,o=0),r?(u-=l,1<=this.xPct.length+c&&c--):(u+=l,1<=this.xPct.length-c&&c++),s=e[i+c]*o;return t+u},i.prototype.toStepping=function(t){return t=r(this.xVal,this.xPct,t)},i.prototype.fromStepping=function(t){return function(t,e,r){if(100<=r)return t.slice(-1)[0];var n,i=f(r,e),o=t[i-1],s=t[i],a=e[i-1],l=e[i];return n=[o,s],(r-a)*c(a,l)*(n[1]-n[0])/100+n[0]}(this.xVal,this.xPct,t)},i.prototype.getStep=function(t){return t=n(this.xPct,this.xSteps,this.snap,t)},i.prototype.getDefaultStep=function(t,e,r){var n=f(t,this.xPct);return(100===t||e&&t===this.xPct[n-1])&&(n=Math.max(n-1,1)),(this.xVal[n]-this.xVal[n-1])/r},i.prototype.getNearbySteps=function(t){var e=f(t,this.xPct);return{stepBefore:{startValue:this.xVal[e-2],step:this.xNumSteps[e-2],highestStep:this.xHighestCompleteStep[e-2]},thisStep:{startValue:this.xVal[e-1],step:this.xNumSteps[e-1],highestStep:this.xHighestCompleteStep[e-1]},stepAfter:{startValue:this.xVal[e],step:this.xNumSteps[e],highestStep:this.xHighestCompleteStep[e]}}},i.prototype.countStepDecimals=function(){var t=this.xNumSteps.map(e);return Math.max.apply(null,t)},i.prototype.convert=function(t){return this.getStep(this.toStepping(t))};var u={to:function(t){return void 0!==t&&t.toFixed(2)},from:Number},d={target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"};function h(t){if("object"==typeof(e=t)&&"function"==typeof e.to&&"function"==typeof e.from)return!0;var e;throw new Error("noUiSlider ("+lt+"): 'format' requires 'to' and 'from' methods.")}function m(t,e){if(!o(e))throw new Error("noUiSlider ("+lt+"): 'step' is not numeric.");t.singleStep=e}function g(t,e){if("object"!=typeof e||Array.isArray(e))throw new Error("noUiSlider ("+lt+"): 'range' is not an object.");if(void 0===e.min||void 0===e.max)throw new Error("noUiSlider ("+lt+"): Missing 'min' or 'max' in 'range'.");if(e.min===e.max)throw new Error("noUiSlider ("+lt+"): 'range' 'min' and 'max' cannot be equal.");t.spectrum=new i(e,t.snap,t.singleStep)}function v(t,e){if(e=dt(e),!Array.isArray(e)||!e.length)throw new Error("noUiSlider ("+lt+"): 'start' option is incorrect.");t.handles=e.length,t.start=e}function x(t,e){if("boolean"!=typeof(t.snap=e))throw new Error("noUiSlider ("+lt+"): 'snap' option must be a boolean.")}function b(t,e){if("boolean"!=typeof(t.animate=e))throw new Error("noUiSlider ("+lt+"): 'animate' option must be a boolean.")}function S(t,e){if("number"!=typeof(t.animationDuration=e))throw new Error("noUiSlider ("+lt+"): 'animationDuration' option must be a number.")}function w(t,e){var r,n=[!1];if("lower"===e?e=[!0,!1]:"upper"===e&&(e=[!1,!0]),!0===e||!1===e){for(r=1;r<t.handles;r++)n.push(e);n.push(!1)}else{if(!Array.isArray(e)||!e.length||e.length!==t.handles+1)throw new Error("noUiSlider ("+lt+"): 'connect' option doesn't match handle count.");n=e}t.connect=n}function y(t,e){switch(e){case"horizontal":t.ort=0;break;case"vertical":t.ort=1;break;default:throw new Error("noUiSlider ("+lt+"): 'orientation' option is invalid.")}}function E(t,e){if(!o(e))throw new Error("noUiSlider ("+lt+"): 'margin' option must be numeric.");0!==e&&(t.margin=t.spectrum.getDistance(e))}function C(t,e){if(!o(e))throw new Error("noUiSlider ("+lt+"): 'limit' option must be numeric.");if(t.limit=t.spectrum.getDistance(e),!t.limit||t.handles<2)throw new Error("noUiSlider ("+lt+"): 'limit' option is only supported on linear sliders with 2 or more handles.")}function N(t,e){var r;if(!o(e)&&!Array.isArray(e))throw new Error("noUiSlider ("+lt+"): 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(e)&&2!==e.length&&!o(e[0])&&!o(e[1]))throw new Error("noUiSlider ("+lt+"): 'padding' option must be numeric or array of exactly 2 numbers.");if(0!==e){for(Array.isArray(e)||(e=[e,e]),t.padding=[t.spectrum.getDistance(e[0]),t.spectrum.getDistance(e[1])],r=0;r<t.spectrum.xNumSteps.length-1;r++)if(t.padding[0][r]<0||t.padding[1][r]<0)throw new Error("noUiSlider ("+lt+"): 'padding' option must be a positive number(s).");var n=e[0]+e[1],i=t.spectrum.xVal[0];if(1<n/(t.spectrum.xVal[t.spectrum.xVal.length-1]-i))throw new Error("noUiSlider ("+lt+"): 'padding' option must not exceed 100% of the range.")}}function P(t,e){switch(e){case"ltr":t.dir=0;break;case"rtl":t.dir=1;break;default:throw new Error("noUiSlider ("+lt+"): 'direction' option was not recognized.")}}function U(t,e){if("string"!=typeof e)throw new Error("noUiSlider ("+lt+"): 'behaviour' must be a string containing options.");var r=0<=e.indexOf("tap"),n=0<=e.indexOf("drag"),i=0<=e.indexOf("fixed"),o=0<=e.indexOf("snap"),s=0<=e.indexOf("hover"),a=0<=e.indexOf("unconstrained");if(i){if(2!==t.handles)throw new Error("noUiSlider ("+lt+"): 'fixed' behaviour must be used with 2 handles");E(t,t.start[1]-t.start[0])}if(a&&(t.margin||t.limit))throw new Error("noUiSlider ("+lt+"): 'unconstrained' behaviour cannot be used with margin or limit");t.events={tap:r||o,drag:n,fixed:i,snap:o,hover:s,unconstrained:a}}function A(t,e){if(!1!==e)if(!0===e){t.tooltips=[];for(var r=0;r<t.handles;r++)t.tooltips.push(!0)}else{if(t.tooltips=dt(e),t.tooltips.length!==t.handles)throw new Error("noUiSlider ("+lt+"): must pass a formatter for all handles.");t.tooltips.forEach(function(t){if("boolean"!=typeof t&&("object"!=typeof t||"function"!=typeof t.to))throw new Error("noUiSlider ("+lt+"): 'tooltips' must be passed a formatter or 'false'.")})}}function V(t,e){h(t.ariaFormat=e)}function k(t,e){h(t.format=e)}function D(t,e){if("boolean"!=typeof(t.keyboardSupport=e))throw new Error("noUiSlider ("+lt+"): 'keyboardSupport' option must be a boolean.")}function M(t,e){t.documentElement=e}function O(t,e){if("string"!=typeof e&&!1!==e)throw new Error("noUiSlider ("+lt+"): 'cssPrefix' must be a string or `false`.");t.cssPrefix=e}function L(t,e){if("object"!=typeof e)throw new Error("noUiSlider ("+lt+"): 'cssClasses' must be an object.");if("string"==typeof t.cssPrefix)for(var r in t.cssClasses={},e)e.hasOwnProperty(r)&&(t.cssClasses[r]=t.cssPrefix+e[r]);else t.cssClasses=e}function vt(e){var r={margin:0,limit:0,padding:0,animate:!0,animationDuration:300,ariaFormat:u,format:u},n={step:{r:!1,t:m},start:{r:!0,t:v},connect:{r:!0,t:w},direction:{r:!0,t:P},snap:{r:!1,t:x},animate:{r:!1,t:b},animationDuration:{r:!1,t:S},range:{r:!0,t:g},orientation:{r:!1,t:y},margin:{r:!1,t:E},limit:{r:!1,t:C},padding:{r:!1,t:N},behaviour:{r:!0,t:U},ariaFormat:{r:!1,t:V},format:{r:!1,t:k},tooltips:{r:!1,t:A},keyboardSupport:{r:!0,t:D},documentElement:{r:!1,t:M},cssPrefix:{r:!0,t:O},cssClasses:{r:!0,t:L}},i={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:d};e.format&&!e.ariaFormat&&(e.ariaFormat=e.format),Object.keys(n).forEach(function(t){if(!a(e[t])&&void 0===i[t]){if(n[t].r)throw new Error("noUiSlider ("+lt+"): '"+t+"' is required.");return!0}n[t].t(r,a(e[t])?e[t]:i[t])}),r.pips=e.pips;var t=document.createElement("div"),o=void 0!==t.style.msTransform,s=void 0!==t.style.transform;r.transformRule=s?"transform":o?"msTransform":"webkitTransform";return r.style=[["left","top"],["right","bottom"]][r.dir][r.ort],r}function z(t,v,o){var l,u,s,c,i,a,e,p,f=window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"},d=window.CSS&&CSS.supports&&CSS.supports("touch-action","none")&&function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(t){}return t}(),h=t,y=v.spectrum,x=[],b=[],m=[],g=0,S={},w=t.ownerDocument,E=v.documentElement||w.documentElement,C=w.body,N=-1,P=0,U=1,A=2,V="rtl"===w.dir||1===v.ort?0:100;function k(t,e){var r=w.createElement("div");return e&&ht(r,e),t.appendChild(r),r}function D(t,e){var r=k(t,v.cssClasses.origin),n=k(r,v.cssClasses.handle);return k(n,v.cssClasses.touchArea),n.setAttribute("data-handle",e),v.keyboardSupport&&(n.setAttribute("tabindex","0"),n.addEventListener("keydown",function(t){return function(t,e){if(O()||L(e))return!1;var r=["Left","Right"],n=["Down","Up"],i=["PageDown","PageUp"],o=["Home","End"];v.dir&&!v.ort?r.reverse():v.ort&&!v.dir&&(n.reverse(),i.reverse());var s,a=t.key.replace("Arrow",""),l=a===i[0],u=a===i[1],c=a===n[0]||a===r[0]||l,p=a===n[1]||a===r[1]||u,f=a===o[0],d=a===o[1];if(!(c||p||f||d))return!0;if(t.preventDefault(),p||c){var h=c?0:1,m=at(e),g=m[h];if(null===g)return!1;!1===g&&(g=y.getDefaultStep(b[e],c,10)),(u||l)&&(g*=5),g=Math.max(g,1e-7),g*=c?-1:1,s=x[e]+g}else s=d?v.spectrum.xVal[v.spectrum.xVal.length-1]:v.spectrum.xVal[0];return rt(e,y.toStepping(s),!0,!0),J("slide",e),J("update",e),J("change",e),J("set",e),!1}(t,e)})),n.setAttribute("role","slider"),n.setAttribute("aria-orientation",v.ort?"vertical":"horizontal"),0===e?ht(n,v.cssClasses.handleLower):e===v.handles-1&&ht(n,v.cssClasses.handleUpper),r}function M(t,e){return!!e&&k(t,v.cssClasses.connect)}function r(t,e){return!!v.tooltips[e]&&k(t.firstChild,v.cssClasses.tooltip)}function O(){return h.hasAttribute("disabled")}function L(t){return u[t].hasAttribute("disabled")}function z(){i&&(G("update.tooltips"),i.forEach(function(t){t&&ut(t)}),i=null)}function H(){z(),i=u.map(r),$("update.tooltips",function(t,e,r){if(i[e]){var n=t[e];!0!==v.tooltips[e]&&(n=v.tooltips[e].to(r[e])),i[e].innerHTML=n}})}function j(e,i,o){var s=w.createElement("div"),a=[];a[P]=v.cssClasses.valueNormal,a[U]=v.cssClasses.valueLarge,a[A]=v.cssClasses.valueSub;var l=[];l[P]=v.cssClasses.markerNormal,l[U]=v.cssClasses.markerLarge,l[A]=v.cssClasses.markerSub;var u=[v.cssClasses.valueHorizontal,v.cssClasses.valueVertical],c=[v.cssClasses.markerHorizontal,v.cssClasses.markerVertical];function p(t,e){var r=e===v.cssClasses.value,n=r?a:l;return e+" "+(r?u:c)[v.ort]+" "+n[t]}return ht(s,v.cssClasses.pips),ht(s,0===v.ort?v.cssClasses.pipsHorizontal:v.cssClasses.pipsVertical),Object.keys(e).forEach(function(t){!function(t,e,r){if((r=i?i(e,r):r)!==N){var n=k(s,!1);n.className=p(r,v.cssClasses.marker),n.style[v.style]=t+"%",P<r&&((n=k(s,!1)).className=p(r,v.cssClasses.value),n.setAttribute("data-value",e),n.style[v.style]=t+"%",n.innerHTML=o.to(e))}}(t,e[t][0],e[t][1])}),s}function F(){c&&(ut(c),c=null)}function R(t){F();var m,g,v,x,e,r,b,S,w,n=t.mode,i=t.density||1,o=t.filter||!1,s=function(t,e,r){if("range"===t||"steps"===t)return y.xVal;if("count"===t){if(e<2)throw new Error("noUiSlider ("+lt+"): 'values' (>= 2) required for mode 'count'.");var n=e-1,i=100/n;for(e=[];n--;)e[n]=n*i;e.push(100),t="positions"}return"positions"===t?e.map(function(t){return y.fromStepping(r?y.getStep(t):t)}):"values"===t?r?e.map(function(t){return y.fromStepping(y.getStep(y.toStepping(t)))}):e:void 0}(n,t.values||!1,t.stepped||!1),a=(m=i,g=n,v=s,x={},e=y.xVal[0],r=y.xVal[y.xVal.length-1],S=b=!1,w=0,(v=v.slice().sort(function(t,e){return t-e}).filter(function(t){return!this[t]&&(this[t]=!0)},{}))[0]!==e&&(v.unshift(e),b=!0),v[v.length-1]!==r&&(v.push(r),S=!0),v.forEach(function(t,e){var r,n,i,o,s,a,l,u,c,p,f=t,d=v[e+1],h="steps"===g;if(h&&(r=y.xNumSteps[e]),r||(r=d-f),!1!==f&&void 0!==d)for(r=Math.max(r,1e-7),n=f;n<=d;n=(n+r).toFixed(7)/1){for(u=(s=(o=y.toStepping(n))-w)/m,p=s/(c=Math.round(u)),i=1;i<=c;i+=1)x[(a=w+i*p).toFixed(5)]=[y.fromStepping(a),0];l=-1<v.indexOf(n)?U:h?A:P,!e&&b&&n!==d&&(l=0),n===d&&S||(x[o.toFixed(5)]=[n,l]),w=o}}),x),l=t.format||{to:Math.round};return c=h.appendChild(j(a,o,l))}function T(){var t=l.getBoundingClientRect(),e="offset"+["Width","Height"][v.ort];return 0===v.ort?t.width||l[e]:t.height||l[e]}function B(n,i,o,s){var e=function(t){return!!(t=function(t,e,r){var n,i,o=0===t.type.indexOf("touch"),s=0===t.type.indexOf("mouse"),a=0===t.type.indexOf("pointer");0===t.type.indexOf("MSPointer")&&(a=!0);if(o){var l=function(t){return t.target===r||r.contains(t.target)||t.target.shadowRoot&&t.target.shadowRoot.contains(r)};if("touchstart"===t.type){var u=Array.prototype.filter.call(t.touches,l);if(1<u.length)return!1;n=u[0].pageX,i=u[0].pageY}else{var c=Array.prototype.find.call(t.changedTouches,l);if(!c)return!1;n=c.pageX,i=c.pageY}}e=e||gt(w),(s||a)&&(n=t.clientX+e.x,i=t.clientY+e.y);return t.pageOffset=e,t.points=[n,i],t.cursor=s||a,t}(t,s.pageOffset,s.target||i))&&(!(O()&&!s.doNotReject)&&(e=h,r=v.cssClasses.tap,!((e.classList?e.classList.contains(r):new RegExp("\\b"+r+"\\b").test(e.className))&&!s.doNotReject)&&(!(n===f.start&&void 0!==t.buttons&&1<t.buttons)&&((!s.hover||!t.buttons)&&(d||t.preventDefault(),t.calcPoint=t.points[v.ort],void o(t,s))))));var e,r},r=[];return n.split(" ").forEach(function(t){i.addEventListener(t,e,!!d&&{passive:!0}),r.push([t,e])}),r}function q(t){var e,r,n,i,o,s,a=100*(t-(e=l,r=v.ort,n=e.getBoundingClientRect(),i=e.ownerDocument,o=i.documentElement,s=gt(i),/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(s.x=0),r?n.top+s.y-o.clientTop:n.left+s.x-o.clientLeft))/T();return a=ft(a),v.dir?100-a:a}function X(t,e){"mouseout"===t.type&&"HTML"===t.target.nodeName&&null===t.relatedTarget&&_(t,e)}function Y(t,e){if(-1===navigator.appVersion.indexOf("MSIE 9")&&0===t.buttons&&0!==e.buttonsProperty)return _(t,e);var r=(v.dir?-1:1)*(t.calcPoint-e.startCalcPoint);Z(0<r,100*r/e.baseSize,e.locations,e.handleNumbers)}function _(t,e){e.handle&&(mt(e.handle,v.cssClasses.active),g-=1),e.listeners.forEach(function(t){E.removeEventListener(t[0],t[1])}),0===g&&(mt(h,v.cssClasses.drag),et(),t.cursor&&(C.style.cursor="",C.removeEventListener("selectstart",ct))),e.handleNumbers.forEach(function(t){J("change",t),J("set",t),J("end",t)})}function I(t,e){if(e.handleNumbers.some(L))return!1;var r;1===e.handleNumbers.length&&(r=u[e.handleNumbers[0]].children[0],g+=1,ht(r,v.cssClasses.active));t.stopPropagation();var n=[],i=B(f.move,E,Y,{target:t.target,handle:r,listeners:n,startCalcPoint:t.calcPoint,baseSize:T(),pageOffset:t.pageOffset,handleNumbers:e.handleNumbers,buttonsProperty:t.buttons,locations:b.slice()}),o=B(f.end,E,_,{target:t.target,handle:r,listeners:n,doNotReject:!0,handleNumbers:e.handleNumbers}),s=B("mouseout",E,X,{target:t.target,handle:r,listeners:n,doNotReject:!0,handleNumbers:e.handleNumbers});n.push.apply(n,i.concat(o,s)),t.cursor&&(C.style.cursor=getComputedStyle(t.target).cursor,1<u.length&&ht(h,v.cssClasses.drag),C.addEventListener("selectstart",ct,!1)),e.handleNumbers.forEach(function(t){J("start",t)})}function n(t){t.stopPropagation();var i,o,s,e=q(t.calcPoint),r=(i=e,s=!(o=100),u.forEach(function(t,e){if(!L(e)){var r=b[e],n=Math.abs(r-i);(n<o||n<=o&&r<i||100===n&&100===o)&&(s=e,o=n)}}),s);if(!1===r)return!1;v.events.snap||pt(h,v.cssClasses.tap,v.animationDuration),rt(r,e,!0,!0),et(),J("slide",r,!0),J("update",r,!0),J("change",r,!0),J("set",r,!0),v.events.snap&&I(t,{handleNumbers:[r]})}function W(t){var e=q(t.calcPoint),r=y.getStep(e),n=y.fromStepping(r);Object.keys(S).forEach(function(t){"hover"===t.split(".")[0]&&S[t].forEach(function(t){t.call(a,n)})})}function $(t,e){S[t]=S[t]||[],S[t].push(e),"update"===t.split(".")[0]&&u.forEach(function(t,e){J("update",e)})}function G(t){var n=t&&t.split(".")[0],i=n&&t.substring(n.length);Object.keys(S).forEach(function(t){var e=t.split(".")[0],r=t.substring(e.length);n&&n!==e||i&&i!==r||delete S[t]})}function J(r,n,i){Object.keys(S).forEach(function(t){var e=t.split(".")[0];r===e&&S[t].forEach(function(t){t.call(a,x.map(v.format.to),n,x.slice(),i||!1,b.slice(),a)})})}function K(t,e,r,n,i,o){var s;return 1<u.length&&!v.events.unconstrained&&(n&&0<e&&(s=y.getAbsoluteDistance(t[e-1],v.margin,0),r=Math.max(r,s)),i&&e<u.length-1&&(s=y.getAbsoluteDistance(t[e+1],v.margin,1),r=Math.min(r,s))),1<u.length&&v.limit&&(n&&0<e&&(s=y.getAbsoluteDistance(t[e-1],v.limit,0),r=Math.min(r,s)),i&&e<u.length-1&&(s=y.getAbsoluteDistance(t[e+1],v.limit,1),r=Math.max(r,s))),v.padding&&(0===e&&(s=y.getAbsoluteDistance(0,v.padding[0],0),r=Math.max(r,s)),e===u.length-1&&(s=y.getAbsoluteDistance(100,v.padding[1],1),r=Math.min(r,s))),!((r=ft(r=y.getStep(r)))===t[e]&&!o)&&r}function Q(t,e){var r=v.ort;return(r?e:t)+", "+(r?t:e)}function Z(t,n,r,e){var i=r.slice(),o=[!t,t],s=[t,!t];e=e.slice(),t&&e.reverse(),1<e.length?e.forEach(function(t,e){var r=K(i,t,i[t]+n,o[e],s[e],!1);!1===r?n=0:(n=r-i[t],i[t]=r)}):o=s=[!0];var a=!1;e.forEach(function(t,e){a=rt(t,r[t]+n,o[e],s[e])||a}),a&&e.forEach(function(t){J("update",t),J("slide",t)})}function tt(t,e){return v.dir?100-t-e:t}function et(){m.forEach(function(t){var e=50<b[t]?-1:1,r=3+(u.length+e*t);u[t].style.zIndex=r})}function rt(t,e,r,n){return!1!==(e=K(b,t,e,r,n,!1))&&(function(t,e){b[t]=e,x[t]=y.fromStepping(e);var r="translate("+Q(10*(tt(e,0)-V)+"%","0")+")";u[t].style[v.transformRule]=r,nt(t),nt(t+1)}(t,e),!0)}function nt(t){if(s[t]){var e=0,r=100;0!==t&&(e=b[t-1]),t!==s.length-1&&(r=b[t]);var n=r-e,i="translate("+Q(tt(e,n)+"%","0")+")",o="scale("+Q(n/100,"1")+")";s[t].style[v.transformRule]=i+" "+o}}function it(t,e){return null===t||!1===t||void 0===t?b[e]:("number"==typeof t&&(t=String(t)),t=v.format.from(t),!1===(t=y.toStepping(t))||isNaN(t)?b[e]:t)}function ot(t,e){var r=dt(t),n=void 0===b[0];e=void 0===e||!!e,v.animate&&!n&&pt(h,v.cssClasses.tap,v.animationDuration),m.forEach(function(t){rt(t,it(r[t],t),!0,!1)});for(var i=1===m.length?0:1;i<m.length;++i)m.forEach(function(t){rt(t,b[t],!0,!0)});et(),m.forEach(function(t){J("update",t),null!==r[t]&&e&&J("set",t)})}function st(){var t=x.map(v.format.to);return 1===t.length?t[0]:t}function at(t){var e=b[t],r=y.getNearbySteps(e),n=x[t],i=r.thisStep.step,o=null;if(v.snap)return[n-r.stepBefore.startValue||null,r.stepAfter.startValue-n||null];!1!==i&&n+i>r.stepAfter.startValue&&(i=r.stepAfter.startValue-n),o=n>r.thisStep.startValue?r.thisStep.step:!1!==r.stepBefore.step&&n-r.stepBefore.highestStep,100===e?i=null:0===e&&(o=null);var s=y.countStepDecimals();return null!==i&&!1!==i&&(i=Number(i.toFixed(s))),null!==o&&!1!==o&&(o=Number(o.toFixed(s))),[o,i]}return ht(e=h,v.cssClasses.target),0===v.dir?ht(e,v.cssClasses.ltr):ht(e,v.cssClasses.rtl),0===v.ort?ht(e,v.cssClasses.horizontal):ht(e,v.cssClasses.vertical),ht(e,"rtl"===getComputedStyle(e).direction?v.cssClasses.textDirectionRtl:v.cssClasses.textDirectionLtr),l=k(e,v.cssClasses.base),function(t,e){var r=k(e,v.cssClasses.connects);u=[],(s=[]).push(M(r,t[0]));for(var n=0;n<v.handles;n++)u.push(D(e,n)),m[n]=n,s.push(M(r,t[n+1]))}(v.connect,l),(p=v.events).fixed||u.forEach(function(t,e){B(f.start,t.children[0],I,{handleNumbers:[e]})}),p.tap&&B(f.start,l,n,{}),p.hover&&B(f.move,l,W,{hover:!0}),p.drag&&s.forEach(function(t,e){if(!1!==t&&0!==e&&e!==s.length-1){var r=u[e-1],n=u[e],i=[t];ht(t,v.cssClasses.draggable),p.fixed&&(i.push(r.children[0]),i.push(n.children[0])),i.forEach(function(t){B(f.start,t,I,{handles:[r,n],handleNumbers:[e-1,e]})})}}),ot(v.start),v.pips&&R(v.pips),v.tooltips&&H(),$("update",function(t,e,s,r,a){m.forEach(function(t){var e=u[t],r=K(b,t,0,!0,!0,!0),n=K(b,t,100,!0,!0,!0),i=a[t],o=v.ariaFormat.to(s[t]);r=y.fromStepping(r).toFixed(1),n=y.fromStepping(n).toFixed(1),i=y.fromStepping(i).toFixed(1),e.children[0].setAttribute("aria-valuemin",r),e.children[0].setAttribute("aria-valuemax",n),e.children[0].setAttribute("aria-valuenow",i),e.children[0].setAttribute("aria-valuetext",o)})}),a={destroy:function(){for(var t in v.cssClasses)v.cssClasses.hasOwnProperty(t)&&mt(h,v.cssClasses[t]);for(;h.firstChild;)h.removeChild(h.firstChild);delete h.noUiSlider},steps:function(){return m.map(at)},on:$,off:G,get:st,set:ot,setHandle:function(t,e,r){if(!(0<=(t=Number(t))&&t<m.length))throw new Error("noUiSlider ("+lt+"): invalid handle number, got: "+t);rt(t,it(e,t),!0,!0),J("update",t),r&&J("set",t)},reset:function(t){ot(v.start,t)},__moveHandles:function(t,e,r){Z(t,e,b,r)},options:o,updateOptions:function(e,t){var r=st(),n=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips"];n.forEach(function(t){void 0!==e[t]&&(o[t]=e[t])});var i=vt(o);n.forEach(function(t){void 0!==e[t]&&(v[t]=i[t])}),y=i.spectrum,v.margin=i.margin,v.limit=i.limit,v.padding=i.padding,v.pips?R(v.pips):F(),v.tooltips?H():z(),b=[],ot(e.start||r,t)},target:h,removePips:F,removeTooltips:z,getTooltips:function(){return i},getOrigins:function(){return u},pips:R}}return{__spectrum:i,version:lt,cssClasses:d,create:function(t,e){if(!t||!t.nodeName)throw new Error("noUiSlider ("+lt+"): create requires a single element, got: "+t);if(t.noUiSlider)throw new Error("noUiSlider ("+lt+"): Slider was already initialized.");var r=z(t,vt(e),e);return t.noUiSlider=r}}});

//wnumb-1.2.0
!function(e){"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?module.exports=e():window.wNumb=e()}(function(){"use strict";var o=["decimals","thousand","mark","prefix","suffix","encoder","decoder","negativeBefore","negative","edit","undo"];function w(e){return e.split("").reverse().join("")}function h(e,t){return e.substring(0,t.length)===t}function f(e,t,n){if((e[t]||e[n])&&e[t]===e[n])throw new Error(t)}function x(e){return"number"==typeof e&&isFinite(e)}function n(e,t,n,r,i,o,f,u,s,c,a,p){var d,l,h,g=p,v="",m="";return o&&(p=o(p)),!!x(p)&&(!1!==e&&0===parseFloat(p.toFixed(e))&&(p=0),p<0&&(d=!0,p=Math.abs(p)),!1!==e&&(p=function(e,t){return e=e.toString().split("e"),(+((e=(e=Math.round(+(e[0]+"e"+(e[1]?+e[1]+t:t)))).toString().split("e"))[0]+"e"+(e[1]?e[1]-t:-t))).toFixed(t)}(p,e)),-1!==(p=p.toString()).indexOf(".")?(h=(l=p.split("."))[0],n&&(v=n+l[1])):h=p,t&&(h=w((h=w(h).match(/.{1,3}/g)).join(w(t)))),d&&u&&(m+=u),r&&(m+=r),d&&s&&(m+=s),m+=h,m+=v,i&&(m+=i),c&&(m=c(m,g)),m)}function r(e,t,n,r,i,o,f,u,s,c,a,p){var d,l="";return a&&(p=a(p)),!(!p||"string"!=typeof p)&&(u&&h(p,u)&&(p=p.replace(u,""),d=!0),r&&h(p,r)&&(p=p.replace(r,"")),s&&h(p,s)&&(p=p.replace(s,""),d=!0),i&&function(e,t){return e.slice(-1*t.length)===t}(p,i)&&(p=p.slice(0,-1*i.length)),t&&(p=p.split(t).join("")),n&&(p=p.replace(n,".")),d&&(l+="-"),""!==(l=(l+=p).replace(/[^0-9\.\-.]/g,""))&&(l=Number(l),f&&(l=f(l)),!!x(l)&&l))}function i(e,t,n){var r,i=[];for(r=0;r<o.length;r+=1)i.push(e[o[r]]);return i.push(n),t.apply("",i)}return function e(t){if(!(this instanceof e))return new e(t);"object"==typeof t&&(t=function(e){var t,n,r,i={};for(void 0===e.suffix&&(e.suffix=e.postfix),t=0;t<o.length;t+=1)if(void 0===(r=e[n=o[t]]))"negative"!==n||i.negativeBefore?"mark"===n&&"."!==i.thousand?i[n]=".":i[n]=!1:i[n]="-";else if("decimals"===n){if(!(0<=r&&r<8))throw new Error(n);i[n]=r}else if("encoder"===n||"decoder"===n||"edit"===n||"undo"===n){if("function"!=typeof r)throw new Error(n);i[n]=r}else{if("string"!=typeof r)throw new Error(n);i[n]=r}return f(i,"mark","thousand"),f(i,"prefix","negative"),f(i,"prefix","negativeBefore"),i}(t),this.to=function(e){return i(t,n,e)},this.from=function(e){return i(t,r,e)})}});




// budget slider
var budgetslider = document.getElementById('budgetslider');
var budgetdefault= $("#budgetslider").data("bdgt");
budgetdefault>0?budgetdefault:budgetdefault=2000;

noUiSlider.create(budgetslider, {
    start: budgetdefault,
    step: 250,
    range: {
        'min': [0],
        'max': [20000]
    },
    pips: {
		mode: 'count',
        values: 5,
        density: 5,
    },
    tooltips: true,
    format: wNumb({
        decimals: 0,
        prefix: '$',
		thousand: ',',
    }),
    connect: [true,false],
		
});

budgetslider.noUiSlider.on('change', function (values, handle) { 
	i = values[handle].replace(/[A-Za-z$-]/g, "");
    if (i < 1000) {
        budgetslider.noUiSlider.set(1000);
    } 
});

var budgetinput = document.getElementById('budget');
budgetslider.noUiSlider.on('update', function (values, handle) {budgetinput.value = values[handle];});
budgetinput.addEventListener('change', function () {budgetslider.noUiSlider.set(this.value);});



// budget slider
var durationslider = document.getElementById('durationslider');
var durationdefault= $("#durationslider").data("duration");
durationdefault>0?durationdefault:durationdefault=3;

noUiSlider.create(durationslider, {
    start: durationdefault,
    step: 0.5,
    range: {
        'min': [0],
        'max': [20]
    },
    pips: {
		mode: 'count',
        values: 5,
        density: 5,
    },
    padding: [0.5,0],
    tooltips: true,
    format: wNumb({
        decimals: 1,
    })
});

var durationinput = document.getElementById('duration');
durationslider.noUiSlider.on('update', function (values, handle) {durationinput.value = values[handle];});
durationinput.addEventListener('change', function () {durationslider.noUiSlider.set(this.value);});



// Amount of experts slider
var expertsslider = document.getElementById('expertsslider');
var expertsdefault= $("#expertsslider").data("experts");
expertsdefault>0?expertsdefault:expertsdefault=3;

noUiSlider.create(expertsslider, {
    start: expertsdefault,
    step: 1,
    range: {
        'min': [0],
        'max': [20]
    },
    pips: {
		mode: 'count',
        values: 5,
        density: 5,
    },
    padding: [1,0],
    tooltips: true,
    format: wNumb({
        decimals: 0,
        postfix: ' Expert/s'
    })
});

var expertsinput = document.getElementById('experts');
expertsslider.noUiSlider.on('update', function (values, handle) {expertsinput.value = values[handle];});
expertsinput.addEventListener('change', function () {expertsslider.noUiSlider.set(this.value);});



/*!
 * Datepicker for Bootstrap v1.9.0 (https://github.com/uxsolutions/bootstrap-datepicker)
 *
 * Licensed under the Apache License v2.0 (http://www.apache.org/licenses/LICENSE-2.0)
 */

!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a,b){function c(){return new Date(Date.UTC.apply(Date,arguments))}function d(){var a=new Date;return c(a.getFullYear(),a.getMonth(),a.getDate())}function e(a,b){return a.getUTCFullYear()===b.getUTCFullYear()&&a.getUTCMonth()===b.getUTCMonth()&&a.getUTCDate()===b.getUTCDate()}function f(c,d){return function(){return d!==b&&a.fn.datepicker.deprecated(d),this[c].apply(this,arguments)}}function g(a){return a&&!isNaN(a.getTime())}function h(b,c){function d(a,b){return b.toLowerCase()}var e,f=a(b).data(),g={},h=new RegExp("^"+c.toLowerCase()+"([A-Z])");c=new RegExp("^"+c.toLowerCase());for(var i in f)c.test(i)&&(e=i.replace(h,d),g[e]=f[i]);return g}function i(b){var c={};if(q[b]||(b=b.split("-")[0],q[b])){var d=q[b];return a.each(p,function(a,b){b in d&&(c[b]=d[b])}),c}}var j=function(){var b={get:function(a){return this.slice(a)[0]},contains:function(a){for(var b=a&&a.valueOf(),c=0,d=this.length;c<d;c++)if(0<=this[c].valueOf()-b&&this[c].valueOf()-b<864e5)return c;return-1},remove:function(a){this.splice(a,1)},replace:function(b){b&&(a.isArray(b)||(b=[b]),this.clear(),this.push.apply(this,b))},clear:function(){this.length=0},copy:function(){var a=new j;return a.replace(this),a}};return function(){var c=[];return c.push.apply(c,arguments),a.extend(c,b),c}}(),k=function(b,c){a.data(b,"datepicker",this),this._events=[],this._secondaryEvents=[],this._process_options(c),this.dates=new j,this.viewDate=this.o.defaultViewDate,this.focusDate=null,this.element=a(b),this.isInput=this.element.is("input"),this.inputField=this.isInput?this.element:this.element.find("input"),this.component=!!this.element.hasClass("date")&&this.element.find(".add-on, .input-group-addon, .input-group-append, .input-group-prepend, .btn"),this.component&&0===this.component.length&&(this.component=!1),this.isInline=!this.component&&this.element.is("div"),this.picker=a(r.template),this._check_template(this.o.templates.leftArrow)&&this.picker.find(".prev").html(this.o.templates.leftArrow),this._check_template(this.o.templates.rightArrow)&&this.picker.find(".next").html(this.o.templates.rightArrow),this._buildEvents(),this._attachEvents(),this.isInline?this.picker.addClass("datepicker-inline").appendTo(this.element):this.picker.addClass("datepicker-dropdown dropdown-menu"),this.o.rtl&&this.picker.addClass("datepicker-rtl"),this.o.calendarWeeks&&this.picker.find(".datepicker-days .datepicker-switch, thead .datepicker-title, tfoot .today, tfoot .clear").attr("colspan",function(a,b){return Number(b)+1}),this._process_options({startDate:this._o.startDate,endDate:this._o.endDate,daysOfWeekDisabled:this.o.daysOfWeekDisabled,daysOfWeekHighlighted:this.o.daysOfWeekHighlighted,datesDisabled:this.o.datesDisabled}),this._allow_update=!1,this.setViewMode(this.o.startView),this._allow_update=!0,this.fillDow(),this.fillMonths(),this.update(),this.isInline&&this.show()};k.prototype={constructor:k,_resolveViewName:function(b){return a.each(r.viewModes,function(c,d){if(b===c||-1!==a.inArray(b,d.names))return b=c,!1}),b},_resolveDaysOfWeek:function(b){return a.isArray(b)||(b=b.split(/[,\s]*/)),a.map(b,Number)},_check_template:function(c){try{if(c===b||""===c)return!1;if((c.match(/[<>]/g)||[]).length<=0)return!0;return a(c).length>0}catch(a){return!1}},_process_options:function(b){this._o=a.extend({},this._o,b);var e=this.o=a.extend({},this._o),f=e.language;q[f]||(f=f.split("-")[0],q[f]||(f=o.language)),e.language=f,e.startView=this._resolveViewName(e.startView),e.minViewMode=this._resolveViewName(e.minViewMode),e.maxViewMode=this._resolveViewName(e.maxViewMode),e.startView=Math.max(this.o.minViewMode,Math.min(this.o.maxViewMode,e.startView)),!0!==e.multidate&&(e.multidate=Number(e.multidate)||!1,!1!==e.multidate&&(e.multidate=Math.max(0,e.multidate))),e.multidateSeparator=String(e.multidateSeparator),e.weekStart%=7,e.weekEnd=(e.weekStart+6)%7;var g=r.parseFormat(e.format);e.startDate!==-1/0&&(e.startDate?e.startDate instanceof Date?e.startDate=this._local_to_utc(this._zero_time(e.startDate)):e.startDate=r.parseDate(e.startDate,g,e.language,e.assumeNearbyYear):e.startDate=-1/0),e.endDate!==1/0&&(e.endDate?e.endDate instanceof Date?e.endDate=this._local_to_utc(this._zero_time(e.endDate)):e.endDate=r.parseDate(e.endDate,g,e.language,e.assumeNearbyYear):e.endDate=1/0),e.daysOfWeekDisabled=this._resolveDaysOfWeek(e.daysOfWeekDisabled||[]),e.daysOfWeekHighlighted=this._resolveDaysOfWeek(e.daysOfWeekHighlighted||[]),e.datesDisabled=e.datesDisabled||[],a.isArray(e.datesDisabled)||(e.datesDisabled=e.datesDisabled.split(",")),e.datesDisabled=a.map(e.datesDisabled,function(a){return r.parseDate(a,g,e.language,e.assumeNearbyYear)});var h=String(e.orientation).toLowerCase().split(/\s+/g),i=e.orientation.toLowerCase();if(h=a.grep(h,function(a){return/^auto|left|right|top|bottom$/.test(a)}),e.orientation={x:"auto",y:"auto"},i&&"auto"!==i)if(1===h.length)switch(h[0]){case"top":case"bottom":e.orientation.y=h[0];break;case"left":case"right":e.orientation.x=h[0]}else i=a.grep(h,function(a){return/^left|right$/.test(a)}),e.orientation.x=i[0]||"auto",i=a.grep(h,function(a){return/^top|bottom$/.test(a)}),e.orientation.y=i[0]||"auto";else;if(e.defaultViewDate instanceof Date||"string"==typeof e.defaultViewDate)e.defaultViewDate=r.parseDate(e.defaultViewDate,g,e.language,e.assumeNearbyYear);else if(e.defaultViewDate){var j=e.defaultViewDate.year||(new Date).getFullYear(),k=e.defaultViewDate.month||0,l=e.defaultViewDate.day||1;e.defaultViewDate=c(j,k,l)}else e.defaultViewDate=d()},_applyEvents:function(a){for(var c,d,e,f=0;f<a.length;f++)c=a[f][0],2===a[f].length?(d=b,e=a[f][1]):3===a[f].length&&(d=a[f][1],e=a[f][2]),c.on(e,d)},_unapplyEvents:function(a){for(var c,d,e,f=0;f<a.length;f++)c=a[f][0],2===a[f].length?(e=b,d=a[f][1]):3===a[f].length&&(e=a[f][1],d=a[f][2]),c.off(d,e)},_buildEvents:function(){var b={keyup:a.proxy(function(b){-1===a.inArray(b.keyCode,[27,37,39,38,40,32,13,9])&&this.update()},this),keydown:a.proxy(this.keydown,this),paste:a.proxy(this.paste,this)};!0===this.o.showOnFocus&&(b.focus=a.proxy(this.show,this)),this.isInput?this._events=[[this.element,b]]:this.component&&this.inputField.length?this._events=[[this.inputField,b],[this.component,{click:a.proxy(this.show,this)}]]:this._events=[[this.element,{click:a.proxy(this.show,this),keydown:a.proxy(this.keydown,this)}]],this._events.push([this.element,"*",{blur:a.proxy(function(a){this._focused_from=a.target},this)}],[this.element,{blur:a.proxy(function(a){this._focused_from=a.target},this)}]),this.o.immediateUpdates&&this._events.push([this.element,{"changeYear changeMonth":a.proxy(function(a){this.update(a.date)},this)}]),this._secondaryEvents=[[this.picker,{click:a.proxy(this.click,this)}],[this.picker,".prev, .next",{click:a.proxy(this.navArrowsClick,this)}],[this.picker,".day:not(.disabled)",{click:a.proxy(this.dayCellClick,this)}],[a(window),{resize:a.proxy(this.place,this)}],[a(document),{"mousedown touchstart":a.proxy(function(a){this.element.is(a.target)||this.element.find(a.target).length||this.picker.is(a.target)||this.picker.find(a.target).length||this.isInline||this.hide()},this)}]]},_attachEvents:function(){this._detachEvents(),this._applyEvents(this._events)},_detachEvents:function(){this._unapplyEvents(this._events)},_attachSecondaryEvents:function(){this._detachSecondaryEvents(),this._applyEvents(this._secondaryEvents)},_detachSecondaryEvents:function(){this._unapplyEvents(this._secondaryEvents)},_trigger:function(b,c){var d=c||this.dates.get(-1),e=this._utc_to_local(d);this.element.trigger({type:b,date:e,viewMode:this.viewMode,dates:a.map(this.dates,this._utc_to_local),format:a.proxy(function(a,b){0===arguments.length?(a=this.dates.length-1,b=this.o.format):"string"==typeof a&&(b=a,a=this.dates.length-1),b=b||this.o.format;var c=this.dates.get(a);return r.formatDate(c,b,this.o.language)},this)})},show:function(){if(!(this.inputField.is(":disabled")||this.inputField.prop("readonly")&&!1===this.o.enableOnReadonly))return this.isInline||this.picker.appendTo(this.o.container),this.place(),this.picker.show(),this._attachSecondaryEvents(),this._trigger("show"),(window.navigator.msMaxTouchPoints||"ontouchstart"in document)&&this.o.disableTouchKeyboard&&a(this.element).blur(),this},hide:function(){return this.isInline||!this.picker.is(":visible")?this:(this.focusDate=null,this.picker.hide().detach(),this._detachSecondaryEvents(),this.setViewMode(this.o.startView),this.o.forceParse&&this.inputField.val()&&this.setValue(),this._trigger("hide"),this)},destroy:function(){return this.hide(),this._detachEvents(),this._detachSecondaryEvents(),this.picker.remove(),delete this.element.data().datepicker,this.isInput||delete this.element.data().date,this},paste:function(b){var c;if(b.originalEvent.clipboardData&&b.originalEvent.clipboardData.types&&-1!==a.inArray("text/plain",b.originalEvent.clipboardData.types))c=b.originalEvent.clipboardData.getData("text/plain");else{if(!window.clipboardData)return;c=window.clipboardData.getData("Text")}this.setDate(c),this.update(),b.preventDefault()},_utc_to_local:function(a){if(!a)return a;var b=new Date(a.getTime()+6e4*a.getTimezoneOffset());return b.getTimezoneOffset()!==a.getTimezoneOffset()&&(b=new Date(a.getTime()+6e4*b.getTimezoneOffset())),b},_local_to_utc:function(a){return a&&new Date(a.getTime()-6e4*a.getTimezoneOffset())},_zero_time:function(a){return a&&new Date(a.getFullYear(),a.getMonth(),a.getDate())},_zero_utc_time:function(a){return a&&c(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate())},getDates:function(){return a.map(this.dates,this._utc_to_local)},getUTCDates:function(){return a.map(this.dates,function(a){return new Date(a)})},getDate:function(){return this._utc_to_local(this.getUTCDate())},getUTCDate:function(){var a=this.dates.get(-1);return a!==b?new Date(a):null},clearDates:function(){this.inputField.val(""),this.update(),this._trigger("changeDate"),this.o.autoclose&&this.hide()},setDates:function(){var b=a.isArray(arguments[0])?arguments[0]:arguments;return this.update.apply(this,b),this._trigger("changeDate"),this.setValue(),this},setUTCDates:function(){var b=a.isArray(arguments[0])?arguments[0]:arguments;return this.setDates.apply(this,a.map(b,this._utc_to_local)),this},setDate:f("setDates"),setUTCDate:f("setUTCDates"),remove:f("destroy","Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead"),setValue:function(){var a=this.getFormattedDate();return this.inputField.val(a),this},getFormattedDate:function(c){c===b&&(c=this.o.format);var d=this.o.language;return a.map(this.dates,function(a){return r.formatDate(a,c,d)}).join(this.o.multidateSeparator)},getStartDate:function(){return this.o.startDate},setStartDate:function(a){return this._process_options({startDate:a}),this.update(),this.updateNavArrows(),this},getEndDate:function(){return this.o.endDate},setEndDate:function(a){return this._process_options({endDate:a}),this.update(),this.updateNavArrows(),this},setDaysOfWeekDisabled:function(a){return this._process_options({daysOfWeekDisabled:a}),this.update(),this},setDaysOfWeekHighlighted:function(a){return this._process_options({daysOfWeekHighlighted:a}),this.update(),this},setDatesDisabled:function(a){return this._process_options({datesDisabled:a}),this.update(),this},place:function(){if(this.isInline)return this;var b=this.picker.outerWidth(),c=this.picker.outerHeight(),d=a(this.o.container),e=d.width(),f="body"===this.o.container?a(document).scrollTop():d.scrollTop(),g=d.offset(),h=[0];this.element.parents().each(function(){var b=a(this).css("z-index");"auto"!==b&&0!==Number(b)&&h.push(Number(b))});var i=Math.max.apply(Math,h)+this.o.zIndexOffset,j=this.component?this.component.parent().offset():this.element.offset(),k=this.component?this.component.outerHeight(!0):this.element.outerHeight(!1),l=this.component?this.component.outerWidth(!0):this.element.outerWidth(!1),m=j.left-g.left,n=j.top-g.top;"body"!==this.o.container&&(n+=f),this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"),"auto"!==this.o.orientation.x?(this.picker.addClass("datepicker-orient-"+this.o.orientation.x),"right"===this.o.orientation.x&&(m-=b-l)):j.left<0?(this.picker.addClass("datepicker-orient-left"),m-=j.left-10):m+b>e?(this.picker.addClass("datepicker-orient-right"),m+=l-b):this.o.rtl?this.picker.addClass("datepicker-orient-right"):this.picker.addClass("datepicker-orient-left");var o,p=this.o.orientation.y;if("auto"===p&&(o=-f+n-c,p=o<0?"bottom":"top"),this.picker.addClass("datepicker-orient-"+p),"top"===p?n-=c+parseInt(this.picker.css("padding-top")):n+=k,this.o.rtl){var q=e-(m+l);this.picker.css({top:n,right:q,zIndex:i})}else this.picker.css({top:n,left:m,zIndex:i});return this},_allow_update:!0,update:function(){if(!this._allow_update)return this;var b=this.dates.copy(),c=[],d=!1;return arguments.length?(a.each(arguments,a.proxy(function(a,b){b instanceof Date&&(b=this._local_to_utc(b)),c.push(b)},this)),d=!0):(c=this.isInput?this.element.val():this.element.data("date")||this.inputField.val(),c=c&&this.o.multidate?c.split(this.o.multidateSeparator):[c],delete this.element.data().date),c=a.map(c,a.proxy(function(a){return r.parseDate(a,this.o.format,this.o.language,this.o.assumeNearbyYear)},this)),c=a.grep(c,a.proxy(function(a){return!this.dateWithinRange(a)||!a},this),!0),this.dates.replace(c),this.o.updateViewDate&&(this.dates.length?this.viewDate=new Date(this.dates.get(-1)):this.viewDate<this.o.startDate?this.viewDate=new Date(this.o.startDate):this.viewDate>this.o.endDate?this.viewDate=new Date(this.o.endDate):this.viewDate=this.o.defaultViewDate),d?(this.setValue(),this.element.change()):this.dates.length&&String(b)!==String(this.dates)&&d&&(this._trigger("changeDate"),this.element.change()),!this.dates.length&&b.length&&(this._trigger("clearDate"),this.element.change()),this.fill(),this},fillDow:function(){if(this.o.showWeekDays){var b=this.o.weekStart,c="<tr>";for(this.o.calendarWeeks&&(c+='<th class="cw">&#160;</th>');b<this.o.weekStart+7;)c+='<th class="dow',-1!==a.inArray(b,this.o.daysOfWeekDisabled)&&(c+=" disabled"),c+='">'+q[this.o.language].daysMin[b++%7]+"</th>";c+="</tr>",this.picker.find(".datepicker-days thead").append(c)}},fillMonths:function(){for(var a,b=this._utc_to_local(this.viewDate),c="",d=0;d<12;d++)a=b&&b.getMonth()===d?" focused":"",c+='<span class="month'+a+'">'+q[this.o.language].monthsShort[d]+"</span>";this.picker.find(".datepicker-months td").html(c)},setRange:function(b){b&&b.length?this.range=a.map(b,function(a){return a.valueOf()}):delete this.range,this.fill()},getClassNames:function(b){var c=[],f=this.viewDate.getUTCFullYear(),g=this.viewDate.getUTCMonth(),h=d();return b.getUTCFullYear()<f||b.getUTCFullYear()===f&&b.getUTCMonth()<g?c.push("old"):(b.getUTCFullYear()>f||b.getUTCFullYear()===f&&b.getUTCMonth()>g)&&c.push("new"),this.focusDate&&b.valueOf()===this.focusDate.valueOf()&&c.push("focused"),this.o.todayHighlight&&e(b,h)&&c.push("today"),-1!==this.dates.contains(b)&&c.push("active"),this.dateWithinRange(b)||c.push("disabled"),this.dateIsDisabled(b)&&c.push("disabled","disabled-date"),-1!==a.inArray(b.getUTCDay(),this.o.daysOfWeekHighlighted)&&c.push("highlighted"),this.range&&(b>this.range[0]&&b<this.range[this.range.length-1]&&c.push("range"),-1!==a.inArray(b.valueOf(),this.range)&&c.push("selected"),b.valueOf()===this.range[0]&&c.push("range-start"),b.valueOf()===this.range[this.range.length-1]&&c.push("range-end")),c},_fill_yearsView:function(c,d,e,f,g,h,i){for(var j,k,l,m="",n=e/10,o=this.picker.find(c),p=Math.floor(f/e)*e,q=p+9*n,r=Math.floor(this.viewDate.getFullYear()/n)*n,s=a.map(this.dates,function(a){return Math.floor(a.getUTCFullYear()/n)*n}),t=p-n;t<=q+n;t+=n)j=[d],k=null,t===p-n?j.push("old"):t===q+n&&j.push("new"),-1!==a.inArray(t,s)&&j.push("active"),(t<g||t>h)&&j.push("disabled"),t===r&&j.push("focused"),i!==a.noop&&(l=i(new Date(t,0,1)),l===b?l={}:"boolean"==typeof l?l={enabled:l}:"string"==typeof l&&(l={classes:l}),!1===l.enabled&&j.push("disabled"),l.classes&&(j=j.concat(l.classes.split(/\s+/))),l.tooltip&&(k=l.tooltip)),m+='<span class="'+j.join(" ")+'"'+(k?' title="'+k+'"':"")+">"+t+"</span>";o.find(".datepicker-switch").text(p+"-"+q),o.find("td").html(m)},fill:function(){var e,f,g=new Date(this.viewDate),h=g.getUTCFullYear(),i=g.getUTCMonth(),j=this.o.startDate!==-1/0?this.o.startDate.getUTCFullYear():-1/0,k=this.o.startDate!==-1/0?this.o.startDate.getUTCMonth():-1/0,l=this.o.endDate!==1/0?this.o.endDate.getUTCFullYear():1/0,m=this.o.endDate!==1/0?this.o.endDate.getUTCMonth():1/0,n=q[this.o.language].today||q.en.today||"",o=q[this.o.language].clear||q.en.clear||"",p=q[this.o.language].titleFormat||q.en.titleFormat,s=d(),t=(!0===this.o.todayBtn||"linked"===this.o.todayBtn)&&s>=this.o.startDate&&s<=this.o.endDate&&!this.weekOfDateIsDisabled(s);if(!isNaN(h)&&!isNaN(i)){this.picker.find(".datepicker-days .datepicker-switch").text(r.formatDate(g,p,this.o.language)),this.picker.find("tfoot .today").text(n).css("display",t?"table-cell":"none"),this.picker.find("tfoot .clear").text(o).css("display",!0===this.o.clearBtn?"table-cell":"none"),this.picker.find("thead .datepicker-title").text(this.o.title).css("display","string"==typeof this.o.title&&""!==this.o.title?"table-cell":"none"),this.updateNavArrows(),this.fillMonths();var u=c(h,i,0),v=u.getUTCDate();u.setUTCDate(v-(u.getUTCDay()-this.o.weekStart+7)%7);var w=new Date(u);u.getUTCFullYear()<100&&w.setUTCFullYear(u.getUTCFullYear()),w.setUTCDate(w.getUTCDate()+42),w=w.valueOf();for(var x,y,z=[];u.valueOf()<w;){if((x=u.getUTCDay())===this.o.weekStart&&(z.push("<tr>"),this.o.calendarWeeks)){var A=new Date(+u+(this.o.weekStart-x-7)%7*864e5),B=new Date(Number(A)+(11-A.getUTCDay())%7*864e5),C=new Date(Number(C=c(B.getUTCFullYear(),0,1))+(11-C.getUTCDay())%7*864e5),D=(B-C)/864e5/7+1;z.push('<td class="cw">'+D+"</td>")}y=this.getClassNames(u),y.push("day");var E=u.getUTCDate();this.o.beforeShowDay!==a.noop&&(f=this.o.beforeShowDay(this._utc_to_local(u)),f===b?f={}:"boolean"==typeof f?f={enabled:f}:"string"==typeof f&&(f={classes:f}),!1===f.enabled&&y.push("disabled"),f.classes&&(y=y.concat(f.classes.split(/\s+/))),f.tooltip&&(e=f.tooltip),f.content&&(E=f.content)),y=a.isFunction(a.uniqueSort)?a.uniqueSort(y):a.unique(y),z.push('<td class="'+y.join(" ")+'"'+(e?' title="'+e+'"':"")+' data-date="'+u.getTime().toString()+'">'+E+"</td>"),e=null,x===this.o.weekEnd&&z.push("</tr>"),u.setUTCDate(u.getUTCDate()+1)}this.picker.find(".datepicker-days tbody").html(z.join(""));var F=q[this.o.language].monthsTitle||q.en.monthsTitle||"Months",G=this.picker.find(".datepicker-months").find(".datepicker-switch").text(this.o.maxViewMode<2?F:h).end().find("tbody span").removeClass("active");if(a.each(this.dates,function(a,b){b.getUTCFullYear()===h&&G.eq(b.getUTCMonth()).addClass("active")}),(h<j||h>l)&&G.addClass("disabled"),h===j&&G.slice(0,k).addClass("disabled"),h===l&&G.slice(m+1).addClass("disabled"),this.o.beforeShowMonth!==a.noop){var H=this;a.each(G,function(c,d){var e=new Date(h,c,1),f=H.o.beforeShowMonth(e);f===b?f={}:"boolean"==typeof f?f={enabled:f}:"string"==typeof f&&(f={classes:f}),!1!==f.enabled||a(d).hasClass("disabled")||a(d).addClass("disabled"),f.classes&&a(d).addClass(f.classes),f.tooltip&&a(d).prop("title",f.tooltip)})}this._fill_yearsView(".datepicker-years","year",10,h,j,l,this.o.beforeShowYear),this._fill_yearsView(".datepicker-decades","decade",100,h,j,l,this.o.beforeShowDecade),this._fill_yearsView(".datepicker-centuries","century",1e3,h,j,l,this.o.beforeShowCentury)}},updateNavArrows:function(){if(this._allow_update){var a,b,c=new Date(this.viewDate),d=c.getUTCFullYear(),e=c.getUTCMonth(),f=this.o.startDate!==-1/0?this.o.startDate.getUTCFullYear():-1/0,g=this.o.startDate!==-1/0?this.o.startDate.getUTCMonth():-1/0,h=this.o.endDate!==1/0?this.o.endDate.getUTCFullYear():1/0,i=this.o.endDate!==1/0?this.o.endDate.getUTCMonth():1/0,j=1;switch(this.viewMode){case 4:j*=10;case 3:j*=10;case 2:j*=10;case 1:a=Math.floor(d/j)*j<=f,b=Math.floor(d/j)*j+j>h;break;case 0:a=d<=f&&e<=g,b=d>=h&&e>=i}this.picker.find(".prev").toggleClass("disabled",a),this.picker.find(".next").toggleClass("disabled",b)}},click:function(b){b.preventDefault(),b.stopPropagation();var e,f,g,h;e=a(b.target),e.hasClass("datepicker-switch")&&this.viewMode!==this.o.maxViewMode&&this.setViewMode(this.viewMode+1),e.hasClass("today")&&!e.hasClass("day")&&(this.setViewMode(0),this._setDate(d(),"linked"===this.o.todayBtn?null:"view")),e.hasClass("clear")&&this.clearDates(),e.hasClass("disabled")||(e.hasClass("month")||e.hasClass("year")||e.hasClass("decade")||e.hasClass("century"))&&(this.viewDate.setUTCDate(1),f=1,1===this.viewMode?(h=e.parent().find("span").index(e),g=this.viewDate.getUTCFullYear(),this.viewDate.setUTCMonth(h)):(h=0,g=Number(e.text()),this.viewDate.setUTCFullYear(g)),this._trigger(r.viewModes[this.viewMode-1].e,this.viewDate),this.viewMode===this.o.minViewMode?this._setDate(c(g,h,f)):(this.setViewMode(this.viewMode-1),this.fill())),this.picker.is(":visible")&&this._focused_from&&this._focused_from.focus(),delete this._focused_from},dayCellClick:function(b){var c=a(b.currentTarget),d=c.data("date"),e=new Date(d);this.o.updateViewDate&&(e.getUTCFullYear()!==this.viewDate.getUTCFullYear()&&this._trigger("changeYear",this.viewDate),e.getUTCMonth()!==this.viewDate.getUTCMonth()&&this._trigger("changeMonth",this.viewDate)),this._setDate(e)},navArrowsClick:function(b){var c=a(b.currentTarget),d=c.hasClass("prev")?-1:1;0!==this.viewMode&&(d*=12*r.viewModes[this.viewMode].navStep),this.viewDate=this.moveMonth(this.viewDate,d),this._trigger(r.viewModes[this.viewMode].e,this.viewDate),this.fill()},_toggle_multidate:function(a){var b=this.dates.contains(a);if(a||this.dates.clear(),-1!==b?(!0===this.o.multidate||this.o.multidate>1||this.o.toggleActive)&&this.dates.remove(b):!1===this.o.multidate?(this.dates.clear(),this.dates.push(a)):this.dates.push(a),"number"==typeof this.o.multidate)for(;this.dates.length>this.o.multidate;)this.dates.remove(0)},_setDate:function(a,b){b&&"date"!==b||this._toggle_multidate(a&&new Date(a)),(!b&&this.o.updateViewDate||"view"===b)&&(this.viewDate=a&&new Date(a)),this.fill(),this.setValue(),b&&"view"===b||this._trigger("changeDate"),this.inputField.trigger("change"),!this.o.autoclose||b&&"date"!==b||this.hide()},moveDay:function(a,b){var c=new Date(a);return c.setUTCDate(a.getUTCDate()+b),c},moveWeek:function(a,b){return this.moveDay(a,7*b)},moveMonth:function(a,b){if(!g(a))return this.o.defaultViewDate;if(!b)return a;var c,d,e=new Date(a.valueOf()),f=e.getUTCDate(),h=e.getUTCMonth(),i=Math.abs(b);if(b=b>0?1:-1,1===i)d=-1===b?function(){return e.getUTCMonth()===h}:function(){return e.getUTCMonth()!==c},c=h+b,e.setUTCMonth(c),c=(c+12)%12;else{for(var j=0;j<i;j++)e=this.moveMonth(e,b);c=e.getUTCMonth(),e.setUTCDate(f),d=function(){return c!==e.getUTCMonth()}}for(;d();)e.setUTCDate(--f),e.setUTCMonth(c);return e},moveYear:function(a,b){return this.moveMonth(a,12*b)},moveAvailableDate:function(a,b,c){do{if(a=this[c](a,b),!this.dateWithinRange(a))return!1;c="moveDay"}while(this.dateIsDisabled(a));return a},weekOfDateIsDisabled:function(b){return-1!==a.inArray(b.getUTCDay(),this.o.daysOfWeekDisabled)},dateIsDisabled:function(b){return this.weekOfDateIsDisabled(b)||a.grep(this.o.datesDisabled,function(a){return e(b,a)}).length>0},dateWithinRange:function(a){return a>=this.o.startDate&&a<=this.o.endDate},keydown:function(a){if(!this.picker.is(":visible"))return void(40!==a.keyCode&&27!==a.keyCode||(this.show(),a.stopPropagation()));var b,c,d=!1,e=this.focusDate||this.viewDate;switch(a.keyCode){case 27:this.focusDate?(this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.fill()):this.hide(),a.preventDefault(),a.stopPropagation();break;case 37:case 38:case 39:case 40:if(!this.o.keyboardNavigation||7===this.o.daysOfWeekDisabled.length)break;b=37===a.keyCode||38===a.keyCode?-1:1,0===this.viewMode?a.ctrlKey?(c=this.moveAvailableDate(e,b,"moveYear"))&&this._trigger("changeYear",this.viewDate):a.shiftKey?(c=this.moveAvailableDate(e,b,"moveMonth"))&&this._trigger("changeMonth",this.viewDate):37===a.keyCode||39===a.keyCode?c=this.moveAvailableDate(e,b,"moveDay"):this.weekOfDateIsDisabled(e)||(c=this.moveAvailableDate(e,b,"moveWeek")):1===this.viewMode?(38!==a.keyCode&&40!==a.keyCode||(b*=4),c=this.moveAvailableDate(e,b,"moveMonth")):2===this.viewMode&&(38!==a.keyCode&&40!==a.keyCode||(b*=4),c=this.moveAvailableDate(e,b,"moveYear")),c&&(this.focusDate=this.viewDate=c,this.setValue(),this.fill(),a.preventDefault());break;case 13:if(!this.o.forceParse)break;e=this.focusDate||this.dates.get(-1)||this.viewDate,this.o.keyboardNavigation&&(this._toggle_multidate(e),d=!0),this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.setValue(),this.fill(),this.picker.is(":visible")&&(a.preventDefault(),a.stopPropagation(),this.o.autoclose&&this.hide());break;case 9:this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.fill(),this.hide()}d&&(this.dates.length?this._trigger("changeDate"):this._trigger("clearDate"),this.inputField.trigger("change"))},setViewMode:function(a){this.viewMode=a,this.picker.children("div").hide().filter(".datepicker-"+r.viewModes[this.viewMode].clsName).show(),this.updateNavArrows(),this._trigger("changeViewMode",new Date(this.viewDate))}};var l=function(b,c){a.data(b,"datepicker",this),this.element=a(b),this.inputs=a.map(c.inputs,function(a){return a.jquery?a[0]:a}),delete c.inputs,this.keepEmptyValues=c.keepEmptyValues,delete c.keepEmptyValues,n.call(a(this.inputs),c).on("changeDate",a.proxy(this.dateUpdated,this)),this.pickers=a.map(this.inputs,function(b){return a.data(b,"datepicker")}),this.updateDates()};l.prototype={updateDates:function(){this.dates=a.map(this.pickers,function(a){return a.getUTCDate()}),this.updateRanges()},updateRanges:function(){var b=a.map(this.dates,function(a){return a.valueOf()});a.each(this.pickers,function(a,c){c.setRange(b)})},clearDates:function(){a.each(this.pickers,function(a,b){b.clearDates()})},dateUpdated:function(c){if(!this.updating){this.updating=!0;var d=a.data(c.target,"datepicker");if(d!==b){var e=d.getUTCDate(),f=this.keepEmptyValues,g=a.inArray(c.target,this.inputs),h=g-1,i=g+1,j=this.inputs.length;if(-1!==g){if(a.each(this.pickers,function(a,b){b.getUTCDate()||b!==d&&f||b.setUTCDate(e)}),e<this.dates[h])for(;h>=0&&e<this.dates[h];)this.pickers[h--].setUTCDate(e);else if(e>this.dates[i])for(;i<j&&e>this.dates[i];)this.pickers[i++].setUTCDate(e);this.updateDates(),delete this.updating}}}},destroy:function(){a.map(this.pickers,function(a){a.destroy()}),a(this.inputs).off("changeDate",this.dateUpdated),delete this.element.data().datepicker},remove:f("destroy","Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead")};var m=a.fn.datepicker,n=function(c){var d=Array.apply(null,arguments);d.shift();var e;if(this.each(function(){var b=a(this),f=b.data("datepicker"),g="object"==typeof c&&c;if(!f){var j=h(this,"date"),m=a.extend({},o,j,g),n=i(m.language),p=a.extend({},o,n,j,g);b.hasClass("input-daterange")||p.inputs?(a.extend(p,{inputs:p.inputs||b.find("input").toArray()}),f=new l(this,p)):f=new k(this,p),b.data("datepicker",f)}"string"==typeof c&&"function"==typeof f[c]&&(e=f[c].apply(f,d))}),e===b||e instanceof k||e instanceof l)return this;if(this.length>1)throw new Error("Using only allowed for the collection of a single element ("+c+" function)");return e};a.fn.datepicker=n;var o=a.fn.datepicker.defaults={assumeNearbyYear:!1,autoclose:!1,beforeShowDay:a.noop,beforeShowMonth:a.noop,beforeShowYear:a.noop,beforeShowDecade:a.noop,beforeShowCentury:a.noop,calendarWeeks:!1,clearBtn:!1,toggleActive:!1,daysOfWeekDisabled:[],daysOfWeekHighlighted:[],datesDisabled:[],endDate:1/0,forceParse:!0,format:"mm/dd/yyyy",keepEmptyValues:!1,keyboardNavigation:!0,language:"en",minViewMode:0,maxViewMode:4,multidate:!1,multidateSeparator:",",orientation:"auto",rtl:!1,startDate:-1/0,startView:0,todayBtn:!1,todayHighlight:!1,updateViewDate:!0,weekStart:0,disableTouchKeyboard:!1,enableOnReadonly:!0,showOnFocus:!0,zIndexOffset:10,container:"body",immediateUpdates:!1,title:"",templates:{leftArrow:"&#x00AB;",rightArrow:"&#x00BB;"},showWeekDays:!0},p=a.fn.datepicker.locale_opts=["format","rtl","weekStart"];a.fn.datepicker.Constructor=k;var q=a.fn.datepicker.dates={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today",clear:"Clear",titleFormat:"MM yyyy"}},r={viewModes:[{names:["days","month"],clsName:"days",e:"changeMonth"},{names:["months","year"],clsName:"months",e:"changeYear",navStep:1},{names:["years","decade"],clsName:"years",e:"changeDecade",navStep:10},{names:["decades","century"],clsName:"decades",e:"changeCentury",navStep:100},{names:["centuries","millennium"],clsName:"centuries",e:"changeMillennium",navStep:1e3}],validParts:/dd?|DD?|mm?|MM?|yy(?:yy)?/g,nonpunctuation:/[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,parseFormat:function(a){if("function"==typeof a.toValue&&"function"==typeof a.toDisplay)return a;var b=a.replace(this.validParts,"\0").split("\0"),c=a.match(this.validParts);if(!b||!b.length||!c||0===c.length)throw new Error("Invalid date format.");return{separators:b,parts:c}},parseDate:function(c,e,f,g){function h(a,b){return!0===b&&(b=10),a<100&&(a+=2e3)>(new Date).getFullYear()+b&&(a-=100),a}function i(){var a=this.slice(0,j[n].length),b=j[n].slice(0,a.length);return a.toLowerCase()===b.toLowerCase()}if(!c)return b;if(c instanceof Date)return c;if("string"==typeof e&&(e=r.parseFormat(e)),e.toValue)return e.toValue(c,e,f);var j,l,m,n,o,p={d:"moveDay",m:"moveMonth",w:"moveWeek",y:"moveYear"},s={yesterday:"-1d",today:"+0d",tomorrow:"+1d"};if(c in s&&(c=s[c]),/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/i.test(c)){for(j=c.match(/([\-+]\d+)([dmwy])/gi),c=new Date,n=0;n<j.length;n++)l=j[n].match(/([\-+]\d+)([dmwy])/i),m=Number(l[1]),o=p[l[2].toLowerCase()],c=k.prototype[o](c,m);return k.prototype._zero_utc_time(c)}j=c&&c.match(this.nonpunctuation)||[];var t,u,v={},w=["yyyy","yy","M","MM","m","mm","d","dd"],x={yyyy:function(a,b){return a.setUTCFullYear(g?h(b,g):b)},m:function(a,b){if(isNaN(a))return a;for(b-=1;b<0;)b+=12;for(b%=12,a.setUTCMonth(b);a.getUTCMonth()!==b;)a.setUTCDate(a.getUTCDate()-1);return a},d:function(a,b){return a.setUTCDate(b)}};x.yy=x.yyyy,x.M=x.MM=x.mm=x.m,x.dd=x.d,c=d();var y=e.parts.slice();if(j.length!==y.length&&(y=a(y).filter(function(b,c){return-1!==a.inArray(c,w)}).toArray()),j.length===y.length){var z;for(n=0,z=y.length;n<z;n++){if(t=parseInt(j[n],10),l=y[n],isNaN(t))switch(l){case"MM":u=a(q[f].months).filter(i),t=a.inArray(u[0],q[f].months)+1;break;case"M":u=a(q[f].monthsShort).filter(i),t=a.inArray(u[0],q[f].monthsShort)+1}v[l]=t}var A,B;for(n=0;n<w.length;n++)(B=w[n])in v&&!isNaN(v[B])&&(A=new Date(c),x[B](A,v[B]),isNaN(A)||(c=A))}return c},formatDate:function(b,c,d){if(!b)return"";if("string"==typeof c&&(c=r.parseFormat(c)),c.toDisplay)return c.toDisplay(b,c,d);var e={d:b.getUTCDate(),D:q[d].daysShort[b.getUTCDay()],DD:q[d].days[b.getUTCDay()],m:b.getUTCMonth()+1,M:q[d].monthsShort[b.getUTCMonth()],MM:q[d].months[b.getUTCMonth()],yy:b.getUTCFullYear().toString().substring(2),yyyy:b.getUTCFullYear()};e.dd=(e.d<10?"0":"")+e.d,e.mm=(e.m<10?"0":"")+e.m,b=[];for(var f=a.extend([],c.separators),g=0,h=c.parts.length;g<=h;g++)f.length&&b.push(f.shift()),b.push(e[c.parts[g]]);return b.join("")},
headTemplate:'<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">'+o.templates.leftArrow+'</th><th colspan="5" class="datepicker-switch"></th><th class="next">'+o.templates.rightArrow+"</th></tr></thead>",contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>',footTemplate:'<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'};r.template='<div class="datepicker"><div class="datepicker-days"><table class="table-condensed">'+r.headTemplate+"<tbody></tbody>"+r.footTemplate+'</table></div><div class="datepicker-months"><table class="table-condensed">'+r.headTemplate+r.contTemplate+r.footTemplate+'</table></div><div class="datepicker-years"><table class="table-condensed">'+r.headTemplate+r.contTemplate+r.footTemplate+'</table></div><div class="datepicker-decades"><table class="table-condensed">'+r.headTemplate+r.contTemplate+r.footTemplate+'</table></div><div class="datepicker-centuries"><table class="table-condensed">'+r.headTemplate+r.contTemplate+r.footTemplate+"</table></div></div>",a.fn.datepicker.DPGlobal=r,a.fn.datepicker.noConflict=function(){return a.fn.datepicker=m,this},a.fn.datepicker.version="1.9.0",a.fn.datepicker.deprecated=function(a){var b=window.console;b&&b.warn&&b.warn("DEPRECATED: "+a)},a(document).on("focus.datepicker.data-api click.datepicker.data-api",'[data-provide="datepicker"]',function(b){var c=a(this);c.data("datepicker")||(b.preventDefault(),n.call(c,"show"))}),a(function(){n.call(a('[data-provide="datepicker-inline"]'))})});


$('.datepicker').datepicker({
	format:			'dd M yyyy',
	changeMonth: 	true,
	todayBtn: 		"linked",
	calendarWeeks: 	true,
	autoclose: 		true,
	todayHighlight: true,
	startDate: 		"+21d",
	
	onRender: function(date) {
		 return date.valueOf() < nowDate.valueOf() ? 'disabled' : '';
	}
});



// selectize and formtowizard compiled


(function(c,e){"function"===typeof define&&define.amd?define("sifter",e):"object"===typeof exports?module.exports=e():c.Sifter=e()})(this,function(){var c=function(c,f){this.items=c;this.settings=f||{diacritics:!0}};c.prototype.tokenize=function(c){c=(String(c||"").toLowerCase()+"").replace(/^\s+|\s+$|/g,"");if(!c||!c.length)return[];var f,e,n=[],k=c.split(/ +/);c=0;for(f=k.length;c<f;c++){var l=(k[c]+"").replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1");if(this.settings.diacritics)for(e in m)m.hasOwnProperty(e)&&
(l=l.replace(new RegExp(e,"g"),m[e]));n.push({string:k[c],regex:new RegExp(l,"i")})}return n};c.prototype.iterator=function(c,f){(p(c)?Array.prototype.forEach||function(c){for(var f=0,e=this.length;f<e;f++)c(this[f],f,this)}:function(c){for(var f in this)this.hasOwnProperty(f)&&c(this[f],f,this)}).apply(c,[f])};c.prototype.getScoreFunction=function(c,f){c=this.prepareSearch(c,f);var e=c.tokens;var n=c.options.fields;var k=e.length;var l=c.options.nesting;var u=function(c,f){if(!c)return 0;c=String(c||
"");var e=c.search(f.regex);if(-1===e)return 0;var l=f.string.length/c.length;0===e&&(l+=.5);return l},m=function(){var c=n.length;return c?1===c?function(c,f){return u(y(f,n[0],l),c)}:function(f,e){for(var k=0,w=0;k<c;k++)w+=u(y(e,n[k],l),f);return w/c}:function(){return 0}}();return k?1===k?function(c){return m(e[0],c)}:"and"===c.options.conjunction?function(c){for(var f,l=0,n=0;l<k;l++){f=m(e[l],c);if(0>=f)return 0;n+=f}return n/k}:function(c){for(var f=0,l=0;f<k;f++)l+=m(e[f],c);return l/k}:function(){return 0}};
c.prototype.getSortFunction=function(c,f){var n,u;var k=this;c=k.prepareSearch(c,f);var l=!c.query&&f.sort_empty||f.sort;var m=function(c,e){return"$score"===c?e.score:y(k.items[e.id],c,f.nesting)};var v=[];if(l){var t=0;for(n=l.length;t<n;t++)(c.query||"$score"!==l[t].field)&&v.push(l[t])}if(c.query){l=!0;t=0;for(n=v.length;t<n;t++)if("$score"===v[t].field){l=!1;break}l&&v.unshift({field:"$score",direction:"desc"})}else for(t=0,n=v.length;t<n;t++)if("$score"===v[t].field){v.splice(t,1);break}var p=
[];t=0;for(n=v.length;t<n;t++)p.push("desc"===v[t].direction?-1:1);if(u=v.length){if(1===u){var x=v[0].field;var E=p[0];return function(c,f){return E*e(m(x,c),m(x,f))}}return function(c,f){var a;for(a=0;a<u;a++){var b=v[a].field;if(b=p[a]*e(m(b,c),m(b,f)))return b}return 0}}return null};c.prototype.prepareSearch=function(c,f){if("object"===typeof c)return c;f=u({},f);var e=f.fields,n=f.sort,k=f.sort_empty;e&&!p(e)&&(f.fields=[e]);n&&!p(n)&&(f.sort=[n]);k&&!p(k)&&(f.sort_empty=[k]);return{options:f,
query:String(c||"").toLowerCase(),tokens:this.tokenize(c),total:0,items:[]}};c.prototype.search=function(c,f){var e,n;var k=this.prepareSearch(c,f);f=k.options;c=k.query;var l=f.score||this.getScoreFunction(k);c.length?this.iterator(this.items,function(c,n){e=l(c);(!1===f.filter||0<e)&&k.items.push({score:e,id:n})}):this.iterator(this.items,function(c,f){k.items.push({score:1,id:f})});(n=this.getSortFunction(k,f))&&k.items.sort(n);k.total=k.items.length;"number"===typeof f.limit&&(k.items=k.items.slice(0,
f.limit));return k};var e=function(c,f){if("number"===typeof c&&"number"===typeof f)return c>f?1:c<f?-1:0;c=x(String(c||""));f=x(String(f||""));return c>f?1:f>c?-1:0},u=function(c,f){var e,n,k;var l=1;for(e=arguments.length;l<e;l++)if(k=arguments[l])for(n in k)k.hasOwnProperty(n)&&(c[n]=k[n]);return c},y=function(c,f,e){if(c&&f){if(!e)return c[f];for(f=f.split(".");f.length&&(c=c[f.shift()]););return c}},p=Array.isArray||"undefined"!==typeof $&&$.isArray||function(c){return"[object Array]"===Object.prototype.toString.call(c)},
m={a:"[a\u1e00\u1e01\u0102\u0103\u00c2\u00e2\u01cd\u01ce\u023a\u2c65\u0226\u0227\u1ea0\u1ea1\u00c4\u00e4\u00c0\u00e0\u00c1\u00e1\u0100\u0101\u00c3\u00e3\u00c5\u00e5\u0105\u0104\u00c3\u0105\u0104]",b:"[b\u2422\u03b2\u0392B\u0e3f\ud800\udf01\u16d2]",c:"[c\u0106\u0107\u0108\u0109\u010c\u010d\u010a\u010bC\u0304c\u0304\u00c7\u00e7\u1e08\u1e09\u023b\u023c\u0187\u0188\u0255\u1d04\uff23\uff43]",d:"[d\u010e\u010f\u1e0a\u1e0b\u1e10\u1e11\u1e0c\u1e0d\u1e12\u1e13\u1e0e\u1e0f\u0110\u0111D\u0326d\u0326\u0189\u0256\u018a\u0257\u018b\u018c\u1d6d\u1d81\u1d91\u0221\u1d05\uff24\uff44\u00f0]",
e:"[e\u00c9\u00e9\u00c8\u00e8\u00ca\u00ea\u1e18\u1e19\u011a\u011b\u0114\u0115\u1ebc\u1ebd\u1e1a\u1e1b\u1eba\u1ebb\u0116\u0117\u00cb\u00eb\u0112\u0113\u0228\u0229\u0118\u0119\u1d92\u0246\u0247\u0204\u0205\u1ebe\u1ebf\u1ec0\u1ec1\u1ec4\u1ec5\u1ec2\u1ec3\u1e1c\u1e1d\u1e16\u1e17\u1e14\u1e15\u0206\u0207\u1eb8\u1eb9\u1ec6\u1ec7\u2c78\u1d07\uff25\uff45\u0258\u01dd\u018f\u0190\u03b5]",f:"[f\u0191\u0192\u1e1e\u1e1f]",g:"[g\u0262\u20b2\u01e4\u01e5\u011c\u011d\u011e\u011f\u0122\u0123\u0193\u0260\u0120\u0121]",
h:"[h\u0124\u0125\u0126\u0127\u1e28\u1e29\u1e96\u1e96\u1e24\u1e25\u1e22\u1e23\u0266\u02b0\u01f6\u0195]",i:"[i\u00cd\u00ed\u00cc\u00ec\u012c\u012d\u00ce\u00ee\u01cf\u01d0\u00cf\u00ef\u1e2e\u1e2f\u0128\u0129\u012e\u012f\u012a\u012b\u1ec8\u1ec9\u0208\u0209\u020a\u020b\u1eca\u1ecb\u1e2c\u1e2d\u0197\u0268\u0268\u0306\u1d7b\u1d96\u0130iI\u0131\u026a\uff29\uff49]",j:"[j\u0237\u0134\u0135\u0248\u0249\u029d\u025f\u02b2]",k:"[k\u0198\u0199\ua740\ua741\u1e30\u1e31\u01e8\u01e9\u1e32\u1e33\u1e34\u1e35\u03ba\u03f0\u20ad]",
l:"[l\u0141\u0142\u013d\u013e\u013b\u013c\u0139\u013a\u1e36\u1e37\u1e38\u1e39\u1e3c\u1e3d\u1e3a\u1e3b\u013f\u0140\u023d\u019a\u2c60\u2c61\u2c62\u026b\u026c\u1d85\u026d\u0234\u029f\uff2c\uff4c]",n:"[n\u0143\u0144\u01f8\u01f9\u0147\u0148\u00d1\u00f1\u1e44\u1e45\u0145\u0146\u1e46\u1e47\u1e4a\u1e4b\u1e48\u1e49N\u0308n\u0308\u019d\u0272\u0220\u019e\u1d70\u1d87\u0273\u0235\u0274\uff2e\uff4e\u014a\u014b]",o:"[o\u00d8\u00f8\u00d6\u00f6\u00d3\u00f3\u00d2\u00f2\u00d4\u00f4\u01d1\u01d2\u0150\u0151\u014e\u014f\u022e\u022f\u1ecc\u1ecd\u019f\u0275\u01a0\u01a1\u1ece\u1ecf\u014c\u014d\u00d5\u00f5\u01ea\u01eb\u020c\u020d\u0555\u0585]",
p:"[p\u1e54\u1e55\u1e56\u1e57\u2c63\u1d7d\u01a4\u01a5\u1d71]",q:"[q\ua756\ua757\u02a0\u024a\u024b\ua758\ua759q\u0303]",r:"[r\u0154\u0155\u024c\u024d\u0158\u0159\u0156\u0157\u1e58\u1e59\u0210\u0211\u0212\u0213\u1e5a\u1e5b\u2c64\u027d]",s:"[s\u015a\u015b\u1e60\u1e61\u1e62\u1e63\ua7a8\ua7a9\u015c\u015d\u0160\u0161\u015e\u015f\u0218\u0219S\u0308s\u0308]",t:"[t\u0164\u0165\u1e6a\u1e6b\u0162\u0163\u1e6c\u1e6d\u01ae\u0288\u021a\u021b\u1e70\u1e71\u1e6e\u1e6f\u01ac\u01ad]",u:"[u\u016c\u016d\u0244\u0289\u1ee4\u1ee5\u00dc\u00fc\u00da\u00fa\u00d9\u00f9\u00db\u00fb\u01d3\u01d4\u0170\u0171\u016c\u016d\u01af\u01b0\u1ee6\u1ee7\u016a\u016b\u0168\u0169\u0172\u0173\u0214\u0215\u222a]",
v:"[v\u1e7c\u1e7d\u1e7e\u1e7f\u01b2\u028b\ua75e\ua75f\u2c71\u028b]",w:"[w\u1e82\u1e83\u1e80\u1e81\u0174\u0175\u1e84\u1e85\u1e86\u1e87\u1e88\u1e89]",x:"[x\u1e8c\u1e8d\u1e8a\u1e8b\u03c7]",y:"[y\u00dd\u00fd\u1ef2\u1ef3\u0176\u0177\u0178\u00ff\u1ef8\u1ef9\u1e8e\u1e8f\u1ef4\u1ef5\u024e\u024f\u01b3\u01b4]",z:"[z\u0179\u017a\u1e90\u1e91\u017d\u017e\u017b\u017c\u1e92\u1e93\u1e94\u1e95\u01b5\u01b6]"},x=function(){var c,f,e="",u={};for(f in m)if(m.hasOwnProperty(f)){var k=m[f].substring(2,m[f].length-1);e+=
k;var l=0;for(c=k.length;l<c;l++)u[k.charAt(l)]=f}var p=new RegExp("["+e+"]","g");return function(c){return c.replace(p,function(c){return u[c]}).toLowerCase()}}();return c});
(function(c,e){"function"===typeof define&&define.amd?define("microplugin",e):"object"===typeof exports?module.exports=e():c.MicroPlugin=e()})(this,function(){var c={isArray:Array.isArray||function(c){return"[object Array]"===Object.prototype.toString.call(c)}};return{mixin:function(e){e.plugins={};e.prototype.initializePlugins=function(e){var u,p=[];this.plugins={names:[],settings:{},requested:{},loaded:{}};if(c.isArray(e)){var m=0;for(u=e.length;m<u;m++)"string"===typeof e[m]?p.push(e[m]):(this.plugins.settings[e[m].name]=
e[m].options,p.push(e[m].name))}else if(e)for(m in e)e.hasOwnProperty(m)&&(this.plugins.settings[m]=e[m],p.push(m));for(;p.length;)this.require(p.shift())};e.prototype.loadPlugin=function(c){var u=this.plugins,p=e.plugins[c];if(!e.plugins.hasOwnProperty(c))throw Error('Unable to find "'+c+'" plugin');u.requested[c]=!0;u.loaded[c]=p.fn.apply(this,[this.plugins.settings[c]||{}]);u.names.push(c)};e.prototype.require=function(c){var e=this.plugins;if(!this.plugins.loaded.hasOwnProperty(c)){if(e.requested[c])throw Error('Plugin has circular dependency ("'+
c+'")');this.loadPlugin(c)}return e.loaded[c]};e.define=function(c,y){e.plugins[c]={name:c,fn:y}}}}});
(function(c,e){"function"===typeof define&&define.amd?define("selectize",["jquery","sifter","microplugin"],e):"object"===typeof exports?module.exports=e(require("jquery"),require("sifter"),require("microplugin")):c.Selectize=e(c.jQuery,c.Sifter,c.MicroPlugin)})(this,function(c,e,u){var y=function(a,b){if("string"!==typeof b||b.length){var d="string"===typeof b?new RegExp(b,"i"):b,c=function(a){var b=0;if(3===a.nodeType){var g=a.data.search(d);if(0<=g&&0<a.data.length){var h=a.data.match(d);b=document.createElement("span");
b.className="highlight";a=a.splitText(g);a.splitText(h[0].length);g=a.cloneNode(!0);b.appendChild(g);a.parentNode.replaceChild(b,a);b=1}}else if(1===a.nodeType&&a.childNodes&&!/(script|style)/i.test(a.tagName)&&("highlight"!==a.className||"SPAN"!==a.tagName))for(g=0;g<a.childNodes.length;++g)g+=c(a.childNodes[g]);return b};return a.each(function(){c(this)})}};c.fn.removeHighlight=function(){return this.find("span.highlight").each(function(){this.parentNode.firstChild.nodeName;var a=this.parentNode;
a.replaceChild(this.firstChild,this);a.normalize()}).end()};var p=function(){};p.prototype={on:function(a,b){this._events=this._events||{};this._events[a]=this._events[a]||[];this._events[a].push(b)},off:function(a,b){var d=arguments.length;if(0===d)return delete this._events;if(1===d)return delete this._events[a];this._events=this._events||{};!1!==a in this._events&&this._events[a].splice(this._events[a].indexOf(b),1)},trigger:function(a){this._events=this._events||{};if(!1!==a in this._events)for(var b=
0;b<this._events[a].length;b++)this._events[a][b].apply(this,Array.prototype.slice.call(arguments,1))}};p.mixin=function(a){for(var b=["on","off","trigger"],d=0;d<b.length;d++)a.prototype[b[d]]=p.prototype[b[d]]};var m=/Mac/.test(navigator.userAgent),x=m?91:17,n=m?18:17,f=!/android/i.test(window.navigator.userAgent)&&!!document.createElement("input").validity,w=function(a){return"undefined"===typeof a||null===a?null:"boolean"===typeof a?a?"1":"0":a+""},A=function(a){return(a+"").replace(/&/g,"&amp;").replace(/</g,
"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},k={before:function(a,b,d){var c=a[b];a[b]=function(){d.apply(a,arguments);return c.apply(a,arguments)}},after:function(a,b,d){var c=a[b];a[b]=function(){var b=c.apply(a,arguments);d.apply(a,arguments);return b}}},l=function(a){var b=!1;return function(){b||(b=!0,a.apply(this,arguments))}},H=function(a,b){var d;return function(){var c=this,h=arguments;window.clearTimeout(d);d=window.setTimeout(function(){a.apply(c,h)},b)}},v=function(a,b,d){var c,
h=a.trigger,C={};a.trigger=function(){var d=arguments[0];if(-1!==b.indexOf(d))C[d]=arguments;else return h.apply(a,arguments)};d.apply(a,[]);a.trigger=h;for(c in C)C.hasOwnProperty(c)&&h.apply(a,C[c])},t=function(a,b,d,c){a.on(b,d,function(b){for(var d=b.target;d&&d.parentNode!==a[0];)d=d.parentNode;b.currentTarget=d;return c.apply(this,[b])})},D=function(a){var b={};if("selectionStart"in a)b.start=a.selectionStart,b.length=a.selectionEnd-b.start;else if(document.selection){a.focus();var d=document.selection.createRange(),
c=document.selection.createRange().text.length;d.moveStart("character",-a.value.length);b.start=d.text.length-c;b.length=c}return b},G=function(a){var b=null,d=function(d,h){d=d||window.event||{};h=h||{};if(!d.metaKey&&!d.altKey&&(h.force||!1!==a.data("grow"))){var g=a.val();if(d.type&&"keydown"===d.type.toLowerCase()){var e=d.keyCode;var f=48<=e&&57>=e||65<=e&&90>=e||96<=e&&111>=e||186<=e&&222>=e||32===e;46===e||8===e?(f=D(a[0]),f.length?g=g.substring(0,f.start)+g.substring(f.start+f.length):8===
e&&f.start?g=g.substring(0,f.start-1)+g.substring(f.start+1):46===e&&"undefined"!==typeof f.start&&(g=g.substring(0,f.start)+g.substring(f.start+1))):f&&(e=d.shiftKey,f=String.fromCharCode(d.keyCode),f=e?f.toUpperCase():f.toLowerCase(),g+=f)}e=a.attr("placeholder");!g&&e&&(g=e);if(g){q.$testInput||(q.$testInput=c("<span />").css({position:"absolute",top:-99999,left:-99999,width:"auto",padding:0,whiteSpace:"pre"}).appendTo("body"));q.$testInput.text(g);g=q.$testInput;e=["letterSpacing","fontSize",
"fontFamily","fontWeight","textTransform"];var l,k={};if(e)for(f=0,l=e.length;f<l;f++)k[e[f]]=a.css(e[f]);else k=a.css();g.css(k);g=q.$testInput.width()}else g=0;g+=4;g!==b&&(b=g,a.width(g),a.triggerHandler("resize"))}};a.on("keydown keyup update blur",d);d()},E=function(a){var b=document.createElement("div");b.appendChild(a.cloneNode(!0));return b.innerHTML},I=function(a,b){b||(b={});console.error("Selectize: "+a);b.explanation&&(console.group&&console.group(),console.error(b.explanation),console.group&&
console.groupEnd())},q=function(a,b){var d=a[0];d.selectize=this;var g=(g=(g=window.getComputedStyle&&window.getComputedStyle(d,null))?g.getPropertyValue("direction"):d.currentStyle&&d.currentStyle.direction)||a.parents("[dir]:first").attr("dir")||"";c.extend(this,{order:0,settings:b,$input:a,tabIndex:a.attr("tabindex")||"",tagType:"select"===d.tagName.toLowerCase()?1:2,rtl:/rtl/i.test(g),eventNS:".selectize"+ ++q.count,highlightedValue:null,isBlurring:!1,isOpen:!1,isDisabled:!1,isRequired:a.is("[required]"),
isInvalid:!1,isLocked:!1,isFocused:!1,isInputHidden:!1,isSetup:!1,isShiftDown:!1,isCmdDown:!1,isCtrlDown:!1,ignoreFocus:!1,ignoreBlur:!1,ignoreHover:!1,hasOptions:!1,currentResults:null,lastValue:"",caretPos:0,loading:0,loadedSearches:{},$activeOption:null,$activeItems:[],optgroups:{},options:{},userOptions:{},items:[],renderCache:{},onSearchChange:null===b.loadThrottle?this.onSearchChange:H(this.onSearchChange,b.loadThrottle)});this.sifter=new e(this.options,{diacritics:b.diacritics});if(this.settings.options){d=
0;for(g=this.settings.options.length;d<g;d++)this.registerOption(this.settings.options[d]);delete this.settings.options}if(this.settings.optgroups){d=0;for(g=this.settings.optgroups.length;d<g;d++)this.registerOptionGroup(this.settings.optgroups[d]);delete this.settings.optgroups}this.settings.mode=this.settings.mode||(1===this.settings.maxItems?"single":"multi");"boolean"!==typeof this.settings.hideSelected&&(this.settings.hideSelected="multi"===this.settings.mode);this.initializePlugins(this.settings.plugins);
this.setupCallbacks();this.setupTemplates();this.setup()};p.mixin(q);"undefined"!==typeof u?u.mixin(q):I("Dependency MicroPlugin is missing",{explanation:'Make sure you either: (1) are using the "standalone" version of Selectize, or (2) require MicroPlugin before you load Selectize.'});c.extend(q.prototype,{setup:function(){var a=this,b=a.settings,d=a.eventNS,g=c(window),h=c(document),e=a.$input,l;var k=a.settings.mode;var B=e.attr("class")||"";var p=c("<div>").addClass(b.wrapperClass).addClass(B).addClass(k);
var q=c("<div>").addClass(b.inputClass).addClass("items").appendTo(p);var z=c('<input type="text" autocomplete="off" />').appendTo(q).attr("tabindex",e.is(":disabled")?"-1":a.tabIndex);var r=c(b.dropdownParent||p);r=c("<div>").addClass(b.dropdownClass).addClass(k).hide().appendTo(r);k=c("<div>").addClass(b.dropdownContentClass).appendTo(r);if(l=e.attr("id"))z.attr("id",l+"-selectized"),c("label[for='"+l+"']").attr("for",l+"-selectized");a.settings.copyClassesToDropdown&&r.addClass(B);p.css({width:e[0].style.width});
a.plugins.names.length&&(B="plugin-"+a.plugins.names.join(" plugin-"),p.addClass(B),r.addClass(B));(null===b.maxItems||1<b.maxItems)&&1===a.tagType&&e.attr("multiple","multiple");a.settings.placeholder&&z.attr("placeholder",b.placeholder);!a.settings.splitOn&&a.settings.delimiter&&(B=a.settings.delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),a.settings.splitOn=new RegExp("\\s*"+B+"+\\s*"));e.attr("autocorrect")&&z.attr("autocorrect",e.attr("autocorrect"));e.attr("autocapitalize")&&z.attr("autocapitalize",
e.attr("autocapitalize"));z[0].type=e[0].type;a.$wrapper=p;a.$control=q;a.$control_input=z;a.$dropdown=r;a.$dropdown_content=k;r.on("mouseenter mousedown click","[data-disabled]>[data-selectable]",function(a){a.stopImmediatePropagation()});r.on("mouseenter","[data-selectable]",function(){return a.onOptionHover.apply(a,arguments)});r.on("mousedown click","[data-selectable]",function(){return a.onOptionSelect.apply(a,arguments)});t(q,"mousedown","*:not(input)",function(){return a.onItemSelect.apply(a,
arguments)});G(z);q.on({mousedown:function(){return a.onMouseDown.apply(a,arguments)},click:function(){return a.onClick.apply(a,arguments)}});z.on({mousedown:function(a){a.stopPropagation()},keydown:function(){return a.onKeyDown.apply(a,arguments)},keyup:function(){return a.onKeyUp.apply(a,arguments)},keypress:function(){return a.onKeyPress.apply(a,arguments)},resize:function(){a.positionDropdown.apply(a,[])},blur:function(){return a.onBlur.apply(a,arguments)},focus:function(){a.ignoreBlur=!1;return a.onFocus.apply(a,
arguments)},paste:function(){return a.onPaste.apply(a,arguments)}});h.on("keydown"+d,function(b){a.isCmdDown=b[m?"metaKey":"ctrlKey"];a.isCtrlDown=b[m?"altKey":"ctrlKey"];a.isShiftDown=b.shiftKey});h.on("keyup"+d,function(b){b.keyCode===n&&(a.isCtrlDown=!1);16===b.keyCode&&(a.isShiftDown=!1);b.keyCode===x&&(a.isCmdDown=!1)});h.on("mousedown"+d,function(b){if(a.isFocused){if(b.target===a.$dropdown[0]||b.target.parentNode===a.$dropdown[0])return!1;a.$control.has(b.target).length||b.target===a.$control[0]||
a.blur(b.target)}});g.on(["scroll"+d,"resize"+d].join(" "),function(){a.isOpen&&a.positionDropdown.apply(a,arguments)});g.on("mousemove"+d,function(){a.ignoreHover=!1});this.revertSettings={$children:e.children().detach(),tabindex:e.attr("tabindex")};e.attr("tabindex",-1).hide().after(a.$wrapper);c.isArray(b.items)&&(a.setValue(b.items),delete b.items);if(f)e.on("invalid"+d,function(b){b.preventDefault();a.isInvalid=!0;a.refreshState()});a.updateOriginalInput();a.refreshItems();a.refreshState();a.updatePlaceholder();
a.isSetup=!0;e.is(":disabled")&&a.disable();a.on("change",this.onChange);e.data("selectize",a);e.addClass("selectized");a.trigger("initialize");if(!0===b.preload)a.onSearchChange("")},setupTemplates:function(){var a=this.settings.labelField,b=this.settings.optgroupLabelField;this.settings.render=c.extend({},{optgroup:function(a){return'<div class="optgroup">'+a.html+"</div>"},optgroup_header:function(a,c){return'<div class="optgroup-header">'+c(a[b])+"</div>"},option:function(b,c){return'<div class="option">'+
c(b[a])+"</div>"},item:function(b,c){return'<div class="item">'+c(b[a])+"</div>"},option_create:function(a,b){return'<div class="create">Add <strong>'+b(a.input)+"</strong>&hellip;</div>"}},this.settings.render)},setupCallbacks:function(){var a,b,d={initialize:"onInitialize",change:"onChange",item_add:"onItemAdd",item_remove:"onItemRemove",clear:"onClear",option_add:"onOptionAdd",option_remove:"onOptionRemove",option_clear:"onOptionClear",optgroup_add:"onOptionGroupAdd",optgroup_remove:"onOptionGroupRemove",
optgroup_clear:"onOptionGroupClear",dropdown_open:"onDropdownOpen",dropdown_close:"onDropdownClose",type:"onType",load:"onLoad",focus:"onFocus",blur:"onBlur"};for(a in d)if(d.hasOwnProperty(a)&&(b=this.settings[d[a]]))this.on(a,b)},onClick:function(a){this.isFocused&&this.isOpen||(this.focus(),a.preventDefault())},onMouseDown:function(a){var b=this,d=a.isDefaultPrevented();c(a.target);if(b.isFocused){if(a.target!==b.$control_input[0])return"single"===b.settings.mode?b.isOpen?b.close():b.open():d||
b.setActiveItem(null),!1}else d||window.setTimeout(function(){b.focus()},0)},onChange:function(){this.$input.trigger("change")},onPaste:function(a){var b=this;b.isFull()||b.isInputHidden||b.isLocked?a.preventDefault():b.settings.splitOn&&setTimeout(function(){var a=b.$control_input.val();if(a.match(b.settings.splitOn)){a=c.trim(a).split(b.settings.splitOn);for(var g=0,h=a.length;g<h;g++)b.createItem(a[g])}},0)},onKeyPress:function(a){if(this.isLocked)return a&&a.preventDefault();var b=String.fromCharCode(a.keyCode||
a.which);if(this.settings.create&&"multi"===this.settings.mode&&b===this.settings.delimiter)return this.open(),a.preventDefault(),!1},onKeyDown:function(a){if(this.isLocked)9!==a.keyCode&&a.preventDefault();else{switch(a.keyCode){case 65:if(this.isCmdDown){this.selectAll();return}break;case 27:this.isOpen&&(a.preventDefault(),a.stopPropagation());return;case 78:if(!a.ctrlKey||a.altKey)break;case 40:if(!this.isOpen&&this.hasOptions)this.open();else if(this.$activeOption){this.ignoreHover=!0;var b=
this.getAdjacentOption(this.$activeOption,1);b.length&&this.setActiveOption(b,!0,!0)}a.preventDefault();return;case 80:if(!a.ctrlKey||a.altKey)break;case 38:this.$activeOption&&(this.ignoreHover=!0,b=this.getAdjacentOption(this.$activeOption,-1),b.length&&this.setActiveOption(b,!0,!0));a.preventDefault();return;case 13:this.isOpen&&this.$activeOption&&(this.onOptionSelect({currentTarget:this.$activeOption}),a.preventDefault());return;case 37:this.advanceSelection(-1,a);return;case 39:this.advanceSelection(1,
a);return;case 9:this.settings.selectOnTab&&this.isOpen&&this.$activeOption&&(this.onOptionSelect({currentTarget:this.$activeOption}),this.isFull()||a.preventDefault());this.settings.create&&this.createItem()&&a.preventDefault();return;case 8:case 46:this.deleteSelection(a);return}!this.isFull()&&!this.isInputHidden||(m?a.metaKey:a.ctrlKey)||a.preventDefault()}},onKeyUp:function(a){if(this.isLocked)return a&&a.preventDefault();a=this.$control_input.val()||"";this.lastValue!==a&&(this.lastValue=a,
this.onSearchChange(a),this.refreshOptions(),this.trigger("type",a))},onSearchChange:function(a){var b=this,d=b.settings.load;d&&!b.loadedSearches.hasOwnProperty(a)&&(b.loadedSearches[a]=!0,b.load(function(c){d.apply(b,[a,c])}))},onFocus:function(a){var b=this.isFocused;if(this.isDisabled)return this.blur(),a&&a.preventDefault(),!1;if(!this.ignoreFocus){this.isFocused=!0;if("focus"===this.settings.preload)this.onSearchChange("");b||this.trigger("focus");this.$activeItems.length||(this.showInput(),
this.setActiveItem(null),this.refreshOptions(!!this.settings.openOnFocus));this.refreshState()}},onBlur:function(a,b){var d=this;if(d.isFocused&&(d.isFocused=!1,!d.ignoreFocus))if(d.ignoreBlur||document.activeElement!==d.$dropdown_content[0]){var c=function(){d.close();d.setTextboxValue("");d.setActiveItem(null);d.setActiveOption(null);d.setCaret(d.items.length);d.refreshState();b&&b.focus&&b.focus();d.isBlurring=!1;d.ignoreFocus=!1;d.trigger("blur")};d.isBlurring=!0;d.ignoreFocus=!0;d.settings.create&&
d.settings.createOnBlur?d.createItem(null,!1,c):c()}else d.ignoreBlur=!0,d.onFocus(a)},onOptionHover:function(a){this.ignoreHover||this.setActiveOption(a.currentTarget,!1)},onOptionSelect:function(a){var b=this;a.preventDefault&&(a.preventDefault(),a.stopPropagation());var d=c(a.currentTarget);d.hasClass("create")?b.createItem(null,function(){b.settings.closeAfterSelect&&b.close()}):(d=d.attr("data-value"),"undefined"!==typeof d&&(b.lastQuery=null,b.setTextboxValue(""),b.addItem(d),b.settings.closeAfterSelect?
b.close():!b.settings.hideSelected&&a.type&&/mouse/.test(a.type)&&b.setActiveOption(b.getOption(d))))},onItemSelect:function(a){this.isLocked||"multi"!==this.settings.mode||(a.preventDefault(),this.setActiveItem(a.currentTarget,a))},load:function(a){var b=this,c=b.$wrapper.addClass(b.settings.loadingClass);b.loading++;a.apply(b,[function(a){b.loading=Math.max(b.loading-1,0);a&&a.length&&(b.addOption(a),b.refreshOptions(b.isFocused&&!b.isInputHidden));b.loading||c.removeClass(b.settings.loadingClass);
b.trigger("load",a)}])},setTextboxValue:function(a){var b=this.$control_input;b.val()!==a&&(b.val(a).triggerHandler("update"),this.lastValue=a)},getValue:function(){return 1===this.tagType&&this.$input.attr("multiple")?this.items:this.items.join(this.settings.delimiter)},setValue:function(a,b){v(this,b?[]:["change"],function(){this.clear(b);this.addItems(a,b)})},setActiveItem:function(a,b){if("single"!==this.settings.mode)if(a=c(a),a.length){var d=b&&b.type.toLowerCase();if("mousedown"===d&&this.isShiftDown&&
this.$activeItems.length){d=this.$control.children(".active:last");var g=Array.prototype.indexOf.apply(this.$control[0].childNodes,[d[0]]);d=Array.prototype.indexOf.apply(this.$control[0].childNodes,[a[0]]);if(g>d){var h=g;g=d;d=h}for(;g<=d;g++)h=this.$control[0].childNodes[g],-1===this.$activeItems.indexOf(h)&&(c(h).addClass("active"),this.$activeItems.push(h));b.preventDefault()}else"mousedown"===d&&this.isCtrlDown||"keydown"===d&&this.isShiftDown?a.hasClass("active")?(d=this.$activeItems.indexOf(a[0]),
this.$activeItems.splice(d,1),a.removeClass("active")):this.$activeItems.push(a.addClass("active")[0]):(c(this.$activeItems).removeClass("active"),this.$activeItems=[a.addClass("active")[0]]);this.hideInput();this.isFocused||this.focus()}else c(this.$activeItems).removeClass("active"),this.$activeItems=[],this.isFocused&&this.showInput()},setActiveOption:function(a,b,d){this.$activeOption&&this.$activeOption.removeClass("active");this.$activeOption=null;a=c(a);if(a.length&&(this.$activeOption=a.addClass("active"),
b||"undefined"===typeof b)){a=this.$dropdown_content.height();var g=this.$activeOption.outerHeight(!0);b=this.$dropdown_content.scrollTop()||0;var h=this.$activeOption.offset().top-this.$dropdown_content.offset().top+b;var e=h-a+g;h+g>a+b?this.$dropdown_content.stop().animate({scrollTop:e},d?this.settings.scrollDuration:0):h<b&&this.$dropdown_content.stop().animate({scrollTop:h},d?this.settings.scrollDuration:0)}},selectAll:function(){"single"!==this.settings.mode&&(this.$activeItems=Array.prototype.slice.apply(this.$control.children(":not(input)").addClass("active")),
this.$activeItems.length&&(this.hideInput(),this.close()),this.focus())},hideInput:function(){this.setTextboxValue("");this.$control_input.css({opacity:0,position:"absolute",left:this.rtl?1E4:-1E4});this.isInputHidden=!0},showInput:function(){this.$control_input.css({opacity:1,position:"relative",left:0});this.isInputHidden=!1},focus:function(){var a=this;a.isDisabled||(a.ignoreFocus=!0,a.$control_input[0].focus(),window.setTimeout(function(){a.ignoreFocus=!1;a.onFocus()},0))},blur:function(a){this.$control_input[0].blur();
this.onBlur(null,a)},getScoreFunction:function(a){return this.sifter.getScoreFunction(a,this.getSearchOptions())},getSearchOptions:function(){var a=this.settings,b=a.sortField;"string"===typeof b&&(b=[{field:b}]);return{fields:a.searchField,conjunction:a.searchConjunction,sort:b,nesting:a.nesting}},search:function(a){var b=this.settings;var d=this.getSearchOptions();if(b.score){var g=this.settings.score.apply(this,[a]);if("function"!==typeof g)throw Error('Selectize "score" setting must be a function that returns a function');
}a!==this.lastQuery?(this.lastQuery=a,this.currentResults=a=this.sifter.search(a,c.extend(d,{score:g}))):a=c.extend(!0,{},this.currentResults);if(b.hideSelected)for(b=a.items.length-1;0<=b;b--)-1!==this.items.indexOf(w(a.items[b].id))&&a.items.splice(b,1);return a},refreshOptions:function(a){var b,d,g;"undefined"===typeof a&&(a=!0);var h=this;var e=c.trim(h.$control_input.val());var f=h.search(e),l=h.$dropdown_content,k=h.$activeOption&&w(h.$activeOption.attr("data-value"));var n=f.items.length;"number"===
typeof h.settings.maxOptions&&(n=Math.min(n,h.settings.maxOptions));var m={};var p=[];for(b=0;b<n;b++){var r=h.options[f.items[b].id];var q=h.render("option",r);r=r[h.settings.optgroupField]||"";var u=c.isArray(r)?r:[r];var t=0;for(d=u&&u.length;t<d;t++)r=u[t],h.optgroups.hasOwnProperty(r)||(r=""),m.hasOwnProperty(r)||(m[r]=document.createDocumentFragment(),p.push(r)),m[r].appendChild(q)}this.settings.lockOptgroupOrder&&p.sort(function(a,b){return(h.optgroups[a].$order||0)-(h.optgroups[b].$order||
0)});q=document.createDocumentFragment();b=0;for(n=p.length;b<n;b++)r=p[b],h.optgroups.hasOwnProperty(r)&&m[r].childNodes.length?(t=document.createDocumentFragment(),t.appendChild(h.render("optgroup_header",h.optgroups[r])),t.appendChild(m[r]),q.appendChild(h.render("optgroup",c.extend({},h.optgroups[r],{html:E(t),dom:t})))):q.appendChild(m[r]);l.html(q);if(h.settings.highlight&&(l.removeHighlight(),f.query.length&&f.tokens.length))for(b=0,n=f.tokens.length;b<n;b++)y(l,f.tokens[b].regex);if(!h.settings.hideSelected)for(b=
0,n=h.items.length;b<n;b++)h.getOption(h.items[b]).addClass("selected");if(b=h.canCreate(e)){l.prepend(h.render("option_create",{input:e}));var v=c(l[0].childNodes[0])}h.hasOptions=0<f.items.length||b;h.hasOptions?(0<f.items.length?((e=k&&h.getOption(k))&&e.length?g=e:"single"===h.settings.mode&&h.items.length&&(g=h.getOption(h.items[0])),g&&g.length||(g=v&&!h.settings.addPrecedence?h.getAdjacentOption(v,1):l.find("[data-selectable]:first"))):g=v,h.setActiveOption(g),a&&!h.isOpen&&h.open()):(h.setActiveOption(null),
a&&h.isOpen&&h.close())},addOption:function(a){var b;if(c.isArray(a)){var d=0;for(b=a.length;d<b;d++)this.addOption(a[d])}else if(d=this.registerOption(a))this.userOptions[d]=!0,this.lastQuery=null,this.trigger("option_add",d,a)},registerOption:function(a){var b=w(a[this.settings.valueField]);if("undefined"===typeof b||null===b||this.options.hasOwnProperty(b))return!1;a.$order=a.$order||++this.order;this.options[b]=a;return b},registerOptionGroup:function(a){var b=w(a[this.settings.optgroupValueField]);
if(!b)return!1;a.$order=a.$order||++this.order;this.optgroups[b]=a;return b},addOptionGroup:function(a,b){b[this.settings.optgroupValueField]=a;(a=this.registerOptionGroup(b))&&this.trigger("optgroup_add",a,b)},removeOptionGroup:function(a){this.optgroups.hasOwnProperty(a)&&(delete this.optgroups[a],this.renderCache={},this.trigger("optgroup_remove",a))},clearOptionGroups:function(){this.optgroups={};this.renderCache={};this.trigger("optgroup_clear")},updateOption:function(a,b){a=w(a);var d=w(b[this.settings.valueField]);
if(null!==a&&this.options.hasOwnProperty(a)){if("string"!==typeof d)throw Error("Value must be set in option data");var g=this.options[a].$order;if(d!==a){delete this.options[a];var h=this.items.indexOf(a);-1!==h&&this.items.splice(h,1,d)}b.$order=b.$order||g;this.options[d]=b;h=this.renderCache.item;g=this.renderCache.option;h&&(delete h[a],delete h[d]);g&&(delete g[a],delete g[d]);-1!==this.items.indexOf(d)&&(d=this.getItem(a),h=c(this.render("item",b)),d.hasClass("active")&&h.addClass("active"),
d.replaceWith(h));this.lastQuery=null;this.isOpen&&this.refreshOptions(!1)}},removeOption:function(a,b){a=w(a);var c=this.renderCache.item,g=this.renderCache.option;c&&delete c[a];g&&delete g[a];delete this.userOptions[a];delete this.options[a];this.lastQuery=null;this.trigger("option_remove",a);this.removeItem(a,b)},clearOptions:function(){var a=this;a.loadedSearches={};a.userOptions={};a.renderCache={};var b=a.options;c.each(a.options,function(c,g){-1==a.items.indexOf(c)&&delete b[c]});a.options=
a.sifter.items=b;a.lastQuery=null;a.trigger("option_clear")},getOption:function(a){return this.getElementWithValue(a,this.$dropdown_content.find("[data-selectable]"))},getAdjacentOption:function(a,b){var d=this.$dropdown.find("[data-selectable]"),g=d.index(a)+b;return 0<=g&&g<d.length?d.eq(g):c()},getElementWithValue:function(a,b){a=w(a);if("undefined"!==typeof a&&null!==a)for(var d=0,g=b.length;d<g;d++)if(b[d].getAttribute("data-value")===a)return c(b[d]);return c()},getItem:function(a){return this.getElementWithValue(a,
this.$control.children())},addItems:function(a,b){this.buffer=document.createDocumentFragment();for(var d=this.$control[0].childNodes,g=0;g<d.length;g++)this.buffer.appendChild(d[g]);d=c.isArray(a)?a:[a];g=0;for(var h=d.length;g<h;g++)this.isPending=g<h-1,this.addItem(d[g],b);g=this.$control[0];g.insertBefore(this.buffer,g.firstChild);this.buffer=null},addItem:function(a,b){v(this,b?[]:["change"],function(){var d=this.settings.mode;a=w(a);if(-1!==this.items.indexOf(a))"single"===d&&this.close();else if(this.options.hasOwnProperty(a)&&
("single"===d&&this.clear(b),"multi"!==d||!this.isFull())){var g=c(this.render("item",this.options[a]));var h=this.isFull();this.items.splice(this.caretPos,0,a);this.insertAtCaret(g);(!this.isPending||!h&&this.isFull())&&this.refreshState();if(this.isSetup){h=this.$dropdown_content.find("[data-selectable]");if(!this.isPending){var e=this.getOption(a);e=this.getAdjacentOption(e,1).attr("data-value");this.refreshOptions(this.isFocused&&"single"!==d);e&&this.setActiveOption(this.getOption(e))}!h.length||
this.isFull()?this.close():this.isPending||this.positionDropdown();this.updatePlaceholder();this.trigger("item_add",a,g);this.isPending||this.updateOriginalInput({silent:b})}}})},removeItem:function(a,b){var d=a instanceof c?a:this.getItem(a);a=w(d.attr("data-value"));var g=this.items.indexOf(a);if(-1!==g){d.remove();if(d.hasClass("active")){var e=this.$activeItems.indexOf(d[0]);this.$activeItems.splice(e,1)}this.items.splice(g,1);this.lastQuery=null;!this.settings.persist&&this.userOptions.hasOwnProperty(a)&&
this.removeOption(a,b);g<this.caretPos&&this.setCaret(this.caretPos-1);this.refreshState();this.updatePlaceholder();this.updateOriginalInput({silent:b});this.positionDropdown();this.trigger("item_remove",a,d)}},createItem:function(a,b){var d=this,g=d.caretPos;a=a||c.trim(d.$control_input.val()||"");var e=arguments[arguments.length-1];"function"!==typeof e&&(e=function(){});"boolean"!==typeof b&&(b=!0);if(!d.canCreate(a))return e(),!1;d.lock();var f="function"===typeof d.settings.create?this.settings.create:
function(a){var b={};b[d.settings.labelField]=a;b[d.settings.valueField]=a;return b},k=l(function(a){d.unlock();if(!a||"object"!==typeof a)return e();var c=w(a[d.settings.valueField]);if("string"!==typeof c)return e();d.setTextboxValue("");d.addOption(a);d.setCaret(g);d.addItem(c);d.refreshOptions(b&&"single"!==d.settings.mode);e(a)});f=f.apply(this,[a,k]);"undefined"!==typeof f&&k(f);return!0},refreshItems:function(){this.lastQuery=null;this.isSetup&&this.addItem(this.items);this.refreshState();
this.updateOriginalInput()},refreshState:function(){this.refreshValidityState();this.refreshClasses()},refreshValidityState:function(){if(!this.isRequired)return!1;var a=!this.items.length;this.isInvalid=a;this.$control_input.prop("required",a);this.$input.prop("required",!a)},refreshClasses:function(){var a=this.isFull(),b=this.isLocked;this.$wrapper.toggleClass("rtl",this.rtl);this.$control.toggleClass("focus",this.isFocused).toggleClass("disabled",this.isDisabled).toggleClass("required",this.isRequired).toggleClass("invalid",
this.isInvalid).toggleClass("locked",b).toggleClass("full",a).toggleClass("not-full",!a).toggleClass("input-active",this.isFocused&&!this.isInputHidden).toggleClass("dropdown-active",this.isOpen).toggleClass("has-options",!c.isEmptyObject(this.options)).toggleClass("has-items",0<this.items.length);this.$control_input.data("grow",!a&&!b)},isFull:function(){return null!==this.settings.maxItems&&this.items.length>=this.settings.maxItems},updateOriginalInput:function(a){var b;a=a||{};if(1===this.tagType){var c=
[];var g=0;for(b=this.items.length;g<b;g++){var e=this.options[this.items[g]][this.settings.labelField]||"";c.push('<option value="'+A(this.items[g])+'" selected="selected">'+A(e)+"</option>")}c.length||this.$input.attr("multiple")||c.push('<option value="" selected="selected"></option>');this.$input.html(c.join(""))}else this.$input.val(this.getValue()),this.$input.attr("value",this.$input.val());this.isSetup&&(a.silent||this.trigger("change",this.$input.val()))},updatePlaceholder:function(){if(this.settings.placeholder){var a=
this.$control_input;this.items.length?a.removeAttr("placeholder"):a.attr("placeholder",this.settings.placeholder);a.triggerHandler("update",{force:!0})}},open:function(){this.isLocked||this.isOpen||"multi"===this.settings.mode&&this.isFull()||(this.focus(),this.isOpen=!0,this.refreshState(),this.$dropdown.css({visibility:"hidden",display:"block"}),this.positionDropdown(),this.$dropdown.css({visibility:"visible"}),this.trigger("dropdown_open",this.$dropdown))},close:function(){var a=this.isOpen;"single"===
this.settings.mode&&this.items.length&&(this.hideInput(),this.isBlurring||this.$control_input.blur());this.isOpen=!1;this.$dropdown.hide();this.setActiveOption(null);this.refreshState();a&&this.trigger("dropdown_close",this.$dropdown)},positionDropdown:function(){var a=this.$control,b="body"===this.settings.dropdownParent?a.offset():a.position();b.top+=a.outerHeight(!0);this.$dropdown.css({width:a[0].getBoundingClientRect().width,top:b.top,left:b.left})},clear:function(a){this.items.length&&(this.$control.children(":not(input)").remove(),
this.items=[],this.lastQuery=null,this.setCaret(0),this.setActiveItem(null),this.updatePlaceholder(),this.updateOriginalInput({silent:a}),this.refreshState(),this.showInput(),this.trigger("clear"))},insertAtCaret:function(a){var b=Math.min(this.caretPos,this.items.length);a=a[0];var c=this.buffer||this.$control[0];0===b?c.insertBefore(a,c.firstChild):c.insertBefore(a,c.childNodes[b]);this.setCaret(b+1)},deleteSelection:function(a){var b;var d=a&&8===a.keyCode?-1:1;var g=D(this.$control_input[0]);
this.$activeOption&&!this.settings.hideSelected&&(b=this.getAdjacentOption(this.$activeOption,-1).attr("data-value"));var e=[];if(this.$activeItems.length){var f=this.$control.children(".active:"+(0<d?"last":"first"));f=this.$control.children(":not(input)").index(f);0<d&&f++;d=0;for(g=this.$activeItems.length;d<g;d++)e.push(c(this.$activeItems[d]).attr("data-value"));a&&(a.preventDefault(),a.stopPropagation())}else(this.isFocused||"single"===this.settings.mode)&&this.items.length&&(0>d&&0===g.start&&
0===g.length?e.push(this.items[this.caretPos-1]):0<d&&g.start===this.$control_input.val().length&&e.push(this.items[this.caretPos]));if(!e.length||"function"===typeof this.settings.onDelete&&!1===this.settings.onDelete.apply(this,[e]))return!1;for("undefined"!==typeof f&&this.setCaret(f);e.length;)this.removeItem(e.pop());this.showInput();this.positionDropdown();this.refreshOptions(!0);b&&(a=this.getOption(b),a.length&&this.setActiveOption(a));return!0},advanceSelection:function(a,b){if(0!==a){this.rtl&&
(a*=-1);var c=0<a?"last":"first";var g=D(this.$control_input[0]);this.isFocused&&!this.isInputHidden?(c=this.$control_input.val().length,(g=0>a?0===g.start&&0===g.length:g.start===c)&&!c&&this.advanceCaret(a,b)):(g=this.$control.children(".active:"+c),g.length&&(g=this.$control.children(":not(input)").index(g),this.setActiveItem(null),this.setCaret(0<a?g+1:g)))}},advanceCaret:function(a,b){if(0!==a){var c=0<a?"next":"prev";this.isShiftDown?(c=this.$control_input[c](),c.length&&(this.hideInput(),this.setActiveItem(c),
b&&b.preventDefault())):this.setCaret(this.caretPos+a)}},setCaret:function(a){a="single"===this.settings.mode?this.items.length:Math.max(0,Math.min(this.items.length,a));if(!this.isPending){var b;var d=this.$control.children(":not(input)");var g=0;for(b=d.length;g<b;g++){var e=c(d[g]).detach();g<a?this.$control_input.before(e):this.$control.append(e)}}this.caretPos=a},lock:function(){this.close();this.isLocked=!0;this.refreshState()},unlock:function(){this.isLocked=!1;this.refreshState()},disable:function(){this.$input.prop("disabled",
!0);this.$control_input.prop("disabled",!0).prop("tabindex",-1);this.isDisabled=!0;this.lock()},enable:function(){this.$input.prop("disabled",!1);this.$control_input.prop("disabled",!1).prop("tabindex",this.tabIndex);this.isDisabled=!1;this.unlock()},destroy:function(){var a=this.eventNS,b=this.revertSettings;this.trigger("destroy");this.off();this.$wrapper.remove();this.$dropdown.remove();this.$input.html("").append(b.$children).removeAttr("tabindex").removeClass("selectized").attr({tabindex:b.tabindex}).show();
this.$control_input.removeData("grow");this.$input.removeData("selectize");0==--q.count&&q.$testInput&&(q.$testInput.remove(),q.$testInput=void 0);c(window).off(a);c(document).off(a);c(document.body).off(a);delete this.$input[0].selectize},render:function(a,b){var d=!1;if("option"===a||"item"===a){var e=w(b[this.settings.valueField]);d=!!e}if(d&&("undefined"===typeof this.renderCache[a]&&(this.renderCache[a]={}),this.renderCache[a].hasOwnProperty(e)))return this.renderCache[a][e];var h=c(this.settings.render[a].apply(this,
[b,A]));if("option"===a||"option_create"===a)b[this.settings.disabledField]||h.attr("data-selectable","");else if("optgroup"===a){var f=b[this.settings.optgroupValueField]||"";h.attr("data-group",f);b[this.settings.disabledField]&&h.attr("data-disabled","")}"option"!==a&&"item"!==a||h.attr("data-value",e||"");d&&(this.renderCache[a][e]=h[0]);return h[0]},clearCache:function(a){"undefined"===typeof a?this.renderCache={}:delete this.renderCache[a]},canCreate:function(a){if(!this.settings.create)return!1;
var b=this.settings.createFilter;return a.length&&("function"!==typeof b||b.apply(this,[a]))&&("string"!==typeof b||(new RegExp(b)).test(a))&&(!(b instanceof RegExp)||b.test(a))}});q.count=0;q.defaults={options:[],optgroups:[],plugins:[],delimiter:",",splitOn:null,persist:!0,diacritics:!0,create:!1,createOnBlur:!1,createFilter:null,highlight:!0,openOnFocus:!0,maxOptions:1E3,maxItems:null,hideSelected:null,addPrecedence:!1,selectOnTab:!1,preload:!1,allowEmptyOption:!1,closeAfterSelect:!1,scrollDuration:60,
loadThrottle:300,loadingClass:"loading",dataAttr:"data-data",optgroupField:"optgroup",valueField:"value",labelField:"text",disabledField:"disabled",optgroupLabelField:"label",optgroupValueField:"value",lockOptgroupOrder:!1,sortField:"$order",searchField:["text"],searchConjunction:"and",mode:null,wrapperClass:"selectize-control",inputClass:"selectize-input",dropdownClass:"selectize-dropdown",dropdownContentClass:"selectize-dropdown-content",dropdownParent:null,copyClassesToDropdown:!0,render:{}};c.fn.selectize=
function(a){var b=c.fn.selectize.defaults,d=c.extend({},b,a),e=d.dataAttr,f=d.labelField,l=d.valueField,k=d.disabledField,n=d.optgroupField,m=d.optgroupLabelField,p=d.optgroupValueField,t=function(a,b){var g,h=b.options,r={},q=function(a){a=e&&a.attr(e);return"string"===typeof a&&a.length?JSON.parse(a):null},F=function(a,e){a=c(a);var g=w(a.val());if(g||d.allowEmptyOption)if(r.hasOwnProperty(g)){if(e){var m=r[g][n];m?c.isArray(m)?m.push(e):r[g][n]=[m,e]:r[g][n]=e}}else m=q(a)||{},m[f]=m[f]||a.text(),
m[l]=m[l]||g,m[k]=m[k]||a.prop("disabled"),m[n]=m[n]||e,r[g]=m,h.push(m),a.is(":selected")&&b.items.push(g)},C=function(a){var d;a=c(a);if(d=a.attr("label")){var e=q(a)||{};e[m]=d;e[p]=d;e[k]=a.prop("disabled");b.optgroups.push(e)}var g=c("option",a);a=0;for(e=g.length;a<e;a++)F(g[a],d)};b.maxItems=a.attr("multiple")?null:1;var t=a.children();var u=0;for(g=t.length;u<g;u++){var v=t[u].tagName.toLowerCase();"optgroup"===v?C(t[u]):"option"===v&&F(t[u])}};return this.each(function(){if(!this.selectize){var g=
c(this),h=this.tagName.toLowerCase(),k=g.attr("placeholder")||g.attr("data-placeholder");k||d.allowEmptyOption||(k=g.children('option[value=""]').text());k={placeholder:k,options:[],optgroups:[],items:[]};if("select"===h)t(g,k);else{var m;if(h=g.attr(e))for(k.options=JSON.parse(h),h=0,m=k.options.length;h<m;h++)k.items.push(k.options[h][l]);else if(h=c.trim(g.val()||""),d.allowEmptyOption||h.length){var n=h.split(d.delimiter);h=0;for(m=n.length;h<m;h++){var p={};p[f]=n[h];p[l]=n[h];k.options.push(p)}k.items=
n}}new q(g,c.extend(!0,{},b,k,a))}})};c.fn.selectize.defaults=q.defaults;c.fn.selectize.support={validity:f};q.define("drag_drop",function(a){if(!c.fn.sortable)throw Error('The "drag_drop" plugin requires jQuery UI "sortable".');if("multi"===this.settings.mode){var b=this;b.lock=function(){var a=b.lock;return function(){var c=b.$control.data("sortable");c&&c.disable();return a.apply(b,arguments)}}();b.unlock=function(){var a=b.unlock;return function(){var c=b.$control.data("sortable");c&&c.enable();
return a.apply(b,arguments)}}();b.setup=function(){var a=b.setup;return function(){a.apply(this,arguments);var d=b.$control.sortable({items:"[data-value]",forcePlaceholderSize:!0,disabled:b.isLocked,start:function(a,b){b.placeholder.css("width",b.helper.css("width"));d.css({overflow:"visible"})},stop:function(){d.css({overflow:"hidden"});var a=b.$activeItems?b.$activeItems.slice():null,e=[];d.children("[data-value]").each(function(){e.push(c(this).attr("data-value"))});b.setValue(e);b.setActiveItem(a)}})}}()}});
q.define("dropdown_header",function(a){var b=this;a=c.extend({title:"Untitled",headerClass:"selectize-dropdown-header",titleRowClass:"selectize-dropdown-header-title",labelClass:"selectize-dropdown-header-label",closeClass:"selectize-dropdown-header-close",html:function(a){return'<div class="'+a.headerClass+'"><div class="'+a.titleRowClass+'"><span class="'+a.labelClass+'">'+a.title+'</span><a href="javascript:void(0)" class="'+a.closeClass+'">&times;</a></div></div>'}},a);b.setup=function(){var d=
b.setup;return function(){d.apply(b,arguments);b.$dropdown_header=c(a.html(a));b.$dropdown.prepend(b.$dropdown_header)}}()});q.define("optgroup_columns",function(a){var b=this;a=c.extend({equalizeWidth:!0,equalizeHeight:!0},a);this.getAdjacentOption=function(a,b){var d=a.closest("[data-group]").find("[data-selectable]"),e=d.index(a)+b;return 0<=e&&e<d.length?d.eq(e):c()};this.onKeyDown=function(){var a=b.onKeyDown;return function(c){if(!this.isOpen||37!==c.keyCode&&39!==c.keyCode)return a.apply(this,
arguments);b.ignoreHover=!0;var d=this.$activeOption.closest("[data-group]");var e=d.find("[data-selectable]").index(this.$activeOption);d=37===c.keyCode?d.prev("[data-group]"):d.next("[data-group]");d=d.find("[data-selectable]");e=d.eq(Math.min(d.length-1,e));e.length&&this.setActiveOption(e)}}();var d=function(){var a=d.width,b=document;if("undefined"===typeof a){var c=b.createElement("div");c.innerHTML='<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>';
c=c.firstChild;b.body.appendChild(c);a=d.width=c.offsetWidth-c.clientWidth;b.body.removeChild(c)}return a},e=function(){var e,g,f;var l=c("[data-group]",b.$dropdown_content);if((g=l.length)&&b.$dropdown_content.width()){if(a.equalizeHeight){for(e=f=0;e<g;e++)f=Math.max(f,l.eq(e).height());l.css({height:f})}a.equalizeWidth&&(f=b.$dropdown_content.innerWidth()-d(),e=Math.round(f/g),l.css({width:e}),1<g&&(e=f-e*(g-1),l.eq(g-1).css({width:e})))}};if(a.equalizeHeight||a.equalizeWidth)k.after(this,"positionDropdown",
e),k.after(this,"refreshOptions",e)});q.define("remove_button",function(a){a=c.extend({label:"&times;",title:"Remove",className:"remove",append:!0},a);var b=function(a,b){b.className="remove-single";var d='<a href="javascript:void(0)" class="'+b.className+'" tabindex="-1" title="'+A(b.title)+'">'+b.label+"</a>";a.setup=function(){var e=a.setup;return function(){if(b.append){var g=c(a.$input.context).attr("id");c("#"+g);var f=a.settings.render.item;a.settings.render.item=function(b){var e=f.apply(a,
arguments);return c("<span>").append(e).append(d)}}e.apply(a,arguments);a.$control.on("click","."+b.className,function(b){b.preventDefault();a.isLocked||a.clear()})}}()},d=function(a,b){var d='<a href="javascript:void(0)" class="'+b.className+'" tabindex="-1" title="'+A(b.title)+'">'+b.label+"</a>";a.setup=function(){var e=a.setup;return function(){if(b.append){var g=a.settings.render.item;a.settings.render.item=function(b){var c=g.apply(a,arguments),e=c.search(/(<\/[^>]+>\s*)$/);return c.substring(0,
e)+d+c.substring(e)}}e.apply(a,arguments);a.$control.on("click","."+b.className,function(b){b.preventDefault();a.isLocked||(b=c(b.currentTarget).parent(),a.setActiveItem(b),a.deleteSelection()&&a.setCaret(a.items.length))})}}()};"single"===this.settings.mode?b(this,a):d(this,a)});q.define("restore_on_backspace",function(a){var b=this;a.text=a.text||function(a){return a[this.settings.labelField]};this.onKeyDown=function(){var c=b.onKeyDown;return function(b){if(8===b.keyCode&&""===this.$control_input.val()&&
!this.$activeItems.length){var d=this.caretPos-1;if(0<=d&&d<this.items.length){d=this.options[this.items[d]];this.deleteSelection(b)&&(this.setTextboxValue(a.text.apply(this,[d])),this.refreshOptions(!0));b.preventDefault();return}}return c.apply(this,arguments)}}()});return q});

// form2wizard

(function(c){c.fn.formToWizard=function(e,u){function y(){e=c(n).data("options");k={GotoStep:function(e){var f="step"+--e;if(void 0===c("#"+f)[0])throw"Step No "+e+" not found!";"none"===c("#"+f).css("display")&&(c(n).find(".stepDetails").slideUp(),c("#"+f).slideDown("slow"),x(e))},NextStep:function(){c(".stepDetails:visible").find("a.next").click()},PreviousStep:function(){c(".stepDetails:visible").find("a.prev").click()}}}function p(f){var l="step"+f;c("#"+l+"commands").append("<"+e.buttonTag+' href="#" class="'+
l+'Prev pref">'+e.prevBtnName+"</"+e.buttonTag+">");c("."+l+"Prev").on("click",function(e){c("#"+l).slideUp();c("#step"+(f-1)).slideDown("slow");x(f-1);return!1})}
function m(f){var l="step"+f;c("#"+l+"commands").append("<"+e.buttonTag+' tabindex="0" href="#" class="'+l+'Next next">'+e.nextBtnName+"</"+e.buttonTag+">");c("."+l+"Next").on("click",function(k){!0===e.validateBeforeNext(n,c("#"+l))&&(c("#"+l).slideUp(),c("#step"+(f+1)).slideDown("slow"),x(f+1));return!1})}
function x(f){"function"===typeof e.progress?e.progress(f,w):e.showProgress&&(c("#steps li").removeClass("current"),c("#stepDesc"+f).addClass("current"));e.select&&e.select(n,c("#step"+f))}
if(0==this.length)return this;"string"!==typeof e&&(e=c.extend({submitButton:"SaveProject",showProgress:!0,showStepNo:!0,validateBeforeNext:!0,select:null,progress:!0,nextBtnName:"Next <svg class='vanxt'><use href='s.svg#arr_r'></use></svg>",prevBtnName:"<svg><use href='s.svg#arr_l'></use></svg>Back",buttonTag:"a",nextBtnClass:"btn next",prevBtnClass:"btn prev",GotoStep:"2"},e));var n=this,f=c(n).find("fieldset"),w=f.length,A="#"+e.submitButton,k=null;c(".wizcount").text(w-1);if("string"!==typeof e)c(n).data("options",e),"function"!==typeof e.validateBeforeNext&&(e.validateBeforeNext=function(){return!0}),e.showProgress&&"function"!==typeof e.progress&&(e.showStepNo?c(n).before("<ul id='steps' class='steps'></ul>"):c(n).before("<ul id='steps' class='steps breadcrumb'></ul>")),f.each(function(f){c(this).wrap('<div id="step'+f+'" class="stepDetails"></div>');c(this).append('<p id="step'+f+'commands" class="commands"></p>');e.showProgress&&"function"!==typeof e.progress&&(e.showStepNo?c("#steps").append("<li id='stepDesc"+f+"'>Step "+(f+1)+"<span>"+c(this).find("legend").html()+"</span></li>"):c("#steps").append("<li id='stepDesc"+f+"'>"+c(this).find("legend").html()+"</li>"));0==f?(m(f),x(f)):f==w-1?(c("#step"+f).hide(),p(f),c(A).addClass("next").detach().appendTo("#step"+f+"commands")):(c("#step"+f).hide(),p(f),m(f))});else if("string"===typeof e)if(f=e,y(),"function"===typeof k[f])k[f](u);else throw f+" is invalid command!";return this}})(jQuery);
// Ends selectize and formtowizard compiled



$(function() {
	
	// get expertises
	$.ajax({
	  url: 'get_competencies',
	  type: 'GET',
	  dataType: 'json',
	
	  success: function(options) {
		$('#pickcompetencies').selectize({
		    valueField: 'id',
		    labelField: 'competencies',
		    searchField:'competencies',
			options: options,
			preload: true,
			maxItems: 3,
		    plugins: ['remove_button'],
	    });
	    }
	});
	
	
	// get  sector
	$.ajax({
	url: 'get_sectors',
	type: 'GET',
	dataType: 'json',
	
	success: function(options) {
	$('#sectors').selectize({
	    valueField: 'sectorid',
	    labelField: 'sector',
	    searchField:'sector',
		options: options,
		preload: true,
		maxItems: 3,
	    plugins: ['remove_button'],
		});
		}
	});


	// get  client_sector
	$.ajax({
	url: 'get_sectors',
	type: 'GET',
	dataType: 'json',
	
	success: function(options) {
	$('#opp_client_sector').selectize({
	    valueField: 'sectorid',
	    labelField: 'sector',
	    searchField:'sector',
		options: options,
		preload: false,
		maxItems: 1
		});
		}
	});


});




	// Wordcount textarea

	function wordCount( val ){
	    var wom = val.match(/\b\w+\b/g);
	    return {
	        characters         : val.length,
	        words              : wom ? wom.length : 0,
	        lines              : val.split(/\r*\n/).length
	    };
	}

	// opp description word count
	$("#descr").on("focus keyup", function(){ 
	  var v = wordCount( this.value );
	  $("#descript").html ("Chars: "+ v.characters + " /1500 | Lines: "+ v.lines + " |  Words: "+ v.words);
	});



	// letter count textboxes
	$('.countable').on("keypress focus keyup paste", function(){
		var allow= $(this).data("allow");
	    if(this.value.length > allow){
	        return false;
    }
    $(".leftletter").html((allow - this.value.length)+" / "+allow);
	});
	
	
	
/*	--> force location entry even for online interventions!
	

	// disable venue + hidden fields if 'online' is selected
	$('.loc').on("click", function() { 
		$(".dis").prop("disabled",false);
		if($(this).hasClass('dis_loc')) {
		$(".dis").prop("disabled",true);
		$("#loc-error").hide();// hide the err msg which doesnt otherwise go away
  		}
	});
*/

	$('.loc').on("click", function() { 
		
		this.id=="online" ? $('.ven_to_ol').text("Where will the Majorty of Online Participants be located?") : $('.ven_to_ol').text("Where should this Opportunity take place?");
		
	});



	// disable budget + its hidden fields if budget is not 'sure'
	$('.bud').on("click", function() { 
		$("#budget").prop("disabled",false);
		budgetslider.removeAttribute('disabled');
		if($(this).hasClass('dis_budget')) {
		$("#budget").prop("disabled",true);
		budgetslider.setAttribute('disabled', true);
  		}
	});



	// disable start + hidden fields if 'not decided yet' is selected
	$('.sta').on("click", function() { 
		$(".datepicker").prop("disabled",false); $('.datepicker').datepicker('enable');
		if($(this).hasClass('dis_start')) {
		$(".datepicker").prop("disabled",true); $('.datepicker').datepicker('disabled');
  		}
	});



	// disable duration slider + hidden fields if 'not decided yet' is selected
	$('.unit').on("click", function() {
		$("#duration").prop("disabled",false);
		durationslider.removeAttribute('disabled');
		if($(this).hasClass('dis_dur')) {
		$("#duration").prop("disabled",true);
		durationslider.setAttribute('disabled', true);
  		}
	});



	// show budget slider on "yes" only
	var sel = $('input[name=opp_budget_status]:checked', '#oppwizard').val();
	sel=="yes"?$("#budget_section").show():$("#budget_section").hide();
	
	$(".bud").on("change",function(){ 
		s = $('input[name=opp_budget_status]:checked', '#oppwizard').val();
		s =="yes"?$("#budget_section").show("slow"):$("#budget_section").hide("slow");
	});



    //Autocomplete variables google dropdown 

 
	var placeSearch, autocomplete;
	var componentForm = {
	  locality: 'long_name',
	  country: 'long_name',
	};
	
	function initAutocomplete() {
	  autocomplete = new google.maps.places.Autocomplete(
	      (document.getElementById('loc')),
	      {types: ['(cities)']});
	
	  autocomplete.addListener('place_changed', fillInAddress);
	}
	
	function fillInAddress() {
	  var place = autocomplete.getPlace();
	
	  for (var component in componentForm) {
	    document.getElementById(component).value = '';
	    document.getElementById(component).disabled = false;
	  }
	
	  for (var i = 0; i < place.address_components.length; i++) {
	    var addressType = place.address_components[i].types[0];
	    if (componentForm[addressType]) {
	      var val = place.address_components[i][componentForm[addressType]];
	      document.getElementById(addressType).value = val;
	    }
	  }
	}
 
 
 function round(value, step) {
    step || (step = 1.0);
    var inv = 1.0 / step;
    return Math.round(value * inv) / inv;
}
 
 
 $(function() {
 
 

 	// get the competency value step 5
	var competency = $('#competency input:radio:checked').val() 
 
				
});










$(document).ready(function()
{

$("#pickcat").on("change",function(){
	var cat = $('#pickcat').find(":selected").data('gig');
	cat==""?cat="Experts":cat; 
	$('.which').text(cat);
});




$("#title").on("keyup paste input propertychange", function(){
	a = this.value; a==""?a="this Opportunity":a=a;
	$(".title1").text(a);
}); 


	$("#oppwizard").validate	
	({
		ignore: ':hidden:not([class~=selectized]),:hidden > .selectized, .selectize-control .selectize-input input',
		ignore: [],
		ignore: ':disabled',
		rules: 	{
	        
	        		"opp_expertise"			: "required",
	        		"opp_title"				: {required:true,minlength:10},
	        		"opp_description"		: {required:true,minlength:10,maxlength:1500},
	        		"opp_language"			: {required:true,minlength:1},
	        		"opp_num_experts"		: "required",
	        		"opp_startdate"			: "required",
	        		"opp_budget"			: "required",
	        		"opp_cat"				: "required",
	        		"opp_location"			: "required",
	        		
	        	},
	   errorPlacement: function(error, element) {
		   
            if (element.attr("type") == "radio") {
                element.parent().append( error )
            } else {
                error.insertAfter(element);
            }
        },
	        	
	   submitHandler: submitForm
   	
	});

	// prevent funny business pressing enter submits
	$('#loc').on("keypress",function(event) {
	    if (event.keyCode == 13) {
	        event.preventDefault();
	    }
	});

});	



	// form2wizard validate each step
	$(function() {
	
		var $signupForm = $('#oppwizard');
	
		$signupForm.formToWizard({
			buttonTag: 'button',
			progress: function(i, count) {
				 $('#progress-complete').width(''+(i/count*100+25)+'%');
			},
			validateBeforeNext: function(form, step) {
		        var stepIsValid = true;
		        var validator = form.validate();
		        $(":input", step).each( function(index) {
		            var x = validator.element(this);
		            stepIsValid = stepIsValid && (typeof x == 'undefined' || x);
		        });
		        return stepIsValid;
		    },
		});
	}); 


	
	function submitForm()
	{
		
		
	$("#B :input").attr("disabled", true);
	
		
	$.ajax({
	  
		type 		: 'POST',
		url  		: 'oppwizard_submit',
		data 		: $("#oppwizard").serialize(),
		success 	: function(data)
		  {

		
		
			// if opp_id (new or edited) is returned offer a swal popup with edit/new/exit options
		
			if ($.isNumeric(data)) 
			{

		 		swal({
					
					icon	: "success",
					title	: "Great Work!",
					text	: "All saved. We'll have a look at it before we switch it live.",
					closeOnClickOutside: false,
					buttons: {
						edit	: "Edit again",
						newopp	: "Add New",
						cons	: "Exit"
					},
				})
				.then((value) => {
					switch (value) {
					
						case "edit":
							window.location.replace("https://www.expertbase.org/oppwizard-"+data);
						  break;
						case "newopp":
							window.location.replace("https://www.expertbase.org/oppwizard");
						  break;
						case "cons":
							window.location.replace("https://www.expertbase.org/dashboard#opps");
						  break;
						
					}
				});  
			}
			
			// else we need to assume there is a problem usually being logged out. Warn with a workaround.
			
			else
			{
				swal("LOGGED OUT!", data);
			}
			
		  
		   }
		});
	  return false;
	 };
 
 
 
 
	





// hack for handling enter on inputs!			
$('body').on("keypress",'input',function(e){
	var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
	  if(key == 13) {
	    e.preventDefault();
	    
	    var inputs = $('#profilepost').find(':input:visible');
	    var nextinput = 0;
	    if (inputs.index(this) < (inputs.length-1)) {
	      nextinput = inputs.index(this)+1;
	    }
	    if (inputs.length==1) {
	      $(this).blur().focus();
	    } else {
	      inputs.eq(nextinput).focus(); 
	    }
  }});




