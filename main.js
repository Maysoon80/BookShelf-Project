
let shelfs=[],
container = document.getElementById('container');
//This function creates shelf's div and appends it to container
function createShelf(id ){
    let shelf= document.createElement('div'),
       
        clearDiv = document.createElement('div');
        clearDiv.setAttribute('class',"clearfix");
        shelf.setAttribute('class',"shelf");
       shelf.setAttribute('id',id);
       if(shelfs.length>3) {
          container.insertBefore(shelf,container.lastElementChild);
          container.insertBefore(clearDiv,container.lastElementChild);
       }else{
       container.appendChild(shelf);
        container.appendChild(clearDiv);
       }
        shelfs.push(id);
console.log(container.lastElementChild);
}

//This loop create the first four shelfs
for(let i = 1;i <= 3;i++){
    createShelf("shelf"+i);
    }

//Create "New Book" button and append it to container
let myButton = document.createElement('input');
    myButton.setAttribute('type',"button");
    myButton.setAttribute('value',"NEW BOOK");
    myButton.setAttribute('id',"newbookbtn");
container.appendChild(myButton);

let addBookForm= document.createElement('div'),
    formContent= document.createElement('div'),
    formHeader= document.createElement('div'),
    formBody= document.createElement('div'),
    bookForm = document.createElement('form'),
    bookTitle= document.createElement('input'),
    bookTitleLabel = document.createElement('p'),
    bookAuthor = document.createElement('input'),
    bookAuthorLabel= document.createElement('p'),
    bookImage= document.createElement('input'),
    bookImageLabel= document.createElement('p'),
    formFooter= document.createElement('div'),
    addBookBtn= document.createElement('input'),
    closeBtn = document.createElement('input');
    
    formHeader.innerHTML= "NEW BOOK FORM";
    bookTitleLabel.innerHTML="Title";
    bookAuthorLabel.innerHTML="Author";
    bookImageLabel.innerHTML = "Image URL";
    addBookForm.setAttribute('class',"addbookform");
    formContent.setAttribute('class',"formcontent");
    formHeader.setAttribute('class',"formheader");
    formBody.setAttribute('class',"formbody");
    bookForm.setAttribute('class',"bookform");
    bookTitle.setAttribute('type',"text");
    bookAuthor.setAttribute('type',"text");
    bookImage.setAttribute('type',"url");
    formFooter.setAttribute('class',"formfooter");
    addBookBtn.setAttribute('type',"button");
    addBookBtn.setAttribute('value',"Add Book");
    closeBtn.setAttribute('type',"button");
    closeBtn.setAttribute('value',"Close");


    formContent.appendChild(formHeader);
    bookForm.appendChild(bookTitleLabel);
    bookForm.appendChild(bookTitle);
    bookForm.appendChild(bookAuthorLabel);
    bookForm.appendChild(bookAuthor);
    bookForm.appendChild(bookImageLabel);
    bookForm.appendChild(bookImage);
    formBody.appendChild(bookForm);
    formContent.appendChild(formBody);
    formFooter.appendChild(addBookBtn);
    formFooter.appendChild(closeBtn);
    formContent.appendChild(formFooter);
    addBookForm.appendChild(formContent);
    container.appendChild(addBookForm);
    
   

 //create an array of book objects    
let books=[
    {
        title: "Web Design with HTML and CSS",
        author: "Jenifer Smith",
        image:"Book1.jpg"
    },
    {
        title: "HTML & CSS Crash Course",
        author: "David McMahon",
        image:"Book2.jpg"
    },
    {
        title: "Learn C# in One Day and Learn It Well",
        author: "Jamie Chan",
        image:"images/Book3.jpg"
    },
    {
        title: "Web Programming with HTML5, CSS, and JavaScript",
        author: "John Dean",
        image:"Book4.jpg"
    },
    {
        title: "Android programming for beginners",
        author: "John Horton",
        image:"Book5.jpg"
    },
    {
        title: "JavaScript: JavaScript For Beginners",
        author: "Stephen Blumenthal",
        image:"Book6.jpg"
    },
    {
        title: "Learning Web Design : A Beginner’s Guide to HTML, CSS, JavaScript, and Web Graphics",
        author: "Niederst Robbins",
        image:"Book7.jpg"
    },
    {
        title: "Learn Python in One Day and Learn It Well",
        author: "Jamie Chan",
        image:"Book8.jpg"
    },
    {
        title: "Learn CSS in One Day and Learn It Well (Includes HTML5)",
        author: "Jamie Chan",
        image:"Book9.jpg"
    },
    {
        title: "Learn HTML and CSS with w3schools",
        author: "Michael Woodward",
        image:"Book10.jpg"
    },

];



function createBook(imageSrc,titleName,authorName){
    let book = document.createElement('div'),
        title = document.createElement('div'),
        author = document.createElement('div'),
        image = document.createElement('div'),
        bookImage = document.createElement('img');
        title.setAttribute('class',"title");
        author.setAttribute('class',"author"); 
        image.setAttribute('class',"image");

        bookImage.setAttribute('src',imageSrc);
        bookImage.setAttribute('width',"200px");
        bookImage.setAttribute('height',"200px");
        title.innerHTML = titleName;
        author.innerHTML = authorName;
        title.style.textAlign = "center";
        author.style.textAlign = "center";
        image.appendChild(bookImage);
        book.appendChild(image);
        book.appendChild(title);
        book.appendChild(author);
        book.setAttribute('class','book');

        return book;
}
function render(book){
    let done=false,
        currShelf;
    for(let i=0; i<shelfs.length; i++){
         currShelf=document.getElementById(shelfs[i])
        if(currShelf.children.length < 4){
         currShelf.appendChild(book);
         done=true;
         break;
        }
    }
  if(!done){
      let i= shelfs.length + 1;
      createShelf("shelf"+i);
      currShelf = document.getElementById(shelfs[shelfs.length-1]);
      currShelf.appendChild(book);
  } 

}

for(let i=0 ; i<books.length ; i++){
    let newBook = createBook(books[i].image,books[i].title,books[i].author);
    render(newBook);
}


function addToBooksArray(){
    if((bookTitle.value=='') || (bookImage.value=='')){
        alert("Title field and Image field can't be empty");
        return false;
    }else if(bookTitle.value.length>40 || bookAuthor.value.length>30 ){
        alert("The length book's title and the book author's name mustn't be over 40 and 30 char respectivly");
         return false;
    }else{
    books[books.length-1].title=bookTitle.value;
    books[books.length-1].author=bookAuthor.value;
    books[books.length-1].image=bookImage.value;
   return true;
}
 }

   myButton.onclick = function(){
       addBookForm.style.display= "block";
   } 


   closeBtn.onclick = function(){
    addBookForm.style.display= "none";
    
} 
   
addBookBtn.onclick = function(){
    if(addToBooksArray()){
    render(createBook(books[books.length-1].image,books[books.length-1].title,books[books.length-1].author));
}
}
