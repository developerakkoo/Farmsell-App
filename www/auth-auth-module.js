(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "6epW":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPageRoutingModule", function() { return AuthPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.page */ "kV0F");




const routes = [
    {
        path: '',
        component: _auth_page__WEBPACK_IMPORTED_MODULE_3__["AuthPage"]
    }
];
let AuthPageRoutingModule = class AuthPageRoutingModule {
};
AuthPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AuthPageRoutingModule);



/***/ }),

/***/ "Buvn":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-content>\n<ion-grid *ngIf=\"isOtpAuth\"  class=\"ion-margin-top\" class=\"ion-margin-top\" >\n  <ion-row class=\"auth-margin-top\" >\n    <ion-col size=\"12\">\n      <ion-text class=\"ion-text-center\" color=\"primary\">\n        <h1 style=\"font-size: 70px; font-weight: bold; margin-top: 80px;\">Farmsell</h1>\n   \n      </ion-text>\n      <ion-col  size=\"12\">\n        <img src=\"assets/undraw_on_the_way_re_swjt.svg\" alt=\"\" srcset=\"\">\n      </ion-col>\n    \n\n    </ion-col>\n    <ion-col  size=\"10\" offset=\"1\">\n      <ion-item >\n        <ion-input type=\"number\"  [(ngModel)]=\"mobileNumber\" placeholder=\"Enter your number\" required></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col size=\"12\" offset=\"\">\n      \n      <ion-text  class=\"ion-text-center\" color=\"primary\">\n        <p >By login, you agree to our terms and conditions</p>\n      </ion-text>\n    </ion-col>\n   \n  </ion-row>\n</ion-grid>\n\n\n<ion-grid *ngIf=\"!isOtpAuth\"  class=\"ion-margin-top\" class=\"ion-margin-top\" fixed>\n \n  <ion-text color=\"primary\">\n    <h1>No Network</h1>\n  </ion-text>\n</ion-grid>\n</ion-content>\n\n<ion-footer class=\"ion-no-border\">\n <ion-toolbar >\n  <ion-button *ngIf=\"isOtpAuth\" (click)=\"presentAlertConfirm()\" expand=\"full\" size=\"large\" >\n    Get Otp\n   </ion-button>\n\n   <!-- <ion-button  *ngIf=\"!isOtpAuth\" (click)=\"login()\" expand=\"full\" size=\"large\" >\n    Login\n   </ion-button> -->\n   \n </ion-toolbar>\n  \n\n</ion-footer>");

/***/ }),

/***/ "Yj9t":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPageModule", function() { return AuthPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-routing.module */ "6epW");
/* harmony import */ var _auth_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.page */ "kV0F");







let AuthPageModule = class AuthPageModule {
};
AuthPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__["AuthPageRoutingModule"]
        ],
        declarations: [_auth_page__WEBPACK_IMPORTED_MODULE_6__["AuthPage"]],
    })
], AuthPageModule);



/***/ }),

/***/ "jMPm":
/*!*************************************!*\
  !*** ./src/app/auth/auth.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css2?family=Lato:wght@900&display=swap\");\nbody {\n  font-family: \"Lato\", sans-serif;\n}\n.auth-margin-top {\n  margin-top: 10%;\n}\nion-button {\n  height: 60px;\n  width: 100%;\n  margin: 0px;\n}\nion-img {\n  height: 100px !important;\n}\nion-input {\n  text-align: center;\n  --placeholder-align: center;\n  --placeholder-margin: 0px;\n}\n.my-custom-class {\n  --background: #660000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2F1dGgucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLGtGQUFBO0FBR1I7RUFDSSwrQkFBQTtBQURKO0FBR0E7RUFDSSxlQUFBO0FBQUo7QUFHQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUFKO0FBR0E7RUFDSSx3QkFBQTtBQUFKO0FBR0E7RUFDSSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7QUFBSjtBQUlBO0VBQ0kscUJBQUE7QUFESiIsImZpbGUiOiJhdXRoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxhdG86d2dodEA5MDAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG5cclxuYm9keXtcclxuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmF1dGgtbWFyZ2luLXRvcHtcclxuICAgIG1hcmdpbi10b3A6MTAlO1xyXG59XHJcblxyXG5pb24tYnV0dG9ue1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuaW9uLWltZ3tcclxuICAgIGhlaWdodDogMTAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWlucHV0e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLS1wbGFjZWhvbGRlci1hbGlnbjogY2VudGVyO1xyXG4gICAgLS1wbGFjZWhvbGRlci1tYXJnaW46IDBweDtcclxuICAgIFxyXG59XHJcblxyXG4ubXktY3VzdG9tLWNsYXNzIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzY2MDAwMDtcclxuICB9Il19 */");

/***/ }),

/***/ "kV0F":
/*!***********************************!*\
  !*** ./src/app/auth/auth.page.ts ***!
  \***********************************/
/*! exports provided: AuthPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPage", function() { return AuthPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_auth_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./auth.page.html */ "Buvn");
/* harmony import */ var _auth_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.page.scss */ "jMPm");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/storage.service */ "n90K");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth.service */ "qXBG");










let AuthPage = class AuthPage {
    constructor(alertController, router, http, st, LoadingCtrl, authService, toastController) {
        this.alertController = alertController;
        this.router = router;
        this.http = http;
        this.st = st;
        this.LoadingCtrl = LoadingCtrl;
        this.authService = authService;
        this.toastController = toastController;
        this.isOtpAuth = true;
    }
    ngOnInit() {
    }
    goToOtpPage() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.LoadingCtrl.create({
                message: "Sending OTP...",
            });
            loading.present();
            this.authService.getToken(this.mobileNumber).subscribe(token => {
                console.log(token);
                if (token['status'] === "success") {
                    loading.dismiss();
                    this.router.navigate(['enter-otp', this.mobileNumber]);
                }
                if (token['status'] === "error") {
                    console.log("Something went Wrong!");
                    this.presentToast("Something went wrong!");
                    loading.dismiss();
                }
            }, (error) => {
                this.presentToast(error.message);
                loading.dismiss();
            });
        });
    }
    login() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.LoadingCtrl.create({
                message: "Please wait...",
            });
            loading.present();
            let body = {
                email: this.email,
                password: this.password
            };
            this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].API_URL + '/user/login', body)
                .subscribe((user) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log(user['userId']);
                if (user) {
                    this.st.set('userId', user['userId']).then(userId => {
                        loading.dismiss();
                        this.router.navigate(['tabs', 'tab1']);
                    }).catch(error => {
                        console.log(error);
                    });
                }
            }), (error) => {
                loading.dismiss();
                console.log(error.message);
            });
        });
    }
    presentAlertConfirm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Confirm your number',
                message: `We will be Verifying your phone number <strong>${this.mobileNumber}</strong><br><br>Do you want to continue to verify your phone number?`,
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Okay',
                        handler: () => {
                            console.log('Confirm Okay');
                            this.goToOtpPage();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentToast(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 3000
            });
            toast.present();
        });
    }
};
AuthPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] }
];
AuthPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-auth',
        template: _raw_loader_auth_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_auth_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AuthPage);



/***/ })

}]);
//# sourceMappingURL=auth-auth-module.js.map