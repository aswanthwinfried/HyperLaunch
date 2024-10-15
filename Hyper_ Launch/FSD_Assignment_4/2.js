// Write a JavaScript object book with properties title 
// and author. Add a method details()
// that prints "Title: [title], Author: [author]".
//  Use the this keyword to access object properties.




let book = {
    title:"Algorithms",
    author:"Ramanan",
    details:function(){
        console.log(`Title: ${this.title}`,`Author: ${this.author}`)
    }
}
 
console.log(book.details())