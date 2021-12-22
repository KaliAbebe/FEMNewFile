/*
====================================
|   |   |   | Preloader
====================================
*/
$(window).on('load', function () { //this $(window).on ('load' make sure to load whole site to active jquer 
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});


/*
====================================
|   |   |   | Team
====================================
*/
$(function () {
    $('#team-members').owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        
        responsive:{
            //Breakout from 0 up
            0:{
                items: 1
            },
            
            ////Breakout from 480 up
            480:{
                items: 2
            }
        }
    });
});
/*
====================================
|   |   |   | Progress-bar
====================================
*/
$(function () {

    $('#progress-element').waypoint(function () {
        $('.progress-bar').each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1000);
        });
        this.distroy();
    }, {
        offset: 'bottom-in-view'
    });

});

/*
====================================
|   |   |   | Responsive-Tabs
====================================
*/
$(function () {
    $('#services-tabs').responsiveTabs({
        animation: 'slide'
    });
});

/*
====================================
|   |   |   | Portfolio
====================================
*/
$(window).on('load', function () {
    //Initialize Isotope
    $('#isotope-container').isotope({

    });
    //filters item on button click
    $('#isotope-filters').on('click', 'button', function () {
        //get filter value
        var filterValue = $(this).attr('data-filter');

        //filter portfolio items
        $('#isotope-container').isotope({
            filter: filterValue
        });

        //Active button
        $('#isotope-filters').find('.active').removeClass('active');
        $(this).addClass('active');


    });


});


/*
====================================
|   |   |   | Magnific
====================================
*/
$(function () {

    $('#portfolio-warpper').magnificPopup({
        delegate: 'a', //child items selector,by clicking itpopup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });

});

/*
====================================
|   |   |   | Testimonial
====================================
*/

$(function () {
    $('#testimonial-slider').owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});


/*
====================================
|   |   |   | Stats Counter
====================================
*/
$(function () {

    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });

});

/*
====================================
|   |   |   | Client Slider
====================================
*/

$(function () {
    $('#clients-list').owlCarousel({
        items: 6,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive:{
            //Breakout from 0 up
            0:{
                items: 2
            },
            
            ////Breakout from 480 up
            480:{
                items: 3
            },
            
            ////Breakout from 768 up
            768:{
                items: 6
            }
        }
    });
});

/*
====================================
|   |   |   | Google Map
====================================
*/

/*$(window).on('load', function () {
    //Map Variable
    var addressString ='EEE-LAB.COM, Eee-Lab.Com, Dhaka 1216';
    var myLatlng={Lat:38.415860,lng:-0.611400};
    
    //1. Render Map
    var map = new google.maps.Map(document.getElementById('map'),{
        zoom:11,
        center: myLatlng
    });
    
    //2. Marker
    var marker = new google.maps.Marker({
        position:myLatlng,
        map: map
    });
}); */




/*
====================================
|   |   |   | White Navigation
====================================
*/


$(function () {

    //show/hide nav on page load

    showHideNav();


    $(window).scroll(function () {

        showHideNav();

    });


    function showHideNav() {

        //Show white Bar

        if ($(window).scrollTop() > 50) {
            $('nav').addClass('white-nav-top');

            //Dark Logo

            $('.navbar-brand img').attr('src', 'img/logo/logo-dark.png');

            //Show back to top button
            $('#back-to-top').fadeIn();

        } else {

            //Show dark bar
            $('nav').removeClass('white-nav-top');


            //Normal Logo
            $('.navbar-brand img').attr('src', 'img/logo/logo.png');
            
            //Hide back to top
            $('#back-to-top').fadeOut();

        }


    }


});



/*
====================================
|   |   |   | Smooth Scroll
====================================
*/


$(function () {

    
    $('a.smooth-scroll').click(function(event){
        
        event.preventDefault();
        
        //get section id #about, #services, #work, #team,#blog,#contact
        
        var seaction_id = $(this).attr('href');
        
        $('html,body').animate({
            scrollTop: $(seaction_id).offset().top - 64
            
            
        },1250,'easeInOutExpo');
        
        
    });
    
    
}); 


/*
====================================
|   |   |   | Mobile Menu
====================================
*/
$(function () {

    //show mobile navigation
    $('#mobile-nav-open-btn').click(function(){
        
        $('#mobile-nav').css('height','100%');
        
    });
    
    
    //hide mobile navigation
    
    $('#mobile-nav-close-btn, #mobile-nav a').click(function(){
        
        $('#mobile-nav').css('height','0%');
        
    });
    
});


/*
====================================
|   |   |   | Animation
====================================
*/
//ANIMATION ON SCROLL
$(function () {

    new WOW().init();
    
});

//Home animation for home

$(window).on('load', function () {
    $('#home-heading-1').addClass('animated fadeInDown');
    $('#home-heading-2').addClass('animated fadeInLeft');
    $('#home-text').addClass('animated zoomIn');
    $('#home-button').addClass('animated zoomIn');
    $('#arrow-down i').addClass('animated fadeInDown infinite');
});

















































