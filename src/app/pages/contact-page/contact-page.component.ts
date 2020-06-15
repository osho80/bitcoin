import { Component, OnInit } from '@angular/core';

import {ContactService, Contact} from '../../services/contact.service';


@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  filterBy = {txt : ''}
  contacts : Contact[]

  constructor(private contactService : ContactService) { }

  
  ngOnInit() {
    this.contactService.contacts$.subscribe(contacts => {
      //console.log('Contacts from contacts page:', contacts);
      this.contacts = contacts;
    })
    this.contactService.loadContacts();
    
  }

  async removeContact(contactId) {
    await this.contactService.deleteContact(contactId);
    console.log('Deleted');
  }

  get filteredContatcts() {
    return this.contacts.filter(contact => contact.name.includes(this.filterBy.txt))
  }

}


//<li *ngFor="let contact of filteredContatcts>{{contact.email}}</li>
//<li *ngFor="let contact of filteredContatcts>{{contact.phone}}</li>

