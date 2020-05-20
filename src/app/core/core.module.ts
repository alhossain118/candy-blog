import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TestComponent } from './components/test/test.component';
import { EmailService } from './services/email.service';

const components = [TestComponent];
const modules = [NgbModule];

@NgModule({
  declarations: [...components],
  providers: [EmailService],
  imports: [...modules],
  exports: [...components, ...modules],
})
export class CoreModule {}
