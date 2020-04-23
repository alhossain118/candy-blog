import { NgModule } from "@angular/core";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { LayoutRoutingModule } from "./layout-routing.module";
import { LayoutComponent } from "./layout.component";
import { CoreModule } from "../../core/core.module";
import { HomeComponent } from "../home/home.component";
@NgModule({
  imports: [LayoutRoutingModule, CoreModule],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, HomeComponent]
})
export class LayoutModule {}
