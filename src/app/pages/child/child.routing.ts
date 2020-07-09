import { Routes, RouterModule } from '@angular/router';
import { ChildComponent } from './child.component';

const routes: Routes = [
  {
    path: '',
    component: ChildComponent,
  },
];

export const ChildRoutes = RouterModule.forChild(routes);
