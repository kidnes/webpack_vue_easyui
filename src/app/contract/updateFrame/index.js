require('./index.styl');

var dao = require('./dao');

function init() {
    initDom();
    initEvent();
    initDao();
}

function initDom() {
    $('#salesPolicyName').combobox({'loader': dao.queryManager});
    $('#btnSearch').click(onBtnSearch);
}

function initEvent() {

}

function initDao() {
}

function onBtnSearch() {
    dao.updateByQuery( function (data) {
        $('#updateTable').datagrid({'data': data});
    });
}

var ViewModel = {
    template: require('./index.html'),
    ready: init
};

module.exports = require('VueModel').getComponent(ViewModel);
