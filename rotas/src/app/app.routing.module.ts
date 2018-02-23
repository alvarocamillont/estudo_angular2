import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth-guard';
import { CursosGuard } from './guards/cursos.guard';

const appRoutes: Routes = [
  {
    path: 'cursos',
    loadChildren: 'app/cursos/cursos.module#CursosModule',
    canActivate:[AuthGuard],
    canActivateChild:[CursosGuard]
  },
  {
    path: 'alunos',
    loadChildren: 'app/alunos/alunos.module#AlunosModule',
    canActivate:[AuthGuard]
  },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: HomeComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
