import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


interface IPageData{
  title?: string;
  backgroundImage?: string;
  likeTag?: string;
  popupImage?: string;
}

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  @Input() title = '';
  @Input() backgroundImage = '';
  @Input() likeTag = '';
  @Input() popupImage = '';


  @Output() submitted = new  EventEmitter<string>();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  goTo(event :any){
      event.preventDefault();
      console.log(event, 'clicked');
      // this.submitted.emit(this.pageData)
  }


  





  // @ts-ignore 
  // goTo(id: any) {
  //   this.router.navigate(['/blog-details', id]);
  // }



}
