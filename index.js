import { AbstractControl, ValidatorFn } from '@angular/forms';

export function matchEmailValidator(expression:string):ValidatorFn{
    return (control:AbstractControl):{[key:string]:boolean} | null =>{
        console.log(typeof(control.get('confirmEmail').value)+' '+control.get('confirmEmail').value);
        return control.get('email').value!=control.get('confirmEmail').value? {invalidEmail:true} : null;
    }
}