import { HerbsAndSeasonalPage } from './../herbs-and-seasonal/herbs-and-seasonal.page';
import { FruitsPage } from './../fruits/fruits.page';
import { Component, OnInit, ViewChild } from '@angular/core';

import { DryFruitsPage } from '../dry-fruits/dry-fruits.page';
import { ExoticPage } from '../exotic/exotic.page';
import { SaladPage } from '../salad/salad.page';
import { LeafyVegPage } from '../leafy-veg/leafy-veg.page';
import { BakeryProductsPage } from '../bakery-products/bakery-products.page';
import {AlertController, IonSegment, IonSlides, LoadingController, Platform } from '@ionic/angular';
import { ProductService } from '../services/product.service';
import { StorageService } from '../services/storage.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Socket, SocketIoModule } from 'ngx-socket-io';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  @ViewChild('slide') slide: IonSlides;
  @ViewChild('segment') segment: IonSegment;
  selectedSegment: string;

  seg = 0;
  cart = [];
 
  totalCartItems;

  isQuantitySelected = 'false';


 sumOfCart;

  segmentList: Array<string> = ['DRY FRUITS',
                                'EXOTIC',
                                'VEGETABLES', 'LEAFYVEGETABLES', 'FRUITS',
                                'SALAD', 'BAKERY PRODUCTS']

  slideList: Array<string> = [
  'DRY FRUITS','EXOTIC',
  'VEGETABLES', 
  'LEAFYVEGETABLES', 'FRUITS',
  'SALAD', 'BAKERY PRODUCTS'];


  isSearchBarShown = false;

  userId;
  loginId;
  profileId;


  quantityTitle= "";

  customAlertOptions: any = {
   cssClass: 'alert',
   header: this.quantityTitle,
 
  };

  product = [
 
  ]
  index: number = 0;
  constructor(private prodService: ProductService, 
              private storage: StorageService,
              private io : Socket, private userService: UserService,
              private alertCtrl: AlertController,
              private platform: Platform,
              private loadingCtrl: LoadingController,
              private http: HttpClient, private router: Router) 
              {
    this.selectedSegment = this.segmentList[0];
    this.io.connect();

    this.io.on('cart', (data) => {
          this.getUserCart();
          
        })

     
   

    
  }


  quantitySelect(i){
    console.log(i.title);
    this.quantityTitle = i.title;
    this.customAlertOptions = {
      header: i.title
    }
    
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

  ionViewDidEnter(){
    this.getUserId();
   
  }

  ionViewDidLeave(){
    this.getUserId();
   
  }

  async getUserId(){
    this.profileId = await this.storage.get('userId');
 
    console.log("PROFILEID: " + this.profileId);
   this.getUserCart();
  }

  getUserCart(){
    this.userService.getUserById(this.profileId).subscribe(user => {
      if(user) {
        console.log("User Cart " + JSON.stringify(user['user'].cart));
     this.cart = user['user'].cart.items;

     if(user['user'].cart.items.length > 0) {
      let CartItem = this.cart.map(item => item.orderPrice).reduce((a,b) => a + b);
      let Quantity = this.cart.map(item => item.quantity).reduce((a,b) => a + b);


      console.log("CArt ITEM PRICE "+CartItem);
      console.log("CArt ITEM Quantity "+Quantity);
      this.sumOfCart = CartItem;
      this.totalCartItems = Quantity;
     }
     else{
       this.sumOfCart = 0;
       this.totalCartItems = 0;
     }
   
    

      }
    })
  }
  ngOnInit() {
    this.getUserId();
    this.getProducts(0);
  }


  async getProducts(index){
    let loading = await this.loadingCtrl.create({
      message: "Loading Products...",
      duration: 6000
    })

    loading.present();
    if(index === 0){
      this.prodService.getAllProducts('?category=DRYFRUIT').subscribe(data => {
        this.product = data['products'];
        console.log(this.product);
        loading.dismiss();
        
      })
     }
    if(index === 1){
      this.prodService.getAllProducts('?category=EXOTIC').subscribe(data => {
        this.product = data['products'];
        loading.dismiss();

      })
     } if(index === 2){
      this.prodService.getAllProducts('?category=VEGETABLE').subscribe(data => {
        this.product = data['products'];
        loading.dismiss();

      })
     } if(index === 3){
      this.prodService.getAllProducts('?category=LEAFYVEGETABLE').subscribe(data => {
        //console.log(data);
        this.product = data['products'];
        loading.dismiss();

      })
     } if(index === 4){
      this.prodService.getAllProducts('?category=FRUITS').subscribe(data => {
        //console.log(data);
        this.product = data['products'];
        loading.dismiss();

      })
     } if(index === 5){
      this.prodService.getAllProducts('?category=SALAD').subscribe(data => {
        //console.log(data);
        this.product = data['products'];
        loading.dismiss();

      })
     }
     if(index === 6){
      this.prodService.getAllProducts('?category=BAKERYPRODUCT').subscribe(data => {
        //console.log(data);
        this.product = data['products'];
        loading.dismiss();

      })
     }
    
   
  }

  segmentChanged($event: any, item: string, index: number) {
    console.log($event);
    //this.selectedSegment = $event.detail.value;
    this.slide.slideTo(index);
    // console.log(item, index);
    this.slide.update();
    
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.getProducts(this.index);

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
  
async ionSlideDidChange($event: any){
  let loading = await this.loadingCtrl.create({
    message: "Loading Products...",
    duration: 6000
  })

  loading.present();
  this.slide.getActiveIndex().then(index => {
    console.log(index);
    this.selectedSegment = this.segmentList[index];
   this.focusSegment(index);

   this.index = index;
   if(index === 0){
    this.prodService.getAllProducts('?category=DRYFRUIT').subscribe(data => {
      //console.log(data);
      this.product = data['products'];
      loading.dismiss();
    })
   }
   if(index === 1){
    this.prodService.getAllProducts('?category=EXOTIC').subscribe(data => {
      //console.log(data);
      this.product = data['products'];
      loading.dismiss();

    })
   } if(index === 2){
    this.prodService.getAllProducts('?category=VEGETABLE').subscribe(data => {
      //console.log(data);
      this.product = data['products'];
      loading.dismiss();

    })
   } if(index === 3){
    this.prodService.getAllProducts('?category=LEAFYVEGETABLE').subscribe(data => {
      //console.log(data);
      this.product = data['products'];
      loading.dismiss();

    })
   } if(index === 4){
    this.prodService.getAllProducts('?category=FRUITS').subscribe(data => {
      //console.log(data);
      this.product = data['products'];
      loading.dismiss();

    })
   } if(index === 5){
    this.prodService.getAllProducts('?category=SALAD').subscribe(data => {
      //console.log(data);
      this.product = data['products'];
      loading.dismiss();

    })
   }
   if(index === 6){
    this.prodService.getAllProducts('?category=BAKERYPRODUCT').subscribe(data => {
      //console.log(data);
      this.product = data['products'];
      loading.dismiss();

    })
   }
    
  })
}

focusSegment(segmentId) {
  document.getElementById(segmentId).scrollIntoView({ 
    behavior: 'smooth',
    block: 'center',
    inline: 'center',
    
  });
}



onSearchChange(event){
  console.log(event.detail.value);
  if(event.detail.value.length < 0){
    console.log("0 search");
    this.getProducts(this.index);

    
  }
  this.prodService.searchProduct(event.detail.value).subscribe(data =>{
    console.log(data);
    this.product = data['product'];

    
  })
}


onQuantityChange(event, id){
  let value = event.detail.value;
  let unit = value.split(" ")[1];
  let price =  value.split(" ")[4];
  let discountPrice =  value.split(" ")[6];
  
  console.log(unit, price, discountPrice, id);
  this.prodService.updateProduct(id,unit, price, discountPrice).subscribe(data =>{
    console.log(data);

    
  }, (error) =>{
    console.log(error.error);
    
  })
  
}


addProductToCart(item){
const productId = item._id;

  console.log(item._id);
  console.log(this.profileId);

  this.io.emit('addtocart', {productId: productId, userId: this.profileId});
  
}













  showSearchBar(){
    if(this.isSearchBarShown){
      this.isSearchBarShown = false;
    }
    this.isSearchBarShown = true;
  }

  onSearchBlur(event: any){
    console.log("blur");
    this.prodService.getAllProducts('?category=FRUITS').subscribe(data => {
      //console.log(data);
      this.product = data['products'];
    })
    if(event.detail == null){
      this.isSearchBarShown = false;
      this.prodService.getAllProducts('?category=FRUITS').subscribe(data => {
        //console.log(data);
        this.product = data['products'];
      })
    }
    
  }
}
