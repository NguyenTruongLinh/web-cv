$(document).ready(function() {

    /*------------------------
    Page Loader
    --------------------------*/
    // jQuery("#load").fadeOut();
    // jQuery("#loading").delay(0).fadeOut("slow");

    /*------------------------
    Icon Menu Mobile
    --------------------------*/
    $('#nav-icon3').click(function(){
        $(this).toggleClass('open');
        $('.menu').slideToggle(200);
        $('body').toggleClass('overflow-hidden');
    });

    /*------------------------
    Progress Bar
    --------------------------*/
    setTimeout(function() {
        $('.iq-progress-bar').each(function () {
            $(this).find('.id').animate({
                width: $(this).attr('data-percent')
            }, 2000);
        });
    }, 1000);

    /*------------------------
    Typer
    --------------------------*/
    var win = $(window),
        foo = $('#typer');
    foo.typer(['<h1><span class="iq-font-purple">Frontend</span> Developer</h1>', '<h1>Web <span class="iq-font-purple">Developer</span></h1>']);



});