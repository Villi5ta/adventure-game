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

/***/ "./components/UpgradeMenu/UpgradeMenu.tsx":
/*!************************************************!*\
  !*** ./components/UpgradeMenu/UpgradeMenu.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _UpgradeMenu_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UpgradeMenu.module.css */ \"./components/UpgradeMenu/UpgradeMenu.module.css\");\n/* harmony import */ var _UpgradeMenu_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_UpgradeMenu_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst UpgradeMenu = ()=>{\n    _s();\n    const [healthUpgrade, setHealthUpgrade] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    if (healthUpgrade <= 0) {\n        setHealthUpgrade(0);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"Health upgrade\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: healthUpgrade\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\components\\\\UpgradeMenu\\\\UpgradeMenu.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_UpgradeMenu_module_css__WEBPACK_IMPORTED_MODULE_2___default().upgradeBtn),\n                onClick: ()=>setHealthUpgrade(healthUpgrade + 1),\n                children: \"+\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\components\\\\UpgradeMenu\\\\UpgradeMenu.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_UpgradeMenu_module_css__WEBPACK_IMPORTED_MODULE_2___default().upgradeBtn),\n                onClick: ()=>setHealthUpgrade(healthUpgrade - 1),\n                children: \"-\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\components\\\\UpgradeMenu\\\\UpgradeMenu.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\components\\\\UpgradeMenu\\\\UpgradeMenu.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\n_s(UpgradeMenu, \"aR0qNnrciXt7coIeWd9q+WEToxs=\");\n_c = UpgradeMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UpgradeMenu);\nvar _c;\n$RefreshReg$(_c, \"UpgradeMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1VwZ3JhZGVNZW51L1VwZ3JhZGVNZW51LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0M7QUFDTTtBQUU5QyxNQUFNRyxjQUFjOztJQUNsQixNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHSiwrQ0FBUUEsQ0FBQztJQUVuRCxJQUFJRyxpQkFBaUIsR0FBRztRQUN0QkMsaUJBQWlCO0lBQ25CO0lBRUEscUJBQ0UsOERBQUNDOztZQUFJOzBCQUVILDhEQUFDQzswQkFBR0g7Ozs7OzswQkFDSiw4REFBQ0k7Z0JBQ0NDLFdBQVdQLDJFQUFpQjtnQkFDNUJTLFNBQVMsSUFBTU4saUJBQWlCRCxnQkFBZ0I7MEJBQ2pEOzs7Ozs7MEJBR0QsOERBQUNJO2dCQUNDQyxXQUFXUCwyRUFBaUI7Z0JBQzVCUyxTQUFTLElBQU1OLGlCQUFpQkQsZ0JBQWdCOzBCQUNqRDs7Ozs7Ozs7Ozs7O0FBS1A7R0F6Qk1EO0tBQUFBO0FBMkJOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVXBncmFkZU1lbnUvVXBncmFkZU1lbnUudHN4P2I3MDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vVXBncmFkZU1lbnUubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgVXBncmFkZU1lbnUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2hlYWx0aFVwZ3JhZGUsIHNldEhlYWx0aFVwZ3JhZGVdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIGlmIChoZWFsdGhVcGdyYWRlIDw9IDApIHtcclxuICAgIHNldEhlYWx0aFVwZ3JhZGUoMCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgSGVhbHRoIHVwZ3JhZGVcclxuICAgICAgPHA+e2hlYWx0aFVwZ3JhZGV9PC9wPlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudXBncmFkZUJ0bn1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRIZWFsdGhVcGdyYWRlKGhlYWx0aFVwZ3JhZGUgKyAxKX1cclxuICAgICAgPlxyXG4gICAgICAgICtcclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy51cGdyYWRlQnRufVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEhlYWx0aFVwZ3JhZGUoaGVhbHRoVXBncmFkZSAtIDEpfVxyXG4gICAgICA+XHJcbiAgICAgICAgLVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVcGdyYWRlTWVudTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJVcGdyYWRlTWVudSIsImhlYWx0aFVwZ3JhZGUiLCJzZXRIZWFsdGhVcGdyYWRlIiwiZGl2IiwicCIsImJ1dHRvbiIsImNsYXNzTmFtZSIsInVwZ3JhZGVCdG4iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/UpgradeMenu/UpgradeMenu.tsx\n"));

/***/ })

});