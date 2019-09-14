import { PickaddressPage } from './../pickaddress/pickaddress';
import { CategoriasPage } from './../categorias/categorias';
import { ProdutoDTO } from './../../models/produto.dto';
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
  
 constructor(public navCtrl: NavController, public navParams: NavParams, public cartservice: CartService) {
  }

  ionViewDidLoad() {
    let cart  = this.cartservice.getCart();
    this.items = cart.items;
  }

  removeItem(produto: ProdutoDTO) {
    this.items = this.cartservice.removeProduto(produto).items;
  }

  increaseQuantity(produto: ProdutoDTO) {
    this.items = this.cartservice.increaseQuantity(produto).items;
  }

  decreaseQuantity(produto: ProdutoDTO) {
    this.items = this.cartservice.decreaseQuantity(produto).items;
  }

  total() : number {
    return this.cartservice.total();
  }  

  goOn() {
    this.navCtrl.setRoot(CategoriasPage);
  }

  checkout() {
    this.navCtrl.push(PickaddressPage);
  }
}
