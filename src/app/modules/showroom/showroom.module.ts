import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
//
import { ShowroomRoutingModule } from './showroom-routing.module';
// Pages
import { ShowroomExhibitPageComponent } from './pages/exhibit/showroom-exhibit-page.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        ShowroomRoutingModule,
    ],
    declarations: [
        // Pages
        ShowroomExhibitPageComponent,
    ]
})

export class ShowroomModule { }
