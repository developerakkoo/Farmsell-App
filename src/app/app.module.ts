import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {SuperTabsModule} from '@ionic-super-tabs/angular';
import { NgOtpInputModule } from  'ng-otp-input';
import {HttpClientModule} from '@angular/common/http';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Network } from '@ionic-native/network/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { OpenNativeSettings } from '@awesome-cordova-plugins/open-native-settings/ngx';
import { IonicStorageModule } from '@ionic/storage-angular';
const config: SocketIoConfig = { url: 'http://localhost:8080', options: {} };
// url: 'http://ec2-13-59-85-143.us-east-2.compute.amazonaws.com:8080'
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), 
    
     AppRoutingModule, SuperTabsModule.forRoot(),
     HttpClientModule,SocketIoModule.forRoot(config) ,IonicStorageModule.forRoot({
       name: 'mydb'
     }), NgOtpInputModule, ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy, },Geolocation,NativeStorage,Network, OpenNativeSettings],
  bootstrap: [AppComponent],
})
export class AppModule {}
