import { Component } from '@angular/core';
import { ArticleOverview, Articles } from '../article-data/article-data';
@Component({
  selector: 'candy-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public articles: ArticleOverview[] = Articles;
}
