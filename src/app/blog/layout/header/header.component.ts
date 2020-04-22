import { Component } from '@angular/core';

@Component({
  selector: 'candy-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public isMenuCollapsed = true;
}
