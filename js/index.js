console.log('Welcome to project background color changer');

let container = document.querySelector('.container');
let btn = document.getElementById('btn');


// Change Backgound by clicking button
btn.addEventListener('click',()=>{
    console.log('This is a button');
let red = Math.floor(Math.random() * (200-1) + 1);
let green = Math.floor(Math.random() * (200-1) + 1);
let blue = Math.floor(Math.random() * (200-1) + 1);
console.log(red);
console.log(green);
console.log(blue);
container.style.backgroundColor = `rgb(${red},${green},${blue})`; 
});
