/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
const sections = document.querySelectorAll('section');
const fragment = document.createDocumentFragment();

/**
 * End Global Variables
 * Start Helper Functions
 *
*/
function buildMenu() {
    for (let i=0; i < sections.length; i++){
        console.log(i+1);
        const menu = document.createElement('li');
        const name = sections[i].getAttribute('data-nav')
        const id = sections[i].getAttribute('id')
        menu.innerHTML = `<a class ="menu__link" data-id="${id}">${name}</a>`;
        fragment.appendChild(menu);
    }
    const navBarList = document.getElementById('navbar__list')
    navBarList.appendChild(fragment);
}


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu
buildMenu()

// Scroll to section on link click
const navBar = document.getElementById('navbar__list')
navBar.addEventListener('click', function(event){
    if(event.target.nodeName === 'A'){
        const id = event.target.getAttribute('data-id');
        const sectionTo = document.getElementById(id);
        sectionTo.scrollIntoView({behavior: "smooth"});
    }
})

// Set sections as active
function isShown (el) {
    var rect     = el.getBoundingClientRect(),
        vWidth   = window.innerWidth || document.documentElement.clientWidth,
        vHeight  = window.innerHeight || document.documentElement.clientHeight,
        efp      = function (x, y) { return document.elementFromPoint(x, y) };

    // Return false if it's not in the viewport
    if (rect.right < 0 || rect.bottom < 0
            || rect.left > vWidth || rect.top > vHeight)
        return false;

    // Return true if any of its four corners are visible
    return (
          el.contains(efp(rect.left,  rect.top))
      ||  el.contains(efp(rect.right, rect.top))
      ||  el.contains(efp(rect.right, rect.bottom))
      ||  el.contains(efp(rect.left,  rect.bottom))
    );
};

function SetSectionAsActive() {

    for (let i=0; i < sections.length; i++){
        if (isShown(sections[i])){
            sections[i].classList.add("your-active-class");
            console.log('SetSectionAsActive add ' + (i+1));
        }else{
            sections[i].classList.remove("your-active-class");
            console.log('SetSectionAsActive remove ' + (i+1));
        }
    }
}

document.addEventListener('scroll', function(){
    SetSectionAsActive();
});
