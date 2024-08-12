import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid'; // libreria que genera id unicos cuando mandas a llamar el metodo

console.log(uuid());

@Injectable({providedIn: 'root'})



export class DbzService {

  public characters : Character[] = [{
    id : uuid(),
    name : 'Krilin',
    power: 1000,
  },{
    id : uuid(),
    name: 'Goku',
    power:9500,
  },{
    id : uuid(),
    name: 'Vegeta',
    power: 7500,
  }];

  addCharacter(character : Character) : void{
    // console.log("Main Page")
    // console.log(character)
    //const newCharacter : Character = {id:uuid(), ...character} // los 3 puntos ... significa que se pasa todos los atributos al objeto nuevo
    character.id = uuid();

    this.characters.push(character);
  }

  // onDeleteCharacter( index : number) : void{
  //   this.characters.splice(index,1)
  // }
  deleteCharacterById( id:string){
    this.characters = this.characters.filter(character => character.id != id)
  }


}
