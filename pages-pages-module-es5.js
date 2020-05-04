function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-module"], {
  /***/
  "./src/app/pages/client-core/client-core.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/client-core/client-core.component.ts ***!
    \************************************************************/

  /*! exports provided: ClientCoreComponent */

  /***/
  function srcAppPagesClientCoreClientCoreComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientCoreComponent", function () {
      return ClientCoreComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_services_layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shared/services/layout.service */
    "./src/app/shared/services/layout.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _common_components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../common-components/header/header.component */
    "./src/app/pages/common-components/header/header.component.ts");
    /* harmony import */


    var _common_components_left_asidebar_left_asidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../common-components/left-asidebar/left-asidebar.component */
    "./src/app/pages/common-components/left-asidebar/left-asidebar.component.ts");
    /* harmony import */


    var _common_components_content_section_content_section_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../common-components/content-section/content-section.component */
    "./src/app/pages/common-components/content-section/content-section.component.ts");

    function ClientCoreComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientCoreComponent_div_1_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58);

          var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r57.sidebarToggle();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ClientCoreComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientCoreComponent_div_2_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60);

          var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r59.sidebarToggle();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ClientCoreComponent =
    /*#__PURE__*/
    function () {
      function ClientCoreComponent(layoutService) {
        _classCallCheck(this, ClientCoreComponent);

        this.layoutService = layoutService;
      }

      _createClass(ClientCoreComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.layoutService.checkWindowWidth(window.innerWidth);
          this.layoutService.castNavLayout.subscribe(function (navLayout) {
            return _this.setNavLayout = navLayout;
          });
          this.layoutService.castDeviceType.subscribe(function (deviceType) {
            return _this.setDeviceType = deviceType;
          });
          this.layoutService.castdfNavbar.subscribe(function (defaultNavbar) {
            return _this.setDefaultNavbar = defaultNavbar;
          });
          this.layoutService.castToggleStatus.subscribe(function (toggleStatus) {
            return _this.setToggleStatus = toggleStatus;
          });
          this.layoutService.castNavbarEffect.subscribe(function (navbarEffect) {
            return _this.setNavbarEffect = navbarEffect;
          });
          this.layoutService.castSetAppWidth.subscribe(function (appWidth) {
            return _this.setAppWidth = appWidth;
          });
          this.layoutService.castToggleNavbar.subscribe(function (tNavbar) {
            return _this.setToggleNavbar = tNavbar;
          });
          this.layoutService.castHeaderTheme.subscribe(function (headerTheme) {
            return _this.setHeaderColorTheme = headerTheme;
          });
          this.layoutService.castNavbarTheme.subscribe(function (navbarTheme) {
            return _this.setNavbarColorTheme = navbarTheme;
          });
          this.layoutService.castContentSectionTheme.subscribe(function (contentTheme) {
            return _this.setContentSectionTheme = contentTheme;
          });
          this.layoutService.castCollapsedHeader.subscribe(function (collapsedHeader) {
            return _this.setCollapsedHeader = collapsedHeader;
          });
          this.layoutService.castAsidebarState.subscribe(function (asidebarState) {
            return _this.navbarTypeState = asidebarState;
          });
        }
      }, {
        key: "onResize",
        value: function onResize(event) {
          var tw = event.target.innerWidth;

          if (this.setDeviceType === 'desktop' && tw < 1024) {
            this.layoutService.getVerticalNavbarOnWindowResize(event.target.innerWidth);
          } else if (this.setDeviceType === 'phone' && tw > 768) {
            this.layoutService.getVerticalNavbarOnWindowResize(event.target.innerWidth);
          } else if (this.setDeviceType === 'tablet' && tw < 768) {
            this.layoutService.getVerticalNavbarOnWindowResize(event.target.innerWidth);
          } else if (this.setDeviceType === 'tablet' && tw > 1024) {
            this.layoutService.getVerticalNavbarOnWindowResize(event.target.innerWidth);
          } // this.layoutService.getVerticalNavbarOnWindowResize(event.target.innerWidth);

        }
      }, {
        key: "sidebarToggle",
        value: function sidebarToggle() {
          this.layoutService.getToggleStatus();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }]);

      return ClientCoreComponent;
    }();

    ClientCoreComponent.ɵfac = function ClientCoreComponent_Factory(t) {
      return new (t || ClientCoreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_1__["LayoutService"]));
    };

    ClientCoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ClientCoreComponent,
      selectors: [["app-client-core"]],
      hostBindings: function ClientCoreComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function ClientCoreComponent_resize_HostBindingHandler($event) {
            return ctx.onResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 7,
      vars: 27,
      consts: [[1, "app-container"], ["class", "overlay-box", 3, "click", 4, "ngIf"], [1, "app-wrapper"], [3, "deviceType", "navLayout", "defaultNavbar", "toggleStatus", "navbarEffect", "toggleNavbar", "headerColorTheme", "collapsedHeader"], [3, "deviceType", "navLayout", "defaultNavbar", "toggleStatus", "navbarEffect", "toggleNavbar", "navbarColorTheme", "collapsedHeader"], [3, "deviceType", "navLayout", "defaultNavbar", "toggleStatus", "navbarEffect", "toggleNavbar", "contentSectionTheme"], [1, "overlay-box", 3, "click"]],
      template: function ClientCoreComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ClientCoreComponent_div_1_Template, 1, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ClientCoreComponent_div_2_Template, 1, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-header", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-left-asidebar", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-content-section", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("device-type", ctx.setDeviceType)("app-width", ctx.setAppWidth);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.setNavLayout === "horizontal" && ctx.setDeviceType === "phone" && ctx.setToggleStatus === false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.setNavLayout === "vertical" && ctx.setNavbarEffect === "overlay" && ctx.setToggleStatus === false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("deviceType", ctx.setDeviceType)("navLayout", ctx.setNavLayout)("defaultNavbar", ctx.setDefaultNavbar)("toggleStatus", ctx.setToggleStatus)("navbarEffect", ctx.setNavbarEffect)("toggleNavbar", ctx.setToggleNavbar)("headerColorTheme", ctx.setHeaderColorTheme)("collapsedHeader", ctx.setCollapsedHeader);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("deviceType", ctx.setDeviceType)("navLayout", ctx.setNavLayout)("defaultNavbar", ctx.setDefaultNavbar)("toggleStatus", ctx.setToggleStatus)("navbarEffect", ctx.setNavbarEffect)("toggleNavbar", ctx.setToggleNavbar)("navbarColorTheme", ctx.setNavbarColorTheme)("collapsedHeader", ctx.setCollapsedHeader);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("deviceType", ctx.setDeviceType)("navLayout", ctx.setNavLayout)("defaultNavbar", ctx.setDefaultNavbar)("toggleStatus", ctx.setToggleStatus)("navbarEffect", ctx.setNavbarEffect)("toggleNavbar", ctx.setToggleNavbar)("contentSectionTheme", ctx.setContentSectionTheme);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _common_components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _common_components_left_asidebar_left_asidebar_component__WEBPACK_IMPORTED_MODULE_4__["LeftAsidebarComponent"], _common_components_content_section_content_section_component__WEBPACK_IMPORTED_MODULE_5__["ContentSectionComponent"]],
      styles: [".app-container[_ngcontent-%COMP%] {\n  height: 100%;\n  position: relative;\n  margin: 0 auto;\n  padding: 0px;\n  font-size: 13px;\n  overflow: hidden;\n}\n\n.app-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  height: 100%;\n}\n\n.app-container[app-width=wide][_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.app-container[app-width=box][device-type=desktop][_ngcontent-%COMP%] {\n  width: 1200px;\n}\n\n.app-container[app-width=box][device-type=tablet][_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.app-container[app-width=box][device-type=mobile][_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.overlay-box[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.1);\n  width: 100%;\n  bottom: 0;\n  top: 0;\n  z-index: 1023;\n  -webkit-transition: width 0.5s linear;\n  transition: width 0.5s linear;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2xpZW50LWNvcmUvRjpcXG5ld3RyYWRlclxcdHJhZGVyNC01L3NyY1xcYXBwXFxwYWdlc1xcY2xpZW50LWNvcmVcXGNsaWVudC1jb3JlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9jbGllbnQtY29yZS9jbGllbnQtY29yZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBRUEsZUFBQTtFQUNBLGdCQUFBO0FDQUo7O0FER0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQUo7O0FER0E7RUFDSSxXQUFBO0FDQUo7O0FER0E7RUFDSSxhQUFBO0FDQUo7O0FER0E7RUFDSSxXQUFBO0FDQUo7O0FER0E7RUFDSSxXQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxNQUFBO0VBQ0EsYUFBQTtFQUNBLHFDQUFBO0VBR0EsNkJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NsaWVudC1jb3JlL2NsaWVudC1jb3JlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiAjZWNmMGY4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmFwcC13cmFwcGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uYXBwLWNvbnRhaW5lclthcHAtd2lkdGg9XCJ3aWRlXCJdIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYXBwLWNvbnRhaW5lclthcHAtd2lkdGg9XCJib3hcIl1bZGV2aWNlLXR5cGU9XCJkZXNrdG9wXCJdIHtcclxuICAgIHdpZHRoOiAxMjAwcHg7XHJcbn1cclxuXHJcbi5hcHAtY29udGFpbmVyW2FwcC13aWR0aD1cImJveFwiXVtkZXZpY2UtdHlwZT1cInRhYmxldFwiXSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmFwcC1jb250YWluZXJbYXBwLXdpZHRoPVwiYm94XCJdW2RldmljZS10eXBlPVwibW9iaWxlXCJdIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ub3ZlcmxheS1ib3gge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB6LWluZGV4OiAxMDIzO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiB3aWR0aCAwLjVzIGxpbmVhcjtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogd2lkdGggMC41cyBsaW5lYXI7XHJcbiAgICAtby10cmFuc2l0aW9uOiB3aWR0aCAwLjVzIGxpbmVhcjtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuNXMgbGluZWFyO1xyXG59XHJcbiIsIi5hcHAtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmFwcC13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uYXBwLWNvbnRhaW5lclthcHAtd2lkdGg9d2lkZV0ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmFwcC1jb250YWluZXJbYXBwLXdpZHRoPWJveF1bZGV2aWNlLXR5cGU9ZGVza3RvcF0ge1xuICB3aWR0aDogMTIwMHB4O1xufVxuXG4uYXBwLWNvbnRhaW5lclthcHAtd2lkdGg9Ym94XVtkZXZpY2UtdHlwZT10YWJsZXRdIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5hcHAtY29udGFpbmVyW2FwcC13aWR0aD1ib3hdW2RldmljZS10eXBlPW1vYmlsZV0ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm92ZXJsYXktYm94IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHdpZHRoOiAxMDAlO1xuICBib3R0b206IDA7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTAyMztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB3aWR0aCAwLjVzIGxpbmVhcjtcbiAgLW1vei10cmFuc2l0aW9uOiB3aWR0aCAwLjVzIGxpbmVhcjtcbiAgLW8tdHJhbnNpdGlvbjogd2lkdGggMC41cyBsaW5lYXI7XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuNXMgbGluZWFyO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientCoreComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-client-core',
          templateUrl: './client-core.component.html',
          styleUrls: ['./client-core.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_services_layout_service__WEBPACK_IMPORTED_MODULE_1__["LayoutService"]
        }];
      }, {
        onResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:resize', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/common-components/content-section/content-section.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/pages/common-components/content-section/content-section.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: ContentSectionComponent */

  /***/
  function srcAppPagesCommonComponentsContentSectionContentSectionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentSectionComponent", function () {
      return ContentSectionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_services_screen_title_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../shared/services/screen-title.service */
    "./src/app/shared/services/screen-title.service.ts");
    /* harmony import */


    var _shared_services_handle_screen_bar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../shared/services/handle-screen-bar.service */
    "./src/app/shared/services/handle-screen-bar.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var angular_crumbs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! angular-crumbs */
    "./node_modules/angular-crumbs/__ivy_ngcc__/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../footer/footer.component */
    "./src/app/pages/common-components/footer/footer.component.ts");

    var _c0 = function _c0(a0) {
      return [a0];
    };

    function ContentSectionComponent_ng_template_9_li_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var route_r895 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, route_r895.url));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](route_r895.displayName);
      }
    }

    function ContentSectionComponent_ng_template_9_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var route_r895 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](route_r895.displayName);
      }
    }

    function ContentSectionComponent_ng_template_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ContentSectionComponent_ng_template_9_li_0_Template, 3, 4, "li", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContentSectionComponent_ng_template_9_li_1_Template, 2, 1, "li", 13);
      }

      if (rf & 2) {
        var route_r895 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", route_r895.terminal);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !route_r895.terminal);
      }
    }

    var _c1 = function _c1(a0) {
      return {
        "show": a0
      };
    };

    var ContentSectionComponent =
    /*#__PURE__*/
    function () {
      function ContentSectionComponent(screenTitle, handleScreenBarService) {
        var _this2 = this;

        _classCallCheck(this, ContentSectionComponent);

        this.screenTitle = screenTitle;
        this.handleScreenBarService = handleScreenBarService;
        this.isScreenBarVisible = true;
        this.isBreadcrumbVisible = false;
        this.handleScreenBarService.castscreenTitlevisibility.subscribe(function (resData) {
          return _this2.isScreenBarVisible = resData;
        });
      }

      _createClass(ContentSectionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.screenTitle.castTitle.subscribe(function (title) {
            return _this3.title = title;
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }]);

      return ContentSectionComponent;
    }();

    ContentSectionComponent.ɵfac = function ContentSectionComponent_Factory(t) {
      return new (t || ContentSectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_screen_title_service__WEBPACK_IMPORTED_MODULE_1__["ScreenTitleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_handle_screen_bar_service__WEBPACK_IMPORTED_MODULE_2__["HandleScreenBarService"]));
    };

    ContentSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContentSectionComponent,
      selectors: [["app-content-section"]],
      inputs: {
        deviceType: "deviceType",
        navLayout: "navLayout",
        defaultNavbar: "defaultNavbar",
        toggleStatus: "toggleStatus",
        navbarEffect: "navbarEffect",
        toggleNavbar: "toggleNavbar",
        contentSectionTheme: "contentSectionTheme"
      },
      decls: 16,
      vars: 11,
      consts: [[1, "app-content-section", "clearfix", "bg-b"], [1, "app-content-wrapper"], [1, "screenbar", 3, "ngClass"], [1, "row", "no-gutters"], [1, "col-md-12", "pr-1", "pl-1"], [1, "breadcrumb-container"], ["parent", ""], [1, "breadcrumb"], ["ngFor", "", 3, "ngForOf"], [1, "screen-title-section"], [1, "title", "main-txt-color"], [1, "inner-content-section"], ["class", "breadcrumb-item", 4, "ngIf"], ["class", "breadcrumb-item active", "aria-current", "page", 4, "ngIf"], [1, "breadcrumb-item"], ["href", "", 3, "routerLink"], ["aria-current", "page", 1, "breadcrumb-item", "active"]],
      template: function ContentSectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "breadcrumb", null, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ol", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ContentSectionComponent_ng_template_9_Template, 2, 2, "ng-template", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r893 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("color-theme", ctx.contentSectionTheme)("nav-layout", ctx.navLayout)("navbar-type", ctx.toggleStatus ? ctx.defaultNavbar : ctx.toggleNavbar)("effect-type", ctx.navbarEffect)("device-type", ctx.deviceType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, ctx.isScreenBarVisible == true));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r893.breadcrumbs);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("footer-theme", ctx.contentSectionTheme);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], angular_crumbs__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]],
      styles: [".app-content-section[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: calc(100vh - 60px);\n  position: relative;\n  padding: 0px;\n  background: #ecf0f8;\n  color: #333;\n  padding: 15px;\n  padding-bottom: 5px;\n}\n.app-content-section[_ngcontent-%COMP%]   .app-content-wrapper[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 130px);\n  padding-bottom: 10px;\n}\n.screenbar[_ngcontent-%COMP%] {\n  display: none;\n}\n.screenbar.show[_ngcontent-%COMP%] {\n  display: block;\n}\n.app-content-section[nav-layout=horizontal][_ngcontent-%COMP%] {\n  height: calc(100vh - 90px);\n}\n.app-content-section[nav-layout=horizontal][_ngcontent-%COMP%]   .app-content-wrapper[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 160px);\n}\n.app-content-section[nav-layout=vertical][navbar-type=expanded][effect-type=overlay][_ngcontent-%COMP%] {\n  margin-left: 0px;\n}\n.app-content-section[nav-layout=vertical][navbar-type=expanded][effect-type=shrink][_ngcontent-%COMP%] {\n  margin-left: 230px;\n}\n.app-content-section[nav-layout=vertical][navbar-type=expanded][effect-type=push][_ngcontent-%COMP%] {\n  margin-left: 230px;\n  margin-right: -230px;\n}\n.app-content-section[nav-layout=vertical][navbar-type=collapsed][effect-type=overlay][_ngcontent-%COMP%] {\n  margin-left: 0px;\n}\n.app-content-section[nav-layout=vertical][navbar-type=collapsed][effect-type=shrink][_ngcontent-%COMP%] {\n  margin-left: 50px;\n}\n.app-content-section[nav-layout=vertical][navbar-type=collapsed][effect-type=push][_ngcontent-%COMP%] {\n  margin-left: 50px;\n  margin-right: 0px;\n}\n.app-content-section[nav-layout=vertical][navbar-type=offcanvas][effect-type=overlay][_ngcontent-%COMP%] {\n  margin-left: 0px;\n}\n.app-content-section[nav-layout=vertical][navbar-type=offcanvas][effect-type=shrink][_ngcontent-%COMP%] {\n  margin-left: 0px;\n}\n.app-content-section[nav-layout=vertical][navbar-type=offcanvas][effect-type=push][_ngcontent-%COMP%] {\n  margin-left: 0px;\n  margin-right: 0px;\n}\n.screen-title-section[_ngcontent-%COMP%] {\n  float: left;\n  padding: 0 0px;\n}\n.screen-title-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 300;\n  padding: 0px;\n  margin: 0px;\n  margin-bottom: 10px;\n}\n.breadcrumb-container[_ngcontent-%COMP%] {\n  float: right;\n}\n.breadcrumb-container[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%] {\n  background: transparent;\n  padding: 5px 0px;\n  margin-bottom: 0px;\n}\n.breadcrumb-container[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n.breadcrumb-container[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #333;\n  font-size: 12px;\n  font-weight: 400;\n}\n.breadcrumb-container[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item.active[_ngcontent-%COMP%] {\n  color: #333;\n  cursor: pointer;\n}\n.breadcrumb-container[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item.active[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.breadcrumb-container[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]    + .breadcrumb-item[_ngcontent-%COMP%]::before {\n  padding-left: 5px;\n}\n.inner-content-section[_ngcontent-%COMP%] {\n  padding: 10px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29tbW9uLWNvbXBvbmVudHMvY29udGVudC1zZWN0aW9uL0Y6XFxuZXd0cmFkZXJcXHRyYWRlcjQtNS9zcmNcXGFwcFxccGFnZXNcXGNvbW1vbi1jb21wb25lbnRzXFxjb250ZW50LXNlY3Rpb25cXGNvbnRlbnQtc2VjdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvY29tbW9uLWNvbXBvbmVudHMvY29udGVudC1zZWN0aW9uL2NvbnRlbnQtc2VjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0FKO0FEQ0k7RUFDSSwrQkFBQTtFQUNBLG9CQUFBO0FDQ1I7QURHQTtFQUNJLGFBQUE7QUNBSjtBREdBO0VBQ0ksY0FBQTtBQ0FKO0FER0E7RUFDSSwwQkFBQTtBQ0FKO0FEQ0k7RUFDSSwrQkFBQTtBQ0NSO0FESUE7RUFDSSxnQkFBQTtBQ0RKO0FESUE7RUFDSSxrQkFBQTtBQ0RKO0FESUE7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0FDREo7QURLQTtFQUNJLGdCQUFBO0FDRko7QURLQTtFQUNJLGlCQUFBO0FDRko7QURLQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUNGSjtBRE1BO0VBQ0ksZ0JBQUE7QUNISjtBRE1BO0VBQ0ksZ0JBQUE7QUNISjtBRE1BO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQ0hKO0FETUE7RUFFSSxXQUFBO0VBQ0EsY0FBQTtBQ0pKO0FES0k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDSFI7QURPQTtFQUNJLFlBQUE7QUNKSjtBREtJO0VBQ0ksdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDSFI7QURJUTtFQUNJLFlBQUE7QUNGWjtBREdZO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0RoQjtBRElRO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUNGWjtBRElRO0VBQ0ksMEJBQUE7QUNGWjtBRElRO0VBQ0ksaUJBQUE7QUNGWjtBRE9BO0VBQ0ksaUJBQUE7QUNKSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbW1vbi1jb21wb25lbnRzL2NvbnRlbnQtc2VjdGlvbi9jb250ZW50LXNlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy90aGVtZSc7XHJcbi5hcHAtY29udGVudC1zZWN0aW9uIHtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2MHB4KTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGJhY2tncm91bmQ6ICNlY2YwZjg7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgLmFwcC1jb250ZW50LXdyYXBwZXIge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMzBweCk7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zY3JlZW5iYXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnNjcmVlbmJhci5zaG93IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uYXBwLWNvbnRlbnQtc2VjdGlvbltuYXYtbGF5b3V0PVwiaG9yaXpvbnRhbFwiXSB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA5MHB4KTtcclxuICAgIC5hcHAtY29udGVudC13cmFwcGVyIHtcclxuICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTYwcHgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBMYXlvdXQgU3R5bGUgQWNjb3JkaW5nIEV4cGVuZGVkIFNpZGViYXJcclxuLmFwcC1jb250ZW50LXNlY3Rpb25bbmF2LWxheW91dD1cInZlcnRpY2FsXCJdW25hdmJhci10eXBlPVwiZXhwYW5kZWRcIl1bZWZmZWN0LXR5cGU9XCJvdmVybGF5XCJdIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbn1cclxuXHJcbi5hcHAtY29udGVudC1zZWN0aW9uW25hdi1sYXlvdXQ9XCJ2ZXJ0aWNhbFwiXVtuYXZiYXItdHlwZT1cImV4cGFuZGVkXCJdW2VmZmVjdC10eXBlPVwic2hyaW5rXCJdIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMzBweDtcclxufVxyXG5cclxuLmFwcC1jb250ZW50LXNlY3Rpb25bbmF2LWxheW91dD1cInZlcnRpY2FsXCJdW25hdmJhci10eXBlPVwiZXhwYW5kZWRcIl1bZWZmZWN0LXR5cGU9XCJwdXNoXCJdIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMzBweDtcclxuICAgIG1hcmdpbi1yaWdodDogLTIzMHB4O1xyXG59XHJcblxyXG4vLyBMYXlvdXQgU3R5bGUgQWNjb3JkaW5nIGNvbGxhcHNlZCBTaWRlYmFyXHJcbi5hcHAtY29udGVudC1zZWN0aW9uW25hdi1sYXlvdXQ9XCJ2ZXJ0aWNhbFwiXVtuYXZiYXItdHlwZT1cImNvbGxhcHNlZFwiXVtlZmZlY3QtdHlwZT1cIm92ZXJsYXlcIl0ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxufVxyXG5cclxuLmFwcC1jb250ZW50LXNlY3Rpb25bbmF2LWxheW91dD1cInZlcnRpY2FsXCJdW25hdmJhci10eXBlPVwiY29sbGFwc2VkXCJdW2VmZmVjdC10eXBlPVwic2hyaW5rXCJdIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG59XHJcblxyXG4uYXBwLWNvbnRlbnQtc2VjdGlvbltuYXYtbGF5b3V0PVwidmVydGljYWxcIl1bbmF2YmFyLXR5cGU9XCJjb2xsYXBzZWRcIl1bZWZmZWN0LXR5cGU9XCJwdXNoXCJdIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbi8vIExheW91dCBTdHlsZSBBY2NvcmRpbmcgb2ZmY2FudmFzIFNpZGViYXJcclxuLmFwcC1jb250ZW50LXNlY3Rpb25bbmF2LWxheW91dD1cInZlcnRpY2FsXCJdW25hdmJhci10eXBlPVwib2ZmY2FudmFzXCJdW2VmZmVjdC10eXBlPVwib3ZlcmxheVwiXSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG59XHJcblxyXG4uYXBwLWNvbnRlbnQtc2VjdGlvbltuYXYtbGF5b3V0PVwidmVydGljYWxcIl1bbmF2YmFyLXR5cGU9XCJvZmZjYW52YXNcIl1bZWZmZWN0LXR5cGU9XCJzaHJpbmtcIl0ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxufVxyXG5cclxuLmFwcC1jb250ZW50LXNlY3Rpb25bbmF2LWxheW91dD1cInZlcnRpY2FsXCJdW25hdmJhci10eXBlPVwib2ZmY2FudmFzXCJdW2VmZmVjdC10eXBlPVwicHVzaFwiXSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbi5zY3JlZW4tdGl0bGUtc2VjdGlvbiB7XHJcbiAgICAvLyBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAwIDBweDtcclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5icmVhZGNydW1iLWNvbnRhaW5lciB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAuYnJlYWRjcnVtYiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgLmJyZWFkY3J1bWItaXRlbSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmJyZWFkY3J1bWItaXRlbS5hY3RpdmUge1xyXG4gICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYnJlYWRjcnVtYi1pdGVtLmFjdGl2ZTpob3ZlciB7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYnJlYWRjcnVtYi1pdGVtKy5icmVhZGNydW1iLWl0ZW06OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmlubmVyLWNvbnRlbnQtc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcclxufVxyXG5cclxuLy8gQGVhY2ggJHRoZW1lLFxyXG4vLyAkbWFwIGluICRjb250ZW50VGhlbWUge1xyXG4vLyAgICAgLmFwcC1jb250ZW50LXNlY3Rpb25bY29sb3ItdGhlbWU9I3skdGhlbWV9XSB7XHJcbi8vICAgICAgICAgYmFja2dyb3VuZDogbWFwLWdldCgkbWFwLCBiYWNrZ3JvdW5kQ29sb3IpO1xyXG4vLyAgICAgICAgIGNvbG9yOiBtYXAtZ2V0KCRtYXAsIHByaW1hcnlUZXh0Q29sb3IpO1xyXG4vLyAgICAgICAgIGEge1xyXG4vLyAgICAgICAgICAgICBjb2xvcjogbWFwLWdldCgkbWFwLCBsaW5rQ29sb3IpO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gfSIsIi5hcHAtY29udGVudC1zZWN0aW9uIHtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2MHB4KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwcHg7XG4gIGJhY2tncm91bmQ6ICNlY2YwZjg7XG4gIGNvbG9yOiAjMzMzO1xuICBwYWRkaW5nOiAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuLmFwcC1jb250ZW50LXNlY3Rpb24gLmFwcC1jb250ZW50LXdyYXBwZXIge1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTMwcHgpO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLnNjcmVlbmJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zY3JlZW5iYXIuc2hvdyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uYXBwLWNvbnRlbnQtc2VjdGlvbltuYXYtbGF5b3V0PWhvcml6b250YWxdIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gOTBweCk7XG59XG4uYXBwLWNvbnRlbnQtc2VjdGlvbltuYXYtbGF5b3V0PWhvcml6b250YWxdIC5hcHAtY29udGVudC13cmFwcGVyIHtcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDE2MHB4KTtcbn1cblxuLmFwcC1jb250ZW50LXNlY3Rpb25bbmF2LWxheW91dD12ZXJ0aWNhbF1bbmF2YmFyLXR5cGU9ZXhwYW5kZWRdW2VmZmVjdC10eXBlPW92ZXJsYXldIHtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cblxuLmFwcC1jb250ZW50LXNlY3Rpb25bbmF2LWxheW91dD12ZXJ0aWNhbF1bbmF2YmFyLXR5cGU9ZXhwYW5kZWRdW2VmZmVjdC10eXBlPXNocmlua10ge1xuICBtYXJnaW4tbGVmdDogMjMwcHg7XG59XG5cbi5hcHAtY29udGVudC1zZWN0aW9uW25hdi1sYXlvdXQ9dmVydGljYWxdW25hdmJhci10eXBlPWV4cGFuZGVkXVtlZmZlY3QtdHlwZT1wdXNoXSB7XG4gIG1hcmdpbi1sZWZ0OiAyMzBweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMjMwcHg7XG59XG5cbi5hcHAtY29udGVudC1zZWN0aW9uW25hdi1sYXlvdXQ9dmVydGljYWxdW25hdmJhci10eXBlPWNvbGxhcHNlZF1bZWZmZWN0LXR5cGU9b3ZlcmxheV0ge1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuXG4uYXBwLWNvbnRlbnQtc2VjdGlvbltuYXYtbGF5b3V0PXZlcnRpY2FsXVtuYXZiYXItdHlwZT1jb2xsYXBzZWRdW2VmZmVjdC10eXBlPXNocmlua10ge1xuICBtYXJnaW4tbGVmdDogNTBweDtcbn1cblxuLmFwcC1jb250ZW50LXNlY3Rpb25bbmF2LWxheW91dD12ZXJ0aWNhbF1bbmF2YmFyLXR5cGU9Y29sbGFwc2VkXVtlZmZlY3QtdHlwZT1wdXNoXSB7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbn1cblxuLmFwcC1jb250ZW50LXNlY3Rpb25bbmF2LWxheW91dD12ZXJ0aWNhbF1bbmF2YmFyLXR5cGU9b2ZmY2FudmFzXVtlZmZlY3QtdHlwZT1vdmVybGF5XSB7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG5cbi5hcHAtY29udGVudC1zZWN0aW9uW25hdi1sYXlvdXQ9dmVydGljYWxdW25hdmJhci10eXBlPW9mZmNhbnZhc11bZWZmZWN0LXR5cGU9c2hyaW5rXSB7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG5cbi5hcHAtY29udGVudC1zZWN0aW9uW25hdi1sYXlvdXQ9dmVydGljYWxdW25hdmJhci10eXBlPW9mZmNhbnZhc11bZWZmZWN0LXR5cGU9cHVzaF0ge1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbn1cblxuLnNjcmVlbi10aXRsZS1zZWN0aW9uIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDAgMHB4O1xufVxuLnNjcmVlbi10aXRsZS1zZWN0aW9uIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmJyZWFkY3J1bWItY29udGFpbmVyIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLmJyZWFkY3J1bWItY29udGFpbmVyIC5icmVhZGNydW1iIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDVweCAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi5icmVhZGNydW1iLWNvbnRhaW5lciAuYnJlYWRjcnVtYiAuYnJlYWRjcnVtYi1pdGVtIHtcbiAgcGFkZGluZzogMHB4O1xufVxuLmJyZWFkY3J1bWItY29udGFpbmVyIC5icmVhZGNydW1iIC5icmVhZGNydW1iLWl0ZW0gYSB7XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4uYnJlYWRjcnVtYi1jb250YWluZXIgLmJyZWFkY3J1bWIgLmJyZWFkY3J1bWItaXRlbS5hY3RpdmUge1xuICBjb2xvcjogIzMzMztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmJyZWFkY3J1bWItY29udGFpbmVyIC5icmVhZGNydW1iIC5icmVhZGNydW1iLWl0ZW0uYWN0aXZlOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4uYnJlYWRjcnVtYi1jb250YWluZXIgLmJyZWFkY3J1bWIgLmJyZWFkY3J1bWItaXRlbSArIC5icmVhZGNydW1iLWl0ZW06OmJlZm9yZSB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuXG4uaW5uZXItY29udGVudC1zZWN0aW9uIHtcbiAgcGFkZGluZzogMTBweCAwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentSectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-content-section',
          templateUrl: './content-section.component.html',
          styleUrls: ['./content-section.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_services_screen_title_service__WEBPACK_IMPORTED_MODULE_1__["ScreenTitleService"]
        }, {
          type: _shared_services_handle_screen_bar_service__WEBPACK_IMPORTED_MODULE_2__["HandleScreenBarService"]
        }];
      }, {
        deviceType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        navLayout: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        defaultNavbar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        toggleStatus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        navbarEffect: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        toggleNavbar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        contentSectionTheme: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/common-components/footer/footer.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/pages/common-components/footer/footer.component.ts ***!
    \********************************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppPagesCommonComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_services_layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../shared/services/layout.service */
    "./src/app/shared/services/layout.service.ts");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent(layoutService) {
        _classCallCheck(this, FooterComponent);

        this.layoutService = layoutService;
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.layoutService.castContentSectionTheme.subscribe(function (theme) {
            return _this4.colorTheme = theme;
          });
        }
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_1__["LayoutService"]));
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      inputs: {
        deviceType: "deviceType",
        navLayout: "navLayout",
        defaultNavbar: "defaultNavbar",
        toggleStatus: "toggleStatus",
        navbarEffect: "navbarEffect",
        toggleNavbar: "toggleNavbar"
      },
      decls: 11,
      vars: 5,
      consts: [[1, "app-footer", "clearfix", "bg-f", "main-txt-color"], [1, "app-footer-wrapper", "clearfix"], [1, "text-center"], ["href", "https://marketwicks.com/", "target", "_blank"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xA9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " TradersRoom V3.0.0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Created by ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "marketwicks.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("color-theme", ctx.colorTheme)("nav-layout", ctx.navLayout)("navbar-type", ctx.toggleStatus ? ctx.defaultNavbar : ctx.toggleNavbar)("effect-type", ctx.navbarEffect)("device-type", ctx.deviceType);
        }
      },
      styles: [".app-footer[_ngcontent-%COMP%] {\n  display: block;\n  height: 50px;\n  line-height: 50px;\n  background: #FFF;\n  border-radius: 2px;\n  font-size: 13px;\n  box-shadow: 0px 0 5px rgba(0, 0, 0, 0.1);\n}\n.app-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #0168fa;\n}\n.app-footer[_ngcontent-%COMP%]   .app-footer-wrapper[_ngcontent-%COMP%] {\n  padding: 0 10px;\n}\n.app-footer[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n}\n.app-footer[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  text-decoration: none;\n  padding: 0 10px;\n}\n.app-footer[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-size: 13px;\n  font-weight: normal;\n  color: #0168fa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29tbW9uLWNvbXBvbmVudHMvZm9vdGVyL0Y6XFxuZXd0cmFkZXJcXHRyYWRlcjQtNS9zcmNcXGFwcFxccGFnZXNcXGNvbW1vbi1jb21wb25lbnRzXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvY29tbW9uLWNvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHdDQUFBO0FDQUo7QURDSTtFQUNJLGNBQUE7QUNDUjtBRENJO0VBQ0ksZUFBQTtBQ0NSO0FEQ0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0NSO0FEQVE7RUFDSSxxQkFBQTtFQUNBLGVBQUE7QUNFWjtBRERZO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDR2hCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29tbW9uLWNvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3RoZW1lJztcclxuLmFwcC1mb290ZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRkY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgYSB7XHJcbiAgICAgICAgY29sb3I6ICMwMTY4ZmE7XHJcbiAgICB9XHJcbiAgICAuYXBwLWZvb3Rlci13cmFwcGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICB9XHJcbiAgICAubmF2IHtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMTY4ZmE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIuYXBwLWZvb3RlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kOiAjRkZGO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgYm94LXNoYWRvdzogMHB4IDAgNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbi5hcHAtZm9vdGVyIGEge1xuICBjb2xvcjogIzAxNjhmYTtcbn1cbi5hcHAtZm9vdGVyIC5hcHAtZm9vdGVyLXdyYXBwZXIge1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG4uYXBwLWZvb3RlciAubmF2IHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi5hcHAtZm9vdGVyIC5uYXYgbGkge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbi5hcHAtZm9vdGVyIC5uYXYgbGkgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBjb2xvcjogIzAxNjhmYTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_services_layout_service__WEBPACK_IMPORTED_MODULE_1__["LayoutService"]
        }];
      }, {
        deviceType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        navLayout: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        defaultNavbar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        toggleStatus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        navbarEffect: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        toggleNavbar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/common-components/header/header.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/pages/common-components/header/header.component.ts ***!
    \********************************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppPagesCommonComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_services_layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../shared/services/layout.service */
    "./src/app/shared/services/layout.service.ts");
    /* harmony import */


    var _shared_guard_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../shared/guard/auth.service */
    "./src/app/shared/guard/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../../shared/services/global.service */
    "./src/app/shared/services/global.service.ts");
    /* harmony import */


    var _shared_services_header_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../../shared/services/header.service */
    "./src/app/shared/services/header.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var angular_feather__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! angular-feather */
    "./node_modules/angular-feather/__ivy_ngcc__/fesm2015/angular-feather.js");

    var _c0 = ["navbarTypeAttr"];

    function HeaderComponent_li_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "OORAFX");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "CRM Panel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_li_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r798 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_6_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r798);

          var ctx_r797 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r797.sidebarToggle();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i-feather", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_img_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 46);
      }

      if (rf & 2) {
        var ctx_r795 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r795.profilePic, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function HeaderComponent_img_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 47);
      }
    }

    var _c1 = function _c1() {
      return {
        exact: true
      };
    };

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent(layoutService, elRef, authService, activateRoute, router, globalService, headerService) {
        _classCallCheck(this, HeaderComponent);

        this.layoutService = layoutService;
        this.elRef = elRef;
        this.authService = authService;
        this.activateRoute = activateRoute;
        this.router = router;
        this.globalService = globalService;
        this.headerService = headerService;
        this.isSearchbarVisible = false;
        this.headerService.getLoggedUserDetail();
        this.headerService.getUserWalletDetail();
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "searchbarToggle",
        value: function searchbarToggle() {
          this.isSearchbarVisible = !this.isSearchbarVisible;
        }
      }, {
        key: "requestFullscreen",
        value: function requestFullscreen() {
          var ele;
          ele = document.documentElement;

          if (ele.requestFullscreen) {
            ele.requestFullscreen();
          } else if (ele.webkitRequestFullscreen) {
            ele.webkitRequestFullscreen();
          } else if (ele.mozRequestFullScreen) {
            ele.mozRequestFullScreen();
          } else if (ele.msRequestFullscreen) {
            ele.msRequestFullscreen();
          } else {
            console.log('Fullscreen API is not supported.');
          }
        }
      }, {
        key: "sidebarToggle",
        value: function sidebarToggle() {
          this.layoutService.getToggleStatus();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this5 = this;

          setTimeout(function () {
            _this5.loadDatas();

            _this5.userName = _this5.profileData.sProfile.uPersonalInfo.First;
            _this5.emailId = _this5.profileData.sProfile.uContactInfo.Email;
            _this5.profilePic = _this5.profileData.sProfile.uPersonalInfo.ProfilePic;
          }, 100);
        } // Logout from Application

      }, {
        key: "logout",
        value: function logout() {
          this.authService.logout();
          this.router.navigate(['/auth/login']);
        }
      }, {
        key: "loadDatas",
        value: function loadDatas() {
          var _this6 = this;

          this.subscription1 = this.headerService.castLoggedUserDetail.subscribe(function (profileData) {
            return _this6.profileData = profileData;
          });
          this.subscription2 = this.headerService.castWalletBalance.subscribe(function (resData) {
            return _this6.walletBalance = resData;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription1.unsubscribe();
          this.subscription2.unsubscribe();
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_1__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_guard_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_header_service__WEBPACK_IMPORTED_MODULE_5__["HeaderService"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      viewQuery: function HeaderComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.navbarTypeAttr = _t.first);
        }
      },
      inputs: {
        deviceType: "deviceType",
        navLayout: "navLayout",
        defaultNavbar: "defaultNavbar",
        toggleStatus: "toggleStatus",
        navbarEffect: "navbarEffect",
        toggleNavbar: "toggleNavbar",
        headerColorTheme: "headerColorTheme",
        collapsedHeader: "collapsedHeader"
      },
      decls: 55,
      vars: 17,
      consts: [[1, "app-header", "clearfix"], ["navbarTypeAttr", ""], [1, "app-header-wrapper", "clearfix"], [1, "left-header", "float-left"], ["class", "header-logo-area", 4, "ngIf"], [4, "ngIf"], [1, "nav-pills", "screen-area"], ["routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLink", "/home/dashboard"], ["routerLink", "/home/partner-area/ib-request"], [1, "right-header", "float-right"], [1, "clearfix"], [1, "balance-area"], ["href", "javascript:void(0)", 1, "balance-box"], [1, "d-flex", "flex-row", "justify-content-center", "align-items-center"], [1, "icon-area"], [1, "material-icons"], [1, "text-area"], [1, "text-size-15", "font-weight-400"], [1, "text-size-11", "text-align-centyer"], ["ngbDropdown", "", "display", "dynamic", "placement", "bottom-right", 1, "drop-down", "profile-dropdown", "dropdown-cart"], ["id", "user-profile", "ngbDropdownToggle", "", 1, ""], [1, "media"], ["class", "mr-2 pro-img", "alt", "user Profile", 3, "src", 4, "ngIf"], ["class", "mr-2 pro-img", "src", "../../../../assets/images/avatar-default.png", "alt", "", 4, "ngIf"], [1, "media-body"], [1, "pro-name"], ["name", "chevron-down", 1, "icon-size-17"], [1, "pro-desc"], ["ngbDropdownMenu", "", "aria-labelledby", "user-profile", 1, "dropdown-menu"], ["routerLink", "/home/profile/view", "ngbDropdownItem", ""], ["name", "User", 1, "icon"], ["routerLink", "/home/platforms", "ngbDropdownItem", ""], ["name", "download-cloud", 1, "icon"], ["routerLink", "/home/profile/change-password", "ngbDropdownItem", ""], ["name", "key", 1, "icon"], [1, "dropdown-divider"], ["ngbDropdownItem", "", 3, "click"], ["name", "log-out", 1, "icon"], [1, "header-logo-area"], [1, "logo"], ["src", "assets/images/brand-logo.png", "alt", "logo"], [1, "logo-text"], [1, "small"], ["href", "javascript:void(0)", 1, "sidebarToggle", 3, "click"], ["name", "menu", 1, "toggle-btn"], ["alt", "user Profile", 1, "mr-2", "pro-img", 3, "src"], ["src", "../../../../assets/images/avatar-default.png", "alt", "", 1, "mr-2", "pro-img"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HeaderComponent_li_5_Template, 8, 0, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeaderComponent_li_6_Template, 3, 0, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Client Area");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Partner Area");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " account_balance_wallet ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Wallet Balance");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, HeaderComponent_img_33_Template, 1, 1, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, HeaderComponent_img_34_Template, 1, 0, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h5", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i-feather", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i-feather", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "My Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i-feather", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Download");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i-feather", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Change Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_52_listener() {
            return ctx.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i-feather", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("collapsed-header", ctx.collapsedHeader)("nav-layout", ctx.navLayout)("navbar-type", ctx.toggleStatus ? ctx.defaultNavbar : ctx.toggleNavbar)("effect-type", ctx.navbarEffect)("device-type", ctx.deviceType)("color-theme", ctx.headerColorTheme);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.navLayout === "horizontal" && ctx.deviceType !== "phone" || ctx.navLayout === "vertical" && ctx.collapsedHeader === false && ctx.deviceType !== "phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.navLayout === "horizontal" && ctx.deviceType === "phone" || ctx.navLayout === "vertical");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$ ", ctx.walletBalance, ".00 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profilePic);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.profilePic);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.userName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.emailId);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownToggle"], angular_feather__WEBPACK_IMPORTED_MODULE_8__["ɵa"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownMenu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownItem"]],
      styles: [".app-header[_ngcontent-%COMP%] {\n  padding: 0px;\n  margin: 0px;\n  position: relative;\n  height: 60px;\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n}\n.app-header[_ngcontent-%COMP%]   .app-header-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.app-header[_ngcontent-%COMP%]   .app-header-wrapper[_ngcontent-%COMP%]   .toggle-btn[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.app-header[_ngcontent-%COMP%]   .app-header-wrapper[_ngcontent-%COMP%]   .header-logo-area[_ngcontent-%COMP%] {\n  padding: 7px 8px !important;\n  width: 190px;\n}\n.app-header[_ngcontent-%COMP%]   .app-header-wrapper[_ngcontent-%COMP%]   .header-logo-area[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  background: transparent !important;\n  float: left;\n  border-radius: 2px;\n  font-size: 21px;\n  text-align: center;\n  margin-right: 5px;\n}\n.app-header[_ngcontent-%COMP%]   .app-header-wrapper[_ngcontent-%COMP%]   .header-logo-area[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 45px;\n}\n.app-header[_ngcontent-%COMP%]   .app-header-wrapper[_ngcontent-%COMP%]   .header-logo-area[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%] {\n  position: relative;\n  top: 6px;\n  padding: 0px;\n  float: left;\n  line-height: 18px;\n}\n.app-header[_ngcontent-%COMP%]   .app-header-wrapper[_ngcontent-%COMP%]   .header-logo-area[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 0px;\n  margin: 0px;\n  font-size: 18px;\n  font-weight: 600;\n}\n.app-header[_ngcontent-%COMP%]   .app-header-wrapper[_ngcontent-%COMP%]   .header-logo-area[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%] {\n  padding: 0px;\n  margin: 0px;\n  font-size: 13px;\n  font-weight: 500;\n}\n.app-header[_ngcontent-%COMP%]   .app-header-wrapper[_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 8px;\n}\n.app-header[_ngcontent-%COMP%]   .app-header-wrapper[_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  -webkit-animation: animate-pulse 1.5s infinite;\n          animation: animate-pulse 1.5s infinite;\n}\n.app-header[_ngcontent-%COMP%]   .app-header-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.app-header[_ngcontent-%COMP%]   .app-header-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  float: left;\n  margin: 0px;\n  position: relative;\n}\n.app-header[_ngcontent-%COMP%]   .app-header-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  padding: 20px 10px;\n}\n.app-header[_ngcontent-%COMP%]   .app-header-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n.app-header[_ngcontent-%COMP%]   .app-header-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .nav-icon-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 7px;\n  right: 5px;\n  font-size: 11px;\n  font-weight: 500;\n  border-radius: 4px;\n}\n.app-header[_ngcontent-%COMP%]   .app-header-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.app-header[_ngcontent-%COMP%]   .app-header-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n  border: 0px;\n  z-index: 1025;\n  top: -2px !important;\n}\n.app-header[_ngcontent-%COMP%]   .app-header-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  font-weight: 400;\n  padding: 4px 10px;\n  margin: 0px;\n}\n.app-header[_ngcontent-%COMP%]   .app-header-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border-radius: 3px;\n  background: transparent;\n  margin: 0;\n  margin-right: 5px;\n}\n.app-header[_ngcontent-%COMP%]   .app-header-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:after {\n  display: none;\n}\n.app-header[_ngcontent-%COMP%]   .profile-dropdown[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  padding: 12px 10px !important;\n}\n.app-header[_ngcontent-%COMP%]   .profile-dropdown[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  text-decoration: none;\n  cursor: pointer;\n}\n.app-header[_ngcontent-%COMP%]   .profile-dropdown[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.app-header[_ngcontent-%COMP%]   .profile-dropdown[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   .pro-img[_ngcontent-%COMP%] {\n  padding: 0px;\n  border-radius: 100%;\n  border-width: 2px;\n  border-style: solid;\n  width: 35px;\n}\n.app-header[_ngcontent-%COMP%]   .profile-dropdown[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%] {\n  padding: 0;\n  font-size: 12px;\n}\n.app-header[_ngcontent-%COMP%]   .profile-dropdown[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   .pro-name[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  font-size: 14px;\n  font-weight: 400;\n}\n.app-header[_ngcontent-%COMP%]   .profile-dropdown[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   .pro-desc[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  font-size: 11px;\n}\n.app-header[_ngcontent-%COMP%]   .profile-dropdown[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 21px;\n  position: relative;\n  top: -10px;\n  border-radius: 2px;\n  margin-left: 4px;\n}\n.app-header[_ngcontent-%COMP%]   .notification-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  width: 315px;\n  border-radius: 0px;\n  padding: 0px;\n}\n.app-header[_ngcontent-%COMP%]   .notification-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-header[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 10px 10px;\n  font-size: 13px;\n  font-weight: 400;\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n  border-radius: 0px;\n}\n.app-header[_ngcontent-%COMP%]   .notification-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.app-header[_ngcontent-%COMP%]   .notification-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-body[_ngcontent-%COMP%] {\n  height: 250px;\n  overflow-y: auto;\n}\n.app-header[_ngcontent-%COMP%]   .notification-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.app-header[_ngcontent-%COMP%]   .notification-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.app-header[_ngcontent-%COMP%]   .notification-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  box-shadow: none !important;\n}\n.app-header[_ngcontent-%COMP%]   .notification-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  white-space: normal;\n  padding: 10px;\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n}\n.app-header[_ngcontent-%COMP%]   .notification-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .notification-list-item[_ngcontent-%COMP%] {\n  display: table;\n}\n.app-header[_ngcontent-%COMP%]   .notification-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .notification-list-item[_ngcontent-%COMP%]   .notification-item-icon[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n  border-radius: 2px;\n}\n.app-header[_ngcontent-%COMP%]   .notification-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .notification-list-item[_ngcontent-%COMP%]   .notification-item-desc[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n}\n.app-header[_ngcontent-%COMP%]   .notification-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .notification-list-item[_ngcontent-%COMP%]   .notification-item-desc[_ngcontent-%COMP%]   .notification-item-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin: 0;\n  padding: 0;\n  font-weight: 400;\n}\n.app-header[_ngcontent-%COMP%]   .notification-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .notification-list-item[_ngcontent-%COMP%]   .notification-item-desc[_ngcontent-%COMP%]   .short-desc[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n  font-size: 13px;\n  font-weight: 300;\n}\n.app-header[_ngcontent-%COMP%]   .notification-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .notification-list-item[_ngcontent-%COMP%]   .notification-item-desc[_ngcontent-%COMP%]   .notification-item-time[_ngcontent-%COMP%] {\n  font-size: 85%;\n  margin: 0;\n  padding: 0;\n  text-align: right;\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  font-weight: 400;\n}\n.app-header[_ngcontent-%COMP%]   .notification-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-list-footer[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n.app-header[_ngcontent-%COMP%]   .notification-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-list-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #0168fa;\n}\n.app-header[_ngcontent-%COMP%]   .dropdown-cart[_ngcontent-%COMP%]:after {\n  display: none;\n  content: \"\";\n  position: absolute;\n  bottom: -13px;\n  right: 10px;\n  width: 0.75rem;\n  height: 0.75rem;\n  -webkit-transform: rotate(45deg) translate(-7px);\n  transform: rotate(45deg) translate(-7px);\n  border-top: 1px solid;\n  border-left: 1px solid;\n  z-index: 10;\n  box-sizing: border-box;\n}\n.app-header[_ngcontent-%COMP%]   .dropdown-cart.show[_ngcontent-%COMP%]:after {\n  display: block;\n}\n.app-header[_ngcontent-%COMP%]   .message-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  width: 315px;\n  border-radius: 0px;\n  padding: 0px;\n}\n.app-header[_ngcontent-%COMP%]   .message-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-header[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 10px 10px;\n  font-size: 13px;\n  font-weight: 400;\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n  border-radius: 0px;\n}\n.app-header[_ngcontent-%COMP%]   .message-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.app-header[_ngcontent-%COMP%]   .message-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-body[_ngcontent-%COMP%] {\n  overflow-y: auto;\n}\n.app-header[_ngcontent-%COMP%]   .message-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.app-header[_ngcontent-%COMP%]   .message-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.app-header[_ngcontent-%COMP%]   .message-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  box-shadow: none !important;\n}\n.app-header[_ngcontent-%COMP%]   .message-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  white-space: normal;\n  padding: 10px;\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n}\n.app-header[_ngcontent-%COMP%]   .message-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .message-list-item[_ngcontent-%COMP%] {\n  display: table;\n}\n.app-header[_ngcontent-%COMP%]   .message-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .message-list-item[_ngcontent-%COMP%]   .message-item-img[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n}\n.app-header[_ngcontent-%COMP%]   .message-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .message-list-item[_ngcontent-%COMP%]   .message-item-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  border-radius: 100%;\n  border-style: solid;\n  border-width: 1px;\n}\n.app-header[_ngcontent-%COMP%]   .message-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .message-list-item[_ngcontent-%COMP%]   .message-item-desc[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n}\n.app-header[_ngcontent-%COMP%]   .message-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .message-list-item[_ngcontent-%COMP%]   .message-item-desc[_ngcontent-%COMP%]   .message-item-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin: 0;\n  padding: 0;\n  font-weight: 400;\n}\n.app-header[_ngcontent-%COMP%]   .message-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .message-list-item[_ngcontent-%COMP%]   .message-item-desc[_ngcontent-%COMP%]   .message-item-title[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.app-header[_ngcontent-%COMP%]   .message-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .message-list-item[_ngcontent-%COMP%]   .message-item-desc[_ngcontent-%COMP%]   .message-item-time[_ngcontent-%COMP%] {\n  font-size: 85%;\n  margin: 0;\n  padding: 0;\n  text-align: right;\n  position: absolute;\n  bottom: 8px;\n  right: 8px;\n  font-weight: 400;\n}\n.app-header[_ngcontent-%COMP%]   .message-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-list-footer[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n.app-header[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%]   .search-dropdown-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  padding: 10px;\n  left: 0;\n  z-index: 1025;\n  height: 50px;\n  top: 0;\n}\n.app-header[_ngcontent-%COMP%]   .apps-dropdown[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.app-header[_ngcontent-%COMP%]   .apps-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  width: 250px;\n  padding: 5px;\n  border-radius: 0;\n}\n.app-header[_ngcontent-%COMP%]   .apps-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.app-header[_ngcontent-%COMP%]   .apps-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  list-style: none;\n  width: 50%;\n  text-align: center;\n  padding: 10px;\n  border-radius: 0px;\n}\n.app-header[_ngcontent-%COMP%]   .apps-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: block !important;\n  border-style: solid;\n  border-width: 1px;\n  height: 80px;\n  padding: 14px 0px !important;\n  border-radius: 0px;\n}\n.app-header[_ngcontent-%COMP%]   .apps-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 auto !important;\n  width: 21px !important;\n  margin-bottom: 5px !important;\n  height: 21px !important;\n}\n.app-header[device-type=phone][_ngcontent-%COMP%]   .notification-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  -webkit-transform: translate(-170px, 50px) !important;\n          transform: translate(-170px, 50px) !important;\n}\n.app-header[device-type=phone][_ngcontent-%COMP%]   .message-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  -webkit-transform: translate(-125px, 50px) !important;\n          transform: translate(-125px, 50px) !important;\n}\n.app-header[_ngcontent-%COMP%]:after, .app-header[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: block;\n  clear: both;\n}\n.app-header[nav-layout=vertical][collapsed-header=false][_ngcontent-%COMP%] {\n  margin-left: 0px !important;\n}\n.app-header[nav-layout=vertical][collapsed-header=true][navbar-type=expanded][effect-type=overlay][_ngcontent-%COMP%] {\n  margin-left: 0px;\n}\n.app-header[nav-layout=vertical][collapsed-header=true][navbar-type=expanded][effect-type=shrink][_ngcontent-%COMP%] {\n  margin-left: 230px;\n}\n.app-header[nav-layout=vertical][collapsed-header=true][navbar-type=expanded][effect-type=push][_ngcontent-%COMP%] {\n  margin-left: 230px;\n  margin-right: -230px;\n}\n.app-header[nav-layout=vertical][collapsed-header=true][navbar-type=collapsed][effect-type=overlay][_ngcontent-%COMP%] {\n  margin-left: 50px;\n}\n.app-header[nav-layout=vertical][collapsed-header=true][navbar-type=collapsed][effect-type=shrink][_ngcontent-%COMP%] {\n  margin-left: 50px;\n}\n.app-header[nav-layout=vertical][collapsed-header=true][navbar-type=collapsed][effect-type=push][_ngcontent-%COMP%] {\n  margin-left: 50px;\n  margin-right: 0px;\n}\n.app-header[nav-layout=vertical][collapsed-header=true][navbar-type=offcanvas][effect-type=overlay][_ngcontent-%COMP%] {\n  margin-left: 0px;\n}\n.app-header[nav-layout=vertical][collapsed-header=true][navbar-type=offcanvas][effect-type=shrink][_ngcontent-%COMP%] {\n  margin-left: 0px;\n}\n.app-header[nav-layout=vertical][collapsed-header=true][navbar-type=offcanvas][effect-type=push][_ngcontent-%COMP%] {\n  margin-left: 0px;\n  margin-right: 0px;\n}\n.sidebarToggle[_ngcontent-%COMP%] {\n  display: inline-block;\n  cursor: pointer;\n}\n.app-header[_ngcontent-%COMP%] {\n  background: #FFF;\n  border-bottom-color: #dcdcdc;\n}\n.app-header[_ngcontent-%COMP%]   .header-logo-area[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  background: #0168fa;\n  color: #FFF;\n}\n.app-header[_ngcontent-%COMP%]   .header-logo-area[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%] {\n  color: #0168fa;\n}\n.app-header[_ngcontent-%COMP%]   .header-logo-area[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%] {\n  color: #333;\n}\n.app-header[_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  background: #0168fa;\n}\n.app-header[_ngcontent-%COMP%]   .app-search-bar[_ngcontent-%COMP%] {\n  background: #FFF;\n  border-bottom-color: #dcdcdc;\n}\n.app-header[_ngcontent-%COMP%]   .app-search-bar[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #637890;\n}\n.app-header[_ngcontent-%COMP%]   .app-search-bar[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-moz-placeholder {\n  color: #637890;\n}\n.app-header[_ngcontent-%COMP%]   .app-search-bar[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: #637890;\n}\n.app-header[_ngcontent-%COMP%]   .app-search-bar[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder {\n  color: #637890;\n}\n.app-header[_ngcontent-%COMP%]   .app-search-bar[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: #637890;\n}\n.app-header[_ngcontent-%COMP%]   .app-search-bar[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: #637890;\n}\n.app-header[_ngcontent-%COMP%]   .app-search-bar[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  color: #333;\n}\n.app-header[_ngcontent-%COMP%]   .app-search-bar[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  color: #333;\n}\n.app-header[_ngcontent-%COMP%]   .app-search-bar[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  color: #333;\n  background: #FFF;\n}\n.app-header[_ngcontent-%COMP%]   .left-header[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .app-header[_ngcontent-%COMP%]   .right-header[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: #333;\n}\n.app-header[_ngcontent-%COMP%]   .left-header[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, .app-header[_ngcontent-%COMP%]   .right-header[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  color: #0168fa;\n}\n.app-header[_ngcontent-%COMP%]   .dropdown-cart[_ngcontent-%COMP%]:after {\n  background: #dcdcdc;\n  border-color: #dcdcdc;\n}\n.app-header[_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  background: #FFF;\n}\n.app-header[_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-header[_ngcontent-%COMP%] {\n  border-bottom-color: #f1f1f1;\n  color: #333;\n}\n.app-header[_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #333;\n}\n.app-header[_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover, .app-header[_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:focus {\n  background: rgba(234, 235, 243, 0.5);\n}\n.app-header[_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #333;\n  background-color: transparent;\n  border-color: #f1f1f1;\n}\n.app-header[_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .app-header[_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n  background: rgba(234, 235, 243, 0.5);\n}\n.app-header[_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .light-text[_ngcontent-%COMP%] {\n  color: #334151;\n}\n.app-header[_ngcontent-%COMP%]   .dropdown-list-footer.dropdown-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #333 !important;\n}\n.app-header[_ngcontent-%COMP%]   .dropdown-list-footer.dropdown-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #0168fa !important;\n  background: transparent !important;\n}\n.app-header[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   .pro-img[_ngcontent-%COMP%] {\n  border-color: #f1f1f1;\n}\n.app-header[_ngcontent-%COMP%]   .message-item-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-color: #f1f1f1;\n}\n.app-header[color-theme=light][_ngcontent-%COMP%] {\n  background: #FFF;\n  border-bottom-color: #dcdcdc;\n}\n.app-header[color-theme=light][_ngcontent-%COMP%]   .header-logo-area[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  background: #0168fa;\n  color: #FFF;\n}\n.app-header[color-theme=light][_ngcontent-%COMP%]   .header-logo-area[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%] {\n  color: #0168fa;\n}\n.app-header[color-theme=light][_ngcontent-%COMP%]   .header-logo-area[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%] {\n  color: #333;\n}\n.app-header[color-theme=light][_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  background: #0168fa;\n}\n.app-header[color-theme=light][_ngcontent-%COMP%]   .left-header[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .app-header[color-theme=light][_ngcontent-%COMP%]   .right-header[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: #333;\n}\n.app-header[color-theme=light][_ngcontent-%COMP%]   .left-header[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, .app-header[color-theme=light][_ngcontent-%COMP%]   .right-header[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  color: #0168fa;\n}\n.app-header[color-theme=light][_ngcontent-%COMP%]   .dropdown-cart[_ngcontent-%COMP%]:after {\n  background: #dcdcdc;\n  border-color: #dcdcdc;\n}\n.app-header[color-theme=light][_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  background: #FFF;\n}\n.app-header[color-theme=light][_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-header[_ngcontent-%COMP%] {\n  border-bottom-color: #f1f1f1;\n  color: #333;\n}\n.app-header[color-theme=light][_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #333;\n}\n.app-header[color-theme=light][_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover, .app-header[color-theme=light][_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:focus {\n  background: rgba(234, 235, 243, 0.5);\n  color: #0168fa;\n}\n.app-header[color-theme=light][_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #333;\n  background-color: transparent;\n  border-color: #f1f1f1;\n}\n.app-header[color-theme=light][_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .app-header[color-theme=light][_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n  background: rgba(234, 235, 243, 0.5);\n  color: #0168fa;\n}\n.app-header[color-theme=light][_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .light-text[_ngcontent-%COMP%] {\n  color: #4d4d4d;\n}\n.app-header[color-theme=light][_ngcontent-%COMP%]   .dropdown-list-footer.dropdown-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #333 !important;\n}\n.app-header[color-theme=light][_ngcontent-%COMP%]   .dropdown-list-footer.dropdown-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #0168fa !important;\n  background: transparent !important;\n}\n.app-header[color-theme=light][_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   .pro-img[_ngcontent-%COMP%] {\n  border-color: #dcdcdc;\n}\n.app-header[color-theme=light][_ngcontent-%COMP%]   .message-item-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-color: #dcdcdc;\n}\n.app-header[color-theme=light][_ngcontent-%COMP%]   .app-search-bar[_ngcontent-%COMP%] {\n  background: #FFF;\n  border-bottom-color: #dcdcdc;\n}\n.app-header[color-theme=light][_ngcontent-%COMP%]   .app-search-bar[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #637890;\n}\n.app-header[color-theme=light][_ngcontent-%COMP%]   .app-search-bar[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-moz-placeholder {\n  color: #637890;\n}\n.app-header[color-theme=light][_ngcontent-%COMP%]   .app-search-bar[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: #637890;\n}\n.app-header[color-theme=light][_ngcontent-%COMP%]   .app-search-bar[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder {\n  color: #637890;\n}\n.app-header[color-theme=light][_ngcontent-%COMP%]   .app-search-bar[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: #637890;\n}\n.app-header[color-theme=light][_ngcontent-%COMP%]   .app-search-bar[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: #637890;\n}\n.app-header[color-theme=light][_ngcontent-%COMP%]   .app-search-bar[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  color: #333;\n}\n.app-header[color-theme=light][_ngcontent-%COMP%]   .app-search-bar[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  color: #333;\n}\n.app-header[color-theme=light][_ngcontent-%COMP%]   .app-search-bar[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  color: #333;\n  background: #FFF;\n}\n.app-header[color-theme=light][_ngcontent-%COMP%]   .dropdown-divider[_ngcontent-%COMP%] {\n  border-top-color: #dcdcdc;\n}\n.app-header[color-theme=dark][_ngcontent-%COMP%] {\n  background: #2a3444;\n  border-bottom-color: #4f5969;\n}\n.app-header[color-theme=dark][_ngcontent-%COMP%]   .header-logo-area[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  background: #0168fa;\n  color: #FFF;\n}\n.app-header[color-theme=dark][_ngcontent-%COMP%]   .header-logo-area[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%] {\n  color: #0168fa;\n}\n.app-header[color-theme=dark][_ngcontent-%COMP%]   .header-logo-area[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%] {\n  color: #8699ad;\n}\n.app-header[color-theme=dark][_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  background: #0168fa;\n}\n.app-header[color-theme=dark][_ngcontent-%COMP%]   .left-header[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .app-header[color-theme=dark][_ngcontent-%COMP%]   .right-header[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: #8699ad;\n}\n.app-header[color-theme=dark][_ngcontent-%COMP%]   .left-header[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, .app-header[color-theme=dark][_ngcontent-%COMP%]   .right-header[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  color: #FFF;\n}\n.app-header[color-theme=dark][_ngcontent-%COMP%]   .dropdown-cart[_ngcontent-%COMP%]:after {\n  background: #4f5969;\n  border-color: #4f5969;\n}\n.app-header[color-theme=dark][_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  background: #363e4a;\n}\n.app-header[color-theme=dark][_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-header[_ngcontent-%COMP%] {\n  border-bottom-color: #4f5969;\n  color: #8699ad;\n}\n.app-header[color-theme=dark][_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #8699ad;\n}\n.app-header[color-theme=dark][_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover, .app-header[color-theme=dark][_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:focus {\n  background: #2a3444;\n  color: #FFF;\n}\n.app-header[color-theme=dark][_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #8699ad;\n  background-color: transparent;\n  border-color: #4f5969;\n}\n.app-header[color-theme=dark][_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .app-header[color-theme=dark][_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n  background: #2a3444;\n  color: #FFF;\n}\n.app-header[color-theme=dark][_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .light-text[_ngcontent-%COMP%] {\n  color: #a4b3c2;\n}\n.app-header[color-theme=dark][_ngcontent-%COMP%]   .dropdown-list-footer.dropdown-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #8699ad !important;\n}\n.app-header[color-theme=dark][_ngcontent-%COMP%]   .dropdown-list-footer.dropdown-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #FFF !important;\n  background: transparent !important;\n}\n.app-header[color-theme=dark][_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   .pro-img[_ngcontent-%COMP%] {\n  border-color: #4f5969;\n}\n.app-header[color-theme=dark][_ngcontent-%COMP%]   .message-item-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-color: #4f5969;\n}\n.app-header[color-theme=dark][_ngcontent-%COMP%]   .app-search-bar[_ngcontent-%COMP%] {\n  background: #2a3444;\n  border-bottom-color: #4f5969;\n}\n.app-header[color-theme=dark][_ngcontent-%COMP%]   .app-search-bar[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #637890;\n}\n.app-header[color-theme=dark][_ngcontent-%COMP%]   .app-search-bar[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-moz-placeholder {\n  color: #637890;\n}\n.app-header[color-theme=dark][_ngcontent-%COMP%]   .app-search-bar[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: #637890;\n}\n.app-header[color-theme=dark][_ngcontent-%COMP%]   .app-search-bar[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder {\n  color: #637890;\n}\n.app-header[color-theme=dark][_ngcontent-%COMP%]   .app-search-bar[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: #637890;\n}\n.app-header[color-theme=dark][_ngcontent-%COMP%]   .app-search-bar[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: #637890;\n}\n.app-header[color-theme=dark][_ngcontent-%COMP%]   .app-search-bar[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  color: #8699ad;\n}\n.app-header[color-theme=dark][_ngcontent-%COMP%]   .app-search-bar[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  color: #8699ad;\n}\n.app-header[color-theme=dark][_ngcontent-%COMP%]   .app-search-bar[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  color: #8699ad;\n  background: #2a3444;\n}\n.app-header[color-theme=dark][_ngcontent-%COMP%]   .dropdown-divider[_ngcontent-%COMP%] {\n  border-top-color: #4f5969;\n}\n.balance-area[_ngcontent-%COMP%]   .balance-box[_ngcontent-%COMP%] {\n  display: block;\n  padding: 8px 10px !important;\n}\n.balance-area[_ngcontent-%COMP%]   .balance-box[_ngcontent-%COMP%]   .icon-area[_ngcontent-%COMP%] {\n  padding: 4px 7px;\n  background: #eff3f6;\n  border-radius: 50%;\n  border: 2px solid #eff0f1;\n  position: relative;\n  margin: 0 5px;\n}\n.balance-area[_ngcontent-%COMP%]   .balance-box[_ngcontent-%COMP%]   .icon-area[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: relative;\n  top: 3px;\n  color: #0168fa;\n}\n.balance-area[_ngcontent-%COMP%]   .balance-box[_ngcontent-%COMP%]   .text-area[_ngcontent-%COMP%] {\n  line-height: 15px;\n}\n.screen-area[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #333;\n  font-size: 12px;\n  font-weight: 400;\n  padding: 4px 15px;\n  background: #eff3f6;\n  border-radius: 15px;\n}\n.screen-area[_ngcontent-%COMP%]   div.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: #0168fa;\n  color: #FFF;\n  border: 0px solid #0168fa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29tbW9uLWNvbXBvbmVudHMvaGVhZGVyL0Y6XFxuZXd0cmFkZXJcXHRyYWRlcjQtNS9zcmNcXGFwcFxccGFnZXNcXGNvbW1vbi1jb21wb25lbnRzXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvY29tbW9uLWNvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtBQ0FKO0FERUk7RUFDSSxXQUFBO0FDQVI7QURDUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQ1o7QURDUTtFQUNJLDJCQUFBO0VBQ0EsWUFBQTtBQ0NaO0FEVVk7RUFDSSxrQ0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFHQSxrQkFBQTtFQUNBLGlCQUFBO0FDVmhCO0FEWWdCO0VBQ0ksV0FBQTtBQ1ZwQjtBRGFZO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ1hoQjtBRFlnQjtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDVnBCO0FEWWdCO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNWcEI7QURjUTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNaWjtBRGFZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDhDQUFBO1VBQUEsc0NBQUE7QUNYaEI7QUQ4RFE7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDNURaO0FENkRZO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDM0RoQjtBRDREZ0I7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUMxRHBCO0FEMkRvQjtFQUNJLHFCQUFBO0FDekR4QjtBRDJEb0I7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUN6RHhCO0FENERnQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDMURwQjtBRDhEZ0I7RUFDSSw2Q0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7QUM1RHBCO0FENkRvQjtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUMzRHhCO0FENER3QjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBQzFENUI7QUQ4RGdCO0VBQ0ksYUFBQTtBQzVEcEI7QURpRUk7RUFDSSw2QkFBQTtBQy9EUjtBRGlFSTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQy9EUjtBRGdFUTtFQUNJLFVBQUE7QUM5RFo7QUQrRFk7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQzdEaEI7QUQrRFk7RUFDSSxVQUFBO0VBQ0EsZUFBQTtBQzdEaEI7QUQ4RGdCO0VBQ0ksVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUM1RHBCO0FEOERnQjtFQUNJLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQzVEcEI7QUQ4RGdCO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUM1RHBCO0FEa0VRO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ2hFWjtBRGlFWTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7QUMvRGhCO0FEZ0VnQjtFQUNJLGdCQUFBO0FDOURwQjtBRGlFWTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBQy9EaEI7QURnRWdCO0VBQ0ksZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQzlEcEI7QUQrRG9CO0VBQ0ksZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQzdEeEI7QUQ4RHdCO0VBQ0ksMkJBQUE7QUM1RDVCO0FEOER3QjtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQkFBQTtBQzVENUI7QUQ2RDRCO0VBQ0ksY0FBQTtBQzNEaEM7QUQ0RGdDO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDMURwQztBRDREZ0M7RUFDSSxtQkFBQTtFQUNBLHNCQUFBO0FDMURwQztBRDJEb0M7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ3pEeEM7QUQyRG9DO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUN6RHhDO0FEMkRvQztFQUNJLGNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDekR4QztBRGlFWTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQy9EaEI7QURnRWdCO0VBQ0ksY0FBQTtBQzlEcEI7QURzRUk7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdEQUFBO0VBRUEsd0NBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FDcEVSO0FEc0VJO0VBQ0ksY0FBQTtBQ3BFUjtBRHVFUTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNyRVo7QURzRVk7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBRUEsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0FDckVoQjtBRHNFZ0I7RUFDSSxnQkFBQTtBQ3BFcEI7QUR1RVk7RUFDSSxnQkFBQTtBQ3JFaEI7QURzRWdCO0VBQ0ksZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ3BFcEI7QURxRW9CO0VBQ0ksZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ25FeEI7QURvRXdCO0VBQ0ksMkJBQUE7QUNsRTVCO0FEcUV3QjtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtBQ25FNUI7QURxRTRCO0VBQ0ksY0FBQTtBQ25FaEM7QURvRWdDO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtBQ2xFcEM7QURtRW9DO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUVBLG1CQUFBO0VBQ0EsaUJBQUE7QUNsRXhDO0FEcUVnQztFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7QUNuRXBDO0FEb0VvQztFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDbEV4QztBRG9Fd0M7RUFDSSxnQkFBQTtBQ2xFNUM7QURxRW9DO0VBQ0ksY0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNuRXhDO0FENEVZO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FDMUVoQjtBRCtFUTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0FDN0VaO0FEaUZRO0VBQ0ksZUFBQTtBQy9FWjtBRGlGUTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUMvRVo7QURnRlk7RUFDSSxnQkFBQTtBQzlFaEI7QUQrRWdCO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDN0VwQjtBRDhFb0I7RUFDSSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUM1RXhCO0FENkV3QjtFQUNJLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtBQzNFNUI7QURzRlE7RUFDSSxxREFBQTtVQUFBLDZDQUFBO0FDbkZaO0FEdUZRO0VBQ0kscURBQUE7VUFBQSw2Q0FBQTtBQ3JGWjtBRDBGQTs7RUFFSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUN2Rko7QUQwRkE7RUFDSSwyQkFBQTtBQ3ZGSjtBRDJGQTtFQUNJLGdCQUFBO0FDeEZKO0FEMkZBO0VBQ0ksa0JBQUE7QUN4Rko7QUQyRkE7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0FDeEZKO0FENEZBO0VBQ0ksaUJBQUE7QUN6Rko7QUQ0RkE7RUFDSSxpQkFBQTtBQ3pGSjtBRDRGQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUN6Rko7QUQ2RkE7RUFDSSxnQkFBQTtBQzFGSjtBRDZGQTtFQUNJLGdCQUFBO0FDMUZKO0FENkZBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQzFGSjtBRDZGQTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtBQzFGSjtBRDhGQTtFQUNJLGdCQUFBO0VBQ0EsNEJBQUE7QUMzRko7QUQ2RlE7RUFDSSxtQkFBQTtFQUNBLFdBQUE7QUMzRlo7QUQ2RlE7RUFDSSxjQUFBO0FDM0ZaO0FENEZZO0VBQ0ksV0FBQTtBQzFGaEI7QUQrRlE7RUFDSSxtQkFBQTtBQzdGWjtBRGdHSTtFQUNJLGdCQUFBO0VBQ0EsNEJBQUE7QUM5RlI7QUQrRlM7RUFDRyxjQUFBO0FDN0ZaO0FENEZTO0VBQ0csY0FBQTtBQzdGWjtBRDRGUztFQUNHLGNBQUE7QUM3Rlo7QUQ0RlM7RUFDRyxjQUFBO0FDN0ZaO0FEK0ZTO0VBQ0csY0FBQTtBQzdGWjtBRCtGUztFQUNHLGNBQUE7QUM3Rlo7QURnR1k7RUFDSSxXQUFBO0FDOUZoQjtBRGdHWTtFQUNJLFdBQUE7QUM5RmhCO0FEZ0dZO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FDOUZoQjtBRGtHSTs7RUFFSSxXQUFBO0FDaEdSO0FEaUdROztFQUNJLGNBQUE7QUM5Rlo7QURpR0k7RUFDSSxtQkFBQTtFQUNBLHFCQUFBO0FDL0ZSO0FEaUdJO0VBQ0ksZ0JBQUE7QUMvRlI7QURnR1E7RUFDSSw0QkFBQTtFQUNBLFdBQUE7QUM5Rlo7QURnR1E7RUFDSSxXQUFBO0FDOUZaO0FEZ0dROztFQUVJLG9DQUFBO0FDOUZaO0FEZ0dRO0VBQ0ksV0FBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7QUM5Rlo7QURnR1E7O0VBRUksb0NBQUE7QUM5Rlo7QURnR1E7RUFDSSxjQUFBO0FDOUZaO0FEa0dRO0VBQ0ksc0JBQUE7QUNoR1o7QURpR1k7RUFDSSx5QkFBQTtFQUNBLGtDQUFBO0FDL0ZoQjtBRG9HUTtFQUNJLHFCQUFBO0FDbEdaO0FEcUdJO0VBQ0kscUJBQUE7QUNuR1I7QUR5R0k7RUFDSSxnQkFBQTtFQUNBLDRCQUFBO0FDdEdSO0FEd0dZO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0FDdEdoQjtBRHdHWTtFQUNJLGNBQUE7QUN0R2hCO0FEdUdnQjtFQUNJLFdBQUE7QUNyR3BCO0FEMEdZO0VBQ0ksbUJBQUE7QUN4R2hCO0FEMkdROztFQUVJLFdBQUE7QUN6R1o7QUQwR1k7O0VBQ0ksY0FBQTtBQ3ZHaEI7QUQwR1E7RUFDSSxtQkFBQTtFQUNBLHFCQUFBO0FDeEdaO0FEMEdRO0VBQ0ksZ0JBQUE7QUN4R1o7QUR5R1k7RUFDSSw0QkFBQTtFQUNBLFdBQUE7QUN2R2hCO0FEeUdZO0VBQ0ksV0FBQTtBQ3ZHaEI7QUR5R1k7O0VBRUksb0NBQUE7RUFDQSxjQUFBO0FDdkdoQjtBRHlHWTtFQUNJLFdBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0FDdkdoQjtBRHlHWTs7RUFFSSxvQ0FBQTtFQUNBLGNBQUE7QUN2R2hCO0FEeUdZO0VBQ0ksY0FBQTtBQ3ZHaEI7QUQyR1k7RUFDSSxzQkFBQTtBQ3pHaEI7QUQwR2dCO0VBQ0kseUJBQUE7RUFDQSxrQ0FBQTtBQ3hHcEI7QUQ2R1k7RUFDSSxxQkFBQTtBQzNHaEI7QUQ4R1E7RUFDSSxxQkFBQTtBQzVHWjtBRDhHUTtFQUNJLGdCQUFBO0VBQ0EsNEJBQUE7QUM1R1o7QUQ2R2E7RUFDRyxjQUFBO0FDM0doQjtBRDBHYTtFQUNHLGNBQUE7QUMzR2hCO0FEMEdhO0VBQ0csY0FBQTtBQzNHaEI7QUQwR2E7RUFDRyxjQUFBO0FDM0doQjtBRDZHYTtFQUNHLGNBQUE7QUMzR2hCO0FENkdhO0VBQ0csY0FBQTtBQzNHaEI7QUQ4R2dCO0VBQ0ksV0FBQTtBQzVHcEI7QUQ4R2dCO0VBQ0ksV0FBQTtBQzVHcEI7QUQ4R2dCO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FDNUdwQjtBRGdIUTtFQUNJLHlCQUFBO0FDOUdaO0FEUUk7RUFDSSxtQkFBQTtFQUNBLDRCQUFBO0FDTFI7QURPWTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtBQ0xoQjtBRE9ZO0VBQ0ksY0FBQTtBQ0xoQjtBRE1nQjtFQUNJLGNBQUE7QUNKcEI7QURTWTtFQUNJLG1CQUFBO0FDUGhCO0FEVVE7O0VBRUksY0FBQTtBQ1JaO0FEU1k7O0VBQ0ksV0FBQTtBQ05oQjtBRFNRO0VBQ0ksbUJBQUE7RUFDQSxxQkFBQTtBQ1BaO0FEU1E7RUFDSSxtQkFBQTtBQ1BaO0FEUVk7RUFDSSw0QkFBQTtFQUNBLGNBQUE7QUNOaEI7QURRWTtFQUNJLGNBQUE7QUNOaEI7QURRWTs7RUFFSSxtQkFBQTtFQUNBLFdBQUE7QUNOaEI7QURRWTtFQUNJLGNBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0FDTmhCO0FEUVk7O0VBRUksbUJBQUE7RUFDQSxXQUFBO0FDTmhCO0FEUVk7RUFDSSxjQUFBO0FDTmhCO0FEVVk7RUFDSSx5QkFBQTtBQ1JoQjtBRFNnQjtFQUNJLHNCQUFBO0VBQ0Esa0NBQUE7QUNQcEI7QURZWTtFQUNJLHFCQUFBO0FDVmhCO0FEYVE7RUFDSSxxQkFBQTtBQ1haO0FEYVE7RUFDSSxtQkFBQTtFQUNBLDRCQUFBO0FDWFo7QURZYTtFQUNHLGNBQUE7QUNWaEI7QURTYTtFQUNHLGNBQUE7QUNWaEI7QURTYTtFQUNHLGNBQUE7QUNWaEI7QURTYTtFQUNHLGNBQUE7QUNWaEI7QURZYTtFQUNHLGNBQUE7QUNWaEI7QURZYTtFQUNHLGNBQUE7QUNWaEI7QURhZ0I7RUFDSSxjQUFBO0FDWHBCO0FEYWdCO0VBQ0ksY0FBQTtBQ1hwQjtBRGFnQjtFQUNJLGNBQUE7RUFDQSxtQkFBQTtBQ1hwQjtBRGVRO0VBQ0kseUJBQUE7QUNiWjtBRG1CSTtFQUNJLGNBQUE7RUFDQSw0QkFBQTtBQ2hCUjtBRGlCUTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDZlo7QURnQlk7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0FDZGhCO0FEaUJRO0VBQ0ksaUJBQUE7QUNmWjtBRHVCWTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNwQmhCO0FEOEJZO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUMzQmhCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29tbW9uLWNvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3RoZW1lJztcclxuLmFwcC1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcclxuICAgIC8vIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgLmFwcC1oZWFkZXItd3JhcHBlciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgLnRvZ2dsZS1idG4ge1xyXG4gICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaGVhZGVyLWxvZ28tYXJlYSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDdweCA4cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgd2lkdGg6IDE5MHB4O1xyXG4gICAgICAgICAgICAvLyAubG9nbyB7XHJcbiAgICAgICAgICAgIC8vICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgLy8gICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICAgICAgLy8gICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAgICAgICAgICAgLy8gICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICAgICAgICAvLyAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICAvLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAvLyAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgIC8vICAgICBwYWRkaW5nLXRvcDogMnB4XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgLmxvZ28ge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMXB4O1xyXG4gICAgICAgICAgICAgICAgLy8gd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICAvLyBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgIC8vIHBhZGRpbmctdG9wOiAycHg7XHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NXB4XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxvZ28tdGV4dCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDZweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuc21hbGwge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuaW5kaWNhdG9yIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDEycHg7XHJcbiAgICAgICAgICAgIHJpZ2h0OiA4cHg7XHJcbiAgICAgICAgICAgIC5jaXJjbGUge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IGFuaW1hdGUtcHVsc2UgMS41cyBpbmZpbml0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyAuYXBwLXNlYXJjaC1iYXIge1xyXG4gICAgICAgIC8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIC8vICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgLy8gICAgIHotaW5kZXg6IDEwMjU7XHJcbiAgICAgICAgLy8gICAgIHBhZGRpbmc6IDZweCAxNXB4O1xyXG4gICAgICAgIC8vICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAvLyAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgLy8gICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgIC8vICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XHJcbiAgICAgICAgLy8gICAgICA6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICAvLyAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgLy8gICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgLy8gICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgICA6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgICAgICAvLyAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAvLyAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgIDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgICAgICAvLyAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAvLyAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgLmlucHV0LWdyb3VwIHtcclxuICAgICAgICAvLyAgICAgICAgIC5zZWFyY2gtaWNvbiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHRvcDogOHB4O1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGJvcmRlcjogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAvLyAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgIC5pbnB1dC1ncm91cC1hcHBlbmQge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAuaW5wdXQtZ3JvdXAtdGV4dCB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBib3JkZXI6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLm5hdi1pY29uLWJhZGdlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDdweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm5hdi1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRyb3AtZG93biB7XHJcbiAgICAgICAgICAgICAgICAuZHJvcGRvd24tbWVudSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIC4xNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTAyNTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IC0ycHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNHB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZHJvcGRvd24tdG9nZ2xlOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnByb2ZpbGUtZHJvcGRvd24+YSB7XHJcbiAgICAgICAgcGFkZGluZzogMTJweCAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAucHJvZmlsZS1kcm9wZG93biB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgLm1lZGlhIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgLnByby1pbWcge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci13aWR0aDogMnB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5tZWRpYS1ib2R5IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAucHJvLW5hbWUge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnByby1kZXNjIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogLTEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubm90aWZpY2F0aW9uLWRyb3Bkb3duIHtcclxuICAgICAgICAuZHJvcGRvd24tbWVudSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMTVweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgIC5kcm9wZG93bi1oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgICAgICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5kcm9wZG93bi1ib2R5IHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5ub3RpZmljYXRpb24tbGlzdC1pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubm90aWZpY2F0aW9uLWl0ZW0taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm5vdGlmaWNhdGlvbi1pdGVtLWRlc2Mge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubm90aWZpY2F0aW9uLWl0ZW0tdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNob3J0LWRlc2Mge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5ub3RpZmljYXRpb24taXRlbS10aW1lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogODUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZHJvcGRvd24tbGlzdC1mb290ZXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAxNjhmYTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyAjY29sb3ItY2hhbmdlIHtcclxuICAgICAgICAgICAgLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGZmYmE7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZHJvcGRvd24tY2FydDphZnRlciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAtMTNweDtcclxuICAgICAgICByaWdodDogMTBweDtcclxuICAgICAgICB3aWR0aDogLjc1cmVtO1xyXG4gICAgICAgIGhlaWdodDogLjc1cmVtO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSgtN3B4KTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSgtN3B4KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKC03cHgpO1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZDtcclxuICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkO1xyXG4gICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB9XHJcbiAgICAuZHJvcGRvd24tY2FydC5zaG93OmFmdGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIC5tZXNzYWdlLWRyb3Bkb3duIHtcclxuICAgICAgICAuZHJvcGRvd24tbWVudSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMTVweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgIC5kcm9wZG93bi1oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmMWYxO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRyb3Bkb3duLWJvZHkge1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6ICNmOGY5ZmEgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb2xvcjogIzFjMjczYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tZXNzYWdlLWxpc3QtaXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdGFibGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1lc3NhZ2UtaXRlbS1pbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWVzc2FnZS1pdGVtLWRlc2Mge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWVzc2FnZS1pdGVtLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29sb3I6ICMzMzQxNTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJvbmcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1lc3NhZ2UtaXRlbS10aW1lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogODUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbG9yOiAjNjM3ODkwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5kcm9wZG93bi1saXN0LWZvb3RlciB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5zZWFyY2gtZHJvcGRvd24ge1xyXG4gICAgICAgIC5zZWFyY2gtZHJvcGRvd24tbWVudSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMjU7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5hcHBzLWRyb3Bkb3duIHtcclxuICAgICAgICBhIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZHJvcGRvd24tbWVudSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTRweCAwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjFweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIxcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmFwcC1oZWFkZXJbZGV2aWNlLXR5cGU9XCJwaG9uZVwiXSB7XHJcbiAgICAubm90aWZpY2F0aW9uLWRyb3Bkb3duIHtcclxuICAgICAgICAuZHJvcGRvd24tbWVudSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xNzBweCwgNTBweCkgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubWVzc2FnZS1kcm9wZG93biB7XHJcbiAgICAgICAgLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTI1cHgsIDUwcHgpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uYXBwLWhlYWRlcjphZnRlcixcclxuLmFwcC1oZWFkZXI6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4uYXBwLWhlYWRlcltuYXYtbGF5b3V0PVwidmVydGljYWxcIl1bY29sbGFwc2VkLWhlYWRlcj1cImZhbHNlXCJdIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMgZXhwYW5kZWQgSGVhZGVyIFN0eWxlICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbi5hcHAtaGVhZGVyW25hdi1sYXlvdXQ9XCJ2ZXJ0aWNhbFwiXVtjb2xsYXBzZWQtaGVhZGVyPVwidHJ1ZVwiXVtuYXZiYXItdHlwZT1cImV4cGFuZGVkXCJdW2VmZmVjdC10eXBlPVwib3ZlcmxheVwiXSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG59XHJcblxyXG4uYXBwLWhlYWRlcltuYXYtbGF5b3V0PVwidmVydGljYWxcIl1bY29sbGFwc2VkLWhlYWRlcj1cInRydWVcIl1bbmF2YmFyLXR5cGU9XCJleHBhbmRlZFwiXVtlZmZlY3QtdHlwZT1cInNocmlua1wiXSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjMwcHg7XHJcbn1cclxuXHJcbi5hcHAtaGVhZGVyW25hdi1sYXlvdXQ9XCJ2ZXJ0aWNhbFwiXVtjb2xsYXBzZWQtaGVhZGVyPVwidHJ1ZVwiXVtuYXZiYXItdHlwZT1cImV4cGFuZGVkXCJdW2VmZmVjdC10eXBlPVwicHVzaFwiXSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjMwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0yMzBweDtcclxufVxyXG5cclxuLy8gIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG4uYXBwLWhlYWRlcltuYXYtbGF5b3V0PVwidmVydGljYWxcIl1bY29sbGFwc2VkLWhlYWRlcj1cInRydWVcIl1bbmF2YmFyLXR5cGU9XCJjb2xsYXBzZWRcIl1bZWZmZWN0LXR5cGU9XCJvdmVybGF5XCJdIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG59XHJcblxyXG4uYXBwLWhlYWRlcltuYXYtbGF5b3V0PVwidmVydGljYWxcIl1bY29sbGFwc2VkLWhlYWRlcj1cInRydWVcIl1bbmF2YmFyLXR5cGU9XCJjb2xsYXBzZWRcIl1bZWZmZWN0LXR5cGU9XCJzaHJpbmtcIl0ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbn1cclxuXHJcbi5hcHAtaGVhZGVyW25hdi1sYXlvdXQ9XCJ2ZXJ0aWNhbFwiXVtjb2xsYXBzZWQtaGVhZGVyPVwidHJ1ZVwiXVtuYXZiYXItdHlwZT1cImNvbGxhcHNlZFwiXVtlZmZlY3QtdHlwZT1cInB1c2hcIl0ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxufVxyXG5cclxuLy8gIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG4uYXBwLWhlYWRlcltuYXYtbGF5b3V0PVwidmVydGljYWxcIl1bY29sbGFwc2VkLWhlYWRlcj1cInRydWVcIl1bbmF2YmFyLXR5cGU9XCJvZmZjYW52YXNcIl1bZWZmZWN0LXR5cGU9XCJvdmVybGF5XCJdIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbn1cclxuXHJcbi5hcHAtaGVhZGVyW25hdi1sYXlvdXQ9XCJ2ZXJ0aWNhbFwiXVtjb2xsYXBzZWQtaGVhZGVyPVwidHJ1ZVwiXVtuYXZiYXItdHlwZT1cIm9mZmNhbnZhc1wiXVtlZmZlY3QtdHlwZT1cInNocmlua1wiXSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG59XHJcblxyXG4uYXBwLWhlYWRlcltuYXYtbGF5b3V0PVwidmVydGljYWxcIl1bY29sbGFwc2VkLWhlYWRlcj1cInRydWVcIl1bbmF2YmFyLXR5cGU9XCJvZmZjYW52YXNcIl1bZWZmZWN0LXR5cGU9XCJwdXNoXCJdIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxufVxyXG5cclxuLnNpZGViYXJUb2dnbGUge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMgRGVmYXVsdCBIZWFkZXIgVGhlbWUgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbi5hcHAtaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNGRkY7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZGNkY2RjO1xyXG4gICAgLmhlYWRlci1sb2dvLWFyZWEge1xyXG4gICAgICAgIC5sb2dvIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzAxNjhmYTtcclxuICAgICAgICAgICAgY29sb3I6ICNGRkY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sb2dvLXRleHQge1xyXG4gICAgICAgICAgICBjb2xvcjogIzAxNjhmYTtcclxuICAgICAgICAgICAgLnNtYWxsIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmluZGljYXRvciB7XHJcbiAgICAgICAgLmNpcmNsZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMTY4ZmE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmFwcC1zZWFyY2gtYmFyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNkY2RjZGM7XHJcbiAgICAgICAgIDo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogIzYzNzg5MDtcclxuICAgICAgICB9XHJcbiAgICAgICAgIDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogIzYzNzg5MDtcclxuICAgICAgICB9XHJcbiAgICAgICAgIDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICM2Mzc4OTA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbnB1dC1ncm91cCB7XHJcbiAgICAgICAgICAgIC5zZWFyY2gtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaW5wdXQtZ3JvdXAtdGV4dCB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZm9ybS1jb250cm9sIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZGRjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5sZWZ0LWhlYWRlcj51bD5saT5hLFxyXG4gICAgLnJpZ2h0LWhlYWRlcj51bD5saT5hIHtcclxuICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICMwMTY4ZmE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmRyb3Bkb3duLWNhcnQ6YWZ0ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNkY2RjZGM7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZGNkY2RjO1xyXG4gICAgfVxyXG4gICAgLmRyb3AtZG93biAuZHJvcGRvd24tbWVudSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGRjtcclxuICAgICAgICAuZHJvcGRvd24taGVhZGVyIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2YxZjFmMTtcclxuICAgICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRyb3Bkb3duLWl0ZW06aG92ZXIsXHJcbiAgICAgICAgLmRyb3Bkb3duLWl0ZW06Zm9jdXMge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzNCwgMjM1LCAyNDMsIDAuNSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kcm9wZG93bi1pdGVtIGEge1xyXG4gICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2YxZjFmMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRyb3Bkb3duLWl0ZW0gYTpob3ZlcixcclxuICAgICAgICAuZHJvcGRvd24taXRlbSBhOmZvY3VzIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyMzQsIDIzNSwgMjQzLCAwLjUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGlnaHQtdGV4dCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzM0MTUxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5kcm9wZG93bi1saXN0LWZvb3Rlci5kcm9wZG93bi1pdGVtIHtcclxuICAgICAgICBhIHtcclxuICAgICAgICAgICAgY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAxNjhmYSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5tZWRpYSB7XHJcbiAgICAgICAgLnByby1pbWcge1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICNmMWYxZjE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm1lc3NhZ2UtaXRlbS1pbWcgaW1nIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICNmMWYxZjE7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBlYWNoICR0aGVtZSxcclxuJG1hcCBpbiAkaGVhZGVyVGhlbWUge1xyXG4gICAgLmFwcC1oZWFkZXJbY29sb3ItdGhlbWU9I3skdGhlbWV9XSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbWFwLWdldCgkbWFwLCBiYWNrZ3JvdW5kQ29sb3IpO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IG1hcC1nZXQoJG1hcCwgYm9yZGVyQ29sb3IpO1xyXG4gICAgICAgIC5oZWFkZXItbG9nby1hcmVhIHtcclxuICAgICAgICAgICAgLmxvZ28ge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbWFwLWdldCgkbWFwLCBsb2dvQmdDb2xvcik7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogbWFwLWdldCgkbWFwLCBsb2dvQ29sb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5sb2dvLXRleHQge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IG1hcC1nZXQoJG1hcCwgbG9nb0JnQ29sb3IpO1xyXG4gICAgICAgICAgICAgICAgLnNtYWxsIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogbWFwLWdldCgkbWFwLCB0ZXh0Q29sb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbmRpY2F0b3Ige1xyXG4gICAgICAgICAgICAuY2lyY2xlIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG1hcC1nZXQoJG1hcCwgaW5kaWNhdG9yQ29sb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sZWZ0LWhlYWRlcj51bD5saT5hLFxyXG4gICAgICAgIC5yaWdodC1oZWFkZXI+dWw+bGk+YSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBtYXAtZ2V0KCRtYXAsIHRleHRDb2xvcik7XHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IG1hcC1nZXQoJG1hcCwgaG92ZXJDb2xvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmRyb3Bkb3duLWNhcnQ6YWZ0ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRtYXAsIGJvcmRlckNvbG9yKTtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiBtYXAtZ2V0KCRtYXAsIGJvcmRlckNvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRyb3AtZG93biAuZHJvcGRvd24tbWVudSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG1hcC1nZXQoJG1hcCwgZHJvcGRvd25CZ0NvbG9yKTtcclxuICAgICAgICAgICAgLmRyb3Bkb3duLWhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiBtYXAtZ2V0KCRtYXAsIGRyb3Bkb3duQm9yZGVyQ29sb3IpO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IG1hcC1nZXQoJG1hcCwgdGV4dENvbG9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBtYXAtZ2V0KCRtYXAsIHRleHRDb2xvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRyb3Bkb3duLWl0ZW06aG92ZXIsXHJcbiAgICAgICAgICAgIC5kcm9wZG93bi1pdGVtOmZvY3VzIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG1hcC1nZXQoJG1hcCwgaG92ZXJCYWNrZ3JvdW5kQ29sb3IpO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IG1hcC1nZXQoJG1hcCwgaG92ZXJDb2xvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRyb3Bkb3duLWl0ZW0gYSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogbWFwLWdldCgkbWFwLCB0ZXh0Q29sb3IpO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IG1hcC1nZXQoJG1hcCwgZHJvcGRvd25Cb3JkZXJDb2xvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRyb3Bkb3duLWl0ZW0gYTpob3ZlcixcclxuICAgICAgICAgICAgLmRyb3Bkb3duLWl0ZW0gYTpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRtYXAsIGhvdmVyQmFja2dyb3VuZENvbG9yKTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBtYXAtZ2V0KCRtYXAsIGhvdmVyQ29sb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5saWdodC10ZXh0IHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBsaWdodGVuKG1hcC1nZXQoJG1hcCwgdGV4dENvbG9yKSwgMTAlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuZHJvcGRvd24tbGlzdC1mb290ZXIuZHJvcGRvd24taXRlbSB7XHJcbiAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IG1hcC1nZXQoJG1hcCwgdGV4dENvbG9yKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IG1hcC1nZXQoJG1hcCwgaG92ZXJDb2xvcikgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tZWRpYSB7XHJcbiAgICAgICAgICAgIC5wcm8taW1nIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogbWFwLWdldCgkbWFwLCBib3JkZXJDb2xvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLm1lc3NhZ2UtaXRlbS1pbWcgaW1nIHtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiBtYXAtZ2V0KCRtYXAsIGJvcmRlckNvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFwcC1zZWFyY2gtYmFyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbWFwLWdldCgkbWFwLCBiYWNrZ3JvdW5kQ29sb3IpO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiBtYXAtZ2V0KCRtYXAsIGJvcmRlckNvbG9yKTtcclxuICAgICAgICAgICAgIDo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IG1hcC1nZXQoJG1hcCwgcGxhY2Vob2xkZXJDb2xvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IG1hcC1nZXQoJG1hcCwgcGxhY2Vob2xkZXJDb2xvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBtYXAtZ2V0KCRtYXAsIHBsYWNlaG9sZGVyQ29sb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5pbnB1dC1ncm91cCB7XHJcbiAgICAgICAgICAgICAgICAuc2VhcmNoLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBtYXAtZ2V0KCRtYXAsIHRleHRDb2xvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaW5wdXQtZ3JvdXAtdGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IG1hcC1nZXQoJG1hcCwgdGV4dENvbG9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBtYXAtZ2V0KCRtYXAsIHRleHRDb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbWFwLWdldCgkbWFwLCBiYWNrZ3JvdW5kQ29sb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kcm9wZG93bi1kaXZpZGVyIHtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogbWFwLWdldCgkbWFwLCBib3JkZXJDb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uYmFsYW5jZS1hcmVhIHtcclxuICAgIC5iYWxhbmNlLWJveCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDEwcHggIWltcG9ydGFudDtcclxuICAgICAgICAuaWNvbi1hcmVhIHtcclxuICAgICAgICAgICAgcGFkZGluZzogNHB4IDdweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2VmZjNmNjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZWZmMGYxO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAzcHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAxNjhmYTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAudGV4dC1hcmVhIHtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uc2NyZWVuLWFyZWEge1xyXG4gICAgZGl2IHtcclxuICAgICAgICBhIHtcclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cHggMTVweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlZmYzZjY7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgI2U5ZWJlYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnNjcmVlbi1hcmVhIHtcclxuICAgIGRpdi5hY3RpdmUge1xyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMTY4ZmE7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI0ZGRjtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMHB4IHNvbGlkICMwMTY4ZmE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIuYXBwLWhlYWRlciB7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA2MHB4O1xuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xufVxuLmFwcC1oZWFkZXIgLmFwcC1oZWFkZXItd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmFwcC1oZWFkZXIgLmFwcC1oZWFkZXItd3JhcHBlciAudG9nZ2xlLWJ0biB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG4uYXBwLWhlYWRlciAuYXBwLWhlYWRlci13cmFwcGVyIC5oZWFkZXItbG9nby1hcmVhIHtcbiAgcGFkZGluZzogN3B4IDhweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTkwcHg7XG59XG4uYXBwLWhlYWRlciAuYXBwLWhlYWRlci13cmFwcGVyIC5oZWFkZXItbG9nby1hcmVhIC5sb2dvIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgZm9udC1zaXplOiAyMXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLmFwcC1oZWFkZXIgLmFwcC1oZWFkZXItd3JhcHBlciAuaGVhZGVyLWxvZ28tYXJlYSAubG9nbyBpbWcge1xuICB3aWR0aDogNDVweDtcbn1cbi5hcHAtaGVhZGVyIC5hcHAtaGVhZGVyLXdyYXBwZXIgLmhlYWRlci1sb2dvLWFyZWEgLmxvZ28tdGV4dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA2cHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuLmFwcC1oZWFkZXIgLmFwcC1oZWFkZXItd3JhcHBlciAuaGVhZGVyLWxvZ28tYXJlYSAubG9nby10ZXh0IHAge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uYXBwLWhlYWRlciAuYXBwLWhlYWRlci13cmFwcGVyIC5oZWFkZXItbG9nby1hcmVhIC5sb2dvLXRleHQgLnNtYWxsIHtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmFwcC1oZWFkZXIgLmFwcC1oZWFkZXItd3JhcHBlciAuaW5kaWNhdG9yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEycHg7XG4gIHJpZ2h0OiA4cHg7XG59XG4uYXBwLWhlYWRlciAuYXBwLWhlYWRlci13cmFwcGVyIC5pbmRpY2F0b3IgLmNpcmNsZSB7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYW5pbWF0aW9uOiBhbmltYXRlLXB1bHNlIDEuNXMgaW5maW5pdGU7XG59XG4uYXBwLWhlYWRlciAuYXBwLWhlYWRlci13cmFwcGVyIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuLmFwcC1oZWFkZXIgLmFwcC1oZWFkZXItd3JhcHBlciB1bCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmFwcC1oZWFkZXIgLmFwcC1oZWFkZXItd3JhcHBlciB1bCBsaSBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDIwcHggMTBweDtcbn1cbi5hcHAtaGVhZGVyIC5hcHAtaGVhZGVyLXdyYXBwZXIgdWwgbGkgYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5hcHAtaGVhZGVyIC5hcHAtaGVhZGVyLXdyYXBwZXIgdWwgbGkgYSAubmF2LWljb24tYmFkZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogN3B4O1xuICByaWdodDogNXB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5hcHAtaGVhZGVyIC5hcHAtaGVhZGVyLXdyYXBwZXIgdWwgbGkgLm5hdi1pY29uIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbn1cbi5hcHAtaGVhZGVyIC5hcHAtaGVhZGVyLXdyYXBwZXIgdWwgLmRyb3AtZG93biAuZHJvcGRvd24tbWVudSB7XG4gIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgYm9yZGVyOiAwcHg7XG4gIHotaW5kZXg6IDEwMjU7XG4gIHRvcDogLTJweCAhaW1wb3J0YW50O1xufVxuLmFwcC1oZWFkZXIgLmFwcC1oZWFkZXItd3JhcHBlciB1bCAuZHJvcC1kb3duIC5kcm9wZG93bi1tZW51IGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBwYWRkaW5nOiA0cHggMTBweDtcbiAgbWFyZ2luOiAwcHg7XG59XG4uYXBwLWhlYWRlciAuYXBwLWhlYWRlci13cmFwcGVyIHVsIC5kcm9wLWRvd24gLmRyb3Bkb3duLW1lbnUgYSAuaWNvbiB7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4uYXBwLWhlYWRlciAuYXBwLWhlYWRlci13cmFwcGVyIHVsIC5kcm9wLWRvd24gLmRyb3Bkb3duLXRvZ2dsZTphZnRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uYXBwLWhlYWRlciAucHJvZmlsZS1kcm9wZG93biA+IGEge1xuICBwYWRkaW5nOiAxMnB4IDEwcHggIWltcG9ydGFudDtcbn1cbi5hcHAtaGVhZGVyIC5wcm9maWxlLWRyb3Bkb3duIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYXBwLWhlYWRlciAucHJvZmlsZS1kcm9wZG93biAubWVkaWEge1xuICBwYWRkaW5nOiAwO1xufVxuLmFwcC1oZWFkZXIgLnByb2ZpbGUtZHJvcGRvd24gLm1lZGlhIC5wcm8taW1nIHtcbiAgcGFkZGluZzogMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgd2lkdGg6IDM1cHg7XG59XG4uYXBwLWhlYWRlciAucHJvZmlsZS1kcm9wZG93biAubWVkaWEgLm1lZGlhLWJvZHkge1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDEycHg7XG59XG4uYXBwLWhlYWRlciAucHJvZmlsZS1kcm9wZG93biAubWVkaWEgLm1lZGlhLWJvZHkgLnByby1uYW1lIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4uYXBwLWhlYWRlciAucHJvZmlsZS1kcm9wZG93biAubWVkaWEgLm1lZGlhLWJvZHkgLnByby1kZXNjIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDExcHg7XG59XG4uYXBwLWhlYWRlciAucHJvZmlsZS1kcm9wZG93biAubWVkaWEgLm1lZGlhLWJvZHkgLmljb24ge1xuICB3aWR0aDogMjFweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0xMHB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG4uYXBwLWhlYWRlciAubm90aWZpY2F0aW9uLWRyb3Bkb3duIC5kcm9wZG93bi1tZW51IHtcbiAgd2lkdGg6IDMxNXB4O1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi5hcHAtaGVhZGVyIC5ub3RpZmljYXRpb24tZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMTBweCAxMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cbi5hcHAtaGVhZGVyIC5ub3RpZmljYXRpb24tZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWhlYWRlciAudGl0bGUge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmFwcC1oZWFkZXIgLm5vdGlmaWNhdGlvbi1kcm9wZG93biAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24tYm9keSB7XG4gIGhlaWdodDogMjUwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG4uYXBwLWhlYWRlciAubm90aWZpY2F0aW9uLWRyb3Bkb3duIC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1ib2R5IHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuLmFwcC1oZWFkZXIgLm5vdGlmaWNhdGlvbi1kcm9wZG93biAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24tYm9keSB1bCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbi5hcHAtaGVhZGVyIC5ub3RpZmljYXRpb24tZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWJvZHkgdWwgbGk6aG92ZXIge1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG4uYXBwLWhlYWRlciAubm90aWZpY2F0aW9uLWRyb3Bkb3duIC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1ib2R5IHVsIGxpIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG59XG4uYXBwLWhlYWRlciAubm90aWZpY2F0aW9uLWRyb3Bkb3duIC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1ib2R5IHVsIGxpIGEgLm5vdGlmaWNhdGlvbi1saXN0LWl0ZW0ge1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cbi5hcHAtaGVhZGVyIC5ub3RpZmljYXRpb24tZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWJvZHkgdWwgbGkgYSAubm90aWZpY2F0aW9uLWxpc3QtaXRlbSAubm90aWZpY2F0aW9uLWl0ZW0taWNvbiB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cbi5hcHAtaGVhZGVyIC5ub3RpZmljYXRpb24tZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWJvZHkgdWwgbGkgYSAubm90aWZpY2F0aW9uLWxpc3QtaXRlbSAubm90aWZpY2F0aW9uLWl0ZW0tZGVzYyB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uYXBwLWhlYWRlciAubm90aWZpY2F0aW9uLWRyb3Bkb3duIC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1ib2R5IHVsIGxpIGEgLm5vdGlmaWNhdGlvbi1saXN0LWl0ZW0gLm5vdGlmaWNhdGlvbi1pdGVtLWRlc2MgLm5vdGlmaWNhdGlvbi1pdGVtLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4uYXBwLWhlYWRlciAubm90aWZpY2F0aW9uLWRyb3Bkb3duIC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1ib2R5IHVsIGxpIGEgLm5vdGlmaWNhdGlvbi1saXN0LWl0ZW0gLm5vdGlmaWNhdGlvbi1pdGVtLWRlc2MgLnNob3J0LWRlc2Mge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4uYXBwLWhlYWRlciAubm90aWZpY2F0aW9uLWRyb3Bkb3duIC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1ib2R5IHVsIGxpIGEgLm5vdGlmaWNhdGlvbi1saXN0LWl0ZW0gLm5vdGlmaWNhdGlvbi1pdGVtLWRlc2MgLm5vdGlmaWNhdGlvbi1pdGVtLXRpbWUge1xuICBmb250LXNpemU6IDg1JTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDhweDtcbiAgcmlnaHQ6IDhweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5hcHAtaGVhZGVyIC5ub3RpZmljYXRpb24tZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWxpc3QtZm9vdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hcHAtaGVhZGVyIC5ub3RpZmljYXRpb24tZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWxpc3QtZm9vdGVyIGEge1xuICBjb2xvcjogIzAxNjhmYTtcbn1cbi5hcHAtaGVhZGVyIC5kcm9wZG93bi1jYXJ0OmFmdGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC0xM3B4O1xuICByaWdodDogMTBweDtcbiAgd2lkdGg6IDAuNzVyZW07XG4gIGhlaWdodDogMC43NXJlbTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKC03cHgpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSgtN3B4KTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSgtN3B4KTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkO1xuICB6LWluZGV4OiAxMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5hcHAtaGVhZGVyIC5kcm9wZG93bi1jYXJ0LnNob3c6YWZ0ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5hcHAtaGVhZGVyIC5tZXNzYWdlLWRyb3Bkb3duIC5kcm9wZG93bi1tZW51IHtcbiAgd2lkdGg6IDMxNXB4O1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi5hcHAtaGVhZGVyIC5tZXNzYWdlLWRyb3Bkb3duIC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG59XG4uYXBwLWhlYWRlciAubWVzc2FnZS1kcm9wZG93biAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taGVhZGVyIC50aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uYXBwLWhlYWRlciAubWVzc2FnZS1kcm9wZG93biAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24tYm9keSB7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG4uYXBwLWhlYWRlciAubWVzc2FnZS1kcm9wZG93biAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24tYm9keSB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbi5hcHAtaGVhZGVyIC5tZXNzYWdlLWRyb3Bkb3duIC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1ib2R5IHVsIGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuLmFwcC1oZWFkZXIgLm1lc3NhZ2UtZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWJvZHkgdWwgbGk6aG92ZXIge1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG4uYXBwLWhlYWRlciAubWVzc2FnZS1kcm9wZG93biAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24tYm9keSB1bCBsaSBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xufVxuLmFwcC1oZWFkZXIgLm1lc3NhZ2UtZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWJvZHkgdWwgbGkgYSAubWVzc2FnZS1saXN0LWl0ZW0ge1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cbi5hcHAtaGVhZGVyIC5tZXNzYWdlLWRyb3Bkb3duIC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1ib2R5IHVsIGxpIGEgLm1lc3NhZ2UtbGlzdC1pdGVtIC5tZXNzYWdlLWl0ZW0taW1nIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5hcHAtaGVhZGVyIC5tZXNzYWdlLWRyb3Bkb3duIC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1ib2R5IHVsIGxpIGEgLm1lc3NhZ2UtbGlzdC1pdGVtIC5tZXNzYWdlLWl0ZW0taW1nIGltZyB7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMXB4O1xufVxuLmFwcC1oZWFkZXIgLm1lc3NhZ2UtZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWJvZHkgdWwgbGkgYSAubWVzc2FnZS1saXN0LWl0ZW0gLm1lc3NhZ2UtaXRlbS1kZXNjIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5hcHAtaGVhZGVyIC5tZXNzYWdlLWRyb3Bkb3duIC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1ib2R5IHVsIGxpIGEgLm1lc3NhZ2UtbGlzdC1pdGVtIC5tZXNzYWdlLWl0ZW0tZGVzYyAubWVzc2FnZS1pdGVtLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4uYXBwLWhlYWRlciAubWVzc2FnZS1kcm9wZG93biAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24tYm9keSB1bCBsaSBhIC5tZXNzYWdlLWxpc3QtaXRlbSAubWVzc2FnZS1pdGVtLWRlc2MgLm1lc3NhZ2UtaXRlbS10aXRsZSBzdHJvbmcge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmFwcC1oZWFkZXIgLm1lc3NhZ2UtZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWJvZHkgdWwgbGkgYSAubWVzc2FnZS1saXN0LWl0ZW0gLm1lc3NhZ2UtaXRlbS1kZXNjIC5tZXNzYWdlLWl0ZW0tdGltZSB7XG4gIGZvbnQtc2l6ZTogODUlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogOHB4O1xuICByaWdodDogOHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLmFwcC1oZWFkZXIgLm1lc3NhZ2UtZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWxpc3QtZm9vdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hcHAtaGVhZGVyIC5zZWFyY2gtZHJvcGRvd24gLnNlYXJjaC1kcm9wZG93bi1tZW51IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTAyNTtcbiAgaGVpZ2h0OiA1MHB4O1xuICB0b3A6IDA7XG59XG4uYXBwLWhlYWRlciAuYXBwcy1kcm9wZG93biBhIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmFwcC1oZWFkZXIgLmFwcHMtZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUge1xuICB3aWR0aDogMjUwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbi5hcHAtaGVhZGVyIC5hcHBzLWRyb3Bkb3duIC5kcm9wZG93bi1tZW51IHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5hcHAtaGVhZGVyIC5hcHBzLWRyb3Bkb3duIC5kcm9wZG93bi1tZW51IHVsIGxpIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHdpZHRoOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuLmFwcC1oZWFkZXIgLmFwcHMtZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUgdWwgbGkgYSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGhlaWdodDogODBweDtcbiAgcGFkZGluZzogMTRweCAwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuLmFwcC1oZWFkZXIgLmFwcHMtZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUgdWwgbGkgYSAuaWNvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xuICB3aWR0aDogMjFweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiA1cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAyMXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5hcHAtaGVhZGVyW2RldmljZS10eXBlPXBob25lXSAubm90aWZpY2F0aW9uLWRyb3Bkb3duIC5kcm9wZG93bi1tZW51IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTE3MHB4LCA1MHB4KSAhaW1wb3J0YW50O1xufVxuLmFwcC1oZWFkZXJbZGV2aWNlLXR5cGU9cGhvbmVdIC5tZXNzYWdlLWRyb3Bkb3duIC5kcm9wZG93bi1tZW51IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEyNXB4LCA1MHB4KSAhaW1wb3J0YW50O1xufVxuXG4uYXBwLWhlYWRlcjphZnRlcixcbi5hcHAtaGVhZGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjbGVhcjogYm90aDtcbn1cblxuLmFwcC1oZWFkZXJbbmF2LWxheW91dD12ZXJ0aWNhbF1bY29sbGFwc2VkLWhlYWRlcj1mYWxzZV0ge1xuICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5hcHAtaGVhZGVyW25hdi1sYXlvdXQ9dmVydGljYWxdW2NvbGxhcHNlZC1oZWFkZXI9dHJ1ZV1bbmF2YmFyLXR5cGU9ZXhwYW5kZWRdW2VmZmVjdC10eXBlPW92ZXJsYXldIHtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cblxuLmFwcC1oZWFkZXJbbmF2LWxheW91dD12ZXJ0aWNhbF1bY29sbGFwc2VkLWhlYWRlcj10cnVlXVtuYXZiYXItdHlwZT1leHBhbmRlZF1bZWZmZWN0LXR5cGU9c2hyaW5rXSB7XG4gIG1hcmdpbi1sZWZ0OiAyMzBweDtcbn1cblxuLmFwcC1oZWFkZXJbbmF2LWxheW91dD12ZXJ0aWNhbF1bY29sbGFwc2VkLWhlYWRlcj10cnVlXVtuYXZiYXItdHlwZT1leHBhbmRlZF1bZWZmZWN0LXR5cGU9cHVzaF0ge1xuICBtYXJnaW4tbGVmdDogMjMwcHg7XG4gIG1hcmdpbi1yaWdodDogLTIzMHB4O1xufVxuXG4uYXBwLWhlYWRlcltuYXYtbGF5b3V0PXZlcnRpY2FsXVtjb2xsYXBzZWQtaGVhZGVyPXRydWVdW25hdmJhci10eXBlPWNvbGxhcHNlZF1bZWZmZWN0LXR5cGU9b3ZlcmxheV0ge1xuICBtYXJnaW4tbGVmdDogNTBweDtcbn1cblxuLmFwcC1oZWFkZXJbbmF2LWxheW91dD12ZXJ0aWNhbF1bY29sbGFwc2VkLWhlYWRlcj10cnVlXVtuYXZiYXItdHlwZT1jb2xsYXBzZWRdW2VmZmVjdC10eXBlPXNocmlua10ge1xuICBtYXJnaW4tbGVmdDogNTBweDtcbn1cblxuLmFwcC1oZWFkZXJbbmF2LWxheW91dD12ZXJ0aWNhbF1bY29sbGFwc2VkLWhlYWRlcj10cnVlXVtuYXZiYXItdHlwZT1jb2xsYXBzZWRdW2VmZmVjdC10eXBlPXB1c2hdIHtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xufVxuXG4uYXBwLWhlYWRlcltuYXYtbGF5b3V0PXZlcnRpY2FsXVtjb2xsYXBzZWQtaGVhZGVyPXRydWVdW25hdmJhci10eXBlPW9mZmNhbnZhc11bZWZmZWN0LXR5cGU9b3ZlcmxheV0ge1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuXG4uYXBwLWhlYWRlcltuYXYtbGF5b3V0PXZlcnRpY2FsXVtjb2xsYXBzZWQtaGVhZGVyPXRydWVdW25hdmJhci10eXBlPW9mZmNhbnZhc11bZWZmZWN0LXR5cGU9c2hyaW5rXSB7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG5cbi5hcHAtaGVhZGVyW25hdi1sYXlvdXQ9dmVydGljYWxdW2NvbGxhcHNlZC1oZWFkZXI9dHJ1ZV1bbmF2YmFyLXR5cGU9b2ZmY2FudmFzXVtlZmZlY3QtdHlwZT1wdXNoXSB7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xufVxuXG4uc2lkZWJhclRvZ2dsZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYXBwLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICNGRkY7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNkY2RjZGM7XG59XG4uYXBwLWhlYWRlciAuaGVhZGVyLWxvZ28tYXJlYSAubG9nbyB7XG4gIGJhY2tncm91bmQ6ICMwMTY4ZmE7XG4gIGNvbG9yOiAjRkZGO1xufVxuLmFwcC1oZWFkZXIgLmhlYWRlci1sb2dvLWFyZWEgLmxvZ28tdGV4dCB7XG4gIGNvbG9yOiAjMDE2OGZhO1xufVxuLmFwcC1oZWFkZXIgLmhlYWRlci1sb2dvLWFyZWEgLmxvZ28tdGV4dCAuc21hbGwge1xuICBjb2xvcjogIzMzMztcbn1cbi5hcHAtaGVhZGVyIC5pbmRpY2F0b3IgLmNpcmNsZSB7XG4gIGJhY2tncm91bmQ6ICMwMTY4ZmE7XG59XG4uYXBwLWhlYWRlciAuYXBwLXNlYXJjaC1iYXIge1xuICBiYWNrZ3JvdW5kOiAjRkZGO1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjZGNkY2RjO1xufVxuLmFwcC1oZWFkZXIgLmFwcC1zZWFyY2gtYmFyIDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzYzNzg5MDtcbn1cbi5hcHAtaGVhZGVyIC5hcHAtc2VhcmNoLWJhciA6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM2Mzc4OTA7XG59XG4uYXBwLWhlYWRlciAuYXBwLXNlYXJjaC1iYXIgOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzYzNzg5MDtcbn1cbi5hcHAtaGVhZGVyIC5hcHAtc2VhcmNoLWJhciAuaW5wdXQtZ3JvdXAgLnNlYXJjaC1pY29uIHtcbiAgY29sb3I6ICMzMzM7XG59XG4uYXBwLWhlYWRlciAuYXBwLXNlYXJjaC1iYXIgLmlucHV0LWdyb3VwIC5pbnB1dC1ncm91cC10ZXh0IHtcbiAgY29sb3I6ICMzMzM7XG59XG4uYXBwLWhlYWRlciAuYXBwLXNlYXJjaC1iYXIgLmlucHV0LWdyb3VwIC5mb3JtLWNvbnRyb2wge1xuICBjb2xvcjogIzMzMztcbiAgYmFja2dyb3VuZDogI0ZGRjtcbn1cbi5hcHAtaGVhZGVyIC5sZWZ0LWhlYWRlciA+IHVsID4gbGkgPiBhLFxuLmFwcC1oZWFkZXIgLnJpZ2h0LWhlYWRlciA+IHVsID4gbGkgPiBhIHtcbiAgY29sb3I6ICMzMzM7XG59XG4uYXBwLWhlYWRlciAubGVmdC1oZWFkZXIgPiB1bCA+IGxpID4gYTpob3Zlcixcbi5hcHAtaGVhZGVyIC5yaWdodC1oZWFkZXIgPiB1bCA+IGxpID4gYTpob3ZlciB7XG4gIGNvbG9yOiAjMDE2OGZhO1xufVxuLmFwcC1oZWFkZXIgLmRyb3Bkb3duLWNhcnQ6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiAjZGNkY2RjO1xuICBib3JkZXItY29sb3I6ICNkY2RjZGM7XG59XG4uYXBwLWhlYWRlciAuZHJvcC1kb3duIC5kcm9wZG93bi1tZW51IHtcbiAgYmFja2dyb3VuZDogI0ZGRjtcbn1cbi5hcHAtaGVhZGVyIC5kcm9wLWRvd24gLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWhlYWRlciB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNmMWYxZjE7XG4gIGNvbG9yOiAjMzMzO1xufVxuLmFwcC1oZWFkZXIgLmRyb3AtZG93biAuZHJvcGRvd24tbWVudSBhIHtcbiAgY29sb3I6ICMzMzM7XG59XG4uYXBwLWhlYWRlciAuZHJvcC1kb3duIC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtOmhvdmVyLFxuLmFwcC1oZWFkZXIgLmRyb3AtZG93biAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbTpmb2N1cyB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjM0LCAyMzUsIDI0MywgMC41KTtcbn1cbi5hcHAtaGVhZGVyIC5kcm9wLWRvd24gLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW0gYSB7XG4gIGNvbG9yOiAjMzMzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWNvbG9yOiAjZjFmMWYxO1xufVxuLmFwcC1oZWFkZXIgLmRyb3AtZG93biAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbSBhOmhvdmVyLFxuLmFwcC1oZWFkZXIgLmRyb3AtZG93biAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbSBhOmZvY3VzIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMzQsIDIzNSwgMjQzLCAwLjUpO1xufVxuLmFwcC1oZWFkZXIgLmRyb3AtZG93biAuZHJvcGRvd24tbWVudSAubGlnaHQtdGV4dCB7XG4gIGNvbG9yOiAjMzM0MTUxO1xufVxuLmFwcC1oZWFkZXIgLmRyb3Bkb3duLWxpc3QtZm9vdGVyLmRyb3Bkb3duLWl0ZW0gYSB7XG4gIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XG59XG4uYXBwLWhlYWRlciAuZHJvcGRvd24tbGlzdC1mb290ZXIuZHJvcGRvd24taXRlbSBhOmhvdmVyIHtcbiAgY29sb3I6ICMwMTY4ZmEgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbi5hcHAtaGVhZGVyIC5tZWRpYSAucHJvLWltZyB7XG4gIGJvcmRlci1jb2xvcjogI2YxZjFmMTtcbn1cbi5hcHAtaGVhZGVyIC5tZXNzYWdlLWl0ZW0taW1nIGltZyB7XG4gIGJvcmRlci1jb2xvcjogI2YxZjFmMTtcbn1cblxuLmFwcC1oZWFkZXJbY29sb3ItdGhlbWU9bGlnaHRdIHtcbiAgYmFja2dyb3VuZDogI0ZGRjtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2RjZGNkYztcbn1cbi5hcHAtaGVhZGVyW2NvbG9yLXRoZW1lPWxpZ2h0XSAuaGVhZGVyLWxvZ28tYXJlYSAubG9nbyB7XG4gIGJhY2tncm91bmQ6ICMwMTY4ZmE7XG4gIGNvbG9yOiAjRkZGO1xufVxuLmFwcC1oZWFkZXJbY29sb3ItdGhlbWU9bGlnaHRdIC5oZWFkZXItbG9nby1hcmVhIC5sb2dvLXRleHQge1xuICBjb2xvcjogIzAxNjhmYTtcbn1cbi5hcHAtaGVhZGVyW2NvbG9yLXRoZW1lPWxpZ2h0XSAuaGVhZGVyLWxvZ28tYXJlYSAubG9nby10ZXh0IC5zbWFsbCB7XG4gIGNvbG9yOiAjMzMzO1xufVxuLmFwcC1oZWFkZXJbY29sb3ItdGhlbWU9bGlnaHRdIC5pbmRpY2F0b3IgLmNpcmNsZSB7XG4gIGJhY2tncm91bmQ6ICMwMTY4ZmE7XG59XG4uYXBwLWhlYWRlcltjb2xvci10aGVtZT1saWdodF0gLmxlZnQtaGVhZGVyID4gdWwgPiBsaSA+IGEsXG4uYXBwLWhlYWRlcltjb2xvci10aGVtZT1saWdodF0gLnJpZ2h0LWhlYWRlciA+IHVsID4gbGkgPiBhIHtcbiAgY29sb3I6ICMzMzM7XG59XG4uYXBwLWhlYWRlcltjb2xvci10aGVtZT1saWdodF0gLmxlZnQtaGVhZGVyID4gdWwgPiBsaSA+IGE6aG92ZXIsXG4uYXBwLWhlYWRlcltjb2xvci10aGVtZT1saWdodF0gLnJpZ2h0LWhlYWRlciA+IHVsID4gbGkgPiBhOmhvdmVyIHtcbiAgY29sb3I6ICMwMTY4ZmE7XG59XG4uYXBwLWhlYWRlcltjb2xvci10aGVtZT1saWdodF0gLmRyb3Bkb3duLWNhcnQ6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiAjZGNkY2RjO1xuICBib3JkZXItY29sb3I6ICNkY2RjZGM7XG59XG4uYXBwLWhlYWRlcltjb2xvci10aGVtZT1saWdodF0gLmRyb3AtZG93biAuZHJvcGRvd24tbWVudSB7XG4gIGJhY2tncm91bmQ6ICNGRkY7XG59XG4uYXBwLWhlYWRlcltjb2xvci10aGVtZT1saWdodF0gLmRyb3AtZG93biAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taGVhZGVyIHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2YxZjFmMTtcbiAgY29sb3I6ICMzMzM7XG59XG4uYXBwLWhlYWRlcltjb2xvci10aGVtZT1saWdodF0gLmRyb3AtZG93biAuZHJvcGRvd24tbWVudSBhIHtcbiAgY29sb3I6ICMzMzM7XG59XG4uYXBwLWhlYWRlcltjb2xvci10aGVtZT1saWdodF0gLmRyb3AtZG93biAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbTpob3Zlcixcbi5hcHAtaGVhZGVyW2NvbG9yLXRoZW1lPWxpZ2h0XSAuZHJvcC1kb3duIC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtOmZvY3VzIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMzQsIDIzNSwgMjQzLCAwLjUpO1xuICBjb2xvcjogIzAxNjhmYTtcbn1cbi5hcHAtaGVhZGVyW2NvbG9yLXRoZW1lPWxpZ2h0XSAuZHJvcC1kb3duIC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtIGEge1xuICBjb2xvcjogIzMzMztcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1jb2xvcjogI2YxZjFmMTtcbn1cbi5hcHAtaGVhZGVyW2NvbG9yLXRoZW1lPWxpZ2h0XSAuZHJvcC1kb3duIC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtIGE6aG92ZXIsXG4uYXBwLWhlYWRlcltjb2xvci10aGVtZT1saWdodF0gLmRyb3AtZG93biAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbSBhOmZvY3VzIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMzQsIDIzNSwgMjQzLCAwLjUpO1xuICBjb2xvcjogIzAxNjhmYTtcbn1cbi5hcHAtaGVhZGVyW2NvbG9yLXRoZW1lPWxpZ2h0XSAuZHJvcC1kb3duIC5kcm9wZG93bi1tZW51IC5saWdodC10ZXh0IHtcbiAgY29sb3I6ICM0ZDRkNGQ7XG59XG4uYXBwLWhlYWRlcltjb2xvci10aGVtZT1saWdodF0gLmRyb3Bkb3duLWxpc3QtZm9vdGVyLmRyb3Bkb3duLWl0ZW0gYSB7XG4gIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XG59XG4uYXBwLWhlYWRlcltjb2xvci10aGVtZT1saWdodF0gLmRyb3Bkb3duLWxpc3QtZm9vdGVyLmRyb3Bkb3duLWl0ZW0gYTpob3ZlciB7XG4gIGNvbG9yOiAjMDE2OGZhICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG4uYXBwLWhlYWRlcltjb2xvci10aGVtZT1saWdodF0gLm1lZGlhIC5wcm8taW1nIHtcbiAgYm9yZGVyLWNvbG9yOiAjZGNkY2RjO1xufVxuLmFwcC1oZWFkZXJbY29sb3ItdGhlbWU9bGlnaHRdIC5tZXNzYWdlLWl0ZW0taW1nIGltZyB7XG4gIGJvcmRlci1jb2xvcjogI2RjZGNkYztcbn1cbi5hcHAtaGVhZGVyW2NvbG9yLXRoZW1lPWxpZ2h0XSAuYXBwLXNlYXJjaC1iYXIge1xuICBiYWNrZ3JvdW5kOiAjRkZGO1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjZGNkY2RjO1xufVxuLmFwcC1oZWFkZXJbY29sb3ItdGhlbWU9bGlnaHRdIC5hcHAtc2VhcmNoLWJhciA6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM2Mzc4OTA7XG59XG4uYXBwLWhlYWRlcltjb2xvci10aGVtZT1saWdodF0gLmFwcC1zZWFyY2gtYmFyIDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzYzNzg5MDtcbn1cbi5hcHAtaGVhZGVyW2NvbG9yLXRoZW1lPWxpZ2h0XSAuYXBwLXNlYXJjaC1iYXIgOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzYzNzg5MDtcbn1cbi5hcHAtaGVhZGVyW2NvbG9yLXRoZW1lPWxpZ2h0XSAuYXBwLXNlYXJjaC1iYXIgLmlucHV0LWdyb3VwIC5zZWFyY2gtaWNvbiB7XG4gIGNvbG9yOiAjMzMzO1xufVxuLmFwcC1oZWFkZXJbY29sb3ItdGhlbWU9bGlnaHRdIC5hcHAtc2VhcmNoLWJhciAuaW5wdXQtZ3JvdXAgLmlucHV0LWdyb3VwLXRleHQge1xuICBjb2xvcjogIzMzMztcbn1cbi5hcHAtaGVhZGVyW2NvbG9yLXRoZW1lPWxpZ2h0XSAuYXBwLXNlYXJjaC1iYXIgLmlucHV0LWdyb3VwIC5mb3JtLWNvbnRyb2wge1xuICBjb2xvcjogIzMzMztcbiAgYmFja2dyb3VuZDogI0ZGRjtcbn1cbi5hcHAtaGVhZGVyW2NvbG9yLXRoZW1lPWxpZ2h0XSAuZHJvcGRvd24tZGl2aWRlciB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNkY2RjZGM7XG59XG5cbi5hcHAtaGVhZGVyW2NvbG9yLXRoZW1lPWRhcmtdIHtcbiAgYmFja2dyb3VuZDogIzJhMzQ0NDtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzRmNTk2OTtcbn1cbi5hcHAtaGVhZGVyW2NvbG9yLXRoZW1lPWRhcmtdIC5oZWFkZXItbG9nby1hcmVhIC5sb2dvIHtcbiAgYmFja2dyb3VuZDogIzAxNjhmYTtcbiAgY29sb3I6ICNGRkY7XG59XG4uYXBwLWhlYWRlcltjb2xvci10aGVtZT1kYXJrXSAuaGVhZGVyLWxvZ28tYXJlYSAubG9nby10ZXh0IHtcbiAgY29sb3I6ICMwMTY4ZmE7XG59XG4uYXBwLWhlYWRlcltjb2xvci10aGVtZT1kYXJrXSAuaGVhZGVyLWxvZ28tYXJlYSAubG9nby10ZXh0IC5zbWFsbCB7XG4gIGNvbG9yOiAjODY5OWFkO1xufVxuLmFwcC1oZWFkZXJbY29sb3ItdGhlbWU9ZGFya10gLmluZGljYXRvciAuY2lyY2xlIHtcbiAgYmFja2dyb3VuZDogIzAxNjhmYTtcbn1cbi5hcHAtaGVhZGVyW2NvbG9yLXRoZW1lPWRhcmtdIC5sZWZ0LWhlYWRlciA+IHVsID4gbGkgPiBhLFxuLmFwcC1oZWFkZXJbY29sb3ItdGhlbWU9ZGFya10gLnJpZ2h0LWhlYWRlciA+IHVsID4gbGkgPiBhIHtcbiAgY29sb3I6ICM4Njk5YWQ7XG59XG4uYXBwLWhlYWRlcltjb2xvci10aGVtZT1kYXJrXSAubGVmdC1oZWFkZXIgPiB1bCA+IGxpID4gYTpob3Zlcixcbi5hcHAtaGVhZGVyW2NvbG9yLXRoZW1lPWRhcmtdIC5yaWdodC1oZWFkZXIgPiB1bCA+IGxpID4gYTpob3ZlciB7XG4gIGNvbG9yOiAjRkZGO1xufVxuLmFwcC1oZWFkZXJbY29sb3ItdGhlbWU9ZGFya10gLmRyb3Bkb3duLWNhcnQ6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiAjNGY1OTY5O1xuICBib3JkZXItY29sb3I6ICM0ZjU5Njk7XG59XG4uYXBwLWhlYWRlcltjb2xvci10aGVtZT1kYXJrXSAuZHJvcC1kb3duIC5kcm9wZG93bi1tZW51IHtcbiAgYmFja2dyb3VuZDogIzM2M2U0YTtcbn1cbi5hcHAtaGVhZGVyW2NvbG9yLXRoZW1lPWRhcmtdIC5kcm9wLWRvd24gLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWhlYWRlciB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICM0ZjU5Njk7XG4gIGNvbG9yOiAjODY5OWFkO1xufVxuLmFwcC1oZWFkZXJbY29sb3ItdGhlbWU9ZGFya10gLmRyb3AtZG93biAuZHJvcGRvd24tbWVudSBhIHtcbiAgY29sb3I6ICM4Njk5YWQ7XG59XG4uYXBwLWhlYWRlcltjb2xvci10aGVtZT1kYXJrXSAuZHJvcC1kb3duIC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtOmhvdmVyLFxuLmFwcC1oZWFkZXJbY29sb3ItdGhlbWU9ZGFya10gLmRyb3AtZG93biAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbTpmb2N1cyB7XG4gIGJhY2tncm91bmQ6ICMyYTM0NDQ7XG4gIGNvbG9yOiAjRkZGO1xufVxuLmFwcC1oZWFkZXJbY29sb3ItdGhlbWU9ZGFya10gLmRyb3AtZG93biAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbSBhIHtcbiAgY29sb3I6ICM4Njk5YWQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItY29sb3I6ICM0ZjU5Njk7XG59XG4uYXBwLWhlYWRlcltjb2xvci10aGVtZT1kYXJrXSAuZHJvcC1kb3duIC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtIGE6aG92ZXIsXG4uYXBwLWhlYWRlcltjb2xvci10aGVtZT1kYXJrXSAuZHJvcC1kb3duIC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtIGE6Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiAjMmEzNDQ0O1xuICBjb2xvcjogI0ZGRjtcbn1cbi5hcHAtaGVhZGVyW2NvbG9yLXRoZW1lPWRhcmtdIC5kcm9wLWRvd24gLmRyb3Bkb3duLW1lbnUgLmxpZ2h0LXRleHQge1xuICBjb2xvcjogI2E0YjNjMjtcbn1cbi5hcHAtaGVhZGVyW2NvbG9yLXRoZW1lPWRhcmtdIC5kcm9wZG93bi1saXN0LWZvb3Rlci5kcm9wZG93bi1pdGVtIGEge1xuICBjb2xvcjogIzg2OTlhZCAhaW1wb3J0YW50O1xufVxuLmFwcC1oZWFkZXJbY29sb3ItdGhlbWU9ZGFya10gLmRyb3Bkb3duLWxpc3QtZm9vdGVyLmRyb3Bkb3duLWl0ZW0gYTpob3ZlciB7XG4gIGNvbG9yOiAjRkZGICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG4uYXBwLWhlYWRlcltjb2xvci10aGVtZT1kYXJrXSAubWVkaWEgLnByby1pbWcge1xuICBib3JkZXItY29sb3I6ICM0ZjU5Njk7XG59XG4uYXBwLWhlYWRlcltjb2xvci10aGVtZT1kYXJrXSAubWVzc2FnZS1pdGVtLWltZyBpbWcge1xuICBib3JkZXItY29sb3I6ICM0ZjU5Njk7XG59XG4uYXBwLWhlYWRlcltjb2xvci10aGVtZT1kYXJrXSAuYXBwLXNlYXJjaC1iYXIge1xuICBiYWNrZ3JvdW5kOiAjMmEzNDQ0O1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjNGY1OTY5O1xufVxuLmFwcC1oZWFkZXJbY29sb3ItdGhlbWU9ZGFya10gLmFwcC1zZWFyY2gtYmFyIDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzYzNzg5MDtcbn1cbi5hcHAtaGVhZGVyW2NvbG9yLXRoZW1lPWRhcmtdIC5hcHAtc2VhcmNoLWJhciA6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM2Mzc4OTA7XG59XG4uYXBwLWhlYWRlcltjb2xvci10aGVtZT1kYXJrXSAuYXBwLXNlYXJjaC1iYXIgOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzYzNzg5MDtcbn1cbi5hcHAtaGVhZGVyW2NvbG9yLXRoZW1lPWRhcmtdIC5hcHAtc2VhcmNoLWJhciAuaW5wdXQtZ3JvdXAgLnNlYXJjaC1pY29uIHtcbiAgY29sb3I6ICM4Njk5YWQ7XG59XG4uYXBwLWhlYWRlcltjb2xvci10aGVtZT1kYXJrXSAuYXBwLXNlYXJjaC1iYXIgLmlucHV0LWdyb3VwIC5pbnB1dC1ncm91cC10ZXh0IHtcbiAgY29sb3I6ICM4Njk5YWQ7XG59XG4uYXBwLWhlYWRlcltjb2xvci10aGVtZT1kYXJrXSAuYXBwLXNlYXJjaC1iYXIgLmlucHV0LWdyb3VwIC5mb3JtLWNvbnRyb2wge1xuICBjb2xvcjogIzg2OTlhZDtcbiAgYmFja2dyb3VuZDogIzJhMzQ0NDtcbn1cbi5hcHAtaGVhZGVyW2NvbG9yLXRoZW1lPWRhcmtdIC5kcm9wZG93bi1kaXZpZGVyIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzRmNTk2OTtcbn1cblxuLmJhbGFuY2UtYXJlYSAuYmFsYW5jZS1ib3gge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogOHB4IDEwcHggIWltcG9ydGFudDtcbn1cbi5iYWxhbmNlLWFyZWEgLmJhbGFuY2UtYm94IC5pY29uLWFyZWEge1xuICBwYWRkaW5nOiA0cHggN3B4O1xuICBiYWNrZ3JvdW5kOiAjZWZmM2Y2O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNlZmYwZjE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIDVweDtcbn1cbi5iYWxhbmNlLWFyZWEgLmJhbGFuY2UtYm94IC5pY29uLWFyZWEgc3BhbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAzcHg7XG4gIGNvbG9yOiAjMDE2OGZhO1xufVxuLmJhbGFuY2UtYXJlYSAuYmFsYW5jZS1ib3ggLnRleHQtYXJlYSB7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xufVxuXG4uc2NyZWVuLWFyZWEgZGl2IGEgc3BhbiB7XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHBhZGRpbmc6IDRweCAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZWZmM2Y2O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4uc2NyZWVuLWFyZWEgZGl2LmFjdGl2ZSBhIHNwYW4ge1xuICBiYWNrZ3JvdW5kOiAjMDE2OGZhO1xuICBjb2xvcjogI0ZGRjtcbiAgYm9yZGVyOiAwcHggc29saWQgIzAxNjhmYTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_services_layout_service__WEBPACK_IMPORTED_MODULE_1__["LayoutService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _shared_guard_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _shared_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]
        }, {
          type: _shared_services_header_service__WEBPACK_IMPORTED_MODULE_5__["HeaderService"]
        }];
      }, {
        navbarTypeAttr: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['navbarTypeAttr', {
            static: false
          }]
        }],
        deviceType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        navLayout: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        defaultNavbar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        toggleStatus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        navbarEffect: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        toggleNavbar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        headerColorTheme: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        collapsedHeader: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/common-components/left-asidebar/left-asidebar.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/pages/common-components/left-asidebar/left-asidebar.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: LeftAsidebarComponent */

  /***/
  function srcAppPagesCommonComponentsLeftAsidebarLeftAsidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LeftAsidebarComponent", function () {
      return LeftAsidebarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_services_layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../shared/services/layout.service */
    "./src/app/shared/services/layout.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-perfect-scrollbar */
    "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm2015/ngx-perfect-scrollbar.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_directives_dropdown_menu_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../shared/directives/dropdown-menu.directive */
    "./src/app/shared/directives/dropdown-menu.directive.ts");
    /* harmony import */


    var angular_feather__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angular-feather */
    "./node_modules/angular-feather/__ivy_ngcc__/fesm2015/angular-feather.js");

    function LeftAsidebarComponent_aside_0_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "H");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Appdash");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Client Panel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LeftAsidebarComponent_aside_0_li_9_a_1_span_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ml_r806 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("app-badge ", ml_r806.badgeBg, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ml_r806.badge);
      }
    }

    function LeftAsidebarComponent_aside_0_li_9_a_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r815 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeftAsidebarComponent_aside_0_li_9_a_1_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r815);

          var ml_r806 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r813 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r813.onItemSelect(ml_r806.name);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i-feather", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LeftAsidebarComponent_aside_0_li_9_a_1_span_5_Template, 2, 4, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ml_r806 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ml_r806.url);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", ml_r806.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ml_r806.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ml_r806.badge);
      }
    }

    function LeftAsidebarComponent_aside_0_li_9_a_2_span_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ml_r806 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("app-badge ", ml_r806.badgeBg, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ml_r806.badge);
      }
    }

    function LeftAsidebarComponent_aside_0_li_9_a_2_span_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i-feather", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LeftAsidebarComponent_aside_0_li_9_a_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i-feather", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LeftAsidebarComponent_aside_0_li_9_a_2_span_5_Template, 2, 4, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LeftAsidebarComponent_aside_0_li_9_a_2_span_6_Template, 2, 0, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ml_r806 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r809 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", ml_r806.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ml_r806.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ml_r806.badge);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r809.navLayout === "vertical");
      }
    }

    function LeftAsidebarComponent_aside_0_li_9_ul_3_li_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r825 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeftAsidebarComponent_aside_0_li_9_ul_3_li_1_Template_li_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r825);

          var ml_r806 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var ctx_r823 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r823.onSubItemSelect(ml_r806.name);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i-feather", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var child_r822 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", child_r822.url);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", child_r822.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](child_r822.name);
      }
    }

    function LeftAsidebarComponent_aside_0_li_9_ul_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LeftAsidebarComponent_aside_0_li_9_ul_3_li_1_Template, 6, 3, "li", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ml_r806 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ml_r806.subMenu);
      }
    }

    var _c0 = function _c0(a0, a1) {
      return {
        active: a0,
        "hasMenu": a1
      };
    };

    function LeftAsidebarComponent_aside_0_li_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LeftAsidebarComponent_aside_0_li_9_a_1_Template, 6, 4, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LeftAsidebarComponent_aside_0_li_9_a_2_Template, 7, 4, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LeftAsidebarComponent_aside_0_li_9_ul_3_Template, 2, 1, "ul", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ml_r806 = ctx.$implicit;

        var ctx_r803 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c0, ctx_r803.isActive(ml_r806.name), ml_r806.subMenu));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ml_r806.subMenu);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ml_r806.subMenu);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ml_r806.subMenu);
      }
    }

    function LeftAsidebarComponent_aside_0_li_14_a_1_span_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ml_r827 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("app-badge ", ml_r827.badgeBg, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ml_r827.badge);
      }
    }

    function LeftAsidebarComponent_aside_0_li_14_a_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r836 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeftAsidebarComponent_aside_0_li_14_a_1_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r836);

          var ml_r827 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r834 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r834.onItemSelect(ml_r827.name);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i-feather", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LeftAsidebarComponent_aside_0_li_14_a_1_span_5_Template, 2, 4, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ml_r827 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ml_r827.url);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", ml_r827.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ml_r827.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ml_r827.badge);
      }
    }

    function LeftAsidebarComponent_aside_0_li_14_a_2_span_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ml_r827 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("app-badge ", ml_r827.badgeBg, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ml_r827.badge);
      }
    }

    function LeftAsidebarComponent_aside_0_li_14_a_2_span_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i-feather", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LeftAsidebarComponent_aside_0_li_14_a_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i-feather", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LeftAsidebarComponent_aside_0_li_14_a_2_span_5_Template, 2, 4, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LeftAsidebarComponent_aside_0_li_14_a_2_span_6_Template, 2, 0, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ml_r827 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r830 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", ml_r827.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ml_r827.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ml_r827.badge);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r830.navLayout === "vertical");
      }
    }

    function LeftAsidebarComponent_aside_0_li_14_ul_3_li_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r846 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeftAsidebarComponent_aside_0_li_14_ul_3_li_1_Template_li_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r846);

          var ml_r827 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var ctx_r844 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r844.onSubItemSelect(ml_r827.name);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i-feather", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var child_r843 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", child_r843.url);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", child_r843.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](child_r843.name);
      }
    }

    function LeftAsidebarComponent_aside_0_li_14_ul_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LeftAsidebarComponent_aside_0_li_14_ul_3_li_1_Template, 6, 3, "li", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ml_r827 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ml_r827.subMenu);
      }
    }

    function LeftAsidebarComponent_aside_0_li_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LeftAsidebarComponent_aside_0_li_14_a_1_Template, 6, 4, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LeftAsidebarComponent_aside_0_li_14_a_2_Template, 7, 4, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LeftAsidebarComponent_aside_0_li_14_ul_3_Template, 2, 1, "ul", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ml_r827 = ctx.$implicit;

        var ctx_r804 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c0, ctx_r804.isActive(ml_r827.name), ml_r827.subMenu));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ml_r827.subMenu);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ml_r827.subMenu);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ml_r827.subMenu);
      }
    }

    function LeftAsidebarComponent_aside_0_li_19_a_1_span_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ml_r848 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("app-badge ", ml_r848.badgeBg, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ml_r848.badge);
      }
    }

    function LeftAsidebarComponent_aside_0_li_19_a_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r857 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeftAsidebarComponent_aside_0_li_19_a_1_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r857);

          var ml_r848 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r855 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r855.onItemSelect(ml_r848.name);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i-feather", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LeftAsidebarComponent_aside_0_li_19_a_1_span_5_Template, 2, 4, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ml_r848 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ml_r848.url);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", ml_r848.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ml_r848.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ml_r848.badge);
      }
    }

    function LeftAsidebarComponent_aside_0_li_19_a_2_span_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ml_r848 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("app-badge ", ml_r848.badgeBg, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ml_r848.badge);
      }
    }

    function LeftAsidebarComponent_aside_0_li_19_a_2_span_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i-feather", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LeftAsidebarComponent_aside_0_li_19_a_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i-feather", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LeftAsidebarComponent_aside_0_li_19_a_2_span_5_Template, 2, 4, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LeftAsidebarComponent_aside_0_li_19_a_2_span_6_Template, 2, 0, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ml_r848 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r851 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", ml_r848.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ml_r848.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ml_r848.badge);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r851.navLayout === "vertical");
      }
    }

    function LeftAsidebarComponent_aside_0_li_19_ul_3_li_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r867 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeftAsidebarComponent_aside_0_li_19_ul_3_li_1_Template_li_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r867);

          var ml_r848 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var ctx_r865 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r865.onSubItemSelect(ml_r848.name);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i-feather", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var child_r864 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", child_r864.url);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", child_r864.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](child_r864.name);
      }
    }

    function LeftAsidebarComponent_aside_0_li_19_ul_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LeftAsidebarComponent_aside_0_li_19_ul_3_li_1_Template, 6, 3, "li", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ml_r848 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ml_r848.subMenu);
      }
    }

    function LeftAsidebarComponent_aside_0_li_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LeftAsidebarComponent_aside_0_li_19_a_1_Template, 6, 4, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LeftAsidebarComponent_aside_0_li_19_a_2_Template, 7, 4, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LeftAsidebarComponent_aside_0_li_19_ul_3_Template, 2, 1, "ul", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ml_r848 = ctx.$implicit;

        var ctx_r805 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c0, ctx_r805.isActive(ml_r848.name), ml_r848.subMenu));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ml_r848.subMenu);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ml_r848.subMenu);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ml_r848.subMenu);
      }
    }

    var _c1 = function _c1(a0) {
      return {
        hideNav: a0
      };
    };

    function LeftAsidebarComponent_aside_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aside", 1, 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "perfect-scrollbar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LeftAsidebarComponent_aside_0_div_4_Template, 8, 0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nav", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Client Area ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LeftAsidebarComponent_aside_0_li_9_Template, 4, 7, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nav", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Partner Area ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LeftAsidebarComponent_aside_0_li_14_Template, 4, 7, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "nav", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Other Area ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, LeftAsidebarComponent_aside_0_li_19_Template, 4, 7, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r799 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, ctx_r799.toggleStatus && ctx_r799.deviceType === "phone"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("collapsed-header", ctx_r799.collapsedHeader)("nav-layout", ctx_r799.navLayout)("navbar-type", ctx_r799.toggleStatus ? ctx_r799.defaultNavbar : ctx_r799.toggleNavbar)("effect-type", ctx_r799.navbarEffect)("device-type", ctx_r799.deviceType)("color-theme", ctx_r799.navbarColorTheme);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r799.deviceType === "phone" || ctx_r799.navLayout === "vertical" && ctx_r799.collapsedHeader === true || ctx_r799.navLayout === "vertical" && ctx_r799.collapsedHeader === false && ctx_r799.deviceType === "phone");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r799.clientAreaMenuList);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r799.partnerAreaMenuList);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r799.otherMenuList);
      }
    }

    function LeftAsidebarComponent_aside_1_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Appdash");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Admin Panel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LeftAsidebarComponent_aside_1_li_8_a_1_span_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ml_r872 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("app-badge ", ml_r872.badgeBg, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ml_r872.badge);
      }
    }

    function LeftAsidebarComponent_aside_1_li_8_a_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r881 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeftAsidebarComponent_aside_1_li_8_a_1_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r881);

          var ml_r872 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r879 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r879.onItemSelect(ml_r872.name);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i-feather", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LeftAsidebarComponent_aside_1_li_8_a_1_span_5_Template, 2, 4, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ml_r872 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ml_r872.url);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", ml_r872.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ml_r872.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ml_r872.badge);
      }
    }

    function LeftAsidebarComponent_aside_1_li_8_a_2_span_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ml_r872 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("app-badge ", ml_r872.badgeBg, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ml_r872.badge);
      }
    }

    function LeftAsidebarComponent_aside_1_li_8_a_2_span_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i-feather", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LeftAsidebarComponent_aside_1_li_8_a_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i-feather", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LeftAsidebarComponent_aside_1_li_8_a_2_span_5_Template, 2, 4, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LeftAsidebarComponent_aside_1_li_8_a_2_span_6_Template, 2, 0, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ml_r872 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r875 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", ml_r872.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ml_r872.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ml_r872.badge);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r875.navLayout === "horizontal");
      }
    }

    function LeftAsidebarComponent_aside_1_li_8_ul_3_li_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r891 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeftAsidebarComponent_aside_1_li_8_ul_3_li_1_Template_li_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r891);

          var ml_r872 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var ctx_r889 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r889.onSubItemSelect(ml_r872.name);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i-feather", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var child_r888 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", child_r888.url);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", child_r888.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](child_r888.name);
      }
    }

    function LeftAsidebarComponent_aside_1_li_8_ul_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LeftAsidebarComponent_aside_1_li_8_ul_3_li_1_Template, 6, 3, "li", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ml_r872 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ml_r872.subMenu);
      }
    }

    function LeftAsidebarComponent_aside_1_li_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LeftAsidebarComponent_aside_1_li_8_a_1_Template, 6, 4, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LeftAsidebarComponent_aside_1_li_8_a_2_Template, 7, 4, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LeftAsidebarComponent_aside_1_li_8_ul_3_Template, 2, 1, "ul", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ml_r872 = ctx.$implicit;

        var ctx_r871 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c0, ctx_r871.isActive(ml_r872.name), ml_r872.subMenu));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ml_r872.subMenu);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ml_r872.subMenu);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ml_r872.subMenu);
      }
    }

    function LeftAsidebarComponent_aside_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aside", 1, 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LeftAsidebarComponent_aside_1_div_3_Template, 8, 0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Navigation");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LeftAsidebarComponent_aside_1_li_8_Template, 4, 7, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r800 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, ctx_r800.toggleStatus && ctx_r800.navLayout === "horizontal" && ctx_r800.deviceType === "phone"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("collapsed-header", ctx_r800.collapsedHeader)("nav-layout", ctx_r800.navLayout)("navbar-type", ctx_r800.toggleStatus ? ctx_r800.defaultNavbar : ctx_r800.toggleNavbar)("effect-type", ctx_r800.navbarEffect)("device-type", ctx_r800.deviceType)("color-theme", ctx_r800.navbarColorTheme);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r800.navLayout === "horizontal" && ctx_r800.deviceType === "phone" || ctx_r800.collapsedHeader === true || ctx_r800.collapsedHeader === false && ctx_r800.deviceType === "phone");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r800.clientAreaMenuList);
      }
    }

    var LeftAsidebarComponent =
    /*#__PURE__*/
    function () {
      function LeftAsidebarComponent(elRef, renderer, layoutService) {
        _classCallCheck(this, LeftAsidebarComponent);

        this.elRef = elRef;
        this.renderer = renderer;
        this.layoutService = layoutService;
        this.loading = true;
      }

      _createClass(LeftAsidebarComponent, [{
        key: "isActive",
        value: function isActive(item) {
          return this.selected === item;
        }
      }, {
        key: "onItemSelect",
        value: function onItemSelect(item) {
          this.selected = this.selected === item ? item : item;
        }
      }, {
        key: "onSubItemSelect",
        value: function onSubItemSelect(item) {
          this.selected = this.selected === item ? item : item;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.title = 'Navigation'; // this.clientAreaMenuList = [
          //   {
          //     name: 'Dashboard',
          //     icon: 'Airplay',
          //     url: '/home/dashboard',
          //   },
          //   {
          //     name: 'Accounts',
          //     icon: 'shopping-bag',
          //     subMenu: [
          //       {
          //         name: 'Accounts Overview',
          //         icon: 'Circle',
          //         url: '/home/accounts/overview',
          //       },
          //       {
          //         name: 'Accounts Management',
          //         icon: 'Circle',
          //         url: '/home/accounts/management',
          //       },
          //     ]
          //   },
          //   {
          //     name: 'Money',
          //     icon: 'dollar-sign',
          //     subMenu: [
          //       {
          //         name: 'Deposit Funds',
          //         icon: 'Circle',
          //         url: '/home/money/deposit-funds',
          //       },
          //       {
          //         name: 'Withdraw Funds',
          //         icon: 'Circle',
          //         url: '/home/money/withdraw-funds',
          //       },
          //       {
          //         name: 'Transfer Funds',
          //         icon: 'Circle',
          //         url: '/home/money/transfer-funds',
          //       },
          //       {
          //         name: 'Ledger Overview',
          //         icon: 'Circle',
          //         url: '/home/money/ledger-overview',
          //       }
          //     ]
          //   },
          //   {
          //     name: 'Reports',
          //     icon: 'file-text',
          //     url: '/home/reports',
          //   },
          //   {
          //     name: 'Platforms',
          //     icon: 'Monitor',
          //     url: '/home/platforms',
          //   },
          //   {
          //     name: 'Documents',
          //     icon: 'copy',
          //     subMenu: [
          //       {
          //         name: 'KYC Upload',
          //         icon: 'Circle',
          //         url: '/home/documents',
          //       },
          //     ]
          //   },
          //   {
          //     name: 'Profile',
          //     icon: 'user',
          //     subMenu: [
          //       {
          //         name: 'User Profile',
          //         icon: 'Circle',
          //         url: '/home/profile/view',
          //       },
          //       {
          //         name: 'Edit Profile',
          //         icon: 'Circle',
          //         url: '/home/profile/edit',
          //       },
          //       {
          //         name: 'Change Password',
          //         icon: 'Circle',
          //         url: '/home/profile/change-password',
          //       }
          //     ]
          //   },
          //   {
          //     name: 'Message Center',
          //     icon: 'message-square',
          //     url: '/home/message-center',
          //   },
          //   {
          //     name: 'Promotion',
          //     icon: 'gift',
          //     subMenu: [
          //       {
          //         name: 'Redeem Coupon',
          //         icon: 'Circle',
          //         url: '/home/promotions/reedeem-coupon',
          //       },
          //     ]
          //   },
          //   {
          //     name: 'Partner Area',
          //     icon: 'users',
          //     subMenu: [
          //       {
          //         name: 'IB Request',
          //         icon: 'Circle',
          //         url: '/home/partner-area/ib-request',
          //       },
          //       {
          //         name: 'View IB & Sub IB',
          //         icon: 'Circle',
          //         url: '/home/partner-area/view-ib',
          //       },
          //       {
          //         name: 'Daily Commission',
          //         icon: 'Circle',
          //         url: '/home/partner-area/daily-comission',
          //       },
          //     ]
          //   },
          //   {
          //     name: 'Affilate',
          //     icon: 'pocket',
          //     subMenu: [
          //       {
          //         name: 'Affiliate Request',
          //         icon: 'Circle',
          //         url: '/home/affiliate/affiliate-request',
          //       },
          //       {
          //         name: 'Referred Users list',
          //         icon: 'Circle',
          //         url: '/home/affiliate/referred-users-list',
          //       }
          //     ]
          //   },
          //   {
          //     name: 'Risk Manager',
          //     icon: 'shield',
          //     subMenu: [
          //       {
          //         name: 'Equity Drawdown',
          //         icon: 'Circle',
          //         url: '/home/risk-manager/equity-drawdown',
          //       },
          //       {
          //         name: 'Symbol Drawdown',
          //         icon: 'Circle',
          //         url: '/home/risk-manager/symbol-drawdown',
          //       },
          //       {
          //         name: 'Profit Loss',
          //         icon: 'Circle',
          //         url: '/home/risk-manager/profit-loss',
          //       },
          //     ]
          //   },
          //   {
          //     name: 'Trade Tools',
          //     icon: 'calendar',
          //     subMenu: [
          //       {
          //         name: 'Economic Calendar',
          //         icon: 'Circle',
          //         url: '/home/economic-calendar/calendar-signal',
          //       },
          //       {
          //         name: 'Pip Calculator',
          //         icon: 'Circle',
          //         url: '/home/economic-calendar/calendar-signal',
          //       },
          //       {
          //         name: 'Margin Calculator',
          //         icon: 'Circle',
          //         url: '/home/economic-calendar/calendar-signal',
          //       },
          //       {
          //         name: 'Profit Calculator',
          //         icon: 'Circle',
          //         url: '/home/economic-calendar/calendar-signal',
          //       },
          //     ]
          //   },
          // ];

          this.clientAreaMenuList = [{
            name: 'Dashboard',
            icon: 'Airplay',
            url: '/home/dashboard'
          }, {
            name: 'Accounts',
            icon: 'shopping-bag',
            subMenu: [{
              name: 'Accounts Overview',
              icon: 'Circle',
              url: '/home/accounts/overview'
            }, {
              name: 'Accounts Management',
              icon: 'Circle',
              url: '/home/accounts/management'
            }]
          }, {
            name: 'Money',
            icon: 'dollar-sign',
            subMenu: [{
              name: 'Deposit Funds',
              icon: 'Circle',
              url: '/home/money/deposit-funds'
            }, {
              name: 'Withdraw Funds',
              icon: 'Circle',
              url: '/home/money/withdraw-funds'
            }, {
              name: 'Transfer Funds',
              icon: 'Circle',
              url: '/home/money/transfer-funds'
            }, {
              name: 'Ledger Overview',
              icon: 'Circle',
              url: '/home/money/ledger-overview'
            }]
          }, {
            name: 'Reports',
            icon: 'file-text',
            url: '/home/reports'
          }, {
            name: 'Platforms',
            icon: 'Monitor',
            url: '/home/platforms'
          }, {
            name: 'Documents',
            icon: 'copy',
            subMenu: [{
              name: 'KYC Upload',
              icon: 'Circle',
              url: '/home/documents'
            }]
          }, {
            name: 'Profile',
            icon: 'user',
            subMenu: [{
              name: 'View Profile',
              icon: 'Circle',
              url: '/home/profile/view'
            }, {
              name: 'Edit Profile',
              icon: 'Circle',
              url: '/home/profile/edit'
            }, {
              name: 'Change Password',
              icon: 'Circle',
              url: '/home/profile/change-password'
            }]
          }, {
            name: 'Message Center',
            icon: 'message-square',
            url: '/home/message-center'
          }, {
            name: 'Promotion',
            icon: 'gift',
            subMenu: [{
              name: 'Redeem Coupon',
              icon: 'Circle',
              url: '/home/promotions/redeem-coupon'
            }]
          }];
          this.partnerAreaMenuList = [{
            name: 'Partner Area',
            icon: 'users',
            subMenu: [{
              name: 'IB Request',
              icon: 'Circle',
              url: '/home/partner-area/ib-request'
            }, {
              name: 'View IB & Sub IB',
              icon: 'Circle',
              url: '/home/partner-area/view-ib-and-sub-ib'
            }, {
              name: 'Daily Commission',
              icon: 'Circle',
              url: '/home/partner-area/daily-comission'
            }]
          }];
          this.otherMenuList = [{
            name: 'Affiliate',
            icon: 'pocket',
            subMenu: [{
              name: 'Affiliate Request',
              icon: 'Circle',
              url: '/home/affiliate/affiliate-request'
            }, {
              name: 'Referred Users list',
              icon: 'Circle',
              url: '/home/affiliate/referred-users-list'
            }]
          }, {
            name: 'Risk Manager',
            icon: 'shield',
            subMenu: [{
              name: 'Equity Drawdown',
              icon: 'Circle',
              url: '/home/risk-manager/equity-drawdown'
            }, {
              name: 'Symbol Drawdown',
              icon: 'Circle',
              url: '/home/risk-manager/symbol-drawdown'
            }, {
              name: 'Profit Loss',
              icon: 'Circle',
              url: '/home/risk-manager/profit-loss'
            }]
          }, {
            name: 'Trade Tools',
            icon: 'calendar',
            subMenu: [{
              name: 'Economic Calendar',
              icon: 'Circle',
              url: '/home/economic-calendar/calendar-signal'
            }, {
              name: 'Pip Calculator',
              icon: 'Circle',
              url: '/home/economic-calendar/calendar-signal'
            }, {
              name: 'Margin Calculator',
              icon: 'Circle',
              url: '/home/economic-calendar/calendar-signal'
            }, {
              name: 'Profit Calculator',
              icon: 'Circle',
              url: '/home/economic-calendar/calendar-signal'
            }]
          }];
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }]);

      return LeftAsidebarComponent;
    }();

    LeftAsidebarComponent.ɵfac = function LeftAsidebarComponent_Factory(t) {
      return new (t || LeftAsidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_1__["LayoutService"]));
    };

    LeftAsidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LeftAsidebarComponent,
      selectors: [["app-left-asidebar"]],
      inputs: {
        deviceType: "deviceType",
        navLayout: "navLayout",
        defaultNavbar: "defaultNavbar",
        toggleStatus: "toggleStatus",
        navbarEffect: "navbarEffect",
        toggleNavbar: "toggleNavbar",
        navbarColorTheme: "navbarColorTheme",
        collapsedHeader: "collapsedHeader"
      },
      decls: 2,
      vars: 2,
      consts: [["class", "app-left-panel", 3, "ngClass", 4, "ngIf"], [1, "app-left-panel", 3, "ngClass"], ["navbarTypeAttr", ""], [1, "app-wrapper"], ["class", "logo-area", 4, "ngIf"], [1, "app-navbar"], [1, "menu-list"], [1, "nav-label"], ["routerLinkActive", "active", "class", "menu-item", "appDropdownMenu", "", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "logo-area"], [1, "logo"], [1, "logo-text"], [1, "small"], ["routerLinkActive", "active", "appDropdownMenu", "", 1, "menu-item", 3, "ngClass"], [3, "routerLink", "click", 4, "ngIf"], ["href", "javascript:void(0)", 4, "ngIf"], [4, "ngIf"], [3, "routerLink", "click"], [1, "app-micon"], [1, "medium-icon", 3, "name"], [1, "app-mtext"], [3, "class", 4, "ngIf"], ["href", "javascript:void(0)"], ["class", "app-mcaret", 4, "ngIf"], [1, "app-mcaret"], ["name", "chevron-right", 1, "mcaret-icon"], ["routerLinkActive", "active", 3, "click", 4, "ngFor", "ngForOf"], ["routerLinkActive", "active", 3, "click"], [3, "routerLink"], [1, "small-icon", 3, "name"], [1, "fas", "fa-heading"], ["name", "chevron-down", 1, "mcaret-icon"]],
      template: function LeftAsidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LeftAsidebarComponent_aside_0_Template, 20, 13, "aside", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LeftAsidebarComponent_aside_1_Template, 9, 11, "aside", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.navLayout === "vertical");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.navLayout === "horizontal");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _shared_directives_dropdown_menu_directive__WEBPACK_IMPORTED_MODULE_5__["DropdownMenuDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], angular_feather__WEBPACK_IMPORTED_MODULE_6__["ɵa"]],
      styles: [".app-left-panel[nav-layout=vertical][_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  z-index: 1024;\n  font-size: 13px;\n  font-weight: 300;\n  overflow: hidden;\n  border-right-style: solid;\n  border-right-width: 1px;\n  display: block;\n}\n.app-left-panel[nav-layout=vertical][_ngcontent-%COMP%]   .app-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  width: 100%;\n  overflow: hidden;\n  overflow-y: auto;\n}\n.app-left-panel[nav-layout=vertical][_ngcontent-%COMP%]   ul.menu-list[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n  list-style: none;\n}\n.app-left-panel[nav-layout=vertical][_ngcontent-%COMP%]   ul.menu-list[_ngcontent-%COMP%]   .nav-label[_ngcontent-%COMP%] {\n  display: block;\n  padding: 5px 15px 5px;\n  font-size: 16px;\n  font-weight: 500;\n  margin-top: 15px;\n  text-align: left;\n  font-weight: 600;\n  text-transform: uppercase;\n  color: #007bff !important;\n}\n.app-left-panel[nav-layout=vertical][_ngcontent-%COMP%]   ul.menu-list[_ngcontent-%COMP%]   .nav-labe[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n}\n.app-left-panel[nav-layout=vertical][_ngcontent-%COMP%]   ul.menu-list[_ngcontent-%COMP%]    > li.menu-item[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n  list-style: none;\n  display: block;\n  position: relative;\n}\n.app-left-panel[nav-layout=vertical][_ngcontent-%COMP%]   ul.menu-list[_ngcontent-%COMP%]    > li.menu-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  text-decoration: none;\n  position: relative;\n  text-align: left;\n  padding: 10px 15px;\n  font-weight: 400;\n  cursor: pointer;\n}\n.app-left-panel[nav-layout=vertical][_ngcontent-%COMP%]   ul.menu-list[_ngcontent-%COMP%]    > li.menu-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .app-mtext[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: absolute;\n  top: 11px;\n  white-space: nowrap;\n}\n.app-left-panel[nav-layout=vertical][_ngcontent-%COMP%]   ul.menu-list[_ngcontent-%COMP%]    > li.menu-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .app-micon[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  display: inline-block;\n  position: relative;\n  vertical-align: middle;\n  z-index: 1;\n}\n.app-left-panel[nav-layout=vertical][_ngcontent-%COMP%]   ul.menu-list[_ngcontent-%COMP%]    > li.menu-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .app-micon[_ngcontent-%COMP%]   .medium-icon[_ngcontent-%COMP%] {\n  width: 19px;\n  height: 19px;\n}\n.app-left-panel[nav-layout=vertical][_ngcontent-%COMP%]   ul.menu-list[_ngcontent-%COMP%]    > li.menu-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .app-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  display: inline-block;\n  padding: 5px 5px;\n  font-size: 75%;\n  font-weight: 600;\n  line-height: 1;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: 2px;\n  top: 12px;\n  -webkit-transition: opacity 0.2s linear;\n  transition: opacity 0.2s linear;\n}\n.app-left-panel[nav-layout=vertical][_ngcontent-%COMP%]   li.menu-item.hasMenu[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: relative;\n}\n.app-left-panel[nav-layout=vertical][_ngcontent-%COMP%]   li.menu-item.hasMenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: none;\n  margin: 0px;\n  padding: 10px 0px 10px 0px;\n}\n.app-left-panel[nav-layout=vertical][_ngcontent-%COMP%]   li.menu-item.hasMenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n  list-style: none;\n  display: block;\n}\n.app-left-panel[nav-layout=vertical][_ngcontent-%COMP%]   li.menu-item.hasMenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  border: 0px;\n  text-decoration: none;\n  padding: 4px 10px;\n  display: block;\n}\n.app-left-panel[nav-layout=vertical][_ngcontent-%COMP%]   li.menu-item.hasMenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .app-micon[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding-right: 10px;\n  width: auto;\n  height: auto;\n}\n.app-left-panel[nav-layout=vertical][_ngcontent-%COMP%]   li.menu-item.hasMenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .app-micon[_ngcontent-%COMP%]   .small-icon[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n}\n.app-left-panel[nav-layout=vertical][_ngcontent-%COMP%]   li.menu-item.hasMenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   .app-micon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  border-radius: 100%;\n}\n.app-left-panel[nav-layout=vertical][_ngcontent-%COMP%]   li.menu-item.hasMenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .app-micon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  border-radius: 100%;\n}\n.app-left-panel[nav-layout=vertical][_ngcontent-%COMP%]   li.menu-item.hasMenu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .app-mcaret[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 15px;\n  top: 10px;\n}\n.app-left-panel[nav-layout=vertical][_ngcontent-%COMP%]   li.menu-item.hasMenu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .app-mcaret[_ngcontent-%COMP%]   .mcaret-icon[_ngcontent-%COMP%] {\n  width: 19px;\n  height: 19px;\n}\n.app-left-panel[nav-layout=vertical][_ngcontent-%COMP%]   li.menu-item.hasMenu.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: block;\n}\n.app-left-panel[nav-layout=vertical][_ngcontent-%COMP%]   li.menu-item.hasMenu.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .app-mcaret[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n  -webkit-transform: rotate(90deg);\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.app-left-panel[nav-layout=vertical][_ngcontent-%COMP%]   li.menu-item.hasMenu.open[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: block;\n}\n.app-left-panel[nav-layout=vertical][_ngcontent-%COMP%]   li.menu-item.hasMenu.open[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .app-mcaret[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n  -webkit-transform: rotate(90deg);\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.app-left-panel[nav-layout=vertical][_ngcontent-%COMP%]   .logo-area[_ngcontent-%COMP%] {\n  content: \"\";\n  clear: both;\n  overflow: hidden;\n  padding: 5px 8px;\n}\n.app-left-panel[nav-layout=vertical][_ngcontent-%COMP%]   .logo-area[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  float: left;\n  border-radius: 2px;\n  font-size: 21px;\n  width: 35px;\n  height: 35px;\n  text-align: center;\n  margin-right: 5px;\n  padding-top: 2px;\n}\n.app-left-panel[nav-layout=vertical][_ngcontent-%COMP%]   .logo-area[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%] {\n  padding: 0px;\n  float: left;\n  line-height: 18px;\n}\n.app-left-panel[nav-layout=vertical][_ngcontent-%COMP%]   .logo-area[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 0px;\n  margin: 0px;\n  font-size: 17px;\n  font-weight: 600;\n}\n.app-left-panel[nav-layout=vertical][_ngcontent-%COMP%]   .logo-area[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%] {\n  padding: 0px;\n  margin: 0px;\n  font-size: 13px;\n  font-weight: 500;\n}\n.app-left-panel[nav-layout=vertical][collapsed-header=true][_ngcontent-%COMP%] {\n  height: 100vh;\n  margin-top: 0px;\n}\n.app-left-panel[nav-layout=vertical][collapsed-header=false][_ngcontent-%COMP%] {\n  height: calc(100vh - 60px);\n  margin-top: 60px;\n}\n.app-left-panel[nav-layout=vertical][device-type=phone][collapsed-header=false][_ngcontent-%COMP%] {\n  height: calc(100vh);\n  margin-top: 0px;\n}\n.app-left-panel[nav-layout=vertical][navbar-type=expanded][_ngcontent-%COMP%] {\n  overflow-y: auto;\n  overflow-x: hidden;\n  width: 230px;\n  left: 0px;\n}\n.app-left-panel[nav-layout=vertical][navbar-type=expanded][_ngcontent-%COMP%]   li.menu-item.hasMenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding-left: 26px;\n}\n.app-left-panel[nav-layout=vertical][navbar-type=collapsed][_ngcontent-%COMP%] {\n  width: 50px;\n  z-index: 99999;\n  cursor: pointer;\n}\n.app-left-panel[nav-layout=vertical][navbar-type=collapsed][_ngcontent-%COMP%]   .app-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  width: 100%;\n}\n.app-left-panel[nav-layout=vertical][navbar-type=collapsed][_ngcontent-%COMP%]   ul.menu-list[_ngcontent-%COMP%]   .nav-label[_ngcontent-%COMP%] {\n  display: none;\n}\n.app-left-panel[nav-layout=vertical][navbar-type=collapsed][_ngcontent-%COMP%]   ul.menu-list[_ngcontent-%COMP%]    > li.menu-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .app-mtext[_ngcontent-%COMP%] {\n  left: 55px;\n  display: none;\n}\n.app-left-panel[nav-layout=vertical][navbar-type=collapsed][_ngcontent-%COMP%]   ul.menu-list[_ngcontent-%COMP%]    > li.menu-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .app-badge[_ngcontent-%COMP%] {\n  display: none;\n}\n.app-left-panel[nav-layout=vertical][navbar-type=collapsed][_ngcontent-%COMP%]   ul.menu-list[_ngcontent-%COMP%]    > li.menu-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .app-badge[_ngcontent-%COMP%] {\n  display: none;\n}\n.app-left-panel[nav-layout=vertical][navbar-type=collapsed][_ngcontent-%COMP%]   ul.menu-list[_ngcontent-%COMP%]    > li.menu-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .app-mcaret[_ngcontent-%COMP%] {\n  display: none;\n}\n.app-left-panel[nav-layout=vertical][navbar-type=collapsed][_ngcontent-%COMP%]   ul.menu-list[_ngcontent-%COMP%]    > li.menu-item.hasMenu.open[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: none;\n}\n.app-left-panel[nav-layout=vertical][navbar-type=collapsed][_ngcontent-%COMP%]   ul.menu-list[_ngcontent-%COMP%]    > li.menu-item.hasMenu.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: none;\n}\n.app-left-panel[nav-layout=vertical][navbar-type=collapsed][_ngcontent-%COMP%]   .logo-area[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%] {\n  display: none;\n}\n.app-left-panel[nav-layout=vertical][navbar-type=collapsed][_ngcontent-%COMP%]:hover {\n  width: 230px;\n  z-index: 99999;\n  cursor: pointer;\n}\n.app-left-panel[nav-layout=vertical][navbar-type=collapsed][_ngcontent-%COMP%]:hover   ul.menu-list[_ngcontent-%COMP%]   .nav-label[_ngcontent-%COMP%] {\n  display: block;\n}\n.app-left-panel[nav-layout=vertical][navbar-type=collapsed][_ngcontent-%COMP%]:hover   ul.menu-list[_ngcontent-%COMP%]    > li.menu-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .app-mtext[_ngcontent-%COMP%] {\n  left: auto;\n  display: inline-block;\n}\n.app-left-panel[nav-layout=vertical][navbar-type=collapsed][_ngcontent-%COMP%]:hover   ul.menu-list[_ngcontent-%COMP%]    > li.menu-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .app-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.app-left-panel[nav-layout=vertical][navbar-type=collapsed][_ngcontent-%COMP%]:hover   ul.menu-list[_ngcontent-%COMP%]    > li.menu-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .app-mcaret[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.app-left-panel[nav-layout=vertical][navbar-type=collapsed][_ngcontent-%COMP%]:hover   ul.menu-list[_ngcontent-%COMP%]    > li.menu-item.hasMenu.open[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: block;\n}\n.app-left-panel[nav-layout=vertical][navbar-type=collapsed][_ngcontent-%COMP%]:hover   ul.menu-list[_ngcontent-%COMP%]    > li.menu-item.hasMenu.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: block;\n}\n.app-left-panel[nav-layout=vertical][navbar-type=collapsed][_ngcontent-%COMP%]:hover   li.menu-item.hasMenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding-left: 26px;\n}\n.app-left-panel[nav-layout=vertical][navbar-type=collapsed][_ngcontent-%COMP%]:hover   .logo-area[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.app-left-panel[nav-layout=vertical][navbar-type=offcanvas][_ngcontent-%COMP%] {\n  width: 230px;\n  left: -230px;\n}\n.app-left-panel[nav-layout=horizontal][device-type=desktop][_ngcontent-%COMP%], .app-left-panel[nav-layout=horizontal][device-type=tablet][_ngcontent-%COMP%] {\n  position: relative;\n  height: 40px !important;\n  z-index: 1024;\n  font-size: 13px;\n  font-weight: 300;\n  padding: 0px;\n  margin: 0px;\n}\n.app-left-panel[nav-layout=horizontal][device-type=desktop][_ngcontent-%COMP%]   .app-wrapper[_ngcontent-%COMP%], .app-left-panel[nav-layout=horizontal][device-type=tablet][_ngcontent-%COMP%]   .app-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  width: 100%;\n}\n.app-left-panel[nav-layout=horizontal][device-type=desktop][_ngcontent-%COMP%]   ul.menu-list[_ngcontent-%COMP%], .app-left-panel[nav-layout=horizontal][device-type=tablet][_ngcontent-%COMP%]   ul.menu-list[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n  list-style: none;\n}\n.app-left-panel[nav-layout=horizontal][device-type=desktop][_ngcontent-%COMP%]   ul.menu-list[_ngcontent-%COMP%]   .nav-label[_ngcontent-%COMP%], .app-left-panel[nav-layout=horizontal][device-type=tablet][_ngcontent-%COMP%]   ul.menu-list[_ngcontent-%COMP%]   .nav-label[_ngcontent-%COMP%] {\n  display: none;\n}\n.app-left-panel[nav-layout=horizontal][device-type=desktop][_ngcontent-%COMP%]   ul.menu-list[_ngcontent-%COMP%]    > li.menu-item[_ngcontent-%COMP%], .app-left-panel[nav-layout=horizontal][device-type=tablet][_ngcontent-%COMP%]   ul.menu-list[_ngcontent-%COMP%]    > li.menu-item[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n  list-style: none;\n  display: block;\n  position: relative;\n  float: left;\n}\n.app-left-panel[nav-layout=horizontal][device-type=desktop][_ngcontent-%COMP%]   ul.menu-list[_ngcontent-%COMP%]    > li.menu-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .app-left-panel[nav-layout=horizontal][device-type=tablet][_ngcontent-%COMP%]   ul.menu-list[_ngcontent-%COMP%]    > li.menu-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  text-decoration: none;\n  position: relative;\n  text-align: center;\n  padding: 0px 10px;\n  line-height: 40px;\n  cursor: pointer;\n}\n.app-left-panel[nav-layout=horizontal][device-type=desktop][_ngcontent-%COMP%]   ul.menu-list[_ngcontent-%COMP%]    > li.menu-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .app-mtext[_ngcontent-%COMP%], .app-left-panel[nav-layout=horizontal][device-type=tablet][_ngcontent-%COMP%]   ul.menu-list[_ngcontent-%COMP%]    > li.menu-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .app-mtext[_ngcontent-%COMP%] {\n  display: inline-block;\n  white-space: nowrap;\n  font-weight: 400;\n}\n.app-left-panel[nav-layout=horizontal][device-type=desktop][_ngcontent-%COMP%]   ul.menu-list[_ngcontent-%COMP%]    > li.menu-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .app-micon[_ngcontent-%COMP%], .app-left-panel[nav-layout=horizontal][device-type=tablet][_ngcontent-%COMP%]   ul.menu-list[_ngcontent-%COMP%]    > li.menu-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .app-micon[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  display: inline-block;\n  position: relative;\n  z-index: 1;\n}\n.app-left-panel[nav-layout=horizontal][device-type=desktop][_ngcontent-%COMP%]   ul.menu-list[_ngcontent-%COMP%]    > li.menu-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .app-micon[_ngcontent-%COMP%]   .medium-icon[_ngcontent-%COMP%], .app-left-panel[nav-layout=horizontal][device-type=tablet][_ngcontent-%COMP%]   ul.menu-list[_ngcontent-%COMP%]    > li.menu-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .app-micon[_ngcontent-%COMP%]   .medium-icon[_ngcontent-%COMP%] {\n  width: 19px;\n  height: 19px;\n}\n.app-left-panel[nav-layout=horizontal][device-type=desktop][_ngcontent-%COMP%]   ul.menu-list[_ngcontent-%COMP%]    > li.menu-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .app-badge[_ngcontent-%COMP%], .app-left-panel[nav-layout=horizontal][device-type=tablet][_ngcontent-%COMP%]   ul.menu-list[_ngcontent-%COMP%]    > li.menu-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .app-badge[_ngcontent-%COMP%] {\n  display: none;\n}\n.app-left-panel[nav-layout=horizontal][device-type=desktop][_ngcontent-%COMP%]   li.menu-item.hasMenu[_ngcontent-%COMP%], .app-left-panel[nav-layout=horizontal][device-type=tablet][_ngcontent-%COMP%]   li.menu-item.hasMenu[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: relative;\n}\n.app-left-panel[nav-layout=horizontal][device-type=desktop][_ngcontent-%COMP%]   li.menu-item.hasMenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .app-left-panel[nav-layout=horizontal][device-type=tablet][_ngcontent-%COMP%]   li.menu-item.hasMenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: none;\n  margin: 0px;\n  padding: 10px 0px 10px 0px;\n  min-width: 200px;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n}\n.app-left-panel[nav-layout=horizontal][device-type=desktop][_ngcontent-%COMP%]   li.menu-item.hasMenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .app-left-panel[nav-layout=horizontal][device-type=tablet][_ngcontent-%COMP%]   li.menu-item.hasMenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n  list-style: none;\n  display: block;\n}\n.app-left-panel[nav-layout=horizontal][device-type=desktop][_ngcontent-%COMP%]   li.menu-item.hasMenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .app-left-panel[nav-layout=horizontal][device-type=tablet][_ngcontent-%COMP%]   li.menu-item.hasMenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  border: 0px;\n  text-decoration: none;\n  padding: 4px 10px;\n  display: block;\n}\n.app-left-panel[nav-layout=horizontal][device-type=desktop][_ngcontent-%COMP%]   li.menu-item.hasMenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .app-micon[_ngcontent-%COMP%], .app-left-panel[nav-layout=horizontal][device-type=tablet][_ngcontent-%COMP%]   li.menu-item.hasMenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .app-micon[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding-right: 10px;\n  width: auto;\n  height: auto;\n}\n.app-left-panel[nav-layout=horizontal][device-type=desktop][_ngcontent-%COMP%]   li.menu-item.hasMenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .app-micon[_ngcontent-%COMP%]   .small-icon[_ngcontent-%COMP%], .app-left-panel[nav-layout=horizontal][device-type=tablet][_ngcontent-%COMP%]   li.menu-item.hasMenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .app-micon[_ngcontent-%COMP%]   .small-icon[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n}\n.app-left-panel[nav-layout=horizontal][device-type=desktop][_ngcontent-%COMP%]   li.menu-item.hasMenu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .app-mcaret[_ngcontent-%COMP%], .app-left-panel[nav-layout=horizontal][device-type=tablet][_ngcontent-%COMP%]   li.menu-item.hasMenu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .app-mcaret[_ngcontent-%COMP%] {\n  position: relative;\n}\n.app-left-panel[nav-layout=horizontal][device-type=desktop][_ngcontent-%COMP%]   li.menu-item.hasMenu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .app-mcaret[_ngcontent-%COMP%]   .mcaret-icon[_ngcontent-%COMP%], .app-left-panel[nav-layout=horizontal][device-type=tablet][_ngcontent-%COMP%]   li.menu-item.hasMenu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .app-mcaret[_ngcontent-%COMP%]   .mcaret-icon[_ngcontent-%COMP%] {\n  width: 19px;\n  height: 19px;\n}\n.app-left-panel[nav-layout=horizontal][device-type=desktop][_ngcontent-%COMP%]   li.menu-item.hasMenu.open[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .app-left-panel[nav-layout=horizontal][device-type=tablet][_ngcontent-%COMP%]   li.menu-item.hasMenu.open[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n}\n.app-left-panel[nav-layout=horizontal][device-type=desktop][_ngcontent-%COMP%]   .logo-area[_ngcontent-%COMP%], .app-left-panel[nav-layout=horizontal][device-type=tablet][_ngcontent-%COMP%]   .logo-area[_ngcontent-%COMP%] {\n  display: none;\n}\n.app-left-panel[nav-layout=horizontal][device-type=tablet][_ngcontent-%COMP%] {\n  height: 55px !important;\n}\n.app-left-panel[nav-layout=horizontal][device-type=tablet][_ngcontent-%COMP%]   ul.menu-list[_ngcontent-%COMP%]    > li.menu-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  line-height: initial;\n  padding-top: 7px;\n  padding-bottom: 7px;\n}\n.app-left-panel[nav-layout=horizontal][device-type=tablet][_ngcontent-%COMP%]   ul.menu-list[_ngcontent-%COMP%]    > li.menu-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .app-mtext[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  display: inline-block;\n  vertical-align: middle;\n}\n.app-left-panel[nav-layout=horizontal][device-type=tablet][_ngcontent-%COMP%]   ul.menu-list[_ngcontent-%COMP%]    > li.menu-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .app-micon[_ngcontent-%COMP%] {\n  display: block;\n}\n.app-left-panel[nav-layout=horizontal][device-type=desktop][_ngcontent-%COMP%]   ul.menu-list[_ngcontent-%COMP%]    > li.menu-item[_ngcontent-%COMP%]:nth-last-child(-n+5), .app-left-panel[nav-layout=horizontal][device-type=tablet][_ngcontent-%COMP%]   ul.menu-list[_ngcontent-%COMP%]    > li.menu-item[_ngcontent-%COMP%]:nth-last-child(-n+5) {\n  display: none;\n}\n.app-left-panel.hideNav[nav-layout=horizontal][device-type=phone][_ngcontent-%COMP%] {\n  margin-left: -230px;\n}\n.app-left-panel[nav-layout=horizontal][device-type=phone][_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  z-index: 1024;\n  font-size: 13px;\n  font-weight: 300;\n  overflow: hidden;\n  overflow-y: auto;\n  border-right-style: solid;\n  border-right-width: 1px;\n  display: block;\n  width: 230px;\n}\n.app-left-panel[nav-layout=horizontal][device-type=phone][_ngcontent-%COMP%]   .app-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  width: 100%;\n}\n.app-left-panel[nav-layout=horizontal][device-type=phone][_ngcontent-%COMP%]   ul.menu-list[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n  list-style: none;\n}\n.app-left-panel[nav-layout=horizontal][device-type=phone][_ngcontent-%COMP%]   ul.menu-list[_ngcontent-%COMP%]   .nav-label[_ngcontent-%COMP%] {\n  display: block;\n  padding: 10px 5px 0px;\n  font-size: 13px;\n  font-weight: 500;\n}\n.app-left-panel[nav-layout=horizontal][device-type=phone][_ngcontent-%COMP%]   ul.menu-list[_ngcontent-%COMP%]    > li.menu-item[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n  list-style: none;\n  display: block;\n  position: relative;\n}\n.app-left-panel[nav-layout=horizontal][device-type=phone][_ngcontent-%COMP%]   ul.menu-list[_ngcontent-%COMP%]    > li.menu-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  text-decoration: none;\n  position: relative;\n  text-align: left;\n  padding: 10px 15px;\n  cursor: pointer;\n}\n.app-left-panel[nav-layout=horizontal][device-type=phone][_ngcontent-%COMP%]   ul.menu-list[_ngcontent-%COMP%]    > li.menu-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .app-mtext[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: absolute;\n  top: 11px;\n  white-space: nowrap;\n  font-weight: 400;\n}\n.app-left-panel[nav-layout=horizontal][device-type=phone][_ngcontent-%COMP%]   ul.menu-list[_ngcontent-%COMP%]    > li.menu-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .app-micon[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  display: inline-block;\n  position: relative;\n  vertical-align: middle;\n  z-index: 1;\n}\n.app-left-panel[nav-layout=horizontal][device-type=phone][_ngcontent-%COMP%]   ul.menu-list[_ngcontent-%COMP%]    > li.menu-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .app-micon[_ngcontent-%COMP%]   .medium-icon[_ngcontent-%COMP%] {\n  width: 19px;\n  height: 19px;\n}\n.app-left-panel[nav-layout=horizontal][device-type=phone][_ngcontent-%COMP%]   ul.menu-list[_ngcontent-%COMP%]    > li.menu-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .app-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  display: inline-block;\n  padding: 5px 5px;\n  font-size: 75%;\n  font-weight: 600;\n  line-height: 1;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: 4px;\n  top: 12px;\n  -webkit-transition: opacity 0.2s linear;\n  transition: opacity 0.2s linear;\n}\n.app-left-panel[nav-layout=horizontal][device-type=phone][_ngcontent-%COMP%]   li.menu-item.hasMenu[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: relative;\n}\n.app-left-panel[nav-layout=horizontal][device-type=phone][_ngcontent-%COMP%]   li.menu-item.hasMenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: none;\n  margin: 0px;\n  padding: 10px 0px 10px 15px;\n}\n.app-left-panel[nav-layout=horizontal][device-type=phone][_ngcontent-%COMP%]   li.menu-item.hasMenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n  list-style: none;\n  display: block;\n}\n.app-left-panel[nav-layout=horizontal][device-type=phone][_ngcontent-%COMP%]   li.menu-item.hasMenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  border: 0px;\n  text-decoration: none;\n  padding: 2px 10px;\n  display: block;\n}\n.app-left-panel[nav-layout=horizontal][device-type=phone][_ngcontent-%COMP%]   li.menu-item.hasMenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .app-micon[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding-right: 10px;\n  width: auto;\n  height: auto;\n}\n.app-left-panel[nav-layout=horizontal][device-type=phone][_ngcontent-%COMP%]   li.menu-item.hasMenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .app-micon[_ngcontent-%COMP%]   .small-icon[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n}\n.app-left-panel[nav-layout=horizontal][device-type=phone][_ngcontent-%COMP%]   li.menu-item.hasMenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   .app-micon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  border-radius: 100%;\n}\n.app-left-panel[nav-layout=horizontal][device-type=phone][_ngcontent-%COMP%]   li.menu-item.hasMenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .app-micon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  border-radius: 100%;\n}\n.app-left-panel[nav-layout=horizontal][device-type=phone][_ngcontent-%COMP%]   li.menu-item.hasMenu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .app-mcaret[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 15px;\n  top: 10px;\n  transform: rotate(-90deg);\n  -webkit-transform: rotate(-90deg);\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.app-left-panel[nav-layout=horizontal][device-type=phone][_ngcontent-%COMP%]   li.menu-item.hasMenu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .app-mcaret[_ngcontent-%COMP%]   .mcaret-icon[_ngcontent-%COMP%] {\n  width: 21px;\n  height: 21px;\n}\n.app-left-panel[nav-layout=horizontal][device-type=phone][_ngcontent-%COMP%]   li.menu-item.hasMenu.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: block;\n}\n.app-left-panel[nav-layout=horizontal][device-type=phone][_ngcontent-%COMP%]   li.menu-item.hasMenu.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .app-mcaret[_ngcontent-%COMP%] {\n  transform: rotate(0deg);\n  -webkit-transform: rotate(0deg);\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.app-left-panel[nav-layout=horizontal][device-type=phone][_ngcontent-%COMP%]   li.menu-item.hasMenu.open[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: block;\n}\n.app-left-panel[nav-layout=horizontal][device-type=phone][_ngcontent-%COMP%]   li.menu-item.hasMenu.open[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .app-mcaret[_ngcontent-%COMP%] {\n  transform: rotate(0deg);\n  -webkit-transform: rotate(0deg);\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.app-left-panel[nav-layout=horizontal][device-type=phone][_ngcontent-%COMP%]   .logo-area[_ngcontent-%COMP%] {\n  content: \"\";\n  clear: both;\n  overflow: hidden;\n  padding: 5px 8px;\n}\n.app-left-panel[nav-layout=horizontal][device-type=phone][_ngcontent-%COMP%]   .logo-area[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  float: left;\n  border-radius: 2px;\n  font-size: 21px;\n  width: 35px;\n  height: 35px;\n  text-align: center;\n  margin-right: 5px;\n  padding-top: 2px;\n}\n.app-left-panel[nav-layout=horizontal][device-type=phone][_ngcontent-%COMP%]   .logo-area[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%] {\n  padding: 0px;\n  float: left;\n  line-height: 18px;\n}\n.app-left-panel[nav-layout=horizontal][device-type=phone][_ngcontent-%COMP%]   .logo-area[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 0px;\n  margin: 0px;\n  font-size: 17px;\n  font-weight: 600;\n}\n.app-left-panel[nav-layout=horizontal][device-type=phone][_ngcontent-%COMP%]   .logo-area[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%] {\n  padding: 0px;\n  margin: 0px;\n  font-size: 13px;\n  font-weight: 500;\n}\n.app-left-panel[_ngcontent-%COMP%] {\n  background: #2f4475;\n  border-right-color: #3f5485;\n}\n.app-left-panel[_ngcontent-%COMP%]   .logo-area[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  background: #0168fa;\n  color: #FFF;\n}\n.app-left-panel[_ngcontent-%COMP%]   .logo-area[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%] {\n  color: #0168fa;\n}\n.app-left-panel[_ngcontent-%COMP%]   .logo-area[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%] {\n  color: #b2c2e8;\n}\n.app-left-panel[_ngcontent-%COMP%]   ul.menu-list[_ngcontent-%COMP%]   .nav-label[_ngcontent-%COMP%] {\n  color: #babcc1;\n}\n.app-left-panel[_ngcontent-%COMP%]   ul.menu-list[_ngcontent-%COMP%]    > li.menu-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: #b2c2e8;\n}\n.app-left-panel[_ngcontent-%COMP%]   ul.menu-list[_ngcontent-%COMP%]    > li.menu-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  background: #3b4f7d;\n  color: #FFF;\n}\n.app-left-panel[_ngcontent-%COMP%]   ul.menu-list[_ngcontent-%COMP%]    > li.menu-item.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  background: #3f5485;\n  color: #FFF;\n}\n.app-left-panel[_ngcontent-%COMP%]   li.menu-item.hasMenu.open[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  background: #3f5485;\n}\n.app-left-panel[_ngcontent-%COMP%]   li.menu-item.hasMenu.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  background: #3f5485;\n  color: #FFF;\n}\n.app-left-panel[_ngcontent-%COMP%]   li.menu-item.hasMenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  background: #2f4475;\n}\n.app-left-panel[_ngcontent-%COMP%]   li.menu-item.hasMenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #b2c2e8;\n}\n.app-left-panel[_ngcontent-%COMP%]   li.menu-item.hasMenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #FFF;\n}\n.app-left-panel[_ngcontent-%COMP%]   li.menu-item.hasMenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   .small-icon[_ngcontent-%COMP%] {\n  fill: #FFF;\n  stroke: #FFF;\n}\n.app-left-panel[_ngcontent-%COMP%]   li.menu-item.hasMenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #FFF;\n}\n.app-left-panel[_ngcontent-%COMP%]   li.menu-item.hasMenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .small-icon[_ngcontent-%COMP%] {\n  fill: #FFF;\n  stroke: #FFF;\n}\n.app-left-panel[nav-layout=horizontal][_ngcontent-%COMP%]   li.menu-item.hasMenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  background: #3f5485;\n}\n.app-left-panel[nav-layout=horizontal][device-type=phone][_ngcontent-%COMP%] {\n  border-right-color: #3f5485;\n}\n.app-left-panel[nav-layout=horizontal][device-type=phone][_ngcontent-%COMP%]   li.menu-item.hasMenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  background: #2f4475;\n}\n.app-left-panel[color-theme=light][_ngcontent-%COMP%] {\n  background: #fff;\n  border-right-color: #dcdcdc;\n}\n.app-left-panel[color-theme=light][_ngcontent-%COMP%]   .logo-area[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  background: #0168fa;\n  color: #FFF;\n}\n.app-left-panel[color-theme=light][_ngcontent-%COMP%]   .logo-area[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%] {\n  color: #0168fa;\n}\n.app-left-panel[color-theme=light][_ngcontent-%COMP%]   .logo-area[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%] {\n  color: #333;\n}\n.app-left-panel[color-theme=light][_ngcontent-%COMP%]   ul.menu-list[_ngcontent-%COMP%]   .nav-label[_ngcontent-%COMP%] {\n  color: #9e9e9e;\n}\n.app-left-panel[color-theme=light][_ngcontent-%COMP%]   ul.menu-list[_ngcontent-%COMP%]    > li.menu-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: #333;\n}\n.app-left-panel[color-theme=light][_ngcontent-%COMP%]   ul.menu-list[_ngcontent-%COMP%]    > li.menu-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  background: #eaebf3;\n  color: #0168fa;\n}\n.app-left-panel[color-theme=light][_ngcontent-%COMP%]   ul.menu-list[_ngcontent-%COMP%]    > li.menu-item.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  background: #eaebf3;\n  color: #0168fa;\n}\n.app-left-panel[color-theme=light][_ngcontent-%COMP%]   li.menu-item.hasMenu.open[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  background: #eaebf3;\n}\n.app-left-panel[color-theme=light][_ngcontent-%COMP%]   li.menu-item.hasMenu.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  background: #eaebf3;\n  color: #0168fa;\n}\n.app-left-panel[color-theme=light][_ngcontent-%COMP%]   li.menu-item.hasMenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  background: rgba(234, 235, 243, 0.6);\n}\n.app-left-panel[color-theme=light][_ngcontent-%COMP%]   li.menu-item.hasMenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #333;\n}\n.app-left-panel[color-theme=light][_ngcontent-%COMP%]   li.menu-item.hasMenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #0168fa;\n}\n.app-left-panel[color-theme=light][_ngcontent-%COMP%]   li.menu-item.hasMenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   .small-icon[_ngcontent-%COMP%] {\n  fill: #0168fa;\n  stroke: #0168fa;\n}\n.app-left-panel[color-theme=light][_ngcontent-%COMP%]   li.menu-item.hasMenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #0168fa;\n}\n.app-left-panel[color-theme=light][_ngcontent-%COMP%]   li.menu-item.hasMenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .small-icon[_ngcontent-%COMP%] {\n  fill: #0168fa;\n  stroke: #0168fa;\n}\n.app-left-panel[nav-layout=horizontal][color-theme=light][_ngcontent-%COMP%]   li.menu-item.hasMenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  background: #fff;\n}\n.app-left-panel[nav-layout=horizontal][device-type=phone][color-theme=light][_ngcontent-%COMP%] {\n  border-right-color: #dcdcdc;\n}\n.app-left-panel[nav-layout=horizontal][device-type=phone][color-theme=light][_ngcontent-%COMP%]   li.menu-item.hasMenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  background: rgba(234, 235, 243, 0.6);\n}\n.app-left-panel[color-theme=dark][_ngcontent-%COMP%] {\n  background: #2a3444;\n  border-right-color: #4f5969;\n}\n.app-left-panel[color-theme=dark][_ngcontent-%COMP%]   .logo-area[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  background: #0168fa;\n  color: #FFF;\n}\n.app-left-panel[color-theme=dark][_ngcontent-%COMP%]   .logo-area[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%] {\n  color: #0168fa;\n}\n.app-left-panel[color-theme=dark][_ngcontent-%COMP%]   .logo-area[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%] {\n  color: #8699ad;\n}\n.app-left-panel[color-theme=dark][_ngcontent-%COMP%]   ul.menu-list[_ngcontent-%COMP%]   .nav-label[_ngcontent-%COMP%] {\n  color: #9e9e9e;\n}\n.app-left-panel[color-theme=dark][_ngcontent-%COMP%]   ul.menu-list[_ngcontent-%COMP%]    > li.menu-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: #8699ad;\n}\n.app-left-panel[color-theme=dark][_ngcontent-%COMP%]   ul.menu-list[_ngcontent-%COMP%]    > li.menu-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  background: rgba(64, 76, 95, 0.8);\n  color: #FFF;\n}\n.app-left-panel[color-theme=dark][_ngcontent-%COMP%]   ul.menu-list[_ngcontent-%COMP%]    > li.menu-item.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  background: rgba(64, 76, 95, 0.8);\n  color: #FFF;\n}\n.app-left-panel[color-theme=dark][_ngcontent-%COMP%]   li.menu-item.hasMenu.open[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  background: rgba(64, 76, 95, 0.8);\n}\n.app-left-panel[color-theme=dark][_ngcontent-%COMP%]   li.menu-item.hasMenu.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  background: rgba(64, 76, 95, 0.8);\n  color: #FFF;\n}\n.app-left-panel[color-theme=dark][_ngcontent-%COMP%]   li.menu-item.hasMenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  background: rgba(64, 76, 95, 0.5);\n}\n.app-left-panel[color-theme=dark][_ngcontent-%COMP%]   li.menu-item.hasMenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #8699ad;\n}\n.app-left-panel[color-theme=dark][_ngcontent-%COMP%]   li.menu-item.hasMenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #FFF;\n}\n.app-left-panel[color-theme=dark][_ngcontent-%COMP%]   li.menu-item.hasMenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   .small-icon[_ngcontent-%COMP%] {\n  fill: #FFF;\n  stroke: #FFF;\n}\n.app-left-panel[color-theme=dark][_ngcontent-%COMP%]   li.menu-item.hasMenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #FFF;\n}\n.app-left-panel[color-theme=dark][_ngcontent-%COMP%]   li.menu-item.hasMenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .small-icon[_ngcontent-%COMP%] {\n  fill: #FFF;\n  stroke: #FFF;\n}\n.app-left-panel[nav-layout=horizontal][color-theme=dark][_ngcontent-%COMP%]   li.menu-item.hasMenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  background: #2a3444;\n}\n.app-left-panel[nav-layout=horizontal][device-type=phone][color-theme=dark][_ngcontent-%COMP%] {\n  border-right-color: #4f5969;\n}\n.app-left-panel[nav-layout=horizontal][device-type=phone][color-theme=dark][_ngcontent-%COMP%]   li.menu-item.hasMenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  background: rgba(64, 76, 95, 0.5);\n}\nperfect-scrollbar[_ngcontent-%COMP%] {\n  overflow: auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29tbW9uLWNvbXBvbmVudHMvbGVmdC1hc2lkZWJhci9GOlxcbmV3dHJhZGVyXFx0cmFkZXI0LTUvc3JjXFxhcHBcXHBhZ2VzXFxjb21tb24tY29tcG9uZW50c1xcbGVmdC1hc2lkZWJhclxcbGVmdC1hc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvY29tbW9uLWNvbXBvbmVudHMvbGVmdC1hc2lkZWJhci9sZWZ0LWFzaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ0FKO0FEQ0k7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NSO0FEQ0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQ1I7QURDSTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7QUNDUjtBRENJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FDQ1I7QURDSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNDUjtBRENJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0NSO0FEQVE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FDRVo7QURBUTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBQ0VaO0FERFk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0doQjtBREFRO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSx1Q0FBQTtFQUdBLCtCQUFBO0FDRVo7QURDSTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQ0NSO0FEQVE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0FDRVo7QUREWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDR2hCO0FERmdCO0VBQ0ksV0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDSXBCO0FERm9CO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNJeEI7QURId0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0s1QjtBREFvQjtFQUNJLG1CQUFBO0FDRXhCO0FER2dCO0VBQ0ksbUJBQUE7QUNEcEI7QURNSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUNKUjtBREtRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNIWjtBRE9RO0VBQ0ksY0FBQTtBQ0xaO0FET1E7RUFDSSx3QkFBQTtFQUNBLGdDQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQkFBQTtBQ0xaO0FEU1E7RUFDSSxjQUFBO0FDUFo7QURTUTtFQUNJLHdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw0QkFBQTtFQUNBLG9CQUFBO0FDUFo7QURVSTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ1JSO0FEU1E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNQWjtBRFNRO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ1BaO0FEUVk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ05oQjtBRFFZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNOaEI7QURjQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0FDWEo7QURjQTtFQUNJLDBCQUFBO0VBQ0EsZ0JBQUE7QUNYSjtBRGNBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0FDWEo7QURnQkE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUNiSjtBRGNJO0VBQ0ksa0JBQUE7QUNaUjtBRGlCQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ2RKO0FEZUk7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDYlI7QURlSTtFQUNJLGFBQUE7QUNiUjtBRGVJO0VBQ0ksVUFBQTtFQUNBLGFBQUE7QUNiUjtBRGVJO0VBQ0ksYUFBQTtBQ2JSO0FEZUk7RUFDSSxhQUFBO0FDYlI7QURlSTtFQUNJLGFBQUE7QUNiUjtBRGVJO0VBQ0ksYUFBQTtBQ2JSO0FEZUk7RUFDSSxhQUFBO0FDYlI7QURnQlE7RUFDSSxhQUFBO0FDZFo7QURtQkE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNoQko7QURpQkk7RUFDSSxjQUFBO0FDZlI7QURpQkk7RUFDSSxVQUFBO0VBQ0EscUJBQUE7QUNmUjtBRGlCSTtFQUNJLHFCQUFBO0FDZlI7QURpQkk7RUFDSSxxQkFBQTtBQ2ZSO0FEaUJJO0VBQ0ksY0FBQTtBQ2ZSO0FEaUJJO0VBQ0ksY0FBQTtBQ2ZSO0FEaUJJO0VBQ0ksa0JBQUE7QUNmUjtBRGtCUTtFQUNJLHFCQUFBO0FDaEJaO0FEc0JBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUNuQko7QURzQkE7O0VBRUksa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ25CSjtBRG9CSTs7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDakJSO0FEbUJJOztFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNoQlI7QURpQlE7O0VBQ0ksYUFBQTtBQ2RaO0FEaUJJOztFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDZFI7QURnQkk7O0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ2JSO0FEY1E7O0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDWFo7QURhUTs7RUFDSSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDVlo7QURXWTs7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ1JoQjtBRFdROztFQUNJLGFBQUE7QUNSWjtBRFdJOztFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQ1JSO0FEU1E7O0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkNBQUE7QUNOWjtBRE9ZOztFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDSmhCO0FES2dCOztFQUNJLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0ZwQjtBREdvQjs7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0F4QjtBREN3Qjs7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0U1QjtBREtJOztFQUNJLGtCQUFBO0FDRlI7QURHUTs7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0FaO0FESVE7O0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FDRFo7QURJSTs7RUFDSSxhQUFBO0FDRFI7QURLQTtFQUNJLHVCQUFBO0FDRko7QURHSTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0RSO0FERVE7RUFDSSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUNBWjtBREVRO0VBQ0ksY0FBQTtBQ0FaO0FET0k7O0VBQ0ksYUFBQTtBQ0hSO0FET0E7RUFDSSxtQkFBQTtBQ0pKO0FET0E7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDSko7QURLSTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNIUjtBREtJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0hSO0FES0k7RUFDSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNIUjtBREtJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0hSO0FES0k7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0hSO0FESVE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNGWjtBRElRO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0FDRlo7QURHWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDRGhCO0FESVE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLHVDQUFBO0VBR0EsK0JBQUE7QUNGWjtBREtJO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FDSFI7QURJUTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7QUNGWjtBREdZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNEaEI7QURFZ0I7RUFDSSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNBcEI7QURDb0I7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0N4QjtBREF3QjtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDRTVCO0FER29CO0VBQ0ksbUJBQUE7QUNEeEI7QURNZ0I7RUFDSSxtQkFBQTtBQ0pwQjtBRFNJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUNBQUE7RUFDQSw0QkFBQTtFQUNBLG9CQUFBO0FDUFI7QURRUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDTlo7QURVUTtFQUNJLGNBQUE7QUNSWjtBRFVRO0VBQ0ksdUJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0Esb0JBQUE7QUNSWjtBRFlRO0VBQ0ksY0FBQTtBQ1ZaO0FEWVE7RUFDSSx1QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQkFBQTtBQ1ZaO0FEYUk7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNYUjtBRFlRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDVlo7QURZUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNWWjtBRFdZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNUaEI7QURXWTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDVGhCO0FEZ0JBO0VBQ0ksbUJBQUE7RUFDQSwyQkFBQTtBQ2JKO0FEZVE7RUFDSSxtQkFBQTtFQUNBLFdBQUE7QUNiWjtBRGVRO0VBQ0ksY0FBQTtBQ2JaO0FEY1k7RUFDSSxjQUFBO0FDWmhCO0FEZ0JJO0VBQ0ksY0FBQTtBQ2RSO0FEZ0JJO0VBQ0ksY0FBQTtBQ2RSO0FEZVE7RUFDSSxtQkFBQTtFQUNBLFdBQUE7QUNiWjtBRGdCSTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtBQ2RSO0FEZ0JJO0VBQ0ksbUJBQUE7QUNkUjtBRGdCSTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtBQ2RSO0FEaUJRO0VBQ0ksbUJBQUE7QUNmWjtBRGlCZ0I7RUFDSSxjQUFBO0FDZnBCO0FEZ0JvQjtFQUNJLFdBQUE7QUNkeEI7QURld0I7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBQ2I1QjtBRGtCWTtFQUNJLFdBQUE7QUNoQmhCO0FEaUJnQjtFQUNJLFVBQUE7RUFDQSxZQUFBO0FDZnBCO0FEd0JRO0VBQ0ksbUJBQUE7QUNyQlo7QUQwQkE7RUFDSSwyQkFBQTtBQ3ZCSjtBRHlCUTtFQUNJLG1CQUFBO0FDdkJaO0FEOEJJO0VBQ0ksZ0JBQUE7RUFDQSwyQkFBQTtBQzNCUjtBRDZCWTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtBQzNCaEI7QUQ2Qlk7RUFDSSxjQUFBO0FDM0JoQjtBRDRCZ0I7RUFDSSxXQUFBO0FDMUJwQjtBRDhCUTtFQUNJLGNBQUE7QUM1Qlo7QUQ4QlE7RUFDSSxXQUFBO0FDNUJaO0FENkJZO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0FDM0JoQjtBRDhCUTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBQzVCWjtBRDhCUTtFQUNJLG1CQUFBO0FDNUJaO0FEOEJRO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0FDNUJaO0FEK0JZO0VBQ0ksb0NBQUE7QUM3QmhCO0FEK0JvQjtFQUNJLFdBQUE7QUM3QnhCO0FEOEJ3QjtFQUNJLGNBQUE7QUM1QjVCO0FENkI0QjtFQUNJLGFBQUE7RUFDQSxlQUFBO0FDM0JoQztBRGdDZ0I7RUFDSSxjQUFBO0FDOUJwQjtBRCtCb0I7RUFDSSxhQUFBO0VBQ0EsZUFBQTtBQzdCeEI7QURxQ1k7RUFDSSxnQkFBQTtBQ2xDaEI7QURzQ0k7RUFDSSwyQkFBQTtBQ25DUjtBRHFDWTtFQUNJLG9DQUFBO0FDbkNoQjtBRHJDSTtFQUNJLG1CQUFBO0VBQ0EsMkJBQUE7QUN3Q1I7QUR0Q1k7RUFDSSxtQkFBQTtFQUNBLFdBQUE7QUN3Q2hCO0FEdENZO0VBQ0ksY0FBQTtBQ3dDaEI7QUR2Q2dCO0VBQ0ksY0FBQTtBQ3lDcEI7QURyQ1E7RUFDSSxjQUFBO0FDdUNaO0FEckNRO0VBQ0ksY0FBQTtBQ3VDWjtBRHRDWTtFQUNJLGlDQUFBO0VBQ0EsV0FBQTtBQ3dDaEI7QURyQ1E7RUFDSSxpQ0FBQTtFQUNBLFdBQUE7QUN1Q1o7QURyQ1E7RUFDSSxpQ0FBQTtBQ3VDWjtBRHJDUTtFQUNJLGlDQUFBO0VBQ0EsV0FBQTtBQ3VDWjtBRHBDWTtFQUNJLGlDQUFBO0FDc0NoQjtBRHBDb0I7RUFDSSxjQUFBO0FDc0N4QjtBRHJDd0I7RUFDSSxXQUFBO0FDdUM1QjtBRHRDNEI7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBQ3dDaEM7QURuQ2dCO0VBQ0ksV0FBQTtBQ3FDcEI7QURwQ29CO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUNzQ3hCO0FEOUJZO0VBQ0ksbUJBQUE7QUNpQ2hCO0FEN0JJO0VBQ0ksMkJBQUE7QUNnQ1I7QUQ5Qlk7RUFDSSxpQ0FBQTtBQ2dDaEI7QUQxQkE7RUFDSSx5QkFBQTtBQzZCSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbW1vbi1jb21wb25lbnRzL2xlZnQtYXNpZGViYXIvbGVmdC1hc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3RoZW1lJztcclxuLmFwcC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9XCJ2ZXJ0aWNhbFwiXSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgei1pbmRleDogMTAyNDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1yaWdodC13aWR0aDogMXB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAuYXBwLXdyYXBwZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICB9XHJcbiAgICB1bC5tZW51LWxpc3Qge1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgfVxyXG4gICAgdWwubWVudS1saXN0IC5uYXYtbGFiZWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAxNXB4IDVweDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGNvbG9yOiAjMDA3YmZmICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICB1bC5tZW51LWxpc3QgLm5hdi1sYWJlOmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxyXG4gICAgfVxyXG4gICAgdWwubWVudS1saXN0PmxpLm1lbnUtaXRlbSB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gICAgdWwubWVudS1saXN0PmxpLm1lbnUtaXRlbT5hIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAuYXBwLW10ZXh0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMTFweDtcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFwcC1taWNvbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgIC5tZWRpdW0taWNvbiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTlweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTlweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYXBwLWJhZGdlIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogMTBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggNXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDc1JTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgICAgIHRvcDogMTJweDtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgbGluZWFyO1xyXG4gICAgICAgICAgICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBsaW5lYXI7XHJcbiAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBsaW5lYXI7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBsaW5lYXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGkubWVudS1pdGVtLmhhc01lbnUge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdWwge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAwcHggMTBweCAwcHg7XHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDRweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgLmFwcC1taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNtYWxsLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAuYXBwLW1pY29uIGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsaS5hY3RpdmUgYSB7XHJcbiAgICAgICAgICAgICAgICAuYXBwLW1pY29uIGkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsaS5tZW51LWl0ZW0uaGFzTWVudSBhIC5hcHAtbWNhcmV0IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgIC5tY2FyZXQtaWNvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxOXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE5cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGkubWVudS1pdGVtLmhhc01lbnUuYWN0aXZlIHtcclxuICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhIC5hcHAtbWNhcmV0IHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGkubWVudS1pdGVtLmhhc01lbnUub3BlbiB7XHJcbiAgICAgICAgdWwge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICAgICAgYSAuYXBwLW1jYXJldCB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5sb2dvLWFyZWEge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBwYWRkaW5nOiA1cHggOHB4O1xyXG4gICAgICAgIC5sb2dvIHtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMXB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMnB4XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sb2dvLXRleHQge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNtYWxsIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgIC8vIGNvbG9yOiAjMjEyNTI5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyMjIyMjIyMjIyMjIyMjIyMjIyMjIyBMYXlvdXQgU3R5bGUgQWNjb3JkaW5nIENvbGxhcHNlZCBIZWFkZXIgU3RhcnQgSGVyZSMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbi5hcHAtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PVwidmVydGljYWxcIl1bY29sbGFwc2VkLWhlYWRlcj1cInRydWVcIl0ge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG5cclxuLmFwcC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9XCJ2ZXJ0aWNhbFwiXVtjb2xsYXBzZWQtaGVhZGVyPVwiZmFsc2VcIl0ge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjBweCk7XHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG59XHJcblxyXG4uYXBwLWxlZnQtcGFuZWxbbmF2LWxheW91dD1cInZlcnRpY2FsXCJdW2RldmljZS10eXBlPVwicGhvbmVcIl1bY29sbGFwc2VkLWhlYWRlcj1cImZhbHNlXCJdIHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCk7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuXHJcbi8vIyMjIyMjIyMjIyMjIyMjIyMjIyMjIExheW91dCBTdHlsZSBBY2NvcmRpbmcgQ29sbGFwc2VkIEhlYWRlciBDbG9zZSBIZXJlICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbi8vICMjIyMjIyMjIyMjIyMjIyMjIyMjIEV4cGVuZGVkIEFzaWRlYmFyIE5hdmlnYXRpb24gU2VjdGlvbiAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG4uYXBwLWxlZnQtcGFuZWxbbmF2LWxheW91dD1cInZlcnRpY2FsXCJdW25hdmJhci10eXBlPVwiZXhwYW5kZWRcIl0ge1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIHdpZHRoOiAyMzBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIGxpLm1lbnUtaXRlbS5oYXNNZW51IHVsIGxpIGEge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjZweDtcclxuICAgIH1cclxufVxyXG5cclxuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMgY29sbGFwc2VkIEFzaWRlYmFyIE5hdmlnYXRpb24gU2VjdGlvbiAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG4uYXBwLWxlZnQtcGFuZWxbbmF2LWxheW91dD1cInZlcnRpY2FsXCJdW25hdmJhci10eXBlPVwiY29sbGFwc2VkXCJdIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgei1pbmRleDogOTk5OTk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAuYXBwLXdyYXBwZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIHVsLm1lbnUtbGlzdCAubmF2LWxhYmVsIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgdWwubWVudS1saXN0PmxpLm1lbnUtaXRlbT5hIC5hcHAtbXRleHQge1xyXG4gICAgICAgIGxlZnQ6IDU1cHg7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIHVsLm1lbnUtbGlzdD5saS5tZW51LWl0ZW0+YSAuYXBwLWJhZGdlIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgdWwubWVudS1saXN0PmxpLm1lbnUtaXRlbT5hIC5hcHAtYmFkZ2Uge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICB1bC5tZW51LWxpc3Q+bGkubWVudS1pdGVtPmEgLmFwcC1tY2FyZXQge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICB1bC5tZW51LWxpc3Q+bGkubWVudS1pdGVtLmhhc01lbnUub3BlbiB1bCB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIHVsLm1lbnUtbGlzdD5saS5tZW51LWl0ZW0uaGFzTWVudS5hY3RpdmUgdWwge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAubG9nby1hcmVhIHtcclxuICAgICAgICAubG9nby10ZXh0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hcHAtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PVwidmVydGljYWxcIl1bbmF2YmFyLXR5cGU9XCJjb2xsYXBzZWRcIl06aG92ZXIge1xyXG4gICAgd2lkdGg6IDIzMHB4O1xyXG4gICAgei1pbmRleDogOTk5OTk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB1bC5tZW51LWxpc3QgLm5hdi1sYWJlbCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICB1bC5tZW51LWxpc3Q+bGkubWVudS1pdGVtPmEgLmFwcC1tdGV4dCB7XHJcbiAgICAgICAgbGVmdDogYXV0bztcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbiAgICB1bC5tZW51LWxpc3Q+bGkubWVudS1pdGVtPmEgLmFwcC1iYWRnZSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG4gICAgdWwubWVudS1saXN0PmxpLm1lbnUtaXRlbT5hIC5hcHAtbWNhcmV0IHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbiAgICB1bC5tZW51LWxpc3Q+bGkubWVudS1pdGVtLmhhc01lbnUub3BlbiB1bCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICB1bC5tZW51LWxpc3Q+bGkubWVudS1pdGVtLmhhc01lbnUuYWN0aXZlIHVsIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIGxpLm1lbnUtaXRlbS5oYXNNZW51IHVsIGxpIGEge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjZweDtcclxuICAgIH1cclxuICAgIC5sb2dvLWFyZWEge1xyXG4gICAgICAgIC5sb2dvLXRleHQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyBvZmZjYW52YXMgQXNpZGViYXIgTmF2aWdhdGlvbiBTZWN0aW9uICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbi5hcHAtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PVwidmVydGljYWxcIl1bbmF2YmFyLXR5cGU9XCJvZmZjYW52YXNcIl0ge1xyXG4gICAgd2lkdGg6IDIzMHB4O1xyXG4gICAgbGVmdDogLTIzMHB4O1xyXG59XHJcblxyXG4uYXBwLWxlZnQtcGFuZWxbbmF2LWxheW91dD1cImhvcml6b250YWxcIl1bZGV2aWNlLXR5cGU9XCJkZXNrdG9wXCJdLFxyXG4uYXBwLWxlZnQtcGFuZWxbbmF2LWxheW91dD1cImhvcml6b250YWxcIl1bZGV2aWNlLXR5cGU9XCJ0YWJsZXRcIl0ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB6LWluZGV4OiAxMDI0O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgLmFwcC13cmFwcGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICB1bC5tZW51LWxpc3Qge1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIC5uYXYtbGFiZWwge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHVsLm1lbnUtbGlzdD5saS5tZW51LWl0ZW0ge1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgIH1cclxuICAgIHVsLm1lbnUtbGlzdD5saS5tZW51LWl0ZW0+YSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAuYXBwLW10ZXh0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYXBwLW1pY29uIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAubWVkaXVtLWljb24ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE5cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE5cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmFwcC1iYWRnZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGkubWVudS1pdGVtLmhhc01lbnUge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdWwge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAwcHggMTBweCAwcHg7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNHB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgLmFwcC1taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNtYWxsLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsaS5tZW51LWl0ZW0uaGFzTWVudSBhIC5hcHAtbWNhcmV0IHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgLm1jYXJldC1pY29uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDE5cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTlweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsaS5tZW51LWl0ZW0uaGFzTWVudS5vcGVuIHtcclxuICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmxvZ28tYXJlYSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuLmFwcC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9XCJob3Jpem9udGFsXCJdW2RldmljZS10eXBlPVwidGFibGV0XCJdIHtcclxuICAgIGhlaWdodDogNTVweCAhaW1wb3J0YW50O1xyXG4gICAgdWwubWVudS1saXN0PmxpLm1lbnUtaXRlbT5hIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IGluaXRpYWw7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDdweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogN3B4O1xyXG4gICAgICAgIC5hcHAtbXRleHQge1xyXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hcHAtbWljb24ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hcHAtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PVwiaG9yaXpvbnRhbFwiXVtkZXZpY2UtdHlwZT1cImRlc2t0b3BcIl0sXHJcbi5hcHAtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PVwiaG9yaXpvbnRhbFwiXVtkZXZpY2UtdHlwZT1cInRhYmxldFwiXSB7XHJcbiAgICB1bC5tZW51LWxpc3Q+bGkubWVudS1pdGVtOm50aC1sYXN0LWNoaWxkKC1uKzUpIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYXBwLWxlZnQtcGFuZWwuaGlkZU5hdltuYXYtbGF5b3V0PVwiaG9yaXpvbnRhbFwiXVtkZXZpY2UtdHlwZT1cInBob25lXCJdIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMjMwcHg7XHJcbn1cclxuXHJcbi5hcHAtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PVwiaG9yaXpvbnRhbFwiXVtkZXZpY2UtdHlwZT1cInBob25lXCJdIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICB6LWluZGV4OiAxMDI0O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1yaWdodC13aWR0aDogMXB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMjMwcHg7XHJcbiAgICAuYXBwLXdyYXBwZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIHVsLm1lbnUtbGlzdCB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICB9XHJcbiAgICB1bC5tZW51LWxpc3QgLm5hdi1sYWJlbCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCA1cHggMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gICAgdWwubWVudS1saXN0PmxpLm1lbnUtaXRlbSB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gICAgdWwubWVudS1saXN0PmxpLm1lbnUtaXRlbT5hIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgLmFwcC1tdGV4dCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDExcHg7XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hcHAtbWljb24ge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAubWVkaXVtLWljb24ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE5cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE5cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmFwcC1iYWRnZSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDVweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA3NSU7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICB0b3A6IDEycHg7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGxpbmVhcjtcclxuICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgbGluZWFyO1xyXG4gICAgICAgICAgICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgbGluZWFyO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgbGluZWFyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxpLm1lbnUtaXRlbS5oYXNNZW51IHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHVsIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMHB4IDEwcHggMTVweDtcclxuICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMnB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgLmFwcC1taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNtYWxsLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAuYXBwLW1pY29uIGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsaS5hY3RpdmUgYSB7XHJcbiAgICAgICAgICAgICAgICAuYXBwLW1pY29uIGkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsaS5tZW51LWl0ZW0uaGFzTWVudSBhIC5hcHAtbWNhcmV0IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgLm1jYXJldC1pY29uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDIxcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjFweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsaS5tZW51LWl0ZW0uaGFzTWVudS5hY3RpdmUge1xyXG4gICAgICAgIHVsIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGEgLmFwcC1tY2FyZXQge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGkubWVudS1pdGVtLmhhc01lbnUub3BlbiB7XHJcbiAgICAgICAgdWwge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICAgICAgYSAuYXBwLW1jYXJldCB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubG9nby1hcmVhIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIGNsZWFyOiBib3RoO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDhweDtcclxuICAgICAgICAubG9nbyB7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAgICAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDJweFxyXG4gICAgICAgIH1cclxuICAgICAgICAubG9nby10ZXh0IHtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zbWFsbCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyBEZWZhdWx0IHRoZW1lICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG4uYXBwLWxlZnQtcGFuZWwge1xyXG4gICAgYmFja2dyb3VuZDogIzJmNDQ3NTtcclxuICAgIGJvcmRlci1yaWdodC1jb2xvcjogIzNmNTQ4NTtcclxuICAgIC5sb2dvLWFyZWEge1xyXG4gICAgICAgIC5sb2dvIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzAxNjhmYTtcclxuICAgICAgICAgICAgY29sb3I6ICNGRkY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sb2dvLXRleHQge1xyXG4gICAgICAgICAgICBjb2xvcjogIzAxNjhmYTtcclxuICAgICAgICAgICAgLnNtYWxsIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjYjJjMmU4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdWwubWVudS1saXN0IC5uYXYtbGFiZWwge1xyXG4gICAgICAgIGNvbG9yOiAjYmFiY2MxO1xyXG4gICAgfVxyXG4gICAgdWwubWVudS1saXN0PmxpLm1lbnUtaXRlbT5hIHtcclxuICAgICAgICBjb2xvcjogI2IyYzJlODtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzNiNGY3ZDtcclxuICAgICAgICAgICAgY29sb3I6ICNGRkY7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdWwubWVudS1saXN0PmxpLm1lbnUtaXRlbS5hY3RpdmU+YSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzNmNTQ4NTtcclxuICAgICAgICBjb2xvcjogI0ZGRjtcclxuICAgIH1cclxuICAgIGxpLm1lbnUtaXRlbS5oYXNNZW51Lm9wZW4+YSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzNmNTQ4NTtcclxuICAgIH1cclxuICAgIGxpLm1lbnUtaXRlbS5oYXNNZW51LmFjdGl2ZT5hIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjM2Y1NDg1O1xyXG4gICAgICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgfVxyXG4gICAgbGkubWVudS1pdGVtLmhhc01lbnUge1xyXG4gICAgICAgIHVsIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzJmNDQ3NTtcclxuICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNiMmMyZTg7XHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc21hbGwtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiAjRkZGO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiAjRkZGO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxpLmFjdGl2ZSBhIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgICAgICAgICAgICAgLnNtYWxsLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6ICNGRkY7XHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiAjRkZGO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uYXBwLWxlZnQtcGFuZWxbbmF2LWxheW91dD1cImhvcml6b250YWxcIl0ge1xyXG4gICAgbGkubWVudS1pdGVtLmhhc01lbnUge1xyXG4gICAgICAgIHVsIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzNmNTQ4NTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hcHAtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PVwiaG9yaXpvbnRhbFwiXVtkZXZpY2UtdHlwZT1cInBob25lXCJdIHtcclxuICAgIGJvcmRlci1yaWdodC1jb2xvcjogIzNmNTQ4NTtcclxuICAgIGxpLm1lbnUtaXRlbS5oYXNNZW51IHtcclxuICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyZjQ0NzU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AZWFjaCAkdGhlbWUsXHJcbiRtYXAgaW4gJGFzaWRlYmFyVGhlbWUge1xyXG4gICAgLmFwcC1sZWZ0LXBhbmVsW2NvbG9yLXRoZW1lPSN7JHRoZW1lfV0ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IG1hcC1nZXQoJG1hcCwgYmFja2dyb3VuZENvbG9yKTtcclxuICAgICAgICBib3JkZXItcmlnaHQtY29sb3I6IG1hcC1nZXQoJG1hcCwgYm9yZGVyQ29sb3IpO1xyXG4gICAgICAgIC5sb2dvLWFyZWEge1xyXG4gICAgICAgICAgICAubG9nbyB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRtYXAsIGxvZ29CZ0NvbG9yKTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBtYXAtZ2V0KCRtYXAsIGxvZ29Db2xvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxvZ28tdGV4dCB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogbWFwLWdldCgkbWFwLCBsb2dvQmdDb2xvcik7XHJcbiAgICAgICAgICAgICAgICAuc21hbGwge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBtYXAtZ2V0KCRtYXAsIHRleHRDb2xvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdWwubWVudS1saXN0IC5uYXYtbGFiZWwge1xyXG4gICAgICAgICAgICBjb2xvcjogbWFwLWdldCgkbWFwLCBkaXNhYmxlQ29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB1bC5tZW51LWxpc3Q+bGkubWVudS1pdGVtPmEge1xyXG4gICAgICAgICAgICBjb2xvcjogbWFwLWdldCgkbWFwLCB0ZXh0Q29sb3IpO1xyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG1hcC1nZXQoJG1hcCwgaG92ZXJCYWNrZ3JvdW5kQ29sb3IpO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IG1hcC1nZXQoJG1hcCwgaG92ZXJDb2xvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdWwubWVudS1saXN0PmxpLm1lbnUtaXRlbS5hY3RpdmU+YSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG1hcC1nZXQoJG1hcCwgaG92ZXJCYWNrZ3JvdW5kQ29sb3IpO1xyXG4gICAgICAgICAgICBjb2xvcjogbWFwLWdldCgkbWFwLCBhY3RpdmVJdGVtQ29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsaS5tZW51LWl0ZW0uaGFzTWVudS5vcGVuPmEge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRtYXAsIGhvdmVyQmFja2dyb3VuZENvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGkubWVudS1pdGVtLmhhc01lbnUuYWN0aXZlPmEge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRtYXAsIGhvdmVyQmFja2dyb3VuZENvbG9yKTtcclxuICAgICAgICAgICAgY29sb3I6IG1hcC1nZXQoJG1hcCwgYWN0aXZlSXRlbUNvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGkubWVudS1pdGVtLmhhc01lbnUge1xyXG4gICAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRtYXAsIGRyb3Bkb3duQmFja2dyb3VuZENvbG9yKTtcclxuICAgICAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IG1hcC1nZXQoJG1hcCwgdGV4dENvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogbWFwLWdldCgkbWFwLCBob3ZlckNvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zbWFsbC1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiBtYXAtZ2V0KCRtYXAsIGhvdmVyQ29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZTogbWFwLWdldCgkbWFwLCBob3ZlckNvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxpLmFjdGl2ZSBhIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogbWFwLWdldCgkbWFwLCBob3ZlckNvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICAuc21hbGwtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IG1hcC1nZXQoJG1hcCwgaG92ZXJDb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZTogbWFwLWdldCgkbWFwLCBob3ZlckNvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYXBwLWxlZnQtcGFuZWxbbmF2LWxheW91dD1cImhvcml6b250YWxcIl1bY29sb3ItdGhlbWU9I3skdGhlbWV9XSB7XHJcbiAgICAgICAgbGkubWVudS1pdGVtLmhhc01lbnUge1xyXG4gICAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRtYXAsIGJhY2tncm91bmRDb2xvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYXBwLWxlZnQtcGFuZWxbbmF2LWxheW91dD1cImhvcml6b250YWxcIl1bZGV2aWNlLXR5cGU9XCJwaG9uZVwiXVtjb2xvci10aGVtZT0jeyR0aGVtZX1dIHtcclxuICAgICAgICBib3JkZXItcmlnaHQtY29sb3I6IG1hcC1nZXQoJG1hcCwgYm9yZGVyQ29sb3IpO1xyXG4gICAgICAgIGxpLm1lbnUtaXRlbS5oYXNNZW51IHtcclxuICAgICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbWFwLWdldCgkbWFwLCBkcm9wZG93bkJhY2tncm91bmRDb2xvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbnBlcmZlY3Qtc2Nyb2xsYmFyIHtcclxuICAgIG92ZXJmbG93OiBhdXRvIWltcG9ydGFudDtcclxufSIsIi5hcHAtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PXZlcnRpY2FsXSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHotaW5kZXg6IDEwMjQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAxcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmFwcC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9dmVydGljYWxdIC5hcHAtd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuLmFwcC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9dmVydGljYWxdIHVsLm1lbnUtbGlzdCB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4uYXBwLWxlZnQtcGFuZWxbbmF2LWxheW91dD12ZXJ0aWNhbF0gdWwubWVudS1saXN0IC5uYXYtbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogNXB4IDE1cHggNXB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjMDA3YmZmICFpbXBvcnRhbnQ7XG59XG4uYXBwLWxlZnQtcGFuZWxbbmF2LWxheW91dD12ZXJ0aWNhbF0gdWwubWVudS1saXN0IC5uYXYtbGFiZTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5hcHAtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PXZlcnRpY2FsXSB1bC5tZW51LWxpc3QgPiBsaS5tZW51LWl0ZW0ge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmFwcC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9dmVydGljYWxdIHVsLm1lbnUtbGlzdCA+IGxpLm1lbnUtaXRlbSA+IGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxM3B4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYXBwLWxlZnQtcGFuZWxbbmF2LWxheW91dD12ZXJ0aWNhbF0gdWwubWVudS1saXN0ID4gbGkubWVudS1pdGVtID4gYSAuYXBwLW10ZXh0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTFweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5hcHAtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PXZlcnRpY2FsXSB1bC5tZW51LWxpc3QgPiBsaS5tZW51LWl0ZW0gPiBhIC5hcHAtbWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB6LWluZGV4OiAxO1xufVxuLmFwcC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9dmVydGljYWxdIHVsLm1lbnUtbGlzdCA+IGxpLm1lbnUtaXRlbSA+IGEgLmFwcC1taWNvbiAubWVkaXVtLWljb24ge1xuICB3aWR0aDogMTlweDtcbiAgaGVpZ2h0OiAxOXB4O1xufVxuLmFwcC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9dmVydGljYWxdIHVsLm1lbnUtbGlzdCA+IGxpLm1lbnUtaXRlbSA+IGEgLmFwcC1iYWRnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogNXB4IDVweDtcbiAgZm9udC1zaXplOiA3NSU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB0b3A6IDEycHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGxpbmVhcjtcbiAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgbGluZWFyO1xuICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgbGluZWFyO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgbGluZWFyO1xufVxuLmFwcC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9dmVydGljYWxdIGxpLm1lbnUtaXRlbS5oYXNNZW51IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYXBwLWxlZnQtcGFuZWxbbmF2LWxheW91dD12ZXJ0aWNhbF0gbGkubWVudS1pdGVtLmhhc01lbnUgdWwge1xuICBkaXNwbGF5OiBub25lO1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMTBweCAwcHggMTBweCAwcHg7XG59XG4uYXBwLWxlZnQtcGFuZWxbbmF2LWxheW91dD12ZXJ0aWNhbF0gbGkubWVudS1pdGVtLmhhc01lbnUgdWwgbGkge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5hcHAtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PXZlcnRpY2FsXSBsaS5tZW51LWl0ZW0uaGFzTWVudSB1bCBsaSBhIHtcbiAgYm9yZGVyOiAwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcGFkZGluZzogNHB4IDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmFwcC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9dmVydGljYWxdIGxpLm1lbnUtaXRlbS5oYXNNZW51IHVsIGxpIGEgLmFwcC1taWNvbiB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbn1cbi5hcHAtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PXZlcnRpY2FsXSBsaS5tZW51LWl0ZW0uaGFzTWVudSB1bCBsaSBhIC5hcHAtbWljb24gLnNtYWxsLWljb24ge1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xufVxuLmFwcC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9dmVydGljYWxdIGxpLm1lbnUtaXRlbS5oYXNNZW51IHVsIGxpIGE6aG92ZXIgLmFwcC1taWNvbiBpIHtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn1cbi5hcHAtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PXZlcnRpY2FsXSBsaS5tZW51LWl0ZW0uaGFzTWVudSB1bCBsaS5hY3RpdmUgYSAuYXBwLW1pY29uIGkge1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xufVxuLmFwcC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9dmVydGljYWxdIGxpLm1lbnUtaXRlbS5oYXNNZW51IGEgLmFwcC1tY2FyZXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNXB4O1xuICB0b3A6IDEwcHg7XG59XG4uYXBwLWxlZnQtcGFuZWxbbmF2LWxheW91dD12ZXJ0aWNhbF0gbGkubWVudS1pdGVtLmhhc01lbnUgYSAuYXBwLW1jYXJldCAubWNhcmV0LWljb24ge1xuICB3aWR0aDogMTlweDtcbiAgaGVpZ2h0OiAxOXB4O1xufVxuLmFwcC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9dmVydGljYWxdIGxpLm1lbnUtaXRlbS5oYXNNZW51LmFjdGl2ZSB1bCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmFwcC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9dmVydGljYWxdIGxpLm1lbnUtaXRlbS5oYXNNZW51LmFjdGl2ZSBhIC5hcHAtbWNhcmV0IHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG4uYXBwLWxlZnQtcGFuZWxbbmF2LWxheW91dD12ZXJ0aWNhbF0gbGkubWVudS1pdGVtLmhhc01lbnUub3BlbiB1bCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmFwcC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9dmVydGljYWxdIGxpLm1lbnUtaXRlbS5oYXNNZW51Lm9wZW4gYSAuYXBwLW1jYXJldCB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuLmFwcC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9dmVydGljYWxdIC5sb2dvLWFyZWEge1xuICBjb250ZW50OiBcIlwiO1xuICBjbGVhcjogYm90aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogNXB4IDhweDtcbn1cbi5hcHAtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PXZlcnRpY2FsXSAubG9nby1hcmVhIC5sb2dvIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgZm9udC1zaXplOiAyMXB4O1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBwYWRkaW5nLXRvcDogMnB4O1xufVxuLmFwcC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9dmVydGljYWxdIC5sb2dvLWFyZWEgLmxvZ28tdGV4dCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuLmFwcC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9dmVydGljYWxdIC5sb2dvLWFyZWEgLmxvZ28tdGV4dCBwIHtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmFwcC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9dmVydGljYWxdIC5sb2dvLWFyZWEgLmxvZ28tdGV4dCAuc21hbGwge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5hcHAtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PXZlcnRpY2FsXVtjb2xsYXBzZWQtaGVhZGVyPXRydWVdIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG4uYXBwLWxlZnQtcGFuZWxbbmF2LWxheW91dD12ZXJ0aWNhbF1bY29sbGFwc2VkLWhlYWRlcj1mYWxzZV0ge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2MHB4KTtcbiAgbWFyZ2luLXRvcDogNjBweDtcbn1cblxuLmFwcC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9dmVydGljYWxdW2RldmljZS10eXBlPXBob25lXVtjb2xsYXBzZWQtaGVhZGVyPWZhbHNlXSB7XG4gIGhlaWdodDogY2FsYygxMDB2aCk7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxuLmFwcC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9dmVydGljYWxdW25hdmJhci10eXBlPWV4cGFuZGVkXSB7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgd2lkdGg6IDIzMHB4O1xuICBsZWZ0OiAwcHg7XG59XG4uYXBwLWxlZnQtcGFuZWxbbmF2LWxheW91dD12ZXJ0aWNhbF1bbmF2YmFyLXR5cGU9ZXhwYW5kZWRdIGxpLm1lbnUtaXRlbS5oYXNNZW51IHVsIGxpIGEge1xuICBwYWRkaW5nLWxlZnQ6IDI2cHg7XG59XG5cbi5hcHAtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PXZlcnRpY2FsXVtuYXZiYXItdHlwZT1jb2xsYXBzZWRdIHtcbiAgd2lkdGg6IDUwcHg7XG4gIHotaW5kZXg6IDk5OTk5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYXBwLWxlZnQtcGFuZWxbbmF2LWxheW91dD12ZXJ0aWNhbF1bbmF2YmFyLXR5cGU9Y29sbGFwc2VkXSAuYXBwLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cbi5hcHAtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PXZlcnRpY2FsXVtuYXZiYXItdHlwZT1jb2xsYXBzZWRdIHVsLm1lbnUtbGlzdCAubmF2LWxhYmVsIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5hcHAtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PXZlcnRpY2FsXVtuYXZiYXItdHlwZT1jb2xsYXBzZWRdIHVsLm1lbnUtbGlzdCA+IGxpLm1lbnUtaXRlbSA+IGEgLmFwcC1tdGV4dCB7XG4gIGxlZnQ6IDU1cHg7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uYXBwLWxlZnQtcGFuZWxbbmF2LWxheW91dD12ZXJ0aWNhbF1bbmF2YmFyLXR5cGU9Y29sbGFwc2VkXSB1bC5tZW51LWxpc3QgPiBsaS5tZW51LWl0ZW0gPiBhIC5hcHAtYmFkZ2Uge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmFwcC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9dmVydGljYWxdW25hdmJhci10eXBlPWNvbGxhcHNlZF0gdWwubWVudS1saXN0ID4gbGkubWVudS1pdGVtID4gYSAuYXBwLWJhZGdlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5hcHAtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PXZlcnRpY2FsXVtuYXZiYXItdHlwZT1jb2xsYXBzZWRdIHVsLm1lbnUtbGlzdCA+IGxpLm1lbnUtaXRlbSA+IGEgLmFwcC1tY2FyZXQge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmFwcC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9dmVydGljYWxdW25hdmJhci10eXBlPWNvbGxhcHNlZF0gdWwubWVudS1saXN0ID4gbGkubWVudS1pdGVtLmhhc01lbnUub3BlbiB1bCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uYXBwLWxlZnQtcGFuZWxbbmF2LWxheW91dD12ZXJ0aWNhbF1bbmF2YmFyLXR5cGU9Y29sbGFwc2VkXSB1bC5tZW51LWxpc3QgPiBsaS5tZW51LWl0ZW0uaGFzTWVudS5hY3RpdmUgdWwge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmFwcC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9dmVydGljYWxdW25hdmJhci10eXBlPWNvbGxhcHNlZF0gLmxvZ28tYXJlYSAubG9nby10ZXh0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmFwcC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9dmVydGljYWxdW25hdmJhci10eXBlPWNvbGxhcHNlZF06aG92ZXIge1xuICB3aWR0aDogMjMwcHg7XG4gIHotaW5kZXg6IDk5OTk5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYXBwLWxlZnQtcGFuZWxbbmF2LWxheW91dD12ZXJ0aWNhbF1bbmF2YmFyLXR5cGU9Y29sbGFwc2VkXTpob3ZlciB1bC5tZW51LWxpc3QgLm5hdi1sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmFwcC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9dmVydGljYWxdW25hdmJhci10eXBlPWNvbGxhcHNlZF06aG92ZXIgdWwubWVudS1saXN0ID4gbGkubWVudS1pdGVtID4gYSAuYXBwLW10ZXh0IHtcbiAgbGVmdDogYXV0bztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmFwcC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9dmVydGljYWxdW25hdmJhci10eXBlPWNvbGxhcHNlZF06aG92ZXIgdWwubWVudS1saXN0ID4gbGkubWVudS1pdGVtID4gYSAuYXBwLWJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmFwcC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9dmVydGljYWxdW25hdmJhci10eXBlPWNvbGxhcHNlZF06aG92ZXIgdWwubWVudS1saXN0ID4gbGkubWVudS1pdGVtID4gYSAuYXBwLW1jYXJldCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5hcHAtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PXZlcnRpY2FsXVtuYXZiYXItdHlwZT1jb2xsYXBzZWRdOmhvdmVyIHVsLm1lbnUtbGlzdCA+IGxpLm1lbnUtaXRlbS5oYXNNZW51Lm9wZW4gdWwge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5hcHAtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PXZlcnRpY2FsXVtuYXZiYXItdHlwZT1jb2xsYXBzZWRdOmhvdmVyIHVsLm1lbnUtbGlzdCA+IGxpLm1lbnUtaXRlbS5oYXNNZW51LmFjdGl2ZSB1bCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmFwcC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9dmVydGljYWxdW25hdmJhci10eXBlPWNvbGxhcHNlZF06aG92ZXIgbGkubWVudS1pdGVtLmhhc01lbnUgdWwgbGkgYSB7XG4gIHBhZGRpbmctbGVmdDogMjZweDtcbn1cbi5hcHAtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PXZlcnRpY2FsXVtuYXZiYXItdHlwZT1jb2xsYXBzZWRdOmhvdmVyIC5sb2dvLWFyZWEgLmxvZ28tdGV4dCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmFwcC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9dmVydGljYWxdW25hdmJhci10eXBlPW9mZmNhbnZhc10ge1xuICB3aWR0aDogMjMwcHg7XG4gIGxlZnQ6IC0yMzBweDtcbn1cblxuLmFwcC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9aG9yaXpvbnRhbF1bZGV2aWNlLXR5cGU9ZGVza3RvcF0sXG4uYXBwLWxlZnQtcGFuZWxbbmF2LWxheW91dD1ob3Jpem9udGFsXVtkZXZpY2UtdHlwZT10YWJsZXRdIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbiAgei1pbmRleDogMTAyNDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xufVxuLmFwcC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9aG9yaXpvbnRhbF1bZGV2aWNlLXR5cGU9ZGVza3RvcF0gLmFwcC13cmFwcGVyLFxuLmFwcC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9aG9yaXpvbnRhbF1bZGV2aWNlLXR5cGU9dGFibGV0XSAuYXBwLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cbi5hcHAtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PWhvcml6b250YWxdW2RldmljZS10eXBlPWRlc2t0b3BdIHVsLm1lbnUtbGlzdCxcbi5hcHAtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PWhvcml6b250YWxdW2RldmljZS10eXBlPXRhYmxldF0gdWwubWVudS1saXN0IHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5hcHAtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PWhvcml6b250YWxdW2RldmljZS10eXBlPWRlc2t0b3BdIHVsLm1lbnUtbGlzdCAubmF2LWxhYmVsLFxuLmFwcC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9aG9yaXpvbnRhbF1bZGV2aWNlLXR5cGU9dGFibGV0XSB1bC5tZW51LWxpc3QgLm5hdi1sYWJlbCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uYXBwLWxlZnQtcGFuZWxbbmF2LWxheW91dD1ob3Jpem9udGFsXVtkZXZpY2UtdHlwZT1kZXNrdG9wXSB1bC5tZW51LWxpc3QgPiBsaS5tZW51LWl0ZW0sXG4uYXBwLWxlZnQtcGFuZWxbbmF2LWxheW91dD1ob3Jpem9udGFsXVtkZXZpY2UtdHlwZT10YWJsZXRdIHVsLm1lbnUtbGlzdCA+IGxpLm1lbnUtaXRlbSB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLmFwcC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9aG9yaXpvbnRhbF1bZGV2aWNlLXR5cGU9ZGVza3RvcF0gdWwubWVudS1saXN0ID4gbGkubWVudS1pdGVtID4gYSxcbi5hcHAtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PWhvcml6b250YWxdW2RldmljZS10eXBlPXRhYmxldF0gdWwubWVudS1saXN0ID4gbGkubWVudS1pdGVtID4gYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmFwcC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9aG9yaXpvbnRhbF1bZGV2aWNlLXR5cGU9ZGVza3RvcF0gdWwubWVudS1saXN0ID4gbGkubWVudS1pdGVtID4gYSAuYXBwLW10ZXh0LFxuLmFwcC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9aG9yaXpvbnRhbF1bZGV2aWNlLXR5cGU9dGFibGV0XSB1bC5tZW51LWxpc3QgPiBsaS5tZW51LWl0ZW0gPiBhIC5hcHAtbXRleHQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4uYXBwLWxlZnQtcGFuZWxbbmF2LWxheW91dD1ob3Jpem9udGFsXVtkZXZpY2UtdHlwZT1kZXNrdG9wXSB1bC5tZW51LWxpc3QgPiBsaS5tZW51LWl0ZW0gPiBhIC5hcHAtbWljb24sXG4uYXBwLWxlZnQtcGFuZWxbbmF2LWxheW91dD1ob3Jpem9udGFsXVtkZXZpY2UtdHlwZT10YWJsZXRdIHVsLm1lbnUtbGlzdCA+IGxpLm1lbnUtaXRlbSA+IGEgLmFwcC1taWNvbiB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cbi5hcHAtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PWhvcml6b250YWxdW2RldmljZS10eXBlPWRlc2t0b3BdIHVsLm1lbnUtbGlzdCA+IGxpLm1lbnUtaXRlbSA+IGEgLmFwcC1taWNvbiAubWVkaXVtLWljb24sXG4uYXBwLWxlZnQtcGFuZWxbbmF2LWxheW91dD1ob3Jpem9udGFsXVtkZXZpY2UtdHlwZT10YWJsZXRdIHVsLm1lbnUtbGlzdCA+IGxpLm1lbnUtaXRlbSA+IGEgLmFwcC1taWNvbiAubWVkaXVtLWljb24ge1xuICB3aWR0aDogMTlweDtcbiAgaGVpZ2h0OiAxOXB4O1xufVxuLmFwcC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9aG9yaXpvbnRhbF1bZGV2aWNlLXR5cGU9ZGVza3RvcF0gdWwubWVudS1saXN0ID4gbGkubWVudS1pdGVtID4gYSAuYXBwLWJhZGdlLFxuLmFwcC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9aG9yaXpvbnRhbF1bZGV2aWNlLXR5cGU9dGFibGV0XSB1bC5tZW51LWxpc3QgPiBsaS5tZW51LWl0ZW0gPiBhIC5hcHAtYmFkZ2Uge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmFwcC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9aG9yaXpvbnRhbF1bZGV2aWNlLXR5cGU9ZGVza3RvcF0gbGkubWVudS1pdGVtLmhhc01lbnUsXG4uYXBwLWxlZnQtcGFuZWxbbmF2LWxheW91dD1ob3Jpem9udGFsXVtkZXZpY2UtdHlwZT10YWJsZXRdIGxpLm1lbnUtaXRlbS5oYXNNZW51IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYXBwLWxlZnQtcGFuZWxbbmF2LWxheW91dD1ob3Jpem9udGFsXVtkZXZpY2UtdHlwZT1kZXNrdG9wXSBsaS5tZW51LWl0ZW0uaGFzTWVudSB1bCxcbi5hcHAtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PWhvcml6b250YWxdW2RldmljZS10eXBlPXRhYmxldF0gbGkubWVudS1pdGVtLmhhc01lbnUgdWwge1xuICBkaXNwbGF5OiBub25lO1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMTBweCAwcHggMTBweCAwcHg7XG4gIG1pbi13aWR0aDogMjAwcHg7XG4gIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjE1KTtcbn1cbi5hcHAtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PWhvcml6b250YWxdW2RldmljZS10eXBlPWRlc2t0b3BdIGxpLm1lbnUtaXRlbS5oYXNNZW51IHVsIGxpLFxuLmFwcC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9aG9yaXpvbnRhbF1bZGV2aWNlLXR5cGU9dGFibGV0XSBsaS5tZW51LWl0ZW0uaGFzTWVudSB1bCBsaSB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmFwcC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9aG9yaXpvbnRhbF1bZGV2aWNlLXR5cGU9ZGVza3RvcF0gbGkubWVudS1pdGVtLmhhc01lbnUgdWwgbGkgYSxcbi5hcHAtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PWhvcml6b250YWxdW2RldmljZS10eXBlPXRhYmxldF0gbGkubWVudS1pdGVtLmhhc01lbnUgdWwgbGkgYSB7XG4gIGJvcmRlcjogMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBhZGRpbmc6IDRweCAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5hcHAtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PWhvcml6b250YWxdW2RldmljZS10eXBlPWRlc2t0b3BdIGxpLm1lbnUtaXRlbS5oYXNNZW51IHVsIGxpIGEgLmFwcC1taWNvbixcbi5hcHAtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PWhvcml6b250YWxdW2RldmljZS10eXBlPXRhYmxldF0gbGkubWVudS1pdGVtLmhhc01lbnUgdWwgbGkgYSAuYXBwLW1pY29uIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLmFwcC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9aG9yaXpvbnRhbF1bZGV2aWNlLXR5cGU9ZGVza3RvcF0gbGkubWVudS1pdGVtLmhhc01lbnUgdWwgbGkgYSAuYXBwLW1pY29uIC5zbWFsbC1pY29uLFxuLmFwcC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9aG9yaXpvbnRhbF1bZGV2aWNlLXR5cGU9dGFibGV0XSBsaS5tZW51LWl0ZW0uaGFzTWVudSB1bCBsaSBhIC5hcHAtbWljb24gLnNtYWxsLWljb24ge1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xufVxuLmFwcC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9aG9yaXpvbnRhbF1bZGV2aWNlLXR5cGU9ZGVza3RvcF0gbGkubWVudS1pdGVtLmhhc01lbnUgYSAuYXBwLW1jYXJldCxcbi5hcHAtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PWhvcml6b250YWxdW2RldmljZS10eXBlPXRhYmxldF0gbGkubWVudS1pdGVtLmhhc01lbnUgYSAuYXBwLW1jYXJldCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5hcHAtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PWhvcml6b250YWxdW2RldmljZS10eXBlPWRlc2t0b3BdIGxpLm1lbnUtaXRlbS5oYXNNZW51IGEgLmFwcC1tY2FyZXQgLm1jYXJldC1pY29uLFxuLmFwcC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9aG9yaXpvbnRhbF1bZGV2aWNlLXR5cGU9dGFibGV0XSBsaS5tZW51LWl0ZW0uaGFzTWVudSBhIC5hcHAtbWNhcmV0IC5tY2FyZXQtaWNvbiB7XG4gIHdpZHRoOiAxOXB4O1xuICBoZWlnaHQ6IDE5cHg7XG59XG4uYXBwLWxlZnQtcGFuZWxbbmF2LWxheW91dD1ob3Jpem9udGFsXVtkZXZpY2UtdHlwZT1kZXNrdG9wXSBsaS5tZW51LWl0ZW0uaGFzTWVudS5vcGVuIHVsLFxuLmFwcC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9aG9yaXpvbnRhbF1bZGV2aWNlLXR5cGU9dGFibGV0XSBsaS5tZW51LWl0ZW0uaGFzTWVudS5vcGVuIHVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5hcHAtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PWhvcml6b250YWxdW2RldmljZS10eXBlPWRlc2t0b3BdIC5sb2dvLWFyZWEsXG4uYXBwLWxlZnQtcGFuZWxbbmF2LWxheW91dD1ob3Jpem9udGFsXVtkZXZpY2UtdHlwZT10YWJsZXRdIC5sb2dvLWFyZWEge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uYXBwLWxlZnQtcGFuZWxbbmF2LWxheW91dD1ob3Jpem9udGFsXVtkZXZpY2UtdHlwZT10YWJsZXRdIHtcbiAgaGVpZ2h0OiA1NXB4ICFpbXBvcnRhbnQ7XG59XG4uYXBwLWxlZnQtcGFuZWxbbmF2LWxheW91dD1ob3Jpem9udGFsXVtkZXZpY2UtdHlwZT10YWJsZXRdIHVsLm1lbnUtbGlzdCA+IGxpLm1lbnUtaXRlbSA+IGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogaW5pdGlhbDtcbiAgcGFkZGluZy10b3A6IDdweDtcbiAgcGFkZGluZy1ib3R0b206IDdweDtcbn1cbi5hcHAtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PWhvcml6b250YWxdW2RldmljZS10eXBlPXRhYmxldF0gdWwubWVudS1saXN0ID4gbGkubWVudS1pdGVtID4gYSAuYXBwLW10ZXh0IHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmFwcC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9aG9yaXpvbnRhbF1bZGV2aWNlLXR5cGU9dGFibGV0XSB1bC5tZW51LWxpc3QgPiBsaS5tZW51LWl0ZW0gPiBhIC5hcHAtbWljb24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmFwcC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9aG9yaXpvbnRhbF1bZGV2aWNlLXR5cGU9ZGVza3RvcF0gdWwubWVudS1saXN0ID4gbGkubWVudS1pdGVtOm50aC1sYXN0LWNoaWxkKC1uKzUpLFxuLmFwcC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9aG9yaXpvbnRhbF1bZGV2aWNlLXR5cGU9dGFibGV0XSB1bC5tZW51LWxpc3QgPiBsaS5tZW51LWl0ZW06bnRoLWxhc3QtY2hpbGQoLW4rNSkge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uYXBwLWxlZnQtcGFuZWwuaGlkZU5hdltuYXYtbGF5b3V0PWhvcml6b250YWxdW2RldmljZS10eXBlPXBob25lXSB7XG4gIG1hcmdpbi1sZWZ0OiAtMjMwcHg7XG59XG5cbi5hcHAtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PWhvcml6b250YWxdW2RldmljZS10eXBlPXBob25lXSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHotaW5kZXg6IDEwMjQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAxcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMjMwcHg7XG59XG4uYXBwLWxlZnQtcGFuZWxbbmF2LWxheW91dD1ob3Jpem9udGFsXVtkZXZpY2UtdHlwZT1waG9uZV0gLmFwcC13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG4uYXBwLWxlZnQtcGFuZWxbbmF2LWxheW91dD1ob3Jpem9udGFsXVtkZXZpY2UtdHlwZT1waG9uZV0gdWwubWVudS1saXN0IHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5hcHAtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PWhvcml6b250YWxdW2RldmljZS10eXBlPXBob25lXSB1bC5tZW51LWxpc3QgLm5hdi1sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxMHB4IDVweCAwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5hcHAtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PWhvcml6b250YWxdW2RldmljZS10eXBlPXBob25lXSB1bC5tZW51LWxpc3QgPiBsaS5tZW51LWl0ZW0ge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmFwcC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9aG9yaXpvbnRhbF1bZGV2aWNlLXR5cGU9cGhvbmVdIHVsLm1lbnUtbGlzdCA+IGxpLm1lbnUtaXRlbSA+IGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxM3B4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYXBwLWxlZnQtcGFuZWxbbmF2LWxheW91dD1ob3Jpem9udGFsXVtkZXZpY2UtdHlwZT1waG9uZV0gdWwubWVudS1saXN0ID4gbGkubWVudS1pdGVtID4gYSAuYXBwLW10ZXh0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTFweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5hcHAtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PWhvcml6b250YWxdW2RldmljZS10eXBlPXBob25lXSB1bC5tZW51LWxpc3QgPiBsaS5tZW51LWl0ZW0gPiBhIC5hcHAtbWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB6LWluZGV4OiAxO1xufVxuLmFwcC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9aG9yaXpvbnRhbF1bZGV2aWNlLXR5cGU9cGhvbmVdIHVsLm1lbnUtbGlzdCA+IGxpLm1lbnUtaXRlbSA+IGEgLmFwcC1taWNvbiAubWVkaXVtLWljb24ge1xuICB3aWR0aDogMTlweDtcbiAgaGVpZ2h0OiAxOXB4O1xufVxuLmFwcC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9aG9yaXpvbnRhbF1bZGV2aWNlLXR5cGU9cGhvbmVdIHVsLm1lbnUtbGlzdCA+IGxpLm1lbnUtaXRlbSA+IGEgLmFwcC1iYWRnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogNXB4IDVweDtcbiAgZm9udC1zaXplOiA3NSU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0b3A6IDEycHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGxpbmVhcjtcbiAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgbGluZWFyO1xuICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgbGluZWFyO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgbGluZWFyO1xufVxuLmFwcC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9aG9yaXpvbnRhbF1bZGV2aWNlLXR5cGU9cGhvbmVdIGxpLm1lbnUtaXRlbS5oYXNNZW51IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYXBwLWxlZnQtcGFuZWxbbmF2LWxheW91dD1ob3Jpem9udGFsXVtkZXZpY2UtdHlwZT1waG9uZV0gbGkubWVudS1pdGVtLmhhc01lbnUgdWwge1xuICBkaXNwbGF5OiBub25lO1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMTBweCAwcHggMTBweCAxNXB4O1xufVxuLmFwcC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9aG9yaXpvbnRhbF1bZGV2aWNlLXR5cGU9cGhvbmVdIGxpLm1lbnUtaXRlbS5oYXNNZW51IHVsIGxpIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uYXBwLWxlZnQtcGFuZWxbbmF2LWxheW91dD1ob3Jpem9udGFsXVtkZXZpY2UtdHlwZT1waG9uZV0gbGkubWVudS1pdGVtLmhhc01lbnUgdWwgbGkgYSB7XG4gIGJvcmRlcjogMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBhZGRpbmc6IDJweCAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5hcHAtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PWhvcml6b250YWxdW2RldmljZS10eXBlPXBob25lXSBsaS5tZW51LWl0ZW0uaGFzTWVudSB1bCBsaSBhIC5hcHAtbWljb24ge1xuICBmb250LXNpemU6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG59XG4uYXBwLWxlZnQtcGFuZWxbbmF2LWxheW91dD1ob3Jpem9udGFsXVtkZXZpY2UtdHlwZT1waG9uZV0gbGkubWVudS1pdGVtLmhhc01lbnUgdWwgbGkgYSAuYXBwLW1pY29uIC5zbWFsbC1pY29uIHtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbn1cbi5hcHAtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PWhvcml6b250YWxdW2RldmljZS10eXBlPXBob25lXSBsaS5tZW51LWl0ZW0uaGFzTWVudSB1bCBsaSBhOmhvdmVyIC5hcHAtbWljb24gaSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG4uYXBwLWxlZnQtcGFuZWxbbmF2LWxheW91dD1ob3Jpem9udGFsXVtkZXZpY2UtdHlwZT1waG9uZV0gbGkubWVudS1pdGVtLmhhc01lbnUgdWwgbGkuYWN0aXZlIGEgLmFwcC1taWNvbiBpIHtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn1cbi5hcHAtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PWhvcml6b250YWxdW2RldmljZS10eXBlPXBob25lXSBsaS5tZW51LWl0ZW0uaGFzTWVudSBhIC5hcHAtbWNhcmV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTVweDtcbiAgdG9wOiAxMHB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuLmFwcC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9aG9yaXpvbnRhbF1bZGV2aWNlLXR5cGU9cGhvbmVdIGxpLm1lbnUtaXRlbS5oYXNNZW51IGEgLmFwcC1tY2FyZXQgLm1jYXJldC1pY29uIHtcbiAgd2lkdGg6IDIxcHg7XG4gIGhlaWdodDogMjFweDtcbn1cbi5hcHAtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PWhvcml6b250YWxdW2RldmljZS10eXBlPXBob25lXSBsaS5tZW51LWl0ZW0uaGFzTWVudS5hY3RpdmUgdWwge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5hcHAtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PWhvcml6b250YWxdW2RldmljZS10eXBlPXBob25lXSBsaS5tZW51LWl0ZW0uaGFzTWVudS5hY3RpdmUgYSAuYXBwLW1jYXJldCB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cbi5hcHAtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PWhvcml6b250YWxdW2RldmljZS10eXBlPXBob25lXSBsaS5tZW51LWl0ZW0uaGFzTWVudS5vcGVuIHVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uYXBwLWxlZnQtcGFuZWxbbmF2LWxheW91dD1ob3Jpem9udGFsXVtkZXZpY2UtdHlwZT1waG9uZV0gbGkubWVudS1pdGVtLmhhc01lbnUub3BlbiBhIC5hcHAtbWNhcmV0IHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuLmFwcC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9aG9yaXpvbnRhbF1bZGV2aWNlLXR5cGU9cGhvbmVdIC5sb2dvLWFyZWEge1xuICBjb250ZW50OiBcIlwiO1xuICBjbGVhcjogYm90aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogNXB4IDhweDtcbn1cbi5hcHAtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PWhvcml6b250YWxdW2RldmljZS10eXBlPXBob25lXSAubG9nby1hcmVhIC5sb2dvIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgZm9udC1zaXplOiAyMXB4O1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBwYWRkaW5nLXRvcDogMnB4O1xufVxuLmFwcC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9aG9yaXpvbnRhbF1bZGV2aWNlLXR5cGU9cGhvbmVdIC5sb2dvLWFyZWEgLmxvZ28tdGV4dCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuLmFwcC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9aG9yaXpvbnRhbF1bZGV2aWNlLXR5cGU9cGhvbmVdIC5sb2dvLWFyZWEgLmxvZ28tdGV4dCBwIHtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmFwcC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9aG9yaXpvbnRhbF1bZGV2aWNlLXR5cGU9cGhvbmVdIC5sb2dvLWFyZWEgLmxvZ28tdGV4dCAuc21hbGwge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5hcHAtbGVmdC1wYW5lbCB7XG4gIGJhY2tncm91bmQ6ICMyZjQ0NzU7XG4gIGJvcmRlci1yaWdodC1jb2xvcjogIzNmNTQ4NTtcbn1cbi5hcHAtbGVmdC1wYW5lbCAubG9nby1hcmVhIC5sb2dvIHtcbiAgYmFja2dyb3VuZDogIzAxNjhmYTtcbiAgY29sb3I6ICNGRkY7XG59XG4uYXBwLWxlZnQtcGFuZWwgLmxvZ28tYXJlYSAubG9nby10ZXh0IHtcbiAgY29sb3I6ICMwMTY4ZmE7XG59XG4uYXBwLWxlZnQtcGFuZWwgLmxvZ28tYXJlYSAubG9nby10ZXh0IC5zbWFsbCB7XG4gIGNvbG9yOiAjYjJjMmU4O1xufVxuLmFwcC1sZWZ0LXBhbmVsIHVsLm1lbnUtbGlzdCAubmF2LWxhYmVsIHtcbiAgY29sb3I6ICNiYWJjYzE7XG59XG4uYXBwLWxlZnQtcGFuZWwgdWwubWVudS1saXN0ID4gbGkubWVudS1pdGVtID4gYSB7XG4gIGNvbG9yOiAjYjJjMmU4O1xufVxuLmFwcC1sZWZ0LXBhbmVsIHVsLm1lbnUtbGlzdCA+IGxpLm1lbnUtaXRlbSA+IGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjM2I0ZjdkO1xuICBjb2xvcjogI0ZGRjtcbn1cbi5hcHAtbGVmdC1wYW5lbCB1bC5tZW51LWxpc3QgPiBsaS5tZW51LWl0ZW0uYWN0aXZlID4gYSB7XG4gIGJhY2tncm91bmQ6ICMzZjU0ODU7XG4gIGNvbG9yOiAjRkZGO1xufVxuLmFwcC1sZWZ0LXBhbmVsIGxpLm1lbnUtaXRlbS5oYXNNZW51Lm9wZW4gPiBhIHtcbiAgYmFja2dyb3VuZDogIzNmNTQ4NTtcbn1cbi5hcHAtbGVmdC1wYW5lbCBsaS5tZW51LWl0ZW0uaGFzTWVudS5hY3RpdmUgPiBhIHtcbiAgYmFja2dyb3VuZDogIzNmNTQ4NTtcbiAgY29sb3I6ICNGRkY7XG59XG4uYXBwLWxlZnQtcGFuZWwgbGkubWVudS1pdGVtLmhhc01lbnUgdWwge1xuICBiYWNrZ3JvdW5kOiAjMmY0NDc1O1xufVxuLmFwcC1sZWZ0LXBhbmVsIGxpLm1lbnUtaXRlbS5oYXNNZW51IHVsIGxpIGEge1xuICBjb2xvcjogI2IyYzJlODtcbn1cbi5hcHAtbGVmdC1wYW5lbCBsaS5tZW51LWl0ZW0uaGFzTWVudSB1bCBsaSBhOmhvdmVyIHtcbiAgY29sb3I6ICNGRkY7XG59XG4uYXBwLWxlZnQtcGFuZWwgbGkubWVudS1pdGVtLmhhc01lbnUgdWwgbGkgYTpob3ZlciAuc21hbGwtaWNvbiB7XG4gIGZpbGw6ICNGRkY7XG4gIHN0cm9rZTogI0ZGRjtcbn1cbi5hcHAtbGVmdC1wYW5lbCBsaS5tZW51LWl0ZW0uaGFzTWVudSB1bCBsaS5hY3RpdmUgYSB7XG4gIGNvbG9yOiAjRkZGO1xufVxuLmFwcC1sZWZ0LXBhbmVsIGxpLm1lbnUtaXRlbS5oYXNNZW51IHVsIGxpLmFjdGl2ZSBhIC5zbWFsbC1pY29uIHtcbiAgZmlsbDogI0ZGRjtcbiAgc3Ryb2tlOiAjRkZGO1xufVxuXG4uYXBwLWxlZnQtcGFuZWxbbmF2LWxheW91dD1ob3Jpem9udGFsXSBsaS5tZW51LWl0ZW0uaGFzTWVudSB1bCB7XG4gIGJhY2tncm91bmQ6ICMzZjU0ODU7XG59XG5cbi5hcHAtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PWhvcml6b250YWxdW2RldmljZS10eXBlPXBob25lXSB7XG4gIGJvcmRlci1yaWdodC1jb2xvcjogIzNmNTQ4NTtcbn1cbi5hcHAtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PWhvcml6b250YWxdW2RldmljZS10eXBlPXBob25lXSBsaS5tZW51LWl0ZW0uaGFzTWVudSB1bCB7XG4gIGJhY2tncm91bmQ6ICMyZjQ0NzU7XG59XG5cbi5hcHAtbGVmdC1wYW5lbFtjb2xvci10aGVtZT1saWdodF0ge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmlnaHQtY29sb3I6ICNkY2RjZGM7XG59XG4uYXBwLWxlZnQtcGFuZWxbY29sb3ItdGhlbWU9bGlnaHRdIC5sb2dvLWFyZWEgLmxvZ28ge1xuICBiYWNrZ3JvdW5kOiAjMDE2OGZhO1xuICBjb2xvcjogI0ZGRjtcbn1cbi5hcHAtbGVmdC1wYW5lbFtjb2xvci10aGVtZT1saWdodF0gLmxvZ28tYXJlYSAubG9nby10ZXh0IHtcbiAgY29sb3I6ICMwMTY4ZmE7XG59XG4uYXBwLWxlZnQtcGFuZWxbY29sb3ItdGhlbWU9bGlnaHRdIC5sb2dvLWFyZWEgLmxvZ28tdGV4dCAuc21hbGwge1xuICBjb2xvcjogIzMzMztcbn1cbi5hcHAtbGVmdC1wYW5lbFtjb2xvci10aGVtZT1saWdodF0gdWwubWVudS1saXN0IC5uYXYtbGFiZWwge1xuICBjb2xvcjogIzllOWU5ZTtcbn1cbi5hcHAtbGVmdC1wYW5lbFtjb2xvci10aGVtZT1saWdodF0gdWwubWVudS1saXN0ID4gbGkubWVudS1pdGVtID4gYSB7XG4gIGNvbG9yOiAjMzMzO1xufVxuLmFwcC1sZWZ0LXBhbmVsW2NvbG9yLXRoZW1lPWxpZ2h0XSB1bC5tZW51LWxpc3QgPiBsaS5tZW51LWl0ZW0gPiBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2VhZWJmMztcbiAgY29sb3I6ICMwMTY4ZmE7XG59XG4uYXBwLWxlZnQtcGFuZWxbY29sb3ItdGhlbWU9bGlnaHRdIHVsLm1lbnUtbGlzdCA+IGxpLm1lbnUtaXRlbS5hY3RpdmUgPiBhIHtcbiAgYmFja2dyb3VuZDogI2VhZWJmMztcbiAgY29sb3I6ICMwMTY4ZmE7XG59XG4uYXBwLWxlZnQtcGFuZWxbY29sb3ItdGhlbWU9bGlnaHRdIGxpLm1lbnUtaXRlbS5oYXNNZW51Lm9wZW4gPiBhIHtcbiAgYmFja2dyb3VuZDogI2VhZWJmMztcbn1cbi5hcHAtbGVmdC1wYW5lbFtjb2xvci10aGVtZT1saWdodF0gbGkubWVudS1pdGVtLmhhc01lbnUuYWN0aXZlID4gYSB7XG4gIGJhY2tncm91bmQ6ICNlYWViZjM7XG4gIGNvbG9yOiAjMDE2OGZhO1xufVxuLmFwcC1sZWZ0LXBhbmVsW2NvbG9yLXRoZW1lPWxpZ2h0XSBsaS5tZW51LWl0ZW0uaGFzTWVudSB1bCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjM0LCAyMzUsIDI0MywgMC42KTtcbn1cbi5hcHAtbGVmdC1wYW5lbFtjb2xvci10aGVtZT1saWdodF0gbGkubWVudS1pdGVtLmhhc01lbnUgdWwgbGkgYSB7XG4gIGNvbG9yOiAjMzMzO1xufVxuLmFwcC1sZWZ0LXBhbmVsW2NvbG9yLXRoZW1lPWxpZ2h0XSBsaS5tZW51LWl0ZW0uaGFzTWVudSB1bCBsaSBhOmhvdmVyIHtcbiAgY29sb3I6ICMwMTY4ZmE7XG59XG4uYXBwLWxlZnQtcGFuZWxbY29sb3ItdGhlbWU9bGlnaHRdIGxpLm1lbnUtaXRlbS5oYXNNZW51IHVsIGxpIGE6aG92ZXIgLnNtYWxsLWljb24ge1xuICBmaWxsOiAjMDE2OGZhO1xuICBzdHJva2U6ICMwMTY4ZmE7XG59XG4uYXBwLWxlZnQtcGFuZWxbY29sb3ItdGhlbWU9bGlnaHRdIGxpLm1lbnUtaXRlbS5oYXNNZW51IHVsIGxpLmFjdGl2ZSBhIHtcbiAgY29sb3I6ICMwMTY4ZmE7XG59XG4uYXBwLWxlZnQtcGFuZWxbY29sb3ItdGhlbWU9bGlnaHRdIGxpLm1lbnUtaXRlbS5oYXNNZW51IHVsIGxpLmFjdGl2ZSBhIC5zbWFsbC1pY29uIHtcbiAgZmlsbDogIzAxNjhmYTtcbiAgc3Ryb2tlOiAjMDE2OGZhO1xufVxuXG4uYXBwLWxlZnQtcGFuZWxbbmF2LWxheW91dD1ob3Jpem9udGFsXVtjb2xvci10aGVtZT1saWdodF0gbGkubWVudS1pdGVtLmhhc01lbnUgdWwge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uYXBwLWxlZnQtcGFuZWxbbmF2LWxheW91dD1ob3Jpem9udGFsXVtkZXZpY2UtdHlwZT1waG9uZV1bY29sb3ItdGhlbWU9bGlnaHRdIHtcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjZGNkY2RjO1xufVxuLmFwcC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9aG9yaXpvbnRhbF1bZGV2aWNlLXR5cGU9cGhvbmVdW2NvbG9yLXRoZW1lPWxpZ2h0XSBsaS5tZW51LWl0ZW0uaGFzTWVudSB1bCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjM0LCAyMzUsIDI0MywgMC42KTtcbn1cblxuLmFwcC1sZWZ0LXBhbmVsW2NvbG9yLXRoZW1lPWRhcmtdIHtcbiAgYmFja2dyb3VuZDogIzJhMzQ0NDtcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjNGY1OTY5O1xufVxuLmFwcC1sZWZ0LXBhbmVsW2NvbG9yLXRoZW1lPWRhcmtdIC5sb2dvLWFyZWEgLmxvZ28ge1xuICBiYWNrZ3JvdW5kOiAjMDE2OGZhO1xuICBjb2xvcjogI0ZGRjtcbn1cbi5hcHAtbGVmdC1wYW5lbFtjb2xvci10aGVtZT1kYXJrXSAubG9nby1hcmVhIC5sb2dvLXRleHQge1xuICBjb2xvcjogIzAxNjhmYTtcbn1cbi5hcHAtbGVmdC1wYW5lbFtjb2xvci10aGVtZT1kYXJrXSAubG9nby1hcmVhIC5sb2dvLXRleHQgLnNtYWxsIHtcbiAgY29sb3I6ICM4Njk5YWQ7XG59XG4uYXBwLWxlZnQtcGFuZWxbY29sb3ItdGhlbWU9ZGFya10gdWwubWVudS1saXN0IC5uYXYtbGFiZWwge1xuICBjb2xvcjogIzllOWU5ZTtcbn1cbi5hcHAtbGVmdC1wYW5lbFtjb2xvci10aGVtZT1kYXJrXSB1bC5tZW51LWxpc3QgPiBsaS5tZW51LWl0ZW0gPiBhIHtcbiAgY29sb3I6ICM4Njk5YWQ7XG59XG4uYXBwLWxlZnQtcGFuZWxbY29sb3ItdGhlbWU9ZGFya10gdWwubWVudS1saXN0ID4gbGkubWVudS1pdGVtID4gYTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoNjQsIDc2LCA5NSwgMC44KTtcbiAgY29sb3I6ICNGRkY7XG59XG4uYXBwLWxlZnQtcGFuZWxbY29sb3ItdGhlbWU9ZGFya10gdWwubWVudS1saXN0ID4gbGkubWVudS1pdGVtLmFjdGl2ZSA+IGEge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDY0LCA3NiwgOTUsIDAuOCk7XG4gIGNvbG9yOiAjRkZGO1xufVxuLmFwcC1sZWZ0LXBhbmVsW2NvbG9yLXRoZW1lPWRhcmtdIGxpLm1lbnUtaXRlbS5oYXNNZW51Lm9wZW4gPiBhIHtcbiAgYmFja2dyb3VuZDogcmdiYSg2NCwgNzYsIDk1LCAwLjgpO1xufVxuLmFwcC1sZWZ0LXBhbmVsW2NvbG9yLXRoZW1lPWRhcmtdIGxpLm1lbnUtaXRlbS5oYXNNZW51LmFjdGl2ZSA+IGEge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDY0LCA3NiwgOTUsIDAuOCk7XG4gIGNvbG9yOiAjRkZGO1xufVxuLmFwcC1sZWZ0LXBhbmVsW2NvbG9yLXRoZW1lPWRhcmtdIGxpLm1lbnUtaXRlbS5oYXNNZW51IHVsIHtcbiAgYmFja2dyb3VuZDogcmdiYSg2NCwgNzYsIDk1LCAwLjUpO1xufVxuLmFwcC1sZWZ0LXBhbmVsW2NvbG9yLXRoZW1lPWRhcmtdIGxpLm1lbnUtaXRlbS5oYXNNZW51IHVsIGxpIGEge1xuICBjb2xvcjogIzg2OTlhZDtcbn1cbi5hcHAtbGVmdC1wYW5lbFtjb2xvci10aGVtZT1kYXJrXSBsaS5tZW51LWl0ZW0uaGFzTWVudSB1bCBsaSBhOmhvdmVyIHtcbiAgY29sb3I6ICNGRkY7XG59XG4uYXBwLWxlZnQtcGFuZWxbY29sb3ItdGhlbWU9ZGFya10gbGkubWVudS1pdGVtLmhhc01lbnUgdWwgbGkgYTpob3ZlciAuc21hbGwtaWNvbiB7XG4gIGZpbGw6ICNGRkY7XG4gIHN0cm9rZTogI0ZGRjtcbn1cbi5hcHAtbGVmdC1wYW5lbFtjb2xvci10aGVtZT1kYXJrXSBsaS5tZW51LWl0ZW0uaGFzTWVudSB1bCBsaS5hY3RpdmUgYSB7XG4gIGNvbG9yOiAjRkZGO1xufVxuLmFwcC1sZWZ0LXBhbmVsW2NvbG9yLXRoZW1lPWRhcmtdIGxpLm1lbnUtaXRlbS5oYXNNZW51IHVsIGxpLmFjdGl2ZSBhIC5zbWFsbC1pY29uIHtcbiAgZmlsbDogI0ZGRjtcbiAgc3Ryb2tlOiAjRkZGO1xufVxuXG4uYXBwLWxlZnQtcGFuZWxbbmF2LWxheW91dD1ob3Jpem9udGFsXVtjb2xvci10aGVtZT1kYXJrXSBsaS5tZW51LWl0ZW0uaGFzTWVudSB1bCB7XG4gIGJhY2tncm91bmQ6ICMyYTM0NDQ7XG59XG5cbi5hcHAtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PWhvcml6b250YWxdW2RldmljZS10eXBlPXBob25lXVtjb2xvci10aGVtZT1kYXJrXSB7XG4gIGJvcmRlci1yaWdodC1jb2xvcjogIzRmNTk2OTtcbn1cbi5hcHAtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PWhvcml6b250YWxdW2RldmljZS10eXBlPXBob25lXVtjb2xvci10aGVtZT1kYXJrXSBsaS5tZW51LWl0ZW0uaGFzTWVudSB1bCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoNjQsIDc2LCA5NSwgMC41KTtcbn1cblxucGVyZmVjdC1zY3JvbGxiYXIge1xuICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LeftAsidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-left-asidebar',
          templateUrl: './left-asidebar.component.html',
          styleUrls: ['./left-asidebar.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _shared_services_layout_service__WEBPACK_IMPORTED_MODULE_1__["LayoutService"]
        }];
      }, {
        deviceType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        navLayout: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        defaultNavbar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        toggleStatus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        navbarEffect: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        toggleNavbar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        navbarColorTheme: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        collapsedHeader: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/common-components/right-asidebar/right-asidebar.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/pages/common-components/right-asidebar/right-asidebar.component.ts ***!
    \************************************************************************************/

  /*! exports provided: RightAsidebarComponent */

  /***/
  function srcAppPagesCommonComponentsRightAsidebarRightAsidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RightAsidebarComponent", function () {
      return RightAsidebarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var RightAsidebarComponent =
    /*#__PURE__*/
    function () {
      function RightAsidebarComponent() {
        _classCallCheck(this, RightAsidebarComponent);
      }

      _createClass(RightAsidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RightAsidebarComponent;
    }();

    RightAsidebarComponent.ɵfac = function RightAsidebarComponent_Factory(t) {
      return new (t || RightAsidebarComponent)();
    };

    RightAsidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RightAsidebarComponent,
      selectors: [["app-right-asidebar"]],
      decls: 2,
      vars: 0,
      template: function RightAsidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "right-asidebar works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbW1vbi1jb21wb25lbnRzL3JpZ2h0LWFzaWRlYmFyL3JpZ2h0LWFzaWRlYmFyLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RightAsidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-right-asidebar',
          templateUrl: './right-asidebar.component.html',
          styleUrls: ['./right-asidebar.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/pages-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/pages-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: PagesRoutingModule */

  /***/
  function srcAppPagesPagesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function () {
      return PagesRoutingModule;
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


    var _client_core_client_core_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./client-core/client-core.component */
    "./src/app/pages/client-core/client-core.component.ts");

    var routes = [{
      path: '',
      component: _client_core_client_core_component__WEBPACK_IMPORTED_MODULE_2__["ClientCoreComponent"],
      children: [{
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      }, {
        path: 'dashboard',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | client-core-client-dashboard-client-dashboard-module */
          [__webpack_require__.e("default~client-core-client-dashboard-client-dashboard-module~client-core-documents-documents-module~~c6b23fe6"), __webpack_require__.e("client-core-client-dashboard-client-dashboard-module")]).then(__webpack_require__.bind(null,
          /*! ./client-core/client-dashboard/client-dashboard.module */
          "./src/app/pages/client-core/client-dashboard/client-dashboard.module.ts")).then(function (m) {
            return m.ClientDashboardModule;
          });
        },
        data: {
          breadcrumb: 'CRM Client Dashboard'
        }
      }, {
        path: 'accounts',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | client-core-client-accounts-client-accounts-module */
          [__webpack_require__.e("common"), __webpack_require__.e("client-core-client-accounts-client-accounts-module")]).then(__webpack_require__.bind(null,
          /*! ./client-core/client-accounts/client-accounts.module */
          "./src/app/pages/client-core/client-accounts/client-accounts.module.ts")).then(function (m) {
            return m.ClientAccountsModule;
          });
        },
        data: {
          breadcrumb: 'Accounts'
        }
      }, {
        path: 'money',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | client-core-fund-management-fund-management-module */
          [__webpack_require__.e("default~client-core-affiliate-affiliate-module~client-core-fund-management-fund-management-module~cl~9f3c03ab"), __webpack_require__.e("common"), __webpack_require__.e("client-core-fund-management-fund-management-module")]).then(__webpack_require__.bind(null,
          /*! ./client-core/fund-management/fund-management.module */
          "./src/app/pages/client-core/fund-management/fund-management.module.ts")).then(function (m) {
            return m.FundManagementModule;
          });
        },
        data: {
          breadcrumb: 'Money'
        }
      }, {
        path: 'reports',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | client-core-reports-reports-module */
          "client-core-reports-reports-module").then(__webpack_require__.bind(null,
          /*! ./client-core/reports/reports.module */
          "./src/app/pages/client-core/reports/reports.module.ts")).then(function (m) {
            return m.ReportsModule;
          });
        },
        data: {
          breadcrumb: 'Reports'
        }
      }, {
        path: 'platforms',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | client-core-platforms-platforms-module */
          "client-core-platforms-platforms-module").then(__webpack_require__.bind(null,
          /*! ./client-core/platforms/platforms.module */
          "./src/app/pages/client-core/platforms/platforms.module.ts")).then(function (m) {
            return m.PlatformsModule;
          });
        },
        data: {
          breadcrumb: 'Platforms'
        }
      }, {
        path: 'documents',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | client-core-documents-documents-module */
          [__webpack_require__.e("default~client-core-client-dashboard-client-dashboard-module~client-core-documents-documents-module~~c6b23fe6"), __webpack_require__.e("common"), __webpack_require__.e("client-core-documents-documents-module")]).then(__webpack_require__.bind(null,
          /*! ./client-core/documents/documents.module */
          "./src/app/pages/client-core/documents/documents.module.ts")).then(function (m) {
            return m.DocumentsModule;
          });
        },
        data: {
          breadcrumb: 'Documents'
        }
      }, {
        path: 'profile',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | client-core-profile-profile-module */
          [__webpack_require__.e("common"), __webpack_require__.e("client-core-profile-profile-module")]).then(__webpack_require__.bind(null,
          /*! ./client-core/profile/profile.module */
          "./src/app/pages/client-core/profile/profile.module.ts")).then(function (m) {
            return m.ProfileModule;
          });
        },
        data: {
          breadcrumb: 'Profile'
        }
      }, {
        path: 'trading-service',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | client-core-trading-services-trading-services-module */
          "client-core-trading-services-trading-services-module").then(__webpack_require__.bind(null,
          /*! ./client-core/trading-services/trading-services.module */
          "./src/app/pages/client-core/trading-services/trading-services.module.ts")).then(function (m) {
            return m.TradingServicesModule;
          });
        },
        data: {
          breadcrumb: 'Trading-Service'
        }
      }, {
        path: 'promotions',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | client-core-promotions-promotions-module */
          [__webpack_require__.e("common"), __webpack_require__.e("client-core-promotions-promotions-module")]).then(__webpack_require__.bind(null,
          /*! ./client-core/promotions/promotions.module */
          "./src/app/pages/client-core/promotions/promotions.module.ts")).then(function (m) {
            return m.PromotionsModule;
          });
        },
        data: {
          breadcrumb: 'Promotions'
        }
      }, {
        path: 'risk-manager',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | client-core-risk-manager-risk-manager-module */
          [__webpack_require__.e("default~client-core-affiliate-affiliate-module~client-core-fund-management-fund-management-module~cl~9f3c03ab"), __webpack_require__.e("common"), __webpack_require__.e("client-core-risk-manager-risk-manager-module")]).then(__webpack_require__.bind(null,
          /*! ./client-core/risk-manager/risk-manager.module */
          "./src/app/pages/client-core/risk-manager/risk-manager.module.ts")).then(function (m) {
            return m.RiskManagerModule;
          });
        },
        data: {
          breadcrumb: 'Risk Manager'
        }
      }, {
        path: 'affiliate',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | client-core-affiliate-affiliate-module */
          [__webpack_require__.e("default~client-core-affiliate-affiliate-module~client-core-fund-management-fund-management-module~cl~9f3c03ab"), __webpack_require__.e("common"), __webpack_require__.e("client-core-affiliate-affiliate-module")]).then(__webpack_require__.bind(null,
          /*! ./client-core/affiliate/affiliate.module */
          "./src/app/pages/client-core/affiliate/affiliate.module.ts")).then(function (m) {
            return m.AffiliateModule;
          });
        },
        data: {
          breadcrumb: 'Affiliate'
        }
      }, {
        path: 'message-center',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | client-core-message-center-message-center-module */
          "client-core-message-center-message-center-module").then(__webpack_require__.bind(null,
          /*! ./client-core/message-center/message-center.module */
          "./src/app/pages/client-core/message-center/message-center.module.ts")).then(function (m) {
            return m.MessageCenterModule;
          });
        },
        data: {
          breadcrumb: 'Message Center'
        }
      }, {
        path: 'partner-area',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | client-core-partner-area-partner-area-module */
          [__webpack_require__.e("default~client-core-client-dashboard-client-dashboard-module~client-core-documents-documents-module~~c6b23fe6"), __webpack_require__.e("common"), __webpack_require__.e("client-core-partner-area-partner-area-module")]).then(__webpack_require__.bind(null,
          /*! ./client-core/partner-area/partner-area.module */
          "./src/app/pages/client-core/partner-area/partner-area.module.ts")).then(function (m) {
            return m.PartnerAreaModule;
          });
        },
        data: {
          breadcrumb: 'Partner Area'
        }
      }, {
        path: 'economic-calendar',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | client-core-economic-calendar-economic-calendar-module */
          [__webpack_require__.e("default~client-core-client-dashboard-client-dashboard-module~client-core-documents-documents-module~~c6b23fe6"), __webpack_require__.e("client-core-economic-calendar-economic-calendar-module")]).then(__webpack_require__.bind(null,
          /*! ./client-core/economic-calendar/economic-calendar.module */
          "./src/app/pages/client-core/economic-calendar/economic-calendar.module.ts")).then(function (m) {
            return m.EconomicCalendarModule;
          });
        },
        data: {
          breadcrumb: 'Economic Calendar'
        }
      }, {
        path: 'signal-hub',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | client-core-signal-hub-signal-hub-module */
          "client-core-signal-hub-signal-hub-module").then(__webpack_require__.bind(null,
          /*! ./client-core/signal-hub/signal-hub.module */
          "./src/app/pages/client-core/signal-hub/signal-hub.module.ts")).then(function (m) {
            return m.SignalHubModule;
          });
        },
        data: {
          breadcrumb: 'Signal Hub'
        }
      }]
    }];

    var PagesRoutingModule = function PagesRoutingModule() {
      _classCallCheck(this, PagesRoutingModule);
    };

    PagesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PagesRoutingModule
    });
    PagesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PagesRoutingModule_Factory(t) {
        return new (t || PagesRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PagesRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/pages.module.ts":
  /*!***************************************!*\
    !*** ./src/app/pages/pages.module.ts ***!
    \***************************************/

  /*! exports provided: PagesModule */

  /***/
  function srcAppPagesPagesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagesModule", function () {
      return PagesModule;
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


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _pages_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages-routing.module */
    "./src/app/pages/pages-routing.module.ts");
    /* harmony import */


    var _common_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./common-components/header/header.component */
    "./src/app/pages/common-components/header/header.component.ts");
    /* harmony import */


    var _common_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./common-components/footer/footer.component */
    "./src/app/pages/common-components/footer/footer.component.ts");
    /* harmony import */


    var _common_components_left_asidebar_left_asidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./common-components/left-asidebar/left-asidebar.component */
    "./src/app/pages/common-components/left-asidebar/left-asidebar.component.ts");
    /* harmony import */


    var _common_components_right_asidebar_right_asidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./common-components/right-asidebar/right-asidebar.component */
    "./src/app/pages/common-components/right-asidebar/right-asidebar.component.ts");
    /* harmony import */


    var _common_components_content_section_content_section_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./common-components/content-section/content-section.component */
    "./src/app/pages/common-components/content-section/content-section.component.ts");
    /* harmony import */


    var _client_core_client_core_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./client-core/client-core.component */
    "./src/app/pages/client-core/client-core.component.ts"); // Imported Shared module
    // Imported Common Components
    // Imported Client Core Components


    var PagesModule = function PagesModule() {
      _classCallCheck(this, PagesModule);
    };

    PagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PagesModule
    });
    PagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PagesModule_Factory(t) {
        return new (t || PagesModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _pages_routing_module__WEBPACK_IMPORTED_MODULE_3__["PagesRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PagesModule, {
        declarations: [_common_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _common_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _common_components_left_asidebar_left_asidebar_component__WEBPACK_IMPORTED_MODULE_6__["LeftAsidebarComponent"], _common_components_right_asidebar_right_asidebar_component__WEBPACK_IMPORTED_MODULE_7__["RightAsidebarComponent"], _common_components_content_section_content_section_component__WEBPACK_IMPORTED_MODULE_8__["ContentSectionComponent"], _client_core_client_core_component__WEBPACK_IMPORTED_MODULE_9__["ClientCoreComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _pages_routing_module__WEBPACK_IMPORTED_MODULE_3__["PagesRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_common_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _common_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _common_components_left_asidebar_left_asidebar_component__WEBPACK_IMPORTED_MODULE_6__["LeftAsidebarComponent"], _common_components_right_asidebar_right_asidebar_component__WEBPACK_IMPORTED_MODULE_7__["RightAsidebarComponent"], _common_components_content_section_content_section_component__WEBPACK_IMPORTED_MODULE_8__["ContentSectionComponent"], _client_core_client_core_component__WEBPACK_IMPORTED_MODULE_9__["ClientCoreComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _pages_routing_module__WEBPACK_IMPORTED_MODULE_3__["PagesRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-pages-module-es5.js.map