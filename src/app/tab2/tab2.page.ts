import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ModalController, Platform } from '@ionic/angular';
import { Socket } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';
import { LocationPage } from '../location/location.page';
import { ProductService } from '../services/product.service';
import { StorageService } from '../services/storage.service';
import { UserService } from '../services/user.service';

import { Howl, Howler } from 'howler';
import { Subscription } from 'rxjs';
import { AddressModalPage } from '../address-modal/address-modal.page';
var sound = new Howl({
  src: ['/assets/success.wav']
});
declare var Razorpay: any;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  @Output() countChanged: EventEmitter<number> = new EventEmitter();
  CartItem;
  Quantity;

  subscription: Subscription;
  paymentMode;
  isCashOnDelivery;
  mydate;
  userId;
  slot = {};

  cart = [];
  totalPriceItems = [];
  totalCartItems;

  coordinates;


  @Input() sumOfCart;

  products = [];
  address = [];
  slots = [];


  amountToBePaid;

  isPaymentSuccessful = false;

  customAlertOptions: any = {
    header: 'Slots Available',
    inputs: [
      {
        name: 'Slots',
        type: 'date',
        min: new Date().toLocaleDateString('en-US')
      }
    ]
  };

  constructor(private router: Router,
    private storage: StorageService,
    private http: HttpClient,
    private userService: UserService,
    private productService: ProductService,
    private io: Socket,
    public modalController: ModalController,
    public alertController: AlertController,
    private loadingController: LoadingController,
    private platform: Platform,

  ) {
    this.getUserId();
    this.io.connect();

    this.io.on('cart', (data: any) => {
      // console.log("cart"+ JSON.stringify(data['cart']['items']));

      let cart = data['cart']['items'];



      // console.log("length: " + data['cart']['items'].length);

      this.getUserCart();

    })
    this.io.on('removecart', (data: any) => {
      console.log("cart io" + JSON.stringify(data['user']));
      this.getUserCart();
    })


    this.io.on('get:slot', (data: any) => {
      console.log("Slot ");
      console.log(data);
      this.slots = data;

    })

  }


  ionViewDidEnter() {
    this.subscription = this.platform.backButton.subscribeWithPriority(9999, () => {
      // do nothing
    });
    this.getUserId();
  }



 

  async getUserId() {


    this.userId = await this.storage.get("userId");
    console.log("USERID: ", this.userId);

    this.getUserCart();
    this.getUserAddresses();
    this.getSlot();


  }


  openLocation(){
    this.router.navigate(['address-modal']);
  }

  getUserAddresses() {
    this.http.get(environment.API_URL + '/address/' + this.userId).subscribe(address => {
      console.log(address['add'][0]);
      this.address = address['add'][0];
      this.coordinates = address['coordinates'];


    })
  }

  getSlot() {
    this.mydate = new Date().toISOString();
    console.log(this.mydate);

    this.http.get(environment.API_URL + '/slot').subscribe(slots => {
      console.log(slots);
      this.slots = slots['slot'];

    })
  }

  slotSelectedEvent(event){
     let data = event.detail.value;
     console.log(data);
    // console.log(data.endTime);
    // console.log(data.createdAt);

    let obj = {
      createdDate: data.createdAt,
      startTime: data.startTime,
      endTime: data.endTime
    }
    this.slot = obj;
    
    
  }

  selectAddress(){
    this.presentaddressModal();
  }


  async presentaddressModal() {
    const modal = await this.modalController.create({
      component: AddressModalPage,
      cssClass: 'my-custom-class',
      swipeToClose: true,
    });
    const { data } = await modal.onWillDismiss();
    console.log("Modal Closed----------");
    if(data){
      this.getUserAddresses();
    }


    return await modal.present();

   

  }


  PaymentOptionChange(event: any) {
    if (event.detail.value === 'cash') {
      console.log("CASH");
      this.isCashOnDelivery = true;
      this.paymentMode = "Cash On Delivery";

    }
    if (event.detail.value === 'online') {
      console.log("ONLINE");
      this.isCashOnDelivery = false;
      this.paymentMode = "Paid Online";


    }

  }

  openPromoCodePage() {
    this.router.navigate(['promo-code']);
  }

  initPay(options: any) {
    var rz = new Razorpay(options);
    rz.on('payment.failed', function (response) {
      console.log("ERROR: ", response.error.source);
      console.log("ERROR: ", response.error.reason);
      console.log("ERROR: ", response.error.code);

    })
    rz.open();

  }




  async onPlaceOrder() {
    console.log("Placing order");
    // this.router.navigate([ 'location']);
    let amount = this.sumOfCart;

    let order = {
      amount: amount * 100,
    }
    this.http.post(environment.API_URL + '/order', order).subscribe(order => {
      if (order['status'] === 'success') {
       console.log(order);

        const orderId = order['order'].id;

        const amount = order['order'].amount;

        const options = {
          key: "rzp_test_q92KbX0ZwFyaN0",
          amount: amount,
          description: "Amount To be Paid",
          currency: "INR",
          name: "FarmSell",
          "order_id": orderId,
          "handler": (response) => {
            if (response) {
              console.log("Send order Request ");


          this.showOrderPlacedPage();

            }
          },
          theme: {
            color: "#05a074"
          }
        }

        this.initPay(options);

      }

    })

  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.getUserCart();
    this.getUserAddresses();

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  showOrderPlacedPage() {
    this.userService.getUserById(this.userId).subscribe(user => {
      let orderItems = [];
      orderItems.push(user['user'].cart.items);

        let body = {
          items: user['user'].cart.items,
          userId:this.userId, 
          totalAmount: this.sumOfCart,
          paymentMode: this.paymentMode,
          slot: this.slot,
          coordinates: this.coordinates,
        }

            this.http.post(environment.API_URL + '/place', body).subscribe(response => {
            if (response) {
              console.log(response);
              
              this.clearUserCart(response['_id']);
              this.presentAlert();
              sound.play();


            }
          }, (error) => {
            console.log(error);

          })


      // orderItems.forEach((item: any[]) => {
      //   item.forEach((i: any[]) => {
      //     let orderBody = {
      //       productTitle: i['title'],
      //       productImage: i['imageUrl'],
      //       totalAmount: i['price'],
      //       userId: this.userId,
      //       productId: i['productId'],
      //       status: "Ready to Dispatch",
      //       paymentMode: this.paymentMode,
      //       cordinates: this.coordinates
      //     }

      //     // console.log(orderBody);


      
       // })

      //   console.log(orderItems);
        

      // })


    })



  }


  clearUserCart(orderId) {
    this.http.get(environment.API_URL + '/cart/clear/' + this.userId).subscribe(clearCart => {
      if (clearCart) {
        this.getUserCart();
        this.router.navigate(['history']);
      }
    })
  }

  async getUserCart() {


    this.userService.getUserById(this.userId).subscribe(user => {
      if (user) {
        console.log(user['user'].cart);
        this.cart = user['user'].cart.items;
        if (user['user'].cart.items.length > 0) {
          this.CartItem = this.cart.map(item => item.orderPrice).reduce((a, b) => a + b);
          this.Quantity = this.cart.map(item => item.quantity).reduce((a, b) => a + b);


          console.log("CArt ITEM PRICE " + this.CartItem);
          console.log("CArt ITEM Quantity " + this.Quantity);
          this.sumOfCart = this.CartItem;

        }
        else {
          this.sumOfCart = 0;
        }



      }
    })
  }

  getUserWithCart() {
    this.userService.getUserById(this.userId).subscribe(user => {
      this.cart = user['user'].cart.items;
      let items = [];
    })


  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Order Placed',
      subHeader: 'Your order is received successfully.',
      // message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }



  removeFromCart(id) {
    let body = {
      productId: id,

      userId: this.userId
    }

    console.log("Remove " + id);
    this.io.emit('removeFromCart', { userId: this.userId, productId: id });
    this.getUserCart();

  }


  addToCart(product) {
    
    console.log(product);
    
    let body = {
      productId: product._id,
      
      userId: this.userId
    }
    this.io.emit('addtocart', { productId: product._id, userId: this.userId });
    this.getUserCart();

  
    const cartProductIndex = this.products.findIndex(cp => {
      return cp.productId.toString() === product._id.toString();
    });

    console.log("cart product index: " + cartProductIndex);
    

  }


}
