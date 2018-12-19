let i = 0;
let images = [];
let time = 3000;

//Images
images[0] = "Images/1.jpeg";
images[1] = "Images/2.jpeg";
images[2] = "Images/3.jpeg";

//Change Image
function changeImage() {
    document.slide.src = images[i];
    if (i < images.length - 1) {
        i++;
    }
    else {
        i = 0;
    }
}
//Button to Change Image
let el = document.getElementById("myBtn");
console.log(el);
el.addEventListener("click", changeImage)

//Function to start the Change Image Timer
function changeImageStart() {
    changeImage();
    setTimeout("changeImage()", time);
}
window.onload = changeImageStart;

