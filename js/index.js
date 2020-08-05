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
// delete banner text when cut
const navHome = document.querySelector('p')

navHome.addEventListener('cut', event => {
    navHome.style.display = 'none'
})


// #10
// change body background to purple with q key
let body = document.querySelector('body');

document.addEventListener('keydown', event => {
    // if the key pressed was ESC, dismiss the modal, otherwise nothing
    debugger
    if (event.key === 'q') {
      body.style.backgroundColor = 'purple'
    } 
  })
  
//  Nest two similar events somewhere in the site and prevent the event propagation properly. Remember not all event types bubble.

const destination = document.querySelectorAll('.btn')

destination[0].addEventListener('click', function(event) {
    debugger
    destination[0].style.color = 'red'
    event.stopPropagation();
})

destination[1].addEventListener('click', function(event) {
    debugger
    destination[1].style.color = 'red'
    event.stopPropagation();
})

destination[2].addEventListener('click', function(event) {
    debugger
    destination[2].style.color = 'red'
    event.stopPropagation();
})

//  Stop the navigation items from refreshing the page by using preventDefault()
const navItems = document.querySelectorAll('nav')

navItems.forEach(function(item) {
    item.addEventListener('click', function(e) {
        item.preventDefault();
})
})