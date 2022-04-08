import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] =[
    new Quote(1, 'Early to bed and early to rise', 0, 0),
    new Quote(2, 'An apple a day keeps the doctor away', 0, 0),
    new Quote(3, 'The greatest pressure in life is from within', 0, 0),
    new Quote(4, 'Beauty lies in the eyes of the beholder', 0, 0),
    new Quote(5, 'It is what it is', 0, 0)
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
