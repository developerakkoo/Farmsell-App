(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["history-history-module"],{

/***/ "9u+z":
/*!*******************************************!*\
  !*** ./src/app/history/history.module.ts ***!
  \*******************************************/
/*! exports provided: HistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPageModule", function() { return HistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _history_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./history-routing.module */ "nQSQ");
/* harmony import */ var _history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./history.page */ "Z2Lo");







let HistoryPageModule = class HistoryPageModule {
};
HistoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _history_routing_module__WEBPACK_IMPORTED_MODULE_5__["HistoryPageRoutingModule"]
        ],
        declarations: [_history_page__WEBPACK_IMPORTED_MODULE_6__["HistoryPage"]]
    })
], HistoryPageModule);



/***/ }),

/***/ "M4g1":
/*!*******************************************!*\
  !*** ./src/app/history/history.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoaXN0b3J5LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "Z2Lo":
/*!*****************************************!*\
  !*** ./src/app/history/history.page.ts ***!
  \*****************************************/
/*! exports provided: HistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPage", function() { return HistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_history_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./history.page.html */ "kofg");
/* harmony import */ var _history_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./history.page.scss */ "M4g1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/storage.service */ "n90K");









let HistoryPage = class HistoryPage {
    constructor(storage, router, http, loadingCtrl) {
        this.storage = storage;
        this.router = router;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].API_URL;
        this.cart = [];
    }
    ngOnInit() {
        this.getUserId();
    }
    IonViewWillEnter() {
        this.getUserId();
        this.getOrders();
    }
    getUserId() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.userId = yield this.storage.get("userId");
            console.log("USERID: ", this.userId);
            this.getOrders();
        });
    }
    getOrders() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create({
                message: "Loading orders..."
            });
            loading.present();
            this.http.get(this.URL + '/place/' + this.userId).subscribe((order) => {
                console.log(order['order']);
                loading.dismiss();
                this.cart = order['order'];
            });
        });
    }
    openOrderDetails(event, order) {
        console.log(order._id);
        this.router.navigate(['order-detail', order.orderId, order._id]);
    }
};
HistoryPage.ctorParameters = () => [
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] }
];
HistoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-history',
        template: _raw_loader_history_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_history_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HistoryPage);



/***/ }),

/***/ "kofg":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/history/history.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Orders History</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/tab1\"></ion-back-button>\n     \n    </ion-buttons>\n    <ion-button  (click)=\"getOrders()\" slot=\"end\">\n      <ion-icon slot=\"end\" slot=\"icon-only\" name=\"refresh\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-grid fixed>\n  <ion-row>\n    <ion-col *ngIf=\"cart\" size=\"12\">\n      <ion-list>\n        <ion-item class=\"ion-no-padding\"  *ngFor=\"let item of cart\" detail (click)=\"openOrderDetails($event, item)\">\n\n          <ion-grid fixed>\n            <ion-row>\n              <!-- <ion-col size=\"3\">\n              \n                  <img [src]=\"item.productId.imageUrl\" />\n              \n              </ion-col> -->\n              <ion-col size=\"9\">\n                <ion-label>\n                  <p style=\"font-size: 15px;\" >Order Id:-  {{ item.orderId}} </p>\n                </ion-label>\n                <ion-text color=\"primary\" >\n                  \n                </ion-text>\n                <ion-label><p> Delivery By: {{ item.slot.createdDate | date:'mediumDate'}} </p>\n                  <p style=\"color: grey;\">{{item.status}}</p>  </ion-label>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        \n          \n        </ion-item>\n      </ion-list>\n    </ion-col>\n    <ion-col *ngIf=\"cart.length <= 0\" size=\"12\">\n      <ion-text class=\"ion-text-center\" color=\"primary\">\n        <h5>No Orders available</h5>\n      </ion-text>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "nQSQ":
/*!***************************************************!*\
  !*** ./src/app/history/history-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HistoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPageRoutingModule", function() { return HistoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _history_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./history.page */ "Z2Lo");




const routes = [
    {
        path: '',
        component: _history_page__WEBPACK_IMPORTED_MODULE_3__["HistoryPage"]
    }
];
let HistoryPageRoutingModule = class HistoryPageRoutingModule {
};
HistoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HistoryPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=history-history-module.js.map