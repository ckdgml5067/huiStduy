/*
\제이쿼리
  $(선택자).실행문();
  반복분
  length
  for(증감 변수 ; 조건 ; 증감){

  }
*/
$(document).ready(function () {
  var slider = $('.visual li').length;
  console.log(slider);
  for (var i = 0; i < slider; i++) {
    $eq(i).css({left: i*100+'%'});
  console.log(i);
  }
});
