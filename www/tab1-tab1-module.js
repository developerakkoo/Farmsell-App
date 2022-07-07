(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "8MT7":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\" [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-title style=\"font-weight: bold;\" color=\"dark\" > Home </ion-title>\n   <!-- <ion-button fill=\"clear\" slot=\"end\" (click)=\"onClick()\">\n     <ion-icon color=\"light\" slot=\"icon-only\" name=\"filter\"></ion-icon>\n   </ion-button> -->\n    <ion-button fill=\"clear\" slot=\"end\" (click)=\"showSearchBar()\">\n      <ion-icon color=\"dark\" slot=\"icon-only\" name=\"search\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollX]=\"true\" [scrollY]=\"true\">\n\n  <ion-searchbar\n\n    color=\"primary\"\n    \n    *ngIf=\"isSearchBarShown\"\n    showCancelButton=\"always\"\n    placeholder=\"Search\"\n\n    (ionChange)=\"onSearchChange($event)\"\n    (ionCancel)=\"onSearchBlur($event)\"\n    (ionBlur)=\"onSearchBlur($event)\"\n  >\n  </ion-searchbar>\n  <ion-segment\n    \n    [(ngModel)]=\"selectedSegment\"\n    [swipeGesture]=\"true\"\n    scrollable\n    value=\"segmentList[0]\"\n  >\n    <ion-segment-button\n      #segment\n      *ngFor=\"let item of segmentList; let i = index\"\n      [id]=\"i\"\n      [value]=\"item\"\n      (click)=\"segmentChanged($event,item, i)\"\n    >\n      <ion-label> {{item}} </ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  \n  <ion-slides #slide (ionSlideDidChange)=\"ionSlideDidChange($event)\" class=\"ion-no-padding\">\n    <ion-slide  *ngFor=\"let item of slideList\">\n      <ion-grid>\n        <ion-row>\n          <ion-col *ngIf=\"product\" size=\"12\">\n            \n\n            <ion-card class=\"ion-no-padding\" *ngFor=\"let item of product\" >\n              <ion-card-content class=\"ion-no-margin\" class=\"ion-no-padding\">\n                <ion-grid>\n                  <ion-row\n                    class=\"ion-no-margin\"\n                    class=\"ion-no-padding\"\n                    class=\"ion-align-items-center\"\n                  >\n                    <ion-col\n                      class=\"ion-no-margin\"\n                      class=\"ion-no-padding\"\n                      size=\"4\"\n                      class=\"ion-align-self-center\"\n                    >\n                      <img\n                        style=\"width: 100%; height: 100px;\"\n                        [src]=\"item.imageUrl\"\n                      />\n                    </ion-col>\n\n                    <ion-col\n                      class=\"ion-margin-start\"\n                      size=\"8\"\n                      class=\"ion-align-self-end\"\n                    >\n                      <ion-row\n                        class=\"ion-padding-top\"\n                        class=\"ion-align-items-start\"\n                      >\n                        <ion-col size=\"12\">\n                          <div class=\"ion-text-right\">\n                            <p *ngIf=\"item.inStock === 'true'\">In Stock</p>\n                            <p style=\"color: red\" *ngIf=\"item.inStock === 'false'\">\n                              Out Of Stock\n                            </p>\n                          </div>\n                        </ion-col>\n                      </ion-row>\n\n                      <ion-row class=\"ion-align-items-start\">\n                        <ion-col size=\"12\">\n                          <ion-text class=\"ion-text-left\" color=\"primary\">\n                            <h2>{{item.title}}</h2>\n                          </ion-text>\n                        </ion-col>\n                      </ion-row>\n\n                      <ion-row class=\"ion-align-items-start\">\n                        <ion-col size=\"12\">\n                          <ion-select\n                          [disabled]=\"item.inStock === 'false'\"\n                          [interfaceOptions]=\"customAlertOptions\"\n                            style=\"border: 1px solid grey; width: 100%; height: auto;\"\n                            color=\"dark\"\n                            placeholder=\"Quantity\"\n                            interface=\"action-sheet\"\n                            (ionChange)=\"quantitySelect($event, item)\"\n                            (click)=\"quantitySelect(item)\"\n                            value=\"1\"\n                          >\n                            <ion-select-option #item value=\"1\" *ngFor=\"let i of item.quantity\" \n                              >{{i.units}} - <strong> {{i.discountedPrice | currency: \"INR\"\n                              }} </strong></ion-select-option>\n\n                          </ion-select>\n                        </ion-col>\n                      </ion-row>\n\n                      <ion-row class=\"ion-align-items-start\">\n                        <ion-col class=\"ion-align-self-start\" size=\"6\">\n                          <div class=\"ion-text-start\">\n                            <ion-text color=\"primary\">\n                              <p style=\"text-decoration: line-through\">\n                                {{item.price | currency:'INR'}}\n                              </p>\n                            </ion-text>\n                            <ion-text style=\"font-size: 16px\" color=\"dark\">\n                              {{item.discountedPrice | currency:'INR'}}\n                            </ion-text>\n                          </div>\n                        </ion-col>\n\n                        <ion-col size=\"6\">\n                          <div class=\"ion-text-end\">\n                            <ion-button\n                            *ngIf=\"item.inStock === 'true'\"\n                              size=\"default\"\n                              color=\"warning\"\n                              (click)=\"addProductToCart(item)\"\n                              fill=\"solid\"\n                            >\n                              ADD\n                            </ion-button>\n\n                            <ion-button\n                            *ngIf=\"item.inStock === 'false'\"\n                              size=\"default\"\n                              disabled                             \n                              fill=\"solid\"\n                              color=\"warning\"\n                            >\n                              ADD\n                            </ion-button>\n                          </div>\n                        </ion-col>\n                      </ion-row>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-slide>\n  </ion-slides>\n\n   <!-- fab placed to the bottom end -->\n   <ion-fab  *ngIf=\"totalCartItems > 0\" routerLink=\"/tabs/tab2\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n     <ion-fab-button class=\"animate__animated animate__bounce\">\n       <ion-badge color=\"light\" mode=\"ios\"> {{totalCartItems}} </ion-badge>\n       <ion-icon name=\"cart\">\n\n      </ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n");

/***/ }),

/***/ "Mzl2":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab1.page.html */ "8MT7");
/* harmony import */ var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1.page.scss */ "rWyk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/product.service */ "Gdn9");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/storage.service */ "n90K");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-socket-io */ "7JkF");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/user.service */ "qfBg");











let Tab1Page = class Tab1Page {
    constructor(prodService, storage, io, userService, alertCtrl, platform, loadingCtrl, http, router) {
        this.prodService = prodService;
        this.storage = storage;
        this.io = io;
        this.userService = userService;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.router = router;
        this.seg = 0;
        this.cart = [];
        this.isQuantitySelected = 'false';
        this.segmentList = ['DRY FRUITS',
            'EXOTIC',
            'VEGETABLES', 'LEAFYVEGETABLES', 'FRUITS',
            'SALAD', 'BAKERY PRODUCTS'];
        this.slideList = [
            'DRY FRUITS', 'EXOTIC',
            'VEGETABLES',
            'LEAFYVEGETABLES', 'FRUITS',
            'SALAD', 'BAKERY PRODUCTS'
        ];
        this.isSearchBarShown = false;
        this.quantityTitle = "";
        this.customAlertOptions = {
            cssClass: 'alert',
            header: this.quantityTitle,
        };
        this.product = [];
        this.index = 0;
        this.selectedSegment = this.segmentList[0];
        this.io.connect();
        this.io.on('cart', (data) => {
            this.getUserCart();
        });
    }
    quantitySelect(i) {
        console.log(i.title);
        this.quantityTitle = i.title;
        this.customAlertOptions = {
            header: i.title
        };
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
    ionViewDidEnter() {
        this.getUserId();
    }
    ionViewDidLeave() {
        this.getUserId();
    }
    getUserId() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.profileId = yield this.storage.get('userId');
            console.log("PROFILEID: " + this.profileId);
            this.getUserCart();
        });
    }
    getUserCart() {
        this.userService.getUserById(this.profileId).subscribe(user => {
            if (user) {
                console.log("User Cart " + JSON.stringify(user['user'].cart));
                this.cart = user['user'].cart.items;
                if (user['user'].cart.items.length > 0) {
                    let CartItem = this.cart.map(item => item.orderPrice).reduce((a, b) => a + b);
                    let Quantity = this.cart.map(item => item.quantity).reduce((a, b) => a + b);
                    console.log("CArt ITEM PRICE " + CartItem);
                    console.log("CArt ITEM Quantity " + Quantity);
                    this.sumOfCart = CartItem;
                    this.totalCartItems = Quantity;
                }
                else {
                    this.sumOfCart = 0;
                    this.totalCartItems = 0;
                }
            }
        });
    }
    ngOnInit() {
        this.getUserId();
        this.getProducts(0);
    }
    getProducts(index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create({
                message: "Loading Products...",
                duration: 6000
            });
            loading.present();
            if (index === 0) {
                this.prodService.getAllProducts('?category=DRYFRUIT').subscribe(data => {
                    this.product = data['products'];
                    console.log(this.product);
                    loading.dismiss();
                });
            }
            if (index === 1) {
                this.prodService.getAllProducts('?category=EXOTIC').subscribe(data => {
                    this.product = data['products'];
                    loading.dismiss();
                });
            }
            if (index === 2) {
                this.prodService.getAllProducts('?category=VEGETABLE').subscribe(data => {
                    this.product = data['products'];
                    loading.dismiss();
                });
            }
            if (index === 3) {
                this.prodService.getAllProducts('?category=LEAFYVEGETABLE').subscribe(data => {
                    //console.log(data);
                    this.product = data['products'];
                    loading.dismiss();
                });
            }
            if (index === 4) {
                this.prodService.getAllProducts('?category=FRUITS').subscribe(data => {
                    //console.log(data);
                    this.product = data['products'];
                    loading.dismiss();
                });
            }
            if (index === 5) {
                this.prodService.getAllProducts('?category=SALAD').subscribe(data => {
                    //console.log(data);
                    this.product = data['products'];
                    loading.dismiss();
                });
            }
            if (index === 6) {
                this.prodService.getAllProducts('?category=BAKERYPRODUCT').subscribe(data => {
                    //console.log(data);
                    this.product = data['products'];
                    loading.dismiss();
                });
            }
        });
    }
    segmentChanged($event, item, index) {
        console.log($event);
        //this.selectedSegment = $event.detail.value;
        this.slide.slideTo(index);
        // console.log(item, index);
        this.slide.update();
    }
    doRefresh(event) {
        console.log('Begin async operation');
        this.getProducts(this.index);
        setTimeout(() => {
            console.log('Async operation has ended');
            event.target.complete();
        }, 2000);
    }
    ionSlideDidChange($event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create({
                message: "Loading Products...",
                duration: 6000
            });
            loading.present();
            this.slide.getActiveIndex().then(index => {
                console.log(index);
                this.selectedSegment = this.segmentList[index];
                this.focusSegment(index);
                this.index = index;
                if (index === 0) {
                    this.prodService.getAllProducts('?category=DRYFRUIT').subscribe(data => {
                        //console.log(data);
                        this.product = data['products'];
                        loading.dismiss();
                    });
                }
                if (index === 1) {
                    this.prodService.getAllProducts('?category=EXOTIC').subscribe(data => {
                        //console.log(data);
                        this.product = data['products'];
                        loading.dismiss();
                    });
                }
                if (index === 2) {
                    this.prodService.getAllProducts('?category=VEGETABLE').subscribe(data => {
                        //console.log(data);
                        this.product = data['products'];
                        loading.dismiss();
                    });
                }
                if (index === 3) {
                    this.prodService.getAllProducts('?category=LEAFYVEGETABLE').subscribe(data => {
                        //console.log(data);
                        this.product = data['products'];
                        loading.dismiss();
                    });
                }
                if (index === 4) {
                    this.prodService.getAllProducts('?category=FRUITS').subscribe(data => {
                        //console.log(data);
                        this.product = data['products'];
                        loading.dismiss();
                    });
                }
                if (index === 5) {
                    this.prodService.getAllProducts('?category=SALAD').subscribe(data => {
                        //console.log(data);
                        this.product = data['products'];
                        loading.dismiss();
                    });
                }
                if (index === 6) {
                    this.prodService.getAllProducts('?category=BAKERYPRODUCT').subscribe(data => {
                        //console.log(data);
                        this.product = data['products'];
                        loading.dismiss();
                    });
                }
            });
        });
    }
    focusSegment(segmentId) {
        document.getElementById(segmentId).scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center',
        });
    }
    onSearchChange(event) {
        console.log(event.detail.value);
        if (event.detail.value.length < 0) {
            console.log("0 search");
            this.getProducts(this.index);
        }
        this.prodService.searchProduct(event.detail.value).subscribe(data => {
            console.log(data);
            this.product = data['product'];
        });
    }
    onQuantityChange(event, id) {
        let value = event.detail.value;
        let unit = value.split(" ")[1];
        let price = value.split(" ")[4];
        let discountPrice = value.split(" ")[6];
        console.log(unit, price, discountPrice, id);
        this.prodService.updateProduct(id, unit, price, discountPrice).subscribe(data => {
            console.log(data);
        }, (error) => {
            console.log(error.error);
        });
    }
    addProductToCart(item) {
        const productId = item._id;
        console.log(item._id);
        console.log(this.profileId);
        this.io.emit('addtocart', { productId: productId, userId: this.profileId });
    }
    showSearchBar() {
        if (this.isSearchBarShown) {
            this.isSearchBarShown = false;
        }
        this.isSearchBarShown = true;
    }
    onSearchBlur(event) {
        console.log("blur");
        this.prodService.getAllProducts('?category=FRUITS').subscribe(data => {
            //console.log(data);
            this.product = data['products'];
        });
        if (event.detail == null) {
            this.isSearchBarShown = false;
            this.prodService.getAllProducts('?category=FRUITS').subscribe(data => {
                //console.log(data);
                this.product = data['products'];
            });
        }
    }
};
Tab1Page.ctorParameters = () => [
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_9__["Socket"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
];
Tab1Page.propDecorators = {
    slide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['slide',] }],
    segment: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['segment',] }]
};
Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab1',
        template: _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab1Page);



/***/ }),

/***/ "XOzS":
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function() { return Tab1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab1.page */ "Mzl2");




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"],
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ "rWyk":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css2?family=Lato:wght@900&display=swap\");\nbody {\n  font-family: \"Lato\", sans-serif;\n}\n:host {\n  --super-tabs-toolbar-background:teal;\n  --st-indicator-color: white;\n}\n.alert {\n  --width: 100% !important;\n}\nion-select-option {\n  text-decoration: line-through;\n  background-color: aquamarine;\n}\nion-segment-button {\n  --background: var(--ion-color-primary);\n  --background-focused-opacity: 1;\n  --background-checked: var(--ion-color-primary);\n  --color: var(--ion-color-light);\n  --color-checked: var(--ion-color-dark);\n  --indicator-color: var(--ion-color-light) ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLGtGQUFBO0FBR1I7RUFDSSwrQkFBQTtBQURKO0FBSUE7RUFDSSxvQ0FBQTtFQUNBLDJCQUFBO0FBREo7QUFJQTtFQUNFLHdCQUFBO0FBREY7QUFJQTtFQUNFLDZCQUFBO0VBQ0EsNEJBQUE7QUFERjtBQUdFO0VBQ0Usc0NBQUE7RUFDQSwrQkFBQTtFQUNBLDhDQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQ0FBQTtFQUNBLDBDQUFBO0FBQUoiLCJmaWxlIjoidGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MYXRvOndnaHRAOTAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuXHJcbmJvZHl7XHJcbiAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG46aG9zdCB7ICBcclxuICAgIC0tc3VwZXItdGFicy10b29sYmFyLWJhY2tncm91bmQ6dGVhbDtcclxuICAgIC0tc3QtaW5kaWNhdG9yLWNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4uYWxlcnR7XHJcbiAgLS13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tc2VsZWN0LW9wdGlvbntcclxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xyXG59XHJcbiAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTogMTtcclxuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgLS1jb2xvci1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgICAtLWluZGljYXRvci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KVxyXG4gIH1cclxuXHJcblxyXG4gXHJcbiAgaW9uLXNsaWRlc3tcclxuICBcclxuICAgXHJcbiAgICBcclxuICB9XHJcblxyXG4gICJdfQ== */");

/***/ }),

/***/ "tmrb":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab1.page */ "Mzl2");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab1-routing.module */ "XOzS");
/* harmony import */ var _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-super-tabs/angular */ "k6Iy");









let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"],
            _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_8__["SuperTabsModule"]
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map