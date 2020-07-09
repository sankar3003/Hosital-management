import { ReverseStrPipe } from 'src/app/reverse-str.pipe';
import { SquarePipe } from 'src/app/square.pipe';
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
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatPaginatorModule } from '@angular/material/paginator';

import {
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule,
} from '@angular-material-components/datetime-picker';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
  MatDatepickerModule,
  MatTableModule,
  MatSortModule,
  ReactiveFormsModule,
  FormsModule,
  MatNativeDateModule,
  MatSnackBarModule,
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule,
  MatPaginatorModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, Array],
  exports: [Array],
  providers: [],
})
export class SharedModule {}
