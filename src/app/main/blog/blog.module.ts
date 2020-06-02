import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
import { ArticleOverviewComponent } from '../blog/components/article-overview/article-overview.component';
import { CompanyComponent } from '../company/company.component';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { SourStripsDiscoveryComponent } from './pages/sour-strips-discovery/sour-strips-discovery.component';
import { Top25Component } from './pages/top-25/top-25.component';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    NgxPaginationModule,
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
    CompanyComponent,
    // YoutubePlayerComponent,
  ],
})
export class BlogModule {}
