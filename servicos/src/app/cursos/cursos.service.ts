import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CursosService {

  static emitirCursoCriado = new EventEmitter<string>();

  private cursos: string[] = ['Javascript', 'HTML', 'ADVPL'];

  constructor () {
    console.log('CursoService');
  }

  getCursos() {
    return this.cursos;
  }

  addCurso (curso: string) {
    this.cursos.push(curso);
    CursosService.emitirCursoCriado.emit(curso);
  }

}
