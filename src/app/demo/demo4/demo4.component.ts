import { Component } from '@angular/core';
import { Trainer } from 'src/app/shared/models/trainer';

@Component({
  selector: 'app-demo4',
  templateUrl: './demo4.component.html',
  styleUrls: ['./demo4.component.scss']
})
export class Demo4Component {
  //props pour démo base
  prenom : string = 'Robert';
  besoinEnfant : string = '[Mon enfant n\'a besoin de rien]';

  //props pour démo cards
  trainersList : Trainer[] = [
    { id : 0, firstname : 'Khun', lastname : 'Ly', birthdate : new Date(1982,4,6), gender : 'm', avatar : 'assets/images/khun.png' },

    { id : 1, firstname : 'Aude', lastname : 'Beurive', birthdate : new Date(1989,9,16), gender : 'f', avatar : 'assets/images/aude.png' },

    { id : 2, firstname : 'Gavin', lastname : 'Chaineux', birthdate : new Date(1996,9,18), gender : 'nb', avatar : 'assets/images/gavin.png' }
  ];

  trainerOfTheDay! : Trainer;

  receiveNeed(besoin : string) : void {
    this.besoinEnfant = `Mon enfant a besoin de ${besoin}`;
  }
}
