import { Component } from '@angular/core';


@Component({
  selector: 'app-counter',
  template: `
  <h1>Counter:  {{counter}}</h1>
    <button (click)="increaseBy()">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="decreaseBy()">-1</button>
  `
})

export class CounterComponent {

  public counter:number = 0;

  increaseBy():void{
    this.counter++;
  }

  resetCounter():void{
    this.counter = 0;
  }

  decreaseBy():void{
    this.counter--;
  }

}
