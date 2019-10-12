import e,{forwardRef as t,useState as r,useEffect as n}from"react";import{createPortal as o}from"react-dom";import i from"prop-types";var u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function c(e,t){return e(t={exports:{}},t.exports),t.exports}var a=c(function(e){function t(){return e.exports=t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},t.apply(this,arguments)}e.exports=t});var l=function(e){if(Array.isArray(e))return e};var s=function(e,t){var r=[],n=!0,o=!1,i=void 0;try{for(var u,c=e[Symbol.iterator]();!(n=(u=c.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r};var f=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")};var p=function(e,t){return l(e)||s(e,t)||f()};var y=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o};var d=function(e,t){if(null==e)return{};var r,n,o=y(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o},h=c(function(e){!function(t){var r=function(e,t,n){if(!a(t)||s(t)||f(t)||p(t)||c(t))return t;var o,i=0,u=0;if(l(t))for(o=[],u=t.length;i<u;i++)o.push(r(e,t[i],n));else for(var y in o={},t)Object.prototype.hasOwnProperty.call(t,y)&&(o[e(y,n)]=r(e,t[y],n));return o},n=function(e){return y(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""})).substr(0,1).toLowerCase()+e.substr(1)},o=function(e){var t=n(e);return t.substr(0,1).toUpperCase()+t.substr(1)},i=function(e,t){return function(e,t){var r=(t=t||{}).separator||"_",n=t.split||/(?=[A-Z])/;return e.split(n).join(r)}(e,t).toLowerCase()},u=Object.prototype.toString,c=function(e){return"function"==typeof e},a=function(e){return e===Object(e)},l=function(e){return"[object Array]"==u.call(e)},s=function(e){return"[object Date]"==u.call(e)},f=function(e){return"[object RegExp]"==u.call(e)},p=function(e){return"[object Boolean]"==u.call(e)},y=function(e){return(e-=0)==e},d=function(e,t){var r=t&&"process"in t?t.process:t;return"function"!=typeof r?e:function(t,n){return r(t,e,n)}},h={camelize:n,decamelize:i,pascalize:o,depascalize:i,camelizeKeys:function(e,t){return r(d(n,t),e)},decamelizeKeys:function(e,t){return r(d(i,t),e,t)},pascalizeKeys:function(e,t){return r(d(o,t),e)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=h:t.humps=h}(u)}).decamelize,b=function(){let e,t=null;function r(e){return!!e&&("object"==typeof e||"function"==typeof e)}return(e=function(e,n){if(!r(e)||!r(n))throw new TypeError("Cannot create proxy with a non-object as target or handler");let o=function(){};t=function(){o=function(e){throw new TypeError(`Cannot perform '${e}' on a proxy that has been revoked`)}};const i=n;n={get:null,set:null,apply:null,construct:null};for(let e in i){if(!(e in n))throw new TypeError(`Proxy polyfill does not support trap '${e}'`);n[e]=i[e]}"function"==typeof i&&(n.apply=i.apply.bind(i));let u=this,c=!1,a=!1;"function"==typeof e?(u=function(){const t=this&&this.constructor===u,r=Array.prototype.slice.call(arguments);if(o(t?"construct":"apply"),t&&n.construct)return n.construct.call(this,e,r);if(!t&&n.apply)return n.apply(e,this,r);if(t){return r.unshift(e),new(e.bind.apply(e,r))}return e.apply(this,r)},c=!0):e instanceof Array&&(u=[],a=!0);const l=n.get?function(e){return o("get"),n.get(this,e,u)}:function(e){return o("get"),this[e]},s=n.set?function(e,t){o("set");n.set(this,e,t,u)}:function(e,t){o("set"),this[e]=t},f=Object.getOwnPropertyNames(e),p={};f.forEach(function(t){if((c||a)&&t in u)return;const r={enumerable:!!Object.getOwnPropertyDescriptor(e,t).enumerable,get:l.bind(e,t),set:s.bind(e,t)};Object.defineProperty(u,t,r),p[t]=!0});let y=!0;if(Object.setPrototypeOf?Object.setPrototypeOf(u,Object.getPrototypeOf(e)):u.__proto__?u.__proto__=e.__proto__:y=!1,n.get||!y)for(let t in e)p[t]||Object.defineProperty(u,t,{get:l.bind(e,t)});return Object.seal(e),Object.seal(u),u}).revocable=function(r,n){return{proxy:new e(r,n),revoke:t}},e};function g(e){var t=e.root,r=e.children;return o(r,t)}g.propTypes={root:i.object.isRequired,children:i.node.isRequired};var v=new Map;function O(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new b(o,{get:function(o,u){var c,l,s=h(u,{separator:"-"});return v.has(s)||v.set(s,(c={tag:s},(l=t(function(t,o){var i=t.mode,u=t.delegatesFocus,l=t.styleSheets,s=t.children,f=d(t,["mode","delegatesFocus","styleSheets","children"]),y=r(null),h=p(y,2),b=h[0],v=h[1],O=r(null),m=p(O,2),w=m[0],j=m[1];return n(function(){if(b&&"function"==typeof b.attachShadow){var e=b.attachShadow({mode:i,delegatesFocus:u});l.length>0&&(e.adoptedStyleSheets=l),o&&"function"==typeof o&&o(b),o&&"current"in o&&(o.current=b),j(e)}},[b]),e.createElement(c.tag,a({ref:v},f),w&&e.createElement(g,{root:w},s))})).propTypes={mode:i.oneOf(["open","closed"]),delegatesFocus:i.bool,styleSheets:i.arrayOf(i.string),children:i.node.isRequired},l.defaultProps={mode:"open",delegatesFocus:!1,styleSheets:[]},l)),v.get(s)}})}var m=O();export default m;export{O as createProxy};
//# sourceMappingURL=react-shadow.esm.js.map
