"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var React=require("react"),React__default=_interopDefault(React),reactDom=require("react-dom"),PropTypes=_interopDefault(require("prop-types")),commonjsGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function createCommonjsModule(e,t){return e(t={exports:{}},t.exports),t.exports}var _extends_1=createCommonjsModule(function(e){function t(){return e.exports=t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},t.apply(this,arguments)}e.exports=t});function _arrayWithHoles(e){if(Array.isArray(e))return e}var arrayWithHoles=_arrayWithHoles;function _iterableToArrayLimit(e,t){var r=[],o=!0,n=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(o=(i=s.next()).done)&&(r.push(i.value),!t||r.length!==t);o=!0);}catch(e){n=!0,a=e}finally{try{o||null==s.return||s.return()}finally{if(n)throw a}}return r}var iterableToArrayLimit=_iterableToArrayLimit;function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}var nonIterableRest=_nonIterableRest;function _slicedToArray(e,t){return arrayWithHoles(e)||iterableToArrayLimit(e,t)||nonIterableRest()}var slicedToArray=_slicedToArray;function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}var objectWithoutPropertiesLoose=_objectWithoutPropertiesLoose;function _objectWithoutProperties(e,t){if(null==e)return{};var r,o,n=objectWithoutPropertiesLoose(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var objectWithoutProperties=_objectWithoutProperties,humps=createCommonjsModule(function(e){!function(t){var r=function(e,t,o){if(!u(t)||l(t)||p(t)||f(t)||s(t))return t;var n,a=0,i=0;if(c(t))for(n=[],i=t.length;a<i;a++)n.push(r(e,t[a],o));else for(var d in n={},t)Object.prototype.hasOwnProperty.call(t,d)&&(n[e(d,o)]=r(e,t[d],o));return n},o=function(e){return d(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""})).substr(0,1).toLowerCase()+e.substr(1)},n=function(e){var t=o(e);return t.substr(0,1).toUpperCase()+t.substr(1)},a=function(e,t){return function(e,t){var r=(t=t||{}).separator||"_",o=t.split||/(?=[A-Z])/;return e.split(o).join(r)}(e,t).toLowerCase()},i=Object.prototype.toString,s=function(e){return"function"==typeof e},u=function(e){return e===Object(e)},c=function(e){return"[object Array]"==i.call(e)},l=function(e){return"[object Date]"==i.call(e)},p=function(e){return"[object RegExp]"==i.call(e)},f=function(e){return"[object Boolean]"==i.call(e)},d=function(e){return(e-=0)==e},y=function(e,t){var r=t&&"process"in t?t.process:t;return"function"!=typeof r?e:function(t,o){return r(t,e,o)}},h={camelize:o,decamelize:a,pascalize:n,depascalize:a,camelizeKeys:function(e,t){return r(y(o,t),e)},decamelizeKeys:function(e,t){return r(y(a,t),e,t)},pascalizeKeys:function(e,t){return r(y(n,t),e)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=h:t.humps=h}(commonjsGlobal)}),humps_1=humps.decamelize;function ShadowContent(e){var t=e.root,r=e.children;return reactDom.createPortal(r,t)}function createComponent(e){var t=React.forwardRef(function(t,r){var o=t.mode,n=t.delegatesFocus,a=t.styleSheets,i=t.children,s=objectWithoutProperties(t,["mode","delegatesFocus","styleSheets","children"]),u=React.useState(null),c=slicedToArray(u,2),l=c[0],p=c[1],f=React.useState(null),d=slicedToArray(f,2),y=d[0],h=d[1];return React.useEffect(function(){if(l&&"function"==typeof l.attachShadow){var e=l.attachShadow({mode:o,delegatesFocus:n});a.length>0&&(e.adoptedStyleSheets=a),r&&"function"==typeof r&&r(l),r&&"current"in r&&(r.current=l),h(e)}},[l]),React__default.createElement(e.tag,_extends_1({ref:p},s),y&&React__default.createElement(ShadowContent,{root:y},i))});return t.propTypes={mode:PropTypes.oneOf(["open","closed"]),delegatesFocus:PropTypes.bool,styleSheets:PropTypes.arrayOf(PropTypes.string),children:PropTypes.node.isRequired},t.defaultProps={mode:"open",delegatesFocus:!1,styleSheets:[]},t}ShadowContent.propTypes={root:PropTypes.object.isRequired,children:PropTypes.node.isRequired};var components=new Map;function createProxy(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Proxy(e,{get:function(e,t){var r=humps_1(t,{separator:"-"});return components.has(r)||components.set(r,createComponent({tag:r})),components.get(r)}})}var index=createProxy();exports.createProxy=createProxy,exports.default=index;
//# sourceMappingURL=react-shadow.cjs.js.map
