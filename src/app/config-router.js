var VueRouter = require('vue-router');

var configRouter = {
    '/contract/updateFrame': {
        component: function (resolve) {
            require(['./contract/updateFrame'], resolve);
        }
    },
    '/finance/summaryIncome': {
        component: function (resolve) {
            require(['./finance/summaryIncome'], resolve);
        }
    },
    '/dmap/task': {
        component: function (resolve) {
            require(['./dmap/task'], resolve);
        }
    }
};


Vue.use(VueRouter);


var router = new VueRouter({
    // history: true,
    saveScrollPosition: true
});

router.map(configRouter);

var App = Vue.extend({});
// var App = Vue.extend(require('./contract/updateFrame'));
router.start(App, '#app');

// just for debugging
window.router = router;
