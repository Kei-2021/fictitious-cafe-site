// header
const headerSwiper = new Swiper('.header-swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    effect: 'fade',
    centeredSlides: true, // スライダーの中央揃え
    slidesPerView: 1, // 画面に表示する画像の数
    speed: 3000, // スライドからスライドにtransitionする時の間隔
    autoplay: {
      delay: 4000, // 4秒後に画像が切り替わる
      disableOnInteraction: false, // マウス操作でスライドを変更した際でもautoplayが消えないように設定
    }
});

// Gallery
const gallerySwiper = new Swiper('.gallery-swiper', {
  // Optional parameters
  loop: true,
  effect: 'slide',
  slidesPerView: 1,
  breakpoints: {
    480: {
      slidesPerView: 2,
    },
    600: {
      slidesPerView: 2.5,
      centeredSlides: true, // スライダーの中央揃え
    },
    960: {
      slidesPerView: 3.5,
      centeredSlides: true,
    },
    1280: {
      slidesPerView: 4.5,
      centeredSlides: true,
    },
  },
  speed: 3000, // スライドからスライドにtransitionする時の間隔
  autoplay: {
    delay: 4000, // 4秒後に画像が切り替わる
    disableOnInteraction: false, // マウス操作でスライドを変更した際でもautoplayが消えないように設定
  }
});