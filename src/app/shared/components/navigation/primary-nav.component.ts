import {PrimaryNavItem} from './primary-nav.model';
import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector : 'app-primary-nav',
  templateUrl: './primary-nav.layout.html',
  styleUrls: ['./primary-nav.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class PrimaryNavComponent  {
  @Input() navItems: PrimaryNavItem[];
}
