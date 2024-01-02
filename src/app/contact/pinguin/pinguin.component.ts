import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-pinguin',
  templateUrl: './pinguin.component.html',
  styleUrls: ['./pinguin.component.scss']
})
export class PinguinComponent {
  sender: any = '';

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.clientMail.subscribe(data => { this.sender = data })
  }
}
