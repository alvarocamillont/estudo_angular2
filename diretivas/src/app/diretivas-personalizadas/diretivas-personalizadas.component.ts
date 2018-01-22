import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-personalizadas',
  templateUrl: './diretivas-personalizadas.component.html',
  styleUrls: ['./diretivas-personalizadas.component.css']
})
export class DiretivasPersonalizadasComponent implements OnInit {

  mostrar = false;

  constructor() { }

  ngOnInit() {
  }

  onMostraBotao () {
    this.mostrar = !this.mostrar;
  }

}
