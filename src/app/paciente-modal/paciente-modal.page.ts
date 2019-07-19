import { Component, OnInit } from '@angular/core';
import {ModalController } from '@ionic/angular';

@Component({
  selector: 'app-paciente-modal',
  templateUrl: './paciente-modal.page.html',
  styleUrls: ['./paciente-modal.page.scss'],
})
export class PacienteModalPage {
  novo_paciente = {
    "nome": "",
    "dt_nasc": "",
    "sexo": "",
    "idade": "",
    "id": ""
  }
  constructor(public modalController: ModalController) { }


  ngOnInit() {
  }
  add() {
    this.modalController.dismiss(this.novo_paciente)
  }

}
