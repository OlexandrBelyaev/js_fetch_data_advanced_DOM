parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function n(n){if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(n=e(n))){var t=0,r=function(){};return{s:r,n:function(){return t>=n.length?{done:!0}:{done:!1,value:n[t++]}},e:function(n){throw n},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a,c=!0,u=!1;return{s:function(){o=n[Symbol.iterator]()},n:function(){var n=o.next();return c=n.done,n},e:function(n){u=!0,a=n},f:function(){try{c||null==o.return||o.return()}finally{if(u)throw a}}}}function e(n,e){if(n){if("string"==typeof n)return t(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(n,e):void 0}}function t(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}var r="https://mate-academy.github.io/phone-catalogue-static/api/phones.json",o="https://mate-academy.github.io/phone-catalogue-static/api/phones/";function a(n){return new Promise(function(e,t){fetch(n).then(function(n){return n.json()}).then(function(n){e(n)}),setTimeout(function(){t(new Error("timeOut"))},5e3)})}var c=document.createElement("div"),u=document.createElement("p");u.innerText="First Received";var i=document.createElement("li");c.append(i);var l=document.createElement("ul");function f(n){var e=n.map(function(n){return fetch("".concat(o).concat(n,".json"))});return Promise.race(e).then(function(n){return n.json()}).then(function(n){return i.innerText=n.id})}l.append(i),c.append(l),c.append(u),c.classList.add("first-received"),document.body.append(c);var d=document.createElement("div");d.classList.add("all-successful");var s=document.createElement("p");s.innerText="All Successful";var m=document.createElement("ul");function p(n){var e=n.map(function(n){return fetch("".concat(o).concat(n,".json")).then(function(n){return n.json()}).then(function(n){var e=document.createElement("li");e.innerText="".concat(n.id," === ").concat(n.name),m.append(e)})});return Promise.allSettled(e)}d.append(m),d.append(s);var h=a(r),v=[];h.then(function(e){var t,r=n(e);try{for(r.s();!(t=r.n()).done;){var o=t.value;v.push(o.id)}}catch(a){r.e(a)}finally{r.f()}return v}).then(function(n){f(n),p(n).then(function(){return document.body.append(d)})});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.b169b00d.js.map