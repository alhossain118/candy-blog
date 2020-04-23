import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SubscribeEmailComponent } from "./components/subscribe-email/subscribe-email.component";
import { TestComponent } from "./components/test/test.component";

const components = [TestComponent, SubscribeEmailComponent];
const modules = [NgbModule];

@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...components, ...modules],
})
export class CoreModule {}
