import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { Pokemon } from '../pokemon';
import {PokeApiService} from '../service-poke-api.service';
import {Observable} from 'rxjs';
import {PokeIdService} from '../service-poke-id.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.css']
})
export class PokemonSearchComponent {
  private Pokemons: Pokemon[];

  constructor(private pokeService: PokeApiService, private IdService: PokeIdService) {
    this.Pokemons = [];
    pokeService.getListPokemons().subscribe(value => {
      value.results.forEach((element, key) => {
        this.Pokemons.push(new Pokemon(key + 1, element.name, element.url));
      });
    });
    console.log(this.Pokemons);
  }

  foo(pokemonChoice: string) {
    this.IdService.setPokemon(pokemonChoice);
  }
}
