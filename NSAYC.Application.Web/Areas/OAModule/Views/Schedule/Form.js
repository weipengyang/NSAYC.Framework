/*
 * 版 本 NSAYCFrameWork V1.1.0 爱养车开发框架(http://www.NSAYC.cn)
 * Copyright (c) 2013-2017 广州市爱养车汽车服务有限公司
 * 创建人：爱养车-前端开发组
 * 日 期：2017.11.11
 * 描 述：日程管理
 */
var acceptClick;
var bootstrap = function ($, learun) {
    "use strict";
    var page = {
        init: function () {
            page.bind();
            page.initData();
        },
        bind: function () {
            //开始时间
            $('#F_StartTime').lrselect({
                maxHeight: 150
            });
            //结束时间
            $('#F_EndTime').lrselect({
                maxHeight: 150
            });
        },
        initData: function () {
            $("#F_StartDate").val(request('startDate'));
            $("#F_StartTime").lrselectSet(request('startTime'));
        }
    };
    acceptClick = function () {
        if (!$('#form').lrValidform()) {
            return false;
        }
        var postData = $('#form').lrGetFormData("");
        $.lrSaveForm(top.$.rootUrl + '/OAModule/Schedule/SaveForm?keyValue=', postData, function (res) {
            NSAYC.frameTab.currentIframe().location.reload();
        });
    }
    page.init();
}


