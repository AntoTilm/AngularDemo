import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Fan } from 'src/app/shared/models/fan';
import { FanService } from 'src/app/shared/services/fan.service';
import { ageValidator } from 'src/app/shared/validators/age.validator';

@Component({
  selector: 'app-create-fan',
  templateUrl: './create-fan.component.html',
  styleUrls: ['./create-fan.component.scss']
})
export class CreateFanComponent {
  fanForm : FormGroup;

  constructor(private _fb : FormBuilder, private _fanService : FanService, private _router : Router) {

    this.fanForm = this._fb.group({
      name : [null, [Validators.required]],
      birthdate : [null, [Validators.required, ageValidator(13)]],
      series : this._fb.array([])
    })

  }

  get series() : FormArray {
    return this.fanForm.get('series') as FormArray;
  }

  addSerie() {
    this.series.push(this._fb.control(null, [Validators.required]));
  }

  removeSerie(index : number) {
    this.series.removeAt(index);
  }

  addFan() {
    if( this.fanForm.valid ){
      // let fanToSend : Fan = this.fanForm.value;
      // fanToSend.birthdate = new Date(fanToSend.birthdate);

      let fanToSend : Fan = {...this.fanForm.value, birthdate : new Date(this.fanForm.value.birthdate) }

      this._fanService.create(fanToSend);
      this._router.navigateByUrl('/exo/exo5');
    }
    else {
      this.fanForm.markAllAsTouched();
    }
  }
}
