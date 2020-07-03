import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddHospitalComponent } from './add-hospital.component';
import { AddHospitalRoutes } from './add-hospital.routing';

@NgModule({
  imports: [CommonModule, AddHospitalRoutes],
  declarations: [AddHospitalComponent],
})
export class AddHospitalModule {}
