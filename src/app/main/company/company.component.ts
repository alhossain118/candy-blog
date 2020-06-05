import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Companies, Company } from '../blog/pages/top-25/top-25-data';
@Component({
  selector: 'candy-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
})
export class CompanyComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  public url: string;
  public company: Company;

  public ngOnInit(): void {
    this.route.params.subscribe((res: any) => {
      this.url = res.id;
      const companyName = this.url.toLowerCase().split('-').join(' ');
      console.log(companyName)
      this.company = Companies.find(
        (company: Company) => company.name.toLowerCase() === companyName
      );
    });
  }
}
