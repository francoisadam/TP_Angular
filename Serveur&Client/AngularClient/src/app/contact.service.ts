import {Injectable, EventEmitter, Output} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {Contact} from "./contact";

@Injectable()
export class ContactService {
  constructor(private http: Http) { }

  @Output() contactEditedEvent = new EventEmitter<Contact>();
  @Output() contactAddedEvent = new EventEmitter<Contact>();
  @Output() contactGetEvent = new EventEmitter<Contact>();

  getContacts() : Observable<Contact[]> {
    return this.http.get('http://localhost:3000/contacts').map(res => res.json() as Contact[]);
  }

  getContact(id: string) : Observable<Contact> {
    return this.http.get('http://localhost:3000/contacts/' + id).map(res => res.json() as Contact);
  }

  deleteContact(id: string) : Observable<any> {
    return this.http.delete('http://localhost:3000/contacts/' + id);
  }

  addContact(contact: Contact) : Observable<any> {
    return this.http.post('http://localhost:3000/contacts', contact);
  }

  editContact(id: string, contact: Contact) : Observable<any> {
    return this.http.put('http://localhost:3000/contacts/' + id, contact);
  }

}
