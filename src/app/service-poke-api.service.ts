import { Injectable } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicePokeApiService {

  private pokeApiUrl = 'https://pokeapi.co/';

  constructor() { }
}
