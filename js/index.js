// Your code goes here

// #1
// make bus img disappear 
const bus = document.querySelector('.intro img');

bus.addEventListener('mouseover', function(event) {
    bus.style.display = 'none'
})

// #2 
// make h2 bigger on click
const allTitles = document.querySelectorAll('h2')

allTitles.forEach(el => {
    el.addEventListener('dblclick', function(item) {
        el.style.color = 'green'
    })
}) 

// #3
// make logo heading add the word funner when selected
const logoHeading = document.querySelector('.logo-heading')

logoHeading.addEventListener('click', function(item) {
    logoHeading.classList.add('the-title')
    logoHeading.style.color = 'red'
})

// #4
// Dark Mode: Turn background black & text white

const allItems = Array.from(document.getElementsByTagName('*'))

allItems.forEach(function(item) {
    item.addEventListener('copy', function(el) {
        item.style.backgroundColor = 'black'
        item.style.color = 'white'
        console.log(allItems);
    })
})

// #5
// black and white the images when cursor leaves image

const allImgs = document.querySelectorAll('img')

allImgs.forEach(el => {
    el.addEventListener('mouseleave', function(item) {
        el.style.filter = 'grayscale(100%)';
    })
})

// #6
// make image larger if wheel'd on
const lastImg = document.querySelector('.rounded')

lastImg.addEventListener('wheel', function(item) {
    lastImg.classList.add('round');
})

// #7
// Footer text gets bigger once right clicked
const footer = document.querySelector('footer p')

footer.addEventListener('contextmenu', function(item) {
    footer.classList.toggle('round')
})

// #8 
// rainbow text when mouse is over text
const penImg = document.querySelector('.content-destination p')

penImg.addEventListener('mousemove', function(item) {
    penImg.classList.add('rainbow')
})

// #9 
// delete banner text when selected
const navHome = document.querySelector('a')

navHome.addEventListener('select', event => {
    navHome.style.display = 'none'
})