import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/auth/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

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



  profileId;
  constructor(private authService: AuthService, 
    private storage: StorageService,
    private userService: UserService,
    private loadingCtrl: LoadingController,
    private http: HttpClient,
    public toastController: ToastController) { }

  async ngOnInit() {
    this.profileId = await this.storage.get('userId');

   console.log("PROFILEID: " + this.profileId);
   this.getUserProfile(this.profileId);
   this.getUserAddresses();
  }

  async saveProfile(){

    let body = {
      fName: this.fName,
      lName: this.lName,
      email: this.email,
      contactNumber: this.contactNumber,
      houseAddress: this.houseAddress,
      city: this.city,
      colony: this.colony,
      streetName: this.streetName,
      landmark: this.landmark,
    }

    const loading = await this.loadingCtrl.create({
      message: "Creating profile...",
      
    })
    loading.present();

    this.http.put(environment.API_URL +'/user/profiles/'+ this.profileId, body )
    .subscribe(user => {
      console.log(user);
      loading.dismiss();
      this.presentToast('Profile Updated Successfully')      
    }, (error) => {
      console.log(error.error);
      loading.dismiss();
      this.presentToast('Something went wrong!')
      
    })
  }


  onChangeDefaultHouseAddress(){

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


  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1000
    });
    toast.present();
  }
}
