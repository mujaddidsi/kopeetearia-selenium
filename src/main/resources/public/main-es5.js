function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\r\n<app-promo></app-promo>\r\n<app-footer></app-footer>\r\n\r\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/error/error.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/error/error.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppErrorErrorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"alert\">{{message}}</div>\n<div id=\"orderPageLink\">\n    <a href=\"#\" (click)=\"orderPage()\">Back to Order Page</a>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"footerWrapper\">\n    <span>All rights reserved 2020 @KopeeTearia</span>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"header\">\n    <img src=\"assets/images/header-img.png\" alt=\"Banner Image\">\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/order/order.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order/order.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOrderOrderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div [class]=\"messageStyle\" *ngIf=\"message\">{{message}} \n\t<button (click)=\"closeBtn()\" class=\"close\">x</button>\n</div>\n<div>\n\t<div class=\"menuwrapper\">\n\t\t<img src=\"assets/images/menu.png\" alt=\"Drink Menu\" id=\"menu\">\n\t</div>\n\n\t<div class=\"tablewrapper\">\n\t\t<table align=\"center\">\n\t\t\t<tr>\n\t\t\t\t<th>Order Item</th>\n\t\t\t\t<th>Price</th>\n\t\t\t\t<th>On 5% Promo?</th>\n\t\t\t\t<th>Action</th>\n\t\t\t</tr>\n\t\t\t<tr >\n\t\t\t\t<td><input type=\"text\" [(ngModel)]=\"newOrderName\" id=\"ordName\"></td>\n\t\t\t\t<td><input type=\"number\" [(ngModel)]=\"newOrderPrice\" id=\"ordPrice\"></td>\n\t\t\t\t<td><input type=\"checkbox\" [(ngModel)]=\"newOrderDiscounted\" id=\"ordDiscounted\"></td>\n\t\t\t\t<td><button id=\"addOrderBtn\" class=\"btn\" (click)=\"addOrder()\" [disabled]=\"!newOrderName\">Place Order</button></td>\n\t\t\t</tr>\n\t\t</table>\n\n\t\t<br><br>\n\n\t\t<table align=\"center\" *ngIf=\"orderArr\" class=\"tableData\">\n\t\t\t<tr>\n\t\t\t\t<td colspan=\"5\">Attending Clerk: {{clerk?.name}}</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<th>Order Item</th>\n\t\t\t\t<th>Price</th>\n\t\t\t\t<th>On 5% Promo?</th>\n\t\t\t\t<th>Action</th>\n\t\t\t</tr>\n\t\t\t<tr *ngFor=\"let order of orderArr\">\n\t\t\t\t<td>{{order.orderName}}</td>\n\t\t\t\t<td>{{order.price | currency}}</td>\n\t\t\t\t<td><input type=\"checkbox\" [checked]=\"order.discounted\" disabled/></td>\n\t\t\t\t<td>\n\t\t\t\t\t<!--\n\t\t\t\t\t<a href=\"#\" (click)=\"editItem(order)\">Edit</a> | \n\t\t\t\t\t<a href=\"#\" (click)=\"deleteItem(order)\">Delete </a> \n\t\t\t\t\t-->\n\t\t\t\t\t<button id=\"editOrd\" class=\"btn2\" (click)=\"editItem(order)\">Edit</button>\n\t\t\t\t\t<button id=\"deleteOrd\" class=\"btn2\" (click)=\"deleteItem(order)\">Delete</button>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<tr *ngIf=\"showUpdateBtn\" id=\"updateOrder\">\n\t\t\t\t<td><input type=\"text\" [(ngModel)]=\"orderName\" id=\"updName\"></td>\n\t\t\t\t<td><input type=\"number\" [(ngModel)]=\"orderPrice\" id=\"updPrice\"></td>\n\t\t\t\t<td><input type=\"checkbox\" [(ngModel)]=\"isOrderDiscounted\" id=\"updDiscount\"></td>\n\t\t\t\t<td>\n\t\t\t\t\t<!-- <a href=\"#\" (click)=\"updateOrder()\">Update</a> |\n\t\t\t\t\t<a href=\"#\" (click)=\"cancelUpdate()\">Cancel</a>-->\n\t\t\t\t\t<button id=\"updOrd\" class=\"btn2\" (click)=\"updateOrder()\">Update</button>\n\t\t\t\t\t<button id=\"cancelOrd\" class=\"btn2\" (click)=\"cancelUpdate()\">Cancel</button>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td colspan=\"5\">Total Regular Bill: <b>{{totalRegularBill | currency}}</b></td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td colspan=\"5\">Total Discounted Bill: <b>{{totalDiscountedBill | currency}}</b></td>\n\t\t\t</tr>\n\t\t</table>\n\t</div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/promo/promo.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/promo/promo.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPromoPromoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"promoBanner\">\n\t<marquee scrollamount=\"12\">\n\t\t<!-- 5% discount on all Espresso Bar drinks!!! Buy Now! -->\n\t\t{{promoDiscount}}% DISCOUNT ON ALL {{onPromoItems}}!!! BUY NOW!\n\t</marquee>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _order_order_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./order/order.component */
    "./src/app/order/order.component.ts");
    /* harmony import */


    var _error_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./error/error.component */
    "./src/app/error/error.component.ts");

    var routes = [{
      path: '',
      component: _order_order_component__WEBPACK_IMPORTED_MODULE_3__["OrderComponent"]
    }, {
      path: 'order',
      component: _order_order_component__WEBPACK_IMPORTED_MODULE_3__["OrderComponent"]
    }, {
      path: '**',
      component: _error_error_component__WEBPACK_IMPORTED_MODULE_4__["ErrorComponent"]
    }]; // export default routes;

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        useHash: true
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      // private router: Router
      function AppComponent(router) {
        _classCallCheck(this, AppComponent);

        this.router = router;
        this.title = 'order-billing-client';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.router.navigate(['']); // Redirect to order page upon load
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.constants.ts":
  /*!**********************************!*\
    !*** ./src/app/app.constants.ts ***!
    \**********************************/

  /*! exports provided: API_URL */

  /***/
  function srcAppAppConstantsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "API_URL", function () {
      return API_URL;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // URL for the actual server application.properties file of order-billing-ws web service
    // export const API_URL = 'http://localhost:8090/kopeetearia';
    // Specify URL for tomcat server
    // port: 8085
    // url used: kopeeteria-ws


    var API_URL = 'http://localhost:8085/kopeetearia-ws';
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _order_order_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./order/order.component */
    "./src/app/order/order.component.ts");
    /* harmony import */


    var _error_error_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./error/error.component */
    "./src/app/error/error.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _promo_promo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./promo/promo.component */
    "./src/app/promo/promo.component.ts"); // import routes from './app-routing.module';


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _order_order_component__WEBPACK_IMPORTED_MODULE_7__["OrderComponent"], _error_error_component__WEBPACK_IMPORTED_MODULE_8__["ErrorComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"], _promo_promo_component__WEBPACK_IMPORTED_MODULE_11__["PromoComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/error/error.component.css":
  /*!*******************************************!*\
    !*** ./src/app/error/error.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppErrorErrorComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".alert {\r\n\tpadding: 10px;\r\n\tbackground-color: #f44336;\r\n\ttext-align: center;\r\n\tcolor: white;\r\n\theight: 20px;\r\n\tfont-family: Georgia;\r\n}\r\n\r\n#orderPageLink {\r\n    margin-top: 20px;\r\n    font-family: Calibri;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXJyb3IvZXJyb3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGFBQWE7Q0FDYix5QkFBeUI7Q0FDekIsa0JBQWtCO0NBQ2xCLFlBQVk7Q0FDWixZQUFZO0NBQ1osb0JBQW9CO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvZXJyb3IvZXJyb3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGVydCB7XHJcblx0cGFkZGluZzogMTBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRjb2xvcjogd2hpdGU7XHJcblx0aGVpZ2h0OiAyMHB4O1xyXG5cdGZvbnQtZmFtaWx5OiBHZW9yZ2lhO1xyXG59XHJcblxyXG4jb3JkZXJQYWdlTGluayB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IENhbGlicmk7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/error/error.component.ts":
  /*!******************************************!*\
    !*** ./src/app/error/error.component.ts ***!
    \******************************************/

  /*! exports provided: ErrorComponent */

  /***/
  function srcAppErrorErrorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorComponent", function () {
      return ErrorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ErrorComponent =
    /*#__PURE__*/
    function () {
      function ErrorComponent(router) {
        _classCallCheck(this, ErrorComponent);

        this.router = router;
        this.message = 'Unsupported web page URL.';
      }

      _createClass(ErrorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "orderPage",
        value: function orderPage() {
          this.router.navigate(['']);
        }
      }]);

      return ErrorComponent;
    }();

    ErrorComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-error',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./error.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/error/error.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./error.component.css */
      "./src/app/error/error.component.css")).default]
    })], ErrorComponent);
    /***/
  },

  /***/
  "./src/app/footer/footer.component.css":
  /*!*********************************************!*\
    !*** ./src/app/footer/footer.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".footerWrapper {\r\n    bottom: 0;\r\n    position: absolute;\r\n    width: 98.5%;\r\n    background-color: #222222;\r\n    padding: 15px 10px;\r\n    text-align: center;\r\n    color: gray;\r\n    font-family: Calibri;\r\n    /* overflow: hidden; */\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztJQUNULGtCQUFrQjtJQUNsQixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLG9CQUFvQjtJQUNwQixzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyV3JhcHBlciB7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogOTguNSU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMjIyO1xyXG4gICAgcGFkZGluZzogMTVweCAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICBmb250LWZhbWlseTogQ2FsaWJyaTtcclxuICAgIC8qIG92ZXJmbG93OiBoaWRkZW47ICovXHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/footer/footer.component.css")).default]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/header/header.component.css":
  /*!*********************************************!*\
    !*** ./src/app/header/header.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHeaderHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header {\r\n    height: 97px; \r\n    width: 100%;\r\n\tbackground-color: #000000;\r\n}\r\n\r\n/* .wrapper {\r\n    background-color: black;\r\n    width: 100%;\r\n    height: 95px; \r\n}\r\n\r\n.header {\r\n    float: left;\r\n}\r\n\r\n.loginWrapper {\r\n    margin: 0 auto;\r\n    background-color: black;\r\n    float: right;\r\n    color: white;\r\n}\r\n\r\n.loginDetails {\r\n    font-family: Verdana;\r\n    font-size: 15px;\r\n    width: 100%;\r\n    padding: 10px 0;\r\n}\r\n\r\nbutton {\r\n    background-color: white;\r\n    color: black;\r\n\tborder: none;\r\n\tborder-radius: 5px;\r\n\ttext-align: center;\r\n\ttext-decoration: none;\r\n\tdisplay: inline-block;\r\n    margin: 20px 10px;\r\n\tcursor: pointer;\r\n    font-weight: bold;\r\n    font-size: 15px;\r\n    font-family: 'Segoe UI';\r\n}\r\n\r\nbutton:hover {\r\n    background-color: aquamarine;\r\n}\r\n\r\n.menuwrapper {\r\n\tmargin-left:250px;\r\n\tfloat: left;\r\n\tmargin-top: 30px;\r\n} */\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7Q0FDZCx5QkFBeUI7QUFDMUI7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBK0NHIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcbiAgICBoZWlnaHQ6IDk3cHg7IFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuLyogLndyYXBwZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogOTVweDsgXHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5sb2dpbldyYXBwZXIge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmxvZ2luRGV0YWlscyB7XHJcbiAgICBmb250LWZhbWlseTogVmVyZGFuYTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogMjBweCAxMHB4O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSSc7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xyXG59XHJcblxyXG4ubWVudXdyYXBwZXIge1xyXG5cdG1hcmdpbi1sZWZ0OjI1MHB4O1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG5cdG1hcmdpbi10b3A6IDMwcHg7XHJcbn0gKi9cclxuXHJcblxyXG5cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.css */
      "./src/app/header/header.component.css")).default]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/order/order.component.css":
  /*!*******************************************!*\
    !*** ./src/app/order/order.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppOrderOrderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n.btn {\r\n\tbackground-color: #02075d;\r\n\tborder: none;\r\n\tborder-radius: 15px;\r\n\tcolor: white;\r\n\tpadding: 10px 15px;\r\n\ttext-align: center;\r\n\ttext-decoration: none;\r\n\tdisplay: inline-block;\r\n\tfont-size: 12px;\r\n\tmargin: 4px 2px;\r\n\tcursor: pointer;\r\n\tfont-weight: bold;\r\n}\r\n\r\n.btn2 {\r\n\tbackground-color: #02075d;\r\n\tborder: none;\r\n\tborder-radius: 8px;\r\n\tcolor: white;\r\n\tpadding: 5px 15px;\r\n\ttext-align: center;\r\n\ttext-decoration: none;\r\n\tdisplay: inline-block;\r\n\tfont-size: 12px;\r\n\tmargin: 2px;\r\n\tcursor: pointer;\r\n\tfont-weight: bold;\r\n}\r\n\r\n#menu {\r\n    display: block;\r\n\twidth: 90%;\r\n}\r\n\r\n.menuwrapper {\r\n\tmargin-left:250px;\r\n\tfloat: left;\r\n\tmargin-top: 12px;\r\n}\r\n\r\n.tablewrapper {\r\n\tmargin-top: 12px;\r\n\tfloat: left;\r\n}\r\n\r\n.alert {\r\n\tpadding: 10px;\r\n\tbackground-color: #f44336;\r\n\ttext-align: center;\r\n\tcolor: white;\r\n\theight: 15px;\r\n\tfont-family: Georgia;\r\n}\r\n\r\n.success {\r\n\tpadding: 10px;\r\n\ttext-align: center;\r\n\tbackground-color: #6bbd6e;\r\n\tcolor: white;\r\n\theight: 15px;\r\n\tfont-family: Georgia;\r\n}\r\n\r\ntable, tr, th, td {\r\n\twidth: 800px;\r\n\theight: 30px;\r\n\ttext-align: center;\r\n\tfont-family: 'Courier New', Courier;\r\n}\r\n\r\ntable {\r\n\tborder-style: solid;\r\n\tborder-width: 1px;\r\n}\r\n\r\nth {\r\n\tbackground-color: darkblue;\r\n\tcolor: white;\r\n\tfont-size: 20px;\r\n\tfont-weight: bold;\r\n}\r\n\r\ntr:nth-child(even) {\r\n\tbackground-color:aliceblue;\r\n}\r\n\r\ntr:hover {\r\n\tbackground-color:azure;\r\n}\r\n\r\n.tableData {\r\n\tmargin-top: 0px;\r\n\t/* table scrollbar */\r\n\t/* height: 500px;\r\n\toverflow-y: scroll;\r\n\tdisplay: block; */\r\n}\r\n\r\n.close {\r\n\tcolor: gray;\r\n\tfont-family: Arial;\r\n\ttext-decoration: none;\r\n\ttext-align: center;\r\n\tcursor: pointer;\r\n\twidth: 20px;\r\n\tborder-style: none;\r\n\tborder-radius: 3px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXIvb3JkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsWUFBWTtDQUNaLG1CQUFtQjtDQUNuQixZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLGtCQUFrQjtDQUNsQixxQkFBcUI7Q0FDckIscUJBQXFCO0NBQ3JCLGVBQWU7Q0FDZixlQUFlO0NBQ2YsZUFBZTtDQUNmLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLHlCQUF5QjtDQUN6QixZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLFlBQVk7Q0FDWixpQkFBaUI7Q0FDakIsa0JBQWtCO0NBQ2xCLHFCQUFxQjtDQUNyQixxQkFBcUI7Q0FDckIsZUFBZTtDQUNmLFdBQVc7Q0FDWCxlQUFlO0NBQ2YsaUJBQWlCO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztDQUNqQixVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsV0FBVztDQUNYLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IseUJBQXlCO0NBQ3pCLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osWUFBWTtDQUNaLG9CQUFvQjtBQUNyQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixrQkFBa0I7Q0FDbEIseUJBQXlCO0NBQ3pCLFlBQVk7Q0FDWixZQUFZO0NBQ1osb0JBQW9CO0FBQ3JCOztBQUVBO0NBQ0MsWUFBWTtDQUNaLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIsbUNBQW1DO0FBQ3BDOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLDBCQUEwQjtDQUMxQixZQUFZO0NBQ1osZUFBZTtDQUNmLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLDBCQUEwQjtBQUMzQjs7QUFFQTtDQUNDLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixvQkFBb0I7Q0FDcEI7O2tCQUVpQjtBQUNsQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIscUJBQXFCO0NBQ3JCLGtCQUFrQjtDQUNsQixlQUFlO0NBQ2YsV0FBVztDQUNYLGtCQUFrQjtDQUNsQixrQkFBa0I7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9vcmRlci9vcmRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5idG4ge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMwMjA3NWQ7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdHBhZGRpbmc6IDEwcHggMTVweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRmb250LXNpemU6IDEycHg7XHJcblx0bWFyZ2luOiA0cHggMnB4O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmJ0bjIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMwMjA3NWQ7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdGJvcmRlci1yYWRpdXM6IDhweDtcclxuXHRjb2xvcjogd2hpdGU7XHJcblx0cGFkZGluZzogNXB4IDE1cHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdG1hcmdpbjogMnB4O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuI21lbnUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcblx0d2lkdGg6IDkwJTtcclxufVxyXG5cclxuLm1lbnV3cmFwcGVyIHtcclxuXHRtYXJnaW4tbGVmdDoyNTBweDtcclxuXHRmbG9hdDogbGVmdDtcclxuXHRtYXJnaW4tdG9wOiAxMnB4O1xyXG59XHJcblxyXG4udGFibGV3cmFwcGVyIHtcclxuXHRtYXJnaW4tdG9wOiAxMnB4O1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4uYWxlcnQge1xyXG5cdHBhZGRpbmc6IDEwcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdGhlaWdodDogMTVweDtcclxuXHRmb250LWZhbWlseTogR2VvcmdpYTtcclxufVxyXG5cclxuLnN1Y2Nlc3Mge1xyXG5cdHBhZGRpbmc6IDEwcHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICM2YmJkNmU7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdGhlaWdodDogMTVweDtcclxuXHRmb250LWZhbWlseTogR2VvcmdpYTtcclxufVxyXG5cclxudGFibGUsIHRyLCB0aCwgdGQge1xyXG5cdHdpZHRoOiA4MDBweDtcclxuXHRoZWlnaHQ6IDMwcHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyO1xyXG59XHJcblxyXG50YWJsZSB7XHJcblx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHRib3JkZXItd2lkdGg6IDFweDtcclxufVxyXG5cclxudGgge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxuXHRmb250LXNpemU6IDIwcHg7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbnRyOm50aC1jaGlsZChldmVuKSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjphbGljZWJsdWU7XHJcbn1cclxuXHJcbnRyOmhvdmVyIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOmF6dXJlO1xyXG59XHJcblxyXG4udGFibGVEYXRhIHtcclxuXHRtYXJnaW4tdG9wOiAwcHg7XHJcblx0LyogdGFibGUgc2Nyb2xsYmFyICovXHJcblx0LyogaGVpZ2h0OiA1MDBweDtcclxuXHRvdmVyZmxvdy15OiBzY3JvbGw7XHJcblx0ZGlzcGxheTogYmxvY2s7ICovXHJcbn1cclxuXHJcbi5jbG9zZSB7XHJcblx0Y29sb3I6IGdyYXk7XHJcblx0Zm9udC1mYW1pbHk6IEFyaWFsO1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdHdpZHRoOiAyMHB4O1xyXG5cdGJvcmRlci1zdHlsZTogbm9uZTtcclxuXHRib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/order/order.component.ts":
  /*!******************************************!*\
    !*** ./src/app/order/order.component.ts ***!
    \******************************************/

  /*! exports provided: OrderComponent */

  /***/
  function srcAppOrderOrderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderComponent", function () {
      return OrderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/backend.service */
    "./src/app/service/backend.service.ts");
    /* harmony import */


    var _app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../app.constants */
    "./src/app/app.constants.ts");

    var OrderComponent =
    /*#__PURE__*/
    function () {
      function OrderComponent(backend) {
        _classCallCheck(this, OrderComponent);

        this.backend = backend;
        this.showUpdateBtn = false;
      }

      _createClass(OrderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.showRegularBill();
          this.showDiscountedBill();
        }
      }, {
        key: "showRegularBill",
        value: function showRegularBill() {
          var _this = this;

          this.backend.getOrders("".concat(_app_constants__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/order/bill/regular")).subscribe(function (data) {
            _this.clerk = data['clerk'];
            _this.orderArr = data['orderList'];
            _this.totalRegularBill = data['totalBill'];
          }, function () {
            _this.message = 'Cannot load details. Something went wrong.';
            _this.messageStyle = 'alert';
          });
        }
      }, {
        key: "showDiscountedBill",
        value: function showDiscountedBill() {
          var _this2 = this;

          this.backend.getOrders("".concat(_app_constants__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/order/bill/discounted")).subscribe(function (data) {
            _this2.totalDiscountedBill = data['totalBill'];
          }, function () {
            _this2.message = 'Cannot load details. Something went wrong.';
            _this2.messageStyle = 'alert';
          });
        }
      }, {
        key: "addOrder",
        value: function addOrder() {
          var _this3 = this;

          // create new order obj
          var orderObj = {
            orderName: this.newOrderName,
            price: this.newOrderPrice,
            discounted: this.newOrderDiscounted
          };
          this.backend.postOrder(orderObj).subscribe(function () {
            _this3.showRegularBill();

            _this3.showDiscountedBill();

            _this3.setEmptyFields();

            _this3.message = 'Order is successfully added.';
            _this3.messageStyle = 'success';
          }, function () {
            _this3.message = 'Unable to add order. Something went wrong.';
            _this3.messageStyle = 'alert';
          });
        }
      }, {
        key: "editItem",
        value: function editItem(order) {
          this.orderId = order.id;
          this.orderName = order.orderName;
          this.orderPrice = order.price;
          this.isOrderDiscounted = order.discounted;
          this.showUpdateBtn = true;
        }
      }, {
        key: "createOrderObj",
        value: function createOrderObj() {
          this.orderObj = {
            id: this.orderId,
            orderName: this.orderName,
            price: this.orderPrice,
            discounted: this.isOrderDiscounted
          };
        }
      }, {
        key: "updateOrder",
        value: function updateOrder() {
          var _this4 = this;

          this.createOrderObj();
          this.backend.updateOrder(this.orderObj).subscribe(function () {
            _this4.showRegularBill();

            _this4.showDiscountedBill(); // this.showUpdateBtn = false;


            _this4.cancelUpdate();

            _this4.message = 'Order is successfully updated.';
            _this4.messageStyle = 'success';
          }, function () {
            _this4.message = 'Unable to update order. Something went wrong.';
            _this4.messageStyle = 'alert';
          });
        }
      }, {
        key: "cancelUpdate",
        value: function cancelUpdate() {
          this.showUpdateBtn = false;
          this.orderName = '';
          this.orderPrice = 0;
          this.isOrderDiscounted = false;
        }
      }, {
        key: "setEmptyFields",
        value: function setEmptyFields() {
          this.newOrderName = '';
          this.newOrderPrice = 0.0;
          this.newOrderDiscounted = false;
        }
      }, {
        key: "deleteItem",
        value: function deleteItem(order) {
          var _this5 = this;

          this.backend.deleteOrder(order).subscribe(function () {
            _this5.showRegularBill();

            _this5.showDiscountedBill();

            _this5.message = 'Order is successfully deleted.';
            _this5.messageStyle = 'success';
          }, function () {
            _this5.message = 'Unable to delete order. Something went wrong.';
            _this5.messageStyle = 'alert';
          });
        }
      }, {
        key: "closeBtn",
        value: function closeBtn() {
          this.message = '';
        }
      }]);

      return OrderComponent;
    }();

    OrderComponent.ctorParameters = function () {
      return [{
        type: _service_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"]
      }];
    };

    OrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-order',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./order.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/order/order.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./order.component.css */
      "./src/app/order/order.component.css")).default]
    })], OrderComponent);
    /***/
  },

  /***/
  "./src/app/promo/promo.component.css":
  /*!*******************************************!*\
    !*** ./src/app/promo/promo.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPromoPromoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n.promoBanner {\r\n\tpadding: 10px 10px 20px 10px;\r\n\ttext-align: center;\r\n\tbackground-color: darkblue;\r\n\tcolor: white;\r\n\theight: 15px;\r\n\tfont-family: Impact;\r\n\tfont-size: 25px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvbW8vcHJvbW8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7Q0FDQyw0QkFBNEI7Q0FDNUIsa0JBQWtCO0NBQ2xCLDBCQUEwQjtDQUMxQixZQUFZO0NBQ1osWUFBWTtDQUNaLG1CQUFtQjtDQUNuQixlQUFlO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvcHJvbW8vcHJvbW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ucHJvbW9CYW5uZXIge1xyXG5cdHBhZGRpbmc6IDEwcHggMTBweCAyMHB4IDEwcHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxuXHRoZWlnaHQ6IDE1cHg7XHJcblx0Zm9udC1mYW1pbHk6IEltcGFjdDtcclxuXHRmb250LXNpemU6IDI1cHg7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/promo/promo.component.ts":
  /*!******************************************!*\
    !*** ./src/app/promo/promo.component.ts ***!
    \******************************************/

  /*! exports provided: PromoComponent */

  /***/
  function srcAppPromoPromoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PromoComponent", function () {
      return PromoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PromoComponent =
    /*#__PURE__*/
    function () {
      function PromoComponent() {
        _classCallCheck(this, PromoComponent);

        this.promoDiscount = 5;
        this.onPromoItems = 'ESPRESSO BAR DRINKS';
      }

      _createClass(PromoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PromoComponent;
    }();

    PromoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-promo',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./promo.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/promo/promo.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./promo.component.css */
      "./src/app/promo/promo.component.css")).default]
    })], PromoComponent);
    /***/
  },

  /***/
  "./src/app/service/backend.service.ts":
  /*!********************************************!*\
    !*** ./src/app/service/backend.service.ts ***!
    \********************************************/

  /*! exports provided: BackendService */

  /***/
  function srcAppServiceBackendServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BackendService", function () {
      return BackendService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../app.constants */
    "./src/app/app.constants.ts");

    var BackendService =
    /*#__PURE__*/
    function () {
      function BackendService(http) {
        _classCallCheck(this, BackendService);

        this.http = http;
      }

      _createClass(BackendService, [{
        key: "getOrders",
        value: function getOrders(urlEndpoint) {
          return this.http.get(urlEndpoint);
        }
      }, {
        key: "postOrder",
        value: function postOrder(order) {
          return this.http.post("".concat(_app_constants__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/orders"), order);
        }
      }, {
        key: "deleteOrder",
        value: function deleteOrder(order) {
          var payload = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json'
            }),
            body: order
          };
          return this.http.delete("".concat(_app_constants__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/orders"), payload);
        }
      }, {
        key: "updateOrder",
        value: function updateOrder(order) {
          return this.http.put("".concat(_app_constants__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/orders"), order);
        }
      }]);

      return BackendService;
    }();

    BackendService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    BackendService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], BackendService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\WORKSPACES\checkpoints\order-billing-client\frontend\order-billing-client\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map