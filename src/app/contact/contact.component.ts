import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from './contact.service';
import { MatCheckbox, MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['../app.component.scss', './contactform.scss', './contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup = new FormGroup({
    'userName': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z]/)]),
    'userPhone': new FormControl(null, [Validators.required, Validators.pattern(/^-?(0|[0-9]\d*)?$/)]),
    'userEmail': new FormControl(null, [Validators.required, Validators.email]),
    'userSubject': new FormControl(null, [Validators.required, Validators.minLength(5), Validators.pattern(/^[a-zA-Z]/)]),
    'userMessage': new FormControl(null, [Validators.required, Validators.minLength(20), Validators.pattern(/^[a-zA-Z]/)]),
    'datasec': new FormControl(null, Validators.required)
  })
  showError: boolean = false;

  constructor(private contactService: ContactService) { }

  getErrorName() {
    if (
      this.contactForm.get('userName')!.hasError('required') ||
      this.contactForm.get('userName')!.hasError('minlength')
    ) {
      return 'Bitte einen Namen angeben! (Min. 3 Buchstaben)';
    }
    return
  }

  getErrorPhone() {
    if (
      this.contactForm.get('userPhone')!.hasError('required') ||
      this.contactForm.get('userPhone')!.hasError('pattern')
    ) {
      return 'Bitte nur Zahlen eingeben!'
    }
    return
  }

  getErrorEmail() {
    if (
      this.contactForm.get('userEmail')!.hasError('required') ||
      this.contactForm.get('userEmail')!.hasError('email')
    ) {
      return 'Bitte Emailadresse überprüfen!'
    }
    return
  }

  getErrorSubject() {
    if (
      this.contactForm.get('userSubject')!.hasError('required') ||
      this.contactForm.get('userSubject')!.hasError('minlength') ||
      this.contactForm.get('userSubject')!.hasError('pattern')
    ) {
      return 'Betreff notwendig';
    }
    return
  }

  getErrorMessage() {
    if (
      this.contactForm.get('userMessage')!.hasError('required') ||
      this.contactForm.get('userMessage')!.hasError('minlength') ||
      this.contactForm.get('userMessage')!.hasError('pattern')
    ) {
      return 'Bitte eine Nachricht eingeben! (min. 20 Zeichen)'
    }
    return
  }

  getErrorDatasec() {
    if (
      this.contactForm.get('datasec')!.hasError('required') ||
      this.showError === true
    ) {
      return 'Bitte die Datenschutzrichtlinien akzeptieren!';
    }
    return;
  }

  status(event: MatCheckboxChange) {
    if (!event.checked) {
      this.showError = true;
      this.getErrorDatasec();
    } else if (event.checked) {
      this.showError = false;
    }
  }

  checkDataSecAccepted() {
    if (!this.contactForm.value.datasec) {
      this.showError = true;
      if (this.showError) {
        this.getErrorDatasec();
      }
    } else {
      this.showError = false;
    }
  }

  onSubmit() {
    let contactformContainer = document.getElementById('contactform-container');
    this.contactService.sendAnEmail(this.contactForm.value).subscribe((response: any) => {
      contactformContainer!.innerHTML = `<div class="sendmail">Deine Nachricht wurde erfolgreich versendet! Vielen Dank.`;
    })
  }
}
