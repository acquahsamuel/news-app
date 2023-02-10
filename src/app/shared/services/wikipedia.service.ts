import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {
  BASE_URL = 'https://en.wikipedia.org/w/api.php';
  // https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=space

  constructor(
    private httpClient : HttpClient
    ) {

  }


  search(term: string) {
    return this.httpClient.get(`${this.BASE_URL}`,{
      params : {
        action : 'query',
        format : 'json',
        list : 'search',
        utf8 : '1',
        srsearch : term,
        origin : '*'
      }
    })
  }
}
