import { Component, OnInit } from '@angular/core';
import {PokeApiService} from '../service-poke-api.service';
import {Pokemon} from '../pokemon';
import {PokeIdService} from '../service-poke-id.service';

@Component({
  selector: 'app-pokemon-choice',
  templateUrl: './pokemon-choice.component.html',
  styleUrls: ['./pokemon-choice.component.css']
})
export class PokemonChoiceComponent implements OnInit {

  private MyPokemon: Pokemon;
  private pokename: string;

  constructor(private IdService: PokeIdService, private PokeService: PokeApiService) {
    this.MyPokemon = new Pokemon('', '', '');
  }

  ngOnInit() {
    this.IdService.currentPokemonName.subscribe(pokemon => {
      this.pokename = pokemon;
      console.log("poke : " + this.pokename);
      this.PokeService.getPokemonByName(this.pokename).subscribe(value => {
        this.MyPokemon.id = value.id;
        this.MyPokemon.nom = this.pokename;
        this.MyPokemon.type = value.types[0].type.name;
        this.MyPokemon.stats = value.stats;
      });
    });
  }

}
