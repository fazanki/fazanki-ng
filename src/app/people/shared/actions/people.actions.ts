import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { StarWarsService } from '../../../shared/porviders/star-wars.service';
import { AppState } from '../../../app.state';

export const PEOPLE_ACTIONS = {
  LOAD_PEOPLE: 'LOAD_PEOPLE',
};

@Injectable()
export class PeopleActions {
  constructor(private starWarsService: StarWarsService,
              private ngRedux: NgRedux<AppState>) {
  }


  getPeople() {
    const url = 'https://swapi.co/api/people';
    this.starWarsService.get(url)
      .subscribe(
        people => this.loadPeople(people),
        // this.dispatchError() // TODO
      );
  }

  loadPeople(people) {
    this.ngRedux.dispatch({
      type: PEOPLE_ACTIONS.LOAD_PEOPLE,
      payload: people
    });
  }

}
