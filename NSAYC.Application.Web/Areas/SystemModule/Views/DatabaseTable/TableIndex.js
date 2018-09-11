﻿/*
 * 版 本 NSAYCFrameWork V1.1.0 爱养车开发框架(http://www.NSAYC.cn)
 * Copyright (c) 2013-2017 广州市爱养车汽车服务有限公司
 * 创建人：爱养车-前端开发组
 * 日 期：2017.04.17
 * 描 述：自定义查询
 */
var tableName = request('tableName');
var databaseLinkId = request('databaseLinkId');

var bootstrap = function ($, learun) {
    "use strict";
   
    var fieldData;

    var page = {
        init: function () {
            page.bind();
        },
        bind: function () {
            //获取字段数据
            NSAYC.httpAsync('GET', top.$.rootUrl + '/SystemModule/DatabaseTable/GetFieldList', { databaseLinkId: databaseLinkId, tableName: tableName }, function (data) {
                fieldData = data;
                $('#field').lrselectRefresh({
                    data: fieldData
                });
                var headData = [];

                for (var i = 0, l = data.length; i < l; i++) {
                    var item = data[i];
                    var point = { label: item.f_remark, name: item.f_column.toLowerCase(), width: 150, align: "left" };
                    headData.push(point);
                }
                console.log(headData);

                $('#girdtable').jfGrid({
                    url: top.$.rootUrl + '/SystemModule/DatabaseTable/GetTableDataList',
                    headData: headData,
                    isPage: true
                });
                page.search();
            });

            // 功能选择
            $('#field').lrselect({
                title: 'f_column',
                text: 'f_remark',
                value:'f_column',
                maxHeight: 300,
                allowSearch: true
            });

            $('#logic').lrselect({
                maxHeight: 300
            });

            // 查询
            $('#btn_Search').on('click', function () {
                page.search();
            });
        },
        search: function () {
            var param = {};
            param.databaseLinkId = databaseLinkId;
            param.tableName = tableName;

            param.field = $('#field').lrselectGet();
            param.logic = $('#logic').lrselectGet();

            param.keyword = $('#keyword').val();

            $('#girdtable').jfGridSet('reload', { param: param });
        }
    };

    page.init();
}

