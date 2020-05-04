function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["accounts-accounts-module"], {
  /***/
  "./src/app/accounts/accounts-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/accounts/accounts-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: AccountsRoutingModule */

  /***/
  function srcAppAccountsAccountsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountsRoutingModule", function () {
      return AccountsRoutingModule;
    });
    /* harmony import */


    var _acounts_core_acounts_core_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./acounts-core/acounts-core.component */
    "./src/app/accounts/acounts-core/acounts-core.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _acounts_core_set_password_set_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./acounts-core/set-password/set-password.component */
    "./src/app/accounts/acounts-core/set-password/set-password.component.ts");
    /* harmony import */


    var _acounts_core_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./acounts-core/forget-password/forget-password.component */
    "./src/app/accounts/acounts-core/forget-password/forget-password.component.ts");
    /* harmony import */


    var _acounts_core_otp_password_otp_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./acounts-core/otp-password/otp-password.component */
    "./src/app/accounts/acounts-core/otp-password/otp-password.component.ts");
    /* harmony import */


    var _acounts_core_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./acounts-core/signup/signup.component */
    "./src/app/accounts/acounts-core/signup/signup.component.ts");
    /* harmony import */


    var _acounts_core_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./acounts-core/login/login.component */
    "./src/app/accounts/acounts-core/login/login.component.ts");
    /* harmony import */


    var _auth_core_set_password1_set_password1_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./auth-core/set-password1/set-password1.component */
    "./src/app/accounts/auth-core/set-password1/set-password1.component.ts");
    /* harmony import */


    var _auth_core_otp_password1_otp_password1_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./auth-core/otp-password1/otp-password1.component */
    "./src/app/accounts/auth-core/otp-password1/otp-password1.component.ts");
    /* harmony import */


    var _auth_core_auth_core_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./auth-core/auth-core.component */
    "./src/app/accounts/auth-core/auth-core.component.ts");
    /* harmony import */


    var _auth_core_login1_login1_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./auth-core/login1/login1.component */
    "./src/app/accounts/auth-core/login1/login1.component.ts");
    /* harmony import */


    var _auth_core_signup1_signup1_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./auth-core/signup1/signup1.component */
    "./src/app/accounts/auth-core/signup1/signup1.component.ts");
    /* harmony import */


    var _auth_core_forget_password1_forget_password1_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./auth-core/forget-password1/forget-password1.component */
    "./src/app/accounts/auth-core/forget-password1/forget-password1.component.ts");

    var routes = [{
      path: '',
      component: _acounts_core_acounts_core_component__WEBPACK_IMPORTED_MODULE_0__["AcountsCoreComponent"],
      children: [{
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
      }, {
        path: 'login',
        component: _acounts_core_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
        data: {
          breadcrumb: 'login'
        }
      }, {
        path: 'signup',
        component: _acounts_core_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"],
        data: {
          breadcrumb: 'signup'
        }
      }, {
        path: 'otp-password',
        component: _acounts_core_otp_password_otp_password_component__WEBPACK_IMPORTED_MODULE_5__["OtpPasswordComponent"],
        data: {
          breadcrumb: 'otp-password'
        }
      }, {
        path: 'forget-password',
        component: _acounts_core_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_4__["ForgetPasswordComponent"],
        data: {
          breadcrumb: 'Forget password'
        }
      }, {
        path: 'set-password',
        component: _acounts_core_set_password_set_password_component__WEBPACK_IMPORTED_MODULE_3__["SetPasswordComponent"],
        data: {
          breadcrumb: 'Set Password'
        }
      }]
    }, {
      path: 'style1',
      component: _auth_core_auth_core_component__WEBPACK_IMPORTED_MODULE_10__["AuthCoreComponent"],
      children: [{
        path: '',
        pathMatch: 'full',
        redirectTo: 'login1'
      }, {
        path: 'login1',
        component: _auth_core_login1_login1_component__WEBPACK_IMPORTED_MODULE_11__["Login1Component"],
        data: {
          breadcrumb: 'login'
        }
      }, {
        path: 'signup1',
        component: _auth_core_signup1_signup1_component__WEBPACK_IMPORTED_MODULE_12__["Signup1Component"],
        data: {
          breadcrumb: 'signup'
        }
      }, {
        path: 'otp-password1',
        component: _auth_core_otp_password1_otp_password1_component__WEBPACK_IMPORTED_MODULE_9__["OtpPassword1Component"],
        data: {
          breadcrumb: 'Otp Password'
        }
      }, {
        path: 'forget-password1',
        component: _auth_core_forget_password1_forget_password1_component__WEBPACK_IMPORTED_MODULE_13__["ForgetPassword1Component"],
        data: {
          breadcrumb: 'Forget-Password'
        }
      }, {
        path: 'set-password1',
        component: _auth_core_set_password1_set_password1_component__WEBPACK_IMPORTED_MODULE_8__["SetPassword1Component"],
        data: {
          breadcrumb: 'Set Password'
        }
      }]
    }];

    var AccountsRoutingModule = function AccountsRoutingModule() {
      _classCallCheck(this, AccountsRoutingModule);
    };

    AccountsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AccountsRoutingModule
    });
    AccountsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AccountsRoutingModule_Factory(t) {
        return new (t || AccountsRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AccountsRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AccountsRoutingModule, [{
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
  "./src/app/accounts/accounts.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/accounts/accounts.module.ts ***!
    \*********************************************/

  /*! exports provided: AccountsModule */

  /***/
  function srcAppAccountsAccountsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountsModule", function () {
      return AccountsModule;
    });
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _accounts_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./accounts-routing.module */
    "./src/app/accounts/accounts-routing.module.ts");
    /* harmony import */


    var _acounts_core_acounts_core_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./acounts-core/acounts-core.component */
    "./src/app/accounts/acounts-core/acounts-core.component.ts");
    /* harmony import */


    var _acounts_core_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./acounts-core/login/login.component */
    "./src/app/accounts/acounts-core/login/login.component.ts");
    /* harmony import */


    var _acounts_core_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./acounts-core/signup/signup.component */
    "./src/app/accounts/acounts-core/signup/signup.component.ts");
    /* harmony import */


    var _acounts_core_otp_password_otp_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./acounts-core/otp-password/otp-password.component */
    "./src/app/accounts/acounts-core/otp-password/otp-password.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _auth_core_auth_core_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./auth-core/auth-core.component */
    "./src/app/accounts/auth-core/auth-core.component.ts");
    /* harmony import */


    var _auth_core_login1_login1_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./auth-core/login1/login1.component */
    "./src/app/accounts/auth-core/login1/login1.component.ts");
    /* harmony import */


    var _auth_core_signup1_signup1_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./auth-core/signup1/signup1.component */
    "./src/app/accounts/auth-core/signup1/signup1.component.ts");
    /* harmony import */


    var _auth_core_forget_password1_forget_password1_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./auth-core/forget-password1/forget-password1.component */
    "./src/app/accounts/auth-core/forget-password1/forget-password1.component.ts");
    /* harmony import */


    var _auth_core_set_password1_set_password1_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./auth-core/set-password1/set-password1.component */
    "./src/app/accounts/auth-core/set-password1/set-password1.component.ts");
    /* harmony import */


    var _auth_core_otp_password1_otp_password1_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./auth-core/otp-password1/otp-password1.component */
    "./src/app/accounts/auth-core/otp-password1/otp-password1.component.ts");
    /* harmony import */


    var _acounts_core_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./acounts-core/forget-password/forget-password.component */
    "./src/app/accounts/acounts-core/forget-password/forget-password.component.ts");
    /* harmony import */


    var _acounts_core_set_password_set_password_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./acounts-core/set-password/set-password.component */
    "./src/app/accounts/acounts-core/set-password/set-password.component.ts"); // import { FormsModule, ReactiveFormsModule } from '@angular/forms';


    var AccountsModule = function AccountsModule() {
      _classCallCheck(this, AccountsModule);
    };

    AccountsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AccountsModule
    });
    AccountsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AccountsModule_Factory(t) {
        return new (t || AccountsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _accounts_routing_module__WEBPACK_IMPORTED_MODULE_3__["AccountsRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AccountsModule, {
        declarations: [_acounts_core_acounts_core_component__WEBPACK_IMPORTED_MODULE_4__["AcountsCoreComponent"], _acounts_core_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _acounts_core_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"], _acounts_core_otp_password_otp_password_component__WEBPACK_IMPORTED_MODULE_7__["OtpPasswordComponent"], _auth_core_auth_core_component__WEBPACK_IMPORTED_MODULE_9__["AuthCoreComponent"], _auth_core_login1_login1_component__WEBPACK_IMPORTED_MODULE_10__["Login1Component"], _auth_core_signup1_signup1_component__WEBPACK_IMPORTED_MODULE_11__["Signup1Component"], _auth_core_forget_password1_forget_password1_component__WEBPACK_IMPORTED_MODULE_12__["ForgetPassword1Component"], _auth_core_set_password1_set_password1_component__WEBPACK_IMPORTED_MODULE_13__["SetPassword1Component"], _auth_core_otp_password1_otp_password1_component__WEBPACK_IMPORTED_MODULE_14__["OtpPassword1Component"], _acounts_core_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_15__["ForgetPasswordComponent"], _acounts_core_set_password_set_password_component__WEBPACK_IMPORTED_MODULE_16__["SetPasswordComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _accounts_routing_module__WEBPACK_IMPORTED_MODULE_3__["AccountsRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AccountsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_acounts_core_acounts_core_component__WEBPACK_IMPORTED_MODULE_4__["AcountsCoreComponent"], _acounts_core_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _acounts_core_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"], _acounts_core_otp_password_otp_password_component__WEBPACK_IMPORTED_MODULE_7__["OtpPasswordComponent"], _auth_core_auth_core_component__WEBPACK_IMPORTED_MODULE_9__["AuthCoreComponent"], _auth_core_login1_login1_component__WEBPACK_IMPORTED_MODULE_10__["Login1Component"], _auth_core_signup1_signup1_component__WEBPACK_IMPORTED_MODULE_11__["Signup1Component"], _auth_core_forget_password1_forget_password1_component__WEBPACK_IMPORTED_MODULE_12__["ForgetPassword1Component"], _auth_core_set_password1_set_password1_component__WEBPACK_IMPORTED_MODULE_13__["SetPassword1Component"], _auth_core_otp_password1_otp_password1_component__WEBPACK_IMPORTED_MODULE_14__["OtpPassword1Component"], _acounts_core_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_15__["ForgetPasswordComponent"], _acounts_core_set_password_set_password_component__WEBPACK_IMPORTED_MODULE_16__["SetPasswordComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _accounts_routing_module__WEBPACK_IMPORTED_MODULE_3__["AccountsRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/accounts/acounts-core/acounts-core.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/accounts/acounts-core/acounts-core.component.ts ***!
    \*****************************************************************/

  /*! exports provided: AcountsCoreComponent */

  /***/
  function srcAppAccountsAcountsCoreAcountsCoreComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AcountsCoreComponent", function () {
      return AcountsCoreComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_guard_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../shared/guard/auth.service */
    "./src/app/shared/guard/auth.service.ts");

    var AcountsCoreComponent =
    /*#__PURE__*/
    function () {
      function AcountsCoreComponent(activatedRoute, router, authService) {
        var _this = this;

        _classCallCheck(this, AcountsCoreComponent);

        this.activatedRoute = activatedRoute;
        this.router = router;
        this.authService = authService;
        this.isLoggedIn = false;
        this.subscription1 = this.authService.castLoggedIn.subscribe(function (islogin) {
          return _this.isLoggedIn = islogin;
        });
        setTimeout(function () {
          if (_this.isLoggedIn) {
            _this.router.navigate(['/home']);
          }
        }, 100);
      }

      _createClass(AcountsCoreComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription1.unsubscribe();
        }
      }]);

      return AcountsCoreComponent;
    }();

    AcountsCoreComponent.ɵfac = function AcountsCoreComponent_Factory(t) {
      return new (t || AcountsCoreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_guard_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
    };

    AcountsCoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AcountsCoreComponent,
      selectors: [["app-acounts-core"]],
      decls: 1,
      vars: 0,
      template: function AcountsCoreComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnRzL2Fjb3VudHMtY29yZS9hY291bnRzLWNvcmUuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AcountsCoreComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-acounts-core',
          templateUrl: './acounts-core.component.html',
          styleUrls: ['./acounts-core.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _shared_guard_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/accounts/acounts-core/forget-password/forget-password.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/accounts/acounts-core/forget-password/forget-password.component.ts ***!
    \************************************************************************************/

  /*! exports provided: ForgetPasswordComponent */

  /***/
  function srcAppAccountsAcountsCoreForgetPasswordForgetPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgetPasswordComponent", function () {
      return ForgetPasswordComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_services_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../shared/services/global.service */
    "./src/app/shared/services/global.service.ts");
    /* harmony import */


    var _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../../shared/services/notification.service */
    "./src/app/shared/services/notification.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["formData"];

    function ForgetPasswordComponent_span_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please Enter Correct Email Address");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c1 = function _c1() {
      return ["/auth/login"];
    };

    var ForgetPasswordComponent =
    /*#__PURE__*/
    function () {
      function ForgetPasswordComponent(router, route, globalService, notificationService) {
        _classCallCheck(this, ForgetPasswordComponent);

        this.router = router;
        this.route = route;
        this.globalService = globalService;
        this.notificationService = notificationService;
        this.isLoading = false;
      }

      _createClass(ForgetPasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this2 = this;

          this.isLoading = true;
          var params = {
            Email: this.resetPasswordForm.value.useremail,
            DealerId: 1001
          };
          this.globalService.passRequest(params).subscribe(function (data) {
            if (data.Result === true) {
              _this2.isLoading = false;

              _this2.notificationService.showSuccess(data.MSG_USER, 'success');

              _this2.router.navigate(['../login'], {
                relativeTo: _this2.route
              });
            } else {
              _this2.isLoading = false;

              _this2.notificationService.showError(data.MSG_USER, 'Error');
            }
          }, function (err) {
            console.log(err);

            _this2.notificationService.showError('Faild to Reset Password', 'Error');

            _this2.isLoading = false;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }]);

      return ForgetPasswordComponent;
    }();

    ForgetPasswordComponent.ɵfac = function ForgetPasswordComponent_Factory(t) {
      return new (t || ForgetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]));
    };

    ForgetPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ForgetPasswordComponent,
      selectors: [["app-forget-password"]],
      viewQuery: function ForgetPasswordComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.resetPasswordForm = _t.first);
        }
      },
      decls: 50,
      vars: 6,
      consts: [[1, "auth-inner-container", "bg-b", "main-txt-color", "m-0", "d-flex", "flex-center"], [1, "auth-page-box"], [1, "row", "no-gutters"], [1, "col-lg-6", "col-md-6", "position-relative", "d-none", "d-sm-block"], [1, "center-div-area"], [1, "position-relative", "m-auto", "auth-banner-area", "mt-5"], [1, "text-center"], ["src", "assets/images/feature5.png", "alt", "SignIn", 1, "img-fluid", "pl-5", "pr-5"], [1, "auth-brand-title"], [2, "color", "#ff6e33"], [1, "secondary-txt-color", "auth-brand-desc"], [1, "col-lg-6", "col-md-6", "position-relative"], [1, "inner-form-area", "bg-f", "position-relative"], [1, "form-box", "position-relative"], [1, "title-section", "text-left", "mb-4"], [1, "title-text", "text-size-17", "font-weight-400", "m-0", "p-0"], [1, "title-desc", "secondary-txt-color", "text-size-14"], [1, "", 3, "ngSubmit"], ["formData", "ngForm"], [1, "form-group", "position-relative"], ["for", "emailaddress", 1, ""], [1, "asterick"], ["autocomplete", "off", "ngModel", "", "required", "", "email", "", "name", "useremail", "type", "email", "id", "email ", "placeholder", "Enter your Registered Email Address", 1, "form-control", "text-size-15", "main-txt-color", "bg-f", "bd-color"], ["useremail", "ngModel"], ["class", "help-block text-danger", 4, "ngIf"], [1, "submit-btn", "mb-2"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", "btn-sm", "px-3", "py-2", "position-relative", 3, "disabled"], [1, "clearfix"], [1, "no-account", "text-size-13", "text-center", "mt-1"], [3, "routerLink"], [1, "divider-text"], [1, "no-account", "text-size-13", "float-left", "mt-1"], [2, "color", "red"], [1, "help-block", "text-danger"]],
      template: function ForgetPasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " A Forex Broker");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " With Over 10 Years of ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Professional Experience");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " With Global Presence. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Choose MT5 & Avail Advantages To Trade With Just $2/Trade & Also Avail Trade Insurance Program. Trading with your choice!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Forget Password ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "if you have forgotten your password you can reset it here.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "form", 17, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ForgetPasswordComponent_Template_form_ngSubmit_25_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Email Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 22, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ForgetPasswordComponent_span_34_Template, 2, 0, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Reset Your Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Back to Login Page ! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " SignIn ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Risk");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "b", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Risk Warning :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Trading FX instruments and CFDs can incur a high level of risk and may result in a loss of all your invested Capital.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r2.valid && _r2.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r1.valid || ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-spinner", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["EmailValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".auth-inner-container[_ngcontent-%COMP%] {\n  height: 100vh;\n  overflow: hidden;\n  overflow-y: auto;\n  width: 100%;\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.auth-inner-container[_ngcontent-%COMP%]   .auth-page-box[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 4px;\n  position: absolute;\n}\n.auth-inner-container[_ngcontent-%COMP%]   .auth-page-box[_ngcontent-%COMP%]   .auth-banner-area[_ngcontent-%COMP%] {\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  height: 100vh;\n  width: 100%;\n}\n.auth-inner-container[_ngcontent-%COMP%]   .auth-page-box[_ngcontent-%COMP%]   .auth-banner-area[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 470px;\n  height: auto;\n}\n.auth-inner-container[_ngcontent-%COMP%]   .auth-page-box[_ngcontent-%COMP%]   .inner-form-area[_ngcontent-%COMP%] {\n  padding: 10px;\n  width: 100%;\n  height: 100vh;\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.auth-inner-container[_ngcontent-%COMP%]   .auth-page-box[_ngcontent-%COMP%]   .inner-form-area[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  max-width: 500px;\n  margin: 0 auto;\n  height: 100vh;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.auth-inner-container[_ngcontent-%COMP%]   .auth-page-box[_ngcontent-%COMP%]   .inner-form-area[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  height: 45px;\n}\n.auth-inner-container[_ngcontent-%COMP%]   .auth-page-box[_ngcontent-%COMP%]   .inner-form-area[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 0.875rem 0.75rem;\n}\n.auth-brand-title[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  max-width: 600px;\n  text-align: left;\n  margin: 30px auto 15px;\n  font-size: 21px;\n  font-weight: 300;\n}\n.auth-brand-desc[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  max-width: 600px;\n  text-align: left;\n  margin: 0 auto;\n  margin-bottom: 5px;\n  font-size: 15px;\n  font-weight: 400;\n}\ninput.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border: 1px solid #f5222d !important;\n}\n@media screen and (max-width: 480px) {\n  .inner-form-area[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%] {\n    -webkit-box-pack: start !important;\n            justify-content: start !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudHMvYWNvdW50cy1jb3JlL2ZvcmdldC1wYXNzd29yZC9GOlxcbmV3dHJhZGVyXFx0cmFkZXI0LTUvc3JjXFxhcHBcXGFjY291bnRzXFxhY291bnRzLWNvcmVcXGZvcmdldC1wYXNzd29yZFxcZm9yZ2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hY2NvdW50cy9hY291bnRzLWNvcmUvZm9yZ2V0LXBhc3N3b3JkL2ZvcmdldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNDSjtBREFJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDRVI7QUREUTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ0daO0FERlk7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDSWhCO0FERFE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDR1o7QUREWTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUVBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDRWhCO0FERGdCO0VBQ0ksWUFBQTtBQ0dwQjtBRERnQjtFQUNJLHlCQUFBO0FDR3BCO0FESUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNESjtBRElBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0RKO0FESUE7RUFDSSxvQ0FBQTtBQ0RKO0FESUE7RUFFUTtJQUNJLGtDQUFBO1lBQUEsaUNBQUE7RUNGVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYWNjb3VudHMvYWNvdW50cy1jb3JlL2ZvcmdldC1wYXNzd29yZC9mb3JnZXQtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0aC1pbm5lci1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLmF1dGgtcGFnZS1ib3gge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIC5hdXRoLWJhbm5lci1hcmVhIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogNDcwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmlubmVyLWZvcm0tYXJlYSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAvLyBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgLmZvcm0tYm94IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgLy8gcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAuZm9ybS1jb250cm9sIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYnRuIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjg3NXJlbSAwLjc1cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uYXV0aC1icmFuZC10aXRsZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbWFyZ2luOiAzMHB4IGF1dG8gMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbi5hdXRoLWJyYW5kLWRlc2Mge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmNTIyMmQgIWltcG9ydGFudDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo0ODBweCkge1xyXG4gICAgLmlubmVyLWZvcm0tYXJlYSB7XHJcbiAgICAgICAgLmZvcm0tYm94IHtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzdGFydCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi5hdXRoLWlubmVyLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmF1dGgtaW5uZXItY29udGFpbmVyIC5hdXRoLXBhZ2UtYm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uYXV0aC1pbm5lci1jb250YWluZXIgLmF1dGgtcGFnZS1ib3ggLmF1dGgtYmFubmVyLWFyZWEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbn1cbi5hdXRoLWlubmVyLWNvbnRhaW5lciAuYXV0aC1wYWdlLWJveCAuYXV0aC1iYW5uZXItYXJlYSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA0NzBweDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLmF1dGgtaW5uZXItY29udGFpbmVyIC5hdXRoLXBhZ2UtYm94IC5pbm5lci1mb3JtLWFyZWEge1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5hdXRoLWlubmVyLWNvbnRhaW5lciAuYXV0aC1wYWdlLWJveCAuaW5uZXItZm9ybS1hcmVhIC5mb3JtLWJveCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5hdXRoLWlubmVyLWNvbnRhaW5lciAuYXV0aC1wYWdlLWJveCAuaW5uZXItZm9ybS1hcmVhIC5mb3JtLWJveCAuZm9ybS1jb250cm9sIHtcbiAgaGVpZ2h0OiA0NXB4O1xufVxuLmF1dGgtaW5uZXItY29udGFpbmVyIC5hdXRoLXBhZ2UtYm94IC5pbm5lci1mb3JtLWFyZWEgLmZvcm0tYm94IC5idG4ge1xuICBwYWRkaW5nOiAwLjg3NXJlbSAwLjc1cmVtO1xufVxuXG4uYXV0aC1icmFuZC10aXRsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbjogMzBweCBhdXRvIDE1cHg7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmF1dGgtYnJhbmQtZGVzYyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Y1MjIyZCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuaW5uZXItZm9ybS1hcmVhIC5mb3JtLWJveCB7XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydCAhaW1wb3J0YW50O1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgetPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-forget-password',
          templateUrl: './forget-password.component.html',
          styleUrls: ['./forget-password.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _shared_services_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"]
        }, {
          type: _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]
        }];
      }, {
        resetPasswordForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['formData', {
            static: false
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/accounts/acounts-core/login/login.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/accounts/acounts-core/login/login.component.ts ***!
    \****************************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppAccountsAcountsCoreLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_models_login_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../shared/models/login.modal */
    "./src/app/shared/models/login.modal.ts");
    /* harmony import */


    var _shared_services_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../shared/services/global.service */
    "./src/app/shared/services/global.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_guard_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../../shared/guard/auth.service */
    "./src/app/shared/guard/auth.service.ts");
    /* harmony import */


    var _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../../shared/services/notification.service */
    "./src/app/shared/services/notification.service.ts");
    /* harmony import */


    var angular_feather__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angular-feather */
    "./node_modules/angular-feather/__ivy_ngcc__/fesm2015/angular-feather.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["formData"];

    function LoginComponent_span_57_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter a valid email address");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_span_65_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter a valid password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c1 = function _c1() {
      return ["/auth/forget-password"];
    };

    var _c2 = function _c2() {
      return ["/auth/signup"];
    };

    var LoginComponent =
    /*#__PURE__*/
    function () {
      // loginError = false;
      function LoginComponent(globalService, router, authService, activatedRoute, notificationService) {
        _classCallCheck(this, LoginComponent);

        this.globalService = globalService;
        this.router = router;
        this.authService = authService;
        this.activatedRoute = activatedRoute;
        this.notificationService = notificationService;
        this.userLoginDetail = new _shared_models_login_modal__WEBPACK_IMPORTED_MODULE_1__["LoginModalData"](); // submitted = false;

        this.isLoading = false;
      }

      _createClass(LoginComponent, [{
        key: "onLoginSubmit",
        value: function onLoginSubmit() {
          var _this3 = this;

          this.isLoading = true;
          this.userLoginDetail.Email = this.signInForm.value.useremail;
          this.userLoginDetail.Password = this.signInForm.value.userpassword;
          this.globalService.loginUser(this.userLoginDetail).subscribe(function (usersData) {
            console.log(usersData);

            if (usersData.sProfile.sDealerId !== 0) {
              _this3.SetDataToLocalStorage(usersData);

              _this3.authService.login(true); // this.loginError = false;


              _this3.router.navigate(['/home']);

              _this3.notificationService.showSuccess('You have Successfully logged in', 'Success', 500);

              _this3.isLoading = false;
            } else {
              // this.loginError = true;
              _this3.authService.login(false);

              _this3.notificationService.showError('Please enter correct email & password !', 'Error');

              _this3.isLoading = false;
            }
          }, function (err) {
            console.log(err);

            _this3.notificationService.showError('Failed to login!', 'Error');

            _this3.isLoading = false;
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {} // Set User Data in Local storage

      }, {
        key: "SetDataToLocalStorage",
        value: function SetDataToLocalStorage(usersData) {
          localStorage.clear();
          localStorage.setItem('LoggedDealerCode', JSON.stringify(usersData.sProfile.sDealerId));
          localStorage.setItem('LoggedDealerEmail', usersData.sProfile.uContactInfo.Email);
          localStorage.setItem('LoggedDealerName', usersData.sProfile.uPersonalInfo.First);
          localStorage.setItem('LoggedDealermasterid', usersData.sProfile.sMasterId);
          localStorage.setItem('LoggedDealerwalletID', usersData.sProfile.sWalletId);
          localStorage.setItem('LoggedUser', JSON.stringify(usersData));
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_guard_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      viewQuery: function LoginComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.signInForm = _t.first);
        }
      },
      decls: 84,
      vars: 9,
      consts: [[1, "auth-inner-container", "bg-b", "main-txt-color", "m-0", "d-flex", "flex-center"], [1, "auth-page-box"], [1, "row", "no-gutters"], [1, "col-lg-7", "col-md-7", "position-relative", "d-none", "d-sm-block", "pl-5", "pr-5"], [1, "center-div-area"], [1, "position-relative", "m-auto", "auth-banner-area"], [1, "left-description-area"], [1, "logo-area"], ["src", "assets/images/bgd-logo.png", "alt", "SignIn", 1, ""], [1, "main-title"], [2, "color", "#ff6e33"], [1, "desc-box"], [1, "sub-title"], ["name", "check-circle", 1, "mr-1", 2, "color", "green"], [1, "desc"], [1, "desc-box", "border-0"], [1, "col-lg-5", "col-md-5", "position-relative"], [1, "inner-form-area", "bg-f", "position-relative", "pl-3", "pr-3"], [1, "form-box", "position-relative"], [1, "title-section", "text-left"], [1, "title-text", "text-size-17", "font-weight-400", "m-0", "p-0"], [1, "title-desc", "secondary-txt-color", "text-size-13"], [1, "", 3, "ngSubmit"], ["formData", "ngForm"], [1, "form-group", "position-relative"], ["for", "username", 1, "text-size-13", "font-weight-400"], ["autocomplete", "off", "ngModel", "", "required", "", "email", "", "name", "useremail", "type", "email", "id", "usedId ", "placeholder", "Enter your email address", 1, "form-control", "text-size-13", "main-txt-color", "bg-f", "bd-color"], ["useremail", "ngModel"], [1, "form-icon", "text-size-12"], [1, "fas", "fa-envelope"], ["class", "help-block text-danger ", 4, "ngIf"], ["for", "password ", 1, "text-size-13", "font-weight-400"], ["autocomplete", "off", "ngModel", "", "required", "", "name", "userpassword", "type", "password", "id", "password ", "placeholder", "Enter your password", 1, "form-control", "text-size-13", "main-txt-color", "bg-f", "bd-color"], ["userpassword", "ngModel"], [1, "fas", "fa-lock"], [1, "forgot-password", "mb-3", "text-size-13", "clearfix"], [1, "float-right", 3, "routerLink"], [1, "submit-btn", "mb-2"], ["type", "submit", "value", "Sign In", "routerLink", "/home", 1, "btn", "btn-primary", "btn-block", "text-size-14", "position-relative", 3, "disabled"], [1, "clearfix"], [1, "no-account", "text-size-13", "text-center", "mt-1"], [3, "routerLink"], [1, "divider-text"], [1, "no-account", "text-size-13", "float-left", "mt-1"], [2, "color", "red"], [1, "help-block", "text-danger"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Start");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Forex Trading ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Today !");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h5", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i-feather", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Trade with Just ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "$2/ Trade");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Lowest trading cost. Amazing isn't it!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h5", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i-feather", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "MT5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Trading Plateform");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Make the most of the best forex trading Platform");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h5", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i-feather", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Broker with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "10+");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Years Experience");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "We have been in forex trading business for more than a decade and have contributed to the growth of forex trading");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h3", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Sign In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Welcome back! Please sign in to continue.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "form", 22, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_48_listener() {
            return ctx.onLoginSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Email address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "input", 26, 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, LoginComponent_span_57_Template, 2, 0, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "input", 32, 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, LoginComponent_span_65_Template, 2, 0, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Forgot Password ?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Sign In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Don't have account ? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Create an Account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Risk");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "b", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Risk Warning :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " Trading FX instruments and CFDs can incur a high level of risk and may result in a loss of all your invested Capital.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](49);

          var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](54);

          var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r51.valid && _r51.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r53.valid && _r53.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r50.valid || ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-spinner", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2));
        }
      },
      directives: [angular_feather__WEBPACK_IMPORTED_MODULE_6__["ɵa"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["EmailValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
      styles: [".auth-inner-container[_ngcontent-%COMP%] {\n  height: 100vh;\n  overflow: hidden;\n  overflow-y: auto;\n  width: 100%;\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.auth-inner-container[_ngcontent-%COMP%]   .auth-page-box[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 4px;\n  position: absolute;\n}\n.auth-inner-container[_ngcontent-%COMP%]   .auth-page-box[_ngcontent-%COMP%]   .auth-banner-area[_ngcontent-%COMP%] {\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  height: 100vh;\n  width: 100%;\n}\n.auth-inner-container[_ngcontent-%COMP%]   .auth-page-box[_ngcontent-%COMP%]   .inner-form-area[_ngcontent-%COMP%] {\n  padding: 10px;\n  width: 100%;\n  height: 100vh;\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.auth-inner-container[_ngcontent-%COMP%]   .auth-page-box[_ngcontent-%COMP%]   .inner-form-area[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  max-width: 500px;\n  margin: 0 auto;\n  height: 100vh;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.auth-inner-container[_ngcontent-%COMP%]   .auth-page-box[_ngcontent-%COMP%]   .inner-form-area[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  height: 40px;\n}\n.auth-inner-container[_ngcontent-%COMP%]   .auth-page-box[_ngcontent-%COMP%]   .inner-form-area[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n.auth-brand-title[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  max-width: 600px;\n  text-align: left;\n  margin: 30px auto 15px;\n  font-size: 19px;\n  font-weight: 300;\n}\n.auth-brand-desc[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  max-width: 600px;\n  text-align: left;\n  margin: 0 auto;\n  margin-bottom: 5px;\n  font-size: 13px;\n  font-weight: 400;\n}\ninput.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border: 1px solid #f5222d !important;\n}\n@media screen and (max-width: 480px) {\n  .inner-form-area[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%] {\n    -webkit-box-pack: start !important;\n            justify-content: start !important;\n  }\n}\n.left-description-area[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 550px;\n  padding: 10px;\n}\n.left-description-area[_ngcontent-%COMP%]   .main-title[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-weight: bold;\n  line-height: 40px;\n  margin-bottom: 40px;\n}\n.left-description-area[_ngcontent-%COMP%]   .desc-box[_ngcontent-%COMP%] {\n  line-height: 22px;\n  border-bottom: 1px solid #e4eaef;\n  padding-bottom: 10px;\n  margin-bottom: 25px;\n}\n.left-description-area[_ngcontent-%COMP%]   .desc-box[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-bottom: 5px;\n}\n.left-description-area[_ngcontent-%COMP%]   .desc-box[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding: 0;\n  margin: 0;\n}\n.left-description-area[_ngcontent-%COMP%]   .logo-area[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudHMvYWNvdW50cy1jb3JlL2xvZ2luL0Y6XFxuZXd0cmFkZXJcXHRyYWRlcjQtNS9zcmNcXGFwcFxcYWNjb3VudHNcXGFjb3VudHMtY29yZVxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hY2NvdW50cy9hY291bnRzLWNvcmUvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUk7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDQ1I7QURBUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0VaO0FERFk7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNHaEI7QURJWTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNGaEI7QURJZ0I7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFFQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0hwQjtBRElvQjtFQUNJLFlBQUE7QUNGeEI7QURJb0I7RUFDSSxhQUFBO0FDRnhCO0FEU0k7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNOUjtBRFNJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ05SO0FEU0k7RUFDSSxvQ0FBQTtBQ05SO0FEU0k7RUFFUTtJQUNJLGtDQUFBO1lBQUEsaUNBQUE7RUNQZDtBQUNGO0FEV0k7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDVFI7QURVUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNSWjtBRFVRO0VBQ0ksaUJBQUE7RUFDQSxnQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUNSWjtBRFNZO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQ1BoQjtBRFVZO0VBQ0ksZUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDUmhCO0FEWVk7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUNWaEIiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50cy9hY291bnRzLWNvcmUvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgLmF1dGgtaW5uZXItY29udGFpbmVyIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIC5hdXRoLXBhZ2UtYm94IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIC5hdXRoLWJhbm5lci1hcmVhIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgLy8gaW1nIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIC8vICAgICBtYXgtd2lkdGg6IDQ3MHB4O1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaW5uZXItZm9ybS1hcmVhIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgLy8gYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgICAuZm9ybS1ib3gge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAuZm9ybS1jb250cm9sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuYnRuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5hdXRoLWJyYW5kLXRpdGxlIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIG1hcmdpbjogMzBweCBhdXRvIDE1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5hdXRoLWJyYW5kLWRlc2Mge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmNTIyMmQgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo0ODBweCkge1xyXG4gICAgICAgIC5pbm5lci1mb3JtLWFyZWEge1xyXG4gICAgICAgICAgICAuZm9ybS1ib3gge1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzdGFydCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubGVmdC1kZXNjcmlwdGlvbi1hcmVhIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDU1MHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgLm1haW4tdGl0bGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRlc2MtYm94IHtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTRlYWVmO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgICAgICAgICAgLnN1Yi10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICAgICAgICAgIC8vIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZGVzYyB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sb2dvLWFyZWEge1xyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIC8vIHRvcDogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0iLCIuYXV0aC1pbm5lci1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5hdXRoLWlubmVyLWNvbnRhaW5lciAuYXV0aC1wYWdlLWJveCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLmF1dGgtaW5uZXItY29udGFpbmVyIC5hdXRoLXBhZ2UtYm94IC5hdXRoLWJhbm5lci1hcmVhIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYXV0aC1pbm5lci1jb250YWluZXIgLmF1dGgtcGFnZS1ib3ggLmlubmVyLWZvcm0tYXJlYSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmF1dGgtaW5uZXItY29udGFpbmVyIC5hdXRoLXBhZ2UtYm94IC5pbm5lci1mb3JtLWFyZWEgLmZvcm0tYm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmF1dGgtaW5uZXItY29udGFpbmVyIC5hdXRoLXBhZ2UtYm94IC5pbm5lci1mb3JtLWFyZWEgLmZvcm0tYm94IC5mb3JtLWNvbnRyb2wge1xuICBoZWlnaHQ6IDQwcHg7XG59XG4uYXV0aC1pbm5lci1jb250YWluZXIgLmF1dGgtcGFnZS1ib3ggLmlubmVyLWZvcm0tYXJlYSAuZm9ybS1ib3ggLmJ0biB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5hdXRoLWJyYW5kLXRpdGxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luOiAzMHB4IGF1dG8gMTVweDtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uYXV0aC1icmFuZC1kZXNjIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5pbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjUyMjJkICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5pbm5lci1mb3JtLWFyZWEgLmZvcm0tYm94IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5sZWZ0LWRlc2NyaXB0aW9uLWFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA1NTBweDtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5sZWZ0LWRlc2NyaXB0aW9uLWFyZWEgLm1haW4tdGl0bGUge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cbi5sZWZ0LWRlc2NyaXB0aW9uLWFyZWEgLmRlc2MtYm94IHtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTRlYWVmO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbi5sZWZ0LWRlc2NyaXB0aW9uLWFyZWEgLmRlc2MtYm94IC5zdWItdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLmxlZnQtZGVzY3JpcHRpb24tYXJlYSAuZGVzYy1ib3ggLmRlc2Mge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cbi5sZWZ0LWRlc2NyaXB0aW9uLWFyZWEgLmxvZ28tYXJlYSBpbWcge1xuICB3aWR0aDogMTUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_services_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _shared_guard_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]
        }];
      }, {
        signInForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['formData', {
            static: false
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/accounts/acounts-core/otp-password/otp-password.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/accounts/acounts-core/otp-password/otp-password.component.ts ***!
    \******************************************************************************/

  /*! exports provided: OtpPasswordComponent, ConfirmPasswordValidator */

  /***/
  function srcAppAccountsAcountsCoreOtpPasswordOtpPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OtpPasswordComponent", function () {
      return OtpPasswordComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmPasswordValidator", function () {
      return ConfirmPasswordValidator;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _shared_services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../shared/services/global.service */
    "./src/app/shared/services/global.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../shared/services/notification.service */
    "./src/app/shared/services/notification.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function OtpPasswordComponent_div_17_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "button", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r8.msg.type == "error" ? "alert-danger" : "alert-success");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.msg.msg, " ");
      }
    }

    function OtpPasswordComponent_div_17_input_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OtpPasswordComponent_div_17_input_12_Template_input_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r10.cOTP = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r9.cOTP);
      }
    }

    var _c0 = function _c0() {
      return ["/auth/signup"];
    };

    function OtpPasswordComponent_div_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Enter One Time Password (OTP) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "One Time Password(OTP) has been sent to your register email id enter the same here to login.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 18, 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, OtpPasswordComponent_div_17_div_10_Template, 3, 2, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, OtpPasswordComponent_div_17_input_12_Template, 1, 1, "input", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OtpPasswordComponent_div_17_Template_button_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.verify(ctx_r12.cOTP);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Verify");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Don't have account ? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Create an Account");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Risk");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "b", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Risk Warning :");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Trading FX instruments and CFDs can incur a high level of risk and may result in a loss of all your invested Capital.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.msg.visible);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r4.msg.visible && ctx_r4.msg.type == "success"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r4.cOTP == "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-spinner", ctx_r4.isLoading);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
      }
    }

    function OtpPasswordComponent_div_18_div_5_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "button", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r17.msg.type == "error" ? "alert-danger" : "alert-success");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r17.msg.msg, " ");
      }
    }

    function OtpPasswordComponent_div_18_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "JUST TWO STEP AWAY.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Change Profile Password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, OtpPasswordComponent_div_18_div_5_div_5_Template, 3, 2, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email ID");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "New Password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Confirm Password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Master Password Same as Profile Password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OtpPasswordComponent_div_18_div_5_Template_button_click_27_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          ctx_r18.markFormTouched(ctx_r18.frmPassword);
          return ctx_r18.nextProfilePass();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.msg.visible && ctx_r14.msg.type == "error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r14.verifyData == null ? null : ctx_r14.verifyData.sProfile == null ? null : ctx_r14.verifyData.sProfile.Email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r14.formErrorsPassword.Password, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r14.formErrorsPassword.cPassword, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r14.frmPassword.get("isSameAsProfilePass").value ? "Update" : "Next", " ");
      }
    }

    function OtpPasswordComponent_div_18_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "JUST TWO STEP AWAY.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Change Trading Account Password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Account");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Master Password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Investor Password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Submit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r15.verifyData == null ? null : ctx_r15.verifyData.sAccount == null ? null : ctx_r15.verifyData.sAccount.MT4Account);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r15.formErrorsPassword.Master_Pwd, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r15.formErrorsPassword.Investor_Pwd, " ");
      }
    }

    function OtpPasswordComponent_div_18_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Your password has been reset successfully! Your new password has been sent to your primary email address.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function OtpPasswordComponent_div_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function OtpPasswordComponent_div_18_Template_form_ngSubmit_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r20.frmPassword.valid ? ctx_r20.MAKE_SIGNUP_UPDATE_PWD(ctx_r20.frmPassword.value) : ctx_r20.markFormTouched(ctx_r20.frmPassword);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, OtpPasswordComponent_div_18_div_5_Template, 29, 5, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, OtpPasswordComponent_div_18_div_6_Template, 23, 3, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, OtpPasswordComponent_div_18_div_7_Template, 5, 0, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r5.frmPassword);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.stepChengePass == 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.stepChengePass == 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.stepChengePass == 3);
      }
    }

    var _c1 = function _c1() {
      return ["/auth/login"];
    };

    function OtpPasswordComponent_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Go to login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r6.msg.type == "error" ? "text-danger" : "text-success");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.msg.msg, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
      }
    }

    var OtpPasswordComponent =
    /*#__PURE__*/
    function () {
      function OtpPasswordComponent(http, globalService, router, fb, notificationService) {
        var _this4 = this;

        _classCallCheck(this, OtpPasswordComponent);

        this.http = http;
        this.globalService = globalService;
        this.router = router;
        this.fb = fb;
        this.notificationService = notificationService;
        this.isOtp = 'otp'; // isOtp: string = 'chenge';

        this.isLoading = false;
        this.stepChengePass = 1;
        this.cOTP = "";
        this.formErrorsPassword = {
          Investor_Pwd: '',
          Master_Pwd: '',
          Password: '',
          cPassword: '',
          ConfirmPasswordValidator: '',
          ConfirmPassword: ''
        };
        this.errorMessagesPassword = {
          Investor_Pwd: {
            'required': 'Enter Investor Password.'
          },
          Master_Pwd: {
            'required': 'Enter Master Password.'
          },
          Password: {
            'required': 'Enter Password.'
          },
          cPassword: {
            'required': 'Enter Password.',
            'ConfirmPassword': 'Password Not Match'
          }
        };
        this.msg = {
          visible: false,
          type: '',
          msg: ''
        };
        this.passwords = {
          Investor_Pwd: '',
          Master_Pwd: '',
          Password: ''
        };
        router.events.subscribe(function (url) {
          _this4.url = url.url;
          console.log("url>>", url.url);

          if (window.location.href.indexOf("?vcode=") > 0) {
            _this4.cOTP = _this4.url.split("=")[1];
            console.log("cOTP", _this4.cOTP);
          }
        });
      }

      _createClass(OtpPasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.bindFrmPassword();
        }
      }, {
        key: "bindFrmPassword",
        value: function bindFrmPassword() {
          var _this5 = this;

          this.frmPassword = this.fb.group({
            Investor_Pwd: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            Master_Pwd: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            Password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            cPassword: [''],
            isSameAsProfilePass: [false]
          }, {
            validator: ConfirmPasswordValidator.MatchPassword
          });
          this.frmPassword.valueChanges.subscribe(function (data) {
            _this5.logValidationErrorPasswors(_this5.frmPassword);
          });
        }
      }, {
        key: "logValidationErrorPasswors",
        value: function logValidationErrorPasswors() {
          var _this6 = this;

          var group = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.frmPassword;
          Object.keys(group.controls).forEach(function (key) {
            var abstractControl = group.get(key); // console.log(">>abstractControl", abstractControl)

            if (abstractControl instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]) {
              _this6.logValidationErrorPasswors(abstractControl);
            } else {
              _this6.formErrorsPassword[key] = '';

              if (abstractControl && !abstractControl.valid && (abstractControl.touched || abstractControl.dirty)) {
                var messages = _this6.errorMessagesPassword[key];
                console.log(">>abstractControl.errors", abstractControl.errors);

                for (var errorKey in abstractControl.errors) {
                  if (errorKey) {
                    _this6.formErrorsPassword[key] += messages[errorKey] + ' ';
                  }
                }
              }
            }
          });
        }
      }, {
        key: "markFormTouched",
        value: function markFormTouched(formGroup) {
          var _this7 = this;

          Object.values(formGroup.controls).forEach(function (control) {
            if (control.controls) {
              // control is a FormGroup
              _this7.markFormTouched(control);
            } else {
              // control is a FormControl
              control.markAsTouched();
            }
          });
        }
      }, {
        key: "onsubmit",
        value: function onsubmit() {// this.frmPassword.Invalid
        }
      }, {
        key: "verify",
        value: function verify(vcode) {
          var _this8 = this;

          this.isLoading = true;
          var params = {
            ReferCode: vcode
          };
          this.globalService.MAKE_SIGNUP_AFTER_VERIFICATION(params).subscribe(function (data) {
            _this8.verifyData = data;
            var res = data.sResult;
            var Vd = data.sVerifyIndex;
            _this8.isLoading = false;

            if (data.sResult == null) {
              _this8.msg = {
                visible: true,
                type: 'error',
                msg: ' Invalid OTP'
              };
            } else if (data.sVerifyIndex == 0) {
              // if(data.sResult.Result==false){
              _this8.msg = {
                visible: true,
                type: data.sResult.Result ? 'success' : 'error',
                msg: data.sResult.MSG_USER
              }; // }else{
              // this.msg = {
              //   visible: true,
              //   type: 'success',
              //   msg: ' Your profile has been successfully created. Please check your registered mail ID and login'
              // }
              // }
            } else if (data.sVerifyIndex == 1 && data.sAccount == null) {
              _this8.isOtp = 'complet';
              _this8.msg = {
                visible: true,
                type: 'success',
                msg: data.sProfile.MSG_USER + ' , But... ' + data.sResult.MSG_USER + 'Please Contact To Admin'
              };
            } else if (data.sVerifyIndex == 1 && data.sAccount != null) {
              _this8.isOtp = 'chenge'; //  this.msg = {
              //   visible: true,
              //   type: 'success',
              //   msg: data.sResult.MSG_USER
              // }
            } else {
              _this8.isOtp = 'complet';
              _this8.msg = {
                visible: true,
                type: 'error',
                msg: "  <h4 class=\"text-danger\">Faild To Proceed.</h4>\n          <strong>Your profile was already verified by you earlier. Incase you didn't get\n              the login credentials,</strong>  \n          <p>\n              kindly reset your password by using \"<b>Forgot Password</b>\" feature on\n              login page\n          </p>"
              };
            } // var res = data.sResult;
            // var Vd = data.sVerifyIndex;
            // if (res == null) {
            // this.verifyOn = "x";
            // this.global.spin(false);
            // } else if (Vd == 1) {
            // this.verifyOn = "z";
            // this.email = data.sProfile.Email;
            // this.dealerid = data.DealerId;
            // this.masterid = data.sProfile.ProfileId;
            // this.password = data.sProfile.Password;
            // this.index = data.ManagerIndex;
            // this.account = data.sAccount.MT4Account;
            // this.global.spin(false);
            // } else if (Vd == 0) {
            // this.verifyOn = "y";
            // this.global.spin(false);
            // } else if (
            //   res == null ||
            //   res.Result == false ||
            //   res.Result == undefined ||
            //   res.Result == null
            // ) {
            // this.verifyOn = "x";
            // this.global.spin(false);
            // } else {
            // this.verifyOn = "x";
            // this.global.spin(false);
            // }

          });
        }
      }, {
        key: "MAKE_SIGNUP_UPDATE_PWD",
        value: function MAKE_SIGNUP_UPDATE_PWD(v) {
          var _this9 = this;

          var params = Object.assign({}, this.verifyData);
          params.sAccount.Investor_Pwd = v.Investor_Pwd;
          params.sAccount.Master_Pwd = v.Master_Pwd;
          params.sProfile.Password = v.Password;
          this.globalService.MAKE_SIGNUP_UPDATE_PWD(params).subscribe(function (data) {
            if (data.Result == true) {
              _this9.isOtp = 'complet';
              _this9.msg = {
                visible: true,
                type: 'success',
                msg: '  Your profile has been successfully created. Please check your registered mail ID and login'
              };
            } else {
              _this9.msg = {
                visible: true,
                type: 'error',
                msg: '  Failed To Validate!'
              };
            }
          });
        }
      }, {
        key: "nextProfilePass",
        value: function nextProfilePass() {
          var password = this.frmPassword.value.Password;
          var cPassword = this.frmPassword.value.cPassword;

          if (password != cPassword) {
            this.formErrorsPassword.cPassword = "Password not Match";
            return;
          }

          if (this.frmPassword.get('isSameAsProfilePass').value) {
            this.frmPassword.get('Master_Pwd').setValue(cPassword);
            this.frmPassword.get('Investor_Pwd').setValue(cPassword);
            this.MAKE_SIGNUP_UPDATE_PWD(this.frmPassword.value); // this.stepChengePass=1;

            return;
          }

          this.stepChengePass = 2;
        }
      }]);

      return OtpPasswordComponent;
    }();

    OtpPasswordComponent.ɵfac = function OtpPasswordComponent_Factory(t) {
      return new (t || OtpPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]));
    };

    OtpPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OtpPasswordComponent,
      selectors: [["app-otp-password"]],
      decls: 20,
      vars: 3,
      consts: [[1, "auth-inner-container", "bg-b", "main-txt-color", "m-0", "d-flex", "flex-center"], [1, "auth-page-box"], [1, "row", "no-gutters"], [1, "col-lg-6", "col-md-6", "position-relative", "d-none", "d-sm-block"], [1, "center-div-area"], [1, "position-relative", "m-auto", "auth-banner-area", "mt-5"], [1, "text-center"], ["src", "../../../../assets/images/feature3.png", "alt", "SignIn", 1, "img-fluid", "pl-5", "pr-5"], [1, "auth-brand-title"], [2, "color", "#ff6e33"], [1, "secondary-txt-color", "auth-brand-desc"], ["class", "col-lg-6 col-md-6 position-relative", 4, "ngIf"], [1, "col-lg-6", "col-md-6", "position-relative"], [1, "inner-form-area", "bg-f", "position-relative"], [1, "form-box", "position-relative"], [1, "title-section", "text-left", "mb-4"], [1, "title-text", "text-size-17", "font-weight-400", "m-0", "p-0"], [1, "title-desc", "secondary-txt-color", "text-size-14"], [1, ""], ["formData", "ngForm"], ["class", "alert  alert-dismissible fade show", "role", "alert", 3, "ngClass", 4, "ngIf"], [1, "form-group", "position-relative"], ["name", "useremail", "type", "number ", "class", "form-control text-size-15 main-txt-color bg-f bd-color ", "id", "usedId ", "placeholder", "Enter your one time password ", 3, "ngModel", "ngModelChange", 4, "ngIf"], [1, "form-icon", "text-size-12"], [1, "fas", "fa-envelope"], [1, "submit-btn", "mb-2"], ["type", "button", 1, "btn", "btn-primary", "btn-block", "text-size-14", "position-relative", 3, "disabled", "click"], [1, "clearfix"], [1, "no-account", "text-size-13", "text-center", "mt-1"], [3, "routerLink"], [1, "divider-text"], [1, "no-account", "text-size-13", "float-left", "mt-1"], [2, "color", "red"], ["role", "alert", 1, "alert", "alert-dismissible", "fade", "show", 3, "ngClass"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close"], ["name", "useremail", "type", "number ", "id", "usedId ", "placeholder", "Enter your one time password ", 1, "form-control", "text-size-15", "main-txt-color", "bg-f", "bd-color", 3, "ngModel", "ngModelChange"], [3, "formGroup", "ngSubmit"], [4, "ngIf"], [1, "text-success", "title-text", "text-size-17", "font-weight-400", "mb-3", "p-0"], [1, "title-text", "text-size-17", "font-weight-400"], [1, "form-group"], [1, "text-size-15", "font-weight-400"], ["disabled", "", "placeholder", "Enter Email ID", "type", "text", 1, "form-control", 3, "value"], [1, "input-group"], ["formControlName", "Password", "placeholder", "Enter New Password", "type", "password", 1, "form-control"], [1, "errorMsg"], ["formControlName", "cPassword", "placeholder", "Enter Confirm Password", "type", "password", 1, "form-control"], ["id", "checkPassSame", "formControlName", "isSameAsProfilePass", "type", "checkbox"], ["for", "checkPassSame", 1, "text-size-15", "font-weight-400"], ["type", "button", 1, "btn", "btn-primary", "pl-5", "pr-5", "pt-2", "pb-2", 3, "click"], [1, "text-success", "title-text", "text-size-21", "font-weight-400", "mb-3", "p-0"], [1, "title-text", "text-size-21", "font-weight-400"], ["disabled", "", "placeholder", "Account", "type", "text", 1, "form-control", 3, "value"], ["formControlName", "Master_Pwd", "placeholder", "Enter Master Password", "type", "password", 1, "form-control"], ["formControlName", "Investor_Pwd", "placeholder", "Enter Investor Password", "type", "password", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "pl-5", "pr-5", "pt-2", "pb-2"], [1, "cardSucces", "d-flex", "align-item-center", "justyfie-content-center", "flex-column"], ["src", "assets/images/tick.svg", "width", "120px", 1, "mb-2", "m-auto"], [1, "title", "text-success", "text-center"], [1, "title", "text-center", 3, "ngClass"], ["type", "button", 1, "btn", "btn-primary", "btn-block", "text-size-14", "position-relative", "btn-sm", 3, "routerLink"]],
      template: function OtpPasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " A Forex Broker");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " With Over 10 Years of ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Professional Experience");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " With Global Presence.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Choose MT5 & Avail Advantages To Trade With Just $2/Trade & Also Avail Trade Insurance Program. Trading with your choice!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, OtpPasswordComponent_div_17_Template, 30, 7, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, OtpPasswordComponent_div_18_Template, 8, 4, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, OtpPasswordComponent_div_19_Template, 9, 4, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOtp == "otp");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOtp == "chenge");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOtp == "complet");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]],
      styles: [".auth-inner-container[_ngcontent-%COMP%] {\n  height: 100vh;\n  overflow: hidden;\n  overflow-y: auto;\n  width: 100%;\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.auth-inner-container[_ngcontent-%COMP%]   .auth-page-box[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 4px;\n  position: absolute;\n}\n.auth-inner-container[_ngcontent-%COMP%]   .auth-page-box[_ngcontent-%COMP%]   .auth-banner-area[_ngcontent-%COMP%] {\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  height: 100vh;\n  width: 100%;\n}\n.auth-inner-container[_ngcontent-%COMP%]   .auth-page-box[_ngcontent-%COMP%]   .inner-form-area[_ngcontent-%COMP%] {\n  padding: 10px;\n  width: 100%;\n  height: 100vh;\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.auth-inner-container[_ngcontent-%COMP%]   .auth-page-box[_ngcontent-%COMP%]   .inner-form-area[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  max-width: 500px;\n  margin: 0 auto;\n  height: 100vh;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.auth-inner-container[_ngcontent-%COMP%]   .auth-page-box[_ngcontent-%COMP%]   .inner-form-area[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  height: 45px;\n}\n.auth-inner-container[_ngcontent-%COMP%]   .auth-page-box[_ngcontent-%COMP%]   .inner-form-area[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 0.875rem 0.75rem;\n}\n.auth-brand-title[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  max-width: 600px;\n  text-align: left;\n  margin: 30px auto 15px;\n  font-size: 25px;\n  font-weight: 300;\n}\n.auth-brand-desc[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  max-width: 600px;\n  text-align: left;\n  margin: 0 auto;\n  margin-bottom: 5px;\n  font-size: 15px;\n  font-weight: 400;\n}\ninput.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border: 1px solid #f5222d !important;\n}\n.stepOneOTP[_ngcontent-%COMP%] {\n  display: block;\n}\n.stepTwoOTP[_ngcontent-%COMP%] {\n  display: none;\n}\n.stepThreeOTP[_ngcontent-%COMP%] {\n  display: none;\n}\n.errorMsg[_ngcontent-%COMP%] {\n  color: #f5222d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudHMvYWNvdW50cy1jb3JlL290cC1wYXNzd29yZC9GOlxcbmV3dHJhZGVyXFx0cmFkZXI0LTUvc3JjXFxhcHBcXGFjY291bnRzXFxhY291bnRzLWNvcmVcXG90cC1wYXNzd29yZFxcb3RwLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hY2NvdW50cy9hY291bnRzLWNvcmUvb3RwLXBhc3N3b3JkL290cC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNDSjtBREFJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDRVI7QUREUTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ0daO0FERFE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDR1o7QURGWTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDSWhCO0FESGdCO0VBQ0ksWUFBQTtBQ0twQjtBREhnQjtFQUNJLHlCQUFBO0FDS3BCO0FERUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBREVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0NKO0FERUE7RUFDSSxvQ0FBQTtBQ0NKO0FERUE7RUFBWSxjQUFBO0FDRVo7QUREQTtFQUFZLGFBQUE7QUNLWjtBREpBO0VBQWMsYUFBQTtBQ1FkO0FEUEE7RUFBVSxjQUFBO0FDV1YiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50cy9hY291bnRzLWNvcmUvb3RwLXBhc3N3b3JkL290cC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdXRoLWlubmVyLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAuYXV0aC1wYWdlLWJveCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgLmF1dGgtYmFubmVyLWFyZWEge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmlubmVyLWZvcm0tYXJlYSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAuZm9ybS1ib3gge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5idG4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuODc1cmVtIDAuNzVyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hdXRoLWJyYW5kLXRpdGxlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBtYXJnaW46IDMwcHggYXV0byAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG5cclxuLmF1dGgtYnJhbmQtZGVzYyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG5pbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Y1MjIyZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3RlcE9uZU9UUHtkaXNwbGF5OiBibG9jazt9XHJcbi5zdGVwVHdvT1RQe2Rpc3BsYXk6IG5vbmU7fVxyXG4uc3RlcFRocmVlT1RQe2Rpc3BsYXk6IG5vbmU7fVxyXG4uZXJyb3JNc2d7Y29sb3I6ICNmNTIyMmR9IiwiLmF1dGgtaW5uZXItY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uYXV0aC1pbm5lci1jb250YWluZXIgLmF1dGgtcGFnZS1ib3gge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5hdXRoLWlubmVyLWNvbnRhaW5lciAuYXV0aC1wYWdlLWJveCAuYXV0aC1iYW5uZXItYXJlYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmF1dGgtaW5uZXItY29udGFpbmVyIC5hdXRoLXBhZ2UtYm94IC5pbm5lci1mb3JtLWFyZWEge1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5hdXRoLWlubmVyLWNvbnRhaW5lciAuYXV0aC1wYWdlLWJveCAuaW5uZXItZm9ybS1hcmVhIC5mb3JtLWJveCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5hdXRoLWlubmVyLWNvbnRhaW5lciAuYXV0aC1wYWdlLWJveCAuaW5uZXItZm9ybS1hcmVhIC5mb3JtLWJveCAuZm9ybS1jb250cm9sIHtcbiAgaGVpZ2h0OiA0NXB4O1xufVxuLmF1dGgtaW5uZXItY29udGFpbmVyIC5hdXRoLXBhZ2UtYm94IC5pbm5lci1mb3JtLWFyZWEgLmZvcm0tYm94IC5idG4ge1xuICBwYWRkaW5nOiAwLjg3NXJlbSAwLjc1cmVtO1xufVxuXG4uYXV0aC1icmFuZC10aXRsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbjogMzBweCBhdXRvIDE1cHg7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmF1dGgtYnJhbmQtZGVzYyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Y1MjIyZCAhaW1wb3J0YW50O1xufVxuXG4uc3RlcE9uZU9UUCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc3RlcFR3b09UUCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zdGVwVGhyZWVPVFAge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uZXJyb3JNc2cge1xuICBjb2xvcjogI2Y1MjIyZDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OtpPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-otp-password',
          templateUrl: './otp-password.component.html',
          styleUrls: ['./otp-password.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _shared_services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]
        }];
      }, null);
    })();

    var ConfirmPasswordValidator =
    /*#__PURE__*/
    function () {
      function ConfirmPasswordValidator() {
        _classCallCheck(this, ConfirmPasswordValidator);
      }

      _createClass(ConfirmPasswordValidator, null, [{
        key: "MatchPassword",
        value: function MatchPassword(control) {
          var password = control.get('Password').value;
          var confirmPassword = control.get('cPassword').value;

          if (password != confirmPassword) {
            control.get('cPassword').setErrors({
              ConfirmPassword: true
            });
          } else {
            return null;
          }
        }
      }]);

      return ConfirmPasswordValidator;
    }();
    /***/

  },

  /***/
  "./src/app/accounts/acounts-core/set-password/set-password.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/accounts/acounts-core/set-password/set-password.component.ts ***!
    \******************************************************************************/

  /*! exports provided: SetPasswordComponent */

  /***/
  function srcAppAccountsAcountsCoreSetPasswordSetPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SetPasswordComponent", function () {
      return SetPasswordComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/auth/forgot-password-2"];
    };

    var _c1 = function _c1() {
      return ["/auth/signup"];
    };

    var SetPasswordComponent =
    /*#__PURE__*/
    function () {
      function SetPasswordComponent() {
        _classCallCheck(this, SetPasswordComponent);
      }

      _createClass(SetPasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SetPasswordComponent;
    }();

    SetPasswordComponent.ɵfac = function SetPasswordComponent_Factory(t) {
      return new (t || SetPasswordComponent)();
    };

    SetPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SetPasswordComponent,
      selectors: [["app-set-password"]],
      decls: 59,
      vars: 4,
      consts: [[1, "auth-inner-container", "bg-b", "main-txt-color", "m-0", "d-flex", "flex-center"], [1, "auth-page-box"], [1, "row", "no-gutters"], [1, "col-lg-6", "col-md-6", "position-relative", "d-none", "d-sm-block"], [1, "center-div-area"], [1, "position-relative", "m-auto", "auth-banner-area"], [1, "text-center"], ["src", "assets/images/feature4.png", "alt", "SignIn", 1, "img-fluid"], [1, "auth-brand-title"], [2, "color", "#ff6e33"], [1, "secondary-txt-color", "auth-brand-desc"], [1, "col-lg-6", "col-md-6", "position-relative"], [1, "inner-form-area", "bg-f", "position-relative"], [1, "form-box", "position-relative"], [1, "title-section", "text-left", "mb-4"], [1, "title-text", "text-size-17", "font-weight-400", "m-0", "p-0"], [1, "title-desc", "secondary-txt-color", "text-size-14"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close"], [1, ""], ["formData", "ngForm"], [1, "form-group", "position-relative"], ["for", "password ", 1, "text-size-15", "font-weight-400"], ["name", "userpassword", "type", "password ", "id", "password ", "placeholder", "Enter your password", 1, "form-control", "text-size-15", "main-txt-color", "bg-f", "bd-color"], [1, "form-icon", "text-size-12"], [1, "fas", "fa-lock"], [1, "forgot-password", "mb-3", "text-size-13", "clearfix"], [1, "float-right", 3, "routerLink"], [1, "submit-btn", "mb-2"], ["type", "submit", "value", "Sign In", "routerLink", "/home", 1, "btn", "btn-primary", "btn-block", "text-size-14"], [1, "clearfix"], [1, "no-account", "text-size-13", "text-center", "mt-1"], [3, "routerLink"], [1, "divider-text"], [1, "no-account", "text-size-13", "float-left", "mt-1"], [2, "color", "red"]],
      template: function SetPasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " A Forex Broker");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " With Over 10 Years of ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Professional Experience");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " With Global Presence.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Choose MT5 & Avail Advantages To Trade With Just $2/Trade & Also Avail Trade Insurance Program. Trading with your choice!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Set Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Please Set your new password.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Please enter correct email address & password ! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "form", 19, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "New Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Conform Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Forgot Password ?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Set Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Don't have account ? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Create an Account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Risk");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "b", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Risk Warning :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Trading FX instruments and CFDs can incur a high level of risk and may result in a loss of all your invested Capital.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
      styles: [".auth-inner-container[_ngcontent-%COMP%] {\n  height: 100vh;\n  overflow: hidden;\n  overflow-y: auto;\n  width: 100%;\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.auth-inner-container[_ngcontent-%COMP%]   .auth-page-box[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 4px;\n  position: absolute;\n}\n.auth-inner-container[_ngcontent-%COMP%]   .auth-page-box[_ngcontent-%COMP%]   .auth-banner-area[_ngcontent-%COMP%] {\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  height: 100vh;\n  width: 100%;\n}\n.auth-inner-container[_ngcontent-%COMP%]   .auth-page-box[_ngcontent-%COMP%]   .inner-form-area[_ngcontent-%COMP%] {\n  padding: 10px;\n  width: 100%;\n  height: 100vh;\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.auth-inner-container[_ngcontent-%COMP%]   .auth-page-box[_ngcontent-%COMP%]   .inner-form-area[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  max-width: 500px;\n  margin: 0 auto;\n  height: 100vh;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.auth-inner-container[_ngcontent-%COMP%]   .auth-page-box[_ngcontent-%COMP%]   .inner-form-area[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  height: 45px;\n}\n.auth-inner-container[_ngcontent-%COMP%]   .auth-page-box[_ngcontent-%COMP%]   .inner-form-area[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 0.875rem 0.75rem;\n}\n.auth-brand-title[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  max-width: 600px;\n  text-align: left;\n  margin: 30px auto 15px;\n  font-size: 25px;\n  font-weight: 300;\n}\n.auth-brand-desc[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  max-width: 600px;\n  text-align: left;\n  margin: 0 auto;\n  margin-bottom: 5px;\n  font-size: 15px;\n  font-weight: 400;\n}\ninput.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border: 1px solid #f5222d !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudHMvYWNvdW50cy1jb3JlL3NldC1wYXNzd29yZC9GOlxcbmV3dHJhZGVyXFx0cmFkZXI0LTUvc3JjXFxhcHBcXGFjY291bnRzXFxhY291bnRzLWNvcmVcXHNldC1wYXNzd29yZFxcc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hY2NvdW50cy9hY291bnRzLWNvcmUvc2V0LXBhc3N3b3JkL3NldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNDSjtBREFJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDRVI7QUREUTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ0daO0FERFE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDR1o7QUREWTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUVBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDRWhCO0FERGdCO0VBQ0ksWUFBQTtBQ0dwQjtBRERnQjtFQUNJLHlCQUFBO0FDR3BCO0FESUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNESjtBRElBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0RKO0FESUE7RUFDSSxvQ0FBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvYWNjb3VudHMvYWNvdW50cy1jb3JlL3NldC1wYXNzd29yZC9zZXQtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0aC1pbm5lci1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLmF1dGgtcGFnZS1ib3gge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIC5hdXRoLWJhbm5lci1hcmVhIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbm5lci1mb3JtLWFyZWEge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgLy8gYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgIC5mb3JtLWJveCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIC8vIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgLmZvcm0tY29udHJvbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmJ0biB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC44NzVyZW0gMC43NXJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmF1dGgtYnJhbmQtdGl0bGUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG1hcmdpbjogMzBweCBhdXRvIDE1cHg7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG4uYXV0aC1icmFuZC1kZXNjIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbmlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjUyMjJkICFpbXBvcnRhbnQ7XHJcbn0iLCIuYXV0aC1pbm5lci1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5hdXRoLWlubmVyLWNvbnRhaW5lciAuYXV0aC1wYWdlLWJveCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLmF1dGgtaW5uZXItY29udGFpbmVyIC5hdXRoLXBhZ2UtYm94IC5hdXRoLWJhbm5lci1hcmVhIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYXV0aC1pbm5lci1jb250YWluZXIgLmF1dGgtcGFnZS1ib3ggLmlubmVyLWZvcm0tYXJlYSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmF1dGgtaW5uZXItY29udGFpbmVyIC5hdXRoLXBhZ2UtYm94IC5pbm5lci1mb3JtLWFyZWEgLmZvcm0tYm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmF1dGgtaW5uZXItY29udGFpbmVyIC5hdXRoLXBhZ2UtYm94IC5pbm5lci1mb3JtLWFyZWEgLmZvcm0tYm94IC5mb3JtLWNvbnRyb2wge1xuICBoZWlnaHQ6IDQ1cHg7XG59XG4uYXV0aC1pbm5lci1jb250YWluZXIgLmF1dGgtcGFnZS1ib3ggLmlubmVyLWZvcm0tYXJlYSAuZm9ybS1ib3ggLmJ0biB7XG4gIHBhZGRpbmc6IDAuODc1cmVtIDAuNzVyZW07XG59XG5cbi5hdXRoLWJyYW5kLXRpdGxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luOiAzMHB4IGF1dG8gMTVweDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uYXV0aC1icmFuZC1kZXNjIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5pbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjUyMjJkICFpbXBvcnRhbnQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SetPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-set-password',
          templateUrl: './set-password.component.html',
          styleUrls: ['./set-password.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/accounts/acounts-core/signup/signup.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/accounts/acounts-core/signup/signup.component.ts ***!
    \******************************************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppAccountsAcountsCoreSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_models_signup_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../shared/models/signup.modal */
    "./src/app/shared/models/signup.modal.ts");
    /* harmony import */


    var _shared_services_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../shared/services/global.service */
    "./src/app/shared/services/global.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../../shared/services/notification.service */
    "./src/app/shared/services/notification.service.ts");
    /* harmony import */


    var angular_feather__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angular-feather */
    "./node_modules/angular-feather/__ivy_ngcc__/fesm2015/angular-feather.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SignupComponent_option_73_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var lev_r38 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", lev_r38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("1 : ", lev_r38, "");
      }
    }

    function SignupComponent_div_74_Template(rf, ctx) {
      if (rf & 1) {
        var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Select Amount ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "select", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_div_74_Template_select_ngModelChange_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);

          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r39.demoAmount = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Select Amount");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "100");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "500");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "1000");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "2000");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "3000");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "4000");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "5000");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r24.demoAmount);
      }
    }

    function SignupComponent_div_86_label_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "First name is a required field !");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_div_86_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_div_86_label_1_Template, 2, 0, "label", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r25.errors == null ? null : _r25.errors.required);
      }
    }

    function SignupComponent_div_97_label_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Last name is a required field !");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_div_97_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_div_97_label_1_Template, 2, 0, "label", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r27.errors == null ? null : _r27.errors.required);
      }
    }

    function SignupComponent_div_109_label_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email address is a required field !");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_div_109_label_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter valid email address !");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_div_109_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_div_109_label_1_Template, 2, 0, "label", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignupComponent_div_109_label_2_Template, 2, 0, "label", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](106);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r29.errors == null ? null : _r29.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r29.errors == null ? null : _r29.errors.pattern);
      }
    }

    function SignupComponent_div_121_label_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Phone Number is a required field !");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_div_121_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_div_121_label_1_Template, 2, 0, "label", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](118);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r31.errors == null ? null : _r31.errors.required) && ctx_r32.numericMessage === false);
      }
    }

    function SignupComponent_div_122_label_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Phone number should be numeric");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_div_122_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_div_122_label_1_Template, 2, 0, "label", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r33.numericMessage);
      }
    }

    function SignupComponent_option_132_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var country_r47 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", country_r47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](country_r47);
      }
    }

    function SignupComponent_div_156_label_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Terms & Conditions is a required field !");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_div_156_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_div_156_label_1_Template, 2, 0, "label", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](145);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r36.errors == null ? null : _r36.errors.required);
      }
    }

    var _c0 = function _c0() {
      return ["/auth/login"];
    };

    var SignupComponent =
    /*#__PURE__*/
    function () {
      function SignupComponent(global, route, router, notificationService) {
        _classCallCheck(this, SignupComponent);

        this.global = global;
        this.route = route;
        this.router = router;
        this.notificationService = notificationService;
        this.isLoading = false;
        this.signup = new _shared_models_signup_modal__WEBPACK_IMPORTED_MODULE_1__["SignUpModalData"]();
        this.register = false;
        this.notregister = false;
        this.demoAmount = '';
        this.leverage = '';
        this.allCountryList = [];
        this.allPackage = [];
        this.numericMessage = false;
        this.queryParam = this.route.snapshot.queryParams.q;
        this.affiliateReferCode = this.route.snapshot.queryParams.affiliate;
        this.allCountryList = ['Afghanistan', 'Åland Islands', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antarctica', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Botswana', 'Bouvet Island', 'Brazil', 'Brunei Darussalam', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands', 'Central African Republic', 'Chad', 'Chile', 'China', 'Christmas Island', 'Cocos (Keeling) Islands', 'Colombia', 'Comoros', 'Congo', 'Congo', 'Cook Islands', 'Costa Rica', 'Cote', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Guiana', 'French Polynesia', 'French Southern Territories', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guadeloupe', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea-bissau', 'Guyana', 'Haiti', 'Heard Island', 'Holy See', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea', 'Korea', 'Kuwait', 'Kyrgyzstan', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libyan Arab Jamahiriya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macao', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Martinique', 'Mauritania', 'Mauritius', 'Mayotte', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'Norfolk Island', 'Northern Mariana Islands', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Palestinian', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Pitcairn', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russian Federation', 'Rwanda', 'Saint Helena', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Pierre and Miquelon', 'Saint Vincent and The Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Georgia', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Svalbard and Jan Mayen', 'Swaziland', 'Sweden', 'Switzerland', 'Syrian Arab Republic', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor-leste', 'Togo', 'Tokelau', 'Tonga', 'Trinidad', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Venezuela', 'Viet Nam', 'Virgin Islands', 'Virgin Islands', 'Wallis and Futuna', 'Western Sahara', 'Yemen', 'Zambia', 'Zimbabwe'];
      } // tslint:disable-next-line: variable-name


      _createClass(SignupComponent, [{
        key: "getPlan",
        value: function getPlan(account_type) {
          var _this10 = this;

          var data = {
            oAccount_Type: account_type,
            DealerId: 1001
          };
          this.global.getPackage(data).subscribe(function (accountType) {
            accountType.find(function (plan) {
              _this10.planId = plan.sAccountPlanId; // tslint:disable-next-line: triple-equals

              if (_this10.planId == 1000) {
                _this10.getLeverage();
              }
            });
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "getLeverage",
        value: function getLeverage() {
          var _this11 = this;

          var data = {
            PackageId: 1000
          };
          this.global.getLeverageByPackage(data).subscribe(function (pkg) {
            console.log(pkg);
            _this11.allPackage = pkg;
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "userRegistration",
        value: function userRegistration(registration) {
          var _this12 = this;

          this.isLoading = true;
          var userData = {
            uSignup_Profile: {
              sMasterId: 0,
              sWalletId: 0,
              uReferredBy: 0,
              sDealerId: 1001,
              uPersonalInfo: {
                First: registration.form.value.name,
                Last: registration.form.value.lastname,
                ProfilePic: './assets/default.png',
                Comment: ' '
              },
              uContactInfo: {
                Email: registration.form.value.email,
                Phone: registration.form.value.phone,
                Email_Verify: 0,
                Phone_Verify: 0
              },
              uAddressInfo: {
                Address1: ' ',
                Address2: ' ',
                City: ' ',
                State: ' ',
                Country: registration.form.value.country,
                ZipCode: ' '
              },
              uKYCInfo: {
                ID_PRROF: '',
                ADDR_PROOF: '',
                Others: ''
              },
              uTIMESTAMP_INFO: {
                sCreadedOn: 0,
                sUpdatedOn: 0,
                sCreadedOn_Str: new Date(),
                sUpdatedOn_Str: new Date()
              },
              oTRNx_DSH_Permit: [],
              oTRNx_MAM_Permit: [],
              oTRNx_PAMN_Permit: [],
              oTRNx_IB_Permit: [],
              oTRNx_AFL: [],
              oSignType: 3
            },
            uPlanId: this.planId,
            BonusCard: 0,
            uInitialDep: Number(this.demoAmount),
            uLeverage: this.leverage,
            isIBAllow: this.queryParam ? true : false,
            ReferCode: this.queryParam ? this.queryParam : 0,
            isAffiliateAllow: this.affiliateReferCode ? true : false,
            Aff_Code: this.affiliateReferCode ? this.affiliateReferCode : 0
          };
          this.global.makeSignupVerification(userData).subscribe(function (user) {
            console.log(user);

            if (user.Result) {
              _this12.isLoading = false;
              _this12.userRegister = user;
              _this12.register = true;
              _this12.notregister = false;
              setTimeout(function () {
                _this12.register = false;
              }, 10000);

              _this12.notificationService.showSuccess('You have Signed up successfully', 'success');

              _this12.notificationService.showInfo('Verification mail has been send to your registered email Id !', 'Info');

              _this12.router.navigate(['../otp-password'], {
                relativeTo: _this12.route
              });
            } else {
              _this12.isLoading = false;
              _this12.notregister = true;
              _this12.register = false;

              _this12.notificationService.showError('Email address is already exists !', 'Error');

              setTimeout(function () {
                _this12.notregister = false;
              }, 10000);
            }
          }, function (err) {
            console.log(err);

            _this12.notificationService.showError('Faild to Signup Process', 'Error');

            _this12.isLoading = false;
          });
        }
      }, {
        key: "numberOnly",
        value: function numberOnly(event) {
          var charCode = event.which ? event.which : event.keyCode;

          if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            this.numericMessage = true;
            return false;
          }

          this.numericMessage = false;
          return true;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SignupComponent;
    }();

    SignupComponent.ɵfac = function SignupComponent_Factory(t) {
      return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]));
    };

    SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignupComponent,
      selectors: [["app-signup"]],
      decls: 172,
      vars: 24,
      consts: [[1, "auth-inner-container", "bg-b", "main-txt-color", "m-0", "d-flex", "flex-center"], [1, "auth-page-box"], [1, "row", "no-gutters"], [1, "col-lg-6", "col-md-6", "position-relative", "d-none", "d-sm-block", "pr-2", "pl-2"], [1, "center-div-area"], [1, "position-relative", "m-auto", "auth-banner-area"], [1, "left-description-area"], [1, "logo-area"], ["src", "assets/images/bgd-logo.png", "alt", "SignIn", 1, ""], [1, "main-title"], [2, "color", "#ff6e33"], [1, "desc-box"], [1, "sub-title"], ["name", "check-circle", 1, "mr-1", 2, "color", "green"], [1, "desc"], [1, "desc-box", "border-0"], [1, "col-lg-6", "col-md-6", "position-relative"], [1, "inner-form-area", "bg-f", "position-relative"], [1, "form-box", "position-relative", "p-2"], [1, "title-section", "text-left", "mb-4"], [1, "title-text", "text-size-17", "font-weight-400", "m-0", "p-0"], [1, "title-desc", "secondary-txt-color", "text-size-13"], [3, "ngSubmit"], ["registration", "ngForm"], [1, "row"], [1, "col-md-6"], [1, "form-group", "position-relative"], ["for", "username ", 1, "text-size-13", "font-weight-400"], [1, "asterick"], ["name", "accountPlan", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["value", "", 3, "disabled"], ["value", "0"], ["value", "1"], ["name", "leverage", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "", "disabled", "true"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["class", "col-md-6", 4, "ngIf"], ["for", "username", 1, "text-size-13", "font-weight-400"], ["type", "text", "name", "name", "id", "usedId ", "placeholder", "Enter your First name ", "required", "", 1, "form-control", "text-size-13", "main-txt-color", "bg-f", "bd-color", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], [1, "form-icon", "text-size-12"], [1, "fas", "fa-envelope"], [4, "ngIf"], ["type", "text", "name", "lastname", "id", "usedId ", "placeholder", "Enter your Last name ", "required", "", 1, "form-control", "text-size-13", "main-txt-color", "bg-f", "bd-color", 3, "ngModel", "ngModelChange"], ["lastname", "ngModel"], [1, "col-md-12"], ["for", "email", 1, "text-size-13", "font-weight-400"], ["type", "text", "pattern", "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$", "name", "email", "id", "usedId ", "placeholder", "Enter your Email address ", "required", "", 1, "form-control", "text-size-13", "main-txt-color", "bg-f", "bd-color", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["pattern", "^-?(0|[1-9]\\d*)?$", "for", "username", 1, "text-size-13", "font-weight-400"], ["type", " text ", "name", "phone", "id", "usedId ", "placeholder", "Enter your phone number ", "required", "", 1, "form-control", "text-size-13", "main-txt-color", "bg-f", "bd-color", 3, "ngModel", "keypress", "ngModelChange"], ["phone", "ngModel"], ["for", "password ", 1, "text-size-13", "font-weight-400"], ["name", "country", "id", "exampleFormControlSelect1", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "", "disabled", "true", "selected", ""], ["for", "password", 1, "text-size-13", "font-weight-400"], [2, "color", "green"], ["type", "text", "name", "bonusCard ", "id", "password ", "placeholder", "Enter Bonus Card ", 1, "form-control", "text-size-13", "main-txt-color", "bg-f", "bd-color", 3, "ngModel", "ngModelChange"], ["bonusCard", "ngModel"], [1, "fas", "fa-lock"], [1, "terms-section", "mb-3"], [1, "form-check", "text-size-13", "mb-1", "clearfix"], ["type", "checkbox", "name", "terms ", "id", "exampleCheck1 ", "required", "", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["terms", "ngModel"], ["for", "exampleCheck1 ", 1, "form-check-label"], ["href", " "], [1, "submit-btn", "mb-2"], ["type", "submit", "value", "Create Account", 1, "btn", "btn-primary", "btn-block", "text-size-14", "position-relative", 3, "disabled"], [1, "clearfix"], [1, "no-account", "text-size-13", "text-center", "mt-1"], [3, "routerLink"], [1, "divider-text"], [1, "no-account", "text-size-13", "float-left", "mt-1"], [2, "color", "red"], [3, "ngValue"], ["name", "demoAmount", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "error_msg", 4, "ngIf"], [1, "error_msg"], ["class", "error_msg ", 4, "ngIf"]],
      template: function SignupComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Start");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Forex Trading ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Today !");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h5", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i-feather", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Trade with Just ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "$2/ Trade");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Lowest trading cost. Amazing isn't it!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h5", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i-feather", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "MT5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Trading Plateform");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Make the most of the best forex trading Platform");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h5", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i-feather", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Broker with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "10+");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Years Experience");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "We have been in forex trading business for more than a decade and have contributed to the growth of forex trading");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h3", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Create a New Account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "You can open a Live & Demo account here.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "form", 22, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_48_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49);

            var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](49);

            return ctx.userRegistration(_r22);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Account Plan ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "select", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_select_ngModelChange_57_listener($event) {
            return ctx.signup.accountPlan = $event;
          })("change", function SignupComponent_Template_select_change_57_listener() {
            return ctx.getPlan(ctx.signup.accountPlan);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "option", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Select Account Plan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "option", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Demo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "option", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Live");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Select Leverage ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "select", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_select_ngModelChange_70_listener($event) {
            return ctx.leverage = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "option", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Select Leverage");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, SignupComponent_option_73_Template, 2, 2, "option", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, SignupComponent_div_74_Template, 23, 1, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "label", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "First name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "input", 38, 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_82_listener($event) {
            return ctx.signup.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, SignupComponent_div_86_Template, 2, 1, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "label", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Last name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "input", 43, 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_93_listener($event) {
            return ctx.signup.lastname = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](97, SignupComponent_div_97_Template, 2, 1, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "label", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Email address ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "input", 47, 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_105_listener($event) {
            return ctx.signup.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](109, SignupComponent_div_109_Template, 3, 2, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "label", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Phone Number ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "input", 50, 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function SignupComponent_Template_input_keypress_117_listener($event) {
            return ctx.numberOnly($event);
          })("ngModelChange", function SignupComponent_Template_input_ngModelChange_117_listener($event) {
            return ctx.signup.phone = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](121, SignupComponent_div_121_Template, 2, 1, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](122, SignupComponent_div_122_Template, 2, 1, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "label", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Country ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "select", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_select_ngModelChange_129_listener($event) {
            return ctx.signup.country = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "option", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Select Your Country");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](132, SignupComponent_option_132_Template, 2, 2, "option", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "label", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Bonus Card ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "span", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "(If Any)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "input", 57, 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_138_listener($event) {
            return ctx.signup.bonusCard = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "i", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "input", 62, 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_144_listener($event) {
            return ctx.signup.terms = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "label", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "I accept the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "a", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Terms & Conditions ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, " , ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "a", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Privacy Policy ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, " , ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "a", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, " Product Statement And Execution Risks");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](156, SignupComponent_div_156_Template, 2, 1, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "button", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Create Account ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Already have an account? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "a", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Sign In ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Risk");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "b", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Risk Warning :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, " Trading FX instruments and CFDs can incur a high level of risk and may result in a loss of all your invested Capital.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](49);

          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](83);

          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](94);

          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](106);

          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](118);

          var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](145);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.signup.accountPlan);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.leverage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allPackage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.planId == 1001);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.signup.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r25.touched && _r25.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.signup.lastname);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r27.touched && _r27.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.signup.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r29.touched && _r29.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.signup.phone);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r31.touched && _r31.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.numericMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.signup.country);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allCountryList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.signup.bonusCard);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.signup.terms);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r36.touched && _r36.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r22.invalid || ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-spinner", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c0));
        }
      },
      directives: [angular_feather__WEBPACK_IMPORTED_MODULE_5__["ɵa"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["CheckboxControlValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      styles: [".auth-inner-container[_ngcontent-%COMP%] {\n  height: 100vh;\n  overflow: hidden;\n  width: 100%;\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: calc(100% - 0px);\n  overflow-y: auto;\n}\n.auth-inner-container[_ngcontent-%COMP%]   .auth-page-box[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 4px;\n  position: absolute;\n}\n.auth-inner-container[_ngcontent-%COMP%]   .auth-page-box[_ngcontent-%COMP%]   .auth-banner-area[_ngcontent-%COMP%] {\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  height: 100vh;\n  width: 100%;\n}\n.auth-inner-container[_ngcontent-%COMP%]   .auth-page-box[_ngcontent-%COMP%]   .inner-form-area[_ngcontent-%COMP%] {\n  padding: 10px;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.auth-inner-container[_ngcontent-%COMP%]   .auth-page-box[_ngcontent-%COMP%]   .inner-form-area[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  max-width: 650px;\n  margin: 0 auto;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.auth-inner-container[_ngcontent-%COMP%]   .auth-page-box[_ngcontent-%COMP%]   .inner-form-area[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  height: 40px;\n}\n.auth-inner-container[_ngcontent-%COMP%]   .auth-page-box[_ngcontent-%COMP%]   .inner-form-area[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n.error_msg[_ngcontent-%COMP%] {\n  color: red;\n  margin: 0px;\n  padding-top: 10px;\n  font-size: 13px;\n}\n.asterick[_ngcontent-%COMP%] {\n  color: red;\n}\n.auth-brand-title[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  max-width: 600px;\n  text-align: left;\n  margin: 30px auto 15px;\n  font-size: 19px;\n  font-weight: 300;\n}\n.auth-brand-desc[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  max-width: 600px;\n  text-align: left;\n  margin: 0 auto;\n  margin-bottom: 5px;\n  font-size: 13px;\n  font-weight: 400;\n}\ninput.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border: 1px solid #f5222d !important;\n}\n.left-description-area[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 550px;\n  padding: 10px;\n}\n.left-description-area[_ngcontent-%COMP%]   .main-title[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-weight: bold;\n  line-height: 40px;\n  margin-bottom: 40px;\n}\n.left-description-area[_ngcontent-%COMP%]   .desc-box[_ngcontent-%COMP%] {\n  line-height: 22px;\n  border-bottom: 1px solid #e4eaef;\n  padding-bottom: 10px;\n  margin-bottom: 25px;\n}\n.left-description-area[_ngcontent-%COMP%]   .desc-box[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-bottom: 5px;\n}\n.left-description-area[_ngcontent-%COMP%]   .desc-box[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding: 0;\n  margin: 0;\n}\n.left-description-area[_ngcontent-%COMP%]   .logo-area[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudHMvYWNvdW50cy1jb3JlL3NpZ251cC9GOlxcbmV3dHJhZGVyXFx0cmFkZXI0LTUvc3JjXFxhcHBcXGFjY291bnRzXFxhY291bnRzLWNvcmVcXHNpZ251cFxcc2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hY2NvdW50cy9hY291bnRzLWNvcmUvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUVBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQ0FKO0FEQ0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNDUjtBREFRO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FDRVo7QURLUTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNIWjtBREtZO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBRUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0poQjtBREtnQjtFQUNJLFlBQUE7QUNIcEI7QURLZ0I7RUFDSSxhQUFBO0FDSHBCO0FEVUE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ1BKO0FEVUE7RUFDSSxVQUFBO0FDUEo7QURVQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1BKO0FEVUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDUEo7QURVQTtFQUNJLG9DQUFBO0FDUEo7QURVQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNQSjtBRFFJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ05SO0FEUUk7RUFDSSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQ05SO0FET1E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FDTFo7QURRUTtFQUNJLGVBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ05aO0FEVVE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUNSWiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnRzL2Fjb3VudHMtY29yZS9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF1dGgtaW5uZXItY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLy8gb3ZlcmZsb3cteTogYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMHB4KTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAuYXV0aC1wYWdlLWJveCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgLmF1dGgtYmFubmVyLWFyZWEge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgLy8gaW1nIHtcclxuICAgICAgICAgICAgLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAvLyAgICAgbWF4LXdpZHRoOiA0NzBweDtcclxuICAgICAgICAgICAgLy8gICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuaW5uZXItZm9ybS1hcmVhIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgLy8gb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICAgICAgLmZvcm0tYm94IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA2NTBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgLy8gaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAuZm9ybS1jb250cm9sIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYnRuIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uZXJyb3JfbXNnIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG4uYXN0ZXJpY2sge1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmF1dGgtYnJhbmQtdGl0bGUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG1hcmdpbjogMzBweCBhdXRvIDE1cHg7XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG4uYXV0aC1icmFuZC1kZXNjIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbmlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjUyMjJkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sZWZ0LWRlc2NyaXB0aW9uLWFyZWEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDU1MHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIC5tYWluLXRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgIH1cclxuICAgIC5kZXNjLWJveCB7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNGVhZWY7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgICAgICAuc3ViLXRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICAgICAgLy8gZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZGVzYyB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5sb2dvLWFyZWEge1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAvLyB0b3A6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLmF1dGgtaW5uZXItY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMHB4KTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cbi5hdXRoLWlubmVyLWNvbnRhaW5lciAuYXV0aC1wYWdlLWJveCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLmF1dGgtaW5uZXItY29udGFpbmVyIC5hdXRoLXBhZ2UtYm94IC5hdXRoLWJhbm5lci1hcmVhIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYXV0aC1pbm5lci1jb250YWluZXIgLmF1dGgtcGFnZS1ib3ggLmlubmVyLWZvcm0tYXJlYSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uYXV0aC1pbm5lci1jb250YWluZXIgLmF1dGgtcGFnZS1ib3ggLmlubmVyLWZvcm0tYXJlYSAuZm9ybS1ib3gge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtd2lkdGg6IDY1MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uYXV0aC1pbm5lci1jb250YWluZXIgLmF1dGgtcGFnZS1ib3ggLmlubmVyLWZvcm0tYXJlYSAuZm9ybS1ib3ggLmZvcm0tY29udHJvbCB7XG4gIGhlaWdodDogNDBweDtcbn1cbi5hdXRoLWlubmVyLWNvbnRhaW5lciAuYXV0aC1wYWdlLWJveCAuaW5uZXItZm9ybS1hcmVhIC5mb3JtLWJveCAuYnRuIHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmVycm9yX21zZyB7XG4gIGNvbG9yOiByZWQ7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uYXN0ZXJpY2sge1xuICBjb2xvcjogcmVkO1xufVxuXG4uYXV0aC1icmFuZC10aXRsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbjogMzBweCBhdXRvIDE1cHg7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmF1dGgtYnJhbmQtZGVzYyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Y1MjIyZCAhaW1wb3J0YW50O1xufVxuXG4ubGVmdC1kZXNjcmlwdGlvbi1hcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNTUwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4ubGVmdC1kZXNjcmlwdGlvbi1hcmVhIC5tYWluLXRpdGxlIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG4ubGVmdC1kZXNjcmlwdGlvbi1hcmVhIC5kZXNjLWJveCB7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U0ZWFlZjtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG4ubGVmdC1kZXNjcmlwdGlvbi1hcmVhIC5kZXNjLWJveCAuc3ViLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5sZWZ0LWRlc2NyaXB0aW9uLWFyZWEgLmRlc2MtYm94IC5kZXNjIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG4ubGVmdC1kZXNjcmlwdGlvbi1hcmVhIC5sb2dvLWFyZWEgaW1nIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-signup',
          templateUrl: './signup.component.html',
          styleUrls: ['./signup.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_services_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/accounts/auth-core/auth-core.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/accounts/auth-core/auth-core.component.ts ***!
    \***********************************************************/

  /*! exports provided: AuthCoreComponent */

  /***/
  function srcAppAccountsAuthCoreAuthCoreComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthCoreComponent", function () {
      return AuthCoreComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthCoreComponent =
    /*#__PURE__*/
    function () {
      function AuthCoreComponent() {
        _classCallCheck(this, AuthCoreComponent);
      }

      _createClass(AuthCoreComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AuthCoreComponent;
    }();

    AuthCoreComponent.ɵfac = function AuthCoreComponent_Factory(t) {
      return new (t || AuthCoreComponent)();
    };

    AuthCoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AuthCoreComponent,
      selectors: [["app-auth-core"]],
      decls: 43,
      vars: 0,
      consts: [["id", "mainWrapper", 1, "auth-container"], [1, "inner_wrapper"], [1, "auth-header", "py-3"], [1, "container1"], [1, "row"], [1, "col-6", "col-md-6", "col-lg-6"], [1, "outh_logo"], [1, "logo_wrapper"], ["src", "..//../../assets/images/logo.png", "alt", "", "title", "", "height", "60px"], [1, "col-6", "col-md-6", "col-lg-6", "ml-auto"], [1, "country_wrapper"], [1, "country_list"], [1, "auth-options", "float-right"], [1, "outh_innerForm"], [1, "innerdiv"], [1, "container-fluid"], [1, "col-md-6", "col-lg-6", "pr-5"], [1, "inner_content"], [1, "content_wrapper"], [1, "text-white"], [1, "col-md-6", "col-lg-6"], [1, "outh_form_wrapper"]],
      template: function AuthCoreComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "select", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "EN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "ER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "RU");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "ZH");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "JA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h3", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "A Forex Broker With Over ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "10 Years of Professional");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Experience With ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Global Presence");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Choose MT5 & Avail Advantages To Trade With Just $2/Trade & Also Avail Trade Insurance Program. Trading with your choice!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["#mainWrapper[_ngcontent-%COMP%] {\n  background-image: url('bg.jpg');\n  background-size: cover;\n  position: relative;\n  height: 100%;\n  display: table;\n  width: 100%;\n}\n\n#mainWrapper[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.6) cf;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  z-index: 1;\n}\n\n.auth-options[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  border-radius: 6px;\n  border: transparent;\n}\n\n#mainWrapper[_ngcontent-%COMP%]   .inner_wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n\n.auth-header[_ngcontent-%COMP%]   .country_wrapper[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n  height: 100%;\n}\n\n.auth-header[_ngcontent-%COMP%]   .country_wrapper[_ngcontent-%COMP%]   .country_list[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.auth-header[_ngcontent-%COMP%]   .country_wrapper[_ngcontent-%COMP%]   .auth-options[_ngcontent-%COMP%] {\n  background: #ffffffab;\n}\n\n.outh_innerForm[_ngcontent-%COMP%] {\n  padding-top: 88px;\n  height: 100%;\n  width: 100%;\n  display: table;\n  position: absolute;\n  top: 0;\n}\n\n.outh_innerForm[_ngcontent-%COMP%]   .innerdiv[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.outh_innerForm[_ngcontent-%COMP%]   .innerdiv[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.outh_innerForm[_ngcontent-%COMP%]   .innerdiv[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #FF512F;\n}\n\n.outh_innerForm[_ngcontent-%COMP%]   .innerdiv[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.outh_innerForm[_ngcontent-%COMP%]   .innerdiv[_ngcontent-%COMP%]   .outh_form_wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #fff;\n  height: 100%;\n  border-radius: 5px;\n  -webkit-border-radius: 5px;\n  -moz-border-radius: 5px;\n  max-width: 550px;\n  margin: 0 auto;\n}\n\n.outh_innerForm[_ngcontent-%COMP%]   .inner_content[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n  height: 100%;\n}\n\n.outh_innerForm[_ngcontent-%COMP%]   .inner_content[_ngcontent-%COMP%]   .content_wrapper[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n}\n\n\n\n@media screen and (max-width: 767px) {\n  #mainWrapper[_ngcontent-%COMP%] {\n    position: initial;\n    display: block;\n    overflow: scroll;\n  }\n\n  .outh_innerForm[_ngcontent-%COMP%] {\n    padding-bottom: 40px;\n  }\n}\n\n\n\n.container1[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudHMvYXV0aC1jb3JlL0Y6XFxuZXd0cmFkZXJcXHRyYWRlcjQtNS9zcmNcXGFwcFxcYWNjb3VudHNcXGF1dGgtY29yZVxcYXV0aC1jb3JlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hY2NvdW50cy9hdXRoLWNvcmUvYXV0aC1jb3JlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx1Q0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FER0k7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNBUjs7QURDUTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7QUNDWjs7QURDUTtFQUNJLHFCQUFBO0FDQ1o7O0FESUE7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtBQ0RKOztBREVJO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtBQ0FSOztBRENRO0VBQ0ksV0FBQTtBQ0NaOztBREFZO0VBQ0ksY0FBQTtBQ0VoQjs7QURDUTtFQUNJLFdBQUE7QUNDWjs7QURDUTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNDWjs7QURFSTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0FSOztBRENRO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtBQ0NaOztBREtBLGNBQUE7O0FBRUE7RUFDSTtJQUNJLGlCQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0VDSE47O0VES0U7SUFDSSxvQkFBQTtFQ0ZOO0FBQ0Y7O0FETUEsY0FBQTs7QUFFQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNMSiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnRzL2F1dGgtY29yZS9hdXRoLWNvcmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFpbldyYXBwZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwic3JjL2Fzc2V0cy9pbWFnZXMvYmcuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiNtYWluV3JhcHBlcjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNiljZjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuLmF1dGgtb3B0aW9ucyB7XHJcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgYm9yZGVyOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuI21haW5XcmFwcGVyIC5pbm5lcl93cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uYXV0aC1oZWFkZXIge1xyXG4gICAgLmNvdW50cnlfd3JhcHBlciB7XHJcbiAgICAgICAgZGlzcGxheTogdGFibGU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIC5jb3VudHJ5X2xpc3Qge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYXV0aC1vcHRpb25zIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZmFiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLm91dGhfaW5uZXJGb3JtIHtcclxuICAgIHBhZGRpbmctdG9wOiA4OHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIC5pbm5lcmRpdiB7XHJcbiAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNGRjUxMkZcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmZcclxuICAgICAgICB9XHJcbiAgICAgICAgLm91dGhfZm9ybV93cmFwcGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNTUwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5pbm5lcl9jb250ZW50IHtcclxuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgLmNvbnRlbnRfd3JhcHBlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLyoxOS0zLXNoYWJhYiovXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2N3B4KSB7XHJcbiAgICAjbWFpbldyYXBwZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBpbml0aWFsO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgICB9XHJcbiAgICAub3V0aF9pbm5lckZvcm0ge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLyoxOS0zLXNoYWJhYiovXHJcblxyXG4uY29udGFpbmVyMSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTQwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn0iLCIjbWFpbldyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJzcmMvYXNzZXRzL2ltYWdlcy9iZy5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiNtYWluV3JhcHBlcjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KSBjZjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xufVxuXG4uYXV0aC1vcHRpb25zIHtcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3JkZXI6IHRyYW5zcGFyZW50O1xufVxuXG4jbWFpbldyYXBwZXIgLmlubmVyX3dyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uYXV0aC1oZWFkZXIgLmNvdW50cnlfd3JhcHBlciB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmF1dGgtaGVhZGVyIC5jb3VudHJ5X3dyYXBwZXIgLmNvdW50cnlfbGlzdCB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uYXV0aC1oZWFkZXIgLmNvdW50cnlfd3JhcHBlciAuYXV0aC1vcHRpb25zIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZmFiO1xufVxuXG4ub3V0aF9pbm5lckZvcm0ge1xuICBwYWRkaW5nLXRvcDogODhweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogdGFibGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xufVxuLm91dGhfaW5uZXJGb3JtIC5pbm5lcmRpdiB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4ub3V0aF9pbm5lckZvcm0gLmlubmVyZGl2IGgzIHtcbiAgY29sb3I6ICNmZmY7XG59XG4ub3V0aF9pbm5lckZvcm0gLmlubmVyZGl2IGgzIHNwYW4ge1xuICBjb2xvcjogI0ZGNTEyRjtcbn1cbi5vdXRoX2lubmVyRm9ybSAuaW5uZXJkaXYgcCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLm91dGhfaW5uZXJGb3JtIC5pbm5lcmRpdiAub3V0aF9mb3JtX3dyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWF4LXdpZHRoOiA1NTBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4ub3V0aF9pbm5lckZvcm0gLmlubmVyX2NvbnRlbnQge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5vdXRoX2lubmVyRm9ybSAuaW5uZXJfY29udGVudCAuY29udGVudF93cmFwcGVyIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLyoxOS0zLXNoYWJhYiovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAjbWFpbldyYXBwZXIge1xuICAgIHBvc2l0aW9uOiBpbml0aWFsO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gIH1cblxuICAub3V0aF9pbm5lckZvcm0ge1xuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICB9XG59XG4vKjE5LTMtc2hhYmFiKi9cbi5jb250YWluZXIxIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTQwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthCoreComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-auth-core',
          templateUrl: './auth-core.component.html',
          styleUrls: ['./auth-core.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/accounts/auth-core/forget-password1/forget-password1.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/accounts/auth-core/forget-password1/forget-password1.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: ForgetPassword1Component */

  /***/
  function srcAppAccountsAuthCoreForgetPassword1ForgetPassword1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgetPassword1Component", function () {
      return ForgetPassword1Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ForgetPassword1Component =
    /*#__PURE__*/
    function () {
      function ForgetPassword1Component() {
        _classCallCheck(this, ForgetPassword1Component);
      }

      _createClass(ForgetPassword1Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ForgetPassword1Component;
    }();

    ForgetPassword1Component.ɵfac = function ForgetPassword1Component_Factory(t) {
      return new (t || ForgetPassword1Component)();
    };

    ForgetPassword1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ForgetPassword1Component,
      selectors: [["app-forget-password1"]],
      decls: 2,
      vars: 0,
      template: function ForgetPassword1Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "forget-password1 works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnRzL2F1dGgtY29yZS9mb3JnZXQtcGFzc3dvcmQxL2ZvcmdldC1wYXNzd29yZDEuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgetPassword1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-forget-password1',
          templateUrl: './forget-password1.component.html',
          styleUrls: ['./forget-password1.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/accounts/auth-core/login1/login1.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/accounts/auth-core/login1/login1.component.ts ***!
    \***************************************************************/

  /*! exports provided: Login1Component */

  /***/
  function srcAppAccountsAuthCoreLogin1Login1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Login1Component", function () {
      return Login1Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/auth/forgot-password-2"];
    };

    var _c1 = function _c1() {
      return ["/auth/signup"];
    };

    var Login1Component =
    /*#__PURE__*/
    function () {
      function Login1Component() {
        _classCallCheck(this, Login1Component);
      }

      _createClass(Login1Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Login1Component;
    }();

    Login1Component.ɵfac = function Login1Component_Factory(t) {
      return new (t || Login1Component)();
    };

    Login1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Login1Component,
      selectors: [["app-login1"]],
      decls: 40,
      vars: 4,
      consts: [[1, "auth-inner-container", "main-txt-color", "m-0", "d-flex", "flex-center"], [1, "auth-page-box", "p-4"], [1, "no-gutters"], [1, "inner-form-area", "bg-f", "position-relative"], [1, "form-box", "position-relative"], [1, "title-section", "text-left", "mb-4"], [1, "title-text", "text-size-21", "font-weight-400", "m-0", "p-0"], [1, "title-desc", "secondary-txt-color", "text-size-14"], [1, ""], [1, "form-group", "position-relative"], ["for", "username", 1, "text-size-15", "font-weight-400"], ["type", "text ", "id", "usedId ", "placeholder", "Enter your email address", "required", "", 1, "form-control", "text-size-15", "main-txt-color", "bg-f", "bd-color"], [1, "form-icon", "text-size-12"], [1, "fas", "fa-envelope"], ["for", "password ", 1, "text-size-15", "font-weight-400"], ["type", "password ", "id", "password ", "placeholder", "Enter your password", "required", "", 1, "form-control", "text-size-15", "main-txt-color", "bg-f", "bd-color"], [1, "fas", "fa-lock"], [1, "forgot-password", "mb-3", "text-size-13", "clearfix"], [1, "float-right", 3, "routerLink"], [1, "submit-btn", "mb-2"], ["type", "submit", "value", "Sign In", "routerLink", "/home", 1, "btn", "btn-primary", "btn-block", "text-size-14"], [1, "clearfix"], [1, "no-account", "text-size-13", "text-center", "mt-1"], [3, "routerLink"], [1, "divider-text"], [1, "no-account", "text-size-13", "float-left", "mt-1"]],
      template: function Login1Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Sign In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Welcome back! Please signin to continue.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Email address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Forgot Password ?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Sign In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Don't have account ? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Create an Account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Risk");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Risk Warning :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Trading FX instruments and CFDs can incur a high level of risk and may result in a loss of all your invested Capital.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
      styles: [".auth-page-box[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.auth-inner-container[_ngcontent-%COMP%]   .auth-page-box[_ngcontent-%COMP%]   .inner-form-area[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 0.875rem 0.75rem;\n}\n\n.auth-inner-container[_ngcontent-%COMP%]   .auth-page-box[_ngcontent-%COMP%]   .inner-form-area[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  height: 45px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudHMvYXV0aC1jb3JlL2xvZ2luMS9GOlxcbmV3dHJhZGVyXFx0cmFkZXI0LTUvc3JjXFxhcHBcXGFjY291bnRzXFxhdXRoLWNvcmVcXGxvZ2luMVxcbG9naW4xLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hY2NvdW50cy9hdXRoLWNvcmUvbG9naW4xL2xvZ2luMS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50cy9hdXRoLWNvcmUvbG9naW4xL2xvZ2luMS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdXRoLXBhZ2UtYm94IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYXV0aC1pbm5lci1jb250YWluZXIgLmF1dGgtcGFnZS1ib3ggLmlubmVyLWZvcm0tYXJlYSAuZm9ybS1ib3ggLmJ0biB7XHJcbiAgICBwYWRkaW5nOiAwLjg3NXJlbSAwLjc1cmVtO1xyXG59XHJcblxyXG4uYXV0aC1pbm5lci1jb250YWluZXIgLmF1dGgtcGFnZS1ib3ggLmlubmVyLWZvcm0tYXJlYSAuZm9ybS1ib3ggLmZvcm0tY29udHJvbCB7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbn0iLCIuYXV0aC1wYWdlLWJveCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYXV0aC1pbm5lci1jb250YWluZXIgLmF1dGgtcGFnZS1ib3ggLmlubmVyLWZvcm0tYXJlYSAuZm9ybS1ib3ggLmJ0biB7XG4gIHBhZGRpbmc6IDAuODc1cmVtIDAuNzVyZW07XG59XG5cbi5hdXRoLWlubmVyLWNvbnRhaW5lciAuYXV0aC1wYWdlLWJveCAuaW5uZXItZm9ybS1hcmVhIC5mb3JtLWJveCAuZm9ybS1jb250cm9sIHtcbiAgaGVpZ2h0OiA0NXB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Login1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login1',
          templateUrl: './login1.component.html',
          styleUrls: ['./login1.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/accounts/auth-core/otp-password1/otp-password1.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/accounts/auth-core/otp-password1/otp-password1.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: OtpPassword1Component */

  /***/
  function srcAppAccountsAuthCoreOtpPassword1OtpPassword1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OtpPassword1Component", function () {
      return OtpPassword1Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var OtpPassword1Component =
    /*#__PURE__*/
    function () {
      function OtpPassword1Component() {
        _classCallCheck(this, OtpPassword1Component);
      }

      _createClass(OtpPassword1Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OtpPassword1Component;
    }();

    OtpPassword1Component.ɵfac = function OtpPassword1Component_Factory(t) {
      return new (t || OtpPassword1Component)();
    };

    OtpPassword1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OtpPassword1Component,
      selectors: [["app-otp-password1"]],
      decls: 2,
      vars: 0,
      template: function OtpPassword1Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "otp-password1 works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnRzL2F1dGgtY29yZS9vdHAtcGFzc3dvcmQxL290cC1wYXNzd29yZDEuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OtpPassword1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-otp-password1',
          templateUrl: './otp-password1.component.html',
          styleUrls: ['./otp-password1.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/accounts/auth-core/set-password1/set-password1.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/accounts/auth-core/set-password1/set-password1.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: SetPassword1Component */

  /***/
  function srcAppAccountsAuthCoreSetPassword1SetPassword1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SetPassword1Component", function () {
      return SetPassword1Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SetPassword1Component =
    /*#__PURE__*/
    function () {
      function SetPassword1Component() {
        _classCallCheck(this, SetPassword1Component);
      }

      _createClass(SetPassword1Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SetPassword1Component;
    }();

    SetPassword1Component.ɵfac = function SetPassword1Component_Factory(t) {
      return new (t || SetPassword1Component)();
    };

    SetPassword1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SetPassword1Component,
      selectors: [["app-set-password1"]],
      decls: 2,
      vars: 0,
      template: function SetPassword1Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "set-password1 works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnRzL2F1dGgtY29yZS9zZXQtcGFzc3dvcmQxL3NldC1wYXNzd29yZDEuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SetPassword1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-set-password1',
          templateUrl: './set-password1.component.html',
          styleUrls: ['./set-password1.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/accounts/auth-core/signup1/signup1.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/accounts/auth-core/signup1/signup1.component.ts ***!
    \*****************************************************************/

  /*! exports provided: Signup1Component */

  /***/
  function srcAppAccountsAuthCoreSignup1Signup1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Signup1Component", function () {
      return Signup1Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var Signup1Component =
    /*#__PURE__*/
    function () {
      function Signup1Component() {
        _classCallCheck(this, Signup1Component);
      }

      _createClass(Signup1Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Signup1Component;
    }();

    Signup1Component.ɵfac = function Signup1Component_Factory(t) {
      return new (t || Signup1Component)();
    };

    Signup1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Signup1Component,
      selectors: [["app-signup1"]],
      decls: 2,
      vars: 0,
      template: function Signup1Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "signup1 works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnRzL2F1dGgtY29yZS9zaWdudXAxL3NpZ251cDEuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Signup1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-signup1',
          templateUrl: './signup1.component.html',
          styleUrls: ['./signup1.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/models/login.modal.ts":
  /*!**********************************************!*\
    !*** ./src/app/shared/models/login.modal.ts ***!
    \**********************************************/

  /*! exports provided: LoginModalData */

  /***/
  function srcAppSharedModelsLoginModalTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginModalData", function () {
      return LoginModalData;
    });

    var LoginModalData = function LoginModalData() {
      _classCallCheck(this, LoginModalData);

      this.Email = '';
      this.Password = '';
      this.DealerId = 1001;
    };
    /***/

  },

  /***/
  "./src/app/shared/models/signup.modal.ts":
  /*!***********************************************!*\
    !*** ./src/app/shared/models/signup.modal.ts ***!
    \***********************************************/

  /*! exports provided: SignUpModalData */

  /***/
  function srcAppSharedModelsSignupModalTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpModalData", function () {
      return SignUpModalData;
    });

    var SignUpModalData = function SignUpModalData() {
      _classCallCheck(this, SignUpModalData);

      this.accountPlan = '';
      this.name = '';
      this.email = '';
      this.country = '';
      this.bonusCard = '';
      this.terms = '';
      this.lastname = '';
      this.phone = '';
    };
    /***/

  }
}]);
//# sourceMappingURL=accounts-accounts-module-es5.js.map