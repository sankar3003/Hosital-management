import { SharedModule } from './../shared/shared.module';
import { DashboardRoutes } from './dashboard.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, DashboardRoutes, SharedModule],
})
export class DashboardModule {}
