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
    var text1=document.getElementById("aboutuscard");
    text1.classList.toggle("darktext");
    var text2=document.getElementById("enginetext");
    text2.classList.toggle("darktext");
    var text3=document.getElementById("gearboxtext");
    text3.classList.toggle("darktext");
    var text4=document.getElementById("othertext");
    text4.classList.toggle("darktext");
    var text5=document.getElementById("locationtext");
    text5.classList.toggle("darktext");
    var servicestitle1=document.getElementById("enginetitle");
    servicestitle1.classList.toggle("darktext");
    var servicestitle2=document.getElementById("gearboxtitle");
    servicestitle2.classList.toggle("darktext");
    var servicestitle3=document.getElementById("othertitle");
    servicestitle3.classList.toggle("darktext");
    var engine=document.getElementById("engine");
    engine.classList.toggle("invert");
    var gearbox=document.getElementById("gearbox");
    gearbox.classList.toggle("invert");
    var car=document.getElementById("car");
    car.classList.toggle("invert");
}