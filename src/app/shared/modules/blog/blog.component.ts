import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NewsService } from "src/app/shared/services/news.service";

interface IArticle {
  date?: string;
  author: string;
  title: string;
  content: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
}

@Component({
  selector: "app-blog-card",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.css"],
})
export class BlogComponent implements OnInit {
  articles!: any;
  categories = ["Apple", "Tesla", "Business Insider", "Tech Crunch"];

  @Input() date?: string;
  @Input() author?: string;
  @Input() title?: string;
  @Input() content?: string;
  @Input() description?: string;
  @Input() url?: string;
  @Input() urlToImage?: string;
  @Input() publishedAt?: string;
  @Input() source?: string;

  constructor(
    private newService: NewsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.categoriesFilter("Apple");
  }

  getAllAppleNews() {
    this.newService.getAppleNews().subscribe((xresponse: any) => {
      console.log(xresponse);
      this.articles = xresponse?.articles;
    });
  }

  getTeslaNews() {
    this.newService.getTeslaNews().subscribe((xresponse: any) => {
      this.articles = xresponse?.articles;
    });
  }

  getBusinessInsider() {
    this.newService.businessNews().subscribe((xresponse: any) => {
      this.articles = xresponse?.articles;
    });
  }

  getTechCruch() {
    this.newService.techCrunchNews().subscribe((xresponse: any) => {
      this.articles = xresponse?.articles;
    });
  }


  categoriesFilter(category: string) {
    if (category === "Apple") {
      this.getAllAppleNews();
    } else if (category === "Tesla") {
      this.getTeslaNews();
    } else if (category === "Business Insider") {
      this.getBusinessInsider();
    } else if ("Tech Crunch") {
      this.getTechCruch();
    } else {
      this.getAllAppleNews();
    }
  }


  goToLink(url: string) {
    window.open(url, "_blank");
  }
}
