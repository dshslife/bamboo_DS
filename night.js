var is_N = localStorage.getItem('night');

console.log(is_N);
if (is_N == null || is_N == 0) {
  is_N = true;
} else {
  is_N = false;
}
function night() {
  console.log(is_N);

  if (!is_N) {
    $('html').css('background-color', 'rgb(45, 45, 45)');
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
    $('html').css('background-color', 'white');
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
  if (is_N) {
    localStorage.setItem('night', 1);
  } else {
    localStorage.setItem('night', 0);
  }
}

night();
