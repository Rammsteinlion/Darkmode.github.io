const body = document.querySelector('body');
const toggle = document.getElementById('toggle');
const texto = document.querySelector('h1');

toggle.onclick = function(){
    toggle.classList.toggle('active');
    body.classList.toggle('active');
    texto.classList.toggle('active');
}