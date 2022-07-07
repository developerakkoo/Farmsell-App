(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/akshay/Farmsell/src/main.ts */"zUnb");


/***/ }),

/***/ "6cjs":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic-super-tabs/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./super-tab-button_2.entry.js": [
		"UWEh",
		"common",
		0
	],
	"./super-tab-indicator.entry.js": [
		"afC3",
		1
	],
	"./super-tab_3.entry.js": [
		"XRr/",
		"common",
		2
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "6cjs";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    API_URL: "http://ec2-13-59-85-143.us-east-2.compute.amazonaws.com:8080",
    //API_URL:"http://localhost:8080",
    mapsKey: 'AIzaSyBKeEbb4a-cKO954EkTfWV53JyxlxSLxD0',
    placesKey: 'AIzaSyAeZcHEQnFmq_Peg_4JWL7k-95MVmoaoVU',
    directionsKey: 'AIzaSyBL52JqDf1Wk13krmyXvL_vh00yKzXaw6U',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/storage.service */ "n90K");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/user.service */ "qfBg");








let AppComponent = class AppComponent {
    constructor(storage, router, userService, alertCtrl, platform) {
        this.storage = storage;
        this.router = router;
        this.userService = userService;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.isOtpValid = false;
        this.platform.backButton.subscribeWithPriority(9999, () => {
            this.presentAlertConfirm();
            document.addEventListener('backbutton', function (event) {
                event.preventDefault();
                event.stopPropagation();
                console.log('hello');
            }, false);
        });
        this.storage.get('userId').then(user => {
            if (user == null) {
            }
            else {
                console.log("USERID FOUND " + user);
                this.router.navigate(['tabs', 'tab1']);
            }
        }).catch(err => {
            this.router.navigate(['']);
            console.log('No User ID');
            this.storage.clear();
        });
    }
    presentAlertConfirm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Confirm!',
                message: 'Do you want to exit the app?',
                buttons: [
                    {
                        text: 'Cancel',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'Okay',
                        handler: () => {
                            console.log('Confirm Okay');
                            navigator['app'].exitApp();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] }
];
AppComponent.propDecorators = {
    routerOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRouterOutlet"],] }]
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-super-tabs/angular */ "k6Iy");
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-otp-input */ "9OaD");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-socket-io */ "7JkF");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "Bfh1");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/network/ngx */ "kwrG");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "M2ZX");
/* harmony import */ var _awesome_cordova_plugins_open_native_settings_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @awesome-cordova-plugins/open-native-settings/ngx */ "+nd2");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");
















const config = { url: 'http://ec2-13-59-85-143.us-east-2.compute.amazonaws.com:8080', options: {} };
// url: 'http://ec2-3-135-20-54.us-east-2.compute.amazonaws.com:8080'
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_7__["SuperTabsModule"].forRoot(),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_10__["SocketIoModule"].forRoot(config), _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_15__["IonicStorageModule"].forRoot({
                name: 'mydb'
            }), ng_otp_input__WEBPACK_IMPORTED_MODULE_8__["NgOtpInputModule"],],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"], }, _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_11__["Geolocation"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_13__["NativeStorage"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_12__["Network"], _awesome_cordova_plugins_open_native_settings_ngx__WEBPACK_IMPORTED_MODULE_14__["OpenNativeSettings"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		3
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		4
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		5
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		6
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		7
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		8
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		9
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		10
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		11
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		12
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		13
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		14
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		15
	],
	"./ion-img.entry.js": [
		"wHD8",
		16
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		17
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		18
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		19
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		20
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		21
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		22
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		23
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		24
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		25
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		26
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		27
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		28
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		29
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		30
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		31
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		32
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		33
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		34
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		35
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		36
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		37
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		38
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		39
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		40
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		41
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		42
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		43
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		44
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		45
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "n90K":
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");



let StorageService = class StorageService {
    constructor(storage) {
        this.storage = storage;
        this._storage = null;
        this.init();
    }
    init() {
        this.storage.create();
    }
    set(key, value) {
        var _a;
        return (_a = this.storage) === null || _a === void 0 ? void 0 : _a.set(key, value);
    }
    get(key) {
        var _a;
        return (_a = this.storage) === null || _a === void 0 ? void 0 : _a.get(key);
    }
    delete(key) {
        var _a;
        return (_a = this.storage) === null || _a === void 0 ? void 0 : _a.remove(key);
    }
    clear() {
        var _a;
        return (_a = this.storage) === null || _a === void 0 ? void 0 : _a.clear();
    }
};
StorageService.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_2__["Storage"] }
];
StorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], StorageService);



/***/ }),

/***/ "qfBg":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage.service */ "n90K");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");





let UserService = class UserService {
    constructor(http, storage) {
        this.http = http;
        this.storage = storage;
        this.URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL;
    }
    isUserMobileNumberVerified() {
        return this.storage.get('isOtpValid');
    }
    postUser(userId, fName, lName, email, contactNumber, verificationStatus, couponCode, walletCashBackAvailable) {
        const formdata = new FormData();
        formdata.append('userId', userId);
        // formdata.append('file', file, file.name);
        formdata.append('fName', fName);
        formdata.append('lName', lName);
        formdata.append('email', email);
        formdata.append('contactNumber', contactNumber);
        formdata.append('verificationStatus', verificationStatus.toString());
        formdata.append('couponCode', couponCode);
        formdata.append('walletCashbackAvailable', walletCashBackAvailable.toString());
        return this.http.post(this.URL + '/user/profiles', formdata);
    }
    getUserById(id) {
        return this.http.get(this.URL + '/user/profile/' + id);
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] }
];
UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], UserService);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const routes = [
    {
        path: 'tabs',
        loadChildren: () => __webpack_require__.e(/*! import() | tabs-tabs-module */ "tabs-tabs-module").then(__webpack_require__.bind(null, /*! ./tabs/tabs.module */ "hO9l")).then(m => m.TabsPageModule)
    },
    {
        path: 'settings',
        loadChildren: () => __webpack_require__.e(/*! import() | settings-settings-module */ "settings-settings-module").then(__webpack_require__.bind(null, /*! ./settings/settings.module */ "7wo0")).then(m => m.SettingsPageModule)
    },
    {
        path: 'history',
        loadChildren: () => __webpack_require__.e(/*! import() | history-history-module */ "history-history-module").then(__webpack_require__.bind(null, /*! ./history/history.module */ "9u+z")).then(m => m.HistoryPageModule)
    },
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() | auth-auth-module */[__webpack_require__.e("common"), __webpack_require__.e("auth-auth-module")]).then(__webpack_require__.bind(null, /*! ./auth/auth.module */ "Yj9t")).then(m => m.AuthPageModule)
    },
    {
        path: 'enter-otp/:number',
        loadChildren: () => Promise.all(/*! import() | enter-otp-enter-otp-module */[__webpack_require__.e("common"), __webpack_require__.e("enter-otp-enter-otp-module")]).then(__webpack_require__.bind(null, /*! ./enter-otp/enter-otp.module */ "6c2S")).then(m => m.EnterOtpPageModule)
    },
    {
        path: 'order-received',
        loadChildren: () => __webpack_require__.e(/*! import() | order-received-order-received-module */ "order-received-order-received-module").then(__webpack_require__.bind(null, /*! ./order-received/order-received.module */ "WtF+")).then(m => m.OrderReceivedPageModule)
    },
    {
        path: 'location',
        loadChildren: () => __webpack_require__.e(/*! import() | location-location-module */ "location-location-module").then(__webpack_require__.bind(null, /*! ./location/location.module */ "cf3W")).then(m => m.LocationPageModule)
    },
    {
        path: 'location/:orderId',
        loadChildren: () => __webpack_require__.e(/*! import() | location-location-module */ "location-location-module").then(__webpack_require__.bind(null, /*! ./location/location.module */ "cf3W")).then(m => m.LocationPageModule)
    },
    {
        path: 'order-detail/:order-id/:id',
        loadChildren: () => __webpack_require__.e(/*! import() | order-detail-order-detail-module */ "order-detail-order-detail-module").then(__webpack_require__.bind(null, /*! ./order-detail/order-detail.module */ "4aIR")).then(m => m.OrderDetailPageModule)
    },
    {
        path: 'promo-code',
        loadChildren: () => __webpack_require__.e(/*! import() | promo-code-promo-code-module */ "promo-code-promo-code-module").then(__webpack_require__.bind(null, /*! ./promo-code/promo-code.module */ "ilSz")).then(m => m.PromoCodePageModule)
    },
    {
        path: 'help',
        loadChildren: () => __webpack_require__.e(/*! import() | help-help-module */ "help-help-module").then(__webpack_require__.bind(null, /*! ./help/help.module */ "7XJi")).then(m => m.HelpPageModule)
    },
    {
        path: 'edit-profile',
        loadChildren: () => Promise.all(/*! import() | account-edit-profile-edit-profile-module */[__webpack_require__.e("common"), __webpack_require__.e("account-edit-profile-edit-profile-module")]).then(__webpack_require__.bind(null, /*! ./account/edit-profile/edit-profile.module */ "rCJP")).then(m => m.EditProfilePageModule)
    },
    {
        path: 'address-modal',
        loadChildren: () => Promise.all(/*! import() | address-modal-address-modal-module */[__webpack_require__.e("common"), __webpack_require__.e("address-modal-address-modal-module")]).then(__webpack_require__.bind(null, /*! ./address-modal/address-modal.module */ "PGuY")).then(m => m.AddressModalPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map