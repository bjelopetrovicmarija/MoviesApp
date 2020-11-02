import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KalendarPage } from './kalendar.page';

const routes: Routes = [
  {
    path: '',
    component: KalendarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KalendarPageRoutingModule {}
