import { Component, OnInit } from '@angular/core';
import {FilmsActions} from './shared/actions/films.actions';
import {select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';
import {List} from 'immutable';
import {FilmsModel} from './shared/models/films.model';
import {formatDateTime} from '../shared/helper';
import {MatTableDataSource} from '@angular/material';
import {FilmTableElement} from './shared/models/films-table-elements.model';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';

// TODO move
export interface Item { name: string; }

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  @select([ 'films', 'films' ]) films$: Observable<List<FilmsModel>>;
  films: FilmsModel[];
  isLoading: boolean;

  // TODO move
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  //

  constructor(
    private afs: AngularFirestore,
    private filmsActions: FilmsActions) {}

  displayedColumns = ['title', 'producer', 'director', 'release_date'];
  dataSource: MatTableDataSource<FilmTableElement>;

  ngOnInit() {
    this.isLoading = true;
    this.films = [];
    this.initFilms();

    // TODO move
    this.itemsCollection = this.afs.collection<Item>('items');
    this.items = this.itemsCollection.valueChanges();
  }

  initFilms() {
    this.filmsActions.getFilms();
    this.films$.map((films: List<any>) =>  films.toJS())

      .subscribe(films => {
        films.map(film => Object.assign(film,  {release_date: formatDateTime(film.release_date)} ));
        this.dataSource = new MatTableDataSource<FilmTableElement>(films);
        if (films.length) {
          this.isLoading = false;
        }
      });
  }

}
