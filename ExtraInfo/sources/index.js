var back = document.getElementById('Back');

const mainPage = "https://gen-byte.github.io/2025-TAD.github.io/index.html"

/*
Return To Main Page Button
*/
back.addEventListener("mouseover", () => {
    back.style.boxShadow =  "2px 2px 0px 0px black";
})

back.addEventListener("mouseout", () => {
    back.style.boxShadow =  "0px 0px 0px 0px black";
})

back.addEventListener("click", () => {
    back.style.left = "10px";
    back.style.top = "5px";
    location.replace(mainPage)
})
