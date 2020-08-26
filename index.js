function onLoad() {
    setSectionBarWidth();
    listen();           
}

function setSectionBarWidth() {
    let sectionClass = '';
    let h2Width = 0;
    $("section").each(function(index) {
        sectionClass = $(this).attr('class').split(" ", 1);
        // sectionClass = sectionClass.split(" ", 1);
        h2Width = $(`.${sectionClass}`).find("h2").innerWidth();
        $(`.${sectionClass}`).find(".bar").width(h2Width);        
    })
}

function listen() {
    $("nav").on('click', '.page-link', goToSection );
    $(".hero").on('click', '.anchor-link', goToSection );
    $(window).on('scroll', activateNav );
}

function goToSection() {
    let anchorID = $(this).attr("data-dest");    
    $('html, body').animate({
        scrollTop: $(anchorID).offset().top - 50
      }, 400);    
    highlightLink(anchorID);    
}

function activateNav() {    
    let pos = $(window).scrollTop();
    let pos2 = pos + 51; //acount for fixed menu

    
    if (pos2 > $('#home-anchor').offset().top) {highlightLink('#home-anchor'); }
    if (pos2 > $('#about-anchor').offset().top)      { highlightLink('#about-anchor'); }
    if (pos2 > $('#projects-anchor').offset().top)      { highlightLink('#projects-anchor'); }
    if (pos2 > $('#contact-anchor').offset().top ||
        pos + $(window).height() === $(document).height()) {
          highlightLink('#contact-anchor');
    }
}

function highlightLink(anchor) {
    $('nav .active').removeClass('active');
    $("nav").find(`[data-dest="${anchor}"]`).addClass('active');
  }

$(onLoad)