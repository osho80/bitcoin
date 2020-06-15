import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {ContactService} from '../../services/contact.service';


@Component({
  selector: 'contact-details-page',
  templateUrl: './contact-details-page.component.html',
  styleUrls: ['./contact-details-page.component.scss']
})

export class ContactDetailsPageComponent implements OnInit {
  
  contactId;
  contact;
  enableTransfer = false;

  constructor(private contactService : ContactService, private route: ActivatedRoute, private router: Router) { }

  
  ngOnInit() {
    this.route.paramMap.subscribe(params=> {this.contactId = params.get('id')});
    console.log('Id: ', this.contactId);
    
    this.loadContact();
    //.data.contact
  }  
    
  loadContact(){
      this.contactService.getContactById(this.contactId)
        .subscribe(contact => this.contact = contact)
  }

  onToggleTransfer() {
    console.log('toggleing!');
    
    this.enableTransfer = !this.enableTransfer
  }

  

}


