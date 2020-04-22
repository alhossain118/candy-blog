import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  imports: [LayoutRoutingModule, NgbModule],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent]
})
export class LayoutModule {}
