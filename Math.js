for(let i=0; i<99; i++){
var b=document.createElement("b");
var rand=["&deg;", "*", "-", "!", "+", "&divide;", "&#8377;", "#", "&#960;", "&times;", "&plusmn;", "%", "=", "&#8734;", "&#8776;", "&#8800;", "&frac12;", "&#8534;", "&#8540;", "&#8536;", "&#8541;", "&#8310;", "&#8542;", "&#8312;", "&#8313;", "&#8319;", "x", "y", "z", "?", "$", "&#956;", "&#928;", "&#937;", "&#8710;", "&#8240;", "&#8453;", "sin", "cos"];
b.innerHTML=rand[Math.floor(Math.random()*rand.length)];
b.style.top=Math.floor(Math.random()*(99-69+1))+69+"%";
b.style.left=Math.floor(Math.random()*99)+1+"%";
b.style.transform="rotate("+Math.floor(Math.random()*(369+1))+"deg)";
b.id=i;
document.getElementById("decor").appendChild(b);
}

if(localStorage.getItem("HiScor")===null){
document.getElementById("scor").innerHTML="0";
} else{
document.getElementById("scor").innerHTML=localStorage.getItem("HiScore");
}

function go(){
  location.href= "https://2no.co/24FM87;

i built this back in class 10
shayad tujhe mene pehle bhi dikhaya tha"
for(var i=0; i<99; i++){
document.getElementById(i).style.top="99%";
document.getElementById(i).style.opacity="0";
}
var k=document.getElementById("k");
var play=document.getElementById("play");
k.style.animation="click .5s";
startConfetti();
setTimeout(()=>{
k.style.animation="";
play.style.display="none";
},678)
play.style.marginTop="89%";
play.style.opacity="0";
}



var maxParticleCount=96;
var particleSpeed=2;
var startConfetti;
var stopConfetti;
var toggleConfetti;
var removeConfetti;

(function() {
startConfetti=startConfettiInner;
stopConfetti=stopConfettiInner;
toggleConfetti=toggleConfettiInner;
removeConfetti=removeConfettiInner;
var colors=["DodgerBlue", "OliveDrab", "Gold", "Pink", "SlateBlue", "LightBlue", "Violet", "PaleGreen", "SteelBlue", "SandyBrown", "Chocolate", "Crimson", "IndianRed"]
var streamingConfetti=false;
var animationTimer=null;
var particles=[];
var waveAngle=0;

function resetParticle(particle, width, height) {
particle.color=colors[(Math.random() * colors.length) | 0];
particle.x=Math.random() * width;
particle.y=Math.random() * height - height;
particle.diameter=Math.random() * 10 + 5;
particle.tilt=Math.random() * 10 - 10;
particle.tiltAngleIncrement=Math.random() * 0.07 + 0.05;
particle.tiltAngle=0;
return particle;
}

function startConfettiInner() {
var width=window.innerWidth;
var height=window.innerHeight;
window.requestAnimFrame=(function() {
return window.requestAnimationFrame ||
window.webkitRequestAnimationFrame ||
window.mozRequestAnimationFrame ||
window.oRequestAnimationFrame ||
window.msRequestAnimationFrame ||
function (callback) {
return window.setTimeout(callback, 16.6666667);
};
})();
var canvas=document.getElementById("confetti-canvas");
if (canvas === null) {
canvas=document.createElement("canvas");
canvas.setAttribute("id", "confetti-canvas");
canvas.setAttribute("style", "display:block;z-index:99999999;pointer-events:none");
document.body.appendChild(canvas);
canvas.width=width;
canvas.height=height;
window.addEventListener("resize", function() {
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
}, true);
}
var context=canvas.getContext("2d");
while (particles.length < maxParticleCount)
particles.push(resetParticle({}, width, height));
streamingConfetti=true;
if (animationTimer === null) {
(function runAnimation() {
context.clearRect(0, 0, window.innerWidth, window.innerHeight);
if (particles.length === 0)
animationTimer=null;
else {
updateParticles();
drawParticles(context);
animationTimer=requestAnimFrame(runAnimation);
}
})();
}
}

function stopConfettiInner(){
streamingConfetti=false;
}

function removeConfettiInner(){
stopConfetti();
particles=[];
}

function toggleConfettiInner(){
if(streamingConfetti)
stopConfettiInner();
else
startConfettiInner();
}

function drawParticles(context){
var particle;
var x;
for (var i=0; i<particles.length; i++){
particle=particles[i];
context.beginPath();
context.lineWidth=particle.diameter;
context.strokeStyle=particle.color;
x=particle.x+particle.tilt;
context.moveTo(x+particle.diameter/2, particle.y);
context.lineTo(x, particle.y+particle.tilt + particle.diameter / 2);
context.stroke();
}
}

function updateParticles(){
var width=window.innerWidth;
var height=window.innerHeight;
var particle;
waveAngle += 0.01;
for(var i=0; i < particles.length; i++){
particle=particles[i];
if(!streamingConfetti && particle.y < -15)
particle.y=height + 100;
else{
particle.tiltAngle += particle.tiltAngleIncrement;
particle.x += Math.sin(waveAngle);
particle.y += (Math.cos(waveAngle)+particle.diameter+particleSpeed)*0.5;
particle.tilt=Math.sin(particle.tiltAngle)*15;
}
if(particle.x>width+20 || particle.x<-20 || particle.y>height){
if(streamingConfetti && particles.length<=maxParticleCount)
resetParticle(particle, width, height);
else {
particles.splice(i, 1);
i--;
}
}
}
}
})();

