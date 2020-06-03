import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Companies, Company } from '../blog/pages/top-25/top-25-data';
@Component({
  selector: 'candy-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
})
export class CompanyComponent implements OnInit {
  public url: string;
  public company: Company;

  constructor(private route: ActivatedRoute) {
    window.scrollTo(0, 0);
  }

  public ngOnInit(): void {
    this.route.params.subscribe((res: any) => {
      this.url = res.id;
      const companyName = this.url.toLowerCase().split('-').join(' ');
      this.company = Companies.find(
        (company: Company) => company.name.toLowerCase() === companyName
      );
    });
  }
}
