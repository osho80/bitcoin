import { Component, OnInit, Input } from '@angular/core';
import {UserService } from '../../services/user.service'

@Component({
  selector: 'moves-list',
  templateUrl: './moves-list.component.html',
  styleUrls: ['./moves-list.component.scss']
})
export class MovesListComponent implements OnInit {

  @Input() contact;
  @Input() onTransaction;

  isPersonal = false;
  transactions;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    if(this.contact) this.isPersonal = true;
    this.loadTransactions(this.contact._id)
  }

  async loadTransactions(id){
    const user = await this.userService.getUser();
    let moves = user.moves.filter(move => {
      return move.toId === this.contact._id
    })
    this.transactions = moves;
    console.log('moves in list: ', moves);
    
    //this.moves = this.userService.getTransactions(id);
  }

}
