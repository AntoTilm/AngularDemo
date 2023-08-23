import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fan } from 'src/app/shared/models/fan';
import { FanService } from 'src/app/shared/services/fan.service';

@Component({
  selector: 'app-details-fan',
  templateUrl: './details-fan.component.html',
  styleUrls: ['./details-fan.component.scss']
})
export class DetailsFanComponent {
  fan : Fan | undefined;

  constructor(private _fanService : FanService, private _activeRoute : ActivatedRoute, private _router : Router) {

    let fanId = +this._activeRoute.snapshot.params['id'];

    this.fan = this._fanService.getById(fanId);

    if(!this.fan) {
      this._router.navigateByUrl("/notfound");
    }

  }
}
