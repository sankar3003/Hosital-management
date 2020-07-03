import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewAppointmentComponent } from './view-appointment.component';
import { ViewAppointmentRoutes } from './view-appointment.routing';

@NgModule({
  imports: [CommonModule, ViewAppointmentRoutes],
  declarations: [ViewAppointmentComponent],
})
export class ViewAppointmentModule {}
