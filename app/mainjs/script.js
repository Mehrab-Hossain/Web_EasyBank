
const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const body = document.querySelector('.body');
const overlay = document.querySelector('.overlay');
const fadeElems= document.querySelectorAll('.has-fade');
btnHamburger.addEventListener('click',function(){
    console.log('open hamburger');
    if(header.classList.contains('open')){//close hamburger menu
        header.classList.remove('open');
        header.classList.remove('noscroll');
        fadeElems.forEach(function (element){
            element.classList.remove('fade-int');
            element.classList.add('fade-out');
        });
    }
    else{//open hamburger menu
        header.classList.add('open');
        header.classList.add('noscroll');
        fadeElems.forEach(function(element) {
            
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
        
    }
    
})