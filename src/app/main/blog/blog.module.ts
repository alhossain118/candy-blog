import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleOverviewComponent } from '../blog/components/article-overview/article-overview.component';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
// import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// import { NgxYoutubePlayerModule } from "ngx-youtube-player";
// import { YoutubePlayerComponent } from "../../core/components/youtube-player/youtube-player.component";
// import { CoreModule } from "../../core/core.module";
// import { AboutMeComponent } from "../components/about-me/about-me.component";
// import { ArticleOverviewComponent } from "../components/article-overview/article-overview.component";
// import { SubscribeEmailComponent } from "../components/subscribe-email/subscribe-email.component";
// import { HomeComponent } from "../home/home.component";
// import { BlogPageOneComponent } from "../pages/page-one/page-one.component";
// import { BlogPageTwoComponent } from "../pages/page-two/page-two.component";
// import { FooterComponent } from "./footer/footer.component";
// import { HeaderComponent } from "./header/header.component";
// import { LayoutRoutingModule } from "./layout-routing.module";
// import { LayoutComponent } from "./layout.component";

@NgModule({
  imports: [
    BlogRoutingModule,
    CommonModule,
    // LayoutRoutingModule,
    // CoreModule,
    // FormsModule,
    // ReactiveFormsModule,
    // NgxYoutubePlayerModule.forRoot(),
  ],
  declarations: [
    BlogComponent,
    // LayoutComponent,
    // HeaderComponent,
    // FooterComponent,
    // // HomeComponent,

    ArticleOverviewComponent,
    // // BlogPageOneComponent,
    // // BlogPageTwoComponent,
    // YoutubePlayerComponent,
  ],
})
export class BlogModule {
  constructor() {
    console.log('blog module loaded');
  }
}
