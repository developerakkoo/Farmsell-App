import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonRouterOutlet, Platform } from '@ionic/angular';
import { StorageService } from '../services/storage.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  ClickCounter;
  count;



  constructor(private storage: StorageService, private userService: UserService,
    private alertCtrl: AlertController,
    private platform: Platform,  
    private routerOutlet: IonRouterOutlet,
    private router: Router) {
   
  }



 

}
