import { Component, Input } from "@angular/core";
import { ArticleOverview } from "@app/blog/article-data/article-data";
import { Router } from "@angular/router";

@Component({
  selector: "candy-article-overview",
  templateUrl: "./article-overview.component.html",
  styleUrls: ["./article-overview.component.scss"],
})
export class ArticleOverviewComponent {
  @Input() public articles: ArticleOverview[];
}
