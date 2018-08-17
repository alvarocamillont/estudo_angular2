import { ConsultaCepService } from './../shared/services/consulta-cep.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  usuario: any = {};

  constructor(
    private http: HttpClient,
    private cepService: ConsultaCepService
  ) {}

  ngOnInit() {}

  onSubmit(form) {
    console.log(form);
    this.http
      .post('enderecoserver/formUsuario', JSON.stringify(form.value))
      .subscribe();
  }

  verificaValidTouched(campo) {
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }

  consultaCEP(cep: string, form) {
    if (cep != null && cep !== '') {
      this.cepService.consultaCEP(cep).subscribe(dados => {
        this.resetaDadosForm(form);
        this.populaDadosForm(dados, form);
      });
    }
  }

  populaDadosForm(dados, formulario) {
    formulario.form.patchValue({
      endereco: {
        cep: dados.cep,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf,
        rua: dados.logradouro
      }
    });
  }

  resetaDadosForm(formulario) {
    formulario.form.patchValue({
      endereco: {
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null,
        rua: null
      }
    });
  }
}
