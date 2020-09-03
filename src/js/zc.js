import $ from './lib/jquery.js';
import './lib/jquery.lazyload.js';
import './lib/jquery.md5.js';
import { cookie } from './lib/cookie.js';

(function() {
    $('#username').on('input', function() {
        let reg = /^[A-z]\w{5,15}$/;
        if (reg.test($('#username').val())) {
            $('.username').attr('data-pass', true);
            $('.username').text('验证通过')
            $.ajax({
                type: "get",
                url: "../php/pd.php",
                data: { username: $('#username').val() },
                dataType: "json",
                success: function(res) {
                    console.log(res)
                    if (res.pd) {
                        $('.username').attr('data-pass', true);
                    } else {
                        $('.username').attr('data-pass', false);
                        $('.username').text('用户名已存在')
                    }
                }
            });
        } else {
            $('.username').attr('data-pass', false);
            $('.username').text('不通过')
        }
    })

    $('#password').on('input', function() {
        let reg = /^.{6,16}$/;
        if (reg.test($('#password').val())) {
            $('.password').attr('data-pass', true);
            $('.password').text('验证通过')
        } else {
            $('.password').attr('data-pass', false);
            $('.password').text('不通过')
        }
        if ($('#checkpass').val() == $('#password').val()) {
            $('.checkpass').attr('data-pass', true);
            $('.checkpass').text('验证通过')
        } else {
            $('.checkpass').attr('data-pass', false);
            $('.checkpass').text('不通过')
        }

    })

    $('#phone').on('input', function() {
        let reg = /^1[3-9]\d{9}$/;
        if (reg.test($('#phone').val())) {
            $('.phone').attr('data-pass', true);
            $('.phone').text('验证通过')
        } else {
            $('.phone').attr('data-pass', false);
            $('.phone').text('不通过')
        }

    })

    $('#checkpass').on('input', function() {
        if ($('#checkpass').val() == $('#password').val()) {
            $('.checkpass').attr('data-pass', true);
            $('.checkpass').text('验证通过')
        } else {
            $('.checkpass').attr('data-pass', false);
            $('.checkpass').text('不通过')
        }

    })


    $('.btnn').on('click', function() {
        if ($('[data-pass=true]').length == 4) {
            $.ajax({
                type: "get",
                url: "../php/zc.php",
                data: {
                    username: $('#username').val(),
                    phone: $('#phone').val(),
                    password: $.md5($('#password').val() + 147258)
                },
                dataType: "json",
                success: function(res) {
                    console.log(res)
                    if (res.zt) {
                        alert('注册成功')
                        location = "http://localhost/xianmu/mi.com/src/html/login.html"
                    }
                }
            });
            console.log(1)
        } else {

        }
    })




})()