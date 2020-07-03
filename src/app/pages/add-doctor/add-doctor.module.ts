import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDoctorComponent } from './add-doctor.component';
import { AddDoctorRoutes } from './add-doctor.routing';

@NgModule({
  imports: [CommonModule, AddDoctorRoutes, SharedModule],
  declarations: [AddDoctorComponent],
})
export class AddDoctorModule {}
