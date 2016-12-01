$(document).ready(function () {



/*$(document).ready(function() {

    $('.tagLineHead').hide().fadeIn("400");
    $('.tagLineOverview').hide().fadeIn("50000");
});

$("#mckadeIcon").each(function() {
    var src = $(this).data("src");
    if (src) {
        var img = new Image();
        img.style.display = "none";
        img.onload = function() {
            $(this).fadeIn(1000);
        };
        $(this).append(img);
        img.src = src;
    }
});*/

/*jQuery(element).animate({opacity: 1.0}, 500);*/

/* $(window).scroll(function() {
        $('#mckadeIcon').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+400) {
                $(this).addClass(".mckadeIcon");
            }
        });
    });*/

function isScrolledIntoView(elem)
{
    var centerY = Math.max(0,((jQuery(window).height()-jQuery(elem).outerHeight()) / 2)
                  + jQuery(window).scrollTop());

    var elementTop = jQuery(elem).offset().top;
    var elementBottom = elementTop + jQuery(elem).height();

    return elementTop <= centerY && elementBottom >= centerY;
}

jQuery(window).on("scroll resize", function() {
    jQuery("#skills").each(function(index, element) {
        if (isScrolledIntoView(element)) {
           $('#header').animate({background: 'rgb(51, 102, 204)'});
           animateBars();
        }
    });
});

$('#navSkills').click(function(){
    $('html, body').animate({
        scrollTop: $('#skills').offset().top - 70
    }, 1000)
});

$('#navContact').click(function(){
    $('html, body').animate({
        scrollTop: $('#contact').offset().top
    }, 1000)
});

$('#footerNavItemSkills').click(function(){
    $('html, body').animate({
        scrollTop: $('#skills').offset().top - 70
    }, 1000)
});

$('#footerNavItemContact').click(function(){
    $('html, body').animate({
        scrollTop: $('#contact').offset().top
    }, 1000)
});


function animateImage(){
    $('#mckadeIcon').animate({visibility:'visible'});
}

function animateBars(){
    $('#bar1').animate({height:'400'});
    $('#bar2').animate({height:'300'});
    $('#bar3').animate({height:'300'});
    $('#bar4').animate({height:'150'});
}

});
