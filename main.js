// JS Code for HW3
// Brady Duncan and Evan Suslovich
// Last Modified: 09/28/2022

// create a function for when the first button is clicked
//can we make this an abstract function?
function marksButtonClicked1() {
    let newText = 'Marks: Area, Channels: Color (Hue)';
    
    document.getElementById('marks_button1').classList.toggle("collapse");
    document.getElementById("marks1").classList.add("marks1Visible");
    
    
}



function colorMapsButtonClicked1() {
    
    document.getElementById('colormap_button1').classList.toggle("collapse");
    document.getElementById("colormaps1").classList.add("colorMaps1Visible");

    
}


function marksButtonClicked2() {
    
    document.getElementById('marks_button2').classList.toggle("collapse");
    document.getElementById("marks2").classList.add("marks2Visible");

    
}


function colorMapsButtonClicked2() {
    
    document.getElementById('colormap_button2').classList.toggle("collapse");
    document.getElementById("colormaps2").classList.add("colorMaps2Visible");

    
}




document.getElementById('marks_button1').addEventListener('click', marksButtonClicked1)
document.getElementById('colormap_button1').addEventListener('click', colorMapsButtonClicked1)
document.getElementById('marks_button2').addEventListener('click', marksButtonClicked2)
document.getElementById('colormap_button2').addEventListener('click', colorMapsButtonClicked2)
