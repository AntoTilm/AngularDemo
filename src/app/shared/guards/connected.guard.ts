import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { FakeAuthService } from '../services/fake-auth.service';
import { map } from 'rxjs';

export const connectedGuard: CanActivateFn = (route, state) => {
  // Comme la guard est une fonction et plus une classe depuis la dernière maj, on doit injecter les services et les modules, comme suit : const router = inject(Router)
  // Antoine: injecter le Router (car ce n'est pas une classe et qu'il n'y a donc pas de constructeur) permet d'utiliser les redirections (en cas de return false par exemple). 
  // Antoine: Un simple if/else return true/false permet d'avoir déja une guard 
  // Antoine: Injecter le router permet, une fois nommé (ici const router) d'appeler les méthodes de Router comme router.navigateByUrl 
  const router = inject(Router); 
  const fakeAuthService = inject(FakeAuthService);

  // Note1

  // Plus safe : Plutôt que se baser sur le localStorage, qui n'est pas totalement fiable, on va plutôt surveiller l'observable connectedUser présent dans notre service. 
  // Antoine: Pour ce faire il faut l'injecter comme on a fait pour le router: const fakeAuthService = inject(FakeAuthService) puis aller chercher l'obervable $connectedUser du service
  return fakeAuthService.$connectedUser.pipe(map((res) => {
    // Antoine: L'observable $connectedUser du service FakeAuthService émettra soit un objet User (si l'utilisateur est connecté) soit undefined (si l'utilisateur n'est pas connecté). 
    // Antoine: Le pipe map provenant de l'opérateur rxjs est utilisé pour transformer ces émissions en true si l'utilisateur est connecté (et donc peut accéder à la route) et en false s'il n'est pas connecté (et doit être redirigé).
    // Antoine: res est le paramètre utilisé pour représenter chaque émission (valeur) émise par l'Observable $connectedUser
    if(res) {
      return true;
    } 
    else {
      router.navigateByUrl('/demo/demo5');
      return false;
    }
  } ))
};

  // Note1
  // Ancienne méthode, à éviter
  // On vérifie si l'utilisateur est connecté via son id stocké dans le localStorage
  // let userId : string | null = localStorage.getItem('userId');
  // if(!userId) {
  //   //Si pas connecté, on redirige vers la page de connexion
  //   router.navigateByUrl('/demo/demo5');
  //   return false;
  // }