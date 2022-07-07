import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonRouterOutlet, Platform } from '@ionic/angular';
import { StorageService } from './services/storage.service';
import { UserService } from './services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  isOtpValid = false;

  isUserNew:Boolean;

  @ViewChild(IonRouterOutlet) routerOutlet: IonRouterOutlet;
  constructor(private storage: StorageService,
              private router: Router,
              private userService: UserService,
              private alertCtrl: AlertController,
              private platform: Platform,
             ) {
  
         


              this.platform.backButton.subscribeWithPriority(9999, () => {
                this.presentAlertConfirm();
                document.addEventListener('backbutton', function (event) {
                  event.preventDefault();
                  event.stopPropagation();
                  console.log('hello');
                }, false);
              });
                // this.storage.get('userId').then(user => {
                //   if(user == null){

                //   }else{

                //     console.log("USERID FOUND "+user);
                //     this.router.navigate(['tabs', 'tab1'])
                //   }
                  
                // }).catch(err => {
                //   this.router.navigate(['']);
                //   console.log('No User ID');
                //   this.storage.clear();
                  
                // })

                    
    
  }



  async presentAlertConfirm() {
    const alert = await this.alertCtrl.create({
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
            navigator['app'].exitApp()
          }
        }
      ]
    });

    await alert.present();
  }
               
  }



