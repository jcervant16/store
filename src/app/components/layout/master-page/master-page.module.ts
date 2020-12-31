import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterPageRoutingModule } from './master-page-routing.module';
import { MasterPageComponent } from './master-page.component';
import { LayoutModule } from '../layout.module';

@NgModule({
  declarations: [MasterPageComponent],
  imports: [
    CommonModule,    
    MasterPageRoutingModule,    
    LayoutModule    
  ]  
})
export class MasterPageModule { }
