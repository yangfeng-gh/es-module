require.config({　
    baseUrl: "lib",　　　
    paths: {　　　　　　
        "jquery": "jquery-1.8.3",
        "underscore": "underscore-min",
        "backbone": "backbone-min"　　　　
    }
});

var math = require('../modules/math');

require(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
    $("p").insertAfter("#foo");
    $(function(){
        $('#input').on('keyup', function(){
            $('#output').text($('#input').val());
        })
    });
});
