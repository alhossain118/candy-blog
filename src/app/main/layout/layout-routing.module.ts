import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { CompanyComponent } from '../company/company.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'blog',
      },
      {
        path: 'blog',
        loadChildren: () =>
          import('../blog/blog.module').then((m) => m.BlogModule),
        // component: BlogComponent,
      },
      {
        path: 'company/:id',
        component: CompanyComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
