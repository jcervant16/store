import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { IResponse } from '../interface/i-response';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { map, tap } from 'rxjs/operators';
import { CodeStatusHttp } from '../enum/code-status-http.enum';
import { FuncionesService } from './funciones.service';
import { Title } from '@angular/platform-browser';
import { ComunicationService } from './comunication.service';


@Injectable()
export class DataApiWebService {
  private readonly headerConfig = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    }),
  };

  constructor(
    private http: HttpClient,
    private functions: FuncionesService,
  ) { }

  // Metodo para consumir web-api por el metodo POST
  private POST(nameService: string, param = null): Observable<IResponse> {
    const apiUrl = `${environment.apiUrl}api/${nameService}`;
    return this.http
      .post<IResponse>(apiUrl, JSON.stringify(param), this.headerConfig)
      .pipe(
        map((res: IResponse) => {
          if (res.codeStatus == CodeStatusHttp.Forbidden) {

          }
          return res;
        }),
        tap(
          () => { },
          (error) => this.HandleError(error)
        )
      );
  }

  // Metodo para consumir web-api por el metodo GET
  private GET(nameService: string, params: any = null): Observable<IResponse> {
    const apiUrl = `${environment.apiUrl}api/${nameService}`;
    return this.http
      .get<IResponse>(`${environment.apiUrl}api/${nameService}`, {
        headers: this.headerConfig.headers,
        params,
      })
      .pipe(
        map((res: IResponse) => {
          if (res.codeStatus == CodeStatusHttp.Forbidden) {

          }
          return res;
        }),
        tap(
          () => { },
          (error) => this.HandleError(error)
        )
      );
  }

  /**
   * Funcion que se utiliza cuando hay errores en los metodos GET y POST
   **/
  private HandleError(error: HttpErrorResponse) {
    const time = 5000;
    if (error.status == CodeStatusHttp.Unauthorized) {
      this.functions.redirectToLogin();
      this.functions.showAlert('warning', 'Usuario no logueado.', time);
    } else if (error.status == CodeStatusHttp.UnknownError || error.status == CodeStatusHttp.NotFound) {
      this.functions.showAlert('errorApi', error, time);
    }
  }


}
