import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name : string ='Iroman';
  public age : number = 45;

  get capitalizedName() : string {
    return 'Hola Mundo'.toUpperCase();
  }

  public getHeroDescription() : string{
    return `${this.name} -- ${this.age}`;
  }


  public changeHero() : void {
    this.name = 'Spiderman'
    this.age = 30;
  }
}
