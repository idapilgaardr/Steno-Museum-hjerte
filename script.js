// Pop-up i browseren for at sikre, at der er forbindelse mellem HTML-dokument og JS-filen
//alert("Hey, der er forbindelse");

/*************************************************************************/
/*** JavaScript til startskærm med og uden overlay og pulserende tekst ***/
/*************************************************************************/

// VARIABLER
// Henter HTML-elementer med følgende id'er:
const dark_overlay = document.getElementById("dark-overlay");
const main_title = document.getElementById("main-title");

const guide_tekst = document.getElementById("guide-tekst");

const swipe_gesture = document.getElementById("swipe-gesture");

const hjerte_model = document.getElementById("hjerte-model");

// EventListener: Når man klikker (hvor som helst) på startskærmen, skal det sorte overlay forsvinde og teksten mindskes
// Vi laver et event, som sørger for at sætte funktionen i gang, når man interagerer med skærmen ved et klik
window.onclick = fjernOverlay

function fjernOverlay() {
    dark_overlay.style.opacity = "0";
    // Når "dark_overlay"'s transition er afsluttet, vil funktionen blive kørt (Kilde til forståelse: https://developer.mozilla.org/en-US/docs/Web/API/Element/transitionend_event)
    dark_overlay.addEventListener('transitionend', function() { 
        // Fjern overlayet efter overgangen er færdig 
        dark_overlay.style.display = "none"; 
        // Vis swipe-gesturen - opacity er sat til 50% så ikonet ikke er helt sort
        swipe_gesture.style.opacity = 0.5; 
        // Swipe gesturen skal køre med en varighed på 2s, 0.8 omgange (Kilde: https://www.w3schools.com/css/css3_animations.asp)
        swipe_gesture.style.animation = "swipe 2s 0.8";
    });

    swipe_gesture.addEventListener('animationend', function () {
        //Når CSS-animationen på swipe-gesture-ikoner er færdig, bliver ikonet skjult igen
        swipe_gesture.style.display = "none";
    })

    // CSS-egenskaber for main-title bliver opdateret, så teksten bliver mindre og placerer sig i toppen  
    main_title.style.top = "30px";
    main_title.style.fontSize = "1.5em";
    // Titlen skal ikke længere pulsere
    main_title.style.animation = "none";
    // Fjerner den lille tekst "Tryk på skærmen", som kun skal vises, når overlayet også vises
    guide_tekst.style.display = "none";
}

// ------ UDKOMMENTERET KODE SOM IKKE VIRKEDE ------ //
/* Koden skulle fjerne den lille swipe_gesture, når man interagerede med hjerte_model, men som ikke gav det ønskede resultat:
hjerte_model.addEventListener("touchstart", function () {
    swipe_gesture.style.display = "none";
});

// Forsøg nummer 2: Når man klikker på "hjerte-model", skal swipe-gesture forsvinde igen:
hjerte_model.contentWindow.document.body.addEventListener("onclick", function() {
    swipe_gesture.style.display = "none";
}); */

/*
// Variabler
const leftArrow = document.getElementById('venstrePil');
const rightArrow = document.getElementById('hoejrePil');
const situationer = document.getElementById('situationer');
const aldre = document.getElementById('aldre');

// Event listeners for pilene
leftArrow.addEventListener('click', function() {
    toggleSections(situationer, aldre);
});

rightArrow.addEventListener('click', function() {
    toggleSections(aldre, situationer);
});

// Funktion til at skifte mellem sektioner
function toggleSections(showSection, hideSection) {
    hideSection.classList.add('hide'); // Tilføj hide klassen til den sektion, der skal skjules
    hideSection.classList.remove('show'); // Fjern show klassen fra den skjulte sektion (hvis den er der)
    
    showSection.classList.remove('hide'); // Fjern hide klassen fra den sektion, der skal vises
    showSection.classList.add('show'); // Tilføj show klassen til den sektion, der skal vises
}
*/


/****************************************************************/
/*** JavaScript til side med pulsen i forskellige situationer ***/
/****************************************************************/

// VARIABLER 
// Henter HTML-elementer med følgende id'er:
// Henviser til video-elementet af bankende hjerte
const puls_video = document.getElementById("puls-video"); 
// Henviser til paragraf-elementet, som vises under videoen
const slag_pr_minut = document.getElementById("slag-pr-minut"); 

/* Frem for at lave en variabel til hver enkelt knap, tilføjer vi en eventlistener direkte til elementet, som lytter efter et klik på knapperne med hver deres unikke id og starter følgende funktion. Dette gentager sig for alle knapper på siden */
document.getElementById('stress-btn').addEventListener('click', function() {
    // Starter afspilning af video med bankende hjerte på side med hjertets rytme i forskellige situationer
    puls_video.play();
    // Sørger for, at videon på side med hjertets rytme i forskellige livsstadier ikke afspiller
    puls_video_2.pause();
    // Afspilningshastigheden for 'puls_video' skal være 1.6 gange normal hastighed
    puls_video.playbackRate = 1.6;
    // Med innerHTML tilføjer vi tekst-indhold til den ellers tomme paragraf med id "slag-pr-minut"
    slag_pr_minut.innerHTML = "Når man er stresset, kan hjertet slå op mod<br>160 slag pr minut"
});

document.getElementById('sovn-btn').addEventListener('click', function() {
    puls_video.play();
    puls_video_2.pause();
    puls_video.playbackRate = 0.5;
    slag_pr_minut.innerHTML = "Når kroppen sover, ligger pulsen normalt<br>omkring 50 slag pr minut"
});

document.getElementById('motion-btn').addEventListener('click', function() {
    puls_video.play();
    puls_video_2.pause();
    puls_video.playbackRate = 2;
    slag_pr_minut.innerHTML = "Når man dyrker motion, kan pulsen komme<br>op til 200 slag pr minut"
});

document.getElementById('hvile-btn').addEventListener('click', function() {
    puls_video.play();
    puls_video_2.pause();
    puls_video.playbackRate = 1;
    slag_pr_minut.innerHTML = "Den normale hvilepuls for en voksen<br> ligger mellem 60 og 100 slag pr minut"
});

document.getElementById('koffein-btn').addEventListener('click', function() { 
    puls_video.play();
    puls_video_2.pause();
    puls_video.playbackRate = 1.4;
    slag_pr_minut.innerHTML = "Når man indtager koffein, kan pulsen<br>stiger med mellem 5 til 20 slag pr minut"
});


/****************************************************************/
/*** JavaScript til side med pulsen i forskellige livsstadier ***/
/****************************************************************/

const puls_video_2 = document.getElementById("puls-video-2");
const slag_pr_minut_2 = document.getElementById("slag-pr-minut-2");

document.getElementById('spadbarn-btn').addEventListener('click', function() {
    /*alert("er der forbindelse?"); - vi kunne ikke få funktionen til at virke, så vi testede forbindelsen med en pop-up og der var forbindelse*/
    // Starter afspilning af video med bankende hjerte på side med hjertets rytme i forskellige livsstadier
    puls_video_2.play();
    // Sørger for, at videon på side med hjertets rytme i forskellige situationer ikke afspiller
    puls_video.pause();
    puls_video_2.playbackRate = 2;
    slag_pr_minut_2.innerHTML = "Et spædbarn har i gennemsnit en hvilepuls<br>150 slag pr minut"
});

document.getElementById('born-btn').addEventListener('click', function() {
    puls_video_2.play();
    puls_video.pause();
    puls_video_2.playbackRate = 1.5;
    slag_pr_minut_2.innerHTML = "Når man er barn, ligger hvilepulsen<br>70-115 slag pr minut"
});

document.getElementById('voksen-btn').addEventListener('click', function() {
    puls_video_2.play();
    puls_video.pause();
    puls_video_2.playbackRate = 1;
    slag_pr_minut_2.innerHTML = "Som voksen ligger ens hvilepuls<br>mellem 60 og 100 slag pr minut"
});

document.getElementById('senior-btn').addEventListener('click', function() {
    puls_video_2.play();
    puls_video.pause();
    puls_video_2.playbackRate = 0.7;
    slag_pr_minut_2.innerHTML = "For ældre ligger hvilepulsen normalt<br>58 og 98 slag pr minut"
});

document.getElementById('elite-btn').addEventListener('click', function() { 
    puls_video_2.play();
    puls_video.pause();
    puls_video_2.playbackRate = 0.5;
    slag_pr_minut_2.innerHTML = "Elitesportsudøvere kan have en hvilepuls<br>helt ned til mellem 40 til 60 slag pr minut"
});


//Der er ikke nogen aktive knapper på det tidspunkt, hvor koden kører:
let activeButton = null;

// VARIABLER
// Henter alle knapper med class "hjerterytme-btn" og laver en fælles variabel kaldet puls_buttons
const puls_buttons = document.querySelectorAll('.hjerterytme-btn'); 

// Funktion til at håndtere knap klik
function handleButtonClick(btn) {
    let activeButton = document.querySelector('.active'); // Vi bruger document.querySelector('.active') for at finde den knap, der i forvejen har 'active' class

    // Hvis en knap allerede er blevet klikket på og har fået "active" class, skal "active"-class fjernes fra den knap
    if (activeButton) {
        activeButton.classList.remove('active');
        activeButton.style.backgroundColor = ""; // Opdater baggrundsfarve for den aktive knap
    }

    // Den knap, som klikkes på, får tilføjet "active" class
    btn.classList.add('active');
    btn.style.backgroundColor = "#811F25"; // Når en knap er aktiv, dvs. har fået class "active", skal baggrundsfarven ændres fra gennemsigtig til en mørk rød
    
}

// Vi tilføjer en eventlistener til hver knap i puls_buttons, som starter funktionen "handleButtonClick"
puls_buttons.forEach(function(btn) { 
    btn.addEventListener('click', function() {
        handleButtonClick(btn);
    });
});

// Kilde: For at lave denne kode, brugte vi ChatGPT og ligeledes hjælp fra ChatGPT til at forklare det, vi ikke kunne gennemskue på egen hånd 


/************************************************************************************/
/*** JavaScript til slidefunktion: gå frem og tilbage mellem to forskellige sider ***/
/************************************************************************************/

// Variabel, der holder styr på det aktuelle slide-nummer, som starter fra 0
let slideIndex = 0;
showSlides(slideIndex); // Vis det første slide ved opstart

// Funktion til at navigere til næste eller forrige slide
function plusSlides(n) { 
    // Opdaterer slideIndex med n og vis det nye slide
  showSlides(slideIndex += n);
}

// Funktion til at gå direkte til et specifikt slide
function currentSlide(n) {
    // Opdaterer slideIndex til n og vis det valgte slide
  showSlides(slideIndex = n);
}

// Funktion til at vise slides baseret på slideIndex
function showSlides(n) {
  let i;
  // Henter alle slides med klassen "mySlides"
  let slides = document.getElementsByClassName("mySlides");
  // Henter alle "dots" eller punkter, der repræsenterer slides
  let dots = document.getElementsByClassName("dot");

  // Hvis n er større end antallet af slides, skal første slide vises
  if (n > slides.length) {slideIndex = 1}  
  // Hvis n er mindre end 1, skal sidste slide vises   
  if (n < 1) {slideIndex = slides.length}

  // Skjuler alle slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    // Går man til den anden side med knapper og pulserende hjerte, skal videoen på den modsatte side, ikke afspilles længere
    puls_video_2.pause();
    puls_video.pause();
  }

  // Sørger for, at det kun er dotten, som hører til den aktuelle side, som er fremhævet 
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// Kilde: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow + ChatGPT til at forstå koden
