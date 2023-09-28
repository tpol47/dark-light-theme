//this is our js code that connects to the html file

const element = document.querySelector('.first-div')
element.innerText = 'this is new text for the div. Hello!!!!!'

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }