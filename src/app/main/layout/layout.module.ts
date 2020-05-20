import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { YoutubePlayerComponent } from '../../core/components/youtube-player/youtube-player.component';
import { CoreModule } from '../../core/core.module';
import { AboutMeComponent } from '../blog/components/about-me/about-me.component';
import { SubscribeEmailComponent } from '../blog/components/subscribe-email/subscribe-email.component';
// import { AboutMeComponent } from '../components/about-me/about-me.component';
// import { ArticleOverviewComponent } from '../components/article-overview/article-overview.component';
// import { SubscribeEmailComponent } from '../components/subscribe-email/subscribe-email.component';
// import { HomeComponent } from '../home/home.component';
// import { BlogPageOneComponent } from '../pages/page-one/page-one.component';
// import { BlogPageTwoComponent } from '../pages/page-two/page-two.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    NgxYoutubePlayerModule.forRoot(),
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    SubscribeEmailComponent,
    AboutMeComponent,
    YoutubePlayerComponent,
  ],
})
export class LayoutModule {
  constructor(){
    console.log('loaded layout module');
  }
}