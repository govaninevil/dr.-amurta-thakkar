$(document).on('ready', function () {

    

    $("#menu-button").on("click", function () {
        $("#menu-bar").toggleClass("show");
    });

    $("#mobile").on("click", function () {
        $("body").toggleClass("mobile");
    });

    $('.collage.body h3').each(function() {
        var tis = $(this), state = false, answer = tis.next('div').slideUp();
        tis.click(function() {
            state = !state;
            answer.slideToggle(state);
            tis.toggleClass('active',state);
        });
    });

    $('#parentVerticalTab').easyResponsiveTabs({
        type: 'vertical', //Types: default, vertical, accordion
        width: 'auto', //auto or any width like 600px
        fit: true, // 100% fit in a container
        tabidentify: 'hor_1', // The tab groups identifier
        activate: function(event) { // Callback function if tab is switched
            var $tab = $(this);
            var $info = $('#nested-tabInfo');
            var $name = $('span', $info);
            $name.text($tab.text());
            $info.show();
        }
    }); 

    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            $('header').addClass("small");
        } else {
            $('header').removeClass("small");
        }
    });

    
    
    $('#certificate-slider').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            adaptiveHeight: true
    }); 

     // tabbing
    
});
$(document).on('ready', function () {
   
});