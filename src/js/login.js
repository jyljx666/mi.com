import $ from './lib/jquery.js';
import './lib/jquery.lazyload.js';
import './lib/jquery.md5.js';
import { cookie } from './lib/cookie.js';


(function() {
    $('#login').on('click', function() {
        $.ajax({
            type: "get",
            url: "../php/login.php",
            data: {
                username: $('#username').val(),
                password: $.md5($('#password').val() + 147258)
            },
            dataType: "json",
            success: function(res) {
                if (res.pd) {
                    alert('登录成功')
                    let user = {
                        user: $('#username').val(),
                        zt: res.pd
                    }

                    cookie.set('user', JSON.stringify(user), 1)
                    location = "http://localhost/xianmu/mi.com/src/html/index.html"

                } else {
                    alert(res.msg)
                    location = "http://localhost/xianmu/mi.com/src/html/login.html"
                }
            }
        });

    })

})()