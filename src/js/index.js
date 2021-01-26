import $ from 'jquery';
import 'slick-carousel';
import '../scss/style.scss';

var firebaseConfig = {
    apiKey: "AIzaSyBVDtZsFiYZGPkk8oUdq71J3J6AnCh_32U",
    authDomain: "test-29c18.firebaseapp.com",
    projectId: "test-29c18",
    storageBucket: "test-29c18.appspot.com",
    messagingSenderId: "73861637376",
    appId: "1:73861637376:web:5c85b0c88c33ee552f3fe5",
    measurementId: "G-CWEXC6CLV8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const messaging = firebase.messaging();

messaging.getToken({ vapidKey: '<YOUR_PUBLIC_VAPID_KEY_HERE>' }).then((currentToken) => {
    if (currentToken) {
        // Send the token to your server and update the UI if necessary
        // ...
        console.log(currentToken)
    } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
        // ...
    }
}).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // ...
});

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
   