$(document).on('ready', function () {

    $("#menu-button").on("click", function () {
        $("#menu-bar").toggleClass("show");
    });

    $('.collage.body h3').each(function() {
        var tis = $(this), state = false, answer = tis.next('div').slideUp();
        tis.click(function() {
            state = !state;
            answer.slideToggle(state);
            tis.toggleClass('active',state);
        });
    });
});