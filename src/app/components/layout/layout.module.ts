import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarLeftComponent } from './navbar-left/navbar-left.component';
import { NavbarTopComponent } from './navbar-top/navbar-top.component';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    NavbarTopComponent, NavbarLeftComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule, ReactiveFormsModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    PopoverModule.forRoot(),
    NgSelectModule,   
  ],
  exports: [
    NavbarTopComponent, NavbarLeftComponent
  ]
})
export class LayoutModule { }
