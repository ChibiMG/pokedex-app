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
  private MyPokemonNom: String;
  private MyPokemonId: String;

  constructor(private pokeService: PokeApiService){
    //let pokeResp;
    //pokeService.getListPokemons().subscribe(resp => pokeResp);
    //console.log(pokeResp);
  }

  foo(pokemonChoice: String){
    //console.log("mon pokémon nom :" + pokemonChoice);
    this.Pokemons.forEach(pokemon => {
        if(pokemon.nom === pokemonChoice){
          this.MyPokemon = pokemon;
        }
    });
    this.MyPokemonNom = this.MyPokemon.nom;
    this.MyPokemonId = this.MyPokemon.id;
  }
}
