define(['jcookie'], () => {
    return {
        init: function() {
            let $sid = location.search.substring(1).split('=')[1];

            if (!$sid) {
                $sid = 1;
            }

            $.ajax({
                url: 'http://192.168.125.2:80/dashboard/snail/php/detail.php',
                data: {
                    sid: $sid
                },
                dataType: 'json'
            }).done(function(data) {
                $('.detail-lf img').attr('src', data.url);
                $('.detail-title p').html(data.title);
                $('.detail-price span').html(data.price);
            });

            let arrsid = [];
            let arrnum = [];

            //提前预判cookie设置时的key值(cookiesid/cookienum)进行获取cookie
            function getcookietoarray() {
                if ($.cookie('cookiesid') && $.cookie('cookienum')) {
                    arrsid = $.cookie('cookiesid').split(',');
                    arrnum = $.cookie('cookienum').split(',');
                } else {
                    arrsid = [];
                    arrnum = [];
                }
            }

            $('.detail-btn a').on('click', function() {
                getcookietoarray();
                if ($.inArray($sid, arrsid) === -1) {
                    arrsid.push($sid);
                    $.cookie('cookiesid', arrsid, { expires: 10, path: '/' });
                    arrnum.push($('.txt-count').val());
                    $.cookie('cookienum', arrnum, { expires: 10, path: '/' });
                } else {

                    let $index = $.inArray($sid, arrsid);
                    
                    arrnum[$index] = parseFloat(arrnum[$index]) + parseFloat($('.txt-count').val());
                    $.cookie('cookienum', arrnum, { expires: 10, path: '/' });
                }

            });
            let $num = parseFloat($('.txt-count').val());

            $('.minus').on('click', function() {
                if ($num <= 1) {
                    $num = 1;
                } else {
                    $num--;
                }

                $('.txt-count').val($num);
            });

            $('.add').on('click', function() {
                if ($num > 999) {
                    $num = 999
                } else {
                    $num++;
                }
                $('.txt-count').val($num);
            });

            $('.txt-count').on('input', function() {
                let $reg = /^\d+$/;
                if (!$reg.test($num)) {
                    $num = 1;
                }
                if ($num > 999) {
                    $num = 999;
                }

                if ($num <= 0) {
                    $num = 1;
                }
                $('.txt-count').val($num);
            });

            //检测是否用户已经登录
            if (localStorage.getItem('loginname')) {
                $('.login-none').show();
                $('.login-block').hide();
                $('.login-none span').html(localStorage.getItem('loginname'));
            }

            //退出登录 - 删除本地存储
            $('.login-none a').on('click', function() {
                $('.login-none').hide();
                $('.login-block').show();
                localStorage.removeItem('loginname');
            });
        }
    }
});