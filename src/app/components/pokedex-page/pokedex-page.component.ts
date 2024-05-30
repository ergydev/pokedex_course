import { Component, Input, inject } from '@angular/core';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';
import { Pokemon } from '../../shared/pokemons-mock';

@Component({
  selector: 'app-pokedex-page',
  standalone: true,
  imports: [PokemonListComponent, PokemonDetailComponent],
  templateUrl: './pokedex-page.component.html',
  styleUrl: './pokedex-page.component.css'
})
export class PokedexPageComponent {

  selectedPokemon?: Pokemon;

  onPokemonClicked(pokemon: Pokemon){
    this.selectedPokemon = pokemon;
    pokemon.isDescriptionDisplayed = !pokemon.isDescriptionDisplayed;
  }
}
