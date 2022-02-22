/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/home";
exports.ids = ["pages/home"];
exports.modules = {

/***/ "./UI/Card.module.css":
/*!****************************!*\
  !*** ./UI/Card.module.css ***!
  \****************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"card\": \"Card_card__qs1nT\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9VSS9DYXJkLm1vZHVsZS5jc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0Ly4vVUkvQ2FyZC5tb2R1bGUuY3NzPzQ3NTIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY2FyZFwiOiBcIkNhcmRfY2FyZF9fcXMxblRcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./UI/Card.module.css\n");

/***/ }),

/***/ "./components/HomeUtil.module.css":
/*!****************************************!*\
  !*** ./components/HomeUtil.module.css ***!
  \****************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"box\": \"HomeUtil_box__W_Rkc\",\n\t\"leftcolumn\": \"HomeUtil_leftcolumn__lxJem\",\n\t\"fakeimg\": \"HomeUtil_fakeimg__LiGmb\",\n\t\"card\": \"HomeUtil_card__2ot8E\",\n\t\"row\": \"HomeUtil_row__4uzzj\",\n\t\"rightcolumn\": \"HomeUtil_rightcolumn__X6Fdb\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hvbWVVdGlsLm1vZHVsZS5jc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC8uL2NvbXBvbmVudHMvSG9tZVV0aWwubW9kdWxlLmNzcz83NTk4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJveFwiOiBcIkhvbWVVdGlsX2JveF9fV19Sa2NcIixcblx0XCJsZWZ0Y29sdW1uXCI6IFwiSG9tZVV0aWxfbGVmdGNvbHVtbl9fbHhKZW1cIixcblx0XCJmYWtlaW1nXCI6IFwiSG9tZVV0aWxfZmFrZWltZ19fTGlHbWJcIixcblx0XCJjYXJkXCI6IFwiSG9tZVV0aWxfY2FyZF9fMm90OEVcIixcblx0XCJyb3dcIjogXCJIb21lVXRpbF9yb3dfXzR1enpqXCIsXG5cdFwicmlnaHRjb2x1bW5cIjogXCJIb21lVXRpbF9yaWdodGNvbHVtbl9fWDZGZGJcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/HomeUtil.module.css\n");

/***/ }),

/***/ "./UI/Card.tsx":
/*!*********************!*\
  !*** ./UI/Card.tsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card.module.css */ \"./UI/Card.module.css\");\n/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Card = (props)=>{\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_2___default().card),\n            children: props.children\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\bg\\\\Desktop\\\\PePaw\\\\project\\\\UI\\\\Card.tsx\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\bg\\\\Desktop\\\\PePaw\\\\project\\\\UI\\\\Card.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9VSS9DYXJkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF1QztBQUVBO0FBR3ZDLEtBQUssQ0FBQ0csSUFBSSxJQUFjQyxLQUFLLEdBQUssQ0FBQztJQUNqQyxNQUFNLDZFQUNISCwyQ0FBUTs4RkFFTkksQ0FBRztZQUFDQyxTQUFTLEVBQUVKLDhEQUFZO3NCQUFHRSxLQUFLLENBQUNJLFFBQVE7Ozs7Ozs7Ozs7O0FBSW5ELENBQUM7QUFFRCxpRUFBZUwsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC8uL1VJL0NhcmQudHN4P2I5Y2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBCb3R0b21CYXIgZnJvbSBcIi4vQm90dG9tQmFyXCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL0NhcmQubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgTmF2aWdhdGlvbkJhciBmcm9tIFwiLi9OYXZpZ2F0aW9uQmFyXCI7XHJcblxyXG5jb25zdCBDYXJkOiBSZWFjdC5GQyA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIHsvKiA8TmF2aWdhdGlvbkJhciAvPiAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZH0+e3Byb3BzLmNoaWxkcmVufTwvZGl2PlxyXG4gICAgICB7LyogPEJvdHRvbUJhciAvPiAqL31cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkZyYWdtZW50IiwiY2xhc3NlcyIsIkNhcmQiLCJwcm9wcyIsImRpdiIsImNsYXNzTmFtZSIsImNhcmQiLCJjaGlsZHJlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./UI/Card.tsx\n");

/***/ }),

/***/ "./components/Home.tsx":
/*!*****************************!*\
  !*** ./components/Home.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _HomeUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomeUtil */ \"./components/HomeUtil.tsx\");\n\n\nconst Home = (props)=>{\n    console.log(props.posts);\n    return props.posts.map((p)=>{\n        console.log(p);\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HomeUtil__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            post: p\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\bg\\\\Desktop\\\\PePaw\\\\project\\\\components\\\\Home.tsx\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, undefined);\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hvbWUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWlDO0FBRWpDLEtBQUssQ0FBQ0MsSUFBSSxJQUtBQyxLQUFLLEdBQUssQ0FBQztJQUVuQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUssQ0FBQ0csS0FBSztJQUN2QixNQUFNLENBQ0pILEtBQUssQ0FBQ0csS0FBSyxDQUFDQyxHQUFHLEVBQUVDLENBQUMsR0FBSyxDQUFDO1FBQ3RCSixPQUFPLENBQUNDLEdBQUcsQ0FBQ0csQ0FBQztvRkFDWlAsaURBQVE7WUFBQ1EsSUFBSSxFQUFFRCxDQUFDOzs7Ozs7SUFDbkIsQ0FBQztBQUVMLENBQUM7QUFFRCxpRUFBZU4sSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC8uL2NvbXBvbmVudHMvSG9tZS50c3g/ZTVlNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSG9tZVV0aWwgZnJvbSAnLi9Ib21lVXRpbCc7XHJcblxyXG5jb25zdCBIb21lOlJlYWN0LkZDPHsgcG9zdHM6IHtcclxuICB0aXRsZTogc3RyaW5nLFxyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmcsXHJcbiAgZGF0ZTogc3RyaW5nLFxyXG4gIHRleHQ6IHN0cmluZyxcclxufVtdIH0+ID0gKHByb3BzKSA9PiB7XHJcblxyXG4gIGNvbnNvbGUubG9nKHByb3BzLnBvc3RzKTtcclxuICByZXR1cm4gKFxyXG4gICAgcHJvcHMucG9zdHMubWFwKChwKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHApO1xyXG4gICAgICA8SG9tZVV0aWwgcG9zdD17cH0vPlxyXG4gICAgfSlcclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwibmFtZXMiOlsiSG9tZVV0aWwiLCJIb21lIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwicG9zdHMiLCJtYXAiLCJwIiwicG9zdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Home.tsx\n");

/***/ }),

/***/ "./components/HomeUtil.tsx":
/*!*********************************!*\
  !*** ./components/HomeUtil.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _HomeUtil_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomeUtil.module.css */ \"./components/HomeUtil.module.css\");\n/* harmony import */ var _HomeUtil_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_HomeUtil_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst HomeUtil = (props)=>{\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: `${(_HomeUtil_module_css__WEBPACK_IMPORTED_MODULE_1___default().row)} ${(_HomeUtil_module_css__WEBPACK_IMPORTED_MODULE_1___default().box)}`,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_HomeUtil_module_css__WEBPACK_IMPORTED_MODULE_1___default().leftcolumn),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_HomeUtil_module_css__WEBPACK_IMPORTED_MODULE_1___default().card),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: props.post.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bg\\\\Desktop\\\\PePaw\\\\project\\\\components\\\\HomeUtil.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        children: `${props.post.description},${props.post.date}`\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bg\\\\Desktop\\\\PePaw\\\\project\\\\components\\\\HomeUtil.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_HomeUtil_module_css__WEBPACK_IMPORTED_MODULE_1___default().fakeimg),\n                        children: \"Image\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bg\\\\Desktop\\\\PePaw\\\\project\\\\components\\\\HomeUtil.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: props.post.text\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bg\\\\Desktop\\\\PePaw\\\\project\\\\components\\\\HomeUtil.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\bg\\\\Desktop\\\\PePaw\\\\project\\\\components\\\\HomeUtil.tsx\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\bg\\\\Desktop\\\\PePaw\\\\project\\\\components\\\\HomeUtil.tsx\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\bg\\\\Desktop\\\\PePaw\\\\project\\\\components\\\\HomeUtil.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeUtil);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hvbWVVdGlsLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMkM7QUFFM0MsS0FBSyxDQUFDQyxRQUFRLElBT1JDLEtBQUssR0FBSyxDQUFDO0lBRWYsTUFBTSw2RUFDSEMsQ0FBRztRQUFDQyxTQUFTLEtBQUtKLGlFQUFXLENBQUMsQ0FBQyxFQUFFQSxpRUFBVzs4RkFDMUNHLENBQUc7WUFBQ0MsU0FBUyxFQUFFSix3RUFBa0I7a0dBQy9CRyxDQUFHO2dCQUFDQyxTQUFTLEVBQUVKLGtFQUFZOztnR0FDekJTLENBQUU7a0NBQUVQLEtBQUssQ0FBQ1EsSUFBSSxDQUFDQyxLQUFLOzs7Ozs7Z0dBQ3BCQyxDQUFFO3FDQUFLVixLQUFLLENBQUNRLElBQUksQ0FBQ0csV0FBVyxDQUFDLENBQUMsRUFBRVgsS0FBSyxDQUFDUSxJQUFJLENBQUNJLElBQUk7Ozs7OztnR0FDaERYLENBQUc7d0JBQUNDLFNBQVMsRUFBRUoscUVBQWU7a0NBQUUsQ0FBSzs7Ozs7O2dHQUNyQ2dCLENBQUM7a0NBQUVkLEtBQUssQ0FBQ1EsSUFBSSxDQUFDTyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzdCLENBQUM7QUFFRCxpRUFBZWhCLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QvLi9jb21wb25lbnRzL0hvbWVVdGlsLnRzeD8zOTUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc2VzIGZyb20gXCIuL0hvbWVVdGlsLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IEhvbWVVdGlsOiBSZWFjdC5GQzx7XHJcbiAgcG9zdDoge1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBkYXRlOiBzdHJpbmc7XHJcbiAgICB0ZXh0OiBzdHJpbmc7XHJcbiAgfTtcclxufT4gPSAocHJvcHMpID0+IHtcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzZXMucm93fSAke2NsYXNzZXMuYm94fWB9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sZWZ0Y29sdW1ufT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfT5cclxuICAgICAgICAgIDxoMj57cHJvcHMucG9zdC50aXRsZX08L2gyPlxyXG4gICAgICAgICAgPGg1PntgJHtwcm9wcy5wb3N0LmRlc2NyaXB0aW9ufSwke3Byb3BzLnBvc3QuZGF0ZX1gfTwvaDU+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5mYWtlaW1nfT5JbWFnZTwvZGl2PlxyXG4gICAgICAgICAgPHA+e3Byb3BzLnBvc3QudGV4dH08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVVdGlsO1xyXG4iXSwibmFtZXMiOlsiY2xhc3NlcyIsIkhvbWVVdGlsIiwicHJvcHMiLCJkaXYiLCJjbGFzc05hbWUiLCJyb3ciLCJib3giLCJsZWZ0Y29sdW1uIiwiY2FyZCIsImgyIiwicG9zdCIsInRpdGxlIiwiaDUiLCJkZXNjcmlwdGlvbiIsImRhdGUiLCJmYWtlaW1nIiwicCIsInRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/HomeUtil.tsx\n");

/***/ }),

/***/ "./pages/home/index.tsx":
/*!******************************!*\
  !*** ./pages/home/index.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Home */ \"./components/Home.tsx\");\n/* harmony import */ var _UI_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../UI/Card */ \"./UI/Card.tsx\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst HomePage = (props)=>{\n    // console.log(props.allPost);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Home__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            posts: props.allPost\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\bg\\\\Desktop\\\\PePaw\\\\project\\\\pages\\\\home\\\\index.tsx\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\bg\\\\Desktop\\\\PePaw\\\\project\\\\pages\\\\home\\\\index.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined));\n};\nasync function getStaticProps() {\n    const client = await mongodb__WEBPACK_IMPORTED_MODULE_3__.MongoClient.connect(\"mongodb+srv://negi:512544615@cluster0.zemkh.mongodb.net/Posts?retryWrites=true&w=majority\");\n    const db = client.db();\n    const dataCollection = db.collection('posts');\n    const allPosts = await dataCollection.find().toArray();\n    client.close();\n    return {\n        props: {\n            allPost: allPosts.map((post)=>({\n                    title: post.title,\n                    description: post.description,\n                    date: post.date,\n                    text: post.text\n                })\n            )\n        },\n        revalidate: 1\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ob21lL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBd0M7QUFDUjtBQUNLO0FBRXJDLEtBQUssQ0FBQ0csUUFBUSxJQUtMQyxLQUFLLEdBQUssQ0FBQztJQUVsQixFQUE4QjtJQUM5QixNQUFNLDZFQUNISCxnREFBSTs4RkFDRkQsd0RBQUk7WUFBQ0ssS0FBSyxFQUFFRCxLQUFLLENBQUNFLE9BQU87Ozs7Ozs7Ozs7O0FBR2hDLENBQUM7QUFFTSxlQUFlQyxjQUFjLEdBQUcsQ0FBQztJQUV0QyxLQUFLLENBQUNDLE1BQU0sR0FBRyxLQUFLLENBQUNOLHdEQUFtQixDQUN0QyxDQUEyRjtJQUc3RixLQUFLLENBQUNRLEVBQUUsR0FBR0YsTUFBTSxDQUFDRSxFQUFFO0lBQ3BCLEtBQUssQ0FBQ0MsY0FBYyxHQUFHRCxFQUFFLENBQUNFLFVBQVUsQ0FBQyxDQUFPO0lBQzVDLEtBQUssQ0FBQ0MsUUFBUSxHQUFHLEtBQUssQ0FBQ0YsY0FBYyxDQUFDRyxJQUFJLEdBQUdDLE9BQU87SUFDcERQLE1BQU0sQ0FBQ1EsS0FBSztJQUVaLE1BQU0sQ0FBQyxDQUFDO1FBQ05aLEtBQUssRUFBRSxDQUFDO1lBQ05FLE9BQU8sRUFBR08sUUFBUSxDQUFDSSxHQUFHLEVBQUVDLElBQUksSUFBTSxDQUFDO29CQUNqQ0MsS0FBSyxFQUFFRCxJQUFJLENBQUNDLEtBQUs7b0JBQ2pCQyxXQUFXLEVBQUVGLElBQUksQ0FBQ0UsV0FBVztvQkFDN0JDLElBQUksRUFBRUgsSUFBSSxDQUFDRyxJQUFJO29CQUNmQyxJQUFJLEVBQUVKLElBQUksQ0FBQ0ksSUFBSTtnQkFFakIsQ0FBQzs7UUFDSCxDQUFDO1FBQ0RDLFVBQVUsRUFBRSxDQUFDO0lBQ2YsQ0FBQztBQUVILENBQUM7QUFFRCxpRUFBZXBCLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QvLi9wYWdlcy9ob21lL2luZGV4LnRzeD83YzNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIb21lIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0hvbWVcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIi4uLy4uL1VJL0NhcmRcIjtcclxuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xyXG5cclxuY29uc3QgSG9tZVBhZ2U6UmVhY3QuRkM8e2FsbFBvc3Q6IHtcclxuICB0aXRsZTogc3RyaW5nLFxyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmcsXHJcbiAgZGF0ZTogc3RyaW5nLFxyXG4gIHRleHQ6IHN0cmluZyxcclxufVtdfT4gPSAocHJvcHMpID0+IHtcclxuICBcclxuICAvLyBjb25zb2xlLmxvZyhwcm9wcy5hbGxQb3N0KTtcclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQ+XHJcbiAgICAgIDxIb21lIHBvc3RzPXtwcm9wcy5hbGxQb3N0fS8+XHJcbiAgICA8L0NhcmQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuXHJcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcclxuICAgIFwibW9uZ29kYitzcnY6Ly9uZWdpOjUxMjU0NDYxNUBjbHVzdGVyMC56ZW1raC5tb25nb2RiLm5ldC9Qb3N0cz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIlxyXG4gICk7XHJcbiAgXHJcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuICBjb25zdCBkYXRhQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oJ3Bvc3RzJyk7XHJcbiAgY29uc3QgYWxsUG9zdHMgPSBhd2FpdCBkYXRhQ29sbGVjdGlvbi5maW5kKCkudG9BcnJheSgpOyBcclxuICBjbGllbnQuY2xvc2UoKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGFsbFBvc3QgOiBhbGxQb3N0cy5tYXAoKHBvc3QpID0+ICh7XHJcbiAgICAgICAgdGl0bGU6IHBvc3QudGl0bGUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IHBvc3QuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgZGF0ZTogcG9zdC5kYXRlLFxyXG4gICAgICAgIHRleHQ6IHBvc3QudGV4dCxcclxuICAgICAgICAvLyBpZDogcG9zdC5faWQudG9TdHJpbmcoKVxyXG4gICAgICB9KSlcclxuICAgIH0sXHJcbiAgICByZXZhbGlkYXRlOiAxLFxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG4iXSwibmFtZXMiOlsiSG9tZSIsIkNhcmQiLCJNb25nb0NsaWVudCIsIkhvbWVQYWdlIiwicHJvcHMiLCJwb3N0cyIsImFsbFBvc3QiLCJnZXRTdGF0aWNQcm9wcyIsImNsaWVudCIsImNvbm5lY3QiLCJkYiIsImRhdGFDb2xsZWN0aW9uIiwiY29sbGVjdGlvbiIsImFsbFBvc3RzIiwiZmluZCIsInRvQXJyYXkiLCJjbG9zZSIsIm1hcCIsInBvc3QiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZGF0ZSIsInRleHQiLCJyZXZhbGlkYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/home/index.tsx\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongodb");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/home/index.tsx"));
module.exports = __webpack_exports__;

})();