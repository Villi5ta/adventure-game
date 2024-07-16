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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _game_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.module.css */ \"./pages/game/game.module.css\");\n/* harmony import */ var _game_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_game_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_CharacterSelector_CharacterSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/CharacterSelector/CharacterSelector */ \"./components/CharacterSelector/CharacterSelector.tsx\");\n/* harmony import */ var _components_Encounters_Encounters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Encounters/Encounters */ \"./components/Encounters/Encounters.tsx\");\n/* harmony import */ var _components_PageTemplate_PageTemplate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/PageTemplate/PageTemplate */ \"./components/PageTemplate/PageTemplate.tsx\");\n/* harmony import */ var _components_UpgradeMenu_UpgradeMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/UpgradeMenu/UpgradeMenu */ \"./components/UpgradeMenu/UpgradeMenu.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Index = ()=>{\n    _s();\n    const [character, setCharacter] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [playerHealth, setPlayerHealth] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [playerMoney, setPlayerMoney] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [playerUpgradePoints, setPlayerUpgradePoints] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [resultMessage, setResultMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [toggleMessage, setToggleMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (character) {\n            setPlayerHealth(character.health);\n            setPlayerMoney(character.money);\n            setPlayerUpgradePoints(0);\n        }\n    }, [\n        character\n    ]);\n    const applyHealthUpgrade = (upgradeAmount)=>{\n        if (upgradeAmount > playerUpgradePoints) {\n            setToggleMessage(true);\n            setTimeout(()=>{\n                setToggleMessage(false);\n            }, 3000);\n            return;\n        } else {\n            setPlayerHealth((prevHealth)=>prevHealth + upgradeAmount);\n            setPlayerUpgradePoints((prevUpgradePoints)=>prevUpgradePoints - upgradeAmount);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_game_module_css__WEBPACK_IMPORTED_MODULE_1___default().body),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PageTemplate_PageTemplate__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_game_module_css__WEBPACK_IMPORTED_MODULE_1___default().wrapper),\n                children: [\n                    !character ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CharacterSelector_CharacterSelector__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        setCharacter: setCharacter\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\pages\\\\game\\\\index.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 13\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\pages\\\\game\\\\index.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 13\n                    }, undefined),\n                    character && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Encounters_Encounters__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            characterHealth: playerHealth,\n                            setCharacterHealth: setPlayerHealth,\n                            upgradePoints: playerUpgradePoints,\n                            setUpgradePoints: setPlayerUpgradePoints,\n                            characterMoney: playerMoney,\n                            setCharacterMoney: setPlayerMoney,\n                            setResultMessage: setResultMessage\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\pages\\\\game\\\\index.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false),\n                    resultMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_game_module_css__WEBPACK_IMPORTED_MODULE_1___default().resultMessage),\n                        children: [\n                            \"Choice outcome: \",\n                            resultMessage\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\pages\\\\game\\\\index.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_game_module_css__WEBPACK_IMPORTED_MODULE_1___default().health),\n                        children: character && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                \"Health:\",\n                                \" \",\n                                playerHealth !== null ? playerHealth : character.health\n                            ]\n                        }, void 0, true)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\pages\\\\game\\\\index.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_game_module_css__WEBPACK_IMPORTED_MODULE_1___default().money),\n                        children: character && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                \"Money: \",\n                                playerMoney !== null ? playerMoney : character.money\n                            ]\n                        }, void 0, true)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\pages\\\\game\\\\index.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_game_module_css__WEBPACK_IMPORTED_MODULE_1___default().upgradePoints),\n                        children: [\n                            character && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: [\n                                    \"Upgrade points: \",\n                                    playerUpgradePoints\n                                ]\n                            }, void 0, true),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: character && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UpgradeMenu_UpgradeMenu__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    applyHealthUpgrade: applyHealthUpgrade\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\pages\\\\game\\\\index.tsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false),\n                            toggleMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"Not enough upgrade points\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\pages\\\\game\\\\index.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 31\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\pages\\\\game\\\\index.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\pages\\\\game\\\\index.tsx\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\pages\\\\game\\\\index.tsx\",\n            lineNumber: 42,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\pages\\\\game\\\\index.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Index, \"5jgRNipZnD76DkQ0UhfVF/br+H0=\");\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9nYW1lL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ1k7QUFDa0M7QUFDckI7QUFDTTtBQUNIO0FBRW5FLE1BQU1RLFFBQVE7O0lBQ1osTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdQLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ1EsY0FBY0MsZ0JBQWdCLEdBQUdULCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ1UsYUFBYUMsZUFBZSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNZLHFCQUFxQkMsdUJBQXVCLEdBQUdiLCtDQUFRQSxDQUFDO0lBQy9ELE1BQU0sQ0FBQ2MsZUFBZUMsaUJBQWlCLEdBQUdmLCtDQUFRQSxDQUFDO0lBQ25ELE1BQU0sQ0FBQ2dCLGVBQWVDLGlCQUFpQixHQUFHakIsK0NBQVFBLENBQUM7SUFFbkRELGdEQUFTQSxDQUFDO1FBQ1IsSUFBSU8sV0FBVztZQUNiRyxnQkFBZ0JILFVBQVVZLE1BQU07WUFDaENQLGVBQWVMLFVBQVVhLEtBQUs7WUFDOUJOLHVCQUF1QjtRQUN6QjtJQUNGLEdBQUc7UUFBQ1A7S0FBVTtJQUVkLE1BQU1jLHFCQUFxQixDQUFDQztRQUMxQixJQUFJQSxnQkFBZ0JULHFCQUFxQjtZQUN2Q0ssaUJBQWlCO1lBQ2pCSyxXQUFXO2dCQUNUTCxpQkFBaUI7WUFDbkIsR0FBRztZQUVIO1FBQ0YsT0FBTztZQUNMUixnQkFBZ0IsQ0FBQ2MsYUFBZUEsYUFBYUY7WUFDN0NSLHVCQUNFLENBQUNXLG9CQUFzQkEsb0JBQW9CSDtRQUUvQztJQUNGO0lBRUEscUJBQ0UsOERBQUNJO1FBQUlDLFdBQVc3Qiw4REFBVztrQkFDekIsNEVBQUNNLDZFQUFZQTtzQkFDWCw0RUFBQ3NCO2dCQUFJQyxXQUFXN0IsaUVBQWM7O29CQUMzQixDQUFDUywwQkFDQSw4REFBQ0wsdUZBQWlCQTt3QkFBQ00sY0FBY0E7Ozs7O2tEQUVqQyw4REFBQ2tCOzs7OztvQkFHRm5CLDJCQUNDO2tDQUNFLDRFQUFDSix5RUFBVUE7NEJBQ1QyQixpQkFBaUJyQjs0QkFDakJzQixvQkFBb0JyQjs0QkFDcEJzQixlQUFlbkI7NEJBQ2ZvQixrQkFBa0JuQjs0QkFDbEJvQixnQkFBZ0J2Qjs0QkFDaEJ3QixtQkFBbUJ2Qjs0QkFDbkJJLGtCQUFrQkE7Ozs7Ozs7b0JBS3ZCRCwrQkFDQyw4REFBQ1c7d0JBQUlDLFdBQVc3Qix1RUFBb0I7OzRCQUFFOzRCQUNuQmlCOzs7Ozs7O2tDQUlyQiw4REFBQ1c7d0JBQUlDLFdBQVc3QixnRUFBYTtrQ0FDMUJTLDJCQUNDOztnQ0FBRTtnQ0FDUTtnQ0FDUEUsaUJBQWlCLE9BQU9BLGVBQWVGLFVBQVVZLE1BQU07Ozs7Ozs7O2tDQUk5RCw4REFBQ087d0JBQUlDLFdBQVc3QiwrREFBWTtrQ0FDekJTLDJCQUNDOztnQ0FBRTtnQ0FBUUksZ0JBQWdCLE9BQU9BLGNBQWNKLFVBQVVhLEtBQUs7Ozs7Ozs7O2tDQUdsRSw4REFBQ007d0JBQUlDLFdBQVc3Qix1RUFBb0I7OzRCQUNqQ1MsMkJBQWE7O29DQUFFO29DQUFpQk07OzswQ0FDakM7MENBQ0dOLDJCQUNDLDhEQUFDRiwyRUFBV0E7b0NBQUNnQixvQkFBb0JBOzs7Ozs7OzRCQUlwQ0osK0JBQWlCLDhEQUFDUzswQ0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1uQztHQXpGTXBCO0tBQUFBO0FBMkZOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2dhbWUvaW5kZXgudHN4P2I4YTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9nYW1lLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENoYXJhY3RlclNlbGVjdG9yIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0NoYXJhY3RlclNlbGVjdG9yL0NoYXJhY3RlclNlbGVjdG9yXCI7XHJcbmltcG9ydCBFbmNvdW50ZXJzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0VuY291bnRlcnMvRW5jb3VudGVyc1wiO1xyXG5pbXBvcnQgUGFnZVRlbXBsYXRlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1BhZ2VUZW1wbGF0ZS9QYWdlVGVtcGxhdGVcIjtcclxuaW1wb3J0IFVwZ3JhZGVNZW51IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1VwZ3JhZGVNZW51L1VwZ3JhZGVNZW51XCI7XHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuICBjb25zdCBbY2hhcmFjdGVyLCBzZXRDaGFyYWN0ZXJdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3BsYXllckhlYWx0aCwgc2V0UGxheWVySGVhbHRoXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtwbGF5ZXJNb25leSwgc2V0UGxheWVyTW9uZXldID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3BsYXllclVwZ3JhZGVQb2ludHMsIHNldFBsYXllclVwZ3JhZGVQb2ludHNdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3Jlc3VsdE1lc3NhZ2UsIHNldFJlc3VsdE1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3RvZ2dsZU1lc3NhZ2UsIHNldFRvZ2dsZU1lc3NhZ2VdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGNoYXJhY3Rlcikge1xyXG4gICAgICBzZXRQbGF5ZXJIZWFsdGgoY2hhcmFjdGVyLmhlYWx0aCk7XHJcbiAgICAgIHNldFBsYXllck1vbmV5KGNoYXJhY3Rlci5tb25leSk7XHJcbiAgICAgIHNldFBsYXllclVwZ3JhZGVQb2ludHMoMCk7XHJcbiAgICB9XHJcbiAgfSwgW2NoYXJhY3Rlcl0pO1xyXG5cclxuICBjb25zdCBhcHBseUhlYWx0aFVwZ3JhZGUgPSAodXBncmFkZUFtb3VudCkgPT4ge1xyXG4gICAgaWYgKHVwZ3JhZGVBbW91bnQgPiBwbGF5ZXJVcGdyYWRlUG9pbnRzKSB7XHJcbiAgICAgIHNldFRvZ2dsZU1lc3NhZ2UodHJ1ZSk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHNldFRvZ2dsZU1lc3NhZ2UoZmFsc2UpO1xyXG4gICAgICB9LCAzMDAwKTtcclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFBsYXllckhlYWx0aCgocHJldkhlYWx0aCkgPT4gcHJldkhlYWx0aCArIHVwZ3JhZGVBbW91bnQpO1xyXG4gICAgICBzZXRQbGF5ZXJVcGdyYWRlUG9pbnRzKFxyXG4gICAgICAgIChwcmV2VXBncmFkZVBvaW50cykgPT4gcHJldlVwZ3JhZGVQb2ludHMgLSB1cGdyYWRlQW1vdW50XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm9keX0+XHJcbiAgICAgIDxQYWdlVGVtcGxhdGU+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cclxuICAgICAgICAgIHshY2hhcmFjdGVyID8gKFxyXG4gICAgICAgICAgICA8Q2hhcmFjdGVyU2VsZWN0b3Igc2V0Q2hhcmFjdGVyPXtzZXRDaGFyYWN0ZXJ9IC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICB7Y2hhcmFjdGVyICYmIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8RW5jb3VudGVyc1xyXG4gICAgICAgICAgICAgICAgY2hhcmFjdGVySGVhbHRoPXtwbGF5ZXJIZWFsdGh9XHJcbiAgICAgICAgICAgICAgICBzZXRDaGFyYWN0ZXJIZWFsdGg9e3NldFBsYXllckhlYWx0aH1cclxuICAgICAgICAgICAgICAgIHVwZ3JhZGVQb2ludHM9e3BsYXllclVwZ3JhZGVQb2ludHN9XHJcbiAgICAgICAgICAgICAgICBzZXRVcGdyYWRlUG9pbnRzPXtzZXRQbGF5ZXJVcGdyYWRlUG9pbnRzfVxyXG4gICAgICAgICAgICAgICAgY2hhcmFjdGVyTW9uZXk9e3BsYXllck1vbmV5fVxyXG4gICAgICAgICAgICAgICAgc2V0Q2hhcmFjdGVyTW9uZXk9e3NldFBsYXllck1vbmV5fVxyXG4gICAgICAgICAgICAgICAgc2V0UmVzdWx0TWVzc2FnZT17c2V0UmVzdWx0TWVzc2FnZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAge3Jlc3VsdE1lc3NhZ2UgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlc3VsdE1lc3NhZ2V9PlxyXG4gICAgICAgICAgICAgIENob2ljZSBvdXRjb21lOiB7cmVzdWx0TWVzc2FnZX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhbHRofT5cclxuICAgICAgICAgICAge2NoYXJhY3RlciAmJiAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIEhlYWx0aDp7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICB7cGxheWVySGVhbHRoICE9PSBudWxsID8gcGxheWVySGVhbHRoIDogY2hhcmFjdGVyLmhlYWx0aH1cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb25leX0+XHJcbiAgICAgICAgICAgIHtjaGFyYWN0ZXIgJiYgKFxyXG4gICAgICAgICAgICAgIDw+TW9uZXk6IHtwbGF5ZXJNb25leSAhPT0gbnVsbCA/IHBsYXllck1vbmV5IDogY2hhcmFjdGVyLm1vbmV5fTwvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVwZ3JhZGVQb2ludHN9PlxyXG4gICAgICAgICAgICB7Y2hhcmFjdGVyICYmIDw+VXBncmFkZSBwb2ludHM6IHtwbGF5ZXJVcGdyYWRlUG9pbnRzfTwvPn1cclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICB7Y2hhcmFjdGVyICYmIChcclxuICAgICAgICAgICAgICAgIDxVcGdyYWRlTWVudSBhcHBseUhlYWx0aFVwZ3JhZGU9e2FwcGx5SGVhbHRoVXBncmFkZX0gLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8Lz5cclxuXHJcbiAgICAgICAgICAgIHt0b2dnbGVNZXNzYWdlICYmIDxkaXY+Tm90IGVub3VnaCB1cGdyYWRlIHBvaW50czwvZGl2Pn1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1BhZ2VUZW1wbGF0ZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDaGFyYWN0ZXJTZWxlY3RvciIsIkVuY291bnRlcnMiLCJQYWdlVGVtcGxhdGUiLCJVcGdyYWRlTWVudSIsIkluZGV4IiwiY2hhcmFjdGVyIiwic2V0Q2hhcmFjdGVyIiwicGxheWVySGVhbHRoIiwic2V0UGxheWVySGVhbHRoIiwicGxheWVyTW9uZXkiLCJzZXRQbGF5ZXJNb25leSIsInBsYXllclVwZ3JhZGVQb2ludHMiLCJzZXRQbGF5ZXJVcGdyYWRlUG9pbnRzIiwicmVzdWx0TWVzc2FnZSIsInNldFJlc3VsdE1lc3NhZ2UiLCJ0b2dnbGVNZXNzYWdlIiwic2V0VG9nZ2xlTWVzc2FnZSIsImhlYWx0aCIsIm1vbmV5IiwiYXBwbHlIZWFsdGhVcGdyYWRlIiwidXBncmFkZUFtb3VudCIsInNldFRpbWVvdXQiLCJwcmV2SGVhbHRoIiwicHJldlVwZ3JhZGVQb2ludHMiLCJkaXYiLCJjbGFzc05hbWUiLCJib2R5Iiwid3JhcHBlciIsImNoYXJhY3RlckhlYWx0aCIsInNldENoYXJhY3RlckhlYWx0aCIsInVwZ3JhZGVQb2ludHMiLCJzZXRVcGdyYWRlUG9pbnRzIiwiY2hhcmFjdGVyTW9uZXkiLCJzZXRDaGFyYWN0ZXJNb25leSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/game/index.tsx\n"));

/***/ })

});