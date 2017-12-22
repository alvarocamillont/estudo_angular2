import { CursosComponent } from './cursos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosDetalheComponent } from './cursos-detalhe/cursos-detalhe.component';
import { CursosService } from './cursos.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CursosComponent,
    CursosDetalheComponent
  ],
  exports: [
    CursosComponent,
    CursosDetalheComponent
  ],
  providers: [
    CursosService
  ]
})
export class CursosModule { }
