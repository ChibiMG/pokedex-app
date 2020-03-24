import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { Pokemon } from '../pokemon';
import {PokeApiService} from '../service-poke-api.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-my-component',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.css']
})
export class MyComponentComponent {
  private Pokemons: Pokemon[];

  private MyPokemon: Pokemon;

  constructor(private pokeService: PokeApiService) {
    this.Pokemons = [];
    this.MyPokemon = new Pokemon('', '', '');
    pokeService.getListPokemons().subscribe(value => {
      value.results.forEach((element, key) => {
        this.Pokemons.push(new Pokemon(key + 1, element.name, element.url));
      });
    });
    console.log(this.Pokemons);
  }

  foo(pokemonChoice: string) {
    this.pokeService.getPokemonById(pokemonChoice).subscribe(value => {
      this.MyPokemon.id = value.id;
      this.MyPokemon.nom = pokemonChoice;
      this.MyPokemon.type = value.types[0].type.name;
    });
  }

}
