import { Component, OnInit } from '@angular/core';
import { ContactService, Contact } from '../../services/contact.service'
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {
  

  
  contactId;
  contact;

  constructor(private contactService : ContactService, private route: ActivatedRoute, private router: Router) { }

  
  ngOnInit() {
    this.route.paramMap.subscribe(params=> {this.contactId = params.get('id')});
    console.log('Id: ', this.contactId);
    
    if(this.contactId)
      this.loadContact();
      
   
  }  
    
  loadContact(){
      this.contactService.getContactById(this.contactId)
        .subscribe(contact => this.contact = contact)
      console.log('edit: ', this.contact);
        // this.setForm(this.contact)
      this.model = this.contact;
        
  }

  setForm(contact){
    // this.model = new Contact(this.contact._id, this.contact.name, this.contact.phone, this.contact.email)
    console.log('contact', contact);
    this.model = this.contact;
    
  }
  model = new Contact;
  submitted = false;
  
  onSubmit(form: NgForm){
    console.log('form value: ', form.value);
    this.submitted = true;
    console.log('Submitted: ', this.model);
    this.contactService.saveContact(this.model);
    this.router.navigate(['/contact'])
    
    
  }



}
