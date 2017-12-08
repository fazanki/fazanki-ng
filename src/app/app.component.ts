import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {PrimaryNavItem} from './shared/components/navigation/primary-nav.model';
import {AppNavItems} from './app-nav-items';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  navItems: PrimaryNavItem[];

  ngOnInit() {
    this.navItems = AppNavItems.gePrimaryNavItems();
  }
}
