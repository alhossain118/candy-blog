import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TestComponent } from "./components/test/test.component";

const components = [TestComponent];
const modules = [CommonModule, NgbModule];

@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...components, ...modules],
})
export class CoreModule {}
