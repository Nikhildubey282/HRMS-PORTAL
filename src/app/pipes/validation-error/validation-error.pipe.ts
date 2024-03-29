import { Pipe, PipeTransform } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PATTERN_ERRORS } from '../../constant/error';
import { VALIDATION_MESSAGES, toTitleCase } from '../../constant/messages';

@Pipe({
  name: 'validate',
  pure:false
})
export class ValidationErrorPipe implements PipeTransform {
  constructor(){}

  transform(control: FormControl, name: string): any {
    return control && control.errors ? this.getValidationError(control, name) : '';
  }
  getValidationError(control: FormControl, name) {
    if (control.hasError('required')) {
      return `Enter a required Field`;
    }
    if (control.hasError('pattern')) {
      let pattern = control.errors.pattern.requiredPattern;
      return PATTERN_ERRORS(pattern, name);
    }
    if (control.hasError('minlength')) {
      return `${toTitleCase(name)} must be at least ${control.errors.minlength.requiredLength
        } characters long`;
    }
    if (control.hasError('min')) {
      return `${toTitleCase(name)} must be at least ${control.errors.min.requiredLength
        } digit long`;
    }
    if (control.hasError('maxlength')) {
      return `${toTitleCase(name)} can not be more than ${control.errors.maxlength.requiredLength
        } characters long`;
    }
    if (control.hasError('max')) {
      return `${toTitleCase(name)} can not be more than ${control.errors.max.max
        } `;
    }
    if (control.hasError('maxError')) {
      return `Maximum ${toTitleCase(
        name
      )} can not be less than minimum ${toTitleCase(name)}`;
    }
    if (control.hasError('matchPassword')) {
      return VALIDATION_MESSAGES[name]['matchPassword'] || '';
    }
  }

}
