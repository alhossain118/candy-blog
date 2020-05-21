import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from '../blog/blog.component';
import { BlogPageOneComponent } from './pages/page-one/page-one.component';
import { BlogPageTwoComponent } from './pages/page-two/page-two.component';

const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
  },
  {
    path: 'my-journey-into-sour-strips',
    component: BlogPageOneComponent,
  },
  {
    path: 'candy-for-a-keto-diet',
    component: BlogPageTwoComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
