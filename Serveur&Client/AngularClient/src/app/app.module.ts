import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {ContactService} from "./contact.service";
import {ContactsComponent} from "./contacts/contacts.component";
import {ContactGetComponent} from "./contact - get/contact-get.component";
import {ContactCreateComponent} from "./contact - create/contact-create.component";
import {ContactEditComponent} from "./contact - edit/contact-edit.component";


@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ContactGetComponent,
    ContactCreateComponent,
    ContactEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
