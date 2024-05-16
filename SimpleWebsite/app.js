/*
    From Microsoft:
    JavaScript was designed to be easy to learn 
    and allows certain mistakes to be made by the developer. 
    For example, JavaScript doesn't throw an error 
    when you use a misspelled variable, and instead creates 
    a new global one. When you start learning JavaScript, 
    having fewer errors is convenient. However, it can lead 
    to writing code that is harder for browsers to optimize 
    and harder for you to debug.
*/

'use stric';

//adding an EventHandler

/*An event handler is a way to run a JavaScript 
function when an event happens on the page
*/

//use document.querySelector to get the button reference.
const switcher = document.querySelector('.btn');
//switcher is now a reference to the button in the page.

switcher.addEventListener('click', function(){

    /*
    the toggle method is used to modify the <body> element's class 
    attribute. This method automatically adds or removes 
    the light-theme and dark-theme classes. 
    
    This code applies the dark styles instead of light styles 
    on click, and then light styles instead of dark 
    if you click again.    
    */

    document.body.classList.toggle('light-theme');    
    document.body.classList.toggle('dark-theme');

    
    //retrieve active body class name to change btn txt
    const className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }

    //print to console the active class
    console.log('current class name: ' + className);
});