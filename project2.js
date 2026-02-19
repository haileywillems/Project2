let books = [
    "The Great Gatspy",
    "Sons and Lovers",
    "To Kill a Mocking Bird",
    "Pride and Prejudice"
]

const bookshelf = document.getElementById("bookshelf")
const bookInput = document.getElementById("bookInput")

function updateBookshelf(){
    if(books.length == 0){
        bookshelf.innerHTML = "No Books on the Shelf"
    } else{
        bookshelf.innerHTML = `<b>Front of Shelf</b>`
        for(let i=0; i<books.length; i++){
        bookshelf.innerHTML += `<li>${books[i]}</li>`
        }
        bookshelf.innerHTML += `<b>End of Shelf</b>`
    }
}
updateBookshelf()


function addToFront(){
    books.unshift(bookInput.value)
    updateBookshelf();
}
function addToEnd(){
    books.push(bookInput.value)
    updateBookshelf()
}
function removeFromEnd(){
    books.pop()
    updateBookshelf()
}
function removeFromFront(){
    books.shift(1)
    updateBookshelf()
}
