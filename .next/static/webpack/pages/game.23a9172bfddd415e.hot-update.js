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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _UpgradeMenu_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UpgradeMenu.module.css */ \"./components/UpgradeMenu/UpgradeMenu.module.css\");\n/* harmony import */ var _UpgradeMenu_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_UpgradeMenu_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst UpgradeMenu = (param)=>{\n    let { applyHealthUpgrade } = param;\n    _s();\n    const [healthUpgradeSelect, setHealthUpgradeSelect] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [armourUpgradeSelect, setArmourUpgradeSelect] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [showUpgradeMenu, setShowUpgradeMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    if (healthUpgradeSelect === -1) {\n        setHealthUpgradeSelect(0);\n    }\n    if (armourUpgradeSelect === -1) {\n        setArmourUpgradeSelect(0);\n    }\n    const setCharacterUpgrades = ()=>{\n        applyHealthUpgrade(healthUpgradeSelect);\n        setHealthUpgradeSelect(0);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_UpgradeMenu_module_css__WEBPACK_IMPORTED_MODULE_2___default().wrapper),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_UpgradeMenu_module_css__WEBPACK_IMPORTED_MODULE_2___default().upgradeMenuToggleBtn),\n                onClick: ()=>setShowUpgradeMenu(!showUpgradeMenu),\n                children: \"Upgrade menu\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\Frontend\\\\components\\\\UpgradeMenu\\\\UpgradeMenu.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            showUpgradeMenu && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_UpgradeMenu_module_css__WEBPACK_IMPORTED_MODULE_2___default().upgradeMenuWrapper),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_UpgradeMenu_module_css__WEBPACK_IMPORTED_MODULE_2___default().healthUpgrade),\n                        children: [\n                            \"Health upgrade\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: healthUpgradeSelect\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\Frontend\\\\components\\\\UpgradeMenu\\\\UpgradeMenu.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_UpgradeMenu_module_css__WEBPACK_IMPORTED_MODULE_2___default().upgradeBtns),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: (_UpgradeMenu_module_css__WEBPACK_IMPORTED_MODULE_2___default().upgradeBtn),\n                                        onClick: ()=>setHealthUpgradeSelect(healthUpgradeSelect + 1),\n                                        children: \"+\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\Frontend\\\\components\\\\UpgradeMenu\\\\UpgradeMenu.tsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: (_UpgradeMenu_module_css__WEBPACK_IMPORTED_MODULE_2___default().upgradeBtn),\n                                        onClick: ()=>setHealthUpgradeSelect(healthUpgradeSelect - 1),\n                                        children: \"-\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\Frontend\\\\components\\\\UpgradeMenu\\\\UpgradeMenu.tsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\Frontend\\\\components\\\\UpgradeMenu\\\\UpgradeMenu.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\Frontend\\\\components\\\\UpgradeMenu\\\\UpgradeMenu.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_UpgradeMenu_module_css__WEBPACK_IMPORTED_MODULE_2___default().armourUpgrade),\n                        children: [\n                            \"Armour upgrade\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: armourUpgradeSelect\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\Frontend\\\\components\\\\UpgradeMenu\\\\UpgradeMenu.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_UpgradeMenu_module_css__WEBPACK_IMPORTED_MODULE_2___default().upgradeBtns),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: (_UpgradeMenu_module_css__WEBPACK_IMPORTED_MODULE_2___default().upgradeBtn),\n                                        onClick: ()=>setArmourUpgradeSelect(armourUpgradeSelect + 1),\n                                        children: \"+\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\Frontend\\\\components\\\\UpgradeMenu\\\\UpgradeMenu.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: (_UpgradeMenu_module_css__WEBPACK_IMPORTED_MODULE_2___default().upgradeBtn),\n                                        onClick: ()=>setArmourUpgradeSelect(armourUpgradeSelect - 1),\n                                        children: \"-\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\Frontend\\\\components\\\\UpgradeMenu\\\\UpgradeMenu.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\Frontend\\\\components\\\\UpgradeMenu\\\\UpgradeMenu.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\Frontend\\\\components\\\\UpgradeMenu\\\\UpgradeMenu.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: healthUpgradeSelect || armourUpgradeSelect > 0 ? (_UpgradeMenu_module_css__WEBPACK_IMPORTED_MODULE_2___default().upgradeBtnSetActive) : (_UpgradeMenu_module_css__WEBPACK_IMPORTED_MODULE_2___default().upgradeBtnSetIdle),\n                        onClick: setCharacterUpgrades,\n                        children: \"Confirm upgrades\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\Frontend\\\\components\\\\UpgradeMenu\\\\UpgradeMenu.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\Frontend\\\\components\\\\UpgradeMenu\\\\UpgradeMenu.tsx\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\Frontend\\\\components\\\\UpgradeMenu\\\\UpgradeMenu.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s(UpgradeMenu, \"TuvS8/GFUJg77Z4YlQtFv+479wc=\");\n_c = UpgradeMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UpgradeMenu);\nvar _c;\n$RefreshReg$(_c, \"UpgradeMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1VwZ3JhZGVNZW51L1VwZ3JhZGVNZW51LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0M7QUFDTTtBQU05QyxNQUFNRyxjQUFjO1FBQUMsRUFBRUMsa0JBQWtCLEVBQW9COztJQUMzRCxNQUFNLENBQUNDLHFCQUFxQkMsdUJBQXVCLEdBQUdMLCtDQUFRQSxDQUFDO0lBQy9ELE1BQU0sQ0FBQ00scUJBQXFCQyx1QkFBdUIsR0FBR1AsK0NBQVFBLENBQUM7SUFFL0QsTUFBTSxDQUFDUSxpQkFBaUJDLG1CQUFtQixHQUFHVCwrQ0FBUUEsQ0FBQztJQUV2RCxJQUFJSSx3QkFBd0IsQ0FBQyxHQUFHO1FBQzlCQyx1QkFBdUI7SUFDekI7SUFFQSxJQUFJQyx3QkFBd0IsQ0FBQyxHQUFHO1FBQzlCQyx1QkFBdUI7SUFDekI7SUFFQSxNQUFNRyx1QkFBdUI7UUFDM0JQLG1CQUFtQkM7UUFDbkJDLHVCQUF1QjtJQUN6QjtJQUVBLHFCQUNFLDhEQUFDTTtRQUFJQyxXQUFXWCx3RUFBYzs7MEJBQzVCLDhEQUFDYTtnQkFDQ0YsV0FBV1gscUZBQTJCO2dCQUN0Q2UsU0FBUyxJQUFNUCxtQkFBbUIsQ0FBQ0Q7MEJBQ3BDOzs7Ozs7WUFJQUEsaUNBQ0MsOERBQUNHO2dCQUFJQyxXQUFXWCxtRkFBeUI7O2tDQUN2Qyw4REFBQ1U7d0JBQUlDLFdBQVdYLDhFQUFvQjs7NEJBQUU7MENBRXBDLDhEQUFDa0I7MENBQUdmOzs7Ozs7MENBQ0osOERBQUNPO2dDQUFJQyxXQUFXWCw0RUFBa0I7O2tEQUNoQyw4REFBQ2E7d0NBQ0NGLFdBQVdYLDJFQUFpQjt3Q0FDNUJlLFNBQVMsSUFBTVgsdUJBQXVCRCxzQkFBc0I7a0RBQzdEOzs7Ozs7a0RBR0QsOERBQUNVO3dDQUNDRixXQUFXWCwyRUFBaUI7d0NBQzVCZSxTQUFTLElBQU1YLHVCQUF1QkQsc0JBQXNCO2tEQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUtMLDhEQUFDTzt3QkFBSUMsV0FBV1gsOEVBQW9COzs0QkFBRTswQ0FFcEMsOERBQUNrQjswQ0FBR2I7Ozs7OzswQ0FDSiw4REFBQ0s7Z0NBQUlDLFdBQVdYLDRFQUFrQjs7a0RBQ2hDLDhEQUFDYTt3Q0FDQ0YsV0FBV1gsMkVBQWlCO3dDQUM1QmUsU0FBUyxJQUFNVCx1QkFBdUJELHNCQUFzQjtrREFDN0Q7Ozs7OztrREFHRCw4REFBQ1E7d0NBQ0NGLFdBQVdYLDJFQUFpQjt3Q0FDNUJlLFNBQVMsSUFBTVQsdUJBQXVCRCxzQkFBc0I7a0RBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBS0wsOERBQUNRO3dCQUNDRixXQUNFUix1QkFBdUJFLHNCQUFzQixJQUN6Q0wsb0ZBQTBCLEdBQzFCQSxrRkFBd0I7d0JBRTlCZSxTQUFTTjtrQ0FDVjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT1g7R0FoRk1SO0tBQUFBO0FBa0ZOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVXBncmFkZU1lbnUvVXBncmFkZU1lbnUudHN4P2I3MDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vVXBncmFkZU1lbnUubW9kdWxlLmNzc1wiO1xyXG5cclxudHlwZSBVcGdyYWRlTWVudVByb3BzID0ge1xyXG4gIGFwcGx5SGVhbHRoVXBncmFkZTogKHVwZ3JhZGVBbW91bnQ6IG51bWJlcikgPT4gdm9pZDtcclxufTtcclxuXHJcbmNvbnN0IFVwZ3JhZGVNZW51ID0gKHsgYXBwbHlIZWFsdGhVcGdyYWRlIH06IFVwZ3JhZGVNZW51UHJvcHMpID0+IHtcclxuICBjb25zdCBbaGVhbHRoVXBncmFkZVNlbGVjdCwgc2V0SGVhbHRoVXBncmFkZVNlbGVjdF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbYXJtb3VyVXBncmFkZVNlbGVjdCwgc2V0QXJtb3VyVXBncmFkZVNlbGVjdF0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgY29uc3QgW3Nob3dVcGdyYWRlTWVudSwgc2V0U2hvd1VwZ3JhZGVNZW51XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgaWYgKGhlYWx0aFVwZ3JhZGVTZWxlY3QgPT09IC0xKSB7XHJcbiAgICBzZXRIZWFsdGhVcGdyYWRlU2VsZWN0KDApO1xyXG4gIH1cclxuXHJcbiAgaWYgKGFybW91clVwZ3JhZGVTZWxlY3QgPT09IC0xKSB7XHJcbiAgICBzZXRBcm1vdXJVcGdyYWRlU2VsZWN0KDApO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2V0Q2hhcmFjdGVyVXBncmFkZXMgPSAoKSA9PiB7XHJcbiAgICBhcHBseUhlYWx0aFVwZ3JhZGUoaGVhbHRoVXBncmFkZVNlbGVjdCk7XHJcbiAgICBzZXRIZWFsdGhVcGdyYWRlU2VsZWN0KDApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudXBncmFkZU1lbnVUb2dnbGVCdG59XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd1VwZ3JhZGVNZW51KCFzaG93VXBncmFkZU1lbnUpfVxyXG4gICAgICA+XHJcbiAgICAgICAgVXBncmFkZSBtZW51XHJcbiAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAge3Nob3dVcGdyYWRlTWVudSAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51cGdyYWRlTWVudVdyYXBwZXJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFsdGhVcGdyYWRlfT5cclxuICAgICAgICAgICAgSGVhbHRoIHVwZ3JhZGVcclxuICAgICAgICAgICAgPHA+e2hlYWx0aFVwZ3JhZGVTZWxlY3R9PC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVwZ3JhZGVCdG5zfT5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy51cGdyYWRlQnRufVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SGVhbHRoVXBncmFkZVNlbGVjdChoZWFsdGhVcGdyYWRlU2VsZWN0ICsgMSl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgK1xyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnVwZ3JhZGVCdG59XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRIZWFsdGhVcGdyYWRlU2VsZWN0KGhlYWx0aFVwZ3JhZGVTZWxlY3QgLSAxKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAtXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFybW91clVwZ3JhZGV9PlxyXG4gICAgICAgICAgICBBcm1vdXIgdXBncmFkZVxyXG4gICAgICAgICAgICA8cD57YXJtb3VyVXBncmFkZVNlbGVjdH08L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXBncmFkZUJ0bnN9PlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnVwZ3JhZGVCdG59XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBcm1vdXJVcGdyYWRlU2VsZWN0KGFybW91clVwZ3JhZGVTZWxlY3QgKyAxKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICArXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudXBncmFkZUJ0bn1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFybW91clVwZ3JhZGVTZWxlY3QoYXJtb3VyVXBncmFkZVNlbGVjdCAtIDEpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIC1cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICBoZWFsdGhVcGdyYWRlU2VsZWN0IHx8IGFybW91clVwZ3JhZGVTZWxlY3QgPiAwXHJcbiAgICAgICAgICAgICAgICA/IHN0eWxlcy51cGdyYWRlQnRuU2V0QWN0aXZlXHJcbiAgICAgICAgICAgICAgICA6IHN0eWxlcy51cGdyYWRlQnRuU2V0SWRsZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3NldENoYXJhY3RlclVwZ3JhZGVzfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBDb25maXJtIHVwZ3JhZGVzXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVcGdyYWRlTWVudTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJVcGdyYWRlTWVudSIsImFwcGx5SGVhbHRoVXBncmFkZSIsImhlYWx0aFVwZ3JhZGVTZWxlY3QiLCJzZXRIZWFsdGhVcGdyYWRlU2VsZWN0IiwiYXJtb3VyVXBncmFkZVNlbGVjdCIsInNldEFybW91clVwZ3JhZGVTZWxlY3QiLCJzaG93VXBncmFkZU1lbnUiLCJzZXRTaG93VXBncmFkZU1lbnUiLCJzZXRDaGFyYWN0ZXJVcGdyYWRlcyIsImRpdiIsImNsYXNzTmFtZSIsIndyYXBwZXIiLCJidXR0b24iLCJ1cGdyYWRlTWVudVRvZ2dsZUJ0biIsIm9uQ2xpY2siLCJ1cGdyYWRlTWVudVdyYXBwZXIiLCJoZWFsdGhVcGdyYWRlIiwicCIsInVwZ3JhZGVCdG5zIiwidXBncmFkZUJ0biIsImFybW91clVwZ3JhZGUiLCJ1cGdyYWRlQnRuU2V0QWN0aXZlIiwidXBncmFkZUJ0blNldElkbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/UpgradeMenu/UpgradeMenu.tsx\n"));

/***/ })

});