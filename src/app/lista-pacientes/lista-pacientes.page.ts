import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { ToastController, AlertController } from '@ionic/angular';
import { PacienteServiceService } from '../services/paciente-service.service';
import { PacienteModalPage  } from '../paciente-modal/paciente-modal.page';

@Component({
  selector: 'app-lista-pacientes',
  templateUrl: './lista-pacientes.page.html',
  styleUrls: ['./lista-pacientes.page.scss'],
})
export class ListaPacientesPage {
  pacientes: any;

  // Declarar uma instancia no construtor
  constructor(private http: HttpClient, public loadingController: LoadingController, public modalController: ModalController, private pacienteServiceService: PacienteServiceService) {
    this.loadingController.create({
      message: "Carregando"
    }).then((loader) => {
      loader.present()
      this.pacienteServiceService.list().subscribe(
        (data) => {
          this.pacientes = data
          loader.dismiss()
        }
      )
    })
  }
  add(paciente) {
    this.loadingController.create({
      message: "Carregando"
    }).then((loader) => {
      loader.present()
      this.pacienteServiceService.add(paciente).subscribe(
        (data) => {
          this.pacientes.push(data)
          loader.dismiss()
        }
      )
    })
  }

  excluir(paciente) {
    this.loadingController.create({
    }).then((loader) => {
      loader.present()
      this.pacienteServiceService.excluir(paciente.id).subscribe(
        (data) => {
          var i = this.pacientes.indexOf(paciente);
          this.pacientes.splice(i, 1);
          loader.dismiss()
        }
      )
    })
  }

  async modal() {
    const modal = await this.modalController.create({
      component: PacienteModalPage
    });
    await modal.present();

    modal.onDidDismiss().then((dados) => {
      this.add(dados.data)
    })

  }
}