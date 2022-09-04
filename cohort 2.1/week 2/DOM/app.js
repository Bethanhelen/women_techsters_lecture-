// let titles = document.getElementsByClassName("title");
// console.log(titles);

// //  to check if its an array
// console.log(Array.isArray(titles));

// // to convert to an array
// console.log(Array.isArray(Array.from(titles)));

// Array.from(titles).forEach(function(item) {
//     console.log(item);
// })


// // using a querySelector to grab any element
// var sapiens = document.querySelector("#wrapper li:nth-child(2) .name");
// console.log("wrap", sapiens);

// // using a querySelector to grab any element and change the html
// var sapiens = document.querySelector("#wrapper li:nth-child(2) .name").innerHTML = "<p> Hello </p>";
// console.log("wrap", sapiens);

// // to target the first class name in the li
// var books = document.querySelector("#book-list li .name");
// console.log(books);

// to target all the class name in the li
//     var books = document.querySelectorAll("#book-list li .name");
// console.log(books);

// // to use a for-loop to independently show the tags
//     var books = document.querySelectorAll("#book-list li .name");
//     books.forEach(function(book) {
//         // console.log(book)
//         // book.textContent = "Nice read"
//         book.textContent += " (book title)"
//     })

// to change innerHTML
// const bookList = document.querySelector("#book-list");
// // bookList.innerHTML = "<h2> Books...Books...Books </h2>"
// // bookList.innerHTML += "<p> This is append </p>"

//     const tryTex = "This is dynamic"
//     bookList.innerHTML += `<p> This is append </p>`

// // to check the page banner for node type or name of node
// const banner = document.querySelector("#page-banner")
// console.log("Page Banner node type is: ", banner.nodeType);
// console.log("Page Banner node type is: ", banner.nodeName);
// console.log("Page Banner has child nodes: ", banner.hasChildNodes());
// const clonedBanner = banner.cloneNode(true)
// console.log("cloned banner", clonedBanner);

// // to know the entire details of a particular div to know the parent divs
// const bookList = document.querySelector("#book-list");
// console.log("The parent node is : ", bookList.parentNode);
// console.log("The parent node is : ", bookList.parentElement.parentElement);

// // to know the entire details of a particular div to know the children divs
// const bookList = document.querySelector("#book-list");
// // console.log(bookList.childNodes);
// // console.log(bookList.children);
// // console.log("Booklist next siblings: ", bookList.nextElementSibling);
// console.log("Booklist previous siblings: ", bookList.previousElementSibling);
// bookList.previousElementSibling.querySelector('p').innerHTML += "<br> Roockstars too cool for everyone else"

// to add an event listener to buttons
var btns = document.querySelectorAll("#book-list .delete");
btns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        const li = e.target.parentElement
        li.parentNode.removeChild(li)
    })
})