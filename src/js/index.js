import $ from 'jquery';
import '../scss/style.scss';

  



function isAnyPartOfElementInViewport(el) {

    const rect = el.getBoundingClientRect();
    
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);
   
    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

    return (vertInView && horInView);
}

let arr = document.querySelectorAll('section');

$('.section-outer').css('opacity', '0');
$(`#${arr[0].getAttribute('id')}`).fadeTo(800, 1);

window.addEventListener('scroll', function () {    
    for (let i = 1; i < arr.length;i++){
        if (isAnyPartOfElementInViewport(arr[i])) {
            $(`#${arr[i].getAttribute('id')}`).fadeTo(800, 1);
        }
    } 
});




























// window.addEventListener('scroll', function () {
//     console.log(window.scrollY + 'px');
// });

// let arr = document.getElementsByClassName('section-outer');

// for(let i=0;i<document.getElementsByClassName('section-outer').length;i++){
//     console.log(arr[i], arr[i].offsetTop);    
// }

// $(window).scroll(function () {
//     if ($(window).scrollTop() > 100) {
//         $('.section - about').addClass('visible animated fadeIn');
//     }

// })

