/*Write a JavaScript program to get the width and height of the window (any time the window is resized).

Then write the sizes in the p element in a nice format ("The window is x pixels" or similar).*/

function getSize()
{
let myWidth = document.documentElement.clientWidth;
let myHieght = document.documentElement.clientHeight;
document.getElementById('screenSize').innerHTML = `My screen width is ${myWidth} and its height is ${myHieght}` ;
}