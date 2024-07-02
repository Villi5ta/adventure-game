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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst Index = ()=>{\n    _s();\n    const [characterState, setCharacterState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [characterHealth, setCharacterHealth] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(2);\n    const [currentEncounter, setCurrentEncounter] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const encounters = [\n        {\n            question: \"blue or red?\",\n            options: [\n                {\n                    text: \"Option one\",\n                    healthChange: 0\n                },\n                {\n                    text: \"Option two\",\n                    healthChange: -1\n                }\n            ]\n        },\n        {\n            question: \"left or right?\",\n            options: [\n                {\n                    text: \"Option one\",\n                    healthChange: +1\n                },\n                {\n                    text: \"Option two\",\n                    healthChange: 0\n                }\n            ]\n        },\n        {\n            question: \"left or right?\",\n            options: [\n                {\n                    text: \"Option one\",\n                    healthChange: -1\n                },\n                {\n                    text: \"Option two\",\n                    healthChange: 0\n                }\n            ]\n        }\n    ];\n    const handleOptionClick = (healthChange)=>{\n        const updatedHealth = characterHealth + healthChange;\n        setCharacterHealth(updatedHealth);\n        if (updatedHealth <= 0) {\n            setCharacterState(false);\n        } else {\n            setCurrentEncounter((prev)=>prev + 1);\n        }\n    };\n    if (!characterState) {\n        setTimeout(()=>{\n            location.reload();\n        }, 1500);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default().body),\n            children: \"You are dead, restarting game...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Checklist app\\\\pages\\\\index.tsx\",\n            lineNumber: 48,\n            columnNumber: 12\n        }, undefined);\n    }\n    const encounter = encounters[currentEncounter];\n    if (!encounter) {\n        location.reload();\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default().body),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default().storyScreen),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default().roundOne),\n                    children: encounter.question\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Checklist app\\\\pages\\\\index.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Checklist app\\\\pages\\\\index.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default().optionOne),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>handleOptionClick(encounter.options[0].healthChange),\n                    children: encounter.options[0].text\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Checklist app\\\\pages\\\\index.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Checklist app\\\\pages\\\\index.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default().optionTwo),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>handleOptionClick(encounter.options[1].healthChange),\n                    children: encounter.options[1].text\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Checklist app\\\\pages\\\\index.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Checklist app\\\\pages\\\\index.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default().health),\n                children: [\n                    \"Health: \",\n                    characterHealth\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Checklist app\\\\pages\\\\index.tsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Checklist app\\\\pages\\\\index.tsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Index, \"9L4P/iJDuxvtcbDrWfM9BAQyOc8=\");\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQStDO0FBQ1A7QUFFeEMsTUFBTUcsUUFBUTs7SUFDWixNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUdILCtDQUFRQSxDQUFDO0lBQ3JELE1BQU0sQ0FBQ0ksaUJBQWlCQyxtQkFBbUIsR0FBR0wsK0NBQVFBLENBQUM7SUFDdkQsTUFBTSxDQUFDTSxrQkFBa0JDLG9CQUFvQixHQUFHUCwrQ0FBUUEsQ0FBQztJQUV6RCxNQUFNUSxhQUFhO1FBQ2pCO1lBQ0VDLFVBQVU7WUFDVkMsU0FBUztnQkFDUDtvQkFBRUMsTUFBTTtvQkFBY0MsY0FBYztnQkFBRTtnQkFDdEM7b0JBQUVELE1BQU07b0JBQWNDLGNBQWMsQ0FBQztnQkFBRTthQUN4QztRQUNIO1FBQ0E7WUFDRUgsVUFBVTtZQUNWQyxTQUFTO2dCQUNQO29CQUFFQyxNQUFNO29CQUFjQyxjQUFjLENBQUM7Z0JBQUU7Z0JBQ3ZDO29CQUFFRCxNQUFNO29CQUFjQyxjQUFjO2dCQUFFO2FBQ3ZDO1FBQ0g7UUFDQTtZQUNFSCxVQUFVO1lBQ1ZDLFNBQVM7Z0JBQ1A7b0JBQUVDLE1BQU07b0JBQWNDLGNBQWMsQ0FBQztnQkFBRTtnQkFDdkM7b0JBQUVELE1BQU07b0JBQWNDLGNBQWM7Z0JBQUU7YUFDdkM7UUFDSDtLQUNEO0lBRUQsTUFBTUMsb0JBQW9CLENBQUNEO1FBQ3pCLE1BQU1FLGdCQUFnQlYsa0JBQWtCUTtRQUN4Q1AsbUJBQW1CUztRQUVuQixJQUFJQSxpQkFBaUIsR0FBRztZQUN0Qlgsa0JBQWtCO1FBQ3BCLE9BQU87WUFDTEksb0JBQW9CLENBQUNRLE9BQVNBLE9BQU87UUFDdkM7SUFDRjtJQUVBLElBQUksQ0FBQ2IsZ0JBQWdCO1FBQ25CYyxXQUFXO1lBQ1RDLFNBQVNDLE1BQU07UUFDakIsR0FBRztRQUNILHFCQUFPLDhEQUFDQztZQUFJQyxXQUFXdEIscUVBQVc7c0JBQUU7Ozs7OztJQUN0QztJQUVBLE1BQU13QixZQUFZZCxVQUFVLENBQUNGLGlCQUFpQjtJQUU5QyxJQUFJLENBQUNnQixXQUFXO1FBQ2RMLFNBQVNDLE1BQU07SUFDakI7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBV3RCLHFFQUFXOzswQkFDekIsOERBQUNxQjtnQkFBSUMsV0FBV3RCLDRFQUFrQjswQkFDaEMsNEVBQUNxQjtvQkFBSUMsV0FBV3RCLHlFQUFlOzhCQUFHd0IsVUFBVWIsUUFBUTs7Ozs7Ozs7Ozs7MEJBR3RELDhEQUFDVTtnQkFBSUMsV0FBV3RCLDBFQUFnQjswQkFDOUIsNEVBQUM0QjtvQkFDQ0MsU0FBUyxJQUFNZCxrQkFBa0JTLFVBQVVaLE9BQU8sQ0FBQyxFQUFFLENBQUNFLFlBQVk7OEJBRWpFVSxVQUFVWixPQUFPLENBQUMsRUFBRSxDQUFDQyxJQUFJOzs7Ozs7Ozs7OzswQkFJOUIsOERBQUNRO2dCQUFJQyxXQUFXdEIsMEVBQWdCOzBCQUM5Qiw0RUFBQzRCO29CQUNDQyxTQUFTLElBQU1kLGtCQUFrQlMsVUFBVVosT0FBTyxDQUFDLEVBQUUsQ0FBQ0UsWUFBWTs4QkFFakVVLFVBQVVaLE9BQU8sQ0FBQyxFQUFFLENBQUNDLElBQUk7Ozs7Ozs7Ozs7OzBCQUc5Qiw4REFBQ1E7Z0JBQUlDLFdBQVd0Qix1RUFBYTs7b0JBQUU7b0JBQVNNOzs7Ozs7Ozs7Ozs7O0FBRzlDO0dBN0VNSDtLQUFBQTtBQStFTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IFtjaGFyYWN0ZXJTdGF0ZSwgc2V0Q2hhcmFjdGVyU3RhdGVdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtjaGFyYWN0ZXJIZWFsdGgsIHNldENoYXJhY3RlckhlYWx0aF0gPSB1c2VTdGF0ZSgyKTtcbiAgY29uc3QgW2N1cnJlbnRFbmNvdW50ZXIsIHNldEN1cnJlbnRFbmNvdW50ZXJdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgZW5jb3VudGVycyA9IFtcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJibHVlIG9yIHJlZD9cIixcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgeyB0ZXh0OiBcIk9wdGlvbiBvbmVcIiwgaGVhbHRoQ2hhbmdlOiAwIH0sXG4gICAgICAgIHsgdGV4dDogXCJPcHRpb24gdHdvXCIsIGhlYWx0aENoYW5nZTogLTEgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJsZWZ0IG9yIHJpZ2h0P1wiLFxuICAgICAgb3B0aW9uczogW1xuICAgICAgICB7IHRleHQ6IFwiT3B0aW9uIG9uZVwiLCBoZWFsdGhDaGFuZ2U6ICsxIH0sXG4gICAgICAgIHsgdGV4dDogXCJPcHRpb24gdHdvXCIsIGhlYWx0aENoYW5nZTogMCB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcImxlZnQgb3IgcmlnaHQ/XCIsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgIHsgdGV4dDogXCJPcHRpb24gb25lXCIsIGhlYWx0aENoYW5nZTogLTEgfSxcbiAgICAgICAgeyB0ZXh0OiBcIk9wdGlvbiB0d29cIiwgaGVhbHRoQ2hhbmdlOiAwIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIF07XG5cbiAgY29uc3QgaGFuZGxlT3B0aW9uQ2xpY2sgPSAoaGVhbHRoQ2hhbmdlKSA9PiB7XG4gICAgY29uc3QgdXBkYXRlZEhlYWx0aCA9IGNoYXJhY3RlckhlYWx0aCArIGhlYWx0aENoYW5nZTtcbiAgICBzZXRDaGFyYWN0ZXJIZWFsdGgodXBkYXRlZEhlYWx0aCk7XG5cbiAgICBpZiAodXBkYXRlZEhlYWx0aCA8PSAwKSB7XG4gICAgICBzZXRDaGFyYWN0ZXJTdGF0ZShmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEN1cnJlbnRFbmNvdW50ZXIoKHByZXYpID0+IHByZXYgKyAxKTtcbiAgICB9XG4gIH07XG5cbiAgaWYgKCFjaGFyYWN0ZXJTdGF0ZSkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSwgMTUwMCk7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm9keX0+WW91IGFyZSBkZWFkLCByZXN0YXJ0aW5nIGdhbWUuLi48L2Rpdj47XG4gIH1cblxuICBjb25zdCBlbmNvdW50ZXIgPSBlbmNvdW50ZXJzW2N1cnJlbnRFbmNvdW50ZXJdO1xuXG4gIGlmICghZW5jb3VudGVyKSB7XG4gICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm9keX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0b3J5U2NyZWVufT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yb3VuZE9uZX0+e2VuY291bnRlci5xdWVzdGlvbn08L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm9wdGlvbk9uZX0+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVPcHRpb25DbGljayhlbmNvdW50ZXIub3B0aW9uc1swXS5oZWFsdGhDaGFuZ2UpfVxuICAgICAgICA+XG4gICAgICAgICAge2VuY291bnRlci5vcHRpb25zWzBdLnRleHR9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3B0aW9uVHdvfT5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZU9wdGlvbkNsaWNrKGVuY291bnRlci5vcHRpb25zWzFdLmhlYWx0aENoYW5nZSl9XG4gICAgICAgID5cbiAgICAgICAgICB7ZW5jb3VudGVyLm9wdGlvbnNbMV0udGV4dH1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhbHRofT5IZWFsdGg6IHtjaGFyYWN0ZXJIZWFsdGh9PC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJSZWFjdCIsInVzZVN0YXRlIiwiSW5kZXgiLCJjaGFyYWN0ZXJTdGF0ZSIsInNldENoYXJhY3RlclN0YXRlIiwiY2hhcmFjdGVySGVhbHRoIiwic2V0Q2hhcmFjdGVySGVhbHRoIiwiY3VycmVudEVuY291bnRlciIsInNldEN1cnJlbnRFbmNvdW50ZXIiLCJlbmNvdW50ZXJzIiwicXVlc3Rpb24iLCJvcHRpb25zIiwidGV4dCIsImhlYWx0aENoYW5nZSIsImhhbmRsZU9wdGlvbkNsaWNrIiwidXBkYXRlZEhlYWx0aCIsInByZXYiLCJzZXRUaW1lb3V0IiwibG9jYXRpb24iLCJyZWxvYWQiLCJkaXYiLCJjbGFzc05hbWUiLCJib2R5IiwiZW5jb3VudGVyIiwic3RvcnlTY3JlZW4iLCJyb3VuZE9uZSIsIm9wdGlvbk9uZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJvcHRpb25Ud28iLCJoZWFsdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});