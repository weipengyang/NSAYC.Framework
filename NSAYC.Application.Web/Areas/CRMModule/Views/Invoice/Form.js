/*
 * 版 本 NSAYCFrameWork V1.1.0 爱养车开发框架(http://www.NSAYC.cn)
 * Copyright (c) 2013-2017 广州市爱养车汽车服务有限公司
 * 创建人：爱养车-前端开发组
 * 日 期：2017.04.18
 * 描 述：客户开票信息管理	
 */

var acceptClick;
var keyValue = '';
var bootstrap = function ($, learun) {
    "use strict";
    var customerName = '';

    var selectedRow = NSAYC.frameTab.currentIframe().selectedRow;
    var page = {
        init: function () {
            page.bind();
            page.initData();
        },
        bind: function () {

            //客户名称
            $('#F_CustomerId').lrselect({
                url: '/CRMModule/Customer/GetList',
                maxHeight: 230,
                value: "F_CustomerId",
                text: "F_FullName",
                select: function (item) {
                    customerName = item.F_FullName;
                }
            });


        },
        initData: function () {
            if (!!selectedRow) {
                keyValue = selectedRow.F_InvoiceId;
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
        postData["F_CustomerName"] = customerName;
        $.lrSaveForm(top.$.rootUrl + '/CRMModule/Invoice/SaveForm?keyValue=' + keyValue, postData, function (res) {
            // 保存成功后才回调
            if (!!callBack) {
                callBack();
            }
        });
    };
    page.init();
}