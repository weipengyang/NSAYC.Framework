/*
 * 版 本 NSAYCFrameWork V1.1.0 爱养车开发框架(http://www.NSAYC.cn)
 * Copyright (c) 2013-2017 广州市爱养车汽车服务有限公司
 * 创建人：爱养车-前端开发组
 * 日 期：2017.04.17
 * 描 述：自定义表单预览	
 */
var keyValue = request('keyValue');
var schemeInfoId = request('schemeInfoId');
var schemeId = request('schemeId');

var bootstrap = function ($, learun) {
    "use strict";
    var formData;
    var page = {
        init: function () {
            if (!!schemeInfoId) {
                $.lrSetForm(top.$.rootUrl + '/FormModule/Custmerform/GetFormData?keyValue=' + schemeInfoId, function (data) {//
                    formData = JSON.parse(data.schemeEntity.F_Scheme);
                    $('body').lrCustmerFormRender(formData.data);
                });
            }
            else if (!!schemeId) {
                $.lrSetForm(top.$.rootUrl + '/FormModule/Custmerform/GetSchemeEntity?keyValue=' + schemeId, function (res) {//
                    formData = JSON.parse(res.F_Scheme);
                    $('body').lrCustmerFormRender(formData.data);
                });
            }
            else if (!!keyValue) {
                formData = top[keyValue];
                $('body').lrCustmerFormRender(formData);
            }
        }
    };
    page.init();
}