import $ from 'jquery';
import 'slick-carousel';
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


if (document.documentElement.clientWidth<576){
    document.getElementById('form-textarea').rows = 7;
    $('.section-work-container').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    })

    $('.section-services-wrapper').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    $('.section-clients-container').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });

}
   