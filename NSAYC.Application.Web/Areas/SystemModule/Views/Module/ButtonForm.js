/*
 * 版 本 NSAYCFrameWork V1.1.0 爱养车开发框架(http://www.NSAYC.cn)
 * Copyright (c) 2013-2017 广州市爱养车汽车服务有限公司
 * 创建人：爱养车-前端开发组
 * 日 期：2017.04.05
 * 描 述：功能按钮模块	
 */
var parentId = request('parentId');

var buttonlist = top.layer_form.buttonlist;
var currentBtnRow = top.layer_form.currentBtnRow;
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
            var buttonTree = $.lrtree.treeTotree(buttonlist, 'F_ModuleButtonId', 'F_FullName', 'F_EnCode', false, 'jfGrid_ChildRows');
            $('#F_ParentId').lrselect({
                data: buttonTree,
                type: 'tree'
            }).lrselectSet(parentId);
        },
        initData: function () {
            if (!!currentBtnRow) {
                $('#form').lrSetFormData(currentBtnRow);
            }
        }
    };
    // 保存数据
    acceptClick = function (callBack) {
        if (!$('#form').lrValidform()) {
            return false;
        }
        var data = $('#form').lrGetFormData();
        if (data["F_ParentId"] == '' || data["F_ParentId"] == '&nbsp;') {
            data["F_ParentId"] = '0';
        }
        else if (data["F_ParentId"] == data['F_ModuleButtonId']) {
            NSAYC.alert.error('上一级不能是自己本身');
            return false;
        }
        if (!!callBack) {
            callBack(data);
        }
        return true;
    };

    page.init();
}