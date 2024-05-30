import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from './pokemons-mock';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  private http = inject(HttpClient);

  constructor() { }

  getPokemons() : Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>('../../assets/data/pokemons.json')
  }
}
