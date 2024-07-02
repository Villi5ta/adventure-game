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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst Index = ()=>{\n    _s();\n    const [characterState, setCharacterState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [characterHealth, setCharacterHealth] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(2);\n    const [currentEncounter, setCurrentEncounter] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const encounters = [\n        {\n            question: \"blue or red?\",\n            options: [\n                {\n                    text: \"Option one\",\n                    healthChange: 0\n                },\n                {\n                    text: \"Option two\",\n                    healthChange: -1\n                }\n            ]\n        },\n        {\n            question: \"left or right?\",\n            options: [\n                {\n                    text: \"Option one\",\n                    healthChange: -1\n                },\n                {\n                    text: \"Option two\",\n                    healthChange: 0\n                }\n            ]\n        }\n    ];\n    const handleOptionClick = (healthChange)=>{\n        const newHealth = characterHealth + healthChange;\n        setCharacterHealth(newHealth);\n        if (newHealth <= 0) {\n            setCharacterState(false);\n        } else {\n            setCurrentEncounter((prev)=>prev + 1);\n        }\n    };\n    if (!characterState) {\n        setTimeout(()=>{\n            location.reload();\n        }, 1500);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default().body),\n            children: \"You are dead, restarting game...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Checklist app\\\\pages\\\\index.tsx\",\n            lineNumber: 47,\n            columnNumber: 12\n        }, undefined);\n    }\n    const encounter = encounters[currentEncounter];\n    if (!encounter) {\n        location.reload();\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default().body),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default().storyScreen),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default().roundOne),\n                    children: encounter.question\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Checklist app\\\\pages\\\\index.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Checklist app\\\\pages\\\\index.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default().optionOne),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>handleOptionClick(encounter.options[0].healthChange),\n                    children: encounter.options[0].text\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Checklist app\\\\pages\\\\index.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Checklist app\\\\pages\\\\index.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default().optionTwo),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>handleOptionClick(encounter.options[1].healthChange),\n                    children: encounter.options[1].text\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Checklist app\\\\pages\\\\index.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Checklist app\\\\pages\\\\index.tsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default().health),\n                children: [\n                    \"Health: \",\n                    characterHealth\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Checklist app\\\\pages\\\\index.tsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Checklist app\\\\pages\\\\index.tsx\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Index, \"9L4P/iJDuxvtcbDrWfM9BAQyOc8=\");\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQStDO0FBQ0k7QUFFbkQsTUFBTUcsUUFBUTs7SUFDWixNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUdILCtDQUFRQSxDQUFDO0lBQ3JELE1BQU0sQ0FBQ0ksaUJBQWlCQyxtQkFBbUIsR0FBR0wsK0NBQVFBLENBQUM7SUFDdkQsTUFBTSxDQUFDTSxrQkFBa0JDLG9CQUFvQixHQUFHUCwrQ0FBUUEsQ0FBQztJQUV6RCxNQUFNUSxhQUFhO1FBQ2pCO1lBQ0VDLFVBQVU7WUFDVkMsU0FBUztnQkFDUDtvQkFDRUMsTUFBTTtvQkFDTkMsY0FBYztnQkFDaEI7Z0JBQ0E7b0JBQ0VELE1BQU07b0JBQ05DLGNBQWMsQ0FBQztnQkFDakI7YUFDRDtRQUNIO1FBQ0E7WUFDRUgsVUFBVTtZQUNWQyxTQUFTO2dCQUNQO29CQUFFQyxNQUFNO29CQUFjQyxjQUFjLENBQUM7Z0JBQUU7Z0JBQ3ZDO29CQUFFRCxNQUFNO29CQUFjQyxjQUFjO2dCQUFFO2FBQ3ZDO1FBQ0g7S0FDRDtJQUVELE1BQU1DLG9CQUFvQixDQUFDRDtRQUN6QixNQUFNRSxZQUFZVixrQkFBa0JRO1FBQ3BDUCxtQkFBbUJTO1FBRW5CLElBQUlBLGFBQWEsR0FBRztZQUNsQlgsa0JBQWtCO1FBQ3BCLE9BQU87WUFDTEksb0JBQW9CLENBQUNRLE9BQVNBLE9BQU87UUFDdkM7SUFDRjtJQUVBLElBQUksQ0FBQ2IsZ0JBQWdCO1FBQ25CYyxXQUFXO1lBQ1RDLFNBQVNDLE1BQU07UUFDakIsR0FBRztRQUNILHFCQUFPLDhEQUFDQztZQUFJQyxXQUFXdEIscUVBQVc7c0JBQUU7Ozs7OztJQUN0QztJQUVBLE1BQU13QixZQUFZZCxVQUFVLENBQUNGLGlCQUFpQjtJQUU5QyxJQUFJLENBQUNnQixXQUFXO1FBQ2RMLFNBQVNDLE1BQU07SUFDakI7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBV3RCLHFFQUFXOzswQkFDekIsOERBQUNxQjtnQkFBSUMsV0FBV3RCLDRFQUFrQjswQkFDaEMsNEVBQUNxQjtvQkFBSUMsV0FBV3RCLHlFQUFlOzhCQUFHd0IsVUFBVWIsUUFBUTs7Ozs7Ozs7Ozs7MEJBR3RELDhEQUFDVTtnQkFBSUMsV0FBV3RCLDBFQUFnQjswQkFDOUIsNEVBQUM0QjtvQkFDQ0MsU0FBUyxJQUFNZCxrQkFBa0JTLFVBQVVaLE9BQU8sQ0FBQyxFQUFFLENBQUNFLFlBQVk7OEJBRWpFVSxVQUFVWixPQUFPLENBQUMsRUFBRSxDQUFDQyxJQUFJOzs7Ozs7Ozs7OzswQkFJOUIsOERBQUNRO2dCQUFJQyxXQUFXdEIsMEVBQWdCOzBCQUM5Qiw0RUFBQzRCO29CQUNDQyxTQUFTLElBQU1kLGtCQUFrQlMsVUFBVVosT0FBTyxDQUFDLEVBQUUsQ0FBQ0UsWUFBWTs4QkFFakVVLFVBQVVaLE9BQU8sQ0FBQyxFQUFFLENBQUNDLElBQUk7Ozs7Ozs7Ozs7OzBCQUc5Qiw4REFBQ1E7Z0JBQUlDLFdBQVd0Qix1RUFBYTs7b0JBQUU7b0JBQVNNOzs7Ozs7Ozs7Ozs7O0FBRzlDO0dBNUVNSDtLQUFBQTtBQThFTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgY29uc3QgW2NoYXJhY3RlclN0YXRlLCBzZXRDaGFyYWN0ZXJTdGF0ZV0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2NoYXJhY3RlckhlYWx0aCwgc2V0Q2hhcmFjdGVySGVhbHRoXSA9IHVzZVN0YXRlKDIpO1xuICBjb25zdCBbY3VycmVudEVuY291bnRlciwgc2V0Q3VycmVudEVuY291bnRlcl0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBlbmNvdW50ZXJzID0gW1xuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcImJsdWUgb3IgcmVkP1wiLFxuICAgICAgb3B0aW9uczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJPcHRpb24gb25lXCIsXG4gICAgICAgICAgaGVhbHRoQ2hhbmdlOiAwLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJPcHRpb24gdHdvXCIsXG4gICAgICAgICAgaGVhbHRoQ2hhbmdlOiAtMSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJsZWZ0IG9yIHJpZ2h0P1wiLFxuICAgICAgb3B0aW9uczogW1xuICAgICAgICB7IHRleHQ6IFwiT3B0aW9uIG9uZVwiLCBoZWFsdGhDaGFuZ2U6IC0xIH0sXG4gICAgICAgIHsgdGV4dDogXCJPcHRpb24gdHdvXCIsIGhlYWx0aENoYW5nZTogMCB9LFxuICAgICAgXSxcbiAgICB9LFxuICBdO1xuXG4gIGNvbnN0IGhhbmRsZU9wdGlvbkNsaWNrID0gKGhlYWx0aENoYW5nZSkgPT4ge1xuICAgIGNvbnN0IG5ld0hlYWx0aCA9IGNoYXJhY3RlckhlYWx0aCArIGhlYWx0aENoYW5nZTtcbiAgICBzZXRDaGFyYWN0ZXJIZWFsdGgobmV3SGVhbHRoKTtcblxuICAgIGlmIChuZXdIZWFsdGggPD0gMCkge1xuICAgICAgc2V0Q2hhcmFjdGVyU3RhdGUoZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRDdXJyZW50RW5jb3VudGVyKChwcmV2KSA9PiBwcmV2ICsgMSk7XG4gICAgfVxuICB9O1xuXG4gIGlmICghY2hhcmFjdGVyU3RhdGUpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0sIDE1MDApO1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvZHl9PllvdSBhcmUgZGVhZCwgcmVzdGFydGluZyBnYW1lLi4uPC9kaXY+O1xuICB9XG5cbiAgY29uc3QgZW5jb3VudGVyID0gZW5jb3VudGVyc1tjdXJyZW50RW5jb3VudGVyXTtcblxuICBpZiAoIWVuY291bnRlcikge1xuICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvZHl9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdG9yeVNjcmVlbn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucm91bmRPbmV9PntlbmNvdW50ZXIucXVlc3Rpb259PC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vcHRpb25PbmV9PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlT3B0aW9uQ2xpY2soZW5jb3VudGVyLm9wdGlvbnNbMF0uaGVhbHRoQ2hhbmdlKX1cbiAgICAgICAgPlxuICAgICAgICAgIHtlbmNvdW50ZXIub3B0aW9uc1swXS50ZXh0fVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm9wdGlvblR3b30+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVPcHRpb25DbGljayhlbmNvdW50ZXIub3B0aW9uc1sxXS5oZWFsdGhDaGFuZ2UpfVxuICAgICAgICA+XG4gICAgICAgICAge2VuY291bnRlci5vcHRpb25zWzFdLnRleHR9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWx0aH0+SGVhbHRoOiB7Y2hhcmFjdGVySGVhbHRofTwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwibmFtZXMiOlsic3R5bGVzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkluZGV4IiwiY2hhcmFjdGVyU3RhdGUiLCJzZXRDaGFyYWN0ZXJTdGF0ZSIsImNoYXJhY3RlckhlYWx0aCIsInNldENoYXJhY3RlckhlYWx0aCIsImN1cnJlbnRFbmNvdW50ZXIiLCJzZXRDdXJyZW50RW5jb3VudGVyIiwiZW5jb3VudGVycyIsInF1ZXN0aW9uIiwib3B0aW9ucyIsInRleHQiLCJoZWFsdGhDaGFuZ2UiLCJoYW5kbGVPcHRpb25DbGljayIsIm5ld0hlYWx0aCIsInByZXYiLCJzZXRUaW1lb3V0IiwibG9jYXRpb24iLCJyZWxvYWQiLCJkaXYiLCJjbGFzc05hbWUiLCJib2R5IiwiZW5jb3VudGVyIiwic3RvcnlTY3JlZW4iLCJyb3VuZE9uZSIsIm9wdGlvbk9uZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJvcHRpb25Ud28iLCJoZWFsdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});