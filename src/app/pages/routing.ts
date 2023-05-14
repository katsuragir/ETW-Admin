import { Routes } from '@angular/router';

const Routing: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'builder',
    loadChildren: () =>
      import('./builder/builder.module').then((m) => m.BuilderModule),
  },
  {
    path: 'pages/account',
    loadChildren: () =>
      import('../modules/account/account.module').then((m) => m.AccountModule),

  },
  {
    path: 'pages/customer',
    loadChildren: () =>
      import('../modules/customer/customer.module').then((m) => m.CustomerModule),
  },
  {
    path: 'pages/item',
    loadChildren: () =>
      import('../modules/item/item.module').then((m) => m.ItemModule),
  },
  {
    path: 'pages/claim',
    loadChildren: () =>
      import('../modules/claim/claim.module').then((m) => m.ClaimModule),
  },
  {
    path: 'management/user',
    loadChildren: () =>
      import('../modules/user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'management/setup',
    loadChildren: () =>
      import('../modules/setup/setup.module').then((m) => m.SetupModule),
  },
  {
    path: 'management/report',
    loadChildren: () =>
      import('../modules/report/report.module').then((m) => m.ReportModule),
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'error/404',
  },
];

export { Routing };
