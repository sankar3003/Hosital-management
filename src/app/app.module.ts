import { DefaultComponent } from './layouts/default/default.component';
import { AddHospitalComponent } from './pages/add-hospital/add-hospital.component';
import { DefaultModule } from './layouts/default/default.module';

import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { httpErrorInterceptor } from './http-error.interceptor';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [AppComponent, HighlightDirective, TestComponent],
  imports: [BrowserAnimationsModule, AppRoutingModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: httpErrorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
