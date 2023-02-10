import { Component, OnInit , EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  term = '';
  //this submitted is an event
  @Output() submitted = new EventEmitter<string>();
  
  constructor() { }
  ngOnInit(): void {
  }

 
  onFormSubmit(event : any){
    event.preventDefault();
    this.submitted.emit(this.term);
  }
  
}
