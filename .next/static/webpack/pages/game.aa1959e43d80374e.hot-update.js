"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/game",{

/***/ "./pages/game/index.tsx":
/*!******************************!*\
  !*** ./pages/game/index.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _game_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.module.css */ \"./pages/game/game.module.css\");\n/* harmony import */ var _game_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_game_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_CharacterSelector_CharacterSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/CharacterSelector/CharacterSelector */ \"./components/CharacterSelector/CharacterSelector.tsx\");\n/* harmony import */ var _components_Encounters_Encounters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Encounters/Encounters */ \"./components/Encounters/Encounters.tsx\");\n/* harmony import */ var _components_PageTemplate_PageTemplate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/PageTemplate/PageTemplate */ \"./components/PageTemplate/PageTemplate.tsx\");\n/* harmony import */ var _components_UpgradeMenu_UpgradeMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/UpgradeMenu/UpgradeMenu */ \"./components/UpgradeMenu/UpgradeMenu.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Index = ()=>{\n    _s();\n    const [character, setCharacter] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [playerHealth, setPlayerHealth] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [playerMoney, setPlayerMoney] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [playerUpgradePoints, setPlayerUpgradePoints] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [resultMessage, setResultMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (character) {\n            setPlayerHealth(character.health);\n            setPlayerMoney(character.money);\n            setPlayerUpgradePoints(0);\n        }\n    }, [\n        character\n    ]);\n    const applyHealthUpgrade = (upgradeAmount)=>{\n        if (upgradeAmount > character.money) {\n            return;\n        } else {\n            setPlayerHealth((prevHealth)=>prevHealth + upgradeAmount);\n            setPlayerMoney(playerMoney - upgradeAmount);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_game_module_css__WEBPACK_IMPORTED_MODULE_1___default().body),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PageTemplate_PageTemplate__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_game_module_css__WEBPACK_IMPORTED_MODULE_1___default().wrapper),\n                children: [\n                    !character ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CharacterSelector_CharacterSelector__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        setCharacter: setCharacter\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\pages\\\\game\\\\index.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 13\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\pages\\\\game\\\\index.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 13\n                    }, undefined),\n                    character && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Encounters_Encounters__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                characterHealth: playerHealth,\n                                setCharacterHealth: setPlayerHealth,\n                                upgradePoints: playerUpgradePoints,\n                                setUpgradePoints: setPlayerUpgradePoints,\n                                characterMoney: playerMoney,\n                                setCharacterMoney: setPlayerMoney,\n                                setResultMessage: setResultMessage\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\pages\\\\game\\\\index.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UpgradeMenu_UpgradeMenu__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                applyHealthUpgrade: applyHealthUpgrade\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\pages\\\\game\\\\index.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true),\n                    resultMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_game_module_css__WEBPACK_IMPORTED_MODULE_1___default().resultMessage),\n                        children: [\n                            \"Choice outcome: \",\n                            resultMessage\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\pages\\\\game\\\\index.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_game_module_css__WEBPACK_IMPORTED_MODULE_1___default().health),\n                        children: character && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                \"Health:\",\n                                \" \",\n                                playerHealth !== null ? playerHealth : character.health\n                            ]\n                        }, void 0, true)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\pages\\\\game\\\\index.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_game_module_css__WEBPACK_IMPORTED_MODULE_1___default().money),\n                        children: character && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                \"Money: \",\n                                playerMoney !== null ? playerMoney : character.money\n                            ]\n                        }, void 0, true)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\pages\\\\game\\\\index.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_game_module_css__WEBPACK_IMPORTED_MODULE_1___default().upgradePoints),\n                        children: character && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                \"Upgrade points: \",\n                                playerUpgradePoints\n                            ]\n                        }, void 0, true)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\pages\\\\game\\\\index.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\pages\\\\game\\\\index.tsx\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\pages\\\\game\\\\index.tsx\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\pages\\\\game\\\\index.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Index, \"sbVjqwEO61QMumUsE8s9MJpFPFc=\");\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9nYW1lL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ1k7QUFDa0M7QUFDckI7QUFDTTtBQUNIO0FBRW5FLE1BQU1RLFFBQVE7O0lBQ1osTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdQLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ1EsY0FBY0MsZ0JBQWdCLEdBQUdULCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ1UsYUFBYUMsZUFBZSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNZLHFCQUFxQkMsdUJBQXVCLEdBQUdiLCtDQUFRQSxDQUFDO0lBQy9ELE1BQU0sQ0FBQ2MsZUFBZUMsaUJBQWlCLEdBQUdmLCtDQUFRQSxDQUFDO0lBRW5ERCxnREFBU0EsQ0FBQztRQUNSLElBQUlPLFdBQVc7WUFDYkcsZ0JBQWdCSCxVQUFVVSxNQUFNO1lBQ2hDTCxlQUFlTCxVQUFVVyxLQUFLO1lBQzlCSix1QkFBdUI7UUFDekI7SUFDRixHQUFHO1FBQUNQO0tBQVU7SUFFZCxNQUFNWSxxQkFBcUIsQ0FBQ0M7UUFDMUIsSUFBSUEsZ0JBQWdCYixVQUFVVyxLQUFLLEVBQUU7WUFDbkM7UUFDRixPQUFPO1lBQ0xSLGdCQUFnQixDQUFDVyxhQUFlQSxhQUFhRDtZQUM3Q1IsZUFBZUQsY0FBY1M7UUFDL0I7SUFDRjtJQUVBLHFCQUNFLDhEQUFDRTtRQUFJQyxXQUFXekIsOERBQVc7a0JBQ3pCLDRFQUFDTSw2RUFBWUE7c0JBQ1gsNEVBQUNrQjtnQkFBSUMsV0FBV3pCLGlFQUFjOztvQkFDM0IsQ0FBQ1MsMEJBQ0EsOERBQUNMLHVGQUFpQkE7d0JBQUNNLGNBQWNBOzs7OztrREFFakMsOERBQUNjOzs7OztvQkFHRmYsMkJBQ0M7OzBDQUNFLDhEQUFDSix5RUFBVUE7Z0NBQ1R1QixpQkFBaUJqQjtnQ0FDakJrQixvQkFBb0JqQjtnQ0FDcEJrQixlQUFlZjtnQ0FDZmdCLGtCQUFrQmY7Z0NBQ2xCZ0IsZ0JBQWdCbkI7Z0NBQ2hCb0IsbUJBQW1CbkI7Z0NBQ25CSSxrQkFBa0JBOzs7Ozs7MENBRXBCLDhEQUFDWCwyRUFBV0E7Z0NBQUNjLG9CQUFvQkE7Ozs7Ozs7O29CQUlwQ0osK0JBQ0MsOERBQUNPO3dCQUFJQyxXQUFXekIsdUVBQW9COzs0QkFBRTs0QkFDbkJpQjs7Ozs7OztrQ0FJckIsOERBQUNPO3dCQUFJQyxXQUFXekIsZ0VBQWE7a0NBQzFCUywyQkFDQzs7Z0NBQUU7Z0NBQ1E7Z0NBQ1BFLGlCQUFpQixPQUFPQSxlQUFlRixVQUFVVSxNQUFNOzs7Ozs7OztrQ0FJOUQsOERBQUNLO3dCQUFJQyxXQUFXekIsK0RBQVk7a0NBQ3pCUywyQkFDQzs7Z0NBQUU7Z0NBQVFJLGdCQUFnQixPQUFPQSxjQUFjSixVQUFVVyxLQUFLOzs7Ozs7OztrQ0FHbEUsOERBQUNJO3dCQUFJQyxXQUFXekIsdUVBQW9CO2tDQUNqQ1MsMkJBQWE7O2dDQUFFO2dDQUFpQk07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU03QztHQTNFTVA7S0FBQUE7QUE2RU4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2FtZS9pbmRleC50c3g/YjhhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL2dhbWUubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2hhcmFjdGVyU2VsZWN0b3IgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ2hhcmFjdGVyU2VsZWN0b3IvQ2hhcmFjdGVyU2VsZWN0b3JcIjtcclxuaW1wb3J0IEVuY291bnRlcnMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRW5jb3VudGVycy9FbmNvdW50ZXJzXCI7XHJcbmltcG9ydCBQYWdlVGVtcGxhdGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUGFnZVRlbXBsYXRlL1BhZ2VUZW1wbGF0ZVwiO1xyXG5pbXBvcnQgVXBncmFkZU1lbnUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVXBncmFkZU1lbnUvVXBncmFkZU1lbnVcIjtcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtjaGFyYWN0ZXIsIHNldENoYXJhY3Rlcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbcGxheWVySGVhbHRoLCBzZXRQbGF5ZXJIZWFsdGhdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3BsYXllck1vbmV5LCBzZXRQbGF5ZXJNb25leV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbcGxheWVyVXBncmFkZVBvaW50cywgc2V0UGxheWVyVXBncmFkZVBvaW50c10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbcmVzdWx0TWVzc2FnZSwgc2V0UmVzdWx0TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChjaGFyYWN0ZXIpIHtcclxuICAgICAgc2V0UGxheWVySGVhbHRoKGNoYXJhY3Rlci5oZWFsdGgpO1xyXG4gICAgICBzZXRQbGF5ZXJNb25leShjaGFyYWN0ZXIubW9uZXkpO1xyXG4gICAgICBzZXRQbGF5ZXJVcGdyYWRlUG9pbnRzKDApO1xyXG4gICAgfVxyXG4gIH0sIFtjaGFyYWN0ZXJdKTtcclxuXHJcbiAgY29uc3QgYXBwbHlIZWFsdGhVcGdyYWRlID0gKHVwZ3JhZGVBbW91bnQpID0+IHtcclxuICAgIGlmICh1cGdyYWRlQW1vdW50ID4gY2hhcmFjdGVyLm1vbmV5KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFBsYXllckhlYWx0aCgocHJldkhlYWx0aCkgPT4gcHJldkhlYWx0aCArIHVwZ3JhZGVBbW91bnQpO1xyXG4gICAgICBzZXRQbGF5ZXJNb25leShwbGF5ZXJNb25leSAtIHVwZ3JhZGVBbW91bnQpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvZHl9PlxyXG4gICAgICA8UGFnZVRlbXBsYXRlPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XHJcbiAgICAgICAgICB7IWNoYXJhY3RlciA/IChcclxuICAgICAgICAgICAgPENoYXJhY3RlclNlbGVjdG9yIHNldENoYXJhY3Rlcj17c2V0Q2hhcmFjdGVyfSAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAge2NoYXJhY3RlciAmJiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPEVuY291bnRlcnNcclxuICAgICAgICAgICAgICAgIGNoYXJhY3RlckhlYWx0aD17cGxheWVySGVhbHRofVxyXG4gICAgICAgICAgICAgICAgc2V0Q2hhcmFjdGVySGVhbHRoPXtzZXRQbGF5ZXJIZWFsdGh9XHJcbiAgICAgICAgICAgICAgICB1cGdyYWRlUG9pbnRzPXtwbGF5ZXJVcGdyYWRlUG9pbnRzfVxyXG4gICAgICAgICAgICAgICAgc2V0VXBncmFkZVBvaW50cz17c2V0UGxheWVyVXBncmFkZVBvaW50c31cclxuICAgICAgICAgICAgICAgIGNoYXJhY3Rlck1vbmV5PXtwbGF5ZXJNb25leX1cclxuICAgICAgICAgICAgICAgIHNldENoYXJhY3Rlck1vbmV5PXtzZXRQbGF5ZXJNb25leX1cclxuICAgICAgICAgICAgICAgIHNldFJlc3VsdE1lc3NhZ2U9e3NldFJlc3VsdE1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8VXBncmFkZU1lbnUgYXBwbHlIZWFsdGhVcGdyYWRlPXthcHBseUhlYWx0aFVwZ3JhZGV9IC8+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICB7cmVzdWx0TWVzc2FnZSAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVzdWx0TWVzc2FnZX0+XHJcbiAgICAgICAgICAgICAgQ2hvaWNlIG91dGNvbWU6IHtyZXN1bHRNZXNzYWdlfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFsdGh9PlxyXG4gICAgICAgICAgICB7Y2hhcmFjdGVyICYmIChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgSGVhbHRoOntcIiBcIn1cclxuICAgICAgICAgICAgICAgIHtwbGF5ZXJIZWFsdGggIT09IG51bGwgPyBwbGF5ZXJIZWFsdGggOiBjaGFyYWN0ZXIuaGVhbHRofVxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vbmV5fT5cclxuICAgICAgICAgICAge2NoYXJhY3RlciAmJiAoXHJcbiAgICAgICAgICAgICAgPD5Nb25leToge3BsYXllck1vbmV5ICE9PSBudWxsID8gcGxheWVyTW9uZXkgOiBjaGFyYWN0ZXIubW9uZXl9PC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXBncmFkZVBvaW50c30+XHJcbiAgICAgICAgICAgIHtjaGFyYWN0ZXIgJiYgPD5VcGdyYWRlIHBvaW50czoge3BsYXllclVwZ3JhZGVQb2ludHN9PC8+fVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvUGFnZVRlbXBsYXRlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXSwibmFtZXMiOlsic3R5bGVzIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNoYXJhY3RlclNlbGVjdG9yIiwiRW5jb3VudGVycyIsIlBhZ2VUZW1wbGF0ZSIsIlVwZ3JhZGVNZW51IiwiSW5kZXgiLCJjaGFyYWN0ZXIiLCJzZXRDaGFyYWN0ZXIiLCJwbGF5ZXJIZWFsdGgiLCJzZXRQbGF5ZXJIZWFsdGgiLCJwbGF5ZXJNb25leSIsInNldFBsYXllck1vbmV5IiwicGxheWVyVXBncmFkZVBvaW50cyIsInNldFBsYXllclVwZ3JhZGVQb2ludHMiLCJyZXN1bHRNZXNzYWdlIiwic2V0UmVzdWx0TWVzc2FnZSIsImhlYWx0aCIsIm1vbmV5IiwiYXBwbHlIZWFsdGhVcGdyYWRlIiwidXBncmFkZUFtb3VudCIsInByZXZIZWFsdGgiLCJkaXYiLCJjbGFzc05hbWUiLCJib2R5Iiwid3JhcHBlciIsImNoYXJhY3RlckhlYWx0aCIsInNldENoYXJhY3RlckhlYWx0aCIsInVwZ3JhZGVQb2ludHMiLCJzZXRVcGdyYWRlUG9pbnRzIiwiY2hhcmFjdGVyTW9uZXkiLCJzZXRDaGFyYWN0ZXJNb25leSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/game/index.tsx\n"));

/***/ })

});