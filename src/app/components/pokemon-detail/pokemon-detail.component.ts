import { Component, Input } from '@angular/core';
import { Pokemon } from '../../shared/pokemons-mock';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.css'
})
export class PokemonDetailComponent {

  
  @Input() pokemon?: Pokemon;

  ngOnChanges(){
    console.log(this.pokemon?.description)
  }


}
