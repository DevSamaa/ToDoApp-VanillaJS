// This is the close button
let closeButton = document.getElementsByClassName("close");

// This creates the todo function.
function createNewElement(){
  // html
  // <li></li>
  let li = document.createElement('li');
  // selecting an element
  let theInputValue = document.getElementById("the-input").value;
  let textNode = document.createTextNode(theInputValue);
  li.appendChild(textNode);
  // li.innerText = theInputValue

  if(theInputValue === ''){
    alert("Hey this cannot be empty")
  } else {
    document.getElementById("the-ul").appendChild(li);
  }

    document.getElementById("the-input").value ="";

    let theSpanTag = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    theSpanTag.className = "close";
    theSpanTag.appendChild(txt);
    li.appendChild(theSpanTag);

    // Removing items when you click on SPAN CLOSE BUTTON
    for(i =0; i< closeButton.length; i++){
      closeButton[i].onclick = function(){
        let theDiv = this.parentElement;
        theDiv.style.display = "none";
      }
    }
}

// Check list items that you've completed.
let ulList = document.querySelector('ul');
ulList.addEventListener('click', function(event){
  if(event.target.tagName === "LI"){
    event.target.classList.toggle('checked')
  }
})