import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { Pokemon } from '../pokemon';
import {PokeApiService} from '../service-poke-api.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent {
  private Pokemons: Pokemon[];

  private MyPokemon: Pokemon;
  private MyPokemonNom: string;
  private MyPokemonId: string;

  constructor(private pokeService: PokeApiService) {
    this.Pokemons = [];
    pokeService.getListPokemons().subscribe(value => {
            value.results.forEach((element, key) => {
              this.Pokemons.push(new Pokemon(key, element.name, element.url));
            });
    });
    console.log(this.Pokemons);
  }

  foo(pokemonChoice: string) {
    this.Pokemons.forEach(pokemon => {
        if (pokemon.nom === pokemonChoice) {
          this.MyPokemon = pokemon;
        }
    });
    this.MyPokemonNom = this.MyPokemon.nom;
    this.MyPokemonId = this.MyPokemon.id;
  }
}
