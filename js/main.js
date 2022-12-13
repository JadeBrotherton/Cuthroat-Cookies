$(document).ready(() => {

  $('.menu-button').on('click',() => {
    $('.menu-button').addClass('button-active');
    $('.nav-menu').slideToggle('slow');
    $('.login-form').hide();
    $('.login-button').removeClass('button-active');
  });
  
  $(".login-button").on("click", () => {
    $('.login-button').addClass('button-active')
    $(".login-form").slideToggle('slow');
    $('.nav-menu').hide();
    $('.menu-button').removeClass('button-active');
  });

  $(".contact-button").on("click", () => {
    $('.contact-button').toggleClass('button-active');
    $(".contact-form").slideToggle('slow');
  });
  
  $('.product-photo').on('mouseenter', event => {
    $(event.currentTarget).addClass('photo-active')
  }).on('mouseleave', event => {
    $(event.currentTarget).removeClass('photo-active')
  });

  $('.more-details-button').on('click', event => {
    $(event.currentTarget).find('img').toggleClass('rotate');
    $(event.currentTarget).closest('.product-details').next().slideToggle();
  });

  $('.purchase-details li').on('click', event => {
    $(event.currentTarget).addClass('active');
    $(event.currentTarget).siblings().removeClass('active');
    $(event.currentTarget).closest('.purchase-details').find('.buy-now-button').fadeIn();
    $(event.currentTarget).closest('.purchase-details').children().removeClass('disabled');
  });

  $('.buy-now-button').on('click', event => {
    $('.items-qty').html(function(i, val) {
      return val*1+1
    })
    $('.shopping-cart').show();
    $(event.currentTarget).closest('.purchase-details').hide();
    $(event.currentTarget).closest('.purchase-details').find('.buy-now-button').hide();
    $('.more-details-button').find('img').removeClass('rotate');
  });


});