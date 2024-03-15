import { Component } from '@angular/core'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-validation-input',
  templateUrl: './validation-input.component.html',
  styleUrls: ['./validation-input.component.css']
})
export class ValidationInputComponent {

  password: string = ''
  userName: string = ''
  strength: string = 'gray'


  checkPasswordStrength() {
    const password = this.password;

    if (password.trim().length === 0) {
      this.strength = 'gray';
    } else if (/^[a-zA-Z]+$/.test(password) || /^[0-9]+$/.test(password) || /^[!@#$%^&*()-_+=~<>?,.:/;{}[\]]+$/.test(password)) {
      this.strength = 'easy';
    } else if (/^[0-9a-zA-Z]+$/.test(password)) {
      this.strength = 'medium';
    } else if (/^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/`\-='"]+$/.test(password)) {
      this.strength = 'strong';
    }
  }


  // message() {
  //   Swal.fire({
  //     title: 'Enter your name',
  //     input: 'text',
  //     customClass: {
  //       validationMessage: 'my-validation-message',
  //     },
  //     preConfirm: (value) => {
  //       if (!value) {
  //         Swal.showValidationMessage('<i class="fa fa-info-circle"></i> Your name is required')
  //       } else {
  //         this.userName = 'hello' + ' ' + value
  //       }
  //     }
  //   })
  // }



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
        html: `<button (click)="copyPassword()" class="btn waves-effect waves-light" type="button" name="copy">Copy Password</button>`,
        showConfirmButton: false,
        timer: 2500
      })
    }
  }

  // copyPassword() {
  //   const passwordInput = document.getElementById('password') as HTMLInputElement
  //   passwordInput.select()
  //   document.execCommand('copy')
  // }
}
