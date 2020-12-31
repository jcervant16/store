import { Component, OnInit, NgZone, HostListener, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { ComunicationService } from '../../../services/comunication.service';
import { Observable } from 'rxjs';
import { FuncionesService } from '../../../services/funciones.service';
import { NavbarTopComponent } from '../navbar-top/navbar-top.component';

@Component({
  selector: 'app-master-page',
  templateUrl: './master-page.component.html',
  styleUrls: ['./master-page.component.css']
})
export class MasterPageComponent implements OnInit {

  @ViewChild("mainContent", { static: false }) _divWrapper: ElementRef;
  @ViewChild("navtop", { static: false }) _navtop: NavbarTopComponent;

  toggle: boolean = false;
  title: string;
  collapseActive: any;
  private get getCongigutationPage(): Observable<any> { return this.comunicationServices.getCongigutationPage() }
  constructor(
    private comunicationServices: ComunicationService,
    private funciones: FuncionesService,
    private renderer: Renderer2) {

    this.onResize();
  }

  ngOnInit() {

  }
  @HostListener('window:resize', ['$event'])
  onResize() {

    /* if (window.innerWidth <= 990) {
      if (!this.toggle) {
        this.toggle = true;
      }
    } else {
      this.toggle = false;
    } */
  }


  changeWidth(status: boolean): void {
    if (status) {
      this.renderer.addClass(this._divWrapper.nativeElement, 'wrapper-expanded');
    } else {
      this.renderer.removeClass(this._divWrapper.nativeElement, 'wrapper-expanded');
    }
    this._navtop.onToggleNavLeft();
  }
}
