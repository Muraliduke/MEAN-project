import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HomeContainer} from './home.container';
import {HomeComponent} from './components/home/home.component';

import {HomeRoutingModule} from './home-routing.module';
import { TextEffectComponent } from './components/text-effect/text-effect.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-bootstrap';
import { CardComponent } from './components/card/card.component';

import {CoreModule} from '../core/core.module';
@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbModule.forRoot(),
    CarouselModule.forRoot(),
    CoreModule
  ],
  declarations: [
    
    HomeContainer,
    HomeComponent,
    TextEffectComponent,
    CarouselComponent,
    CardComponent
  ],
  providers: [],
  exports: []
})
export class HomeModule {}