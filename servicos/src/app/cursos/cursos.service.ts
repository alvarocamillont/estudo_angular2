import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from '../shared/log.service';

@Injectable()
export class CursosService {

  static emitirCursoCriado = new EventEmitter<string>();

  private cursos: string[] = ['Javascript', 'HTML', 'ADVPL'];

  constructor (private logService: LogService) {
    console.log('CursoService');
  }

  getCursos() {
    this.logService.consoleLog('Obtendo lista de cursos');
    return this.cursos;
  }

  addCurso (curso: string) {
    this.logService.consoleLog(`Curso criado: ${curso}`);
    this.cursos.push(curso);
    CursosService.emitirCursoCriado.emit(curso);
  }

}
