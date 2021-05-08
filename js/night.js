var is_N = localStorage.getItem('night');

console.log(is_N);
if (is_N == null || is_N == 0) {
  is_N = true;
} else {
  is_N = false;
}
function night() {
  console.log(is_N);
// 249   246
  if (!is_N) {
    $('html').css('background-color', 'rgb(45, 45, 45)');
    $('body').css('background-color', 'rgb(60, 60, 60)');
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
    $('html').css('background-color', '');

    $('body').css('background-color', '');
      $('.left').css('background-color', '');
      $('.right').css('background-color', '');
      $('.night').css('color', '');
      $('.bc-2').css('background-color', '');
      $('.bc-2').css('border', '');
      $('.bc-2').css('color', '');
      $('.frame').css('background-color', '');
      $('.frame').css('color', '');
      $('.frame').css('border', '');
      $('.menu').css('background-color', '');
      $('.menu-frame').css('background-color', '');
      $('.menu-img').css('filter', '');
      $('.code').css('background-color', '');
      $('.claim').css('background-color', '');
      $('.cl-in-n').css('border-bottom', '');
      $('.bc-n').css('background-color', '');
  }
  is_N = !is_N;
  if (is_N) {
    localStorage.setItem('night', 1);
  } else {
    localStorage.setItem('night', 0);
  }
}

night();
