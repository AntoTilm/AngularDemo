import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeAuthService {

  private _users : User[] = [
    { id : 1, firstname : 'Khun', email : 'khun@oui.com', password : 'Khun1234'},
    { id : 2, firstname : 'Aude', email : 'aude@oui.com', password : 'Aude1234'}
  ];

  //----- AJOUT SYSTEME OBSERVABLES
  // Avec le Subject :
  // Par convention, on met $ devant ou derrière, pour indiquer que cette propriété est un Observable
  // private _$connectedUser : Subject< User | undefined > = new Subject< User | undefined >();
  //Transforme notre Subject en simple Observable : 
  //C'est lui qu'on va laisser public, comme ça, nos composants ne peuvent que s'abonner dessus et pas déclencher le .next()
  // $connectedUser : Observable< User | undefined> = this._$connectedUser.asObservable();

  //Avec le BehaviorSubject :
  //Même principe que le Subject mais le Behavior a une valeur par défaut quand on s'abonne dessus et le next se déclenche dès l'abonnement
  private _$connectedUser : BehaviorSubject< User | undefined> = new BehaviorSubject< User | undefined>(this.getUser());
  
  $connectedUser : Observable< User | undefined> = this._$connectedUser.asObservable();

  //-------------------------------

  constructor() { }

  getUser() : User | undefined {
    //On va récupérer l'id de l'utilisateur dans le localStorage
    let id : string | null = localStorage.getItem('userId');
    //Si y'en a un, on renvoie le User sinon undefined
    return this._users.find(user => user.id === ((id)? +id : 0))   
  }

  //#region Login Avant Observable
  // login(email : string, password : string) : User | undefined {

  //   //On cherche le user dont le mail est celui reçu
  //   let userByMail : User | undefined = this._users.find(u => u.email === email);
  //   //Si l'utilisateur est trouvé
  //   if(userByMail) {
  //     // Si les mdp concordent
  //     if(userByMail.password === password) {
  //       //Stockage des infos du user dans le localStorage
  //       localStorage.setItem('userId', userByMail.id.toString() )
  //       //JSON.stringify(obj) -> Si vous voulez transformer tout un objet en chaine

  //       return userByMail;
  //     }
  //     else {
  //       return undefined;
  //     }
  //   }

  //   return userByMail;
  // }
  //#endregion Login Avant Observable

  // login avec Observable
  login(email : string, password : string) : void {
    //On cherche le user dont le mail est celui reçu
    let userByMail : User | undefined = this._users.find(u => u.email === email);
    //Si l'utilisateur est trouvé
    if(userByMail) {
      // Si les mdp concordent
      if(userByMail.password === password) {
        //Stockage des infos du user dans le localStorage
        localStorage.setItem('userId', userByMail.id.toString() )
        //JSON.stringify(obj) -> Si vous voulez transformer tout un objet en chaine

        // Indiquer que notre Observable a changé de valeur
        this._$connectedUser.next(userByMail);
        
      }
      else {
        this._$connectedUser.next(undefined);
      }
    }
    else {
      this._$connectedUser.next(userByMail); //userByMail est undefined puisqu'on est dans le cas où le user n'est pas trouvé
    }
  }

  //#region Logout Avant Observable
  // logout() : undefined {
  //   //On nettoie le storage pour enlever le token
  //   localStorage.clear();
  //   //On met à jour notre Observable mais on sait pas encore cékoi un Observable
  //   return undefined;
  // }
  //#endregion Logout Avant Observable

  //Logout avec Observable
  logout() : void {
    //On nettoie le storage pour enlever le token
    localStorage.clear();
    //On met à jour l'Observable pour envoyer undefined (plus de user)
    this._$connectedUser.next(undefined);
  }
}
