import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent {
  id: string = "";

  private Aquali: Pokemon;
  private Salameche: Pokemon;
  private Roselia: Pokemon;
  private Psykokwak: Pokemon;
  private Artikodin: Pokemon;
  private Lucario: Pokemon;
  private Pokemons: Pokemon[];

  private MyPokemon: Pokemon;
  private MyPokemonNom: String;
  private MyPokemonId: String;

  constructor(){
    this.Aquali = new Pokemon("1", "Aquali");
    this.Salameche = new Pokemon("2", "Salamèche");
    this.Roselia = new Pokemon("3", "Rosélia");
    this.Psykokwak = new Pokemon("4", "Psykokwak");
    this.Artikodin = new Pokemon("5", "Artikodin");
    this.Lucario = new Pokemon("6", "Lucario");
    this.Pokemons = [this.Aquali, this.Salameche, this.Roselia, this.Psykokwak, this.Artikodin, this.Lucario];
  }

  foo(pokemonChoice : String){
    console.log("mon pokémon nom :" + pokemonChoice);
    this.Pokemons.forEach(pokemon => {
        if(pokemon.nom === pokemonChoice){
          this.MyPokemon = pokemon;
        }
    });
    this.MyPokemonNom = this.MyPokemon.nom;
    this.MyPokemonId = this.MyPokemon.id;
  }
}
