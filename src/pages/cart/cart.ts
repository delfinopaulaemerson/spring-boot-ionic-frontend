import { CartService } from './../../services/domain/cart.service';
import { CartItem } from './../../models/cartitem';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
 items : CartItem[];
  
 constructor(public navCtrl: NavController, public navParams: NavParams, public cartservice:CartService) {
  }

  ionViewDidLoad() {
    let cart  = this.cartservice.getCart();
    this.items = cart.items;
  }

}
