(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["client-core-signal-hub-signal-hub-module"],{

/***/ "./src/app/pages/client-core/signal-hub/signal-core/signal-core.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/client-core/signal-hub/signal-core/signal-core.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SignalCoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignalCoreComponent", function() { return SignalCoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SignalCoreComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
SignalCoreComponent.ɵfac = function SignalCoreComponent_Factory(t) { return new (t || SignalCoreComponent)(); };
SignalCoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignalCoreComponent, selectors: [["app-signal-core"]], decls: 2, vars: 0, template: function SignalCoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "signal-core works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NsaWVudC1jb3JlL3NpZ25hbC1odWIvc2lnbmFsLWNvcmUvc2lnbmFsLWNvcmUuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignalCoreComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signal-core',
                templateUrl: './signal-core.component.html',
                styleUrls: ['./signal-core.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/client-core/signal-hub/signal-hub-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/client-core/signal-hub/signal-hub-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: SignalHubRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignalHubRoutingModule", function() { return SignalHubRoutingModule; });
/* harmony import */ var _signal_core_signal_core_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signal-core/signal-core.component */ "./src/app/pages/client-core/signal-hub/signal-core/signal-core.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const routes = [
    {
        path: '',
        component: _signal_core_signal_core_component__WEBPACK_IMPORTED_MODULE_0__["SignalCoreComponent"],
        data: { title: '', breadcrumb: 'Signal Hub' }
        // children: [
        //   {
        //     path: '',
        //     pathMatch: 'full',
        //     redirectTo: 'affiliate-request'
        //   },
        //   {
        //     path: 'affiliate-request',
        //     component: AffiliateRequestComponent,
        //     data: {title: 'Affiliate Request', breadcrumb: 'Affiliate-Request-Status'}
        //   },
        // ]
    }
];
class SignalHubRoutingModule {
}
SignalHubRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SignalHubRoutingModule });
SignalHubRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function SignalHubRoutingModule_Factory(t) { return new (t || SignalHubRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SignalHubRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SignalHubRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/client-core/signal-hub/signal-hub.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/client-core/signal-hub/signal-hub.module.ts ***!
  \*******************************************************************/
/*! exports provided: SignalHubModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignalHubModule", function() { return SignalHubModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _signal_hub_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signal-hub-routing.module */ "./src/app/pages/client-core/signal-hub/signal-hub-routing.module.ts");
/* harmony import */ var _signal_core_signal_core_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signal-core/signal-core.component */ "./src/app/pages/client-core/signal-hub/signal-core/signal-core.component.ts");





class SignalHubModule {
}
SignalHubModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SignalHubModule });
SignalHubModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SignalHubModule_Factory(t) { return new (t || SignalHubModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _signal_hub_routing_module__WEBPACK_IMPORTED_MODULE_2__["SignalHubRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SignalHubModule, { declarations: [_signal_core_signal_core_component__WEBPACK_IMPORTED_MODULE_3__["SignalCoreComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _signal_hub_routing_module__WEBPACK_IMPORTED_MODULE_2__["SignalHubRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignalHubModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_signal_core_signal_core_component__WEBPACK_IMPORTED_MODULE_3__["SignalCoreComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _signal_hub_routing_module__WEBPACK_IMPORTED_MODULE_2__["SignalHubRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=client-core-signal-hub-signal-hub-module-es2015.js.map