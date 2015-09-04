function HideElement(){
  $( ".dd-button-label" ).text( "Close" );
}

function ShowElement(){
  $( ".dd-button-label" ).text( "Show" );
}

function ToggleElement(){
  $(".dd-button").on('click', function(){
    $(".drop-down-element").toggle();
      if($( ".dd-button-label" ).text() == 'Close'){
      ShowElement();
    }else {
      HideElement();
    }
  });
}

$(document).ready(function() {
// Slider adapted from Javascript & jQuery by Jon Duckett (Wiley, 2014)

  $('.slider').each(function() {
    var $this = $(this);
    var $group = $this.find('.slide-group');
    var $slides = $this.find('.slide');
    var buttonArray = [];
    var currentIndex = 0;
    var timeout;

  function move(newIndex) {
    var animateLeft, slideLeft;

    advance();

    if ($group.is(':animated') || currentIndex === newIndex) {
      return;
    }

    buttonArray[currentIndex].removeClass('active');
    buttonArray[newIndex].addClass('active');

    if (newIndex > currentIndex) {
      slideLeft = '100%';
    } else {
      slideLeft = '-100%';
      animateLeft = '100%';
    }

    $slides.eq(newIndex).css( {left: slideLeft, display: 'block'});
    $group.animate( {left: animateLeft}, function() {
      $slides.eq(currentIndex).css( {display: 'none'} );
      $slides.eq(newIndex).css( {left: 0} );
      $group.css( {left: 0} );
      currentIndex = newIndex;
    });
  }

  function advance() {
      clearTimeout(timeout);

      timeout = setTimeout(function(){
        if (currentIndex < ($slides.length-1)) {
          move(currentIndex + 1);
        } else {
          move(0);
        }
      }, 7000);
  }

  $.each($slides, function(index) {
    var $button = $('<button type="button" class="slide-btn">&bull;</button>');
    if (index === currentIndex) {
      $button.addClass('active');
    }
    $button.on('click', function() {
      move(index);
    }).appendTo($this.find('.slide-buttons'));
    buttonArray.push($button);
  });

  advance();
   
  });

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
  });

  ToggleElement();

});

