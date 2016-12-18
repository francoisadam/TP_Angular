import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Contact} from "../contact";
import {ContactService} from "../contact.service";

@Component({
  selector: 'contact-get',
  templateUrl: './contact-get.component.html',
  styleUrls: ['./contact-get.component.css'],
})
export class ContactGetComponent implements OnInit {
  @Input() getContact : Contact;

  constructor(private cs: ContactService) { }

  ngOnInit() {
  }

  setContactNull() {
    this.cs.contactGetEvent.emit(null);
  }

}
