import { Component, Input } from '@angular/core';
import { ArticleOverview } from '../../article-data/article-data';

@Component({
  selector: 'candy-article-overview',
  templateUrl: './article-overview.component.html',
  styleUrls: ['./article-overview.component.scss'],
})
export class ArticleOverviewComponent {
  @Input() public articles: ArticleOverview[];
}
