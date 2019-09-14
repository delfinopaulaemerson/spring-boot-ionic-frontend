import { AuthService } from './../../services/auth.service';
import { CredenciaisDTO } from './../../models/credenciais.dto';
import { CategoriasPage } from './../categorias/categorias';
import { Component } from '@angular/core';
import { NavController, MenuController, AlertController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  creds: CredenciaisDTO = {
    email: "",
    senha: ""
  };

  constructor(public navCtrl: NavController, public menu:MenuController, public auth: AuthService,private alertCtrl: AlertController) {

  }

  //navegacao para tela de categorias
  public login(){

    if(this.creds.email === '' || this.creds.senha === ''){
      let alert = this.alertCtrl.create({
        title: 'Error Login!',
        subTitle: 'Email our Senha incorreto(s).',
        buttons:['OK']
      });
      alert.present();
      return;
    }

    this.auth.authenticate(this.creds).subscribe(resposta =>{
      this.auth.sucessFullLogin(resposta.headers.get('Authorization'));
      this.navCtrl.setRoot(CategoriasPage);
    });
    
  }

  //ionViewDidEnter(){
    // this.auth.refreshToken().subscribe(response =>{
     // this.auth.sucessFullLogin(response.headers.get('Authorization'));
      //this.navCtrl.setRoot(CategoriasPage);
  //});

  //}

  public signUp(){
    this.navCtrl.push(SignupPage);
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
