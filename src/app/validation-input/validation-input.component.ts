import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { patterns } from 'src/utils/regex-patterns';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-validation-input',
  templateUrl: './validation-input.component.html',
  styleUrls: ['./validation-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ValidationInputComponent),
      multi: true
    }
  ]
})

export class ValidationInputComponent implements ControlValueAccessor {
  password: string = ''
  userName: string = ''
  strength: string = 'gray'

  // constructor() { }

  checkPasswordStrength() {
    const password = this.password

    if (password.length === 0) {
      this.strength = 'gray'
    } else if (patterns.easy.test(password)) {
      this.strength = 'easy'
    } else if (patterns.medium.test(password)) {
      this.strength = 'medium'
    } else if (patterns.strong.test(password)) {
      this.strength = 'strong'
    }
  }

  onSubmit() {
    if (this.password.length < 8) {
      Swal.fire({
        title: "Enter a password with more than 8 letters, numbers and symbols",
        icon: "error"
      })
    } else {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: 'Your password: ' + '<div style="font-weight:bold; color:red">' + this.password + '</div>',
        showConfirmButton: false,
        timer: 2500
      })
    }
  }

  writeValue(value: any): void {
    this.password = value;
  }

  registerOnChange(fn: any): void { }

  registerOnTouched(fn: any): void { }

  // setDisabledState(isDisabled: boolean): void { }
}
