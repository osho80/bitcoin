import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from '../../services/user.service'

@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent implements OnInit {
  @Input() contact;
  @Output() onToggleTransfer = new EventEmitter();
  @Output() onTransaction = new EventEmitter();

  submitted = false;
  constructor(private userService: UserService) { }


  ngOnInit(): void {
  }


  
  onSubmit(form: NgForm){
    console.log('form value: ', form.value.amount);
    this.submitted = true;
    this.onToggleTransfer.emit()
    this.userService.addMove(this.contact, form.value.amount)
    this.onTransaction.emit()
    //console.log('Submitted: ', this.model);
    //this.contactService.saveContact(this.model);
    //this.router.navigate(['/contact'])
    
    
  }

}
