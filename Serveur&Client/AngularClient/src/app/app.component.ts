import { Component } from '@angular/core';
import {ContactsComponent} from "./contacts/contacts.component";
import {Contact} from "./contact";
import {ContactService} from "./contact.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  editedContact = null;
  getContact = null;

  constructor(private cs: ContactService) {
    this.cs.contactEditedEvent.subscribe(
      contact => this.editedContact = contact
    );
    this.cs.contactGetEvent.subscribe(
      contact => this.getContact = contact
    )
  }


}
