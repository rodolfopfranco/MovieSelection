import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

//libera o arquivo para ser usado no root (em qualquer lugar da aplicação):
@Injectable({
  providedIn: 'root'
})
export class ValidarCamposService {

  constructor() { }
//Métodos para validar os campos de cadastro-filmes.ts / html
  hasErrorValidar(control: AbstractControl, errorName: string): boolean {
    if ((control.dirty || control.touched) && this.hasError(control, errorName)) {
      return true;
    }
    return false;
  }

  hasError(control: AbstractControl, errorName: string): boolean {
    return control.hasError(errorName);
  }

  lengthValidar(control: AbstractControl, errorName: string): number {
    const error = control.errors[errorName];
    return error.requiredLength || error.min || error.max || 0;
  }
}
