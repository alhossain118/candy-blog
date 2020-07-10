import { Component } from '@angular/core';
import { ArticleOverview, Articles } from '../../article-data/article-data';

@Component({
  selector: 'candy-keto-diet',
  templateUrl: './keto-diet.component.html',
  styleUrls: ['./keto-diet.component.scss'],
})
export class KetoDietComponent {
  public get article(): ArticleOverview {
    return Articles.find((article: ArticleOverview) => {
      return article.header === 'Candy for a Keto Diet';
    });
  }
}
