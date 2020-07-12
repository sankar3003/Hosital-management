import { AreaComponent } from './area.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AreaComponent,
  },
];

export const AreaRoutes = RouterModule.forChild(routes);
