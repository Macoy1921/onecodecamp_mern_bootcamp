headingEelement = document.getElementById('heading');
var heading = document.getElementById('heading');
console.log(headingEelement);


//Get element by class name
//var textElements = document.getElementsByClassName('text');
//console.log(textElements);


//Get element by tag name
//var listItems = document.getElementsByTagName('li');
//console.log(listItems);


//Get element by query selector
//var parentList = document.querySelector('#parentList');
//console.log(parentList);


//var containerChildren = document.querySelector('#container').children;
//console.log(containerChildren);


// modifying elements
var textElements = document.querySelector(".text");
textElements.textContent = "I am a new paragraph";
console.log(textElements);