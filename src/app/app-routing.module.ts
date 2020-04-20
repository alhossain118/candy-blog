import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // component: LayoutComponent,
    // loadChildren: '@app/blog/layout/layout.module#LayoutModule'
    loadChildren: () =>
      import('./blog/layout/layout.module').then((m) => m.LayoutModule),
  },
];
// C:\Users\asher118\Documents\candy-blog\src\app\blog\layout\layout.module.ts
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
