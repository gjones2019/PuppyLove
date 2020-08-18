webpackHotUpdate("main",{

/***/ "./client/component/PopularLocations.jsx":
/*!***********************************************!*\
  !*** ./client/component/PopularLocations.jsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _googleMapsReact = __webpack_require__(/*! google-maps-react */ \"./node_modules/google-maps-react/dist/index.js\");\n\nvar _axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// const mapStyles = {\n//   width: '60%',\n//   height: '60%'\n// };\n\nfunction PopularLocations(_ref) {\n\tvar google = _ref.google;\n\n\tvar _useState = (0, _react.useState)(''),\n\t    _useState2 = _slicedToArray(_useState, 2),\n\t    allUsers = _useState2[0],\n\t    setAllUsers = _useState2[1];\n\n\t(0, _react.useEffect)(function () {\n\t\t_axios2.default.get('/users').then(function (response) {\n\t\t\tsetAllUsers(response.data);\n\t\t\t// response.data\n\t\t}).catch(function (err) {\n\t\t\treturn console.log(err);\n\t\t});\n\t}, []);\n\n\tvar mapStyles = {\n\t\twidth: '60%',\n\t\theight: '60%'\n\t};\n\treturn _react2.default.createElement(\n\t\t_googleMapsReact.Map,\n\t\t{\n\t\t\tgoogle: google,\n\t\t\tzoom: 12,\n\t\t\tstyle: mapStyles,\n\t\t\tinitialCenter: {\n\t\t\t\tlat: 29.971509,\n\t\t\t\tlng: -90.103807\n\t\t\t}\n\t\t},\n\t\t_react2.default.createElement(_googleMapsReact.Marker, { lat: 29.971509, lng: -90.103807, title: 'current' })\n\t);\n}\n\nexports.default = (0, _googleMapsReact.GoogleApiWrapper)({\n\tapiKey: 'AIzaSyDkP-SuWhs1qqsN1GpQuTfrpGU7WyFn4dU'\n})(PopularLocations);\n\n//# sourceURL=webpack:///./client/component/PopularLocations.jsx?");

/***/ })

})