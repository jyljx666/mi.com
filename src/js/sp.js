import $ from './lib/jquery.js';
import './lib/jquery.lazyload.js';
import { cookie } from './lib/cookie.js'
$(function() {
    let id = location.search.split('=')[1]
    console.log(id)
    $.ajax({
        type: "get",
        url: "../php/sp.php",
        data: { id: id },
        dataType: "json",
        success: function(data) {
            $('#detail-content').html(data.details)
            let temp = `
            <div class="sp-xq">
            <div class="sp-xq-box">
                <div class="sp-main">
                <img src="../${JSON.parse(data.picture)[0].src}.jpg" alt="">
                </div>
                <div class="sp-main-yb">
                    <img src="../${JSON.parse(data.picture)[1].src}.jpg" alt="">
                    <img src="../${JSON.parse(data.picture)[2].src}.jpg" alt="">
                    <img src="../${JSON.parse(data.picture)[3].src}.jpg" alt="">
                    <img src="../${JSON.parse(data.picture)[4].src}.jpg" alt="">
                    <!-- <img src="../images/p-2-4.jpg" alt=""> -->
                </div>
            </div>
            <div class="sp-wz">
                <div class="sp-wz-tilte">
                    <div class="good-name">
                        ${data.title}
                    </div>
                    <div class="good-tag">
                        有品秒杀
                    </div>
                </div>
                <div class="summary">
                    <span class="staticWords">洗护开学焕新季</span>
                    <span class="staticWords hyperlinkWords">好物满199减50 满299减100</span> ${data.brief}
                </div>
                <div class="promotion-wrap">
                    <span class="font-zc">促销：</span>
                    <span class="gift-type">有品秒杀</span>
                    <span class="d-gift-text">商品限购20件，超出限购数量不可购买</span>
                </div>
                <div class="card">
                    <div class="price-line">
                        <h5 class="sku-title">售价</h5>
                        <div class="price">
                            <span class="money-symbol">¥</span><span class="value">${data.price}</span><span class="market-price">${parseInt(data.price*1.1)}</span>
                        </div>
                    </div>
                    <div class="service-line">
                        <h5 class="sku-title">服务
                            <p class="icon">!</p>
                        </h5>
                        <div class="service">
                            <div class="service-item">
                                <a href="#" class="service-a"></a>
                                <span>满99包邮</span>
                            </div>
                            <div class="service-item">
                                <a href="#" class="service-a"></a>
                                <span>第三方店</span>
                            </div>
                            <br>
                            <div class="service-item">
                                <a href="#" class="service-a"></a>
                                <span>支持7天无理由退货 (拆封后不支持)</span>
                            </div>
                            <div class="service-item">
                                <a href="#" class="service-a"></a>
                                <span>有品配送</span>
                            </div>
                            <br>
                            <div class="service-item">
                                <a href="#" class="service-a"></a>
                                <span>由小米有品提供配送服务，杭州梦栖谷仓商贸有限公司提供售后<span class="service-item-qualification">(查看商家资质)</span></span>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="address-line">
                    配送区域 北京 北京市 海淀区 有货 修改
                </div>
                <div class="lin-box">
                    <div class="size-line">
                        <h5 class="sku-title">颜色</h5>
                        <div class="size-container">
                            <div class="tag-item-onSelected">
                                黑色
                            </div>
                        </div>
                    </div>
                    <div class="size-line">
                        <h5 class="sku-title">型号</h5>
                        <div class="size-container">
                            <div class="tag-item-onSelected">
                                AS6
                            </div>
                        </div>
                    </div>
                </div>
                <div class="count-line">
                    <h5 class="sku-title">数量</h5>
                    <div class="minus-btn">
                        <a href="javascript:;" class="m-icons"></a>
                    </div>
                    <input type="text" class="count-input" value="1">
                    <div class="j-btn">
                        <a href="javascript:;" class="m-icons"></a>
                    </div>
                </div>
                <div class="btn-line">
                    <a href="javascript:;" class="ys jr">加入购物车</a>
                    <a href="javascript:;" class="gm ys">立即购买</a>
                    <div class="favor-btn ">
                        <a href="javascript:;"></a>
                        <p>收藏</p>
                    </div>
                    <div class="favor-btn ml">
                        <a href="javascript:;" class="a1"></a>
                        <p>客服</p>
                    </div>
                </div>
            </div>
        </div>
            
            `
            $('#sp-box').html(temp);

            $('#sp-box').on('click', '.minus-btn', function() {
                if ($('.count-input').val() > 1) {
                    $('.count-input')[0].value = $('.count-input').val() - 1
                    $('.j-btn > .m-icons').css({ "background-position": "0 -1032px" })
                } else {
                    $('.minus-btn > .m-icons').css({ "background-position": "0 -1406px" })
                }
            })
            $('#sp-box').on('click', '.j-btn', function() {
                if ($('.count-input').val() < 20) {
                    $('.count-input')[0].value = parseInt($('.count-input').val()) + 1
                    $('.minus-btn > .m-icons').css({ "background-position": "0 -1372px" })
                } else {
                    $('.j-btn > .m-icons').css({ "background-position": "0 -896px" })
                }
            })

            // console.log($('#sp-box').html(temp).find('.jr'))
            $('#sp-box').on('click', '.jr', function() {
                addItem(data.id, data.price, $('.count-input').val());
            })
        }
    });

    function addItem(id, price, num) {
        let shop = cookie.get('shop'); // 从cookie中获取shop数据

        let product = {
            id: id,
            price: price,
            num: num
        };

        if (shop) { // 判断是否存有购物车数据
            shop = JSON.parse(shop);
            // 购物车中是否已经存在当前这件商品
            if (shop.some(elm => elm.id == id)) {
                // 修改数量
                shop.forEach(elm => {
                    elm.id === id ? elm.num = num : null;
                });
            } else {
                // 添加商品
                shop.push(product);
            }

        } else {
            shop = [];
            shop.push(product);
        }

        cookie.set('shop', JSON.stringify(shop), 1);
    }

})