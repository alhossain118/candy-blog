import { Component, Input } from "@angular/core";
import { ArticleOverview } from "@app/blog/article-data/article-data";
import { Router } from "@angular/router";

@Component({
  selector: "candy-article-overview",
  templateUrl: "./article-overview.component.html",
  styleUrls: ["./article-overview.component.scss"],
})
export class ArticleOverviewComponent {
  constructor(private router: Router) {

  }
  @Input() public articles: ArticleOverview[];

  public navigateToBlogArticle(link: string): void {
    console.log("read more", link);
    this.router.navigate([`${link}`]);
  }
}
