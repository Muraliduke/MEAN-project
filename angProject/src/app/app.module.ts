import { BrowserModule } from '@angular/platform-browser';

import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';

import { AppComponent } from './core/app.component';

//modules here
import {HomeModule} from './home/home.module'


@NgModule({
  declarations: [
 ],
  imports: [
    BrowserModule,
    RouterModule,
    CoreModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),

    HomeModule
 
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
