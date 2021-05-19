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

const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    //toggle Nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) =>{
            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 1}s`
            }
        });
        burger.classList.toggle('toggle');
    });
} 

navSlide();
