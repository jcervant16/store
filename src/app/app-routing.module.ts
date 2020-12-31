import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./components/layout/master-page/master-page.module').then(m => m.MasterPageModule),
  },
 
  {
    path: 'login',
    loadChildren: () => import('./components/views/account/login/login.module').then(m => m.LoginModule),
    data: { title: 'Inicio de Sesión' }
  },
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
