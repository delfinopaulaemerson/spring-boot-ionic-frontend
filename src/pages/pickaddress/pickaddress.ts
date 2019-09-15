import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EnderecoDTO } from '../../models/endereco.dto';

@IonicPage()
@Component({
  selector: 'page-pickaddress',
  templateUrl: 'pickaddress.html',
})
export class PickaddressPage {
items : EnderecoDTO[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.items =[ {
      id:"1",
      logradouro:"rua a",
      numero:"4",
      complemento:"casa",
      bairro:"são cristovão",
      cep:"20921080",
      cidade : {
        id:"1",
        nome:"Uberlandia",
        estado :{
          id:"1",
          nome:"Minas Gerais"
        }
      }
    },{
      id:"2",
      logradouro:"rua b",
      numero:"4",
      complemento:"apartamento",
      bairro:"copacabana",
      cep:"20921000",
      cidade : {
        id:"2",
        nome:"Rio de janeiro",
        estado :{
          id:"2",
          nome:"Rio de Janeiro"
        }
      }
    }];
   
  }

  nextPage(Endereco: EnderecoDTO){

  }

}
