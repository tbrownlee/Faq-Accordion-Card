"use strict"

/* These elements are required to make the changes needed */
let questionAndArrow = document.querySelectorAll(".question-and-arrow-container");
let question = document.querySelectorAll(".question");
let description = document.querySelectorAll("p");
let arrow = document.querySelectorAll(".arrow");
let box = document.getElementById("box");


/* Adds the onclick function for each .question-and-arrow-container element */
for (let i = 0; i < questionAndArrow.length; i++) {
    questionAndArrow[i].onclick = function () {
        if (checkIfAlreadyToggled() == i) {
            toggle(i);
        } else {
            untoggle();
            toggle(i);
        }
    }
}



/* Toggles classes: Moves the box, displays the p element, changes h2 color, rotates the arrow */
function toggle(i) {
    question[i].classList.toggle("change-color");
    description[i].classList.toggle("show");
    arrow[i].classList.toggle("rotate");
    box.classList.toggle("move-box");
}

/* Untoggles all elements that are already toggled */
function untoggle() {
    for (let i = 0; i < questionAndArrow.length; i++) {
        if (question[i].classList.contains("change-color")) {
            toggle(i);
        }
    }
}

/* This function returns the number to indicate which dropdown is currently toggled */
function checkIfAlreadyToggled() {
    let result = -1
    for (let i = 0; i < questionAndArrow.length; i++) {
        if (question[i].classList.contains("change-color")) {
            result = i;
        }
    }
    return result;
}







/* 
Instead of using the animation property and a keyframe to make the .description (p element) open slowly, put this in toggle(i) after the second line.


    let id = null;
    let pos = 0;
    clearInterval(id); 
    id = setInterval(frame, 10);
    function frame() {
        if (pos == 50) {
            clearInterval(id);
        } else {
            pos++;
            description[i].style.height = pos + "px";
        }
    }




**To make this go faster, increase pos. Ex: pos+= 5; 
*/