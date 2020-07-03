import { View_registerComponent } from './view_register.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: View_registerComponent,
  },
];

export const View_registerRoutes = RouterModule.forChild(routes);
