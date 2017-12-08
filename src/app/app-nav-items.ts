import {PrimaryNavItem} from './shared/components/navigation/primary-nav.model';

export class AppNavItems {

  static gePrimaryNavItems(): Array<PrimaryNavItem> {

    const navItems = [
      {
        label: 'Films',
        routerLink: 'films'
      },
      {
        label: 'People',
        routerLink: 'people'
      },
      {
        label: 'Starships',
        routerLink: 'starships'
      },
      {
        label: 'Vehicles',
        routerLink: 'vehicles'
      },
      {
        label: 'Speaces',
        routerLink: 'species'
      },
      {
        label: 'Planets',
        routerLink: 'planets'
      }
    ];

    return navItems;
  }
}
