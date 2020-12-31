import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterPageComponent } from './master-page.component';
import { AuthGuardService } from '../../../services/auth-guard.service';
import { PortalEnum } from '../../../enum/e-portal.enum';

const routes: Routes = [
  {
    path: '',
    component: MasterPageComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../../views/home/home.module').then((m) => m.HomeModule),
        data: { title: 'Home', id: PortalEnum.Home },
      },
      {
        path: 'categories',
        loadChildren: () =>
          import('../../views/categories/categories.module').then(
            (m) => m.AcademyModule
          ),
        data: { title: 'Categories', id: PortalEnum.Categories },
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('../../views/contact/contact.module').then((m) => m.ContactModule),
        data: { title: 'Contact us', id: PortalEnum.Contact },
      },
      {
        path: 'buy-bids',
        loadChildren: () =>
          import('../../views/buy-bids/buy-bids.module').then((m) => m.BuyBidsModule),
        data: { title: 'Buy Bids', id: PortalEnum.BuyBids },
      },
      {
        path: '',
        redirectTo: 'home'
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasterPageRoutingModule { }
