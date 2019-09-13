import { CategoriasPage } from './../categorias/categorias';
import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public menu:MenuController) {

  }

  public login(){
    this.navCtrl.setRoot(CategoriasPage);
  }

  //desabilitando o menu da tela principal  
  ionViewWillEnter() {
    this.menu.swipeEnable(false);
    }
  
    //habilitando o menu da tela principal  
  ionViewDidLeave() {
      this.menu.swipeEnable(true);
    }

}
