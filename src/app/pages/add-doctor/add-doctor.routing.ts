import { AddDoctorComponent } from './add-doctor.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AddDoctorComponent,
  },
];

export const AddDoctorRoutes = RouterModule.forChild(routes);
