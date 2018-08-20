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
}
