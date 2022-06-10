const addBook = document.getElementById('addBook');
const containerMain = document.getElementById('containerMain');
const placeHolder = document.createElement('div')
const bookshelf= document.getElementById('bookshelf')
let blankDiv = document.createElement('div')


const popUpWindow = document.createRange().createContextualFragment(`
<div id="inputWindow">
<div>
    <div id="close"><img src="images/close(600wg).svg"></div>
</div>
<form>
    <fieldset>
        <div class="labelAndForms">
            <label for="bookName">Book name:</label>
            <input type="text" id="bookName" name="bookName" maxlength="30" pattern="([a-zA-Z]){1,30}">
        </div>
        <div class="labelAndForms">
            <label for="bookAuthor">Author Name:</label>
            <input type="text" id="bookAuthor" name="bookAuthor" maxlength="30" pattern="([a-zA-Z]){1,30}">
            
        </div>
        <div class="labelAndForms">
            <label for="numPages">Number of pages:</label>
            <input type="tel" id="numPages" name="numPages"maxlength="6" pattern="([0-9]){1,6}">
        </div>
    </fieldset>
    <fieldset id="radioButtons">
        <div>
            <label class="container"for="no">No
                <input type="radio" id="no" name="read" value="Not read"checked>
                <span class="radio"></span>
            </label>
        </div>
        <div>
            <label for="yes">Yes
                <input type="radio" id="yes" name="read" value="Read">
                <span class="radio"></span>
            </label>
        </div>
    </fieldset>
    <div>
        <button type="button" id="submitButton" >Submit</button>
    </div>
</form>
</div>`

)



function closePopUp(){
   containerMain.removeChild(blankDiv)
}

class Book{

    constructor(bookName,author,pages,statusOfReading ){
        this.bookName= bookName;
        this.author = author;
        this.pages = pages;
        this.statusOfReading = statusOfReading
    }

    createBook(){
        let newBook = document.createRange().createContextualFragment(`
        <div class="book">
            <img src="images/close(600wg).svg" id="removeBook">
            <h3 id="title"></h3>
            <h4 id="author"></h4>
            <h5 id="numpages"></h5>
            <h5 id="read"></h5>
        </div>`)
    
        bookshelf.prepend(newBook);
       
        this.title = document.getElementById('title');
        this.authorName = document.getElementById('author');
        this.numpages = document.getElementById('numpages');
        this.read = document.getElementById('read');
    
        this.title.textContent = `${bookName}`;
        this.authorName.textContent=`${author}`;
        this.numpages.textContent=`${pages} pages`;
        this.read.textContent=`${statusOfReading}`;
    
        const removeBook = document.getElementById('removeBook')
        removeBook.addEventListener('click', (e) =>{
            e.target.parentElement.remove()
        })
    }

}
function takeValue(){
    pages = document.getElementById('numPages').value;
    bookName = document.getElementById('bookName').value;
    author = document.getElementById('bookAuthor').value;
    statusOfReading = document.querySelector('input[name="read"]:checked').value;
    containerMain.removeChild(blankDiv)
    let book = new Book(pages, bookName, author, statusOfReading);
    book.createBook()
}



function showPopUp(){
    
    blankDiv.setAttribute('id', "justPlaceHolder");
    containerMain.appendChild(blankDiv);
    blankDiv.appendChild(popUpWindow);
    let closeButton = document.getElementById('close');
    closeButton.addEventListener('click', closePopUp);
    let submitButton = document.getElementById('submitButton');
    submitButton.addEventListener('click', takeValue)
   
}





addBook.addEventListener('click', showPopUp)

