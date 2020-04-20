import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';

@NgModule({
  imports: [LayoutRoutingModule],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent],
})
export class LayoutModule {}
