import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
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
  picture: string;
  cameraOn: boolean = false;
  constructor(public service: ClienteService,public navCtrl: NavController, public navParams: NavParams,public storage: StorageService, public cameraservice:Camera ) {
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

  getCameraPicture() {

    this.cameraOn = true;

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.cameraservice.DestinationType.DATA_URL,
      encodingType: this.cameraservice.EncodingType.PNG,
      mediaType: this.cameraservice.MediaType.PICTURE
    }
    
    this.cameraservice.getPicture(options).then((imageData) => {
     this.picture = 'data:image/png;base64,' + imageData;
     this.cameraOn = false;
    }, (err) => {
      this.cameraOn = false;
    });
  }

}
