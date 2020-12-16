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
                    url: 'http://10.31.161.112/dashboard/snail/php/alldata.php',
                    dataType: 'json'
                }).done(function(data) {
                    $.each(data, function(index, value) {
                        if (sid === value.sid) {
                            let $clonebox = $('.list_ul:hidden').clone(true, true);
                            $clonebox.find('.pic img').attr('src', value.url);
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
        }
    }
});