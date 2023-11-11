import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['../app.component.scss', './forms.scss', './contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup = new FormGroup({
    'userName': new FormControl(null, [Validators.required, Validators.pattern(/^[a-zA-Z]/)]),
    'userPhone': new FormControl(null, [Validators.required, Validators.pattern(/^-?(0|[0-9]\d*)?$/)]),
    'userEmail': new FormControl(null, [Validators.required, Validators.email]),
    'userSubject': new FormControl(null, [Validators.required, Validators.pattern(/^[a-zA-Z]/)]),
    'userMessage': new FormControl(null, [Validators.required, Validators.pattern(/^[a-zA-Z]/)]),
  })

  constructor() { }



  onSubmit() {
    console.log(this.contactForm.value)
  }
}
