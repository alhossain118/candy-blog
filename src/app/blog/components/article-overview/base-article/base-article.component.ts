import { Component, Input } from "@angular/core";
import { ArticleOverview } from "@app/blog/article-data/article-data";

@Component({
  selector: "candy-base-article",
  templateUrl: "./base-article.component.html",
  styleUrls: ["./base-article.component.scss"],
})
export class BaseArticleComponent {
  @Input() public article: ArticleOverview;
}
