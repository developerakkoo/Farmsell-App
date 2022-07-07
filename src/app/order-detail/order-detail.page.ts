import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Geolocation, GeolocationOptions, Geoposition } from '@ionic-native/geolocation/ngx';

import { LoadingController, ToastController } from '@ionic/angular';
import { Socket } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';
import { StorageService } from '../services/storage.service';

declare var google: any;

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.page.html',
  styleUrls: ['./order-detail.page.scss'],
})
export class OrderDetailPage implements OnInit {

  isOrderLoaded= false;

  timeLeft: number = 60;
  interval;

  //--- Bottom Sheeet Variables
  currentPosition;
  height: number;
  minimumThreshold;
  startPosition;
// ----------------------------

  userId;
  orderId;
  id;
  address;

  items: [];
  orderStatus:any;
  orderAmount:any;
  user;
  orderQuantity;
  units;
  order: Object = {};
  deliveryDate;

  productTitle:string;
  productImage:string;
  number:number;

  paymentMode: string;

  @ViewChild('map') mapView: ElementRef;

  map: any;

  lat: any;
  lng: any;

  boyLat:any;
  boyLng:any;

  geocodingApiKey: any = "AIzaSyC3rzCH0PoAkTzAXDiyCDBABUMY3Lsttxk";
   directionService = new google.maps.DirectionsService();
   directionRenderer = new google.maps.DirectionsRenderer();
  options: GeolocationOptions;
  currentPos;
  boyLoc: any;

   constructor(private storage: StorageService, 
              private router: Router, 
              private io: Socket,
              private route: ActivatedRoute, 
              private http: HttpClient, 
              private geolocation: Geolocation,
              public zone: NgZone, 
              private loadingCtrl: LoadingController,
              private toast: ToastController) { 
                this.id = this.route.snapshot.paramMap.get('id');
                this.orderId = this.route.snapshot.paramMap.get('order-id');
                this.io.connect();
               
                this.io.on('getAllPlaceOrder:get', (data) =>{
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
                })

                this.io.on('add:update', (data) => {
                  console.log("IO ADRESS UPDATE");
                  
                  console.log(data);
                  this.address = data['address'];
                  
                })

              //   setInterval(() =>
              //   {
              //     this.getOrderDetails();
              //   }, 50000)
               }

  async ngOnInit() {
    this.userId = await this.storage.get('userId');
   

   
    
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

  getUserAddresses(){
    this.http.get(environment.API_URL +'/address/'+ this.userId)
    .subscribe(address => {
      console.log(address['add'][0]);
      
      this.address = address['add'][0].useradd;

    })
  }

 

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 60;
      }
    },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }


  openCustomerSupport(){
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


callDeliveryPartner(){
  this.presentToast("Call Module not available")
}

  getOrderDetails(){
    this.http.get(environment.API_URL + '/place/order/'+ this.id).subscribe((data) =>{
      this.order = data['order'];
      console.log(data['order']);
      this.boyLat = data['order'][0]?.boycordinates[0];
      this.boyLng = data['order'][0]?.boycordinates[1];
      this.order = data['order'][0];
      // this.orderStatus = data['order'].status;
      // this.orderAmount = data['order'].totalAmount;
      // this.productTitle = data['order']['productId'].title;
      // this.productImage = data['order']['productId'].imageUrl;
      
    });

  }


  onCancelOrder(){
    this.http.delete(environment.API_URL + '/place/'+ this.orderId).subscribe(data => {
      if(data){
        console.log("DEleted: ", data);
        this.router.navigate(['history']);
        
      }
    })
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
 
  async presentToast(msg) {
    const toast = await this.toast.create({
      message:msg,
      duration: 2000
    });
    toast.present();
  }

}
