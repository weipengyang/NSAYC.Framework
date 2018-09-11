/* * 版 本 NSAYCFrameWork V1.1.0 爱养车开发框架(http://www.NSAYC.cn)
 * Copyright (c) 2013-2017 广州市爱养车汽车服务有限公司
 * 创建人：超级管理员
 * 日  期：2017-12-12 11:52
 * 描  述：消息策略
 */
var selectedRow;
var refreshGirdData;
var bootstrap = function ($, learun) {
    "use strict";
    var page = {
        init: function () {
            page.initGird();
            page.bind();
        },
        bind: function () {
            // 查询
            $('#btn_Search').on('click', function () {
                var keyword = $('#txt_Keyword').val();
                page.search({ keyword: keyword });
            });
            // 刷新
            $('#lr_refresh').on('click', function () {
                location.reload();
            });
            // 新增
            $('#lr_add').on('click', function () {
                selectedRow = null;
                NSAYC.layerForm({
                    id: 'form',
                    title: '新增',
                    url: top.$.rootUrl + '/SystemModule/DbField/Form',
                    width: 450,
                    height: 300,
                    callBack: function (id) {
                        return top[id].acceptClick(refreshGirdData);
                    }
                });
            });
            // 编辑
            $('#lr_edit').on('click', function () {
                var keyValue = $('#girdtable').jfGridValue('F_Id');
                selectedRow = $('#girdtable').jfGridGet('rowdata');
                if (NSAYC.checkrow(keyValue)) {
                    NSAYC.layerForm({
                        id: 'editform',
                        title: '编辑',
                        url: top.$.rootUrl + '/SystemModule/DbField/Form?keyValue=' + keyValue,
                        width: 450,
                        height: 300,
                        callBack: function (id) {
                            return top[id].acceptClick(refreshGirdData);
                        }
                    });
                }
            });
            // 删除
            $('#lr_delete').on('click', function () {
                var keyValue = $('#girdtable').jfGridValue('F_Id');
                if (NSAYC.checkrow(keyValue)) {
                    NSAYC.layerConfirm('是否确认删除该项！', function (res) {
                        if (res) {
                            NSAYC.deleteForm(top.$.rootUrl + '/SystemModule/DbField/DeleteForm', { keyValue: keyValue }, function () {
                                refreshGirdData();
                            });
                        }
                    });
                }
            });
        },
        initGird: function () {
            $('#girdtable').lrAuthorizeJfGrid({
                url: top.$.rootUrl + '/SystemModule/DbField/GetPageList',
                headData: [
                    { label: '列名', name: 'F_Name', width: 150, align: "left" },
                    { label: '描述', name: 'F_Remark', width: 150, align: "left" },
                  
                    {
                        label: '数据类型', name: 'F_DataType', width: 80, align: "center",
                        formatterAsync: function (callback, value, row) {
                            NSAYC.clientdata.getAsync('dataItem', {
                                key: value,
                                code: 'DbFieldType',
                                callback: function (_data) {
                                    callback(_data.text);
                                }
                            });
                        }
                    },
                    { label: '字段长度', name: 'F_Length', width: 80, align: "center" },
                    { label: '创建人', name: 'F_CreateUserName', width: 100, align: "center" },
                    {
                        label: "创建时间", name: "F_CreateDate", width: 120, align: "center",
                        formatter: function (cellvalue) {
                            return NSAYC.formatDate(cellvalue, 'yyyy-MM-dd hh:mm');
                        }
                    },
                ],
                mainId: 'F_Id',
                reloadSelected: true,
                isPage: true,
                sidx: 'F_CreateDate',
                sord: 'DESC'
            });
            page.search();
        },
        search: function (param) {
            param = param || {};
            $('#girdtable').jfGridSet('reload', { param: { queryJson: JSON.stringify(param) } });
        }
    };
    refreshGirdData = function () {
        page.search();
    };
    page.init();
}
