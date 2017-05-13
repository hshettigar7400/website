$(function () {


  $(window).scroll(function (event) {
    Scroll();
  });


  function Scroll() {
    var contentTop = [];
    var contentBottom = [];
    var winTop = $(window).scrollTop();
    var rangeTop = 200;
    var rangeBottom = 500;
    $('.navbar-collapse').find('.scroll a').each(function () {
      if($($(this).attr('href')).offset() != undefined) {
        contentTop.push($($(this).attr('href')).offset().top);
        contentBottom.push($($(this).attr('href')).offset().top + $($(this).attr('href')).height());
      }
    })
    $.each(contentTop, function (i) {
      if (winTop > contentTop[i] - rangeTop) {
        $('.navbar-collapse li.scroll')
        .removeClass('active')
        .eq(i).addClass('active');
      }
    })
  };


  $('.navbar-collapse ul li a, .welcome a').click(function () {
    if($(this.hash).offset() != "undefined" && $(this.hash).offset() != undefined) {
      $('html, body').animate({
        scrollTop: $(this.hash).offset().top - 115
      }, 1000);
      return false;
    }
  });


  $(window).load(function () {
    'use strict';
    var $portfolio_selectors = $('.portfolio-filter >li>a');
    var $portfolio = $('.portfolio-items');
    $portfolio.isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    $portfolio_selectors.on('click', function () {
      $portfolio_selectors.removeClass('active');
      $(this).addClass('active');
      var selector = $(this).attr('data-filter');
      $portfolio.isotope({
        filter: selector
      });
      return false;
    });

    $('.flexslider').flexslider({
      animation: "fade"
    });
  });

  new WOW().init();
  smoothScroll.init();

  $("#main-contact-form").submit(function(event) {
    event.preventDefault();
  });

  $('#btnSendEmail').click(function(){
    if($("#name").val() != "" && $("#email").val() != "" && $("#phone").val() != "" && $("#messege").val() != "") {
      if(validateEmail($("#email").val())) {
        if(validateTel($("#phone").val())) {
          $.ajax({
            url: 'SendEnquiry.php', // point to server-side PHP script
            dataType: 'text',  // what to expect back from the PHP script, if anything
            type: 'post',
            data: {
              Name: $("#name").val(),
              EmailId: $("#email").val(),
              Contact: $("#phone").val(),
              Messege: $("#messege").val()
            },
            success: function (data) {
              $("#name").val('');
              $("#email").val('');
              $("#phone").val('');
              $("#messege").val('');
              $(".contact-form").hide();
              $(".contactus-feedback").show();
            }
          });
        }
      }
    }

  });

  function validateEmail($email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test( $email );
  }
  function validateTel($tel) {
    var telReg = /^[0-9]*$/;
    return telReg.test( $tel );
  }


  $("a[rel^='prettyPhoto']").prettyPhoto({
    social_tools: false
  });

  $(".read-more").on("click", function(){
    $(".read-more__content").removeClass("hidden-section");
    $(this).parent().hide();
  })

});
