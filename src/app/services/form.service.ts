import { Injectable } from '@angular/core';
import { Validators } from "@angular/forms";
import { Regex } from "src/app/constant/regex";


@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }

  VALIDATION = {
    email: [
      Validators.required,
      Validators.pattern(Regex.email),
      // Validators.maxLength(VALIDATION_CRITERIA.emailMaxLength),
    ],
    password: [
      Validators.required,
      Validators.pattern(Regex.password),
      // Validators.minLength(VALIDATION_CRITERIA.passwordMinLength),
      // Validators.maxLength(VALIDATION_CRITERIA.passwordMaxLength),
    ],
  };
  getControl(name: string, requierd = true) {
    //@ts-ignore: unreachable code error

    let compose = [...this.VALIDATION[name]];
    if (requierd) {
      if (name === "checkbox") {
        compose.splice(0, 0, Validators.requiredTrue);
      } else {
        compose.splice(0, 0, Validators.required);
      }
    }
    return [null, compose];
  }

}
