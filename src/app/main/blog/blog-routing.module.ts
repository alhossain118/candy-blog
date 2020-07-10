import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from '../blog/blog.component';
import { KetoDietComponent } from './pages/keto-diet/keto-diet.component';
import { SourStripsDiscoveryComponent } from './pages/sour-strips-discovery/sour-strips-discovery.component';
import { Top25Component } from './pages/top-25/top-25.component';

const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
  },
  {
    path: 'my-journey-into-sour-strips',
    component: SourStripsDiscoveryComponent,
  },
  {
    path: 'top-10-candy-companies',
    component: Top25Component,
  },
  {
    path: 'candy-keto-diet',
    component: KetoDietComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
