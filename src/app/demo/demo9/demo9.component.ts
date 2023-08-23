import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Agify } from 'src/app/shared/models/agify';

@Component({
  selector: 'app-demo9',
  templateUrl: './demo9.component.html',
  styleUrls: ['./demo9.component.scss']
})
export class Demo9Component {
    firstname : string = '';
    countryCode : string = '';

    ageMsg : string = '';
    
    constructor(private _httpClient : HttpClient) {

    }

    search() : void {
      this.ageMsg = '';

      //Si form pas vide
      if(this.firstname !== '' && this.countryCode !== '') {
        this._httpClient.get<Agify>(`https://api.agify.io/?name=${this.firstname}&country_id=${this.countryCode}`).subscribe({
          next : (res) => {
            //Quand on a obtenu un résultat pour notre requête
            console.log("OK RES : " , res);
            
            this.ageMsg = `Basé sur ${res.count} résultats, vous avez probablement ${res.age} ans !`;
          },
          error : (err) => {
            //Quand la requête rencontre une erreur
            console.log("ERROR : ", err);
            
          },
          complete : () => {
            //A la fin de la requête, quand on a eu un résultat
            console.log("REQUEST DONE");
            
          }
        })
      }
    }
}
