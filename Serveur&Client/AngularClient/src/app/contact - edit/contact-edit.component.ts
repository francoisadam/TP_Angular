import { Component, OnInit, Input, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Contact} from "../contact";
import {ContactService} from "../contact.service";

@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit{
  private contacts: Observable<Contact[]>;

  @Input() editedContact: Contact;

  constructor(private cs: ContactService) {}

  onSubmit() {
    this.cs.editContact(this.editedContact._id, this.editedContact).subscribe(
      result => this.cs.contactEditedEvent.emit(null)
    );
  }

  ngOnInit() {
  }
}

