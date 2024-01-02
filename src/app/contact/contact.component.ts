import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: [
    '../app.component.scss',
    './contact.component.scss',
  ]
})
export class ContactComponent {
  sendedMail: boolean = false;
  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.sendedMail.subscribe(data => { this.sendedMail = data });
  }
}
