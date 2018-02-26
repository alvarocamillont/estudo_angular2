import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosComponent } from './alunos.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosGuard } from '../guards/alunos.guard';
import { AlunosDeactivateGuard } from '../guards/alunos-deactivate.guard';

const alunosRoutes: Routes = [
  { path: '', component: AlunosComponent,
  canActivateChild: [AlunosGuard],
  children: [
    { path: 'novo', component: AlunoFormComponent,
     canDeactivate: [AlunosDeactivateGuard] },
    { path: ':id', component: AlunoDetalheComponent },
    { path: ':id/editar', component: AlunoFormComponent,
    canDeactivate: [AlunosDeactivateGuard]}
  ] }
 ];

@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule {

}

