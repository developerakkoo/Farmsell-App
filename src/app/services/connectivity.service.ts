import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Network } from '@ionic-native/network/ngx';
@Injectable({
  providedIn: 'root'
})
export class ConnectivityService {
  onDevice: boolean;

  constructor(public platform: Platform, private network: Network) {
    this.onDevice = this.platform.is('cordova');

   }


  isOnline() {
    return this.network.onConnect();
  }
  isOffline() {
   return this.network.onDisconnect();
  }


}
