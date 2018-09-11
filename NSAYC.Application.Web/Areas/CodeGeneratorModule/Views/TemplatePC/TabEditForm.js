/*
 * 版 本 NSAYCFrameWork V1.1.0 爱养车开发框架(http://www.NSAYC.cn)
 * Copyright (c) 2013-2017 广州市爱养车汽车服务有限公司
 * 创建人：爱养车-前端开发组
 * 日 期：2017.04.11
 * 描 述：选项卡添加	
 */
var acceptClick;
var bootstrap = function ($, learun) {
    "use strict";
    var selectedRow = top.layer_TabEditIndex.selectedRow;

    var page = {
        init: function () {
            page.initData();
        },
        initData: function () {
            if (!!selectedRow) {
                $('#form').lrSetFormData(selectedRow);
            }
        }
    };
    // 保存数据
    acceptClick = function (callBack) {
        if (!$('#form').lrValidform()) {
            return false;
        }
        var formData = $('#form').lrGetFormData();
        formData.id = formData.id || NSAYC.newGuid();
        formData.value = formData.id;
        formData.isexpand = false;
        formData.complete = true;

        if (!!selectedRow) {
            formData.componts = selectedRow.componts;
        }
        else {
            formData.componts = [];
        }
        

        callBack(formData);
        return true;
    };
    page.init();
}