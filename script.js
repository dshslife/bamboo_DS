
//변수 설정
var flag = 0;
var is_M = 0;
$(".menu-frame").hide();


//초기 설정
$('.cl-bc').fadeOut(0);
$('.claim').css('transform', 'translateY(780px)');


//PC  MOBILE 구분
function check() {
  if ($(document).width() < 768) {
    is_M = 1;
  } else {
    is_M = 0;
  }
  console.log(is_M);


  if (!is_M) {
    $('.right').css('width', document.body.clientWidth  - $('.left').width() + 'px');
    $('.left').css('height', window.innerHeight  + 'px');
    $('.right').css('height', window.innerHeight  + 'px');

  }
}
$(window).resize(check);
check();

//야간모드
$('#Night').on('click', function() {
  night();
  $(".menu-frame").hide();
});


//메뉴 닫기(PC)
$(document).mouseup(function(e) {
  var container = $(".menu-frame");
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    container.css("display", "none");
  }
});
//메뉴 열기(PC, 모바일)
$('.menu').on('click', function() {
  $(".menu-frame").show();
});


//코드 발급 버튼
$('#confirm-1').on('click', function() {
  $('.code-r1').css('margin-left', '-100vw');
});
$('#confirm-2').on('click', function() {
  $('.code-r1').css('margin-left', '-200vw');
});



//창 닫기
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


//클릭시 메인으로 이동
$('.ds').on('click', function() {
  location.href="/";
});



//글쓰기
$('.sub-button').on('click', function() {
  console.log($('textarea').val().replaceAll('\n', '<br>'));
});


//키발급 페이지 열기
$('#Key').on('click', function() {
  window.open('/register', 'register', "width = 400, height = 600, location = no, scrollbars = no, toolbars = no, status = no, resizable=no");
  $(".menu-frame").hide();
});


//삭제
$('#Remove').on('click', function() {
  $('.cl-bc').fadeIn(400, 'swing');
  $('.claim').css('transform', 'translateY(0px)');
  $(".menu-frame").hide();
});


//긴글 더블클릭시 보기
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
