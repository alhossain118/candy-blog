import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CoreModule } from "../../core/core.module";
import { AboutMeComponent } from "../components/about-me/about-me.component";
import { ArticleOverviewComponent } from "../components/article-overview/article-overview.component";
import { SubscribeEmailComponent } from "../components/subscribe-email/subscribe-email.component";
import { HomeComponent } from "../home/home.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { LayoutRoutingModule } from "./layout-routing.module";
import { LayoutComponent } from "./layout.component";
@NgModule({
  imports: [LayoutRoutingModule, CoreModule, FormsModule, ReactiveFormsModule],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SubscribeEmailComponent,
    AboutMeComponent,
    ArticleOverviewComponent,
  ],
})
export class LayoutModule {}
