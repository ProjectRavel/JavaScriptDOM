// Event Listener adalah adalah nerepresentasikan sebuah kejadian yang terjadi di dalam DOM (mouse event, keyboard event, dll) atau otomatis dijalan oleh API 

// Event Handler(inline HTML attribute, elementmothd
// addEventListener()

 // eventHandler = onclick

const par3 = document.querySelector('section#a .p3')
const par4 = document.querySelector('section#b p')
const sectA = document.querySelector('section#a')
const sectb = document.querySelector('section#b ul')



// perbedaan onclick dan addeventlistener adalah kalau onclick menimpa dan addeventlistener adalah menambahkan
par4.addEventListener('dblclick', function(){
    const list = document.createElement("li")
    const textlist = document.createTextNode('item baru')
    list.appendChild(textlist)
    sectb.appendChild(list)
})

    
   