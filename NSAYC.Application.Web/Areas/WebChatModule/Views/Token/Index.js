/*
 * 版 本 NSAYCFrameWork V1.1.0 爱养车开发框架(http://www.NSAYC.cn)
 * Copyright (c) 2013-2017 广州市爱养车汽车服务有限公司
 * 创建人：爱养车-前端开发组
 * 日 期：2017.04.11
 * 描 述：微信企业号设置	
 */
var bootstrap = function ($, learun) {
    "use strict";

    var page = {
        init: function () {
            $('#btn_RevisePassword').on('click', function () {
                if (!$('#form').lrValidform()) {
                    return false;
                }
                var postData = $('#form').lrGetFormData();
                $.lrSaveForm(top.$.rootUrl + '/WebChatModule/Token/SaveForm', postData, null, true);
            });
        }
    };
    page.init();
}