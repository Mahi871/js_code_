const Dicstionary = [

    {
        title :"book1",genre:"fiction",published:2001,edition: "first"
    },

    {
        title :"book2",genre:"non-fiction",published:1999,edition: "second"
    },

    {
        title :"book3",genre:"fiction",published:2010,edition: "first"
    },  
    {
        title :"book4",genre:"science",published:2005,edition: "third"
    },
    {
        title :"book5",genre:"fiction",published:2015,edition: "second"
    },

    {
        title :"book6",genre:"history",published:2020,edition: "first"
    },

    {
        title :"book7",genre:"science",published:1995,edition: "first"
    },

    {
        title :"book8",genre:"non-fiction",published:2003,edition: "third"
    }
]

let data = Dicstionary.filter((book)=> book.genre === "fiction")

 data = Dicstionary.filter((book)=> book.published < 2000)

 console.log(data);

 // in our example we are filtered only fiction books from Dicstionary array of objects using filter method
 // and arrow function. 
 // The filter method creates a new array with all elements that pass the test implemented by the provided function.