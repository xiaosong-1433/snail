define([], () => {
    return {
        init: function() {

            // 轮播图
            const $lunbo = $('.lunbo');
            const $list = $('.lunbo-pic');
            const $piclist = $('.lunbo-pic img');
            const $btnlist = $('.circle-write span');
            const $leftarrow = $('#left');
            const $rightarrow = $('#right');
            let timer = null;
            let $num = 0;

            const $imgwidth = $piclist.eq(0).width();
            $list.width($imgwidth * $piclist.size());

            $btnlist.on('click', function() {
                $num = $(this).index() - 1;
                tabSwitch();
            });

            $lunbo.hover(function() {
                clearInterval(timer);

            }, function() {
                timer = setInterval(function() {
                    $rightarrow.click();
                }, 3000);
            });

            $rightarrow.on('click', function() {
                tabSwitch()
            });
            $leftarrow.on('click', function() {
                $num -= 2;
                tabSwitch();
            });

            function tabSwitch() {
                $num++;
                if ($num === $btnlist.size() + 1) {
                    $list.css('left', 0);
                    $num = 1;
                }

                if ($num === -1) {
                    $list.css('left', -$imgwidth * $btnlist.size());
                    $num = $btnlist.size() - 1;
                }

                if ($num === $btnlist.size()) {
                    $btnlist.eq(0).addClass('circle-orange').siblings('span').removeClass('circle-orange');
                } else {
                    $btnlist.eq($num).addClass('circle-orange').siblings('span').removeClass('circle-orange');
                }

                $list.stop(true).animate({
                    left: -$imgwidth * $num
                });
            }

            // 二级导航
            const $nav_lists = $('.nav-list li');
            const $black = $('.nav-list li span');
            const $secondaryMenus = $('.secondaryMenu li');
            const $secondaryMenu = $('.secondaryMenu');
            $nav_lists.hover(function() {
                $secondaryMenu.show();
                $secondaryMenus.eq($(this).index()).addClass('secondaryMenu-li').siblings('li').removeClass('secondaryMenu-li');
                $black.eq($(this).index()).addClass('black').siblings('span').removeClass('black');
            }, function() {
                $secondaryMenu.hide();
            });

            //渲染人气单品
            const $rqdplist = $('.rqdp-center');
            $.ajax({
                url: 'http://localhost/dashboard/snail/php/listdata.php',
                dataType: 'json'
            }).done(function(data) {
                let $strhtml = '';
                $.each(data, function(index, value) {
                    if (index < 4) {
                        $strhtml += `
                        <a href="javascript:;">
                            <img src="${value.url}"/>
                            <p>${value.title}</p>
                            <span>￥${value.price}</span>
                        </a>
                    `;
                    }
                });
                $strhtml += `
                    <img src="./imgages/rqdp.png">
                `;
                $rqdplist.html($strhtml);
            });


            //渲染游戏道具
            const $yxdjlist_1 = $('.yxdj-pro_1');
            $.ajax({
                url: 'http://localhost/dashboard/snail/php/listdata.php',
                dataType: 'json'
            }).done(function(data) {
                let $strhtml = '';
                $strhtml += `
                    <a href="javascript:;">
                        <img src="//att1.woniu.com/shopmall.snail.com/2017/1127/e9ce92833932c8a610917874fe239eb59e65dc24.jpeg">
                    </a>
                `;
                $.each(data, function(index, value) {
                    if (index >= 4 && index < 8) {
                        $strhtml += `
                        <a href="javascript:;">
                            <p>${value.title}</p>
                            <span>￥${value.price}</span>
                            <img src="${value.url}"/>
                        </a>
                        `;
                    }
                });
                $strhtml += `
                    <a class="more" href="javascript:;">
                        <span class="look-more">查看全部</span>
                        <span class="which">九阴真经商城</span>
                        <span class="more-btn"></span>
                    </a>
                `;
                $yxdjlist_1.html($strhtml);
            });

            const $yxdjlist_2 = $('.yxdj-pro_2');
            $.ajax({
                url: 'http://localhost/dashboard/snail/php/listdata.php',
                dataType: 'json'
            }).done(function(data) {
                let $strhtml = '';
                $strhtml += `
                    <a href="javascript:;">
                        <img src="//att1.woniu.com/shopmall.snail.com/2017/1127/e9ce92833932c8a610917874fe239eb59e65dc24.jpeg">
                    </a>
                `;
                $.each(data, function(index, value) {
                    if (index >= 16 && index < 20) {
                        $strhtml += `
                        <a href="javascript:;">
                            <p>${value.title}</p>
                            <span>￥${value.price}</span>
                            <img src="${value.url}"/>
                        </a>
                        `;
                    }
                });
                $strhtml += `
                    <a class="more" href="javascript:;">
                        <span class="look-more">查看全部</span>
                        <span class="which">九阴真经商城</span>
                        <span class="more-btn"></span>
                    </a>
                `;
                $yxdjlist_2.html($strhtml);
            });



            //tab切换

            const $titles = $('.yxdj-selectBar li');
            const $contents = $('.yxdj-commodity');

            $titles.on('click', function() {
                $(this)
                    .addClass('yxdj-bottom')
                    .siblings('li')
                    .removeClass('yxdj-bottom');
                $contents
                    .eq($(this).index())
                    .addClass('yxdj-pro')
                    .siblings('.yxdj-commodity')
                    .removeClass('yxdj-pro');
            });

            // 渲染手机卡
            const $cardlist = $('.card-pro');
            $.ajax({
                url: 'http://localhost/dashboard/snail/php/listdata.php',
                dataType: 'json'
            }).done(function(data) {
                let $strhtml = '';
                $strhtml += `
                    <a href="javascript:;">
                        <img src="//att1.woniu.com/mall.snail.com/shop/2020/0319/d1a7b0cafc379a6bd1f731974b0e7ead.png">
                    </a>
                `;
                $.each(data, function(index, value) {
                    if (index >= 8 && index < 12) {
                        $strhtml += `
                        <a href="javascript:;">
                            <h3>${value.title}</h3>
                            <p>${value.describe}</p>
                            <span>￥${value.price}</span>
                            <img src="${value.url}"/>
                        </a>
                        `;
                    }
                });
                $cardlist.html($strhtml);
            });

            // 渲染国际手机卡
            const $Intcardlist = $('.IntCard-pro');
            $.ajax({
                url: 'http://localhost/dashboard/snail/php/listdata.php',
                dataType: 'json'
            }).done(function(data) {
                let $strhtml = '';
                $strhtml += `
                    <a href="javascript:;">
                        <img src="//att1.woniu.com/mall.snail.com/shop/2018/0607/383c684a08cb987a5b470a4a556e071c.jpg">
                    </a>
                `;
                $.each(data, function(index, value) {
                    if (index >= 12 && index < 16) {
                        $strhtml += `
                        <a href="javascript:;">
                            <h3>${value.title}</h3>
                            <p>${value.describe}</p>
                            <span>￥${value.price}</span>
                            <img src="${value.url}"/>
                        </a>
                        `;
                    }
                });
                $Intcardlist.html($strhtml);
            });
        }
    }
});