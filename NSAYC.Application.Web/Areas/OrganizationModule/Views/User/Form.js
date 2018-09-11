/*
 * 版 本 NSAYCFrameWork V1.1.0 爱养车开发框架(http://www.NSAYC.cn)
 * Copyright (c) 2013-2017 广州市爱养车汽车服务有限公司
 * 创建人：爱养车-前端开发组
 * 日 期：2017.04.18
 * 描 述：账号添加	
 */
var companyId = request('companyId');


var acceptClick;
var keyValue = '';
var bootstrap = function ($, learun) {
    "use strict";
    var selectedRow = NSAYC.frameTab.currentIframe().selectedRow;
    var page = {
        init: function () {
            page.bind();
            page.initData();
        },
        bind: function () {
            // 部门
            $('#F_DepartmentId').lrDepartmentSelect({ companyId: companyId});
            // 性别
            $('#F_Gender').lrselect();
            /*检测重复项*/
            $('#F_Account').on('blur', function () {
                $.lrExistField(keyValue, 'F_Account', top.$.rootUrl + '/OrganizationModule/User/ExistAccount');
            });
        },
        initData: function () {
            if (!!selectedRow) {
                keyValue = selectedRow.F_UserId;
                selectedRow.F_Password = "******";
                $('#form').lrSetFormData(selectedRow);
                $('#F_Password').attr('readonly', 'readonly');
                $('#F_Account').attr('readonly', 'readonly');
            }
            else {
                $('#F_CompanyId').val(companyId);
            }
        }
    };
    // 保存数据
    acceptClick = function (callBack) {
        if (!$('#form').lrValidform()) {
            return false;
        }
        var postData = $('#form').lrGetFormData(keyValue);
        if (!keyValue) {
            postData.F_Password = $.md5(postData.F_Password);
        }
        $.lrSaveForm(top.$.rootUrl + '/OrganizationModule/User/SaveForm?keyValue=' + keyValue, postData, function (res) {
            // 保存成功后才回调
            if (!!callBack) {
                callBack();
            }
        });
    };
    page.init();
}