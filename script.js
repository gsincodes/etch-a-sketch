let container = document.getElementById('container');
let utility = document.createElement('div');
container.appendChild(utility);

let sketchArea = document.createElement('div');
container.appendChild(sketchArea);

let custom = document.createElement('button');
custom.textContent = 'custom';
utility.appendChild(custom);

sketchPad();

custom.addEventListener('click', ()=>{
    sketchArea.innerHTML = '';
    let box = prompt('Enter your custom grid: ');
    if(box>100){
        alert('nah bro keep it less than 100');
    }else{
        sketchPad(box);
    }
})

function sketchPad(box=16){
    
    for(let i=1 ; i<=box; i++){
        let rowDiv = document.createElement('div');
        rowDiv.setAttribute('id', 'row');
        // rowDiv.style.border = '1px solid black';
        sketchArea.appendChild(rowDiv);
        
        for(let j=1; j<=box; j++){
            let square = document.createElement('div');
            square.setAttribute('id', 'grid');
            square.style.border = '1px solid black';
            rowDiv.appendChild(square);
            
            square.addEventListener('mouseenter',(e)=>{
            let red = Math.random() * 255;
            let green = Math.random() * 255;
            let blue = Math.random() * 255;
            square.style.backgroundColor = `rgb(${red},${green},${blue})`;
            });
        }
    }
}

// let grid = document.querySelector('div');
// grid.addEventListener('mouseover', (event) => {
//     grid.style.backgroundColor = "black";
//     console.log(event.clientX, event.clientY,event.type);
// });
