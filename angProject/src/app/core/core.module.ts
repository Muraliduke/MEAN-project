import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';

import {NavService} from './navigation/nav-service';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

import {A11yModule} from '@angular/cdk/a11y';
import {BidiModule} from '@angular/cdk/bidi';
import {ObserversModule} from '@angular/cdk/observers';
import {OverlayModule} from '@angular/cdk/overlay';
import {PlatformModule} from '@angular/cdk/platform';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import { CoreService } from './service/core.service';
import { MenuComponent } from './navigation/menu.component';
import { TopNavComponent } from './navigation/top-nav/top-nav.component';


const materialModules = [
   // CDK
   A11yModule,
   BidiModule,
   ObserversModule,
   OverlayModule,
   PlatformModule,
   PortalModule,
   ScrollDispatchModule,
   CdkStepperModule,
   CdkTableModule,
   
   // Material
   MatAutocompleteModule,
   MatButtonModule,
   MatButtonToggleModule,
   MatCardModule,
   MatCheckboxModule,
   MatChipsModule,
   MatDatepickerModule,
   MatDialogModule,
   MatExpansionModule,
   MatGridListModule,
   MatIconModule,
   MatInputModule,
   MatListModule,
   MatMenuModule,
   MatProgressBarModule,
   MatProgressSpinnerModule,
   MatRadioModule,
   MatRippleModule,
   MatSelectModule,
   MatSidenavModule,
   MatSlideToggleModule,
   MatSliderModule,
   MatSnackBarModule,
   MatTabsModule,
   MatToolbarModule,
   MatTooltipModule,
   MatNativeDateModule,
];
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ...materialModules,AppRoutingModule,
    FlexLayoutModule,],
  declarations: [
    AppComponent,
    MenuComponent,TopNavComponent
  ],
  providers: [CoreService,NavService],
  exports: [AppComponent,...materialModules,]
})
export class CoreModule {}