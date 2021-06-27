const menuIcon = document.querySelector('.menu__toggle');
const closeIcon = document.querySelector('.close__menu');
const navMenu = document.querySelector('.nav__menu');
const header = document.querySelector('.header');


// AOS
AOS.init();

const sticky = () => {
    header.classList.toggle('sticky__header', window.scrollY > 170);
}

menuIcon.onclick = () => {
    navMenu.classList.add('active');
}


navMenu.onclick = (e) => {
    if(e.target.id !== 'navList') {
        navMenu.classList.remove('active');
    }
    
}

closeIcon.onclick = (e) => {
    const target = e.target;
    
    if(target.id === 'nav' || 'closeBtn') {
        navMenu.classList.remove('active');
    }
}

contactSubmit = (e) => {
    alert("Please Contact Us via Email or Phone.");
    e.preventDefault();
}

window.addEventListener('scroll', sticky);

// function initMap() {
//     var dumbo = {lat: 40.700802, lng:73.987602};
//     var mapOptions = {
//         center: dumbo,
//         zoom: 10
//     };
//     var googlemap = new google.maps.Map(document.getElementById("map"), mapOptions);
// }
// var googlemap = new google.maps.Map(document.getElementById("map"), mapOptions);
//             var marker = new google.maps.Marker({
//                 position: siliconValley,
//                 map: googlemap
//             });


$('.facts__number').each(function () {
    $(this).prop('Counter',0).animate({
    Counter: $(this).text()
    }, {
    duration: 10000,
    easing: 'swing',
    step: function (now) {
    $(this).text(Math.ceil(now));
    }
    });
});

// slick slider
$('.clients__wrapper').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: $('.prev__arrow'),
    nextArrow: $('.next__arrow'),

    responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            
          }
        },
        {
          breakpoint: 740,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 520,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
       
      ]
})