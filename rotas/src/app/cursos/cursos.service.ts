import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  constructor() { }

  getCursos() {
    return [
      {id: 1, nome: 'Angular 2'},
      {id: 2, nome: 'Python'},
      {id: 3, nome: 'JavaScript'}
    ];
  }

  getCurso(id: number) {
    const cursos = this.getCursos();
    for (const curso of cursos) {
      if (curso.id == id) {
        return curso;
      }
    }
    return null;
  }

}
