import { CartService } from './../../services/domain/cart.service';
import { PedidoDTO } from './../../models/pedido.dto';
import { StorageService } from './../../services/storage.services';
import { ClienteService } from './../../services/domain/cliente.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EnderecoDTO } from '../../models/endereco.dto';
import { PaymentPage } from '../payment/payment';


@IonicPage()
@Component({
  selector: 'page-pickaddress',
  templateUrl: 'pickaddress.html',
})
export class PickaddressPage {
items : EnderecoDTO[];
pedido:PedidoDTO;

  constructor(public cartservice:CartService,public navCtrl: NavController, public navParams: NavParams,public storage:StorageService, public service : ClienteService) {
  }

  ionViewDidLoad() {
    let localUser = this.storage.getLocalUser();
    if(localUser && localUser.email){
         this.service.findByEmail(localUser.email).subscribe(response => {
           this.items = response['enderecos'];
           let cart = this.cartservice.getCart();
           this.pedido = {
             cliente: {id: response['id']},
             enderecoDeEntrega:null,
             pagamento:null,
             itens : cart.items.map(x => {return {quantidade: x.quantidade, produto: {id: x.produto.id}}})
           };

         });
    }
   }

  nextPage(item: EnderecoDTO){
    this.pedido.enderecoDeEntrega = {id: item.id};
    console.log(this.pedido);
    this.navCtrl.push(PaymentPage, {pedido: this.pedido});
  }

}
