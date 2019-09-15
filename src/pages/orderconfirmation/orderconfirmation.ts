import { ClienteService } from './../../services/domain/cliente.service';
import { CartService } from './../../services/domain/cart.service';
import { CartItem } from './../../models/cartitem';
import { PedidoDTO } from './../../models/pedido.dto';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClienteDTO } from '../../models/cliente.dto';
import { EnderecoDTO } from '../../models/endereco.dto';
import { CartPage } from '../cart/cart';
import { CategoriasPage } from '../categorias/categorias';

@IonicPage()
@Component({
  selector: 'page-orderconfirmation',
  templateUrl: 'orderconfirmation.html',
})
export class OrderconfirmationPage {

  pedido: PedidoDTO;
  cartItems: CartItem[];
  cliente: ClienteDTO;
  endereco: EnderecoDTO;
  codpedido: string;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
    public cartservice:CartService,
    public clienteservice:ClienteService) {
    this.pedido = this.navParams.get('pedido');
  }

  ionViewDidLoad() {
    this.cartItems = this.cartservice.getCart().items;
    this.clienteservice.findById(this.pedido.cliente.id).subscribe(response=>{
      this.cliente = response as ClienteDTO;
      this.endereco = this.findEndereco(this.pedido.enderecoDeEntrega.id, response['enderecos']);
    });
  }

  private findEndereco(id: string, list: EnderecoDTO[]) : EnderecoDTO {
    let position = list.findIndex(x => x.id === id);
    return list[position];
  }

  checkout() {
    this.codpedido = '';
  }
  private extractId(location : string) : string {
    let position = location.lastIndexOf('/');
    return location.substring(position + 1, location.length);
  }

  total(){
    return this.cartservice.total();
  }
  back() {
    this.navCtrl.setRoot(CartPage);
  }

  home() {
    this.navCtrl.setRoot(CategoriasPage);
  }

}
