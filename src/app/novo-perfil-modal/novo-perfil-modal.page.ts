import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ModalController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx'; 

@Component({
  selector: 'app-novo-perfil-modal',
  templateUrl: './novo-perfil-modal.page.html',
  styleUrls: ['./novo-perfil-modal.page.scss'],
})
export class NovoPerfilModalPage {
  user = {
    "name":"",
    "img":""
  }
  USUARIO_KEY = 'usuario';

  constructor (public storage:Storage, public modalcontroler: ModalController, private camera: Camera) { }
  enviar (){
    this.modalcontroler.dismiss(this.user)
  
  }

  ngOnInit() {
  }
  foto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    }

    this.camera.getPicture(options).then((imageData) => {
      this.user.img = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      alert(err)
    });
  }
}

