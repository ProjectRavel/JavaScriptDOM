
// MANIPULASI ELEMENT \\
const judul = document.getElementById('judul');
judul.innerHTML = "<i>Rafael Pandu Sumanti</i>"; // InnerHTML berfungsi untuk mengubah inner pada HTML nya
judul.style.color = "salmon" // Dan style itu untuk mengubah properti css pada HTML yang di seleksi

const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = "Aku sayang Ghifa" -- Di InnerHTML akan membuat didalam element tersebut mau berupa apapun akan tergantikan oleh apa yang ada di InnerHTML

// Attribute adalah sesuatu didalam tag seperti class, id, href, type, dll.

const JudulTagName = document.getElementsByTagName('h1')[0]


JudulTagName.setAttribute('name', 'ravel'); // setAttribute berfungsi untuk menambahkan attribute pada element HTML seperti: id, name, class, dll.
const a = document.querySelector('section#a')
const li = document.querySelectorAll('li')[1];

// a.getAttribute('id') -- getAttribute berfungsi untuk melihat value dari Attribute id

// a.removeAttribute('id') -- removeAttribute berfungsi untuk menghapus attribute

li.setAttribute('id', 'li2') //setAttribute berfungsi untuk membuat attribute baru teruntuk yang dikiri adalah attributenya dan dikanan adalah value dari attributenya

// Tapi setAttribute bisa menghapus/menimpa attribute value sebelumnya

// Maka dari itu kita bisa menambah classnya dengan cara memakai .classlist

//Contoh Contoh classlist: .add(), .remove(), .toggle(), .item(), contains(), .replace()

const p2 = document.querySelector('.p2');
p2.classList.add('satu')
p2.classList.add('dua')
p2.classList.add('tiga')
// p2.classList.add('container') -- add untuk menambahkan classlist baru

// p2.classList.remove('p2') -- remove untuk menghapus classlit yang ada

// p2.classList.toggle('label'); -- toggle berfungsi untuk menghapus atau menambahkan sebuat class jika ada/tidaknya pada class

const test = p2.classList.item(0) // .item berfungsi untuk menanyakan length pada class ber value apa
const contains = p2.classList.contains('dua') //.contains berfungsi untuk menanyakan apakah ada class yang bernama dua dan akan dikembaliakan dengan nilai boolean(true/false)

console.log(contains)
console.log(test)
