import { Component } from '@angular/core';
import { ArticleOverview, Articles } from '../article-data/article-data';

@Component({
  selector: 'candy-entrepreneur',
  templateUrl: './entrepreneur.component.html',
  styleUrls: ['./entrepreneur.component.scss'],
})
export class EntrepreneurComponent {
  public get article(): ArticleOverview {
    return Articles.find((article: ArticleOverview) => {
      return article.header === 'Candy Entrepreneurship';
    });
  }
}
