var flag = 0;
var is_M = 0;
var is_N = 0;
$(".menu-frame").hide();

$('#Night').on('click', function() {
  if (!is_N) {
    $('.left').css('background-color', 'rgb(45, 45, 45)');
    $('.right').css('background-color', 'rgb(60, 60, 60)');
    $('.night').css('color', 'white');
    $('.bc-2').css('background-color', 'rgb(90, 90, 90)');
    $('.bc-2').css('border', '0.1px solid rgb(95, 95, 95)');
    $('.bc-2').css('color', 'white');
    $('.frame').css('background-color', 'rgb(75, 75, 75)');
    $('.frame').css('color', 'white');
    $('.frame').css('border', '0.1px solid rgb(65, 65, 65)');
    $('.menu').css('background-color', 'rgb(35, 35, 35)');
    $('.menu-frame').css('background-color', 'rgb(75, 75, 75)');
    $('.menu-img').css('filter', 'invert()');
    $('.code').css('background-color', 'rgb(35, 35, 35)');
    $('.claim').css('background-color', 'rgb(65, 65, 65)');
    $('.cl-in-n').css('border-bottom', '1px solid white');
    $('.bc-n').css('background-color', 'rgb(85, 85, 85)');
  } else {
      $('.left').css('background-color', 'rgb(249, 249, 249)');
      $('.right').css('background-color', 'rgb(246, 246,246)');
      $('.night').css('color', 'black');
      $('.bc-2').css('background-color', 'rgba(241, 241, 241, 1)');
      $('.bc-2').css('border', '0.01px rgb(241, 241, 241) solid');
      $('.bc-2').css('color', 'black');
      $('.frame').css('background-color', 'white');
      $('.frame').css('color', 'black');
      $('.frame').css('border', '0.01px rgb(241, 241, 241) solid');
      $('.menu').css('background-color', 'rgb(255, 255, 255)');
      $('.menu-frame').css('background-color', 'white');
      $('.menu-img').css('filter', 'none');
      $('.code').css('background-color', 'white');
      $('.claim').css('background-color', 'white');
      $('.cl-in-n').css('border-bottom', '1px solid black');
      $('.bc-n').css('background-color', 'rgb(244, 244, 244)');
  }
  is_N = !is_N;
  $(".menu-frame").hide();
});


$(document).mouseup(function(e) {
  var container = $(".menu-frame");
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    container.css("display", "none");
  }
});
document.addEventListener('scroll', function() {
  if (!is_M) {
    $('html,body').animate({
      scrollTop: 0
    }, 1000);
  }
});



$('.menu').on('click', function() {
  $(".menu-frame").show();
});

function check() {
  if ($(document).width() < 768) {
    is_M = 1;
  } else {
    is_M = 0;
  }
  console.log(is_M);
}

$(window).resize(check);
check();

$('.code-frame').fadeOut(0);
$('.cl-bc').fadeOut(0);


$('.code').css('transform', 'translateY(780px)');
$('.claim').css('transform', 'translateY(780px)');


$('.code-close').on('click', function() {
  $('.code-frame').fadeOut(400, 'swing');
  $('.code').css('transform', 'translateY(-780px)');
  $('.cl-bc').fadeOut(400, 'swing');
});

$('.code-close-m').on('click', function() {
  $('.code-frame').fadeOut(400, 'swing');
  $('.code').css('transform', 'translateY(780px)');

  $('.claim').css('transform', 'translateY(780px)');
  $('.cl-bc').fadeOut(400, 'swing');
});

$('.sub-button').on('click', function() {
  $('.code-frame').fadeIn(400, 'swing');
  $('.code').css('transform', 'translateY(0px)');
});

$('#Key').on('click', function() {
  $('.code-frame').fadeIn(400, 'swing');
  $('.code').css('transform', 'translateY(0px)');
  $(".menu-frame").hide();
});

$('#Remove').on('click', function() {
  $('.cl-bc').fadeIn(400, 'swing');
  $('.claim').css('transform', 'translateY(0px)');
  $(".menu-frame").hide();
});



function overck() {
  var text = document.getElementsByTagName('p');
  console.log(text[0].offsetHeight);
}

overck();

$('.frame').on('dblclick', function() {
  console.log($(this).children('.r1').children('p'));
  var obj = $(this).children('.r1').children('p');
  var stat = $(obj).data("Active");
  if (stat) {
    console.log("비활성화");
    $(obj).css('max-height', '210px');
    $(obj).css('display', '');
    $(obj).css('overflow', 'hidden');
  } else {
    console.log('활성화');
    $(obj).css('max-height', 'auto');
    $(obj).css('display', 'inline-block');
    $(obj).css('overflow', 'visible');
  }

  $(obj).removeData("Active");
  $(obj).data("Active", !stat);
  console.log("상태 : " + $(obj).data("Active"));
});


function push() {
  $('p').data("Active", 0);
  return 0;
}
