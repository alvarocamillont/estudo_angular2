import { Injectable } from '@angular/core';



@Injectable()
export class CursosService {

  private cursos: string[] = ['Javascript', 'HTML', 'ADVPL'];

  constructor () {
    console.log('CursoService');
  }

  getCursos() {
    return this.cursos;
  }

  addCurso (curso: string) {
    this.cursos.push(curso);
  }

}
