/*
 * 版 本 NSAYCFrameWork V1.1.0 爱养车开发框架(http://www.NSAYC.cn)
 * Copyright (c) 2013-2017 广州市爱养车汽车服务有限公司
 * 创建人：爱养车-前端开发组
 * 日 期：2017.04.18
 * 描 述：岗位添加	
 */
var flag = request('flag');
var acceptClick;
var bootstrap = function ($, learun) {
    "use strict";
    var page = {
        init: function () {
            page.bind();
        },
        bind: function () {
            $('#auditorId').lrformselect({
                placeholder: '请选择岗位',
                layerUrl: top.$.rootUrl + '/OrganizationModule/Post/SelectForm',
                layerUrlH: 500,
                dataUrl: top.$.rootUrl + '/OrganizationModule/Post/GetEntityName'
            });
            $('#condition').lrselect({// 限制条件1.同一个部门2.同一个公司
                data: [{ id: '1', text: '同一个部门' }, { id: '2', text: '同一个公司' }]
            });
            if (flag == 1) {
                $('#condition').parent().remove();
            }
        }
    };
    // 保存数据
    acceptClick = function (callBack) {
        if (!$('#form').lrValidform()) {
            return false;
        }
        var formData = $('#form').lrGetFormData();
        formData.auditorName = $('#auditorId').find('span').text();
        formData.type = '1';//审核者类型1.岗位2.角色3.用户
        callBack(formData);
        return true;
    };
    page.init();
}