import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/shared/models/user';
import { FakeAuthService } from 'src/app/shared/services/fake-auth.service';

@Component({
  selector: 'app-demo5',
  templateUrl: './demo5.component.html',
  styleUrls: ['./demo5.component.scss']
})
export class Demo5Component implements OnInit, OnDestroy {
    connectedUser : User | undefined;
    email : string = '';
    password : string = '';
    errorMsg : string = '';

    //Permettra de stocker un abonnement
    userSub : Subscription = new Subscription();

    //Injection de notre service
    constructor(private _fauthService : FakeAuthService) {

    }

    ngOnInit(): void {
        console.log("INIT DEMO5");
        this.userSub = this._fauthService.$connectedUser.subscribe({
          next : (value) => {
            this.connectedUser = value;
            console.log("NEXT IN DEMO : ", value);
          }
        })
        
    }
    ngOnDestroy(): void {
      console.log("DESTROY DEMO5");
      this.userSub.unsubscribe();  
    }

    connect() : void {
        // Avant Obs
        // this.connectedUser = this._fauthService.login(this.email, this.password);
        // Après
        this._fauthService.login(this.email, this.password);


        if(this.connectedUser) {
          this.email = '';
          this.password = '';
          this.errorMsg = '';
        } else {
          this.errorMsg = 'Email ou mot de passe invalide';
        }
    }

    disconnect() : void {
      // Avant Obs
        // this.connectedUser = this._fauthService.logout();

      // Après Obs :
      this._fauthService.logout();
    }
}
