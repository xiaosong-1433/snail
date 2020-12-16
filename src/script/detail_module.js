define(['jcookie'], () => {
    return {
        init: function() {
            let $sid = location.search.substring(1).split('=')[1];

            if (!$sid) {
                $sid = 1;
            }

            $.ajax({
                url: 'http://10.31.161.112/dashboard/snail/php/detail.php',
                data: {
                    sid: $sid
                },
                dataType: 'json'
            }).done(function(data) {
                $('.detail-lf img').attr('src', data.url);
                $('.detail-title p').html(data.title);
                $('.detail-price span').html(data.price);
            });

            let arrsid = []; //存储商品的sid
            let arrnum = []; //存储商品的数量

            //提前预判cookie设置时的key值(cookiesid/cookienum)进行获取cookie
            function getcookietoarray() {
                if ($.cookie('cookiesid') && $.cookie('cookienum')) {
                    arrsid = $.cookie('cookiesid').split(',');
                    arrnum = $.cookie('cookienum').split(',');
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

                    arrnum[$index] = parseInt(arrnum[$index]) + parseInt($('.txt-count').val());
                    $.cookie('cookienum', arrnum, { expires: 10, path: '/' });
                }

            });
            let $num = parseInt($('.txt-count').val());

            $('.minus').on('click', function() {
                if ($num <= 1) {
                    $num = 1;
                } else {
                    $num--;
                }

                $('.txt-count').attr('value', $num);
            });
            $('.add').on('click', function() {
                $num++;
                $('.txt-count').attr('value', $num);
            });
        }
    }
});