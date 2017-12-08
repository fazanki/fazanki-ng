import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { StarWarsService } from '../../../shared/porviders/star-wars.service';
import { AppState } from '../../../app.state';

export const STAR_SHIPS_ACTIONS = {
  LOAD_SHIPS: 'LOAD_SHIPS',
};

@Injectable()
export class StarShipsActions {
  constructor(private starWarsService: StarWarsService,
              private ngRedux: NgRedux<AppState>) {
  }


  getShips() {
    const url = 'https://swapi.co/api/starships';
    this.starWarsService.get(url)
      .subscribe(
        ships => this.loadShips(ships),
        // this.dispatchError() // TODO
      );
  }

  loadShips(ships) {
    this.ngRedux.dispatch({
      type: STAR_SHIPS_ACTIONS.LOAD_SHIPS,
      payload: ships
    });
  }

}
