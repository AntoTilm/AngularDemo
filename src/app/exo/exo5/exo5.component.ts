import { Component } from '@angular/core';
import { Fan } from 'src/app/shared/models/fan';
import { FanService } from 'src/app/shared/services/fan.service';

@Component({
  selector: 'app-exo5',
  templateUrl: './exo5.component.html',
  styleUrls: ['./exo5.component.scss']
})
export class Exo5Component {
  listFan : Fan[] = [];

  constructor(private _fanService : FanService) {   
    this.listFan = this._fanService.getAll();
  }

  delete(id : number) {
    this._fanService.delete(id);
    this.listFan = this._fanService.getAll();
  }
}
