import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dados-detail',
  templateUrl: './dados-detail.page.html',
  styleUrls: ['./dados-detail.page.scss'],
})
export class DadosDetailPage {
  nome;
  paciente;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.nome = this.route.snapshot.paramMap.get('id')
    this.paciente = this.http.get("http://5d262d00eeb36400145c59b3.mockapi.io/paciente/" + this.nome).subscribe(
      (data) => {
        this.paciente = data
      }
    )
  }
}
