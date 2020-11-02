import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilmDetaljiPageRoutingModule } from './film-detalji-routing.module';

import { FilmDetaljiPage } from './film-detalji.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilmDetaljiPageRoutingModule
  ],
  declarations: [FilmDetaljiPage]
})
export class FilmDetaljiPageModule {}
