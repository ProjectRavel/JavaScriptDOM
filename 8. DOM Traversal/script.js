const closeButton = document.querySelectorAll('.close');
const card = document.querySelectorAll('.card')

closeButton.forEach(function(e){
    e.addEventListener('click', function(){
        e.parentElement.style.display = "none" // DOM Traversal a   dalah penelusuran parent dari element yang kita seleksi
    })
})

// CONTOH DOM TRAVERSAL METHOD:
// parentNode, parentElement, nextSibling, nextElementSibling, previousSibling, previousElementSibling.

