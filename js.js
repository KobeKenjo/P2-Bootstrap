(function ($) {
    // $ identifie variable et fonctions
    $(document).ready(function(){
      
      // Cacher la navbar à l'affichage
      $(".navbar").hide();
      
      // Fonction qui dit quand apparaitre
      $(function () {
          $(window).scroll(function () {
              // Conditionne à partir d'où sort la navbar
              if ($(this).scrollTop() > 100) {
                  $('.navbar').fadeIn();
              } else {
                  $('.navbar').fadeOut();
              }
          });
      });
  });

  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 800) {
      $('.newsletter').fadeIn();
    } else {
      $('.newsletter').fadeOut();
    }
  });
    }(jQuery));