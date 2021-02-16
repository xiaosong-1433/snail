define(['jcookie'], () => {
    return {
        init: function() {
            function getcookietoarray() {
                if ($.cookie('cookiesid') && $.cookie('cookienum')) {
                    let $arrsid = $.cookie('cookiesid').split(',');
                    let $arrnum = $.cookie('cookienum').split(',');
                    $.each($arrsid, function(index, value) {
                        rendergoods($arrsid[index], $arrnum[index]);
                    });
                }
            }
            getcookietoarray();

            function rendergoods(sid, num) {
                $.ajax({
                    url: 'http://192.168.0.105/dashboard/snail/php/alldata.php',
                    dataType: 'json'
                }).done(function(data) {
                    $.each(data, function(index, value) {
                        if (sid === value.sid) {
                            let $clonebox = $('.list_ul:hidden').clone(true, true);
                            $clonebox.find('.pic img').attr('src', value.url);
                            $clonebox.find('.pic img').attr('sid', value.sid);
                            $clonebox.find('.pro-name').html(value.title);
                            $clonebox.find('.col3 span').html(value.price);
                            $clonebox.find('.num').val(num);
                            $clonebox.find('.col5').html((value.price * num).toFixed(2));
                            $clonebox.css('display', 'block');
                            $('.list-table').append($clonebox);
                            calcprice();
                        }
                    });
                });
            }

            function calcprice() {
                let $sum = 0;
                let $count = 0;
                $('.list_ul:visible').each(function(index, ele) {
                    if ($(ele).find('.col1 input').prop('checked')) {
                        $sum += parseInt($(ele).find('.num').val());
                        $count += parseFloat($(ele).find('.col5').html());
                    }
                });

                $('.totalnum').html($sum);
                $('.price em').html($count.toFixed(2));
            }

            $('.allsel').on('click', function() {
                $('.list_ul:visible').find(':checkbox').prop('checked', $(this).prop('checked'));
                $('.allsel').prop('checked', $(this).prop('checked'));
                calcprice();
            });


            let $inputs = $('.list_ul:visible').find(':checkbox');
            $('.list-table').on('click', $inputs, function() {
                if ($inputs.find(':checkbox').length === $inputs.find('input:checked').size()) {
                    $('.allsel').prop('checked', true);
                } else {
                    $('.allsel').prop('checked', false);
                }
                calcprice();
            });

            // 5.改变数量 - 增加减少数量 - cookie有关
            $('.add').on('click', function() {

                let $num = $(this).parents('.list_ul').find('.num').val();
                $num++;
                if ($num > 99) {
                    $num = 99;
                }
                $(this).parents('.list_ul').find('.num').val($num);
                $(this).parents('.list_ul').find('.col5').html(singlegoodsprice($(this)));
                calcprice();
                addcookie($(this));
            });


            $('.minus').on('click', function() {
                let $num = $(this).parents('.list_ul').find('.num').val();
                $num--;
                if ($num <= 0) {
                    $num = 1;
                }
                $(this).parents('.list_ul').find('.num').val($num);
                $(this).parents('.list_ul').find('.col5').html(singlegoodsprice($(this)));
                calcprice();
                addcookie($(this));
            });

            $('.num').on('input', function() {
                let $reg = /^\d+$/;
                let $value = $(this).val();
                if (!$reg.test($value)) {
                    $(this).val(1);
                }
                if ($value > 99) {
                    $(this).val(99);
                }

                if ($value <= 0) {
                    $(this).val(1);
                }
                $(this).parents('.list_ul').find('.col5').html(singlegoodsprice($(this)));
                calcprice();
                addcookie($(this));
            });

            function singlegoodsprice(obj) {
                let $singleprice = parseFloat(obj.parents('.list_ul').find('.col3 span').html());
                let $num = parseFloat(obj.parents('.list_ul').find('.num').val());
                console.log($singleprice);
                return ($singleprice * $num).toFixed(2);
            }


            function addcookie(obj) {
                let $sid = obj.parents('.list_ul').find('img').attr('sid');
                if ($.cookie('cookiesid') && $.cookie('cookienum')) {
                    let $arrsid = $.cookie('cookiesid').split(',');
                    let $arrnum = $.cookie('cookienum').split(',');
                    $arrnum[$.inArray($sid, $arrsid)] = obj.parents('.list_ul').find('.num').val();
                    $.cookie('cookienum', $arrnum, { expires: 10, path: '/' });
                }
            }



            let $arrsid = [];
            let $arrnum = [];

            function cookietoarray() {
                if ($.cookie('cookiesid') && $.cookie('cookienum')) {
                    $arrsid = $.cookie('cookiesid').split(',');
                    $arrnum = $.cookie('cookienum').split(',');
                }
            }


            $('.del').on('click', function() {
                cookietoarray();
                if (window.confirm('你确定要删除吗?')) {
                    $(this).parents('.list_ul').remove();
                    calcprice();
                    delcookie($(this).parents('.list_ul').find('img').attr('sid'), $arrsid);
                    if ($arrsid.length === 0) {
                        $.cookie('cookiesid', $arrsid, { expires: -1, path: '/' });
                        $.cookie('cookienum', $arrnum, { expires: -1, path: '/' });
                    }
                }
            });

            $('.cart-main_4-lf a').on('click', function() {
                cookietoarray();
                if (window.confirm('你确定要删除吗?')) {
                    $('.list_ul:visible').each(function() {
                        if ($(this).find(':checkbox').is(':checked')) {
                            $(this).remove();
                            delcookie($(this).find('img').attr('sid'), $arrsid)
                        }
                    });
                    calcprice();
                }
            });

            function delcookie(sid, $arrsid) {
                let $sidindex = -1;
                $.each($arrsid, function(index, value) {
                    if (sid === value) {
                        $sidindex = index;
                    }
                });

                $arrsid.splice($sidindex, 1);
                $arrnum.splice($sidindex, 1);

                $.cookie('cookiesid', $arrsid, { expires: 10, path: '/' });
                $.cookie('cookienum', $arrnum, { expires: 10, path: '/' });
            }

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