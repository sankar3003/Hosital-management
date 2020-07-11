import { ReverseStrPipe } from './../../reverse-str.pipe';
import { SquarePipe } from 'src/app/square.pipe';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddHospitalComponent } from './add-hospital.component';
import { AddHospitalRoutes } from './add-hospital.routing';

@NgModule({
  declarations: [AddHospitalComponent],
  imports: [CommonModule, AddHospitalRoutes, SharedModule],

  providers: [],
})
export class AddHospitalModule {}
