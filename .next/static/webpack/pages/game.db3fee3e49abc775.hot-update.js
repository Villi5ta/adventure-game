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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _UpgradeMenu_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UpgradeMenu.module.css */ \"./components/UpgradeMenu/UpgradeMenu.module.css\");\n/* harmony import */ var _UpgradeMenu_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_UpgradeMenu_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst UpgradeMenu = ()=>{\n    _s();\n    const [healthUpgrade, setHealthUpgrade] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    if (healthUpgrade == -1) {\n        setHealthUpgrade(0);\n    }\n    const setCharacterUpgrades = ()=>{\n        healthUpgrade;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"Health upgrade\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: healthUpgrade\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\components\\\\UpgradeMenu\\\\UpgradeMenu.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_UpgradeMenu_module_css__WEBPACK_IMPORTED_MODULE_2___default().upgradeBtn),\n                onClick: ()=>setHealthUpgrade(healthUpgrade + 1),\n                children: \"+\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\components\\\\UpgradeMenu\\\\UpgradeMenu.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_UpgradeMenu_module_css__WEBPACK_IMPORTED_MODULE_2___default().upgradeBtn),\n                onClick: ()=>setHealthUpgrade(healthUpgrade - 1),\n                children: \"-\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\components\\\\UpgradeMenu\\\\UpgradeMenu.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: setCharacterUpgrades,\n                children: \"Set upgrade\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\components\\\\UpgradeMenu\\\\UpgradeMenu.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\components\\\\UpgradeMenu\\\\UpgradeMenu.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n_s(UpgradeMenu, \"aR0qNnrciXt7coIeWd9q+WEToxs=\");\n_c = UpgradeMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UpgradeMenu);\nvar _c;\n$RefreshReg$(_c, \"UpgradeMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1VwZ3JhZGVNZW51L1VwZ3JhZGVNZW51LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0M7QUFDTTtBQUU5QyxNQUFNRyxjQUFjOztJQUNsQixNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHSiwrQ0FBUUEsQ0FBQztJQUVuRCxJQUFJRyxpQkFBaUIsQ0FBQyxHQUFHO1FBQ3ZCQyxpQkFBaUI7SUFDbkI7SUFFQSxNQUFNQyx1QkFBdUI7UUFDM0JGO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0c7O1lBQUk7MEJBRUgsOERBQUNDOzBCQUFHSjs7Ozs7OzBCQUNKLDhEQUFDSztnQkFDQ0MsV0FBV1IsMkVBQWlCO2dCQUM1QlUsU0FBUyxJQUFNUCxpQkFBaUJELGdCQUFnQjswQkFDakQ7Ozs7OzswQkFHRCw4REFBQ0s7Z0JBQ0NDLFdBQVdSLDJFQUFpQjtnQkFDNUJVLFNBQVMsSUFBTVAsaUJBQWlCRCxnQkFBZ0I7MEJBQ2pEOzs7Ozs7MEJBR0QsOERBQUNLO2dCQUFPRyxTQUFTTjswQkFBc0I7Ozs7Ozs7Ozs7OztBQUc3QztHQTlCTUg7S0FBQUE7QUFnQ04sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VcGdyYWRlTWVudS9VcGdyYWRlTWVudS50c3g/YjcwNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9VcGdyYWRlTWVudS5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBVcGdyYWRlTWVudSA9ICgpID0+IHtcclxuICBjb25zdCBbaGVhbHRoVXBncmFkZSwgc2V0SGVhbHRoVXBncmFkZV0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgaWYgKGhlYWx0aFVwZ3JhZGUgPT0gLTEpIHtcclxuICAgIHNldEhlYWx0aFVwZ3JhZGUoMCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzZXRDaGFyYWN0ZXJVcGdyYWRlcyA9ICgpID0+IHtcclxuICAgIGhlYWx0aFVwZ3JhZGU7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIEhlYWx0aCB1cGdyYWRlXHJcbiAgICAgIDxwPntoZWFsdGhVcGdyYWRlfTwvcD5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnVwZ3JhZGVCdG59XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SGVhbHRoVXBncmFkZShoZWFsdGhVcGdyYWRlICsgMSl9XHJcbiAgICAgID5cclxuICAgICAgICArXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudXBncmFkZUJ0bn1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRIZWFsdGhVcGdyYWRlKGhlYWx0aFVwZ3JhZGUgLSAxKX1cclxuICAgICAgPlxyXG4gICAgICAgIC1cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17c2V0Q2hhcmFjdGVyVXBncmFkZXN9PlNldCB1cGdyYWRlPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXBncmFkZU1lbnU7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiVXBncmFkZU1lbnUiLCJoZWFsdGhVcGdyYWRlIiwic2V0SGVhbHRoVXBncmFkZSIsInNldENoYXJhY3RlclVwZ3JhZGVzIiwiZGl2IiwicCIsImJ1dHRvbiIsImNsYXNzTmFtZSIsInVwZ3JhZGVCdG4iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/UpgradeMenu/UpgradeMenu.tsx\n"));

/***/ })

});