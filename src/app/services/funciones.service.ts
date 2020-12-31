import { Injectable, ElementRef } from '@angular/core';
import * as moment from 'moment';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CodeStatusHttp } from '../enum/code-status-http.enum';
import { JwtHelperService } from '@auth0/angular-jwt';
import Swal from 'sweetalert2';
import { ModalDirective } from 'ngx-bootstrap/modal/public_api';

@Injectable()
export class FuncionesService {


  private pipe = new DatePipe('en-US');
  private helper = new JwtHelperService();

  constructor(private toastr: ToastrService,
    private router: Router) { }


  substring(cadena: string, end: number): string {

    return cadena.substring(0, end);
  }

  /**
   * Verifica si esta logueado
   * */
  isLogged(): boolean {
    let isLogged: boolean = true;
    return isLogged;
  }

  /**
   * Verifica si una variable es nula, no esta definida o esta vacia
   * @param value
   */
  isNullOrEmpty(value: string): boolean {

    let isValid: boolean = false;

    if (value == null) {
      isValid = true;
    } else if (value == undefined) {
      isValid = true;
    } else if (value.trim().length <= 0) {
      isValid = true;
    }
    return isValid;
  }

  /**
   * Mustra un alert tipo notificacion
   * @param type 'success' | 'warning' | 'error' | 'info'
   * @param message
   */
  showAlert(typeAlert: 'success' | 'warning' | 'error' | 'info' | 'errorApi', message: string | any, timeOut: number = 4000) {

    if (typeAlert == 'success') {
      this.toastr.success(message, '', { timeOut });
    }
    else if (typeAlert == 'warning') {
      this.toastr.warning(message, '', { timeOut });
    }
    else if (typeAlert == 'info') {
      this.toastr.info(message, '', { timeOut });
    }
    else if (typeAlert == 'error') {
      this.toastr.error(message, '', { timeOut });
    } else if (typeAlert == 'errorApi') {
      if (message.status == CodeStatusHttp.Unauthorized) {
        this.toastr.error('Usuario no esta logueado en la aplicación.', '', { timeOut });
        this.redirectToLogin();
      } else {
        const url = message.url.split('api/')[1];
        this.toastr.error(`No se encuentra el servicio web: ${url}`, '', { timeOut });
      }

    } else {
      throw `No existe el tipo de alert:  ${typeAlert}`;
    }

  }
  /**
   * Abre un Modal 
   * @param modal
   * @param config
   */
  openModal(modal: ModalDirective, config: {} = null) {

    if (config) {
      modal.config = config
    } else {
      modal.config = {
        backdrop: 'static',
      };
    }
    modal.show();


  }

  showLoading(title: string, width: string = null) {
    let widthValue = (width) ? width : '27rem';


    var timer = Swal.mixin({
      title: title,
      width: widthValue,
      html: 'Espere porfavor...',
      onBeforeOpen: () => {
        Swal.showLoading()
      },

    });
    return timer;
  }
  /**
   * Convierte hora de 24 a 12
   * @param time
   */
  time24To12(time: string): string {
    return moment(time, 'HH:mm:ss').format('hh:mm a');
  }

  /**
   * Convierte hora de 12 a 24
   * @param time
   */
  time12To24(time: string): string {
    return moment(time, 'hh:mm:ss').format('HH:mm');
  }

  /**
   * Obtiene la fecha actual
   * @param format
   */
  dateCurrent(format: string = 'YYYY/MM/DD'): string {

    return moment().format(format);
  }

  /**
   * Formatea una fecha
   * @param date 
   * @param format 
   */
  dateFormat(date: any, format: string = 'yyyy/MM/dd'): string {
    return this.pipe.transform(date, format);
  }

  dataURItoBlob(dataURI): Blob {
    const byteString = window.atob(dataURI);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], { type: 'image/png' });
    return blob;
  }

  /**
   * redirecciona al login
   * */
  redirectToLogin() {

    this.router.navigate(['/login']);
  }

  /**
   * el usuario no tiene permisos
   * */
  redirectToForbidden() {
    this.router.navigate(['error403']);
  }

  /**
   * Pagina no encontrada
   * */
  redirectToPageNotFound() {
    this.router.navigate(['error404']);
  }
  /**
   * 
   * @param page Redirecciona a una pagina
   */
  redirectTo(page: string) {
    this.router.navigate([page]);
  }

  refreshTo(page: string) {
    this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
      this.router.navigate([page]);
    });
  }
  /**
   * Valida si el dato por parametro es numerico
   * @param dato 
   */
  isNumber(dato): boolean {
    let isNumber: boolean = true;
    if (dato === undefined || dato === null) {
      isNumber = false;
    } else {
      isNumber = (!isNaN(dato))
    }
    return isNumber;
  }

  /**
   * Valida si un objeto no es undefined o null
   * @param dato 
   */
  isValidObject(object: any): boolean {
    return !(object === undefined || object === null);
  }

  /**
   * Coloca el focus en el campo requerido
   * @param form :ElementRef
   */
  formInputFocus(form: ElementRef): void {
    const invalidControl = form.nativeElement.querySelector('.ng-invalid');
    if (invalidControl) {
      invalidControl.focus();
    }
  }

  selectFile(event): File {
    const [file] = event.target.files;
    return file;
  }

  convertToBase64(file): FileReader {
    // const file = this.selectFile(event)
    const reader = new FileReader();
    reader.readAsDataURL(file);
    return reader
  }
}
