/*
 * 版 本 NSAYCFrameWork V1.1.0 爱养车开发框架(http://www.NSAYC.cn)
 * Copyright (c) 2013-2017 广州市爱养车汽车服务有限公司
 * 创建人：爱养车-前端开发组
 * 日 期：2017.04.11
 * 描 述：区域管理	
 */
var parentId = request('parentId');

var keyValue = '';
var acceptClick;
var bootstrap = function ($, learun) {
    "use strict";
    var selectedRow = NSAYC.frameTab.currentIframe().selectedRow;

    var page = {
        init: function () {
            page.initData();
        },
        initData: function () {
            if (!!selectedRow) {
                keyValue = selectedRow.F_AreaId;
                $('#form').lrSetFormData(selectedRow);
            }
        }
    };
    // 保存数据
    acceptClick = function (callBack) {
        if (!$('#form').lrValidform()) {
            return false;
        }
        var postData = $('#form').lrGetFormData(keyValue);
        postData["F_ParentId"] = parentId;
        $.lrSaveForm(top.$.rootUrl + '/SystemModule/Area/SaveForm?keyValue=' + keyValue, postData, function (res) {
            // 保存成功后才回调
            if (!!callBack) {
                callBack();
            }
        });
    };
    page.init();
}