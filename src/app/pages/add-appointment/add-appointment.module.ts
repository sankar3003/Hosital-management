import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAppointmentComponent } from './add-appointment.component';
import { AddAppointmentRoutes } from './add-appointment.routing';

@NgModule({
  imports: [CommonModule, AddAppointmentRoutes],
  declarations: [AddAppointmentComponent],
})
export class AddAppointmentModule {}
