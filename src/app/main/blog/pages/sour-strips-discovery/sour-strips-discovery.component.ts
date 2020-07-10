import { Component } from '@angular/core';
import { ArticleOverview, Articles } from '../../article-data/article-data';
@Component({
  selector: 'candy-sour-strips-discovery',
  templateUrl: './sour-strips-discovery.component.html',
  styleUrls: ['./sour-strips-discovery.component.scss'],
})
export class SourStripsDiscoveryComponent {
  public get article(): ArticleOverview {
    return Articles.find((article: ArticleOverview) => {
      return article.header === 'My Journey into Sour Strips';
    });
  }
}
