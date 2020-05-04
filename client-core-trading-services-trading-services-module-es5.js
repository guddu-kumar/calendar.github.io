function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["client-core-trading-services-trading-services-module"], {
  /***/
  "./src/app/pages/client-core/trading-services/trading-core/trading-core.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/pages/client-core/trading-services/trading-core/trading-core.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: TradingCoreComponent */

  /***/
  function srcAppPagesClientCoreTradingServicesTradingCoreTradingCoreComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TradingCoreComponent", function () {
      return TradingCoreComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TradingCoreComponent =
    /*#__PURE__*/
    function () {
      function TradingCoreComponent() {
        _classCallCheck(this, TradingCoreComponent);
      }

      _createClass(TradingCoreComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TradingCoreComponent;
    }();

    TradingCoreComponent.ɵfac = function TradingCoreComponent_Factory(t) {
      return new (t || TradingCoreComponent)();
    };

    TradingCoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TradingCoreComponent,
      selectors: [["app-trading-core"]],
      decls: 2,
      vars: 0,
      template: function TradingCoreComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "trading-core works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NsaWVudC1jb3JlL3RyYWRpbmctc2VydmljZXMvdHJhZGluZy1jb3JlL3RyYWRpbmctY29yZS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TradingCoreComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-trading-core',
          templateUrl: './trading-core.component.html',
          styleUrls: ['./trading-core.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/client-core/trading-services/trading-services-routing.module.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/pages/client-core/trading-services/trading-services-routing.module.ts ***!
    \***************************************************************************************/

  /*! exports provided: TradingServicesRoutingModule */

  /***/
  function srcAppPagesClientCoreTradingServicesTradingServicesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TradingServicesRoutingModule", function () {
      return TradingServicesRoutingModule;
    });
    /* harmony import */


    var _trading_core_trading_core_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./trading-core/trading-core.component */
    "./src/app/pages/client-core/trading-services/trading-core/trading-core.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '',
      component: _trading_core_trading_core_component__WEBPACK_IMPORTED_MODULE_0__["TradingCoreComponent"],
      data: {
        title: 'Trading Service',
        breadcrumb: 'Trading-Service'
      }
    }];

    var TradingServicesRoutingModule = function TradingServicesRoutingModule() {
      _classCallCheck(this, TradingServicesRoutingModule);
    };

    TradingServicesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: TradingServicesRoutingModule
    });
    TradingServicesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function TradingServicesRoutingModule_Factory(t) {
        return new (t || TradingServicesRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TradingServicesRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TradingServicesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/client-core/trading-services/trading-services.module.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/pages/client-core/trading-services/trading-services.module.ts ***!
    \*******************************************************************************/

  /*! exports provided: TradingServicesModule */

  /***/
  function srcAppPagesClientCoreTradingServicesTradingServicesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TradingServicesModule", function () {
      return TradingServicesModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _trading_services_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./trading-services-routing.module */
    "./src/app/pages/client-core/trading-services/trading-services-routing.module.ts");
    /* harmony import */


    var _trading_core_trading_core_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./trading-core/trading-core.component */
    "./src/app/pages/client-core/trading-services/trading-core/trading-core.component.ts");

    var TradingServicesModule = function TradingServicesModule() {
      _classCallCheck(this, TradingServicesModule);
    };

    TradingServicesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TradingServicesModule
    });
    TradingServicesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function TradingServicesModule_Factory(t) {
        return new (t || TradingServicesModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _trading_services_routing_module__WEBPACK_IMPORTED_MODULE_2__["TradingServicesRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TradingServicesModule, {
        declarations: [_trading_core_trading_core_component__WEBPACK_IMPORTED_MODULE_3__["TradingCoreComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _trading_services_routing_module__WEBPACK_IMPORTED_MODULE_2__["TradingServicesRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TradingServicesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_trading_core_trading_core_component__WEBPACK_IMPORTED_MODULE_3__["TradingCoreComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _trading_services_routing_module__WEBPACK_IMPORTED_MODULE_2__["TradingServicesRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=client-core-trading-services-trading-services-module-es5.js.map