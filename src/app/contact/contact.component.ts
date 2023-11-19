import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from './contact.service';

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
    'datasec': new FormControl(null, Validators.required)
  })

  constructor(private contactService: ContactService) { }



  onSubmit() {
    let contactformContainer = document.getElementById('contactform-container');
    this.contactService.sendAnEmail(this.contactForm.value).subscribe((response: any) => {
      contactformContainer!.innerHTML = `<div class="sendmail">Deine Nachricht wurde erfolgreich versendet! Vielen Dank.`;
    })
  }
}
