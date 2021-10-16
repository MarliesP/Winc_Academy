let button = document.getElementById('mybutton');

button.addEventListener("click", function(){ alert("Button clicked"); });

let changeColor = document.getElementById('changeBackground'); 

changeColor.addEventListener("click", function(){
    let body = document.querySelector('body');
    body.classList.toggle("red-background");
} )