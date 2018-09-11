/*
 * 版 本 NSAYCFrameWork V1.1.0 爱养车开发框架(http://www.NSAYC.cn)
 * Copyright (c) 2013-2017 广州市爱养车汽车服务有限公司
 * 创建人：爱养车-前端开发组
 * 日 期：2017.04.18
 * 描 述：人员选择	
 */
var acceptClick;
var dfopid = request('dfopid');
var userName = '';
var bootstrap = function ($, learun) {
    "use strict";
    var page = {
        init: function () {
            page.bind();
        },
        bind: function () {
            $('#userId').lrselect({
                value: 'F_UserId',
                text: 'F_RealName',
                title: 'F_RealName',
                // 展开最大高度
                maxHeight: 110,
                // 是否允许搜索
                allowSearch: true,
                select: function (item) {
                    userName = item.F_RealName;
                }
            });
            $('#department').lrDepartmentSelect({
                maxHeight: 150
            }).on('change', function () {
                var value = $(this).lrselectGet();
                $('#userId').lrselectRefresh({
                    url: top.$.rootUrl + '/OrganizationModule/User/GetList',
                    param: { departmentId: value }
                });
            });
        }
    };
    // 保存数据
    acceptClick = function (callBack) {
        if (!$('#form').lrValidform()) {
            return false;
        }
        var formData = $('#form').lrGetFormData();
        var postitem = { value: formData.userId, text: userName };
        callBack(postitem, dfopid);
        return true;
    };
    page.init();
}