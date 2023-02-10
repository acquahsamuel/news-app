import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'
})
export class NewsService {
  public API_KEY =  ``;
  public BASEURL =  `https://newsapi.org/v2/everything?q=apple&from=2023-01-26&to=2023-01-26&sortBy=popularity&apiKey=391abb8989774dd395a5782deacae973`;

  constructor(
    
    private httpClient : HttpClient

    ) { }

    public getAllNews(){
      const httpOptions = {
        headers : new HttpHeaders({
          'Content-Type' : 'application/json'
        })
      }
      return this.httpClient.get(this.BASEURL);
    }


  // https://newsapi.org/v2/everything?q=apple&from=2023-01-26&to=2023-01-26&sortBy=popularity&apiKey=391abb8989774dd395a5782deacae973
}
