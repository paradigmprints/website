$(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos > winTop + 0) {
          $(this).addClass("slide");
        }
    });
  });