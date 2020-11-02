import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmDetaljiPage } from './film-detalji.page';

const routes: Routes = [
  {
    path: '',
    component: FilmDetaljiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmDetaljiPageRoutingModule {}
