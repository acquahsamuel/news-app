import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-check',
  templateUrl: './credit-check.component.html',
  styleUrls: ['./credit-check.component.css']
})
export class CreditCheckComponent implements OnInit {
  name : string  ='';
  date : string = '';
  amount : number = 0;
  height : number = 0;
  mile : number = 0;

  constructor() { }

  ngOnInit(): void {
  }



  onNameChange(event : any){
    console.log(event, 'data');
    this.name = event;
  }


  onDateChange(event : any){
      console.log(event, 'Date');
      this.date = event;
  } 

  onAmountChange(amount : any){
    console.log(amount, 'Date');
    this.amount = parseFloat(amount);
  }


  onHeightChange(number : any){
    console.log(number , 'number');
  }


  onMileChange(number : any){
   this.mile = number;
  }
}


