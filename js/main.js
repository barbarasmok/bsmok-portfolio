const accordionHeading = document.querySelector('.accordionHeading');
const header = document.querySelector('.header');


//ACCORDION
$(".header").click(function () {
    $header = $(this);
    $content = $header.next();
    $content.slideToggle(500, function () {
        //execute this after slideToggle is done
    });

});

$(".header-Cyan").click(function () {
    $header = $(this);
    $content = $header.next();
    $content.slideToggle(500, function () {
        //execute this after slideToggle is done
    });

});


//NAV BAR
$(window).scroll(function() { 
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 300);
});

$(window).scroll(function() {
    if($(this).scrollTop() > 300) {
        $('.abc').addClass('ncol');
        $('.abc2').addClass('bcol');
        $('.abc3').addClass('ccol');
    } else {
        $('.abc').removeClass('ncol');
        $('.abc2').removeClass('bcol');
        $('.abc3').removeClass('ccol');
    }
});
    


//FORM
// $('.email-form button').on('click',  function(e) {
//     if ( $('.name-field').val() == '' && $('.email-field').val() == '' && $('.message-field').val() == '' ) {
//         e.preventDefault();
//         alert('please fill in the required fields.');
//     } else if ( $('.name-field').val() == '' ) {
//         e.preventDefault();
//         alert('please fill in the required fields.');
//     } else if ( $('.email-field').val() == '' ) {
//         e.preventDefault();
//         alert('please fill in the required fields.');
//     } else if ( $('.message-field').val() == '' ) {
//         e.preventDefault();
//         alert('please fill in the required fields.');
//     } else {
//         alert("Thank you for your message. Your email has been sent!");
//         header("Location: about.html");
//     }
// });

// //FORM VALIDATION
// $('.message-field').keyup(function() {
//     if ($('.name-field').val() !== '' && $('.email-field').val() !== '') {
//         $('.contact-form button').removeClass('disabled');
//     }
// });