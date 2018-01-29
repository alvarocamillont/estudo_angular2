import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CursoModule } from './cursos/curso.module';
import { CriarCursoModule } from './criar-curso/criar-curso.module';
import { LogService } from './shared/log.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CriarCursoModule,
    CursoModule
  ],
  bootstrap: [AppComponent],
  providers: [LogService]
})
export class AppModule { }
