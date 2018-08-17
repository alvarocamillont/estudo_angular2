import { ConsultaCepService } from './../shared/services/consulta-cep.service';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DropdownService } from '../shared/services/dropdown.service';
import { EstadosBr } from '../shared/models/estadosbr';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {
  formulario: FormGroup;
  estados: EstadosBr;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private dropDownService: DropdownService,
    private cepService: ConsultaCepService
  ) {}

  ngOnInit() {
    this.dropDownService.getEstadosBr().subscribe(dados => {
      this.estados = dados;
      console.log(dados);
    });
    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.email]],
      endereco: this.formBuilder.group({
        cep: [null, [Validators.required]],
        numero: [null, [Validators.required]],
        complemento: [null],
        rua: [null, [Validators.required]],
        bairro: [null, [Validators.required]],
        cidade: [null, [Validators.required]],
        estado: [null, [Validators.required]]
      })
    });
  }

  onSubmit() {
    if (this.formulario.valid) {
      this.http
        .post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
        .subscribe(
          dados => {
            console.log(dados);
            // reseta o form
            this.resetar();
          },
          (error: any) => alert('erro')
        );
    } else {
      console.log('formulario invalido');
      this.verificaValidacoes(this.formulario);
    }
  }

  verificaValidacoes(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(campo => {
      console.log(campo);
      const controle = formGroup.get(campo);
      controle.markAsDirty();
      if (controle instanceof FormGroup) {
        this.verificaValidacoes(controle);
      }
    });
  }

  resetar() {
    this.formulario.reset();
  }

  verificaValidTouched(nomeCampo) {
    const campo = this.formulario.get(nomeCampo);
    return !campo.valid && (campo.touched || campo.dirty);
  }

  aplicaCssErro(campo) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }

  verificaEmailInvalido() {
    const campoEmail = this.formulario.get('email');
    if (campoEmail.errors) {
      return (
        campoEmail.errors['email'] && (campoEmail.touched || campoEmail.dirty)
      );
    }
  }

  consultaCEP() {
    const cep = this.formulario.get('endereco.cep').value;

    if (cep != null && cep !== '') {
      this.cepService.consultaCEP(cep).subscribe(dados => {
        this.resetaDadosForm();
        this.populaDadosForm(dados);
      });
    }
  }

  populaDadosForm(dados) {
    this.formulario.patchValue({
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

  resetaDadosForm() {
    this.formulario.patchValue({
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
