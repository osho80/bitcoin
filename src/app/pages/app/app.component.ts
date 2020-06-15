import { Component } from '@angular/core';

//import {ContactService, Contact} from '../../services/contact.service';
import {UserService} from '../../services/user.service';
import {BitcoinService} from '../../services/bitcoin.service';
import {StorageService} from '../../services/storage.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'mister-bitcoin';
  
  // user;
  // rate;
  // constructor(private userService: UserService, private bitcoinService: BitcoinService, private storageService: StorageService) {}

  

  async ngOnInit() {
    
    console.log('Intializing');
    
    // this.user = this.userService.getUser();
    // console.log('user: ', this.user);

    // this.rate = await this.setRate();
    
  }
  
  // async setRate() {
  //   let rate = await this.storageService.loadFromStorage('rate')
  //   if(rate) {
  //     console.log('rate from local storage: ', rate);
  //     return rate
  //   } else {
  //     rate = await this.bitcoinService.getRate();
  //     console.log('rate: ', rate);
  //     this.storageService.saveToStorage('rate', rate)

  //   }
  // }

  //user = currUser
  // user = {name: 'Chico Cohen', balance: 67 };
  // friends = [
  //   {
  //     id: 'tsgt56',
  //     name: 'Muki',
  //     likes: 'Nature'
  //   },
  //   {
  //     id: 'vdg366',
  //     name: 'Shuki',
  //     likes: 'Poker'
  //   }
  // ];

  // whenBalanceChanged(newBalance) {
  //   this.user.balance = newBalance;
  //   console.log('Changed!!', newBalance);
    
  // }
}
