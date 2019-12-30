/*
 제이쿼리
  $(선택자).실행문();
  반복분
  length
  for(증감 변수 ; 조건 ; 증감){

  }
*/
$(document).ready(function slider() {
  var number = 0;
  var slider = $('.visual li').length;
  var $slider = $('.visual li')
  var $prev = $('.prev');
  var $next = $('.next');
  console.log(slider);

  //이미지 개수 & 이미지 우측으로 정렬
  for (var i = 0; i < slider; i++){
    $('.visual li')[i].style.left = i*100 + '%';
    console.log(i);
  };

  //우측 버튼 클릭시 이동
  $next.click(function() {
    $slider.eq(number).stop().animate({left:'-100%'});
    number++;
    number = number % slider;

    $slider.eq(number).css({left:'100%'}).stop().animate({left:'0'});

    play();
  })

  //좌측 버튼 클릭시 이동

});


// $('.visual li').eq(i).css({left: 'eq(i)' * 100 + '%'});
