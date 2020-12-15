define([], () => {
    return {
        init: function() {
            const $registry = $('#registry');
            const $username = $('#username');
            const $password = $('#password');
            const $confirmPassword = $('#confirmPassword');
            const $identity = $('#identity');
            const $input_1 = $('.input_1');
            const $input_2 = $('.input_2');
            const $collection = $('.collection');

            $collection.on('focus', function() {
                $input_2.hide();
            });

            $collection.on('blur', function() {
                $input_2.show();
            });

            // $username.onfocus = function() {

            // };
        }
    }
});