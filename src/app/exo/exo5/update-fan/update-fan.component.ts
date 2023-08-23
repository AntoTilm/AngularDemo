import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Fan } from 'src/app/shared/models/fan';
import { FanService } from 'src/app/shared/services/fan.service';
import { ageValidator } from 'src/app/shared/validators/age.validator';

@Component({
  selector: 'app-update-fan',
  templateUrl: './update-fan.component.html',
  styleUrls: ['./update-fan.component.scss']
})
export class UpdateFanComponent {
  fanForm : FormGroup;
  fanId : number;

  constructor(private _fb : FormBuilder, private _fanService : FanService, private _router : Router, private _activeRoute : ActivatedRoute) {

    this.fanForm = this._fb.group({
      name : [null, [Validators.required]],
      birthdate : [null, [Validators.required, ageValidator(13)]],
      series : this._fb.array([])
    });

    this.fanId = +this._activeRoute.snapshot.params['id'];

    let fan : Fan | undefined = this._fanService.getById(this.fanId);
    if(!fan) {
      this._router.navigateByUrl('/notfound');
    } else {

      fan.series.forEach(serie => this.addSerie());

      this.fanForm.patchValue({
        name : fan.name,
        birthdate : this.formatDate(fan.birthdate),
        series : fan.series
      })
    }

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

  updateFan() {
    if( this.fanForm.valid ){
      // let fanToSend : Fan = this.fanForm.value;
      // fanToSend.birthdate = new Date(fanToSend.birthdate);

      let fanToSend : Fan = {...this.fanForm.value, birthdate : new Date(this.fanForm.value.birthdate) }

      this._fanService.update(this.fanId, fanToSend);
      this._router.navigateByUrl('/exo/exo5');
    }
    else {
      this.fanForm.markAllAsTouched();
    }
  }

  formatDate(date : Date) : string {
    // '2023-08-18'
    return `${date.getFullYear()}-${date.getMonth()+1 < 10 ? '0' : ''}${date.getMonth()+1}-${date.getDate()+1 < 10 ? '0' : ''}${date.getDate()}`
  }
}
