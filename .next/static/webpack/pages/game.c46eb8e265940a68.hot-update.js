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

/***/ "./EncountersA1/Encounter7.tsx":
/*!*************************************!*\
  !*** ./EncountersA1/Encounter7.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _EncounterA1_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EncounterA1.module.css */ \"./EncountersA1/EncounterA1.module.css\");\n/* harmony import */ var _EncounterA1_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_EncounterA1_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n// eslint-disable-next-line react/prop-types\nconst Encounter7 = (param)=>{\n    let { onOptionClick } = param;\n    const options = [\n        {\n            text: \"You ask the stranger for help\",\n            healthChange: 0,\n            resultMessage: \"'I may have wanted you dead a second age, but now I think I would rather you live', she replied all sassy before joining you in the fight\",\n            upgradePointsReward: 0,\n            moneyReward: 0,\n            nextEncounterId: 6\n        },\n        {\n            text: \"Don't ask the woman for help\",\n            healthChange: 0,\n            resultMessage: \"'Going all lone ranger style, huh? Well good luck then.', - the woman said before leaving you to fight alone\",\n            upgradePointsReward: 0,\n            moneyReward: 0,\n            nextEncounterId: 7\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_EncounterA1_module_css__WEBPACK_IMPORTED_MODULE_2___default().storyScreen),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_EncounterA1_module_css__WEBPACK_IMPORTED_MODULE_2___default().description),\n                children: \"Before the two of you get the chance to slit each others throats, you hear a sound of a beast, more specifically - a Cwentur. The woman quickly turns around towards the source of the sound. ‘Looks like we have a bigger problem than each other‘, - she exclaimed.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\EncountersA1\\\\Encounter7.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            options.map((option, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_EncounterA1_module_css__WEBPACK_IMPORTED_MODULE_2___default().optionBtn),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>onOptionClick(option.healthChange, option.resultMessage, option.upgradePointsReward, option.moneyReward, option.nextEncounterId),\n                        children: option.text\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\EncountersA1\\\\Encounter7.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, undefined)\n                }, index, false, {\n                    fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\EncountersA1\\\\Encounter7.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, undefined))\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\EncountersA1\\\\Encounter7.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Encounter7;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Encounter7);\nvar _c;\n$RefreshReg$(_c, \"Encounter7\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9FbmNvdW50ZXJzQTEvRW5jb3VudGVyNy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEI7QUFDb0I7QUFFOUMsNENBQTRDO0FBQzVDLE1BQU1FLGFBQWE7UUFBQyxFQUFFQyxhQUFhLEVBQUU7SUFDbkMsTUFBTUMsVUFBVTtRQUNkO1lBQ0VDLE1BQU07WUFDTkMsY0FBYztZQUNkQyxlQUNFO1lBQ0ZDLHFCQUFxQjtZQUNyQkMsYUFBYTtZQUNiQyxpQkFBaUI7UUFDbkI7UUFDQTtZQUNFTCxNQUFNO1lBQ05DLGNBQWM7WUFDZEMsZUFDRTtZQUNGQyxxQkFBcUI7WUFDckJDLGFBQWE7WUFDYkMsaUJBQWlCO1FBQ25CO0tBQ0Q7SUFFRCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBV1gsNEVBQWtCOzswQkFDaEMsOERBQUNVO2dCQUFJQyxXQUFXWCw0RUFBa0I7MEJBQUU7Ozs7OztZQU1uQ0csUUFBUVcsR0FBRyxDQUFDLENBQUNDLFFBQVFDLHNCQUNwQiw4REFBQ047b0JBQWdCQyxXQUFXWCwwRUFBZ0I7OEJBQzFDLDRFQUFDa0I7d0JBQ0NDLFNBQVMsSUFDUGpCLGNBQ0VhLE9BQU9WLFlBQVksRUFDbkJVLE9BQU9ULGFBQWEsRUFDcEJTLE9BQU9SLG1CQUFtQixFQUMxQlEsT0FBT1AsV0FBVyxFQUNsQk8sT0FBT04sZUFBZTtrQ0FJekJNLE9BQU9YLElBQUk7Ozs7OzttQkFaTlk7Ozs7Ozs7Ozs7O0FBa0JsQjtLQWpETWY7QUFtRE4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vRW5jb3VudGVyc0ExL0VuY291bnRlcjcudHN4PzM3ODMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0VuY291bnRlckExLm1vZHVsZS5jc3NcIjtcclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9wcm9wLXR5cGVzXHJcbmNvbnN0IEVuY291bnRlcjcgPSAoeyBvbk9wdGlvbkNsaWNrIH0pID0+IHtcclxuICBjb25zdCBvcHRpb25zID0gW1xyXG4gICAge1xyXG4gICAgICB0ZXh0OiBcIllvdSBhc2sgdGhlIHN0cmFuZ2VyIGZvciBoZWxwXCIsXHJcbiAgICAgIGhlYWx0aENoYW5nZTogMCxcclxuICAgICAgcmVzdWx0TWVzc2FnZTpcclxuICAgICAgICBcIidJIG1heSBoYXZlIHdhbnRlZCB5b3UgZGVhZCBhIHNlY29uZCBhZ2UsIGJ1dCBub3cgSSB0aGluayBJIHdvdWxkIHJhdGhlciB5b3UgbGl2ZScsIHNoZSByZXBsaWVkIGFsbCBzYXNzeSBiZWZvcmUgam9pbmluZyB5b3UgaW4gdGhlIGZpZ2h0XCIsXHJcbiAgICAgIHVwZ3JhZGVQb2ludHNSZXdhcmQ6IDAsXHJcbiAgICAgIG1vbmV5UmV3YXJkOiAwLFxyXG4gICAgICBuZXh0RW5jb3VudGVySWQ6IDYsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0ZXh0OiBcIkRvbid0IGFzayB0aGUgd29tYW4gZm9yIGhlbHBcIixcclxuICAgICAgaGVhbHRoQ2hhbmdlOiAwLFxyXG4gICAgICByZXN1bHRNZXNzYWdlOlxyXG4gICAgICAgIFwiJ0dvaW5nIGFsbCBsb25lIHJhbmdlciBzdHlsZSwgaHVoPyBXZWxsIGdvb2QgbHVjayB0aGVuLicsIC0gdGhlIHdvbWFuIHNhaWQgYmVmb3JlIGxlYXZpbmcgeW91IHRvIGZpZ2h0IGFsb25lXCIsXHJcbiAgICAgIHVwZ3JhZGVQb2ludHNSZXdhcmQ6IDAsXHJcbiAgICAgIG1vbmV5UmV3YXJkOiAwLFxyXG4gICAgICBuZXh0RW5jb3VudGVySWQ6IDcsXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0b3J5U2NyZWVufT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XHJcbiAgICAgICAgQmVmb3JlIHRoZSB0d28gb2YgeW91IGdldCB0aGUgY2hhbmNlIHRvIHNsaXQgZWFjaCBvdGhlcnMgdGhyb2F0cywgeW91XHJcbiAgICAgICAgaGVhciBhIHNvdW5kIG9mIGEgYmVhc3QsIG1vcmUgc3BlY2lmaWNhbGx5IC0gYSBDd2VudHVyLiBUaGUgd29tYW5cclxuICAgICAgICBxdWlja2x5IHR1cm5zIGFyb3VuZCB0b3dhcmRzIHRoZSBzb3VyY2Ugb2YgdGhlIHNvdW5kLiAmbHNxdW87TG9va3MgbGlrZVxyXG4gICAgICAgIHdlIGhhdmUgYSBiaWdnZXIgcHJvYmxlbSB0aGFuIGVhY2ggb3RoZXImbHNxdW87LCAtIHNoZSBleGNsYWltZWQuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7b3B0aW9ucy5tYXAoKG9wdGlvbiwgaW5kZXgpID0+IChcclxuICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT17c3R5bGVzLm9wdGlvbkJ0bn0+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgb25PcHRpb25DbGljayhcclxuICAgICAgICAgICAgICAgIG9wdGlvbi5oZWFsdGhDaGFuZ2UsXHJcbiAgICAgICAgICAgICAgICBvcHRpb24ucmVzdWx0TWVzc2FnZSxcclxuICAgICAgICAgICAgICAgIG9wdGlvbi51cGdyYWRlUG9pbnRzUmV3YXJkLFxyXG4gICAgICAgICAgICAgICAgb3B0aW9uLm1vbmV5UmV3YXJkLFxyXG4gICAgICAgICAgICAgICAgb3B0aW9uLm5leHRFbmNvdW50ZXJJZFxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7b3B0aW9uLnRleHR9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRW5jb3VudGVyNztcclxuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwiRW5jb3VudGVyNyIsIm9uT3B0aW9uQ2xpY2siLCJvcHRpb25zIiwidGV4dCIsImhlYWx0aENoYW5nZSIsInJlc3VsdE1lc3NhZ2UiLCJ1cGdyYWRlUG9pbnRzUmV3YXJkIiwibW9uZXlSZXdhcmQiLCJuZXh0RW5jb3VudGVySWQiLCJkaXYiLCJjbGFzc05hbWUiLCJzdG9yeVNjcmVlbiIsImRlc2NyaXB0aW9uIiwibWFwIiwib3B0aW9uIiwiaW5kZXgiLCJvcHRpb25CdG4iLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./EncountersA1/Encounter7.tsx\n"));

/***/ })

});