import Swiper from '../lib/swiper-bundle.js';

var mySwiper = new Swiper('.banner-box', {
    // direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项

    // 如果需要分页器
    pagination: {
        el: '.swiper-l',
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.tt',
        prevEl: '.yy',
    },

    // 如果需要滚动条
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
    autoplay: true,
    // slidesPerView: 3,
})
var yy = new Swiper('.lbt', {
    // direction: 'vertical', // 垂直切换选项
    loop: false, // 循环模式选项

    // 如果需要分页器
    pagination: {
        el: '.ii',
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.kk',
        prevEl: '.jj',
    },

    // 如果需要滚动条
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
    autoplay: true,
    slidesPerView: 4,
})

export { mySwiper, yy };