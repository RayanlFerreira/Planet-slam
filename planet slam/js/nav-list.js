function navListResponsivel(){
    var navlit = document.getElementById('nav-list');

     if(navlit.style.transform == 'translateX(100%)'){
         navlit.style.transform = 'translateX(0)';
     } else {
         navlit.style.transform = 'translateX(100%)';
     }
}

function passouMouse(){
    console.log('Passou Mouse')
}

var responsive = document.getElementById('texto')
responsive.addEventListener('click', navListResponsivel)


responsive.addEventListener('mouseenter', passouMouse)

