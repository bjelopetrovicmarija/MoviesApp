import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KalendarPageRoutingModule } from './kalendar-routing.module';
import { KalendarPage } from './kalendar.page';

import { NgCalendarModule } from 'ionic2-calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KalendarPageRoutingModule,
    NgCalendarModule
  ],
  declarations: [KalendarPage]
})
export class KalendarPageModule {}
