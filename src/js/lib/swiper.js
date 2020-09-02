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
var mySwiper1 = new Swiper('.lbt', {
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
    autoplay: false,
    slidesPerView: 4,
})
var mySwiper2 = new Swiper('.lby', {
    // direction: 'vertical', // 垂直切换选项
    loop: false, // 循环模式选项

    // 如果需要分页器
    pagination: {
        el: '.ii',
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.jy',
        prevEl: '.jk',
    },

    // 如果需要滚动条
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
    autoplay: false,
    slidesPerView: 4,
})

export { mySwiper, mySwiper1, mySwiper2 };