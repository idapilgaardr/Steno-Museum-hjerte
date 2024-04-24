// Pop-up i browseren for at sikre, at der er forbindelse mellem HTML-dokument og JS-filen
//alert("Hey, der er forbindelse");

/*******************************************************************************************************************/
/*** JavaScript til side med hjertets anatomi: forloop som kører gennem de forskellige navne på hjertets anatomi ***/
/*******************************************************************************************************************/

// VARIABLER
const kasse1 = document.getElementById("kasse1");
const kasse2 = document.getElementById("kasse2");
const kasse3 = document.getElementById("kasse3");
const kasse4 = document.getElementById("kasse4");
const kasse5 = document.getElementById("kasse5");
const kasse6 = document.getElementById("kasse6");

// Opret et array med de tre ovenstående variable
const kasser = [kasse1, kasse2, kasse3, kasse4, kasse5, kasse6];

/* Her kommer for-loopet!! */
for(i = 0; i < kasser.length ;i++){
    kasser[i].style.animationName = "fadeIn";
    // Man kan halvere tallet ved at dividere, og på den måde gøre delayet hurtigere:
    kasser[i].style.animationDelay = i/2 + "s";
}

/*************************************************************************************/
/*** JavaScript til slidefunktion: gå frem og tilbage mellem tre forskellige sider ***/
/*************************************************************************************/

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

/* Kilde: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow + ChatGPT til at forstå koden (vi har tilføjet kommentarer ved koden i script.js) */
