// MEMBUAT PROJECT UBAH WARNA PADA WEBSITE DENGAN SERU DAN ASIK

// Mendeklarasi Element HTML
const button = document.querySelector('button');
const body = document.querySelector('#body');
const div = document.querySelector("div.button1")
let reset
const rMerah = document.querySelector('input[name="rMerah"]')
const rHijau = document.querySelector('input[name="rHijau"]')
const rBiru = document.querySelector('input[name="rBiru"]')

// Membuat EventListener ketika di click akan menjalankan fungsi
button.addEventListener('click', function(){
    document.body.style.backgroundColor = 'red' // Membuat Bckground menjadi Merah
    button.remove() // ketika sudah merah button akan dihapus & Diganti
    const random = document.createElement('button'); // Dan membuat element button baru yang bervariabel random
    const tRandom = document.createTextNode('Acak Warna') // Memberi teks pada variabel button random

    random.appendChild(tRandom) // memasukkan tRandom kedalam random
    div.appendChild(random) // lalu masukkan random ke dalam div yang setara dengan variabel random yang sudah dihapus

    // Lalu ketika random di klick akan menjalan kan sebuah function
    random.addEventListener('click', function(){
        // Membuat Fitur Ketikka mengclick Button Random akan membuat warna body berubah menjadi acak(random)

        // Mendeklarasi r,g,b nya dengan math random * 255 dikarenakan rgb rangennya adalah 1 - 255
        let r = Math.round(Math.random() * 255 + 1)
        let g = Math.round(Math.random() * 255 + 1)
        let b = Math.round(Math.random() * 255 + 1)        
        document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')' // lalu variable r, g, b dimasukkan kedalam string rgb

        // MEMBUAT FITUR TOMBOL RESET

        // untuk user tidak membuat tombol reset dengan banyak adalah dengan cara if(!reset) yang membuat ketikka tidak ada reset maka akan bisa membuat tombol reset dan jika sudah ada tombol reset maka fitur menambahkan tombol reset tidak akan ada
        if(!reset){   
            console.log(reset)  
            reset = document.createElement('button');
            tReset = document.createTextNode('reset')
            reset.appendChild(tReset)
            reset.setAttribute('type', 'reset')
            div.appendChild(reset)
            reset.addEventListener('click', function(){
                window.location.reload()
            })
        }
        
    })
})

// MEMBUAT FITUR RANGE PADA HTML MENJADI PENGUBAH WARNA

// ketika range merah berganti makan akan mengcheck value yang ada pada range min: 1, max:255 dan akan diimplementasikan di rgb bagian r dan sama pula di bagian rHijau dan rBiru
rMerah.addEventListener('change', function(){
    document.body.style.backgroundColor = 'rgb('+ rMerah.value +','+ rHijau.value +','+ rBiru.value +')'
})

rHijau.addEventListener('change', function(){
    document.body.style.backgroundColor = 'rgb('+ rMerah.value +','+ rHijau.value +','+ rBiru.value +')'
})

rBiru.addEventListener('change', function(){
    document.body.style.backgroundColor = 'rgb('+ rMerah.value +','+ rHijau.value +','+ rBiru.value +')'
})

// MEMBUAT FITUR PENGGERAKAN MOUSE BERDAMPAK PADA WARNA BODY COLOR

// Membuat evenListener pada window agar jika mouse digerakkan di manapun itu di layar kita akan menjalankan suatu fungsi
window.addEventListener("mousemove", function(e){
    // clientX memerlukan objek untuk dijalankan maka dari itu disamping function terdapat (e)
    const xPos = e.clientX
    const yPos = e.clientY

    // mendeklarasikan lebar layar dan tinggi layar dengan menggunakan window.innerWidth dan window.innerHeight
    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight
    // console.log(xPos)
    
    // lalu kita bagi xPos dengan lebar layar dikalikan dengan 255(rgb) dan yPos dengan tinggi layar dikalikan dengan 255 juga
    const redXPos = Math.round((xPos / windowWidth) * 255);
    const greenXPos = Math.round((yPos / windowHeight) * 255);
    // lalu kita bulatkan dengan Math.round agar hasilnya tidak desimal dikarenakan rgb bilangan bulat

    // setelah itu kita masukkan variabel redXPos & greenXPos kedalam body.style untuk mengubah warena seluruh halaman website dengan pergerasan(move) dari cursor kita
    document.body.style.backgroundColor = 'rgb('+ redXPos +','+ greenXPos +',0)'
})