import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmoviPage } from './filmovi.page';

const routes: Routes = [
  {
    path: '',
    component: FilmoviPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmoviPageRoutingModule {}
