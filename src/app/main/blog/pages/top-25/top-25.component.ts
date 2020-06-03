import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleOverview, Articles } from '../../article-data/article-data';
import { Companies, Company } from './top-25-data';

@Component({
  selector: 'candy-top-25',
  templateUrl: './top-25.component.html',
  styleUrls: ['./top-25.component.scss'],
})
export class Top25Component {
  constructor(private router: Router) {}

  public article: ArticleOverview = Articles[0];
  public companies: Company[] = Companies;
  public p = 1;

  public pageChangeEvent(e: any): void {
    this.p = e;
  }
  public routeToCompany(name: string): void {
    const link = name.split(' ').join('-');
    this.router.navigate(['../company', link]);
  }
}
