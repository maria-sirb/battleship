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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".board{\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 30px);\r\n    grid-template-rows: repeat(10, 30px);\r\n}\r\n.cell{\r\n    border: 1px solid black;\r\n}\r\n.covered-cell{\r\n    background-color: aquamarine;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,uCAAuC;IACvC,oCAAoC;AACxC;AACA;IACI,uBAAuB;AAC3B;AACA;IACI,4BAA4B;AAChC","sourcesContent":[".board{\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 30px);\r\n    grid-template-rows: repeat(10, 30px);\r\n}\r\n.cell{\r\n    border: 1px solid black;\r\n}\r\n.covered-cell{\r\n    background-color: aquamarine;\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony export */   "addClickPlace": () => (/* binding */ addClickPlace),
/* harmony export */   "addShipPlacingHover": () => (/* binding */ addShipPlacingHover),
/* harmony export */   "displayBoard": () => (/* binding */ displayBoard),
/* harmony export */   "waitForBoard": () => (/* binding */ waitForBoard)
/* harmony export */ });
function displayBoard (board) {

    let container = document.createElement("div");
    container.classList.add("board");
    let body = document.querySelector("body");
    for(let i = 0; i < board.length; i++)
    {
        for(let j = 0; j < board[i].length; j++)
        {
            let cell = document.createElement("div");
            cell.id = `${i}${j}`;
            cell.classList.add("cell");
            container.appendChild(cell);
        }
    }
    body.appendChild(container);
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
let addShipPlacingHover = (ship, isVertical) => {
    let cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.addEventListener('mouseenter', () => {
           addHoverEffect(cell, ship, isVertical);
        });
        cell.addEventListener('mouseleave', () => {
            removeHoverEffect(cell, ship, isVertical);
        });
    });
}

let addClickPlace = () => {
    let cells = document.querySelectorAll(".cell");
    let coords;
    cells.forEach(cell => {
        cell.addEventListener('click', () => {
           coords =  [Number(cell.id[0]), Number(cell.id[1])];
        });

    });
    return coords;
}

let addHoverEffect = (cell, ship, isVertical) => {

    cell.classList.add("covered-cell");
    for(let i = 0; i < ship.length; i++)
    {
         if(isVertical)
         {
             let coveredCell = document.getElementById(`${cell.id[0]}${Number(cell.id[1]) + i}`);
             coveredCell.classList.add("covered-cell");
         }
         else
         {
             console.log(ship);
             let coveredCell = document.getElementById(`${Number(cell.id[0]) + i}${cell.id[1]}`);
             coveredCell.classList.add("covered-cell");
         }
    }
}

let removeHoverEffect = (cell, ship, isVertical) => {

    cell.classList.remove("covered-cell");
   for(let i = 0; i < ship.length; i++)
   {
        if(isVertical)
        {
            let coveredCell = document.getElementById(`${cell.id[0]}${Number(cell.id[1]) + i}`);
            coveredCell.classList.remove("covered-cell");
        }
        else
        {
            let coveredCell = document.getElementById(`${Number(cell.id[0]) + i}${cell.id[1]}`);
            coveredCell.classList.remove("covered-cell");
        }
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
    let ships = ["battleship", "carrier", "cruiser", "submarine", "destoryer"];

    let placeComputerShips = () => {

        ships.forEach(ship => {
            computer.placeShipRandomly(Ship(ship));
        })
    }

    async function placeHumanShips () {

       let i = 0;
       while(i < ships.length)
       {
            (0,_dom__WEBPACK_IMPORTED_MODULE_0__.addShipPlacingHover)(Ship(ships[i]), false);
            let place = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.addClickPlace)();
            console.log(place);
            i++;
       }
    }
    async function placeShip (ship)
    {
       return await (0,_dom__WEBPACK_IMPORTED_MODULE_0__.addShipPlacingHover)(ship, false);
    }
    return {humanPlayer, computer, ships, placeComputerShips, placeHumanShips};
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
            if(row < 0 || row >= size || column < 0 || column + ship.length  >= size )
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
            if(row < 0 || row  + ship.length >= size || column < 0 || column >= size )
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
    return {board, placeShip, isPlaceAvailable, receiveAttack, isGameOver};
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
        if(nextMoves.length == 0)
        {
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
            console.log("move:" + [row, column]);
            return [row, column];
        }
        else
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
            let move, coordsPair;

            do
            {
                coordsPair = nextMoves.pop(); 
                move = makeMove(enemyGameboard, coordsPair[0], coordsPair[1]);

            }while(move == false && nextMoves.length > 0);

            console.log("move:" + coordsPair);

            if(enemyGameboard.board[coordsPair[0]][coordsPair[1]] == 1)
            {
                lastHit = coordsPair;
                AddNextMoves(coordsPair[0], coordsPair[1]);
            }
            return coordsPair;
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





let game = (0,_factories_game__WEBPACK_IMPORTED_MODULE_2__.Game)("Human");
(0,_dom__WEBPACK_IMPORTED_MODULE_0__.displayBoard)(game.humanPlayer.getGameboard().board);
//let board = await waitForBoard(".board");
//console.log(board);
//if(await board)
{
   //game.placeHumanShips();
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pMQSxRQUFRLGNBQWMsRUFBRSxtQkFBTyxDQUFDLHVDQUFZO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM5Qk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQSxlQUFlLG1CQUFPLENBQUMsd0RBQW9CO0FBQzNDLGFBQWEsbUJBQU8sQ0FBQyxvREFBa0I7QUFDWTtBQUM3QjtBQUNrQjtBQUN4QztBQUNBO0FBQ0EsV0FBVyxxREFBSTtBQUNmLGtEQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL2RvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL2ZhY3Rvcmllcy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvZmFjdG9yaWVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL2ZhY3Rvcmllcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9mYWN0b3JpZXMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5ib2FyZHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDMwcHgpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMzBweCk7XFxyXFxufVxcclxcbi5jZWxse1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuLmNvdmVyZWQtY2VsbHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYix1Q0FBdUM7SUFDdkMsb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLDRCQUE0QjtBQUNoQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYm9hcmR7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAzMHB4KTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDMwcHgpO1xcclxcbn1cXHJcXG4uY2VsbHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcbi5jb3ZlcmVkLWNlbGx7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5Qm9hcmQgKGJvYXJkKSB7XHJcblxyXG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImJvYXJkXCIpO1xyXG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBib2FyZC5sZW5ndGg7IGkrKylcclxuICAgIHtcclxuICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgYm9hcmRbaV0ubGVuZ3RoOyBqKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGNlbGwuaWQgPSBgJHtpfSR7an1gO1xyXG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xyXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2VsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gd2FpdEZvckJvYXJkIChzZWxlY3Rvcikge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKG11dGF0aW9ucyA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSkge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmJvZHksIHtcclxuICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxyXG4gICAgICAgICAgICBzdWJ0cmVlOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbn1cclxuZXhwb3J0IGxldCBhZGRTaGlwUGxhY2luZ0hvdmVyID0gKHNoaXAsIGlzVmVydGljYWwpID0+IHtcclxuICAgIGxldCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2VsbFwiKTtcclxuICAgIGNlbGxzLmZvckVhY2goY2VsbCA9PiB7XHJcbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xyXG4gICAgICAgICAgIGFkZEhvdmVyRWZmZWN0KGNlbGwsIHNoaXAsIGlzVmVydGljYWwpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcclxuICAgICAgICAgICAgcmVtb3ZlSG92ZXJFZmZlY3QoY2VsbCwgc2hpcCwgaXNWZXJ0aWNhbCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGxldCBhZGRDbGlja1BsYWNlID0gKCkgPT4ge1xyXG4gICAgbGV0IGNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jZWxsXCIpO1xyXG4gICAgbGV0IGNvb3JkcztcclxuICAgIGNlbGxzLmZvckVhY2goY2VsbCA9PiB7XHJcbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICBjb29yZHMgPSAgW051bWJlcihjZWxsLmlkWzBdKSwgTnVtYmVyKGNlbGwuaWRbMV0pXTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBjb29yZHM7XHJcbn1cclxuXHJcbmxldCBhZGRIb3ZlckVmZmVjdCA9IChjZWxsLCBzaGlwLCBpc1ZlcnRpY2FsKSA9PiB7XHJcblxyXG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY292ZXJlZC1jZWxsXCIpO1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspXHJcbiAgICB7XHJcbiAgICAgICAgIGlmKGlzVmVydGljYWwpXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgIGxldCBjb3ZlcmVkQ2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2NlbGwuaWRbMF19JHtOdW1iZXIoY2VsbC5pZFsxXSkgKyBpfWApO1xyXG4gICAgICAgICAgICAgY292ZXJlZENlbGwuY2xhc3NMaXN0LmFkZChcImNvdmVyZWQtY2VsbFwiKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNoaXApO1xyXG4gICAgICAgICAgICAgbGV0IGNvdmVyZWRDZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7TnVtYmVyKGNlbGwuaWRbMF0pICsgaX0ke2NlbGwuaWRbMV19YCk7XHJcbiAgICAgICAgICAgICBjb3ZlcmVkQ2VsbC5jbGFzc0xpc3QuYWRkKFwiY292ZXJlZC1jZWxsXCIpO1xyXG4gICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCByZW1vdmVIb3ZlckVmZmVjdCA9IChjZWxsLCBzaGlwLCBpc1ZlcnRpY2FsKSA9PiB7XHJcblxyXG4gICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwiY292ZXJlZC1jZWxsXCIpO1xyXG4gICBmb3IobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKylcclxuICAge1xyXG4gICAgICAgIGlmKGlzVmVydGljYWwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgY292ZXJlZENlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtjZWxsLmlkWzBdfSR7TnVtYmVyKGNlbGwuaWRbMV0pICsgaX1gKTtcclxuICAgICAgICAgICAgY292ZXJlZENlbGwuY2xhc3NMaXN0LnJlbW92ZShcImNvdmVyZWQtY2VsbFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGNvdmVyZWRDZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7TnVtYmVyKGNlbGwuaWRbMF0pICsgaX0ke2NlbGwuaWRbMV19YCk7XHJcbiAgICAgICAgICAgIGNvdmVyZWRDZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJjb3ZlcmVkLWNlbGxcIik7XHJcbiAgICAgICAgfVxyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBhZGRDbGlja1BsYWNlLCBhZGRTaGlwUGxhY2luZ0hvdmVyIH0gZnJvbSBcIi4uL2RvbVwiO1xyXG5cclxuY29uc3QgUGxheWVyID0gcmVxdWlyZShcIi4vcGxheWVyXCIpO1xyXG5jb25zdCBTaGlwID0gcmVxdWlyZShcIi4vc2hpcFwiKTtcclxuXHJcbmV4cG9ydCBsZXQgR2FtZSA9IChwbGF5ZXJOYW1lKSA9PlxyXG57XHJcbiAgICBsZXQgaHVtYW5QbGF5ZXIgPSBQbGF5ZXIocGxheWVyTmFtZSk7XHJcbiAgICBsZXQgY29tcHV0ZXIgPSBQbGF5ZXIoXCJDb21wdXRlclwiKTtcclxuICAgIGxldCBzaGlwcyA9IFtcImJhdHRsZXNoaXBcIiwgXCJjYXJyaWVyXCIsIFwiY3J1aXNlclwiLCBcInN1Ym1hcmluZVwiLCBcImRlc3RvcnllclwiXTtcclxuXHJcbiAgICBsZXQgcGxhY2VDb21wdXRlclNoaXBzID0gKCkgPT4ge1xyXG5cclxuICAgICAgICBzaGlwcy5mb3JFYWNoKHNoaXAgPT4ge1xyXG4gICAgICAgICAgICBjb21wdXRlci5wbGFjZVNoaXBSYW5kb21seShTaGlwKHNoaXApKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIHBsYWNlSHVtYW5TaGlwcyAoKSB7XHJcblxyXG4gICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgd2hpbGUoaSA8IHNoaXBzLmxlbmd0aClcclxuICAgICAgIHtcclxuICAgICAgICAgICAgYWRkU2hpcFBsYWNpbmdIb3ZlcihTaGlwKHNoaXBzW2ldKSwgZmFsc2UpO1xyXG4gICAgICAgICAgICBsZXQgcGxhY2UgPSBhZGRDbGlja1BsYWNlKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBsYWNlKTtcclxuICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgZnVuY3Rpb24gcGxhY2VTaGlwIChzaGlwKVxyXG4gICAge1xyXG4gICAgICAgcmV0dXJuIGF3YWl0IGFkZFNoaXBQbGFjaW5nSG92ZXIoc2hpcCwgZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtodW1hblBsYXllciwgY29tcHV0ZXIsIHNoaXBzLCBwbGFjZUNvbXB1dGVyU2hpcHMsIHBsYWNlSHVtYW5TaGlwc307XHJcbn0iLCJsZXQgR2FtZUJvYXJkID0gKGJvYXJkU2l6ZSkgPT57XHJcblxyXG4gICAgbGV0IHNpemUgPSBib2FyZFNpemU7XHJcbiAgICBsZXQgYm9hcmQgPSAgQXJyYXkuZnJvbShBcnJheShzaXplKSwgKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgQXJyYXkoc2l6ZSkuZmlsbCgwKVxyXG4gICAgfSlcclxuICAgIGxldCBzdW5rZW5TaGlwcyA9IDA7XHJcbiAgICBsZXQgc2hpcHMgPSBbXTtcclxuICAgIGxldCBwbGFjZVNoaXAgPSBmdW5jdGlvbihzaGlwLCByb3csIGNvbHVtbiwgaXNWZXJ0aWNhbClcclxuICAgIHtcclxuICAgICAgICBzaGlwcy5wdXNoKHNoaXApO1xyXG4gICAgICAgIGxldCBwb3NpdGlvbnMgPSB7cnN0YXJ0OiAtMSwgcmVuZDogLTEsIGNzdGFydDogLTEsIGNlbmQgOiAtMX07XHJcbiAgICAgICAgaWYoaXNQbGFjZUF2YWlsYWJsZShzaGlwLCByb3csIGNvbHVtbiwgaXNWZXJ0aWNhbCkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihpc1ZlcnRpY2FsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbnMucnN0YXJ0ID0gcm93O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25zLnJlbmQgPSByb3cgKyBzaGlwLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbnMuY3N0YXJ0ID0gY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25zLmNlbmQgPSBjb2x1bW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbnMucnN0YXJ0ID0gcm93O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25zLnJlbmQgPSByb3c7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbnMuY3N0YXJ0ID0gY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25zLmNlbmQgPSBjb2x1bW4gKyBzaGlwLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IHBvc2l0aW9ucy5yc3RhcnQ7IGkgPD0gIHBvc2l0aW9ucy5yZW5kOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaiA9ICBwb3NpdGlvbnMuY3N0YXJ0OyBqIDw9ICBwb3NpdGlvbnMuY2VuZDsgaisrKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvYXJkW2ldW2pdID0gc2hpcDtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcG9zaXRpb25zO1xyXG4gICAgfVxyXG4gICAgbGV0IGlzUGxhY2VBdmFpbGFibGUgPSBmdW5jdGlvbihzaGlwLCByb3csIGNvbHVtbiwgaXNWZXJ0aWNhbClcclxuICAgIHtcclxuICAgICAgICBpZighaXNWZXJ0aWNhbClcclxuICAgICAgICB7IFxyXG4gICAgICAgICAgICBpZihyb3cgPCAwIHx8IHJvdyA+PSBzaXplIHx8IGNvbHVtbiA8IDAgfHwgY29sdW1uICsgc2hpcC5sZW5ndGggID49IHNpemUgKVxyXG4gICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaiA9IGNvbHVtbjsgaiA8IGNvbHVtbiArIHNoaXAubGVuZ3RoOyBqKyspXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoYm9hcmRbcm93XVtqXSAhPSAwKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvL2NoZWNrIGZvciBzaGlwcyBvbmUgcm93IGFib3ZlXHJcbiAgICAgICAgICAgICAgICAgICAgaWYocm93IC0gMSA+PSAwICYmIGJvYXJkW3JvdyAtIDFdW2pdICE9IDApXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vY2hlY2sgZm9yIHNoaXBzIG9uZSByb3cgdW5kZXJcclxuICAgICAgICAgICAgICAgICAgICBpZihyb3cgKyAxIDwgc2l6ZSAmJiBib2FyZFtyb3cgKyAxXVtqXSAhPSAwKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL2NoZWNrIGZvciBzaGlwcyBvbmUgY29sdW1uIGxlZnRcclxuICAgICAgICAgICAgICAgIGlmKGNvbHVtbiAtIDEgPj0gMCAmJiBib2FyZFtyb3ddW2NvbHVtbiAtIDFdICE9IDApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9jaGVjayBmb3Igc2hpcHMgb25lIGNvbHVtbiByaWdodFxyXG4gICAgICAgICAgICAgICAgaWYoY29sdW1uICsgc2hpcC5sZW5ndGggPCBzaXplICYmIGJvYXJkW3Jvd11bY29sdW1uICsgc2hpcC5sZW5ndGhdICE9IDApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGlzVmVydGljYWwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihyb3cgPCAwIHx8IHJvdyAgKyBzaGlwLmxlbmd0aCA+PSBzaXplIHx8IGNvbHVtbiA8IDAgfHwgY29sdW1uID49IHNpemUgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSByb3c7IGkgPCByb3cgKyBzaGlwLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGJvYXJkW2ldW2NvbHVtbl0gIT0gMClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jaGVjayBmb3Igc2hpcHMgb25lIGNvbHVtbiBsZWZ0XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY29sdW1uIC0gMSA+PSAwICYmIGJvYXJkW2ldW2NvbHVtbiAtIDFdICE9IDApXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vY2hlY2sgZm9yIHNoaXBzIG9uZSBjb2x1bW4gcmlnaHRcclxuICAgICAgICAgICAgICAgICAgICBpZihjb2x1bW4gKyAxIDwgc2l6ZSAmJiBib2FyZFtpXVtjb2x1bW4gKyAxXSAhPSAwKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vY2hlY2sgZm9yIHNoaXBzIG9uZSByb3cgYWJvdmVcclxuICAgICAgICAgICAgICAgIGlmKHJvdyAtIDEgPj0gMCAmJiAoYm9hcmRbcm93IC0gMV1bY29sdW1uXSAhPSAwKSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL2NoZWNrIGZvciBzaGlwcyBvbmUgcm93IHVuZGVyXHJcbiAgICAgICAgICAgICAgICBpZihyb3cgKyBzaGlwLmxlbmd0aCA8IHNpemUgJiYgYm9hcmRbcm93ICsgc2hpcC5sZW5ndGhdW2NvbHVtbl0gIT0gMClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGxldCByZWNlaXZlQXR0YWNrID0gZnVuY3Rpb24ocm93LCBjb2x1bW4pXHJcbiAgICB7XHJcbiAgICAgICAgaWYoYm9hcmRbcm93XVtjb2x1bW5dID09IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBib2FyZFtyb3ddW2NvbHVtbl0gPSAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0eXBlb2YgYm9hcmRbcm93XVtjb2x1bW5dICE9IFwibnVtYmVyXCIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgIGJvYXJkW3Jvd11bY29sdW1uXS5oaXQoKTtcclxuICAgICAgICAgICBpZihib2FyZFtyb3ddW2NvbHVtbl0uaXNTdW5rKCkpXHJcbiAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc3Vua2VuU2hpcHMrKztcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAgYm9hcmRbcm93XVtjb2x1bW5dID0gMTtcclxuICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYm9hcmRbcm93XVtjb2x1bW5dO1xyXG4gICAgfVxyXG4gICAgbGV0IGlzR2FtZU92ZXIgPSBmdW5jdGlvbigpXHJcbiAgICB7XHJcbiAgICAgICAgaWYoc3Vua2VuU2hpcHMgPT0gc2hpcHMubGVuZ3RoKVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB7Ym9hcmQsIHBsYWNlU2hpcCwgaXNQbGFjZUF2YWlsYWJsZSwgcmVjZWl2ZUF0dGFjaywgaXNHYW1lT3Zlcn07XHJcbn0gXHJcbm1vZHVsZS5leHBvcnRzID0gR2FtZUJvYXJkOyIsImNvbnN0IEdhbWVCb2FyZCA9IHJlcXVpcmUoXCIuL2dhbWVib2FyZFwiKTtcclxuXHJcbmxldCBQbGF5ZXIgPSAocGxheWVyTmFtZSkgPT4ge1xyXG4gICAgbGV0IGdhbWVib2FyZCA9IEdhbWVCb2FyZCgxMCk7XHJcbiAgICBsZXQgbmFtZSA9IHBsYXllck5hbWU7XHJcbiAgICBsZXQgdXNlZE1vdmVzID0gW107XHJcbiAgICBsZXQgbmV4dE1vdmVzID0gW107XHJcbiAgICBsZXQgbGFzdEhpdDtcclxuICAgIGxldCB3b24gPSBmYWxzZTtcclxuXHJcbiAgICBsZXQgZ2V0R2FtZWJvYXJkID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBnYW1lYm9hcmQ7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGdldE5hbWUgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG5hbWU7XHJcbiAgICB9XHJcbiAgICBsZXQgaGFzV29uID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB3b247XHJcbiAgICB9XHJcbiAgICBsZXQgcGxhY2VTaGlwID0gKHNoaXAsIHJvdywgY29sdW1uLCBpc1ZlcmljYWwpID0+IHtcclxuXHJcbiAgICAgICBpZihnYW1lYm9hcmQucGxhY2VTaGlwKHNoaXAsIHJvdywgY29sdW1uLCBpc1ZlcmljYWwpLnJzdGFydCAhPSAtMSlcclxuICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICB9XHJcbiAgICAgICBlbHNlIFxyXG4gICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG1ha2VNb3ZlID0gKGVuZW15R2FtZWJvYXJkLCByb3csIGNvbHVtbikgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGlzVmFsaWRNb3ZlKHJvdywgY29sdW1uKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHVzZWRNb3Zlcy5wdXNoKFtyb3csIGNvbHVtbl0pO1xyXG4gICAgICAgICAgICBlbmVteUdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHJvdywgY29sdW1uKTtcclxuICAgICAgICAgICAgaWYoZW5lbXlHYW1lYm9hcmQuaXNHYW1lT3ZlcigpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB3b24gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG1ha2VSYW5kb21Nb3ZlID0gKGVuZW15R2FtZWJvYXJkKSA9PiB7XHJcblxyXG4gICAgICAgIC8vaWYgdGhlcmUgYXJlIG5vIG5leHQgbW92ZXMgbWFrZSByYW5kb20gbW92ZVxyXG4gICAgICAgIGlmKG5leHRNb3Zlcy5sZW5ndGggPT0gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCByb3csIGNvbHVtbiwgbW92ZTtcclxuICAgICAgICAgICAgZG9cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcm93ID0gZ2V0UmFuZG9tTnVtYmVyKDAsIDkpO1xyXG4gICAgICAgICAgICAgICAgY29sdW1uID0gZ2V0UmFuZG9tTnVtYmVyKDAsIDkpO1xyXG4gICAgICAgICAgICAgICAgbW92ZSA9IG1ha2VNb3ZlKGVuZW15R2FtZWJvYXJkLCByb3csIGNvbHVtbik7XHJcblxyXG4gICAgICAgICAgICB9d2hpbGUobW92ZSA9PSBmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICBpZihlbmVteUdhbWVib2FyZC5ib2FyZFtyb3ddW2NvbHVtbl0gPT0gMSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGFzdEhpdCA9IFtyb3csIGNvbHVtbl07XHJcbiAgICAgICAgICAgICAgICBBZGROZXh0TW92ZXMocm93LCBjb2x1bW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibW92ZTpcIiArIFtyb3csIGNvbHVtbl0pO1xyXG4gICAgICAgICAgICByZXR1cm4gW3JvdywgY29sdW1uXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGNvbHVtbiA9IC0xLCByb3cgPSAtMTtcclxuICAgICAgICAgICAgLy9jaGVjayBmb3IgdHdvIGhpdHMgaW4gYSByb3cgKHR3byAxKVxyXG4gICAgICAgICAgICAvL2lmIHdlIGZpbmQgaXQsIHdlIG9ubHkga2VlcCB0aGUgbmV4dCBtb3ZlcyBvbiB0aGF0IHJvdyBvciBjb2x1bW5cclxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IG5leHRNb3Zlcy5sZW5ndGg7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5laWdoYm91ciA9IG5leHRNb3Zlc1tpXTtcclxuICAgICAgICAgICAgICAgIGlmKGVuZW15R2FtZWJvYXJkLmJvYXJkW25laWdoYm91clswXV1bbmVpZ2hib3VyWzFdXSA9PSAxKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKG5laWdoYm91clswXSA9PSBsYXN0SGl0WzBdKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm93ID0gbGFzdEhpdFswXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZihuZWlnaGJvdXJbMV0gPT0gbGFzdEhpdFsxXSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbiA9IGxhc3RIaXRbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBBbHRlck5leHRNb3Zlcyhyb3csIGNvbHVtbik7XHJcbiAgICAgICAgICAgIGxldCBtb3ZlLCBjb29yZHNQYWlyO1xyXG5cclxuICAgICAgICAgICAgZG9cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29vcmRzUGFpciA9IG5leHRNb3Zlcy5wb3AoKTsgXHJcbiAgICAgICAgICAgICAgICBtb3ZlID0gbWFrZU1vdmUoZW5lbXlHYW1lYm9hcmQsIGNvb3Jkc1BhaXJbMF0sIGNvb3Jkc1BhaXJbMV0pO1xyXG5cclxuICAgICAgICAgICAgfXdoaWxlKG1vdmUgPT0gZmFsc2UgJiYgbmV4dE1vdmVzLmxlbmd0aCA+IDApO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJtb3ZlOlwiICsgY29vcmRzUGFpcik7XHJcblxyXG4gICAgICAgICAgICBpZihlbmVteUdhbWVib2FyZC5ib2FyZFtjb29yZHNQYWlyWzBdXVtjb29yZHNQYWlyWzFdXSA9PSAxKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsYXN0SGl0ID0gY29vcmRzUGFpcjtcclxuICAgICAgICAgICAgICAgIEFkZE5leHRNb3Zlcyhjb29yZHNQYWlyWzBdLCBjb29yZHNQYWlyWzFdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gY29vcmRzUGFpcjtcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbmxldCBBZGROZXh0TW92ZXMgPSAocm93LCBjb2x1bW4pID0+IHtcclxuXHJcbiAgICBpZihjb2x1bW4gKyAxIDwgMTApXHJcbiAgICAgICAgbmV4dE1vdmVzLnB1c2goW3JvdywgY29sdW1uICsgMV0pO1xyXG4gICAgaWYoY29sdW1uIC0gMSA+PSAwKVxyXG4gICAgICAgIG5leHRNb3Zlcy5wdXNoKFtyb3csIGNvbHVtbiAtIDFdKTtcclxuICAgIGlmKHJvdyAtIDEgPj0gMClcclxuICAgICAgICBuZXh0TW92ZXMucHVzaChbcm93IC0gMSwgY29sdW1uXSk7XHJcbiAgICBpZihyb3cgKyAxIDwgMTApXHJcbiAgICAgICAgbmV4dE1vdmVzLnB1c2goW3JvdyArIDEsIGNvbHVtbl0pO1xyXG59XHJcblxyXG5sZXQgQWx0ZXJOZXh0TW92ZXMgPSAocm93LCBjb2x1bW4pID0+IHtcclxuICAgIGlmKHJvdyAhPSAtMSlcclxuICAgIHtcclxuICAgICAgICBuZXh0TW92ZXMgPSBuZXh0TW92ZXMuZmlsdGVyKChjb29yZHNQYWlyKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb29yZHNQYWlyWzBdID09IHJvdztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoY29sdW1uICE9IC0gMSlcclxuICAgIHtcclxuICAgICAgIG5leHRNb3ZlcyA9IG5leHRNb3Zlcy5maWx0ZXIoKGNvb3Jkc1BhaXIpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvb3Jkc1BhaXJbMV0gPT0gY29sdW1uO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbiAgICBsZXQgaXNWYWxpZE1vdmUgPSAocm93LCBjb2x1bW4pID0+IHtcclxuXHJcbiAgICAgICAgaWYocm93IDwgMCB8fCByb3cgPj0gMTAgfHwgY29sdW1uIDwgMCB8fCBjb2x1bW4gPj0gMTApXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdXNlZE1vdmVzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYodXNlZE1vdmVzW2ldWzBdID09IHJvdyAmJiB1c2VkTW92ZXNbaV1bMV0gPT0gY29sdW1uKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcGxhY2VTaGlwUmFuZG9tbHkgPSAoc2hpcCkgPT5cclxuICAgIHtcclxuICAgICAgICBsZXQgcm93LCBjb2x1bW4sIGlzVmVydGljYWw7XHJcbiAgICAgICAgZG9cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJvdyA9IGdldFJhbmRvbU51bWJlcigwLCA5KTtcclxuICAgICAgICAgICAgY29sdW1uID0gZ2V0UmFuZG9tTnVtYmVyKDAsIDkpO1xyXG4gICAgICAgICAgICBpc1ZlcnRpY2FsID0gQm9vbGVhbihnZXRSYW5kb21OdW1iZXIoMCwgMSkpO1xyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgfXdoaWxlKCFnYW1lYm9hcmQuaXNQbGFjZUF2YWlsYWJsZShzaGlwLCByb3csIGNvbHVtbiwgaXNWZXJ0aWNhbCkpO1xyXG5cclxuICAgICAgICBnYW1lYm9hcmQucGxhY2VTaGlwKHNoaXAsIHJvdywgY29sdW1uLCBpc1ZlcnRpY2FsKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbGV0IGdldFJhbmRvbU51bWJlciA9IChtaW4gLCBtYXgpID0+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtnZXRHYW1lYm9hcmQsIGdldE5hbWUsIGhhc1dvbiwgbWFrZU1vdmUsIHBsYWNlU2hpcCwgcGxhY2VTaGlwUmFuZG9tbHksIG1ha2VSYW5kb21Nb3ZlfTtcclxuXHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBQbGF5ZXI7IiwiY29uc3QgeyBTaGlwTGVuZ2h0cyB9ID0gcmVxdWlyZShcIi4uL2hlbHBlcnNcIik7XHJcblxyXG5sZXQgU2hpcCA9IChzaGlwVHlwZSkgPT4ge1xyXG4gICAgbGV0IHR5cGUgPSBzaGlwVHlwZTtcclxuICAgIGxldCBsZW5ndGggPSBTaGlwTGVuZ2h0c1t0eXBlXTtcclxuICAgIC8vbGV0IGhpdHMgPSBBcnJheShsZW5ndGgpLmZpbGwoZmFsc2UpO1xyXG4gICAgbGV0IGhpdE5vID0gMDtcclxuXHJcbiAgICBsZXQgaGl0ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBpZihoaXRObyA8IGxlbmd0aClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgaGl0Tm8rKztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGhpdE5vO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBpc1N1bmsgPSBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICAvL2lmKGhpdHMuaW5kZXhPZihmYWxzZSkgPj0gMClcclxuICAgICAgICBpZihoaXRObyA8IGxlbmd0aClcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGVsc2UgXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlOyAgICBcclxuICAgIH1cclxuICAgIGxldCBnZXRIaXRzID0gZnVuY3Rpb24oKXtcclxuICAgICAgICByZXR1cm4gaGl0Tm87XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge3R5cGUsIGxlbmd0aCwgaGl0Tm8sIGhpdCwgaXNTdW5rLCBnZXRIaXRzfTtcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IFNoaXA7IiwiZXhwb3J0IGNvbnN0IFNoaXBMZW5naHRzID0ge1xyXG4gIGNhcnJpZXI6IDUsXHJcbiAgYmF0dGxlc2hpcDogNCxcclxuICBjcnVpc2VyOiAzLFxyXG4gIHN1Ym1hcmluZTogMyxcclxuICBkZXN0cm95ZXI6IDIsXHJcbn07XHJcbiIsImNvbnN0IFBsYXllciA9IHJlcXVpcmUoXCIuL2ZhY3Rvcmllcy9wbGF5ZXJcIik7XHJcbmNvbnN0IFNoaXAgPSByZXF1aXJlKFwiLi9mYWN0b3JpZXMvc2hpcFwiKTtcclxuaW1wb3J0IHsgZGlzcGxheUJvYXJkLCB3YWl0Rm9yQm9hcmQgfSBmcm9tIFwiLi9kb21cIjtcclxuaW1wb3J0IFwiLi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi9mYWN0b3JpZXMvZ2FtZVwiO1xyXG5cclxuXHJcbmxldCBnYW1lID0gR2FtZShcIkh1bWFuXCIpO1xyXG5kaXNwbGF5Qm9hcmQoZ2FtZS5odW1hblBsYXllci5nZXRHYW1lYm9hcmQoKS5ib2FyZCk7XHJcbi8vbGV0IGJvYXJkID0gYXdhaXQgd2FpdEZvckJvYXJkKFwiLmJvYXJkXCIpO1xyXG4vL2NvbnNvbGUubG9nKGJvYXJkKTtcclxuLy9pZihhd2FpdCBib2FyZClcclxue1xyXG4gICAvL2dhbWUucGxhY2VIdW1hblNoaXBzKCk7XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=