import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'my-friends',
    template: `
    <section>
        <h1>Friends</h1>
        <h2>{{myFriends[0].name}} likes {{myFriends[0].likes}}</h2>
        <h2>{{myFriends[1].name}} likes {{myFriends[1].likes}}</h2>
    </section>
    `
})

export class Friends {
    
    @Input() myFriends;

    ngOnInit(){
        console.log('Love your friends!!', this.myFriends);
        
        
    }
}
