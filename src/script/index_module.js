define([], () => {
    return {
        init: function() {

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
            const $yxdjlist = $('.yxdj-pro');
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
                $yxdjlist.html($strhtml);
            });

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


            const $Intcardlist = $('.IntCard-pro');
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