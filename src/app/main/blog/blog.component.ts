import { Component } from '@angular/core';
import { ArticleOverview, Articles } from './article-data/article-data';
@Component({
  selector: 'candy-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  constructor() {
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
  }
  public articles: ArticleOverview[] = Articles;
}
