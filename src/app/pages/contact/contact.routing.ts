import { ContactComponent } from './contact.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ContactComponent,
  },
];

export const ContactRoutes = RouterModule.forChild(routes);
