(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["client-core-profile-profile-module"],{

/***/ "./src/app/pages/client-core/profile/profile-core/change-password/change-password.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/client-core/profile/profile-core/change-password/change-password.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../../shared/services/global.service */ "./src/app/shared/services/global.service.ts");
/* harmony import */ var _shared_services_header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../../shared/services/header.service */ "./src/app/shared/services/header.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../../shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








const _c0 = ["formData"];
function ChangePasswordComponent_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This Should Not be Blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChangePasswordComponent_span_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This Should Not be Blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ChangePasswordComponent {
    constructor(globaleService, headerService, router, route, notificationService) {
        this.globaleService = globaleService;
        this.headerService = headerService;
        this.router = router;
        this.route = route;
        this.notificationService = notificationService;
        this.isLoading = false;
        this.ErrorMsqBlock = false;
        this.successMsqBlock = false;
    }
    ngOnInit() {
        this.subscription1 = this.headerService.castLoggedUserDetail.subscribe(resData => (this.LoggedParams = resData));
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
    onSubmit() {
        this.isLoading = true;
        const newPassword = this.changePasswordForm.value.npassword;
        const ConfirmPassword = this.changePasswordForm.value.cpassword;
        console.log(this.changePasswordForm.value.npassword);
        if (newPassword !== ConfirmPassword) {
            this.onErrorMsqDisplay('Confirmed Password Not Matched');
            this.isLoading = false;
            this.autoCloseMsqBlock();
        }
        else {
            const params = {
                ProfileId: this.LoggedParams.sProfile.sMasterId,
                Password: newPassword,
            };
            this.globaleService.changePass(params).subscribe(data => {
                if (data.Result === true) {
                    // this.onSuccessMsqDisplay('Password Changed Successfully');
                    this.notificationService.showSuccess('Password Changed Successfully', 'Success');
                    this.isLoading = false;
                    // this.autoCloseMsqBlock();
                    setTimeout(() => {
                        this.router.navigate(['../view'], { relativeTo: this.route });
                    }, 1000);
                }
                else {
                    // this.onErrorMsqDisplay('Faild to change Password');
                    this.notificationService.showError('Faild to change Password', 'Error');
                    this.isLoading = false;
                    // this.autoCloseMsqBlock();
                }
            });
        }
    }
    ngOnDestroy() {
        this.subscription1.unsubscribe();
    }
}
ChangePasswordComponent.ɵfac = function ChangePasswordComponent_Factory(t) { return new (t || ChangePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_header_service__WEBPACK_IMPORTED_MODULE_2__["HeaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"])); };
ChangePasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChangePasswordComponent, selectors: [["app-change-password"]], viewQuery: function ChangePasswordComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.changePasswordForm = _t.first);
    } }, decls: 38, vars: 5, consts: [[1, "change-password-container"], [1, "", 3, "ngSubmit"], ["formData", "ngForm"], [1, "traction-from-box", "bg-f"], [1, "heading"], [1, "title"], [1, "change-password-box", "mb-2"], [1, "row"], [1, "col-md-6"], [1, "form-group"], ["for", "npassword", 1, ""], [1, "asterick"], ["required", "", "ngModel", "", "name", "npassword", "type", "password", "id", "npassword", "placeholder", "Enter New password", 1, "form-control", "main-txt-color", "bd-color", "shadow-none"], ["npassword", ""], ["class", "help-block text-danger ", 4, "ngIf"], ["for", "cpassword", 1, ""], ["required", "", "email", "", "ngModel", "", "name", "cpassword", "type", "password", "id", "cpassword", "placeholder", "Enter Confirm password", 1, "form-control", "main-txt-color", "bd-color", "shadow-none"], ["cpassword", ""], [1, "col-md-12"], [1, "position-relative", "text-left", 2, "padding-top", "25px"], ["routerLink", "../view", "type", "button", 1, "btn", "btn-info", "btn-sm", "px-3", "position-relative", "mr-2"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", "px-3", "position-relative", 3, "disabled"], [1, "help-block", "text-danger"]], template: function ChangePasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ChangePasswordComponent_Template_form_ngSubmit_1_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Change Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Please fill all the mandatory fields");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ChangePasswordComponent_span_19_Template, 2, 0, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ChangePasswordComponent_span_29_Template, 2, 0, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Change Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r431 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        const _r432 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
        const _r434 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r432.valid && _r432.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r434.valid && _r434.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r431.valid || ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-spinner", ctx.isLoading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["EmailValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: [".change-password-container[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  line-height: 16px;\n  padding: 10px 15px;\n  background: #eff3f6;\n  \n  border-radius: 4px 4px 0 0;\n}\n.change-password-container[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 400;\n}\n.change-password-container[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.change-password-container[_ngcontent-%COMP%]   .traction-from-box[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  -webkit-transition: all 5s ease-out;\n  transition: all 5s ease-out;\n}\n.change-password-container[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  position: relative;\n  top: -3px;\n}\n.change-password-container[_ngcontent-%COMP%]   .change-password-box[_ngcontent-%COMP%] {\n  background: #f5f7f9;\n  padding: 15px;\n  border-radius: 0 0 4px 4px;\n  border-top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2xpZW50LWNvcmUvcHJvZmlsZS9wcm9maWxlLWNvcmUvY2hhbmdlLXBhc3N3b3JkL0Y6XFxuZXd0cmFkZXJcXHRyYWRlcjQtNS9zcmNcXGFwcFxccGFnZXNcXGNsaWVudC1jb3JlXFxwcm9maWxlXFxwcm9maWxlLWNvcmVcXGNoYW5nZS1wYXNzd29yZFxcY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9jbGllbnQtY29yZS9wcm9maWxlL3Byb2ZpbGUtY29yZS9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtBQ0RSO0FER1E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNEWjtBREdRO0VBQ0ksZUFBQTtBQ0RaO0FESUk7RUFFSSxrQkFBQTtFQUVBLG1DQUFBO0VBQUEsMkJBQUE7QUNKUjtBRE1JO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0FDSlI7QURNSTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBRUEsZUFBQTtBQ0xSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2xpZW50LWNvcmUvcHJvZmlsZS9wcm9maWxlLWNvcmUvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGFuZ2UtcGFzc3dvcmQtY29udGFpbmVyIHtcclxuICAgIC8vIHBhZGRpbmc6IDEwcHggMTJweDtcclxuICAgIC5oZWFkaW5nIHtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2VmZjNmNjtcclxuICAgICAgICAvKiBtYXJnaW4tYm90dG9tOiAxNXB4OyAqL1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMCAwO1xyXG4gICAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICNlYWViZjM7XHJcbiAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzbWFsbCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudHJhY3Rpb24tZnJvbS1ib3gge1xyXG4gICAgICAgIC8vIHBhZGRpbmc6IDE1cHggMTVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgI2RmZTJlNDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgNXMgZWFzZS1vdXQ7XHJcbiAgICB9XHJcbiAgICAuY2xvc2UtYnRuIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdG9wOiAtM3B4O1xyXG4gICAgfVxyXG4gICAgLmNoYW5nZS1wYXNzd29yZC1ib3gge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmNWY3Zjk7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgNHB4IDRweDtcclxuICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjZWFlYmYzO1xyXG4gICAgICAgIGJvcmRlci10b3A6IDBweDtcclxuICAgIH1cclxufSIsIi5jaGFuZ2UtcGFzc3dvcmQtY29udGFpbmVyIC5oZWFkaW5nIHtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgYmFja2dyb3VuZDogI2VmZjNmNjtcbiAgLyogbWFyZ2luLWJvdHRvbTogMTVweDsgKi9cbiAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XG59XG4uY2hhbmdlLXBhc3N3b3JkLWNvbnRhaW5lciAuaGVhZGluZyAudGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4uY2hhbmdlLXBhc3N3b3JkLWNvbnRhaW5lciAuaGVhZGluZyBzbWFsbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5jaGFuZ2UtcGFzc3dvcmQtY29udGFpbmVyIC50cmFjdGlvbi1mcm9tLWJveCB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdHJhbnNpdGlvbjogYWxsIDVzIGVhc2Utb3V0O1xufVxuLmNoYW5nZS1wYXNzd29yZC1jb250YWluZXIgLmNsb3NlLWJ0biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtM3B4O1xufVxuLmNoYW5nZS1wYXNzd29yZC1jb250YWluZXIgLmNoYW5nZS1wYXNzd29yZC1ib3gge1xuICBiYWNrZ3JvdW5kOiAjZjVmN2Y5O1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAwIDAgNHB4IDRweDtcbiAgYm9yZGVyLXRvcDogMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangePasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-change-password',
                templateUrl: './change-password.component.html',
                styleUrls: ['./change-password.component.scss']
            }]
    }], function () { return [{ type: _shared_services_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"] }, { type: _shared_services_header_service__WEBPACK_IMPORTED_MODULE_2__["HeaderService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] }]; }, { changePasswordForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['formData', { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/client-core/profile/profile-core/edit-profile/edit-profile.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/client-core/profile/profile-core/edit-profile/edit-profile.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: EditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function() { return EditProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_header_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../../shared/services/header.service */ "./src/app/shared/services/header.service.ts");
/* harmony import */ var _shared_services_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../../shared/services/global.service */ "./src/app/shared/services/global.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../../shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








const _c0 = ["formData"];
function EditProfileComponent_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This Should Not be Blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditProfileComponent_span_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This Should Not be Blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class EditProfileComponent {
    constructor(headerService, globalService, router, route, notificationService) {
        this.headerService = headerService;
        this.globalService = globalService;
        this.router = router;
        this.route = route;
        this.notificationService = notificationService;
        this.isLoading = false;
        this.ErrorMsqBlock = false;
        this.successMsqBlock = false;
    }
    ngOnInit() {
        this.loadDatas();
    }
    loadDatas() {
        this.subscription1 = this.headerService.castLoggedUserDetail.subscribe(resData => (this.LoggedParams = resData));
        // console.log(this.LoggedParams);
        this.editData = this.LoggedParams.sProfile;
        // console.log(this.editData);
    }
    updateLocalStorageData() {
        this.headerService.updateLocalStorageSProfile(this.editData);
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.setFormValue();
        }, 300);
    }
    setFormValue() {
        this.editProfileForm.setValue({
            fname: this.editData.uPersonalInfo.First,
            email: this.editData.uContactInfo.Email,
            phoneNumber: this.editData.uContactInfo.Phone,
            address: this.editData.uAddressInfo.Address1,
            city: this.editData.uAddressInfo.City,
            state: this.editData.uAddressInfo.State,
            zipcode: this.editData.uAddressInfo.ZipCode,
            contry: this.editData.uAddressInfo.Country,
            bankname: this.editData.uBankInfo.Bank_Name,
            accountname: this.editData.uBankInfo.Account_Name,
            accountnumber: this.editData.uBankInfo.Account_Number,
            swiftcode: this.editData.uBankInfo.Swift_Code,
            ifsccode: this.editData.uBankInfo.IBAN_IFSC_Code,
            bankaddress: this.editData.uBankInfo.Bank_Addr,
        });
    }
    onSubmit() {
        this.editData.uPersonalInfo.First = this.editProfileForm.form.value.fname;
        this.editData.uContactInfo.Email = this.editData.uContactInfo.Email;
        this.editData.uContactInfo.Phone = this.editProfileForm.form.value.phoneNumber;
        this.editData.uAddressInfo.Address1 = this.editProfileForm.form.value.address;
        this.editData.uAddressInfo.City = this.editProfileForm.form.value.city;
        this.editData.uAddressInfo.State = this.editProfileForm.form.value.state;
        this.editData.uAddressInfo.ZipCode = this.editProfileForm.form.value.zipcode;
        this.editData.uAddressInfo.Country = this.editProfileForm.form.value.contry;
        this.editData.uBankInfo.Bank_Name = this.editProfileForm.form.value.bankname;
        this.editData.uBankInfo.Account_Name = this.editProfileForm.form.value.accountname;
        this.editData.uBankInfo.Account_Number = this.editProfileForm.form.value.accountnumber;
        this.editData.uBankInfo.Swift_Code = this.editProfileForm.form.value.swiftcode;
        this.editData.uBankInfo.IBAN_IFSC_Code = this.editProfileForm.form.value.ifsccode;
        this.editData.uBankInfo.Bank_Addr = this.editProfileForm.form.value.bankaddress;
        this.isLoading = true;
        this.globalService.edit(this.editData).subscribe((res) => {
            if (res.Result === true) {
                this.notificationService.showSuccess('Profile has been updated Successfully', 'Success');
                console.log('success');
                this.updateLocalStorageData();
                this.isLoading = false;
                this.router.navigate(['../view'], { relativeTo: this.route });
            }
        }, err => {
            console.log(err);
            this.isLoading = false;
            this.notificationService.showError('Failed to update Profile', 'Error');
        });
    }
    onCancelBtn() {
        this.router.navigate(['../view'], { relativeTo: this.route });
    }
    ngOnDestroy() {
        this.subscription1.unsubscribe();
    }
    numberOnly(event) {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }
}
EditProfileComponent.ɵfac = function EditProfileComponent_Factory(t) { return new (t || EditProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_header_service__WEBPACK_IMPORTED_MODULE_1__["HeaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"])); };
EditProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditProfileComponent, selectors: [["app-edit-profile"]], viewQuery: function EditProfileComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.editProfileForm = _t.first);
    } }, decls: 125, vars: 5, consts: [[1, "edit-profile-container"], [1, "", 3, "ngSubmit"], ["formData", "ngForm"], [1, "traction-from-box", "bg-f"], [1, "heading"], [1, "title"], [1, "basic-info", "mb-2"], [1, "row"], [1, "col-md-4"], [1, "form-group"], ["for", "fname", 1, ""], [1, "asterick"], ["required", "", "ngModel", "", "name", "fname", "type", "text", "id", "fname", "placeholder", "Enter Your Fullname", 1, "form-control", "main-txt-color", "bd-color", "shadow-none"], ["fname", ""], ["class", "help-block text-danger ", 4, "ngIf"], ["for", "email", 1, ""], ["required", "", "email", "", "ngModel", "", "disabled", "", "name", "email", "type", "email", "id", "email", "placeholder", "Enter Email Address", 1, "form-control", "main-txt-color", "bd-color", "shadow-none"], ["email", ""], ["for", "phone", 1, ""], ["required", "", "ngModel", "", "name", "phoneNumber", "type", "text", "id", "phoneNumber", "placeholder", "Enter Your Phone Number", 1, "form-control", "main-txt-color", "bd-color", "shadow-none", 3, "keypress"], ["phoneNumber", ""], [1, "conatct-info", "mb-2"], [1, "col-md-12"], ["for", "address", 1, ""], ["rows", "1", "ngModel", "", "name", "address", "type", "text", "id", "address", "placeholder", "Enter Your Address", 1, "form-control", "main-txt-color", "bd-color", "shadow-none"], ["address", ""], [1, "col-md-6"], ["for", "city", 1, ""], ["ngModel", "", "name", "city", "type", "text", "id", "city", "placeholder", "Enter Your City", 1, "form-control", "main-txt-color", "bd-color", "shadow-none"], ["city", "ngModel"], ["for", "state", 1, ""], ["ngModel", "", "name", "state", "type", "text", "id", "state", "placeholder", "Enter Your State", 1, "form-control", "main-txt-color", "bd-color", "shadow-none"], ["state", ""], ["for", "zipcode", 1, ""], ["ngModel", "", "name", "zipcode", "type", "number", "id", "zipcode", "placeholder", "Enter Your zip Code", 1, "form-control", "main-txt-color", "bd-color", "shadow-none"], ["zipcode", ""], ["for", "contry", 1, ""], ["ngModel", "", "name", "contry", "type", "text", "id", "country", "placeholder", "Enter Your Country Name", 1, "form-control", "main-txt-color", "bd-color", "shadow-none"], ["contry", ""], [1, "bank-info"], ["for", "bankname", 1, ""], ["ngModel", "", "name", "bankname", "type", "text", "id", "bankname", "placeholder", "Enter Your Bank Name", 1, "form-control", "main-txt-color", "bd-color", "shadow-none"], ["bankname", ""], ["for", "accountname", 1, ""], ["ngModel", "", "name", "accountname", "type", "text", "id", "accountname", "placeholder", "Enter Your Bank Account Name", 1, "form-control", "main-txt-color", "bd-color", "shadow-none"], ["accountname", ""], ["for", "accountnumber", 1, ""], ["ngModel", "", "name", "accountnumber", "type", "text", "id", "accountnumber", "placeholder", "Enter Your Bank Account Number", 1, "form-control", "main-txt-color", "bd-color", "shadow-none"], ["accountnumber", ""], ["for", "swiftcode", 1, ""], ["ngModel", "", "name", "swiftcode", "type", "text", "id", "swiftcode", "placeholder", "Enter Your Bank Swift Code", 1, "form-control", "main-txt-color", "bd-color", "shadow-none"], ["swiftcode", ""], ["for", "ifsccode", 1, ""], ["ngModel", "", "name", "ifsccode", "type", "text", "id", "ifsccode", "placeholder", "Enter Your Bank IBAN IFSC Number", 1, "form-control", "main-txt-color", "bd-color", "shadow-none"], ["ifsccode", ""], ["for", "bankaddress", 1, ""], ["rows", "1", "ngModel", "", "name", "bankaddress", "type", "text", "id", "bankaddress", "placeholder", "Enter Your Address", 1, "form-control", "main-txt-color", "bd-color", "shadow-none"], ["bankaddress", ""], [1, "position-relative", "text-right", 2, "padding-top", "25px"], ["type", "button", 1, "btn", "btn-info", "btn-sm", "px-3", "position-relative", "mr-2", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", "px-3", "position-relative", 3, "disabled"], [1, "help-block", "text-danger"]], template: function EditProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EditProfileComponent_Template_form_ngSubmit_1_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Personal Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Please fill all the mandatory fields");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Full Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, EditProfileComponent_span_19_Template, 2, 0, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, EditProfileComponent_span_28_Template, 2, 0, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function EditProfileComponent_Template_input_keypress_35_listener($event) { return ctx.numberOnly($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Contact Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Please fill all the mandatory fields");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "textarea", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 28, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "input", 31, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Zip Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "input", 34, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Contry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "input", 37, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Bank Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Please fill all the mandatory fields");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Bank Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "input", 41, 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "label", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Account Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "input", 44, 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "label", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Account Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "input", 47, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Swift Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "input", 50, 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "IBAN IFSC Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "input", 53, 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "label", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Bank Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "textarea", 56, 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "button", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditProfileComponent_Template_button_click_120_listener() { return ctx.onCancelBtn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "button", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " Update Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r436 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        const _r437 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
        const _r439 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r437.valid && _r437.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r439.valid && _r439.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r436.valid || ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-spinner", ctx.isLoading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"]], styles: [".edit-profile-container[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  line-height: 16px;\n  padding: 8px 15px;\n  background: #eff3f6;\n  \n  border-radius: 4px 4px 0 0;\n  border: 0px solid #eaebf3;\n}\n.edit-profile-container[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 400;\n}\n.edit-profile-container[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.edit-profile-container[_ngcontent-%COMP%]   .traction-from-box[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  -webkit-transition: all 5s ease-out;\n  transition: all 5s ease-out;\n}\n.edit-profile-container[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  position: relative;\n  top: -3px;\n}\n.edit-profile-container[_ngcontent-%COMP%]   .basic-info[_ngcontent-%COMP%], .edit-profile-container[_ngcontent-%COMP%]   .conatct-info[_ngcontent-%COMP%], .edit-profile-container[_ngcontent-%COMP%]   .bank-info[_ngcontent-%COMP%] {\n  background: #f5f7f9;\n  padding: 15px;\n  border-radius: 0 0 4px 4px;\n  border: 0px solid #eaebf3;\n  border-top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2xpZW50LWNvcmUvcHJvZmlsZS9wcm9maWxlLWNvcmUvZWRpdC1wcm9maWxlL0Y6XFxuZXd0cmFkZXJcXHRyYWRlcjQtNS9zcmNcXGFwcFxccGFnZXNcXGNsaWVudC1jb3JlXFxwcm9maWxlXFxwcm9maWxlLWNvcmVcXGVkaXQtcHJvZmlsZVxcZWRpdC1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9jbGllbnQtY29yZS9wcm9maWxlL3Byb2ZpbGUtY29yZS9lZGl0LXByb2ZpbGUvZWRpdC1wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0FDRFI7QURFUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0FaO0FERVE7RUFDSSxlQUFBO0FDQVo7QURHSTtFQUVJLGtCQUFBO0VBRUEsbUNBQUE7RUFBQSwyQkFBQTtBQ0hSO0FES0k7RUFDSSxrQkFBQTtFQUNBLFNBQUE7QUNIUjtBREtJOzs7RUFHSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQ0hSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2xpZW50LWNvcmUvcHJvZmlsZS9wcm9maWxlLWNvcmUvZWRpdC1wcm9maWxlL2VkaXQtcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lZGl0LXByb2ZpbGUtY29udGFpbmVyIHtcclxuICAgIC8vIHBhZGRpbmc6IDEwcHggMTJweDtcclxuICAgIC5oZWFkaW5nIHtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgICAgICBwYWRkaW5nOiA4cHggMTVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZWZmM2Y2O1xyXG4gICAgICAgIC8qIG1hcmdpbi1ib3R0b206IDE1cHg7ICovXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XHJcbiAgICAgICAgYm9yZGVyOiAwcHggc29saWQgI2VhZWJmMztcclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNtYWxsIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC50cmFjdGlvbi1mcm9tLWJveCB7XHJcbiAgICAgICAgLy8gcGFkZGluZzogMTVweCAxNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjZGZlMmU0O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCA1cyBlYXNlLW91dDtcclxuICAgIH1cclxuICAgIC5jbG9zZS1idG4ge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0b3A6IC0zcHg7XHJcbiAgICB9XHJcbiAgICAuYmFzaWMtaW5mbyxcclxuICAgIC5jb25hdGN0LWluZm8sXHJcbiAgICAuYmFuay1pbmZvIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjVmN2Y5O1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDRweCA0cHg7XHJcbiAgICAgICAgYm9yZGVyOiAwcHggc29saWQgI2VhZWJmMztcclxuICAgICAgICBib3JkZXItdG9wOiAwcHg7XHJcbiAgICB9XHJcbn0iLCIuZWRpdC1wcm9maWxlLWNvbnRhaW5lciAuaGVhZGluZyB7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBwYWRkaW5nOiA4cHggMTVweDtcbiAgYmFja2dyb3VuZDogI2VmZjNmNjtcbiAgLyogbWFyZ2luLWJvdHRvbTogMTVweDsgKi9cbiAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XG4gIGJvcmRlcjogMHB4IHNvbGlkICNlYWViZjM7XG59XG4uZWRpdC1wcm9maWxlLWNvbnRhaW5lciAuaGVhZGluZyAudGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4uZWRpdC1wcm9maWxlLWNvbnRhaW5lciAuaGVhZGluZyBzbWFsbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5lZGl0LXByb2ZpbGUtY29udGFpbmVyIC50cmFjdGlvbi1mcm9tLWJveCB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdHJhbnNpdGlvbjogYWxsIDVzIGVhc2Utb3V0O1xufVxuLmVkaXQtcHJvZmlsZS1jb250YWluZXIgLmNsb3NlLWJ0biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtM3B4O1xufVxuLmVkaXQtcHJvZmlsZS1jb250YWluZXIgLmJhc2ljLWluZm8sXG4uZWRpdC1wcm9maWxlLWNvbnRhaW5lciAuY29uYXRjdC1pbmZvLFxuLmVkaXQtcHJvZmlsZS1jb250YWluZXIgLmJhbmstaW5mbyB7XG4gIGJhY2tncm91bmQ6ICNmNWY3Zjk7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCA0cHggNHB4O1xuICBib3JkZXI6IDBweCBzb2xpZCAjZWFlYmYzO1xuICBib3JkZXItdG9wOiAwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-profile',
                templateUrl: './edit-profile.component.html',
                styleUrls: ['./edit-profile.component.scss']
            }]
    }], function () { return [{ type: _shared_services_header_service__WEBPACK_IMPORTED_MODULE_1__["HeaderService"] }, { type: _shared_services_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] }]; }, { editProfileForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['formData', { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/client-core/profile/profile-core/profile-core.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/client-core/profile/profile-core/profile-core.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ProfileCoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileCoreComponent", function() { return ProfileCoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../shared/services/global.service */ "./src/app/shared/services/global.service.ts");
/* harmony import */ var _shared_services_header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../shared/services/header.service */ "./src/app/shared/services/header.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-feather */ "./node_modules/angular-feather/__ivy_ngcc__/fesm2015/angular-feather.js");







function ProfileCoreComponent_img_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 43);
} if (rf & 2) {
    const ctx_r481 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r481.profileData.sProfile.uPersonalInfo.ProfilePic, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ProfileCoreComponent_img_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 44);
} }
function ProfileCoreComponent_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "KYC Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileCoreComponent_span_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "KYC Approved");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileCoreComponent_span_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "KYC Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileCoreComponent_span_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "KYC Suspended");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileCoreComponent_span_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "KYC on Hold");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileCoreComponent_span_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i-feather", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileCoreComponent_span_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i-feather", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileCoreComponent_h5_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Limit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileCoreComponent_h5_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r491 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r491.minWithDraw, ".00");
} }
function ProfileCoreComponent_h5_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Limit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileCoreComponent_h5_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r493 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r493.minDeposit, ".00");
} }
class ProfileCoreComponent {
    constructor(globalService, headerService) {
        this.globalService = globalService;
        this.headerService = headerService;
    }
    ngOnInit() {
        this.loadDatas();
    }
    loadDatas() {
        this.subscription1 = this.headerService.castLoggedUserDetail.subscribe(resData => (this.profileData = resData));
        console.log(this.profileData);
        this.subscription2 = this.headerService.castWalletBalance.subscribe(resData => (this.walletBalance = resData));
        const parems = {
            DealerId: this.profileData.sProfile.sDealerId,
        };
        this.subscription3 = this.globalService.getManulGateway(parems).subscribe((res) => {
            this.paymentMethodAll = res;
            this.minWithDraw = this.paymentMethodAll[0].Min_Withdraw;
            this.minDeposit = this.paymentMethodAll[0].Min_Depoist;
        }, err => {
            console.log(err);
        });
    }
    ngOnDestroy() {
        this.subscription1.unsubscribe();
        this.subscription2.unsubscribe();
        this.subscription3.unsubscribe();
    }
}
ProfileCoreComponent.ɵfac = function ProfileCoreComponent_Factory(t) { return new (t || ProfileCoreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_header_service__WEBPACK_IMPORTED_MODULE_2__["HeaderService"])); };
ProfileCoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileCoreComponent, selectors: [["app-profile-core"]], decls: 74, vars: 20, consts: [[1, "small-content-section", "bg-f", "p-2", "border", "bd-color", "rounded"], [1, "profile-container"], [1, "row"], [1, "col-md-4", "pr-2", "pl-2"], [1, "left-wedget", "pb-5"], [1, "card", "profile-wedget", "border-0", "mb-2"], [1, "header", "rounded-top"], [1, "card-body", "pt-0"], [1, "avatar", "mb-4"], ["alt", "Avatar", "class", "img-thumbnail rounded-circle", 3, "src", 4, "ngIf"], ["src", "assets/images/avatar-default.png", "alt", "Avatar", "class", "img-thumbnail rounded-circle", 4, "ngIf"], ["routerLink", "upload-profile-image", 1, "upload-picture-box"], ["name", "camera", 1, "upload-icon", "cursor-pointer", "icon-size-24"], [1, "profile-detail", "d-flex", "justify-content-between", "align-items-end", "w-100", "flex-column"], [1, "user-status", "text-center", "w-100"], [1, "name", "text-size-15"], [1, "email", "text-size-12"], [1, "membership", "text-size-12"], [1, "font-weight-500"], [1, "kyc-status", "text-center", "w-100"], [1, "text-size-12"], [4, "ngIf"], ["routerLink", "/home/documents/kyc-upload", "class", "ml-2 cursor-pointer", 4, "ngIf"], [1, "text-center", "mt-2", "text-size-12"], ["routerLink", "change-password", 1, "btn", "nav-pills", "btn-info", "btn-sm"], [1, "account-summery-title", "text-size-13", "font-weight-600"], [1, "card", "balance-wedget", "border-0", "mb-2"], [1, "card-body", "rounded"], [1, "media-area"], ["src", "assets/images/wallet_icon.png", "alt", "Generic placeholder image", 1, "mr-4"], [1, "media-body-area"], [1, "mt-0", "text-size-17", "font-weight-400"], [1, "limit-section"], [1, "box", "pr-2"], [1, "card", "limit-wedget", "withdraw", "border-0", "mb-2"], ["src", "assets/images/withdrawal_limit.png", "alt", "Generic placeholder image", 1, "mb-2"], ["class", "mt-0 text-size-13 font-weight-400", 4, "ngIf"], ["class", "mt-0 text-size-15 font-weight-400", 4, "ngIf"], [1, "box", "pl-2"], [1, "card", "limit-wedget", "deposit", "border-0", "mb-2"], ["src", "assets/images/deposit_limit.png", "alt", "Generic placeholder image ", 1, "mb-2"], [2, "visibility", "hidden"], [1, "col-md-8", "pl-2"], ["alt", "Avatar", 1, "img-thumbnail", "rounded-circle", 3, "src"], ["src", "assets/images/avatar-default.png", "alt", "Avatar", 1, "img-thumbnail", "rounded-circle"], [1, "badge", "badge-warning"], [1, "badge", "badge-success"], [1, "badge", "badge-danger"], ["routerLink", "/home/documents/kyc-upload", 1, "ml-2", "cursor-pointer"], ["name", "edit", 1, "icon-size-18", 2, "color", "#ffc107"], ["name", "upload", 1, "icon-size-18", 2, "color", "#ffc107"], [1, "mt-0", "text-size-13", "font-weight-400"], [1, "mt-0", "text-size-15", "font-weight-400"]], template: function ProfileCoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProfileCoreComponent_img_9_Template, 1, 1, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProfileCoreComponent_img_10_Template, 1, 0, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i-feather", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h5", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "User Since ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "strong", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ProfileCoreComponent_span_26_Template, 3, 0, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ProfileCoreComponent_span_27_Template, 3, 0, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ProfileCoreComponent_span_28_Template, 3, 0, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ProfileCoreComponent_span_29_Template, 3, 0, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ProfileCoreComponent_span_30_Template, 3, 0, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ProfileCoreComponent_span_31_Template, 2, 0, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ProfileCoreComponent_span_32_Template, 2, 0, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Change Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Your Account Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Your Wallet Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h5", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Withdraw Limit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, ProfileCoreComponent_h5_56_Template, 2, 0, "h5", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, ProfileCoreComponent_h5_57_Template, 2, 1, "h5", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Deposit Limit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, ProfileCoreComponent_h5_70_Template, 2, 0, "h5", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, ProfileCoreComponent_h5_71_Template, 2, 1, "h5", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profileData.sProfile.uPersonalInfo.ProfilePic);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.profileData.sProfile.uPersonalInfo.ProfilePic);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.profileData.sProfile.uPersonalInfo.First);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.profileData.sProfile.uContactInfo.Email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](23, 17, ctx.profileData.sProfile.uTimestampInfo.sCreadedOn_Str, "MMMM d, y"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profileData.sProfile.uKYCStatus === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profileData.sProfile.uKYCStatus === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profileData.sProfile.uKYCStatus === 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profileData.sProfile.uKYCStatus === 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profileData.sProfile.uKYCStatus === 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profileData.sProfile.uKYCStatus === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profileData.sProfile.uKYCStatus !== 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx.walletBalance, ".00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.minWithDraw === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.minWithDraw !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.minDeposit === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.minDeposit !== 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], angular_feather__WEBPACK_IMPORTED_MODULE_5__["ɵa"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: [".history-title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  padding: 10px 0;\n  font-weight: 400;\n}\n\n.card[_ngcontent-%COMP%] {\n  background: transparent;\n}\n\n.profile-container[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.profile-container[_ngcontent-%COMP%]   .bg-soft-primary[_ngcontent-%COMP%] {\n  background: rgba(85, 110, 230, 0.25) !important;\n}\n\n.profile-container[_ngcontent-%COMP%]   .profile-wedget[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  background-color: rgba(85, 110, 230, 0.25) !important;\n  height: 100px;\n  background-image: url('profile_bg.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.profile-container[_ngcontent-%COMP%]   .profile-wedget[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  background: #f8f8f8;\n  border-radius: 0px 4px 4px 0;\n}\n\n.profile-container[_ngcontent-%COMP%]   .profile-wedget[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  margin-top: -55px;\n}\n\n.profile-container[_ngcontent-%COMP%]   .profile-wedget[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 110px;\n}\n\n.profile-container[_ngcontent-%COMP%]   .profile-wedget[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   .upload-picture-box[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -7px;\n  left: 46%;\n}\n\n.profile-container[_ngcontent-%COMP%]   .profile-wedget[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   .upload-picture-box[_ngcontent-%COMP%]   .upload-icon[_ngcontent-%COMP%] {\n  color: #dc507e;\n  fill: #eaebf3;\n}\n\n.profile-container[_ngcontent-%COMP%]   .profile-wedget[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   .upload-picture-box[_ngcontent-%COMP%]   .upload-icon[_ngcontent-%COMP%]:hover {\n  color: #eaebf3;\n  fill: #dc507e;\n}\n\n.profile-container[_ngcontent-%COMP%]   .profile-wedget[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .profile-detail[_ngcontent-%COMP%]   .user-status[_ngcontent-%COMP%] {\n  line-height: 20px;\n}\n\n.profile-container[_ngcontent-%COMP%]   .profile-wedget[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .profile-detail[_ngcontent-%COMP%]   .user-status[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.profile-container[_ngcontent-%COMP%]   .profile-wedget[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .profile-detail[_ngcontent-%COMP%]   .user-status[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #0168fa;\n}\n\n.profile-container[_ngcontent-%COMP%]   .profile-wedget[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .profile-detail[_ngcontent-%COMP%]   .user-status[_ngcontent-%COMP%]   .membership[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.profile-container[_ngcontent-%COMP%]   .profile-wedget[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .profile-detail[_ngcontent-%COMP%]   .kyc-status[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  margin-bottom: 3px;\n  font-size: 10px;\n  font-weight: 600;\n  border-radius: 30px;\n}\n\n.profile-container[_ngcontent-%COMP%]   .profile-wedget[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .profile-detail[_ngcontent-%COMP%]   .kyc-status[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  font-size: 12px;\n  padding: 1px 10px;\n  border-radius: 16px;\n}\n\n.profile-container[_ngcontent-%COMP%]   .account-summery-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding: 5px 10px;\n}\n\n.profile-container[_ngcontent-%COMP%]   .balance-wedget[_ngcontent-%COMP%] {\n  padding: 0px 0;\n}\n\n.profile-container[_ngcontent-%COMP%]   .balance-wedget[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  background: #e9f8e6;\n  padding: 15px 10px;\n}\n\n.profile-container[_ngcontent-%COMP%]   .balance-wedget[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .media-area[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.profile-container[_ngcontent-%COMP%]   .balance-wedget[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .media-area[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50px;\n}\n\n.profile-container[_ngcontent-%COMP%]   .balance-wedget[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .media-area[_ngcontent-%COMP%]   .media-body-area[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0px !important;\n  font-size: 29px;\n  font-weight: 300;\n}\n\n.profile-container[_ngcontent-%COMP%]   .balance-wedget[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .media-area[_ngcontent-%COMP%]   .media-body-area[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.profile-container[_ngcontent-%COMP%]   .limit-section[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n}\n\n.profile-container[_ngcontent-%COMP%]   .limit-section[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.profile-container[_ngcontent-%COMP%]   .limit-section[_ngcontent-%COMP%]   .withdraw[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  background: #e4e9f9;\n}\n\n.profile-container[_ngcontent-%COMP%]   .limit-section[_ngcontent-%COMP%]   .deposit[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  background: #f8e5f1;\n}\n\n.profile-container[_ngcontent-%COMP%]   .limit-section[_ngcontent-%COMP%]   .limit-wedget[_ngcontent-%COMP%] {\n  padding: 0 0px;\n}\n\n.profile-container[_ngcontent-%COMP%]   .limit-section[_ngcontent-%COMP%]   .limit-wedget[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 10px 10px;\n}\n\n.profile-container[_ngcontent-%COMP%]   .limit-section[_ngcontent-%COMP%]   .limit-wedget[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .media-area[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.profile-container[_ngcontent-%COMP%]   .limit-section[_ngcontent-%COMP%]   .limit-wedget[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .media-area[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 35px;\n}\n\n.profile-container[_ngcontent-%COMP%]   .limit-section[_ngcontent-%COMP%]   .limit-wedget[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .media-area[_ngcontent-%COMP%]   .media-body-area[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0px !important;\n  font-size: 29px;\n  font-weight: 300;\n}\n\n.profile-container[_ngcontent-%COMP%]   .limit-section[_ngcontent-%COMP%]   .limit-wedget[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .media-area[_ngcontent-%COMP%]   .media-body-area[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2xpZW50LWNvcmUvcHJvZmlsZS9wcm9maWxlLWNvcmUvRjpcXG5ld3RyYWRlclxcdHJhZGVyNC01L3NyY1xcYXBwXFxwYWdlc1xcY2xpZW50LWNvcmVcXHByb2ZpbGVcXHByb2ZpbGUtY29yZVxccHJvZmlsZS1jb3JlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9jbGllbnQtY29yZS9wcm9maWxlL3Byb2ZpbGUtY29yZS9wcm9maWxlLWNvcmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSx1QkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtBQ0NKOztBREFJO0VBQ0ksK0NBQUE7QUNFUjs7QURDUTtFQUNJLHFEQUFBO0VBQ0EsYUFBQTtFQUNBLHVDQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQ0NaOztBRENRO0VBQ0ksbUJBQUE7RUFDQSw0QkFBQTtBQ0NaOztBRENZO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDQ2hCOztBREFnQjtFQUNJLFlBQUE7QUNFcEI7O0FEQWdCO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQ0VwQjs7QURLb0I7RUFDSSxjQUFBO0VBQ0EsYUFBQTtBQ0h4Qjs7QURLb0I7RUFDSSxjQUFBO0VBQ0EsYUFBQTtBQ0h4Qjs7QURTZ0I7RUFDSSxpQkFBQTtBQ1BwQjs7QURRb0I7RUFDSSxTQUFBO0FDTnhCOztBRFFvQjtFQUNJLFNBQUE7RUFDQSxjQUFBO0FDTnhCOztBRFNvQjtFQUNJLFNBQUE7QUNQeEI7O0FEV29CO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDVHhCOztBRFdvQjtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDVHhCOztBRGVJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDYlI7O0FEZUk7RUFDSSxjQUFBO0FDYlI7O0FEY1E7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0FDWlo7O0FEYVk7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ1hoQjs7QURZZ0I7RUFDSSxXQUFBO0FDVnBCOztBRGFvQjtFQUNJLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDWHhCOztBRGFvQjtFQUNJLGVBQUE7QUNYeEI7O0FEaUJJO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EsdUJBQUE7VUFBQSwyQkFBQTtBQ2ZSOztBRGdCUTtFQUNJLFVBQUE7QUNkWjs7QURpQlk7RUFDSSxtQkFBQTtBQ2ZoQjs7QURtQlk7RUFDSSxtQkFBQTtBQ2pCaEI7O0FEb0JRO0VBQ0ksY0FBQTtBQ2xCWjs7QURtQlk7RUFDSSxrQkFBQTtBQ2pCaEI7O0FEa0JnQjtFQUNJLGtCQUFBO0FDaEJwQjs7QURpQm9CO0VBQ0ksV0FBQTtBQ2Z4Qjs7QURrQndCO0VBQ0ksc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNoQjVCOztBRGtCd0I7RUFDSSxlQUFBO0FDaEI1QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NsaWVudC1jb3JlL3Byb2ZpbGUvcHJvZmlsZS1jb3JlL3Byb2ZpbGUtY29yZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oaXN0b3J5LXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4ucHJvZmlsZS1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIC5iZy1zb2Z0LXByaW1hcnkge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoODUsIDExMCwgMjMwLCAuMjUpIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5wcm9maWxlLXdlZGdldCB7XHJcbiAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODUsIDExMCwgMjMwLCAuMjUpIWltcG9ydGFudDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9wcm9maWxlX2JnLmpwZ1wiKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcmQtYm9keSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmOGY4Zjg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCA0cHggNHB4IDA7XHJcbiAgICAgICAgICAgIC8vIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgICAgICAgLmF2YXRhciB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtNTVweDtcclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDExMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnVwbG9hZC1waWN0dXJlLWJveCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogLTdweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA0NiU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6IHJlZDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcGFkZGluZy10b3A6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAudXBsb2FkLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2RjNTA3ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogI2VhZWJmMztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnVwbG9hZC1pY29uOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNlYWViZjM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6ICNkYzUwN2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9maWxlLWRldGFpbCB7XHJcbiAgICAgICAgICAgICAgICAvLyBwYWRkaW5nOiAwIDVweDtcclxuICAgICAgICAgICAgICAgIC51c2VyLXN0YXR1cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5lbWFpbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMTY4ZmE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLm1lbWJlcnNoaXAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmt5Yy1zdGF0dXMge1xyXG4gICAgICAgICAgICAgICAgICAgIC5iYWRnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmJ0biB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMXB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmFjY291bnQtc3VtbWVyeS10aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmJhbGFuY2Utd2VkZ2V0IHtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMDtcclxuICAgICAgICAuY2FyZC1ib2R5IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2U5ZjhlNjtcclxuICAgICAgICAgICAgcGFkZGluZzogMTVweCAxMHB4O1xyXG4gICAgICAgICAgICAubWVkaWEtYXJlYSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5tZWRpYS1ib2R5LWFyZWEge1xyXG4gICAgICAgICAgICAgICAgICAgIGg1IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyOXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzbWFsbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubGltaXQtc2VjdGlvbiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAuYm94IHtcclxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLndpdGhkcmF3IHtcclxuICAgICAgICAgICAgLmNhcmQtYm9keSB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTRlOWY5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kZXBvc2l0IHtcclxuICAgICAgICAgICAgLmNhcmQtYm9keSB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjhlNWYxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5saW1pdC13ZWRnZXQge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDBweDtcclxuICAgICAgICAgICAgLmNhcmQtYm9keSB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAubWVkaWEtYXJlYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAubWVkaWEtYm9keS1hcmVhIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaDUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjlweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc21hbGwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLmhpc3RvcnktdGl0bGUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmNhcmQge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLnByb2ZpbGUtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5wcm9maWxlLWNvbnRhaW5lciAuYmctc29mdC1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZDogcmdiYSg4NSwgMTEwLCAyMzAsIDAuMjUpICFpbXBvcnRhbnQ7XG59XG4ucHJvZmlsZS1jb250YWluZXIgLnByb2ZpbGUtd2VkZ2V0IC5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDg1LCAxMTAsIDIzMCwgMC4yNSkgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9wcm9maWxlX2JnLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5wcm9maWxlLWNvbnRhaW5lciAucHJvZmlsZS13ZWRnZXQgLmNhcmQtYm9keSB7XG4gIGJhY2tncm91bmQ6ICNmOGY4Zjg7XG4gIGJvcmRlci1yYWRpdXM6IDBweCA0cHggNHB4IDA7XG59XG4ucHJvZmlsZS1jb250YWluZXIgLnByb2ZpbGUtd2VkZ2V0IC5jYXJkLWJvZHkgLmF2YXRhciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAtNTVweDtcbn1cbi5wcm9maWxlLWNvbnRhaW5lciAucHJvZmlsZS13ZWRnZXQgLmNhcmQtYm9keSAuYXZhdGFyIGltZyB7XG4gIHdpZHRoOiAxMTBweDtcbn1cbi5wcm9maWxlLWNvbnRhaW5lciAucHJvZmlsZS13ZWRnZXQgLmNhcmQtYm9keSAuYXZhdGFyIC51cGxvYWQtcGljdHVyZS1ib3gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTdweDtcbiAgbGVmdDogNDYlO1xufVxuLnByb2ZpbGUtY29udGFpbmVyIC5wcm9maWxlLXdlZGdldCAuY2FyZC1ib2R5IC5hdmF0YXIgLnVwbG9hZC1waWN0dXJlLWJveCAudXBsb2FkLWljb24ge1xuICBjb2xvcjogI2RjNTA3ZTtcbiAgZmlsbDogI2VhZWJmMztcbn1cbi5wcm9maWxlLWNvbnRhaW5lciAucHJvZmlsZS13ZWRnZXQgLmNhcmQtYm9keSAuYXZhdGFyIC51cGxvYWQtcGljdHVyZS1ib3ggLnVwbG9hZC1pY29uOmhvdmVyIHtcbiAgY29sb3I6ICNlYWViZjM7XG4gIGZpbGw6ICNkYzUwN2U7XG59XG4ucHJvZmlsZS1jb250YWluZXIgLnByb2ZpbGUtd2VkZ2V0IC5jYXJkLWJvZHkgLnByb2ZpbGUtZGV0YWlsIC51c2VyLXN0YXR1cyB7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuLnByb2ZpbGUtY29udGFpbmVyIC5wcm9maWxlLXdlZGdldCAuY2FyZC1ib2R5IC5wcm9maWxlLWRldGFpbCAudXNlci1zdGF0dXMgLm5hbWUge1xuICBtYXJnaW46IDA7XG59XG4ucHJvZmlsZS1jb250YWluZXIgLnByb2ZpbGUtd2VkZ2V0IC5jYXJkLWJvZHkgLnByb2ZpbGUtZGV0YWlsIC51c2VyLXN0YXR1cyAuZW1haWwge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjMDE2OGZhO1xufVxuLnByb2ZpbGUtY29udGFpbmVyIC5wcm9maWxlLXdlZGdldCAuY2FyZC1ib2R5IC5wcm9maWxlLWRldGFpbCAudXNlci1zdGF0dXMgLm1lbWJlcnNoaXAge1xuICBtYXJnaW46IDA7XG59XG4ucHJvZmlsZS1jb250YWluZXIgLnByb2ZpbGUtd2VkZ2V0IC5jYXJkLWJvZHkgLnByb2ZpbGUtZGV0YWlsIC5reWMtc3RhdHVzIC5iYWRnZSB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbn1cbi5wcm9maWxlLWNvbnRhaW5lciAucHJvZmlsZS13ZWRnZXQgLmNhcmQtYm9keSAucHJvZmlsZS1kZXRhaWwgLmt5Yy1zdGF0dXMgLmJ0biB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogMXB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG59XG4ucHJvZmlsZS1jb250YWluZXIgLmFjY291bnQtc3VtbWVyeS10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG59XG4ucHJvZmlsZS1jb250YWluZXIgLmJhbGFuY2Utd2VkZ2V0IHtcbiAgcGFkZGluZzogMHB4IDA7XG59XG4ucHJvZmlsZS1jb250YWluZXIgLmJhbGFuY2Utd2VkZ2V0IC5jYXJkLWJvZHkge1xuICBiYWNrZ3JvdW5kOiAjZTlmOGU2O1xuICBwYWRkaW5nOiAxNXB4IDEwcHg7XG59XG4ucHJvZmlsZS1jb250YWluZXIgLmJhbGFuY2Utd2VkZ2V0IC5jYXJkLWJvZHkgLm1lZGlhLWFyZWEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wcm9maWxlLWNvbnRhaW5lciAuYmFsYW5jZS13ZWRnZXQgLmNhcmQtYm9keSAubWVkaWEtYXJlYSBpbWcge1xuICB3aWR0aDogNTBweDtcbn1cbi5wcm9maWxlLWNvbnRhaW5lciAuYmFsYW5jZS13ZWRnZXQgLmNhcmQtYm9keSAubWVkaWEtYXJlYSAubWVkaWEtYm9keS1hcmVhIGg1IHtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyOXB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLnByb2ZpbGUtY29udGFpbmVyIC5iYWxhbmNlLXdlZGdldCAuY2FyZC1ib2R5IC5tZWRpYS1hcmVhIC5tZWRpYS1ib2R5LWFyZWEgc21hbGwge1xuICBmb250LXNpemU6IDEycHg7XG59XG4ucHJvZmlsZS1jb250YWluZXIgLmxpbWl0LXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG4ucHJvZmlsZS1jb250YWluZXIgLmxpbWl0LXNlY3Rpb24gLmJveCB7XG4gIHdpZHRoOiA1MCU7XG59XG4ucHJvZmlsZS1jb250YWluZXIgLmxpbWl0LXNlY3Rpb24gLndpdGhkcmF3IC5jYXJkLWJvZHkge1xuICBiYWNrZ3JvdW5kOiAjZTRlOWY5O1xufVxuLnByb2ZpbGUtY29udGFpbmVyIC5saW1pdC1zZWN0aW9uIC5kZXBvc2l0IC5jYXJkLWJvZHkge1xuICBiYWNrZ3JvdW5kOiAjZjhlNWYxO1xufVxuLnByb2ZpbGUtY29udGFpbmVyIC5saW1pdC1zZWN0aW9uIC5saW1pdC13ZWRnZXQge1xuICBwYWRkaW5nOiAwIDBweDtcbn1cbi5wcm9maWxlLWNvbnRhaW5lciAubGltaXQtc2VjdGlvbiAubGltaXQtd2VkZ2V0IC5jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAxMHB4IDEwcHg7XG59XG4ucHJvZmlsZS1jb250YWluZXIgLmxpbWl0LXNlY3Rpb24gLmxpbWl0LXdlZGdldCAuY2FyZC1ib2R5IC5tZWRpYS1hcmVhIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnByb2ZpbGUtY29udGFpbmVyIC5saW1pdC1zZWN0aW9uIC5saW1pdC13ZWRnZXQgLmNhcmQtYm9keSAubWVkaWEtYXJlYSBpbWcge1xuICB3aWR0aDogMzVweDtcbn1cbi5wcm9maWxlLWNvbnRhaW5lciAubGltaXQtc2VjdGlvbiAubGltaXQtd2VkZ2V0IC5jYXJkLWJvZHkgLm1lZGlhLWFyZWEgLm1lZGlhLWJvZHktYXJlYSBoNSB7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMjlweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi5wcm9maWxlLWNvbnRhaW5lciAubGltaXQtc2VjdGlvbiAubGltaXQtd2VkZ2V0IC5jYXJkLWJvZHkgLm1lZGlhLWFyZWEgLm1lZGlhLWJvZHktYXJlYSBzbWFsbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileCoreComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile-core',
                templateUrl: './profile-core.component.html',
                styleUrls: ['./profile-core.component.scss']
            }]
    }], function () { return [{ type: _shared_services_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"] }, { type: _shared_services_header_service__WEBPACK_IMPORTED_MODULE_2__["HeaderService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/client-core/profile/profile-core/upload-profile-img/upload-profile-img.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/client-core/profile/profile-core/upload-profile-img/upload-profile-img.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: UploadProfileImgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadProfileImgComponent", function() { return UploadProfileImgComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../../shared/services/global.service */ "./src/app/shared/services/global.service.ts");
/* harmony import */ var _shared_services_header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../../shared/services/header.service */ "./src/app/shared/services/header.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../../shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");








const _c0 = ["formData"];
class UploadProfileImgComponent {
    constructor(globalService, headerService, router, route, http, notificationService) {
        this.globalService = globalService;
        this.headerService = headerService;
        this.router = router;
        this.route = route;
        this.http = http;
        this.notificationService = notificationService;
        this.ErrorMsqBlock = false;
        this.successMsqBlock = false;
        this.isLoading = false;
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
    fileEvent(fileInput) {
        this.imagename = fileInput;
        console.log(fileInput);
        this.imagename = fileInput.target.files[0].name;
        console.log(this.imagename);
    }
    ngOnInit() {
        this.loadDatas();
    }
    loadDatas() {
        this.subscription1 = this.headerService.castLoggedUserDetail.subscribe(resData => (this.LoggedParams = resData));
        this.editableData = this.LoggedParams.sProfile;
    }
    updateLocalStorageData() {
        this.headerService.updateLocalStorageSProfile(this.editableData);
    }
    encodeImageFileAsURL(element) {
        this.isLoading = true;
        const file = element.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            // console.log('RESULT', reader.result);
            const data = {
                App: 'uploadReceit',
                oData: reader.result
            };
            // tslint:disable-next-line: max-line-length
            this.http.post('http://client.traderscabinet.com/tr_test/assets/PHP/alfa/v1/common/UploadDipositPaymentReceipt', data).subscribe((res) => {
                this.profileSnap = res.resp.url;
                this.editableData.uPersonalInfo.ProfilePic = this.profileSnap;
                // tslint:disable-next-line: no-shadowed-variable
                this.globalService.edit(this.editableData).subscribe((res) => {
                    if (res.Result === true) {
                        // this.onSuccessMsqDisplay('Profile Picture Updated Successfully');
                        // console.log('success');
                        this.notificationService.showSuccess('Profile Picture Updated Successfully', 'Success');
                        this.updateLocalStorageData();
                        this.isLoading = false;
                        setTimeout(() => {
                            this.router.navigate(['../view'], { relativeTo: this.route });
                        }, 1000);
                    }
                }, err => {
                    console.log(err);
                    // this.onErrorMsqDisplay('Faild to Update Profile Picture');
                    this.notificationService.showError('Faild to Update Profile Picture', 'Error');
                    this.isLoading = false;
                });
            });
        };
    }
    ngOnDestroy() {
        this.subscription1.unsubscribe();
    }
}
UploadProfileImgComponent.ɵfac = function UploadProfileImgComponent_Factory(t) { return new (t || UploadProfileImgComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_header_service__WEBPACK_IMPORTED_MODULE_2__["HeaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"])); };
UploadProfileImgComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UploadProfileImgComponent, selectors: [["app-upload-profile-img"]], viewQuery: function UploadProfileImgComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.imageUploadForm = _t.first);
    } }, decls: 36, vars: 3, consts: [[1, "change-picture-container"], [1, ""], [1, "from-box"], [1, "heading"], [1, "title"], [1, "change-picture-box", "mb-2"], [1, "row"], [1, "col-md-12"], [1, "form-group", "file-area"], ["for", "images"], ["type", "file", "name", "image", "id", "images", "required", "required", "multiple", "multiple", "accept", "image/x-png,image/gif,image/jpeg", 3, "change"], ["image", ""], [1, "file-dummy"], [1, "success"], [1, "default"], [1, "m-0", "text-size-13"], [1, "position-relative", "text-right", 2, "padding-top", "25px"], ["routerLink", "../view", "type", "button", 1, "btn", "btn-info", "btn-sm", "px-3", "position-relative", "mr-2"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", "px-3", "position-relative", 3, "click"]], template: function UploadProfileImgComponent_Template(rf, ctx) { if (rf & 1) {
        const _r430 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Picture Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "You can set or change profile picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Image ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Your image should be at least 400x300 wide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UploadProfileImgComponent_Template_input_change_16_listener($event) { return ctx.fileEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Your files are selected.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Please select Profile Picture to Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Click Here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploadProfileImgComponent_Template_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r430); const _r429 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17); return ctx.encodeImageFileAsURL(_r429); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Upload Image ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.imagename, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-spinner", ctx.isLoading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: [".change-picture-container[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  line-height: 16px;\n  padding: 6px 15px;\n  background: #eff3f6;\n  \n  border-radius: 4px 4px 0 0;\n  text-align: left;\n}\n.change-picture-container[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n}\n.change-picture-container[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.change-picture-container[_ngcontent-%COMP%]   .from-box[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  -webkit-transition: all 5s ease-out;\n  transition: all 5s ease-out;\n  text-align: center;\n}\n.change-picture-container[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  position: relative;\n  top: -3px;\n}\n.change-picture-container[_ngcontent-%COMP%]   .change-picture-box[_ngcontent-%COMP%] {\n  background: #f5f7f9;\n  padding: 15px;\n  border-radius: 0 0 4px 4px;\n}\n.file-area[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n}\n.file-area[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  opacity: 0;\n  cursor: pointer;\n}\n.file-area[_ngcontent-%COMP%]   .file-dummy[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 70px;\n  background: rgba(255, 255, 255, 0.2);\n  border: 2px dashed rgba(255, 255, 255, 0.2);\n  text-align: center;\n  -webkit-transition: background 0.3s ease-in-out;\n  transition: background 0.3s ease-in-out;\n}\n.file-area[_ngcontent-%COMP%]   .file-dummy[_ngcontent-%COMP%]   .success[_ngcontent-%COMP%] {\n  display: none;\n}\n.file-area[_ngcontent-%COMP%]:hover   .file-dummy[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n}\n.file-area[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%]:focus    + .file-dummy[_ngcontent-%COMP%] {\n  outline: 2px solid rgba(255, 255, 255, 0.5);\n  outline: -webkit-focus-ring-color auto 5px;\n}\n.file-area[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%]:valid    + .file-dummy[_ngcontent-%COMP%] {\n  border-color: rgba(0, 255, 0, 0.4);\n  background-color: rgba(0, 255, 0, 0.3);\n}\n.file-area[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%]:valid    + .file-dummy[_ngcontent-%COMP%]   .success[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.file-area[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%]:valid    + .file-dummy[_ngcontent-%COMP%]   .default[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.file-area[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n}\n.form-group[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  margin: auto;\n  margin-bottom: 10px;\n}\nlabel[_ngcontent-%COMP%] {\n  font-weight: 500;\n  display: block;\n  margin: 4px 0;\n  text-transform: uppercase;\n  font-size: 13px;\n  overflow: hidden;\n  text-align: left;\n}\nlabel[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  float: right;\n  text-transform: none;\n  font-weight: 200;\n  line-height: 1em;\n  font-style: italic;\n  opacity: 0.8;\n}\n.file-area[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  opacity: 0;\n  cursor: pointer;\n}\n.file-area[_ngcontent-%COMP%]   .file-dummy[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 30px;\n  background: #f8e5f1;\n  border: 2px dashed #dc507e;\n  text-align: center;\n  -webkit-transition: background 0.3s ease-in-out;\n  transition: background 0.3s ease-in-out;\n}\n.file-area[_ngcontent-%COMP%]   .file-dummy[_ngcontent-%COMP%]   .default[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.file-area[_ngcontent-%COMP%]   .file-dummy[_ngcontent-%COMP%]   .success[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2xpZW50LWNvcmUvcHJvZmlsZS9wcm9maWxlLWNvcmUvdXBsb2FkLXByb2ZpbGUtaW1nL0Y6XFxuZXd0cmFkZXJcXHRyYWRlcjQtNS9zcmNcXGFwcFxccGFnZXNcXGNsaWVudC1jb3JlXFxwcm9maWxlXFxwcm9maWxlLWNvcmVcXHVwbG9hZC1wcm9maWxlLWltZ1xcdXBsb2FkLXByb2ZpbGUtaW1nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9jbGllbnQtY29yZS9wcm9maWxlL3Byb2ZpbGUtY29yZS91cGxvYWQtcHJvZmlsZS1pbWcvdXBsb2FkLXByb2ZpbGUtaW1nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUVBLGdCQUFBO0FDRlI7QURHUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0RaO0FER1E7RUFDSSxlQUFBO0FDRFo7QURJSTtFQUVJLGtCQUFBO0VBRUEsbUNBQUE7RUFBQSwyQkFBQTtFQUNBLGtCQUFBO0FDSlI7QURNSTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtBQ0pSO0FETUk7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtBQ0pSO0FEU0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUNOSjtBRFNBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ05KO0FEU0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLCtDQUFBO0VBQUEsdUNBQUE7QUNOSjtBRFNBO0VBQ0ksYUFBQTtBQ05KO0FEU0E7RUFDSSxvQ0FBQTtBQ05KO0FEU0E7RUFDSSwyQ0FBQTtFQUNBLDBDQUFBO0FDTko7QURTQTtFQUNJLGtDQUFBO0VBQ0Esc0NBQUE7QUNOSjtBRFNBO0VBQ0kscUJBQUE7QUNOSjtBRFNBO0VBQ0ksYUFBQTtBQ05KO0FEVUEsOERBQUE7QUFFQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQ1JKO0FEV0E7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ1JKO0FEV0E7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ1JKO0FEV0E7RUFDSSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDUko7QURXQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNSSjtBRFdBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQ0FBQTtFQUFBLHVDQUFBO0FDUko7QURXQTtFQUNJLGVBQUE7QUNSSjtBRFdBO0VBQ0ksYUFBQTtBQ1JKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2xpZW50LWNvcmUvcHJvZmlsZS9wcm9maWxlLWNvcmUvdXBsb2FkLXByb2ZpbGUtaW1nL3VwbG9hZC1wcm9maWxlLWltZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGFuZ2UtcGljdHVyZS1jb250YWluZXIge1xyXG4gICAgLy8gcGFkZGluZzogMTBweCAxMnB4O1xyXG4gICAgLmhlYWRpbmcge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDZweCAxNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNlZmYzZjY7XHJcbiAgICAgICAgLyogbWFyZ2luLWJvdHRvbTogMTVweDsgKi9cclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcclxuICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjZWFlYmYzO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzbWFsbCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZnJvbS1ib3gge1xyXG4gICAgICAgIC8vIHBhZGRpbmc6IDE1cHggMTVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgI2RmZTJlNDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgNXMgZWFzZS1vdXQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmNsb3NlLWJ0biB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRvcDogLTNweDtcclxuICAgIH1cclxuICAgIC5jaGFuZ2UtcGljdHVyZS1ib3gge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmNWY3Zjk7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgNHB4IDRweDtcclxuICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjZWFlYmYzO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZmlsZS1hcmVhIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uZmlsZS1hcmVhIGlucHV0W3R5cGU9ZmlsZV0ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZmlsZS1hcmVhIC5maWxlLWR1bW15IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogNzBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICAgIGJvcmRlcjogMnB4IGRhc2hlZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5maWxlLWFyZWEgLmZpbGUtZHVtbXkgLnN1Y2Nlc3Mge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmZpbGUtYXJlYTpob3ZlciAuZmlsZS1kdW1teSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbn1cclxuXHJcbi5maWxlLWFyZWEgaW5wdXRbdHlwZT1maWxlXTpmb2N1cysuZmlsZS1kdW1teSB7XHJcbiAgICBvdXRsaW5lOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gICAgb3V0bGluZTogLXdlYmtpdC1mb2N1cy1yaW5nLWNvbG9yIGF1dG8gNXB4O1xyXG59XHJcblxyXG4uZmlsZS1hcmVhIGlucHV0W3R5cGU9ZmlsZV06dmFsaWQrLmZpbGUtZHVtbXkge1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDI1NSwgMCwgMC40KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCAwLCAwLjMpO1xyXG59XHJcblxyXG4uZmlsZS1hcmVhIGlucHV0W3R5cGU9ZmlsZV06dmFsaWQrLmZpbGUtZHVtbXkgLnN1Y2Nlc3Mge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uZmlsZS1hcmVhIGlucHV0W3R5cGU9ZmlsZV06dmFsaWQrLmZpbGUtZHVtbXkgLmRlZmF1bHQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PSBCQVNJQyBTVFlMSU5HID09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLmZpbGUtYXJlYSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDRweCAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG5sYWJlbCBzcGFuIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuXHJcbi5maWxlLWFyZWEgaW5wdXRbdHlwZT1maWxlXSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5maWxlLWFyZWEgLmZpbGUtZHVtbXkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2Y4ZTVmMTtcclxuICAgIGJvcmRlcjogMnB4IGRhc2hlZCAjZGM1MDdlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uZmlsZS1hcmVhIC5maWxlLWR1bW15IC5kZWZhdWx0IHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmZpbGUtYXJlYSAuZmlsZS1kdW1teSAuc3VjY2VzcyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59IiwiLmNoYW5nZS1waWN0dXJlLWNvbnRhaW5lciAuaGVhZGluZyB7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBwYWRkaW5nOiA2cHggMTVweDtcbiAgYmFja2dyb3VuZDogI2VmZjNmNjtcbiAgLyogbWFyZ2luLWJvdHRvbTogMTVweDsgKi9cbiAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uY2hhbmdlLXBpY3R1cmUtY29udGFpbmVyIC5oZWFkaW5nIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5jaGFuZ2UtcGljdHVyZS1jb250YWluZXIgLmhlYWRpbmcgc21hbGwge1xuICBmb250LXNpemU6IDEycHg7XG59XG4uY2hhbmdlLXBpY3R1cmUtY29udGFpbmVyIC5mcm9tLWJveCB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdHJhbnNpdGlvbjogYWxsIDVzIGVhc2Utb3V0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY2hhbmdlLXBpY3R1cmUtY29udGFpbmVyIC5jbG9zZS1idG4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTNweDtcbn1cbi5jaGFuZ2UtcGljdHVyZS1jb250YWluZXIgLmNoYW5nZS1waWN0dXJlLWJveCB7XG4gIGJhY2tncm91bmQ6ICNmNWY3Zjk7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCA0cHggNHB4O1xufVxuXG4uZmlsZS1hcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmZpbGUtYXJlYSBpbnB1dFt0eXBlPWZpbGVdIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIG9wYWNpdHk6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZpbGUtYXJlYSAuZmlsZS1kdW1teSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA3MHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4uZmlsZS1hcmVhIC5maWxlLWR1bW15IC5zdWNjZXNzIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmZpbGUtYXJlYTpob3ZlciAuZmlsZS1kdW1teSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbn1cblxuLmZpbGUtYXJlYSBpbnB1dFt0eXBlPWZpbGVdOmZvY3VzICsgLmZpbGUtZHVtbXkge1xuICBvdXRsaW5lOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICBvdXRsaW5lOiAtd2Via2l0LWZvY3VzLXJpbmctY29sb3IgYXV0byA1cHg7XG59XG5cbi5maWxlLWFyZWEgaW5wdXRbdHlwZT1maWxlXTp2YWxpZCArIC5maWxlLWR1bW15IHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDI1NSwgMCwgMC40KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNTUsIDAsIDAuMyk7XG59XG5cbi5maWxlLWFyZWEgaW5wdXRbdHlwZT1maWxlXTp2YWxpZCArIC5maWxlLWR1bW15IC5zdWNjZXNzIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uZmlsZS1hcmVhIGlucHV0W3R5cGU9ZmlsZV06dmFsaWQgKyAuZmlsZS1kdW1teSAuZGVmYXVsdCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PSBCQVNJQyBTVFlMSU5HID09PT09PT09PT09PT09PT09PT09PSAqL1xuLmZpbGUtYXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxubGFiZWwge1xuICBmb250LXdlaWdodDogNTAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiA0cHggMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5sYWJlbCBzcGFuIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBvcGFjaXR5OiAwLjg7XG59XG5cbi5maWxlLWFyZWEgaW5wdXRbdHlwZT1maWxlXSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBvcGFjaXR5OiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5maWxlLWFyZWEgLmZpbGUtZHVtbXkge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMzBweDtcbiAgYmFja2dyb3VuZDogI2Y4ZTVmMTtcbiAgYm9yZGVyOiAycHggZGFzaGVkICNkYzUwN2U7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4uZmlsZS1hcmVhIC5maWxlLWR1bW15IC5kZWZhdWx0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uZmlsZS1hcmVhIC5maWxlLWR1bW15IC5zdWNjZXNzIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UploadProfileImgComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-upload-profile-img',
                templateUrl: './upload-profile-img.component.html',
                styleUrls: ['./upload-profile-img.component.scss']
            }]
    }], function () { return [{ type: _shared_services_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"] }, { type: _shared_services_header_service__WEBPACK_IMPORTED_MODULE_2__["HeaderService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] }]; }, { imageUploadForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['formData', { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/client-core/profile/profile-core/view-profile/view-profile.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/client-core/profile/profile-core/view-profile/view-profile.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ViewProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProfileComponent", function() { return ViewProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../../shared/services/global.service */ "./src/app/shared/services/global.service.ts");
/* harmony import */ var _shared_services_header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../../shared/services/header.service */ "./src/app/shared/services/header.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-feather */ "./node_modules/angular-feather/__ivy_ngcc__/fesm2015/angular-feather.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function ViewProfileComponent_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r453 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r453.profileData.sProfile.uPersonalInfo.First, " ");
} }
function ViewProfileComponent_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "----");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewProfileComponent_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r455 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r455.profileData.sProfile.uContactInfo.Phone, " ");
} }
function ViewProfileComponent_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "----");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewProfileComponent_span_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r457 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r457.profileData.sProfile.uContactInfo.Email, " ");
} }
function ViewProfileComponent_span_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "----");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewProfileComponent_span_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r459 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r459.profileData.sProfile.uAddressInfo.Country, " ");
} }
function ViewProfileComponent_span_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "----");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewProfileComponent_span_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r461 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r461.profileData.sProfile.uAddressInfo.Address1, ", ", ctx_r461.profileData.sProfile.uAddressInfo.Address2, " ");
} }
function ViewProfileComponent_span_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "----");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewProfileComponent_span_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r463 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r463.profileData.sProfile.uAddressInfo.City, " ");
} }
function ViewProfileComponent_span_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "----");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewProfileComponent_span_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r465 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r465.profileData.sProfile.uAddressInfo.State, " ");
} }
function ViewProfileComponent_span_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "----");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewProfileComponent_span_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r467 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r467.profileData.sProfile.uAddressInfo.ZipCode, " ");
} }
function ViewProfileComponent_span_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "----");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewProfileComponent_span_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r469 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r469.profileData.sProfile.uBankInfo.Bank_Name, " ");
} }
function ViewProfileComponent_span_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "----");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewProfileComponent_span_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r471 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r471.profileData.sProfile.uBankInfo.Account_Name, " ");
} }
function ViewProfileComponent_span_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "----");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewProfileComponent_span_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r473 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r473.profileData.sProfile.uBankInfo.Account_Number, " ");
} }
function ViewProfileComponent_span_105_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "----");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewProfileComponent_span_110_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r475 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r475.profileData.sProfile.uBankInfo.Swift_Code, " ");
} }
function ViewProfileComponent_span_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "----");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewProfileComponent_span_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r477 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r477.profileData.sProfile.uBankInfo.IBAN_IFSC_Code, " ");
} }
function ViewProfileComponent_span_117_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "----");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewProfileComponent_span_122_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r479 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r479.profileData.sProfile.uBankInfo.Bank_Addr, " ");
} }
function ViewProfileComponent_span_123_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "----");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ViewProfileComponent {
    constructor(globalService, headerService) {
        this.globalService = globalService;
        this.headerService = headerService;
    }
    ngOnInit() {
        this.subscription1 = this.headerService.castLoggedUserDetail.subscribe(resData => (this.profileData = resData));
    }
    // loadDatas() {
    // }
    ngOnDestroy() {
        this.subscription1.unsubscribe();
        // alert('ngOnDestroy clicked');
    }
}
ViewProfileComponent.ɵfac = function ViewProfileComponent_Factory(t) { return new (t || ViewProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_header_service__WEBPACK_IMPORTED_MODULE_2__["HeaderService"])); };
ViewProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewProfileComponent, selectors: [["app-view-profile"]], decls: 124, vars: 28, consts: [[1, "row"], [1, "col-md-12"], [1, "row", "mb-3"], [1, "col-md-6", "pr-2", "pl-2"], [1, "card", "table-wedget", "border-0"], [1, "card-body"], [1, "wedget-header"], [1, "card-title"], ["routerLink", "../edit", 1, "btn", "btn-link", "btn-sm"], ["name", "edit", 1, "icon-size-16"], [1, "table-responsive", "personal-details"], [1, "table", "table-nowrap", "mb-0"], ["scope", "row "], [4, "ngIf"], ["scope", "row"], [1, "col-md-6", "pl-2", "pr-2"], [1, "table-responsive", "contact-details"], [1, "col-md-12", "pr-2", "pl-2"], [1, "table-responsive", "bank-details"]], template: function ViewProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Personal Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i-feather", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Edit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Full Name :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ViewProfileComponent_span_19_Template, 2, 1, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ViewProfileComponent_span_20_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Mobile :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ViewProfileComponent_span_25_Template, 2, 1, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ViewProfileComponent_span_26_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "E-mail :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ViewProfileComponent_span_31_Template, 2, 1, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ViewProfileComponent_span_32_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Country :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, ViewProfileComponent_span_37_Template, 2, 1, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, ViewProfileComponent_span_38_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Contact Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i-feather", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Edit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Address :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, ViewProfileComponent_span_55_Template, 2, 2, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, ViewProfileComponent_span_56_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "City :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, ViewProfileComponent_span_61_Template, 2, 1, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, ViewProfileComponent_span_62_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "State :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, ViewProfileComponent_span_67_Template, 2, 1, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, ViewProfileComponent_span_68_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Zip Code :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, ViewProfileComponent_span_73_Template, 2, 1, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, ViewProfileComponent_span_74_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Bank Account Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "i-feather", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " Edit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Bank Name :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, ViewProfileComponent_span_92_Template, 2, 1, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, ViewProfileComponent_span_93_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Account Name :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](98, ViewProfileComponent_span_98_Template, 2, 1, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](99, ViewProfileComponent_span_99_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Account Number:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](104, ViewProfileComponent_span_104_Template, 2, 1, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](105, ViewProfileComponent_span_105_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Swift Code :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](110, ViewProfileComponent_span_110_Template, 2, 1, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](111, ViewProfileComponent_span_111_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "IBAN IFSC Code :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](116, ViewProfileComponent_span_116_Template, 2, 1, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](117, ViewProfileComponent_span_117_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Bank Address :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](122, ViewProfileComponent_span_122_Template, 2, 1, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](123, ViewProfileComponent_span_123_Template, 2, 0, "span", 13);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profileData.sProfile.uPersonalInfo.First != null || ctx.profileData.sProfile.uPersonalInfo.First != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profileData.sProfile.uPersonalInfo.First == null || ctx.profileData.sProfile.uPersonalInfo.First == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profileData.sProfile.uContactInfo.Phone != null || ctx.profileData.sProfile.uContactInfo.Phone != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profileData.sProfile.uContactInfo.Phone == null || ctx.profileData.sProfile.uContactInfo.Phone == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profileData.sProfile.uContactInfo.Email != null || ctx.profileData.sProfile.uContactInfo.Email != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profileData.sProfile.uContactInfo.Email == null || ctx.profileData.sProfile.uContactInfo.Email == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profileData.sProfile.uAddressInfo.Country != null || ctx.profileData.sProfile.uAddressInfo.Country != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profileData.sProfile.uAddressInfo.Country == null || ctx.profileData.sProfile.uAddressInfo.Country == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profileData.sProfile.uAddressInfo.Address1 != null || ctx.profileData.sProfile.uAddressInfo.Address1 != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profileData.sProfile.uAddressInfo.Address1 == null || ctx.profileData.sProfile.uAddressInfo.Address1 == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profileData.sProfile.uAddressInfo.City != null || ctx.profileData.sProfile.uAddressInfo.City != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profileData.sProfile.uAddressInfo.City == null || ctx.profileData.sProfile.uAddressInfo.City == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profileData.sProfile.uAddressInfo.State != null || ctx.profileData.sProfile.uAddressInfo.State != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profileData.sProfile.uAddressInfo.State == null || ctx.profileData.sProfile.uAddressInfo.State == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profileData.sProfile.uAddressInfo.ZipCode != null || ctx.profileData.sProfile.uAddressInfo.ZipCode != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profileData.sProfile.uAddressInfo.ZipCode == null || ctx.profileData.sProfile.uAddressInfo.ZipCode == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profileData.sProfile.uBankInfo.Bank_Name != null || ctx.profileData.sProfile.uBankInfo.Bank_Name != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profileData.sProfile.uBankInfo.Bank_Name == null || ctx.profileData.sProfile.uBankInfo.Bank_Name == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profileData.sProfile.uBankInfo.Account_Name != null || ctx.profileData.sProfile.uBankInfo.Account_Name != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profileData.sProfile.uBankInfo.Account_Name == null || ctx.profileData.sProfile.uBankInfo.Account_Name == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profileData.sProfile.uBankInfo.Account_Number != null || ctx.profileData.sProfile.uBankInfo.Account_Number != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profileData.sProfile.uBankInfo.Account_Number == null || ctx.profileData.sProfile.uBankInfo.Account_Number == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profileData.sProfile.uBankInfo.Swift_Code != null || ctx.profileData.sProfile.uBankInfo.Swift_Code != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profileData.sProfile.uBankInfo.Swift_Code == null || ctx.profileData.sProfile.uBankInfo.Swift_Code == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profileData.sProfile.uBankInfo.IBAN_IFSC_Code != null || ctx.profileData.sProfile.uBankInfo.IBAN_IFSC_Code != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profileData.sProfile.uBankInfo.IBAN_IFSC_Code == null || ctx.profileData.sProfile.uBankInfo.IBAN_IFSC_Code == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profileData.sProfile.uBankInfo.Bank_Addr != null || ctx.profileData.sProfile.uBankInfo.Bank_Addr != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profileData.sProfile.uBankInfo.Bank_Addr == null || ctx.profileData.sProfile.uBankInfo.Bank_Addr == "");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], angular_feather__WEBPACK_IMPORTED_MODULE_4__["ɵa"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".table-wedget[_ngcontent-%COMP%] {\n  background: #FFF;\n}\n.table-wedget[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 400;\n}\n.table-wedget[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  font-size: 13px;\n  padding: 1px 0px;\n  border-radius: 15px;\n  position: absolute;\n  right: 14px;\n  height: 22px;\n  font-weight: 400;\n  box-shadow: none;\n  top: -3px;\n}\n.table-wedget[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\n.table-wedget[_ngcontent-%COMP%]   .wedget-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.table-wedget[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  border-collapse: separate;\n  border-spacing: 0 6px;\n}\n.table-wedget[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(odd) {\n  background: #eff3f6;\n}\n.table-wedget[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(even) {\n  background: #f8f9fa;\n}\n.table-wedget[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-wedget[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 10px;\n}\n.table-wedget[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-radius: 4px 0px 0px 4px;\n  border-top: 0px solid #dee2e6;\n  font-size: 12px;\n  font-weight: 500;\n}\n.table-wedget[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-radius: 0px 4px 4px 0px;\n  border-top: 0px solid #dee2e6;\n  font-size: 12px;\n}\n.table-wedget[_ngcontent-%COMP%]   .personal-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  width: 95px;\n}\n.table-wedget[_ngcontent-%COMP%]   .contact-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  width: 95px;\n}\n.table-wedget[_ngcontent-%COMP%]   .bank-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  width: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2xpZW50LWNvcmUvcHJvZmlsZS9wcm9maWxlLWNvcmUvdmlldy1wcm9maWxlL0Y6XFxuZXd0cmFkZXJcXHRyYWRlcjQtNS9zcmNcXGFwcFxccGFnZXNcXGNsaWVudC1jb3JlXFxwcm9maWxlXFxwcm9maWxlLWNvcmVcXHZpZXctcHJvZmlsZVxcdmlldy1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9jbGllbnQtY29yZS9wcm9maWxlL3Byb2ZpbGUtY29yZS92aWV3LXByb2ZpbGUvdmlldy1wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSjtBRENJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDQ1I7QURBUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FDRVo7QURDSTtFQUNJLHVCQUFBO0FDQ1I7QURFUTtFQUNJLFNBQUE7QUNBWjtBREdJO0VBQ0kseUJBQUE7RUFDQSxxQkFBQTtBQ0RSO0FERVE7RUFDSSxtQkFBQTtBQ0FaO0FERVE7RUFDSSxtQkFBQTtBQ0FaO0FERVE7O0VBRUksa0JBQUE7QUNBWjtBREtZO0VBQ0ksOEJBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0hoQjtBREtZO0VBQ0ksOEJBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUNIaEI7QURPSTtFQUNJLFdBQUE7QUNMUjtBRE9JO0VBQ0ksV0FBQTtBQ0xSO0FET0k7RUFDSSxZQUFBO0FDTFIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jbGllbnQtY29yZS9wcm9maWxlL3Byb2ZpbGUtY29yZS92aWV3LXByb2ZpbGUvdmlldy1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlLXdlZGdldCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGO1xyXG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgI2U2ZTdlOCAhaW1wb3J0YW50O1xyXG4gICAgLmNhcmQtdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIC5idG4ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDFweCAwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjJweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgdG9wOiAtM3B4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jYXJkLWJvZHkge1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLndlZGdldC1oZWFkZXIge1xyXG4gICAgICAgIGg0IHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHRhYmxlIHtcclxuICAgICAgICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xyXG4gICAgICAgIGJvcmRlci1zcGFjaW5nOiAwIDZweDtcclxuICAgICAgICB0Ym9keT50cjpudGgtY2hpbGQob2RkKSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlZmYzZjY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRib2R5PnRyOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoLFxyXG4gICAgICAgIHRkIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0ciB7XHJcbiAgICAgICAgICAgIC8vIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgLTFweCAwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCk7XHJcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6ICNmMmYzZjU7XHJcbiAgICAgICAgICAgIHRoIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweCAwcHggMHB4IDRweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDBweCBzb2xpZCAjZGVlMmU2O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0ZCB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggNHB4IDRweCAwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAwcHggc29saWQgI2RlZTJlNjtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5wZXJzb25hbC1kZXRhaWxzIHRhYmxlIHRyIHRoIHtcclxuICAgICAgICB3aWR0aDogOTVweDtcclxuICAgIH1cclxuICAgIC5jb250YWN0LWRldGFpbHMgdGFibGUgdHIgdGgge1xyXG4gICAgICAgIHdpZHRoOiA5NXB4O1xyXG4gICAgfVxyXG4gICAgLmJhbmstZGV0YWlscyB0YWJsZSB0ciB0aCB7XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgfVxyXG59IiwiLnRhYmxlLXdlZGdldCB7XG4gIGJhY2tncm91bmQ6ICNGRkY7XG59XG4udGFibGUtd2VkZ2V0IC5jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLnRhYmxlLXdlZGdldCAuY2FyZC10aXRsZSAuYnRuIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nOiAxcHggMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNHB4O1xuICBoZWlnaHQ6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHRvcDogLTNweDtcbn1cbi50YWJsZS13ZWRnZXQgLmNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuLnRhYmxlLXdlZGdldCAud2VkZ2V0LWhlYWRlciBoNCB7XG4gIG1hcmdpbjogMDtcbn1cbi50YWJsZS13ZWRnZXQgdGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuICBib3JkZXItc3BhY2luZzogMCA2cHg7XG59XG4udGFibGUtd2VkZ2V0IHRhYmxlIHRib2R5ID4gdHI6bnRoLWNoaWxkKG9kZCkge1xuICBiYWNrZ3JvdW5kOiAjZWZmM2Y2O1xufVxuLnRhYmxlLXdlZGdldCB0YWJsZSB0Ym9keSA+IHRyOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG59XG4udGFibGUtd2VkZ2V0IHRhYmxlIHRoLFxuLnRhYmxlLXdlZGdldCB0YWJsZSB0ZCB7XG4gIHBhZGRpbmc6IDEwcHggMTBweDtcbn1cbi50YWJsZS13ZWRnZXQgdGFibGUgdHIgdGgge1xuICBib3JkZXItcmFkaXVzOiA0cHggMHB4IDBweCA0cHg7XG4gIGJvcmRlci10b3A6IDBweCBzb2xpZCAjZGVlMmU2O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4udGFibGUtd2VkZ2V0IHRhYmxlIHRyIHRkIHtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDRweCA0cHggMHB4O1xuICBib3JkZXItdG9wOiAwcHggc29saWQgI2RlZTJlNjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLnRhYmxlLXdlZGdldCAucGVyc29uYWwtZGV0YWlscyB0YWJsZSB0ciB0aCB7XG4gIHdpZHRoOiA5NXB4O1xufVxuLnRhYmxlLXdlZGdldCAuY29udGFjdC1kZXRhaWxzIHRhYmxlIHRyIHRoIHtcbiAgd2lkdGg6IDk1cHg7XG59XG4udGFibGUtd2VkZ2V0IC5iYW5rLWRldGFpbHMgdGFibGUgdHIgdGgge1xuICB3aWR0aDogMTUwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-view-profile',
                templateUrl: './view-profile.component.html',
                styleUrls: ['./view-profile.component.scss']
            }]
    }], function () { return [{ type: _shared_services_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"] }, { type: _shared_services_header_service__WEBPACK_IMPORTED_MODULE_2__["HeaderService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/client-core/profile/profile-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/client-core/profile/profile-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileRoutingModule", function() { return ProfileRoutingModule; });
/* harmony import */ var _profile_core_upload_profile_img_upload_profile_img_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-core/upload-profile-img/upload-profile-img.component */ "./src/app/pages/client-core/profile/profile-core/upload-profile-img/upload-profile-img.component.ts");
/* harmony import */ var _profile_core_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-core/change-password/change-password.component */ "./src/app/pages/client-core/profile/profile-core/change-password/change-password.component.ts");
/* harmony import */ var _profile_core_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile-core/edit-profile/edit-profile.component */ "./src/app/pages/client-core/profile/profile-core/edit-profile/edit-profile.component.ts");
/* harmony import */ var _profile_core_view_profile_view_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-core/view-profile/view-profile.component */ "./src/app/pages/client-core/profile/profile-core/view-profile/view-profile.component.ts");
/* harmony import */ var _profile_core_profile_core_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile-core/profile-core.component */ "./src/app/pages/client-core/profile/profile-core/profile-core.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");









const routes = [
    {
        path: '',
        component: _profile_core_profile_core_component__WEBPACK_IMPORTED_MODULE_4__["ProfileCoreComponent"],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'view'
            },
            {
                path: 'view',
                component: _profile_core_view_profile_view_profile_component__WEBPACK_IMPORTED_MODULE_3__["ViewProfileComponent"],
                data: { title: 'My Profile', breadcrumb: 'View Profile' }
            },
            {
                path: 'upload-profile-image',
                component: _profile_core_upload_profile_img_upload_profile_img_component__WEBPACK_IMPORTED_MODULE_0__["UploadProfileImgComponent"],
                data: { title: 'My Profile', breadcrumb: 'Upload Profile image' }
            },
            {
                path: 'edit',
                component: _profile_core_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_2__["EditProfileComponent"],
                data: { title: 'My Profile', breadcrumb: 'Edit Profile' }
            },
            {
                path: 'change-password',
                component: _profile_core_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_1__["ChangePasswordComponent"],
                data: { title: 'My Profile', breadcrumb: 'Change Password' }
            }
        ]
    }
];
class ProfileRoutingModule {
}
ProfileRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ProfileRoutingModule });
ProfileRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function ProfileRoutingModule_Factory(t) { return new (t || ProfileRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ProfileRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](ProfileRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/client-core/profile/profile.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/client-core/profile/profile.module.ts ***!
  \*************************************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/pages/client-core/profile/profile-routing.module.ts");
/* harmony import */ var _profile_core_profile_core_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile-core/profile-core.component */ "./src/app/pages/client-core/profile/profile-core/profile-core.component.ts");
/* harmony import */ var _profile_core_view_profile_view_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-core/view-profile/view-profile.component */ "./src/app/pages/client-core/profile/profile-core/view-profile/view-profile.component.ts");
/* harmony import */ var _profile_core_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-core/edit-profile/edit-profile.component */ "./src/app/pages/client-core/profile/profile-core/edit-profile/edit-profile.component.ts");
/* harmony import */ var _profile_core_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile-core/change-password/change-password.component */ "./src/app/pages/client-core/profile/profile-core/change-password/change-password.component.ts");
/* harmony import */ var _profile_core_upload_profile_img_upload_profile_img_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile-core/upload-profile-img/upload-profile-img.component */ "./src/app/pages/client-core/profile/profile-core/upload-profile-img/upload-profile-img.component.ts");










class ProfileModule {
}
ProfileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ProfileModule });
ProfileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ProfileModule_Factory(t) { return new (t || ProfileModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProfileRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProfileModule, { declarations: [_profile_core_profile_core_component__WEBPACK_IMPORTED_MODULE_4__["ProfileCoreComponent"], _profile_core_view_profile_view_profile_component__WEBPACK_IMPORTED_MODULE_5__["ViewProfileComponent"], _profile_core_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_6__["EditProfileComponent"], _profile_core_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_7__["ChangePasswordComponent"], _profile_core_upload_profile_img_upload_profile_img_component__WEBPACK_IMPORTED_MODULE_8__["UploadProfileImgComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _profile_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProfileRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProfileModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_profile_core_profile_core_component__WEBPACK_IMPORTED_MODULE_4__["ProfileCoreComponent"], _profile_core_view_profile_view_profile_component__WEBPACK_IMPORTED_MODULE_5__["ViewProfileComponent"], _profile_core_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_6__["EditProfileComponent"], _profile_core_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_7__["ChangePasswordComponent"], _profile_core_upload_profile_img_upload_profile_img_component__WEBPACK_IMPORTED_MODULE_8__["UploadProfileImgComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _profile_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProfileRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=client-core-profile-profile-module-es2015.js.map