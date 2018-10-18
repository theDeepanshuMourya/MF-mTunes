// Responsive navbar
$(function() {
	menu = $('nav ul');

  $('#openup').on('click', function(e) {
    e.preventDefault(); menu.slideToggle();
  });

  $(window).resize(function(){
    var w = $(this).width(); if(w > 580 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });

  $('nav li').on('click', function(e) {
    var w = $(window).width(); if(w < 580 ) {
      menu.slideToggle();
    }
  });
  $('.open-menu').height($(window).height());
});

// Smooth Scrolling
$('.cf a').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top
      },
      800,
      function() {
        window.location.hash = hash;
      }
    );
  }
});

// Transitions
window.sr = ScrollReveal();
sr.reveal('.cf',{
	duration: 2000,
	origin: 'bottom'
});

sr.reveal('.section-main',{
	duration: 2000,
	origin: 'bottom',
	distance: '10px'
});

sr.reveal('#music',{
	duration: 1000,
	origin: 'bottom',
	distance: '10px'
});

sr.reveal('.btn-primary',{
	duration: 2500,
	delay: 500,
	origin: 'bottom'
});

sr.reveal('#video',{
	duration: 2000,
	origin: 'bottom',
	distance: '10px'
});

sr.reveal('.btn-secondary',{
	duration: 2500,
	delay: 500,
	origin: 'bottom'
});

sr.reveal('#entertainment',{
	duration: 2000,
	origin: 'bottom',
	distance: '10px',
	viewFactor: 0.3
});

sr.reveal('.left', {
  duration: 2000,
  origin:'bottom',
  viewFactor: 0.3
});

sr.reveal('.right', {
	duration: 2000,
	origin: 'bottom',
	distance:'10px',
	viewFactor: 0.3
});
