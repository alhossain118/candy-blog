import { Component } from '@angular/core';
import { ArticleOverview, Articles } from '../../article-data/article-data';
@Component({
  selector: 'candy-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss'],
})
export class BlogPageTwoComponent {
  constructor() {
    window.scrollTo(0, 0);
  }
  public article: ArticleOverview = Articles[0];
}
