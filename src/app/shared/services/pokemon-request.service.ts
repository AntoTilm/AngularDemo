import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
// {
//   providedIn: 'root'
// }
export class PokemonRequestService {

  constructor(private http: HttpClient) { }

  getPokemonAll(url : string) {
    return this.http.get<any>(url);
  }
  getPokemonByName (name : string) {
    return this.http.get<any>('https://pokeapi.co/api/v2/pokemon/'+name);
  }
  getPokemonSpeciesFrenchDetails (name : string) {
    return this.http.get<any>('https://pokeapi.co/api/v2/pokemon-species/'+name);
  }
}
