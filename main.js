const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let activeNumber = 1; 

next.addEventListener('click', () => {
    
    activeNumber++; 
   
    if(activeNumber > circles.length) {
        activeNumber = circles.length; 
    } 

    update(); 
})

prev.addEventListener('click', () => {
    
    activeNumber--; 

    if(activeNumber < 1) {
        activeNumber = 1; 
    } 

    update(); 
})

function update() { 
    circles.forEach((circle, idx) => {
        if(idx < activeNumber) {
            circle.classList.add('active'); 
        } else {
            circle.classList.remove('active');
        }

    }) 

    const actives = document.querySelectorAll('.active'); 

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'; 

    if (activeNumber === 1) {
        prev.disabled = true; 
    } else if (activeNumber === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false; 
    }
    
}