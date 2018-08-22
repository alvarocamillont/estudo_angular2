import { EstadosBr } from './../models/estadosbr';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {
  constructor(private http: HttpClient) {}

  getEstadosBr(): Observable<EstadosBr[]> {
    return this.http.get<EstadosBr[]>('assets/dados/estados.json');
  }

  getCargos() {
    return [
      { nome: 'Dev', nivel: 'Junior', desc: 'Dev Jr' },
      { nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl' },
      { nome: 'Dev', nivel: 'Senior', desc: 'Dev Sr' }
    ];
  }
}
