(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-edit-profile-edit-profile-module"],{

/***/ "E6H7":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/edit-profile/edit-profile.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Edit</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"settings\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-content [fullscreen]=\"true\">\n    <ion-grid fixed>\n      <ion-row>\n        <ion-col size=\"9\" offset=\"4\">\n       \n   \n     \n        </ion-col>\n  \n        <ion-col size=\"6\">\n          <ion-item>\n            <ion-label position=\"stacked\">First Name</ion-label>\n            <ion-input type=\"text\" placeholder=\"First Name\" [(ngModel)]=\"fName\"></ion-input>\n  \n          </ion-item>\n      \n        </ion-col>\n  \n        <ion-col size=\"6\">\n  \n          <ion-item>\n            <ion-label position=\"stacked\">Last Name</ion-label>\n            <ion-input type=\"text\" placeholder=\"Last  Name\" [(ngModel)]=\"lName\"></ion-input>\n  \n          </ion-item>\n  \n      \n         \n        </ion-col>\n  \n        <ion-col size=\"12\">\n          \n          <ion-item>\n            <ion-label position=\"stacked\">Email</ion-label>\n            <ion-input type=\"email\" placeholder=\"Email\" [(ngModel)]=\"email\" ></ion-input>\n  \n          </ion-item>\n  \n  \n          <ion-item>\n            <ion-label position=\"stacked\">Contact Number</ion-label>\n            <ion-input type=\"text\" placeholder=\"Mobile Number\" [(ngModel)]=\"contactNumber\"></ion-input>\n          </ion-item>\n  \n          <br><br>\n          \n            <ion-input type=\"text\" placeholder=\"Default House Address\" [(ngModel)]=\"houseAddress\">\n          \n            </ion-input>\n\n            <!-- <ion-input type=\"text\" placeholder=\"City\" [(ngModel)]=\"city\">\n          \n            </ion-input>\n\n            <ion-input type=\"text\" placeholder=\"Landmark\" [(ngModel)]=\"landmark\">\n          \n            </ion-input>\n\n            <ion-input type=\"text\" placeholder=\"Colony\" [(ngModel)]=\"colony\">\n          \n            </ion-input>\n\n            <ion-input type=\"text\" placeholder=\"Street Name\" [(ngModel)]=\"streetName\">\n          \n            </ion-input>\n            -->\n\n          <ion-button (click)=\"saveProfile()\" expand=\"full\">\n            Save\n          </ion-button>\n  \n          \n        </ion-col>\n      </ion-row>\n    </ion-grid>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "c+3P":
/*!*********************************************************************!*\
  !*** ./src/app/account/edit-profile/edit-profile-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: EditProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePageRoutingModule", function() { return EditProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _edit_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-profile.page */ "sGd/");




const routes = [
    {
        path: '',
        component: _edit_profile_page__WEBPACK_IMPORTED_MODULE_3__["EditProfilePage"]
    }
];
let EditProfilePageRoutingModule = class EditProfilePageRoutingModule {
};
EditProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditProfilePageRoutingModule);



/***/ }),

/***/ "rCJP":
/*!*************************************************************!*\
  !*** ./src/app/account/edit-profile/edit-profile.module.ts ***!
  \*************************************************************/
/*! exports provided: EditProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePageModule", function() { return EditProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-profile-routing.module */ "c+3P");
/* harmony import */ var _edit_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-profile.page */ "sGd/");







let EditProfilePageModule = class EditProfilePageModule {
};
EditProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditProfilePageRoutingModule"]
        ],
        declarations: [_edit_profile_page__WEBPACK_IMPORTED_MODULE_6__["EditProfilePage"]]
    })
], EditProfilePageModule);



/***/ }),

/***/ "sGd/":
/*!***********************************************************!*\
  !*** ./src/app/account/edit-profile/edit-profile.page.ts ***!
  \***********************************************************/
/*! exports provided: EditProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePage", function() { return EditProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_profile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-profile.page.html */ "E6H7");
/* harmony import */ var _edit_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-profile.page.scss */ "wQXn");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/auth/auth.service */ "qXBG");
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/storage.service */ "n90K");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "AytR");










let EditProfilePage = class EditProfilePage {
    constructor(authService, storage, userService, loadingCtrl, http, toastController) {
        this.authService = authService;
        this.storage = storage;
        this.userService = userService;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.toastController = toastController;
        this.pincodeExists = false;
        this.verificationStatus = false;
        this.couponCode = "NO Code Code!";
        this.walletCashBackAvailable = 0;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.profileId = yield this.storage.get('userId');
            console.log("PROFILEID: " + this.profileId);
            this.getUserProfile(this.profileId);
            this.getUserAddresses();
        });
    }
    saveProfile() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let body = {
                fName: this.fName,
                lName: this.lName,
                email: this.email,
                contactNumber: this.contactNumber,
                houseAddress: this.houseAddress,
                city: this.city,
                colony: this.colony,
                streetName: this.streetName,
                landmark: this.landmark,
            };
            const loading = yield this.loadingCtrl.create({
                message: "Creating profile...",
            });
            loading.present();
            this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].API_URL + '/user/profiles/' + this.profileId, body)
                .subscribe(user => {
                console.log(user);
                loading.dismiss();
                this.presentToast('Profile Updated Successfully');
            }, (error) => {
                console.log(error.error);
                loading.dismiss();
                this.presentToast('Something went wrong!');
            });
        });
    }
    onChangeDefaultHouseAddress() {
    }
    getUserProfile(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: "Getting your profile...",
                duration: 3000
            });
            loading.present();
            this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].API_URL + "/user/profile/" + id)
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
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].API_URL + "/address/" + this.profileId)
            .subscribe(user => {
            console.log(user);
        });
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
EditProfilePage.ctorParameters = () => [
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }
];
EditProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-edit-profile',
        template: _raw_loader_edit_profile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EditProfilePage);



/***/ }),

/***/ "wQXn":
/*!*************************************************************!*\
  !*** ./src/app/account/edit-profile/edit-profile.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXByb2ZpbGUucGFnZS5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=account-edit-profile-edit-profile-module.js.map