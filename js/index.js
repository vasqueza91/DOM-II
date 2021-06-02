// Your code goes here
const nav = document.querySelector('.nav a');
const busImg = document.querySelector('.intro img')
const tContent = document.querySelector('.text-content p')
const btn = document.querySelector('.btn')
const destination = document.querySelector('.content-destination p')

nav.addEventListener('mouseenter', (event) => {
    console.log('How are you.');
});

nav.addEventListener('click', (event) => {
    nav.style.color = 'blue';
}); 

busImg.addEventListener('click', function (event) {
    busImg.style.width = '20%';
});

document.addEventListener('keydown', function (event) {
    if(event.key === 'Shift'){
        busImg.style.width = '100%';
    }
})

tContent.addEventListener('mouseover', function (event) {
    tContent.style.color = 'red';
});

tContent.addEventListener('mouseleave', function (event) {
    tContent.style.color = 'blue';
});

btn.addEventListener('click', function (event) {
    btn.style.height = '100%';
})
btn.addEventListener('dblclick', function (event) {
    btn.style.height = null;
})

document.addEventListener('pointerdown', function (event) {
    if (event.pressure == 0) {
      // No pressure
      destination.style.color = 'blue';
    } else if (event.pressure == 1) {
      // Maximum pressure
      destination.style.color = 'orange';
    } else {
      // Default
      null;
    }
  }, false);

  document.addEventListener('keyup', function (event) {
    if(event.key === 'Escape'){
        destination.style.color = 'orange';
    }
})