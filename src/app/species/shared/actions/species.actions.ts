import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { StarWarsService } from '../../../shared/porviders/star-wars.service';
import { AppState } from '../../../app.state';

export const SPECIES_ACTIONS = {
  LOAD_SPECIES: 'LOAD_SPECIES',
};

@Injectable()
export class SpeciesActions {
  constructor(private starWarsService: StarWarsService,
              private ngRedux: NgRedux<AppState>) {
  }


  getSpecies() {
    const url = 'https://swapi.co/api/species';
    this.starWarsService.get(url)
      .subscribe(
        species => this.loadPeople(species),
        // this.dispatchError() // TODO
      );
  }

  loadPeople(species) {
    this.ngRedux.dispatch({
      type: SPECIES_ACTIONS.LOAD_SPECIES,
      payload: species
    });
  }

}
