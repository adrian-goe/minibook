import { AbstractControl, ValidatorFn } from '@angular/forms';

export function isbn13Validator(controlName: string): ValidatorFn {
  return (control: AbstractControl) => {
    const isbn: string = control?.value[controlName]?.replace(/[^0-9X]/gi, '');

    if (!isbn) {
      return null;
    }

    let sum = 0;

    for (let i = 0; i < 12; i++) {
      sum += (i % 2 === 0 ? 1 : 3) * +isbn[i];
    }

    if (+isbn[12] !== (10 - (sum % 10)) % 10) {
      return { isbn13: true };
    }

    return null;
  };
}
