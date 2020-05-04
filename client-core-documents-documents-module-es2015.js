(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["client-core-documents-documents-module"],{

/***/ "./src/app/pages/client-core/documents/documents-core/documents-core.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/client-core/documents/documents-core/documents-core.component.ts ***!
  \****************************************************************************************/
/*! exports provided: DocumentsCoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentsCoreComponent", function() { return DocumentsCoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class DocumentsCoreComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
DocumentsCoreComponent.ɵfac = function DocumentsCoreComponent_Factory(t) { return new (t || DocumentsCoreComponent)(); };
DocumentsCoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DocumentsCoreComponent, selectors: [["app-documents-core"]], decls: 1, vars: 0, template: function DocumentsCoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NsaWVudC1jb3JlL2RvY3VtZW50cy9kb2N1bWVudHMtY29yZS9kb2N1bWVudHMtY29yZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocumentsCoreComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-documents-core',
                templateUrl: './documents-core.component.html',
                styleUrls: ['./documents-core.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/client-core/documents/documents-core/kyc-upload/kyc-upload.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/client-core/documents/documents-core/kyc-upload/kyc-upload.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: KycUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KycUploadComponent", function() { return KycUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");
/* harmony import */ var _shared_services_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/services/global.service */ "./src/app/shared/services/global.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/esm5/ngx-bootstrap.js");
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-feather */ "./node_modules/angular-feather/__ivy_ngcc__/fesm2015/angular-feather.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");











const _c0 = ["video"];
const _c1 = ["canvas"];
const _c2 = ["autoShownModal"];
function KycUploadComponent_div_1_label_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No documents !");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c3 = function () { return { show: true }; };
function KycUploadComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r424 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onHidden", function KycUploadComponent_div_1_Template_div_onHidden_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r424); const ctx_r423 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r423.onHidden(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KycUploadComponent_div_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r424); const ctx_r425 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r425.hideModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, KycUploadComponent_div_1_label_12_Template, 2, 0, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r414 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r414.documentTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r414.documentImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r414.documentImg);
} }
function KycUploadComponent_button_100_Template(rf, ctx) { if (rf & 1) {
    const _r427 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KycUploadComponent_button_100_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r427); const ctx_r426 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r420 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](103); return ctx_r426.capture(_r420); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Capture Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class KycUploadComponent {
    constructor(notificationService, renderer, global, http, spinner) {
        this.notificationService = notificationService;
        this.renderer = renderer;
        this.global = global;
        this.http = http;
        this.spinner = spinner;
        this.isModalShown = false;
        this.videoWidth = 200;
        this.videoHeight = 200;
        this.kycMessageShow = false;
        this.kycErrorMsg = false;
        this.cameraShow = false;
        this.kycParams = {
            ProfileId: localStorage.getItem('LoggedDealermasterid'),
            KYC_IDProof: '',
            KYC_AddrProof: '',
            KYC_Others: ''
        };
        this.constraints = {
            video: {
                facingMode: 'environment',
                width: {
                    ideal: 4096
                },
                height: {
                    ideal: 2160
                }
            }
        };
        this.getUser = JSON.parse(localStorage.getItem('LoggedUser'));
    }
    showModal(title) {
        this.isModalShown = true;
        this.documentTitle = title;
        this.getUserr = JSON.parse(localStorage.getItem('LoggedUser'));
        let doc = localStorage.getItem('kycdoc');
        let docc = JSON.parse(doc);
        if (doc) {
            if (title == 'ID proof') {
                this.documentImg = docc.KYC_IDProof;
            }
            if (title == 'Address proof') {
                this.documentImg = docc.KYC_AddrProof;
            }
            if (title == 'Other proof') {
                this.documentImg = docc.KYC_Others;
            }
        }
        else {
            if (title == 'ID proof') {
                this.documentImg = this.getUserr.sProfile.uKYCInfo.ID_PRROF;
                console.log(this.documentImg);
            }
            if (title == 'Address proof') {
                this.documentImg = this.getUserr.sProfile.uKYCInfo.ADDR_PROOF;
                console.log(this.documentImg);
            }
            if (title == 'Other proof') {
                this.documentImg = this.getUserr.sProfile.uKYCInfo.Others;
                console.log(this.documentImg);
            }
        }
    }
    hideModal() {
        this.autoShownModal.hide();
    }
    onHidden() {
        this.isModalShown = false;
    }
    handleError(error) {
        console.log('Error: ', error);
    }
    attachVideo(stream) {
        this.renderer.setProperty(this.videoElement.nativeElement, 'srcObject', stream);
        this.renderer.listen(this.videoElement.nativeElement, 'play', (event) => {
            this.videoHeight = this.videoElement.nativeElement.videoHeight;
            this.videoWidth = this.videoElement.nativeElement.videoWidth;
            this.spinner.hide();
            this.cameraShow = true;
        });
    }
    startCamera() {
        this.spinner.show();
        if (navigator.getUserMedia) {
            navigator.mediaDevices.getUserMedia(this.constraints).then(this.attachVideo.bind(this)).catch(this.handleError);
        }
        else {
            alert('Sorry, camera not available.');
        }
    }
    open_camera(documentType) {
        this.startCamera();
        if (documentType == 'id') {
            this.iddocs = 'id';
        }
        if (documentType == 'add') {
            this.adddocs = 'add';
        }
        if (documentType == 'oth') {
            this.otherdocs = 'oth';
        }
        console.log(this.iddocs + 's' + this.adddocs + 'a' + this.otherdocs);
    }
    capture(c) {
        this.spinner.show();
        this.renderer.setProperty(this.canvas.nativeElement, 'width', this.videoWidth);
        this.renderer.setProperty(this.canvas.nativeElement, 'height', this.videoHeight);
        this.canvas.nativeElement.getContext('2d').drawImage(this.videoElement.nativeElement, 0, 0);
        const data = {
            App: 'uploadReceit',
            oData: c.toDataURL()
        };
        // tslint:disable-next-line: max-line-length
        this.http.post('http://client.traderscabinet.com/tr_test/assets/PHP/alfa/v1/common/UploadDipositPaymentReceipt', data).subscribe((res) => {
            if (res) {
                this.spinner.hide();
            }
            if (this.iddocs == 'id') {
                this.kycParams.KYC_IDProof = res.resp.url;
                localStorage.setItem('idproof', res.resp.url);
            }
            if (this.adddocs == 'add') {
                this.kycParams.KYC_AddrProof = res.resp.url;
                localStorage.setItem('addproof', res.resp.url);
            }
            if (this.otherdocs == 'oth') {
                this.kycParams.KYC_Others = res.resp.url;
                localStorage.setItem('othproof', res.resp.url);
            }
        });
    }
    ngOnInit() { }
    encodeImageFileAsURL(element, documentType, fileInput) {
        if (documentType == 'id') {
            this.iddocname = fileInput.target.files[0].name;
        }
        if (documentType == 'add') {
            this.adddocname = fileInput.target.files[0].name;
        }
        if (documentType == 'oth') {
            this.othdocname = fileInput.target.files[0].name;
        }
        this.spinner.show();
        this.cameraShow = false;
        console.log(element);
        var file = element.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            console.log('RESULT', reader.result);
            const data = {
                App: 'uploadReceit',
                oData: reader.result
            };
            // tslint:disable-next-line: max-line-length
            this.http.post('http://client.traderscabinet.com/tr_test/assets/PHP/alfa/v1/common/UploadDipositPaymentReceipt', data).subscribe((res) => {
                if (res) {
                    this.spinner.hide();
                }
                if (documentType == 'id') {
                    this.kycParams.KYC_IDProof = res.resp.url;
                    localStorage.setItem('idproof', res.resp.url);
                }
                if (documentType == 'add') {
                    this.kycParams.KYC_AddrProof = res.resp.url;
                    localStorage.setItem('addproof', res.resp.url);
                }
                if (documentType == 'oth') {
                    this.kycParams.KYC_Others = res.resp.url;
                    localStorage.setItem('othproof', res.resp.url);
                }
            }, err => {
                this.spinner.hide();
            });
        };
    }
    updateKYC() {
        // if ((this.kycParams.KYC_IDProof == '') || (this.kycParams.KYC_AddrProof == '')) {
        //   this.kycErrorMsg = true;
        //   setTimeout(() => {
        //     this.kycErrorMsg = false;
        //   }, 10000);
        // } else {
        let id = localStorage.getItem('idproof');
        let add = localStorage.getItem('addproof');
        let oth = localStorage.getItem('othproof');
        if (id) {
            this.kycParams.KYC_IDProof = id;
        }
        if (add) {
            this.kycParams.KYC_AddrProof = add;
        }
        if (oth) {
            this.kycParams.KYC_Others = oth;
        }
        this.spinner.show();
        this.global.editUser(this.kycParams).subscribe((kyc) => {
            localStorage.setItem('kycdoc', JSON.stringify(this.kycParams));
            if (kyc.Result) {
                this.global.loadData();
                this.spinner.hide();
                this.updateKycMsg = kyc.MSG_USER;
                this.kycMessageShow = true;
                this.notificationService.showSuccess('Profile KYC has been updated successfully.', 'Success');
                setTimeout(() => {
                    this.kycMessageShow = false;
                }, 10000);
            }
            console.log(kyc);
        }, err => {
            this.notificationService.showError(this.updateKycMsg, 'Error');
            console.log(err);
            this.spinner.hide();
        });
        // }
    }
}
KycUploadComponent.ɵfac = function KycUploadComponent_Factory(t) { return new (t || KycUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"])); };
KycUploadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KycUploadComponent, selectors: [["app-kyc-upload"]], viewQuery: function KycUploadComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.videoElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.autoShownModal = _t.first);
    } }, decls: 105, vars: 8, consts: [[1, "col-md-12"], ["bsModal", "", "class", "modal fade", "tabindex", "-1", "role", "dialog", "aria-labelledby", "dialog-auto-name", 3, "config", "onHidden", 4, "ngIf"], [1, "row"], [1, "col-md-8"], [1, "col-md-12", "pl0"], [1, "upload_file"], [1, "pl-3"], [1, "upload_stlying", "d-flex", "flex-column", "pr-1"], [1, "input_upload", "file-area", "col"], ["type", "file", "accept", ".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf", "id", "images", "required", "", 3, "change"], ["file", ""], [1, "file-dummy"], [1, "success"], [1, "default"], [1, "m-0"], [1, "py-auto", "m-auto", "col", "position-relative", "text-center", "text-success"], [1, "camera_upload", "py-auto", "m-auto", "col"], ["type", "button", "tooltip", "Open web camera", "placement", "bottom", 1, "mr-2", "btn", "btn-primary", "btn-sm", "position-relative", "text-size-12", 3, "click"], ["name", "camera", 1, "icon-size-18"], ["type", "button", "tooltip", "View document", "placement", "bottom", 1, "btn", "btn-primary", "btn-sm", "position-relative", "text-size-12", 3, "click"], ["name", "file-text", 1, "icon-size-18"], ["type", "button", 1, "btn", "btn-sm", "position-relative", "text-size-13", "ml-2", "btn-primary", 3, "disabled", "click"], [1, "extension"], [1, "col-md-12", "pl-1"], [1, "upload_stlying", "file-area", "d-flex", "flex-column"], [1, "input_upload", "col"], ["required", "", "type", "file", "accept", ".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf", 3, "change"], ["file1", ""], [1, "m-auto", "col", "position-relative", "text-center", "text-success"], [1, "camera_upload", "m-auto", "col"], [1, "upload_stlying", "d-flex", "flex-column"], ["file2", ""], [1, "col-md-4"], [1, "container", "mt-3"], [1, "d-flex", "flex-column", "align-items-center"], [1, "p-1"], ["autoplay", "", 1, "vid"], ["video", ""], [1, "pb-2"], ["type", "button", "class", "btn btn-primary btn-sm position-relative", 3, "click", 4, "ngIf"], ["width", "400", "height", "200", 1, "vid"], ["canvas", ""], ["bsModal", "", "tabindex", "-1", "role", "dialog", "aria-labelledby", "dialog-auto-name", 1, "modal", "fade", 3, "config", "onHidden"], ["autoShownModal", "bs-modal"], [1, "modal-dialog", "modal-md"], [1, "modal-content"], [1, "modal-header"], ["id", "dialog-auto-name", 1, "modal-title", "pull-left"], ["type", "button", "type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "img-fluid", 3, "src"], [4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", "position-relative", 3, "click"]], template: function KycUploadComponent_Template(rf, ctx) { if (rf & 1) {
        const _r428 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, KycUploadComponent_div_1_Template, 13, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Upload ID Proof *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function KycUploadComponent_Template_input_change_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r428); const _r415 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13); return ctx.encodeImageFileAsURL(_r415, "id", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " You have selected a file to upload. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Please Upload Your ID Proof");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Click Here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "OR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KycUploadComponent_Template_button_click_27_listener() { return ctx.open_camera("id"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i-feather", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KycUploadComponent_Template_button_click_29_listener() { return ctx.showModal("ID proof"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i-feather", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KycUploadComponent_Template_button_click_31_listener() { return ctx.updateKYC(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Upload Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "*.jpg, .jpeg, .png, .bmp, .doc, .docx, .pdf");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Upload Address Proof *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "input", 26, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function KycUploadComponent_Template_input_change_41_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r428); const _r416 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](42); return ctx.encodeImageFileAsURL(_r416, "add", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " You have selected a file to upload. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Please upload Your address proof");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Click Here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "OR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KycUploadComponent_Template_button_click_56_listener() { return ctx.open_camera("add"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "i-feather", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KycUploadComponent_Template_button_click_58_listener() { return ctx.showModal("Address proof"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "i-feather", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KycUploadComponent_Template_button_click_60_listener() { return ctx.updateKYC(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Upload Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "*.jpg, .jpeg, .png, .bmp, .doc, .docx, .pdf");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Upload Others *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "input", 26, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function KycUploadComponent_Template_input_change_70_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r428); const _r417 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](71); return ctx.encodeImageFileAsURL(_r417, "oth", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " You have selected a file to upload. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Please upload Your other proof");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Click Here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "OR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KycUploadComponent_Template_button_click_85_listener() { return ctx.open_camera("oth"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "i-feather", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KycUploadComponent_Template_button_click_87_listener() { return ctx.showModal("Other proof"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "i-feather", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KycUploadComponent_Template_button_click_89_listener() { return ctx.updateKYC(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Upload Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "*.jpg, .jpeg, .png, .bmp, .doc, .docx, .pdf");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "video", 36, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](100, KycUploadComponent_button_100_Template, 2, 0, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "canvas", 40, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "ngx-spinner");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isModalShown);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.iddocname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.kycParams.KYC_IDProof == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.adddocname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.kycParams.KYC_AddrProof == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.othdocname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.kycParams.KYC_Others == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cameraShow);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["TooltipDirective"], angular_feather__WEBPACK_IMPORTED_MODULE_8__["ɵa"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerComponent"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["ModalDirective"]], styles: [".vid[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto !important;\n}\n\n.upload_stlying[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n}\n\n.or[_ngcontent-%COMP%] {\n  height: 38px;\n  line-height: 38px;\n  padding: 0px 20px;\n  border: 1px solid #aaa;\n  margin: 0px 2px;\n  border-radius: 4px;\n  font-weight: bold;\n}\n\n.upload_file[_ngcontent-%COMP%] {\n  padding: 20px 0px;\n  background-color: #ffffffa3;\n  margin: 10px 0px;\n  box-shadow: 0px -1px 9px 0px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n}\n\n.upload_file[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  padding-bottom: 11px;\n}\n\n.extension[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 15px;\n  font-size: 12px;\n  padding-left: 15px;\n}\n\n.file-area[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  opacity: 0;\n  cursor: pointer;\n}\n\n.file-area[_ngcontent-%COMP%]   .file-dummy[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 30px;\n  background: #f8e5f1;\n  border: 2px dashed #dc507e;\n  text-align: center;\n  -webkit-transition: background 0.3s ease-in-out;\n  transition: background 0.3s ease-in-out;\n}\n\n.upload_file[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 400;\n}\n\n.m-auto.col.position-relative.text-center.text-success[_ngcontent-%COMP%] {\n  top: -30px;\n  font-weight: 600;\n}\n\n.file-area[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n}\n\n.file-area[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  opacity: 0;\n  cursor: pointer;\n}\n\n.file-area[_ngcontent-%COMP%]   .file-dummy[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 70px;\n  background: rgba(255, 255, 255, 0.2);\n  border: 2px dashed rgba(255, 255, 255, 0.2);\n  text-align: center;\n  -webkit-transition: background 0.3s ease-in-out;\n  transition: background 0.3s ease-in-out;\n}\n\n.file-area[_ngcontent-%COMP%]   .file-dummy[_ngcontent-%COMP%]   .success[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.file-area[_ngcontent-%COMP%]:hover   .file-dummy[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n}\n\n.file-area[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%]:focus    + .file-dummy[_ngcontent-%COMP%] {\n  outline: 2px solid rgba(255, 255, 255, 0.5);\n  outline: -webkit-focus-ring-color auto 5px;\n}\n\n.file-area[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%]:valid    + .file-dummy[_ngcontent-%COMP%] {\n  border-color: rgba(0, 255, 0, 0.4);\n  background-color: rgba(0, 255, 0, 0.3);\n}\n\n.file-area[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%]:valid    + .file-dummy[_ngcontent-%COMP%]   .success[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.file-area[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%]:valid    + .file-dummy[_ngcontent-%COMP%]   .default[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.file-area[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  margin: auto;\n  margin-bottom: 10px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-weight: 500;\n  display: block;\n  margin: 4px 0;\n  text-transform: uppercase;\n  font-size: 13px;\n  overflow: hidden;\n  text-align: left;\n}\n\nlabel[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  float: right;\n  text-transform: none;\n  font-weight: 200;\n  line-height: 1em;\n  font-style: italic;\n  opacity: 0.8;\n}\n\n.file-area[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  opacity: 0;\n  cursor: pointer;\n}\n\n.file-area[_ngcontent-%COMP%]   .file-dummy[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 30px;\n  background: #f8e5f1;\n  border: 2px dashed #dc507e;\n  text-align: center;\n  -webkit-transition: background 0.3s ease-in-out;\n  transition: background 0.3s ease-in-out;\n}\n\n.file-area[_ngcontent-%COMP%]   .file-dummy[_ngcontent-%COMP%]   .default[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.file-area[_ngcontent-%COMP%]   .file-dummy[_ngcontent-%COMP%]   .success[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2xpZW50LWNvcmUvZG9jdW1lbnRzL2RvY3VtZW50cy1jb3JlL2t5Yy11cGxvYWQvRjpcXG5ld3RyYWRlclxcdHJhZGVyNC01L3NyY1xcYXBwXFxwYWdlc1xcY2xpZW50LWNvcmVcXGRvY3VtZW50c1xcZG9jdW1lbnRzLWNvcmVcXGt5Yy11cGxvYWRcXGt5Yy11cGxvYWQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NsaWVudC1jb3JlL2RvY3VtZW50cy9kb2N1bWVudHMtY29yZS9reWMtdXBsb2FkL2t5Yy11cGxvYWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsdUJBQUE7QUNDSjs7QURFQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQ0FBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0NBQUE7RUFBQSx1Q0FBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQ0FBQTtFQUFBLHVDQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxvQ0FBQTtBQ0NKOztBREVBO0VBQ0ksMkNBQUE7RUFDQSwwQ0FBQTtBQ0NKOztBREVBO0VBQ0ksa0NBQUE7RUFDQSxzQ0FBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLCtDQUFBO0VBQUEsdUNBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NsaWVudC1jb3JlL2RvY3VtZW50cy9kb2N1bWVudHMtY29yZS9reWMtdXBsb2FkL2t5Yy11cGxvYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi51cGxvYWRfc3RseWluZyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ub3Ige1xyXG4gICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM4cHg7XHJcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhYWE7XHJcbiAgICBtYXJnaW46IDBweCAycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnVwbG9hZF9maWxlIHtcclxuICAgIHBhZGRpbmc6IDIwcHggMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZmEzO1xyXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAtMXB4IDlweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4udXBsb2FkX2ZpbGUgaDUge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDExcHg7XHJcbn1cclxuXHJcbi5leHRlbnNpb24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxufVxyXG5cclxuLmZpbGUtYXJlYSBpbnB1dFt0eXBlPWZpbGVdIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5maWxlLWFyZWEgLmZpbGUtZHVtbXkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2Y4ZTVmMTtcclxuICAgIGJvcmRlcjogMnB4IGRhc2hlZCAjZGM1MDdlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4udXBsb2FkX2ZpbGUgaDUge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLm0tYXV0by5jb2wucG9zaXRpb24tcmVsYXRpdmUudGV4dC1jZW50ZXIudGV4dC1zdWNjZXNzIHtcclxuICAgIHRvcDogLTMwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uZmlsZS1hcmVhIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uZmlsZS1hcmVhIGlucHV0W3R5cGU9ZmlsZV0ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZmlsZS1hcmVhIC5maWxlLWR1bW15IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogNzBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICAgIGJvcmRlcjogMnB4IGRhc2hlZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5maWxlLWFyZWEgLmZpbGUtZHVtbXkgLnN1Y2Nlc3Mge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmZpbGUtYXJlYTpob3ZlciAuZmlsZS1kdW1teSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbn1cclxuXHJcbi5maWxlLWFyZWEgaW5wdXRbdHlwZT1maWxlXTpmb2N1cysuZmlsZS1kdW1teSB7XHJcbiAgICBvdXRsaW5lOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gICAgb3V0bGluZTogLXdlYmtpdC1mb2N1cy1yaW5nLWNvbG9yIGF1dG8gNXB4O1xyXG59XHJcblxyXG4uZmlsZS1hcmVhIGlucHV0W3R5cGU9ZmlsZV06dmFsaWQrLmZpbGUtZHVtbXkge1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDI1NSwgMCwgMC40KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCAwLCAwLjMpO1xyXG59XHJcblxyXG4uZmlsZS1hcmVhIGlucHV0W3R5cGU9ZmlsZV06dmFsaWQrLmZpbGUtZHVtbXkgLnN1Y2Nlc3Mge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uZmlsZS1hcmVhIGlucHV0W3R5cGU9ZmlsZV06dmFsaWQrLmZpbGUtZHVtbXkgLmRlZmF1bHQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmZpbGUtYXJlYSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDRweCAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG5sYWJlbCBzcGFuIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuXHJcbi5maWxlLWFyZWEgaW5wdXRbdHlwZT1maWxlXSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5maWxlLWFyZWEgLmZpbGUtZHVtbXkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2Y4ZTVmMTtcclxuICAgIGJvcmRlcjogMnB4IGRhc2hlZCAjZGM1MDdlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uZmlsZS1hcmVhIC5maWxlLWR1bW15IC5kZWZhdWx0IHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmZpbGUtYXJlYSAuZmlsZS1kdW1teSAuc3VjY2VzcyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59IiwiLnZpZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuLnVwbG9hZF9zdGx5aW5nIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLm9yIHtcbiAgaGVpZ2h0OiAzOHB4O1xuICBsaW5lLWhlaWdodDogMzhweDtcbiAgcGFkZGluZzogMHB4IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNhYWE7XG4gIG1hcmdpbjogMHB4IDJweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnVwbG9hZF9maWxlIHtcbiAgcGFkZGluZzogMjBweCAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmZhMztcbiAgbWFyZ2luOiAxMHB4IDBweDtcbiAgYm94LXNoYWRvdzogMHB4IC0xcHggOXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnVwbG9hZF9maWxlIGg1IHtcbiAgcGFkZGluZy1ib3R0b206IDExcHg7XG59XG5cbi5leHRlbnNpb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuXG4uZmlsZS1hcmVhIGlucHV0W3R5cGU9ZmlsZV0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgb3BhY2l0eTogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZmlsZS1hcmVhIC5maWxlLWR1bW15IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGJhY2tncm91bmQ6ICNmOGU1ZjE7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCAjZGM1MDdlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlLWluLW91dDtcbn1cblxuLnVwbG9hZF9maWxlIGg1IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4ubS1hdXRvLmNvbC5wb3NpdGlvbi1yZWxhdGl2ZS50ZXh0LWNlbnRlci50ZXh0LXN1Y2Nlc3Mge1xuICB0b3A6IC0zMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uZmlsZS1hcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmZpbGUtYXJlYSBpbnB1dFt0eXBlPWZpbGVdIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIG9wYWNpdHk6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZpbGUtYXJlYSAuZmlsZS1kdW1teSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA3MHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4uZmlsZS1hcmVhIC5maWxlLWR1bW15IC5zdWNjZXNzIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmZpbGUtYXJlYTpob3ZlciAuZmlsZS1kdW1teSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbn1cblxuLmZpbGUtYXJlYSBpbnB1dFt0eXBlPWZpbGVdOmZvY3VzICsgLmZpbGUtZHVtbXkge1xuICBvdXRsaW5lOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICBvdXRsaW5lOiAtd2Via2l0LWZvY3VzLXJpbmctY29sb3IgYXV0byA1cHg7XG59XG5cbi5maWxlLWFyZWEgaW5wdXRbdHlwZT1maWxlXTp2YWxpZCArIC5maWxlLWR1bW15IHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDI1NSwgMCwgMC40KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNTUsIDAsIDAuMyk7XG59XG5cbi5maWxlLWFyZWEgaW5wdXRbdHlwZT1maWxlXTp2YWxpZCArIC5maWxlLWR1bW15IC5zdWNjZXNzIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uZmlsZS1hcmVhIGlucHV0W3R5cGU9ZmlsZV06dmFsaWQgKyAuZmlsZS1kdW1teSAuZGVmYXVsdCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5maWxlLWFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZm9ybS1ncm91cCB7XG4gIG1heC13aWR0aDogMTAwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbmxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogNHB4IDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxubGFiZWwgc3BhbiB7XG4gIGZsb2F0OiByaWdodDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIGxpbmUtaGVpZ2h0OiAxZW07XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgb3BhY2l0eTogMC44O1xufVxuXG4uZmlsZS1hcmVhIGlucHV0W3R5cGU9ZmlsZV0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgb3BhY2l0eTogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZmlsZS1hcmVhIC5maWxlLWR1bW15IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGJhY2tncm91bmQ6ICNmOGU1ZjE7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCAjZGM1MDdlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlLWluLW91dDtcbn1cblxuLmZpbGUtYXJlYSAuZmlsZS1kdW1teSAuZGVmYXVsdCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmZpbGUtYXJlYSAuZmlsZS1kdW1teSAuc3VjY2VzcyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KycUploadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-kyc-upload',
                templateUrl: './kyc-upload.component.html',
                styleUrls: ['./kyc-upload.component.scss']
            }]
    }], function () { return [{ type: _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__["NotificationService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _shared_services_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] }]; }, { videoElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['video', { static: true }]
        }], canvas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['canvas', { static: true }]
        }], autoShownModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['autoShownModal', { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/client-core/documents/documents-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/client-core/documents/documents-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: DocumentsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentsRoutingModule", function() { return DocumentsRoutingModule; });
/* harmony import */ var _documents_core_kyc_upload_kyc_upload_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./documents-core/kyc-upload/kyc-upload.component */ "./src/app/pages/client-core/documents/documents-core/kyc-upload/kyc-upload.component.ts");
/* harmony import */ var _documents_core_documents_core_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./documents-core/documents-core.component */ "./src/app/pages/client-core/documents/documents-core/documents-core.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






const routes = [
    {
        path: '',
        component: _documents_core_documents_core_component__WEBPACK_IMPORTED_MODULE_1__["DocumentsCoreComponent"],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'kyc-upload'
            },
            {
                path: 'kyc-upload',
                component: _documents_core_kyc_upload_kyc_upload_component__WEBPACK_IMPORTED_MODULE_0__["KycUploadComponent"],
                data: { title: 'KYC Upload', breadcrumb: 'KYC Upload' }
            },
        ]
    }
];
class DocumentsRoutingModule {
}
DocumentsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: DocumentsRoutingModule });
DocumentsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function DocumentsRoutingModule_Factory(t) { return new (t || DocumentsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DocumentsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](DocumentsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/client-core/documents/documents.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/client-core/documents/documents.module.ts ***!
  \*****************************************************************/
/*! exports provided: DocumentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentsModule", function() { return DocumentsModule; });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _documents_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./documents-routing.module */ "./src/app/pages/client-core/documents/documents-routing.module.ts");
/* harmony import */ var _documents_core_documents_core_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./documents-core/documents-core.component */ "./src/app/pages/client-core/documents/documents-core/documents-core.component.ts");
/* harmony import */ var _documents_core_kyc_upload_kyc_upload_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./documents-core/kyc-upload/kyc-upload.component */ "./src/app/pages/client-core/documents/documents-core/kyc-upload/kyc-upload.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/alert */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/alert/fesm2015/ngx-bootstrap-alert.js");










// import { ModalModule } from 'ngx-bootstrap/modal';
class DocumentsModule {
}
DocumentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DocumentsModule });
DocumentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function DocumentsModule_Factory(t) { return new (t || DocumentsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _documents_routing_module__WEBPACK_IMPORTED_MODULE_3__["DocumentsRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"],
            ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_7__["AlertModule"].forRoot(),
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DocumentsModule, { declarations: [_documents_core_documents_core_component__WEBPACK_IMPORTED_MODULE_4__["DocumentsCoreComponent"], _documents_core_kyc_upload_kyc_upload_component__WEBPACK_IMPORTED_MODULE_5__["KycUploadComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _documents_routing_module__WEBPACK_IMPORTED_MODULE_3__["DocumentsRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_7__["AlertModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DocumentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_documents_core_documents_core_component__WEBPACK_IMPORTED_MODULE_4__["DocumentsCoreComponent"], _documents_core_kyc_upload_kyc_upload_component__WEBPACK_IMPORTED_MODULE_5__["KycUploadComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _documents_routing_module__WEBPACK_IMPORTED_MODULE_3__["DocumentsRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"],
                    ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_7__["AlertModule"].forRoot(),
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerModule"]
                ],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=client-core-documents-documents-module-es2015.js.map