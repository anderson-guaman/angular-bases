import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {

  @Input()
  public characterList : Character[] = [{
    name : 'Trunks',
    power : 10,
  }];

  @Output()
  onDelete : EventEmitter<string> = new EventEmitter();
  //onDelete : EventEmitter<number> = new EventEmitter();

  // onDeleteCharacter(index : number) : void{
  //   this.onDelete.emit(index);
  //   console.log({index});

  // }
  onDeleteCharacter(id : string) : void{

    //if (!id) return; // se podia controlar aqui tambien para que no mande a llamar y ejecute el eliminado si no hay id
    this.onDelete.emit(id);
    console.log(id);
  }

}
