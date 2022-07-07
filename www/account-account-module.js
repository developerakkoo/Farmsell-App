(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-account-module"],{

/***/ "+aji":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-title>\n      My Profile\n    </ion-title>\n    <ion-button (click)=\"refresh()\" slot=\"end\" fill=\"clear\">\n      <ion-icon   color=\"light\" slot=\"icon-only\" name=\"refresh\"></ion-icon>\n    </ion-button>\n  <ion-button slot=\"end\" fill=\"clear\" (click)=\"openSettings()\">\n    <ion-icon color=\"light\" slot=\"icon-only\" name=\"ellipsis-vertical-outline\"></ion-icon>\n  </ion-button>\n  <ion-buttons slot=\"start\">\n    <ion-back-button defaultHref=\"/tabs/profile\"></ion-back-button>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col size=\"9\" offset=\"4\">\n        <ion-avatar style=\"width: 100px; height: 100px;\">\n          <img src=\"assets/profile.png\" />\n        </ion-avatar>\n \n   \n      </ion-col>\n\n      <ion-col size=\"6\">\n        <ion-item>\n          <ion-label position=\"stacked\">First Name</ion-label>\n          <ion-input type=\"text\" placeholder=\"First Name\" [(ngModel)]=\"fName\"></ion-input>\n\n        </ion-item>\n    \n      </ion-col>\n\n      <ion-col size=\"6\">\n\n        <ion-item>\n          <ion-label position=\"stacked\">Last Name</ion-label>\n          <ion-input type=\"text\" placeholder=\"Last  Name\" [(ngModel)]=\"lName\"></ion-input>\n\n        </ion-item>\n\n    \n       \n      </ion-col>\n\n      <ion-col size=\"12\">\n        \n        <ion-item>\n          <ion-label position=\"stacked\">Email</ion-label>\n          <ion-input type=\"email\" placeholder=\"Email\" [(ngModel)]=\"email\" ></ion-input>\n\n        </ion-item>\n\n\n        <ion-item>\n          <ion-label position=\"stacked\">Contact Number</ion-label>\n          <ion-input type=\"text\" placeholder=\"Mobile Number\" [(ngModel)]=\"contactNumber\"></ion-input>\n\n\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"stacked\">House Address</ion-label>\n          <ion-input type=\"text\" placeholder=\"Default House Address\" [(ngModel)]=\"houseAddress\"></ion-input>\n\n\n        </ion-item>\n\n        \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n");

/***/ }),

/***/ "jcJX":
/*!*******************************************!*\
  !*** ./src/app/account/account.module.ts ***!
  \*******************************************/
/*! exports provided: AccountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageModule", function() { return AccountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account-routing.module */ "sGj0");
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account.page */ "mdzQ");







let AccountPageModule = class AccountPageModule {
};
AccountPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _account_routing_module__WEBPACK_IMPORTED_MODULE_5__["AccountPageRoutingModule"]
        ],
        declarations: [_account_page__WEBPACK_IMPORTED_MODULE_6__["AccountPage"]]
    })
], AccountPageModule);



/***/ }),

/***/ "mdzQ":
/*!*****************************************!*\
  !*** ./src/app/account/account.page.ts ***!
  \*****************************************/
/*! exports provided: AccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPage", function() { return AccountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_account_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./account.page.html */ "+aji");
/* harmony import */ var _account_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account.page.scss */ "n3U/");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../auth/auth.service */ "qXBG");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/storage.service */ "n90K");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/user.service */ "qfBg");











let AccountPage = class AccountPage {
    constructor(router, authService, storage, userService, loadingCtrl, http, platform, toastController) {
        this.router = router;
        this.authService = authService;
        this.storage = storage;
        this.userService = userService;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.platform = platform;
        this.toastController = toastController;
        this.pincodeExists = false;
        this.verificationStatus = false;
        this.couponCode = "NO Code Code!";
        this.walletCashBackAvailable = 0;
        this.pincodes = [
            422101,
            411041,
            433222,
            345678,
            123456
        ];
        this.isUserAccountExists = false;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.profileId = yield this.storage.get('userId');
            console.log("PROFILEID: " + this.profileId);
            this.getUserProfile(this.profileId);
            this.getUserAddresses();
        });
    }
    ionViewDidEnter() {
        this.subscription = this.platform.backButton.subscribeWithPriority(9999, () => {
            // do nothing
        });
        this.getUserProfile(this.profileId);
    }
    ionViewWillLeave() {
        this.subscription.unsubscribe();
    }
    onFileChangeEvent(event) {
        console.log(event);
        this.profile = event.target.files[0];
    }
    refresh() {
        this.getUserProfile(this.profileId);
    }
    getUserProfile(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: "Getting your profile...",
                duration: 3000
            });
            loading.present();
            this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].API_URL + "/user/profile/" + id)
                .subscribe(user => {
                console.log(user);
                if (user) {
                    this.fName = user['user'].fName;
                    this.lName = user['user'].lName;
                    this.email = user['user'].email;
                    this.contactNumber = user['user'].contactNumber;
                    this.houseAddress = user['user'].houseAddress;
                    loading.dismiss();
                }
            }, (err) => {
                console.log(err);
                loading.dismiss();
            });
        });
    }
    getUserAddresses() {
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].API_URL + "/address/" + this.profileId)
            .subscribe(user => {
            console.log(user);
        });
    }
    logOut() {
        this.router.navigate(['/']);
    }
    openSettings() {
        this.router.navigate(['settings']);
    }
    presentToast(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 1000
            });
            toast.present();
        });
    }
};
AccountPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_9__["StorageService"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] }
];
AccountPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-account',
        template: _raw_loader_account_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_account_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AccountPage);



/***/ }),

/***/ "n3U/":
/*!*******************************************!*\
  !*** ./src/app/account/account.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".file-input-hidden {\n  position: absolute;\n  opacity: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FjY291bnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FBQ0oiLCJmaWxlIjoiYWNjb3VudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsZS1pbnB1dC1oaWRkZW57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG59Il19 */");

/***/ }),

/***/ "sGj0":
/*!***************************************************!*\
  !*** ./src/app/account/account-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AccountPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageRoutingModule", function() { return AccountPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account.page */ "mdzQ");




const routes = [
    {
        path: '',
        component: _account_page__WEBPACK_IMPORTED_MODULE_3__["AccountPage"]
    },
];
let AccountPageRoutingModule = class AccountPageRoutingModule {
};
AccountPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AccountPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=account-account-module.js.map