function Avaliar(estrela) {
    var url = window.location;
    url = url.toString()
    url = url.split("compra.html");
    url = url[0];
   
    var s1 = document.getElementById("s1").src;
    var s2 = document.getElementById("s2").src;
    var s3 = document.getElementById("s3").src;
    var s4 = document.getElementById("s4").src;
    var s5 = document.getElementById("s5").src;
    var avaliacao = 0;
   
   if (estrela == 5){ 
    if (s5 == url + "img/star0.png") {
    document.getElementById("s1").src = "img/star1.png";
    document.getElementById("s2").src = "img/star1.png";
    document.getElementById("s3").src = "img/star1.png";
    document.getElementById("s4").src = "img/star1.png";
    document.getElementById("s5").src = "img/star1.png";
    avaliacao = 5 + "/5 estrelas";
    } else {
    document.getElementById("s1").src = "img/star1.png";
    document.getElementById("s2").src = "img/star1.png";
    document.getElementById("s3").src = "img/star1.png";
    document.getElementById("s4").src = "img/star1.png";
    document.getElementById("s5").src = "img/star0.png";
    avaliacao = 4 + "/5 estrelas";
   }}
    
    //ESTRELA 4
   if (estrela == 4){ 
    if (s4 == url + "img/star0.png") {
    document.getElementById("s1").src = "img/star1.png";
    document.getElementById("s2").src = "img/star1.png";
    document.getElementById("s3").src = "img/star1.png";
    document.getElementById("s4").src = "img/star1.png";
    document.getElementById("s5").src = "img/star0.png";
    avaliacao = 4 + "/5 estrelas";
    } else {
    document.getElementById("s1").src = "img/star1.png";
    document.getElementById("s2").src = "img/star1.png";
    document.getElementById("s3").src = "img/star1.png";
    document.getElementById("s4").src = "img/star0.png";
    document.getElementById("s5").src = "img/star0.png";
    avaliacao = 3 + "/5 estrelas";
   }}
   
   //ESTRELA 3
   if (estrela == 3){ 
    if (s3 == url + "img/star0.png") {
    document.getElementById("s1").src = "img/star1.png";
    document.getElementById("s2").src = "img/star1.png";
    document.getElementById("s3").src = "img/star1.png";
    document.getElementById("s4").src = "img/star0.png";
    document.getElementById("s5").src = "img/star0.png";
    avaliacao = 3 + "/5 estrelas";
    } else {
    document.getElementById("s1").src = "img/star1.png";
    document.getElementById("s2").src = "img/star1.png";
    document.getElementById("s3").src = "img/star0.png";
    document.getElementById("s4").src = "img/star0.png";
    document.getElementById("s5").src = "img/star0.png";
    avaliacao = 2 + "/5 estrelas";
   }}
    
   //ESTRELA 2
   if (estrela == 2){ 
    if (s2 == url + "img/star0.png") {
    document.getElementById("s1").src = "img/star1.png";
    document.getElementById("s2").src = "img/star1.png";
    document.getElementById("s3").src = "img/star0.png";
    document.getElementById("s4").src = "img/star0.png";
    document.getElementById("s5").src = "img/star0.png";
    avaliacao = 2 + "/5 estrelas";
    } else {
    document.getElementById("s1").src = "img/star1.png";
    document.getElementById("s2").src = "img/star0.png";
    document.getElementById("s3").src = "img/star0.png";
    document.getElementById("s4").src = "img/star0.png";
    document.getElementById("s5").src = "img/star0.png";
    avaliacao = 1 + "/5 estrelas";
   }}
    
    //ESTRELA 1
   if (estrela == 1){ 
    if (s1 == url + "img/star0.png") {
    document.getElementById("s1").src = "img/star1.png";
    document.getElementById("s2").src = "img/star0.png";
    document.getElementById("s3").src = "img/star0.png";
    document.getElementById("s4").src = "img/star0.png";
    document.getElementById("s5").src = "img/star0.png";
    avaliacao = 1 + "/5 estrelas";
    } else {
    document.getElementById("s1").src = "img/star0.png";
    document.getElementById("s2").src = "img/star0.png";
    document.getElementById("s3").src = "img/star0.png";
    document.getElementById("s4").src = "img/star0.png";
    document.getElementById("s5").src = "img/star0.png";
    avaliacao = 0 + "/5 estrelas";
   }}
    
    document.getElementById('rating').innerHTML = avaliacao;
    
   }