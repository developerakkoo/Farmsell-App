import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-received',
  templateUrl: './order-received.page.html',
  styleUrls: ['./order-received.page.scss'],
})
export class OrderReceivedPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  viewOrders(){
    this.router.navigate(['history']);
  }

}
