import { SharedModule } from './../shared/shared.module';
import { DashboardRoutes } from './dashboard.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { AreaModule } from '../shared/area/area.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, DashboardRoutes, AreaModule, SharedModule],
})
export class DashboardModule {}
