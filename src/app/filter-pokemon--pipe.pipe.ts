import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name:  "filterPokemonPipe"
})
export class FilterPokemonPipePipe implements PipeTransform {

  transform(Pokemons: any[], searchString?: string): any {
    if(searchString === undefined){
      return Pokemons;
    }
    return Pokemons.filter((e) => {return e['nom'].toLowerCase().indexOf(searchString.toLowerCase()) !== -1;});
  }
}
