import { Component } from '@angular/core';
import { ArticleOverview, Articles } from '../../article-data/article-data';
@Component({
  selector: 'candy-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss'],
})
export class BlogPageOneComponent {
  constructor() {
    window.scrollTo(0, 0);
    console.log('loaded');
  }
  public article: ArticleOverview = Articles[0];
}
