import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
 


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  // This code is not in best refactored format
  // You can expand the code into more modular structure

  public baseURL = `https://newsapi.org/v2`;

  public start_from = `2024-04-06`;
  public start_to = `2024-04-06`;

  public appleURL =  `${this.baseURL}/everything?q=apple&from=${this.start_from}&to=${this.start_to}&sortBy=popularity&apiKey=${environment.API_KEY}`;

  public teslaURL = `${this.baseURL}/everything?q=tesla&from=2024-03-07&sortBy=publishedAt&apiKey=${environment.API_KEY}`;

  public businessURL = `${this.baseURL}/top-headlines?country=us&category=business&apiKey=${environment.API_KEY}`;
  
  public techCrunchURL  = `${this.baseURL}/top-headlines?sources=techcrunch&apiKey=${environment.API_KEY}`;


  constructor(
    
    private httpClient : HttpClient

    ) { }

    public getAppleNews(){
      const httpOptions = {
        headers : new HttpHeaders({
          'Content-Type' : 'application/json'
        })
      }
      return this.httpClient.get(this.appleURL);
    }


    public getTeslaNews(){
      const httpOptions = {
        headers : new HttpHeaders({
          'Content-Type' : 'application/json'
        })
      }
      return this.httpClient.get(this.teslaURL);
    
    }

    public businessNews(){
      const httpOptions = {
        headers : new HttpHeaders({
          'Content-Type' : 'application/json'
        })
      }
      return this.httpClient.get(this.businessURL);
    }


    public techCrunchNews(){
      const httpOptions = {
        headers : new HttpHeaders({
          'Content-Type' : 'application/json'
        })
      }
      return this.httpClient.get(this.techCrunchURL);
    }


  // https://newsapi.org/v2/everything?q=apple&from=2023-01-26&to=2023-01-26&sortBy=popularity&apiKey=391abb8989774dd395a5782deacae973
}
