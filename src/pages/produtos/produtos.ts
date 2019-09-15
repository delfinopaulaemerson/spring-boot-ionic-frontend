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

  items : ProdutoDTO[] = [];
  page : number = 0;

  constructor(public alertCtrl:AlertController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public service: ProdutoService,
    public loadcontrol:LoadingController) {
  }

  ionViewDidLoad() {
    this.loadData();
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
  loadData(){
    let categoria_id = this.navParams.get('categoria_id');
    let loading = this.presentLoading();
    if(categoria_id == undefined){
      let alert = this.alertCtrl.create({
        title: 'Categorias',
        subTitle: 'Selecione o Produto em Categorias!',
        buttons:['OK']
      });
      alert.present();
      
      this.navCtrl.setRoot(CategoriasPage);
    }

    this.service.findByCategoria(categoria_id,this.page,10).subscribe(response =>{
      this.items = this.items.concat(response['content']);
      loading.dismiss();
      console.log(this.page);
      console.log(this.items);
    });
  }

  doInfinite(infiniteScroll) {
    this.page++;
    this.loadData();
    setTimeout(() => {
      infiniteScroll.complete();
    }, 1000);
  }

  doRefresh(refresher) {
    this.page = 0;
    this.items = [];
    this.loadData();
    setTimeout(() => {
      refresher.complete();
    }, 1000);
  }

}
