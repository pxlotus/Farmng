//decided to create a whole function, instead of calling each separate function alone.
function Box() {
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("more");
    var span = document.getElementsByClassName("close")[0];
        
    btn.onclick = function() {
        modal.style.display = "block";
    }
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal){
            modal.style.display ="none";
        }
    }

}
Box();


var slideShow = 1;
showSlide();

function  showSlide() {
    var i;
    var image = document.getElementsByClassName("tec-pix");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < image.length; i++) {
        image[i].style.display = "none";
    }
    slideShow++;
    if (slideShow > image.length){slideShow = 1}
    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }

    image[slideShow - 1].style.display ="block";
    dots[slideShow - 1 ].className += " active";
    setTimeout(showSlide, 8000);
}

