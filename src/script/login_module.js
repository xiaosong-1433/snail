define([], function() {
    return {
        init: function() {
            const $username = $('#username');
            const $password = $('#password');
            const $login = $('#btnSubmit'); //登录按钮
            const $ipt_1 = $('.ipt_1');
            const $ipt_2 = $('.ipt_2');
            const $close = $('.close');

            $username.on('input', function() {
                $ipt_1.hide();
            });

            $password.on('input', function() {
                $ipt_2.hide();
            });

            $close.on('click', function() {
                location.href = 'index.html';
            });

            $login.on('click', function() {
                $.ajax({
                    type: 'post',
                    url: 'http://10.31.161.112/dashboard/snail/php/login.php',
                    data: {
                        user: $username.val(),
                        pass: $password.val()
                    }
                }).done(function(data) {
                    if (!data) { //登录失败
                        alert('用户名或者密码有误!');
                        $password.val(''); //密码清空
                    } else { //登录成功
                        location.href = 'index.html';
                        localStorage.setItem('loginname', $username.val());
                    }
                })
            });
        }
    }
})