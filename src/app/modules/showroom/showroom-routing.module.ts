import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Pages
import { ShowroomExhibitPageComponent } from './pages/exhibit/showroom-exhibit-page.component';

const SHOWROOM_ROUTES: Routes = [
  {
    path: '',
    component: ShowroomExhibitPageComponent,
    children: []
  }
];

@NgModule({
    imports: [RouterModule.forChild(SHOWROOM_ROUTES)],
    exports: [RouterModule]
})

export class ShowroomRoutingModule { }
