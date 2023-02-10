import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NewsService } from "src/app/shared/services/news.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  articles = [];
  images = [];

  constructor(private newService: NewsService, private router: Router) {}

  ngOnInit(): void {
    this.getAllNews();
  }

  getAllNews() {
    this.newService.getAppleNews().subscribe((xresponse: any) => {
      console.log(xresponse);
      this.articles = xresponse?.articles;
    });
  }

  search() {}
}
