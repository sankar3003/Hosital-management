import { View_registerRoutes } from './view_register.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { View_registerComponent } from './view_register.component';

@NgModule({
  imports: [CommonModule, View_registerRoutes],
  declarations: [View_registerComponent],
})
export class View_registerModule {}
