function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/shared/services/notification.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/shared/services/notification.service.ts ***!
    \*********************************************************/

  /*! exports provided: NotificationService */

  /***/
  function srcAppSharedServicesNotificationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationService", function () {
      return NotificationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");

    var NotificationService =
    /*#__PURE__*/
    function () {
      function NotificationService(toastr) {
        _classCallCheck(this, NotificationService);

        this.toastr = toastr;
      }

      _createClass(NotificationService, [{
        key: "showSuccess",
        value: function showSuccess(message, title) {
          var timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10000;
          this.toastr.success(message, title, {
            positionClass: 'toast-bottom-right',
            progressBar: true,
            progressAnimation: 'increasing',
            closeButton: true,
            timeOut: timeout,
            easing: 'ease-in',
            easeTime: 100,
            titleClass: 'toast-title',
            messageClass: 'toast-message'
          });
        }
      }, {
        key: "showError",
        value: function showError(message, title) {
          var timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10000;
          this.toastr.error(message, title, {
            positionClass: 'toast-bottom-right',
            progressBar: true,
            progressAnimation: 'increasing',
            closeButton: true,
            timeOut: timeout,
            easing: 'ease-in',
            easeTime: 100,
            titleClass: 'toast-title',
            messageClass: 'toast-message'
          });
        }
      }, {
        key: "showInfo",
        value: function showInfo(message, title) {
          var timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10000;
          this.toastr.info(message, title, {
            positionClass: 'toast-bottom-right',
            progressBar: true,
            progressAnimation: 'increasing',
            closeButton: true,
            timeOut: timeout,
            easing: 'ease-in',
            easeTime: 100,
            titleClass: 'toast-title',
            messageClass: 'toast-message'
          });
        }
      }, {
        key: "showWarning",
        value: function showWarning(message, title) {
          var timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10000;
          this.toastr.warning(message, title, {
            positionClass: 'toast-bottom-right',
            progressBar: true,
            progressAnimation: 'increasing',
            closeButton: true,
            timeOut: timeout,
            easing: 'ease-in',
            easeTime: 100,
            titleClass: 'toast-title',
            messageClass: 'toast-message'
          });
        }
      }]);

      return NotificationService;
    }();

    NotificationService.ɵfac = function NotificationService_Factory(t) {
      return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]));
    };

    NotificationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NotificationService,
      factory: NotificationService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=common-es5.js.map