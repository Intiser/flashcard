import { Component, OnInit } from '@angular/core';
import wordjs from "../../resources/words.json"

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit{
  flipped = false;
  selection = 0;

  constructor(){

  }
  

  ngOnInit(): void {
    this.words = wordjs;
  }



  words = [
    {
      word: "word1",
      meaning: "meaning1"
    },
    {
      word: "word2",
      meaning: "meaning2"
    },
    {
      word: "word3",
      meaning: "meaning3"
    },
  ]
  

  toggle(){
    this.flipped = !this.flipped;
    console.log(this.selection);
  }

  previous(){
    console.log(this.selection);
    if( this.selection-1 >= 0) {
      this.selection = this.selection - 1;
      return;
    }
    this.selection = this.words.length - 1;;
  }

  random(){
    this.selection = this.getRandomInt(this.words.length);
  }

  next(){
    console.log(this.selection);
    if(this.words.length > this.selection+1) {
      this.selection = this.selection + 1;
      return;
    }
    this.selection = 0;
  }

   getRandomInt(max:number) {
    return Math.floor(Math.random() * max);
  }
}
