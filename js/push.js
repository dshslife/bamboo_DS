//push(게시물 번호, 제목, 작성 시간, 내용, 게시판, 삽입 위치)
function push(code, title, time, content, board, direction) { //direction1 > 1 = 상단에 추가 0 = 하단에 추가
  var html = '';
  html += '<div class="frame r2 shadow ani"><div class="info r3 bc" style="display:inline-block; line-height: 20px;">';
  html += '<h5 class="b3">#' + code + '번째 코드</h5></div><h5 class="b1" style="color:grey; margin-left:10px;">' + time + '</h5><div class="r1">';
  html += '<h1 class="f4 title" style="padding-top:5px; padding-bottom:20px;">' + title + '</h1><br><p class="p">' + content + '</p></div><br><div class="tag">';
  html += '<h3 class="r3 b3 bc-n night ani">' + board + '</h3></div></div>';
  console.log(html);
  if (direction) {
    $('.push').prepend(html);
  } else {
    $('.push').append(html);
  }
  //야간모드 최적화 예정
  night();
  night();
}

//push(1, 1, 1, 'awkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdajawkdjhafjwgfjahdaj', 1, 1);


//글쓰기 버튼 눌렀을 때
$('.sub-button').on('click', function() {
  var content = $('textarea').val().replaceAll('\n', '<br>'); //줄바꿈 처리
  var title = $('.input-1').val();
  var code = $('.input-2').val();
  var board = $('.sel').val();
  console.log(content, title, code, board);
  if (content == '' || title == '' || code == '' || board == '') {
    warn('비어있는 칸을 모두 채워주세요.');
  }
});


function debug(str) {
  $('.debug_ios').prepend(str + '<br>');
}


//스크롤 구현
function scr() {
  var height = $('.right').scrollTop() + $('.right').height();
  console.log($('.right')[0].scrollHeight, height * 0.9);
  if ($('.right')[0].scrollHeight <= height + 1000) {
    push(1, '무한 스크롤 테스트', 1, '무한 스크롤 테스트', 1, 0);
  }
}
$('.right').scroll(scr);
$(window).scroll(function(){
  if ($(window).scrollTop() <= $(document).height() - $(window).height() + 1) {
    push(1, '무한 스크롤 테스트', 1, '무한 스크롤 테스트', 1, 0);
  }
});
