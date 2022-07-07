import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController, Platform, ToastController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';
import { StorageService } from '../services/storage.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-address-modal',
  templateUrl: './address-modal.page.html',
  styleUrls: ['./address-modal.page.scss'],
})
export class AddressModalPage implements OnInit {
  profileId;

  address;
  addressId;
  constructor(private router: Router, 
    private authService: AuthService, 
    private storage: StorageService,
    private userService: UserService,
    private loadingCtrl: LoadingController,
    private http: HttpClient,private platform: Platform,
    private modalController: ModalController,
    public toastController: ToastController) { }

  async ngOnInit() {

    this.profileId = await this.storage.get('userId');

   console.log("PROFILEID: " + this.profileId);


  this.getUserProfile(this.profileId);
  this.getUserAddresses();

  }

  onUpdateAddress(address) {
    console.log(address);
    let body = {
      useradd: this.address
    }
    this.http.put(environment.API_URL+ '/address/'+ this.addressId, body).subscribe(data => {
      console.log(data);

      this.router.navigate(['tabs', 'tab1']);
      
    },(error) => {
      console.log(error);
      
    })

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
      console.log(user['user'].houseAddress);
      
      
  
      
      loading.dismiss();
    },(err) =>{
      console.log(err);
      loading.dismiss();
      
    })
   
      
  
  }


  getUserAddresses(){
    this.http.get(environment.API_URL + "/address/"+ this.profileId)
    .subscribe(user =>{
      console.log(user['add'][0]._id);
      this.address = user['add'][0].useradd;
      this.addressId = user['add'][0]._id;

      
    })
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });

  }
  
}
