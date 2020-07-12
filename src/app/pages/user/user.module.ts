import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutes } from './user.routing';

@NgModule({
  declarations: [UserComponent],
  imports: [CommonModule, UserRoutes, SharedModule],
})
export class UserModule {}
