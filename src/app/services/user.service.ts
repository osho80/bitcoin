import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject, of } from 'rxjs';

import { StorageService } from './storage.service'



export class User {
    constructor(public _id?: string, public name: string = '', public coins: number = 100, public moves: any[] = []) { //, public moves: []
    }
    setId?() {
        // Implement your own set Id
        this._id = makeId()
    }

}

const USERS = [
    {
        _id: 'U100',
        name: "Aharon Goldberg",
        coins: 100,
        moves: []
    }
]

export class Transaction {
    constructor(public toId: string, public to: string, public at: number, public amount: number){}
}

@Injectable()


export class UserService {

    constructor(private storageService: StorageService) { }

    loggedInUser;
    // loggedInUser = new User;

    public async getUser() {
        this.loggedInUser = await this.storageService.loadFromStorage('user')
        if (this.loggedInUser) {
            console.log('user in getUser: ',this.loggedInUser);
            
            return this.loggedInUser
        } else {

            return USERS[0];
        }
    }

    public signUp(user) {
        // USERS[0].name = user.name;
        // console.log('Users: ', USERS);
        user.setId()
        console.log('user in signup: ', user);
        this.loggedInUser = user;
        
        this.storageService.saveToStorage('user',  this.loggedInUser)
        // this.storageService.saveToStorage('user', USERS[0])
        return this.loggedInUser;

    }

    public addMove(contact: {_id, name, email, phone}, amount: number){
        // let transaction = new Transaction
        console.log('user in addmove: ', this.loggedInUser);
        
        let transaction = {toId: contact._id, to: contact.name, at: Date.now(), amount}
        let newBalance = this.loggedInUser.coins - amount;
        this.loggedInUser.coins = newBalance;
        this.loggedInUser.moves.unshift(transaction)
        console.log('user after transaction: ', this.loggedInUser);
        
        this.storageService.saveToStorage('user',  this.loggedInUser)
        return this.loggedInUser;
        
    }

    public getTransactions(id){
        // this.getUser();
        console.log('moves got id', id);
        console.log('user in getTrans', this.loggedInUser);

        console.log('user moves', this.loggedInUser.moves);
        let moves = this.loggedInUser.moves.filter(move=> {
         return   move.toId === id
        })
        
        console.log('moves: ', moves);
        
        return moves;
    }

}

var gNextId = 101
function makeId() {
    return 'U' + gNextId++;
}