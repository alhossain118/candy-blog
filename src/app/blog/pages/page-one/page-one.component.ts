import { Component } from "@angular/core";
import { ArticleOverview, Articles } from "@app/blog/article-data/article-data";
@Component({
  selector: "candy-page-one",
  templateUrl: "./page-one.component.html",
  styleUrls: ["./page-one.component.scss"],
})
export class BlogPageOneComponent {
  constructor() {
    window.scrollTo(0, 0);
  }
  public article: ArticleOverview = Articles[0];
}
