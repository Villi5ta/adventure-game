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

/***/ "./pages/scores/index.tsx":
/*!********************************!*\
  !*** ./pages/scores/index.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_PageTemplate_PageTemplate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/PageTemplate/PageTemplate */ \"./components/PageTemplate/PageTemplate.tsx\");\n/* harmony import */ var _components_ScoreWrapper_ScoreWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ScoreWrapper/ScoreWrapper */ \"./components/ScoreWrapper/ScoreWrapper.tsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst index = ()=>{\n    _s();\n    const [scores, setScores] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const fetchScores = async ()=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"\".concat(\"http://localhost:3001\", \"/scores\"));\n            setScores(response.data);\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchScores();\n    }, []);\n    console.log(scores);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PageTemplate_PageTemplate__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            children: [\n                scores && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ScoreWrapper_ScoreWrapper__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    scores: scores.scores\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\Frontend\\\\pages\\\\scores\\\\index.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 20\n                }, undefined),\n                !scores && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"no scores\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\Frontend\\\\pages\\\\scores\\\\index.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 21\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\Frontend\\\\pages\\\\scores\\\\index.tsx\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\Frontend\\\\pages\\\\scores\\\\index.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n_s(index, \"7FA3UXzkVBjq1Bcpj6JtxBpS37o=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zY29yZXMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBbUQ7QUFDbUI7QUFDQTtBQUM1QztBQUUxQixNQUFNTSxRQUFROztJQUNaLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUVyQyxNQUFNTyxjQUFjO1FBQ2xCLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1MLGlEQUFTLENBQUMsR0FBMEIsT0FBdkJPLHVCQUFzQixFQUFDO1lBRTNESixVQUFVRSxTQUFTSyxJQUFJO1FBQ3pCLEVBQUUsT0FBT0MsS0FBSztZQUNaQyxRQUFRQyxHQUFHLENBQUNGO1FBQ2Q7SUFDRjtJQUVBZixnREFBU0EsQ0FBQztRQUNSUTtJQUNGLEdBQUcsRUFBRTtJQUVMUSxRQUFRQyxHQUFHLENBQUNYO0lBRVoscUJBQ0UsOERBQUNZO2tCQUNDLDRFQUFDaEIsNkVBQVlBOztnQkFDVkksd0JBQVUsOERBQUNILDZFQUFZQTtvQkFBQ0csUUFBUUEsT0FBT0EsTUFBTTs7Ozs7O2dCQUM3QyxDQUFDQSx3QkFBVSw4REFBQ1k7OEJBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXpCO0dBM0JNYjtBQTZCTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zY29yZXMvaW5kZXgudHN4P2Y2NGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFBhZ2VUZW1wbGF0ZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9QYWdlVGVtcGxhdGUvUGFnZVRlbXBsYXRlXCI7XHJcbmltcG9ydCBTY29yZVdyYXBwZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2NvcmVXcmFwcGVyL1Njb3JlV3JhcHBlclwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBpbmRleCA9ICgpID0+IHtcclxuICBjb25zdCBbc2NvcmVzLCBzZXRTY29yZXNdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IGZldGNoU2NvcmVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuU0VSVkVSX1VSTH0vc2NvcmVzYCk7XHJcblxyXG4gICAgICBzZXRTY29yZXMocmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hTY29yZXMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKHNjb3Jlcyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8UGFnZVRlbXBsYXRlPlxyXG4gICAgICAgIHtzY29yZXMgJiYgPFNjb3JlV3JhcHBlciBzY29yZXM9e3Njb3Jlcy5zY29yZXN9IC8+fVxyXG4gICAgICAgIHshc2NvcmVzICYmIDxkaXY+bm8gc2NvcmVzPC9kaXY+fVxyXG4gICAgICA8L1BhZ2VUZW1wbGF0ZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJQYWdlVGVtcGxhdGUiLCJTY29yZVdyYXBwZXIiLCJheGlvcyIsImluZGV4Iiwic2NvcmVzIiwic2V0U2NvcmVzIiwiZmV0Y2hTY29yZXMiLCJyZXNwb25zZSIsImdldCIsInByb2Nlc3MiLCJlbnYiLCJTRVJWRVJfVVJMIiwiZGF0YSIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/scores/index.tsx\n"));

/***/ })

});