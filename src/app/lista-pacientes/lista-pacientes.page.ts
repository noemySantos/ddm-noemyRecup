import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { PacienteModalPageModule } from '../paciente-modal/paciente-modal.module'
@Component({
  selector: 'app-lista-pacientes',
  templateUrl: './lista-pacientes.page.html',
  styleUrls: ['./lista-pacientes.page.scss'],
})
export class ListaPacientesPage {
  pacientes;

  listar() {
    return this.http.get("http://5d262d00eeb36400145c59b3.mockapi.io/paciente")
  }
  adicionar(paciente) {
    return this.http.post("http://5d262d00eeb36400145c59b3.mockapi.io/paciente/", paciente)
  }
  delete(id) {
    return this.http.delete("http://5d262d00eeb36400145c59b3.mockapi.io/paciente/" + id)
  }

  constructor(public modalController: ModalController, private http: HttpClient, public loadingController: LoadingController) {
    this.listar().subscribe(
      (data) => {
        this.pacientes = data
      },
    )
  }
  deletar(paciente) {
    this.delete(paciente.id).subscribe(
      (data) => {
        var i = this.pacientes.indexOf(paciente);
        this.pacientes.splice(i, 1);
      }
    )
  }
  add(paciente) {
    this.adicionar(paciente).subscribe(
      (data) => {
        this.pacientes.push(data)

      }
    )
  }

  async modal() {
    const modal = await this.modalController.create({
      component: PacienteModalPageModule
    });
    await modal.present();

    modal.onDidDismiss().then((paciente) => {
      this.add(paciente.data)
    })
  }
}
