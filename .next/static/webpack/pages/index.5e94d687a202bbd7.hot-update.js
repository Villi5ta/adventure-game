/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Encounters/Encounters.tsx":
/*!**********************************************!*\
  !*** ./components/Encounters/Encounters.tsx ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_CharacterSelector_CharacterSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CharacterSelector/CharacterSelector */ \"./components/CharacterSelector/CharacterSelector.tsx\");\n/* harmony import */ var _components_Encounters_Encounters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Encounters/Encounters */ \"./components/Encounters/Encounters.tsx\");\n/* harmony import */ var _components_Encounters_Encounters__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_Encounters_Encounters__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Index = ()=>{\n    _s();\n    const [characterState, setCharacterState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [characterHealth, setCharacterHealth] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    if (!characterState) {\n        setTimeout(()=>{\n            location.reload();\n        }, 1500);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default().body),\n            children: \"You are dead, restarting game...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\pages\\\\index.tsx\",\n            lineNumber: 14,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default().body),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CharacterSelector_CharacterSelector__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                setCharacterHealth: setCharacterHealth\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\pages\\\\index.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_Encounters_Encounters__WEBPACK_IMPORTED_MODULE_4___default()), {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\pages\\\\index.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default().health),\n                children: [\n                    \"Health: \",\n                    characterHealth\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\pages\\\\index.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default().resultMessage),\n                children: [\n                    \"message: \",\n                    resultMessage\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\pages\\\\index.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default().upgradePoints),\n                children: [\n                    \"Upgrade points: \",\n                    upgradePoints\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\pages\\\\index.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\pages\\\\index.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Index, \"z8opuM3+rAWNll1QgndmhUd7wQY=\");\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQStDO0FBQ1A7QUFDMEM7QUFDckI7QUFFN0QsTUFBTUssUUFBUTs7SUFDWixNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ3JELE1BQU0sQ0FBQ00saUJBQWlCQyxtQkFBbUIsR0FBR1AsK0NBQVFBLENBQUM7SUFFdkQsSUFBSSxDQUFDSSxnQkFBZ0I7UUFDbkJJLFdBQVc7WUFDVEMsU0FBU0MsTUFBTTtRQUNqQixHQUFHO1FBQ0gscUJBQU8sOERBQUNDO1lBQUlDLFdBQVdkLHFFQUFXO3NCQUFFOzs7Ozs7SUFDdEM7SUFFQSxxQkFDRSw4REFBQ2E7UUFBSUMsV0FBV2QscUVBQVc7OzBCQUN6Qiw4REFBQ0csdUZBQWlCQTtnQkFBQ00sb0JBQW9CQTs7Ozs7OzBCQUV2Qyw4REFBQ0wsMEVBQVVBOzs7OzswQkFDWCw4REFBQ1M7Z0JBQUlDLFdBQVdkLHVFQUFhOztvQkFBRTtvQkFBU1E7Ozs7Ozs7MEJBQ3hDLDhEQUFDSztnQkFBSUMsV0FBV2QsOEVBQW9COztvQkFBRTtvQkFBVWlCOzs7Ozs7OzBCQUNoRCw4REFBQ0o7Z0JBQUlDLFdBQVdkLDhFQUFvQjs7b0JBQUU7b0JBQ25Ca0I7Ozs7Ozs7Ozs7Ozs7QUFJekI7R0F2Qk1iO0tBQUFBO0FBeUJOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENoYXJhY3RlclNlbGVjdG9yIGZyb20gXCIuLi9jb21wb25lbnRzL0NoYXJhY3RlclNlbGVjdG9yL0NoYXJhY3RlclNlbGVjdG9yXCI7XG5pbXBvcnQgRW5jb3VudGVycyBmcm9tIFwiLi4vY29tcG9uZW50cy9FbmNvdW50ZXJzL0VuY291bnRlcnNcIjtcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IFtjaGFyYWN0ZXJTdGF0ZSwgc2V0Q2hhcmFjdGVyU3RhdGVdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtjaGFyYWN0ZXJIZWFsdGgsIHNldENoYXJhY3RlckhlYWx0aF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBpZiAoIWNoYXJhY3RlclN0YXRlKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9LCAxNTAwKTtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib2R5fT5Zb3UgYXJlIGRlYWQsIHJlc3RhcnRpbmcgZ2FtZS4uLjwvZGl2PjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib2R5fT5cbiAgICAgIDxDaGFyYWN0ZXJTZWxlY3RvciBzZXRDaGFyYWN0ZXJIZWFsdGg9e3NldENoYXJhY3RlckhlYWx0aH0gLz5cblxuICAgICAgPEVuY291bnRlcnMgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhbHRofT5IZWFsdGg6IHtjaGFyYWN0ZXJIZWFsdGh9PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlc3VsdE1lc3NhZ2V9Pm1lc3NhZ2U6IHtyZXN1bHRNZXNzYWdlfTwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51cGdyYWRlUG9pbnRzfT5cbiAgICAgICAgVXBncmFkZSBwb2ludHM6IHt1cGdyYWRlUG9pbnRzfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJSZWFjdCIsInVzZVN0YXRlIiwiQ2hhcmFjdGVyU2VsZWN0b3IiLCJFbmNvdW50ZXJzIiwiSW5kZXgiLCJjaGFyYWN0ZXJTdGF0ZSIsInNldENoYXJhY3RlclN0YXRlIiwiY2hhcmFjdGVySGVhbHRoIiwic2V0Q2hhcmFjdGVySGVhbHRoIiwic2V0VGltZW91dCIsImxvY2F0aW9uIiwicmVsb2FkIiwiZGl2IiwiY2xhc3NOYW1lIiwiYm9keSIsImhlYWx0aCIsInJlc3VsdE1lc3NhZ2UiLCJ1cGdyYWRlUG9pbnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});