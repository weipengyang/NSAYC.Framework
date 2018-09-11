/*
 * 版 本 NSAYCFrameWork V1.1.0 爱养车开发框架(http://www.NSAYC.cn)
 * Copyright (c) 2013-2017 广州市爱养车汽车服务有限公司
 * 创建人：爱养车-前端开发组
 * 日 期：2017.04.11
 * 描 述：区域管理	
 */
var keyValue = '';
var acceptClick;
var moduleId = request('moduleId');
var bootstrap = function ($, learun) {
    "use strict";
    var selectedRow = NSAYC.frameTab.currentIframe().selectedRow;
    var btnName = '';
    var page = {
        init: function () {
            page.bind();
            page.initData();
        },
        bind: function () {
            $('#F_ModuleBtnId').lrselect({
                url: top.$.rootUrl + '/SystemModule/Module/GetButtonListNoAuthorize',
                param: {
                    moduleId: moduleId
                },
                value: 'F_EnCode',
                text: 'F_FullName',
                select: function (item) {
                    if (!!item) {
                        btnName = item.F_FullName
                    }
                    else {
                        btnName = '';
                    }

                },
                maxHeight:170
            });
        },
        initData: function () {
            $('#F_ModuleId').val(moduleId);
            if (!!selectedRow) {
                $('#F_ModuleBtnId').lrselectRefresh({
                    param: {
                        moduleId: selectedRow.F_ModuleId
                    }
                });
                keyValue = selectedRow.F_Id;
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
        postData.F_BtnName = btnName;
        $.lrSaveForm(top.$.rootUrl + '/SystemModule/ExcelExport/SaveForm?keyValue=' + keyValue, postData, function (res) {
            // 保存成功后才回调
            if (!!callBack) {
                callBack();
            }
        });
    };
    page.init();
}