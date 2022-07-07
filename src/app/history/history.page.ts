import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})

export class HistoryPage implements OnInit {

  URL = environment.API_URL;
  userId;


  cart:any[] = [];

  constructor(private storage: StorageService, 
    private router: Router, private http: HttpClient, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.getUserId();
  }

  IonViewWillEnter() {
    this.getUserId();
    this.getOrders();
  }
  
  
  async getUserId(){
    this.userId = await this.storage.get("userId");
    console.log("USERID: ", this.userId);
    this.getOrders();
    
    
    
   }

 

async getOrders(){
  let loading = await this.loadingCtrl.create({
    message: "Loading orders..."
  })
  loading.present();
  this.http.get(this.URL+ '/place/'+ this.userId).subscribe((order: any[]) => {
    console.log(order['order']);
    loading.dismiss();
    this.cart = order['order'];
  })
}

openOrderDetails(event, order){
  console.log(order._id);
  this.router.navigate(['order-detail', order.orderId, order._id])
  
}

}
