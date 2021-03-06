var background1 = document.getElementsByClassName('background1')[0];
var quote1 = document.getElementById('quote1');
var quote2 = document.getElementById('quote2');


setTimeout(function () {
    quote1.style.transform = 'scale(1)';
    quote1.style.transitionDuration = '0.7s';
    quote2.style.transform = 'scale(1)';
    quote2.style.transitionDuration = '1s';
    quote2.style.transitionDelay = '0.4s';
},1000); 

var content = document.getElementById('content');

switch(window.location.href) {
    case 'https://nikhilphalange.github.io/Escape-Suicide-Reloaded/index.html' : content.style.backgroundImage = 'url(Nature1.jpg)'; break;
    case 'https://nikhilphalange.github.io/Escape-Suicide-Reloaded/chat.html' : content.style.backgroundImage = 'url(Nature2.jpg)'; break;
    case 'https://nikhilphalange.github.io/Escape-Suicide-Reloaded/contact.html' : content.style.backgroundImage = 'url(Nature3.jpg)'; break;
    case 'https://nikhilphalange.github.io/Escape-Suicide-Reloaded/support.html' : content.style.backgroundImage = 'url(Nature4.jpg)'; break;
    case 'https://nikhilphalange.github.io/Escape-Suicide-Reloaded/faq.html' : content.style.backgroundImage = 'url(Nature5.jpg)'; break;    
}

setTimeout(showContent,3000);  
function showContent() {
    background1.style.transform = 'scale(0)';
    background1.style.transitionDelay = '0.3s';
    background1.style.transitionDuration = '0.4s';
    var content = document.getElementById('content');
    content.style.transform = 'scale(1)';
}


var sidenav = document.getElementById('sidenav');
var sidenav_content = document.getElementById('sidenav_content');
var sidenav_bg1 = document.getElementById('sidenav_bg1');
var sidenav_bg2 = document.getElementById('sidenav_bg2');


var openButton = document.getElementById('open');
var closeButton = document.getElementById('close');

function showSidenav() {
    sidenav_content.style.left = '0vw';
    sidenav_bg1.style.transform = 'rotate(20deg)';
    sidenav_bg2.style.transform = 'rotate(-20deg)';
    sidenav_bg1.style.left = '-10vw';
    sidenav_content.style.transitionDelay = '0.4s';
    sidenav_content.style.transitionDuration = '0.3s';
    sidenav_bg1.style.zIndex = '30';
    sidenav_bg2.style.zIndex = '20';
    sidenav_content.style.zIndex = '40';
    
    closeButton.style.filter = 'opacity(1)';
    closeButton.style.transitionDuration = '0.3s';
    closeButton.style.transitionDelay = '0.5s';
    openButton.style.filter = 'opacity(0)';
    openButton.style.transitionDuration = '0.3s';
    openButton.style.transitionDelay = '0s';
}

function closeSidenav() {
    closeButton.style.filter = 'opacity(0)';
    closeButton.style.transitionDelay = '0s';
    closeButton.style.transitionDuration = '0.3s';
    openButton.style.filter = 'opacity(1)';
    openButton.style.transitionDelay = '0.5s';
    openButton.style.transitionDuration = '0.3s';
    openButton.style.display = 'block';
    
    sidenav_content.style.left = '-20vw';
    sidenav_content.style.transitionDelay = '0s';
    sidenav_bg1.style.transform = 'rotateY(90deg)';
    sidenav_bg2.style.transform = 'rotateY(90deg)';
    sidenav_bg1.style.left = '-20vw';
    sidenav_content.style.transitionDuration = '0.3s';
    setTimeout(function () {
    sidenav_bg1.style.zIndex = '-30';
    sidenav_bg2.style.zIndex = '-20';
    sidenav_content.style.zIndex = '-40'; 
    },700);   
}