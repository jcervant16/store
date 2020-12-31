import { Injectable } from '@angular/core';
import {
  HttpInterceptor, HttpRequest, HttpHandler,
  HttpEvent, HttpResponse, HttpSentEvent, HttpHeaderResponse,
  HttpProgressEvent, HttpUserEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { FuncionesService } from './funciones.service';


@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private functions: FuncionesService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {

   //codigo para modificar el request aqui

   
    return next.handle(req);
  }
}
