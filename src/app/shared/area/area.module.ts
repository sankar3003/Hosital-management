import { AreaRoutes } from './area.routing';
import { SharedModule } from '../shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaComponent } from './area.component';

@NgModule({
  declarations: [AreaComponent],
  imports: [CommonModule, AreaRoutes, SharedModule],
  exports: [AreaComponent],
})
export class AreaModule {}
