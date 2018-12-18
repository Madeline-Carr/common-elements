let i = 0;
let images = [];
let time = 1000;

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
    setTimeout("changeImage()", time);
}

window.onload = changeImage;