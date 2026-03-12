console.log("script carregado");

// ============================
// VALIDAÇÃO DO FORMULÁRIO
// ============================

document.addEventListener("DOMContentLoaded", function(){

const form = document.getElementById("formContato");

if(form){

form.addEventListener("submit", function(event){

event.preventDefault();

let nome = document.getElementById("nome").value.trim();
let email = document.getElementById("email").value.trim();
let mensagem = document.getElementById("mensagem").value.trim();

if(nome === "" || email === "" || mensagem === ""){
alert("Preencha todos os campos!");
return;
}

let emailValido = /\S+@\S+\.\S+/;

if(!emailValido.test(email)){
alert("Digite um email válido!");
return;
}

alert("Mensagem enviada com sucesso!");

form.reset();

});

}

// FUNDO ANIMADO (PARTÍCULAS)
const canvas = document.getElementById("background");
console.log(canvas);
const ctx = canvas.getContext("2d");

function resizeCanvas(){
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let particles = [];

const PARTICLE_COUNT = 80;

for(let i = 0; i < PARTICLE_COUNT; i++){

particles.push({

x: Math.random() * canvas.width,
y: Math.random() * canvas.height,
radius: Math.random() * 2 + 1,
dx: (Math.random() - 0.5) * 0.5,
dy: (Math.random() - 0.5) * 0.5

});

}

function animate(){

ctx.clearRect(0, 0, canvas.width, canvas.height);

particles.forEach(p => {

ctx.beginPath();
ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
ctx.fillStyle = "white";
ctx.fill();

p.x += p.dx;
p.y += p.dy;

if(p.x < 0 || p.x > canvas.width) p.dx *= -1;
if(p.y < 0 || p.y > canvas.height) p.dy *= -1;

});

requestAnimationFrame(animate);

}

animate();

});

// =============================
// VALIDAÇÃO DO FORMULÁRIO
// =============================

const form = document.getElementById("formContato");

form.addEventListener("submit", function(event){

event.preventDefault(); // impede envio real

const nome = document.getElementById("nome").value.trim();
const email = document.getElementById("email").value.trim();
const mensagem = document.getElementById("mensagem").value.trim();

// regex simples para validar email
const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(nome === "" || email === "" || mensagem === ""){
alert("Por favor, preencha todos os campos.");
return;
}

if(!emailValido.test(email)){
alert("Digite um e-mail válido. Ex: usuario@email.com");
return;
}

// simulação de envio
alert("Mensagem enviada com sucesso!");

// limpa formulário
form.reset();

});

// Alterar tema
const btnTema = document.getElementById("temaBtn");

btnTema.addEventListener("click", function(){

document.body.classList.toggle("light");

});
