/*
 * 版 本 NSAYCFrameWork V1.1.0 爱养车开发框架(http://www.NSAYC.cn)
 * Copyright (c) 2013-2017 广州市爱养车汽车服务有限公司
 * 创建人：爱养车-前端开发组
 * 日 期：2017.04.11
 * 描 述：数据库管理	
 */
var keyValue = "";
var acceptClick;
var bootstrap = function ($, learun) {
    "use strict";
    var selectedRow = NSAYC.frameTab.currentIframe().selectedRow;
    var page = {
        init: function () {
            page.bind();
            page.initData();
        },
        bind: function () {
            $('#F_DbType').lrDataItemSelect({ code: 'DbVersion' });

            $('#lr_test').on('click', function () {
                var dbType = $('#F_DbType').lrselectGet();
                if (!dbType) {
                    NSAYC.alert.error('请选择数据库类型');
                    return false;
                }
                var connection = $('#F_DbConnection').val();
                if (!connection) {
                    NSAYC.alert.error('请填写数据库连接串');
                    return false;
                }
                $.lrPostForm(top.$.rootUrl + '/SystemModule/DatabaseLink/TestConnection', { connection: connection, dbType: dbType, keyValue: keyValue });
            });
        },
        initData: function () {
            if (!!selectedRow) {
                keyValue = selectedRow.F_DatabaseLinkId;
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
        $.lrSaveForm(top.$.rootUrl + '/SystemModule/DatabaseLink/SaveForm?keyValue=' + keyValue, postData, function (res) {
            // 保存成功后才回调
            if (!!callBack) {
                callBack();
            }
        });
    };
    page.init();
}