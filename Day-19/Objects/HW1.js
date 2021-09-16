var Books = [ 
    {
        author: 'Bill',
        title: 'The Road Ahead',
        haveRead: true,
        dateOfRead: new Date(2020, 10, 10)
    },
    {
        author: 'Steve',
        title: 'Walter Isaacson',
        haveRead: true,
        dateOfRead: new Date(2020, 10, 5)
    },
    {
        author: 'Jhon',
        title:  'The Hunger Games', 
        haveRead: false,
        dateOfRead: NaN
    }
 ];
 function readingStatus(books){
    for(let a=0;a<books.length;a++){
        console.log(books[a].author + `${books[a].haveRead ? " has read ":" hasn't read "}` + `${books[a].title}` + `${books[a].haveRead ? "":" yet"}`);}
        
    return;
 }
 readingStatus(Books);