import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBookingComponent } from './list-booking/list-booking.component';
import { CreateBookingComponent } from './create-booking/create-booking.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ListBookingComponent,
    CreateBookingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'create', component: CreateBookingComponent },
      { path: '', component: ListBookingComponent },
    ])
  ]
})
export class BookingModule { }
