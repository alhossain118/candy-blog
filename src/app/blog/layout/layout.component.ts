import { Component } from '@angular/core';

@Component({
  selector: 'candy-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  title = 'candy-blog';
  constructor() {
    console.log('setup');
  }
}
