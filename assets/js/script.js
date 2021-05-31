$(function(){
    $("a").click(function(event){
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $("html, body").animate({
          scrollTop: $(hash).offset().top
        }, 500, function(){
          window.location.hash = hash;
        });
      }
    });


    $('#navbarNav').on('show.bs.collapse', function() {
      $('#navbar-main').addClass('bg-dark');
    });

    $('#navbarNav').on('hidden.bs.collapse', function() {
      $('#navbar-main').removeClass('bg-dark');
    });
});


$(window).on('activate.bs.scrollspy', function(event, object) {
    if (object.relatedTarget === '#home') {
        $('#navbar-main').removeClass('bg-dark');
    }else if (!$('#navbar-main').hasClass('bg-dark')) {
        $('#navbar-main').addClass('bg-dark');
    }
});
