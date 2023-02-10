import { Component, OnInit, Output, EventEmitter } from "@angular/core";
// import { EventEmitter } from 'stream';

@Component({
  selector: "app-search-bx",
  templateUrl: "./search-bx.component.html",
  styleUrls: ["./search-bx.component.scss"],
})
export class SearchBxComponent implements OnInit {
  searchKeyword = "";
  @Output() searchFilter = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  searchEvent(key: any) {
    console.log(key.target.value);
    this.searchFilter.emit(this.searchKeyword);
  }
}
