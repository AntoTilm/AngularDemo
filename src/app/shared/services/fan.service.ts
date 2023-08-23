import { Injectable } from '@angular/core';
import { Fan } from '../models/fan';

@Injectable({
  providedIn: 'root'
})
export class FanService {

  private _fanList : Fan[] = [
    { id : 1, name : 'Ben', birthdate : new Date(1990,11,18), series : ['Daredevil', 'How I Met', 'Flash'] },
    { id : 2, name : 'Julien', birthdate : new Date(2000,8,11), series : ['Big Bang Theory', 'Dark', 'Plus belle la vie'] }
  ];

  constructor() { }

  getAll() : Fan[] {
    return this._fanList;
  }

  getById(id : number) : Fan | undefined {
    return this._fanList.find(fan => fan.id === id);
  }

  create(fan : Fan) : void {
    fan.id = Math.max(...this._fanList.map(fan => fan.id)) + 1;
    this._fanList.push(fan);
  }

  update(id : number, fan : Fan) : void {
    let fanToUpdate : Fan | undefined = this.getById(id);
    if(fanToUpdate) {
      fanToUpdate.name = fan.name;
      fanToUpdate.birthdate = fan.birthdate;
      fanToUpdate.series = fan.series;
    }
  }

  delete(id : number) : void {
    this._fanList = this._fanList.filter(fan => fan.id !== id);
    // this._fanList.splice(this._fanList.findIndex(fan => fan.id === id), 1);
  }


}
