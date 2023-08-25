import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { FakeAuthService } from '../services/fake-auth.service';
import { map } from 'rxjs';

export const connectedGuard: CanActivateFn = (route, state) => {
  //Comme la guard est une fonction et plus une classe depuis la dernière maj, on doit injecter les services et les modules, comme suit :
  const router = inject(Router);
  const fakeAuthService = inject(FakeAuthService);

  // On vérifie si l'utilisateur est connecté via son id stocké dans le localStorage
  // let userId : string | null = localStorage.getItem('userId');
  // if(!userId) {
  //   //Si pas connecté, on redirige vers la page de connexion
  //   router.navigateByUrl('/demo/demo5');
  //   return false;
  // }

  //Plus safe : Plutôt que se baser sur le localStorage, qui n'est pas totalement fiable, on va plutôt surveiller l'observable connectedUser présent dans notre service :
  return fakeAuthService.$connectedUser.pipe(map((res) => {
    //l'opérateur map nous permettra de savoir ce qu'il y a à dans l'observable connectedUser à l'instant où la Guard va être appelée
    //Pas besoin de s'abonner à l'observable, la guard n'est active que le temps d'accéder à la route
    //res contient soit un User, soit undefined
    if(res) {
      return true;
    } 
    else {
      router.navigateByUrl('/demo/demo5');
      return false;
    }
  } ))

  //La guard renvoie un boolean (true si j'ai droit d'accéder au Composant, false si pas)
  //return true;
};
