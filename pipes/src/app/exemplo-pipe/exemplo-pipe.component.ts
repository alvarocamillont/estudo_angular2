import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  addLivro (livro: string) {
    this.livros.push(livro);
  }

}
