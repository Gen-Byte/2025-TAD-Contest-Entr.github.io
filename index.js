//page URL's
const IntroToAI = "http://127.0.0.1:5500/IntroToAI/IntroToAi.html"
const Ml = "http://127.0.0.1:5500/ML/ML.html"
const dl = "http://127.0.0.1:5500/DL/DL.html"
const extra = "http://127.0.0.1:5500/EXTRA/extra.html"
//Get Box ID's
var introBox = document.getElementById("Intro");
var mlBox = document.getElementById("ML");
var dlBox = document.getElementById("DL");
var extraBox = document.getElementById("EXTRA");

/* 
For when mouse is over a box
*/
introBox.addEventListener("mouseover", function() {
    introBox.style.left = "-4px";
    introBox.style.top = "-4px";

    introBox.style.boxShadow = "10px 10px red";

})

introBox.addEventListener("mouseout", function() {
    introBox.style.left = "-0px";
    introBox.style.top = "-0px";
    introBox.style.boxShadow = "10px 10px black";
})

mlBox.addEventListener("mouseover", function() {
    mlBox.style.left = "-4px";
    mlBox.style.top = "-4px";
    mlBox.style.boxShadow = "10px 10px red";
})

mlBox.addEventListener("mouseout", function() {
    mlBox.style.left = "-0px";
    mlBox.style.top = "-0px";
    mlBox.style.boxShadow = "10px 10px black";
})

dlBox.addEventListener("mouseover", function() {
    dlBox.style.left = "-4px";
    dlBox.style.top = "-4px";
    dlBox.style.boxShadow = "10px 10px red";
})

dlBox.addEventListener("mouseout", function() {
    dlBox.style.left = "-0px";
    dlBox.style.top = "-0px";
    dlBox.style.boxShadow = "10px 10px black";
})

extraBox.addEventListener("mouseover", function() {
    extraBox.style.left = "-4px";
    extraBox.style.top = "-4px";
    extraBox.style.boxShadow = "10px 10px red";
})

extraBox.addEventListener("mouseout", function() {
    extraBox.style.left = "-0px";
    extraBox.style.top = "-0px";
    extraBox.style.boxShadow = "10px 10px black";
})

/*
For when mouse is pressing on a Box
*/

introBox.addEventListener("mousedown", function() {
    introBox.style.left = "-0px";
    introBox.style.top = "-0px";
    introBox.style.boxShadow = "10px 10px black";
})

introBox.addEventListener("mouseup", function() {
    introBox.style.left = "-4px";
    introBox.style.top = "-4px";
    introBox.style.boxShadow = "10px 10px red";
})

mlBox.addEventListener("mousedown", function() {
    mlBox.style.left = "-0px";
    mlBox.style.top = "-0px";
    mlBox.style.boxShadow = "10px 10px black";
})

mlBox.addEventListener("mouseup", function() {
    mlBox.style.left = "-4px";
    mlBox.style.top = "-4px";
    mlBox.style.boxShadow = "10px 10px red";
})

dlBox.addEventListener("mousedown", function() {
    dlBox.style.left = "-0px";
    dlBox.style.top = "-0px";
    dlBox.style.boxShadow = "10px 10px black";
})

dlBox.addEventListener("mouseup", function() {
    dlBox.style.left = "-4px";
    dlBox.style.top = "-4px";
    dlBox.style.boxShadow = "10px 10px red";
})

extraBox.addEventListener("mousedown", function() {
    extraBox.style.left = "-0px";
    extraBox.style.top = "-0px";
    extraBox.style.boxShadow = "10px 10px black";
})

extraBox.addEventListener("mouseup", function() {
    extraBox.style.left = "-4px";
    extraBox.style.top = "-4px";
    extraBox.style.boxShadow = "10px 10px red";
})

/*
When user click on box
*/

introBox.addEventListener("click", function() {
    location.replace(IntroToAI)
})

mlBox.addEventListener("click", function() {
    location.replace(Ml)
})

dlBox.addEventListener("click", function() {
    location.replace(dl)
})

extraBox.addEventListener("click", function() {
    location.replace(extra)
})

