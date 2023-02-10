import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-type-check",
  templateUrl: "./type-check.component.html",
  styleUrls: ["./type-check.component.css"],
})
export class TypeCheckComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  

  randomText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga ut ex fugiat quis, non porro vel est eligendi aut aliquid eum, facilis recusandae unde amet minus molestiae atque voluptatibus molestias delectus repudiandae culpa. Qui quia consequuntur deleniti sed cupiditate facere consectetur commodi fugit, enim ea quod voluptatem voluptatum tenetur molestiae!";
  enteredText = "";
  hide = false;

  search(event: any) {
    console.log(event.target.value);
    this.enteredText = event.target.value;
  }

  classOfChange(randomLetter: string, enterLetter: string) {
    if (!enterLetter) {
      //class of pending
      return "pending";
    }
    return randomLetter === enterLetter ? "correct" : "incorrect";
  }
}
 