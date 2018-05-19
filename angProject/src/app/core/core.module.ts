import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { CoreService } from './service/core.service';
import { MenuComponent } from './navigation/menu.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent
  ],
  providers: [CoreService],
  exports: [AppComponent]
})
export class CoreModule {}