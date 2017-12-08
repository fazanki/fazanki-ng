import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {select} from '@angular-redux/store';
import {List} from 'immutable';
import {PeopleModel} from './shared/models/people.model';
import {PeopleActions} from './shared/actions/people.actions';
import {MatTableDataSource} from '@angular/material';
import {PeopleTableElement} from './shared/models/people-table-elements.model';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  @select([ 'people', 'people' ]) people$: Observable<List<PeopleModel>>;
  people: PeopleModel[];
  isLoading: boolean;
  displayedColumns = ['name', 'skin_color', 'gender'];
  dataSource: MatTableDataSource<PeopleTableElement>;
  constructor(private peopleActions: PeopleActions) { }

  ngOnInit() {
    this.isLoading = true;
    this.peopleActions.getPeople();

    this.people$.map((people: List<any>) => people.toJS())
      .subscribe(people => {
        this.dataSource = new MatTableDataSource<PeopleTableElement>(people);
        if (people.length) {
          this.isLoading = false;
        }
      });
  }

}
