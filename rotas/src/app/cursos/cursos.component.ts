import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit, OnDestroy {

  cursos: any[];
  pagina: number;
  inscricao: Subscription;

  constructor(private cursosService: CursosService,
  private activatedRoute: ActivatedRoute,
  private router: Router
  ) { }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();

    this.inscricao = this.activatedRoute.queryParams.subscribe(
      (queryParams: any) => {
        this.pagina = queryParams['pagina'];
      }
    );

  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  proximaPagina() {
    this.pagina ++;
    this.router.navigate(['/cursos'],
    {queryParams: {'pagina': this.pagina }} );
  }

}
