(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["client-core-message-center-message-center-module"],{

/***/ "./src/app/pages/client-core/message-center/message-center-core/message-center-core.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/client-core/message-center/message-center-core/message-center-core.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: MessageCenterCoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageCenterCoreComponent", function() { return MessageCenterCoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/services/global.service */ "./src/app/shared/services/global.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-feather */ "./node_modules/angular-feather/__ivy_ngcc__/fesm2015/angular-feather.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/__ivy_ngcc__/fesm2015/ngx-order-pipe.js");










const _c0 = ["autoShownModal"];
const _c1 = function () { return { show: true }; };
function MessageCenterCoreComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r744 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onHidden", function MessageCenterCoreComponent_div_0_Template_div_onHidden_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r744); const ctx_r743 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r743.onHidden(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Message");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessageCenterCoreComponent_div_0_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r744); const ctx_r745 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r745.hideModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r740 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r740.imgsrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r740.msgparagraph);
} }
function MessageCenterCoreComponent_tr_46_Template(rf, ctx) { if (rf & 1) {
    const _r748 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "GENERAL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i-feather", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessageCenterCoreComponent_tr_46_Template_i_feather_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r748); const msg_r746 = ctx.$implicit; const ctx_r747 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r747.showModal(msg_r746.MessageImage, msg_r746.MessageText); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const msg_r746 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](msg_r746.Timestamp.sCreadedOn_Str);
} }
const _c2 = function (a0, a1, a2) { return { itemsPerPage: a0, currentPage: a1, totalItems: a2 }; };
class MessageCenterCoreComponent {
    constructor(global) {
        this.global = global;
        this.messages = [];
        this.order = ''; // Order property to sort coloum of table
        this.reverse = true; // Reverse property is used to sort table coloum
        this.Items = 1;
        this.TotalCount = 0;
        this.isModalShown = false;
    }
    showModal(img, paragraph) {
        this.imgsrc = img;
        this.msgparagraph = paragraph;
        this.isModalShown = true;
    }
    hideModal() {
        this.autoShownModal.hide();
    }
    onHidden() {
        this.isModalShown = false;
    }
    setOrder(value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
    }
    getMessage(pn, category) {
        this.categoryOption = category;
        if (category) {
            this.pagination = pn;
            this.data = {
                Profile: this.global.localDealermasterID,
                Initial: 1,
                MaxCount: pn
            };
        }
        else {
            this.pagination = pn;
            this.data = {
                Profile: this.global.localDealermasterID,
                Initial: (this.pagination - 1) * this.Items + 1,
                MaxCount: this.pagination * this.Items
            };
        }
        this.global.getAdmmsg(this.data).subscribe(res => {
            this.messages = res.lstMsgs;
            this.TotalCount = res.Count;
        }, err => {
            console.log(err);
        });
    }
    ngOnInit() {
        this.getMessage(1, this.categoryOption);
    }
}
MessageCenterCoreComponent.ɵfac = function MessageCenterCoreComponent_Factory(t) { return new (t || MessageCenterCoreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"])); };
MessageCenterCoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MessageCenterCoreComponent, selectors: [["app-message-center-core"]], viewQuery: function MessageCenterCoreComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.autoShownModal = _t.first);
    } }, decls: 52, vars: 17, consts: [["bsModal", "", "class", "modal fade", "tabindex", "-1", "role", "dialog", "aria-labelledby", "dialog-auto-name", 3, "config", "onHidden", 4, "ngIf"], [1, "small-content-section", "bg-f"], [1, "row"], [1, "col-md-12"], [1, "card", "border-0"], [1, "card-body", "border-0", "p-0"], [1, "tabs-container"], [1, "history-title", "px-3", "border-bottom"], [1, "tabs-body", "p-2"], [1, ""], [1, "table-filter-area"], [1, "row", "no-gutters"], [1, "col-md-4", "form-inline", "d-none", "d-md-block"], [1, "form-group", "mb-2"], ["for", "entries", 1, "main-txt-color", "mr-1"], ["id", "entries", 1, "form-control", "main-txt-color", "bd-color", "shadow-none", 3, "change"], ["for", "entries", 1, "main-txt-color", "ml-1"], [1, "col-md-3", "offset-md-5"], [1, "form-group"], ["name", "searchText", "type", "text", "id", "", "placeholder", "Enter keyword to search", 1, "form-control", "main-txt-color", "bd-color", "shadow-none", 3, "ngModel", "ngModelChange"], [1, "table-container", "table-responsive"], [1, "table", "table-hover", "main-txt-color", "mb-0"], [1, "table-header-bg", "table-header-color"], [1, "font-weight-500", "bd-color", "text-capitalize", "align-middle"], [1, "secondary-txt-color"], [4, "ngFor", "ngForOf"], [1, "table-pagination", "text-right", "border-top-0", "pt-4"], [3, "pageChange"], ["bsModal", "", "tabindex", "-1", "role", "dialog", "aria-labelledby", "dialog-auto-name", 1, "modal", "fade", 3, "config", "onHidden"], ["autoShownModal", "bs-modal"], [1, "modal-dialog", "modal-sm"], [1, "modal-content"], [1, "modal-header"], ["id", "dialog-auto-name", 1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [3, "src"], [1, "cursor-pointer"], ["name", "eye", 3, "click"]], template: function MessageCenterCoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MessageCenterCoreComponent_div_0_Template, 14, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Your Message Board ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Show ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MessageCenterCoreComponent_Template_select_change_17_listener($event) { return ctx.getMessage($event.target.value, true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "15");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "25");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "50");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Entries");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MessageCenterCoreComponent_Template_input_ngModelChange_34_listener($event) { return ctx.searchText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "table", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "thead", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Created on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Delivered As");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "tbody", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, MessageCenterCoreComponent_tr_46_Template, 8, 1, "tr", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](47, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](49, "orderBy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "pagination-controls", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function MessageCenterCoreComponent_Template_pagination_controls_pageChange_51_listener($event) { return ctx.getMessage($event, false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isModalShown);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](47, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](48, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](49, 9, ctx.messages, ctx.order, ctx.reverse), ctx.searchText), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](13, _c2, ctx.Items, ctx.pagination, ctx.TotalCount)));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationControlsComponent"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalDirective"], angular_feather__WEBPACK_IMPORTED_MODULE_6__["ɵa"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginatePipe"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipe"], ngx_order_pipe__WEBPACK_IMPORTED_MODULE_8__["OrderPipe"]], styles: [".wallet_balance[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 39px;\n  right: 15px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row;\n}\n\n.wallet_balance[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 14px;\n  padding: 0 10px;\n}\n\n.history-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding: 10px 0;\n  font-weight: 400;\n}\n\n.table-filter-area[_ngcontent-%COMP%] {\n  position: relative;\n  background: #eff3f6;\n  padding: 15px;\n  border-bottom: 0px;\n  border-radius: 4px 4px 0 0;\n  padding-bottom: 0px;\n  top: 6px;\n}\n\ntbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(even) {\n  background: #f8f9fa;\n}\n\ntbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(odd) {\n  background: #eff3f6;\n}\n\n.table-pagination[_ngcontent-%COMP%] {\n  background: #eff3f6;\n  padding: 15px;\n  position: relative;\n  top: -2px;\n}\n\n.btn-sm[_ngcontent-%COMP%], .btn-group-sm[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%] {\n  padding: 0.15rem 0.8rem;\n}\n\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.45em 0.8em;\n  font-size: 75%;\n  font-weight: 500;\n}\n\ntable[_ngcontent-%COMP%] {\n  border-collapse: separate;\n  border-spacing: 0 6px;\n}\n\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-bottom: 0px solid #dee2e6;\n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-top: 0px solid #dee2e6;\n}\n\n.ngx-pagination[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2xpZW50LWNvcmUvbWVzc2FnZS1jZW50ZXIvbWVzc2FnZS1jZW50ZXItY29yZS9GOlxcbmV3dHJhZGVyXFx0cmFkZXI0LTUvc3JjXFxhcHBcXHBhZ2VzXFxjbGllbnQtY29yZVxcbWVzc2FnZS1jZW50ZXJcXG1lc3NhZ2UtY2VudGVyLWNvcmVcXG1lc3NhZ2UtY2VudGVyLWNvcmUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NsaWVudC1jb3JlL21lc3NhZ2UtY2VudGVyL21lc3NhZ2UtY2VudGVyLWNvcmUvbWVzc2FnZS1jZW50ZXItY29yZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsY0FBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFFQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FDQUo7O0FER0E7RUFDSSxtQkFBQTtBQ0FKOztBREdBO0VBQ0ksbUJBQUE7QUNBSjs7QURHQTtFQUdJLG1CQUFBO0VBQ0EsYUFBQTtFQUVBLGtCQUFBO0VBQ0EsU0FBQTtBQ0hKOztBRE1BOztFQUVJLHVCQUFBO0FDSEo7O0FETUE7RUFDSSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDSEo7O0FETUE7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0FDSEo7O0FETUE7RUFDSSxnQ0FBQTtBQ0hKOztBRE1BOztFQUVJLDZCQUFBO0FDSEo7O0FETUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NsaWVudC1jb3JlL21lc3NhZ2UtY2VudGVyL21lc3NhZ2UtY2VudGVyLWNvcmUvbWVzc2FnZS1jZW50ZXItY29yZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53YWxsZXRfYmFsYW5jZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDM5cHg7XHJcbiAgICByaWdodDogMTVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdztcclxufVxyXG5cclxuLndhbGxldF9iYWxhbmNlIHAge1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxufVxyXG5cclxuLmhpc3RvcnktdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLnRhYmxlLWZpbHRlci1hcmVhIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQ6ICNlZmYzZjY7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcclxuICAgIGJvcmRlci1ib3R0b206IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMCAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgIHRvcDogNnB4O1xyXG59XHJcblxyXG50Ym9keT50cjpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgYmFja2dyb3VuZDogI2Y4ZjlmYVxyXG59XHJcblxyXG50Ym9keT50cjpudGgtY2hpbGQob2RkKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWZmM2Y2XHJcbn1cclxuXHJcbi50YWJsZS1wYWdpbmF0aW9uIHtcclxuICAgIC8vIHBhZGRpbmc6IDAuNzVyZW07XHJcbiAgICAvLyBwYWRkaW5nLXRvcDogMXJlbTtcclxuICAgIGJhY2tncm91bmQ6ICNlZmYzZjY7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgLy8gYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTJweDtcclxufVxyXG5cclxuLmJ0bi1zbSxcclxuLmJ0bi1ncm91cC1zbT4uYnRuIHtcclxuICAgIHBhZGRpbmc6IDAuMTVyZW0gMC44cmVtO1xyXG59XHJcblxyXG4uYmFkZ2Uge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMC40NWVtIDAuOGVtO1xyXG4gICAgZm9udC1zaXplOiA3NSU7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDAgNnB4O1xyXG59XHJcblxyXG4udGFibGUgdGhlYWQgdGgge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkICNkZWUyZTY7XHJcbn1cclxuXHJcbi50YWJsZSB0aCxcclxuLnRhYmxlIHRkIHtcclxuICAgIGJvcmRlci10b3A6IDBweCBzb2xpZCAjZGVlMmU2O1xyXG59XHJcblxyXG4ubmd4LXBhZ2luYXRpb24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59IiwiLndhbGxldF9iYWxhbmNlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDM5cHg7XG4gIHJpZ2h0OiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdztcbn1cblxuLndhbGxldF9iYWxhbmNlIHAge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cblxuLmhpc3RvcnktdGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLnRhYmxlLWZpbHRlci1hcmVhIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjZWZmM2Y2O1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXItYm90dG9tOiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMCAwO1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICB0b3A6IDZweDtcbn1cblxudGJvZHkgPiB0cjpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xufVxuXG50Ym9keSA+IHRyOm50aC1jaGlsZChvZGQpIHtcbiAgYmFja2dyb3VuZDogI2VmZjNmNjtcbn1cblxuLnRhYmxlLXBhZ2luYXRpb24ge1xuICBiYWNrZ3JvdW5kOiAjZWZmM2Y2O1xuICBwYWRkaW5nOiAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTJweDtcbn1cblxuLmJ0bi1zbSxcbi5idG4tZ3JvdXAtc20gPiAuYnRuIHtcbiAgcGFkZGluZzogMC4xNXJlbSAwLjhyZW07XG59XG5cbi5iYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMC40NWVtIDAuOGVtO1xuICBmb250LXNpemU6IDc1JTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuICBib3JkZXItc3BhY2luZzogMCA2cHg7XG59XG5cbi50YWJsZSB0aGVhZCB0aCB7XG4gIGJvcmRlci1ib3R0b206IDBweCBzb2xpZCAjZGVlMmU2O1xufVxuXG4udGFibGUgdGgsXG4udGFibGUgdGQge1xuICBib3JkZXItdG9wOiAwcHggc29saWQgI2RlZTJlNjtcbn1cblxuLm5neC1wYWdpbmF0aW9uIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageCenterCoreComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-message-center-core',
                templateUrl: './message-center-core.component.html',
                styleUrls: ['./message-center-core.component.scss']
            }]
    }], function () { return [{ type: _shared_services_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"] }]; }, { autoShownModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['autoShownModal', { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/client-core/message-center/message-center-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/client-core/message-center/message-center-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: MessageCenterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageCenterRoutingModule", function() { return MessageCenterRoutingModule; });
/* harmony import */ var _message_center_core_message_center_core_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message-center-core/message-center-core.component */ "./src/app/pages/client-core/message-center/message-center-core/message-center-core.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const routes = [
    {
        path: '',
        component: _message_center_core_message_center_core_component__WEBPACK_IMPORTED_MODULE_0__["MessageCenterCoreComponent"],
        data: { title: 'Message Center', breadcrumb: 'Message-Center' }
    }
];
class MessageCenterRoutingModule {
}
MessageCenterRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MessageCenterRoutingModule });
MessageCenterRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function MessageCenterRoutingModule_Factory(t) { return new (t || MessageCenterRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MessageCenterRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MessageCenterRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/client-core/message-center/message-center.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/client-core/message-center/message-center.module.ts ***!
  \***************************************************************************/
/*! exports provided: MessageCenterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageCenterModule", function() { return MessageCenterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _message_center_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message-center-routing.module */ "./src/app/pages/client-core/message-center/message-center-routing.module.ts");
/* harmony import */ var _message_center_core_message_center_core_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./message-center-core/message-center-core.component */ "./src/app/pages/client-core/message-center/message-center-core/message-center-core.component.ts");
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-feather */ "./node_modules/angular-feather/__ivy_ngcc__/fesm2015/angular-feather.js");
/* harmony import */ var angular_feather_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-feather/icons */ "./node_modules/angular-feather/__ivy_ngcc__/fesm2015/angular-feather-icons.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");











const icons = {
    Eye: angular_feather_icons__WEBPACK_IMPORTED_MODULE_5__["Eye"]
};
class MessageCenterModule {
}
MessageCenterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MessageCenterModule });
MessageCenterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MessageCenterModule_Factory(t) { return new (t || MessageCenterModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _message_center_routing_module__WEBPACK_IMPORTED_MODULE_2__["MessageCenterRoutingModule"],
            angular_feather__WEBPACK_IMPORTED_MODULE_4__["FeatherModule"].pick(icons),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["ModalModule"].forRoot(),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ],
        angular_feather__WEBPACK_IMPORTED_MODULE_4__["FeatherModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MessageCenterModule, { declarations: [_message_center_core_message_center_core_component__WEBPACK_IMPORTED_MODULE_3__["MessageCenterCoreComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _message_center_routing_module__WEBPACK_IMPORTED_MODULE_2__["MessageCenterRoutingModule"], angular_feather__WEBPACK_IMPORTED_MODULE_4__["FeatherModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["ModalModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]], exports: [angular_feather__WEBPACK_IMPORTED_MODULE_4__["FeatherModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageCenterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_message_center_core_message_center_core_component__WEBPACK_IMPORTED_MODULE_3__["MessageCenterCoreComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _message_center_routing_module__WEBPACK_IMPORTED_MODULE_2__["MessageCenterRoutingModule"],
                    angular_feather__WEBPACK_IMPORTED_MODULE_4__["FeatherModule"].pick(icons),
                    ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["ModalModule"].forRoot(),
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
                ],
                exports: [angular_feather__WEBPACK_IMPORTED_MODULE_4__["FeatherModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=client-core-message-center-message-center-module-es2015.js.map