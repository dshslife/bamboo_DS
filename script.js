var flag = 0;
var is_M = 0;
$(".menu-frame").hide();

$('#Night').on('click', function() {
  night();
  $(".menu-frame").hide();
});


$(document).mouseup(function(e) {
  var container = $(".menu-frame");
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    container.css("display", "none");
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

$('.cl-bc').fadeOut(0);


$('.claim').css('transform', 'translateY(780px)');


$('#confirm-1').on('click', function() {
  $('.code-r1').css('margin-left', '-100vw');
});


$('#confirm-2').on('click', function() {
  $('.code-r1').css('margin-left', '-200vw');
});


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
  window.open('/register', 'register', "width = 400, height = 600, location = no, scrollbars = no, toolbars = no, status = no, resizable=no");
  $(".menu-frame").hide();
});

$('#Remove').on('click', function() {
  $('.cl-bc').fadeIn(400, 'swing');
  $('.claim').css('transform', 'translateY(0px)');
  $(".menu-frame").hide();
});

$('.frame').on('dblclick', function() {
  if (window.location.pathname.indexOf('board') == 1) return 0;
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
