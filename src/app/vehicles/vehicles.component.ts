import { Component, OnInit } from '@angular/core';
import { VehiclesActions } from './shared/actions/star-ships.actions';
import {Observable} from 'rxjs/Observable';
import {select} from '@angular-redux/store';
import {List} from 'immutable';
import {VehiclesModel} from './shared/models/star-ships.model';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {
  @select([ 'vehicles', 'vehicles' ]) vehicles$: Observable<List<VehiclesModel>>;
  vehicles: VehiclesModel[];
  isLoading: boolean;
  constructor(private vehiclesActions: VehiclesActions) { }

  ngOnInit() {
    this.isLoading = true;
    this.vehiclesActions.getVehicles();

    this.vehicles$.map((vehicles: List<any>) => vehicles.toJS())
      .subscribe(vehicles => {
          this.vehicles = vehicles;
          if (vehicles.length) {
            this.isLoading = false;
          }
        }
      );
  }

}
