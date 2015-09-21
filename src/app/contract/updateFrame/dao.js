exports.queryList = function (params, success) {
    var options = {
        method: 'post',
        url: '/contract/updateframe/list'
    };
    $.ajax.post(options.url, params, success);
};

exports.updateByQuery = function (callback) {
    $.ajax({
        url: '/contract/updateframe/list',
        method: 'post',
        data: {
        },
        success: function(json) {
            if (!json || json.length <= 0) {
                return;
            }
            json = JSON.parse(json);
            
            if (!json.data || !json.data.dataList) {
                return;
            } 

            var data = json.data.dataList;
            callback(data);
        }
    });
};

exports.updateByContractId = function (params, success) {
    var options = {
        method: 'post',
        url: '/contract/updateframe/updatebycontractid'
    };
    $.ajax.post(options.url, params, success);
};

exports.queryManager = function(param, callback) {
    if (!param.q) {
        return;
    }


    $.ajax({
        url: '/kv/spec/hint/policy/',
        method: 'post',
        data: {
            policyName: param.q
        },
        success: function(json) {
            if (!json || json.length <= 0) {
                return;
            }
            json = JSON.parse(json);
            
            if (!json.data || !json.data.dataList) {
                return;
            } 

            var data = json.data.dataList;
            callback(data);
        }
    });
};