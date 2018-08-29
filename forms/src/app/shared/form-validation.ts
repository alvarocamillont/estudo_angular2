import { FormArray, FormControl, FormGroup } from '@angular/forms';

export class FormValidations {
  static requiredMinCheckBox(min = 1) {
    const validator = (formArray: FormArray) => {
      const totalChecked = formArray.controls
        .map(v => v.value)
        .reduce((total, current) => (current ? total + current : total), 0);
      return totalChecked >= min ? null : { required: true };
    };

    return validator;
  }

  static cepValidator(control: FormControl) {
    const cep = control.value;
    if (cep && cep !== '') {
      const validacep = /^[0-9]{8}$/;
      const validaceptraco = /^[0-9]{5}-[0-9]{3}$/;
      return validacep.test(cep) || validaceptraco.test(cep)
        ? null
        : { cepInvalido: true };
    }
    return null;
  }

  static equalsTo(otherField: string) {
    const validator = (formControl: FormControl) => {
      if (otherField == null) {
        throw new Error('É necessário informar o campo.');
      }

      if (!formControl.root || !(<FormGroup>formControl.root).controls) {
        return null;
      }

      const field = (<FormGroup>formControl.root).get(otherField);

      if (!field) {
        throw new Error('É necessário um campo válido.');
      }

      if (field.value !== formControl.value) {
        return { equalsTo: otherField };
      }

      return null;
    };

    return validator;
  }
}
