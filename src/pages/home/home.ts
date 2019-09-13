import { AuthService } from './../../services/auth.service';
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

  constructor(public navCtrl: NavController, public menu:MenuController, public auth: AuthService) {

  }

  //navegacao para tela de categorias
  public login(){
    this.auth.auyhenticate(this.creds).subscribe(response =>{
      console.log(response.headers.get('Authorization'));
      this.navCtrl.setRoot(CategoriasPage);
    },
    error =>{}
    );

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
