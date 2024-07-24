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

/***/ "./components/Encounters/Encounters.tsx":
/*!**********************************************!*\
  !*** ./components/Encounters/Encounters.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _EncountersA1_Encounter1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../EncountersA1/Encounter1 */ \"./EncountersA1/Encounter1.tsx\");\n/* harmony import */ var _EncountersA1_Encounter2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../EncountersA1/Encounter2 */ \"./EncountersA1/Encounter2.tsx\");\n/* harmony import */ var _EncountersA1_Encounter3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../EncountersA1/Encounter3 */ \"./EncountersA1/Encounter3.tsx\");\n/* harmony import */ var _EncountersA1_Encounter4__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../EncountersA1/Encounter4 */ \"./EncountersA1/Encounter4.tsx\");\n/* harmony import */ var _EncountersA1_Encounter5__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../EncountersA1/Encounter5 */ \"./EncountersA1/Encounter5.tsx\");\n/* harmony import */ var _EncountersA1_Encounter6__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../EncountersA1/Encounter6 */ \"./EncountersA1/Encounter6.tsx\");\n/* harmony import */ var _EncountersA1_Encounter7__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../EncountersA1/Encounter7 */ \"./EncountersA1/Encounter7.tsx\");\n/* harmony import */ var _EncountersA1_Encounter8__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../EncountersA1/Encounter8 */ \"./EncountersA1/Encounter8.tsx\");\n/* harmony import */ var _EncountersA1_Encounter9__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../EncountersA1/Encounter9 */ \"./EncountersA1/Encounter9.tsx\");\n/* harmony import */ var _EncountersA1_Encounter10__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../EncountersA1/Encounter10 */ \"./EncountersA1/Encounter10.tsx\");\n/* harmony import */ var _EncountersA1_Encounter11__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../EncountersA1/Encounter11 */ \"./EncountersA1/Encounter11.tsx\");\n/* harmony import */ var _EncountersA1_Encounter12__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../EncountersA1/Encounter12 */ \"./EncountersA1/Encounter12.tsx\");\n/* harmony import */ var _GameEnd_GameEnd__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../GameEnd/GameEnd */ \"./components/GameEnd/GameEnd.tsx\");\n/* eslint-disable react/prop-types */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst Encounters = (param)=>{\n    let { characterHealth, setCharacterHealth, characterMoney, setCharacterMoney, characterArmor, upgradePoints, setUpgradePoints, setResultMessage } = param;\n    _s();\n    const [currentEncounterId, setCurrentEncounterId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [gameOver, setGameOver] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [gameScore, setGameScore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const optionClick = (healthChange, resultMessage, upgradePointsReward, moneyReward, nextEncounterId)=>{\n        setResultMessage(resultMessage);\n        if (healthChange <= -1) {\n            healthChange = healthChange + characterArmor;\n        }\n        if (healthChange >= 1) {\n            healthChange = 0;\n        }\n        const updatedHealth = characterHealth + healthChange;\n        setCharacterHealth(updatedHealth);\n        const updatedCharacterMoney = characterMoney + moneyReward;\n        setCharacterMoney(updatedCharacterMoney);\n        const updatedUpgradePoints = upgradePoints + upgradePointsReward;\n        setUpgradePoints(updatedUpgradePoints);\n        const totalGameScore = updatedUpgradePoints + updatedCharacterMoney;\n        setGameScore(totalGameScore);\n        if (updatedHealth <= 0) {\n            setGameOver(true);\n            setResultMessage(\"As is all too common in Normandia, not many adventurers live to tell the tale of their exploits. And neither did you.\");\n            setCharacterHealth(\"Dead\");\n        } else {\n            if (nextEncounterId === -1) {\n                setGameOver(true);\n                setResultMessage(\"After experiencing and surviving the horrors Normandia, you decide to settle back to a normal life.\");\n            }\n            if (nextEncounterId !== undefined) {\n                setCurrentEncounterId(nextEncounterId);\n            } else {\n                setCurrentEncounterId((prev)=>prev + 1);\n            }\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{}, [\n        gameOver\n    ]);\n    const renderEncounter = ()=>{\n        switch(currentEncounterId){\n            case 1:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_EncountersA1_Encounter1__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    onOptionClick: optionClick\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\Frontend\\\\components\\\\Encounters\\\\Encounters.tsx\",\n                    lineNumber: 86,\n                    columnNumber: 16\n                }, undefined);\n            case 2:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_EncountersA1_Encounter2__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    onOptionClick: optionClick\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\Frontend\\\\components\\\\Encounters\\\\Encounters.tsx\",\n                    lineNumber: 88,\n                    columnNumber: 16\n                }, undefined);\n            case 3:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_EncountersA1_Encounter3__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    onOptionClick: optionClick\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\Frontend\\\\components\\\\Encounters\\\\Encounters.tsx\",\n                    lineNumber: 90,\n                    columnNumber: 16\n                }, undefined);\n            case 4:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_EncountersA1_Encounter4__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    onOptionClick: optionClick\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\Frontend\\\\components\\\\Encounters\\\\Encounters.tsx\",\n                    lineNumber: 92,\n                    columnNumber: 16\n                }, undefined);\n            case 5:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_EncountersA1_Encounter5__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    onOptionClick: optionClick\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\Frontend\\\\components\\\\Encounters\\\\Encounters.tsx\",\n                    lineNumber: 94,\n                    columnNumber: 16\n                }, undefined);\n            case 6:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_EncountersA1_Encounter6__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    onOptionClick: optionClick\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\Frontend\\\\components\\\\Encounters\\\\Encounters.tsx\",\n                    lineNumber: 96,\n                    columnNumber: 16\n                }, undefined);\n            case 7:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_EncountersA1_Encounter7__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    onOptionClick: optionClick\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\Frontend\\\\components\\\\Encounters\\\\Encounters.tsx\",\n                    lineNumber: 98,\n                    columnNumber: 16\n                }, undefined);\n            case 8:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_EncountersA1_Encounter8__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                    onOptionClick: optionClick\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\Frontend\\\\components\\\\Encounters\\\\Encounters.tsx\",\n                    lineNumber: 100,\n                    columnNumber: 16\n                }, undefined);\n            case 9:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_EncountersA1_Encounter9__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                    onOptionClick: optionClick\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\Frontend\\\\components\\\\Encounters\\\\Encounters.tsx\",\n                    lineNumber: 102,\n                    columnNumber: 16\n                }, undefined);\n            case 10:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_EncountersA1_Encounter10__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                    onOptionClick: optionClick\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\Frontend\\\\components\\\\Encounters\\\\Encounters.tsx\",\n                    lineNumber: 104,\n                    columnNumber: 16\n                }, undefined);\n            case 11:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_EncountersA1_Encounter11__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                    onOptionClick: optionClick\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\Frontend\\\\components\\\\Encounters\\\\Encounters.tsx\",\n                    lineNumber: 106,\n                    columnNumber: 16\n                }, undefined);\n            case 12:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_EncountersA1_Encounter12__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                    onOptionClick: optionClick\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\Frontend\\\\components\\\\Encounters\\\\Encounters.tsx\",\n                    lineNumber: 108,\n                    columnNumber: 16\n                }, undefined);\n            case 13:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GameEnd_GameEnd__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n                    gameScore: gameScore\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\Frontend\\\\components\\\\Encounters\\\\Encounters.tsx\",\n                    lineNumber: 110,\n                    columnNumber: 16\n                }, undefined);\n            default:\n                return null;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: gameOver ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GameEnd_GameEnd__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n            gameScore: gameScore\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\Frontend\\\\components\\\\Encounters\\\\Encounters.tsx\",\n            lineNumber: 118,\n            columnNumber: 19\n        }, undefined) : renderEncounter()\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\stank\\\\Desktop\\\\Coding bin\\\\Simple adventure game\\\\Frontend\\\\components\\\\Encounters\\\\Encounters.tsx\",\n        lineNumber: 117,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Encounters, \"PMOUyuaj7csbKokzmufhwa0tcQw=\");\n_c = Encounters;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Encounters);\nvar _c;\n$RefreshReg$(_c, \"Encounters\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2hCLHlEQUFTQTtvQkFBQ2MsV0FBV0E7Ozs7OztZQUMvQjtnQkFDRSxPQUFPO1FBQ1g7SUFDRjtJQUVBLHFCQUNFLDhEQUFDZ0I7a0JBQ0VsQix5QkFBVyw4REFBQ1oseURBQVNBO1lBQUNjLFdBQVdBOzs7Ozt3QkFBZ0JjOzs7Ozs7QUFHeEQ7R0F4R00zQjtLQUFBQTtBQTBHTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0VuY291bnRlcnMvRW5jb3VudGVycy50c3g/OGNlNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9wcm9wLXR5cGVzICovXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBFbmNvdW50ZXIxIGZyb20gXCIuLi8uLi9FbmNvdW50ZXJzQTEvRW5jb3VudGVyMVwiO1xyXG5pbXBvcnQgRW5jb3VudGVyMiBmcm9tIFwiLi4vLi4vRW5jb3VudGVyc0ExL0VuY291bnRlcjJcIjtcclxuaW1wb3J0IEVuY291bnRlcjMgZnJvbSBcIi4uLy4uL0VuY291bnRlcnNBMS9FbmNvdW50ZXIzXCI7XHJcbmltcG9ydCBFbmNvdW50ZXI0IGZyb20gXCIuLi8uLi9FbmNvdW50ZXJzQTEvRW5jb3VudGVyNFwiO1xyXG5pbXBvcnQgRW5jb3VudGVyNSBmcm9tIFwiLi4vLi4vRW5jb3VudGVyc0ExL0VuY291bnRlcjVcIjtcclxuaW1wb3J0IEVuY291bnRlcjYgZnJvbSBcIi4uLy4uL0VuY291bnRlcnNBMS9FbmNvdW50ZXI2XCI7XHJcbmltcG9ydCBFbmNvdW50ZXI3IGZyb20gXCIuLi8uLi9FbmNvdW50ZXJzQTEvRW5jb3VudGVyN1wiO1xyXG5pbXBvcnQgRW5jb3VudGVyOCBmcm9tIFwiLi4vLi4vRW5jb3VudGVyc0ExL0VuY291bnRlcjhcIjtcclxuaW1wb3J0IEVuY291bnRlcjkgZnJvbSBcIi4uLy4uL0VuY291bnRlcnNBMS9FbmNvdW50ZXI5XCI7XHJcbmltcG9ydCBFbmNvdW50ZXIxMCBmcm9tIFwiLi4vLi4vRW5jb3VudGVyc0ExL0VuY291bnRlcjEwXCI7XHJcbmltcG9ydCBFbmNvdW50ZXIxMSBmcm9tIFwiLi4vLi4vRW5jb3VudGVyc0ExL0VuY291bnRlcjExXCI7XHJcbmltcG9ydCBFbmNvdW50ZXIxMiBmcm9tIFwiLi4vLi4vRW5jb3VudGVyc0ExL0VuY291bnRlcjEyXCI7XHJcbmltcG9ydCBFbmRTY3JlZW4gZnJvbSBcIi4vLi4vR2FtZUVuZC9HYW1lRW5kXCI7XHJcblxyXG5jb25zdCBFbmNvdW50ZXJzID0gKHtcclxuICBjaGFyYWN0ZXJIZWFsdGgsXHJcbiAgc2V0Q2hhcmFjdGVySGVhbHRoLFxyXG4gIGNoYXJhY3Rlck1vbmV5LFxyXG4gIHNldENoYXJhY3Rlck1vbmV5LFxyXG4gIGNoYXJhY3RlckFybW9yLFxyXG4gIHVwZ3JhZGVQb2ludHMsXHJcbiAgc2V0VXBncmFkZVBvaW50cyxcclxuICBzZXRSZXN1bHRNZXNzYWdlLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgW2N1cnJlbnRFbmNvdW50ZXJJZCwgc2V0Q3VycmVudEVuY291bnRlcklkXSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IFtnYW1lT3Zlciwgc2V0R2FtZU92ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtnYW1lU2NvcmUsIHNldEdhbWVTY29yZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3Qgb3B0aW9uQ2xpY2sgPSAoXHJcbiAgICBoZWFsdGhDaGFuZ2UsXHJcbiAgICByZXN1bHRNZXNzYWdlLFxyXG4gICAgdXBncmFkZVBvaW50c1Jld2FyZCxcclxuICAgIG1vbmV5UmV3YXJkLFxyXG4gICAgbmV4dEVuY291bnRlcklkXHJcbiAgKSA9PiB7XHJcbiAgICBzZXRSZXN1bHRNZXNzYWdlKHJlc3VsdE1lc3NhZ2UpO1xyXG5cclxuICAgIGlmIChoZWFsdGhDaGFuZ2UgPD0gLTEpIHtcclxuICAgICAgaGVhbHRoQ2hhbmdlID0gaGVhbHRoQ2hhbmdlICsgY2hhcmFjdGVyQXJtb3I7XHJcbiAgICB9XHJcbiAgICBpZiAoaGVhbHRoQ2hhbmdlID49IDEpIHtcclxuICAgICAgaGVhbHRoQ2hhbmdlID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1cGRhdGVkSGVhbHRoID0gY2hhcmFjdGVySGVhbHRoICsgaGVhbHRoQ2hhbmdlO1xyXG4gICAgc2V0Q2hhcmFjdGVySGVhbHRoKHVwZGF0ZWRIZWFsdGgpO1xyXG5cclxuICAgIGNvbnN0IHVwZGF0ZWRDaGFyYWN0ZXJNb25leSA9IGNoYXJhY3Rlck1vbmV5ICsgbW9uZXlSZXdhcmQ7XHJcbiAgICBzZXRDaGFyYWN0ZXJNb25leSh1cGRhdGVkQ2hhcmFjdGVyTW9uZXkpO1xyXG5cclxuICAgIGNvbnN0IHVwZGF0ZWRVcGdyYWRlUG9pbnRzID0gdXBncmFkZVBvaW50cyArIHVwZ3JhZGVQb2ludHNSZXdhcmQ7XHJcbiAgICBzZXRVcGdyYWRlUG9pbnRzKHVwZGF0ZWRVcGdyYWRlUG9pbnRzKTtcclxuXHJcbiAgICBjb25zdCB0b3RhbEdhbWVTY29yZSA9IHVwZGF0ZWRVcGdyYWRlUG9pbnRzICsgdXBkYXRlZENoYXJhY3Rlck1vbmV5O1xyXG4gICAgc2V0R2FtZVNjb3JlKHRvdGFsR2FtZVNjb3JlKTtcclxuXHJcbiAgICBpZiAodXBkYXRlZEhlYWx0aCA8PSAwKSB7XHJcbiAgICAgIHNldEdhbWVPdmVyKHRydWUpO1xyXG4gICAgICBzZXRSZXN1bHRNZXNzYWdlKFxyXG4gICAgICAgIFwiQXMgaXMgYWxsIHRvbyBjb21tb24gaW4gTm9ybWFuZGlhLCBub3QgbWFueSBhZHZlbnR1cmVycyBsaXZlIHRvIHRlbGwgdGhlIHRhbGUgb2YgdGhlaXIgZXhwbG9pdHMuIEFuZCBuZWl0aGVyIGRpZCB5b3UuXCJcclxuICAgICAgKTtcclxuICAgICAgc2V0Q2hhcmFjdGVySGVhbHRoKFwiRGVhZFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChuZXh0RW5jb3VudGVySWQgPT09IC0xKSB7XHJcbiAgICAgICAgc2V0R2FtZU92ZXIodHJ1ZSk7XHJcbiAgICAgICAgc2V0UmVzdWx0TWVzc2FnZShcclxuICAgICAgICAgIFwiQWZ0ZXIgZXhwZXJpZW5jaW5nIGFuZCBzdXJ2aXZpbmcgdGhlIGhvcnJvcnMgTm9ybWFuZGlhLCB5b3UgZGVjaWRlIHRvIHNldHRsZSBiYWNrIHRvIGEgbm9ybWFsIGxpZmUuXCJcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAobmV4dEVuY291bnRlcklkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBzZXRDdXJyZW50RW5jb3VudGVySWQobmV4dEVuY291bnRlcklkKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRDdXJyZW50RW5jb3VudGVySWQoKHByZXYpID0+IHByZXYgKyAxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7fSwgW2dhbWVPdmVyXSk7XHJcblxyXG4gIGNvbnN0IHJlbmRlckVuY291bnRlciA9ICgpID0+IHtcclxuICAgIHN3aXRjaCAoY3VycmVudEVuY291bnRlcklkKSB7XHJcbiAgICAgIGNhc2UgMTpcclxuICAgICAgICByZXR1cm4gPEVuY291bnRlcjEgb25PcHRpb25DbGljaz17b3B0aW9uQ2xpY2t9IC8+O1xyXG4gICAgICBjYXNlIDI6XHJcbiAgICAgICAgcmV0dXJuIDxFbmNvdW50ZXIyIG9uT3B0aW9uQ2xpY2s9e29wdGlvbkNsaWNrfSAvPjtcclxuICAgICAgY2FzZSAzOlxyXG4gICAgICAgIHJldHVybiA8RW5jb3VudGVyMyBvbk9wdGlvbkNsaWNrPXtvcHRpb25DbGlja30gLz47XHJcbiAgICAgIGNhc2UgNDpcclxuICAgICAgICByZXR1cm4gPEVuY291bnRlcjQgb25PcHRpb25DbGljaz17b3B0aW9uQ2xpY2t9IC8+O1xyXG4gICAgICBjYXNlIDU6XHJcbiAgICAgICAgcmV0dXJuIDxFbmNvdW50ZXI1IG9uT3B0aW9uQ2xpY2s9e29wdGlvbkNsaWNrfSAvPjtcclxuICAgICAgY2FzZSA2OlxyXG4gICAgICAgIHJldHVybiA8RW5jb3VudGVyNiBvbk9wdGlvbkNsaWNrPXtvcHRpb25DbGlja30gLz47XHJcbiAgICAgIGNhc2UgNzpcclxuICAgICAgICByZXR1cm4gPEVuY291bnRlcjcgb25PcHRpb25DbGljaz17b3B0aW9uQ2xpY2t9IC8+O1xyXG4gICAgICBjYXNlIDg6XHJcbiAgICAgICAgcmV0dXJuIDxFbmNvdW50ZXI4IG9uT3B0aW9uQ2xpY2s9e29wdGlvbkNsaWNrfSAvPjtcclxuICAgICAgY2FzZSA5OlxyXG4gICAgICAgIHJldHVybiA8RW5jb3VudGVyOSBvbk9wdGlvbkNsaWNrPXtvcHRpb25DbGlja30gLz47XHJcbiAgICAgIGNhc2UgMTA6XHJcbiAgICAgICAgcmV0dXJuIDxFbmNvdW50ZXIxMCBvbk9wdGlvbkNsaWNrPXtvcHRpb25DbGlja30gLz47XHJcbiAgICAgIGNhc2UgMTE6XHJcbiAgICAgICAgcmV0dXJuIDxFbmNvdW50ZXIxMSBvbk9wdGlvbkNsaWNrPXtvcHRpb25DbGlja30gLz47XHJcbiAgICAgIGNhc2UgMTI6XHJcbiAgICAgICAgcmV0dXJuIDxFbmNvdW50ZXIxMiBvbk9wdGlvbkNsaWNrPXtvcHRpb25DbGlja30gLz47XHJcbiAgICAgIGNhc2UgMTM6XHJcbiAgICAgICAgcmV0dXJuIDxFbmRTY3JlZW4gZ2FtZVNjb3JlPXtnYW1lU2NvcmV9IC8+O1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7Z2FtZU92ZXIgPyA8RW5kU2NyZWVuIGdhbWVTY29yZT17Z2FtZVNjb3JlfSAvPiA6IHJlbmRlckVuY291bnRlcigpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVuY291bnRlcnM7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRW5jb3VudGVyMSIsIkVuY291bnRlcjIiLCJFbmNvdW50ZXIzIiwiRW5jb3VudGVyNCIsIkVuY291bnRlcjUiLCJFbmNvdW50ZXI2IiwiRW5jb3VudGVyNyIsIkVuY291bnRlcjgiLCJFbmNvdW50ZXI5IiwiRW5jb3VudGVyMTAiLCJFbmNvdW50ZXIxMSIsIkVuY291bnRlcjEyIiwiRW5kU2NyZWVuIiwiRW5jb3VudGVycyIsImNoYXJhY3RlckhlYWx0aCIsInNldENoYXJhY3RlckhlYWx0aCIsImNoYXJhY3Rlck1vbmV5Iiwic2V0Q2hhcmFjdGVyTW9uZXkiLCJjaGFyYWN0ZXJBcm1vciIsInVwZ3JhZGVQb2ludHMiLCJzZXRVcGdyYWRlUG9pbnRzIiwic2V0UmVzdWx0TWVzc2FnZSIsImN1cnJlbnRFbmNvdW50ZXJJZCIsInNldEN1cnJlbnRFbmNvdW50ZXJJZCIsImdhbWVPdmVyIiwic2V0R2FtZU92ZXIiLCJnYW1lU2NvcmUiLCJzZXRHYW1lU2NvcmUiLCJvcHRpb25DbGljayIsImhlYWx0aENoYW5nZSIsInJlc3VsdE1lc3NhZ2UiLCJ1cGdyYWRlUG9pbnRzUmV3YXJkIiwibW9uZXlSZXdhcmQiLCJuZXh0RW5jb3VudGVySWQiLCJ1cGRhdGVkSGVhbHRoIiwidXBkYXRlZENoYXJhY3Rlck1vbmV5IiwidXBkYXRlZFVwZ3JhZGVQb2ludHMiLCJ0b3RhbEdhbWVTY29yZSIsInVuZGVmaW5lZCIsInByZXYiLCJyZW5kZXJFbmNvdW50ZXIiLCJvbk9wdGlvbkNsaWNrIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Encounters/Encounters.tsx\n"));

/***/ })

});