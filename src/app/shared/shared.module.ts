import { FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

const Array: any = [
  MatCheckboxModule,
  MatSidenavModule,
  MatButtonModule,
  MatDividerModule,
  MatIconModule,
  MatToolbarModule,
  MatSelectModule,
  MatFormFieldModule,
  MatListModule,
  MatGridListModule,
  MatMenuModule,
  MatCardModule,
  MatInputModule,
  ReactiveFormsModule,
  FormsModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, Array],
  exports: [Array],
})
export class SharedModule {}
