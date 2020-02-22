exports.min = function min(array) {
    if (!arguments.length || !array.length) return 0;
    return Math.min(...array);
};

exports.max = function max(array) {
    if (!arguments.length || !array.length) return 0;
    return Math.max(...array);
};

exports.avg = function avg(array) {
    if (!arguments.length || !array.length) return 0;
    return array.reduce((acc, value) => (acc += value), 0) / array.length;
};
