(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["location-location-module"],{

/***/ "//vy":
/*!********************************************************!*\
  !*** ./src/app/maps-address/maps-address.component.ts ***!
  \********************************************************/
/*! exports provided: MapsAddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsAddressComponent", function() { return MapsAddressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_maps_address_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./maps-address.component.html */ "zBOt");
/* harmony import */ var _maps_address_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./maps-address.component.scss */ "gXKy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let MapsAddressComponent = class MapsAddressComponent {
    constructor() { }
    ngOnInit() { }
};
MapsAddressComponent.ctorParameters = () => [];
MapsAddressComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-maps-address',
        template: _raw_loader_maps_address_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_maps_address_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MapsAddressComponent);



/***/ }),

/***/ "cf3W":
/*!*********************************************!*\
  !*** ./src/app/location/location.module.ts ***!
  \*********************************************/
/*! exports provided: LocationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationPageModule", function() { return LocationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _location_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./location-routing.module */ "pMSE");
/* harmony import */ var _location_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./location.page */ "xNjN");
/* harmony import */ var _maps_address_maps_address_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../maps-address/maps-address.component */ "//vy");








let LocationPageModule = class LocationPageModule {
};
LocationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _location_routing_module__WEBPACK_IMPORTED_MODULE_5__["LocationPageRoutingModule"],
        ],
        declarations: [_location_page__WEBPACK_IMPORTED_MODULE_6__["LocationPage"], _maps_address_maps_address_component__WEBPACK_IMPORTED_MODULE_7__["MapsAddressComponent"]]
    })
], LocationPageModule);



/***/ }),

/***/ "eeDV":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/location/location.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n <ion-buttons slot=\"start\">\n   <ion-back-button defaultHref=\"/tabs/tab2\"></ion-back-button>\n </ion-buttons>\n  </ion-toolbar>\n\n   \n</ion-header>\n<ion-content> \n \n\n    <div  #map id=\"map\"  style=\"height: 60%; border-bottom-left-radius: 10%; border-bottom-right-radius: 10%;\"></div>\n\n    <ion-grid fixed>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-text color=\"primary\">\n            <h5>Select your location</h5>\n          </ion-text>\n          <ion-item *ngIf=\"isLocation === true\">\n            <ion-label color=\"medium\" position=\"stacked\">Your location</ion-label>\n            <ion-input [(ngModel)]=\"place\"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label color=\"medium\" position=\"stacked\">Complete Address</ion-label>\n            <ion-input placeholder=\"House no./Flat no./Floor/Building\" [(ngModel)]=\"completeAddress\"></ion-input>\n          </ion-item>\n    \n        </ion-col>\n        <ion-col size=\"6\"></ion-col>\n      </ion-row>\n    </ion-grid>\n\n</ion-content>\n\n<ion-footer class=\"ion-no-border\">\n  <ion-toolbar>\n   <ion-button  (click)=\"onConfimLocation()\" expand=\"block\" size=\"large\" >\n    Continue\n   </ion-button>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "gXKy":
/*!**********************************************************!*\
  !*** ./src/app/maps-address/maps-address.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYXBzLWFkZHJlc3MuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "jluf":
/*!*********************************************!*\
  !*** ./src/app/location/location.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#map {\n  height: 50vh;\n}\n\nion-toolbar {\n  --background: transparent;\n  --ion-toolbar-text-color: white;\n}\n\nion-button {\n  height: 60px;\n  width: 100%;\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xvY2F0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsK0JBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUNGIiwiZmlsZSI6ImxvY2F0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYXAge1xyXG4gIGhlaWdodDogNTB2aDtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgLS1pb24tdG9vbGJhci10ZXh0LWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaW9uLWJ1dHRvbntcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "pMSE":
/*!*****************************************************!*\
  !*** ./src/app/location/location-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LocationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationPageRoutingModule", function() { return LocationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _location_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./location.page */ "xNjN");




const routes = [
    {
        path: '',
        component: _location_page__WEBPACK_IMPORTED_MODULE_3__["LocationPage"]
    }
];
let LocationPageRoutingModule = class LocationPageRoutingModule {
};
LocationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LocationPageRoutingModule);



/***/ }),

/***/ "xNjN":
/*!*******************************************!*\
  !*** ./src/app/location/location.page.ts ***!
  \*******************************************/
/*! exports provided: LocationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationPage", function() { return LocationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_location_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./location.page.html */ "eeDV");
/* harmony import */ var _location_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./location.page.scss */ "jluf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/storage.service */ "n90K");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "Bfh1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _awesome_cordova_plugins_open_native_settings_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @awesome-cordova-plugins/open-native-settings/ngx */ "+nd2");











let LocationPage = class LocationPage {
    constructor(geolocation, zone, http, storage, router, route, alertController, loadingCtrl, openNativeSettings, toast) {
        this.geolocation = geolocation;
        this.zone = zone;
        this.http = http;
        this.storage = storage;
        this.router = router;
        this.route = route;
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.openNativeSettings = openNativeSettings;
        this.toast = toast;
        this.isLocation = false;
        this.geocodingApiKey = "AIzaSyC3rzCH0PoAkTzAXDiyCDBABUMY3Lsttxk";
        this.isOrderable = true;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.userId = yield this.storage.get('userId');
            console.log("Loacation userid:- " + this.userId);
            this.placeId = this.route.snapshot.paramMap.get('orderId');
            console.log("Placed Order Id:- " + this.placeId);
        });
    }
    ionViewDidEnter() {
        this.presentAlert("Please enable Location permision in settings...");
        this.getUserPosition();
    }
    reverseGeocoding(laat, lng) {
        this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${laat},${lng}&key=${this.geocodingApiKey}`)
            .subscribe(data => {
            console.log(data['results'][0].formatted_address);
            this.place = data['results'][0].formatted_address;
        });
    }
    addMap(lat, lon) {
        let latlng = new google.maps.LatLng(lat, lon);
        let mapOptions = {
            center: latlng,
            zoom: 11,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        };
        this.map = new google.maps.Map(this.mapView.nativeElement, mapOptions);
        // Construct the circle for each value in citymap.
        // Note: We scale the area of the circle based on the population.
        // Add the circle for this city to the map.
        let cityCircle = new google.maps.Circle({
            strokeColor: "#05a074",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#05a074",
            fillOpacity: 0.03,
            map: this.map,
            center: { lat: lat, lng: lon },
            radius: 670 * 10,
        });
        if (cityCircle.getBounds().contains(latlng) === true) {
            this.isOrderable = false;
        }
        this.addMarker(cityCircle);
    }
    getOnDragEvent(vMarker, circle) {
        google.maps.event.addListener(vMarker, 'dragend', (evt) => {
            if (circle.getBounds().contains(evt.latLng) === false) {
                this.presentToast("Order Cannot Be Placed here");
                this.isOrderable = true;
            }
            if (circle.getBounds().contains(evt.latLng) === true) {
                this.isOrderable = false;
                // this.lat = evt.latLng.lat().toFixed(6);
                // this.lng = evt.lonLng.lng().toFixed(6);
                console.log("LAT:- " + evt.latLng.lat().toFixed(6));
                console.log("LNG:- " + evt.latLng.lng().toFixed(6));
                this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${evt.latLng.lat().toFixed(6)},${evt.latLng.lng().toFixed(6)}&key=${this.geocodingApiKey}`)
                    .subscribe(data => {
                    console.log(data['results'][0].formatted_address);
                    this.place = data['results'][0].formatted_address;
                });
            }
            console.log("BOUNDS:- " + circle.getBounds().contains(evt.latLng));
        });
    }
    addMarker(circle) {
        let marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: this.map.getCenter(),
            draggable: true,
        });
        this.isLocation = true;
        this.getOnDragEvent(marker, circle);
        let content = "<p>Your Current Location</p>";
    }
    getUserPosition() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.geolocation.getCurrentPosition().then((position) => {
                console.log(position.coords.latitude);
                console.log(position.coords.longitude);
                this.lat = position.coords.latitude;
                this.lng = position.coords.longitude;
                this.addMap(position.coords.latitude, position.coords.longitude);
                this.reverseGeocoding(position.coords.latitude, position.coords.longitude);
            }).catch((error) => {
                console.log(error);
                this.presentToast(error.message);
            });
        });
    }
    onConfimLocation() {
        let body = {
            userId: this.userId,
            googleadd: this.place,
            useradd: this.completeAddress,
            coordinates: [this.lat, this.lng]
        };
        let location = {
            cordinates: [this.lat, this.lng]
        };
        this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].API_URL + '/address', body).subscribe(data => {
            console.log("ADDRESS SAVED:- " + data);
            this.router.navigate(['tabs', 'tab1']);
            this.presentToast("Address Saved Successfully");
        });
    }
    presentAlert(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                message: msg,
                buttons: [
                    {
                        text: 'OK',
                        handler: () => {
                            ///open settings
                            this.openNativeSettings.open('location').then(() => {
                                console.log();
                                this.presentToast("Setting opened");
                            }).catch((err) => {
                                this.presentToast("Something went wrong!" + err);
                            });
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    }
                ]
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
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
LocationPage.ctorParameters = () => [
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _awesome_cordova_plugins_open_native_settings_ngx__WEBPACK_IMPORTED_MODULE_10__["OpenNativeSettings"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }
];
LocationPage.propDecorators = {
    mapView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['map',] }]
};
LocationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-location',
        template: _raw_loader_location_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_location_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LocationPage);



/***/ }),

/***/ "zBOt":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/maps-address/maps-address.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  maps-address works!\n</p>\n");

/***/ })

}]);
//# sourceMappingURL=location-location-module.js.map