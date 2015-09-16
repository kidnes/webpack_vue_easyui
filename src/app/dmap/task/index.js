
var ViewModel = {
    template: require('./index.html'),
    data: function () {
        return {
            title: 'todos',
            message: 'hello Vue',
            todos: [
                {
                    done: true,
                    content: 'Learn JavaScript'
                },
                {
                    done: false,
                    content: 'Learn vue.js'
                }
            ]
        }
    },
    replace: true
};

module.exports = require('VueModel').getComponent(ViewModel);
