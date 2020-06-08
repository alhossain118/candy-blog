import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleOverview, Articles } from '../../article-data/article-data';
import { Companies, Company } from './top-25-data';

@Component({
  selector: 'candy-top-25',
  templateUrl: './top-25.component.html',
  styleUrls: ['./top-25.component.scss'],
})
export class Top25Component {
  constructor(
    private router: Router,
    private renderer: Renderer2,
  ) {}

  public companies: Company[] = Companies;
  public p = 1;
  public gridViewSelected = true;
  public tableViewSelected = false;
  public itemsPerPage;

  public get article(): ArticleOverview {
    return Articles.find((article: ArticleOverview) => {
      return article.header === 'Top 25 Candy Companies in 2020';
    });
  }

  public pageChangeEvent(e: any): void {
    window.scrollTo(0, 0);
    this.p = e;
  }

  public changeLayoutView(view: string) {
    if (view === 'gridViewSelected') {
      this.gridViewSelected = true;
      this.tableViewSelected = false;

      this.renderer.addClass(
        document.querySelector('#gridBtn'),
        'selectedView'
      );
      this.renderer.removeClass(
        document.querySelector('#tableBtn'),
        'selectedView'
      );
    } else {
      this.gridViewSelected = false;
      this.tableViewSelected = true;

      this.renderer.addClass(
        document.querySelector('#tableBtn'),
        'selectedView'
      );
      this.renderer.removeClass(
        document.querySelector('#gridBtn'),
        'selectedView'
      );
    }
  }

  public routeToCompany(name: string): void {
    const link = name.split(' ').join('-');
    this.router.navigate(['../company', link]);
  }
}
