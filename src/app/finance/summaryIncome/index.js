
// var ViewModel = require('VueModel').derive();

// ViewModel.prototype.replace = true;
// ViewModel.prototype.template = require('./index.html');

// module.exports = ViewModel();

module.exports = {
    template: require('./index.html'),
    replace: true,
    ready: function () {
        var start = new Date();
        $.parser.parse();
        var end = new Date();
        console.log(end - start);
    }
};
