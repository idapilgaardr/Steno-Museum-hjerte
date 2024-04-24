// Pop-up i browseren for at sikre, at der er forbindelse mellem HTML-dokument og JS-filen
//alert("Hey, der er forbindelse");

/*************************************************************/
/*** JavaScript til side med videoer om blodprop i hjertet ***/
/*************************************************************/

// VARIABLER
// Knapper fra HTML laves til variabler: 
const heine_video = document.getElementById("heine-video");
const operation_video = document.getElementById("operation-video");

const play_heine_video = document.getElementById("play-heine-video");
const play_operation_video = document.getElementById("play-operation-video");

const luk_fullscreen_button_heine = document.getElementById("luk-fullscreen-heine");
const luk_fullscreen_button_operation = document.getElementById("luk-fullscreen-operation");

const progress_bar_heine = document.getElementById("progress-bar-heine");
const progress_bar_operation = document.getElementById("progress-bar-operation");

const hjem_knap = document.getElementById("hjem-knap");


// Eventlistener, som starter function openFullscreenAndPlayHeine, når man trykker på "PLAY"-knappen på videoen til venstre:
play_heine_video.onclick = openFullscreenAndPlayHeine;

// Eventlistener, som starter function openFullscreenAndPlayOperation, når man trykker på "PLAY"-knappen på videoen til højre:
play_operation_video.onclick = openFullscreenAndPlayOperation;

// Eventlistener, som starter function lukFullscreen, når man trykker på "X'et i højre hjørne:
luk_fullscreen_button_heine.onclick = lukFullscreenHeine;

// Eventlistener, som starter function lukFullscreen, når man trykker på "X'et i højre hjørne:
luk_fullscreen_button_operation.onclick = lukFullscreenOperation;

// Vi laver en funktion, som sørger for, at operations-videoen bliver stor skærm og afspilles når man trykket på play-knappen
function openFullscreenAndPlayHeine() {
    heine_video.play(); // Start afspilning

    heine_video.style.position = "fixed";
    heine_video.style.top = "0";
    heine_video.style.left = "0";
    heine_video.style.width = "100vw"; // sørger for at videoen fylder hele skærmen ud
    heine_video.style.height = "100vh"; // sørger for at videoen fylder hele skærmen ud
    heine_video.style.zIndex = "50"; // sørger for at lægger sig oven på alt andet indhold på siden

    luk_fullscreen_button_heine.style.display = "block";
    progress_bar_heine.style.display = "block";
    hjem_knap.style.display = "none";
}

// Vi laver en funktion, som sørger for, at heine-videoen lukkes/bliver lille igen, når man trykket på luk-knappen i højre hjørne
function lukFullscreenHeine() {
    heine_video.pause(); // Start afspilning
    heine_video.currentTime = 0; // Sætter videoens starttid tilbage til start (0 sekunder)

    heine_video.style.position = "";
    heine_video.style.top = "";
    heine_video.style.left = "";
    heine_video.style.width = ""; 
    heine_video.style.height = "auto"; // Når bredden er indstillet, bliver højden automatisk tilpasset
    heine_video.style.zIndex = ""; 

    luk_fullscreen_button_heine.style.display = "none"; // Når videoen ikke er i fuldskærm, skal luk-knappen skjules
    progress_bar_heine.style.display = "none"; // Når videoen ikke er i fuldskærm, skal progress-baren skjules
    hjem_knap.style.display = "";
}

/* Koden ovenfor har vi selv fundet frem til. Først havde vi brugt "requestFullscreen", som chatGPT foreslog, men på den måde kunne vi ikke tilføje en lukknap i hjørnet */

heine_video.addEventListener("timeupdate", updateProgressHeine);

function updateProgressHeine() {
    const currentTime = heine_video.currentTime;
    const duration = heine_video.duration;

    if (duration > 0) {
        progress_bar_heine.value = (currentTime / duration) * 100;
    }
}

// Vi laver en funktion, som sørger for, at operations-videoen bliver stor skærm og afspilles når man trykket på play-knappen
function openFullscreenAndPlayOperation() {
    operation_video.play(); // Start afspilning

    operation_video.style.position = "fixed";
    operation_video.style.top = "0";
    operation_video.style.left = "0";
    operation_video.style.width = "100vw"; // sørger for at videoen fylder hele skærmen ud
    operation_video.style.height = "100vh"; // sørger for at videoen fylder hele skærmen ud
    operation_video.style.zIndex = "50"; // sørger for at lægger sig oven på alt andet indhold på siden

    luk_fullscreen_button_operation.style.display = "block";
    progress_bar_operation.style.display = "block"; 
    hjem_knap.style.display = "none";
}

// Vi laver en funktion, som sørger for, at operations-videoen lukkes/bliver lille igen, når man trykket på luk-knappen i højre hjørne
function lukFullscreenOperation() {
    operation_video.pause(); // Start afspilning
    operation_video.currentTime = 0; // Sætter videoens starttid tilbage til start (0 sekunder)

    operation_video.style.position = "";
    operation_video.style.top = "";
    operation_video.style.left = "";
    operation_video.style.width = "";
    operation_video.style.height = "auto"; // Når bredden er indstillet, bliver højden automatisk tilpasset
    operation_video.style.zIndex = ""; // Videoen skal sættes til dens normale indeks, når videon lukkes igen

    luk_fullscreen_button_operation.style.display = "none";
    progress_bar_operation.style.display = "none";
    hjem_knap.style.display = "";    
}

operation_video.addEventListener("timeupdate", updateProgressOperation);

function updateProgressOperation() {
    const currentTime = operation_video.currentTime; // Henter den aktuelle afspilningstid af videoen og gemmer den i currentTime
    const duration = operation_video.duration; // Henter den samlede varighed af videoen og gemmer den i duration
    
    if (duration > 0) { // Tjekker om videoens varighed er større end 0 for at undgå fejl pga division med nul
        progress_bar_operation.value = (currentTime / duration) * 100; // Beregner den procentdel, som den aktuelle afspilningstid (currentTime) udgør af den samlede varighed (duration) og opdaterer progress baren
    }
}