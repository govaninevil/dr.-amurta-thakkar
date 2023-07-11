$(document).on('ready', function () {
       

    $("#menu-button").on("click", function () {
        $("#menu-bar").toggleClass("show");
    });

    $("#mobile").on("click", function () {
        $("body").toggleClass("mobile");
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            $('header').addClass("small");
        } else {
            $('header').removeClass("small");
        }
    });

    $('.collage.body h3').each(function() {
        var tis = $(this), state = false, answer = tis.next('div').slideUp();
        tis.click(function() {
            state = !state;
            answer.slideToggle(state);
            tis.toggleClass('active',state);
        });
    });
    
    $('#certificate-slider').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            adaptiveHeight: true
    });

    

    


    
});