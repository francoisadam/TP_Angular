import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Contact} from "../contact";
import {ContactService} from "../contact.service";
@Component({
  selector: 'contact-create',
  templateUrl: 'contact-create.component.html'
})
export class ContactCreateComponent {
  constructor(private cs: ContactService) { }

  @Input() contact = new Contact('', '', '');

  onSubmit() {
    this.cs.addContact(this.contact).subscribe(
      result => {
        this.cs.contactAddedEvent.emit(this.contact)
      }
    );
  }
}
