import { Component, OnInit } from '@angular/core';
import { find } from 'rxjs';
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
  pokemonListEnglish: iPokemonBase[] = []; 
  pokemonListEnglish2: iPokemonBase[] = []; 
  pokemonListNext: iPokemonBase[] = []; 
  pokemonListFrench: iPokemonBase[] = []; 
  pokemonDetails? : iPokemonDetails; 
  pokemonFrenchText?: iPokemonFrenchDetails;
  pokemonFrenchName?: iPokemonFrenchDetails;

  // Url des Pokémons par 20 + url des 20 prochains et précédants pokemons + nombre total de Pokemon
  homeUrl = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20";
  actualUrl? : string;
  nextUrl? : string;
  previousUrl? : string;
  pokemonCount? : number;

  // Numérotation de la liste
  offsetValue? : string;
  offsetValueNumber? : number;
  offsetValueNumber20? : number;

  constructor(private _pokemonHttpRequest: PokemonRequestService) { }
  
  /**
   * @description Appelle la fonction homeView au démarrage de la page
   */
  ngOnInit(): void {
    this.homeView()
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
      this.findIndex();
      this.pokemonDetails = undefined;
      this.pokemonFrenchText = undefined;
      this.frenchRequestPokemonList ()
      this.pokemonListFrench.forEach(element => {
        console.log(element.name);        
      });
    })
  }

  /**
   * @description Vérifie si nextUrl est null. Si non, requête l'API pour les 20 Pokémons suivant.
   * @description Utilise dataAssignmentToProperty() pour affecter ces Pokemons à pokemonList et les URL nécéssaire à nextUrl et previousUrl
   */
  nextView() : void {
    if(this.nextUrl!=null) {
      this._pokemonHttpRequest.getPokemonAll(this.nextUrl).subscribe(data => {
        this.actualUrl = this.nextUrl;
        this.findIndex()
        this.dataAssignmentToProperty(data)
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
        this.actualUrl = this.previousUrl;
        this.findIndex()
        this.dataAssignmentToProperty(data);
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
      this.pokemonFrenchText = data.flavor_text_entries.find((text : iPokemonFrenchDetails) => text.language.name === 'fr');
      this.pokemonFrenchName = data.names.find((item : iPokemonFrenchDetails) => item.language.name === 'fr');
      this.pokemonDetails!.name = this.pokemonFrenchName!.name
      console.log(this.pokemonFrenchName);      
    });
    
  }

  frenchRequestPokemonList() {
    this._pokemonHttpRequest.getPokemonAll(this.actualUrl!).subscribe(data => {
      this.pokemonListNext = data.results;      
      this.pokemonListNext.forEach((element: any, index: number) => {
        this._pokemonHttpRequest.getPokemonSpeciesFrenchDetails(element.name).subscribe(data2 => { 
          const temp = data2.names.find((item: iPokemonFrenchDetails) => item.language.name === 'fr');     
          if (temp) {
            this.pokemonListFrench[index] = { name: temp.name, url : '' };
          }
        });               
      })
    })     
  }

  /**
   * @description Affecte les données des requetes API pour pokemonList aux propriété pokemonList, nextUrl et previousUrl
   */
  dataAssignmentToProperty(data : any){
    this.pokemonListEnglish = data.results;
    this.nextUrl = data.next;
    this.previousUrl = data.previous;
    this.pokemonCount = data.count
    this.frenchRequestPokemonList ()
    this.pokemonListEnglish2 = this.pokemonListEnglish
    this.pokemonListEnglish = this.pokemonListFrench
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
    this.offsetValue = this.actualUrl?.slice(offsetIndex! + 7, limitIndex! - 1);
    const limitValue = this.actualUrl?.slice(limitIndex! + 6);
    this.offsetValueNumber = parseInt(this.offsetValue!);
    this.offsetValueNumber++;
    this.offsetValueNumber20 = this.offsetValueNumber+19;
    
  }

}