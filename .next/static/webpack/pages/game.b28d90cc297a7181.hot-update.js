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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _UpgradeMenu_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UpgradeMenu.module.css */ \"./components/UpgradeMenu/UpgradeMenu.module.css\");\n/* harmony import */ var _UpgradeMenu_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_UpgradeMenu_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst UpgradeMenu = (param)=>{\n    let { applyHealthUpgrade } = param;\n    _s();\n    const [healthUpgradeSelect, setHealthUpgradeSelect] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [showUpgradeMenu, setShowUpgradeMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    if (healthUpgradeSelect === -1) {\n        setHealthUpgradeSelect(0);\n    }\n    const setCharacterUpgrades = ()=>{\n        applyHealthUpgrade(healthUpgradeSelect);\n        setHealthUpgradeSelect(0);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_UpgradeMenu_module_css__WEBPACK_IMPORTED_MODULE_2___default().wrapper),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_UpgradeMenu_module_css__WEBPACK_IMPORTED_MODULE_2___default().upgradeMenuToggleBtn),\n                onClick: ()=>setShowUpgradeMenu(!showUpgradeMenu),\n                children: \"Show upgrades\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\components\\\\UpgradeMenu\\\\UpgradeMenu.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            showUpgradeMenu && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_UpgradeMenu_module_css__WEBPACK_IMPORTED_MODULE_2___default().upgradeMenuWrapper),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_UpgradeMenu_module_css__WEBPACK_IMPORTED_MODULE_2___default().healthUpgrade),\n                        children: [\n                            \"Health upgrade\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: healthUpgradeSelect\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\components\\\\UpgradeMenu\\\\UpgradeMenu.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: (_UpgradeMenu_module_css__WEBPACK_IMPORTED_MODULE_2___default().upgradeBtn),\n                                onClick: ()=>setHealthUpgradeSelect(healthUpgradeSelect + 1),\n                                children: \"+\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\components\\\\UpgradeMenu\\\\UpgradeMenu.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: (_UpgradeMenu_module_css__WEBPACK_IMPORTED_MODULE_2___default().upgradeBtn),\n                                onClick: ()=>setHealthUpgradeSelect(healthUpgradeSelect - 1),\n                                children: \"-\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\components\\\\UpgradeMenu\\\\UpgradeMenu.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\components\\\\UpgradeMenu\\\\UpgradeMenu.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_UpgradeMenu_module_css__WEBPACK_IMPORTED_MODULE_2___default().upgradeBtnSet),\n                        onClick: setCharacterUpgrades,\n                        children: \"Set upgrade\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\components\\\\UpgradeMenu\\\\UpgradeMenu.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\components\\\\UpgradeMenu\\\\UpgradeMenu.tsx\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\components\\\\UpgradeMenu\\\\UpgradeMenu.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(UpgradeMenu, \"wbunnTU0J7mFsblbQ2K6evlMNfc=\");\n_c = UpgradeMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UpgradeMenu);\nvar _c;\n$RefreshReg$(_c, \"UpgradeMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1VwZ3JhZGVNZW51L1VwZ3JhZGVNZW51LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0M7QUFDTTtBQU05QyxNQUFNRyxjQUFjO1FBQUMsRUFBRUMsa0JBQWtCLEVBQW9COztJQUMzRCxNQUFNLENBQUNDLHFCQUFxQkMsdUJBQXVCLEdBQUdMLCtDQUFRQSxDQUFDO0lBQy9ELE1BQU0sQ0FBQ00saUJBQWlCQyxtQkFBbUIsR0FBR1AsK0NBQVFBLENBQUM7SUFFdkQsSUFBSUksd0JBQXdCLENBQUMsR0FBRztRQUM5QkMsdUJBQXVCO0lBQ3pCO0lBRUEsTUFBTUcsdUJBQXVCO1FBQzNCTCxtQkFBbUJDO1FBQ25CQyx1QkFBdUI7SUFDekI7SUFFQSxxQkFDRSw4REFBQ0k7UUFBSUMsV0FBV1Qsd0VBQWM7OzBCQUM1Qiw4REFBQ1c7Z0JBQ0NGLFdBQVdULHFGQUEyQjtnQkFDdENhLFNBQVMsSUFBTVAsbUJBQW1CLENBQUNEOzBCQUNwQzs7Ozs7O1lBSUFBLGlDQUNDLDhEQUFDRztnQkFBSUMsV0FBV1QsbUZBQXlCOztrQ0FDdkMsOERBQUNRO3dCQUFJQyxXQUFXVCw4RUFBb0I7OzRCQUFFOzBDQUVwQyw4REFBQ2dCOzBDQUFHYjs7Ozs7OzBDQUNKLDhEQUFDUTtnQ0FDQ0YsV0FBV1QsMkVBQWlCO2dDQUM1QmEsU0FBUyxJQUFNVCx1QkFBdUJELHNCQUFzQjswQ0FDN0Q7Ozs7OzswQ0FHRCw4REFBQ1E7Z0NBQ0NGLFdBQVdULDJFQUFpQjtnQ0FDNUJhLFNBQVMsSUFBTVQsdUJBQXVCRCxzQkFBc0I7MENBQzdEOzs7Ozs7Ozs7Ozs7a0NBSUgsOERBQUNRO3dCQUNDRixXQUFXVCw4RUFBb0I7d0JBQy9CYSxTQUFTTjtrQ0FDVjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT1g7R0FsRE1OO0tBQUFBO0FBb0ROLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVXBncmFkZU1lbnUvVXBncmFkZU1lbnUudHN4P2I3MDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vVXBncmFkZU1lbnUubW9kdWxlLmNzc1wiO1xyXG5cclxudHlwZSBVcGdyYWRlTWVudVByb3BzID0ge1xyXG4gIGFwcGx5SGVhbHRoVXBncmFkZTogKHVwZ3JhZGVBbW91bnQ6IG51bWJlcikgPT4gdm9pZDtcclxufTtcclxuXHJcbmNvbnN0IFVwZ3JhZGVNZW51ID0gKHsgYXBwbHlIZWFsdGhVcGdyYWRlIH06IFVwZ3JhZGVNZW51UHJvcHMpID0+IHtcclxuICBjb25zdCBbaGVhbHRoVXBncmFkZVNlbGVjdCwgc2V0SGVhbHRoVXBncmFkZVNlbGVjdF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbc2hvd1VwZ3JhZGVNZW51LCBzZXRTaG93VXBncmFkZU1lbnVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBpZiAoaGVhbHRoVXBncmFkZVNlbGVjdCA9PT0gLTEpIHtcclxuICAgIHNldEhlYWx0aFVwZ3JhZGVTZWxlY3QoMCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzZXRDaGFyYWN0ZXJVcGdyYWRlcyA9ICgpID0+IHtcclxuICAgIGFwcGx5SGVhbHRoVXBncmFkZShoZWFsdGhVcGdyYWRlU2VsZWN0KTtcclxuICAgIHNldEhlYWx0aFVwZ3JhZGVTZWxlY3QoMCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy51cGdyYWRlTWVudVRvZ2dsZUJ0bn1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93VXBncmFkZU1lbnUoIXNob3dVcGdyYWRlTWVudSl9XHJcbiAgICAgID5cclxuICAgICAgICBTaG93IHVwZ3JhZGVzXHJcbiAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAge3Nob3dVcGdyYWRlTWVudSAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51cGdyYWRlTWVudVdyYXBwZXJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFsdGhVcGdyYWRlfT5cclxuICAgICAgICAgICAgSGVhbHRoIHVwZ3JhZGVcclxuICAgICAgICAgICAgPHA+e2hlYWx0aFVwZ3JhZGVTZWxlY3R9PC9wPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudXBncmFkZUJ0bn1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRIZWFsdGhVcGdyYWRlU2VsZWN0KGhlYWx0aFVwZ3JhZGVTZWxlY3QgKyAxKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICtcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy51cGdyYWRlQnRufVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEhlYWx0aFVwZ3JhZGVTZWxlY3QoaGVhbHRoVXBncmFkZVNlbGVjdCAtIDEpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgLVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy51cGdyYWRlQnRuU2V0fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtzZXRDaGFyYWN0ZXJVcGdyYWRlc31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgU2V0IHVwZ3JhZGVcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVwZ3JhZGVNZW51O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIlVwZ3JhZGVNZW51IiwiYXBwbHlIZWFsdGhVcGdyYWRlIiwiaGVhbHRoVXBncmFkZVNlbGVjdCIsInNldEhlYWx0aFVwZ3JhZGVTZWxlY3QiLCJzaG93VXBncmFkZU1lbnUiLCJzZXRTaG93VXBncmFkZU1lbnUiLCJzZXRDaGFyYWN0ZXJVcGdyYWRlcyIsImRpdiIsImNsYXNzTmFtZSIsIndyYXBwZXIiLCJidXR0b24iLCJ1cGdyYWRlTWVudVRvZ2dsZUJ0biIsIm9uQ2xpY2siLCJ1cGdyYWRlTWVudVdyYXBwZXIiLCJoZWFsdGhVcGdyYWRlIiwicCIsInVwZ3JhZGVCdG4iLCJ1cGdyYWRlQnRuU2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/UpgradeMenu/UpgradeMenu.tsx\n"));

/***/ })

});