"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/scores",{

/***/ "./components/ScoreWrapper/ScoreWrapper.tsx":
/*!**************************************************!*\
  !*** ./components/ScoreWrapper/ScoreWrapper.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ScoreWrapper_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ScoreWrapper.module.css */ \"./components/ScoreWrapper/ScoreWrapper.module.css\");\n/* harmony import */ var _ScoreWrapper_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ScoreWrapper_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst ScoreWrapper = (param)=>{\n    let { scores } = param;\n    _s();\n    const [noScoresMessage, setNoScoresMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    if (!scores) {\n        setNoScoresMessage(true);\n    }\n    const sortedScores = scores.sort((a, b)=>b.score - a.score);\n    const formatDate = (dateString)=>{\n        return new Date(dateString).toLocaleDateString(\"en-CA\");\n    };\n    console.log(\"aaaa\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_ScoreWrapper_module_css__WEBPACK_IMPORTED_MODULE_2___default().main),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_ScoreWrapper_module_css__WEBPACK_IMPORTED_MODULE_2___default().pageName),\n                children: \" Most successful adventurers\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\Frontend\\\\components\\\\ScoreWrapper\\\\ScoreWrapper.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_ScoreWrapper_module_css__WEBPACK_IMPORTED_MODULE_2___default().scoreBoxWrapper),\n                children: sortedScores.map((score)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_ScoreWrapper_module_css__WEBPACK_IMPORTED_MODULE_2___default().scoreBox),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_ScoreWrapper_module_css__WEBPACK_IMPORTED_MODULE_2___default().scoreElement),\n                                children: [\n                                    \"Score: \",\n                                    score.score\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\Frontend\\\\components\\\\ScoreWrapper\\\\ScoreWrapper.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_ScoreWrapper_module_css__WEBPACK_IMPORTED_MODULE_2___default().nameElement),\n                                children: [\n                                    \"Player: \",\n                                    score.playerName\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\Frontend\\\\components\\\\ScoreWrapper\\\\ScoreWrapper.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_ScoreWrapper_module_css__WEBPACK_IMPORTED_MODULE_2___default().dateElement),\n                                children: [\n                                    \"Score date: \",\n                                    formatDate(score.createdAt)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\Frontend\\\\components\\\\ScoreWrapper\\\\ScoreWrapper.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 13\n                            }, undefined),\n                            noScoresMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"No scores present yet.\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\Frontend\\\\components\\\\ScoreWrapper\\\\ScoreWrapper.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 33\n                            }, undefined)\n                        ]\n                    }, score.id, true, {\n                        fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\Frontend\\\\components\\\\ScoreWrapper\\\\ScoreWrapper.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\Frontend\\\\components\\\\ScoreWrapper\\\\ScoreWrapper.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\Frontend\\\\components\\\\ScoreWrapper\\\\ScoreWrapper.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ScoreWrapper, \"UUh1UPjvAZFl5wSaxvR/BA/b0xY=\");\n_c = ScoreWrapper;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScoreWrapper);\nvar _c;\n$RefreshReg$(_c, \"ScoreWrapper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Njb3JlV3JhcHBlci9TY29yZVdyYXBwZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF3QztBQUVPO0FBTS9DLE1BQU1HLGVBQWU7UUFBQyxFQUFFQyxNQUFNLEVBQWM7O0lBQzFDLE1BQU0sQ0FBQ0MsaUJBQWlCQyxtQkFBbUIsR0FBR0wsK0NBQVFBLENBQUM7SUFDdkQsSUFBSSxDQUFDRyxRQUFRO1FBQ1hFLG1CQUFtQjtJQUNyQjtJQUVBLE1BQU1DLGVBQWVILE9BQU9JLElBQUksQ0FBQyxDQUFDQyxHQUFHQyxJQUFNQSxFQUFFQyxLQUFLLEdBQUdGLEVBQUVFLEtBQUs7SUFFNUQsTUFBTUMsYUFBYSxDQUFDQztRQUNsQixPQUFPLElBQUlDLEtBQUtELFlBQVlFLGtCQUFrQixDQUFDO0lBQ2pEO0lBRUFDLFFBQVFDLEdBQUcsQ0FBQztJQUVaLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXakIsc0VBQVc7OzBCQUN6Qiw4REFBQ21CO2dCQUFFRixXQUFXakIsMEVBQWU7MEJBQUU7Ozs7OzswQkFDL0IsOERBQUNnQjtnQkFBSUMsV0FBV2pCLGlGQUFzQjswQkFDbkNLLGFBQWFpQixHQUFHLENBQUMsQ0FBQ2Isc0JBQ2pCLDhEQUFDTzt3QkFBbUJDLFdBQVdqQiwwRUFBZTs7MENBQzVDLDhEQUFDZ0I7Z0NBQUlDLFdBQVdqQiw4RUFBbUI7O29DQUFFO29DQUFRUyxNQUFNQSxLQUFLOzs7Ozs7OzBDQUN4RCw4REFBQ087Z0NBQUlDLFdBQVdqQiw2RUFBa0I7O29DQUFFO29DQUFTUyxNQUFNaUIsVUFBVTs7Ozs7OzswQ0FFN0QsOERBQUNWO2dDQUFJQyxXQUFXakIsNkVBQWtCOztvQ0FBRTtvQ0FDckJVLFdBQVdELE1BQU1tQixTQUFTOzs7Ozs7OzRCQUd4Q3pCLGlDQUFtQiw4REFBQ2dCOzBDQUFFOzs7Ozs7O3VCQVJmVixNQUFNb0IsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztBQWM1QjtHQWpDTTVCO0tBQUFBO0FBbUNOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2NvcmVXcmFwcGVyL1Njb3JlV3JhcHBlci50c3g/YzNkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU2NvcmVUeXBlIH0gZnJvbSBcIi4uLy4uL3R5cGVzL3Njb3Jlc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1Njb3JlV3JhcHBlci5tb2R1bGUuY3NzXCI7XHJcblxyXG50eXBlIFNjb3Jlc1R5cGUgPSB7XHJcbiAgc2NvcmVzOiBTY29yZVR5cGVbXTtcclxufTtcclxuXHJcbmNvbnN0IFNjb3JlV3JhcHBlciA9ICh7IHNjb3JlcyB9OiBTY29yZXNUeXBlKSA9PiB7XHJcbiAgY29uc3QgW25vU2NvcmVzTWVzc2FnZSwgc2V0Tm9TY29yZXNNZXNzYWdlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBpZiAoIXNjb3Jlcykge1xyXG4gICAgc2V0Tm9TY29yZXNNZXNzYWdlKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc29ydGVkU2NvcmVzID0gc2NvcmVzLnNvcnQoKGEsIGIpID0+IGIuc2NvcmUgLSBhLnNjb3JlKTtcclxuXHJcbiAgY29uc3QgZm9ybWF0RGF0ZSA9IChkYXRlU3RyaW5nOiBzdHJpbmcpID0+IHtcclxuICAgIHJldHVybiBuZXcgRGF0ZShkYXRlU3RyaW5nKS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1DQVwiKTtcclxuICB9O1xyXG5cclxuICBjb25zb2xlLmxvZyhcImFhYWFcIik7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wYWdlTmFtZX0+IE1vc3Qgc3VjY2Vzc2Z1bCBhZHZlbnR1cmVyczwvcD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zY29yZUJveFdyYXBwZXJ9PlxyXG4gICAgICAgIHtzb3J0ZWRTY29yZXMubWFwKChzY29yZSkgPT4gKFxyXG4gICAgICAgICAgPGRpdiBrZXk9e3Njb3JlLmlkfSBjbGFzc05hbWU9e3N0eWxlcy5zY29yZUJveH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2NvcmVFbGVtZW50fT5TY29yZToge3Njb3JlLnNjb3JlfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hbWVFbGVtZW50fT5QbGF5ZXI6IHtzY29yZS5wbGF5ZXJOYW1lfTwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kYXRlRWxlbWVudH0+XHJcbiAgICAgICAgICAgICAgU2NvcmUgZGF0ZToge2Zvcm1hdERhdGUoc2NvcmUuY3JlYXRlZEF0KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7bm9TY29yZXNNZXNzYWdlICYmIDxwPk5vIHNjb3JlcyBwcmVzZW50IHlldC48L3A+fVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNjb3JlV3JhcHBlcjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJTY29yZVdyYXBwZXIiLCJzY29yZXMiLCJub1Njb3Jlc01lc3NhZ2UiLCJzZXROb1Njb3Jlc01lc3NhZ2UiLCJzb3J0ZWRTY29yZXMiLCJzb3J0IiwiYSIsImIiLCJzY29yZSIsImZvcm1hdERhdGUiLCJkYXRlU3RyaW5nIiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluIiwicCIsInBhZ2VOYW1lIiwic2NvcmVCb3hXcmFwcGVyIiwibWFwIiwic2NvcmVCb3giLCJzY29yZUVsZW1lbnQiLCJuYW1lRWxlbWVudCIsInBsYXllck5hbWUiLCJkYXRlRWxlbWVudCIsImNyZWF0ZWRBdCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ScoreWrapper/ScoreWrapper.tsx\n"));

/***/ })

});