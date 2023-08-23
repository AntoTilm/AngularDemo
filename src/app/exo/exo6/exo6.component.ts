import { Component, OnInit } from '@angular/core';
import { iPokemonDetails } from 'src/app/shared/models/iPokemonDetails';
import { PokemonService } from 'src/app/shared/services/pokemon.service';

@Component({
  selector: 'app-exo6',
  templateUrl: './exo6.component.html',
  styleUrls: ['./exo6.component.scss']
})
export class Exo6Component implements OnInit {
  pokemonList: any[] = [];
  pokemon! : iPokemonDetails;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemonService.getPokemonListService().subscribe(data => {
      this.pokemonList = data.results;   
      console.log(this.pokemonList);
       
    });
  }  

  getPokemonDetails(name : string) {
    this.pokemonService.getPokemonDetailsService(name).subscribe(data => {
      this.pokemon = data;
      console.log(this.pokemon);      
    });
  }
}