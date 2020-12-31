import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MasterPageComponent } from '../master-page/master-page.component';
import { NavbarTopComponent } from '../navbar-top/navbar-top.component';

@Component({
  selector: 'app-navbar-left',
  templateUrl: './navbar-left.component.html',
  styleUrls: ['./navbar-left.component.css'],
  providers:[NavbarTopComponent]
})
export class NavbarLeftComponent implements OnInit {
  @ViewChild('aside') _navAside: ElementRef;
  @ViewChild('btnCollapse') _btnCollapse: ElementRef;
  collapseActive: boolean = false;
  hierarchicalMenu: {}[];


  constructor(private renderer: Renderer2, private master: MasterPageComponent) { }

  ngOnInit() {
    this.loadMenu();
  }

  collapseNavBarAside() {
    if (!this.collapseActive) {
      this.renderer.addClass(this._navAside.nativeElement, 'side-collapse');
      this.renderer.addClass(this._btnCollapse.nativeElement, 'btn-collapse-active');
      this.collapseActive = true;
      this.master.changeWidth(this.collapseActive);
    } else {
      this.renderer.removeClass(this._navAside.nativeElement, 'side-collapse');
      this.renderer.removeClass(this._btnCollapse.nativeElement, 'btn-collapse-active');
      this.collapseActive = false;
      this.master.changeWidth(this.collapseActive);
    }
  }

  loadMenu() {
    this.hierarchicalMenu = [{
      commandMenu: '/home',
      iconName: 'fas fa-home',
      description: 'Home',
      listPortal: [],
      active: true
    },
    {
      commandMenu: '/categories',
      iconName: 'fas fa-shopping-cart',
      description: 'Start Bidding',
      listPortal: [],
      active: false
    },
    {
      commandMenu: '/contact',
      iconName: 'fas fa-file-alt',
      description: 'Contact us',
      listPortal: [],
      active: false
    },
    {
      commandMenu: '/buy-bids',
      iconName: 'fas fa-dollar-sign',
      description: 'Buy Bids',
      listPortal: [],
      active: false
    }]
  }

}
