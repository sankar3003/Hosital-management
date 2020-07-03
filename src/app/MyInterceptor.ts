import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpResponse,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';
import { map, filter, retry } from 'rxjs/operators';
@Injectable()
export class MyInterceptor implements HttpInterceptor {
  intercept(
    httpRequest: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (JSON.stringify(httpRequest.url).includes('/posts')) {
      httpRequest = httpRequest.clone({
        setHeaders: {
          name: 'appplication.json',
        },
      });
    }
    return next.handle(httpRequest).pipe(retry(2));
  }
}
