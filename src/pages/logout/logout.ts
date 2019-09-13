import { HomePage } from './../home/home';
import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html',
})
export class LogoutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth:AuthService) {}

  ionViewDidLoad() {
    this.auth.logouth();
    this.navCtrl.setRoot(HomePage);
  }

}
