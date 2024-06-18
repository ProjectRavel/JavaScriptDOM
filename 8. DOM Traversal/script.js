const closeButton = document.querySelectorAll('.close');
const card = document.querySelectorAll('.card')
const telp = document.querySelector('.telp')

closeButton.forEach(function(e){
    e.addEventListener('click', function(event){
        event.stopPropagation(); // .stopPropagation adalah untuk menajalan fungsi seleksi terlebih dahulu dibandingkan parentnya
        
        e.parentElement.style.display = "none" // DOM Traversal a   dalah penelusuran parent dari element yang kita seleksi
    })
})

// CONTOH DOM TRAVERSAL METHOD:
// parentNode, parentElement, nextSibling, nextElementSibling, previousSibling, previousElementSibling.

// Pakailah Element ketika ingin menyeleksi (recomended)
telp.addEventListener('click', ()=>{
    telp.parentElement.parentElement.style.backgroundColor = "cyan" // Parent element bisa dua kali untuk menyeleksi orang tua dari orang tua nya element yang sudah kita seleksi
    telp.style.display = 'none'

})

card.forEach(function(c){
    c.addEventListener('click', ()=>{
        alert('ok')
    })
})