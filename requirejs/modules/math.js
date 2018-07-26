// 无依赖模块可以直接使用对象字面量来定义
define({　　　　　　
    add : function( x, y ){
        return x + y;
    },
    subtract: function(x, y) {
        return x - y;
    },
    multiply: function(x, y) {
        return x * y;
    },
    divide: function(x ,y) {
        return x / y;
    }
});
