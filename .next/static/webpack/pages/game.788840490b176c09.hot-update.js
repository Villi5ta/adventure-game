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

/***/ "./components/CharacterSelector/CharacterSelector.tsx":
/*!************************************************************!*\
  !*** ./components/CharacterSelector/CharacterSelector.tsx ***!
  \************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _CharacterSelector_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CharacterSelector.module.css */ \"./components/CharacterSelector/CharacterSelector.module.css\");\n/* harmony import */ var _CharacterSelector_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_CharacterSelector_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n// eslint-disable-next-line react/prop-types\nconst CharacterSelector = (param)=>{\n    let { setCharacter } = param;\n    const characterClassSelect = [\n        {\n            name: \"Lana\",\n            health: 3,\n            money: 10,\n            description: \"Born and raised in the largest city this side of the Grogdon Mountains, Lana grew bored of her noble lifestyle. Seeking adventure, she decided to hit the road.\"\n        },\n        {\n            name: \"Emma\",\n            health: 4,\n            money: 7,\n            description: \"Emma's life can be described in one phrase: 'And then it got worse.' At age 12, she lost her parents in a house fire. At 13, she joined a thieves' guild, only to be captured by the authorities a few years later. Now an adult, Emma has decided to roll the dice again.\"\n        },\n        {\n            name: \"Bill\",\n            health: 5,\n            money: 6,\n            description: \"As a top-tier blacksmith, Bill was poised for success until one day his shop was robbed. Lacking the funds to start over, he sold his shop to a local merchant for what seemed like a generous sum. Eventually, Bill discovered that the robbers were hired by the very merchant who bought his shop. Disgusted by such shrewd dealings, Bill turned to a simpler life.\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_CharacterSelector_module_css__WEBPACK_IMPORTED_MODULE_2___default().characterBuilderWrapper),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Choose your character\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\components\\\\CharacterSelector\\\\CharacterSelector.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_CharacterSelector_module_css__WEBPACK_IMPORTED_MODULE_2___default().characterCardWrapper),\n                children: characterClassSelect.map((character, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_CharacterSelector_module_css__WEBPACK_IMPORTED_MODULE_2___default().characterCard),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (_CharacterSelector_module_css__WEBPACK_IMPORTED_MODULE_2___default().charDescription),\n                                children: character.description\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\components\\\\CharacterSelector\\\\CharacterSelector.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (_CharacterSelector_module_css__WEBPACK_IMPORTED_MODULE_2___default().charStats),\n                                children: [\n                                    \"Character Stats: \",\n                                    character.health,\n                                    \" Health | \",\n                                    character.money,\n                                    \" \",\n                                    \"Wealth\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\components\\\\CharacterSelector\\\\CharacterSelector.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_CharacterSelector_module_css__WEBPACK_IMPORTED_MODULE_2___default().charSelectBtnDv),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>setCharacter(character),\n                                    className: (_CharacterSelector_module_css__WEBPACK_IMPORTED_MODULE_2___default().charSelectBtn),\n                                    children: [\n                                        \"Pick \",\n                                        character.name\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\components\\\\CharacterSelector\\\\CharacterSelector.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\components\\\\CharacterSelector\\\\CharacterSelector.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\components\\\\CharacterSelector\\\\CharacterSelector.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\components\\\\CharacterSelector\\\\CharacterSelector.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\components\\\\CharacterSelector\\\\CharacterSelector.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\n_c = CharacterSelector;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CharacterSelector);\nvar _c;\n$RefreshReg$(_c, \"CharacterSelector\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NoYXJhY3RlclNlbGVjdG9yL0NoYXJhY3RlclNlbGVjdG9yLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwQjtBQUMwQjtBQUVwRCw0Q0FBNEM7QUFDNUMsTUFBTUUsb0JBQW9CO1FBQUMsRUFBRUMsWUFBWSxFQUFFO0lBUXpDLE1BQU1DLHVCQUFtRDtRQUN2RDtZQUNFQyxNQUFNO1lBQ05DLFFBQVE7WUFDUkMsT0FBTztZQUNQQyxhQUNFO1FBQ0o7UUFDQTtZQUNFSCxNQUFNO1lBQ05DLFFBQVE7WUFDUkMsT0FBTztZQUNQQyxhQUNFO1FBQ0o7UUFDQTtZQUNFSCxNQUFNO1lBQ05DLFFBQVE7WUFDUkMsT0FBTztZQUNQQyxhQUNFO1FBQ0o7S0FDRDtJQUNELHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXVCw4RkFBOEI7OzBCQUM1Qyw4REFBQ1c7MEJBQUU7Ozs7OzswQkFFSCw4REFBQ0g7Z0JBQUlDLFdBQVdULDJGQUEyQjswQkFDeENHLHFCQUFxQlUsR0FBRyxDQUFDLENBQUNDLFdBQVdDLHNCQUNwQyw4REFBQ1A7d0JBQWdCQyxXQUFXVCxvRkFBb0I7OzBDQUM5Qyw4REFBQ1c7Z0NBQUVGLFdBQVdULHNGQUFzQjswQ0FBR2MsVUFBVVAsV0FBVzs7Ozs7OzBDQUM1RCw4REFBQ0k7Z0NBQUVGLFdBQVdULGdGQUFnQjs7b0NBQUU7b0NBQ1pjLFVBQVVULE1BQU07b0NBQUM7b0NBQVdTLFVBQVVSLEtBQUs7b0NBQUU7b0NBQUk7Ozs7Ozs7MENBSXJFLDhEQUFDRTtnQ0FBSUMsV0FBV1Qsc0ZBQXNCOzBDQUNwQyw0RUFBQ29CO29DQUNDQyxTQUFTLElBQU1uQixhQUFhWTtvQ0FDNUJMLFdBQVdULG9GQUFvQjs7d0NBQ2hDO3dDQUNPYyxVQUFVVixJQUFJOzs7Ozs7Ozs7Ozs7O3VCQVpoQlc7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQnBCO0tBekRNZDtBQTJETiwrREFBZUEsaUJBQWlCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2hhcmFjdGVyU2VsZWN0b3IvQ2hhcmFjdGVyU2VsZWN0b3IudHN4PzgwMTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0NoYXJhY3RlclNlbGVjdG9yLm1vZHVsZS5jc3NcIjtcclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9wcm9wLXR5cGVzXHJcbmNvbnN0IENoYXJhY3RlclNlbGVjdG9yID0gKHsgc2V0Q2hhcmFjdGVyIH0pID0+IHtcclxuICB0eXBlIENoYXJhY3RlckNsYXNzU2VsZWN0VHlwZSA9IHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGhlYWx0aDogbnVtYmVyO1xyXG4gICAgbW9uZXk6IG51bWJlcjtcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2hhcmFjdGVyQ2xhc3NTZWxlY3Q6IENoYXJhY3RlckNsYXNzU2VsZWN0VHlwZVtdID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkxhbmFcIixcclxuICAgICAgaGVhbHRoOiAzLFxyXG4gICAgICBtb25leTogMTAsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgIFwiQm9ybiBhbmQgcmFpc2VkIGluIHRoZSBsYXJnZXN0IGNpdHkgdGhpcyBzaWRlIG9mIHRoZSBHcm9nZG9uIE1vdW50YWlucywgTGFuYSBncmV3IGJvcmVkIG9mIGhlciBub2JsZSBsaWZlc3R5bGUuIFNlZWtpbmcgYWR2ZW50dXJlLCBzaGUgZGVjaWRlZCB0byBoaXQgdGhlIHJvYWQuXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkVtbWFcIixcclxuICAgICAgaGVhbHRoOiA0LFxyXG4gICAgICBtb25leTogNyxcclxuICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgXCJFbW1hJ3MgbGlmZSBjYW4gYmUgZGVzY3JpYmVkIGluIG9uZSBwaHJhc2U6ICdBbmQgdGhlbiBpdCBnb3Qgd29yc2UuJyBBdCBhZ2UgMTIsIHNoZSBsb3N0IGhlciBwYXJlbnRzIGluIGEgaG91c2UgZmlyZS4gQXQgMTMsIHNoZSBqb2luZWQgYSB0aGlldmVzJyBndWlsZCwgb25seSB0byBiZSBjYXB0dXJlZCBieSB0aGUgYXV0aG9yaXRpZXMgYSBmZXcgeWVhcnMgbGF0ZXIuIE5vdyBhbiBhZHVsdCwgRW1tYSBoYXMgZGVjaWRlZCB0byByb2xsIHRoZSBkaWNlIGFnYWluLlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJCaWxsXCIsXHJcbiAgICAgIGhlYWx0aDogNSxcclxuICAgICAgbW9uZXk6IDYsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgIFwiQXMgYSB0b3AtdGllciBibGFja3NtaXRoLCBCaWxsIHdhcyBwb2lzZWQgZm9yIHN1Y2Nlc3MgdW50aWwgb25lIGRheSBoaXMgc2hvcCB3YXMgcm9iYmVkLiBMYWNraW5nIHRoZSBmdW5kcyB0byBzdGFydCBvdmVyLCBoZSBzb2xkIGhpcyBzaG9wIHRvIGEgbG9jYWwgbWVyY2hhbnQgZm9yIHdoYXQgc2VlbWVkIGxpa2UgYSBnZW5lcm91cyBzdW0uIEV2ZW50dWFsbHksIEJpbGwgZGlzY292ZXJlZCB0aGF0IHRoZSByb2JiZXJzIHdlcmUgaGlyZWQgYnkgdGhlIHZlcnkgbWVyY2hhbnQgd2hvIGJvdWdodCBoaXMgc2hvcC4gRGlzZ3VzdGVkIGJ5IHN1Y2ggc2hyZXdkIGRlYWxpbmdzLCBCaWxsIHR1cm5lZCB0byBhIHNpbXBsZXIgbGlmZS5cIixcclxuICAgIH0sXHJcbiAgXTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGFyYWN0ZXJCdWlsZGVyV3JhcHBlcn0+XHJcbiAgICAgIDxwPkNob29zZSB5b3VyIGNoYXJhY3RlcjwvcD5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hhcmFjdGVyQ2FyZFdyYXBwZXJ9PlxyXG4gICAgICAgIHtjaGFyYWN0ZXJDbGFzc1NlbGVjdC5tYXAoKGNoYXJhY3RlciwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtzdHlsZXMuY2hhcmFjdGVyQ2FyZH0+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmNoYXJEZXNjcmlwdGlvbn0+e2NoYXJhY3Rlci5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmNoYXJTdGF0c30+XHJcbiAgICAgICAgICAgICAgQ2hhcmFjdGVyIFN0YXRzOiB7Y2hhcmFjdGVyLmhlYWx0aH0gSGVhbHRoIHwge2NoYXJhY3Rlci5tb25leX17XCIgXCJ9XHJcbiAgICAgICAgICAgICAgV2VhbHRoXHJcbiAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hhclNlbGVjdEJ0bkR2fT5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDaGFyYWN0ZXIoY2hhcmFjdGVyKX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNoYXJTZWxlY3RCdG59XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgUGljayB7Y2hhcmFjdGVyLm5hbWV9XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXJhY3RlclNlbGVjdG9yO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJDaGFyYWN0ZXJTZWxlY3RvciIsInNldENoYXJhY3RlciIsImNoYXJhY3RlckNsYXNzU2VsZWN0IiwibmFtZSIsImhlYWx0aCIsIm1vbmV5IiwiZGVzY3JpcHRpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJjaGFyYWN0ZXJCdWlsZGVyV3JhcHBlciIsInAiLCJjaGFyYWN0ZXJDYXJkV3JhcHBlciIsIm1hcCIsImNoYXJhY3RlciIsImluZGV4IiwiY2hhcmFjdGVyQ2FyZCIsImNoYXJEZXNjcmlwdGlvbiIsImNoYXJTdGF0cyIsImNoYXJTZWxlY3RCdG5EdiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjaGFyU2VsZWN0QnRuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/CharacterSelector/CharacterSelector.tsx\n"));

/***/ })

});