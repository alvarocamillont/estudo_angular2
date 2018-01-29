import { Injectable } from '@angular/core';



@Injectable()
export class CursosService {

  constructor () {
    console.log('CursoService');
  }

  getCursos() {
    return ['Javascript', 'HTML', 'ADVPL'];
  }

}
