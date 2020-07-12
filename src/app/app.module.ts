import { ApplicationConfig } from './resources/application.config';

import { NgModule, ErrorHandler } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { httpErrorInterceptor } from './http-error.interceptor';

import { HighlightDirective } from './highlight.directive';
import { TestComponent } from './test/test.component';
import { MydashboardComponent } from './mydashboard/mydashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [AppComponent, HighlightDirective, TestComponent, MydashboardComponent],
  imports: [BrowserAnimationsModule, AppRoutingModule, HttpClientModule, MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, LayoutModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: httpErrorInterceptor,
      multi: true,
    },
    ApplicationConfig,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
