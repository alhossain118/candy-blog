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

  public companies: Company[] = Companies;
  public p = 1;

  public get article(): ArticleOverview {
    return Articles.find((article: ArticleOverview) => {
      return article.header === 'Top 25 Candy Companies in 2020';
    });
  }

  public pageChangeEvent(e: any): void {
    window.scrollTo(0, 0);
    this.p = e;
  }
  public routeToCompany(name: string): void {
    const link = name.split(' ').join('-');
    this.router.navigate(['../company', link]);
  }
}
