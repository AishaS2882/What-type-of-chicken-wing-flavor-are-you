let correctAge = ("younger than 20");
let correctAge2 = ("older than 20");
let correctSauce = ("SWEET");
let correctSauce2 = ("HOT");
let correctSauce3 = ("LIQUIDY");
let correctSauce4 = ("MANGOEY");
let button = document.querySelector("button");
let divide = document.querySelector(".divide");
let dividem = document.querySelector(".dividem");
let divide2 = document.querySelector(".divide2");
let divide22 = document.querySelector(".divide22");
let divide3 = document.querySelector(".divide3");
let divide33 = document.querySelector(".divide33");
let divide4 = document.querySelector(".divide4");
let divide44 = document.querySelector(".divide44");

button.onclick = function() {
    let input = document.querySelector(".input").value.toLowerCase();
    let input2 = document.querySelector(".input2").value.toUpperCase();
    let message = document.querySelector(".message");
    let messagem = document.querySelector(".messagem");
    let message22 = document.querySelector(".message22");
    let message2 = document.querySelector(".message2");
    let message33 = document.querySelector(".message33");
    let message3 = document.querySelector(".message3");
    let message44 = document.querySelector(".message44");
    let message4 = document.querySelector(".message4");
    let messagef = document.querySelector(".messagef");  

    if (input === correctAge && input2 === correctSauce) {
        message.innerHTML = "Since you are younger than 20 and you like sweet sauce, you are a BBQ sauce. Wrong choice!!";
        divide.style.display = "block";
      messagef.style.display = "none";
    } else if (input === correctAge2 && input2 === correctSauce) {
        messagem.innerHTML = "Since you are older than 20 and you like sweet sauce, you are a Sweet Orange sauce. Wrong choice!!";
        dividem.style.display = "block";
       messagef.style.display = "none";
    }
    if (input === correctAge && input2 === correctSauce2) {
        message2.innerHTML = "Since you are younger than 20 and you like hot sauce, you are a Tapatio sauce. Wrong choice!!";
        divide2.style.display = "block";
       messagef.style.display = "none";
    } else if (input === correctAge2 && input2 === correctSauce2) {
        message22.innerHTML = "Since you are older than 20 and you like hot sauce, you are a Valentina sauce. Wrong choice!!";
        divide22.style.display = "block";
       messagef.style.display = "none";
    }
    if (input === correctAge && input2 === correctSauce3) {
        message3.innerHTML = "Since you are younger than 20 and you like liquidy sauce, you are Teriyaki sauce. Wrong choice!!";
        divide3.style.display = "block";
       messagef.style.display = "none";
    } else if (input === correctAge2 && input2 === correctSauce3) {
        message33.innerHTML = "Since you are older than 20 and you like liquidy sauce, you are a Tamari sauce. Wrong choice!!";
        divide33.style.display = "block";
     messagef.style.display = "none";
    }
    if (input === correctAge && input2 === correctSauce4) {
        message4.innerHTML = "Since you are younger than 20 and you like Mangoey sauce, you are a Mango Habanero sauce. Right choice!!(you are Fahads Friend)";
        divide4.style.display = "block";
       messagef.style.display = "none";
    } else if (input === correctAge2 && input2 === correctSauce4) {
        message44.innerHTML = "Since you are older than 20 and you like Mangoey sauce, you are a Thai mango sauce. Right choice!!(you are Fahads Friend)";
        divide44.style.display = "block";
       messagef.style.display = "none";
    } 
    else {
      messagef.innerHTML = "Choose one of the options";
    }
};

