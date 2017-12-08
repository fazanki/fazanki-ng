import { Injectable } from '@angular/core';
import { StarWarsService } from '../../../shared/porviders/star-wars.service';
import { NgRedux } from '@angular-redux/store';
import { AppState} from '../../../app.state';

export const FILMS_ACTIONS = {
  LOAD_FILMS: 'LOAD_FILMS',
};

@Injectable()
export class FilmsActions {
  constructor(private starWarsService: StarWarsService,
              private ngRedux: NgRedux<AppState>) {
  }


  getFilms() {
    const url = 'https://swapi.co/api/films';
    this.starWarsService.get(url)
      .subscribe(
        films => this.loadFilms(films),
        // this.dispatchError() // TODO
      );
  }

  loadFilms(films) {
    this.ngRedux.dispatch({
      type: FILMS_ACTIONS.LOAD_FILMS,
      payload: films
    });
  }

}
