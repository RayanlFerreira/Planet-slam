function changeproduct1(){
    var img1 = document.getElementById('img-product')
    var img2 = document.getElementById('img-product2')
    var img3 = document.getElementById('img-product3')
    img1.style.display = 'block'
    img3.style.display = 'none'
    img2.style.display = 'none'
}

function changeproduct2(){
    var img1 = document.getElementById('img-product')
    var img2 = document.getElementById('img-product2')
    var img3 = document.getElementById('img-product3')
    img2.style.display = 'block'
    img3.style.display = 'none'
    img1.style.display = 'none'

}

function changeproduct3(){
    var img1 = document.getElementById('img-product')
    var img2 = document.getElementById('img-product2')
    var img3 = document.getElementById('img-product3')
    img3.style.display = 'block'
    img2.style.display = 'none'
    img1.style.display = 'none'
}



function changesize1(){
    size1.style.backgroundColor = '#00A9B3';
    size2.style.backgroundColor = 'rgba(255, 255, 255, 0)';
    size3.style.backgroundColor = 'rgba(255, 255, 255, 0)';
}

function changesize2(){
    size1.style.backgroundColor = 'rgba(255, 255, 255, 0)';
    size2.style.backgroundColor = '#00A9B3';
    size3.style.backgroundColor = 'rgba(255, 255, 255, 0)';
}

function changesize3(){
    size1.style.backgroundColor = 'rgba(255, 255, 255, 0)';
    size2.style.backgroundColor = 'rgba(255, 255, 255, 0)';
    size3.style.backgroundColor = '#00A9B3';
}

var size1 = document.getElementById('size1')
size1.addEventListener('click', changesize1)

var size2 = document.getElementById('size2')
size2.addEventListener('click', changesize2)

var size3 = document.getElementById('size3')
size3.addEventListener('click', changesize3)