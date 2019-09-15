import { ProdutodetailPage } from './../produtodetail/produtodetail';
import { ProdutoService } from './../../services/domain/produto.service';
import { ProdutoDTO } from './../../models/produto.dto';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { CategoriasPage } from '../categorias/categorias';


@IonicPage()
@Component({
  selector: 'page-produtos',
  templateUrl: 'produtos.html',
})
export class ProdutosPage {

  items : ProdutoDTO[];

  constructor(public alertCtrl:AlertController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public service: ProdutoService,
    public loadcontrol:LoadingController) {
  }

  ionViewDidLoad() {
    let categoria_id = this.navParams.get('categoria_id');
    let loading = this.presentLoading();
    if(categoria_id == undefined){
      let alert = this.alertCtrl.create({
        title: 'Categorias',
        subTitle: 'Selecione o Produto em Categorias!',
        buttons:['OK']
      });
      alert.present();
      
      return this.navCtrl.setRoot(CategoriasPage);
    }

    this.service.findByCategoria(categoria_id).subscribe(response =>{
      this.items = response['content'];
      loading.dismiss();
    });
  }

  showDetail(produto_id:string){
    this.navCtrl.push(ProdutodetailPage,{produto_id:produto_id});
  }

  presentLoading() {
    let loader = this.loadcontrol.create({
      content: "Aguarde..."
    });
    loader.present();
    return loader;
  }

}
