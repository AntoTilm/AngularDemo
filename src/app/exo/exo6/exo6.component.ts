import { Component, OnInit } from '@angular/core';
import { iPokemonDetails } from 'src/app/shared/models/iPokemonDetails';
import { PokemonRequestService } from 'src/app/shared/services/pokemon-request.service';

@Component({
  selector: 'app-exo6',
  templateUrl: './exo6.component.html',
  styleUrls: ['./exo6.component.scss']
})
export class Exo6Component implements OnInit {
  pokemonList: any[] = [];
  pokemon! : iPokemonDetails;
  totalCount? : number;
  next? : string;
  previous? : string;
  pokemonDetails?: string;
  pokemonDetailsTemp?: any[];

  constructor(private _pokemonHttpRequest: PokemonRequestService) { }
  
  ngOnInit(): void {
    this._pokemonHttpRequest.getAllPokemon('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20').subscribe(data => {
      this.pokemonList = data.results;
      this.totalCount = data.count;
      this.next = data.next;
      this.previous = data.previous;
      // Début de code pour rapatrier les noms en francais      
      // this.pokemonService.getPokemonDescriptionService(data.results.name).subscribe(data2 => {
      //   const pokemonFrenchName = data2.results
      //   console.log(pokemonFrenchName);       
      //   }) 
    })
  }
  nextPage() : void {
    if(this.next!=null) {

    this._pokemonHttpRequest.getAllPokemon(this.next).subscribe(data => {
      this.pokemonList = data.results;
      this.next = data.next;
      this.previous = data.previous;
  })
}}

previousPage(): void {
  if(this.previous!=null) {

  this._pokemonHttpRequest.getAllPokemon(this.previous).subscribe(data => {
    this.pokemonList = data.results;
    this.next = data.next;
    this.previous = data.previous;
})
}}
getPokemonDescription(name : string) {
  this._pokemonHttpRequest.getFrenchDetails(name).subscribe(data => {
    
    this.pokemonDetailsTemp = data.flavor_text_entries;
    const indexWithFrenchLanguage = this.pokemonDetailsTemp?.findIndex((item) => item.language.name === 'fr')
    // console.log(this.pokemonDetails);     
    // console.log(indexWithFrenchLanguage);  
    // console.log(this.pokemonDetailsTemp);  
    this.pokemonDetails = data.flavor_text_entries[indexWithFrenchLanguage!].flavor_text;
  });
}
  getPokemonDetails(name : string) {
    this._pokemonHttpRequest.getPokemonByName(name).subscribe(data => {
      this.pokemon = data;
      // console.log(this.pokemon); 
      this.getPokemonDescription(name)     
    });
  }
  
}