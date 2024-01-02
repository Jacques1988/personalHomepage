import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

  constructor(private contactService: ContactService) { }

  contactForm: FormGroup = new FormGroup({
    'userName': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z]/)]),
    'userPhone': new FormControl(null, [Validators.required, Validators.pattern(/^-?(0|[0-9]\d*)?$/)]),
    'userEmail': new FormControl(null, [Validators.required, Validators.email]),
    'userSubject': new FormControl(null, [Validators.required, Validators.minLength(5), Validators.pattern(/^[a-zA-Z]/)]),
    'userMessage': new FormControl(null, [Validators.required, Validators.minLength(20), Validators.pattern(/^[a-zA-Z]/)]),
    'datasec': new FormControl(null, Validators.required)
  })
  showError: boolean = false;
  datasecAccepted: boolean = false;
  sender: string = '';
  mailDelivered: boolean = false;


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
      this.datasecAccepted = false;
      if (this.showError) {
        this.getErrorDatasec();
      }
    } else {
      this.showError = false;
      this.datasecAccepted = true;
    }
  }

  onSubmit() {
    this.checkDataSecAccepted();
    if (this.datasecAccepted) {
      this.send();
    }
  }

  send() {
    this.sender = this.contactForm.value.userName;
    this.contactService.sendedMail.next(true);
    this.contactService.setData(this.sender);
    this.contactService.sendAnEmail(this.contactForm.value).subscribe((response: any) => {
      console.log(response);
    })
  }
}

