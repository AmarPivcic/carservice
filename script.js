window.onscroll = function () {
    scrollRotate();
}

function scrollRotate() {
    let image = document.getElementById("logoicon");
    image.style.transform = "rotate(" + window.pageYOffset/4 + "deg)";
}

function darkMode() {
    var card1=document.getElementById("aboutuscard");
    card1.classList.toggle("darkcard");
    var card2=document.getElementById("servicescard1");
    card2.classList.toggle("darkcard");
    var card3=document.getElementById("servicescard2");
    card3.classList.toggle("darkcard");
    var card4=document.getElementById("servicescard3");
    card4.classList.toggle("darkcard");
    var section1=document.getElementById("aboutus");
    section1.classList.toggle("darksection");
    var section2=document.getElementById("services");
    section2.classList.toggle("darksection");
    var section3=document.getElementById("location");
    section3.classList.toggle("darksection");
    var title1=document.getElementById("aboutustitle");
    title1.classList.toggle("darktext");
    var title2=document.getElementById("servicestitle");
    title2.classList.toggle("darktext");
    var title3=document.getElementById("locationtitle");
    title3.classList.toggle("darktext");
    var text1=document.getElementById("aboutustext1");
    text1.classList.toggle("darktext");
    var text2=document.getElementById("aboutustext2");
    text2.classList.toggle("darktext");
    var text3=document.getElementById("enginetext");
    text3.classList.toggle("darktext");
    var text4=document.getElementById("locationtext");
    text4.classList.toggle("darktext");
}