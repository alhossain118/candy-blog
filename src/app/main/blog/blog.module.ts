import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleOverviewComponent } from '../blog/components/article-overview/article-overview.component';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { SourStripsDiscoveryComponent } from './pages/sour-strips-discovery/sour-strips-discovery.component';
import { Top25Component } from './pages/top-25/top-25.component';

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
    SourStripsDiscoveryComponent,
    Top25Component,
    ArticleOverviewComponent,
    // YoutubePlayerComponent,
  ],
})
export class BlogModule {}
