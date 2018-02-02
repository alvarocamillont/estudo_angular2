import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-exemplo-pipe',
  templateUrl: './exemplo-pipe.component.html',
  styleUrls: ['./exemplo-pipe.component.css']
})
export class ExemploPipeComponent implements OnInit {

  livro: any = {
    titulo: 'aprendendo javascript EBA',
    rating: 4.5665,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'https://tinyurl.com/ybr97fuk'
  };

  livros: string[] = ['Python', 'ADVPL'];

  filtro: string;

  valorAsync = new Promise((resolve, reject) => { setTimeout(() => resolve('Valor Assincrono') , 2000 ); });

  valorAsync2 = Observable.interval(2000)
  .map(valor => 'Valor assíncrono 2');

  constructor() { }

  ngOnInit() {
  }

  addLivro (livro: string) {
    this.livros.push(livro);
  }

  obterLivros () {
    if (this.livros.length === 0 || this.filtro === undefined || this.filtro.trim() === '') {
      return this.livros;
    }

    return this.livros.filter(
      (v: string) => {
        if (v.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0 ) {
          return true;
        }
        return false;
      } );
  }

}
