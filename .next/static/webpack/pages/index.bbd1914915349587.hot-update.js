"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst Index = ()=>{\n    _s();\n    const [characterState, setCharacterState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [characterHealth, setCharacterHealth] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(2);\n    const [currentEncounter, setCurrentEncounter] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const encounters = [\n        {\n            question: \"blue or red?\",\n            options: [\n                {\n                    text: \"Option one\",\n                    characterHealth: characterHealth\n                },\n                {\n                    text: \"Option two\",\n                    characterHealth: characterHealth - 1\n                }\n            ]\n        },\n        {\n            question: \"left or right?\",\n            options: [\n                {\n                    text: \"Option one\",\n                    characterHealth: characterHealth - 1\n                },\n                {\n                    text: \"Option two\",\n                    characterHealth: characterHealth\n                }\n            ]\n        }\n    ];\n    const handleOptionClick = (keepsAlive)=>{\n        if (!keepsAlive) {\n            setCharacterState(false);\n        } else {\n            setCurrentEncounter((prev)=>prev + 1);\n        }\n    };\n    if (characterHealth <= 0) {\n        setTimeout(()=>{\n            location.reload();\n        }, 1500);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default().body),\n            children: \"You are dead, restarting game...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Checklist app\\\\pages\\\\index.tsx\",\n            lineNumber: 45,\n            columnNumber: 12\n        }, undefined);\n    }\n    const encounter = encounters[currentEncounter];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default().body),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default().storyScreen),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default().roundOne),\n                    children: encounter.question\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Checklist app\\\\pages\\\\index.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Checklist app\\\\pages\\\\index.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default().optionOne),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>handleOptionClick(encounter.options[0].keepsAlive),\n                    children: encounter.options[0].text\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Checklist app\\\\pages\\\\index.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Checklist app\\\\pages\\\\index.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default().optionTwo),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>handleOptionClick(encounter.options[1].keepsAlive),\n                    children: encounter.options[1].text\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Checklist app\\\\pages\\\\index.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Checklist app\\\\pages\\\\index.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default().health),\n                children: characterHealth\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Checklist app\\\\pages\\\\index.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Checklist app\\\\pages\\\\index.tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Index, \"9L4P/iJDuxvtcbDrWfM9BAQyOc8=\");\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQStDO0FBRVA7QUFFeEMsTUFBTUcsUUFBUTs7SUFDWixNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUdILCtDQUFRQSxDQUFDO0lBQ3JELE1BQU0sQ0FBQ0ksaUJBQWlCQyxtQkFBbUIsR0FBR0wsK0NBQVFBLENBQUM7SUFDdkQsTUFBTSxDQUFDTSxrQkFBa0JDLG9CQUFvQixHQUFHUCwrQ0FBUUEsQ0FBQztJQUV6RCxNQUFNUSxhQUFhO1FBQ2pCO1lBQ0VDLFVBQVU7WUFDVkMsU0FBUztnQkFDUDtvQkFDRUMsTUFBTTtvQkFDTlAsaUJBQWlCQTtnQkFDbkI7Z0JBQ0E7b0JBQ0VPLE1BQU07b0JBQ05QLGlCQUFpQkEsa0JBQWtCO2dCQUNyQzthQUNEO1FBQ0g7UUFDQTtZQUNFSyxVQUFVO1lBQ1ZDLFNBQVM7Z0JBQ1A7b0JBQUVDLE1BQU07b0JBQWNQLGlCQUFpQkEsa0JBQWtCO2dCQUFFO2dCQUMzRDtvQkFBRU8sTUFBTTtvQkFBY1AsaUJBQWlCQTtnQkFBZ0I7YUFDeEQ7UUFDSDtLQUNEO0lBRUQsTUFBTVEsb0JBQW9CLENBQUNDO1FBQ3pCLElBQUksQ0FBQ0EsWUFBWTtZQUNmVixrQkFBa0I7UUFDcEIsT0FBTztZQUNMSSxvQkFBb0IsQ0FBQ08sT0FBU0EsT0FBTztRQUN2QztJQUNGO0lBRUEsSUFBSVYsbUJBQW1CLEdBQUc7UUFDeEJXLFdBQVc7WUFDVEMsU0FBU0MsTUFBTTtRQUNqQixHQUFHO1FBQ0gscUJBQU8sOERBQUNDO1lBQUlDLFdBQVdyQixxRUFBVztzQkFBRTs7Ozs7O0lBQ3RDO0lBRUEsTUFBTXVCLFlBQVliLFVBQVUsQ0FBQ0YsaUJBQWlCO0lBRTlDLHFCQUNFLDhEQUFDWTtRQUFJQyxXQUFXckIscUVBQVc7OzBCQUN6Qiw4REFBQ29CO2dCQUFJQyxXQUFXckIsNEVBQWtCOzBCQUNoQyw0RUFBQ29CO29CQUFJQyxXQUFXckIseUVBQWU7OEJBQUd1QixVQUFVWixRQUFROzs7Ozs7Ozs7OzswQkFHdEQsOERBQUNTO2dCQUFJQyxXQUFXckIsMEVBQWdCOzBCQUM5Qiw0RUFBQzJCO29CQUNDQyxTQUFTLElBQU1kLGtCQUFrQlMsVUFBVVgsT0FBTyxDQUFDLEVBQUUsQ0FBQ0csVUFBVTs4QkFFL0RRLFVBQVVYLE9BQU8sQ0FBQyxFQUFFLENBQUNDLElBQUk7Ozs7Ozs7Ozs7OzBCQUk5Qiw4REFBQ087Z0JBQUlDLFdBQVdyQiwwRUFBZ0I7MEJBQzlCLDRFQUFDMkI7b0JBQ0NDLFNBQVMsSUFBTWQsa0JBQWtCUyxVQUFVWCxPQUFPLENBQUMsRUFBRSxDQUFDRyxVQUFVOzhCQUUvRFEsVUFBVVgsT0FBTyxDQUFDLEVBQUUsQ0FBQ0MsSUFBSTs7Ozs7Ozs7Ozs7MEJBRzlCLDhEQUFDTztnQkFBSUMsV0FBV3JCLHVFQUFhOzBCQUFHTTs7Ozs7Ozs7Ozs7O0FBR3RDO0dBckVNSDtLQUFBQTtBQXVFTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgY29uc3QgW2NoYXJhY3RlclN0YXRlLCBzZXRDaGFyYWN0ZXJTdGF0ZV0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2NoYXJhY3RlckhlYWx0aCwgc2V0Q2hhcmFjdGVySGVhbHRoXSA9IHVzZVN0YXRlKDIpO1xuICBjb25zdCBbY3VycmVudEVuY291bnRlciwgc2V0Q3VycmVudEVuY291bnRlcl0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBlbmNvdW50ZXJzID0gW1xuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcImJsdWUgb3IgcmVkP1wiLFxuICAgICAgb3B0aW9uczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJPcHRpb24gb25lXCIsXG4gICAgICAgICAgY2hhcmFjdGVySGVhbHRoOiBjaGFyYWN0ZXJIZWFsdGgsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIk9wdGlvbiB0d29cIixcbiAgICAgICAgICBjaGFyYWN0ZXJIZWFsdGg6IGNoYXJhY3RlckhlYWx0aCAtIDEsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwibGVmdCBvciByaWdodD9cIixcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgeyB0ZXh0OiBcIk9wdGlvbiBvbmVcIiwgY2hhcmFjdGVySGVhbHRoOiBjaGFyYWN0ZXJIZWFsdGggLSAxIH0sXG4gICAgICAgIHsgdGV4dDogXCJPcHRpb24gdHdvXCIsIGNoYXJhY3RlckhlYWx0aDogY2hhcmFjdGVySGVhbHRoIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIF07XG5cbiAgY29uc3QgaGFuZGxlT3B0aW9uQ2xpY2sgPSAoa2VlcHNBbGl2ZSkgPT4ge1xuICAgIGlmICgha2VlcHNBbGl2ZSkge1xuICAgICAgc2V0Q2hhcmFjdGVyU3RhdGUoZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRDdXJyZW50RW5jb3VudGVyKChwcmV2KSA9PiBwcmV2ICsgMSk7XG4gICAgfVxuICB9O1xuXG4gIGlmIChjaGFyYWN0ZXJIZWFsdGggPD0gMCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSwgMTUwMCk7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm9keX0+WW91IGFyZSBkZWFkLCByZXN0YXJ0aW5nIGdhbWUuLi48L2Rpdj47XG4gIH1cblxuICBjb25zdCBlbmNvdW50ZXIgPSBlbmNvdW50ZXJzW2N1cnJlbnRFbmNvdW50ZXJdO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib2R5fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RvcnlTY3JlZW59PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvdW5kT25lfT57ZW5jb3VudGVyLnF1ZXN0aW9ufTwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3B0aW9uT25lfT5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZU9wdGlvbkNsaWNrKGVuY291bnRlci5vcHRpb25zWzBdLmtlZXBzQWxpdmUpfVxuICAgICAgICA+XG4gICAgICAgICAge2VuY291bnRlci5vcHRpb25zWzBdLnRleHR9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3B0aW9uVHdvfT5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZU9wdGlvbkNsaWNrKGVuY291bnRlci5vcHRpb25zWzFdLmtlZXBzQWxpdmUpfVxuICAgICAgICA+XG4gICAgICAgICAge2VuY291bnRlci5vcHRpb25zWzFdLnRleHR9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWx0aH0+e2NoYXJhY3RlckhlYWx0aH08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sIm5hbWVzIjpbInN0eWxlcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJJbmRleCIsImNoYXJhY3RlclN0YXRlIiwic2V0Q2hhcmFjdGVyU3RhdGUiLCJjaGFyYWN0ZXJIZWFsdGgiLCJzZXRDaGFyYWN0ZXJIZWFsdGgiLCJjdXJyZW50RW5jb3VudGVyIiwic2V0Q3VycmVudEVuY291bnRlciIsImVuY291bnRlcnMiLCJxdWVzdGlvbiIsIm9wdGlvbnMiLCJ0ZXh0IiwiaGFuZGxlT3B0aW9uQ2xpY2siLCJrZWVwc0FsaXZlIiwicHJldiIsInNldFRpbWVvdXQiLCJsb2NhdGlvbiIsInJlbG9hZCIsImRpdiIsImNsYXNzTmFtZSIsImJvZHkiLCJlbmNvdW50ZXIiLCJzdG9yeVNjcmVlbiIsInJvdW5kT25lIiwib3B0aW9uT25lIiwiYnV0dG9uIiwib25DbGljayIsIm9wdGlvblR3byIsImhlYWx0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});