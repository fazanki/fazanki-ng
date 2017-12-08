import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { StarWarsService } from '../../../shared/porviders/star-wars.service';
import { AppState } from '../../../app.state';

export const PLANETS_ACTIONS = {
  LOAD_PLANETS: 'LOAD_PLANETS',
};

@Injectable()
export class PlanetsActions {
  constructor(private starWarsService: StarWarsService,
              private ngRedux: NgRedux<AppState>) {
  }


  getPlanets() {
    const url = 'https://swapi.co/api/planets';
    this.starWarsService.get(url)
      .subscribe(
        planets => this.loadPeople(planets),
        // this.dispatchError() // TODO
      );
  }

  loadPeople(planets) {
    this.ngRedux.dispatch({
      type: PLANETS_ACTIONS.LOAD_PLANETS,
      payload: planets
    });
  }

}
