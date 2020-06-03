import { Component } from '@angular/core';
import { ArticleOverview, Articles } from '../../article-data/article-data';
@Component({
  selector: 'candy-sour-strips-discovery',
  templateUrl: './sour-strips-discovery.component.html',
  styleUrls: ['./sour-strips-discovery.component.scss'],
})
export class SourStripsDiscoveryComponent {
  public article: ArticleOverview = Articles[0];
}
