import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {select} from '@angular-redux/store';
import {List} from 'immutable';
import {PlanetsModel} from './shared/models/planets.model';
import {PlanetsActions} from './shared/actions/planets.actions';
import {PeopleTableElement} from '../people/shared/models/people-table-elements.model';
import {MatTableDataSource} from '@angular/material';
import {PlanetsTableElement} from './shared/models/planets-table-elements.model';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {
  @select([ 'planets', 'planets' ]) planets$: Observable<List<PlanetsModel>>;
  planets: PlanetsModel[];
  isLoading: boolean;
  displayedColumns = ['name', 'population', 'surface_water', 'gravity'];
  dataSource: MatTableDataSource<PlanetsTableElement>;
  constructor(private planetsActions: PlanetsActions) { }

  ngOnInit() {
    this.isLoading = true;
    this.planetsActions.getPlanets();

    this.planets$.map((planets: List<any>) => planets.toJS())
      .subscribe(planets => {
        this.planets = planets;
        this.dataSource = new MatTableDataSource<PlanetsTableElement>(planets);
        if (planets.length) {
          this.isLoading = false;
        }
      });
  }

}
