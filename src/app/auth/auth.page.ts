import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { StorageService } from '../services/storage.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {


  mobileNumber: String;

  email: String;
  password: String;



  isOtpAuth = true;

  constructor(private alertController: AlertController,
              private router: Router,
              private http: HttpClient,
              private st: StorageService,
              private LoadingCtrl: LoadingController,
              private authService: AuthService,
              public toastController: ToastController) {

               

               }

  ngOnInit() {
  }


  async goToOtpPage() {
    const loading = await this.LoadingCtrl.create({
      message: "Sending OTP...", 
    });
    loading.present();

    this.authService.getToken(this.mobileNumber).subscribe(token =>{
      console.log(token);
      if(token['status'] === "success"){
        loading.dismiss();
        this.router.navigate(['enter-otp', this.mobileNumber]);
      }
      if(token['status'] === "error" ){
        console.log("Something went Wrong!");
        this.presentToast("Something went wrong!");
        loading.dismiss();
        
      }
    }, (error) =>{
      this.presentToast(error.message);
      loading.dismiss();

    })
  }



  async login() {
    const loading = await this.LoadingCtrl.create({
      message: "Please wait...", 
      
    });
    loading.present();

    let body = {
      email: this.email,
      password: this.password
    }
    this.http.post(environment.API_URL+'/user/login' ,body)
    .subscribe(async (user) => {
      console.log(user['userId']);
      if(user){
        this.st.set('userId', user['userId']).then(userId => {
          loading.dismiss();
          this.router.navigate(['tabs', 'tab1']);
        }).catch(error => {
          console.log(error);
          
        })
        
      }
    },(error) => {
      loading.dismiss();
      console.log(error.message);
      
    })
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm your number',
      message: `We will be Verifying your phone number <strong>${this.mobileNumber}</strong><br><br>Do you want to continue to verify your phone number?`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            this.goToOtpPage();
          }
        }
      ]
    });

    await alert.present();
  }

  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }
}
