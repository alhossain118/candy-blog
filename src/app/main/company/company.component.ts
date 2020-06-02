import { Component } from '@angular/core';

@Component({
  selector: 'candy-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
})
export class CompanyComponent {
  constructor() {
    console.log('company component loaded');
    window.scrollTo(0, 0);
  }
}
