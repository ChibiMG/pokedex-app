import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()

export class PokeIdService {

  private messageSource = new BehaviorSubject('bulbasaur');
  currentPokemonName = this.messageSource.asObservable();

  constructor() { }

  setPokemon(pokemon: string) {
    this.messageSource.next(pokemon);
  }

}
