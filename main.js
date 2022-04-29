console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
//const node1 = document.getElementById('node1');
//node1.textContent = "I used the getElementById('node1') method to access this.";

// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */

const node2 = document.getElementsByClassName('node2');
node2[0].textContent = "I used the getElementsByClassName('node2') method to access this.";

// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
const h3N = document.getElementsByTagName('h3');
for (let node of h3N) {
   node.textContent = "BY TAG NAME"
};

/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"

const newP = document.createElement("p");
newP.textContent = "I am a p element";


// TODO: Append the created node to the parent node using the element.appendChild() method

const parent = document.getElementById("parent");
parent.appendChild(newP);


// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"

const small = document.createTextNode("small");
small.textContent = "I am small";

// BONUS: Add a link href to the <a>


// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method

parent.insertBefore(small, newP);

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"

const newN = document.createElement("p");
newN.textContent = "New Child Node";
const oldNode= document.getElementById("oldNode");
const ex =document.getElementById("exercise3");
ex.replaceChild(newN, oldNode);


// TODO: Remove the "New Child Node"

//ex.removeChild(newN);

/*----------- Exercise #4: ANIMATIONS ----------- */
// TODO: Write your JavaScript here to make the red box go from left to right

//let timer = setInterval(move, 100);
//let boxPosition = 0;
let box = document.getElementById("box");

//function move() {
    //if (boxPosition >= 150) {
         
        //clearInterval(timer);
    //} else {
        //boxPosition += 1;
       // box.style.left = boxPosition + "px";
   // }
//}
/*
let x = 0;
let y = 0;

function move () {
    x++;
    if (x >= 150) {
        y++;
        if (y >= 150) {
            clearInterval(interval);
        } else  {
            box.style.top = y + "px";
        }
    } else {
        box.style.left = x + "px";
    }
}
*/

//let interval = setInterval(move, 10);

//let interval = setInterval(move, 10);


// BONUS - Make the red box go all the way around the perimeter of the green box


/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality

const btn = document.getElementById("btn");
//btn.addEventListener("click", function() {
  // node1.style.backgroundColor = "blue";
//});
function randomRGB() {
    return Math.floor(Math.random() * 256); //0-255
}
btn.addEventListener("click", function () {
    node1.style.color = `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`;
});

//(red, green, blue)
//(0-255, 0-255, 0-255)
//(0,0,0); black 
//(255, 255, 255); white

//hex vaule 
//= #000000 = Black
//FFFFFF = White
//16 vaule 0-9 and A-F
//also any vaule you can put together with 0123456789abcdef

//<p id="node1">Node #1</p> (put back for ex1)

const bttn = document.getElementById("bttn")
const input = document.getElementById("input");
const feedback = document.getElementById("feedback");

bttn.addEventListener("keyup", function () { 
     feedback.textContent = input.value;
});

