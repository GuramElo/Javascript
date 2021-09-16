var Books = [ 
    {
        author: 'Bill',
        title: 'The Road Ahead',
        haveRead: true,
        dateOfRead: new Date(2020, 10, 10),
        daysAgo:{
            get: function(t) {
               var td= new Date();
               var kt = new Date(`${td.getMonth()+1}`+`/`+`${td.getDate()}`+`/`+`${td.getFullYear()}`);
              
               return Math.floor((kt-t)/3600000);
                
               }}
    },
    {
        author: 'Steve',
        title: 'Walter Isaacson',
        haveRead: true,
        dateOfRead: new Date(2020, 10, 5),
        daysAgo:{
            get: function(t) {
               var td= new Date();
               var kt = new Date(`${td.getMonth()+1}`+`/`+`${td.getDate()}`+`/`+`${td.getFullYear()}`);
              
               return Math.floor((kt-t)/3600000);
                
               }}
    },
    {
        author: 'Jhon',
        title:  'The Hunger Games', 
        haveRead: false,
        dateOfRead: NaN,
        daysAgo:{
            get: function(t) {
               var td= new Date();
               var kt = new Date(`${td.getMonth()+1}`+`/`+`${td.getDate()}`+`/`+`${td.getFullYear()}`);
            
               return Math.floor((kt-t)/3600000);
                
               }}
    }
 ];
 function readingStatus(books){
    for(let a=0;a<books.length;a++){
        console.log(books[a].author + `${books[a].haveRead ? " has read ":" hasn't read "}` + `${books[a].title}` + `${books[a].haveRead ? " "+books[a].daysAgo.get(books[a].dateOfRead)+" days ago":" yet"}`);
//console.log(books[a].daysAgo.get(books[a].dateOfRead));

//========

 }}
 readingStatus(Books);

