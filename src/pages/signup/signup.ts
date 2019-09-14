import { HomePage } from './../home/home';
import { ClienteService } from './../../services/domain/cliente.service';
import { CidadeDTO } from './../../models/cidade.dto';
import { CidadeService } from './../../services/cidade.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { EstadoService } from '../../services/domain/estado.service';
import { EstadoDTO } from '../../models/estado.dto';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  formGroup: FormGroup;
  estados : EstadoDTO[];
  cidades: CidadeDTO[];
 
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private formBuilder: FormBuilder,
     public cidadeService: CidadeService,
     public estadoService: EstadoService,
     public clienteservice: ClienteService,
     public alertCtrl:AlertController) {

      this.formGroup  =  this.formBuilder.group({
        nome: ['Joaquim', [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
        email: ['joaquim@gmail.com', [Validators.required, Validators.email]],
        tipo : ['1', [Validators.required]],
        cpfOuCnpj : ['06134596280', [Validators.required, Validators.minLength(11), Validators.maxLength(14)]],
        senha : ['123', [Validators.required]],
        logradouro : ['Rua Via', [Validators.required]],
        numero : ['25', [Validators.required]],
        complemento : ['Apto 3', []],
        bairro : ['Copacabana', []],
        cep : ['10828333', [Validators.required]],
        telefone1 : ['977261827', [Validators.required]],
        telefone2 : ['', []],
        telefone3 : ['', []],
        estadoId : [null, [Validators.required]],
        cidadeId : [null, [Validators.required]]      
       
      });


  }

  ionViewDidLoad(){
  this.estadoService.findEstados().subscribe(response =>{
    this.estados = response;
    this.formGroup.controls.estadoId.setValue(this.estados[0].id);
    this.updatecidades();
  }); 
}

updatecidades(){
  let estado_id  = this.formGroup.value.estadoId;
  this.cidadeService.findCidades(estado_id).subscribe(response =>{
    this.cidades = response;
    this.formGroup.controls.cidadeId.setValue(null);
  });
}
  public signupUser(){
    this.clienteservice.insertSusbscribe(this.formGroup.value);
      console.log("Cliente salvo com sucesso!")
      this.showInsertOk();
      this.navCtrl.setRoot(HomePage);
  }
  
  showInsertOk(){
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      subTitle: 'Cliente Inserido com Sucesso.',
      buttons:['OK']
    });
    alert.present();
    return;
  }    


}
