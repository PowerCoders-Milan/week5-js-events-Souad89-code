/*# Bold on hover

Write a JavaScript program to change the color of the bold words when the user hovers the link.*/

let a = document.querySelector('a');
let p = document.querySelector('p');
let strongs = document.querySelectorAll('strong');
a.addEventListener('mouseover', function () {
    strongs.forEach(function (strong) {
        strong.style.color = "red";  
    });
})

/*## EXTRA (to do when everything is finished)

Make the color random for each bold word when the user hovers.*/
