import { Component, OnDestroy, OnInit } from '@angular/core';
import { Link } from '../../models/link';
import { User } from '../../models/user';
import { FakeAuthService } from '../../services/fake-auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  links : Link[] = [
     { title : 'Accueil', url : '/'},
     { title : 'Les Demos', url : '/demo', isVisible : false, children : [
      { title : 'Demo 1 : Les Bindings', url : '/demo/demo1' },
      { title : 'Demo 2 : Les Pipes', url : '/demo/demo2'},
      { title : 'Demo 3 : Les Directives', url : '/demo/demo3'},
      { title : 'Demo 4 : Input & Output', url : '/demo/demo4'},
      { title : 'Demo 5 : Les services', url : '/demo/demo5'},
      { title : 'Demo 6 : Les formulaires', url : '/demo/demo6'},
      { title : 'Demo 8 : CRUD avec le Routing', url : '/demo/demo8'},
      { title : 'Demo 9 : HttpClient -> Requêtes API', url : '/demo/demo9'},
      { title : 'Demo 10 : CRUD FAKE-API (json-server)', url : '/demo/demo10'},
      { title : 'Demo 11 : Interceptor & Resolver' , url : '/demo/demo11'}
     ]},
     { title : 'Les Exos', url : '/exo', isVisible : false, children : [
      { title : 'Exo 1 : Le Timer', url : '/exo/exo1'},
      { title : 'Exo 2 : La Shopping List V1', url : '/exo/exo2'},
      { title : 'Exo 3 : La shopping List V2', url : '/exo/exo3'},
      { title : 'Exo 4 : Le formulaire', url : '/exo/exo4'},
      { title : 'Exo 5 : Le gestionnaire de fans', url : '/exo/exo5'},
      { title : 'Exo 6 : HTTP request', url : '/exo/exo6'}
     ]}
   ];

   connectedUser : User | undefined;

   constructor(private _fakeAuthService : FakeAuthService) {

   }

   ngOnInit(): void {
       //Méthode qui se déclenche quand le composant apparait
       console.log("INIT NAVBAR");

       // On s'abonne à notre Observable
       this._fakeAuthService.$connectedUser.subscribe({
        next : (value) => {
          //Quand l'Observable change de valeur
          this.connectedUser = value;
          console.log("NEXT IN NAVBAR : ", value);
          
        },
        error : (err) => {
          //Quand l'Observable rencontre une erreur
          //On l'utilisera surtout pour les Observables de requête API
        },
        complete : () => {
          //A la fin de vie de l'Observable
          //Pour les observables qu'on fait nous même -> Il ne sera quasi jamais appelé puisqu'on veut que notre Observable existe tout le temps de la navigation sur le site
          //Pour les oservables de requête -> La fin de vie, c'est la fin de la requête
        }
       });

       // Si juste fonction anonyme -> d'office le next
       //this._fakeAuthService.$connectedUser.subscribe( () => {}); 
       
   }

   ngOnDestroy(): void {
       //Méthode qui se déclenche quand le composant disparait
       console.log("DESTROY NAVBAR");
       
   }

  //  display(link : Link) : void {
  //     link.isVisible = !link.isVisible;
  //     this.links.forEach(l => {
  //       if(l != link) {
  //         l.isVisible = false;
  //       }
  //     });
  //  }

  display(link : Link) : void {
    let wasVisible = link.isVisible;
    for(let i=0; i< this.links.length; i++) {
      this.links[i].isVisible = false;
    }
    link.isVisible = !wasVisible;
  }

  logout() : void {
    //Avant Obs
    // this.connectedUser = this._fakeAuthService.logout();
    //Après Obs
    this._fakeAuthService.logout();
  }
}
