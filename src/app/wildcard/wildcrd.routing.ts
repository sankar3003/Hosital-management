import { WildcardComponent } from './wildcard.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: WildcardComponent,
  },
];

export const WildcrdRoutes = RouterModule.forChild(routes);
