import { Component } from '@angular/core';
import defaultlist from "../resources/words.json"
import a100 from "../resources/a1(100).json"
import a200 from "../resources/a1(200).json"
import a300 from "../resources/a1(300).json"
import a400 from "../resources/a1(400).json"
import { FileService } from './services/fileservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'flashcard';

  constructor(private service:FileService){

  }

  default(){
    console.log("default");
    this.service.setSelectedPageSubject(defaultlist);
  }

  a100(){
    console.log("a1");
    this.service.setSelectedPageSubject(a100);
  }

  a200(){
    console.log("a2");
    this.service.setSelectedPageSubject(a200);
  }


  a300(){
    console.log("a3");
    this.service.setSelectedPageSubject(a300);
  }

  a400(){
    console.log("a4");
    this.service.setSelectedPageSubject(a400);
  }

}
