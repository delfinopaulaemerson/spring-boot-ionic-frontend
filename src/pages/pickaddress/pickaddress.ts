import { StorageService } from './../../services/storage.services';
import { ClienteService } from './../../services/domain/cliente.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EnderecoDTO } from '../../models/endereco.dto';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-pickaddress',
  templateUrl: 'pickaddress.html',
})
export class PickaddressPage {
items : EnderecoDTO[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public storage:StorageService, public service : ClienteService) {
  }

  ionViewDidLoad() {
    let localUser = this.storage.getLocalUser();
    if(localUser && localUser.email){
         this.service.findByEmail(localUser.email).subscribe(response => {
           this.items = response['enderecos'];
         });
    }
   }

  nextPage(item: EnderecoDTO){

  }

}
