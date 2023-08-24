import { Component, OnInit } from '@angular/core';
import { iPokemonBase } from 'src/app/shared/models/iPokemonBase';
import { iPokemonDetails } from 'src/app/shared/models/iPokemonDetails';
import { iPokemonFrenchDetails } from 'src/app/shared/models/iPokemonFrenchDetails';
import { PokemonRequestService } from 'src/app/shared/services/pokemon-request.service';

@Component({
  selector: 'app-exo6',
  templateUrl: './exo6.component.html',
  styleUrls: ['./exo6.component.scss']
})

export class Exo6Component implements OnInit {
  // Objets à affiché dans le HTML
  pokemonList: iPokemonBase[] = []; 
  pokemonDetails! : iPokemonDetails; 
  pokemonFrenchDetails?: iPokemonFrenchDetails;

  // Url des Pokémons par 20 + url des 20 prochains et précédants pokemons + nombre total de Pokemon
  homeUrl = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20";
  actualUrl? : string;
  nextUrl? : string;
  previousUrl? : string;
  pokemonCount? : number;

  constructor(private _pokemonHttpRequest: PokemonRequestService) { }
  
  /**
   * @description Appelle la fonction homeView au démarrage de la page
   */
  ngOnInit(): void {
    this.homeView()
    this.actualUrl == this.homeUrl
      // this.totalCount = data.count; // A rajouter pour le compteur de pokemon
      //#region Début de code pour rapatrier les noms en francais  
      // Faire un foreach sur pokemonList. Faire des log pour les résultats. Modifier la liste POkemlist
      // this.pokemonService.getPokemonDescriptionService(data.results.name).subscribe(data2 => {
      //   const pokemonFrenchName = data2.results
      //   console.log(pokemonFrenchName);       
      //   }) 
      //#endregion  
  }
  
  /**
   * @description Fais la requête vers l'API pour les 20 premiers Pokémons.
   * @description Utilise dataAssignmentToProperty() pour affecter ces Pokemons à pokemonList et les URL nécéssaire à nextUrl et previousUrl
   */
  homeView() {
    this._pokemonHttpRequest.getPokemonAll(this.homeUrl).subscribe(data => {
      this.dataAssignmentToProperty(data);
      this.actualUrl = this.homeUrl;
      this.findIndex()
    })
  }

  /**
   * @description Vérifie si nextUrl est null. Si non, requête l'API pour les 20 Pokémons suivant.
   * @description Utilise dataAssignmentToProperty() pour affecter ces Pokemons à pokemonList et les URL nécéssaire à nextUrl et previousUrl
   */
  nextView() : void {
    if(this.nextUrl!=null) {
      this._pokemonHttpRequest.getPokemonAll(this.nextUrl).subscribe(data => {
        this.dataAssignmentToProperty(data)
        this.actualUrl = this.nextUrl;
      })
    }
  } 

  /**
   * @description Vérifie si previousUrl est null. Si non, requête l'API pour les 20 Pokémons précédants.
   * @description Utilise dataAssignmentToProperty() pour affecter ces Pokemons à pokemonList et les URL nécéssaire à nextUrl et previousUrl
   */
  previousView(): void {
    if(this.previousUrl!=null) {
      this._pokemonHttpRequest.getPokemonAll(this.previousUrl).subscribe(data => {
        this.dataAssignmentToProperty(data);
        this.actualUrl = this.previousUrl;
      })
    }
  }
  
  /**
   * @description Affecte les données de la requete API (pour les détails du Pokemon sur base du nom) à pokemonDetails
   * @description Utilise la méthode frenchRequestText() pour afficher le texte de description en francais 
   */
  userClick(name : string) {
    this._pokemonHttpRequest.getPokemonByName(name).subscribe(data => {
      this.pokemonDetails = data;
      this.frenchRequestText(name)  
    }); 
  }

  /**
   * @description Affecte les données de la requete API (pour le pokemon-species du Pokemon sur base de son nom) à pokemonFrenchDetails
   */
  frenchRequestText(name : string) {
    this._pokemonHttpRequest.getPokemonSpeciesFrenchDetails(name).subscribe(data => {    
      this.pokemonFrenchDetails = data.flavor_text_entries.find((item : iPokemonFrenchDetails) => item.language.name === 'fr')
    });
  }
  
  /**
   * @description Affecte les données des requetes API pour pokemonList aux propriété pokemonList, nextUrl et previousUrl
   */
  dataAssignmentToProperty(data : any){
    this.pokemonList = data.results;
    this.nextUrl = data.next;
    this.previousUrl = data.previous;
    this.pokemonCount = data.count    
    this.findIndex()
  }

  /**
   * @description Trouve la valeur des index de début et fin de pokemonList
   */
  findIndex (){
    // Trouver la position de l'occurrence de "offset="
    const offsetIndex = this.actualUrl?.indexOf("offset=");

    // Trouver la position de l'occurrence de "limit="
    const limitIndex = this.actualUrl?.indexOf("limit=");
    
    // Extraire les valeurs après les occurrences
    const offsetValue = this.actualUrl?.slice(offsetIndex! + 7, limitIndex! - 1);
    const limitValue = this.actualUrl?.slice(limitIndex! + 6);
    
    console.log("Offset:", offsetValue); // Output: Offset: 0
    console.log("Limit:", limitValue);   // Output: Limit: 20
  }

}