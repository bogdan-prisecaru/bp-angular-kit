import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/showroom',
    pathMatch: 'full'
  },
  {
    path: 'showroom',
    loadChildren: () => import('./modules/showroom/showroom.module').then(m => m.ShowroomModule),
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(APP_ROUTES)],
  providers: [],
})

export class AppRoutingModule { }
