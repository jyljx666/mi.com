import $ from './lib/jquery.js';
import { mySwiper, mySwiper1, mySwiper2 } from './lib/swiper.js';
import './lib/jquery.lazyload.js';
$(function() {
    $.get('../php/index.php', function(data) {
        console.log(data)
        var c = data[0].picture
        c = JSON.parse(c)
        console.log(c)
        console.log(c[0].src)
        for (let i = 0; i < data.length; i++) {
            console.log(JSON.parse(data[i].picture)[0].src)
            let html = `
            <a href="./sp.html?id=${data[i].id}" class="zs-sp-1">
            <div class="zs-tp">
                <img data-original="../${JSON.parse(data[i].picture)[0].src}.jpg" alt="">
            </div>
            <p class="pro-desc">${data[i].brief}</p>
            <div class="jg-box">
                <div class="jg-tj"></div>
                <p class="pro-info" title="咱家纯棉毛巾特惠装">${data[i].title}</p>
                <p class="font-zt"><span>￥</span><span>${data[i].price}</span></p>
            </div>
            </a>
            `
            $('#zs-tj').html(function(i, h) {
                return h + html
            })
            $("img").lazyload({
                placeholder: "../images/timg.gif", //用图片提前占位
                // placeholder,值为某一图片路径.此图片用来占据将要加载的图片的位置,待图片加载时,占位图则会隐藏
                effect: "fadeIn", // 载入使用何种效果
                // effect(特效),值有show(直接显示),fadeIn(淡入),slideDown(下拉)等,常用fadeIn
                // threshold: 200, // 提前开始加载
                // threshold,值为数字,代表页面高度.如设置为200,表示滚动条在离目标位置还有200的高度时就开始加载图片,可以做到不让用户察觉
                // event: 'click', // 事件触发时才加载
                // event,值有click(点击),mouseover(鼠标划过),sporty(运动的),foobar(…).可以实现鼠标莫过或点击图片才开始加载,后两个值未测试…
                // container: $("#container"), // 对某容器中的图片实现效果
                // container,值为某容器.lazyload默认在拉动浏览器滚动条时生效,这个参数可以让你在拉动某DIV的滚动条时依次加载其中的图片
                // failurelimit: 10 // 图片排序混乱时
                // failurelimit,值为数字.lazyload默认在找到第一张不在可见区域里的图片时则不再继续加载,但当HTML容器混乱的时候可能出现可见区域内图片并没加载出来的情况,failurelimit意在加载N张可见区域外的图片,以避免出现这个问题.
            });

        }

        // console.log($.parseJSON(data[0].picture));
    }, 'json')

    $(window).on('scroll', function() {
        let top = $(document).scrollTop();
        if (top > 500) {
            $('#index-s')[0].style.display = 'block'
        } else {
            $('#index-s')[0].style.display = 'none'
        }
    })
})