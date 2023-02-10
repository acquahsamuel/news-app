import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
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
  @Input() date?: string;
  @Input() author?: string;
  @Input() title?: string;
  @Input() content?: string;
  @Input() description?: string;
  @Input() url?: string;
  @Input() urlToImage?: string;
  @Input() publishedAt?: string;
  @Input() source?: string;

  constructor(private newService: NewsService, private router: Router) {}

  ngOnInit(): void {
    this.getAllNews();
  }

  getAllNews() {
    this.newService.getAllNews().subscribe((xresponse: any) => {
      console.log(xresponse);
      this.articles = xresponse?.articles;
    });
  }

  renderDescription(template: any) {
    // template.innerHTML = this.articles.content;
  }

 

  goToLink(url: string){
    window.open(url, "_blank");
  }
  
}
