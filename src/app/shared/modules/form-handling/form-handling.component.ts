import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-handling',
  templateUrl: './form-handling.component.html',
  styleUrls: ['./form-handling.component.css']
})
export class FormHandlingComponent implements OnInit {
  email : string = '';
  emailForm = FormGroup;

  constructor() { }

  ngOnInit(): void {



  }

  submitted(){
    console.log(this.email);
  }


}
