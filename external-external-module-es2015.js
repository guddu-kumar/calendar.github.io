(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["external-external-module"],{

/***/ "./src/app/external/external-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/external/external-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ExternalRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternalRoutingModule", function() { return ExternalRoutingModule; });
/* harmony import */ var _webscrapping_webscrapping_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webscrapping/webscrapping.component */ "./src/app/external/webscrapping/webscrapping.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const routes = [
    {
        path: 'webscrapping',
        component: _webscrapping_webscrapping_component__WEBPACK_IMPORTED_MODULE_0__["WebscrappingComponent"],
    },
];
class ExternalRoutingModule {
}
ExternalRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExternalRoutingModule });
ExternalRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExternalRoutingModule_Factory(t) { return new (t || ExternalRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExternalRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExternalRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/external/external.module.ts":
/*!*********************************************!*\
  !*** ./src/app/external/external.module.ts ***!
  \*********************************************/
/*! exports provided: ExternalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternalModule", function() { return ExternalModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _external_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./external-routing.module */ "./src/app/external/external-routing.module.ts");
/* harmony import */ var _webscrapping_webscrapping_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./webscrapping/webscrapping.component */ "./src/app/external/webscrapping/webscrapping.component.ts");





class ExternalModule {
}
ExternalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ExternalModule });
ExternalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ExternalModule_Factory(t) { return new (t || ExternalModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _external_routing_module__WEBPACK_IMPORTED_MODULE_2__["ExternalRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ExternalModule, { declarations: [_webscrapping_webscrapping_component__WEBPACK_IMPORTED_MODULE_3__["WebscrappingComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _external_routing_module__WEBPACK_IMPORTED_MODULE_2__["ExternalRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExternalModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_webscrapping_webscrapping_component__WEBPACK_IMPORTED_MODULE_3__["WebscrappingComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _external_routing_module__WEBPACK_IMPORTED_MODULE_2__["ExternalRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/external/webscrapping/webscrapping.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/external/webscrapping/webscrapping.component.ts ***!
  \*****************************************************************/
/*! exports provided: WebscrappingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebscrappingComponent", function() { return WebscrappingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class WebscrappingComponent {
    constructor(http) {
        this.http = http;
        this.http.get('http://5.189.170.190:3009/calenderhtml').subscribe(data => {
            this.dCal = data;
            console.log(data);
        });
    }
    ngAfterViewInit() {
        // $('*').each(function () {
        //   var id = $(this).removeAttr("class");
        // });
    }
    ngOnInit() {
    }
}
WebscrappingComponent.ɵfac = function WebscrappingComponent_Factory(t) { return new (t || WebscrappingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
WebscrappingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WebscrappingComponent, selectors: [["app-webscrapping"]], decls: 1, vars: 1, consts: [[3, "innerHTML"]], template: function WebscrappingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "table", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.dCal.data, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4dGVybmFsL3dlYnNjcmFwcGluZy93ZWJzY3JhcHBpbmcuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebscrappingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-webscrapping',
                templateUrl: './webscrapping.component.html',
                styleUrls: ['./webscrapping.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=external-external-module-es2015.js.map