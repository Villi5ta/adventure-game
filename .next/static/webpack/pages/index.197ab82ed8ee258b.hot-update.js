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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst Index = ()=>{\n    _s();\n    const [characterState, setCharacterState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [characterHealth, setCharacterHealth] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(2);\n    const [currentEncounter, setCurrentEncounter] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const encounters = [\n        {\n            question: \"blue or red?\",\n            options: [\n                {\n                    text: \"Option one\",\n                    healthChange: 0\n                },\n                {\n                    text: \"Option two\",\n                    healthChange: -1\n                }\n            ]\n        },\n        {\n            question: \"left or right?\",\n            options: [\n                {\n                    text: \"Option one\",\n                    healthChange: -1\n                },\n                {\n                    text: \"Option two\",\n                    healthChange: 0\n                }\n            ]\n        }\n    ];\n    const handleOptionClick = (healthChange)=>{\n        const newHealth = characterHealth + healthChange;\n        setCharacterHealth(newHealth);\n        if (newHealth <= 0) {\n            setCharacterState(false);\n        } else {\n            setCurrentEncounter((prev)=>prev + 1);\n        }\n    };\n    if (!characterState) {\n        setTimeout(()=>{\n            location.reload();\n        }, 1500);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default().body),\n            children: \"You are dead, restarting game...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Checklist app\\\\pages\\\\index.tsx\",\n            lineNumber: 47,\n            columnNumber: 12\n        }, undefined);\n    }\n    const encounter = encounters[currentEncounter];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default().body),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default().storyScreen),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default().roundOne),\n                    children: encounter.question\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Checklist app\\\\pages\\\\index.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Checklist app\\\\pages\\\\index.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default().optionOne),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>handleOptionClick(encounter.options[0].healthChange),\n                    children: encounter.options[0].text\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Checklist app\\\\pages\\\\index.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Checklist app\\\\pages\\\\index.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default().optionTwo),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>handleOptionClick(encounter.options[1].healthChange),\n                    children: encounter.options[1].text\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Checklist app\\\\pages\\\\index.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Checklist app\\\\pages\\\\index.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default().health),\n                children: [\n                    \"Health: \",\n                    characterHealth\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Checklist app\\\\pages\\\\index.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Checklist app\\\\pages\\\\index.tsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Index, \"9L4P/iJDuxvtcbDrWfM9BAQyOc8=\");\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQStDO0FBQ1A7QUFFeEMsTUFBTUcsUUFBUTs7SUFDWixNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUdILCtDQUFRQSxDQUFDO0lBQ3JELE1BQU0sQ0FBQ0ksaUJBQWlCQyxtQkFBbUIsR0FBR0wsK0NBQVFBLENBQUM7SUFDdkQsTUFBTSxDQUFDTSxrQkFBa0JDLG9CQUFvQixHQUFHUCwrQ0FBUUEsQ0FBQztJQUV6RCxNQUFNUSxhQUFhO1FBQ2pCO1lBQ0VDLFVBQVU7WUFDVkMsU0FBUztnQkFDUDtvQkFDRUMsTUFBTTtvQkFDTkMsY0FBYztnQkFDaEI7Z0JBQ0E7b0JBQ0VELE1BQU07b0JBQ05DLGNBQWMsQ0FBQztnQkFDakI7YUFDRDtRQUNIO1FBQ0E7WUFDRUgsVUFBVTtZQUNWQyxTQUFTO2dCQUNQO29CQUFFQyxNQUFNO29CQUFjQyxjQUFjLENBQUM7Z0JBQUU7Z0JBQ3ZDO29CQUFFRCxNQUFNO29CQUFjQyxjQUFjO2dCQUFFO2FBQ3ZDO1FBQ0g7S0FDRDtJQUVELE1BQU1DLG9CQUFvQixDQUFDRDtRQUN6QixNQUFNRSxZQUFZVixrQkFBa0JRO1FBQ3BDUCxtQkFBbUJTO1FBRW5CLElBQUlBLGFBQWEsR0FBRztZQUNsQlgsa0JBQWtCO1FBQ3BCLE9BQU87WUFDTEksb0JBQW9CLENBQUNRLE9BQVNBLE9BQU87UUFDdkM7SUFDRjtJQUVBLElBQUksQ0FBQ2IsZ0JBQWdCO1FBQ25CYyxXQUFXO1lBQ1RDLFNBQVNDLE1BQU07UUFDakIsR0FBRztRQUNILHFCQUFPLDhEQUFDQztZQUFJQyxXQUFXdEIscUVBQVc7c0JBQUU7Ozs7OztJQUN0QztJQUVBLE1BQU13QixZQUFZZCxVQUFVLENBQUNGLGlCQUFpQjtJQUU5QyxxQkFDRSw4REFBQ2E7UUFBSUMsV0FBV3RCLHFFQUFXOzswQkFDekIsOERBQUNxQjtnQkFBSUMsV0FBV3RCLDRFQUFrQjswQkFDaEMsNEVBQUNxQjtvQkFBSUMsV0FBV3RCLHlFQUFlOzhCQUFHd0IsVUFBVWIsUUFBUTs7Ozs7Ozs7Ozs7MEJBR3RELDhEQUFDVTtnQkFBSUMsV0FBV3RCLDBFQUFnQjswQkFDOUIsNEVBQUM0QjtvQkFDQ0MsU0FBUyxJQUFNZCxrQkFBa0JTLFVBQVVaLE9BQU8sQ0FBQyxFQUFFLENBQUNFLFlBQVk7OEJBRWpFVSxVQUFVWixPQUFPLENBQUMsRUFBRSxDQUFDQyxJQUFJOzs7Ozs7Ozs7OzswQkFJOUIsOERBQUNRO2dCQUFJQyxXQUFXdEIsMEVBQWdCOzBCQUM5Qiw0RUFBQzRCO29CQUNDQyxTQUFTLElBQU1kLGtCQUFrQlMsVUFBVVosT0FBTyxDQUFDLEVBQUUsQ0FBQ0UsWUFBWTs4QkFFakVVLFVBQVVaLE9BQU8sQ0FBQyxFQUFFLENBQUNDLElBQUk7Ozs7Ozs7Ozs7OzBCQUc5Qiw4REFBQ1E7Z0JBQUlDLFdBQVd0Qix1RUFBYTs7b0JBQUU7b0JBQVNNOzs7Ozs7Ozs7Ozs7O0FBRzlDO0dBeEVNSDtLQUFBQTtBQTBFTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IFtjaGFyYWN0ZXJTdGF0ZSwgc2V0Q2hhcmFjdGVyU3RhdGVdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtjaGFyYWN0ZXJIZWFsdGgsIHNldENoYXJhY3RlckhlYWx0aF0gPSB1c2VTdGF0ZSgyKTtcbiAgY29uc3QgW2N1cnJlbnRFbmNvdW50ZXIsIHNldEN1cnJlbnRFbmNvdW50ZXJdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgZW5jb3VudGVycyA9IFtcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJibHVlIG9yIHJlZD9cIixcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiT3B0aW9uIG9uZVwiLFxuICAgICAgICAgIGhlYWx0aENoYW5nZTogMCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiT3B0aW9uIHR3b1wiLFxuICAgICAgICAgIGhlYWx0aENoYW5nZTogLTEsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwibGVmdCBvciByaWdodD9cIixcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgeyB0ZXh0OiBcIk9wdGlvbiBvbmVcIiwgaGVhbHRoQ2hhbmdlOiAtMSB9LFxuICAgICAgICB7IHRleHQ6IFwiT3B0aW9uIHR3b1wiLCBoZWFsdGhDaGFuZ2U6IDAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgXTtcblxuICBjb25zdCBoYW5kbGVPcHRpb25DbGljayA9IChoZWFsdGhDaGFuZ2UpID0+IHtcbiAgICBjb25zdCBuZXdIZWFsdGggPSBjaGFyYWN0ZXJIZWFsdGggKyBoZWFsdGhDaGFuZ2U7XG4gICAgc2V0Q2hhcmFjdGVySGVhbHRoKG5ld0hlYWx0aCk7XG5cbiAgICBpZiAobmV3SGVhbHRoIDw9IDApIHtcbiAgICAgIHNldENoYXJhY3RlclN0YXRlKGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0Q3VycmVudEVuY291bnRlcigocHJldikgPT4gcHJldiArIDEpO1xuICAgIH1cbiAgfTtcblxuICBpZiAoIWNoYXJhY3RlclN0YXRlKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9LCAxNTAwKTtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib2R5fT5Zb3UgYXJlIGRlYWQsIHJlc3RhcnRpbmcgZ2FtZS4uLjwvZGl2PjtcbiAgfVxuXG4gIGNvbnN0IGVuY291bnRlciA9IGVuY291bnRlcnNbY3VycmVudEVuY291bnRlcl07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvZHl9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdG9yeVNjcmVlbn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucm91bmRPbmV9PntlbmNvdW50ZXIucXVlc3Rpb259PC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vcHRpb25PbmV9PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlT3B0aW9uQ2xpY2soZW5jb3VudGVyLm9wdGlvbnNbMF0uaGVhbHRoQ2hhbmdlKX1cbiAgICAgICAgPlxuICAgICAgICAgIHtlbmNvdW50ZXIub3B0aW9uc1swXS50ZXh0fVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm9wdGlvblR3b30+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVPcHRpb25DbGljayhlbmNvdW50ZXIub3B0aW9uc1sxXS5oZWFsdGhDaGFuZ2UpfVxuICAgICAgICA+XG4gICAgICAgICAge2VuY291bnRlci5vcHRpb25zWzFdLnRleHR9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWx0aH0+SGVhbHRoOiB7Y2hhcmFjdGVySGVhbHRofTwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwibmFtZXMiOlsic3R5bGVzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkluZGV4IiwiY2hhcmFjdGVyU3RhdGUiLCJzZXRDaGFyYWN0ZXJTdGF0ZSIsImNoYXJhY3RlckhlYWx0aCIsInNldENoYXJhY3RlckhlYWx0aCIsImN1cnJlbnRFbmNvdW50ZXIiLCJzZXRDdXJyZW50RW5jb3VudGVyIiwiZW5jb3VudGVycyIsInF1ZXN0aW9uIiwib3B0aW9ucyIsInRleHQiLCJoZWFsdGhDaGFuZ2UiLCJoYW5kbGVPcHRpb25DbGljayIsIm5ld0hlYWx0aCIsInByZXYiLCJzZXRUaW1lb3V0IiwibG9jYXRpb24iLCJyZWxvYWQiLCJkaXYiLCJjbGFzc05hbWUiLCJib2R5IiwiZW5jb3VudGVyIiwic3RvcnlTY3JlZW4iLCJyb3VuZE9uZSIsIm9wdGlvbk9uZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJvcHRpb25Ud28iLCJoZWFsdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});