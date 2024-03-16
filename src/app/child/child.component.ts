import { Component, Input } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() userName: string = ''

  ngOnInit() {
    this.message()
  }
  message() {
    Swal.fire({
      title: 'Enter your name',
      input: 'text',
      customClass: {
        validationMessage: 'my-validation-message',
      },
      preConfirm: (value) => {
        if (!value) {
          Swal.showValidationMessage('<i class="fa fa-info-circle"></i> Your name is required')
        } else {
          this.userName = 'hello' + ' ' + value
        }
      }
    })
  }
}
