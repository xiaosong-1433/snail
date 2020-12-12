require.config({
    paths: {
        'jquery': 'https://cdn.bootcdn.net/ajax/libs/jquery/1.12.4/jquery.min',
        'jquery_lazyload': 'https://cdn.bootcdn.net/ajax/libs/jquery.lazyload/1.9.1/jquery.lazyload.min',
        'jquery_cookie': 'https://cdn.bootcdn.net/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min'
    },
    shim: {
        'jquery_lazyload': {
            deps: ['jquery'],
            exports: ['jquery_lazyload']
        },
        'jquery_cookie': {
            deps: ['jquery'],
            exports: ['jquery_cookie']
        }
    }
});


require(['jquery'], function() {
    console.log($('#page').attr('targetpage'));
    let $modulepage = $('#page').attr('targetpage');
    require([$modulepage], function(modulepage) {
        modulepage.init();
    });
});