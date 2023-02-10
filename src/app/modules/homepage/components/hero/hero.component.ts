import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  categories = [
    {
      name: '',
      title: 'SCSS'
    },
    {
      name: '',
      title: 'Javascript'
    },
    {
      name: '',
      title: 'Html'
    },
    {
      name: '',
      title: 'Angular'
    },
    {
      name: '',
      title: 'Node js'
    },
    {
      name: '',
      title: 'Mongodb'
    },
    {
      name: '',
      title: 'Data structures'
    }
  ]
}
