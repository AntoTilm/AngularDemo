import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { beforeTodayValidator } from 'src/app/shared/validators/beforeToday.validator';

@Component({
  selector: 'app-demo6',
  templateUrl: './demo6.component.html',
  styleUrls: ['./demo6.component.scss']
})
export class Demo6Component {

  registerForm : FormGroup;

  // FormBuilder -> Classe Angular qui permet de créer des formulaires complexes
  constructor(private _fb : FormBuilder) {
    this.registerForm = this._fb.group({
      //On définit tous les controls présents dans le group
      //nomControl : [value, [validateurs synchrones] , [validateurs asynchrones]]
      lastname : [null, [Validators.required, Validators.maxLength(100), Validators.pattern(/^[\D]*$/)] , []],
      firstname : [null, [Validators.required, Validators.maxLength(100), Validators.pattern(/^[\D]*$/)]],
      birthdate : [null, [ beforeTodayValidator() ]],
      email : [null, [Validators.required, Validators.email]],
      password : [null, [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)]],
      gender : [null],
      single : [false, [Validators.required]],
      nationality : ['', [Validators.required]],
      //Hobbies n'est pas UN control mais un tableau avec plusieurs controls
      hobbies : this._fb.array([]),     
    });
  }

  //getter pour récupérer les hobbies de notre FormGroup comme étant un FormArray
  get hobbies() : FormArray {
    return this.registerForm.get('hobbies') as FormArray;
  }

  //Permet d'ajouter un nouveau control dans le tableau de hobbies ligne 27
  addHobby() : void {
    this.hobbies.push(this._fb.control(null, [Validators.required]));
  }
  //Supprimer un control grâce à son indice
  removeHobby(indice : number) : void {
    this.hobbies.removeAt(indice);
  }


  createUser() {
    if(this.registerForm.valid) {
      console.log(this.registerForm.value);
      console.log("FORMULAIRE VALIDE 🥳");

      
    }
    else {
      this.registerForm.markAllAsTouched();
      console.log("FORMULAIRE INVALIDE 🤡");      
    }
  }
}
