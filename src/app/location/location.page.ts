import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { StorageService } from '../services/storage.service';
import { Geolocation, GeolocationOptions, Geoposition } from '@ionic-native/geolocation/ngx';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { OpenNativeSettings } from '@awesome-cordova-plugins/open-native-settings/ngx';

declare var google: any;
declare var Razorpay: any;

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {

  place;
  completeAddress: string;


  placeId;

  @ViewChild('map') mapView: ElementRef;

  map: any;

  lat: any;
  lng: any;

  isLocation: boolean= false;


  geocodingApiKey: any = "AIzaSyC3rzCH0PoAkTzAXDiyCDBABUMY3Lsttxk";

  options: GeolocationOptions;
  currentPos: Geoposition;

  userId;
  googleAddress: string;
  userAddress: string;
  coordinates: string;

  isOrderable: boolean = true;


  constructor(private geolocation: Geolocation,
    public zone: NgZone, private http: HttpClient,
     private storage: StorageService,
     private router: Router, private route: ActivatedRoute,
     private alertController: AlertController,
     private loadingCtrl : LoadingController,
     private openNativeSettings: OpenNativeSettings,
     private toast: ToastController) 
     {
      
    }


 async ngOnInit() {
  this.userId = await this.storage.get('userId');
  console.log("Loacation userid:- " + this.userId);

  this.placeId = this.route.snapshot.paramMap.get('orderId');
  console.log("Placed Order Id:- " + this.placeId);
  
  

  }

 

  ionViewDidEnter() {
    this.presentAlert("Please enable Location permision in settings...");

    this.getUserPosition();
  
  }


  reverseGeocoding(laat, lng){
    this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${laat},${lng}&key=${this.geocodingApiKey}`)
    .subscribe(data => {
      console.log(data['results'][0].formatted_address);
      this.place = data['results'][0].formatted_address;
      
    })
  }

  addMap(lat, lon){
    
    let latlng = new google.maps.LatLng(lat, lon);

    let mapOptions = {
      center: latlng,
      zoom: 11,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    }

    this.map = new google.maps.Map(this.mapView.nativeElement,mapOptions);
  // Construct the circle for each value in citymap.
  // Note: We scale the area of the circle based on the population.

    // Add the circle for this city to the map.
    let  cityCircle = new google.maps.Circle({
      strokeColor: "#05a074",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#05a074",
      fillOpacity: 0.03,
      map: this.map,
      center: { lat: lat, lng: lon },
      radius: 670 * 10,
    });
  
    if(cityCircle.getBounds().contains(latlng) === true) {
        this.isOrderable = false;
        
    }
    this.addMarker(cityCircle);

  }


  getOnDragEvent(vMarker, circle){
    google.maps.event.addListener(vMarker, 'dragend', 
     (evt) =>
    {

      if(circle.getBounds().contains(evt.latLng) === false){
        this.presentToast("Order Cannot Be Placed here")
        this.isOrderable = true;
      }

      if(circle.getBounds().contains(evt.latLng) === true){
        this.isOrderable = false;
        // this.lat = evt.latLng.lat().toFixed(6);
        // this.lng = evt.lonLng.lng().toFixed(6);
      console.log("LAT:- "+evt.latLng.lat().toFixed(6));
      console.log("LNG:- "+evt.latLng.lng().toFixed(6));
      this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${evt.latLng.lat().toFixed(6)},${evt.latLng.lng().toFixed(6)}&key=${this.geocodingApiKey}`)
      .subscribe(data => {
        console.log(data['results'][0].formatted_address);
        this.place = data['results'][0].formatted_address;
        
      })
      
    }
      console.log("BOUNDS:- "+circle.getBounds().contains(evt.latLng));

    })

    

    
  }


  addMarker(circle){
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter(),
      draggable: true,

      //icon: ''
    });

    this.isLocation = true;
    this.getOnDragEvent(marker,circle);

    let content ="<p>Your Current Location</p>";

  }

 async getUserPosition() {
  

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
    })
  }
  

  onConfimLocation(){
    let body = {
      userId: this.userId, 
      googleadd: this.place,
      useradd: this.completeAddress,
      coordinates: [this.lat, this.lng]

    }
    let location = {
      cordinates: [this.lat, this.lng]
    }

    this.http.post(environment.API_URL+ '/address', body).subscribe(data => {
      console.log("ADDRESS SAVED:- "+data);
      this.router.navigate(['tabs', 'tab1']);
      this.presentToast("Address Saved Successfully")

    })
  
  }
 
  async presentAlert(msg: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      message: msg,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            ///open settings
            this.openNativeSettings.open('location').then(() => {
              console.log();
              this.presentToast("Setting opened")
              
            }).catch((err) => {
              this.presentToast("Something went wrong!"+ err);
            })
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }


  async presentToast(msg) {
    const toast = await this.toast.create({
      message:msg,
      duration: 2000
    });
    toast.present();
  }

  
  


  
  }


  
  

