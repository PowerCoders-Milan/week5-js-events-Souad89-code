/*Create two buttons, when clicked they will increment or decrease the counter in the p tag.

Once it reaches +10 or -10 show an image below the counter.

You can either create an image element or hide/show an existing image.*/

let i = 0;

document.getElementById("myButton1").addEventListener('click', function () {

    i++; 
    
    document.getElementById('myCount').innerHTML = `Count: ${i}` ;

    if (i == 10) {
        let myImage = document.createElement("IMG");
        myImage.setAttribute("src", "");
        myImage.setAttribute("width", "304");
        myImage.setAttribute("height", "228");
        myImage.setAttribute("alt", "Smile emoji");
        document.body.appendChild(myImage);
    }

})

document.getElementById("myButton2").addEventListener('click', function () {

    i--; 
    
    document.getElementById('myCount').innerHTML = `Count: ${i}` ;

    if (i == -10) {
        let myImage = document.createElement("IMG");
        myImage.setAttribute("src", "");
        myImage.setAttribute("width", "304");
        myImage.setAttribute("height", "228");
        myImage.setAttribute("alt", "Sad emoji");
        document.body.appendChild(myImage);
    }

})

