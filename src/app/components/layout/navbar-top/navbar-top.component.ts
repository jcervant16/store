import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ComunicationService } from '../../../services/comunication.service';
import { FuncionesService } from '../../../services/funciones.service';


@Component({
  selector: 'app-navbar-top',
  templateUrl: './navbar-top.component.html',
  styleUrls: ['./navbar-top.component.css']
})
export class NavbarTopComponent implements OnInit {

  @ViewChild('navtop', { static: false }) _navtop: ElementRef;
  toggle: boolean;

  constructor(private comunicationServices: ComunicationService,
    private funciones: FuncionesService,
  ) {
  }

  ngOnInit() {

  }

  get UserLogueado() {
    return { name: 'userTest' };
  }

  onToggleNavLeft(): void {
    this.toggle = !this.toggle;
    this.comunicationServices.setToggleNavLeft(this.toggle);
  }

  changeWidth(isCollapse) {
    this.onToggleNavLeft();
  }

  onLogout() {
    this.funciones.redirectToLogin();
  }

}
