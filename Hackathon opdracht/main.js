document.getElementById("navButton").addEventListener("click", showMenu);

function showMenu() {
    let x = document.getElementById("menu-yoga");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}