// Manipulasi Node

const pBaru = document.createElement('p'); // .createElement berfungsi untuk menambahkan tag element pada HTML
const teksBaru = document.createTextNode('Paragraf Baru'); // .createTextNode berfungsi untuk membuat text ke dalam memori

// simpan tulisan ke dalam paragraf
pBaru.appendChild(teksBaru); //ini bayangkan saja bahwa vas(pBaru) ya diisi bunga(teksbaru)

// simpan pBaru ke akhir section a
const sectA = document.querySelector('section#a');
sectA.appendChild(pBaru)

const liBaru = document.createElement('li');
const liTeks = document.createTextNode('List Baru');

liBaru.appendChild(liTeks);

const sectB = document.querySelector('#b ul');
const liB = sectB.querySelectorAll('li');

sectB.insertBefore(liBaru, liB[1])

const link = document.querySelector('a');
sectA.removeChild(link)

// const h2 = document.createElement('h2');
// const h2Text = document.createTextNode('Ini adalah h2');
// const paragrafB = document.querySelector('section#b p')
const paragrafB = document.querySelector('section#b p')

// h2.appendChild(h2Text)
// sectionB.removeChild(paragrafB)

// sectionB.insertBefore(h2, sectB)
const sectionB = document.querySelector('section#b');
const h2 = document.createElement('h2');
const h2Text = document.createTextNode('Ini adalah h2');

h2.appendChild(h2Text)

sectionB.replaceChild(h2, paragrafB)




