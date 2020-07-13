import { Component } from '@angular/core';

@Component({
  selector: 'candy-entrepreneur',
  templateUrl: './entrepreneur.component.html',
  styleUrls: ['./entrepreneur.component.scss'],
})
export class EntrepreneurComponent {
  constructor() {
    console.log('entrepreneur component loaded');
  }
}
