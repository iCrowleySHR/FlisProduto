$(document).ready(function () {
  $('.carousel').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev">Anterior</button>',
      nextArrow: '<button type="button" class="slick-next">Próxima</button>',
  });

  $('.texto-carousel').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.carousel',
  });
});
