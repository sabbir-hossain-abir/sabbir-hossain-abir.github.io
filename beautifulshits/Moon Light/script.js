let text= document.getElementById("text");
let leaf= document.getElementById("leaf");
let Stars= document.getElementById("Stars");
let Back= document.getElementById("Back");
let Moon= document.getElementById("Moon");
let Front= document.getElementById("Front");

window.addEventListener("scroll", () => {
    let value= window.scrollY;
    text.style.marginRight= value*2.5+"px";
    leaf.style.top= -value*1.5+"px";
    leaf.style.left= value*1.5+"px";
    Front.style.left= -value*1.5+"px";
    Stars.style.top= value*1+"px";
})

