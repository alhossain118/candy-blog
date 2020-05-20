import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function patternValidator(regex: RegExp, controlName: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value) {
      if (regex.test(String(control.value).toLowerCase())) {
        return null;
      }
      return {
        pattern: `${controlName} regex failed`,
      };
    }
    return null;
  };
}
