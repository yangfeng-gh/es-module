require.config({　
    baseUrl: "lib",　　　
    paths: {　　　　　　
        "jquery": "jquery-1.8.3",
        "math": '../math',
        'jquery.scrollmagic': 'jquery.scrollmagic'
    },
    shim: {　　　　
        'jquery.scrollmagic': {　　　　　　
            deps: ['jquery'],
            exports: 'jQuery.fn.scrollmagic'　　　　
        }　　
    }　
});

require(['jquery','../modules/math','jquery.scrollmagic'], function($, math, scrollmagic) {
    console.log(scrollmagic);
    $(function() {
        var m1 = $('#multipier1').val();
        var m2 = $('#multipier2').val();
        console.log(m1, m2);
        $('#product').focus(function() {
            $("p").insertAfter("#foo");
            $(this).val(parseInt(m1) + parseInt(m2));
        });
    });
});
