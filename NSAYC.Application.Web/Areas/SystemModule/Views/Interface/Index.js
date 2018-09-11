/*
 * 版 本 NSAYCFrameWork V1.1.0 爱养车开发框架(http://www.NSAYC.cn)
 * Copyright (c) 2013-2017 广州市爱养车汽车服务有限公司
 * 创建人：爱养车-前端开发组
 * 日 期：2017.03.22
 * 描 述：接口管理	
 */
var refreshGirdData; // 更新数据
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
                NSAYC.layerForm({
                    id: 'InterfaceForm',
                    title: '添加接口',
                    url: top.$.rootUrl + '/SystemModule/Interface/Form',
                    width: 700,
                    height: 400,
                    callBack: function (id) {
                        return top[id].acceptClick(refreshGirdData);
                    }
                });
            });
            // 编辑
            $('#lr_edit').on('click', function () {
                var keyValue = $('#girdtable').jfGridValue('F_Id');
                if (NSAYC.checkrow(keyValue)) {
                    NSAYC.layerForm({
                        id: 'InterfaceForm',
                        title: '编辑接口',
                        url: top.$.rootUrl + '/SystemModule/Interface/Form?keyValue=' + keyValue,
                        width: 700,
                        height: 400,
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
                            NSAYC.deleteForm(top.$.rootUrl + '/SystemModule/Interface/DeleteForm', { keyValue: keyValue }, function () {
                                refreshGirdData();
                            });
                        }
                    });
                }
            });
        },
        initGird: function () {
            $('#girdtable').lrAuthorizeJfGrid({
                url: top.$.rootUrl + '/SystemModule/Interface/GetPageList',
                headData: [
                    { label: '接口名称', name: 'F_Name', width: 200, align: 'left' },
                    { label: '接口地址', name: 'F_Address', width: 500, align: 'left' }
                ],
                isPage: true,
                mainId: 'F_Id',
                reloadSelected: true
            });
            page.search();
        },
        search: function (param) {
            $('#girdtable').jfGridSet('reload', { param: param });
        }
    };

    // 保存数据后回调刷新
    refreshGirdData = function () {
        page.search();
    }

    page.init();
}


