(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["enter-otp-enter-otp-module"],{

/***/ "6c2S":
/*!***********************************************!*\
  !*** ./src/app/enter-otp/enter-otp.module.ts ***!
  \***********************************************/
/*! exports provided: EnterOtpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterOtpPageModule", function() { return EnterOtpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _enter_otp_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./enter-otp-routing.module */ "uQNJ");
/* harmony import */ var _enter_otp_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./enter-otp.page */ "kaFy");
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-otp-input */ "9OaD");








let EnterOtpPageModule = class EnterOtpPageModule {
};
EnterOtpPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _enter_otp_routing_module__WEBPACK_IMPORTED_MODULE_5__["EnterOtpPageRoutingModule"],
            ng_otp_input__WEBPACK_IMPORTED_MODULE_7__["NgOtpInputModule"]
        ],
        declarations: [_enter_otp_page__WEBPACK_IMPORTED_MODULE_6__["EnterOtpPage"]]
    })
], EnterOtpPageModule);



/***/ }),

/***/ "drgy":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/enter-otp/enter-otp.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar >\n    <ion-title color=\"primary\">OTP</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid  class=\"ion-margin-top\" class=\"ion-margin-top\" fixed>\n    <ion-row class=\"auth-margin-top\" >\n      <ion-col size=\"8\" offset=\"2\">\n        <ion-text class=\"ion-text-center\" color=\"primary\">\n          <h1 style=\"font-weight: bold;\">Verification code</h1>\n     \n        </ion-text>\n        <ion-text class=\"ion-text-center\" style=\"color: rgb(160, 158, 158);\">\n       \n          <p>We have sent the code verification to your Mobile number.</p>\n        </ion-text>\n  \n      </ion-col>\n      <ion-col size=\"6\" offset=\"3\" >\n              \n        <ng-otp-input  (onInputChange)=\"getOTP($event)\"   [config]=\"{length:4}\"></ng-otp-input>\n\n        <!-- <ion-text class=\"ion-text-right\" color=\"dark\">\n          <p style=\"font-size: 14px;\">Resend?</p>\n        </ion-text> -->\n      </ion-col>\n      <ion-col size=\"8\" offset=\"2\">\n        <ion-img src=\"assets/otp.png\"></ion-img>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  </ion-content>\n  \n  <ion-footer class=\"ion-no-border\">\n   \n   <ion-toolbar>\n    <ion-button [disabled]=\"!isOtpValid\" (click)=\"verifyOtp()\" expand=\"full\" size=\"large\" >\n      Login\n     </ion-button>\n   </ion-toolbar>\n  \n  </ion-footer>");

/***/ }),

/***/ "kaFy":
/*!*********************************************!*\
  !*** ./src/app/enter-otp/enter-otp.page.ts ***!
  \*********************************************/
/*! exports provided: EnterOtpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterOtpPage", function() { return EnterOtpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_enter_otp_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./enter-otp.page.html */ "drgy");
/* harmony import */ var _enter_otp_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enter-otp.page.scss */ "uAS3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth/auth.service */ "qXBG");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/storage.service */ "n90K");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");










let EnterOtpPage = class EnterOtpPage {
    constructor(router, authService, route, alertController, LoadingCtrl, http, storage) {
        this.router = router;
        this.authService = authService;
        this.route = route;
        this.alertController = alertController;
        this.LoadingCtrl = LoadingCtrl;
        this.http = http;
        this.storage = storage;
        this.isOtpValid = false;
    }
    ngOnInit() {
        this.number = this.route.snapshot.paramMap.get('number');
        console.log("NUMBER", this.number);
    }
    getOTP(event) {
        this.otp = event;
        this.isOtpValid = true;
    }
    verifyOtp(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.LoadingCtrl.create({
                message: "Please wait...",
            });
            loading.present();
            this.authService.verifyToken(this.otp, this.number).subscribe(token => {
                console.log(token);
                if (token['success']) {
                    loading.dismiss();
                    console.log(token['success'].valid);
                    if (token['success'].valid === true) {
                        console.log("Otp token is valid");
                        this.login();
                    }
                }
            }, (error) => {
                console.log(error);
                loading.dismiss();
                this.presentAlert('ERROR', 'Go back and enter your number again!');
            });
            // this.router.navigate(['/tabs']);
        });
    }
    login() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.LoadingCtrl.create({
                message: "Creating profile...",
            });
            loading.present();
            let body = {
                contactNumber: this.number
            };
            this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].API_URL + '/user/register', body)
                .subscribe((user) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log(user['userId']);
                if (user) {
                    this.storage.set('userId', user['userId']).then(userId => {
                        loading.dismiss();
                        this.router.navigate(['location']);
                    }).catch(error => {
                        console.log(error);
                    });
                }
            }), (error) => {
                loading.dismiss();
                console.log(error.message);
                this.presentAlert('ERROR!', error.message);
            });
        });
    }
    presentAlert(err, msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: err,
                subHeader: msg,
                buttons: [
                    {
                        text: 'OK',
                        handler: () => {
                            this.router.navigate(['']);
                        }
                    }
                ],
            });
            yield alert.present();
        });
    }
};
EnterOtpPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"] }
];
EnterOtpPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-enter-otp',
        template: _raw_loader_enter_otp_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_enter_otp_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EnterOtpPage);



/***/ }),

/***/ "uAS3":
/*!***********************************************!*\
  !*** ./src/app/enter-otp/enter-otp.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css2?family=Lato:wght@900&display=swap\");\nbody {\n  font-family: \"Lato\", sans-serif;\n}\n#partitioned {\n  padding-left: 15px;\n  letter-spacing: 42px;\n  border: 0;\n  background-image: linear-gradient(to left, #05a074 70%, rgba(255, 255, 255, 0) 0%);\n  background-position: bottom;\n  background-size: 50px 1px;\n  background-repeat: repeat-x;\n  background-position-x: 35px;\n  width: 220px;\n  min-width: 302px;\n}\n#divInner {\n  left: 0;\n  position: sticky;\n}\n#divOuter {\n  width: 290px;\n  overflow: hidden;\n}\nion-title {\n  font-weight: bold;\n}\nion-button {\n  height: 60px;\n  width: 100%;\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VudGVyLW90cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsa0ZBQUE7QUFHUjtFQUNJLCtCQUFBO0FBREo7QUFHQTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0ZBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUFKO0FBR0U7RUFDRSxPQUFBO0VBQ0EsZ0JBQUE7QUFBSjtBQUdFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FBQUo7QUFHRTtFQUNFLGlCQUFBO0FBQUo7QUFHRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUFKIiwiZmlsZSI6ImVudGVyLW90cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MYXRvOndnaHRAOTAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuXHJcbmJvZHl7XHJcbiAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcbiNwYXJ0aXRpb25lZCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogNDJweDtcclxuICAgIGJvcmRlcjowO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMwNWEwNzQgNzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAlKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogNTBweCAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDM1cHg7XHJcbiAgICB3aWR0aDogMjIwcHg7XHJcbiAgICBtaW4td2lkdGg6IDMwMnB4O1xyXG4gIH1cclxuICBcclxuICAjZGl2SW5uZXJ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICB9XHJcbiAgXHJcbiAgI2Rpdk91dGVye1xyXG4gICAgd2lkdGg6IDI5MHB4OyBcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuICBpb24tdGl0bGV7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG4gIGlvbi1idXR0b257XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59Il19 */");

/***/ }),

/***/ "uQNJ":
/*!*******************************************************!*\
  !*** ./src/app/enter-otp/enter-otp-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: EnterOtpPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterOtpPageRoutingModule", function() { return EnterOtpPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _enter_otp_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enter-otp.page */ "kaFy");




const routes = [
    {
        path: '',
        component: _enter_otp_page__WEBPACK_IMPORTED_MODULE_3__["EnterOtpPage"]
    }
];
let EnterOtpPageRoutingModule = class EnterOtpPageRoutingModule {
};
EnterOtpPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EnterOtpPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=enter-otp-enter-otp-module.js.map