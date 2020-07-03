import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutes } from './login.routing';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, LoginRoutes, SharedModule],
})
export class LoginModule {}
