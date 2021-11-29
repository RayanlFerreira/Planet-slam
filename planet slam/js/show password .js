//mostrar a senha
let btn = document.querySelector('.lnr-eye');

btn.addEventListener('click', function() {
    let input = document.querySelector('#password');
    if(input.getAttribute('type') == 'password') {
        input.setAttribute('type', 'text');
    } else {
        input.setAttribute('type', 'password');
    }
});
//exibir o alert
function alert(){
        document.getElementById("text").innerHTML = "Usuário alterado com sucesso";
        document.getElementById("box").style.backgroundColor = "white";
        document.getElementById("box").style.width = "250px";
        document.getElementById("box").style.height = "35px";
        document.getElementById("box").style.border = "1px solid white";
        document.getElementById("box").style.borderRadius = "3px";
        document.getElementById("box").style.marginTop = "20px";        
}