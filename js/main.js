// 9. 슬라이드 넘기게 하는 약속 만들기
$(function () {
  $('.main_slide').slick({
      arrows: false,
      // 버튼없애기

      // fade: true,
      // 흐려졌다 밝아졌다

      // vertical: true,
      // 밑으로 슬라이드 주기

      autoplay: true,
      // 자동
      pauseOnHover: false,
      // 마우스 올리면
      pauseOnFocus: false,
      // 클릭했을때 멈추는거

  });

  // 11. 번호 클릭하면 그 사진 넘어오게 하는 것
  $('.main_visual .dots li').on('mouseenter', function () {
      //내가 클릭한 요소의 번호를 알려줘
      let idx = $(this).index();
      // 클릭한 이것에 번호를 가져와
      console.log(idx);
      $('.main_slide').slick('slickGoTo', idx, true)
      // 각번호에 맞게 그에 맞는 사진 넘어오는것
  });

  // 12
  $('.main_visual .arrows .left').on('click', function () {
      $('.main_slide').slick('slickPrev')
  })
  $('.main_visual .arrows .right').on('click', function () {
      $('.main_slide').slick('slickNext')
  })

});
