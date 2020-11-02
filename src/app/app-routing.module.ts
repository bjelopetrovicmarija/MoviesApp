import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./pages/todo-details/todo-details.module').then( m => m.TodoDetailsPageModule)
  },
  {
    path: 'details/:id',
    loadChildren: () => import('./pages/todo-details/todo-details.module').then( m => m.TodoDetailsPageModule)
  },
  {
    path: 'filmovi',
    loadChildren: () => import('./pages/filmovi/filmovi.module').then( m => m.FilmoviPageModule)
  },
  {
    path: 'filmovi/:id',
    loadChildren: () => import('./pages/film-detalji/film-detalji.module').then( m => m.FilmDetaljiPageModule)
  },
  {
    path: 'kalendar',
    loadChildren: () => import('./pages/kalendar/kalendar.module').then( m => m.KalendarPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
