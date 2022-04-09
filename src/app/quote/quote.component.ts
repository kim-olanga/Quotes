import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  quotes: Quote[] =[
    new Quote(1, 'Early to bed and early to rise', 0, 0, 'Miles Monroe', 'Oyando'),
    new Quote(2, 'An apple a day keeps the doctor away', 0, 0, 'Kevin Hart', 'Olanga'),
    new Quote(3, 'The greatest pressure in life is from within', 0, 0, 'Jeff Matandi', 'Carolyne'),
    new Quote(4, 'Beauty lies in the eyes of the beholder', 0, 0, 'Mahatt Magandthi', 'Ralph'),
    new Quote(5, 'It is what it is', 0, 0, 'Nairobian Slogan', 'Meme')
  ]

  arr:number[] = this.quotes.map((quote)=> quote.upvote)
  highest = Math.max(...this.arr)

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.author = new String  
    quote.name = new String
      
    this.quotes.push(quote)

  };


  // constructor() {}

  // ngOnInit(): void {}

};

