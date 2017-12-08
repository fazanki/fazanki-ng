import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {select} from '@angular-redux/store';
import {List} from 'immutable';
import {SpeciesModel} from './shared/models/species.model';
import {SpeciesActions} from './shared/actions/species.actions';

@Component({
  selector: 'app-speaces',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.scss']
})
export class SpeciesComponent implements OnInit {
  @select([ 'species', 'species' ]) species$: Observable<List<SpeciesModel>>;
  species: SpeciesModel[];
  isLoading: boolean;

  ngOnInit() {
    this.speciesActions.getSpecies();
    this.isLoading = true;
    this.species$.map((species: List<any>) => species.toJS())
      .subscribe(species => {
        this.species = species;
        if (species.length) {
          this.isLoading = false;
        }
      }
    );
  }

  constructor(private speciesActions: SpeciesActions) { }

}
