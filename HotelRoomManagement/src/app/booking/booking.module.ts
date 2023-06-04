import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBookingComponent } from './list-booking/list-booking.component';
import { CreateBookingComponent } from './create-booking/create-booking.component';
import { RouterModule } from '@angular/router';
import { UpdateBookingComponent } from './update-booking/update-booking.component';



@NgModule({
  declarations: [
    ListBookingComponent,
    CreateBookingComponent,
    UpdateBookingComponent
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
