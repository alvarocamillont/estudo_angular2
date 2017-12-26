import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url = 'https://loiane.training';
  cursoAngular = true;
  urlImagem = 'https://loremflickr.com/320/240';

  constructor() { }

  ngOnInit() {
  }

  getValor() {
    return 2;
  }

  getCurtirCurso() {
    return true;
  }

}
