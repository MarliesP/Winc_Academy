const menuButton = document.getElementById('navButton').addEventListener('click', showMenu);
const button1 = document.getElementById('button1').addEventListener('click', blue, showMenu);
const button2 = document.getElementById('button2').addEventListener('click', orange);
const button3 = document.getElementById('button3').addEventListener('click', red);
const button4 = document.getElementById('button4').addEventListener('click', purple);

function showMenu() {
    let x = document.getElementById("colorMenu");
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
};

const body = document.querySelector('body');
const textblok = document.querySelector('div');

function blue() {
    body.classList.toggle("blueBackground");
    body.classList.remove("orangeBackground", "redBackground", "purpleBackground");
    
    if (body.classList.contains('blueBackground')) {
        textblok.innerHTML = "Blue";
    } else {
        textblok.innerHTML = "";
    };

    showMenu();
}

function orange() {
    body.classList.toggle("orangeBackground");
    body.classList.remove("blueBackground", "redBackground", "purpleBackground");
    
    if (body.classList.contains('orangeBackground')) {
        textblok.innerHTML = "Orange";
    } else {
        textblok.innerHTML = "";
    };

    showMenu(); 
}

function red() {
    body.classList.toggle("redBackground");
    body.classList.remove("orangeBackground", "blueBackground", "purpleBackground");
    
    if (body.classList.contains('redBackground')) {
        textblok.innerHTML = "Red";
    } else {
        textblok.innerHTML = "";
    };
    
    showMenu();
}

function purple() {
    body.classList.toggle("purpleBackground");
    body.classList.remove("orangeBackground", "redBackground", "blueBackground");
    
    if (body.classList.contains('purpleBackground')) {
        textblok.innerHTML = "Purple";
    } else {
        textblok.innerHTML = "";
    };

    showMenu();
}