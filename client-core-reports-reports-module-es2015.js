(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["client-core-reports-reports-module"],{

/***/ "./src/app/pages/client-core/reports/reports-core/close-trades/close-trades.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/client-core/reports/reports-core/close-trades/close-trades.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: CloseTradesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseTradesComponent", function() { return CloseTradesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/services/global.service */ "./src/app/shared/services/global.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/datepicker/fesm2015/ngx-bootstrap-datepicker.js");






function CloseTradesComponent_option_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const account_r398 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", account_r398.sAccountPlan.MT4Account);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", account_r398.sAccountPlan.MT4Account, " ");
} }
function CloseTradesComponent_tr_59_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "BUY");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CloseTradesComponent_tr_59_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "SELL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CloseTradesComponent_tr_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CloseTradesComponent_tr_59_span_2_Template, 2, 0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CloseTradesComponent_tr_59_span_3_Template, 2, 0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const close_r399 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", close_r399.uTradeFlag == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", close_r399.uTradeFlag == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](close_r399.Ticket);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](close_r399.Symbol);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](close_r399.Lot);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](close_r399.Open_Price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](close_r399.Profit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](close_r399.Close_Price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](18, 9, close_r399.Close_Time, "dd-MMM-yy h : mm : ss a "));
} }
function CloseTradesComponent_tr_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "no record found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CloseTradesComponent {
    constructor(global, datepipe) {
        this.global = global;
        this.datepipe = datepipe;
        this.profileAccounts = [];
        this.closeTradess = [];
        this.accountNumber = '';
        this.accountType = '';
        this.colorTheme = 'theme-blue';
    }
    profileAccount(accountTyp) {
        const data = {
            ProfileId: localStorage.getItem('LoggedDealermasterid'),
            LoginId: localStorage.getItem('LoggedDealermasterid')
        };
        this.global.getProfileAccounts(data).subscribe((res) => {
            this.profileAccounts = res.lstAccount.filter((account) => {
                // tslint:disable-next-line: triple-equals
                if (account.sAccountPlan.uAccount_Type == accountTyp) {
                    return Object.assign(account.sAccountPlan, account.sUserInfo);
                }
            });
        }, err => {
            console.log(err);
        });
    }
    getCloseTrades(acc, dt) {
        this.profileAccounts.filter(manager => {
            if (manager.sUserInfo.MT4Account === acc) {
                this.managerindex = manager.sAccountPlan.uManager;
            }
        });
        const queryString = {
            Account: acc,
            ManagerIndex: this.managerindex,
            _StartTm: this.datepipe.transform(dt._bsValue[0], 'yyyy-MM-dd hh:mm:ss'),
            _EndTm: this.datepipe.transform(dt._bsValue[1], 'yyyy-MM-dd hh:mm:ss')
        };
        this.global.getClosePositions(queryString).subscribe((closeAccount) => {
            this.closeTradess = closeAccount.lstCLOSE;
            console.log(this.closeTradess);
        }, err => {
            console.log(err);
        });
    }
    ngOnInit() {
    }
}
CloseTradesComponent.ɵfac = function CloseTradesComponent_Factory(t) { return new (t || CloseTradesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"])); };
CloseTradesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CloseTradesComponent, selectors: [["app-close-trades"]], decls: 61, vars: 9, consts: [["closeTrades", "ngForm"], [1, "row", "fromarea", "rounded"], [1, "col-md-3"], [1, "form-group"], [1, "asterick"], ["name", "accountType", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["value", "", 3, "disabled"], ["value", "0"], ["value", "1"], ["name", "accountNumber", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["account", "ngModel"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["name", "datechoose", "type", "text", "placeholder", "Select Date", "bsDaterangepicker", "", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["datepickerYMD", "bsDaterangepicker"], [1, "col-md-2", 2, "display", "flex", "align-items", "center"], ["type", "button", 1, "px-4", "btn", "btn-primary", "btn-sm", "mt-3", 2, "padding", "6px", "margin-top", "12px!important", 3, "disabled", "click"], [1, "table-container", "table-responsive", "mb-3"], [1, "table", "table-hover", "main-txt-color", "mb-0"], [1, "table-header-bg", "table-header-color"], [1, "font-weight-500", "bd-color", "text-capitalize", "align-middle"], [1, "secondary-txt-color"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "ngValue"], [1, "bd-color", "text-capitalize", "align-middle"], ["colspan", "8"], [2, "width", "100%", "text-align", "center"]], template: function CloseTradesComponent_Template(rf, ctx) { if (rf & 1) {
        const _r402 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Account Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CloseTradesComponent_Template_select_ngModelChange_9_listener($event) { return ctx.accountType = $event; })("change", function CloseTradesComponent_Template_select_change_9_listener($event) { return ctx.profileAccount($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Select Account Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Live");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Account Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "select", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CloseTradesComponent_Template_select_ngModelChange_22_listener($event) { return ctx.accountNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Select Account Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, CloseTradesComponent_option_26_Template, 2, 2, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Select Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CloseTradesComponent_Template_input_ngModelChange_33_listener($event) { return ctx.datechoose = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CloseTradesComponent_Template_button_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r402); const _r393 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23); const _r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34); return ctx.getCloseTrades(_r393.value, _r395); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "table", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "thead", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Trade Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Ticket");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Symbol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Lot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Open Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Profit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Close price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Close time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "tbody", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, CloseTradesComponent_tr_59_Template, 19, 12, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, CloseTradesComponent_tr_60_Template, 4, 0, "tr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r392 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.accountType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.accountNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.profileAccounts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.datechoose);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r392.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.closeTradess);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.closeTradess.length == 0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_4__["BsDaterangepickerInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_4__["BsDaterangepickerDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: [".fromarea[_ngcontent-%COMP%] {\n  padding: 12px 0px;\n  background: #eff3f6;\n  margin: 10px 1px;\n}\n\n*[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n\ntransaction-form-container[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n}\n\ntransaction-form-container[_ngcontent-%COMP%]   .traction-from-box[_ngcontent-%COMP%] {\n  padding: 15px 15px;\n  border-radius: 4px;\n  border: 1px solid #dfe2e4;\n  -webkit-transition: all 5s ease-out;\n  transition: all 5s ease-out;\n}\n\ntransaction-form-container[_ngcontent-%COMP%]   .traction-from-box[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  line-height: 20px;\n  margin-bottom: 15px;\n}\n\ntransaction-form-container[_ngcontent-%COMP%]   .traction-from-box[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 19px;\n  font-weight: 300;\n}\n\ntransaction-form-container[_ngcontent-%COMP%]   .traction-from-box[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\ntransaction-form-container[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  position: relative;\n  top: -3px;\n}\n\n.right-tabBtn-row[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 20px;\n  top: 7px;\n}\n\n.table-bordered[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-bordered[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom-width: 1px;\n  padding: 0.5rem;\n}\n\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-right: 15px;\n  margin-left: 15px;\n}\n\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n\nthead[_ngcontent-%COMP%]   th.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n\n.tab-inner-content[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n}\n\ntbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(even) {\n  background: #f8f9fa;\n}\n\ntbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(odd) {\n  background: #eff3f6;\n}\n\n.table-pagination[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  padding-top: 1rem;\n  background: #eff3f6;\n}\n\n@-webkit-keyframes spinner {\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes spinner {\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n.btn-spinner[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 255, 0.6);\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n\n.btn-spinner[_ngcontent-%COMP%]:before {\n  content: \"\";\n  box-sizing: border-box;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 20px;\n  height: 20px;\n  margin-top: -10px;\n  margin-left: -10px;\n  border-radius: 50%;\n  border: 2px solid #ffffff;\n  border-top-color: #000000;\n  -webkit-animation: spinner 0.8s linear infinite;\n          animation: spinner 0.8s linear infinite;\n}\n\n.table-filter-area[_ngcontent-%COMP%] {\n  position: relative;\n  background: #eff3f6;\n  padding: 15px;\n  border: 1px solid #dee2e6;\n  border-bottom: 0px;\n  border-radius: 4px 4px 0 0;\n  padding-bottom: 0px;\n}\n\n.swap-img-container[_ngcontent-%COMP%] {\n  background: #f3cf65;\n  padding: 2px 6px;\n  border-radius: 50%;\n}\n\n.swap-img-container[_ngcontent-%COMP%]   .swap-img[_ngcontent-%COMP%] {\n  width: 20px;\n  position: relative;\n  top: -1px;\n}\n\n.material-icons[_ngcontent-%COMP%] {\n  font-size: 24px;\n  position: relative;\n  top: 5px;\n  margin-right: 2px;\n  color: #007bff;\n}\n\n.history-title[_ngcontent-%COMP%] {\n  font-size: 17px;\n  padding: 10px 0;\n  font-weight: 400;\n}\n\n.gateway_img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n}\n\ntbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(odd) {\n  background: #eff3f6;\n}\n\ntbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(even) {\n  background: #f8f9fa;\n}\n\ntable[_ngcontent-%COMP%] {\n  border-collapse: separate;\n  border-spacing: 0 6px;\n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-top: 0px solid #dee2e6;\n}\n\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-bottom: 0px solid #dee2e6;\n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-top: 10px !important;\n  padding-bottom: 10px !important;\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2xpZW50LWNvcmUvcmVwb3J0cy9yZXBvcnRzLWNvcmUvY2xvc2UtdHJhZGVzL0Y6XFxuZXd0cmFkZXJcXHRyYWRlcjQtNS9zcmNcXGFwcFxccGFnZXNcXGNsaWVudC1jb3JlXFxyZXBvcnRzXFxyZXBvcnRzLWNvcmVcXGNsb3NlLXRyYWRlc1xcY2xvc2UtdHJhZGVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9jbGllbnQtY29yZS9yZXBvcnRzL3JlcG9ydHMtY29yZS9jbG9zZS10cmFkZXMvY2xvc2UtdHJhZGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FER0E7RUFDSSwwQkFBQTtBQ0FKOztBREdBO0VBQ0ksa0JBQUE7QUNBSjs7QURDSTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1DQUFBO0VBQUEsMkJBQUE7QUNDUjs7QURBUTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7QUNFWjs7QUREWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0doQjs7QUREWTtFQUNJLGVBQUE7QUNHaEI7O0FEQ0k7RUFDSSxrQkFBQTtFQUNBLFNBQUE7QUNDUjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7QUNBSjs7QURHQTs7RUFFSSx3QkFBQTtFQUNBLGVBQUE7QUNBSjs7QURHQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDQUo7O0FEQ0k7RUFDSSxrQkFBQTtBQ0NSOztBREVRO0VBQ0ksbUJBQUE7QUNBWjs7QURLQTtFQUNJLGdCQUFBO0FDRko7O0FES0E7RUFDSSxtQkFBQTtBQ0ZKOztBREtBO0VBQ0ksbUJBQUE7QUNGSjs7QURLQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0ZKOztBREtBO0VBQ0k7SUFDSSxpQ0FBQTtZQUFBLHlCQUFBO0VDRk47QUFDRjs7QUREQTtFQUNJO0lBQ0ksaUNBQUE7WUFBQSx5QkFBQTtFQ0ZOO0FBQ0Y7O0FES0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtBQ0hKOztBRE1BO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLCtDQUFBO1VBQUEsdUNBQUE7QUNISjs7QURNQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7QUNISjs7QURNQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0hKOztBREtJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ0hSOztBRE9BO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0pKOztBRE9BO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0pKOztBRFFJO0VBQ0ksWUFBQTtBQ0xSOztBRFNBO0VBQ0ksbUJBQUE7QUNOSjs7QURTQTtFQUNJLG1CQUFBO0FDTko7O0FEU0E7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0FDTko7O0FEU0E7O0VBRUksNkJBQUE7QUNOSjs7QURTQTtFQUNJLGdDQUFBO0FDTko7O0FEU0E7O0VBRUksNEJBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7QUNOSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NsaWVudC1jb3JlL3JlcG9ydHMvcmVwb3J0cy1jb3JlL2Nsb3NlLXRyYWRlcy9jbG9zZS10cmFkZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnJvbWFyZWEge1xyXG4gICAgcGFkZGluZzogMTJweCAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWZmM2Y2O1xyXG4gICAgbWFyZ2luOiAxMHB4IDFweDtcclxuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICNkZmUyZTQ7XHJcbn1cclxuXHJcbioge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbnRyYW5zYWN0aW9uLWZvcm0tY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMTJweDtcclxuICAgIC50cmFjdGlvbi1mcm9tLWJveCB7XHJcbiAgICAgICAgcGFkZGluZzogMTVweCAxNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGZlMmU0O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCA1cyBlYXNlLW91dDtcclxuICAgICAgICAuaGVhZGluZyB7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzbWFsbCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2xvc2UtYnRuIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdG9wOiAtM3B4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ucmlnaHQtdGFiQnRuLXJvdyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMjBweDtcclxuICAgIHRvcDogN3B4O1xyXG59XHJcblxyXG4udGFibGUtYm9yZGVyZWQgdGhlYWQgdGgsXHJcbi50YWJsZS1ib3JkZXJlZCB0aGVhZCB0ZCB7XHJcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XHJcbiAgICBwYWRkaW5nOiAuNTByZW07XHJcbn1cclxuXHJcbnRoZWFkIHRoIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgfVxyXG4gICAgJi5hY3RpdmUge1xyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnRhYi1pbm5lci1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IC43NXJlbTtcclxufVxyXG5cclxudGJvZHk+dHI6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgIGJhY2tncm91bmQ6ICNmOGY5ZmFcclxufVxyXG5cclxudGJvZHk+dHI6bnRoLWNoaWxkKG9kZCkge1xyXG4gICAgYmFja2dyb3VuZDogI2VmZjNmNlxyXG59XHJcblxyXG4udGFibGUtcGFnaW5hdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAwLjc1cmVtO1xyXG4gICAgcGFkZGluZy10b3A6IDFyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWZmM2Y2O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNwaW5uZXIge1xyXG4gICAgdG8ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idG4tc3Bpbm5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMjU1LCAwLjYpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxufVxyXG5cclxuLmJ0bi1zcGlubmVyOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogIzAwMDAwMDtcclxuICAgIGFuaW1hdGlvbjogc3Bpbm5lciAuOHMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcblxyXG4udGFibGUtZmlsdGVyLWFyZWEge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZDogI2VmZjNmNjtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG4uc3dhcC1pbWctY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmM2NmNjU7XHJcbiAgICBwYWRkaW5nOiAycHggNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgLy8gbWFyZ2luOiAwIDRweDtcclxuICAgIC5zd2FwLWltZyB7XHJcbiAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRvcDogLTFweDtcclxuICAgIH1cclxufVxyXG5cclxuLm1hdGVyaWFsLWljb25zIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcbiAgICBjb2xvcjogIzAwN2JmZjtcclxufVxyXG5cclxuLmhpc3RvcnktdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLmdhdGV3YXlfaW1nIHtcclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG50Ym9keT50cjpudGgtY2hpbGQob2RkKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWZmM2Y2O1xyXG59XHJcblxyXG50Ym9keT50cjpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxufVxyXG5cclxudGFibGUge1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAwIDZweDtcclxufVxyXG5cclxuLnRhYmxlIHRoLFxyXG4udGFibGUgdGQge1xyXG4gICAgYm9yZGVyLXRvcDogMHB4IHNvbGlkICNkZWUyZTY7XHJcbn1cclxuXHJcbi50YWJsZSB0aGVhZCB0aCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAwcHggc29saWQgI2RlZTJlNjtcclxufVxyXG5cclxuLnRhYmxlIHRoLFxyXG4udGFibGUgdGQge1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn0iLCIuZnJvbWFyZWEge1xuICBwYWRkaW5nOiAxMnB4IDBweDtcbiAgYmFja2dyb3VuZDogI2VmZjNmNjtcbiAgbWFyZ2luOiAxMHB4IDFweDtcbn1cblxuKiB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG50cmFuc2FjdGlvbi1mb3JtLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDEwcHggMTJweDtcbn1cbnRyYW5zYWN0aW9uLWZvcm0tY29udGFpbmVyIC50cmFjdGlvbi1mcm9tLWJveCB7XG4gIHBhZGRpbmc6IDE1cHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGZlMmU0O1xuICB0cmFuc2l0aW9uOiBhbGwgNXMgZWFzZS1vdXQ7XG59XG50cmFuc2FjdGlvbi1mb3JtLWNvbnRhaW5lciAudHJhY3Rpb24tZnJvbS1ib3ggLmhlYWRpbmcge1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbnRyYW5zYWN0aW9uLWZvcm0tY29udGFpbmVyIC50cmFjdGlvbi1mcm9tLWJveCAuaGVhZGluZyAudGl0bGUge1xuICBmb250LXNpemU6IDE5cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG50cmFuc2FjdGlvbi1mb3JtLWNvbnRhaW5lciAudHJhY3Rpb24tZnJvbS1ib3ggLmhlYWRpbmcgc21hbGwge1xuICBmb250LXNpemU6IDEycHg7XG59XG50cmFuc2FjdGlvbi1mb3JtLWNvbnRhaW5lciAuY2xvc2UtYnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0zcHg7XG59XG5cbi5yaWdodC10YWJCdG4tcm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbiAgdG9wOiA3cHg7XG59XG5cbi50YWJsZS1ib3JkZXJlZCB0aGVhZCB0aCxcbi50YWJsZS1ib3JkZXJlZCB0aGVhZCB0ZCB7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcbiAgcGFkZGluZzogMC41cmVtO1xufVxuXG50aGVhZCB0aCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cbnRoZWFkIHRoIHNwYW4ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG50aGVhZCB0aC5hY3RpdmUgc3BhbiB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi50YWItaW5uZXItY29udGVudCB7XG4gIHBhZGRpbmc6IDAuNzVyZW07XG59XG5cbnRib2R5ID4gdHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbn1cblxudGJvZHkgPiB0cjpudGgtY2hpbGQob2RkKSB7XG4gIGJhY2tncm91bmQ6ICNlZmYzZjY7XG59XG5cbi50YWJsZS1wYWdpbmF0aW9uIHtcbiAgcGFkZGluZzogMC43NXJlbTtcbiAgcGFkZGluZy10b3A6IDFyZW07XG4gIGJhY2tncm91bmQ6ICNlZmYzZjY7XG59XG5cbkBrZXlmcmFtZXMgc3Bpbm5lciB7XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG4uYnRuLXNwaW5uZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDI1NSwgMC42KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG59XG5cbi5idG4tc3Bpbm5lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZmZmZjtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzAwMDAwMDtcbiAgYW5pbWF0aW9uOiBzcGlubmVyIDAuOHMgbGluZWFyIGluZmluaXRlO1xufVxuXG4udGFibGUtZmlsdGVyLWFyZWEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICNlZmYzZjY7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XG4gIGJvcmRlci1ib3R0b206IDBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG5cbi5zd2FwLWltZy1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiAjZjNjZjY1O1xuICBwYWRkaW5nOiAycHggNnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uc3dhcC1pbWctY29udGFpbmVyIC5zd2FwLWltZyB7XG4gIHdpZHRoOiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTFweDtcbn1cblxuLm1hdGVyaWFsLWljb25zIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgY29sb3I6ICMwMDdiZmY7XG59XG5cbi5oaXN0b3J5LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5nYXRld2F5X2ltZyBpbWcge1xuICB3aWR0aDogMTAwcHg7XG59XG5cbnRib2R5ID4gdHI6bnRoLWNoaWxkKG9kZCkge1xuICBiYWNrZ3JvdW5kOiAjZWZmM2Y2O1xufVxuXG50Ym9keSA+IHRyOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDAgNnB4O1xufVxuXG4udGFibGUgdGgsXG4udGFibGUgdGQge1xuICBib3JkZXItdG9wOiAwcHggc29saWQgI2RlZTJlNjtcbn1cblxuLnRhYmxlIHRoZWFkIHRoIHtcbiAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkICNkZWUyZTY7XG59XG5cbi50YWJsZSB0aCxcbi50YWJsZSB0ZCB7XG4gIHBhZGRpbmctdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CloseTradesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-close-trades',
                templateUrl: './close-trades.component.html',
                styleUrls: ['./close-trades.component.scss']
            }]
    }], function () { return [{ type: _shared_services_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/client-core/reports/reports-core/open-trades/open-trades.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/client-core/reports/reports-core/open-trades/open-trades.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: OpenTradesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenTradesComponent", function() { return OpenTradesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/services/global.service */ "./src/app/shared/services/global.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function OpenTradesComponent_option_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const account_r409 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", account_r409.sAccountPlan.MT4Account);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", account_r409.sAccountPlan.MT4Account, " ");
} }
function OpenTradesComponent_tr_52_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "BUY");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OpenTradesComponent_tr_52_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "SELL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OpenTradesComponent_tr_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OpenTradesComponent_tr_52_span_2_Template, 2, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, OpenTradesComponent_tr_52_span_3_Template, 2, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const trades_r410 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", trades_r410.BUY_SELL == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", trades_r410.BUY_SELL == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](trades_r410.Ticket);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](trades_r410.Symbol);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](trades_r410.Lot);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](trades_r410.Open_Price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](trades_r410.Profit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](trades_r410.Stop_Loss);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](18, 9, trades_r410.Open_Time, "dd-MMM-yy h : mm : ss a "));
} }
function OpenTradesComponent_tr_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "no record found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class OpenTradesComponent {
    constructor(global) {
        this.global = global;
        this.profileAccounts = [];
        this.openTradess = [];
        this.accountNumber = '';
        this.accountTypee = '';
    }
    profileAccount(accountTyp) {
        const data = {
            ProfileId: localStorage.getItem('LoggedDealermasterid'),
            LoginId: localStorage.getItem('LoggedDealermasterid')
        };
        this.global.getProfileAccounts(data).subscribe((res) => {
            this.profileAccounts = res.lstAccount.filter((account) => {
                // tslint:disable-next-line: triple-equals
                if (account.sAccountPlan.uAccount_Type == accountTyp) {
                    return Object.assign(account.sAccountPlan, account.sUserInfo);
                }
            });
        }, err => {
            console.log(err);
        });
    }
    getOpenTrades(acc) {
        this.profileAccounts.find(manager => {
            if (manager.sUserInfo.MT4Account == acc) {
                this.managerindex = manager.sAccountPlan.uManager;
            }
        });
        const queryString = {
            Account: acc,
            ManagerIndex: this.managerindex
        };
        this.global.getOpenPositions(queryString).subscribe((openAccount) => {
            //  let data = JSON.stringify();
            this.openTradess = openAccount.lstOPEN;
            console.log(this.openTradess);
        }, err => {
            console.log(err);
        });
    }
    ngOnInit() {
    }
}
OpenTradesComponent.ɵfac = function OpenTradesComponent_Factory(t) { return new (t || OpenTradesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"])); };
OpenTradesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OpenTradesComponent, selectors: [["app-open-trades"]], decls: 54, vars: 8, consts: [["openTrades", "ngForm"], [1, "row", "fromarea", "rounded"], [1, "col-md-4"], [1, "form-group"], [1, "asterick"], ["name", "accountTypee", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["accountType", ""], ["value", "", 3, "disabled"], ["value", "0"], ["value", "1"], ["name", "accountNumber", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["account", "ngModel"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "col-md-3", 2, "display", "flex", "align-items", "center"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", "mt-3", "px-4", 2, "padding", "6px", "margin-top", "12px!important", 3, "disabled", "click"], [1, "table-container", "table-responsive", "mb-3"], [1, "table", "table-hover", "main-txt-color", "mb-0"], [1, "table-header-bg", "table-header-color"], [1, "font-weight-500", "bd-color", "text-capitalize", "align-middle"], [1, "secondary-txt-color"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "ngValue"], [1, "bd-color", "text-capitalize", "align-middle"], ["colspan", "8"], [2, "text-align", "center", "width", "100%"]], template: function OpenTradesComponent_Template(rf, ctx) { if (rf & 1) {
        const _r413 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Account Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "select", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OpenTradesComponent_Template_select_ngModelChange_9_listener($event) { return ctx.accountTypee = $event; })("change", function OpenTradesComponent_Template_select_change_9_listener($event) { return ctx.profileAccount($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Select Account type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Live");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Account Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "select", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OpenTradesComponent_Template_select_ngModelChange_23_listener($event) { return ctx.accountNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Select Account Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, OpenTradesComponent_option_27_Template, 2, 2, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OpenTradesComponent_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r413); const _r405 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24); return ctx.getOpenTrades(_r405.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "table", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "thead", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Trade type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Ticket");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Symbol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Lot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Open price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Profit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Stop loss");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Open time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "tbody", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, OpenTradesComponent_tr_52_Template, 19, 12, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, OpenTradesComponent_tr_53_Template, 4, 0, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r403 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.accountTypee);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.accountNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.profileAccounts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r403.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.openTradess);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.openTradess.length == 0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: [".fromarea[_ngcontent-%COMP%] {\n  padding: 10px 0px;\n  background: #eff3f6;\n  margin: 10px 1px;\n}\n\n.transaction-form-container[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n}\n\n.transaction-form-container[_ngcontent-%COMP%]   .traction-from-box[_ngcontent-%COMP%] {\n  padding: 15px 15px;\n  border-radius: 4px;\n  border: 1px solid #dfe2e4;\n  -webkit-transition: all 5s ease-out;\n  transition: all 5s ease-out;\n}\n\n.transaction-form-container[_ngcontent-%COMP%]   .traction-from-box[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  line-height: 20px;\n  margin-bottom: 15px;\n}\n\n.transaction-form-container[_ngcontent-%COMP%]   .traction-from-box[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 19px;\n  font-weight: 300;\n}\n\n.transaction-form-container[_ngcontent-%COMP%]   .traction-from-box[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.transaction-form-container[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  position: relative;\n  top: -3px;\n}\n\n.right-tabBtn-row[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 20px;\n  top: 7px;\n}\n\n.table-bordered[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-bordered[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom-width: 1px;\n  padding: 0.5rem;\n}\n\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-right: 15px;\n  margin-left: 15px;\n  border-bottom: 0px solid #dee2e6;\n}\n\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n\nthead[_ngcontent-%COMP%]   th.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n\n.tab-inner-content[_ngcontent-%COMP%] {\n  padding: 0px 5px;\n}\n\ntbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(even) {\n  background: #f8f9fa;\n}\n\ntbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(odd) {\n  background: #eff3f6;\n}\n\n.table-pagination[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  padding-top: 1rem;\n  background: #eff3f6;\n}\n\n@-webkit-keyframes spinner {\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes spinner {\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n.btn-spinner[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 255, 0.6);\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n\n.btn-spinner[_ngcontent-%COMP%]:before {\n  content: \"\";\n  box-sizing: border-box;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 20px;\n  height: 20px;\n  margin-top: -10px;\n  margin-left: -10px;\n  border-radius: 50%;\n  border: 2px solid #ffffff;\n  border-top-color: #000000;\n  -webkit-animation: spinner 0.8s linear infinite;\n          animation: spinner 0.8s linear infinite;\n}\n\n.table-filter-area[_ngcontent-%COMP%] {\n  position: relative;\n  background: #eff3f6;\n  padding: 15px;\n  border: 1px solid #dee2e6;\n  border-bottom: 0px;\n  border-radius: 4px 4px 0 0;\n  padding-bottom: 0px;\n}\n\n.swap-img-container[_ngcontent-%COMP%] {\n  background: #f3cf65;\n  padding: 2px 6px;\n  border-radius: 50%;\n}\n\n.swap-img-container[_ngcontent-%COMP%]   .swap-img[_ngcontent-%COMP%] {\n  width: 20px;\n  position: relative;\n  top: -1px;\n}\n\n.material-icons[_ngcontent-%COMP%] {\n  font-size: 24px;\n  position: relative;\n  top: 5px;\n  margin-right: 2px;\n  color: #007bff;\n}\n\n.history-title[_ngcontent-%COMP%] {\n  font-size: 17px;\n  padding: 10px 0;\n  font-weight: 400;\n}\n\n.gateway_img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n}\n\ntbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(odd) {\n  background: #eff3f6;\n}\n\ntbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(even) {\n  background: #f8f9fa;\n}\n\ntable[_ngcontent-%COMP%] {\n  border-collapse: separate;\n  border-spacing: 0 6px;\n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-top: 0px solid #dee2e6;\n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-top: 10px !important;\n  padding-bottom: 10px !important;\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2xpZW50LWNvcmUvcmVwb3J0cy9yZXBvcnRzLWNvcmUvb3Blbi10cmFkZXMvRjpcXG5ld3RyYWRlclxcdHJhZGVyNC01L3NyY1xcYXBwXFxwYWdlc1xcY2xpZW50LWNvcmVcXHJlcG9ydHNcXHJlcG9ydHMtY29yZVxcb3Blbi10cmFkZXNcXG9wZW4tdHJhZGVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9jbGllbnQtY29yZS9yZXBvcnRzL3JlcG9ydHMtY29yZS9vcGVuLXRyYWRlcy9vcGVuLXRyYWRlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBRE1BO0VBQ0ksa0JBQUE7QUNISjs7QURJSTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1DQUFBO0VBQUEsMkJBQUE7QUNGUjs7QURHUTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7QUNEWjs7QURFWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0FoQjs7QURFWTtFQUNJLGVBQUE7QUNBaEI7O0FESUk7RUFDSSxrQkFBQTtFQUNBLFNBQUE7QUNGUjs7QURNQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7QUNISjs7QURNQTs7RUFFSSx3QkFBQTtFQUNBLGVBQUE7QUNISjs7QURNQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7QUNISjs7QURJSTtFQUNJLGtCQUFBO0FDRlI7O0FES1E7RUFDSSxtQkFBQTtBQ0haOztBRFFBO0VBQ0ksZ0JBQUE7QUNMSjs7QURRQTtFQUNJLG1CQUFBO0FDTEo7O0FEUUE7RUFDSSxtQkFBQTtBQ0xKOztBRFFBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDTEo7O0FEUUE7RUFDSTtJQUNJLGlDQUFBO1lBQUEseUJBQUE7RUNMTjtBQUNGOztBREVBO0VBQ0k7SUFDSSxpQ0FBQTtZQUFBLHlCQUFBO0VDTE47QUFDRjs7QURRQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0FDTko7O0FEU0E7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsK0NBQUE7VUFBQSx1Q0FBQTtBQ05KOztBRFNBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtBQ05KOztBRFNBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDTko7O0FEUUk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FDTlI7O0FEVUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDUEo7O0FEVUE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDUEo7O0FEV0k7RUFDSSxZQUFBO0FDUlI7O0FEWUE7RUFDSSxtQkFBQTtBQ1RKOztBRFlBO0VBQ0ksbUJBQUE7QUNUSjs7QURZQTtFQUNJLHlCQUFBO0VBQ0EscUJBQUE7QUNUSjs7QURZQTs7RUFFSSw2QkFBQTtBQ1RKOztBRFlBOztFQUVJLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0FDVEoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jbGllbnQtY29yZS9yZXBvcnRzL3JlcG9ydHMtY29yZS9vcGVuLXRyYWRlcy9vcGVuLXRyYWRlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mcm9tYXJlYSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcclxuICAgIGJhY2tncm91bmQ6ICNlZmYzZjY7XHJcbiAgICBtYXJnaW46IDEwcHggMXB4O1xyXG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgI2RmZTJlNDtcclxufVxyXG5cclxuLy8gKiB7XHJcbi8vICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuLy8gfVxyXG4udHJhbnNhY3Rpb24tZm9ybS1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMTBweCAxMnB4O1xyXG4gICAgLnRyYWN0aW9uLWZyb20tYm94IHtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4IDE1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZmUyZTQ7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDVzIGVhc2Utb3V0O1xyXG4gICAgICAgIC5oZWFkaW5nIHtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNtYWxsIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jbG9zZS1idG4ge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0b3A6IC0zcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5yaWdodC10YWJCdG4tcm93IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgdG9wOiA3cHg7XHJcbn1cclxuXHJcbi50YWJsZS1ib3JkZXJlZCB0aGVhZCB0aCxcclxuLnRhYmxlLWJvcmRlcmVkIHRoZWFkIHRkIHtcclxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcclxuICAgIHBhZGRpbmc6IC41MHJlbTtcclxufVxyXG5cclxudGhlYWQgdGgge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAwcHggc29saWQgI2RlZTJlNjtcclxuICAgIHNwYW4ge1xyXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIH1cclxuICAgICYuYWN0aXZlIHtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi50YWItaW5uZXItY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAwcHggNXB4O1xyXG59XHJcblxyXG50Ym9keT50cjpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgYmFja2dyb3VuZDogI2Y4ZjlmYVxyXG59XHJcblxyXG50Ym9keT50cjpudGgtY2hpbGQob2RkKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWZmM2Y2XHJcbn1cclxuXHJcbi50YWJsZS1wYWdpbmF0aW9uIHtcclxuICAgIHBhZGRpbmc6IDAuNzVyZW07XHJcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcclxuICAgIGJhY2tncm91bmQ6ICNlZmYzZjY7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc3Bpbm5lciB7XHJcbiAgICB0byB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIH1cclxufVxyXG5cclxuLmJ0bi1zcGlubmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAyNTUsIDAuNik7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG59XHJcblxyXG4uYnRuLXNwaW5uZXI6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmZmZmY7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjMDAwMDAwO1xyXG4gICAgYW5pbWF0aW9uOiBzcGlubmVyIC44cyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbi50YWJsZS1maWx0ZXItYXJlYSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWZmM2Y2O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgICBib3JkZXItYm90dG9tOiAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbi5zd2FwLWltZy1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2YzY2Y2NTtcclxuICAgIHBhZGRpbmc6IDJweCA2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAvLyBtYXJnaW46IDAgNHB4O1xyXG4gICAgLnN3YXAtaW1nIHtcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdG9wOiAtMXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubWF0ZXJpYWwtaWNvbnMge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcclxuICAgIGNvbG9yOiAjMDA3YmZmO1xyXG59XHJcblxyXG4uaGlzdG9yeS10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4uZ2F0ZXdheV9pbWcge1xyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbnRib2R5PnRyOm50aC1jaGlsZChvZGQpIHtcclxuICAgIGJhY2tncm91bmQ6ICNlZmYzZjY7XHJcbn1cclxuXHJcbnRib2R5PnRyOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDAgNnB4O1xyXG59XHJcblxyXG4udGFibGUgdGgsXHJcbi50YWJsZSB0ZCB7XHJcbiAgICBib3JkZXItdG9wOiAwcHggc29saWQgI2RlZTJlNjtcclxufVxyXG5cclxuLnRhYmxlIHRoLFxyXG4udGFibGUgdGQge1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn0iLCIuZnJvbWFyZWEge1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgYmFja2dyb3VuZDogI2VmZjNmNjtcbiAgbWFyZ2luOiAxMHB4IDFweDtcbn1cblxuLnRyYW5zYWN0aW9uLWZvcm0tY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTBweCAxMnB4O1xufVxuLnRyYW5zYWN0aW9uLWZvcm0tY29udGFpbmVyIC50cmFjdGlvbi1mcm9tLWJveCB7XG4gIHBhZGRpbmc6IDE1cHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGZlMmU0O1xuICB0cmFuc2l0aW9uOiBhbGwgNXMgZWFzZS1vdXQ7XG59XG4udHJhbnNhY3Rpb24tZm9ybS1jb250YWluZXIgLnRyYWN0aW9uLWZyb20tYm94IC5oZWFkaW5nIHtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4udHJhbnNhY3Rpb24tZm9ybS1jb250YWluZXIgLnRyYWN0aW9uLWZyb20tYm94IC5oZWFkaW5nIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi50cmFuc2FjdGlvbi1mb3JtLWNvbnRhaW5lciAudHJhY3Rpb24tZnJvbS1ib3ggLmhlYWRpbmcgc21hbGwge1xuICBmb250LXNpemU6IDEycHg7XG59XG4udHJhbnNhY3Rpb24tZm9ybS1jb250YWluZXIgLmNsb3NlLWJ0biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtM3B4O1xufVxuXG4ucmlnaHQtdGFiQnRuLXJvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwcHg7XG4gIHRvcDogN3B4O1xufVxuXG4udGFibGUtYm9yZGVyZWQgdGhlYWQgdGgsXG4udGFibGUtYm9yZGVyZWQgdGhlYWQgdGQge1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbn1cblxudGhlYWQgdGgge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGJvcmRlci1ib3R0b206IDBweCBzb2xpZCAjZGVlMmU2O1xufVxudGhlYWQgdGggc3BhbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbnRoZWFkIHRoLmFjdGl2ZSBzcGFuIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLnRhYi1pbm5lci1jb250ZW50IHtcbiAgcGFkZGluZzogMHB4IDVweDtcbn1cblxudGJvZHkgPiB0cjpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xufVxuXG50Ym9keSA+IHRyOm50aC1jaGlsZChvZGQpIHtcbiAgYmFja2dyb3VuZDogI2VmZjNmNjtcbn1cblxuLnRhYmxlLXBhZ2luYXRpb24ge1xuICBwYWRkaW5nOiAwLjc1cmVtO1xuICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgYmFja2dyb3VuZDogI2VmZjNmNjtcbn1cblxuQGtleWZyYW1lcyBzcGlubmVyIHtcbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbi5idG4tc3Bpbm5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMjU1LCAwLjYpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbn1cblxuLmJ0bi1zcGlubmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmO1xuICBib3JkZXItdG9wLWNvbG9yOiAjMDAwMDAwO1xuICBhbmltYXRpb246IHNwaW5uZXIgMC44cyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbi50YWJsZS1maWx0ZXItYXJlYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogI2VmZjNmNjtcbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcbiAgYm9yZGVyLWJvdHRvbTogMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cblxuLnN3YXAtaW1nLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6ICNmM2NmNjU7XG4gIHBhZGRpbmc6IDJweCA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5zd2FwLWltZy1jb250YWluZXIgLnN3YXAtaW1nIHtcbiAgd2lkdGg6IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMXB4O1xufVxuXG4ubWF0ZXJpYWwtaWNvbnMge1xuICBmb250LXNpemU6IDI0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA1cHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBjb2xvcjogIzAwN2JmZjtcbn1cblxuLmhpc3RvcnktdGl0bGUge1xuICBmb250LXNpemU6IDE3cHg7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmdhdGV3YXlfaW1nIGltZyB7XG4gIHdpZHRoOiAxMDBweDtcbn1cblxudGJvZHkgPiB0cjpudGgtY2hpbGQob2RkKSB7XG4gIGJhY2tncm91bmQ6ICNlZmYzZjY7XG59XG5cbnRib2R5ID4gdHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbn1cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuICBib3JkZXItc3BhY2luZzogMCA2cHg7XG59XG5cbi50YWJsZSB0aCxcbi50YWJsZSB0ZCB7XG4gIGJvcmRlci10b3A6IDBweCBzb2xpZCAjZGVlMmU2O1xufVxuXG4udGFibGUgdGgsXG4udGFibGUgdGQge1xuICBwYWRkaW5nLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEzcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OpenTradesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-open-trades',
                templateUrl: './open-trades.component.html',
                styleUrls: ['./open-trades.component.scss']
            }]
    }], function () { return [{ type: _shared_services_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/client-core/reports/reports-core/reports-core.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/client-core/reports/reports-core/reports-core.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ReportsCoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsCoreComponent", function() { return ReportsCoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class ReportsCoreComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ReportsCoreComponent.ɵfac = function ReportsCoreComponent_Factory(t) { return new (t || ReportsCoreComponent)(); };
ReportsCoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReportsCoreComponent, selectors: [["app-reports-core"]], decls: 21, vars: 0, consts: [[1, "small-content-section", "bg-f"], [1, "row"], [1, "col-md-12"], [1, "card", "border-0"], [1, "card-body", "border-0", "p-0"], [1, "tabs-container"], [1, "tabs-heading", "d-flex", "flex-row", "border-bottom"], ["routerLinkActive", "active", 1, "tabs-item", "item-with-icon"], ["routerLink", "/home/reports/open-trades", 1, "p-3"], [1, "material-icons"], [1, "tab-text"], ["routerLink", "/home/reports/close-trades", 1, "p-3"], [1, "tabs-body", "p-2"]], template: function ReportsCoreComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "attach_money");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Open trades");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "money_off");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Close trades");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NsaWVudC1jb3JlL3JlcG9ydHMvcmVwb3J0cy1jb3JlL3JlcG9ydHMtY29yZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportsCoreComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-reports-core',
                templateUrl: './reports-core.component.html',
                styleUrls: ['./reports-core.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/client-core/reports/reports-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/client-core/reports/reports-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ReportsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsRoutingModule", function() { return ReportsRoutingModule; });
/* harmony import */ var _reports_core_close_trades_close_trades_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reports-core/close-trades/close-trades.component */ "./src/app/pages/client-core/reports/reports-core/close-trades/close-trades.component.ts");
/* harmony import */ var _reports_core_open_trades_open_trades_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reports-core/open-trades/open-trades.component */ "./src/app/pages/client-core/reports/reports-core/open-trades/open-trades.component.ts");
/* harmony import */ var _reports_core_reports_core_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reports-core/reports-core.component */ "./src/app/pages/client-core/reports/reports-core/reports-core.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







const routes = [
    {
        path: '',
        component: _reports_core_reports_core_component__WEBPACK_IMPORTED_MODULE_2__["ReportsCoreComponent"],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'open-trades'
            },
            {
                path: 'open-trades',
                component: _reports_core_open_trades_open_trades_component__WEBPACK_IMPORTED_MODULE_1__["OpenTradesComponent"],
                data: { title: 'Reports', breadcrumb: 'Open Trades' }
            },
            {
                path: 'close-trades',
                component: _reports_core_close_trades_close_trades_component__WEBPACK_IMPORTED_MODULE_0__["CloseTradesComponent"],
                data: { title: 'Reports', breadcrumb: 'Close Trades' }
            }
        ]
    }
];
class ReportsRoutingModule {
}
ReportsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ReportsRoutingModule });
ReportsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function ReportsRoutingModule_Factory(t) { return new (t || ReportsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ReportsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](ReportsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/client-core/reports/reports.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/client-core/reports/reports.module.ts ***!
  \*************************************************************/
/*! exports provided: ReportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsModule", function() { return ReportsModule; });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _reports_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reports-routing.module */ "./src/app/pages/client-core/reports/reports-routing.module.ts");
/* harmony import */ var _reports_core_reports_core_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reports-core/reports-core.component */ "./src/app/pages/client-core/reports/reports-core/reports-core.component.ts");
/* harmony import */ var _reports_core_open_trades_open_trades_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reports-core/open-trades/open-trades.component */ "./src/app/pages/client-core/reports/reports-core/open-trades/open-trades.component.ts");
/* harmony import */ var _reports_core_close_trades_close_trades_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reports-core/close-trades/close-trades.component */ "./src/app/pages/client-core/reports/reports-core/close-trades/close-trades.component.ts");








class ReportsModule {
}
ReportsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ReportsModule });
ReportsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ReportsModule_Factory(t) { return new (t || ReportsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _reports_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReportsRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ReportsModule, { declarations: [_reports_core_reports_core_component__WEBPACK_IMPORTED_MODULE_4__["ReportsCoreComponent"], _reports_core_open_trades_open_trades_component__WEBPACK_IMPORTED_MODULE_5__["OpenTradesComponent"], _reports_core_close_trades_close_trades_component__WEBPACK_IMPORTED_MODULE_6__["CloseTradesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _reports_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReportsRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ReportsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_reports_core_reports_core_component__WEBPACK_IMPORTED_MODULE_4__["ReportsCoreComponent"], _reports_core_open_trades_open_trades_component__WEBPACK_IMPORTED_MODULE_5__["OpenTradesComponent"], _reports_core_close_trades_close_trades_component__WEBPACK_IMPORTED_MODULE_6__["CloseTradesComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _reports_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReportsRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=client-core-reports-reports-module-es2015.js.map