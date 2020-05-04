function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["client-core-fund-management-fund-management-module"], {
  /***/
  "./src/app/pages/client-core/fund-management/fund-management-core/fund-deposit/fund-deposit.component.ts":
  /*!***************************************************************************************************************!*\
    !*** ./src/app/pages/client-core/fund-management/fund-management-core/fund-deposit/fund-deposit.component.ts ***!
    \***************************************************************************************************************/

  /*! exports provided: FundDepositComponent */

  /***/
  function srcAppPagesClientCoreFundManagementFundManagementCoreFundDepositFundDepositComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FundDepositComponent", function () {
      return FundDepositComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var FundDepositComponent =
    /*#__PURE__*/
    function () {
      function FundDepositComponent() {
        _classCallCheck(this, FundDepositComponent);
      }

      _createClass(FundDepositComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FundDepositComponent;
    }();

    FundDepositComponent.ɵfac = function FundDepositComponent_Factory(t) {
      return new (t || FundDepositComponent)();
    };

    FundDepositComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FundDepositComponent,
      selectors: [["app-fund-deposit"]],
      decls: 21,
      vars: 0,
      consts: [[1, "small-content-section", "bg-f"], [1, "row"], [1, "col-md-12"], [1, "card", "border-0"], [1, "card-body", "border-0", "p-0"], [1, "tabs-container"], [1, "tabs-heading", "d-flex", "flex-row", "border-bottom"], ["routerLinkActive", "active", 1, "tabs-item", "item-with-icon"], ["routerLink", "/home/money/deposit-funds/deposit-to-wallet", 1, ""], [1, "material-icons"], [1, "tab-text"], ["routerLink", "/home/money/deposit-funds/deposit-to-account", 1, ""], [1, "tabs-body", "p-2"]],
      template: function FundDepositComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "account_balance_wallet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Deposit To Wallet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "museum");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Deposit To Account");

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
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NsaWVudC1jb3JlL2Z1bmQtbWFuYWdlbWVudC9mdW5kLW1hbmFnZW1lbnQtY29yZS9mdW5kLWRlcG9zaXQvZnVuZC1kZXBvc2l0LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FundDepositComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-fund-deposit',
          templateUrl: './fund-deposit.component.html',
          styleUrls: ['./fund-deposit.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/client-core/fund-management/fund-management-core/fund-deposit/to-account/to-account.component.ts":
  /*!************************************************************************************************************************!*\
    !*** ./src/app/pages/client-core/fund-management/fund-management-core/fund-deposit/to-account/to-account.component.ts ***!
    \************************************************************************************************************************/

  /*! exports provided: ToAccountComponent */

  /***/
  function srcAppPagesClientCoreFundManagementFundManagementCoreFundDepositToAccountToAccountComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToAccountComponent", function () {
      return ToAccountComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _shared_services_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../../../../shared/services/global.service */
    "./src/app/shared/services/global.service.ts");
    /* harmony import */


    var _shared_services_header_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../../../../../shared/services/header.service */
    "./src/app/shared/services/header.service.ts");
    /* harmony import */


    var _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../../../../../shared/services/notification.service */
    "./src/app/shared/services/notification.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var angular_feather__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! angular-feather */
    "./node_modules/angular-feather/__ivy_ngcc__/fesm2015/angular-feather.js");

    var _c0 = ["formData"];

    function ToAccountComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r324 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Success -: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i-feather", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToAccountComponent_div_9_Template_i_feather_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r324);

          var ctx_r323 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r323.onCloseMsqBlock();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r313 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r313.messageToDisplay, " ");
      }
    }

    function ToAccountComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r326 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Oops... : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i-feather", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToAccountComponent_div_12_Template_i_feather_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r326);

          var ctx_r325 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r325.onCloseMsqBlock();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r314 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r314.messageToDisplay, " ");
      }
    }

    function ToAccountComponent_option_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var acc_r327 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", acc_r327.MT4Account);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](acc_r327.MT4Account);
      }
    }

    function ToAccountComponent_span_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please Enter a valid Account Number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ToAccountComponent_span_40_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please Enter a valid Amount");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ToAccountComponent_span_52_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter a comment");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ToAccountComponent =
    /*#__PURE__*/
    function () {
      function ToAccountComponent(globalService, headerService, notificationService) {
        _classCallCheck(this, ToAccountComponent);

        this.globalService = globalService;
        this.headerService = headerService;
        this.notificationService = notificationService;
        this.isLoading = false;
        this.walletToWalletLedger = [];
        this.isVisibleFormArea = false;
        this.ErrorMsqBlock = false;
        this.successMsqBlock = false;
        this.liveAccountData = [];
        this.LoggedParams = JSON.parse(localStorage.getItem('LoggedUser'));
        this.walletId = localStorage.getItem('LoggedDealerwalletID');
        this.dealerId = localStorage.getItem('LoggedDealerCode');
        this.senderEmailId = this.LoggedParams.sProfile.uContactInfo.Email;
      }

      _createClass(ToAccountComponent, [{
        key: "toggleFormArea",
        value: function toggleFormArea() {
          this.isVisibleFormArea = !this.isVisibleFormArea;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getProfileAccounts();
        }
      }, {
        key: "numberOnly",
        value: function numberOnly(event) {
          var charCode = event.which ? event.which : event.keyCode;

          if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
          }

          return true;
        }
      }, {
        key: "getProfileAccounts",
        value: function getProfileAccounts() {
          var _this = this;

          var params = {
            ProfileId: this.LoggedParams.sProfile.sMasterId,
            LoginId: this.LoggedParams.sProfile.sMasterId
          };
          this.accountSubscription = this.globalService.GET_PROFILE_ACCOUNTS(params).subscribe(function (data) {
            // this.liveAccountData = data.lstAccount.map( acc => {
            //   if (acc) {
            //     return acc.sUserInfo;
            //   }
            // });
            _this.liveAccountData = data.lstAccount.map(function (acc) {
              if (acc) {
                return Object.assign(acc.sUserInfo, acc.sAccountPlan);
              }
            });
            console.log(_this.liveAccountData);
          });
        }
      }, {
        key: "autoCloseMsqBlock",
        value: function autoCloseMsqBlock() {
          var _this2 = this;

          setTimeout(function () {
            _this2.successMsqBlock = false;
            _this2.ErrorMsqBlock = false;
            _this2.messageToDisplay = '';
          }, 10000);
        }
      }, {
        key: "onCloseMsqBlock",
        value: function onCloseMsqBlock() {
          this.successMsqBlock = false;
          this.ErrorMsqBlock = false;
          this.messageToDisplay = '';
        }
      }, {
        key: "onSuccessMsqDisplay",
        value: function onSuccessMsqDisplay(msq) {
          this.messageToDisplay = '';
          this.ErrorMsqBlock = false;
          this.successMsqBlock = true;
          this.messageToDisplay = msq;
        }
      }, {
        key: "onErrorMsqDisplay",
        value: function onErrorMsqDisplay(msq) {
          this.messageToDisplay = '';
          this.successMsqBlock = false;
          this.ErrorMsqBlock = true;
          this.messageToDisplay = msq;
        } // Check KYC is Required or not

      }, {
        key: "isKYCRequired",
        value: function isKYCRequired() {
          var _this3 = this;

          // tslint:disable-next-line: no-shadowed-variable
          return new Promise(function (resolve, reject) {
            var params = {
              Dealer: _this3.LoggedParams.sProfile.sDealerId
            }; // Call getKycset function to check KYC setting

            _this3.globalService.getKycset(params).subscribe(function (data) {
              console.warn('KYC Settings = ' + data);

              if (data && data === 3) {
                // console.warn('KYC Required');
                resolve(true);
              } else if (data && data === 1 || data === 2) {
                // console.warn('KYC Not Required');
                resolve(false);
              } else if (data || data === 0) {
                // console.warn('KYC Not Required');
                resolve(false);
              } else {
                reject('KYC Settings Not Found .....');
              }
            });
          });
        } // IS KYC Approved If KYC required

      }, {
        key: "isKYCApproved",
        value: function isKYCApproved() {
          var _this4 = this;

          var params = {
            KYCStatus: this.LoggedParams.sProfile.uKYCStatus
          }; // tslint:disable-next-line: no-shadowed-variable

          return new Promise(function (resolve, reject) {
            if (params.KYCStatus) {
              if (params.KYCStatus !== 2) {
                // console.warn('Your KYC Is Not Approved');
                _this4.onErrorMsqDisplay('KYC is required to make Transaction In Wallet to Wallet!'); // Swal.fire('Oops...', 'KYC is required to make Transaction In Wallet to Wallet!', 'error');


                resolve(false);

                _this4.displayKYCPopup();

                _this4.isLoading = false;

                _this4.autoCloseMsqBlock();
              } else {
                // console.warn('Your KYC IS approved');
                resolve(true);
              }
            } else {
              reject('KYC Status Not Found ....');
            }
          });
        }
      }, {
        key: "displayKYCPopup",
        value: function displayKYCPopup() {
          var _this5 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: 'Please update KYC First!',
            text: 'Your KYC is not Verified. You will not be able to make Transaction without KYC Approved!',
            icon: 'error',
            showCancelButton: false,
            confirmButtonText: 'Show me the way',
            cancelButtonText: 'No, keep it',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33'
          }).then(function (result) {
            if (result.value) {
              _this5.globalService.redirect('/home/documents/kyc-upload');
            }
          });
        } // Check Fund Balance on MT4Account before make a Transaction

      }, {
        key: "isBalanceAvaliable",
        value: function isBalanceAvaliable(formData) {
          var _this6 = this;

          // tslint:disable-next-line: no-shadowed-variable
          return new Promise(function (resolve, reject) {
            console.log(formData.amount);
            _this6.selectedAccount = _this6.liveAccountData.filter(function (acc) {
              if (acc.MT4Account === formData.account) {
                return acc;
              }
            });
            var params = {
              sWalletId: _this6.walletId
            };

            _this6.globalService.getWalletInfo(params).subscribe(function (data) {
              console.log(data);

              if (data) {
                console.warn('Avaliable Balance = ' + data.uBalance);
                console.warn('Transfer Amount = ' + data.uBalance);

                if (formData.amount <= data.uBalance) {
                  resolve(true);
                } else {
                  // this.onErrorMsqDisplay('Please maintain Sufficient Balance in your Wallet before make a Transaction ');
                  _this6.notificationService.showError('You have not sufficient Balance in your Wallet', 'Error');

                  resolve(false);
                  _this6.isLoading = false;

                  _this6.autoCloseMsqBlock();
                }
              } else {
                reject('Balance Not Found .....');
              }
            });
          });
        }
      }, {
        key: "depositMt4Account",
        value: function depositMt4Account(formData) {
          var _this7 = this;

          // console.log('makeWalletTransfer function excuted');
          console.log(this.LoggedParams.sProfile.sWalletId);
          console.log(this.LoggedParams.sProfile.sDealerId);
          var params = {
            uCommission: 0,
            Amount: formData.amount,
            Comment: formData.comment,
            uWalletId: this.LoggedParams.sProfile.sWalletId,
            DealerId: this.LoggedParams.sProfile.sDealerId,
            UuAccount: formData.account,
            ManagerIndex: this.selectedAccount[0].uManager,
            uSource: 0,
            uTransType: 0
          };
          this.globalService.walletTrans(params).subscribe(function (data) {
            if (data.oStatus === true) {
              //  this.onSuccessMsqDisplay(data.oStatus);
              // tslint:disable-next-line: max-line-length
              _this7.notificationService.showSuccess("You have transferred ".concat(formData.amount, " dollar in your account ").concat(formData.account, " from wallet id ").concat(_this7.LoggedParams.sProfile.sWalletId, " successfully "), 'Success');

              _this7.headerService.getUserWalletDetail();

              _this7.isLoading = false; //  this.fundTransactionForm.reset();

              _this7.autoCloseMsqBlock();
            } else {
              // this.onErrorMsqDisplay('Failed To Make Transaction');
              _this7.notificationService.showError('Failed To Make Transaction', 'Error');

              _this7.isLoading = false;

              _this7.autoCloseMsqBlock();
            }
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this8 = this;

          this.isLoading = true;
          this.onCloseMsqBlock(); // Get Form Field Data on Submit

          var formData = {
            account: this.fundTransactionForm.value.account,
            amount: this.fundTransactionForm.value.amount,
            comment: this.fundTransactionForm.value.comment
          };

          if (0 >= this.fundTransactionForm.value.amount) {
            // this.onErrorMsqDisplay(`${this.fundTransactionForm.value.amount} is not a Valid Number in Amount Field`);
            this.notificationService.showError("".concat(this.fundTransactionForm.value.amount, " is not a Valid Number in Amount Field"), 'Error');
            this.isLoading = false;
            this.autoCloseMsqBlock();
            return;
          }

          this.isBalanceAvaliable(formData).then(function (resData) {
            if (resData) {
              _this8.isKYCRequired().then(function (KYCResponse) {
                // console.warn('Is KYC Required = ' + KYCResponse);
                if (KYCResponse) {
                  _this8.isKYCApproved().then(function (approvalReponse) {
                    if (approvalReponse) {
                      // console.log('w2w function excuted');
                      _this8.depositMt4Account(formData);
                    }
                  }).catch(function (err) {
                    console.error(err); // this.onErrorMsqDisplay(err);

                    _this8.notificationService.showError('Failed To Make Transaction', 'Error');
                  });
                } else {
                  _this8.depositMt4Account(formData); // console.log('w2w function excuted');

                }
              }).catch(function (err) {
                console.error(err); // this.onErrorMsqDisplay(err);

                _this8.notificationService.showError('Failed To Make Transaction', 'Error');
              });
            }
          }).catch(function (err) {
            console.error(err); // this.onErrorMsqDisplay(err);

            _this8.notificationService.showError('Failed To Make Transaction', 'Error');
          });
        } // tslint:disable-next-line: use-lifecycle-interface

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.accountSubscription.unsubscribe();
        }
      }]);

      return ToAccountComponent;
    }();

    ToAccountComponent.ɵfac = function ToAccountComponent_Factory(t) {
      return new (t || ToAccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_header_service__WEBPACK_IMPORTED_MODULE_3__["HeaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]));
    };

    ToAccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ToAccountComponent,
      selectors: [["app-to-account"]],
      viewQuery: function ToAccountComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fundTransactionForm = _t.first);
        }
      },
      decls: 58,
      vars: 10,
      consts: [[1, "transaction-form-container"], [1, "traction-from-box", "bg-b"], [1, "heading"], [1, "title", "text-size-15"], [1, "row"], [1, "col-md-6"], ["class", "alert alert-success alert-dismissible fade show", "role", "alert", 4, "ngIf"], ["class", "alert alert-danger alert-dismissible fade show", "role", "alert", 4, "ngIf"], [1, "", 3, "ngSubmit"], ["formData", "ngForm"], [1, "col-md-4"], [1, "form-group"], ["for", "account", 1, ""], [1, "asterick"], ["required", "", "ngModel", "", "name", "account", "id", "account", 1, "form-control", "main-txt-color", "bd-color", "shadow-none"], ["account", "ngModel"], ["value", "", 1, "text-size-13", 3, "disabled"], ["class", "text-size-13", "name", "accounts", 3, "ngValue", 4, "ngFor", "ngForOf"], [1, "form-icon", "text-size-12"], [1, "fas", "fa-envelope"], ["class", "help-block text-danger ", 4, "ngIf"], ["for", "amount", 1, "main-txt-color"], ["min", "1", "required", "", "ngModel", "", "name", "amount", "type", "text", "id", "amount", "placeholder", "Enter Amount", 1, "form-control", "main-txt-color", "bd-color", "shadow-none", 3, "keypress"], ["amount", "ngModel"], [1, "col-md-8"], ["for", "comment", 1, "main-txt-color"], ["required", "", "ngModel", "", "name", "comment", "type", "text", "id", "comment", "placeholder", "Enter Comment", 1, "form-control", "main-txt-color", "bd-color", "shadow-none"], ["comment", "ngModel"], [1, "col-md-2"], [1, "position-relative", 2, "padding-top", "29px"], [1, "btn", "btn-primary", "btn-sm", "px-3", "position-relative", 3, "disabled"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show"], ["type", "button", "data-dismiss", "alert", 1, "close"], ["name", "x", 1, "close-btn", 3, "click"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show"], ["name", "accounts", 1, "text-size-13", 3, "ngValue"], [1, "help-block", "text-danger"]],
      template: function ToAccountComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Deposit In Account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "All fields are required to make deposit in Account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ToAccountComponent_div_9_Template, 6, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ToAccountComponent_div_12_Template, 6, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ToAccountComponent_Template_form_ngSubmit_13_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Account Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "select", 14, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Select Account Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ToAccountComponent_option_26_Template, 2, 2, "option", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ToAccountComponent_span_29_Template, 2, 0, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 22, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function ToAccountComponent_Template_input_keypress_36_listener($event) {
            return ctx.numberOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, ToAccountComponent_span_40_Template, 2, 0, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Comment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 26, 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, ToAccountComponent_span_52_Template, 2, 0, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Submit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r315 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

          var _r316 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

          var _r319 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37);

          var _r321 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.successMsqBlock);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ErrorMsqBlock);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.liveAccountData);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r316.valid && _r316.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r319.valid && _r319.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r321.valid && _r321.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r315.valid || ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-spinner", ctx.isLoading);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], angular_feather__WEBPACK_IMPORTED_MODULE_7__["ɵa"]],
      styles: [".transaction-form-container[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n}\n.transaction-form-container[_ngcontent-%COMP%]   .traction-from-box[_ngcontent-%COMP%] {\n  padding: 15px 15px;\n  border-radius: 4px;\n  border: 1px solid #dfe2e4;\n  -webkit-transition: all 5s ease-out;\n  transition: all 5s ease-out;\n}\n.transaction-form-container[_ngcontent-%COMP%]   .traction-from-box[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  line-height: 20px;\n  margin-bottom: 15px;\n}\n.transaction-form-container[_ngcontent-%COMP%]   .traction-from-box[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 400;\n}\n.transaction-form-container[_ngcontent-%COMP%]   .traction-from-box[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.transaction-form-container[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  position: relative;\n  top: -3px;\n}\n.right-tabBtn-row[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 20px;\n  top: 7px;\n}\n.table-bordered[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-bordered[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom-width: 1px;\n  padding: 0.5rem;\n}\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-right: 15px;\n  margin-left: 15px;\n}\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\nthead[_ngcontent-%COMP%]   th.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n.tab-inner-content[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n}\ntbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(even) {\n  background: #f8f9fa;\n}\ntbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(odd) {\n  background: #FFF;\n}\n.table-pagination[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  padding-top: 1rem;\n  background: #eff3f6;\n}\n@-webkit-keyframes spinner {\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes spinner {\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.btn-spinner[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 255, 0.6);\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.btn-spinner[_ngcontent-%COMP%]:before {\n  content: \"\";\n  box-sizing: border-box;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 20px;\n  height: 20px;\n  margin-top: -10px;\n  margin-left: -10px;\n  border-radius: 50%;\n  border: 2px solid #ffffff;\n  border-top-color: #000000;\n  -webkit-animation: spinner 0.8s linear infinite;\n          animation: spinner 0.8s linear infinite;\n}\n.table-filter-area[_ngcontent-%COMP%] {\n  position: relative;\n  background: #eff3f6;\n  padding: 15px;\n  border: 1px solid #dee2e6;\n  border-bottom: 0px;\n  border-radius: 4px 4px 0 0;\n  padding-bottom: 0px;\n}\n.swap-img-container[_ngcontent-%COMP%] {\n  background: #f3cf65;\n  padding: 2px 6px;\n  border-radius: 50%;\n}\n.swap-img-container[_ngcontent-%COMP%]   .swap-img[_ngcontent-%COMP%] {\n  width: 20px;\n  position: relative;\n  top: -1px;\n}\n.material-icons[_ngcontent-%COMP%] {\n  font-size: 24px;\n  position: relative;\n  top: 5px;\n  margin-right: 2px;\n  color: #007bff;\n}\n.history-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  padding: 10px 0;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2xpZW50LWNvcmUvZnVuZC1tYW5hZ2VtZW50L2Z1bmQtbWFuYWdlbWVudC1jb3JlL2Z1bmQtZGVwb3NpdC90by1hY2NvdW50L0Y6XFxuZXd0cmFkZXJcXHRyYWRlcjQtNS9zcmNcXGFwcFxccGFnZXNcXGNsaWVudC1jb3JlXFxmdW5kLW1hbmFnZW1lbnRcXGZ1bmQtbWFuYWdlbWVudC1jb3JlXFxmdW5kLWRlcG9zaXRcXHRvLWFjY291bnRcXHRvLWFjY291bnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NsaWVudC1jb3JlL2Z1bmQtbWFuYWdlbWVudC9mdW5kLW1hbmFnZW1lbnQtY29yZS9mdW5kLWRlcG9zaXQvdG8tYWNjb3VudC90by1hY2NvdW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjtBREFJO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUNBQUE7RUFBQSwyQkFBQTtBQ0VSO0FERFE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FDR1o7QURGWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0loQjtBREZZO0VBQ0ksZUFBQTtBQ0loQjtBREFJO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0FDRVI7QURFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7QUNDSjtBREVBOztFQUVJLHdCQUFBO0VBQ0EsZUFBQTtBQ0NKO0FERUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0NKO0FEQUk7RUFDSSxrQkFBQTtBQ0VSO0FEQ1E7RUFDSSxtQkFBQTtBQ0NaO0FESUE7RUFDSSxnQkFBQTtBQ0RKO0FESUE7RUFDSSxtQkFBQTtBQ0RKO0FESUE7RUFDSSxnQkFBQTtBQ0RKO0FESUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNESjtBRElBO0VBQ0k7SUFDSSxpQ0FBQTtZQUFBLHlCQUFBO0VDRE47QUFDRjtBREZBO0VBQ0k7SUFDSSxpQ0FBQTtZQUFBLHlCQUFBO0VDRE47QUFDRjtBRElBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7QUNGSjtBREtBO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLCtDQUFBO1VBQUEsdUNBQUE7QUNGSjtBREtBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtBQ0ZKO0FES0E7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNGSjtBRElJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ0ZSO0FETUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDSEo7QURNQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NsaWVudC1jb3JlL2Z1bmQtbWFuYWdlbWVudC9mdW5kLW1hbmFnZW1lbnQtY29yZS9mdW5kLWRlcG9zaXQvdG8tYWNjb3VudC90by1hY2NvdW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRyYW5zYWN0aW9uLWZvcm0tY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMTJweDtcclxuICAgIC50cmFjdGlvbi1mcm9tLWJveCB7XHJcbiAgICAgICAgcGFkZGluZzogMTVweCAxNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGZlMmU0O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCA1cyBlYXNlLW91dDtcclxuICAgICAgICAuaGVhZGluZyB7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzbWFsbCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2xvc2UtYnRuIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdG9wOiAtM3B4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ucmlnaHQtdGFiQnRuLXJvdyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMjBweDtcclxuICAgIHRvcDogN3B4O1xyXG59XHJcblxyXG4udGFibGUtYm9yZGVyZWQgdGhlYWQgdGgsXHJcbi50YWJsZS1ib3JkZXJlZCB0aGVhZCB0ZCB7XHJcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XHJcbiAgICBwYWRkaW5nOiAuNTByZW07XHJcbn1cclxuXHJcbnRoZWFkIHRoIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgfVxyXG4gICAgJi5hY3RpdmUge1xyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnRhYi1pbm5lci1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IC43NXJlbTtcclxufVxyXG5cclxudGJvZHk+dHI6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgIGJhY2tncm91bmQ6ICNmOGY5ZmFcclxufVxyXG5cclxudGJvZHk+dHI6bnRoLWNoaWxkKG9kZCkge1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRlxyXG59XHJcblxyXG4udGFibGUtcGFnaW5hdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAwLjc1cmVtO1xyXG4gICAgcGFkZGluZy10b3A6IDFyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWZmM2Y2O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNwaW5uZXIge1xyXG4gICAgdG8ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idG4tc3Bpbm5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMjU1LCAwLjYpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxufVxyXG5cclxuLmJ0bi1zcGlubmVyOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogIzAwMDAwMDtcclxuICAgIGFuaW1hdGlvbjogc3Bpbm5lciAuOHMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcblxyXG4udGFibGUtZmlsdGVyLWFyZWEge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZDogI2VmZjNmNjtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG4uc3dhcC1pbWctY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmM2NmNjU7XHJcbiAgICBwYWRkaW5nOiAycHggNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgLy8gbWFyZ2luOiAwIDRweDtcclxuICAgIC5zd2FwLWltZyB7XHJcbiAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRvcDogLTFweDtcclxuICAgIH1cclxufVxyXG5cclxuLm1hdGVyaWFsLWljb25zIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcbiAgICBjb2xvcjogIzAwN2JmZjtcclxufVxyXG5cclxuLmhpc3RvcnktdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufSIsIi50cmFuc2FjdGlvbi1mb3JtLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDEwcHggMTJweDtcbn1cbi50cmFuc2FjdGlvbi1mb3JtLWNvbnRhaW5lciAudHJhY3Rpb24tZnJvbS1ib3gge1xuICBwYWRkaW5nOiAxNXB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RmZTJlNDtcbiAgdHJhbnNpdGlvbjogYWxsIDVzIGVhc2Utb3V0O1xufVxuLnRyYW5zYWN0aW9uLWZvcm0tY29udGFpbmVyIC50cmFjdGlvbi1mcm9tLWJveCAuaGVhZGluZyB7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLnRyYW5zYWN0aW9uLWZvcm0tY29udGFpbmVyIC50cmFjdGlvbi1mcm9tLWJveCAuaGVhZGluZyAudGl0bGUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4udHJhbnNhY3Rpb24tZm9ybS1jb250YWluZXIgLnRyYWN0aW9uLWZyb20tYm94IC5oZWFkaW5nIHNtYWxsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLnRyYW5zYWN0aW9uLWZvcm0tY29udGFpbmVyIC5jbG9zZS1idG4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTNweDtcbn1cblxuLnJpZ2h0LXRhYkJ0bi1yb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMHB4O1xuICB0b3A6IDdweDtcbn1cblxuLnRhYmxlLWJvcmRlcmVkIHRoZWFkIHRoLFxuLnRhYmxlLWJvcmRlcmVkIHRoZWFkIHRkIHtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xuICBwYWRkaW5nOiAwLjVyZW07XG59XG5cbnRoZWFkIHRoIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxudGhlYWQgdGggc3BhbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbnRoZWFkIHRoLmFjdGl2ZSBzcGFuIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLnRhYi1pbm5lci1jb250ZW50IHtcbiAgcGFkZGluZzogMC43NXJlbTtcbn1cblxudGJvZHkgPiB0cjpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xufVxuXG50Ym9keSA+IHRyOm50aC1jaGlsZChvZGQpIHtcbiAgYmFja2dyb3VuZDogI0ZGRjtcbn1cblxuLnRhYmxlLXBhZ2luYXRpb24ge1xuICBwYWRkaW5nOiAwLjc1cmVtO1xuICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgYmFja2dyb3VuZDogI2VmZjNmNjtcbn1cblxuQGtleWZyYW1lcyBzcGlubmVyIHtcbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbi5idG4tc3Bpbm5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMjU1LCAwLjYpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbn1cblxuLmJ0bi1zcGlubmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmO1xuICBib3JkZXItdG9wLWNvbG9yOiAjMDAwMDAwO1xuICBhbmltYXRpb246IHNwaW5uZXIgMC44cyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbi50YWJsZS1maWx0ZXItYXJlYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogI2VmZjNmNjtcbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcbiAgYm9yZGVyLWJvdHRvbTogMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cblxuLnN3YXAtaW1nLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6ICNmM2NmNjU7XG4gIHBhZGRpbmc6IDJweCA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5zd2FwLWltZy1jb250YWluZXIgLnN3YXAtaW1nIHtcbiAgd2lkdGg6IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMXB4O1xufVxuXG4ubWF0ZXJpYWwtaWNvbnMge1xuICBmb250LXNpemU6IDI0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA1cHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBjb2xvcjogIzAwN2JmZjtcbn1cblxuLmhpc3RvcnktdGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToAccountComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-to-account',
          templateUrl: './to-account.component.html',
          styleUrls: ['./to-account.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_services_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"]
        }, {
          type: _shared_services_header_service__WEBPACK_IMPORTED_MODULE_3__["HeaderService"]
        }, {
          type: _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]
        }];
      }, {
        fundTransactionForm: [{
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
  "./src/app/pages/client-core/fund-management/fund-management-core/fund-deposit/to-wallet/to-wallet.component.ts":
  /*!**********************************************************************************************************************!*\
    !*** ./src/app/pages/client-core/fund-management/fund-management-core/fund-deposit/to-wallet/to-wallet.component.ts ***!
    \**********************************************************************************************************************/

  /*! exports provided: ToWalletComponent */

  /***/
  function srcAppPagesClientCoreFundManagementFundManagementCoreFundDepositToWalletToWalletComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToWalletComponent", function () {
      return ToWalletComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_models_deposit_wallet_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../../../shared/models/deposit-wallet.modal */
    "./src/app/shared/models/deposit-wallet.modal.ts");
    /* harmony import */


    var _shared_services_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../../shared/services/global.service */
    "./src/app/shared/services/global.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../../../../../shared/services/notification.service */
    "./src/app/shared/services/notification.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-bootstrap/alert */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/alert/fesm2015/ngx-bootstrap-alert.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = ["autoShownModal"];

    function ToWalletComponent_div_0_alert_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "alert", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " you do not have sufficient balance for this transaction ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ToWalletComponent_div_0_alert_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "alert", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " KYC is required to deposit amount in Wallet! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ToWalletComponent_div_0_alert_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "alert", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r333 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r333.withDrawSuccess, " ");
      }
    }

    var _c1 = function _c1() {
      return {
        show: true
      };
    };

    function ToWalletComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r337 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9, 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onHidden", function ToWalletComponent_div_0_Template_div_onHidden_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r337);

          var ctx_r336 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r336.onHidden();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Deposit To wallet ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "small", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Already Made a Payment, Please Attach the Payment Info & Receipt");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToWalletComponent_div_0_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r337);

          var ctx_r338 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r338.hideModal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ToWalletComponent_div_0_alert_13_Template, 3, 0, "alert", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ToWalletComponent_div_0_alert_14_Template, 3, 0, "alert", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ToWalletComponent_div_0_alert_15_Template, 3, 1, "alert", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "form", null, 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Amount");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function ToWalletComponent_div_0_Template_input_keypress_21_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r337);

          var ctx_r339 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r339.numberOnly($event);
        })("ngModelChange", function ToWalletComponent_div_0_Template_input_ngModelChange_21_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r337);

          var ctx_r340 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r340.deposit.uAmount = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Upload Receipt");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 25, 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ToWalletComponent_div_0_Template_input_change_25_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r337);

          var _r335 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);

          var ctx_r341 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r341.encodeImageFileAsURL(_r335);
        })("ngModelChange", function ToWalletComponent_div_0_Template_input_ngModelChange_25_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r337);

          var ctx_r342 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r342.deposit.uReceipt_Snap = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Comment");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "textarea", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ToWalletComponent_div_0_Template_textarea_ngModelChange_30_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r337);

          var ctx_r343 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r343.deposit.uComment = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToWalletComponent_div_0_Template_button_click_32_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r337);

          var ctx_r344 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r344.makeDeposit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Submit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r334 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);

        var ctx_r328 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r328.balanceError);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r328.kycSettingError);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r328.withDrawSuccessMsg);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r328.deposit.uAmount);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r328.deposit.uReceipt_Snap);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r328.deposit.uComment);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r334.invalid);
      }
    }

    function ToWalletComponent_tr_17_img_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 38);
      }
    }

    function ToWalletComponent_tr_17_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var payment_r345 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](payment_r345.PaySource_Name);
      }
    }

    function ToWalletComponent_tr_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r350 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ToWalletComponent_tr_17_img_2_Template, 1, 0, "img", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ToWalletComponent_tr_17_span_3_Template, 2, 1, "span", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "No Commission");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Instant");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToWalletComponent_tr_17_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r350);

          var payment_r345 = ctx.$implicit;

          var ctx_r349 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r349.showModal(payment_r345.PaySource_Name, payment_r345.uPaySource);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Deposit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Ledger");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var payment_r345 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", payment_r345.PaySource_Name === "NETELLER");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", payment_r345.PaySource_Name !== "NETELLER");
      }
    }

    var ToWalletComponent =
    /*#__PURE__*/
    function () {
      function ToWalletComponent(global, http, notificationService) {
        _classCallCheck(this, ToWalletComponent);

        this.global = global;
        this.http = http;
        this.notificationService = notificationService; // sender

        this.deposit = new _shared_models_deposit_wallet_modal__WEBPACK_IMPORTED_MODULE_1__["DepositWalletModalData"]();
        this.paymentMethodAll = [];
        this.balanceError = false;
        this.kycSettingError = false;
        this.kycStatusError = false;
        this.withDrawSuccess = '';
        this.withDrawSuccessMsg = false;
        this.isModalShown = false;
        this.kycStatus = JSON.parse(localStorage.getItem('LoggedUser'));
        this.deposit.sDealerID = localStorage.getItem('LoggedDealerCode');
        this.deposit.sWalletId = localStorage.getItem('LoggedDealerwalletID');
      }

      _createClass(ToWalletComponent, [{
        key: "showModal",
        value: function showModal(paySourceName, uPaySource) {
          this.isModalShown = true;
        }
      }, {
        key: "hideModal",
        value: function hideModal() {
          this.autoShownModal.hide();
        } // makeManualDeposit GET_PAYMENT_GATEWAY_MANUAL_ALL

      }, {
        key: "onHidden",
        value: function onHidden() {
          this.isModalShown = false;
        }
      }, {
        key: "getPaymentGatewayManual",
        value: function getPaymentGatewayManual() {
          var _this9 = this;

          var data = {
            DealerId: this.deposit.sDealerID
          };
          this.global.getManulGateway(data).subscribe(function (res) {
            _this9.paymentMethodAll = res;
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "encodeImageFileAsURL",
        value: function encodeImageFileAsURL(element) {
          var _this10 = this;

          console.log(element); // tslint:disable-next-line: no-var-keyword

          var file = element.files[0]; // tslint:disable-next-line: no-var-keyword

          var reader = new FileReader();
          reader.readAsDataURL(file);

          reader.onload = function () {
            console.log('RESULT', reader.result);
            var data = {
              App: 'uploadReceit',
              oData: reader.result
            }; // tslint:disable-next-line: max-line-length

            _this10.http.post('http://client.traderscabinet.com/tr_test/assets/PHP/alfa/v1/common/UploadDipositPaymentReceipt', data).subscribe(function (res) {
              _this10.deposit.uReceipt_Snap = res.resp.url;
              console.log(_this10.deposit.uReceipt_Snap);
            });
          };
        }
      }, {
        key: "makeDeposit",
        value: function makeDeposit() {
          var _this11 = this;

          var walletParans = {
            sWalletId: this.global.localDealerwallet
          };

          if (this.deposit.uAmount === 0) {
            this.notificationService.showError('Please enter a valid amount', 'Error');
            return false;
          } // this.global.getWalletInfo(walletParans).subscribe((resp: any) => {
          //   if (resp.uBalance > this.deposit.uAmount) {


          var kycSettingParams = {
            Dealer: this.global.localDealerCode
          };
          this.global.getKycset(kycSettingParams).subscribe(function (kycset) {
            // tslint:disable-next-line: triple-equals
            if (kycset == 2 && _this11.kycStatus.sProfile.uKYCStatus !== 2) {
              // this.balanceError = false;
              // this.kycSettingError = true;
              _this11.notificationService.showError('KYC is required to deposit amount in Wallet!', 'Error'); // setTimeout(() => {
              //   this.kycSettingError = false;
              // }, 10000);

            } else {
              _this11.global.makeManualDeposit(_this11.deposit).subscribe(function (res) {
                console.log(res);
                _this11.withDrawSuccess = "".concat(res.MSG_USER, " with Reference Id: ").concat(res.Reference); // this.withDrawSuccessMsg = true;
                // tslint:disable-next-line: max-line-length

                _this11.notificationService.showSuccess("Your manual request has been generated successfully with Reference Id: ".concat(res.Reference, ". Please wait for admin approval"), 'Success'); // setTimeout(() => {
                //   this.withDrawSuccessMsg = false;
                // }, 10000);


                setTimeout(function () {
                  _this11.hideModal();
                }, 10000);
              }, function (err) {
                console.log(err); // this.kycSettingError = false;
                // this.balanceError = true;
                // setTimeout(() => {
                //   this.balanceError = false;
                // }, 10000);
                // this.notificationService.showError('you do not have sufficient balance for this transaction', 'Error');
              });
            }
          }); // } else {
          //   // this.kycSettingError = false;
          //   // this.balanceError = true;
          //   this.notificationService.showError('you do not have sufficient balance for this transaction', 'Error');
          //   // setTimeout(() => {
          //   //   this.balanceError = false;
          //   // }, 10000);
          // }
          // });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getPaymentGatewayManual();
        }
      }, {
        key: "numberOnly",
        value: function numberOnly(event) {
          var charCode = event.which ? event.which : event.keyCode;

          if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
          }

          return true;
        }
      }]);

      return ToWalletComponent;
    }();

    ToWalletComponent.ɵfac = function ToWalletComponent_Factory(t) {
      return new (t || ToWalletComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]));
    };

    ToWalletComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ToWalletComponent,
      selectors: [["app-to-wallet"]],
      viewQuery: function ToWalletComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.autoShownModal = _t.first);
        }
      },
      decls: 18,
      vars: 2,
      consts: [["bsModal", "", "class", "modal fade", "tabindex", "-1", "role", "dialog", "aria-labelledby", "dialog-auto-name", 3, "config", "onHidden", 4, "ngIf"], [1, "tab-inner-content"], [1, "table-container", "table-responsive", "mb-3"], [1, "table", "table-hover", "main-txt-color", "mb-0", "border", "border-0"], [1, "table-header-bg", "table-header-color"], [1, "font-weight-500", "bd-color", "text-capitalize", "align-middle"], [1, "font-weight-500", "bd-color", "text-capitalize", "align-middle", "text-center"], [1, "secondary-txt-color"], [4, "ngFor", "ngForOf"], ["bsModal", "", "tabindex", "-1", "role", "dialog", "aria-labelledby", "dialog-auto-name", 1, "modal", "fade", 3, "config", "onHidden"], ["autoShownModal", "bs-modal"], [1, "modal-dialog", "modal-sm"], [1, "modal-content"], [1, "modal-header"], ["id", "dialog-auto-name", 1, "modal-title", "pull-left"], [1, "text-size-13"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["type", "danger", 4, "ngIf"], ["type", "success", 4, "ngIf"], ["depositWallet", "ngForm"], [1, "form-group"], ["for", "pwd"], ["min", "1", "type", "text", "id", "pwd", "placeholder", "Enter Amount", "name", "uAmount", "required", "", 1, "form-control", 3, "ngModel", "keypress", "ngModelChange"], ["type", "file", "id", "pwd", "placeholder", "Enter password", "name", "uReceipt_Snap", "required", "", 1, "form-control", 2, "padding", "4px", 3, "ngModel", "change", "ngModelChange"], ["file", ""], ["name", "uComment", "required", "", 1, "form-control", 2, "height", "100px", "width", "100%", "resize", "vertical", 3, "ngModel", "ngModelChange"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", "ml-1", 3, "disabled", "click"], ["type", "danger"], ["type", "success"], [1, "gateway_img"], ["src", "assets//images/payment_gateway/neteller.png", "alt", "", 4, "ngIf"], [4, "ngIf"], [1, "text-center"], [1, "btn", "btn-primary", "btn-sm", "ml-1", "px-3", 3, "click"], ["routerLink", "/home/money/ledger-overview", 1, "btn", "btn-primary", "btn-sm", "ml-1", "px-3"], ["src", "assets//images/payment_gateway/neteller.png", "alt", ""]],
      template: function ToWalletComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ToWalletComponent_div_0_Template, 34, 9, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Transfer Method");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Fee/Commission");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Processing Time");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Deposit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Ledger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tbody", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ToWalletComponent_tr_17_Template, 14, 2, "tr", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isModalShown);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.paymentMethodAll);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["ModalDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_8__["AlertComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLink"]],
      styles: [".gateway_img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n}\n\n.transaction-form-container[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n}\n\n.transaction-form-container[_ngcontent-%COMP%]   .traction-from-box[_ngcontent-%COMP%] {\n  padding: 15px 15px;\n  border-radius: 4px;\n  border: 1px solid #dfe2e4;\n  -webkit-transition: all 5s ease-out;\n  transition: all 5s ease-out;\n}\n\n.transaction-form-container[_ngcontent-%COMP%]   .traction-from-box[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  line-height: 20px;\n  margin-bottom: 15px;\n}\n\n.transaction-form-container[_ngcontent-%COMP%]   .traction-from-box[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 19px;\n  font-weight: 300;\n}\n\n.transaction-form-container[_ngcontent-%COMP%]   .traction-from-box[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.transaction-form-container[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  position: relative;\n  top: -3px;\n}\n\n.right-tabBtn-row[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 20px;\n  top: 7px;\n}\n\n.table-bordered[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-bordered[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom-width: 1px;\n  padding: 0.5rem;\n}\n\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-right: 15px;\n  margin-left: 15px;\n}\n\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n\nthead[_ngcontent-%COMP%]   th.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n\n.tab-inner-content[_ngcontent-%COMP%] {\n  padding: 0 5px;\n}\n\ntbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(even) {\n  background: #f8f9fa;\n}\n\ntbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(odd) {\n  background: #eff3f6;\n}\n\n.table-pagination[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  padding-top: 1rem;\n  background: #eff3f6;\n}\n\n@-webkit-keyframes spinner {\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes spinner {\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n.btn-spinner[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 255, 0.6);\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n\n.btn-spinner[_ngcontent-%COMP%]:before {\n  content: \"\";\n  box-sizing: border-box;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 20px;\n  height: 20px;\n  margin-top: -10px;\n  margin-left: -10px;\n  border-radius: 50%;\n  border: 2px solid #ffffff;\n  border-top-color: #000000;\n  -webkit-animation: spinner 0.8s linear infinite;\n          animation: spinner 0.8s linear infinite;\n}\n\n.table-filter-area[_ngcontent-%COMP%] {\n  position: relative;\n  background: #eff3f6;\n  padding: 15px;\n  border: 1px solid #dee2e6;\n  border-bottom: 0px;\n  border-radius: 4px 4px 0 0;\n  padding-bottom: 0px;\n}\n\n.swap-img-container[_ngcontent-%COMP%] {\n  background: #f3cf65;\n  padding: 2px 6px;\n  border-radius: 50%;\n}\n\n.swap-img-container[_ngcontent-%COMP%]   .swap-img[_ngcontent-%COMP%] {\n  width: 20px;\n  position: relative;\n  top: -1px;\n}\n\n.material-icons[_ngcontent-%COMP%] {\n  font-size: 24px;\n  position: relative;\n  top: 5px;\n  margin-right: 2px;\n  color: #007bff;\n}\n\n.history-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  padding: 10px 0;\n  font-weight: 400;\n}\n\ntable[_ngcontent-%COMP%] {\n  border-collapse: separate;\n  border-spacing: 0 6px;\n}\n\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-bottom: 0px solid #dee2e6;\n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-top: 0px solid #dee2e6;\n}\n\n.ngx-pagination[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-bottom: 0;\n}\n\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.45em 0.8em;\n  font-size: 75%;\n  font-weight: 500;\n}\n\n.wallet_balance[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 39px;\n  right: 15px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row;\n}\n\n.wallet_balance[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  padding: 0 10px;\n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-top: 8px !important;\n  padding-bottom: 8px !important;\n  font-size: 13px;\n}\n\n.btn-sm-padd[_ngcontent-%COMP%] {\n  padding: 1px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2xpZW50LWNvcmUvZnVuZC1tYW5hZ2VtZW50L2Z1bmQtbWFuYWdlbWVudC1jb3JlL2Z1bmQtZGVwb3NpdC90by13YWxsZXQvRjpcXG5ld3RyYWRlclxcdHJhZGVyNC01L3NyY1xcYXBwXFxwYWdlc1xcY2xpZW50LWNvcmVcXGZ1bmQtbWFuYWdlbWVudFxcZnVuZC1tYW5hZ2VtZW50LWNvcmVcXGZ1bmQtZGVwb3NpdFxcdG8td2FsbGV0XFx0by13YWxsZXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NsaWVudC1jb3JlL2Z1bmQtbWFuYWdlbWVudC9mdW5kLW1hbmFnZW1lbnQtY29yZS9mdW5kLWRlcG9zaXQvdG8td2FsbGV0L3RvLXdhbGxldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLFlBQUE7QUNBUjs7QURJQTtFQUNJLGtCQUFBO0FDREo7O0FERUk7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQ0FBQTtFQUFBLDJCQUFBO0FDQVI7O0FEQ1E7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FDQ1o7O0FEQVk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNFaEI7O0FEQVk7RUFDSSxlQUFBO0FDRWhCOztBREVJO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0FDQVI7O0FESUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0FDREo7O0FESUE7O0VBRUksd0JBQUE7RUFDQSxlQUFBO0FDREo7O0FESUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0RKOztBREVJO0VBQ0ksa0JBQUE7QUNBUjs7QURHUTtFQUNJLG1CQUFBO0FDRFo7O0FETUE7RUFDSSxjQUFBO0FDSEo7O0FETUE7RUFDSSxtQkFBQTtBQ0hKOztBRE1BO0VBQ0ksbUJBQUE7QUNISjs7QURNQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0hKOztBRE1BO0VBQ0k7SUFDSSxpQ0FBQTtZQUFBLHlCQUFBO0VDSE47QUFDRjs7QURBQTtFQUNJO0lBQ0ksaUNBQUE7WUFBQSx5QkFBQTtFQ0hOO0FBQ0Y7O0FETUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtBQ0pKOztBRE9BO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLCtDQUFBO1VBQUEsdUNBQUE7QUNKSjs7QURPQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7QUNKSjs7QURPQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0pKOztBRE1JO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ0pSOztBRFFBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0xKOztBRFFBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0xKOztBRFdBO0VBQ0kseUJBQUE7RUFDQSxxQkFBQTtBQ1JKOztBRFdBO0VBQ0ksZ0NBQUE7QUNSSjs7QURXQTs7RUFFSSw2QkFBQTtBQ1JKOztBRFdBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FDUko7O0FEV0E7RUFDSSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDUko7O0FEV0E7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLGNBQUE7QUNSSjs7QURTSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNQUjs7QURXQTs7RUFFSSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQ1JKOztBRFdBO0VBQ0ksaUJBQUE7QUNSSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NsaWVudC1jb3JlL2Z1bmQtbWFuYWdlbWVudC9mdW5kLW1hbmFnZW1lbnQtY29yZS9mdW5kLWRlcG9zaXQvdG8td2FsbGV0L3RvLXdhbGxldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nYXRld2F5X2ltZyB7XHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgIH1cclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWZvcm0tY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMTJweDtcclxuICAgIC50cmFjdGlvbi1mcm9tLWJveCB7XHJcbiAgICAgICAgcGFkZGluZzogMTVweCAxNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGZlMmU0O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCA1cyBlYXNlLW91dDtcclxuICAgICAgICAuaGVhZGluZyB7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzbWFsbCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2xvc2UtYnRuIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdG9wOiAtM3B4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ucmlnaHQtdGFiQnRuLXJvdyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMjBweDtcclxuICAgIHRvcDogN3B4O1xyXG59XHJcblxyXG4udGFibGUtYm9yZGVyZWQgdGhlYWQgdGgsXHJcbi50YWJsZS1ib3JkZXJlZCB0aGVhZCB0ZCB7XHJcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XHJcbiAgICBwYWRkaW5nOiAuNTByZW07XHJcbn1cclxuXHJcbnRoZWFkIHRoIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgfVxyXG4gICAgJi5hY3RpdmUge1xyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnRhYi1pbm5lci1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDAgNXB4O1xyXG59XHJcblxyXG50Ym9keT50cjpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgYmFja2dyb3VuZDogI2Y4ZjlmYVxyXG59XHJcblxyXG50Ym9keT50cjpudGgtY2hpbGQob2RkKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWZmM2Y2XHJcbn1cclxuXHJcbi50YWJsZS1wYWdpbmF0aW9uIHtcclxuICAgIHBhZGRpbmc6IDAuNzVyZW07XHJcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcclxuICAgIGJhY2tncm91bmQ6ICNlZmYzZjY7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc3Bpbm5lciB7XHJcbiAgICB0byB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIH1cclxufVxyXG5cclxuLmJ0bi1zcGlubmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAyNTUsIDAuNik7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG59XHJcblxyXG4uYnRuLXNwaW5uZXI6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmZmZmY7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjMDAwMDAwO1xyXG4gICAgYW5pbWF0aW9uOiBzcGlubmVyIC44cyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbi50YWJsZS1maWx0ZXItYXJlYSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWZmM2Y2O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgICBib3JkZXItYm90dG9tOiAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbi5zd2FwLWltZy1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2YzY2Y2NTtcclxuICAgIHBhZGRpbmc6IDJweCA2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAvLyBtYXJnaW46IDAgNHB4O1xyXG4gICAgLnN3YXAtaW1nIHtcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdG9wOiAtMXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubWF0ZXJpYWwtaWNvbnMge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcclxuICAgIGNvbG9yOiAjMDA3YmZmO1xyXG59XHJcblxyXG4uaGlzdG9yeS10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4vLyAuZm9ybS1jb250cm9sIHtcclxuLy8gICAgIHBhZGRpbmc6IDAuMTc1cmVtIDAuMzVyZW07XHJcbi8vIH1cclxudGFibGUge1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAwIDZweDtcclxufVxyXG5cclxuLnRhYmxlIHRoZWFkIHRoIHtcclxuICAgIGJvcmRlci1ib3R0b206IDBweCBzb2xpZCAjZGVlMmU2O1xyXG59XHJcblxyXG4udGFibGUgdGgsXHJcbi50YWJsZSB0ZCB7XHJcbiAgICBib3JkZXItdG9wOiAwcHggc29saWQgI2RlZTJlNjtcclxufVxyXG5cclxuLm5neC1wYWdpbmF0aW9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLmJhZGdlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDAuNDVlbSAwLjhlbTtcclxuICAgIGZvbnQtc2l6ZTogNzUlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLndhbGxldF9iYWxhbmNlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMzlweDtcclxuICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiByb3c7XHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi50YWJsZSB0aCxcclxuLnRhYmxlIHRkIHtcclxuICAgIHBhZGRpbmctdG9wOiA4cHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4cHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuLmJ0bi1zbS1wYWRkIHtcclxuICAgIHBhZGRpbmc6IDFweCAxMHB4O1xyXG59IiwiLmdhdGV3YXlfaW1nIGltZyB7XG4gIHdpZHRoOiAxMDBweDtcbn1cblxuLnRyYW5zYWN0aW9uLWZvcm0tY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTBweCAxMnB4O1xufVxuLnRyYW5zYWN0aW9uLWZvcm0tY29udGFpbmVyIC50cmFjdGlvbi1mcm9tLWJveCB7XG4gIHBhZGRpbmc6IDE1cHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGZlMmU0O1xuICB0cmFuc2l0aW9uOiBhbGwgNXMgZWFzZS1vdXQ7XG59XG4udHJhbnNhY3Rpb24tZm9ybS1jb250YWluZXIgLnRyYWN0aW9uLWZyb20tYm94IC5oZWFkaW5nIHtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4udHJhbnNhY3Rpb24tZm9ybS1jb250YWluZXIgLnRyYWN0aW9uLWZyb20tYm94IC5oZWFkaW5nIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi50cmFuc2FjdGlvbi1mb3JtLWNvbnRhaW5lciAudHJhY3Rpb24tZnJvbS1ib3ggLmhlYWRpbmcgc21hbGwge1xuICBmb250LXNpemU6IDEycHg7XG59XG4udHJhbnNhY3Rpb24tZm9ybS1jb250YWluZXIgLmNsb3NlLWJ0biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtM3B4O1xufVxuXG4ucmlnaHQtdGFiQnRuLXJvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwcHg7XG4gIHRvcDogN3B4O1xufVxuXG4udGFibGUtYm9yZGVyZWQgdGhlYWQgdGgsXG4udGFibGUtYm9yZGVyZWQgdGhlYWQgdGQge1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbn1cblxudGhlYWQgdGgge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG50aGVhZCB0aCBzcGFuIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxudGhlYWQgdGguYWN0aXZlIHNwYW4ge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4udGFiLWlubmVyLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwIDVweDtcbn1cblxudGJvZHkgPiB0cjpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xufVxuXG50Ym9keSA+IHRyOm50aC1jaGlsZChvZGQpIHtcbiAgYmFja2dyb3VuZDogI2VmZjNmNjtcbn1cblxuLnRhYmxlLXBhZ2luYXRpb24ge1xuICBwYWRkaW5nOiAwLjc1cmVtO1xuICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgYmFja2dyb3VuZDogI2VmZjNmNjtcbn1cblxuQGtleWZyYW1lcyBzcGlubmVyIHtcbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbi5idG4tc3Bpbm5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMjU1LCAwLjYpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbn1cblxuLmJ0bi1zcGlubmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmO1xuICBib3JkZXItdG9wLWNvbG9yOiAjMDAwMDAwO1xuICBhbmltYXRpb246IHNwaW5uZXIgMC44cyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbi50YWJsZS1maWx0ZXItYXJlYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogI2VmZjNmNjtcbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcbiAgYm9yZGVyLWJvdHRvbTogMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cblxuLnN3YXAtaW1nLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6ICNmM2NmNjU7XG4gIHBhZGRpbmc6IDJweCA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5zd2FwLWltZy1jb250YWluZXIgLnN3YXAtaW1nIHtcbiAgd2lkdGg6IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMXB4O1xufVxuXG4ubWF0ZXJpYWwtaWNvbnMge1xuICBmb250LXNpemU6IDI0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA1cHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBjb2xvcjogIzAwN2JmZjtcbn1cblxuLmhpc3RvcnktdGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuICBib3JkZXItc3BhY2luZzogMCA2cHg7XG59XG5cbi50YWJsZSB0aGVhZCB0aCB7XG4gIGJvcmRlci1ib3R0b206IDBweCBzb2xpZCAjZGVlMmU2O1xufVxuXG4udGFibGUgdGgsXG4udGFibGUgdGQge1xuICBib3JkZXItdG9wOiAwcHggc29saWQgI2RlZTJlNjtcbn1cblxuLm5neC1wYWdpbmF0aW9uIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5iYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMC40NWVtIDAuOGVtO1xuICBmb250LXNpemU6IDc1JTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLndhbGxldF9iYWxhbmNlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDM5cHg7XG4gIHJpZ2h0OiAxNXB4O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3c7XG59XG4ud2FsbGV0X2JhbGFuY2UgcCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuXG4udGFibGUgdGgsXG4udGFibGUgdGQge1xuICBwYWRkaW5nLXRvcDogOHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiA4cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uYnRuLXNtLXBhZGQge1xuICBwYWRkaW5nOiAxcHggMTBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToWalletComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-to-wallet',
          templateUrl: './to-wallet.component.html',
          styleUrls: ['./to-wallet.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_services_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]
        }];
      }, {
        autoShownModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['autoShownModal', {
            static: false
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/client-core/fund-management/fund-management-core/fund-management-core.component.ts":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/pages/client-core/fund-management/fund-management-core/fund-management-core.component.ts ***!
    \**********************************************************************************************************/

  /*! exports provided: FundManagementCoreComponent */

  /***/
  function srcAppPagesClientCoreFundManagementFundManagementCoreFundManagementCoreComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FundManagementCoreComponent", function () {
      return FundManagementCoreComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var FundManagementCoreComponent =
    /*#__PURE__*/
    function () {
      function FundManagementCoreComponent() {
        _classCallCheck(this, FundManagementCoreComponent);
      }

      _createClass(FundManagementCoreComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FundManagementCoreComponent;
    }();

    FundManagementCoreComponent.ɵfac = function FundManagementCoreComponent_Factory(t) {
      return new (t || FundManagementCoreComponent)();
    };

    FundManagementCoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FundManagementCoreComponent,
      selectors: [["app-fund-management-core"]],
      decls: 1,
      vars: 0,
      template: function FundManagementCoreComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NsaWVudC1jb3JlL2Z1bmQtbWFuYWdlbWVudC9mdW5kLW1hbmFnZW1lbnQtY29yZS9mdW5kLW1hbmFnZW1lbnQtY29yZS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FundManagementCoreComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-fund-management-core',
          templateUrl: './fund-management-core.component.html',
          styleUrls: ['./fund-management-core.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/client-core/fund-management/fund-management-core/fund-transfer/account-to-account/account-to-account.component.ts":
  /*!*****************************************************************************************************************************************!*\
    !*** ./src/app/pages/client-core/fund-management/fund-management-core/fund-transfer/account-to-account/account-to-account.component.ts ***!
    \*****************************************************************************************************************************************/

  /*! exports provided: AccountToAccountComponent */

  /***/
  function srcAppPagesClientCoreFundManagementFundManagementCoreFundTransferAccountToAccountAccountToAccountComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountToAccountComponent", function () {
      return AccountToAccountComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _shared_services_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../../../../shared/services/global.service */
    "./src/app/shared/services/global.service.ts");
    /* harmony import */


    var _shared_services_header_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../../../../../shared/services/header.service */
    "./src/app/shared/services/header.service.ts");
    /* harmony import */


    var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-order-pipe */
    "./node_modules/ngx-order-pipe/__ivy_ngcc__/fesm2015/ngx-order-pipe.js");
    /* harmony import */


    var _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../../../../../shared/services/notification.service */
    "./src/app/shared/services/notification.service.ts");
    /* harmony import */


    var angular_feather__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angular-feather */
    "./node_modules/angular-feather/__ivy_ngcc__/fesm2015/angular-feather.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var _c0 = ["formData"];

    function AccountToAccountComponent_div_4_div_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r255 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Success -: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i-feather", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountToAccountComponent_div_4_div_9_Template_i_feather_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r255);

          var ctx_r254 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r254.onCloseMsqBlock();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r239 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r239.messageToDisplay, " ");
      }
    }

    function AccountToAccountComponent_div_4_div_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r257 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i-feather", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountToAccountComponent_div_4_div_12_Template_i_feather_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r257);

          var ctx_r256 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r256.onCloseMsqBlock();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r240 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r240.messageToDisplay, " ");
      }
    }

    function AccountToAccountComponent_div_4_option_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var acc_r258 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", acc_r258.MT4Account);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](acc_r258.MT4Account);
      }
    }

    function AccountToAccountComponent_div_4_span_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select an Account Number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AccountToAccountComponent_div_4_option_44_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Other Account");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AccountToAccountComponent_div_4_option_45_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var acc_r259 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", acc_r259.MT4Account);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](acc_r259.MT4Account);
      }
    }

    function AccountToAccountComponent_div_4_span_48_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select an Account Number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AccountToAccountComponent_div_4_div_49_span_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please Enter a valid Account Number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AccountToAccountComponent_div_4_div_49_Template(rf, ctx) {
      if (rf & 1) {
        var _r263 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Other Account");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 65, 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function AccountToAccountComponent_div_4_div_49_Template_input_keypress_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r263);

          var ctx_r262 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r262.numberOnly($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AccountToAccountComponent_div_4_div_49_span_10_Template, 2, 0, "span", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r260 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r260.valid && _r260.touched);
      }
    }

    function AccountToAccountComponent_div_4_span_61_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please Enter a valid Number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AccountToAccountComponent_div_4_span_72_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter a comment");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AccountToAccountComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r265 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Transfer in Account to Account");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "All fields are required to transfer from Account to Account");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AccountToAccountComponent_div_4_div_9_Template, 6, 1, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AccountToAccountComponent_div_4_div_12_Template, 5, 1, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 31, 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AccountToAccountComponent_div_4_Template_form_ngSubmit_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r265);

          var ctx_r264 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r264.onSubmit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "From Account");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " * ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "select", 36, 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AccountToAccountComponent_div_4_Template_select_change_24_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r265);

          var _r242 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);

          var ctx_r266 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r266.onSrcAccountBalchange(_r242.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Select Account Number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, AccountToAccountComponent_div_4_option_28_Template, 2, 2, "option", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, AccountToAccountComponent_div_4_span_31_Template, 2, 0, "span", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "To Account ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " * ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "select", 44, 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AccountToAccountComponent_div_4_Template_select_change_40_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r265);

          var _r245 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41);

          var ctx_r267 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r267.onDstAccountBalchange(_r245.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "option", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Select Account Number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, AccountToAccountComponent_div_4_option_44_Template, 2, 0, "option", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, AccountToAccountComponent_div_4_option_45_Template, 2, 2, "option", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, AccountToAccountComponent_div_4_span_48_Template, 2, 0, "span", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, AccountToAccountComponent_div_4_div_49_Template, 11, 1, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Amount");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "input", 49, 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, AccountToAccountComponent_div_4_span_61_Template, 2, 0, "span", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "label", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Comment");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "input", 52, 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "i", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, AccountToAccountComponent_div_4_span_72_Template, 2, 0, "span", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "button", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Transfer Fund");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r241 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

        var _r242 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);

        var _r245 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41);

        var _r250 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](58);

        var _r252 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](69);

        var ctx_r238 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r238.successMsqBlock);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r238.ErrorMsqBlock);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" (Balance : $", ctx_r238.srcAccountBalance, ")");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r238.liveAccountData);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r242.valid && _r242.touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" (Balance : $", ctx_r238.dstAccountBalance, ")");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r238.transactionSettings.Acc_ITC_Others === 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r238.liveAccountData);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r245.valid && _r245.touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r245.value == 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r250.valid && _r250.touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r252.valid && _r252.touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r241.valid || ctx_r238.isLoading);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-spinner", ctx_r238.isLoading);
      }
    }

    var AccountToAccountComponent =
    /*#__PURE__*/
    function () {
      function AccountToAccountComponent(globalService, headerService, orderPipe, notificationService) {
        var _this12 = this;

        _classCallCheck(this, AccountToAccountComponent);

        this.globalService = globalService;
        this.headerService = headerService;
        this.orderPipe = orderPipe;
        this.notificationService = notificationService;
        this.isLoading = false;
        this.walletToWalletLedger = [];
        this.isVisibleFormArea = false;
        this.ErrorMsqBlock = false;
        this.successMsqBlock = false;
        this.liveAccountData = [];
        this.srcAccountBalance = 0.00;
        this.dstAccountBalance = 0.00;
        this.headerSubscription = this.headerService.castLoggedUserDetail.subscribe(function (resData) {
          return _this12.LoggedParams = resData;
        });
        this.walletId = this.LoggedParams.sProfile.sWalletId;
        this.dealerId = this.LoggedParams.sProfile.sDealerId;
        this.senderEmailId = this.LoggedParams.sProfile.uContactInfo.Email;
        this.getTransactionSettings();
      }

      _createClass(AccountToAccountComponent, [{
        key: "toggleFormArea",
        value: function toggleFormArea() {
          this.isVisibleFormArea = !this.isVisibleFormArea;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getProfileAccounts();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {} // Get All Transaction Settings

      }, {
        key: "getTransactionSettings",
        value: function getTransactionSettings() {
          var _this13 = this;

          var params = {
            DealerId: this.LoggedParams.sProfile.sDealerId
          };
          this.transactionSubscription = this.globalService.getSettings(params).subscribe(function (data) {
            _this13.transactionSettings = data[0];
            _this13.a2atransactionSettings = data[0].Acc_Auto_ITC;
          });
        }
      }, {
        key: "getProfileAccounts",
        value: function getProfileAccounts() {
          var _this14 = this;

          var params = {
            ProfileId: this.LoggedParams.sProfile.sMasterId,
            LoginId: this.LoggedParams.sProfile.sMasterId
          };
          this.accountSubscription = this.globalService.GET_PROFILE_ACCOUNTS(params).subscribe(function (data) {
            _this14.liveAccountData = data.lstAccount.map(function (acc) {
              if (acc) {
                return Object.assign(acc.sUserInfo, acc.sAccountPlan);
              }
            });
            console.log(_this14.liveAccountData);
          });
        }
      }, {
        key: "autoCloseMsqBlock",
        value: function autoCloseMsqBlock() {
          var _this15 = this;

          setTimeout(function () {
            _this15.successMsqBlock = false;
            _this15.ErrorMsqBlock = false;
            _this15.messageToDisplay = '';
          }, 10000);
        }
      }, {
        key: "onCloseMsqBlock",
        value: function onCloseMsqBlock() {
          this.successMsqBlock = false;
          this.ErrorMsqBlock = false;
          this.messageToDisplay = '';
        }
      }, {
        key: "onSuccessMsqDisplay",
        value: function onSuccessMsqDisplay(msq) {
          this.messageToDisplay = '';
          this.ErrorMsqBlock = false;
          this.successMsqBlock = true;
          this.messageToDisplay = msq;
        }
      }, {
        key: "onErrorMsqDisplay",
        value: function onErrorMsqDisplay(msq) {
          this.messageToDisplay = '';
          this.successMsqBlock = false;
          this.ErrorMsqBlock = true;
          this.messageToDisplay = msq;
        } // Check Sender Account Balance on select Account Number

      }, {
        key: "onSrcAccountBalchange",
        value: function onSrcAccountBalchange(srcAcc) {
          var srcAccount = this.liveAccountData.filter(function (acc) {
            if (acc.MT4Account === srcAcc) {
              return acc;
            }
          });
          this.srcAccountBalance = srcAccount[0].Balance;
        } // Check Receiver Account Balance on select Account Number

      }, {
        key: "onDstAccountBalchange",
        value: function onDstAccountBalchange(dstAcc) {
          if (dstAcc == 1) {
            return false;
          } else {
            var dstAccount = this.liveAccountData.filter(function (acc) {
              if (acc.MT4Account === dstAcc) {
                return acc;
              }
            });
            this.dstAccountBalance = dstAccount[0].Balance;
          }
        } // Check Fund Balance on MT4Account before make a Transaction

      }, {
        key: "isBalanceAvaliable",
        value: function isBalanceAvaliable(formData) {
          var _this16 = this;

          // tslint:disable-next-line: no-shadowed-variable
          return new Promise(function (resolve, reject) {
            console.log(formData.srcAccount);
            _this16.selectedAccount = _this16.liveAccountData.filter(function (acc) {
              if (acc.MT4Account === formData.srcAccount) {
                return acc;
              }
            });
            console.log(_this16.selectedAccount);

            if (formData.amount <= _this16.selectedAccount[0].Balance) {
              resolve(true);
            } else {
              // tslint:disable-next-line: max-line-length
              // this.onErrorMsqDisplay(`Please maintain Sufficient Balance in your MT4Account ${formData.account} Account before make a Transaction`);
              _this16.notificationService.showError('You have not sufficient Balance in your Account', 'Error');

              resolve(false);
              _this16.isLoading = false; // this.autoCloseMsqBlock();
            }
          });
        } // Check KYC is Required or not

      }, {
        key: "isKYCRequired",
        value: function isKYCRequired() {
          var _this17 = this;

          // tslint:disable-next-line: no-shadowed-variable
          return new Promise(function (resolve, reject) {
            var params = {
              Dealer: _this17.LoggedParams.sProfile.sDealerId
            }; // Call getKycset function to check KYC setting

            _this17.globalService.getKycset(params).subscribe(function (data) {
              // console.warn('KYC Settings = ' + data);
              if (data && data === 3) {
                // console.warn('KYC Required');
                resolve(true);
              } else if (data && data === 1 || data === 2) {
                // console.warn('KYC Not Required');
                resolve(false);
              } else if (data || data === 0) {
                // console.warn('KYC Not Required');
                resolve(false);
              } else {
                reject('KYC Settings Not Found .....');
              }
            });
          });
        } // IS KYC Approved If KYC required

      }, {
        key: "isKYCApproved",
        value: function isKYCApproved() {
          var _this18 = this;

          var params = {
            KYCStatus: this.LoggedParams.sProfile.uKYCStatus
          }; // tslint:disable-next-line: no-shadowed-variable

          return new Promise(function (resolve, reject) {
            if (params.KYCStatus) {
              if (params.KYCStatus !== 2) {
                // console.warn('Your KYC Is Not Approved');
                _this18.onErrorMsqDisplay('KYC is required to make Transaction In Account to Account!'); // Swal.fire('Oops...', 'KYC is required to make Transaction In Wallet to Wallet!', 'error');


                resolve(false);

                _this18.displayKYCPopup();

                _this18.isLoading = false;

                _this18.autoCloseMsqBlock();
              } else {
                // console.warn('Your KYC IS approved');
                resolve(true);
              }
            } else {
              reject('KYC Status Not Found ....');
            }
          });
        }
      }, {
        key: "displayKYCPopup",
        value: function displayKYCPopup() {
          var _this19 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: 'Please update KYC First!',
            text: 'Your KYC is not Verified. You will not be able to make Transaction without KYC Approved!',
            icon: 'error',
            showCancelButton: false,
            confirmButtonText: 'Show me the way',
            cancelButtonText: 'No, keep it',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33'
          }).then(function (result) {
            if (result.value) {
              _this19.globalService.redirect('/home/documents/kyc-upload');
            }
          });
        }
      }, {
        key: "makeInternalTrans",
        value: function makeInternalTrans(formData) {
          var _this20 = this;

          var params = {
            uCommission: 0,
            uAmount: formData.amount,
            uComment: formData.comment,
            uDealerId: this.LoggedParams.sProfile.sDealerId,
            uSource_Account: formData.srcAccount,
            uDest_Account: formData.dstAccount,
            uManagerIndex: this.liveAccountData[0].uManager
          };
          this.globalService.InternalTransfer(params).subscribe(function (data) {
            if (data.Status === true) {
              // this.onSuccessMsqDisplay(data.MSG_USER);
              if (_this20.a2atransactionSettings === 0) {
                _this20.notificationService.showInfo('Your Request has been generated, Now Request is pending for Approval', 'Information');
              } else {
                // tslint:disable-next-line: max-line-length
                _this20.notificationService.showSuccess("You have Successfully transferred ".concat(formData.amount, " dollor from ").concat(formData.srcAccount, " Account to ").concat(formData.dstAccount, " Account"), 'Success');
              }

              _this20.getProfileAccounts(); // this.onSrcAccountBalchange(formData.srcAccount);
              // this.onDstAccountBalchange(formData.dstAccount);


              _this20.srcAccountBalance = 0.00;
              _this20.dstAccountBalance = 0.00;
              setTimeout(function () {
                _this20.fundTransactionForm.reset();

                _this20.isLoading = false;
              }, 1000); // this.fundTransactionForm.reset();
              // this.fundTransactionForm.form.value.amount = '';
              // this.fundTransactionForm.value.comment = ' ';

              _this20.autoCloseMsqBlock();
            } else {
              //  this.onErrorMsqDisplay(data.MSG_USER);
              _this20.notificationService.showError('Failed To Make Transaction', 'Error');

              _this20.isLoading = false;

              _this20.autoCloseMsqBlock();
            }
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this21 = this;

          this.isLoading = true;
          this.onCloseMsqBlock(); // Get Form Field Data on Submit

          if (this.fundTransactionForm.value.toAccount == 1) {
            this.dstAccountValue = this.fundTransactionForm.value.otherAccount;
          } else {
            this.dstAccountValue = this.fundTransactionForm.value.toAccount;
          }

          var formData = {
            srcAccount: this.fundTransactionForm.value.fromAccount,
            dstAccount: this.dstAccountValue,
            amount: this.fundTransactionForm.value.amount,
            comment: this.fundTransactionForm.value.comment
          };

          if (0 >= this.fundTransactionForm.value.amount) {
            // this.onErrorMsqDisplay(`${this.fundTransactionForm.value.amount} is not a Valid Number in Amount Field`);
            this.notificationService.showError("".concat(formData.amount, " is not a Valid Number in Amount Field"), 'Error');
            this.isLoading = false;
            this.autoCloseMsqBlock();
            return;
          }

          if (formData.srcAccount === formData.dstAccount) {
            // this.onErrorMsqDisplay('Sender and receiver account cound not be same.!');
            this.notificationService.showError('Sender and receiver account cound not be same.!', 'Error');
            this.isLoading = false;
            this.autoCloseMsqBlock();
            return;
          }

          this.isBalanceAvaliable(formData).then(function (resData) {
            if (resData) {
              _this21.isKYCRequired().then(function (KYCResponse) {
                if (KYCResponse) {
                  _this21.isKYCApproved().then(function (approvalReponse) {
                    if (approvalReponse) {
                      console.log('w2w function excuted'); // this.depositMt4Account(formData);

                      _this21.makeInternalTrans(formData);
                    }
                  }).catch(function (err) {
                    console.error(err); // this.onErrorMsqDisplay(err);

                    _this21.notificationService.showError('Failed To Make Transaction', 'Error');
                  });
                } else {
                  _this21.makeInternalTrans(formData); // console.log('w2w function excuted');

                }
              }).catch(function (err) {
                console.error(err); // this.onErrorMsqDisplay(err);

                _this21.notificationService.showError('Failed To Make Transaction', 'Error');
              });
            }
          }).catch(function (err) {
            console.error(err); // this.onErrorMsqDisplay(err);

            _this21.notificationService.showError('Failed To Make Transaction', 'Error');
          });
        }
      }, {
        key: "numberOnly",
        value: function numberOnly(event) {
          var charCode = event.which ? event.which : event.keyCode;

          if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
          }

          return true;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.accountSubscription.unsubscribe();
          this.transactionSubscription.unsubscribe();
          this.headerSubscription.unsubscribe();
        }
      }]);

      return AccountToAccountComponent;
    }();

    AccountToAccountComponent.ɵfac = function AccountToAccountComponent_Factory(t) {
      return new (t || AccountToAccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_header_service__WEBPACK_IMPORTED_MODULE_3__["HeaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_order_pipe__WEBPACK_IMPORTED_MODULE_4__["OrderPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]));
    };

    AccountToAccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AccountToAccountComponent,
      selectors: [["app-account-to-account"]],
      viewQuery: function AccountToAccountComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fundTransactionForm = _t.first);
        }
      },
      decls: 57,
      vars: 2,
      consts: [[1, "right-tabBtn-row", "d-none", "d-sm-block", "d-md-block", "d-lg-block"], [1, "btn", "btn-warning", "btn-sm", "font-weight-400", "text-size-13", 3, "click"], ["name", "dollar-sign", 1, "icon-size-18"], ["class", "transaction-form-container", 4, "ngIf"], [1, "tab-inner-content", "px-2"], [1, "history-title"], [1, "table-filter-area"], [1, "row", "no-gutters"], [1, "col-md-4", "form-inline", "d-none", "d-md-block"], [1, "form-group", "mb-2"], ["for", "entries", 1, "main-txt-color", "mr-1"], ["id", "entries", 1, "form-control", "main-txt-color", "bd-color", "shadow-none"], ["for", "entries", 1, "main-txt-color", "ml-1"], [1, "col-md-3", "offset-md-5"], [1, "form-group"], ["type", "text", "id", "searchText", "placeholder", "Enter Keyword to search", 1, "form-control", "main-txt-color", "bd-color", "shadow-none", 3, "ngModel", "ngModelChange"], [1, "table-container", "table-responsive", "table-responsive", "table-responsive-sm", "mb-3"], [1, "table", "table-hover", "main-txt-color", "mb-0", "border-0"], [1, "table-header-bg", "table-header-color"], [1, "font-weight-500", "bd-color", "text-capitalize", "align-middle"], [1, "font-weight-500", "bd-color", "text-capitalize", "align-middle", "text-center"], [1, "secondary-txt-color"], [1, "text-size-17", "font-weight-300", "text-center", "p-4", 2, "background", "#eff3f6"], [1, "transaction-form-container"], [1, "traction-from-box", "bg-b"], [1, "heading"], [1, "title"], [1, "row"], [1, "col-md-8"], ["class", "alert alert-success alert-dismissible fade show", "role", "alert", 4, "ngIf"], ["class", "alert alert-danger alert-dismissible fade show", "role", "alert", 4, "ngIf"], [1, "", 3, "ngSubmit"], ["formData", "ngForm"], [1, "col-md-4"], ["for", "fromAccount", 1, ""], [1, "asterick"], ["required", "", "ngModel", "", "name", "fromAccount", "id", "fromAccount", 1, "form-control", "main-txt-color", "bd-color", "shadow-none", 3, "change"], ["fromAccount", "ngModel"], ["value", "", "selected", "", 1, "text-size-13", 3, "disabled"], ["class", "text-size-13", "name", "accounts", 3, "ngValue", 4, "ngFor", "ngForOf"], [1, "form-icon", "text-size-12"], [1, "fas", "fa-envelope"], ["class", "help-block text-danger ", 4, "ngIf"], ["for", "toAccount", 1, ""], ["required", "", "ngModel", "", "name", "toAccount", "id", "toAccount", 1, "form-control", "main-txt-color", "bd-color", "shadow-none", 3, "change"], ["toAccount", "ngModel"], ["class", "text-size-13", "value", "1", 4, "ngIf"], ["class", "col-md-4", 4, "ngIf"], ["for", "amount", 1, "main-txt-color"], ["min", "1", "pattern", "^-?(0|[1-9]\\d*)?$", "required", "", "ngModel", "", "name", "amount", "type", "number", "id", "amount", "placeholder", "Enter Amount", 1, "form-control", "main-txt-color", "bd-color", "shadow-none"], ["amount", "ngModel"], ["for", "comment", 1, "main-txt-color"], ["required", "", "ngModel", "", "name", "comment", "type", "text", "id", "comment", "placeholder", "Enter comment", 1, "form-control", "main-txt-color", "bd-color", "shadow-none"], ["comment", "ngModel"], [1, "col-md-3"], [1, "position-relative", 2, "padding-top", "29px"], [1, "btn", "btn-primary", "btn-sm", "px-3", "position-relative", 3, "disabled"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show"], ["type", "button", "data-dismiss", "alert", 1, "close"], ["name", "x", 1, "close-btn", 3, "click"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show"], ["name", "accounts", 1, "text-size-13", 3, "ngValue"], [1, "help-block", "text-danger"], ["value", "1", 1, "text-size-13"], ["for", "otherAccount", 1, "main-txt-color"], ["pattern", "^-?(0|[1-9]\\d*)?$", "required", "", "ngModel", "", "name", "otherAccount", "type", "text", "id", "otherAccount", "placeholder", "Enter Account Number", 1, "form-control", "main-txt-color", "bd-color", "shadow-none", 3, "keypress"], ["otherAccount", "ngModel"]],
      template: function AccountToAccountComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountToAccountComponent_Template_button_click_1_listener() {
            return ctx.toggleFormArea();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i-feather", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Make a Transaction ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AccountToAccountComponent_div_4_Template, 78, 17, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Your Transaction History ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Show ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "select", 11);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "50");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Entries");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AccountToAccountComponent_Template_input_ngModelChange_31_listener($event) {
            return ctx.searchText = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "table", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "thead", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "S.No.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Sender Account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Recipient Account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "th", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Fee/Commission");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "th", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Processing Time");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "th", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "th", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Transfer Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "th", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Transfer Time");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "th", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "tbody", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "There is no account to account transfer from your Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isVisibleFormArea);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchText);
        }
      },
      directives: [angular_feather__WEBPACK_IMPORTED_MODULE_6__["ɵa"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["PatternValidator"]],
      styles: [".transaction-form-container[_ngcontent-%COMP%] {\n  padding: 10px 6px;\n}\n.transaction-form-container[_ngcontent-%COMP%]   .traction-from-box[_ngcontent-%COMP%] {\n  padding: 15px 15px;\n  border-radius: 4px;\n  -webkit-transition: all 5s ease-out;\n  transition: all 5s ease-out;\n}\n.transaction-form-container[_ngcontent-%COMP%]   .traction-from-box[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  line-height: 20px;\n  margin-bottom: 15px;\n}\n.transaction-form-container[_ngcontent-%COMP%]   .traction-from-box[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 400;\n}\n.transaction-form-container[_ngcontent-%COMP%]   .traction-from-box[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.transaction-form-container[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  position: relative;\n  top: -3px;\n}\n.right-tabBtn-row[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 20px;\n  top: 5px;\n}\n.table-bordered[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-bordered[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom-width: 1px;\n  padding: 0.5rem;\n}\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-right: 15px;\n  margin-left: 15px;\n}\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\nthead[_ngcontent-%COMP%]   th.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n.tab-inner-content[_ngcontent-%COMP%] {\n  padding: 6px 5px;\n}\ntbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(even) {\n  background: #f8f9fa;\n}\ntbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(odd) {\n  background: #eff3f6;\n}\n.table-pagination[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  padding-top: 1rem;\n  background: #eff3f6;\n}\n@-webkit-keyframes spinner {\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes spinner {\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.btn-spinner[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 255, 0.6);\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.btn-spinner[_ngcontent-%COMP%]:before {\n  content: \"\";\n  box-sizing: border-box;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 20px;\n  height: 20px;\n  margin-top: -10px;\n  margin-left: -10px;\n  border-radius: 50%;\n  border: 2px solid #ffffff;\n  border-top-color: #000000;\n  -webkit-animation: spinner 0.8s linear infinite;\n          animation: spinner 0.8s linear infinite;\n}\n.table-filter-area[_ngcontent-%COMP%] {\n  position: relative;\n  background: #eff3f6;\n  padding: 15px;\n  border-bottom: 0px;\n  border-radius: 4px 4px 0 0;\n  padding-bottom: 0px;\n  top: 6px;\n}\n.swap-img-container[_ngcontent-%COMP%] {\n  background: #f3cf65;\n  padding: 2px 6px;\n  border-radius: 50%;\n}\n.swap-img-container[_ngcontent-%COMP%]   .swap-img[_ngcontent-%COMP%] {\n  width: 20px;\n  position: relative;\n  top: -1px;\n}\n.material-icons[_ngcontent-%COMP%] {\n  font-size: 24px;\n  position: relative;\n  top: 5px;\n  margin-right: 2px;\n  color: #007bff;\n}\n.history-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding: 10px 0;\n  font-weight: 400;\n  padding-top: 0px;\n}\ntable[_ngcontent-%COMP%] {\n  border-collapse: separate;\n  border-spacing: 0 6px;\n}\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-bottom: 0px solid #dee2e6;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-top: 0px solid #dee2e6;\n}\n.ngx-pagination[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-bottom: 0;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.45em 0.8em;\n  font-size: 75%;\n  font-weight: 500;\n}\n.wallet_balance[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 39px;\n  right: 15px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row;\n}\n.wallet_balance[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  padding: 0 10px;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-top: 8px !important;\n  padding-bottom: 8px !important;\n  font-size: 13px;\n}\n.btn-sm-padd[_ngcontent-%COMP%] {\n  padding: 1px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2xpZW50LWNvcmUvZnVuZC1tYW5hZ2VtZW50L2Z1bmQtbWFuYWdlbWVudC1jb3JlL2Z1bmQtdHJhbnNmZXIvYWNjb3VudC10by1hY2NvdW50L0Y6XFxuZXd0cmFkZXJcXHRyYWRlcjQtNS9zcmNcXGFwcFxccGFnZXNcXGNsaWVudC1jb3JlXFxmdW5kLW1hbmFnZW1lbnRcXGZ1bmQtbWFuYWdlbWVudC1jb3JlXFxmdW5kLXRyYW5zZmVyXFxhY2NvdW50LXRvLWFjY291bnRcXGFjY291bnQtdG8tYWNjb3VudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2xpZW50LWNvcmUvZnVuZC1tYW5hZ2VtZW50L2Z1bmQtbWFuYWdlbWVudC1jb3JlL2Z1bmQtdHJhbnNmZXIvYWNjb3VudC10by1hY2NvdW50L2FjY291bnQtdG8tYWNjb3VudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FDQ0o7QURBSTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFFQSxtQ0FBQTtFQUFBLDJCQUFBO0FDQ1I7QURBUTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7QUNFWjtBRERZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDR2hCO0FERFk7RUFDSSxlQUFBO0FDR2hCO0FEQ0k7RUFDSSxrQkFBQTtFQUNBLFNBQUE7QUNDUjtBREdBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtBQ0FKO0FER0E7O0VBRUksd0JBQUE7RUFDQSxlQUFBO0FDQUo7QURHQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDQUo7QURDSTtFQUNJLGtCQUFBO0FDQ1I7QURFUTtFQUNJLG1CQUFBO0FDQVo7QURLQTtFQUNJLGdCQUFBO0FDRko7QURLQTtFQUNJLG1CQUFBO0FDRko7QURLQTtFQUNJLG1CQUFBO0FDRko7QURLQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0ZKO0FES0E7RUFDSTtJQUNJLGlDQUFBO1lBQUEseUJBQUE7RUNGTjtBQUNGO0FEREE7RUFDSTtJQUNJLGlDQUFBO1lBQUEseUJBQUE7RUNGTjtBQUNGO0FES0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtBQ0hKO0FETUE7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsK0NBQUE7VUFBQSx1Q0FBQTtBQ0hKO0FETUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUVBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7QUNKSjtBRE9BO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDSko7QURNSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUNKUjtBRFFBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0xKO0FEUUE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNMSjtBRFFBO0VBQ0kseUJBQUE7RUFDQSxxQkFBQTtBQ0xKO0FEUUE7RUFDSSxnQ0FBQTtBQ0xKO0FEUUE7O0VBRUksNkJBQUE7QUNMSjtBRFFBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FDTEo7QURRQTtFQUNJLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNMSjtBRFFBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxjQUFBO0FDTEo7QURNSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNKUjtBRFFBOztFQUVJLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FDTEo7QURRQTtFQUNJLGlCQUFBO0FDTEoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jbGllbnQtY29yZS9mdW5kLW1hbmFnZW1lbnQvZnVuZC1tYW5hZ2VtZW50LWNvcmUvZnVuZC10cmFuc2Zlci9hY2NvdW50LXRvLWFjY291bnQvYWNjb3VudC10by1hY2NvdW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRyYW5zYWN0aW9uLWZvcm0tY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDEwcHggNnB4O1xyXG4gICAgLnRyYWN0aW9uLWZyb20tYm94IHtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4IDE1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICNkZmUyZTQ7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDVzIGVhc2Utb3V0O1xyXG4gICAgICAgIC5oZWFkaW5nIHtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNtYWxsIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jbG9zZS1idG4ge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0b3A6IC0zcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5yaWdodC10YWJCdG4tcm93IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgdG9wOiA1cHg7XHJcbn1cclxuXHJcbi50YWJsZS1ib3JkZXJlZCB0aGVhZCB0aCxcclxuLnRhYmxlLWJvcmRlcmVkIHRoZWFkIHRkIHtcclxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcclxuICAgIHBhZGRpbmc6IC41MHJlbTtcclxufVxyXG5cclxudGhlYWQgdGgge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBzcGFuIHtcclxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4udGFiLWlubmVyLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogNnB4IDVweDtcclxufVxyXG5cclxudGJvZHk+dHI6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgIGJhY2tncm91bmQ6ICNmOGY5ZmFcclxufVxyXG5cclxudGJvZHk+dHI6bnRoLWNoaWxkKG9kZCkge1xyXG4gICAgYmFja2dyb3VuZDogI2VmZjNmNlxyXG59XHJcblxyXG4udGFibGUtcGFnaW5hdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAwLjc1cmVtO1xyXG4gICAgcGFkZGluZy10b3A6IDFyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWZmM2Y2O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNwaW5uZXIge1xyXG4gICAgdG8ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idG4tc3Bpbm5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMjU1LCAwLjYpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxufVxyXG5cclxuLmJ0bi1zcGlubmVyOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogIzAwMDAwMDtcclxuICAgIGFuaW1hdGlvbjogc3Bpbm5lciAuOHMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcblxyXG4udGFibGUtZmlsdGVyLWFyZWEge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZDogI2VmZjNmNjtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgdG9wOiA2cHg7XHJcbn1cclxuXHJcbi5zd2FwLWltZy1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2YzY2Y2NTtcclxuICAgIHBhZGRpbmc6IDJweCA2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAvLyBtYXJnaW46IDAgNHB4O1xyXG4gICAgLnN3YXAtaW1nIHtcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdG9wOiAtMXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubWF0ZXJpYWwtaWNvbnMge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcclxuICAgIGNvbG9yOiAjMDA3YmZmO1xyXG59XHJcblxyXG4uaGlzdG9yeS10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxufVxyXG5cclxudGFibGUge1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAwIDZweDtcclxufVxyXG5cclxuLnRhYmxlIHRoZWFkIHRoIHtcclxuICAgIGJvcmRlci1ib3R0b206IDBweCBzb2xpZCAjZGVlMmU2O1xyXG59XHJcblxyXG4udGFibGUgdGgsXHJcbi50YWJsZSB0ZCB7XHJcbiAgICBib3JkZXItdG9wOiAwcHggc29saWQgI2RlZTJlNjtcclxufVxyXG5cclxuLm5neC1wYWdpbmF0aW9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLmJhZGdlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDAuNDVlbSAwLjhlbTtcclxuICAgIGZvbnQtc2l6ZTogNzUlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLndhbGxldF9iYWxhbmNlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMzlweDtcclxuICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiByb3c7XHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi50YWJsZSB0aCxcclxuLnRhYmxlIHRkIHtcclxuICAgIHBhZGRpbmctdG9wOiA4cHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4cHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuLmJ0bi1zbS1wYWRkIHtcclxuICAgIHBhZGRpbmc6IDFweCAxMHB4O1xyXG59IiwiLnRyYW5zYWN0aW9uLWZvcm0tY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTBweCA2cHg7XG59XG4udHJhbnNhY3Rpb24tZm9ybS1jb250YWluZXIgLnRyYWN0aW9uLWZyb20tYm94IHtcbiAgcGFkZGluZzogMTVweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHRyYW5zaXRpb246IGFsbCA1cyBlYXNlLW91dDtcbn1cbi50cmFuc2FjdGlvbi1mb3JtLWNvbnRhaW5lciAudHJhY3Rpb24tZnJvbS1ib3ggLmhlYWRpbmcge1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi50cmFuc2FjdGlvbi1mb3JtLWNvbnRhaW5lciAudHJhY3Rpb24tZnJvbS1ib3ggLmhlYWRpbmcgLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLnRyYW5zYWN0aW9uLWZvcm0tY29udGFpbmVyIC50cmFjdGlvbi1mcm9tLWJveCAuaGVhZGluZyBzbWFsbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi50cmFuc2FjdGlvbi1mb3JtLWNvbnRhaW5lciAuY2xvc2UtYnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0zcHg7XG59XG5cbi5yaWdodC10YWJCdG4tcm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbiAgdG9wOiA1cHg7XG59XG5cbi50YWJsZS1ib3JkZXJlZCB0aGVhZCB0aCxcbi50YWJsZS1ib3JkZXJlZCB0aGVhZCB0ZCB7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcbiAgcGFkZGluZzogMC41cmVtO1xufVxuXG50aGVhZCB0aCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cbnRoZWFkIHRoIHNwYW4ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG50aGVhZCB0aC5hY3RpdmUgc3BhbiB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi50YWItaW5uZXItY29udGVudCB7XG4gIHBhZGRpbmc6IDZweCA1cHg7XG59XG5cbnRib2R5ID4gdHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbn1cblxudGJvZHkgPiB0cjpudGgtY2hpbGQob2RkKSB7XG4gIGJhY2tncm91bmQ6ICNlZmYzZjY7XG59XG5cbi50YWJsZS1wYWdpbmF0aW9uIHtcbiAgcGFkZGluZzogMC43NXJlbTtcbiAgcGFkZGluZy10b3A6IDFyZW07XG4gIGJhY2tncm91bmQ6ICNlZmYzZjY7XG59XG5cbkBrZXlmcmFtZXMgc3Bpbm5lciB7XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG4uYnRuLXNwaW5uZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDI1NSwgMC42KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG59XG5cbi5idG4tc3Bpbm5lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZmZmZjtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzAwMDAwMDtcbiAgYW5pbWF0aW9uOiBzcGlubmVyIDAuOHMgbGluZWFyIGluZmluaXRlO1xufVxuXG4udGFibGUtZmlsdGVyLWFyZWEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICNlZmYzZjY7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlci1ib3R0b206IDBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIHRvcDogNnB4O1xufVxuXG4uc3dhcC1pbWctY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogI2YzY2Y2NTtcbiAgcGFkZGluZzogMnB4IDZweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLnN3YXAtaW1nLWNvbnRhaW5lciAuc3dhcC1pbWcge1xuICB3aWR0aDogMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0xcHg7XG59XG5cbi5tYXRlcmlhbC1pY29ucyB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIGNvbG9yOiAjMDA3YmZmO1xufVxuXG4uaGlzdG9yeS10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogMTBweCAwO1xuICBmb250LXdlaWdodDogNDAwO1xuICBwYWRkaW5nLXRvcDogMHB4O1xufVxuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gIGJvcmRlci1zcGFjaW5nOiAwIDZweDtcbn1cblxuLnRhYmxlIHRoZWFkIHRoIHtcbiAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkICNkZWUyZTY7XG59XG5cbi50YWJsZSB0aCxcbi50YWJsZSB0ZCB7XG4gIGJvcmRlci10b3A6IDBweCBzb2xpZCAjZGVlMmU2O1xufVxuXG4ubmd4LXBhZ2luYXRpb24ge1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwLjQ1ZW0gMC44ZW07XG4gIGZvbnQtc2l6ZTogNzUlO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ud2FsbGV0X2JhbGFuY2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzlweDtcbiAgcmlnaHQ6IDE1cHg7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdztcbn1cbi53YWxsZXRfYmFsYW5jZSBwIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG5cbi50YWJsZSB0aCxcbi50YWJsZSB0ZCB7XG4gIHBhZGRpbmctdG9wOiA4cHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDhweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5idG4tc20tcGFkZCB7XG4gIHBhZGRpbmc6IDFweCAxMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountToAccountComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-account-to-account',
          templateUrl: './account-to-account.component.html',
          styleUrls: ['./account-to-account.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_services_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"]
        }, {
          type: _shared_services_header_service__WEBPACK_IMPORTED_MODULE_3__["HeaderService"]
        }, {
          type: ngx_order_pipe__WEBPACK_IMPORTED_MODULE_4__["OrderPipe"]
        }, {
          type: _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]
        }];
      }, {
        fundTransactionForm: [{
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
  "./src/app/pages/client-core/fund-management/fund-management-core/fund-transfer/account-to-wallet/account-to-wallet.component.ts":
  /*!***************************************************************************************************************************************!*\
    !*** ./src/app/pages/client-core/fund-management/fund-management-core/fund-transfer/account-to-wallet/account-to-wallet.component.ts ***!
    \***************************************************************************************************************************************/

  /*! exports provided: AccountToWalletComponent */

  /***/
  function srcAppPagesClientCoreFundManagementFundManagementCoreFundTransferAccountToWalletAccountToWalletComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountToWalletComponent", function () {
      return AccountToWalletComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _shared_services_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../../../../shared/services/global.service */
    "./src/app/shared/services/global.service.ts");
    /* harmony import */


    var _shared_services_header_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../../../../../shared/services/header.service */
    "./src/app/shared/services/header.service.ts");
    /* harmony import */


    var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-order-pipe */
    "./node_modules/ngx-order-pipe/__ivy_ngcc__/fesm2015/ngx-order-pipe.js");
    /* harmony import */


    var _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../../../../../shared/services/notification.service */
    "./src/app/shared/services/notification.service.ts");
    /* harmony import */


    var angular_feather__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angular-feather */
    "./node_modules/angular-feather/__ivy_ngcc__/fesm2015/angular-feather.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
    /* harmony import */


    var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-bootstrap */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/esm5/ngx-bootstrap.js");
    /* harmony import */


    var ng2_search_filter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ng2-search-filter */
    "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");

    var _c0 = ["formData"];

    function AccountToWalletComponent_div_4_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Withdraw Fund - Account To Wallet");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AccountToWalletComponent_div_4_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Deposit Fund - Wallet To Account");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AccountToWalletComponent_div_4_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Deposit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " swap_horizontal_circle ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Withdraw Fund");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AccountToWalletComponent_div_4_div_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r195 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i-feather", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountToWalletComponent_div_4_div_10_Template_i_feather_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r195);

          var ctx_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r194.onCloseMsqBlock();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r188 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r188.messageToDisplay, " ");
      }
    }

    function AccountToWalletComponent_div_4_div_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r197 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i-feather", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountToWalletComponent_div_4_div_13_Template_i_feather_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r197);

          var ctx_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r196.onCloseMsqBlock();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r189 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r189.messageToDisplay, " ");
      }
    }

    function AccountToWalletComponent_div_4_span_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please Enter a valid Account Number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AccountToWalletComponent_div_4_div_34_option_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var acc_r205 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", acc_r205.MT4Account);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](acc_r205.MT4Account);
      }
    }

    function AccountToWalletComponent_div_4_div_34_span_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please Enter a valid Account Number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AccountToWalletComponent_div_4_div_34_span_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Amount field should not be blankr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AccountToWalletComponent_div_4_div_34_span_38_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter a comment");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AccountToWalletComponent_div_4_div_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Account Number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "select", 59, 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Select Account Number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AccountToWalletComponent_div_4_div_34_option_12_Template, 2, 2, "option", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AccountToWalletComponent_div_4_div_34_span_15_Template, 2, 0, "span", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Amount");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 64, 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AccountToWalletComponent_div_4_div_34_span_26_Template, 2, 0, "span", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Comment");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 67, 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, AccountToWalletComponent_div_4_div_34_span_38_Template, 2, 0, "span", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Transfer Fund");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r198 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

        var _r201 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

        var _r203 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r190 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);

        var ctx_r193 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r193.liveAccountData);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r198.valid && _r198.touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r201.valid && _r201.touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r203.valid && _r203.touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r190.valid || ctx_r193.isLoading);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-spinner", ctx_r193.isLoading);
      }
    }

    function AccountToWalletComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r207 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AccountToWalletComponent_div_4_div_3_Template, 2, 0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AccountToWalletComponent_div_4_div_4_Template, 2, 0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AccountToWalletComponent_div_4_div_5_Template, 5, 0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "All fields are required to transfer from Account to Wallet");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AccountToWalletComponent_div_4_div_10_Template, 5, 1, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AccountToWalletComponent_div_4_div_13_Template, 5, 1, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 38, 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AccountToWalletComponent_div_4_Template_form_ngSubmit_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r207);

          var ctx_r206 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r206.onSubmit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Transaction Type");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "select", 43, 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AccountToWalletComponent_div_4_Template_select_ngModelChange_23_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r207);

          var ctx_r208 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r208.transactionTypeValue = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Select Transaction Type");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Wallet To Account");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Account to Wallet");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, AccountToWalletComponent_div_4_span_33_Template, 2, 0, "span", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, AccountToWalletComponent_div_4_div_34_Template, 44, 8, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r191 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);

        var ctx_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r191.value == "a2w");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r191.value == "w2a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r191.value != "w2a" && _r191.value != "a2w");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r182.successMsqBlock);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r182.ErrorMsqBlock);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r182.transactionTypeValue);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r191.valid && _r191.touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r191.value == "w2a" || _r191.value == "a2w");
      }
    }

    function AccountToWalletComponent_tbody_65_tr_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading ...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AccountToWalletComponent_tbody_65_tr_2_span_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Neteller");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AccountToWalletComponent_tbody_65_tr_2_span_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Skrill");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AccountToWalletComponent_tbody_65_tr_2_span_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Insta mozo");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AccountToWalletComponent_tbody_65_tr_2_span_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Payee88");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AccountToWalletComponent_tbody_65_tr_2_span_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Perfect money");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AccountToWalletComponent_tbody_65_tr_2_span_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Bank wire 1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AccountToWalletComponent_tbody_65_tr_2_span_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Bank wire 2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AccountToWalletComponent_tbody_65_tr_2_span_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Bank wire 3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AccountToWalletComponent_tbody_65_tr_2_span_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Crypto currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AccountToWalletComponent_tbody_65_tr_2_span_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Bank wire 4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AccountToWalletComponent_tbody_65_tr_2_span_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Bank wire 5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AccountToWalletComponent_tbody_65_tr_2_span_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Bank wire 6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AccountToWalletComponent_tbody_65_tr_2_span_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Pending");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AccountToWalletComponent_tbody_65_tr_2_span_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Success");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AccountToWalletComponent_tbody_65_tr_2_span_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Claimed");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AccountToWalletComponent_tbody_65_tr_2_span_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Rejected");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AccountToWalletComponent_tbody_65_tr_2_i_feather_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i-feather", 88);
      }

      if (rf & 2) {
        var ledger_r211 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("tooltip", ledger_r211.uComment);
      }
    }

    function AccountToWalletComponent_tbody_65_tr_2_i_feather_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i-feather", 88);
      }

      if (rf & 2) {
        var ledger_r211 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("tooltip", ledger_r211.uAdmMsg);
      }
    }

    function AccountToWalletComponent_tbody_65_tr_2_button_32_Template(rf, ctx) {
      if (rf & 1) {
        var _r237 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountToWalletComponent_tbody_65_tr_2_button_32_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r237);

          var ledger_r211 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r235 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r235.onClaim(ledger_r211.sLedgerId);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Claim");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AccountToWalletComponent_tbody_65_tr_2_span_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " - ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AccountToWalletComponent_tbody_65_tr_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AccountToWalletComponent_tbody_65_tr_2_span_7_Template, 2, 0, "span", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AccountToWalletComponent_tbody_65_tr_2_span_8_Template, 2, 0, "span", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AccountToWalletComponent_tbody_65_tr_2_span_9_Template, 2, 0, "span", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AccountToWalletComponent_tbody_65_tr_2_span_10_Template, 2, 0, "span", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AccountToWalletComponent_tbody_65_tr_2_span_11_Template, 2, 0, "span", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AccountToWalletComponent_tbody_65_tr_2_span_12_Template, 2, 0, "span", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AccountToWalletComponent_tbody_65_tr_2_span_13_Template, 2, 0, "span", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AccountToWalletComponent_tbody_65_tr_2_span_14_Template, 2, 0, "span", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AccountToWalletComponent_tbody_65_tr_2_span_15_Template, 2, 0, "span", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AccountToWalletComponent_tbody_65_tr_2_span_16_Template, 2, 0, "span", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AccountToWalletComponent_tbody_65_tr_2_span_17_Template, 2, 0, "span", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AccountToWalletComponent_tbody_65_tr_2_span_18_Template, 2, 0, "span", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AccountToWalletComponent_tbody_65_tr_2_span_24_Template, 2, 0, "span", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AccountToWalletComponent_tbody_65_tr_2_span_25_Template, 2, 0, "span", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AccountToWalletComponent_tbody_65_tr_2_span_26_Template, 2, 0, "span", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, AccountToWalletComponent_tbody_65_tr_2_span_27_Template, 2, 0, "span", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, AccountToWalletComponent_tbody_65_tr_2_i_feather_29_Template, 1, 1, "i-feather", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, AccountToWalletComponent_tbody_65_tr_2_i_feather_30_Template, 1, 1, "i-feather", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, AccountToWalletComponent_tbody_65_tr_2_button_32_Template, 2, 0, "button", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, AccountToWalletComponent_tbody_65_tr_2_span_33_Template, 2, 0, "span", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ledger_r211 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ledger_r211.uReference);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 24, ledger_r211.sTimestamp == null ? null : ledger_r211.sTimestamp.sCreadedOn_Str, "dd-MM-yyyy hh:mm a"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ledger_r211.uSource == 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ledger_r211.uSource == 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ledger_r211.uSource == 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ledger_r211.uSource == 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ledger_r211.uSource == 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ledger_r211.uSource == 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ledger_r211.uSource == 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ledger_r211.uSource == 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ledger_r211.uSource == 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ledger_r211.uSource == 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ledger_r211.uSource == 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ledger_r211.uSource == 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ledger_r211.uTransType == 1 ? ledger_r211.uAmount : "-");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ledger_r211.uTransType == 0 ? ledger_r211.uAmount : "-");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ledger_r211.uStatus == 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ledger_r211.uStatus == 1 && ledger_r211.uComment != "Transaction Claimed ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ledger_r211.uComment == "Transaction Claimed ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ledger_r211.uStatus == 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ledger_r211.uComment != "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ledger_r211.uAdmMsg != "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ledger_r211.uStatus == 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ledger_r211.uStatus == 1);
      }
    }

    var _c1 = function _c1(a0, a1, a2) {
      return {
        itemsPerPage: a0,
        currentPage: a1,
        totalItems: a2
      };
    };

    function AccountToWalletComponent_tbody_65_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AccountToWalletComponent_tbody_65_tr_1_Template, 4, 0, "tr", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AccountToWalletComponent_tbody_65_tr_2_Template, 34, 27, "tr", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "paginate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "filter");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "orderBy");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r183 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r183.isLoading);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](5, 8, ctx_r183.ledgersDetail, ctx_r183.order, ctx_r183.reverse), ctx_r183.searchText), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](12, _c1, ctx_r183.pageSize, ctx_r183.p, ctx_r183.TotalCount)));
      }
    }

    function AccountToWalletComponent_div_66_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Data Not Found");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var AccountToWalletComponent =
    /*#__PURE__*/
    function () {
      function AccountToWalletComponent(globalService, headerService, orderPipe, notificationService) {
        var _this22 = this;

        _classCallCheck(this, AccountToWalletComponent);

        this.globalService = globalService;
        this.headerService = headerService;
        this.orderPipe = orderPipe;
        this.notificationService = notificationService;
        this.isLoading = false;
        this.ledgersDetail = [];
        this.isVisibleFormArea = false;
        this.ErrorMsqBlock = false;
        this.successMsqBlock = false;
        this.liveAccountData = [];
        this.transactionTypeValue = 'Please Select Transaction Type';
        this.IsDataNotFound = false; // pagination Setting

        this.TotalCount = 0;
        this.pageSize = 5; // Table Rows Perpage property

        this.order = ''; // Order property to sort coloum of table

        this.reverse = true; // Reverse property is used to sort table coloum

        this.headerSubscription = this.headerService.castLoggedUserDetail.subscribe(function (resData) {
          return _this22.LoggedParams = resData;
        });
        this.walletId = this.LoggedParams.sProfile.sWalletId;
        this.dealerId = this.LoggedParams.sProfile.sDealerId;
        this.senderEmailId = this.LoggedParams.sProfile.uContactInfo.Email;
      }

      _createClass(AccountToWalletComponent, [{
        key: "toggleFormArea",
        value: function toggleFormArea() {
          this.isVisibleFormArea = !this.isVisibleFormArea;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getProfileAccounts();
          this.getLedgerDetails(1, this.cat);
        }
      }, {
        key: "setOrder",
        value: function setOrder(value) {
          if (this.order === value) {
            this.reverse = !this.reverse;
          }

          this.order = value;
        }
      }, {
        key: "getTransactionSetting",
        value: function getTransactionSetting() {
          var _this23 = this;

          var params = {
            sDealerID: this.LoggedParams.sProfile.sDealerId
          };

          try {
            this.transactionSubscription = this.globalService.getSettings(params).subscribe(function (data) {
              if (data.length) {
                _this23.transactionSettingW2A = data[0].Wallet_Auto_ITC;
                _this23.transactionSettingA2W = data[0].Acc_Auto_ITC;
              }
            });
          } catch (err) {
            console.log(err);
          }
        }
      }, {
        key: "onClaim",
        value: function onClaim(id) {
          var _this24 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: 'Are you Sure!',
            text: 'Do you really want to Claim Amount? This process cannot be undone',
            icon: 'error',
            showCancelButton: true,
            confirmButtonText: 'Claim',
            cancelButtonText: 'Cancel',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33'
          }).then(function (result) {
            if (result.value) {
              var params = {
                sDealerID: _this24.LoggedParams.sProfile.sDealerId,
                sLedgerId: id,
                uWalletID: _this24.LoggedParams.sProfile.sWalletId
              };
              console.log(params);

              _this24.globalService.claim(params).subscribe(function (data) {
                if (data.Result === true) {
                  _this24.getLedgerDetails(1, _this24.cat);

                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Claimed!', 'Your Amount has been Claimed.', 'success');

                  _this24.notificationService.showSuccess('Your Amount has been Claimed Successfully', 'Success');
                }
              }, function (err) {
                console.log(err);
              });
            }
          });
        }
      }, {
        key: "getLedgerDetails",
        value: function getLedgerDetails(indexval, countVal) {
          var _this25 = this;

          this.isLoading = true;

          if (countVal) {
            this.pageSize = indexval;
            this.p = 1;
            this.setParams = {
              WalletId: this.LoggedParams.sProfile.sWalletId,
              DealerID: this.LoggedParams.sProfile.sDealerId,
              Initial: this.p,
              MaxCount: this.pageSize
            };
          } else {
            this.p = indexval;
            this.setParams = {
              WalletId: this.LoggedParams.sProfile.sWalletId,
              DealerID: this.LoggedParams.sProfile.sDealerId,
              Initial: (this.p - 1) * this.pageSize + 1,
              MaxCount: this.p * this.pageSize
            };
          }

          this.ledgerDetailscription = this.globalService.getLedger(this.setParams).subscribe(function (data) {
            _this25.TotalCount = data.sLedger.Count;
            _this25.isLoading = false;
            _this25.walletBalance = data.uBalance;
            _this25.pendingBalance = data.uPending;
            _this25.ledgersDetail = data.sLedger.lstLedger.map(function (res) {
              console.log(res);
              return res;
            });
            console.log(_this25.ledgersDetail);
          }, function (err) {
            console.log(err);
            _this25.isLoading = false;
            _this25.IsDataNotFound = true;
          });
        }
      }, {
        key: "getProfileAccounts",
        value: function getProfileAccounts() {
          var _this26 = this;

          var params = {
            ProfileId: this.LoggedParams.sProfile.sMasterId,
            LoginId: this.LoggedParams.sProfile.sMasterId
          };
          this.accountSubscription = this.globalService.GET_PROFILE_ACCOUNTS(params).subscribe(function (data) {
            _this26.liveAccountData = data.lstAccount.map(function (acc) {
              if (acc) {
                return Object.assign(acc.sUserInfo, acc.sAccountPlan);
              }
            });
            console.log(_this26.liveAccountData);
          });
        }
      }, {
        key: "autoCloseMsqBlock",
        value: function autoCloseMsqBlock() {
          var _this27 = this;

          setTimeout(function () {
            _this27.successMsqBlock = false;
            _this27.ErrorMsqBlock = false;
            _this27.messageToDisplay = '';
          }, 10000);
        }
      }, {
        key: "onCloseMsqBlock",
        value: function onCloseMsqBlock() {
          this.successMsqBlock = false;
          this.ErrorMsqBlock = false;
          this.messageToDisplay = '';
        }
      }, {
        key: "onSuccessMsqDisplay",
        value: function onSuccessMsqDisplay(msq) {
          this.messageToDisplay = '';
          this.ErrorMsqBlock = false;
          this.successMsqBlock = true;
          this.messageToDisplay = msq;
        }
      }, {
        key: "onErrorMsqDisplay",
        value: function onErrorMsqDisplay(msq) {
          this.messageToDisplay = '';
          this.successMsqBlock = false;
          this.ErrorMsqBlock = true;
          this.messageToDisplay = msq;
        } // Check KYC is Required or not

      }, {
        key: "isKYCRequired",
        value: function isKYCRequired() {
          var _this28 = this;

          // tslint:disable-next-line: no-shadowed-variable
          return new Promise(function (resolve, reject) {
            var params = {
              Dealer: _this28.LoggedParams.sProfile.sDealerId
            };

            _this28.globalService.getKycset(params).subscribe(function (data) {
              console.warn('KYC Settings = ' + data);

              if (data && data === 3) {
                resolve(true);
              } else if (data && data === 1 || data === 2) {
                resolve(false);
              } else if (data || data === 0) {
                resolve(false);
              } else {
                reject('KYC Settings Not Found .....');
              }
            });
          });
        } // IS KYC Approved If KYC required

      }, {
        key: "isKYCApproved",
        value: function isKYCApproved() {
          var _this29 = this;

          var params = {
            KYCStatus: this.LoggedParams.sProfile.uKYCStatus
          }; // tslint:disable-next-line: no-shadowed-variable

          return new Promise(function (resolve, reject) {
            if (params.KYCStatus) {
              if (params.KYCStatus !== 2) {
                // this.onErrorMsqDisplay('KYC is required to make Transaction In Wallet to Wallet!');
                _this29.notificationService.showError('KYC is required to make Transaction', 'Error');

                resolve(false);

                _this29.displayKYCPopup();

                _this29.isLoading = false;

                _this29.autoCloseMsqBlock();
              } else {
                resolve(true);
              }
            } else {
              reject('KYC Status Not Found ....');
            }
          });
        }
      }, {
        key: "displayKYCPopup",
        value: function displayKYCPopup() {
          var _this30 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: 'Please update KYC First!',
            text: 'Your KYC is not Verified. You will not be able to make Transaction without KYC Approved!',
            icon: 'error',
            showCancelButton: false,
            confirmButtonText: 'Show me the way',
            cancelButtonText: 'No, keep it',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33'
          }).then(function (result) {
            if (result.value) {
              _this30.globalService.redirect('/home/dashboard');
            }
          });
        } // Check Fund Balance on MT4Account before make a Transaction

      }, {
        key: "isBalanceAvaliable",
        value: function isBalanceAvaliable(formData) {
          var _this31 = this;

          // tslint:disable-next-line: no-shadowed-variable
          return new Promise(function (resolve, reject) {
            console.log(formData.amount);
            console.log(formData.transactionType);
            _this31.selectedAccount = _this31.liveAccountData.filter(function (acc) {
              if (acc.MT4Account === formData.account) {
                return acc;
              }
            });

            if (formData.transactionType === 'a2w') {
              if (_this31.selectedAccount[0].Balance >= formData.amount) {
                resolve(true);
              } else {
                // tslint:disable-next-line: max-line-length
                // this.onErrorMsqDisplay(`Please maintain Sufficient Balance in your MT4Account Account before make a Transaction`);
                _this31.notificationService.showError('You have not sufficient Balance in your Account', 'Error');

                resolve(false);
                _this31.isLoading = false;

                _this31.autoCloseMsqBlock();
              }
            } else if (formData.transactionType === 'w2a') {
              var params = {
                sWalletId: _this31.walletId
              };

              _this31.globalService.getWalletInfo(params).subscribe(function (data) {
                console.log(data);

                if (data) {
                  console.warn('Avaliable Balance = ' + data.uBalance);
                  console.warn('Transfer Amount = ' + data.uBalance);

                  if (formData.amount <= data.uBalance) {
                    resolve(true);
                  } else {
                    // this.onErrorMsqDisplay('Please maintain Sufficient Balance in your Wallet before make a Transaction ');
                    _this31.notificationService.showError('You have not sufficient Balance in your Wallet', 'Error');

                    resolve(false);
                    _this31.isLoading = false;

                    _this31.autoCloseMsqBlock();
                  }
                } else {
                  reject('Balance Not Found .....');
                }
              });
            }
          });
        }
      }, {
        key: "depositMt4Account",
        value: function depositMt4Account(formData) {
          var _this32 = this;

          // console.log('makeWalletTransfer function excuted');
          console.log(this.LoggedParams.sProfile.sWalletId);
          console.log(this.LoggedParams.sProfile.sDealerId);
          var params = {
            uCommission: 0,
            Amount: formData.amount,
            Comment: formData.comment,
            uWalletId: this.LoggedParams.sProfile.sWalletId,
            DealerId: this.LoggedParams.sProfile.sDealerId,
            UuAccount: formData.account,
            ManagerIndex: this.selectedAccount[0].uManager,
            uSource: 0,
            uTransType: formData.transactionType === 'w2a' ? 0 : 1
          };
          this.globalService.walletTrans(params).subscribe(function (data) {
            if (data.oStatus === true) {
              _this32.getLedgerDetails(1, _this32.cat); // this.onSuccessMsqDisplay(data.oStatus);
              // tslint:disable-next-line: max-line-length


              if (formData.transactionType === 'w2a') {
                // tslint:disable-next-line: max-line-length
                // this.onSuccessMsqDisplay(`You have made Successfully Transaction of ${formData.amount} dollor from  ${this.LoggedParams.sProfile.sWalletId} Wallet Id to  ${formData.account} Account`);
                // tslint:disable-next-line: max-line-length
                _this32.notificationService.showSuccess("You have made Successfully Transaction of ".concat(formData.amount, " dollor from  ").concat(_this32.LoggedParams.sProfile.sWalletId, " Wallet Id to  ").concat(formData.account, " Account"), 'Success'); // if (this.transactionSettingW2A === 0) {
                // tslint:disable-next-line: max-line-length
                //   this.notificationService.showInfo(`You have successfully generated a request for ${formData.amount} from your wallet amount to transfer in your account.`, 'Information');
                //  } else {
                // tslint:disable-next-line: max-line-length
                //   this.notificationService.showSuccess(`You have made Successfully Transaction of ${formData.amount} dollor from  ${this.LoggedParams.sProfile.sWalletId} Wallet Id to  ${formData.account} Account`, 'Success');
                //  }


                _this32.headerService.getUserWalletDetail();
              } else {
                // tslint:disable-next-line: max-line-length
                // this.onSuccessMsqDisplay(`You have made Successfully Transaction of ${formData.amount} dollor from ${formData.account} Account to ${this.LoggedParams.sProfile.sWalletId} Wallet Id`);
                // tslint:disable-next-line: max-line-length
                _this32.notificationService.showSuccess("You have made Successfully Transaction of ".concat(formData.amount, " dollor from ").concat(formData.account, " Account to ").concat(_this32.LoggedParams.sProfile.sWalletId, " Wallet Id"), 'Success'); // if (this.transactionSettingW2A === 0) {
                // tslint:disable-next-line: max-line-length
                //   this.notificationService.showInfo(`You have successfully generated a request for ${formData.amount} from your Account amount to transfer in your Wallet.`, 'Information');
                //  } else {
                // tslint:disable-next-line: max-line-length
                //   this.notificationService.showSuccess(`You have made Successfully Transaction of ${formData.amount} dollor from ${formData.account} Account to ${this.LoggedParams.sProfile.sWalletId} Wallet Id`, 'Success');
                //  }


                _this32.headerService.getUserWalletDetail();
              }

              _this32.isLoading = false; //  this.fundTransactionForm.reset();

              _this32.autoCloseMsqBlock();

              _this32.fundTransactionForm.reset();
            } else {
              // this.onErrorMsqDisplay('Failed To Make Transaction');
              _this32.notificationService.showError('Failed To Make Transaction', 'Error');

              _this32.isLoading = false;

              _this32.autoCloseMsqBlock();
            }
          }, function (err) {
            console.log(err);

            _this32.notificationService.showError('Failed To Make Transaction', 'Error');
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this33 = this;

          this.isLoading = true;
          this.onCloseMsqBlock();
          var formData = {
            transactionType: this.fundTransactionForm.value.transactionType,
            account: this.fundTransactionForm.value.account,
            amount: this.fundTransactionForm.value.amount,
            comment: this.fundTransactionForm.value.comment
          };

          if (0 >= this.fundTransactionForm.value.amount) {
            // this.onErrorMsqDisplay(`${this.fundTransactionForm.value.amount} is not a Valid Number in Amount Field`);
            this.notificationService.showError("".concat(this.fundTransactionForm.value.amount, " is not a Valid Number in Amount Field"), 'Error');
            this.isLoading = false;
            this.autoCloseMsqBlock();
            return;
          }

          this.isBalanceAvaliable(formData).then(function (resData) {
            if (resData) {
              _this33.isKYCRequired().then(function (KYCResponse) {
                if (KYCResponse) {
                  _this33.isKYCApproved().then(function (approvalReponse) {
                    if (approvalReponse) {
                      _this33.depositMt4Account(formData);
                    }
                  }).catch(function (err) {
                    console.error(err); // this.onErrorMsqDisplay(err);

                    _this33.notificationService.showError('Failed To Make Transaction', 'Error');
                  });
                } else {
                  _this33.depositMt4Account(formData);
                }
              }).catch(function (err) {
                console.error(err); // this.onErrorMsqDisplay(err);

                _this33.notificationService.showError('Failed To Make Transaction', 'Error');
              });
            }
          }).catch(function (err) {
            console.error(err); // this.onErrorMsqDisplay(err);

            _this33.notificationService.showError('Failed To Make Transaction', 'Error');
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.accountSubscription.unsubscribe();
          this.ledgerDetailscription.unsubscribe();
          this.headerSubscription.unsubscribe();
        }
      }]);

      return AccountToWalletComponent;
    }();

    AccountToWalletComponent.ɵfac = function AccountToWalletComponent_Factory(t) {
      return new (t || AccountToWalletComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_header_service__WEBPACK_IMPORTED_MODULE_3__["HeaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_order_pipe__WEBPACK_IMPORTED_MODULE_4__["OrderPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]));
    };

    AccountToWalletComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AccountToWalletComponent,
      selectors: [["app-account-to-wallet"]],
      viewQuery: function AccountToWalletComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fundTransactionForm = _t.first);
        }
      },
      decls: 69,
      vars: 22,
      consts: [[1, "right-tabBtn-row", "d-none", "d-sm-block", "d-md-block", "d-lg-block"], [1, "btn", "btn-warning", "btn-sm", "font-weight-400", "text-size-13", 3, "click"], ["name", "dollar-sign", 1, "icon-size-18"], ["class", "transaction-form-container", 4, "ngIf"], [1, "tab-inner-content", "px-2", "position-relative"], [1, "history-title"], [1, "wallet_balance"], [2, "color", "#f36"], [2, "color", "#10b759"], [1, "table-container", "table-responsive", "table-responsive", "table-responsive-sm", "mb-3"], [1, "table-filter-area"], [1, "row", "no-gutters"], [1, "col-md-4", "form-inline", "d-none", "d-md-block"], [1, "form-group", "mb-2"], ["for", "entries ", 1, "main-txt-color", "mr-1"], ["id", "entries ", 1, "form-control", "main-txt-color", "bd-color", "shadow-none", 3, "change"], ["selected", ""], ["for", "entries ", 1, "main-txt-color", "ml-1"], [1, "col-md-3", "offset-md-5"], [1, "form-group"], ["type", "text ", "id", "searchText ", "placeholder", "Enter Keyword to search ", 1, "form-control", "main-txt-color", "bd-color", "shadow-none", 3, "ngModel", "ngModelChange"], [1, "table", "table-hover", "main-txt-color", "mb-0"], [1, "table-header-bg", "table-header-color"], [1, "font-weight-500", "bd-color", "text-capitalize", "align-middle", 3, "click"], [1, "font-weight-500", "bd-color", "text-capitalize", "align-middle", "align-middle", 3, "click"], [1, "font-weight-500", "bd-color", "text-capitalize", "align-middle", "text-center", 3, "click"], ["class", "secondary-txt-color ", 4, "ngIf"], ["class", "text-size-17 font-weight-300 text-center p-4", "style", "background: #eff3f6;", 4, "ngIf"], [1, "table-pagination", "text-right", "border-top-0", "pt-4"], [3, "pageChange"], [1, "transaction-form-container"], [1, "traction-from-box", "bg-b"], [1, "heading"], ["class", "title", 4, "ngIf"], [1, "row"], [1, "col-md-8"], ["class", "alert alert-success alert-dismissible fade show", "role", "alert", 4, "ngIf"], ["class", "alert alert-danger alert-dismissible fade show", "role", "alert", 4, "ngIf"], [1, "", 3, "ngSubmit"], ["formData", "ngForm"], [1, "col-md-4"], ["for", "account", 1, ""], [1, "asterick"], ["required", "", "name", "transactionType", "id", "transactionType", 1, "form-control", "main-txt-color", "bd-color", "shadow-none", 3, "ngModel", "ngModelChange"], ["transactionType", ""], ["value", "Please Select Transaction Type", 1, "text-size-13", 3, "disabled"], ["name", "WalletToAccount", "value", "w2a", 1, "text-size-13"], ["name", "accountToWallet", "value", "a2w", 1, "text-size-13"], [1, "form-icon", "text-size-12"], [1, "fas", "fa-envelope"], ["class", "help-block text-danger ", 4, "ngIf"], [4, "ngIf"], [1, "title"], [1, "material-icons"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show"], ["type", "button", "data-dismiss", "alert", 1, "close"], ["name", "x", 1, "close-btn", 3, "click"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show"], [1, "help-block", "text-danger"], ["required", "", "ngModel", "", "name", "account", "id", "account", 1, "form-control", "main-txt-color", "bd-color", "shadow-none"], ["account", "ngModel"], ["value", "", 1, "text-size-13", 3, "disabled"], ["class", "text-size-13", "name", "accounts", 3, "ngValue", 4, "ngFor", "ngForOf"], ["for", "amount", 1, "main-txt-color"], ["min", "1", "pattern", "^-?(0|[1-9]\\d*)?$", "required", "", "ngModel", "", "name", "amount", "type", "number", "id", "amount", "placeholder", "Enter Amount", 1, "form-control", "main-txt-color", "bd-color", "shadow-none"], ["amount", "ngModel"], ["for", "comment", 1, "main-txt-color"], ["required", "", "ngModel", "", "name", "comment", "type", "text", "id", "comment", "placeholder", "Enter Comment", 1, "form-control", "main-txt-color", "bd-color", "shadow-none"], ["comment", "ngModel"], [1, "position-relative", 2, "padding-top", "29px"], [1, "btn", "btn-primary", "btn-sm", "px-3", "position-relative", 3, "disabled"], ["name", "accounts", 1, "text-size-13", 3, "ngValue"], [1, "secondary-txt-color"], [4, "ngFor", "ngForOf"], ["colspan", "9", 1, "align-middle"], [1, "text-size-17", "font-weight-300"], [1, "align-middle"], ["class", "badge badge-warning", 4, "ngIf"], ["class", "badge badge-success", 4, "ngIf"], ["class", "badge badge-info", 4, "ngIf"], ["class", "badge badge-danger", 4, "ngIf"], [1, "text-center", "align-middle"], ["class", "icon-size-20", "name", "message-square", "placement", "top", 3, "tooltip", 4, "ngIf"], ["class", "btn btn-warning btn-sm font-weight-400 text-size-11 btn-sm-padd", "type", "button", 3, "click", 4, "ngIf"], [1, "badge", "badge-warning"], [1, "badge", "badge-success"], [1, "badge", "badge-info"], [1, "badge", "badge-danger"], ["name", "message-square", "placement", "top", 1, "icon-size-20", 3, "tooltip"], ["type", "button", 1, "btn", "btn-warning", "btn-sm", "font-weight-400", "text-size-11", "btn-sm-padd", 3, "click"], [1, "text-size-17", "font-weight-300", "text-center", "p-4", 2, "background", "#eff3f6"]],
      template: function AccountToWalletComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountToWalletComponent_Template_button_click_1_listener() {
            return ctx.toggleFormArea();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i-feather", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Make a Transaction ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AccountToWalletComponent_div_4_Template, 35, 9, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Your Transaction History ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Pending : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Wallet Balance : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "strong", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Show ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "select", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AccountToWalletComponent_Template_select_change_24_listener($event) {
            return ctx.getLedgerDetails($event.target.value, true);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "15");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "20");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "25");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "30");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "50");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Entries");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AccountToWalletComponent_Template_input_ngModelChange_45_listener($event) {
            return ctx.searchText = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "table", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "thead", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountToWalletComponent_Template_th_click_49_listener() {
            return ctx.setOrder("sCreadedOn_Str");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Transaction Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountToWalletComponent_Template_th_click_51_listener() {
            return ctx.setOrder("Account");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Timestamp");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountToWalletComponent_Template_th_click_53_listener() {
            return ctx.setOrder("Value");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountToWalletComponent_Template_th_click_55_listener() {
            return ctx.setOrder("oPerc_Value");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Withdraw");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountToWalletComponent_Template_th_click_57_listener() {
            return ctx.setOrder("oAction");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Deposit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountToWalletComponent_Template_th_click_59_listener() {
            return ctx.setOrder("oAlert_Disable_Trade");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "th", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountToWalletComponent_Template_th_click_61_listener() {
            return ctx.setOrder("oAlert_Mail");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Remarks");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "th", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountToWalletComponent_Template_th_click_63_listener() {
            return ctx.setOrder("oUP_DOWN");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, AccountToWalletComponent_tbody_65_Template, 6, 16, "tbody", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, AccountToWalletComponent_div_66_Template, 2, 0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "pagination-controls", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function AccountToWalletComponent_Template_pagination_controls_pageChange_68_listener($event) {
            return ctx.getLedgerDetails($event, false);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isVisibleFormArea);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx.pendingBalance, ".00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx.walletBalance, ".00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchText);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.IsDataNotFound);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.IsDataNotFound);
        }
      },
      directives: [angular_feather__WEBPACK_IMPORTED_MODULE_6__["ɵa"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["PaginationControlsComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["PatternValidator"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["TooltipDirective"]],
      pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["PaginatePipe"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_11__["Ng2SearchPipe"], ngx_order_pipe__WEBPACK_IMPORTED_MODULE_4__["OrderPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]],
      styles: [".transaction-form-container[_ngcontent-%COMP%] {\n  padding: 10px 6px;\n}\n.transaction-form-container[_ngcontent-%COMP%]   .traction-from-box[_ngcontent-%COMP%] {\n  padding: 15px 15px;\n  border-radius: 4px;\n  -webkit-transition: all 5s ease-out;\n  transition: all 5s ease-out;\n}\n.transaction-form-container[_ngcontent-%COMP%]   .traction-from-box[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  line-height: 20px;\n  margin-bottom: 15px;\n}\n.transaction-form-container[_ngcontent-%COMP%]   .traction-from-box[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 400;\n}\n.transaction-form-container[_ngcontent-%COMP%]   .traction-from-box[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.transaction-form-container[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  position: relative;\n  top: -3px;\n}\n.right-tabBtn-row[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 20px;\n  top: 5px;\n}\n.table-bordered[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-bordered[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom-width: 1px;\n  padding: 0.5rem;\n}\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-right: 15px;\n  margin-left: 15px;\n}\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\nthead[_ngcontent-%COMP%]   th.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n.tab-inner-content[_ngcontent-%COMP%] {\n  padding: 6px 5px;\n}\ntbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(even) {\n  background: #f8f9fa;\n}\ntbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(odd) {\n  background: #eff3f6;\n}\n.table-pagination[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  padding-top: 1rem;\n  background: #eff3f6;\n}\n@-webkit-keyframes spinner {\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes spinner {\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.btn-spinner[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 255, 0.6);\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.btn-spinner[_ngcontent-%COMP%]:before {\n  content: \"\";\n  box-sizing: border-box;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 20px;\n  height: 20px;\n  margin-top: -10px;\n  margin-left: -10px;\n  border-radius: 50%;\n  border: 2px solid #ffffff;\n  border-top-color: #000000;\n  -webkit-animation: spinner 0.8s linear infinite;\n          animation: spinner 0.8s linear infinite;\n}\n.table-filter-area[_ngcontent-%COMP%] {\n  position: relative;\n  background: #eff3f6;\n  padding: 15px;\n  border-bottom: 0px;\n  border-radius: 4px 4px 0 0;\n  padding-bottom: 0px;\n  top: 6px;\n}\n.swap-img-container[_ngcontent-%COMP%] {\n  background: #f3cf65;\n  padding: 2px 6px;\n  border-radius: 50%;\n}\n.swap-img-container[_ngcontent-%COMP%]   .swap-img[_ngcontent-%COMP%] {\n  width: 20px;\n  position: relative;\n  top: -1px;\n}\n.material-icons[_ngcontent-%COMP%] {\n  font-size: 24px;\n  position: relative;\n  top: 5px;\n  margin-right: 2px;\n  color: #007bff;\n}\n.history-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding: 10px 0;\n  font-weight: 400;\n  padding-top: 0px;\n}\ntable[_ngcontent-%COMP%] {\n  border-collapse: separate;\n  border-spacing: 0 6px;\n}\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-bottom: 0px solid #dee2e6;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-top: 0px solid #dee2e6;\n}\n.ngx-pagination[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-bottom: 0;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.45em 0.8em;\n  font-size: 75%;\n  font-weight: 500;\n}\n.wallet_balance[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 15px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row;\n}\n.wallet_balance[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  padding: 0 10px;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-top: 8px !important;\n  padding-bottom: 8px !important;\n  font-size: 13px;\n}\n.btn-sm-padd[_ngcontent-%COMP%] {\n  padding: 1px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2xpZW50LWNvcmUvZnVuZC1tYW5hZ2VtZW50L2Z1bmQtbWFuYWdlbWVudC1jb3JlL2Z1bmQtdHJhbnNmZXIvYWNjb3VudC10by13YWxsZXQvRjpcXG5ld3RyYWRlclxcdHJhZGVyNC01L3NyY1xcYXBwXFxwYWdlc1xcY2xpZW50LWNvcmVcXGZ1bmQtbWFuYWdlbWVudFxcZnVuZC1tYW5hZ2VtZW50LWNvcmVcXGZ1bmQtdHJhbnNmZXJcXGFjY291bnQtdG8td2FsbGV0XFxhY2NvdW50LXRvLXdhbGxldC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2xpZW50LWNvcmUvZnVuZC1tYW5hZ2VtZW50L2Z1bmQtbWFuYWdlbWVudC1jb3JlL2Z1bmQtdHJhbnNmZXIvYWNjb3VudC10by13YWxsZXQvYWNjb3VudC10by13YWxsZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQ0NKO0FEQUk7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBRUEsbUNBQUE7RUFBQSwyQkFBQTtBQ0NSO0FEQVE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FDRVo7QUREWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0doQjtBRERZO0VBQ0ksZUFBQTtBQ0doQjtBRENJO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0FDQ1I7QURHQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7QUNBSjtBREdBOztFQUVJLHdCQUFBO0VBQ0EsZUFBQTtBQ0FKO0FER0E7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0FKO0FEQ0k7RUFDSSxrQkFBQTtBQ0NSO0FERVE7RUFDSSxtQkFBQTtBQ0FaO0FES0E7RUFDSSxnQkFBQTtBQ0ZKO0FES0E7RUFDSSxtQkFBQTtBQ0ZKO0FES0E7RUFDSSxtQkFBQTtBQ0ZKO0FES0E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNGSjtBREtBO0VBQ0k7SUFDSSxpQ0FBQTtZQUFBLHlCQUFBO0VDRk47QUFDRjtBRERBO0VBQ0k7SUFDSSxpQ0FBQTtZQUFBLHlCQUFBO0VDRk47QUFDRjtBREtBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7QUNISjtBRE1BO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLCtDQUFBO1VBQUEsdUNBQUE7QUNISjtBRE1BO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFFQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FDSko7QURPQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0pKO0FETUk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FDSlI7QURRQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNMSjtBRFFBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDTEo7QURRQTtFQUNJLHlCQUFBO0VBQ0EscUJBQUE7QUNMSjtBRFFBO0VBQ0ksZ0NBQUE7QUNMSjtBRFFBOztFQUVJLDZCQUFBO0FDTEo7QURRQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQ0xKO0FEUUE7RUFDSSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDTEo7QURRQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsY0FBQTtBQ0xKO0FETUk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDSlI7QURRQTs7RUFFSSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQ0xKO0FEUUE7RUFDSSxpQkFBQTtBQ0xKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2xpZW50LWNvcmUvZnVuZC1tYW5hZ2VtZW50L2Z1bmQtbWFuYWdlbWVudC1jb3JlL2Z1bmQtdHJhbnNmZXIvYWNjb3VudC10by13YWxsZXQvYWNjb3VudC10by13YWxsZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHJhbnNhY3Rpb24tZm9ybS1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMTBweCA2cHg7XHJcbiAgICAudHJhY3Rpb24tZnJvbS1ib3gge1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHggMTVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgI2RmZTJlNDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgNXMgZWFzZS1vdXQ7XHJcbiAgICAgICAgLmhlYWRpbmcge1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc21hbGwge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNsb3NlLWJ0biB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRvcDogLTNweDtcclxuICAgIH1cclxufVxyXG5cclxuLnJpZ2h0LXRhYkJ0bi1yb3cge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICB0b3A6IDVweDtcclxufVxyXG5cclxuLnRhYmxlLWJvcmRlcmVkIHRoZWFkIHRoLFxyXG4udGFibGUtYm9yZGVyZWQgdGhlYWQgdGQge1xyXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xyXG4gICAgcGFkZGluZzogLjUwcmVtO1xyXG59XHJcblxyXG50aGVhZCB0aCB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIHNwYW4ge1xyXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIH1cclxuICAgICYuYWN0aXZlIHtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi50YWItaW5uZXItY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiA2cHggNXB4O1xyXG59XHJcblxyXG50Ym9keT50cjpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgYmFja2dyb3VuZDogI2Y4ZjlmYVxyXG59XHJcblxyXG50Ym9keT50cjpudGgtY2hpbGQob2RkKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWZmM2Y2XHJcbn1cclxuXHJcbi50YWJsZS1wYWdpbmF0aW9uIHtcclxuICAgIHBhZGRpbmc6IDAuNzVyZW07XHJcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcclxuICAgIGJhY2tncm91bmQ6ICNlZmYzZjY7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc3Bpbm5lciB7XHJcbiAgICB0byB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIH1cclxufVxyXG5cclxuLmJ0bi1zcGlubmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAyNTUsIDAuNik7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG59XHJcblxyXG4uYnRuLXNwaW5uZXI6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmZmZmY7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjMDAwMDAwO1xyXG4gICAgYW5pbWF0aW9uOiBzcGlubmVyIC44cyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbi50YWJsZS1maWx0ZXItYXJlYSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWZmM2Y2O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgICBib3JkZXItYm90dG9tOiAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICB0b3A6IDZweDtcclxufVxyXG5cclxuLnN3YXAtaW1nLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjNjZjY1O1xyXG4gICAgcGFkZGluZzogMnB4IDZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIC8vIG1hcmdpbjogMCA0cHg7XHJcbiAgICAuc3dhcC1pbWcge1xyXG4gICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0b3A6IC0xcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tYXRlcmlhbC1pY29ucyB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMnB4O1xyXG4gICAgY29sb3I6ICMwMDdiZmY7XHJcbn1cclxuXHJcbi5oaXN0b3J5LXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDAgNnB4O1xyXG59XHJcblxyXG4udGFibGUgdGhlYWQgdGgge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkICNkZWUyZTY7XHJcbn1cclxuXHJcbi50YWJsZSB0aCxcclxuLnRhYmxlIHRkIHtcclxuICAgIGJvcmRlci10b3A6IDBweCBzb2xpZCAjZGVlMmU2O1xyXG59XHJcblxyXG4ubmd4LXBhZ2luYXRpb24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4uYmFkZ2Uge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMC40NWVtIDAuOGVtO1xyXG4gICAgZm9udC1zaXplOiA3NSU7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4ud2FsbGV0X2JhbGFuY2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgIHAge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgIH1cclxufVxyXG5cclxuLnRhYmxlIHRoLFxyXG4udGFibGUgdGQge1xyXG4gICAgcGFkZGluZy10b3A6IDhweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDhweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG4uYnRuLXNtLXBhZGQge1xyXG4gICAgcGFkZGluZzogMXB4IDEwcHg7XHJcbn0iLCIudHJhbnNhY3Rpb24tZm9ybS1jb250YWluZXIge1xuICBwYWRkaW5nOiAxMHB4IDZweDtcbn1cbi50cmFuc2FjdGlvbi1mb3JtLWNvbnRhaW5lciAudHJhY3Rpb24tZnJvbS1ib3gge1xuICBwYWRkaW5nOiAxNXB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdHJhbnNpdGlvbjogYWxsIDVzIGVhc2Utb3V0O1xufVxuLnRyYW5zYWN0aW9uLWZvcm0tY29udGFpbmVyIC50cmFjdGlvbi1mcm9tLWJveCAuaGVhZGluZyB7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLnRyYW5zYWN0aW9uLWZvcm0tY29udGFpbmVyIC50cmFjdGlvbi1mcm9tLWJveCAuaGVhZGluZyAudGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4udHJhbnNhY3Rpb24tZm9ybS1jb250YWluZXIgLnRyYWN0aW9uLWZyb20tYm94IC5oZWFkaW5nIHNtYWxsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLnRyYW5zYWN0aW9uLWZvcm0tY29udGFpbmVyIC5jbG9zZS1idG4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTNweDtcbn1cblxuLnJpZ2h0LXRhYkJ0bi1yb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMHB4O1xuICB0b3A6IDVweDtcbn1cblxuLnRhYmxlLWJvcmRlcmVkIHRoZWFkIHRoLFxuLnRhYmxlLWJvcmRlcmVkIHRoZWFkIHRkIHtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xuICBwYWRkaW5nOiAwLjVyZW07XG59XG5cbnRoZWFkIHRoIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxudGhlYWQgdGggc3BhbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbnRoZWFkIHRoLmFjdGl2ZSBzcGFuIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLnRhYi1pbm5lci1jb250ZW50IHtcbiAgcGFkZGluZzogNnB4IDVweDtcbn1cblxudGJvZHkgPiB0cjpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xufVxuXG50Ym9keSA+IHRyOm50aC1jaGlsZChvZGQpIHtcbiAgYmFja2dyb3VuZDogI2VmZjNmNjtcbn1cblxuLnRhYmxlLXBhZ2luYXRpb24ge1xuICBwYWRkaW5nOiAwLjc1cmVtO1xuICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgYmFja2dyb3VuZDogI2VmZjNmNjtcbn1cblxuQGtleWZyYW1lcyBzcGlubmVyIHtcbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbi5idG4tc3Bpbm5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMjU1LCAwLjYpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbn1cblxuLmJ0bi1zcGlubmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmO1xuICBib3JkZXItdG9wLWNvbG9yOiAjMDAwMDAwO1xuICBhbmltYXRpb246IHNwaW5uZXIgMC44cyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbi50YWJsZS1maWx0ZXItYXJlYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogI2VmZjNmNjtcbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyLWJvdHRvbTogMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgdG9wOiA2cHg7XG59XG5cbi5zd2FwLWltZy1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiAjZjNjZjY1O1xuICBwYWRkaW5nOiAycHggNnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uc3dhcC1pbWctY29udGFpbmVyIC5zd2FwLWltZyB7XG4gIHdpZHRoOiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTFweDtcbn1cblxuLm1hdGVyaWFsLWljb25zIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgY29sb3I6ICMwMDdiZmY7XG59XG5cbi5oaXN0b3J5LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDAgNnB4O1xufVxuXG4udGFibGUgdGhlYWQgdGgge1xuICBib3JkZXItYm90dG9tOiAwcHggc29saWQgI2RlZTJlNjtcbn1cblxuLnRhYmxlIHRoLFxuLnRhYmxlIHRkIHtcbiAgYm9yZGVyLXRvcDogMHB4IHNvbGlkICNkZWUyZTY7XG59XG5cbi5uZ3gtcGFnaW5hdGlvbiB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uYmFkZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDAuNDVlbSAwLjhlbTtcbiAgZm9udC1zaXplOiA3NSU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi53YWxsZXRfYmFsYW5jZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICByaWdodDogMTVweDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93O1xufVxuLndhbGxldF9iYWxhbmNlIHAge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cblxuLnRhYmxlIHRoLFxuLnRhYmxlIHRkIHtcbiAgcGFkZGluZy10b3A6IDhweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogOHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmJ0bi1zbS1wYWRkIHtcbiAgcGFkZGluZzogMXB4IDEwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountToWalletComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-account-to-wallet',
          templateUrl: './account-to-wallet.component.html',
          styleUrls: ['./account-to-wallet.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_services_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"]
        }, {
          type: _shared_services_header_service__WEBPACK_IMPORTED_MODULE_3__["HeaderService"]
        }, {
          type: ngx_order_pipe__WEBPACK_IMPORTED_MODULE_4__["OrderPipe"]
        }, {
          type: _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]
        }];
      }, {
        fundTransactionForm: [{
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
  "./src/app/pages/client-core/fund-management/fund-management-core/fund-transfer/fund-transfer.component.ts":
  /*!*****************************************************************************************************************!*\
    !*** ./src/app/pages/client-core/fund-management/fund-management-core/fund-transfer/fund-transfer.component.ts ***!
    \*****************************************************************************************************************/

  /*! exports provided: FundTransferComponent */

  /***/
  function srcAppPagesClientCoreFundManagementFundManagementCoreFundTransferFundTransferComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FundTransferComponent", function () {
      return FundTransferComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var FundTransferComponent =
    /*#__PURE__*/
    function () {
      function FundTransferComponent() {
        _classCallCheck(this, FundTransferComponent);
      }

      _createClass(FundTransferComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FundTransferComponent;
    }();

    FundTransferComponent.ɵfac = function FundTransferComponent_Factory(t) {
      return new (t || FundTransferComponent)();
    };

    FundTransferComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FundTransferComponent,
      selectors: [["app-fund-transfer"]],
      decls: 27,
      vars: 0,
      consts: [[1, "small-content-section", "bg-f"], [1, "row"], [1, "col-md-12"], [1, "card", "border-0"], [1, "card-body", "border-0", "p-0"], [1, "tabs-container"], [1, "tabs-heading", "d-flex", "flex-row", "border-bottom"], ["routerLinkActive", "active", 1, "tabs-item", "item-with-icon"], ["routerLink", "/home/money/transfer-funds/wallet-to-wallet", 1, "p-3"], [1, "material-icons"], [1, "tab-text"], ["routerLink", "/home/money/transfer-funds/account-to-account", 1, "p-3"], ["routerLink", "/home/money/transfer-funds/account-to-wallet", 1, "p-3"], [1, "tabs-body", "p-2"]],
      template: function FundTransferComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "account_balance_wallet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Wallet To Wallet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "museum");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Account To Account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "swap_horizontal_circle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Account To Wallet");

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
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NsaWVudC1jb3JlL2Z1bmQtbWFuYWdlbWVudC9mdW5kLW1hbmFnZW1lbnQtY29yZS9mdW5kLXRyYW5zZmVyL2Z1bmQtdHJhbnNmZXIuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FundTransferComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-fund-transfer',
          templateUrl: './fund-transfer.component.html',
          styleUrls: ['./fund-transfer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/client-core/fund-management/fund-management-core/fund-transfer/wallet-to-wallet/wallet-to-wallet.component.ts":
  /*!*************************************************************************************************************************************!*\
    !*** ./src/app/pages/client-core/fund-management/fund-management-core/fund-transfer/wallet-to-wallet/wallet-to-wallet.component.ts ***!
    \*************************************************************************************************************************************/

  /*! exports provided: WalletToWalletComponent */

  /***/
  function srcAppPagesClientCoreFundManagementFundManagementCoreFundTransferWalletToWalletWalletToWalletComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WalletToWalletComponent", function () {
      return WalletToWalletComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _shared_services_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../../../../shared/services/global.service */
    "./src/app/shared/services/global.service.ts");
    /* harmony import */


    var _shared_services_header_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../../../../../shared/services/header.service */
    "./src/app/shared/services/header.service.ts");
    /* harmony import */


    var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-order-pipe */
    "./node_modules/ngx-order-pipe/__ivy_ngcc__/fesm2015/ngx-order-pipe.js");
    /* harmony import */


    var _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../../../../../shared/services/notification.service */
    "./src/app/shared/services/notification.service.ts");
    /* harmony import */


    var angular_feather__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angular-feather */
    "./node_modules/angular-feather/__ivy_ngcc__/fesm2015/angular-feather.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
    /* harmony import */


    var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-bootstrap */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/esm5/ngx-bootstrap.js");
    /* harmony import */


    var ng2_search_filter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ng2-search-filter */
    "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");

    var _c0 = ["formData"];

    function WalletToWalletComponent_div_4_div_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r279 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Success -: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i-feather", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WalletToWalletComponent_div_4_div_9_Template_i_feather_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r279);

          var ctx_r278 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r278.onCloseMsqBlock();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r271 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r271.messageToDisplay, " ");
      }
    }

    function WalletToWalletComponent_div_4_div_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r281 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i-feather", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WalletToWalletComponent_div_4_div_12_Template_i_feather_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r281);

          var ctx_r280 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r280.onCloseMsqBlock();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r272 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r272.messageToDisplay, " ");
      }
    }

    function WalletToWalletComponent_div_4_span_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter a valid email address");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function WalletToWalletComponent_div_4_span_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter a valid Amount");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function WalletToWalletComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r283 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Transfer in Wallet to Wallet");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "All fields are required to transfer from Wallet to Wallet");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, WalletToWalletComponent_div_4_div_9_Template, 6, 1, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, WalletToWalletComponent_div_4_div_12_Template, 5, 1, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 38, 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function WalletToWalletComponent_div_4_Template_form_ngSubmit_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r283);

          var ctx_r282 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r282.onSubmit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Email Address");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 43, 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, WalletToWalletComponent_div_4_span_26_Template, 2, 0, "span", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Amount ($)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 49, 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, WalletToWalletComponent_div_4_span_37_Template, 2, 0, "span", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Transfer Fund");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r273 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

        var _r274 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

        var _r276 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34);

        var ctx_r268 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r268.successMsqBlock);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r268.ErrorMsqBlock);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r274.valid && _r274.touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r276.valid && _r276.touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r273.valid || ctx_r268.isLoading);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-spinner", ctx_r268.isLoading);
      }
    }

    function WalletToWalletComponent_tbody_65_tr_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading ...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function WalletToWalletComponent_tbody_65_tr_2_span_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Neteller");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function WalletToWalletComponent_tbody_65_tr_2_span_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Skrill");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function WalletToWalletComponent_tbody_65_tr_2_span_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Insta mozo");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function WalletToWalletComponent_tbody_65_tr_2_span_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Payee88");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function WalletToWalletComponent_tbody_65_tr_2_span_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Perfect money");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function WalletToWalletComponent_tbody_65_tr_2_span_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Bank wire 1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function WalletToWalletComponent_tbody_65_tr_2_span_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Bank wire 2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function WalletToWalletComponent_tbody_65_tr_2_span_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Bank wire 3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function WalletToWalletComponent_tbody_65_tr_2_span_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Crypto currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function WalletToWalletComponent_tbody_65_tr_2_span_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Bank wire 4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function WalletToWalletComponent_tbody_65_tr_2_span_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Bank wire 5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function WalletToWalletComponent_tbody_65_tr_2_span_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Bank wire 6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function WalletToWalletComponent_tbody_65_tr_2_span_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Pending");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function WalletToWalletComponent_tbody_65_tr_2_span_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Success");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function WalletToWalletComponent_tbody_65_tr_2_span_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Claimed");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function WalletToWalletComponent_tbody_65_tr_2_span_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Rejected");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function WalletToWalletComponent_tbody_65_tr_2_i_feather_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i-feather", 75);
      }

      if (rf & 2) {
        var ledger_r286 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("tooltip", ledger_r286.uComment);
      }
    }

    function WalletToWalletComponent_tbody_65_tr_2_i_feather_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i-feather", 75);
      }

      if (rf & 2) {
        var ledger_r286 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("tooltip", ledger_r286.uAdmMsg);
      }
    }

    function WalletToWalletComponent_tbody_65_tr_2_button_32_Template(rf, ctx) {
      if (rf & 1) {
        var _r312 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WalletToWalletComponent_tbody_65_tr_2_button_32_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r312);

          var ledger_r286 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r310 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r310.onClaim(ledger_r286.sLedgerId);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Claim");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function WalletToWalletComponent_tbody_65_tr_2_span_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " - ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function WalletToWalletComponent_tbody_65_tr_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, WalletToWalletComponent_tbody_65_tr_2_span_7_Template, 2, 0, "span", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, WalletToWalletComponent_tbody_65_tr_2_span_8_Template, 2, 0, "span", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, WalletToWalletComponent_tbody_65_tr_2_span_9_Template, 2, 0, "span", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, WalletToWalletComponent_tbody_65_tr_2_span_10_Template, 2, 0, "span", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, WalletToWalletComponent_tbody_65_tr_2_span_11_Template, 2, 0, "span", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, WalletToWalletComponent_tbody_65_tr_2_span_12_Template, 2, 0, "span", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, WalletToWalletComponent_tbody_65_tr_2_span_13_Template, 2, 0, "span", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, WalletToWalletComponent_tbody_65_tr_2_span_14_Template, 2, 0, "span", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, WalletToWalletComponent_tbody_65_tr_2_span_15_Template, 2, 0, "span", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, WalletToWalletComponent_tbody_65_tr_2_span_16_Template, 2, 0, "span", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, WalletToWalletComponent_tbody_65_tr_2_span_17_Template, 2, 0, "span", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, WalletToWalletComponent_tbody_65_tr_2_span_18_Template, 2, 0, "span", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, WalletToWalletComponent_tbody_65_tr_2_span_24_Template, 2, 0, "span", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, WalletToWalletComponent_tbody_65_tr_2_span_25_Template, 2, 0, "span", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, WalletToWalletComponent_tbody_65_tr_2_span_26_Template, 2, 0, "span", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, WalletToWalletComponent_tbody_65_tr_2_span_27_Template, 2, 0, "span", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, WalletToWalletComponent_tbody_65_tr_2_i_feather_29_Template, 1, 1, "i-feather", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, WalletToWalletComponent_tbody_65_tr_2_i_feather_30_Template, 1, 1, "i-feather", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, WalletToWalletComponent_tbody_65_tr_2_button_32_Template, 2, 0, "button", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, WalletToWalletComponent_tbody_65_tr_2_span_33_Template, 2, 0, "span", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ledger_r286 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ledger_r286.uReference);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 24, ledger_r286.sTimestamp == null ? null : ledger_r286.sTimestamp.sCreadedOn_Str, "dd-MM-yyyy hh:mm a"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ledger_r286.uSource == 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ledger_r286.uSource == 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ledger_r286.uSource == 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ledger_r286.uSource == 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ledger_r286.uSource == 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ledger_r286.uSource == 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ledger_r286.uSource == 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ledger_r286.uSource == 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ledger_r286.uSource == 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ledger_r286.uSource == 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ledger_r286.uSource == 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ledger_r286.uSource == 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ledger_r286.uTransType == 1 ? ledger_r286.uAmount : "-");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ledger_r286.uTransType == 0 ? ledger_r286.uAmount : "-");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ledger_r286.uStatus == 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ledger_r286.uStatus == 1 && ledger_r286.uComment != "Transaction Claimed ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ledger_r286.uComment == "Transaction Claimed ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ledger_r286.uStatus == 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ledger_r286.uComment != "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ledger_r286.uAdmMsg != "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ledger_r286.uStatus == 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ledger_r286.uStatus == 1);
      }
    }

    var _c1 = function _c1(a0, a1, a2) {
      return {
        itemsPerPage: a0,
        currentPage: a1,
        totalItems: a2
      };
    };

    function WalletToWalletComponent_tbody_65_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WalletToWalletComponent_tbody_65_tr_1_Template, 4, 0, "tr", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WalletToWalletComponent_tbody_65_tr_2_Template, 34, 27, "tr", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "paginate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "filter");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "orderBy");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r269 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r269.isLoading);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](5, 8, ctx_r269.ledgersDetail, ctx_r269.order, ctx_r269.reverse), ctx_r269.searchText), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](12, _c1, ctx_r269.pageSize, ctx_r269.p, ctx_r269.TotalCount)));
      }
    }

    function WalletToWalletComponent_div_66_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "There is no wallet to wallet transfer from your Profile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var WalletToWalletComponent =
    /*#__PURE__*/
    function () {
      function WalletToWalletComponent(globalService, headerService, orderPipe, notificationService) {
        var _this34 = this;

        _classCallCheck(this, WalletToWalletComponent);

        this.globalService = globalService;
        this.headerService = headerService;
        this.orderPipe = orderPipe;
        this.notificationService = notificationService;
        this.isLoading = false;
        this.ledgersDetail = [];
        this.walletToWalletLedger = [];
        this.isVisibleFormArea = false;
        this.ErrorMsqBlock = false;
        this.successMsqBlock = false; // pagination Setting

        this.TotalCount = 0;
        this.pageSize = 5; // Table Rows Perpage property

        this.order = ''; // Order property to sort coloum of table

        this.reverse = true; // Reverse property is used to sort table coloum

        this.IsDataNotFound = false;
        this.headerSubscription = this.headerService.castLoggedUserDetail.subscribe(function (resData) {
          return _this34.LoggedParams = resData;
        });
        this.walletId = this.LoggedParams.sProfile.sWalletId;
        this.dealerId = this.LoggedParams.sProfile.sDealerId;
        this.senderEmailId = this.LoggedParams.sProfile.uContactInfo.Email;
      }

      _createClass(WalletToWalletComponent, [{
        key: "toggleFormArea",
        value: function toggleFormArea() {
          this.isVisibleFormArea = !this.isVisibleFormArea;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getLedgerDetails(1, this.cat);
          this.getTransactionSetting();
        }
      }, {
        key: "setOrder",
        value: function setOrder(value) {
          if (this.order === value) {
            this.reverse = !this.reverse;
          }

          this.order = value;
        }
      }, {
        key: "getTransactionSetting",
        value: function getTransactionSetting() {
          var _this35 = this;

          var params = {
            sDealerID: this.LoggedParams.sProfile.sDealerId
          };

          try {
            this.transactionSubscription = this.globalService.getSettings(params).subscribe(function (data) {
              if (data.length) {
                _this35.transactionSetting = data[0].Wallet_Auto_ITC;
              }
            });
          } catch (err) {
            console.log(err);
          }
        }
      }, {
        key: "onClaim",
        value: function onClaim(id) {
          var _this36 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: 'Are you Sure!',
            text: 'Do you really want to Claim Amount? This process cannot be undone',
            icon: 'error',
            showCancelButton: true,
            confirmButtonText: 'Claim',
            cancelButtonText: 'Cancel',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33'
          }).then(function (result) {
            if (result.value) {
              var params = {
                sDealerID: _this36.LoggedParams.sProfile.sDealerId,
                sLedgerId: id,
                uWalletID: _this36.LoggedParams.sProfile.sWalletId
              };
              console.log(params);

              _this36.globalService.claim(params).subscribe(function (data) {
                if (data.Result === true) {
                  _this36.getLedgerDetails(1, _this36.cat);

                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Claimed!', 'Your Amount has been Claimed.', 'success');

                  _this36.notificationService.showSuccess('Your Amount has been Claimed Successfully', 'Success');
                }
              }, function (err) {
                console.log(err);
              });
            }
          });
        }
      }, {
        key: "getLedgerDetails",
        value: function getLedgerDetails(indexval, countVal) {
          var _this37 = this;

          this.isLoading = true;

          if (countVal) {
            this.pageSize = indexval;
            this.p = 1;
            this.setParams = {
              WalletId: this.LoggedParams.sProfile.sWalletId,
              DealerID: this.LoggedParams.sProfile.sDealerId,
              Initial: this.p,
              MaxCount: this.pageSize
            };
          } else {
            this.p = indexval;
            this.setParams = {
              WalletId: this.LoggedParams.sProfile.sWalletId,
              DealerID: this.LoggedParams.sProfile.sDealerId,
              Initial: (this.p - 1) * this.pageSize + 1,
              MaxCount: this.p * this.pageSize
            };
          }

          this.ledgerDetailscription = this.globalService.getLedger(this.setParams).subscribe(function (data) {
            _this37.TotalCount = data.sLedger.Count;
            _this37.isLoading = false;
            _this37.walletBalance = data.uBalance;
            _this37.pendingBalance = data.uPending;
            _this37.ledgersDetail = data.sLedger.lstLedger.map(function (res) {
              console.log(res);
              return res;
            });
            console.log(_this37.ledgersDetail);
          }, function (err) {
            console.log(err);
            _this37.isLoading = false;
            _this37.IsDataNotFound = true;
          });
        }
      }, {
        key: "autoCloseMsqBlock",
        value: function autoCloseMsqBlock() {
          var _this38 = this;

          setTimeout(function () {
            _this38.successMsqBlock = false;
            _this38.ErrorMsqBlock = false;
            _this38.messageToDisplay = '';
          }, 10000);
        }
      }, {
        key: "onCloseMsqBlock",
        value: function onCloseMsqBlock() {
          this.successMsqBlock = false;
          this.ErrorMsqBlock = false;
          this.messageToDisplay = '';
        }
      }, {
        key: "onSuccessMsqDisplay",
        value: function onSuccessMsqDisplay(msq) {
          this.messageToDisplay = '';
          this.ErrorMsqBlock = false;
          this.successMsqBlock = true;
          this.messageToDisplay = msq;
        }
      }, {
        key: "onErrorMsqDisplay",
        value: function onErrorMsqDisplay(msq) {
          this.messageToDisplay = '';
          this.successMsqBlock = false;
          this.ErrorMsqBlock = true;
          this.messageToDisplay = msq;
        } // Check Fund Balance before make a Transaction or submit the form

      }, {
        key: "isBalanceAvaliable",
        value: function isBalanceAvaliable(transferAmount) {
          var _this39 = this;

          // tslint:disable-next-line: no-shadowed-variable
          return new Promise(function (resolve, reject) {
            var params = {
              sWalletId: _this39.walletId
            }; // Called getWalletInfo function from global service to get Wallet information

            _this39.globalService.getWalletInfo(params).subscribe(function (data) {
              console.log(data);

              if (data) {
                // console.warn('Avaliable Balance = ' + data.uBalance);
                // console.warn('Transfer Amount = ' + transferAmount);
                if (transferAmount <= data.uBalance) {
                  resolve(true);
                } else {
                  // this.onErrorMsqDisplay('Please maintain Sufficient Balance in your Account before make a Transaction ');
                  _this39.notificationService.showError('You have not sufficient Balance in your Wallet.', 'Error');

                  resolve(false);
                  _this39.isLoading = false; // this.autoCloseMsqBlock();
                }
              } else {
                reject('Balance Not Found .....');
              }
            });
          });
        } // Check KYC is Required or not

      }, {
        key: "isKYCRequired",
        value: function isKYCRequired() {
          var _this40 = this;

          // tslint:disable-next-line: no-shadowed-variable
          return new Promise(function (resolve, reject) {
            var params = {
              Dealer: _this40.LoggedParams.sProfile.sDealerId
            }; // Call getKycset function to check KYC setting

            _this40.globalService.getKycset(params).subscribe(function (data) {
              // console.warn('KYC Settings = ' + data);
              if (data && data === 3) {
                // console.warn('KYC Required');
                resolve(true);
              } else if (data && data === 1 || data === 2) {
                // console.warn('KYC Not Required');
                resolve(false);
              } else if (data || data === 0) {
                // console.warn('KYC Not Required');
                resolve(false);
              } else {
                reject('KYC Settings Not Found .....');
              }
            });
          });
        } // IS KYC Approved If KYC required

      }, {
        key: "isKYCApproved",
        value: function isKYCApproved() {
          var _this41 = this;

          var params = {
            KYCStatus: this.LoggedParams.sProfile.uKYCStatus
          }; // tslint:disable-next-line: no-shadowed-variable

          return new Promise(function (resolve, reject) {
            if (params.KYCStatus) {
              if (params.KYCStatus !== 2) {
                // console.warn('Your KYC Is Not Approved');
                // this.onErrorMsqDisplay('KYC is required to make Transaction In Wallet to Wallet!');
                _this41.notificationService.showError('KYC is required to make Transaction In Wallet to Wallet!', 'Error'); // Swal.fire('Oops...', 'KYC is required to make Transaction In Wallet to Wallet!', 'error');


                resolve(false);

                _this41.displayKYCPopup();

                _this41.isLoading = false; // this.autoCloseMsqBlock();
              } else {
                // console.warn('Your KYC IS approved');
                resolve(true);
              }
            } else {
              reject('KYC Status Not Found ....');
            }
          });
        }
      }, {
        key: "displayKYCPopup",
        value: function displayKYCPopup() {
          var _this42 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: 'Please update KYC First!',
            text: 'Your KYC is not Verified. You will not be able to make Transaction without KYC Approved!',
            icon: 'error',
            showCancelButton: false,
            confirmButtonText: 'Show me the way',
            cancelButtonText: 'No, keep it',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33'
          }).then(function (result) {
            if (result.value) {
              _this42.globalService.redirect('/home/documents/kyc-upload');
            }
          });
        }
      }, {
        key: "makeWalletToWalletTransaction",
        value: function makeWalletToWalletTransaction(formData) {
          var _this43 = this;

          // console.log('makeWalletTransfer function excuted');
          var params = {
            uReceipt_Email: formData.email,
            uAmount: formData.amount,
            uSender_Email: this.LoggedParams.sProfile.uContactInfo.Email,
            uSender_WalletId: this.LoggedParams.sProfile.sWalletId,
            uReceipt_WalletId: 0,
            DealerId: this.LoggedParams.sProfile.sDealerId,
            RequestId: 0,
            sStatus: 0,
            uComment: 'Wallet to Wallet Transfer',
            uTimestamp: {
              sCreadedOn: 0,
              sUpdatedOn: 0,
              sCreadedOn_Str: '0',
              sUpdatedOn_Str: '0'
            }
          };
          this.globalService.makeW2WTransfer(params).subscribe(function (data) {
            if (data.oRet.Result === true) {
              //  this.onSuccessMsqDisplay(data.oRet.MSG_USER);
              //  this.onSuccessMsqDisplay(`You have Successfully transfer ${formData.amount} dollor to ${formData.email}`);
              // tslint:disable-next-line: max-line-length
              if (_this43.transactionSetting === 0) {
                _this43.notificationService.showSuccess('Your Request has been generated, Please wait for admin Approval.', 'Success');
              } else {
                // tslint:disable-next-line: max-line-length
                _this43.notificationService.showSuccess("You have Successfully transferred ".concat(formData.amount, " dollor to ").concat(formData.email), 'Success');
              }

              _this43.headerService.getUserWalletDetail();

              _this43.isLoading = false;

              _this43.fundTransactionForm.reset();

              _this43.autoCloseMsqBlock();
            } else {
              // this.onErrorMsqDisplay('Failed To Make Transaction');
              _this43.notificationService.showError('Failed To Make Transaction', 'Error');

              _this43.isLoading = false; // this.autoCloseMsqBlock();
            }
          }, function (err) {
            console.log(err);

            _this43.notificationService.showError('Failed To Make Transaction', 'Error');
          });
        } //  Check Sender and reciever Email ID

      }, {
        key: "isEmailIdSame",
        value: function isEmailIdSame(receiverEmailId) {
          var _this44 = this;

          // tslint:disable-next-line: no-shadowed-variable
          return new Promise(function (resolve, reject) {
            if (receiverEmailId !== _this44.senderEmailId) {
              resolve(true);
            } else {
              // this.onErrorMsqDisplay('Sender and Receiver Email Id could Not be Same !');
              _this44.notificationService.showError('Sender and Receiver Email Id could Not be Same !', 'Error');

              resolve(false);
              _this44.isLoading = false; // this.autoCloseMsqBlock();
            }
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this45 = this;

          this.isLoading = true;
          this.onCloseMsqBlock(); // Get Form Field Data on Submit

          var formData = {
            email: this.fundTransactionForm.value.email,
            amount: this.fundTransactionForm.value.amount
          };

          if (0 >= formData.amount) {
            // this.onErrorMsqDisplay(`${formData.amount} is not a Valid Number in Amount Field`);
            this.notificationService.showError("".concat(formData.amount, " is not a Valid Number in Amount Field"), 'Error');
            this.isLoading = false; // this.autoCloseMsqBlock();

            return;
          }

          this.isEmailIdSame(formData.email).then(function (emailIdreponse) {
            if (emailIdreponse) {
              _this45.isBalanceAvaliable(formData.amount).then(function (BalanceResponse) {
                // console.warn('IsBalance Avaliable = ' + BalanceResponse);
                if (BalanceResponse) {
                  _this45.isKYCRequired().then(function (KYCResponse) {
                    // console.warn('Is KYC Required = ' + KYCResponse);
                    if (KYCResponse) {
                      _this45.isKYCApproved().then(function (approvalReponse) {
                        if (approvalReponse) {
                          // console.log('w2w function excuted');
                          _this45.makeWalletToWalletTransaction(formData);
                        }
                      }).catch(function (err) {
                        console.error(err);

                        _this45.onErrorMsqDisplay(err);
                      });
                    } else {
                      _this45.makeWalletToWalletTransaction(formData); // console.log('w2w function excuted');

                    }
                  }).catch(function (err) {
                    console.error(err);

                    _this45.onErrorMsqDisplay(err);
                  });
                }
              }).catch(function (err) {
                console.error(err);

                _this45.onErrorMsqDisplay(err);
              });
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // this.accountSubscription.unsubscribe();
          this.ledgerDetailscription.unsubscribe();
          this.headerSubscription.unsubscribe();
          this.transactionSubscription.unsubscribe();
        }
      }]);

      return WalletToWalletComponent;
    }();

    WalletToWalletComponent.ɵfac = function WalletToWalletComponent_Factory(t) {
      return new (t || WalletToWalletComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_header_service__WEBPACK_IMPORTED_MODULE_3__["HeaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_order_pipe__WEBPACK_IMPORTED_MODULE_4__["OrderPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]));
    };

    WalletToWalletComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WalletToWalletComponent,
      selectors: [["app-wallet-to-wallet"]],
      viewQuery: function WalletToWalletComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fundTransactionForm = _t.first);
        }
      },
      decls: 69,
      vars: 22,
      consts: [[1, "right-tabBtn-row", "d-none", "d-sm-block", "d-md-block", "d-lg-block"], [1, "btn", "btn-warning", "btn-sm", "font-weight-400", "text-size-13", 3, "click"], ["name", "dollar-sign", 1, "icon-size-18"], ["class", "transaction-form-container", 4, "ngIf"], [1, "tab-inner-content", "px-2", "position-relative"], [1, "history-title"], [1, "wallet_balance"], [2, "color", "#f36"], [2, "color", "#10b759"], [1, "table-container", "table-responsive", "table-responsive", "table-responsive-sm", "mb-3"], [1, "table-filter-area"], [1, "row", "no-gutters"], [1, "col-md-4", "form-inline", "d-none", "d-md-block"], [1, "form-group", "mb-2"], ["for", "entries ", 1, "main-txt-color", "mr-1"], ["id", "entries ", 1, "form-control", "main-txt-color", "bd-color", "shadow-none", 3, "change"], ["selected", ""], ["for", "entries ", 1, "main-txt-color", "ml-1"], [1, "col-md-3", "offset-md-5"], [1, "form-group"], ["type", "text ", "id", "searchText ", "placeholder", "Enter Keyword to search ", 1, "form-control", "main-txt-color", "bd-color", "shadow-none", 3, "ngModel", "ngModelChange"], [1, "table", "table-hover", "main-txt-color", "mb-0"], [1, "table-header-bg", "table-header-color"], [1, "font-weight-500", "bd-color", "text-capitalize", "align-middle", 3, "click"], [1, "font-weight-500", "bd-color", "text-capitalize", "align-middle", "align-middle", 3, "click"], [1, "font-weight-500", "bd-color", "text-capitalize", "align-middle", "text-center", 3, "click"], ["class", "secondary-txt-color ", 4, "ngIf"], ["class", "text-size-17 font-weight-300 text-center p-4", "style", "background: #eff3f6;", 4, "ngIf"], [1, "table-pagination", "text-right", "border-top-0", "pt-4"], [3, "pageChange"], [1, "transaction-form-container"], [1, "traction-from-box", "bg-b"], [1, "heading"], [1, "title"], [1, "row"], [1, "col-md-8"], ["class", "alert alert-success alert-dismissible fade show", "role", "alert", 4, "ngIf"], ["class", "alert alert-danger alert-dismissible fade show", "role", "alert", 4, "ngIf"], [1, "", 3, "ngSubmit"], ["formData", "ngForm"], [1, "col-md-4"], ["for", "email", 1, ""], [1, "asterick"], ["required", "", "email", "", "ngModel", "", "name", "email", "type", "email", "id", "email", "placeholder", "Enter Email Address", 1, "form-control", "main-txt-color", "bd-color", "shadow-none"], ["email", "ngModel"], [1, "form-icon", "text-size-12"], [1, "fas", "fa-envelope"], ["class", "help-block text-danger ", 4, "ngIf"], ["for", "amount", 1, "main-txt-color"], ["min", "1", "pattern", "^\\d+$", "required", "", "ngModel", "", "name", "amount", "type", "number", "id", "amount", "placeholder", "Enter Amount", 1, "form-control", "main-txt-color", "bd-color", "shadow-none"], ["amount", "ngModel"], [1, "position-relative", 2, "padding-top", "29px"], [1, "btn", "btn-primary", "btn-sm", "px-3", "position-relative", 3, "disabled"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show"], ["type", "button", "data-dismiss", "alert", 1, "close"], ["name", "x", 1, "close-btn", 3, "click"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show"], [1, "help-block", "text-danger"], [1, "secondary-txt-color"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["colspan", "9", 1, "align-middle"], [1, "text-size-17", "font-weight-300"], [1, "align-middle"], ["class", "badge badge-warning", 4, "ngIf"], ["class", "badge badge-success", 4, "ngIf"], ["class", "badge badge-info", 4, "ngIf"], ["class", "badge badge-danger", 4, "ngIf"], [1, "text-center", "align-middle"], ["class", "icon-size-20", "name", "message-square", "placement", "top", 3, "tooltip", 4, "ngIf"], ["class", "btn btn-warning btn-sm font-weight-400 text-size-11 btn-sm-padd", "type", "button", 3, "click", 4, "ngIf"], [1, "badge", "badge-warning"], [1, "badge", "badge-success"], [1, "badge", "badge-info"], [1, "badge", "badge-danger"], ["name", "message-square", "placement", "top", 1, "icon-size-20", 3, "tooltip"], ["type", "button", 1, "btn", "btn-warning", "btn-sm", "font-weight-400", "text-size-11", "btn-sm-padd", 3, "click"], [1, "text-size-17", "font-weight-300", "text-center", "p-4", 2, "background", "#eff3f6"]],
      template: function WalletToWalletComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WalletToWalletComponent_Template_button_click_1_listener() {
            return ctx.toggleFormArea();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i-feather", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Make a Transaction ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WalletToWalletComponent_div_4_Template, 43, 7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Your Transaction History ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Pending : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Wallet Balance : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "strong", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Show ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "select", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function WalletToWalletComponent_Template_select_change_24_listener($event) {
            return ctx.getLedgerDetails($event.target.value, true);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "15");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "20");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "25");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "30");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "50");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Entries");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WalletToWalletComponent_Template_input_ngModelChange_45_listener($event) {
            return ctx.searchText = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "table", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "thead", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WalletToWalletComponent_Template_th_click_49_listener() {
            return ctx.setOrder("sCreadedOn_Str");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Transaction Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WalletToWalletComponent_Template_th_click_51_listener() {
            return ctx.setOrder("Account");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Timestamp");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WalletToWalletComponent_Template_th_click_53_listener() {
            return ctx.setOrder("Value");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WalletToWalletComponent_Template_th_click_55_listener() {
            return ctx.setOrder("oPerc_Value");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Withdraw");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WalletToWalletComponent_Template_th_click_57_listener() {
            return ctx.setOrder("oAction");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Deposit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WalletToWalletComponent_Template_th_click_59_listener() {
            return ctx.setOrder("oAlert_Disable_Trade");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "th", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WalletToWalletComponent_Template_th_click_61_listener() {
            return ctx.setOrder("oAlert_Mail");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Remarks");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "th", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WalletToWalletComponent_Template_th_click_63_listener() {
            return ctx.setOrder("oUP_DOWN");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, WalletToWalletComponent_tbody_65_Template, 6, 16, "tbody", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, WalletToWalletComponent_div_66_Template, 2, 0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "pagination-controls", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function WalletToWalletComponent_Template_pagination_controls_pageChange_68_listener($event) {
            return ctx.getLedgerDetails($event, false);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isVisibleFormArea);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx.pendingBalance, ".00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx.walletBalance, ".00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchText);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.IsDataNotFound);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.IsDataNotFound);
        }
      },
      directives: [angular_feather__WEBPACK_IMPORTED_MODULE_6__["ɵa"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["PaginationControlsComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["PatternValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["TooltipDirective"]],
      pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["PaginatePipe"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_11__["Ng2SearchPipe"], ngx_order_pipe__WEBPACK_IMPORTED_MODULE_4__["OrderPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]],
      styles: [".transaction-form-container[_ngcontent-%COMP%] {\n  padding: 10px 6px;\n}\n.transaction-form-container[_ngcontent-%COMP%]   .traction-from-box[_ngcontent-%COMP%] {\n  padding: 15px 15px;\n  border-radius: 4px;\n  -webkit-transition: all 5s ease-out;\n  transition: all 5s ease-out;\n}\n.transaction-form-container[_ngcontent-%COMP%]   .traction-from-box[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  line-height: 20px;\n  margin-bottom: 15px;\n}\n.transaction-form-container[_ngcontent-%COMP%]   .traction-from-box[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 400;\n}\n.transaction-form-container[_ngcontent-%COMP%]   .traction-from-box[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.transaction-form-container[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  position: relative;\n  top: -3px;\n}\n.right-tabBtn-row[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 20px;\n  top: 5px;\n}\n.table-bordered[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-bordered[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom-width: 1px;\n  padding: 0.5rem;\n}\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-right: 15px;\n  margin-left: 15px;\n}\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\nthead[_ngcontent-%COMP%]   th.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n.tab-inner-content[_ngcontent-%COMP%] {\n  padding: 6px 5px;\n}\ntbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(even) {\n  background: #f8f9fa;\n}\ntbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(odd) {\n  background: #eff3f6;\n}\n.table-pagination[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  padding-top: 1rem;\n  background: #eff3f6;\n}\n@-webkit-keyframes spinner {\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes spinner {\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.btn-spinner[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 255, 0.6);\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.btn-spinner[_ngcontent-%COMP%]:before {\n  content: \"\";\n  box-sizing: border-box;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 20px;\n  height: 20px;\n  margin-top: -10px;\n  margin-left: -10px;\n  border-radius: 50%;\n  border: 2px solid #ffffff;\n  border-top-color: #000000;\n  -webkit-animation: spinner 0.8s linear infinite;\n          animation: spinner 0.8s linear infinite;\n}\n.table-filter-area[_ngcontent-%COMP%] {\n  position: relative;\n  background: #eff3f6;\n  padding: 15px;\n  border-bottom: 0px;\n  border-radius: 4px 4px 0 0;\n  padding-bottom: 0px;\n  top: 6px;\n}\n.swap-img-container[_ngcontent-%COMP%] {\n  background: #f3cf65;\n  padding: 2px 6px;\n  border-radius: 50%;\n}\n.swap-img-container[_ngcontent-%COMP%]   .swap-img[_ngcontent-%COMP%] {\n  width: 20px;\n  position: relative;\n  top: -1px;\n}\n.material-icons[_ngcontent-%COMP%] {\n  font-size: 24px;\n  position: relative;\n  top: 5px;\n  margin-right: 2px;\n  color: #007bff;\n}\n.history-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding: 10px 0;\n  font-weight: 400;\n  padding-top: 0px;\n}\ntable[_ngcontent-%COMP%] {\n  border-collapse: separate;\n  border-spacing: 0 6px;\n}\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-bottom: 0px solid #dee2e6;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-top: 0px solid #dee2e6;\n}\n.ngx-pagination[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-bottom: 0;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.45em 0.8em;\n  font-size: 75%;\n  font-weight: 500;\n}\n.wallet_balance[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 15px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row;\n}\n.wallet_balance[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  padding: 0 10px;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-top: 8px !important;\n  padding-bottom: 8px !important;\n  font-size: 13px;\n}\n.btn-sm-padd[_ngcontent-%COMP%] {\n  padding: 1px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2xpZW50LWNvcmUvZnVuZC1tYW5hZ2VtZW50L2Z1bmQtbWFuYWdlbWVudC1jb3JlL2Z1bmQtdHJhbnNmZXIvd2FsbGV0LXRvLXdhbGxldC9GOlxcbmV3dHJhZGVyXFx0cmFkZXI0LTUvc3JjXFxhcHBcXHBhZ2VzXFxjbGllbnQtY29yZVxcZnVuZC1tYW5hZ2VtZW50XFxmdW5kLW1hbmFnZW1lbnQtY29yZVxcZnVuZC10cmFuc2Zlclxcd2FsbGV0LXRvLXdhbGxldFxcd2FsbGV0LXRvLXdhbGxldC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2xpZW50LWNvcmUvZnVuZC1tYW5hZ2VtZW50L2Z1bmQtbWFuYWdlbWVudC1jb3JlL2Z1bmQtdHJhbnNmZXIvd2FsbGV0LXRvLXdhbGxldC93YWxsZXQtdG8td2FsbGV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUNDSjtBREFJO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUVBLG1DQUFBO0VBQUEsMkJBQUE7QUNDUjtBREFRO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtBQ0VaO0FERFk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNHaEI7QUREWTtFQUNJLGVBQUE7QUNHaEI7QURDSTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtBQ0NSO0FER0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0FDQUo7QURHQTs7RUFFSSx3QkFBQTtFQUNBLGVBQUE7QUNBSjtBREdBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNBSjtBRENJO0VBQ0ksa0JBQUE7QUNDUjtBREVRO0VBQ0ksbUJBQUE7QUNBWjtBREtBO0VBQ0ksZ0JBQUE7QUNGSjtBREtBO0VBQ0ksbUJBQUE7QUNGSjtBREtBO0VBQ0ksbUJBQUE7QUNGSjtBREtBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDRko7QURLQTtFQUNJO0lBQ0ksaUNBQUE7WUFBQSx5QkFBQTtFQ0ZOO0FBQ0Y7QUREQTtFQUNJO0lBQ0ksaUNBQUE7WUFBQSx5QkFBQTtFQ0ZOO0FBQ0Y7QURLQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0FDSEo7QURNQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSwrQ0FBQTtVQUFBLHVDQUFBO0FDSEo7QURNQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBRUEsa0JBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQ0pKO0FET0E7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNKSjtBRE1JO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ0pSO0FEUUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDTEo7QURRQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0xKO0FEUUE7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0FDTEo7QURRQTtFQUNJLGdDQUFBO0FDTEo7QURRQTs7RUFFSSw2QkFBQTtBQ0xKO0FEUUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUNMSjtBRFFBO0VBQ0kscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0xKO0FEUUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLGNBQUE7QUNMSjtBRE1JO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0pSO0FEUUE7O0VBRUksMkJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUNMSjtBRFFBO0VBQ0ksaUJBQUE7QUNMSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NsaWVudC1jb3JlL2Z1bmQtbWFuYWdlbWVudC9mdW5kLW1hbmFnZW1lbnQtY29yZS9mdW5kLXRyYW5zZmVyL3dhbGxldC10by13YWxsZXQvd2FsbGV0LXRvLXdhbGxldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50cmFuc2FjdGlvbi1mb3JtLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDZweDtcclxuICAgIC50cmFjdGlvbi1mcm9tLWJveCB7XHJcbiAgICAgICAgcGFkZGluZzogMTVweCAxNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjZGZlMmU0O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCA1cyBlYXNlLW91dDtcclxuICAgICAgICAuaGVhZGluZyB7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzbWFsbCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2xvc2UtYnRuIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdG9wOiAtM3B4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ucmlnaHQtdGFiQnRuLXJvdyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMjBweDtcclxuICAgIHRvcDogNXB4O1xyXG59XHJcblxyXG4udGFibGUtYm9yZGVyZWQgdGhlYWQgdGgsXHJcbi50YWJsZS1ib3JkZXJlZCB0aGVhZCB0ZCB7XHJcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XHJcbiAgICBwYWRkaW5nOiAuNTByZW07XHJcbn1cclxuXHJcbnRoZWFkIHRoIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgfVxyXG4gICAgJi5hY3RpdmUge1xyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnRhYi1pbm5lci1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDZweCA1cHg7XHJcbn1cclxuXHJcbnRib2R5PnRyOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjhmOWZhXHJcbn1cclxuXHJcbnRib2R5PnRyOm50aC1jaGlsZChvZGQpIHtcclxuICAgIGJhY2tncm91bmQ6ICNlZmYzZjZcclxufVxyXG5cclxuLnRhYmxlLXBhZ2luYXRpb24ge1xyXG4gICAgcGFkZGluZzogMC43NXJlbTtcclxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gICAgYmFja2dyb3VuZDogI2VmZjNmNjtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzcGlubmVyIHtcclxuICAgIHRvIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYnRuLXNwaW5uZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDI1NSwgMC42KTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbn1cclxuXHJcbi5idG4tc3Bpbm5lcjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZmZmZjtcclxuICAgIGJvcmRlci10b3AtY29sb3I6ICMwMDAwMDA7XHJcbiAgICBhbmltYXRpb246IHNwaW5uZXIgLjhzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuLnRhYmxlLWZpbHRlci1hcmVhIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQ6ICNlZmYzZjY7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcclxuICAgIGJvcmRlci1ib3R0b206IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMCAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgIHRvcDogNnB4O1xyXG59XHJcblxyXG4uc3dhcC1pbWctY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmM2NmNjU7XHJcbiAgICBwYWRkaW5nOiAycHggNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgLy8gbWFyZ2luOiAwIDRweDtcclxuICAgIC5zd2FwLWltZyB7XHJcbiAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRvcDogLTFweDtcclxuICAgIH1cclxufVxyXG5cclxuLm1hdGVyaWFsLWljb25zIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcbiAgICBjb2xvcjogIzAwN2JmZjtcclxufVxyXG5cclxuLmhpc3RvcnktdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XHJcbiAgICBib3JkZXItc3BhY2luZzogMCA2cHg7XHJcbn1cclxuXHJcbi50YWJsZSB0aGVhZCB0aCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAwcHggc29saWQgI2RlZTJlNjtcclxufVxyXG5cclxuLnRhYmxlIHRoLFxyXG4udGFibGUgdGQge1xyXG4gICAgYm9yZGVyLXRvcDogMHB4IHNvbGlkICNkZWUyZTY7XHJcbn1cclxuXHJcbi5uZ3gtcGFnaW5hdGlvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5iYWRnZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAwLjQ1ZW0gMC44ZW07XHJcbiAgICBmb250LXNpemU6IDc1JTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi53YWxsZXRfYmFsYW5jZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICByaWdodDogMTVweDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4udGFibGUgdGgsXHJcbi50YWJsZSB0ZCB7XHJcbiAgICBwYWRkaW5nLXRvcDogOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbi5idG4tc20tcGFkZCB7XHJcbiAgICBwYWRkaW5nOiAxcHggMTBweDtcclxufSIsIi50cmFuc2FjdGlvbi1mb3JtLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDEwcHggNnB4O1xufVxuLnRyYW5zYWN0aW9uLWZvcm0tY29udGFpbmVyIC50cmFjdGlvbi1mcm9tLWJveCB7XG4gIHBhZGRpbmc6IDE1cHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgNXMgZWFzZS1vdXQ7XG59XG4udHJhbnNhY3Rpb24tZm9ybS1jb250YWluZXIgLnRyYWN0aW9uLWZyb20tYm94IC5oZWFkaW5nIHtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4udHJhbnNhY3Rpb24tZm9ybS1jb250YWluZXIgLnRyYWN0aW9uLWZyb20tYm94IC5oZWFkaW5nIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi50cmFuc2FjdGlvbi1mb3JtLWNvbnRhaW5lciAudHJhY3Rpb24tZnJvbS1ib3ggLmhlYWRpbmcgc21hbGwge1xuICBmb250LXNpemU6IDEycHg7XG59XG4udHJhbnNhY3Rpb24tZm9ybS1jb250YWluZXIgLmNsb3NlLWJ0biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtM3B4O1xufVxuXG4ucmlnaHQtdGFiQnRuLXJvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwcHg7XG4gIHRvcDogNXB4O1xufVxuXG4udGFibGUtYm9yZGVyZWQgdGhlYWQgdGgsXG4udGFibGUtYm9yZGVyZWQgdGhlYWQgdGQge1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbn1cblxudGhlYWQgdGgge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG50aGVhZCB0aCBzcGFuIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxudGhlYWQgdGguYWN0aXZlIHNwYW4ge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4udGFiLWlubmVyLWNvbnRlbnQge1xuICBwYWRkaW5nOiA2cHggNXB4O1xufVxuXG50Ym9keSA+IHRyOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG59XG5cbnRib2R5ID4gdHI6bnRoLWNoaWxkKG9kZCkge1xuICBiYWNrZ3JvdW5kOiAjZWZmM2Y2O1xufVxuXG4udGFibGUtcGFnaW5hdGlvbiB7XG4gIHBhZGRpbmc6IDAuNzVyZW07XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xuICBiYWNrZ3JvdW5kOiAjZWZmM2Y2O1xufVxuXG5Aa2V5ZnJhbWVzIHNwaW5uZXIge1xuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuLmJ0bi1zcGlubmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAyNTUsIDAuNik7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xufVxuXG4uYnRuLXNwaW5uZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmZmZmY7XG4gIGJvcmRlci10b3AtY29sb3I6ICMwMDAwMDA7XG4gIGFuaW1hdGlvbjogc3Bpbm5lciAwLjhzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuLnRhYmxlLWZpbHRlci1hcmVhIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjZWZmM2Y2O1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXItYm90dG9tOiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMCAwO1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICB0b3A6IDZweDtcbn1cblxuLnN3YXAtaW1nLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6ICNmM2NmNjU7XG4gIHBhZGRpbmc6IDJweCA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5zd2FwLWltZy1jb250YWluZXIgLnN3YXAtaW1nIHtcbiAgd2lkdGg6IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMXB4O1xufVxuXG4ubWF0ZXJpYWwtaWNvbnMge1xuICBmb250LXNpemU6IDI0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA1cHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBjb2xvcjogIzAwN2JmZjtcbn1cblxuLmhpc3RvcnktdGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgcGFkZGluZy10b3A6IDBweDtcbn1cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuICBib3JkZXItc3BhY2luZzogMCA2cHg7XG59XG5cbi50YWJsZSB0aGVhZCB0aCB7XG4gIGJvcmRlci1ib3R0b206IDBweCBzb2xpZCAjZGVlMmU2O1xufVxuXG4udGFibGUgdGgsXG4udGFibGUgdGQge1xuICBib3JkZXItdG9wOiAwcHggc29saWQgI2RlZTJlNjtcbn1cblxuLm5neC1wYWdpbmF0aW9uIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5iYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMC40NWVtIDAuOGVtO1xuICBmb250LXNpemU6IDc1JTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLndhbGxldF9iYWxhbmNlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAxNXB4O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3c7XG59XG4ud2FsbGV0X2JhbGFuY2UgcCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuXG4udGFibGUgdGgsXG4udGFibGUgdGQge1xuICBwYWRkaW5nLXRvcDogOHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiA4cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uYnRuLXNtLXBhZGQge1xuICBwYWRkaW5nOiAxcHggMTBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WalletToWalletComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-wallet-to-wallet',
          templateUrl: './wallet-to-wallet.component.html',
          styleUrls: ['./wallet-to-wallet.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_services_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"]
        }, {
          type: _shared_services_header_service__WEBPACK_IMPORTED_MODULE_3__["HeaderService"]
        }, {
          type: ngx_order_pipe__WEBPACK_IMPORTED_MODULE_4__["OrderPipe"]
        }, {
          type: _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]
        }];
      }, {
        fundTransactionForm: [{
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
  "./src/app/pages/client-core/fund-management/fund-management-core/fund-withdraw/fund-withdraw.component.ts":
  /*!*****************************************************************************************************************!*\
    !*** ./src/app/pages/client-core/fund-management/fund-management-core/fund-withdraw/fund-withdraw.component.ts ***!
    \*****************************************************************************************************************/

  /*! exports provided: FundWithdrawComponent */

  /***/
  function srcAppPagesClientCoreFundManagementFundManagementCoreFundWithdrawFundWithdrawComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FundWithdrawComponent", function () {
      return FundWithdrawComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_models_withdraw_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../../shared/models/withdraw.modal */
    "./src/app/shared/models/withdraw.modal.ts");
    /* harmony import */


    var _shared_services_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../shared/services/global.service */
    "./src/app/shared/services/global.service.ts");
    /* harmony import */


    var _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../shared/services/notification.service */
    "./src/app/shared/services/notification.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var _c0 = ["autoShownModal"];

    var _c1 = function _c1() {
      return {
        show: true
      };
    };

    function FundWithdrawComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r383 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15, 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onHidden", function FundWithdrawComponent_div_9_Template_div_onHidden_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r383);

          var ctx_r382 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r382.onHidden();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Withdraw from wallet ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FundWithdrawComponent_div_9_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r383);

          var ctx_r384 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r384.hideModal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", null, 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Amount");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FundWithdrawComponent_div_9_Template_input_ngModelChange_16_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r383);

          var ctx_r385 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r385.withdraw.uAmount = $event;
        })("keypress", function FundWithdrawComponent_div_9_Template_input_keypress_16_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r383);

          var ctx_r386 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r386.numberOnly($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Payment Details");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "textarea", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FundWithdrawComponent_div_9_Template_textarea_ngModelChange_20_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r383);

          var ctx_r387 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r387.withdraw.uComment = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FundWithdrawComponent_div_9_Template_button_click_22_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r383);

          var _r381 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

          var ctx_r388 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r388.makeWithdraw(_r381);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Submit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r381 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

        var ctx_r378 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r378.withdraw.uAmount);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r378.withdraw.uComment);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r381.invalid);
      }
    }

    function FundWithdrawComponent_tr_23_Template(rf, ctx) {
      if (rf & 1) {
        var _r391 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Manual");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "---");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "---");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FundWithdrawComponent_tr_23_Template_button_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r391);

          var payment_r389 = ctx.$implicit;

          var ctx_r390 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r390.showModal(payment_r389.uPaySource);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Withdraw");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var FundWithdrawComponent =
    /*#__PURE__*/
    function () {
      function FundWithdrawComponent(global, notificationService, http) {
        _classCallCheck(this, FundWithdrawComponent);

        this.global = global;
        this.notificationService = notificationService;
        this.http = http;
        this.paymentMethodAll = [];
        this.withdraw = new _shared_models_withdraw_modal__WEBPACK_IMPORTED_MODULE_1__["WithDrawModalData"]();
        this.balanceError = false;
        this.kycSettingError = false;
        this.kycStatusError = false;
        this.withDrawSuccess = false;
        this.withDrawSuccessMsg = false;
        this.isModalShown = false;
        this.kycStatus = JSON.parse(localStorage.getItem('LoggedUser'));
        this.withdraw.sWalletId = this.global.localDealerwallet;
        this.withdraw.sDealerID = this.global.localDealerCode;
      }

      _createClass(FundWithdrawComponent, [{
        key: "showModal",
        value: function showModal(uPaySource) {
          this.isModalShown = true;
          this.withdraw.uSource = uPaySource;
        }
      }, {
        key: "hideModal",
        value: function hideModal() {
          this.autoShownModal.hide();
        }
      }, {
        key: "onHidden",
        value: function onHidden() {
          this.isModalShown = false;
        }
      }, {
        key: "getPaymentGatewayManual",
        value: function getPaymentGatewayManual() {
          var _this46 = this;

          var data = {
            DealerId: 1001
          };
          this.global.getManulGateway(data).subscribe(function (res) {
            _this46.paymentMethodAll = res;
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "makeWithdraw",
        value: function makeWithdraw(withdrawForm) {
          var _this47 = this;

          console.log(withdrawForm);
          var walletParans = {
            sWalletId: this.global.localDealerwallet
          };
          this.global.getWalletInfo(walletParans).subscribe(function (resp) {
            if (resp.uBalance > _this47.withdraw.uAmount && _this47.withdraw.uAmount > 0) {
              var kycSettingParams = {
                Dealer: _this47.global.localDealerCode
              };

              _this47.global.getKycset(kycSettingParams).subscribe(function (kycset) {
                if (kycset == 3 && _this47.kycStatus.sProfile.uKYCStatus !== 2) {
                  _this47.kycSettingError = true;

                  _this47.notificationService.showWarning('Please update kyc for generating withdraw request', 'Warning');

                  setTimeout(function () {
                    _this47.kycSettingError = false;
                  }, 10000);
                } else {
                  _this47.global.makeManualWithdraw(_this47.withdraw).subscribe(function (withdraw) {
                    _this47.withDrawSuccess = withdraw.MSG_USER;
                    _this47.withDrawSuccessMsg = true; // tslint:disable-next-line: max-line-length

                    _this47.notificationService.showSuccess('Your withdraw request has been generated successfully. please wait for admin approvel', 'Success');

                    setTimeout(function () {
                      _this47.withDrawSuccessMsg = false;
                    }, 10000);
                  }, function (err) {
                    console.log(err);

                    _this47.notificationService.showError('unable to generate request for withdraw wallet', 'Error');
                  });
                }
              });
            } else {
              _this47.kycSettingError = false;

              _this47.notificationService.showError('Please enter a valid amount', 'Error');
            }
          });
        }
      }, {
        key: "numberOnly",
        value: function numberOnly(event) {
          var charCode = event.which ? event.which : event.keyCode;

          if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
          }

          return true;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getPaymentGatewayManual();
        }
      }]);

      return FundWithdrawComponent;
    }();

    FundWithdrawComponent.ɵfac = function FundWithdrawComponent_Factory(t) {
      return new (t || FundWithdrawComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
    };

    FundWithdrawComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FundWithdrawComponent,
      selectors: [["app-fund-withdraw"]],
      viewQuery: function FundWithdrawComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.autoShownModal = _t.first);
        }
      },
      decls: 24,
      vars: 2,
      consts: [[1, "small-content-section", "bg-f"], [1, "history-title", "px-3", "border-bottom"], [1, "row"], [1, "col-md-12"], [1, "card", "border-0"], [1, "card-body", "border-0", "p-0"], [1, "tabs-container"], [1, "tabs-body", "p-3"], ["bsModal", "", "class", "modal fade", "tabindex", "-1", "role", "dialog", "aria-labelledby", "dialog-auto-name", 3, "config", "onHidden", 4, "ngIf"], [1, "table-container", "table-responsive", "mb-3"], [1, "table", "table-hover", "main-txt-color", "mb-0"], [1, "table-header-bg", "table-header-color"], [1, "font-weight-500", "bd-color", "text-capitalize", "align-middle"], [1, "secondary-txt-color"], [4, "ngFor", "ngForOf"], ["bsModal", "", "tabindex", "-1", "role", "dialog", "aria-labelledby", "dialog-auto-name", 1, "modal", "fade", 3, "config", "onHidden"], ["autoShownModal", "bs-modal"], [1, "modal-dialog", "modal-sm"], [1, "modal-content"], [1, "modal-header"], ["id", "dialog-auto-name", 1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["withdrawForm", "ngForm"], [1, "form-group"], ["for", "pwd"], ["type", "text", "id", "pwd", "placeholder", "Enter Amount", "name", "uAmount", "min", "1", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange", "keypress"], ["name", "uComment", "required", "", 1, "form-control", 2, "height", "100px", "width", "100%", "resize", "vertical", 3, "ngModel", "ngModelChange"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", "ml-1", 3, "disabled", "click"], [1, "btn", "btn-primary", "btn-sm", "ml-1", 3, "click"]],
      template: function FundWithdrawComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Withdraw From wallet ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FundWithdrawComponent_div_9_Template, 24, 5, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "thead", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Withdraw Method");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Fee/Commission");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Processing Time");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Withdraw");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tbody", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, FundWithdrawComponent_tr_23_Template, 10, 0, "tr", 14);

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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isModalShown);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.paymentMethodAll);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["ModalDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]],
      styles: [".transaction-form-container[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n}\n.transaction-form-container[_ngcontent-%COMP%]   .traction-from-box[_ngcontent-%COMP%] {\n  padding: 15px 15px;\n  border-radius: 4px;\n  border: 1px solid #dfe2e4;\n  -webkit-transition: all 5s ease-out;\n  transition: all 5s ease-out;\n}\n.transaction-form-container[_ngcontent-%COMP%]   .traction-from-box[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  line-height: 20px;\n  margin-bottom: 15px;\n}\n.transaction-form-container[_ngcontent-%COMP%]   .traction-from-box[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 19px;\n  font-weight: 300;\n}\n.transaction-form-container[_ngcontent-%COMP%]   .traction-from-box[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.transaction-form-container[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  position: relative;\n  top: -3px;\n}\n.right-tabBtn-row[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 20px;\n  top: 7px;\n}\n.table-bordered[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-bordered[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom-width: 1px;\n  padding: 0.5rem;\n}\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-right: 15px;\n  margin-left: 15px;\n}\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\nthead[_ngcontent-%COMP%]   th.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n.tab-inner-content[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n}\ntbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(even) {\n  background: #f8f9fa;\n}\ntbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(odd) {\n  background: #eff3f6;\n}\n.table-pagination[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  padding-top: 1rem;\n  background: #eff3f6;\n}\n@-webkit-keyframes spinner {\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes spinner {\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.btn-spinner[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 255, 0.6);\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.btn-spinner[_ngcontent-%COMP%]:before {\n  content: \"\";\n  box-sizing: border-box;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 20px;\n  height: 20px;\n  margin-top: -10px;\n  margin-left: -10px;\n  border-radius: 50%;\n  border: 2px solid #ffffff;\n  border-top-color: #000000;\n  -webkit-animation: spinner 0.8s linear infinite;\n          animation: spinner 0.8s linear infinite;\n}\n.table-filter-area[_ngcontent-%COMP%] {\n  position: relative;\n  background: #eff3f6;\n  padding: 15px;\n  border: 1px solid #dee2e6;\n  border-bottom: 0px;\n  border-radius: 4px 4px 0 0;\n  padding-bottom: 0px;\n}\n.swap-img-container[_ngcontent-%COMP%] {\n  background: #f3cf65;\n  padding: 2px 6px;\n  border-radius: 50%;\n}\n.swap-img-container[_ngcontent-%COMP%]   .swap-img[_ngcontent-%COMP%] {\n  width: 20px;\n  position: relative;\n  top: -1px;\n}\n.material-icons[_ngcontent-%COMP%] {\n  font-size: 24px;\n  position: relative;\n  top: 5px;\n  margin-right: 2px;\n  color: #007bff;\n}\n.history-title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  padding: 10px 0;\n  font-weight: 400;\n}\n.gateway_img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n}\ntbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(odd) {\n  background: #eff3f6;\n}\ntbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(even) {\n  background: #f8f9fa;\n}\ntable[_ngcontent-%COMP%] {\n  border-collapse: separate;\n  border-spacing: 0 6px;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-top: 0px solid #dee2e6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2xpZW50LWNvcmUvZnVuZC1tYW5hZ2VtZW50L2Z1bmQtbWFuYWdlbWVudC1jb3JlL2Z1bmQtd2l0aGRyYXcvRjpcXG5ld3RyYWRlclxcdHJhZGVyNC01L3NyY1xcYXBwXFxwYWdlc1xcY2xpZW50LWNvcmVcXGZ1bmQtbWFuYWdlbWVudFxcZnVuZC1tYW5hZ2VtZW50LWNvcmVcXGZ1bmQtd2l0aGRyYXdcXGZ1bmQtd2l0aGRyYXcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NsaWVudC1jb3JlL2Z1bmQtbWFuYWdlbWVudC9mdW5kLW1hbmFnZW1lbnQtY29yZS9mdW5kLXdpdGhkcmF3L2Z1bmQtd2l0aGRyYXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUM7RUFDSSxrQkFBQTtBQ0NMO0FEQUs7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQ0FBQTtFQUFBLDJCQUFBO0FDRVQ7QUREUztFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7QUNHYjtBREZhO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDSWpCO0FERmE7RUFDSSxlQUFBO0FDSWpCO0FEQUs7RUFDSSxrQkFBQTtFQUNBLFNBQUE7QUNFVDtBREVDO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtBQ0NMO0FERUM7O0VBRUksd0JBQUE7RUFDQSxlQUFBO0FDQ0w7QURFQztFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDQ0w7QURBSztFQUNJLGtCQUFBO0FDRVQ7QURDUztFQUNJLG1CQUFBO0FDQ2I7QURJQztFQUNJLGdCQUFBO0FDREw7QURJQztFQUNJLG1CQUFBO0FDREw7QURJQztFQUNJLG1CQUFBO0FDREw7QURJQztFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0RMO0FESUM7RUFDSTtJQUNJLGlDQUFBO1lBQUEseUJBQUE7RUNEUDtBQUNGO0FERkM7RUFDSTtJQUNJLGlDQUFBO1lBQUEseUJBQUE7RUNEUDtBQUNGO0FESUM7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtBQ0ZMO0FES0M7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsK0NBQUE7VUFBQSx1Q0FBQTtBQ0ZMO0FES0M7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0FDRkw7QURLQztFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0ZMO0FESUs7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FDRlQ7QURNQztFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNITDtBRE1DO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0hMO0FET0s7RUFDSSxZQUFBO0FDSlQ7QURRQztFQUNJLG1CQUFBO0FDTEw7QURRQztFQUNJLG1CQUFBO0FDTEw7QURRQztFQUNJLHlCQUFBO0VBQ0EscUJBQUE7QUNMTDtBRFFDOztFQUVJLDZCQUFBO0FDTEwiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jbGllbnQtY29yZS9mdW5kLW1hbmFnZW1lbnQvZnVuZC1tYW5hZ2VtZW50LWNvcmUvZnVuZC13aXRoZHJhdy9mdW5kLXdpdGhkcmF3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIC50cmFuc2FjdGlvbi1mb3JtLWNvbnRhaW5lciB7XHJcbiAgICAgcGFkZGluZzogMTBweCAxMnB4O1xyXG4gICAgIC50cmFjdGlvbi1mcm9tLWJveCB7XHJcbiAgICAgICAgIHBhZGRpbmc6IDE1cHggMTVweDtcclxuICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGZlMmU0O1xyXG4gICAgICAgICB0cmFuc2l0aW9uOiBhbGwgNXMgZWFzZS1vdXQ7XHJcbiAgICAgICAgIC5oZWFkaW5nIHtcclxuICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBzbWFsbCB7XHJcbiAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICAgfVxyXG4gICAgIC5jbG9zZS1idG4ge1xyXG4gICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgIHRvcDogLTNweDtcclxuICAgICB9XHJcbiB9XHJcbiBcclxuIC5yaWdodC10YWJCdG4tcm93IHtcclxuICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgcmlnaHQ6IDIwcHg7XHJcbiAgICAgdG9wOiA3cHg7XHJcbiB9XHJcbiBcclxuIC50YWJsZS1ib3JkZXJlZCB0aGVhZCB0aCxcclxuIC50YWJsZS1ib3JkZXJlZCB0aGVhZCB0ZCB7XHJcbiAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xyXG4gICAgIHBhZGRpbmc6IC41MHJlbTtcclxuIH1cclxuIFxyXG4gdGhlYWQgdGgge1xyXG4gICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgc3BhbiB7XHJcbiAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICB9XHJcbiAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgICAgIH1cclxuICAgICB9XHJcbiB9XHJcbiBcclxuIC50YWItaW5uZXItY29udGVudCB7XHJcbiAgICAgcGFkZGluZzogLjc1cmVtO1xyXG4gfVxyXG4gXHJcbiB0Ym9keT50cjpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgIGJhY2tncm91bmQ6ICNmOGY5ZmFcclxuIH1cclxuIFxyXG4gdGJvZHk+dHI6bnRoLWNoaWxkKG9kZCkge1xyXG4gICAgIGJhY2tncm91bmQ6ICNlZmYzZjZcclxuIH1cclxuIFxyXG4gLnRhYmxlLXBhZ2luYXRpb24ge1xyXG4gICAgIHBhZGRpbmc6IDAuNzVyZW07XHJcbiAgICAgcGFkZGluZy10b3A6IDFyZW07XHJcbiAgICAgYmFja2dyb3VuZDogI2VmZjNmNjtcclxuIH1cclxuIFxyXG4gQGtleWZyYW1lcyBzcGlubmVyIHtcclxuICAgICB0byB7XHJcbiAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgfVxyXG4gfVxyXG4gXHJcbiAuYnRuLXNwaW5uZXIge1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgIGhlaWdodDogMTAwJTtcclxuICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDI1NSwgMC42KTtcclxuICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgbGVmdDogMDtcclxuICAgICB0b3A6IDA7XHJcbiB9XHJcbiBcclxuIC5idG4tc3Bpbm5lcjpiZWZvcmUge1xyXG4gICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgIHRvcDogNTAlO1xyXG4gICAgIGxlZnQ6IDUwJTtcclxuICAgICB3aWR0aDogMjBweDtcclxuICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG4gICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmO1xyXG4gICAgIGJvcmRlci10b3AtY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgYW5pbWF0aW9uOiBzcGlubmVyIC44cyBsaW5lYXIgaW5maW5pdGU7XHJcbiB9XHJcbiBcclxuIC50YWJsZS1maWx0ZXItYXJlYSB7XHJcbiAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgIGJhY2tncm91bmQ6ICNlZmYzZjY7XHJcbiAgICAgcGFkZGluZzogMTVweDtcclxuICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gICAgIGJvcmRlci1ib3R0b206IDBweDtcclxuICAgICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcclxuICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gfVxyXG4gXHJcbiAuc3dhcC1pbWctY29udGFpbmVyIHtcclxuICAgICBiYWNrZ3JvdW5kOiAjZjNjZjY1O1xyXG4gICAgIHBhZGRpbmc6IDJweCA2cHg7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgIC8vIG1hcmdpbjogMCA0cHg7XHJcbiAgICAgLnN3YXAtaW1nIHtcclxuICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgdG9wOiAtMXB4O1xyXG4gICAgIH1cclxuIH1cclxuIFxyXG4gLm1hdGVyaWFsLWljb25zIHtcclxuICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgIHRvcDogNXB4O1xyXG4gICAgIG1hcmdpbi1yaWdodDogMnB4O1xyXG4gICAgIGNvbG9yOiAjMDA3YmZmO1xyXG4gfVxyXG4gXHJcbiAuaGlzdG9yeS10aXRsZSB7XHJcbiAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gfVxyXG4gXHJcbiAuZ2F0ZXdheV9pbWcge1xyXG4gICAgIGltZyB7XHJcbiAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICB9XHJcbiB9XHJcbiBcclxuIHRib2R5PnRyOm50aC1jaGlsZChvZGQpIHtcclxuICAgICBiYWNrZ3JvdW5kOiAjZWZmM2Y2O1xyXG4gfVxyXG4gXHJcbiB0Ym9keT50cjpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiB9XHJcbiBcclxuIHRhYmxlIHtcclxuICAgICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xyXG4gICAgIGJvcmRlci1zcGFjaW5nOiAwIDZweDtcclxuIH1cclxuIFxyXG4gLnRhYmxlIHRoLFxyXG4gLnRhYmxlIHRkIHtcclxuICAgICBib3JkZXItdG9wOiAwcHggc29saWQgI2RlZTJlNjtcclxuIH0iLCIudHJhbnNhY3Rpb24tZm9ybS1jb250YWluZXIge1xuICBwYWRkaW5nOiAxMHB4IDEycHg7XG59XG4udHJhbnNhY3Rpb24tZm9ybS1jb250YWluZXIgLnRyYWN0aW9uLWZyb20tYm94IHtcbiAgcGFkZGluZzogMTVweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZmUyZTQ7XG4gIHRyYW5zaXRpb246IGFsbCA1cyBlYXNlLW91dDtcbn1cbi50cmFuc2FjdGlvbi1mb3JtLWNvbnRhaW5lciAudHJhY3Rpb24tZnJvbS1ib3ggLmhlYWRpbmcge1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi50cmFuc2FjdGlvbi1mb3JtLWNvbnRhaW5lciAudHJhY3Rpb24tZnJvbS1ib3ggLmhlYWRpbmcgLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLnRyYW5zYWN0aW9uLWZvcm0tY29udGFpbmVyIC50cmFjdGlvbi1mcm9tLWJveCAuaGVhZGluZyBzbWFsbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi50cmFuc2FjdGlvbi1mb3JtLWNvbnRhaW5lciAuY2xvc2UtYnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0zcHg7XG59XG5cbi5yaWdodC10YWJCdG4tcm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbiAgdG9wOiA3cHg7XG59XG5cbi50YWJsZS1ib3JkZXJlZCB0aGVhZCB0aCxcbi50YWJsZS1ib3JkZXJlZCB0aGVhZCB0ZCB7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcbiAgcGFkZGluZzogMC41cmVtO1xufVxuXG50aGVhZCB0aCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cbnRoZWFkIHRoIHNwYW4ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG50aGVhZCB0aC5hY3RpdmUgc3BhbiB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi50YWItaW5uZXItY29udGVudCB7XG4gIHBhZGRpbmc6IDAuNzVyZW07XG59XG5cbnRib2R5ID4gdHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbn1cblxudGJvZHkgPiB0cjpudGgtY2hpbGQob2RkKSB7XG4gIGJhY2tncm91bmQ6ICNlZmYzZjY7XG59XG5cbi50YWJsZS1wYWdpbmF0aW9uIHtcbiAgcGFkZGluZzogMC43NXJlbTtcbiAgcGFkZGluZy10b3A6IDFyZW07XG4gIGJhY2tncm91bmQ6ICNlZmYzZjY7XG59XG5cbkBrZXlmcmFtZXMgc3Bpbm5lciB7XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG4uYnRuLXNwaW5uZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDI1NSwgMC42KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG59XG5cbi5idG4tc3Bpbm5lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZmZmZjtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzAwMDAwMDtcbiAgYW5pbWF0aW9uOiBzcGlubmVyIDAuOHMgbGluZWFyIGluZmluaXRlO1xufVxuXG4udGFibGUtZmlsdGVyLWFyZWEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICNlZmYzZjY7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XG4gIGJvcmRlci1ib3R0b206IDBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG5cbi5zd2FwLWltZy1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiAjZjNjZjY1O1xuICBwYWRkaW5nOiAycHggNnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uc3dhcC1pbWctY29udGFpbmVyIC5zd2FwLWltZyB7XG4gIHdpZHRoOiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTFweDtcbn1cblxuLm1hdGVyaWFsLWljb25zIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgY29sb3I6ICMwMDdiZmY7XG59XG5cbi5oaXN0b3J5LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5nYXRld2F5X2ltZyBpbWcge1xuICB3aWR0aDogMTAwcHg7XG59XG5cbnRib2R5ID4gdHI6bnRoLWNoaWxkKG9kZCkge1xuICBiYWNrZ3JvdW5kOiAjZWZmM2Y2O1xufVxuXG50Ym9keSA+IHRyOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDAgNnB4O1xufVxuXG4udGFibGUgdGgsXG4udGFibGUgdGQge1xuICBib3JkZXItdG9wOiAwcHggc29saWQgI2RlZTJlNjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FundWithdrawComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-fund-withdraw',
          templateUrl: './fund-withdraw.component.html',
          styleUrls: ['./fund-withdraw.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_services_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"]
        }, {
          type: _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }];
      }, {
        autoShownModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['autoShownModal', {
            static: false
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/client-core/fund-management/fund-management-core/ledger-details/ledger-details.component.ts":
  /*!*******************************************************************************************************************!*\
    !*** ./src/app/pages/client-core/fund-management/fund-management-core/ledger-details/ledger-details.component.ts ***!
    \*******************************************************************************************************************/

  /*! exports provided: LedgerDetailsComponent */

  /***/
  function srcAppPagesClientCoreFundManagementFundManagementCoreLedgerDetailsLedgerDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LedgerDetailsComponent", function () {
      return LedgerDetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _shared_services_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../shared/services/global.service */
    "./src/app/shared/services/global.service.ts");
    /* harmony import */


    var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-order-pipe */
    "./node_modules/ngx-order-pipe/__ivy_ngcc__/fesm2015/ngx-order-pipe.js");
    /* harmony import */


    var _shared_services_header_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../../../../shared/services/header.service */
    "./src/app/shared/services/header.service.ts");
    /* harmony import */


    var _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../../../../shared/services/notification.service */
    "./src/app/shared/services/notification.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
    /* harmony import */


    var angular_feather__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! angular-feather */
    "./node_modules/angular-feather/__ivy_ngcc__/fesm2015/angular-feather.js");
    /* harmony import */


    var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-bootstrap */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/esm5/ngx-bootstrap.js");
    /* harmony import */


    var ng2_search_filter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ng2-search-filter */
    "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");

    function LedgerDetailsComponent_tr_64_span_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Neteller");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LedgerDetailsComponent_tr_64_span_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Skrill");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LedgerDetailsComponent_tr_64_span_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Insta mozo");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LedgerDetailsComponent_tr_64_span_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Payee88");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LedgerDetailsComponent_tr_64_span_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Perfect money");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LedgerDetailsComponent_tr_64_span_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Bank wire 1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LedgerDetailsComponent_tr_64_span_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Bank wire 2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LedgerDetailsComponent_tr_64_span_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Bank wire 3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LedgerDetailsComponent_tr_64_span_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Crypto currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LedgerDetailsComponent_tr_64_span_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Bank wire 4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LedgerDetailsComponent_tr_64_span_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Bank wire 5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LedgerDetailsComponent_tr_64_span_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Bank wire 6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LedgerDetailsComponent_tr_64_span_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Pending");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LedgerDetailsComponent_tr_64_span_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Success");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LedgerDetailsComponent_tr_64_span_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Claimed");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LedgerDetailsComponent_tr_64_span_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Rejected");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LedgerDetailsComponent_tr_64_i_feather_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i-feather", 44);
      }

      if (rf & 2) {
        var ledger_r352 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("tooltip", ledger_r352.uComment);
      }
    }

    function LedgerDetailsComponent_tr_64_i_feather_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i-feather", 44);
      }

      if (rf & 2) {
        var ledger_r352 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("tooltip", ledger_r352.uAdmMsg);
      }
    }

    function LedgerDetailsComponent_tr_64_button_32_Template(rf, ctx) {
      if (rf & 1) {
        var _r377 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LedgerDetailsComponent_tr_64_button_32_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r377);

          var ledger_r352 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r375 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r375.onClaim(ledger_r352.sLedgerId);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Claim");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LedgerDetailsComponent_tr_64_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LedgerDetailsComponent_tr_64_span_7_Template, 2, 0, "span", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LedgerDetailsComponent_tr_64_span_8_Template, 2, 0, "span", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LedgerDetailsComponent_tr_64_span_9_Template, 2, 0, "span", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LedgerDetailsComponent_tr_64_span_10_Template, 2, 0, "span", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LedgerDetailsComponent_tr_64_span_11_Template, 2, 0, "span", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LedgerDetailsComponent_tr_64_span_12_Template, 2, 0, "span", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LedgerDetailsComponent_tr_64_span_13_Template, 2, 0, "span", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LedgerDetailsComponent_tr_64_span_14_Template, 2, 0, "span", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LedgerDetailsComponent_tr_64_span_15_Template, 2, 0, "span", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, LedgerDetailsComponent_tr_64_span_16_Template, 2, 0, "span", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, LedgerDetailsComponent_tr_64_span_17_Template, 2, 0, "span", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, LedgerDetailsComponent_tr_64_span_18_Template, 2, 0, "span", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, LedgerDetailsComponent_tr_64_span_24_Template, 2, 0, "span", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, LedgerDetailsComponent_tr_64_span_25_Template, 2, 0, "span", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, LedgerDetailsComponent_tr_64_span_26_Template, 2, 0, "span", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, LedgerDetailsComponent_tr_64_span_27_Template, 2, 0, "span", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, LedgerDetailsComponent_tr_64_i_feather_29_Template, 1, 1, "i-feather", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, LedgerDetailsComponent_tr_64_i_feather_30_Template, 1, 1, "i-feather", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, LedgerDetailsComponent_tr_64_button_32_Template, 2, 0, "button", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ledger_r352 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ledger_r352.uReference);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 23, ledger_r352.sTimestamp == null ? null : ledger_r352.sTimestamp.sCreadedOn_Str, "dd-MM-yyyy hh:mm a"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ledger_r352.uSource == 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ledger_r352.uSource == 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ledger_r352.uSource == 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ledger_r352.uSource == 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ledger_r352.uSource == 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ledger_r352.uSource == 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ledger_r352.uSource == 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ledger_r352.uSource == 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ledger_r352.uSource == 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ledger_r352.uSource == 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ledger_r352.uSource == 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ledger_r352.uSource == 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ledger_r352.uTransType == 1 ? ledger_r352.uAmount : "-");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ledger_r352.uTransType == 0 ? ledger_r352.uAmount : "-");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ledger_r352.uStatus == 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ledger_r352.uStatus == 1 && ledger_r352.uComment != "Transaction Claimed ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ledger_r352.uComment == "Transaction Claimed ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ledger_r352.uStatus == 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ledger_r352.uComment != "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ledger_r352.uAdmMsg != "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ledger_r352.uStatus == 0);
      }
    }

    var _c0 = function _c0(a0, a1, a2) {
      return {
        itemsPerPage: a0,
        currentPage: a1,
        totalItems: a2
      };
    };

    var LedgerDetailsComponent =
    /*#__PURE__*/
    function () {
      function LedgerDetailsComponent(globalService, orderPipe, headerService, notificationService) {
        var _this48 = this;

        _classCallCheck(this, LedgerDetailsComponent);

        this.globalService = globalService;
        this.orderPipe = orderPipe;
        this.headerService = headerService;
        this.notificationService = notificationService;
        this.TotalCount = 0;
        this.pageSize = 10; // Table Rows Perpage property

        this.order = ''; // Order property to sort coloum of table

        this.reverse = true; // Reverse property is used to sort table coloum

        this.subscription1 = this.headerService.castLoggedUserDetail.subscribe(function (resData) {
          return _this48.LoggedParams = resData;
        });
        this.walletId = localStorage.getItem('LoggedDealerwalletID');
        this.dealerId = localStorage.getItem('LoggedDealerCode');
        this.sortedData = orderPipe.transform(this.ledgerDetail, this.order);
      }

      _createClass(LedgerDetailsComponent, [{
        key: "setOrder",
        value: function setOrder(value) {
          if (this.order === value) {
            this.reverse = !this.reverse;
          }

          this.order = value;
        }
      }, {
        key: "onClaim",
        value: function onClaim(id) {
          var _this49 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: 'Are you Sure!',
            text: 'Do you really want to Claim Amount? This process cannot be undone',
            icon: 'error',
            showCancelButton: true,
            confirmButtonText: 'Claim',
            cancelButtonText: 'Cancel',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33'
          }).then(function (result) {
            if (result.value) {
              var params = {
                sDealerID: _this49.LoggedParams.sProfile.sDealerId,
                sLedgerId: id,
                uWalletID: _this49.LoggedParams.sProfile.sWalletId
              };
              console.log(params);

              _this49.globalService.claim(params).subscribe(function (data) {
                if (data.Result === true) {
                  _this49.getLedgerDetails(1, _this49.cat);

                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Claimed!', 'Your Amount has been Claimed.', 'success');

                  _this49.notificationService.showSuccess('Your Amount has been Claimed Successfully', 'Success');
                }
              }, function (err) {
                console.log(err);
              });
            }
          });
        }
      }, {
        key: "getLedgerDetails",
        value: function getLedgerDetails(indexval, countVal) {
          var _this50 = this;

          if (countVal) {
            this.pageSize = indexval;
            this.p = 1;
            this.setParams = {
              WalletId: this.LoggedParams.sProfile.sWalletId,
              DealerID: this.LoggedParams.sProfile.sDealerId,
              Initial: this.p,
              MaxCount: this.pageSize
            };
          } else {
            this.p = indexval;
            this.setParams = {
              WalletId: this.LoggedParams.sProfile.sWalletId,
              DealerID: this.LoggedParams.sProfile.sDealerId,
              Initial: (this.p - 1) * this.pageSize + 1,
              MaxCount: this.p * this.pageSize
            };
          }

          this.globalService.getLedger(this.setParams).subscribe(function (ledger) {
            console.log(ledger);
            _this50.TotalCount = ledger.sLedger.Count;
            _this50.ledgerDetail = ledger.sLedger.lstLedger.map(function (res) {
              return res;
            });
            console.log(_this50.ledgerDetail);
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "showEntry",
        value: function showEntry() {}
      }, {
        key: "getWallet",
        value: function getWallet() {
          var _this51 = this;

          var data = {
            sWalletId: this.walletId
          };
          this.globalService.getWalletInfo(data).subscribe(function (wallet) {
            _this51.walletDetails = wallet;
            console.log(_this51.walletDetails);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getWallet();
          this.getLedgerDetails(1, this.cat);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription1.unsubscribe();
        }
      }]);

      return LedgerDetailsComponent;
    }();

    LedgerDetailsComponent.ɵfac = function LedgerDetailsComponent_Factory(t) {
      return new (t || LedgerDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_order_pipe__WEBPACK_IMPORTED_MODULE_3__["OrderPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_header_service__WEBPACK_IMPORTED_MODULE_4__["HeaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]));
    };

    LedgerDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LedgerDetailsComponent,
      selectors: [["app-ledger-details"]],
      decls: 70,
      vars: 18,
      consts: [[1, "small-content-section", "bg-f"], [1, "row"], [1, "col-md-12"], [1, "card", "border-0"], [1, "card-body", "border-0", "p-0"], [1, "tabs-container"], [1, "history-title", "px-3", "border-bottom"], [1, "tabs-body", "p-2"], [1, "tab-inner-content", "px-2"], [1, "wallet_balance"], [2, "color", "#f36"], [2, "color", "#10b759"], [1, "table-filter-area"], [1, "row", "no-gutters"], [1, "col-md-4", "form-inline", "d-none", "d-md-block"], [1, "form-group", "mb-2"], ["for", "entries", 1, "main-txt-color", "mr-1"], ["id", "entries", 1, "form-control", "main-txt-color", "bd-color", "shadow-none", 3, "change"], ["for", "entries", 1, "main-txt-color", "ml-1"], [1, "col-md-3", "offset-md-5"], [1, "form-group"], ["name", "searchText", "type", "text", "id", "", "placeholder", "Enter keyword to search", 1, "form-control", "main-txt-color", "bd-color", "shadow-none", 3, "ngModel", "ngModelChange"], [1, "table-container", "table-responsive"], [1, "table", "table-hover", "main-txt-color", "mb-0"], [1, "table-header-bg", "table-header-color"], [1, "font-weight-500", "bd-color", "text-capitalize", "align-middle", 3, "click"], [1, "font-weight-500", "bd-color", "text-capitalize", "align-middle"], [1, "font-weight-500", "bd-color", "text-capitalize", "align-middle", "text-center"], [1, "secondary-txt-color"], [4, "ngFor", "ngForOf"], [1, "table-pagination", "text-right", "border-top-0", "pt-4"], [3, "pageChange"], [4, "ngIf"], ["class", "badge badge-warning", 4, "ngIf"], ["class", "badge badge-success", 4, "ngIf"], ["class", "badge badge-info", 4, "ngIf"], ["class", "badge badge-danger", 4, "ngIf"], [1, "text-center"], ["class", "icon-size-20", "name", "message-square", "placement", "top", 3, "tooltip", 4, "ngIf"], ["class", "btn btn-warning btn-sm font-weight-400 text-size-11 btn-sm-padd", "type", "button", 3, "click", 4, "ngIf"], [1, "badge", "badge-warning"], [1, "badge", "badge-success"], [1, "badge", "badge-info"], [1, "badge", "badge-danger"], ["name", "message-square", "placement", "top", 1, "icon-size-20", 3, "tooltip"], ["type", "button", 1, "btn", "btn-warning", "btn-sm", "font-weight-400", "text-size-11", "btn-sm-padd", 3, "click"]],
      template: function LedgerDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Your Transaction History ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Pending : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Wallet Balance : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Show ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "select", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function LedgerDetailsComponent_Template_select_change_25_listener($event) {
            return ctx.getLedgerDetails($event.target.value, true);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "15");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "20");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "25");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "50");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Entries");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LedgerDetailsComponent_Template_input_ngModelChange_42_listener($event) {
            return ctx.searchText = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "table", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "thead", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "th", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LedgerDetailsComponent_Template_th_click_47_listener() {
            return ctx.setOrder("uReference");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Transaction Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "th", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LedgerDetailsComponent_Template_th_click_49_listener() {
            return ctx.setOrder("sCreadedOn_Str");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Timestamp");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "th", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "th", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Withdraw");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "th", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Deposit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "th", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LedgerDetailsComponent_Template_th_click_57_listener() {
            return ctx.setOrder("uStatus");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "th", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Remarks");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "th", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "tbody", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, LedgerDetailsComponent_tr_64_Template, 33, 26, "tr", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](65, "paginate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](66, "filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](67, "orderBy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "pagination-controls", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function LedgerDetailsComponent_Template_pagination_controls_pageChange_69_listener($event) {
            return ctx.getLedgerDetails($event, false);
          });

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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx.walletDetails == null ? null : ctx.walletDetails.uPending, ".00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx.walletDetails == null ? null : ctx.walletDetails.uBalance, ".00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchText);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](65, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](66, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](67, 10, ctx.ledgerDetail, ctx.order, ctx.reverse), ctx.searchText), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](14, _c0, ctx.pageSize, ctx.p, ctx.TotalCount)));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["PaginationControlsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], angular_feather__WEBPACK_IMPORTED_MODULE_9__["ɵa"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["TooltipDirective"]],
      pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["PaginatePipe"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_11__["Ng2SearchPipe"], ngx_order_pipe__WEBPACK_IMPORTED_MODULE_3__["OrderPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]],
      styles: [".wallet_balance[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 39px;\n  right: 15px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row;\n}\n\n.wallet_balance[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 14px;\n  padding: 0 10px;\n}\n\n.history-title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  padding: 10px 0;\n  font-weight: 400;\n}\n\n.table-filter-area[_ngcontent-%COMP%] {\n  position: relative;\n  background: #eff3f6;\n  padding: 15px;\n  border-bottom: 0px;\n  border-radius: 4px 4px 0 0;\n  padding-bottom: 0px;\n  top: 6px;\n}\n\ntbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(even) {\n  background: #f8f9fa;\n}\n\ntbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(odd) {\n  background: #eff3f6;\n}\n\n.table-pagination[_ngcontent-%COMP%] {\n  background: #eff3f6;\n  padding: 15px;\n  position: relative;\n  top: -2px;\n}\n\n.btn-sm[_ngcontent-%COMP%], .btn-group-sm[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%] {\n  padding: 0.15rem 0.8rem;\n}\n\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.45em 0.8em;\n  font-size: 75%;\n  font-weight: 500;\n}\n\ntable[_ngcontent-%COMP%] {\n  border-collapse: separate;\n  border-spacing: 0 6px;\n}\n\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-bottom: 0px solid #dee2e6;\n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-top: 0px solid #dee2e6;\n}\n\n.ngx-pagination[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-bottom: 0;\n}\n\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.45em 0.8em;\n  font-size: 75%;\n  font-weight: 500;\n}\n\n.wallet_balance[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 15px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row;\n}\n\n.wallet_balance[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  padding: 0 10px;\n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-top: 8px !important;\n  padding-bottom: 8px !important;\n  font-size: 13px;\n}\n\n.btn-sm-padd[_ngcontent-%COMP%] {\n  padding: 1px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2xpZW50LWNvcmUvZnVuZC1tYW5hZ2VtZW50L2Z1bmQtbWFuYWdlbWVudC1jb3JlL2xlZGdlci1kZXRhaWxzL0Y6XFxuZXd0cmFkZXJcXHRyYWRlcjQtNS9zcmNcXGFwcFxccGFnZXNcXGNsaWVudC1jb3JlXFxmdW5kLW1hbmFnZW1lbnRcXGZ1bmQtbWFuYWdlbWVudC1jb3JlXFxsZWRnZXItZGV0YWlsc1xcbGVkZ2VyLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NsaWVudC1jb3JlL2Z1bmQtbWFuYWdlbWVudC9mdW5kLW1hbmFnZW1lbnQtY29yZS9sZWRnZXItZGV0YWlscy9sZWRnZXItZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsY0FBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFFQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FDQUo7O0FER0E7RUFDSSxtQkFBQTtBQ0FKOztBREdBO0VBQ0ksbUJBQUE7QUNBSjs7QURHQTtFQUdJLG1CQUFBO0VBQ0EsYUFBQTtFQUVBLGtCQUFBO0VBQ0EsU0FBQTtBQ0hKOztBRE1BOztFQUVJLHVCQUFBO0FDSEo7O0FETUE7RUFDSSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDSEo7O0FETUE7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0FDSEo7O0FETUE7RUFDSSxnQ0FBQTtBQ0hKOztBRE1BOztFQUVJLDZCQUFBO0FDSEo7O0FETUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUNISjs7QURNQTtFQUNJLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNISjs7QURNQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsY0FBQTtBQ0hKOztBRElJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0ZSOztBRE1BOztFQUVJLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FDSEo7O0FETUE7RUFDSSxpQkFBQTtBQ0hKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2xpZW50LWNvcmUvZnVuZC1tYW5hZ2VtZW50L2Z1bmQtbWFuYWdlbWVudC1jb3JlL2xlZGdlci1kZXRhaWxzL2xlZGdlci1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndhbGxldF9iYWxhbmNlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMzlweDtcclxuICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93O1xyXG59XHJcblxyXG4ud2FsbGV0X2JhbGFuY2UgcCB7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG59XHJcblxyXG4uaGlzdG9yeS10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4udGFibGUtZmlsdGVyLWFyZWEge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZDogI2VmZjNmNjtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgdG9wOiA2cHg7XHJcbn1cclxuXHJcbnRib2R5PnRyOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjhmOWZhXHJcbn1cclxuXHJcbnRib2R5PnRyOm50aC1jaGlsZChvZGQpIHtcclxuICAgIGJhY2tncm91bmQ6ICNlZmYzZjZcclxufVxyXG5cclxuLnRhYmxlLXBhZ2luYXRpb24ge1xyXG4gICAgLy8gcGFkZGluZzogMC43NXJlbTtcclxuICAgIC8vIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gICAgYmFja2dyb3VuZDogI2VmZjNmNjtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtMnB4O1xyXG59XHJcblxyXG4uYnRuLXNtLFxyXG4uYnRuLWdyb3VwLXNtPi5idG4ge1xyXG4gICAgcGFkZGluZzogMC4xNXJlbSAwLjhyZW07XHJcbn1cclxuXHJcbi5iYWRnZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAwLjQ1ZW0gMC44ZW07XHJcbiAgICBmb250LXNpemU6IDc1JTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XHJcbiAgICBib3JkZXItc3BhY2luZzogMCA2cHg7XHJcbn1cclxuXHJcbi50YWJsZSB0aGVhZCB0aCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAwcHggc29saWQgI2RlZTJlNjtcclxufVxyXG5cclxuLnRhYmxlIHRoLFxyXG4udGFibGUgdGQge1xyXG4gICAgYm9yZGVyLXRvcDogMHB4IHNvbGlkICNkZWUyZTY7XHJcbn1cclxuXHJcbi5uZ3gtcGFnaW5hdGlvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5iYWRnZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAwLjQ1ZW0gMC44ZW07XHJcbiAgICBmb250LXNpemU6IDc1JTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi53YWxsZXRfYmFsYW5jZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEycHg7XHJcbiAgICByaWdodDogMTVweDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4udGFibGUgdGgsXHJcbi50YWJsZSB0ZCB7XHJcbiAgICBwYWRkaW5nLXRvcDogOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbi5idG4tc20tcGFkZCB7XHJcbiAgICBwYWRkaW5nOiAxcHggMTBweDtcclxufSIsIi53YWxsZXRfYmFsYW5jZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzOXB4O1xuICByaWdodDogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3c7XG59XG5cbi53YWxsZXRfYmFsYW5jZSBwIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG5cbi5oaXN0b3J5LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi50YWJsZS1maWx0ZXItYXJlYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogI2VmZjNmNjtcbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyLWJvdHRvbTogMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgdG9wOiA2cHg7XG59XG5cbnRib2R5ID4gdHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbn1cblxudGJvZHkgPiB0cjpudGgtY2hpbGQob2RkKSB7XG4gIGJhY2tncm91bmQ6ICNlZmYzZjY7XG59XG5cbi50YWJsZS1wYWdpbmF0aW9uIHtcbiAgYmFja2dyb3VuZDogI2VmZjNmNjtcbiAgcGFkZGluZzogMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0ycHg7XG59XG5cbi5idG4tc20sXG4uYnRuLWdyb3VwLXNtID4gLmJ0biB7XG4gIHBhZGRpbmc6IDAuMTVyZW0gMC44cmVtO1xufVxuXG4uYmFkZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDAuNDVlbSAwLjhlbTtcbiAgZm9udC1zaXplOiA3NSU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDAgNnB4O1xufVxuXG4udGFibGUgdGhlYWQgdGgge1xuICBib3JkZXItYm90dG9tOiAwcHggc29saWQgI2RlZTJlNjtcbn1cblxuLnRhYmxlIHRoLFxuLnRhYmxlIHRkIHtcbiAgYm9yZGVyLXRvcDogMHB4IHNvbGlkICNkZWUyZTY7XG59XG5cbi5uZ3gtcGFnaW5hdGlvbiB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uYmFkZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDAuNDVlbSAwLjhlbTtcbiAgZm9udC1zaXplOiA3NSU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi53YWxsZXRfYmFsYW5jZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMnB4O1xuICByaWdodDogMTVweDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93O1xufVxuLndhbGxldF9iYWxhbmNlIHAge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cblxuLnRhYmxlIHRoLFxuLnRhYmxlIHRkIHtcbiAgcGFkZGluZy10b3A6IDhweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogOHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmJ0bi1zbS1wYWRkIHtcbiAgcGFkZGluZzogMXB4IDEwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LedgerDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-ledger-details',
          templateUrl: './ledger-details.component.html',
          styleUrls: ['./ledger-details.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_services_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"]
        }, {
          type: ngx_order_pipe__WEBPACK_IMPORTED_MODULE_3__["OrderPipe"]
        }, {
          type: _shared_services_header_service__WEBPACK_IMPORTED_MODULE_4__["HeaderService"]
        }, {
          type: _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/client-core/fund-management/fund-management-routing.module.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/pages/client-core/fund-management/fund-management-routing.module.ts ***!
    \*************************************************************************************/

  /*! exports provided: FundManagementRoutingModule */

  /***/
  function srcAppPagesClientCoreFundManagementFundManagementRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FundManagementRoutingModule", function () {
      return FundManagementRoutingModule;
    });
    /* harmony import */


    var _fund_management_core_fund_transfer_account_to_wallet_account_to_wallet_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./fund-management-core/fund-transfer/account-to-wallet/account-to-wallet.component */
    "./src/app/pages/client-core/fund-management/fund-management-core/fund-transfer/account-to-wallet/account-to-wallet.component.ts");
    /* harmony import */


    var _fund_management_core_fund_transfer_account_to_account_account_to_account_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./fund-management-core/fund-transfer/account-to-account/account-to-account.component */
    "./src/app/pages/client-core/fund-management/fund-management-core/fund-transfer/account-to-account/account-to-account.component.ts");
    /* harmony import */


    var _fund_management_core_fund_transfer_wallet_to_wallet_wallet_to_wallet_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./fund-management-core/fund-transfer/wallet-to-wallet/wallet-to-wallet.component */
    "./src/app/pages/client-core/fund-management/fund-management-core/fund-transfer/wallet-to-wallet/wallet-to-wallet.component.ts");
    /* harmony import */


    var _fund_management_core_fund_deposit_to_account_to_account_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./fund-management-core/fund-deposit/to-account/to-account.component */
    "./src/app/pages/client-core/fund-management/fund-management-core/fund-deposit/to-account/to-account.component.ts");
    /* harmony import */


    var _fund_management_core_fund_deposit_to_wallet_to_wallet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./fund-management-core/fund-deposit/to-wallet/to-wallet.component */
    "./src/app/pages/client-core/fund-management/fund-management-core/fund-deposit/to-wallet/to-wallet.component.ts");
    /* harmony import */


    var _fund_management_core_ledger_details_ledger_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./fund-management-core/ledger-details/ledger-details.component */
    "./src/app/pages/client-core/fund-management/fund-management-core/ledger-details/ledger-details.component.ts");
    /* harmony import */


    var _fund_management_core_fund_withdraw_fund_withdraw_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./fund-management-core/fund-withdraw/fund-withdraw.component */
    "./src/app/pages/client-core/fund-management/fund-management-core/fund-withdraw/fund-withdraw.component.ts");
    /* harmony import */


    var _fund_management_core_fund_transfer_fund_transfer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./fund-management-core/fund-transfer/fund-transfer.component */
    "./src/app/pages/client-core/fund-management/fund-management-core/fund-transfer/fund-transfer.component.ts");
    /* harmony import */


    var _fund_management_core_fund_deposit_fund_deposit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./fund-management-core/fund-deposit/fund-deposit.component */
    "./src/app/pages/client-core/fund-management/fund-management-core/fund-deposit/fund-deposit.component.ts");
    /* harmony import */


    var _fund_management_core_fund_management_core_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./fund-management-core/fund-management-core.component */
    "./src/app/pages/client-core/fund-management/fund-management-core/fund-management-core.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '',
      component: _fund_management_core_fund_management_core_component__WEBPACK_IMPORTED_MODULE_9__["FundManagementCoreComponent"],
      children: [{
        path: '',
        pathMatch: 'full',
        redirectTo: 'deposit-funds'
      }, {
        path: 'deposit-funds',
        component: _fund_management_core_fund_deposit_fund_deposit_component__WEBPACK_IMPORTED_MODULE_8__["FundDepositComponent"],
        data: {
          breadcrumb: 'Deposit Funds'
        },
        children: [{
          path: '',
          pathMatch: 'full',
          redirectTo: 'deposit-to-wallet'
        }, {
          path: 'deposit-to-wallet',
          component: _fund_management_core_fund_deposit_to_wallet_to_wallet_component__WEBPACK_IMPORTED_MODULE_4__["ToWalletComponent"],
          data: {
            title: 'Deposit Funds',
            breadcrumb: 'Deposit To Wallet'
          }
        }, {
          path: 'deposit-to-account',
          component: _fund_management_core_fund_deposit_to_account_to_account_component__WEBPACK_IMPORTED_MODULE_3__["ToAccountComponent"],
          data: {
            title: 'Deposit Funds',
            breadcrumb: 'Deposit To Account'
          }
        }]
      }, {
        path: 'transfer-funds',
        component: _fund_management_core_fund_transfer_fund_transfer_component__WEBPACK_IMPORTED_MODULE_7__["FundTransferComponent"],
        data: {
          breadcrumb: 'Transfer Funds'
        },
        children: [{
          path: '',
          pathMatch: 'full',
          redirectTo: 'wallet-to-wallet'
        }, {
          path: 'wallet-to-wallet',
          component: _fund_management_core_fund_transfer_wallet_to_wallet_wallet_to_wallet_component__WEBPACK_IMPORTED_MODULE_2__["WalletToWalletComponent"],
          data: {
            title: 'Transfer Funds',
            breadcrumb: 'Wallet To Wallet'
          }
        }, {
          path: 'account-to-account',
          component: _fund_management_core_fund_transfer_account_to_account_account_to_account_component__WEBPACK_IMPORTED_MODULE_1__["AccountToAccountComponent"],
          data: {
            title: 'Transfer Funds',
            breadcrumb: 'Account To Account'
          }
        }, {
          path: 'account-to-wallet',
          component: _fund_management_core_fund_transfer_account_to_wallet_account_to_wallet_component__WEBPACK_IMPORTED_MODULE_0__["AccountToWalletComponent"],
          data: {
            title: 'Transfer Funds',
            breadcrumb: 'Account To Wallet'
          }
        }]
      }, {
        path: 'withdraw-funds',
        component: _fund_management_core_fund_withdraw_fund_withdraw_component__WEBPACK_IMPORTED_MODULE_6__["FundWithdrawComponent"],
        data: {
          title: 'Withdraw Funds',
          breadcrumb: 'Withdraw Funds'
        }
      }, {
        path: 'ledger-overview',
        component: _fund_management_core_ledger_details_ledger_details_component__WEBPACK_IMPORTED_MODULE_5__["LedgerDetailsComponent"],
        data: {
          title: 'Ledger Overview',
          breadcrumb: 'Ledger Overview'
        }
      }]
    }];

    var FundManagementRoutingModule = function FundManagementRoutingModule() {
      _classCallCheck(this, FundManagementRoutingModule);
    };

    FundManagementRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
      type: FundManagementRoutingModule
    });
    FundManagementRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
      factory: function FundManagementRoutingModule_Factory(t) {
        return new (t || FundManagementRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](FundManagementRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵsetClassMetadata"](FundManagementRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/client-core/fund-management/fund-management.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/pages/client-core/fund-management/fund-management.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: FundManagementModule */

  /***/
  function srcAppPagesClientCoreFundManagementFundManagementModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FundManagementModule", function () {
      return FundManagementModule;
    });
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../../shared/shared.module */
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


    var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-bootstrap/alert */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/alert/fesm2015/ngx-bootstrap-alert.js");
    /* harmony import */


    var _fund_management_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./fund-management-routing.module */
    "./src/app/pages/client-core/fund-management/fund-management-routing.module.ts");
    /* harmony import */


    var _fund_management_core_fund_management_core_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./fund-management-core/fund-management-core.component */
    "./src/app/pages/client-core/fund-management/fund-management-core/fund-management-core.component.ts");
    /* harmony import */


    var _fund_management_core_fund_deposit_fund_deposit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./fund-management-core/fund-deposit/fund-deposit.component */
    "./src/app/pages/client-core/fund-management/fund-management-core/fund-deposit/fund-deposit.component.ts");
    /* harmony import */


    var _fund_management_core_fund_deposit_to_wallet_to_wallet_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./fund-management-core/fund-deposit/to-wallet/to-wallet.component */
    "./src/app/pages/client-core/fund-management/fund-management-core/fund-deposit/to-wallet/to-wallet.component.ts");
    /* harmony import */


    var _fund_management_core_fund_deposit_to_account_to_account_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./fund-management-core/fund-deposit/to-account/to-account.component */
    "./src/app/pages/client-core/fund-management/fund-management-core/fund-deposit/to-account/to-account.component.ts");
    /* harmony import */


    var _fund_management_core_fund_withdraw_fund_withdraw_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./fund-management-core/fund-withdraw/fund-withdraw.component */
    "./src/app/pages/client-core/fund-management/fund-management-core/fund-withdraw/fund-withdraw.component.ts");
    /* harmony import */


    var _fund_management_core_ledger_details_ledger_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./fund-management-core/ledger-details/ledger-details.component */
    "./src/app/pages/client-core/fund-management/fund-management-core/ledger-details/ledger-details.component.ts");
    /* harmony import */


    var _fund_management_core_fund_transfer_fund_transfer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./fund-management-core/fund-transfer/fund-transfer.component */
    "./src/app/pages/client-core/fund-management/fund-management-core/fund-transfer/fund-transfer.component.ts");
    /* harmony import */


    var _fund_management_core_fund_transfer_wallet_to_wallet_wallet_to_wallet_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./fund-management-core/fund-transfer/wallet-to-wallet/wallet-to-wallet.component */
    "./src/app/pages/client-core/fund-management/fund-management-core/fund-transfer/wallet-to-wallet/wallet-to-wallet.component.ts");
    /* harmony import */


    var _fund_management_core_fund_transfer_account_to_account_account_to_account_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./fund-management-core/fund-transfer/account-to-account/account-to-account.component */
    "./src/app/pages/client-core/fund-management/fund-management-core/fund-transfer/account-to-account/account-to-account.component.ts");
    /* harmony import */


    var _fund_management_core_fund_transfer_account_to_wallet_account_to_wallet_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./fund-management-core/fund-transfer/account-to-wallet/account-to-wallet.component */
    "./src/app/pages/client-core/fund-management/fund-management-core/fund-transfer/account-to-wallet/account-to-wallet.component.ts");

    var FundManagementModule = function FundManagementModule() {
      _classCallCheck(this, FundManagementModule);
    };

    FundManagementModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: FundManagementModule
    });
    FundManagementModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function FundManagementModule_Factory(t) {
        return new (t || FundManagementModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _fund_management_routing_module__WEBPACK_IMPORTED_MODULE_4__["FundManagementRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__["AlertModule"].forRoot()]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FundManagementModule, {
        declarations: [_fund_management_core_fund_management_core_component__WEBPACK_IMPORTED_MODULE_5__["FundManagementCoreComponent"], _fund_management_core_fund_deposit_fund_deposit_component__WEBPACK_IMPORTED_MODULE_6__["FundDepositComponent"], _fund_management_core_fund_deposit_to_wallet_to_wallet_component__WEBPACK_IMPORTED_MODULE_7__["ToWalletComponent"], _fund_management_core_fund_deposit_to_account_to_account_component__WEBPACK_IMPORTED_MODULE_8__["ToAccountComponent"], _fund_management_core_fund_withdraw_fund_withdraw_component__WEBPACK_IMPORTED_MODULE_9__["FundWithdrawComponent"], _fund_management_core_ledger_details_ledger_details_component__WEBPACK_IMPORTED_MODULE_10__["LedgerDetailsComponent"], _fund_management_core_fund_transfer_fund_transfer_component__WEBPACK_IMPORTED_MODULE_11__["FundTransferComponent"], _fund_management_core_fund_transfer_wallet_to_wallet_wallet_to_wallet_component__WEBPACK_IMPORTED_MODULE_12__["WalletToWalletComponent"], _fund_management_core_fund_transfer_account_to_account_account_to_account_component__WEBPACK_IMPORTED_MODULE_13__["AccountToAccountComponent"], _fund_management_core_fund_transfer_account_to_wallet_account_to_wallet_component__WEBPACK_IMPORTED_MODULE_14__["AccountToWalletComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _fund_management_routing_module__WEBPACK_IMPORTED_MODULE_4__["FundManagementRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__["AlertModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FundManagementModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_fund_management_core_fund_management_core_component__WEBPACK_IMPORTED_MODULE_5__["FundManagementCoreComponent"], _fund_management_core_fund_deposit_fund_deposit_component__WEBPACK_IMPORTED_MODULE_6__["FundDepositComponent"], _fund_management_core_fund_deposit_to_wallet_to_wallet_component__WEBPACK_IMPORTED_MODULE_7__["ToWalletComponent"], _fund_management_core_fund_deposit_to_account_to_account_component__WEBPACK_IMPORTED_MODULE_8__["ToAccountComponent"], _fund_management_core_fund_withdraw_fund_withdraw_component__WEBPACK_IMPORTED_MODULE_9__["FundWithdrawComponent"], _fund_management_core_ledger_details_ledger_details_component__WEBPACK_IMPORTED_MODULE_10__["LedgerDetailsComponent"], _fund_management_core_fund_transfer_fund_transfer_component__WEBPACK_IMPORTED_MODULE_11__["FundTransferComponent"], _fund_management_core_fund_transfer_wallet_to_wallet_wallet_to_wallet_component__WEBPACK_IMPORTED_MODULE_12__["WalletToWalletComponent"], _fund_management_core_fund_transfer_account_to_account_account_to_account_component__WEBPACK_IMPORTED_MODULE_13__["AccountToAccountComponent"], _fund_management_core_fund_transfer_account_to_wallet_account_to_wallet_component__WEBPACK_IMPORTED_MODULE_14__["AccountToWalletComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _fund_management_routing_module__WEBPACK_IMPORTED_MODULE_4__["FundManagementRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__["AlertModule"].forRoot()]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/models/deposit-wallet.modal.ts":
  /*!*******************************************************!*\
    !*** ./src/app/shared/models/deposit-wallet.modal.ts ***!
    \*******************************************************/

  /*! exports provided: DepositWalletModalData */

  /***/
  function srcAppSharedModelsDepositWalletModalTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DepositWalletModalData", function () {
      return DepositWalletModalData;
    });

    var DepositWalletModalData = function DepositWalletModalData() {
      _classCallCheck(this, DepositWalletModalData);

      this.sTimestamp = {
        sCreatedOn_Str: new Date(),
        sUpdatedOn_Str: new Date()
      };
      this.uCommission = 0;
      this.uAmount = 0;
      this.uComment = '';
      this.sWalletId = '';
      this.sDealerID = '';
      this.sProcessedBy = 0;
      this.uSourceInfo = '';
      this.uReceipt_Snap = '';
      this.uBalance = 0;
      this.uSource = 0;
      this.uStatus = 0;
    };

    ;
    /***/
  },

  /***/
  "./src/app/shared/models/withdraw.modal.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/models/withdraw.modal.ts ***!
    \*************************************************/

  /*! exports provided: WithDrawModalData */

  /***/
  function srcAppSharedModelsWithdrawModalTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WithDrawModalData", function () {
      return WithDrawModalData;
    });

    var WithDrawModalData = function WithDrawModalData() {
      _classCallCheck(this, WithDrawModalData);

      this.sTimestamp = {
        sCreatedOn_Str: new Date(),
        sUpdatedOn_Str: new Date()
      };
      this.uCommission = 0;
      this.uAmount = 0;
      this.uComment = '';
      this.sWalletId = '';
      this.sDealerID = '';
      this.sProcessedBy = 0;
      this.uSourceInfo = '';
      this.uReceipt_Snap = '';
      this.uBalance = 0;
      this.uSource = 0;
      this.uStatus = 0;
    };
    /***/

  }
}]);
//# sourceMappingURL=client-core-fund-management-fund-management-module-es5.js.map