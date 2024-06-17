// Pembuatan fungsi Math ranodm untuk menentukan hasil dari pilihan komputer
function getPilihancomputer(){
    const comp = Math.random();
    if(comp < 0.34)return 'gajah';
    if(comp >= 0.34 && comp < 0.67)return 'orang'
    return 'semut';


}
// Pembuattan fungsi untuk mendapatkan hasil
function gethasil(comp, player){
    if(player == comp) return 'SERI';
    if(player == 'gajah')return (comp == 'orang') ? 'MENANG' : 'KALAH' // cara membaca ? adalah 'maka' dan ketika : adalah 'selain itu'
    if(player == 'orang')return (comp == 'gajah') ? 'KALAH' : 'MENANG'
    if(player == 'semut')return (comp == 'orang') ? 'KALAH' : 'MENANG'
}


// Pembuatan fungsi memutar
function putarAnimation(){
    const imgComputer = document.querySelector('.img-komputer')
    let i = 0
    const waktuMulai = new Date().getTime()
    setInterval(function(){
        if(new Date().getTime() - waktuMulai > 1000){
            clearInterval;
            return
        }
        const gambar = ['gajah', 'semut', 'orang']
        imgComputer.setAttribute('src', 'img/'+ gambar[i++] +'.png')
        if(i == gambar.length){
            i = 0
        }
    }, 100)
}


const pilPlayer = document.querySelectorAll('ul li img')

let scorePlayerINT = 0
let scoreBotINT = 0

pilPlayer.forEach(function(pil){
    pil.addEventListener('click', function(){
        
        const pilihankomputer = getPilihancomputer();
        const pilihanplayer = pil.className;
        const hasil = gethasil(pilihankomputer, pilihanplayer);
        const imgComputer = document.querySelector('.img-komputer')
        const hasilText = document.querySelector('.info')
        const scorePlayer = document.querySelector('.playerScore')
        const scoreBot = document.querySelector('.botScore')
        
        putarAnimation()

        setTimeout(() => {
            imgComputer.setAttribute('src', 'img/'+ pilihankomputer +'.png')
            hasilText.innerHTML = hasil
            if(hasil == 'MENANG'){
                scorePlayerINT = scorePlayerINT + 1
                scorePlayer.innerHTML = scorePlayerINT
            }
            if(hasil == 'KALAH'){
                scoreBotINT++
                scoreBot.innerHTML = scoreBotINT 
            }
        }, 1000);
        
    })
})
