import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemonListService() {
    return this.http.get<any>('https://pokeapi.co/api/v2/pokemon');
  }
  getPokemonDetailsService (name : string) {
    return this.http.get<any>('https://pokeapi.co/api/v2/pokemon/'+name);
  }
}
