/**
 * @author gejiawen
 * @date 2015/3/17
 */

!(function (name, factory) {
    if (typeof define === "function" && define.amd) {
        define(name, factory);
    } else if (typeof module === "object" && module.exports) {
        module.exports = factory();
    } else {
        this[name] = factory();
    }
})('bullhead', function () {
    /**
     * Add thousand-bit separators to a number value.
     *
     * `precision` and `unit` is optional,
     *
     * Examples:
     *
     *      ts(12000);              -> '12,000'
     *      ts('12000');            -> '12,000'
     *      ts(12000.332, 3);       -> '12,000.332'
     *      ts(12000.332, 2, '￥'); -> '￥12,000.33'
     *
     * @param {Number|String} value
     * @param {String} [precision] - confirm the precision of decimal, maybe have a round operation.
     * @param {String} [unit] - add a extra identifier, maybe about economy, '$' or '￥' etc.
     * @returns {String} formatted-string
     *
     * @api public
     * */

    function bullhead(value, precision, unit) {
        if (!value || /[^0-9\.]/.test(value)) {
            return "Invalid value, need a number.";
        }

        if (precision && !/^\d+$/.test(precision.toString())) {
            return "Invalid precision, need a integer number.";
        }

        value = value.toString();
        precision = parseInt(precision) || 2;
        unit = unit || '';
        value = value.split('.');

        var integer = value[0],
            decimal = value[1];

        if (decimal) {
            decimal = (new Number(parseFloat('0.' + decimal))).toFixed(precision);
            decimal = decimal.split('.')[1];
        } else {
            var str = '';
            for (var i = 0; i < precision; i++) {
                str += '0'
            }
            decimal = str;
        }

        // 12000.00 -> 12000,00
        value = integer + '.' + decimal;
        value = value.replace('.', ',');

        // 12000,00 -> 12,000,00
        var reg = /(\d)(\d{3},)/;
        while (reg.test(value)) {
            value = value.replace(reg, '$1,$2');
        }

        // 12,000,00 -> 12,000.00
        reg = new RegExp(',(\\d{' + precision + '})$');
        value = value.replace(reg, ".$1");

        value = unit ? (unit + value) : value;
        return value;
    }

    return bullhead;

});