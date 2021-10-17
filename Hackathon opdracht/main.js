document.getElementById("navButton").addEventListener("click", showMenu);
document.getElementById("button1").addEventListener("click", blue);

function showMenu() {
    let x = document.getElementById("menu-yoga");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function blue() {
    let body = document.querySelector('body');
    body.classList.toggle("blueBackground");
}