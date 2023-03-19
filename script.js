var i = 0;
var txt = "Allt inom asfalt";
var speed = 50;

function typeWriter() {
    document.getElementById("lead_words").innerHTML
    += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed)
}

typeWriter();