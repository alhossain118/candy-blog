import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { YoutubePlayerComponent } from '../../core/components/youtube-player/youtube-player.component';
import { ArticleOverviewComponent } from '../blog/components/article-overview/article-overview.component';
import { CompanyComponent } from '../company/company.component';
import { FerreroComponent } from '../company/ferrero/ferrero.component';
import { HersheysComponent } from '../company/hersheys/hersheys.component';
import { MarsComponent } from '../company/mars/mars.component';
import { MeijiComponent } from '../company/meiji/meiji.component';
import { MondelezComponent } from '../company/mondelez/mondelez.component';
import { NestleComponent } from '../company/nestle/nestle.component';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { EntrepreneurComponent } from './entrepreneur/entrepreneur.component';
import { KetoDietComponent } from './pages/keto-diet/keto-diet.component';
import { SourStripsDiscoveryComponent } from './pages/sour-strips-discovery/sour-strips-discovery.component';
import { Top25Component } from './pages/top-25/top-25.component';

const pages = [
  EntrepreneurComponent,
  KetoDietComponent,
  SourStripsDiscoveryComponent,
  Top25Component
];

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    NgxPaginationModule,
    // CoreModule,
    // FormsModule,
    // ReactiveFormsModule,
    NgxYoutubePlayerModule.forRoot(),
  ],
  declarations: [
    ...pages,
    BlogComponent,
    ArticleOverviewComponent,
    CompanyComponent,
    MarsComponent,
    FerreroComponent,
    MondelezComponent,
    MeijiComponent,
    HersheysComponent,
    NestleComponent,
    YoutubePlayerComponent,
  ],
})
export class BlogModule {}
