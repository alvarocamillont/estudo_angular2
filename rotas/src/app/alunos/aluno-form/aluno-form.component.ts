import { Component, OnInit, OnDestroy } from '@angular/core';
import { AlunosService } from './../alunos.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, OnDestroy {

  aluno: any;
  inscricao: Subscription;
  private formMudou = false;

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService
  ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        const id = params['id'];
        this.aluno = this.alunosService.getAluno(id);

        if (this.aluno === null ){
          this.aluno = {};
        }
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  onInput () {
    this.formMudou = true;
  }

  podeMudarRota (): boolean {
    if (this.formMudou) {
      return confirm('Tem certeza que deseja sair da página?');
    } else {
      return true;
    }
  }

}
