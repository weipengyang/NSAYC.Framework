/*
 * 版 本 NSAYCFrameWork V1.1.0 爱养车开发框架(http://www.NSAYC.cn)
 * Copyright (c) 2013-2017 广州市爱养车汽车服务有限公司
 * 创建人：爱养车-前端开发组
 * 日 期：2017.04.05
 * 描 述：分类管理	
 */
var parentId = request('parentId');
var selectedRow = top.layer_ClassifyIndex.selectedRow;

var keyValue = '';
var acceptClick;
var bootstrap = function ($, learun) {
    "use strict";

    var page = {
        init: function () {
            page.bind();
            page.initData();
        },
        bind: function () {
            // 上级
            $('#F_ParentId').lrselect({
                url: top.$.rootUrl + '/SystemModule/DataItem/GetClassifyTree',
                type: 'tree',
                allowSearch: true,
                maxHeight:225
            }).lrselectSet(parentId);
            /*检测重复项*/
            $('#F_ItemName').on('blur', function () {
                $.lrExistField(keyValue, 'F_ItemName', top.$.rootUrl + '/SystemModule/DataItem/ExistItemName');
            });
            $('#F_ItemCode').on('blur', function () {
                $.lrExistField(keyValue, 'F_ItemCode', top.$.rootUrl + '/SystemModule/DataItem/ExistItemCode');
            });
        },
        initData: function () {
            if (!!selectedRow) {
                keyValue = selectedRow.F_ItemId || '';
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
        if (postData["F_ParentId"] == '' || postData["F_ParentId"] == '&nbsp;') {
            postData["F_ParentId"] = '0';
        }
        else if (postData["F_ParentId"] == keyValue) {
            NSAYC.alert.error('上级不能是自己本身');
            return false;
        }
        $.lrSaveForm(top.$.rootUrl + '/SystemModule/DataItem/SaveClassifyForm?keyValue=' + keyValue, postData, function (res) {
            // 保存成功后才回调
            if (!!callBack) {
                callBack();
            }
        });
    };

    page.init();
}