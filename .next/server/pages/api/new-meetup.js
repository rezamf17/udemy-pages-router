"use strict";
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
exports.id = "pages/api/new-meetup";
exports.ids = ["pages/api/new-meetup"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst uri = process.env.MONGODB_URI;\nif (!uri) {\n    throw new Error(\"Please add your Mongo URI to .env.local\");\n}\nconst client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, {\n    serverApi: {\n        version: \"1\",\n        strict: true,\n        deprecationErrors: true\n    }\n});\nlet clientPromise;\nif (true) {\n    // In development mode, use a global variable to preserve the MongoClient across module reloads\n    if (!global._mongoClientPromise) {\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBd0Q7QUFFeEQsTUFBTUUsR0FBRyxHQUFHQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsV0FBVztBQUVuQyxJQUFJLENBQUNILEdBQUcsRUFBRTtJQUNSLE1BQU0sSUFBSUksS0FBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7QUFDN0QsQ0FBQztBQUVELE1BQU1DLE1BQU0sR0FBRyxJQUFJUCxnREFBVyxDQUFDRSxHQUFHLEVBQUU7SUFDbENNLFNBQVMsRUFBRTtRQUNUQyxPQUFPLEVBQUUsR0FBRztRQUNaQyxNQUFNLEVBQUUsSUFBSTtRQUNaQyxpQkFBaUIsRUFBRSxJQUFJO0tBQ3hCO0NBQ0YsQ0FBQztBQUVGLElBQUlDLGFBQWE7QUFFakIsSUFBSVQsSUFBc0MsRUFBRTtJQUMxQywrRkFBK0Y7SUFDL0YsSUFBSSxDQUFDVSxNQUFNLENBQUNDLG1CQUFtQixFQUFFO1FBQy9CRCxNQUFNLENBQUNDLG1CQUFtQixHQUFHUCxNQUFNLENBQUNRLE9BQU8sRUFBRSxDQUFDO0lBQ2hELENBQUM7SUFDREgsYUFBYSxHQUFHQyxNQUFNLENBQUNDLG1CQUFtQixDQUFDO0FBQzdDLE9BQU8sRUFHTjtBQUVELGlFQUFlRixhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vbGliL21vbmdvZGIuanM/ZDkyMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCwgU2VydmVyQXBpVmVyc2lvbiB9IGZyb20gJ21vbmdvZGInO1xyXG5cclxuY29uc3QgdXJpID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkk7XHJcblxyXG5pZiAoIXVyaSkge1xyXG4gIHRocm93IG5ldyBFcnJvcignUGxlYXNlIGFkZCB5b3VyIE1vbmdvIFVSSSB0byAuZW52LmxvY2FsJyk7XHJcbn1cclxuXHJcbmNvbnN0IGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIHtcclxuICBzZXJ2ZXJBcGk6IHtcclxuICAgIHZlcnNpb246ICcxJyxcclxuICAgIHN0cmljdDogdHJ1ZSxcclxuICAgIGRlcHJlY2F0aW9uRXJyb3JzOiB0cnVlLFxyXG4gIH1cclxufSk7XHJcblxyXG5sZXQgY2xpZW50UHJvbWlzZTtcclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gIC8vIEluIGRldmVsb3BtZW50IG1vZGUsIHVzZSBhIGdsb2JhbCB2YXJpYWJsZSB0byBwcmVzZXJ2ZSB0aGUgTW9uZ29DbGllbnQgYWNyb3NzIG1vZHVsZSByZWxvYWRzXHJcbiAgaWYgKCFnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZSkge1xyXG4gICAgZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpO1xyXG4gIH1cclxuICBjbGllbnRQcm9taXNlID0gZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2U7XHJcbn0gZWxzZSB7XHJcbiAgLy8gSW4gcHJvZHVjdGlvbiBtb2RlLCBpdCdzIGJlc3QgdG8gbm90IHVzZSBhIGdsb2JhbCB2YXJpYWJsZVxyXG4gIGNsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGllbnRQcm9taXNlO1xyXG4iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJTZXJ2ZXJBcGlWZXJzaW9uIiwidXJpIiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwiRXJyb3IiLCJjbGllbnQiLCJzZXJ2ZXJBcGkiLCJ2ZXJzaW9uIiwic3RyaWN0IiwiZGVwcmVjYXRpb25FcnJvcnMiLCJjbGllbnRQcm9taXNlIiwiZ2xvYmFsIiwiX21vbmdvQ2xpZW50UHJvbWlzZSIsImNvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/mongodb.js\n");

/***/ }),

/***/ "(api)/./pages/api/new-meetup.js":
/*!*********************************!*\
  !*** ./pages/api/new-meetup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/mongodb */ \"(api)/./lib/mongodb.js\");\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const data = req.body;\n        try {\n            const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n            const db = client.db();\n            const meetups = db.collection(\"meetups\");\n            const result = await meetups.insertOne(data);\n            console.log(result);\n            res.status(201).json({\n                status: \"SUCCESS\",\n                message: \"Meetup created successfully\"\n            });\n        } catch (error) {\n            console.error(error);\n            res.status(500).json({\n                status: \"ERROR\",\n                message: \"Failed to create meetup\"\n            });\n        }\n    } else {\n        res.status(405).json({\n            status: \"ERROR\",\n            message: \"Method not allowed\"\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE4QztBQUU5QyxlQUFlQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQy9CLElBQUlELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLE1BQU0sRUFBRTtRQUN6QixNQUFNQyxJQUFJLEdBQUdILEdBQUcsQ0FBQ0ksSUFBSTtRQUVyQixJQUFJO1lBQ0YsTUFBTUMsTUFBTSxHQUFHLE1BQU1QLG9EQUFhO1lBQ2xDLE1BQU1RLEVBQUUsR0FBR0QsTUFBTSxDQUFDQyxFQUFFLEVBQUU7WUFDdEIsTUFBTUMsT0FBTyxHQUFHRCxFQUFFLENBQUNFLFVBQVUsQ0FBQyxTQUFTLENBQUM7WUFDeEMsTUFBTUMsTUFBTSxHQUFHLE1BQU1GLE9BQU8sQ0FBQ0csU0FBUyxDQUFDUCxJQUFJLENBQUM7WUFDNUNRLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxNQUFNLENBQUMsQ0FBQztZQUVwQlIsR0FBRyxDQUFDWSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFDbkJELE1BQU0sRUFBRSxTQUFTO2dCQUNqQkUsT0FBTyxFQUFFLDZCQUE2QjthQUN2QyxDQUFDLENBQUM7UUFDTCxFQUFFLE9BQU9DLEtBQUssRUFBRTtZQUNkTCxPQUFPLENBQUNLLEtBQUssQ0FBQ0EsS0FBSyxDQUFDLENBQUM7WUFDckJmLEdBQUcsQ0FBQ1ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQ25CRCxNQUFNLEVBQUUsT0FBTztnQkFDZkUsT0FBTyxFQUFFLHlCQUF5QjthQUNuQyxDQUFDLENBQUM7UUFDTCxDQUFDO0lBQ0gsT0FBTztRQUNMZCxHQUFHLENBQUNZLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQ25CRCxNQUFNLEVBQUUsT0FBTztZQUNmRSxPQUFPLEVBQUUsb0JBQW9CO1NBQzlCLENBQUMsQ0FBQztJQUNMLENBQUM7QUFDSCxDQUFDO0FBRUQsaUVBQWVoQixPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vcGFnZXMvYXBpL25ldy1tZWV0dXAuanM/NzM5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xpZW50UHJvbWlzZSBmcm9tICcuLi8uLi9saWIvbW9uZ29kYic7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xyXG4gICAgY29uc3QgZGF0YSA9IHJlcS5ib2R5O1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNsaWVudFByb21pc2U7XHJcbiAgICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcbiAgICAgIGNvbnN0IG1lZXR1cHMgPSBkYi5jb2xsZWN0aW9uKCdtZWV0dXBzJyk7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1lZXR1cHMuaW5zZXJ0T25lKGRhdGEpO1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cclxuICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oe1xyXG4gICAgICAgIHN0YXR1czogJ1NVQ0NFU1MnLFxyXG4gICAgICAgIG1lc3NhZ2U6ICdNZWV0dXAgY3JlYXRlZCBzdWNjZXNzZnVsbHknLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7XHJcbiAgICAgICAgc3RhdHVzOiAnRVJST1InLFxyXG4gICAgICAgIG1lc3NhZ2U6ICdGYWlsZWQgdG8gY3JlYXRlIG1lZXR1cCcsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXMuc3RhdHVzKDQwNSkuanNvbih7XHJcbiAgICAgIHN0YXR1czogJ0VSUk9SJyxcclxuICAgICAgbWVzc2FnZTogJ01ldGhvZCBub3QgYWxsb3dlZCcsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XHJcbiJdLCJuYW1lcyI6WyJjbGllbnRQcm9taXNlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImRhdGEiLCJib2R5IiwiY2xpZW50IiwiZGIiLCJtZWV0dXBzIiwiY29sbGVjdGlvbiIsInJlc3VsdCIsImluc2VydE9uZSIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/new-meetup.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/new-meetup.js"));
module.exports = __webpack_exports__;

})();