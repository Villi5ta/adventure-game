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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst Index = ()=>{\n    _s();\n    const [characterState, setCharacterState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [characterHealth, setCharacterHealth] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(2);\n    const [currentEncounter, setCurrentEncounter] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [resultMessage, setResultMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const encounters = [\n        {\n            question: \"1 Option two bad\",\n            options: [\n                {\n                    text: \"Option one\",\n                    healthChange: 0,\n                    resultMessage: \"aaaaaaaaaa\"\n                },\n                {\n                    text: \"Option two\",\n                    healthChange: -1,\n                    resultMessage: \"bbbbbbbbb\"\n                }\n            ]\n        },\n        {\n            question: \"2 Option two bad\",\n            options: [\n                {\n                    text: \"Option one\",\n                    healthChange: +1,\n                    resultMessage: \"aaaaaaaaaa\"\n                },\n                {\n                    text: \"Option two\",\n                    healthChange: -10,\n                    resultMessage: \"bbbbbbbbb\"\n                }\n            ]\n        },\n        {\n            question: \"3 Option one bad\",\n            options: [\n                {\n                    text: \"Option one\",\n                    healthChange: -1,\n                    resultMessage: \"aaaaaaaaaa\"\n                },\n                {\n                    text: \"Option two\",\n                    healthChange: 0,\n                    resultMessage: \"bbbbbbbbb\"\n                }\n            ]\n        }\n    ];\n    const optionClick = (healthChange, resultMessage)=>{\n        const optionMessage = resultMessage;\n        setResultMessage(optionMessage);\n        const updatedHealth = characterHealth + healthChange;\n        setCharacterHealth(updatedHealth);\n        if (updatedHealth <= 0) {\n            setCharacterState(false);\n        } else {\n            setCurrentEncounter((prev)=>prev + 1);\n        }\n    };\n    if (!characterState) {\n        setTimeout(()=>{\n            location.reload();\n        }, 1500);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default().body),\n            children: \"You are dead, restarting game...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Checklist app\\\\pages\\\\index.tsx\",\n            lineNumber: 52,\n            columnNumber: 12\n        }, undefined);\n    }\n    const encounter = encounters[currentEncounter];\n    if (!encounter) {\n        location.reload();\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default().body),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default().storyScreen),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default().roundOne),\n                    children: encounter.question\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Checklist app\\\\pages\\\\index.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Checklist app\\\\pages\\\\index.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default().optionOne),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>optionClick(encounter.options[0].healthChange, encounter.options[1].resultMessage),\n                    children: encounter.options[0].text\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Checklist app\\\\pages\\\\index.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Checklist app\\\\pages\\\\index.tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default().optionTwo),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>optionClick(encounter.options[1].healthChange, encounter.options[1].resultMessage),\n                    children: encounter.options[1].text\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Checklist app\\\\pages\\\\index.tsx\",\n                    lineNumber: 81,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Checklist app\\\\pages\\\\index.tsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default().health),\n                children: [\n                    \"Health: \",\n                    characterHealth\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Checklist app\\\\pages\\\\index.tsx\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default().resultMessage),\n                children: resultMessage\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Checklist app\\\\pages\\\\index.tsx\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Checklist app\\\\pages\\\\index.tsx\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Index, \"YS4Cr6iM8YH1EXY3nP0XaHt7KAw=\");\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgY29uc3QgW2NoYXJhY3RlclN0YXRlLCBzZXRDaGFyYWN0ZXJTdGF0ZV0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2NoYXJhY3RlckhlYWx0aCwgc2V0Q2hhcmFjdGVySGVhbHRoXSA9IHVzZVN0YXRlKDIpO1xuICBjb25zdCBbY3VycmVudEVuY291bnRlciwgc2V0Q3VycmVudEVuY291bnRlcl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3Jlc3VsdE1lc3NhZ2UsIHNldFJlc3VsdE1lc3NhZ2VdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgZW5jb3VudGVycyA9IFtcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCIxIE9wdGlvbiB0d28gYmFkXCIsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgIHsgdGV4dDogXCJPcHRpb24gb25lXCIsIGhlYWx0aENoYW5nZTogMCwgcmVzdWx0TWVzc2FnZTogXCJhYWFhYWFhYWFhXCIgfSxcbiAgICAgICAgeyB0ZXh0OiBcIk9wdGlvbiB0d29cIiwgaGVhbHRoQ2hhbmdlOiAtMSwgcmVzdWx0TWVzc2FnZTogXCJiYmJiYmJiYmJcIiB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIjIgT3B0aW9uIHR3byBiYWRcIixcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgeyB0ZXh0OiBcIk9wdGlvbiBvbmVcIiwgaGVhbHRoQ2hhbmdlOiArMSwgcmVzdWx0TWVzc2FnZTogXCJhYWFhYWFhYWFhXCIgfSxcbiAgICAgICAgeyB0ZXh0OiBcIk9wdGlvbiB0d29cIiwgaGVhbHRoQ2hhbmdlOiAtMTAsIHJlc3VsdE1lc3NhZ2U6IFwiYmJiYmJiYmJiXCIgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCIzIE9wdGlvbiBvbmUgYmFkXCIsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgIHsgdGV4dDogXCJPcHRpb24gb25lXCIsIGhlYWx0aENoYW5nZTogLTEsIHJlc3VsdE1lc3NhZ2U6IFwiYWFhYWFhYWFhYVwiIH0sXG4gICAgICAgIHsgdGV4dDogXCJPcHRpb24gdHdvXCIsIGhlYWx0aENoYW5nZTogMCwgcmVzdWx0TWVzc2FnZTogXCJiYmJiYmJiYmJcIiB9LFxuICAgICAgXSxcbiAgICB9LFxuICBdO1xuXG4gIGNvbnN0IG9wdGlvbkNsaWNrID0gKGhlYWx0aENoYW5nZSwgcmVzdWx0TWVzc2FnZSkgPT4ge1xuICAgIGNvbnN0IG9wdGlvbk1lc3NhZ2UgPSByZXN1bHRNZXNzYWdlO1xuICAgIHNldFJlc3VsdE1lc3NhZ2Uob3B0aW9uTWVzc2FnZSk7XG5cbiAgICBjb25zdCB1cGRhdGVkSGVhbHRoID0gY2hhcmFjdGVySGVhbHRoICsgaGVhbHRoQ2hhbmdlO1xuICAgIHNldENoYXJhY3RlckhlYWx0aCh1cGRhdGVkSGVhbHRoKTtcblxuICAgIGlmICh1cGRhdGVkSGVhbHRoIDw9IDApIHtcbiAgICAgIHNldENoYXJhY3RlclN0YXRlKGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0Q3VycmVudEVuY291bnRlcigocHJldikgPT4gcHJldiArIDEpO1xuICAgIH1cbiAgfTtcblxuICBpZiAoIWNoYXJhY3RlclN0YXRlKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9LCAxNTAwKTtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib2R5fT5Zb3UgYXJlIGRlYWQsIHJlc3RhcnRpbmcgZ2FtZS4uLjwvZGl2PjtcbiAgfVxuXG4gIGNvbnN0IGVuY291bnRlciA9IGVuY291bnRlcnNbY3VycmVudEVuY291bnRlcl07XG5cbiAgaWYgKCFlbmNvdW50ZXIpIHtcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib2R5fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RvcnlTY3JlZW59PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvdW5kT25lfT57ZW5jb3VudGVyLnF1ZXN0aW9ufTwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3B0aW9uT25lfT5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICBvcHRpb25DbGljayhcbiAgICAgICAgICAgICAgZW5jb3VudGVyLm9wdGlvbnNbMF0uaGVhbHRoQ2hhbmdlLFxuICAgICAgICAgICAgICBlbmNvdW50ZXIub3B0aW9uc1sxXS5yZXN1bHRNZXNzYWdlXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICA+XG4gICAgICAgICAge2VuY291bnRlci5vcHRpb25zWzBdLnRleHR9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3B0aW9uVHdvfT5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICBvcHRpb25DbGljayhcbiAgICAgICAgICAgICAgZW5jb3VudGVyLm9wdGlvbnNbMV0uaGVhbHRoQ2hhbmdlLFxuICAgICAgICAgICAgICBlbmNvdW50ZXIub3B0aW9uc1sxXS5yZXN1bHRNZXNzYWdlXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICA+XG4gICAgICAgICAge2VuY291bnRlci5vcHRpb25zWzFdLnRleHR9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWx0aH0+SGVhbHRoOiB7Y2hhcmFjdGVySGVhbHRofTwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZXN1bHRNZXNzYWdlfT57cmVzdWx0TWVzc2FnZX08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sIm5hbWVzIjpbInN0eWxlcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJJbmRleCIsImNoYXJhY3RlclN0YXRlIiwic2V0Q2hhcmFjdGVyU3RhdGUiLCJjaGFyYWN0ZXJIZWFsdGgiLCJzZXRDaGFyYWN0ZXJIZWFsdGgiLCJjdXJyZW50RW5jb3VudGVyIiwic2V0Q3VycmVudEVuY291bnRlciIsInJlc3VsdE1lc3NhZ2UiLCJzZXRSZXN1bHRNZXNzYWdlIiwiZW5jb3VudGVycyIsInF1ZXN0aW9uIiwib3B0aW9ucyIsInRleHQiLCJoZWFsdGhDaGFuZ2UiLCJvcHRpb25DbGljayIsIm9wdGlvbk1lc3NhZ2UiLCJ1cGRhdGVkSGVhbHRoIiwicHJldiIsInNldFRpbWVvdXQiLCJsb2NhdGlvbiIsInJlbG9hZCIsImRpdiIsImNsYXNzTmFtZSIsImJvZHkiLCJlbmNvdW50ZXIiLCJzdG9yeVNjcmVlbiIsInJvdW5kT25lIiwib3B0aW9uT25lIiwiYnV0dG9uIiwib25DbGljayIsIm9wdGlvblR3byIsImhlYWx0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});