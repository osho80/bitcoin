import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'my-counter',
    template: `
    <section>
        <button (click)="doInc()">{{val}}</button>
    </section>
    `
})

export class MyCounter {
    val;
    @Input() initialVal;
    @Output() whenInc = new EventEmitter
    
    ngOnInit(){
        console.log('Me created!!', this.initialVal);
        this.val = this.initialVal || 10;
        
    }

    // val = 98;
    doInc() {
       this.val++; 
       this.whenInc.emit(this.val)
    }

}