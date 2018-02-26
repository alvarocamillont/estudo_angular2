import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosRoutingModule } from './alunos.routing.module';
import { AlunosService } from './alunos.service';
import { AlunosGuard } from '../guards/alunos.guard';
import { AlunosDeactivateGuard } from '../guards/alunos-deactivate.guard';



@NgModule({
  imports: [CommonModule,
    AlunosRoutingModule,
    FormsModule],
  exports: [],
  declarations: [
    AlunosComponent,
    AlunoFormComponent,
    AlunoDetalheComponent
  ],
  providers: [AlunosService, AlunosGuard, AlunosDeactivateGuard],
})
export class AlunosModule { }
