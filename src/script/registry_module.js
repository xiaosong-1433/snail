define([], () => {
    return {
        init: function() {
            const $registry = $('#registry');
            const $username = $('#username');
            const $password = $('#password');
            const $identity = $('#identity');
            const $mobile = $('#mobile');
            const $dui = $('.dui');
            const $cuo = $('.cuo');
            const $input_2 = $('.collection .input_2');

            $userflag = true;
            $passflag = true;
            $idtflag = true;
            $mobileflag = true;


            $username.on('focus', function() {
                $dui.eq(0).hide();
                $cuo.eq(0).hide();
            });

            $username.on('blur', function() {
                let $value = $(this).val();
                if ($value !== '') {
                    let $strLen = $value.replace(/[\u4e00-\u9fa5]/g, '**').length;
                    if ($strLen > 0 && $strLen <= 14) {
                        let $reg = /^[a-zA-Z\u4e00-\u9fa5]+$/;
                        if ($reg.test($value)) {
                            $dui.eq(0).show();
                            $input_2.eq(0).html('');
                            $cuo.eq(0).hide();
                            $userflag = true;
                            $.ajax({
                                type: 'post',
                                url: 'http://192.168.125.2:80/dashboard/snail/php/reg.php',
                                data: {
                                    username: $username.val()
                                }
                            }).done(function(data) {
                                if (!data) {
                                    $dui.eq(0).show();
                                    $input_2.eq(0).html('');
                                    $cuo.eq(0).hide();
                                } else { //存在
                                    $cuo.eq(0).show();
                                    $dui.eq(0).hide();
                                    $input_2.eq(0).html('该用户名已存在').css('color', 'red');
                                }
                            });


                        } else {
                            $dui.eq(0).hide();
                            $cuo.eq(0).show();
                            $input_2.eq(0).html('用户名格式有误').css('color', 'red');
                            $userflag = false;
                        }
                    } else {
                        $dui.eq(0).hide();
                        $cuo.eq(0).show();
                        $input_2.eq(0).html('用户名长度有误').css('color', 'red');
                        $userflag = false;
                    }
                } else {
                    $dui.eq(0).hide();
                    $cuo.eq(0).show();
                    $input_2.eq(0).html('用户名不能为空').css('color', 'red');
                }
            });

            $password.on('focus', function() {
                $cuo.eq(1).hide();
                $dui.eq(1).hide();
            })

            $password.on('blur', function() {
                let $value = $(this).val();
                if ($value !== '') {
                    if ($value.length >= 0 && $value.length <= 14) {
                        let $regnum = /\d+/;
                        let $reguppercase = /[A-Z]+/;
                        let $reglowercase = /[a-z]+/;
                        let $other = /[\W_]+/;
                        let $count = 0;
                        if ($regnum.test($value)) {
                            $count++
                        }
                        if ($reguppercase.test($value)) {
                            $count++
                        }
                        if ($reglowercase.test($value)) {
                            $count++
                        }
                        if ($other.test($value)) {
                            $count++
                        }

                        switch ($count) {
                            case 1:
                                $cuo.eq(1).show();
                                $input_2.eq(1).html('密码强度为低级，不安全').css('color', 'red');
                                $dui.eq(1).hide();
                                $passflag = false;
                                break;
                            case 2:
                                $dui.eq(1).show();
                                $cuo.eq(1).hide();
                                $input_2.eq(1).html('密码强度为中级，安全').css('color', 'orange');
                                $passflag = true;
                                break;
                            case 3:
                            case 4:
                                $dui.eq(1).show();
                                $cuo.eq(1).hide();
                                $input_2.eq(1).html('密码强度为中级，非常安全').css('color', 'green');
                                $passflag = true;
                                break;
                        }
                    } else {
                        $cuo.eq(1).show();
                        $dui.eq(1).hide();
                        $input_2.eq(1).html('密码的长度有误').css('color', 'red');
                        $passflag = false;
                    }
                } else {
                    $cuo.eq(1).show();
                    $dui.eq(1).hide();
                    $input_2.eq(1).html('用户密码不能为空').css('color', 'red');
                    $passflag = false;
                }
            })

            $identity.on('focus', function() {
                $dui.eq(2).hide();
                $cuo.eq(2).hide();
            });

            $identity.on('blur', function() {
                let $value = $(this).val(); //当前表单的值
                if ($value !== '') {
                    let $reg = /^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
                    if ($reg.test($value)) {
                        $dui.eq(2).show();
                        $input_2.eq(2).html('');
                        $cuo.eq(2).hide();
                        $idtflag = true;
                    } else {
                        $cuo.eq(2).show();
                        $input_2.eq(2).html('身份证号码号码格式有误').css('color', 'red');
                        $dui.eq(2).hide();
                        $idtflag = false;

                    }
                } else {
                    $cuo.eq(2).show();
                    $dui.eq(2).hide();
                    $input_2.eq(2).html('身份证号码号码不能为空').css('color', 'red');
                    $idtflag = false;
                }
            });


            $mobile.on('focus', function() {
                $dui.eq(3).hide();
                $cuo.eq(3).hide();
            });

            $mobile.on('blur', function() {
                let $value = $(this).val(); //当前表单的值
                if ($value !== '') {
                    let $reg = /^1[3|5|8]\d{9}$/;
                    if ($reg.test($value)) {
                        $dui.eq(3).show();
                        $input_2.eq(3).html('');
                        $cuo.eq(3).hide();
                        $mobileflag = true;
                    } else {
                        $cuo.eq(3).show();
                        $input_2.eq(3).html('手机号码格式有误').css('color', 'red');
                        $mobileflag = false;
                        $dui.eq(3).hide();
                    }
                } else {
                    $cuo.eq(3).show();
                    $input_2.eq(3).html('手机号码不能为空').css('color', 'red');
                    $mobileflag = false;
                    $dui.eq(3).hide();
                }
            });


            $registry.on('submit', function() {
                if ($username.val() === '') {
                    $cuo.eq(0).show();
                    $input_2.eq(0).html('用户名不能为空').css('color', 'red');
                    $userflag = false;
                }
                if ($password.val() === '') {
                    $cuo.eq(1).show();
                    $input_2.eq(1).html('密码不能为空').css('color', 'red');
                    $userflag = false;
                    $passflag = false;
                }
                if ($identity.val() === '') {
                    $cuo.eq(2).show();
                    $input_2.eq(2).html('身份证号码不能为空').css('color', 'red');
                    $userflag = false;
                    $idtflag = false;
                }
                if ($mobile.val() === '') {
                    $cuo.eq(3).show();
                    $input_2.eq(3).html('手机号码不能为空').css('color', 'red');
                    $userflag = false;
                    $mobileflag = false;
                }
                if (!$userflag || !$mobileflag || !$passflag || !$idtflag) {
                    return false;
                }
            });
        }
    }
});