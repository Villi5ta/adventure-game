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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _game_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.module.css */ \"./pages/game/game.module.css\");\n/* harmony import */ var _game_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_game_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_CharacterSelector_CharacterSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/CharacterSelector/CharacterSelector */ \"./components/CharacterSelector/CharacterSelector.tsx\");\n/* harmony import */ var _components_Encounters_Encounters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Encounters/Encounters */ \"./components/Encounters/Encounters.tsx\");\n/* harmony import */ var _components_UpgradeMenu_UpgradeMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/UpgradeMenu/UpgradeMenu */ \"./components/UpgradeMenu/UpgradeMenu.tsx\");\n/* harmony import */ var _components_PageTemplate_PageTemplate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/PageTemplate/PageTemplate */ \"./components/PageTemplate/PageTemplate.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Index = ()=>{\n    _s();\n    const [character, setCharacter] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [playerHealth, setPlayerHealth] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [playerMoney, setPlayerMoney] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [playerUpgradePoints, setPlayerUpgradePoints] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [resultMessage, setResultMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [playerHealthUpgrade, setPlayerHealthUpgrade] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (character) {\n            setPlayerHealth(character.health);\n            setPlayerMoney(character.money);\n            setPlayerUpgradePoints(0);\n            setPlayerHealthUpgrade(character.health);\n        }\n    }, [\n        character\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_game_module_css__WEBPACK_IMPORTED_MODULE_1___default().body),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PageTemplate_PageTemplate__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_game_module_css__WEBPACK_IMPORTED_MODULE_1___default().wrapper),\n                children: [\n                    !character ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CharacterSelector_CharacterSelector__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        setCharacter: setCharacter\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\pages\\\\game\\\\index.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 13\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\pages\\\\game\\\\index.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 13\n                    }, undefined),\n                    character && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Encounters_Encounters__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        characterHealth: playerHealth,\n                        setCharacterHealth: setPlayerHealth,\n                        upgradePoints: playerUpgradePoints,\n                        setUpgradePoints: setPlayerUpgradePoints,\n                        characterMoney: playerMoney,\n                        setCharacterMoney: setPlayerMoney,\n                        setResultMessage: setResultMessage\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\pages\\\\game\\\\index.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 13\n                    }, undefined),\n                    resultMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_game_module_css__WEBPACK_IMPORTED_MODULE_1___default().resultMessage),\n                        children: [\n                            \"Choice outcome: \",\n                            resultMessage\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\pages\\\\game\\\\index.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_game_module_css__WEBPACK_IMPORTED_MODULE_1___default().health),\n                        children: character && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                \"Health:\",\n                                \" \",\n                                playerHealth !== null ? playerHealth : character.health\n                            ]\n                        }, void 0, true)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\pages\\\\game\\\\index.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_game_module_css__WEBPACK_IMPORTED_MODULE_1___default().money),\n                        children: character && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                \"Money: \",\n                                playerMoney !== null ? playerMoney : character.money\n                            ]\n                        }, void 0, true)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\pages\\\\game\\\\index.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_game_module_css__WEBPACK_IMPORTED_MODULE_1___default().upgradePoints),\n                        children: character && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                \"Upgrade points: \",\n                                playerUpgradePoints\n                            ]\n                        }, void 0, true)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\pages\\\\game\\\\index.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UpgradeMenu_UpgradeMenu__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        healthUpgrade: playerHealthUpgrade + playerHealth\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\pages\\\\game\\\\index.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\pages\\\\game\\\\index.tsx\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\pages\\\\game\\\\index.tsx\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\pages\\\\game\\\\index.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Index, \"uQwevdRc4uzDbZIviCR+UdIPvJI=\");\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9nYW1lL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ1k7QUFDa0M7QUFDckI7QUFDRztBQUNHO0FBRXRFLE1BQU1RLFFBQVE7O0lBQ1osTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdQLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ1EsY0FBY0MsZ0JBQWdCLEdBQUdULCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ1UsYUFBYUMsZUFBZSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNZLHFCQUFxQkMsdUJBQXVCLEdBQUdiLCtDQUFRQSxDQUFDO0lBQy9ELE1BQU0sQ0FBQ2MsZUFBZUMsaUJBQWlCLEdBQUdmLCtDQUFRQSxDQUFDO0lBQ25ELE1BQU0sQ0FBQ2dCLHFCQUFxQkMsdUJBQXVCLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUUvREQsZ0RBQVNBLENBQUM7UUFDUixJQUFJTyxXQUFXO1lBQ2JHLGdCQUFnQkgsVUFBVVksTUFBTTtZQUNoQ1AsZUFBZUwsVUFBVWEsS0FBSztZQUM5Qk4sdUJBQXVCO1lBQ3ZCSSx1QkFBdUJYLFVBQVVZLE1BQU07UUFDekM7SUFDRixHQUFHO1FBQUNaO0tBQVU7SUFFZCxxQkFDRSw4REFBQ2M7UUFBSUMsV0FBV3hCLDhEQUFXO2tCQUN6Qiw0RUFBQ08sNkVBQVlBO3NCQUNYLDRFQUFDZ0I7Z0JBQUlDLFdBQVd4QixpRUFBYzs7b0JBQzNCLENBQUNTLDBCQUNBLDhEQUFDTCx1RkFBaUJBO3dCQUFDTSxjQUFjQTs7Ozs7a0RBRWpDLDhEQUFDYTs7Ozs7b0JBR0ZkLDJCQUNDLDhEQUFDSix5RUFBVUE7d0JBQ1RzQixpQkFBaUJoQjt3QkFDakJpQixvQkFBb0JoQjt3QkFDcEJpQixlQUFlZDt3QkFDZmUsa0JBQWtCZDt3QkFDbEJlLGdCQUFnQmxCO3dCQUNoQm1CLG1CQUFtQmxCO3dCQUNuQkksa0JBQWtCQTs7Ozs7O29CQUlyQkQsK0JBQ0MsOERBQUNNO3dCQUFJQyxXQUFXeEIsdUVBQW9COzs0QkFBRTs0QkFDbkJpQjs7Ozs7OztrQ0FJckIsOERBQUNNO3dCQUFJQyxXQUFXeEIsZ0VBQWE7a0NBQzFCUywyQkFDQzs7Z0NBQUU7Z0NBQ1E7Z0NBQ1BFLGlCQUFpQixPQUFPQSxlQUFlRixVQUFVWSxNQUFNOzs7Ozs7OztrQ0FJOUQsOERBQUNFO3dCQUFJQyxXQUFXeEIsK0RBQVk7a0NBQ3pCUywyQkFDQzs7Z0NBQUU7Z0NBQVFJLGdCQUFnQixPQUFPQSxjQUFjSixVQUFVYSxLQUFLOzs7Ozs7OztrQ0FHbEUsOERBQUNDO3dCQUFJQyxXQUFXeEIsdUVBQW9CO2tDQUNqQ1MsMkJBQWE7O2dDQUFFO2dDQUFpQk07Ozs7Ozs7O2tDQUVuQyw4REFBQ1QsMkVBQVdBO3dCQUFDMkIsZUFBZWQsc0JBQXNCUjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs1RDtHQWxFTUg7S0FBQUE7QUFvRU4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2FtZS9pbmRleC50c3g/YjhhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL2dhbWUubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2hhcmFjdGVyU2VsZWN0b3IgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ2hhcmFjdGVyU2VsZWN0b3IvQ2hhcmFjdGVyU2VsZWN0b3JcIjtcclxuaW1wb3J0IEVuY291bnRlcnMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRW5jb3VudGVycy9FbmNvdW50ZXJzXCI7XHJcbmltcG9ydCBVcGdyYWRlTWVudSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9VcGdyYWRlTWVudS9VcGdyYWRlTWVudVwiO1xyXG5pbXBvcnQgUGFnZVRlbXBsYXRlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1BhZ2VUZW1wbGF0ZS9QYWdlVGVtcGxhdGVcIjtcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtjaGFyYWN0ZXIsIHNldENoYXJhY3Rlcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbcGxheWVySGVhbHRoLCBzZXRQbGF5ZXJIZWFsdGhdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3BsYXllck1vbmV5LCBzZXRQbGF5ZXJNb25leV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbcGxheWVyVXBncmFkZVBvaW50cywgc2V0UGxheWVyVXBncmFkZVBvaW50c10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbcmVzdWx0TWVzc2FnZSwgc2V0UmVzdWx0TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGxheWVySGVhbHRoVXBncmFkZSwgc2V0UGxheWVySGVhbHRoVXBncmFkZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChjaGFyYWN0ZXIpIHtcclxuICAgICAgc2V0UGxheWVySGVhbHRoKGNoYXJhY3Rlci5oZWFsdGgpO1xyXG4gICAgICBzZXRQbGF5ZXJNb25leShjaGFyYWN0ZXIubW9uZXkpO1xyXG4gICAgICBzZXRQbGF5ZXJVcGdyYWRlUG9pbnRzKDApO1xyXG4gICAgICBzZXRQbGF5ZXJIZWFsdGhVcGdyYWRlKGNoYXJhY3Rlci5oZWFsdGgpO1xyXG4gICAgfVxyXG4gIH0sIFtjaGFyYWN0ZXJdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm9keX0+XHJcbiAgICAgIDxQYWdlVGVtcGxhdGU+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cclxuICAgICAgICAgIHshY2hhcmFjdGVyID8gKFxyXG4gICAgICAgICAgICA8Q2hhcmFjdGVyU2VsZWN0b3Igc2V0Q2hhcmFjdGVyPXtzZXRDaGFyYWN0ZXJ9IC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICB7Y2hhcmFjdGVyICYmIChcclxuICAgICAgICAgICAgPEVuY291bnRlcnNcclxuICAgICAgICAgICAgICBjaGFyYWN0ZXJIZWFsdGg9e3BsYXllckhlYWx0aH1cclxuICAgICAgICAgICAgICBzZXRDaGFyYWN0ZXJIZWFsdGg9e3NldFBsYXllckhlYWx0aH1cclxuICAgICAgICAgICAgICB1cGdyYWRlUG9pbnRzPXtwbGF5ZXJVcGdyYWRlUG9pbnRzfVxyXG4gICAgICAgICAgICAgIHNldFVwZ3JhZGVQb2ludHM9e3NldFBsYXllclVwZ3JhZGVQb2ludHN9XHJcbiAgICAgICAgICAgICAgY2hhcmFjdGVyTW9uZXk9e3BsYXllck1vbmV5fVxyXG4gICAgICAgICAgICAgIHNldENoYXJhY3Rlck1vbmV5PXtzZXRQbGF5ZXJNb25leX1cclxuICAgICAgICAgICAgICBzZXRSZXN1bHRNZXNzYWdlPXtzZXRSZXN1bHRNZXNzYWdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICB7cmVzdWx0TWVzc2FnZSAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVzdWx0TWVzc2FnZX0+XHJcbiAgICAgICAgICAgICAgQ2hvaWNlIG91dGNvbWU6IHtyZXN1bHRNZXNzYWdlfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFsdGh9PlxyXG4gICAgICAgICAgICB7Y2hhcmFjdGVyICYmIChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgSGVhbHRoOntcIiBcIn1cclxuICAgICAgICAgICAgICAgIHtwbGF5ZXJIZWFsdGggIT09IG51bGwgPyBwbGF5ZXJIZWFsdGggOiBjaGFyYWN0ZXIuaGVhbHRofVxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vbmV5fT5cclxuICAgICAgICAgICAge2NoYXJhY3RlciAmJiAoXHJcbiAgICAgICAgICAgICAgPD5Nb25leToge3BsYXllck1vbmV5ICE9PSBudWxsID8gcGxheWVyTW9uZXkgOiBjaGFyYWN0ZXIubW9uZXl9PC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXBncmFkZVBvaW50c30+XHJcbiAgICAgICAgICAgIHtjaGFyYWN0ZXIgJiYgPD5VcGdyYWRlIHBvaW50czoge3BsYXllclVwZ3JhZGVQb2ludHN9PC8+fVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8VXBncmFkZU1lbnUgaGVhbHRoVXBncmFkZT17cGxheWVySGVhbHRoVXBncmFkZSArIHBsYXllckhlYWx0aH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9QYWdlVGVtcGxhdGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ2hhcmFjdGVyU2VsZWN0b3IiLCJFbmNvdW50ZXJzIiwiVXBncmFkZU1lbnUiLCJQYWdlVGVtcGxhdGUiLCJJbmRleCIsImNoYXJhY3RlciIsInNldENoYXJhY3RlciIsInBsYXllckhlYWx0aCIsInNldFBsYXllckhlYWx0aCIsInBsYXllck1vbmV5Iiwic2V0UGxheWVyTW9uZXkiLCJwbGF5ZXJVcGdyYWRlUG9pbnRzIiwic2V0UGxheWVyVXBncmFkZVBvaW50cyIsInJlc3VsdE1lc3NhZ2UiLCJzZXRSZXN1bHRNZXNzYWdlIiwicGxheWVySGVhbHRoVXBncmFkZSIsInNldFBsYXllckhlYWx0aFVwZ3JhZGUiLCJoZWFsdGgiLCJtb25leSIsImRpdiIsImNsYXNzTmFtZSIsImJvZHkiLCJ3cmFwcGVyIiwiY2hhcmFjdGVySGVhbHRoIiwic2V0Q2hhcmFjdGVySGVhbHRoIiwidXBncmFkZVBvaW50cyIsInNldFVwZ3JhZGVQb2ludHMiLCJjaGFyYWN0ZXJNb25leSIsInNldENoYXJhY3Rlck1vbmV5IiwiaGVhbHRoVXBncmFkZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/game/index.tsx\n"));

/***/ })

});