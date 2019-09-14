import { CartPage } from './../cart/cart';
import { CartService } from './../../services/domain/cart.service';
import { ProdutoService } from './../../services/domain/produto.service';
import { ProdutoDTO } from './../../models/produto.dto';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-produtodetail',
  templateUrl: 'produtodetail.html',
})

export class ProdutodetailPage {
item: ProdutoDTO;
  constructor(public navCtrl: NavController, public navParams: NavParams, public service: ProdutoService, public cartservice: CartService) {
  }

  ionViewDidLoad() {
    let produto_id = this.navParams.get("produto_id");
      this.service.findById(produto_id).subscribe(response =>{
        this.item = response;
    });

  }

  addTocart(produto: ProdutoDTO){
    this.cartservice.addProduto(produto);
    this.navCtrl.setRoot(CartPage)
  }

}
