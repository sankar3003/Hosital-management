import { SharedModule } from './../../shared/shared.module';
import { RegisterRoutes } from './register.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';

@NgModule({
  imports: [CommonModule, RegisterRoutes, SharedModule],
  declarations: [RegisterComponent],
})
export class RegisterModule {}
