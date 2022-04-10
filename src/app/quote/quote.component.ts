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
    new Quote(1, 'Early to bed and early to rise', 0, 0, 'Miles Monroe', new Date(2022,3,14)),
    new Quote(2, 'An apple a day keeps the doctor away', 0, 0, 'Kevin Hart', new Date(2022,6,10)),
    new Quote(3, 'The greatest pressure in life is from within', 0, 0, 'Jeff Matandi', new Date(2022,5,26)),
    new Quote(4, 'Beauty lies in the eyes of the beholder', 0, 0, 'Mahatt Magandthi', new Date(2022,7,30)),
    new Quote(5, 'It is what it is', 0, 0, 'Nairobian Slogan',new Date(2022,1,1))
  ]

  arr: number[] = this.quotes.map((quote) => quote.upvote)
  highest = Math.max(...this.arr)

  addNewQuote(quote: any) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.author = new String
    quote.upvote = new Number
    quote.downvote = new Number
    quote.newDate = new Number


    this.quotes.push(quote)

  };

  constructor() { }

  ngOnInit(): void {

  }

};

