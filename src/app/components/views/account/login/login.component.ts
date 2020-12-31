import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DataApiWebService } from '../../../../services/data-api-web.service';
import { FuncionesService } from '../../../../services/funciones.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../account.css'],
})
export class LoginComponent implements OnInit {
  frmLogin: FormGroup;

  @ViewChild('vcFrmLogin') vcFrmLogin: ElementRef
  constructor(private api: DataApiWebService,
    private funciones: FuncionesService,
    private fb: FormBuilder) { }

  ngOnInit() {

    this.frmLogin = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })

  }

  get f() { return this.frmLogin.controls };

  onSignin(): void {
    const user = Object.assign({}, this.frmLogin.value);
    if (this.frmLogin.invalid) {
      this.validAndFocus(this.vcFrmLogin, user);
      return;
    }
    let loadingAlert = this.funciones.showLoading('Iniciando sesion');
    loadingAlert.fire();
    this.FrmReset()
    loadingAlert.close();
  }

  onFucusPrimary(): void {
    this.vcFrmLogin.nativeElement.querySelector('#inputPrimary').focus();
  }

  FrmReset(): void {
    this.frmLogin.reset();
    this.onFucusPrimary();
  }
  validAndFocus(element: ElementRef, object) {
    this.funciones.formInputFocus(element);
    if (this.funciones.isNullOrEmpty(object.username)) {
      this.funciones.showAlert('warning', 'Usuario es requerido.');
      return;
    }
    if (this.funciones.isNullOrEmpty(object.password)) {
      this.funciones.showAlert('warning', 'Contraseña es requerida.');
      return;
    }
    return;

  }

}
