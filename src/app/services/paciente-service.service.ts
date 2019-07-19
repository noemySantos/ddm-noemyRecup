import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PacienteServiceService {
  URL_BASE = 'https://5d262d00eeb36400145c59b3.mockapi.io/filme'

  constructor(private http: HttpClient) { }
  list() {
    return this.http.get("http://5d262d00eeb36400145c59b3.mockapi.io/paciente")
  }
  add(paciente) {
    return this.http.post("http://5d262d00eeb36400145c59b3.mockapi.io/paciente/", paciente)
  }
  excluir(id) {
    return this.http.delete("http://5d262d00eeb36400145c59b3.mockapi.io/paciente/" + id)
  }

}
