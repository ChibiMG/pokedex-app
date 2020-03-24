import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './pokemon-search/my-component.component';

import { FormsModule } from '@angular/forms';
import { FilterPokemonPipePipe } from './filter-pokemon--pipe.pipe';
import {PokeApiService} from './service-poke-api.service';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { PokemonChoiceComponent } from './pokemon-choice/pokemon-choice.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    FilterPokemonPipePipe,
    PokemonChoiceComponent
  ],
  imports: [
    FormsModule, // Line to add
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PokeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
