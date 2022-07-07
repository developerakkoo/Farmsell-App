(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["address-modal-address-modal-module"],{

/***/ "PGuY":
/*!*******************************************************!*\
  !*** ./src/app/address-modal/address-modal.module.ts ***!
  \*******************************************************/
/*! exports provided: AddressModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressModalPageModule", function() { return AddressModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _address_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./address-modal-routing.module */ "zWht");
/* harmony import */ var _address_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./address-modal.page */ "Xerf");







let AddressModalPageModule = class AddressModalPageModule {
};
AddressModalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _address_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddressModalPageRoutingModule"]
        ],
        declarations: [_address_modal_page__WEBPACK_IMPORTED_MODULE_6__["AddressModalPage"]]
    })
], AddressModalPageModule);



/***/ }),

/***/ "zWht":
/*!***************************************************************!*\
  !*** ./src/app/address-modal/address-modal-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: AddressModalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressModalPageRoutingModule", function() { return AddressModalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _address_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./address-modal.page */ "Xerf");




const routes = [
    {
        path: '',
        component: _address_modal_page__WEBPACK_IMPORTED_MODULE_3__["AddressModalPage"]
    }
];
let AddressModalPageRoutingModule = class AddressModalPageRoutingModule {
};
AddressModalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddressModalPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=address-modal-address-modal-module.js.map