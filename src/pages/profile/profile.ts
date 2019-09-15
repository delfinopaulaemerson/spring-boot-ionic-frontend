import { HomePage } from './../home/home';
import { ClienteService } from './../../services/domain/cliente.service';
import { StorageService } from './../../services/storage.services';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClienteDTO } from '../../models/cliente.dto';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  cliente: ClienteDTO;

  constructor(public service: ClienteService,public navCtrl: NavController, public navParams: NavParams,public storage: StorageService ) {
  }

  ionViewDidLoad() {
   let localUser = this.storage.getLocalUser();
   if(localUser && localUser.email){
        this.service.findByEmail(localUser.email).subscribe(response => {
          this.cliente = response as ClienteDTO;
        },
        error =>{
          if(error.status == 403){
            this.navCtrl.setRoot(HomePage);
          }
        });
   }
  }

}
