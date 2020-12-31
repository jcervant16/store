import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BuyBidsComponent } from './buy-bids.component';

const routes: Routes = [
  { path: '', component: BuyBidsComponent },
];

@NgModule({
  declarations: [BuyBidsComponent],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    ModalModule.forRoot(),
    RouterModule.forChild(routes),
    BsDatepickerModule.forRoot(),
    NgSelectModule,
    TooltipModule.forRoot(),
  ],
})
export class BuyBidsModule { }
