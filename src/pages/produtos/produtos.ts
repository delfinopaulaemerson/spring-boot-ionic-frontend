import { ProdutoService } from './../../services/domain/produto.service';
import { ProdutoDTO } from './../../models/produto.dto';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-produtos',
  templateUrl: 'produtos.html',
})
export class ProdutosPage {

  items : ProdutoDTO[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: ProdutoService) {
  }

  ionViewDidLoad() {
    this.service.findByCategoria(this.navParams.get('categoria_id')).subscribe(response =>{
      this.items = response['content'];
    });
  }

}
