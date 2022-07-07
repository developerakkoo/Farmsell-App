import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, Platform, ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';
import { StorageService } from '../services/storage.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  subscription: Subscription;

  profile: File;
  fName;
  lName;
  email;
  contactNumber;
  city;
  landmark;
  colony;
  streetName;
  area;
  houseAddress;
  imageUrl;
  pincode;
  pincodeExists = false;
  verificationStatus: boolean = false;
  couponCode:string = "NO Code Code!";
  walletCashBackAvailable = 0;

  pincodes =[
    422101,
    411041,
    433222,
    345678,
    123456
  ]

  profileId;

  isUserAccountExists = false;

  constructor(private router: Router, 
    private authService: AuthService, 
    private storage: StorageService,
    private userService: UserService,
    private loadingCtrl: LoadingController,
    private http: HttpClient,private platform: Platform,
    public toastController: ToastController) { }


  async ngOnInit() {

    this.profileId = await this.storage.get('userId');

   console.log("PROFILEID: " + this.profileId);


  this.getUserProfile(this.profileId);
  this.getUserAddresses();

  }

  ionViewDidEnter() {
    this.subscription = this.platform.backButton.subscribeWithPriority(9999, () => {
      // do nothing
    });
    this.getUserProfile(this.profileId);
  }

  ionViewWillLeave() {
    this.subscription.unsubscribe();
  }
  onFileChangeEvent(event){
    console.log(event);
    
    this.profile = event.target.files[0];
  }

  refresh(){
    this.getUserProfile(this.profileId);
  }
  async getUserProfile(id: string){
    const loading = await this.loadingCtrl.create({
      message: "Getting your profile...",
      duration: 3000
    })
    loading.present();

    this.http.get(environment.API_URL+"/user/profile/" + id)
    .subscribe(user =>
    {
      console.log(user);
      
      if(user){
        this.fName = user['user'].fName;
       this.lName = user['user'].lName;
       this.email = user['user'].email;
       this.contactNumber = user['user'].contactNumber;
       this.houseAddress = user['user'].houseAddress;
 

       loading.dismiss();
      }
      
    },(err) =>{
      console.log(err);
      loading.dismiss();
      
    })
   
      
  
  }


  getUserAddresses(){
    this.http.get(environment.API_URL + "/address/"+ this.profileId)
    .subscribe(user =>{
      console.log(user);
      
    })
  }
  


  logOut(){
    this.router.navigate(['/']);
  }
  openSettings(){
    this.router.navigate(['settings']);
  }


  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1000
    });
    toast.present();
  }
}
