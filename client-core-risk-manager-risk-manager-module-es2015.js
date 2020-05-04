(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["client-core-risk-manager-risk-manager-module"],{

/***/ "./src/app/pages/client-core/risk-manager/risk-manager-core/equity-drawdown/equity-drawdown.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/client-core/risk-manager/risk-manager-core/equity-drawdown/equity-drawdown.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: EquityDrawdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquityDrawdownComponent", function() { return EquityDrawdownComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/esm5/ngx-bootstrap.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_services_header_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../../shared/services/header.service */ "./src/app/shared/services/header.service.ts");
/* harmony import */ var _shared_services_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../../shared/services/global.service */ "./src/app/shared/services/global.service.ts");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/__ivy_ngcc__/fesm2015/ngx-order-pipe.js");
/* harmony import */ var _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../../shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-feather */ "./node_modules/angular-feather/__ivy_ngcc__/fesm2015/angular-feather.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");
















const _c0 = ["formData"];
function EquityDrawdownComponent_div_4_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r628 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Success -: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i-feather", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EquityDrawdownComponent_div_4_div_6_Template_i_feather_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r628); const ctx_r627 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r627.onCloseMsqBlock(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r615 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r615.messageToDisplay, " ");
} }
function EquityDrawdownComponent_div_4_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r630 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Oops... : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i-feather", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EquityDrawdownComponent_div_4_div_9_Template_i_feather_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r630); const ctx_r629 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r629.onCloseMsqBlock(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r616 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r616.messageToDisplay, " ");
} }
function EquityDrawdownComponent_div_4_option_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const acc_r631 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", acc_r631.MT4Account);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](acc_r631.MT4Account);
} }
function EquityDrawdownComponent_div_4_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select an account Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EquityDrawdownComponent_div_4_div_83_label_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Close All Position");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const action_r632 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "customRadio", action_r632, "");
} }
function EquityDrawdownComponent_div_4_div_83_label_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Close All Loss Trades");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const action_r632 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "customRadio", action_r632, "");
} }
function EquityDrawdownComponent_div_4_div_83_label_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Close All Profit Trades");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const action_r632 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "customRadio", action_r632, "");
} }
function EquityDrawdownComponent_div_4_div_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 89, 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EquityDrawdownComponent_div_4_div_83_label_3_Template, 2, 1, "label", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EquityDrawdownComponent_div_4_div_83_label_4_Template, 2, 1, "label", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EquityDrawdownComponent_div_4_div_83_label_5_Template, 2, 1, "label", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const action_r632 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "customRadio", action_r632, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", action_r632);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", action_r632 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", action_r632 === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", action_r632 === 2);
} }
const _c1 = function () { return { dateInputFormat: "MM/DD/YYYY " }; };
function EquityDrawdownComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r641 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 27, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EquityDrawdownComponent_div_4_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r641); const ctx_r640 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r640.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EquityDrawdownComponent_div_4_div_6_Template, 6, 1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EquityDrawdownComponent_div_4_div_9_Template, 6, 1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Account Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "select", 38, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Select Account Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, EquityDrawdownComponent_div_4_option_24_Template, 2, 2, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, EquityDrawdownComponent_div_4_span_25_Template, 2, 0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Target Limit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 46, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "select", 49, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EquityDrawdownComponent_div_4_Template_select_ngModelChange_36_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r641); const ctx_r642 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r642.defaultLimitType = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "$");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Equity Direction");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EquityDrawdownComponent_div_4_Template_button_click_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r641); const ctx_r643 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r643.onSelectDirection(0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i-feather", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "UP");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EquityDrawdownComponent_div_4_Template_button_click_52_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r641); const ctx_r644 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r644.onSelectDirection(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i-feather", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Down");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Expiry Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "input", 60, 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EquityDrawdownComponent_div_4_Template_span_click_65_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r641); const ctx_r645 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r645.isOpenDatePicker = !ctx_r645.isOpenDatePicker; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "i-feather", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h5", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Required Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "You need to perform At least one Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, EquityDrawdownComponent_div_4_div_83_Template, 6, 5, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "h5", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Send Notification");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "You will receive Notification");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "input", 76, 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EquityDrawdownComponent_div_4_Template_input_ngModelChange_93_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r641); const ctx_r646 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r646.defaultDisableTrade = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Disable Trade");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "input", 79, 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EquityDrawdownComponent_div_4_Template_input_ngModelChange_98_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r641); const ctx_r647 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r647.defaultPushMail = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Push Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r614 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const _r617 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);
    const ctx_r611 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r611.successMsqBlock);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r611.ErrorMsqBlock);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r611.liveAccountData);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r617.valid && _r617.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r611.defaultLimitType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r611.direction === 0 && ctx_r611.isDirectionSelected ? "btn-success" : "btn-outline-success");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r611.direction === 1 && ctx_r611.isDirectionSelected ? "btn-danger" : "btn-outline-danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isOpen", ctx_r611.isOpenDatePicker)("minDate", ctx_r611.minDate)("maxDate", ctx_r611.maxDate)("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r614.valid || ctx_r611.isDirectionSelected === false || ctx_r611.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-spinner", ctx_r611.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r611.actionOnPosition);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r611.defaultDisableTrade);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r611.defaultPushMail);
} }
function EquityDrawdownComponent_tbody_58_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading ...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EquityDrawdownComponent_tbody_58_tr_2_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i-feather", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EquityDrawdownComponent_tbody_58_tr_2_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i-feather", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EquityDrawdownComponent_tbody_58_tr_2_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Close All Position");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EquityDrawdownComponent_tbody_58_tr_2_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Close All Loss Trades");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EquityDrawdownComponent_tbody_58_tr_2_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Close All Profit Trades");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EquityDrawdownComponent_tbody_58_tr_2_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Disable");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EquityDrawdownComponent_tbody_58_tr_2_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enable");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EquityDrawdownComponent_tbody_58_tr_2_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EquityDrawdownComponent_tbody_58_tr_2_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EquityDrawdownComponent_tbody_58_tr_2_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i-feather", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " UP");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EquityDrawdownComponent_tbody_58_tr_2_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i-feather", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Down");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EquityDrawdownComponent_tbody_58_tr_2_Template(rf, ctx) { if (rf & 1) {
    const _r664 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EquityDrawdownComponent_tbody_58_tr_2_span_8_Template, 2, 0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EquityDrawdownComponent_tbody_58_tr_2_span_9_Template, 2, 0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, EquityDrawdownComponent_tbody_58_tr_2_span_11_Template, 2, 0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, EquityDrawdownComponent_tbody_58_tr_2_span_12_Template, 2, 0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, EquityDrawdownComponent_tbody_58_tr_2_span_13_Template, 2, 0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, EquityDrawdownComponent_tbody_58_tr_2_span_15_Template, 2, 0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, EquityDrawdownComponent_tbody_58_tr_2_span_16_Template, 2, 0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, EquityDrawdownComponent_tbody_58_tr_2_span_18_Template, 2, 0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, EquityDrawdownComponent_tbody_58_tr_2_span_19_Template, 2, 0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, EquityDrawdownComponent_tbody_58_tr_2_span_21_Template, 3, 0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, EquityDrawdownComponent_tbody_58_tr_2_span_22_Template, 3, 0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "i-feather", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EquityDrawdownComponent_tbody_58_tr_2_Template_i_feather_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r664); const item_r650 = ctx.$implicit; const ctx_r663 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r663.onDelete(item_r650); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r650 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r650.oExpiry.sCreadedOn_Str);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r650.Account);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r650.Value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r650.oPerc_Value === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r650.oPerc_Value === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r650.oAction === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r650.oAction === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r650.oAction === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r650.oAlert_Disable_Trade === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r650.oAlert_Disable_Trade === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r650.oAlert_Mail === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r650.oAlert_Mail === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r650.oUP_DOWN === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r650.oUP_DOWN === 1);
} }
const _c2 = function (a0, a1, a2) { return { itemsPerPage: a0, currentPage: a1, totalItems: a2 }; };
function EquityDrawdownComponent_tbody_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EquityDrawdownComponent_tbody_58_tr_1_Template, 4, 0, "tr", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EquityDrawdownComponent_tbody_58_tr_2_Template, 26, 14, "tr", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "orderBy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r612 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r612.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](5, 8, ctx_r612.stopLossOrderData, ctx_r612.order, ctx_r612.reverse), ctx_r612.searchText), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](12, _c2, ctx_r612.pageSize, ctx_r612.p, ctx_r612.TotalCount)));
} }
function EquityDrawdownComponent_div_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Data Not Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class EquityDrawdownComponent {
    constructor(headerService, globalService, orderPipe, notificationService) {
        this.headerService = headerService;
        this.globalService = globalService;
        this.orderPipe = orderPipe;
        this.notificationService = notificationService;
        this.isVisibleFormArea = false;
        this.actionOnPosition = [0, 1, 2];
        this.isLoading = false;
        this.liveAccountData = [];
        this.stopLossOrderData = [];
        this.isDirectionSelected = false;
        this.defaultPushMail = false;
        this.defaultDisableTrade = false;
        this.defaultLimitType = 0;
        this.IsDataNotFound = false;
        this.ErrorMsqBlock = false;
        this.successMsqBlock = false;
        // pagination Setting
        this.TotalCount = 0;
        this.pageSize = 5; // Table Rows Perpage property
        this.order = ''; // Order property to sort coloum of table
        this.reverse = true; // Reverse property is used to sort table coloum
        this.isOpenDatePicker = false;
        this.currentDate = new Date();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            dateYMD: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](new Date()),
            dateFull: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](new Date()),
            dateMDY: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](new Date()),
            dateRange: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]([
                new Date(),
                new Date(this.currentDate.setDate(this.currentDate.getDate() + 7))
            ])
        });
        this.minDate = new Date();
        this.maxDate = new Date();
        this.minDate.setDate(this.minDate.getDate() - 0);
        this.maxDate.setDate(this.maxDate.getDate() + 2);
        this.subscription1 = this.headerService.castLoggedUserDetail.subscribe(resData => (this.LoggedParams = resData));
    }
    toggleFormArea() {
        this.isVisibleFormArea = !this.isVisibleFormArea;
    }
    onScrollEvent() {
        this.datepicker.hide();
    }
    setOrder(value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
    }
    ngOnInit() {
        this.getProfileAccounts();
        this.getStopLossOrderData(1, this.cat);
    }
    getStopLossOrderData(indexval, countVal) {
        this.isLoading = true;
        if (countVal) {
            this.pageSize = indexval;
            this.p = 1;
            this.setParams = {
                Profile: this.LoggedParams.sProfile.sMasterId,
                Index: this.p,
                Count: this.pageSize
            };
        }
        else {
            this.p = indexval;
            this.setParams = {
                Profile: this.LoggedParams.sProfile.sMasterId,
                Index: (this.p - 1) * this.pageSize + 1,
                Count: this.p * this.pageSize
            };
        }
        console.log(this.LoggedParams.sProfile.sMasterId);
        this.subscription3 = this.globalService.getRiskEquity(this.setParams).subscribe(data => {
            if (data.Count > 0) {
                this.TotalCount = data.Count;
                this.stopLossOrderData = data.lstEquityDD;
                this.isLoading = false;
                this.IsDataNotFound = false;
            }
            else {
                this.IsDataNotFound = true;
                this.isLoading = false;
            }
        });
    }
    getProfileAccounts() {
        const params = {
            ProfileId: this.LoggedParams.sProfile.sMasterId,
            LoginId: this.LoggedParams.sProfile.sMasterId
        };
        this.subscription2 = this.globalService.GET_PROFILE_ACCOUNTS(params).subscribe(data => {
            this.liveAccountData = data.lstAccount.map(acc => {
                if (acc) {
                    return Object.assign(acc.sUserInfo, acc.sAccountPlan);
                }
            });
        });
    }
    resetForm() {
        this.stopLossOrderForm.reset();
        this.isDirectionSelected = false;
        // this.stopLossOrderForm.value.limitType = 0;
        // this.stopLossOrderForm.form.value.limitType = 0;
        // this.defaultLimitType = 0;
    }
    onSubmit() {
        // alert(this.stopLossOrderForm.value.expiryTime);
        this.isLoading = true;
        const params = {
            RiskId: 0,
            Profile: this.LoggedParams.sProfile.sMasterId.toString(),
            Account: this.stopLossOrderForm.value.accountnumber.toString(),
            Value: this.stopLossOrderForm.value.targetLimit.toString(),
            sValue: 0,
            oPerc_Value: this.stopLossOrderForm.value.limitType,
            oUP_DOWN: this.direction,
            oAction: this.stopLossOrderForm.value.actionOnPosition,
            oAlert_Mail: (this.stopLossOrderForm.value.pushEmail === false) ? 0 : 1,
            oAlert_Disable_Trade: (this.stopLossOrderForm.value.disableTrade === false) ? 0 : 1,
            oTimestamp: {
                sCreadedOn: 0,
                sUpdatedOn: 0,
                sCreadedOn_Str: new Date(),
                sUpdatedOn_Str: new Date(),
            },
            oExpiry: {
                sCreadedOn: 0,
                sUpdatedOn: 0,
                sCreadedOn_Str: this.stopLossOrderForm.value.expiryTime,
                sUpdatedOn_Str: 0,
            }
        };
        this.globalService.addRiskEquity(params).subscribe(data => {
            if (data.Result !== -1) {
                // console.log(data);
                this.getStopLossOrderData(1, this.cat);
                this.resetForm();
                // this.onSuccessMsqDisplay('Equity DD alert added successfully');
                this.notificationService.showSuccess('Equity drawdown alert added successfully', 'Success');
                // this.autoCloseMsqBlock();
                this.isLoading = false;
                // this.isVisibleFormArea = false;
            }
            else {
                // this.onErrorMsqDisplay('Failed to add equity DD');
                this.notificationService.showError('Failed to add equity drawdown alert', 'Error');
                this.isLoading = false;
                // this.autoCloseMsqBlock();
            }
        });
    }
    onSelectDirection(direction) {
        this.direction = direction;
        this.isDirectionSelected = true;
    }
    onDelete(selectedItem) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Are you Sure!',
            text: 'Are you sure to delete this drawdown alert?',
            icon: 'error',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            cancelButtonText: 'Cancel',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
        }).then((result) => {
            if (result.value) {
                const params = {
                    RiskId: selectedItem.RiskId,
                };
                console.log(params);
                this.globalService.deleteRiskEquity(params).subscribe(data => {
                    if (data.Result === true) {
                        this.getStopLossOrderData(1, this.cat);
                        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Deleted!', 'Your drawdown alert has been deleted.', 'success');
                    }
                });
            }
        });
    }
    autoCloseMsqBlock() {
        setTimeout(() => {
            this.successMsqBlock = false;
            this.ErrorMsqBlock = false;
            this.messageToDisplay = '';
        }, 10000);
    }
    onCloseMsqBlock() {
        this.successMsqBlock = false;
        this.ErrorMsqBlock = false;
        this.messageToDisplay = '';
    }
    onSuccessMsqDisplay(msq) {
        this.messageToDisplay = '';
        this.ErrorMsqBlock = false;
        this.successMsqBlock = true;
        this.messageToDisplay = msq;
    }
    onErrorMsqDisplay(msq) {
        this.messageToDisplay = '';
        this.successMsqBlock = false;
        this.ErrorMsqBlock = true;
        this.messageToDisplay = msq;
    }
    ngOnDestroy() {
        this.subscription1.unsubscribe();
        this.subscription2.unsubscribe();
        this.subscription3.unsubscribe();
    }
}
EquityDrawdownComponent.ɵfac = function EquityDrawdownComponent_Factory(t) { return new (t || EquityDrawdownComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_header_service__WEBPACK_IMPORTED_MODULE_4__["HeaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_order_pipe__WEBPACK_IMPORTED_MODULE_6__["OrderPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"])); };
EquityDrawdownComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EquityDrawdownComponent, selectors: [["app-equity-drawdown"]], viewQuery: function EquityDrawdownComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsDatepickerDirective"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stopLossOrderForm = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.datepicker = _t.first);
    } }, hostBindings: function EquityDrawdownComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function EquityDrawdownComponent_scroll_HostBindingHandler() { return ctx.onScrollEvent(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 62, vars: 20, consts: [[1, "right-tabBtn-row", "d-none", "d-sm-block", "d-md-block", "d-lg-block"], [1, "btn", "btn-warning", "btn-sm", "font-weight-400", "text-size-13", 3, "click"], ["name", "dollar-sign", 1, "icon-size-18"], ["class", "stoploss-form-container", 4, "ngIf"], [1, "tab-inner-content", "px-2"], [1, "history-title"], [1, "table-filter-area"], [1, "row", "no-gutters"], [1, "col-md-4", "form-inline", "d-none", "d-md-block"], [1, "form-group", "mb-2"], ["for", "entries ", 1, "main-txt-color", "mr-1"], ["id", "entries ", 1, "form-control", "main-txt-color", "bd-color", "shadow-none", 3, "change"], ["for", "entries ", 1, "main-txt-color", "ml-1"], [1, "col-md-3", "offset-md-5"], [1, "form-group"], ["type", "text ", "id", "searchText ", "placeholder", "Enter account number to search", 1, "form-control", "main-txt-color", "bd-color", "shadow-none", 3, "ngModel", "ngModelChange"], [1, "table-container", "table-responsive", "table-responsive", "table-responsive-sm", "mb-3"], [1, "table", "table-hover", "main-txt-color", "mb-0"], [1, "table-header-bg", "table-header-color"], [1, "font-weight-500", "bd-color", "text-capitalize", "align-middle", 3, "click"], [1, "font-weight-500", "bd-color", "text-capitalize", "align-middle", "text-center"], ["class", "secondary-txt-color ", 4, "ngIf"], ["class", "text-size-17 font-weight-300 text-center p-4", "style", "background: #eff3f6;", 4, "ngIf"], [1, "table-pagination", "text-right", "border-top-0", "pt-4"], [3, "pageChange"], [1, "stoploss-form-container"], [1, "stoploss-from-box", "bg-b"], [1, "", 3, "ngSubmit"], ["formData", "ngForm"], [1, "row"], [1, "col-md-6"], ["class", "alert alert-success alert-dismissible fade show", "role", "alert", 4, "ngIf"], ["class", "alert alert-danger alert-dismissible fade show", "role", "alert", 4, "ngIf"], [1, "col-md-5"], [1, "form-box", "pt-2"], [1, "col-md-12"], ["for", "accountnumber", 1, "main-txt-color"], [1, "asterick"], ["required", "", "ngModel", "", "name", "accountnumber", "id", "accountnumber", 1, "form-control", "shadow-none"], ["accountnumber", "ngModel"], ["value", "", 1, "text-size-13", 3, "disabled"], ["class", "text-size-13", "name", "accounts", 3, "ngValue", 4, "ngFor", "ngForOf"], ["class", "help-block text-danger ", 4, "ngIf"], [1, "col-md-7"], ["for", "targetLimit", 1, "main-txt-color"], [1, "input-group", "target-limit"], ["required", "", "ngModel", "", "min", "1", "name", "targetLimit", "id", "targetLimit", "type", "number", "placeholder", "0", 1, "form-control", "shadow-none", "rounded-right-0"], ["targetLimit", "ngModel"], ["id", "button-addon4", 1, "input-group-append"], ["required", "", "name", "limitType", "id", "limitType", 1, "form-control", "shadow-none", "limit-type", "rounded-left-0", 2, "width", "60px", "height", "34px", 3, "ngModel", "ngModelChange"], ["limitType", "ngModel"], ["value", "0", "selected", ""], ["value", "1"], [1, "direction-btn", "text-right"], ["for", "selectAccount", 1, "main-txt-color"], ["role", "group", 1, "btn-group"], ["type", "button", 1, "btn", "shadow-none", 3, "ngClass", "click"], ["name", "chevrons-up", 1, "icon-size-20"], ["name", "chevrons-down", 1, "icon-size-20"], [1, "form-group", "expirydate-area", "mt-3"], ["autocomplete", "off", "required", "", "ngModel", "", "type", "text", "id", "expiryTime", "name", "expiryTime", "placeholder", "Select Expiry Date", "bsDatepicker", "", 1, "form-control", "shadow-none", "rounded-right-0", 3, "isOpen", "minDate", "maxDate", "bsConfig"], ["expiryTime", "ngModel", "dp", "bsDatepicker"], [1, "datePickerIcon", 3, "click"], ["name", "calendar", 1, "icon-size-20"], [1, "mt-3"], [1, "text-right"], [1, "btn", "btn-primary", "btn-sm", "px-4", "position-relative", 3, "disabled"], [1, "col-md-4"], [1, "action-area", "rounded"], [1, "title-area", "border-bottom", "bd-color"], [1, "title"], [1, "body-area"], ["class", "custom-control custom-radio", 4, "ngFor", "ngForOf"], [1, "col-md-3"], [1, "notification-area", "rounded"], [1, "custom-control", "custom-switch"], ["value", "false", "type", "checkbox", "name", "disableTrade", "id", "customSwitch1", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], ["disableTrade", "ngModel"], ["for", "customSwitch1", 1, "custom-control-label"], ["value", "false", "type", "checkbox", "name", "pushEmail", "id", "customSwitch2", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], ["pushEmail", "ngModel"], ["for", "customSwitch2", 1, "custom-control-label"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show"], ["type", "button", "data-dismiss", "alert", 1, "close"], ["name", "x", 1, "close-btn", 3, "click"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show"], ["name", "accounts", 1, "text-size-13", 3, "ngValue"], [1, "help-block", "text-danger"], [1, "custom-control", "custom-radio"], ["required", "", "ngModel", "", "type", "radio", "name", "actionOnPosition", 1, "custom-control-input", 3, "id", "value"], ["actionOnPosition", "ngModel"], ["class", "custom-control-label", 3, "for", 4, "ngIf"], [1, "custom-control-label", 3, "for"], [1, "secondary-txt-color"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["colspan", "9", 1, "text-center"], [1, "text-size-17", "font-weight-300"], [1, "bd-color", "text-capitalize", "font-weight-400"], [1, "bd-color", "text-capitalize", "font-weight-400", "text-center"], ["tooltip", "Delete Action", "name", "trash-2", 1, "icon-size-17", "primary-icons-color", "cursor-pointer", 2, "color", "red", 3, "click"], ["name", "percent", 1, "icon-size-17", "primary-icons-color", "cursor-pointer", 2, "color", "goldenrod"], ["name", "dollar-sign", 1, "icon-size-17", "primary-icons-color", "cursor-pointer", 2, "color", "goldenrod"], ["name", "trending-up", 1, "icon-size-17", "primary-icons-color", "cursor-pointer", 2, "color", "green"], ["name", "trending-down", 1, "icon-size-17", "primary-icons-color", "cursor-pointer", 2, "color", "red"], [1, "text-size-17", "font-weight-300", "text-center", "p-4", 2, "background", "#eff3f6"]], template: function EquityDrawdownComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EquityDrawdownComponent_Template_button_click_1_listener() { return ctx.toggleFormArea(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i-feather", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Create New Drawdown ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EquityDrawdownComponent_div_4_Template, 102, 19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Alert List ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Show ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EquityDrawdownComponent_Template_select_change_14_listener($event) { return ctx.getStopLossOrderData($event.target.value, true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "15");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "25");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "30");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "50");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Entries");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EquityDrawdownComponent_Template_input_ngModelChange_35_listener($event) { return ctx.searchText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "table", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "thead", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EquityDrawdownComponent_Template_th_click_40_listener() { return ctx.setOrder("sCreadedOn_Str"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Expiry Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EquityDrawdownComponent_Template_th_click_42_listener() { return ctx.setOrder("Account"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EquityDrawdownComponent_Template_th_click_44_listener() { return ctx.setOrder("Value"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EquityDrawdownComponent_Template_th_click_46_listener() { return ctx.setOrder("oPerc_Value"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EquityDrawdownComponent_Template_th_click_48_listener() { return ctx.setOrder("oAction"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EquityDrawdownComponent_Template_th_click_50_listener() { return ctx.setOrder("oAlert_Disable_Trade"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Enable/Disable Trade");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EquityDrawdownComponent_Template_th_click_52_listener() { return ctx.setOrder("oAlert_Mail"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Alert Mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EquityDrawdownComponent_Template_th_click_54_listener() { return ctx.setOrder("oUP_DOWN"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "UP/Down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, EquityDrawdownComponent_tbody_58_Template, 6, 16, "tbody", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, EquityDrawdownComponent_div_59_Template, 2, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "pagination-controls", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function EquityDrawdownComponent_Template_pagination_controls_pageChange_61_listener($event) { return ctx.getStopLossOrderData($event, false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isVisibleFormArea);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.order === "sCreadedOn_Str");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.order === "Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.order === "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.order === "oPerc_Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.order === "oAction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.order === "oAlert_Disable_Trade");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.order === "oAlert_Mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.order === "oUP_DOWN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.IsDataNotFound);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.IsDataNotFound);
    } }, directives: [angular_feather__WEBPACK_IMPORTED_MODULE_8__["ɵa"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["PaginationControlsComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__["BsDatepickerInputDirective"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__["BsDatepickerDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["TooltipDirective"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["PaginatePipe"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_12__["Ng2SearchPipe"], ngx_order_pipe__WEBPACK_IMPORTED_MODULE_6__["OrderPipe"]], styles: [".stoploss-form-container[_ngcontent-%COMP%] {\n  padding: 5px 6px;\n}\n.stoploss-form-container[_ngcontent-%COMP%]   .stoploss-from-box[_ngcontent-%COMP%] {\n  padding: 15px 15px;\n  border-radius: 4px;\n  -webkit-transition: all 5s ease-out;\n  transition: all 5s ease-out;\n}\n.stoploss-form-container[_ngcontent-%COMP%]   .stoploss-from-box[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  line-height: 20px;\n  margin-bottom: 15px;\n}\n.stoploss-form-container[_ngcontent-%COMP%]   .stoploss-from-box[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 400;\n}\n.stoploss-form-container[_ngcontent-%COMP%]   .stoploss-from-box[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.stoploss-form-container[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  position: relative;\n  top: -3px;\n}\n.history-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding: 5px 0;\n  font-weight: 400;\n}\n.right-tabBtn-row[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 20px;\n  top: 6px;\n}\n.table-filter-area[_ngcontent-%COMP%] {\n  position: relative;\n  background: #eff3f6;\n  padding: 15px;\n  border-bottom: 0px;\n  border-radius: 4px 4px 0 0;\n  padding-bottom: 0px;\n  top: 6px;\n}\ntbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(even) {\n  background: #f8f9fa;\n}\ntbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(odd) {\n  background: #eff3f6;\n}\n.table-pagination[_ngcontent-%COMP%] {\n  background: #eff3f6;\n  padding: 15px;\n  position: relative;\n  top: -2px;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.45em 0.8em;\n  font-size: 75%;\n  font-weight: 500;\n}\ntable[_ngcontent-%COMP%] {\n  border-collapse: separate;\n  border-spacing: 0 6px;\n}\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-bottom: 0px solid #dee2e6;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-top: 0px solid #dee2e6;\n}\n.ngx-pagination[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-bottom: 0;\n}\n.direction-btn[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  font-size: 13px;\n  padding: 6px 10px;\n  min-width: 85px;\n  font-weight: 500;\n}\n.target-limit[_ngcontent-%COMP%]   .limit-type[_ngcontent-%COMP%] {\n  border-top-left-radius: 0px;\n  border-bottom-left-radius: 0px;\n}\n.expirydate-area[_ngcontent-%COMP%] {\n  position: relative;\n}\n.expirydate-area[_ngcontent-%COMP%]   .datePickerIcon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 8px;\n  bottom: 7px;\n  color: #5cb85c;\n  cursor: pointer;\n}\n.action-area[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n.action-area[_ngcontent-%COMP%]   .title-area[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  padding: 0 0 15px 0;\n}\n.action-area[_ngcontent-%COMP%]   .title-area[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  font-size: 16px;\n  font-weight: 400;\n}\n.action-area[_ngcontent-%COMP%]   .title-area[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.action-area[_ngcontent-%COMP%]   .body-area[_ngcontent-%COMP%] {\n  padding: 10px;\n  padding-bottom: 0;\n}\n.notification-area[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n.notification-area[_ngcontent-%COMP%]   .title-area[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  padding: 0 0 15px 0;\n}\n.notification-area[_ngcontent-%COMP%]   .title-area[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  font-size: 16px;\n  font-weight: 400;\n}\n.notification-area[_ngcontent-%COMP%]   .title-area[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.notification-area[_ngcontent-%COMP%]   .body-area[_ngcontent-%COMP%] {\n  padding: 10px;\n  padding-bottom: 0;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-top: 8px !important;\n  padding-bottom: 8px !important;\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2xpZW50LWNvcmUvcmlzay1tYW5hZ2VyL3Jpc2stbWFuYWdlci1jb3JlL2VxdWl0eS1kcmF3ZG93bi9GOlxcbmV3dHJhZGVyXFx0cmFkZXI0LTUvc3JjXFxhcHBcXHBhZ2VzXFxjbGllbnQtY29yZVxccmlzay1tYW5hZ2VyXFxyaXNrLW1hbmFnZXItY29yZVxcZXF1aXR5LWRyYXdkb3duXFxlcXVpdHktZHJhd2Rvd24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NsaWVudC1jb3JlL3Jpc2stbWFuYWdlci9yaXNrLW1hbmFnZXItY29yZS9lcXVpdHktZHJhd2Rvd24vZXF1aXR5LWRyYXdkb3duLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSjtBREFJO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUVBLG1DQUFBO0VBQUEsMkJBQUE7QUNDUjtBREFRO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtBQ0VaO0FERFk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNHaEI7QUREWTtFQUNJLGVBQUE7QUNHaEI7QURDSTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtBQ0NSO0FER0E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDQUo7QURHQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7QUNBSjtBREdBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFFQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FDREo7QURJQTtFQUNJLG1CQUFBO0FDREo7QURJQTtFQUNJLG1CQUFBO0FDREo7QURJQTtFQUdJLG1CQUFBO0VBQ0EsYUFBQTtFQUVBLGtCQUFBO0VBQ0EsU0FBQTtBQ0pKO0FEV0E7RUFDSSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDUko7QURXQTtFQUNJLHlCQUFBO0VBQ0EscUJBQUE7QUNSSjtBRFdBO0VBQ0ksZ0NBQUE7QUNSSjtBRFdBOztFQUVJLDZCQUFBO0FDUko7QURXQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQ1JKO0FEWUk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNUUjtBRGNJO0VBQ0ksMkJBQUE7RUFDQSw4QkFBQTtBQ1hSO0FEZUE7RUFDSSxrQkFBQTtBQ1pKO0FEYUk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNYUjtBRGVBO0VBRUksYUFBQTtBQ2JKO0FEY0k7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FDWlI7QURhUTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDWFo7QURhUTtFQUNJLGVBQUE7QUNYWjtBRGNJO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0FDWlI7QURnQkE7RUFFSSxhQUFBO0FDZEo7QURlSTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUNiUjtBRGNRO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNaWjtBRGNRO0VBQ0ksZUFBQTtBQ1paO0FEZUk7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7QUNiUjtBRGlCQTs7RUFFSSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQ2RKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2xpZW50LWNvcmUvcmlzay1tYW5hZ2VyL3Jpc2stbWFuYWdlci1jb3JlL2VxdWl0eS1kcmF3ZG93bi9lcXVpdHktZHJhd2Rvd24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RvcGxvc3MtZm9ybS1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogNXB4IDZweDtcclxuICAgIC5zdG9wbG9zcy1mcm9tLWJveCB7XHJcbiAgICAgICAgcGFkZGluZzogMTVweCAxNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjZGZlMmU0O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCA1cyBlYXNlLW91dDtcclxuICAgICAgICAuaGVhZGluZyB7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzbWFsbCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2xvc2UtYnRuIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdG9wOiAtM3B4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uaGlzdG9yeS10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi5yaWdodC10YWJCdG4tcm93IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgdG9wOiA2cHg7XHJcbn1cclxuXHJcbi50YWJsZS1maWx0ZXItYXJlYSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWZmM2Y2O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgICBib3JkZXItYm90dG9tOiAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICB0b3A6IDZweDtcclxufVxyXG5cclxudGJvZHk+dHI6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgIGJhY2tncm91bmQ6ICNmOGY5ZmFcclxufVxyXG5cclxudGJvZHk+dHI6bnRoLWNoaWxkKG9kZCkge1xyXG4gICAgYmFja2dyb3VuZDogI2VmZjNmNlxyXG59XHJcblxyXG4udGFibGUtcGFnaW5hdGlvbiB7XHJcbiAgICAvLyBwYWRkaW5nOiAwLjc1cmVtO1xyXG4gICAgLy8gcGFkZGluZy10b3A6IDFyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWZmM2Y2O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIC8vIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0ycHg7XHJcbn1cclxuXHJcbi8vIC5idG4tc20sXHJcbi8vIC5idG4tZ3JvdXAtc20+LmJ0biB7XHJcbi8vICAgICBwYWRkaW5nOiAwLjE1cmVtIDAuOHJlbTtcclxuLy8gfVxyXG4uYmFkZ2Uge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMC40NWVtIDAuOGVtO1xyXG4gICAgZm9udC1zaXplOiA3NSU7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDAgNnB4O1xyXG59XHJcblxyXG4udGFibGUgdGhlYWQgdGgge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkICNkZWUyZTY7XHJcbn1cclxuXHJcbi50YWJsZSB0aCxcclxuLnRhYmxlIHRkIHtcclxuICAgIGJvcmRlci10b3A6IDBweCBzb2xpZCAjZGVlMmU2O1xyXG59XHJcblxyXG4ubmd4LXBhZ2luYXRpb24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4uZGlyZWN0aW9uLWJ0biB7XHJcbiAgICAuYnRuIHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgcGFkZGluZzogNnB4IDEwcHg7XHJcbiAgICAgICAgbWluLXdpZHRoOiA4NXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi50YXJnZXQtbGltaXQge1xyXG4gICAgLmxpbWl0LXR5cGUge1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5leHBpcnlkYXRlLWFyZWEge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLmRhdGVQaWNrZXJJY29uIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDhweDtcclxuICAgICAgICBib3R0b206IDdweDtcclxuICAgICAgICBjb2xvcjogIzVjYjg1YztcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hY3Rpb24tYXJlYSB7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiAjRkZGO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIC50aXRsZS1hcmVhIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgcGFkZGluZzogMCAwIDE1cHggMDtcclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc21hbGwge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJvZHktYXJlYSB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIH1cclxufVxyXG5cclxuLm5vdGlmaWNhdGlvbi1hcmVhIHtcclxuICAgIC8vIGJhY2tncm91bmQ6ICNGRkY7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgLnRpdGxlLWFyZWEge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICBwYWRkaW5nOiAwIDAgMTVweCAwO1xyXG4gICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzbWFsbCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYm9keS1hcmVhIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4udGFibGUgdGgsXHJcbi50YWJsZSB0ZCB7XHJcbiAgICBwYWRkaW5nLXRvcDogOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn0iLCIuc3RvcGxvc3MtZm9ybS1jb250YWluZXIge1xuICBwYWRkaW5nOiA1cHggNnB4O1xufVxuLnN0b3Bsb3NzLWZvcm0tY29udGFpbmVyIC5zdG9wbG9zcy1mcm9tLWJveCB7XG4gIHBhZGRpbmc6IDE1cHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgNXMgZWFzZS1vdXQ7XG59XG4uc3RvcGxvc3MtZm9ybS1jb250YWluZXIgLnN0b3Bsb3NzLWZyb20tYm94IC5oZWFkaW5nIHtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uc3RvcGxvc3MtZm9ybS1jb250YWluZXIgLnN0b3Bsb3NzLWZyb20tYm94IC5oZWFkaW5nIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5zdG9wbG9zcy1mb3JtLWNvbnRhaW5lciAuc3RvcGxvc3MtZnJvbS1ib3ggLmhlYWRpbmcgc21hbGwge1xuICBmb250LXNpemU6IDEycHg7XG59XG4uc3RvcGxvc3MtZm9ybS1jb250YWluZXIgLmNsb3NlLWJ0biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtM3B4O1xufVxuXG4uaGlzdG9yeS10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogNXB4IDA7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5yaWdodC10YWJCdG4tcm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbiAgdG9wOiA2cHg7XG59XG5cbi50YWJsZS1maWx0ZXItYXJlYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogI2VmZjNmNjtcbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyLWJvdHRvbTogMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgdG9wOiA2cHg7XG59XG5cbnRib2R5ID4gdHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbn1cblxudGJvZHkgPiB0cjpudGgtY2hpbGQob2RkKSB7XG4gIGJhY2tncm91bmQ6ICNlZmYzZjY7XG59XG5cbi50YWJsZS1wYWdpbmF0aW9uIHtcbiAgYmFja2dyb3VuZDogI2VmZjNmNjtcbiAgcGFkZGluZzogMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0ycHg7XG59XG5cbi5iYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMC40NWVtIDAuOGVtO1xuICBmb250LXNpemU6IDc1JTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuICBib3JkZXItc3BhY2luZzogMCA2cHg7XG59XG5cbi50YWJsZSB0aGVhZCB0aCB7XG4gIGJvcmRlci1ib3R0b206IDBweCBzb2xpZCAjZGVlMmU2O1xufVxuXG4udGFibGUgdGgsXG4udGFibGUgdGQge1xuICBib3JkZXItdG9wOiAwcHggc29saWQgI2RlZTJlNjtcbn1cblxuLm5neC1wYWdpbmF0aW9uIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5kaXJlY3Rpb24tYnRuIC5idG4ge1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmc6IDZweCAxMHB4O1xuICBtaW4td2lkdGg6IDg1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi50YXJnZXQtbGltaXQgLmxpbWl0LXR5cGUge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcbn1cblxuLmV4cGlyeWRhdGUtYXJlYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5leHBpcnlkYXRlLWFyZWEgLmRhdGVQaWNrZXJJY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogOHB4O1xuICBib3R0b206IDdweDtcbiAgY29sb3I6ICM1Y2I4NWM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFjdGlvbi1hcmVhIHtcbiAgcGFkZGluZzogMTVweDtcbn1cbi5hY3Rpb24tYXJlYSAudGl0bGUtYXJlYSB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgcGFkZGluZzogMCAwIDE1cHggMDtcbn1cbi5hY3Rpb24tYXJlYSAudGl0bGUtYXJlYSAudGl0bGUge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5hY3Rpb24tYXJlYSAudGl0bGUtYXJlYSBzbWFsbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5hY3Rpb24tYXJlYSAuYm9keS1hcmVhIHtcbiAgcGFkZGluZzogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbi5ub3RpZmljYXRpb24tYXJlYSB7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG4ubm90aWZpY2F0aW9uLWFyZWEgLnRpdGxlLWFyZWEge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIHBhZGRpbmc6IDAgMCAxNXB4IDA7XG59XG4ubm90aWZpY2F0aW9uLWFyZWEgLnRpdGxlLWFyZWEgLnRpdGxlIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4ubm90aWZpY2F0aW9uLWFyZWEgLnRpdGxlLWFyZWEgc21hbGwge1xuICBmb250LXNpemU6IDEycHg7XG59XG4ubm90aWZpY2F0aW9uLWFyZWEgLmJvZHktYXJlYSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG4udGFibGUgdGgsXG4udGFibGUgdGQge1xuICBwYWRkaW5nLXRvcDogOHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiA4cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxM3B4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EquityDrawdownComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-equity-drawdown',
                templateUrl: './equity-drawdown.component.html',
                styleUrls: ['./equity-drawdown.component.scss']
            }]
    }], function () { return [{ type: _shared_services_header_service__WEBPACK_IMPORTED_MODULE_4__["HeaderService"] }, { type: _shared_services_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"] }, { type: ngx_order_pipe__WEBPACK_IMPORTED_MODULE_6__["OrderPipe"] }, { type: _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] }]; }, { stopLossOrderForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['formData', { static: false }]
        }], datepicker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsDatepickerDirective"], { static: false }]
        }], onScrollEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/client-core/risk-manager/risk-manager-core/profit-loss/profit-loss.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/client-core/risk-manager/risk-manager-core/profit-loss/profit-loss.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ProfitLossComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfitLossComponent", function() { return ProfitLossComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/esm5/ngx-bootstrap.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_services_header_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../../shared/services/header.service */ "./src/app/shared/services/header.service.ts");
/* harmony import */ var _shared_services_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../../shared/services/global.service */ "./src/app/shared/services/global.service.ts");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/__ivy_ngcc__/fesm2015/ngx-order-pipe.js");
/* harmony import */ var _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../../shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-feather */ "./node_modules/angular-feather/__ivy_ngcc__/fesm2015/angular-feather.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");
















const _c0 = ["formData"];
function ProfitLossComponent_div_4_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r516 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Success -: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i-feather", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfitLossComponent_div_4_div_6_Template_i_feather_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r516); const ctx_r515 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r515.onCloseMsqBlock(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r503 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r503.messageToDisplay, " ");
} }
function ProfitLossComponent_div_4_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r518 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Oops... : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i-feather", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfitLossComponent_div_4_div_9_Template_i_feather_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r518); const ctx_r517 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r517.onCloseMsqBlock(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r504 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r504.messageToDisplay, " ");
} }
function ProfitLossComponent_div_4_option_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const acc_r519 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", acc_r519.MT4Account);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](acc_r519.MT4Account);
} }
function ProfitLossComponent_div_4_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please Select An account Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfitLossComponent_div_4_div_83_label_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Close All Position");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const action_r520 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "customRadio", action_r520, "");
} }
function ProfitLossComponent_div_4_div_83_label_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Close All Loss Trades");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const action_r520 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "customRadio", action_r520, "");
} }
function ProfitLossComponent_div_4_div_83_label_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Close All Profit Trades");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const action_r520 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "customRadio", action_r520, "");
} }
function ProfitLossComponent_div_4_div_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 89, 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProfitLossComponent_div_4_div_83_label_3_Template, 2, 1, "label", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProfitLossComponent_div_4_div_83_label_4_Template, 2, 1, "label", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProfitLossComponent_div_4_div_83_label_5_Template, 2, 1, "label", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const action_r520 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "customRadio", action_r520, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", action_r520);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", action_r520 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", action_r520 === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", action_r520 === 2);
} }
const _c1 = function () { return { dateInputFormat: "MM/DD/YYYY " }; };
function ProfitLossComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r529 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 27, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProfitLossComponent_div_4_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r529); const ctx_r528 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r528.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProfitLossComponent_div_4_div_6_Template, 6, 1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProfitLossComponent_div_4_div_9_Template, 6, 1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Account Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "select", 38, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Select Account Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ProfitLossComponent_div_4_option_24_Template, 2, 2, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ProfitLossComponent_div_4_span_25_Template, 2, 0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Target Limit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 46, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "select", 49, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfitLossComponent_div_4_Template_select_ngModelChange_36_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r529); const ctx_r530 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r530.defaultLimitType = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "$");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Equity Direction");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfitLossComponent_div_4_Template_button_click_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r529); const ctx_r531 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r531.onSelectDirection(0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i-feather", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "UP");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfitLossComponent_div_4_Template_button_click_52_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r529); const ctx_r532 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r532.onSelectDirection(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i-feather", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Down");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Expiry Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "input", 60, 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfitLossComponent_div_4_Template_span_click_65_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r529); const ctx_r533 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r533.isOpenDatePicker = !ctx_r533.isOpenDatePicker; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "i-feather", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h5", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Required Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "You need to perform At least one Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, ProfitLossComponent_div_4_div_83_Template, 6, 5, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "h5", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Send Notification");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "You will receive Notification");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "input", 76, 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfitLossComponent_div_4_Template_input_ngModelChange_93_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r529); const ctx_r534 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r534.defaultDisableTrade = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Disable Trade");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "input", 79, 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfitLossComponent_div_4_Template_input_ngModelChange_98_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r529); const ctx_r535 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r535.defaultPushMail = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Push Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r502 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const _r505 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);
    const ctx_r499 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r499.successMsqBlock);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r499.ErrorMsqBlock);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r499.liveAccountData);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r505.valid && _r505.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r499.defaultLimitType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r499.direction === 0 && ctx_r499.isDirectionSelected ? "btn-success" : "btn-outline-success");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r499.direction === 1 && ctx_r499.isDirectionSelected ? "btn-danger" : "btn-outline-danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isOpen", ctx_r499.isOpenDatePicker)("minDate", ctx_r499.minDate)("maxDate", ctx_r499.maxDate)("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r502.valid || ctx_r499.isDirectionSelected === false || ctx_r499.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-spinner", ctx_r499.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r499.actionOnPosition);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r499.defaultDisableTrade);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r499.defaultPushMail);
} }
function ProfitLossComponent_tbody_58_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading ...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfitLossComponent_tbody_58_tr_2_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i-feather", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfitLossComponent_tbody_58_tr_2_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i-feather", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfitLossComponent_tbody_58_tr_2_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Close All Position");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfitLossComponent_tbody_58_tr_2_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Close All Loss Trades");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfitLossComponent_tbody_58_tr_2_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Close All Profit Trades");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfitLossComponent_tbody_58_tr_2_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Disable");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfitLossComponent_tbody_58_tr_2_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enable");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfitLossComponent_tbody_58_tr_2_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfitLossComponent_tbody_58_tr_2_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfitLossComponent_tbody_58_tr_2_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i-feather", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " UP");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfitLossComponent_tbody_58_tr_2_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i-feather", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Down");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfitLossComponent_tbody_58_tr_2_Template(rf, ctx) { if (rf & 1) {
    const _r552 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProfitLossComponent_tbody_58_tr_2_span_8_Template, 2, 0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProfitLossComponent_tbody_58_tr_2_span_9_Template, 2, 0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ProfitLossComponent_tbody_58_tr_2_span_11_Template, 2, 0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProfitLossComponent_tbody_58_tr_2_span_12_Template, 2, 0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ProfitLossComponent_tbody_58_tr_2_span_13_Template, 2, 0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ProfitLossComponent_tbody_58_tr_2_span_15_Template, 2, 0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ProfitLossComponent_tbody_58_tr_2_span_16_Template, 2, 0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ProfitLossComponent_tbody_58_tr_2_span_18_Template, 2, 0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ProfitLossComponent_tbody_58_tr_2_span_19_Template, 2, 0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ProfitLossComponent_tbody_58_tr_2_span_21_Template, 3, 0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ProfitLossComponent_tbody_58_tr_2_span_22_Template, 3, 0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "i-feather", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfitLossComponent_tbody_58_tr_2_Template_i_feather_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r552); const item_r538 = ctx.$implicit; const ctx_r551 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r551.onDelete(item_r538); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r538 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r538.oExpiry.sCreadedOn_Str);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r538.Account);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r538.Value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r538.oPerc_Value === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r538.oPerc_Value === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r538.oAction === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r538.oAction === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r538.oAction === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r538.oAlert_Disable_Trade === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r538.oAlert_Disable_Trade === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r538.oAlert_Mail === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r538.oAlert_Mail === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r538.oUP_DOWN === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r538.oUP_DOWN === 1);
} }
const _c2 = function (a0, a1, a2) { return { itemsPerPage: a0, currentPage: a1, totalItems: a2 }; };
function ProfitLossComponent_tbody_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfitLossComponent_tbody_58_tr_1_Template, 4, 0, "tr", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfitLossComponent_tbody_58_tr_2_Template, 26, 14, "tr", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "orderBy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r500 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r500.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](5, 8, ctx_r500.stopLossOrderData, ctx_r500.order, ctx_r500.reverse), ctx_r500.searchText), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](12, _c2, ctx_r500.pageSize, ctx_r500.p, ctx_r500.TotalCount)));
} }
function ProfitLossComponent_div_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Data Not Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ProfitLossComponent {
    constructor(headerService, globalService, orderPipe, notificationService) {
        this.headerService = headerService;
        this.globalService = globalService;
        this.orderPipe = orderPipe;
        this.notificationService = notificationService;
        this.isVisibleFormArea = false;
        this.actionOnPosition = [0, 1, 2];
        this.isLoading = false;
        this.liveAccountData = [];
        this.stopLossOrderData = [];
        this.isDirectionSelected = false;
        this.defaultPushMail = false;
        this.defaultDisableTrade = false;
        this.defaultLimitType = 0;
        this.IsDataNotFound = false;
        this.ErrorMsqBlock = false;
        this.successMsqBlock = false;
        // pagination Setting
        this.TotalCount = 0;
        this.pageSize = 5; // Table Rows Perpage property
        this.order = ''; // Order property to sort coloum of table
        this.reverse = true; // Reverse property is used to sort table coloum
        this.isOpenDatePicker = false;
        this.currentDate = new Date();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            dateYMD: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](new Date()),
            dateFull: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](new Date()),
            dateMDY: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](new Date()),
            dateRange: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]([
                new Date(),
                new Date(this.currentDate.setDate(this.currentDate.getDate() + 7))
            ])
        });
        this.minDate = new Date();
        this.maxDate = new Date();
        this.minDate.setDate(this.minDate.getDate() - 0);
        this.maxDate.setDate(this.maxDate.getDate() + 2);
        this.subscription1 = this.headerService.castLoggedUserDetail.subscribe(resData => (this.LoggedParams = resData));
    }
    toggleFormArea() {
        this.isVisibleFormArea = !this.isVisibleFormArea;
    }
    onScrollEvent() {
        this.datepicker.hide();
    }
    setOrder(value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
    }
    ngOnInit() {
        this.getProfileAccounts();
        this.getStopLossOrderData(1, this.cat);
    }
    getStopLossOrderData(indexval, countVal) {
        this.isLoading = true;
        if (countVal) {
            this.pageSize = indexval;
            this.p = 1;
            this.setParams = {
                Profile: this.LoggedParams.sProfile.sMasterId,
                Index: this.p,
                Count: this.pageSize
            };
        }
        else {
            this.p = indexval;
            this.setParams = {
                Profile: this.LoggedParams.sProfile.sMasterId,
                Index: (this.p - 1) * this.pageSize + 1,
                Count: this.p * this.pageSize
            };
        }
        console.log(this.LoggedParams.sProfile.sMasterId);
        this.subscription3 = this.globalService.getRiskPL(this.setParams).subscribe(data => {
            if (data.Count > 0) {
                this.TotalCount = data.Count;
                this.stopLossOrderData = data.lstEquityDD;
                this.isLoading = false;
                this.IsDataNotFound = false;
            }
            else {
                this.IsDataNotFound = true;
                this.isLoading = false;
            }
        });
    }
    getProfileAccounts() {
        const params = {
            ProfileId: this.LoggedParams.sProfile.sMasterId,
            LoginId: this.LoggedParams.sProfile.sMasterId
        };
        this.subscription2 = this.globalService.GET_PROFILE_ACCOUNTS(params).subscribe(data => {
            this.liveAccountData = data.lstAccount.map(acc => {
                if (acc) {
                    return Object.assign(acc.sUserInfo, acc.sAccountPlan);
                }
            });
        });
    }
    resetForm() {
        this.stopLossOrderForm.reset();
        this.isDirectionSelected = false;
        // this.stopLossOrderForm.value.limitType = 0;
        // this.stopLossOrderForm.form.value.limitType = 0;
        // this.defaultLimitType = 0;
    }
    onSubmit() {
        // alert(this.stopLossOrderForm.value.expiryTime);
        this.isLoading = true;
        const params = {
            RiskId: 0,
            Profile: this.LoggedParams.sProfile.sMasterId.toString(),
            Account: this.stopLossOrderForm.value.accountnumber.toString(),
            Value: this.stopLossOrderForm.value.targetLimit.toString(),
            sValue: 0,
            oPerc_Value: this.stopLossOrderForm.value.limitType,
            oUP_DOWN: this.direction,
            oAction: this.stopLossOrderForm.value.actionOnPosition,
            oAlert_Mail: (this.stopLossOrderForm.value.pushEmail === false) ? 0 : 1,
            oAlert_Disable_Trade: (this.stopLossOrderForm.value.disableTrade === false) ? 0 : 1,
            oTimestamp: {
                sCreadedOn: 0,
                sUpdatedOn: 0,
                sCreadedOn_Str: new Date(),
                sUpdatedOn_Str: new Date(),
            },
            oExpiry: {
                sCreadedOn: 0,
                sUpdatedOn: 0,
                sCreadedOn_Str: this.stopLossOrderForm.value.expiryTime,
                sUpdatedOn_Str: 0,
            }
        };
        this.globalService.addRiskPL(params).subscribe(data => {
            if (data.Result !== -1) {
                // console.log(data);
                this.getStopLossOrderData(1, this.cat);
                this.resetForm();
                // this.onSuccessMsqDisplay('Profit loss DD alert added successfully');
                this.notificationService.showSuccess('Profit loss drawdown alert added successfully', 'Success');
                // this.autoCloseMsqBlock();
                this.isLoading = false;
                // this.isVisibleFormArea = false;
            }
            else {
                // this.onErrorMsqDisplay('Failed to add Profit loss DD');
                this.notificationService.showError('Failed to add Profit loss drawdown alert', 'Error');
                this.isLoading = false;
                // this.autoCloseMsqBlock();
            }
        });
    }
    onSelectDirection(direction) {
        this.direction = direction;
        this.isDirectionSelected = true;
    }
    onDelete(selectedItem) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Are you Sure!',
            text: 'Are you sure to delete this drawdown alert?',
            icon: 'error',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            cancelButtonText: 'Cancel',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
        }).then((result) => {
            if (result.value) {
                const params = {
                    RiskId: selectedItem.RiskId,
                };
                console.log(params);
                this.globalService.deleteRiskPL(params).subscribe(data => {
                    if (data.Result === true) {
                        this.getStopLossOrderData(1, this.cat);
                        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Deleted!', 'Your drawdown alert has been deleted.', 'success');
                    }
                });
            }
        });
    }
    autoCloseMsqBlock() {
        setTimeout(() => {
            this.successMsqBlock = false;
            this.ErrorMsqBlock = false;
            this.messageToDisplay = '';
        }, 10000);
    }
    onCloseMsqBlock() {
        this.successMsqBlock = false;
        this.ErrorMsqBlock = false;
        this.messageToDisplay = '';
    }
    onSuccessMsqDisplay(msq) {
        this.messageToDisplay = '';
        this.ErrorMsqBlock = false;
        this.successMsqBlock = true;
        this.messageToDisplay = msq;
    }
    onErrorMsqDisplay(msq) {
        this.messageToDisplay = '';
        this.successMsqBlock = false;
        this.ErrorMsqBlock = true;
        this.messageToDisplay = msq;
    }
    ngOnDestroy() {
        this.subscription1.unsubscribe();
        this.subscription2.unsubscribe();
        this.subscription3.unsubscribe();
    }
}
ProfitLossComponent.ɵfac = function ProfitLossComponent_Factory(t) { return new (t || ProfitLossComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_header_service__WEBPACK_IMPORTED_MODULE_4__["HeaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_order_pipe__WEBPACK_IMPORTED_MODULE_6__["OrderPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"])); };
ProfitLossComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfitLossComponent, selectors: [["app-profit-loss"]], viewQuery: function ProfitLossComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsDatepickerDirective"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stopLossOrderForm = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.datepicker = _t.first);
    } }, hostBindings: function ProfitLossComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function ProfitLossComponent_scroll_HostBindingHandler() { return ctx.onScrollEvent(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 62, vars: 20, consts: [[1, "right-tabBtn-row", "d-none", "d-sm-block", "d-md-block", "d-lg-block"], [1, "btn", "btn-warning", "btn-sm", "font-weight-400", "text-size-13", 3, "click"], ["name", "dollar-sign", 1, "icon-size-18"], ["class", "stoploss-form-container", 4, "ngIf"], [1, "tab-inner-content", "px-2"], [1, "history-title"], [1, "table-filter-area"], [1, "row", "no-gutters"], [1, "col-md-4", "form-inline", "d-none", "d-md-block"], [1, "form-group", "mb-2"], ["for", "entries ", 1, "main-txt-color", "mr-1"], ["id", "entries ", 1, "form-control", "main-txt-color", "bd-color", "shadow-none", 3, "change"], ["for", "entries ", 1, "main-txt-color", "ml-1"], [1, "col-md-3", "offset-md-5"], [1, "form-group"], ["type", "text ", "id", "searchText ", "placeholder", "Enter account number to search ", 1, "form-control", "main-txt-color", "bd-color", "shadow-none", 3, "ngModel", "ngModelChange"], [1, "table-container", "table-responsive", "table-responsive", "table-responsive-sm", "mb-3"], [1, "table", "table-hover", "main-txt-color", "mb-0"], [1, "table-header-bg", "table-header-color"], [1, "font-weight-500", "bd-color", "text-capitalize", "align-middle", 3, "click"], [1, "font-weight-500", "bd-color", "text-capitalize", "align-middle", "text-center"], ["class", "secondary-txt-color ", 4, "ngIf"], ["class", "text-size-17 font-weight-300 text-center p-4", "style", "background: #eff3f6;", 4, "ngIf"], [1, "table-pagination", "text-right", "border-top-0", "pt-4"], [3, "pageChange"], [1, "stoploss-form-container"], [1, "stoploss-from-box", "bg-b"], [1, "", 3, "ngSubmit"], ["formData", "ngForm"], [1, "row"], [1, "col-md-6"], ["class", "alert alert-success alert-dismissible fade show", "role", "alert", 4, "ngIf"], ["class", "alert alert-danger alert-dismissible fade show", "role", "alert", 4, "ngIf"], [1, "col-md-5"], [1, "form-box", "pt-2"], [1, "col-md-12"], ["for", "accountnumber", 1, "main-txt-color"], [1, "asterick"], ["required", "", "ngModel", "", "name", "accountnumber", "id", "accountnumber", 1, "form-control", "shadow-none"], ["accountnumber", "ngModel"], ["value", "", 1, "text-size-13", 3, "disabled"], ["class", "text-size-13", "name", "accounts", 3, "ngValue", 4, "ngFor", "ngForOf"], ["class", "help-block text-danger ", 4, "ngIf"], [1, "col-md-7"], ["for", "targetLimit", 1, "main-txt-color"], [1, "input-group", "target-limit"], ["required", "", "ngModel", "", "min", "1", "name", "targetLimit", "id", "targetLimit", "type", "number", "placeholder", "0", 1, "form-control", "shadow-none", "rounded-right-0"], ["targetLimit", "ngModel"], ["id", "button-addon4", 1, "input-group-append"], ["required", "", "name", "limitType", "id", "limitType", 1, "form-control", "shadow-none", "limit-type", "rounded-left-0", 2, "width", "60px", "height", "34px", 3, "ngModel", "ngModelChange"], ["limitType", "ngModel"], ["value", "0", "selected", ""], ["value", "1"], [1, "direction-btn", "text-right"], ["for", "selectAccount", 1, "main-txt-color"], ["role", "group", 1, "btn-group"], ["type", "button", 1, "btn", "shadow-none", 3, "ngClass", "click"], ["name", "chevrons-up", 1, "icon-size-20"], ["name", "chevrons-down", 1, "icon-size-20"], [1, "form-group", "expirydate-area", "mt-3"], ["autocomplete", "off", "required", "", "ngModel", "", "type", "text", "id", "expiryTime", "name", "expiryTime", "placeholder", "Select Expiry Date", "bsDatepicker", "", 1, "form-control", "shadow-none", "rounded-right-0", 3, "isOpen", "minDate", "maxDate", "bsConfig"], ["expiryTime", "ngModel", "dp", "bsDatepicker"], [1, "datePickerIcon", 3, "click"], ["name", "calendar", 1, "icon-size-20"], [1, "mt-3"], [1, "text-right"], [1, "btn", "btn-primary", "btn-sm", "px-4", "position-relative", 3, "disabled"], [1, "col-md-4"], [1, "action-area", "rounded"], [1, "title-area", "border-bottom", "bd-color"], [1, "title"], [1, "body-area"], ["class", "custom-control custom-radio", 4, "ngFor", "ngForOf"], [1, "col-md-3"], [1, "notification-area", "rounded"], [1, "custom-control", "custom-switch"], ["value", "false", "type", "checkbox", "name", "disableTrade", "id", "customSwitch1", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], ["disableTrade", "ngModel"], ["for", "customSwitch1", 1, "custom-control-label"], ["value", "false", "type", "checkbox", "name", "pushEmail", "id", "customSwitch2", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], ["pushEmail", "ngModel"], ["for", "customSwitch2", 1, "custom-control-label"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show"], ["type", "button", "data-dismiss", "alert", 1, "close"], ["name", "x", 1, "close-btn", 3, "click"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show"], ["name", "accounts", 1, "text-size-13", 3, "ngValue"], [1, "help-block", "text-danger"], [1, "custom-control", "custom-radio"], ["required", "", "ngModel", "", "type", "radio", "name", "actionOnPosition", 1, "custom-control-input", 3, "id", "value"], ["actionOnPosition", "ngModel"], ["class", "custom-control-label", 3, "for", 4, "ngIf"], [1, "custom-control-label", 3, "for"], [1, "secondary-txt-color"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["colspan", "9", 1, "text-center"], [1, "text-size-17", "font-weight-300"], [1, "bd-color", "text-capitalize", "font-weight-400"], [1, "bd-color", "text-capitalize", "font-weight-400", "text-center"], ["tooltip", "Delete Action", "name", "trash-2", 1, "icon-size-17", "primary-icons-color", "cursor-pointer", 2, "color", "red", 3, "click"], ["name", "percent", 1, "icon-size-17", "primary-icons-color", "cursor-pointer", 2, "color", "goldenrod"], ["name", "dollar-sign", 1, "icon-size-17", "primary-icons-color", "cursor-pointer", 2, "color", "goldenrod"], ["name", "trending-up", 1, "icon-size-17", "primary-icons-color", "cursor-pointer", 2, "color", "green"], ["name", "trending-down", 1, "icon-size-17", "primary-icons-color", "cursor-pointer", 2, "color", "red"], [1, "text-size-17", "font-weight-300", "text-center", "p-4", 2, "background", "#eff3f6"]], template: function ProfitLossComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfitLossComponent_Template_button_click_1_listener() { return ctx.toggleFormArea(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i-feather", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Create New Drawdown ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProfitLossComponent_div_4_Template, 102, 19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Alert List ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Show ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ProfitLossComponent_Template_select_change_14_listener($event) { return ctx.getStopLossOrderData($event.target.value, true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "15");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "25");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "30");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "50");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Entries");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfitLossComponent_Template_input_ngModelChange_35_listener($event) { return ctx.searchText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "table", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "thead", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfitLossComponent_Template_th_click_40_listener() { return ctx.setOrder("sCreadedOn_Str"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Expiry Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfitLossComponent_Template_th_click_42_listener() { return ctx.setOrder("Account"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfitLossComponent_Template_th_click_44_listener() { return ctx.setOrder("Value"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfitLossComponent_Template_th_click_46_listener() { return ctx.setOrder("oPerc_Value"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfitLossComponent_Template_th_click_48_listener() { return ctx.setOrder("oAction"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Action To Perform");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfitLossComponent_Template_th_click_50_listener() { return ctx.setOrder("oAlert_Disable_Trade"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Enable/Disable Trade");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfitLossComponent_Template_th_click_52_listener() { return ctx.setOrder("oAlert_Mail"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Alert Mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfitLossComponent_Template_th_click_54_listener() { return ctx.setOrder("oUP_DOWN"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "UP/Down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, ProfitLossComponent_tbody_58_Template, 6, 16, "tbody", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, ProfitLossComponent_div_59_Template, 2, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "pagination-controls", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function ProfitLossComponent_Template_pagination_controls_pageChange_61_listener($event) { return ctx.getStopLossOrderData($event, false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isVisibleFormArea);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.order === "sCreadedOn_Str");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.order === "Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.order === "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.order === "oPerc_Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.order === "oAction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.order === "oAlert_Disable_Trade");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.order === "oAlert_Mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.order === "oUP_DOWN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.IsDataNotFound);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.IsDataNotFound);
    } }, directives: [angular_feather__WEBPACK_IMPORTED_MODULE_8__["ɵa"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["PaginationControlsComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__["BsDatepickerInputDirective"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__["BsDatepickerDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["TooltipDirective"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["PaginatePipe"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_12__["Ng2SearchPipe"], ngx_order_pipe__WEBPACK_IMPORTED_MODULE_6__["OrderPipe"]], styles: [".stoploss-form-container[_ngcontent-%COMP%] {\n  padding: 5px 6px;\n}\n.stoploss-form-container[_ngcontent-%COMP%]   .stoploss-from-box[_ngcontent-%COMP%] {\n  padding: 15px 15px;\n  border-radius: 4px;\n  -webkit-transition: all 5s ease-out;\n  transition: all 5s ease-out;\n}\n.stoploss-form-container[_ngcontent-%COMP%]   .stoploss-from-box[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  line-height: 20px;\n  margin-bottom: 15px;\n}\n.stoploss-form-container[_ngcontent-%COMP%]   .stoploss-from-box[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 400;\n}\n.stoploss-form-container[_ngcontent-%COMP%]   .stoploss-from-box[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.stoploss-form-container[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  position: relative;\n  top: -3px;\n}\n.history-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding: 5px 0;\n  font-weight: 400;\n}\n.right-tabBtn-row[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 20px;\n  top: 6px;\n}\n.table-filter-area[_ngcontent-%COMP%] {\n  position: relative;\n  background: #eff3f6;\n  padding: 15px;\n  border-bottom: 0px;\n  border-radius: 4px 4px 0 0;\n  padding-bottom: 0px;\n  top: 6px;\n}\ntbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(even) {\n  background: #f8f9fa;\n}\ntbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(odd) {\n  background: #eff3f6;\n}\n.table-pagination[_ngcontent-%COMP%] {\n  background: #eff3f6;\n  padding: 15px;\n  position: relative;\n  top: -2px;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.45em 0.8em;\n  font-size: 75%;\n  font-weight: 500;\n}\ntable[_ngcontent-%COMP%] {\n  border-collapse: separate;\n  border-spacing: 0 6px;\n}\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-bottom: 0px solid #dee2e6;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-top: 0px solid #dee2e6;\n}\n.ngx-pagination[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-bottom: 0;\n}\n.direction-btn[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  font-size: 13px;\n  padding: 6px 10px;\n  min-width: 85px;\n  font-weight: 500;\n}\n.target-limit[_ngcontent-%COMP%]   .limit-type[_ngcontent-%COMP%] {\n  border-top-left-radius: 0px;\n  border-bottom-left-radius: 0px;\n}\n.expirydate-area[_ngcontent-%COMP%] {\n  position: relative;\n}\n.expirydate-area[_ngcontent-%COMP%]   .datePickerIcon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 8px;\n  bottom: 7px;\n  color: #5cb85c;\n  cursor: pointer;\n}\n.action-area[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n.action-area[_ngcontent-%COMP%]   .title-area[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  padding: 0 0 15px 0;\n}\n.action-area[_ngcontent-%COMP%]   .title-area[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  font-size: 16px;\n  font-weight: 400;\n}\n.action-area[_ngcontent-%COMP%]   .title-area[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.action-area[_ngcontent-%COMP%]   .body-area[_ngcontent-%COMP%] {\n  padding: 10px;\n  padding-bottom: 0;\n}\n.notification-area[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n.notification-area[_ngcontent-%COMP%]   .title-area[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  padding: 0 0 15px 0;\n}\n.notification-area[_ngcontent-%COMP%]   .title-area[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  font-size: 16px;\n  font-weight: 400;\n}\n.notification-area[_ngcontent-%COMP%]   .title-area[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.notification-area[_ngcontent-%COMP%]   .body-area[_ngcontent-%COMP%] {\n  padding: 10px;\n  padding-bottom: 0;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-top: 8px !important;\n  padding-bottom: 8px !important;\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2xpZW50LWNvcmUvcmlzay1tYW5hZ2VyL3Jpc2stbWFuYWdlci1jb3JlL3Byb2ZpdC1sb3NzL0Y6XFxuZXd0cmFkZXJcXHRyYWRlcjQtNS9zcmNcXGFwcFxccGFnZXNcXGNsaWVudC1jb3JlXFxyaXNrLW1hbmFnZXJcXHJpc2stbWFuYWdlci1jb3JlXFxwcm9maXQtbG9zc1xccHJvZml0LWxvc3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NsaWVudC1jb3JlL3Jpc2stbWFuYWdlci9yaXNrLW1hbmFnZXItY29yZS9wcm9maXQtbG9zcy9wcm9maXQtbG9zcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0o7QURBSTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFFQSxtQ0FBQTtFQUFBLDJCQUFBO0FDQ1I7QURBUTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7QUNFWjtBRERZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDR2hCO0FERFk7RUFDSSxlQUFBO0FDR2hCO0FEQ0k7RUFDSSxrQkFBQTtFQUNBLFNBQUE7QUNDUjtBREdBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0FKO0FER0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0FDQUo7QURHQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBRUEsa0JBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQ0RKO0FESUE7RUFDSSxtQkFBQTtBQ0RKO0FESUE7RUFDSSxtQkFBQTtBQ0RKO0FESUE7RUFHSSxtQkFBQTtFQUNBLGFBQUE7RUFFQSxrQkFBQTtFQUNBLFNBQUE7QUNKSjtBRFdBO0VBQ0kscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ1JKO0FEV0E7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0FDUko7QURXQTtFQUNJLGdDQUFBO0FDUko7QURXQTs7RUFFSSw2QkFBQTtBQ1JKO0FEV0E7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUNSSjtBRFlJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDVFI7QURjSTtFQUNJLDJCQUFBO0VBQ0EsOEJBQUE7QUNYUjtBRGVBO0VBQ0ksa0JBQUE7QUNaSjtBRGFJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDWFI7QURlQTtFQUVJLGFBQUE7QUNiSjtBRGNJO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQ1pSO0FEYVE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1haO0FEYVE7RUFDSSxlQUFBO0FDWFo7QURjSTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtBQ1pSO0FEZ0JBO0VBRUksYUFBQTtBQ2RKO0FEZUk7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FDYlI7QURjUTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDWlo7QURjUTtFQUNJLGVBQUE7QUNaWjtBRGVJO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0FDYlI7QURpQkE7O0VBRUksMkJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUNkSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NsaWVudC1jb3JlL3Jpc2stbWFuYWdlci9yaXNrLW1hbmFnZXItY29yZS9wcm9maXQtbG9zcy9wcm9maXQtbG9zcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdG9wbG9zcy1mb3JtLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiA1cHggNnB4O1xyXG4gICAgLnN0b3Bsb3NzLWZyb20tYm94IHtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4IDE1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICNkZmUyZTQ7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDVzIGVhc2Utb3V0O1xyXG4gICAgICAgIC5oZWFkaW5nIHtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNtYWxsIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jbG9zZS1idG4ge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0b3A6IC0zcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5oaXN0b3J5LXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLnJpZ2h0LXRhYkJ0bi1yb3cge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICB0b3A6IDZweDtcclxufVxyXG5cclxuLnRhYmxlLWZpbHRlci1hcmVhIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQ6ICNlZmYzZjY7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcclxuICAgIGJvcmRlci1ib3R0b206IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMCAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgIHRvcDogNnB4O1xyXG59XHJcblxyXG50Ym9keT50cjpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgYmFja2dyb3VuZDogI2Y4ZjlmYVxyXG59XHJcblxyXG50Ym9keT50cjpudGgtY2hpbGQob2RkKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWZmM2Y2XHJcbn1cclxuXHJcbi50YWJsZS1wYWdpbmF0aW9uIHtcclxuICAgIC8vIHBhZGRpbmc6IDAuNzVyZW07XHJcbiAgICAvLyBwYWRkaW5nLXRvcDogMXJlbTtcclxuICAgIGJhY2tncm91bmQ6ICNlZmYzZjY7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgLy8gYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTJweDtcclxufVxyXG5cclxuLy8gLmJ0bi1zbSxcclxuLy8gLmJ0bi1ncm91cC1zbT4uYnRuIHtcclxuLy8gICAgIHBhZGRpbmc6IDAuMTVyZW0gMC44cmVtO1xyXG4vLyB9XHJcbi5iYWRnZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAwLjQ1ZW0gMC44ZW07XHJcbiAgICBmb250LXNpemU6IDc1JTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XHJcbiAgICBib3JkZXItc3BhY2luZzogMCA2cHg7XHJcbn1cclxuXHJcbi50YWJsZSB0aGVhZCB0aCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAwcHggc29saWQgI2RlZTJlNjtcclxufVxyXG5cclxuLnRhYmxlIHRoLFxyXG4udGFibGUgdGQge1xyXG4gICAgYm9yZGVyLXRvcDogMHB4IHNvbGlkICNkZWUyZTY7XHJcbn1cclxuXHJcbi5uZ3gtcGFnaW5hdGlvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5kaXJlY3Rpb24tYnRuIHtcclxuICAgIC5idG4ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBwYWRkaW5nOiA2cHggMTBweDtcclxuICAgICAgICBtaW4td2lkdGg6IDg1cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxufVxyXG5cclxuLnRhcmdldC1saW1pdCB7XHJcbiAgICAubGltaXQtdHlwZSB7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmV4cGlyeWRhdGUtYXJlYSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAuZGF0ZVBpY2tlckljb24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogOHB4O1xyXG4gICAgICAgIGJvdHRvbTogN3B4O1xyXG4gICAgICAgIGNvbG9yOiAjNWNiODVjO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuLmFjdGlvbi1hcmVhIHtcclxuICAgIC8vIGJhY2tncm91bmQ6ICNGRkY7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgLnRpdGxlLWFyZWEge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICBwYWRkaW5nOiAwIDAgMTVweCAwO1xyXG4gICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzbWFsbCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYm9keS1hcmVhIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubm90aWZpY2F0aW9uLWFyZWEge1xyXG4gICAgLy8gYmFja2dyb3VuZDogI0ZGRjtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAudGl0bGUtYXJlYSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMCAxNXB4IDA7XHJcbiAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNtYWxsIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5ib2R5LWFyZWEge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi50YWJsZSB0aCxcclxuLnRhYmxlIHRkIHtcclxuICAgIHBhZGRpbmctdG9wOiA4cHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4cHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxufSIsIi5zdG9wbG9zcy1mb3JtLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDVweCA2cHg7XG59XG4uc3RvcGxvc3MtZm9ybS1jb250YWluZXIgLnN0b3Bsb3NzLWZyb20tYm94IHtcbiAgcGFkZGluZzogMTVweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHRyYW5zaXRpb246IGFsbCA1cyBlYXNlLW91dDtcbn1cbi5zdG9wbG9zcy1mb3JtLWNvbnRhaW5lciAuc3RvcGxvc3MtZnJvbS1ib3ggLmhlYWRpbmcge1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5zdG9wbG9zcy1mb3JtLWNvbnRhaW5lciAuc3RvcGxvc3MtZnJvbS1ib3ggLmhlYWRpbmcgLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLnN0b3Bsb3NzLWZvcm0tY29udGFpbmVyIC5zdG9wbG9zcy1mcm9tLWJveCAuaGVhZGluZyBzbWFsbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5zdG9wbG9zcy1mb3JtLWNvbnRhaW5lciAuY2xvc2UtYnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0zcHg7XG59XG5cbi5oaXN0b3J5LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiA1cHggMDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLnJpZ2h0LXRhYkJ0bi1yb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMHB4O1xuICB0b3A6IDZweDtcbn1cblxuLnRhYmxlLWZpbHRlci1hcmVhIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjZWZmM2Y2O1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXItYm90dG9tOiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMCAwO1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICB0b3A6IDZweDtcbn1cblxudGJvZHkgPiB0cjpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xufVxuXG50Ym9keSA+IHRyOm50aC1jaGlsZChvZGQpIHtcbiAgYmFja2dyb3VuZDogI2VmZjNmNjtcbn1cblxuLnRhYmxlLXBhZ2luYXRpb24ge1xuICBiYWNrZ3JvdW5kOiAjZWZmM2Y2O1xuICBwYWRkaW5nOiAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTJweDtcbn1cblxuLmJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwLjQ1ZW0gMC44ZW07XG4gIGZvbnQtc2l6ZTogNzUlO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gIGJvcmRlci1zcGFjaW5nOiAwIDZweDtcbn1cblxuLnRhYmxlIHRoZWFkIHRoIHtcbiAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkICNkZWUyZTY7XG59XG5cbi50YWJsZSB0aCxcbi50YWJsZSB0ZCB7XG4gIGJvcmRlci10b3A6IDBweCBzb2xpZCAjZGVlMmU2O1xufVxuXG4ubmd4LXBhZ2luYXRpb24ge1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmRpcmVjdGlvbi1idG4gLmJ0biB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcGFkZGluZzogNnB4IDEwcHg7XG4gIG1pbi13aWR0aDogODVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnRhcmdldC1saW1pdCAubGltaXQtdHlwZSB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xufVxuXG4uZXhwaXJ5ZGF0ZS1hcmVhIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmV4cGlyeWRhdGUtYXJlYSAuZGF0ZVBpY2tlckljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA4cHg7XG4gIGJvdHRvbTogN3B4O1xuICBjb2xvcjogIzVjYjg1YztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWN0aW9uLWFyZWEge1xuICBwYWRkaW5nOiAxNXB4O1xufVxuLmFjdGlvbi1hcmVhIC50aXRsZS1hcmVhIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBwYWRkaW5nOiAwIDAgMTVweCAwO1xufVxuLmFjdGlvbi1hcmVhIC50aXRsZS1hcmVhIC50aXRsZSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLmFjdGlvbi1hcmVhIC50aXRsZS1hcmVhIHNtYWxsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmFjdGlvbi1hcmVhIC5ib2R5LWFyZWEge1xuICBwYWRkaW5nOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuLm5vdGlmaWNhdGlvbi1hcmVhIHtcbiAgcGFkZGluZzogMTVweDtcbn1cbi5ub3RpZmljYXRpb24tYXJlYSAudGl0bGUtYXJlYSB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgcGFkZGluZzogMCAwIDE1cHggMDtcbn1cbi5ub3RpZmljYXRpb24tYXJlYSAudGl0bGUtYXJlYSAudGl0bGUge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5ub3RpZmljYXRpb24tYXJlYSAudGl0bGUtYXJlYSBzbWFsbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5ub3RpZmljYXRpb24tYXJlYSAuYm9keS1hcmVhIHtcbiAgcGFkZGluZzogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbi50YWJsZSB0aCxcbi50YWJsZSB0ZCB7XG4gIHBhZGRpbmctdG9wOiA4cHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDhweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEzcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfitLossComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profit-loss',
                templateUrl: './profit-loss.component.html',
                styleUrls: ['./profit-loss.component.scss']
            }]
    }], function () { return [{ type: _shared_services_header_service__WEBPACK_IMPORTED_MODULE_4__["HeaderService"] }, { type: _shared_services_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"] }, { type: ngx_order_pipe__WEBPACK_IMPORTED_MODULE_6__["OrderPipe"] }, { type: _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] }]; }, { stopLossOrderForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['formData', { static: false }]
        }], datepicker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsDatepickerDirective"], { static: false }]
        }], onScrollEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/client-core/risk-manager/risk-manager-core/risk-manager-core.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/client-core/risk-manager/risk-manager-core/risk-manager-core.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: RiskManagerCoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiskManagerCoreComponent", function() { return RiskManagerCoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class RiskManagerCoreComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
RiskManagerCoreComponent.ɵfac = function RiskManagerCoreComponent_Factory(t) { return new (t || RiskManagerCoreComponent)(); };
RiskManagerCoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RiskManagerCoreComponent, selectors: [["app-risk-manager-core"]], decls: 27, vars: 0, consts: [[1, "small-content-section", "bg-f"], [1, "row"], [1, "col-md-12"], [1, "card", "border-0"], [1, "card-body", "border-0", "p-0"], [1, "tabs-container"], [1, "tabs-heading", "d-flex", "flex-row", "border-bottom"], ["routerLinkActive", "active", 1, "tabs-item", "item-with-icon"], ["routerLink", "/home/risk-manager/equity-drawdown", 1, "p-3"], [1, "material-icons"], [1, "tab-text"], ["routerLink", "/home/risk-manager/symbol-drawdown", 1, "p-3"], ["routerLink", "/home/risk-manager/profit-loss", 1, "p-3"], [1, "tabs-body", "p-2"]], template: function RiskManagerCoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "timeline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Equity Drawdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "equalizer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Symbol Drawdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "monetization_on");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Profit/Loss");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NsaWVudC1jb3JlL3Jpc2stbWFuYWdlci9yaXNrLW1hbmFnZXItY29yZS9yaXNrLW1hbmFnZXItY29yZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RiskManagerCoreComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-risk-manager-core',
                templateUrl: './risk-manager-core.component.html',
                styleUrls: ['./risk-manager-core.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/client-core/risk-manager/risk-manager-core/symbol-drawdown/symbol-drawdown.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/client-core/risk-manager/risk-manager-core/symbol-drawdown/symbol-drawdown.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: SymbolDrawdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymbolDrawdownComponent", function() { return SymbolDrawdownComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/esm5/ngx-bootstrap.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_services_header_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../../shared/services/header.service */ "./src/app/shared/services/header.service.ts");
/* harmony import */ var _shared_services_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../../shared/services/global.service */ "./src/app/shared/services/global.service.ts");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/__ivy_ngcc__/fesm2015/ngx-order-pipe.js");
/* harmony import */ var _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../../shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-feather */ "./node_modules/angular-feather/__ivy_ngcc__/fesm2015/angular-feather.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");
















const _c0 = ["formData"];
function SymbolDrawdownComponent_div_4_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r573 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Success -: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i-feather", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SymbolDrawdownComponent_div_4_div_6_Template_i_feather_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r573); const ctx_r572 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r572.onCloseMsqBlock(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r557 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r557.messageToDisplay, " ");
} }
function SymbolDrawdownComponent_div_4_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r575 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Oops... : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i-feather", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SymbolDrawdownComponent_div_4_div_9_Template_i_feather_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r575); const ctx_r574 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r574.onCloseMsqBlock(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r558 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r558.messageToDisplay, " ");
} }
function SymbolDrawdownComponent_div_4_option_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const acc_r576 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", acc_r576.MT4Account);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](acc_r576.MT4Account);
} }
function SymbolDrawdownComponent_div_4_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select an account Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SymbolDrawdownComponent_div_4_option_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r577 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", item_r577);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r577);
} }
function SymbolDrawdownComponent_div_4_span_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select at least one Symbol");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SymbolDrawdownComponent_div_4_div_87_label_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Close All Position");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const action_r578 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "customRadio", action_r578, "");
} }
function SymbolDrawdownComponent_div_4_div_87_label_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Close All Loss Trades");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const action_r578 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "customRadio", action_r578, "");
} }
function SymbolDrawdownComponent_div_4_div_87_label_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Close All Profit Trades");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const action_r578 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "customRadio", action_r578, "");
} }
function SymbolDrawdownComponent_div_4_div_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 92, 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SymbolDrawdownComponent_div_4_div_87_label_3_Template, 2, 1, "label", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SymbolDrawdownComponent_div_4_div_87_label_4_Template, 2, 1, "label", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SymbolDrawdownComponent_div_4_div_87_label_5_Template, 2, 1, "label", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const action_r578 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "customRadio", action_r578, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", action_r578);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", action_r578 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", action_r578 === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", action_r578 === 2);
} }
const _c1 = function () { return { dateInputFormat: "MM/DD/YYYY " }; };
function SymbolDrawdownComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r587 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 27, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SymbolDrawdownComponent_div_4_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r587); const ctx_r586 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r586.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SymbolDrawdownComponent_div_4_div_6_Template, 6, 1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SymbolDrawdownComponent_div_4_div_9_Template, 6, 1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Account Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "select", 38, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Select Account Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, SymbolDrawdownComponent_div_4_option_24_Template, 2, 2, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, SymbolDrawdownComponent_div_4_span_25_Template, 2, 0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Select Symbol");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "select", 44, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Select Symbol");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, SymbolDrawdownComponent_div_4_option_37_Template, 2, 2, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, SymbolDrawdownComponent_div_4_span_38_Template, 2, 0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Expiry Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 48, 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SymbolDrawdownComponent_div_4_Template_span_click_48_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r587); const ctx_r588 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r588.isOpenDatePicker = !ctx_r588.isOpenDatePicker; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i-feather", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Target Limit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "input", 54, 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "select", 57, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SymbolDrawdownComponent_div_4_Template_select_ngModelChange_60_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r587); const ctx_r589 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r589.defaultLimitType = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "option", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "$");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Equity Direction");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SymbolDrawdownComponent_div_4_Template_button_click_73_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r587); const ctx_r590 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r590.onSelectDirection(0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "i-feather", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "UP");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SymbolDrawdownComponent_div_4_Template_button_click_76_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r587); const ctx_r591 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r591.onSelectDirection(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "i-feather", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Down");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h5", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Required Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "You need to perform At least one Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, SymbolDrawdownComponent_div_4_div_87_Template, 6, 5, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "h5", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Send Notification");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "You will receive Notification");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "input", 75, 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SymbolDrawdownComponent_div_4_Template_input_ngModelChange_97_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r587); const ctx_r592 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r592.defaultDisableTrade = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Disable Trade");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "input", 78, 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SymbolDrawdownComponent_div_4_Template_input_ngModelChange_102_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r587); const ctx_r593 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r593.defaultPushMail = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Push Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "label", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r556 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const _r559 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);
    const _r562 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34);
    const ctx_r553 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r553.successMsqBlock);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r553.ErrorMsqBlock);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r553.liveAccountData);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r559.valid && _r559.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r553.symbolsList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r562.valid && _r562.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isOpen", ctx_r553.isOpenDatePicker)("minDate", ctx_r553.minDate)("maxDate", ctx_r553.maxDate)("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r553.defaultLimitType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r553.direction === 0 && ctx_r553.isDirectionSelected ? "btn-success" : "btn-outline-success");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r553.direction === 1 && ctx_r553.isDirectionSelected ? "btn-danger" : "btn-outline-danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r553.actionOnPosition);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r553.defaultDisableTrade);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r553.defaultPushMail);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r556.valid || ctx_r553.isDirectionSelected === false || ctx_r553.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-spinner", ctx_r553.isLoading);
} }
function SymbolDrawdownComponent_tbody_60_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading ...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SymbolDrawdownComponent_tbody_60_tr_2_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i-feather", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SymbolDrawdownComponent_tbody_60_tr_2_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i-feather", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SymbolDrawdownComponent_tbody_60_tr_2_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Close All Position");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SymbolDrawdownComponent_tbody_60_tr_2_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Close All Loss Trades");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SymbolDrawdownComponent_tbody_60_tr_2_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Close All Profit Trades");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SymbolDrawdownComponent_tbody_60_tr_2_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Disable");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SymbolDrawdownComponent_tbody_60_tr_2_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enable");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SymbolDrawdownComponent_tbody_60_tr_2_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SymbolDrawdownComponent_tbody_60_tr_2_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SymbolDrawdownComponent_tbody_60_tr_2_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i-feather", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " UP");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SymbolDrawdownComponent_tbody_60_tr_2_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i-feather", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Down");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SymbolDrawdownComponent_tbody_60_tr_2_Template(rf, ctx) { if (rf & 1) {
    const _r610 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SymbolDrawdownComponent_tbody_60_tr_2_span_10_Template, 2, 0, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SymbolDrawdownComponent_tbody_60_tr_2_span_11_Template, 2, 0, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SymbolDrawdownComponent_tbody_60_tr_2_span_13_Template, 2, 0, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SymbolDrawdownComponent_tbody_60_tr_2_span_14_Template, 2, 0, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SymbolDrawdownComponent_tbody_60_tr_2_span_15_Template, 2, 0, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, SymbolDrawdownComponent_tbody_60_tr_2_span_17_Template, 2, 0, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SymbolDrawdownComponent_tbody_60_tr_2_span_18_Template, 2, 0, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SymbolDrawdownComponent_tbody_60_tr_2_span_20_Template, 2, 0, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, SymbolDrawdownComponent_tbody_60_tr_2_span_21_Template, 2, 0, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, SymbolDrawdownComponent_tbody_60_tr_2_span_23_Template, 3, 0, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, SymbolDrawdownComponent_tbody_60_tr_2_span_24_Template, 3, 0, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "i-feather", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SymbolDrawdownComponent_tbody_60_tr_2_Template_i_feather_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r610); const item_r596 = ctx.$implicit; const ctx_r609 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r609.onDelete(item_r596); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r596 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r596.oExpiry.sCreadedOn_Str);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r596.Account);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r596.Symbol);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r596.Value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r596.oPerc_Value === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r596.oPerc_Value === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r596.oAction === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r596.oAction === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r596.oAction === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r596.oAlert_Disable_Trade === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r596.oAlert_Disable_Trade === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r596.oAlert_Mail === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r596.oAlert_Mail === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r596.oUP_DOWN === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r596.oUP_DOWN === 1);
} }
const _c2 = function (a0, a1, a2) { return { itemsPerPage: a0, currentPage: a1, totalItems: a2 }; };
function SymbolDrawdownComponent_tbody_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SymbolDrawdownComponent_tbody_60_tr_1_Template, 4, 0, "tr", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SymbolDrawdownComponent_tbody_60_tr_2_Template, 28, 15, "tr", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "orderBy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r554 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r554.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](5, 8, ctx_r554.stopLossOrderData, ctx_r554.order, ctx_r554.reverse), ctx_r554.searchText), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](12, _c2, ctx_r554.pageSize, ctx_r554.p, ctx_r554.TotalCount)));
} }
function SymbolDrawdownComponent_div_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Data Not Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SymbolDrawdownComponent {
    constructor(headerService, globalService, orderPipe, notificationService) {
        this.headerService = headerService;
        this.globalService = globalService;
        this.orderPipe = orderPipe;
        this.notificationService = notificationService;
        // tslint:disable-next-line: max-line-length
        this.symbolsList = ['USDCAD', 'NZDUSD', 'EURJPY', 'GBPJPY', 'AUDJPY', 'CADJPY', 'CHFJPY', 'NZDJPY', 'EURAUD', 'GBPAUD', 'EURCAD', 'GBPCAD', 'AUDCAD', 'NZDCAD', 'EURCHF', 'GBPCHF', 'AUDCHF', 'CADCHF', 'NZDCHF', 'EURNZD'];
        this.isVisibleFormArea = false;
        this.actionOnPosition = [0, 1, 2];
        this.isLoading = false;
        this.liveAccountData = [];
        this.stopLossOrderData = [];
        this.isDirectionSelected = false;
        this.defaultPushMail = false;
        this.defaultDisableTrade = false;
        this.defaultLimitType = 0;
        this.IsDataNotFound = false;
        this.ErrorMsqBlock = false;
        this.successMsqBlock = false;
        // pagination Setting
        this.TotalCount = 0;
        this.pageSize = 5; // Table Rows Perpage property
        this.order = ''; // Order property to sort coloum of table
        this.reverse = true; // Reverse property is used to sort table coloum
        this.isOpenDatePicker = false;
        this.currentDate = new Date();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            dateYMD: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](new Date()),
            dateFull: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](new Date()),
            dateMDY: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](new Date()),
            dateRange: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]([
                new Date(),
                new Date(this.currentDate.setDate(this.currentDate.getDate() + 7))
            ])
        });
        this.minDate = new Date();
        this.maxDate = new Date();
        this.minDate.setDate(this.minDate.getDate() - 0);
        this.maxDate.setDate(this.maxDate.getDate() + 2);
        this.subscription1 = this.headerService.castLoggedUserDetail.subscribe(resData => (this.LoggedParams = resData));
    }
    toggleFormArea() {
        this.isVisibleFormArea = !this.isVisibleFormArea;
    }
    onScrollEvent() {
        this.datepicker.hide();
    }
    setOrder(value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
    }
    ngOnInit() {
        this.getProfileAccounts();
        this.getStopLossOrderData(1, this.cat);
    }
    getStopLossOrderData(indexval, countVal) {
        this.isLoading = true;
        if (countVal) {
            this.pageSize = indexval;
            this.p = 1;
            this.setParams = {
                Profile: this.LoggedParams.sProfile.sMasterId,
                Index: this.p,
                Count: this.pageSize
            };
        }
        else {
            this.p = indexval;
            this.setParams = {
                Profile: this.LoggedParams.sProfile.sMasterId,
                Index: (this.p - 1) * this.pageSize + 1,
                Count: this.p * this.pageSize
            };
        }
        console.log(this.LoggedParams.sProfile.sMasterId);
        this.subscription3 = this.globalService.getRiskSymb(this.setParams).subscribe(data => {
            if (data.Count > 0) {
                this.TotalCount = data.Count;
                this.stopLossOrderData = data.lstEquityDD;
                this.isLoading = false;
                this.IsDataNotFound = false;
            }
            else {
                this.IsDataNotFound = true;
                this.isLoading = false;
            }
        });
    }
    getProfileAccounts() {
        const params = {
            ProfileId: this.LoggedParams.sProfile.sMasterId,
            LoginId: this.LoggedParams.sProfile.sMasterId
        };
        this.subscription2 = this.globalService.GET_PROFILE_ACCOUNTS(params).subscribe(data => {
            this.liveAccountData = data.lstAccount.map(acc => {
                if (acc) {
                    return Object.assign(acc.sUserInfo, acc.sAccountPlan);
                }
            });
        });
    }
    resetForm() {
        this.stopLossOrderForm.reset();
        this.isDirectionSelected = false;
        // this.stopLossOrderForm.value.limitType = 0;
        // this.stopLossOrderForm.form.value.limitType = 0;
        // this.defaultLimitType = 0;
    }
    onSubmit() {
        // alert(this.stopLossOrderForm.value.expiryTime);
        this.isLoading = true;
        const params = {
            RiskId: 0,
            Profile: this.LoggedParams.sProfile.sMasterId.toString(),
            Account: this.stopLossOrderForm.value.accountnumber.toString(),
            Value: this.stopLossOrderForm.value.targetLimit.toString(),
            Symbol: this.stopLossOrderForm.value.symbol,
            sValue: 0,
            oPerc_Value: this.stopLossOrderForm.value.limitType,
            oUP_DOWN: this.direction,
            oAction: this.stopLossOrderForm.value.actionOnPosition,
            oAlert_Mail: (this.stopLossOrderForm.value.pushEmail === false) ? 0 : 1,
            oAlert_Disable_Trade: (this.stopLossOrderForm.value.disableTrade === false) ? 0 : 1,
            oTimestamp: {
                sCreadedOn: 0,
                sUpdatedOn: 0,
                sCreadedOn_Str: new Date(),
                sUpdatedOn_Str: new Date(),
            },
            oExpiry: {
                sCreadedOn: 0,
                sUpdatedOn: 0,
                sCreadedOn_Str: this.stopLossOrderForm.value.expiryTime,
                sUpdatedOn_Str: 0,
            }
        };
        this.globalService.addRiskSymb(params).subscribe(data => {
            if (data.Result !== -1) {
                // console.log(data);
                this.getStopLossOrderData(1, this.cat);
                this.resetForm();
                // this.onSuccessMsqDisplay('symbol DD alert added successfully');
                this.notificationService.showSuccess('Symbol drawdown alert added successfully', 'Success');
                // this.autoCloseMsqBlock();
                this.isLoading = false;
                // this.isVisibleFormArea = false;
            }
            else {
                // this.onErrorMsqDisplay('Failed to add symbol DD');
                this.notificationService.showError('Failed to add Symbol drawdown alert', 'Error');
                this.isLoading = false;
                // this.autoCloseMsqBlock();
            }
        });
    }
    onSelectDirection(direction) {
        this.direction = direction;
        this.isDirectionSelected = true;
    }
    onDelete(selectedItem) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Are you Sure!',
            text: 'Are you sure to delete this drawdown alert?',
            icon: 'error',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            cancelButtonText: 'Cancel',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
        }).then((result) => {
            if (result.value) {
                const params = {
                    RiskId: selectedItem.RiskId,
                };
                console.log(params);
                this.globalService.deleteRiskSymb(params).subscribe(data => {
                    if (data.Result === true) {
                        this.getStopLossOrderData(1, this.cat);
                        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Deleted!', 'Your drawdown alert has been deleted.', 'success');
                    }
                });
            }
        });
    }
    autoCloseMsqBlock() {
        setTimeout(() => {
            this.successMsqBlock = false;
            this.ErrorMsqBlock = false;
            this.messageToDisplay = '';
        }, 10000);
    }
    onCloseMsqBlock() {
        this.successMsqBlock = false;
        this.ErrorMsqBlock = false;
        this.messageToDisplay = '';
    }
    onSuccessMsqDisplay(msq) {
        this.messageToDisplay = '';
        this.ErrorMsqBlock = false;
        this.successMsqBlock = true;
        this.messageToDisplay = msq;
    }
    onErrorMsqDisplay(msq) {
        this.messageToDisplay = '';
        this.successMsqBlock = false;
        this.ErrorMsqBlock = true;
        this.messageToDisplay = msq;
    }
    ngOnDestroy() {
        this.subscription1.unsubscribe();
        this.subscription2.unsubscribe();
        this.subscription3.unsubscribe();
    }
}
SymbolDrawdownComponent.ɵfac = function SymbolDrawdownComponent_Factory(t) { return new (t || SymbolDrawdownComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_header_service__WEBPACK_IMPORTED_MODULE_4__["HeaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_order_pipe__WEBPACK_IMPORTED_MODULE_6__["OrderPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"])); };
SymbolDrawdownComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SymbolDrawdownComponent, selectors: [["app-symbol-drawdown"]], viewQuery: function SymbolDrawdownComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsDatepickerDirective"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stopLossOrderForm = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.datepicker = _t.first);
    } }, hostBindings: function SymbolDrawdownComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function SymbolDrawdownComponent_scroll_HostBindingHandler() { return ctx.onScrollEvent(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 64, vars: 22, consts: [[1, "right-tabBtn-row", "d-none", "d-sm-block", "d-md-block", "d-lg-block"], [1, "btn", "btn-warning", "btn-sm", "font-weight-400", "text-size-13", 3, "click"], ["name", "dollar-sign", 1, "icon-size-18"], ["class", "stoploss-form-container", 4, "ngIf"], [1, "tab-inner-content", "px-2"], [1, "history-title"], [1, "table-filter-area"], [1, "row", "no-gutters"], [1, "col-md-4", "form-inline", "d-none", "d-md-block"], [1, "form-group", "mb-2"], ["for", "entries ", 1, "main-txt-color", "mr-1"], ["id", "entries ", 1, "form-control", "main-txt-color", "bd-color", "shadow-none", 3, "change"], ["for", "entries ", 1, "main-txt-color", "ml-1"], [1, "col-md-3", "offset-md-5"], [1, "form-group"], ["type", "text ", "id", "searchText ", "placeholder", "Enter account number to search", 1, "form-control", "main-txt-color", "bd-color", "shadow-none", 3, "ngModel", "ngModelChange"], [1, "table-container", "table-responsive", "table-responsive", "table-responsive-sm", "mb-3"], [1, "table", "table-hover", "main-txt-color", "mb-0"], [1, "table-header-bg", "table-header-color"], [1, "font-weight-500", "bd-color", "text-capitalize", "align-middle", 3, "click"], [1, "font-weight-500", "bd-color", "text-capitalize", "align-middle", "text-center"], ["class", "secondary-txt-color ", 4, "ngIf"], ["class", "text-size-17 font-weight-300 text-center p-4", "style", "background: #eff3f6;", 4, "ngIf"], [1, "table-pagination", "text-right", "border-top-0", "pt-4"], [3, "pageChange"], [1, "stoploss-form-container"], [1, "stoploss-from-box", "bg-b"], [1, "", 3, "ngSubmit"], ["formData", "ngForm"], [1, "row"], [1, "col-md-6"], ["class", "alert alert-success alert-dismissible fade show", "role", "alert", 4, "ngIf"], ["class", "alert alert-danger alert-dismissible fade show", "role", "alert", 4, "ngIf"], [1, "col-md-5"], [1, "form-box", "pt-2"], [1, "col-md-12"], ["for", "accountnumber", 1, "main-txt-color"], [1, "asterick"], ["required", "", "ngModel", "", "name", "accountnumber", "id", "accountnumber", 1, "form-control", "shadow-none"], ["accountnumber", "ngModel"], ["value", "", 1, "text-size-13", 3, "disabled"], ["class", "text-size-13", "name", "accounts", 3, "ngValue", 4, "ngFor", "ngForOf"], ["class", "help-block text-danger ", 4, "ngIf"], ["for", "symbol", 1, "main-txt-color"], ["required", "", "ngModel", "", "name", "symbol", "id", "symbol", 1, "form-control", "shadow-none"], ["symbol", "ngModel"], [1, "form-group", "expirydate-area", "text-right"], ["for", "selectAccount", 1, "main-txt-color"], ["autocomplete", "off", "required", "", "ngModel", "", "type", "text", "id", "expiryTime", "name", "expiryTime", "placeholder", "Select Expiry Date", "bsDatepicker", "", 1, "form-control", "shadow-none", "rounded-right-0", 3, "isOpen", "minDate", "maxDate", "bsConfig"], ["expiryTime", "ngModel", "dp", "bsDatepicker"], [1, "datePickerIcon", 3, "click"], ["name", "calendar", 1, "icon-size-20"], ["for", "targetLimit", 1, "main-txt-color"], [1, "input-group", "target-limit"], ["required", "", "ngModel", "", "min", "1", "name", "targetLimit", "id", "targetLimit", "type", "number", "placeholder", "0", 1, "form-control", "shadow-none", "rounded-right-0"], ["targetLimit", "ngModel"], ["id", "button-addon4", 1, "input-group-append"], ["required", "", "name", "limitType", "id", "limitType", 1, "form-control", "shadow-none", "limit-type", "rounded-left-0", 2, "width", "60px", "height", "34px", 3, "ngModel", "ngModelChange"], ["limitType", "ngModel"], ["value", "0", "selected", ""], ["value", "1"], [1, "direction-btn", "text-right"], ["role", "group", 1, "btn-group"], ["type", "button", 1, "btn", "shadow-none", 3, "ngClass", "click"], ["name", "chevrons-up", 1, "icon-size-20"], ["name", "chevrons-down", 1, "icon-size-20"], [1, "col-md-4"], [1, "action-area", "rounded"], [1, "title-area", "border-bottom", "bd-color"], [1, "title"], [1, "body-area"], ["class", "custom-control custom-radio", 4, "ngFor", "ngForOf"], [1, "col-md-3"], [1, "notification-area", "rounded"], [1, "custom-control", "custom-switch"], ["value", "false", "type", "checkbox", "name", "disableTrade", "id", "customSwitch1", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], ["disableTrade", "ngModel"], ["for", "customSwitch1", 1, "custom-control-label"], ["value", "false", "type", "checkbox", "name", "pushEmail", "id", "customSwitch2", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], ["pushEmail", "ngModel"], ["for", "customSwitch2", 1, "custom-control-label"], [1, ""], ["for", "selectAccount", 1, "main-txt-color", "font-weight-500"], [1, "text-right"], [1, "btn", "btn-primary", "btn-sm", "px-4", "position-relative", 3, "disabled"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show"], ["type", "button", "data-dismiss", "alert", 1, "close"], ["name", "x", 1, "close-btn", 3, "click"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show"], ["name", "accounts", 1, "text-size-13", 3, "ngValue"], [1, "help-block", "text-danger"], [1, "custom-control", "custom-radio"], ["required", "", "ngModel", "", "type", "radio", "name", "actionOnPosition", 1, "custom-control-input", 3, "id", "value"], ["actionOnPosition", "ngModel"], ["class", "custom-control-label", 3, "for", 4, "ngIf"], [1, "custom-control-label", 3, "for"], [1, "secondary-txt-color"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["colspan", "9", 1, "text-center"], [1, "text-size-17", "font-weight-300"], [1, "bd-color", "text-capitalize", "font-weight-400"], [1, "bd-color", "text-capitalize", "font-weight-400", "text-center"], ["tooltip", "Delete Action", "name", "trash-2", 1, "icon-size-17", "primary-icons-color", "cursor-pointer", 2, "color", "red", 3, "click"], ["name", "percent", 1, "icon-size-17", "primary-icons-color", "cursor-pointer", 2, "color", "goldenrod"], ["name", "dollar-sign", 1, "icon-size-17", "primary-icons-color", "cursor-pointer", 2, "color", "goldenrod"], ["name", "trending-up", 1, "icon-size-17", "primary-icons-color", "cursor-pointer", 2, "color", "green"], ["name", "trending-down", 1, "icon-size-17", "primary-icons-color", "cursor-pointer", 2, "color", "red"], [1, "text-size-17", "font-weight-300", "text-center", "p-4", 2, "background", "#eff3f6"]], template: function SymbolDrawdownComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SymbolDrawdownComponent_Template_button_click_1_listener() { return ctx.toggleFormArea(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i-feather", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Create New Drawdown ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SymbolDrawdownComponent_div_4_Template, 115, 22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Alert List ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Show ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SymbolDrawdownComponent_Template_select_change_14_listener($event) { return ctx.getStopLossOrderData($event.target.value, true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "15");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "25");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "30");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "50");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Entries");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SymbolDrawdownComponent_Template_input_ngModelChange_35_listener($event) { return ctx.searchText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "table", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "thead", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SymbolDrawdownComponent_Template_th_click_40_listener() { return ctx.setOrder("sCreadedOn_Str"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Expiry Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SymbolDrawdownComponent_Template_th_click_42_listener() { return ctx.setOrder("Account"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SymbolDrawdownComponent_Template_th_click_44_listener() { return ctx.setOrder("Symbol"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Symbol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SymbolDrawdownComponent_Template_th_click_46_listener() { return ctx.setOrder("Value"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SymbolDrawdownComponent_Template_th_click_48_listener() { return ctx.setOrder("oPerc_Value"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SymbolDrawdownComponent_Template_th_click_50_listener() { return ctx.setOrder("oAction"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SymbolDrawdownComponent_Template_th_click_52_listener() { return ctx.setOrder("oAlert_Disable_Trade"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Enable/Disable Trade");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SymbolDrawdownComponent_Template_th_click_54_listener() { return ctx.setOrder("oAlert_Mail"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Alert Mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SymbolDrawdownComponent_Template_th_click_56_listener() { return ctx.setOrder("oUP_DOWN"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "UP/Down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, SymbolDrawdownComponent_tbody_60_Template, 6, 16, "tbody", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, SymbolDrawdownComponent_div_61_Template, 2, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "pagination-controls", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function SymbolDrawdownComponent_Template_pagination_controls_pageChange_63_listener($event) { return ctx.getStopLossOrderData($event, false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isVisibleFormArea);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.order === "sCreadedOn_Str");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.order === "Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.order === "Symbol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.order === "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.order === "oPerc_Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.order === "oAction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.order === "oAlert_Disable_Trade");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.order === "oAlert_Mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.order === "oUP_DOWN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.IsDataNotFound);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.IsDataNotFound);
    } }, directives: [angular_feather__WEBPACK_IMPORTED_MODULE_8__["ɵa"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["PaginationControlsComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__["BsDatepickerInputDirective"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__["BsDatepickerDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["TooltipDirective"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["PaginatePipe"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_12__["Ng2SearchPipe"], ngx_order_pipe__WEBPACK_IMPORTED_MODULE_6__["OrderPipe"]], styles: [".stoploss-form-container[_ngcontent-%COMP%] {\n  padding: 5px 6px;\n}\n.stoploss-form-container[_ngcontent-%COMP%]   .stoploss-from-box[_ngcontent-%COMP%] {\n  padding: 15px 15px;\n  border-radius: 4px;\n  -webkit-transition: all 5s ease-out;\n  transition: all 5s ease-out;\n}\n.stoploss-form-container[_ngcontent-%COMP%]   .stoploss-from-box[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  line-height: 20px;\n  margin-bottom: 15px;\n}\n.stoploss-form-container[_ngcontent-%COMP%]   .stoploss-from-box[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 400;\n}\n.stoploss-form-container[_ngcontent-%COMP%]   .stoploss-from-box[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.stoploss-form-container[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  position: relative;\n  top: -3px;\n}\n.history-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding: 5px 0;\n  font-weight: 400;\n}\n.right-tabBtn-row[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 20px;\n  top: 6px;\n}\n.table-filter-area[_ngcontent-%COMP%] {\n  position: relative;\n  background: #eff3f6;\n  padding: 15px;\n  border-bottom: 0px;\n  border-radius: 4px 4px 0 0;\n  padding-bottom: 0px;\n  top: 6px;\n}\ntbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(even) {\n  background: #f8f9fa;\n}\ntbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(odd) {\n  background: #eff3f6;\n}\n.table-pagination[_ngcontent-%COMP%] {\n  background: #eff3f6;\n  padding: 15px;\n  position: relative;\n  top: -2px;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.45em 0.8em;\n  font-size: 75%;\n  font-weight: 500;\n}\ntable[_ngcontent-%COMP%] {\n  border-collapse: separate;\n  border-spacing: 0 6px;\n}\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-bottom: 0px solid #dee2e6;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-top: 0px solid #dee2e6;\n}\n.ngx-pagination[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-bottom: 0;\n}\n.direction-btn[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  font-size: 13px;\n  padding: 6px 10px;\n  min-width: 85px;\n  font-weight: 500;\n}\n.target-limit[_ngcontent-%COMP%]   .limit-type[_ngcontent-%COMP%] {\n  border-top-left-radius: 0px;\n  border-bottom-left-radius: 0px;\n}\n.expirydate-area[_ngcontent-%COMP%] {\n  position: relative;\n}\n.expirydate-area[_ngcontent-%COMP%]   .datePickerIcon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 8px;\n  bottom: 7px;\n  color: #5cb85c;\n  cursor: pointer;\n}\n.action-area[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n.action-area[_ngcontent-%COMP%]   .title-area[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  padding: 0 0 15px 0;\n}\n.action-area[_ngcontent-%COMP%]   .title-area[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  font-size: 16px;\n  font-weight: 400;\n}\n.action-area[_ngcontent-%COMP%]   .title-area[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.action-area[_ngcontent-%COMP%]   .body-area[_ngcontent-%COMP%] {\n  padding: 10px;\n  padding-bottom: 0;\n}\n.notification-area[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n.notification-area[_ngcontent-%COMP%]   .title-area[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  padding: 0 0 15px 0;\n}\n.notification-area[_ngcontent-%COMP%]   .title-area[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  font-size: 16px;\n  font-weight: 400;\n}\n.notification-area[_ngcontent-%COMP%]   .title-area[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.notification-area[_ngcontent-%COMP%]   .body-area[_ngcontent-%COMP%] {\n  padding: 10px;\n  padding-bottom: 0;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-top: 8px !important;\n  padding-bottom: 8px !important;\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2xpZW50LWNvcmUvcmlzay1tYW5hZ2VyL3Jpc2stbWFuYWdlci1jb3JlL3N5bWJvbC1kcmF3ZG93bi9GOlxcbmV3dHJhZGVyXFx0cmFkZXI0LTUvc3JjXFxhcHBcXHBhZ2VzXFxjbGllbnQtY29yZVxccmlzay1tYW5hZ2VyXFxyaXNrLW1hbmFnZXItY29yZVxcc3ltYm9sLWRyYXdkb3duXFxzeW1ib2wtZHJhd2Rvd24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NsaWVudC1jb3JlL3Jpc2stbWFuYWdlci9yaXNrLW1hbmFnZXItY29yZS9zeW1ib2wtZHJhd2Rvd24vc3ltYm9sLWRyYXdkb3duLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSjtBREFJO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUVBLG1DQUFBO0VBQUEsMkJBQUE7QUNDUjtBREFRO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtBQ0VaO0FERFk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNHaEI7QUREWTtFQUNJLGVBQUE7QUNHaEI7QURDSTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtBQ0NSO0FER0E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDQUo7QURHQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7QUNBSjtBREdBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFFQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FDREo7QURJQTtFQUNJLG1CQUFBO0FDREo7QURJQTtFQUNJLG1CQUFBO0FDREo7QURJQTtFQUdJLG1CQUFBO0VBQ0EsYUFBQTtFQUVBLGtCQUFBO0VBQ0EsU0FBQTtBQ0pKO0FEV0E7RUFDSSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDUko7QURXQTtFQUNJLHlCQUFBO0VBQ0EscUJBQUE7QUNSSjtBRFdBO0VBQ0ksZ0NBQUE7QUNSSjtBRFdBOztFQUVJLDZCQUFBO0FDUko7QURXQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQ1JKO0FEWUk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNUUjtBRGNJO0VBQ0ksMkJBQUE7RUFDQSw4QkFBQTtBQ1hSO0FEZUE7RUFDSSxrQkFBQTtBQ1pKO0FEYUk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNYUjtBRGVBO0VBRUksYUFBQTtBQ2JKO0FEY0k7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FDWlI7QURhUTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDWFo7QURhUTtFQUNJLGVBQUE7QUNYWjtBRGNJO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0FDWlI7QURnQkE7RUFFSSxhQUFBO0FDZEo7QURlSTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUNiUjtBRGNRO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNaWjtBRGNRO0VBQ0ksZUFBQTtBQ1paO0FEZUk7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7QUNiUjtBRGlCQTs7RUFFSSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQ2RKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2xpZW50LWNvcmUvcmlzay1tYW5hZ2VyL3Jpc2stbWFuYWdlci1jb3JlL3N5bWJvbC1kcmF3ZG93bi9zeW1ib2wtZHJhd2Rvd24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RvcGxvc3MtZm9ybS1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogNXB4IDZweDtcclxuICAgIC5zdG9wbG9zcy1mcm9tLWJveCB7XHJcbiAgICAgICAgcGFkZGluZzogMTVweCAxNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjZGZlMmU0O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCA1cyBlYXNlLW91dDtcclxuICAgICAgICAuaGVhZGluZyB7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzbWFsbCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2xvc2UtYnRuIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdG9wOiAtM3B4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uaGlzdG9yeS10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi5yaWdodC10YWJCdG4tcm93IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgdG9wOiA2cHg7XHJcbn1cclxuXHJcbi50YWJsZS1maWx0ZXItYXJlYSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWZmM2Y2O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgICBib3JkZXItYm90dG9tOiAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICB0b3A6IDZweDtcclxufVxyXG5cclxudGJvZHk+dHI6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgIGJhY2tncm91bmQ6ICNmOGY5ZmFcclxufVxyXG5cclxudGJvZHk+dHI6bnRoLWNoaWxkKG9kZCkge1xyXG4gICAgYmFja2dyb3VuZDogI2VmZjNmNlxyXG59XHJcblxyXG4udGFibGUtcGFnaW5hdGlvbiB7XHJcbiAgICAvLyBwYWRkaW5nOiAwLjc1cmVtO1xyXG4gICAgLy8gcGFkZGluZy10b3A6IDFyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWZmM2Y2O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIC8vIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0ycHg7XHJcbn1cclxuXHJcbi8vIC5idG4tc20sXHJcbi8vIC5idG4tZ3JvdXAtc20+LmJ0biB7XHJcbi8vICAgICBwYWRkaW5nOiAwLjE1cmVtIDAuOHJlbTtcclxuLy8gfVxyXG4uYmFkZ2Uge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMC40NWVtIDAuOGVtO1xyXG4gICAgZm9udC1zaXplOiA3NSU7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDAgNnB4O1xyXG59XHJcblxyXG4udGFibGUgdGhlYWQgdGgge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkICNkZWUyZTY7XHJcbn1cclxuXHJcbi50YWJsZSB0aCxcclxuLnRhYmxlIHRkIHtcclxuICAgIGJvcmRlci10b3A6IDBweCBzb2xpZCAjZGVlMmU2O1xyXG59XHJcblxyXG4ubmd4LXBhZ2luYXRpb24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4uZGlyZWN0aW9uLWJ0biB7XHJcbiAgICAuYnRuIHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgcGFkZGluZzogNnB4IDEwcHg7XHJcbiAgICAgICAgbWluLXdpZHRoOiA4NXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi50YXJnZXQtbGltaXQge1xyXG4gICAgLmxpbWl0LXR5cGUge1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5leHBpcnlkYXRlLWFyZWEge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLmRhdGVQaWNrZXJJY29uIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDhweDtcclxuICAgICAgICBib3R0b206IDdweDtcclxuICAgICAgICBjb2xvcjogIzVjYjg1YztcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hY3Rpb24tYXJlYSB7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiAjRkZGO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIC50aXRsZS1hcmVhIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgcGFkZGluZzogMCAwIDE1cHggMDtcclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc21hbGwge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJvZHktYXJlYSB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIH1cclxufVxyXG5cclxuLm5vdGlmaWNhdGlvbi1hcmVhIHtcclxuICAgIC8vIGJhY2tncm91bmQ6ICNGRkY7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgLnRpdGxlLWFyZWEge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICBwYWRkaW5nOiAwIDAgMTVweCAwO1xyXG4gICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzbWFsbCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYm9keS1hcmVhIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4udGFibGUgdGgsXHJcbi50YWJsZSB0ZCB7XHJcbiAgICBwYWRkaW5nLXRvcDogOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn0iLCIuc3RvcGxvc3MtZm9ybS1jb250YWluZXIge1xuICBwYWRkaW5nOiA1cHggNnB4O1xufVxuLnN0b3Bsb3NzLWZvcm0tY29udGFpbmVyIC5zdG9wbG9zcy1mcm9tLWJveCB7XG4gIHBhZGRpbmc6IDE1cHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgNXMgZWFzZS1vdXQ7XG59XG4uc3RvcGxvc3MtZm9ybS1jb250YWluZXIgLnN0b3Bsb3NzLWZyb20tYm94IC5oZWFkaW5nIHtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uc3RvcGxvc3MtZm9ybS1jb250YWluZXIgLnN0b3Bsb3NzLWZyb20tYm94IC5oZWFkaW5nIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5zdG9wbG9zcy1mb3JtLWNvbnRhaW5lciAuc3RvcGxvc3MtZnJvbS1ib3ggLmhlYWRpbmcgc21hbGwge1xuICBmb250LXNpemU6IDEycHg7XG59XG4uc3RvcGxvc3MtZm9ybS1jb250YWluZXIgLmNsb3NlLWJ0biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtM3B4O1xufVxuXG4uaGlzdG9yeS10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogNXB4IDA7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5yaWdodC10YWJCdG4tcm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbiAgdG9wOiA2cHg7XG59XG5cbi50YWJsZS1maWx0ZXItYXJlYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogI2VmZjNmNjtcbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyLWJvdHRvbTogMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgdG9wOiA2cHg7XG59XG5cbnRib2R5ID4gdHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbn1cblxudGJvZHkgPiB0cjpudGgtY2hpbGQob2RkKSB7XG4gIGJhY2tncm91bmQ6ICNlZmYzZjY7XG59XG5cbi50YWJsZS1wYWdpbmF0aW9uIHtcbiAgYmFja2dyb3VuZDogI2VmZjNmNjtcbiAgcGFkZGluZzogMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0ycHg7XG59XG5cbi5iYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMC40NWVtIDAuOGVtO1xuICBmb250LXNpemU6IDc1JTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuICBib3JkZXItc3BhY2luZzogMCA2cHg7XG59XG5cbi50YWJsZSB0aGVhZCB0aCB7XG4gIGJvcmRlci1ib3R0b206IDBweCBzb2xpZCAjZGVlMmU2O1xufVxuXG4udGFibGUgdGgsXG4udGFibGUgdGQge1xuICBib3JkZXItdG9wOiAwcHggc29saWQgI2RlZTJlNjtcbn1cblxuLm5neC1wYWdpbmF0aW9uIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5kaXJlY3Rpb24tYnRuIC5idG4ge1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmc6IDZweCAxMHB4O1xuICBtaW4td2lkdGg6IDg1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi50YXJnZXQtbGltaXQgLmxpbWl0LXR5cGUge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcbn1cblxuLmV4cGlyeWRhdGUtYXJlYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5leHBpcnlkYXRlLWFyZWEgLmRhdGVQaWNrZXJJY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogOHB4O1xuICBib3R0b206IDdweDtcbiAgY29sb3I6ICM1Y2I4NWM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFjdGlvbi1hcmVhIHtcbiAgcGFkZGluZzogMTVweDtcbn1cbi5hY3Rpb24tYXJlYSAudGl0bGUtYXJlYSB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgcGFkZGluZzogMCAwIDE1cHggMDtcbn1cbi5hY3Rpb24tYXJlYSAudGl0bGUtYXJlYSAudGl0bGUge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5hY3Rpb24tYXJlYSAudGl0bGUtYXJlYSBzbWFsbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5hY3Rpb24tYXJlYSAuYm9keS1hcmVhIHtcbiAgcGFkZGluZzogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbi5ub3RpZmljYXRpb24tYXJlYSB7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG4ubm90aWZpY2F0aW9uLWFyZWEgLnRpdGxlLWFyZWEge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIHBhZGRpbmc6IDAgMCAxNXB4IDA7XG59XG4ubm90aWZpY2F0aW9uLWFyZWEgLnRpdGxlLWFyZWEgLnRpdGxlIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4ubm90aWZpY2F0aW9uLWFyZWEgLnRpdGxlLWFyZWEgc21hbGwge1xuICBmb250LXNpemU6IDEycHg7XG59XG4ubm90aWZpY2F0aW9uLWFyZWEgLmJvZHktYXJlYSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG4udGFibGUgdGgsXG4udGFibGUgdGQge1xuICBwYWRkaW5nLXRvcDogOHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiA4cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxM3B4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SymbolDrawdownComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-symbol-drawdown',
                templateUrl: './symbol-drawdown.component.html',
                styleUrls: ['./symbol-drawdown.component.scss']
            }]
    }], function () { return [{ type: _shared_services_header_service__WEBPACK_IMPORTED_MODULE_4__["HeaderService"] }, { type: _shared_services_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"] }, { type: ngx_order_pipe__WEBPACK_IMPORTED_MODULE_6__["OrderPipe"] }, { type: _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] }]; }, { stopLossOrderForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['formData', { static: false }]
        }], datepicker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsDatepickerDirective"], { static: false }]
        }], onScrollEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/client-core/risk-manager/risk-manager-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/client-core/risk-manager/risk-manager-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: RiskManagerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiskManagerRoutingModule", function() { return RiskManagerRoutingModule; });
/* harmony import */ var _risk_manager_core_profit_loss_profit_loss_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./risk-manager-core/profit-loss/profit-loss.component */ "./src/app/pages/client-core/risk-manager/risk-manager-core/profit-loss/profit-loss.component.ts");
/* harmony import */ var _risk_manager_core_symbol_drawdown_symbol_drawdown_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./risk-manager-core/symbol-drawdown/symbol-drawdown.component */ "./src/app/pages/client-core/risk-manager/risk-manager-core/symbol-drawdown/symbol-drawdown.component.ts");
/* harmony import */ var _risk_manager_core_equity_drawdown_equity_drawdown_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./risk-manager-core/equity-drawdown/equity-drawdown.component */ "./src/app/pages/client-core/risk-manager/risk-manager-core/equity-drawdown/equity-drawdown.component.ts");
/* harmony import */ var _risk_manager_core_risk_manager_core_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./risk-manager-core/risk-manager-core.component */ "./src/app/pages/client-core/risk-manager/risk-manager-core/risk-manager-core.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








const routes = [
    {
        path: '',
        component: _risk_manager_core_risk_manager_core_component__WEBPACK_IMPORTED_MODULE_3__["RiskManagerCoreComponent"],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'equity-drawdown'
            },
            {
                path: 'equity-drawdown',
                component: _risk_manager_core_equity_drawdown_equity_drawdown_component__WEBPACK_IMPORTED_MODULE_2__["EquityDrawdownComponent"],
                data: { title: 'Risk Manager', breadcrumb: 'Equity Drawdown' }
            },
            {
                path: 'symbol-drawdown',
                component: _risk_manager_core_symbol_drawdown_symbol_drawdown_component__WEBPACK_IMPORTED_MODULE_1__["SymbolDrawdownComponent"],
                data: { title: 'Risk Manager', breadcrumb: 'Symbol Drawdown' }
            },
            {
                path: 'profit-loss',
                component: _risk_manager_core_profit_loss_profit_loss_component__WEBPACK_IMPORTED_MODULE_0__["ProfitLossComponent"],
                data: { title: 'Risk Manager', breadcrumb: 'Profit Loss' }
            },
        ]
    }
];
class RiskManagerRoutingModule {
}
RiskManagerRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: RiskManagerRoutingModule });
RiskManagerRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function RiskManagerRoutingModule_Factory(t) { return new (t || RiskManagerRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](RiskManagerRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](RiskManagerRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/client-core/risk-manager/risk-manager.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/client-core/risk-manager/risk-manager.module.ts ***!
  \***********************************************************************/
/*! exports provided: RiskManagerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiskManagerModule", function() { return RiskManagerModule; });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _risk_manager_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./risk-manager-routing.module */ "./src/app/pages/client-core/risk-manager/risk-manager-routing.module.ts");
/* harmony import */ var _risk_manager_core_risk_manager_core_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./risk-manager-core/risk-manager-core.component */ "./src/app/pages/client-core/risk-manager/risk-manager-core/risk-manager-core.component.ts");
/* harmony import */ var _risk_manager_core_equity_drawdown_equity_drawdown_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./risk-manager-core/equity-drawdown/equity-drawdown.component */ "./src/app/pages/client-core/risk-manager/risk-manager-core/equity-drawdown/equity-drawdown.component.ts");
/* harmony import */ var _risk_manager_core_symbol_drawdown_symbol_drawdown_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./risk-manager-core/symbol-drawdown/symbol-drawdown.component */ "./src/app/pages/client-core/risk-manager/risk-manager-core/symbol-drawdown/symbol-drawdown.component.ts");
/* harmony import */ var _risk_manager_core_profit_loss_profit_loss_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./risk-manager-core/profit-loss/profit-loss.component */ "./src/app/pages/client-core/risk-manager/risk-manager-core/profit-loss/profit-loss.component.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/datepicker/fesm2015/ngx-bootstrap-datepicker.js");











class RiskManagerModule {
}
RiskManagerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: RiskManagerModule });
RiskManagerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function RiskManagerModule_Factory(t) { return new (t || RiskManagerModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _risk_manager_routing_module__WEBPACK_IMPORTED_MODULE_3__["RiskManagerRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"],
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsDatepickerModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RiskManagerModule, { declarations: [_risk_manager_core_risk_manager_core_component__WEBPACK_IMPORTED_MODULE_4__["RiskManagerCoreComponent"], _risk_manager_core_equity_drawdown_equity_drawdown_component__WEBPACK_IMPORTED_MODULE_5__["EquityDrawdownComponent"], _risk_manager_core_symbol_drawdown_symbol_drawdown_component__WEBPACK_IMPORTED_MODULE_6__["SymbolDrawdownComponent"], _risk_manager_core_profit_loss_profit_loss_component__WEBPACK_IMPORTED_MODULE_7__["ProfitLossComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _risk_manager_routing_module__WEBPACK_IMPORTED_MODULE_3__["RiskManagerRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsDatepickerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RiskManagerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_risk_manager_core_risk_manager_core_component__WEBPACK_IMPORTED_MODULE_4__["RiskManagerCoreComponent"], _risk_manager_core_equity_drawdown_equity_drawdown_component__WEBPACK_IMPORTED_MODULE_5__["EquityDrawdownComponent"], _risk_manager_core_symbol_drawdown_symbol_drawdown_component__WEBPACK_IMPORTED_MODULE_6__["SymbolDrawdownComponent"], _risk_manager_core_profit_loss_profit_loss_component__WEBPACK_IMPORTED_MODULE_7__["ProfitLossComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _risk_manager_routing_module__WEBPACK_IMPORTED_MODULE_3__["RiskManagerRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"],
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsDatepickerModule"].forRoot(),
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=client-core-risk-manager-risk-manager-module-es2015.js.map