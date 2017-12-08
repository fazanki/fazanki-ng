import { Component, OnInit } from '@angular/core';
import {StarShipsActions} from './shared/actions/star-ships.actions';
import {Observable} from 'rxjs/Observable';
import {select} from '@angular-redux/store';
import {List} from 'immutable';
import {StarShipsModel} from './shared/models/star-ships.model';

@Component({
  selector: 'app-stars-ships',
  templateUrl: './stars-ships.component.html',
  styleUrls: ['./stars-ships.component.scss']
})
export class StarsShipsComponent implements OnInit {
  @select([ 'starships', 'ships' ]) ships$: Observable<List<StarShipsModel>>;
  ships: StarShipsModel[];
  isLoading: boolean;
  constructor(private starShipsAction: StarShipsActions ) { }

  ngOnInit() {
    this.isLoading = true;
    this.starShipsAction.getShips();

    this.ships$.map((ships: List<any>) => ships.toJS())
      .subscribe(ships => {
        this.ships = ships;
        if (ships.length) {
          this.isLoading = false;
        }
      });
  }
}
