import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewDoctorComponent } from './view-doctor.component';
import { ViewDoctorRoutes } from './view-doctor.routing';

@NgModule({
  imports: [CommonModule, ViewDoctorRoutes],
  declarations: [ViewDoctorComponent],
})
export class ViewDoctorModule {}
