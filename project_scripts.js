// function clicker() {
//     let current_count_block = document.getElementById('counter')
//     let current_count = current_count_block.textContent
//     let alert1 = document.getElementById('alert')
//     current_count_block.innerText = Number(current_count) + 1
// }

let color = prompt('color')
let qube1 = document.getElementById('qube_1')
let qube2 = document.getElementById('qube_2') 
let qube3 = document.getElementById('qube_3')

qube1.style.background = color

if(color == 'red') {
    qube2.style.background = 'pink'
    qube3.style.background = 'blue'
}
else if(color == 'black'){
    qube2.style.background = 'green'
    qube3.style.background = 'white'
}

else if(color == 'emerald'){
    qube2.style.background = 'orange'
    qube3.style.background = 'silver'
}

else if(color == 'Purple'){
    qube2.style.background = 'cyan'
    qube3.style.background = 'grey'
}

else if(color == 'blue'){
    qube2.style.background = 'green'
    qube3.style.background = 'white'
}

else if(color == 'green'){
    qube2.style.background = 'green'
    qube3.style.background = 'cyan'
}

else if(color == 'yellow'){
    qube2.style.background = 'darkblue'
    qube3.style.background = 'black'
}

else {
    qube2.style.background = 'black'
    qube3.style.background = 'black'
}



function clicker() {
    let current_count_block = document.getElementById('counter')
    let current_count = current_count_block.textContent
    let alert1 = document.getElementById('alert')
    current_count_block.innerText = Number(current_count) + 1
}