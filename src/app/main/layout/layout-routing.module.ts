import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from "../home/home.component";
// import { BlogPageOneComponent } from "../pages/page-one/page-one.component";
// import { BlogPageTwoComponent } from "../pages/page-two/page-two.component";
import { LayoutComponent } from './layout.component';
// import { BlogComponent } from '../blog/blog.component';

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
      // {
      //   path: "my-journey-into-sour-strips",
      //   component: BlogPageOneComponent,
      // },
      // {
      //   path: "candy-for-a-keto-diet",
      //   component: BlogPageTwoComponent,
      // },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
