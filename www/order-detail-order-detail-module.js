(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-detail-order-detail-module"],{

/***/ "4aIR":
/*!*****************************************************!*\
  !*** ./src/app/order-detail/order-detail.module.ts ***!
  \*****************************************************/
/*! exports provided: OrderDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailPageModule", function() { return OrderDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _order_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-detail-routing.module */ "ykQ8");
/* harmony import */ var _order_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-detail.page */ "r3Xw");







let OrderDetailPageModule = class OrderDetailPageModule {
};
OrderDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _order_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderDetailPageRoutingModule"]
        ],
        declarations: [_order_detail_page__WEBPACK_IMPORTED_MODULE_6__["OrderDetailPage"]]
    })
], OrderDetailPageModule);



/***/ }),

/***/ "Y17y":
/*!*****************************************************!*\
  !*** ./src/app/order-detail/order-detail.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css2?family=Lato:wght@900&display=swap\");\nbody {\n  font-family: \"Lato\", sans-serif;\n}\n.bottomSheet {\n  position: fixed;\n  width: 100%;\n  height: 400px;\n  bottom: 0;\n  border-radius: 15px 15px 0 0;\n  z-index: 20;\n  background-color: white;\n  transition: 0.3s;\n  transform: translate3d(0, 0, 0);\n}\n.bottomSheet .content {\n  color: black;\n}\n.bottomSheet .swipe-handler::after {\n  content: \"\";\n  width: 36px;\n  height: 6px;\n  position: absolute;\n  left: 50%;\n  top: 5%;\n  margin-left: -18px;\n  margin-top: -3px;\n  border-radius: 3px;\n  background: #8b8b8b;\n}\n.bg {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.4);\n  z-index: 10;\n  transition: 0.3s;\n}\nion-button {\n  height: 60px;\n  width: 100%;\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL29yZGVyLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWVEsa0ZBQUE7QUFHUjtFQUNJLCtCQUFBO0FBYko7QUFlQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUVBLFNBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7QUFiSjtBQWlCSTtFQUNJLFlBQUE7QUFmUjtBQWtCSTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQWhCUjtBQXVCQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFwQko7QUF1QkE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFwQkoiLCJmaWxlIjoib3JkZXItZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5jb250YWluZXJ7XG4vLyAgICAgd2lkdGg6MTAwJTtcbi8vICAgICBoZWlnaHQ6MzAwcHg7XG4vLyAgICAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbi8vICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4vLyAgICAgcG9zaXRpb246IGZpeGVkO1xuLy8gICAgIGJvdHRvbTogMDtcbi8vICAgICB6LWluZGV4OiAyO1xuLy8gICAgIHBhZGRpbmc6IDEwcHg7XG4vLyAgICAgYm94LXNoYWRvdzogNXB4IDEwcHggMThweCAjNzBmZjg4O1xuLy8gICAgIGZpbHRlcjogZHJvcC1zaGFkb3coOHB4IDhweCAxMHB4IHJnYig2MiwgMjU1LCA3OCkpO1xuLy8gfVxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TGF0bzp3Z2h0QDkwMCZkaXNwbGF5PXN3YXAnKTtcblxuXG5ib2R5e1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG59XG4uYm90dG9tU2hlZXR7XG4gICAgcG9zaXRpb246Zml4ZWQ7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIFxuICAgIGJvdHRvbTogMDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMCAwO1xuICAgIHotaW5kZXg6IDIwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XG5cbiAgICAvL2JvdHRvbSBzaGVldCBjb250ZW50XG5cbiAgICAuY29udGVudHtcbiAgICAgICAgY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgICB9XG5cbiAgICAuc3dpcGUtaGFuZGxlcjo6YWZ0ZXJ7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICB3aWR0aDogMzZweDtcbiAgICAgICAgaGVpZ2h0OiA2cHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0b3A6IDUlO1xuICAgICAgICBtYXJnaW4tbGVmdDogLTE4cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IC0zcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDEzOSwgMTM5LCAxMzkpO1xuXG5cbiAgICB9XG59XG5cblxuLmJne1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogIzAwMDAwMCwgJGFscGhhOiAwLjQpO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbmlvbi1idXR0b257XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "kEs5":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order-detail/order-detail.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title color=\"dark\">Order Details</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button  color=\"secondary\"  defaultHref=\"/history\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <p   style=\"color: white;\">Order ID - {{orderId}}</p>\n</ion-header>\n\n<ion-content >\n\n  <div *ngIf=\"!isOrderLoaded\">\n  \n    <ion-list>\n      <ion-list-header>\n        <ion-label>\n          <ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\n        </ion-label>\n      </ion-list-header>\n      <ion-item>\n        <ion-avatar slot=\"start\">\n          <ion-skeleton-text animated></ion-skeleton-text>\n        </ion-avatar>\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </p>\n          <p>\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n          </p>\n        </ion-label>\n      </ion-item>\n      \n      <div class=\"ion-padding custom-skeleton\">\n        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        <ion-skeleton-text animated></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 88%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n      </div>\n    </ion-list>\n  </div>\n\n <div *ngIf=\"isOrderLoaded\">\n  <ion-grid fixed>\n    \n    <ion-row style=\"margin-top: 10px;\">\n      <ion-col>\n        <strong>Sr. no</strong>\n      </ion-col>\n      <ion-col > <strong>Name</strong> </ion-col>\n      <ion-col > <strong>Quantity</strong> </ion-col>\n      <ion-col > <strong>Rate</strong> </ion-col>\n      <ion-col > <strong>Amount</strong> </ion-col>\n    </ion-row>\n\n    <ion-row style=\"font-size: 15px;\"  *ngFor=\"let item of items; let i = index\" >\n      <ion-col> {{i + 1}} </ion-col>\n\n      <ion-col> {{item.title}} </ion-col>\n      <ion-col> {{item.quantity}} {{item.units}} </ion-col>\n      <ion-col> {{item.price | currency:'INR'}} </ion-col>\n      <ion-col> {{item.orderPrice | currency:'INR'}} </ion-col>\n    </ion-row>\n    <hr   style=\"color: black; background-color: black;\">\n    <ion-text color=\"dark\" class=\"ion-text-right\">\n      <h6> <strong>Total:  {{orderAmount | currency:'INR'}} </strong> </h6>\n    </ion-text>\n  </ion-grid>\n \n\n  <ion-card class=\"ion-no-margin\" >\n    <ion-card-header>\n      <ion-card-title color=\"medium\">Order Details</ion-card-title>\n      <ion-item lines=\"none\">\n       \n        <ion-text slot=\"start\" class=\"ion-text-left\" color=\"dark\">\n          <p><strong>Address:</strong> {{address}}</p>\n          <p><strong>Contact Number:</strong> {{number}}</p>\n          <p><strong>Payment Mode:</strong> {{ paymentMode }}</p>\n          <p><strong>Delivery Date:</strong> {{ deliveryDate.createdDate | date:'shortDate'}}</p>\n          <p><strong>Time Slot:</strong> {{ deliveryDate.startTime | date:'h:mm a': 'UTC'}} - {{ deliveryDate.endTime | date:'h:mm a': 'UTC'}}</p>\n        </ion-text>\n      </ion-item>\n\n      <hr>\n\n\n\n     \n    </ion-card-header>\n    <ion-card-content>\n  \n    </ion-card-content>\n  </ion-card>\n\n  \n\n  <ion-item (click)=\"openCustomerSupport()\" >\n    <ion-avatar slot=\"start\">\n      <img src=\"/assets/support.png\" />\n    </ion-avatar>\n \n    <p style=\"font-size:12px; font-weight:bold; color:grey;\" class=\"ion-text-center\">Need help with your order?</p>\n  </ion-item>\n \n </div>\n\n\n\n <!-- <div  class=\"bg\" (click)=\"close()\">\n    \n  </div>\n\n\n\n  <div  class=\"bottomSheet\" (touchmove)=\"touchMove($event)\" (touchend)=\"touchEnd($event)\">\n\n    <div class=\"swipe-handler\" (click)=\"open()\">\n\n    </div>\n\n\n    <div class=\"content ion-padding\">\n      <p> </p>\n    \n      \n    </div>\n\n    <div style=\"width: 100%; height: 60px; position: fixed; bottom: 0; right: 0;\">\n      <ion-grid fixed>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-item>\n              <ion-icon (click)=\"callDeliveryPartner()\" name=\"call\" slot=\"end\"></ion-icon>\n              <ion-label class=\"ion-text-wrap ion-text-center\">I'm {{user || \"Akshay\"}}, your delivery partner</ion-label>\n            </ion-item>\n          </ion-col>\n          \n        </ion-row>\n      </ion-grid>\n    </div>\n\n  </div>\n -->\n\n</ion-content>\n<!-- <ion-footer class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-button size=\"large\"  color=\"danger\" (click)=\"onCancelOrder()\" expand=\"full\" >\n      Cancel Order in {{timeLeft}} sec.\n    </ion-button>\n  </ion-toolbar>\n</ion-footer> -->");

/***/ }),

/***/ "r3Xw":
/*!***************************************************!*\
  !*** ./src/app/order-detail/order-detail.page.ts ***!
  \***************************************************/
/*! exports provided: OrderDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailPage", function() { return OrderDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_order_detail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./order-detail.page.html */ "kEs5");
/* harmony import */ var _order_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-detail.page.scss */ "Y17y");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "Bfh1");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-socket-io */ "7JkF");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/storage.service */ "n90K");











let OrderDetailPage = class OrderDetailPage {
    constructor(storage, router, io, route, http, geolocation, zone, loadingCtrl, toast) {
        this.storage = storage;
        this.router = router;
        this.io = io;
        this.route = route;
        this.http = http;
        this.geolocation = geolocation;
        this.zone = zone;
        this.loadingCtrl = loadingCtrl;
        this.toast = toast;
        this.isOrderLoaded = false;
        this.timeLeft = 60;
        this.order = {};
        this.geocodingApiKey = "AIzaSyC3rzCH0PoAkTzAXDiyCDBABUMY3Lsttxk";
        this.directionService = new google.maps.DirectionsService();
        this.directionRenderer = new google.maps.DirectionsRenderer();
        this.id = this.route.snapshot.paramMap.get('id');
        this.orderId = this.route.snapshot.paramMap.get('order-id');
        this.io.connect();
        this.io.on('getAllPlaceOrder:get', (data) => {
            console.log("IO ORDER");
            this.isOrderLoaded = true;
            console.log(data['order'][0]);
            // this.order = data['order'];
            this.user = data['order'][0]['userId'].fullName;
            this.items = data['order'][0]['items'];
            this.order = data['order'][0];
            this.orderStatus = data['order'][0].status;
            this.orderAmount = data['order'][0].totalAmount;
            this.productTitle = data['order'][0]['productId'].title;
            this.productImage = data['order'][0]['productId'].imageUrl;
            this.units = data['order'][0]['productId'].units;
            this.paymentMode = data['order'][0].paymentMode;
            this.number = data['order'][0]['userId'].contactNumber;
            this.deliveryDate = data['order'][0]['slot'];
            //  this.getOrderDetails();
        });
        this.io.on('add:update', (data) => {
            console.log("IO ADRESS UPDATE");
            console.log(data);
            this.address = data['address'];
        });
        //   setInterval(() =>
        //   {
        //     this.getOrderDetails();
        //   }, 50000)
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.userId = yield this.storage.get('userId');
        });
    }
    ionViewDidEnter() {
        console.log("USER ID: " + this.userId);
        console.log("ORDER ID: " + this.orderId);
        this.getOrderDetails();
        this.getUserAddresses();
        this.startTimer();
    }
    ionViewDidLeave() {
        this.pauseTimer();
    }
    getUserAddresses() {
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].API_URL + '/address/' + this.userId)
            .subscribe(address => {
            console.log(address['add'][0]);
            this.address = address['add'][0].useradd;
        });
    }
    startTimer() {
        this.interval = setInterval(() => {
            if (this.timeLeft > 0) {
                this.timeLeft--;
            }
            else {
                this.timeLeft = 60;
            }
        }, 1000);
    }
    pauseTimer() {
        clearInterval(this.interval);
    }
    openCustomerSupport() {
        this.router.navigate(['help']);
    }
    //   open(){
    //     (<HTMLStyleElement>document.querySelector(".bottomSheet")).style.bottom = "0px";
    //     (<HTMLStyleElement>document.querySelector(".bg")).style.display = "block";
    //   }
    //   close() {
    //     //Reset values
    //     this.currentPosition = 0;
    //     this.startPosition = 0;
    //     //Hide the bottom sheet
    //     (<HTMLStyleElement>document.querySelector(".bottomSheet")).style.bottom = "-300px";
    //     // Reset the transforms
    //     (<HTMLStyleElement>document.querySelector(".bottomSheet")).style.transform = "translate3d(0px,0px,0px)";
    //     // Hide the background overlay
    //     (<HTMLStyleElement>document.querySelector(".bg")).style.display = "none";
    //   }
    //   // On swiping the bottom sheet
    //   touchMove(ev){
    //     if(this.startPosition == 0){
    //       this.startPosition = ev.touches[0].clientY;
    //     }
    //     this.height = document.querySelector(".bottomSheet").clientHeight;
    //     var y = ev.touches[0].clientY;
    //     this.currentPosition = y - this.startPosition;
    //     if(this.currentPosition > 0 && this.startPosition > 0){
    //     (<HTMLStyleElement>document.querySelector(".bottomSheet")).style.transform = "translate3d(0px," + this.currentPosition + "px,0px)";
    //     }
    //   }
    //   touchEnd(ev){
    //     this.minimumThreshold = this.height - 130;
    //     if(this.currentPosition < this.minimumThreshold)
    //     {
    //     (<HTMLStyleElement>document.querySelector(".bottomSheet")).style.transform = "translate3d(0px,0px,0px)";
    //     }
    //     else{
    //       this.close();
    //     }
    // }
    callDeliveryPartner() {
        this.presentToast("Call Module not available");
    }
    getOrderDetails() {
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].API_URL + '/place/order/' + this.id).subscribe((data) => {
            var _a, _b;
            this.order = data['order'];
            console.log(data['order']);
            this.boyLat = (_a = data['order'][0]) === null || _a === void 0 ? void 0 : _a.boycordinates[0];
            this.boyLng = (_b = data['order'][0]) === null || _b === void 0 ? void 0 : _b.boycordinates[1];
            this.order = data['order'][0];
            // this.orderStatus = data['order'].status;
            // this.orderAmount = data['order'].totalAmount;
            // this.productTitle = data['order']['productId'].title;
            // this.productImage = data['order']['productId'].imageUrl;
        });
    }
    onCancelOrder() {
        this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].API_URL + '/place/' + this.orderId).subscribe(data => {
            if (data) {
                console.log("DEleted: ", data);
                this.router.navigate(['history']);
            }
        });
    }
    // addMap(lat, lon){
    //   let latlng = new google.maps.LatLng(lat, lon);
    //   this.currentPos = latlng;
    //   let mapOptions = {
    //     center: latlng,
    //     zoom: 16,
    //     mapTypeId: google.maps.MapTypeId.ROADMAP,
    //   }
    //   this.map = new google.maps.Map(this.mapView.nativeElement,mapOptions);
    // // Construct the circle for each value in citymap.
    // // Note: We scale the area of the circle based on the population.
    // // const marker = new google.maps.Marker({
    // //   position: latlng,
    // //   map: this.map,
    // //   // icon: "assets/home.png",
    // // });
    // // const marker2 = new google.maps.Marker({
    // //   position: this.boyLoc,
    // //   map: this.map,
    // //   icon: "assets/boy.png",
    // // });
    // this.directionRenderer.setMap(this.map);
    //   this.addMarker();
    // }
    //  calculateAndDisplayRoute(directionsService, directionsRenderer, lat, lon, boylat, boylng) {
    //   let latlng = new google.maps.LatLng(lat, lon);
    //   this.boyLoc = new google.maps.LatLng(boylat, boylng);
    //   console.log("LATTIDE LONGITIDE: "+ this.boyLoc);
    //   directionsService
    //     .route({
    //       origin:latlng ,
    //       // destination: this.boyLoc,
    //       destination:{ 
    //         query:"Dhayri"
    //       },
    //       travelMode: google.maps.TravelMode.DRIVING,
    //     })
    //     .then((response) => {
    //       directionsRenderer.setDirections(response);
    //     })
    //     .catch((e) => window.alert("Directions request failed due to " + e));
    // }
    // getOnDragEvent(vMarker){
    //   google.maps.event.addListener(vMarker, 'dragend', 
    //    (evt) =>
    //   {   // this.lat = evt.latLng.lat().toFixed(6);
    //       // this.lng = evt.lonLng.lng().toFixed(6);
    //     console.log("LAT:- "+evt.latLng.lat().toFixed(6));
    //     console.log("LNG:- "+evt.latLng.lng().toFixed(6));
    //     // this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${evt.latLng.lat().toFixed(6)},${evt.latLng.lng().toFixed(6)}&key=${this.geocodingApiKey}`)
    //     // .subscribe(data => {
    //     //   console.log(data['results'][0].formatted_address);
    //     //   // this.place = data['results'][0].formatted_address;
    //     // })
    //   })
    // }
    // addMarker(){
    //   let marker = new google.maps.Marker({
    //     map: this.map,
    //     animation: google.maps.Animation.DROP,
    //     position: this.boyLoc,
    //     draggable: false,
    //     icon: "assets/boy.png",
    //     //icon: ''
    //   });
    //   this.getOnDragEvent(marker);
    //   let content ="<p>Your Current Location</p>";
    // }
    // getUserPosition() {
    //   this.geolocation.getCurrentPosition().then((position) => {
    //     console.log(position.coords.latitude);
    //     console.log(position.coords.longitude);
    //     this.lat = position.coords.latitude;
    //     this.lng = position.coords.longitude;
    //     this.addMap(position.coords.latitude, position.coords.longitude);
    //     // this.reverseGeocoding(position.coords.latitude, position.coords.longitude);
    //   }).catch((error) => {
    //     console.log(error);
    //   })
    // }
    presentToast(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: msg,
                duration: 2000
            });
            toast.present();
        });
    }
};
OrderDetailPage.ctorParameters = () => [
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_10__["StorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_8__["Socket"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"] }
];
OrderDetailPage.propDecorators = {
    mapView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['map',] }]
};
OrderDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-order-detail',
        template: _raw_loader_order_detail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_order_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OrderDetailPage);



/***/ }),

/***/ "ykQ8":
/*!*************************************************************!*\
  !*** ./src/app/order-detail/order-detail-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: OrderDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailPageRoutingModule", function() { return OrderDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _order_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-detail.page */ "r3Xw");




const routes = [
    {
        path: '',
        component: _order_detail_page__WEBPACK_IMPORTED_MODULE_3__["OrderDetailPage"]
    }
];
let OrderDetailPageRoutingModule = class OrderDetailPageRoutingModule {
};
OrderDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrderDetailPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=order-detail-order-detail-module.js.map