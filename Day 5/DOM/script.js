//Get element by ID
//var headingElement = document.getElementById("heading");
//console.log(headingElement);

//get elements by class name
//var textElements = document.getElementsByClassName("text")[0];
//console.log(textElements);

//Get element by tag name
//var listItems = document.getElementsByTagName("li");
//console.log(listItems);

//get elements by query selector
//let container = document.querySelector("#container");
//console.log(container);

//get elements by parent node
//var listparent = document.getElementById("list").parentNode;
//console.log(listparent);

//get elements by children node
//var containerChildren = document.getElementById('container').children;
//console.log(containerChildren);

//var containerChildrenNodes = document.getEelementById('container').childNodes;
//console.log(containerChildrenNodes);

//modifying inner HTML
headingElement.innerHTML = "Updated Content";
console.log(headingElement);

//modifying text content
textElements.textContent = "I am a new paragraph";
console.log(textElements);

const button = document.getElementById("btn");
button.addEventListener("click", handleClick);

function handleClick(event) {
    console.log("Button cicked");
}

