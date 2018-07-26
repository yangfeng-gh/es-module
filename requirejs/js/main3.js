require.config({　
    paths: {　　　　　　
        "jquery": "../lib/jquery-1.8.3",
        "text": "../lib/text"
    }
});

// text插件读取文件会导致页面重绘，因此会出现页面数据反弹
require(['text!../assets/review.txt', 'jquery'], function(review, $) {
    $(function() {
        $('#readFile').on('click', function() {
            $('#input').val(review);
        })
    })
});
