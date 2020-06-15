import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router'
import {UserService} from '../../services/user.service';
import {BitcoinService} from '../../services/bitcoin.service';
import {StorageService} from '../../services/storage.service';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user;
  rate;
  transactions = [];
  loggedIn= false;

  constructor(private userService: UserService, private bitcoinService: BitcoinService, private storageService: StorageService, private router: Router
    ) {}

  //private contactService : ContactService, 
  

  async ngOnInit() {
    // this.contactService.contacts$.subscribe(contacts => {
    //   console.log('Contacts', contacts);
    //   this.contacts = contacts;
    // })
    // this.contactService.loadContacts();
    this.loadUser();
    //console.log('user @ home: ', this.user);
    
    
    // return this.transactions;
    //Get user:
    

    this.rate = await this.setRate();
    
  }

  async loadUser() {
    this.user = await this.userService.getUser();
    this.transactions = this.user.moves.slice(0,3)
    
    console.log('user transactions @ home: ', this.transactions);
    
    console.log('user: ', this.user);
    if (this.user){
      this.loggedIn = true;
      return this.user
    } else {

      this.router.navigate(['/login'])
 
    }
  }
  
  async setRate() {
    let rate = await this.storageService.loadFromStorage('rate')
    if(rate) {
      console.log('rate from local storage: ', rate);
      return rate
    } else {
      rate = await this.bitcoinService.getRate();
      console.log('rate: ', rate);
      this.storageService.saveToStorage('rate', rate)

    }
  }

  // get transactions() {
  //   this.transactions = []
    // if(this.user.moves[2]) this.transactions.push(this.user.moves[2])
    // if(this.user.moves[1]) this.transactions.push(this.user.moves[1])
    // if(this.user.moves[0]) this.transactions.push(this.user.moves[0])
    // console.log(this.transactions);
    // return this.transactions;
    
   

  // }


}
