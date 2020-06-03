import { Component } from '@angular/core';

@Component({
  selector: 'candy-mars',
  templateUrl: './mars.component.html',
  styleUrls: ['./mars.component.scss'],
})
export class MarsComponent {
  constructor() {
    window.scrollTo(0, 0);
  }
}
