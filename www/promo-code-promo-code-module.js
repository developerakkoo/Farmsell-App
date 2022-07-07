(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["promo-code-promo-code-module"],{

/***/ "8MhM":
/*!*********************************************************!*\
  !*** ./src/app/promo-code/promo-code-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: PromoCodePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromoCodePageRoutingModule", function() { return PromoCodePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _promo_code_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./promo-code.page */ "nOzO");




const routes = [
    {
        path: '',
        component: _promo_code_page__WEBPACK_IMPORTED_MODULE_3__["PromoCodePage"]
    }
];
let PromoCodePageRoutingModule = class PromoCodePageRoutingModule {
};
PromoCodePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PromoCodePageRoutingModule);



/***/ }),

/***/ "MZqS":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/promo-code/promo-code.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Promo Code Available</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/tab2\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-item style=\"border: 2px dashed grey;\" lines=\"full\">\n    <ion-input #input  type=\"text\" placeholder=\"Enter Promo Code\"></ion-input>\n    <ion-button #button (click)=\"onApplyPromo()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n      Apply\n    </ion-button>\n  </ion-item>\n</ion-header>\n\n<ion-content>\n<ion-list>\n  <ion-card class=\"ion-no-margin\">\n    <ion-card-header>\n      <ion-card-subtitle>Get 50% off</ion-card-subtitle>\n      <ion-card-title></ion-card-title>\n      <p>Valid on orders with items worth {{150| currency:'INR'}} or more.</p>\n    </ion-card-header>\n    <ion-card-content class=\"ion-no-margin\">\n      <ion-grid fixed>\n        <ion-row>\n          <ion-col size=\"9\">\n            <ion-badge style=\"padding: 20px; border: 2px dashed grey; width: 150px;\" color=\"light\" mode=\"ios\">ALL50</ion-badge>\n            <p>you will save {{56 | currency:'INR'}} on this order.</p>\n           </ion-col>\n          <ion-col size=\"3\"> \n            <ion-button  (click)=\"onClick()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n              Apply\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class=\"ion-no-margin\">\n    <ion-card-header>\n      <ion-card-subtitle>Get 10% off</ion-card-subtitle>\n      <ion-card-title></ion-card-title>\n      <p>Valid on orders with items worth {{100| currency:'INR'}} or more.</p>\n    </ion-card-header>\n    <ion-card-content class=\"ion-no-margin\">\n      <ion-grid fixed>\n        <ion-row>\n          <ion-col size=\"9\">\n            <ion-badge style=\"padding: 20px; border: 2px dashed grey; width: 150px;\" color=\"light\" mode=\"ios\">ALL50</ion-badge>\n            <p>you will save {{15 | currency:'INR'}} on this order.</p>\n           </ion-col>\n          <ion-col size=\"3\"> \n            <ion-button  (click)=\"onClick()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n              Apply\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n</ion-list>\n</ion-content>\n");

/***/ }),

/***/ "e/Ht":
/*!*************************************************!*\
  !*** ./src/app/promo-code/promo-code.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9tby1jb2RlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "ilSz":
/*!*************************************************!*\
  !*** ./src/app/promo-code/promo-code.module.ts ***!
  \*************************************************/
/*! exports provided: PromoCodePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromoCodePageModule", function() { return PromoCodePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _promo_code_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./promo-code-routing.module */ "8MhM");
/* harmony import */ var _promo_code_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./promo-code.page */ "nOzO");







let PromoCodePageModule = class PromoCodePageModule {
};
PromoCodePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _promo_code_routing_module__WEBPACK_IMPORTED_MODULE_5__["PromoCodePageRoutingModule"]
        ],
        declarations: [_promo_code_page__WEBPACK_IMPORTED_MODULE_6__["PromoCodePage"]]
    })
], PromoCodePageModule);



/***/ }),

/***/ "nOzO":
/*!***********************************************!*\
  !*** ./src/app/promo-code/promo-code.page.ts ***!
  \***********************************************/
/*! exports provided: PromoCodePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromoCodePage", function() { return PromoCodePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_promo_code_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./promo-code.page.html */ "MZqS");
/* harmony import */ var _promo_code_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./promo-code.page.scss */ "e/Ht");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let PromoCodePage = class PromoCodePage {
    constructor() { }
    ngOnInit() {
    }
    onApplyPromo() {
    }
};
PromoCodePage.ctorParameters = () => [];
PromoCodePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-promo-code',
        template: _raw_loader_promo_code_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_promo_code_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PromoCodePage);



/***/ })

}]);
//# sourceMappingURL=promo-code-promo-code-module.js.map