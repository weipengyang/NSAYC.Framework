/*
 * 版 本 NSAYCFrameWork V1.1.0 爱养车开发框架(http://www.NSAYC.cn)
 * Copyright (c) 2013-2017 广州市爱养车汽车服务有限公司
 * 创建人：爱养车-前端开发组
 * 日 期：2017.11.11
 * 描 述：新闻中心
 */
var acceptClick;
var keyValue = '';
var bootstrap = function ($, learun) {
    "use strict";
    var selectedRow = NSAYC.frameTab.currentIframe().selectedRow;
    var ue;
    var page = {
        init: function () {
            page.bind();
            page.initData();
        },
        bind: function () {
            //新闻栏目
            $('#F_CategoryId').lrDataItemSelect({ code: 'NewsCategory', maxHeight: 230 });
            //内容编辑器
            ue = UE.getEditor('editor');
        },
        initData: function () {
            if (!!selectedRow) {
                keyValue = selectedRow.F_NewsId;
                $('#form').lrSetFormData(selectedRow);
                $("#F_ReleaseTime").val(NSAYC.formatDate(selectedRow.F_ReleaseTime, 'yyyy/MM/dd hh:mm'));
                $.lrSetForm(top.$.rootUrl + '/OAModule/News/GetEntity?keyValue=' + keyValue, function (data) {
                    setTimeout(function () {
                        ue.setContent(data.F_NewsContent);
                    }, 100);
                });
            }
        }
    };
    acceptClick = function (callBack) {
        if (!$('#form').lrValidform()) {
            return false;
        }
        var postData = $('#form').lrGetFormData(keyValue);
        postData["F_NewsContent"] = ue.getContent(null, null, true);
        $.lrSaveForm(top.$.rootUrl + '/OAModule/News/SaveForm?keyValue=' + keyValue, postData, function (res) {
            // 保存成功后才回调
            if (!!callBack) {
                callBack();
            }
        });
    }

    page.init();
}


