import { Component, OnInit, Input } from '@angular/core';


interface IPages{
  title?: string;
  wordcount?: string;
  snippet?: string;
}


@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  @Input() pages  = [];
  constructor() { }

  ngOnInit(): void {
  }

  getSearchMatch(){
    return ''
  }

}
