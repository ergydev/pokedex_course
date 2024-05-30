import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { PokedexPageComponent } from '../pokedex-page/pokedex-page.component';
import { PokedexService } from '../../shared/pokedex.service';
import { Pokemon } from '../../shared/pokemons-mock';
import { NgFor, NgIf } from '@angular/common';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [PokedexPageComponent, NgFor, PokemonDetailComponent, NgIf],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent {

  pokemons: Pokemon[] = [];

  private pokedexService = inject(PokedexService);

  ngOnInit(): void {
    this.pokedexService.getPokemons().subscribe(PokemonsFromJSON => {
      this.pokemons = PokemonsFromJSON;
    })
  }

  @Input()
  pokemon?: Pokemon;

  @Output()
  pokemonClicked = new EventEmitter<Pokemon>();

  onPokemonClick(pokemon: Pokemon){
    this.pokemonClicked.emit(pokemon);
  }

}
