export class Quote {
    id: number
    quote: string
    upvote: number
    downvote:number
    author:string
    newDate: Date

    constructor(id:number, quote:string, upvote:number, downvote:number, author:string, newDate:Date){
        this.id = id;
        this.quote = quote;
        this.upvote= upvote;
        this.downvote = downvote;
        this.author = author;
        this.newDate = newDate;
        
          
    }
}
