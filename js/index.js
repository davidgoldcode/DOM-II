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