const button = document.querySelector('button');
const body = document.querySelector('#body');
const div = document.querySelector("div.button1")
let reset
const rMerah = document.querySelector('input[name="rMerah"]')
const rHijau = document.querySelector('input[name="rHijau"]')
const rBiru = document.querySelector('input[name="rBiru"]')

button.addEventListener('click', function(){
    document.body.style.backgroundColor = 'red'
    button.remove()
    const random = document.createElement('button');
    const tRandom = document.createTextNode('Acak Warna')

    random.appendChild(tRandom)
    div.appendChild(random)

    random.addEventListener('click', function(){
        let r = Math.round(Math.random() * 255 + 1)
        let g = Math.round(Math.random() * 255 + 1)
        let b = Math.round(Math.random() * 255 + 1)        
        document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')'
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

rMerah.addEventListener('change', function(){
    document.body.style.backgroundColor = 'rgb('+ rMerah.value +','+ rHijau.value +','+ rBiru.value +')'
})

rHijau.addEventListener('change', function(){
    document.body.style.backgroundColor = 'rgb('+ rMerah.value +','+ rHijau.value +','+ rBiru.value +')'
})

rBiru.addEventListener('change', function(){
    document.body.style.backgroundColor = 'rgb('+ rMerah.value +','+ rHijau.value +','+ rBiru.value +')'
})

window.addEventListener("mousemove", function(e){
    const xPos = e.clientX
    const yPos = e.clientY
    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight
    // console.log(xPos)
    
    const redXPos = Math.round((xPos / windowWidth) * 255);
    const greenXPos = Math.round((yPos / windowHeight) * 255);

    document.body.style.backgroundColor = 'rgb('+ redXPos +','+ greenXPos +',0)'
})