import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleOverviewComponent } from '../blog/components/article-overview/article-overview.component';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { BlogPageOneComponent } from './pages/page-one/page-one.component';
import { BlogPageTwoComponent } from './pages/page-two/page-two.component';

@NgModule({
  imports: [
    BlogRoutingModule,
    CommonModule,
    // CoreModule,
    // FormsModule,
    // ReactiveFormsModule,
    // NgxYoutubePlayerModule.forRoot(),
  ],
  declarations: [
    BlogComponent,
    BlogPageOneComponent,
    BlogPageTwoComponent,
    ArticleOverviewComponent,
    // YoutubePlayerComponent,
  ],
})
export class BlogModule {}
