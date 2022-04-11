export class Quote {
    id: number
    quote: string
    upvote: number
    downvote:number
    author:string
    name:string
    dateCreated: Date

    constructor(id:number, quote:string, upvote:number, downvote:number, author:string, name:string, dateCreated:Date){
        this.id = id;
        this.quote = quote;
        this.upvote= upvote;
        this.downvote = downvote;
        this.author = author;
        this.name = name;
        this.dateCreated = dateCreated;
        
          
    }
}
