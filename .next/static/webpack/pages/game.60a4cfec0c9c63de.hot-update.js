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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _game_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.module.css */ \"./pages/game/game.module.css\");\n/* harmony import */ var _game_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_game_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_CharacterSelector_CharacterSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/CharacterSelector/CharacterSelector */ \"./components/CharacterSelector/CharacterSelector.tsx\");\n/* harmony import */ var _components_Encounters_Encounters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Encounters/Encounters */ \"./components/Encounters/Encounters.tsx\");\n/* harmony import */ var _components_PageTemplate_PageTemplate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/PageTemplate/PageTemplate */ \"./components/PageTemplate/PageTemplate.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Index = ()=>{\n    _s();\n    const [character, setCharacter] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [playerHealth, setPlayerHealth] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [playerMoney, setPlayerMoney] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [playerUpgradePoints, setPlayerUpgradePoints] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [resultMessage, setResultMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    console.log(playerHealth);\n    console.log(character.health);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_game_module_css__WEBPACK_IMPORTED_MODULE_1___default().body),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PageTemplate_PageTemplate__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            children: [\n                !character ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CharacterSelector_CharacterSelector__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    setCharacter: setCharacter\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\pages\\\\game\\\\index.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 11\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\pages\\\\game\\\\index.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 11\n                }, undefined),\n                character && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Encounters_Encounters__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    characterHealth: character.health,\n                    setCharacterHealth: setPlayerHealth,\n                    upgradePoints: playerUpgradePoints,\n                    setUpgradePoints: setPlayerUpgradePoints,\n                    characterMoney: character.money,\n                    setCharacterMoney: setPlayerMoney,\n                    setResultMessage: setResultMessage\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\pages\\\\game\\\\index.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 11\n                }, undefined),\n                resultMessage === true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_game_module_css__WEBPACK_IMPORTED_MODULE_1___default().resultMessage),\n                    children: [\n                        \"Choice outcome: \",\n                        resultMessage\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\pages\\\\game\\\\index.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_game_module_css__WEBPACK_IMPORTED_MODULE_1___default().health),\n                    children: character && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            \"Health: \",\n                            !playerHealth ? character.health : playerHealth\n                        ]\n                    }, void 0, true)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\pages\\\\game\\\\index.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_game_module_css__WEBPACK_IMPORTED_MODULE_1___default().money),\n                    children: character && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            \"Money: \",\n                            !playerMoney ? character.money : playerMoney\n                        ]\n                    }, void 0, true)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\pages\\\\game\\\\index.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_game_module_css__WEBPACK_IMPORTED_MODULE_1___default().upgradePoints),\n                    children: playerUpgradePoints && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            \"Upgrade points: \",\n                            playerUpgradePoints\n                        ]\n                    }, void 0, true)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\pages\\\\game\\\\index.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\pages\\\\game\\\\index.tsx\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\pages\\\\game\\\\index.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Index, \"6Z49zs8Aq4MmsqE30uWb0aqqgNI=\");\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9nYW1lL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBdUM7QUFDQztBQUM2QztBQUNyQjtBQUNNO0FBRXRFLE1BQU1NLFFBQVE7O0lBQ1osTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdOLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ08sY0FBY0MsZ0JBQWdCLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ1MsYUFBYUMsZUFBZSxHQUFHViwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNXLHFCQUFxQkMsdUJBQXVCLEdBQUdaLCtDQUFRQSxDQUFDO0lBQy9ELE1BQU0sQ0FBQ2EsZUFBZUMsaUJBQWlCLEdBQUdkLCtDQUFRQSxDQUFDO0lBRW5EZSxRQUFRQyxHQUFHLENBQUNUO0lBQ1pRLFFBQVFDLEdBQUcsQ0FBQ1gsVUFBVVksTUFBTTtJQUU1QixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBV3JCLDhEQUFXO2tCQUN6Qiw0RUFBQ0ssNkVBQVlBOztnQkFDVixDQUFDRSwwQkFDQSw4REFBQ0osdUZBQWlCQTtvQkFBQ0ssY0FBY0E7Ozs7OzhDQUVqQyw4REFBQ1k7Ozs7O2dCQUdGYiwyQkFDQyw4REFBQ0gseUVBQVVBO29CQUNUbUIsaUJBQWlCaEIsVUFBVVksTUFBTTtvQkFDakNLLG9CQUFvQmQ7b0JBQ3BCZSxlQUFlWjtvQkFDZmEsa0JBQWtCWjtvQkFDbEJhLGdCQUFnQnBCLFVBQVVxQixLQUFLO29CQUMvQkMsbUJBQW1CakI7b0JBQ25CSSxrQkFBa0JBOzs7Ozs7Z0JBSXJCRCxrQkFBa0IscUJBQ2pCLDhKQUVBLDhEQUFDSztvQkFBSUMsV0FBV3JCLHVFQUFvQjs7d0JBQUU7d0JBQ25CZTs7Ozs7Ozs4QkFJckIsOERBQUNLO29CQUFJQyxXQUFXckIsZ0VBQWE7OEJBQzFCTywyQkFDQzs7NEJBQUU7NEJBQVMsQ0FBQ0UsZUFBZUYsVUFBVVksTUFBTSxHQUFHVjs7Ozs7Ozs7OEJBR2xELDhEQUFDVztvQkFBSUMsV0FBV3JCLCtEQUFZOzhCQUN6Qk8sMkJBQ0M7OzRCQUFFOzRCQUFRLENBQUNJLGNBQWNKLFVBQVVxQixLQUFLLEdBQUdqQjs7Ozs7Ozs7OEJBRy9DLDhEQUFDUztvQkFBSUMsV0FBV3JCLHVFQUFvQjs4QkFDakNhLHFDQUF1Qjs7NEJBQUU7NEJBQWlCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtyRDtHQXZETVA7S0FBQUE7QUF5RE4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2FtZS9pbmRleC50c3g/YjhhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL2dhbWUubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENoYXJhY3RlclNlbGVjdG9yIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0NoYXJhY3RlclNlbGVjdG9yL0NoYXJhY3RlclNlbGVjdG9yXCI7XHJcbmltcG9ydCBFbmNvdW50ZXJzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0VuY291bnRlcnMvRW5jb3VudGVyc1wiO1xyXG5pbXBvcnQgUGFnZVRlbXBsYXRlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1BhZ2VUZW1wbGF0ZS9QYWdlVGVtcGxhdGVcIjtcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtjaGFyYWN0ZXIsIHNldENoYXJhY3Rlcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbcGxheWVySGVhbHRoLCBzZXRQbGF5ZXJIZWFsdGhdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3BsYXllck1vbmV5LCBzZXRQbGF5ZXJNb25leV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbcGxheWVyVXBncmFkZVBvaW50cywgc2V0UGxheWVyVXBncmFkZVBvaW50c10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbcmVzdWx0TWVzc2FnZSwgc2V0UmVzdWx0TWVzc2FnZV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgY29uc29sZS5sb2cocGxheWVySGVhbHRoKTtcclxuICBjb25zb2xlLmxvZyhjaGFyYWN0ZXIuaGVhbHRoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm9keX0+XHJcbiAgICAgIDxQYWdlVGVtcGxhdGU+XHJcbiAgICAgICAgeyFjaGFyYWN0ZXIgPyAoXHJcbiAgICAgICAgICA8Q2hhcmFjdGVyU2VsZWN0b3Igc2V0Q2hhcmFjdGVyPXtzZXRDaGFyYWN0ZXJ9IC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAge2NoYXJhY3RlciAmJiAoXHJcbiAgICAgICAgICA8RW5jb3VudGVyc1xyXG4gICAgICAgICAgICBjaGFyYWN0ZXJIZWFsdGg9e2NoYXJhY3Rlci5oZWFsdGh9XHJcbiAgICAgICAgICAgIHNldENoYXJhY3RlckhlYWx0aD17c2V0UGxheWVySGVhbHRofVxyXG4gICAgICAgICAgICB1cGdyYWRlUG9pbnRzPXtwbGF5ZXJVcGdyYWRlUG9pbnRzfVxyXG4gICAgICAgICAgICBzZXRVcGdyYWRlUG9pbnRzPXtzZXRQbGF5ZXJVcGdyYWRlUG9pbnRzfVxyXG4gICAgICAgICAgICBjaGFyYWN0ZXJNb25leT17Y2hhcmFjdGVyLm1vbmV5fVxyXG4gICAgICAgICAgICBzZXRDaGFyYWN0ZXJNb25leT17c2V0UGxheWVyTW9uZXl9XHJcbiAgICAgICAgICAgIHNldFJlc3VsdE1lc3NhZ2U9e3NldFJlc3VsdE1lc3NhZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIHtyZXN1bHRNZXNzYWdlID09PSB0cnVlID8gKFxyXG4gICAgICAgICAgPD48Lz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZXN1bHRNZXNzYWdlfT5cclxuICAgICAgICAgICAgQ2hvaWNlIG91dGNvbWU6IHtyZXN1bHRNZXNzYWdlfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFsdGh9PlxyXG4gICAgICAgICAge2NoYXJhY3RlciAmJiAoXHJcbiAgICAgICAgICAgIDw+SGVhbHRoOiB7IXBsYXllckhlYWx0aCA/IGNoYXJhY3Rlci5oZWFsdGggOiBwbGF5ZXJIZWFsdGh9PC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9uZXl9PlxyXG4gICAgICAgICAge2NoYXJhY3RlciAmJiAoXHJcbiAgICAgICAgICAgIDw+TW9uZXk6IHshcGxheWVyTW9uZXkgPyBjaGFyYWN0ZXIubW9uZXkgOiBwbGF5ZXJNb25leX08Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51cGdyYWRlUG9pbnRzfT5cclxuICAgICAgICAgIHtwbGF5ZXJVcGdyYWRlUG9pbnRzICYmIDw+VXBncmFkZSBwb2ludHM6IHtwbGF5ZXJVcGdyYWRlUG9pbnRzfTwvPn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9QYWdlVGVtcGxhdGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJSZWFjdCIsInVzZVN0YXRlIiwiQ2hhcmFjdGVyU2VsZWN0b3IiLCJFbmNvdW50ZXJzIiwiUGFnZVRlbXBsYXRlIiwiSW5kZXgiLCJjaGFyYWN0ZXIiLCJzZXRDaGFyYWN0ZXIiLCJwbGF5ZXJIZWFsdGgiLCJzZXRQbGF5ZXJIZWFsdGgiLCJwbGF5ZXJNb25leSIsInNldFBsYXllck1vbmV5IiwicGxheWVyVXBncmFkZVBvaW50cyIsInNldFBsYXllclVwZ3JhZGVQb2ludHMiLCJyZXN1bHRNZXNzYWdlIiwic2V0UmVzdWx0TWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJoZWFsdGgiLCJkaXYiLCJjbGFzc05hbWUiLCJib2R5IiwiY2hhcmFjdGVySGVhbHRoIiwic2V0Q2hhcmFjdGVySGVhbHRoIiwidXBncmFkZVBvaW50cyIsInNldFVwZ3JhZGVQb2ludHMiLCJjaGFyYWN0ZXJNb25leSIsIm1vbmV5Iiwic2V0Q2hhcmFjdGVyTW9uZXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/game/index.tsx\n"));

/***/ })

});