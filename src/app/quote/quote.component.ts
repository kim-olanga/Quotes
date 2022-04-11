import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }
  quotes: Quote[] = [
    new Quote(1, 'Whatever you are, be a good one', 0, 0, 'Abraham Lincon','Kimzy' ,new Date(2022,3,14)),
    new Quote(2, 'You are your home', 0, 0, 'Erin Hanson','Kimzy' ,new Date(2022,6,10)),
    new Quote(3, 'No pressure no diamonds', 0, 0, 'Thomas Carlyle','Kimzy' ,new Date(2022,5,26)),
    new Quote(4, 'If you want to live a happy life,tie it to a goal not to people or things', 0, 0, 'Albert Einstin','Kimzy' ,new Date(2022,7,30)),
    new Quote(5, 'My life is my message', 0, 0, 'mahatma Gandhi', 'Kimzy',new Date(2022,1,1))
  ]

  deleteQuote(isRead: any, index: number){
    if (isRead) {
      let toDelete = confirm(`Will you delete this quote by ${this.quotes[index].author} ?`)
    }
    if (isRead) {
      this.quotes.splice(index,1)
    }
  }

  preNum!:number
  lastNum!:number
  counter!:number

  highestVote(){
    this.preNum = 0
    this.lastNum = 0

    for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
      this.lastNum = this.quotes[this.counter].upvote;
      if(this.lastNum > this.preNum){this.preNum = this.lastNum}
    }
    return  this.preNum
  }

  arr: number[] = this.quotes.map((quote) => quote.upvote)
  highest = Math.max(...this.arr)

  addNewQuote(quote: any) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)

  };

  addLikes(index: number){
    this.quotes[index].upvote++;
  }
  addMeeh(index: number){
    this.quotes[index].upvote++;
  }

  constructor() { }

  ngOnInit(): void {

  }

};

