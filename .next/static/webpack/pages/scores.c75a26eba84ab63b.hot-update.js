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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_PageTemplate_PageTemplate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/PageTemplate/PageTemplate */ \"./components/PageTemplate/PageTemplate.tsx\");\n/* harmony import */ var _components_ScoreWrapper_ScoreWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ScoreWrapper/ScoreWrapper */ \"./components/ScoreWrapper/ScoreWrapper.tsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _scores_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scores.module.css */ \"./pages/scores/scores.module.css\");\n/* harmony import */ var _scores_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scores_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst index = ()=>{\n    _s();\n    const [scores, setScores] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [noScoreMessage, setNoScoreMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    if (!scores) {\n        setNoScoreMessage(!noScoreMessage);\n    }\n    const fetchScores = async ()=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"\".concat(\"http://localhost:3001\", \"/scores\"));\n            setScores(response.data);\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchScores();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PageTemplate_PageTemplate__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            children: [\n                scores && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ScoreWrapper_ScoreWrapper__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    scores: scores.scores\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\Frontend\\\\pages\\\\scores\\\\index.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 20\n                }, undefined),\n                noScoreMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_scores_module_css__WEBPACK_IMPORTED_MODULE_4___default().noDataMessage),\n                    children: \"No scores available yet\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\Frontend\\\\pages\\\\scores\\\\index.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\Frontend\\\\pages\\\\scores\\\\index.tsx\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\Frontend\\\\pages\\\\scores\\\\index.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n_s(index, \"cfXC7pnScteMLoqyDa/v1yxahNw=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zY29yZXMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNtQjtBQUNBO0FBQzVDO0FBQ2U7QUFFekMsTUFBTU8sUUFBUTs7SUFDWixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR1AsK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDUSxnQkFBZ0JDLGtCQUFrQixHQUFHVCwrQ0FBUUEsQ0FBQztJQUVyRCxJQUFJLENBQUNNLFFBQVE7UUFDWEcsa0JBQWtCLENBQUNEO0lBQ3JCO0lBRUEsTUFBTUUsY0FBYztRQUNsQixJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNUixpREFBUyxDQUFDLEdBQTBCLE9BQXZCVSx1QkFBc0IsRUFBQztZQUUzRE4sVUFBVUksU0FBU0ssSUFBSTtRQUN6QixFQUFFLE9BQU9DLEtBQUs7WUFDWkMsUUFBUUMsR0FBRyxDQUFDRjtRQUNkO0lBQ0Y7SUFFQWxCLGdEQUFTQSxDQUFDO1FBQ1JXO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNVO2tCQUNDLDRFQUFDbkIsNkVBQVlBOztnQkFDVkssd0JBQVUsOERBQUNKLDZFQUFZQTtvQkFBQ0ksUUFBUUEsT0FBT0EsTUFBTTs7Ozs7O2dCQUM3Q0UsZ0NBQ0MsOERBQUNZO29CQUFJQyxXQUFXakIseUVBQW9COzhCQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtoRDtHQWhDTUM7QUFrQ04sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2NvcmVzL2luZGV4LnRzeD9mNjRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQYWdlVGVtcGxhdGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUGFnZVRlbXBsYXRlL1BhZ2VUZW1wbGF0ZVwiO1xyXG5pbXBvcnQgU2NvcmVXcmFwcGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Njb3JlV3JhcHBlci9TY29yZVdyYXBwZXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3Njb3Jlcy5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBpbmRleCA9ICgpID0+IHtcclxuICBjb25zdCBbc2NvcmVzLCBzZXRTY29yZXNdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW25vU2NvcmVNZXNzYWdlLCBzZXROb1Njb3JlTWVzc2FnZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGlmICghc2NvcmVzKSB7XHJcbiAgICBzZXROb1Njb3JlTWVzc2FnZSghbm9TY29yZU1lc3NhZ2UpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZmV0Y2hTY29yZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5TRVJWRVJfVVJMfS9zY29yZXNgKTtcclxuXHJcbiAgICAgIHNldFNjb3JlcyhyZXNwb25zZS5kYXRhKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaFNjb3JlcygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxQYWdlVGVtcGxhdGU+XHJcbiAgICAgICAge3Njb3JlcyAmJiA8U2NvcmVXcmFwcGVyIHNjb3Jlcz17c2NvcmVzLnNjb3Jlc30gLz59XHJcbiAgICAgICAge25vU2NvcmVNZXNzYWdlICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubm9EYXRhTWVzc2FnZX0+Tm8gc2NvcmVzIGF2YWlsYWJsZSB5ZXQ8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L1BhZ2VUZW1wbGF0ZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJQYWdlVGVtcGxhdGUiLCJTY29yZVdyYXBwZXIiLCJheGlvcyIsInN0eWxlcyIsImluZGV4Iiwic2NvcmVzIiwic2V0U2NvcmVzIiwibm9TY29yZU1lc3NhZ2UiLCJzZXROb1Njb3JlTWVzc2FnZSIsImZldGNoU2NvcmVzIiwicmVzcG9uc2UiLCJnZXQiLCJwcm9jZXNzIiwiZW52IiwiU0VSVkVSX1VSTCIsImRhdGEiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwibm9EYXRhTWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/scores/index.tsx\n"));

/***/ })

});