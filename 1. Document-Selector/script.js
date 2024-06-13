// DOM SELECTION    

// document.getElementById() --Berfungsi Untuk Menyeleksi element dengan Id
const Judul = document.getElementById('judul');
Judul.style.color = 'red';  // .style berfungsi untuk menambahkan style css pada HTML melalui script
Judul.style.backgroundColor = 'black';   // Dan Setelah .style bisa ditambahkan stylelist pada css seperti color dll
Judul.innerHTML = "vels";   //innerHTML berfungsi untuk mengganti isi dalam HTML nya

//  document.getelementByTagName() -- berfungsi untuk menyeleksi element HTML dengan tagname nya(HTML Collection)
const par = document.getElementsByTagName('p'); // ByTagName ini bekerja layaknya seperti array
// par.style.color = 'cyan' --Tidak akan bisa dikarenakan ingat TagName itu bekerja seperti array

for(let i = 0; i < par.length; i++){
    par[i].style.fontFamily = 'sans-serif'
}


// .getElementByClassName mirip dengan tagname() yang berfungsi untuk menyeleksi element html dengan tagname nya (HTML Collection)
const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'Nadhira Rafani Ghifari';

// .querySelector() berfungsi untuk menyeleksi element namun hanya teruntuk satu, yang paling awal dan pertama
const p4 = document.querySelector('#b p'); 
p4.style.color = 'red';
p4.style.fontSize = "30px";

const li2 = document.querySelector('section#b ul li:nth-child(2)');

li2.style.backgroundColor = 'orange';

const P = document.querySelectorAll('p');
for(i = 0; i < P.length; i++){
    P[i].style.backgroundColor = 'cyan'
}


// Kita bisa memperkecil bagian root dalam JavaScript
const sectB = document.getElementById("b");
const pSectB = sectB.querySelector("p");
    
pSectB.style.backgroundColor = "black"
pSectB.style.color = "white"