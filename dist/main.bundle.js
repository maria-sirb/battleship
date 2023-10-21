(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/UnderAuthority.ttf */ "./src/fonts/UnderAuthority.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/sea-bigger.png */ "./src/images/sea-bigger.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/sea.png */ "./src/images/sea.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n    font-family: \"Under Authority\";\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  }\r\n:root{\r\n    --dark-blue : rgb(1, 18, 43);\r\n\r\n}\r\n.board{\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 45px);\r\n    grid-template-rows: repeat(10, 45px);\r\n}\r\n.cell{\r\n    border: 2px solid var(--dark-blue);\r\n    background-color: white;\r\n   \r\n}\r\n.place-available{\r\n    background:rgb(107, 238, 157);\r\n}\r\n.place-unavailable{\r\n    background:rgb(252, 137, 137);\r\n}\r\n.occupied{\r\n    background-color: rgb(76, 77, 83);\r\n}\r\n.hit\r\n{\r\n    background-color: rgb(236, 4, 4);\r\n}\r\n.missed\r\n{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.empty, .missed{\r\n   background-position: 0px 5px;\r\n   background-size:  cover;           \r\n   background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n}\r\n.missed svg {\r\n    width: 45px;\r\n    height: 45px;\r\n}\r\n.missed svg path{\r\n    fill: rgb(236, 4, 4);\r\n}\r\nbody{\r\n    background-color: var(--dark-blue);\r\n    color: white;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-family: 'Segoe UI', Tahoma, Verdana, sans-serif;\r\n}\r\n.title{\r\n    font-size: 55px;\r\n    font-family: 'Under Authority';\r\n}\r\n.board-container{\r\n    text-align: center;\r\n    font-size: 18px;\r\n   \r\n}\r\n.game-container{\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    gap: 80px;  \r\n}\r\n.game-container h1{\r\n    text-align: center;\r\n    font-size: 5vmin;\r\n}\r\n.boat-type {\r\n    color: pink;\r\n}\r\n.winner-screen{\r\n    text-align: center;\r\n}\r\n.winner-text{\r\n    font-size: 40px;\r\n    color: pink;\r\n}\r\nbutton {\r\n    width: 120px;\r\n    height: 35px;\r\n    margin: 3px;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    background-color: pink;\r\n    color: var(--dark-blue);\r\n    border-radius: 10px;\r\n}\r\n.new-game-btn{\r\n    width: 150px;\r\n    height: 40px;\r\n    font-size: 18px;\r\n}\r\nbutton:hover{\r\n    transform: scale(1.1);    \r\n}\r\n@media (max-width : 400px)\r\n{\r\n    .game-container{\r\n        gap: 10px;\r\n    }\r\n    .board{\r\n        display: grid;\r\n        grid-template-columns: repeat(10, 25px);\r\n        grid-template-rows: repeat(10, 25px);\r\n    }\r\n    .cell{\r\n        border: 1px solid var(--dark-blue);\r\n    }\r\n    .missed, .empty{\r\n        background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n        background-position: 0px 2px;\r\n    }\r\n    .missed svg {\r\n        width: 30px;\r\n        height: 30px;\r\n    }\r\n}\r\n\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,8BAA8B;IAC9B,4CAAsC;EACxC;AACF;IACI,4BAA4B;;AAEhC;AACA;IACI,aAAa;IACb,uCAAuC;IACvC,oCAAoC;AACxC;AACA;IACI,kCAAkC;IAClC,uBAAuB;;AAE3B;AACA;IACI,6BAA6B;AACjC;AACA;IACI,6BAA6B;AACjC;AACA;IACI,iCAAiC;AACrC;AACA;;IAEI,gCAAgC;AACpC;AACA;;IAEI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;AACA;GACG,4BAA4B;GAC5B,uBAAuB;GACvB,yDAAgD;AACnD;AACA;IACI,WAAW;IACX,YAAY;AAChB;AACA;IACI,oBAAoB;AACxB;AACA;IACI,kCAAkC;IAClC,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,oDAAoD;AACxD;AACA;IACI,eAAe;IACf,8BAA8B;AAClC;AACA;IACI,kBAAkB;IAClB,eAAe;;AAEnB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,uBAAuB;IACvB,SAAS;AACb;AACA;IACI,kBAAkB;IAClB,gBAAgB;AACpB;AACA;IACI,WAAW;AACf;AACA;IACI,kBAAkB;AACtB;AACA;IACI,eAAe;IACf,WAAW;AACf;AACA;IACI,YAAY;IACZ,YAAY;IACZ,WAAW;IACX,eAAe;IACf,iBAAiB;IACjB,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,YAAY;IACZ,YAAY;IACZ,eAAe;AACnB;AACA;IACI,qBAAqB;AACzB;AACA;;IAEI;QACI,SAAS;IACb;IACA;QACI,aAAa;QACb,uCAAuC;QACvC,oCAAoC;IACxC;IACA;QACI,kCAAkC;IACtC;IACA;QACI,yDAAyC;QACzC,4BAA4B;IAChC;IACA;QACI,WAAW;QACX,YAAY;IAChB;AACJ","sourcesContent":["@font-face {\r\n    font-family: \"Under Authority\";\r\n    src: url('./fonts/UnderAuthority.ttf');\r\n  }\r\n:root{\r\n    --dark-blue : rgb(1, 18, 43);\r\n\r\n}\r\n.board{\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 45px);\r\n    grid-template-rows: repeat(10, 45px);\r\n}\r\n.cell{\r\n    border: 2px solid var(--dark-blue);\r\n    background-color: white;\r\n   \r\n}\r\n.place-available{\r\n    background:rgb(107, 238, 157);\r\n}\r\n.place-unavailable{\r\n    background:rgb(252, 137, 137);\r\n}\r\n.occupied{\r\n    background-color: rgb(76, 77, 83);\r\n}\r\n.hit\r\n{\r\n    background-color: rgb(236, 4, 4);\r\n}\r\n.missed\r\n{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.empty, .missed{\r\n   background-position: 0px 5px;\r\n   background-size:  cover;           \r\n   background-image: url(\"./images/sea-bigger.png\");\r\n}\r\n.missed svg {\r\n    width: 45px;\r\n    height: 45px;\r\n}\r\n.missed svg path{\r\n    fill: rgb(236, 4, 4);\r\n}\r\nbody{\r\n    background-color: var(--dark-blue);\r\n    color: white;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-family: 'Segoe UI', Tahoma, Verdana, sans-serif;\r\n}\r\n.title{\r\n    font-size: 55px;\r\n    font-family: 'Under Authority';\r\n}\r\n.board-container{\r\n    text-align: center;\r\n    font-size: 18px;\r\n   \r\n}\r\n.game-container{\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    gap: 80px;  \r\n}\r\n.game-container h1{\r\n    text-align: center;\r\n    font-size: 5vmin;\r\n}\r\n.boat-type {\r\n    color: pink;\r\n}\r\n.winner-screen{\r\n    text-align: center;\r\n}\r\n.winner-text{\r\n    font-size: 40px;\r\n    color: pink;\r\n}\r\nbutton {\r\n    width: 120px;\r\n    height: 35px;\r\n    margin: 3px;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    background-color: pink;\r\n    color: var(--dark-blue);\r\n    border-radius: 10px;\r\n}\r\n.new-game-btn{\r\n    width: 150px;\r\n    height: 40px;\r\n    font-size: 18px;\r\n}\r\nbutton:hover{\r\n    transform: scale(1.1);    \r\n}\r\n@media (max-width : 400px)\r\n{\r\n    .game-container{\r\n        gap: 10px;\r\n    }\r\n    .board{\r\n        display: grid;\r\n        grid-template-columns: repeat(10, 25px);\r\n        grid-template-rows: repeat(10, 25px);\r\n    }\r\n    .cell{\r\n        border: 1px solid var(--dark-blue);\r\n    }\r\n    .missed, .empty{\r\n        background-image: url(\"./images/sea.png\");\r\n        background-position: 0px 2px;\r\n    }\r\n    .missed svg {\r\n        width: 30px;\r\n        height: 30px;\r\n    }\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/dom.js":
/*!***********************!*\
  !*** ./src/js/dom.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addMoveHoverEffect": () => (/* binding */ addMoveHoverEffect),
/* harmony export */   "computerMakesMove": () => (/* binding */ computerMakesMove),
/* harmony export */   "displayBoard": () => (/* binding */ displayBoard),
/* harmony export */   "displayGameScreen": () => (/* binding */ displayGameScreen),
/* harmony export */   "displayShipPlacingScreen": () => (/* binding */ displayShipPlacingScreen),
/* harmony export */   "displayWinnerScreen": () => (/* binding */ displayWinnerScreen),
/* harmony export */   "makeMove": () => (/* binding */ makeMove),
/* harmony export */   "play": () => (/* binding */ play),
/* harmony export */   "refreshBoard": () => (/* binding */ refreshBoard),
/* harmony export */   "removeGameScreen": () => (/* binding */ removeGameScreen),
/* harmony export */   "removeMoveHoverEffect": () => (/* binding */ removeMoveHoverEffect),
/* harmony export */   "removeShipPlacingScreen": () => (/* binding */ removeShipPlacingScreen),
/* harmony export */   "rotate": () => (/* binding */ rotate),
/* harmony export */   "startGame": () => (/* binding */ startGame),
/* harmony export */   "waitForBoard": () => (/* binding */ waitForBoard)
/* harmony export */ });
/* harmony import */ var _factories_ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories/ship */ "./src/js/factories/ship.js");
/* harmony import */ var _factories_ship__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_factories_ship__WEBPACK_IMPORTED_MODULE_0__);



function displayGameScreen(human, computer)
{  
    removeShipPlacingScreen();

    let body = document.querySelector("body");
    let container = document.createElement('div');
    container.classList = "game-container";
    container.innerHTML = 
    `   <div>
        <h1>Your Board</h1>
        <div class = "board-containerh">
        </div>
       </div>
        <div>
        <h1>${computer.getName()}'s Board</h1>
        <div class = "board-containerc">
        </div>
        </div>
    `;
    body.appendChild(container);
    displayBoard(human.getGameboard().board, "h");
    refreshBoard(human.getGameboard().board, "h");
    displayBoard(computer.getGameboard().board, "c");
   // refreshBoard(computer.getGameboard().board, "c");
   

}
function removeShipPlacingScreen() 
{
    let shipPalcingScreen = document.querySelector(".board-container");
    let body = document.querySelector("body");
    body.removeChild(shipPalcingScreen);
}

function displayShipPlacingScreen(board){

    let body = document.querySelector("body");
    let container = document.createElement('div');
    container.classList = "board-container";
    let boatTypeText = document.createElement("div");
    boatTypeText.classList = "boat-type";
    let rotateBtn = document.createElement("button");
    rotateBtn.classList.add("rotate-btn");
    rotateBtn.textContent = "Rotate";
    container.appendChild(boatTypeText);
    container.appendChild(rotateBtn);
    body.appendChild(container);
    displayBoard(board);

}

function displayBoard (board, playerType = "") {

    let container = document.querySelector(`.board-container${playerType}`);
    let boardElem = document.createElement("div");
    boardElem.classList.add("board");
    for(let i = 0; i < board.length; i++)
    {
        for(let j = 0; j < board[i].length; j++)
        {
            let cell = document.createElement("div");
            cell.id = `${i}${j}${playerType}`;
            cell.classList.add("cell", "empty");
            boardElem.appendChild(cell);
        }
    }
    container.appendChild(boardElem); 
}

function refreshBoard(board, playerType = "")
{
    for(let i = 0; i < board.length; i++)
    {
        for(let j = 0; j < board[i].length; j++)
        {
            let cell = document.getElementById(`${i}${j}${playerType}`);
            if(board[i][j] == 0)
            {
                cell.classList.add("empty");
            }
            else if(board[i][j] == 1)
            {
                cell.classList.add("hit");
            }
            else if(board[i][j] == -1)
            {
                cell.classList.remove("empty");
                cell.classList.add("missed");
                cell.innerHTML = "<svg viewBox='0 0 24 24'><path d='M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z' /></svg>";
            }
            else if(playerType != "c")
            {
                cell.classList.remove("empty");
                cell.classList.add("occupied");
            }
        }
    }
}


function waitForBoard (selector) {
    return new Promise(resolve => {
        if(document.querySelector(selector))
        {
            return resolve(document.querySelector(selector));
        }
        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(true);
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });

}
function removeGameScreen() 
{
    let gameScreen = document.querySelector(".game-container");
    let body = document.querySelector("body");
    body.removeChild(gameScreen);
}


let displayWinnerScreen = (text) => {

    removeGameScreen();
    let winnerScreen = document.createElement("div");
    winnerScreen.classList.add("winner-screen");
    winnerScreen.innerHTML = 
    `
        <h1 class = "winner-text">${text}</h1>
        <button class = "new-game-btn">New game</button>
    `
    document.querySelector("body").append(winnerScreen);
    let newGameBtn = document.querySelector(".new-game-btn");
    newGameBtn.addEventListener('click', () => window.location.reload());

}
async function startGame(player, ships, computer) {
    let currShipIndex = [0];
    document.querySelector(".boat-type").textContent = `Place your ${ships[currShipIndex]}`;
    let isVertical = [false];
    let rotateBtn = document.querySelector(".rotate-btn");
    let cells = document.querySelectorAll(".cell");
    rotateBtn.addEventListener('click', () => rotate(isVertical));
    cells.forEach(cell => {
        
        cell.addEventListener('mouseenter', () => {
           addHoverEffect(cell, _factories_ship__WEBPACK_IMPORTED_MODULE_0___default()(ships[currShipIndex[0]]), isVertical[0], player);
        });
        cell.addEventListener('mouseleave', () => {
            removeHoverEffect(cell, _factories_ship__WEBPACK_IMPORTED_MODULE_0___default()(ships[currShipIndex[0]]), isVertical[0]);
        });
        cell.addEventListener('click',async () => {
           placeShip(_factories_ship__WEBPACK_IMPORTED_MODULE_0___default()(ships[currShipIndex[0]]), cell, isVertical[0], player, currShipIndex, ships);
           if(currShipIndex[0] >= 5)
           {
               displayGameScreen(player, computer);
               play(player, computer);

           }
        });          

    });
}
let rotate = (isVertical) => {

    isVertical[0] = !isVertical[0];
}

let placeShip = (ship, cell, isVertical, player, currShipIndex, ships) =>
{
    let coords = [Number(cell.id[0]), Number(cell.id[1])];   
    if(player.getGameboard().isPlaceAvailable(ship, coords[0], coords[1], isVertical))
    {
        currShipIndex[0]++; 
        player.placeShip(ship, coords[0], coords[1], isVertical);
        document.querySelector(".boat-type").textContent = `Place your ${ships[currShipIndex]}`;
        refreshBoard(player.getGameboard().board);
        
    }
    
    return coords;
}

let addHoverEffect = (cell, ship, isVertical, player) => {

    
    cell.classList.remove("empty");  
    for(let i = 0; i < ship.length; i++)
    {
        let coveredCell;
        if(isVertical)
        {
           coveredCell = document.getElementById(`${Number(cell.id[0]) + i}${cell.id[1]}`);   
        }
        else if(!isVertical)
        {
            coveredCell = document.getElementById(`${cell.id[0]}${Number(cell.id[1]) + i}`);
        }

        if(player.getGameboard().isPlaceAvailable(ship, Number(cell.id[0]), Number(cell.id[1]), isVertical))
        {
            cell.classList.add("place-available");
            coveredCell.classList.add("place-available");
            coveredCell.classList.remove("empty");
        }
        else if(coveredCell != null)
        {
            cell.classList.add("place-unavailable");
            coveredCell.classList.add("place-unavailable");
            coveredCell.classList.remove("empty");
        }
       
    }
}

let removeHoverEffect = (cell, ship, isVertical) => {

    cell.classList.remove("place-available");
    cell.classList.remove("place-unavailable");
    if(!cell.classList.contains("occupied"))
        cell.classList.add("empty");
    
   for(let i = 0; i < ship.length; i++)
   {
    let coveredCell;
        if(isVertical)
        {
            try
            {
                coveredCell = document.getElementById(`${Number(cell.id[0]) + i}${cell.id[1]}`);
                coveredCell.classList.remove("place-available");
                coveredCell.classList.remove("place-unavailable");
               
            }
            catch(err)
            {
                return err;
            }
        }
        else if(!isVertical)
        {
            try
            {
                coveredCell = document.getElementById(`${cell.id[0]}${Number(cell.id[1]) + i}`);
                coveredCell.classList.remove("place-available");
                coveredCell.classList.remove("place-unavailable");
            }
            catch(err)
            {
                return err;
            }
        }
        if(!coveredCell.classList.contains("occupied"))
            coveredCell.classList.add("empty");
        
   }
}

let play = (human, computer) => {

    let computerBoardContainer = document.querySelector(".board-containerc");
    
    let computerCells = computerBoardContainer.querySelectorAll(".cell");
           
    computerCells.forEach(cell => {
        cell.addEventListener('mouseenter', () => addMoveHoverEffect(cell));
        cell.addEventListener('mouseleave', () => removeMoveHoverEffect(cell));
        cell.addEventListener('click', () => makeMove(cell, human, computer));
    });
}

let makeMove = (cell, player, enemy) => {
   
    let coords = [cell.id[0], cell.id[1]];
    if(player.makeMove(enemy.getGameboard(), coords[0], coords[1]))
    {
        refreshBoard(enemy.getGameboard().board, 'c');
        
        if(player.hasWon())
        {
            displayWinnerScreen("You won!");
        }
        else
        {
            computerMakesMove(enemy, player);
        }
    }

}

let computerMakesMove = (computer, enemy) => {

    computer.makeRandomMove(enemy.getGameboard());
    refreshBoard(enemy.getGameboard().board, 'h');
    if(computer.hasWon())
    {
        displayWinnerScreen("Computer won!");
    }
}

let addMoveHoverEffect = (cell) => {
    
    if(!cell.classList.contains("missed") && !cell.classList.contains("hit"))
    {
        cell.classList.remove("empty");
        cell.classList.add("place-available");
    }
}
let removeMoveHoverEffect = (cell) => {
  
    cell.classList.remove("place-available");
    if(!cell.classList.contains("missed") && !cell.classList.contains("hit"))
    {
        cell.classList.add("empty");
    }

}



/***/ }),

/***/ "./src/js/factories/game.js":
/*!**********************************!*\
  !*** ./src/js/factories/game.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Game": () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom */ "./src/js/dom.js");


const Player = __webpack_require__(/*! ./player */ "./src/js/factories/player.js");
const Ship = __webpack_require__(/*! ./ship */ "./src/js/factories/ship.js");

let Game = (playerName) =>
{
    let humanPlayer = Player(playerName);
    let computer = Player("Computer");
    let ships = ["carrier", "battleship", "cruiser", "submarine", "destroyer"];
    
    let placeComputerShips = () => {

        ships.forEach(ship => {
            computer.placeShipRandomly(Ship(ship));
        })
    }

   function initializeGame() {

        placeComputerShips();
        (0,_dom__WEBPACK_IMPORTED_MODULE_0__.startGame)(humanPlayer, ships, computer);

    }

    
    return {humanPlayer, computer, ships, placeComputerShips, initializeGame};
}

/***/ }),

/***/ "./src/js/factories/gameboard.js":
/*!***************************************!*\
  !*** ./src/js/factories/gameboard.js ***!
  \***************************************/
/***/ ((module) => {

let GameBoard = (boardSize) =>{

    let size = boardSize;
    let board =  Array.from(Array(size), () => {
        return new Array(size).fill(0)
    })
    let sunkenShips = 0;
    let ships = [];
    let placeShip = function(ship, row, column, isVertical)
    {
        ships.push(ship);
        let positions = {rstart: -1, rend: -1, cstart: -1, cend : -1};
        if(isPlaceAvailable(ship, row, column, isVertical))
        {
            if(isVertical)
            {
                positions.rstart = row;
                positions.rend = row + ship.length - 1;
                positions.cstart = column;
                positions.cend = column;
            }
            else
            {
                positions.rstart = row;
                positions.rend = row;
                positions.cstart = column;
                positions.cend = column + ship.length - 1;
            }

            for(let i = positions.rstart; i <=  positions.rend; i++)
            {
                for(let j =  positions.cstart; j <=  positions.cend; j++)
                {
                    board[i][j] = ship;
                    
                }
            }
        }
        return positions;
    }
    let isPlaceAvailable = function(ship, row, column, isVertical)
    {
        if(!isVertical)
        { 
            if(row < 0 || row >= size || column < 0 || column + ship.length  > size )
           {
                return false;
           }
           else
           {
                for(let j = column; j < column + ship.length; j++)
                {
                    if(board[row][j] != 0)
                    {
                        return false;
                    }
                    //check for ships one row above
                    if(row - 1 >= 0 && board[row - 1][j] != 0)
                    {
                        return false;
                    }
                    //check for ships one row under
                    if(row + 1 < size && board[row + 1][j] != 0)
                    {
                        return false;
                    }

                }
                //check for ships one column left
                if(column - 1 >= 0 && board[row][column - 1] != 0)
                {
                    return false;
                }
                //check for ships one column right
                if(column + ship.length < size && board[row][column + ship.length] != 0)
                {
                    return false;
                }
                return true;
           }
        }
        else if(isVertical)
        {
            if(row < 0 || row  + ship.length > size || column < 0 || column >= size )
            {
                return false;
            }
            else
            {
                for(let i = row; i < row + ship.length; i++)
                {
                    if(board[i][column] != 0)
                    {
                        return false;
                    }
                    //check for ships one column left
                    if(column - 1 >= 0 && board[i][column - 1] != 0)
                    {
                        return false;
                    }
                    //check for ships one column right
                    if(column + 1 < size && board[i][column + 1] != 0)
                    {
                        return false;
                    }
                }
                //check for ships one row above
                if(row - 1 >= 0 && (board[row - 1][column] != 0))
                {
                    return false;
                }
                //check for ships one row under
                if(row + ship.length < size && board[row + ship.length][column] != 0)
                {
                    return false;
                }

                return true;
            }
        }
        else
            return true;
    }
    let receiveAttack = function(row, column)
    {
        if(board[row][column] == 0)
        {
            board[row][column] = -1;
        }
        else if(typeof board[row][column] != "number")
        {
           board[row][column].hit();
           if(board[row][column].isSunk())
           {
                sunkenShips++;
           }
           board[row][column] = 1;
          
        }
        return board[row][column];
    }
    let isGameOver = function()
    {
        if(sunkenShips == ships.length)
            return true;
        else
            return false;
    }
    return {board, placeShip, isPlaceAvailable, receiveAttack, isGameOver, ships};
} 
module.exports = GameBoard;

/***/ }),

/***/ "./src/js/factories/player.js":
/*!************************************!*\
  !*** ./src/js/factories/player.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const GameBoard = __webpack_require__(/*! ./gameboard */ "./src/js/factories/gameboard.js");

let Player = (playerName) => {
    let gameboard = GameBoard(10);
    let name = playerName;
    let usedMoves = [];
    let nextMoves = [];
    let lastHit;
    let won = false;

    let getGameboard = () => {
        return gameboard;
    }

    let getName = () => {
        return name;
    }
    let hasWon = () => {
        return won;
    }
    let placeShip = (ship, row, column, isVerical) => {

       if(gameboard.placeShip(ship, row, column, isVerical).rstart != -1)
       {
            return true;
       }
       else 
       {
            return false;
       }
    }

    let makeMove = (enemyGameboard, row, column) => {
        
        if(isValidMove(row, column))
        {
            usedMoves.push([row, column]);
            enemyGameboard.receiveAttack(row, column);
            if(enemyGameboard.isGameOver())
            {
                won = true;
            }
            return true;
        }
        return false;
    }

    let makeRandomMove = (enemyGameboard) => {

        //if there are no next moves make random move
        let move = true;
        if(nextMoves.length > 0)
        {
            let column = -1, row = -1;
            //check for two hits in a row (two 1)
            //if we find it, we only keep the next moves on that row or column
            for(let i = 0; i < nextMoves.length; i++)
            {
                let neighbour = nextMoves[i];
                if(enemyGameboard.board[neighbour[0]][neighbour[1]] == 1)
                {
                    if(neighbour[0] == lastHit[0])
                    {
                        row = lastHit[0];
                    }
                    else if(neighbour[1] == lastHit[1])
                    {
                        column = lastHit[1];
                    }
                }
            }

            AlterNextMoves(row, column);
            let coordsPair;

            do
            {
                coordsPair = nextMoves.pop(); 
                move = makeMove(enemyGameboard, coordsPair[0], coordsPair[1]);

            }while(move == false && nextMoves.length > 0);

            if(move)
            {
                if(enemyGameboard.board[coordsPair[0]][coordsPair[1]] == 1)
                {
                    lastHit = coordsPair;
                    AddNextMoves(coordsPair[0], coordsPair[1]);
                }
                return coordsPair;
            }
           
        }

        if((nextMoves.length == 0 && move) || !move)
        {
           // console.log(nextMoves.length + " " + move);
           // console.log("making random move");
            let row, column, move;
            do
            {
                row = getRandomNumber(0, 9);
                column = getRandomNumber(0, 9);
                move = makeMove(enemyGameboard, row, column);

            }while(move == false);

            if(enemyGameboard.board[row][column] == 1)
            {
                lastHit = [row, column];
                AddNextMoves(row, column);
            }
            return [row, column];
        }
       
    }

let AddNextMoves = (row, column) => {

    if(column + 1 < 10)
        nextMoves.push([row, column + 1]);
    if(column - 1 >= 0)
        nextMoves.push([row, column - 1]);
    if(row - 1 >= 0)
        nextMoves.push([row - 1, column]);
    if(row + 1 < 10)
        nextMoves.push([row + 1, column]);
}

let AlterNextMoves = (row, column) => {
    if(row != -1)
    {
        nextMoves = nextMoves.filter((coordsPair) => {
            return coordsPair[0] == row;
        });
    }
    else if(column != - 1)
    {
       nextMoves = nextMoves.filter((coordsPair) => {
            return coordsPair[1] == column;
        });
    }
}



    let isValidMove = (row, column) => {

        if(row < 0 || row >= 10 || column < 0 || column >= 10)
            return false;
        for(let i = 0; i < usedMoves.length; i++)
        {
            if(usedMoves[i][0] == row && usedMoves[i][1] == column)
                return false;
        }
        return true;
    }

    let placeShipRandomly = (ship) =>
    {
        let row, column, isVertical;
        do
        {
            row = getRandomNumber(0, 9);
            column = getRandomNumber(0, 9);
            isVertical = Boolean(getRandomNumber(0, 1));
            

        }while(!gameboard.isPlaceAvailable(ship, row, column, isVertical));

        gameboard.placeShip(ship, row, column, isVertical);
        return true;
    }
    
    let getRandomNumber = (min , max) =>
    {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return {getGameboard, getName, hasWon, makeMove, placeShip, placeShipRandomly, makeRandomMove};

}
module.exports = Player;

/***/ }),

/***/ "./src/js/factories/ship.js":
/*!**********************************!*\
  !*** ./src/js/factories/ship.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { ShipLenghts } = __webpack_require__(/*! ../helpers */ "./src/js/helpers.js");

let Ship = (shipType) => {
    let type = shipType;
    let length = ShipLenghts[type];
    //let hits = Array(length).fill(false);
    let hitNo = 0;

    let hit = function () {

        if(hitNo < length)
        {
           hitNo++;
        }
        return hitNo;
    }

    let isSunk = function(){

        //if(hits.indexOf(false) >= 0)
        if(hitNo < length)
            return false;
        else 
            return true;    
    }
    let getHits = function(){
        return hitNo;
    }
    return {type, length, hitNo, hit, isSunk, getHits};
}
module.exports = Ship;

/***/ }),

/***/ "./src/js/helpers.js":
/*!***************************!*\
  !*** ./src/js/helpers.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShipLenghts": () => (/* binding */ ShipLenghts)
/* harmony export */ });
const ShipLenghts = {
  carrier: 5,
  battleship: 4,
  cruiser: 3,
  submarine: 3,
  destroyer: 2,
};


/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/js/dom.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style.css */ "./src/style.css");
/* harmony import */ var _factories_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factories/game */ "./src/js/factories/game.js");
const Player = __webpack_require__(/*! ./factories/player */ "./src/js/factories/player.js");
const Ship = __webpack_require__(/*! ./factories/ship */ "./src/js/factories/ship.js");





let currentGame = (0,_factories_game__WEBPACK_IMPORTED_MODULE_2__.Game)("human");
(0,_dom__WEBPACK_IMPORTED_MODULE_0__.displayShipPlacingScreen)(currentGame.humanPlayer.getGameboard().board);
currentGame.initializeGame();


/***/ }),

/***/ "./src/fonts/UnderAuthority.ttf":
/*!**************************************!*\
  !*** ./src/fonts/UnderAuthority.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8348697b537666a20c63.ttf";

/***/ }),

/***/ "./src/images/sea-bigger.png":
/*!***********************************!*\
  !*** ./src/images/sea-bigger.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ea28c7c34cb182c3850f.png";

/***/ }),

/***/ "./src/images/sea.png":
/*!****************************!*\
  !*** ./src/images/sea.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0a390bc6199a82188512.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHNCQUFzQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN0TEEsUUFBUSxjQUFjLEVBQUUsbUJBQU8sQ0FBQyx1Q0FBWTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDOUJPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDTkEsZUFBZSxtQkFBTyxDQUFDLHdEQUFvQjtBQUMzQyxhQUFhLG1CQUFPLENBQUMsb0RBQWtCO0FBQ3NDO0FBQ3ZEO0FBQ2tCO0FBQ3hDO0FBQ0E7QUFDQSxrQkFBa0IscURBQUk7QUFDdEIsOERBQXdCO0FBQ3hCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL2RvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL2ZhY3Rvcmllcy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvZmFjdG9yaWVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL2ZhY3Rvcmllcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9mYWN0b3JpZXMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9VbmRlckF1dGhvcml0eS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9zZWEtYmlnZ2VyLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL3NlYS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIlVuZGVyIEF1dGhvcml0eVxcXCI7XFxyXFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gIH1cXHJcXG46cm9vdHtcXHJcXG4gICAgLS1kYXJrLWJsdWUgOiByZ2IoMSwgMTgsIDQzKTtcXHJcXG5cXHJcXG59XFxyXFxuLmJvYXJke1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgNDVweCk7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA0NXB4KTtcXHJcXG59XFxyXFxuLmNlbGx7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWRhcmstYmx1ZSk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgIFxcclxcbn1cXHJcXG4ucGxhY2UtYXZhaWxhYmxle1xcclxcbiAgICBiYWNrZ3JvdW5kOnJnYigxMDcsIDIzOCwgMTU3KTtcXHJcXG59XFxyXFxuLnBsYWNlLXVuYXZhaWxhYmxle1xcclxcbiAgICBiYWNrZ3JvdW5kOnJnYigyNTIsIDEzNywgMTM3KTtcXHJcXG59XFxyXFxuLm9jY3VwaWVke1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzYsIDc3LCA4Myk7XFxyXFxufVxcclxcbi5oaXRcXHJcXG57XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDQsIDQpO1xcclxcbn1cXHJcXG4ubWlzc2VkXFxyXFxue1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmVtcHR5LCAubWlzc2Vke1xcclxcbiAgIGJhY2tncm91bmQtcG9zaXRpb246IDBweCA1cHg7XFxyXFxuICAgYmFja2dyb3VuZC1zaXplOiAgY292ZXI7ICAgICAgICAgICBcXHJcXG4gICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcclxcbn1cXHJcXG4ubWlzc2VkIHN2ZyB7XFxyXFxuICAgIHdpZHRoOiA0NXB4O1xcclxcbiAgICBoZWlnaHQ6IDQ1cHg7XFxyXFxufVxcclxcbi5taXNzZWQgc3ZnIHBhdGh7XFxyXFxuICAgIGZpbGw6IHJnYigyMzYsIDQsIDQpO1xcclxcbn1cXHJcXG5ib2R5e1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG4udGl0bGV7XFxyXFxuICAgIGZvbnQtc2l6ZTogNTVweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdVbmRlciBBdXRob3JpdHknO1xcclxcbn1cXHJcXG4uYm9hcmQtY29udGFpbmVye1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICBcXHJcXG59XFxyXFxuLmdhbWUtY29udGFpbmVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDgwcHg7ICBcXHJcXG59XFxyXFxuLmdhbWUtY29udGFpbmVyIGgxe1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogNXZtaW47XFxyXFxufVxcclxcbi5ib2F0LXR5cGUge1xcclxcbiAgICBjb2xvcjogcGluaztcXHJcXG59XFxyXFxuLndpbm5lci1zY3JlZW57XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLndpbm5lci10ZXh0e1xcclxcbiAgICBmb250LXNpemU6IDQwcHg7XFxyXFxuICAgIGNvbG9yOiBwaW5rO1xcclxcbn1cXHJcXG5idXR0b24ge1xcclxcbiAgICB3aWR0aDogMTIwcHg7XFxyXFxuICAgIGhlaWdodDogMzVweDtcXHJcXG4gICAgbWFyZ2luOiAzcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHBpbms7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG4ubmV3LWdhbWUtYnRue1xcclxcbiAgICB3aWR0aDogMTUwcHg7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbn1cXHJcXG5idXR0b246aG92ZXJ7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTsgICAgXFxyXFxufVxcclxcbkBtZWRpYSAobWF4LXdpZHRoIDogNDAwcHgpXFxyXFxue1xcclxcbiAgICAuZ2FtZS1jb250YWluZXJ7XFxyXFxuICAgICAgICBnYXA6IDEwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmJvYXJke1xcclxcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAyNXB4KTtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAyNXB4KTtcXHJcXG4gICAgfVxcclxcbiAgICAuY2VsbHtcXHJcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstYmx1ZSk7XFxyXFxuICAgIH1cXHJcXG4gICAgLm1pc3NlZCwgLmVtcHR5e1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAycHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLm1pc3NlZCBzdmcge1xcclxcbiAgICAgICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDhCQUE4QjtJQUM5Qiw0Q0FBc0M7RUFDeEM7QUFDRjtJQUNJLDRCQUE0Qjs7QUFFaEM7QUFDQTtJQUNJLGFBQWE7SUFDYix1Q0FBdUM7SUFDdkMsb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSxrQ0FBa0M7SUFDbEMsdUJBQXVCOztBQUUzQjtBQUNBO0lBQ0ksNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLGlDQUFpQztBQUNyQztBQUNBOztJQUVJLGdDQUFnQztBQUNwQztBQUNBOztJQUVJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7R0FDRyw0QkFBNEI7R0FDNUIsdUJBQXVCO0dBQ3ZCLHlEQUFnRDtBQUNuRDtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsb0RBQW9EO0FBQ3hEO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTs7QUFFbkI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixTQUFTO0FBQ2I7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsV0FBVztBQUNmO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBOztJQUVJO1FBQ0ksU0FBUztJQUNiO0lBQ0E7UUFDSSxhQUFhO1FBQ2IsdUNBQXVDO1FBQ3ZDLG9DQUFvQztJQUN4QztJQUNBO1FBQ0ksa0NBQWtDO0lBQ3RDO0lBQ0E7UUFDSSx5REFBeUM7UUFDekMsNEJBQTRCO0lBQ2hDO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsWUFBWTtJQUNoQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIlVuZGVyIEF1dGhvcml0eVxcXCI7XFxyXFxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL1VuZGVyQXV0aG9yaXR5LnR0ZicpO1xcclxcbiAgfVxcclxcbjpyb290e1xcclxcbiAgICAtLWRhcmstYmx1ZSA6IHJnYigxLCAxOCwgNDMpO1xcclxcblxcclxcbn1cXHJcXG4uYm9hcmR7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCA0NXB4KTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDQ1cHgpO1xcclxcbn1cXHJcXG4uY2VsbHtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZGFyay1ibHVlKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgXFxyXFxufVxcclxcbi5wbGFjZS1hdmFpbGFibGV7XFxyXFxuICAgIGJhY2tncm91bmQ6cmdiKDEwNywgMjM4LCAxNTcpO1xcclxcbn1cXHJcXG4ucGxhY2UtdW5hdmFpbGFibGV7XFxyXFxuICAgIGJhY2tncm91bmQ6cmdiKDI1MiwgMTM3LCAxMzcpO1xcclxcbn1cXHJcXG4ub2NjdXBpZWR7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3NiwgNzcsIDgzKTtcXHJcXG59XFxyXFxuLmhpdFxcclxcbntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgNCwgNCk7XFxyXFxufVxcclxcbi5taXNzZWRcXHJcXG57XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uZW1wdHksIC5taXNzZWR7XFxyXFxuICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IDVweDtcXHJcXG4gICBiYWNrZ3JvdW5kLXNpemU6ICBjb3ZlcjsgICAgICAgICAgIFxcclxcbiAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9pbWFnZXMvc2VhLWJpZ2dlci5wbmdcXFwiKTtcXHJcXG59XFxyXFxuLm1pc3NlZCBzdmcge1xcclxcbiAgICB3aWR0aDogNDVweDtcXHJcXG4gICAgaGVpZ2h0OiA0NXB4O1xcclxcbn1cXHJcXG4ubWlzc2VkIHN2ZyBwYXRoe1xcclxcbiAgICBmaWxsOiByZ2IoMjM2LCA0LCA0KTtcXHJcXG59XFxyXFxuYm9keXtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuLnRpdGxle1xcclxcbiAgICBmb250LXNpemU6IDU1cHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnVW5kZXIgQXV0aG9yaXR5JztcXHJcXG59XFxyXFxuLmJvYXJkLWNvbnRhaW5lcntcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgXFxyXFxufVxcclxcbi5nYW1lLWNvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiA4MHB4OyAgXFxyXFxufVxcclxcbi5nYW1lLWNvbnRhaW5lciBoMXtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDV2bWluO1xcclxcbn1cXHJcXG4uYm9hdC10eXBlIHtcXHJcXG4gICAgY29sb3I6IHBpbms7XFxyXFxufVxcclxcbi53aW5uZXItc2NyZWVue1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi53aW5uZXItdGV4dHtcXHJcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcclxcbiAgICBjb2xvcjogcGluaztcXHJcXG59XFxyXFxuYnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IDEyMHB4O1xcclxcbiAgICBoZWlnaHQ6IDM1cHg7XFxyXFxuICAgIG1hcmdpbjogM3B4O1xcclxcbiAgICBmb250LXNpemU6IDE1cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xcclxcbiAgICBjb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuLm5ldy1nYW1lLWJ0bntcXHJcXG4gICAgd2lkdGg6IDE1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG59XFxyXFxuYnV0dG9uOmhvdmVye1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7ICAgIFxcclxcbn1cXHJcXG5AbWVkaWEgKG1heC13aWR0aCA6IDQwMHB4KVxcclxcbntcXHJcXG4gICAgLmdhbWUtY29udGFpbmVye1xcclxcbiAgICAgICAgZ2FwOiAxMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5ib2FyZHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMjVweCk7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMjVweCk7XFxyXFxuICAgIH1cXHJcXG4gICAgLmNlbGx7XFxyXFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWJsdWUpO1xcclxcbiAgICB9XFxyXFxuICAgIC5taXNzZWQsIC5lbXB0eXtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9pbWFnZXMvc2VhLnBuZ1xcXCIpO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IDJweDtcXHJcXG4gICAgfVxcclxcbiAgICAubWlzc2VkIHN2ZyB7XFxyXFxuICAgICAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXHJcbmltcG9ydCBTaGlwIGZyb20gXCIuL2ZhY3Rvcmllcy9zaGlwXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUdhbWVTY3JlZW4oaHVtYW4sIGNvbXB1dGVyKVxyXG57ICBcclxuICAgIHJlbW92ZVNoaXBQbGFjaW5nU2NyZWVuKCk7XHJcblxyXG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QgPSBcImdhbWUtY29udGFpbmVyXCI7XHJcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXHJcbiAgICBgICAgPGRpdj5cclxuICAgICAgICA8aDE+WW91ciBCb2FyZDwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzcyA9IFwiYm9hcmQtY29udGFpbmVyaFwiPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICA8aDE+JHtjb21wdXRlci5nZXROYW1lKCl9J3MgQm9hcmQ8L2gxPlxyXG4gICAgICAgIDxkaXYgY2xhc3MgPSBcImJvYXJkLWNvbnRhaW5lcmNcIj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGA7XHJcbiAgICBib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcbiAgICBkaXNwbGF5Qm9hcmQoaHVtYW4uZ2V0R2FtZWJvYXJkKCkuYm9hcmQsIFwiaFwiKTtcclxuICAgIHJlZnJlc2hCb2FyZChodW1hbi5nZXRHYW1lYm9hcmQoKS5ib2FyZCwgXCJoXCIpO1xyXG4gICAgZGlzcGxheUJvYXJkKGNvbXB1dGVyLmdldEdhbWVib2FyZCgpLmJvYXJkLCBcImNcIik7XHJcbiAgIC8vIHJlZnJlc2hCb2FyZChjb21wdXRlci5nZXRHYW1lYm9hcmQoKS5ib2FyZCwgXCJjXCIpO1xyXG4gICBcclxuXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVNoaXBQbGFjaW5nU2NyZWVuKCkgXHJcbntcclxuICAgIGxldCBzaGlwUGFsY2luZ1NjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmQtY29udGFpbmVyXCIpO1xyXG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuICAgIGJvZHkucmVtb3ZlQ2hpbGQoc2hpcFBhbGNpbmdTY3JlZW4pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVNoaXBQbGFjaW5nU2NyZWVuKGJvYXJkKXtcclxuXHJcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdCA9IFwiYm9hcmQtY29udGFpbmVyXCI7XHJcbiAgICBsZXQgYm9hdFR5cGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGJvYXRUeXBlVGV4dC5jbGFzc0xpc3QgPSBcImJvYXQtdHlwZVwiO1xyXG4gICAgbGV0IHJvdGF0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICByb3RhdGVCdG4uY2xhc3NMaXN0LmFkZChcInJvdGF0ZS1idG5cIik7XHJcbiAgICByb3RhdGVCdG4udGV4dENvbnRlbnQgPSBcIlJvdGF0ZVwiO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJvYXRUeXBlVGV4dCk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocm90YXRlQnRuKTtcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxuICAgIGRpc3BsYXlCb2FyZChib2FyZCk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUJvYXJkIChib2FyZCwgcGxheWVyVHlwZSA9IFwiXCIpIHtcclxuXHJcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmJvYXJkLWNvbnRhaW5lciR7cGxheWVyVHlwZX1gKTtcclxuICAgIGxldCBib2FyZEVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYm9hcmRFbGVtLmNsYXNzTGlzdC5hZGQoXCJib2FyZFwiKTtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBib2FyZC5sZW5ndGg7IGkrKylcclxuICAgIHtcclxuICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgYm9hcmRbaV0ubGVuZ3RoOyBqKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGNlbGwuaWQgPSBgJHtpfSR7an0ke3BsYXllclR5cGV9YDtcclxuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY2VsbFwiLCBcImVtcHR5XCIpO1xyXG4gICAgICAgICAgICBib2FyZEVsZW0uYXBwZW5kQ2hpbGQoY2VsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJvYXJkRWxlbSk7IFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVmcmVzaEJvYXJkKGJvYXJkLCBwbGF5ZXJUeXBlID0gXCJcIilcclxue1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGJvYXJkLmxlbmd0aDsgaSsrKVxyXG4gICAge1xyXG4gICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBib2FyZFtpXS5sZW5ndGg7IGorKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aX0ke2p9JHtwbGF5ZXJUeXBlfWApO1xyXG4gICAgICAgICAgICBpZihib2FyZFtpXVtqXSA9PSAwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJlbXB0eVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKGJvYXJkW2ldW2pdID09IDEpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKGJvYXJkW2ldW2pdID09IC0xKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJlbXB0eVwiKTtcclxuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm1pc3NlZFwiKTtcclxuICAgICAgICAgICAgICAgIGNlbGwuaW5uZXJIVE1MID0gXCI8c3ZnIHZpZXdCb3g9JzAgMCAyNCAyNCc+PHBhdGggZD0nTTE5LDYuNDFMMTcuNTksNUwxMiwxMC41OUw2LjQxLDVMNSw2LjQxTDEwLjU5LDEyTDUsMTcuNTlMNi40MSwxOUwxMiwxMy40MUwxNy41OSwxOUwxOSwxNy41OUwxMy40MSwxMkwxOSw2LjQxWicgLz48L3N2Zz5cIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKHBsYXllclR5cGUgIT0gXCJjXCIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcImVtcHR5XCIpO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwib2NjdXBpZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gd2FpdEZvckJvYXJkIChzZWxlY3Rvcikge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKG11dGF0aW9ucyA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSkge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmJvZHksIHtcclxuICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxyXG4gICAgICAgICAgICBzdWJ0cmVlOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUdhbWVTY3JlZW4oKSBcclxue1xyXG4gICAgbGV0IGdhbWVTY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtY29udGFpbmVyXCIpO1xyXG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuICAgIGJvZHkucmVtb3ZlQ2hpbGQoZ2FtZVNjcmVlbik7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgbGV0IGRpc3BsYXlXaW5uZXJTY3JlZW4gPSAodGV4dCkgPT4ge1xyXG5cclxuICAgIHJlbW92ZUdhbWVTY3JlZW4oKTtcclxuICAgIGxldCB3aW5uZXJTY3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgd2lubmVyU2NyZWVuLmNsYXNzTGlzdC5hZGQoXCJ3aW5uZXItc2NyZWVuXCIpO1xyXG4gICAgd2lubmVyU2NyZWVuLmlubmVySFRNTCA9IFxyXG4gICAgYFxyXG4gICAgICAgIDxoMSBjbGFzcyA9IFwid2lubmVyLXRleHRcIj4ke3RleHR9PC9oMT5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzID0gXCJuZXctZ2FtZS1idG5cIj5OZXcgZ2FtZTwvYnV0dG9uPlxyXG4gICAgYFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuYXBwZW5kKHdpbm5lclNjcmVlbik7XHJcbiAgICBsZXQgbmV3R2FtZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LWdhbWUtYnRuXCIpO1xyXG4gICAgbmV3R2FtZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKSk7XHJcblxyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdGFydEdhbWUocGxheWVyLCBzaGlwcywgY29tcHV0ZXIpIHtcclxuICAgIGxldCBjdXJyU2hpcEluZGV4ID0gWzBdO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2F0LXR5cGVcIikudGV4dENvbnRlbnQgPSBgUGxhY2UgeW91ciAke3NoaXBzW2N1cnJTaGlwSW5kZXhdfWA7XHJcbiAgICBsZXQgaXNWZXJ0aWNhbCA9IFtmYWxzZV07XHJcbiAgICBsZXQgcm90YXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yb3RhdGUtYnRuXCIpO1xyXG4gICAgbGV0IGNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jZWxsXCIpO1xyXG4gICAgcm90YXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcm90YXRlKGlzVmVydGljYWwpKTtcclxuICAgIGNlbGxzLmZvckVhY2goY2VsbCA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xyXG4gICAgICAgICAgIGFkZEhvdmVyRWZmZWN0KGNlbGwsIFNoaXAoc2hpcHNbY3VyclNoaXBJbmRleFswXV0pLCBpc1ZlcnRpY2FsWzBdLCBwbGF5ZXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcclxuICAgICAgICAgICAgcmVtb3ZlSG92ZXJFZmZlY3QoY2VsbCwgU2hpcChzaGlwc1tjdXJyU2hpcEluZGV4WzBdXSksIGlzVmVydGljYWxbMF0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICBwbGFjZVNoaXAoU2hpcChzaGlwc1tjdXJyU2hpcEluZGV4WzBdXSksIGNlbGwsIGlzVmVydGljYWxbMF0sIHBsYXllciwgY3VyclNoaXBJbmRleCwgc2hpcHMpO1xyXG4gICAgICAgICAgIGlmKGN1cnJTaGlwSW5kZXhbMF0gPj0gNSlcclxuICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgIGRpc3BsYXlHYW1lU2NyZWVuKHBsYXllciwgY29tcHV0ZXIpO1xyXG4gICAgICAgICAgICAgICBwbGF5KHBsYXllciwgY29tcHV0ZXIpO1xyXG5cclxuICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7ICAgICAgICAgIFxyXG5cclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydCBsZXQgcm90YXRlID0gKGlzVmVydGljYWwpID0+IHtcclxuXHJcbiAgICBpc1ZlcnRpY2FsWzBdID0gIWlzVmVydGljYWxbMF07XHJcbn1cclxuXHJcbmxldCBwbGFjZVNoaXAgPSAoc2hpcCwgY2VsbCwgaXNWZXJ0aWNhbCwgcGxheWVyLCBjdXJyU2hpcEluZGV4LCBzaGlwcykgPT5cclxue1xyXG4gICAgbGV0IGNvb3JkcyA9IFtOdW1iZXIoY2VsbC5pZFswXSksIE51bWJlcihjZWxsLmlkWzFdKV07ICAgXHJcbiAgICBpZihwbGF5ZXIuZ2V0R2FtZWJvYXJkKCkuaXNQbGFjZUF2YWlsYWJsZShzaGlwLCBjb29yZHNbMF0sIGNvb3Jkc1sxXSwgaXNWZXJ0aWNhbCkpXHJcbiAgICB7XHJcbiAgICAgICAgY3VyclNoaXBJbmRleFswXSsrOyBcclxuICAgICAgICBwbGF5ZXIucGxhY2VTaGlwKHNoaXAsIGNvb3Jkc1swXSwgY29vcmRzWzFdLCBpc1ZlcnRpY2FsKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXQtdHlwZVwiKS50ZXh0Q29udGVudCA9IGBQbGFjZSB5b3VyICR7c2hpcHNbY3VyclNoaXBJbmRleF19YDtcclxuICAgICAgICByZWZyZXNoQm9hcmQocGxheWVyLmdldEdhbWVib2FyZCgpLmJvYXJkKTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIGNvb3JkcztcclxufVxyXG5cclxubGV0IGFkZEhvdmVyRWZmZWN0ID0gKGNlbGwsIHNoaXAsIGlzVmVydGljYWwsIHBsYXllcikgPT4ge1xyXG5cclxuICAgIFxyXG4gICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwiZW1wdHlcIik7ICBcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBjb3ZlcmVkQ2VsbDtcclxuICAgICAgICBpZihpc1ZlcnRpY2FsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICBjb3ZlcmVkQ2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke051bWJlcihjZWxsLmlkWzBdKSArIGl9JHtjZWxsLmlkWzFdfWApOyAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKCFpc1ZlcnRpY2FsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY292ZXJlZENlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtjZWxsLmlkWzBdfSR7TnVtYmVyKGNlbGwuaWRbMV0pICsgaX1gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHBsYXllci5nZXRHYW1lYm9hcmQoKS5pc1BsYWNlQXZhaWxhYmxlKHNoaXAsIE51bWJlcihjZWxsLmlkWzBdKSwgTnVtYmVyKGNlbGwuaWRbMV0pLCBpc1ZlcnRpY2FsKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInBsYWNlLWF2YWlsYWJsZVwiKTtcclxuICAgICAgICAgICAgY292ZXJlZENlbGwuY2xhc3NMaXN0LmFkZChcInBsYWNlLWF2YWlsYWJsZVwiKTtcclxuICAgICAgICAgICAgY292ZXJlZENlbGwuY2xhc3NMaXN0LnJlbW92ZShcImVtcHR5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGNvdmVyZWRDZWxsICE9IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJwbGFjZS11bmF2YWlsYWJsZVwiKTtcclxuICAgICAgICAgICAgY292ZXJlZENlbGwuY2xhc3NMaXN0LmFkZChcInBsYWNlLXVuYXZhaWxhYmxlXCIpO1xyXG4gICAgICAgICAgICBjb3ZlcmVkQ2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwiZW1wdHlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCByZW1vdmVIb3ZlckVmZmVjdCA9IChjZWxsLCBzaGlwLCBpc1ZlcnRpY2FsKSA9PiB7XHJcblxyXG4gICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwicGxhY2UtYXZhaWxhYmxlXCIpO1xyXG4gICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwicGxhY2UtdW5hdmFpbGFibGVcIik7XHJcbiAgICBpZighY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoXCJvY2N1cGllZFwiKSlcclxuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJlbXB0eVwiKTtcclxuICAgIFxyXG4gICBmb3IobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKylcclxuICAge1xyXG4gICAgbGV0IGNvdmVyZWRDZWxsO1xyXG4gICAgICAgIGlmKGlzVmVydGljYWwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0cnlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY292ZXJlZENlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtOdW1iZXIoY2VsbC5pZFswXSkgKyBpfSR7Y2VsbC5pZFsxXX1gKTtcclxuICAgICAgICAgICAgICAgIGNvdmVyZWRDZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJwbGFjZS1hdmFpbGFibGVcIik7XHJcbiAgICAgICAgICAgICAgICBjb3ZlcmVkQ2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwicGxhY2UtdW5hdmFpbGFibGVcIik7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoKGVycilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKCFpc1ZlcnRpY2FsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHJ5XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvdmVyZWRDZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7Y2VsbC5pZFswXX0ke051bWJlcihjZWxsLmlkWzFdKSArIGl9YCk7XHJcbiAgICAgICAgICAgICAgICBjb3ZlcmVkQ2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwicGxhY2UtYXZhaWxhYmxlXCIpO1xyXG4gICAgICAgICAgICAgICAgY292ZXJlZENlbGwuY2xhc3NMaXN0LnJlbW92ZShcInBsYWNlLXVuYXZhaWxhYmxlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoKGVycilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZighY292ZXJlZENlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKFwib2NjdXBpZWRcIikpXHJcbiAgICAgICAgICAgIGNvdmVyZWRDZWxsLmNsYXNzTGlzdC5hZGQoXCJlbXB0eVwiKTtcclxuICAgICAgICBcclxuICAgfVxyXG59XHJcblxyXG5leHBvcnQgbGV0IHBsYXkgPSAoaHVtYW4sIGNvbXB1dGVyKSA9PiB7XHJcblxyXG4gICAgbGV0IGNvbXB1dGVyQm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkLWNvbnRhaW5lcmNcIik7XHJcbiAgICBcclxuICAgIGxldCBjb21wdXRlckNlbGxzID0gY29tcHV0ZXJCb2FyZENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLmNlbGxcIik7XHJcbiAgICAgICAgICAgXHJcbiAgICBjb21wdXRlckNlbGxzLmZvckVhY2goY2VsbCA9PiB7XHJcbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4gYWRkTW92ZUhvdmVyRWZmZWN0KGNlbGwpKTtcclxuICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiByZW1vdmVNb3ZlSG92ZXJFZmZlY3QoY2VsbCkpO1xyXG4gICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBtYWtlTW92ZShjZWxsLCBodW1hbiwgY29tcHV0ZXIpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgbGV0IG1ha2VNb3ZlID0gKGNlbGwsIHBsYXllciwgZW5lbXkpID0+IHtcclxuICAgXHJcbiAgICBsZXQgY29vcmRzID0gW2NlbGwuaWRbMF0sIGNlbGwuaWRbMV1dO1xyXG4gICAgaWYocGxheWVyLm1ha2VNb3ZlKGVuZW15LmdldEdhbWVib2FyZCgpLCBjb29yZHNbMF0sIGNvb3Jkc1sxXSkpXHJcbiAgICB7XHJcbiAgICAgICAgcmVmcmVzaEJvYXJkKGVuZW15LmdldEdhbWVib2FyZCgpLmJvYXJkLCAnYycpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHBsYXllci5oYXNXb24oKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGRpc3BsYXlXaW5uZXJTY3JlZW4oXCJZb3Ugd29uIVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29tcHV0ZXJNYWtlc01vdmUoZW5lbXksIHBsYXllcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGxldCBjb21wdXRlck1ha2VzTW92ZSA9IChjb21wdXRlciwgZW5lbXkpID0+IHtcclxuXHJcbiAgICBjb21wdXRlci5tYWtlUmFuZG9tTW92ZShlbmVteS5nZXRHYW1lYm9hcmQoKSk7XHJcbiAgICByZWZyZXNoQm9hcmQoZW5lbXkuZ2V0R2FtZWJvYXJkKCkuYm9hcmQsICdoJyk7XHJcbiAgICBpZihjb21wdXRlci5oYXNXb24oKSlcclxuICAgIHtcclxuICAgICAgICBkaXNwbGF5V2lubmVyU2NyZWVuKFwiQ29tcHV0ZXIgd29uIVwiKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGxldCBhZGRNb3ZlSG92ZXJFZmZlY3QgPSAoY2VsbCkgPT4ge1xyXG4gICAgXHJcbiAgICBpZighY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoXCJtaXNzZWRcIikgJiYgIWNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGl0XCIpKVxyXG4gICAge1xyXG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcImVtcHR5XCIpO1xyXG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInBsYWNlLWF2YWlsYWJsZVwiKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgbGV0IHJlbW92ZU1vdmVIb3ZlckVmZmVjdCA9IChjZWxsKSA9PiB7XHJcbiAgXHJcbiAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJwbGFjZS1hdmFpbGFibGVcIik7XHJcbiAgICBpZighY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoXCJtaXNzZWRcIikgJiYgIWNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGl0XCIpKVxyXG4gICAge1xyXG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImVtcHR5XCIpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgYWRkQ2xpY2tQbGFjZSwgcGxhY2VPbkNsaWNrLCBoYW5kbGVTaGlwUGxhY2luZywgcGxheSwgd2FpdEZvckJvYXJkLCBzdGFydEdhbWUgfSBmcm9tIFwiLi4vZG9tXCI7XHJcblxyXG5jb25zdCBQbGF5ZXIgPSByZXF1aXJlKFwiLi9wbGF5ZXJcIik7XHJcbmNvbnN0IFNoaXAgPSByZXF1aXJlKFwiLi9zaGlwXCIpO1xyXG5cclxuZXhwb3J0IGxldCBHYW1lID0gKHBsYXllck5hbWUpID0+XHJcbntcclxuICAgIGxldCBodW1hblBsYXllciA9IFBsYXllcihwbGF5ZXJOYW1lKTtcclxuICAgIGxldCBjb21wdXRlciA9IFBsYXllcihcIkNvbXB1dGVyXCIpO1xyXG4gICAgbGV0IHNoaXBzID0gW1wiY2FycmllclwiLCBcImJhdHRsZXNoaXBcIiwgXCJjcnVpc2VyXCIsIFwic3VibWFyaW5lXCIsIFwiZGVzdHJveWVyXCJdO1xyXG4gICAgXHJcbiAgICBsZXQgcGxhY2VDb21wdXRlclNoaXBzID0gKCkgPT4ge1xyXG5cclxuICAgICAgICBzaGlwcy5mb3JFYWNoKHNoaXAgPT4ge1xyXG4gICAgICAgICAgICBjb21wdXRlci5wbGFjZVNoaXBSYW5kb21seShTaGlwKHNoaXApKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgZnVuY3Rpb24gaW5pdGlhbGl6ZUdhbWUoKSB7XHJcblxyXG4gICAgICAgIHBsYWNlQ29tcHV0ZXJTaGlwcygpO1xyXG4gICAgICAgIHN0YXJ0R2FtZShodW1hblBsYXllciwgc2hpcHMsIGNvbXB1dGVyKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICByZXR1cm4ge2h1bWFuUGxheWVyLCBjb21wdXRlciwgc2hpcHMsIHBsYWNlQ29tcHV0ZXJTaGlwcywgaW5pdGlhbGl6ZUdhbWV9O1xyXG59IiwibGV0IEdhbWVCb2FyZCA9IChib2FyZFNpemUpID0+e1xyXG5cclxuICAgIGxldCBzaXplID0gYm9hcmRTaXplO1xyXG4gICAgbGV0IGJvYXJkID0gIEFycmF5LmZyb20oQXJyYXkoc2l6ZSksICgpID0+IHtcclxuICAgICAgICByZXR1cm4gbmV3IEFycmF5KHNpemUpLmZpbGwoMClcclxuICAgIH0pXHJcbiAgICBsZXQgc3Vua2VuU2hpcHMgPSAwO1xyXG4gICAgbGV0IHNoaXBzID0gW107XHJcbiAgICBsZXQgcGxhY2VTaGlwID0gZnVuY3Rpb24oc2hpcCwgcm93LCBjb2x1bW4sIGlzVmVydGljYWwpXHJcbiAgICB7XHJcbiAgICAgICAgc2hpcHMucHVzaChzaGlwKTtcclxuICAgICAgICBsZXQgcG9zaXRpb25zID0ge3JzdGFydDogLTEsIHJlbmQ6IC0xLCBjc3RhcnQ6IC0xLCBjZW5kIDogLTF9O1xyXG4gICAgICAgIGlmKGlzUGxhY2VBdmFpbGFibGUoc2hpcCwgcm93LCBjb2x1bW4sIGlzVmVydGljYWwpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoaXNWZXJ0aWNhbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25zLnJzdGFydCA9IHJvdztcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9ucy5yZW5kID0gcm93ICsgc2hpcC5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25zLmNzdGFydCA9IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9ucy5jZW5kID0gY29sdW1uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25zLnJzdGFydCA9IHJvdztcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9ucy5yZW5kID0gcm93O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25zLmNzdGFydCA9IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9ucy5jZW5kID0gY29sdW1uICsgc2hpcC5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSBwb3NpdGlvbnMucnN0YXJ0OyBpIDw9ICBwb3NpdGlvbnMucmVuZDsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGogPSAgcG9zaXRpb25zLmNzdGFydDsgaiA8PSAgcG9zaXRpb25zLmNlbmQ7IGorKylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBib2FyZFtpXVtqXSA9IHNoaXA7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBvc2l0aW9ucztcclxuICAgIH1cclxuICAgIGxldCBpc1BsYWNlQXZhaWxhYmxlID0gZnVuY3Rpb24oc2hpcCwgcm93LCBjb2x1bW4sIGlzVmVydGljYWwpXHJcbiAgICB7XHJcbiAgICAgICAgaWYoIWlzVmVydGljYWwpXHJcbiAgICAgICAgeyBcclxuICAgICAgICAgICAgaWYocm93IDwgMCB8fCByb3cgPj0gc2l6ZSB8fCBjb2x1bW4gPCAwIHx8IGNvbHVtbiArIHNoaXAubGVuZ3RoICA+IHNpemUgKVxyXG4gICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaiA9IGNvbHVtbjsgaiA8IGNvbHVtbiArIHNoaXAubGVuZ3RoOyBqKyspXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoYm9hcmRbcm93XVtqXSAhPSAwKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvL2NoZWNrIGZvciBzaGlwcyBvbmUgcm93IGFib3ZlXHJcbiAgICAgICAgICAgICAgICAgICAgaWYocm93IC0gMSA+PSAwICYmIGJvYXJkW3JvdyAtIDFdW2pdICE9IDApXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vY2hlY2sgZm9yIHNoaXBzIG9uZSByb3cgdW5kZXJcclxuICAgICAgICAgICAgICAgICAgICBpZihyb3cgKyAxIDwgc2l6ZSAmJiBib2FyZFtyb3cgKyAxXVtqXSAhPSAwKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL2NoZWNrIGZvciBzaGlwcyBvbmUgY29sdW1uIGxlZnRcclxuICAgICAgICAgICAgICAgIGlmKGNvbHVtbiAtIDEgPj0gMCAmJiBib2FyZFtyb3ddW2NvbHVtbiAtIDFdICE9IDApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9jaGVjayBmb3Igc2hpcHMgb25lIGNvbHVtbiByaWdodFxyXG4gICAgICAgICAgICAgICAgaWYoY29sdW1uICsgc2hpcC5sZW5ndGggPCBzaXplICYmIGJvYXJkW3Jvd11bY29sdW1uICsgc2hpcC5sZW5ndGhdICE9IDApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGlzVmVydGljYWwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihyb3cgPCAwIHx8IHJvdyAgKyBzaGlwLmxlbmd0aCA+IHNpemUgfHwgY29sdW1uIDwgMCB8fCBjb2x1bW4gPj0gc2l6ZSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IHJvdzsgaSA8IHJvdyArIHNoaXAubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoYm9hcmRbaV1bY29sdW1uXSAhPSAwKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvL2NoZWNrIGZvciBzaGlwcyBvbmUgY29sdW1uIGxlZnRcclxuICAgICAgICAgICAgICAgICAgICBpZihjb2x1bW4gLSAxID49IDAgJiYgYm9hcmRbaV1bY29sdW1uIC0gMV0gIT0gMClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jaGVjayBmb3Igc2hpcHMgb25lIGNvbHVtbiByaWdodFxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGNvbHVtbiArIDEgPCBzaXplICYmIGJvYXJkW2ldW2NvbHVtbiArIDFdICE9IDApXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9jaGVjayBmb3Igc2hpcHMgb25lIHJvdyBhYm92ZVxyXG4gICAgICAgICAgICAgICAgaWYocm93IC0gMSA+PSAwICYmIChib2FyZFtyb3cgLSAxXVtjb2x1bW5dICE9IDApKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vY2hlY2sgZm9yIHNoaXBzIG9uZSByb3cgdW5kZXJcclxuICAgICAgICAgICAgICAgIGlmKHJvdyArIHNoaXAubGVuZ3RoIDwgc2l6ZSAmJiBib2FyZFtyb3cgKyBzaGlwLmxlbmd0aF1bY29sdW1uXSAhPSAwKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgbGV0IHJlY2VpdmVBdHRhY2sgPSBmdW5jdGlvbihyb3csIGNvbHVtbilcclxuICAgIHtcclxuICAgICAgICBpZihib2FyZFtyb3ddW2NvbHVtbl0gPT0gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJvYXJkW3Jvd11bY29sdW1uXSA9IC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHR5cGVvZiBib2FyZFtyb3ddW2NvbHVtbl0gIT0gXCJudW1iZXJcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgYm9hcmRbcm93XVtjb2x1bW5dLmhpdCgpO1xyXG4gICAgICAgICAgIGlmKGJvYXJkW3Jvd11bY29sdW1uXS5pc1N1bmsoKSlcclxuICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzdW5rZW5TaGlwcysrO1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgICBib2FyZFtyb3ddW2NvbHVtbl0gPSAxO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBib2FyZFtyb3ddW2NvbHVtbl07XHJcbiAgICB9XHJcbiAgICBsZXQgaXNHYW1lT3ZlciA9IGZ1bmN0aW9uKClcclxuICAgIHtcclxuICAgICAgICBpZihzdW5rZW5TaGlwcyA9PSBzaGlwcy5sZW5ndGgpXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtib2FyZCwgcGxhY2VTaGlwLCBpc1BsYWNlQXZhaWxhYmxlLCByZWNlaXZlQXR0YWNrLCBpc0dhbWVPdmVyLCBzaGlwc307XHJcbn0gXHJcbm1vZHVsZS5leHBvcnRzID0gR2FtZUJvYXJkOyIsImNvbnN0IEdhbWVCb2FyZCA9IHJlcXVpcmUoXCIuL2dhbWVib2FyZFwiKTtcclxuXHJcbmxldCBQbGF5ZXIgPSAocGxheWVyTmFtZSkgPT4ge1xyXG4gICAgbGV0IGdhbWVib2FyZCA9IEdhbWVCb2FyZCgxMCk7XHJcbiAgICBsZXQgbmFtZSA9IHBsYXllck5hbWU7XHJcbiAgICBsZXQgdXNlZE1vdmVzID0gW107XHJcbiAgICBsZXQgbmV4dE1vdmVzID0gW107XHJcbiAgICBsZXQgbGFzdEhpdDtcclxuICAgIGxldCB3b24gPSBmYWxzZTtcclxuXHJcbiAgICBsZXQgZ2V0R2FtZWJvYXJkID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBnYW1lYm9hcmQ7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGdldE5hbWUgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG5hbWU7XHJcbiAgICB9XHJcbiAgICBsZXQgaGFzV29uID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB3b247XHJcbiAgICB9XHJcbiAgICBsZXQgcGxhY2VTaGlwID0gKHNoaXAsIHJvdywgY29sdW1uLCBpc1ZlcmljYWwpID0+IHtcclxuXHJcbiAgICAgICBpZihnYW1lYm9hcmQucGxhY2VTaGlwKHNoaXAsIHJvdywgY29sdW1uLCBpc1ZlcmljYWwpLnJzdGFydCAhPSAtMSlcclxuICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICB9XHJcbiAgICAgICBlbHNlIFxyXG4gICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG1ha2VNb3ZlID0gKGVuZW15R2FtZWJvYXJkLCByb3csIGNvbHVtbikgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGlzVmFsaWRNb3ZlKHJvdywgY29sdW1uKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHVzZWRNb3Zlcy5wdXNoKFtyb3csIGNvbHVtbl0pO1xyXG4gICAgICAgICAgICBlbmVteUdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHJvdywgY29sdW1uKTtcclxuICAgICAgICAgICAgaWYoZW5lbXlHYW1lYm9hcmQuaXNHYW1lT3ZlcigpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB3b24gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG1ha2VSYW5kb21Nb3ZlID0gKGVuZW15R2FtZWJvYXJkKSA9PiB7XHJcblxyXG4gICAgICAgIC8vaWYgdGhlcmUgYXJlIG5vIG5leHQgbW92ZXMgbWFrZSByYW5kb20gbW92ZVxyXG4gICAgICAgIGxldCBtb3ZlID0gdHJ1ZTtcclxuICAgICAgICBpZihuZXh0TW92ZXMubGVuZ3RoID4gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBjb2x1bW4gPSAtMSwgcm93ID0gLTE7XHJcbiAgICAgICAgICAgIC8vY2hlY2sgZm9yIHR3byBoaXRzIGluIGEgcm93ICh0d28gMSlcclxuICAgICAgICAgICAgLy9pZiB3ZSBmaW5kIGl0LCB3ZSBvbmx5IGtlZXAgdGhlIG5leHQgbW92ZXMgb24gdGhhdCByb3cgb3IgY29sdW1uXHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBuZXh0TW92ZXMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBuZWlnaGJvdXIgPSBuZXh0TW92ZXNbaV07XHJcbiAgICAgICAgICAgICAgICBpZihlbmVteUdhbWVib2FyZC5ib2FyZFtuZWlnaGJvdXJbMF1dW25laWdoYm91clsxXV0gPT0gMSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihuZWlnaGJvdXJbMF0gPT0gbGFzdEhpdFswXSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdyA9IGxhc3RIaXRbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYobmVpZ2hib3VyWzFdID09IGxhc3RIaXRbMV0pXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW4gPSBsYXN0SGl0WzFdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQWx0ZXJOZXh0TW92ZXMocm93LCBjb2x1bW4pO1xyXG4gICAgICAgICAgICBsZXQgY29vcmRzUGFpcjtcclxuXHJcbiAgICAgICAgICAgIGRvXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvb3Jkc1BhaXIgPSBuZXh0TW92ZXMucG9wKCk7IFxyXG4gICAgICAgICAgICAgICAgbW92ZSA9IG1ha2VNb3ZlKGVuZW15R2FtZWJvYXJkLCBjb29yZHNQYWlyWzBdLCBjb29yZHNQYWlyWzFdKTtcclxuXHJcbiAgICAgICAgICAgIH13aGlsZShtb3ZlID09IGZhbHNlICYmIG5leHRNb3Zlcy5sZW5ndGggPiAwKTtcclxuXHJcbiAgICAgICAgICAgIGlmKG1vdmUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKGVuZW15R2FtZWJvYXJkLmJvYXJkW2Nvb3Jkc1BhaXJbMF1dW2Nvb3Jkc1BhaXJbMV1dID09IDEpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdEhpdCA9IGNvb3Jkc1BhaXI7XHJcbiAgICAgICAgICAgICAgICAgICAgQWRkTmV4dE1vdmVzKGNvb3Jkc1BhaXJbMF0sIGNvb3Jkc1BhaXJbMV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvb3Jkc1BhaXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKChuZXh0TW92ZXMubGVuZ3RoID09IDAgJiYgbW92ZSkgfHwgIW1vdmUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG5leHRNb3Zlcy5sZW5ndGggKyBcIiBcIiArIG1vdmUpO1xyXG4gICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwibWFraW5nIHJhbmRvbSBtb3ZlXCIpO1xyXG4gICAgICAgICAgICBsZXQgcm93LCBjb2x1bW4sIG1vdmU7XHJcbiAgICAgICAgICAgIGRvXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJvdyA9IGdldFJhbmRvbU51bWJlcigwLCA5KTtcclxuICAgICAgICAgICAgICAgIGNvbHVtbiA9IGdldFJhbmRvbU51bWJlcigwLCA5KTtcclxuICAgICAgICAgICAgICAgIG1vdmUgPSBtYWtlTW92ZShlbmVteUdhbWVib2FyZCwgcm93LCBjb2x1bW4pO1xyXG5cclxuICAgICAgICAgICAgfXdoaWxlKG1vdmUgPT0gZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgaWYoZW5lbXlHYW1lYm9hcmQuYm9hcmRbcm93XVtjb2x1bW5dID09IDEpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhc3RIaXQgPSBbcm93LCBjb2x1bW5dO1xyXG4gICAgICAgICAgICAgICAgQWRkTmV4dE1vdmVzKHJvdywgY29sdW1uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gW3JvdywgY29sdW1uXTtcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbmxldCBBZGROZXh0TW92ZXMgPSAocm93LCBjb2x1bW4pID0+IHtcclxuXHJcbiAgICBpZihjb2x1bW4gKyAxIDwgMTApXHJcbiAgICAgICAgbmV4dE1vdmVzLnB1c2goW3JvdywgY29sdW1uICsgMV0pO1xyXG4gICAgaWYoY29sdW1uIC0gMSA+PSAwKVxyXG4gICAgICAgIG5leHRNb3Zlcy5wdXNoKFtyb3csIGNvbHVtbiAtIDFdKTtcclxuICAgIGlmKHJvdyAtIDEgPj0gMClcclxuICAgICAgICBuZXh0TW92ZXMucHVzaChbcm93IC0gMSwgY29sdW1uXSk7XHJcbiAgICBpZihyb3cgKyAxIDwgMTApXHJcbiAgICAgICAgbmV4dE1vdmVzLnB1c2goW3JvdyArIDEsIGNvbHVtbl0pO1xyXG59XHJcblxyXG5sZXQgQWx0ZXJOZXh0TW92ZXMgPSAocm93LCBjb2x1bW4pID0+IHtcclxuICAgIGlmKHJvdyAhPSAtMSlcclxuICAgIHtcclxuICAgICAgICBuZXh0TW92ZXMgPSBuZXh0TW92ZXMuZmlsdGVyKChjb29yZHNQYWlyKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb29yZHNQYWlyWzBdID09IHJvdztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoY29sdW1uICE9IC0gMSlcclxuICAgIHtcclxuICAgICAgIG5leHRNb3ZlcyA9IG5leHRNb3Zlcy5maWx0ZXIoKGNvb3Jkc1BhaXIpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvb3Jkc1BhaXJbMV0gPT0gY29sdW1uO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbiAgICBsZXQgaXNWYWxpZE1vdmUgPSAocm93LCBjb2x1bW4pID0+IHtcclxuXHJcbiAgICAgICAgaWYocm93IDwgMCB8fCByb3cgPj0gMTAgfHwgY29sdW1uIDwgMCB8fCBjb2x1bW4gPj0gMTApXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdXNlZE1vdmVzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYodXNlZE1vdmVzW2ldWzBdID09IHJvdyAmJiB1c2VkTW92ZXNbaV1bMV0gPT0gY29sdW1uKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcGxhY2VTaGlwUmFuZG9tbHkgPSAoc2hpcCkgPT5cclxuICAgIHtcclxuICAgICAgICBsZXQgcm93LCBjb2x1bW4sIGlzVmVydGljYWw7XHJcbiAgICAgICAgZG9cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJvdyA9IGdldFJhbmRvbU51bWJlcigwLCA5KTtcclxuICAgICAgICAgICAgY29sdW1uID0gZ2V0UmFuZG9tTnVtYmVyKDAsIDkpO1xyXG4gICAgICAgICAgICBpc1ZlcnRpY2FsID0gQm9vbGVhbihnZXRSYW5kb21OdW1iZXIoMCwgMSkpO1xyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgfXdoaWxlKCFnYW1lYm9hcmQuaXNQbGFjZUF2YWlsYWJsZShzaGlwLCByb3csIGNvbHVtbiwgaXNWZXJ0aWNhbCkpO1xyXG5cclxuICAgICAgICBnYW1lYm9hcmQucGxhY2VTaGlwKHNoaXAsIHJvdywgY29sdW1uLCBpc1ZlcnRpY2FsKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbGV0IGdldFJhbmRvbU51bWJlciA9IChtaW4gLCBtYXgpID0+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtnZXRHYW1lYm9hcmQsIGdldE5hbWUsIGhhc1dvbiwgbWFrZU1vdmUsIHBsYWNlU2hpcCwgcGxhY2VTaGlwUmFuZG9tbHksIG1ha2VSYW5kb21Nb3ZlfTtcclxuXHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBQbGF5ZXI7IiwiY29uc3QgeyBTaGlwTGVuZ2h0cyB9ID0gcmVxdWlyZShcIi4uL2hlbHBlcnNcIik7XHJcblxyXG5sZXQgU2hpcCA9IChzaGlwVHlwZSkgPT4ge1xyXG4gICAgbGV0IHR5cGUgPSBzaGlwVHlwZTtcclxuICAgIGxldCBsZW5ndGggPSBTaGlwTGVuZ2h0c1t0eXBlXTtcclxuICAgIC8vbGV0IGhpdHMgPSBBcnJheShsZW5ndGgpLmZpbGwoZmFsc2UpO1xyXG4gICAgbGV0IGhpdE5vID0gMDtcclxuXHJcbiAgICBsZXQgaGl0ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBpZihoaXRObyA8IGxlbmd0aClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgaGl0Tm8rKztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGhpdE5vO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBpc1N1bmsgPSBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICAvL2lmKGhpdHMuaW5kZXhPZihmYWxzZSkgPj0gMClcclxuICAgICAgICBpZihoaXRObyA8IGxlbmd0aClcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGVsc2UgXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlOyAgICBcclxuICAgIH1cclxuICAgIGxldCBnZXRIaXRzID0gZnVuY3Rpb24oKXtcclxuICAgICAgICByZXR1cm4gaGl0Tm87XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge3R5cGUsIGxlbmd0aCwgaGl0Tm8sIGhpdCwgaXNTdW5rLCBnZXRIaXRzfTtcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IFNoaXA7IiwiZXhwb3J0IGNvbnN0IFNoaXBMZW5naHRzID0ge1xyXG4gIGNhcnJpZXI6IDUsXHJcbiAgYmF0dGxlc2hpcDogNCxcclxuICBjcnVpc2VyOiAzLFxyXG4gIHN1Ym1hcmluZTogMyxcclxuICBkZXN0cm95ZXI6IDIsXHJcbn07XHJcbiIsImNvbnN0IFBsYXllciA9IHJlcXVpcmUoXCIuL2ZhY3Rvcmllcy9wbGF5ZXJcIik7XHJcbmNvbnN0IFNoaXAgPSByZXF1aXJlKFwiLi9mYWN0b3JpZXMvc2hpcFwiKTtcclxuaW1wb3J0IHsgZGlzcGxheUJvYXJkLCBkaXNwbGF5U2hpcFBsYWNpbmdTY3JlZW4sIHdhaXRGb3JCb2FyZCB9IGZyb20gXCIuL2RvbVwiO1xyXG5pbXBvcnQgXCIuLi9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuL2ZhY3Rvcmllcy9nYW1lXCI7XHJcblxyXG5cclxubGV0IGN1cnJlbnRHYW1lID0gR2FtZShcImh1bWFuXCIpO1xyXG5kaXNwbGF5U2hpcFBsYWNpbmdTY3JlZW4oY3VycmVudEdhbWUuaHVtYW5QbGF5ZXIuZ2V0R2FtZWJvYXJkKCkuYm9hcmQpO1xyXG5jdXJyZW50R2FtZS5pbml0aWFsaXplR2FtZSgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=