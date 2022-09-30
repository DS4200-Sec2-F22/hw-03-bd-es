// JS Code for HW3
// Brady Duncan and Evan Suslovich
// Last Modified: 09/28/2022

// create a function for when the first button is clicked
//can we make this an abstract function?
function marksButton1Clicked() {
    let newText = 'Marks: Area, Channels: Color (Hue)';

    document.getElementById('marks1').innerHTML = newText;
}

// add event handler for the marks and channels button
//if we have an abstract funciton, this can get getElementByClass and have it be all buttons
document.getElementById('marks_button1').addEventListener('click', marksButton1Clicked)