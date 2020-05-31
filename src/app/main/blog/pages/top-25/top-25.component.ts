import { Component } from '@angular/core';
import { ArticleOverview, Articles } from '../../article-data/article-data';
import { Companies, Company } from './top-25-data';
@Component({
  selector: 'candy-top-25',
  templateUrl: './top-25.component.html',
  styleUrls: ['./top-25.component.scss'],
})
export class Top25Component {
  constructor() {
    window.scrollTo(0, 0);
  }
  public article: ArticleOverview = Articles[0];
  public companies: Company[] = Companies;
}
