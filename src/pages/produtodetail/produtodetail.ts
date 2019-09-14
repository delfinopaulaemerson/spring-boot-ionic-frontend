import { ProdutoService } from './../../services/domain/produto.service';
import { ProdutoDTO } from './../../models/produto.dto';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-produtodetail',
  templateUrl: 'produtodetail.html',
})

export class ProdutodetailPage {
item: ProdutoDTO;
  constructor(public navCtrl: NavController, public navParams: NavParams, public service: ProdutoService) {
  }

  ionViewDidLoad() {
      this.service.findById(this.navParams.get("produto_id")).subscribe(response =>{
        this.item = response;
    });
  }

}
