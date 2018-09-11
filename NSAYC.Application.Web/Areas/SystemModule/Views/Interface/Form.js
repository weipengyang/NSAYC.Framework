/*
 * 版 本 NSAYCFrameWork V1.1.0 爱养车开发框架(http://www.NSAYC.cn)
 * Copyright (c) 2013-2017 广州市爱养车汽车服务有限公司
 * 创建人：爱养车-前端开发组
 * 日 期：2017.04.11
 * 描 述：接口管理	
 */
var keyValue = request('keyValue');

var acceptClick;
var currentColRow = null;
var bootstrap = function ($, learun) {
    "use strict";

    var page = {
        init: function () {
            page.bind();
            page.initData();
        },
        bind: function () {
            $('#lr_add_field').on('click', function () {
                currentColRow = null;
                NSAYC.layerForm({
                    id: 'FieldForm',
                    title: '添加',
                    url: top.$.rootUrl + '/SystemModule/Interface/FieldForm',
                    width: 450,
                    height: 310,
                    callBack: function (id) {
                        return top[id].acceptClick(function (data) {
                            $('#girdtable').jfGridSet('addRow', { row: data });
                        });
                    }
                });
            });
            $('#lr_edit_field').on('click', function () {
                currentColRow = $('#girdtable').jfGridGet('rowdata');
                var _id = currentColRow ? currentColRow.fieldName : '';
                if (NSAYC.checkrow(_id)) {
                    NSAYC.layerForm({
                        id: 'FieldForm',
                        title: '修改',
                        url: top.$.rootUrl + '/SystemModule/Interface/FieldForm',
                        width: 450,
                        height: 310,
                        callBack: function (id) {
                            return top[id].acceptClick(function (data) {
                                $('#girdtable').jfGridSet('updateRow', { row: data });
                            });
                        }
                    });
                }

            });
            $('#lr_delete_field').on('click', function () {
                currentColRow = null;
                var row = $('#girdtable').jfGridGet('rowdata');
                var _id = row ? row.fieldName : '';
                if (NSAYC.checkrow(_id)) {
                    NSAYC.layerConfirm('是否确认删除该项！', function (res, index) {
                        if (res) {
                            $('#girdtable').jfGridSet('removeRow');
                            top.layer.close(index); //再执行关闭  
                        }
                    });
                }
            });

            $('#girdtable').jfGrid({
                headData: [
                    { label: "字段名称", name: "fieldName", width: 160, align: "left" },
                    { label: "字段注释", name: "fieldDescribe", width: 160, align: "left" },
                    {
                        label: "字段类型", name: "fieldType", width: 100, align: "left",
                        formatterAsync: function (callback, value, row) {
                            NSAYC.clientdata.getAsync('dataItem', {
                                key: value,
                                itemCode: 'FieldType',
                                callback: function (item) {
                                    callback(item.F_ItemName);
                                }
                            });
                        }
                    }
                ]
            });
        },
        initData: function () {
            if (!!keyValue) {
                $.lrSetForm(top.$.rootUrl + '/SystemModule/Interface/GetEntity?keyValue=' + keyValue, function (data) {
                    $('#form').lrSetFormData(data);
                    var formatdata = JSON.parse(data.F_FieldsJson);
                    $('#girdtable').jfGridSet('refreshdata', { rowdatas: formatdata });
                });
            }

        }
    };
    // 保存数据
    acceptClick = function (callBack) {
        if (!$('#form').lrValidform()) {
            return false;
        }
        var postData = $('#form').lrGetFormData(keyValue);
        var formatdata = $('#girdtable').jfGridGet('rowdatas');
        if (formatdata.length == 0) {
            NSAYC.alert.error('请设置字段！');
            return false;
        }
        postData.F_FieldsJson = JSON.stringify(formatdata);
        $.lrSaveForm(top.$.rootUrl + '/SystemModule/Interface/SaveForm?keyValue=' + keyValue, postData, function (res) {
            if (!!callBack) {
                callBack();
            }
        });
    };
    page.init();
}