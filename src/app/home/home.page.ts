import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NovoPerfilModalPageModule } from '../novo-perfil-modal/novo-perfil-modal.module'
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user = {
    "name":"Castiel",
    "img":"https://www.estrelando.com.br/uploads/2017/08/18/misha-collins-4-1503065837.gallery.jpg"
  }

  constructor(public modalController: ModalController, public storage: Storage)  {
    this.storage.get('user').then((data) => {
      if (data) {
        this.user = data
      };
    });
  }

  async modal(){
    const modal = await this.modalController.create({
      component: NovoPerfilModalPageModule
    });
    await modal.present();

    modal.onDidDismiss().then((perfil) => {
      this.user = perfil.data
      this.storage.set("user", this.user)

    })
  }

}
