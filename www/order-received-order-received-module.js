(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-received-order-received-module"],{

/***/ "9ydS":
/*!*********************************************************!*\
  !*** ./src/app/order-received/order-received.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlci1yZWNlaXZlZC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "G99y":
/*!*****************************************************************!*\
  !*** ./src/app/order-received/order-received-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: OrderReceivedPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderReceivedPageRoutingModule", function() { return OrderReceivedPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _order_received_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-received.page */ "HJgm");




const routes = [
    {
        path: '',
        component: _order_received_page__WEBPACK_IMPORTED_MODULE_3__["OrderReceivedPage"]
    }
];
let OrderReceivedPageRoutingModule = class OrderReceivedPageRoutingModule {
};
OrderReceivedPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrderReceivedPageRoutingModule);



/***/ }),

/***/ "HJgm":
/*!*******************************************************!*\
  !*** ./src/app/order-received/order-received.page.ts ***!
  \*******************************************************/
/*! exports provided: OrderReceivedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderReceivedPage", function() { return OrderReceivedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_order_received_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./order-received.page.html */ "iuOk");
/* harmony import */ var _order_received_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-received.page.scss */ "9ydS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let OrderReceivedPage = class OrderReceivedPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    viewOrders() {
        this.router.navigate(['history']);
    }
};
OrderReceivedPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
OrderReceivedPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-order-received',
        template: _raw_loader_order_received_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_order_received_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OrderReceivedPage);



/***/ }),

/***/ "WtF+":
/*!*********************************************************!*\
  !*** ./src/app/order-received/order-received.module.ts ***!
  \*********************************************************/
/*! exports provided: OrderReceivedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderReceivedPageModule", function() { return OrderReceivedPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _order_received_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-received-routing.module */ "G99y");
/* harmony import */ var _order_received_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-received.page */ "HJgm");







let OrderReceivedPageModule = class OrderReceivedPageModule {
};
OrderReceivedPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _order_received_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderReceivedPageRoutingModule"]
        ],
        declarations: [_order_received_page__WEBPACK_IMPORTED_MODULE_6__["OrderReceivedPage"]]
    })
], OrderReceivedPageModule);



/***/ }),

/***/ "iuOk":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order-received/order-received.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Order Placed Successfully</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-grid fixed>\n  <ion-row>\n    <ion-col size=\"6\" offset=\"3\">\n      <ion-text class=\"ion-text-center\" color=\"primary\">\n        <h1>Thank you for shopping with us!</h1>\n        <ion-button (click)=\"viewOrders()\" expand=\"block\" size=\"large\">\n          View Order\n        </ion-button>\n      </ion-text>\n    </ion-col>\n    <ion-col size=\"6\"></ion-col>\n  </ion-row>\n</ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=order-received-order-received-module.js.map