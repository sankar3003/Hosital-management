import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewHospitalComponent } from './view-hospital.component';
import { ViewHospitalRoutes } from './view-hospital.routing';

@NgModule({
  imports: [CommonModule, SharedModule, ViewHospitalRoutes],
  declarations: [ViewHospitalComponent],
})
export class ViewHospitalModule {}
