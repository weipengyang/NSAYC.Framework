﻿/*
 * 爱养车开发框架(http://www.learun.cn)
 * Copyright (c) 2013-2017 上海爱养车信息技术有限公司
 * 创建人：爱养车-前端开发组
 * 日 期：2017.04.11
 * 描 述：列表字段添加	
 */
var id = request('id');

var acceptClick;
var bootstrap = function ($, learun) {
    "use strict";
    var formscheme = top.layer_Form.formscheme;
    var formFields = top.layer_Form.formFields;
    var colData = top.layer_Form.colData;


    var fieldName = '';
    var compontId = '';

    var page = {
        init: function () {
            page.bind();
            page.initData();
        },
        bind: function () {
            // 选择字段
            if (formFields.length == 0) {
                for (var i = 0, l = formscheme.data.length; i < l; i++) {
                    var componts = formscheme.data[i].componts;
                    for (var j = 0, jl = componts.length; j < jl; j++) {
                        var item = componts[j];
                        if (item.type != "girdtable") {
                            formFields.push(item);
                        }
                    }
                }
            }
            $('#fieldId').lrselect({
                text: 'title',
                value: 'field',
                data: formFields,
                allowSearch: true,
                maxHeight: 140,
                select: function (item) {
                    fieldName = item.title;
                    compontId = item.id;
                }
            });
            // 所在行所占比
            $('#align').lrselect().lrselectSet('left');
        },
        initData: function () {
            if (!!id) {
                for (var i = 0, l = colData.length; i < l; i++) {
                    if (colData[i].id == id) {
                        $('#form').lrSetFormData(colData[i]);
                        break;
                    }
                }
            }
        }
    };
    // 保存数据
    acceptClick = function (callBack) {
        if (!$('#form').lrValidform()) {
            return false;
        }
        var postData = $('#form').lrGetFormData();
        postData.id = id || learun.newGuid();
        postData.fieldName = fieldName;
        postData.compontId = compontId;
        callBack(postData);
        return true;
    };
    page.init();
}