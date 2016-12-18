import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ContactService} from "../contact.service";
import {Contact} from "../contact";
import {ContactCreateComponent} from "../contact - create/contact-create.component";

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  entryComponents: [ContactCreateComponent],
})
export class ContactsComponent implements OnInit {
  contacts: Contact[];

  constructor(private cs: ContactService) {
    this.cs.contactAddedEvent.subscribe(
      contact => this.contacts.push(contact)
    )
  }

  ngOnInit() {
    this.getContacts();
  }

  getContacts() : void {
    this.cs.getContacts().subscribe(contacts => this.contacts = contacts);
  }

  deleteContact(id: string) : void {
    this.cs.deleteContact(id).subscribe(() => {
        let index = this.contacts.findIndex(c => c._id === id);
        console.log('index: ' + index);
        this.contacts.splice(index, 1);
      }
    );
  }

  setEditedContact(contact: Contact) {
    this.cs.contactEditedEvent.emit(contact);
  }

  setGetContact(contact: Contact) {
    this.cs.contactGetEvent.emit(contact);
  }

}
