import { CredenciaisDTO } from './../../models/credenciais.dto';
import { CategoriasPage } from './../categorias/categorias';
import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  creds: CredenciaisDTO = {
    email: "",
    senha: ""
  };

  constructor(public navCtrl: NavController, public menu:MenuController) {

  }

  //navegacao para tela de categorias
  public login(){
    this.navCtrl.setRoot(CategoriasPage);
  }

  //desabilitando o menu da tela principal  
  ionViewWillEnter() {
    this.menu.swipeEnable(false);
    }
  
    //habilitando o menu da tela principal  
  ionViewDidLeave() {
    console.log(this.creds.email);
    console.log(this.creds.senha);
    
      this.menu.swipeEnable(true);
    }

}
