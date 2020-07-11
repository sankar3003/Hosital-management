import { SharedModule } from 'src/app/shared/shared.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DefaultroutingModule } from './default.routing';

@NgModule({
  imports: [CommonModule, DefaultroutingModule, SharedModule],
  declarations: [DefaultComponent],
  exports: [],
})
export class DefaultModule {}
