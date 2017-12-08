import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PrimaryNavComponent } from './primary-nav.component';
import { RouterModule } from '@angular/router';
import {MatButtonModule, MatListModule} from '@angular/material';

@NgModule({
  declarations: [ PrimaryNavComponent ],
  imports: [ BrowserModule,  RouterModule, MatListModule, MatButtonModule ],
  exports: [ PrimaryNavComponent ],
})

export class NavigationModule {
}
