import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';

import { FormsModule } from '@angular/forms';
import { FilterPokemonPipePipe } from './filter-pokemon--pipe.pipe';
import {PokeApiService} from './service-poke-api.service';
import {PokeIdService} from './service-poke-id.service';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { PokemonChoiceComponent } from './pokemon-choice/pokemon-choice.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonSearchComponent,
    FilterPokemonPipePipe,
    PokemonChoiceComponent
  ],
  imports: [
    FormsModule, // Line to add
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    PokeApiService,
    PokeIdService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
