import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {UserService } from '../../services/user.service'


import { ContactService } from '../../services/contact.service';


@Component({
  selector: 'contact-details-page',
  templateUrl: './contact-details-page.component.html',
  styleUrls: ['./contact-details-page.component.scss']
})

export class ContactDetailsPageComponent implements OnInit {

  contactId;
  contact;
  enableTransfer = false;
  transactions;

  constructor(private contactService: ContactService, private route: ActivatedRoute, private router: Router, private userService: UserService) { }


  ngOnInit() {
    this.route.paramMap.subscribe(params => { this.contactId = params.get('id') });
    console.log('Id: ', this.contactId);
    this.loadTransactions(this.contactId)
    this.loadContact();
    //.data.contact
  }

  loadContact() {
    this.contactService.getContactById(this.contactId)
      .subscribe(contact => this.contact = contact)
  }
  
  
  onToggleTransfer() {
    console.log('toggleing!');

    this.enableTransfer = !this.enableTransfer
  }

  async loadTransactions(id){
    console.log('loadTransactions - ID: ', id);
    
    const user = await this.userService.getUser();
    let moves = user.moves.filter(move => {
      return move.toId === this.contact._id
    })
    this.transactions = moves;
    console.log('moves in list: ', this.transactions);
    
    //this.moves = this.userService.getTransactions(id);
  }



}


