import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';
import { StorageService } from '../services/storage.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-enter-otp',
  templateUrl: './enter-otp.page.html',
  styleUrls: ['./enter-otp.page.scss'],
})
export class EnterOtpPage implements OnInit {


otp: Number;
number: String;

isOtpValid: boolean = false;

  constructor(private router: Router,
              private authService: AuthService,
              private route: ActivatedRoute,
              public alertController: AlertController,
              private LoadingCtrl: LoadingController,
              private http: HttpClient,
              private storage: StorageService) {
                
               }

  ngOnInit() {
    this.number = this.route.snapshot.paramMap.get('number'); 
    console.log("NUMBER", this.number);    
  }

  getOTP(event){
   
      this.otp = event;
      this.isOtpValid = true;
    
  }


  async verifyOtp(event) {
    const loading = await this.LoadingCtrl.create({
      message: "Please wait...", 
      
    });
    loading.present();
      this.authService.verifyToken(this.otp, this.number).subscribe(token => {
        console.log(token);
        if(token['success']) {
          loading.dismiss();
          console.log(token['success'].valid);
          if(token['success'].valid === true) {
            console.log("Otp token is valid");
            this.login();
            
          }
          
        }
      }, (error) => {
        console.log(error);
        loading.dismiss();
        this.presentAlert('ERROR', 'Go back and enter your number again!');
        
      })
    
    // this.router.navigate(['/tabs']);
  }

  async login() {
    const loading = await this.LoadingCtrl.create({
      message: "Creating profile...", 
      
    });
    loading.present();

    let body = {
      contactNumber: this.number
      }
    this.http.post(environment.API_URL+'/user/register' ,body)
    .subscribe(async (user) => {
      console.log(user['userId']);
      if(user){
        this.storage.set('userId', user['userId']).then(userId => {
          loading.dismiss();
          this.router.navigate(['location']);
        }).catch(error => {
          console.log(error);
          
        })
        
      }
    },(error) => {
      loading.dismiss();
      console.log(error.message);
      this.presentAlert('ERROR!', error.message);
      
    })
  }

  async presentAlert(err, msg) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: err,
      subHeader:msg,
      buttons: [
        {
          text: 'OK',
          handler: () =>{
            this.router.navigate(['']);
          }
        }
      ],
    
    });

    await alert.present();
  }
}
