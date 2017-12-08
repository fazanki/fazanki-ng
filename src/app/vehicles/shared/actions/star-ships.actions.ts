import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { StarWarsService } from '../../../shared/porviders/star-wars.service';
import { AppState } from '../../../app.state';

export const VEHICLES_ACTIONS = {
  LOAD_VEHICLES: 'LOADLOAD_VEHICLES',
};

@Injectable()
export class VehiclesActions {
  constructor(private starWarsService: StarWarsService,
              private ngRedux: NgRedux<AppState>) {
  }


  getVehicles() {
    const url = 'https://swapi.co/api/vehicles';
    this.starWarsService.get(url)
      .subscribe(
        vehicles => this.loadShips(vehicles),
        // this.dispatchError() // TODO
      );
  }

  loadShips(vehicles) {
    this.ngRedux.dispatch({
      type: VEHICLES_ACTIONS.LOAD_VEHICLES,
      payload: vehicles
    });
  }

}
